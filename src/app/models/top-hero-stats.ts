export class TopHeroStats {
  eliminationsPerLife: number;
  gamesWon: number;
  multiKillBest: number;
  objectiveKills: number;
  timePlayed: string;
  timePlayedInSeconds: number;
  weaponAccuracy: number;
  winPercentage: number;

  constructor(
    eliminationsPerLife: number = null,
    gamesWon: number = null,
    multiKillBest: number = null,
    objectiveKills: number = null,
    timePlayed: string = null,
    timePlayedInSeconds: number = null,
    weaponAccuracy: number = null,
    winPercentage: number = null

  ) {
    this.eliminationsPerLife = eliminationsPerLife;
    this.gamesWon = gamesWon;
    this.multiKillBest = multiKillBest;
    this.objectiveKills = objectiveKills;
    this.timePlayed = timePlayed;
    this.timePlayedInSeconds = timePlayedInSeconds;
    this.weaponAccuracy = weaponAccuracy;
    this.winPercentage = winPercentage;
  }
}
