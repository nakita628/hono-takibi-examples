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

const CanceledMembershipSchema = z
  .object({
    CanceledMembershipId: z.int().exactOptional(),
    Created: z.string().nullable().exactOptional(),
    MembershipId: z.int().exactOptional(),
    PlayerID: z.int().exactOptional(),
    TeamId: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CanceledMembership')

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

export const getFormatCanceledMembershipsRoute = createRoute({
  method: 'get',
  path: '/{format}/CanceledMemberships',
  summary: 'Canceled Memberships',
  operationId: 'CanceledMemberships',
  request: {
    params: z.object({
      format: z
        .enum(['xml', 'json'])
        .openapi({
          param: {
            description:
              'Desired response format. Valid entries are <code>XML</code> or <code>JSON</code>.',
            in: 'path',
            name: 'format',
            required: true,
            schema: { enum: ['xml', 'json'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: '', content: { 'application/json': { schema: CanceledMembershipSchema } } },
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
