// ==UserScript==
// @name        C4 FMOs
// @namespace   C4FMOS
// @match       *://cableone.etadirect.com/*
// @grant       none
// @version     1.0
// @author      Dan M
// @description 1/4/2025, 3:28:24 PM
// @run-at       document-idle
// @require   https://cdn.jsdelivr.net/npm/@violentmonkey/shortcut@1
// @require   https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2
// @require   https://cdn.jsdelivr.net/gh/jquery/jquery/dist/jquery.min.js
// ==/UserScript==

async function getClipboardContent() {
    try {
        const text = await navigator.clipboard.readText();
        //console.log('Clipboard content:', text);
        //alert('Clipboard content: ' + text);
        return text;
    } catch (err) {
        console.error('Failed to read clipboard contents:', err);
    }
}


function copyText(stringText) {
  navigator.clipboard.writeText(stringText);
  console.log("Copied");
}


async function waitForElement(selector, callback) {
    const observer = new MutationObserver((mutations, observer) => {
        const element = document.querySelector(selector);
        if (element) {
            observer.disconnect();
            callback(element);
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
}

async function workOrderType(wot){
  document.querySelector("[data-label='aworktype'").click();
  waitForElement(wot, (element) => {
    console.log('Element exists:', element);
    // Perform actions on the element
    document.querySelector(wot).click();
  });
}

async function allDay(){
  document.querySelector("[aria-label='Appointment Arrival Window'").click();
}

async function postionInRoute(pir){
  document.querySelector("[aria-label='Position in Route'").click();
  await waitForElement(pir, (element) => {
  console.log('Element exists:', element);
    // Perform actions on the element
    document.querySelector(pir).click();
  });
  await new Promise(resolve => setTimeout(resolve, 100));
  document.querySelector("[data-action='confirm'").click();
}

async function durationMins(){
  document.querySelector("[data-label='length[minutes]'").click();
  await waitForElement("[aria-label='30'", (element) => {
    console.log('Element exists:', element);
    // Perform actions on the element
    document.querySelector("[aria-label='30'").click();
  });
}

async function durationHours(){
  document.querySelector("[aria-label='Duration (min.) hours Increment'").click();
}

async function fmoActivityCode(actcode){
  document.querySelector("[data-label='fmo_activity_code'").click();
  await waitForElement(actcode, (element) => {
  console.log('Element exists:', element);
    // Perform actions on the element
    document.querySelector(actcode).click();
  });
}

async function fmoAssetType(assetType){
  document.querySelector("[data-label='fmo_asset_type'").click();
  waitForElement("[aria-label='Plant (Other)'", (element) => {
    console.log('Element exists:', element);
    // Perform actions on the element
    document.querySelector(assetType).click();
  });
}

async function outageDetails(oBaconLink, oCity, oState, oZip, oIssue, ocmts, onode){
  document.querySelector("[aria-label='Bacon, Required'").value = oBaconLink.trim();
  document.querySelector("[aria-label='Bacon, Required'").dispatchEvent(new Event('input'));
  document.querySelector("[aria-label='Node ID, Required'").value = onode.trim();
  document.querySelector("[aria-label='Node ID, Required'").dispatchEvent(new Event('input'));
  document.querySelector("[aria-label='Reported Issue, Required'").value = oIssue.trim();
  document.querySelector("[aria-label='Reported Issue, Required'").dispatchEvent(new Event('input'));
  document.querySelector("[aria-label='CMTS and Card(s), Required'").value = ocmts.trim();
  document.querySelector("[aria-label='CMTS and Card(s), Required'").dispatchEvent(new Event('input'));
  document.querySelector("[aria-label='City, Required'").value = oCity.trim();
  document.querySelector("[aria-label='City, Required'").dispatchEvent(new Event('input'));
  document.querySelector("[aria-label='State, Required'").value = oState.trim();
  document.querySelector("[aria-label='State, Required'").dispatchEvent(new Event('input'));
  document.querySelector("[aria-label='ZIP/Postal Code'").value = oZip.trim();
  document.querySelector("[aria-label='ZIP/Postal Code'").dispatchEvent(new Event('input'));
}

async function fsaDetails(oComments, oAddress, oCity, oState, oZip){
  document.querySelector("[aria-label='Assist Comments'").value = oComments;
  document.querySelector("[aria-label='Assist Comments'").dispatchEvent(new Event('input'));
  document.querySelector("[aria-label='Address'").value = oAddress;
  document.querySelector("[aria-label='Address'").dispatchEvent(new Event('input'));
  document.querySelector("[aria-label='City'").value = oCity.trim();
  document.querySelector("[aria-label='City'").dispatchEvent(new Event('input'));
  document.querySelector("[aria-label='State'").value = oState.trim();
  document.querySelector("[aria-label='State'").dispatchEvent(new Event('input'));
  document.querySelector("[aria-label='ZIP/Postal Code'").value = oZip.trim();
  document.querySelector("[aria-label='ZIP/Postal Code'").dispatchEvent(new Event('input'));
}


async function meetingDetails(oAddress, oCity, oState, oZip){
  document.querySelector("[aria-label='Address, Required'").value = oAddress;
  document.querySelector("[aria-label='Address, Required'").dispatchEvent(new Event('input'));
  document.querySelector("[aria-label='City, Required'").value = oCity.trim();
  document.querySelector("[aria-label='City, Required'").dispatchEvent(new Event('input'));
  document.querySelector("[aria-label='State, Required'").value = oState.trim();
  document.querySelector("[aria-label='State, Required'").dispatchEvent(new Event('input'));
  document.querySelector("[aria-label='ZIP/Postal Code'").value = oZip.trim();
  document.querySelector("[aria-label='ZIP/Postal Code'").dispatchEvent(new Event('input'));
}


async function norfL(locate){

}


async function outageWorkOrderType(){
  console.log(document.title);
  if (document.title.includes("Add activity")){
    console.log("True");
    await workOrderType("[aria-label='[M] Outage'");
    await allDay();
    await fmoActivityCode("[aria-label='Outage - Level 1'");
    await postionInRoute("[id='aid--1");

    let cityData = ["ADA OK 74820", "ALBION IL 62806", "ALEXANDRIA AL 36250", "ALEXANDRIA NE 68303", "ALLEN NE 68710", "ALLENDALE IL 62410", "ALLIGATOR MS 38720", "ALLISON IL 62439", "ALTAMONT KS 67330", "ALTUS OK 73521", "ALVIN TX 77511",
                    "AMERICAN FALLS ID 83211", "AMMON ID 83406", "AMO IN 46103", "ANGLETON TX 77515", "ANNA IL 62906", "ANNA TX 75409", "ANNISTON AL 36201", "ARANSAS PASS TX 78335", "ARDMORE OK 73401", "ARGENTA IL 62501", "ARRINGTON IL 62886",
                    "ASHDOWN AR 71822", "ASHWOOD TX 77482", "ASOTIN WA 99402", "ASSUMPTION IL 62510", "ATTICA IN 47918", "AUBURN IL 62615", "AVIMOR ID 83714", "BAILEY'S PRAIRIE TX 77515", "BARGERSVILLE IN 46106", "BARREN IL 62812",
                    "BARTHOLOMEW CO. IN 47201", "BARTLESVILLE OK 74006", "BASALT ID 83218", "BATESVILLE MS 38606", "BATTLE CREEK NE 68715", "BAXTER SPRINGS KS 66713", "BAY ST. LOUIS MS 39520", "BAY CITY TX 77404", "BEAR CREEK TWNSHP IL 62546",
                    "BEAR GROVE  IL 62262", "BEAUMONT TX 77701", "BECKHAM OK 73644", "BEDFORD IN 47421", "BEEMER NE 68716", "BELGIUM IL 61883", "BELLE CHASSE LA 70037", "BELLEVILLE IL 62220", "BELLMONT IL 62811", "BELLS TX 75414", "BELLVILLE TX 77418",
                    "BENTON IL 62812", "BENTON MS 39039", "BERMEN IL 62233", "BERNIE MO 63822", "BESSIE OK 73622", "BETHANY IL 61914", "BICKNELL IN 47512", "BIG MOUND IL 62809", "BILOXI MS 39530", "BISBEE AZ 85603", "BLACKFOOT ID 83221",
                    "BLACKWELL OK 74631", "BLAIR OK 73526", "BLAIRSVILLE IL 62918", "BLANCHARD LA 71107", "BLANFORD IN 47831", "BLESSING TX 77419", "BLOOMFIELD MO 63825", "BLOOMINGDALE IN 47832", "BLOOMINGTON IN 47405", "BLOUNT IL 61832",
                    "BLUE MOUND IL 62513", "BOBO MS 38614", "BOGUE CHITTO MS 39629", "BOIS D'ARC TWNSHP IL 62533", "BOISE ID 83701", "BOLING-IAGO TX 77420", "BOND CO. IL 62246", "BONHAM TX 75418", "BORGER TX 79007", "BOYLE MS 38730",
                    "BRAGG CITY MO 63827", "BRAGGADOCIO MO 63826", "BRAY OK 73012", "BRAZIL IN 47834", "BRAZORIA TX 77422", "BREMEN IL 62233", "BRIDGEPORT IL 62417", "BRIGHTON IL 62012", "BRINGHURST IN 46913", "BROOKHAVEN MS 39601",
                    "BROOKLYN IN 46111", "BROWN CO. IN 47201", "BROWNING IL 62624", "BROWNS IL 62818", "BROWNSTOWN IL 62418", "BRUCEVILLE IN 47516", "BRUSHY MOUND IL 62033", "BUCKATUNNA MS 39322", "BUCKHORN TX 77418", "BUCKNER IL 62819",
                    "BUHL ID 83316", "BURLEY ID 83318", "BURLINGTON IN 46915", "BURNETT IN 47805", "BURTON TX 77835", "BUTLER GROVE IL 62015", "BYNG OK 74820", "CADDO PARISH LA 71106", "CAHOKIA TWNSHP IL 62033", "CAIRO IL 62914",
                    "CALDWELL ID 83607", "CALDWELL ID 83607", "CALDWELL PARRISH LA 71418", "CALEDONIA MS 39740", "CALHOUN LA 71225", "CAMBY IN 46113", "CAMDEN IN 46917", "CAMP ATTERBURY IN 46131", "CAMPBELL MO 63933", "CANEY KS 67333",
                    "CARBON IN 47837", "CARDONIA IN 47834", "CARLINVILLE IL 62626", "CARMI IL 62821", "CARROLL  NE 68723", "CARROLL CO. IN 46920", "CARROLLTON IL 62016", "CARROLLTON MS 38917", "CARTER OK 73627", "CARTERSBURG IN 46168",
                    "CARTERVILLE  MO 64835", "CASCADE ID 83611", "CASEYVILLE MS 39191", "CATLIN IL 61817", "CAYUGA IL 61764", "CENTRAL AZ 85531", "CENTRAL TWNSHP IL 62246", "CHANUTE KS 66720", "CHARLESTON MS 38921", "CHERRYVALE KS 67335",
                    "CHESTER IL 62233", "CHINA TX 77613", "CHINO VALLEY AZ 86323", "CHRISMAN IL 61924", "CHRISTIAN CO. IL 62568", "CHRISTOPHER IL 62822", "CHRISTY IL 62466", "CHUBBUCK ID 83202", "CLAIBORNE PARISH LA 71055", "CLAIRBORNE LA 71291",
                    "CLARA MS 39324", "CLAREMONT IL 62421", "CLARKDALE AZ 86324", "CLARKE COUNTY MS 39355", "CLARKS LA 71415", "CLARKSDALE MS 38614", "CLARKSTON WA 99403", "CLARKTON MO 63837", "CLAY CO. IN 47834", "CLAY CO. AR 72454",
                    "CLAYPOOL AZ 85532", "CLAYTON IN 46118", "CLEMVILLE TX 77414", "CLEVELAND MS 38732", "CLEVELAND TX 77327", "CLEVELAND KS 64734", "CLIFTON AZ 85533", "CLINTON OK 73601", "CLINTON IN 47842", "CLOVERDALE IN 46120", "CLOVERLAND IN 47834",
                    "COAHOMA MS 38617", "COALMONT IN 47845", "COALTON IL 62075", "COATESVILLE IN 46121", "COELLO IL 62825", "COFFEE IL 62017", "COFFEEVILLE MS 38922", "COFFEYVILLE KS 67337", "COLUMBIA LA 71418", "COLUMBIA LAKES TX 77486",
                    "COLUMBUS MS 39701", "COLUMBUS IN 47201", "COLUMBUS KS 66725", "COLUMBUS AFB MS 39701", "COMMERCE OK 74339", "CONCORD NE 68728", "COPAN OK 74022", "CORDELL OK 73632", "CORNVILLE AZ 86325", "CORPUS CHRISTI TX 78336",
                    "COTTONWOOD AZ 86326", "COURTLAND MS 38620", "COVINGTON IN 47932", "CROOK IL 62859", "CROSSVILLE IL 62827", "CROWDER MS 38622", "CULLEN LA 71021", "CURTIS STATION MS 38606", "CUSTER CITY OK 73639", "DAHLGREN IL 62828",
                    "DAKOTA CITY NE 68731", "DAKOTA DUNES SD 57049", "DALTON CITY IL 61925", "DAMON TX 77430", "DANBURY TX 77534", "DANCIGER TX 77431", "DANEVANG TX 77432", "DANVILLE IL 61832", "DAVIESS CO. IN 47501", "DAVIS OK 73030",
                    "DE SOTO PARRISH LA 71052", "DECATUR IL 62521", "DELHI LA 71232", "DELPHI IN 46923", "DELTA LA 71233", "DENISON TX 75020", "DENISON IL 62423", "DEWEY AZ 86327", "DEWEY OK 74029", "DEXTER MO 63841", "DEXTER NM 88230",
                    "DIAMONDHEAD MS 39525", "D'IBERVILLE MS 39540", "DIBERVILLE MS 39540","DICKSON OK 73401", "DILWORTH MN 56529", "DOCKERY MS 38732", "DONNELLSON IL 62019", "DONNELLY ID 83615", "DORA TWNSHP IL 61925", "DORCHESTER TX 75459",
                    "DOWNSVILLE LA 71234", "DREW LA 71291", "DREW MS 38737", "DU QUOIN IL 62832", "DUCK HILL MS 38925", "DUENWEG MO 64841", "DUGGER IN 47848", "DUMAS TX 79029", "DUNCAN OK 73533", "DUNCAN MS 38740", "DUNDAS IL 62425",
                    "DUNN LA 71232", "DUQUESNE MO 64801", "DURANT MS 39063", "DYERSBURG TN 38024", "EAGLE ID 83616", "EAST BERNARD TX 77435", "EAST CARROL PARISH LA 71254", "EAST FORK IL 62017", "EAST GILLESPIE IL 62033", "EAST GLENN IN 47803",
                    "EAST GRAYSON TX 75092", "EASTABOGA AL 36260", "ECTOR TX 75439", "EDGAR IL 61924", "EDINBURGH IN 46124", "EDNA TX 77957", "EDWARDSPORT IN 47528", "EL CAMPO TX 77437", "EL NORA IN 47529", "ELK CITY OK 73644", "ELLERY IL 62833",
                    "ELMATON TX 77440", "ELMER OK 73539", "ELNORA IN 47529", "ELWOOD IL 60421", "EMMETT ID 83617", "EMPORIA KS 66801", "ENFIELD IL 62835", "ENTERPRISE MS 39330", "ERICK OK 73645", "ERIE KS 66733", "ESSEX MO 63846", "EWING IL 62836",
                    "FAIRFIELD IL 62837", "FAIRVIEW PARK IN 44126", "FARGO ND 58103", "FARMERSBURG IN 47850", "FARMERSVILLE IL 62533", "FARMERVILLE LA 71241", "FAYETTE MS 39069", "FAYETTE CO. IL 62471", "FERNWOOD MS 39635", "FIDELITY IL 62030",
                    "FILER ID 83328", "FINLEY TN 38030", "FIRTH ID 83236", "FLORA IN 46929", "FONTANET IN 47851", "FORT HALL ID 83203", "FORT MCCLELLAN AL 36205", "FOUKE AR 71837", "FOUNTAIN CO. IL 62295", "FOUR MILE TWNSHP IL 62851", "FOX IL 60020",
                    "FRANCIS OK 74844", "FRANKFORT IN 46041", "FRANKLIN CO. IL 62896", "FREDERICK OK 73542", "FREELANDVILLE IN 47535", "FRENCH LICK IN 47432", "FRENCH CREEK IL 62844", "FRIENDSHIP TN 38034", "FRIENDSWOOD TX 77546", "FRITCH TX 79036",
                    "FRITCHTON IN 47591", "FRUITLAND ID 83619", "GADSDEN AL 35901", "GANADO TX 77962", "GARDEN CITY ID 83714", "GAUTIER MS 39553", "GENOA AR 71840", "GEORGETOWN IL 61846", "GIBSON MO 63847", "GIBSON CO. IN 47670", "GIDDINGS TX 78942",
                    "GIDEON MO 63848", "GILBERT LA 71336", "GILLESPIE IL 62033", "GIRARD LA 71269", "GIRARD IL 62640", "GLENCOE AL 35905", "GLOBE AZ 85501", "GLYNDON MN 56547", "GNAWBONE IN 47448", "GOODE IL 62884", "GOODING ID 83330",
                    "GOODMAN MS 39079", "GORDONVILLE TX 76245", "GRAND CANE LA 71032", "GRAND PAPPY MARINA TX 75020", "GRANITE OK 73547", "GRANT IL 60940", "GRAYRIDGE MO 63850", "GRAYSON LA 71435", "GRAYVILLE IL 62844", "GREEN CO. AR 72450",
                    "GREENCASTLE IN 46135", "GREENLEAF ID 83626", "GREENTOP MO 63546", "GREENVILLE OK 73043", "GREENVILLE IL 62246", "GREENWAY AR 72430", "GREENWOOD IN 46142", "GREGORY TX 78359", "GRENADA MS 38901", "GRISHAM TWNSHP IL 62019",
                    "GROVER IL 62837", "GULFPORT MS 39501", "GUY TX 77444", "HADAR NE 68701", "HAGERMAN ID 83332", "HALLETTSVILLE TX 77964", "HALLOWELL KS 66725", "HAMILTON MS 39746", "HANSEN ID 83334", "HARDIN TX 77561", "HARMONY IN 47853",
                    "HARVEL IL 62538", "HAWTHORNE IL 60047", "HAYNESVILLE LA 71038", "HAYTI HEIGHTS MO 63851", "HAZELWOOD IN 63042", "HELENA MS 39567", "HEMPSTEAD TX 77445", "HENDERSON TX 75652", "HENDRICKS IN 56136", "HEWITTVILLE IL 62568",
                    "HEYBURN ID 83336", "HIGHLAND IL 62249", "HIGHPORT MARINA TX 75076", "HIGHTOWER TX 77327", "HILLISTER TX 77624", "HILLSBORO IN 47949", "HILLSBORO IL 62049", "HILLYARD TWNSHP IL 62685", "HOBART OK 73651", "HOBSON CITY AL 36201",
                    "HOLBROOK AZ 86025", "HOLCOMB MO 63852", "HOLCOMB MS 38940", "HOLIDAY LAKES TX 77515", "HOLLANDALE MS 38748", "HOMEDALE ID 83628", "HOMER LA 71040", "HOMESTOWN MO 63879", "HONEY POINT TWNSHP IL 62056", "HOOKS TX 75561",
                    "HOOPESTON IL 60942", "HORACE ND 58047", "HORSESHOE BEND ID 83629", "HOSKINS NE 68740", "HOWE TX 75459", "HULL TX 77564", "HUMBOLDT AZ  86329", "HUNGERFORD TX 77448", "HUNTER IL 61944", "HUNTER'S COVE TX 76844", "HURDLAND MO 63547",
                    "HURLEY MS 39555", "HURON IN 47437", "HYMERA IN 47855", "IDAHO FALLS ID 83401", "INDEPENDENCE KS 67301", "INDIAN CREEK IL 60061", "INGLESIDE TX 78362", "INKOM ID 83245", "IONA ID 83427", "IOWA COLONY TX 77583", "IRONTON LA 70083",
                    "IROQUOIS IL 60945", "IRVING IL 62051", "ITTA BENA MS 38941", "JACKSON CO. TX 77957", "JACKSON COUNTY MS 39564", "JACKSONVILLE AL 36265", "JASONVILLE IN 47438", "JASPER IL 62837", "JASPER TX 75951", "JEFFERSON SD 57038",
                    "JEROME ID 83338", "JERSEY IL 62035", "JERSEYVILLE IL 62052", "JESUIT BEND LA 70037", "JOHNSON TWNSHP IL 62555", "JONES CREEK TX 77541", "JONESBORO IL 62952", "JOPLIN MO 64801", "JOSEPH CITY AZ 86032", "KAMEY TX 77979",
                    "KANE IL 62054", "KENDLETON TX 77451", "KENNETT MO 63857", "KILGORE TX 75662", "KILMICHAEL MS 39747", "KILN MS 39556", "KIMBERLY ID 83341", "KINGSVILLE TX 78363", "KIRBYVILLE TX 75956", "KIRKSVILLE MO 63501", "KNIGHTS PRAIRIE IL 62859",
                    "KNIGHTSVILLE IN 47857", "KNOLLWOOD TX 75092", "KNOX CO. IN 47535", "KOUNTZE TX 77625", "KUNA ID 83634", "LA GRANGE TX 78945", "LA GRANGE IL 60525", "LA PLATA MO 63549", "LAFE AR 72436", "LAKE ARTHUR NM 88253",
                    "LAKE PROVIDENCE LA 71254", "LAKESIDE AZ 85929", "LAMBERT MS 38643", "LANE CITY TX 77453", "LAWRENCEVILLE IL 62439", "LEARY TX 75561", "LEAWOOD MO 64804", "LEECH IL 62833", "LELAND MS 38756", "LENEXA KS 66219", "LENOX TN 38047",
                    "LENZBURG IL 62255", "LEWISTON ID 83501", "LEXINGTON MS 39095", "LIBERTY TX 77575", "LINCOLN AL 35096", "LINDEN AZ 85901", "LINTON IN 47441", "LITCHFIELD IL 62056", "LOCKE STATION MS 38606", "LOCUST IL 62555", "LOGANSPORT LA 71049",
                    "LONE GROVE OK 73443", "LONE WOLF OK 73655", "LONG BEACH MS 39560", "LONGVIEW TX 75601", "LOOGOOTEE IN 47553", "LOUISE TX 77455", "LOVE JOY IL 62059", "LUCEDALE MS 39452", "LUELLA TX 75090", "LYFORD IN 47874", "LYON MS 38645",
                    "MACON IL 62544", "MACON CO. IL 62544", "MADILL OK 73446", "MADISON NE 68748", "MADISON PARISH LA 71282", "MAGNOLIA MS 39652", "MALDEN MO 63863", "MANCHESTER IL 62663", "MANDEVILLE AR 71854", "MANGUM OK 73554", "MANHATTAN IN 46171",
                    "MANNSVILLE OK 73447", "MANSFIELD LA 71052", "MANVEL TX 77578", "MARIETTA OK 73448", "MARIGOLD MS 38759", "MARISSA IL 62257", "MARKHAM TX 77456", "MARKS MS 38646", "MARLOW OK 73055", "MARMADUKE AR 72443", "MARROWBONE IL 61951",
                    "MARSHALL IN 47859", "MARSING ID 83639", "MARTHA OK 73556", "MARTINS CO. IN 47553", "MARTINSVILLE IN 46151", "MATAGORDA TX 77457", "MAUD TX 75567", "MAY AZ 86333", "MAYER AZ 86333", "MCCALL ID 83638", "MCCOMB MS 39648",
                    "MCCOOK LAKE SD 57049", "MCCORD OK 74604", "MCKINNEY TX 75071", "MCLEAN NE 68747", "MCLEANSBORO IL 62859", "MCNARY AZ 85930", "MECCA IN 47860", "MELISSA TX 75454", "MERIDIAN ID 83616", "MERIGOLD MS 38759", "MIAMI AZ 85539",
                    "MIAMI OK 74354", "MIDDLEFORK IN 46041", "MIDDLETON ID 83644", "MIDLAND IN 47445", "MIDLAND TX 79701", "MILFORD IL 60953", "MILLARD MO 63501", "MITCHELL IN 47446", "MONROE LA 71201", "MONROE CITY IN 47557", "MONROVIA IN 46157",
                    "MONTEZUMA IN 47862", "MONTGOMERY CO. IL 60538", "MOOREHEAD MN 56560", "MOORESVILLE IN 46158", "MOORINGSPORT LA 71060", "MOREHOUSE MO 63868", "MORENCI AZ 85540", "MORGAN CO. IN 46151", "MORRISONVILLE IL 62546", "MOSS HILL TX 77575",
                    "MOSS POINT MS 39562", "MOUND BAYOU MS 38762", "MOUNT CARMEL IL 62863", "MOUNT MERIDIAN IN 46135", "MOWEAQUA IL 62550", "MT. CARMEL IL 62863", "MULKEYTOWN IL 62865", "MUNFORD AL 36268", "MURTAUGH ID 83344", "MYRTLE GROVE LA 70083",
                    "NACO AZ 85620", "NAMPA ID 83686", "NAOMI LA 70037", "NASH TX 75569", "NASHVILLE IN 47448", "NATCHEZ MS 39120", "NEEDVILLE TX 77461", "NEODESHA KS 66757", "NEW ATHENS IL 62264", "NEW CORDELL OK 73632", "NEW GOSHEN IN 47863",
                    "NEW HARMONY IL 47631", "NEW MEADOWS ID 83654", "NEW PLYMOUTH ID 83655", "NEW TERRITORY TX 77479", "NEWBERN TN 38059", "NEWBERRY IN 47449", "NEWPORT IN 47966", "NEWTON IL 62448", "NILWOOD IL 62672", "NINEVEH IN 46164",
                    "NOBLE IL 62868", "NOKOMIS IL 62075", "NORFOLK NE 68701", "NORRIS CITY IL 62869", "NORTH CARROLLTON MS 38947", "NORTH CITY IL 62865", "NORTH OTTER TWNSHP IL 62640", "N SIOUX CITY SD 57049", "NORTH SIOUX CITY SD 57049",
                    "NORTHERN TWNSHP IL 62836", "NOTUS ID 83656", "NOWATA OK 74048", "NYSSA OR 97913", "OAK CREST TX ", "OAK GROVE LA 71263", "OAKLAND OK 73446", "OAKLAND CITY IN 47660", "OAKWOOD IL 61858", "OCEAN SPRINGS MS 39564", "OCONEE IL 62553",
                    "ODEM TX 78370", "ODESSA TX 79760", "ODON IN 47562", "OGDEN AR 71853", "OHATCHEE AL 36271", "OIL CITY LA 71061", "OKAW IL 62565", "OLD DU QUOIN IL 62832", "OLNEY IL 62450", "ONTARIO OR 97914", "ORANGE CO. IN 47432",
                    "OREANA IL 62554", "ORLEANS IN 47452", "OSWEGO KS 67356", "OTEGO TWNSHP IL 62418", "OVERBROOK OK 73453", "OWANECO IL 62555", "OXFORD AL 36203", "PACE MS 38759", "PALACIOS TX 77465", "PALMER CITY IL 62556", "PAMPA TX 79065",
                    "PANA IL 62557", "PANA-CHRISTIAN CO. IL 62557", "PANHANDLE TX 79068", "PAOLI IN 47454", "PARAGON IN 46166", "PARIS IL 61944", "PARKE CO. IN 47834", "PARMA MO 63870", "PARMA ID 83660", "PARSONS KS 67357", "PASCAGOULA MS 39567",
                    "PASCOLA MO 63851", "PASS CHRISTIAN MS 39571", "PAUL ID 83347", "PAULDEN AZ  86334", "PAYETTE ID 83661", "PAYSON AZ 85541", "PEARLAND TX 77588", "PERCY IL 62272", "PERRY CO. IL 62362", "PERRYSVILLE IL ", "PETERSBURG IN 47567",
                    "PHILLIPS IL 62827", "PIASA IL 62079", "PICKENS MS 39146", "PIEDMONT AL 36272", "PIERCE NE 68767", "PIGGOTT AR 72454", "PIKE CO. IN 47567", "PILGER NE 68768", "PIMA AZ 85543", "PINCKNEYVILLE IL 62274", "PINETOP AZ 85935",
                    "PINETOP-LAKESIDE AZ  85929", "PITCHER MO ", "PITMAN TWNSHP IL 62533", "PITTSBURGH IN ", "PLACEDO TX 77977", "PLAINFIELD IN 46168", "PLAINVILLE IN 47568", "PLEASANT VIEW IL 62681", "PLUM TX 78952", "POCATELLO ID 83201",
                    "POINT COMFORT TX 77978", "POLLARD AR 72456", "PONCA CITY OK 74601", "POPE MS 38658", "POPLAR BLUFF MO 63901", "PORT LAVACA TX 77979", "PORT SULPHUR LA 70083", "PORTAGEVILLE MO 63873", "PORTERVILLE LA 71071", "PORTLAND TX 78374",
                    "POSEY CO. IL 62231", "POSEYVILLE IN 47633", "POTTSBORO TX 75076", "PRAIRIE DULONG IL 62277", "PRAIRIETON TWNSHP IL 62510", "PRESCOTT AZ 86301", "PRESCOTT VALLEY AZ 86314", "PRESTON IL 60433", "PRINCES LAKE IN 46164",
                    "PUTNAMVILLE IN 46170", "QUAPAW OK 74363", "QUITMAN MS 39355", "RAMSEY IL 62080", "RANCHO CHICO TX 78387", "RANDOLPH NE 68771", "RANDOLPH CO. IL 62233", "RAVENNA TX 75476", "RAYMOND IL 62560", "RAYVILLE LA 71269", "RECTOR AR 72461",
                    "REDLICK TX 75503", "REDWATER TX 75573", "REELSVILLE IN 46171", "REILES ACRES ND 58102", "RENOVA MS 38732", "REXBURG ID 83440", "RICHLAND PARISH LA 71269", "RICHMOND LA 71282", "RICHWOOD LA 71202", "RICKS TWNSHP IL 62546",
                    "RIDGE FARM IL 61870", "RIDGE TWNSHP IL 62565", "RIGBY ID 83442", "RIO RANCHO NM 87144", "RIRIE ID 83443", "RISCO MO 63874", "ROBSTOWN TX 78380", "ROCKFIELD IN 46977", "ROCKPORT TX 78381", "ROCKVILLE IN 47872", "ROELLEN TN 38024",
                    "ROFF OK 74865", "ROODHOUSE IL 62082", "ROSE TWNSHP IL 62565", "ROSEDALE IN 47874", "ROSHARON TX 77583", "ROSS IL 62370", "ROSSVILLE IL 60963", "ROSWELL NM 88201", "ROYAL LAKES IL 62685", "RULEVILLE MS 38771", "RUPERT ID 83350",
                    "RURAL CHAVES NM 88201", "RURAL TWNSHP IL 61240", "RUSSIAVILLE IN 46979", "SADLER TX 76264", "SAFFORD AZ 85546", "SAGINAW MO 64864", "SAN JOSE AZ 85551", "SAN PATRICIO TX 78368", "SANDBORN IN 47578", "SANDCUT IN 47805",
                    "SANDY POINT TX 77583", "SARATOGA TX 77585", "SARDIS MS 38666", "SAREPTA LA 71071", "SAUCIER MS 39574", "SAVOY TX 75479", "SAYRE OK 73662", "SCHRAM CITY IL 62049", "SCHULENBURG TX 78956", "SEALY TX 77474", "SEELYVILLE IN 47878",
                    "SENATH MO 63876", "SERGEANT BLUFF IA 51054", "SESSER IL 62884", "SHARON TWNSHP IL 62080", "SHAW MS 38773", "SHELBURN IN 47879", "SHELBY MS 38774", "SHELBY CO. IL 62565", "SHELBYVILLE IL 62565", "SHELLEY ID 83274",
                    "SHEPARDSVILLE IN 47880", "SHERMAN TX 75090", "SHERWIN KS 66725", "SHERWOOD SHORES TX 76245", "SHIPMAN IL 62685", "SHOAL CREEK TWNSHP IL 62019", "SHOALS IN 47581", "SHOSHONE ID 83352", "SHOW LOW AZ 85901", "SHOW LOW AZ 85901",
                    "SHREVEPORT LA 71004", "SIMS CITY IL 62886", "SINTON TX 78387", "SIOUX CITY IA 51104", "SKELLYTOWN TX 79080", "SMITHTON IL 62285", "SNOWFLAKE AZ 85937", "SOLOMON AZ 85551", "SONGTON IL ", "SOUR LAKE TX 77659",
                    "SOUTH SIOUX CITY NE 51104", "SOUTHMAYD TX 76268", "SPARTA IL 62286", "SPRINGER OK 73458", "SPRINGHILL LA 71075", "SPURGER TX 77660", "SAINT ANTHONY ID 83445", "ST. ANTHONY ID 83445", "SAINT BERNICE IN 47875", "ST. BERNICE IN 47875",
                    "SAINT CLAIR IL 62234", "ST. CLAIR IL 62234", "SAINT FRANCIS AR 72464", "ST. FRANCIS AR 72464", "ST FRANCIS AR 72464", "SAINT FRANCISVILLE IL 62460", "SAINT FRANCISVILLE IL 62460", "ST. FRANCISVILLE IL 62460",
                    "SAINT MARTIN MS 39532", "ST. MARTIN MS 39532", "SAINT MARY OF THE WOODS IN 47876", "ST. MARY OF THE WOODS IN 47876", "STANTON NE 68779", "STAR ID 83669", "STARK KS 66775", "START LA 71279", "STAUNTON IN 47881",
                    "STEELE MO 63877", "STEELEVILLE IL 62288", "STEENS MS 39766", "STILESVILLE IN 46180", "STINNETT TX 79083", "STONEWALL MS 39363", "STONINGTON IL 62567", "SUBLETTE MO 63546", "SUGAR CITY ID 83448", "SUGARLAND TX 77478",
                    "SULLIVAN IN 47882", "SULPHUR OK 73086", "SUMMIT MS 39666", "SUMNER IL 62466", "SUMNER MS 38957", "SUNFIELD IL 62832", "SUNRAY TX 79086", "SUNSET LAKES IL ", "SUPERIOR AZ 85173", "SWEENY TX 77480", "SYCAMORE KS 67363",
                    "TAFT TX 78390", "TALLULAH LA 71282", "TAMAROA IL 62888", "TAYLOR AZ 85939", "TAYLOR SPRINGS IL 62089", "TAYLORVILLE IL 62568", "TCHULA MS 39169", "TEAKWOOD PLACE IL ", "TECUMSEH IN 47885", "TERRE HAUTE IN 47803",
                    "TETON ID 83451", "TEXARKANA TX 75501", "TEXARKANA AR 71854", "THATCHER AZ 85552", "THAYER (MACOUPIN) IL 62689", "TIGRETT TN 38070", "TILDEN NE 68781", "TILDEN IL 62292", "TILTON IL 61833", "TIPPO MS 38921", "TIPTON OK 73570",
                    "TOM BEAN TX 75489", "TONKAWA OK 74653", "TRAFALGAR IN 46181", "TRAVIS STATION MS ", "TROY IL 62294", "TUTWILER MS 38963", "TWIN FALLS ID 83301", "TYRO KS 67364", "TYRONE IL 62812", "UCON ID 83454", "UNION CHURCH MS 39668",
                    "UNION CO. IL 60180", "UNION PARISH LA 71241", "UNIVERSAL IN 47884", "VAIDEN MS 39176", "VALE OR 97918", "VALIER IL 62891", "VAN ALSTYNE TX 75495", "VAN VLECK TX 77482", "VANCLEAVE MS 39565", "VANDALIA IL 62471", "VEEDERSBURG IL",
                    "VERMILION IL 61955", "VICKSBURG IN 47441", "VICTORIA TX 77901", "VIDALIA LA 71373", "VIGO CO. IN 47880", "VILLAGE OF ST. JOHNS IL 62832", "VINCENNES IN 47591", "VINITA OK 74301", "VIRDEN IL 62690", "VIVIAN LA 71082",
                    "W TERRE HAUTE IN 47885", "WABASH IL 62410", "WABASH CO. IL 62410", "WADE MS 39567", "WADE IL 47638", "WADESVILLE IN 47638", "WAKE VILLAGE TX 75501", "WAKEFIELD NE 68784", "WALLIS TX 77485", "WARDELL MO 63879",
                    "WARREN TX 77664", "WASHINGTON IN 47501", "WASHINGTON CO. MS 38701", "WAVERLY IN 46151", "WAVERLY LA 71232", "WAYNE NE 68787", "WAYNE CITY IL 62895", "WAYNE CO. IL 62895", "WAYNESBORO MS 39367", "WEAVER AL 36277",
                    "WEBB MS 38966", "WEBB CITY MO 64870", "WEBBER IL 62814", "WEBSTER PARISH LA 71055", "WEE TOWN NE 68767", "WEIMAR TX 78962", "WEISER ID 83672", "WELLINGTON IL 60973", "WELLINGTON AL 36279", "WENDELL ID 83355", "WENONAH IL 62075",
                    "WESSON MS 39191", "WEST BADEN SPRINGS IN 47469", "WEST CITY IL 62812", "WEST COLUMBIA TX 77486", "WEST FARGO ND 58078", "WEST GRAYSON TX 75021", "WEST LIBERTY IL 62475", "WEST MARKS MS 38646", "WEST POINT NE 68788",
                    "WEST TERRE HAUTE IN 47885", "WEST VALLEY ID 83686", "WESTPHALIA IN 47596", "WESTVILLE IL 61883", "WHARTON TX 77488", "WHARTON CO. TX 77488", "WHEATLAND IN 47597", "WHITE CO. IL 62834", "WHITE DEER TX 79097", "WHITE HALL IL 62092",
                    "WHITE MOUNTAIN LAKES AZ 85912", "WHITE OAK MO 63880", "WHITEWRIGHT TX 75491", "WHITMORE IL 61830", "WHITTINGTON IL 62897", "WILBUR IN 46151", "WILDER ID 83676", "WILDWOOD TX 77625", "WILFRED IN 47879", "WILLISVILLE IL 62997",
                    "WILLOW OK 73673", "WILTON AR 71865", "WINDSOR IL 61957", "WINNSBORO LA 71295", "WINONA MS 38967", "WINSIDE NE 68790", "WINSLOW AZ 86047", "WINSLOW IN 47598", "WISNER NE 68791", "WITT IL 62094", "WOODLAND PARK NE 68701",
                    "WOODVILLE TX 75979", "WORTHINGTON IN 47471"]

    let oBaconLink = '';
    let oAddress = '';
    let oCity = '';
    let oState = '';
    let oZip = '';
    let oIssue = '';
    let ocmts = "";
    let onode = "";
    let a = 0;
    let b = 0;
    let c = 0;
    let x = 0;
    let result = await getClipboardContent();
    let splitResult = await result.split('\n');
    console.log('Clipboard content:', splitResult.length);
    if (splitResult.length < 9) {
      return;
    }
    //console.log('Adress: ', splitResult[1]);
    oAddress = splitResult[0].replace(",", "");
    oAddress = oAddress.trim();
    console.log('Adress: ', oAddress);
    //console.log('Bacon Link: ', splitResult[3]);
    oBaconLink = splitResult[1];
    console.log('Bacon Link: ', oBaconLink);
    //console.log('Issue: ', splitResult[10]);
    oIssue = splitResult[2];
    console.log('Issue: ', oIssue);
    oCity = oAddress.slice(0, -3);
    console.log('City: ', oCity);
    oState = oAddress.slice(-3);
    console.log('State: ', oState);

    for (let i = 0; i < splitResult.length; i++) {
      //console.log(splitResult[i]);
        if (splitResult[i].includes('CMTS & Card(s):')) {
          console.log('True');
          a = i + 1;
        }
        if (splitResult[i].includes('Node(s):')) {
          console.log('True');
          b = i + 1;
        }
        if (splitResult[i].includes('Thank you,')) {
          console.log('True');
          c = i;
        }
    }
    x = b - a;
    ocmts = splitResult[a];
    onode = splitResult[b];
    x = b - 1;

    for (let i = 0; i < splitResult.length; i++) {
      if (i <= a) {
        continue;
      }
      if (i >= x) {
        continue;
      }
      ocmts += "\n" + splitResult[i];
    }
    console.log('CMTS: ', ocmts);
    x = c - 1;

    for (let i = 0; i < splitResult.length; i++) {
      if (i <= b) {
        continue;
      }
      if (i >= x) {
        continue;
      }
      onode += " " + splitResult[i];
    }
    console.log('Node: ', onode);

    for (let i = 0; i < cityData.length; i++) {
      //console.log(splitResult[i]);
        if (cityData[i].includes(oAddress.toUpperCase())) {
          console.log('True');
          oZip = cityData[i].replace(/[a-zA-Z]/g, '');
          console.log('Zip: ', oZip);
          break;
        }
    }

    await outageDetails(oBaconLink, oCity, oState, oZip, oIssue, ocmts, onode);

    //console.log(splitResult.indexOf("Node(s):"));
    //console.log(splitResult.indexOf("Thank you,"));
  }
}

async function locateWorkOrderType(){
  console.log(document.title);
  if (document.title.includes("Add activity")){
    await workOrderType("[aria-label='[M] Locate'");
    await allDay();
    await fmoActivityCode("[aria-label='Locate - Single'");
    await postionInRoute("[id='aid--1");
    let result = await getClipboardContent();
    let splitResult = await result.split('\n');

    for (let i = 0; i < splitResult.length; i++) {
      //console.log(numbers[i]);
      if (splitResult[i].includes('NEBRASKA 811')) {
        console.log('Norfolk');
        await norfL(splitResult);
        break;
      }
      if (splitResult[i].includes('OOCSI')) {
        console.log('Ardmore');
        break;
      }
      if (splitResult[i].includes('OKOCS')) {
        console.log('Ardmore');
        break;
      }
      if (splitResult[i].includes('NM811')) {
        console.log('Roswell');
        break;
      }
      if (splitResult[i].includes('AROCS')) {
        console.log('Texas');
        break;
      }
      if (splitResult[i].includes('Idaho Dig Line')) {
        console.log('Twin Falls');
        break;
      }
      if (splitResult[i].includes('Arizona 811')) {
        console.log('Globe/Safford');
        break;
      }
      if (splitResult[i].includes('INDIANA811')) {
        console.log('Indiana');
        break;
      }
      if (splitResult[i].includes('SMTV0A')) {
        console.log('Illios');
        break;
      }
      if (splitResult[i].includes('Texas811')) {
        console.log('Texas');
        break;
      }
      if (splitResult[i].includes('MISSOURI ONE CALL')) {
        console.log('Kirksvill');
        break;
      }
    }

  }
}

async function fsaWorkOrderType(){
  if (document.title.includes("Add activity")){
    await workOrderType("[aria-label='Field Service Assist'");
    await durationMins();
    document.querySelector("[aria-label='Assist Comments'").click();
    await postionInRoute("[id='aid-0");
    let result = await getClipboardContent();
    let splitResult = await result.split('\n');
    if (splitResult.length === 19) {
      let oComments = splitResult[0] + '\n' + splitResult[18];
      let oAddress = splitResult[6];
      let oCity = splitResult[8];
      let oState = splitResult[10];
      let oZip = splitResult[12];
      await fsaDetails(oComments, oAddress, oCity, oState, oZip);
    }
  }
}

async function demandWorkOrderType(){
  if (document.title.includes("Add activity")) {
    await workOrderType("[aria-label='[M] Demand'");
    await allDay();
    await durationMins();
    await fmoActivityCode("[aria-label='Demand - Repair or Replace'");
    await fmoAssetType("[aria-label='Plant (Other)'");
    await postionInRoute("[id='aid--1");
  }
}


async function equipmentpuWorkOrderType(){
  if (document.title.includes("Add activity")){
    await workOrderType("[aria-label='Equipment Pickup'");
    await allDay();
    await durationMins();
    document.querySelector("[aria-label='Name, Required'").click();
    await postionInRoute("[id='aid--1");
  }
}

async function meetingWorkOrderType(){
  if (document.title.includes("Add activity")){
    await workOrderType("[aria-label='Meeting'");
    await durationHours();
    await postionInRoute("[id='aid-0");
    let result = await getClipboardContent();
    let splitResult = await result.split('\n');
    if (splitResult.length === 7) {
    let oAddress = splitResult[0];
    let oCity = splitResult[2];
    let oState = splitResult[4];
    let oZip = splitResult[6];
    console.log(oAddress + '\n' + oCity + '\n' + oState + '\n' + oZip);
    await meetingDetails(oAddress, oCity, oState, oZip);
    }
    document.querySelector("[aria-label='Quota Impacting'").click();
  }
}

async function resupplyWorkOrderType(){
  if (document.title.includes("Add activity")){
    await workOrderType("[aria-label='Resupply'");
    await durationMins();
    await postionInRoute("[id='aid-0");
    let result = await getClipboardContent();
    let splitResult = await result.split('\n');
    if (splitResult.length === 7) {
    let oAddress = splitResult[0];
    let oCity = splitResult[2];
    let oState = splitResult[4];
    let oZip = splitResult[6];
    console.log(oAddress + '\n' + oCity + '\n' + oState + '\n' + oZip);
    await meetingDetails(oAddress, oCity, oState, oZip);
    }
    document.querySelector("[aria-label='Quota Impacting'").click();
  }
}


VM.shortcut.register('a-o', () => {
  console.log('You just pressed alt-o');
  outageWorkOrderType();
});

VM.shortcut.register('a-l', () => {
  console.log('You just pressed alt-l');
  locateWorkOrderType();
});

VM.shortcut.register('a-f', () => {
  console.log('You just pressed alt-f');
  fsaWorkOrderType();
});

VM.shortcut.register('a-d', () => {
  console.log('You just pressed alt-d');
  demandWorkOrderType();
});

VM.shortcut.register('a-e', () => {
  console.log('You just pressed alt-e');
  equipmentpuWorkOrderType();
});

VM.shortcut.register('a-m', () => {
  console.log('You just pressed alt-m');
  meetingWorkOrderType();
});

VM.shortcut.register('a-r', () => {
  console.log('You just pressed alt-r');
  resupplyWorkOrderType();
});

VM.shortcut.register('a-t', () => {
  console.log('You just pressed alt-t');
  copyText(document.getElementById('community-chat-title').textContent);
});


// You can also disconnect the observer explicitly when it's not used any more
