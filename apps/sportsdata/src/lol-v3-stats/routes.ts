import { createRoute, z } from '@hono/zod-openapi'

const ChampionInfoSchema = z
  .object({
    ChampionId: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChampionInfo')

const MatchBanSchema = z
  .object({
    Champion: ChampionInfoSchema.exactOptional(),
    ChampionId: z.int().nullable().exactOptional(),
    MatchId: z.int().exactOptional(),
    TeamId: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MatchBan')

const ItemSchema = z
  .object({
    GoldBase: z.int().exactOptional(),
    GoldSell: z.int().exactOptional(),
    GoldTotal: z.int().exactOptional(),
    ItemId: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Item')

const SpellSchema = z
  .object({ Name: z.string().nullable().exactOptional(), SpellId: z.int().exactOptional() })
  .openapi({ required: [] })
  .openapi('Spell')

const PlayerMatchSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    Champion: ChampionInfoSchema.exactOptional(),
    ChampionId: z.int().nullable().exactOptional(),
    ChampionLevel: z.int().nullable().exactOptional(),
    CombatPlayerScore: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    Deaths: z.number().nullable().exactOptional(),
    DoubleKills: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    GameId: z.int().exactOptional(),
    Games: z.int().exactOptional(),
    GoldEarned: z.number().nullable().exactOptional(),
    GoldSpent: z.number().nullable().exactOptional(),
    InhibitorKills: z.number().nullable().exactOptional(),
    IsClosed: z.boolean().exactOptional(),
    Items: z.array(ItemSchema).exactOptional(),
    KillingSpree: z.number().nullable().exactOptional(),
    Kills: z.number().nullable().exactOptional(),
    Lane: z.string().nullable().exactOptional(),
    LargestCriticalStrike: z.number().nullable().exactOptional(),
    LargestKillingSpree: z.number().nullable().exactOptional(),
    LargestMultiKill: z.number().nullable().exactOptional(),
    LongestTimeSpentLiving: z.number().nullable().exactOptional(),
    MagicDamageDealt: z.number().nullable().exactOptional(),
    MagicDamageDealtToChampions: z.number().nullable().exactOptional(),
    MagicDamageTaken: z.number().nullable().exactOptional(),
    MatchId: z.int().exactOptional(),
    MatchName: z.string().nullable().exactOptional(),
    Matches: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    NeutralMinionsKIlled: z.number().nullable().exactOptional(),
    NeutralMinionsKIlledTeamJungle: z.number().nullable().exactOptional(),
    NeutralMinionsKilledEnemyJungle: z.number().nullable().exactOptional(),
    ObjectivePlayerScore: z.number().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentId: z.int().exactOptional(),
    PentaKills: z.number().nullable().exactOptional(),
    PhysicalDamageDealt: z.number().nullable().exactOptional(),
    PhysicalDamageDealtToChampions: z.number().nullable().exactOptional(),
    PhysicalDamageTaken: z.number().nullable().exactOptional(),
    PlayerId: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    QuadraKills: z.number().nullable().exactOptional(),
    Role: z.string().nullable().exactOptional(),
    SightWardsBoughtInGame: z.number().nullable().exactOptional(),
    Spells: z.array(SpellSchema).exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamId: z.int().nullable().exactOptional(),
    TenKillsOrAssists: z.number().nullable().exactOptional(),
    TotalDamageDealt: z.number().nullable().exactOptional(),
    TotalDamageDealtToChampions: z.number().nullable().exactOptional(),
    TotalDamageTaken: z.number().nullable().exactOptional(),
    TotalHeal: z.number().nullable().exactOptional(),
    TotalMinionsKilled: z.number().nullable().exactOptional(),
    TotalPlayerScore: z.number().nullable().exactOptional(),
    TotalTimeCrowdControlDealt: z.number().nullable().exactOptional(),
    TotalUnitsHealed: z.number().nullable().exactOptional(),
    TripleKills: z.number().nullable().exactOptional(),
    TrueDamageDealt: z.number().nullable().exactOptional(),
    TrueDamageDealtToChampions: z.number().nullable().exactOptional(),
    TrueDamageTaken: z.number().nullable().exactOptional(),
    TurretKills: z.number().nullable().exactOptional(),
    UnrealKills: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    VisionWardsBoughtInGame: z.number().nullable().exactOptional(),
    WardsKilled: z.number().nullable().exactOptional(),
    WardsPlaced: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerMatch')

const TeamMatchSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    CombatPlayerScore: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    Deaths: z.number().nullable().exactOptional(),
    DoubleKills: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FirstBaron: z.number().nullable().exactOptional(),
    FirstBlood: z.number().nullable().exactOptional(),
    FirstDragon: z.number().nullable().exactOptional(),
    FirstInhibitor: z.number().nullable().exactOptional(),
    FirstRiftHerald: z.number().nullable().exactOptional(),
    FirstTower: z.number().nullable().exactOptional(),
    GameId: z.int().exactOptional(),
    Games: z.int().exactOptional(),
    GoldEarned: z.number().nullable().exactOptional(),
    GoldSpent: z.number().nullable().exactOptional(),
    InhibitorKills: z.number().nullable().exactOptional(),
    IsClosed: z.boolean().exactOptional(),
    KillingSpree: z.number().nullable().exactOptional(),
    Kills: z.number().nullable().exactOptional(),
    LargestCriticalStrike: z.number().nullable().exactOptional(),
    LargestKillingSpree: z.number().nullable().exactOptional(),
    LargestMultiKill: z.number().nullable().exactOptional(),
    LongestTimeSpentLiving: z.number().nullable().exactOptional(),
    MagicDamageDealt: z.number().nullable().exactOptional(),
    MagicDamageDealtToChampions: z.number().nullable().exactOptional(),
    MagicDamageTaken: z.number().nullable().exactOptional(),
    MatchName: z.string().nullable().exactOptional(),
    Matches: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    NeutralMinionsKIlled: z.number().nullable().exactOptional(),
    NeutralMinionsKIlledTeamJungle: z.number().nullable().exactOptional(),
    NeutralMinionsKilledEnemyJungle: z.number().nullable().exactOptional(),
    ObjectivePlayerScore: z.number().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentId: z.int().exactOptional(),
    PentaKills: z.number().nullable().exactOptional(),
    PhysicalDamageDealt: z.number().nullable().exactOptional(),
    PhysicalDamageDealtToChampions: z.number().nullable().exactOptional(),
    PhysicalDamageTaken: z.number().nullable().exactOptional(),
    PlayerId: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    QuadraKills: z.number().nullable().exactOptional(),
    SightWardsBoughtInGame: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamId: z.int().nullable().exactOptional(),
    TenKillsOrAssists: z.number().nullable().exactOptional(),
    TotalDamageDealt: z.number().nullable().exactOptional(),
    TotalDamageDealtToChampions: z.number().nullable().exactOptional(),
    TotalDamageTaken: z.number().nullable().exactOptional(),
    TotalHeal: z.number().nullable().exactOptional(),
    TotalMinionsKilled: z.number().nullable().exactOptional(),
    TotalPlayerScore: z.number().nullable().exactOptional(),
    TotalTimeCrowdControlDealt: z.number().nullable().exactOptional(),
    TotalUnitsHealed: z.number().nullable().exactOptional(),
    TripleKills: z.number().nullable().exactOptional(),
    TrueDamageDealt: z.number().nullable().exactOptional(),
    TrueDamageDealtToChampions: z.number().nullable().exactOptional(),
    TrueDamageTaken: z.number().nullable().exactOptional(),
    TurretKills: z.number().nullable().exactOptional(),
    UnrealKills: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    VisionWardsBoughtInGame: z.number().nullable().exactOptional(),
    WardsKilled: z.number().nullable().exactOptional(),
    WardsPlaced: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamMatch')

type MatchType = {
  GameId?: number
  GameVersion?: string | null
  MapName?: string | null
  MatchBans?: z.infer<typeof MatchBanSchema>[]
  Number?: number
  PlayerMatches?: z.infer<typeof PlayerMatchSchema>[]
  TeamMatches?: z.infer<typeof TeamMatchSchema>[]
  WinningTeamId?: number | null
}

const AreaSchema = z
  .object({
    AreaId: z.int().exactOptional(),
    CountryCode: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Area')

const GameSchema = z
  .object({
    BestOf: z.string().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    DrawMoneyLine: z.int().nullable().exactOptional(),
    GameId: z.int().exactOptional(),
    Group: z.string().nullable().exactOptional(),
    IsClosed: z.boolean().nullable().exactOptional(),
    PointSpread: z.number().nullable().exactOptional(),
    RoundId: z.int().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    Status: z.string().nullable().exactOptional(),
    TeamAId: z.int().nullable().exactOptional(),
    TeamAKey: z.string().nullable().exactOptional(),
    TeamAMoneyLine: z.int().nullable().exactOptional(),
    TeamAName: z.string().nullable().exactOptional(),
    TeamAPointSpreadPayout: z.int().nullable().exactOptional(),
    TeamAScore: z.int().nullable().exactOptional(),
    TeamBId: z.int().nullable().exactOptional(),
    TeamBKey: z.string().nullable().exactOptional(),
    TeamBMoneyLine: z.int().nullable().exactOptional(),
    TeamBName: z.string().nullable().exactOptional(),
    TeamBPointSpreadPayout: z.int().nullable().exactOptional(),
    TeamBScore: z.int().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    UpdatedUtc: z.string().nullable().exactOptional(),
    VenueId: z.int().nullable().exactOptional(),
    VenueType: z.string().nullable().exactOptional(),
    Week: z.int().nullable().exactOptional(),
    Winner: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Game')

const MatchSchema: z.ZodType<MatchType> = z
  .lazy(() =>
    z
      .object({
        GameId: z.int().exactOptional(),
        GameVersion: z.string().nullable().exactOptional(),
        MapName: z.string().nullable().exactOptional(),
        MatchBans: z.array(MatchBanSchema).exactOptional(),
        Number: z.int().exactOptional(),
        PlayerMatches: z.array(PlayerMatchSchema).exactOptional(),
        TeamMatches: z.array(TeamMatchSchema).exactOptional(),
        WinningTeamId: z.int().nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Match')

const PlayerGameSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    CombatPlayerScore: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    Deaths: z.number().nullable().exactOptional(),
    DoubleKills: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    GameId: z.int().exactOptional(),
    Games: z.int().exactOptional(),
    GoldEarned: z.number().nullable().exactOptional(),
    GoldSpent: z.number().nullable().exactOptional(),
    InhibitorKills: z.number().nullable().exactOptional(),
    IsClosed: z.boolean().exactOptional(),
    KillingSpree: z.number().nullable().exactOptional(),
    Kills: z.number().nullable().exactOptional(),
    LargestCriticalStrike: z.number().nullable().exactOptional(),
    LargestKillingSpree: z.number().nullable().exactOptional(),
    LargestMultiKill: z.number().nullable().exactOptional(),
    LongestTimeSpentLiving: z.number().nullable().exactOptional(),
    MagicDamageDealt: z.number().nullable().exactOptional(),
    MagicDamageDealtToChampions: z.number().nullable().exactOptional(),
    MagicDamageTaken: z.number().nullable().exactOptional(),
    MatchName: z.string().nullable().exactOptional(),
    Matches: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    NeutralMinionsKIlled: z.number().nullable().exactOptional(),
    NeutralMinionsKIlledTeamJungle: z.number().nullable().exactOptional(),
    NeutralMinionsKilledEnemyJungle: z.number().nullable().exactOptional(),
    ObjectivePlayerScore: z.number().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentId: z.int().exactOptional(),
    PentaKills: z.number().nullable().exactOptional(),
    PhysicalDamageDealt: z.number().nullable().exactOptional(),
    PhysicalDamageDealtToChampions: z.number().nullable().exactOptional(),
    PhysicalDamageTaken: z.number().nullable().exactOptional(),
    PlayerId: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    QuadraKills: z.number().nullable().exactOptional(),
    SightWardsBoughtInGame: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamId: z.int().nullable().exactOptional(),
    TenKillsOrAssists: z.number().nullable().exactOptional(),
    TotalDamageDealt: z.number().nullable().exactOptional(),
    TotalDamageDealtToChampions: z.number().nullable().exactOptional(),
    TotalDamageTaken: z.number().nullable().exactOptional(),
    TotalHeal: z.number().nullable().exactOptional(),
    TotalMinionsKilled: z.number().nullable().exactOptional(),
    TotalPlayerScore: z.number().nullable().exactOptional(),
    TotalTimeCrowdControlDealt: z.number().nullable().exactOptional(),
    TotalUnitsHealed: z.number().nullable().exactOptional(),
    TripleKills: z.number().nullable().exactOptional(),
    TrueDamageDealt: z.number().nullable().exactOptional(),
    TrueDamageDealtToChampions: z.number().nullable().exactOptional(),
    TrueDamageTaken: z.number().nullable().exactOptional(),
    TurretKills: z.number().nullable().exactOptional(),
    UnrealKills: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    VisionWardsBoughtInGame: z.number().nullable().exactOptional(),
    WardsKilled: z.number().nullable().exactOptional(),
    WardsPlaced: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlayerGame')

const TeamGameSchema = z
  .object({
    Assists: z.number().nullable().exactOptional(),
    CombatPlayerScore: z.number().nullable().exactOptional(),
    DateTime: z.string().nullable().exactOptional(),
    Day: z.string().nullable().exactOptional(),
    Deaths: z.number().nullable().exactOptional(),
    DoubleKills: z.number().nullable().exactOptional(),
    FantasyPoints: z.number().nullable().exactOptional(),
    FirstBaron: z.number().nullable().exactOptional(),
    FirstBlood: z.number().nullable().exactOptional(),
    FirstDragon: z.number().nullable().exactOptional(),
    FirstInhibitor: z.number().nullable().exactOptional(),
    FirstRiftHerald: z.number().nullable().exactOptional(),
    FirstTower: z.number().nullable().exactOptional(),
    GameId: z.int().exactOptional(),
    Games: z.int().exactOptional(),
    GoldEarned: z.number().nullable().exactOptional(),
    GoldSpent: z.number().nullable().exactOptional(),
    InhibitorKills: z.number().nullable().exactOptional(),
    IsClosed: z.boolean().exactOptional(),
    KillingSpree: z.number().nullable().exactOptional(),
    Kills: z.number().nullable().exactOptional(),
    LargestCriticalStrike: z.number().nullable().exactOptional(),
    LargestKillingSpree: z.number().nullable().exactOptional(),
    LargestMultiKill: z.number().nullable().exactOptional(),
    LongestTimeSpentLiving: z.number().nullable().exactOptional(),
    MagicDamageDealt: z.number().nullable().exactOptional(),
    MagicDamageDealtToChampions: z.number().nullable().exactOptional(),
    MagicDamageTaken: z.number().nullable().exactOptional(),
    MatchName: z.string().nullable().exactOptional(),
    Matches: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    NeutralMinionsKIlled: z.number().nullable().exactOptional(),
    NeutralMinionsKIlledTeamJungle: z.number().nullable().exactOptional(),
    NeutralMinionsKilledEnemyJungle: z.number().nullable().exactOptional(),
    ObjectivePlayerScore: z.number().nullable().exactOptional(),
    Opponent: z.string().nullable().exactOptional(),
    OpponentId: z.int().exactOptional(),
    PentaKills: z.number().nullable().exactOptional(),
    PhysicalDamageDealt: z.number().nullable().exactOptional(),
    PhysicalDamageDealtToChampions: z.number().nullable().exactOptional(),
    PhysicalDamageTaken: z.number().nullable().exactOptional(),
    PlayerId: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    QuadraKills: z.number().nullable().exactOptional(),
    SightWardsBoughtInGame: z.number().nullable().exactOptional(),
    Team: z.string().nullable().exactOptional(),
    TeamId: z.int().nullable().exactOptional(),
    TenKillsOrAssists: z.number().nullable().exactOptional(),
    TotalDamageDealt: z.number().nullable().exactOptional(),
    TotalDamageDealtToChampions: z.number().nullable().exactOptional(),
    TotalDamageTaken: z.number().nullable().exactOptional(),
    TotalHeal: z.number().nullable().exactOptional(),
    TotalMinionsKilled: z.number().nullable().exactOptional(),
    TotalPlayerScore: z.number().nullable().exactOptional(),
    TotalTimeCrowdControlDealt: z.number().nullable().exactOptional(),
    TotalUnitsHealed: z.number().nullable().exactOptional(),
    TripleKills: z.number().nullable().exactOptional(),
    TrueDamageDealt: z.number().nullable().exactOptional(),
    TrueDamageDealtToChampions: z.number().nullable().exactOptional(),
    TrueDamageTaken: z.number().nullable().exactOptional(),
    TurretKills: z.number().nullable().exactOptional(),
    UnrealKills: z.number().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
    VisionWardsBoughtInGame: z.number().nullable().exactOptional(),
    WardsKilled: z.number().nullable().exactOptional(),
    WardsPlaced: z.number().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TeamGame')

const BoxScoreSchema = z
  .object({
    Game: GameSchema.exactOptional(),
    Matches: z.array(MatchSchema).exactOptional(),
    PlayerGames: z.array(PlayerGameSchema).exactOptional(),
    TeamGames: z.array(TeamGameSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('BoxScore')

const ChampionSchema = z
  .object({
    Armor: z.number().exactOptional(),
    ArmorPerLevel: z.number().exactOptional(),
    Attack: z.number().exactOptional(),
    AttackDamage: z.number().exactOptional(),
    AttackDamagePerLevel: z.number().exactOptional(),
    AttackRange: z.number().exactOptional(),
    AttackSpeedOffset: z.number().exactOptional(),
    ChampionId: z.int().exactOptional(),
    Defense: z.number().exactOptional(),
    Difficulty: z.number().exactOptional(),
    Hp: z.number().exactOptional(),
    HpRegen: z.number().exactOptional(),
    HpRegenPerLevel: z.number().exactOptional(),
    HpUpPerLevel: z.number().exactOptional(),
    Magic: z.number().exactOptional(),
    MoveSpeed: z.number().exactOptional(),
    Mp: z.number().exactOptional(),
    MpRegen: z.number().exactOptional(),
    MpRegenPerLevel: z.number().exactOptional(),
    MpUpPerLevel: z.number().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    SpellBlock: z.number().exactOptional(),
    SpellBlockPerLevel: z.number().exactOptional(),
    Title: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Champion')

const RoundSchema = z
  .object({
    CurrentRound: z.boolean().exactOptional(),
    CurrentWeek: z.int().nullable().exactOptional(),
    EndDate: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    RoundId: z.int().exactOptional(),
    Season: z.int().exactOptional(),
    SeasonId: z.int().exactOptional(),
    SeasonType: z.int().exactOptional(),
    StartDate: z.string().nullable().exactOptional(),
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
    Name: z.string().nullable().exactOptional(),
    PlayerStatsCoverage: z.boolean().nullable().exactOptional(),
    Seasons: z.array(SeasonSchema).exactOptional(),
    Type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Competition')

const PlayerSchema = z
  .object({
    BirthCity: z.string().nullable().exactOptional(),
    BirthCountry: z.string().nullable().exactOptional(),
    BirthDate: z.string().nullable().exactOptional(),
    CommonName: z.string().nullable().exactOptional(),
    FirstName: z.string().nullable().exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    LastName: z.string().nullable().exactOptional(),
    MatchName: z.string().nullable().exactOptional(),
    Nationality: z.string().nullable().exactOptional(),
    PlayerId: z.int().exactOptional(),
    Position: z.string().nullable().exactOptional(),
    Updated: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Player')

const TeamDetailSchema = z
  .object({
    Active: z.boolean().exactOptional(),
    AreaId: z.int().nullable().exactOptional(),
    AreaName: z.string().nullable().exactOptional(),
    Email: z.string().nullable().exactOptional(),
    Facebook: z.string().nullable().exactOptional(),
    Founded: z.int().nullable().exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    Instagram: z.string().nullable().exactOptional(),
    Key: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Players: z.array(PlayerSchema).exactOptional(),
    PrimaryColor: z.string().nullable().exactOptional(),
    QuaternaryColor: z.string().nullable().exactOptional(),
    SecondaryColor: z.string().nullable().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    TeamId: z.int().exactOptional(),
    TertiaryColor: z.string().nullable().exactOptional(),
    Twitter: z.string().nullable().exactOptional(),
    Type: z.string().nullable().exactOptional(),
    Website: z.string().nullable().exactOptional(),
    YouTube: z.string().nullable().exactOptional(),
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
    Name: z.string().nullable().exactOptional(),
    PlayerStatsCoverage: z.boolean().nullable().exactOptional(),
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
    AreaId: z.int().nullable().exactOptional(),
    AreaName: z.string().nullable().exactOptional(),
    Email: z.string().nullable().exactOptional(),
    Facebook: z.string().nullable().exactOptional(),
    Founded: z.int().nullable().exactOptional(),
    Gender: z.string().nullable().exactOptional(),
    Instagram: z.string().nullable().exactOptional(),
    Key: z.string().nullable().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    PrimaryColor: z.string().nullable().exactOptional(),
    QuaternaryColor: z.string().nullable().exactOptional(),
    SecondaryColor: z.string().nullable().exactOptional(),
    ShortName: z.string().nullable().exactOptional(),
    TeamId: z.int().exactOptional(),
    TertiaryColor: z.string().nullable().exactOptional(),
    Twitter: z.string().nullable().exactOptional(),
    Type: z.string().nullable().exactOptional(),
    Website: z.string().nullable().exactOptional(),
    YouTube: z.string().nullable().exactOptional(),
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

const StandingSchema = z
  .object({
    Games: z.int().exactOptional(),
    Group: z.string().nullable().exactOptional(),
    Losses: z.int().exactOptional(),
    Name: z.string().nullable().exactOptional(),
    Order: z.int().nullable().exactOptional(),
    Points: z.int().exactOptional(),
    RoundId: z.int().exactOptional(),
    ScoreAgainst: z.int().exactOptional(),
    ScoreDifference: z.int().exactOptional(),
    ScoreFor: z.int().exactOptional(),
    StandingId: z.int().exactOptional(),
    TeamId: z.int().exactOptional(),
    Wins: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Standing')

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
  description: 'Memberships (Active)',
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
  description: 'Areas (Countries)',
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
  description: 'Games by Date',
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
            description: 'Unique FantasyData Game ID. \nExample:<code>100002649</code>.',
            in: 'path',
            name: 'gameid',
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

export const getFormatBoxScoresDateRoute = createRoute({
  method: 'get',
  path: '/{format}/BoxScores/{date}',
  summary: 'Box Scores by Date',
  description: 'Games by Date',
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
            description: 'The date of the game(s).\n<br>Examples: <code>2019-01-20</code>',
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

export const getFormatChampionsRoute = createRoute({
  method: 'get',
  path: '/{format}/Champions',
  summary: 'Champions',
  description: 'Areas (Countries)',
  operationId: 'Champions',
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
    200: { description: '', content: { 'application/json': { schema: z.array(ChampionSchema) } } },
  },
})

export const getFormatCompetitionDetailsCompetitionidRoute = createRoute({
  method: 'get',
  path: '/{format}/CompetitionDetails/{competitionid}',
  summary: 'Competition Fixtures (League Details)',
  description: 'Competition Fixtures (League Details)',
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
      competitionid: z
        .string()
        .openapi({
          param: {
            description:
              'A LoL competition/league unique CompetitionId. Possible values include: <code>100000019</code>, etc.',
            in: 'path',
            name: 'competitionid',
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

export const getFormatCompetitionsRoute = createRoute({
  method: 'get',
  path: '/{format}/Competitions',
  summary: 'Competitions (Leagues)',
  description: 'Competitions (Leagues)',
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
  description: 'Games by Date',
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
            description: 'The date of the game(s).\n<br>Examples: <code>2019-01-20</code>',
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
  description: 'Memberships (Historical)',
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

export const getFormatHistoricalMembershipsByTeamTeamidRoute = createRoute({
  method: 'get',
  path: '/{format}/HistoricalMembershipsByTeam/{teamid}',
  summary: 'Memberships by Team (Historical)',
  description: 'Memberships by Team (Historical)',
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
            description: 'Unique FantasyData Team ID. \nExample:<code>100000165</code>.',
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

export const getFormatItemsRoute = createRoute({
  method: 'get',
  path: '/{format}/Items',
  summary: 'Items',
  description: 'Competitions (Leagues)',
  operationId: 'Items',
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
    200: { description: '', content: { 'application/json': { schema: z.array(ItemSchema) } } },
  },
})

export const getFormatMembershipsByTeamTeamidRoute = createRoute({
  method: 'get',
  path: '/{format}/MembershipsByTeam/{teamid}',
  summary: 'Memberships by Team (Active)',
  description: 'Memberships by Team (Active)',
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
            description: 'Unique FantasyData Team ID. \nExample:<code>100000165</code>.',
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
  description: 'Player',
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
            description: 'Unique FantasyData Player ID.\nExample:<code>100001500</code>.',
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
  description: 'Players',
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
  description: 'Players by Team',
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
            description: 'Unique FantasyData Team ID. \nExample:<code>100000165</code>.',
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

export const getFormatScheduleRoundidRoute = createRoute({
  method: 'get',
  path: '/{format}/Schedule/{roundid}',
  summary: 'Schedule',
  description: 'Schedule',
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
              'Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints. \nExample: <code>100000278</code>, etc',
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
  description: 'Season Teams',
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
              'Unique FantasyData Season ID. SeasonIDs can be found in the Competitions and Competition Details endpoints. \nExamples: <code>100000057</code>, etc',
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

export const getFormatSpellsRoute = createRoute({
  method: 'get',
  path: '/{format}/Spells',
  summary: 'Spells',
  description: 'Areas (Countries)',
  operationId: 'Spells',
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
    200: { description: '', content: { 'application/json': { schema: z.array(SpellSchema) } } },
  },
})

export const getFormatStandingsRoundidRoute = createRoute({
  method: 'get',
  path: '/{format}/Standings/{roundid}',
  summary: 'Standings',
  description: 'Standings',
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
              'Unique FantasyData Round ID. RoundIDs can be found in the Competitions and Competition Details endpoints. \nExample: <code>100000278</code>, etc',
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

export const getFormatTeamsRoute = createRoute({
  method: 'get',
  path: '/{format}/Teams',
  summary: 'Teams',
  description: 'Teams',
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

export const getFormatVenuesRoute = createRoute({
  method: 'get',
  path: '/{format}/Venues',
  summary: 'Venues',
  description: 'Venues',
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
