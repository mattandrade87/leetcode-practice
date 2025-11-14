// Problem #205

const isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const mapSparaT = new Map();
  const mapTparaS = new Map();

  for (let i = 0; i < s.length; i++) {
    let char_s = s[i];
    let char_t = t[i];

    if (mapSparaT.has(char_s) && mapSparaT.get(char_s) !== char_t) return false;
    if (mapTparaS.has(char_t) && mapTparaS.get(char_t) !== char_s) return false;

    mapSparaT.set(char_s, char_t);
    mapTparaS.set(char_t, char_s);
  }
  return true;
};
