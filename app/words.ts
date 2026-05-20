export const fiveLetterWords:string[] = [
  "apple","beach","brain","bread","brick","brown","chair","cloud","dance","dream",
  "eagle","earth","flame","fruit","giant","grape","green","happy","heart","house",
  "jelly","knife","laugh","light","magic","metal","mouse","music","night","ocean",
  "paint","piano","pizza","plant","queen","quiet","radio","river","robot","rough",
  "score","sheep","shirt","smile","snake","sound","space","spoon","sport","stack",
  "stone","storm","table","tiger","train","truck","uncle","vivid","water","whale",
  "world","youth","zebra","actor","adore","agent","album","alert","alive","angel",
  "angry","arena","argue","arrow","asset","audio","award","bacon","badge","basic",
  "batch","began","birth","black","blame","blast","blend","blind","block","blood",
  "board","boost","bound","brain","brand","brave","break","bring","broad","cable",
  "camel","candy","carry","catch","cause","chain","chalk","charm","chase","cheap",
  "check","chess","chief","child","civil","claim","class","clean","clear","clerk",
  "click","clock","close","coach","coast","color","comic","count","court","cover",
  "craft","crash","cream","crime","cross","crowd","crown","curve","cycle","daily",
  "dated","dealt","death","delay","depth","devil","dirty","doubt","dozen","draft",
  "drama","drawn","dress","drill","drink","drive","eager","early","elect","elite",
  "empty","enemy","enjoy","enter","equal","error","event","every","exact","exist",
  "extra","faith","false","fault","fiber","field","fifth","fight","final","first",
  "flash","fleet","floor","focus","force","forth","fresh","front","funny","glass",
  "globe","glory","grace","grade","grand","grant","grass","great","group","guard"
];

export const getWord = ()=>{
  const index = Math.floor(Math.random()* fiveLetterWords.length )
      return fiveLetterWords[index]
}