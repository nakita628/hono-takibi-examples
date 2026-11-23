type Season = {
  Description?: (string | null) | undefined
  EndDate?: (string | null) | undefined
  SeasonID?: number | undefined
  StartDate?: (string | null) | undefined
}
type DfsSlatePlayer = {
  OperatorPlayerID?: (string | null) | undefined
  OperatorPlayerName?: (string | null) | undefined
  OperatorPosition?: (string | null) | undefined
  OperatorRosterSlots?: (string | null)[] | undefined
  OperatorSalary?: (number | null) | undefined
  OperatorSlatePlayerID?: (string | null) | undefined
  PlayerID?: (number | null) | undefined
  PlayerTournamentProjectionID?: (number | null) | undefined
  RemovedByOperator?: (boolean | null) | undefined
  SlateID?: number | undefined
  SlatePlayerID?: number | undefined
  SlateTournamentID?: (number | null) | undefined
}
type Round = {
  Day?: (string | null) | undefined
  Number?: (number | null) | undefined
  RoundID?: number | undefined
  TournamentID?: number | undefined
}
type Tournament = {
  Canceled?: (boolean | null) | undefined
  City?: (string | null) | undefined
  Country?: (string | null) | undefined
  Covered?: (boolean | null) | undefined
  EndDate?: (string | null) | undefined
  Format?: (string | null) | undefined
  IsInProgress?: boolean | undefined
  IsOver?: boolean | undefined
  Location?: (string | null) | undefined
  Name?: (string | null) | undefined
  Par?: (number | null) | undefined
  Purse?: (number | null) | undefined
  Rounds?: Round[] | undefined
  SportRadarTournamentID?: (string | null) | undefined
  StartDate?: (string | null) | undefined
  StartDateTime?: (string | null) | undefined
  State?: (string | null) | undefined
  TimeZone?: (string | null) | undefined
  TournamentID?: number | undefined
  Venue?: (string | null) | undefined
  Yards?: (number | null) | undefined
  ZipCode?: (string | null) | undefined
}
type DfsSlateTournament = {
  OperatorTournamentID?: (number | null) | undefined
  RemovedByOperator?: (boolean | null) | undefined
  SlateID?: number | undefined
  SlateTournamentID?: number | undefined
  Tournament?: Tournament | undefined
  TournamentID?: (number | null) | undefined
}
type DfsSlate = {
  DfsSlatePlayers?: DfsSlatePlayer[] | undefined
  DfsSlateTournaments?: DfsSlateTournament[] | undefined
  IsMultiDaySlate?: (boolean | null) | undefined
  NumberOfTournaments?: (number | null) | undefined
  Operator?: (string | null) | undefined
  OperatorDay?: (string | null) | undefined
  OperatorGameType?: (string | null) | undefined
  OperatorName?: (string | null) | undefined
  OperatorSlateID?: (number | null) | undefined
  OperatorStartTime?: (string | null) | undefined
  RemovedByOperator?: (boolean | null) | undefined
  SlateID?: number | undefined
  SlateRosterSlots?: (string | null)[] | undefined
}
type Injury = {
  Active?: boolean | undefined
  BodyPart?: (string | null) | undefined
  ExpectedReturn?: (string | null) | undefined
  InjuryID?: number | undefined
  Name?: (string | null) | undefined
  PlayerID?: number | undefined
  StartDate?: (string | null) | undefined
  Status?: (string | null) | undefined
}
type PlayerHole = {
  Birdie?: boolean | undefined
  Bogey?: boolean | undefined
  DoubleBogey?: boolean | undefined
  DoubleEagle?: boolean | undefined
  Eagle?: boolean | undefined
  HoleInOne?: boolean | undefined
  IsPar?: boolean | undefined
  Number?: (number | null) | undefined
  Par?: (number | null) | undefined
  PlayerRoundID?: number | undefined
  Score?: (number | null) | undefined
  ToPar?: (number | null) | undefined
  WorseThanDoubleBogey?: boolean | undefined
}
type PlayerRound = {
  BackNineStart?: (boolean | null) | undefined
  Birdies?: (number | null) | undefined
  BogeyFree?: boolean | undefined
  Bogeys?: (number | null) | undefined
  BounceBackCount?: (number | null) | undefined
  ConsecutiveBirdieOrBetterCount?: (number | null) | undefined
  Day?: (string | null) | undefined
  DoubleBogeys?: (number | null) | undefined
  DoubleEagles?: (number | null) | undefined
  Eagles?: (number | null) | undefined
  HoleInOnes?: (number | null) | undefined
  Holes?: PlayerHole[] | undefined
  IncludesFiveOrMoreBirdiesOrBetter?: boolean | undefined
  IncludesStreakOfFiveBirdiesOrBetter?: boolean | undefined
  IncludesStreakOfFourBirdiesOrBetter?: boolean | undefined
  IncludesStreakOfSixBirdiesOrBetter?: boolean | undefined
  IncludesStreakOfThreeBirdiesOrBetter?: boolean | undefined
  LongestBirdieOrBetterStreak?: (number | null) | undefined
  Number?: (number | null) | undefined
  Par?: (number | null) | undefined
  Pars?: (number | null) | undefined
  PlayerRoundID?: number | undefined
  PlayerTournamentID?: number | undefined
  Score?: (number | null) | undefined
  TeeTime?: (string | null) | undefined
  TripleBogeys?: (number | null) | undefined
  WorseThanDoubleBogey?: (number | null) | undefined
  WorseThanTripleBogey?: (number | null) | undefined
}
type PlayerTournament = {
  Birdies?: (number | null) | undefined
  BogeyFreeRounds?: (number | null) | undefined
  Bogeys?: (number | null) | undefined
  BounceBackCount?: (number | null) | undefined
  ConsecutiveBirdieOrBetterCount?: (number | null) | undefined
  Country?: (string | null) | undefined
  DoubleBogeys?: (number | null) | undefined
  DoubleEagles?: (number | null) | undefined
  DraftKingsSalary?: (number | null) | undefined
  Eagles?: (number | null) | undefined
  Earnings?: (number | null) | undefined
  FanDuelSalary?: (number | null) | undefined
  FantasyDraftSalary?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsFantasyDraft?: (number | null) | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  FedExPoints?: (number | null) | undefined
  HoleInOnes?: (number | null) | undefined
  IsAlternate?: (boolean | null) | undefined
  IsWithdrawn?: boolean | undefined
  MadeCut?: (number | null) | undefined
  MadeCutDidNotFinish?: (boolean | null) | undefined
  Name?: (string | null) | undefined
  OddsToWin?: (number | null) | undefined
  OddsToWinDescription?: (string | null) | undefined
  Pars?: (number | null) | undefined
  PlayerID?: number | undefined
  PlayerTournamentID?: number | undefined
  Rank?: (number | null) | undefined
  Rounds?: PlayerRound[] | undefined
  RoundsUnderSeventy?: (number | null) | undefined
  RoundsWithFiveOrMoreBirdiesOrBetter?: (number | null) | undefined
  StreaksOfFiveBirdiesOrBetter?: (number | null) | undefined
  StreaksOfFourBirdiesOrBetter?: (number | null) | undefined
  StreaksOfSixBirdiesOrBetter?: (number | null) | undefined
  StreaksOfThreeBirdiesOrBetter?: (number | null) | undefined
  TeeTime?: (string | null) | undefined
  TotalScore?: (number | null) | undefined
  TotalStrokes?: (number | null) | undefined
  TotalThrough?: (number | null) | undefined
  TournamentID?: number | undefined
  TournamentStatus?: (string | null) | undefined
  TripleBogeys?: (number | null) | undefined
  Win?: (number | null) | undefined
  WorseThanDoubleBogey?: (number | null) | undefined
  WorseThanTripleBogey?: (number | null) | undefined
}
type Leaderboard = { Players?: PlayerTournament[] | undefined; Tournament?: Tournament | undefined }
type News = {
  Author?: (string | null) | undefined
  Categories?: (string | null) | undefined
  Content?: (string | null) | undefined
  NewsID?: number | undefined
  OriginalSource?: (string | null) | undefined
  OriginalSourceUrl?: (string | null) | undefined
  PlayerID?: (number | null) | undefined
  Source?: (string | null) | undefined
  TermsOfUse?: (string | null) | undefined
  Title?: (string | null) | undefined
  Updated?: (string | null) | undefined
  Url?: (string | null) | undefined
}
type Player = {
  BirthCity?: (string | null) | undefined
  BirthDate?: (string | null) | undefined
  BirthState?: (string | null) | undefined
  College?: (string | null) | undefined
  Country?: (string | null) | undefined
  DraftKingsName?: (string | null) | undefined
  DraftKingsPlayerID?: (number | null) | undefined
  FanDuelName?: (string | null) | undefined
  FanDuelPlayerID?: (number | null) | undefined
  FantasyAlarmPlayerID?: (number | null) | undefined
  FantasyDraftName?: (string | null) | undefined
  FantasyDraftPlayerID?: (number | null) | undefined
  FirstName?: (string | null) | undefined
  LastName?: (string | null) | undefined
  PgaDebut?: (number | null) | undefined
  PgaTourPlayerID?: (number | null) | undefined
  PhotoUrl?: (string | null) | undefined
  PlayerID?: number | undefined
  RotoWirePlayerID?: (number | null) | undefined
  RotoworldPlayerID?: (number | null) | undefined
  SportRadarPlayerID?: (string | null) | undefined
  Swings?: (string | null) | undefined
  Weight?: (number | null) | undefined
  YahooPlayerID?: (number | null) | undefined
}
type PlayerSeason = {
  AveragePoints?: (number | null) | undefined
  Events?: (number | null) | undefined
  Name?: (string | null) | undefined
  PlayerID?: number | undefined
  PlayerSeasonID?: number | undefined
  PointsGained?: (number | null) | undefined
  PointsLost?: (number | null) | undefined
  Season?: number | undefined
  TotalPoints?: (number | null) | undefined
  WorldGolfRank?: (number | null) | undefined
  WorldGolfRankLastWeek?: (number | null) | undefined
}
type PlayerTournamentProjection = {
  Birdies?: (number | null) | undefined
  BogeyFreeRounds?: (number | null) | undefined
  Bogeys?: (number | null) | undefined
  BounceBackCount?: (number | null) | undefined
  ConsecutiveBirdieOrBetterCount?: (number | null) | undefined
  Country?: (string | null) | undefined
  DoubleBogeys?: (number | null) | undefined
  DoubleEagles?: (number | null) | undefined
  DraftKingsSalary?: (number | null) | undefined
  Eagles?: (number | null) | undefined
  Earnings?: (number | null) | undefined
  FanDuelSalary?: (number | null) | undefined
  FantasyDraftSalary?: (number | null) | undefined
  FantasyPoints?: (number | null) | undefined
  FantasyPointsDraftKings?: (number | null) | undefined
  FantasyPointsFanDuel?: (number | null) | undefined
  FantasyPointsFantasyDraft?: (number | null) | undefined
  FantasyPointsYahoo?: (number | null) | undefined
  FedExPoints?: (number | null) | undefined
  HoleInOnes?: (number | null) | undefined
  IsAlternate?: (boolean | null) | undefined
  IsWithdrawn?: boolean | undefined
  MadeCut?: (number | null) | undefined
  MadeCutDidNotFinish?: (boolean | null) | undefined
  Name?: (string | null) | undefined
  OddsToWin?: (number | null) | undefined
  OddsToWinDescription?: (string | null) | undefined
  Pars?: (number | null) | undefined
  PlayerID?: number | undefined
  PlayerTournamentID?: number | undefined
  Rank?: (number | null) | undefined
  Rounds?: PlayerRound[] | undefined
  RoundsUnderSeventy?: (number | null) | undefined
  RoundsWithFiveOrMoreBirdiesOrBetter?: (number | null) | undefined
  StreaksOfFiveBirdiesOrBetter?: (number | null) | undefined
  StreaksOfFourBirdiesOrBetter?: (number | null) | undefined
  StreaksOfSixBirdiesOrBetter?: (number | null) | undefined
  StreaksOfThreeBirdiesOrBetter?: (number | null) | undefined
  TeeTime?: (string | null) | undefined
  TotalScore?: (number | null) | undefined
  TotalStrokes?: (number | null) | undefined
  TotalThrough?: (number | null) | undefined
  TournamentID?: number | undefined
  TournamentStatus?: (string | null) | undefined
  TripleBogeys?: (number | null) | undefined
  Win?: (number | null) | undefined
  WorseThanDoubleBogey?: (number | null) | undefined
  WorseThanTripleBogey?: (number | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:format/CurrentSeason': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: Season
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/DfsSlatesByTournament/:tournamentid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; tournamentid: string } }
        output: DfsSlate[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Injuries': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: Injury[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/InjuriesByHistorical': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: Injury[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Leaderboard/:tournamentid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; tournamentid: string } }
        output: Leaderboard
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/News': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: News[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/NewsByDate/:date': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; date: string } }
        output: News[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/NewsByPlayerID/:playerid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; playerid: string } }
        output: News[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Player/:playerid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; playerid: string } }
        output: Player
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerSeasonStats/:season': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string } }
        output: PlayerSeason[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerTournamentProjectionStats/:tournamentid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; tournamentid: string } }
        output: PlayerTournamentProjection[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerTournamentStatsByPlayer/:tournamentid/:playerid': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; tournamentid: string; playerid: string } }
        output: PlayerTournament
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Players': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: Player[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Tournaments': {
      $get: {
        input: { param: { format: 'XML' | 'JSON' } }
        output: Tournament[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/Tournaments/:season': {
      $get: {
        input: { param: { format: 'XML' | 'JSON'; season: string } }
        output: Tournament[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
