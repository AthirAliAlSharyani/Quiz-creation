
const questions = [
    // true/false
    {
       question_type:'true/false',
        level:'Easy',
        id: 60,
        question_category: 'Sciences',
        question: 'Photosynthesis is the process by which plants convert sunlight into water.',
        answers: ['True', 'False'],
        correctAnswer: 'False',
      },
      {
       question_type:'true/false',
        level:'Medium',
        id: 61,
        question_category: 'Sciences',
        question: 'The Earth orbits around the Moon.',
        answers: ['True', 'False'],
        correctAnswer: 'False',
      },
      {
       question_type:'true/false',
        level:'Medium',
        id: 62,
        question_category: 'Sciences',
        question: 'E=mc^2 is a famous equation in biology.',
        answers: ['True', 'False'],
        correctAnswer: 'False',
      },
      {
       question_type:'true/false',
        level:'Medium',
        id: 63,
        question_category: 'Sciences',
        question: 'All mammals lay eggs.',
        answers: ['True', 'False'],
        correctAnswer: 'False',
      },
      {
       question_type:'true/false',
        level:'Medium',
        id: 64,
        question_category: 'Sciences',
        question: 'The Earthَs core is primarily composed of iron and nickel.',
        answers: ['True', 'False'],
        correctAnswer: 'True',
      },
      {
       question_type:'true/false',
        level:'Easy',
        id: 65,
        question_category: 'Sciences',
        question: 'The process of nuclear fission powers the sun.',
        answers: ['True', 'False'],
        correctAnswer: 'False',
      },
      {
       question_type:'true/false',
        level:'Medium',
        id: 66,
        question_category: 'Sciences',
        question: 'Tides are primarily caused by the gravitational pull of the Moon.',
        answers: ['True', 'False'],
        correctAnswer: 'True',
      },
      {
       question_type:'true/false',
        level:'Medium',
        id: 67,
        question_category: 'Sciences',
        question: 'Hydrogen is the most abundant element in the universe.',
        answers: ['True', 'False'],
        correctAnswer: 'True',
      },
      {
       question_type:'true/false',
        level:'Medium',
        id: 68,
        question_category: 'Sciences',
        question: 'Viruses are considered living organisms.',
        answers: ['True', 'False'],
        correctAnswer: 'False',
      },
      {
       question_type:'true/false',
        level:'Medium',
        id: 69,
        question_category: 'Sciences',
        question: 'Evolution is a theory supported by the majority of scientists.',
        answers: ['True', 'False'],
        correctAnswer: 'True',
      },
      {
       question_type:'true/false',
        level:'Medium',
        id: 70,
        question_category: 'History',
        question: 'The French Revolution took place in the 19th century.',
        answers: ['True', 'False'],
        correctAnswer: 'False',
      },
      {
       question_type:'true/false',
        level:'Easy',
        id: 71,
        question_category: 'History',
        question: 'The Magna Carta was signed in the 14th century.',
        answers: ['True', 'False'],
        correctAnswer: 'False',
      },
      {
       question_type:'true/false',
        level:'Medium',
        id: 72,
        question_category: 'History',
        question: 'The Industrial Revolution began in Britain in the 18th century.',
        answers: ['True', 'False'],
        correctAnswer: 'True',
      },
      {
       question_type:'true/false',
        level:'Medium',
        id: 73,
        question_category: 'History',
        question: 'Christopher Columbus discovered America in the 15th century.',
        answers: ['True', 'False'],
        correctAnswer: 'True',
      },
      {
       question_type:'true/false',
        level:'Medium',
        id: 74,
        question_category: 'History',
        question: 'The Cold War ended in the early 1990s.',
        answers: ['True', 'False'],
        correctAnswer: 'True',
      },
      {
       question_type:'true/false',
        level:'Medium',
        id: 75,
        question_category: 'History',
        question: 'The Great Wall of China was built in the 17th century.',
        answers: ['True', 'False'],
        correctAnswer: 'False',
      },
      {
       question_type:'true/false',
        level:'Easy',
        id: 76,
        question_category: 'History',
        question: 'The Battle of Waterloo took place in the 18th century.',
        answers: ['True', 'False'],
        correctAnswer: 'False',
      },
      {
       question_type:'true/false',
        level:'Medium',
        id: 77,
        question_category: 'History',
        question: 'The Roman Empire fell in the 5th century AD.',
        answers: ['True', 'False'],
        correctAnswer: 'True',
      },
      {
       question_type:'true/false',
        level:'Medium',
        id: 78,
        question_category: 'History',
        question: 'The Berlin Wall fell in the 20th century.',
        answers: ['True', 'False'],
        correctAnswer: 'True',
      },
      {
       question_type:'true/false',
        level:'Easy',
        id: 79,
        question_category: 'History',
        question: 'The Declaration of Independence was signed in the 18th century.',
        answers: ['True', 'False'],
        correctAnswer: 'True',
      },
    
    {
       question_type:'true/false',
        level:'Hard',
      id: 40,
      question_category: 'Arts',
      question: 'Vincent Van Gogh was born in France.',
      answers: ['True', 'False'],
      correctAnswer: 'False',
    },
    {
       question_type:'true/false',
        level:'Easy',
      id: 41,
      question_category: 'Arts',
      question: 'Shakespeare wrote both poems and plays.',
      answers: ['True', 'False'],
      correctAnswer: 'True',
    },
    {
       question_type:'true/false',
        level:'Hard',
      id: 42,
      question_category: 'Arts',
      question: 'The Mona Lisa was stolen from the Louvre in 1911.',
      answers: ['True', 'False'],
      correctAnswer: 'True',
    },
    {
       question_type:'true/false',
        level:'Hard',
      id: 43,
      question_category: 'Arts',
      question: 'Michelangelo painted the ceiling of the Sistine Chapel by himself.',
      answers: ['True', 'False'],
      correctAnswer: 'True',
    },
    {
       question_type:'true/false',
        level:'Hard',
      id: 44,
      question_category: 'Arts',
      question: 'The "Rite of Spring" ballet incited a riot during its premiere.',
      answers: ['True', 'False'],
      correctAnswer: 'True',
    },
    {
       question_type:'true/false',
        level:'Hard',
      id: 45,
      question_category: 'Arts',
      question: 'Picasso is known for his Blue Period works.',
      answers: ['True', 'False'],
      correctAnswer: 'True',
    },
    {
       question_type:'true/false',
        level:'Hard',
      id: 46,
      question_category: 'Arts',
      question: 'Andy Warhol was a leading figure in the literature movement of the 1960s.',
      answers: ['True', 'False'],
      correctAnswer: 'False',
    },
    {
       question_type:'true/false',
        level:'Hard',
      id: 47,
      question_category: 'Arts',
      question: 'Frida Kahlo was primarily known for her abstract paintings.',
      answers: ['True', 'False'],
      correctAnswer: 'False',
    },
    {
       question_type:'true/false',
        level:'Hard',
      id: 48,
      question_category: 'Arts',
      question: 'The ballet "Swan Lake" was originally a commercial failure.',
      answers: ['True', 'False'],
      correctAnswer: 'True',
    },
    {
       question_type:'true/false',
        level:'Easy',
      id: 49,
      question_category: 'Arts',
      question: 'Leonardo da Vinci was also a skilled musician.',
      answers: ['True', 'False'],
      correctAnswer: 'True',
    },
    {
       question_type:'true/false',
        level:'Hard',
      id: 50,
      question_category: 'Technology',
      question: 'The first Apple computer was released in 1984.',
      answers: ['True', 'False'],
      correctAnswer: 'False',
    },
    {
        level:'Hard',
      id: 51,
      question_category: 'Technology',
      question_type:'true/false',
      question: 'Email was invented before the World Wide Web.',
      answers: ['True', 'False'],
      correctAnswer: 'True',
    },
    {
        level:'Hard',
      id: 52,
      question_category: 'Technology',
      question_type:'true/false',
      question: 'Bitcoin was the first cryptocurrency.',
      answers: ['True', 'False'],
      correctAnswer: 'True',
    },
    {
        level:'Easy',
      id: 53,
      question_category: 'Technology',
      question_type:'true/false',
      question: 'HTML is used for programming web applications.',
      answers: ['True', 'False'],
      correctAnswer: 'False',
    },
    {
        level:'Hard',
      id: 54,
      question_category: 'Technology',
      question_type:'true/false',
      question: 'The Internet and the World Wide Web are the same.',
      answers: ['True', 'False'],
      correctAnswer: 'False',
    },
    {
        level:'Easy',
      id: 55,
      question_category: 'Technology',
      question_type:'true/false',
      question: 'Wi-Fi is an abbreviation for "Wireless Fidelity".',
      answers: ['True', 'False'],
      correctAnswer: 'True',
    },
    {
        level:'Hard',
      id: 56,
      question_category: 'Technology',
      question_type:'true/false',
      question: 'Linux was first released in 1991 by Linus Torvalds.',
      answers: ['True', 'False'],
      correctAnswer: 'True',
    },
    {
        level:'Hard',
      id: 57,
      question_category: 'Technology',
      question_type:'true/false',
      question: 'The first iPhone was introduced in 2007.',
      answers: ['True', 'False'],
      correctAnswer: 'True',
    },
    {
        level:'Hard',
      id: 58,
      question_category: 'Technology',
      question_type:'true/false',
      question: 'Python is named after the snake.',
      answers: ['True', 'False'],
      correctAnswer: 'False',
    },
    {
        level:'Hard',
      id: 59,
      question_category: 'Technology',
      question_type:'true/false',
      question: 'SSL/TLS encryption is used to secure HTTP requests and responses.',
      answers: ['True', 'False'],
      correctAnswer: 'True',
    },


//Multipl choice questions 
  
      {
        level:'Easy',
        id: 43,
        question_category: 'Sciences',
            question_type:'Multiple Choice',
        question: 'What gas do plants absorb from the atmosphere for photosynthesis?',
        answers: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
        correctAnswer: 'Carbon Dioxide',
      },
      {
        level:'Hard',
        id: 47,
        question_category: 'Sciences',
            question_type:'Multiple Choice',
        question: 'What is the chemical symbol for water?',
        answers: ['H2O', 'CO2', 'NaCl', 'O2'],
        correctAnswer: 'H2O',
      },
      {
        level:'Hard',
        id: 48,
        question_category: 'Sciences',
            question_type:'Multiple Choice',
        question: 'Which planet is known as the Red Planet?',
        answers: ['Jupiter', 'Mars', 'Saturn', 'Venus'],
        correctAnswer: 'Mars',
      },
      {
        level:'Easy',
        id: 49,
        question_category: 'Sciences',
            question_type:'Multiple Choice',
        question: 'What is the hardest natural substance on Earth?',
        answers: ['Gold', 'Iron', 'Diamond', 'Silver'],
        correctAnswer: 'Diamond',
      },
      {
        level:'Easy',
        id: 100,
        question_category: 'Sciences',
            question_type:'Multiple Choice',
        question: 'How many bones are in the human body?',
        answers: ['206', '195', '210', '180'],
        correctAnswer: '206',
      },
      {
        level:'Hard',
        id: 131,
        question_category: 'Sciences',
            question_type:'Multiple Choice',
        question: 'What is the study of mushrooms called?',
        answers: ['Mycology', 'Botany', 'Zoology', 'Geology'],
        correctAnswer: 'Mycology',
      },
      {
        level:'Easy',
        id: 122,
        question_category: 'Sciences',
            question_type:'Multiple Choice',
        question: 'What vitamin is produced when the human body is exposed to sunlight?',
        answers: ['Vitamin A', 'Vitamin B12', 'Vitamin D', 'Vitamin C'],
        correctAnswer: 'Vitamin D',
      },
      {
        level:'Medium',
        id: 113,
        question_category: 'Sciences',
            question_type:'Multiple Choice',
        question: 'Which element has the highest electrical conductivity?',
        answers: ['Copper', 'Gold', 'Silver', 'Aluminum'],
        correctAnswer: 'Silver',
      },
      {
        level:'Medium',
        id: 149,
        question_category: 'Sciences',
            question_type:'Multiple Choice',
        question: 'Which human organ is capable of regenerating tissue?',
        answers: ['Liver', 'Heart', 'Lung', 'Kidney'],
        correctAnswer: 'Liver',
      },
      {
        level:'Easy',
        id: 265,
        question_category: 'History',
            question_type:'Multiple Choice',
        question: 'Who was the first President of the United States?',
        answers: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'John Adams'],
        correctAnswer: 'George Washington',
      },
      {
        level:'Medium',
        id: 153,
        question_category: 'History',
            question_type:'Multiple Choice',
        question: 'What year did the Titanic sink?',
        answers: ['1912', '1905', '1898', '1923'],
        correctAnswer: '1912',
      },
      {
        level:'Medium',
        id: 1621,
        question_category: 'History',
            question_type:'Multiple Choice',
        question: 'Who discovered penicillin?',
        answers: ['Marie Curie', 'Alexander Fleming', 'Thomas Edison', 'Albert Einstein'],
        correctAnswer: 'Alexander Fleming',
      },
      {
        level:'Medium',
        id: 172,
        question_category: 'History',
            question_type:'Multiple Choice',
        question: 'Which civilization built the Pyramids of Giza?',
        answers: ['Roman', 'Egyptian', 'Mayan', 'Incan'],
        correctAnswer: 'Egyptian',
      },
      {
        level:'Easy',
        id: 181,
        question_category: 'History',
            question_type:'Multiple Choice',
        question: 'Who was known as the Iron Lady?',
        answers: ['Margaret Thatcher', 'Indira Gandhi', 'Angela Merkel', 'Queen Elizabeth II'],
        correctAnswer: 'Margaret Thatcher',
      },
      {
        level:'Hard',
        id: 190,
        question_category: 'History',
            question_type:'Multiple Choice',
        question: 'What event began on July 28, 1914?',
        answers: ['World War I', 'The Great Depression', 'World War II', 'The Cold War'],
        correctAnswer: 'World War I',
      },
      {
        level:'Easy',
        id: 250,
        question_category: 'History',
            question_type:'Multiple Choice',
        question: 'Who wrote the Declaration of Independence?',
        answers: ['Thomas Jefferson', 'George Washington', 'John Adams', 'Benjamin'],
        correctAnswer:'George Washington'
      },
      {
        level:'Hard',
          id: 521,
          question_category: 'Arts',
              question_type:'Multiple Choice',
          question: 'What period is Vincent Van Gogh associated with?',
          answers: ['Renaissance', 'Baroque', 'Post-Impressionism', 'Romanticism'],
          correctAnswer: 'Post-Impressionism',
        },
        {
            level:'Easy',
          id: 522,
          question_category: 'Arts',
              question_type:'Multiple Choice',
          question: 'In which city is the Louvre Museum located?',
          answers: ['Paris', 'London', 'New York', 'Berlin'],
          correctAnswer: 'Paris',
        },
        {
            level:'Easy',
          id: 235,
          question_category: 'Arts',
              question_type:'Multiple Choice',
          question: 'What is the art technique of using small pieces of tile, glass, or stone to create an image called?',
          answers: ['Mosaic', 'Fresco', 'Gouache', 'Collage'],
          correctAnswer: 'Mosaic',
        },
        {
            level:'Hard',
          id: 244,
          question_category: 'Arts',
              question_type:'Multiple Choice',
          question: 'Who composed the Four Seasons?',
          answers: ['Ludwig van Beethoven', 'Antonio Vivaldi', 'Johann Sebastian Bach', 'Wolfgang Amadeus Mozart'],
          correctAnswer: 'Antonio Vivaldi',
        },
        {
            level:'Easy',
          id: 254,
          question_category: 'Arts',
              question_type:'Multiple Choice',
          question: 'What is the primary material used in sculpture by Auguste Rodin?',
          answers: ['Bronze', 'Marble', 'Clay', 'Wood'],
          correctAnswer: 'Bronze',
        },
        {
            level:'Hard',
          id: 263,
          question_category: 'Arts',
              question_type:'Multiple Choice',
          question: 'Which art movement is Salvador Dalí associated with?',
          answers: ['Cubism', 'Surrealism', 'Impressionism', 'Expressionism'],
          correctAnswer: 'Surrealism',
        },
        {
            level:'Hard',
          id: 272,
          question_category: 'Arts',
              question_type:'Multiple Choice',
          question: 'The ballet "Swan Lake" was composed by which musician?',
          answers: ['Pyotr Ilyich Tchaikovsky', 'Sergei Prokofiev', 'Igor Stravinsky', 'Dmitri Shostakovich'],
          correctAnswer: 'Pyotr Ilyich Tchaikovsky',
        },
        {
            level:'Easy',
          id: 282,
          question_category: 'Arts',
              question_type:'Multiple Choice',
          question: 'Which painter is famous for the artwork "The Scream"?',
          answers: ['Edvard Munch', 'Pablo Picasso', 'Vincent van Gogh', 'Francis Bacon'],
          correctAnswer: 'Edvard Munch',
        },
        {
            level:'Medium',
          id: 2910,
          question_category: 'Arts',
              question_type:'Multiple Choice',
          question: 'What is the Japanese art of folding paper called?',
          answers: ['Origami', 'Ikebana', 'Ukiyo-e', 'Kintsugi'],
          correctAnswer: 'Origami',
        },
        {
            level:'Hard',
          id: 3000,
          question_category: 'Arts',
              question_type:'Multiple Choice',
          question: 'What technique did Andy Warhol popularize in the art world?',
          answers: ['Decoupage', 'Screen printing', 'Pointillism', 'Spray painting'],
          correctAnswer: 'Screen printing',
        },
        
       
        {
            level:'Hard',
          id: 3111,
          question_category: 'Technology',
          question_type:'Multiple Choice',
          question: 'Who is known as the father of computer science?',
          answers: ['Alan Turing', 'Bill Gates', 'Steve Jobs', 'Tim Berners-Lee'],
          correctAnswer: 'Alan Turing',
        },
        {
            level:'Hard',
          id: 3222,
          question_category: 'Technology',
          question_type:'Multiple Choice',
          question: 'What is the most popular programming language in 2022?',
          answers: ['Java', 'Python', 'C++', 'JavaScript'],
          correctAnswer: 'Python',
        },
        {
            level:'Hard',
          id: 3333,
          question_category: 'Technology',
          question_type:'Multiple Choice',
          question: 'What does "www" stand for in a website URL?',
          answers: ['Web World Wide', 'World Wide Web', 'World Web Wide', 'Wide World Web'],
          correctAnswer: 'World Wide Web',
        },
        {
            level:'Easy',
          id: 3422,
          question_category: 'Technology',
          question_type:'Multiple Choice',
          question: 'Which company developed the first commercially available microprocessor?',
          answers: ['Intel', 'IBM', 'Apple', 'Microsoft'],
          correctAnswer: 'Intel',
        },
        {
            level:'Hard',
          id: 3115,
          question_category: 'Technology',
          question_type:'Multiple Choice',
          question: 'What does GPU stand for?',
          answers: ['Graphics Processing Unit', 'General Processing Unit', 'Gaming Processing Unit', 'Graphical Performance Unit'],
          correctAnswer: 'Graphics Processing Unit',
        },
        {
            level:'Hard',
          id: 2336,
          question_category: 'Technology',
          question_type:'Multiple Choice',
          question: 'What is the function of a router in a computer network?',
          answers: ['Transmit data between different networks', 'Connect multiple computers in a LAN', 'Block incoming network traffic', 'Amplify Wi-Fi signals'],
          correctAnswer: 'Transmit data between different networks',
        },
        {
            level:'Hard',
          id: 46537,
          question_category: 'Technology',
          question_type:'Multiple Choice',
          question: 'Which programming language is commonly used for building web applications?',
          answers: ['Java', 'Python', 'C#', 'JavaScript'],
          correctAnswer: 'JavaScript',
        },
        {
            level:'Easy',
          id: 32138,
          question_category: 'Technology',
          question_type:'Multiple Choice',
          question: 'What is the term for a program that replicates itself and spreads to other computers?',
          answers: ['Virus', 'Worm', 'Trojan Horse', 'Spyware'],
          correctAnswer: 'Worm',
        },
        {
            level:'Medium',
          id: 9839,
          question_category: 'Technology',
          question_type:'Multiple Choice',
          question: 'What is the name of the process that converts source code into machine code?',
          answers: ['Interpretation', 'Compilation', 'Translation', 'Execution'],
          correctAnswer: 'Compilation',
        },
        {
            level:'Medium',
          id: 3340,
          question_category: 'Technology',
          question_type:'Multiple Choice',
          question: 'What does HTML stand for?',
          answers: ['Hyper Trainer Marking Language', 'Hyper Text Marketing Language', 'Hyper Text Markup Language', 'Hyper Text Markup Leveler'],
          correctAnswer: 'Hyper Text Markup Language',
        },
        {
            level:'Easy',
          id: 2241,
          question_category: 'Technology',
          question_type:'Multiple Choice',
          question: 'Which company developed the Android operating system?',
          answers: ['Apple', 'Microsoft', 'Google', 'Samsung'],
          correctAnswer: 'Google',
        },
    ];
    
    export default questions;