//TODO pocasi
/***mobile navigation***/
$('.click').click(function () {
    $('.move').toggleClass("addLeftMargin");
    $('.hide').toggleClass("addBonusMargin");
    $('.mobile-nav-back').toggleClass("addInlineBlock");
    $('main').toggleClass("menu-mini-disable");
    $('footer').toggleClass("menu-mini-disable");
    $('nav').toggleClass("nav-background-mini-screen");

});
$('.mobile-nav-back').click(function () {
    $('.move').toggleClass("addLeftMargin");
    $('.hide').toggleClass("addBonusMargin");
    $('.mobile-nav-back').toggleClass("addInlineBlock");
    $('main').toggleClass("menu-mini-disable");
    $('footer').toggleClass("meni-mini-disable");
    $('nav').toggleClass("nav-background-mini-screen");
});

(function($){
    $(function(){
        $(".click").click(function(){
            $(".jq--nav-icon").fadeToggle(0);
            $(".nav-background").slideToggle(200,"swing");
            $(".mobile-nav-back").fadeToggle(0);
            $(".nav-logo").fadeToggle(0);


        });
        $(".mobile-nav-back").click(function(){
            $(".jq--nav-icon").fadeToggle(0);
            $(".nav-background").slideToggle(200,"swing");
            $(".mobile-nav-back").fadeToggle(0);
            $(".nav-logo").fadeToggle(0);
        });
    });
})(jQuery);


// vytvoříme si prázdné pole měsíců
let mesice = [];
// postupně přidáme měsíce se svátky, prvky pole tedy bude další pole
// leden
mesice.push(["Nový rok, Den obnovy samostatného českého státu", "Karina", "Radmila", "Diana", "Dalimil", "Tři králové", "Vilma", "Čestmír", "Vladan", "Břetislav", "Bohdana", "Pravoslav", "Edita", "Radovan", "Alice", "Ctirad", "Drahoslav", "Vladislav", "Doubravka", "Ilona", "Běla", "Slavomír", "Zdeněk", "Milena", "Miloš", "Zora", "Ingrid", "Otýlie", "Zdislava", "Robin", "Marika"]);
// únor
mesice.push(["Hynek", "Nela", "Blažej", "Jarmila", "Dobromila", "Vanda", "Veronika", "Milada", "Apolena", "Mojmír", "Božena", "Slavěna", "Věnceslav", "Valentýn", "Jiřina", "Ljuba", "Miloslava", "Gizela", "Patrik", "Oldřich", "Lenka", "Petr", "Svatopluk", "Matěj", "Liliana", "Dorota", "Alexandr", "Lumír", "Horymír"]);
// březen
mesice.push(["Bedřich", "Anežka", "Kamil", "Stela", "Kazimír", "Miroslav", "Tomáš", "Gabriela", "Františka", "Viktorie", "Anděla", "Řehoř", "Růžena", "Rút, Matylda", "Ida", "Elena, Herbert", "Vlastimil", "Eduard", "Josef", "Světlana", "Radek", "Leona", "Ivona", "Gabriel", "Marián", "Emanuel", "Dita", "Soňa", "Taťána", "Arnošt", "Kvido"]);
// duben
mesice.push(["Hugo", "Erika", "Richard", "Ivana", "Miroslava", "Vendula", "Heřman, Hermína", "Ema", "Dušan", "Darja", "Izabela", "Julius", "Aleš", "Vincenc", "Anastázie", "Irena", "Rudolf", "Valérie", "Rostislav", "Marcela", "Alexandra", "Evženie", "Vojtěch", "Jiří", "Marek", "Oto", "Jaroslav", "Vlastislav", "Robert", "Blahoslav"]);
// květen
mesice.push(["Svátek práce", "Zikmund", "Alexej", "Květoslav", "Klaudie", "Radoslav", "Stanislav", "Den vítězství", "Ctibor", "Blažena", "Svatava", "Pankrác", "Servác", "Bonifác", "Žofie", "Přemysl", "Aneta", "Nataša", "Ivo", "Zbyšek", "Monika", "Emil", "Vladimír", "Jana", "Viola", "Filip", "Valdemar", "Vilém", "Maxmilián", "Ferdinand", "Kamila"]);
// červen
mesice.push(["Laura", "Jarmil", "Tamara", "Dalibor", "Dobroslav", "Norbert", "Iveta, Slavoj", "Medard", "Stanislava", "Gita", "Bruno", "Antonie", "Antonín", "Roland", "Vít", "Zbyněk", "Adolf", "Milan", "Leoš", "Květa", "Alois", "Pavla", "Zdeňka", "Jan", "Ivan", "Adriana", "Ladislav", "Lubomír", "Petr a Pavel", "Šárka"]);
// červenec
mesice.push(["Jaroslava", "Patricie", "Radomír", "Prokop", "Cyril, Metoděj", "Den upálení mistra Jana Husa", "Bohuslava", "Nora", "Drahoslava", "Libuše, Amálie", "Olga", "Bořek", "Markéta", "Karolína", "Jindřich", "Luboš", "Martina", "Drahomíra", "Čeněk", "Ilja", "Vítězslav", "Magdaléna", "Libor", "Kristýna", "Jakub", "Anna", "Věroslav", "Viktor", "Marta", "Bořivoj", "Ignác"]);
// srpen
mesice.push(["Oskar", "Gustav", "Miluše", "Dominik", "Kristián", "Oldřiška", "Lada", "Soběslav", "Roman", "Vavřinec", "Zuzana", "Klára", "Alena", "Alan", "Hana", "Jáchym", "Petra", "Helena", "Ludvík", "Bernard", "Johana", "Bohuslav", "Sandra", "Bartoloměj", "Radim", "Luděk", "Otakar", "Augustýn", "Evelína", "Vladěna", "Pavlína"]);
// září
mesice.push(["Linda, Samuel", "Adéla", "Bronislav", "Jindřiška", "Boris", "Boleslav", "Regína", "Mariana", "Daniela", "Irma", "Denisa", "Marie", "Lubor", "Radka", "Jolana", "Ludmila", "Naděžda", "Kryštof", "Zita", "Oleg", "Matouš", "Darina", "Berta", "Jaromír", "Zlata", "Andrea", "Jonáš", "Václav, Den české státnosti", "Michal", "Jeroným"]);
// říjen
mesice.push(["Igor", "Olivie, Oliver", "Bohumil", "František", "Eliška", "Hanuš", "Justýna", "Věra", "Štefan, Sára", "Marina", "Andrej", "Marcel", "Renáta", "Agáta", "Tereza", "Havel", "Hedvika", "Lukáš", "Michaela", "Vendelín", "Brigita", "Sabina", "Teodor", "Nina", "Beáta", "Erik", "Šarlota, Zoe", "Den vzniku samostatného československého státu", "Silvie", "Tadeáš", "Štěpánka"]);
// listopad
mesice.push(["Felix", "Památka zesnulých (dušičky)", "Hubert", "Karel", "Miriam", "Liběna", "Saskie", "Bohumír", "Bohdan", "Evžen", "Martin", "Benedikt", "Tibor", "Sáva", "Leopold", "Otmar", "Mahulena, Den boje za svobodu a demokracii", "Romana", "Alžběta", "Nikola", "Albert", "Cecílie", "Klement", "Emílie", "Kateřina", "Artur", "Xenie", "René", "Zina", "Ondřej"]);
// prosinec
mesice.push(["Iva", "Blanka", "Svatoslav", "Barbora", "Jitka", "Mikuláš", "Benjamín", "Květoslava", "Vratislav", "Julie", "Dana", "Simona", "Lucie", "Lýdie", "Radana", "Albína", "Daniel", "Miloslav", "Ester", "Dagmar", "Natálie", "Šimon", "Vlasta", "Adam, Eva, Štědrý den", "1. svátek vánoční", "Štěpán, 2. svátek vánoční", "Žaneta", "Bohumila", "Judita", "David", "Silvestr"]);

// nyní přestoupíme k samotnému výpisu
let d = new Date();
let den = d.getDate()-1;
let mesic = d.getMonth();


