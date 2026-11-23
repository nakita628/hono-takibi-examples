type AccountV1AccountDto = {
  puuid: string
  gameName?: string | undefined
  tagLine?: string | undefined
}
type AccountV1ActiveShardDto = { puuid: string; game: string; activeShard: string }
type AccountV1AccountRegionDTO = { puuid: string; game: string; region: string }
type ChampionMasteryV4RewardConfigDto = {
  rewardValue: string
  rewardType: string
  maximumReward: number
}
type ChampionMasteryV4NextSeasonMilestonesDto = {
  requireGradeCounts: { [x: string]: number }
  rewardMarks: number
  bonus: boolean
  rewardConfig?: ChampionMasteryV4RewardConfigDto | undefined
  totalGamesRequires: number
}
type ChampionMasteryV4ChampionMasteryDto = {
  puuid: string
  championPointsUntilNextLevel: bigint
  chestGranted?: boolean | undefined
  championId: bigint
  lastPlayTime: bigint
  championLevel: number
  championPoints: number
  championPointsSinceLastLevel: bigint
  markRequiredForNextLevel: number
  championSeasonMilestone: number
  nextSeasonMilestone: ChampionMasteryV4NextSeasonMilestonesDto
  tokensEarned: number
  milestoneGrades?: string[] | undefined
}
type ChampionV3ChampionInfo = { newplayer: number[]; sr: number[] }
type ClashV1PlayerDto = {
  puuid: string
  teamId?: string | undefined
  position: 'UNSELECTED' | 'FILL' | 'TOP' | 'JUNGLE' | 'MIDDLE' | 'BOTTOM' | 'UTILITY'
  role: 'CAPTAIN' | 'MEMBER'
}
type ClashV1TeamDto = {
  id: string
  tournamentId: number
  name: string
  iconId: number
  tier: number
  captain: string
  abbreviation: string
  players: ClashV1PlayerDto[]
}
type ClashV1TournamentPhaseDto = {
  id: number
  registrationTime: bigint
  startTime: bigint
  cancelled: boolean
}
type ClashV1TournamentDto = {
  id: number
  themeId: number
  nameKey: string
  nameKeySecondary: string
  schedule: ClashV1TournamentPhaseDto[]
}
type LeagueExpV4MiniSeriesDTO = { losses: number; progress: string; target: number; wins: number }
type LeagueExpV4LeagueEntryDTO = {
  leagueId?: string | undefined
  summonerId?: string | undefined
  puuid: string
  queueType: string
  tier: string
  rank: string
  leaguePoints: number
  wins: number
  losses: number
  hotStreak: boolean
  veteran: boolean
  freshBlood: boolean
  inactive: boolean
  miniSeries?: LeagueExpV4MiniSeriesDTO | undefined
}
type LeagueV4MiniSeriesDTO = { losses: number; progress: string; target: number; wins: number }
type LeagueV4LeagueItemDTO = {
  freshBlood: boolean
  wins: number
  miniSeries?: LeagueV4MiniSeriesDTO | undefined
  inactive: boolean
  veteran: boolean
  hotStreak: boolean
  rank: string
  leaguePoints: number
  losses: number
  puuid: string
  summonerId?: string | undefined
}
type LeagueV4LeagueListDTO = {
  leagueId?: string | undefined
  entries: LeagueV4LeagueItemDTO[]
  tier: string
  name?: string | undefined
  queue?: string | undefined
}
type LeagueV4LeagueEntryDTO = {
  leagueId?: string | undefined
  puuid: string
  queueType: string
  tier?: string | undefined
  rank?: string | undefined
  leaguePoints: number
  wins: number
  losses: number
  hotStreak: boolean
  veteran: boolean
  freshBlood: boolean
  inactive: boolean
  miniSeries?: LeagueV4MiniSeriesDTO | undefined
  summonerId?: string | undefined
}
type LolChallengesV1ChallengeConfigInfoDto = {
  id: bigint
  localizedNames: { [x: string]: { [x: string]: string } }
  state: 'DISABLED' | 'HIDDEN' | 'ENABLED' | 'ARCHIVED'
  tracking?: 'LIFETIME' | 'SEASON' | undefined
  startTimestamp?: bigint | undefined
  endTimestamp?: bigint | undefined
  leaderboard: boolean
  thresholds: { [x: string]: number }
}
type LolChallengesV1ApexPlayerInfoDto = { puuid: string; value: number; position: number }
type LolChallengesV1ChallengeInfoDto = {
  percentile: number
  playersInLevel?: number | undefined
  achievedTime?: bigint | undefined
  value: number
  challengeId: bigint
  level:
    | 'NONE'
    | 'IRON'
    | 'BRONZE'
    | 'SILVER'
    | 'GOLD'
    | 'PLATINUM'
    | 'DIAMOND'
    | 'MASTER'
    | 'GRANDMASTER'
    | 'CHALLENGER'
    | 'HIGHEST_NOT_LEADERBOARD_ONLY'
    | 'HIGHEST'
    | 'LOWEST'
  position?: number | undefined
}
type LolChallengesV1PlayerClientPreferencesDto = {
  bannerAccent?: string | undefined
  title?: string | undefined
  challengeIds?: bigint[] | undefined
  crestBorder?: string | undefined
  prestigeCrestBorderLevel?: number | undefined
}
type LolChallengesV1ChallengePointDto = {
  level: string
  current: bigint
  max: bigint
  percentile?: number | undefined
  position?: bigint | undefined
}
type LolChallengesV1PlayerInfoDto = {
  challenges: LolChallengesV1ChallengeInfoDto[]
  preferences: LolChallengesV1PlayerClientPreferencesDto
  totalPoints: LolChallengesV1ChallengePointDto
  categoryPoints: { [x: string]: LolChallengesV1ChallengePointDto }
}
type MatchV5MetadataDto = { dataVersion: string; matchId: string; participants: string[] }
type MatchV5ChallengesDto = {
  '12AssistStreakCount'?: number | undefined
  baronBuffGoldAdvantageOverThreshold?: number | undefined
  controlWardTimeCoverageInRiverOrEnemyHalf?: number | undefined
  earliestBaron?: number | undefined
  earliestDragonTakedown?: number | undefined
  earliestElderDragon?: number | undefined
  earlyLaningPhaseGoldExpAdvantage?: number | undefined
  fasterSupportQuestCompletion?: 0 | 1 | undefined
  fastestLegendary?: number | undefined
  hadAfkTeammate?: 0 | 1 | undefined
  highestChampionDamage?: number | undefined
  highestCrowdControlScore?: 0 | 1 | undefined
  highestWardKills?: 0 | 1 | undefined
  junglerKillsEarlyJungle?: number | undefined
  killsOnLanersEarlyJungleAsJungler?: number | undefined
  laningPhaseGoldExpAdvantage?: 0 | 1 | undefined
  legendaryCount?: number | undefined
  maxCsAdvantageOnLaneOpponent?: number | undefined
  maxLevelLeadLaneOpponent?: number | undefined
  mostWardsDestroyedOneSweeper?: number | undefined
  mythicItemUsed?: number | undefined
  playedChampSelectPosition?: 0 | 1 | undefined
  soloTurretsLategame?: number | undefined
  takedownsFirst25Minutes?: number | undefined
  teleportTakedowns?: number | undefined
  thirdInhibitorDestroyedTime?: number | undefined
  threeWardsOneSweeperCount?: number | undefined
  visionScoreAdvantageLaneOpponent?: number | undefined
  InfernalScalePickup?: number | undefined
  fistBumpParticipation?: number | undefined
  voidMonsterKill?: number | undefined
  abilityUses?: number | undefined
  acesBefore15Minutes?: number | undefined
  alliedJungleMonsterKills?: number | undefined
  baronTakedowns?: number | undefined
  blastConeOppositeOpponentCount?: number | undefined
  bountyGold?: number | undefined
  buffsStolen?: number | undefined
  completeSupportQuestInTime?: number | undefined
  controlWardsPlaced?: number | undefined
  damagePerMinute?: number | undefined
  damageTakenOnTeamPercentage?: number | undefined
  dancedWithRiftHerald?: number | undefined
  deathsByEnemyChamps?: number | undefined
  dodgeSkillShotsSmallWindow?: number | undefined
  doubleAces?: number | undefined
  dragonTakedowns?: number | undefined
  legendaryItemUsed?: number[] | undefined
  effectiveHealAndShielding?: number | undefined
  elderDragonKillsWithOpposingSoul?: number | undefined
  elderDragonMultikills?: number | undefined
  enemyChampionImmobilizations?: number | undefined
  enemyJungleMonsterKills?: number | undefined
  epicMonsterKillsNearEnemyJungler?: number | undefined
  epicMonsterKillsWithin30SecondsOfSpawn?: number | undefined
  epicMonsterSteals?: number | undefined
  epicMonsterStolenWithoutSmite?: number | undefined
  firstTurretKilled?: number | undefined
  firstTurretKilledTime?: number | undefined
  flawlessAces?: number | undefined
  fullTeamTakedown?: number | undefined
  gameLength?: number | undefined
  getTakedownsInAllLanesEarlyJungleAsLaner?: number | undefined
  goldPerMinute?: number | undefined
  hadOpenNexus?: number | undefined
  immobilizeAndKillWithAlly?: number | undefined
  initialBuffCount?: number | undefined
  initialCrabCount?: number | undefined
  jungleCsBefore10Minutes?: number | undefined
  junglerTakedownsNearDamagedEpicMonster?: number | undefined
  kda?: number | undefined
  killAfterHiddenWithAlly?: number | undefined
  killedChampTookFullTeamDamageSurvived?: number | undefined
  killingSprees?: number | undefined
  killParticipation?: number | undefined
  killsNearEnemyTurret?: number | undefined
  killsOnOtherLanesEarlyJungleAsLaner?: number | undefined
  killsOnRecentlyHealedByAramPack?: number | undefined
  killsUnderOwnTurret?: number | undefined
  killsWithHelpFromEpicMonster?: number | undefined
  knockEnemyIntoTeamAndKill?: number | undefined
  kTurretsDestroyedBeforePlatesFall?: number | undefined
  landSkillShotsEarlyGame?: number | undefined
  laneMinionsFirst10Minutes?: number | undefined
  lostAnInhibitor?: number | undefined
  maxKillDeficit?: number | undefined
  mejaisFullStackInTime?: number | undefined
  moreEnemyJungleThanOpponent?: number | undefined
  multiKillOneSpell?: number | undefined
  multikills?: number | undefined
  multikillsAfterAggressiveFlash?: number | undefined
  multiTurretRiftHeraldCount?: number | undefined
  outerTurretExecutesBefore10Minutes?: number | undefined
  outnumberedKills?: number | undefined
  outnumberedNexusKill?: number | undefined
  perfectDragonSoulsTaken?: number | undefined
  perfectGame?: number | undefined
  pickKillWithAlly?: number | undefined
  poroExplosions?: number | undefined
  quickCleanse?: number | undefined
  quickFirstTurret?: number | undefined
  quickSoloKills?: number | undefined
  riftHeraldTakedowns?: number | undefined
  saveAllyFromDeath?: number | undefined
  scuttleCrabKills?: number | undefined
  shortestTimeToAceFromFirstTakedown?: number | undefined
  skillshotsDodged?: number | undefined
  skillshotsHit?: number | undefined
  snowballsHit?: number | undefined
  soloBaronKills?: number | undefined
  SWARM_DefeatAatrox?: number | undefined
  SWARM_DefeatBriar?: number | undefined
  SWARM_DefeatMiniBosses?: number | undefined
  SWARM_EvolveWeapon?: number | undefined
  SWARM_Have3Passives?: number | undefined
  SWARM_KillEnemy?: number | undefined
  SWARM_PickupGold?: number | undefined
  SWARM_ReachLevel50?: number | undefined
  SWARM_Survive15Min?: number | undefined
  SWARM_WinWith5EvolvedWeapons?: number | undefined
  soloKills?: number | undefined
  stealthWardsPlaced?: number | undefined
  survivedSingleDigitHpCount?: number | undefined
  survivedThreeImmobilizesInFight?: number | undefined
  takedownOnFirstTurret?: number | undefined
  takedowns?: number | undefined
  takedownsAfterGainingLevelAdvantage?: number | undefined
  takedownsBeforeJungleMinionSpawn?: number | undefined
  takedownsFirstXMinutes?: number | undefined
  takedownsInAlcove?: number | undefined
  takedownsInEnemyFountain?: number | undefined
  teamBaronKills?: number | undefined
  teamDamagePercentage?: number | undefined
  teamElderDragonKills?: number | undefined
  teamRiftHeraldKills?: number | undefined
  tookLargeDamageSurvived?: number | undefined
  turretPlatesTaken?: number | undefined
  turretsTakenWithRiftHerald?: number | undefined
  turretTakedowns?: number | undefined
  twentyMinionsIn3SecondsCount?: number | undefined
  twoWardsOneSweeperCount?: number | undefined
  unseenRecalls?: number | undefined
  visionScorePerMinute?: number | undefined
  wardsGuarded?: number | undefined
  wardTakedowns?: number | undefined
  wardTakedownsBefore20M?: number | undefined
  HealFromMapSources?: number | undefined
}
type MatchV5MissionsDto = {
  playerScore0?: number | undefined
  playerScore1?: number | undefined
  playerScore2?: number | undefined
  playerScore3?: number | undefined
  playerScore4?: number | undefined
  playerScore5?: number | undefined
  playerScore6?: number | undefined
  playerScore7?: number | undefined
  playerScore8?: number | undefined
  playerScore9?: number | undefined
  playerScore10?: number | undefined
  playerScore11?: number | undefined
}
type MatchV5PerkStatsDto = { defense: number; flex: number; offense: number }
type MatchV5PerkStyleSelectionDto = { perk: number; var1: number; var2: number; var3: number }
type MatchV5PerkStyleDto = {
  description: string
  selections: MatchV5PerkStyleSelectionDto[]
  style: number
}
type MatchV5PerksDto = { statPerks: MatchV5PerkStatsDto; styles: MatchV5PerkStyleDto[] }
type MatchV5ParticipantPlayerBehaviorDto = { PlayerBehavior_IsHeroInCombat?: number | undefined }
type MatchV5ParticipantDto = {
  allInPings?: number | undefined
  assistMePings?: number | undefined
  assists: number
  baronKills: number
  bountyLevel?: number | undefined
  champExperience: number
  champLevel: number
  championId: number
  championName: string
  commandPings?: number | undefined
  championTransform: number
  consumablesPurchased: number
  challenges?: MatchV5ChallengesDto | undefined
  damageDealtToBuildings?: number | undefined
  damageDealtToObjectives: number
  damageDealtToTurrets: number
  damageSelfMitigated: number
  deaths: number
  detectorWardsPlaced: number
  doubleKills: number
  dragonKills: number
  eligibleForProgression?: boolean | undefined
  enemyMissingPings?: number | undefined
  enemyVisionPings?: number | undefined
  firstBloodAssist: boolean
  firstBloodKill: boolean
  firstTowerAssist: boolean
  firstTowerKill: boolean
  gameEndedInEarlySurrender: boolean
  gameEndedInSurrender: boolean
  holdPings?: number | undefined
  getBackPings?: number | undefined
  goldEarned: number
  goldSpent: number
  individualPosition: string
  inhibitorKills: number
  inhibitorTakedowns?: number | undefined
  inhibitorsLost?: number | undefined
  item0: number
  item1: number
  item2: number
  item3: number
  item4: number
  item5: number
  item6: number
  itemsPurchased: number
  killingSprees: number
  kills: number
  lane: string
  largestCriticalStrike: number
  largestKillingSpree: number
  largestMultiKill: number
  longestTimeSpentLiving: number
  magicDamageDealt: number
  magicDamageDealtToChampions: number
  magicDamageTaken: number
  missions?: MatchV5MissionsDto | undefined
  neutralMinionsKilled: number
  needVisionPings?: number | undefined
  nexusKills: number
  nexusTakedowns?: number | undefined
  nexusLost?: number | undefined
  objectivesStolen: number
  objectivesStolenAssists: number
  onMyWayPings?: number | undefined
  participantId: number
  playerScore0?: number | undefined
  playerScore1?: number | undefined
  playerScore2?: number | undefined
  playerScore3?: number | undefined
  playerScore4?: number | undefined
  playerScore5?: number | undefined
  playerScore6?: number | undefined
  playerScore7?: number | undefined
  playerScore8?: number | undefined
  playerScore9?: number | undefined
  playerScore10?: number | undefined
  playerScore11?: number | undefined
  pentaKills: number
  perks: MatchV5PerksDto
  physicalDamageDealt: number
  physicalDamageDealtToChampions: number
  physicalDamageTaken: number
  placement?: number | undefined
  playerAugment1?: number | undefined
  playerAugment2?: number | undefined
  playerAugment3?: number | undefined
  playerAugment4?: number | undefined
  playerSubteamId?: number | undefined
  pushPings?: number | undefined
  profileIcon: number
  puuid: string
  quadraKills: number
  riotIdGameName?: string | undefined
  riotIdTagline?: string | undefined
  role: string
  sightWardsBoughtInGame: number
  spell1Casts: number
  spell2Casts: number
  spell3Casts: number
  spell4Casts: number
  subteamPlacement?: number | undefined
  summoner1Casts: number
  summoner1Id: number
  summoner2Casts: number
  summoner2Id: number
  summonerId: string
  summonerLevel: number
  summonerName: string
  teamEarlySurrendered: boolean
  teamId: number
  teamPosition: string
  timeCCingOthers: number
  timePlayed: number
  totalAllyJungleMinionsKilled?: number | undefined
  totalDamageDealt: number
  totalDamageDealtToChampions: number
  totalDamageShieldedOnTeammates: number
  totalDamageTaken: number
  totalEnemyJungleMinionsKilled?: number | undefined
  totalHeal: number
  totalHealsOnTeammates: number
  totalMinionsKilled: number
  totalTimeCCDealt: number
  totalTimeSpentDead: number
  totalUnitsHealed: number
  tripleKills: number
  trueDamageDealt: number
  trueDamageDealtToChampions: number
  trueDamageTaken: number
  turretKills: number
  turretTakedowns?: number | undefined
  turretsLost?: number | undefined
  unrealKills: number
  visionScore: number
  visionClearedPings?: number | undefined
  visionWardsBoughtInGame: number
  wardsKilled: number
  wardsPlaced: number
  win: boolean
  baitPings?: number | undefined
  dangerPings?: number | undefined
  basicPings?: number | undefined
  playerAugment5?: number | undefined
  playerAugment6?: number | undefined
  riotIdName?: string | undefined
  retreatPings?: number | undefined
  championSkinId?: number | undefined
  damageDealtToEpicMonsters?: number | undefined
  roleBoundItem?: number | undefined
  PlayerBehavior?: MatchV5ParticipantPlayerBehaviorDto | undefined
  causedGameEndFromIGNBSurrender?: boolean | undefined
  gameEndedInIGNBSurrender?: boolean | undefined
  positionAssignedByMatchmaking?: string | undefined
  selectedRolePreferences?: string | undefined
  teamIGNBSurrendered?: boolean | undefined
  wasPremadeWithIGNBGameEndCauser?: boolean | undefined
  wasPremadeWithSevereTransgressor?: boolean | undefined
  wasSevereTransgressor?: boolean | undefined
}
type MatchV5BanDto = { championId: number; pickTurn: number }
type MatchV5ObjectiveDto = { first: boolean; kills: number }
type MatchV5ObjectivesDto = {
  baron: MatchV5ObjectiveDto
  champion: MatchV5ObjectiveDto
  dragon: MatchV5ObjectiveDto
  horde?: MatchV5ObjectiveDto | undefined
  inhibitor: MatchV5ObjectiveDto
  riftHerald: MatchV5ObjectiveDto
  tower: MatchV5ObjectiveDto
  atakhan?: MatchV5ObjectiveDto | undefined
}
type MatchV5FeatDto = { featState?: number | undefined }
type MatchV5FeatsDto = {
  EPIC_MONSTER_KILL?: MatchV5FeatDto | undefined
  FIRST_BLOOD?: MatchV5FeatDto | undefined
  FIRST_TURRET?: MatchV5FeatDto | undefined
}
type MatchV5TeamDto = {
  bans: MatchV5BanDto[]
  objectives: MatchV5ObjectivesDto
  teamId: number
  win: boolean
  feats?: MatchV5FeatsDto | undefined
}
type MatchV5InfoDto = {
  endOfGameResult?: string | undefined
  gameCreation: bigint
  gameDuration: bigint
  gameEndTimestamp?: bigint | undefined
  gameId: bigint
  gameMode: string
  gameName: string
  gameStartTimestamp: bigint
  gameType: string
  gameVersion: string
  mapId: number
  participants: MatchV5ParticipantDto[]
  platformId: string
  queueId: number
  teams: MatchV5TeamDto[]
  tournamentCode?: string | undefined
  gameModeMutators?: string[] | undefined
}
type MatchV5MatchDto = { metadata: MatchV5MetadataDto; info: MatchV5InfoDto }
type MatchV5MetadataTimeLineDto = { dataVersion: string; matchId: string; participants: string[] }
type MatchV5ParticipantTimeLineDto = { participantId: number; puuid: string }
type MatchV5PositionDto = { x: number; y: number }
type MatchV5MatchTimelineVictimDamage = {
  basic: boolean
  magicDamage: number
  name: string
  participantId: number
  physicalDamage: number
  spellName: string
  spellSlot: number
  trueDamage: number
  type: string
}
type MatchV5EventsTimeLineDto = {
  timestamp: bigint
  realTimestamp?: bigint | undefined
  type: string
  itemId?: number | undefined
  participantId?: number | undefined
  levelUpType?: string | undefined
  skillSlot?: number | undefined
  creatorId?: number | undefined
  wardType?: string | undefined
  level?: number | undefined
  assistingParticipantIds?: number[] | undefined
  bounty?: number | undefined
  killStreakLength?: number | undefined
  killerId?: number | undefined
  position?: MatchV5PositionDto | undefined
  victimDamageDealt?: MatchV5MatchTimelineVictimDamage[] | undefined
  victimDamageReceived?: MatchV5MatchTimelineVictimDamage[] | undefined
  victimId?: number | undefined
  killType?: string | undefined
  laneType?: string | undefined
  teamId?: number | undefined
  multiKillLength?: number | undefined
  killerTeamId?: number | undefined
  monsterType?: string | undefined
  monsterSubType?: string | undefined
  buildingType?: string | undefined
  towerType?: string | undefined
  afterId?: number | undefined
  beforeId?: number | undefined
  goldGain?: number | undefined
  gameId?: bigint | undefined
  winningTeam?: number | undefined
  transformType?: string | undefined
  name?: string | undefined
  shutdownBounty?: number | undefined
  actualStartTime?: bigint | undefined
  featType?: number | undefined
  featValue?: number | undefined
  victimTeamfightDamageDealt?: MatchV5MatchTimelineVictimDamage[] | undefined
  victimTeamfightDamageReceived?: MatchV5MatchTimelineVictimDamage[] | undefined
}
type MatchV5ChampionStatsDto = {
  abilityHaste?: number | undefined
  abilityPower: number
  armor: number
  armorPen: number
  armorPenPercent: number
  attackDamage: number
  attackSpeed: number
  bonusArmorPenPercent: number
  bonusMagicPenPercent: number
  ccReduction: number
  cooldownReduction: number
  health: number
  healthMax: number
  healthRegen: number
  lifesteal: number
  magicPen: number
  magicPenPercent: number
  magicResist: number
  movementSpeed: number
  omnivamp?: number | undefined
  physicalVamp?: number | undefined
  power: number
  powerMax: number
  powerRegen: number
  spellVamp: number
}
type MatchV5DamageStatsDto = {
  magicDamageDone: number
  magicDamageDoneToChampions: number
  magicDamageTaken: number
  physicalDamageDone: number
  physicalDamageDoneToChampions: number
  physicalDamageTaken: number
  totalDamageDone: number
  totalDamageDoneToChampions: number
  totalDamageTaken: number
  trueDamageDone: number
  trueDamageDoneToChampions: number
  trueDamageTaken: number
}
type MatchV5ParticipantFrameDto = {
  championStats: MatchV5ChampionStatsDto
  currentGold: number
  damageStats: MatchV5DamageStatsDto
  goldPerSecond: number
  jungleMinionsKilled: number
  level: number
  minionsKilled: number
  participantId: number
  position: MatchV5PositionDto
  timeEnemySpentControlled: number
  totalGold: number
  xp: number
}
type MatchV5FramesTimeLineDto = {
  events: MatchV5EventsTimeLineDto[]
  participantFrames?: { [x: string]: MatchV5ParticipantFrameDto } | undefined
  timestamp: number
}
type MatchV5InfoTimeLineDto = {
  endOfGameResult?: string | undefined
  frameInterval: bigint
  gameId?: bigint | undefined
  participants?: MatchV5ParticipantTimeLineDto[] | undefined
  frames: MatchV5FramesTimeLineDto[]
}
type MatchV5TimelineDto = { metadata: MatchV5MetadataTimeLineDto; info: MatchV5InfoTimeLineDto }
type LolStatusV4ContentDto = { locale: string; content: string }
type LolStatusV4UpdateDto = {
  id: number
  author: string
  publish: boolean
  publish_locations: ('riotclient' | 'riotstatus' | 'game')[]
  translations: LolStatusV4ContentDto[]
  created_at: string
  updated_at: string
}
type LolStatusV4StatusDto = {
  id: number
  maintenance_status?: 'scheduled' | 'in_progress' | 'complete' | undefined
  incident_severity?: 'info' | 'warning' | 'critical' | undefined
  titles: LolStatusV4ContentDto[]
  updates: LolStatusV4UpdateDto[]
  created_at: string
  archive_at?: string | undefined
  updated_at?: string | undefined
  platforms: ('windows' | 'macos' | 'android' | 'ios' | 'ps4' | 'xbone' | 'switch')[]
}
type LolStatusV4PlatformDataDto = {
  id: string
  name: string
  locales: string[]
  maintenances: LolStatusV4StatusDto[]
  incidents: LolStatusV4StatusDto[]
}
type LorDeckV1DeckDto = { id: string; name: string; code: string }
type LorDeckV1NewDeckDto = { name: string; code: string }
type LorInventoryV1CardDto = { code: string; count: string }
type LorMatchV1MetadataDto = { data_version: string; match_id: string; participants: string[] }
type LorMatchV1PlayerDto = {
  puuid: string
  deck_id: string
  deck_code: string
  factions: string[]
  game_outcome: string
  order_of_play: number
}
type LorMatchV1InfoDto = {
  game_mode: 'Constructed' | 'Expeditions' | 'Tutorial'
  game_type:
    | 'Ranked'
    | 'Normal'
    | 'AI'
    | 'Tutorial'
    | 'VanillaTrial'
    | 'Singleton'
    | 'StandardGauntlet'
  game_start_time_utc: string
  game_version: string
  game_format: 'standard' | 'eternal'
  players: LorMatchV1PlayerDto[]
  total_turn_count: number
}
type LorMatchV1MatchDto = { metadata: LorMatchV1MetadataDto; info: LorMatchV1InfoDto }
type LorRankedV1PlayerDto = { name: string; rank: number; lp: number }
type LorRankedV1LeaderboardDto = { players: LorRankedV1PlayerDto[] }
type LorStatusV1ContentDto = { locale: string; content: string }
type LorStatusV1UpdateDto = {
  id: number
  author: string
  publish: boolean
  publish_locations: ('riotclient' | 'riotstatus' | 'game')[]
  translations: LorStatusV1ContentDto[]
  created_at: string
  updated_at: string
}
type LorStatusV1StatusDto = {
  id: number
  maintenance_status: 'scheduled' | 'in_progress' | 'complete'
  incident_severity: 'info' | 'warning' | 'critical'
  titles: LorStatusV1ContentDto[]
  updates: LorStatusV1UpdateDto[]
  created_at: string
  archive_at: string
  updated_at: string
  platforms: ('windows' | 'macos' | 'android' | 'ios' | 'ps4' | 'xbone' | 'switch')[]
}
type LorStatusV1PlatformDataDto = {
  id: string
  name: string
  locales: string[]
  maintenances: LorStatusV1StatusDto[]
  incidents: LorStatusV1StatusDto[]
}
type MatchV5ReplayDTO = { total: number; matchFileURLs: string[] }
type RiftboundContentV1CardStatsDTO = { energy: bigint; might: bigint; cost: bigint; power: bigint }
type RiftboundContentV1CardArtDTO = { thumbnailURL: string; fullURL: string; artist: string }
type RiftboundContentV1CardDTO = {
  id: string
  collectorNumber: bigint
  set: string
  name: string
  description: string
  type: string
  rarity: string
  faction: string
  stats: RiftboundContentV1CardStatsDTO
  art: RiftboundContentV1CardArtDTO
  flavorText: string
  tags: string[]
  subtitle: string
  effect: string
}
type RiftboundContentV1SetDTO = { id: string; name: string; cards: RiftboundContentV1CardDTO[] }
type RiftboundContentV1RiftboundContentDTO = {
  game: string
  version: string
  lastUpdated: string
  sets: RiftboundContentV1SetDTO[]
}
type SpectatorTftV5BannedChampion = { pickTurn: number; championId: bigint; teamId: bigint }
type SpectatorTftV5Observer = { encryptionKey: string }
type SpectatorTftV5Perks = { perkIds: bigint[]; perkStyle: bigint; perkSubStyle: bigint }
type SpectatorTftV5GameCustomizationObject = { category: string; content: string }
type SpectatorTftV5CurrentGameParticipant = {
  championId: bigint
  perks?: SpectatorTftV5Perks | undefined
  profileIconId: bigint
  teamId: bigint
  puuid?: string | undefined
  spell1Id: bigint
  spell2Id: bigint
  gameCustomizationObjects: SpectatorTftV5GameCustomizationObject[]
  riotId?: string | undefined
}
type SpectatorTftV5CurrentGameInfo = {
  gameId: bigint
  gameType: string
  gameStartTime: bigint
  mapId: bigint
  gameLength: bigint
  platformId: string
  gameMode: string
  bannedChampions: SpectatorTftV5BannedChampion[]
  gameQueueConfigId?: bigint | undefined
  observers: SpectatorTftV5Observer
  participants: SpectatorTftV5CurrentGameParticipant[]
}
type SpectatorV5BannedChampion = { pickTurn: number; championId: bigint; teamId: bigint }
type SpectatorV5Observer = { encryptionKey: string }
type SpectatorV5Perks = { perkIds: bigint[]; perkStyle: bigint; perkSubStyle: bigint }
type SpectatorV5GameCustomizationObject = { category: string; content: string }
type SpectatorV5CurrentGameParticipant = {
  championId: bigint
  perks?: SpectatorV5Perks | undefined
  profileIconId: bigint
  bot: boolean
  teamId: bigint
  puuid?: string | undefined
  spell1Id: bigint
  spell2Id: bigint
  gameCustomizationObjects: SpectatorV5GameCustomizationObject[]
  riotId?: string | undefined
}
type SpectatorV5CurrentGameInfo = {
  gameId: bigint
  gameType: string
  gameStartTime: bigint
  mapId: bigint
  gameLength: bigint
  platformId: string
  gameMode: string
  bannedChampions: SpectatorV5BannedChampion[]
  gameQueueConfigId?: bigint | undefined
  observers: SpectatorV5Observer
  participants: SpectatorV5CurrentGameParticipant[]
}
type SummonerV4SummonerDTO = {
  profileIconId: number
  revisionDate: bigint
  puuid: string
  summonerLevel: bigint
  id?: string | undefined
}
type TftLeagueV1MiniSeriesDTO = { losses: number; progress: string; target: number; wins: number }
type TftLeagueV1LeagueEntryDTO = {
  puuid?: string | undefined
  leagueId?: string | undefined
  queueType: string
  ratedTier?: 'ORANGE' | 'PURPLE' | 'BLUE' | 'GREEN' | 'GRAY' | undefined
  ratedRating?: number | undefined
  tier?: string | undefined
  rank?: string | undefined
  leaguePoints?: number | undefined
  wins: number
  losses: number
  hotStreak?: boolean | undefined
  veteran?: boolean | undefined
  freshBlood?: boolean | undefined
  inactive?: boolean | undefined
  miniSeries?: TftLeagueV1MiniSeriesDTO | undefined
}
type TftLeagueV1LeagueItemDTO = {
  freshBlood: boolean
  wins: number
  miniSeries?: TftLeagueV1MiniSeriesDTO | undefined
  inactive: boolean
  veteran: boolean
  hotStreak: boolean
  rank: string
  leaguePoints: number
  losses: number
  puuid: string
}
type TftLeagueV1LeagueListDTO = {
  leagueId?: string | undefined
  entries: TftLeagueV1LeagueItemDTO[]
  tier: string
  name?: string | undefined
  queue?: string | undefined
}
type TftLeagueV1TopRatedLadderEntryDto = {
  puuid: string
  ratedTier: 'ORANGE' | 'PURPLE' | 'BLUE' | 'GREEN' | 'GRAY'
  ratedRating: number
  wins: number
  previousUpdateLadderPosition: number
}
type TftMatchV1MetadataDto = { data_version: string; match_id: string; participants: string[] }
type TftMatchV1CompanionDto = {
  content_ID: string
  item_ID: number
  skin_ID: number
  species: string
}
type TftMatchV1TraitDto = {
  name: string
  num_units: number
  style?: number | undefined
  tier_current: number
  tier_total?: number | undefined
}
type TftMatchV1UnitDto = {
  items?: number[] | undefined
  character_id: string
  itemNames?: string[] | undefined
  chosen?: string | undefined
  name: string
  rarity: number
  tier: number
}
type TftMatchV1ParticipantMissionsDto = {
  Assists?: number | undefined
  DamageDealt?: number | undefined
  DamageDealtToObjectives?: number | undefined
  DamageDealtToTurrets?: number | undefined
  DamageTaken?: number | undefined
  DoubleKills?: number | undefined
  GoldEarned?: number | undefined
  GoldSpent?: number | undefined
  InhibitorsDestroyed?: number | undefined
  Kills?: number | undefined
  LargestKillingSpree?: number | undefined
  LargestMultiKill?: number | undefined
  MagicDamageDealt?: number | undefined
  MagicDamageDealtToChampions?: number | undefined
  NeutralMinionsKilledTeamJungle?: number | undefined
  PhysicalDamageDealt?: number | undefined
  PhysicalDamageTaken?: number | undefined
  PlayerScore0?: number | undefined
  PlayerScore1?: number | undefined
  PlayerScore2?: number | undefined
  PlayerScore3?: number | undefined
  PlayerScore4?: number | undefined
  PlayerScore5?: number | undefined
  PlayerScore6?: number | undefined
  PlayerScore9?: number | undefined
  PlayerScore10?: number | undefined
  PlayerScore11?: number | undefined
  QuadraKills?: number | undefined
  Spell1Casts?: number | undefined
  Spell2Casts?: number | undefined
  Spell3Casts?: number | undefined
  Spell4Casts?: number | undefined
  SummonerSpell1Casts?: number | undefined
  TimeCCOthers?: number | undefined
  TotalMinionsKilled?: number | undefined
  TrueDamageDealtToChampions?: number | undefined
  UnrealKills?: number | undefined
  VisionScore?: number | undefined
  WardsKilled?: number | undefined
  Deaths?: number | undefined
  KillingSprees?: number | undefined
  MagicDamageTaken?: number | undefined
  PentaKills?: number | undefined
  PhysicalDamageDealtToChampions?: number | undefined
  TotalDamageDealtToChampions?: number | undefined
  TripleKills?: number | undefined
  TrueDamageDealt?: number | undefined
  TrueDamageTaken?: number | undefined
}
type TftMatchV1ParticipantDto = {
  companion: TftMatchV1CompanionDto
  gold_left: number
  last_round: number
  level: number
  placement: number
  players_eliminated: number
  puuid: string
  riotIdGameName?: string | undefined
  riotIdTagline?: string | undefined
  time_eliminated: number
  total_damage_to_players: number
  traits: TftMatchV1TraitDto[]
  units: TftMatchV1UnitDto[]
  win?: boolean | undefined
  augments?: string[] | undefined
  partner_group_id?: number | undefined
  missions?: TftMatchV1ParticipantMissionsDto | undefined
  skill_tree?: { [x: string]: number } | undefined
  pve_score?: number | undefined
  pve_wonrun?: boolean | undefined
}
type TftMatchV1InfoDto = {
  endOfGameResult?: string | undefined
  gameCreation?: bigint | undefined
  gameId?: bigint | undefined
  game_datetime: bigint
  game_length: number
  game_version: string
  game_variation?: string | undefined
  mapId?: bigint | undefined
  participants: TftMatchV1ParticipantDto[]
  queue_id: number
  queueId?: number | undefined
  tft_game_type?: string | undefined
  tft_set_core_name?: string | undefined
  tft_set_number: number
}
type TftMatchV1MatchDto = { metadata: TftMatchV1MetadataDto; info: TftMatchV1InfoDto }
type TftStatusV1ContentDto = { locale: string; content: string }
type TftStatusV1UpdateDto = {
  id: number
  author: string
  publish: boolean
  publish_locations: ('riotclient' | 'riotstatus' | 'game')[]
  translations: TftStatusV1ContentDto[]
  created_at: string
  updated_at: string
}
type TftStatusV1StatusDto = {
  id: number
  maintenance_status: 'scheduled' | 'in_progress' | 'complete'
  incident_severity: 'info' | 'warning' | 'critical'
  titles: TftStatusV1ContentDto[]
  updates: TftStatusV1UpdateDto[]
  created_at: string
  archive_at: string
  updated_at: string
  platforms: ('windows' | 'macos' | 'android' | 'ios' | 'ps4' | 'xbone' | 'switch')[]
}
type TftStatusV1PlatformDataDto = {
  id: string
  name: string
  locales: string[]
  maintenances: TftStatusV1StatusDto[]
  incidents: TftStatusV1StatusDto[]
}
type TftSummonerV1SummonerDTO = {
  puuid: string
  profileIconId: number
  revisionDate: bigint
  summonerLevel: bigint
  id?: string | undefined
}
type TournamentStubV5TournamentCodeParametersV5 = {
  allowedParticipants?: string[] | undefined
  metadata?: string | undefined
  teamSize: number
  pickType: 'BLIND_PICK' | 'DRAFT_MODE' | 'ALL_RANDOM' | 'TOURNAMENT_DRAFT'
  mapType: 'SUMMONERS_RIFT' | 'HOWLING_ABYSS' | 'LEAGUE_CLASSIC'
  spectatorType: 'NONE' | 'LOBBYONLY' | 'ALL'
  enoughPlayers: boolean
}
type TournamentStubV5TournamentCodeV5DTO = {
  code: string
  lobbyName: string
  metaData: string
  password: string
  teamSize: number
  providerId: number
  pickType: string
  tournamentId: number
  id: number
  region: 'BR' | 'EUNE' | 'EUW' | 'JP' | 'LAN' | 'LAS' | 'NA' | 'OCE' | 'PBE' | 'RU' | 'TR' | 'KR'
  map: string
  participants: string[]
}
type TournamentStubV5LobbyEventV5DTO = { timestamp: string; eventType: string; puuid: string }
type TournamentStubV5LobbyEventV5DTOWrapper = { eventList: TournamentStubV5LobbyEventV5DTO[] }
type TournamentStubV5ProviderRegistrationParametersV5 = {
  region: 'BR' | 'EUNE' | 'EUW' | 'JP' | 'LAN' | 'LAS' | 'NA' | 'OCE' | 'PBE' | 'RU' | 'TR' | 'KR'
  url: string
}
type TournamentStubV5TournamentRegistrationParametersV5 = {
  providerId: number
  name?: string | undefined
}
type TournamentV5TournamentCodeParametersV5 = {
  allowedParticipants?: string[] | undefined
  metadata?: string | undefined
  teamSize: number
  pickType: 'BLIND_PICK' | 'DRAFT_MODE' | 'ALL_RANDOM' | 'TOURNAMENT_DRAFT'
  mapType: 'SUMMONERS_RIFT' | 'HOWLING_ABYSS' | 'LEAGUE_CLASSIC'
  spectatorType: 'NONE' | 'LOBBYONLY' | 'ALL'
  enoughPlayers: boolean
}
type TournamentV5TournamentCodeV5DTO = {
  id: number
  providerId: number
  tournamentId: number
  code: string
  region:
    | 'BR'
    | 'EUNE'
    | 'EUW'
    | 'JP'
    | 'LAN'
    | 'LAS'
    | 'NA'
    | 'OCE'
    | 'PBE'
    | 'RU'
    | 'TR'
    | 'KR'
    | 'PH'
    | 'SG'
    | 'TH'
    | 'TW'
    | 'VN'
  map: string
  teamSize: number
  spectators: string
  pickType: string
  lobbyName: string
  password: string
  metaData: string
  participants: string[]
}
type TournamentV5TournamentCodeUpdateParametersV5 = {
  allowedParticipants?: string[] | undefined
  pickType: 'BLIND_PICK' | 'DRAFT_MODE' | 'ALL_RANDOM' | 'TOURNAMENT_DRAFT'
  mapType: 'SUMMONERS_RIFT' | 'HOWLING_ABYSS'
  spectatorType: 'NONE' | 'LOBBYONLY' | 'ALL'
}
type TournamentV5TournamentTeamV5 = { puuid: string }
type TournamentV5TournamentGamesV5 = {
  startTime: bigint
  winningTeam: TournamentV5TournamentTeamV5[]
  losingTeam: TournamentV5TournamentTeamV5[]
  shortCode: string
  metaData?: string | undefined
  gameId: bigint
  gameName: string
  gameType: string
  gameMap: number
  gameMode: string
  region: string
}
type TournamentV5LobbyEventV5DTO = { timestamp: string; eventType: string; puuid: string }
type TournamentV5LobbyEventV5DTOWrapper = { eventList: TournamentV5LobbyEventV5DTO[] }
type TournamentV5ProviderRegistrationParametersV5 = {
  region:
    | 'BR'
    | 'EUNE'
    | 'EUW'
    | 'JP'
    | 'LAN'
    | 'LAS'
    | 'NA'
    | 'OCE'
    | 'PBE'
    | 'RU'
    | 'TR'
    | 'KR'
    | 'PH'
    | 'SG'
    | 'TH'
    | 'TW'
    | 'VN'
  url: string
}
type TournamentV5TournamentRegistrationParametersV5 = {
  providerId: number
  name?: string | undefined
}
type ValConsoleMatchV1MatchInfoDto = {
  matchId: string
  mapId: string
  gameLengthMillis?: number | undefined
  gameStartMillis: bigint
  provisioningFlowId: string
  isCompleted: boolean
  customGameName: string
  queueId: string
  gameMode: string
  isRanked: boolean
  seasonId: string
}
type ValConsoleMatchV1AbilityCastsDto = {
  grenadeCasts: number
  ability1Casts: number
  ability2Casts: number
  ultimateCasts: number
}
type ValConsoleMatchV1PlayerStatsDto = {
  score: number
  roundsPlayed: number
  kills: number
  deaths: number
  assists: number
  playtimeMillis: number
  abilityCasts?: ValConsoleMatchV1AbilityCastsDto | undefined
}
type ValConsoleMatchV1PlayerDto = {
  puuid: string
  gameName: string
  tagLine: string
  teamId: string
  partyId: string
  characterId?: string | undefined
  stats?: ValConsoleMatchV1PlayerStatsDto | undefined
  competitiveTier: number
  playerCard: string
  playerTitle: string
}
type ValConsoleMatchV1CoachDto = { puuid: string; teamId: string }
type ValConsoleMatchV1TeamDto = {
  teamId: string
  won: boolean
  roundsPlayed: number
  roundsWon: number
  numPoints: number
}
type ValConsoleMatchV1LocationDto = { x: number; y: number }
type ValConsoleMatchV1PlayerLocationsDto = {
  puuid: string
  viewRadians: number
  location: ValConsoleMatchV1LocationDto
}
type ValConsoleMatchV1FinishingDamageDto = {
  damageType: string
  damageItem: string
  isSecondaryFireMode: boolean
}
type ValConsoleMatchV1KillDto = {
  timeSinceGameStartMillis: number
  timeSinceRoundStartMillis: number
  killer: string
  victim: string
  victimLocation: ValConsoleMatchV1LocationDto
  assistants: string[]
  playerLocations: ValConsoleMatchV1PlayerLocationsDto[]
  finishingDamage: ValConsoleMatchV1FinishingDamageDto
}
type ValConsoleMatchV1DamageDto = {
  receiver: string
  damage: number
  legshots: number
  bodyshots: number
  headshots: number
}
type ValConsoleMatchV1EconomyDto = {
  loadoutValue: number
  weapon: string
  armor: string
  remaining: number
  spent: number
}
type ValConsoleMatchV1AbilityDto = {
  grenadeEffects?: string | undefined
  ability1Effects?: string | undefined
  ability2Effects?: string | undefined
  ultimateEffects?: string | undefined
}
type ValConsoleMatchV1PlayerRoundStatsDto = {
  puuid: string
  kills: ValConsoleMatchV1KillDto[]
  damage: ValConsoleMatchV1DamageDto[]
  score: number
  economy: ValConsoleMatchV1EconomyDto
  ability: ValConsoleMatchV1AbilityDto
}
type ValConsoleMatchV1RoundResultDto = {
  roundNum: number
  roundResult: string
  roundCeremony: string
  winningTeam: string
  bombPlanter?: string | undefined
  bombDefuser?: string | undefined
  plantRoundTime: number
  plantPlayerLocations?: ValConsoleMatchV1PlayerLocationsDto[] | undefined
  plantLocation: ValConsoleMatchV1LocationDto
  plantSite: string
  defuseRoundTime: number
  defusePlayerLocations?: ValConsoleMatchV1PlayerLocationsDto[] | undefined
  defuseLocation: ValConsoleMatchV1LocationDto
  playerStats: ValConsoleMatchV1PlayerRoundStatsDto[]
  roundResultCode: string
}
type ValConsoleMatchV1MatchDto = {
  matchInfo: ValConsoleMatchV1MatchInfoDto
  players: ValConsoleMatchV1PlayerDto[]
  coaches: ValConsoleMatchV1CoachDto[]
  teams?: ValConsoleMatchV1TeamDto[] | undefined
  roundResults?: ValConsoleMatchV1RoundResultDto[] | undefined
}
type ValConsoleMatchV1MatchlistEntryDto = {
  matchId: string
  gameStartTimeMillis: bigint
  queueId: string
}
type ValConsoleMatchV1MatchlistDto = {
  puuid: string
  history: ValConsoleMatchV1MatchlistEntryDto[]
}
type ValConsoleMatchV1RecentMatchesDto = { currentTime: bigint; matchIds: string[] }
type ValConsoleRankedV1PlayerDto = {
  puuid?: string | undefined
  gameName?: string | undefined
  tagLine?: string | undefined
  leaderboardRank: bigint
  rankedRating: bigint
  numberOfWins: bigint
}
type ValConsoleRankedV1TierDto = { [x: string]: unknown }
type ValConsoleRankedV1LeaderboardDto = {
  actId: string
  totalPlayers: bigint
  query?: string | undefined
  shard: string
  players: ValConsoleRankedV1PlayerDto[]
  tierDetails?: ValConsoleRankedV1TierDto[] | undefined
}
type ValContentV1LocalizedNamesDto = {
  'ar-AE': string
  'de-DE': string
  'en-GB'?: string | undefined
  'en-US': string
  'es-ES': string
  'es-MX': string
  'fr-FR': string
  'id-ID': string
  'it-IT': string
  'ja-JP': string
  'ko-KR': string
  'pl-PL': string
  'pt-BR': string
  'ru-RU': string
  'th-TH': string
  'tr-TR': string
  'vi-VN': string
  'zh-CN': string
  'zh-TW': string
}
type ValContentV1ContentItemDto = {
  name: string
  localizedNames?: ValContentV1LocalizedNamesDto | undefined
  id: string
  assetName: string
  assetPath?: string | undefined
}
type ValContentV1ActDto = {
  name: string
  localizedNames?: ValContentV1LocalizedNamesDto | undefined
  id: string
  isActive: boolean
  parentId?: string | undefined
  type?: string | undefined
}
type ValContentV1ContentDto = {
  version: string
  characters: ValContentV1ContentItemDto[]
  maps: ValContentV1ContentItemDto[]
  chromas: ValContentV1ContentItemDto[]
  skins: ValContentV1ContentItemDto[]
  skinLevels: ValContentV1ContentItemDto[]
  equips: ValContentV1ContentItemDto[]
  gameModes: ValContentV1ContentItemDto[]
  sprays: ValContentV1ContentItemDto[]
  sprayLevels: ValContentV1ContentItemDto[]
  charms: ValContentV1ContentItemDto[]
  charmLevels: ValContentV1ContentItemDto[]
  playerCards: ValContentV1ContentItemDto[]
  playerTitles: ValContentV1ContentItemDto[]
  acts: ValContentV1ActDto[]
  ceremonies?: ValContentV1ContentItemDto[] | undefined
  totems?: ValContentV1ContentItemDto[] | undefined
}
type ValMatchV1MatchInfoDto = {
  matchId: string
  mapId: string
  gameVersion: string
  gameLengthMillis?: number | undefined
  region: string
  gameStartMillis: bigint
  provisioningFlowId: string
  isCompleted: boolean
  customGameName: string
  queueId: string
  gameMode: string
  isRanked: boolean
  seasonId: string
  premierMatchInfo: { [x: string]: unknown }
}
type ValMatchV1AbilityCastsDto = {
  grenadeCasts: number
  ability1Casts: number
  ability2Casts: number
  ultimateCasts: number
}
type ValMatchV1PlayerStatsDto = {
  score: number
  roundsPlayed: number
  kills: number
  deaths: number
  assists: number
  playtimeMillis: number
  abilityCasts?: ValMatchV1AbilityCastsDto | undefined
}
type ValMatchV1PlayerDto = {
  puuid: string
  gameName: string
  tagLine: string
  teamId: string
  partyId: string
  characterId?: string | undefined
  stats?: ValMatchV1PlayerStatsDto | undefined
  competitiveTier: number
  isObserver: boolean
  playerCard: string
  playerTitle: string
  accountLevel: number
}
type ValMatchV1CoachDto = { puuid: string; teamId: string }
type ValMatchV1TeamDto = {
  teamId: string
  won: boolean
  roundsPlayed: number
  roundsWon: number
  numPoints: number
}
type ValMatchV1LocationDto = { x: number; y: number }
type ValMatchV1PlayerLocationsDto = {
  puuid: string
  viewRadians: number
  location: ValMatchV1LocationDto
}
type ValMatchV1FinishingDamageDto = {
  damageType: string
  damageItem: string
  isSecondaryFireMode: boolean
}
type ValMatchV1KillDto = {
  timeSinceGameStartMillis: number
  timeSinceRoundStartMillis: number
  killer: string
  victim: string
  victimLocation: ValMatchV1LocationDto
  assistants: string[]
  playerLocations: ValMatchV1PlayerLocationsDto[]
  finishingDamage: ValMatchV1FinishingDamageDto
}
type ValMatchV1DamageDto = {
  receiver: string
  damage: number
  legshots: number
  bodyshots: number
  headshots: number
}
type ValMatchV1EconomyDto = {
  loadoutValue: number
  weapon: string
  armor: string
  remaining: number
  spent: number
}
type ValMatchV1AbilityDto = {
  grenadeEffects?: string | undefined
  ability1Effects?: string | undefined
  ability2Effects?: string | undefined
  ultimateEffects?: string | undefined
}
type ValMatchV1PlayerRoundStatsDto = {
  puuid: string
  kills: ValMatchV1KillDto[]
  damage: ValMatchV1DamageDto[]
  score: number
  economy: ValMatchV1EconomyDto
  ability: ValMatchV1AbilityDto
}
type ValMatchV1RoundResultDto = {
  roundNum: number
  roundResult: string
  roundCeremony: string
  winningTeam: string
  winningTeamRole: string
  bombPlanter?: string | undefined
  bombDefuser?: string | undefined
  plantRoundTime: number
  plantPlayerLocations?: ValMatchV1PlayerLocationsDto[] | undefined
  plantLocation: ValMatchV1LocationDto
  plantSite: string
  defuseRoundTime: number
  defusePlayerLocations?: ValMatchV1PlayerLocationsDto[] | undefined
  defuseLocation: ValMatchV1LocationDto
  playerStats: ValMatchV1PlayerRoundStatsDto[]
  roundResultCode: string
}
type ValMatchV1MatchDto = {
  matchInfo: ValMatchV1MatchInfoDto
  players: ValMatchV1PlayerDto[]
  coaches: ValMatchV1CoachDto[]
  teams?: ValMatchV1TeamDto[] | undefined
  roundResults?: ValMatchV1RoundResultDto[] | undefined
}
type ValMatchV1MatchlistEntryDto = { matchId: string; gameStartTimeMillis: bigint; queueId: string }
type ValMatchV1MatchlistDto = { puuid: string; history: ValMatchV1MatchlistEntryDto[] }
type ValMatchV1RecentMatchesDto = { currentTime: bigint; matchIds: string[] }
type ValRankedV1PlayerDto = {
  puuid?: string | undefined
  gameName?: string | undefined
  tagLine?: string | undefined
  leaderboardRank: bigint
  rankedRating: bigint
  numberOfWins: bigint
  competitiveTier?: bigint | undefined
  prefix?: string | undefined
  premierRosterType: string
}
type ValRankedV1TierDetailDto = {
  rankedRatingThreshold: bigint
  startingPage: bigint
  startingIndex: bigint
}
type ValRankedV1LeaderboardDto = {
  shard: string
  actId: string
  totalPlayers: bigint
  players: ValRankedV1PlayerDto[]
  immortalStartingPage?: bigint | undefined
  immortalStartingIndex?: bigint | undefined
  topTierRRThreshold?: bigint | undefined
  tierDetails?: { [x: string]: ValRankedV1TierDetailDto } | undefined
  startIndex?: bigint | undefined
  query?: string | undefined
}
type ValStatusV1ContentDto = { locale: string; content: string }
type ValStatusV1UpdateDto = {
  id: number
  author: string
  publish: boolean
  publish_locations: ('riotclient' | 'riotstatus' | 'game')[]
  translations: ValStatusV1ContentDto[]
  created_at: string
  updated_at: string
}
type ValStatusV1StatusDto = {
  id: number
  maintenance_status: 'scheduled' | 'in_progress' | 'complete'
  incident_severity: 'info' | 'warning' | 'critical'
  titles: ValStatusV1ContentDto[]
  updates: ValStatusV1UpdateDto[]
  created_at: string
  archive_at: string
  updated_at: string
  platforms: ('windows' | 'macos' | 'android' | 'ios' | 'ps4' | 'xbone' | 'switch')[]
}
type ValStatusV1PlatformDataDto = {
  id: string
  name: string
  locales: string[]
  maintenances: ValStatusV1StatusDto[]
  incidents: ValStatusV1StatusDto[]
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/riot/account/v1/accounts/by-puuid/:puuid': {
      $get:
        | {
            input: { param: { puuid: string } }
            output: AccountV1AccountDto
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 415 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/riot/account/v1/accounts/by-riot-id/:gameName/:tagLine': {
      $get:
        | {
            input: { param: { tagLine: string; gameName: string } }
            output: AccountV1AccountDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tagLine: string; gameName: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tagLine: string; gameName: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tagLine: string; gameName: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tagLine: string; gameName: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tagLine: string; gameName: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tagLine: string; gameName: string } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { tagLine: string; gameName: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { tagLine: string; gameName: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tagLine: string; gameName: string } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tagLine: string; gameName: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { tagLine: string; gameName: string } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/riot/account/v1/accounts/me': {
      $get:
        | { input: {}; output: AccountV1AccountDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/riot/account/v1/active-shards/by-game/:game/by-puuid/:puuid': {
      $get:
        | {
            input: { param: { game: 'val' | 'lor' | '2xko'; puuid: string } }
            output: AccountV1ActiveShardDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { game: 'val' | 'lor' | '2xko'; puuid: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { game: 'val' | 'lor' | '2xko'; puuid: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { game: 'val' | 'lor' | '2xko'; puuid: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { game: 'val' | 'lor' | '2xko'; puuid: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { game: 'val' | 'lor' | '2xko'; puuid: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { game: 'val' | 'lor' | '2xko'; puuid: string } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { game: 'val' | 'lor' | '2xko'; puuid: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { game: 'val' | 'lor' | '2xko'; puuid: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { game: 'val' | 'lor' | '2xko'; puuid: string } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { game: 'val' | 'lor' | '2xko'; puuid: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { game: 'val' | 'lor' | '2xko'; puuid: string } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/riot/account/v1/region/by-game/:game/by-puuid/:puuid': {
      $get:
        | {
            input: { param: { puuid: string; game: 'lol' | 'tft' } }
            output: AccountV1AccountRegionDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { puuid: string; game: 'lol' | 'tft' } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { puuid: string; game: 'lol' | 'tft' } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { puuid: string; game: 'lol' | 'tft' } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { puuid: string; game: 'lol' | 'tft' } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { puuid: string; game: 'lol' | 'tft' } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { puuid: string; game: 'lol' | 'tft' } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { puuid: string; game: 'lol' | 'tft' } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { puuid: string; game: 'lol' | 'tft' } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { puuid: string; game: 'lol' | 'tft' } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { puuid: string; game: 'lol' | 'tft' } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { puuid: string; game: 'lol' | 'tft' } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/champion-mastery/v4/champion-masteries/by-puuid/:encryptedPUUID': {
      $get:
        | {
            input: { param: { encryptedPUUID: string } }
            output: ChampionMasteryV4ChampionMasteryDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/champion-mastery/v4/champion-masteries/by-puuid/:encryptedPUUID/by-champion/:championId': {
      $get:
        | {
            input: { param: { encryptedPUUID: string; championId: number } }
            output: ChampionMasteryV4ChampionMasteryDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encryptedPUUID: string; championId: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { encryptedPUUID: string; championId: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { encryptedPUUID: string; championId: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { encryptedPUUID: string; championId: number } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { encryptedPUUID: string; championId: number } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { encryptedPUUID: string; championId: number } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { encryptedPUUID: string; championId: number } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { encryptedPUUID: string; championId: number } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { encryptedPUUID: string; championId: number } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { encryptedPUUID: string; championId: number } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { encryptedPUUID: string; championId: number } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/champion-mastery/v4/champion-masteries/by-puuid/:encryptedPUUID/top': {
      $get:
        | {
            input: { param: { encryptedPUUID: string } } & { query: { count?: number | undefined } }
            output: ChampionMasteryV4ChampionMasteryDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encryptedPUUID: string } } & { query: { count?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { encryptedPUUID: string } } & { query: { count?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { encryptedPUUID: string } } & { query: { count?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { encryptedPUUID: string } } & { query: { count?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { encryptedPUUID: string } } & { query: { count?: number | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { encryptedPUUID: string } } & { query: { count?: number | undefined } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { encryptedPUUID: string } } & { query: { count?: number | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { encryptedPUUID: string } } & { query: { count?: number | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { encryptedPUUID: string } } & { query: { count?: number | undefined } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { encryptedPUUID: string } } & { query: { count?: number | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { encryptedPUUID: string } } & { query: { count?: number | undefined } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/champion-mastery/v4/scores/by-puuid/:encryptedPUUID': {
      $get:
        | {
            input: { param: { encryptedPUUID: string } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/platform/v3/champion-rotations': {
      $get:
        | { input: {}; output: ChampionV3ChampionInfo; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lol/clash/v1/players/by-puuid/:puuid': {
      $get:
        | {
            input: { param: { puuid: string } }
            output: ClashV1PlayerDto[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 415 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lol/clash/v1/teams/:teamId': {
      $get:
        | {
            input: { param: { teamId: string } }
            output: ClashV1TeamDto
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 415 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lol/clash/v1/tournaments': {
      $get:
        | { input: {}; output: ClashV1TournamentDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lol/clash/v1/tournaments/by-team/:teamId': {
      $get:
        | {
            input: { param: { teamId: string } }
            output: ClashV1TournamentDto
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 415 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { teamId: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lol/clash/v1/tournaments/:tournamentId': {
      $get:
        | {
            input: { param: { tournamentId: number } }
            output: ClashV1TournamentDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tournamentId: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tournamentId: number } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tournamentId: number } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tournamentId: number } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tournamentId: number } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tournamentId: number } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { tournamentId: number } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { tournamentId: number } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tournamentId: number } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tournamentId: number } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { tournamentId: number } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/league-exp/v4/entries/:queue/:tier/:division': {
      $get:
        | {
            input: {
              param: {
                queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
                tier:
                  | 'CHALLENGER'
                  | 'GRANDMASTER'
                  | 'MASTER'
                  | 'DIAMOND'
                  | 'EMERALD'
                  | 'PLATINUM'
                  | 'GOLD'
                  | 'SILVER'
                  | 'BRONZE'
                  | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & { query: { page?: number | undefined } }
            output: LeagueExpV4LeagueEntryDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
                tier:
                  | 'CHALLENGER'
                  | 'GRANDMASTER'
                  | 'MASTER'
                  | 'DIAMOND'
                  | 'EMERALD'
                  | 'PLATINUM'
                  | 'GOLD'
                  | 'SILVER'
                  | 'BRONZE'
                  | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
                tier:
                  | 'CHALLENGER'
                  | 'GRANDMASTER'
                  | 'MASTER'
                  | 'DIAMOND'
                  | 'EMERALD'
                  | 'PLATINUM'
                  | 'GOLD'
                  | 'SILVER'
                  | 'BRONZE'
                  | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
                tier:
                  | 'CHALLENGER'
                  | 'GRANDMASTER'
                  | 'MASTER'
                  | 'DIAMOND'
                  | 'EMERALD'
                  | 'PLATINUM'
                  | 'GOLD'
                  | 'SILVER'
                  | 'BRONZE'
                  | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
                tier:
                  | 'CHALLENGER'
                  | 'GRANDMASTER'
                  | 'MASTER'
                  | 'DIAMOND'
                  | 'EMERALD'
                  | 'PLATINUM'
                  | 'GOLD'
                  | 'SILVER'
                  | 'BRONZE'
                  | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
                tier:
                  | 'CHALLENGER'
                  | 'GRANDMASTER'
                  | 'MASTER'
                  | 'DIAMOND'
                  | 'EMERALD'
                  | 'PLATINUM'
                  | 'GOLD'
                  | 'SILVER'
                  | 'BRONZE'
                  | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: {
                queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
                tier:
                  | 'CHALLENGER'
                  | 'GRANDMASTER'
                  | 'MASTER'
                  | 'DIAMOND'
                  | 'EMERALD'
                  | 'PLATINUM'
                  | 'GOLD'
                  | 'SILVER'
                  | 'BRONZE'
                  | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              param: {
                queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
                tier:
                  | 'CHALLENGER'
                  | 'GRANDMASTER'
                  | 'MASTER'
                  | 'DIAMOND'
                  | 'EMERALD'
                  | 'PLATINUM'
                  | 'GOLD'
                  | 'SILVER'
                  | 'BRONZE'
                  | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              param: {
                queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
                tier:
                  | 'CHALLENGER'
                  | 'GRANDMASTER'
                  | 'MASTER'
                  | 'DIAMOND'
                  | 'EMERALD'
                  | 'PLATINUM'
                  | 'GOLD'
                  | 'SILVER'
                  | 'BRONZE'
                  | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              param: {
                queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
                tier:
                  | 'CHALLENGER'
                  | 'GRANDMASTER'
                  | 'MASTER'
                  | 'DIAMOND'
                  | 'EMERALD'
                  | 'PLATINUM'
                  | 'GOLD'
                  | 'SILVER'
                  | 'BRONZE'
                  | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              param: {
                queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
                tier:
                  | 'CHALLENGER'
                  | 'GRANDMASTER'
                  | 'MASTER'
                  | 'DIAMOND'
                  | 'EMERALD'
                  | 'PLATINUM'
                  | 'GOLD'
                  | 'SILVER'
                  | 'BRONZE'
                  | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: {
              param: {
                queue: 'RANKED_SOLO_5x5' | 'RANKED_TFT' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
                tier:
                  | 'CHALLENGER'
                  | 'GRANDMASTER'
                  | 'MASTER'
                  | 'DIAMOND'
                  | 'EMERALD'
                  | 'PLATINUM'
                  | 'GOLD'
                  | 'SILVER'
                  | 'BRONZE'
                  | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/league/v4/challengerleagues/by-queue/:queue': {
      $get:
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: LeagueV4LeagueListDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/league/v4/entries/by-puuid/:encryptedPUUID': {
      $get:
        | {
            input: { param: { encryptedPUUID: string } }
            output: LeagueV4LeagueEntryDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/league/v4/entries/:queue/:tier/:division': {
      $get:
        | {
            input: {
              param: {
                division: 'I' | 'II' | 'III' | 'IV'
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
              }
            } & { query: { page?: number | undefined } }
            output: LeagueV4LeagueEntryDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                division: 'I' | 'II' | 'III' | 'IV'
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                division: 'I' | 'II' | 'III' | 'IV'
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                division: 'I' | 'II' | 'III' | 'IV'
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                division: 'I' | 'II' | 'III' | 'IV'
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                division: 'I' | 'II' | 'III' | 'IV'
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: {
                division: 'I' | 'II' | 'III' | 'IV'
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              param: {
                division: 'I' | 'II' | 'III' | 'IV'
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              param: {
                division: 'I' | 'II' | 'III' | 'IV'
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              param: {
                division: 'I' | 'II' | 'III' | 'IV'
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              param: {
                division: 'I' | 'II' | 'III' | 'IV'
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: {
              param: {
                division: 'I' | 'II' | 'III' | 'IV'
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT'
              }
            } & { query: { page?: number | undefined } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/league/v4/grandmasterleagues/by-queue/:queue': {
      $get:
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: LeagueV4LeagueListDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/league/v4/masterleagues/by-queue/:queue': {
      $get:
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: LeagueV4LeagueListDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { queue: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR' | 'RANKED_FLEX_TT' } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/challenges/v1/challenges/config': {
      $get:
        | {
            input: {}
            output: LolChallengesV1ChallengeConfigInfoDto[]
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lol/challenges/v1/challenges/percentiles': {
      $get:
        | {
            input: {}
            output: { [x: string]: { [x: string]: number } }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lol/challenges/v1/challenges/:challengeId/config': {
      $get:
        | {
            input: { param: { challengeId: bigint } }
            output: LolChallengesV1ChallengeConfigInfoDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/challenges/v1/challenges/:challengeId/leaderboards/by-level/:level': {
      $get:
        | {
            input: {
              param: {
                level:
                  | 'NONE'
                  | 'IRON'
                  | 'BRONZE'
                  | 'SILVER'
                  | 'GOLD'
                  | 'PLATINUM'
                  | 'DIAMOND'
                  | 'MASTER'
                  | 'GRANDMASTER'
                  | 'CHALLENGER'
                  | 'HIGHEST_NOT_LEADERBOARD_ONLY'
                  | 'HIGHEST'
                  | 'LOWEST'
                challengeId: bigint
              }
            } & { query: { limit?: number | undefined } }
            output: LolChallengesV1ApexPlayerInfoDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                level:
                  | 'NONE'
                  | 'IRON'
                  | 'BRONZE'
                  | 'SILVER'
                  | 'GOLD'
                  | 'PLATINUM'
                  | 'DIAMOND'
                  | 'MASTER'
                  | 'GRANDMASTER'
                  | 'CHALLENGER'
                  | 'HIGHEST_NOT_LEADERBOARD_ONLY'
                  | 'HIGHEST'
                  | 'LOWEST'
                challengeId: bigint
              }
            } & { query: { limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                level:
                  | 'NONE'
                  | 'IRON'
                  | 'BRONZE'
                  | 'SILVER'
                  | 'GOLD'
                  | 'PLATINUM'
                  | 'DIAMOND'
                  | 'MASTER'
                  | 'GRANDMASTER'
                  | 'CHALLENGER'
                  | 'HIGHEST_NOT_LEADERBOARD_ONLY'
                  | 'HIGHEST'
                  | 'LOWEST'
                challengeId: bigint
              }
            } & { query: { limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                level:
                  | 'NONE'
                  | 'IRON'
                  | 'BRONZE'
                  | 'SILVER'
                  | 'GOLD'
                  | 'PLATINUM'
                  | 'DIAMOND'
                  | 'MASTER'
                  | 'GRANDMASTER'
                  | 'CHALLENGER'
                  | 'HIGHEST_NOT_LEADERBOARD_ONLY'
                  | 'HIGHEST'
                  | 'LOWEST'
                challengeId: bigint
              }
            } & { query: { limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                level:
                  | 'NONE'
                  | 'IRON'
                  | 'BRONZE'
                  | 'SILVER'
                  | 'GOLD'
                  | 'PLATINUM'
                  | 'DIAMOND'
                  | 'MASTER'
                  | 'GRANDMASTER'
                  | 'CHALLENGER'
                  | 'HIGHEST_NOT_LEADERBOARD_ONLY'
                  | 'HIGHEST'
                  | 'LOWEST'
                challengeId: bigint
              }
            } & { query: { limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                level:
                  | 'NONE'
                  | 'IRON'
                  | 'BRONZE'
                  | 'SILVER'
                  | 'GOLD'
                  | 'PLATINUM'
                  | 'DIAMOND'
                  | 'MASTER'
                  | 'GRANDMASTER'
                  | 'CHALLENGER'
                  | 'HIGHEST_NOT_LEADERBOARD_ONLY'
                  | 'HIGHEST'
                  | 'LOWEST'
                challengeId: bigint
              }
            } & { query: { limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: {
                level:
                  | 'NONE'
                  | 'IRON'
                  | 'BRONZE'
                  | 'SILVER'
                  | 'GOLD'
                  | 'PLATINUM'
                  | 'DIAMOND'
                  | 'MASTER'
                  | 'GRANDMASTER'
                  | 'CHALLENGER'
                  | 'HIGHEST_NOT_LEADERBOARD_ONLY'
                  | 'HIGHEST'
                  | 'LOWEST'
                challengeId: bigint
              }
            } & { query: { limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              param: {
                level:
                  | 'NONE'
                  | 'IRON'
                  | 'BRONZE'
                  | 'SILVER'
                  | 'GOLD'
                  | 'PLATINUM'
                  | 'DIAMOND'
                  | 'MASTER'
                  | 'GRANDMASTER'
                  | 'CHALLENGER'
                  | 'HIGHEST_NOT_LEADERBOARD_ONLY'
                  | 'HIGHEST'
                  | 'LOWEST'
                challengeId: bigint
              }
            } & { query: { limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              param: {
                level:
                  | 'NONE'
                  | 'IRON'
                  | 'BRONZE'
                  | 'SILVER'
                  | 'GOLD'
                  | 'PLATINUM'
                  | 'DIAMOND'
                  | 'MASTER'
                  | 'GRANDMASTER'
                  | 'CHALLENGER'
                  | 'HIGHEST_NOT_LEADERBOARD_ONLY'
                  | 'HIGHEST'
                  | 'LOWEST'
                challengeId: bigint
              }
            } & { query: { limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              param: {
                level:
                  | 'NONE'
                  | 'IRON'
                  | 'BRONZE'
                  | 'SILVER'
                  | 'GOLD'
                  | 'PLATINUM'
                  | 'DIAMOND'
                  | 'MASTER'
                  | 'GRANDMASTER'
                  | 'CHALLENGER'
                  | 'HIGHEST_NOT_LEADERBOARD_ONLY'
                  | 'HIGHEST'
                  | 'LOWEST'
                challengeId: bigint
              }
            } & { query: { limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              param: {
                level:
                  | 'NONE'
                  | 'IRON'
                  | 'BRONZE'
                  | 'SILVER'
                  | 'GOLD'
                  | 'PLATINUM'
                  | 'DIAMOND'
                  | 'MASTER'
                  | 'GRANDMASTER'
                  | 'CHALLENGER'
                  | 'HIGHEST_NOT_LEADERBOARD_ONLY'
                  | 'HIGHEST'
                  | 'LOWEST'
                challengeId: bigint
              }
            } & { query: { limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: {
              param: {
                level:
                  | 'NONE'
                  | 'IRON'
                  | 'BRONZE'
                  | 'SILVER'
                  | 'GOLD'
                  | 'PLATINUM'
                  | 'DIAMOND'
                  | 'MASTER'
                  | 'GRANDMASTER'
                  | 'CHALLENGER'
                  | 'HIGHEST_NOT_LEADERBOARD_ONLY'
                  | 'HIGHEST'
                  | 'LOWEST'
                challengeId: bigint
              }
            } & { query: { limit?: number | undefined } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/challenges/v1/challenges/:challengeId/percentiles': {
      $get:
        | {
            input: { param: { challengeId: bigint } }
            output: { [x: string]: number }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { challengeId: bigint } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/challenges/v1/player-data/:puuid': {
      $get:
        | {
            input: { param: { puuid: string } }
            output: LolChallengesV1PlayerInfoDto
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 415 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lol/rso-match/v1/matches/ids': {
      $get:
        | {
            input: {
              query: {
                count?: number | undefined
                start?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                queue?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
              }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                count?: number | undefined
                start?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                queue?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              query: {
                count?: number | undefined
                start?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                queue?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              query: {
                count?: number | undefined
                start?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                queue?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              query: {
                count?: number | undefined
                start?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                queue?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              query: {
                count?: number | undefined
                start?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                queue?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              query: {
                count?: number | undefined
                start?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                queue?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              query: {
                count?: number | undefined
                start?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                queue?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              query: {
                count?: number | undefined
                start?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                queue?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              query: {
                count?: number | undefined
                start?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                queue?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              query: {
                count?: number | undefined
                start?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                queue?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: {
              query: {
                count?: number | undefined
                start?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                queue?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/rso-match/v1/matches/:matchId': {
      $get:
        | {
            input: { param: { matchId: string } }
            output: MatchV5MatchDto
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 415 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lol/rso-match/v1/matches/:matchId/timeline': {
      $get:
        | {
            input: { param: { matchId: string } }
            output: MatchV5TimelineDto
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 415 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lol/status/v4/platform-data': {
      $get:
        | { input: {}; output: LolStatusV4PlatformDataDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lor/deck/v1/decks/me': {
      $get:
        | { input: {}; output: LorDeckV1DeckDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 504 }
      $post:
        | {
            input: { json: LorDeckV1NewDeckDto }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: LorDeckV1NewDeckDto }; output: {}; outputFormat: string; status: 400 }
        | { input: { json: LorDeckV1NewDeckDto }; output: {}; outputFormat: string; status: 401 }
        | { input: { json: LorDeckV1NewDeckDto }; output: {}; outputFormat: string; status: 403 }
        | { input: { json: LorDeckV1NewDeckDto }; output: {}; outputFormat: string; status: 404 }
        | { input: { json: LorDeckV1NewDeckDto }; output: {}; outputFormat: string; status: 405 }
        | { input: { json: LorDeckV1NewDeckDto }; output: {}; outputFormat: string; status: 415 }
        | { input: { json: LorDeckV1NewDeckDto }; output: {}; outputFormat: string; status: 429 }
        | { input: { json: LorDeckV1NewDeckDto }; output: {}; outputFormat: string; status: 500 }
        | { input: { json: LorDeckV1NewDeckDto }; output: {}; outputFormat: string; status: 502 }
        | { input: { json: LorDeckV1NewDeckDto }; output: {}; outputFormat: string; status: 503 }
        | { input: { json: LorDeckV1NewDeckDto }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lor/inventory/v1/cards/me': {
      $get:
        | { input: {}; output: LorInventoryV1CardDto[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lor/match/v1/matches/by-puuid/:puuid/ids': {
      $get:
        | {
            input: { param: { puuid: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 415 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lor/match/v1/matches/:matchId': {
      $get:
        | {
            input: { param: { matchId: string } }
            output: LorMatchV1MatchDto
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 415 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lor/ranked/v1/leaderboards': {
      $get:
        | { input: {}; output: LorRankedV1LeaderboardDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lor/status/v1/platform-data': {
      $get:
        | { input: {}; output: LorStatusV1PlatformDataDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lol/match/v5/matches/by-puuid/:puuid/ids': {
      $get:
        | {
            input: { param: { puuid: string } } & {
              query: {
                startTime?: bigint | undefined
                endTime?: bigint | undefined
                queue?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                start?: number | undefined
                count?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                startTime?: bigint | undefined
                endTime?: bigint | undefined
                queue?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                start?: number | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                startTime?: bigint | undefined
                endTime?: bigint | undefined
                queue?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                start?: number | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                startTime?: bigint | undefined
                endTime?: bigint | undefined
                queue?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                start?: number | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                startTime?: bigint | undefined
                endTime?: bigint | undefined
                queue?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                start?: number | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                startTime?: bigint | undefined
                endTime?: bigint | undefined
                queue?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                start?: number | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                startTime?: bigint | undefined
                endTime?: bigint | undefined
                queue?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                start?: number | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                startTime?: bigint | undefined
                endTime?: bigint | undefined
                queue?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                start?: number | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                startTime?: bigint | undefined
                endTime?: bigint | undefined
                queue?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                start?: number | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                startTime?: bigint | undefined
                endTime?: bigint | undefined
                queue?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                start?: number | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                startTime?: bigint | undefined
                endTime?: bigint | undefined
                queue?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                start?: number | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                startTime?: bigint | undefined
                endTime?: bigint | undefined
                queue?: number | undefined
                type?: 'ranked' | 'normal' | 'tourney' | 'tutorial' | undefined
                start?: number | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/match/v5/matches/replays': {
      $get:
        | { input: {}; output: MatchV5ReplayDTO; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lol/match/v5/matches/:matchId': {
      $get:
        | {
            input: { param: { matchId: string } }
            output: MatchV5MatchDto
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 415 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lol/match/v5/matches/:matchId/timeline': {
      $get:
        | {
            input: { param: { matchId: string } }
            output: MatchV5TimelineDto
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 415 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/riftbound/content/v1/contents': {
      $get:
        | {
            input: { query: { locale?: string | undefined } }
            output: RiftboundContentV1RiftboundContentDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/spectator/tft/v5/active-games/by-puuid/:encryptedPUUID': {
      $get:
        | {
            input: { param: { encryptedPUUID: string } }
            output: SpectatorTftV5CurrentGameInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/spectator/v5/active-games/by-summoner/:encryptedPUUID': {
      $get:
        | {
            input: { param: { encryptedPUUID: string } }
            output: SpectatorV5CurrentGameInfo
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/summoner/v4/summoners/by-puuid/:encryptedPUUID': {
      $get:
        | {
            input: { param: { encryptedPUUID: string } }
            output: SummonerV4SummonerDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/summoner/v4/summoners/me': {
      $get:
        | { input: {}; output: SummonerV4SummonerDTO; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/tft/league/v1/by-puuid/:puuid': {
      $get:
        | {
            input: { param: { puuid: string } }
            output: TftLeagueV1LeagueEntryDTO[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 415 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/tft/league/v1/challenger': {
      $get:
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: TftLeagueV1LeagueListDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/tft/league/v1/entries/:tier/:division': {
      $get:
        | {
            input: {
              param: {
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & {
              query: {
                queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined
                page?: number | undefined
              }
            }
            output: TftLeagueV1LeagueEntryDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & {
              query: {
                queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & {
              query: {
                queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & {
              query: {
                queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & {
              query: {
                queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & {
              query: {
                queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: {
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & {
              query: {
                queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              param: {
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & {
              query: {
                queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              param: {
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & {
              query: {
                queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              param: {
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & {
              query: {
                queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              param: {
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & {
              query: {
                queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: {
              param: {
                tier: 'DIAMOND' | 'EMERALD' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'IRON'
                division: 'I' | 'II' | 'III' | 'IV'
              }
            } & {
              query: {
                queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined
                page?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/tft/league/v1/grandmaster': {
      $get:
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: TftLeagueV1LeagueListDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/tft/league/v1/master': {
      $get:
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: TftLeagueV1LeagueListDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { query: { queue?: 'RANKED_TFT' | 'RANKED_TFT_DOUBLE_UP' | undefined } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/tft/league/v1/rated-ladders/:queue/top': {
      $get:
        | {
            input: { param: { queue: 'RANKED_TFT_TURBO' } }
            output: TftLeagueV1TopRatedLadderEntryDto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { queue: 'RANKED_TFT_TURBO' } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { queue: 'RANKED_TFT_TURBO' } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { queue: 'RANKED_TFT_TURBO' } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { queue: 'RANKED_TFT_TURBO' } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { queue: 'RANKED_TFT_TURBO' } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { queue: 'RANKED_TFT_TURBO' } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { queue: 'RANKED_TFT_TURBO' } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { queue: 'RANKED_TFT_TURBO' } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { queue: 'RANKED_TFT_TURBO' } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { queue: 'RANKED_TFT_TURBO' } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { queue: 'RANKED_TFT_TURBO' } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/tft/match/v1/matches/by-puuid/:puuid/ids': {
      $get:
        | {
            input: { param: { puuid: string } } & {
              query: {
                start?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
                count?: number | undefined
              }
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                start?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                start?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                start?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                start?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                start?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                start?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                start?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                start?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                start?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                start?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { puuid: string } } & {
              query: {
                start?: number | undefined
                endTime?: bigint | undefined
                startTime?: bigint | undefined
                count?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/tft/match/v1/matches/:matchId': {
      $get:
        | {
            input: { param: { matchId: string } }
            output: TftMatchV1MatchDto
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 415 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/tft/status/v1/platform-data': {
      $get:
        | { input: {}; output: TftStatusV1PlatformDataDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/tft/summoner/v1/summoners/by-puuid/:encryptedPUUID': {
      $get:
        | {
            input: { param: { encryptedPUUID: string } }
            output: TftSummonerV1SummonerDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { encryptedPUUID: string } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/tft/summoner/v1/summoners/me': {
      $get:
        | { input: {}; output: TftSummonerV1SummonerDTO; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/lol/tournament-stub/v5/codes': {
      $post:
        | {
            input: { query: { count?: number | undefined; tournamentId: bigint } } & {
              json: TournamentStubV5TournamentCodeParametersV5
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { count?: number | undefined; tournamentId: bigint } } & {
              json: TournamentStubV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { count?: number | undefined; tournamentId: bigint } } & {
              json: TournamentStubV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { count?: number | undefined; tournamentId: bigint } } & {
              json: TournamentStubV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { count?: number | undefined; tournamentId: bigint } } & {
              json: TournamentStubV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { count?: number | undefined; tournamentId: bigint } } & {
              json: TournamentStubV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { count?: number | undefined; tournamentId: bigint } } & {
              json: TournamentStubV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { query: { count?: number | undefined; tournamentId: bigint } } & {
              json: TournamentStubV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { count?: number | undefined; tournamentId: bigint } } & {
              json: TournamentStubV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { count?: number | undefined; tournamentId: bigint } } & {
              json: TournamentStubV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { query: { count?: number | undefined; tournamentId: bigint } } & {
              json: TournamentStubV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { query: { count?: number | undefined; tournamentId: bigint } } & {
              json: TournamentStubV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/tournament-stub/v5/codes/:tournamentCode': {
      $get:
        | {
            input: { param: { tournamentCode: string } }
            output: TournamentStubV5TournamentCodeV5DTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/tournament-stub/v5/lobby-events/by-code/:tournamentCode': {
      $get:
        | {
            input: { param: { tournamentCode: string } }
            output: TournamentStubV5LobbyEventV5DTOWrapper
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/tournament-stub/v5/providers': {
      $post:
        | {
            input: { json: TournamentStubV5ProviderRegistrationParametersV5 }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TournamentStubV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TournamentStubV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TournamentStubV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TournamentStubV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: TournamentStubV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { json: TournamentStubV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { json: TournamentStubV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: TournamentStubV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { json: TournamentStubV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { json: TournamentStubV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { json: TournamentStubV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/tournament-stub/v5/tournaments': {
      $post:
        | {
            input: { json: TournamentStubV5TournamentRegistrationParametersV5 }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TournamentStubV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TournamentStubV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TournamentStubV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TournamentStubV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: TournamentStubV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { json: TournamentStubV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { json: TournamentStubV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: TournamentStubV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { json: TournamentStubV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { json: TournamentStubV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { json: TournamentStubV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/tournament/v5/codes': {
      $post:
        | {
            input: { query: { tournamentId: bigint; count?: number | undefined } } & {
              json: TournamentV5TournamentCodeParametersV5
            }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { tournamentId: bigint; count?: number | undefined } } & {
              json: TournamentV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { tournamentId: bigint; count?: number | undefined } } & {
              json: TournamentV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { tournamentId: bigint; count?: number | undefined } } & {
              json: TournamentV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { tournamentId: bigint; count?: number | undefined } } & {
              json: TournamentV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { tournamentId: bigint; count?: number | undefined } } & {
              json: TournamentV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { tournamentId: bigint; count?: number | undefined } } & {
              json: TournamentV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { query: { tournamentId: bigint; count?: number | undefined } } & {
              json: TournamentV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { tournamentId: bigint; count?: number | undefined } } & {
              json: TournamentV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { tournamentId: bigint; count?: number | undefined } } & {
              json: TournamentV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { query: { tournamentId: bigint; count?: number | undefined } } & {
              json: TournamentV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { query: { tournamentId: bigint; count?: number | undefined } } & {
              json: TournamentV5TournamentCodeParametersV5
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/tournament/v5/codes/:tournamentCode': {
      $get:
        | {
            input: { param: { tournamentCode: string } }
            output: TournamentV5TournamentCodeV5DTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 504
          }
      $put:
        | {
            input: { param: { tournamentCode: string } } & {
              json: TournamentV5TournamentCodeUpdateParametersV5
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { tournamentCode: string } } & {
              json: TournamentV5TournamentCodeUpdateParametersV5
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tournamentCode: string } } & {
              json: TournamentV5TournamentCodeUpdateParametersV5
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tournamentCode: string } } & {
              json: TournamentV5TournamentCodeUpdateParametersV5
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tournamentCode: string } } & {
              json: TournamentV5TournamentCodeUpdateParametersV5
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tournamentCode: string } } & {
              json: TournamentV5TournamentCodeUpdateParametersV5
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tournamentCode: string } } & {
              json: TournamentV5TournamentCodeUpdateParametersV5
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { tournamentCode: string } } & {
              json: TournamentV5TournamentCodeUpdateParametersV5
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { tournamentCode: string } } & {
              json: TournamentV5TournamentCodeUpdateParametersV5
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tournamentCode: string } } & {
              json: TournamentV5TournamentCodeUpdateParametersV5
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tournamentCode: string } } & {
              json: TournamentV5TournamentCodeUpdateParametersV5
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { tournamentCode: string } } & {
              json: TournamentV5TournamentCodeUpdateParametersV5
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/tournament/v5/games/by-code/:tournamentCode': {
      $get:
        | {
            input: { param: { tournamentCode: string } }
            output: TournamentV5TournamentGamesV5[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/tournament/v5/lobby-events/by-code/:tournamentCode': {
      $get:
        | {
            input: { param: { tournamentCode: string } }
            output: TournamentV5LobbyEventV5DTOWrapper
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { tournamentCode: string } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/tournament/v5/providers': {
      $post:
        | {
            input: { json: TournamentV5ProviderRegistrationParametersV5 }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TournamentV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TournamentV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TournamentV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TournamentV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: TournamentV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { json: TournamentV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { json: TournamentV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: TournamentV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { json: TournamentV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { json: TournamentV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { json: TournamentV5ProviderRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/lol/tournament/v5/tournaments': {
      $post:
        | {
            input: { json: TournamentV5TournamentRegistrationParametersV5 }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TournamentV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { json: TournamentV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { json: TournamentV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { json: TournamentV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { json: TournamentV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { json: TournamentV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { json: TournamentV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { json: TournamentV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { json: TournamentV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { json: TournamentV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { json: TournamentV5TournamentRegistrationParametersV5 }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/val/match/console/v1/matches/:matchId': {
      $get:
        | {
            input: { param: { matchId: string } }
            output: ValConsoleMatchV1MatchDto
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 415 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/val/match/console/v1/matchlists/by-puuid/:puuid': {
      $get:
        | {
            input: { param: { puuid: string } } & {
              query: { platformType: 'playstation' | 'xbox' }
            }
            output: ValConsoleMatchV1MatchlistDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { puuid: string } } & {
              query: { platformType: 'playstation' | 'xbox' }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { puuid: string } } & {
              query: { platformType: 'playstation' | 'xbox' }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { puuid: string } } & {
              query: { platformType: 'playstation' | 'xbox' }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { puuid: string } } & {
              query: { platformType: 'playstation' | 'xbox' }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { puuid: string } } & {
              query: { platformType: 'playstation' | 'xbox' }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { puuid: string } } & {
              query: { platformType: 'playstation' | 'xbox' }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { puuid: string } } & {
              query: { platformType: 'playstation' | 'xbox' }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { puuid: string } } & {
              query: { platformType: 'playstation' | 'xbox' }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { puuid: string } } & {
              query: { platformType: 'playstation' | 'xbox' }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { puuid: string } } & {
              query: { platformType: 'playstation' | 'xbox' }
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { puuid: string } } & {
              query: { platformType: 'playstation' | 'xbox' }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/val/match/console/v1/recent-matches/by-queue/:queue': {
      $get:
        | {
            input: {
              param: {
                queue:
                  | 'console_unrated'
                  | 'console_swiftplay'
                  | 'console_hurm'
                  | 'console_deathmatch'
                  | 'console_competitive'
                  | 'console_skirmish2v2'
                  | 'console_skirmishascension1v1'
                  | 'console_skirmishascension2v2'
                  | 'console_abilitydraftarena'
              }
            }
            output: ValConsoleMatchV1RecentMatchesDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                queue:
                  | 'console_unrated'
                  | 'console_swiftplay'
                  | 'console_hurm'
                  | 'console_deathmatch'
                  | 'console_competitive'
                  | 'console_skirmish2v2'
                  | 'console_skirmishascension1v1'
                  | 'console_skirmishascension2v2'
                  | 'console_abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                queue:
                  | 'console_unrated'
                  | 'console_swiftplay'
                  | 'console_hurm'
                  | 'console_deathmatch'
                  | 'console_competitive'
                  | 'console_skirmish2v2'
                  | 'console_skirmishascension1v1'
                  | 'console_skirmishascension2v2'
                  | 'console_abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                queue:
                  | 'console_unrated'
                  | 'console_swiftplay'
                  | 'console_hurm'
                  | 'console_deathmatch'
                  | 'console_competitive'
                  | 'console_skirmish2v2'
                  | 'console_skirmishascension1v1'
                  | 'console_skirmishascension2v2'
                  | 'console_abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                queue:
                  | 'console_unrated'
                  | 'console_swiftplay'
                  | 'console_hurm'
                  | 'console_deathmatch'
                  | 'console_competitive'
                  | 'console_skirmish2v2'
                  | 'console_skirmishascension1v1'
                  | 'console_skirmishascension2v2'
                  | 'console_abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                queue:
                  | 'console_unrated'
                  | 'console_swiftplay'
                  | 'console_hurm'
                  | 'console_deathmatch'
                  | 'console_competitive'
                  | 'console_skirmish2v2'
                  | 'console_skirmishascension1v1'
                  | 'console_skirmishascension2v2'
                  | 'console_abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: {
                queue:
                  | 'console_unrated'
                  | 'console_swiftplay'
                  | 'console_hurm'
                  | 'console_deathmatch'
                  | 'console_competitive'
                  | 'console_skirmish2v2'
                  | 'console_skirmishascension1v1'
                  | 'console_skirmishascension2v2'
                  | 'console_abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              param: {
                queue:
                  | 'console_unrated'
                  | 'console_swiftplay'
                  | 'console_hurm'
                  | 'console_deathmatch'
                  | 'console_competitive'
                  | 'console_skirmish2v2'
                  | 'console_skirmishascension1v1'
                  | 'console_skirmishascension2v2'
                  | 'console_abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              param: {
                queue:
                  | 'console_unrated'
                  | 'console_swiftplay'
                  | 'console_hurm'
                  | 'console_deathmatch'
                  | 'console_competitive'
                  | 'console_skirmish2v2'
                  | 'console_skirmishascension1v1'
                  | 'console_skirmishascension2v2'
                  | 'console_abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              param: {
                queue:
                  | 'console_unrated'
                  | 'console_swiftplay'
                  | 'console_hurm'
                  | 'console_deathmatch'
                  | 'console_competitive'
                  | 'console_skirmish2v2'
                  | 'console_skirmishascension1v1'
                  | 'console_skirmishascension2v2'
                  | 'console_abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              param: {
                queue:
                  | 'console_unrated'
                  | 'console_swiftplay'
                  | 'console_hurm'
                  | 'console_deathmatch'
                  | 'console_competitive'
                  | 'console_skirmish2v2'
                  | 'console_skirmishascension1v1'
                  | 'console_skirmishascension2v2'
                  | 'console_abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: {
              param: {
                queue:
                  | 'console_unrated'
                  | 'console_swiftplay'
                  | 'console_hurm'
                  | 'console_deathmatch'
                  | 'console_competitive'
                  | 'console_skirmish2v2'
                  | 'console_skirmishascension1v1'
                  | 'console_skirmishascension2v2'
                  | 'console_abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/val/console/ranked/v1/leaderboards/by-act/:actId': {
      $get:
        | {
            input: { param: { actId: string } } & {
              query: {
                platformType: 'playstation' | 'xbox'
                startIndex?: number | undefined
                size?: number | undefined
              }
            }
            output: ValConsoleRankedV1LeaderboardDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actId: string } } & {
              query: {
                platformType: 'playstation' | 'xbox'
                startIndex?: number | undefined
                size?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { actId: string } } & {
              query: {
                platformType: 'playstation' | 'xbox'
                startIndex?: number | undefined
                size?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { actId: string } } & {
              query: {
                platformType: 'playstation' | 'xbox'
                startIndex?: number | undefined
                size?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { actId: string } } & {
              query: {
                platformType: 'playstation' | 'xbox'
                startIndex?: number | undefined
                size?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { actId: string } } & {
              query: {
                platformType: 'playstation' | 'xbox'
                startIndex?: number | undefined
                size?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { actId: string } } & {
              query: {
                platformType: 'playstation' | 'xbox'
                startIndex?: number | undefined
                size?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { actId: string } } & {
              query: {
                platformType: 'playstation' | 'xbox'
                startIndex?: number | undefined
                size?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { actId: string } } & {
              query: {
                platformType: 'playstation' | 'xbox'
                startIndex?: number | undefined
                size?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { actId: string } } & {
              query: {
                platformType: 'playstation' | 'xbox'
                startIndex?: number | undefined
                size?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { actId: string } } & {
              query: {
                platformType: 'playstation' | 'xbox'
                startIndex?: number | undefined
                size?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { actId: string } } & {
              query: {
                platformType: 'playstation' | 'xbox'
                startIndex?: number | undefined
                size?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/val/content/v1/contents': {
      $get:
        | {
            input: { query: { locale?: string | undefined } }
            output: ValContentV1ContentDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { query: { locale?: string | undefined } }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/val/match/v1/matches/:matchId': {
      $get:
        | {
            input: { param: { matchId: string } }
            output: ValMatchV1MatchDto
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 415 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { matchId: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/val/match/v1/matchlists/by-puuid/:puuid': {
      $get:
        | {
            input: { param: { puuid: string } }
            output: ValMatchV1MatchlistDto
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 401 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 403 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 404 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 405 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 415 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 429 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 500 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 502 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 503 }
        | { input: { param: { puuid: string } }; output: {}; outputFormat: string; status: 504 }
    }
  } & {
    '/val/match/v1/recent-matches/by-queue/:queue': {
      $get:
        | {
            input: {
              param: {
                queue:
                  | 'competitive'
                  | 'unrated'
                  | 'spikerush'
                  | 'tournamentmode'
                  | 'deathmatch'
                  | 'onefa'
                  | 'ggteam'
                  | 'hurm'
                  | 'swiftplay'
                  | 'skirmish2v2'
                  | 'skirmishascension1v1'
                  | 'skirmishascension2v2'
                  | 'test'
                  | 'abilitydraftarena'
              }
            }
            output: ValMatchV1RecentMatchesDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                queue:
                  | 'competitive'
                  | 'unrated'
                  | 'spikerush'
                  | 'tournamentmode'
                  | 'deathmatch'
                  | 'onefa'
                  | 'ggteam'
                  | 'hurm'
                  | 'swiftplay'
                  | 'skirmish2v2'
                  | 'skirmishascension1v1'
                  | 'skirmishascension2v2'
                  | 'test'
                  | 'abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: {
              param: {
                queue:
                  | 'competitive'
                  | 'unrated'
                  | 'spikerush'
                  | 'tournamentmode'
                  | 'deathmatch'
                  | 'onefa'
                  | 'ggteam'
                  | 'hurm'
                  | 'swiftplay'
                  | 'skirmish2v2'
                  | 'skirmishascension1v1'
                  | 'skirmishascension2v2'
                  | 'test'
                  | 'abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: {
              param: {
                queue:
                  | 'competitive'
                  | 'unrated'
                  | 'spikerush'
                  | 'tournamentmode'
                  | 'deathmatch'
                  | 'onefa'
                  | 'ggteam'
                  | 'hurm'
                  | 'swiftplay'
                  | 'skirmish2v2'
                  | 'skirmishascension1v1'
                  | 'skirmishascension2v2'
                  | 'test'
                  | 'abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: {
              param: {
                queue:
                  | 'competitive'
                  | 'unrated'
                  | 'spikerush'
                  | 'tournamentmode'
                  | 'deathmatch'
                  | 'onefa'
                  | 'ggteam'
                  | 'hurm'
                  | 'swiftplay'
                  | 'skirmish2v2'
                  | 'skirmishascension1v1'
                  | 'skirmishascension2v2'
                  | 'test'
                  | 'abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: {
              param: {
                queue:
                  | 'competitive'
                  | 'unrated'
                  | 'spikerush'
                  | 'tournamentmode'
                  | 'deathmatch'
                  | 'onefa'
                  | 'ggteam'
                  | 'hurm'
                  | 'swiftplay'
                  | 'skirmish2v2'
                  | 'skirmishascension1v1'
                  | 'skirmishascension2v2'
                  | 'test'
                  | 'abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: {
              param: {
                queue:
                  | 'competitive'
                  | 'unrated'
                  | 'spikerush'
                  | 'tournamentmode'
                  | 'deathmatch'
                  | 'onefa'
                  | 'ggteam'
                  | 'hurm'
                  | 'swiftplay'
                  | 'skirmish2v2'
                  | 'skirmishascension1v1'
                  | 'skirmishascension2v2'
                  | 'test'
                  | 'abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: {
              param: {
                queue:
                  | 'competitive'
                  | 'unrated'
                  | 'spikerush'
                  | 'tournamentmode'
                  | 'deathmatch'
                  | 'onefa'
                  | 'ggteam'
                  | 'hurm'
                  | 'swiftplay'
                  | 'skirmish2v2'
                  | 'skirmishascension1v1'
                  | 'skirmishascension2v2'
                  | 'test'
                  | 'abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: {
              param: {
                queue:
                  | 'competitive'
                  | 'unrated'
                  | 'spikerush'
                  | 'tournamentmode'
                  | 'deathmatch'
                  | 'onefa'
                  | 'ggteam'
                  | 'hurm'
                  | 'swiftplay'
                  | 'skirmish2v2'
                  | 'skirmishascension1v1'
                  | 'skirmishascension2v2'
                  | 'test'
                  | 'abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: {
              param: {
                queue:
                  | 'competitive'
                  | 'unrated'
                  | 'spikerush'
                  | 'tournamentmode'
                  | 'deathmatch'
                  | 'onefa'
                  | 'ggteam'
                  | 'hurm'
                  | 'swiftplay'
                  | 'skirmish2v2'
                  | 'skirmishascension1v1'
                  | 'skirmishascension2v2'
                  | 'test'
                  | 'abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: {
              param: {
                queue:
                  | 'competitive'
                  | 'unrated'
                  | 'spikerush'
                  | 'tournamentmode'
                  | 'deathmatch'
                  | 'onefa'
                  | 'ggteam'
                  | 'hurm'
                  | 'swiftplay'
                  | 'skirmish2v2'
                  | 'skirmishascension1v1'
                  | 'skirmishascension2v2'
                  | 'test'
                  | 'abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: {
              param: {
                queue:
                  | 'competitive'
                  | 'unrated'
                  | 'spikerush'
                  | 'tournamentmode'
                  | 'deathmatch'
                  | 'onefa'
                  | 'ggteam'
                  | 'hurm'
                  | 'swiftplay'
                  | 'skirmish2v2'
                  | 'skirmishascension1v1'
                  | 'skirmishascension2v2'
                  | 'test'
                  | 'abilitydraftarena'
              }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/val/ranked/v1/leaderboards/by-act/:actId': {
      $get:
        | {
            input: { param: { actId: string } } & {
              query: { size?: number | undefined; startIndex?: number | undefined }
            }
            output: ValRankedV1LeaderboardDto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { actId: string } } & {
              query: { size?: number | undefined; startIndex?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { actId: string } } & {
              query: { size?: number | undefined; startIndex?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { actId: string } } & {
              query: { size?: number | undefined; startIndex?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { actId: string } } & {
              query: { size?: number | undefined; startIndex?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 404
          }
        | {
            input: { param: { actId: string } } & {
              query: { size?: number | undefined; startIndex?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 405
          }
        | {
            input: { param: { actId: string } } & {
              query: { size?: number | undefined; startIndex?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 415
          }
        | {
            input: { param: { actId: string } } & {
              query: { size?: number | undefined; startIndex?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 429
          }
        | {
            input: { param: { actId: string } } & {
              query: { size?: number | undefined; startIndex?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 500
          }
        | {
            input: { param: { actId: string } } & {
              query: { size?: number | undefined; startIndex?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 502
          }
        | {
            input: { param: { actId: string } } & {
              query: { size?: number | undefined; startIndex?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 503
          }
        | {
            input: { param: { actId: string } } & {
              query: { size?: number | undefined; startIndex?: number | undefined }
            }
            output: {}
            outputFormat: string
            status: 504
          }
    }
  } & {
    '/val/status/v1/platform-data': {
      $get:
        | { input: {}; output: ValStatusV1PlatformDataDto; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 400 }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
        | { input: {}; output: {}; outputFormat: string; status: 405 }
        | { input: {}; output: {}; outputFormat: string; status: 415 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
        | { input: {}; output: {}; outputFormat: string; status: 502 }
        | { input: {}; output: {}; outputFormat: string; status: 503 }
        | { input: {}; output: {}; outputFormat: string; status: 504 }
    }
  },
  '/'
>
export default routes
