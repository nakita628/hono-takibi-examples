import { createRoute, z } from '@hono/zod-openapi'

const PlayoffAggregateScoreSchema = z
  .object({
    Created: z.string().nullable().exactOptional(),
    TeamA_AggregateScore: z.int().exactOptional(),
    TeamA_Id: z.int().exactOptional(),
    TeamB_AggregateScore: z.int().exactOptional(),
    TeamB_Id: z.int().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    WinningTeamId: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayoffAggregateScore')

const GameSchema = z
  .object({
    Attendance: z.int().nullable().exactOptional(),
    AwayTeamCountryCode: z.string().nullable().exactOptional(),
    AwayTeamFormation: z.string().nullable().exactOptional(),
    AwayTeamId: z.int().nullable().exactOptional(),
    AwayTeamKey: z.string().nullable().exactOptional(),
    AwayTeamMoneyLine: z.int().nullable().exactOptional(),
    AwayTeamName: z.string().nullable().exactOptional(),
    AwayTeamPointSpreadPayout: z.int().nullable().exactOptional(),
    AwayTeamScore: z.int().nullable().exactOptional(),
    AwayTeamScoreExtraTime: z.int().nullable().exactOptional(),
    AwayTeamScorePenalty: z.int().nullable().exactOptional(),
    AwayTeamScorePeriod1: z.int().nullable().exactOptional(),
    AwayTeamScorePeriod2: z.int().nullable().exactOptional(),
    Clock: z.int().nullable().exactOptional(),
    ClockDisplay: z.string().nullable().exactOptional(),
    ClockExtra: z.int().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DrawMoneyLine: z.int().nullable().exactOptional(),
    GameId: z.int().exactOptional(),
    GlobalAwayTeamId: z.int().nullable().exactOptional(),
    GlobalGameId: z.int().exactOptional(),
    GlobalHomeTeamId: z.int().nullable().exactOptional(),
    Group: z.string().nullable().exactOptional(),
    HomeTeamCountryCode: z.string().nullable().exactOptional(),
    HomeTeamFormation: z.string().nullable().exactOptional(),
    HomeTeamId: z.int().nullable().exactOptional(),
    HomeTeamKey: z.string().nullable().exactOptional(),
    HomeTeamMoneyLine: z.int().nullable().exactOptional(),
    HomeTeamName: z.string().nullable().exactOptional(),
    HomeTeamPointSpreadPayout: z.int().nullable().exactOptional(),
    HomeTeamScore: z.int().nullable().exactOptional(),
    HomeTeamScoreExtraTime: z.int().nullable().exactOptional(),
    HomeTeamScorePenalty: z.int().nullable().exactOptional(),
    HomeTeamScorePeriod1: z.int().nullable().exactOptional(),
    HomeTeamScorePeriod2: z.int().nullable().exactOptional(),
    IsClosed: z.boolean().nullable().exactOptional(),
    OverPayout: z.int().nullable().exactOptional(),
    OverUnder: z.number().nullable().exactOptional(),
    Period: z.string().nullable().exactOptional(),
    PlayoffAggregateScore: PlayoffAggregateScoreSchema.exactOptional(),
    PointSpread: z.number().nullable().exactOptional(),
    RoundId: z.int().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    UnderPayout: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UpdatedUtc: z.string().nullable().exactOptional(),
    VenueId: z.int().nullable().exactOptional(),
    VenueType: z.string().nullable().exactOptional(),
    Week: z.int().nullable().exactOptional(),
    Winner: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Game')

const PlayerSeasonSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    BlockedShots: z.number().nullable().exactOptional(),
    CornersWon: z.number().nullable().exactOptional(),
    Crosses: z.number().nullable().exactOptional(),
    DefenderCleanSheets: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsMondogoal: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    Fouled: z.number().nullable().exactOptional(),
    Fouls: z.number().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalTeamId: z.int().nullable().exactOptional(),
    GoalkeeperCleanSheets: z.number().nullable().exactOptional(),
    GoalkeeperGoalsAgainst: z.number().nullable().exactOptional(),
    GoalkeeperSaves: z.number().nullable().exactOptional(),
    GoalkeeperSingleGoalAgainst: z.number().nullable().exactOptional(),
    GoalkeeperWins: z.number().nullable().exactOptional(),
    Goals: z.number().nullable().exactOptional(),
    Interceptions: z.number().nullable().exactOptional(),
    LastManTackle: z.number().nullable().exactOptional(),
    Minutes: z.number().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Offsides: z.number().nullable().exactOptional(),
    OpponentScore: z.number().nullable().exactOptional(),
    OwnGoals: z.number().nullable().exactOptional(),
    Passes: z.number().nullable().exactOptional(),
    PassesCompleted: z.number().nullable().exactOptional(),
    PenaltiesConceded: z.number().nullable().exactOptional(),
    PenaltiesWon: z.number().nullable().exactOptional(),
    PenaltyKickGoals: z.number().nullable().exactOptional(),
    PenaltyKickMisses: z.number().nullable().exactOptional(),
    PenaltyKickSaves: z.number().nullable().exactOptional(),
    PlayerId: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    RedCards: z.number().nullable().exactOptional(),
    RoundId: z.int().nullable().exactOptional(),
    Score: z.number().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    Shots: z.number().nullable().exactOptional(),
    ShotsOnGoal: z.number().nullable().exactOptional(),
    Started: z.int().nullable().exactOptional(),
    StatId: z.int().exactOptional(),
    Tackles: z.number().nullable().exactOptional(),
    TacklesWon: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamId: z.int().nullable().exactOptional(),
    Touches: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UpdatedUtc: z.string().nullable().exactOptional(),
    YellowCards: z.number().nullable().exactOptional(),
    YellowRedCards: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerSeason')

const StandingSchema = z
  .object({
    Draws: z.int().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalTeamID: z.int().nullable().exactOptional(),
    GoalsAgainst: z.int().nullable().exactOptional(),
    GoalsDifferential: z.int().nullable().exactOptional(),
    GoalsScored: z.int().nullable().exactOptional(),
    Group: z.string().nullable().exactOptional(),
    Losses: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Order: z.int().nullable().exactOptional(),
    Points: z.int().nullable().exactOptional(),
    RoundId: z.int().exactOptional(),
    Scope: z.string().nullable().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    StandingId: z.int().exactOptional(),
    TeamId: z.int().exactOptional(),
    Wins: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Standing')

const TeamSeasonSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    BlockedShots: z.number().nullable().exactOptional(),
    CornersWon: z.number().nullable().exactOptional(),
    Crosses: z.number().nullable().exactOptional(),
    DefenderCleanSheets: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsMondogoal: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    Fouled: z.number().nullable().exactOptional(),
    Fouls: z.number().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalTeamId: z.int().nullable().exactOptional(),
    GoalkeeperCleanSheets: z.number().nullable().exactOptional(),
    GoalkeeperGoalsAgainst: z.number().nullable().exactOptional(),
    GoalkeeperSaves: z.number().nullable().exactOptional(),
    GoalkeeperSingleGoalAgainst: z.number().nullable().exactOptional(),
    GoalkeeperWins: z.number().nullable().exactOptional(),
    Goals: z.number().nullable().exactOptional(),
    Interceptions: z.number().nullable().exactOptional(),
    LastManTackle: z.number().nullable().exactOptional(),
    Minutes: z.number().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Offsides: z.number().nullable().exactOptional(),
    OpponentScore: z.number().nullable().exactOptional(),
    OwnGoals: z.number().nullable().exactOptional(),
    Passes: z.number().nullable().exactOptional(),
    PassesCompleted: z.number().nullable().exactOptional(),
    PenaltiesConceded: z.number().nullable().exactOptional(),
    PenaltiesWon: z.number().nullable().exactOptional(),
    PenaltyKickGoals: z.number().nullable().exactOptional(),
    PenaltyKickMisses: z.number().nullable().exactOptional(),
    PenaltyKickSaves: z.number().nullable().exactOptional(),
    Possession: z.number().nullable().exactOptional(),
    RedCards: z.number().nullable().exactOptional(),
    RoundId: z.int().nullable().exactOptional(),
    Score: z.number().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Shots: z.number().nullable().exactOptional(),
    ShotsOnGoal: z.number().nullable().exactOptional(),
    StatId: z.int().exactOptional(),
    Tackles: z.number().nullable().exactOptional(),
    TacklesWon: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamId: z.int().nullable().exactOptional(),
    Touches: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UpdatedUtc: z.string().nullable().exactOptional(),
    YellowCards: z.number().nullable().exactOptional(),
    YellowRedCards: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamSeason')

const RoundSchema = z
  .object({
    CurrentRound: z.boolean().exactOptional(),
    CurrentWeek: z.int().nullable().exactOptional(),
    EndDate: z.string().nullable().exactOptional(),
    Games: z.array(GameSchema).exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PlayerSeasons: z.array(PlayerSeasonSchema).exactOptional(),
    RoundId: z.int().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonId: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Standings: z.array(StandingSchema).exactOptional(),
    StartDate: z.string().nullable().exactOptional(),
    TeamSeasons: z.array(TeamSeasonSchema).exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Round')

const SeasonSchema = z
  .object({
    CompetitionId: z.int().exactOptional(),
    CompetitionName: z.string().nullable().exactOptional(),
    CurrentSeason: z.boolean().exactOptional(),
    EndDate: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Rounds: z.array(RoundSchema).exactOptional(),
    Season: z.int().exactOptional(),
    SeasonId: z.int().exactOptional(),
    StartDate: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Season')

const CompetitionSchema = z
  .object({
    AreaId: z.int().exactOptional(),
    AreaName: z.string().nullable().exactOptional(),
    CompetitionId: z.int().exactOptional(),
    Format: z.string().nullable().exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    Key: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Seasons: z.array(SeasonSchema).exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Competition')

const AreaSchema = z
  .object({
    AreaId: z.int().exactOptional(),
    Competitions: z.array(CompetitionSchema).exactOptional(),
    CountryCode: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Area')

const BookingSchema = z
  .object({
    BookingId: z.int().exactOptional(),
    GameId: z.int().exactOptional(),
    GameMinute: z.int().nullable().exactOptional(),
    GameMinuteExtra: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PlayerId: z.int().nullable().exactOptional(),
    TeamId: z.int().exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Booking')

const RefereeSchema = z
  .object({
    FirstName: z.string().nullable().exactOptional(),
    LastName: z.string().nullable().exactOptional(),
    Nationality: z.string().nullable().exactOptional(),
    RefereeId: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Referee')

const CoachSchema = z
  .object({
    CoachId: z.int().exactOptional(),
    FirstName: z.string().nullable().exactOptional(),
    LastName: z.string().nullable().exactOptional(),
    Nationality: z.string().nullable().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Coach')

const GoalSchema = z
  .object({
    AssistedByPlayerId1: z.int().nullable().exactOptional(),
    AssistedByPlayerId2: z.int().nullable().exactOptional(),
    AssistedByPlayerName1: z.string().nullable().exactOptional(),
    AssistedByPlayerName2: z.string().nullable().exactOptional(),
    GameId: z.int().exactOptional(),
    GameMinute: z.int().nullable().exactOptional(),
    GameMinuteExtra: z.int().nullable().exactOptional(),
    GoalId: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PlayerId: z.int().nullable().exactOptional(),
    TeamId: z.int().exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Goal')

const LineupSchema = z
  .object({
    GameId: z.int().exactOptional(),
    GameMinute: z.int().nullable().exactOptional(),
    GameMinuteExtra: z.int().nullable().exactOptional(),
    LineupId: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PitchPositionHorizontal: z.int().nullable().exactOptional(),
    PitchPositionVertical: z.int().nullable().exactOptional(),
    PlayerId: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    ReplacedPlayerId: z.int().nullable().exactOptional(),
    ReplacedPlayerName: z.string().nullable().exactOptional(),
    TeamId: z.int().exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Lineup')

const PenaltyShootoutSchema = z
  .object({
    GameId: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Order: z.int().exactOptional(),
    PenaltyShootoutId: z.int().exactOptional(),
    PlayerId: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    TeamId: z.int().exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PenaltyShootout')

const PlayerGameSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    BlockedShots: z.number().nullable().exactOptional(),
    Captain: z.boolean().nullable().exactOptional(),
    CornersWon: z.number().nullable().exactOptional(),
    Crosses: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DefenderCleanSheets: z.number().nullable().exactOptional(),
    DraftKingsPosition: z.string().nullable().exactOptional(),
    DraftKingsSalary: z.int().nullable().exactOptional(),
    FanDuelPosition: z.string().nullable().exactOptional(),
    FanDuelSalary: z.int().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsMondogoal: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    Fouled: z.number().nullable().exactOptional(),
    Fouls: z.number().nullable().exactOptional(),
    GameId: z.int().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalGameId: z.int().nullable().exactOptional(),
    GlobalOpponentId: z.int().nullable().exactOptional(),
    GlobalTeamId: z.int().nullable().exactOptional(),
    GoalkeeperCleanSheets: z.number().nullable().exactOptional(),
    GoalkeeperGoalsAgainst: z.number().nullable().exactOptional(),
    GoalkeeperSaves: z.number().nullable().exactOptional(),
    GoalkeeperSingleGoalAgainst: z.number().nullable().exactOptional(),
    GoalkeeperWins: z.number().nullable().exactOptional(),
    Goals: z.number().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    Interceptions: z.number().nullable().exactOptional(),
    IsGameOver: z.boolean().exactOptional(),
    Jersey: z.int().nullable().exactOptional(),
    LastManTackle: z.number().nullable().exactOptional(),
    Minutes: z.number().nullable().exactOptional(),
    MondogoalPosition: z.string().nullable().exactOptional(),
    MondogoalSalary: z.int().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Offsides: z.number().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentId: z.int().nullable().exactOptional(),
    OpponentScore: z.number().nullable().exactOptional(),
    OwnGoals: z.number().nullable().exactOptional(),
    Passes: z.number().nullable().exactOptional(),
    PassesCompleted: z.number().nullable().exactOptional(),
    PenaltiesConceded: z.number().nullable().exactOptional(),
    PenaltiesWon: z.number().nullable().exactOptional(),
    PenaltyKickGoals: z.number().nullable().exactOptional(),
    PenaltyKickMisses: z.number().nullable().exactOptional(),
    PenaltyKickSaves: z.number().nullable().exactOptional(),
    PlayerId: z.int().nullable().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    RedCards: z.number().nullable().exactOptional(),
    RoundId: z.int().nullable().exactOptional(),
    Score: z.number().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    Shots: z.number().nullable().exactOptional(),
    ShotsOnGoal: z.number().nullable().exactOptional(),
    Started: z.int().nullable().exactOptional(),
    StatId: z.int().exactOptional(),
    Suspension: z.boolean().nullable().exactOptional(),
    SuspensionReason: z.string().nullable().exactOptional(),
    Tackles: z.number().nullable().exactOptional(),
    TacklesWon: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamId: z.int().nullable().exactOptional(),
    Touches: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UpdatedUtc: z.string().nullable().exactOptional(),
    YahooPosition: z.string().nullable().exactOptional(),
    YahooSalary: z.int().nullable().exactOptional(),
    YellowCards: z.number().nullable().exactOptional(),
    YellowRedCards: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerGame')

const TeamGameSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    BlockedShots: z.number().nullable().exactOptional(),
    CornersWon: z.number().nullable().exactOptional(),
    Crosses: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DefenderCleanSheets: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FantasyPointsDraftKings: z.number().nullable().exactOptional(),
    FantasyPointsFanDuel: z.number().nullable().exactOptional(),
    FantasyPointsMondogoal: z.number().nullable().exactOptional(),
    FantasyPointsYahoo: z.number().nullable().exactOptional(),
    Fouled: z.number().nullable().exactOptional(),
    Fouls: z.number().nullable().exactOptional(),
    GameId: z.int().nullable().exactOptional(),
    Games: z.int().nullable().exactOptional(),
    GlobalGameId: z.int().nullable().exactOptional(),
    GlobalOpponentId: z.int().nullable().exactOptional(),
    GlobalTeamId: z.int().nullable().exactOptional(),
    GoalkeeperCleanSheets: z.number().nullable().exactOptional(),
    GoalkeeperGoalsAgainst: z.number().nullable().exactOptional(),
    GoalkeeperSaves: z.number().nullable().exactOptional(),
    GoalkeeperSingleGoalAgainst: z.number().nullable().exactOptional(),
    GoalkeeperWins: z.number().nullable().exactOptional(),
    Goals: z.number().nullable().exactOptional(),
    HomeOrAway: z.string().nullable().exactOptional(),
    Interceptions: z.number().nullable().exactOptional(),
    IsGameOver: z.boolean().exactOptional(),
    LastManTackle: z.number().nullable().exactOptional(),
    Minutes: z.number().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Offsides: z.number().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentId: z.int().nullable().exactOptional(),
    OpponentScore: z.number().nullable().exactOptional(),
    OwnGoals: z.number().nullable().exactOptional(),
    Passes: z.number().nullable().exactOptional(),
    PassesCompleted: z.number().nullable().exactOptional(),
    PenaltiesConceded: z.number().nullable().exactOptional(),
    PenaltiesWon: z.number().nullable().exactOptional(),
    PenaltyKickGoals: z.number().nullable().exactOptional(),
    PenaltyKickMisses: z.number().nullable().exactOptional(),
    PenaltyKickSaves: z.number().nullable().exactOptional(),
    Possession: z.number().nullable().exactOptional(),
    RedCards: z.number().nullable().exactOptional(),
    RoundId: z.int().nullable().exactOptional(),
    Score: z.number().nullable().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Shots: z.number().nullable().exactOptional(),
    ShotsOnGoal: z.number().nullable().exactOptional(),
    StatId: z.int().exactOptional(),
    Tackles: z.number().nullable().exactOptional(),
    TacklesWon: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamId: z.int().nullable().exactOptional(),
    Touches: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UpdatedUtc: z.string().nullable().exactOptional(),
    YellowCards: z.number().nullable().exactOptional(),
    YellowRedCards: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamGame')

const BoxScoreSchema = z
  .object({
    AdditionalAssistantReferee1: RefereeSchema.exactOptional(),
    AdditionalAssistantReferee2: RefereeSchema.exactOptional(),
    AssistantReferee1: RefereeSchema.exactOptional(),
    AssistantReferee2: RefereeSchema.exactOptional(),
    AwayTeamCoach: CoachSchema.exactOptional(),
    Bookings: z.array(BookingSchema).exactOptional(),
    FourthReferee: RefereeSchema.exactOptional(),
    Game: GameSchema.exactOptional(),
    Goals: z.array(GoalSchema).exactOptional(),
    HomeTeamCoach: CoachSchema.exactOptional(),
    Lineups: z.array(LineupSchema).exactOptional(),
    MainReferee: RefereeSchema.exactOptional(),
    PenaltyShootouts: z.array(PenaltyShootoutSchema).exactOptional(),
    PlayerGames: z.array(PlayerGameSchema).exactOptional(),
    TeamGames: z.array(TeamGameSchema).exactOptional(),
    VideoAssistantReferee: RefereeSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BoxScore')

const PlayerSchema = z
  .object({
    BirthCity: z.string().nullable().exactOptional(),
    BirthCountry: z.string().nullable().exactOptional(),
    BirthDate: z.string().nullable().exactOptional(),
    CommonName: z.string().nullable().exactOptional(),
    DraftKingsPosition: z.string().nullable().exactOptional(),
    FirstName: z.string().nullable().exactOptional(),
    Foot: z.string().nullable().exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    Height: z.int().nullable().exactOptional(),
    InjuryBodyPart: z.string().nullable().exactOptional(),
    InjuryNotes: z.string().nullable().exactOptional(),
    InjuryStartDate: z.string().nullable().exactOptional(),
    InjuryStatus: z.string().nullable().exactOptional(),
    Jersey: z.int().nullable().exactOptional(),
    LastName: z.string().nullable().exactOptional(),
    Nationality: z.string().nullable().exactOptional(),
    PhotoUrl: z.string().nullable().exactOptional(),
    PlayerId: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    PositionCategory: z.string().nullable().exactOptional(),
    RotoWirePlayerID: z.int().nullable().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UsaTodayHeadshotNoBackgroundUpdated: z.string().nullable().exactOptional(),
    UsaTodayHeadshotNoBackgroundUrl: z.string().nullable().exactOptional(),
    UsaTodayHeadshotUpdated: z.string().nullable().exactOptional(),
    UsaTodayHeadshotUrl: z.string().nullable().exactOptional(),
    UsaTodayPlayerID: z.int().nullable().exactOptional(),
    Weight: z.int().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Player')

const TeamDetailSchema = z
  .object({
    Active: z.boolean().exactOptional(),
    Address: z.string().nullable().exactOptional(),
    AreaId: z.int().nullable().exactOptional(),
    AreaName: z.string().nullable().exactOptional(),
    City: z.string().nullable().exactOptional(),
    ClubColor1: z.string().nullable().exactOptional(),
    ClubColor2: z.string().nullable().exactOptional(),
    ClubColor3: z.string().nullable().exactOptional(),
    Email: z.string().nullable().exactOptional(),
    Fax: z.string().nullable().exactOptional(),
    Founded: z.int().nullable().exactOptional(),
    FullName: z.string().nullable().exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    GlobalTeamId: z.int().exactOptional(),
    Key: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Nickname1: z.string().nullable().exactOptional(),
    Nickname2: z.string().nullable().exactOptional(),
    Nickname3: z.string().nullable().exactOptional(),
    Phone: z.string().nullable().exactOptional(),
    Players: z.array(PlayerSchema).exactOptional(),
    TeamId: z.int().exactOptional(),
    Type: z.string().nullable().exactOptional(),
    VenueId: z.int().nullable().exactOptional(),
    VenueName: z.string().nullable().exactOptional(),
    Website: z.string().nullable().exactOptional(),
    WikipediaLogoUrl: z.string().nullable().exactOptional(),
    WikipediaWordMarkUrl: z.string().nullable().exactOptional(),
    Zip: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamDetail')

const CompetitionDetailSchema = z
  .object({
    AreaId: z.int().exactOptional(),
    AreaName: z.string().nullable().exactOptional(),
    CompetitionId: z.int().exactOptional(),
    CurrentSeason: SeasonSchema.exactOptional(),
    Format: z.string().nullable().exactOptional(),
    Games: z.array(GameSchema).exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    Key: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Seasons: z.array(SeasonSchema).exactOptional(),
    Teams: z.array(TeamDetailSchema).exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CompetitionDetail')

const DfsSlateGameSchema = z
  .object({
    Game: GameSchema.exactOptional(),
    GameID: z.int().nullable().exactOptional(),
    OperatorGameID: z.int().nullable().exactOptional(),
    RemovedByOperator: z.boolean().nullable().exactOptional(),
    SlateGameID: z.int().exactOptional(),
    SlateID: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DfsSlateGame')

const DfsSlatePlayerSchema = z
  .object({
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
    CompetitionId: z.int().nullable().exactOptional(),
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

const MembershipSchema = z
  .object({
    Active: z.boolean().exactOptional(),
    EndDate: z.string().nullable().exactOptional(),
    Jersey: z.int().nullable().exactOptional(),
    MembershipId: z.int().exactOptional(),
    PlayerId: z.int().exactOptional(),
    PlayerName: z.string().nullable().exactOptional(),
    StartDate: z.string().nullable().exactOptional(),
    TeamArea: z.string().nullable().exactOptional(),
    TeamId: z.int().exactOptional(),
    TeamName: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Membership')

const TeamSchema = z
  .object({
    Active: z.boolean().exactOptional(),
    Address: z.string().nullable().exactOptional(),
    AreaId: z.int().nullable().exactOptional(),
    AreaName: z.string().nullable().exactOptional(),
    City: z.string().nullable().exactOptional(),
    ClubColor1: z.string().nullable().exactOptional(),
    ClubColor2: z.string().nullable().exactOptional(),
    ClubColor3: z.string().nullable().exactOptional(),
    Email: z.string().nullable().exactOptional(),
    Fax: z.string().nullable().exactOptional(),
    Founded: z.int().nullable().exactOptional(),
    FullName: z.string().nullable().exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    GlobalTeamId: z.int().exactOptional(),
    Key: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Nickname1: z.string().nullable().exactOptional(),
    Nickname2: z.string().nullable().exactOptional(),
    Nickname3: z.string().nullable().exactOptional(),
    Phone: z.string().nullable().exactOptional(),
    TeamId: z.int().exactOptional(),
    Type: z.string().nullable().exactOptional(),
    VenueId: z.int().nullable().exactOptional(),
    VenueName: z.string().nullable().exactOptional(),
    Website: z.string().nullable().exactOptional(),
    WikipediaLogoUrl: z.string().nullable().exactOptional(),
    WikipediaWordMarkUrl: z.string().nullable().exactOptional(),
    Zip: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Team')

const SeasonTeamSchema = z
  .object({
    Active: z.boolean().exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    SeasonId: z.int().exactOptional(),
    SeasonTeamId: z.int().exactOptional(),
    Team: TeamSchema.exactOptional(),
    TeamId: z.int().exactOptional(),
    TeamName: z.string().nullable().exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SeasonTeam')

const VenueSchema = z
  .object({
    Address: z.string().nullable().exactOptional(),
    Capacity: z.int().nullable().exactOptional(),
    City: z.string().nullable().exactOptional(),
    Country: z.string().nullable().exactOptional(),
    GeoLat: z.number().nullable().exactOptional(),
    GeoLong: z.number().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Nickname1: z.string().nullable().exactOptional(),
    Nickname2: z.string().nullable().exactOptional(),
    Open: z.boolean().exactOptional(),
    Opened: z.int().nullable().exactOptional(),
    Surface: z.string().nullable().exactOptional(),
    VenueId: z.int().exactOptional(),
    Zip: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Venue')

const ApiKeyHeaderSecurityScheme = {
  in: 'header',
  name: 'Ocp-Apim-Subscription-Key',
  type: 'apiKey',
}

const ApiKeyQuerySecurityScheme = { in: 'query', name: 'key', type: 'apiKey' }

export const getFormatActiveMembershipsRoute = createRoute({
  method: 'get',
  path: '/{format}/ActiveMemberships',
  summary: 'Memberships (Active)',
  operationId: 'MembershipsActive',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(MembershipSchema) } },
    },
  },
})

export const getFormatAreasRoute = createRoute({
  method: 'get',
  path: '/{format}/Areas',
  summary: 'Areas (Countries)',
  operationId: 'AreasCountries',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(AreaSchema) } } },
  },
})

export const getFormatBoxScoreGameidRoute = createRoute({
  method: 'get',
  path: '/{format}/BoxScore/{gameid}',
  summary: 'Box Score',
  operationId: 'BoxScore',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      gameid: z
        .string()
        .openapi({
          param: {
            description:
              'The GameID of a Soccer game.  GameIDs can be found in the Games API.  Valid entries are <code>702</code>, <code>1274</code>, etc.',
            in: 'path',
            name: 'gameid',
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

export const getFormatBoxScoresDateRoute = createRoute({
  method: 'get',
  path: '/{format}/BoxScores/{date}',
  summary: 'Box Scores by Date',
  operationId: 'BoxScoresByDate',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description:
              'The date of the game(s).\n<br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.',
            in: 'path',
            name: 'date',
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

export const getFormatBoxScoresByCompetitionCompetitionDateRoute = createRoute({
  method: 'get',
  path: '/{format}/BoxScoresByCompetition/{competition}/{date}',
  summary: 'Box Scores by Date by Competition',
  operationId: 'BoxScoresByDateByCompetition',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      competition: z
        .string()
        .openapi({
          param: {
            description:
              'An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.',
            in: 'path',
            name: 'competition',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description:
              'The date of the game(s).\n<br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.',
            in: 'path',
            name: 'date',
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

export const getFormatBoxScoresDeltaDateMinutesRoute = createRoute({
  method: 'get',
  path: '/{format}/BoxScoresDelta/{date}/{minutes}',
  summary: 'Box Scores by Date Delta',
  operationId: 'BoxScoresByDateDelta',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description:
              'The date of the game(s).\n<br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.',
            in: 'path',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      minutes: z
        .string()
        .openapi({
          param: {
            description:
              'Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back. Valid entries are:\n<code>1</code>, <code>2</code> ... <code>all</code>.',
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

export const getFormatBoxScoresDeltaByCompetitionCompetitionDateMinutesRoute = createRoute({
  method: 'get',
  path: '/{format}/BoxScoresDeltaByCompetition/{competition}/{date}/{minutes}',
  summary: 'Box Scores Delta by Date by Competition',
  operationId: 'BoxScoresDeltaByDateByCompetition',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      competition: z
        .string()
        .openapi({
          param: {
            description:
              'An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.',
            in: 'path',
            name: 'competition',
            required: true,
            schema: { type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description:
              'The date of the game(s).\n<br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.',
            in: 'path',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      minutes: z
        .string()
        .openapi({
          param: {
            description:
              'Only returns player statistics that have changed in the last X minutes.  You specify how many minutes in time to go back. Valid entries are:\n<code>1</code>, <code>2</code> ... <code>all</code>.',
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

export const getFormatCompetitionDetailsCompetitionRoute = createRoute({
  method: 'get',
  path: '/{format}/CompetitionDetails/{competition}',
  summary: 'Competition Fixtures (League Details)',
  operationId: 'CompetitionFixturesLeagueDetails',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      competition: z
        .string()
        .openapi({
          param: {
            description:
              'An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.',
            in: 'path',
            name: 'competition',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: CompetitionDetailSchema } } },
  },
})

export const getFormatCompetitionHierarchyRoute = createRoute({
  method: 'get',
  path: '/{format}/CompetitionHierarchy',
  summary: 'Competition Hierarchy (League Hierarchy)',
  operationId: 'CompetitionHierarchyLeagueHierarchy',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(AreaSchema) } } },
  },
})

export const getFormatCompetitionsRoute = createRoute({
  method: 'get',
  path: '/{format}/Competitions',
  summary: 'Competitions (Leagues)',
  operationId: 'CompetitionsLeagues',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(CompetitionSchema) } },
    },
  },
})

export const getFormatDfsSlatesByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/DfsSlatesByDate/{date}',
  summary: 'Dfs Slates By Date',
  operationId: 'DfsSlatesByDate',
  request: {
    params: z.object({
      format: z
        .enum(['json', 'xml'])
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['json', 'xml'], type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description: 'The date of the game(s).\n<br>Examples: <code>2020-02-18</code>.',
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

export const getFormatGamesByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/GamesByDate/{date}',
  summary: 'Games by Date',
  operationId: 'GamesByDate',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description:
              'The date of the game(s).\n<br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.',
            in: 'path',
            name: 'date',
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

export const getFormatHistoricalMembershipsRoute = createRoute({
  method: 'get',
  path: '/{format}/HistoricalMemberships',
  summary: 'Memberships (Historical)',
  operationId: 'MembershipsHistorical',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(MembershipSchema) } },
    },
  },
})

export const getFormatHistoricalMembershipsByCompetitionCompetitionRoute = createRoute({
  method: 'get',
  path: '/{format}/HistoricalMembershipsByCompetition/{competition}',
  summary: 'Memberships by Competition (Historical)',
  operationId: 'MembershipsByCompetitionHistorical',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      competition: z
        .string()
        .openapi({
          param: {
            description:
              'An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.',
            in: 'path',
            name: 'competition',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(MembershipSchema) } },
    },
  },
})

export const getFormatHistoricalMembershipsByTeamTeamidRoute = createRoute({
  method: 'get',
  path: '/{format}/HistoricalMembershipsByTeam/{teamid}',
  summary: 'Memberships by Team (Historical)',
  operationId: 'MembershipsByTeamHistorical',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      teamid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Team ID. \nExample:<code>516</code>.',
            in: 'path',
            name: 'teamid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(MembershipSchema) } },
    },
  },
})

export const getFormatMembershipsByCompetitionCompetitionRoute = createRoute({
  method: 'get',
  path: '/{format}/MembershipsByCompetition/{competition}',
  summary: 'Memberships by Competition (Active)',
  operationId: 'MembershipsByCompetitionActive',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      competition: z
        .string()
        .openapi({
          param: {
            description:
              'An indication of a soccer competition/league. This value can be the CompetitionId or the Competition Key. Possible values include: <code>EPL</code>, <code>1</code>, <code>MLS</code>, <code>8</code>, etc.',
            in: 'path',
            name: 'competition',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(MembershipSchema) } },
    },
  },
})

export const getFormatMembershipsByTeamTeamidRoute = createRoute({
  method: 'get',
  path: '/{format}/MembershipsByTeam/{teamid}',
  summary: 'Memberships by Team (Active)',
  operationId: 'MembershipsByTeamActive',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      teamid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Team ID. \nExample:<code>516</code>.',
            in: 'path',
            name: 'teamid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(MembershipSchema) } },
    },
  },
})

export const getFormatPlayerPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/Player/{playerid}',
  summary: 'Player',
  operationId: 'Player',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      playerid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Player ID.\nExample:<code>90026231</code>.',
            in: 'path',
            name: 'playerid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: PlayerSchema } } },
  },
})

export const getFormatPlayerGameStatsByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameStatsByDate/{date}',
  summary: 'Player Game Stats by Date',
  operationId: 'PlayerGameStatsByDate',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description:
              'The date of the game(s).\n<br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.',
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
      content: { 'application/json': { schema: z.array(PlayerGameSchema) } },
    },
  },
})

export const getFormatPlayerGameStatsByPlayerDatePlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerGameStatsByPlayer/{date}/{playerid}',
  summary: 'Player Game Stats by Player',
  operationId: 'PlayerGameStatsByPlayer',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description:
              'The date of the game(s).\n<br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.',
            in: 'path',
            name: 'date',
            required: true,
            schema: { type: 'string' },
          },
        }),
      playerid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Player ID.\nExample:<code>90026231</code>.',
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
      content: { 'application/json': { schema: z.array(PlayerGameSchema) } },
    },
  },
})

export const getFormatPlayerSeasonStatsRoundidRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonStats/{roundid}',
  summary: 'Player Season Stats',
  operationId: 'PlayerSeasonStats',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      roundid: z
        .string()
        .openapi({
          param: {
            description:
              'Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). \nExamples: <code>1</code>, <code>2</code>, <code>3</code>, etc',
            in: 'path',
            name: 'roundid',
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

export const getFormatPlayerSeasonStatsByPlayerRoundidPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonStatsByPlayer/{roundid}/{playerid}',
  summary: 'Player Season Stats by Player',
  operationId: 'PlayerSeasonStatsByPlayer',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      roundid: z
        .string()
        .openapi({
          param: {
            description:
              'Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). \nExamples: <code>1</code>, <code>2</code>, <code>3</code>, etc',
            in: 'path',
            name: 'roundid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      playerid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Player ID.\nExample:<code>90026231</code>.',
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

export const getFormatPlayerSeasonStatsByTeamRoundidTeamRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayerSeasonStatsByTeam/{roundid}/{team}',
  summary: 'Player Season Stats by Team',
  operationId: 'PlayerSeasonStatsByTeam',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      roundid: z
        .string()
        .openapi({
          param: {
            description:
              'Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). \nExamples: <code>1</code>, <code>2</code>, <code>3</code>, etc',
            in: 'path',
            name: 'roundid',
            required: true,
            schema: { type: 'string' },
          },
        }),
      team: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Team ID. \nExample:<code>516</code>.',
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

export const getFormatPlayersRoute = createRoute({
  method: 'get',
  path: '/{format}/Players',
  summary: 'Players',
  operationId: 'Players',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(PlayerSchema) } } },
  },
})

export const getFormatPlayersByTeamTeamidRoute = createRoute({
  method: 'get',
  path: '/{format}/PlayersByTeam/{teamid}',
  summary: 'Players by Team',
  operationId: 'PlayersByTeam',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      teamid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Team ID. \nExample:<code>516</code>.',
            in: 'path',
            name: 'teamid',
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

export const getFormatRecentlyChangedMembershipsDaysRoute = createRoute({
  method: 'get',
  path: '/{format}/RecentlyChangedMemberships/{days}',
  summary: 'Memberships (Recently Changed)',
  operationId: 'MembershipsRecentlyChanged',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      days: z
        .string()
        .openapi({
          param: {
            description:
              "The number of days since memberships were updated. For example, if you pass <code>3</code>, you'll receive all memberships that have been updated in the past 3 days. Valid entries are: <code>1</code>, <code>2</code> ... <code>30</code>",
            in: 'path',
            name: 'days',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(MembershipSchema) } },
    },
  },
})

export const getFormatScheduleRoundidRoute = createRoute({
  method: 'get',
  path: '/{format}/Schedule/{roundid}',
  summary: 'Schedule',
  operationId: 'Schedule',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      roundid: z
        .string()
        .openapi({
          param: {
            description:
              'Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). \nExamples: <code>1</code>, <code>2</code>, <code>3</code>, etc',
            in: 'path',
            name: 'roundid',
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

export const getFormatSeasonTeamsSeasonidRoute = createRoute({
  method: 'get',
  path: '/{format}/SeasonTeams/{seasonid}',
  summary: 'Season Teams',
  operationId: 'SeasonTeams',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      seasonid: z
        .string()
        .openapi({
          param: {
            description:
              'Unique FantasyData Season ID. SeasonIDs can be found in the Competition Hierarchy (League Hierarchy). \nExamples: <code>1</code>, <code>2</code>, <code>3</code>, etc',
            in: 'path',
            name: 'seasonid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: z.array(SeasonTeamSchema) } },
    },
  },
})

export const getFormatStandingsRoundidRoute = createRoute({
  method: 'get',
  path: '/{format}/Standings/{roundid}',
  summary: 'Standings',
  operationId: 'Standings',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      roundid: z
        .string()
        .openapi({
          param: {
            description:
              'Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). \nExamples: <code>1</code>, <code>2</code>, <code>3</code>, etc',
            in: 'path',
            name: 'roundid',
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

export const getFormatTeamGameStatsByDateDateRoute = createRoute({
  method: 'get',
  path: '/{format}/TeamGameStatsByDate/{date}',
  summary: 'Team Game Stats by Date',
  operationId: 'TeamGameStatsByDate',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      date: z
        .string()
        .openapi({
          param: {
            description:
              'The date of the game(s).\n<br>Examples: <code>2017-02-27</code>, <code>2017-09-01</code>.',
            in: 'path',
            name: 'date',
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

export const getFormatTeamSeasonStatsRoundidRoute = createRoute({
  method: 'get',
  path: '/{format}/TeamSeasonStats/{roundid}',
  summary: 'Team Season Stats',
  operationId: 'TeamSeasonStats',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      roundid: z
        .string()
        .openapi({
          param: {
            description:
              'Unique FantasyData Round ID. RoundIDs can be found in the Competition Hierarchy (League Hierarchy). \nExamples: <code>1</code>, <code>2</code>, <code>3</code>, etc',
            in: 'path',
            name: 'roundid',
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
  summary: 'Teams',
  operationId: 'Teams',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(TeamSchema) } } },
  },
})

export const getFormatUpcomingDfsSlatesByCompetitionCompetitionIdRoute = createRoute({
  method: 'get',
  path: '/{format}/UpcomingDfsSlatesByCompetition/{competitionId}',
  summary: 'Upcoming Dfs Slates By Competition',
  operationId: 'UpcomingDfsSlatesByCompetition',
  request: {
    params: z.object({
      format: z
        .enum(['json', 'xml'])
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['json', 'xml'], type: 'string' },
          },
        }),
      competitionId: z
        .string()
        .openapi({
          param: {
            description: 'The id of the competition.\n<br>Examples: <code>3</code>',
            in: 'path',
            name: 'competitionId',
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

export const getFormatUpcomingScheduleByPlayerPlayeridRoute = createRoute({
  method: 'get',
  path: '/{format}/UpcomingScheduleByPlayer/{playerid}',
  summary: 'Upcoming Schedule By Player',
  operationId: 'UpcomingScheduleByPlayer',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
      playerid: z
        .string()
        .openapi({
          param: {
            description: 'Unique FantasyData Player ID.\nExample:<code>90026231</code>.',
            in: 'path',
            name: 'playerid',
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

export const getFormatVenuesRoute = createRoute({
  method: 'get',
  path: '/{format}/Venues',
  summary: 'Venues',
  operationId: 'Venues',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .default('xml')
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { default: 'xml', enum: ['xml', 'json'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: z.array(VenueSchema) } } },
  },
})
