var mongoose = require('mongoose');
mongoose.connect('mongodb://hiremeapp:hiremeapp@ds023714.mlab.com:23714/hiremeapp');     // connect to mongoDB database on modulus.io

var Technology = require(__dirname+"/../models/Technology.js").Technology;
var Area = require(__dirname+"/../models/Area.js").Area;
var Question = require(__dirname+"/../models/Question.js").Question;
var User = require(__dirname+"/../models/User.js").User;
var Article = require(__dirname+"/../models/Article.js").Article;
var Company = require(__dirname+"/../models/Company.js").Company;
var General = require(__dirname+"/../models/General.js").General;

var user_2 = new User({
  name: 'Carina',
  friends: [],
  password: '000000',
  score: 0,
  blocked: false,
  email: 'carina@gmail.com',
  gender: 'F'
});

var user_3 = new User({
  name: 'Utilizador3',
  friends: [],
  password: '000000',
  score: 0,
  email: 'idk@gmail.com',
  gender: 'M'
});

var user_4 = new User({
  name: 'Utilizador4',
  friends: [],
  password: '000000',
  score: 0,
  email: 'idk@gmail.com',
  gender: 'F'
});

var user_5 = new User({
  name: 'Utilizador5',
  friends: [],
  password: '000000',
  score: 0,
  email: 'idk@gmail.com',
  gender: 'F'
});

var user_6 = new User({
  name: 'Utilizador6',
  friends: [],
  password: '000000',
  score: 0,
  email: 'idk@gmail.com',
  gender: 'M'
});

user_2.save();
user_3.save();
user_4.save();
user_5.save();
user_6.save();

var user_1 = new User({
  name: 'Jorge',
  friends: [user_2._id, user_3._id, user_4._id],
  password: '000000',
  score: 0,
  blocked: false,
  email: 'jmsfilipe@gmail.com',
  gender: 'M'
});

user_1.save();

var article_1 = new Article({
  title: "Empresa de informática oferece mais dois meses de licença de maternidade",
  body: "No caso da Critical Software o alargamento enquadra-se na política de responsabilidade social da empresa. Três por cento dos lucros são dedicados a este fim, explica",
  img: "https://imagens3.publico.pt/imagens.aspx/1035503?tp=UH&db=IMAGENS",
  link: "https://www.publico.pt/sociedade/noticia/empresa-de-informatica-oferece-as-funcionarias-mais-dois-meses-de-licenca-de-maternidade-1725237"
});

var article_2 = new Article({
  title: "Salários de profissionais de tecnologias crescem 2% em 2015",
  body: "Em média, os salários dos profissionais de tecnologias registaram um aumento menor em 2015 do que em 2014. Estudo com 12 mil entrevistas revela que quase um terço das empresas de tecnologias portuguesas está em vias de contratar profissionais.",
  img: "http://images-cdn.impresa.pt/exameinformatica/2015-07-27-2ndS-pix1.jpg?v=w620h395",
  link: "http://exameinformatica.sapo.pt/noticias/mercados/2015-07-27-Salarios-de-profissionais-de-tecnologias-crescem-2-em-2015"
});

var article_3 = new Article({
  title: "Empresas recrutam todos os informáticos saídos da Universidade do Minho",
  body: "Todos os cerca de 150 alunos finalistas e recém-licenciados da Universidade do Minho na área da informática e Ciências de Computação vão ser disputados, na próxima semana, por mais de vinte empresas portuguesas e multinacionais.",
  img: "http://www.crup.pt/images/M_images/UMInho.JPG",
  link: "http://www.sabado.pt/ultima_hora/detalhe/empresas_recrutam_todos_os_informaticos_saidos_da_universidade_do_minho.html"
});

var article_4 = new Article({
  title: "Português recomendado por Bill Gates:\"Os computadores são demasiado estúpidos\"",
  body: "As máquinas não vão \"destruir a humanidade\" mas há perigos. O aviso é de Pedro Domingos, autor do livro que Bill Gates recomenda a quem quer saber mais sobre Inteligência Artificial.",
  img: "http://static.globalnoticias.pt/storage/TSF/2016/sectionbig/ng7055596.jpg",
  link: "http://www.tsf.pt/sociedade/ciencia-e-tecnologia/interior/pedro-domingos-os-computadores-sao-demasiado-estupidos-5231986.html"
});

var article_5 = new Article({
  title: "Uniplaces tem 40 vagas por preencher",
  body: "Portugal, Espanha, Alemanha, França e Itália são os mercados em que a Uniplaces quer expandir a sua presença e, para isso, precisa de pessoas com experiência. Mas, em vez de colocar um anúncio no jornal, a startup portuguesa recorreu a drones para anunciar as 40 vagas que tem disponíveis nas áreas de Customer Service, Marketing, Onboarding, People&Finance, Product, Sales e Technology.",
  img: "http://marketeer.pt/wp-content/uploads/2016/06/uniplaces-drone.jpg",
  link: "http://marketeer.pt/2016/06/20/uniplaces-tem-40-vagas-por-preencher/"
});

article_1.save();
article_2.save();
article_3.save();
article_4.save();
article_5.save();

var question_1_javascript_beginner = new Question({
  "question": "Dentro de que elemento HTML se coloca o Javascript?",
  "code_sample": null,
  "explanation": null,
  "level": 1,
  "answers": [
    {
      "text": "<script>",
      "correct": true
    },
    {
      "text": "<javascript>",
      "correct": false
    },
    {
      "text": "<js>",
      "correct": false
    },
    {
      "text": "<scripting>",
      "correct": false
    }
  ]
});

var question_2_javascript_beginner = new Question({
  "question": "Qual é a sintaxe de Javascript correcta para mudar o conteúdo do elemento HTML em baixo?",
  "code_sample": {
    "language": "html",
    "content": "<p id=\"demo\">This is a demonstration.</p>"
  },
  "explanation": null,
  "level": 1,
  "answers": [
    {
      "text": "#demo.innerHTML = 'Hello World!';",
      "correct": false
    },
    {
      "text": "document.getElement('p').innerHTML = 'Hello World!';",
      "correct": false
    },
    {
      "text": "document.getElementByName('p').innerHTML = 'Hello World!';",
      "correct": false
    },
    {
      "text": "document.getElementById('demo').innerHTML = 'Hello World!';",
      "correct": true
    }
  ]
});

var question_3_javascript_beginner = new Question({
  "question": "Qual é o sítio correcto para inserir Javascript?",
  "code_sample": null,
  "explanation": null,
  "level": 1,
  "answers": [
    {
      "text": "A secção <body>",
      "correct": false
    },
    {
      "text": "A secção <head>",
      "correct": true
    },
    {
      "text": "Both the <head> section and the <body> section are correct",
      "correct": false
    }
  ]
});

var question_4_javascript_beginner = new Question({
  "question": "Qual é a sintaxe correcta para referenciar um script externo chamado 'xxx.js'?",
  "code_sample": null,
  "explanation": null,
  "level": 1,
  "answers": [
    {
      "text": "<script href='xxx.js'>",
      "correct": false
    },
    {
      "text": "<script name='xxx.js'>",
      "correct": false
    },
    {
      "text": "<script src='xxx.js'>",
      "correct": true
    }
  ]
});

var question_5_javascript_beginner = new Question({
  "question": "Um ficheiro externo de Javascript tem de ter a tag <script>.",
  "code_sample": null,
  "explanation": null,
  "level": 1,
  "answers": [
    {
      "text": "verdadeiro",
      "correct": false
    },
    {
      "text": "falso",
      "correct": true
    }
  ]
});

var question_6_javascript_beginner = new Question({
  "question": "Como se escreve 'Hello World' numa alert box?",
  "code_sample": null,
  "explanation": null,
  "level": 1,
  "answers": [
    {
      "text": "alert('Hello World');",
      "correct": true
    },
    {
      "text": "alertBox('Hello World');",
      "correct": false
    },
    {
      "text": "msg('Hello World');",
      "correct": false
    },
    {
      "text": "msgBox('Hello World');",
      "correct": false
    }
  ]
});

var question_7_javascript_intermediate = new Question({
  "question": "Number is a datatype in Javascript",
  "code_sample": null,
  "explanation": null,
  "level": 2,
  "answers": [
    {
      "text": "True",
      "correct": true
    },
    {
      "text": "False",
      "correct": false
    }
  ]
});

var question_8_javascript_intermediate = new Question({
  "question": "When evaluating 5 + \"cats\"...",
  "code_sample": null,
  "explanation": null,
  "level": 2,
  "answers": [
    {
      "text": "5 is automatically converted to a string",
      "correct": true
    },
    {
      "text": "\"cats\" is automatically converted to a string. It fails.",
      "correct": false
    },
    {
      "text": "Reference Error",
      "correct": false
    }
  ]
});

var question_9_javascript_expert = new Question({
  "question": "What will be the output of the code below?",
  "code_sample": {
    "language": "javascript",
    "content": "var trees = [\"xyz\",\"xxxx\",\"test\",\"ryan\",\"apple\"];\ndelete trees[3];\n  console.log(trees.length);"
  },
  "explanation": "When we use the delete operator to delete an array element, the array length is not affected from this. This holds even if you deleted all elements of an array using the delete operator.",
  "level": 3,
  "answers": [
    {
      "text": "5",
      "correct": true
    },
    {
      "text": "4",
      "correct": false
    },
    {
      "text": "3",
      "correct": false
    },
    {
      "text": "6",
      "correct": false
    }
  ]
});

var question_10_javascript_expert = new Question({
  "question": "\"\" == 0 returns what?",
  "code_sample": null,
  "explanation": null,
  "level": 3,
  "answers": [
    {
      "text": "true",
      "correct": true
    },
    {
      "text": "false",
      "correct": false
    },
    {
      "text": "Reference Error",
      "correct": false
    },
    {
      "text": "Not executed",
      "correct": false
    }
  ]
});

var question_11_postgres_beginner = new Question({
  "question": "Que expressão SQL é usada para extrair dados da base de dados?",
  "code_sample": null,
  "explanation": null,
  "level": 1,
  "answers": [
    {
      "text": "SELECT",
      "correct": true
    },
    {
      "text": "OPEN",
      "correct": false
    },
    {
      "text": "EXTRACT",
      "correct": false
    },
    {
      "text": "GET",
      "correct": false
    }
  ]
});

var question_12_postgres_beginner = new Question({
  "question": "Com SQL, como se selecciona uma coluna chamada \"FirstName\" de uma tabela chamada \"Persons\"?",
  "code_sample": null,
  "explanation": null,
  "level": 1,
  "answers": [
    {
      "text": "SELECT FirstName FROM Persons",
      "correct": true
    },
    {
      "text": "SELECT Persons.FirstName",
      "correct": false
    },
    {
      "text": "EXTRACT FirstName FROM Persons",
      "correct": false
    }
  ]
});

var question_13_postgres_beginner = new Question({
  "question": "Com SQL, como se seleccionam todos os resultados de uma tabela chamada \"Persons\" onde o valor da coluna \"FirstName\" começa com um \"a\"?",
  "code_sample": null,
  "explanation": null,
  "level": 1,
  "answers": [
    {
      "text": "SELECT * FROM Persons WHERE FirstName='a'",
      "correct": false
    },
    {
      "text": "SELECT * FROM Persons WHERE FirstName='%a%'",
      "correct": false
    },
    {
      "text": "SELECT * FROM Persons WHERE FirstName LIKE 'a%'",
      "correct": false
    },
    {
      "text": "SELECT * FROM Persons WHERE FirstName LIKE '%a'",
      "correct": true
    }
  ]
});

var question_14_postgres_intermediate = new Question({
  "question": "What are the different types of JOIN clauses?",
  "code_sample": null,
  "explanation": null,
  "level": 2,
  "answers": [
    {
      "text": "INNER JOIN, LEFT (OUTER) JOIN, RIGHT (OUTER) JOIN, FULL JOIN, CROSS JOIN",
      "correct": true
    },
    {
      "text": "SIMPLE JOIN, LEFT (OUTER) JOIN, RIGHT (OUTER) JOIN, FULL JOIN, EITHER JOIN",
      "correct": false
    }
  ]
});

var question_15_postgres_intermediate = new Question({
  "question": "What is wrong with the following query?",
  "code_sample": {
    "language": "sql",
    "content": "SELECT Id, YEAR(BillingDate) AS BillingYear\nFROM Invoices\nWHERE BillingYear >= 2010;"
  },
  "explanation": null,
  "level": 2,
  "answers": [
    {
      "text": "Nothing",
      "correct": false
    },
    {
      "text": "Sould be WHERE YEAR(BillingDate) >= 2010; instead",
      "correct": true
    }
  ]
});

var question_16_postgres_expert = new Question({
  "question": "What will be the result of the query below?",
  "code_sample": {
    "language": "sql",
    "content": "select case when null = null then 'Yup' else 'Nope' end as Result;"
  },
  "explanation": "This query will actually yield “Nope”, seeming to imply that null is not equal to itself! The reason for this is that the proper way to compare a value to null in SQL is with the is operator, not with =.",
  "level": 3,
  "answers": [
    {
      "text": "Yup",
      "correct": false
    },
    {
      "text": "Nope",
      "correct": true
    },
    {
      "text": "Error",
      "correct": false
    }
  ]
});

var question_17_postgres_expert = new Question({
  "question": "What are the ACID properties?",
  "code_sample": null,
  "explanation": null,
  "level": 3,
  "answers": [
    {
      "text": "Atomicity, Consistency, Isolation, Durability",
      "correct": true
    },
    {
      "text": "Adaptability, Computability, Invariability, Destructibility",
      "correct": false
    },
    {
      "text": "Adaptability, Consistency, Invariability, Disposability",
      "correct": false
    }
  ]
});

question_1_javascript_beginner.save();
question_2_javascript_beginner.save();
question_3_javascript_beginner.save();
question_4_javascript_beginner.save();
question_5_javascript_beginner.save();
question_6_javascript_beginner.save();
question_7_javascript_intermediate.save();
question_8_javascript_intermediate.save();
question_9_javascript_expert.save();
question_10_javascript_expert.save();
question_11_postgres_beginner.save();
question_12_postgres_beginner.save();
question_13_postgres_beginner.save();
question_14_postgres_intermediate.save();
question_15_postgres_intermediate.save();
question_16_postgres_expert.save();
question_17_postgres_expert.save();

var tech_javascript = new Technology({
    name: 'javascript',
    questions:[question_1_javascript_beginner._id, question_2_javascript_beginner._id, question_3_javascript_beginner._id,
              question_4_javascript_beginner._id, question_5_javascript_beginner._id, question_6_javascript_beginner._id,
              question_7_javascript_intermediate._id, question_8_javascript_intermediate._id,
              question_9_javascript_expert._id, question_10_javascript_expert._id]
});

var tech_postgres = new Technology({
    name: 'postgres',
    questions:[question_11_postgres_beginner._id, question_12_postgres_beginner._id, question_13_postgres_beginner._id,
              question_14_postgres_intermediate._id, question_15_postgres_intermediate._id,
              question_16_postgres_expert._id, question_17_postgres_expert._id]
});

tech_javascript.save(function (err, tech_javascript) {
    if (err) return console.error(err);
    else {
        Area.findOne({ _id: tech_javascript._id})
            .populate('questions')
            .exec(function(error, posts) {
            console.log(error)
            console.log(JSON.stringify(posts, null, "\t"))
        })
    }
});

tech_postgres.save(function (err, tech_postgres) {
    if (err) return console.error(err);
    else {
        Area.findOne({ _id: tech_postgres._id})
            .populate('questions')
            .exec(function(error, posts) {
            console.log(error)
            console.log(JSON.stringify(posts, null, "\t"))
        })
    }
});

var area_web = new Area({
    name: 'web',
    technologies:[tech_javascript._id]
});

var area_databases = new Area({
    name: 'databases',
    technologies:[tech_postgres._id]
});

area_web.save(function (err, area_web) {
    if (err) return console.error(err);
    else {
        Area.findOne({ _id: area_web._id})
            .populate('technologies')
            .exec(function(error, posts) {
            console.log(error)
            console.log(JSON.stringify(posts, null, "\t"))
        })
    }
});

area_databases.save(function (err, area_databases) {
    if (err) return console.error(err);
    else {
        Area.findOne({ _id: area_databases._id})
            .populate('technologies')
            .exec(function(error, posts) {
            console.log(error)
            console.log(JSON.stringify(posts, null, "\t"))
        })
    }
});

var question_company = new Question({
  "question": "Esta é uma pergunta de teste inserida por uma empresa.",
  "code_sample": null,
  "explanation": null,
  "level": 1,
  "answers": [
    {
      "text": "Opção A",
      "correct": false
    },
    {
      "text": "Opção B",
      "correct": false
    },
    {
      "text": "Opção C",
      "correct": false
    },
    {
      "text": "Opção D",
      "correct": true
    }
  ]
});

question_company.save();

var company_1 = new Company({
  name: 'Google',
  questions:[question_company._id]
});

var company_2 = new Company({
  name: 'Yahoo',
  questions:[question_company._id]
});

var company_3 = new Company({
  name: 'Microsoft',
  questions:[question_company._id]
});

var company_4 = new Company({
  name: 'Outsystems',
  questions:[question_company._id]
});

var company_5 = new Company({
  name: 'Adobe',
  questions:[question_company._id]
});

company_1.save();
company_2.save();
company_3.save();
company_4.save();
company_5.save();

var question_1_windows = new Question({
  "question": "Qual é a maneira mais fácil de desisntalar um programa?",
  "code_sample": null,
  "explanation": null,
  "level": 1,
  "answers": [
    {
      "text": "Abrir o programa e começar a procurar pelo botão de desinstalar.",
      "correct": false
    },
    {
      "text": "Apagar a pasta do programa.",
      "correct": false
    },
    {
      "text": "Procurar pelo programa em \"Programs and Features\", no Painel de Controlo.",
      "correct": true
    }
  ]
});

var question_1_word = new Question({
  "question": "O espaçamento de linhas é feito dando \"enter\" depois de cada frase.",
  "code_sample": null,
  "explanation": null,
  "level": 1,
  "answers": [
    {
      "text": "verdadeiro",
      "correct": false
    },
    {
      "text": "falso",
      "correct": true
    }
  ]
});

var question_1_excel = new Question({
  "question": "Que função mostra dados de uma linha numa coluna ou dados de coluna numa linha?",
  "code_sample": null,
  "explanation": null,
  "level": 1,
  "answers": [
    {
      "text": "Hyperlink",
      "correct": false
    },
    {
      "text": "Index",
      "correct": false
    },
    {
      "text": "Transpose",
      "correct": true
    },
    {
      "text": "Rows",
      "correct": false
    }
  ]
});

var question_1_powerpoint = new Question({
  "question": "Qual é o atalho para inserir um novo diapositivo na apresentação?",
  "code_sample": null,
  "explanation": null,
  "level": 1,
  "answers": [
    {
      "text": "Ctrl + N",
      "correct": false
    },
    {
      "text": "Ctrl + M",
      "correct": true
    },
    {
      "text": "Ctrl + S",
      "correct": false
    },
    {
      "text": "Todas as anteriores.",
      "correct": false
    }
  ]
});

var question_1_sample = new Question({
  "question": "Isto é uma pergunta de teste.",
  "code_sample": null,
  "explanation": null,
  "level": 1,
  "answers": [
    {
      "text": "Opção A",
      "correct": false
    },
    {
      "text": "Opção B",
      "correct": true
    },
    {
      "text": "Opção C",
      "correct": false
    },
    {
      "text": "Opção D",
      "correct": false
    }
  ]
});

question_1_windows.save();
question_1_word.save();
question_1_excel.save();
question_1_powerpoint.save();
question_1_sample.save();

var general_windows = new General({
    name: 'Windows',
    questions:[question_1_windows._id]
});

var general_word = new General({
    name: 'Word',
    questions:[question_1_word._id]
});

var general_excel = new General({
    name: 'Excel',
    questions:[question_1_excel._id]
});

var general_powerpoint = new General({
    name: 'Powerpoint',
    questions:[question_1_powerpoint._id]
});

var general_gmail = new General({
    name: 'Gmail',
    questions:[question_1_sample._id]
});

var general_chrome = new General({
    name: 'Google Chrome',
    questions:[question_1_sample._id]
});

var general_android = new General({
    name: 'Android',
    questions:[question_1_sample._id]
});


general_windows.save();
general_word.save();
general_excel.save();
general_powerpoint.save();
general_gmail.save();
general_chrome.save();
general_android.save();