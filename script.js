let translationSwitcher = function() {
    return {
        selected: 0,
        translations: {
            br: "Sexta-feira passada eu vi um verme azul listrado manchado apertar a mão de um lagarto sem pernas.",
            en: "Last Friday I saw a spotted striped blue worm shake hands with a legless lizard.",
            es: "El viernes pasado vi un gusano azul a rayas manchado estrecharle la mano con un lagarto sin patas.",
            de: "Letzten Freitag sah ich einen gefleckten gestreiften blauen Wurm, der einer beinlosen Eidechse die Hand schüttelte.",
            fr: "Vendredi dernier, j'ai vu un ver bleu rayé tacheté serrer la main d'un lézard sans pattes.",
            it: "Venerdì scorso ho visto un verme blu striato macchiato stringere la mano a una lucertola senza gambe.",
            jp: "先週の金曜日、縞模様の青いワームが脚のないトカゲと握手するのを見ました。",
            cn: "上周五，我看到一只斑点的蓝色蠕虫与一只无腿的蜥蜴握手。"
        },
        countries: [{
            label: 'Portuguese',
            lang: 'br',
            flag: 'br',
        }, {
            label: 'English',
            lang: 'en',
            flag: 'gb',
        }, {
            label: 'Spanish',
            lang: 'es',
            flag: 'es',
        }, {
            label: 'German',
            lang: 'de',
            flag: 'de',
        }, {
            label: 'French',
            lang: 'fr',
            flag: 'fr',
        }, {
            label: 'Italian',
            lang: 'it',
            flag: 'it',
        }, {
            label: 'Japanese',
            lang: 'jp',
            flag: 'jp',
        }, {
            label: 'Chinese',
            lang: 'cn',
            flag: 'cn',
        }, ],
        menuToggle: false,
    }
}