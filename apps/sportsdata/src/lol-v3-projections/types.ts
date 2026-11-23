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
type DfsSlateGame = {
  Game?: Game | undefined
  GameID?: (number | null) | undefined
  OperatorGameID?: (number | null) | undefined
  RemovedByOperator?: (boolean | null) | undefined
  SlateGameID?: number | undefined
  SlateID?: number | undefined
}
type DfsSlatePlayer = {
  OperatorPlayerID?: (string | null) | undefined
  OperatorPlayerName?: (string | null) | undefined
  OperatorPosition?: (string | null) | undefined
  OperatorRosterSlots?: (string | null)[] | undefined
  OperatorSalary?: (number | null) | undefined
  OperatorSlatePlayerID?: (string | null) | undefined
  PlayerGameProjectionStatID?: (number | null) | undefined
  PlayerID?: (number | null) | undefined
  RemovedByOperator?: (boolean | null) | undefined
  SlateGameID?: (number | null) | undefined
  SlateID?: number | undefined
  SlatePlayerID?: number | undefined
  Team?: (string | null) | undefined
  TeamID?: (number | null) | undefined
}
type DfsSlate = {
  DfsSlateGames?: DfsSlateGame[] | undefined
  DfsSlatePlayers?: DfsSlatePlayer[] | undefined
  IsMultiDaySlate?: (boolean | null) | undefined
  NumberOfGames?: (number | null) | undefined
  Operator?: (string | null) | undefined
  OperatorDay?: (string | null) | undefined
  OperatorGameType?: (string | null) | undefined
  OperatorName?: (string | null) | undefined
  OperatorSlateID?: (number | null) | undefined
  OperatorStartTime?: (string | null) | undefined
  RemovedByOperator?: (boolean | null) | undefined
  SalaryCap?: (number | null) | undefined
  SlateID?: number | undefined
  SlateRosterSlots?: (string | null)[] | undefined
  VideoGameId?: (number | null) | undefined
}
type PlayerGameProjection = {
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
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:format/DfsSlatesByDate/:date': {
      $get: {
        input: { param: { format: 'json' | 'xml'; date: string } }
        output: DfsSlate[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameProjectionStatsByDate/:date': {
      $get: {
        input: { param: { format: 'xml' | 'json'; date: string } }
        output: PlayerGameProjection[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:format/PlayerGameProjectionStatsByPlayer/:date/:playerid': {
      $get: {
        input: { param: { format: 'xml' | 'json'; date: string; playerid: string } }
        output: PlayerGameProjection[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
