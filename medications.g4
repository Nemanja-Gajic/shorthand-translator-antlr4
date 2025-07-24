grammar medications;

options {
    caseInsensitive = true;
}

// Dosage tokens defined first for precedence
TSP    : 'tsp' | 'teaspoon' | 'teaspoons' ;
TBSP   : 'tbsp' | 'tbsps' | 'tablespoon' | 'tablespoons' ;
G      : 'g' (WS | EOF) | 'gram' | 'grams' ;
L      : 'l' (WS | EOF) | 'litre' | 'litres' ;
KG     : 'kg' | 'kilograms' | 'kilogram' ;
MG     : 'mg' | 'milligram' | 'milligrams' ;
MCG    : 'mcg' | 'microgram' | 'micrograms' | 'ug' ;
ML     : 'ml' | 'milliliter' | 'milliliters' ;
U_PER_ML : 'U/ml' | 'units per milliliter';
MG_PER_G : 'mg/g' | 'milligram per gram' ;
MG_PER_ML : 'mg/ml' | 'mg per ml' ;
MCG_PER_ML : 'mcg/ml' | 'mcg per ml' ;
MEQ    : 'meq' | 'milliequivalents' ;
DROP   : 'gtt' | 'drop' | 'drops' ;
TAB    : 'tab' | 'tabs' | 'tablet' | 'tablets' | 't' ;
CAP    : 'cap' | 'caps' | 'capsule' | 'capsules' | 'c' ;
PUFF   : 'puff' | 'puffs' | 'pu' | 'pf' ;
SPRAY  : 'spray' | 'sprays' | 'spr' ;
PATCH  : 'patch' | 'patches' | 'pt' ;
SACHET : 'sachet' | 'sachets' | 'sa' ;
VIAL   : 'vial' | 'vials' | 'v' (WS | EOF) ;
SUPPOSITORY : 'supp' | 'supps' | 'suppository' | 'suppositories' ;
LOZENGE : 'lozenge' | 'lozenges' | 'lz' ;
STRIP   : 'strip' | 'strips' | 'str' ;
AMPULE  : 'amp' | 'amps' | 'ampule' | 'ampules' ;
INJECTION : 'injection' | 'injections' ;
UNIT : 'u' (WS | EOF) | 'unit' | 'units';
INTERNATIONAL_UNIT : 'international units' | 'iu' ;
PERCENT_CONCENTRATION : '%' | 'percent' ;

// Duration tokens
MO     : 'mo' | 'month' | 'months' ;
DAY : 'd' (WS | EOF) | 'day' | 'days' ;
WEEK   : 'w' | 'week' | 'weeks' ;
YEAR   : 'y' | 'year' | 'years' ;
M      : 'm' (WS | EOF) ;

// Generic word token for unrecognized words
WORD   : [a-z]+ ;

prescription
    : instruction (THEN instruction)* (WHEN conditionText)? (HASH noteText)? EOF
    | route EOF
    | site EOF
    | timing EOF
    ;

instruction
    : (dosage | frequency | timing | duration | route | site | WORD) (dosage | frequency | timing | duration | route | site | WORD)*
    ;

dosage
    : NUMBER (TSP | TBSP | MG | KG | MCG | ML | MG_PER_G | U_PER_ML | MG_PER_ML | MCG_PER_ML | MEQ | DROP | TAB | CAP | PUFF | SPRAY | PATCH | SACHET | VIAL | SUPPOSITORY | LOZENGE | STRIP | AMPULE | INJECTION | UNIT | INTERNATIONAL_UNIT | PERCENT_CONCENTRATION)
    ;

frequency
    : QD | UD | BID | TID | QID | QOD | QAM | QMO | QPM | QHS | QMN | QXH | TIW | BIW | QW | QMW | STAT | PRN | ONCE | TWICE | THRICE | FREQUENCY_PER_DAY | FREQUENCY_PER_WEEK | FREQUENCY_PER_MONTH | FREQUENCY_PER_YEAR | FREQUENCY_PER_HOUR | FREQUENCY_PER_MINUTE ;

timing
    : BEFORE_MEALS | AFTER_MEALS | AT_BEDTIME | WITH_MEALS | ON_EMPTY_STOMACH | AC | PC | HS | WC ;

duration
    : (X_DURATION | FOR_DURATION | SIMPLE_DURATION | UNTIL_FINISHED | CONTINUOUSLY | LIFELONG)
    ;

X_DURATION
    : ('x' | 'for') (WS)* NUMBER (WS)* (DAY | WEEK | MO | YEAR | M)
    ;

FOR_DURATION
    : 'for' (WS)+ NUMBER (WS)* (DAY | WEEK | MO | YEAR | M)
    ;

SIMPLE_DURATION
    : NUMBER (WS)* (DAY | WEEK | MO | YEAR | M)
    ;

UNTIL_FINISHED : 'until finished' | 'until complete' | 'complete course' ;
CONTINUOUSLY   : 'continuously' | 'ongoing' | 'continuous' ;
LIFELONG       : 'lifelong' | 'for life' | 'indefinitely' ;

route
    : ORAL | SL | BUCCAL | RECTAL | VAGINAL | TOPICAL | TRANSDERMAL | OPHTHALMIC | OTIC | NASAL | INHALATION | IV | IM | SC | ID | IA | IT | IP | INTRATHECAL_FULL | PO | IN | NEB | QS | DISP | NR | NPO | OTC | QMON | QTUE | QWED | QTHURS | QFRI | QSAT | QSUN ;

site
    : OS | OD | OU | AS | AD | AU | NOSTRIL | NARES | LEFT_NOSTRIL | RIGHT_NOSTRIL | LEFT_ARM | RIGHT_ARM | L_ARM | R_ARM | THIGH | GLUTEAL | ABDOMEN | CHEST | BACK | SCALP | MOUTH | CHEEK | UNDER_TONGUE_SITE | JOINT | SPINE_AREA | VAGINA | RECTUM | DELTOID | VASTUS_LATERALIS | BU | IVP  | IVPB | PICC | CVC | VG | DG | VL | B | UN | ABD | UE | LE | ANT | LAT | MED | DEL | SCJ ;

conditionText : (~(HASH | EOF))+ ;
noteText      : (~EOF)+ ;

THEN : 'then' ;
WHEN : 'when' ;
HASH : '#' ;

NUMBER : [0-9]+ ('.' [0-9]+)? ;

BEFORE_MEALS     : 'before meals' | 'before eating' | 'pre-meal' ;
AFTER_MEALS      : 'after meals' | 'after eating' | 'post-meal' ;
AT_BEDTIME       : 'at bedtime' | 'before bed' | 'bedtime' ;
WITH_MEALS       : 'with meals' | 'with food' | 'during meals' ;
ON_EMPTY_STOMACH : 'on empty stomach' | 'empty stomach' | 'fasting' ;

OS        : 'os' | 'left eye' ;
OD        : 'od' | 'right eye' ;
OU        : 'ou' | 'both eyes' ;
AS        : 'as' | 'left ear' ;
AD        : 'ad' | 'right ear' ;
AU        : 'au' | 'both ears' ;
UNDER_TONGUE_SITE : 'under tongue' | 'sublingual area' ;
BU        : 'bu' | 'between cheeks and gums' ;
IVP       : 'ivp' | 'iv push' ;
IVPB      : 'ivpb' | 'iv piggyback' ;
PICC      : 'picc' | 'Peripherally Inserted Central Catheter' ;
CVC       : 'cvc' | 'Central Venous Catheter' ;
VG       : 'vg' | 'Ventrogluteal' ;
DG       : 'dg' | 'Dorsogluteal' ;
VL       : 'vl' | 'Vastus Lateralis' ;
B        : 'b' (WS | EOF)| 'bulateral' ;
UN        : 'un' | 'Unilateral' ;
ABD       : 'abd' ;
UE       : 'ue' | 'upper extremity' ;
LE       : 'le' | 'left extremity' ;
ANT       : 'ant' | 'anterior' ;
POST       : 'post' (WS | EOF) | 'posterior' ;
LAT       : 'lat' | 'lateral' ;
MED       : 'med' | 'medial' ;
DEL       : 'del' | 'deltoid' ;
SCJ       : 'scj' | 'Sternoclavicular Joint' ;

QXH     : 'q' NUMBER 'h' | 'every' WS+ NUMBER WS+ ('hours' | 'hour') ;

FREQUENCY_PER_DAY : NUMBER ('x/day' | 'x/d' | WS 'x/d' | WS 'x/day') ;
FREQUENCY_PER_WEEK : NUMBER ('x/week' | 'x/w' | WS 'x/w' | WS 'x/week') ;
FREQUENCY_PER_MONTH : NUMBER ('x/month' | 'x/m' | WS 'x/m' | WS 'x/month') ;
FREQUENCY_PER_YEAR : NUMBER ('x/year' | 'x/y' | WS 'x/y' | WS 'x/year') ;
FREQUENCY_PER_HOUR : NUMBER ('x/hour' | 'x/h' | WS 'x/h' | WS 'x/hour') ;
FREQUENCY_PER_MINUTE : NUMBER ('x/minute' | 'x/min' | WS 'x/min' | WS 'x/minute') ;

UD      : 'ud' | 'as directed' ;
QD      : 'qd' | 'daily' | 'once daily' ;
BID     : 'bid' | 'twice daily' | 'bd' ;
TID     : 'tid' | 'three times daily' | 'tds' ;
QID     : 'qid' | 'four times daily' | 'qds' ;
QOD     : 'qod' | 'every other day' | 'alternate days' ;
QAM     : 'qam' | 'every morning' | 'in the morning' | 'morning' ;
QMO     : 'qmo' | '1 time a month' ;
QPM     : 'qpm' | 'every evening' | 'in the evening' | 'evening' ;
QHS     : 'qhs' | 'every night' | 'at night' | 'nightly' ;
QMN     : 'qmn' | 'every midnight' | 'at midnight' ;
TIW     : 'tiw' | 'three times a week' | '3x week' ;
BIW     : 'biw' | 'twice a week' | '2x week' ;
QW      : 'qw' | 'weekly' | 'once a week' ;
QMW     : 'qmw' | 'monthly' | 'once a month' ;
STAT    : 'stat' | 'now' | 'immediate' | 'immediately' | 'asap' ;
PRN     : 'prn' | 'as needed' | 'when needed' | 'if needed' | 'as required' ;

ONCE    : 'once' ;
TWICE   : 'twice' ;
THRICE  : 'thrice' | 'three times' ;

AC               : 'ac' ;
PC               : 'pc' ;
HS               : 'hs' ;
WC               : 'wc' ;

ORAL        : 'oral' | 'orally' | 'by mouth' ;
PO          : 'po' ;
SL          : 'sublingual' | 'sl' ;
BUCCAL      : 'buccal' ;
RECTAL      : 'rectal' | 'pr' | 'rectally' ;
VAGINAL     : 'vaginal' | 'pv' | 'vaginally' ;
TOPICAL     : 'topical' | 'top' | 'topically' | 'externally' ;
TRANSDERMAL : 'transdermal' | 'td' | 'transdermally' ;
OPHTHALMIC  : 'ophthalmic' | 'oph' | 'eye' | 'ocular' ;
OTIC        : 'otic' | 'aural' | 'ear' ;
NASAL       : 'nasal' | 'intranasal' | 'nasally' ;
INHALATION  : 'inhalation' | 'inh' | 'inhaled' | 'inhale' ;
IV          : 'iv' | 'intravenous' | 'intravenously' ;
IM          : 'im' | 'intramuscular' | 'intramuscularly' ;
SC          : 'sc' | 'subcutaneous' | 'subq' | 'subcutaneously' ;
ID          : 'id' | 'intradermal' | 'intradermally' ;
IA          : 'ia' | 'intra-articular' | 'intraarticular' ;
IT          : 'it' | 'intrathecal' | 'intrathecally' ;
IP          : 'ip' | 'intraperitoneal' | 'intraperitoneally' ;
INTRATHECAL_FULL : 'epidural' ;
IN          : 'in' ;
NEB         : 'neb' | 'nebulizer' ;
QS          : 'qs' | 'a sufficient quantity' ;
DISP        : 'disp' | 'dispense' ;
NR          : 'nr' | 'no refill' ;
NPO         : 'npo' | 'nothing by mouth' ;
OTC         : 'otc' | 'over the counter' ;
QMON        : 'qmon' | 'every monday' ;
QTUE        : 'qtue' | 'every tuesday' ;
QWED        : 'qwed' | 'every wednesday' ;
QTHURS      : 'qthurs' | 'every thursday' ;
QFRI        : 'qfri' | 'every friday' ;
QSAT        : 'qsat' | 'every saturday' ;
QSUN        : 'qsun' | 'every sunday' ;

NOSTRIL         : 'nostril' ;
LEFT_NOSTRIL    : 'left nostril' ;
RIGHT_NOSTRIL   : 'right nostril' ;
NARES           : 'nares' | 'both nostrils' ;
LEFT_ARM        : 'left arm' ;
RIGHT_ARM       : 'right arm' ;
L_ARM           : 'l_arm' ;
R_ARM           : 'r_arm' ;
THIGH           : 'thigh' ;
GLUTEAL         : 'gluteal' | 'buttock' | 'buttocks' ;
ABDOMEN         : 'abdomen' | 'abdominal area' | 'belly' ;
CHEST           : 'chest' ;
BACK            : 'back' ;
SCALP           : 'scalp' ;
MOUTH           : 'mouth' ;
CHEEK           : 'cheek' ;
JOINT           : 'joint' ;
SPINE_AREA      : 'spine' ;
VAGINA          : 'vagina' ;
RECTUM          : 'rectum' ;
DELTOID         : 'deltoid muscle' ;
VASTUS_LATERALIS : 'vastus lateralis' | 'outer thigh' ;

WS : [ \t\r\n]+ -> channel(HIDDEN) ;