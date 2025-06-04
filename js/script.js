(function(){
    emailjs.init("JHSgBodSTPWtGvDFi"); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    emailjs.sendForm('service_vtl1ouf', 'template_9qg9csd', this)
        .then(function() {
            alert('Mensagem enviada com sucesso!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Falha ao enviar a mensagem: ' + JSON.stringify(error));
        });
});

// translate

document.addEventListener('DOMContentLoaded', function () {
    const flagButtons = document.querySelectorAll('.flag-button');

    const translations = {
        en: {
            digitando: 'Wildlife Refuge of the ', engs: 'Scarlet Ibis',
            description: 'From the majestic Scarlet Ibis, with its vibrant red plumage that colors the skies and mangroves, to the discreet giant anteaters, whose silent elegance moves through the forest, and the curious capuchin monkeys, always alert to the movements around them, the Guarás Wildlife Refuge protects a universe of biodiversity. With dozens of species, many of them endangered, this natural sanctuary is an essential space for the conservation of Brazilian fauna. Here, each animal finds refuge and safety, living in harmony with its natural habitat and contributing to the regions ecological balance. Visitors have the unique chance to observe migratory birds that travel long distances in search of shelter and food, as well as reptiles and amphibians that play key roles in the food chain. Amidst trails and waterways, each encounter with wildlife becomes an unforgettable moment, reinforcing the importance of environmental preservation and respect for nature.',
            heading: 'Fauna and Flora',
            furiabot: 'Scarlet Ibis (Eudocimus ruber)',
            chatfuria: 'The Scarlet Ibis is one of the most emblematic birds of the Brazilian coast, especially present in mangrove areas, estuaries, and flooded zones. With its intensely red plumage, vibrant and striking, the Scarlet Ibis catches the attention of all who pass through its habitat. This unique coloration comes from the ingestion of crustaceans rich in carotenoids, which naturally pigment its feathers. Medium-sized, measuring between 60 and 70 centimeters, it has a long, downward-curved beak perfect for catching small animals in the mud. It is a sociable bird that lives in large flocks and often flies in formation at dusk, returning to resting places. It feeds mainly on crabs, mollusks, and small fish.',
            bloggamer: 'Tegu (Salvator merianae)',
            gamerb: 'The Tegu is one of the largest lizards in South America, reaching lengths of up to 1.5 meters. It has a robust body with light spots on dark scales and lives in forests, grasslands, and even urban areas. It is a terrestrial and diurnal animal, seeking shelter in burrows or under logs. With an omnivorous diet, it feeds on fruits, eggs, small animals, and carrion, helping with ecological control and seed dispersal. During cold weather, it enters a state of torpor and reduces its activity. Despite its size, it is peaceful and essential for environmental balance.',
            alcarro: 'Capybara (Hydrochoerus hydrochaeris)',
            carrental: 'The Capybara is the largest rodent in the world, commonly found along riverbanks, lakes, and wetlands. It can weigh up to 60 kilograms and measure over a meter in length. It lives in social groups and has a calm demeanor, being seen in both natural and urban environments. Its partially webbed feet make it an excellent swimmer. It feeds on grasses, leaves, and aquatic vegetation, usually at dawn and dusk. In addition to being a seed disperser, it also plays a role in the food chain by serving as prey for predators such as jaguars and caimans.',
            cont: 'Contact',
            copyright: '© Zero Latency | All Rights Reserved'
        },
        br: {
            digitando: 'Refugio da Vida Silvestre dos ', engs: 'Guarás',
            description: 'Do majestoso Guará, com sua plumagem vermelha vibrante que colore os céus e manguezais, aos discretos tamanduás-bandeira, cuja elegância silenciosa atravessa a floresta, e aos curiosos macacos-prego, sempre atentos aos movimentos ao seu redor, o Refúgio da Vida Silvestre dos Guarás protege um universo de biodiversidade. Com dezenas de espécies, muitas delas ameaçadas de extinção, este santuário natural é um espaço essencial para a conservação da fauna brasileira. Aqui, cada animal encontra refúgio e segurança, vivendo em harmonia com seu habitat natural e contribuindo para o equilíbrio ecológico da região. Os visitantes têm a chance única de observar aves migratórias que percorrem longas distâncias em busca de abrigo e alimento, além de répteis e anfíbios que desempenham funções fundamentais na cadeia alimentar. Em meio às trilhas e aos cursos d’água, cada encontro com a vida selvagem se transforma em um momento inesquecível, reforçando a importância da preservação ambiental e do respeito à natureza.',
            heading: 'Fauna e Flora',
            furiabot: 'Guará (Eudocimus ruber)',
            chatfuria: 'O Guará é uma das aves mais emblemáticas do litoral brasileiro, especialmente presente em áreas de manguezais, estuários e zonas alagadas. Com sua plumagem intensamente vermelha, vibrante e marcante, o Guará chama a atenção de todos que passam por seu habitat. Essa coloração única vem da ingestão de crustáceos ricos em carotenoides, que pigmentam suas penas de forma natural. De porte médio, mede entre 60 e 70 centímetros, e possui um bico longo e curvado para baixo, perfeito para capturar pequenos animais na lama. É uma ave sociável, que vive em bandos numerosos e costuma voar em formação no final da tarde, retornando aos locais de descanso. Alimenta-se principalmente de caranguejos, moluscos e pequenos peixes.',
            bloggamer: 'Tegu (Salvator merianae)',
            gamerb: 'O Teiú é um dos maiores lagartos da América do Sul, com até 1,5 metro de comprimento. Possui corpo robusto com manchas claras sobre escamas escuras, e vive em florestas, campos e até zonas urbanas. É um animal terrestre e diurno, abriga-se em tocas ou sob troncos. Com dieta onívora, alimenta-se de frutas, ovos, pequenos animais e carniça, ajudando no controle ecológico e na dispersão de sementes. Durante o frio, entra em torpor e reduz sua atividade. Apesar do tamanho, é pacífico e essencial para o equilíbrio ambiental.',
            alcarro: 'Capivara (Hydrochoerus hydrochaeris)',
            carrental: 'A Capivara é o maior roedor do mundo, comum em margens de rios, lagos e áreas úmidas. Pode pesar até 60 quilos e medir mais de um metro de comprimento. Vive em grupos sociais e tem comportamento tranquilo, sendo vista tanto em ambientes naturais quanto urbanos. Suas patas parcialmente palmadas a tornam uma ótima nadadora. Alimenta-se de capins, folhas e vegetação aquática, geralmente ao amanhecer e no entardecer. Além de ser uma dispersora de sementes, também participa da cadeia alimentar ao servir de alimento para predadores como onças e jacarés.',
            cont: 'Contato',
            copyright: '© Zero Latency | Todos Direitos Reservados'
        },
    };

    flagButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLanguage = button.getAttribute('data-language');
            const translation = translations[selectedLanguage];

            document.getElementById('digitando').textContent = translation.digitando;
            document.getElementById('engs').textContent = translation.engs;
            document.getElementById('description').textContent = translation.description;
            document.getElementById('heading').textContent = translation.heading;
            document.getElementById('furiabot').textContent = translation.furiabot;
            document.getElementById('chatfuria').textContent = translation.chatfuria;
            document.getElementById('bloggamer').textContent = translation.bloggamer;
            document.getElementById('gamerb').textContent = translation.gamerb;
            document.getElementById('alcarro').textContent = translation.alcarro;
            document.getElementById('carrental').textContent = translation.carrental;
            document.getElementById('cont').textContent = translation.cont;
            document.getElementById('copyright').textContent = translation.copyright;
        });
    });
});