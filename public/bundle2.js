function e(e){const t=Math.sqrt(Math.pow(e,2)+Math.pow(e,2))/2;return -(e-Math.sqrt(Math.pow(e,2)-Math.pow(t,2)))/t}function t(e,t,s){return {x:null!=e?e:0,y:null!=t?t:0,z:null!=s?s:0}}function s(e,t){return {x:null!=e?e:0,y:null!=t?t:0}}class h{static next(){return (++h.seed).toString(16).toUpperCase()}static peek(){return (h.seed+1).toString(16).toUpperCase()}static clear(){h.seed=0;}}h.seed=0;class o{constructor(){this.handle=h.next();}dxfy(e){e.type("ENDBLK"),e.handle(this.handle),e.push(330,this.ownerObjectHandle),e.subclassMarker("AcDbEntity"),e.layerName("0"),e.subclassMarker("AcDbBlockEnd");}}const d=(e,t)=>({tl:e,br:t});class a{static centerRadiusBBox(e,s){return d(t(e.x-s,e.y+s),t(e.x+s,e.y-s))}static pointBBox(e){return d(t(e.x-100,e.y+100),t(e.x+100,e.y-100))}static lineBBox(e,s){const n=e.x>s.x?e.x:s.x,i=e.x<s.x?e.x:s.x,h=e.y>s.y?e.y:s.y,o=e.y<s.y?e.y:s.y,a=e.z>s.z?e.z:s.z,l=e.z<s.z?e.z:s.z;return d(t(i,h,l),t(n,o,a))}static verticesBBox(e){let s=-1/0,n=-1/0,i=1/0,h=1/0;for(let t=0;t<e.length;t++){const{x:o,y:d}=e[t];s<o&&(s=o),n<d&&(n=d),i>o&&(i=o),h>d&&(h=d);}return d(t(i,n),t(s,h))}static boundingBox(e){if(0===e.length)return a.pointBBox(t());const s=[];for(let t=0;t<e.length;t++){const n=e[t];s.push(n.tl,n.br);}return a.verticesBBox(s)}static boundingBoxCenter(e){return t(e.tl.x+(e.br.x-e.tl.x)/2,e.br.y+(e.tl.y-e.br.y)/2,0)}static boundingBoxHeight(e){return e.tl.y-e.br.y}}var l,r,f;!function(e){e[e.None=0]="None",e[e.Frozen=1]="Frozen",e[e.FrozenInNewViewports=2]="FrozenInNewViewports",e[e.Locked=4]="Locked",e[e.XRefDependent=16]="XRefDependent",e[e.XRefResolved=32]="XRefResolved";}(l||(l={})),function(e){e[e.None=0]="None",e[e.DescribeShape=1]="DescribeShape",e[e.VerticalText=4]="VerticalText",e[e.XRefDependent=16]="XRefDependent",e[e.XRefResolved=32]="XRefResolved";}(r||(r={})),function(e){e[e.None=0]="None",e[e.PaperSpace=1]="PaperSpace",e[e.XRefDependent=16]="XRefDependent",e[e.XRefResolved=32]="XRefResolved";}(f||(f={}));class u{constructor(e){this.type=e,this.handle=h.next();}dxfy(e){e.type(this.type),e.handle(this.handle),e.push(330,this.ownerObjectHandle),e.subclassMarker("AcDbSymbolTableRecord");}}class c extends u{constructor(e,t,s,n){super("LAYER"),this.name=e,this.colorNumber=t,this.lineType=s,this.flags=null!=n?n:l.None;}dxfy(e){super.dxfy(e),e.subclassMarker("AcDbLayerTableRecord"),e.name(this.name),e.push(70,this.flags),e.colorNumber(this.colorNumber),e.push(420,this.trueColor),e.lineType(this.lineType),e.push(370,0),e.push(390,0),e.push(347,this.materialObject);}}c.layerZeroName="0";const g=[[["00","00","00"],0,["0","0","0"]],[["FF","00","00"],1,["255","0","0"]],[["FF","FF","00"],2,["255","255","0"]],[["00","FF","00"],3,["0","255","0"]],[["00","FF","FF"],4,["0","255","255"]],[["00","00","FF"],5,["0","0","255"]],[["FF","00","FF"],6,["255","0","255"]],[["FF","FF","FF"],7,["255","255","255"]],[["41","41","41"],8,["65","65","65"]],[["80","80","80"],9,["128","128","128"]],[["FF","00","00"],10,["255","0","0"]],[["FF","AA","AA"],11,["255","170","170"]],[["BD","00","00"],12,["189","0","0"]],[["BD","7E","7E"],13,["189","126","126"]],[["81","00","00"],14,["129","0","0"]],[["81","56","56"],15,["129","86","86"]],[["68","00","00"],16,["104","0","0"]],[["68","45","45"],17,["104","69","69"]],[["4F","00","00"],18,["79","0","0"]],[["4F","35","35"],19,["79","53","53"]],[["FF","3F","00"],20,["255","63","0"]],[["FF","BF","AA"],21,["255","191","170"]],[["BD","2E","00"],22,["189","46","0"]],[["BD","8D","7E"],23,["189","141","126"]],[["81","1F","00"],24,["129","31","0"]],[["81","60","56"],25,["129","96","86"]],[["68","19","00"],26,["104","25","0"]],[["68","4E","45"],27,["104","78","69"]],[["4F","13","00"],28,["79","19","0"]],[["4F","3B","35"],29,["79","59","53"]],[["FF","7F","00"],30,["255","127","0"]],[["FF","D4","AA"],31,["255","212","170"]],[["BD","5E","00"],32,["189","94","0"]],[["BD","9D","7E"],33,["189","157","126"]],[["81","40","00"],34,["129","64","0"]],[["81","6B","56"],35,["129","107","86"]],[["68","34","00"],36,["104","52","0"]],[["68","56","45"],37,["104","86","69"]],[["4F","27","00"],38,["79","39","0"]],[["4F","42","35"],39,["79","66","53"]],[["FF","BF","00"],40,["255","191","0"]],[["FF","EA","AA"],41,["255","234","170"]],[["BD","8D","00"],42,["189","141","0"]],[["BD","AD","7E"],43,["189","173","126"]],[["81","60","00"],44,["129","96","0"]],[["81","76","56"],45,["129","118","86"]],[["68","4E","00"],46,["104","78","0"]],[["68","5F","45"],47,["104","95","69"]],[["4F","3B","00"],48,["79","59","0"]],[["4F","49","35"],49,["79","73","53"]],[["FF","FF","00"],50,["255","255","0"]],[["FF","FF","AA"],51,["255","255","170"]],[["BD","BD","00"],52,["189","189","0"]],[["BD","BD","7E"],53,["189","189","126"]],[["81","81","00"],54,["129","129","0"]],[["81","81","56"],55,["129","129","86"]],[["68","68","00"],56,["104","104","0"]],[["68","68","45"],57,["104","104","69"]],[["4F","4F","00"],58,["79","79","0"]],[["4F","4F","35"],59,["79","79","53"]],[["BF","FF","00"],60,["191","255","0"]],[["EA","FF","AA"],61,["234","255","170"]],[["8D","BD","00"],62,["141","189","0"]],[["AD","BD","7E"],63,["173","189","126"]],[["60","81","00"],64,["96","129","0"]],[["76","81","56"],65,["118","129","86"]],[["4E","68","00"],66,["78","104","0"]],[["5F","68","45"],67,["95","104","69"]],[["3B","4F","00"],68,["59","79","0"]],[["49","4F","35"],69,["73","79","53"]],[["7F","FF","00"],70,["127","255","0"]],[["D4","FF","AA"],71,["212","255","170"]],[["5E","BD","00"],72,["94","189","0"]],[["9D","BD","7E"],73,["157","189","126"]],[["40","81","00"],74,["64","129","0"]],[["6B","81","56"],75,["107","129","86"]],[["34","68","00"],76,["52","104","0"]],[["56","68","45"],77,["86","104","69"]],[["27","4F","00"],78,["39","79","0"]],[["42","4F","35"],79,["66","79","53"]],[["3F","FF","00"],80,["63","255","0"]],[["BF","FF","AA"],81,["191","255","170"]],[["2E","BD","00"],82,["46","189","0"]],[["8D","BD","7E"],83,["141","189","126"]],[["1F","81","00"],84,["31","129","0"]],[["60","81","56"],85,["96","129","86"]],[["19","68","00"],86,["25","104","0"]],[["4E","68","45"],87,["78","104","69"]],[["13","4F","00"],88,["19","79","0"]],[["3B","4F","35"],89,["59","79","53"]],[["00","FF","00"],90,["0","255","0"]],[["AA","FF","AA"],91,["170","255","170"]],[["00","BD","00"],92,["0","189","0"]],[["7E","BD","7E"],93,["126","189","126"]],[["00","81","00"],94,["0","129","0"]],[["56","81","56"],95,["86","129","86"]],[["00","68","00"],96,["0","104","0"]],[["45","68","45"],97,["69","104","69"]],[["00","4F","00"],98,["0","79","0"]],[["35","4F","35"],99,["53","79","53"]],[["00","FF","3F"],100,["0","255","63"]],[["AA","FF","BF"],101,["170","255","191"]],[["00","BD","2E"],102,["0","189","46"]],[["7E","BD","8D"],103,["126","189","141"]],[["00","81","1F"],104,["0","129","31"]],[["56","81","60"],105,["86","129","96"]],[["00","68","19"],106,["0","104","25"]],[["45","68","4E"],107,["69","104","78"]],[["00","4F","13"],108,["0","79","19"]],[["35","4F","3B"],109,["53","79","59"]],[["00","FF","7F"],110,["0","255","127"]],[["AA","FF","D4"],111,["170","255","212"]],[["00","BD","5E"],112,["0","189","94"]],[["7E","BD","9D"],113,["126","189","157"]],[["00","81","40"],114,["0","129","64"]],[["56","81","6B"],115,["86","129","107"]],[["00","68","34"],116,["0","104","52"]],[["45","68","56"],117,["69","104","86"]],[["00","4F","27"],118,["0","79","39"]],[["35","4F","42"],119,["53","79","66"]],[["00","FF","BF"],120,["0","255","191"]],[["AA","FF","EA"],121,["170","255","234"]],[["00","BD","8D"],122,["0","189","141"]],[["7E","BD","AD"],123,["126","189","173"]],[["00","81","60"],124,["0","129","96"]],[["56","81","76"],125,["86","129","118"]],[["00","68","4E"],126,["0","104","78"]],[["45","68","5F"],127,["69","104","95"]],[["00","4F","3B"],128,["0","79","59"]],[["35","4F","49"],129,["53","79","73"]],[["00","FF","FF"],130,["0","255","255"]],[["AA","FF","FF"],131,["170","255","255"]],[["00","BD","BD"],132,["0","189","189"]],[["7E","BD","BD"],133,["126","189","189"]],[["00","81","81"],134,["0","129","129"]],[["56","81","81"],135,["86","129","129"]],[["00","68","68"],136,["0","104","104"]],[["45","68","68"],137,["69","104","104"]],[["00","4F","4F"],138,["0","79","79"]],[["35","4F","4F"],139,["53","79","79"]],[["00","BF","FF"],140,["0","191","255"]],[["AA","EA","FF"],141,["170","234","255"]],[["00","8D","BD"],142,["0","141","189"]],[["7E","AD","BD"],143,["126","173","189"]],[["00","60","81"],144,["0","96","129"]],[["56","76","81"],145,["86","118","129"]],[["00","4E","68"],146,["0","78","104"]],[["45","5F","68"],147,["69","95","104"]],[["00","3B","4F"],148,["0","59","79"]],[["35","49","4F"],149,["53","73","79"]],[["00","7F","FF"],150,["0","127","255"]],[["AA","D4","FF"],151,["170","212","255"]],[["00","5E","BD"],152,["0","94","189"]],[["7E","9D","BD"],153,["126","157","189"]],[["00","40","81"],154,["0","64","129"]],[["56","6B","81"],155,["86","107","129"]],[["00","34","68"],156,["0","52","104"]],[["45","56","68"],157,["69","86","104"]],[["00","27","4F"],158,["0","39","79"]],[["35","42","4F"],159,["53","66","79"]],[["00","3F","FF"],160,["0","63","255"]],[["AA","BF","FF"],161,["170","191","255"]],[["00","2E","BD"],162,["0","46","189"]],[["7E","8D","BD"],163,["126","141","189"]],[["00","1F","81"],164,["0","31","129"]],[["56","60","81"],165,["86","96","129"]],[["00","19","68"],166,["0","25","104"]],[["45","4E","68"],167,["69","78","104"]],[["00","13","4F"],168,["0","19","79"]],[["35","3B","4F"],169,["53","59","79"]],[["00","00","FF"],170,["0","0","255"]],[["AA","AA","FF"],171,["170","170","255"]],[["00","00","BD"],172,["0","0","189"]],[["7E","7E","BD"],173,["126","126","189"]],[["00","00","81"],174,["0","0","129"]],[["56","56","81"],175,["86","86","129"]],[["00","00","68"],176,["0","0","104"]],[["45","45","68"],177,["69","69","104"]],[["00","00","4F"],178,["0","0","79"]],[["35","35","4F"],179,["53","53","79"]],[["3F","00","FF"],180,["63","0","255"]],[["BF","AA","FF"],181,["191","170","255"]],[["2E","00","BD"],182,["46","0","189"]],[["8D","7E","BD"],183,["141","126","189"]],[["1F","00","81"],184,["31","0","129"]],[["60","56","81"],185,["96","86","129"]],[["19","00","68"],186,["25","0","104"]],[["4E","45","68"],187,["78","69","104"]],[["13","00","4F"],188,["19","0","79"]],[["3B","35","4F"],189,["59","53","79"]],[["7F","00","FF"],190,["127","0","255"]],[["D4","AA","FF"],191,["212","170","255"]],[["5E","00","BD"],192,["94","0","189"]],[["9D","7E","BD"],193,["157","126","189"]],[["40","00","81"],194,["64","0","129"]],[["6B","56","81"],195,["107","86","129"]],[["34","00","68"],196,["52","0","104"]],[["56","45","68"],197,["86","69","104"]],[["27","00","4F"],198,["39","0","79"]],[["42","35","4F"],199,["66","53","79"]],[["BF","00","FF"],200,["191","0","255"]],[["EA","AA","FF"],201,["234","170","255"]],[["8D","00","BD"],202,["141","0","189"]],[["AD","7E","BD"],203,["173","126","189"]],[["60","00","81"],204,["96","0","129"]],[["76","56","81"],205,["118","86","129"]],[["4E","00","68"],206,["78","0","104"]],[["5F","45","68"],207,["95","69","104"]],[["3B","00","4F"],208,["59","0","79"]],[["49","35","4F"],209,["73","53","79"]],[["FF","00","FF"],210,["255","0","255"]],[["FF","AA","FF"],211,["255","170","255"]],[["BD","00","BD"],212,["189","0","189"]],[["BD","7E","BD"],213,["189","126","189"]],[["81","00","81"],214,["129","0","129"]],[["81","56","81"],215,["129","86","129"]],[["68","00","68"],216,["104","0","104"]],[["68","45","68"],217,["104","69","104"]],[["4F","00","4F"],218,["79","0","79"]],[["4F","35","4F"],219,["79","53","79"]],[["FF","00","BF"],220,["255","0","191"]],[["FF","AA","EA"],221,["255","170","234"]],[["BD","00","8D"],222,["189","0","141"]],[["BD","7E","AD"],223,["189","126","173"]],[["81","00","60"],224,["129","0","96"]],[["81","56","76"],225,["129","86","118"]],[["68","00","4E"],226,["104","0","78"]],[["68","45","5F"],227,["104","69","95"]],[["4F","00","3B"],228,["79","0","59"]],[["4F","35","49"],229,["79","53","73"]],[["FF","00","7F"],230,["255","0","127"]],[["FF","AA","D4"],231,["255","170","212"]],[["BD","00","5E"],232,["189","0","94"]],[["BD","7E","9D"],233,["189","126","157"]],[["81","00","40"],234,["129","0","64"]],[["81","56","6B"],235,["129","86","107"]],[["68","00","34"],236,["104","0","52"]],[["68","45","56"],237,["104","69","86"]],[["4F","00","27"],238,["79","0","39"]],[["4F","35","42"],239,["79","53","66"]],[["FF","00","3F"],240,["255","0","63"]],[["FF","AA","BF"],241,["255","170","191"]],[["BD","00","2E"],242,["189","0","46"]],[["BD","7E","8D"],243,["189","126","141"]],[["81","00","1F"],244,["129","0","31"]],[["81","56","60"],245,["129","86","96"]],[["68","00","19"],246,["104","0","25"]],[["68","45","4E"],247,["104","69","78"]],[["4F","00","13"],248,["79","0","19"]],[["4F","35","3B"],249,["79","53","59"]],[["33","33","33"],250,["51","51","51"]],[["50","50","50"],251,["80","80","80"]],[["69","69","69"],252,["105","105","105"]],[["82","82","82"],253,["130","130","130"]],[["BE","BE","BE"],254,["190","190","190"]],[["FF","FF","FF"],255,["255","255","255"]]];function p(e){let t="";const s=g.find((t=>{const[,s]=t;return s===e}));if(s){const[e]=s,[n,i,h]=e;t=`${n}${i}${h}`;}return t}class A{constructor(e){this.name=e,this.tags=[];}add(e,t){this.tags.push({code:e,value:t});}dxfy(e){e.push(102,`{${this.name}`);for(const t of this.tags)e.push(t.code,t.value);e.push(102,"}");}}class y{constructor(){this.lines=[];}push(e,t){null!=t&&this.lines.push(e,t);}stringify(){return this.lines.join("\n")}start(e){this.push(0,"SECTION"),this.push(2,e);}end(){this.push(0,"ENDSEC");}variableName(e){this.push(9,e);}type(e){this.push(0,e);}primaryText(e){this.push(1,e);}name(e,t=2){this.push(t,e);}handle(e){this.push(5,e);}lineType(e){this.push(6,e);}textStyle(e){this.push(7,e);}layerName(e){this.push(8,e);}point2d(e,t=0){this.push(10+t,null==e?void 0:e.x),this.push(20+t,null==e?void 0:e.y);}point3d(e,t=0){this.point2d(e,t),this.push(30+t,null==e?void 0:e.z);}elevation(e){this.push(38,e);}thickness(e){this.push(39,e);}visibilty(e){null!=e&&this.push(60,e?0:1);}colorNumber(e){this.push(62,e);}subclassMarker(e){this.push(100,e);}}var m,x,I,L;function S(e,t,s,n){if("a"===s&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return "m"===s?n:"a"===s?n.call(e):n?n.value:t.get(e)}function D(e,t,s,n,i){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return "a"===n?i.call(e,s):i?i.value=s:t.set(e,s),s}function b(e,t){return {code:e,value:t}}function E(e,t=255){const s=[],n=[];for(let i=0;i<e.length;i++){const h=e[i];n.length===t||i===e.length-1?(s.push(n.join("")),n.length=0):n.push(h);}return s}!function(e){e[e.Red=1]="Red",e[e.Green=3]="Green",e[e.Cyan=4]="Cyan",e[e.Blue=5]="Blue",e[e.Magenta=6]="Magenta",e[e.White=7]="White",e[e.Black=0]="Black",e[e.Yellow=2]="Yellow";}(m||(m={})),function(e){e[e.Unitless=0]="Unitless",e[e.Inches=1]="Inches",e[e.Feet=2]="Feet",e[e.Miles=3]="Miles",e[e.Millimeters=4]="Millimeters",e[e.Centimeters=5]="Centimeters",e[e.Meters=6]="Meters",e[e.Kilometers=7]="Kilometers",e[e.Microinches=8]="Microinches",e[e.Mils=9]="Mils",e[e.Yards=10]="Yards",e[e.Angstroms=11]="Angstroms",e[e.Nanometers=12]="Nanometers",e[e.Microns=13]="Microns",e[e.Decimeters=14]="Decimeters",e[e.Decameters=15]="Decameters",e[e.Hectometers=16]="Hectometers",e[e.Gigameters=17]="Gigameters",e[e.AstronomicalUnits=18]="AstronomicalUnits",e[e.LightYears=19]="LightYears",e[e.Parsecs=20]="Parsecs",e[e.USSurveyFeet=21]="USSurveyFeet",e[e.USSurveyInch=22]="USSurveyInch",e[e.USSurveyYard=23]="USSurveyYard",e[e.USSurveyMile=24]="USSurveyMile";}(x||(x={})),function(e){e.Continuous="Continuous";}(I||(I={})),"function"==typeof SuppressedError&&SuppressedError;class F{constructor(e){L.set(this,void 0),this.name=e,D(this,L,[],"f");}clear(){S(this,L,"f").length=0;}string(e){E(e).forEach((e=>S(this,L,"f").push(b(1e3,e))));}beginList(){S(this,L,"f").push(b(1002,"{"));}endList(){S(this,L,"f").push(b(1002,"}"));}layerName(e){S(this,L,"f").push(b(1003,e));}binaryData(e){E(e).forEach((e=>S(this,L,"f").push(b(1004,e))));}databaseHandle(e){S(this,L,"f").push(b(1005,e));}point(e){S(this,L,"f").push(b(1010,e.x)),S(this,L,"f").push(b(1020,e.y)),S(this,L,"f").push(b(1030,e.z));}position(e){S(this,L,"f").push(b(1011,e.x)),S(this,L,"f").push(b(1021,e.y)),S(this,L,"f").push(b(1031,e.z));}displacement(e){S(this,L,"f").push(b(1012,e.x)),S(this,L,"f").push(b(1022,e.y)),S(this,L,"f").push(b(1032,e.z));}direction(e){S(this,L,"f").push(b(1013,e.x)),S(this,L,"f").push(b(1023,e.y)),S(this,L,"f").push(b(1033,e.z));}real(e){S(this,L,"f").push(b(1040,e));}distance(e){S(this,L,"f").push(b(1041,e));}scale(e){S(this,L,"f").push(b(1042,e));}integer(e){S(this,L,"f").push(b(1070,e));}long(e){S(this,L,"f").push(b(1071,e));}dxfy(e){e.push(1001,this.name),e.push(1002,"{"),S(this,L,"f").forEach((t=>e.push(t.code,t.value))),e.push(1002,"}");}}L=new WeakMap;class C{set angle(e){this.patternsData.forEach((t=>t.lineAngle=e));}constructor(e){this.name=e,this.patternsData=[],this.scale=1;}dxfy(e){e.push(78,this.patternsData.length);for(const t of this.patternsData){e.push(53,t.lineAngle),e.push(43,t.x),e.push(44,t.y),e.push(45,t.offsetX*this.scale),e.push(46,t.offsetY*this.scale),e.push(79,t.dashLengthItems.length);for(const s of t.dashLengthItems)e.push(49,s*this.scale);}}add(e){this.patternsData.push(e);}}const T=new Map,X=new C("ANGLE");X.add({lineAngle:0,x:0,y:0,offsetX:.275,offsetY:.2,dashLengthItems:[-.075]}),X.add({lineAngle:90,x:0,y:0,offsetX:.275,offsetY:.2,dashLengthItems:[-.075]}),T.set("ANGLE",X);const R=new C("ANSI31");R.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:1.25,dashLengthItems:[]}),T.set("ANSI31",R);const Y=new C("ANSI32");Y.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:3.175,dashLengthItems:[]}),T.set("ANSI32",Y);const B=new C("ANSI33");B.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:9.525,dashLengthItems:[]}),B.add({lineAngle:45,x:4.49013,y:0,offsetX:0,offsetY:9.525,dashLengthItems:[]}),T.set("ANSI33",B);const w=new C("ANSI34");w.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:6.35,dashLengthItems:[]}),w.add({lineAngle:45,x:4.49013,y:0,offsetX:0,offsetY:6.35,dashLengthItems:[3.175,-1.5875]}),T.set("ANSI34",w);const N=new C("ANSI35");N.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:19.05,dashLengthItems:[]}),N.add({lineAngle:45,x:4.49013,y:0,offsetX:0,offsetY:19.05,dashLengthItems:[]}),N.add({lineAngle:45,x:8.98026,y:0,offsetX:0,offsetY:19.05,dashLengthItems:[]}),N.add({lineAngle:45,x:13.4704,y:0,offsetX:0,offsetY:19.05,dashLengthItems:[]}),T.set("ANSI35",N);const M=new C("ANSI36");M.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:6.35,dashLengthItems:[]}),M.add({lineAngle:45,x:4.49013,y:0,offsetX:0,offsetY:6.35,dashLengthItems:[7.9375,-1.5875,0,-1.5875]}),T.set("ANSI36",M);const P=new C("ANSI37");P.add({lineAngle:45,x:0,y:0,offsetX:5.55625,offsetY:3.175,dashLengthItems:[7.9375,-1.5875,0,-1.5875]}),T.set("ANSI37",P);const O=new C("ANSI38");O.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:3.175,dashLengthItems:[]}),O.add({lineAngle:135,x:0,y:0,offsetX:0,offsetY:3.175,dashLengthItems:[]}),T.set("ANSI38",O);const _=new C("AR_B816");_.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:3.175,dashLengthItems:[]}),_.add({lineAngle:135,x:0,y:0,offsetX:6.35,offsetY:3.175,dashLengthItems:[7.9375,-4.7625]}),T.set("AR_B816",_);const H=new C("AR_B816C");H.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:203.2,dashLengthItems:[]}),H.add({lineAngle:90,x:0,y:0,offsetX:203.2,offsetY:203.2,dashLengthItems:[203.2,-203.2]}),T.set("AR_B816C",H);const k=new C("AR_B88");k.add({lineAngle:0,x:0,y:0,offsetX:203.2,offsetY:203.2,dashLengthItems:[396.875,-9.525]}),k.add({lineAngle:0,x:-203.2,y:9.525,offsetX:203.2,offsetY:203.2,dashLengthItems:[396.875,-9.525]}),k.add({lineAngle:90,x:0,y:0,offsetX:203.2,offsetY:203.2,dashLengthItems:[-212.725,193.675]}),k.add({lineAngle:90,x:-9.525,y:0,offsetX:203.2,offsetY:203.2,dashLengthItems:[-212.725,193.675]}),T.set("AR_B88",k);const W=new C("AR_BRELM");W.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:203.2,dashLengthItems:[]}),W.add({lineAngle:90,x:0,y:0,offsetX:203.2,offsetY:101.6,dashLengthItems:[203.2,-203.2]}),T.set("AR_BRELM",W);const V=new C("AR_BRSTD");V.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:135.484,dashLengthItems:[193.675,-9.525]}),V.add({lineAngle:0,x:0,y:57.15,offsetX:0,offsetY:135.484,dashLengthItems:[193.675,-9.525]}),V.add({lineAngle:0,x:50.8,y:67.7418,offsetX:0,offsetY:135.484,dashLengthItems:[92.075,-9.525]}),V.add({lineAngle:0,x:50.8,y:124.892,offsetX:0,offsetY:135.484,dashLengthItems:[92.075,-9.525]}),V.add({lineAngle:90,x:0,y:0,offsetX:0,offsetY:203.2,dashLengthItems:[57.15,-78.334]}),V.add({lineAngle:90,x:-9.525,y:0,offsetX:0,offsetY:203.2,dashLengthItems:[57.15,-78.334]}),V.add({lineAngle:90,x:50.8,y:67.7418,offsetX:0,offsetY:101.6,dashLengthItems:[57.15,-78.334]}),V.add({lineAngle:90,x:41.275,y:67.7418,offsetX:0,offsetY:101.6,dashLengthItems:[57.15,-78.334]}),T.set("AR_BRSTD",V);const U=new C("AR_CONC");U.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:67.7418,dashLengthItems:[]}),U.add({lineAngle:90,x:0,y:0,offsetX:67.7418,offsetY:101.6,dashLengthItems:[67.7418,-67.7418]}),T.set("AR_CONC",U);const j=new C("AR_HBONE");j.add({lineAngle:50,x:0,y:0,offsetX:104.896,offsetY:-149.807,dashLengthItems:[19.05,-209.55]}),j.add({lineAngle:355,x:0,y:0,offsetX:-51.76101082,offsetY:187.25814969,dashLengthItems:[15.24,-167.64058417]}),j.add({lineAngle:100.4514447,x:15.182007,y:-1.3282535,offsetX:145.5569059,offsetY:-176.270089,dashLengthItems:[16.1900088,-178.0902446]}),j.add({lineAngle:46.1842,x:0,y:50.8,offsetX:157.343,offsetY:-224.71,dashLengthItems:[28.575,-314.325]}),j.add({lineAngle:96.63555761,x:22.5899,y:47.2965,offsetX:218.33577212,offsetY:-264.40480444,dashLengthItems:[24.28502314,-267.13560816]}),j.add({lineAngle:351.18415117,x:0,y:50.8,offsetX:196.67912063,offsetY:280.88740361,dashLengthItems:[22.85996707,-251.45973192]}),j.add({lineAngle:21,x:25.4,y:38.1,offsetX:104.89565868,offsetY:-149.80652586,dashLengthItems:[19.05,-209.55]}),j.add({lineAngle:326,x:25.4,y:38.1,offsetX:-51.7604,offsetY:187.258,dashLengthItems:[15.24,-167.64]}),j.add({lineAngle:71.451445,x:38.0345326,y:29.5779001,offsetX:145.5567546,offsetY:-176.2700748,dashLengthItems:[16.1900088,-178.0899376]}),j.add({lineAngle:37.5,x:0,y:0,offsetX:53.9242,offsetY:65.2018,dashLengthItems:[0,-165.608,0,-170.18,0,-168.275]}),j.add({lineAngle:7.5,x:0,y:0,offsetX:79.3242,offsetY:90.6018,dashLengthItems:[0,-97.028,0,-161.798,0,-64.135]}),j.add({lineAngle:-32.5,x:-56.642,y:0,offsetX:117.434,offsetY:68.0212,dashLengthItems:[0,-63.5,0,-198.12,0,-262.89]}),j.add({lineAngle:-42.5,x:-82.042,y:0,offsetX:92.0344,offsetY:118.821,dashLengthItems:[0,-82.55,0,-131.572,0,-186.69]}),T.set("AR_HBONE",j);const G=new C("AR_PARQ1");G.add({lineAngle:45,x:0,y:0,offsetX:101.6,offsetY:101.6,dashLengthItems:[304.8,-101.6]}),G.add({lineAngle:135,x:71.842,y:71.842,offsetX:101.6,offsetY:-101.6,dashLengthItems:[304.8,-101.6]}),T.set("AR_PARQ1",G);const z=new C("AR_RROOF");z.add({lineAngle:90,x:0,y:0,offsetX:304.8,offsetY:304.8,dashLengthItems:[304.8,-304.8]}),z.add({lineAngle:90,x:50.8,y:0,offsetX:304.8,offsetY:304.8,dashLengthItems:[304.8,-304.8]}),z.add({lineAngle:90,x:101.6,y:0,offsetX:304.8,offsetY:304.8,dashLengthItems:[304.8,-304.8]}),z.add({lineAngle:90,x:152.4,y:0,offsetX:304.8,offsetY:304.8,dashLengthItems:[304.8,-304.8]}),z.add({lineAngle:90,x:203.2,y:0,offsetX:304.8,offsetY:304.8,dashLengthItems:[304.8,-304.8]}),z.add({lineAngle:90,x:254,y:0,offsetX:304.8,offsetY:304.8,dashLengthItems:[304.8,-304.8]}),z.add({lineAngle:90,x:304.8,y:0,offsetX:304.8,offsetY:304.8,dashLengthItems:[304.8,-304.8]}),z.add({lineAngle:0,x:0,y:304.8,offsetX:304.8,offsetY:-304.8,dashLengthItems:[304.8,-304.8]}),z.add({lineAngle:0,x:0,y:355.6,offsetX:304.8,offsetY:-304.8,dashLengthItems:[304.8,-304.8]}),z.add({lineAngle:0,x:0,y:406.4,offsetX:304.8,offsetY:-304.8,dashLengthItems:[304.8,-304.8]}),z.add({lineAngle:0,x:0,y:457.2,offsetX:304.8,offsetY:-304.8,dashLengthItems:[304.8,-304.8]}),z.add({lineAngle:0,x:0,y:508,offsetX:304.8,offsetY:-304.8,dashLengthItems:[304.8,-304.8]}),z.add({lineAngle:0,x:0,y:558.8,offsetX:304.8,offsetY:-304.8,dashLengthItems:[304.8,-304.8]}),z.add({lineAngle:0,x:0,y:609.6,offsetX:304.8,offsetY:-304.8,dashLengthItems:[304.8,-304.8]}),T.set("AR_RROOF",z);const J=new C("AR_RSHKE");J.add({lineAngle:0,x:0,y:0,offsetX:55.88,offsetY:25.4,dashLengthItems:[381,-50.8,127,-25.4]}),J.add({lineAngle:0,x:33.782,y:12.7,offsetX:-25.4,offsetY:33.782,dashLengthItems:[76.2,-8.382,152.4,-19.05]}),J.add({lineAngle:0,x:12.7,y:21.59,offsetX:132.08,offsetY:17.018,dashLengthItems:[203.2,-35.56,101.6,-25.4]}),T.set("AR_RSHKE",J);const K=new C("AR_SAND");K.add({lineAngle:0,x:0,y:0,offsetX:647.7,offsetY:304.8,dashLengthItems:[152.4,-127,177.8,-76.2,228.6,-101.6]}),K.add({lineAngle:0,x:152.4,y:12.7,offsetX:647.7,offsetY:304.8,dashLengthItems:[127,-482.6,101.6,-152.4]}),K.add({lineAngle:0,x:457.2,y:-19.05,offsetX:647.7,offsetY:304.8,dashLengthItems:[76.2,-787.4]}),K.add({lineAngle:90,x:0,y:0,offsetX:304.8,offsetY:215.9,dashLengthItems:[292.1,-927.1]}),K.add({lineAngle:90,x:152.4,y:0,offsetX:304.8,offsetY:215.9,dashLengthItems:[285.75,-933.45]}),K.add({lineAngle:90,x:279.4,y:0,offsetX:304.8,offsetY:215.9,dashLengthItems:[266.7,-952.5]}),K.add({lineAngle:90,x:457.2,y:-19.05,offsetX:304.8,offsetY:215.9,dashLengthItems:[292.1,-927.1]}),K.add({lineAngle:90,x:533.4,y:-19.05,offsetX:304.8,offsetY:215.9,dashLengthItems:[292.1,-927.1]}),K.add({lineAngle:90,x:762,y:0,offsetX:304.8,offsetY:215.9,dashLengthItems:[279.4,-939.8]}),T.set("AR_SAND",K);const Z=new C("BOX");Z.add({lineAngle:37.5,x:0,y:0,offsetX:28.5242,offsetY:39.8018,dashLengthItems:[0,-38.608,0,-43.18,0,-41.275]}),Z.add({lineAngle:7.5,x:0,y:0,offsetX:53.9242,offsetY:65.2018,dashLengthItems:[0,-20.828,0,-34.798,0,-13.335]}),Z.add({lineAngle:-32.5,x:-31.242,y:0,offsetX:66.6344,offsetY:42.6212,dashLengthItems:[0,-12.7,0,-45.72,0,-59.69]}),Z.add({lineAngle:-42.5,x:-31.242,y:0,offsetX:41.2344,offsetY:68.0212,dashLengthItems:[0,-6.35,0,-29.972,0,-34.29]}),T.set("BOX",Z);const q=new C("BRASS");q.add({lineAngle:90,x:0,y:0,offsetX:0,offsetY:25.4,dashLengthItems:[]}),q.add({lineAngle:90,x:6.35,y:0,offsetX:0,offsetY:25.4,dashLengthItems:[]}),q.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:25.4,dashLengthItems:[-6.35,6.35]}),q.add({lineAngle:0,x:0,y:6.35,offsetX:0,offsetY:25.4,dashLengthItems:[-6.35,6.35]}),q.add({lineAngle:0,x:0,y:12.7,offsetX:0,offsetY:25.4,dashLengthItems:[6.35,-6.35]}),q.add({lineAngle:0,x:0,y:19.05,offsetX:0,offsetY:25.4,dashLengthItems:[6.35,-6.35]}),q.add({lineAngle:90,x:12.7,y:0,offsetX:0,offsetY:25.4,dashLengthItems:[6.35,-6.35]}),q.add({lineAngle:90,x:19.05,y:0,offsetX:0,offsetY:25.4,dashLengthItems:[6.35,-6.35]}),T.set("BRASS",q);const $=new C("BRICK");$.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:6.35,dashLengthItems:[]}),$.add({lineAngle:0,x:0,y:3.175,offsetX:0,offsetY:6.35,dashLengthItems:[3.175,-1.5875]}),T.set("BRICK",$);const Q=new C("BRSTONE");Q.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:6.35,dashLengthItems:[]}),Q.add({lineAngle:90,x:0,y:0,offsetX:0,offsetY:12.7,dashLengthItems:[6.35,-6.35]}),Q.add({lineAngle:90,x:6.35,y:0,offsetX:0,offsetY:12.7,dashLengthItems:[-6.35,6.35]}),T.set("BRSTONE",Q);const ee=new C("CLAY");ee.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:8.382,dashLengthItems:[]}),ee.add({lineAngle:90,x:22.86,y:0,offsetX:8.382,offsetY:12.7,dashLengthItems:[8.382,-8.382]}),ee.add({lineAngle:90,x:20.32,y:0,offsetX:8.382,offsetY:12.7,dashLengthItems:[8.382,-8.382]}),ee.add({lineAngle:0,x:22.86,y:1.397,offsetX:12.7,offsetY:8.382,dashLengthItems:[-22.86,2.54]}),ee.add({lineAngle:0,x:22.86,y:2.794,offsetX:12.7,offsetY:8.382,dashLengthItems:[-22.86,2.54]}),ee.add({lineAngle:0,x:22.86,y:4.191,offsetX:12.7,offsetY:8.382,dashLengthItems:[-22.86,2.54]}),ee.add({lineAngle:0,x:22.86,y:5.588,offsetX:12.7,offsetY:8.382,dashLengthItems:[-22.86,2.54]}),ee.add({lineAngle:0,x:22.86,y:6.985,offsetX:12.7,offsetY:8.382,dashLengthItems:[-22.86,2.54]}),T.set("CLAY",ee);const te=new C("CORK");te.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:4.7625,dashLengthItems:[]}),te.add({lineAngle:0,x:0,y:.79375,offsetX:0,offsetY:4.7625,dashLengthItems:[]}),te.add({lineAngle:0,x:0,y:1.5875,offsetX:0,offsetY:4.7625,dashLengthItems:[]}),te.add({lineAngle:0,x:0,y:3.175,offsetX:0,offsetY:4.7625,dashLengthItems:[4.7625,-3.175]}),T.set("CORK",te);const se=new C("CROSS");se.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:3.175,dashLengthItems:[]}),se.add({lineAngle:135,x:1.5875,y:-1.5875,offsetX:0,offsetY:8.98026,dashLengthItems:[4.49013,-4.49013]}),se.add({lineAngle:135,x:2.38125,y:-1.5875,offsetX:0,offsetY:8.98026,dashLengthItems:[4.49013,-4.49013]}),se.add({lineAngle:135,x:3.175,y:-1.5875,offsetX:0,offsetY:8.98026,dashLengthItems:[4.49013,-4.49013]}),T.set("CROSS",se);const ne=new C("DASH");ne.add({lineAngle:0,x:0,y:0,offsetX:6.35,offsetY:6.35,dashLengthItems:[3.175,-9.525]}),ne.add({lineAngle:90,x:1.5875,y:-1.5875,offsetX:6.35,offsetY:6.35,dashLengthItems:[3.175,-9.525]}),T.set("DASH",ne);const ie=new C("DOLMIT");ie.add({lineAngle:0,x:0,y:0,offsetX:3.175,offsetY:3.175,dashLengthItems:[3.175,-3.175]}),T.set("DOLMIT",ie);const he=new C("DOTS");he.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:6.35,dashLengthItems:[]}),he.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:17.9605,dashLengthItems:[8.980256121069154,-17.960512242138307]}),T.set("DOTS",he);const oe=new C("EARTH");oe.add({lineAngle:0,x:0,y:0,offsetX:.79375,offsetY:1.5875,dashLengthItems:[0,-1.5875]}),T.set("EARTH",oe);const de=new C("ESCHER");de.add({lineAngle:0,x:0,y:0,offsetX:6.35,offsetY:6.35,dashLengthItems:[6.35,-6.35]}),de.add({lineAngle:0,x:0,y:2.38125,offsetX:6.35,offsetY:6.35,dashLengthItems:[6.35,-6.35]}),de.add({lineAngle:0,x:0,y:4.7625,offsetX:6.35,offsetY:6.35,dashLengthItems:[6.35,-6.35]}),de.add({lineAngle:90,x:.79375,y:5.55625,offsetX:6.35,offsetY:6.35,dashLengthItems:[6.35,-6.35]}),de.add({lineAngle:90,x:3.175,y:5.55625,offsetX:6.35,offsetY:6.35,dashLengthItems:[6.35,-6.35]}),de.add({lineAngle:90,x:5.55625,y:5.55625,offsetX:6.35,offsetY:6.35,dashLengthItems:[6.35,-6.35]}),T.set("ESCHER",de);const ae=new C("FLEX");ae.add({lineAngle:60,x:0,y:0,offsetX:-15.24,offsetY:26.3964542936,dashLengthItems:[27.94,-2.54]}),ae.add({lineAngle:180,x:0,y:0,offsetX:-15.24,offsetY:26.3964542936,dashLengthItems:[27.94,-2.54]}),ae.add({lineAngle:300,x:0,y:0,offsetX:15.24,offsetY:26.3964542936,dashLengthItems:[27.94,-2.54]}),ae.add({lineAngle:60,x:2.54,y:0,offsetX:-15.24,offsetY:26.3964542936,dashLengthItems:[5.08,-25.4]}),ae.add({lineAngle:300,x:2.54,y:0,offsetX:15.24,offsetY:26.3964542936,dashLengthItems:[5.08,-25.4]}),ae.add({lineAngle:60,x:-1.27,y:2.199704516,offsetX:-15.24,offsetY:26.3964542936,dashLengthItems:[5.08,-25.4]}),ae.add({lineAngle:180,x:-1.27,y:2.199704516,offsetX:-15.24,offsetY:26.3964542936,dashLengthItems:[5.08,-25.4]}),ae.add({lineAngle:300,x:-1.27,y:-2.199704516,offsetX:15.24,offsetY:26.3964542936,dashLengthItems:[5.08,-25.4]}),ae.add({lineAngle:180,x:-1.27,y:-2.199704516,offsetX:-15.24,offsetY:26.3964542936,dashLengthItems:[5.08,-25.4]}),ae.add({lineAngle:60,x:-10.16,y:0,offsetX:-15.24,offsetY:26.3964542936,dashLengthItems:[5.08,-25.4]}),ae.add({lineAngle:300,x:-10.16,y:0,offsetX:15.24,offsetY:26.3964542936,dashLengthItems:[5.08,-25.4]}),ae.add({lineAngle:60,x:5.08,y:-8.7988180894,offsetX:-15.24,offsetY:26.3964542936,dashLengthItems:[5.08,-25.4]}),ae.add({lineAngle:180,x:5.08,y:-8.7988180894,offsetX:-15.24,offsetY:26.3964542936,dashLengthItems:[5.08,-25.4]}),ae.add({lineAngle:300,x:5.08,y:8.7988180894,offsetX:15.24,offsetY:26.3964542936,dashLengthItems:[5.08,-25.4]}),ae.add({lineAngle:180,x:5.08,y:8.7988180894,offsetX:-15.24,offsetY:26.3964542936,dashLengthItems:[5.08,-25.4]}),ae.add({lineAngle:0,x:5.08,y:4.3994090574,offsetX:-15.24,offsetY:26.3964542936,dashLengthItems:[17.78,-12.7]}),ae.add({lineAngle:0,x:5.08,y:-4.3994090574,offsetX:-15.24,offsetY:26.3964542936,dashLengthItems:[17.78,-12.7]}),ae.add({lineAngle:120,x:1.27,y:6.5991135734,offsetX:15.24,offsetY:26.3964542936,dashLengthItems:[17.78,-12.7]}),ae.add({lineAngle:120,x:-6.35,y:2.199704516,offsetX:15.24,offsetY:26.3964542936,dashLengthItems:[17.78,-12.7]}),ae.add({lineAngle:240,x:-6.35,y:-2.199704516,offsetX:15.24,offsetY:26.3964542936,dashLengthItems:[17.78,-12.7]}),ae.add({lineAngle:240,x:1.27,y:-6.5991135734,offsetX:15.24,offsetY:26.3964542936,dashLengthItems:[17.78,-12.7]}),T.set("FLEX",ae);const le=new C("GOST_GLASS");le.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:6.35,dashLengthItems:[6.35,-6.35]}),le.add({lineAngle:45,x:6.35,y:0,offsetX:4.490128053,offsetY:4.490128053,dashLengthItems:[1.5875,-5.8052561314,1.5875,-8.9802561314]}),T.set("GOST_GLASS",le);const re=new C("GOST_WOOD");re.add({lineAngle:45,x:0,y:0,offsetX:6,offsetY:-6,dashLengthItems:[5,-7]}),re.add({lineAngle:45,x:2.12132,y:0,offsetX:6,offsetY:-6,dashLengthItems:[2,-10]}),re.add({lineAngle:45,x:0,y:2.12132,offsetX:6,offsetY:-6,dashLengthItems:[2,-10]}),T.set("GOST_WOOD",re);const fe=new C("GOST_GROUND");fe.add({lineAngle:90,x:0,y:0,offsetX:0,offsetY:-6,dashLengthItems:[10,-2]}),fe.add({lineAngle:90,x:2,y:-2,offsetX:0,offsetY:-6,dashLengthItems:[6,-1.5,3,-1.5]}),fe.add({lineAngle:90,x:4,y:-5,offsetX:0,offsetY:-6,dashLengthItems:[10,-2]}),T.set("GOST_GROUND",fe);const ue=new C("GRASS");ue.add({lineAngle:45,x:0,y:0,offsetX:10,offsetY:-10,dashLengthItems:[20]}),ue.add({lineAngle:45,x:3,y:0,offsetX:10,offsetY:-10,dashLengthItems:[20]}),ue.add({lineAngle:45,x:6,y:0,offsetX:10,offsetY:-10,dashLengthItems:[20]}),T.set("GRASS",ue);const ce=new C("GRATE");ce.add({lineAngle:90,x:0,y:0,offsetX:17.96051224,offsetY:17.96051224,dashLengthItems:[4.7625,-31.15852448]}),ce.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:25.4,dashLengthItems:[4.7625,-20.6375]}),ce.add({lineAngle:135,x:0,y:0,offsetX:0,offsetY:25.4,dashLengthItems:[4.7625,-20.6375]}),T.set("GRATE",ce);const ge=new C("GRAVEL");ge.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:.79375,dashLengthItems:[]}),ge.add({lineAngle:90,x:0,y:0,offsetX:0,offsetY:3.175,dashLengthItems:[]}),T.set("GRAVEL",ge);const pe=new C("HEX");pe.add({lineAngle:228.0127875,x:18.288,y:25.4,offsetX:305.85067529778,offsetY:1.88796713245,dashLengthItems:[3.4172144,-338.30483639565]}),pe.add({lineAngle:184.969741,x:16.002,y:22.86,offsetX:-305.8545235377,offsetY:1.10019612724,dashLengthItems:[5.8640472,-580.54048893524]}),pe.add({lineAngle:132.5104471,x:10.16,y:22.352,offsetX:-377.59492241548,offsetY:1.56030959675,dashLengthItems:[4.1348152,-409.347227941]}),pe.add({lineAngle:267.273689,x:.254,y:16.002,offsetX:-508.63316875916,offsetY:1.20815479432,dashLengthItems:[5.3400452,-528.66437425738]}),pe.add({lineAngle:292.83365418,x:0,y:10.668,offsetX:-330.19770134945,offsetY:1.23208097566,dashLengthItems:[5.236337,-518.39807745344]}),pe.add({lineAngle:357.273689,x:2.032,y:5.842,offsetX:-508.63316875916,offsetY:1.20815479432,dashLengthItems:[5.3400452,-528.66437425738]}),pe.add({lineAngle:37.69424047,x:7.366,y:5.588,offsetX:-416.58997273292,offsetY:.91357450169,dashLengthItems:[7.0619366,-699.13115314247]}),pe.add({lineAngle:72.25532837,x:12.954,y:9.906,offsetX:586.40373773403,offsetY:.96766293399,dashLengthItems:[6.6671952,-660.05256601905]}),pe.add({lineAngle:121.42956562,x:14.986,y:16.256,offsetX:387.71230339293,offsetY:1.2040754753,dashLengthItems:[5.35813,-530.45545698712]}),pe.add({lineAngle:175.2363583,x:12.192,y:20.828,offsetX:-280.5442400419,offsetY:2.10935518695,dashLengthItems:[6.1171328,-299.7393695]}),pe.add({lineAngle:222.3974378,x:6.096,y:21.336,offsetX:413.48123885686,offsetY:.81554484621,dashLengthItems:[7.9107792,-783.16772512177]}),pe.add({lineAngle:138.81407483,x:25.4,y:15.748,offsetX:234.164238558,offsetY:2.38943100688,dashLengthItems:[2.7000454,-267.30565824344]}),pe.add({lineAngle:171.4692344,x:23.368,y:17.526,offsetX:-334.082478726,offsetY:1.25594916784,dashLengthItems:[5.1368198,-508.5463899704]}),pe.add({lineAngle:225,x:18.288,y:18.288,offsetX:17.96051224214,offsetY:17.96051224214,dashLengthItems:[3.5920934,-32.32893108428]}),pe.add({lineAngle:203.19859051,x:16.51,y:21.336,offsetX:-136.74251918,offsetY:3.33518339548,dashLengthItems:[1.9344132,-191.50622368894]}),pe.add({lineAngle:291.80140949,x:14.732,y:20.574,offsetX:-80.18324702488,offsetY:4.71666158921,dashLengthItems:[2.7356562,-134.0475299]}),pe.add({lineAngle:30.96375653,x:15.748,y:18.034,offsetX:91.47734531502,offsetY:4.35606406258,dashLengthItems:[4.4431966,-143.6629815291]}),pe.add({lineAngle:161.56505118,x:19.558,y:20.32,offsetX:-56.2252967978,offsetY:8.03218525675,dashLengthItems:[3.2128714,-77.10898116828]}),pe.add({lineAngle:16.389540334,x:0,y:20.574,offsetX:265.17991128726,offsetY:1.43340492604,dashLengthItems:[4.50088,-445.58826672539]}),pe.add({lineAngle:70.34617594,x:4.318,y:21.844,offsetX:-297.29446803469,offsetY:1.70858889651,dashLengthItems:[3.7759894,-373.822156782]}),pe.add({lineAngle:293.19859051,x:19.558,y:25.4,offsetX:-136.7425191801,offsetY:3.33518339548,dashLengthItems:[3.868801,-189.57183588894]}),pe.add({lineAngle:343.61045967,x:21.082,y:21.844,offsetX:-265.17991128725,offsetY:1.433404926,dashLengthItems:[4.50088,-445.5882667254]}),pe.add({lineAngle:339.44395478,x:0,y:4.826,offsetX:-136.75087638398,offsetY:2.97284513779,dashLengthItems:[4.340352,-212.67734313106]}),pe.add({lineAngle:294.7751406,x:4.064,y:3.302,offsetX:-306.90424056705,offsetY:1.77401295215,dashLengthItems:[3.6367212,-360.0359338072]}),pe.add({lineAngle:66.80140949,x:19.812,y:0,offsetX:136.74251918012,offsetY:3.33518339452,dashLengthItems:[3.868801,-189.57183588894]}),pe.add({lineAngle:17.35402464,x:21.336,y:3.556,offsetX:-345.47402804977,offsetY:1.51523696536,dashLengthItems:[4.2578274,-421.523759802]}),pe.add({lineAngle:69.44395478,x:7.366,y:0,offsetX:-136.75087638396,offsetY:2.97284513874,dashLengthItems:[2.170176,-214.84751913106]}),pe.add({lineAngle:101.309932474,x:18.288,y:0,offsetX:104.60834648271,offsetY:4.98134983255,dashLengthItems:[1.295146,-128.21994964526]}),pe.add({lineAngle:165.963756532,x:18.034,y:1.27,offsetX:-80.085263387,offsetY:6.16040487582,dashLengthItems:[5.236337,-99.49054589069]}),pe.add({lineAngle:186.00900596,x:12.954,y:2.54,offsetX:-255.26337856879,offsetY:1.32949676118,dashLengthItems:[4.85267,-480.41364863337]}),pe.add({lineAngle:303.69006753,x:15.748,y:15.748,offsetX:-56.35753993648,offsetY:7.0446924921,dashLengthItems:[3.6632388,-87.9177635968]}),pe.add({lineAngle:353.15722659,x:17.78,y:12.7,offsetX:434.77679606606,offsetY:1.0087628707,dashLengthItems:[6.3955676,-633.16009065031]}),pe.add({lineAngle:60.9453959,x:24.13,y:11.938,offsetX:-204.76648550216,offsetY:2.46706609031,dashLengthItems:[2.6150824,-258.8939231811]}),pe.add({lineAngle:90,x:25.4,y:14.224,offsetX:25.4,offsetY:25.4,dashLengthItems:[1.524,-23.876]}),pe.add({lineAngle:120.25643716,x:12.446,y:3.302,offsetX:-204.77318477297,offsetY:1.8283320086,dashLengthItems:[3.5286696,-349.339407732]}),pe.add({lineAngle:48.0127875,x:10.668,y:6.35,offsetX:305.85067529778,offsetY:1.88796713138,dashLengthItems:[6.8344288,-334.88762199565]}),pe.add({lineAngle:0,x:15.24,y:11.43,offsetX:25.4,offsetY:25.4,dashLengthItems:[6.604,-18.796]}),pe.add({lineAngle:325.3048465,x:21.844,y:11.43,offsetX:310.04235091354,offsetY:-1.6064370526,dashLengthItems:[4.0160956,-397.5931672414]}),pe.add({lineAngle:254.0546041,x:25.146,y:9.144,offsetX:104.6687497289,offsetY:3.48895832444,dashLengthItems:[3.6982908,-181.21650038772]}),pe.add({lineAngle:207.64597536,x:24.13,y:5.588,offsetX:545.36007557253,offsetY:1.07143433066,dashLengthItems:[6.021451,-596.12464422938]}),pe.add({lineAngle:175.42607874,x:18.796,y:2.794,offsetX:331.1739336186,offsetY:1.01276432357,dashLengthItems:[6.3702946,-630.6584645624]}),T.set("HEX",pe);const Ae=new C("HONEY");Ae.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5.4992613154,dashLengthItems:[3.175,-6.35]}),Ae.add({lineAngle:120,x:0,y:0,offsetX:0,offsetY:5.4992613154,dashLengthItems:[3.175,-6.35]}),Ae.add({lineAngle:60,x:3.175,y:0,offsetX:0,offsetY:5.4992613154,dashLengthItems:[3.175,-6.35]}),T.set("HONEY",Ae);const ye=new C("HOUND");ye.add({lineAngle:0,x:0,y:0,offsetX:4.7625,offsetY:2.749630645,dashLengthItems:[3.175,-6.35]}),ye.add({lineAngle:120,x:0,y:0,offsetX:4.7625,offsetY:2.749630645,dashLengthItems:[3.175,-6.35]}),ye.add({lineAngle:60,x:0,y:0,offsetX:4.7625,offsetY:2.749630645,dashLengthItems:[-6.35,3.175]}),T.set("HOUND",ye);const me=new C("INSUL");me.add({lineAngle:0,x:0,y:0,offsetX:6.35,offsetY:1.5875,dashLengthItems:[25.4,-12.7]}),me.add({lineAngle:90,x:0,y:0,offsetX:-6.35,offsetY:1.5875,dashLengthItems:[25.4,-12.7]}),T.set("INSUL",me);const xe=new C("ACAD_ISO02W100");xe.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:9.525,dashLengthItems:[]}),xe.add({lineAngle:0,x:0,y:3.175,offsetX:0,offsetY:9.525,dashLengthItems:[3.175,-3.175]}),xe.add({lineAngle:0,x:0,y:6.35,offsetX:0,offsetY:9.525,dashLengthItems:[3.175,-3.175]}),T.set("ACAD_ISO02W100",xe);const Ie=new C("ACAD_ISO03W100");Ie.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[12,-3]}),T.set("ACAD_ISO03W100",Ie);const Le=new C("ACAD_ISO04W100");Le.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[12,-18]}),T.set("ACAD_ISO04W100",Le);const Se=new C("ACAD_ISO05W100");Se.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[24,-3,.5,-3]}),T.set("ACAD_ISO05W100",Se);const De=new C("ACAD_ISO06W100");De.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[24,-3,.5,-3,.5,-3]}),T.set("ACAD_ISO06W100",De);const be=new C("ACAD_ISO07W100");be.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[24,-3,.5,-3,.5,-6.5]}),be.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[-34,.5,-3]}),T.set("ACAD_ISO07W100",be);const ve=new C("ACAD_ISO08W100");ve.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[.5,-3]}),T.set("ACAD_ISO08W100",ve);const Ee=new C("ACAD_ISO09W100");Ee.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[24,-3,6,-3]}),T.set("ACAD_ISO09W100",Ee);const Fe=new C("ACAD_ISO10W100");Fe.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[24,-3,6,-3,6,-3]}),T.set("ACAD_ISO10W100",Fe);const Ce=new C("ACAD_ISO11W100");Ce.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[12,-3,.5,-3]}),T.set("ACAD_ISO11W100",Ce);const Te=new C("ACAD_ISO12W100");Te.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[12,-3,12,-3,.5,-3]}),T.set("ACAD_ISO12W100",Te);const Xe=new C("ACAD_ISO13W100");Xe.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[12,-3,.5,-3,.5,-3]}),T.set("ACAD_ISO13W100",Xe);const Re=new C("ACAD_ISO14W100");Re.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[12,-3,12,-3,.5,-6.5]}),Re.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[-33.5,.5,-3]}),T.set("ACAD_ISO14W100",Re);const Ye=new C("ACAD_ISO15W100");Ye.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[12,-3,.5,-3,.5,-6.5]}),Ye.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[-22,.5,-3]}),T.set("ACAD_ISO15W100",Ye);const Be=new C("JIS_LC_20");Be.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[12,-3,12,-3,.5,-10]}),Be.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5,dashLengthItems:[-33.5,.5,-3,.5,-3]}),T.set("JIS_LC_20",Be);const we=new C("JIS_LC_20A");we.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:20,dashLengthItems:[]}),we.add({lineAngle:45,x:.4,y:0,offsetX:0,offsetY:20,dashLengthItems:[]}),T.set("JIS_LC_20A",we);const Ne=new C("JIS_LC_8");Ne.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:20,dashLengthItems:[]}),Ne.add({lineAngle:45,x:1,y:0,offsetX:0,offsetY:20,dashLengthItems:[]}),T.set("JIS_LC_8",Ne);const Me=new C("JIS_LC_8A");Me.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:7.8,dashLengthItems:[]}),Me.add({lineAngle:45,x:.4,y:0,offsetX:0,offsetY:7.8,dashLengthItems:[]}),T.set("JIS_LC_8A",Me);const Pe=new C("JIS_RC_10");Pe.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:7.8,dashLengthItems:[]}),Pe.add({lineAngle:45,x:1,y:0,offsetX:0,offsetY:7.8,dashLengthItems:[]}),T.set("JIS_RC_10",Pe);const Oe=new C("JIS_RC_15");Oe.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:10,dashLengthItems:[]}),Oe.add({lineAngle:45,x:.725,y:0,offsetX:0,offsetY:10,dashLengthItems:[]}),Oe.add({lineAngle:45,x:1.45,y:0,offsetX:0,offsetY:10,dashLengthItems:[]}),T.set("JIS_RC_15",Oe);const _e=new C("JIS_RC_18");_e.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:15,dashLengthItems:[]}),_e.add({lineAngle:45,x:.725,y:0,offsetX:0,offsetY:15,dashLengthItems:[]}),_e.add({lineAngle:45,x:1.45,y:0,offsetX:0,offsetY:15,dashLengthItems:[]}),T.set("JIS_RC_18",_e);const He=new C("JIS_RC_30");He.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:18,dashLengthItems:[]}),He.add({lineAngle:45,x:1,y:0,offsetX:0,offsetY:18,dashLengthItems:[]}),He.add({lineAngle:45,x:2,y:0,offsetX:0,offsetY:18,dashLengthItems:[]}),T.set("JIS_RC_30",He);const ke=new C("JIS_STN_1E");ke.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:30,dashLengthItems:[]}),ke.add({lineAngle:45,x:1,y:0,offsetX:0,offsetY:30,dashLengthItems:[]}),ke.add({lineAngle:45,x:2,y:0,offsetX:0,offsetY:30,dashLengthItems:[]}),T.set("JIS_STN_1E",ke);const We=new C("JIS_STN_2_5");We.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:1,dashLengthItems:[]}),We.add({lineAngle:45,x:.705,y:0,offsetX:0,offsetY:1,dashLengthItems:[1,-.5]}),T.set("JIS_STN_2_5",We);const Ve=new C("JIS_WOOD");Ve.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:2.5,dashLengthItems:[]}),Ve.add({lineAngle:45,x:1.765,y:0,offsetX:0,offsetY:2.5,dashLengthItems:[1.2,-.5]}),T.set("JIS_WOOD",Ve);const Ue=new C("LINE");Ue.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:.70710678,dashLengthItems:[]}),T.set("LINE",Ue);const je=new C("MUDST");je.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:3.175,dashLengthItems:[]}),T.set("MUDST",je);const Ge=new C("NET");Ge.add({lineAngle:0,x:0,y:0,offsetX:12.7,offsetY:6.35,dashLengthItems:[6.35,-6.35,0,-6.35,0,-6.35]}),T.set("NET",Ge);const ze=new C("NET3");ze.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:3.175,dashLengthItems:[]}),ze.add({lineAngle:90,x:0,y:0,offsetX:0,offsetY:3.175,dashLengthItems:[]}),T.set("NET3",ze);const Je=new C("PLAST");Je.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:3.175,dashLengthItems:[]}),Je.add({lineAngle:60,x:0,y:0,offsetX:0,offsetY:3.175,dashLengthItems:[]}),Je.add({lineAngle:120,x:0,y:0,offsetX:0,offsetY:3.175,dashLengthItems:[]}),T.set("PLAST",Je);const Ke=new C("PLASTI");Ke.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:6.35,dashLengthItems:[]}),Ke.add({lineAngle:0,x:0,y:.79375,offsetX:0,offsetY:6.35,dashLengthItems:[]}),Ke.add({lineAngle:0,x:0,y:1.5875,offsetX:0,offsetY:6.35,dashLengthItems:[]}),T.set("PLASTI",Ke);const Ze=new C("SACNCR");Ze.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:6.35,dashLengthItems:[]}),Ze.add({lineAngle:0,x:0,y:.79375,offsetX:0,offsetY:6.35,dashLengthItems:[]}),Ze.add({lineAngle:0,x:0,y:1.5875,offsetX:0,offsetY:6.35,dashLengthItems:[]}),Ze.add({lineAngle:0,x:0,y:3.96875,offsetX:0,offsetY:6.35,dashLengthItems:[]}),T.set("SACNCR",Ze);const qe=new C("SQUARE");qe.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:2.38125,dashLengthItems:[]}),qe.add({lineAngle:45,x:1.6838,y:0,offsetX:0,offsetY:2.38125,dashLengthItems:[0,-2.38125]}),T.set("SQUARE",qe);const $e=new C("STARS");$e.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:3.175,dashLengthItems:[3.175,-3.175]}),$e.add({lineAngle:90,x:0,y:0,offsetX:0,offsetY:3.175,dashLengthItems:[3.175,-3.175]}),T.set("STARS",$e);const Qe=new C("STEEL");Qe.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:5.4992613154,dashLengthItems:[3.175,-3.175]}),Qe.add({lineAngle:60,x:0,y:0,offsetX:0,offsetY:5.4992613154,dashLengthItems:[3.175,-3.175]}),Qe.add({lineAngle:120,x:1.5875,y:2.7496306704,offsetX:0,offsetY:5.4992613154,dashLengthItems:[3.175,-3.175]}),T.set("STEEL",Qe);const et=new C("SWAMP");et.add({lineAngle:45,x:0,y:0,offsetX:0,offsetY:3.175,dashLengthItems:[]}),et.add({lineAngle:45,x:0,y:1.5875,offsetX:0,offsetY:3.175,dashLengthItems:[]}),T.set("SWAMP",et);const tt=new C("TRANS");tt.add({lineAngle:0,x:0,y:0,offsetX:12.7,offsetY:21.9970452362,dashLengthItems:[3.175,-22.225]}),tt.add({lineAngle:90,x:1.5875,y:0,offsetX:21.9970452362,offsetY:12.7,dashLengthItems:[1.5875,-42.4065904724]}),tt.add({lineAngle:90,x:1.984375,y:0,offsetX:21.9970452362,offsetY:12.7,dashLengthItems:[1.27,-42.7240904724]}),tt.add({lineAngle:90,x:1.190625,y:0,offsetX:21.9970452362,offsetY:12.7,dashLengthItems:[1.27,-42.7240904724]}),tt.add({lineAngle:60,x:2.38125,y:0,offsetX:12.7,offsetY:21.9970452362,dashLengthItems:[1.016,-24.384]}),tt.add({lineAngle:120,x:.79375,y:0,offsetX:12.7,offsetY:21.9970452362,dashLengthItems:[1.016,-24.384]}),T.set("TRANS",tt);const st=new C("TRIANG");st.add({lineAngle:0,x:0,y:0,offsetX:0,offsetY:6.35,dashLengthItems:[]}),st.add({lineAngle:0,x:0,y:3.175,offsetX:0,offsetY:6.35,dashLengthItems:[3.175,-3.175]}),T.set("TRIANG",st);const nt=new C("ZIGZAG");nt.add({lineAngle:60,x:0,y:0,offsetX:4.7625,offsetY:8.2488919604,dashLengthItems:[4.7625,-4.7625]}),nt.add({lineAngle:120,x:0,y:0,offsetX:4.7625,offsetY:8.2488919604,dashLengthItems:[4.7625,-4.7625]}),nt.add({lineAngle:0,x:-2.38125,y:4.1244459802,offsetX:4.7625,offsetY:8.2488919604,dashLengthItems:[4.7625,-4.7625]}),T.set("ZIGZAG",nt);class it{static fromHex(e){return e.startsWith("#")&&(e=e.replace("#","")),parseInt(e,16)}static fromRGB(e,t,s){const n=[e,t,s].reduce(((e,t)=>{const s=t.toString(16);return `${e}${1===s.length?"0"+s:s}`}),"0x00");return it.fromHex(n)}}class ht{constructor(e,t,s){this.type=e,this.subclassMarker=t,this.layerName=null==s?void 0:s.layerName,this.handle=h.next(),this.trueColor=null==s?void 0:s.trueColor,this.inPaperSpace=!1,this.colorNumber=null==s?void 0:s.colorNumber,this.visible=null==s?void 0:s.visible,this.lineType=null==s?void 0:s.lineType,this.lineTypeScale=null==s?void 0:s.lineTypeScale,this.extrusion=null==s?void 0:s.extrusion,this.xdatas=[];}boundingBox(){return a.pointBBox(t())}addXData(e){const t=new F(e);return this.xdatas.push(t),t}dxfy(e){var t,s,n;e.type(this.type),e.handle(this.handle),e.push(330,this.ownerBlockRecord),e.subclassMarker("AcDbEntity"),this.inPaperSpace&&e.push(67,Number(this.inPaperSpace)),e.push(420,this.trueColor),e.layerName(this.layerName||c.layerZeroName),e.lineType(this.lineType),e.colorNumber(this.colorNumber),e.push(48,this.lineTypeScale),e.visibilty(this.visible),e.subclassMarker(this.subclassMarker),"HATCH"!==this.type&&(e.push(210,null===(t=this.extrusion)||void 0===t?void 0:t.x),e.push(220,null===(s=this.extrusion)||void 0===s?void 0:s.y),e.push(230,null===(n=this.extrusion)||void 0===n?void 0:n.z)),this.dxfyChild(e),this.xdatas.forEach((t=>t.dxfy(e)));}}var ot,dt,at;!function(e){e[e.Default=0]="Default",e[e.Aligned=1]="Aligned",e[e.Angular=2]="Angular",e[e.Diameter=3]="Diameter",e[e.Radius=4]="Radius",e[e.Angular3Point=5]="Angular3Point",e[e.Ordinate=6]="Ordinate",e[e.ReferencedByThis=32]="ReferencedByThis",e[e.OrdinateType=64]="OrdinateType";}(ot||(ot={})),function(e){e[e.TopLeft=1]="TopLeft",e[e.TopCenter=2]="TopCenter",e[e.TopRight=3]="TopRight",e[e.MiddleLeft=4]="MiddleLeft",e[e.MiddleCenter=5]="MiddleCenter",e[e.MiddleRight=6]="MiddleRight",e[e.BottomLeft=7]="BottomLeft",e[e.BottomCenter=8]="BottomCenter",e[e.BottomRight=9]="BottomRight";}(dt||(dt={})),function(e){e[e.AtLeast=1]="AtLeast",e[e.Exact=2]="Exact";}(at||(at={}));class lt extends ht{constructor(e){super("DIMENSION","AcDbDimension",e),this.blockName=null==e?void 0:e.blockName,this.definitionPoint=null==e?void 0:e.definitionPoint,this.middlePoint=null==e?void 0:e.middlePoint,this.dimensionType=ot.Default,this.attachmentPoint=(null==e?void 0:e.attachmentPoint)||dt.MiddleCenter,this.textLineSpacingStyle=null==e?void 0:e.textLineSpacingStyle,this.textLineSpacingFactor=null==e?void 0:e.textLineSpacingFactor,this.ActualMeasurement=null==e?void 0:e.ActualMeasurement,this.text=null==e?void 0:e.text,this.rotation=null==e?void 0:e.rotation,this.horizontalDirection=null==e?void 0:e.horizontalDirection,this.styleName=null==e?void 0:e.styleName;}dxfyChild(e){e.push(2,this.blockName),e.point3d(this.definitionPoint),e.point3d(this.middlePoint,1),e.push(70,this.dimensionType),e.push(71,this.attachmentPoint),e.push(72,this.textLineSpacingStyle),e.push(41,this.textLineSpacingFactor),e.push(42,this.ActualMeasurement),e.push(1,this.text),e.push(53,"auto"===this.rotation?this.rotate():this.rotation),e.push(51,this.horizontalDirection),e.push(3,this.styleName);}}const rt=/[<>/\\":;?*|=`]/g;function ft(e){return e*Math.PI/180}function ut(e,t){const s=function(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}(e,t);return 0===s?s:180*Math.asin(Math.abs(e.y-t.y)/s)/Math.PI}class ct extends lt{constructor(e,t,s){super(s),this.dimensionType=ot.Aligned,this.insertionPoint=null==s?void 0:s.insertionPoint,this.fisrtPoint=e,this.secondPoint=t,this.offset(null==s?void 0:s.offset);}offset(e){if(null==e)return;const[s,n]=function(e,t){const s=e.x-t.x;let n=0;return 0!==s&&(n=(e.y-t.y)/s),[n,e.y-n*e.x]}(this.fisrtPoint,this.secondPoint),i=function(e,t){const[s,n]=t;return n-e*Math.sqrt(s*s+1)}(e,[s,n]);this.definitionPoint=function(e,s){const[n,i]=e,h=null!=n?n:-1/n,o=s.y-h*s.x,d=h-n;let a=i-o;return 0!==d&&(a=(i-o)/d),t(a,n*a+i,s.z)}([s,i],this.fisrtPoint);}rotate(){return ut(this.fisrtPoint,this.secondPoint)}dxfyChild(e){super.dxfyChild(e),e.subclassMarker("AcDbAlignedDimension"),e.point3d(this.insertionPoint,2),e.point3d(this.fisrtPoint,3),e.point3d(this.secondPoint,4);}}class gt extends lt{constructor(e,t,s,n){super(n),this.first=e,this.second=t,this.location=s,this.dimensionType=ot.Angular;}rotate(){return 0}_update(){this.definitionPoint=this.second.end;}dxfyChild(e){this._update(),super.dxfyChild(e),e.subclassMarker("AcDb2LineAngularDimension"),e.point3d(this.first.start,3),e.point3d(this.first.end,4),e.point3d(this.second.start,5),e.point3d(this.location,6);}}class pt extends lt{constructor(e,t,s,n){super(n),this.center=e,this.first=t,this.second=s,this.dimensionType=ot.Angular3Point;}rotate(){return 0}dxfyChild(e){super.dxfyChild(e),e.subclassMarker("AcDb3PointAngularDimension"),e.point3d(this.first,3),e.point3d(this.second,4),e.point3d(this.center,5);}}class yt extends lt{constructor(e,t,s){super(s),this.dimensionType=ot.Diameter,this.first=e,this.definitionPoint=t,this.leaderLength=null==s?void 0:s.leaderLength;}rotate(){return 0}dxfyChild(e){super.dxfyChild(e),e.subclassMarker("AcDbDiametricDimension"),e.point3d(this.first,5),e.push(40,this.leaderLength);}}class mt extends lt{constructor(e,t,s){var n;super(s),this.dimensionType=ot.Default,this.insertionPoint=null==s?void 0:s.insertionPoint,this.fisrtPoint=e,this.secondPoint=t,this.angle=null!==(n=null==s?void 0:s.angle)&&void 0!==n?n:0,this.linearType=null==s?void 0:s.linearType,this.offset(null==s?void 0:s.offset);}offset(e){if(null==e)return;const s=ft(this.angle),n=this.fisrtPoint.x+e*Math.floor(Math.sin(s)),i=this.fisrtPoint.y+e*Math.floor(Math.cos(s));this.definitionPoint=t(n,i,0);}rotate(){return this.angle}dxfyChild(e){super.dxfyChild(e),e.subclassMarker("AcDbAlignedDimension"),e.point3d(this.insertionPoint,2),e.point3d(this.fisrtPoint,3),e.point3d(this.secondPoint,4),e.push(50,this.angle),e.push(52,this.linearType),e.subclassMarker("AcDbRotatedDimension");}}class xt extends lt{constructor(e,t,s){super(s),this.dimensionType=ot.Radius,this.first=e,this.definitionPoint=t,this.leaderLength=null==s?void 0:s.leaderLength;}rotate(){return 0}dxfyChild(e){super.dxfyChild(e),e.subclassMarker("AcDbRadialDimension"),e.point3d(this.first,5),e.push(40,this.leaderLength);}}class It extends ht{get start(){return t(this.center.x+this.radius*Math.cos(ft(this.startAngle)),this.center.y+this.radius*Math.sin(ft(this.startAngle)))}get end(){return t(this.center.x+this.radius*Math.cos(ft(this.endAngle)),this.center.y+this.radius*Math.sin(ft(this.endAngle)))}constructor(e,t,s,n,i){super("ARC","AcDbCircle",i),this.center=e,this.radius=t,this.startAngle=s,this.endAngle=n;}boundingBox(){return a.centerRadiusBBox(this.center,this.radius)}dxfyChild(e){e.point3d(this.center),e.push(40,this.radius),e.subclassMarker("AcDbArc"),e.push(50,this.startAngle),e.push(51,this.endAngle);}}class Lt extends ht{constructor(e,t,s,n,i){super("ATTDEF","AcDbText",i),this.position=e,this.height=t,this.value=n,this.tag=s,this.textStyle="STANDARD",this.rotation=null==i?void 0:i.rotation,this.obliqueAngle=null==i?void 0:i.obliqueAngle,this.generationFlags=null==i?void 0:i.generationFlags,this.horizontalAlignment=null==i?void 0:i.horizontalAlignment,this.verticalAlignment=null==i?void 0:i.verticalAlignment,this.secondAlignmentPoint=null==i?void 0:i.secondAlignmentPoint,this.relativeXScaleFactor=null==i?void 0:i.relativeXScaleFactor;}boundingBox(){return a.pointBBox(this.position)}dxfyChild(e){e.point3d(this.position),e.push(40,this.height),e.primaryText(this.value),e.push(50,this.rotation),e.push(41,this.relativeXScaleFactor),e.push(51,this.obliqueAngle),e.textStyle(this.textStyle),e.push(71,this.generationFlags),e.push(72,this.horizontalAlignment),this.secondAlignmentPoint&&(e.push(11,this.secondAlignmentPoint.x),e.push(21,this.secondAlignmentPoint.y),e.push(31,this.secondAlignmentPoint.z)),e.push(73,this.verticalAlignment),e.subclassMarker("AcDbAttributeDefinition"),e.push(280,0),e.push(3,""),e.push(2,this.tag),e.push(70,0);}}class St extends ht{constructor(e,t,s,n,i){super("ATTRIB","AcDbText",i),this.position=e,this.height=t,this.value=n,this.tag=s,this.textStyle="STANDARD",this.rotation=null==i?void 0:i.rotation,this.obliqueAngle=null==i?void 0:i.obliqueAngle,this.generationFlags=null==i?void 0:i.generationFlags,this.horizontalAlignment=null==i?void 0:i.horizontalAlignment,this.verticalAlignment=null==i?void 0:i.verticalAlignment,this.secondAlignmentPoint=null==i?void 0:i.secondAlignmentPoint,this.relativeXScaleFactor=null==i?void 0:i.relativeXScaleFactor;}boundingBox(){return a.pointBBox(this.position)}dxfyChild(e){e.point3d(this.position),e.push(40,this.height),e.primaryText(this.value),e.push(50,this.rotation),e.push(41,this.relativeXScaleFactor),e.push(51,this.obliqueAngle),e.textStyle(this.textStyle),e.push(71,this.generationFlags),e.push(72,this.horizontalAlignment),e.point3d(this.secondAlignmentPoint,1),e.push(73,this.verticalAlignment),e.subclassMarker("AcDbAttribute"),e.push(280,0),e.push(2,this.tag),e.push(70,0);}}class Dt extends ht{constructor(e,t,s){super("CIRCLE","AcDbCircle",s),this.center=e,this.radius=t;}boundingBox(){return a.centerRadiusBBox(this.center,this.radius)}dxfyChild(e){e.point3d(this.center),e.push(40,this.radius);}}class bt extends ht{constructor(e,t,s,n,i,h){super("ELLIPSE","AcDbEllipse",h),this.center=e,this.endPointOfMajorAxis=t,this.ratioOfMinorAxisToMajorAxis=s,this.startParameter=n,this.endParameter=i;}boundingBox(){const e=this.center.x,t=this.center.y,s=this.endPointOfMajorAxis.x,n=this.endPointOfMajorAxis.y,i=Math.sqrt(Math.pow(e-(e+s),2)+Math.pow(t-(t+n),2));return a.centerRadiusBBox(this.center,i)}dxfyChild(e){e.point3d(this.center),e.point3d(this.endPointOfMajorAxis,1),e.push(40,this.ratioOfMinorAxisToMajorAxis),e.push(41,this.startParameter),e.push(42,this.endParameter);}}var vt,Et,Ft,Ct,Tt,Xt,Rt,Yt,Bt,wt,Nt,Mt,Pt,Ot,_t,Ht,kt,Wt,Vt,Ut,jt,Gt,zt,Jt,Kt,Zt,qt,$t,Qt,es,ts,ss,ns,is;!function(e){e[e.None=0]="None",e[e.First=1]="First",e[e.Second=2]="Second",e[e.Third=4]="Third",e[e.Fourth=8]="Fourth";}(vt||(vt={}));class hs extends ht{constructor(e,t,s,n,i){super("3DFACE","AcDbFace",i),this.firstCorner=e,this.secondCorner=t,this.thirdCorner=s,this.fourthCorner=n,this.invisibleEdges=(null==i?void 0:i.invisibleEdges)||vt.None;}setFirstEdgeVisible(e){this.setEdgeVisible(vt.First,e);}setSecondEdgeVisible(e){this.setEdgeVisible(vt.Second,e);}setThirdEdgeVisible(e){this.setEdgeVisible(vt.Third,e);}setFourthEdgeVisible(e){this.setEdgeVisible(vt.Fourth,e);}setEdgesVisible(e){this.invisibleEdges=e?vt.None:vt.First|vt.Second|vt.Third|vt.Fourth;}setEdgeVisible(e,t){t?this.invisibleEdges|=e:this.invisibleEdges===(this.invisibleEdges|e)&&(this.invisibleEdges^=e);}boundingBox(){return a.verticesBBox([this.firstCorner,this.secondCorner,this.thirdCorner,this.fourthCorner])}dxfyChild(e){e.point3d(this.firstCorner),e.point3d(this.secondCorner,1),e.point3d(this.thirdCorner,2),e.point3d(this.fourthCorner,3),e.push(70,this.invisibleEdges);}}!function(e){e.SOLID="SOLID",e.ANGLE="ANGLE",e.ANSI31="ANSI31",e.ANSI32="ANSI32",e.ANSI33="ANSI33",e.ANSI34="ANSI34",e.ANSI35="ANSI35",e.ANSI36="ANSI36",e.ANSI37="ANSI37",e.ANSI38="ANSI38",e.AR_B816="AR_B816",e.AR_B816C="AR_B816C",e.AR_B88="AR_B88",e.AR_BRELM="AR_BRELM",e.AR_BRSTD="AR_BRSTD",e.AR_CONC="AR_CONC",e.AR_HBONE="AR_HBONE",e.AR_PARQ1="AR_PARQ1",e.AR_RROOF="AR_RROOF",e.AR_RSHKE="AR_RSHKE",e.AR_SAND="AR_SAND",e.BOX="BOX",e.BRASS="BRASS",e.BRICK="BRICK",e.BRSTONE="BRSTONE",e.CLAY="CLAY",e.CORK="CORK",e.CROSS="CROSS",e.DASH="DASH",e.DOLMIT="DOLMIT",e.DOTS="DOTS",e.EARTH="EARTH",e.ESCHER="ESCHER",e.FLEX="FLEX",e.GOST_GLASS="GOST_GLASS",e.GOST_WOOD="GOST_WOOD",e.GOST_GROUND="GOST_GROUND",e.GRASS="GRASS",e.GRATE="GRATE",e.GRAVEL="GRAVEL",e.HEX="HEX",e.HONEY="HONEY",e.HOUND="HOUND",e.INSUL="INSUL",e.ACAD_ISO02W100="ACAD_ISO02W100",e.ACAD_ISO03W100="ACAD_ISO03W100",e.ACAD_ISO04W100="ACAD_ISO04W100",e.ACAD_ISO05W100="ACAD_ISO05W100",e.ACAD_ISO06W100="ACAD_ISO06W100",e.ACAD_ISO07W100="ACAD_ISO07W100",e.ACAD_ISO08W100="ACAD_ISO08W100",e.ACAD_ISO09W100="ACAD_ISO09W100",e.ACAD_ISO10W100="ACAD_ISO10W100",e.ACAD_ISO11W100="ACAD_ISO11W100",e.ACAD_ISO12W100="ACAD_ISO12W100",e.ACAD_ISO13W100="ACAD_ISO13W100",e.ACAD_ISO14W100="ACAD_ISO14W100",e.ACAD_ISO15W100="ACAD_ISO15W100",e.JIS_LC_20="JIS_LC_20",e.JIS_LC_20A="JIS_LC_20A",e.JIS_LC_8="JIS_LC_8",e.JIS_LC_8A="JIS_LC_8A",e.JIS_RC_10="JIS_RC_10",e.JIS_RC_15="JIS_RC_15",e.JIS_RC_18="JIS_RC_18",e.JIS_RC_30="JIS_RC_30",e.JIS_STN_1E="JIS_STN_1E",e.JIS_STN_2_5="JIS_STN_2_5",e.JIS_WOOD="JIS_WOOD",e.LINE="LINE",e.MUDST="MUDST",e.NET="NET",e.NET3="NET3",e.PLAST="PLAST",e.PLASTI="PLASTI",e.SACNCR="SACNCR",e.SQUARE="SQUARE",e.STARS="STARS",e.STEEL="STEEL",e.SWAMP="SWAMP",e.TRANS="TRANS",e.TRIANG="TRIANG",e.ZIGZAG="ZIGZAG";}(Et||(Et={})),function(e){e[e.UserDefined=0]="UserDefined",e[e.Predifined=1]="Predifined",e[e.Custom=2]="Custom";}(Ft||(Ft={}));!function(e){e[e.Default=0]="Default",e[e.External=1]="External",e[e.Polyline=2]="Polyline",e[e.Derived=4]="Derived",e[e.Textbox=8]="Textbox",e[e.Outermost=16]="Outermost";}(Ct||(Ct={}));!function(e){e[e.SolidFill=1]="SolidFill",e[e.PatternFill=0]="PatternFill";}(Tt||(Tt={})),function(e){e[e.NonAssociative=0]="NonAssociative",e[e.Associative=1]="Associative";}(Xt||(Xt={})),function(e){e[e.Normal=0]="Normal",e[e.Outer=1]="Outer",e[e.Ignore=2]="Ignore";}(Rt||(Rt={})),function(e){e.LINEAR="LINEAR",e.CYLINDER="CYLINDER",e.INVCYLINDER="INVCYLINDER",e.SPHERICAL="SPHERICAL",e.HEMISPHERICAL="HEMISPHERICAL",e.CURVED="CURVED",e.INVSPHERICAL="SPHERICAL",e.INVHEMISPHERICAL="INVHEMISPHERICAL",e.INVCURVED="INVCURVED";}(Yt||(Yt={}));class gs extends ht{get patternName(){let e=Et.SOLID;return this.isPattern(this.fill)&&(e=this.fill.name),e}get solidFillFlag(){return this.patternName===Et.SOLID?Tt.SolidFill:Tt.PatternFill}constructor(e,s,n){super("HATCH","AcDbHatch",n),this.fill=s,this.elevation=(null==n?void 0:n.elevation)||0,this.extrusion=(null==n?void 0:n.extrusion)||t(0,0,1),this.boundaryPath=e;}pattern(e,t){var s;const n=t.name,i=null!==(s=t.angle)&&void 0!==s?s:0,h=t.scale||1,o=t.double||!1;e.push(52,i),e.push(41,h),e.push(77,Number(o));const d=T.get(n);d&&(d.scale=h,0!==i&&(d.angle=i),d.dxfy(e));}gradient(e,t){var s,n,i;const h=t.firstColor,o=null!==(s=t.secondColor)&&void 0!==s?s:7,d=null!==(n=t.angle)&&void 0!==n?n:0,a=t.definition||0,l=null!==(i=t.tint)&&void 0!==i?i:1,r=t.type||Yt.LINEAR;e.push(450,1),e.push(451,0),e.push(460,d),e.push(461,a),e.push(452,t.secondColor?0:1),e.push(462,l),e.push(453,2),e.push(463,0),e.push(63,h),e.push(421,it.fromHex(p(h))),e.push(463,1),e.push(63,o),e.push(421,it.fromHex(p(o))),e.push(470,r);}isPattern(e){return "name"in e}boundingBox(){return a.pointBBox(t(0,0))}dxfyChild(e){var s,n,i;e.point3d(t(0,0,this.elevation)),e.push(210,null===(s=this.extrusion)||void 0===s?void 0:s.x),e.push(220,null===(n=this.extrusion)||void 0===n?void 0:n.y),e.push(230,null===(i=this.extrusion)||void 0===i?void 0:i.z),e.name(this.patternName),e.push(70,this.solidFillFlag),e.push(71,Xt.NonAssociative),e.push(91,this.boundaryPath.length),this.boundaryPath.dxfy(e),e.push(75,Rt.Outer),e.push(76,Ft.Predifined),this.isPattern(this.fill)?(this.solidFillFlag===Tt.PatternFill&&this.pattern(e,this.fill),e.push(47,1),e.push(98,0)):(e.push(47,1),e.push(98,0),this.gradient(e,this.fill));}}!function(e){e[e.ShowImage=1]="ShowImage",e[e.ShowImageWhenNotAlignedWithScreen=2]="ShowImageWhenNotAlignedWithScreen",e[e.UseClippingBoundary=4]="UseClippingBoundary",e[e.TransparencyIsOn=8]="TransparencyIsOn";}(wt||(wt={})),function(e){e[e.Rectangular=1]="Rectangular",e[e.Polygonal=2]="Polygonal";}(Nt||(Nt={})),function(e){e[e.Off=0]="Off",e[e.On=1]="On";}(Mt||(Mt={})),function(e){e[e.Outside=0]="Outside",e[e.Inside=1]="Inside";}(Pt||(Pt={}));class ps extends ht{constructor(e,t){super("IMAGE","AcDbRasterImage",t),Bt.set(this,void 0),this.width=e.width,this.height=e.height,this.scale=e.scale,this.rotation=e.rotation,this.insertionPoint=e.insertionPoint,this.ratio=this.scale/this.width,this.imageDefHandle=e.imageDefHandle,this.imageDisplayFlags=(null==t?void 0:t.imageDisplayFlags)||wt.ShowImage|wt.ShowImageWhenNotAlignedWithScreen,this.clippingStateFlag=(null==t?void 0:t.clippingStateFlag)||Mt.On,this.clipModeFlag=(null==t?void 0:t.clipModeFlag)||Pt.Inside,this.clippingType=(null==t?void 0:t.clippingType)||Nt.Rectangular,this.brightness=(null==t?void 0:t.brightness)||50,this.contrast=(null==t?void 0:t.brightness)||50,this.fade=(null==t?void 0:t.fade)||0,D(this,Bt,[],"f"),this.classVersion=(null==t?void 0:t.classVersion)||0,this.resetClipping();}setClipBoundaryVerticies(e,t){if(t===Nt.Rectangular){if(2!=e.length)throw new Error("The number of vertices should be 2 in rectangular clipping !");D(this,Bt,e,"f");}else {if(!(e.length>=3))throw new Error("The number of vertices should be >= 3 in polygonal clipping !");D(this,Bt,e,"f");}D(this,Bt,[],"f"),S(this,Bt,"f").push(...e);}resetClipping(){const e=[s(-.5,-.5),s(this.width-.5,this.height-.5)];this.setClipBoundaryVerticies(e,Nt.Rectangular);}_vector(){return s(this.ratio*Math.cos(this.rotation*Math.PI/180),this.ratio*Math.sin(this.rotation*Math.PI/180))}_uVector(){const e=this._vector();return t(e.x,-e.y,0)}_vVector(){const e=this._vector();return t(e.y,e.x,0)}boundingBox(){const e=this.scale,t=this.width/this.height*this.scale,s=Math.sqrt(Math.pow(e,2)+Math.pow(t,2));return a.centerRadiusBBox(this.insertionPoint,s)}dxfyChild(e){e.push(90,this.classVersion),e.point3d(this.insertionPoint),e.point3d(this._uVector(),1),e.point3d(this._vVector(),2),e.push(13,this.width),e.push(23,this.height),e.push(340,this.imageDefHandle),e.push(70,this.imageDisplayFlags),e.push(280,this.clippingStateFlag),e.push(281,this.brightness),e.push(282,this.contrast),e.push(283,this.fade),e.push(360,this.imageDefReactorHandle),e.push(71,this.clippingType),e.push(91,S(this,Bt,"f").length),S(this,Bt,"f").forEach((t=>e.point2d(t,4))),e.push(290,this.clipModeFlag);}}Bt=new WeakMap;class As extends ht{constructor(e,s,n){var i,h,o,d,a,l;super("INSERT","AcDbBlockReference",n),this.blockName=e,this.insertionPoint=s,this.scaleFactor=(null==n?void 0:n.scaleFactor)||t(1,1,1),this.rotationAngle=null!==(i=null==n?void 0:n.rotationAngle)&&void 0!==i?i:0,this.columnCount=null!==(h=null==n?void 0:n.columnCount)&&void 0!==h?h:1,this.rowCount=null!==(o=null==n?void 0:n.rowCount)&&void 0!==o?o:1,this.columnSpacing=null!==(d=null==n?void 0:n.columnSpacing)&&void 0!==d?d:0,this.rowSpacing=null!==(a=null==n?void 0:n.rowSpacing)&&void 0!==a?a:0,this.attributesFollowFlag=null!==(l=null==n?void 0:n.rowSpacing)&&void 0!==l?l:0;}boundingBox(){return a.pointBBox(this.insertionPoint)}dxfyChild(e){e.name(this.blockName),e.point3d(this.insertionPoint),e.push(41,this.scaleFactor.x),e.push(42,this.scaleFactor.y),e.push(43,this.scaleFactor.z),e.push(50,this.rotationAngle),e.push(66,this.attributesFollowFlag),e.push(70,this.columnCount),e.push(71,this.rowCount),e.push(44,this.columnSpacing),e.push(45,this.rowSpacing);}}!function(e){e[e.Disabed=0]="Disabed",e[e.Enabled=1]="Enabled";}(Ot||(Ot={})),function(e){e[e.StraightLine=0]="StraightLine",e[e.Spline=1]="Spline";}(_t||(_t={}));class ys extends ht{constructor(e,t){var s,n;super("LEADER","AcDbLeader",t),this.vertices=e,this.flag=null!==(s=null==t?void 0:t.flag)&&void 0!==s?s:Ot.Enabled,this.leaderPathType=null!==(n=null==t?void 0:t.leaderPathType)&&void 0!==n?n:_t.StraightLine,this.dimensionStyleName=(null==t?void 0:t.dimensionStyleName)||"Standard";}boundingBox(){return a.verticesBBox(this.vertices)}dxfyChild(e){e.push(3,this.dimensionStyleName),e.push(71,this.flag),e.push(72,this.leaderPathType),e.push(76,this.vertices.length),this.vertices.forEach((t=>e.point3d(t)));}}class ms extends ht{constructor(e,t,s){super("LINE","AcDbLine",s),this.startPoint=e,this.endPoint=t;}boundingBox(){return a.lineBBox(this.startPoint,this.endPoint)}dxfyChild(e){e.point3d(this.startPoint),e.point3d(this.endPoint,1);}}!function(e){e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.Plinegen=128]="Plinegen";}(Ht||(Ht={}));class xs extends ht{constructor(e,t){super("LWPOLYLINE","AcDbPolyline",t),this.vertices=e,this.flags=(null==t?void 0:t.flags)||Ht.None,this.constantWidth=(null==t?void 0:t.constantWidth)||0,this.elevation=(null==t?void 0:t.elevation)||0,this.thickness=(null==t?void 0:t.thickness)||0;}boundingBox(){return a.verticesBBox(this.vertices.map((e=>t(e.point.x,e.point.y,0))))}dxfyChild(e){var t,s,n;e.push(90,this.vertices.length),e.push(70,this.flags||0),this.vertices.find((e=>{var t,s;return (null!==(t=e.startingWidth)&&void 0!==t?t:0)>0&&(null!==(s=e.endWidth)&&void 0!==s?s:0)>0}))||e.push(43,this.constantWidth),e.elevation(this.elevation),e.thickness(this.thickness);for(const t of this.vertices)e.point2d(t.point),e.push(40,t.startingWidth),e.push(41,t.endWidth),e.push(42,t.bulge);e.push(210,null===(t=this.extrusion)||void 0===t?void 0:t.x),e.push(220,null===(s=this.extrusion)||void 0===s?void 0:s.y),e.push(230,null===(n=this.extrusion)||void 0===n?void 0:n.z);}}!function(e){e[e.TopLeft=1]="TopLeft",e[e.TopCenter=2]="TopCenter",e[e.TopRight=3]="TopRight",e[e.MiddleLeft=4]="MiddleLeft",e[e.MiddleCenter=5]="MiddleCenter",e[e.MiddleRight=6]="MiddleRight",e[e.BottomLeft=7]="BottomLeft",e[e.BottomCenter=8]="BottomCenter",e[e.BottomRight=9]="BottomRight";}(kt||(kt={})),function(e){e[e.LeftToRight=1]="LeftToRight",e[e.TopToBottom=3]="TopToBottom",e[e.ByStyle=5]="ByStyle";}(Wt||(Wt={})),function(e){e[e.AtLeast=1]="AtLeast",e[e.Exact=2]="Exact";}(Vt||(Vt={}));class Is extends ht{constructor(e,t,s,n){super("MTEXT","AcDbMText",n),this.position=e,this.height=t,this.value=s,this.textStyle="STANDARD",this.rotation=null==n?void 0:n.rotation,this.attachmentPoint=null==n?void 0:n.attachmentPoint,this.drawingDirection=null==n?void 0:n.drawingDirection,this.lineSpacingStyle=null==n?void 0:n.lineSpacingStyle,this.width=null==n?void 0:n.width;}boundingBox(){return a.pointBBox(this.position)}dxfyChild(e){e.point3d(this.position),e.push(40,this.height),e.push(41,this.width),e.push(71,this.attachmentPoint),e.push(72,this.drawingDirection),e.push(73,this.lineSpacingStyle),e.primaryText(this.value),e.push(50,this.rotation),e.textStyle(this.textStyle);}}class Ls extends ht{constructor(e,t,s,n){super("POINT","AcDbPoint",n),this.x=e,this.y=t,this.z=s;}boundingBox(){return a.pointBBox(t(this.x,this.y,this.z))}dxfyChild(e){e.point3d(t(this.x,this.y,this.z));}}!function(e){e[e.None=0]="None",e[e.ExtraVertex=1]="ExtraVertex",e[e.CurveFit=2]="CurveFit",e[e.NotUsed=4]="NotUsed",e[e.SplineVertex=8]="SplineVertex",e[e.SplineFrame=16]="SplineFrame",e[e.Polyline3dVertex=32]="Polyline3dVertex",e[e.Polygon3dMesh=64]="Polygon3dMesh",e[e.PolyfaceMeshVertex=128]="PolyfaceMeshVertex";}(Ut||(Ut={}));class Ss extends ht{constructor(e,t){var s;super("VERTEX","AcDbVertex",t),this.point=e,this.flags=null!==(s=null==t?void 0:t.flags)&&void 0!==s?s:Ut.None,t&&("startingWidth"in t&&(this.startingWidth=t.startingWidth),"endWidth"in t&&(this.endWidth=t.endWidth),"bulge"in t&&(this.bulge=t.bulge));}boundingBox(){return a.pointBBox(this.point)}dxfyChild(e){e.subclassMarker("AcDb3dPolylineVertex"),e.point3d(this.point),e.push(40,this.startingWidth),e.push(41,this.endWidth),e.push(42,this.bulge),e.push(70,this.flags);}}class Ds extends ht{dxfyChild(e){}constructor(){super("SEQEND");}}!function(e){e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.CurveFit=2]="CurveFit",e[e.SplineFit=4]="SplineFit",e[e.Polyline3D=8]="Polyline3D",e[e.PolygonMesh3D=16]="PolygonMesh3D",e[e.PolygonMeshClosed=32]="PolygonMeshClosed",e[e.PolyfaceMesh=64]="PolyfaceMesh",e[e.LinetypeGenerated=128]="LinetypeGenerated";}(jt||(jt={})),function(e){e[e.NoSmooth=0]="NoSmooth",e[e.QuadraticBSpline=5]="QuadraticBSpline",e[e.CubicBSpline=6]="CubicBSpline",e[e.Bezier=8]="Bezier";}(Gt||(Gt={}));class bs extends ht{constructor(e,t){var s,n,i,h,o,d,a,l,r,f;super("POLYLINE","AcDb3dPolyline",t),this._seqend=new Ds,this.vertices=[],this.thickness=null!==(s=null==t?void 0:t.thickness)&&void 0!==s?s:0,this.elevation=null!==(n=null==t?void 0:t.elevation)&&void 0!==n?n:0,this.flags=null!==(i=null==t?void 0:t.flags)&&void 0!==i?i:jt.None,this.defaultStartWidth=null!==(h=null==t?void 0:t.defaultStartWidth)&&void 0!==h?h:0,this.defaultEndWidth=null!==(o=null==t?void 0:t.defaultEndWidth)&&void 0!==o?o:0,this.polygonMeshM=null!==(d=null==t?void 0:t.polygonMeshM)&&void 0!==d?d:0,this.polygonMeshN=null!==(a=null==t?void 0:t.polygonMeshN)&&void 0!==a?a:0,this.smoothSurfaceM=null!==(l=null==t?void 0:t.smoothSurfaceM)&&void 0!==l?l:0,this.smoothSurfaceN=null!==(r=null==t?void 0:t.smoothSurfaceN)&&void 0!==r?r:0,this.surfaceType=null!==(f=null==t?void 0:t.surfaceType)&&void 0!==f?f:Gt.NoSmooth,e.forEach((e=>this.vertices.push(new Ss(e.point,{startingWidth:e.startingWidth,endWidth:e.endWidth,bulge:e.bulge,flags:Ut.Polyline3dVertex}))));}boundingBox(){return a.verticesBBox(this.vertices.map((e=>e.point)))}dxfyChild(e){e.push(66,1),e.point3d(t(0,0,this.elevation)),e.push(39,this.thickness),e.push(70,this.flags),e.push(40,this.defaultStartWidth),e.push(41,this.defaultEndWidth),e.push(71,this.polygonMeshM),e.push(72,this.polygonMeshN),e.push(73,this.smoothSurfaceM),e.push(74,this.smoothSurfaceN),e.push(75,this.surfaceType),this.vertices.forEach((t=>t.dxfy(e))),this._seqend.dxfy(e);}}!function(e){e[e.Closed=1]="Closed",e[e.Periodic=2]="Periodic",e[e.Rational=4]="Rational",e[e.Planar=8]="Planar",e[e.Linear=16]="Linear";}(zt||(zt={}));class vs extends ht{constructor(e,t){var s,n;super("SPLINE","AcDbSpline",t),this.controlPoints=e.controlPoints,this.degreeCurve=null!==(s=e.degreeCurve)&&void 0!==s?s:3,this.flags=null!==(n=e.flags)&&void 0!==n?n:zt.Planar,this.knots=e.knots||[],this.weights=e.weights||[],this.fitPoints=e.fitPoints||[];const i=this.controlPoints.length,h=this.degreeCurve,o=h+1,d=this.fitPoints.length;if(i<o)throw new Error(`Number of control points should be >= ${o}.`);if(0!==d&&d<2)throw new Error("Number of fit points should be >= 2.");const a=h+i+1;if(0===this.knots.length){let e=0;for(let t=0;t<a;t++)t<=h||t>=i+1?this.knots.push(e):this.knots.push(++e);}if(this.knots.length!==a)throw new Error(`Number of knots should be ${a}.`)}boundingBox(){return a.verticesBBox([...this.controlPoints,...this.fitPoints])}dxfyChild(e){e.push(70,this.flags),e.push(71,this.degreeCurve),e.push(72,this.knots.length),e.push(73,this.controlPoints.length),e.push(74,this.fitPoints.length),e.push(42,"0.0000001"),e.push(43,"0.0000001"),e.push(42,"0.0000000001"),this.knots.forEach((t=>e.push(40,t))),this.weights.forEach((t=>e.push(41,t))),this.controlPoints.forEach((t=>e.point3d(t))),this.fitPoints.forEach((t=>e.point3d(t,1)));}}!function(e){e[e.Text=1]="Text",e[e.Block=2]="Block";}(Jt||(Jt={})),function(e){e[e.False=0]="False",e[e.True=1]="True";}(Kt||(Kt={})),function(e){e[e.False=0]="False",e[e.True=1]="True";}(Zt||(Zt={})),function(e){e[e.TopLeft=1]="TopLeft",e[e.TopCenter=2]="TopCenter",e[e.TopRight=3]="TopRight",e[e.MiddleLeft=4]="MiddleLeft",e[e.MiddleCenter=5]="MiddleCenter",e[e.MiddleRight=6]="MiddleRight",e[e.BottomLeft=7]="BottomLeft",e[e.BottomCenter=8]="BottomCenter",e[e.BottomRight=9]="BottomRight";}(qt||(qt={}));class Fs extends ht{constructor(e,s,n,i,h,o,d){super("ACAD_TABLE","AcDbBlockReference",d),this.blockName=e,this.position=s,this.numberOfRows=n,this.numberOfColumn=i,this.rowsHeight=h,this.columnsHeight=o,this.horizontalDirectionVector=(null==d?void 0:d.horizontalDirectionVector)||t(1),this.cells=null==d?void 0:d.cell;}boundingBox(){return a.pointBBox(this.position)}dxfyChild(e){var t,s,n,i;e.name(this.blockName),e.point3d(this.position),e.subclassMarker("AcDbTable"),e.point3d(this.horizontalDirectionVector,1),e.push(91,this.numberOfRows),e.push(92,this.numberOfColumn);for(let n=0;n<this.numberOfRows;n++)e.push(141,null!==(s=null!==(t=this.rowsHeight[n])&&void 0!==t?t:this.rowsHeight[0])&&void 0!==s?s:1);for(let t=0;t<this.numberOfColumn;t++)e.push(142,null!==(i=null!==(n=this.columnsHeight[t])&&void 0!==n?n:this.columnsHeight[0])&&void 0!==i?i:1);this.cells.forEach((t=>t.dxfy(e)));}}!function(e){e[e.None=0]="None",e[e.Backward=2]="Backward",e[e.UpsideDown=4]="UpsideDown";}($t||($t={})),function(e){e[e.Left=0]="Left",e[e.Center=1]="Center",e[e.Right=2]="Right",e[e.Aligned=3]="Aligned",e[e.Middle=4]="Middle",e[e.Fit=5]="Fit";}(Qt||(Qt={})),function(e){e[e.BaseLine=0]="BaseLine",e[e.Bottom=1]="Bottom",e[e.Middle=2]="Middle",e[e.Top=3]="Top";}(es||(es={}));class Cs extends ht{constructor(e,t,s,n){super("TEXT","AcDbText",n),this.position=e,this.height=t,this.value=s,this.textStyle="STANDARD",this.rotation=null==n?void 0:n.rotation,this.obliqueAngle=null==n?void 0:n.obliqueAngle,this.generationFlags=null==n?void 0:n.generationFlags,this.horizontalAlignment=null==n?void 0:n.horizontalAlignment,this.verticalAlignment=null==n?void 0:n.verticalAlignment,this.secondAlignmentPoint=null==n?void 0:n.secondAlignmentPoint,this.relativeXScaleFactor=null==n?void 0:n.relativeXScaleFactor;}boundingBox(){return a.pointBBox(this.position)}dxfyChild(e){e.point3d(this.position),e.push(40,this.height),e.primaryText(this.value),e.push(50,this.rotation),e.push(41,this.relativeXScaleFactor),e.push(51,this.obliqueAngle),e.textStyle(this.textStyle),e.push(71,this.generationFlags),e.push(72,this.horizontalAlignment),e.point3d(this.secondAlignmentPoint,1),e.subclassMarker("AcDbText"),e.push(73,this.verticalAlignment);}}class Ts{constructor(e,t,s){this.entities=[],this.handle=h.next(),this.objects=e,this.blockRecord=t,this.layerName=s;}dxfy(e){for(const t of this.entities)t.dxfy(e);}addHatch(e,t,s){const n=new gs(e,t,s);return this.addEntity(n)}addEntity(e){return e.ownerBlockRecord=this.blockRecord.handle,this.blockRecord.isPaperSpace&&(e.inPaperSpace=!0),null==e.layerName&&(e.layerName=this.layerName),this.entities.push(e),e}addAttrib(e,t,s,n,i,h){i.attributesFollowFlag=1;const o=this.addEntity(new St(e,t,s,n,h));return this.addEntity(new Ds).ownerBlockRecord=i.handle,o}addAttdef(e,t,s,n,i){return this.addEntity(new Lt(e,t,s,n,i))}addAlignedDim(e,t,s){return this.addEntity(new ct(e,t,s))}addDiameterDim(e,t,s){return this.addEntity(new yt(e,t,s))}addRadialDim(e,t,s){return this.addEntity(new xt(e,t,s))}addLinearDim(e,t,s){return this.addEntity(new mt(e,t,s))}addAngularLinesDim(e,t,s,n){return this.addEntity(new gt(e,t,s,n))}addAngularPointsDim(e,t,s,n){return this.addEntity(new pt(e,t,s,n))}addLine(e,t,s){return this.addEntity(new ms(e,t,s))}addLeader(e,t){return this.addEntity(new ys(e,t))}addLWPolyline(e,t){return this.addEntity(new xs(e,t))}addRectangle(t,n,i){const h=[],o=t.x,d=t.y,a=n.x,l=n.y;if(void 0!==(null==i?void 0:i.fillet)&&void 0!==(null==i?void 0:i.chamfer))throw new Error("You cannot define both fillet and chamfer!");if(void 0!==(null==i?void 0:i.fillet)){const t=null==i?void 0:i.fillet,n=e(t);h.push({point:s(o,d-t),bulge:n}),h.push({point:s(o+t,d)}),h.push({point:s(a-t,d),bulge:n}),h.push({point:s(a,d-t)}),h.push({point:s(a,l+t),bulge:n}),h.push({point:s(a-t,l)}),h.push({point:s(o+t,l),bulge:n}),h.push({point:s(o,l+t)});}else if(void 0!==(null==i?void 0:i.chamfer)){const e=null==i?void 0:i.chamfer.first,t=(null==i?void 0:i.chamfer.second)||e;h.push({point:s(o,d-e)}),h.push({point:s(o+t,d)}),h.push({point:s(a-e,d)}),h.push({point:s(a,d-t)}),h.push({point:s(a,l+e)}),h.push({point:s(a-t,l)}),h.push({point:s(o+e,l)}),h.push({point:s(o,l+t)});}else h.push({point:s(o,d)}),h.push({point:s(a,d)}),h.push({point:s(a,l)}),h.push({point:s(o,l)});return this.addLWPolyline(h,Object.assign(Object.assign({},i),{flags:Ht.Closed}))}addImage(e,t,s,n,i,h,o,d){const a=this.objects.addImageDef(e);a.width=n,a.height=i;const l=new ps({height:i,width:n,scale:h,rotation:o,insertionPoint:s,imageDefHandle:a.handle},d),r=this.objects.addImageDefReactor(l.handle);l.imageDefReactorHandle=r.handle,this.addEntity(l);const f=this.objects.addDictionary();return f.addEntryObject(t,a.handle),a.ownerObjecthandle=f.handle,this.objects.root.addEntryObject("ACAD_IMAGE_DICT",f.handle),a.acadImageDictHandle=f.handle,a.addImageDefReactorHandle(r.handle),l}addPolyline3D(e,t){return this.addEntity(new bs(e,t))}addPoint(e,t,s,n){return this.addEntity(new Ls(e,t,s,n))}addCircle(e,t,s){return this.addEntity(new Dt(e,t,s))}addArc(e,t,s,n,i){return this.addEntity(new It(e,t,s,n,i))}addSpline(e,t){return this.addEntity(new vs(e,t))}addEllipse(e,t,s,n,i,h){const o=new bt(e,t,s,n,i,h);return this.addEntity(o),o}add3dFace(e,t,s,n,i){return this.addEntity(new hs(e,t,s,n,i))}addText(e,t,s,n){return this.addEntity(new Cs(e,t,s,n))}addMText(e,t,s,n){return this.addEntity(new Is(e,t,s,n))}addInsert(e,t,s){return this.addEntity(new As(e,t,s||{}))}addTable(e,t,s,n,i,h,o){return this.addEntity(new Fs(e,t,s,n,i,h,o))}boundingBox(){const e=[];for(let t=0;t<this.entities.length;t++)e.push(this.entities[t].boundingBox());return a.boundingBox(e)}centerView(){return a.boundingBoxCenter(this.boundingBox())}viewHeight(){return a.boundingBoxHeight(this.boundingBox())}}!function(e){e[e.None=0]="None",e[e.AnonymousBlock=1]="AnonymousBlock",e[e.HasNonConstantAttribute=2]="HasNonConstantAttribute",e[e.XRef=4]="XRef",e[e.XRefOverlay=8]="XRefOverlay",e[e.ExternallyDependent=16]="ExternallyDependent",e[e.ResolvedXRef=32]="ResolvedXRef",e[e.ReferencedXRef=64]="ReferencedXRef";}(ts||(ts={}));class Xs extends Ts{get isPaperSpace(){return this.name.startsWith("*Paper_Space")}get isModelSpace(){return this.name.startsWith("*Model_Space")}get isModelOrPaperSpace(){return this.isModelSpace||this.isPaperSpace}constructor(e,s,n){super(n,s,"0"),this.name=e,this.flags=ts.None,this.endBlk=new o,this.ownerObjectHandle=s.handle,this.basePoint=t(0,0,0),this.xrefPathName="";}setLayerName(e){this.layerName=e;}dxfy(e){e.type("BLOCK"),e.handle(this.handle),e.push(330,this.ownerObjectHandle),e.subclassMarker("AcDbEntity"),e.layerName(this.layerName),e.subclassMarker("AcDbBlockBegin"),e.name(this.name),e.push(70,this.flags),e.point3d(this.basePoint),e.name(this.name,3),e.push(1,this.xrefPathName),this.isModelSpace||"*Paper_Space"===this.name||super.dxfy(e),this.endBlk.dxfy(e);}}class Rs{constructor(e,t){this.blocks=[],this.paperSpaceSeed=0,this.tables=e,this.objects=t,this.modelSpace=this.addBlock("*Model_Space",t,!1),this.paperSpace=this.addBlock("*Paper_Space",t,!1);}addBlock(e,t,s=!0){s&&(e=e.replace(rt,""));const n=this.tables.addBlockRecord(e),i=new Xs(e,n,t);return this.blocks.push(i),i}addPaperSpace(){const e="*Paper_Space"+this.paperSpaceSeed++;return this.addBlock(e,this.objects,!1)}dxfy(e){e.start("BLOCKS"),this.blocks.forEach((t=>t.dxfy(e))),e.end();}}class Ys{dxfy(e){e.start("CLASSES"),e.end();}}class Bs{constructor(e){this.blocks=e,this.modelSpace=e.modelSpace,this.paperSpace=e.paperSpace;}setLayerName(e){this.modelSpace.setLayerName(e);}dxfy(e){e.start("ENTITIES"),this.paperSpace.entities.forEach((t=>t.dxfy(e))),this.modelSpace.entities.forEach((t=>t.dxfy(e))),e.end();}}class ws{constructor(e,t){this.values=t,this.name=e;}dxfy(e){e.variableName(this.name);Object.entries(this.values).forEach((t=>{const[s,n]=t;e.push(parseInt(s),n);}));}}class Ns{constructor(){this.variables=[];}setVariable(e,t){const s=this.variables.find((t=>t.name===e));s?s.values=t:this.variables.push(new ws(e,t));}dxfy(e){e.start("HEADER"),this.variables.forEach((t=>t.dxfy(e))),e.end();}}class Ms{constructor(e){this.type=e,this.ownerObjecthandle="0",this.handle=h.next();}dxfy(e){e.type(this.type),e.handle(this.handle),e.push(330,this.ownerObjecthandle);}}class Ps extends Ms{constructor(){super("DICTIONARY"),this.entries=[],this.duplicateRecordCloningFlag=0;}addEntryObject(e,t){this.entries.push({name:e,entryObjectHandle:t});}dxfy(e){super.dxfy(e),e.subclassMarker("AcDbDictionary"),e.push(280,this.hardOwnerFlag),e.push(281,this.duplicateRecordCloningFlag);for(const t of this.entries)e.push(3,t.name),e.push(350,t.entryObjectHandle);}}!function(e){e[e.NoUnits=0]="NoUnits",e[e.Centimeters=2]="Centimeters",e[e.Inch=5]="Inch";}(ss||(ss={}));class Os extends Ms{constructor(e){super("IMAGEDEF"),this.path=e,this.acadImageDictHandle="",this.imageReactorHandles=[],this.width=1,this.height=1,this.widthPixelSize=1,this.heightPixelSize=1,this.loaded=!0,this.resolutionUnits=ss.NoUnits;}addImageDefReactorHandle(e){this.imageReactorHandles.push(e);}dxfy(e){super.dxfy(e);const t=new A("ACAD_REACTORS");t.add(330,this.acadImageDictHandle);for(const e of this.imageReactorHandles)t.add(330,e);t.dxfy(e),e.subclassMarker("AcDbRasterImageDef"),e.push(1,this.path),e.point2d(s(this.width,this.height)),e.push(11,this.widthPixelSize),e.push(21,this.heightPixelSize),e.push(280,Number(this.loaded)),e.push(281,this.resolutionUnits);}}class _s extends Ms{constructor(e){super("IMAGEDEF_REACTOR"),this.imageHandle=e,this.classVersion=2;}dxfy(e){super.dxfy(e),e.subclassMarker("AcDbRasterImageDefReactor"),e.push(90,this.classVersion),e.push(330,this.imageHandle);}}class Hs{constructor(){this.root=new Ps,this.objects=[],this.root.duplicateRecordCloningFlag=1;const e=this.addDictionary();this.root.addEntryObject("ACAD_GROUP",e.handle);}addObject(e){return this.objects.push(e),e}addImageDef(e){return this.addObject(new Os(e))}addImageDefReactor(e){return this.addObject(new _s(e))}addDictionary(){const e=new Ps;return e.ownerObjecthandle=this.root.handle,this.addObject(e),e}addEntryToRoot(e,t){this.root.addEntryObject(e,t);}dxfy(e){e.start("OBJECTS"),this.root.dxfy(e);for(const t of this.objects)t.dxfy(e);e.end(),e.type("EOF");}}class Ws{constructor(e){this.name=e,this.maxNumberEntries=0,this.ownerObjectHandle="0",this.handle=h.next(),this.records=[];}dxfy(e){e.type("TABLE"),e.name(this.name),e.handle(this.handle),e.push(330,this.ownerObjectHandle),e.subclassMarker("AcDbSymbolTable"),e.push(70,this.records.length);for(const t of this.records)t.dxfy(e);e.type("ENDTAB");}}!function(e){e[e.None=0]="None",e[e.XRefDependent=16]="XRefDependent",e[e.XRefResolved=32]="XRefResolved";}(ns||(ns={}));class Vs extends u{constructor(e,t){super("APPID"),this.name=e,this.flags=null!=t?t:ns.None;}dxfy(e){super.dxfy(e),e.subclassMarker("AcDbRegAppTableRecord"),e.name(this.name),e.push(70,this.flags);}}class Us extends u{get isPaperSpace(){return this.name.startsWith("*Paper_Space")}constructor(e){super("BLOCK_RECORD"),this.name=e,this.insertionUnits=0,this.explodability=1,this.scalability=0;}dxfy(e){super.dxfy(e),e.subclassMarker("AcDbBlockTableRecord"),e.name(this.name),e.push(340,this.layoutObject),e.push(70,this.insertionUnits),e.push(280,this.explodability),e.push(281,this.scalability);}}!function(e){e[e.None=0]="None",e[e.XRefDependent=16]="XRefDependent",e[e.XRefRefesolved=32]="XRefRefesolved";}(is||(is={}));class js{constructor(e,t){this.name=e,this.flags=null!=t?t:is.None,this.handle=h.next(),this.type="DIMSTYLE";}dxfy(e){e.type(this.type),e.push(105,this.handle),e.push(330,this.ownerObjectHandle),e.subclassMarker("AcDbSymbolTableRecord"),e.subclassMarker("AcDbDimStyleTableRecord"),e.name(this.name),e.push(70,this.flags),e.push(3,this.DIMPOST),e.push(4,this.DIMAPOST),e.push(5,this.DIMBLK),e.push(6,this.DIMBLK1),e.push(7,this.DIMBLK2),e.push(40,this.DIMSCALE),e.push(41,this.DIMASZ),e.push(42,this.DIMEXO),e.push(43,this.DIMDLI),e.push(44,this.DIMEXE),e.push(45,this.DIMRND),e.push(46,this.DIMDLE),e.push(47,this.DIMTP),e.push(48,this.DIMTM),e.push(140,this.DIMTXT),e.push(141,this.DIMCEN),e.push(142,this.DIMTSZ),e.push(143,this.DIMALTF),e.push(144,this.DIMLFAC),e.push(145,this.DIMTVP),e.push(146,this.DIMTFAC),e.push(147,this.DIMGAP),e.push(148,this.DIMALTRND),e.push(71,this.DIMTOL),e.push(72,this.DIMLIM),e.push(73,this.DIMTIH),e.push(74,this.DIMTOH),e.push(75,this.DIMSE1),e.push(76,this.DIMSE2),e.push(77,this.DIMTAD),e.push(78,this.DIMZIN),e.push(79,this.DIMAZIN),e.push(170,this.DIMALT),e.push(171,this.DIMALTD),e.push(172,this.DIMTOFL),e.push(173,this.DIMSAH),e.push(174,this.DIMTIX),e.push(175,this.DIMSOXD),e.push(176,this.DIMCLRD),e.push(177,this.DIMCLRE),e.push(178,this.DIMCLRT),e.push(179,this.DIMADEC),e.push(271,this.DIMDEC),e.push(272,this.DIMTDEC),e.push(273,this.DIMALTU),e.push(274,this.DIMALTTD),e.push(275,this.DIMAUNIT),e.push(276,this.DIMFRAC),e.push(277,this.DIMLUNIT),e.push(278,this.DIMDSEP),e.push(279,this.DIMTMOVE),e.push(280,this.DIMJUST),e.push(281,this.DIMSD1),e.push(282,this.DIMSD2),e.push(283,this.DIMTOLJ),e.push(284,this.DIMTZIN),e.push(285,this.DIMALTZ),e.push(286,this.DIMALTTZ),e.push(287,this.DIMFIT),e.push(288,this.DIMUPT),e.push(289,this.DIMATFIT),e.push(340,this.DIMTXSTY),e.push(341,this.DIMLDRBLK),e.push(342,this.DIMBLK),e.push(343,this.DIMBLK1),e.push(344,this.DIMBLK2),e.push(371,this.DIMLWD),e.push(372,this.DIMLWE);}}class Gs extends u{constructor(e,t,s,n){super("LTYPE"),this.name=e,this.descriptive=t,this.elements=s,this.flags=null!=n?n:0;}dxfy(e){super.dxfy(e),e.subclassMarker("AcDbLinetypeTableRecord"),e.name(this.name),e.push(70,this.flags),e.push(3,this.descriptive),e.push(72,65),e.push(73,this.elements.length);let t=0;for(const e of this.elements)t+=Math.abs(e);e.push(40,t);for(const t of this.elements)e.push(49,t),e.push(74,0);}}class zs extends u{constructor(e,t){super("STYLE"),this.fixedTextHeight=0,this.widthFactor=1,this.obliqueAngle=0,this.textGenerationFlag=0,this.lastHeightUsed=1,this.fontFileName="txt",this.bigFontFileName="",this.name=e,this.flags=null!=t?t:r.None;}dxfy(e){super.dxfy(e),e.subclassMarker("AcDbTextStyleTableRecord"),e.name(this.name),e.push(70,this.flags),e.push(40,this.fixedTextHeight),e.push(41,this.widthFactor),e.push(50,this.obliqueAngle),e.push(71,this.textGenerationFlag),e.push(42,this.lastHeightUsed),e.push(3,this.fontFileName),e.push(4,this.bigFontFileName);}}class Js extends u{constructor(e){super("UCS"),this.name=e;}dxfy(e){super.dxfy(e);}}class Ks extends u{constructor(e){super("VPORT"),this.name=e,this.viewHeight=200,this.viewCenter=[0,0];}dxfy(e){super.dxfy(e);const[t,s]=this.viewCenter;e.subclassMarker("AcDbViewportTableRecord"),e.name(this.name),e.push(70,0),e.point2d({x:0,y:0}),e.push(11,1),e.push(21,1),e.push(12,t),e.push(22,s),e.push(13,0),e.push(23,0),e.push(14,10),e.push(24,10),e.push(15,10),e.push(25,10),e.push(16,0),e.push(26,0),e.push(36,1),e.push(17,0),e.push(27,0),e.push(37,0),e.push(40,this.viewHeight||200),e.push(41,2),e.push(42,50),e.push(43,0),e.push(44,0),e.push(50,0),e.push(51,0),e.push(71,0),e.push(72,100),e.push(73,1),e.push(74,3),e.push(75,0),e.push(76,1),e.push(77,0),e.push(78,0),e.push(281,0),e.push(65,1),e.push(110,0),e.push(120,0),e.push(130,0),e.push(111,1),e.push(121,0),e.push(131,0),e.push(112,0),e.push(122,1),e.push(132,0),e.push(79,0),e.push(146,0),e.push(348,10020),e.push(60,7),e.push(61,5),e.push(292,1),e.push(282,1),e.push(141,0),e.push(142,0),e.push(63,250),e.push(421,3358443);}}class Zs extends u{constructor(e){var t;super("VIEW"),this.name=e.name,this.flags=null!==(t=e.flags)&&void 0!==t?t:f.None,this.viewHeight=e.viewHeight,this.viewCenter=e.viewCenter,this.viewWidth=e.viewWidth,this.viewDirection=e.viewDirection,this.targetPoint=e.targetPoint,this.lensLength=e.lensLength,this.frontClipping=e.frontClipping,this.backClipping=e.backClipping,this.twistAngle=e.twistAngle,this.viewMode=e.viewMode,this.renderMode=e.renderMode,this.isUCSAssociated=e.isUCSAssociated,this.isCameraPlottable=e.isCameraPlottable||!1,e.backgroundObjectHandle&&(this.backgroundObjectHandle=e.backgroundObjectHandle),e.liveSectionObjectHandle&&(this.liveSectionObjectHandle=e.liveSectionObjectHandle),e.visualStyleObjectHandle&&(this.visualStyleObjectHandle=e.visualStyleObjectHandle);}dxfy(e){super.dxfy(e),e.subclassMarker("AcDbViewTableRecord"),e.name(this.name),e.push(70,this.flags),e.push(40,this.viewHeight),e.point2d(this.viewCenter),e.push(41,this.viewWidth),e.push(11,this.viewDirection.x),e.push(21,this.viewDirection.y),e.push(31,this.viewDirection.z),e.push(12,this.targetPoint.x),e.push(22,this.targetPoint.y),e.push(32,this.targetPoint.z),e.push(42,this.lensLength),e.push(43,this.frontClipping),e.push(44,this.backClipping),e.push(50,this.twistAngle),e.push(71,this.viewMode),e.push(281,this.renderMode),e.push(72,this.isUCSAssociated?1:0),e.push(73,this.isCameraPlottable?1:void 0),e.push(332,this.backgroundObjectHandle),e.push(334,this.liveSectionObjectHandle),e.push(348,this.visualStyleObjectHandle);}}class qs extends Ws{constructor(){super("APPID");}addAppId(e,t){const s=new Vs(e,t);return s.ownerObjectHandle=this.handle,this.records.push(s),s}}class $s extends Ws{constructor(){super("BLOCK_RECORD");}addBlockRecord(e){const t=new Us(e);return t.ownerObjectHandle=this.handle,this.records.push(t),t}}class Qs extends Ws{constructor(){super("DIMSTYLE"),this.ownerObjectHandle="0";}addDimStyle(e,t){const s=new js(e,t);return s.ownerObjectHandle=this.handle,this.records.push(s),s}dxfy(e){e.type("TABLE"),e.name(this.name),e.handle(this.handle),e.push(330,this.ownerObjectHandle),e.subclassMarker("AcDbSymbolTable"),e.push(70,this.records.length),e.subclassMarker("AcDbDimStyleTable");for(const t of this.records)t.dxfy(e);e.type("ENDTAB");}}class en extends Ws{constructor(){super("LTYPE");}exist(e){return void 0!==this.records.find((t=>t.name===e))}ltype(e){return this.records.find((t=>t.name===e))}addLType(e,t,s,n){const i=this.ltype(e);if(i)return i;const h=new Gs(e,t,s,n);return h.ownerObjectHandle=this.handle,this.records.push(h),h}}class tn extends Ws{constructor(e){super("LAYER"),this.lTypeTable=e;}addLayer(e,t,s,n){e=e.replace(rt,"");const i=this.layer(e);if(i)return i;this.lTypeTable.exist(s)||(s=I.Continuous);const h=new c(e,t,s,n);return h.ownerObjectHandle=this.handle,this.records.push(h),h}layer(e){return e=e.replace(rt,""),this.records.find((t=>t.name===e))}exist(e){return void 0!==this.records.find((t=>t.name===e))}}class sn extends Ws{constructor(){super("STYLE");}addStyle(e,t){const s=new zs(e,t);return s.ownerObjectHandle=this.handle,this.records.push(s),s}}class nn extends Ws{constructor(){super("UCS");}addUcs(e){const t=new Js(e);return t.ownerObjectHandle=this.handle,this.records.push(t),t}}class hn extends Ws{constructor(){super("VPORT");}addViewPort(e){const t=new Ks(e);return t.ownerObjectHandle=this.handle,this.records.push(t),t}}class on extends Ws{constructor(){super("VIEW");}addView(e){const t=new Zs(e);return t.ownerObjectHandle=this.handle,this.records.push(t),t}}class dn{constructor(){this.vPortTable=new hn,this.ltypeTable=new en,this.layerTable=new tn(this.ltypeTable),this.styleTable=new sn,this.viewTable=new on,this.ucsTable=new nn,this.appIdTable=new qs,this.dimStyleTable=new Qs,this.blockRecordTable=new $s;}layer(e){return this.layerTable.layer(e)}addLType(e,t,s,n){return this.ltypeTable.addLType(e,t,s,n)}addBlockRecord(e){return this.blockRecordTable.addBlockRecord(e)}addLayer(e,t,s,n){return this.layerTable.addLayer(e,t,s,n)}addStyle(e){return this.styleTable.addStyle(e)}addView(e){return this.viewTable.addView(e)}addUcs(e){return this.ucsTable.addUcs(e)}addAppId(e,t){return this.appIdTable.addAppId(e,t)}addDimStyle(e,t){return this.dimStyleTable.addDimStyle(e,t)}addVPort(e){return this.vPortTable.addViewPort(e)}dxfy(e){e.start("TABLES"),this.vPortTable.dxfy(e),this.ltypeTable.dxfy(e),this.layerTable.dxfy(e),this.styleTable.dxfy(e),this.viewTable.dxfy(e),this.ucsTable.dxfy(e),this.appIdTable.dxfy(e),this.dimStyleTable.dxfy(e),this.blockRecordTable.dxfy(e),e.end();}}class an{constructor(){h.clear(),this.header=new Ns,this.classes=new Ys,this.tables=new dn,this.objects=new Hs,this.blocks=new Rs(this.tables,this.objects),this.entities=new Bs(this.blocks),this.currentLayerName=c.layerZeroName,this.currentUnits=x.Unitless,this.header.setVariable("$ACADVER",{1:"AC1021"}),this.header.setVariable("$LASTSAVEDBY",{1:"@tarikjabiri/dxf"}),this._handseed(),this.setUnits(x.Unitless),this.tables.addLType("ByBlock","",[]),this.tables.addLType("ByLayer","",[]);const e=this.tables.addLType("Continuous","Solid line",[]);this.tables.addLayer(c.layerZeroName,m.White,e.name),this.styleStandard=this.tables.addStyle("Standard"),this.tables.addAppId("ACAD",ns.None),this.dimStyleStandard=this.tables.addDimStyle("Standard"),this.dimStyleStandard.DIMTXSTY=this.styleStandard.handle,this.activeVPort=this.tables.addVPort("*Active"),this.modelSpace=this.blocks.modelSpace,this.paperSpace=this.blocks.paperSpace,this.setZeroLayerAsCurrent();}dxfy(e){this.header.dxfy(e),this.classes.dxfy(e),this.tables.dxfy(e),this.blocks.dxfy(e),this.entities.dxfy(e),this.objects.dxfy(e);}addBlock(e){return this.blocks.addBlock(e,this.objects)}setZeroLayerAsCurrent(){this.setCurrentLayerName(c.layerZeroName);}setCurrentLayerName(e){this.currentLayerName=e.replace(rt,""),this.entities.setLayerName(this.currentLayerName),this.setCLayerVariable();}_handseed(){this.header.setVariable("$HANDSEED",{5:h.peek()});}setUnits(e){this.currentUnits=e,this.header.setVariable("$INSUNITS",{70:this.currentUnits});}setCLayerVariable(){this.header.setVariable("$CLAYER",{8:this.currentLayerName});}setViewCenter(e){this.header.setVariable("$VIEWCTR",{10:e.x,20:e.y}),this.activeVPort.viewCenter=[e.x,e.y];}stringify(){const e=new y;return this._handseed(),this.setViewCenter(this.modelSpace.centerView()),this.activeVPort.viewHeight=this.modelSpace.viewHeight(),this.dxfy(e),e.stringify()}}class ln{get header(){return this.document.header}get tables(){return this.document.tables}get blocks(){return this.document.blocks}get entities(){return this.document.entities}get currentLayer(){return this.document.currentLayerName}get units(){return this.document.currentUnits}get modelSpace(){return this.document.modelSpace}constructor(){this.document=new an;}layer(e){return this.tables.layer(e)}setZeroLayerAsCurrent(){this.document.setZeroLayerAsCurrent();}addBlock(e){return this.blocks.addBlock(e,this.document.objects)}addPaperSpace(){return this.blocks.addPaperSpace()}setVariable(e,t){this.header.setVariable(e,t);}addLType(e,t,s){return this.tables.addLType(e,t,s)}addDimStyle(e){return this.tables.addDimStyle(e)}addAlignedDim(e,t,s){return this.modelSpace.addAlignedDim(e,t,s)}addDiameterDim(e,t,s){return this.modelSpace.addDiameterDim(e,t,s)}addRadialDim(e,t,s){return this.modelSpace.addRadialDim(e,t,s)}addLinearDim(e,t,s){return this.modelSpace.addLinearDim(e,t,s)}addAngularLinesDim(e,t,s,n){return this.modelSpace.addAngularLinesDim(e,t,s,n)}addHatch(e,t,s){return this.modelSpace.addHatch(e,t,s)}addLayer(e,t,s,n=l.None){return s||(s=I.Continuous),this.tables.addLayer(e,t,s,n)}setCurrentLayerName(e){this.document.setCurrentLayerName(e);}setUnits(e){this.document.setUnits(e);}addLine(e,t,s){return this.modelSpace.addLine(e,t,s)}addLeader(e,t){return this.modelSpace.addLeader(e,t)}addLWPolyline(e,t){return this.modelSpace.addLWPolyline(e,t)}addRectangle(e,t,s){return this.modelSpace.addRectangle(e,t,s)}addPolyline3D(e,t){return this.modelSpace.addPolyline3D(e,t)}addPoint(e,t,s,n){return this.modelSpace.addPoint(e,t,s,n)}addCircle(e,t,s){return this.modelSpace.addCircle(e,t,s)}addArc(e,t,s,n,i){return this.modelSpace.addArc(e,t,s,n,i)}addSpline(e,t){return this.modelSpace.addSpline(e,t)}addEllipse(e,t,s,n,i,h){return this.modelSpace.addEllipse(e,t,s,n,i,h)}addImage(e,t,s,n,i,h,o,d){return this.modelSpace.addImage(e,t,s,n,i,h,o,d)}add3dFace(e,t,s,n,i){return this.modelSpace.add3dFace(e,t,s,n,i)}addText(e,t,s,n){return this.modelSpace.addText(e,t,s,n)}addAttdef(e,t,s,n,i){return this.modelSpace.addAttdef(e,t,s,n,i)}addAttrib(e,t,s,n,i,h){return this.modelSpace.addAttrib(e,t,s,n,i,h)}addMText(e,t,s,n){return this.modelSpace.addMText(e,t,s,n)}addInsert(e,t,s){return this.modelSpace.addInsert(e,t,s)}addTable(e,t,s,n,i,h,o){return this.modelSpace.addTable(e,t,s,n,i,h,o)}stringify(){return this.document.stringify()}}

/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const REVISION = '152';

const UVMapping = 300;
const RepeatWrapping = 1000;
const ClampToEdgeWrapping = 1001;
const MirroredRepeatWrapping = 1002;
const LinearFilter = 1006;
const LinearMipmapLinearFilter = 1008;
const UnsignedByteType = 1009;
const RGBAFormat = 1023;
/** @deprecated Use LinearSRGBColorSpace or NoColorSpace in three.js r152+. */
const LinearEncoding = 3000;
/** @deprecated Use SRGBColorSpace in three.js r152+. */
const sRGBEncoding = 3001;

// Color space string identifiers, matching CSS Color Module Level 4 and WebGPU names where available.
const NoColorSpace = '';
const SRGBColorSpace = 'srgb';

const StaticDrawUsage = 35044;

/**
 * https://github.com/mrdoob/eventdispatcher.js/
 */

class EventDispatcher {

	addEventListener( type, listener ) {

		if ( this._listeners === undefined ) this._listeners = {};

		const listeners = this._listeners;

		if ( listeners[ type ] === undefined ) {

			listeners[ type ] = [];

		}

		if ( listeners[ type ].indexOf( listener ) === - 1 ) {

			listeners[ type ].push( listener );

		}

	}

	hasEventListener( type, listener ) {

		if ( this._listeners === undefined ) return false;

		const listeners = this._listeners;

		return listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1;

	}

	removeEventListener( type, listener ) {

		if ( this._listeners === undefined ) return;

		const listeners = this._listeners;
		const listenerArray = listeners[ type ];

		if ( listenerArray !== undefined ) {

			const index = listenerArray.indexOf( listener );

			if ( index !== - 1 ) {

				listenerArray.splice( index, 1 );

			}

		}

	}

	dispatchEvent( event ) {

		if ( this._listeners === undefined ) return;

		const listeners = this._listeners;
		const listenerArray = listeners[ event.type ];

		if ( listenerArray !== undefined ) {

			event.target = this;

			// Make a copy, in case listeners are removed while iterating.
			const array = listenerArray.slice( 0 );

			for ( let i = 0, l = array.length; i < l; i ++ ) {

				array[ i ].call( this, event );

			}

			event.target = null;

		}

	}

}

const _lut = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff' ];

// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
function generateUUID() {

	const d0 = Math.random() * 0xffffffff | 0;
	const d1 = Math.random() * 0xffffffff | 0;
	const d2 = Math.random() * 0xffffffff | 0;
	const d3 = Math.random() * 0xffffffff | 0;
	const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
			_lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
			_lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
			_lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];

	// .toLowerCase() here flattens concatenated strings to save heap memory space.
	return uuid.toLowerCase();

}

function clamp( value, min, max ) {

	return Math.max( min, Math.min( max, value ) );

}

function denormalize( value, array ) {

	switch ( array.constructor ) {

		case Float32Array:

			return value;

		case Uint16Array:

			return value / 65535.0;

		case Uint8Array:

			return value / 255.0;

		case Int16Array:

			return Math.max( value / 32767.0, - 1.0 );

		case Int8Array:

			return Math.max( value / 127.0, - 1.0 );

		default:

			throw new Error( 'Invalid component type.' );

	}

}

function normalize( value, array ) {

	switch ( array.constructor ) {

		case Float32Array:

			return value;

		case Uint16Array:

			return Math.round( value * 65535.0 );

		case Uint8Array:

			return Math.round( value * 255.0 );

		case Int16Array:

			return Math.round( value * 32767.0 );

		case Int8Array:

			return Math.round( value * 127.0 );

		default:

			throw new Error( 'Invalid component type.' );

	}

}

class Vector2 {

	constructor( x = 0, y = 0 ) {

		Vector2.prototype.isVector2 = true;

		this.x = x;
		this.y = y;

	}

	get width() {

		return this.x;

	}

	set width( value ) {

		this.x = value;

	}

	get height() {

		return this.y;

	}

	set height( value ) {

		this.y = value;

	}

	set( x, y ) {

		this.x = x;
		this.y = y;

		return this;

	}

	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;

		return this;

	}

	setX( x ) {

		this.x = x;

		return this;

	}

	setY( y ) {

		this.y = y;

		return this;

	}

	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	clone() {

		return new this.constructor( this.x, this.y );

	}

	copy( v ) {

		this.x = v.x;
		this.y = v.y;

		return this;

	}

	add( v ) {

		this.x += v.x;
		this.y += v.y;

		return this;

	}

	addScalar( s ) {

		this.x += s;
		this.y += s;

		return this;

	}

	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;

		return this;

	}

	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;

		return this;

	}

	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;

		return this;

	}

	subScalar( s ) {

		this.x -= s;
		this.y -= s;

		return this;

	}

	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;

		return this;

	}

	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;

		return this;

	}

	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;

		return this;

	}

	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;

		return this;

	}

	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	applyMatrix3( m ) {

		const x = this.x, y = this.y;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ];
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ];

		return this;

	}

	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );

		return this;

	}

	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );

		return this;

	}

	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );

		return this;

	}

	clampScalar( minVal, maxVal ) {

		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );

		return this;

	}

	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	}

	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );

		return this;

	}

	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );

		return this;

	}

	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );

		return this;

	}

	roundToZero() {

		this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
		this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );

		return this;

	}

	negate() {

		this.x = - this.x;
		this.y = - this.y;

		return this;

	}

	dot( v ) {

		return this.x * v.x + this.y * v.y;

	}

	cross( v ) {

		return this.x * v.y - this.y * v.x;

	}

	lengthSq() {

		return this.x * this.x + this.y * this.y;

	}

	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y );

	}

	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y );

	}

	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	angle() {

		// computes the angle in radians with respect to the positive x-axis

		const angle = Math.atan2( - this.y, - this.x ) + Math.PI;

		return angle;

	}

	angleTo( v ) {

		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		const theta = this.dot( v ) / denominator;

		// clamp, to handle numerical problems

		return Math.acos( clamp( theta, - 1, 1 ) );

	}

	distanceTo( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	}

	distanceToSquared( v ) {

		const dx = this.x - v.x, dy = this.y - v.y;
		return dx * dx + dy * dy;

	}

	manhattanDistanceTo( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y );

	}

	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;

		return this;

	}

	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;

		return this;

	}

	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) );

	}

	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );

		return this;

	}

	rotateAround( center, angle ) {

		const c = Math.cos( angle ), s = Math.sin( angle );

		const x = this.x - center.x;
		const y = this.y - center.y;

		this.x = x * c - y * s + center.x;
		this.y = x * s + y * c + center.y;

		return this;

	}

	random() {

		this.x = Math.random();
		this.y = Math.random();

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;

	}

}

class Matrix3 {

	constructor() {

		Matrix3.prototype.isMatrix3 = true;

		this.elements = [

			1, 0, 0,
			0, 1, 0,
			0, 0, 1

		];

	}

	set( n11, n12, n13, n21, n22, n23, n31, n32, n33 ) {

		const te = this.elements;

		te[ 0 ] = n11; te[ 1 ] = n21; te[ 2 ] = n31;
		te[ 3 ] = n12; te[ 4 ] = n22; te[ 5 ] = n32;
		te[ 6 ] = n13; te[ 7 ] = n23; te[ 8 ] = n33;

		return this;

	}

	identity() {

		this.set(

			1, 0, 0,
			0, 1, 0,
			0, 0, 1

		);

		return this;

	}

	copy( m ) {

		const te = this.elements;
		const me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ];
		te[ 3 ] = me[ 3 ]; te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ];
		te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ]; te[ 8 ] = me[ 8 ];

		return this;

	}

	extractBasis( xAxis, yAxis, zAxis ) {

		xAxis.setFromMatrix3Column( this, 0 );
		yAxis.setFromMatrix3Column( this, 1 );
		zAxis.setFromMatrix3Column( this, 2 );

		return this;

	}

	setFromMatrix4( m ) {

		const me = m.elements;

		this.set(

			me[ 0 ], me[ 4 ], me[ 8 ],
			me[ 1 ], me[ 5 ], me[ 9 ],
			me[ 2 ], me[ 6 ], me[ 10 ]

		);

		return this;

	}

	multiply( m ) {

		return this.multiplyMatrices( this, m );

	}

	premultiply( m ) {

		return this.multiplyMatrices( m, this );

	}

	multiplyMatrices( a, b ) {

		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;

		const a11 = ae[ 0 ], a12 = ae[ 3 ], a13 = ae[ 6 ];
		const a21 = ae[ 1 ], a22 = ae[ 4 ], a23 = ae[ 7 ];
		const a31 = ae[ 2 ], a32 = ae[ 5 ], a33 = ae[ 8 ];

		const b11 = be[ 0 ], b12 = be[ 3 ], b13 = be[ 6 ];
		const b21 = be[ 1 ], b22 = be[ 4 ], b23 = be[ 7 ];
		const b31 = be[ 2 ], b32 = be[ 5 ], b33 = be[ 8 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31;
		te[ 3 ] = a11 * b12 + a12 * b22 + a13 * b32;
		te[ 6 ] = a11 * b13 + a12 * b23 + a13 * b33;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31;
		te[ 4 ] = a21 * b12 + a22 * b22 + a23 * b32;
		te[ 7 ] = a21 * b13 + a22 * b23 + a23 * b33;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31;
		te[ 5 ] = a31 * b12 + a32 * b22 + a33 * b32;
		te[ 8 ] = a31 * b13 + a32 * b23 + a33 * b33;

		return this;

	}

	multiplyScalar( s ) {

		const te = this.elements;

		te[ 0 ] *= s; te[ 3 ] *= s; te[ 6 ] *= s;
		te[ 1 ] *= s; te[ 4 ] *= s; te[ 7 ] *= s;
		te[ 2 ] *= s; te[ 5 ] *= s; te[ 8 ] *= s;

		return this;

	}

	determinant() {

		const te = this.elements;

		const a = te[ 0 ], b = te[ 1 ], c = te[ 2 ],
			d = te[ 3 ], e = te[ 4 ], f = te[ 5 ],
			g = te[ 6 ], h = te[ 7 ], i = te[ 8 ];

		return a * e * i - a * f * h - b * d * i + b * f * g + c * d * h - c * e * g;

	}

	invert() {

		const te = this.elements,

			n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ],
			n12 = te[ 3 ], n22 = te[ 4 ], n32 = te[ 5 ],
			n13 = te[ 6 ], n23 = te[ 7 ], n33 = te[ 8 ],

			t11 = n33 * n22 - n32 * n23,
			t12 = n32 * n13 - n33 * n12,
			t13 = n23 * n12 - n22 * n13,

			det = n11 * t11 + n21 * t12 + n31 * t13;

		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0 );

		const detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n31 * n23 - n33 * n21 ) * detInv;
		te[ 2 ] = ( n32 * n21 - n31 * n22 ) * detInv;

		te[ 3 ] = t12 * detInv;
		te[ 4 ] = ( n33 * n11 - n31 * n13 ) * detInv;
		te[ 5 ] = ( n31 * n12 - n32 * n11 ) * detInv;

		te[ 6 ] = t13 * detInv;
		te[ 7 ] = ( n21 * n13 - n23 * n11 ) * detInv;
		te[ 8 ] = ( n22 * n11 - n21 * n12 ) * detInv;

		return this;

	}

	transpose() {

		let tmp;
		const m = this.elements;

		tmp = m[ 1 ]; m[ 1 ] = m[ 3 ]; m[ 3 ] = tmp;
		tmp = m[ 2 ]; m[ 2 ] = m[ 6 ]; m[ 6 ] = tmp;
		tmp = m[ 5 ]; m[ 5 ] = m[ 7 ]; m[ 7 ] = tmp;

		return this;

	}

	getNormalMatrix( matrix4 ) {

		return this.setFromMatrix4( matrix4 ).invert().transpose();

	}

	transposeIntoArray( r ) {

		const m = this.elements;

		r[ 0 ] = m[ 0 ];
		r[ 1 ] = m[ 3 ];
		r[ 2 ] = m[ 6 ];
		r[ 3 ] = m[ 1 ];
		r[ 4 ] = m[ 4 ];
		r[ 5 ] = m[ 7 ];
		r[ 6 ] = m[ 2 ];
		r[ 7 ] = m[ 5 ];
		r[ 8 ] = m[ 8 ];

		return this;

	}

	setUvTransform( tx, ty, sx, sy, rotation, cx, cy ) {

		const c = Math.cos( rotation );
		const s = Math.sin( rotation );

		this.set(
			sx * c, sx * s, - sx * ( c * cx + s * cy ) + cx + tx,
			- sy * s, sy * c, - sy * ( - s * cx + c * cy ) + cy + ty,
			0, 0, 1
		);

		return this;

	}

	//

	scale( sx, sy ) {

		this.premultiply( _m3.makeScale( sx, sy ) );

		return this;

	}

	rotate( theta ) {

		this.premultiply( _m3.makeRotation( - theta ) );

		return this;

	}

	translate( tx, ty ) {

		this.premultiply( _m3.makeTranslation( tx, ty ) );

		return this;

	}

	// for 2D Transforms

	makeTranslation( x, y ) {

		this.set(

			1, 0, x,
			0, 1, y,
			0, 0, 1

		);

		return this;

	}

	makeRotation( theta ) {

		// counterclockwise

		const c = Math.cos( theta );
		const s = Math.sin( theta );

		this.set(

			c, - s, 0,
			s, c, 0,
			0, 0, 1

		);

		return this;

	}

	makeScale( x, y ) {

		this.set(

			x, 0, 0,
			0, y, 0,
			0, 0, 1

		);

		return this;

	}

	//

	equals( matrix ) {

		const te = this.elements;
		const me = matrix.elements;

		for ( let i = 0; i < 9; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	}

	fromArray( array, offset = 0 ) {

		for ( let i = 0; i < 9; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	}

	toArray( array = [], offset = 0 ) {

		const te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];

		array[ offset + 3 ] = te[ 3 ];
		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];

		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];
		array[ offset + 8 ] = te[ 8 ];

		return array;

	}

	clone() {

		return new this.constructor().fromArray( this.elements );

	}

}

const _m3 = /*@__PURE__*/ new Matrix3();

function arrayNeedsUint32( array ) {

	// assumes larger values usually on last

	for ( let i = array.length - 1; i >= 0; -- i ) {

		if ( array[ i ] >= 65535 ) return true; // account for PRIMITIVE_RESTART_FIXED_INDEX, #24565

	}

	return false;

}

function createElementNS( name ) {

	return document.createElementNS( 'http://www.w3.org/1999/xhtml', name );

}

const _cache = {};

function warnOnce( message ) {

	if ( message in _cache ) return;

	_cache[ message ] = true;

	console.warn( message );

}

function SRGBToLinear( c ) {

	return ( c < 0.04045 ) ? c * 0.0773993808 : Math.pow( c * 0.9478672986 + 0.0521327014, 2.4 );

}

let _canvas;

class ImageUtils {

	static getDataURL( image ) {

		if ( /^data:/i.test( image.src ) ) {

			return image.src;

		}

		if ( typeof HTMLCanvasElement === 'undefined' ) {

			return image.src;

		}

		let canvas;

		if ( image instanceof HTMLCanvasElement ) {

			canvas = image;

		} else {

			if ( _canvas === undefined ) _canvas = createElementNS( 'canvas' );

			_canvas.width = image.width;
			_canvas.height = image.height;

			const context = _canvas.getContext( '2d' );

			if ( image instanceof ImageData ) {

				context.putImageData( image, 0, 0 );

			} else {

				context.drawImage( image, 0, 0, image.width, image.height );

			}

			canvas = _canvas;

		}

		if ( canvas.width > 2048 || canvas.height > 2048 ) {

			console.warn( 'THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons', image );

			return canvas.toDataURL( 'image/jpeg', 0.6 );

		} else {

			return canvas.toDataURL( 'image/png' );

		}

	}

	static sRGBToLinear( image ) {

		if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
			( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
			( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

			const canvas = createElementNS( 'canvas' );

			canvas.width = image.width;
			canvas.height = image.height;

			const context = canvas.getContext( '2d' );
			context.drawImage( image, 0, 0, image.width, image.height );

			const imageData = context.getImageData( 0, 0, image.width, image.height );
			const data = imageData.data;

			for ( let i = 0; i < data.length; i ++ ) {

				data[ i ] = SRGBToLinear( data[ i ] / 255 ) * 255;

			}

			context.putImageData( imageData, 0, 0 );

			return canvas;

		} else if ( image.data ) {

			const data = image.data.slice( 0 );

			for ( let i = 0; i < data.length; i ++ ) {

				if ( data instanceof Uint8Array || data instanceof Uint8ClampedArray ) {

					data[ i ] = Math.floor( SRGBToLinear( data[ i ] / 255 ) * 255 );

				} else {

					// assuming float

					data[ i ] = SRGBToLinear( data[ i ] );

				}

			}

			return {
				data: data,
				width: image.width,
				height: image.height
			};

		} else {

			console.warn( 'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.' );
			return image;

		}

	}

}

class Source {

	constructor( data = null ) {

		this.isSource = true;

		this.uuid = generateUUID();

		this.data = data;

		this.version = 0;

	}

	set needsUpdate( value ) {

		if ( value === true ) this.version ++;

	}

	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( ! isRootObject && meta.images[ this.uuid ] !== undefined ) {

			return meta.images[ this.uuid ];

		}

		const output = {
			uuid: this.uuid,
			url: ''
		};

		const data = this.data;

		if ( data !== null ) {

			let url;

			if ( Array.isArray( data ) ) {

				// cube texture

				url = [];

				for ( let i = 0, l = data.length; i < l; i ++ ) {

					if ( data[ i ].isDataTexture ) {

						url.push( serializeImage( data[ i ].image ) );

					} else {

						url.push( serializeImage( data[ i ] ) );

					}

				}

			} else {

				// texture

				url = serializeImage( data );

			}

			output.url = url;

		}

		if ( ! isRootObject ) {

			meta.images[ this.uuid ] = output;

		}

		return output;

	}

}

function serializeImage( image ) {

	if ( ( typeof HTMLImageElement !== 'undefined' && image instanceof HTMLImageElement ) ||
		( typeof HTMLCanvasElement !== 'undefined' && image instanceof HTMLCanvasElement ) ||
		( typeof ImageBitmap !== 'undefined' && image instanceof ImageBitmap ) ) {

		// default images

		return ImageUtils.getDataURL( image );

	} else {

		if ( image.data ) {

			// images of DataTexture

			return {
				data: Array.from( image.data ),
				width: image.width,
				height: image.height,
				type: image.data.constructor.name
			};

		} else {

			console.warn( 'THREE.Texture: Unable to serialize Texture.' );
			return {};

		}

	}

}

let textureId = 0;

class Texture extends EventDispatcher {

	constructor( image = Texture.DEFAULT_IMAGE, mapping = Texture.DEFAULT_MAPPING, wrapS = ClampToEdgeWrapping, wrapT = ClampToEdgeWrapping, magFilter = LinearFilter, minFilter = LinearMipmapLinearFilter, format = RGBAFormat, type = UnsignedByteType, anisotropy = Texture.DEFAULT_ANISOTROPY, colorSpace = NoColorSpace ) {

		super();

		this.isTexture = true;

		Object.defineProperty( this, 'id', { value: textureId ++ } );

		this.uuid = generateUUID();

		this.name = '';

		this.source = new Source( image );
		this.mipmaps = [];

		this.mapping = mapping;
		this.channel = 0;

		this.wrapS = wrapS;
		this.wrapT = wrapT;

		this.magFilter = magFilter;
		this.minFilter = minFilter;

		this.anisotropy = anisotropy;

		this.format = format;
		this.internalFormat = null;
		this.type = type;

		this.offset = new Vector2( 0, 0 );
		this.repeat = new Vector2( 1, 1 );
		this.center = new Vector2( 0, 0 );
		this.rotation = 0;

		this.matrixAutoUpdate = true;
		this.matrix = new Matrix3();

		this.generateMipmaps = true;
		this.premultiplyAlpha = false;
		this.flipY = true;
		this.unpackAlignment = 4;	// valid values: 1, 2, 4, 8 (see http://www.khronos.org/opengles/sdk/docs/man/xhtml/glPixelStorei.xml)

		if ( typeof colorSpace === 'string' ) {

			this.colorSpace = colorSpace;

		} else { // @deprecated, r152

			warnOnce( 'THREE.Texture: Property .encoding has been replaced by .colorSpace.' );
			this.colorSpace = colorSpace === sRGBEncoding ? SRGBColorSpace : NoColorSpace;

		}


		this.userData = {};

		this.version = 0;
		this.onUpdate = null;

		this.isRenderTargetTexture = false; // indicates whether a texture belongs to a render target or not
		this.needsPMREMUpdate = false; // indicates whether this texture should be processed by PMREMGenerator or not (only relevant for render target textures)

	}

	get image() {

		return this.source.data;

	}

	set image( value = null ) {

		this.source.data = value;

	}

	updateMatrix() {

		this.matrix.setUvTransform( this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y );

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( source ) {

		this.name = source.name;

		this.source = source.source;
		this.mipmaps = source.mipmaps.slice( 0 );

		this.mapping = source.mapping;
		this.channel = source.channel;

		this.wrapS = source.wrapS;
		this.wrapT = source.wrapT;

		this.magFilter = source.magFilter;
		this.minFilter = source.minFilter;

		this.anisotropy = source.anisotropy;

		this.format = source.format;
		this.internalFormat = source.internalFormat;
		this.type = source.type;

		this.offset.copy( source.offset );
		this.repeat.copy( source.repeat );
		this.center.copy( source.center );
		this.rotation = source.rotation;

		this.matrixAutoUpdate = source.matrixAutoUpdate;
		this.matrix.copy( source.matrix );

		this.generateMipmaps = source.generateMipmaps;
		this.premultiplyAlpha = source.premultiplyAlpha;
		this.flipY = source.flipY;
		this.unpackAlignment = source.unpackAlignment;
		this.colorSpace = source.colorSpace;

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		this.needsUpdate = true;

		return this;

	}

	toJSON( meta ) {

		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		if ( ! isRootObject && meta.textures[ this.uuid ] !== undefined ) {

			return meta.textures[ this.uuid ];

		}

		const output = {

			metadata: {
				version: 4.5,
				type: 'Texture',
				generator: 'Texture.toJSON'
			},

			uuid: this.uuid,
			name: this.name,

			image: this.source.toJSON( meta ).uuid,

			mapping: this.mapping,
			channel: this.channel,

			repeat: [ this.repeat.x, this.repeat.y ],
			offset: [ this.offset.x, this.offset.y ],
			center: [ this.center.x, this.center.y ],
			rotation: this.rotation,

			wrap: [ this.wrapS, this.wrapT ],

			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			colorSpace: this.colorSpace,

			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,

			flipY: this.flipY,

			generateMipmaps: this.generateMipmaps,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment

		};

		if ( Object.keys( this.userData ).length > 0 ) output.userData = this.userData;

		if ( ! isRootObject ) {

			meta.textures[ this.uuid ] = output;

		}

		return output;

	}

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

	transformUv( uv ) {

		if ( this.mapping !== UVMapping ) return uv;

		uv.applyMatrix3( this.matrix );

		if ( uv.x < 0 || uv.x > 1 ) {

			switch ( this.wrapS ) {

				case RepeatWrapping:

					uv.x = uv.x - Math.floor( uv.x );
					break;

				case ClampToEdgeWrapping:

					uv.x = uv.x < 0 ? 0 : 1;
					break;

				case MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.x ) % 2 ) === 1 ) {

						uv.x = Math.ceil( uv.x ) - uv.x;

					} else {

						uv.x = uv.x - Math.floor( uv.x );

					}

					break;

			}

		}

		if ( uv.y < 0 || uv.y > 1 ) {

			switch ( this.wrapT ) {

				case RepeatWrapping:

					uv.y = uv.y - Math.floor( uv.y );
					break;

				case ClampToEdgeWrapping:

					uv.y = uv.y < 0 ? 0 : 1;
					break;

				case MirroredRepeatWrapping:

					if ( Math.abs( Math.floor( uv.y ) % 2 ) === 1 ) {

						uv.y = Math.ceil( uv.y ) - uv.y;

					} else {

						uv.y = uv.y - Math.floor( uv.y );

					}

					break;

			}

		}

		if ( this.flipY ) {

			uv.y = 1 - uv.y;

		}

		return uv;

	}

	set needsUpdate( value ) {

		if ( value === true ) {

			this.version ++;
			this.source.needsUpdate = true;

		}

	}

	get encoding() { // @deprecated, r152

		warnOnce( 'THREE.Texture: Property .encoding has been replaced by .colorSpace.' );
		return this.colorSpace === SRGBColorSpace ? sRGBEncoding : LinearEncoding;

	}

	set encoding( encoding ) { // @deprecated, r152

		warnOnce( 'THREE.Texture: Property .encoding has been replaced by .colorSpace.' );
		this.colorSpace = encoding === sRGBEncoding ? SRGBColorSpace : NoColorSpace;

	}

}

Texture.DEFAULT_IMAGE = null;
Texture.DEFAULT_MAPPING = UVMapping;
Texture.DEFAULT_ANISOTROPY = 1;

class Quaternion {

	constructor( x = 0, y = 0, z = 0, w = 1 ) {

		this.isQuaternion = true;

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

	}

	static slerpFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t ) {

		// fuzz-free, array-based Quaternion SLERP operation

		let x0 = src0[ srcOffset0 + 0 ],
			y0 = src0[ srcOffset0 + 1 ],
			z0 = src0[ srcOffset0 + 2 ],
			w0 = src0[ srcOffset0 + 3 ];

		const x1 = src1[ srcOffset1 + 0 ],
			y1 = src1[ srcOffset1 + 1 ],
			z1 = src1[ srcOffset1 + 2 ],
			w1 = src1[ srcOffset1 + 3 ];

		if ( t === 0 ) {

			dst[ dstOffset + 0 ] = x0;
			dst[ dstOffset + 1 ] = y0;
			dst[ dstOffset + 2 ] = z0;
			dst[ dstOffset + 3 ] = w0;
			return;

		}

		if ( t === 1 ) {

			dst[ dstOffset + 0 ] = x1;
			dst[ dstOffset + 1 ] = y1;
			dst[ dstOffset + 2 ] = z1;
			dst[ dstOffset + 3 ] = w1;
			return;

		}

		if ( w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1 ) {

			let s = 1 - t;
			const cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,
				dir = ( cos >= 0 ? 1 : - 1 ),
				sqrSin = 1 - cos * cos;

			// Skip the Slerp for tiny steps to avoid numeric problems:
			if ( sqrSin > Number.EPSILON ) {

				const sin = Math.sqrt( sqrSin ),
					len = Math.atan2( sin, cos * dir );

				s = Math.sin( s * len ) / sin;
				t = Math.sin( t * len ) / sin;

			}

			const tDir = t * dir;

			x0 = x0 * s + x1 * tDir;
			y0 = y0 * s + y1 * tDir;
			z0 = z0 * s + z1 * tDir;
			w0 = w0 * s + w1 * tDir;

			// Normalize in case we just did a lerp:
			if ( s === 1 - t ) {

				const f = 1 / Math.sqrt( x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0 );

				x0 *= f;
				y0 *= f;
				z0 *= f;
				w0 *= f;

			}

		}

		dst[ dstOffset ] = x0;
		dst[ dstOffset + 1 ] = y0;
		dst[ dstOffset + 2 ] = z0;
		dst[ dstOffset + 3 ] = w0;

	}

	static multiplyQuaternionsFlat( dst, dstOffset, src0, srcOffset0, src1, srcOffset1 ) {

		const x0 = src0[ srcOffset0 ];
		const y0 = src0[ srcOffset0 + 1 ];
		const z0 = src0[ srcOffset0 + 2 ];
		const w0 = src0[ srcOffset0 + 3 ];

		const x1 = src1[ srcOffset1 ];
		const y1 = src1[ srcOffset1 + 1 ];
		const z1 = src1[ srcOffset1 + 2 ];
		const w1 = src1[ srcOffset1 + 3 ];

		dst[ dstOffset ] = x0 * w1 + w0 * x1 + y0 * z1 - z0 * y1;
		dst[ dstOffset + 1 ] = y0 * w1 + w0 * y1 + z0 * x1 - x0 * z1;
		dst[ dstOffset + 2 ] = z0 * w1 + w0 * z1 + x0 * y1 - y0 * x1;
		dst[ dstOffset + 3 ] = w0 * w1 - x0 * x1 - y0 * y1 - z0 * z1;

		return dst;

	}

	get x() {

		return this._x;

	}

	set x( value ) {

		this._x = value;
		this._onChangeCallback();

	}

	get y() {

		return this._y;

	}

	set y( value ) {

		this._y = value;
		this._onChangeCallback();

	}

	get z() {

		return this._z;

	}

	set z( value ) {

		this._z = value;
		this._onChangeCallback();

	}

	get w() {

		return this._w;

	}

	set w( value ) {

		this._w = value;
		this._onChangeCallback();

	}

	set( x, y, z, w ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

		this._onChangeCallback();

		return this;

	}

	clone() {

		return new this.constructor( this._x, this._y, this._z, this._w );

	}

	copy( quaternion ) {

		this._x = quaternion.x;
		this._y = quaternion.y;
		this._z = quaternion.z;
		this._w = quaternion.w;

		this._onChangeCallback();

		return this;

	}

	setFromEuler( euler, update ) {

		const x = euler._x, y = euler._y, z = euler._z, order = euler._order;

		// http://www.mathworks.com/matlabcentral/fileexchange/
		// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
		//	content/SpinCalc.m

		const cos = Math.cos;
		const sin = Math.sin;

		const c1 = cos( x / 2 );
		const c2 = cos( y / 2 );
		const c3 = cos( z / 2 );

		const s1 = sin( x / 2 );
		const s2 = sin( y / 2 );
		const s3 = sin( z / 2 );

		switch ( order ) {

			case 'XYZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'YXZ':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'ZXY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'ZYX':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			case 'YZX':
				this._x = s1 * c2 * c3 + c1 * s2 * s3;
				this._y = c1 * s2 * c3 + s1 * c2 * s3;
				this._z = c1 * c2 * s3 - s1 * s2 * c3;
				this._w = c1 * c2 * c3 - s1 * s2 * s3;
				break;

			case 'XZY':
				this._x = s1 * c2 * c3 - c1 * s2 * s3;
				this._y = c1 * s2 * c3 - s1 * c2 * s3;
				this._z = c1 * c2 * s3 + s1 * s2 * c3;
				this._w = c1 * c2 * c3 + s1 * s2 * s3;
				break;

			default:
				console.warn( 'THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + order );

		}

		if ( update !== false ) this._onChangeCallback();

		return this;

	}

	setFromAxisAngle( axis, angle ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

		// assumes axis is normalized

		const halfAngle = angle / 2, s = Math.sin( halfAngle );

		this._x = axis.x * s;
		this._y = axis.y * s;
		this._z = axis.z * s;
		this._w = Math.cos( halfAngle );

		this._onChangeCallback();

		return this;

	}

	setFromRotationMatrix( m ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		const te = m.elements,

			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

			trace = m11 + m22 + m33;

		if ( trace > 0 ) {

			const s = 0.5 / Math.sqrt( trace + 1.0 );

			this._w = 0.25 / s;
			this._x = ( m32 - m23 ) * s;
			this._y = ( m13 - m31 ) * s;
			this._z = ( m21 - m12 ) * s;

		} else if ( m11 > m22 && m11 > m33 ) {

			const s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

			this._w = ( m32 - m23 ) / s;
			this._x = 0.25 * s;
			this._y = ( m12 + m21 ) / s;
			this._z = ( m13 + m31 ) / s;

		} else if ( m22 > m33 ) {

			const s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

			this._w = ( m13 - m31 ) / s;
			this._x = ( m12 + m21 ) / s;
			this._y = 0.25 * s;
			this._z = ( m23 + m32 ) / s;

		} else {

			const s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

			this._w = ( m21 - m12 ) / s;
			this._x = ( m13 + m31 ) / s;
			this._y = ( m23 + m32 ) / s;
			this._z = 0.25 * s;

		}

		this._onChangeCallback();

		return this;

	}

	setFromUnitVectors( vFrom, vTo ) {

		// assumes direction vectors vFrom and vTo are normalized

		let r = vFrom.dot( vTo ) + 1;

		if ( r < Number.EPSILON ) {

			// vFrom and vTo point in opposite directions

			r = 0;

			if ( Math.abs( vFrom.x ) > Math.abs( vFrom.z ) ) {

				this._x = - vFrom.y;
				this._y = vFrom.x;
				this._z = 0;
				this._w = r;

			} else {

				this._x = 0;
				this._y = - vFrom.z;
				this._z = vFrom.y;
				this._w = r;

			}

		} else {

			// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3

			this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
			this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
			this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
			this._w = r;

		}

		return this.normalize();

	}

	angleTo( q ) {

		return 2 * Math.acos( Math.abs( clamp( this.dot( q ), - 1, 1 ) ) );

	}

	rotateTowards( q, step ) {

		const angle = this.angleTo( q );

		if ( angle === 0 ) return this;

		const t = Math.min( 1, step / angle );

		this.slerp( q, t );

		return this;

	}

	identity() {

		return this.set( 0, 0, 0, 1 );

	}

	invert() {

		// quaternion is assumed to have unit length

		return this.conjugate();

	}

	conjugate() {

		this._x *= - 1;
		this._y *= - 1;
		this._z *= - 1;

		this._onChangeCallback();

		return this;

	}

	dot( v ) {

		return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

	}

	lengthSq() {

		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;

	}

	length() {

		return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

	}

	normalize() {

		let l = this.length();

		if ( l === 0 ) {

			this._x = 0;
			this._y = 0;
			this._z = 0;
			this._w = 1;

		} else {

			l = 1 / l;

			this._x = this._x * l;
			this._y = this._y * l;
			this._z = this._z * l;
			this._w = this._w * l;

		}

		this._onChangeCallback();

		return this;

	}

	multiply( q ) {

		return this.multiplyQuaternions( this, q );

	}

	premultiply( q ) {

		return this.multiplyQuaternions( q, this );

	}

	multiplyQuaternions( a, b ) {

		// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

		const qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
		const qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

		this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
		this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
		this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
		this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

		this._onChangeCallback();

		return this;

	}

	slerp( qb, t ) {

		if ( t === 0 ) return this;
		if ( t === 1 ) return this.copy( qb );

		const x = this._x, y = this._y, z = this._z, w = this._w;

		// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

		let cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

		if ( cosHalfTheta < 0 ) {

			this._w = - qb._w;
			this._x = - qb._x;
			this._y = - qb._y;
			this._z = - qb._z;

			cosHalfTheta = - cosHalfTheta;

		} else {

			this.copy( qb );

		}

		if ( cosHalfTheta >= 1.0 ) {

			this._w = w;
			this._x = x;
			this._y = y;
			this._z = z;

			return this;

		}

		const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

		if ( sqrSinHalfTheta <= Number.EPSILON ) {

			const s = 1 - t;
			this._w = s * w + t * this._w;
			this._x = s * x + t * this._x;
			this._y = s * y + t * this._y;
			this._z = s * z + t * this._z;

			this.normalize();
			this._onChangeCallback();

			return this;

		}

		const sinHalfTheta = Math.sqrt( sqrSinHalfTheta );
		const halfTheta = Math.atan2( sinHalfTheta, cosHalfTheta );
		const ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
			ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

		this._w = ( w * ratioA + this._w * ratioB );
		this._x = ( x * ratioA + this._x * ratioB );
		this._y = ( y * ratioA + this._y * ratioB );
		this._z = ( z * ratioA + this._z * ratioB );

		this._onChangeCallback();

		return this;

	}

	slerpQuaternions( qa, qb, t ) {

		return this.copy( qa ).slerp( qb, t );

	}

	random() {

		// Derived from http://planning.cs.uiuc.edu/node198.html
		// Note, this source uses w, x, y, z ordering,
		// so we swap the order below.

		const u1 = Math.random();
		const sqrt1u1 = Math.sqrt( 1 - u1 );
		const sqrtu1 = Math.sqrt( u1 );

		const u2 = 2 * Math.PI * Math.random();

		const u3 = 2 * Math.PI * Math.random();

		return this.set(
			sqrt1u1 * Math.cos( u2 ),
			sqrtu1 * Math.sin( u3 ),
			sqrtu1 * Math.cos( u3 ),
			sqrt1u1 * Math.sin( u2 ),
		);

	}

	equals( quaternion ) {

		return ( quaternion._x === this._x ) && ( quaternion._y === this._y ) && ( quaternion._z === this._z ) && ( quaternion._w === this._w );

	}

	fromArray( array, offset = 0 ) {

		this._x = array[ offset ];
		this._y = array[ offset + 1 ];
		this._z = array[ offset + 2 ];
		this._w = array[ offset + 3 ];

		this._onChangeCallback();

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._w;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this._x = attribute.getX( index );
		this._y = attribute.getY( index );
		this._z = attribute.getZ( index );
		this._w = attribute.getW( index );

		return this;

	}

	toJSON() {

		return this.toArray();

	}

	_onChange( callback ) {

		this._onChangeCallback = callback;

		return this;

	}

	_onChangeCallback() {}

	*[ Symbol.iterator ]() {

		yield this._x;
		yield this._y;
		yield this._z;
		yield this._w;

	}

}

class Vector3 {

	constructor( x = 0, y = 0, z = 0 ) {

		Vector3.prototype.isVector3 = true;

		this.x = x;
		this.y = y;
		this.z = z;

	}

	set( x, y, z ) {

		if ( z === undefined ) z = this.z; // sprite.scale.set(x,y)

		this.x = x;
		this.y = y;
		this.z = z;

		return this;

	}

	setScalar( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;

		return this;

	}

	setX( x ) {

		this.x = x;

		return this;

	}

	setY( y ) {

		this.y = y;

		return this;

	}

	setZ( z ) {

		this.z = z;

		return this;

	}

	setComponent( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	}

	getComponent( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw new Error( 'index is out of range: ' + index );

		}

	}

	clone() {

		return new this.constructor( this.x, this.y, this.z );

	}

	copy( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;

		return this;

	}

	add( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;

		return this;

	}

	addScalar( s ) {

		this.x += s;
		this.y += s;
		this.z += s;

		return this;

	}

	addVectors( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;

		return this;

	}

	addScaledVector( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;

		return this;

	}

	sub( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;

		return this;

	}

	subScalar( s ) {

		this.x -= s;
		this.y -= s;
		this.z -= s;

		return this;

	}

	subVectors( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;

		return this;

	}

	multiply( v ) {

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;

		return this;

	}

	multiplyScalar( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;

		return this;

	}

	multiplyVectors( a, b ) {

		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;

		return this;

	}

	applyEuler( euler ) {

		return this.applyQuaternion( _quaternion$4.setFromEuler( euler ) );

	}

	applyAxisAngle( axis, angle ) {

		return this.applyQuaternion( _quaternion$4.setFromAxisAngle( axis, angle ) );

	}

	applyMatrix3( m ) {

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
		this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

		return this;

	}

	applyNormalMatrix( m ) {

		return this.applyMatrix3( m ).normalize();

	}

	applyMatrix4( m ) {

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		const w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );

		this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] ) * w;
		this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] ) * w;
		this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;

		return this;

	}

	applyQuaternion( q ) {

		const x = this.x, y = this.y, z = this.z;
		const qx = q.x, qy = q.y, qz = q.z, qw = q.w;

		// calculate quat * vector

		const ix = qw * x + qy * z - qz * y;
		const iy = qw * y + qz * x - qx * z;
		const iz = qw * z + qx * y - qy * x;
		const iw = - qx * x - qy * y - qz * z;

		// calculate result * inverse quat

		this.x = ix * qw + iw * - qx + iy * - qz - iz * - qy;
		this.y = iy * qw + iw * - qy + iz * - qx - ix * - qz;
		this.z = iz * qw + iw * - qz + ix * - qy - iy * - qx;

		return this;

	}

	project( camera ) {

		return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );

	}

	unproject( camera ) {

		return this.applyMatrix4( camera.projectionMatrixInverse ).applyMatrix4( camera.matrixWorld );

	}

	transformDirection( m ) {

		// input: THREE.Matrix4 affine matrix
		// vector interpreted as a direction

		const x = this.x, y = this.y, z = this.z;
		const e = m.elements;

		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z;
		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z;
		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

		return this.normalize();

	}

	divide( v ) {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;

		return this;

	}

	divideScalar( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	}

	min( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );
		this.z = Math.min( this.z, v.z );

		return this;

	}

	max( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );
		this.z = Math.max( this.z, v.z );

		return this;

	}

	clamp( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );
		this.z = Math.max( min.z, Math.min( max.z, this.z ) );

		return this;

	}

	clampScalar( minVal, maxVal ) {

		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );
		this.z = Math.max( minVal, Math.min( maxVal, this.z ) );

		return this;

	}

	clampLength( min, max ) {

		const length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	}

	floor() {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		this.z = Math.floor( this.z );

		return this;

	}

	ceil() {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		this.z = Math.ceil( this.z );

		return this;

	}

	round() {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		this.z = Math.round( this.z );

		return this;

	}

	roundToZero() {

		this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
		this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );
		this.z = ( this.z < 0 ) ? Math.ceil( this.z ) : Math.floor( this.z );

		return this;

	}

	negate() {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;

		return this;

	}

	dot( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z;

	}

	// TODO lengthSquared?

	lengthSq() {

		return this.x * this.x + this.y * this.y + this.z * this.z;

	}

	length() {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

	}

	manhattanLength() {

		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

	}

	normalize() {

		return this.divideScalar( this.length() || 1 );

	}

	setLength( length ) {

		return this.normalize().multiplyScalar( length );

	}

	lerp( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;

		return this;

	}

	lerpVectors( v1, v2, alpha ) {

		this.x = v1.x + ( v2.x - v1.x ) * alpha;
		this.y = v1.y + ( v2.y - v1.y ) * alpha;
		this.z = v1.z + ( v2.z - v1.z ) * alpha;

		return this;

	}

	cross( v ) {

		return this.crossVectors( this, v );

	}

	crossVectors( a, b ) {

		const ax = a.x, ay = a.y, az = a.z;
		const bx = b.x, by = b.y, bz = b.z;

		this.x = ay * bz - az * by;
		this.y = az * bx - ax * bz;
		this.z = ax * by - ay * bx;

		return this;

	}

	projectOnVector( v ) {

		const denominator = v.lengthSq();

		if ( denominator === 0 ) return this.set( 0, 0, 0 );

		const scalar = v.dot( this ) / denominator;

		return this.copy( v ).multiplyScalar( scalar );

	}

	projectOnPlane( planeNormal ) {

		_vector$b.copy( this ).projectOnVector( planeNormal );

		return this.sub( _vector$b );

	}

	reflect( normal ) {

		// reflect incident vector off plane orthogonal to normal
		// normal is assumed to have unit length

		return this.sub( _vector$b.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

	}

	angleTo( v ) {

		const denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		const theta = this.dot( v ) / denominator;

		// clamp, to handle numerical problems

		return Math.acos( clamp( theta, - 1, 1 ) );

	}

	distanceTo( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	}

	distanceToSquared( v ) {

		const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;

		return dx * dx + dy * dy + dz * dz;

	}

	manhattanDistanceTo( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y ) + Math.abs( this.z - v.z );

	}

	setFromSpherical( s ) {

		return this.setFromSphericalCoords( s.radius, s.phi, s.theta );

	}

	setFromSphericalCoords( radius, phi, theta ) {

		const sinPhiRadius = Math.sin( phi ) * radius;

		this.x = sinPhiRadius * Math.sin( theta );
		this.y = Math.cos( phi ) * radius;
		this.z = sinPhiRadius * Math.cos( theta );

		return this;

	}

	setFromCylindrical( c ) {

		return this.setFromCylindricalCoords( c.radius, c.theta, c.y );

	}

	setFromCylindricalCoords( radius, theta, y ) {

		this.x = radius * Math.sin( theta );
		this.y = y;
		this.z = radius * Math.cos( theta );

		return this;

	}

	setFromMatrixPosition( m ) {

		const e = m.elements;

		this.x = e[ 12 ];
		this.y = e[ 13 ];
		this.z = e[ 14 ];

		return this;

	}

	setFromMatrixScale( m ) {

		const sx = this.setFromMatrixColumn( m, 0 ).length();
		const sy = this.setFromMatrixColumn( m, 1 ).length();
		const sz = this.setFromMatrixColumn( m, 2 ).length();

		this.x = sx;
		this.y = sy;
		this.z = sz;

		return this;

	}

	setFromMatrixColumn( m, index ) {

		return this.fromArray( m.elements, index * 4 );

	}

	setFromMatrix3Column( m, index ) {

		return this.fromArray( m.elements, index * 3 );

	}

	setFromEuler( e ) {

		this.x = e._x;
		this.y = e._y;
		this.z = e._z;

		return this;

	}

	setFromColor( c ) {

		this.x = c.r;
		this.y = c.g;
		this.z = c.b;

		return this;

	}

	equals( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) );

	}

	fromArray( array, offset = 0 ) {

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];
		this.z = array[ offset + 2 ];

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;
		array[ offset + 2 ] = this.z;

		return array;

	}

	fromBufferAttribute( attribute, index ) {

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );
		this.z = attribute.getZ( index );

		return this;

	}

	random() {

		this.x = Math.random();
		this.y = Math.random();
		this.z = Math.random();

		return this;

	}

	randomDirection() {

		// Derived from https://mathworld.wolfram.com/SpherePointPicking.html

		const u = ( Math.random() - 0.5 ) * 2;
		const t = Math.random() * Math.PI * 2;
		const f = Math.sqrt( 1 - u ** 2 );

		this.x = f * Math.cos( t );
		this.y = f * Math.sin( t );
		this.z = u;

		return this;

	}

	*[ Symbol.iterator ]() {

		yield this.x;
		yield this.y;
		yield this.z;

	}

}

const _vector$b = /*@__PURE__*/ new Vector3();
const _quaternion$4 = /*@__PURE__*/ new Quaternion();

class Box3 {

	constructor( min = new Vector3( + Infinity, + Infinity, + Infinity ), max = new Vector3( - Infinity, - Infinity, - Infinity ) ) {

		this.isBox3 = true;

		this.min = min;
		this.max = max;

	}

	set( min, max ) {

		this.min.copy( min );
		this.max.copy( max );

		return this;

	}

	setFromArray( array ) {

		this.makeEmpty();

		for ( let i = 0, il = array.length; i < il; i += 3 ) {

			this.expandByPoint( _vector$a.fromArray( array, i ) );

		}

		return this;

	}

	setFromBufferAttribute( attribute ) {

		this.makeEmpty();

		for ( let i = 0, il = attribute.count; i < il; i ++ ) {

			this.expandByPoint( _vector$a.fromBufferAttribute( attribute, i ) );

		}

		return this;

	}

	setFromPoints( points ) {

		this.makeEmpty();

		for ( let i = 0, il = points.length; i < il; i ++ ) {

			this.expandByPoint( points[ i ] );

		}

		return this;

	}

	setFromCenterAndSize( center, size ) {

		const halfSize = _vector$a.copy( size ).multiplyScalar( 0.5 );

		this.min.copy( center ).sub( halfSize );
		this.max.copy( center ).add( halfSize );

		return this;

	}

	setFromObject( object, precise = false ) {

		this.makeEmpty();

		return this.expandByObject( object, precise );

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( box ) {

		this.min.copy( box.min );
		this.max.copy( box.max );

		return this;

	}

	makeEmpty() {

		this.min.x = this.min.y = this.min.z = + Infinity;
		this.max.x = this.max.y = this.max.z = - Infinity;

		return this;

	}

	isEmpty() {

		// this is a more robust check for empty than ( volume <= 0 ) because volume can get positive with two negative axes

		return ( this.max.x < this.min.x ) || ( this.max.y < this.min.y ) || ( this.max.z < this.min.z );

	}

	getCenter( target ) {

		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.addVectors( this.min, this.max ).multiplyScalar( 0.5 );

	}

	getSize( target ) {

		return this.isEmpty() ? target.set( 0, 0, 0 ) : target.subVectors( this.max, this.min );

	}

	expandByPoint( point ) {

		this.min.min( point );
		this.max.max( point );

		return this;

	}

	expandByVector( vector ) {

		this.min.sub( vector );
		this.max.add( vector );

		return this;

	}

	expandByScalar( scalar ) {

		this.min.addScalar( - scalar );
		this.max.addScalar( scalar );

		return this;

	}

	expandByObject( object, precise = false ) {

		// Computes the world-axis-aligned bounding box of an object (including its children),
		// accounting for both the object's, and children's, world transforms

		object.updateWorldMatrix( false, false );

		if ( object.boundingBox !== undefined ) {

			if ( object.boundingBox === null ) {

				object.computeBoundingBox();

			}

			_box$3.copy( object.boundingBox );
			_box$3.applyMatrix4( object.matrixWorld );

			this.union( _box$3 );

		} else {

			const geometry = object.geometry;

			if ( geometry !== undefined ) {

				if ( precise && geometry.attributes !== undefined && geometry.attributes.position !== undefined ) {

					const position = geometry.attributes.position;
					for ( let i = 0, l = position.count; i < l; i ++ ) {

						_vector$a.fromBufferAttribute( position, i ).applyMatrix4( object.matrixWorld );
						this.expandByPoint( _vector$a );

					}

				} else {

					if ( geometry.boundingBox === null ) {

						geometry.computeBoundingBox();

					}

					_box$3.copy( geometry.boundingBox );
					_box$3.applyMatrix4( object.matrixWorld );

					this.union( _box$3 );

				}

			}

		}

		const children = object.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			this.expandByObject( children[ i ], precise );

		}

		return this;

	}

	containsPoint( point ) {

		return point.x < this.min.x || point.x > this.max.x ||
			point.y < this.min.y || point.y > this.max.y ||
			point.z < this.min.z || point.z > this.max.z ? false : true;

	}

	containsBox( box ) {

		return this.min.x <= box.min.x && box.max.x <= this.max.x &&
			this.min.y <= box.min.y && box.max.y <= this.max.y &&
			this.min.z <= box.min.z && box.max.z <= this.max.z;

	}

	getParameter( point, target ) {

		// This can potentially have a divide by zero if the box
		// has a size dimension of 0.

		return target.set(
			( point.x - this.min.x ) / ( this.max.x - this.min.x ),
			( point.y - this.min.y ) / ( this.max.y - this.min.y ),
			( point.z - this.min.z ) / ( this.max.z - this.min.z )
		);

	}

	intersectsBox( box ) {

		// using 6 splitting planes to rule out intersections.
		return box.max.x < this.min.x || box.min.x > this.max.x ||
			box.max.y < this.min.y || box.min.y > this.max.y ||
			box.max.z < this.min.z || box.min.z > this.max.z ? false : true;

	}

	intersectsSphere( sphere ) {

		// Find the point on the AABB closest to the sphere center.
		this.clampPoint( sphere.center, _vector$a );

		// If that point is inside the sphere, the AABB and sphere intersect.
		return _vector$a.distanceToSquared( sphere.center ) <= ( sphere.radius * sphere.radius );

	}

	intersectsPlane( plane ) {

		// We compute the minimum and maximum dot product values. If those values
		// are on the same side (back or front) of the plane, then there is no intersection.

		let min, max;

		if ( plane.normal.x > 0 ) {

			min = plane.normal.x * this.min.x;
			max = plane.normal.x * this.max.x;

		} else {

			min = plane.normal.x * this.max.x;
			max = plane.normal.x * this.min.x;

		}

		if ( plane.normal.y > 0 ) {

			min += plane.normal.y * this.min.y;
			max += plane.normal.y * this.max.y;

		} else {

			min += plane.normal.y * this.max.y;
			max += plane.normal.y * this.min.y;

		}

		if ( plane.normal.z > 0 ) {

			min += plane.normal.z * this.min.z;
			max += plane.normal.z * this.max.z;

		} else {

			min += plane.normal.z * this.max.z;
			max += plane.normal.z * this.min.z;

		}

		return ( min <= - plane.constant && max >= - plane.constant );

	}

	intersectsTriangle( triangle ) {

		if ( this.isEmpty() ) {

			return false;

		}

		// compute box center and extents
		this.getCenter( _center );
		_extents.subVectors( this.max, _center );

		// translate triangle to aabb origin
		_v0$2.subVectors( triangle.a, _center );
		_v1$7.subVectors( triangle.b, _center );
		_v2$4.subVectors( triangle.c, _center );

		// compute edge vectors for triangle
		_f0.subVectors( _v1$7, _v0$2 );
		_f1.subVectors( _v2$4, _v1$7 );
		_f2.subVectors( _v0$2, _v2$4 );

		// test against axes that are given by cross product combinations of the edges of the triangle and the edges of the aabb
		// make an axis testing of each of the 3 sides of the aabb against each of the 3 sides of the triangle = 9 axis of separation
		// axis_ij = u_i x f_j (u0, u1, u2 = face normals of aabb = x,y,z axes vectors since aabb is axis aligned)
		let axes = [
			0, - _f0.z, _f0.y, 0, - _f1.z, _f1.y, 0, - _f2.z, _f2.y,
			_f0.z, 0, - _f0.x, _f1.z, 0, - _f1.x, _f2.z, 0, - _f2.x,
			- _f0.y, _f0.x, 0, - _f1.y, _f1.x, 0, - _f2.y, _f2.x, 0
		];
		if ( ! satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents ) ) {

			return false;

		}

		// test 3 face normals from the aabb
		axes = [ 1, 0, 0, 0, 1, 0, 0, 0, 1 ];
		if ( ! satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents ) ) {

			return false;

		}

		// finally testing the face normal of the triangle
		// use already existing triangle edge vectors here
		_triangleNormal.crossVectors( _f0, _f1 );
		axes = [ _triangleNormal.x, _triangleNormal.y, _triangleNormal.z ];

		return satForAxes( axes, _v0$2, _v1$7, _v2$4, _extents );

	}

	clampPoint( point, target ) {

		return target.copy( point ).clamp( this.min, this.max );

	}

	distanceToPoint( point ) {

		return this.clampPoint( point, _vector$a ).distanceTo( point );

	}

	getBoundingSphere( target ) {

		if ( this.isEmpty() ) {

			target.makeEmpty();

		} else {

			this.getCenter( target.center );

			target.radius = this.getSize( _vector$a ).length() * 0.5;

		}

		return target;

	}

	intersect( box ) {

		this.min.max( box.min );
		this.max.min( box.max );

		// ensure that if there is no overlap, the result is fully empty, not slightly empty with non-inf/+inf values that will cause subsequence intersects to erroneously return valid values.
		if ( this.isEmpty() ) this.makeEmpty();

		return this;

	}

	union( box ) {

		this.min.min( box.min );
		this.max.max( box.max );

		return this;

	}

	applyMatrix4( matrix ) {

		// transform of empty box is an empty box.
		if ( this.isEmpty() ) return this;

		// NOTE: I am using a binary pattern to specify all 2^3 combinations below
		_points[ 0 ].set( this.min.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 000
		_points[ 1 ].set( this.min.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 001
		_points[ 2 ].set( this.min.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 010
		_points[ 3 ].set( this.min.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 011
		_points[ 4 ].set( this.max.x, this.min.y, this.min.z ).applyMatrix4( matrix ); // 100
		_points[ 5 ].set( this.max.x, this.min.y, this.max.z ).applyMatrix4( matrix ); // 101
		_points[ 6 ].set( this.max.x, this.max.y, this.min.z ).applyMatrix4( matrix ); // 110
		_points[ 7 ].set( this.max.x, this.max.y, this.max.z ).applyMatrix4( matrix ); // 111

		this.setFromPoints( _points );

		return this;

	}

	translate( offset ) {

		this.min.add( offset );
		this.max.add( offset );

		return this;

	}

	equals( box ) {

		return box.min.equals( this.min ) && box.max.equals( this.max );

	}

}

const _points = [
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3()
];

const _vector$a = /*@__PURE__*/ new Vector3();

const _box$3 = /*@__PURE__*/ new Box3();

// triangle centered vertices

const _v0$2 = /*@__PURE__*/ new Vector3();
const _v1$7 = /*@__PURE__*/ new Vector3();
const _v2$4 = /*@__PURE__*/ new Vector3();

// triangle edge vectors

const _f0 = /*@__PURE__*/ new Vector3();
const _f1 = /*@__PURE__*/ new Vector3();
const _f2 = /*@__PURE__*/ new Vector3();

const _center = /*@__PURE__*/ new Vector3();
const _extents = /*@__PURE__*/ new Vector3();
const _triangleNormal = /*@__PURE__*/ new Vector3();
const _testAxis = /*@__PURE__*/ new Vector3();

function satForAxes( axes, v0, v1, v2, extents ) {

	for ( let i = 0, j = axes.length - 3; i <= j; i += 3 ) {

		_testAxis.fromArray( axes, i );
		// project the aabb onto the separating axis
		const r = extents.x * Math.abs( _testAxis.x ) + extents.y * Math.abs( _testAxis.y ) + extents.z * Math.abs( _testAxis.z );
		// project all 3 vertices of the triangle onto the separating axis
		const p0 = v0.dot( _testAxis );
		const p1 = v1.dot( _testAxis );
		const p2 = v2.dot( _testAxis );
		// actual test, basically see if either of the most extreme of the triangle points intersects r
		if ( Math.max( - Math.max( p0, p1, p2 ), Math.min( p0, p1, p2 ) ) > r ) {

			// points of the projected triangle are outside the projected half-length of the aabb
			// the axis is separating and we can exit
			return false;

		}

	}

	return true;

}

const _box$2 = /*@__PURE__*/ new Box3();
const _v1$6 = /*@__PURE__*/ new Vector3();
const _v2$3 = /*@__PURE__*/ new Vector3();

class Sphere {

	constructor( center = new Vector3(), radius = - 1 ) {

		this.center = center;
		this.radius = radius;

	}

	set( center, radius ) {

		this.center.copy( center );
		this.radius = radius;

		return this;

	}

	setFromPoints( points, optionalCenter ) {

		const center = this.center;

		if ( optionalCenter !== undefined ) {

			center.copy( optionalCenter );

		} else {

			_box$2.setFromPoints( points ).getCenter( center );

		}

		let maxRadiusSq = 0;

		for ( let i = 0, il = points.length; i < il; i ++ ) {

			maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( points[ i ] ) );

		}

		this.radius = Math.sqrt( maxRadiusSq );

		return this;

	}

	copy( sphere ) {

		this.center.copy( sphere.center );
		this.radius = sphere.radius;

		return this;

	}

	isEmpty() {

		return ( this.radius < 0 );

	}

	makeEmpty() {

		this.center.set( 0, 0, 0 );
		this.radius = - 1;

		return this;

	}

	containsPoint( point ) {

		return ( point.distanceToSquared( this.center ) <= ( this.radius * this.radius ) );

	}

	distanceToPoint( point ) {

		return ( point.distanceTo( this.center ) - this.radius );

	}

	intersectsSphere( sphere ) {

		const radiusSum = this.radius + sphere.radius;

		return sphere.center.distanceToSquared( this.center ) <= ( radiusSum * radiusSum );

	}

	intersectsBox( box ) {

		return box.intersectsSphere( this );

	}

	intersectsPlane( plane ) {

		return Math.abs( plane.distanceToPoint( this.center ) ) <= this.radius;

	}

	clampPoint( point, target ) {

		const deltaLengthSq = this.center.distanceToSquared( point );

		target.copy( point );

		if ( deltaLengthSq > ( this.radius * this.radius ) ) {

			target.sub( this.center ).normalize();
			target.multiplyScalar( this.radius ).add( this.center );

		}

		return target;

	}

	getBoundingBox( target ) {

		if ( this.isEmpty() ) {

			// Empty sphere produces empty bounding box
			target.makeEmpty();
			return target;

		}

		target.set( this.center, this.center );
		target.expandByScalar( this.radius );

		return target;

	}

	applyMatrix4( matrix ) {

		this.center.applyMatrix4( matrix );
		this.radius = this.radius * matrix.getMaxScaleOnAxis();

		return this;

	}

	translate( offset ) {

		this.center.add( offset );

		return this;

	}

	expandByPoint( point ) {

		if ( this.isEmpty() ) {

			this.center.copy( point );

			this.radius = 0;

			return this;

		}

		_v1$6.subVectors( point, this.center );

		const lengthSq = _v1$6.lengthSq();

		if ( lengthSq > ( this.radius * this.radius ) ) {

			// calculate the minimal sphere

			const length = Math.sqrt( lengthSq );

			const delta = ( length - this.radius ) * 0.5;

			this.center.addScaledVector( _v1$6, delta / length );

			this.radius += delta;

		}

		return this;

	}

	union( sphere ) {

		if ( sphere.isEmpty() ) {

			return this;

		}

		if ( this.isEmpty() ) {

			this.copy( sphere );

			return this;

		}

		if ( this.center.equals( sphere.center ) === true ) {

			 this.radius = Math.max( this.radius, sphere.radius );

		} else {

			_v2$3.subVectors( sphere.center, this.center ).setLength( sphere.radius );

			this.expandByPoint( _v1$6.copy( sphere.center ).add( _v2$3 ) );

			this.expandByPoint( _v1$6.copy( sphere.center ).sub( _v2$3 ) );

		}

		return this;

	}

	equals( sphere ) {

		return sphere.center.equals( this.center ) && ( sphere.radius === this.radius );

	}

	clone() {

		return new this.constructor().copy( this );

	}

}

class Matrix4 {

	constructor() {

		Matrix4.prototype.isMatrix4 = true;

		this.elements = [

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		];

	}

	set( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

		const te = this.elements;

		te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
		te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
		te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
		te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

		return this;

	}

	identity() {

		this.set(

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	clone() {

		return new Matrix4().fromArray( this.elements );

	}

	copy( m ) {

		const te = this.elements;
		const me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ]; te[ 3 ] = me[ 3 ];
		te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ]; te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ];
		te[ 8 ] = me[ 8 ]; te[ 9 ] = me[ 9 ]; te[ 10 ] = me[ 10 ]; te[ 11 ] = me[ 11 ];
		te[ 12 ] = me[ 12 ]; te[ 13 ] = me[ 13 ]; te[ 14 ] = me[ 14 ]; te[ 15 ] = me[ 15 ];

		return this;

	}

	copyPosition( m ) {

		const te = this.elements, me = m.elements;

		te[ 12 ] = me[ 12 ];
		te[ 13 ] = me[ 13 ];
		te[ 14 ] = me[ 14 ];

		return this;

	}

	setFromMatrix3( m ) {

		const me = m.elements;

		this.set(

			me[ 0 ], me[ 3 ], me[ 6 ], 0,
			me[ 1 ], me[ 4 ], me[ 7 ], 0,
			me[ 2 ], me[ 5 ], me[ 8 ], 0,
			0, 0, 0, 1

		);

		return this;

	}

	extractBasis( xAxis, yAxis, zAxis ) {

		xAxis.setFromMatrixColumn( this, 0 );
		yAxis.setFromMatrixColumn( this, 1 );
		zAxis.setFromMatrixColumn( this, 2 );

		return this;

	}

	makeBasis( xAxis, yAxis, zAxis ) {

		this.set(
			xAxis.x, yAxis.x, zAxis.x, 0,
			xAxis.y, yAxis.y, zAxis.y, 0,
			xAxis.z, yAxis.z, zAxis.z, 0,
			0, 0, 0, 1
		);

		return this;

	}

	extractRotation( m ) {

		// this method does not support reflection matrices

		const te = this.elements;
		const me = m.elements;

		const scaleX = 1 / _v1$5.setFromMatrixColumn( m, 0 ).length();
		const scaleY = 1 / _v1$5.setFromMatrixColumn( m, 1 ).length();
		const scaleZ = 1 / _v1$5.setFromMatrixColumn( m, 2 ).length();

		te[ 0 ] = me[ 0 ] * scaleX;
		te[ 1 ] = me[ 1 ] * scaleX;
		te[ 2 ] = me[ 2 ] * scaleX;
		te[ 3 ] = 0;

		te[ 4 ] = me[ 4 ] * scaleY;
		te[ 5 ] = me[ 5 ] * scaleY;
		te[ 6 ] = me[ 6 ] * scaleY;
		te[ 7 ] = 0;

		te[ 8 ] = me[ 8 ] * scaleZ;
		te[ 9 ] = me[ 9 ] * scaleZ;
		te[ 10 ] = me[ 10 ] * scaleZ;
		te[ 11 ] = 0;

		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	}

	makeRotationFromEuler( euler ) {

		const te = this.elements;

		const x = euler.x, y = euler.y, z = euler.z;
		const a = Math.cos( x ), b = Math.sin( x );
		const c = Math.cos( y ), d = Math.sin( y );
		const e = Math.cos( z ), f = Math.sin( z );

		if ( euler.order === 'XYZ' ) {

			const ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = - c * f;
			te[ 8 ] = d;

			te[ 1 ] = af + be * d;
			te[ 5 ] = ae - bf * d;
			te[ 9 ] = - b * c;

			te[ 2 ] = bf - ae * d;
			te[ 6 ] = be + af * d;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YXZ' ) {

			const ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce + df * b;
			te[ 4 ] = de * b - cf;
			te[ 8 ] = a * d;

			te[ 1 ] = a * f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b;

			te[ 2 ] = cf * b - de;
			te[ 6 ] = df + ce * b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZXY' ) {

			const ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce - df * b;
			te[ 4 ] = - a * f;
			te[ 8 ] = de + cf * b;

			te[ 1 ] = cf + de * b;
			te[ 5 ] = a * e;
			te[ 9 ] = df - ce * b;

			te[ 2 ] = - a * d;
			te[ 6 ] = b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZYX' ) {

			const ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = be * d - af;
			te[ 8 ] = ae * d + bf;

			te[ 1 ] = c * f;
			te[ 5 ] = bf * d + ae;
			te[ 9 ] = af * d - be;

			te[ 2 ] = - d;
			te[ 6 ] = b * c;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YZX' ) {

			const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = bd - ac * f;
			te[ 8 ] = bc * f + ad;

			te[ 1 ] = f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b * e;

			te[ 2 ] = - d * e;
			te[ 6 ] = ad * f + bc;
			te[ 10 ] = ac - bd * f;

		} else if ( euler.order === 'XZY' ) {

			const ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = - f;
			te[ 8 ] = d * e;

			te[ 1 ] = ac * f + bd;
			te[ 5 ] = a * e;
			te[ 9 ] = ad * f - bc;

			te[ 2 ] = bc * f - ad;
			te[ 6 ] = b * e;
			te[ 10 ] = bd * f + ac;

		}

		// bottom row
		te[ 3 ] = 0;
		te[ 7 ] = 0;
		te[ 11 ] = 0;

		// last column
		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	}

	makeRotationFromQuaternion( q ) {

		return this.compose( _zero, q, _one );

	}

	lookAt( eye, target, up ) {

		const te = this.elements;

		_z.subVectors( eye, target );

		if ( _z.lengthSq() === 0 ) {

			// eye and target are in the same position

			_z.z = 1;

		}

		_z.normalize();
		_x.crossVectors( up, _z );

		if ( _x.lengthSq() === 0 ) {

			// up and z are parallel

			if ( Math.abs( up.z ) === 1 ) {

				_z.x += 0.0001;

			} else {

				_z.z += 0.0001;

			}

			_z.normalize();
			_x.crossVectors( up, _z );

		}

		_x.normalize();
		_y.crossVectors( _z, _x );

		te[ 0 ] = _x.x; te[ 4 ] = _y.x; te[ 8 ] = _z.x;
		te[ 1 ] = _x.y; te[ 5 ] = _y.y; te[ 9 ] = _z.y;
		te[ 2 ] = _x.z; te[ 6 ] = _y.z; te[ 10 ] = _z.z;

		return this;

	}

	multiply( m ) {

		return this.multiplyMatrices( this, m );

	}

	premultiply( m ) {

		return this.multiplyMatrices( m, this );

	}

	multiplyMatrices( a, b ) {

		const ae = a.elements;
		const be = b.elements;
		const te = this.elements;

		const a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
		const a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
		const a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
		const a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

		const b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
		const b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
		const b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
		const b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

		te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

		return this;

	}

	multiplyScalar( s ) {

		const te = this.elements;

		te[ 0 ] *= s; te[ 4 ] *= s; te[ 8 ] *= s; te[ 12 ] *= s;
		te[ 1 ] *= s; te[ 5 ] *= s; te[ 9 ] *= s; te[ 13 ] *= s;
		te[ 2 ] *= s; te[ 6 ] *= s; te[ 10 ] *= s; te[ 14 ] *= s;
		te[ 3 ] *= s; te[ 7 ] *= s; te[ 11 ] *= s; te[ 15 ] *= s;

		return this;

	}

	determinant() {

		const te = this.elements;

		const n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
		const n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
		const n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
		const n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

		//TODO: make this more efficient
		//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

		return (
			n41 * (
				+ n14 * n23 * n32
				 - n13 * n24 * n32
				 - n14 * n22 * n33
				 + n12 * n24 * n33
				 + n13 * n22 * n34
				 - n12 * n23 * n34
			) +
			n42 * (
				+ n11 * n23 * n34
				 - n11 * n24 * n33
				 + n14 * n21 * n33
				 - n13 * n21 * n34
				 + n13 * n24 * n31
				 - n14 * n23 * n31
			) +
			n43 * (
				+ n11 * n24 * n32
				 - n11 * n22 * n34
				 - n14 * n21 * n32
				 + n12 * n21 * n34
				 + n14 * n22 * n31
				 - n12 * n24 * n31
			) +
			n44 * (
				- n13 * n22 * n31
				 - n11 * n23 * n32
				 + n11 * n22 * n33
				 + n13 * n21 * n32
				 - n12 * n21 * n33
				 + n12 * n23 * n31
			)

		);

	}

	transpose() {

		const te = this.elements;
		let tmp;

		tmp = te[ 1 ]; te[ 1 ] = te[ 4 ]; te[ 4 ] = tmp;
		tmp = te[ 2 ]; te[ 2 ] = te[ 8 ]; te[ 8 ] = tmp;
		tmp = te[ 6 ]; te[ 6 ] = te[ 9 ]; te[ 9 ] = tmp;

		tmp = te[ 3 ]; te[ 3 ] = te[ 12 ]; te[ 12 ] = tmp;
		tmp = te[ 7 ]; te[ 7 ] = te[ 13 ]; te[ 13 ] = tmp;
		tmp = te[ 11 ]; te[ 11 ] = te[ 14 ]; te[ 14 ] = tmp;

		return this;

	}

	setPosition( x, y, z ) {

		const te = this.elements;

		if ( x.isVector3 ) {

			te[ 12 ] = x.x;
			te[ 13 ] = x.y;
			te[ 14 ] = x.z;

		} else {

			te[ 12 ] = x;
			te[ 13 ] = y;
			te[ 14 ] = z;

		}

		return this;

	}

	invert() {

		// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
		const te = this.elements,

			n11 = te[ 0 ], n21 = te[ 1 ], n31 = te[ 2 ], n41 = te[ 3 ],
			n12 = te[ 4 ], n22 = te[ 5 ], n32 = te[ 6 ], n42 = te[ 7 ],
			n13 = te[ 8 ], n23 = te[ 9 ], n33 = te[ 10 ], n43 = te[ 11 ],
			n14 = te[ 12 ], n24 = te[ 13 ], n34 = te[ 14 ], n44 = te[ 15 ],

			t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
			t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
			t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
			t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

		const det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );

		const detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44 ) * detInv;
		te[ 2 ] = ( n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44 ) * detInv;
		te[ 3 ] = ( n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43 ) * detInv;

		te[ 4 ] = t12 * detInv;
		te[ 5 ] = ( n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44 ) * detInv;
		te[ 6 ] = ( n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44 ) * detInv;
		te[ 7 ] = ( n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43 ) * detInv;

		te[ 8 ] = t13 * detInv;
		te[ 9 ] = ( n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44 ) * detInv;
		te[ 10 ] = ( n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44 ) * detInv;
		te[ 11 ] = ( n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43 ) * detInv;

		te[ 12 ] = t14 * detInv;
		te[ 13 ] = ( n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34 ) * detInv;
		te[ 14 ] = ( n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34 ) * detInv;
		te[ 15 ] = ( n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33 ) * detInv;

		return this;

	}

	scale( v ) {

		const te = this.elements;
		const x = v.x, y = v.y, z = v.z;

		te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
		te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
		te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
		te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

		return this;

	}

	getMaxScaleOnAxis() {

		const te = this.elements;

		const scaleXSq = te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] + te[ 2 ] * te[ 2 ];
		const scaleYSq = te[ 4 ] * te[ 4 ] + te[ 5 ] * te[ 5 ] + te[ 6 ] * te[ 6 ];
		const scaleZSq = te[ 8 ] * te[ 8 ] + te[ 9 ] * te[ 9 ] + te[ 10 ] * te[ 10 ];

		return Math.sqrt( Math.max( scaleXSq, scaleYSq, scaleZSq ) );

	}

	makeTranslation( x, y, z ) {

		this.set(

			1, 0, 0, x,
			0, 1, 0, y,
			0, 0, 1, z,
			0, 0, 0, 1

		);

		return this;

	}

	makeRotationX( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			1, 0, 0, 0,
			0, c, - s, 0,
			0, s, c, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeRotationY( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			 c, 0, s, 0,
			 0, 1, 0, 0,
			- s, 0, c, 0,
			 0, 0, 0, 1

		);

		return this;

	}

	makeRotationZ( theta ) {

		const c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			c, - s, 0, 0,
			s, c, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeRotationAxis( axis, angle ) {

		// Based on http://www.gamedev.net/reference/articles/article1199.asp

		const c = Math.cos( angle );
		const s = Math.sin( angle );
		const t = 1 - c;
		const x = axis.x, y = axis.y, z = axis.z;
		const tx = t * x, ty = t * y;

		this.set(

			tx * x + c, tx * y - s * z, tx * z + s * y, 0,
			tx * y + s * z, ty * y + c, ty * z - s * x, 0,
			tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeScale( x, y, z ) {

		this.set(

			x, 0, 0, 0,
			0, y, 0, 0,
			0, 0, z, 0,
			0, 0, 0, 1

		);

		return this;

	}

	makeShear( xy, xz, yx, yz, zx, zy ) {

		this.set(

			1, yx, zx, 0,
			xy, 1, zy, 0,
			xz, yz, 1, 0,
			0, 0, 0, 1

		);

		return this;

	}

	compose( position, quaternion, scale ) {

		const te = this.elements;

		const x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
		const x2 = x + x,	y2 = y + y, z2 = z + z;
		const xx = x * x2, xy = x * y2, xz = x * z2;
		const yy = y * y2, yz = y * z2, zz = z * z2;
		const wx = w * x2, wy = w * y2, wz = w * z2;

		const sx = scale.x, sy = scale.y, sz = scale.z;

		te[ 0 ] = ( 1 - ( yy + zz ) ) * sx;
		te[ 1 ] = ( xy + wz ) * sx;
		te[ 2 ] = ( xz - wy ) * sx;
		te[ 3 ] = 0;

		te[ 4 ] = ( xy - wz ) * sy;
		te[ 5 ] = ( 1 - ( xx + zz ) ) * sy;
		te[ 6 ] = ( yz + wx ) * sy;
		te[ 7 ] = 0;

		te[ 8 ] = ( xz + wy ) * sz;
		te[ 9 ] = ( yz - wx ) * sz;
		te[ 10 ] = ( 1 - ( xx + yy ) ) * sz;
		te[ 11 ] = 0;

		te[ 12 ] = position.x;
		te[ 13 ] = position.y;
		te[ 14 ] = position.z;
		te[ 15 ] = 1;

		return this;

	}

	decompose( position, quaternion, scale ) {

		const te = this.elements;

		let sx = _v1$5.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
		const sy = _v1$5.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
		const sz = _v1$5.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

		// if determine is negative, we need to invert one scale
		const det = this.determinant();
		if ( det < 0 ) sx = - sx;

		position.x = te[ 12 ];
		position.y = te[ 13 ];
		position.z = te[ 14 ];

		// scale the rotation part
		_m1$2.copy( this );

		const invSX = 1 / sx;
		const invSY = 1 / sy;
		const invSZ = 1 / sz;

		_m1$2.elements[ 0 ] *= invSX;
		_m1$2.elements[ 1 ] *= invSX;
		_m1$2.elements[ 2 ] *= invSX;

		_m1$2.elements[ 4 ] *= invSY;
		_m1$2.elements[ 5 ] *= invSY;
		_m1$2.elements[ 6 ] *= invSY;

		_m1$2.elements[ 8 ] *= invSZ;
		_m1$2.elements[ 9 ] *= invSZ;
		_m1$2.elements[ 10 ] *= invSZ;

		quaternion.setFromRotationMatrix( _m1$2 );

		scale.x = sx;
		scale.y = sy;
		scale.z = sz;

		return this;

	}

	makePerspective( left, right, top, bottom, near, far ) {

		const te = this.elements;
		const x = 2 * near / ( right - left );
		const y = 2 * near / ( top - bottom );

		const a = ( right + left ) / ( right - left );
		const b = ( top + bottom ) / ( top - bottom );
		const c = - ( far + near ) / ( far - near );
		const d = - 2 * far * near / ( far - near );

		te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a;	te[ 12 ] = 0;
		te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b;	te[ 13 ] = 0;
		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c;	te[ 14 ] = d;
		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = - 1;	te[ 15 ] = 0;

		return this;

	}

	makeOrthographic( left, right, top, bottom, near, far ) {

		const te = this.elements;
		const w = 1.0 / ( right - left );
		const h = 1.0 / ( top - bottom );
		const p = 1.0 / ( far - near );

		const x = ( right + left ) * w;
		const y = ( top + bottom ) * h;
		const z = ( far + near ) * p;

		te[ 0 ] = 2 * w;	te[ 4 ] = 0;	te[ 8 ] = 0;	te[ 12 ] = - x;
		te[ 1 ] = 0;	te[ 5 ] = 2 * h;	te[ 9 ] = 0;	te[ 13 ] = - y;
		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = - 2 * p;	te[ 14 ] = - z;
		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = 0;	te[ 15 ] = 1;

		return this;

	}

	equals( matrix ) {

		const te = this.elements;
		const me = matrix.elements;

		for ( let i = 0; i < 16; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	}

	fromArray( array, offset = 0 ) {

		for ( let i = 0; i < 16; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	}

	toArray( array = [], offset = 0 ) {

		const te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];
		array[ offset + 3 ] = te[ 3 ];

		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];
		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];

		array[ offset + 8 ] = te[ 8 ];
		array[ offset + 9 ] = te[ 9 ];
		array[ offset + 10 ] = te[ 10 ];
		array[ offset + 11 ] = te[ 11 ];

		array[ offset + 12 ] = te[ 12 ];
		array[ offset + 13 ] = te[ 13 ];
		array[ offset + 14 ] = te[ 14 ];
		array[ offset + 15 ] = te[ 15 ];

		return array;

	}

}

const _v1$5 = /*@__PURE__*/ new Vector3();
const _m1$2 = /*@__PURE__*/ new Matrix4();
const _zero = /*@__PURE__*/ new Vector3( 0, 0, 0 );
const _one = /*@__PURE__*/ new Vector3( 1, 1, 1 );
const _x = /*@__PURE__*/ new Vector3();
const _y = /*@__PURE__*/ new Vector3();
const _z = /*@__PURE__*/ new Vector3();

const _matrix = /*@__PURE__*/ new Matrix4();
const _quaternion$3 = /*@__PURE__*/ new Quaternion();

class Euler {

	constructor( x = 0, y = 0, z = 0, order = Euler.DEFAULT_ORDER ) {

		this.isEuler = true;

		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;

	}

	get x() {

		return this._x;

	}

	set x( value ) {

		this._x = value;
		this._onChangeCallback();

	}

	get y() {

		return this._y;

	}

	set y( value ) {

		this._y = value;
		this._onChangeCallback();

	}

	get z() {

		return this._z;

	}

	set z( value ) {

		this._z = value;
		this._onChangeCallback();

	}

	get order() {

		return this._order;

	}

	set order( value ) {

		this._order = value;
		this._onChangeCallback();

	}

	set( x, y, z, order = this._order ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._order = order;

		this._onChangeCallback();

		return this;

	}

	clone() {

		return new this.constructor( this._x, this._y, this._z, this._order );

	}

	copy( euler ) {

		this._x = euler._x;
		this._y = euler._y;
		this._z = euler._z;
		this._order = euler._order;

		this._onChangeCallback();

		return this;

	}

	setFromRotationMatrix( m, order = this._order, update = true ) {

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		const te = m.elements;
		const m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
		const m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
		const m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

		switch ( order ) {

			case 'XYZ':

				this._y = Math.asin( clamp( m13, - 1, 1 ) );

				if ( Math.abs( m13 ) < 0.9999999 ) {

					this._x = Math.atan2( - m23, m33 );
					this._z = Math.atan2( - m12, m11 );

				} else {

					this._x = Math.atan2( m32, m22 );
					this._z = 0;

				}

				break;

			case 'YXZ':

				this._x = Math.asin( - clamp( m23, - 1, 1 ) );

				if ( Math.abs( m23 ) < 0.9999999 ) {

					this._y = Math.atan2( m13, m33 );
					this._z = Math.atan2( m21, m22 );

				} else {

					this._y = Math.atan2( - m31, m11 );
					this._z = 0;

				}

				break;

			case 'ZXY':

				this._x = Math.asin( clamp( m32, - 1, 1 ) );

				if ( Math.abs( m32 ) < 0.9999999 ) {

					this._y = Math.atan2( - m31, m33 );
					this._z = Math.atan2( - m12, m22 );

				} else {

					this._y = 0;
					this._z = Math.atan2( m21, m11 );

				}

				break;

			case 'ZYX':

				this._y = Math.asin( - clamp( m31, - 1, 1 ) );

				if ( Math.abs( m31 ) < 0.9999999 ) {

					this._x = Math.atan2( m32, m33 );
					this._z = Math.atan2( m21, m11 );

				} else {

					this._x = 0;
					this._z = Math.atan2( - m12, m22 );

				}

				break;

			case 'YZX':

				this._z = Math.asin( clamp( m21, - 1, 1 ) );

				if ( Math.abs( m21 ) < 0.9999999 ) {

					this._x = Math.atan2( - m23, m22 );
					this._y = Math.atan2( - m31, m11 );

				} else {

					this._x = 0;
					this._y = Math.atan2( m13, m33 );

				}

				break;

			case 'XZY':

				this._z = Math.asin( - clamp( m12, - 1, 1 ) );

				if ( Math.abs( m12 ) < 0.9999999 ) {

					this._x = Math.atan2( m32, m22 );
					this._y = Math.atan2( m13, m11 );

				} else {

					this._x = Math.atan2( - m23, m33 );
					this._y = 0;

				}

				break;

			default:

				console.warn( 'THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + order );

		}

		this._order = order;

		if ( update === true ) this._onChangeCallback();

		return this;

	}

	setFromQuaternion( q, order, update ) {

		_matrix.makeRotationFromQuaternion( q );

		return this.setFromRotationMatrix( _matrix, order, update );

	}

	setFromVector3( v, order = this._order ) {

		return this.set( v.x, v.y, v.z, order );

	}

	reorder( newOrder ) {

		// WARNING: this discards revolution information -bhouston

		_quaternion$3.setFromEuler( this );

		return this.setFromQuaternion( _quaternion$3, newOrder );

	}

	equals( euler ) {

		return ( euler._x === this._x ) && ( euler._y === this._y ) && ( euler._z === this._z ) && ( euler._order === this._order );

	}

	fromArray( array ) {

		this._x = array[ 0 ];
		this._y = array[ 1 ];
		this._z = array[ 2 ];
		if ( array[ 3 ] !== undefined ) this._order = array[ 3 ];

		this._onChangeCallback();

		return this;

	}

	toArray( array = [], offset = 0 ) {

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._order;

		return array;

	}

	_onChange( callback ) {

		this._onChangeCallback = callback;

		return this;

	}

	_onChangeCallback() {}

	*[ Symbol.iterator ]() {

		yield this._x;
		yield this._y;
		yield this._z;
		yield this._order;

	}

}

Euler.DEFAULT_ORDER = 'XYZ';

class Layers {

	constructor() {

		this.mask = 1 | 0;

	}

	set( channel ) {

		this.mask = ( 1 << channel | 0 ) >>> 0;

	}

	enable( channel ) {

		this.mask |= 1 << channel | 0;

	}

	enableAll() {

		this.mask = 0xffffffff | 0;

	}

	toggle( channel ) {

		this.mask ^= 1 << channel | 0;

	}

	disable( channel ) {

		this.mask &= ~ ( 1 << channel | 0 );

	}

	disableAll() {

		this.mask = 0;

	}

	test( layers ) {

		return ( this.mask & layers.mask ) !== 0;

	}

	isEnabled( channel ) {

		return ( this.mask & ( 1 << channel | 0 ) ) !== 0;

	}

}

let _object3DId = 0;

const _v1$4 = /*@__PURE__*/ new Vector3();
const _q1 = /*@__PURE__*/ new Quaternion();
const _m1$1 = /*@__PURE__*/ new Matrix4();
const _target = /*@__PURE__*/ new Vector3();

const _position$3 = /*@__PURE__*/ new Vector3();
const _scale$2 = /*@__PURE__*/ new Vector3();
const _quaternion$2 = /*@__PURE__*/ new Quaternion();

const _xAxis = /*@__PURE__*/ new Vector3( 1, 0, 0 );
const _yAxis = /*@__PURE__*/ new Vector3( 0, 1, 0 );
const _zAxis = /*@__PURE__*/ new Vector3( 0, 0, 1 );

const _addedEvent = { type: 'added' };
const _removedEvent = { type: 'removed' };

class Object3D extends EventDispatcher {

	constructor() {

		super();

		this.isObject3D = true;

		Object.defineProperty( this, 'id', { value: _object3DId ++ } );

		this.uuid = generateUUID();

		this.name = '';
		this.type = 'Object3D';

		this.parent = null;
		this.children = [];

		this.up = Object3D.DEFAULT_UP.clone();

		const position = new Vector3();
		const rotation = new Euler();
		const quaternion = new Quaternion();
		const scale = new Vector3( 1, 1, 1 );

		function onRotationChange() {

			quaternion.setFromEuler( rotation, false );

		}

		function onQuaternionChange() {

			rotation.setFromQuaternion( quaternion, undefined, false );

		}

		rotation._onChange( onRotationChange );
		quaternion._onChange( onQuaternionChange );

		Object.defineProperties( this, {
			position: {
				configurable: true,
				enumerable: true,
				value: position
			},
			rotation: {
				configurable: true,
				enumerable: true,
				value: rotation
			},
			quaternion: {
				configurable: true,
				enumerable: true,
				value: quaternion
			},
			scale: {
				configurable: true,
				enumerable: true,
				value: scale
			},
			modelViewMatrix: {
				value: new Matrix4()
			},
			normalMatrix: {
				value: new Matrix3()
			}
		} );

		this.matrix = new Matrix4();
		this.matrixWorld = new Matrix4();

		this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE;
		this.matrixWorldNeedsUpdate = false;

		this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE; // checked by the renderer

		this.layers = new Layers();
		this.visible = true;

		this.castShadow = false;
		this.receiveShadow = false;

		this.frustumCulled = true;
		this.renderOrder = 0;

		this.animations = [];

		this.userData = {};

	}

	onBeforeRender( /* renderer, scene, camera, geometry, material, group */ ) {}

	onAfterRender( /* renderer, scene, camera, geometry, material, group */ ) {}

	applyMatrix4( matrix ) {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		this.matrix.premultiply( matrix );

		this.matrix.decompose( this.position, this.quaternion, this.scale );

	}

	applyQuaternion( q ) {

		this.quaternion.premultiply( q );

		return this;

	}

	setRotationFromAxisAngle( axis, angle ) {

		// assumes axis is normalized

		this.quaternion.setFromAxisAngle( axis, angle );

	}

	setRotationFromEuler( euler ) {

		this.quaternion.setFromEuler( euler, true );

	}

	setRotationFromMatrix( m ) {

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		this.quaternion.setFromRotationMatrix( m );

	}

	setRotationFromQuaternion( q ) {

		// assumes q is normalized

		this.quaternion.copy( q );

	}

	rotateOnAxis( axis, angle ) {

		// rotate object on axis in object space
		// axis is assumed to be normalized

		_q1.setFromAxisAngle( axis, angle );

		this.quaternion.multiply( _q1 );

		return this;

	}

	rotateOnWorldAxis( axis, angle ) {

		// rotate object on axis in world space
		// axis is assumed to be normalized
		// method assumes no rotated parent

		_q1.setFromAxisAngle( axis, angle );

		this.quaternion.premultiply( _q1 );

		return this;

	}

	rotateX( angle ) {

		return this.rotateOnAxis( _xAxis, angle );

	}

	rotateY( angle ) {

		return this.rotateOnAxis( _yAxis, angle );

	}

	rotateZ( angle ) {

		return this.rotateOnAxis( _zAxis, angle );

	}

	translateOnAxis( axis, distance ) {

		// translate object by distance along axis in object space
		// axis is assumed to be normalized

		_v1$4.copy( axis ).applyQuaternion( this.quaternion );

		this.position.add( _v1$4.multiplyScalar( distance ) );

		return this;

	}

	translateX( distance ) {

		return this.translateOnAxis( _xAxis, distance );

	}

	translateY( distance ) {

		return this.translateOnAxis( _yAxis, distance );

	}

	translateZ( distance ) {

		return this.translateOnAxis( _zAxis, distance );

	}

	localToWorld( vector ) {

		this.updateWorldMatrix( true, false );

		return vector.applyMatrix4( this.matrixWorld );

	}

	worldToLocal( vector ) {

		this.updateWorldMatrix( true, false );

		return vector.applyMatrix4( _m1$1.copy( this.matrixWorld ).invert() );

	}

	lookAt( x, y, z ) {

		// This method does not support objects having non-uniformly-scaled parent(s)

		if ( x.isVector3 ) {

			_target.copy( x );

		} else {

			_target.set( x, y, z );

		}

		const parent = this.parent;

		this.updateWorldMatrix( true, false );

		_position$3.setFromMatrixPosition( this.matrixWorld );

		if ( this.isCamera || this.isLight ) {

			_m1$1.lookAt( _position$3, _target, this.up );

		} else {

			_m1$1.lookAt( _target, _position$3, this.up );

		}

		this.quaternion.setFromRotationMatrix( _m1$1 );

		if ( parent ) {

			_m1$1.extractRotation( parent.matrixWorld );
			_q1.setFromRotationMatrix( _m1$1 );
			this.quaternion.premultiply( _q1.invert() );

		}

	}

	add( object ) {

		if ( arguments.length > 1 ) {

			for ( let i = 0; i < arguments.length; i ++ ) {

				this.add( arguments[ i ] );

			}

			return this;

		}

		if ( object === this ) {

			console.error( 'THREE.Object3D.add: object can\'t be added as a child of itself.', object );
			return this;

		}

		if ( object && object.isObject3D ) {

			if ( object.parent !== null ) {

				object.parent.remove( object );

			}

			object.parent = this;
			this.children.push( object );

			object.dispatchEvent( _addedEvent );

		} else {

			console.error( 'THREE.Object3D.add: object not an instance of THREE.Object3D.', object );

		}

		return this;

	}

	remove( object ) {

		if ( arguments.length > 1 ) {

			for ( let i = 0; i < arguments.length; i ++ ) {

				this.remove( arguments[ i ] );

			}

			return this;

		}

		const index = this.children.indexOf( object );

		if ( index !== - 1 ) {

			object.parent = null;
			this.children.splice( index, 1 );

			object.dispatchEvent( _removedEvent );

		}

		return this;

	}

	removeFromParent() {

		const parent = this.parent;

		if ( parent !== null ) {

			parent.remove( this );

		}

		return this;

	}

	clear() {

		for ( let i = 0; i < this.children.length; i ++ ) {

			const object = this.children[ i ];

			object.parent = null;

			object.dispatchEvent( _removedEvent );

		}

		this.children.length = 0;

		return this;


	}

	attach( object ) {

		// adds object as a child of this, while maintaining the object's world transform

		// Note: This method does not support scene graphs having non-uniformly-scaled nodes(s)

		this.updateWorldMatrix( true, false );

		_m1$1.copy( this.matrixWorld ).invert();

		if ( object.parent !== null ) {

			object.parent.updateWorldMatrix( true, false );

			_m1$1.multiply( object.parent.matrixWorld );

		}

		object.applyMatrix4( _m1$1 );

		this.add( object );

		object.updateWorldMatrix( false, true );

		return this;

	}

	getObjectById( id ) {

		return this.getObjectByProperty( 'id', id );

	}

	getObjectByName( name ) {

		return this.getObjectByProperty( 'name', name );

	}

	getObjectByProperty( name, value ) {

		if ( this[ name ] === value ) return this;

		for ( let i = 0, l = this.children.length; i < l; i ++ ) {

			const child = this.children[ i ];
			const object = child.getObjectByProperty( name, value );

			if ( object !== undefined ) {

				return object;

			}

		}

		return undefined;

	}

	getObjectsByProperty( name, value ) {

		let result = [];

		if ( this[ name ] === value ) result.push( this );

		for ( let i = 0, l = this.children.length; i < l; i ++ ) {

			const childResult = this.children[ i ].getObjectsByProperty( name, value );

			if ( childResult.length > 0 ) {

				result = result.concat( childResult );

			}

		}

		return result;

	}

	getWorldPosition( target ) {

		this.updateWorldMatrix( true, false );

		return target.setFromMatrixPosition( this.matrixWorld );

	}

	getWorldQuaternion( target ) {

		this.updateWorldMatrix( true, false );

		this.matrixWorld.decompose( _position$3, target, _scale$2 );

		return target;

	}

	getWorldScale( target ) {

		this.updateWorldMatrix( true, false );

		this.matrixWorld.decompose( _position$3, _quaternion$2, target );

		return target;

	}

	getWorldDirection( target ) {

		this.updateWorldMatrix( true, false );

		const e = this.matrixWorld.elements;

		return target.set( e[ 8 ], e[ 9 ], e[ 10 ] ).normalize();

	}

	raycast( /* raycaster, intersects */ ) {}

	traverse( callback ) {

		callback( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverse( callback );

		}

	}

	traverseVisible( callback ) {

		if ( this.visible === false ) return;

		callback( this );

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			children[ i ].traverseVisible( callback );

		}

	}

	traverseAncestors( callback ) {

		const parent = this.parent;

		if ( parent !== null ) {

			callback( parent );

			parent.traverseAncestors( callback );

		}

	}

	updateMatrix() {

		this.matrix.compose( this.position, this.quaternion, this.scale );

		this.matrixWorldNeedsUpdate = true;

	}

	updateMatrixWorld( force ) {

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.matrixWorldNeedsUpdate || force ) {

			if ( this.parent === null ) {

				this.matrixWorld.copy( this.matrix );

			} else {

				this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

			}

			this.matrixWorldNeedsUpdate = false;

			force = true;

		}

		// update children

		const children = this.children;

		for ( let i = 0, l = children.length; i < l; i ++ ) {

			const child = children[ i ];

			if ( child.matrixWorldAutoUpdate === true || force === true ) {

				child.updateMatrixWorld( force );

			}

		}

	}

	updateWorldMatrix( updateParents, updateChildren ) {

		const parent = this.parent;

		if ( updateParents === true && parent !== null && parent.matrixWorldAutoUpdate === true ) {

			parent.updateWorldMatrix( true, false );

		}

		if ( this.matrixAutoUpdate ) this.updateMatrix();

		if ( this.parent === null ) {

			this.matrixWorld.copy( this.matrix );

		} else {

			this.matrixWorld.multiplyMatrices( this.parent.matrixWorld, this.matrix );

		}

		// update children

		if ( updateChildren === true ) {

			const children = this.children;

			for ( let i = 0, l = children.length; i < l; i ++ ) {

				const child = children[ i ];

				if ( child.matrixWorldAutoUpdate === true ) {

					child.updateWorldMatrix( false, true );

				}

			}

		}

	}

	toJSON( meta ) {

		// meta is a string when called from JSON.stringify
		const isRootObject = ( meta === undefined || typeof meta === 'string' );

		const output = {};

		// meta is a hash used to collect geometries, materials.
		// not providing it implies that this is the root object
		// being serialized.
		if ( isRootObject ) {

			// initialize meta obj
			meta = {
				geometries: {},
				materials: {},
				textures: {},
				images: {},
				shapes: {},
				skeletons: {},
				animations: {},
				nodes: {}
			};

			output.metadata = {
				version: 4.5,
				type: 'Object',
				generator: 'Object3D.toJSON'
			};

		}

		// standard Object3D serialization

		const object = {};

		object.uuid = this.uuid;
		object.type = this.type;

		if ( this.name !== '' ) object.name = this.name;
		if ( this.castShadow === true ) object.castShadow = true;
		if ( this.receiveShadow === true ) object.receiveShadow = true;
		if ( this.visible === false ) object.visible = false;
		if ( this.frustumCulled === false ) object.frustumCulled = false;
		if ( this.renderOrder !== 0 ) object.renderOrder = this.renderOrder;
		if ( Object.keys( this.userData ).length > 0 ) object.userData = this.userData;

		object.layers = this.layers.mask;
		object.matrix = this.matrix.toArray();
		object.up = this.up.toArray();

		if ( this.matrixAutoUpdate === false ) object.matrixAutoUpdate = false;

		// object specific properties

		if ( this.isInstancedMesh ) {

			object.type = 'InstancedMesh';
			object.count = this.count;
			object.instanceMatrix = this.instanceMatrix.toJSON();
			if ( this.instanceColor !== null ) object.instanceColor = this.instanceColor.toJSON();

		}

		//

		function serialize( library, element ) {

			if ( library[ element.uuid ] === undefined ) {

				library[ element.uuid ] = element.toJSON( meta );

			}

			return element.uuid;

		}

		if ( this.isScene ) {

			if ( this.background ) {

				if ( this.background.isColor ) {

					object.background = this.background.toJSON();

				} else if ( this.background.isTexture ) {

					object.background = this.background.toJSON( meta ).uuid;

				}

			}

			if ( this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true ) {

				object.environment = this.environment.toJSON( meta ).uuid;

			}

		} else if ( this.isMesh || this.isLine || this.isPoints ) {

			object.geometry = serialize( meta.geometries, this.geometry );

			const parameters = this.geometry.parameters;

			if ( parameters !== undefined && parameters.shapes !== undefined ) {

				const shapes = parameters.shapes;

				if ( Array.isArray( shapes ) ) {

					for ( let i = 0, l = shapes.length; i < l; i ++ ) {

						const shape = shapes[ i ];

						serialize( meta.shapes, shape );

					}

				} else {

					serialize( meta.shapes, shapes );

				}

			}

		}

		if ( this.isSkinnedMesh ) {

			object.bindMode = this.bindMode;
			object.bindMatrix = this.bindMatrix.toArray();

			if ( this.skeleton !== undefined ) {

				serialize( meta.skeletons, this.skeleton );

				object.skeleton = this.skeleton.uuid;

			}

		}

		if ( this.material !== undefined ) {

			if ( Array.isArray( this.material ) ) {

				const uuids = [];

				for ( let i = 0, l = this.material.length; i < l; i ++ ) {

					uuids.push( serialize( meta.materials, this.material[ i ] ) );

				}

				object.material = uuids;

			} else {

				object.material = serialize( meta.materials, this.material );

			}

		}

		//

		if ( this.children.length > 0 ) {

			object.children = [];

			for ( let i = 0; i < this.children.length; i ++ ) {

				object.children.push( this.children[ i ].toJSON( meta ).object );

			}

		}

		//

		if ( this.animations.length > 0 ) {

			object.animations = [];

			for ( let i = 0; i < this.animations.length; i ++ ) {

				const animation = this.animations[ i ];

				object.animations.push( serialize( meta.animations, animation ) );

			}

		}

		if ( isRootObject ) {

			const geometries = extractFromCache( meta.geometries );
			const materials = extractFromCache( meta.materials );
			const textures = extractFromCache( meta.textures );
			const images = extractFromCache( meta.images );
			const shapes = extractFromCache( meta.shapes );
			const skeletons = extractFromCache( meta.skeletons );
			const animations = extractFromCache( meta.animations );
			const nodes = extractFromCache( meta.nodes );

			if ( geometries.length > 0 ) output.geometries = geometries;
			if ( materials.length > 0 ) output.materials = materials;
			if ( textures.length > 0 ) output.textures = textures;
			if ( images.length > 0 ) output.images = images;
			if ( shapes.length > 0 ) output.shapes = shapes;
			if ( skeletons.length > 0 ) output.skeletons = skeletons;
			if ( animations.length > 0 ) output.animations = animations;
			if ( nodes.length > 0 ) output.nodes = nodes;

		}

		output.object = object;

		return output;

		// extract data from the cache hash
		// remove metadata on each item
		// and return as array
		function extractFromCache( cache ) {

			const values = [];
			for ( const key in cache ) {

				const data = cache[ key ];
				delete data.metadata;
				values.push( data );

			}

			return values;

		}

	}

	clone( recursive ) {

		return new this.constructor().copy( this, recursive );

	}

	copy( source, recursive = true ) {

		this.name = source.name;

		this.up.copy( source.up );

		this.position.copy( source.position );
		this.rotation.order = source.rotation.order;
		this.quaternion.copy( source.quaternion );
		this.scale.copy( source.scale );

		this.matrix.copy( source.matrix );
		this.matrixWorld.copy( source.matrixWorld );

		this.matrixAutoUpdate = source.matrixAutoUpdate;
		this.matrixWorldNeedsUpdate = source.matrixWorldNeedsUpdate;

		this.matrixWorldAutoUpdate = source.matrixWorldAutoUpdate;

		this.layers.mask = source.layers.mask;
		this.visible = source.visible;

		this.castShadow = source.castShadow;
		this.receiveShadow = source.receiveShadow;

		this.frustumCulled = source.frustumCulled;
		this.renderOrder = source.renderOrder;

		this.animations = source.animations;

		this.userData = JSON.parse( JSON.stringify( source.userData ) );

		if ( recursive === true ) {

			for ( let i = 0; i < source.children.length; i ++ ) {

				const child = source.children[ i ];
				this.add( child.clone() );

			}

		}

		return this;

	}

}

Object3D.DEFAULT_UP = /*@__PURE__*/ new Vector3( 0, 1, 0 );
Object3D.DEFAULT_MATRIX_AUTO_UPDATE = true;
Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;

const _vector$8 = /*@__PURE__*/ new Vector3();
const _vector2$1 = /*@__PURE__*/ new Vector2();

class BufferAttribute {

	constructor( array, itemSize, normalized = false ) {

		if ( Array.isArray( array ) ) {

			throw new TypeError( 'THREE.BufferAttribute: array should be a Typed Array.' );

		}

		this.isBufferAttribute = true;

		this.name = '';

		this.array = array;
		this.itemSize = itemSize;
		this.count = array !== undefined ? array.length / itemSize : 0;
		this.normalized = normalized;

		this.usage = StaticDrawUsage;
		this.updateRange = { offset: 0, count: - 1 };

		this.version = 0;

	}

	onUploadCallback() {}

	set needsUpdate( value ) {

		if ( value === true ) this.version ++;

	}

	setUsage( value ) {

		this.usage = value;

		return this;

	}

	copy( source ) {

		this.name = source.name;
		this.array = new source.array.constructor( source.array );
		this.itemSize = source.itemSize;
		this.count = source.count;
		this.normalized = source.normalized;

		this.usage = source.usage;

		return this;

	}

	copyAt( index1, attribute, index2 ) {

		index1 *= this.itemSize;
		index2 *= attribute.itemSize;

		for ( let i = 0, l = this.itemSize; i < l; i ++ ) {

			this.array[ index1 + i ] = attribute.array[ index2 + i ];

		}

		return this;

	}

	copyArray( array ) {

		this.array.set( array );

		return this;

	}

	applyMatrix3( m ) {

		if ( this.itemSize === 2 ) {

			for ( let i = 0, l = this.count; i < l; i ++ ) {

				_vector2$1.fromBufferAttribute( this, i );
				_vector2$1.applyMatrix3( m );

				this.setXY( i, _vector2$1.x, _vector2$1.y );

			}

		} else if ( this.itemSize === 3 ) {

			for ( let i = 0, l = this.count; i < l; i ++ ) {

				_vector$8.fromBufferAttribute( this, i );
				_vector$8.applyMatrix3( m );

				this.setXYZ( i, _vector$8.x, _vector$8.y, _vector$8.z );

			}

		}

		return this;

	}

	applyMatrix4( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$8.fromBufferAttribute( this, i );

			_vector$8.applyMatrix4( m );

			this.setXYZ( i, _vector$8.x, _vector$8.y, _vector$8.z );

		}

		return this;

	}

	applyNormalMatrix( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$8.fromBufferAttribute( this, i );

			_vector$8.applyNormalMatrix( m );

			this.setXYZ( i, _vector$8.x, _vector$8.y, _vector$8.z );

		}

		return this;

	}

	transformDirection( m ) {

		for ( let i = 0, l = this.count; i < l; i ++ ) {

			_vector$8.fromBufferAttribute( this, i );

			_vector$8.transformDirection( m );

			this.setXYZ( i, _vector$8.x, _vector$8.y, _vector$8.z );

		}

		return this;

	}

	set( value, offset = 0 ) {

		// Matching BufferAttribute constructor, do not normalize the array.
		this.array.set( value, offset );

		return this;

	}

	getX( index ) {

		let x = this.array[ index * this.itemSize ];

		if ( this.normalized ) x = denormalize( x, this.array );

		return x;

	}

	setX( index, x ) {

		if ( this.normalized ) x = normalize( x, this.array );

		this.array[ index * this.itemSize ] = x;

		return this;

	}

	getY( index ) {

		let y = this.array[ index * this.itemSize + 1 ];

		if ( this.normalized ) y = denormalize( y, this.array );

		return y;

	}

	setY( index, y ) {

		if ( this.normalized ) y = normalize( y, this.array );

		this.array[ index * this.itemSize + 1 ] = y;

		return this;

	}

	getZ( index ) {

		let z = this.array[ index * this.itemSize + 2 ];

		if ( this.normalized ) z = denormalize( z, this.array );

		return z;

	}

	setZ( index, z ) {

		if ( this.normalized ) z = normalize( z, this.array );

		this.array[ index * this.itemSize + 2 ] = z;

		return this;

	}

	getW( index ) {

		let w = this.array[ index * this.itemSize + 3 ];

		if ( this.normalized ) w = denormalize( w, this.array );

		return w;

	}

	setW( index, w ) {

		if ( this.normalized ) w = normalize( w, this.array );

		this.array[ index * this.itemSize + 3 ] = w;

		return this;

	}

	setXY( index, x, y ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );

		}

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;

		return this;

	}

	setXYZ( index, x, y, z ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );
			z = normalize( z, this.array );

		}

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;

		return this;

	}

	setXYZW( index, x, y, z, w ) {

		index *= this.itemSize;

		if ( this.normalized ) {

			x = normalize( x, this.array );
			y = normalize( y, this.array );
			z = normalize( z, this.array );
			w = normalize( w, this.array );

		}

		this.array[ index + 0 ] = x;
		this.array[ index + 1 ] = y;
		this.array[ index + 2 ] = z;
		this.array[ index + 3 ] = w;

		return this;

	}

	onUpload( callback ) {

		this.onUploadCallback = callback;

		return this;

	}

	clone() {

		return new this.constructor( this.array, this.itemSize ).copy( this );

	}

	toJSON() {

		const data = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from( this.array ),
			normalized: this.normalized
		};

		if ( this.name !== '' ) data.name = this.name;
		if ( this.usage !== StaticDrawUsage ) data.usage = this.usage;
		if ( this.updateRange.offset !== 0 || this.updateRange.count !== - 1 ) data.updateRange = this.updateRange;

		return data;

	}

	copyColorsArray() { // @deprecated, r144

		console.error( 'THREE.BufferAttribute: copyColorsArray() was removed in r144.' );

	}

	copyVector2sArray() { // @deprecated, r144

		console.error( 'THREE.BufferAttribute: copyVector2sArray() was removed in r144.' );

	}

	copyVector3sArray() { // @deprecated, r144

		console.error( 'THREE.BufferAttribute: copyVector3sArray() was removed in r144.' );

	}

	copyVector4sArray() { // @deprecated, r144

		console.error( 'THREE.BufferAttribute: copyVector4sArray() was removed in r144.' );

	}

}

class Uint16BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint16Array( array ), itemSize, normalized );

	}

}

class Uint32BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Uint32Array( array ), itemSize, normalized );

	}

}


class Float32BufferAttribute extends BufferAttribute {

	constructor( array, itemSize, normalized ) {

		super( new Float32Array( array ), itemSize, normalized );

	}

}

let _id$1 = 0;

const _m1 = /*@__PURE__*/ new Matrix4();
const _obj = /*@__PURE__*/ new Object3D();
const _offset = /*@__PURE__*/ new Vector3();
const _box$1 = /*@__PURE__*/ new Box3();
const _boxMorphTargets = /*@__PURE__*/ new Box3();
const _vector$7 = /*@__PURE__*/ new Vector3();

class BufferGeometry extends EventDispatcher {

	constructor() {

		super();

		this.isBufferGeometry = true;

		Object.defineProperty( this, 'id', { value: _id$1 ++ } );

		this.uuid = generateUUID();

		this.name = '';
		this.type = 'BufferGeometry';

		this.index = null;
		this.attributes = {};

		this.morphAttributes = {};
		this.morphTargetsRelative = false;

		this.groups = [];

		this.boundingBox = null;
		this.boundingSphere = null;

		this.drawRange = { start: 0, count: Infinity };

		this.userData = {};

	}

	getIndex() {

		return this.index;

	}

	setIndex( index ) {

		if ( Array.isArray( index ) ) {

			this.index = new ( arrayNeedsUint32( index ) ? Uint32BufferAttribute : Uint16BufferAttribute )( index, 1 );

		} else {

			this.index = index;

		}

		return this;

	}

	getAttribute( name ) {

		return this.attributes[ name ];

	}

	setAttribute( name, attribute ) {

		this.attributes[ name ] = attribute;

		return this;

	}

	deleteAttribute( name ) {

		delete this.attributes[ name ];

		return this;

	}

	hasAttribute( name ) {

		return this.attributes[ name ] !== undefined;

	}

	addGroup( start, count, materialIndex = 0 ) {

		this.groups.push( {

			start: start,
			count: count,
			materialIndex: materialIndex

		} );

	}

	clearGroups() {

		this.groups = [];

	}

	setDrawRange( start, count ) {

		this.drawRange.start = start;
		this.drawRange.count = count;

	}

	applyMatrix4( matrix ) {

		const position = this.attributes.position;

		if ( position !== undefined ) {

			position.applyMatrix4( matrix );

			position.needsUpdate = true;

		}

		const normal = this.attributes.normal;

		if ( normal !== undefined ) {

			const normalMatrix = new Matrix3().getNormalMatrix( matrix );

			normal.applyNormalMatrix( normalMatrix );

			normal.needsUpdate = true;

		}

		const tangent = this.attributes.tangent;

		if ( tangent !== undefined ) {

			tangent.transformDirection( matrix );

			tangent.needsUpdate = true;

		}

		if ( this.boundingBox !== null ) {

			this.computeBoundingBox();

		}

		if ( this.boundingSphere !== null ) {

			this.computeBoundingSphere();

		}

		return this;

	}

	applyQuaternion( q ) {

		_m1.makeRotationFromQuaternion( q );

		this.applyMatrix4( _m1 );

		return this;

	}

	rotateX( angle ) {

		// rotate geometry around world x-axis

		_m1.makeRotationX( angle );

		this.applyMatrix4( _m1 );

		return this;

	}

	rotateY( angle ) {

		// rotate geometry around world y-axis

		_m1.makeRotationY( angle );

		this.applyMatrix4( _m1 );

		return this;

	}

	rotateZ( angle ) {

		// rotate geometry around world z-axis

		_m1.makeRotationZ( angle );

		this.applyMatrix4( _m1 );

		return this;

	}

	translate( x, y, z ) {

		// translate geometry

		_m1.makeTranslation( x, y, z );

		this.applyMatrix4( _m1 );

		return this;

	}

	scale( x, y, z ) {

		// scale geometry

		_m1.makeScale( x, y, z );

		this.applyMatrix4( _m1 );

		return this;

	}

	lookAt( vector ) {

		_obj.lookAt( vector );

		_obj.updateMatrix();

		this.applyMatrix4( _obj.matrix );

		return this;

	}

	center() {

		this.computeBoundingBox();

		this.boundingBox.getCenter( _offset ).negate();

		this.translate( _offset.x, _offset.y, _offset.z );

		return this;

	}

	setFromPoints( points ) {

		const position = [];

		for ( let i = 0, l = points.length; i < l; i ++ ) {

			const point = points[ i ];
			position.push( point.x, point.y, point.z || 0 );

		}

		this.setAttribute( 'position', new Float32BufferAttribute( position, 3 ) );

		return this;

	}

	computeBoundingBox() {

		if ( this.boundingBox === null ) {

			this.boundingBox = new Box3();

		}

		const position = this.attributes.position;
		const morphAttributesPosition = this.morphAttributes.position;

		if ( position && position.isGLBufferAttribute ) {

			console.error( 'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this );

			this.boundingBox.set(
				new Vector3( - Infinity, - Infinity, - Infinity ),
				new Vector3( + Infinity, + Infinity, + Infinity )
			);

			return;

		}

		if ( position !== undefined ) {

			this.boundingBox.setFromBufferAttribute( position );

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					_box$1.setFromBufferAttribute( morphAttribute );

					if ( this.morphTargetsRelative ) {

						_vector$7.addVectors( this.boundingBox.min, _box$1.min );
						this.boundingBox.expandByPoint( _vector$7 );

						_vector$7.addVectors( this.boundingBox.max, _box$1.max );
						this.boundingBox.expandByPoint( _vector$7 );

					} else {

						this.boundingBox.expandByPoint( _box$1.min );
						this.boundingBox.expandByPoint( _box$1.max );

					}

				}

			}

		} else {

			this.boundingBox.makeEmpty();

		}

		if ( isNaN( this.boundingBox.min.x ) || isNaN( this.boundingBox.min.y ) || isNaN( this.boundingBox.min.z ) ) {

			console.error( 'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this );

		}

	}

	computeBoundingSphere() {

		if ( this.boundingSphere === null ) {

			this.boundingSphere = new Sphere();

		}

		const position = this.attributes.position;
		const morphAttributesPosition = this.morphAttributes.position;

		if ( position && position.isGLBufferAttribute ) {

			console.error( 'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this );

			this.boundingSphere.set( new Vector3(), Infinity );

			return;

		}

		if ( position ) {

			// first, find the center of the bounding sphere

			const center = this.boundingSphere.center;

			_box$1.setFromBufferAttribute( position );

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					_boxMorphTargets.setFromBufferAttribute( morphAttribute );

					if ( this.morphTargetsRelative ) {

						_vector$7.addVectors( _box$1.min, _boxMorphTargets.min );
						_box$1.expandByPoint( _vector$7 );

						_vector$7.addVectors( _box$1.max, _boxMorphTargets.max );
						_box$1.expandByPoint( _vector$7 );

					} else {

						_box$1.expandByPoint( _boxMorphTargets.min );
						_box$1.expandByPoint( _boxMorphTargets.max );

					}

				}

			}

			_box$1.getCenter( center );

			// second, try to find a boundingSphere with a radius smaller than the
			// boundingSphere of the boundingBox: sqrt(3) smaller in the best case

			let maxRadiusSq = 0;

			for ( let i = 0, il = position.count; i < il; i ++ ) {

				_vector$7.fromBufferAttribute( position, i );

				maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( _vector$7 ) );

			}

			// process morph attributes if present

			if ( morphAttributesPosition ) {

				for ( let i = 0, il = morphAttributesPosition.length; i < il; i ++ ) {

					const morphAttribute = morphAttributesPosition[ i ];
					const morphTargetsRelative = this.morphTargetsRelative;

					for ( let j = 0, jl = morphAttribute.count; j < jl; j ++ ) {

						_vector$7.fromBufferAttribute( morphAttribute, j );

						if ( morphTargetsRelative ) {

							_offset.fromBufferAttribute( position, j );
							_vector$7.add( _offset );

						}

						maxRadiusSq = Math.max( maxRadiusSq, center.distanceToSquared( _vector$7 ) );

					}

				}

			}

			this.boundingSphere.radius = Math.sqrt( maxRadiusSq );

			if ( isNaN( this.boundingSphere.radius ) ) {

				console.error( 'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this );

			}

		}

	}

	computeTangents() {

		const index = this.index;
		const attributes = this.attributes;

		// based on http://www.terathon.com/code/tangent.html
		// (per vertex tangents)

		if ( index === null ||
			 attributes.position === undefined ||
			 attributes.normal === undefined ||
			 attributes.uv === undefined ) {

			console.error( 'THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)' );
			return;

		}

		const indices = index.array;
		const positions = attributes.position.array;
		const normals = attributes.normal.array;
		const uvs = attributes.uv.array;

		const nVertices = positions.length / 3;

		if ( this.hasAttribute( 'tangent' ) === false ) {

			this.setAttribute( 'tangent', new BufferAttribute( new Float32Array( 4 * nVertices ), 4 ) );

		}

		const tangents = this.getAttribute( 'tangent' ).array;

		const tan1 = [], tan2 = [];

		for ( let i = 0; i < nVertices; i ++ ) {

			tan1[ i ] = new Vector3();
			tan2[ i ] = new Vector3();

		}

		const vA = new Vector3(),
			vB = new Vector3(),
			vC = new Vector3(),

			uvA = new Vector2(),
			uvB = new Vector2(),
			uvC = new Vector2(),

			sdir = new Vector3(),
			tdir = new Vector3();

		function handleTriangle( a, b, c ) {

			vA.fromArray( positions, a * 3 );
			vB.fromArray( positions, b * 3 );
			vC.fromArray( positions, c * 3 );

			uvA.fromArray( uvs, a * 2 );
			uvB.fromArray( uvs, b * 2 );
			uvC.fromArray( uvs, c * 2 );

			vB.sub( vA );
			vC.sub( vA );

			uvB.sub( uvA );
			uvC.sub( uvA );

			const r = 1.0 / ( uvB.x * uvC.y - uvC.x * uvB.y );

			// silently ignore degenerate uv triangles having coincident or colinear vertices

			if ( ! isFinite( r ) ) return;

			sdir.copy( vB ).multiplyScalar( uvC.y ).addScaledVector( vC, - uvB.y ).multiplyScalar( r );
			tdir.copy( vC ).multiplyScalar( uvB.x ).addScaledVector( vB, - uvC.x ).multiplyScalar( r );

			tan1[ a ].add( sdir );
			tan1[ b ].add( sdir );
			tan1[ c ].add( sdir );

			tan2[ a ].add( tdir );
			tan2[ b ].add( tdir );
			tan2[ c ].add( tdir );

		}

		let groups = this.groups;

		if ( groups.length === 0 ) {

			groups = [ {
				start: 0,
				count: indices.length
			} ];

		}

		for ( let i = 0, il = groups.length; i < il; ++ i ) {

			const group = groups[ i ];

			const start = group.start;
			const count = group.count;

			for ( let j = start, jl = start + count; j < jl; j += 3 ) {

				handleTriangle(
					indices[ j + 0 ],
					indices[ j + 1 ],
					indices[ j + 2 ]
				);

			}

		}

		const tmp = new Vector3(), tmp2 = new Vector3();
		const n = new Vector3(), n2 = new Vector3();

		function handleVertex( v ) {

			n.fromArray( normals, v * 3 );
			n2.copy( n );

			const t = tan1[ v ];

			// Gram-Schmidt orthogonalize

			tmp.copy( t );
			tmp.sub( n.multiplyScalar( n.dot( t ) ) ).normalize();

			// Calculate handedness

			tmp2.crossVectors( n2, t );
			const test = tmp2.dot( tan2[ v ] );
			const w = ( test < 0.0 ) ? - 1.0 : 1.0;

			tangents[ v * 4 ] = tmp.x;
			tangents[ v * 4 + 1 ] = tmp.y;
			tangents[ v * 4 + 2 ] = tmp.z;
			tangents[ v * 4 + 3 ] = w;

		}

		for ( let i = 0, il = groups.length; i < il; ++ i ) {

			const group = groups[ i ];

			const start = group.start;
			const count = group.count;

			for ( let j = start, jl = start + count; j < jl; j += 3 ) {

				handleVertex( indices[ j + 0 ] );
				handleVertex( indices[ j + 1 ] );
				handleVertex( indices[ j + 2 ] );

			}

		}

	}

	computeVertexNormals() {

		const index = this.index;
		const positionAttribute = this.getAttribute( 'position' );

		if ( positionAttribute !== undefined ) {

			let normalAttribute = this.getAttribute( 'normal' );

			if ( normalAttribute === undefined ) {

				normalAttribute = new BufferAttribute( new Float32Array( positionAttribute.count * 3 ), 3 );
				this.setAttribute( 'normal', normalAttribute );

			} else {

				// reset existing normals to zero

				for ( let i = 0, il = normalAttribute.count; i < il; i ++ ) {

					normalAttribute.setXYZ( i, 0, 0, 0 );

				}

			}

			const pA = new Vector3(), pB = new Vector3(), pC = new Vector3();
			const nA = new Vector3(), nB = new Vector3(), nC = new Vector3();
			const cb = new Vector3(), ab = new Vector3();

			// indexed elements

			if ( index ) {

				for ( let i = 0, il = index.count; i < il; i += 3 ) {

					const vA = index.getX( i + 0 );
					const vB = index.getX( i + 1 );
					const vC = index.getX( i + 2 );

					pA.fromBufferAttribute( positionAttribute, vA );
					pB.fromBufferAttribute( positionAttribute, vB );
					pC.fromBufferAttribute( positionAttribute, vC );

					cb.subVectors( pC, pB );
					ab.subVectors( pA, pB );
					cb.cross( ab );

					nA.fromBufferAttribute( normalAttribute, vA );
					nB.fromBufferAttribute( normalAttribute, vB );
					nC.fromBufferAttribute( normalAttribute, vC );

					nA.add( cb );
					nB.add( cb );
					nC.add( cb );

					normalAttribute.setXYZ( vA, nA.x, nA.y, nA.z );
					normalAttribute.setXYZ( vB, nB.x, nB.y, nB.z );
					normalAttribute.setXYZ( vC, nC.x, nC.y, nC.z );

				}

			} else {

				// non-indexed elements (unconnected triangle soup)

				for ( let i = 0, il = positionAttribute.count; i < il; i += 3 ) {

					pA.fromBufferAttribute( positionAttribute, i + 0 );
					pB.fromBufferAttribute( positionAttribute, i + 1 );
					pC.fromBufferAttribute( positionAttribute, i + 2 );

					cb.subVectors( pC, pB );
					ab.subVectors( pA, pB );
					cb.cross( ab );

					normalAttribute.setXYZ( i + 0, cb.x, cb.y, cb.z );
					normalAttribute.setXYZ( i + 1, cb.x, cb.y, cb.z );
					normalAttribute.setXYZ( i + 2, cb.x, cb.y, cb.z );

				}

			}

			this.normalizeNormals();

			normalAttribute.needsUpdate = true;

		}

	}

	merge() { // @deprecated, r144

		console.error( 'THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead.' );
		return this;

	}

	normalizeNormals() {

		const normals = this.attributes.normal;

		for ( let i = 0, il = normals.count; i < il; i ++ ) {

			_vector$7.fromBufferAttribute( normals, i );

			_vector$7.normalize();

			normals.setXYZ( i, _vector$7.x, _vector$7.y, _vector$7.z );

		}

	}

	toNonIndexed() {

		function convertBufferAttribute( attribute, indices ) {

			const array = attribute.array;
			const itemSize = attribute.itemSize;
			const normalized = attribute.normalized;

			const array2 = new array.constructor( indices.length * itemSize );

			let index = 0, index2 = 0;

			for ( let i = 0, l = indices.length; i < l; i ++ ) {

				if ( attribute.isInterleavedBufferAttribute ) {

					index = indices[ i ] * attribute.data.stride + attribute.offset;

				} else {

					index = indices[ i ] * itemSize;

				}

				for ( let j = 0; j < itemSize; j ++ ) {

					array2[ index2 ++ ] = array[ index ++ ];

				}

			}

			return new BufferAttribute( array2, itemSize, normalized );

		}

		//

		if ( this.index === null ) {

			console.warn( 'THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.' );
			return this;

		}

		const geometry2 = new BufferGeometry();

		const indices = this.index.array;
		const attributes = this.attributes;

		// attributes

		for ( const name in attributes ) {

			const attribute = attributes[ name ];

			const newAttribute = convertBufferAttribute( attribute, indices );

			geometry2.setAttribute( name, newAttribute );

		}

		// morph attributes

		const morphAttributes = this.morphAttributes;

		for ( const name in morphAttributes ) {

			const morphArray = [];
			const morphAttribute = morphAttributes[ name ]; // morphAttribute: array of Float32BufferAttributes

			for ( let i = 0, il = morphAttribute.length; i < il; i ++ ) {

				const attribute = morphAttribute[ i ];

				const newAttribute = convertBufferAttribute( attribute, indices );

				morphArray.push( newAttribute );

			}

			geometry2.morphAttributes[ name ] = morphArray;

		}

		geometry2.morphTargetsRelative = this.morphTargetsRelative;

		// groups

		const groups = this.groups;

		for ( let i = 0, l = groups.length; i < l; i ++ ) {

			const group = groups[ i ];
			geometry2.addGroup( group.start, group.count, group.materialIndex );

		}

		return geometry2;

	}

	toJSON() {

		const data = {
			metadata: {
				version: 4.5,
				type: 'BufferGeometry',
				generator: 'BufferGeometry.toJSON'
			}
		};

		// standard BufferGeometry serialization

		data.uuid = this.uuid;
		data.type = this.type;
		if ( this.name !== '' ) data.name = this.name;
		if ( Object.keys( this.userData ).length > 0 ) data.userData = this.userData;

		if ( this.parameters !== undefined ) {

			const parameters = this.parameters;

			for ( const key in parameters ) {

				if ( parameters[ key ] !== undefined ) data[ key ] = parameters[ key ];

			}

			return data;

		}

		// for simplicity the code assumes attributes are not shared across geometries, see #15811

		data.data = { attributes: {} };

		const index = this.index;

		if ( index !== null ) {

			data.data.index = {
				type: index.array.constructor.name,
				array: Array.prototype.slice.call( index.array )
			};

		}

		const attributes = this.attributes;

		for ( const key in attributes ) {

			const attribute = attributes[ key ];

			data.data.attributes[ key ] = attribute.toJSON( data.data );

		}

		const morphAttributes = {};
		let hasMorphAttributes = false;

		for ( const key in this.morphAttributes ) {

			const attributeArray = this.morphAttributes[ key ];

			const array = [];

			for ( let i = 0, il = attributeArray.length; i < il; i ++ ) {

				const attribute = attributeArray[ i ];

				array.push( attribute.toJSON( data.data ) );

			}

			if ( array.length > 0 ) {

				morphAttributes[ key ] = array;

				hasMorphAttributes = true;

			}

		}

		if ( hasMorphAttributes ) {

			data.data.morphAttributes = morphAttributes;
			data.data.morphTargetsRelative = this.morphTargetsRelative;

		}

		const groups = this.groups;

		if ( groups.length > 0 ) {

			data.data.groups = JSON.parse( JSON.stringify( groups ) );

		}

		const boundingSphere = this.boundingSphere;

		if ( boundingSphere !== null ) {

			data.data.boundingSphere = {
				center: boundingSphere.center.toArray(),
				radius: boundingSphere.radius
			};

		}

		return data;

	}

	clone() {

		return new this.constructor().copy( this );

	}

	copy( source ) {

		// reset

		this.index = null;
		this.attributes = {};
		this.morphAttributes = {};
		this.groups = [];
		this.boundingBox = null;
		this.boundingSphere = null;

		// used for storing cloned, shared data

		const data = {};

		// name

		this.name = source.name;

		// index

		const index = source.index;

		if ( index !== null ) {

			this.setIndex( index.clone( data ) );

		}

		// attributes

		const attributes = source.attributes;

		for ( const name in attributes ) {

			const attribute = attributes[ name ];
			this.setAttribute( name, attribute.clone( data ) );

		}

		// morph attributes

		const morphAttributes = source.morphAttributes;

		for ( const name in morphAttributes ) {

			const array = [];
			const morphAttribute = morphAttributes[ name ]; // morphAttribute: array of Float32BufferAttributes

			for ( let i = 0, l = morphAttribute.length; i < l; i ++ ) {

				array.push( morphAttribute[ i ].clone( data ) );

			}

			this.morphAttributes[ name ] = array;

		}

		this.morphTargetsRelative = source.morphTargetsRelative;

		// groups

		const groups = source.groups;

		for ( let i = 0, l = groups.length; i < l; i ++ ) {

			const group = groups[ i ];
			this.addGroup( group.start, group.count, group.materialIndex );

		}

		// bounding box

		const boundingBox = source.boundingBox;

		if ( boundingBox !== null ) {

			this.boundingBox = boundingBox.clone();

		}

		// bounding sphere

		const boundingSphere = source.boundingSphere;

		if ( boundingSphere !== null ) {

			this.boundingSphere = boundingSphere.clone();

		}

		// draw range

		this.drawRange.start = source.drawRange.start;
		this.drawRange.count = source.drawRange.count;

		// user data

		this.userData = source.userData;

		return this;

	}

	dispose() {

		this.dispatchEvent( { type: 'dispose' } );

	}

}

class CylinderGeometry extends BufferGeometry {

	constructor( radiusTop = 1, radiusBottom = 1, height = 1, radialSegments = 32, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2 ) {

		super();

		this.type = 'CylinderGeometry';

		this.parameters = {
			radiusTop: radiusTop,
			radiusBottom: radiusBottom,
			height: height,
			radialSegments: radialSegments,
			heightSegments: heightSegments,
			openEnded: openEnded,
			thetaStart: thetaStart,
			thetaLength: thetaLength
		};

		const scope = this;

		radialSegments = Math.floor( radialSegments );
		heightSegments = Math.floor( heightSegments );

		// buffers

		const indices = [];
		const vertices = [];
		const normals = [];
		const uvs = [];

		// helper variables

		let index = 0;
		const indexArray = [];
		const halfHeight = height / 2;
		let groupStart = 0;

		// generate geometry

		generateTorso();

		if ( openEnded === false ) {

			if ( radiusTop > 0 ) generateCap( true );
			if ( radiusBottom > 0 ) generateCap( false );

		}

		// build geometry

		this.setIndex( indices );
		this.setAttribute( 'position', new Float32BufferAttribute( vertices, 3 ) );
		this.setAttribute( 'normal', new Float32BufferAttribute( normals, 3 ) );
		this.setAttribute( 'uv', new Float32BufferAttribute( uvs, 2 ) );

		function generateTorso() {

			const normal = new Vector3();
			const vertex = new Vector3();

			let groupCount = 0;

			// this will be used to calculate the normal
			const slope = ( radiusBottom - radiusTop ) / height;

			// generate vertices, normals and uvs

			for ( let y = 0; y <= heightSegments; y ++ ) {

				const indexRow = [];

				const v = y / heightSegments;

				// calculate the radius of the current row

				const radius = v * ( radiusBottom - radiusTop ) + radiusTop;

				for ( let x = 0; x <= radialSegments; x ++ ) {

					const u = x / radialSegments;

					const theta = u * thetaLength + thetaStart;

					const sinTheta = Math.sin( theta );
					const cosTheta = Math.cos( theta );

					// vertex

					vertex.x = radius * sinTheta;
					vertex.y = - v * height + halfHeight;
					vertex.z = radius * cosTheta;
					vertices.push( vertex.x, vertex.y, vertex.z );

					// normal

					normal.set( sinTheta, slope, cosTheta ).normalize();
					normals.push( normal.x, normal.y, normal.z );

					// uv

					uvs.push( u, 1 - v );

					// save index of vertex in respective row

					indexRow.push( index ++ );

				}

				// now save vertices of the row in our index array

				indexArray.push( indexRow );

			}

			// generate indices

			for ( let x = 0; x < radialSegments; x ++ ) {

				for ( let y = 0; y < heightSegments; y ++ ) {

					// we use the index array to access the correct indices

					const a = indexArray[ y ][ x ];
					const b = indexArray[ y + 1 ][ x ];
					const c = indexArray[ y + 1 ][ x + 1 ];
					const d = indexArray[ y ][ x + 1 ];

					// faces

					indices.push( a, b, d );
					indices.push( b, c, d );

					// update group counter

					groupCount += 6;

				}

			}

			// add a group to the geometry. this will ensure multi material support

			scope.addGroup( groupStart, groupCount, 0 );

			// calculate new start value for groups

			groupStart += groupCount;

		}

		function generateCap( top ) {

			// save the index of the first center vertex
			const centerIndexStart = index;

			const uv = new Vector2();
			const vertex = new Vector3();

			let groupCount = 0;

			const radius = ( top === true ) ? radiusTop : radiusBottom;
			const sign = ( top === true ) ? 1 : - 1;

			// first we generate the center vertex data of the cap.
			// because the geometry needs one set of uvs per face,
			// we must generate a center vertex per face/segment

			for ( let x = 1; x <= radialSegments; x ++ ) {

				// vertex

				vertices.push( 0, halfHeight * sign, 0 );

				// normal

				normals.push( 0, sign, 0 );

				// uv

				uvs.push( 0.5, 0.5 );

				// increase index

				index ++;

			}

			// save the index of the last center vertex
			const centerIndexEnd = index;

			// now we generate the surrounding vertices, normals and uvs

			for ( let x = 0; x <= radialSegments; x ++ ) {

				const u = x / radialSegments;
				const theta = u * thetaLength + thetaStart;

				const cosTheta = Math.cos( theta );
				const sinTheta = Math.sin( theta );

				// vertex

				vertex.x = radius * sinTheta;
				vertex.y = halfHeight * sign;
				vertex.z = radius * cosTheta;
				vertices.push( vertex.x, vertex.y, vertex.z );

				// normal

				normals.push( 0, sign, 0 );

				// uv

				uv.x = ( cosTheta * 0.5 ) + 0.5;
				uv.y = ( sinTheta * 0.5 * sign ) + 0.5;
				uvs.push( uv.x, uv.y );

				// increase index

				index ++;

			}

			// generate indices

			for ( let x = 0; x < radialSegments; x ++ ) {

				const c = centerIndexStart + x;
				const i = centerIndexEnd + x;

				if ( top === true ) {

					// face top

					indices.push( i, i + 1, c );

				} else {

					// face bottom

					indices.push( i + 1, i, c );

				}

				groupCount += 3;

			}

			// add a group to the geometry. this will ensure multi material support

			scope.addGroup( groupStart, groupCount, top === true ? 1 : 2 );

			// calculate new start value for groups

			groupStart += groupCount;

		}

	}

	copy( source ) {

		super.copy( source );

		this.parameters = Object.assign( {}, source.parameters );

		return this;

	}

	static fromJSON( data ) {

		return new CylinderGeometry( data.radiusTop, data.radiusBottom, data.height, data.radialSegments, data.heightSegments, data.openEnded, data.thetaStart, data.thetaLength );

	}

}

class ConeGeometry extends CylinderGeometry {

	constructor( radius = 1, height = 1, radialSegments = 32, heightSegments = 1, openEnded = false, thetaStart = 0, thetaLength = Math.PI * 2 ) {

		super( 0, radius, height, radialSegments, heightSegments, openEnded, thetaStart, thetaLength );

		this.type = 'ConeGeometry';

		this.parameters = {
			radius: radius,
			height: height,
			radialSegments: radialSegments,
			heightSegments: heightSegments,
			openEnded: openEnded,
			thetaStart: thetaStart,
			thetaLength: thetaLength
		};

	}

	static fromJSON( data ) {

		return new ConeGeometry( data.radius, data.height, data.radialSegments, data.heightSegments, data.openEnded, data.thetaStart, data.thetaLength );

	}

}

if ( typeof __THREE_DEVTOOLS__ !== 'undefined' ) {

	__THREE_DEVTOOLS__.dispatchEvent( new CustomEvent( 'register', { detail: {
		revision: REVISION,
	} } ) );

}

if ( typeof window !== 'undefined' ) {

	if ( window.__THREE__ ) {

		console.warn( 'WARNING: Multiple instances of Three.js being imported.' );

	} else {

		window.__THREE__ = REVISION;

	}

}

// Função auxiliar para converter a BufferGeometry Three.js para o formato DXF
function convertBufferGeometryToDXF(geometry) {
    const dxfWriter = new ln();
    const vertices = geometry.getAttribute('position');
    const faces = geometry.getIndex();

    // Caso tenha faces definidas, usar 3DFACE para representar a geometria
    if (faces !== null) {
        for (let i = 0; i < faces.count; i += 3) {
            // Obtém os índices dos vértices de cada face
            const indices = [faces.getX(i), faces.getX(i + 1), faces.getX(i + 2)];

            // Obtém os vértices usando os índices
            const points = indices.map(index => {
                return t(
                    vertices.getX(index),
                    vertices.getY(index),
                    vertices.getZ(index)
                );
            });

            // Adiciona a face ao DXF. Repetir o último ponto para faces planas.
            dxfWriter.add3dFace(points[0], points[1], points[2], points[2]);
        }
    } else {
        // Caso contrário, usar LINHAS para representar a geometria
        // Este exemplo assume que os vértices são pares de pontos de linha
        for (let i = 0; i < vertices.count; i += 6) {
            const start = t(vertices.getX(i), vertices.getY(i), vertices.getZ(i));
            const end = t(vertices.getX(i + 3), vertices.getY(i + 3), vertices.getZ(i + 3));
            dxfWriter.addLine(start, end);
        }
    }

    return dxfWriter.stringify();
}

// Exemplo de uso
//const geometry = new THREE.BoxGeometry(1, 1, 1); // Substituir por sua própria BufferGeometry
const geometry = new ConeGeometry(5, 10, 4); // raio, altura, e número de lados na base
geometry.rotateX(Math.PI / 4); // Rotacionar a pirâmide para alinhar um dos cantos com o eixo Y
geometry.scale(2, 2, 2); // Escala
const dxfData = convertBufferGeometryToDXF(geometry);
console.log(dxfData);


/////////////////////////////////////////////

function downloadDXF(content, filename) {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
}

/////////////////////////////////////////////
document.getElementById('exportBtn').addEventListener('click', function() {
    // Exemplo de criação de uma geometria simples Three.js
    //const geometry = new THREE.BoxGeometry(1, 1, 1);

    // Converter BufferGeometry para DXF
    const dxfContent = convertBufferGeometryToDXF(geometry);

    // Iniciar o download do arquivo DXF
    downloadDXF(dxfContent, 'geometria.dxf');
});
