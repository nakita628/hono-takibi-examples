import { createRoute, z } from '@hono/zod-openapi'

const PlayerDefenseSchema = z
  .object({
    AssistedTackles: z.int().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.int().exactOptional(),
    FumblesForced: z.int().exactOptional(),
    FumblesRecovered: z.int().exactOptional(),
    InterceptionReturnTouchdowns: z.int().exactOptional(),
    InterceptionReturnYards: z.int().exactOptional(),
    Interceptions: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    PassesDefended: z.int().exactOptional(),
    PlayerGameID: z.int().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    QuarterbackHits: z.int().exactOptional(),
    SackYards: z.int().exactOptional(),
    Sacks: z.number().exactOptional(),
    Safeties: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    SoloTackles: z.int().exactOptional(),
    Tackles: z.int().exactOptional(),
    TacklesForLoss: z.int().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerDefense')

const ScoringDetailSchema = z
  .object({
    GameKey: z.string().nullable().exactOptional(),
    Length: z.int().exactOptional(),
    PlayerGameID: z.int().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    ScoreID: z.int().nullable().exactOptional(),
    ScoringDetailID: z.int().exactOptional(),
    ScoringPlayID: z.int().nullable().exactOptional(),
    ScoringType: z.string().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    Week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScoringDetail')

const FantasyDefenseGameSchema = z
  .object({
    AssistedTackles: z.number().exactOptional(),
    BlockedKickReturnTouchdowns: z.number().nullable().exactOptional(),
    BlockedKickReturnYards: z.number().nullable().exactOptional(),
    BlockedKicks: z.number().exactOptional(),
    Date: z.string().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DefensiveTouchdowns: z.number().nullable().exactOptional(),
    DraftKingsFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsKickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsPosition: z.string().nullable().exactOptional(),
    DraftKingsQuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsRunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    DraftKingsTightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsWideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelKickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelPosition: z.string().nullable().exactOptional(),
    FanDuelQuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelRunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelSalary: z.int().nullable().exactOptional(),
    FanDuelTightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelWideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDataSalary: z.int().nullable().exactOptional(),
    FantasyDefenseID: z.int().nullable().exactOptional(),
    FantasyDraftFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftKickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftPosition: z.string().nullable().exactOptional(),
    FantasyDraftQuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftRunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftSalary: z.int().nullable().exactOptional(),
    FantasyDraftTightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftWideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FieldGoalReturnTouchdowns: z.number().nullable().exactOptional(),
    FieldGoalReturnYards: z.number().nullable().exactOptional(),
    FourthDownAttempts: z.number().nullable().exactOptional(),
    FourthDownConversions: z.number().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.number().exactOptional(),
    FumbleReturnYards: z.number().exactOptional(),
    FumblesForced: z.number().exactOptional(),
    FumblesRecovered: z.number().exactOptional(),
    GameKey: z.string().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalOpponentID: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    Humidity: z.int().nullable().exactOptional(),
    InterceptionReturnTouchdowns: z.number().exactOptional(),
    InterceptionReturnYards: z.number().exactOptional(),
    Interceptions: z.number().exactOptional(),
    IsGameOver: z.boolean().nullable().exactOptional(),
    KickReturnLong: z.number().exactOptional(),
    KickReturnTouchdowns: z.number().exactOptional(),
    KickReturnYards: z.number().exactOptional(),
    KickReturns: z.number().exactOptional(),
    KickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    OffensiveYardsAllowed: z.number().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    OpponentPositionRank: z.int().nullable().exactOptional(),
    OpponentRank: z.int().nullable().exactOptional(),
    PassesDefended: z.number().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PointsAllowed: z.number().exactOptional(),
    PointsAllowedByDefenseSpecialTeams: z.number().nullable().exactOptional(),
    PuntReturnLong: z.number().exactOptional(),
    PuntReturnTouchdowns: z.number().exactOptional(),
    PuntReturnYards: z.number().exactOptional(),
    PuntReturns: z.number().exactOptional(),
    QuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    QuarterbackHits: z.number().nullable().exactOptional(),
    RunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    SackYards: z.number().exactOptional(),
    Sacks: z.number().exactOptional(),
    Safeties: z.number().exactOptional(),
    ScoreID: z.int().exactOptional(),
    ScoringDetails: z.array(ScoringDetailSchema).exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    SoloTackles: z.number().exactOptional(),
    SpecialTeamsTouchdowns: z.number().nullable().exactOptional(),
    Stadium: z.string().nullable().exactOptional(),
    TacklesForLoss: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Temperature: z.int().nullable().exactOptional(),
    ThirdDownAttempts: z.number().nullable().exactOptional(),
    ThirdDownConversions: z.number().nullable().exactOptional(),
    TightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    TouchdownsScored: z.number().exactOptional(),
    TwoPointConversionReturns: z.number().nullable().exactOptional(),
    VictivSalary: z.int().nullable().exactOptional(),
    Week: z.int().nullable().exactOptional(),
    WideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
    WindSpeed: z.int().nullable().exactOptional(),
    YahooFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooKickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooPosition: z.string().nullable().exactOptional(),
    YahooQuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooRunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooSalary: z.int().nullable().exactOptional(),
    YahooTightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooWideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FantasyDefenseGame')

const PlayerKickPuntReturnsSchema = z
  .object({
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    FumblesLost: z.int().exactOptional(),
    KickReturnLong: z.int().exactOptional(),
    KickReturnTouchdowns: z.int().exactOptional(),
    KickReturnYards: z.int().exactOptional(),
    KickReturnYardsPerAttempt: z.number().exactOptional(),
    KickReturns: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    PlayerGameID: z.int().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    PuntReturnLong: z.int().exactOptional(),
    PuntReturnTouchdowns: z.int().exactOptional(),
    PuntReturnYards: z.int().exactOptional(),
    PuntReturnYardsPerAttempt: z.number().exactOptional(),
    PuntReturns: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerKickPuntReturns')

const PlayerKickingSchema = z
  .object({
    ExtraPointsAttempted: z.int().exactOptional(),
    ExtraPointsMade: z.int().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    FieldGoalPercentage: z.number().exactOptional(),
    FieldGoalsAttempted: z.int().exactOptional(),
    FieldGoalsLongestMade: z.int().exactOptional(),
    FieldGoalsMade: z.int().exactOptional(),
    FieldGoalsMade0to19: z.int().exactOptional(),
    FieldGoalsMade20to29: z.int().exactOptional(),
    FieldGoalsMade30to39: z.int().exactOptional(),
    FieldGoalsMade40to49: z.int().exactOptional(),
    FieldGoalsMade50Plus: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    PlayerGameID: z.int().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerKicking')

const PlayerPassingSchema = z
  .object({
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    FumblesLost: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    PassingAttempts: z.int().exactOptional(),
    PassingCompletionPercentage: z.number().exactOptional(),
    PassingCompletions: z.int().exactOptional(),
    PassingInterceptions: z.int().exactOptional(),
    PassingLong: z.int().exactOptional(),
    PassingRating: z.number().exactOptional(),
    PassingSackYards: z.int().exactOptional(),
    PassingSacks: z.int().exactOptional(),
    PassingTouchdowns: z.int().exactOptional(),
    PassingYards: z.int().exactOptional(),
    PassingYardsPerAttempt: z.number().exactOptional(),
    PassingYardsPerCompletion: z.number().exactOptional(),
    PlayerGameID: z.int().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TwoPointConversionPasses: z.int().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerPassing')

const PlayerPuntingSchema = z
  .object({
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    PlayerGameID: z.int().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    PuntAverage: z.number().exactOptional(),
    PuntInside20: z.int().exactOptional(),
    PuntTouchbacks: z.int().exactOptional(),
    PuntYards: z.int().exactOptional(),
    Punts: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerPunting')

const PlayerReceivingSchema = z
  .object({
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    FumblesLost: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    PlayerGameID: z.int().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    ReceivingLong: z.int().exactOptional(),
    ReceivingTargets: z.int().exactOptional(),
    ReceivingTouchdowns: z.int().exactOptional(),
    ReceivingYards: z.int().exactOptional(),
    ReceivingYardsPerReception: z.number().exactOptional(),
    ReceivingYardsPerTarget: z.number().exactOptional(),
    ReceptionPercentage: z.number().exactOptional(),
    Receptions: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TwoPointConversionReceptions: z.int().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerReceiving')

const PlayerRushingSchema = z
  .object({
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    FumblesLost: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    PlayerGameID: z.int().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    RushingAttempts: z.int().exactOptional(),
    RushingLong: z.int().exactOptional(),
    RushingTouchdowns: z.int().exactOptional(),
    RushingYards: z.int().exactOptional(),
    RushingYardsPerAttempt: z.number().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TwoPointConversionRuns: z.int().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerRushing')

const StadiumSchema = z
  .object({
    Capacity: z.int().nullable().exactOptional(),
    City: z.string().nullable().exactOptional(),
    Country: z.string().nullable().exactOptional(),
    GeoLat: z.number().nullable().exactOptional(),
    GeoLong: z.number().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PlayingSurface: z.string().nullable().exactOptional(),
    StadiumID: z.int().exactOptional(),
    State: z.string().nullable().exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Stadium')

const GameSchema = z
  .object({
    AwayAssistedTackles: z.int().nullable().exactOptional(),
    AwayBlockedKickReturnTouchdowns: z.int().nullable().exactOptional(),
    AwayBlockedKickReturnYards: z.int().nullable().exactOptional(),
    AwayBlockedKicks: z.int().nullable().exactOptional(),
    AwayCompletionPercentage: z.number().nullable().exactOptional(),
    AwayExtraPointKickingAttempts: z.int().nullable().exactOptional(),
    AwayExtraPointKickingConversions: z.int().nullable().exactOptional(),
    AwayExtraPointPassingAttempts: z.int().nullable().exactOptional(),
    AwayExtraPointPassingConversions: z.int().nullable().exactOptional(),
    AwayExtraPointRushingAttempts: z.int().nullable().exactOptional(),
    AwayExtraPointRushingConversions: z.int().nullable().exactOptional(),
    AwayExtraPointsHadBlocked: z.int().nullable().exactOptional(),
    AwayFieldGoalAttempts: z.int().nullable().exactOptional(),
    AwayFieldGoalReturnTouchdowns: z.int().nullable().exactOptional(),
    AwayFieldGoalReturnYards: z.int().nullable().exactOptional(),
    AwayFieldGoalsHadBlocked: z.int().nullable().exactOptional(),
    AwayFieldGoalsMade: z.int().nullable().exactOptional(),
    AwayFirstDowns: z.int().nullable().exactOptional(),
    AwayFirstDownsByPassing: z.int().nullable().exactOptional(),
    AwayFirstDownsByPenalty: z.int().nullable().exactOptional(),
    AwayFirstDownsByRushing: z.int().nullable().exactOptional(),
    AwayFourthDownAttempts: z.int().nullable().exactOptional(),
    AwayFourthDownConversions: z.int().nullable().exactOptional(),
    AwayFourthDownPercentage: z.number().nullable().exactOptional(),
    AwayFumbleReturnTouchdowns: z.int().nullable().exactOptional(),
    AwayFumbleReturnYards: z.int().nullable().exactOptional(),
    AwayFumbles: z.int().nullable().exactOptional(),
    AwayFumblesForced: z.int().nullable().exactOptional(),
    AwayFumblesLost: z.int().nullable().exactOptional(),
    AwayFumblesRecovered: z.int().nullable().exactOptional(),
    AwayGiveaways: z.int().nullable().exactOptional(),
    AwayGoalToGoAttempts: z.int().nullable().exactOptional(),
    AwayGoalToGoConversions: z.int().nullable().exactOptional(),
    AwayInterceptionReturnTouchdowns: z.int().nullable().exactOptional(),
    AwayInterceptionReturnYards: z.int().nullable().exactOptional(),
    AwayInterceptionReturns: z.int().nullable().exactOptional(),
    AwayKickReturnLong: z.int().nullable().exactOptional(),
    AwayKickReturnTouchdowns: z.int().nullable().exactOptional(),
    AwayKickReturnYards: z.int().nullable().exactOptional(),
    AwayKickReturns: z.int().nullable().exactOptional(),
    AwayKickoffTouchbacks: z.int().nullable().exactOptional(),
    AwayKickoffs: z.int().nullable().exactOptional(),
    AwayKickoffsInEndZone: z.int().nullable().exactOptional(),
    AwayOffensivePlays: z.int().nullable().exactOptional(),
    AwayOffensiveYards: z.int().nullable().exactOptional(),
    AwayOffensiveYardsPerPlay: z.number().nullable().exactOptional(),
    AwayPasserRating: z.number().nullable().exactOptional(),
    AwayPassesDefended: z.int().nullable().exactOptional(),
    AwayPassingAttempts: z.int().nullable().exactOptional(),
    AwayPassingCompletions: z.int().nullable().exactOptional(),
    AwayPassingInterceptions: z.int().nullable().exactOptional(),
    AwayPassingTouchdowns: z.int().nullable().exactOptional(),
    AwayPassingYards: z.int().nullable().exactOptional(),
    AwayPassingYardsPerAttempt: z.number().nullable().exactOptional(),
    AwayPassingYardsPerCompletion: z.number().nullable().exactOptional(),
    AwayPenalties: z.int().nullable().exactOptional(),
    AwayPenaltyYards: z.int().nullable().exactOptional(),
    AwayPuntAverage: z.number().nullable().exactOptional(),
    AwayPuntNetAverage: z.number().nullable().exactOptional(),
    AwayPuntNetYards: z.int().nullable().exactOptional(),
    AwayPuntReturnLong: z.int().nullable().exactOptional(),
    AwayPuntReturnTouchdowns: z.int().nullable().exactOptional(),
    AwayPuntReturnYards: z.int().nullable().exactOptional(),
    AwayPuntReturns: z.int().nullable().exactOptional(),
    AwayPuntYards: z.int().nullable().exactOptional(),
    AwayPunts: z.int().nullable().exactOptional(),
    AwayPuntsHadBlocked: z.int().nullable().exactOptional(),
    AwayQuarterbackHits: z.int().nullable().exactOptional(),
    AwayRedZoneAttempts: z.int().nullable().exactOptional(),
    AwayRedZoneConversions: z.int().nullable().exactOptional(),
    AwayReturnYards: z.int().nullable().exactOptional(),
    AwayRushingAttempts: z.int().nullable().exactOptional(),
    AwayRushingTouchdowns: z.int().nullable().exactOptional(),
    AwayRushingYards: z.int().nullable().exactOptional(),
    AwayRushingYardsPerAttempt: z.number().nullable().exactOptional(),
    AwaySackYards: z.int().nullable().exactOptional(),
    AwaySacks: z.int().nullable().exactOptional(),
    AwaySafeties: z.int().nullable().exactOptional(),
    AwayScore: z.int().exactOptional(),
    AwayScoreOvertime: z.int().nullable().exactOptional(),
    AwayScoreQuarter1: z.int().nullable().exactOptional(),
    AwayScoreQuarter2: z.int().nullable().exactOptional(),
    AwayScoreQuarter3: z.int().nullable().exactOptional(),
    AwayScoreQuarter4: z.int().nullable().exactOptional(),
    AwaySoloTackles: z.int().nullable().exactOptional(),
    AwayTacklesForLoss: z.int().nullable().exactOptional(),
    AwayTakeaways: z.int().nullable().exactOptional(),
    AwayTeam: z.string().nullable().exactOptional(),
    AwayThirdDownAttempts: z.int().nullable().exactOptional(),
    AwayThirdDownConversions: z.int().nullable().exactOptional(),
    AwayThirdDownPercentage: z.number().nullable().exactOptional(),
    AwayTimeOfPossession: z.string().nullable().exactOptional(),
    AwayTimesSacked: z.int().nullable().exactOptional(),
    AwayTimesSackedYards: z.int().nullable().exactOptional(),
    AwayTouchdowns: z.int().nullable().exactOptional(),
    AwayTurnoverDifferential: z.int().nullable().exactOptional(),
    AwayTwoPointConversionReturns: z.int().nullable().exactOptional(),
    Date: z.string().nullable().exactOptional(),
    GameID: z.int().exactOptional(),
    GameKey: z.string().nullable().exactOptional(),
    HomeAssistedTackles: z.int().nullable().exactOptional(),
    HomeBlockedKickReturnTouchdowns: z.int().nullable().exactOptional(),
    HomeBlockedKickReturnYards: z.int().nullable().exactOptional(),
    HomeBlockedKicks: z.int().nullable().exactOptional(),
    HomeCompletionPercentage: z.number().nullable().exactOptional(),
    HomeExtraPointKickingAttempts: z.int().nullable().exactOptional(),
    HomeExtraPointKickingConversions: z.int().nullable().exactOptional(),
    HomeExtraPointPassingAttempts: z.int().nullable().exactOptional(),
    HomeExtraPointPassingConversions: z.int().nullable().exactOptional(),
    HomeExtraPointRushingAttempts: z.int().nullable().exactOptional(),
    HomeExtraPointRushingConversions: z.int().nullable().exactOptional(),
    HomeExtraPointsHadBlocked: z.int().nullable().exactOptional(),
    HomeFieldGoalAttempts: z.int().nullable().exactOptional(),
    HomeFieldGoalReturnTouchdowns: z.int().nullable().exactOptional(),
    HomeFieldGoalReturnYards: z.int().nullable().exactOptional(),
    HomeFieldGoalsHadBlocked: z.int().nullable().exactOptional(),
    HomeFieldGoalsMade: z.int().nullable().exactOptional(),
    HomeFirstDowns: z.int().nullable().exactOptional(),
    HomeFirstDownsByPassing: z.int().nullable().exactOptional(),
    HomeFirstDownsByPenalty: z.int().nullable().exactOptional(),
    HomeFirstDownsByRushing: z.int().nullable().exactOptional(),
    HomeFourthDownAttempts: z.int().nullable().exactOptional(),
    HomeFourthDownConversions: z.int().nullable().exactOptional(),
    HomeFourthDownPercentage: z.number().nullable().exactOptional(),
    HomeFumbleReturnTouchdowns: z.int().nullable().exactOptional(),
    HomeFumbleReturnYards: z.int().nullable().exactOptional(),
    HomeFumbles: z.int().nullable().exactOptional(),
    HomeFumblesForced: z.int().nullable().exactOptional(),
    HomeFumblesLost: z.int().nullable().exactOptional(),
    HomeFumblesRecovered: z.int().nullable().exactOptional(),
    HomeGiveaways: z.int().nullable().exactOptional(),
    HomeGoalToGoAttempts: z.int().nullable().exactOptional(),
    HomeGoalToGoConversions: z.int().nullable().exactOptional(),
    HomeInterceptionReturnTouchdowns: z.int().nullable().exactOptional(),
    HomeInterceptionReturnYards: z.int().nullable().exactOptional(),
    HomeInterceptionReturns: z.int().nullable().exactOptional(),
    HomeKickReturnLong: z.int().nullable().exactOptional(),
    HomeKickReturnTouchdowns: z.int().nullable().exactOptional(),
    HomeKickReturnYards: z.int().nullable().exactOptional(),
    HomeKickReturns: z.int().nullable().exactOptional(),
    HomeKickoffTouchbacks: z.int().nullable().exactOptional(),
    HomeKickoffs: z.int().nullable().exactOptional(),
    HomeKickoffsInEndZone: z.int().nullable().exactOptional(),
    HomeOffensivePlays: z.int().nullable().exactOptional(),
    HomeOffensiveYards: z.int().nullable().exactOptional(),
    HomeOffensiveYardsPerPlay: z.number().nullable().exactOptional(),
    HomePasserRating: z.number().nullable().exactOptional(),
    HomePassesDefended: z.int().nullable().exactOptional(),
    HomePassingAttempts: z.int().nullable().exactOptional(),
    HomePassingCompletions: z.int().nullable().exactOptional(),
    HomePassingInterceptions: z.int().nullable().exactOptional(),
    HomePassingTouchdowns: z.int().nullable().exactOptional(),
    HomePassingYards: z.int().nullable().exactOptional(),
    HomePassingYardsPerAttempt: z.number().nullable().exactOptional(),
    HomePassingYardsPerCompletion: z.number().nullable().exactOptional(),
    HomePenalties: z.int().nullable().exactOptional(),
    HomePenaltyYards: z.int().nullable().exactOptional(),
    HomePuntAverage: z.number().nullable().exactOptional(),
    HomePuntNetAverage: z.number().nullable().exactOptional(),
    HomePuntNetYards: z.int().nullable().exactOptional(),
    HomePuntReturnLong: z.int().nullable().exactOptional(),
    HomePuntReturnTouchdowns: z.int().nullable().exactOptional(),
    HomePuntReturnYards: z.int().nullable().exactOptional(),
    HomePuntReturns: z.int().nullable().exactOptional(),
    HomePuntYards: z.int().nullable().exactOptional(),
    HomePunts: z.int().nullable().exactOptional(),
    HomePuntsHadBlocked: z.int().nullable().exactOptional(),
    HomeQuarterbackHits: z.int().nullable().exactOptional(),
    HomeRedZoneAttempts: z.int().nullable().exactOptional(),
    HomeRedZoneConversions: z.int().nullable().exactOptional(),
    HomeReturnYards: z.int().nullable().exactOptional(),
    HomeRushingAttempts: z.int().nullable().exactOptional(),
    HomeRushingTouchdowns: z.int().nullable().exactOptional(),
    HomeRushingYards: z.int().nullable().exactOptional(),
    HomeRushingYardsPerAttempt: z.number().nullable().exactOptional(),
    HomeSackYards: z.int().nullable().exactOptional(),
    HomeSacks: z.int().nullable().exactOptional(),
    HomeSafeties: z.int().nullable().exactOptional(),
    HomeScore: z.int().exactOptional(),
    HomeScoreOvertime: z.int().nullable().exactOptional(),
    HomeScoreQuarter1: z.int().nullable().exactOptional(),
    HomeScoreQuarter2: z.int().nullable().exactOptional(),
    HomeScoreQuarter3: z.int().nullable().exactOptional(),
    HomeScoreQuarter4: z.int().nullable().exactOptional(),
    HomeSoloTackles: z.int().nullable().exactOptional(),
    HomeTacklesForLoss: z.int().nullable().exactOptional(),
    HomeTakeaways: z.int().nullable().exactOptional(),
    HomeTeam: z.string().nullable().exactOptional(),
    HomeThirdDownAttempts: z.int().nullable().exactOptional(),
    HomeThirdDownConversions: z.int().nullable().exactOptional(),
    HomeThirdDownPercentage: z.number().nullable().exactOptional(),
    HomeTimeOfPossession: z.string().nullable().exactOptional(),
    HomeTimesSacked: z.int().nullable().exactOptional(),
    HomeTimesSackedYards: z.int().nullable().exactOptional(),
    HomeTouchdowns: z.int().nullable().exactOptional(),
    HomeTurnoverDifferential: z.int().nullable().exactOptional(),
    HomeTwoPointConversionReturns: z.int().nullable().exactOptional(),
    Humidity: z.int().nullable().exactOptional(),
    IsGameOver: z.boolean().nullable().exactOptional(),
    OverUnder: z.number().nullable().exactOptional(),
    PlayingSurface: z.string().nullable().exactOptional(),
    PointSpread: z.number().nullable().exactOptional(),
    ScoreID: z.int().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Stadium: z.string().nullable().exactOptional(),
    StadiumDetails: StadiumSchema.exactOptional(),
    StadiumID: z.int().nullable().exactOptional(),
    Temperature: z.int().nullable().exactOptional(),
    TotalScore: z.int().nullable().exactOptional(),
    Week: z.int().exactOptional(),
    WindSpeed: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Game')

const ScoreSchema = z
  .object({
    Attendance: z.int().exactOptional(),
    AwayRotationNumber: z.int().nullable().exactOptional(),
    AwayScore: z.int().nullable().exactOptional(),
    AwayScoreOvertime: z.int().nullable().exactOptional(),
    AwayScoreQuarter1: z.int().nullable().exactOptional(),
    AwayScoreQuarter2: z.int().nullable().exactOptional(),
    AwayScoreQuarter3: z.int().nullable().exactOptional(),
    AwayScoreQuarter4: z.int().nullable().exactOptional(),
    AwayTeam: z.string().nullable().exactOptional(),
    AwayTeamID: z.int().nullable().exactOptional(),
    AwayTeamMoneyLine: z.int().nullable().exactOptional(),
    AwayTimeouts: z.int().nullable().exactOptional(),
    Canceled: z.boolean().nullable().exactOptional(),
    Channel: z.string().nullable().exactOptional(),
    Closed: z.boolean().nullable().exactOptional(),
    Date: z.string().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    DateTimeUTC: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    Distance: z.string().nullable().exactOptional(),
    Down: z.int().nullable().exactOptional(),
    DownAndDistance: z.string().nullable().exactOptional(),
    ForecastDescription: z.string().nullable().exactOptional(),
    ForecastTempHigh: z.int().nullable().exactOptional(),
    ForecastTempLow: z.int().nullable().exactOptional(),
    ForecastWindChill: z.int().nullable().exactOptional(),
    ForecastWindSpeed: z.int().nullable().exactOptional(),
    GameEndDateTime: z.string().nullable().exactOptional(),
    GameKey: z.string().nullable().exactOptional(),
    GeoLat: z.number().nullable().exactOptional(),
    GeoLong: z.number().nullable().exactOptional(),
    GlobalAwayTeamID: z.int().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalHomeTeamID: z.int().nullable().exactOptional(),
    Has1stQuarterStarted: z.boolean().exactOptional(),
    Has2ndQuarterStarted: z.boolean().exactOptional(),
    Has3rdQuarterStarted: z.boolean().exactOptional(),
    Has4thQuarterStarted: z.boolean().exactOptional(),
    HasStarted: z.boolean().exactOptional(),
    HomeRotationNumber: z.int().nullable().exactOptional(),
    HomeScore: z.int().nullable().exactOptional(),
    HomeScoreOvertime: z.int().nullable().exactOptional(),
    HomeScoreQuarter1: z.int().nullable().exactOptional(),
    HomeScoreQuarter2: z.int().nullable().exactOptional(),
    HomeScoreQuarter3: z.int().nullable().exactOptional(),
    HomeScoreQuarter4: z.int().nullable().exactOptional(),
    HomeTeam: z.string().nullable().exactOptional(),
    HomeTeamID: z.int().nullable().exactOptional(),
    HomeTeamMoneyLine: z.int().nullable().exactOptional(),
    HomeTimeouts: z.int().nullable().exactOptional(),
    IsInProgress: z.boolean().exactOptional(),
    IsOver: z.boolean().exactOptional(),
    IsOvertime: z.boolean().exactOptional(),
    LastPlay: z.string().nullable().exactOptional(),
    LastUpdated: z.string().nullable().exactOptional(),
    NeutralVenue: z.boolean().nullable().exactOptional(),
    OverPayout: z.int().nullable().exactOptional(),
    OverUnder: z.number().nullable().exactOptional(),
    PointSpread: z.number().nullable().exactOptional(),
    PointSpreadAwayTeamMoneyLine: z.int().nullable().exactOptional(),
    PointSpreadHomeTeamMoneyLine: z.int().nullable().exactOptional(),
    Possession: z.string().nullable().exactOptional(),
    Quarter: z.string().nullable().exactOptional(),
    QuarterDescription: z.string().nullable().exactOptional(),
    RedZone: z.string().nullable().exactOptional(),
    RefereeID: z.int().nullable().exactOptional(),
    ScoreID: z.int().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    StadiumDetails: StadiumSchema.exactOptional(),
    StadiumID: z.int().nullable().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    TimeRemaining: z.string().nullable().exactOptional(),
    UnderPayout: z.int().nullable().exactOptional(),
    Week: z.int().exactOptional(),
    YardLine: z.int().nullable().exactOptional(),
    YardLineTerritory: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Score')

const ScoringPlaySchema = z
  .object({
    AwayScore: z.int().nullable().exactOptional(),
    AwayTeam: z.string().nullable().exactOptional(),
    Date: z.string().nullable().exactOptional(),
    GameKey: z.string().nullable().exactOptional(),
    HomeScore: z.int().nullable().exactOptional(),
    HomeTeam: z.string().nullable().exactOptional(),
    PlayDescription: z.string().nullable().exactOptional(),
    Quarter: z.string().nullable().exactOptional(),
    ScoreID: z.int().exactOptional(),
    ScoringPlayID: z.int().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Sequence: z.int().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TimeRemaining: z.string().nullable().exactOptional(),
    Week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ScoringPlay')

const BoxScoreSchema = z
  .object({
    AwayDefense: z.array(PlayerDefenseSchema).exactOptional(),
    AwayFantasyDefense: FantasyDefenseGameSchema.exactOptional(),
    AwayKickPuntReturns: z.array(PlayerKickPuntReturnsSchema).exactOptional(),
    AwayKicking: z.array(PlayerKickingSchema).exactOptional(),
    AwayPassing: z.array(PlayerPassingSchema).exactOptional(),
    AwayPunting: z.array(PlayerPuntingSchema).exactOptional(),
    AwayReceiving: z.array(PlayerReceivingSchema).exactOptional(),
    AwayRushing: z.array(PlayerRushingSchema).exactOptional(),
    Game: GameSchema.exactOptional(),
    HomeDefense: z.array(PlayerDefenseSchema).exactOptional(),
    HomeFantasyDefense: FantasyDefenseGameSchema.exactOptional(),
    HomeKickPuntReturns: z.array(PlayerKickPuntReturnsSchema).exactOptional(),
    HomeKicking: z.array(PlayerKickingSchema).exactOptional(),
    HomePassing: z.array(PlayerPassingSchema).exactOptional(),
    HomePunting: z.array(PlayerPuntingSchema).exactOptional(),
    HomeReceiving: z.array(PlayerReceivingSchema).exactOptional(),
    HomeRushing: z.array(PlayerRushingSchema).exactOptional(),
    Score: ScoreSchema.exactOptional(),
    ScoringDetails: z.array(ScoringDetailSchema).exactOptional(),
    ScoringPlays: z.array(ScoringPlaySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BoxScore')

const PlayerGameSchema = z
  .object({
    Activated: z.int().exactOptional(),
    AssistedTackles: z.number().exactOptional(),
    BlockedKickReturnTouchdowns: z.number().nullable().exactOptional(),
    BlockedKickReturnYards: z.number().nullable().exactOptional(),
    BlockedKicks: z.number().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DeclaredInactive: z.boolean().exactOptional(),
    DefensiveSnapsPlayed: z.int().nullable().exactOptional(),
    DefensiveTeamSnaps: z.int().nullable().exactOptional(),
    DefensiveTouchdowns: z.number().exactOptional(),
    DraftKingsPosition: z.string().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    ExtraPointsAttempted: z.number().nullable().exactOptional(),
    ExtraPointsHadBlocked: z.number().nullable().exactOptional(),
    ExtraPointsMade: z.number().exactOptional(),
    FanDuelPosition: z.string().nullable().exactOptional(),
    FanDuelSalary: z.int().nullable().exactOptional(),
    FantasyDataSalary: z.int().nullable().exactOptional(),
    FantasyDraftPosition: z.string().nullable().exactOptional(),
    FantasyDraftSalary: z.int().nullable().exactOptional(),
    FantasyPoints: z.number().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsPPR: z.number().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    FieldGoalPercentage: z.number().exactOptional(),
    FieldGoalReturnTouchdowns: z.number().nullable().exactOptional(),
    FieldGoalReturnYards: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.number().exactOptional(),
    FieldGoalsHadBlocked: z.number().nullable().exactOptional(),
    FieldGoalsLongestMade: z.number().exactOptional(),
    FieldGoalsMade: z.number().exactOptional(),
    FieldGoalsMade0to19: z.number().nullable().exactOptional(),
    FieldGoalsMade20to29: z.number().nullable().exactOptional(),
    FieldGoalsMade30to39: z.number().nullable().exactOptional(),
    FieldGoalsMade40to49: z.number().nullable().exactOptional(),
    FieldGoalsMade50Plus: z.number().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.number().exactOptional(),
    FumbleReturnYards: z.number().exactOptional(),
    Fumbles: z.number().exactOptional(),
    FumblesForced: z.number().exactOptional(),
    FumblesLost: z.number().nullable().exactOptional(),
    FumblesOutOfBounds: z.number().nullable().exactOptional(),
    FumblesOwnRecoveries: z.number().nullable().exactOptional(),
    FumblesRecovered: z.number().exactOptional(),
    GameDate: z.string().nullable().exactOptional(),
    GameKey: z.string().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalOpponentID: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    Humidity: z.int().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryPractice: z.string().nullable().exactOptional(),
    InjuryPracticeDescription: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    InterceptionReturnTouchdowns: z.number().exactOptional(),
    InterceptionReturnYards: z.number().exactOptional(),
    Interceptions: z.number().exactOptional(),
    IsGameOver: z.boolean().nullable().exactOptional(),
    KickReturnFairCatches: z.number().nullable().exactOptional(),
    KickReturnLong: z.number().exactOptional(),
    KickReturnTouchdowns: z.number().exactOptional(),
    KickReturnYards: z.number().exactOptional(),
    KickReturnYardsPerAttempt: z.number().exactOptional(),
    KickReturns: z.number().exactOptional(),
    MiscAssistedTackles: z.number().exactOptional(),
    MiscFumblesForced: z.number().nullable().exactOptional(),
    MiscFumblesRecovered: z.number().nullable().exactOptional(),
    MiscSoloTackles: z.number().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    OffensiveFumbleRecoveryTouchdowns: z.number().nullable().exactOptional(),
    OffensiveSnapsPlayed: z.int().nullable().exactOptional(),
    OffensiveTeamSnaps: z.int().nullable().exactOptional(),
    OffensiveTouchdowns: z.number().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    OpponentPositionRank: z.int().nullable().exactOptional(),
    OpponentRank: z.int().nullable().exactOptional(),
    PassesDefended: z.number().exactOptional(),
    PassingAttempts: z.number().exactOptional(),
    PassingCompletionPercentage: z.number().exactOptional(),
    PassingCompletions: z.number().exactOptional(),
    PassingInterceptions: z.number().exactOptional(),
    PassingLong: z.number().exactOptional(),
    PassingRating: z.number().exactOptional(),
    PassingSackYards: z.number().exactOptional(),
    PassingSacks: z.number().exactOptional(),
    PassingTouchdowns: z.number().exactOptional(),
    PassingYards: z.number().exactOptional(),
    PassingYardsPerAttempt: z.number().exactOptional(),
    PassingYardsPerCompletion: z.number().exactOptional(),
    Played: z.int().exactOptional(),
    PlayerGameID: z.int().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PlayingSurface: z.string().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    PuntAverage: z.number().exactOptional(),
    PuntInside20: z.number().nullable().exactOptional(),
    PuntLong: z.number().nullable().exactOptional(),
    PuntNetAverage: z.number().nullable().exactOptional(),
    PuntNetYards: z.number().nullable().exactOptional(),
    PuntReturnFairCatches: z.number().nullable().exactOptional(),
    PuntReturnLong: z.number().exactOptional(),
    PuntReturnTouchdowns: z.number().exactOptional(),
    PuntReturnYards: z.number().exactOptional(),
    PuntReturnYardsPerAttempt: z.number().exactOptional(),
    PuntReturns: z.number().exactOptional(),
    PuntTouchbacks: z.number().nullable().exactOptional(),
    PuntYards: z.number().exactOptional(),
    Punts: z.number().exactOptional(),
    PuntsHadBlocked: z.number().nullable().exactOptional(),
    QuarterbackHits: z.number().nullable().exactOptional(),
    ReceivingLong: z.number().exactOptional(),
    ReceivingTargets: z.number().nullable().exactOptional(),
    ReceivingTouchdowns: z.number().exactOptional(),
    ReceivingYards: z.number().exactOptional(),
    ReceivingYardsPerReception: z.number().exactOptional(),
    ReceivingYardsPerTarget: z.number().exactOptional(),
    ReceptionPercentage: z.number().exactOptional(),
    Receptions: z.number().exactOptional(),
    RushingAttempts: z.number().exactOptional(),
    RushingLong: z.number().exactOptional(),
    RushingTouchdowns: z.number().exactOptional(),
    RushingYards: z.number().exactOptional(),
    RushingYardsPerAttempt: z.number().exactOptional(),
    SackYards: z.number().exactOptional(),
    Sacks: z.number().exactOptional(),
    Safeties: z.number().nullable().exactOptional(),
    SafetiesAllowed: z.number().nullable().exactOptional(),
    ScoreID: z.int().exactOptional(),
    ScoringDetails: z.array(ScoringDetailSchema).exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    SnapCountsConfirmed: z.boolean().nullable().exactOptional(),
    SoloTackles: z.number().exactOptional(),
    SpecialTeamsAssistedTackles: z.number().exactOptional(),
    SpecialTeamsFumblesForced: z.number().nullable().exactOptional(),
    SpecialTeamsFumblesRecovered: z.number().nullable().exactOptional(),
    SpecialTeamsSnapsPlayed: z.int().nullable().exactOptional(),
    SpecialTeamsSoloTackles: z.number().exactOptional(),
    SpecialTeamsTeamSnaps: z.int().nullable().exactOptional(),
    SpecialTeamsTouchdowns: z.number().exactOptional(),
    Stadium: z.string().nullable().exactOptional(),
    Started: z.int().exactOptional(),
    Tackles: z.number().exactOptional(),
    TacklesForLoss: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Temperature: z.int().nullable().exactOptional(),
    Touchdowns: z.number().exactOptional(),
    TwoPointConversionPasses: z.number().exactOptional(),
    TwoPointConversionReceptions: z.number().exactOptional(),
    TwoPointConversionReturns: z.number().nullable().exactOptional(),
    TwoPointConversionRuns: z.number().exactOptional(),
    VictivSalary: z.int().nullable().exactOptional(),
    Week: z.int().exactOptional(),
    WindSpeed: z.int().nullable().exactOptional(),
    YahooPosition: z.string().nullable().exactOptional(),
    YahooSalary: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerGame')

const QuarterSchema = z
  .object({
    AwayTeamScore: z.int().nullable().exactOptional(),
    Created: z.string().nullable().exactOptional(),
    Description: z.string().nullable().exactOptional(),
    HomeTeamScore: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    QuarterID: z.int().exactOptional(),
    ScoreID: z.int().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Quarter')

const TeamGameSchema = z
  .object({
    AssistedTackles: z.int().nullable().exactOptional(),
    BlockedKickReturnTouchdowns: z.int().nullable().exactOptional(),
    BlockedKickReturnYards: z.int().nullable().exactOptional(),
    BlockedKicks: z.int().nullable().exactOptional(),
    CompletionPercentage: z.number().exactOptional(),
    Date: z.string().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DayOfWeek: z.string().nullable().exactOptional(),
    ExtraPointKickingAttempts: z.int().nullable().exactOptional(),
    ExtraPointKickingConversions: z.int().nullable().exactOptional(),
    ExtraPointPassingAttempts: z.int().nullable().exactOptional(),
    ExtraPointPassingConversions: z.int().nullable().exactOptional(),
    ExtraPointPercentage: z.number().nullable().exactOptional(),
    ExtraPointRushingAttempts: z.int().nullable().exactOptional(),
    ExtraPointRushingConversions: z.int().nullable().exactOptional(),
    ExtraPointsHadBlocked: z.int().nullable().exactOptional(),
    FieldGoalAttempts: z.int().nullable().exactOptional(),
    FieldGoalPercentage: z.number().nullable().exactOptional(),
    FieldGoalReturnTouchdowns: z.int().nullable().exactOptional(),
    FieldGoalReturnYards: z.int().nullable().exactOptional(),
    FieldGoalsHadBlocked: z.int().nullable().exactOptional(),
    FieldGoalsMade: z.int().nullable().exactOptional(),
    FirstDowns: z.int().nullable().exactOptional(),
    FirstDownsByPassing: z.int().nullable().exactOptional(),
    FirstDownsByPenalty: z.int().nullable().exactOptional(),
    FirstDownsByRushing: z.int().nullable().exactOptional(),
    FourthDownAttempts: z.int().nullable().exactOptional(),
    FourthDownConversions: z.int().nullable().exactOptional(),
    FourthDownPercentage: z.number().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.int().nullable().exactOptional(),
    FumbleReturnYards: z.int().nullable().exactOptional(),
    Fumbles: z.int().nullable().exactOptional(),
    FumblesForced: z.int().nullable().exactOptional(),
    FumblesLost: z.int().nullable().exactOptional(),
    FumblesRecovered: z.int().nullable().exactOptional(),
    GameKey: z.string().nullable().exactOptional(),
    Giveaways: z.int().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalOpponentID: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    GoalToGoAttempts: z.int().nullable().exactOptional(),
    GoalToGoConversions: z.int().nullable().exactOptional(),
    GoalToGoPercentage: z.number().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    Humidity: z.int().nullable().exactOptional(),
    InterceptionReturnTouchdowns: z.int().nullable().exactOptional(),
    InterceptionReturnYards: z.int().nullable().exactOptional(),
    InterceptionReturns: z.int().nullable().exactOptional(),
    IsGameOver: z.boolean().nullable().exactOptional(),
    KickReturnAverage: z.number().nullable().exactOptional(),
    KickReturnLong: z.int().nullable().exactOptional(),
    KickReturnTouchdowns: z.int().nullable().exactOptional(),
    KickReturnYardDifferential: z.int().nullable().exactOptional(),
    KickReturnYards: z.int().nullable().exactOptional(),
    KickReturns: z.int().nullable().exactOptional(),
    KickoffTouchbacks: z.int().nullable().exactOptional(),
    Kickoffs: z.int().nullable().exactOptional(),
    KickoffsInEndZone: z.int().nullable().exactOptional(),
    OffensivePlays: z.int().exactOptional(),
    OffensiveYards: z.int().exactOptional(),
    OffensiveYardsPerPlay: z.number().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentAssistedTackles: z.int().nullable().exactOptional(),
    OpponentBlockedKickReturnTouchdowns: z.int().nullable().exactOptional(),
    OpponentBlockedKickReturnYards: z.int().nullable().exactOptional(),
    OpponentBlockedKicks: z.int().nullable().exactOptional(),
    OpponentCompletionPercentage: z.number().exactOptional(),
    OpponentExtraPointKickingAttempts: z.int().nullable().exactOptional(),
    OpponentExtraPointKickingConversions: z.int().nullable().exactOptional(),
    OpponentExtraPointPassingAttempts: z.int().nullable().exactOptional(),
    OpponentExtraPointPassingConversions: z.int().nullable().exactOptional(),
    OpponentExtraPointPercentage: z.number().nullable().exactOptional(),
    OpponentExtraPointRushingAttempts: z.int().nullable().exactOptional(),
    OpponentExtraPointRushingConversions: z.int().nullable().exactOptional(),
    OpponentExtraPointsHadBlocked: z.int().nullable().exactOptional(),
    OpponentFieldGoalAttempts: z.int().nullable().exactOptional(),
    OpponentFieldGoalPercentage: z.number().nullable().exactOptional(),
    OpponentFieldGoalReturnTouchdowns: z.int().nullable().exactOptional(),
    OpponentFieldGoalReturnYards: z.int().nullable().exactOptional(),
    OpponentFieldGoalsHadBlocked: z.int().nullable().exactOptional(),
    OpponentFieldGoalsMade: z.int().nullable().exactOptional(),
    OpponentFirstDowns: z.int().nullable().exactOptional(),
    OpponentFirstDownsByPassing: z.int().nullable().exactOptional(),
    OpponentFirstDownsByPenalty: z.int().nullable().exactOptional(),
    OpponentFirstDownsByRushing: z.int().nullable().exactOptional(),
    OpponentFourthDownAttempts: z.int().nullable().exactOptional(),
    OpponentFourthDownConversions: z.int().nullable().exactOptional(),
    OpponentFourthDownPercentage: z.number().nullable().exactOptional(),
    OpponentFumbleReturnTouchdowns: z.int().nullable().exactOptional(),
    OpponentFumbleReturnYards: z.int().nullable().exactOptional(),
    OpponentFumbles: z.int().nullable().exactOptional(),
    OpponentFumblesForced: z.int().nullable().exactOptional(),
    OpponentFumblesLost: z.int().nullable().exactOptional(),
    OpponentFumblesRecovered: z.int().nullable().exactOptional(),
    OpponentGiveaways: z.int().exactOptional(),
    OpponentGoalToGoAttempts: z.int().nullable().exactOptional(),
    OpponentGoalToGoConversions: z.int().nullable().exactOptional(),
    OpponentGoalToGoPercentage: z.number().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    OpponentInterceptionReturnTouchdowns: z.int().nullable().exactOptional(),
    OpponentInterceptionReturnYards: z.int().nullable().exactOptional(),
    OpponentInterceptionReturns: z.int().nullable().exactOptional(),
    OpponentKickReturnAverage: z.number().nullable().exactOptional(),
    OpponentKickReturnLong: z.int().nullable().exactOptional(),
    OpponentKickReturnTouchdowns: z.int().nullable().exactOptional(),
    OpponentKickReturnYards: z.int().nullable().exactOptional(),
    OpponentKickReturns: z.int().nullable().exactOptional(),
    OpponentKickoffTouchbacks: z.int().nullable().exactOptional(),
    OpponentKickoffs: z.int().nullable().exactOptional(),
    OpponentKickoffsInEndZone: z.int().nullable().exactOptional(),
    OpponentOffensivePlays: z.int().exactOptional(),
    OpponentOffensiveYards: z.int().exactOptional(),
    OpponentOffensiveYardsPerPlay: z.number().exactOptional(),
    OpponentPasserRating: z.number().nullable().exactOptional(),
    OpponentPassesDefended: z.int().nullable().exactOptional(),
    OpponentPassingAttempts: z.int().nullable().exactOptional(),
    OpponentPassingCompletions: z.int().nullable().exactOptional(),
    OpponentPassingDropbacks: z.int().nullable().exactOptional(),
    OpponentPassingInterceptionPercentage: z.number().nullable().exactOptional(),
    OpponentPassingInterceptions: z.int().nullable().exactOptional(),
    OpponentPassingTouchdowns: z.int().nullable().exactOptional(),
    OpponentPassingYards: z.int().nullable().exactOptional(),
    OpponentPassingYardsPerAttempt: z.number().exactOptional(),
    OpponentPassingYardsPerCompletion: z.number().exactOptional(),
    OpponentPenalties: z.int().nullable().exactOptional(),
    OpponentPenaltyYards: z.int().nullable().exactOptional(),
    OpponentPuntAverage: z.number().exactOptional(),
    OpponentPuntNetAverage: z.number().nullable().exactOptional(),
    OpponentPuntNetYards: z.int().nullable().exactOptional(),
    OpponentPuntReturnAverage: z.number().nullable().exactOptional(),
    OpponentPuntReturnLong: z.int().nullable().exactOptional(),
    OpponentPuntReturnTouchdowns: z.int().nullable().exactOptional(),
    OpponentPuntReturnYards: z.int().nullable().exactOptional(),
    OpponentPuntReturns: z.int().nullable().exactOptional(),
    OpponentPuntYards: z.int().nullable().exactOptional(),
    OpponentPunts: z.int().nullable().exactOptional(),
    OpponentPuntsHadBlocked: z.int().nullable().exactOptional(),
    OpponentQuarterbackHits: z.int().nullable().exactOptional(),
    OpponentQuarterbackHitsDifferential: z.int().nullable().exactOptional(),
    OpponentQuarterbackHitsPercentage: z.number().nullable().exactOptional(),
    OpponentQuarterbackSacksDifferential: z.int().nullable().exactOptional(),
    OpponentRedZoneAttempts: z.int().nullable().exactOptional(),
    OpponentRedZoneConversions: z.int().nullable().exactOptional(),
    OpponentRedZonePercentage: z.number().nullable().exactOptional(),
    OpponentReturnYards: z.int().nullable().exactOptional(),
    OpponentRushingAttempts: z.int().nullable().exactOptional(),
    OpponentRushingTouchdowns: z.int().nullable().exactOptional(),
    OpponentRushingYards: z.int().nullable().exactOptional(),
    OpponentRushingYardsPerAttempt: z.number().exactOptional(),
    OpponentSackYards: z.int().nullable().exactOptional(),
    OpponentSacks: z.int().nullable().exactOptional(),
    OpponentSafeties: z.int().nullable().exactOptional(),
    OpponentScore: z.int().exactOptional(),
    OpponentScoreOvertime: z.int().exactOptional(),
    OpponentScoreQuarter1: z.int().nullable().exactOptional(),
    OpponentScoreQuarter2: z.int().nullable().exactOptional(),
    OpponentScoreQuarter3: z.int().nullable().exactOptional(),
    OpponentScoreQuarter4: z.int().nullable().exactOptional(),
    OpponentSoloTackles: z.int().nullable().exactOptional(),
    OpponentTacklesForLoss: z.int().nullable().exactOptional(),
    OpponentTacklesForLossDifferential: z.int().nullable().exactOptional(),
    OpponentTacklesForLossPercentage: z.number().nullable().exactOptional(),
    OpponentTakeaways: z.int().exactOptional(),
    OpponentThirdDownAttempts: z.int().nullable().exactOptional(),
    OpponentThirdDownConversions: z.int().nullable().exactOptional(),
    OpponentThirdDownPercentage: z.number().nullable().exactOptional(),
    OpponentTimeOfPossession: z.string().nullable().exactOptional(),
    OpponentTimeOfPossessionMinutes: z.int().nullable().exactOptional(),
    OpponentTimeOfPossessionSeconds: z.int().nullable().exactOptional(),
    OpponentTimesSacked: z.int().nullable().exactOptional(),
    OpponentTimesSackedPercentage: z.number().exactOptional(),
    OpponentTimesSackedYards: z.int().nullable().exactOptional(),
    OpponentTouchdowns: z.int().nullable().exactOptional(),
    OpponentTurnoverDifferential: z.int().exactOptional(),
    OpponentTwoPointConversionReturns: z.int().nullable().exactOptional(),
    OverUnder: z.number().nullable().exactOptional(),
    PasserRating: z.number().nullable().exactOptional(),
    PassesDefended: z.int().nullable().exactOptional(),
    PassingAttempts: z.int().nullable().exactOptional(),
    PassingCompletions: z.int().nullable().exactOptional(),
    PassingDropbacks: z.int().nullable().exactOptional(),
    PassingInterceptionPercentage: z.number().nullable().exactOptional(),
    PassingInterceptions: z.int().nullable().exactOptional(),
    PassingTouchdowns: z.int().nullable().exactOptional(),
    PassingYards: z.int().nullable().exactOptional(),
    PassingYardsPerAttempt: z.number().exactOptional(),
    PassingYardsPerCompletion: z.number().exactOptional(),
    Penalties: z.int().nullable().exactOptional(),
    PenaltyYardDifferential: z.int().nullable().exactOptional(),
    PenaltyYards: z.int().nullable().exactOptional(),
    PlayingSurface: z.string().nullable().exactOptional(),
    PointDifferential: z.int().nullable().exactOptional(),
    PointSpread: z.number().nullable().exactOptional(),
    PuntAverage: z.number().exactOptional(),
    PuntNetAverage: z.number().nullable().exactOptional(),
    PuntNetYards: z.int().nullable().exactOptional(),
    PuntReturnAverage: z.number().nullable().exactOptional(),
    PuntReturnLong: z.int().nullable().exactOptional(),
    PuntReturnTouchdowns: z.int().nullable().exactOptional(),
    PuntReturnYardDifferential: z.int().nullable().exactOptional(),
    PuntReturnYards: z.int().nullable().exactOptional(),
    PuntReturns: z.int().nullable().exactOptional(),
    PuntYards: z.int().nullable().exactOptional(),
    Punts: z.int().nullable().exactOptional(),
    PuntsHadBlocked: z.int().nullable().exactOptional(),
    QuarterbackHits: z.int().nullable().exactOptional(),
    QuarterbackHitsDifferential: z.int().nullable().exactOptional(),
    QuarterbackHitsPercentage: z.number().nullable().exactOptional(),
    QuarterbackSacksDifferential: z.int().exactOptional(),
    RedZoneAttempts: z.int().nullable().exactOptional(),
    RedZoneConversions: z.int().nullable().exactOptional(),
    RedZonePercentage: z.number().nullable().exactOptional(),
    ReturnYards: z.int().nullable().exactOptional(),
    RushingAttempts: z.int().nullable().exactOptional(),
    RushingTouchdowns: z.int().nullable().exactOptional(),
    RushingYards: z.int().nullable().exactOptional(),
    RushingYardsPerAttempt: z.number().exactOptional(),
    SackYards: z.int().nullable().exactOptional(),
    Sacks: z.int().nullable().exactOptional(),
    Safeties: z.int().nullable().exactOptional(),
    Score: z.int().exactOptional(),
    ScoreID: z.int().exactOptional(),
    ScoreOvertime: z.int().exactOptional(),
    ScoreQuarter1: z.int().nullable().exactOptional(),
    ScoreQuarter2: z.int().nullable().exactOptional(),
    ScoreQuarter3: z.int().nullable().exactOptional(),
    ScoreQuarter4: z.int().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    SoloTackles: z.int().nullable().exactOptional(),
    Stadium: z.string().nullable().exactOptional(),
    TacklesForLoss: z.int().nullable().exactOptional(),
    TacklesForLossDifferential: z.int().nullable().exactOptional(),
    TacklesForLossPercentage: z.number().nullable().exactOptional(),
    Takeaways: z.int().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamGameID: z.int().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    TeamName: z.string().nullable().exactOptional(),
    Temperature: z.int().nullable().exactOptional(),
    ThirdDownAttempts: z.int().nullable().exactOptional(),
    ThirdDownConversions: z.int().nullable().exactOptional(),
    ThirdDownPercentage: z.number().nullable().exactOptional(),
    TimeOfPossession: z.string().nullable().exactOptional(),
    TimeOfPossessionMinutes: z.int().nullable().exactOptional(),
    TimeOfPossessionSeconds: z.int().nullable().exactOptional(),
    TimesSacked: z.int().nullable().exactOptional(),
    TimesSackedPercentage: z.number().exactOptional(),
    TimesSackedYards: z.int().nullable().exactOptional(),
    TotalScore: z.int().exactOptional(),
    Touchdowns: z.int().nullable().exactOptional(),
    TurnoverDifferential: z.int().exactOptional(),
    TwoPointConversionReturns: z.int().nullable().exactOptional(),
    Week: z.int().nullable().exactOptional(),
    WindSpeed: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamGame')

const BoxScoreV3Schema = z
  .object({
    FantasyDefenseGames: z.array(FantasyDefenseGameSchema).exactOptional(),
    PlayerGames: z.array(PlayerGameSchema).exactOptional(),
    Quarters: z.array(QuarterSchema).exactOptional(),
    Score: ScoreSchema.exactOptional(),
    ScoringDetails: z.array(ScoringDetailSchema).exactOptional(),
    ScoringPlays: z.array(ScoringPlaySchema).exactOptional(),
    TeamGames: z.array(TeamGameSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BoxScoreV3')

const ByeSchema = z
  .object({
    Season: z.int().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    Week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Bye')

const DailyFantasyPlayerSchema = z
  .object({
    Date: z.string().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    FanDuelSalary: z.int().nullable().exactOptional(),
    FantasyDataSalary: z.int().nullable().exactOptional(),
    FantasyDraftSalary: z.int().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    LastGameFantasyPoints: z.number().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentPositionRank: z.int().nullable().exactOptional(),
    OpponentRank: z.int().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    ProjectedFantasyPoints: z.number().nullable().exactOptional(),
    Salary: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    StatusCode: z.string().nullable().exactOptional(),
    StatusColor: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    YahooSalary: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DailyFantasyPlayer')

const DailyFantasyScoringSchema = z
  .object({
    Date: z.string().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsPPR: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    HasStarted: z.boolean().exactOptional(),
    IsInProgress: z.boolean().exactOptional(),
    IsOver: z.boolean().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DailyFantasyScoring')

const ScheduleSchema = z
  .object({
    AwayTeam: z.string().nullable().exactOptional(),
    AwayTeamMoneyLine: z.int().nullable().exactOptional(),
    Canceled: z.boolean().nullable().exactOptional(),
    Channel: z.string().nullable().exactOptional(),
    Date: z.string().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    ForecastDescription: z.string().nullable().exactOptional(),
    ForecastTempHigh: z.int().nullable().exactOptional(),
    ForecastTempLow: z.int().nullable().exactOptional(),
    ForecastWindChill: z.int().nullable().exactOptional(),
    ForecastWindSpeed: z.int().nullable().exactOptional(),
    GameKey: z.string().nullable().exactOptional(),
    GeoLat: z.number().nullable().exactOptional(),
    GeoLong: z.number().nullable().exactOptional(),
    GlobalAwayTeamID: z.int().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalHomeTeamID: z.int().nullable().exactOptional(),
    HomeTeam: z.string().nullable().exactOptional(),
    HomeTeamMoneyLine: z.int().nullable().exactOptional(),
    OverUnder: z.number().nullable().exactOptional(),
    PointSpread: z.number().nullable().exactOptional(),
    ScoreID: z.int().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    StadiumDetails: StadiumSchema.exactOptional(),
    StadiumID: z.int().nullable().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    Week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Schedule')

const DfsSlateGameSchema = z
  .object({
    Game: ScheduleSchema.exactOptional(),
    GameID: z.int().nullable().exactOptional(),
    OperatorGameID: z.int().nullable().exactOptional(),
    RemovedByOperator: z.boolean().nullable().exactOptional(),
    ScoreID: z.int().nullable().exactOptional(),
    SlateGameID: z.int().exactOptional(),
    SlateID: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DfsSlateGame')

const DfsSlatePlayerSchema = z
  .object({
    FantasyDefenseProjectionStatID: z.int().nullable().exactOptional(),
    OperatorPlayerID: z.string().nullable().exactOptional(),
    OperatorPlayerName: z.string().nullable().exactOptional(),
    OperatorPosition: z.string().nullable().exactOptional(),
    OperatorRosterSlots: z.array(z.string().nullable()).exactOptional(),
    OperatorSalary: z.int().nullable().exactOptional(),
    OperatorSlatePlayerID: z.string().nullable().exactOptional(),
    PlayerGameProjectionStatID: z.int().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    RemovedByOperator: z.boolean().nullable().exactOptional(),
    SlateGameID: z.int().nullable().exactOptional(),
    SlateID: z.int().exactOptional(),
    SlatePlayerID: z.int().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DfsSlatePlayer')

const DfsSlateSchema = z
  .object({
    DfsSlateGames: z.array(DfsSlateGameSchema).exactOptional(),
    DfsSlatePlayers: z.array(DfsSlatePlayerSchema).exactOptional(),
    IsMultiDaySlate: z.boolean().nullable().exactOptional(),
    NumberOfGames: z.int().nullable().exactOptional(),
    Operator: z.string().nullable().exactOptional(),
    OperatorDay: z.string().nullable().exactOptional(),
    OperatorGameType: z.string().nullable().exactOptional(),
    OperatorName: z.string().nullable().exactOptional(),
    OperatorSlateID: z.int().nullable().exactOptional(),
    OperatorStartTime: z.string().nullable().exactOptional(),
    RemovedByOperator: z.boolean().nullable().exactOptional(),
    SalaryCap: z.int().nullable().exactOptional(),
    SlateID: z.int().exactOptional(),
    SlateRosterSlots: z.array(z.string().nullable()).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DfsSlate')

const FantasyDefenseSeasonSchema = z
  .object({
    AssistedTackles: z.number().exactOptional(),
    AuctionValue: z.number().nullable().exactOptional(),
    AuctionValuePPR: z.number().nullable().exactOptional(),
    AverageDraftPosition: z.number().nullable().exactOptional(),
    AverageDraftPosition2QB: z.number().nullable().exactOptional(),
    AverageDraftPositionDynasty: z.number().nullable().exactOptional(),
    AverageDraftPositionPPR: z.number().nullable().exactOptional(),
    BlockedKickReturnTouchdowns: z.number().nullable().exactOptional(),
    BlockedKickReturnYards: z.number().nullable().exactOptional(),
    BlockedKicks: z.number().exactOptional(),
    DefensiveTouchdowns: z.number().nullable().exactOptional(),
    DraftKingsFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsKickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsQuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsRunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsTightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    DraftKingsWideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelKickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelQuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelRunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelTightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FanDuelWideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftKickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftQuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftRunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftTightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyDraftWideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsAllowed: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FieldGoalReturnTouchdowns: z.number().nullable().exactOptional(),
    FieldGoalReturnYards: z.number().nullable().exactOptional(),
    FourthDownAttempts: z.number().nullable().exactOptional(),
    FourthDownConversions: z.number().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.number().exactOptional(),
    FumbleReturnYards: z.number().exactOptional(),
    FumblesForced: z.number().exactOptional(),
    FumblesRecovered: z.number().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Humidity: z.int().nullable().exactOptional(),
    InterceptionReturnTouchdowns: z.number().exactOptional(),
    InterceptionReturnYards: z.number().exactOptional(),
    Interceptions: z.number().exactOptional(),
    KickReturnLong: z.number().exactOptional(),
    KickReturnTouchdowns: z.number().exactOptional(),
    KickReturnYards: z.number().exactOptional(),
    KickReturns: z.number().exactOptional(),
    KickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    OffensiveYardsAllowed: z.number().nullable().exactOptional(),
    PassesDefended: z.number().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PointsAllowed: z.number().exactOptional(),
    PointsAllowedByDefenseSpecialTeams: z.number().nullable().exactOptional(),
    PuntReturnLong: z.number().exactOptional(),
    PuntReturnTouchdowns: z.number().exactOptional(),
    PuntReturnYards: z.number().exactOptional(),
    PuntReturns: z.number().exactOptional(),
    QuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    QuarterbackHits: z.number().nullable().exactOptional(),
    RunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    SackYards: z.number().exactOptional(),
    Sacks: z.number().exactOptional(),
    Safeties: z.number().exactOptional(),
    ScoringDetails: z.array(ScoringDetailSchema).exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    SoloTackles: z.number().exactOptional(),
    SpecialTeamsTouchdowns: z.number().nullable().exactOptional(),
    TacklesForLoss: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Temperature: z.int().nullable().exactOptional(),
    ThirdDownAttempts: z.number().nullable().exactOptional(),
    ThirdDownConversions: z.number().nullable().exactOptional(),
    TightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    TouchdownsScored: z.number().exactOptional(),
    TwoPointConversionReturns: z.number().nullable().exactOptional(),
    WideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
    WindSpeed: z.int().nullable().exactOptional(),
    YahooFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooKickerFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooQuarterbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooRunningbackFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooTightEndFantasyPointsAllowed: z.number().nullable().exactOptional(),
    YahooWideReceiverFantasyPointsAllowed: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FantasyDefenseSeason')

const FantasyPlayerSchema = z
  .object({
    AuctionValue: z.int().nullable().exactOptional(),
    AuctionValuePPR: z.int().nullable().exactOptional(),
    AverageDraftPosition: z.number().nullable().exactOptional(),
    AverageDraftPosition2QB: z.number().nullable().exactOptional(),
    AverageDraftPositionDynasty: z.number().nullable().exactOptional(),
    AverageDraftPositionIDP: z.int().nullable().exactOptional(),
    AverageDraftPositionPPR: z.number().nullable().exactOptional(),
    AverageDraftPositionRookie: z.number().nullable().exactOptional(),
    ByeWeek: z.int().nullable().exactOptional(),
    FantasyPlayerKey: z.string().nullable().exactOptional(),
    LastSeasonFantasyPoints: z.number().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    ProjectedFantasyPoints: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FantasyPlayer')

const InjurySchema = z
  .object({
    BodyPart: z.string().nullable().exactOptional(),
    DeclaredInactive: z.boolean().nullable().exactOptional(),
    InjuryID: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    Practice: z.string().nullable().exactOptional(),
    PracticeDescription: z.string().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Injury')

const NewsSchema = z
  .object({
    Author: z.string().nullable().exactOptional(),
    Categories: z.string().nullable().exactOptional(),
    Content: z.string().nullable().exactOptional(),
    NewsID: z.int().exactOptional(),
    OriginalSource: z.string().nullable().exactOptional(),
    OriginalSourceUrl: z.string().nullable().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PlayerID2: z.int().nullable().exactOptional(),
    Source: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    Team2: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    TeamID2: z.int().nullable().exactOptional(),
    TermsOfUse: z.string().nullable().exactOptional(),
    TimeAgo: z.string().nullable().exactOptional(),
    Title: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    Url: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('News')

const PlayerSchema = z
  .object({
    Active: z.boolean().nullable().exactOptional(),
    Age: z.int().nullable().exactOptional(),
    AverageDraftPosition: z.number().nullable().exactOptional(),
    BirthDate: z.string().nullable().exactOptional(),
    BirthDateString: z.string().nullable().exactOptional(),
    ByeWeek: z.int().nullable().exactOptional(),
    College: z.string().nullable().exactOptional(),
    CollegeDraftPick: z.int().nullable().exactOptional(),
    CollegeDraftRound: z.int().nullable().exactOptional(),
    CollegeDraftTeam: z.string().nullable().exactOptional(),
    CollegeDraftYear: z.int().nullable().exactOptional(),
    CurrentStatus: z.string().nullable().exactOptional(),
    CurrentTeam: z.string().nullable().exactOptional(),
    DeclaredInactive: z.boolean().exactOptional(),
    DepthDisplayOrder: z.int().nullable().exactOptional(),
    DepthOrder: z.int().nullable().exactOptional(),
    DepthPosition: z.string().nullable().exactOptional(),
    DepthPositionCategory: z.string().nullable().exactOptional(),
    DraftKingsName: z.string().nullable().exactOptional(),
    DraftKingsPlayerID: z.int().nullable().exactOptional(),
    Experience: z.int().nullable().exactOptional(),
    ExperienceString: z.string().nullable().exactOptional(),
    FanDuelName: z.string().nullable().exactOptional(),
    FanDuelPlayerID: z.int().nullable().exactOptional(),
    FantasyAlarmPlayerID: z.int().nullable().exactOptional(),
    FantasyDraftName: z.string().nullable().exactOptional(),
    FantasyDraftPlayerID: z.int().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    FantasyPositionDepthOrder: z.int().nullable().exactOptional(),
    FirstName: z.string().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Height: z.string().nullable().exactOptional(),
    HeightFeet: z.int().nullable().exactOptional(),
    HeightInches: z.int().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryPractice: z.string().nullable().exactOptional(),
    InjuryPracticeDescription: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    IsUndraftedFreeAgent: z.boolean().exactOptional(),
    LastName: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().nullable().exactOptional(),
    PhotoUrl: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    RotoWirePlayerID: z.int().nullable().exactOptional(),
    RotoworldPlayerID: z.int().nullable().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    SportRadarPlayerID: z.string().nullable().exactOptional(),
    SportsDirectPlayerID: z.int().nullable().exactOptional(),
    StatsPlayerID: z.int().nullable().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    UpcomingDraftKingsSalary: z.int().nullable().exactOptional(),
    UpcomingFanDuelSalary: z.int().nullable().exactOptional(),
    UpcomingGameOpponent: z.string().nullable().exactOptional(),
    UpcomingGameWeek: z.int().exactOptional(),
    UpcomingOpponentPositionRank: z.int().nullable().exactOptional(),
    UpcomingOpponentRank: z.int().nullable().exactOptional(),
    UpcomingSalary: z.int().nullable().exactOptional(),
    UpcomingYahooSalary: z.int().nullable().exactOptional(),
    UsaTodayHeadshotNoBackgroundUpdated: z.string().nullable().exactOptional(),
    UsaTodayHeadshotNoBackgroundUrl: z.string().nullable().exactOptional(),
    UsaTodayHeadshotUpdated: z.string().nullable().exactOptional(),
    UsaTodayHeadshotUrl: z.string().nullable().exactOptional(),
    UsaTodayPlayerID: z.int().nullable().exactOptional(),
    Weight: z.int().nullable().exactOptional(),
    XmlTeamPlayerID: z.int().nullable().exactOptional(),
    YahooName: z.string().nullable().exactOptional(),
    YahooPlayerID: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Player')

const PlayerSeasonSchema = z
  .object({
    Activated: z.int().exactOptional(),
    AssistedTackles: z.number().exactOptional(),
    AuctionValue: z.number().nullable().exactOptional(),
    AuctionValuePPR: z.number().nullable().exactOptional(),
    AverageDraftPosition: z.number().nullable().exactOptional(),
    AverageDraftPosition2QB: z.number().nullable().exactOptional(),
    AverageDraftPositionDynasty: z.number().nullable().exactOptional(),
    AverageDraftPositionPPR: z.number().nullable().exactOptional(),
    AverageDraftPositionRookie: z.number().nullable().exactOptional(),
    BlockedKickReturnTouchdowns: z.number().nullable().exactOptional(),
    BlockedKickReturnYards: z.number().nullable().exactOptional(),
    BlockedKicks: z.number().exactOptional(),
    DefensiveSnapsPlayed: z.int().nullable().exactOptional(),
    DefensiveTeamSnaps: z.int().nullable().exactOptional(),
    DefensiveTouchdowns: z.number().exactOptional(),
    ExtraPointsAttempted: z.number().nullable().exactOptional(),
    ExtraPointsHadBlocked: z.number().nullable().exactOptional(),
    ExtraPointsMade: z.number().exactOptional(),
    FantasyPoints: z.number().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsPPR: z.number().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    FieldGoalPercentage: z.number().exactOptional(),
    FieldGoalReturnTouchdowns: z.number().nullable().exactOptional(),
    FieldGoalReturnYards: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.number().exactOptional(),
    FieldGoalsHadBlocked: z.number().nullable().exactOptional(),
    FieldGoalsLongestMade: z.number().exactOptional(),
    FieldGoalsMade: z.number().exactOptional(),
    FieldGoalsMade0to19: z.number().nullable().exactOptional(),
    FieldGoalsMade20to29: z.number().nullable().exactOptional(),
    FieldGoalsMade30to39: z.number().nullable().exactOptional(),
    FieldGoalsMade40to49: z.number().nullable().exactOptional(),
    FieldGoalsMade50Plus: z.number().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.number().exactOptional(),
    FumbleReturnYards: z.number().exactOptional(),
    Fumbles: z.number().exactOptional(),
    FumblesForced: z.number().exactOptional(),
    FumblesLost: z.number().nullable().exactOptional(),
    FumblesOutOfBounds: z.number().nullable().exactOptional(),
    FumblesOwnRecoveries: z.number().nullable().exactOptional(),
    FumblesRecovered: z.number().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Humidity: z.int().nullable().exactOptional(),
    InterceptionReturnTouchdowns: z.number().exactOptional(),
    InterceptionReturnYards: z.number().exactOptional(),
    Interceptions: z.number().exactOptional(),
    KickReturnFairCatches: z.number().nullable().exactOptional(),
    KickReturnLong: z.number().exactOptional(),
    KickReturnTouchdowns: z.number().exactOptional(),
    KickReturnYards: z.number().exactOptional(),
    KickReturnYardsPerAttempt: z.number().exactOptional(),
    KickReturns: z.number().exactOptional(),
    MiscAssistedTackles: z.number().exactOptional(),
    MiscFumblesForced: z.number().nullable().exactOptional(),
    MiscFumblesRecovered: z.number().nullable().exactOptional(),
    MiscSoloTackles: z.number().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    OffensiveFumbleRecoveryTouchdowns: z.int().nullable().exactOptional(),
    OffensiveSnapsPlayed: z.int().nullable().exactOptional(),
    OffensiveTeamSnaps: z.int().nullable().exactOptional(),
    OffensiveTouchdowns: z.number().exactOptional(),
    PassesDefended: z.number().exactOptional(),
    PassingAttempts: z.number().exactOptional(),
    PassingCompletionPercentage: z.number().exactOptional(),
    PassingCompletions: z.number().exactOptional(),
    PassingInterceptions: z.number().exactOptional(),
    PassingLong: z.number().exactOptional(),
    PassingRating: z.number().exactOptional(),
    PassingSackYards: z.number().exactOptional(),
    PassingSacks: z.number().exactOptional(),
    PassingTouchdowns: z.number().exactOptional(),
    PassingYards: z.number().exactOptional(),
    PassingYardsPerAttempt: z.number().exactOptional(),
    PassingYardsPerCompletion: z.number().exactOptional(),
    Played: z.int().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PlayerSeasonID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    PuntAverage: z.number().exactOptional(),
    PuntInside20: z.number().nullable().exactOptional(),
    PuntLong: z.number().nullable().exactOptional(),
    PuntNetAverage: z.number().nullable().exactOptional(),
    PuntNetYards: z.number().nullable().exactOptional(),
    PuntReturnFairCatches: z.number().nullable().exactOptional(),
    PuntReturnLong: z.number().exactOptional(),
    PuntReturnTouchdowns: z.number().exactOptional(),
    PuntReturnYards: z.number().exactOptional(),
    PuntReturnYardsPerAttempt: z.number().exactOptional(),
    PuntReturns: z.number().exactOptional(),
    PuntTouchbacks: z.number().nullable().exactOptional(),
    PuntYards: z.number().exactOptional(),
    Punts: z.number().exactOptional(),
    PuntsHadBlocked: z.number().nullable().exactOptional(),
    QuarterbackHits: z.number().nullable().exactOptional(),
    ReceivingLong: z.number().exactOptional(),
    ReceivingTargets: z.number().nullable().exactOptional(),
    ReceivingTouchdowns: z.number().exactOptional(),
    ReceivingYards: z.number().exactOptional(),
    ReceivingYardsPerReception: z.number().exactOptional(),
    ReceivingYardsPerTarget: z.number().exactOptional(),
    ReceptionPercentage: z.number().exactOptional(),
    Receptions: z.number().exactOptional(),
    RushingAttempts: z.number().exactOptional(),
    RushingLong: z.number().exactOptional(),
    RushingTouchdowns: z.number().exactOptional(),
    RushingYards: z.number().exactOptional(),
    RushingYardsPerAttempt: z.number().exactOptional(),
    SackYards: z.number().exactOptional(),
    Sacks: z.number().exactOptional(),
    Safeties: z.number().nullable().exactOptional(),
    SafetiesAllowed: z.number().nullable().exactOptional(),
    ScoringDetails: z.array(ScoringDetailSchema).exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    SoloTackles: z.number().exactOptional(),
    SpecialTeamsAssistedTackles: z.number().exactOptional(),
    SpecialTeamsFumblesForced: z.number().nullable().exactOptional(),
    SpecialTeamsFumblesRecovered: z.number().nullable().exactOptional(),
    SpecialTeamsSnapsPlayed: z.int().nullable().exactOptional(),
    SpecialTeamsSoloTackles: z.number().exactOptional(),
    SpecialTeamsTeamSnaps: z.int().nullable().exactOptional(),
    SpecialTeamsTouchdowns: z.number().exactOptional(),
    Started: z.int().exactOptional(),
    Tackles: z.number().exactOptional(),
    TacklesForLoss: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Temperature: z.int().nullable().exactOptional(),
    Touchdowns: z.number().exactOptional(),
    TwoPointConversionPasses: z.number().exactOptional(),
    TwoPointConversionReceptions: z.number().exactOptional(),
    TwoPointConversionReturns: z.number().nullable().exactOptional(),
    TwoPointConversionRuns: z.number().exactOptional(),
    WindSpeed: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerSeason')

const PlayerDetailSchema = z
  .object({
    Active: z.boolean().nullable().exactOptional(),
    Age: z.int().nullable().exactOptional(),
    AverageDraftPosition: z.number().nullable().exactOptional(),
    BirthDate: z.string().nullable().exactOptional(),
    BirthDateString: z.string().nullable().exactOptional(),
    ByeWeek: z.int().nullable().exactOptional(),
    College: z.string().nullable().exactOptional(),
    CollegeDraftPick: z.int().nullable().exactOptional(),
    CollegeDraftRound: z.int().nullable().exactOptional(),
    CollegeDraftTeam: z.string().nullable().exactOptional(),
    CollegeDraftYear: z.int().nullable().exactOptional(),
    CurrentStatus: z.string().nullable().exactOptional(),
    CurrentTeam: z.string().nullable().exactOptional(),
    DeclaredInactive: z.boolean().exactOptional(),
    DepthDisplayOrder: z.int().nullable().exactOptional(),
    DepthOrder: z.int().nullable().exactOptional(),
    DepthPosition: z.string().nullable().exactOptional(),
    DepthPositionCategory: z.string().nullable().exactOptional(),
    DraftKingsName: z.string().nullable().exactOptional(),
    DraftKingsPlayerID: z.int().nullable().exactOptional(),
    Experience: z.int().nullable().exactOptional(),
    ExperienceString: z.string().nullable().exactOptional(),
    FanDuelName: z.string().nullable().exactOptional(),
    FanDuelPlayerID: z.int().nullable().exactOptional(),
    FantasyAlarmPlayerID: z.int().nullable().exactOptional(),
    FantasyDraftName: z.string().nullable().exactOptional(),
    FantasyDraftPlayerID: z.int().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    FantasyPositionDepthOrder: z.int().nullable().exactOptional(),
    FirstName: z.string().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Height: z.string().nullable().exactOptional(),
    HeightFeet: z.int().nullable().exactOptional(),
    HeightInches: z.int().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryPractice: z.string().nullable().exactOptional(),
    InjuryPracticeDescription: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    IsUndraftedFreeAgent: z.boolean().exactOptional(),
    LastName: z.string().nullable().exactOptional(),
    LatestNews: z.array(NewsSchema).exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().nullable().exactOptional(),
    PhotoUrl: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    PlayerSeason: PlayerSeasonSchema.exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    RotoWirePlayerID: z.int().nullable().exactOptional(),
    RotoworldPlayerID: z.int().nullable().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    SportRadarPlayerID: z.string().nullable().exactOptional(),
    SportsDirectPlayerID: z.int().nullable().exactOptional(),
    StatsPlayerID: z.int().nullable().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    UpcomingDraftKingsSalary: z.int().nullable().exactOptional(),
    UpcomingFanDuelSalary: z.int().nullable().exactOptional(),
    UpcomingGameOpponent: z.string().nullable().exactOptional(),
    UpcomingGameWeek: z.int().exactOptional(),
    UpcomingOpponentPositionRank: z.int().nullable().exactOptional(),
    UpcomingOpponentRank: z.int().nullable().exactOptional(),
    UpcomingSalary: z.int().nullable().exactOptional(),
    UpcomingYahooSalary: z.int().nullable().exactOptional(),
    UsaTodayHeadshotNoBackgroundUpdated: z.string().nullable().exactOptional(),
    UsaTodayHeadshotNoBackgroundUrl: z.string().nullable().exactOptional(),
    UsaTodayHeadshotUpdated: z.string().nullable().exactOptional(),
    UsaTodayHeadshotUrl: z.string().nullable().exactOptional(),
    UsaTodayPlayerID: z.int().nullable().exactOptional(),
    Weight: z.int().nullable().exactOptional(),
    XmlTeamPlayerID: z.int().nullable().exactOptional(),
    YahooName: z.string().nullable().exactOptional(),
    YahooPlayerID: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerDetail')

const PlayerGameRedZoneSchema = z
  .object({
    Activated: z.int().exactOptional(),
    AssistedTackles: z.number().exactOptional(),
    BlockedKickReturnTouchdowns: z.number().nullable().exactOptional(),
    BlockedKickReturnYards: z.number().nullable().exactOptional(),
    BlockedKicks: z.number().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DeclaredInactive: z.boolean().exactOptional(),
    DefensiveSnapsPlayed: z.int().nullable().exactOptional(),
    DefensiveTeamSnaps: z.int().nullable().exactOptional(),
    DefensiveTouchdowns: z.number().exactOptional(),
    DraftKingsPosition: z.string().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    ExtraPointsAttempted: z.number().nullable().exactOptional(),
    ExtraPointsHadBlocked: z.number().nullable().exactOptional(),
    ExtraPointsMade: z.number().exactOptional(),
    FanDuelPosition: z.string().nullable().exactOptional(),
    FanDuelSalary: z.int().nullable().exactOptional(),
    FantasyDataSalary: z.int().nullable().exactOptional(),
    FantasyDraftPosition: z.string().nullable().exactOptional(),
    FantasyDraftSalary: z.int().nullable().exactOptional(),
    FantasyPoints: z.number().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsPPR: z.number().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    FieldGoalPercentage: z.number().exactOptional(),
    FieldGoalReturnTouchdowns: z.number().nullable().exactOptional(),
    FieldGoalReturnYards: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.number().exactOptional(),
    FieldGoalsHadBlocked: z.number().nullable().exactOptional(),
    FieldGoalsLongestMade: z.number().exactOptional(),
    FieldGoalsMade: z.number().exactOptional(),
    FieldGoalsMade0to19: z.number().nullable().exactOptional(),
    FieldGoalsMade20to29: z.number().nullable().exactOptional(),
    FieldGoalsMade30to39: z.number().nullable().exactOptional(),
    FieldGoalsMade40to49: z.number().nullable().exactOptional(),
    FieldGoalsMade50Plus: z.number().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.number().exactOptional(),
    FumbleReturnYards: z.number().exactOptional(),
    Fumbles: z.number().exactOptional(),
    FumblesForced: z.number().exactOptional(),
    FumblesLost: z.number().nullable().exactOptional(),
    FumblesOutOfBounds: z.number().nullable().exactOptional(),
    FumblesOwnRecoveries: z.number().nullable().exactOptional(),
    FumblesRecovered: z.number().exactOptional(),
    GameDate: z.string().nullable().exactOptional(),
    GameKey: z.string().nullable().exactOptional(),
    GlobalGameID: z.int().nullable().exactOptional(),
    GlobalOpponentID: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    Humidity: z.int().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryPractice: z.string().nullable().exactOptional(),
    InjuryPracticeDescription: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    InterceptionReturnTouchdowns: z.number().exactOptional(),
    InterceptionReturnYards: z.number().exactOptional(),
    Interceptions: z.number().exactOptional(),
    IsGameOver: z.boolean().nullable().exactOptional(),
    KickReturnFairCatches: z.number().nullable().exactOptional(),
    KickReturnLong: z.number().exactOptional(),
    KickReturnTouchdowns: z.number().exactOptional(),
    KickReturnYards: z.number().exactOptional(),
    KickReturnYardsPerAttempt: z.number().exactOptional(),
    KickReturns: z.number().exactOptional(),
    MiscAssistedTackles: z.number().exactOptional(),
    MiscFumblesForced: z.number().nullable().exactOptional(),
    MiscFumblesRecovered: z.number().nullable().exactOptional(),
    MiscSoloTackles: z.number().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    OffensiveFumbleRecoveryTouchdowns: z.number().nullable().exactOptional(),
    OffensiveSnapsPlayed: z.int().nullable().exactOptional(),
    OffensiveTeamSnaps: z.int().nullable().exactOptional(),
    OffensiveTouchdowns: z.number().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentID: z.int().nullable().exactOptional(),
    OpponentPositionRank: z.int().nullable().exactOptional(),
    OpponentRank: z.int().nullable().exactOptional(),
    PassesDefended: z.number().exactOptional(),
    PassingAttempts: z.number().exactOptional(),
    PassingCompletionPercentage: z.number().exactOptional(),
    PassingCompletions: z.number().exactOptional(),
    PassingInterceptions: z.number().exactOptional(),
    PassingLong: z.number().exactOptional(),
    PassingRating: z.number().exactOptional(),
    PassingSackYards: z.number().exactOptional(),
    PassingSacks: z.number().exactOptional(),
    PassingTouchdowns: z.number().exactOptional(),
    PassingYards: z.number().exactOptional(),
    PassingYardsPerAttempt: z.number().exactOptional(),
    PassingYardsPerCompletion: z.number().exactOptional(),
    Played: z.int().exactOptional(),
    PlayerGameID: z.int().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PlayingSurface: z.string().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    PuntAverage: z.number().exactOptional(),
    PuntInside20: z.number().nullable().exactOptional(),
    PuntLong: z.number().nullable().exactOptional(),
    PuntNetAverage: z.number().nullable().exactOptional(),
    PuntNetYards: z.number().nullable().exactOptional(),
    PuntReturnFairCatches: z.number().nullable().exactOptional(),
    PuntReturnLong: z.number().exactOptional(),
    PuntReturnTouchdowns: z.number().exactOptional(),
    PuntReturnYards: z.number().exactOptional(),
    PuntReturnYardsPerAttempt: z.number().exactOptional(),
    PuntReturns: z.number().exactOptional(),
    PuntTouchbacks: z.number().nullable().exactOptional(),
    PuntYards: z.number().exactOptional(),
    Punts: z.number().exactOptional(),
    PuntsHadBlocked: z.number().nullable().exactOptional(),
    QuarterbackHits: z.number().nullable().exactOptional(),
    ReceivingLong: z.number().exactOptional(),
    ReceivingTargets: z.number().nullable().exactOptional(),
    ReceivingTouchdowns: z.number().exactOptional(),
    ReceivingYards: z.number().exactOptional(),
    ReceivingYardsPerReception: z.number().exactOptional(),
    ReceivingYardsPerTarget: z.number().exactOptional(),
    ReceptionPercentage: z.number().exactOptional(),
    Receptions: z.number().exactOptional(),
    RushingAttempts: z.number().exactOptional(),
    RushingLong: z.number().exactOptional(),
    RushingTouchdowns: z.number().exactOptional(),
    RushingYards: z.number().exactOptional(),
    RushingYardsPerAttempt: z.number().exactOptional(),
    SackYards: z.number().exactOptional(),
    Sacks: z.number().exactOptional(),
    Safeties: z.number().nullable().exactOptional(),
    SafetiesAllowed: z.number().nullable().exactOptional(),
    ScoreID: z.int().exactOptional(),
    ScoringDetails: z.array(ScoringDetailSchema).exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    SnapCountsConfirmed: z.boolean().nullable().exactOptional(),
    SoloTackles: z.number().exactOptional(),
    SpecialTeamsAssistedTackles: z.number().exactOptional(),
    SpecialTeamsFumblesForced: z.number().nullable().exactOptional(),
    SpecialTeamsFumblesRecovered: z.number().nullable().exactOptional(),
    SpecialTeamsSnapsPlayed: z.int().nullable().exactOptional(),
    SpecialTeamsSoloTackles: z.number().exactOptional(),
    SpecialTeamsTeamSnaps: z.int().nullable().exactOptional(),
    SpecialTeamsTouchdowns: z.number().exactOptional(),
    Stadium: z.string().nullable().exactOptional(),
    Started: z.int().exactOptional(),
    Tackles: z.number().exactOptional(),
    TacklesForLoss: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Temperature: z.int().nullable().exactOptional(),
    Touchdowns: z.number().exactOptional(),
    TwoPointConversionPasses: z.number().exactOptional(),
    TwoPointConversionReceptions: z.number().exactOptional(),
    TwoPointConversionReturns: z.number().nullable().exactOptional(),
    TwoPointConversionRuns: z.number().exactOptional(),
    VictivSalary: z.int().nullable().exactOptional(),
    Week: z.int().exactOptional(),
    WindSpeed: z.int().nullable().exactOptional(),
    YahooPosition: z.string().nullable().exactOptional(),
    YahooSalary: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerGameRedZone')

const PlayerInfoSchema = z
  .object({
    Name: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerInfo')

const PlayerOwnershipSchema = z
  .object({
    DeltaOwnershipPercentage: z.number().nullable().exactOptional(),
    DeltaStartPercentage: z.number().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OwnershipPercentage: z.number().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    StartPercentage: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Week: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerOwnership')

const PlayerSeasonRedZoneSchema = z
  .object({
    Activated: z.int().exactOptional(),
    AssistedTackles: z.number().exactOptional(),
    AuctionValue: z.number().nullable().exactOptional(),
    AuctionValuePPR: z.number().nullable().exactOptional(),
    AverageDraftPosition: z.number().nullable().exactOptional(),
    AverageDraftPosition2QB: z.number().nullable().exactOptional(),
    AverageDraftPositionDynasty: z.number().nullable().exactOptional(),
    AverageDraftPositionPPR: z.number().nullable().exactOptional(),
    AverageDraftPositionRookie: z.number().nullable().exactOptional(),
    BlockedKickReturnTouchdowns: z.number().nullable().exactOptional(),
    BlockedKickReturnYards: z.number().nullable().exactOptional(),
    BlockedKicks: z.number().exactOptional(),
    DefensiveSnapsPlayed: z.int().nullable().exactOptional(),
    DefensiveTeamSnaps: z.int().nullable().exactOptional(),
    DefensiveTouchdowns: z.number().exactOptional(),
    ExtraPointsAttempted: z.number().nullable().exactOptional(),
    ExtraPointsHadBlocked: z.number().nullable().exactOptional(),
    ExtraPointsMade: z.number().exactOptional(),
    FantasyPoints: z.number().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsPPR: z.number().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    FieldGoalPercentage: z.number().exactOptional(),
    FieldGoalReturnTouchdowns: z.number().nullable().exactOptional(),
    FieldGoalReturnYards: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.number().exactOptional(),
    FieldGoalsHadBlocked: z.number().nullable().exactOptional(),
    FieldGoalsLongestMade: z.number().exactOptional(),
    FieldGoalsMade: z.number().exactOptional(),
    FieldGoalsMade0to19: z.number().nullable().exactOptional(),
    FieldGoalsMade20to29: z.number().nullable().exactOptional(),
    FieldGoalsMade30to39: z.number().nullable().exactOptional(),
    FieldGoalsMade40to49: z.number().nullable().exactOptional(),
    FieldGoalsMade50Plus: z.number().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.number().exactOptional(),
    FumbleReturnYards: z.number().exactOptional(),
    Fumbles: z.number().exactOptional(),
    FumblesForced: z.number().exactOptional(),
    FumblesLost: z.number().nullable().exactOptional(),
    FumblesOutOfBounds: z.number().nullable().exactOptional(),
    FumblesOwnRecoveries: z.number().nullable().exactOptional(),
    FumblesRecovered: z.number().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Humidity: z.int().nullable().exactOptional(),
    InterceptionReturnTouchdowns: z.number().exactOptional(),
    InterceptionReturnYards: z.number().exactOptional(),
    Interceptions: z.number().exactOptional(),
    KickReturnFairCatches: z.number().nullable().exactOptional(),
    KickReturnLong: z.number().exactOptional(),
    KickReturnTouchdowns: z.number().exactOptional(),
    KickReturnYards: z.number().exactOptional(),
    KickReturnYardsPerAttempt: z.number().exactOptional(),
    KickReturns: z.number().exactOptional(),
    MiscAssistedTackles: z.number().exactOptional(),
    MiscFumblesForced: z.number().nullable().exactOptional(),
    MiscFumblesRecovered: z.number().nullable().exactOptional(),
    MiscSoloTackles: z.number().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    OffensiveFumbleRecoveryTouchdowns: z.int().nullable().exactOptional(),
    OffensiveSnapsPlayed: z.int().nullable().exactOptional(),
    OffensiveTeamSnaps: z.int().nullable().exactOptional(),
    OffensiveTouchdowns: z.number().exactOptional(),
    PassesDefended: z.number().exactOptional(),
    PassingAttempts: z.number().exactOptional(),
    PassingCompletionPercentage: z.number().exactOptional(),
    PassingCompletions: z.number().exactOptional(),
    PassingInterceptions: z.number().exactOptional(),
    PassingLong: z.number().exactOptional(),
    PassingRating: z.number().exactOptional(),
    PassingSackYards: z.number().exactOptional(),
    PassingSacks: z.number().exactOptional(),
    PassingTouchdowns: z.number().exactOptional(),
    PassingYards: z.number().exactOptional(),
    PassingYardsPerAttempt: z.number().exactOptional(),
    PassingYardsPerCompletion: z.number().exactOptional(),
    Played: z.int().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PlayerSeasonID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    PuntAverage: z.number().exactOptional(),
    PuntInside20: z.number().nullable().exactOptional(),
    PuntLong: z.number().nullable().exactOptional(),
    PuntNetAverage: z.number().nullable().exactOptional(),
    PuntNetYards: z.number().nullable().exactOptional(),
    PuntReturnFairCatches: z.number().nullable().exactOptional(),
    PuntReturnLong: z.number().exactOptional(),
    PuntReturnTouchdowns: z.number().exactOptional(),
    PuntReturnYards: z.number().exactOptional(),
    PuntReturnYardsPerAttempt: z.number().exactOptional(),
    PuntReturns: z.number().exactOptional(),
    PuntTouchbacks: z.number().nullable().exactOptional(),
    PuntYards: z.number().exactOptional(),
    Punts: z.number().exactOptional(),
    PuntsHadBlocked: z.number().nullable().exactOptional(),
    QuarterbackHits: z.number().nullable().exactOptional(),
    ReceivingLong: z.number().exactOptional(),
    ReceivingTargets: z.number().nullable().exactOptional(),
    ReceivingTouchdowns: z.number().exactOptional(),
    ReceivingYards: z.number().exactOptional(),
    ReceivingYardsPerReception: z.number().exactOptional(),
    ReceivingYardsPerTarget: z.number().exactOptional(),
    ReceptionPercentage: z.number().exactOptional(),
    Receptions: z.number().exactOptional(),
    RushingAttempts: z.number().exactOptional(),
    RushingLong: z.number().exactOptional(),
    RushingTouchdowns: z.number().exactOptional(),
    RushingYards: z.number().exactOptional(),
    RushingYardsPerAttempt: z.number().exactOptional(),
    SackYards: z.number().exactOptional(),
    Sacks: z.number().exactOptional(),
    Safeties: z.number().nullable().exactOptional(),
    SafetiesAllowed: z.number().nullable().exactOptional(),
    ScoringDetails: z.array(ScoringDetailSchema).exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    SoloTackles: z.number().exactOptional(),
    SpecialTeamsAssistedTackles: z.number().exactOptional(),
    SpecialTeamsFumblesForced: z.number().nullable().exactOptional(),
    SpecialTeamsFumblesRecovered: z.number().nullable().exactOptional(),
    SpecialTeamsSnapsPlayed: z.int().nullable().exactOptional(),
    SpecialTeamsSoloTackles: z.number().exactOptional(),
    SpecialTeamsTeamSnaps: z.int().nullable().exactOptional(),
    SpecialTeamsTouchdowns: z.number().exactOptional(),
    Started: z.int().exactOptional(),
    Tackles: z.number().exactOptional(),
    TacklesForLoss: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Temperature: z.int().nullable().exactOptional(),
    Touchdowns: z.number().exactOptional(),
    TwoPointConversionPasses: z.number().exactOptional(),
    TwoPointConversionReceptions: z.number().exactOptional(),
    TwoPointConversionReturns: z.number().nullable().exactOptional(),
    TwoPointConversionRuns: z.number().exactOptional(),
    WindSpeed: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerSeasonRedZone')

const PlayerSeasonThirdDownSchema = z
  .object({
    Activated: z.int().exactOptional(),
    AssistedTackles: z.number().exactOptional(),
    AuctionValue: z.number().nullable().exactOptional(),
    AuctionValuePPR: z.number().nullable().exactOptional(),
    AverageDraftPosition: z.number().nullable().exactOptional(),
    AverageDraftPosition2QB: z.number().nullable().exactOptional(),
    AverageDraftPositionDynasty: z.number().nullable().exactOptional(),
    AverageDraftPositionPPR: z.number().nullable().exactOptional(),
    AverageDraftPositionRookie: z.number().nullable().exactOptional(),
    BlockedKickReturnTouchdowns: z.number().nullable().exactOptional(),
    BlockedKickReturnYards: z.number().nullable().exactOptional(),
    BlockedKicks: z.number().exactOptional(),
    DefensiveSnapsPlayed: z.int().nullable().exactOptional(),
    DefensiveTeamSnaps: z.int().nullable().exactOptional(),
    DefensiveTouchdowns: z.number().exactOptional(),
    ExtraPointsAttempted: z.number().nullable().exactOptional(),
    ExtraPointsHadBlocked: z.number().nullable().exactOptional(),
    ExtraPointsMade: z.number().exactOptional(),
    FantasyPoints: z.number().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsFantasyDraft: z.number().nullable().exactOptional(),
    FantasyPointsPPR: z.number().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    FantasyPosition: z.string().nullable().exactOptional(),
    FieldGoalPercentage: z.number().exactOptional(),
    FieldGoalReturnTouchdowns: z.number().nullable().exactOptional(),
    FieldGoalReturnYards: z.number().nullable().exactOptional(),
    FieldGoalsAttempted: z.number().exactOptional(),
    FieldGoalsHadBlocked: z.number().nullable().exactOptional(),
    FieldGoalsLongestMade: z.number().exactOptional(),
    FieldGoalsMade: z.number().exactOptional(),
    FieldGoalsMade0to19: z.number().nullable().exactOptional(),
    FieldGoalsMade20to29: z.number().nullable().exactOptional(),
    FieldGoalsMade30to39: z.number().nullable().exactOptional(),
    FieldGoalsMade40to49: z.number().nullable().exactOptional(),
    FieldGoalsMade50Plus: z.number().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.number().exactOptional(),
    FumbleReturnYards: z.number().exactOptional(),
    Fumbles: z.number().exactOptional(),
    FumblesForced: z.number().exactOptional(),
    FumblesLost: z.number().nullable().exactOptional(),
    FumblesOutOfBounds: z.number().nullable().exactOptional(),
    FumblesOwnRecoveries: z.number().nullable().exactOptional(),
    FumblesRecovered: z.number().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Humidity: z.int().nullable().exactOptional(),
    InterceptionReturnTouchdowns: z.number().exactOptional(),
    InterceptionReturnYards: z.number().exactOptional(),
    Interceptions: z.number().exactOptional(),
    KickReturnFairCatches: z.number().nullable().exactOptional(),
    KickReturnLong: z.number().exactOptional(),
    KickReturnTouchdowns: z.number().exactOptional(),
    KickReturnYards: z.number().exactOptional(),
    KickReturnYardsPerAttempt: z.number().exactOptional(),
    KickReturns: z.number().exactOptional(),
    MiscAssistedTackles: z.number().exactOptional(),
    MiscFumblesForced: z.number().nullable().exactOptional(),
    MiscFumblesRecovered: z.number().nullable().exactOptional(),
    MiscSoloTackles: z.number().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Number: z.int().exactOptional(),
    OffensiveFumbleRecoveryTouchdowns: z.int().nullable().exactOptional(),
    OffensiveSnapsPlayed: z.int().nullable().exactOptional(),
    OffensiveTeamSnaps: z.int().nullable().exactOptional(),
    OffensiveTouchdowns: z.number().exactOptional(),
    PassesDefended: z.number().exactOptional(),
    PassingAttempts: z.number().exactOptional(),
    PassingCompletionPercentage: z.number().exactOptional(),
    PassingCompletions: z.number().exactOptional(),
    PassingInterceptions: z.number().exactOptional(),
    PassingLong: z.number().exactOptional(),
    PassingRating: z.number().exactOptional(),
    PassingSackYards: z.number().exactOptional(),
    PassingSacks: z.number().exactOptional(),
    PassingTouchdowns: z.number().exactOptional(),
    PassingYards: z.number().exactOptional(),
    PassingYardsPerAttempt: z.number().exactOptional(),
    PassingYardsPerCompletion: z.number().exactOptional(),
    Played: z.int().exactOptional(),
    PlayerID: z.int().nullable().exactOptional(),
    PlayerSeasonID: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    PuntAverage: z.number().exactOptional(),
    PuntInside20: z.number().nullable().exactOptional(),
    PuntLong: z.number().nullable().exactOptional(),
    PuntNetAverage: z.number().nullable().exactOptional(),
    PuntNetYards: z.number().nullable().exactOptional(),
    PuntReturnFairCatches: z.number().nullable().exactOptional(),
    PuntReturnLong: z.number().exactOptional(),
    PuntReturnTouchdowns: z.number().exactOptional(),
    PuntReturnYards: z.number().exactOptional(),
    PuntReturnYardsPerAttempt: z.number().exactOptional(),
    PuntReturns: z.number().exactOptional(),
    PuntTouchbacks: z.number().nullable().exactOptional(),
    PuntYards: z.number().exactOptional(),
    Punts: z.number().exactOptional(),
    PuntsHadBlocked: z.number().nullable().exactOptional(),
    QuarterbackHits: z.number().nullable().exactOptional(),
    ReceivingLong: z.number().exactOptional(),
    ReceivingTargets: z.number().nullable().exactOptional(),
    ReceivingTouchdowns: z.number().exactOptional(),
    ReceivingYards: z.number().exactOptional(),
    ReceivingYardsPerReception: z.number().exactOptional(),
    ReceivingYardsPerTarget: z.number().exactOptional(),
    ReceptionPercentage: z.number().exactOptional(),
    Receptions: z.number().exactOptional(),
    RushingAttempts: z.number().exactOptional(),
    RushingLong: z.number().exactOptional(),
    RushingTouchdowns: z.number().exactOptional(),
    RushingYards: z.number().exactOptional(),
    RushingYardsPerAttempt: z.number().exactOptional(),
    SackYards: z.number().exactOptional(),
    Sacks: z.number().exactOptional(),
    Safeties: z.number().nullable().exactOptional(),
    SafetiesAllowed: z.number().nullable().exactOptional(),
    ScoringDetails: z.array(ScoringDetailSchema).exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    SoloTackles: z.number().exactOptional(),
    SpecialTeamsAssistedTackles: z.number().exactOptional(),
    SpecialTeamsFumblesForced: z.number().nullable().exactOptional(),
    SpecialTeamsFumblesRecovered: z.number().nullable().exactOptional(),
    SpecialTeamsSnapsPlayed: z.int().nullable().exactOptional(),
    SpecialTeamsSoloTackles: z.number().exactOptional(),
    SpecialTeamsTeamSnaps: z.int().nullable().exactOptional(),
    SpecialTeamsTouchdowns: z.number().exactOptional(),
    Started: z.int().exactOptional(),
    Tackles: z.number().exactOptional(),
    TacklesForLoss: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    Temperature: z.int().nullable().exactOptional(),
    Touchdowns: z.number().exactOptional(),
    TwoPointConversionPasses: z.number().exactOptional(),
    TwoPointConversionReceptions: z.number().exactOptional(),
    TwoPointConversionReturns: z.number().nullable().exactOptional(),
    TwoPointConversionRuns: z.number().exactOptional(),
    WindSpeed: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerSeasonThirdDown')

const StandingSchema = z
  .object({
    Conference: z.string().nullable().exactOptional(),
    ConferenceLosses: z.int().exactOptional(),
    ConferenceRank: z.int().exactOptional(),
    ConferenceTies: z.int().exactOptional(),
    ConferenceWins: z.int().exactOptional(),
    Division: z.string().nullable().exactOptional(),
    DivisionLosses: z.int().exactOptional(),
    DivisionRank: z.int().exactOptional(),
    DivisionTies: z.int().exactOptional(),
    DivisionWins: z.int().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    Losses: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    NetPoints: z.int().exactOptional(),
    Percentage: z.number().exactOptional(),
    PointsAgainst: z.int().exactOptional(),
    PointsFor: z.int().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().exactOptional(),
    Ties: z.int().exactOptional(),
    Touchdowns: z.int().nullable().exactOptional(),
    Wins: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Standing')

const TeamSchema = z
  .object({
    AverageDraftPosition: z.number().nullable().exactOptional(),
    AverageDraftPosition2QB: z.number().nullable().exactOptional(),
    AverageDraftPositionDynasty: z.number().nullable().exactOptional(),
    AverageDraftPositionPPR: z.number().nullable().exactOptional(),
    ByeWeek: z.int().nullable().exactOptional(),
    City: z.string().nullable().exactOptional(),
    Conference: z.string().nullable().exactOptional(),
    DefensiveCoordinator: z.string().nullable().exactOptional(),
    DefensiveScheme: z.string().nullable().exactOptional(),
    Division: z.string().nullable().exactOptional(),
    DraftKingsName: z.string().nullable().exactOptional(),
    DraftKingsPlayerID: z.int().nullable().exactOptional(),
    FanDuelName: z.string().nullable().exactOptional(),
    FanDuelPlayerID: z.int().nullable().exactOptional(),
    FantasyDraftName: z.string().nullable().exactOptional(),
    FantasyDraftPlayerID: z.int().nullable().exactOptional(),
    FullName: z.string().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    HeadCoach: z.string().nullable().exactOptional(),
    Key: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    OffensiveCoordinator: z.string().nullable().exactOptional(),
    OffensiveScheme: z.string().nullable().exactOptional(),
    PlayerID: z.int().exactOptional(),
    PrimaryColor: z.string().nullable().exactOptional(),
    QuaternaryColor: z.string().nullable().exactOptional(),
    SecondaryColor: z.string().nullable().exactOptional(),
    SpecialTeamsCoach: z.string().nullable().exactOptional(),
    StadiumDetails: StadiumSchema.exactOptional(),
    StadiumID: z.int().nullable().exactOptional(),
    TeamID: z.int().exactOptional(),
    TertiaryColor: z.string().nullable().exactOptional(),
    UpcomingDraftKingsSalary: z.int().nullable().exactOptional(),
    UpcomingFanDuelSalary: z.int().nullable().exactOptional(),
    UpcomingOpponent: z.string().nullable().exactOptional(),
    UpcomingOpponentPositionRank: z.int().nullable().exactOptional(),
    UpcomingOpponentRank: z.int().nullable().exactOptional(),
    UpcomingSalary: z.int().nullable().exactOptional(),
    UpcomingYahooSalary: z.int().nullable().exactOptional(),
    WikipediaLogoUrl: z.string().nullable().exactOptional(),
    WikipediaWordMarkUrl: z.string().nullable().exactOptional(),
    YahooName: z.string().nullable().exactOptional(),
    YahooPlayerID: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Team')

const TeamSeasonSchema = z
  .object({
    AssistedTackles: z.int().nullable().exactOptional(),
    BlockedKickReturnTouchdowns: z.int().nullable().exactOptional(),
    BlockedKickReturnYards: z.int().nullable().exactOptional(),
    BlockedKicks: z.int().nullable().exactOptional(),
    CompletionPercentage: z.number().exactOptional(),
    ExtraPointKickingAttempts: z.int().nullable().exactOptional(),
    ExtraPointKickingConversions: z.int().nullable().exactOptional(),
    ExtraPointPassingAttempts: z.int().nullable().exactOptional(),
    ExtraPointPassingConversions: z.int().nullable().exactOptional(),
    ExtraPointPercentage: z.number().nullable().exactOptional(),
    ExtraPointRushingAttempts: z.int().nullable().exactOptional(),
    ExtraPointRushingConversions: z.int().nullable().exactOptional(),
    ExtraPointsHadBlocked: z.int().nullable().exactOptional(),
    FieldGoalAttempts: z.int().nullable().exactOptional(),
    FieldGoalPercentage: z.number().nullable().exactOptional(),
    FieldGoalReturnTouchdowns: z.int().nullable().exactOptional(),
    FieldGoalReturnYards: z.int().nullable().exactOptional(),
    FieldGoalsHadBlocked: z.int().nullable().exactOptional(),
    FieldGoalsMade: z.int().nullable().exactOptional(),
    FirstDowns: z.int().nullable().exactOptional(),
    FirstDownsByPassing: z.int().nullable().exactOptional(),
    FirstDownsByPenalty: z.int().nullable().exactOptional(),
    FirstDownsByRushing: z.int().nullable().exactOptional(),
    FourthDownAttempts: z.int().nullable().exactOptional(),
    FourthDownConversions: z.int().nullable().exactOptional(),
    FourthDownPercentage: z.number().nullable().exactOptional(),
    FumbleReturnTouchdowns: z.int().nullable().exactOptional(),
    FumbleReturnYards: z.int().nullable().exactOptional(),
    Fumbles: z.int().nullable().exactOptional(),
    FumblesForced: z.int().nullable().exactOptional(),
    FumblesLost: z.int().nullable().exactOptional(),
    FumblesRecovered: z.int().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    Giveaways: z.int().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    GoalToGoAttempts: z.int().nullable().exactOptional(),
    GoalToGoConversions: z.int().nullable().exactOptional(),
    GoalToGoPercentage: z.number().nullable().exactOptional(),
    Humidity: z.int().nullable().exactOptional(),
    InterceptionReturnTouchdowns: z.int().nullable().exactOptional(),
    InterceptionReturnYards: z.int().nullable().exactOptional(),
    InterceptionReturns: z.int().nullable().exactOptional(),
    KickReturnAverage: z.number().nullable().exactOptional(),
    KickReturnLong: z.int().nullable().exactOptional(),
    KickReturnTouchdowns: z.int().nullable().exactOptional(),
    KickReturnYardDifferential: z.int().nullable().exactOptional(),
    KickReturnYards: z.int().nullable().exactOptional(),
    KickReturns: z.int().nullable().exactOptional(),
    KickoffTouchbacks: z.int().nullable().exactOptional(),
    Kickoffs: z.int().nullable().exactOptional(),
    KickoffsInEndZone: z.int().nullable().exactOptional(),
    OffensivePlays: z.int().exactOptional(),
    OffensiveYards: z.int().exactOptional(),
    OffensiveYardsPerPlay: z.number().exactOptional(),
    OpponentAssistedTackles: z.int().nullable().exactOptional(),
    OpponentBlockedKickReturnTouchdowns: z.int().nullable().exactOptional(),
    OpponentBlockedKickReturnYards: z.int().nullable().exactOptional(),
    OpponentBlockedKicks: z.int().nullable().exactOptional(),
    OpponentCompletionPercentage: z.number().exactOptional(),
    OpponentExtraPointKickingAttempts: z.int().nullable().exactOptional(),
    OpponentExtraPointKickingConversions: z.int().nullable().exactOptional(),
    OpponentExtraPointPassingAttempts: z.int().nullable().exactOptional(),
    OpponentExtraPointPassingConversions: z.int().nullable().exactOptional(),
    OpponentExtraPointPercentage: z.number().nullable().exactOptional(),
    OpponentExtraPointRushingAttempts: z.int().nullable().exactOptional(),
    OpponentExtraPointRushingConversions: z.int().nullable().exactOptional(),
    OpponentExtraPointsHadBlocked: z.int().nullable().exactOptional(),
    OpponentFieldGoalAttempts: z.int().nullable().exactOptional(),
    OpponentFieldGoalPercentage: z.number().nullable().exactOptional(),
    OpponentFieldGoalReturnTouchdowns: z.int().nullable().exactOptional(),
    OpponentFieldGoalReturnYards: z.int().nullable().exactOptional(),
    OpponentFieldGoalsHadBlocked: z.int().nullable().exactOptional(),
    OpponentFieldGoalsMade: z.int().nullable().exactOptional(),
    OpponentFirstDowns: z.int().nullable().exactOptional(),
    OpponentFirstDownsByPassing: z.int().nullable().exactOptional(),
    OpponentFirstDownsByPenalty: z.int().nullable().exactOptional(),
    OpponentFirstDownsByRushing: z.int().nullable().exactOptional(),
    OpponentFourthDownAttempts: z.int().nullable().exactOptional(),
    OpponentFourthDownConversions: z.int().nullable().exactOptional(),
    OpponentFourthDownPercentage: z.number().nullable().exactOptional(),
    OpponentFumbleReturnTouchdowns: z.int().nullable().exactOptional(),
    OpponentFumbleReturnYards: z.int().nullable().exactOptional(),
    OpponentFumbles: z.int().nullable().exactOptional(),
    OpponentFumblesForced: z.int().nullable().exactOptional(),
    OpponentFumblesLost: z.int().nullable().exactOptional(),
    OpponentFumblesRecovered: z.int().nullable().exactOptional(),
    OpponentGiveaways: z.int().exactOptional(),
    OpponentGoalToGoAttempts: z.int().nullable().exactOptional(),
    OpponentGoalToGoConversions: z.int().nullable().exactOptional(),
    OpponentGoalToGoPercentage: z.number().nullable().exactOptional(),
    OpponentInterceptionReturnTouchdowns: z.int().nullable().exactOptional(),
    OpponentInterceptionReturnYards: z.int().nullable().exactOptional(),
    OpponentInterceptionReturns: z.int().nullable().exactOptional(),
    OpponentKickReturnAverage: z.number().nullable().exactOptional(),
    OpponentKickReturnLong: z.int().nullable().exactOptional(),
    OpponentKickReturnTouchdowns: z.int().nullable().exactOptional(),
    OpponentKickReturnYards: z.int().nullable().exactOptional(),
    OpponentKickReturns: z.int().nullable().exactOptional(),
    OpponentKickoffTouchbacks: z.int().nullable().exactOptional(),
    OpponentKickoffs: z.int().nullable().exactOptional(),
    OpponentKickoffsInEndZone: z.int().nullable().exactOptional(),
    OpponentOffensivePlays: z.int().exactOptional(),
    OpponentOffensiveYards: z.int().exactOptional(),
    OpponentOffensiveYardsPerPlay: z.number().exactOptional(),
    OpponentPasserRating: z.number().nullable().exactOptional(),
    OpponentPassesDefended: z.int().nullable().exactOptional(),
    OpponentPassingAttempts: z.int().nullable().exactOptional(),
    OpponentPassingCompletions: z.int().nullable().exactOptional(),
    OpponentPassingDropbacks: z.int().nullable().exactOptional(),
    OpponentPassingInterceptionPercentage: z.number().nullable().exactOptional(),
    OpponentPassingInterceptions: z.int().nullable().exactOptional(),
    OpponentPassingTouchdowns: z.int().nullable().exactOptional(),
    OpponentPassingYards: z.int().nullable().exactOptional(),
    OpponentPassingYardsPerAttempt: z.number().exactOptional(),
    OpponentPassingYardsPerCompletion: z.number().exactOptional(),
    OpponentPenalties: z.int().nullable().exactOptional(),
    OpponentPenaltyYards: z.int().nullable().exactOptional(),
    OpponentPuntAverage: z.number().exactOptional(),
    OpponentPuntNetAverage: z.number().nullable().exactOptional(),
    OpponentPuntNetYards: z.int().nullable().exactOptional(),
    OpponentPuntReturnAverage: z.number().nullable().exactOptional(),
    OpponentPuntReturnLong: z.int().nullable().exactOptional(),
    OpponentPuntReturnTouchdowns: z.int().nullable().exactOptional(),
    OpponentPuntReturnYards: z.int().nullable().exactOptional(),
    OpponentPuntReturns: z.int().nullable().exactOptional(),
    OpponentPuntYards: z.int().nullable().exactOptional(),
    OpponentPunts: z.int().nullable().exactOptional(),
    OpponentPuntsHadBlocked: z.int().nullable().exactOptional(),
    OpponentQuarterbackHits: z.int().nullable().exactOptional(),
    OpponentQuarterbackHitsDifferential: z.int().nullable().exactOptional(),
    OpponentQuarterbackHitsPercentage: z.number().nullable().exactOptional(),
    OpponentQuarterbackSacksDifferential: z.int().nullable().exactOptional(),
    OpponentRedZoneAttempts: z.int().nullable().exactOptional(),
    OpponentRedZoneConversions: z.int().nullable().exactOptional(),
    OpponentRedZonePercentage: z.number().nullable().exactOptional(),
    OpponentReturnYards: z.int().nullable().exactOptional(),
    OpponentRushingAttempts: z.int().nullable().exactOptional(),
    OpponentRushingTouchdowns: z.int().nullable().exactOptional(),
    OpponentRushingYards: z.int().nullable().exactOptional(),
    OpponentRushingYardsPerAttempt: z.number().exactOptional(),
    OpponentSackYards: z.int().nullable().exactOptional(),
    OpponentSacks: z.int().nullable().exactOptional(),
    OpponentSafeties: z.int().nullable().exactOptional(),
    OpponentScore: z.int().exactOptional(),
    OpponentScoreOvertime: z.int().exactOptional(),
    OpponentScoreQuarter1: z.int().nullable().exactOptional(),
    OpponentScoreQuarter2: z.int().nullable().exactOptional(),
    OpponentScoreQuarter3: z.int().nullable().exactOptional(),
    OpponentScoreQuarter4: z.int().nullable().exactOptional(),
    OpponentSoloTackles: z.int().nullable().exactOptional(),
    OpponentTacklesForLoss: z.int().nullable().exactOptional(),
    OpponentTacklesForLossDifferential: z.int().nullable().exactOptional(),
    OpponentTacklesForLossPercentage: z.number().nullable().exactOptional(),
    OpponentTakeaways: z.int().exactOptional(),
    OpponentThirdDownAttempts: z.int().nullable().exactOptional(),
    OpponentThirdDownConversions: z.int().nullable().exactOptional(),
    OpponentThirdDownPercentage: z.number().nullable().exactOptional(),
    OpponentTimeOfPossession: z.string().nullable().exactOptional(),
    OpponentTimesSacked: z.int().nullable().exactOptional(),
    OpponentTimesSackedPercentage: z.number().exactOptional(),
    OpponentTimesSackedYards: z.int().nullable().exactOptional(),
    OpponentTouchdowns: z.int().nullable().exactOptional(),
    OpponentTurnoverDifferential: z.int().exactOptional(),
    OpponentTwoPointConversionReturns: z.int().nullable().exactOptional(),
    OverUnder: z.number().nullable().exactOptional(),
    PasserRating: z.number().nullable().exactOptional(),
    PassesDefended: z.int().nullable().exactOptional(),
    PassingAttempts: z.int().nullable().exactOptional(),
    PassingCompletions: z.int().nullable().exactOptional(),
    PassingDropbacks: z.int().nullable().exactOptional(),
    PassingInterceptionPercentage: z.number().nullable().exactOptional(),
    PassingInterceptions: z.int().nullable().exactOptional(),
    PassingTouchdowns: z.int().nullable().exactOptional(),
    PassingYards: z.int().nullable().exactOptional(),
    PassingYardsPerAttempt: z.number().exactOptional(),
    PassingYardsPerCompletion: z.number().exactOptional(),
    Penalties: z.int().nullable().exactOptional(),
    PenaltyYardDifferential: z.int().nullable().exactOptional(),
    PenaltyYards: z.int().nullable().exactOptional(),
    PointDifferential: z.int().nullable().exactOptional(),
    PointSpread: z.number().nullable().exactOptional(),
    PuntAverage: z.number().exactOptional(),
    PuntNetAverage: z.number().nullable().exactOptional(),
    PuntNetYards: z.int().nullable().exactOptional(),
    PuntReturnAverage: z.number().nullable().exactOptional(),
    PuntReturnLong: z.int().nullable().exactOptional(),
    PuntReturnTouchdowns: z.int().nullable().exactOptional(),
    PuntReturnYardDifferential: z.int().nullable().exactOptional(),
    PuntReturnYards: z.int().nullable().exactOptional(),
    PuntReturns: z.int().nullable().exactOptional(),
    PuntYards: z.int().nullable().exactOptional(),
    Punts: z.int().nullable().exactOptional(),
    PuntsHadBlocked: z.int().nullable().exactOptional(),
    QuarterbackHits: z.int().nullable().exactOptional(),
    QuarterbackHitsDifferential: z.int().nullable().exactOptional(),
    QuarterbackHitsPercentage: z.number().nullable().exactOptional(),
    QuarterbackSacksDifferential: z.int().exactOptional(),
    RedZoneAttempts: z.int().nullable().exactOptional(),
    RedZoneConversions: z.int().nullable().exactOptional(),
    RedZonePercentage: z.number().nullable().exactOptional(),
    ReturnYards: z.int().nullable().exactOptional(),
    RushingAttempts: z.int().nullable().exactOptional(),
    RushingTouchdowns: z.int().nullable().exactOptional(),
    RushingYards: z.int().nullable().exactOptional(),
    RushingYardsPerAttempt: z.number().exactOptional(),
    SackYards: z.int().nullable().exactOptional(),
    Sacks: z.int().nullable().exactOptional(),
    Safeties: z.int().nullable().exactOptional(),
    Score: z.int().exactOptional(),
    ScoreOvertime: z.int().exactOptional(),
    ScoreQuarter1: z.int().nullable().exactOptional(),
    ScoreQuarter2: z.int().nullable().exactOptional(),
    ScoreQuarter3: z.int().nullable().exactOptional(),
    ScoreQuarter4: z.int().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    SoloTackles: z.int().nullable().exactOptional(),
    TacklesForLoss: z.int().nullable().exactOptional(),
    TacklesForLossDifferential: z.int().nullable().exactOptional(),
    TacklesForLossPercentage: z.number().nullable().exactOptional(),
    Takeaways: z.int().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamID: z.int().nullable().exactOptional(),
    TeamName: z.string().nullable().exactOptional(),
    TeamSeasonID: z.int().exactOptional(),
    TeamStatID: z.int().exactOptional(),
    Temperature: z.int().nullable().exactOptional(),
    ThirdDownAttempts: z.int().nullable().exactOptional(),
    ThirdDownConversions: z.int().nullable().exactOptional(),
    ThirdDownPercentage: z.number().nullable().exactOptional(),
    TimeOfPossession: z.string().nullable().exactOptional(),
    TimesSacked: z.int().nullable().exactOptional(),
    TimesSackedPercentage: z.number().exactOptional(),
    TimesSackedYards: z.int().nullable().exactOptional(),
    TotalScore: z.int().exactOptional(),
    Touchdowns: z.int().nullable().exactOptional(),
    TurnoverDifferential: z.int().exactOptional(),
    TwoPointConversionReturns: z.int().nullable().exactOptional(),
    WindSpeed: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamSeason')

const TimeframeSchema = z
  .object({
    ApiSeason: z.string().nullable().exactOptional(),
    ApiWeek: z.string().nullable().exactOptional(),
    EndDate: z.string().nullable().exactOptional(),
    FirstGameEnd: z.string().nullable().exactOptional(),
    FirstGameStart: z.string().nullable().exactOptional(),
    HasEnded: z.boolean().exactOptional(),
    HasFirstGameEnded: z.boolean().exactOptional(),
    HasFirstGameStarted: z.boolean().exactOptional(),
    HasGames: z.boolean().exactOptional(),
    HasLastGameEnded: z.boolean().exactOptional(),
    HasStarted: z.boolean().exactOptional(),
    LastGameEnd: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    StartDate: z.string().nullable().exactOptional(),
    Week: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Timeframe')

const ApiKeyHeaderSecurityScheme = {
  in: 'header',
  name: 'Ocp-Apim-Subscription-Key',
  type: 'apiKey',
}

const ApiKeyQuerySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const getFormatActiveBoxScoresRoute = createRoute({
  method: 'get',
  path: '/{format}/ActiveBoxScores',
  summary: 'Legacy Box Scores Active',
  description:
    'This method returns box scores for all games that are either in-progress or have been updated within the last 30 minutes.',
  operationId: 'LegacyBoxScoresActive',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(BoxScoreSchema) } } },
  },
})

export const getFormatAllTeamsRoute = createRoute({
  method: 'get',
  path: '/{format}/AllTeams',
  summary: 'Teams (All)',
  description: 'Gets all teams, including pro bowl teams.',
  operationId: 'TeamsAll',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(TeamSchema) } } },
  },
})

export const getFormatAreAnyGamesInProgressRoute = createRoute({
  method: 'get',
  path: '/{format}/AreAnyGamesInProgress',
  summary: 'Are Games In Progress',
  description:
    'Returns <code>true</code> if there is at least one game being played at the time of the request or <code>false</code> if there are none.',
  operationId: 'AreGamesInProgress',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: '', content: { 'application/json': { schema: z.boolean() } } } },
})

export const getFormatBoxScoreSeasonWeekHometeamRoute = createRoute({
  method: 'get',
  path: '/{format}/BoxScore/{season}/{week}/{hometeam}',
  summary: 'Legacy Box Score',
  operationId: 'LegacyBoxScore',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
      hometeam: z
        .string()
        .openapi({
          param: {
            description: 'Abbreviation of the home team. Example: <code>WAS</code>.',
            in: 'path',
            name: 'hometeam',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: BoxScoreSchema } } },
  },
})

export const getFormatBoxScoreByScoreIDV3ScoreidRoute = createRoute({
  method: 'get',
  path: '/{format}/BoxScoreByScoreIDV3/{scoreid}',
  summary: 'Box Score by ScoreID V3',
  operationId: 'BoxScoreByScoreidV',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      scoreid: z
        .string()
        .openapi({
          param: {
            description:
              'The ScoreID of the game. Possible values include: <code>16247</code>, <code>16245</code>, etc.',
            in: 'path',
            name: 'scoreid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: BoxScoreV3Schema } } },
  },
})

export const getFormatBoxScoreV3SeasonWeekHometeamRoute = createRoute({
  method: 'get',
  path: '/{format}/BoxScoreV3/{season}/{week}/{hometeam}',
  summary: 'Box Score V3',
  operationId: 'BoxScoreV',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
      hometeam: z
        .string()
        .openapi({
          param: {
            description: 'Abbreviation of a team playing in this game. Example: <code>WAS</code>.',
            in: 'path',
            name: 'hometeam',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: BoxScoreV3Schema } } },
  },
})

export const getFormatBoxScoresSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/BoxScores/{season}/{week}',
  summary: 'Legacy Box Scores',
  description: 'This method returns all box scores for a given season and week.',
  operationId: 'LegacyBoxScores',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(BoxScoreSchema) } } },
  },
})

export const getFormatBoxScoresDeltaSeasonWeekMinutesRoute = createRoute({
  method: 'get',
  path: '/{format}/BoxScoresDelta/{season}/{week}/{minutes}',
  summary: 'Legacy Box Scores Delta',
  description:
    'This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes.',
  operationId: 'LegacyBoxScoresDelta',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
      minutes: z
        .string()
        .openapi({
          param: {
            description:
              'Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br>\n          <code>1</code> or <code>2</code>.\n        ',
            in: 'path',
            name: 'minutes',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(BoxScoreSchema) } } },
  },
})

export const getFormatBoxScoresDeltaV3SeasonWeekPlayerstoincludeMinutesRoute = createRoute({
  method: 'get',
  path: '/{format}/BoxScoresDeltaV3/{season}/{week}/{playerstoinclude}/{minutes}',
  summary: 'Box Scores Delta V3',
  description:
    'This method returns all box scores for a given season and week, but only returns player stats that have changed in the last X minutes. You can also filter by type of player stats to include, such as traditional fantasy players, IDP players or all players.',
  operationId: 'BoxScoresDeltaV',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
      playerstoinclude: z
        .enum(['all', 'fantasy', 'idp'])
        .default('all')
        .openapi({
          param: {
            description:
              'The subcategory of players to include in the returned PlayerGame records. Possible values include:<br><br>\n<code>all</code> Returns all players<br>\n<code>fantasy</code> Returns traditional fantasy players (QB, RB, WR, TE, K, DST)<br>\n<code>idp</code> Returns traditional fantasy players and IDP players.',
            in: 'path',
            name: 'playerstoinclude',
            required: true,
            schema: { default: 'all', enum: ['all', 'fantasy', 'idp'], type: 'string' },
          },
        }),
      minutes: z
        .string()
        .openapi({
          param: {
            description:
              'Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br><code>1</code>,\n <code>2</code>, etc.\n        ',
            in: 'path',
            name: 'minutes',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(BoxScoreV3Schema) } },
    },
  },
})

export const getFormatByesSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/Byes/{season}',
  summary: 'Bye Weeks',
  description: 'Get bye weeks for the teams during a specified NFL season. ',
  operationId: 'ByeWeeks',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(ByeSchema) } } },
  },
})

export const getFormatCurrentSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/CurrentSeason',
  summary: 'Season Current',
  description:
    'Year of the current NFL season. This value changes at the start of the new NFL league year. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.',
  operationId: 'SeasonCurrent',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.int().nullable() } } },
  },
})

export const getFormatCurrentWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/CurrentWeek',
  summary: 'Week Current',
  description:
    'Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.',
  operationId: 'WeekCurrent',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.int().nullable() } } },
  },
})

export const getFormatDailyFantasyPlayersDateRoute = createRoute({
  method: 'get',
  path: '/{format}/DailyFantasyPlayers/{date}',
  summary: 'Daily Fantasy Players',
  operationId: 'DailyFantasyPlayers',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description:
              "\n          The date of the contest for which you're pulling players\n          <code>2014-SEP-21</code>,\n          <code>2014-NOV-15</code>, etc\n        ",
            in: 'path',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(DailyFantasyPlayerSchema) } },
    },
  },
})

export const getFormatDailyFantasyPointsDateRoute = createRoute({
  method: 'get',
  path: '/{format}/DailyFantasyPoints/{date}',
  summary: 'Daily Fantasy Scoring',
  operationId: 'DailyFantasyScoring',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description:
              "The date of the contest for which you're pulling players\n          <code>2014-SEP-21</code>,\n          <code>2014-NOV-15</code>, etc",
            in: 'path',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(DailyFantasyScoringSchema) } },
    },
  },
})

export const getFormatDfsSlatesByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/DfsSlatesByDate/{date}',
  summary: 'DFS Slates by Date',
  operationId: 'DfsSlatesByDate',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description:
              'The date of the slates.\n<br>Examples: <code>2017-SEP-25</code>, <code>2017-10-31</code>.',
            in: 'path',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(DfsSlateSchema) } } },
  },
})

export const getFormatDfsSlatesByWeekSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/DfsSlatesByWeek/{season}/{week}',
  summary: 'DFS Slates by Week',
  operationId: 'DfsSlatesByWeek',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(DfsSlateSchema) } } },
  },
})

export const getFormatFantasyDefenseByGameSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/FantasyDefenseByGame/{season}/{week}',
  summary: 'Fantasy Defense Game Stats',
  operationId: 'FantasyDefenseGameStats',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(FantasyDefenseGameSchema) } },
    },
  },
})

export const getFormatFantasyDefenseByGameByTeamSeasonWeekTeamRoute = createRoute({
  method: 'get',
  path: '/{format}/FantasyDefenseByGameByTeam/{season}/{week}/{team}',
  summary: 'Fantasy Defense Game Stats by Team',
  operationId: 'FantasyDefenseGameStatsByTeam',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .openapi({
          param: {
            description: 'Abbreviation of the team. Example: <code>WAS</code>.',
            in: 'path',
            name: 'team',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: FantasyDefenseGameSchema } } },
  },
})

export const getFormatFantasyDefenseBySeasonSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/FantasyDefenseBySeason/{season}',
  summary: 'Fantasy Defense Season Stats',
  operationId: 'FantasyDefenseSeasonStats',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(FantasyDefenseSeasonSchema) } },
    },
  },
})

export const getFormatFantasyDefenseBySeasonByTeamSeasonTeamRoute = createRoute({
  method: 'get',
  path: '/{format}/FantasyDefenseBySeasonByTeam/{season}/{team}',
  summary: 'Fantasy Defense Season Stats by Team',
  operationId: 'FantasyDefenseSeasonStatsByTeam',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .openapi({
          param: {
            description: 'Abbreviation of the team. Example: <code>WAS</code>.',
            in: 'path',
            name: 'team',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: FantasyDefenseSeasonSchema } },
    },
  },
})

export const getFormatFantasyPlayersRoute = createRoute({
  method: 'get',
  path: '/{format}/FantasyPlayers',
  summary: 'Fantasy Players with ADP',
  description:
    'This method returns a comprehensive list of draftable fantasy football players, including QB, RB, WR, TE, K and DEF.  Players are sorted by ADP (AverageDraftPosition).',
  operationId: 'FantasyPlayersWithAdp',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(FantasyPlayerSchema) } },
    },
  },
})

export const getFormatFantasyPlayersIDPRoute = createRoute({
  method: 'get',
  path: '/{format}/FantasyPlayersIDP',
  summary: 'IDP Fantasy Players with ADP',
  description:
    'This method returns the top 300+ IDP Fantasy Players for the current or upcoming season, ordered by AverageDraftPositionIDP.',
  operationId: 'IdpFantasyPlayersWithAdp',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(FantasyPlayerSchema) } },
    },
  },
})

export const getFormatFinalBoxScoresRoute = createRoute({
  method: 'get',
  path: '/{format}/FinalBoxScores',
  summary: 'Legacy Box Scores Final',
  operationId: 'LegacyBoxScoresFinal',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(BoxScoreSchema) } } },
  },
})

export const getFormatFreeAgentsRoute = createRoute({
  method: 'get',
  path: '/{format}/FreeAgents',
  summary: 'Player Details by Free Agents',
  operationId: 'PlayerDetailsByFreeAgents',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(PlayerSchema) } } },
  },
})

export const getFormatGameLeagueLeadersSeasonWeekPositionColumnRoute = createRoute({
  method: 'get',
  path: '/{format}/GameLeagueLeaders/{season}/{week}/{position}/{column}',
  summary: 'League Leaders by Week',
  operationId: 'LeagueLeadersByWeek',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              '\n          Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.\n        ',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
      position: z
        .enum(['ALL', 'OFFENSE', 'QB', 'RB', 'WR', 'TE', 'DEFENSE', 'DL', 'LB', 'DB', 'K'])
        .default('ALL')
        .openapi({
          param: {
            description: 'Playerâ€™s position that you would like to filter by.',
            in: 'path',
            name: 'position',
            required: true,
            schema: {
              default: 'ALL',
              enum: ['ALL', 'OFFENSE', 'QB', 'RB', 'WR', 'TE', 'DEFENSE', 'DL', 'LB', 'DB', 'K'],
              type: 'string',
            },
          },
        }),
      column: z
        .enum([
          'FantasyPoints',
          'PassingYards',
          'RushingYards',
          'Receptions',
          'Sacks',
          'Interceptions',
          'Touchdowns',
        ])
        .openapi({
          param: {
            description: 'Response member you would like results sorted by.',
            in: 'path',
            name: 'column',
            required: true,
            schema: {
              enum: [
                'FantasyPoints',
                'PassingYards',
                'RushingYards',
                'Receptions',
                'Sacks',
                'Interceptions',
                'Touchdowns',
              ],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerGameSchema) } },
    },
  },
})

export const getFormatGameStatsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/GameStats/{season}',
  summary: 'Game Stats by Season (Deprecated, use Team Game Stats instead)',
  description: 'Game stats for a specified season.',
  operationId: 'GameStatsBySeasonDeprecatedUseTeamGameStatsInstead',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(GameSchema) } } },
  },
})

export const getFormatGameStatsByWeekSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/GameStatsByWeek/{season}/{week}',
  summary: 'Game Stats by Week (Deprecated, use Team Game Stats instead)',
  description: 'Game stats for a specified season and week.',
  operationId: 'GameStatsByWeekDeprecatedUseTeamGameStatsInstead',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(GameSchema) } } },
  },
})

export const getFormatInjuriesSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/Injuries/{season}/{week}',
  summary: 'Injuries',
  operationId: 'Injuries',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(InjurySchema) } } },
  },
})

export const getFormatInjuriesSeasonWeekTeamRoute = createRoute({
  method: 'get',
  path: '/{format}/Injuries/{season}/{week}/{team}',
  summary: 'Injuries by Team',
  operationId: 'InjuriesByTeam',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .openapi({
          param: {
            description: 'Abbreviation of the team. Example: <code>WAS</code>.',
            in: 'path',
            name: 'team',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(InjurySchema) } } },
  },
})

export const getFormatLastCompletedSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/LastCompletedSeason',
  summary: 'Season Last Completed',
  description:
    'Year of the most recently completed season. this value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.',
  operationId: 'SeasonLastCompleted',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.int().nullable() } } },
  },
})

export const getFormatLastCompletedWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/LastCompletedWeek',
  summary: 'Week Last Completed',
  description:
    'Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.',
  operationId: 'WeekLastCompleted',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.int().nullable() } } },
  },
})

export const getFormatLiveBoxScoresRoute = createRoute({
  method: 'get',
  path: '/{format}/LiveBoxScores',
  summary: 'Legacy Box Scores Live',
  operationId: 'LegacyBoxScoresLive',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(BoxScoreSchema) } } },
  },
})

export const getFormatNewsRoute = createRoute({
  method: 'get',
  path: '/{format}/News',
  summary: 'News',
  operationId: 'News',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(NewsSchema) } } },
  },
})

export const getFormatNewsByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/NewsByDate/{date}',
  summary: 'News by Date',
  operationId: 'NewsByDate',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description:
              'The date of the news.\n<br>Examples: <code>2017-JUL-31</code>, <code>2017-SEP-01</code>.',
            in: 'path',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(NewsSchema) } } },
  },
})

export const getFormatNewsByPlayerIDPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/NewsByPlayerID/{playerid}',
  summary: 'News by Player',
  operationId: 'NewsByPlayer',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.\n        ',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
      playerid: z
        .string()
        .openapi({
          param: {
            description:
              'Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>14257</code>.',
            in: 'path',
            name: 'playerid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(NewsSchema) } } },
  },
})

export const getFormatNewsByTeamTeamRoute = createRoute({
  method: 'get',
  path: '/{format}/NewsByTeam/{team}',
  summary: 'News by Team',
  operationId: 'NewsByTeam',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .openapi({
          param: {
            description: 'Abbreviation of the team. Example: <code>WAS</code>.',
            in: 'path',
            name: 'team',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(NewsSchema) } } },
  },
})

export const getFormatPlayerPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/Player/{playerid}',
  summary: 'Player Details by Player',
  operationId: 'PlayerDetailsByPlayer',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      playerid: z
        .string()
        .openapi({
          param: {
            description:
              'Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.',
            in: 'path',
            name: 'playerid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PlayerDetailSchema } } },
  },
})

export const getFormatPlayerGameRedZoneInsideFiveStatsSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameRedZoneInsideFiveStats/{season}/{week}',
  summary: 'Player Game Red Zone Stats Inside Five',
  operationId: 'PlayerGameRedZoneStatsInsideFive',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerGameRedZoneSchema) } },
    },
  },
})

export const getFormatPlayerGameRedZoneInsideTenStatsSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameRedZoneInsideTenStats/{season}/{week}',
  summary: 'Player Game Red Zone Stats Inside Ten',
  operationId: 'PlayerGameRedZoneStatsInsideTen',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerGameRedZoneSchema) } },
    },
  },
})

export const getFormatPlayerGameRedZoneStatsSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameRedZoneStats/{season}/{week}',
  summary: 'Player Game Red Zone Stats',
  operationId: 'PlayerGameRedZoneStats',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerGameRedZoneSchema) } },
    },
  },
})

export const getFormatPlayerGameStatsByPlayerIDSeasonWeekPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameStatsByPlayerID/{season}/{week}/{playerid}',
  summary: 'Player Game Stats by Player',
  operationId: 'PlayerGameStatsByPlayer',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
      playerid: z
        .string()
        .openapi({
          param: {
            description:
              'Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.',
            in: 'path',
            name: 'playerid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PlayerGameSchema } } },
  },
})

export const getFormatPlayerGameStatsBySeasonSeasonPlayeridNumberofgamesRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}',
  summary: 'Player Game Logs By Season',
  operationId: 'PlayerGameLogsBySeason',
  request: {
    params: z.object({
      format: z
        .enum(['JSON', 'XML'])
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['JSON', 'XML'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Season to get games from. Example <code>2019POST</code>, <code>2020</code>',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      playerid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Player ID. Example:<code>17920</code>.',
            in: 'path',
            name: 'playerid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      numberofgames: z
        .string()
        .openapi({
          param: {
            description:
              'How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>',
            in: 'path',
            name: 'numberofgames',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerGameSchema) } },
    },
  },
})

export const getFormatPlayerGameStatsByTeamSeasonWeekTeamRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameStatsByTeam/{season}/{week}/{team}',
  summary: 'Player Game Stats by Team',
  operationId: 'PlayerGameStatsByTeam',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .openapi({
          param: {
            description: 'Abbreviation of the team. Example: <code>WAS</code>.',
            in: 'path',
            name: 'team',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerGameSchema) } },
    },
  },
})

export const getFormatPlayerGameStatsByWeekSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameStatsByWeek/{season}/{week}',
  summary: 'Player Game Stats by Week',
  operationId: 'PlayerGameStatsByWeek',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerGameSchema) } },
    },
  },
})

export const getFormatPlayerGameStatsByWeekDeltaSeasonWeekMinutesRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameStatsByWeekDelta/{season}/{week}/{minutes}',
  summary: 'Player Game Stats by Week Delta',
  operationId: 'PlayerGameStatsByWeekDelta',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
      minutes: z
        .string()
        .openapi({
          param: {
            description:
              'Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br>\n          <code>1</code> or <code>2</code>.\n        ',
            in: 'path',
            name: 'minutes',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerGameSchema) } },
    },
  },
})

export const getFormatPlayerGameStatsDeltaMinutesRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameStatsDelta/{minutes}',
  summary: 'Player Game Stats Delta',
  operationId: 'PlayerGameStatsDelta',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      minutes: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:\n          <code>1</code> or <code>2</code>.\n        ',
            in: 'path',
            name: 'minutes',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerGameSchema) } },
    },
  },
})

export const getFormatPlayerOwnershipSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerOwnership/{season}/{week}',
  summary: 'Fantasy Player Ownership Percentages (Season-Long)',
  operationId: 'FantasyPlayerOwnershipPercentagesSeasonLong',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              'Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerOwnershipSchema) } },
    },
  },
})

export const getFormatPlayerSeasonRedZoneInsideFiveStatsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonRedZoneInsideFiveStats/{season}',
  summary: 'Player Season Red Zone Stats Inside Five',
  operationId: 'PlayerSeasonRedZoneStatsInsideFive',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerSeasonRedZoneSchema) } },
    },
  },
})

export const getFormatPlayerSeasonRedZoneInsideTenStatsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonRedZoneInsideTenStats/{season}',
  summary: 'Player Season Red Zone Stats Inside Ten',
  operationId: 'PlayerSeasonRedZoneStatsInsideTen',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerSeasonRedZoneSchema) } },
    },
  },
})

export const getFormatPlayerSeasonRedZoneStatsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonRedZoneStats/{season}',
  summary: 'Player Season Red Zone Stats',
  operationId: 'PlayerSeasonRedZoneStats',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerSeasonRedZoneSchema) } },
    },
  },
})

export const getFormatPlayerSeasonStatsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonStats/{season}',
  summary: 'Player Season Stats',
  operationId: 'PlayerSeasonStats',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerSeasonSchema) } },
    },
  },
})

export const getFormatPlayerSeasonStatsByPlayerIDSeasonPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonStatsByPlayerID/{season}/{playerid}',
  summary: 'Player Season Stats by Player',
  operationId: 'PlayerSeasonStatsByPlayer',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      playerid: z
        .string()
        .openapi({
          param: {
            description:
              'Each NFL player has a unique ID assigned by FantasyData. Player IDs can be determined by pulling player related data. Example:<code>732</code>.',
            in: 'path',
            name: 'playerid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerSeasonSchema) } },
    },
  },
})

export const getFormatPlayerSeasonStatsByTeamSeasonTeamRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonStatsByTeam/{season}/{team}',
  summary: 'Player Season Stats by Team',
  operationId: 'PlayerSeasonStatsByTeam',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .openapi({
          param: {
            description: 'Abbreviation of the team. Example: <code>WAS</code>.',
            in: 'path',
            name: 'team',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerSeasonSchema) } },
    },
  },
})

export const getFormatPlayerSeasonThirdDownStatsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonThirdDownStats/{season}',
  summary: 'Player Season Third Down Stats',
  operationId: 'PlayerSeasonThirdDownStats',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerSeasonThirdDownSchema) } },
    },
  },
})

export const getFormatPlayersRoute = createRoute({
  method: 'get',
  path: '/{format}/Players',
  summary: 'Player Details by Available',
  operationId: 'PlayerDetailsByAvailable',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(PlayerSchema) } } },
  },
})

export const getFormatPlayersTeamRoute = createRoute({
  method: 'get',
  path: '/{format}/Players/{team}',
  summary: 'Player Details by Team',
  operationId: 'PlayerDetailsByTeam',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      team: z
        .string()
        .openapi({
          param: {
            description: 'Abbreviation of the team. Example: <code>WAS</code>.',
            in: 'path',
            name: 'team',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerDetailSchema) } },
    },
  },
})

export const getFormatProBowlersSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/ProBowlers/{season}',
  summary: 'Pro Bowlers',
  operationId: 'ProBowlers',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description: 'Year of the season\n<br>Examples: <code>2016</code>, <code>2017</code>',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerInfoSchema) } },
    },
  },
})

export const getFormatRecentlyUpdatedBoxScoresMinutesRoute = createRoute({
  method: 'get',
  path: '/{format}/RecentlyUpdatedBoxScores/{minutes}',
  summary: 'Legacy Box Scores Delta (Current Week)',
  operationId: 'LegacyBoxScoresDeltaCurrentWeek',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      minutes: z
        .string()
        .openapi({
          param: {
            description:
              'Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back.  Valid entries are:<br>\n          <code>1</code> or <code>2</code>.\n        ',
            in: 'path',
            name: 'minutes',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(BoxScoreSchema) } } },
  },
})

export const getFormatRookiesSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/Rookies/{season}',
  summary: 'Player Details by Rookie Draft Year',
  operationId: 'PlayerDetailsByRookieDraftYear',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season.<br>Examples: <code>2018</code>, <code>2019</code>, etc.',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(PlayerSchema) } } },
  },
})

export const getFormatSchedulesSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/Schedules/{season}',
  summary: 'Schedule',
  description: 'Game schedule for a specified season.',
  operationId: 'Schedule',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(ScheduleSchema) } } },
  },
})

export const getFormatScoresSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/Scores/{season}',
  summary: 'Scores by Season ',
  description: 'Game scores for a specified season.',
  operationId: 'ScoresBySeason',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Year of the season (with optional season type).<br>Examples: <code>2018</code>, <code>2018PRE</code>, <code>2018POST</code>, <code>2018STAR</code>, <code>2019</code>, etc.',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(ScoreSchema) } } },
  },
})

export const getFormatScoresByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/ScoresByDate/{date}',
  summary: 'Scores by Date',
  description: 'Get game scores for a specified week of a season.',
  operationId: 'ScoresByDate',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description:
              'The date of the games.<br>Examples: <code>2021-SEP-12</code>, <code>2021-NOV-28</code>.',
            in: 'path',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(ScoreSchema) } } },
  },
})

export const getFormatScoresByWeekSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/ScoresByWeek/{season}/{week}',
  summary: 'Scores by Week',
  description: 'Get game scores for a specified week of a season.',
  operationId: 'ScoresByWeek',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(ScoreSchema) } } },
  },
})

export const getFormatSeasonLeagueLeadersSeasonPositionColumnRoute = createRoute({
  method: 'get',
  path: '/{format}/SeasonLeagueLeaders/{season}/{position}/{column}',
  summary: 'League Leaders by Season',
  operationId: 'LeagueLeadersBySeason',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      position: z
        .enum(['ALL', 'OFFENSE', 'QB', 'RB', 'WR', 'TE', 'DEFENSE', 'DL', 'LB', 'DB', 'K'])
        .default('ALL')
        .openapi({
          param: {
            description: 'Playerâ€™s position that you would like to filter by.',
            in: 'path',
            name: 'position',
            required: true,
            schema: {
              default: 'ALL',
              enum: ['ALL', 'OFFENSE', 'QB', 'RB', 'WR', 'TE', 'DEFENSE', 'DL', 'LB', 'DB', 'K'],
              type: 'string',
            },
          },
        }),
      column: z
        .enum([
          'FantasyPoints',
          'PassingYards',
          'RushingYards',
          'Receptions',
          'Sacks',
          'Interceptions',
          'Touchdowns',
        ])
        .openapi({
          param: {
            description: 'Response member you would like results sorted by.',
            in: 'path',
            name: 'column',
            required: true,
            schema: {
              enum: [
                'FantasyPoints',
                'PassingYards',
                'RushingYards',
                'Receptions',
                'Sacks',
                'Interceptions',
                'Touchdowns',
              ],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(PlayerSeasonSchema) } },
    },
  },
})

export const getFormatSimulatedBoxScoresV3NumberofplaysRoute = createRoute({
  method: 'get',
  path: '/{format}/SimulatedBoxScoresV3/{numberofplays}',
  summary: 'Box Scores V3 Simulation',
  description:
    'Gets simulated live box scores of NFL games, covering the Conference Championship games on January 21, 2018.',
  operationId: 'BoxScoresVSimulation',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      numberofplays: z
        .string()
        .openapi({
          param: {
            description:
              'The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.',
            in: 'path',
            name: 'numberofplays',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(BoxScoreV3Schema) } },
    },
  },
})

export const getFormatSimulatedScoresNumberofplaysRoute = createRoute({
  method: 'get',
  path: '/{format}/SimulatedScores/{numberofplays}',
  summary: 'Scores by Week Simulation',
  description:
    'Gets simulated live scores of NFL games, covering the Conference Championship games on January 21, 2018.',
  operationId: 'ScoresByWeekSimulation',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      numberofplays: z
        .string()
        .openapi({
          param: {
            description:
              'The number of plays to progress in this NFL live game simulation. Example entries are <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>150</code>, <code>200</code>, etc.',
            in: 'path',
            name: 'numberofplays',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(ScoreSchema) } } },
  },
})

export const getFormatStadiumsRoute = createRoute({
  method: 'get',
  path: '/{format}/Stadiums',
  summary: 'Stadiums',
  description: 'This method returns all stadiums.',
  operationId: 'Stadiums',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(StadiumSchema) } } },
  },
})

export const getFormatStandingsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/Standings/{season}',
  summary: 'Standings',
  operationId: 'Standings',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(StandingSchema) } } },
  },
})

export const getFormatTeamGameStatsSeasonWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/TeamGameStats/{season}/{week}',
  summary: 'Team Game Stats',
  operationId: 'TeamGameStats',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      week: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Week of the season. Valid values are as follows: Preseason 0 to 4, Regular Season 1 to 17, Postseason 1 to 4.\n          Example: <code>1</code>\n        ',
            in: 'path',
            name: 'week',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(TeamGameSchema) } } },
  },
})

export const getFormatTeamGameStatsBySeasonSeasonTeamidNumberofgamesRoute = createRoute({
  method: 'get',
  path: '/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}',
  summary: 'Team Game Logs By Season',
  description: 'Game by game log of total team statistics.',
  operationId: 'TeamGameLogsBySeason',
  request: {
    params: z.object({
      format: z
        .enum(['JSON', 'XML'])
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['JSON', 'XML'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              'Season to get games from. Example <code>2019POST</code>, <code>2020</code>',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
      teamid: z
        .string()
        .openapi({
          param: {
            description: 'Unique ID of team.  Example <code> 8 </code>',
            in: 'path',
            name: 'teamid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      numberofgames: z
        .string()
        .openapi({
          param: {
            description:
              'How many games to return. Example <code>all</code>, <code>10</code>, <code>25</code>',
            in: 'path',
            name: 'numberofgames',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(TeamGameSchema) } } },
  },
})

export const getFormatTeamSeasonStatsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/TeamSeasonStats/{season}',
  summary: 'Team Season Stats',
  operationId: 'TeamSeasonStats',
  request: {
    params: z.object({
      format: z
        .enum(['XML', 'JSON'])
        .default('XML')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'XML', enum: ['XML', 'JSON'], type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(TeamSeasonSchema) } },
    },
  },
})

export const getFormatTeamsRoute = createRoute({
  method: 'get',
  path: '/{format}/Teams',
  summary: 'Teams (Active)',
  description: 'Gets all active teams.',
  operationId: 'TeamsActive',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(TeamSchema) } } },
  },
})

export const getFormatTeamsSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/Teams/{season}',
  summary: 'Teams by Season',
  description: 'List of teams playing in a specified season.',
  operationId: 'TeamsBySeason',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
      season: z
        .string()
        .openapi({
          param: {
            description:
              '\n          Year of the season and the season type. If no season type is provided, then the default is regular season.\n          <br>Examples: <code>2015REG</code>, <code>2015PRE</code>, <code>2015POST</code>.\n        ',
            in: 'path',
            name: 'season',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(TeamSchema) } } },
  },
})

export const getFormatTimeframesTypeRoute = createRoute({
  method: 'get',
  path: '/{format}/Timeframes/{type}',
  summary: 'Timeframes',
  description: 'Get detailed information about past, present, and future timeframes.',
  operationId: 'Timeframes',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
      type: z
        .string()
        .openapi({
          param: {
            description:
              'The type of timeframes to return.  Valid entries are <code>current</code> or <code>upcoming</code> or <code>completed</code> or <code>recent</code> or <code>all</code>.',
            in: 'path',
            name: 'type',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(TimeframeSchema) } } },
  },
})

export const getFormatUpcomingSeasonRoute = createRoute({
  method: 'get',
  path: '/{format}/UpcomingSeason',
  summary: 'Season Upcoming',
  description:
    'Year of the current NFL season, if we are in the mid-season. If we are in the off-season, then year of the next upcoming season. This value changes immediately after the Super Bowl. The earliest season for Fantasy data is 2001. The earliest season for Team data is 1985.',
  operationId: 'SeasonUpcoming',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.int().nullable() } } },
  },
})

export const getFormatUpcomingWeekRoute = createRoute({
  method: 'get',
  path: '/{format}/UpcomingWeek',
  summary: 'Week Upcoming',
  description:
    'Number of the current week of the NFL season. This value usually changes on Tuesday nights or Wednesday mornings at midnight ET.',
  operationId: 'WeekUpcoming',
  request: {
    params: z.object({
      format: z
        .string()
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.int().nullable() } } },
  },
})
