const firstNames = {
  male: {
    usa: ['james', 'john', 'robert', 'michael', 'william', 'david', 'richard', 'joseph', 'thomas', 'charles', 'christopher', 'daniel', 'matthew', 'anthony', 'mark'],
    uk: ['oliver', 'george', 'harry', 'noah', 'jack', 'leo', 'jacob', 'freddie', 'alfie', 'oscar', 'charlie', 'henry', 'archie', 'thomas', 'joshua'],
    germany: ['maximilian', 'alexander', 'paul', 'elias', 'leon', 'louis', 'jonas', 'noah', 'felix', 'lukas', 'ben', 'finn', 'emil', 'oskar', 'theo'],
    france: ['gabriel', 'louis', 'raphael', 'jules', 'arthur', 'adam', 'lucas', 'hugo', 'nathan', 'leo', 'ethan', 'theo', 'tom', 'noah', 'liam'],
    canada: ['liam', 'noah', 'benjamin', 'oliver', 'lucas', 'william', 'ethan', 'jacob', 'james', 'alex', 'logan', 'jack', 'thomas', 'owen', 'charlie'],
    australia: ['oliver', 'noah', 'william', 'jack', 'leo', 'lucas', 'thomas', 'henry', 'charlie', 'isaac', 'hudson', 'liam', 'james', 'ethan', 'mason'],
    italy: ['francesco', 'leonardo', 'alessandro', 'lorenzo', 'mattia', 'andrea', 'gabriele', 'riccardo', 'tommaso', 'edoardo', 'giuseppe', 'antonio', 'marco', 'luca', 'giovanni'],
    spain: ['lucas', 'hugo', 'martin', 'daniel', 'pablo', 'alejandro', 'manuel', 'alvaro', 'adrian', 'david', 'javier', 'sergio', 'carlos', 'diego', 'miguel'],
    austria: ['maximilian', 'david', 'jakob', 'felix', 'elias', 'paul', 'lukas', 'tobias', 'leon', 'jonas', 'noah', 'alexander', 'simon', 'moritz', 'raphael'],
    switzerland: ['noah', 'liam', 'leon', 'luca', 'gabriel', 'julian', 'david', 'louis', 'samuel', 'daniel', 'nico', 'elias', 'matteo', 'finn', 'leo'],
    netherlands: ['sem', 'lucas', 'finn', 'daan', 'levi', 'milan', 'jesse', 'noah', 'james', 'benjamin', 'luuk', 'bram', 'thijs', 'lars', 'max'],
    sweden: ['lucas', 'liam', 'william', 'elias', 'noah', 'oliver', 'oscar', 'hugo', 'adam', 'alexander', 'axel', 'emil', 'theo', 'isak', 'viktor'],
    denmark: ['william', 'noah', 'oscar', 'lucas', 'victor', 'alfred', 'carl', 'malthe', 'emil', 'valdemar', 'oliver', 'august', 'magnus', 'frederik', 'christian'],
    norway: ['emil', 'noah', 'oliver', 'william', 'lucas', 'theodor', 'felix', 'oskar', 'isak', 'mathias', 'filip', 'henrik', 'jakob', 'alexander', 'magnus'],
    newzealand: ['oliver', 'jack', 'noah', 'leo', 'lucas', 'thomas', 'george', 'william', 'james', 'henry', 'charlie', 'mason', 'liam', 'benjamin', 'ethan'],
    india: ['aarav', 'vivaan', 'aditya', 'arjun', 'sai', 'aryan', 'reyansh', 'ayaan', 'krishna', 'ishaan', 'shaurya', 'atharv', 'advik', 'pranav', 'vihaan'],
    japan: ['haruto', 'yuto', 'sota', 'haruki', 'yuito', 'hinata', 'riku', 'kaito', 'ren', 'sora', 'yuki', 'hayato', 'takumi', 'ryo', 'daiki'],
    china: ['wei', 'jun', 'ming', 'hao', 'chen', 'yang', 'lei', 'tao', 'jie', 'feng', 'long', 'bo', 'kai', 'xin', 'yong'],
    brazil: ['miguel', 'arthur', 'heitor', 'bernardo', 'theo', 'davi', 'gabriel', 'pedro', 'lucas', 'matheus', 'rafael', 'guilherme', 'felipe', 'bruno', 'eduardo'],
    mexico: ['santiago', 'mateo', 'sebastian', 'matias', 'diego', 'emiliano', 'daniel', 'alexander', 'leonardo', 'angel', 'jose', 'luis', 'carlos', 'miguel', 'david'],
  },
  female: {
    usa: ['mary', 'patricia', 'jennifer', 'linda', 'elizabeth', 'barbara', 'susan', 'jessica', 'sarah', 'karen', 'emily', 'ashley', 'emma', 'olivia', 'sophia'],
    uk: ['olivia', 'amelia', 'isla', 'ava', 'mia', 'isabella', 'sophia', 'rosie', 'ella', 'grace', 'lily', 'emily', 'poppy', 'evie', 'charlotte'],
    germany: ['emma', 'hannah', 'mia', 'sofia', 'emilia', 'lina', 'lena', 'mila', 'lea', 'marie', 'anna', 'clara', 'luisa', 'ella', 'charlotte'],
    france: ['jade', 'louise', 'emma', 'alice', 'chloé', 'lina', 'léa', 'manon', 'rose', 'anna', 'camille', 'sarah', 'clara', 'inès', 'zoé'],
    canada: ['olivia', 'emma', 'charlotte', 'sophia', 'amelia', 'mia', 'isabella', 'ava', 'emily', 'abigail', 'ella', 'chloe', 'lily', 'grace', 'hannah'],
    australia: ['charlotte', 'olivia', 'amelia', 'isla', 'mia', 'ava', 'grace', 'willow', 'harper', 'chloe', 'ella', 'sophie', 'emily', 'ruby', 'lucy'],
    italy: ['sofia', 'aurora', 'giulia', 'alice', 'giorgia', 'emma', 'greta', 'francesca', 'sara', 'vittoria', 'chiara', 'martina', 'anna', 'beatrice', 'elena'],
    spain: ['lucia', 'sofia', 'martina', 'maria', 'julia', 'paula', 'valeria', 'daniela', 'alba', 'emma', 'carmen', 'laura', 'claudia', 'sara', 'ana'],
    austria: ['anna', 'emma', 'lena', 'hannah', 'laura', 'sophia', 'maja', 'marie', 'valentina', 'johanna', 'lea', 'sarah', 'julia', 'lisa', 'nina'],
    switzerland: ['emma', 'mia', 'sophia', 'lina', 'elena', 'alina', 'emilia', 'leonie', 'lena', 'nina', 'laura', 'anna', 'julia', 'sara', 'lea'],
    netherlands: ['emma', 'julia', 'sophie', 'tess', 'mila', 'zoe', 'sara', 'eva', 'saar', 'nora', 'lotte', 'anna', 'isa', 'liv', 'lynn'],
    sweden: ['alice', 'olivia', 'astrid', 'maja', 'vera', 'alma', 'selma', 'elsa', 'stella', 'ebba', 'wilma', 'ella', 'clara', 'saga', 'freja'],
    denmark: ['alma', 'clara', 'agnes', 'ida', 'ella', 'sofia', 'freja', 'anna', 'karla', 'nora', 'emma', 'laura', 'olivia', 'maja', 'isabella'],
    norway: ['nora', 'emma', 'ella', 'maja', 'sophia', 'olivia', 'sara', 'anna', 'ingrid', 'emilie', 'sofie', 'thea', 'lea', 'julie', 'ida'],
    newzealand: ['charlotte', 'isla', 'olivia', 'amelia', 'harper', 'ava', 'willow', 'mia', 'isabella', 'sophia', 'ella', 'grace', 'lily', 'emily', 'sophie'],
    india: ['aadhya', 'ananya', 'pari', 'anika', 'diya', 'aaradhya', 'sara', 'angel', 'kavya', 'kiara', 'saanvi', 'avni', 'myra', 'prisha', 'navya'],
    japan: ['yui', 'hina', 'sakura', 'aoi', 'yuna', 'himari', 'mei', 'rin', 'koharu', 'akari', 'mio', 'riko', 'nanami', 'yuzuki', 'haruka'],
    china: ['xin', 'jing', 'li', 'yan', 'ying', 'mei', 'fang', 'min', 'hui', 'ling', 'na', 'juan', 'qing', 'xia', 'yue'],
    brazil: ['alice', 'sophia', 'helena', 'valentina', 'laura', 'isabella', 'manuela', 'julia', 'heloisa', 'luiza', 'maria', 'cecilia', 'eloah', 'lara', 'livia'],
    mexico: ['sofia', 'valentina', 'regina', 'renata', 'camila', 'valeria', 'daniela', 'maria', 'fernanda', 'ximena', 'andrea', 'paula', 'mariana', 'alejandra', 'gabriela'],
  },
};

const lastNames = {
  usa: ['smith', 'johnson', 'williams', 'brown', 'jones', 'miller', 'davis', 'garcia', 'rodriguez', 'wilson', 'martinez', 'anderson', 'taylor', 'thomas', 'hernandez'],
  uk: ['smith', 'jones', 'williams', 'taylor', 'brown', 'davies', 'evans', 'wilson', 'thomas', 'roberts', 'johnson', 'lewis', 'walker', 'robinson', 'wood'],
  germany: ['mueller', 'schmidt', 'schneider', 'fischer', 'weber', 'meyer', 'wagner', 'becker', 'schulz', 'hoffmann', 'koch', 'richter', 'klein', 'wolf', 'schroeder'],
  france: ['martin', 'bernard', 'dubois', 'thomas', 'robert', 'richard', 'petit', 'durand', 'leroy', 'moreau', 'simon', 'laurent', 'lefebvre', 'michel', 'garcia'],
  canada: ['smith', 'brown', 'wilson', 'johnson', 'lee', 'martin', 'roy', 'tremblay', 'gagnon', 'bouchard', 'cote', 'leblanc', 'gauthier', 'morin', 'pelletier'],
  australia: ['smith', 'jones', 'williams', 'brown', 'wilson', 'taylor', 'johnson', 'white', 'anderson', 'thompson', 'nguyen', 'thomas', 'walker', 'harris', 'lee'],
  italy: ['rossi', 'ferrari', 'russo', 'bianchi', 'romano', 'colombo', 'ricci', 'marino', 'greco', 'bruno', 'gallo', 'conti', 'de luca', 'costa', 'giordano'],
  spain: ['garcia', 'rodriguez', 'gonzalez', 'fernandez', 'lopez', 'martinez', 'sanchez', 'perez', 'gomez', 'martin', 'jimenez', 'ruiz', 'hernandez', 'diaz', 'moreno'],
  austria: ['gruber', 'huber', 'bauer', 'wagner', 'mueller', 'pichler', 'steiner', 'moser', 'mayer', 'hofer', 'leitner', 'berger', 'fuchs', 'eder', 'fischer'],
  switzerland: ['mueller', 'schmid', 'keller', 'weber', 'huber', 'meyer', 'schneider', 'steiner', 'fischer', 'brunner', 'baumann', 'frei', 'zimmermann', 'moser', 'gerber'],
  netherlands: ['de jong', 'jansen', 'de vries', 'van den berg', 'bakker', 'janssen', 'visser', 'smit', 'meijer', 'de boer', 'mulder', 'de groot', 'bos', 'vos', 'peters'],
  sweden: ['andersson', 'johansson', 'karlsson', 'nilsson', 'eriksson', 'larsson', 'olsson', 'persson', 'svensson', 'gustafsson', 'pettersson', 'jonsson', 'jansson', 'hansson', 'bengtsson'],
  denmark: ['nielsen', 'jensen', 'hansen', 'pedersen', 'andersen', 'christensen', 'larsen', 'sørensen', 'rasmussen', 'jørgensen', 'petersen', 'madsen', 'kristensen', 'olsen', 'thomsen'],
  norway: ['hansen', 'johansen', 'olsen', 'larsen', 'andersen', 'pedersen', 'nilsen', 'kristiansen', 'jensen', 'karlsen', 'johnsen', 'pettersen', 'eriksen', 'berg', 'haugen'],
  newzealand: ['smith', 'wilson', 'williams', 'brown', 'thompson', 'jones', 'taylor', 'watson', 'clark', 'walker', 'robinson', 'white', 'martin', 'anderson', 'harris'],
  india: ['sharma', 'kumar', 'singh', 'patel', 'gupta', 'khan', 'reddy', 'verma', 'jain', 'agarwal', 'mehta', 'rao', 'nair', 'iyer', 'das'],
  japan: ['sato', 'suzuki', 'takahashi', 'tanaka', 'watanabe', 'ito', 'yamamoto', 'nakamura', 'kobayashi', 'kato', 'yoshida', 'yamada', 'sasaki', 'yamaguchi', 'saito'],
  china: ['wang', 'li', 'zhang', 'liu', 'chen', 'yang', 'huang', 'zhao', 'wu', 'zhou', 'xu', 'sun', 'ma', 'zhu', 'hu'],
  brazil: ['silva', 'santos', 'oliveira', 'souza', 'rodrigues', 'ferreira', 'alves', 'pereira', 'lima', 'gomes', 'costa', 'ribeiro', 'martins', 'carvalho', 'almeida'],
  mexico: ['hernandez', 'garcia', 'martinez', 'lopez', 'gonzalez', 'rodriguez', 'perez', 'sanchez', 'ramirez', 'torres', 'flores', 'rivera', 'gomez', 'diaz', 'cruz'],
};

const separators = ['_', '.', '-'];

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Simple username generator
const generateUsername = (firstName, lastName, style) => {
  let username = '';
  const randomNum = randomInt(10, 999); // 2-3 digit number

  switch (style) {
    case 'professional':
      username = `${firstName}.${lastName}${randomNum}`;
      break;
    case 'creative':
      const sep = randomChoice(separators);
      username = `${firstName}${sep}${lastName}${randomNum}`;
      break;
    case 'compact':
      username = `${firstName.substring(0, 3)}${lastName.substring(0, 3)}${randomNum}`;
      break;
    case 'random':
      return generateUsername(firstName, lastName, randomChoice(['standard', 'professional', 'creative', 'compact']));
    case 'standard':
    default:
      username = `${firstName}${lastName}${randomNum}`;
      break;
  }

  return username.toLowerCase();
};

// Smart availability prediction
// Returns: 'available' (🟢 green), 'uncertain' (🟡 yellow), or 'taken' (🔴 red)
const getAvailability = (email) => {
  const username = email.split('@')[0];
  const length = username.length;
  const numbers = (username.match(/\d/g) || []).length;

  // Very short or very long = Likely Taken (🔴 Red)
  if (length < 10 || length > 25) return 'taken';

  // Short with few numbers = Likely Taken (🔴 Red)
  if (length < 13 && numbers <= 2) return 'taken';

  // Medium length with 3 digits = Uncertain (🟡 Yellow)
  if (length >= 13 && length <= 18 && numbers === 3) return 'uncertain';

  // Long with many numbers = Likely Available (🟢 Green)
  if (length > 15 && numbers >= 4) return 'available';

  // Default: Uncertain (🟡 Yellow)
  return 'uncertain';
};

// Generate usernames with smart availability prediction
export const generateGmailUsernames = (gender, country, style, count) => {
  const results = [];
  const countryKey = country || 'usa';

  for (let i = 0; i < count; i++) {
    const selectedGender = gender === 'both' ? (Math.random() > 0.5 ? 'male' : 'female') : gender;
    const firstName = randomChoice(firstNames[selectedGender][countryKey] || firstNames[selectedGender].usa);
    const lastName = randomChoice(lastNames[countryKey] || lastNames.usa);
    const username = generateUsername(firstName, lastName, style);

    const email = `${username}@gmail.com`;

    // Predict availability based on pattern
    const availability = getAvailability(email);

    results.push({
      firstName,
      lastName,
      username,
      email,
      availability, // available, uncertain, or taken
      isChecking: false,
    });
  }

  return results;
};

// Simple check - returns immediately
export const checkEmailAvailability = async (email) => {
  return getAvailability(email);
};
