type Membership = {
  Active?: boolean | undefined
  EndDate?: (string | null) | undefined
  MembershipId?: number | undefined
  PlayerId?: number | undefined
  PlayerName?: (string | null) | undefined
  StartDate?: (string | null) | undefined
  TeamArea?: (string | null) | undefined
  TeamId?: number | undefined
  TeamName?: (string | null) | undefined
  Updated?: (string | null) | undefined
}
type Area = {
  AreaId?: number | undefined
  CountryCode?: (string | null) | undefined
  Name?: (string | null) | undefined
}
type Game = {
  BestOf?: (string | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  DrawMoneyLine?: (number | null) | undefined
  GameId?: number | undefined
  Group?: (string | null) | undefined
  IsClosed?: (boolean | null) | undefined
  PointSpread?: (number | null) | undefined
  RoundId?: number | undefined
  Season?: number | undefined
  SeasonType?: number | undefined
  Status?: (string | null) | undefined
  TeamAId?: (number | null) | undefined
  TeamAKey?: (string | null) | undefined
  TeamAMoneyLine?: (number | null) | undefined
  TeamAName?: (string | null) | undefined
  TeamAPointSpreadPayout?: (number | null) | undefined
  TeamAScore?: (number | null) | undefined
  TeamBId?: (number | null) | undefined
  TeamBKey?: (string | null) | undefined
  TeamBMoneyLine?: (number | null) | undefined
  TeamBName?: (string | null) | undefined
  TeamBPointSpreadPayout?: (number | null) | undefined
  TeamBScore?: (number | null) | undefined
  Updated?: (string | null) | undefined
  UpdatedUtc?: (string | null) | undefined
  VenueId?: (number | null) | undefined
  VenueType?: (string | null) | undefined
  Week?: (number | null) | undefined
  Winner?: (string | null) | undefined
}
type ChampionInfo = {
  ChampionId?: number | undefined
  Name?: (string | null) | undefined
  Title?: (string | null) | undefined
}
type MatchBan = {
  Champion?: ChampionInfo | undefined
  ChampionId?: (number | null) | undefined
  MatchId?: number | undefined
  TeamId?: number | undefined
}
type Item = {
  GoldBase?: number | undefined
  GoldSell?: number | undefined
  GoldTotal?: number | undefined
  ItemId?: number | undefined
  Name?: (string | null) | undefined
}
type Spell = { Name?: (string | null) | undefined; SpellId?: number | undefined }
type PlayerMatch = {
  Assists?: (number | null) | undefined
  Champion?: ChampionInfo | undefined
  ChampionId?: (number | null) | undefined
  ChampionLevel?: (number | null) | undefined
  CombatPlayerScore?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  Deaths?: (number | null) | undefined
  DoubleKills?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  GameId?: number | undefined
  Games?: number | undefined
  GoldEarned?: (number | null) | undefined
  GoldSpent?: (number | null) | undefined
  InhibitorKills?: (number | null) | undefined
  IsClosed?: boolean | undefined
  Items?: Item[] | undefined
  KillingSpree?: (number | null) | undefined
  Kills?: (number | null) | undefined
  Lane?: (string | null) | undefined
  LargestCriticalStrike?: (number | null) | undefined
  LargestKillingSpree?: (number | null) | undefined
  LargestMultiKill?: (number | null) | undefined
  LongestTimeSpentLiving?: (number | null) | undefined
  MagicDamageDealt?: (number | null) | undefined
  MagicDamageDealtToChampions?: (number | null) | undefined
  MagicDamageTaken?: (number | null) | undefined
  MatchId?: number | undefined
  MatchName?: (string | null) | undefined
  Matches?: number | undefined
  Name?: (string | null) | undefined
  NeutralMinionsKIlled?: (number | null) | undefined
  NeutralMinionsKIlledTeamJungle?: (number | null) | undefined
  NeutralMinionsKilledEnemyJungle?: (number | null) | undefined
  ObjectivePlayerScore?: (number | null) | undefined
  Opponent?: (string | null) | undefined
  OpponentId?: number | undefined
  PentaKills?: (number | null) | undefined
  PhysicalDamageDealt?: (number | null) | undefined
  PhysicalDamageDealtToChampions?: (number | null) | undefined
  PhysicalDamageTaken?: (number | null) | undefined
  PlayerId?: number | undefined
  Position?: (string | null) | undefined
  QuadraKills?: (number | null) | undefined
  Role?: (string | null) | undefined
  SightWardsBoughtInGame?: (number | null) | undefined
  Spells?: Spell[] | undefined
  Team?: (string | null) | undefined
  TeamId?: (number | null) | undefined
  TenKillsOrAssists?: (number | null) | undefined
  TotalDamageDealt?: (number | null) | undefined
  TotalDamageDealtToChampions?: (number | null) | undefined
  TotalDamageTaken?: (number | null) | undefined
  TotalHeal?: (number | null) | undefined
  TotalMinionsKilled?: (number | null) | undefined
  TotalPlayerScore?: (number | null) | undefined
  TotalTimeCrowdControlDealt?: (number | null) | undefined
  TotalUnitsHealed?: (number | null) | undefined
  TripleKills?: (number | null) | undefined
  TrueDamageDealt?: (number | null) | undefined
  TrueDamageDealtToChampions?: (number | null) | undefined
  TrueDamageTaken?: (number | null) | undefined
  TurretKills?: (number | null) | undefined
  UnrealKills?: (number | null) | undefined
  Updated?: (string | null) | undefined
  VisionWardsBoughtInGame?: (number | null) | undefined
  WardsKilled?: (number | null) | undefined
  WardsPlaced?: (number | null) | undefined
}
type TeamMatch = {
  Assists?: (number | null) | undefined
  CombatPlayerScore?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  Deaths?: (number | null) | undefined
  DoubleKills?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FirstBaron?: (number | null) | undefined
  FirstBlood?: (number | null) | undefined
  FirstDragon?: (number | null) | undefined
  FirstInhibitor?: (number | null) | undefined
  FirstRiftHerald?: (number | null) | undefined
  FirstTower?: (number | null) | undefined
  GameId?: number | undefined
  Games?: number | undefined
  GoldEarned?: (number | null) | undefined
  GoldSpent?: (number | null) | undefined
  InhibitorKills?: (number | null) | undefined
  IsClosed?: boolean | undefined
  KillingSpree?: (number | null) | undefined
  Kills?: (number | null) | undefined
  LargestCriticalStrike?: (number | null) | undefined
  LargestKillingSpree?: (number | null) | undefined
  LargestMultiKill?: (number | null) | undefined
  LongestTimeSpentLiving?: (number | null) | undefined
  MagicDamageDealt?: (number | null) | undefined
  MagicDamageDealtToChampions?: (number | null) | undefined
  MagicDamageTaken?: (number | null) | undefined
  MatchName?: (string | null) | undefined
  Matches?: number | undefined
  Name?: (string | null) | undefined
  NeutralMinionsKIlled?: (number | null) | undefined
  NeutralMinionsKIlledTeamJungle?: (number | null) | undefined
  NeutralMinionsKilledEnemyJungle?: (number | null) | undefined
  ObjectivePlayerScore?: (number | null) | undefined
  Opponent?: (string | null) | undefined
  OpponentId?: number | undefined
  PentaKills?: (number | null) | undefined
  PhysicalDamageDealt?: (number | null) | undefined
  PhysicalDamageDealtToChampions?: (number | null) | undefined
  PhysicalDamageTaken?: (number | null) | undefined
  PlayerId?: number | undefined
  Position?: (string | null) | undefined
  QuadraKills?: (number | null) | undefined
  SightWardsBoughtInGame?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamId?: (number | null) | undefined
  TenKillsOrAssists?: (number | null) | undefined
  TotalDamageDealt?: (number | null) | undefined
  TotalDamageDealtToChampions?: (number | null) | undefined
  TotalDamageTaken?: (number | null) | undefined
  TotalHeal?: (number | null) | undefined
  TotalMinionsKilled?: (number | null) | undefined
  TotalPlayerScore?: (number | null) | undefined
  TotalTimeCrowdControlDealt?: (number | null) | undefined
  TotalUnitsHealed?: (number | null) | undefined
  TripleKills?: (number | null) | undefined
  TrueDamageDealt?: (number | null) | undefined
  TrueDamageDealtToChampions?: (number | null) | undefined
  TrueDamageTaken?: (number | null) | undefined
  TurretKills?: (number | null) | undefined
  UnrealKills?: (number | null) | undefined
  Updated?: (string | null) | undefined
  VisionWardsBoughtInGame?: (number | null) | undefined
  WardsKilled?: (number | null) | undefined
  WardsPlaced?: (number | null) | undefined
}
type Match = {
  GameId?: number | undefined
  GameVersion?: (string | null) | undefined
  MapName?: (string | null) | undefined
  MatchBans?: MatchBan[] | undefined
  Number?: number | undefined
  PlayerMatches?: PlayerMatch[] | undefined
  TeamMatches?: TeamMatch[] | undefined
  WinningTeamId?: (number | null) | undefined
}
type PlayerGame = {
  Assists?: (number | null) | undefined
  CombatPlayerScore?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  Deaths?: (number | null) | undefined
  DoubleKills?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  GameId?: number | undefined
  Games?: number | undefined
  GoldEarned?: (number | null) | undefined
  GoldSpent?: (number | null) | undefined
  InhibitorKills?: (number | null) | undefined
  IsClosed?: boolean | undefined
  KillingSpree?: (number | null) | undefined
  Kills?: (number | null) | undefined
  LargestCriticalStrike?: (number | null) | undefined
  LargestKillingSpree?: (number | null) | undefined
  LargestMultiKill?: (number | null) | undefined
  LongestTimeSpentLiving?: (number | null) | undefined
  MagicDamageDealt?: (number | null) | undefined
  MagicDamageDealtToChampions?: (number | null) | undefined
  MagicDamageTaken?: (number | null) | undefined
  MatchName?: (string | null) | undefined
  Matches?: number | undefined
  Name?: (string | null) | undefined
  NeutralMinionsKIlled?: (number | null) | undefined
  NeutralMinionsKIlledTeamJungle?: (number | null) | undefined
  NeutralMinionsKilledEnemyJungle?: (number | null) | undefined
  ObjectivePlayerScore?: (number | null) | undefined
  Opponent?: (string | null) | undefined
  OpponentId?: number | undefined
  PentaKills?: (number | null) | undefined
  PhysicalDamageDealt?: (number | null) | undefined
  PhysicalDamageDealtToChampions?: (number | null) | undefined
  PhysicalDamageTaken?: (number | null) | undefined
  PlayerId?: number | undefined
  Position?: (string | null) | undefined
  QuadraKills?: (number | null) | undefined
  SightWardsBoughtInGame?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamId?: (number | null) | undefined
  TenKillsOrAssists?: (number | null) | undefined
  TotalDamageDealt?: (number | null) | undefined
  TotalDamageDealtToChampions?: (number | null) | undefined
  TotalDamageTaken?: (number | null) | undefined
  TotalHeal?: (number | null) | undefined
  TotalMinionsKilled?: (number | null) | undefined
  TotalPlayerScore?: (number | null) | undefined
  TotalTimeCrowdControlDealt?: (number | null) | undefined
  TotalUnitsHealed?: (number | null) | undefined
  TripleKills?: (number | null) | undefined
  TrueDamageDealt?: (number | null) | undefined
  TrueDamageDealtToChampions?: (number | null) | undefined
  TrueDamageTaken?: (number | null) | undefined
  TurretKills?: (number | null) | undefined
  UnrealKills?: (number | null) | undefined
  Updated?: (string | null) | undefined
  VisionWardsBoughtInGame?: (number | null) | undefined
  WardsKilled?: (number | null) | undefined
  WardsPlaced?: (number | null) | undefined
}
type TeamGame = {
  Assists?: (number | null) | undefined
  CombatPlayerScore?: (number | null) | undefined
  DateTime?: (string | null) | undefined
  Day?: (string | null) | undefined
  Deaths?: (number | null) | undefined
  DoubleKills?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FirstBaron?: (number | null) | undefined
  FirstBlood?: (number | null) | undefined
  FirstDragon?: (number | null) | undefined
  FirstInhibitor?: (number | null) | undefined
  FirstRiftHerald?: (number | null) | undefined
  FirstTower?: (number | null) | undefined
  GameId?: number | undefined
  Games?: number | undefined
  GoldEarned?: (number | null) | undefined
  GoldSpent?: (number | null) | undefined
  InhibitorKills?: (number | null) | undefined
  IsClosed?: boolean | undefined
  KillingSpree?: (number | null) | undefined
  Kills?: (number | null) | undefined
  LargestCriticalStrike?: (number | null) | undefined
  LargestKillingSpree?: (number | null) | undefined
  LargestMultiKill?: (number | null) | undefined
  LongestTimeSpentLiving?: (number | null) | undefined
  MagicDamageDealt?: (number | null) | undefined
  MagicDamageDealtToChampions?: (number | null) | undefined
  MagicDamageTaken?: (number | null) | undefined
  MatchName?: (string | null) | undefined
  Matches?: number | undefined
  Name?: (string | null) | undefined
  NeutralMinionsKIlled?: (number | null) | undefined
  NeutralMinionsKIlledTeamJungle?: (number | null) | undefined
  NeutralMinionsKilledEnemyJungle?: (number | null) | undefined
  ObjectivePlayerScore?: (number | null) | undefined
  Opponent?: (string | null) | undefined
  OpponentId?: number | undefined
  PentaKills?: (number | null) | undefined
  PhysicalDamageDealt?: (number | null) | undefined
  PhysicalDamageDealtToChampions?: (number | null) | undefined
  PhysicalDamageTaken?: (number | null) | undefined
  PlayerId?: number | undefined
  Position?: (string | null) | undefined
  QuadraKills?: (number | null) | undefined
  SightWardsBoughtInGame?: (number | null) | undefined
  Team?: (string | null) | undefined
  TeamId?: (number | null) | undefined
  TenKillsOrAssists?: (number | null) | undefined
  TotalDamageDealt?: (number | null) | undefined
  TotalDamageDealtToChampions?: (number | null) | undefined
  TotalDamageTaken?: (number | null) | undefined
  TotalHeal?: (number | null) | undefined
  TotalMinionsKilled?: (number | null) | undefined
  TotalPlayerScore?: (number | null) | undefined
  TotalTimeCrowdControlDealt?: (number | null) | undefined
  TotalUnitsHealed?: (number | null) | undefined
  TripleKills?: (number | null) | undefined
  TrueDamageDealt?: (number | null) | undefined
  TrueDamageDealtToChampions?: (number | null) | undefined
  TrueDamageTaken?: (number | null) | undefined
  TurretKills?: (number | null) | undefined
  UnrealKills?: (number | null) | undefined
  Updated?: (string | null) | undefined
  VisionWardsBoughtInGame?: (number | null) | undefined
  WardsKilled?: (number | null) | undefined
  WardsPlaced?: (number | null) | undefined
}
type BoxScore = {
  Game?: Game | undefined
  Matches?: Match[] | undefined
  PlayerGames?: PlayerGame[] | undefined
  TeamGames?: TeamGame[] | undefined
}
type Champion = {
  Armor?: number | undefined
  ArmorPerLevel?: number | undefined
  Attack?: number | undefined
  AttackDamage?: number | undefined
  AttackDamagePerLevel?: number | undefined
  AttackRange?: number | undefined
  AttackSpeedOffset?: number | undefined
  ChampionId?: number | undefined
  Defense?: number | undefined
  Difficulty?: number | undefined
  Hp?: number | undefined
  HpRegen?: number | undefined
  HpRegenPerLevel?: number | undefined
  HpUpPerLevel?: number | undefined
  Magic?: number | undefined
  MoveSpeed?: number | undefined
  Mp?: number | undefined
  MpRegen?: number | undefined
  MpRegenPerLevel?: number | undefined
  MpUpPerLevel?: number | undefined
  Name?: (string | null) | undefined
  SpellBlock?: number | undefined
  SpellBlockPerLevel?: number | undefined
  Title?: (string | null) | undefined
}
type Round = {
  CurrentRound?: boolean | undefined
  CurrentWeek?: (number | null) | undefined
  EndDate?: (string | null) | undefined
  Name?: (string | null) | undefined
  RoundId?: number | undefined
  Season?: number | undefined
  SeasonId?: number | undefined
  SeasonType?: number | undefined
  StartDate?: (string | null) | undefined
  Type?: (string | null) | undefined
}
type Season = {
  CompetitionId?: number | undefined
  CompetitionName?: (string | null) | undefined
  CurrentSeason?: boolean | undefined
  EndDate?: (string | null) | undefined
  Name?: (string | null) | undefined
  Rounds?: Round[] | undefined
  Season?: number | undefined
  SeasonId?: number | undefined
  StartDate?: (string | null) | undefined
}
type Player = {
  BirthCity?: (string | null) | undefined
  BirthCountry?: (string | null) | undefined
  BirthDate?: (string | null) | undefined
  CommonName?: (string | null) | undefined
  FirstName?: (string | null) | undefined
  Gender?: (string | null) | undefined
  LastName?: (string | null) | undefined
  MatchName?: (string | null) | undefined
  Nationality?: (string | null) | undefined
  PlayerId?: number | undefined
  Position?: (string | null) | undefined
  Updated?: (string | null) | undefined
}
type TeamDetail = {
  Active?: boolean | undefined
  AreaId?: (number | null) | undefined
  AreaName?: (string | null) | undefined
  Email?: (string | null) | undefined
  Facebook?: (string | null) | undefined
  Founded?: (number | null) | undefined
  Gender?: (string | null) | undefined
  Instagram?: (string | null) | undefined
  Key?: (string | null) | undefined
  Name?: (string | null) | undefined
  Players?: Player[] | undefined
  PrimaryColor?: (string | null) | undefined
  QuaternaryColor?: (string | null) | undefined
  SecondaryColor?: (string | null) | undefined
  ShortName?: (string | null) | undefined
  TeamId?: number | undefined
  TertiaryColor?: (string | null) | undefined
  Twitter?: (string | null) | undefined
  Type?: (string | null) | undefined
  Website?: (string | null) | undefined
  YouTube?: (string | null) | undefined
}
type CompetitionDetail = {
  AreaId?: number | undefined
  AreaName?: (string | null) | undefined
  CompetitionId?: number | undefined
  CurrentSeason?: Season | undefined
  Format?: (string | null) | undefined
  Games?: Game[] | undefined
  Gender?: (string | null) | undefined
  Name?: (string | null) | undefined
  PlayerStatsCoverage?: (boolean | null) | undefined
  Seasons?: Season[] | undefined
  Teams?: TeamDetail[] | undefined
  Type?: (string | null) | undefined
}
type Competition = {
  AreaId?: number | undefined
  AreaName?: (string | null) | undefined
  CompetitionId?: number | undefined
  Format?: (string | null) | undefined
  Gender?: (string | null) | undefined
  Name?: (string | null) | undefined
  PlayerStatsCoverage?: (boolean | null) | undefined
  Seasons?: Season[] | undefined
  Type?: (string | null) | undefined
}
type Team = {
  Active?: boolean | undefined
  AreaId?: (number | null) | undefined
  AreaName?: (string | null) | undefined
  Email?: (string | null) | undefined
  Facebook?: (string | null) | undefined
  Founded?: (number | null) | undefined
  Gender?: (string | null) | undefined
  Instagram?: (string | null) | undefined
  Key?: (string | null) | undefined
  Name?: (string | null) | undefined
  PrimaryColor?: (string | null) | undefined
  QuaternaryColor?: (string | null) | undefined
  SecondaryColor?: (string | null) | undefined
  ShortName?: (string | null) | undefined
  TeamId?: number | undefined
  TertiaryColor?: (string | null) | undefined
  Twitter?: (string | null) | undefined
  Type?: (string | null) | undefined
  Website?: (string | null) | undefined
  YouTube?: (string | null) | undefined
}
type SeasonTeam = {
  Active?: boolean | undefined
  Gender?: (string | null) | undefined
  SeasonId?: number | undefined
  SeasonTeamId?: number | undefined
  Team?: Team | undefined
  TeamId?: number | undefined
  TeamName?: (string | null) | undefined
  Type?: (string | null) | undefined
}
type Standing = {
  Games?: number | undefined
  Group?: (string | null) | undefined
  Losses?: number | undefined
  Name?: (string | null) | undefined
  Order?: (number | null) | undefined
  Points?: number | undefined
  RoundId?: number | undefined
  ScoreAgainst?: number | undefined
  ScoreDifference?: number | undefined
  ScoreFor?: number | undefined
  StandingId?: number | undefined
  TeamId?: number | undefined
  Wins?: number | undefined
}
type Venue = {
  Address?: (string | null) | undefined
  Capacity?: (number | null) | undefined
  City?: (string | null) | undefined
  Country?: (string | null) | undefined
  GeoLat?: (number | null) | undefined
  GeoLong?: (number | null) | undefined
  Name?: (string | null) | undefined
  Nickname1?: (string | null) | undefined
  Nickname2?: (string | null) | undefined
  Open?: boolean | undefined
  Opened?: (number | null) | undefined
  VenueId?: number | undefined
  Zip?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:format/ActiveMemberships': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Membership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Areas': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Area[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/BoxScore/:gameid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; gameid: string } }
        output: BoxScore[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/BoxScores/:date': {
      $get: {
        input: { param: { format: 'xml' | 'json'; date: string } }
        output: BoxScore[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Champions': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Champion[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/CompetitionDetails/:competitionid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; competitionid: string } }
        output: CompetitionDetail
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Competitions': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Competition[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/GamesByDate/:date': {
      $get: {
        input: { param: { format: 'xml' | 'json'; date: string } }
        output: Game[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/HistoricalMemberships': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Membership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/HistoricalMembershipsByTeam/:teamid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; teamid: string } }
        output: Membership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Items': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Item[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/MembershipsByTeam/:teamid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; teamid: string } }
        output: Membership[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Player/:playerid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; playerid: string } }
        output: Player
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Players': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Player[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayersByTeam/:teamid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; teamid: string } }
        output: Player[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Schedule/:roundid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; roundid: string } }
        output: Game[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/SeasonTeams/:seasonid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; seasonid: string } }
        output: SeasonTeam[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Spells': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Spell[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Standings/:roundid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; roundid: string } }
        output: Standing[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Teams': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Team[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Venues': {
      $get: {
        input: { param: { format: 'xml' | 'json' } }
        output: Venue[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
