exports.PositiveSearchList = [ 
    "woman and men",
    "girl and boy",
    "women and men",
    "girls and boys",
    "wife and husband",
    "wives and husbands",
    "daughter and son",
    "daughters and sons",
    "her and his",
    "eve and adam",
    "sisterly love",
    "cabin attendant",
    "choir girl",
    "sisterly love",
    "non-identical twins",
    "founding mother",
    "front woman",
    "grandparent clause",
    "honored attendant",
    "woman of the house",
    "honored attendant",
    "modern people",
    "superstition",
    "Renaissance person",
    "Aunt Sam"
];

exports.PositiveDatabase = {

    "woman and men": { "BonusPoints": 2 },
    "girl and boy": { "BonusPoints": 2 },
    "women and men": { "BonusPoints": 2 },
    "girls and boys": { "BonusPoints": 2 },
    "wives and husbands": { "BonusPoints": 2 },
    "wife and husband": { "BonusPoints": 3 },
    "daughter and son": { "BonusPoints": 2 },
    "daughters and sons": { "BonusPoints": 2 },
    "her and his": { "BonusPoints": 2 },
    "eve and adam": { "BonusPoints": 2 },
    "sisterly love": { "BonusPoints": 1 },
    "cabin attendant": { "BonusPoints": 1 },
    "choir girl": { "BonusPoints": 1 },
    "sisterly love": { "BonusPoints": 1 },
    "non-identical twins": { "BonusPoints": 1 },
    "founding mother": { "BonusPoints": 1 },
    "front woman": { "BonusPoints": 1 },
    "grandparent clause": { "BonusPoints": 1 },
    "honored attendant": { "BonusPoints": 1 },
    "woman of the house": { "BonusPoints": 1 },
    "honored attendant": { "BonusPoints": 1 },
    "modern people": { "BonusPoints": 1 },
    "superstition": { "BonusPoints": 1 },
    "Renaissance person": { "BonusPoints": 1 },
    "Aunt Sam": { "BonusPoints": 1 }
    
};

exports.ProblematicSearchList = [
    "man and woman",
    "boy and girl",
    "men and women",
    "boys and girls",
    "husband and wife",
    "husbands and wives",
    "man and wife",
    "son and daughter",
    "sons and daughters",
    "his and her",
    "adam and eve",
    "blind man",
    "boss man",
    "boss lady",
    "brotherly love",
    "cabin boy",
    "choir boy",
    "brew master",
    "brotherly love",
    "common man",
    "confidence man",
    "cabin boy",
    "drum majorette",
    "enlisted man",
    "fall guy",
    "fraternal twins",
    "founding father",
    "front man",
    "gentlemen's agreement",
    "grandfather clause",
    "inside man",
    "insurance man",
    "jazz man",
    "John Q. Public",
    "king's ransom",
    "learned man",
    "lookout man",
    "maid of honor",
    "maintenance man",
    "male nurse",
    "man about town",
    "man of action",
    "man of distinction",
    "man of the year",
    "man on the street",
    "man's best friend",
    "man's work",
    "man of the house",
    "marked man",
    "master key",
    "master plan",
    "master's degree",
    "matron of honor",
    "mechanical man",
    "medicine man",
    "men working",
    "meter maid",
    "modern man",
    "mother lode",
    "night watchman",
    "office boy",
    "old wives' tale",
    "prodigal son",
    "publicity man",
    "Renaissance man",
    "right-hand man",
    "straw man",
    "to a man",
    "trash man",
    "Uncle Sam",
    "workman's compensation",
    "little old lady",
    "you guys",
    "hi guys",
    "hey guys",
    "those guys",
    "these guys",
    "Faded beauty",
    "her period",
    "Ice queen",
    "militant feminist",
    "their period",
    "your period"
];

exports.ProblematicDatabase = {
    "man and woman": { GNReplacement: "people", FemReplacement: "woman and men", WarningMessage: "", ProblemPoints: 1 },
    "boy and girl": { GNReplacement: "children", FemReplacement: "girl and boy", WarningMessage: "", ProblemPoints: 1 },
    "men and women": { GNReplacement: "people", FemReplacement: "women and men", WarningMessage: "", ProblemPoints: 1 },
    "boys and girls": { GNReplacement: "children", FemReplacement: "girls and boys", WarningMessage: "", ProblemPoints: 1 },
    "husband and wife": { GNReplacement: "partners", FemReplacement: "wife and husband", WarningMessage: "", ProblemPoints: 1 },
    "husbands and wives": { GNReplacement: "partners", FemReplacement: "wives and husbands", WarningMessage: "", ProblemPoints: 1 },
    "man and wife": { GNReplacement: "partners", FemReplacement: "wife and husband", WarningMessage: "", ProblemPoints: 1 },
    "son and daughter": { GNReplacement: "children", FemReplacement: "daughter and son", WarningMessage: "", ProblemPoints: 1 },
    "sons and daughters": { GNReplacement: "children", FemReplacement: "daughters and sons", WarningMessage: "", ProblemPoints: 1 },
    "his and her": { GNReplacement: "their", FemReplacement: "her and his", WarningMessage: "", ProblemPoints: 1 },
    "adam and eve": { GNReplacement: "biblical progenitors according to Christianity", FemReplacement: "eve and adam", WarningMessage: "", ProblemPoints: 0 },
    "blind man": { GNReplacement: "blind person", FemReplacement: "blind woman", WarningMessage: "", ProblemPoints: 1 },
    "boss man": { GNReplacement: "boss", FemReplacement: "boss woman", WarningMessage: "", ProblemPoints: 1 },
    "boss lady": { GNReplacement: "boss", FemReplacement: "boss woman", WarningMessage: "", ProblemPoints: 1 },
    "brotherly love": { GNReplacement: "kind", FemReplacement: "sisterly love", WarningMessage: "", ProblemPoints: 1 },
    "cabin boy": { GNReplacement: "cabin attendant", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "choir boy": { GNReplacement: "choir member", FemReplacement: "choir girl", WarningMessage: "", ProblemPoints: 1 },
    "brew master": { GNReplacement: "brew director", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "brotherly love": { GNReplacement: "kind", FemReplacement: "sisterly love", WarningMessage: "", ProblemPoints: 1 },
    "common man": { GNReplacement: "commoner", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "confidence man": { GNReplacement: "swindler", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "cabin boy": { GNReplacement: "cabin attendant", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "drum majorette": { GNReplacement: "drum major", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "enlisted man": { GNReplacement: "recruit", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "fall guy": { GNReplacement: "scapegoat", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "fraternal twins": { GNReplacement: "non-identical twins", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "founding father": { GNReplacement: "founder", FemReplacement: "founding mother", WarningMessage: "", ProblemPoints: 1 },
    "front man": { GNReplacement: "front person", FemReplacement: "front woman", WarningMessage: "", ProblemPoints: 1 },
    "gentlemen's agreement": { GNReplacement: "unwritten agreement", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "grandfather clause": { GNReplacement: "grandparent clause", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "inside man": { GNReplacement: "insider", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "insurance man": { GNReplacement: "insurance agent", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "jazz man": { GNReplacement: "jazz player", FemReplacement: "", WarningMessage: "", ProblemPoints: 2 },
    "John Q. Public": { GNReplacement: "the public", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "king's ransom": { GNReplacement: "valuable", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "learned man": { GNReplacement: "learned person", FemReplacement: "learned woman", WarningMessage: "", ProblemPoints: 2 },
    "lookout man": { GNReplacement: "lookout", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "maid of honor": { GNReplacement: "honored attendant", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "maintenance man": { GNReplacement: "caretaker", FemReplacement: "maintenance woman", WarningMessage: "", ProblemPoints: 1 },
    "male nurse": { GNReplacement: "nurse", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "man about town": { GNReplacement: "bon vivant", FemReplacement: "woman about town", WarningMessage: "", ProblemPoints: 1 },
    "man of action": { GNReplacement: "go-getter", FemReplacement: "woman of action", WarningMessage: "", ProblemPoints: 2 },
    "man of distinction": { GNReplacement: "person of distinction", FemReplacement: "woman of distinction", WarningMessage: "", ProblemPoints: 1 },
    "man of the year": { GNReplacement: "person of the year", FemReplacement: "woman of the year", WarningMessage: "", ProblemPoints: 1 },
    "man on the street": { GNReplacement: "ordinary citizen", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "man's best friend": { GNReplacement: "human's best friend", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "man's work": { GNReplacement: "work", FemReplacement: "woman's work", WarningMessage: "", ProblemPoints: 1 },
    "man of the house": { GNReplacement: "head of the house", FemReplacement: "woman of the house", WarningMessage: "", ProblemPoints: 1 },
    "marked man": { GNReplacement: "target", FemReplacement: "marked woman", WarningMessage: "", ProblemPoints: 1 },
    "master key": { GNReplacement: "passkey", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "master plan": { GNReplacement: "primary plan", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "master's degree": { GNReplacement: "graduate degree", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "matron of honor": { GNReplacement: "honored attendant", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "mechanical man": { GNReplacement: "robot", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "medicine man": { GNReplacement: "faith healer", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "men working": { GNReplacement: "people working", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "meter maid": { GNReplacement: "parking enforcement officer", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "modern man": { GNReplacement: "modern people", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "mother lode": { GNReplacement: "stockpile", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "night watchman": { GNReplacement: "night security guard", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "office boy": { GNReplacement: "clerk", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "old wives' tale": { GNReplacement: "superstition", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "prodigal son": { GNReplacement: "returning child", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "publicity man": { GNReplacement: "publicist", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "Renaissance man": { GNReplacement: "Renaissance person", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "right-hand man": { GNReplacement: "main assistant", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "straw man": { GNReplacement: "test theory", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "to a man": { GNReplacement: "to a person", FemReplacement: "to a woman", WarningMessage: "", ProblemPoints: 1 },
    "trash man": { GNReplacement: "trash collector", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "Uncle Sam": { GNReplacement: "United States", FemReplacement: "Aunt Sam", WarningMessage: "", ProblemPoints: 1 },
    "workman's compensation": { GNReplacement: "workers' compensation", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "little old lady": { GNReplacement: "elderly person", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "you guys": { GNReplacement: "you all", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "hi guys": { GNReplacement: "hi all", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "hey guys": { GNReplacement: "hey all", FemReplacement: "", WarningMessage: "", ProblemPoints: 1 },
    "those guys": { GNReplacement: "those people", FemReplacement: "those women", WarningMessage: "", ProblemPoints: 1 },
    "these guys": { GNReplacement: "these people", FemReplacement: "these women", WarningMessage: "", ProblemPoints: 1 },
    "Faded beauty": { GNReplacement: "", FemReplacement: "", WarningMessage: "The term 'Faded beauty', is generally offensive, you should not send this text to anyone before removing it.", ProblemPoints: 999999999 },
    "her period": { GNReplacement: "", FemReplacement: "", WarningMessage: "The term 'her period', is generally offensive, you should not send this text to anyone before removing it.", ProblemPoints: 999999999 },
    "Ice queen": { GNReplacement: "", FemReplacement: "", WarningMessage: "The term 'Ice queen', is generally offensive, you should not send this text to anyone before removing it.", ProblemPoints: 999999999 },
    "militant feminist": { GNReplacement: "", FemReplacement: "", WarningMessage: "The term 'militant feminist', is generally offensive, you should not send this text to anyone before removing it.", ProblemPoints: 999999999 },
    "their period": { GNReplacement: "", FemReplacement: "", WarningMessage: "The term 'their period', is generally offensive, you should not send this text to anyone before removing it.", ProblemPoints: 999999999 },
    "your period": { GNReplacement: "", FemReplacement: "", WarningMessage: "The term 'your period', is generally offensive, you should not send this text to anyone before removing it.", ProblemPoints: 999999999 }
};