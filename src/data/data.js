const data = {
  quizSets: [
    { value: 10, name: "General cardano" },
    { value: 20, name: "Haskell & plutus" },
    { value: 30, name: "General catalyst" },
    { value: 40, name: "General smart contract" },
  ],
  quizzes: [{
    id: 10,
    resultMessage: "Cardano developer",
    passedMessage: "passed", failedMessage: "failed",
    quiz: [
      {
        singleChoice: true,
        id: 1,
        index: 0,
        result: false,
        title: "What model Cardano uses to store wallet information 10",
        choices: [
          { name: "name", value: false, label: "UTXOs", id: 1,  isRight: true, },
          {
            name: "name1",
            value: false,
            label: "Account & UTXOs",
            id: 1,
           
          },
          { name: "name2", value: false, label: "Account", id: 1 },
          { name: "name4", value: false, label: "None of above", id: 1 },
        ],
      },
      {
        id: 2,
        title: "Plutus is only way to develop Cardano smart contract",
        singleChoice: true,
        result: false,
        index: 1,
        choices: [
          { name: "name", value: false, label: "Yes", id: 2 },
          { name: "name1", value: false, label: "No", id: 2, isRight: true },
          {
            name: "name2",
            value: false,
            label: "We can use also other method",
            id: 2,
          },
        ],
      },

      {
        id: 3,
        title: "What is current Cardano era",
        singleChoice: false,
        index: 2,
        result: false,
        choices: [
          { name: "name", value: false, label: "Byron", id: 3, isRight: true },
          {
            name: "name1",
            value: false,
            label: "Babage",
            id: 3,
            isRight: true,
          },
          { name: "name2", value: false, label: "Goguen", id: 3 },
          { name: "name2", value: false, label: "Shelley", id: 3 },
        ],
      },
      {
        id: 4,
        index: 3,
        title: "Cardano transactions need to be signed by vKey",
        singleChoice: true,
        result: false,
        choices: [
          { name: "name", value: false, label: "Yes", id: 4, isRight: true },
          { name: "name1", value: false, label: "No", id: 4, isRight: false },
          {
            name: "name2",
            value: false,
            label: "We need both vKey and sKey",
            id: 4,
          },
          { name: "name3", value: false, label: "None of above", id: 4 },
        ],
      },
    ]
  },
  {
    id: 20,
    passedMessage: "passed", failedMessage: "failed",
    quiz: [
      {
        singleChoice: true,
        id: 1,
        index: 0,
        result: false,
        title: "What model Cardano uses to store wallet information 20 ",
        choices: [
          { name: "name", value: false, label: "UTXOs", id: 1 },
          {
            name: "name1",
            value: false,
            label: "Account & UTXOs",
            id: 1,
            isRight: true,
          },
          { name: "name2", value: false, label: "Account", id: 1,},
          { name: "name4", value: false, label: "None of above", id: 1 },
        ],
      },
      {
        singleChoice: true,
        id: 10,
        result: false,
        index: 1,
        title: "What model Cardano uses to store wallet information 20 ",
        choices: [
          { name: "name", value: false, label: "UTXOs", id: 10 },
          {
            name: "name1",
            value: false,
            label: "Account & UTXOs",
            id: 1,
            isRight: true,
          },
          { name: "name2", value: false, label: "Account", id: 10},
          { name: "name4", value: false, label: "None of above", id: 10 },
        ],
      },
      {
        id: 2,
        title: "Plutus is only way to develop Cardano smart contract",
        singleChoice: true,
        index: 2,
        result: false,
        choices: [
          { name: "name", value: false, label: "Yes", id: 2 },
          { name: "name1", value: false, label: "No", id: 2, isRight: true },
          {
            name: "name2",
            value: false,
            label: "We can use also other method",
            id: 2,
          },
        ],
      },

      {
        id: 3,
        index: 3,
        title: "What is current Cardano era",
        singleChoice: false,
        result: false,
        choices: [
          { name: "name", value: false, label: "Byron", id: 3, isRight: true },
          {
            name: "name1",
            value: false,
            label: "Babage",
            id: 3,
            isRight: true,
          },
          { name: "name2", value: false, label: "Goguen", id: 3 },
          { name: "name2", value: false, label: "Shelley", id: 3 },
        ],
      },
      {
        id: 4,
        index: 4,
        title: "Cardano transactions need to be signed by vKey",
        singleChoice: true,
        result: false,
        choices: [
          { name: "name", value: false, label: "Yes", id: 4, isRight: true },
          { name: "name1", value: false, label: "No", id: 4, isRight: false },
          {
            name: "name2",
            value: false,
            label: "We need both vKey and sKey",
            id: 4,
          },
          { name: "name3", value: false, label: "None of above", id: 4 },
        ],
      },
    ]
  },
  {
    id: 30,
    passedMessage: "passed", failedMessage: "failed",    quiz: [
      {
        singleChoice: true,
        id: 1,
        index: 0,
        result: false,
        title: "What model Cardano uses to store wallet information 30",
        choices: [
          { name: "name", value: false, label: "UTXOs", id: 1 },
          {
            name: "name1",
            value: false,
            label: "Account & UTXOs",
            id: 1,
          
          },
          { name: "name2", value: false, label: "Account", id: 1 },
          { name: "name4", value: false, label: "None of above", id: 1, isRight: true, },
        ],
      },
      {
        id: 2,
        index: 1,
        title: "Plutus is only way to develop Cardano smart contract",
        singleChoice: true,
        result: false,
        choices: [
          { name: "name", value: false, label: "Yes", id: 2 },
          { name: "name1", value: false, label: "No", id: 2, isRight: true },
          {
            name: "name2",
            value: false,
            label: "We can use also other method",
            id: 2,
          },
        ],
      },

      {
        id: 3,
        index: 2,
        title: "What is current Cardano era",
        singleChoice: false,
        result: false,
        choices: [
          { name: "name", value: false, label: "Byron", id: 3, isRight: true },
          {
            name: "name1",
            value: false,
            label: "Babage",
            id: 3,
            isRight: true,
          },
          { name: "name2", value: false, label: "Goguen", id: 3 },
          { name: "name2", value: false, label: "Shelley", id: 3 },
        ],
      },
      {
        id: 4,
        index: 3,
        title: "Cardano transactions need to be signed by vKey",
        singleChoice: true,
        result: false,
        choices: [
          { name: "name", value: false, label: "Yes", id: 4, isRight: true },
          { name: "name1", value: false, label: "No", id: 4, isRight: false },
          {
            name: "name2",
            value: false,
            label: "We need both vKey and sKey",
            id: 4,
          },
          { name: "name3", value: false, label: "None of above", id: 4 },
        ],
      },
    ]
  },
  {
    id: 40,
    passedMessage: "passed", failedMessage: "failed",    quiz: [
      {
        singleChoice: true,
        id: 1,
        index: 0,
        result: false,
        title: "What model Cardano uses to store wallet information 40",
        choices: [
          { name: "name", value: false, label: "UTXOs", id: 1 },
          {
            name: "name1",
            value: false,
            label: "Account & UTXOs",
            id: 1,
            isRight: true,
          },
          { name: "name2", value: false, label: "Account", id: 1 },
          { name: "name4", value: false, label: "None of above", id: 1 },
        ],
      },
      {
        id: 2,
        index: 1,
        title: "Plutus is only way to develop Cardano smart contract",
        singleChoice: true,
        result: false,
        choices: [
          { name: "name", value: false, label: "Yes", id: 2 },
          { name: "name1", value: false, label: "No", id: 2, isRight: true },
          {
            name: "name2",
            value: false,
            label: "We can use also other method",
            id: 2,
          },
        ],
      },

      {
        id: 3,
        index: 2,
        title: "What is current Cardano era",
        singleChoice: false,
        result: false,
        choices: [
          { name: "name", value: false, label: "Byron", id: 3, isRight: true },
          {
            name: "name1",
            value: false,
            label: "Babage",
            id: 3,
            isRight: true,
          },
          { name: "name2", value: false, label: "Goguen", id: 3 },
          { name: "name2", value: false, label: "Shelley", id: 3 },
        ],
      },
      {
        id: 4,
        index: 3,
        title: "Cardano transactions need to be signed by vKey",
        singleChoice: true,
        result: false,
        choices: [
          { name: "name", value: false, label: "Yes", id: 4, isRight: true },
          { name: "name1", value: false, label: "No", id: 4, isRight: false },
          {
            name: "name2",
            value: false,
            label: "We need both vKey and sKey",
            id: 4,
          },
          { name: "name3", value: false, label: "None of above", id: 4 },
        ],
      },
    ]
  }]
}

export default data;