// Generated from medications.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import medicationsListener from './medicationsListener.js';
const serializedATN = [4,1,171,94,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,1,0,1,0,1,0,5,0,24,8,0,10,0,12,
0,27,9,0,1,0,1,0,3,0,31,8,0,1,0,1,0,3,0,35,8,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
0,1,0,1,0,1,0,1,0,3,0,48,8,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,57,8,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,5,1,66,8,1,10,1,12,1,69,9,1,1,2,1,2,1,2,1,3,1,3,
1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,4,8,85,8,8,11,8,12,8,86,1,9,4,9,90,8,
9,11,9,12,9,91,1,9,0,0,10,0,2,4,6,8,10,12,14,16,18,0,8,2,0,1,2,5,29,1,0,
126,156,1,0,117,125,2,0,157,159,161,166,1,0,35,68,2,0,69,89,91,116,1,1,169,
169,0,1,104,0,47,1,0,0,0,2,56,1,0,0,0,4,70,1,0,0,0,6,73,1,0,0,0,8,75,1,0,
0,0,10,77,1,0,0,0,12,79,1,0,0,0,14,81,1,0,0,0,16,84,1,0,0,0,18,89,1,0,0,
0,20,25,3,2,1,0,21,22,5,167,0,0,22,24,3,2,1,0,23,21,1,0,0,0,24,27,1,0,0,
0,25,23,1,0,0,0,25,26,1,0,0,0,26,30,1,0,0,0,27,25,1,0,0,0,28,29,5,168,0,
0,29,31,3,16,8,0,30,28,1,0,0,0,30,31,1,0,0,0,31,34,1,0,0,0,32,33,5,169,0,
0,33,35,3,18,9,0,34,32,1,0,0,0,34,35,1,0,0,0,35,36,1,0,0,0,36,37,5,0,0,1,
37,48,1,0,0,0,38,39,3,12,6,0,39,40,5,0,0,1,40,48,1,0,0,0,41,42,3,14,7,0,
42,43,5,0,0,1,43,48,1,0,0,0,44,45,3,8,4,0,45,46,5,0,0,1,46,48,1,0,0,0,47,
20,1,0,0,0,47,38,1,0,0,0,47,41,1,0,0,0,47,44,1,0,0,0,48,1,1,0,0,0,49,57,
3,4,2,0,50,57,3,6,3,0,51,57,3,8,4,0,52,57,3,10,5,0,53,57,3,12,6,0,54,57,
3,14,7,0,55,57,5,160,0,0,56,49,1,0,0,0,56,50,1,0,0,0,56,51,1,0,0,0,56,52,
1,0,0,0,56,53,1,0,0,0,56,54,1,0,0,0,56,55,1,0,0,0,57,67,1,0,0,0,58,66,3,
4,2,0,59,66,3,6,3,0,60,66,3,8,4,0,61,66,3,10,5,0,62,66,3,12,6,0,63,66,3,
14,7,0,64,66,5,160,0,0,65,58,1,0,0,0,65,59,1,0,0,0,65,60,1,0,0,0,65,61,1,
0,0,0,65,62,1,0,0,0,65,63,1,0,0,0,65,64,1,0,0,0,66,69,1,0,0,0,67,65,1,0,
0,0,67,68,1,0,0,0,68,3,1,0,0,0,69,67,1,0,0,0,70,71,5,170,0,0,71,72,7,0,0,
0,72,5,1,0,0,0,73,74,7,1,0,0,74,7,1,0,0,0,75,76,7,2,0,0,76,9,1,0,0,0,77,
78,7,3,0,0,78,11,1,0,0,0,79,80,7,4,0,0,80,13,1,0,0,0,81,82,7,5,0,0,82,15,
1,0,0,0,83,85,8,6,0,0,84,83,1,0,0,0,85,86,1,0,0,0,86,84,1,0,0,0,86,87,1,
0,0,0,87,17,1,0,0,0,88,90,8,7,0,0,89,88,1,0,0,0,90,91,1,0,0,0,91,89,1,0,
0,0,91,92,1,0,0,0,92,19,1,0,0,0,9,25,30,34,47,56,65,67,86,91];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class medicationsParser extends antlr4.Parser {

    static grammarFileName = "medications.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, "'po'", null, "'buccal'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, "'epidural'", 
                            "'in'", null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            "'abd'", null, null, null, null, null, null, 
                            null, null, "'nostril'", "'left nostril'", "'right nostril'", 
                            null, "'left arm'", "'right arm'", "'l_arm'", 
                            "'r_arm'", "'thigh'", null, null, "'chest'", 
                            "'back'", "'scalp'", "'mouth'", "'cheek'", "'joint'", 
                            "'spine'", "'vagina'", "'rectum'", "'deltoid muscle'", 
                            null, null, null, null, null, null, "'ac'", 
                            "'pc'", "'hs'", "'wc'", null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, "'once'", "'twice'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, "'then'", 
                            "'when'", "'#'" ];
    static symbolicNames = [ null, "TSP", "TBSP", "G", "L", "KG", "MG", 
                             "MCG", "ML", "U_PER_ML", "MG_PER_G", "MG_PER_ML", 
                             "MCG_PER_ML", "MEQ", "DROP", "TAB", "CAP", 
                             "PUFF", "SPRAY", "PATCH", "SACHET", "VIAL", 
                             "SUPPOSITORY", "LOZENGE", "STRIP", "AMPULE", 
                             "INJECTION", "UNIT", "INTERNATIONAL_UNIT", 
                             "PERCENT_CONCENTRATION", "MO", "DAY", "WEEK", 
                             "YEAR", "M", "ORAL", "PO", "SL", "BUCCAL", 
                             "RECTAL", "VAGINAL", "TOPICAL", "TRANSDERMAL", 
                             "OPHTHALMIC", "OTIC", "NASAL", "INHALATION", 
                             "IV", "IM", "SC", "ID", "IA", "IT", "IP", "INTRATHECAL_FULL", 
                             "IN", "NEB", "QS", "DISP", "NR", "NPO", "OTC", 
                             "QMON", "QTUE", "QWED", "QTHURS", "QFRI", "QSAT", 
                             "QSUN", "OS", "OD", "OU", "AS", "AD", "AU", 
                             "UNDER_TONGUE_SITE", "BU", "IVP", "IVPB", "PICC", 
                             "CVC", "VG", "DG", "VL", "B", "UN", "ABD", 
                             "UE", "LE", "ANT", "POST", "LAT", "MED", "DEL", 
                             "SCJ", "NOSTRIL", "LEFT_NOSTRIL", "RIGHT_NOSTRIL", 
                             "NARES", "LEFT_ARM", "RIGHT_ARM", "L_ARM", 
                             "R_ARM", "THIGH", "GLUTEAL", "ABDOMEN", "CHEST", 
                             "BACK", "SCALP", "MOUTH", "CHEEK", "JOINT", 
                             "SPINE_AREA", "VAGINA", "RECTUM", "DELTOID", 
                             "VASTUS_LATERALIS", "BEFORE_MEALS", "AFTER_MEALS", 
                             "AT_BEDTIME", "WITH_MEALS", "ON_EMPTY_STOMACH", 
                             "AC", "PC", "HS", "WC", "UD", "QD", "BID", 
                             "TID", "QID", "QOD", "QAM", "QMO", "QPM", "QHS", 
                             "QMN", "TIW", "BIW", "QW", "QMW", "STAT", "PRN", 
                             "ONCE", "TWICE", "THRICE", "QXH", "FREQUENCY_PER_DAY", 
                             "FREQUENCY_PER_WEEK", "FREQUENCY_PER_MONTH", 
                             "FREQUENCY_PER_YEAR", "FREQUENCY_PER_HOUR", 
                             "FREQUENCY_PER_MINUTE", "QXD", "QXW", "QXM", 
                             "QXMIN", "FRACTIONAL_DAY_DURATION", "FRACTIONAL_WEEK_DURATION", 
                             "FRACTIONAL_MONTH_DURATION", "WORD", "X_DURATION", 
                             "FOR_DURATION", "SIMPLE_DURATION", "UNTIL_FINISHED", 
                             "CONTINUOUSLY", "LIFELONG", "THEN", "WHEN", 
                             "HASH", "NUMBER", "WS" ];
    static ruleNames = [ "prescription", "instruction", "dosage", "frequency", 
                         "timing", "duration", "route", "site", "conditionText", 
                         "noteText" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = medicationsParser.ruleNames;
        this.literalNames = medicationsParser.literalNames;
        this.symbolicNames = medicationsParser.symbolicNames;
    }



	prescription() {
	    let localctx = new PrescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, medicationsParser.RULE_prescription);
	    var _la = 0;
	    try {
	        this.state = 47;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 20;
	            this.instruction();
	            this.state = 25;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===167) {
	                this.state = 21;
	                this.match(medicationsParser.THEN);
	                this.state = 22;
	                this.instruction();
	                this.state = 27;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 30;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===168) {
	                this.state = 28;
	                this.match(medicationsParser.WHEN);
	                this.state = 29;
	                this.conditionText();
	            }

	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===169) {
	                this.state = 32;
	                this.match(medicationsParser.HASH);
	                this.state = 33;
	                this.noteText();
	            }

	            this.state = 36;
	            this.match(medicationsParser.EOF);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 38;
	            this.route();
	            this.state = 39;
	            this.match(medicationsParser.EOF);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 41;
	            this.site();
	            this.state = 42;
	            this.match(medicationsParser.EOF);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 44;
	            this.timing();
	            this.state = 45;
	            this.match(medicationsParser.EOF);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruction() {
	    let localctx = new InstructionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, medicationsParser.RULE_instruction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 56;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 170:
	            this.state = 49;
	            this.dosage();
	            break;
	        case 126:
	        case 127:
	        case 128:
	        case 129:
	        case 130:
	        case 131:
	        case 132:
	        case 133:
	        case 134:
	        case 135:
	        case 136:
	        case 137:
	        case 138:
	        case 139:
	        case 140:
	        case 141:
	        case 142:
	        case 143:
	        case 144:
	        case 145:
	        case 146:
	        case 147:
	        case 148:
	        case 149:
	        case 150:
	        case 151:
	        case 152:
	        case 153:
	        case 154:
	        case 155:
	        case 156:
	            this.state = 50;
	            this.frequency();
	            break;
	        case 117:
	        case 118:
	        case 119:
	        case 120:
	        case 121:
	        case 122:
	        case 123:
	        case 124:
	        case 125:
	            this.state = 51;
	            this.timing();
	            break;
	        case 157:
	        case 158:
	        case 159:
	        case 161:
	        case 162:
	        case 163:
	        case 164:
	        case 165:
	        case 166:
	            this.state = 52;
	            this.duration();
	            break;
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	            this.state = 53;
	            this.route();
	            break;
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	        case 78:
	        case 79:
	        case 80:
	        case 81:
	        case 82:
	        case 83:
	        case 84:
	        case 85:
	        case 86:
	        case 87:
	        case 88:
	        case 89:
	        case 91:
	        case 92:
	        case 93:
	        case 94:
	        case 95:
	        case 96:
	        case 97:
	        case 98:
	        case 99:
	        case 100:
	        case 101:
	        case 102:
	        case 103:
	        case 104:
	        case 105:
	        case 106:
	        case 107:
	        case 108:
	        case 109:
	        case 110:
	        case 111:
	        case 112:
	        case 113:
	        case 114:
	        case 115:
	        case 116:
	            this.state = 54;
	            this.site();
	            break;
	        case 160:
	            this.state = 55;
	            this.match(medicationsParser.WORD);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 4294967295) !== 0) || ((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 4286578687) !== 0) || ((((_la - 99)) & ~0x1f) === 0 && ((1 << (_la - 99)) & 4294967295) !== 0) || ((((_la - 131)) & ~0x1f) === 0 && ((1 << (_la - 131)) & 4294967295) !== 0) || ((((_la - 163)) & ~0x1f) === 0 && ((1 << (_la - 163)) & 143) !== 0)) {
	            this.state = 65;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 170:
	                this.state = 58;
	                this.dosage();
	                break;
	            case 126:
	            case 127:
	            case 128:
	            case 129:
	            case 130:
	            case 131:
	            case 132:
	            case 133:
	            case 134:
	            case 135:
	            case 136:
	            case 137:
	            case 138:
	            case 139:
	            case 140:
	            case 141:
	            case 142:
	            case 143:
	            case 144:
	            case 145:
	            case 146:
	            case 147:
	            case 148:
	            case 149:
	            case 150:
	            case 151:
	            case 152:
	            case 153:
	            case 154:
	            case 155:
	            case 156:
	                this.state = 59;
	                this.frequency();
	                break;
	            case 117:
	            case 118:
	            case 119:
	            case 120:
	            case 121:
	            case 122:
	            case 123:
	            case 124:
	            case 125:
	                this.state = 60;
	                this.timing();
	                break;
	            case 157:
	            case 158:
	            case 159:
	            case 161:
	            case 162:
	            case 163:
	            case 164:
	            case 165:
	            case 166:
	                this.state = 61;
	                this.duration();
	                break;
	            case 35:
	            case 36:
	            case 37:
	            case 38:
	            case 39:
	            case 40:
	            case 41:
	            case 42:
	            case 43:
	            case 44:
	            case 45:
	            case 46:
	            case 47:
	            case 48:
	            case 49:
	            case 50:
	            case 51:
	            case 52:
	            case 53:
	            case 54:
	            case 55:
	            case 56:
	            case 57:
	            case 58:
	            case 59:
	            case 60:
	            case 61:
	            case 62:
	            case 63:
	            case 64:
	            case 65:
	            case 66:
	            case 67:
	            case 68:
	                this.state = 62;
	                this.route();
	                break;
	            case 69:
	            case 70:
	            case 71:
	            case 72:
	            case 73:
	            case 74:
	            case 75:
	            case 76:
	            case 77:
	            case 78:
	            case 79:
	            case 80:
	            case 81:
	            case 82:
	            case 83:
	            case 84:
	            case 85:
	            case 86:
	            case 87:
	            case 88:
	            case 89:
	            case 91:
	            case 92:
	            case 93:
	            case 94:
	            case 95:
	            case 96:
	            case 97:
	            case 98:
	            case 99:
	            case 100:
	            case 101:
	            case 102:
	            case 103:
	            case 104:
	            case 105:
	            case 106:
	            case 107:
	            case 108:
	            case 109:
	            case 110:
	            case 111:
	            case 112:
	            case 113:
	            case 114:
	            case 115:
	            case 116:
	                this.state = 63;
	                this.site();
	                break;
	            case 160:
	                this.state = 64;
	                this.match(medicationsParser.WORD);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dosage() {
	    let localctx = new DosageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, medicationsParser.RULE_dosage);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this.match(medicationsParser.NUMBER);
	        this.state = 71;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1073741798) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	frequency() {
	    let localctx = new FrequencyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, medicationsParser.RULE_frequency);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        _la = this._input.LA(1);
	        if(!(((((_la - 126)) & ~0x1f) === 0 && ((1 << (_la - 126)) & 2147483647) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	timing() {
	    let localctx = new TimingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, medicationsParser.RULE_timing);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 75;
	        _la = this._input.LA(1);
	        if(!(((((_la - 117)) & ~0x1f) === 0 && ((1 << (_la - 117)) & 511) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	duration() {
	    let localctx = new DurationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, medicationsParser.RULE_duration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 77;
	        _la = this._input.LA(1);
	        if(!(((((_la - 157)) & ~0x1f) === 0 && ((1 << (_la - 157)) & 1015) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	route() {
	    let localctx = new RouteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, medicationsParser.RULE_route);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        _la = this._input.LA(1);
	        if(!(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 4294967295) !== 0) || _la===67 || _la===68)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	site() {
	    let localctx = new SiteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, medicationsParser.RULE_site);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        _la = this._input.LA(1);
	        if(!(((((_la - 69)) & ~0x1f) === 0 && ((1 << (_la - 69)) & 4292870143) !== 0) || ((((_la - 101)) & ~0x1f) === 0 && ((1 << (_la - 101)) & 65535) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditionText() {
	    let localctx = new ConditionTextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, medicationsParser.RULE_conditionText);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 84; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 83;
	            _la = this._input.LA(1);
	            if(_la<=0 || _la===-1 || _la===169) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 86; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1f) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1f) === 0 && ((1 << (_la - 160)) & 3583) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	noteText() {
	    let localctx = new NoteTextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, medicationsParser.RULE_noteText);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 88;
	            _la = this._input.LA(1);
	            if(_la<=0 || _la===-1) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 91; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 4294967295) !== 0) || ((((_la - 128)) & ~0x1f) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1f) === 0 && ((1 << (_la - 160)) & 4095) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

medicationsParser.EOF = antlr4.Token.EOF;
medicationsParser.TSP = 1;
medicationsParser.TBSP = 2;
medicationsParser.G = 3;
medicationsParser.L = 4;
medicationsParser.KG = 5;
medicationsParser.MG = 6;
medicationsParser.MCG = 7;
medicationsParser.ML = 8;
medicationsParser.U_PER_ML = 9;
medicationsParser.MG_PER_G = 10;
medicationsParser.MG_PER_ML = 11;
medicationsParser.MCG_PER_ML = 12;
medicationsParser.MEQ = 13;
medicationsParser.DROP = 14;
medicationsParser.TAB = 15;
medicationsParser.CAP = 16;
medicationsParser.PUFF = 17;
medicationsParser.SPRAY = 18;
medicationsParser.PATCH = 19;
medicationsParser.SACHET = 20;
medicationsParser.VIAL = 21;
medicationsParser.SUPPOSITORY = 22;
medicationsParser.LOZENGE = 23;
medicationsParser.STRIP = 24;
medicationsParser.AMPULE = 25;
medicationsParser.INJECTION = 26;
medicationsParser.UNIT = 27;
medicationsParser.INTERNATIONAL_UNIT = 28;
medicationsParser.PERCENT_CONCENTRATION = 29;
medicationsParser.MO = 30;
medicationsParser.DAY = 31;
medicationsParser.WEEK = 32;
medicationsParser.YEAR = 33;
medicationsParser.M = 34;
medicationsParser.ORAL = 35;
medicationsParser.PO = 36;
medicationsParser.SL = 37;
medicationsParser.BUCCAL = 38;
medicationsParser.RECTAL = 39;
medicationsParser.VAGINAL = 40;
medicationsParser.TOPICAL = 41;
medicationsParser.TRANSDERMAL = 42;
medicationsParser.OPHTHALMIC = 43;
medicationsParser.OTIC = 44;
medicationsParser.NASAL = 45;
medicationsParser.INHALATION = 46;
medicationsParser.IV = 47;
medicationsParser.IM = 48;
medicationsParser.SC = 49;
medicationsParser.ID = 50;
medicationsParser.IA = 51;
medicationsParser.IT = 52;
medicationsParser.IP = 53;
medicationsParser.INTRATHECAL_FULL = 54;
medicationsParser.IN = 55;
medicationsParser.NEB = 56;
medicationsParser.QS = 57;
medicationsParser.DISP = 58;
medicationsParser.NR = 59;
medicationsParser.NPO = 60;
medicationsParser.OTC = 61;
medicationsParser.QMON = 62;
medicationsParser.QTUE = 63;
medicationsParser.QWED = 64;
medicationsParser.QTHURS = 65;
medicationsParser.QFRI = 66;
medicationsParser.QSAT = 67;
medicationsParser.QSUN = 68;
medicationsParser.OS = 69;
medicationsParser.OD = 70;
medicationsParser.OU = 71;
medicationsParser.AS = 72;
medicationsParser.AD = 73;
medicationsParser.AU = 74;
medicationsParser.UNDER_TONGUE_SITE = 75;
medicationsParser.BU = 76;
medicationsParser.IVP = 77;
medicationsParser.IVPB = 78;
medicationsParser.PICC = 79;
medicationsParser.CVC = 80;
medicationsParser.VG = 81;
medicationsParser.DG = 82;
medicationsParser.VL = 83;
medicationsParser.B = 84;
medicationsParser.UN = 85;
medicationsParser.ABD = 86;
medicationsParser.UE = 87;
medicationsParser.LE = 88;
medicationsParser.ANT = 89;
medicationsParser.POST = 90;
medicationsParser.LAT = 91;
medicationsParser.MED = 92;
medicationsParser.DEL = 93;
medicationsParser.SCJ = 94;
medicationsParser.NOSTRIL = 95;
medicationsParser.LEFT_NOSTRIL = 96;
medicationsParser.RIGHT_NOSTRIL = 97;
medicationsParser.NARES = 98;
medicationsParser.LEFT_ARM = 99;
medicationsParser.RIGHT_ARM = 100;
medicationsParser.L_ARM = 101;
medicationsParser.R_ARM = 102;
medicationsParser.THIGH = 103;
medicationsParser.GLUTEAL = 104;
medicationsParser.ABDOMEN = 105;
medicationsParser.CHEST = 106;
medicationsParser.BACK = 107;
medicationsParser.SCALP = 108;
medicationsParser.MOUTH = 109;
medicationsParser.CHEEK = 110;
medicationsParser.JOINT = 111;
medicationsParser.SPINE_AREA = 112;
medicationsParser.VAGINA = 113;
medicationsParser.RECTUM = 114;
medicationsParser.DELTOID = 115;
medicationsParser.VASTUS_LATERALIS = 116;
medicationsParser.BEFORE_MEALS = 117;
medicationsParser.AFTER_MEALS = 118;
medicationsParser.AT_BEDTIME = 119;
medicationsParser.WITH_MEALS = 120;
medicationsParser.ON_EMPTY_STOMACH = 121;
medicationsParser.AC = 122;
medicationsParser.PC = 123;
medicationsParser.HS = 124;
medicationsParser.WC = 125;
medicationsParser.UD = 126;
medicationsParser.QD = 127;
medicationsParser.BID = 128;
medicationsParser.TID = 129;
medicationsParser.QID = 130;
medicationsParser.QOD = 131;
medicationsParser.QAM = 132;
medicationsParser.QMO = 133;
medicationsParser.QPM = 134;
medicationsParser.QHS = 135;
medicationsParser.QMN = 136;
medicationsParser.TIW = 137;
medicationsParser.BIW = 138;
medicationsParser.QW = 139;
medicationsParser.QMW = 140;
medicationsParser.STAT = 141;
medicationsParser.PRN = 142;
medicationsParser.ONCE = 143;
medicationsParser.TWICE = 144;
medicationsParser.THRICE = 145;
medicationsParser.QXH = 146;
medicationsParser.FREQUENCY_PER_DAY = 147;
medicationsParser.FREQUENCY_PER_WEEK = 148;
medicationsParser.FREQUENCY_PER_MONTH = 149;
medicationsParser.FREQUENCY_PER_YEAR = 150;
medicationsParser.FREQUENCY_PER_HOUR = 151;
medicationsParser.FREQUENCY_PER_MINUTE = 152;
medicationsParser.QXD = 153;
medicationsParser.QXW = 154;
medicationsParser.QXM = 155;
medicationsParser.QXMIN = 156;
medicationsParser.FRACTIONAL_DAY_DURATION = 157;
medicationsParser.FRACTIONAL_WEEK_DURATION = 158;
medicationsParser.FRACTIONAL_MONTH_DURATION = 159;
medicationsParser.WORD = 160;
medicationsParser.X_DURATION = 161;
medicationsParser.FOR_DURATION = 162;
medicationsParser.SIMPLE_DURATION = 163;
medicationsParser.UNTIL_FINISHED = 164;
medicationsParser.CONTINUOUSLY = 165;
medicationsParser.LIFELONG = 166;
medicationsParser.THEN = 167;
medicationsParser.WHEN = 168;
medicationsParser.HASH = 169;
medicationsParser.NUMBER = 170;
medicationsParser.WS = 171;

medicationsParser.RULE_prescription = 0;
medicationsParser.RULE_instruction = 1;
medicationsParser.RULE_dosage = 2;
medicationsParser.RULE_frequency = 3;
medicationsParser.RULE_timing = 4;
medicationsParser.RULE_duration = 5;
medicationsParser.RULE_route = 6;
medicationsParser.RULE_site = 7;
medicationsParser.RULE_conditionText = 8;
medicationsParser.RULE_noteText = 9;

class PrescriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = medicationsParser.RULE_prescription;
    }

	instruction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstructionContext);
	    } else {
	        return this.getTypedRuleContext(InstructionContext,i);
	    }
	};

	EOF() {
	    return this.getToken(medicationsParser.EOF, 0);
	};

	THEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(medicationsParser.THEN);
	    } else {
	        return this.getToken(medicationsParser.THEN, i);
	    }
	};


	WHEN() {
	    return this.getToken(medicationsParser.WHEN, 0);
	};

	conditionText() {
	    return this.getTypedRuleContext(ConditionTextContext,0);
	};

	HASH() {
	    return this.getToken(medicationsParser.HASH, 0);
	};

	noteText() {
	    return this.getTypedRuleContext(NoteTextContext,0);
	};

	route() {
	    return this.getTypedRuleContext(RouteContext,0);
	};

	site() {
	    return this.getTypedRuleContext(SiteContext,0);
	};

	timing() {
	    return this.getTypedRuleContext(TimingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.enterPrescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.exitPrescription(this);
		}
	}


}



class InstructionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = medicationsParser.RULE_instruction;
    }

	dosage = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DosageContext);
	    } else {
	        return this.getTypedRuleContext(DosageContext,i);
	    }
	};

	frequency = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FrequencyContext);
	    } else {
	        return this.getTypedRuleContext(FrequencyContext,i);
	    }
	};

	timing = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TimingContext);
	    } else {
	        return this.getTypedRuleContext(TimingContext,i);
	    }
	};

	duration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DurationContext);
	    } else {
	        return this.getTypedRuleContext(DurationContext,i);
	    }
	};

	route = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RouteContext);
	    } else {
	        return this.getTypedRuleContext(RouteContext,i);
	    }
	};

	site = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SiteContext);
	    } else {
	        return this.getTypedRuleContext(SiteContext,i);
	    }
	};

	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(medicationsParser.WORD);
	    } else {
	        return this.getToken(medicationsParser.WORD, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.enterInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.exitInstruction(this);
		}
	}


}



class DosageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = medicationsParser.RULE_dosage;
    }

	NUMBER() {
	    return this.getToken(medicationsParser.NUMBER, 0);
	};

	TSP() {
	    return this.getToken(medicationsParser.TSP, 0);
	};

	TBSP() {
	    return this.getToken(medicationsParser.TBSP, 0);
	};

	MG() {
	    return this.getToken(medicationsParser.MG, 0);
	};

	KG() {
	    return this.getToken(medicationsParser.KG, 0);
	};

	MCG() {
	    return this.getToken(medicationsParser.MCG, 0);
	};

	ML() {
	    return this.getToken(medicationsParser.ML, 0);
	};

	MG_PER_G() {
	    return this.getToken(medicationsParser.MG_PER_G, 0);
	};

	U_PER_ML() {
	    return this.getToken(medicationsParser.U_PER_ML, 0);
	};

	MG_PER_ML() {
	    return this.getToken(medicationsParser.MG_PER_ML, 0);
	};

	MCG_PER_ML() {
	    return this.getToken(medicationsParser.MCG_PER_ML, 0);
	};

	MEQ() {
	    return this.getToken(medicationsParser.MEQ, 0);
	};

	DROP() {
	    return this.getToken(medicationsParser.DROP, 0);
	};

	TAB() {
	    return this.getToken(medicationsParser.TAB, 0);
	};

	CAP() {
	    return this.getToken(medicationsParser.CAP, 0);
	};

	PUFF() {
	    return this.getToken(medicationsParser.PUFF, 0);
	};

	SPRAY() {
	    return this.getToken(medicationsParser.SPRAY, 0);
	};

	PATCH() {
	    return this.getToken(medicationsParser.PATCH, 0);
	};

	SACHET() {
	    return this.getToken(medicationsParser.SACHET, 0);
	};

	VIAL() {
	    return this.getToken(medicationsParser.VIAL, 0);
	};

	SUPPOSITORY() {
	    return this.getToken(medicationsParser.SUPPOSITORY, 0);
	};

	LOZENGE() {
	    return this.getToken(medicationsParser.LOZENGE, 0);
	};

	STRIP() {
	    return this.getToken(medicationsParser.STRIP, 0);
	};

	AMPULE() {
	    return this.getToken(medicationsParser.AMPULE, 0);
	};

	INJECTION() {
	    return this.getToken(medicationsParser.INJECTION, 0);
	};

	UNIT() {
	    return this.getToken(medicationsParser.UNIT, 0);
	};

	INTERNATIONAL_UNIT() {
	    return this.getToken(medicationsParser.INTERNATIONAL_UNIT, 0);
	};

	PERCENT_CONCENTRATION() {
	    return this.getToken(medicationsParser.PERCENT_CONCENTRATION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.enterDosage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.exitDosage(this);
		}
	}


}



class FrequencyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = medicationsParser.RULE_frequency;
    }

	QD() {
	    return this.getToken(medicationsParser.QD, 0);
	};

	UD() {
	    return this.getToken(medicationsParser.UD, 0);
	};

	BID() {
	    return this.getToken(medicationsParser.BID, 0);
	};

	TID() {
	    return this.getToken(medicationsParser.TID, 0);
	};

	QID() {
	    return this.getToken(medicationsParser.QID, 0);
	};

	QOD() {
	    return this.getToken(medicationsParser.QOD, 0);
	};

	QAM() {
	    return this.getToken(medicationsParser.QAM, 0);
	};

	QMO() {
	    return this.getToken(medicationsParser.QMO, 0);
	};

	QPM() {
	    return this.getToken(medicationsParser.QPM, 0);
	};

	QHS() {
	    return this.getToken(medicationsParser.QHS, 0);
	};

	QMN() {
	    return this.getToken(medicationsParser.QMN, 0);
	};

	QXH() {
	    return this.getToken(medicationsParser.QXH, 0);
	};

	TIW() {
	    return this.getToken(medicationsParser.TIW, 0);
	};

	BIW() {
	    return this.getToken(medicationsParser.BIW, 0);
	};

	QW() {
	    return this.getToken(medicationsParser.QW, 0);
	};

	QMW() {
	    return this.getToken(medicationsParser.QMW, 0);
	};

	STAT() {
	    return this.getToken(medicationsParser.STAT, 0);
	};

	PRN() {
	    return this.getToken(medicationsParser.PRN, 0);
	};

	ONCE() {
	    return this.getToken(medicationsParser.ONCE, 0);
	};

	TWICE() {
	    return this.getToken(medicationsParser.TWICE, 0);
	};

	THRICE() {
	    return this.getToken(medicationsParser.THRICE, 0);
	};

	FREQUENCY_PER_DAY() {
	    return this.getToken(medicationsParser.FREQUENCY_PER_DAY, 0);
	};

	FREQUENCY_PER_WEEK() {
	    return this.getToken(medicationsParser.FREQUENCY_PER_WEEK, 0);
	};

	FREQUENCY_PER_MONTH() {
	    return this.getToken(medicationsParser.FREQUENCY_PER_MONTH, 0);
	};

	FREQUENCY_PER_YEAR() {
	    return this.getToken(medicationsParser.FREQUENCY_PER_YEAR, 0);
	};

	FREQUENCY_PER_HOUR() {
	    return this.getToken(medicationsParser.FREQUENCY_PER_HOUR, 0);
	};

	FREQUENCY_PER_MINUTE() {
	    return this.getToken(medicationsParser.FREQUENCY_PER_MINUTE, 0);
	};

	QXD() {
	    return this.getToken(medicationsParser.QXD, 0);
	};

	QXW() {
	    return this.getToken(medicationsParser.QXW, 0);
	};

	QXM() {
	    return this.getToken(medicationsParser.QXM, 0);
	};

	QXMIN() {
	    return this.getToken(medicationsParser.QXMIN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.enterFrequency(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.exitFrequency(this);
		}
	}


}



class TimingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = medicationsParser.RULE_timing;
    }

	BEFORE_MEALS() {
	    return this.getToken(medicationsParser.BEFORE_MEALS, 0);
	};

	AFTER_MEALS() {
	    return this.getToken(medicationsParser.AFTER_MEALS, 0);
	};

	AT_BEDTIME() {
	    return this.getToken(medicationsParser.AT_BEDTIME, 0);
	};

	WITH_MEALS() {
	    return this.getToken(medicationsParser.WITH_MEALS, 0);
	};

	ON_EMPTY_STOMACH() {
	    return this.getToken(medicationsParser.ON_EMPTY_STOMACH, 0);
	};

	AC() {
	    return this.getToken(medicationsParser.AC, 0);
	};

	PC() {
	    return this.getToken(medicationsParser.PC, 0);
	};

	HS() {
	    return this.getToken(medicationsParser.HS, 0);
	};

	WC() {
	    return this.getToken(medicationsParser.WC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.enterTiming(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.exitTiming(this);
		}
	}


}



class DurationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = medicationsParser.RULE_duration;
    }

	X_DURATION() {
	    return this.getToken(medicationsParser.X_DURATION, 0);
	};

	FOR_DURATION() {
	    return this.getToken(medicationsParser.FOR_DURATION, 0);
	};

	SIMPLE_DURATION() {
	    return this.getToken(medicationsParser.SIMPLE_DURATION, 0);
	};

	UNTIL_FINISHED() {
	    return this.getToken(medicationsParser.UNTIL_FINISHED, 0);
	};

	CONTINUOUSLY() {
	    return this.getToken(medicationsParser.CONTINUOUSLY, 0);
	};

	LIFELONG() {
	    return this.getToken(medicationsParser.LIFELONG, 0);
	};

	FRACTIONAL_DAY_DURATION() {
	    return this.getToken(medicationsParser.FRACTIONAL_DAY_DURATION, 0);
	};

	FRACTIONAL_WEEK_DURATION() {
	    return this.getToken(medicationsParser.FRACTIONAL_WEEK_DURATION, 0);
	};

	FRACTIONAL_MONTH_DURATION() {
	    return this.getToken(medicationsParser.FRACTIONAL_MONTH_DURATION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.enterDuration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.exitDuration(this);
		}
	}


}



class RouteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = medicationsParser.RULE_route;
    }

	ORAL() {
	    return this.getToken(medicationsParser.ORAL, 0);
	};

	SL() {
	    return this.getToken(medicationsParser.SL, 0);
	};

	BUCCAL() {
	    return this.getToken(medicationsParser.BUCCAL, 0);
	};

	RECTAL() {
	    return this.getToken(medicationsParser.RECTAL, 0);
	};

	VAGINAL() {
	    return this.getToken(medicationsParser.VAGINAL, 0);
	};

	TOPICAL() {
	    return this.getToken(medicationsParser.TOPICAL, 0);
	};

	TRANSDERMAL() {
	    return this.getToken(medicationsParser.TRANSDERMAL, 0);
	};

	OPHTHALMIC() {
	    return this.getToken(medicationsParser.OPHTHALMIC, 0);
	};

	OTIC() {
	    return this.getToken(medicationsParser.OTIC, 0);
	};

	NASAL() {
	    return this.getToken(medicationsParser.NASAL, 0);
	};

	INHALATION() {
	    return this.getToken(medicationsParser.INHALATION, 0);
	};

	IV() {
	    return this.getToken(medicationsParser.IV, 0);
	};

	IM() {
	    return this.getToken(medicationsParser.IM, 0);
	};

	SC() {
	    return this.getToken(medicationsParser.SC, 0);
	};

	ID() {
	    return this.getToken(medicationsParser.ID, 0);
	};

	IA() {
	    return this.getToken(medicationsParser.IA, 0);
	};

	IT() {
	    return this.getToken(medicationsParser.IT, 0);
	};

	IP() {
	    return this.getToken(medicationsParser.IP, 0);
	};

	INTRATHECAL_FULL() {
	    return this.getToken(medicationsParser.INTRATHECAL_FULL, 0);
	};

	PO() {
	    return this.getToken(medicationsParser.PO, 0);
	};

	IN() {
	    return this.getToken(medicationsParser.IN, 0);
	};

	NEB() {
	    return this.getToken(medicationsParser.NEB, 0);
	};

	QS() {
	    return this.getToken(medicationsParser.QS, 0);
	};

	DISP() {
	    return this.getToken(medicationsParser.DISP, 0);
	};

	NR() {
	    return this.getToken(medicationsParser.NR, 0);
	};

	NPO() {
	    return this.getToken(medicationsParser.NPO, 0);
	};

	OTC() {
	    return this.getToken(medicationsParser.OTC, 0);
	};

	QMON() {
	    return this.getToken(medicationsParser.QMON, 0);
	};

	QTUE() {
	    return this.getToken(medicationsParser.QTUE, 0);
	};

	QWED() {
	    return this.getToken(medicationsParser.QWED, 0);
	};

	QTHURS() {
	    return this.getToken(medicationsParser.QTHURS, 0);
	};

	QFRI() {
	    return this.getToken(medicationsParser.QFRI, 0);
	};

	QSAT() {
	    return this.getToken(medicationsParser.QSAT, 0);
	};

	QSUN() {
	    return this.getToken(medicationsParser.QSUN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.enterRoute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.exitRoute(this);
		}
	}


}



class SiteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = medicationsParser.RULE_site;
    }

	OS() {
	    return this.getToken(medicationsParser.OS, 0);
	};

	OD() {
	    return this.getToken(medicationsParser.OD, 0);
	};

	OU() {
	    return this.getToken(medicationsParser.OU, 0);
	};

	AS() {
	    return this.getToken(medicationsParser.AS, 0);
	};

	AD() {
	    return this.getToken(medicationsParser.AD, 0);
	};

	AU() {
	    return this.getToken(medicationsParser.AU, 0);
	};

	NOSTRIL() {
	    return this.getToken(medicationsParser.NOSTRIL, 0);
	};

	NARES() {
	    return this.getToken(medicationsParser.NARES, 0);
	};

	LEFT_NOSTRIL() {
	    return this.getToken(medicationsParser.LEFT_NOSTRIL, 0);
	};

	RIGHT_NOSTRIL() {
	    return this.getToken(medicationsParser.RIGHT_NOSTRIL, 0);
	};

	LEFT_ARM() {
	    return this.getToken(medicationsParser.LEFT_ARM, 0);
	};

	RIGHT_ARM() {
	    return this.getToken(medicationsParser.RIGHT_ARM, 0);
	};

	L_ARM() {
	    return this.getToken(medicationsParser.L_ARM, 0);
	};

	R_ARM() {
	    return this.getToken(medicationsParser.R_ARM, 0);
	};

	THIGH() {
	    return this.getToken(medicationsParser.THIGH, 0);
	};

	GLUTEAL() {
	    return this.getToken(medicationsParser.GLUTEAL, 0);
	};

	ABDOMEN() {
	    return this.getToken(medicationsParser.ABDOMEN, 0);
	};

	CHEST() {
	    return this.getToken(medicationsParser.CHEST, 0);
	};

	BACK() {
	    return this.getToken(medicationsParser.BACK, 0);
	};

	SCALP() {
	    return this.getToken(medicationsParser.SCALP, 0);
	};

	MOUTH() {
	    return this.getToken(medicationsParser.MOUTH, 0);
	};

	CHEEK() {
	    return this.getToken(medicationsParser.CHEEK, 0);
	};

	UNDER_TONGUE_SITE() {
	    return this.getToken(medicationsParser.UNDER_TONGUE_SITE, 0);
	};

	JOINT() {
	    return this.getToken(medicationsParser.JOINT, 0);
	};

	SPINE_AREA() {
	    return this.getToken(medicationsParser.SPINE_AREA, 0);
	};

	VAGINA() {
	    return this.getToken(medicationsParser.VAGINA, 0);
	};

	RECTUM() {
	    return this.getToken(medicationsParser.RECTUM, 0);
	};

	DELTOID() {
	    return this.getToken(medicationsParser.DELTOID, 0);
	};

	VASTUS_LATERALIS() {
	    return this.getToken(medicationsParser.VASTUS_LATERALIS, 0);
	};

	BU() {
	    return this.getToken(medicationsParser.BU, 0);
	};

	IVP() {
	    return this.getToken(medicationsParser.IVP, 0);
	};

	IVPB() {
	    return this.getToken(medicationsParser.IVPB, 0);
	};

	PICC() {
	    return this.getToken(medicationsParser.PICC, 0);
	};

	CVC() {
	    return this.getToken(medicationsParser.CVC, 0);
	};

	VG() {
	    return this.getToken(medicationsParser.VG, 0);
	};

	DG() {
	    return this.getToken(medicationsParser.DG, 0);
	};

	VL() {
	    return this.getToken(medicationsParser.VL, 0);
	};

	B() {
	    return this.getToken(medicationsParser.B, 0);
	};

	UN() {
	    return this.getToken(medicationsParser.UN, 0);
	};

	ABD() {
	    return this.getToken(medicationsParser.ABD, 0);
	};

	UE() {
	    return this.getToken(medicationsParser.UE, 0);
	};

	LE() {
	    return this.getToken(medicationsParser.LE, 0);
	};

	ANT() {
	    return this.getToken(medicationsParser.ANT, 0);
	};

	LAT() {
	    return this.getToken(medicationsParser.LAT, 0);
	};

	MED() {
	    return this.getToken(medicationsParser.MED, 0);
	};

	DEL() {
	    return this.getToken(medicationsParser.DEL, 0);
	};

	SCJ() {
	    return this.getToken(medicationsParser.SCJ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.enterSite(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.exitSite(this);
		}
	}


}



class ConditionTextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = medicationsParser.RULE_conditionText;
    }

	HASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(medicationsParser.HASH);
	    } else {
	        return this.getToken(medicationsParser.HASH, i);
	    }
	};


	EOF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(medicationsParser.EOF);
	    } else {
	        return this.getToken(medicationsParser.EOF, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.enterConditionText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.exitConditionText(this);
		}
	}


}



class NoteTextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = medicationsParser.RULE_noteText;
    }

	EOF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(medicationsParser.EOF);
	    } else {
	        return this.getToken(medicationsParser.EOF, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.enterNoteText(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof medicationsListener ) {
	        listener.exitNoteText(this);
		}
	}


}




medicationsParser.PrescriptionContext = PrescriptionContext; 
medicationsParser.InstructionContext = InstructionContext; 
medicationsParser.DosageContext = DosageContext; 
medicationsParser.FrequencyContext = FrequencyContext; 
medicationsParser.TimingContext = TimingContext; 
medicationsParser.DurationContext = DurationContext; 
medicationsParser.RouteContext = RouteContext; 
medicationsParser.SiteContext = SiteContext; 
medicationsParser.ConditionTextContext = ConditionTextContext; 
medicationsParser.NoteTextContext = NoteTextContext; 
