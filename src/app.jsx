import React, { useState } from 'react';
import antlr4 from 'antlr4';
import MedicationsLexer from './generated/medicationsLexer';
import MedicationsParser from './generated/medicationsParser';

function translateTiming(token) {
  const text = token.getText().toLowerCase();
  console.log('translateTiming input:', text);
  switch (text) {
    case 'ac': return 'Take before eating';
    case 'pc': return 'Take after eating';
    case 'wc': return 'Take with meals';
    case 'hs': return 'Take before going to sleep';
    case 'qam': return 'Every morning';
    default: return text;
  }
}

function translateDuration(token) {
  const text = token.getText().toLowerCase();
  console.log('translateDuration input:', text);
  const matchDays = text.match(/(?:x\s*|for\s*)?(\d+)\s*(d|day|days)/i);
  const matchWeeks = text.match(/(?:x\s*|for\s*)?(\d+)\s*(w|week|weeks)/i);
  const matchMonths = text.match(/(?:x\s*|for\s*)?(\d+)\s*(mo|m|month|months)/i);
  const matchYears = text.match(/(?:x\s*|for\s*)?(\d+)\s*(y|year|years)/i);
  if (matchDays) {
    const days = parseInt(matchDays[1], 10);
    return `for ${days} day${days > 1 ? 's' : ''}`;
  } else if (matchWeeks) {
    const weeks = parseInt(matchWeeks[1], 10);
    return `for ${weeks} week${weeks > 1 ? 's' : ''}`;
  } else if (matchMonths) {
    const months = parseInt(matchMonths[1], 10);
    return `for ${months} month${months > 1 ? 's' : ''}`;
  } else if (matchYears) {
    const years = parseInt(matchYears[1], 10);
    return `for ${years} year${years > 1 ? 's' : ''}`;
  } else if (text === 'until finished' || text === 'until complete' || text === 'complete course') {
    return 'Take full prescribed course';
  }
  return text;
}

function translateRoute(token) {
  const text = token.getText().toLowerCase();
  console.log('translateRoute input:', text);
  switch (text) {
    case 'po': return 'orally';
    case 'sl': return 'under the tongue';
    case 'buccal': return 'Between gum and cheek';
    case 'pr': return 'rectally';
    case 'pv': return 'Inserted into the vagina';
    case 'top': return 'topically';
    case 'td': return 'Through the skin via patch';
    case 'oph': return 'Into the eye (drops/ointment)';
    case 'otic': return 'Into the ear';
    case 'nasal': return 'Into the nose (spray or drops)';
    case 'inh': return 'inhalation';
    case 'iv': return 'intravenous';
    case 'im': return 'intramuscular';
    case 'sc': return 'Injected under the skin';
    case 'id': return 'intradermal';
    case 'ia': return 'intra-articular';
    case 'it': return 'intrathecal';
    case 'in': return 'intranasal';
    case 'neb': return 'nebulizer';
    case 'qs': return 'a sufficient quantity';
    case 'disp': return 'dispense';
    case 'nr': return 'no refill';
    case 'npo': return 'nothing by mouth';
    case 'otc': return 'over the counter';
    case 'qmon': return 'every monday';
    case 'qtue': return 'every tuesday';
    case 'qwed': return 'every wednesday';
    case 'qthurs': return 'every thursday';
    case 'qfri': return 'every friday';
    case 'qsat': return 'every saturday';
    case 'qsun': return 'every sunday';
    default: return text;
  }
}

function translateSite(token) {
  const text = token.getText().toLowerCase();
  console.log('translateSite input:', text);
  switch (text) {
    case 'os': return 'left eye';
    case 'od': return 'right eye';
    case 'ou': return 'both eyes';
    case 'as': return 'left ear';
    case 'ad': return 'right ear';
    case 'au': return 'both ears';
    case 'nares': return 'Both nasal passages';
    case 'nostril': return 'Usually left or right';
    case 'bu': return 'between cheeks and gums';
    case 'ivp': return 'iv push';
    case 'ivpb': return 'iv piggyback';
    case 'picc': return 'Peripherally Inserted Central Catheter';
    case 'cvc': return 'Central Venous Catheter';
    case 'vg': return 'Ventrogluteal';
    case 'dg': return 'Dorsogluteal';
    case 'vl': return 'Vastus Lateralis';
    case 'b': return 'bulateral';
    case 'un': return 'Unilateral';
    case 'abd': return 'abdomen';
    case 'ue': return 'upper extremity';
    case 'le': return 'left extremity';
    case 'ant': return 'anterior';
    case 'post': return 'posterior';
    case 'lat': return 'lateral';
    case 'med': return 'medial';
    case 'del': return 'deltoid';
    case 'scj': return 'Sternoclavicular Joint';
    default: return text;
  }
}

export default function App() {
  const [shorthand, setShorthand] = useState('');
  const [translation, setTranslation] = useState('');
  const [structuredData, setStructuredData] = useState('');
  const [dispenseQuantity, setDispenseQuantity] = useState('');

  const handleInputChange = (e) => {
    const input = e.target.value;
    setShorthand(input);
    try {
      if (input) {
        const chars = new antlr4.InputStream(input);
        const lexer = new MedicationsLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new MedicationsParser(tokens);
        parser.buildParseTrees = true;
        const tree = parser.prescription();
        const parts1 = []; // For instructions before "then"
        const parts2 = []; // For instructions after "then"
        const structuredList = [];
        let dosageAmount = null;
        let frequencyPerDay = null;
        let durationDays = null;
        let afterThen = false;

        function processInstruction(instruction) {
          for (let child of instruction.children || []) {
            if (!child || !child.getText || child.getText().trim() === '') continue;
            console.log('Context:', child.constructor.name, 'Text:', child.getText());
            if (child.getText().toLowerCase() === 'then') {
              afterThen = true;
              continue;
            }
            if (child instanceof MedicationsParser.DosageContext) {
              const fullText = child.getText().toLowerCase();
              const num = child.NUMBER?.(0)?.getText?.() ?? '';
              const unit = fullText.replace(num, '').replace(/\s+/g, '');
              const unitMap = {
                'tsp': num > 1 ? 'teaspoons' : 'teaspoon',
                'teaspoon': num > 1 ? 'teaspoons' : 'teaspoon',
                'teaspoons': num > 1 ? 'teaspoons' : 'teaspoon',
                'tbsp': num > 1 ? 'tablespoons' : 'tablespoon',
                'tbsps': num > 1 ? 'tablespoons' : 'tablespoon',
                'tablespoon': num > 1 ? 'tablespoons' : 'tablespoon',
                'tablespoons': num > 1 ? 'tablespoons' : 'tablespoon',
                'mg': num > 1 ? 'milligrams' : 'milligram',
                'kg': num > 1 ? 'kilograms' : 'kilogram',
                'mcg': num > 1 ? 'micrograms' : 'microgram',
                'ml': num > 1 ? 'milliliters' : 'milliliter',
                'mg/ml': 'milligrams per milliliter',
                'u/ml': 'units per milliliter',
                'mg/g': 'milligram per gram',
                'mg per ml': 'milligrams per milliliter',
                'mcg/ml': 'microgram per milliliter',
                'mcg per ml': 'mcg/ml',
                'meq': 'mEq',
                'milliequivalents': 'mEq',
                'gtt': num > 1 ? 'drops' : 'drop',
                'drop': num > 1 ? 'drops' : 'drop',
                'drops': num > 1 ? 'drops' : 'drop',
                'tab': num > 1 ? 'tablets' : 'tablet',
                'tabs': num > 1 ? 'tablets' : 'tablet',
                'tablet': num > 1 ? 'tablets' : 'tablet',
                'tablets': num > 1 ? 'tablets' : 'tablet',
                't': num > 1 ? 'tablets' : 'tablet',
                'cap': num > 1 ? 'capsules' : 'capsule',
                'caps': num > 1 ? 'capsules' : 'capsule',
                'capsule': num > 1 ? 'capsules' : 'capsule',
                'capsules': num > 1 ? 'capsules' : 'capsule',
                'c': num > 1 ? 'capsules' : 'capsule',
                'puff': num > 1 ? 'puffs' : 'puff',
                'puffs': num > 1 ? 'puffs' : 'puff',
                'pu': num > 1 ? 'puffs' : 'puff',
                'spray': num > 1 ? 'sprays' : 'spray',
                'sprays': num > 1 ? 'sprays' : 'spray',
                'spr': num > 1 ? 'sprays' : 'spray',
                'patch': num > 1 ? 'patches' : 'patch',
                'patches': num > 1 ? 'patches' : 'patch',
                'pt': num > 1 ? 'patches' : 'patch',
                'pf': num > 1 ? 'puffs' : 'puff',
                'sachet': num > 1 ? 'sachets' : 'sachet',
                'sachets': num > 1 ? 'sachets' : 'sachet',
                'sa': num > 1 ? 'sachets' : 'sachet',
                'v': num > 1 ? 'vials' : 'vial',
                'vials': num > 1 ? 'vials' : 'vial',
                'supp': num > 1 ? 'suppositories' : 'suppository',
                'supps': num > 1 ? 'suppositories' : 'suppository',
                'suppository': num > 1 ? 'suppositories' : 'suppository',
                'suppositories': num > 1 ? 'suppositories' : 'suppository',
                'lz': num > 1 ? 'lozenges' : 'lozenge',
                'str': num > 1 ? 'strips' : 'strip',
                'amp': num > 1 ? 'ampules' : 'ampule',
                'amps': num > 1 ? 'ampules' : 'ampule',
                'ampule': num > 1 ? 'ampules' : 'ampule',
                'ampules': num > 1 ? 'ampules' : 'ampule',
                'injection': num > 1 ? 'injections' : 'injection',
                'u': num > 1 ? 'units' : 'unit',
                'iu': num > 1 ? 'international units' : 'international unit',
                'g': num > 1 ? 'grams' : 'gram',
                'l': num > 1 ? 'litres' : 'litre',
                '%': 'percent',
                'injections': num > 1 ? 'injections' : 'injection'
              };
              if (num && unitMap[unit]) {
                dosageAmount = parseInt(num, 10);
                structuredList.push({ dose: dosageAmount, unit: unitMap[unit] });
              }
              const part = `${num} ${unitMap[unit] || unit}`.trim();
              if (afterThen) parts2.push(part);
              else parts1.push(part);
            } else if (child instanceof MedicationsParser.DurationContext) {
              const text = child.getText().toLowerCase();
              const matchDays = text.match(/(?:x\s*|for\s*)?(\d+)\s*(d|day|days)/i);
              const matchWeeks = text.match(/(?:x\s*|for\s*)?(\d+)\s*(w|week|weeks)/i);
              const matchMonths = text.match(/(?:x\s*|for\s*)?(\d+)\s*(mo|m|month|months)/i);
              const matchYears = text.match(/(?:x\s*|for\s*)?(\d+)\s*(y|year|years)/i);
              if (matchDays) {
                const days = parseInt(matchDays[1], 10);
                durationDays = days;
                structuredList.push({ duration: days, unit: days > 1 ? 'days' : 'day' });
                const part = translateDuration({ getText: () => text });
                if (afterThen) parts2.push(part);
                else parts1.push(part);
              } else if (matchWeeks) {
                const weeks = parseInt(matchWeeks[1], 10);
                durationDays = weeks * 7;
                structuredList.push({ duration: weeks, unit: weeks > 1 ? 'weeks' : 'week' });
                const part = translateDuration({ getText: () => text });
                if (afterThen) parts2.push(part);
                else parts1.push(part);
              } else if (matchMonths) {
                const months = parseInt(matchMonths[1], 10);
                durationDays = months * 30;
                structuredList.push({ duration: months, unit: months > 1 ? 'months' : 'month' });
                const part = translateDuration({ getText: () => text });
                if (afterThen) parts2.push(part);
                else parts1.push(part);
              } else if (matchYears) {
                const years = parseInt(matchYears[1], 10);
                durationDays = years * 365;
                structuredList.push({ duration: years, unit: years > 1 ? 'years' : 'year' });
                const part = translateDuration({ getText: () => text });
                if (afterThen) parts2.push(part);
                else parts1.push(part);
              } else {
                const part = translateDuration({ getText: () => text });
                if (afterThen) parts2.push(part);
                else parts1.push(part);
              }
            } else if (child instanceof MedicationsParser.FrequencyContext) {
              const txt = child.getText().toLowerCase();
              console.log('translateFrequency input:', txt);
              const match = txt.match(/q(\d+)h/);
              const matchPerDay = txt.match(/(\d+)(?:x\/day|x\/d|\sx\/d|\sx\/day)/);
              const matchPerWeek = txt.match(/(\d+)(?:x\/week|x\/w|\sx\/w|\sx\/week)/);
              const matchPerMonth = txt.match(/(\d+)(?:x\/month|x\/m|\sx\/m|\sx\/month)/);
              const matchPerYear = txt.match(/(\d+)(?:x\/year|x\/y|\sx\/y|\sx\/year)/);
              const matchPerHour = txt.match(/(\d+)(?:x\/hour|x\/h|\sx\/h|\sx\/hour)/);
              let part;
              if (match) {
                const hours = parseInt(match[1], 10);
                frequencyPerDay = 24 / hours;
                structuredList.push({ frequency: 1, unit: 'hour' });
                part = `Every ${hours} hours`;
              } else if (matchPerDay) {
                const times = parseInt(matchPerDay[1], 10);
                frequencyPerDay = times;
                structuredList.push({ frequency: times, unit: 'day' });
                part = `${times} time${times > 1 ? 's' : ''} a day`;
              } else if (matchPerWeek) {
                const times = parseInt(matchPerWeek[1], 10);
                frequencyPerDay = times / 7;
                structuredList.push({ frequency: times, unit: 'week' });
                part = `${times} time${times > 1 ? 's' : ''} a week`;
              } else if (matchPerMonth) {
                const times = parseInt(matchPerMonth[1], 10);
                frequencyPerDay = times / 30;
                structuredList.push({ frequency: times, unit: 'month' });
                part = `${times} time${times > 1 ? 's' : ''} a month`;
              } else if (matchPerYear) {
                const times = parseInt(matchPerYear[1], 10);
                frequencyPerDay = times / 365;
                structuredList.push({ frequency: times, unit: 'year' });
                part = `${times} time${times > 1 ? 's' : ''} a year`;
              } else if (matchPerHour) {
                const times = parseInt(matchPerHour[1], 10);
                frequencyPerDay = times * 24;
                structuredList.push({ frequency: times, unit: 'hour' });
                part = `${times} time${times > 1 ? 's' : ''} an hour`;
              } else {
                switch (txt) {
                  case 'qam':
                    frequencyPerDay = 1;
                    part = 'every morning';
                    break;
                  case 'qpm':
                    frequencyPerDay = 1;
                    part = 'every evening';
                    break;
                  case 'qhs':
                    frequencyPerDay = 1;
                    part = 'every night before bed';
                    break;
                  case 'qmn':
                    frequencyPerDay = 1;
                    part = 'take at midnight';
                    break;
                  case 'bid':
                    frequencyPerDay = 2;
                    structuredList.push({ frequency: 2, unit: 'day' });
                    part = '2 times a day';
                    break;
                  case 'tid':
                    frequencyPerDay = 3;
                    structuredList.push({ frequency: 3, unit: 'day' });
                    part = '3 times a day';
                    break;
                  case 'prn':
                    part = 'as needed';
                    break;
                  case 'qd':
                    frequencyPerDay = 1;
                    part = 'every day';
                    break;
                  case 'ud':
                    part = 'as directed';
                    break;
                  case 'qid':
                    frequencyPerDay = 4;
                    structuredList.push({ frequency: 4, unit: 'day' });
                    part = '4 times a day';
                    break;
                  case 'qod':
                    frequencyPerDay = 0.5;
                    structuredList.push({ frequency: 1, unit: 'day' });
                    part = 'alternate days';
                    break;
                  case 'tiw':
                    frequencyPerDay = 3 / 7;
                    structuredList.push({ frequency: 3, unit: 'week' });
                    part = '3 times a week';
                    break;
                  case 'biw':
                    frequencyPerDay = 2 / 7;
                    structuredList.push({ frequency: 2, unit: 'week' });
                    part = '2 times a week';
                    break;
                  case 'qw':
                    frequencyPerDay = 1 / 7;
                    structuredList.push({ frequency: 1, unit: 'week' });
                    part = '1 times a week';
                    break;
                  case 'qmo':
                    frequencyPerDay = 1 / 30;
                    structuredList.push({ frequency: 1, unit: 'month' });
                    part = '1 times a month';
                    break;
                  case 'stat':
                    part = 'immediately';
                    break;
                  default:
                    part = txt;
                }
              }
              if (afterThen) parts2.push(part);
              else parts1.push(part);
            } else if (child instanceof MedicationsParser.RouteContext) {
              const part = translateRoute(child.getChild(0));
              if (afterThen) parts2.push(part);
              else parts1.push(part);
            } else if (child instanceof MedicationsParser.SiteContext) {
              const part = translateSite(child.getChild(0));
              if (afterThen) parts2.push(part);
              else parts1.push(part);
            } else if (child instanceof MedicationsParser.TimingContext) {
              const part = translateTiming(child.getChild(0));
              if (afterThen) parts2.push(part);
              else parts1.push(part);
            } else if (child.getText() && child.getSymbol && child.getSymbol().type === MedicationsLexer.WORD) {
              const part = child.getText();
              if (afterThen) parts2.push(part);
              else parts1.push(part);
            }
          }
        }

        for (let child of tree.children || []) {
          if (child instanceof MedicationsParser.InstructionContext) {
            processInstruction(child);
          } else if (child instanceof MedicationsParser.PrescriptionContext) {
            for (let subChild of child.children || []) {
              if (subChild instanceof MedicationsParser.InstructionContext) {
                processInstruction(subChild);
              } else if (subChild.getText().toLowerCase() === 'then') {
                afterThen = true;
              } else if (subChild instanceof MedicationsParser.RouteContext) {
                const part = translateRoute(subChild.getChild(0));
                if (afterThen) parts2.push(part);
                else parts1.push(part);
              } else if (subChild instanceof MedicationsParser.SiteContext) {
                const part = translateSite(subChild.getChild(0));
                if (afterThen) parts2.push(part);
                else parts1.push(part);
              } else if (subChild instanceof MedicationsParser.TimingContext) {
                const part = translateTiming(subChild.getChild(0));
                if (afterThen) parts2.push(part);
                else parts1.push(part);
              } else if (subChild.getText() && subChild.getSymbol && subChild.getSymbol().type === MedicationsLexer.WORD) {
                const part = subChild.getText();
                if (afterThen) parts2.push(part);
                else parts1.push(part);
              }
            }
          }
        }

        // Combine parts1 and parts2 with a newline if parts2 exists
        const translationText = parts2.length > 0 ? `${parts1.join(' ')}\n${parts2.join(' ')}` : parts1.join(' ');
        setTranslation(translationText);
        setStructuredData(structuredList.length > 0 ? structuredList.map(item => JSON.stringify(item)).join('\n') : '');

        // Calculate dispense quantity if dosage, frequency, and duration are present
        if (dosageAmount !== null && frequencyPerDay !== null && durationDays !== null) {
          const dispenseQty = Math.round(dosageAmount * frequencyPerDay * durationDays);
          setDispenseQuantity(JSON.stringify({ dispense_qty: dispenseQty }));
        } else {
          setDispenseQuantity('');
        }
      } else {
        setTranslation('');
        setStructuredData('');
        setDispenseQuantity('');
      }
    } catch (error) {
      setTranslation('');
      setStructuredData('');
      setDispenseQuantity('');
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-[672px]">
      <h1 className="text-2xl font-bold text-blue-800 mb-4 text-center">
        Medical Shorthand Translator
      </h1>
      <label className="block text-blue-700 font-semibold mb-2">
        Enter shorthand instruction
      </label>
      <input
        type="text"
        value={shorthand}
        onChange={handleInputChange}
        className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        placeholder="e.g., take 5c x3d then 2c x2d"
      />
      <div className="mt-4">
        <label className="block text-blue-700 font-semibold mb-2">
          Translation
        </label>
        <textarea
          value={translation}
          readOnly
          className="w-full p-2 border border-blue-300 rounded-md bg-blue-50 resize-none"
          rows="4"
          placeholder="Translation will appear here"
        />
      </div>
      <div className="mt-4">
        <label className="block text-blue-700 font-semibold mb-2">
          Structured Data
        </label>
        <textarea
          value={structuredData}
          readOnly
          className="w-full p-2 border border-blue-300 rounded-md bg-blue-50 resize-none"
          rows="4"
          placeholder="Structured data will appear here"
        />
      </div>
      <div className="mt-4">
        <label className="block text-blue-700 font-semibold mb-2">
          Dispense Quantity
        </label>
        <textarea
          value={dispenseQuantity}
          readOnly
          className="w-full p-2 border border-blue-300 rounded-md bg-blue-50 resize-none"
          rows="2"
          placeholder="Dispense quantity will appear here"
        />
      </div>
    </div>
  );
}