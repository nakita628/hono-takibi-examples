import { createRoute, z } from '@hono/zod-openapi'

const ErrorSchema = z
  .object({
    status: z
      .object({ status_code: z.int().exactOptional(), message: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('Error')

const AccountV1AccountDtoSchema = z
  .object({
    puuid: z
      .string()
      .openapi({
        'x-type': 'string',
        description: 'Encrypted PUUID. Exact length of 78 characters.',
      }),
    gameName: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          "This field may be excluded from the response if the account doesn't have a gameName.",
      }),
    tagLine: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          "This field may be excluded from the response if the account doesn't have a tagLine.",
      }),
  })
  .openapi({ title: 'AccountDto', required: ['puuid'] })
  .openapi('AccountV1AccountDto')

const AccountV1AccountRegionDTOSchema = z
  .object({
    puuid: z
      .string()
      .openapi({
        'x-type': 'string',
        description:
          'Player Universal Unique Identifier. Exact length of 78 characters. (Encrypted)',
      }),
    game: z.string().openapi({ 'x-type': 'string', description: 'Game to lookup active region' }),
    region: z.string().openapi({ 'x-type': 'string', description: 'Player active region' }),
  })
  .openapi({
    title: 'AccountRegionDTO',
    description: 'Account region',
    required: ['puuid', 'game', 'region'],
  })
  .openapi('AccountV1AccountRegionDTO')

const AccountV1ActiveShardDtoSchema = z
  .object({
    puuid: z.string().openapi({ 'x-type': 'string' }),
    game: z.string().openapi({ 'x-type': 'string' }),
    activeShard: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'ActiveShardDto', required: ['puuid', 'game', 'activeShard'] })
  .openapi('AccountV1ActiveShardDto')

const ChampionMasteryV4RewardConfigDtoSchema = z
  .object({
    rewardValue: z.string().openapi({ 'x-type': 'string', description: 'Reward value' }),
    rewardType: z.string().openapi({ 'x-type': 'string', description: 'Reward type' }),
    maximumReward: z.int32().openapi({ 'x-type': 'int', description: 'Maximun reward' }),
  })
  .openapi({
    title: 'RewardConfigDto',
    description: 'This object contains required reward config information.',
    required: ['rewardValue', 'rewardType', 'maximumReward'],
  })
  .openapi('ChampionMasteryV4RewardConfigDto')

const ChampionMasteryV4NextSeasonMilestonesDtoSchema = z
  .object({
    requireGradeCounts: z
      .record(z.string(), z.int32().openapi({ 'x-type': 'int' }))
      .openapi({ 'x-key': { type: 'string', 'x-type': 'string' }, 'x-type': 'Map[string, int]' }),
    rewardMarks: z.int32().openapi({ 'x-type': 'int', description: 'Reward marks.' }),
    bonus: z.boolean().openapi({ 'x-type': 'boolean', description: 'Bonus.' }),
    rewardConfig: ChampionMasteryV4RewardConfigDtoSchema.exactOptional().openapi({
      'x-type': 'RewardConfigDto',
      description: 'Reward configuration.',
    }),
    totalGamesRequires: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({
    title: 'NextSeasonMilestonesDto',
    description: 'This object contains required next season milestone information.',
    required: ['requireGradeCounts', 'rewardMarks', 'bonus', 'totalGamesRequires'],
  })
  .openapi('ChampionMasteryV4NextSeasonMilestonesDto')

const ChampionMasteryV4ChampionMasteryDtoSchema = z
  .object({
    puuid: z
      .string()
      .openapi({
        'x-type': 'string',
        description:
          'Player Universal Unique Identifier. Exact length of 78 characters. (Encrypted)',
      }),
    championPointsUntilNextLevel: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description:
          'Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion.',
      }),
    chestGranted: z
      .boolean()
      .exactOptional()
      .openapi({
        'x-type': 'boolean',
        description: 'Is chest granted for this champion or not in current season.',
      }),
    championId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'Champion ID for this entry.',
        'x-enum': 'champion',
      }),
    lastPlayTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description:
          'Last time this champion was played by this player - in Unix milliseconds time format.',
      }),
    championLevel: z
      .int32()
      .openapi({
        'x-type': 'int',
        description: 'Champion level for specified player and champion combination.',
      }),
    championPoints: z
      .int32()
      .openapi({
        'x-type': 'int',
        description:
          'Total number of champion points for this player and champion combination - they are used to determine championLevel.',
      }),
    championPointsSinceLastLevel: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'Number of points earned since current level has been achieved.',
      }),
    markRequiredForNextLevel: z.int32().openapi({ 'x-type': 'int' }),
    championSeasonMilestone: z.int32().openapi({ 'x-type': 'int' }),
    nextSeasonMilestone: ChampionMasteryV4NextSeasonMilestonesDtoSchema.openapi({
      'x-type': 'NextSeasonMilestonesDto',
    }),
    tokensEarned: z
      .int32()
      .openapi({
        'x-type': 'int',
        description:
          'The token earned for this champion at the current championLevel. When the championLevel is advanced the tokensEarned resets to 0.',
      }),
    milestoneGrades: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .exactOptional()
      .openapi({ 'x-type': 'List[string]' }),
  })
  .openapi({
    title: 'ChampionMasteryDto',
    description:
      'This object contains single Champion Mastery information for player and champion combination.',
    required: [
      'puuid',
      'championPointsUntilNextLevel',
      'championId',
      'lastPlayTime',
      'championLevel',
      'championPoints',
      'championPointsSinceLastLevel',
      'markRequiredForNextLevel',
      'championSeasonMilestone',
      'nextSeasonMilestone',
      'tokensEarned',
    ],
  })
  .openapi('ChampionMasteryV4ChampionMasteryDto')

const ChampionV3ChampionInfoSchema = z
  .object({
    newplayer: z
      .array(z.int32().openapi({ 'x-type': 'int', 'x-enum': 'champion' }))
      .openapi({ 'x-type': 'List[int]' }),
    sr: z
      .array(z.int32().openapi({ 'x-type': 'int', 'x-enum': 'champion' }))
      .openapi({ 'x-type': 'List[int]' }),
  })
  .openapi({ title: 'ChampionInfo', required: ['newplayer', 'sr'] })
  .openapi('ChampionV3ChampionInfo')

const ChampionV3ArraySchema = z
  .object({})
  .openapi({ title: 'array', description: 'UNKNOWN TYPE.' })
  .openapi('ChampionV3Array')

const ClashV1PlayerDtoSchema = z
  .object({
    puuid: z.string().openapi({ 'x-type': 'string' }),
    teamId: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    position: z
      .enum(['UNSELECTED', 'FILL', 'TOP', 'JUNGLE', 'MIDDLE', 'BOTTOM', 'UTILITY'])
      .openapi({
        'x-type': 'string',
        description:
          '(Legal values:  UNSELECTED,  FILL,  TOP,  JUNGLE,  MIDDLE,  BOTTOM,  UTILITY)',
      }),
    role: z
      .enum(['CAPTAIN', 'MEMBER'])
      .openapi({ 'x-type': 'string', description: '(Legal values:  CAPTAIN,  MEMBER)' }),
  })
  .openapi({ title: 'PlayerDto', required: ['puuid', 'position', 'role'] })
  .openapi('ClashV1PlayerDto')

const ClashV1TeamDtoSchema = z
  .object({
    id: z.string().openapi({ 'x-type': 'string' }),
    tournamentId: z.int32().openapi({ 'x-type': 'int' }),
    name: z.string().openapi({ 'x-type': 'string' }),
    iconId: z.int32().openapi({ 'x-type': 'int' }),
    tier: z.int32().openapi({ 'x-type': 'int' }),
    captain: z
      .string()
      .openapi({ 'x-type': 'string', description: 'Summoner ID of the team captain.' }),
    abbreviation: z.string().openapi({ 'x-type': 'string' }),
    players: z
      .array(ClashV1PlayerDtoSchema)
      .openapi({ 'x-type': 'List[PlayerDto]', description: 'Team members.' }),
  })
  .openapi({
    title: 'TeamDto',
    required: [
      'id',
      'tournamentId',
      'name',
      'iconId',
      'tier',
      'captain',
      'abbreviation',
      'players',
    ],
  })
  .openapi('ClashV1TeamDto')

const ClashV1TournamentPhaseDtoSchema = z
  .object({
    id: z.int32().openapi({ 'x-type': 'int' }),
    registrationTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    startTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    cancelled: z.boolean().openapi({ 'x-type': 'boolean' }),
  })
  .openapi({
    title: 'TournamentPhaseDto',
    required: ['id', 'registrationTime', 'startTime', 'cancelled'],
  })
  .openapi('ClashV1TournamentPhaseDto')

const ClashV1TournamentDtoSchema = z
  .object({
    id: z.int32().openapi({ 'x-type': 'int' }),
    themeId: z.int32().openapi({ 'x-type': 'int' }),
    nameKey: z.string().openapi({ 'x-type': 'string' }),
    nameKeySecondary: z.string().openapi({ 'x-type': 'string' }),
    schedule: z
      .array(ClashV1TournamentPhaseDtoSchema)
      .openapi({ 'x-type': 'List[TournamentPhaseDto]', description: 'Tournament phase.' }),
  })
  .openapi({
    title: 'TournamentDto',
    required: ['id', 'themeId', 'nameKey', 'nameKeySecondary', 'schedule'],
  })
  .openapi('ClashV1TournamentDto')

const LeagueExpV4MiniSeriesDTOSchema = z
  .object({
    losses: z.int32().openapi({ 'x-type': 'int' }),
    progress: z.string().openapi({ 'x-type': 'string' }),
    target: z.int32().openapi({ 'x-type': 'int' }),
    wins: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({ title: 'MiniSeriesDTO', required: ['losses', 'progress', 'target', 'wins'] })
  .openapi('LeagueExpV4MiniSeriesDTO')

const LeagueExpV4LeagueEntryDTOSchema = z
  .object({
    leagueId: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    summonerId: z
      .string()
      .exactOptional()
      .openapi({ 'x-type': 'string', description: "Player's summonerId (Encrypted)" }),
    puuid: z.string().openapi({ 'x-type': 'string', description: "Player's encrypted puuid." }),
    queueType: z.string().openapi({ 'x-type': 'string', 'x-enum': 'queueType' }),
    tier: z.string().openapi({ 'x-type': 'string', 'x-enum': 'tier' }),
    rank: z
      .string()
      .openapi({
        'x-type': 'string',
        description: "The player's division within a tier.",
        'x-enum': 'division',
      }),
    leaguePoints: z.int32().openapi({ 'x-type': 'int' }),
    wins: z
      .int32()
      .openapi({
        'x-type': 'int',
        description: 'Winning team on Summoners Rift. First placement in Teamfight Tactics.',
      }),
    losses: z
      .int32()
      .openapi({
        'x-type': 'int',
        description:
          'Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.',
      }),
    hotStreak: z.boolean().openapi({ 'x-type': 'boolean' }),
    veteran: z.boolean().openapi({ 'x-type': 'boolean' }),
    freshBlood: z.boolean().openapi({ 'x-type': 'boolean' }),
    inactive: z.boolean().openapi({ 'x-type': 'boolean' }),
    miniSeries: LeagueExpV4MiniSeriesDTOSchema.exactOptional().openapi({
      'x-type': 'MiniSeriesDTO',
    }),
  })
  .openapi({
    title: 'LeagueEntryDTO',
    required: [
      'puuid',
      'queueType',
      'tier',
      'rank',
      'leaguePoints',
      'wins',
      'losses',
      'hotStreak',
      'veteran',
      'freshBlood',
      'inactive',
    ],
  })
  .openapi('LeagueExpV4LeagueEntryDTO')

const LeagueV4MiniSeriesDTOSchema = z
  .object({
    losses: z.int32().openapi({ 'x-type': 'int' }),
    progress: z.string().openapi({ 'x-type': 'string' }),
    target: z.int32().openapi({ 'x-type': 'int' }),
    wins: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({ title: 'MiniSeriesDTO', required: ['losses', 'progress', 'target', 'wins'] })
  .openapi('LeagueV4MiniSeriesDTO')

const LeagueV4LeagueItemDTOSchema = z
  .object({
    freshBlood: z.boolean().openapi({ 'x-type': 'boolean' }),
    wins: z.int32().openapi({ 'x-type': 'int', description: 'Winning team on Summoners Rift.' }),
    miniSeries: LeagueV4MiniSeriesDTOSchema.exactOptional().openapi({ 'x-type': 'MiniSeriesDTO' }),
    inactive: z.boolean().openapi({ 'x-type': 'boolean' }),
    veteran: z.boolean().openapi({ 'x-type': 'boolean' }),
    hotStreak: z.boolean().openapi({ 'x-type': 'boolean' }),
    rank: z.string().openapi({ 'x-type': 'string', 'x-enum': 'division' }),
    leaguePoints: z.int32().openapi({ 'x-type': 'int' }),
    losses: z.int32().openapi({ 'x-type': 'int', description: 'Losing team on Summoners Rift.' }),
    puuid: z.string().openapi({ 'x-type': 'string', description: "Player's encrypted puuid." }),
    summonerId: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          'Encrypted summoner ID. This field is deprecated and will be removed. Use `puuid` instead.',
      }),
  })
  .openapi({
    title: 'LeagueItemDTO',
    required: [
      'freshBlood',
      'wins',
      'inactive',
      'veteran',
      'hotStreak',
      'rank',
      'leaguePoints',
      'losses',
      'puuid',
    ],
  })
  .openapi('LeagueV4LeagueItemDTO')

const LeagueV4LeagueListDTOSchema = z
  .object({
    leagueId: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    entries: z.array(LeagueV4LeagueItemDTOSchema).openapi({ 'x-type': 'List[LeagueItemDTO]' }),
    tier: z.string().openapi({ 'x-type': 'string', 'x-enum': 'tier' }),
    name: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    queue: z.string().exactOptional().openapi({ 'x-type': 'string', 'x-enum': 'queueType' }),
  })
  .openapi({ title: 'LeagueListDTO', required: ['entries', 'tier'] })
  .openapi('LeagueV4LeagueListDTO')

const LeagueV4LeagueEntryDTOSchema = z
  .object({
    leagueId: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    puuid: z.string().openapi({ 'x-type': 'string', description: "Player's encrypted puuid." }),
    queueType: z.string().openapi({ 'x-type': 'string', 'x-enum': 'queueType' }),
    tier: z.string().exactOptional().openapi({ 'x-type': 'string', 'x-enum': 'tier' }),
    rank: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description: "The player's division within a tier.",
        'x-enum': 'division',
      }),
    leaguePoints: z.int32().openapi({ 'x-type': 'int' }),
    wins: z.int32().openapi({ 'x-type': 'int', description: 'Winning team on Summoners Rift.' }),
    losses: z.int32().openapi({ 'x-type': 'int', description: 'Losing team on Summoners Rift.' }),
    hotStreak: z.boolean().openapi({ 'x-type': 'boolean' }),
    veteran: z.boolean().openapi({ 'x-type': 'boolean' }),
    freshBlood: z.boolean().openapi({ 'x-type': 'boolean' }),
    inactive: z.boolean().openapi({ 'x-type': 'boolean' }),
    miniSeries: LeagueV4MiniSeriesDTOSchema.exactOptional().openapi({ 'x-type': 'MiniSeriesDTO' }),
    summonerId: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          'Encrypted summoner ID. This field is deprecated and will be removed. Use `puuid` instead.',
      }),
  })
  .openapi({
    title: 'LeagueEntryDTO',
    required: [
      'puuid',
      'queueType',
      'leaguePoints',
      'wins',
      'losses',
      'hotStreak',
      'veteran',
      'freshBlood',
      'inactive',
    ],
  })
  .openapi('LeagueV4LeagueEntryDTO')

const LolChallengesV1ChallengeConfigInfoDtoSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    localizedNames: z
      .record(
        z.string(),
        z
          .record(z.string(), z.string().openapi({ 'x-type': 'string' }))
          .openapi({
            'x-key': { type: 'string', 'x-type': 'String' },
            'x-type': 'Map[String, string]',
          }),
      )
      .openapi({
        'x-key': { type: 'string', 'x-type': 'String' },
        'x-type': 'Map[String, Map[String, string]]',
      }),
    state: z
      .enum(['DISABLED', 'HIDDEN', 'ENABLED', 'ARCHIVED'])
      .openapi({
        'x-type': 'string',
        description:
          'DISABLED - not visible and not calculated, HIDDEN - not visible, but calculated, ENABLED - visible and calculated, ARCHIVED - visible, but not calculated',
      }),
    tracking: z
      .enum(['LIFETIME', 'SEASON'])
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          'LIFETIME - stats are incremented without reset, SEASON - stats are accumulated by season and reset at the beginning of new season',
      }),
    startTimestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    endTimestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    leaderboard: z.boolean().openapi({ 'x-type': 'boolean' }),
    thresholds: z
      .record(z.string(), z.float64().openapi({ 'x-type': 'double' }))
      .openapi({
        'x-key': { type: 'string', 'x-type': 'String' },
        'x-type': 'Map[String, double]',
      }),
  })
  .openapi({
    title: 'ChallengeConfigInfoDto',
    required: ['id', 'localizedNames', 'state', 'leaderboard', 'thresholds'],
  })
  .openapi('LolChallengesV1ChallengeConfigInfoDto')

const LolChallengesV1StateSchema = z
  .object({})
  .openapi({
    title: 'State',
    description:
      'DISABLED - not visible and not calculated,\nHIDDEN - not visible, but calculated,\nENABLED - visible and calculated,\nARCHIVED - visible, but not calculated',
  })
  .openapi('LolChallengesV1State')

const LolChallengesV1TrackingSchema = z
  .object({})
  .openapi({
    title: 'Tracking',
    description:
      'LIFETIME - stats are incremented without reset,\nSEASON - stats are accumulated by season and reset at the beginning of new season',
  })
  .openapi('LolChallengesV1Tracking')

const LolChallengesV1ApexPlayerInfoDtoSchema = z
  .object({
    puuid: z.string().openapi({ 'x-type': 'string' }),
    value: z.float64().openapi({ 'x-type': 'double' }),
    position: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({ title: 'ApexPlayerInfoDto', required: ['puuid', 'value', 'position'] })
  .openapi('LolChallengesV1ApexPlayerInfoDto')

const LolChallengesV1LevelSchema = z
  .object({})
  .openapi({
    title: 'Level',
    description:
      '0 NONE,\n1 IRON,\n2 BRONZE,\n3 SILVER,\n4 GOLD,\n5 PLATINUM,\n6 DIAMOND,\n7 MASTER,\n8 GRANDMASTER,\n9 CHALLENGER',
  })
  .openapi('LolChallengesV1Level')

const LolChallengesV1ChallengeInfoDtoSchema = z
  .object({
    percentile: z.float64().openapi({ 'x-type': 'double' }),
    playersInLevel: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    achievedTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    value: z.float64().openapi({ 'x-type': 'double' }),
    challengeId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    level: z
      .enum([
        'NONE',
        'IRON',
        'BRONZE',
        'SILVER',
        'GOLD',
        'PLATINUM',
        'DIAMOND',
        'MASTER',
        'GRANDMASTER',
        'CHALLENGER',
        'HIGHEST_NOT_LEADERBOARD_ONLY',
        'HIGHEST',
        'LOWEST',
      ])
      .openapi({
        'x-type': 'string',
        description:
          '(Legal values:  NONE,  IRON,  BRONZE,  SILVER,  GOLD,  PLATINUM,  DIAMOND,  MASTER,  GRANDMASTER,  CHALLENGER,  HIGHEST_NOT_LEADERBOARD_ONLY,  HIGHEST,  LOWEST)',
      }),
    position: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
  })
  .openapi({ title: 'ChallengeInfoDto', required: ['percentile', 'value', 'challengeId', 'level'] })
  .openapi('LolChallengesV1ChallengeInfoDto')

const LolChallengesV1PlayerClientPreferencesDtoSchema = z
  .object({
    bannerAccent: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    title: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    challengeIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
      )
      .exactOptional()
      .openapi({ 'x-type': 'List[long]' }),
    crestBorder: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    prestigeCrestBorderLevel: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
  })
  .openapi({ title: 'PlayerClientPreferencesDto', required: [] })
  .openapi('LolChallengesV1PlayerClientPreferencesDto')

const LolChallengesV1ChallengePointDtoSchema = z
  .object({
    level: z.string().openapi({ 'x-type': 'string', 'x-enum': 'tier' }),
    current: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    max: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    percentile: z.float64().exactOptional().openapi({ 'x-type': 'double' }),
    position: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
  })
  .openapi({ title: 'ChallengePointDto', required: ['level', 'current', 'max'] })
  .openapi('LolChallengesV1ChallengePointDto')

const LolChallengesV1PlayerInfoDtoSchema = z
  .object({
    challenges: z
      .array(LolChallengesV1ChallengeInfoDtoSchema)
      .openapi({ 'x-type': 'List[ChallengeInfoDto]' }),
    preferences: LolChallengesV1PlayerClientPreferencesDtoSchema.openapi({
      'x-type': 'PlayerClientPreferencesDto',
    }),
    totalPoints: LolChallengesV1ChallengePointDtoSchema.openapi({ 'x-type': 'ChallengePointDto' }),
    categoryPoints: z
      .record(
        z.string(),
        LolChallengesV1ChallengePointDtoSchema.openapi({ 'x-type': 'ChallengePointDto' }),
      )
      .openapi({
        'x-key': { type: 'string', 'x-type': 'String' },
        'x-type': 'Map[String, ChallengePointDto]',
      }),
  })
  .openapi({
    title: 'PlayerInfoDto',
    required: ['challenges', 'preferences', 'totalPoints', 'categoryPoints'],
  })
  .openapi('LolChallengesV1PlayerInfoDto')

const LolRsoMatchV1MatchDtoSchema = z
  .object({})
  .openapi({ title: 'MatchDto', description: 'UNKNOWN TYPE.' })
  .openapi('LolRsoMatchV1MatchDto')

const LolRsoMatchV1TimelineDtoSchema = z
  .object({})
  .openapi({ title: 'TimelineDto', description: 'UNKNOWN TYPE.' })
  .openapi('LolRsoMatchV1TimelineDto')

const LolStatusV4ContentDtoSchema = z
  .object({
    locale: z.string().openapi({ 'x-type': 'string', 'x-enum': 'locale' }),
    content: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'ContentDto', required: ['locale', 'content'] })
  .openapi('LolStatusV4ContentDto')

const LolStatusV4UpdateDtoSchema = z
  .object({
    id: z.int32().openapi({ 'x-type': 'int' }),
    author: z.string().openapi({ 'x-type': 'string' }),
    publish: z.boolean().openapi({ 'x-type': 'boolean' }),
    publish_locations: z
      .array(z.enum(['riotclient', 'riotstatus', 'game']).openapi({ 'x-type': 'string' }))
      .openapi({
        'x-type': 'List[string]',
        description: '(Legal values: riotclient, riotstatus, game)',
      }),
    translations: z.array(LolStatusV4ContentDtoSchema).openapi({ 'x-type': 'List[ContentDto]' }),
    created_at: z.string().openapi({ 'x-type': 'string' }),
    updated_at: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({
    title: 'UpdateDto',
    required: [
      'id',
      'author',
      'publish',
      'publish_locations',
      'translations',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('LolStatusV4UpdateDto')

const LolStatusV4StatusDtoSchema = z
  .object({
    id: z.int32().openapi({ 'x-type': 'int' }),
    maintenance_status: z
      .enum(['scheduled', 'in_progress', 'complete'])
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description: '(Legal values:  scheduled,  in_progress,  complete)',
      }),
    incident_severity: z
      .enum(['info', 'warning', 'critical'])
      .exactOptional()
      .openapi({ 'x-type': 'string', description: '(Legal values:  info,  warning,  critical)' }),
    titles: z.array(LolStatusV4ContentDtoSchema).openapi({ 'x-type': 'List[ContentDto]' }),
    updates: z.array(LolStatusV4UpdateDtoSchema).openapi({ 'x-type': 'List[UpdateDto]' }),
    created_at: z.string().openapi({ 'x-type': 'string' }),
    archive_at: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    updated_at: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    platforms: z
      .array(
        z
          .enum(['windows', 'macos', 'android', 'ios', 'ps4', 'xbone', 'switch'])
          .openapi({ 'x-type': 'string' }),
      )
      .openapi({
        'x-type': 'List[string]',
        description: '(Legal values: windows, macos, android, ios, ps4, xbone, switch)',
      }),
  })
  .openapi({ title: 'StatusDto', required: ['id', 'titles', 'updates', 'created_at', 'platforms'] })
  .openapi('LolStatusV4StatusDto')

const LolStatusV4PlatformDataDtoSchema = z
  .object({
    id: z.string().openapi({ 'x-type': 'string' }),
    name: z.string().openapi({ 'x-type': 'string' }),
    locales: z
      .array(z.string().openapi({ 'x-type': 'string', 'x-enum': 'locale' }))
      .openapi({ 'x-type': 'List[string]' }),
    maintenances: z.array(LolStatusV4StatusDtoSchema).openapi({ 'x-type': 'List[StatusDto]' }),
    incidents: z.array(LolStatusV4StatusDtoSchema).openapi({ 'x-type': 'List[StatusDto]' }),
  })
  .openapi({
    title: 'PlatformDataDto',
    required: ['id', 'name', 'locales', 'maintenances', 'incidents'],
  })
  .openapi('LolStatusV4PlatformDataDto')

const LorDeckV1DeckDtoSchema = z
  .object({
    id: z.string().openapi({ 'x-type': 'string' }),
    name: z.string().openapi({ 'x-type': 'string' }),
    code: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'DeckDto', required: ['id', 'name', 'code'] })
  .openapi('LorDeckV1DeckDto')

const LorDeckV1NewDeckDtoSchema = z
  .object({
    name: z.string().openapi({ 'x-type': 'string' }),
    code: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'NewDeckDto', required: ['name', 'code'] })
  .openapi('LorDeckV1NewDeckDto')

const LorInventoryV1CardDtoSchema = z
  .object({
    code: z.string().openapi({ 'x-type': 'string' }),
    count: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'CardDto', required: ['code', 'count'] })
  .openapi('LorInventoryV1CardDto')

const LorMatchV1MetadataDtoSchema = z
  .object({
    data_version: z.string().openapi({ 'x-type': 'string', description: 'Match data version.' }),
    match_id: z.string().openapi({ 'x-type': 'string', description: 'Match id.' }),
    participants: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .openapi({ 'x-type': 'List[string]', description: 'A list of participant PUUIDs.' }),
  })
  .openapi({ title: 'MetadataDto', required: ['data_version', 'match_id', 'participants'] })
  .openapi('LorMatchV1MetadataDto')

const LorMatchV1PlayerDtoSchema = z
  .object({
    puuid: z.string().openapi({ 'x-type': 'string' }),
    deck_id: z.string().openapi({ 'x-type': 'string' }),
    deck_code: z
      .string()
      .openapi({
        'x-type': 'string',
        description:
          'Code for the deck played. Refer to LOR documentation for details on deck codes.',
      }),
    factions: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .openapi({ 'x-type': 'List[string]' }),
    game_outcome: z.string().openapi({ 'x-type': 'string' }),
    order_of_play: z
      .int32()
      .openapi({ 'x-type': 'int', description: 'The order in which the players took turns.' }),
  })
  .openapi({
    title: 'PlayerDto',
    required: ['puuid', 'deck_id', 'deck_code', 'factions', 'game_outcome', 'order_of_play'],
  })
  .openapi('LorMatchV1PlayerDto')

const LorMatchV1InfoDtoSchema = z
  .object({
    game_mode: z
      .enum(['Constructed', 'Expeditions', 'Tutorial'])
      .openapi({
        'x-type': 'string',
        description: '(Legal values:  Constructed,  Expeditions,  Tutorial)',
      }),
    game_type: z
      .enum(['Ranked', 'Normal', 'AI', 'Tutorial', 'VanillaTrial', 'Singleton', 'StandardGauntlet'])
      .openapi({
        'x-type': 'string',
        description:
          '(Legal values:  Ranked,  Normal,  AI,  Tutorial,  VanillaTrial,  Singleton,  StandardGauntlet)',
      }),
    game_start_time_utc: z.string().openapi({ 'x-type': 'string' }),
    game_version: z.string().openapi({ 'x-type': 'string' }),
    game_format: z
      .enum(['standard', 'eternal'])
      .openapi({ 'x-type': 'string', description: '(Legal values:  standard,  eternal)' }),
    players: z.array(LorMatchV1PlayerDtoSchema).openapi({ 'x-type': 'List[PlayerDto]' }),
    total_turn_count: z
      .int32()
      .openapi({ 'x-type': 'int', description: 'Total turns taken by both players.' }),
  })
  .openapi({
    title: 'InfoDto',
    required: [
      'game_mode',
      'game_type',
      'game_start_time_utc',
      'game_version',
      'game_format',
      'players',
      'total_turn_count',
    ],
  })
  .openapi('LorMatchV1InfoDto')

const LorMatchV1MatchDtoSchema = z
  .object({
    metadata: LorMatchV1MetadataDtoSchema.openapi({
      'x-type': 'MetadataDto',
      description: 'Match metadata.',
    }),
    info: LorMatchV1InfoDtoSchema.openapi({ 'x-type': 'InfoDto', description: 'Match info.' }),
  })
  .openapi({ title: 'MatchDto', required: ['metadata', 'info'] })
  .openapi('LorMatchV1MatchDto')

const LorRankedV1PlayerDtoSchema = z
  .object({
    name: z.string().openapi({ 'x-type': 'string' }),
    rank: z.int32().openapi({ 'x-type': 'int' }),
    lp: z.int32().openapi({ 'x-type': 'int', description: 'League points.' }),
  })
  .openapi({ title: 'PlayerDto', required: ['name', 'rank', 'lp'] })
  .openapi('LorRankedV1PlayerDto')

const LorRankedV1LeaderboardDtoSchema = z
  .object({
    players: z
      .array(LorRankedV1PlayerDtoSchema)
      .openapi({ 'x-type': 'List[PlayerDto]', description: 'A list of players in Master tier.' }),
  })
  .openapi({ title: 'LeaderboardDto', required: ['players'] })
  .openapi('LorRankedV1LeaderboardDto')

const LorStatusV1ContentDtoSchema = z
  .object({
    locale: z.string().openapi({ 'x-type': 'string', 'x-enum': 'locale' }),
    content: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'ContentDto', required: ['locale', 'content'] })
  .openapi('LorStatusV1ContentDto')

const LorStatusV1UpdateDtoSchema = z
  .object({
    id: z.int32().openapi({ 'x-type': 'int' }),
    author: z.string().openapi({ 'x-type': 'string' }),
    publish: z.boolean().openapi({ 'x-type': 'boolean' }),
    publish_locations: z
      .array(z.enum(['riotclient', 'riotstatus', 'game']).openapi({ 'x-type': 'string' }))
      .openapi({
        'x-type': 'List[string]',
        description: '(Legal values: riotclient, riotstatus, game)',
      }),
    translations: z.array(LorStatusV1ContentDtoSchema).openapi({ 'x-type': 'List[ContentDto]' }),
    created_at: z.string().openapi({ 'x-type': 'string' }),
    updated_at: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({
    title: 'UpdateDto',
    required: [
      'id',
      'author',
      'publish',
      'publish_locations',
      'translations',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('LorStatusV1UpdateDto')

const LorStatusV1StatusDtoSchema = z
  .object({
    id: z.int32().openapi({ 'x-type': 'int' }),
    maintenance_status: z
      .enum(['scheduled', 'in_progress', 'complete'])
      .openapi({
        'x-type': 'string',
        description: '(Legal values:  scheduled,  in_progress,  complete)',
      }),
    incident_severity: z
      .enum(['info', 'warning', 'critical'])
      .openapi({ 'x-type': 'string', description: '(Legal values:  info,  warning,  critical)' }),
    titles: z.array(LorStatusV1ContentDtoSchema).openapi({ 'x-type': 'List[ContentDto]' }),
    updates: z.array(LorStatusV1UpdateDtoSchema).openapi({ 'x-type': 'List[UpdateDto]' }),
    created_at: z.string().openapi({ 'x-type': 'string' }),
    archive_at: z.string().openapi({ 'x-type': 'string' }),
    updated_at: z.string().openapi({ 'x-type': 'string' }),
    platforms: z
      .array(
        z
          .enum(['windows', 'macos', 'android', 'ios', 'ps4', 'xbone', 'switch'])
          .openapi({ 'x-type': 'string' }),
      )
      .openapi({
        'x-type': 'List[string]',
        description: '(Legal values: windows, macos, android, ios, ps4, xbone, switch)',
      }),
  })
  .openapi({
    title: 'StatusDto',
    required: [
      'id',
      'maintenance_status',
      'incident_severity',
      'titles',
      'updates',
      'created_at',
      'archive_at',
      'updated_at',
      'platforms',
    ],
  })
  .openapi('LorStatusV1StatusDto')

const LorStatusV1PlatformDataDtoSchema = z
  .object({
    id: z.string().openapi({ 'x-type': 'string' }),
    name: z.string().openapi({ 'x-type': 'string' }),
    locales: z
      .array(z.string().openapi({ 'x-type': 'string', 'x-enum': 'locale' }))
      .openapi({ 'x-type': 'List[string]' }),
    maintenances: z.array(LorStatusV1StatusDtoSchema).openapi({ 'x-type': 'List[StatusDto]' }),
    incidents: z.array(LorStatusV1StatusDtoSchema).openapi({ 'x-type': 'List[StatusDto]' }),
  })
  .openapi({
    title: 'PlatformDataDto',
    required: ['id', 'name', 'locales', 'maintenances', 'incidents'],
  })
  .openapi('LorStatusV1PlatformDataDto')

const MatchV5ReplayDTOSchema = z
  .object({
    total: z.int32().openapi({ 'x-type': 'int', description: 'Total of replay files' }),
    matchFileURLs: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .openapi({ 'x-type': 'List[string]' }),
  })
  .openapi({ title: 'ReplayDTO', required: ['total', 'matchFileURLs'] })
  .openapi('MatchV5ReplayDTO')

const MatchV5MetadataDtoSchema = z
  .object({
    dataVersion: z.string().openapi({ 'x-type': 'string', description: 'Match data version.' }),
    matchId: z.string().openapi({ 'x-type': 'string', description: 'Match id.' }),
    participants: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .openapi({ 'x-type': 'List[string]', description: 'A list of participant PUUIDs.' }),
  })
  .openapi({ title: 'MetadataDto', required: ['dataVersion', 'matchId', 'participants'] })
  .openapi('MatchV5MetadataDto')

const MatchV5ChallengesDtoSchema = z
  .object({
    '12AssistStreakCount': z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    baronBuffGoldAdvantageOverThreshold: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    controlWardTimeCoverageInRiverOrEnemyHalf: z
      .float32()
      .exactOptional()
      .openapi({ 'x-type': 'float' }),
    earliestBaron: z.float64().exactOptional().openapi({ 'x-type': 'double' }),
    earliestDragonTakedown: z.float64().exactOptional().openapi({ 'x-type': 'double' }),
    earliestElderDragon: z.float64().exactOptional().openapi({ 'x-type': 'double' }),
    earlyLaningPhaseGoldExpAdvantage: z.float64().exactOptional().openapi({ 'x-type': 'double' }),
    fasterSupportQuestCompletion: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ 'x-type': 'integer' }),
    fastestLegendary: z.float64().exactOptional().openapi({ 'x-type': 'double' }),
    hadAfkTeammate: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ 'x-type': 'integer' }),
    highestChampionDamage: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    highestCrowdControlScore: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ 'x-type': 'integer' }),
    highestWardKills: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ 'x-type': 'integer' }),
    junglerKillsEarlyJungle: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    killsOnLanersEarlyJungleAsJungler: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    laningPhaseGoldExpAdvantage: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ 'x-type': 'integer' }),
    legendaryCount: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    maxCsAdvantageOnLaneOpponent: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    maxLevelLeadLaneOpponent: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    mostWardsDestroyedOneSweeper: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    mythicItemUsed: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    playedChampSelectPosition: z
      .union([z.literal(0), z.literal(1)])
      .exactOptional()
      .openapi({ 'x-type': 'integer' }),
    soloTurretsLategame: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    takedownsFirst25Minutes: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    teleportTakedowns: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    thirdInhibitorDestroyedTime: z.float64().exactOptional().openapi({ 'x-type': 'double' }),
    threeWardsOneSweeperCount: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    visionScoreAdvantageLaneOpponent: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    InfernalScalePickup: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    fistBumpParticipation: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    voidMonsterKill: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    abilityUses: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    acesBefore15Minutes: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    alliedJungleMonsterKills: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    baronTakedowns: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    blastConeOppositeOpponentCount: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    bountyGold: z.float64().exactOptional().openapi({ 'x-type': 'double' }),
    buffsStolen: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    completeSupportQuestInTime: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    controlWardsPlaced: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    damagePerMinute: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    damageTakenOnTeamPercentage: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    dancedWithRiftHerald: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    deathsByEnemyChamps: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    dodgeSkillShotsSmallWindow: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    doubleAces: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    dragonTakedowns: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    legendaryItemUsed: z
      .array(z.int32().openapi({ 'x-type': 'int' }))
      .exactOptional()
      .openapi({ 'x-type': 'List[int]' }),
    effectiveHealAndShielding: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    elderDragonKillsWithOpposingSoul: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    elderDragonMultikills: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    enemyChampionImmobilizations: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    enemyJungleMonsterKills: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    epicMonsterKillsNearEnemyJungler: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    epicMonsterKillsWithin30SecondsOfSpawn: z
      .int32()
      .exactOptional()
      .openapi({ 'x-type': 'integer' }),
    epicMonsterSteals: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    epicMonsterStolenWithoutSmite: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    firstTurretKilled: z.float64().exactOptional().openapi({ 'x-type': 'double' }),
    firstTurretKilledTime: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    flawlessAces: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    fullTeamTakedown: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    gameLength: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    getTakedownsInAllLanesEarlyJungleAsLaner: z
      .int32()
      .exactOptional()
      .openapi({ 'x-type': 'integer' }),
    goldPerMinute: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    hadOpenNexus: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    immobilizeAndKillWithAlly: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    initialBuffCount: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    initialCrabCount: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    jungleCsBefore10Minutes: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    junglerTakedownsNearDamagedEpicMonster: z
      .int32()
      .exactOptional()
      .openapi({ 'x-type': 'integer' }),
    kda: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    killAfterHiddenWithAlly: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    killedChampTookFullTeamDamageSurvived: z
      .int32()
      .exactOptional()
      .openapi({ 'x-type': 'integer' }),
    killingSprees: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    killParticipation: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    killsNearEnemyTurret: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    killsOnOtherLanesEarlyJungleAsLaner: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    killsOnRecentlyHealedByAramPack: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    killsUnderOwnTurret: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    killsWithHelpFromEpicMonster: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    knockEnemyIntoTeamAndKill: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    kTurretsDestroyedBeforePlatesFall: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    landSkillShotsEarlyGame: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    laneMinionsFirst10Minutes: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    lostAnInhibitor: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    maxKillDeficit: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    mejaisFullStackInTime: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    moreEnemyJungleThanOpponent: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    multiKillOneSpell: z
      .int32()
      .exactOptional()
      .openapi({
        'x-type': 'integer',
        description:
          "This is an offshoot of the OneStone challenge. The code checks if a spell with the same instance ID does the final point of damage to at least 2 Champions. It doesn't matter if they're enemies, but you cannot hurt your friends.",
      }),
    multikills: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    multikillsAfterAggressiveFlash: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    multiTurretRiftHeraldCount: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    outerTurretExecutesBefore10Minutes: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    outnumberedKills: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    outnumberedNexusKill: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    perfectDragonSoulsTaken: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    perfectGame: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    pickKillWithAlly: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    poroExplosions: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    quickCleanse: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    quickFirstTurret: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    quickSoloKills: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    riftHeraldTakedowns: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    saveAllyFromDeath: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    scuttleCrabKills: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    shortestTimeToAceFromFirstTakedown: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    skillshotsDodged: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    skillshotsHit: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    snowballsHit: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    soloBaronKills: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    SWARM_DefeatAatrox: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    SWARM_DefeatBriar: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    SWARM_DefeatMiniBosses: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    SWARM_EvolveWeapon: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    SWARM_Have3Passives: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    SWARM_KillEnemy: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    SWARM_PickupGold: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    SWARM_ReachLevel50: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    SWARM_Survive15Min: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    SWARM_WinWith5EvolvedWeapons: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    soloKills: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    stealthWardsPlaced: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    survivedSingleDigitHpCount: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    survivedThreeImmobilizesInFight: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    takedownOnFirstTurret: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    takedowns: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    takedownsAfterGainingLevelAdvantage: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    takedownsBeforeJungleMinionSpawn: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    takedownsFirstXMinutes: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    takedownsInAlcove: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    takedownsInEnemyFountain: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    teamBaronKills: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    teamDamagePercentage: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    teamElderDragonKills: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    teamRiftHeraldKills: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    tookLargeDamageSurvived: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    turretPlatesTaken: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    turretsTakenWithRiftHerald: z
      .int32()
      .exactOptional()
      .openapi({
        'x-type': 'integer',
        description:
          'Any player who damages a tower that is destroyed within 30 seconds of a Rift Herald charge will receive credit. A player who does not damage the tower will not receive credit.',
      }),
    turretTakedowns: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    twentyMinionsIn3SecondsCount: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    twoWardsOneSweeperCount: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    unseenRecalls: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    visionScorePerMinute: z.float32().exactOptional().openapi({ 'x-type': 'float' }),
    wardsGuarded: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    wardTakedowns: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    wardTakedownsBefore20M: z.int32().exactOptional().openapi({ 'x-type': 'integer' }),
    HealFromMapSources: z.float64().exactOptional().openapi({ 'x-type': 'double' }),
  })
  .openapi({ title: 'ChallengesDto', description: 'Challenges DTO', required: [] })
  .openapi('MatchV5ChallengesDto')

const MatchV5MissionsDtoSchema = z
  .object({
    playerScore0: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore0' }),
    playerScore1: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore1' }),
    playerScore2: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore2' }),
    playerScore3: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore3' }),
    playerScore4: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore4' }),
    playerScore5: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore5' }),
    playerScore6: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore6' }),
    playerScore7: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore7' }),
    playerScore8: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore8' }),
    playerScore9: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore9' }),
    playerScore10: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore10' }),
    playerScore11: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore11' }),
  })
  .openapi({ title: 'MissionsDto', description: 'Missions DTO', required: [] })
  .openapi('MatchV5MissionsDto')

const MatchV5PerkStatsDtoSchema = z
  .object({
    defense: z.int32().openapi({ 'x-type': 'int' }),
    flex: z.int32().openapi({ 'x-type': 'int' }),
    offense: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({ title: 'PerkStatsDto', required: ['defense', 'flex', 'offense'] })
  .openapi('MatchV5PerkStatsDto')

const MatchV5PerkStyleSelectionDtoSchema = z
  .object({
    perk: z.int32().openapi({ 'x-type': 'int' }),
    var1: z.int32().openapi({ 'x-type': 'int' }),
    var2: z.int32().openapi({ 'x-type': 'int' }),
    var3: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({ title: 'PerkStyleSelectionDto', required: ['perk', 'var1', 'var2', 'var3'] })
  .openapi('MatchV5PerkStyleSelectionDto')

const MatchV5PerkStyleDtoSchema = z
  .object({
    description: z.string().openapi({ 'x-type': 'string' }),
    selections: z
      .array(MatchV5PerkStyleSelectionDtoSchema)
      .openapi({ 'x-type': 'List[PerkStyleSelectionDto]' }),
    style: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({ title: 'PerkStyleDto', required: ['description', 'selections', 'style'] })
  .openapi('MatchV5PerkStyleDto')

const MatchV5PerksDtoSchema = z
  .object({
    statPerks: MatchV5PerkStatsDtoSchema.openapi({ 'x-type': 'PerkStatsDto' }),
    styles: z.array(MatchV5PerkStyleDtoSchema).openapi({ 'x-type': 'List[PerkStyleDto]' }),
  })
  .openapi({ title: 'PerksDto', required: ['statPerks', 'styles'] })
  .openapi('MatchV5PerksDto')

const MatchV5ParticipantPlayerBehaviorDtoSchema = z
  .object({ PlayerBehavior_IsHeroInCombat: z.int32().exactOptional().openapi({ 'x-type': 'int' }) })
  .openapi({ title: 'ParticipantPlayerBehaviorDto', required: [] })
  .openapi('MatchV5ParticipantPlayerBehaviorDto')

const MatchV5ParticipantDtoSchema = z
  .object({
    allInPings: z
      .int32()
      .exactOptional()
      .openapi({ 'x-type': 'int', description: 'Yellow crossed swords' }),
    assistMePings: z
      .int32()
      .exactOptional()
      .openapi({ 'x-type': 'int', description: 'Green flag' }),
    assists: z.int32().openapi({ 'x-type': 'int' }),
    baronKills: z.int32().openapi({ 'x-type': 'int' }),
    bountyLevel: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    champExperience: z.int32().openapi({ 'x-type': 'int' }),
    champLevel: z.int32().openapi({ 'x-type': 'int' }),
    championId: z
      .int32()
      .openapi({
        'x-type': 'int',
        description:
          'Prior to patch 11.4, on Feb 18th, 2021, this field returned invalid championIds. We recommend determining the champion based on the championName field for matches played prior to patch 11.4.',
        'x-enum': 'champion',
      }),
    championName: z.string().openapi({ 'x-type': 'string' }),
    commandPings: z
      .int32()
      .exactOptional()
      .openapi({ 'x-type': 'int', description: 'Blue generic ping (ALT+click)' }),
    championTransform: z
      .int32()
      .openapi({
        'x-type': 'int',
        description:
          "This field is currently only utilized for Kayn's transformations. (Legal values: 0 - None, 1 - Slayer, 2 - Assassin)",
      }),
    consumablesPurchased: z.int32().openapi({ 'x-type': 'int' }),
    challenges: MatchV5ChallengesDtoSchema.exactOptional().openapi({ 'x-type': 'ChallengesDto' }),
    damageDealtToBuildings: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    damageDealtToObjectives: z.int32().openapi({ 'x-type': 'int' }),
    damageDealtToTurrets: z.int32().openapi({ 'x-type': 'int' }),
    damageSelfMitigated: z.int32().openapi({ 'x-type': 'int' }),
    deaths: z.int32().openapi({ 'x-type': 'int' }),
    detectorWardsPlaced: z.int32().openapi({ 'x-type': 'int' }),
    doubleKills: z.int32().openapi({ 'x-type': 'int' }),
    dragonKills: z.int32().openapi({ 'x-type': 'int' }),
    eligibleForProgression: z.boolean().exactOptional().openapi({ 'x-type': 'boolean' }),
    enemyMissingPings: z
      .int32()
      .exactOptional()
      .openapi({ 'x-type': 'int', description: 'Yellow questionmark' }),
    enemyVisionPings: z
      .int32()
      .exactOptional()
      .openapi({ 'x-type': 'int', description: 'Red eyeball' }),
    firstBloodAssist: z.boolean().openapi({ 'x-type': 'boolean' }),
    firstBloodKill: z.boolean().openapi({ 'x-type': 'boolean' }),
    firstTowerAssist: z.boolean().openapi({ 'x-type': 'boolean' }),
    firstTowerKill: z.boolean().openapi({ 'x-type': 'boolean' }),
    gameEndedInEarlySurrender: z
      .boolean()
      .openapi({
        'x-type': 'boolean',
        description:
          "This is an offshoot of the OneStone challenge. The code checks if a spell with the same instance ID does the final point of damage to at least 2 Champions. It doesn't matter if they're enemies, but you cannot hurt your friends.",
      }),
    gameEndedInSurrender: z.boolean().openapi({ 'x-type': 'boolean' }),
    holdPings: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    getBackPings: z
      .int32()
      .exactOptional()
      .openapi({ 'x-type': 'int', description: 'Yellow circle with horizontal line' }),
    goldEarned: z.int32().openapi({ 'x-type': 'int' }),
    goldSpent: z.int32().openapi({ 'x-type': 'int' }),
    individualPosition: z
      .string()
      .openapi({
        'x-type': 'string',
        description:
          'Both individualPosition and teamPosition are computed by the game server and are different versions of the most likely position played by a player. The individualPosition is the best guess for which position the player actually played in isolation of anything else. The teamPosition is the best guess for which position the player actually played if we add the constraint that each team must have one top player, one jungle, one middle, etc. Generally the recommendation is to use the teamPosition field over the individualPosition field.',
      }),
    inhibitorKills: z.int32().openapi({ 'x-type': 'int' }),
    inhibitorTakedowns: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    inhibitorsLost: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    item0: z.int32().openapi({ 'x-type': 'int' }),
    item1: z.int32().openapi({ 'x-type': 'int' }),
    item2: z.int32().openapi({ 'x-type': 'int' }),
    item3: z.int32().openapi({ 'x-type': 'int' }),
    item4: z.int32().openapi({ 'x-type': 'int' }),
    item5: z.int32().openapi({ 'x-type': 'int' }),
    item6: z.int32().openapi({ 'x-type': 'int' }),
    itemsPurchased: z.int32().openapi({ 'x-type': 'int' }),
    killingSprees: z.int32().openapi({ 'x-type': 'int' }),
    kills: z.int32().openapi({ 'x-type': 'int' }),
    lane: z.string().openapi({ 'x-type': 'string' }),
    largestCriticalStrike: z.int32().openapi({ 'x-type': 'int' }),
    largestKillingSpree: z.int32().openapi({ 'x-type': 'int' }),
    largestMultiKill: z.int32().openapi({ 'x-type': 'int' }),
    longestTimeSpentLiving: z.int32().openapi({ 'x-type': 'int' }),
    magicDamageDealt: z.int32().openapi({ 'x-type': 'int' }),
    magicDamageDealtToChampions: z.int32().openapi({ 'x-type': 'int' }),
    magicDamageTaken: z.int32().openapi({ 'x-type': 'int' }),
    missions: MatchV5MissionsDtoSchema.exactOptional().openapi({ 'x-type': 'MissionsDto' }),
    neutralMinionsKilled: z
      .int32()
      .openapi({
        'x-type': 'int',
        description:
          'neutralMinionsKilled = mNeutralMinionsKilled, which is incremented on kills of kPet and kJungleMonster',
      }),
    needVisionPings: z
      .int32()
      .exactOptional()
      .openapi({ 'x-type': 'int', description: 'Green ward' }),
    nexusKills: z.int32().openapi({ 'x-type': 'int' }),
    nexusTakedowns: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    nexusLost: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    objectivesStolen: z.int32().openapi({ 'x-type': 'int' }),
    objectivesStolenAssists: z.int32().openapi({ 'x-type': 'int' }),
    onMyWayPings: z
      .int32()
      .exactOptional()
      .openapi({ 'x-type': 'int', description: 'Blue arrow pointing at ground' }),
    participantId: z.int32().openapi({ 'x-type': 'int' }),
    playerScore0: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore0' }),
    playerScore1: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore1' }),
    playerScore2: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore2' }),
    playerScore3: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore3' }),
    playerScore4: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore4' }),
    playerScore5: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore5' }),
    playerScore6: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore6' }),
    playerScore7: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore7' }),
    playerScore8: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore8' }),
    playerScore9: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore9' }),
    playerScore10: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore10' }),
    playerScore11: z.float32().exactOptional().openapi({ 'x-alias': 'PlayerScore11' }),
    pentaKills: z.int32().openapi({ 'x-type': 'int' }),
    perks: MatchV5PerksDtoSchema.openapi({ 'x-type': 'PerksDto' }),
    physicalDamageDealt: z.int32().openapi({ 'x-type': 'int' }),
    physicalDamageDealtToChampions: z.int32().openapi({ 'x-type': 'int' }),
    physicalDamageTaken: z.int32().openapi({ 'x-type': 'int' }),
    placement: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    playerAugment1: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    playerAugment2: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    playerAugment3: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    playerAugment4: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    playerSubteamId: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    pushPings: z.int32().exactOptional().openapi({ 'x-type': 'int', description: 'Green minion' }),
    profileIcon: z.int32().openapi({ 'x-type': 'int' }),
    puuid: z.string().openapi({ 'x-type': 'string' }),
    quadraKills: z.int32().openapi({ 'x-type': 'int' }),
    riotIdGameName: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    riotIdTagline: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    role: z.string().openapi({ 'x-type': 'string' }),
    sightWardsBoughtInGame: z.int32().openapi({ 'x-type': 'int' }),
    spell1Casts: z.int32().openapi({ 'x-type': 'int' }),
    spell2Casts: z.int32().openapi({ 'x-type': 'int' }),
    spell3Casts: z.int32().openapi({ 'x-type': 'int' }),
    spell4Casts: z.int32().openapi({ 'x-type': 'int' }),
    subteamPlacement: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    summoner1Casts: z.int32().openapi({ 'x-type': 'int' }),
    summoner1Id: z.int32().openapi({ 'x-type': 'int' }),
    summoner2Casts: z.int32().openapi({ 'x-type': 'int' }),
    summoner2Id: z.int32().openapi({ 'x-type': 'int' }),
    summonerId: z.string().openapi({ 'x-type': 'string' }),
    summonerLevel: z.int32().openapi({ 'x-type': 'int' }),
    summonerName: z.string().openapi({ 'x-type': 'string' }),
    teamEarlySurrendered: z.boolean().openapi({ 'x-type': 'boolean' }),
    teamId: z.int32().openapi({ 'x-type': 'int', 'x-enum': 'team' }),
    teamPosition: z
      .string()
      .openapi({
        'x-type': 'string',
        description:
          'Both individualPosition and teamPosition are computed by the game server and are different versions of the most likely position played by a player. The individualPosition is the best guess for which position the player actually played in isolation of anything else. The teamPosition is the best guess for which position the player actually played if we add the constraint that each team must have one top player, one jungle, one middle, etc. Generally the recommendation is to use the teamPosition field over the individualPosition field.',
      }),
    timeCCingOthers: z.int32().openapi({ 'x-type': 'int' }),
    timePlayed: z.int32().openapi({ 'x-type': 'int' }),
    totalAllyJungleMinionsKilled: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    totalDamageDealt: z.int32().openapi({ 'x-type': 'int' }),
    totalDamageDealtToChampions: z.int32().openapi({ 'x-type': 'int' }),
    totalDamageShieldedOnTeammates: z.int32().openapi({ 'x-type': 'int' }),
    totalDamageTaken: z.int32().openapi({ 'x-type': 'int' }),
    totalEnemyJungleMinionsKilled: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    totalHeal: z
      .int32()
      .openapi({
        'x-type': 'int',
        description:
          'Whenever positive health is applied (which translates to all heals in the game but not things like regeneration), totalHeal is incremented by the amount of health received. This includes healing enemies, jungle monsters, yourself, etc',
      }),
    totalHealsOnTeammates: z
      .int32()
      .openapi({
        'x-type': 'int',
        description:
          'Whenever positive health is applied (which translates to all heals in the game but not things like regeneration), totalHealsOnTeammates is incremented by the amount of health received.  This is post modified, so if you heal someone missing 5 health for 100 you will get +5 totalHealsOnTeammates',
      }),
    totalMinionsKilled: z
      .int32()
      .openapi({
        'x-type': 'int',
        description:
          'totalMillionsKilled = mMinionsKilled, which is only incremented on kills of kTeamMinion, kMeleeLaneMinion, kSuperLaneMinion, kRangedLaneMinion and kSiegeLaneMinion',
      }),
    totalTimeCCDealt: z.int32().openapi({ 'x-type': 'int' }),
    totalTimeSpentDead: z.int32().openapi({ 'x-type': 'int' }),
    totalUnitsHealed: z.int32().openapi({ 'x-type': 'int' }),
    tripleKills: z.int32().openapi({ 'x-type': 'int' }),
    trueDamageDealt: z.int32().openapi({ 'x-type': 'int' }),
    trueDamageDealtToChampions: z.int32().openapi({ 'x-type': 'int' }),
    trueDamageTaken: z.int32().openapi({ 'x-type': 'int' }),
    turretKills: z.int32().openapi({ 'x-type': 'int' }),
    turretTakedowns: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    turretsLost: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    unrealKills: z.int32().openapi({ 'x-type': 'int' }),
    visionScore: z.int32().openapi({ 'x-type': 'int' }),
    visionClearedPings: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    visionWardsBoughtInGame: z.int32().openapi({ 'x-type': 'int' }),
    wardsKilled: z.int32().openapi({ 'x-type': 'int' }),
    wardsPlaced: z.int32().openapi({ 'x-type': 'int' }),
    win: z.boolean().openapi({ 'x-type': 'boolean' }),
    baitPings: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    dangerPings: z
      .int32()
      .exactOptional()
      .openapi({
        'x-type': 'int',
        description: 'https://github.com/RiotGames/developer-relations/issues/870',
      }),
    basicPings: z
      .int32()
      .exactOptional()
      .openapi({
        'x-type': 'int',
        description: 'https://github.com/RiotGames/developer-relations/issues/814',
      }),
    playerAugment5: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    playerAugment6: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    riotIdName: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          'Deprecated, use `riotIdGameName`. This field name was briefly used instead of `riotIdGameName`, prior to patch 14.5.',
      }),
    retreatPings: z
      .int32()
      .exactOptional()
      .openapi({
        'x-type': 'int',
        description: 'https://github.com/RiotGames/developer-relations/issues/814',
      }),
    championSkinId: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    damageDealtToEpicMonsters: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    roleBoundItem: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    PlayerBehavior: MatchV5ParticipantPlayerBehaviorDtoSchema.exactOptional().openapi({
      'x-type': 'ParticipantPlayerBehaviorDto',
      description:
        'https://github.com/RiotGames/developer-relations/issues/754#issuecomment-3940157820',
    }),
    causedGameEndFromIGNBSurrender: z.boolean().exactOptional().openapi({ 'x-type': 'boolean' }),
    gameEndedInIGNBSurrender: z.boolean().exactOptional().openapi({ 'x-type': 'boolean' }),
    positionAssignedByMatchmaking: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    selectedRolePreferences: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    teamIGNBSurrendered: z.boolean().exactOptional().openapi({ 'x-type': 'boolean' }),
    wasPremadeWithIGNBGameEndCauser: z.boolean().exactOptional().openapi({ 'x-type': 'boolean' }),
    wasPremadeWithSevereTransgressor: z.boolean().exactOptional().openapi({ 'x-type': 'boolean' }),
    wasSevereTransgressor: z.boolean().exactOptional().openapi({ 'x-type': 'boolean' }),
  })
  .openapi({
    title: 'ParticipantDto',
    required: [
      'assists',
      'baronKills',
      'champExperience',
      'champLevel',
      'championId',
      'championName',
      'championTransform',
      'consumablesPurchased',
      'damageDealtToObjectives',
      'damageDealtToTurrets',
      'damageSelfMitigated',
      'deaths',
      'detectorWardsPlaced',
      'doubleKills',
      'dragonKills',
      'firstBloodAssist',
      'firstBloodKill',
      'firstTowerAssist',
      'firstTowerKill',
      'gameEndedInEarlySurrender',
      'gameEndedInSurrender',
      'goldEarned',
      'goldSpent',
      'individualPosition',
      'inhibitorKills',
      'item0',
      'item1',
      'item2',
      'item3',
      'item4',
      'item5',
      'item6',
      'itemsPurchased',
      'killingSprees',
      'kills',
      'lane',
      'largestCriticalStrike',
      'largestKillingSpree',
      'largestMultiKill',
      'longestTimeSpentLiving',
      'magicDamageDealt',
      'magicDamageDealtToChampions',
      'magicDamageTaken',
      'neutralMinionsKilled',
      'nexusKills',
      'objectivesStolen',
      'objectivesStolenAssists',
      'participantId',
      'pentaKills',
      'perks',
      'physicalDamageDealt',
      'physicalDamageDealtToChampions',
      'physicalDamageTaken',
      'profileIcon',
      'puuid',
      'quadraKills',
      'role',
      'sightWardsBoughtInGame',
      'spell1Casts',
      'spell2Casts',
      'spell3Casts',
      'spell4Casts',
      'summoner1Casts',
      'summoner1Id',
      'summoner2Casts',
      'summoner2Id',
      'summonerId',
      'summonerLevel',
      'summonerName',
      'teamEarlySurrendered',
      'teamId',
      'teamPosition',
      'timeCCingOthers',
      'timePlayed',
      'totalDamageDealt',
      'totalDamageDealtToChampions',
      'totalDamageShieldedOnTeammates',
      'totalDamageTaken',
      'totalHeal',
      'totalHealsOnTeammates',
      'totalMinionsKilled',
      'totalTimeCCDealt',
      'totalTimeSpentDead',
      'totalUnitsHealed',
      'tripleKills',
      'trueDamageDealt',
      'trueDamageDealtToChampions',
      'trueDamageTaken',
      'turretKills',
      'unrealKills',
      'visionScore',
      'visionWardsBoughtInGame',
      'wardsKilled',
      'wardsPlaced',
      'win',
    ],
  })
  .openapi('MatchV5ParticipantDto')

const MatchV5BanDtoSchema = z
  .object({
    championId: z.int32().openapi({ 'x-type': 'int', 'x-enum': 'champion' }),
    pickTurn: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({ title: 'BanDto', required: ['championId', 'pickTurn'] })
  .openapi('MatchV5BanDto')

const MatchV5ObjectiveDtoSchema = z
  .object({
    first: z.boolean().openapi({ 'x-type': 'boolean' }),
    kills: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({ title: 'ObjectiveDto', required: ['first', 'kills'] })
  .openapi('MatchV5ObjectiveDto')

const MatchV5ObjectivesDtoSchema = z
  .object({
    baron: MatchV5ObjectiveDtoSchema.openapi({ 'x-type': 'ObjectiveDto' }),
    champion: MatchV5ObjectiveDtoSchema.openapi({ 'x-type': 'ObjectiveDto' }),
    dragon: MatchV5ObjectiveDtoSchema.openapi({ 'x-type': 'ObjectiveDto' }),
    horde: MatchV5ObjectiveDtoSchema.exactOptional().openapi({ 'x-type': 'ObjectiveDto' }),
    inhibitor: MatchV5ObjectiveDtoSchema.openapi({ 'x-type': 'ObjectiveDto' }),
    riftHerald: MatchV5ObjectiveDtoSchema.openapi({ 'x-type': 'ObjectiveDto' }),
    tower: MatchV5ObjectiveDtoSchema.openapi({ 'x-type': 'ObjectiveDto' }),
    atakhan: MatchV5ObjectiveDtoSchema.exactOptional().openapi({ 'x-type': 'ObjectiveDto' }),
  })
  .openapi({
    title: 'ObjectivesDto',
    required: ['baron', 'champion', 'dragon', 'inhibitor', 'riftHerald', 'tower'],
  })
  .openapi('MatchV5ObjectivesDto')

const MatchV5FeatDtoSchema = z
  .object({ featState: z.int32().exactOptional().openapi({ 'x-type': 'int' }) })
  .openapi({ title: 'FeatDto', required: [] })
  .openapi('MatchV5FeatDto')

const MatchV5FeatsDtoSchema = z
  .object({
    EPIC_MONSTER_KILL: MatchV5FeatDtoSchema.exactOptional().openapi({ 'x-type': 'FeatDto' }),
    FIRST_BLOOD: MatchV5FeatDtoSchema.exactOptional().openapi({ 'x-type': 'FeatDto' }),
    FIRST_TURRET: MatchV5FeatDtoSchema.exactOptional().openapi({ 'x-type': 'FeatDto' }),
  })
  .openapi({ title: 'FeatsDto', required: [] })
  .openapi('MatchV5FeatsDto')

const MatchV5TeamDtoSchema = z
  .object({
    bans: z.array(MatchV5BanDtoSchema).openapi({ 'x-type': 'List[BanDto]' }),
    objectives: MatchV5ObjectivesDtoSchema.openapi({ 'x-type': 'ObjectivesDto' }),
    teamId: z.int32().openapi({ 'x-type': 'int', 'x-enum': 'team' }),
    win: z.boolean().openapi({ 'x-type': 'boolean' }),
    feats: MatchV5FeatsDtoSchema.exactOptional().openapi({ 'x-type': 'FeatsDto' }),
  })
  .openapi({ title: 'TeamDto', required: ['bans', 'objectives', 'teamId', 'win'] })
  .openapi('MatchV5TeamDto')

const MatchV5InfoDtoSchema = z
  .object({
    endOfGameResult: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description: 'Refer to indicate if the game ended in termination.',
      }),
    gameCreation: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description:
          'Unix timestamp for when the game is created on the game server (i.e., the loading screen).',
      }),
    gameDuration: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description:
          "Prior to patch 11.20, this field returns the game length in milliseconds calculated from gameEndTimestamp - gameStartTimestamp. Post patch 11.20, this field returns the max timePlayed of any participant in the game in seconds, which makes the behavior of this field consistent with that of match-v4. The best way to handling the change in this field is to treat the value as milliseconds if the gameEndTimestamp field isn't in the response and to treat the value as seconds if gameEndTimestamp is in the response.",
      }),
    gameEndTimestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description:
          'Unix timestamp for when match ends on the game server. This timestamp can occasionally be significantly longer than when the match "ends". The most reliable way of determining the timestamp for the end of the match would be to add the max time played of any participant to the gameStartTimestamp. This field was added to match-v5 in patch 11.20 on Oct 5th, 2021.',
      }),
    gameId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    gameMode: z
      .string()
      .openapi({
        'x-type': 'string',
        description: 'Refer to the Game Constants documentation.',
        'x-enum': 'gameMode',
      }),
    gameName: z.string().openapi({ 'x-type': 'string' }),
    gameStartTimestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'Unix timestamp for when match starts on the game server.',
      }),
    gameType: z.string().openapi({ 'x-type': 'string', 'x-enum': 'gameType' }),
    gameVersion: z
      .string()
      .openapi({
        'x-type': 'string',
        description: 'The first two parts can be used to determine the patch a game was played on.',
      }),
    mapId: z
      .int32()
      .openapi({
        'x-type': 'int',
        description: 'Refer to the Game Constants documentation.',
        'x-enum': 'map',
      }),
    participants: z
      .array(MatchV5ParticipantDtoSchema)
      .openapi({ 'x-type': 'List[ParticipantDto]' }),
    platformId: z
      .string()
      .openapi({ 'x-type': 'string', description: 'Platform where the match was played.' }),
    queueId: z
      .int32()
      .openapi({
        'x-type': 'int',
        description: 'Refer to the Game Constants documentation.',
        'x-enum': 'queue',
      }),
    teams: z.array(MatchV5TeamDtoSchema).openapi({ 'x-type': 'List[TeamDto]' }),
    tournamentCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          'Tournament code used to generate the match. This field was added to match-v5 in patch 11.13 on June 23rd, 2021.',
      }),
    gameModeMutators: z.array(z.string().openapi({ 'x-type': 'string' })).exactOptional(),
  })
  .openapi({
    title: 'InfoDto',
    required: [
      'gameCreation',
      'gameDuration',
      'gameId',
      'gameMode',
      'gameName',
      'gameStartTimestamp',
      'gameType',
      'gameVersion',
      'mapId',
      'participants',
      'platformId',
      'queueId',
      'teams',
    ],
  })
  .openapi('MatchV5InfoDto')

const MatchV5MatchDtoSchema = z
  .object({
    metadata: MatchV5MetadataDtoSchema.openapi({
      'x-type': 'MetadataDto',
      description: 'Match metadata.',
    }),
    info: MatchV5InfoDtoSchema.openapi({ 'x-type': 'InfoDto', description: 'Match info.' }),
  })
  .openapi({ title: 'MatchDto', required: ['metadata', 'info'] })
  .openapi('MatchV5MatchDto')

const MatchV5MetadataTimeLineDtoSchema = z
  .object({
    dataVersion: z.string().openapi({ 'x-type': 'string', description: 'Match data version.' }),
    matchId: z.string().openapi({ 'x-type': 'string', description: 'Match id.' }),
    participants: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .openapi({ 'x-type': 'List[string]', description: 'A list of participant PUUIDs.' }),
  })
  .openapi({ title: 'MetadataTimeLineDto', required: ['dataVersion', 'matchId', 'participants'] })
  .openapi('MatchV5MetadataTimeLineDto')

const MatchV5ParticipantTimeLineDtoSchema = z
  .object({
    participantId: z.int32().openapi({ 'x-type': 'int' }),
    puuid: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'ParticipantTimeLineDto', required: ['participantId', 'puuid'] })
  .openapi('MatchV5ParticipantTimeLineDto')

const MatchV5PositionDtoSchema = z
  .object({ x: z.int32().openapi({ 'x-type': 'int' }), y: z.int32().openapi({ 'x-type': 'int' }) })
  .openapi({ title: 'PositionDto', required: ['x', 'y'] })
  .openapi('MatchV5PositionDto')

const MatchV5MatchTimelineVictimDamageSchema = z
  .object({
    basic: z.boolean(),
    magicDamage: z.int32(),
    name: z.string(),
    participantId: z.int32(),
    physicalDamage: z.int32(),
    spellName: z.string(),
    spellSlot: z.int32(),
    trueDamage: z.int32(),
    type: z.string(),
  })
  .openapi({
    title: 'MatchTimelineVictimDamage',
    required: [
      'basic',
      'magicDamage',
      'name',
      'participantId',
      'physicalDamage',
      'spellName',
      'spellSlot',
      'trueDamage',
      'type',
    ],
  })
  .openapi('MatchV5MatchTimelineVictimDamage')

const MatchV5EventsTimeLineDtoSchema = z
  .object({
    timestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    realTimestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    type: z.string().openapi({ 'x-type': 'string' }),
    itemId: z.int32().exactOptional(),
    participantId: z.int32().exactOptional(),
    levelUpType: z.string().exactOptional(),
    skillSlot: z.int32().exactOptional(),
    creatorId: z.int32().exactOptional(),
    wardType: z.string().exactOptional(),
    level: z.int32().exactOptional(),
    assistingParticipantIds: z.array(z.int32()).exactOptional(),
    bounty: z.int32().exactOptional(),
    killStreakLength: z.int32().exactOptional(),
    killerId: z.int32().exactOptional(),
    position: MatchV5PositionDtoSchema.exactOptional(),
    victimDamageDealt: z.array(MatchV5MatchTimelineVictimDamageSchema).exactOptional(),
    victimDamageReceived: z.array(MatchV5MatchTimelineVictimDamageSchema).exactOptional(),
    victimId: z.int32().exactOptional(),
    killType: z.string().exactOptional(),
    laneType: z.string().exactOptional(),
    teamId: z.int32().exactOptional().openapi({ 'x-enum': 'team' }),
    multiKillLength: z.int32().exactOptional(),
    killerTeamId: z.int32().exactOptional().openapi({ 'x-enum': 'team' }),
    monsterType: z.string().exactOptional(),
    monsterSubType: z.string().exactOptional(),
    buildingType: z.string().exactOptional(),
    towerType: z.string().exactOptional(),
    afterId: z.int32().exactOptional(),
    beforeId: z.int32().exactOptional(),
    goldGain: z.int32().exactOptional(),
    gameId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    winningTeam: z.int32().exactOptional(),
    transformType: z.string().exactOptional(),
    name: z.string().exactOptional(),
    shutdownBounty: z.int32().exactOptional(),
    actualStartTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    featType: z.int32().exactOptional(),
    featValue: z.int32().exactOptional(),
    victimTeamfightDamageDealt: z.array(MatchV5MatchTimelineVictimDamageSchema).exactOptional(),
    victimTeamfightDamageReceived: z.array(MatchV5MatchTimelineVictimDamageSchema).exactOptional(),
  })
  .openapi({ title: 'EventsTimeLineDto', required: ['timestamp', 'type'] })
  .openapi('MatchV5EventsTimeLineDto')

const MatchV5ChampionStatsDtoSchema = z
  .object({
    abilityHaste: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    abilityPower: z.int32().openapi({ 'x-type': 'int' }),
    armor: z.int32().openapi({ 'x-type': 'int' }),
    armorPen: z.int32().openapi({ 'x-type': 'int' }),
    armorPenPercent: z.int32().openapi({ 'x-type': 'int' }),
    attackDamage: z.int32().openapi({ 'x-type': 'int' }),
    attackSpeed: z.int32().openapi({ 'x-type': 'int' }),
    bonusArmorPenPercent: z.int32().openapi({ 'x-type': 'int' }),
    bonusMagicPenPercent: z.int32().openapi({ 'x-type': 'int' }),
    ccReduction: z.int32().openapi({ 'x-type': 'int' }),
    cooldownReduction: z.int32().openapi({ 'x-type': 'int' }),
    health: z.int32().openapi({ 'x-type': 'int' }),
    healthMax: z.int32().openapi({ 'x-type': 'int' }),
    healthRegen: z.int32().openapi({ 'x-type': 'int' }),
    lifesteal: z.int32().openapi({ 'x-type': 'int' }),
    magicPen: z.int32().openapi({ 'x-type': 'int' }),
    magicPenPercent: z.int32().openapi({ 'x-type': 'int' }),
    magicResist: z.int32().openapi({ 'x-type': 'int' }),
    movementSpeed: z.int32().openapi({ 'x-type': 'int' }),
    omnivamp: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    physicalVamp: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    power: z.int32().openapi({ 'x-type': 'int' }),
    powerMax: z.int32().openapi({ 'x-type': 'int' }),
    powerRegen: z.int32().openapi({ 'x-type': 'int' }),
    spellVamp: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({
    title: 'ChampionStatsDto',
    required: [
      'abilityPower',
      'armor',
      'armorPen',
      'armorPenPercent',
      'attackDamage',
      'attackSpeed',
      'bonusArmorPenPercent',
      'bonusMagicPenPercent',
      'ccReduction',
      'cooldownReduction',
      'health',
      'healthMax',
      'healthRegen',
      'lifesteal',
      'magicPen',
      'magicPenPercent',
      'magicResist',
      'movementSpeed',
      'power',
      'powerMax',
      'powerRegen',
      'spellVamp',
    ],
  })
  .openapi('MatchV5ChampionStatsDto')

const MatchV5DamageStatsDtoSchema = z
  .object({
    magicDamageDone: z.int32().openapi({ 'x-type': 'int' }),
    magicDamageDoneToChampions: z.int32().openapi({ 'x-type': 'int' }),
    magicDamageTaken: z.int32().openapi({ 'x-type': 'int' }),
    physicalDamageDone: z.int32().openapi({ 'x-type': 'int' }),
    physicalDamageDoneToChampions: z.int32().openapi({ 'x-type': 'int' }),
    physicalDamageTaken: z.int32().openapi({ 'x-type': 'int' }),
    totalDamageDone: z.int32().openapi({ 'x-type': 'int' }),
    totalDamageDoneToChampions: z.int32().openapi({ 'x-type': 'int' }),
    totalDamageTaken: z.int32().openapi({ 'x-type': 'int' }),
    trueDamageDone: z.int32().openapi({ 'x-type': 'int' }),
    trueDamageDoneToChampions: z.int32().openapi({ 'x-type': 'int' }),
    trueDamageTaken: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({
    title: 'DamageStatsDto',
    required: [
      'magicDamageDone',
      'magicDamageDoneToChampions',
      'magicDamageTaken',
      'physicalDamageDone',
      'physicalDamageDoneToChampions',
      'physicalDamageTaken',
      'totalDamageDone',
      'totalDamageDoneToChampions',
      'totalDamageTaken',
      'trueDamageDone',
      'trueDamageDoneToChampions',
      'trueDamageTaken',
    ],
  })
  .openapi('MatchV5DamageStatsDto')

const MatchV5ParticipantFrameDtoSchema = z
  .object({
    championStats: MatchV5ChampionStatsDtoSchema.openapi({ 'x-type': 'ChampionStatsDto' }),
    currentGold: z.int32().openapi({ 'x-type': 'int' }),
    damageStats: MatchV5DamageStatsDtoSchema.openapi({ 'x-type': 'DamageStatsDto' }),
    goldPerSecond: z.int32().openapi({ 'x-type': 'int' }),
    jungleMinionsKilled: z.int32().openapi({ 'x-type': 'int' }),
    level: z.int32().openapi({ 'x-type': 'int' }),
    minionsKilled: z.int32().openapi({ 'x-type': 'int' }),
    participantId: z.int32().openapi({ 'x-type': 'int' }),
    position: MatchV5PositionDtoSchema.openapi({ 'x-type': 'PositionDto' }),
    timeEnemySpentControlled: z.int32().openapi({ 'x-type': 'int' }),
    totalGold: z.int32().openapi({ 'x-type': 'int' }),
    xp: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({
    title: 'ParticipantFrameDto',
    required: [
      'championStats',
      'currentGold',
      'damageStats',
      'goldPerSecond',
      'jungleMinionsKilled',
      'level',
      'minionsKilled',
      'participantId',
      'position',
      'timeEnemySpentControlled',
      'totalGold',
      'xp',
    ],
  })
  .openapi('MatchV5ParticipantFrameDto')

const MatchV5FramesTimeLineDtoSchema = z
  .object({
    events: z
      .array(MatchV5EventsTimeLineDtoSchema)
      .openapi({ 'x-type': 'List[EventsTimeLineDto]' }),
    participantFrames: z
      .record(z.string(), MatchV5ParticipantFrameDtoSchema)
      .exactOptional()
      .openapi({ 'x-key': { type: 'integer', format: 'int32' } }),
    timestamp: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({ title: 'FramesTimeLineDto', required: ['events', 'timestamp'] })
  .openapi('MatchV5FramesTimeLineDto')

const MatchV5InfoTimeLineDtoSchema = z
  .object({
    endOfGameResult: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description: 'Refer to indicate if the game ended in termination.',
      }),
    frameInterval: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    gameId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    participants: z
      .array(MatchV5ParticipantTimeLineDtoSchema)
      .exactOptional()
      .openapi({ 'x-type': 'List[ParticipantTimeLineDto]' }),
    frames: z
      .array(MatchV5FramesTimeLineDtoSchema)
      .openapi({ 'x-type': 'List[FramesTimeLineDto]' }),
  })
  .openapi({ title: 'InfoTimeLineDto', required: ['frameInterval', 'frames'] })
  .openapi('MatchV5InfoTimeLineDto')

const MatchV5TimelineDtoSchema = z
  .object({
    metadata: MatchV5MetadataTimeLineDtoSchema.openapi({
      'x-type': 'MetadataTimeLineDto',
      description: 'Match metadata.',
    }),
    info: MatchV5InfoTimeLineDtoSchema.openapi({
      'x-type': 'InfoTimeLineDto',
      description: 'Match info.',
    }),
  })
  .openapi({ title: 'TimelineDto', required: ['metadata', 'info'] })
  .openapi('MatchV5TimelineDto')

const MatchV5ParticipantFramesDtoSchema = z
  .object({
    '1-9': MatchV5ParticipantFrameDtoSchema.openapi({
      'x-type': 'ParticipantFrameDto',
      description: 'Key value mapping for each participant',
    }),
  })
  .openapi({ title: 'ParticipantFramesDto', required: ['1-9'] })
  .openapi('MatchV5ParticipantFramesDto')

const RiftboundContentV1CardStatsDTOSchema = z
  .object({
    energy: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    might: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    cost: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    power: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
  })
  .openapi({ title: 'CardStatsDTO', required: ['energy', 'might', 'cost', 'power'] })
  .openapi('RiftboundContentV1CardStatsDTO')

const RiftboundContentV1CardArtDTOSchema = z
  .object({
    thumbnailURL: z.string().openapi({ 'x-type': 'string' }),
    fullURL: z.string().openapi({ 'x-type': 'string' }),
    artist: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'CardArtDTO', required: ['thumbnailURL', 'fullURL', 'artist'] })
  .openapi('RiftboundContentV1CardArtDTO')

const RiftboundContentV1CardDTOSchema = z
  .object({
    id: z.string().openapi({ 'x-type': 'string', description: 'Card ID' }),
    collectorNumber: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    set: z.string().openapi({ 'x-type': 'string' }),
    name: z.string().openapi({ 'x-type': 'string', description: 'Card Name' }),
    description: z.string().openapi({ 'x-type': 'string' }),
    type: z.string().openapi({ 'x-type': 'string', description: 'Card Type' }),
    rarity: z.string().openapi({ 'x-type': 'string' }),
    faction: z.string().openapi({ 'x-type': 'string' }),
    stats: RiftboundContentV1CardStatsDTOSchema.openapi({ 'x-type': 'CardStatsDTO' }),
    art: RiftboundContentV1CardArtDTOSchema.openapi({ 'x-type': 'CardArtDTO' }),
    flavorText: z.string().openapi({ 'x-type': 'string' }),
    tags: z.array(z.string().openapi({ 'x-type': 'string' })).openapi({ 'x-type': 'List[string]' }),
    subtitle: z.string().openapi({ 'x-type': 'string' }),
    effect: z.string().openapi({ 'x-type': 'string', description: 'Optional field' }),
  })
  .openapi({
    title: 'CardDTO',
    required: [
      'id',
      'collectorNumber',
      'set',
      'name',
      'description',
      'type',
      'rarity',
      'faction',
      'stats',
      'art',
      'flavorText',
      'tags',
      'subtitle',
      'effect',
    ],
  })
  .openapi('RiftboundContentV1CardDTO')

const RiftboundContentV1SetDTOSchema = z
  .object({
    id: z.string().openapi({ 'x-type': 'string', description: 'Set ID' }),
    name: z.string().openapi({ 'x-type': 'string', description: 'Set Name' }),
    cards: z.array(RiftboundContentV1CardDTOSchema).openapi({ 'x-type': 'List[CardDTO]' }),
  })
  .openapi({ title: 'SetDTO', required: ['id', 'name', 'cards'] })
  .openapi('RiftboundContentV1SetDTO')

const RiftboundContentV1RiftboundContentDTOSchema = z
  .object({
    game: z.string().openapi({ 'x-type': 'string', description: 'Game Name' }),
    version: z.string().openapi({ 'x-type': 'string', description: 'Content version' }),
    lastUpdated: z
      .string()
      .openapi({ 'x-type': 'string', description: 'ISO Timestamp of content last update' }),
    sets: z.array(RiftboundContentV1SetDTOSchema).openapi({ 'x-type': 'List[SetDTO]' }),
  })
  .openapi({ title: 'RiftboundContentDTO', required: ['game', 'version', 'lastUpdated', 'sets'] })
  .openapi('RiftboundContentV1RiftboundContentDTO')

const SpectatorTftV5BannedChampionSchema = z
  .object({
    pickTurn: z
      .int32()
      .openapi({ 'x-type': 'int', description: 'The turn during which the champion was banned' }),
    championId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The ID of the banned champion',
        'x-enum': 'champion',
      }),
    teamId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The ID of the team that banned the champion',
        'x-enum': 'team',
      }),
  })
  .openapi({ title: 'BannedChampion', required: ['pickTurn', 'championId', 'teamId'] })
  .openapi('SpectatorTftV5BannedChampion')

const SpectatorTftV5ObserverSchema = z
  .object({
    encryptionKey: z
      .string()
      .openapi({
        'x-type': 'string',
        description: 'Key used to decrypt the spectator grid game data for playback',
      }),
  })
  .openapi({ title: 'Observer', required: ['encryptionKey'] })
  .openapi('SpectatorTftV5Observer')

const SpectatorTftV5PerksSchema = z
  .object({
    perkIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
      )
      .openapi({ 'x-type': 'List[long]', description: 'IDs of the perks/runes assigned.' }),
    perkStyle: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'Primary runes path',
      }),
    perkSubStyle: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'Secondary runes path',
      }),
  })
  .openapi({ title: 'Perks', required: ['perkIds', 'perkStyle', 'perkSubStyle'] })
  .openapi('SpectatorTftV5Perks')

const SpectatorTftV5GameCustomizationObjectSchema = z
  .object({
    category: z
      .string()
      .openapi({ 'x-type': 'string', description: 'Category identifier for Game Customization' }),
    content: z.string().openapi({ 'x-type': 'string', description: 'Game Customization content' }),
  })
  .openapi({ title: 'GameCustomizationObject', required: ['category', 'content'] })
  .openapi('SpectatorTftV5GameCustomizationObject')

const SpectatorTftV5CurrentGameParticipantSchema = z
  .object({
    championId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The ID of the champion played by this participant',
        'x-enum': 'champion',
      }),
    perks: SpectatorTftV5PerksSchema.exactOptional().openapi({
      'x-type': 'Perks',
      description: 'Perks/Runes Reforged Information',
    }),
    profileIconId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The ID of the profile icon used by this participant',
      }),
    teamId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: "The team ID of this participant, indicating the participant's team",
        'x-enum': 'team',
      }),
    puuid: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description: 'The encrypted puuid of this participant. null when the player is anonym.',
      }),
    spell1Id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The ID of the first summoner spell used by this participant',
      }),
    spell2Id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The ID of the second summoner spell used by this participant',
      }),
    gameCustomizationObjects: z
      .array(SpectatorTftV5GameCustomizationObjectSchema)
      .openapi({
        'x-type': 'List[GameCustomizationObject]',
        description: 'List of Game Customizations',
      }),
    riotId: z.string().exactOptional().openapi({ 'x-type': 'string' }),
  })
  .openapi({
    title: 'CurrentGameParticipant',
    required: [
      'championId',
      'profileIconId',
      'teamId',
      'spell1Id',
      'spell2Id',
      'gameCustomizationObjects',
    ],
  })
  .openapi('SpectatorTftV5CurrentGameParticipant')

const SpectatorTftV5CurrentGameInfoSchema = z
  .object({
    gameId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The ID of the game',
      }),
    gameType: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The game type', 'x-enum': 'gameType' }),
    gameStartTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The game start time represented in epoch milliseconds',
      }),
    mapId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The ID of the map',
        'x-enum': 'map',
      }),
    gameLength: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The amount of time in seconds that has passed since the game started',
      }),
    platformId: z
      .string()
      .openapi({
        'x-type': 'string',
        description: 'The ID of the platform on which the game is being played',
      }),
    gameMode: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The game mode', 'x-enum': 'gameMode' }),
    bannedChampions: z
      .array(SpectatorTftV5BannedChampionSchema)
      .openapi({ 'x-type': 'List[BannedChampion]', description: 'Banned champion information' }),
    gameQueueConfigId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The queue type (queue types are documented on the Game Constants page)',
        'x-enum': 'queue',
      }),
    observers: SpectatorTftV5ObserverSchema.openapi({
      'x-type': 'Observer',
      description: 'The observer information',
    }),
    participants: z
      .array(SpectatorTftV5CurrentGameParticipantSchema)
      .openapi({
        'x-type': 'List[CurrentGameParticipant]',
        description: 'The participant information',
      }),
  })
  .openapi({
    title: 'CurrentGameInfo',
    required: [
      'gameId',
      'gameType',
      'gameStartTime',
      'mapId',
      'gameLength',
      'platformId',
      'gameMode',
      'bannedChampions',
      'observers',
      'participants',
    ],
  })
  .openapi('SpectatorTftV5CurrentGameInfo')

const SpectatorV5BannedChampionSchema = z
  .object({
    pickTurn: z
      .int32()
      .openapi({ 'x-type': 'int', description: 'The turn during which the champion was banned' }),
    championId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The ID of the banned champion',
        'x-enum': 'champion',
      }),
    teamId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The ID of the team that banned the champion',
        'x-enum': 'team',
      }),
  })
  .openapi({ title: 'BannedChampion', required: ['pickTurn', 'championId', 'teamId'] })
  .openapi('SpectatorV5BannedChampion')

const SpectatorV5ObserverSchema = z
  .object({
    encryptionKey: z
      .string()
      .openapi({
        'x-type': 'string',
        description: 'Key used to decrypt the spectator grid game data for playback',
      }),
  })
  .openapi({ title: 'Observer', required: ['encryptionKey'] })
  .openapi('SpectatorV5Observer')

const SpectatorV5PerksSchema = z
  .object({
    perkIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
      )
      .openapi({ 'x-type': 'List[long]', description: 'IDs of the perks/runes assigned.' }),
    perkStyle: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'Primary runes path',
      }),
    perkSubStyle: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'Secondary runes path',
      }),
  })
  .openapi({ title: 'Perks', required: ['perkIds', 'perkStyle', 'perkSubStyle'] })
  .openapi('SpectatorV5Perks')

const SpectatorV5GameCustomizationObjectSchema = z
  .object({
    category: z
      .string()
      .openapi({ 'x-type': 'string', description: 'Category identifier for Game Customization' }),
    content: z.string().openapi({ 'x-type': 'string', description: 'Game Customization content' }),
  })
  .openapi({ title: 'GameCustomizationObject', required: ['category', 'content'] })
  .openapi('SpectatorV5GameCustomizationObject')

const SpectatorV5CurrentGameParticipantSchema = z
  .object({
    championId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The ID of the champion played by this participant',
        'x-enum': 'champion',
      }),
    perks: SpectatorV5PerksSchema.exactOptional().openapi({
      'x-type': 'Perks',
      description: 'Perks/Runes Reforged Information',
    }),
    profileIconId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The ID of the profile icon used by this participant',
      }),
    bot: z
      .boolean()
      .openapi({
        'x-type': 'boolean',
        description: 'Flag indicating whether or not this participant is a bot',
      }),
    teamId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: "The team ID of this participant, indicating the participant's team",
        'x-enum': 'team',
      }),
    puuid: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description: 'The encrypted puuid of this participant. null when the player is anonym.',
      }),
    spell1Id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The ID of the first summoner spell used by this participant',
      }),
    spell2Id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The ID of the second summoner spell used by this participant',
      }),
    gameCustomizationObjects: z
      .array(SpectatorV5GameCustomizationObjectSchema)
      .openapi({
        'x-type': 'List[GameCustomizationObject]',
        description: 'List of Game Customizations',
      }),
    riotId: z.string().exactOptional().openapi({ 'x-type': 'string' }),
  })
  .openapi({
    title: 'CurrentGameParticipant',
    required: [
      'championId',
      'profileIconId',
      'bot',
      'teamId',
      'spell1Id',
      'spell2Id',
      'gameCustomizationObjects',
    ],
  })
  .openapi('SpectatorV5CurrentGameParticipant')

const SpectatorV5CurrentGameInfoSchema = z
  .object({
    gameId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The ID of the game',
      }),
    gameType: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The game type', 'x-enum': 'gameType' }),
    gameStartTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The game start time represented in epoch milliseconds',
      }),
    mapId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The ID of the map',
        'x-enum': 'map',
      }),
    gameLength: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The amount of time in seconds that has passed since the game started',
      }),
    platformId: z
      .string()
      .openapi({
        'x-type': 'string',
        description: 'The ID of the platform on which the game is being played',
      }),
    gameMode: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The game mode', 'x-enum': 'gameMode' }),
    bannedChampions: z
      .array(SpectatorV5BannedChampionSchema)
      .openapi({ 'x-type': 'List[BannedChampion]', description: 'Banned champion information' }),
    gameQueueConfigId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The queue type (queue types are documented on the Game Constants page)',
        'x-enum': 'queue',
      }),
    observers: SpectatorV5ObserverSchema.openapi({
      'x-type': 'Observer',
      description: 'The observer information',
    }),
    participants: z
      .array(SpectatorV5CurrentGameParticipantSchema)
      .openapi({
        'x-type': 'List[CurrentGameParticipant]',
        description: 'The participant information',
      }),
  })
  .openapi({
    title: 'CurrentGameInfo',
    required: [
      'gameId',
      'gameType',
      'gameStartTime',
      'mapId',
      'gameLength',
      'platformId',
      'gameMode',
      'bannedChampions',
      'observers',
      'participants',
    ],
  })
  .openapi('SpectatorV5CurrentGameInfo')

const SummonerV4SummonerDTOSchema = z
  .object({
    profileIconId: z
      .int32()
      .openapi({
        'x-type': 'int',
        description: 'ID of the summoner icon associated with the summoner.',
      }),
    revisionDate: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description:
          'Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: profile icon change, playing the tutorial or advanced tutorial, finishing a game, summoner name change.',
      }),
    puuid: z
      .string()
      .openapi({
        'x-type': 'string',
        description: 'Encrypted PUUID. Exact length of 78 characters.',
      }),
    summonerLevel: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'Summoner level associated with the summoner.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          'Encrypted summoner ID. This field is deprecated and will be removed. Use `puuid` instead.',
      }),
  })
  .openapi({
    title: 'SummonerDTO',
    description: 'represents a summoner',
    required: ['profileIconId', 'revisionDate', 'puuid', 'summonerLevel'],
  })
  .openapi('SummonerV4SummonerDTO')

const TftLeagueV1MiniSeriesDTOSchema = z
  .object({
    losses: z.int32().openapi({ 'x-type': 'int' }),
    progress: z.string().openapi({ 'x-type': 'string' }),
    target: z.int32().openapi({ 'x-type': 'int' }),
    wins: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({ title: 'MiniSeriesDTO', required: ['losses', 'progress', 'target', 'wins'] })
  .openapi('TftLeagueV1MiniSeriesDTO')

const TftLeagueV1LeagueEntryDTOSchema = z
  .object({
    puuid: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          'Player Universal Unique Identifier. Exact length of 78 characters. (Encrypted)',
      }),
    leagueId: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description: 'Not included for the RANKED_TFT_TURBO queueType.',
      }),
    queueType: z.string().openapi({ 'x-type': 'string', 'x-enum': 'queueType' }),
    ratedTier: z
      .enum(['ORANGE', 'PURPLE', 'BLUE', 'GREEN', 'GRAY'])
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          'Only included for the RANKED_TFT_TURBO queueType.\n             (Legal values:  ORANGE,  PURPLE,  BLUE,  GREEN,  GRAY)',
      }),
    ratedRating: z
      .int32()
      .exactOptional()
      .openapi({
        'x-type': 'int',
        description: 'Only included for the RANKED_TFT_TURBO queueType.',
      }),
    tier: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description: 'Not included for the RANKED_TFT_TURBO queueType.',
        'x-enum': 'tier',
      }),
    rank: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          "The player's division within a tier. Not included for the RANKED_TFT_TURBO queueType.",
        'x-enum': 'division',
      }),
    leaguePoints: z
      .int32()
      .exactOptional()
      .openapi({
        'x-type': 'int',
        description: 'Not included for the RANKED_TFT_TURBO queueType.',
      }),
    wins: z.int32().openapi({ 'x-type': 'int', description: 'First placement.' }),
    losses: z.int32().openapi({ 'x-type': 'int', description: 'Second through eighth placement.' }),
    hotStreak: z
      .boolean()
      .exactOptional()
      .openapi({
        'x-type': 'boolean',
        description: 'Not included for the RANKED_TFT_TURBO queueType.',
      }),
    veteran: z
      .boolean()
      .exactOptional()
      .openapi({
        'x-type': 'boolean',
        description: 'Not included for the RANKED_TFT_TURBO queueType.',
      }),
    freshBlood: z
      .boolean()
      .exactOptional()
      .openapi({
        'x-type': 'boolean',
        description: 'Not included for the RANKED_TFT_TURBO queueType.',
      }),
    inactive: z
      .boolean()
      .exactOptional()
      .openapi({
        'x-type': 'boolean',
        description: 'Not included for the RANKED_TFT_TURBO queueType.',
      }),
    miniSeries: TftLeagueV1MiniSeriesDTOSchema.exactOptional().openapi({
      'x-type': 'MiniSeriesDTO',
      description: 'Not included for the RANKED_TFT_TURBO queueType.',
    }),
  })
  .openapi({ title: 'LeagueEntryDTO', required: ['queueType', 'wins', 'losses'] })
  .openapi('TftLeagueV1LeagueEntryDTO')

const TftLeagueV1LeagueItemDTOSchema = z
  .object({
    freshBlood: z.boolean().openapi({ 'x-type': 'boolean' }),
    wins: z.int32().openapi({ 'x-type': 'int', description: 'First placement.' }),
    miniSeries: TftLeagueV1MiniSeriesDTOSchema.exactOptional().openapi({
      'x-type': 'MiniSeriesDTO',
    }),
    inactive: z.boolean().openapi({ 'x-type': 'boolean' }),
    veteran: z.boolean().openapi({ 'x-type': 'boolean' }),
    hotStreak: z.boolean().openapi({ 'x-type': 'boolean' }),
    rank: z.string().openapi({ 'x-type': 'string', 'x-enum': 'division' }),
    leaguePoints: z.int32().openapi({ 'x-type': 'int' }),
    losses: z.int32().openapi({ 'x-type': 'int', description: 'Second through eighth placement.' }),
    puuid: z.string().openapi({ 'x-type': 'string', description: "Player's encrypted puuid." }),
  })
  .openapi({
    title: 'LeagueItemDTO',
    required: [
      'freshBlood',
      'wins',
      'inactive',
      'veteran',
      'hotStreak',
      'rank',
      'leaguePoints',
      'losses',
      'puuid',
    ],
  })
  .openapi('TftLeagueV1LeagueItemDTO')

const TftLeagueV1LeagueListDTOSchema = z
  .object({
    leagueId: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    entries: z.array(TftLeagueV1LeagueItemDTOSchema).openapi({ 'x-type': 'List[LeagueItemDTO]' }),
    tier: z.string().openapi({ 'x-type': 'string', 'x-enum': 'tier' }),
    name: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    queue: z.string().exactOptional().openapi({ 'x-type': 'string', 'x-enum': 'queueType' }),
  })
  .openapi({ title: 'LeagueListDTO', required: ['entries', 'tier'] })
  .openapi('TftLeagueV1LeagueListDTO')

const TftLeagueV1TopRatedLadderEntryDtoSchema = z
  .object({
    puuid: z.string().openapi({ 'x-type': 'string', description: "Player's encrypted puuid." }),
    ratedTier: z
      .enum(['ORANGE', 'PURPLE', 'BLUE', 'GREEN', 'GRAY'])
      .openapi({
        'x-type': 'string',
        description: '(Legal values:  ORANGE,  PURPLE,  BLUE,  GREEN,  GRAY)',
      }),
    ratedRating: z.int32().openapi({ 'x-type': 'int' }),
    wins: z.int32().openapi({ 'x-type': 'int', description: 'First placement.' }),
    previousUpdateLadderPosition: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({
    title: 'TopRatedLadderEntryDto',
    required: ['puuid', 'ratedTier', 'ratedRating', 'wins', 'previousUpdateLadderPosition'],
  })
  .openapi('TftLeagueV1TopRatedLadderEntryDto')

const TftMatchV1MetadataDtoSchema = z
  .object({
    data_version: z.string().openapi({ 'x-type': 'string', description: 'Match data version.' }),
    match_id: z.string().openapi({ 'x-type': 'string', description: 'Match id.' }),
    participants: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .openapi({ 'x-type': 'List[string]', description: 'A list of participant PUUIDs.' }),
  })
  .openapi({ title: 'MetadataDto', required: ['data_version', 'match_id', 'participants'] })
  .openapi('TftMatchV1MetadataDto')

const TftMatchV1CompanionDtoSchema = z
  .object({
    content_ID: z.string().openapi({ 'x-type': 'string' }),
    item_ID: z.int32().openapi({ 'x-type': 'int' }),
    skin_ID: z.int32().openapi({ 'x-type': 'int' }),
    species: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'CompanionDto', required: ['content_ID', 'item_ID', 'skin_ID', 'species'] })
  .openapi('TftMatchV1CompanionDto')

const TftMatchV1TraitDtoSchema = z
  .object({
    name: z.string().openapi({ 'x-type': 'string', description: 'Trait name.' }),
    num_units: z
      .int32()
      .openapi({ 'x-type': 'int', description: 'Number of units with this trait.' }),
    style: z
      .int32()
      .exactOptional()
      .openapi({
        'x-type': 'int',
        description:
          'Current style for this trait. (0 = No style, 1 = Bronze, 2 = Silver, 3 = Gold, 4 = Chromatic)',
      }),
    tier_current: z
      .int32()
      .openapi({ 'x-type': 'int', description: 'Current active tier for the trait.' }),
    tier_total: z
      .int32()
      .exactOptional()
      .openapi({ 'x-type': 'int', description: 'Total tiers for the trait.' }),
  })
  .openapi({ title: 'TraitDto', required: ['name', 'num_units', 'tier_current'] })
  .openapi('TftMatchV1TraitDto')

const TftMatchV1UnitDtoSchema = z
  .object({
    items: z
      .array(z.int32().openapi({ 'x-type': 'int' }))
      .exactOptional()
      .openapi({
        'x-type': 'List[int]',
        description:
          "A list of the unit's items. Please refer to the Teamfight Tactics documentation for item ids.",
      }),
    character_id: z
      .string()
      .openapi({
        'x-type': 'string',
        description: 'This field was introduced in patch 9.22 with data_version 2.',
      }),
    itemNames: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .exactOptional()
      .openapi({ 'x-type': 'List[string]' }),
    chosen: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          'If a unit is chosen as part of the Fates set mechanic, the chosen trait will be indicated by this field. Otherwise this field is excluded from the response.',
      }),
    name: z
      .string()
      .openapi({ 'x-type': 'string', description: 'Unit name. This field is often left blank.' }),
    rarity: z
      .int32()
      .openapi({
        'x-type': 'int',
        description: "Unit rarity. This doesn't equate to the unit cost.",
      }),
    tier: z.int32().openapi({ 'x-type': 'int', description: 'Unit tier.' }),
  })
  .openapi({ title: 'UnitDto', required: ['character_id', 'name', 'rarity', 'tier'] })
  .openapi('TftMatchV1UnitDto')

const TftMatchV1ParticipantMissionsDtoSchema = z
  .object({
    Assists: z.int32().exactOptional(),
    DamageDealt: z.int32().exactOptional(),
    DamageDealtToObjectives: z.int32().exactOptional(),
    DamageDealtToTurrets: z.int32().exactOptional(),
    DamageTaken: z.int32().exactOptional(),
    DoubleKills: z.int32().exactOptional(),
    GoldEarned: z.int32().exactOptional(),
    GoldSpent: z.int32().exactOptional(),
    InhibitorsDestroyed: z.int32().exactOptional(),
    Kills: z.int32().exactOptional(),
    LargestKillingSpree: z.int32().exactOptional(),
    LargestMultiKill: z.int32().exactOptional(),
    MagicDamageDealt: z.int32().exactOptional(),
    MagicDamageDealtToChampions: z.int32().exactOptional(),
    NeutralMinionsKilledTeamJungle: z.int32().exactOptional(),
    PhysicalDamageDealt: z.int32().exactOptional(),
    PhysicalDamageTaken: z.int32().exactOptional(),
    PlayerScore0: z.int32().exactOptional(),
    PlayerScore1: z.int32().exactOptional(),
    PlayerScore2: z.int32().exactOptional(),
    PlayerScore3: z.int32().exactOptional(),
    PlayerScore4: z.int32().exactOptional(),
    PlayerScore5: z.int32().exactOptional(),
    PlayerScore6: z.int32().exactOptional(),
    PlayerScore9: z.int32().exactOptional(),
    PlayerScore10: z.int32().exactOptional(),
    PlayerScore11: z.int32().exactOptional(),
    QuadraKills: z.int32().exactOptional(),
    Spell1Casts: z.int32().exactOptional(),
    Spell2Casts: z.int32().exactOptional(),
    Spell3Casts: z.int32().exactOptional(),
    Spell4Casts: z.int32().exactOptional(),
    SummonerSpell1Casts: z.int32().exactOptional(),
    TimeCCOthers: z.int32().exactOptional(),
    TotalMinionsKilled: z.int32().exactOptional(),
    TrueDamageDealtToChampions: z.int32().exactOptional(),
    UnrealKills: z.int32().exactOptional(),
    VisionScore: z.int32().exactOptional(),
    WardsKilled: z.int32().exactOptional(),
    Deaths: z.int32().exactOptional(),
    KillingSprees: z.int32().exactOptional(),
    MagicDamageTaken: z.int32().exactOptional(),
    PentaKills: z.int32().exactOptional(),
    PhysicalDamageDealtToChampions: z.int32().exactOptional(),
    TotalDamageDealtToChampions: z.int32().exactOptional(),
    TripleKills: z.int32().exactOptional(),
    TrueDamageDealt: z.int32().exactOptional(),
    TrueDamageTaken: z.int32().exactOptional(),
  })
  .openapi({ title: 'ParticipantMissionsDto', required: [] })
  .openapi('TftMatchV1ParticipantMissionsDto')

const TftMatchV1ParticipantDtoSchema = z
  .object({
    companion: TftMatchV1CompanionDtoSchema.openapi({
      'x-type': 'CompanionDto',
      description: "Participant's companion.",
    }),
    gold_left: z
      .int32()
      .openapi({ 'x-type': 'int', description: 'Gold left after participant was eliminated.' }),
    last_round: z
      .int32()
      .openapi({
        'x-type': 'int',
        description:
          'The round the participant was eliminated in. Note: If the player was eliminated in stage 2-1 their last_round would be 5.',
      }),
    level: z
      .int32()
      .openapi({
        'x-type': 'int',
        description:
          'Participant Little Legend level. Note: This is not the number of active units.',
      }),
    placement: z
      .int32()
      .openapi({ 'x-type': 'int', description: 'Participant placement upon elimination.' }),
    players_eliminated: z
      .int32()
      .openapi({ 'x-type': 'int', description: 'Number of players the participant eliminated.' }),
    puuid: z.string().openapi({ 'x-type': 'string' }),
    riotIdGameName: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    riotIdTagline: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    time_eliminated: z
      .float32()
      .openapi({
        'x-type': 'float',
        description: 'The number of seconds before the participant was eliminated.',
      }),
    total_damage_to_players: z
      .int32()
      .openapi({ 'x-type': 'int', description: 'Damage the participant dealt to other players.' }),
    traits: z
      .array(TftMatchV1TraitDtoSchema)
      .openapi({
        'x-type': 'List[TraitDto]',
        description: "A complete list of traits for the participant's active units.",
      }),
    units: z
      .array(TftMatchV1UnitDtoSchema)
      .openapi({
        'x-type': 'List[UnitDto]',
        description: 'A list of active units for the participant.',
      }),
    win: z.boolean().exactOptional().openapi({ 'x-type': 'boolean' }),
    augments: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .exactOptional()
      .openapi({ 'x-type': 'List[string]' }),
    partner_group_id: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    missions: TftMatchV1ParticipantMissionsDtoSchema.exactOptional().openapi({
      'x-type': 'ParticipantMissionsDto',
    }),
    skill_tree: z
      .record(z.string(), z.int32().openapi({ 'x-type': 'int' }))
      .exactOptional()
      .openapi({ 'x-key': { type: 'string', 'x-type': 'string' }, 'x-type': 'Map[string, int]' }),
    pve_score: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    pve_wonrun: z.boolean().exactOptional().openapi({ 'x-type': 'boolean' }),
  })
  .openapi({
    title: 'ParticipantDto',
    required: [
      'companion',
      'gold_left',
      'last_round',
      'level',
      'placement',
      'players_eliminated',
      'puuid',
      'time_eliminated',
      'total_damage_to_players',
      'traits',
      'units',
    ],
  })
  .openapi('TftMatchV1ParticipantDto')

const TftMatchV1InfoDtoSchema = z
  .object({
    endOfGameResult: z.string().exactOptional(),
    gameCreation: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    gameId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    game_datetime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'Unix timestamp.',
      }),
    game_length: z.float32().openapi({ 'x-type': 'float', description: 'Game length in seconds.' }),
    game_version: z.string().openapi({ 'x-type': 'string', description: 'Game client version.' }),
    game_variation: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          'Deprecated. Game variation key. Game variations documented in TFT static data.',
      }),
    mapId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    participants: z
      .array(TftMatchV1ParticipantDtoSchema)
      .openapi({ 'x-type': 'List[ParticipantDto]' }),
    queue_id: z
      .int32()
      .openapi({
        'x-type': 'int',
        description: 'Please refer to the League of Legends documentation.',
        'x-enum': 'queue',
      }),
    queueId: z
      .int32()
      .exactOptional()
      .openapi({
        'x-type': 'int',
        description: 'Please refer to the League of Legends documentation.',
        'x-enum': 'queue',
      }),
    tft_game_type: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    tft_set_core_name: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    tft_set_number: z
      .int32()
      .openapi({ 'x-type': 'int', description: 'Teamfight Tactics set number.' }),
  })
  .openapi({
    title: 'InfoDto',
    required: [
      'game_datetime',
      'game_length',
      'game_version',
      'participants',
      'queue_id',
      'tft_set_number',
    ],
  })
  .openapi('TftMatchV1InfoDto')

const TftMatchV1MatchDtoSchema = z
  .object({
    metadata: TftMatchV1MetadataDtoSchema.openapi({
      'x-type': 'MetadataDto',
      description: 'Match metadata.',
    }),
    info: TftMatchV1InfoDtoSchema.openapi({ 'x-type': 'InfoDto', description: 'Match info.' }),
  })
  .openapi({ title: 'MatchDto', required: ['metadata', 'info'] })
  .openapi('TftMatchV1MatchDto')

const TftStatusV1ContentDtoSchema = z
  .object({
    locale: z.string().openapi({ 'x-type': 'string' }),
    content: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'ContentDto', required: ['locale', 'content'] })
  .openapi('TftStatusV1ContentDto')

const TftStatusV1UpdateDtoSchema = z
  .object({
    id: z.int32().openapi({ 'x-type': 'int' }),
    author: z.string().openapi({ 'x-type': 'string' }),
    publish: z.boolean().openapi({ 'x-type': 'boolean' }),
    publish_locations: z
      .array(z.enum(['riotclient', 'riotstatus', 'game']).openapi({ 'x-type': 'string' }))
      .openapi({
        'x-type': 'List[string]',
        description: '(Legal values: riotclient, riotstatus, game)',
      }),
    translations: z.array(TftStatusV1ContentDtoSchema).openapi({ 'x-type': 'List[ContentDto]' }),
    created_at: z.string().openapi({ 'x-type': 'string' }),
    updated_at: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({
    title: 'UpdateDto',
    required: [
      'id',
      'author',
      'publish',
      'publish_locations',
      'translations',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('TftStatusV1UpdateDto')

const TftStatusV1StatusDtoSchema = z
  .object({
    id: z.int32().openapi({ 'x-type': 'int' }),
    maintenance_status: z
      .enum(['scheduled', 'in_progress', 'complete'])
      .openapi({
        'x-type': 'string',
        description: '(Legal values:  scheduled,  in_progress,  complete)',
      }),
    incident_severity: z
      .enum(['info', 'warning', 'critical'])
      .openapi({ 'x-type': 'string', description: '(Legal values:  info,  warning,  critical)' }),
    titles: z.array(TftStatusV1ContentDtoSchema).openapi({ 'x-type': 'List[ContentDto]' }),
    updates: z.array(TftStatusV1UpdateDtoSchema).openapi({ 'x-type': 'List[UpdateDto]' }),
    created_at: z.string().openapi({ 'x-type': 'string' }),
    archive_at: z.string().openapi({ 'x-type': 'string' }),
    updated_at: z.string().openapi({ 'x-type': 'string' }),
    platforms: z
      .array(
        z
          .enum(['windows', 'macos', 'android', 'ios', 'ps4', 'xbone', 'switch'])
          .openapi({ 'x-type': 'string' }),
      )
      .openapi({
        'x-type': 'List[string]',
        description: '(Legal values: windows, macos, android, ios, ps4, xbone, switch)',
      }),
  })
  .openapi({
    title: 'StatusDto',
    required: [
      'id',
      'maintenance_status',
      'incident_severity',
      'titles',
      'updates',
      'created_at',
      'archive_at',
      'updated_at',
      'platforms',
    ],
  })
  .openapi('TftStatusV1StatusDto')

const TftStatusV1PlatformDataDtoSchema = z
  .object({
    id: z.string().openapi({ 'x-type': 'string' }),
    name: z.string().openapi({ 'x-type': 'string' }),
    locales: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .openapi({ 'x-type': 'List[string]' }),
    maintenances: z.array(TftStatusV1StatusDtoSchema).openapi({ 'x-type': 'List[StatusDto]' }),
    incidents: z.array(TftStatusV1StatusDtoSchema).openapi({ 'x-type': 'List[StatusDto]' }),
  })
  .openapi({
    title: 'PlatformDataDto',
    required: ['id', 'name', 'locales', 'maintenances', 'incidents'],
  })
  .openapi('TftStatusV1PlatformDataDto')

const TftSummonerV1SummonerDTOSchema = z
  .object({
    puuid: z
      .string()
      .openapi({
        'x-type': 'string',
        description: 'Encrypted PUUID. Exact length of 78 characters.',
      }),
    profileIconId: z
      .int32()
      .openapi({
        'x-type': 'int',
        description: 'ID of the summoner icon associated with the summoner.',
      }),
    revisionDate: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description:
          'Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: profile icon change, playing the tutorial or advanced tutorial, finishing a game, summoner name change.',
      }),
    summonerLevel: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'Summoner level associated with the summoner.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          'Encrypted summoner ID. This field is deprecated and will be removed. Use `puuid` instead.',
      }),
  })
  .openapi({
    title: 'SummonerDTO',
    description: 'represents a summoner',
    required: ['puuid', 'profileIconId', 'revisionDate', 'summonerLevel'],
  })
  .openapi('TftSummonerV1SummonerDTO')

const TournamentStubV5TournamentCodeParametersV5Schema = z
  .object({
    allowedParticipants: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .exactOptional()
      .openapi({
        'x-type': 'Set[string]',
        description:
          'Optional list of encrypted puuids in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.',
      }),
    metadata: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          'Optional string that may contain any data in any format, if specified at all. Used to denote any custom information about the game.',
      }),
    teamSize: z
      .int32()
      .min(1)
      .max(5)
      .openapi({
        'x-type': 'int',
        description: 'The team size of the game. Valid values are 1-5.',
      }),
    pickType: z
      .enum(['BLIND_PICK', 'DRAFT_MODE', 'ALL_RANDOM', 'TOURNAMENT_DRAFT'])
      .openapi({
        'x-type': 'string',
        description:
          'The pick type of the game.\n             (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)',
      }),
    mapType: z
      .enum(['SUMMONERS_RIFT', 'HOWLING_ABYSS', 'LEAGUE_CLASSIC'])
      .openapi({
        'x-type': 'string',
        description:
          'The map type of the game.\n             (Legal values:  SUMMONERS_RIFT,  HOWLING_ABYSS,  LEAGUE_CLASSIC)',
      }),
    spectatorType: z
      .enum(['NONE', 'LOBBYONLY', 'ALL'])
      .openapi({
        'x-type': 'string',
        description:
          'The spectator type of the game.\n             (Legal values:  NONE,  LOBBYONLY,  ALL)',
      }),
    enoughPlayers: z
      .boolean()
      .openapi({
        'x-type': 'boolean',
        description: 'Checks if allowed participants are enough to make full teams.',
      }),
  })
  .openapi({
    title: 'TournamentCodeParametersV5',
    required: ['teamSize', 'pickType', 'mapType', 'spectatorType', 'enoughPlayers'],
  })
  .openapi('TournamentStubV5TournamentCodeParametersV5')

const TournamentStubV5TournamentCodeV5DTOSchema = z
  .object({
    code: z.string().openapi({ 'x-type': 'string', description: 'The tournament code.' }),
    lobbyName: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The lobby name for the tournament code game.' }),
    metaData: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The metadata for tournament code.' }),
    password: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The password for the tournament code game.' }),
    teamSize: z
      .int32()
      .openapi({ 'x-type': 'int', description: 'The team size for the tournament code game.' }),
    providerId: z.int32().openapi({ 'x-type': 'int', description: "The provider's ID." }),
    pickType: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The pick mode for tournament code game.' }),
    tournamentId: z.int32().openapi({ 'x-type': 'int', description: "The tournament's ID." }),
    id: z.int32().openapi({ 'x-type': 'int', description: "The tournament code's ID." }),
    region: z
      .enum(['BR', 'EUNE', 'EUW', 'JP', 'LAN', 'LAS', 'NA', 'OCE', 'PBE', 'RU', 'TR', 'KR'])
      .openapi({
        'x-type': 'string',
        description:
          "The tournament code's region.\n             (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR,  KR)",
        'x-enum': 'tournamentRegion',
      }),
    map: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The game map for the tournament code game' }),
    participants: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .openapi({
        'x-type': 'Set[string]',
        description: 'The puuids of the participants (Encrypted)',
      }),
  })
  .openapi({
    title: 'TournamentCodeV5DTO',
    required: [
      'code',
      'lobbyName',
      'metaData',
      'password',
      'teamSize',
      'providerId',
      'pickType',
      'tournamentId',
      'id',
      'region',
      'map',
      'participants',
    ],
  })
  .openapi('TournamentStubV5TournamentCodeV5DTO')

const TournamentStubV5LobbyEventV5DTOSchema = z
  .object({
    timestamp: z.string().openapi({ 'x-type': 'string', description: 'Timestamp from the event' }),
    eventType: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The type of event that was triggered' }),
    puuid: z
      .string()
      .openapi({
        'x-type': 'string',
        description: 'The puuid that triggered the event (Encrypted)',
      }),
  })
  .openapi({ title: 'LobbyEventV5DTO', required: ['timestamp', 'eventType', 'puuid'] })
  .openapi('TournamentStubV5LobbyEventV5DTO')

const TournamentStubV5LobbyEventV5DTOWrapperSchema = z
  .object({
    eventList: z
      .array(TournamentStubV5LobbyEventV5DTOSchema)
      .openapi({ 'x-type': 'List[LobbyEventV5DTO]' }),
  })
  .openapi({ title: 'LobbyEventV5DTOWrapper', required: ['eventList'] })
  .openapi('TournamentStubV5LobbyEventV5DTOWrapper')

const TournamentStubV5ProviderRegistrationParametersV5Schema = z
  .object({
    region: z
      .enum(['BR', 'EUNE', 'EUW', 'JP', 'LAN', 'LAS', 'NA', 'OCE', 'PBE', 'RU', 'TR', 'KR'])
      .openapi({
        'x-type': 'string',
        description:
          'The region in which the provider will be running tournaments.\n             (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR,  KR)',
        'x-enum': 'tournamentRegion',
      }),
    url: z
      .string()
      .openapi({
        'x-type': 'string',
        description:
          "The provider's callback URL to which tournament game results in this region should be posted. The URL must be well-formed, use the http or https protocol, and use the default port for the protocol (http URLs must use port 80, https URLs must use port 443).",
      }),
  })
  .openapi({ title: 'ProviderRegistrationParametersV5', required: ['region', 'url'] })
  .openapi('TournamentStubV5ProviderRegistrationParametersV5')

const TournamentStubV5TournamentRegistrationParametersV5Schema = z
  .object({
    providerId: z
      .int32()
      .openapi({
        'x-type': 'int',
        description:
          'The provider ID to specify the regional registered provider data to associate this tournament.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ 'x-type': 'string', description: 'The optional name of the tournament.' }),
  })
  .openapi({ title: 'TournamentRegistrationParametersV5', required: ['providerId'] })
  .openapi('TournamentStubV5TournamentRegistrationParametersV5')

const TournamentV5TournamentCodeParametersV5Schema = z
  .object({
    allowedParticipants: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .exactOptional()
      .openapi({
        'x-type': 'Set[string]',
        description:
          'Optional list of encrypted puuids in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.',
      }),
    metadata: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          'Optional string that may contain any data in any format, if specified at all. Used to denote any custom information about the game.',
      }),
    teamSize: z
      .int32()
      .min(1)
      .max(5)
      .openapi({
        'x-type': 'int',
        description: 'The team size of the game. Valid values are 1-5.',
      }),
    pickType: z
      .enum(['BLIND_PICK', 'DRAFT_MODE', 'ALL_RANDOM', 'TOURNAMENT_DRAFT'])
      .openapi({
        'x-type': 'string',
        description:
          'The pick type of the game.\n             (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)',
      }),
    mapType: z
      .enum(['SUMMONERS_RIFT', 'HOWLING_ABYSS', 'LEAGUE_CLASSIC'])
      .openapi({
        'x-type': 'string',
        description:
          'The map type of the game.\n             (Legal values:  SUMMONERS_RIFT,  HOWLING_ABYSS,  LEAGUE_CLASSIC)',
      }),
    spectatorType: z
      .enum(['NONE', 'LOBBYONLY', 'ALL'])
      .openapi({
        'x-type': 'string',
        description:
          'The spectator type of the game.\n             (Legal values:  NONE,  LOBBYONLY,  ALL)',
      }),
    enoughPlayers: z
      .boolean()
      .openapi({
        'x-type': 'boolean',
        description: 'Checks if allowed participants are enough to make full teams.',
      }),
  })
  .openapi({
    title: 'TournamentCodeParametersV5',
    required: ['teamSize', 'pickType', 'mapType', 'spectatorType', 'enoughPlayers'],
  })
  .openapi('TournamentV5TournamentCodeParametersV5')

const TournamentV5TournamentCodeV5DTOSchema = z
  .object({
    id: z.int32().openapi({ 'x-type': 'int', description: "The tournament code's ID." }),
    providerId: z.int32().openapi({ 'x-type': 'int', description: "The provider's ID." }),
    tournamentId: z.int32().openapi({ 'x-type': 'int', description: "The tournament's ID." }),
    code: z.string().openapi({ 'x-type': 'string', description: 'The tournament code.' }),
    region: z
      .enum([
        'BR',
        'EUNE',
        'EUW',
        'JP',
        'LAN',
        'LAS',
        'NA',
        'OCE',
        'PBE',
        'RU',
        'TR',
        'KR',
        'PH',
        'SG',
        'TH',
        'TW',
        'VN',
      ])
      .openapi({
        'x-type': 'string',
        description:
          "The tournament code's region.\n             (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR,  KR,  PH,  SG,  TH,  TW,  VN)",
        'x-enum': 'tournamentRegion',
      }),
    map: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The game map for the tournament code game' }),
    teamSize: z
      .int32()
      .openapi({ 'x-type': 'int', description: 'The team size for the tournament code game.' }),
    spectators: z
      .string()
      .openapi({
        'x-type': 'string',
        description: 'The spectator mode for the tournament code game.',
      }),
    pickType: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The pick mode for tournament code game.' }),
    lobbyName: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The lobby name for the tournament code game.' }),
    password: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The password for the tournament code game.' }),
    metaData: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The metadata for tournament code.' }),
    participants: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .openapi({
        'x-type': 'Set[string]',
        description: 'The puuids of the participants (Encrypted)',
      }),
  })
  .openapi({
    title: 'TournamentCodeV5DTO',
    required: [
      'id',
      'providerId',
      'tournamentId',
      'code',
      'region',
      'map',
      'teamSize',
      'spectators',
      'pickType',
      'lobbyName',
      'password',
      'metaData',
      'participants',
    ],
  })
  .openapi('TournamentV5TournamentCodeV5DTO')

const TournamentV5TournamentCodeUpdateParametersV5Schema = z
  .object({
    allowedParticipants: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .exactOptional()
      .openapi({
        'x-type': 'Set[string]',
        description:
          'Optional list of encrypted puuids in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.',
      }),
    pickType: z
      .enum(['BLIND_PICK', 'DRAFT_MODE', 'ALL_RANDOM', 'TOURNAMENT_DRAFT'])
      .openapi({
        'x-type': 'string',
        description:
          'The pick type\n             (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)',
      }),
    mapType: z
      .enum(['SUMMONERS_RIFT', 'HOWLING_ABYSS'])
      .openapi({
        'x-type': 'string',
        description: 'The map type\n             (Legal values:  SUMMONERS_RIFT,  HOWLING_ABYSS)',
      }),
    spectatorType: z
      .enum(['NONE', 'LOBBYONLY', 'ALL'])
      .openapi({
        'x-type': 'string',
        description: 'The spectator type\n             (Legal values:  NONE,  LOBBYONLY,  ALL)',
      }),
  })
  .openapi({
    title: 'TournamentCodeUpdateParametersV5',
    required: ['pickType', 'mapType', 'spectatorType'],
  })
  .openapi('TournamentV5TournamentCodeUpdateParametersV5')

const TournamentV5TournamentTeamV5Schema = z
  .object({
    puuid: z
      .string()
      .openapi({ 'x-type': 'string', description: 'Player Unique UUID (Encrypted)' }),
  })
  .openapi({ title: 'TournamentTeamV5', required: ['puuid'] })
  .openapi('TournamentV5TournamentTeamV5')

const TournamentV5TournamentGamesV5Schema = z
  .object({
    startTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    winningTeam: z
      .array(TournamentV5TournamentTeamV5Schema)
      .openapi({ 'x-type': 'List[TournamentTeamV5]' }),
    losingTeam: z
      .array(TournamentV5TournamentTeamV5Schema)
      .openapi({ 'x-type': 'List[TournamentTeamV5]' }),
    shortCode: z.string().openapi({ 'x-type': 'string', description: 'Tournament Code' }),
    metaData: z
      .string()
      .exactOptional()
      .openapi({ 'x-type': 'string', description: 'Metadata for the TournamentCode' }),
    gameId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    gameName: z.string().openapi({ 'x-type': 'string' }),
    gameType: z.string().openapi({ 'x-type': 'string' }),
    gameMap: z.int32().openapi({ 'x-type': 'int', description: 'Game Map ID' }),
    gameMode: z.string().openapi({ 'x-type': 'string' }),
    region: z
      .string()
      .openapi({
        'x-type': 'string',
        description: 'Region of the game',
        'x-enum': 'tournamentRegion',
      }),
  })
  .openapi({
    title: 'TournamentGamesV5',
    required: [
      'startTime',
      'winningTeam',
      'losingTeam',
      'shortCode',
      'gameId',
      'gameName',
      'gameType',
      'gameMap',
      'gameMode',
      'region',
    ],
  })
  .openapi('TournamentV5TournamentGamesV5')

const TournamentV5LobbyEventV5DTOSchema = z
  .object({
    timestamp: z.string().openapi({ 'x-type': 'string', description: 'Timestamp from the event' }),
    eventType: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The type of event that was triggered' }),
    puuid: z
      .string()
      .openapi({
        'x-type': 'string',
        description: 'The puuid that triggered the event (Encrypted)',
      }),
  })
  .openapi({ title: 'LobbyEventV5DTO', required: ['timestamp', 'eventType', 'puuid'] })
  .openapi('TournamentV5LobbyEventV5DTO')

const TournamentV5LobbyEventV5DTOWrapperSchema = z
  .object({
    eventList: z
      .array(TournamentV5LobbyEventV5DTOSchema)
      .openapi({ 'x-type': 'List[LobbyEventV5DTO]' }),
  })
  .openapi({ title: 'LobbyEventV5DTOWrapper', required: ['eventList'] })
  .openapi('TournamentV5LobbyEventV5DTOWrapper')

const TournamentV5ProviderRegistrationParametersV5Schema = z
  .object({
    region: z
      .enum([
        'BR',
        'EUNE',
        'EUW',
        'JP',
        'LAN',
        'LAS',
        'NA',
        'OCE',
        'PBE',
        'RU',
        'TR',
        'KR',
        'PH',
        'SG',
        'TH',
        'TW',
        'VN',
      ])
      .openapi({
        'x-type': 'string',
        description:
          'The region in which the provider will be running tournaments.\n             (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR,  KR,  PH,  SG,  TH,  TW,  VN)',
        'x-enum': 'tournamentRegion',
      }),
    url: z
      .string()
      .openapi({
        'x-type': 'string',
        description:
          "The provider's callback URL to which tournament game results in this region should be posted. The URL must be well-formed, use the http or https protocol, and use the default port for the protocol (http URLs must use port 80, https URLs must use port 443).",
      }),
  })
  .openapi({ title: 'ProviderRegistrationParametersV5', required: ['region', 'url'] })
  .openapi('TournamentV5ProviderRegistrationParametersV5')

const TournamentV5TournamentRegistrationParametersV5Schema = z
  .object({
    providerId: z
      .int32()
      .openapi({
        'x-type': 'int',
        description:
          'The provider ID to specify the regional registered provider data to associate this tournament.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ 'x-type': 'string', description: 'The optional name of the tournament.' }),
  })
  .openapi({ title: 'TournamentRegistrationParametersV5', required: ['providerId'] })
  .openapi('TournamentV5TournamentRegistrationParametersV5')

const ValConsoleMatchV1MatchInfoDtoSchema = z
  .object({
    matchId: z.string().openapi({ 'x-type': 'string' }),
    mapId: z.string().openapi({ 'x-type': 'string' }),
    gameLengthMillis: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    gameStartMillis: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    provisioningFlowId: z.string().openapi({ 'x-type': 'string' }),
    isCompleted: z.boolean().openapi({ 'x-type': 'boolean' }),
    customGameName: z.string().openapi({ 'x-type': 'string' }),
    queueId: z.string().openapi({ 'x-type': 'string' }),
    gameMode: z.string().openapi({ 'x-type': 'string' }),
    isRanked: z.boolean().openapi({ 'x-type': 'boolean' }),
    seasonId: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({
    title: 'MatchInfoDto',
    required: [
      'matchId',
      'mapId',
      'gameStartMillis',
      'provisioningFlowId',
      'isCompleted',
      'customGameName',
      'queueId',
      'gameMode',
      'isRanked',
      'seasonId',
    ],
  })
  .openapi('ValConsoleMatchV1MatchInfoDto')

const ValConsoleMatchV1AbilityCastsDtoSchema = z
  .object({
    grenadeCasts: z.int32().openapi({ 'x-type': 'int' }),
    ability1Casts: z.int32().openapi({ 'x-type': 'int' }),
    ability2Casts: z.int32().openapi({ 'x-type': 'int' }),
    ultimateCasts: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({
    title: 'AbilityCastsDto',
    required: ['grenadeCasts', 'ability1Casts', 'ability2Casts', 'ultimateCasts'],
  })
  .openapi('ValConsoleMatchV1AbilityCastsDto')

const ValConsoleMatchV1PlayerStatsDtoSchema = z
  .object({
    score: z.int32().openapi({ 'x-type': 'int' }),
    roundsPlayed: z.int32().openapi({ 'x-type': 'int' }),
    kills: z.int32().openapi({ 'x-type': 'int' }),
    deaths: z.int32().openapi({ 'x-type': 'int' }),
    assists: z.int32().openapi({ 'x-type': 'int' }),
    playtimeMillis: z.int32().openapi({ 'x-type': 'int' }),
    abilityCasts: ValConsoleMatchV1AbilityCastsDtoSchema.exactOptional().openapi({
      'x-type': 'AbilityCastsDto',
    }),
  })
  .openapi({
    title: 'PlayerStatsDto',
    required: ['score', 'roundsPlayed', 'kills', 'deaths', 'assists', 'playtimeMillis'],
  })
  .openapi('ValConsoleMatchV1PlayerStatsDto')

const ValConsoleMatchV1PlayerDtoSchema = z
  .object({
    puuid: z.string().openapi({ 'x-type': 'string' }),
    gameName: z.string().openapi({ 'x-type': 'string' }),
    tagLine: z.string().openapi({ 'x-type': 'string' }),
    teamId: z.string().openapi({ 'x-type': 'string' }),
    partyId: z.string().openapi({ 'x-type': 'string' }),
    characterId: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    stats: ValConsoleMatchV1PlayerStatsDtoSchema.exactOptional().openapi({
      'x-type': 'PlayerStatsDto',
    }),
    competitiveTier: z.int32().openapi({ 'x-type': 'int' }),
    playerCard: z.string().openapi({ 'x-type': 'string' }),
    playerTitle: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({
    title: 'PlayerDto',
    required: [
      'puuid',
      'gameName',
      'tagLine',
      'teamId',
      'partyId',
      'competitiveTier',
      'playerCard',
      'playerTitle',
    ],
  })
  .openapi('ValConsoleMatchV1PlayerDto')

const ValConsoleMatchV1CoachDtoSchema = z
  .object({
    puuid: z.string().openapi({ 'x-type': 'string' }),
    teamId: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'CoachDto', required: ['puuid', 'teamId'] })
  .openapi('ValConsoleMatchV1CoachDto')

const ValConsoleMatchV1TeamDtoSchema = z
  .object({
    teamId: z
      .string()
      .openapi({
        'x-type': 'string',
        description:
          'This is an arbitrary string. Red and Blue in bomb modes. The puuid of the player in deathmatch.',
      }),
    won: z.boolean().openapi({ 'x-type': 'boolean' }),
    roundsPlayed: z.int32().openapi({ 'x-type': 'int' }),
    roundsWon: z.int32().openapi({ 'x-type': 'int' }),
    numPoints: z
      .int32()
      .openapi({
        'x-type': 'int',
        description: 'Team points scored. Number of kills in deathmatch.',
      }),
  })
  .openapi({
    title: 'TeamDto',
    required: ['teamId', 'won', 'roundsPlayed', 'roundsWon', 'numPoints'],
  })
  .openapi('ValConsoleMatchV1TeamDto')

const ValConsoleMatchV1LocationDtoSchema = z
  .object({ x: z.int32().openapi({ 'x-type': 'int' }), y: z.int32().openapi({ 'x-type': 'int' }) })
  .openapi({ title: 'LocationDto', required: ['x', 'y'] })
  .openapi('ValConsoleMatchV1LocationDto')

const ValConsoleMatchV1PlayerLocationsDtoSchema = z
  .object({
    puuid: z.string().openapi({ 'x-type': 'string' }),
    viewRadians: z.float32().openapi({ 'x-type': 'float' }),
    location: ValConsoleMatchV1LocationDtoSchema.openapi({ 'x-type': 'LocationDto' }),
  })
  .openapi({ title: 'PlayerLocationsDto', required: ['puuid', 'viewRadians', 'location'] })
  .openapi('ValConsoleMatchV1PlayerLocationsDto')

const ValConsoleMatchV1FinishingDamageDtoSchema = z
  .object({
    damageType: z.string().openapi({ 'x-type': 'string' }),
    damageItem: z.string().openapi({ 'x-type': 'string' }),
    isSecondaryFireMode: z.boolean().openapi({ 'x-type': 'boolean' }),
  })
  .openapi({
    title: 'FinishingDamageDto',
    required: ['damageType', 'damageItem', 'isSecondaryFireMode'],
  })
  .openapi('ValConsoleMatchV1FinishingDamageDto')

const ValConsoleMatchV1KillDtoSchema = z
  .object({
    timeSinceGameStartMillis: z.int32().openapi({ 'x-type': 'int' }),
    timeSinceRoundStartMillis: z.int32().openapi({ 'x-type': 'int' }),
    killer: z.string().openapi({ 'x-type': 'string', description: 'PUUID' }),
    victim: z.string().openapi({ 'x-type': 'string', description: 'PUUID' }),
    victimLocation: ValConsoleMatchV1LocationDtoSchema.openapi({ 'x-type': 'LocationDto' }),
    assistants: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .openapi({ 'x-type': 'List[string]', description: 'List of PUUIDs' }),
    playerLocations: z
      .array(ValConsoleMatchV1PlayerLocationsDtoSchema)
      .openapi({ 'x-type': 'List[PlayerLocationsDto]' }),
    finishingDamage: ValConsoleMatchV1FinishingDamageDtoSchema.openapi({
      'x-type': 'FinishingDamageDto',
    }),
  })
  .openapi({
    title: 'KillDto',
    required: [
      'timeSinceGameStartMillis',
      'timeSinceRoundStartMillis',
      'killer',
      'victim',
      'victimLocation',
      'assistants',
      'playerLocations',
      'finishingDamage',
    ],
  })
  .openapi('ValConsoleMatchV1KillDto')

const ValConsoleMatchV1DamageDtoSchema = z
  .object({
    receiver: z.string().openapi({ 'x-type': 'string', description: 'PUUID' }),
    damage: z.int32().openapi({ 'x-type': 'int' }),
    legshots: z.int32().openapi({ 'x-type': 'int' }),
    bodyshots: z.int32().openapi({ 'x-type': 'int' }),
    headshots: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({
    title: 'DamageDto',
    required: ['receiver', 'damage', 'legshots', 'bodyshots', 'headshots'],
  })
  .openapi('ValConsoleMatchV1DamageDto')

const ValConsoleMatchV1EconomyDtoSchema = z
  .object({
    loadoutValue: z.int32().openapi({ 'x-type': 'int' }),
    weapon: z.string().openapi({ 'x-type': 'string' }),
    armor: z.string().openapi({ 'x-type': 'string' }),
    remaining: z.int32().openapi({ 'x-type': 'int' }),
    spent: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({
    title: 'EconomyDto',
    required: ['loadoutValue', 'weapon', 'armor', 'remaining', 'spent'],
  })
  .openapi('ValConsoleMatchV1EconomyDto')

const ValConsoleMatchV1AbilityDtoSchema = z
  .object({
    grenadeEffects: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    ability1Effects: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    ability2Effects: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    ultimateEffects: z.string().exactOptional().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'AbilityDto', required: [] })
  .openapi('ValConsoleMatchV1AbilityDto')

const ValConsoleMatchV1PlayerRoundStatsDtoSchema = z
  .object({
    puuid: z.string().openapi({ 'x-type': 'string' }),
    kills: z.array(ValConsoleMatchV1KillDtoSchema).openapi({ 'x-type': 'List[KillDto]' }),
    damage: z.array(ValConsoleMatchV1DamageDtoSchema).openapi({ 'x-type': 'List[DamageDto]' }),
    score: z.int32().openapi({ 'x-type': 'int' }),
    economy: ValConsoleMatchV1EconomyDtoSchema.openapi({ 'x-type': 'EconomyDto' }),
    ability: ValConsoleMatchV1AbilityDtoSchema.openapi({ 'x-type': 'AbilityDto' }),
  })
  .openapi({
    title: 'PlayerRoundStatsDto',
    required: ['puuid', 'kills', 'damage', 'score', 'economy', 'ability'],
  })
  .openapi('ValConsoleMatchV1PlayerRoundStatsDto')

const ValConsoleMatchV1RoundResultDtoSchema = z
  .object({
    roundNum: z.int32().openapi({ 'x-type': 'int' }),
    roundResult: z.string().openapi({ 'x-type': 'string' }),
    roundCeremony: z.string().openapi({ 'x-type': 'string' }),
    winningTeam: z.string().openapi({ 'x-type': 'string' }),
    bombPlanter: z
      .string()
      .exactOptional()
      .openapi({ 'x-type': 'string', description: 'PUUID of player' }),
    bombDefuser: z
      .string()
      .exactOptional()
      .openapi({ 'x-type': 'string', description: 'PUUID of player' }),
    plantRoundTime: z.int32().openapi({ 'x-type': 'int' }),
    plantPlayerLocations: z
      .array(ValConsoleMatchV1PlayerLocationsDtoSchema)
      .exactOptional()
      .openapi({ 'x-type': 'List[PlayerLocationsDto]' }),
    plantLocation: ValConsoleMatchV1LocationDtoSchema.openapi({ 'x-type': 'LocationDto' }),
    plantSite: z.string().openapi({ 'x-type': 'string' }),
    defuseRoundTime: z.int32().openapi({ 'x-type': 'int' }),
    defusePlayerLocations: z
      .array(ValConsoleMatchV1PlayerLocationsDtoSchema)
      .exactOptional()
      .openapi({ 'x-type': 'List[PlayerLocationsDto]' }),
    defuseLocation: ValConsoleMatchV1LocationDtoSchema.openapi({ 'x-type': 'LocationDto' }),
    playerStats: z
      .array(ValConsoleMatchV1PlayerRoundStatsDtoSchema)
      .openapi({ 'x-type': 'List[PlayerRoundStatsDto]' }),
    roundResultCode: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({
    title: 'RoundResultDto',
    required: [
      'roundNum',
      'roundResult',
      'roundCeremony',
      'winningTeam',
      'plantRoundTime',
      'plantLocation',
      'plantSite',
      'defuseRoundTime',
      'defuseLocation',
      'playerStats',
      'roundResultCode',
    ],
  })
  .openapi('ValConsoleMatchV1RoundResultDto')

const ValConsoleMatchV1MatchDtoSchema = z
  .object({
    matchInfo: ValConsoleMatchV1MatchInfoDtoSchema.openapi({ 'x-type': 'MatchInfoDto' }),
    players: z.array(ValConsoleMatchV1PlayerDtoSchema).openapi({ 'x-type': 'List[PlayerDto]' }),
    coaches: z.array(ValConsoleMatchV1CoachDtoSchema).openapi({ 'x-type': 'List[CoachDto]' }),
    teams: z
      .array(ValConsoleMatchV1TeamDtoSchema)
      .exactOptional()
      .openapi({ 'x-type': 'List[TeamDto]' }),
    roundResults: z
      .array(ValConsoleMatchV1RoundResultDtoSchema)
      .exactOptional()
      .openapi({ 'x-type': 'List[RoundResultDto]' }),
  })
  .openapi({ title: 'MatchDto', required: ['matchInfo', 'players', 'coaches'] })
  .openapi('ValConsoleMatchV1MatchDto')

const ValConsoleMatchV1MatchlistEntryDtoSchema = z
  .object({
    matchId: z.string().openapi({ 'x-type': 'string' }),
    gameStartTimeMillis: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    queueId: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'MatchlistEntryDto', required: ['matchId', 'gameStartTimeMillis', 'queueId'] })
  .openapi('ValConsoleMatchV1MatchlistEntryDto')

const ValConsoleMatchV1MatchlistDtoSchema = z
  .object({
    puuid: z.string().openapi({ 'x-type': 'string' }),
    history: z
      .array(ValConsoleMatchV1MatchlistEntryDtoSchema)
      .openapi({ 'x-type': 'List[MatchlistEntryDto]' }),
  })
  .openapi({ title: 'MatchlistDto', required: ['puuid', 'history'] })
  .openapi('ValConsoleMatchV1MatchlistDto')

const ValConsoleMatchV1RecentMatchesDtoSchema = z
  .object({
    currentTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    matchIds: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .openapi({ 'x-type': 'List[string]', description: 'A list of recent match ids.' }),
  })
  .openapi({ title: 'RecentMatchesDto', required: ['currentTime', 'matchIds'] })
  .openapi('ValConsoleMatchV1RecentMatchesDto')

const ValConsoleRankedV1PlayerDtoSchema = z
  .object({
    puuid: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description: 'This field may be omitted if the player has been anonymized.',
      }),
    gameName: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description: 'This field may be omitted if the player has been anonymized.',
      }),
    tagLine: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description: 'This field may be omitted if the player has been anonymized.',
      }),
    leaderboardRank: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    rankedRating: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    numberOfWins: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
  })
  .openapi({ title: 'PlayerDto', required: ['leaderboardRank', 'rankedRating', 'numberOfWins'] })
  .openapi('ValConsoleRankedV1PlayerDto')

const ValConsoleRankedV1TierDtoSchema = z
  .object({})
  .openapi({ title: 'TierDto', description: 'UNKNOWN TYPE.' })
  .openapi('ValConsoleRankedV1TierDto')

const ValConsoleRankedV1LeaderboardDtoSchema = z
  .object({
    actId: z
      .string()
      .openapi({
        'x-type': 'string',
        description:
          'The act id for the given leaderboard. Act ids can be found using the val-content API.',
      }),
    totalPlayers: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The total number of players in the leaderboard.',
      }),
    query: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    shard: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The shard for the given leaderboard.' }),
    players: z.array(ValConsoleRankedV1PlayerDtoSchema).openapi({ 'x-type': 'List[PlayerDto]' }),
    tierDetails: z
      .array(ValConsoleRankedV1TierDtoSchema)
      .exactOptional()
      .openapi({ 'x-type': 'List[TierDto]' }),
  })
  .openapi({ title: 'LeaderboardDto', required: ['actId', 'totalPlayers', 'shard', 'players'] })
  .openapi('ValConsoleRankedV1LeaderboardDto')

const ValContentV1LocalizedNamesDtoSchema = z
  .object({
    'ar-AE': z.string().openapi({ 'x-type': 'string' }),
    'de-DE': z.string().openapi({ 'x-type': 'string' }),
    'en-GB': z.string().exactOptional().openapi({ 'x-type': 'string' }),
    'en-US': z.string().openapi({ 'x-type': 'string' }),
    'es-ES': z.string().openapi({ 'x-type': 'string' }),
    'es-MX': z.string().openapi({ 'x-type': 'string' }),
    'fr-FR': z.string().openapi({ 'x-type': 'string' }),
    'id-ID': z.string().openapi({ 'x-type': 'string' }),
    'it-IT': z.string().openapi({ 'x-type': 'string' }),
    'ja-JP': z.string().openapi({ 'x-type': 'string' }),
    'ko-KR': z.string().openapi({ 'x-type': 'string' }),
    'pl-PL': z.string().openapi({ 'x-type': 'string' }),
    'pt-BR': z.string().openapi({ 'x-type': 'string' }),
    'ru-RU': z.string().openapi({ 'x-type': 'string' }),
    'th-TH': z.string().openapi({ 'x-type': 'string' }),
    'tr-TR': z.string().openapi({ 'x-type': 'string' }),
    'vi-VN': z.string().openapi({ 'x-type': 'string' }),
    'zh-CN': z.string().openapi({ 'x-type': 'string' }),
    'zh-TW': z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({
    title: 'LocalizedNamesDto',
    required: [
      'ar-AE',
      'de-DE',
      'en-US',
      'es-ES',
      'es-MX',
      'fr-FR',
      'id-ID',
      'it-IT',
      'ja-JP',
      'ko-KR',
      'pl-PL',
      'pt-BR',
      'ru-RU',
      'th-TH',
      'tr-TR',
      'vi-VN',
      'zh-CN',
      'zh-TW',
    ],
  })
  .openapi('ValContentV1LocalizedNamesDto')

const ValContentV1ContentItemDtoSchema = z
  .object({
    name: z.string().openapi({ 'x-type': 'string' }),
    localizedNames: ValContentV1LocalizedNamesDtoSchema.exactOptional().openapi({
      'x-type': 'LocalizedNamesDto',
      description: 'This field is excluded from the response when a locale is set',
    }),
    id: z.string().openapi({ 'x-type': 'string' }),
    assetName: z.string().openapi({ 'x-type': 'string' }),
    assetPath: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description:
          'This field is only included for maps and game modes. These values are used in the match response.',
      }),
  })
  .openapi({ title: 'ContentItemDto', required: ['name', 'id', 'assetName'] })
  .openapi('ValContentV1ContentItemDto')

const ValContentV1ActDtoSchema = z
  .object({
    name: z.string().openapi({ 'x-type': 'string' }),
    localizedNames: ValContentV1LocalizedNamesDtoSchema.exactOptional().openapi({
      'x-type': 'LocalizedNamesDto',
      description: 'This field is excluded from the response when a locale is set',
    }),
    id: z.string().openapi({ 'x-type': 'string' }),
    isActive: z.boolean().openapi({ 'x-type': 'boolean' }),
    parentId: z.string().exactOptional(),
    type: z.string().exactOptional(),
  })
  .openapi({ title: 'ActDto', required: ['name', 'id', 'isActive'] })
  .openapi('ValContentV1ActDto')

const ValContentV1ContentDtoSchema = z
  .object({
    version: z.string().openapi({ 'x-type': 'string' }),
    characters: z
      .array(ValContentV1ContentItemDtoSchema)
      .openapi({ 'x-type': 'List[ContentItemDto]' }),
    maps: z.array(ValContentV1ContentItemDtoSchema).openapi({ 'x-type': 'List[ContentItemDto]' }),
    chromas: z
      .array(ValContentV1ContentItemDtoSchema)
      .openapi({ 'x-type': 'List[ContentItemDto]' }),
    skins: z.array(ValContentV1ContentItemDtoSchema).openapi({ 'x-type': 'List[ContentItemDto]' }),
    skinLevels: z
      .array(ValContentV1ContentItemDtoSchema)
      .openapi({ 'x-type': 'List[ContentItemDto]' }),
    equips: z.array(ValContentV1ContentItemDtoSchema).openapi({ 'x-type': 'List[ContentItemDto]' }),
    gameModes: z
      .array(ValContentV1ContentItemDtoSchema)
      .openapi({ 'x-type': 'List[ContentItemDto]' }),
    sprays: z.array(ValContentV1ContentItemDtoSchema).openapi({ 'x-type': 'List[ContentItemDto]' }),
    sprayLevels: z
      .array(ValContentV1ContentItemDtoSchema)
      .openapi({ 'x-type': 'List[ContentItemDto]' }),
    charms: z.array(ValContentV1ContentItemDtoSchema).openapi({ 'x-type': 'List[ContentItemDto]' }),
    charmLevels: z
      .array(ValContentV1ContentItemDtoSchema)
      .openapi({ 'x-type': 'List[ContentItemDto]' }),
    playerCards: z
      .array(ValContentV1ContentItemDtoSchema)
      .openapi({ 'x-type': 'List[ContentItemDto]' }),
    playerTitles: z
      .array(ValContentV1ContentItemDtoSchema)
      .openapi({ 'x-type': 'List[ContentItemDto]' }),
    acts: z.array(ValContentV1ActDtoSchema).openapi({ 'x-type': 'List[ActDto]' }),
    ceremonies: z
      .array(ValContentV1ContentItemDtoSchema)
      .exactOptional()
      .openapi({ 'x-type': 'List[ContentItemDto]' }),
    totems: z
      .array(ValContentV1ContentItemDtoSchema)
      .exactOptional()
      .openapi({ 'x-type': 'List[ContentItemDto]' }),
  })
  .openapi({
    title: 'ContentDto',
    required: [
      'version',
      'characters',
      'maps',
      'chromas',
      'skins',
      'skinLevels',
      'equips',
      'gameModes',
      'sprays',
      'sprayLevels',
      'charms',
      'charmLevels',
      'playerCards',
      'playerTitles',
      'acts',
    ],
  })
  .openapi('ValContentV1ContentDto')

const ValMatchV1MatchInfoDtoSchema = z
  .object({
    matchId: z.string().openapi({ 'x-type': 'string' }),
    mapId: z.string().openapi({ 'x-type': 'string' }),
    gameVersion: z.string().openapi({ 'x-type': 'string' }),
    gameLengthMillis: z.int32().exactOptional().openapi({ 'x-type': 'int' }),
    region: z.string().openapi({ 'x-type': 'string' }),
    gameStartMillis: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    provisioningFlowId: z.string().openapi({ 'x-type': 'string' }),
    isCompleted: z.boolean().openapi({ 'x-type': 'boolean' }),
    customGameName: z.string().openapi({ 'x-type': 'string' }),
    queueId: z.string().openapi({ 'x-type': 'string' }),
    gameMode: z.string().openapi({ 'x-type': 'string' }),
    isRanked: z.boolean().openapi({ 'x-type': 'boolean' }),
    seasonId: z.string().openapi({ 'x-type': 'string' }),
    premierMatchInfo: z.object({}),
  })
  .openapi({
    title: 'MatchInfoDto',
    required: [
      'matchId',
      'mapId',
      'gameVersion',
      'region',
      'gameStartMillis',
      'provisioningFlowId',
      'isCompleted',
      'customGameName',
      'queueId',
      'gameMode',
      'isRanked',
      'seasonId',
      'premierMatchInfo',
    ],
  })
  .openapi('ValMatchV1MatchInfoDto')

const ValMatchV1AbilityCastsDtoSchema = z
  .object({
    grenadeCasts: z.int32().openapi({ 'x-type': 'int' }),
    ability1Casts: z.int32().openapi({ 'x-type': 'int' }),
    ability2Casts: z.int32().openapi({ 'x-type': 'int' }),
    ultimateCasts: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({
    title: 'AbilityCastsDto',
    required: ['grenadeCasts', 'ability1Casts', 'ability2Casts', 'ultimateCasts'],
  })
  .openapi('ValMatchV1AbilityCastsDto')

const ValMatchV1PlayerStatsDtoSchema = z
  .object({
    score: z.int32().openapi({ 'x-type': 'int' }),
    roundsPlayed: z.int32().openapi({ 'x-type': 'int' }),
    kills: z.int32().openapi({ 'x-type': 'int' }),
    deaths: z.int32().openapi({ 'x-type': 'int' }),
    assists: z.int32().openapi({ 'x-type': 'int' }),
    playtimeMillis: z.int32().openapi({ 'x-type': 'int' }),
    abilityCasts: ValMatchV1AbilityCastsDtoSchema.exactOptional().openapi({
      'x-type': 'AbilityCastsDto',
    }),
  })
  .openapi({
    title: 'PlayerStatsDto',
    required: ['score', 'roundsPlayed', 'kills', 'deaths', 'assists', 'playtimeMillis'],
  })
  .openapi('ValMatchV1PlayerStatsDto')

const ValMatchV1PlayerDtoSchema = z
  .object({
    puuid: z.string().openapi({ 'x-type': 'string' }),
    gameName: z.string().openapi({ 'x-type': 'string' }),
    tagLine: z.string().openapi({ 'x-type': 'string' }),
    teamId: z.string().openapi({ 'x-type': 'string' }),
    partyId: z.string().openapi({ 'x-type': 'string' }),
    characterId: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    stats: ValMatchV1PlayerStatsDtoSchema.exactOptional().openapi({ 'x-type': 'PlayerStatsDto' }),
    competitiveTier: z.int32().openapi({ 'x-type': 'int' }),
    isObserver: z.boolean().openapi({ 'x-type': 'boolean' }),
    playerCard: z.string().openapi({ 'x-type': 'string' }),
    playerTitle: z.string().openapi({ 'x-type': 'string' }),
    accountLevel: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({
    title: 'PlayerDto',
    required: [
      'puuid',
      'gameName',
      'tagLine',
      'teamId',
      'partyId',
      'competitiveTier',
      'isObserver',
      'playerCard',
      'playerTitle',
      'accountLevel',
    ],
  })
  .openapi('ValMatchV1PlayerDto')

const ValMatchV1CoachDtoSchema = z
  .object({
    puuid: z.string().openapi({ 'x-type': 'string' }),
    teamId: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'CoachDto', required: ['puuid', 'teamId'] })
  .openapi('ValMatchV1CoachDto')

const ValMatchV1TeamDtoSchema = z
  .object({
    teamId: z
      .string()
      .openapi({
        'x-type': 'string',
        description:
          'This is an arbitrary string. Red and Blue in bomb modes. The puuid of the player in deathmatch.',
      }),
    won: z.boolean().openapi({ 'x-type': 'boolean' }),
    roundsPlayed: z.int32().openapi({ 'x-type': 'int' }),
    roundsWon: z.int32().openapi({ 'x-type': 'int' }),
    numPoints: z
      .int32()
      .openapi({
        'x-type': 'int',
        description: 'Team points scored. Number of kills in deathmatch.',
      }),
  })
  .openapi({
    title: 'TeamDto',
    required: ['teamId', 'won', 'roundsPlayed', 'roundsWon', 'numPoints'],
  })
  .openapi('ValMatchV1TeamDto')

const ValMatchV1LocationDtoSchema = z
  .object({ x: z.int32().openapi({ 'x-type': 'int' }), y: z.int32().openapi({ 'x-type': 'int' }) })
  .openapi({ title: 'LocationDto', required: ['x', 'y'] })
  .openapi('ValMatchV1LocationDto')

const ValMatchV1PlayerLocationsDtoSchema = z
  .object({
    puuid: z.string().openapi({ 'x-type': 'string' }),
    viewRadians: z.float32().openapi({ 'x-type': 'float' }),
    location: ValMatchV1LocationDtoSchema.openapi({ 'x-type': 'LocationDto' }),
  })
  .openapi({ title: 'PlayerLocationsDto', required: ['puuid', 'viewRadians', 'location'] })
  .openapi('ValMatchV1PlayerLocationsDto')

const ValMatchV1FinishingDamageDtoSchema = z
  .object({
    damageType: z.string().openapi({ 'x-type': 'string' }),
    damageItem: z.string().openapi({ 'x-type': 'string' }),
    isSecondaryFireMode: z.boolean().openapi({ 'x-type': 'boolean' }),
  })
  .openapi({
    title: 'FinishingDamageDto',
    required: ['damageType', 'damageItem', 'isSecondaryFireMode'],
  })
  .openapi('ValMatchV1FinishingDamageDto')

const ValMatchV1KillDtoSchema = z
  .object({
    timeSinceGameStartMillis: z.int32().openapi({ 'x-type': 'int' }),
    timeSinceRoundStartMillis: z.int32().openapi({ 'x-type': 'int' }),
    killer: z.string().openapi({ 'x-type': 'string', description: 'PUUID' }),
    victim: z.string().openapi({ 'x-type': 'string', description: 'PUUID' }),
    victimLocation: ValMatchV1LocationDtoSchema.openapi({ 'x-type': 'LocationDto' }),
    assistants: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .openapi({ 'x-type': 'List[string]', description: 'List of PUUIDs' }),
    playerLocations: z
      .array(ValMatchV1PlayerLocationsDtoSchema)
      .openapi({ 'x-type': 'List[PlayerLocationsDto]' }),
    finishingDamage: ValMatchV1FinishingDamageDtoSchema.openapi({ 'x-type': 'FinishingDamageDto' }),
  })
  .openapi({
    title: 'KillDto',
    required: [
      'timeSinceGameStartMillis',
      'timeSinceRoundStartMillis',
      'killer',
      'victim',
      'victimLocation',
      'assistants',
      'playerLocations',
      'finishingDamage',
    ],
  })
  .openapi('ValMatchV1KillDto')

const ValMatchV1DamageDtoSchema = z
  .object({
    receiver: z.string().openapi({ 'x-type': 'string', description: 'PUUID' }),
    damage: z.int32().openapi({ 'x-type': 'int' }),
    legshots: z.int32().openapi({ 'x-type': 'int' }),
    bodyshots: z.int32().openapi({ 'x-type': 'int' }),
    headshots: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({
    title: 'DamageDto',
    required: ['receiver', 'damage', 'legshots', 'bodyshots', 'headshots'],
  })
  .openapi('ValMatchV1DamageDto')

const ValMatchV1EconomyDtoSchema = z
  .object({
    loadoutValue: z.int32().openapi({ 'x-type': 'int' }),
    weapon: z.string().openapi({ 'x-type': 'string' }),
    armor: z.string().openapi({ 'x-type': 'string' }),
    remaining: z.int32().openapi({ 'x-type': 'int' }),
    spent: z.int32().openapi({ 'x-type': 'int' }),
  })
  .openapi({
    title: 'EconomyDto',
    required: ['loadoutValue', 'weapon', 'armor', 'remaining', 'spent'],
  })
  .openapi('ValMatchV1EconomyDto')

const ValMatchV1AbilityDtoSchema = z
  .object({
    grenadeEffects: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    ability1Effects: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    ability2Effects: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    ultimateEffects: z.string().exactOptional().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'AbilityDto', required: [] })
  .openapi('ValMatchV1AbilityDto')

const ValMatchV1PlayerRoundStatsDtoSchema = z
  .object({
    puuid: z.string().openapi({ 'x-type': 'string' }),
    kills: z.array(ValMatchV1KillDtoSchema).openapi({ 'x-type': 'List[KillDto]' }),
    damage: z.array(ValMatchV1DamageDtoSchema).openapi({ 'x-type': 'List[DamageDto]' }),
    score: z.int32().openapi({ 'x-type': 'int' }),
    economy: ValMatchV1EconomyDtoSchema.openapi({ 'x-type': 'EconomyDto' }),
    ability: ValMatchV1AbilityDtoSchema.openapi({ 'x-type': 'AbilityDto' }),
  })
  .openapi({
    title: 'PlayerRoundStatsDto',
    required: ['puuid', 'kills', 'damage', 'score', 'economy', 'ability'],
  })
  .openapi('ValMatchV1PlayerRoundStatsDto')

const ValMatchV1RoundResultDtoSchema = z
  .object({
    roundNum: z.int32().openapi({ 'x-type': 'int' }),
    roundResult: z.string().openapi({ 'x-type': 'string' }),
    roundCeremony: z.string().openapi({ 'x-type': 'string' }),
    winningTeam: z.string().openapi({ 'x-type': 'string' }),
    winningTeamRole: z.string().openapi({ 'x-type': 'string' }),
    bombPlanter: z
      .string()
      .exactOptional()
      .openapi({ 'x-type': 'string', description: 'PUUID of player' }),
    bombDefuser: z
      .string()
      .exactOptional()
      .openapi({ 'x-type': 'string', description: 'PUUID of player' }),
    plantRoundTime: z.int32().openapi({ 'x-type': 'int' }),
    plantPlayerLocations: z
      .array(ValMatchV1PlayerLocationsDtoSchema)
      .exactOptional()
      .openapi({ 'x-type': 'List[PlayerLocationsDto]' }),
    plantLocation: ValMatchV1LocationDtoSchema.openapi({ 'x-type': 'LocationDto' }),
    plantSite: z.string().openapi({ 'x-type': 'string' }),
    defuseRoundTime: z.int32().openapi({ 'x-type': 'int' }),
    defusePlayerLocations: z
      .array(ValMatchV1PlayerLocationsDtoSchema)
      .exactOptional()
      .openapi({ 'x-type': 'List[PlayerLocationsDto]' }),
    defuseLocation: ValMatchV1LocationDtoSchema.openapi({ 'x-type': 'LocationDto' }),
    playerStats: z
      .array(ValMatchV1PlayerRoundStatsDtoSchema)
      .openapi({ 'x-type': 'List[PlayerRoundStatsDto]' }),
    roundResultCode: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({
    title: 'RoundResultDto',
    required: [
      'roundNum',
      'roundResult',
      'roundCeremony',
      'winningTeam',
      'winningTeamRole',
      'plantRoundTime',
      'plantLocation',
      'plantSite',
      'defuseRoundTime',
      'defuseLocation',
      'playerStats',
      'roundResultCode',
    ],
  })
  .openapi('ValMatchV1RoundResultDto')

const ValMatchV1MatchDtoSchema = z
  .object({
    matchInfo: ValMatchV1MatchInfoDtoSchema.openapi({ 'x-type': 'MatchInfoDto' }),
    players: z.array(ValMatchV1PlayerDtoSchema).openapi({ 'x-type': 'List[PlayerDto]' }),
    coaches: z.array(ValMatchV1CoachDtoSchema).openapi({ 'x-type': 'List[CoachDto]' }),
    teams: z.array(ValMatchV1TeamDtoSchema).exactOptional().openapi({ 'x-type': 'List[TeamDto]' }),
    roundResults: z
      .array(ValMatchV1RoundResultDtoSchema)
      .exactOptional()
      .openapi({ 'x-type': 'List[RoundResultDto]' }),
  })
  .openapi({ title: 'MatchDto', required: ['matchInfo', 'players', 'coaches'] })
  .openapi('ValMatchV1MatchDto')

const ValMatchV1MatchlistEntryDtoSchema = z
  .object({
    matchId: z.string().openapi({ 'x-type': 'string' }),
    gameStartTimeMillis: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    queueId: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'MatchlistEntryDto', required: ['matchId', 'gameStartTimeMillis', 'queueId'] })
  .openapi('ValMatchV1MatchlistEntryDto')

const ValMatchV1MatchlistDtoSchema = z
  .object({
    puuid: z.string().openapi({ 'x-type': 'string' }),
    history: z
      .array(ValMatchV1MatchlistEntryDtoSchema)
      .openapi({ 'x-type': 'List[MatchlistEntryDto]' }),
  })
  .openapi({ title: 'MatchlistDto', required: ['puuid', 'history'] })
  .openapi('ValMatchV1MatchlistDto')

const ValMatchV1RecentMatchesDtoSchema = z
  .object({
    currentTime: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    matchIds: z
      .array(z.string().openapi({ 'x-type': 'string' }))
      .openapi({ 'x-type': 'List[string]', description: 'A list of recent match ids.' }),
  })
  .openapi({ title: 'RecentMatchesDto', required: ['currentTime', 'matchIds'] })
  .openapi('ValMatchV1RecentMatchesDto')

const ValRankedV1PlayerDtoSchema = z
  .object({
    puuid: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description: 'This field may be omitted if the player has been anonymized.',
      }),
    gameName: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description: 'This field may be omitted if the player has been anonymized.',
      }),
    tagLine: z
      .string()
      .exactOptional()
      .openapi({
        'x-type': 'string',
        description: 'This field may be omitted if the player has been anonymized.',
      }),
    leaderboardRank: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    rankedRating: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    numberOfWins: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    competitiveTier: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    prefix: z.string().exactOptional().openapi({ 'x-type': 'string' }),
    premierRosterType: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({
    title: 'PlayerDto',
    required: ['leaderboardRank', 'rankedRating', 'numberOfWins', 'premierRosterType'],
  })
  .openapi('ValRankedV1PlayerDto')

const ValRankedV1TierDetailDtoSchema = z
  .object({
    rankedRatingThreshold: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    startingPage: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    startingIndex: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
  })
  .openapi({
    title: 'TierDetailDto',
    required: ['rankedRatingThreshold', 'startingPage', 'startingIndex'],
  })
  .openapi('ValRankedV1TierDetailDto')

const ValRankedV1LeaderboardDtoSchema = z
  .object({
    shard: z
      .string()
      .openapi({ 'x-type': 'string', description: 'The shard for the given leaderboard.' }),
    actId: z
      .string()
      .openapi({
        'x-type': 'string',
        description:
          'The act id for the given leaderboard. Act ids can be found using the val-content API.',
      }),
    totalPlayers: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        'x-type': 'long',
        description: 'The total number of players in the leaderboard.',
      }),
    players: z.array(ValRankedV1PlayerDtoSchema).openapi({ 'x-type': 'List[PlayerDto]' }),
    immortalStartingPage: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    immortalStartingIndex: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    topTierRRThreshold: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    tierDetails: z
      .record(z.string(), ValRankedV1TierDetailDtoSchema.openapi({ 'x-type': 'TierDetailDto' }))
      .exactOptional()
      .openapi({
        'x-key': { type: 'integer', format: 'int64', 'x-type': 'long' },
        'x-type': 'Map[long, TierDetailDto]',
      }),
    startIndex: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64', 'x-type': 'long' }),
    query: z.string().exactOptional().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'LeaderboardDto', required: ['shard', 'actId', 'totalPlayers', 'players'] })
  .openapi('ValRankedV1LeaderboardDto')

const ValStatusV1ContentDtoSchema = z
  .object({
    locale: z.string().openapi({ 'x-type': 'string', 'x-enum': 'locale' }),
    content: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({ title: 'ContentDto', required: ['locale', 'content'] })
  .openapi('ValStatusV1ContentDto')

const ValStatusV1UpdateDtoSchema = z
  .object({
    id: z.int32().openapi({ 'x-type': 'int' }),
    author: z.string().openapi({ 'x-type': 'string' }),
    publish: z.boolean().openapi({ 'x-type': 'boolean' }),
    publish_locations: z
      .array(z.enum(['riotclient', 'riotstatus', 'game']).openapi({ 'x-type': 'string' }))
      .openapi({
        'x-type': 'List[string]',
        description: '(Legal values: riotclient, riotstatus, game)',
      }),
    translations: z.array(ValStatusV1ContentDtoSchema).openapi({ 'x-type': 'List[ContentDto]' }),
    created_at: z.string().openapi({ 'x-type': 'string' }),
    updated_at: z.string().openapi({ 'x-type': 'string' }),
  })
  .openapi({
    title: 'UpdateDto',
    required: [
      'id',
      'author',
      'publish',
      'publish_locations',
      'translations',
      'created_at',
      'updated_at',
    ],
  })
  .openapi('ValStatusV1UpdateDto')

const ValStatusV1StatusDtoSchema = z
  .object({
    id: z.int32().openapi({ 'x-type': 'int' }),
    maintenance_status: z
      .enum(['scheduled', 'in_progress', 'complete'])
      .openapi({
        'x-type': 'string',
        description: '(Legal values:  scheduled,  in_progress,  complete)',
      }),
    incident_severity: z
      .enum(['info', 'warning', 'critical'])
      .openapi({ 'x-type': 'string', description: '(Legal values:  info,  warning,  critical)' }),
    titles: z.array(ValStatusV1ContentDtoSchema).openapi({ 'x-type': 'List[ContentDto]' }),
    updates: z.array(ValStatusV1UpdateDtoSchema).openapi({ 'x-type': 'List[UpdateDto]' }),
    created_at: z.string().openapi({ 'x-type': 'string' }),
    archive_at: z.string().openapi({ 'x-type': 'string' }),
    updated_at: z.string().openapi({ 'x-type': 'string' }),
    platforms: z
      .array(
        z
          .enum(['windows', 'macos', 'android', 'ios', 'ps4', 'xbone', 'switch'])
          .openapi({ 'x-type': 'string' }),
      )
      .openapi({
        'x-type': 'List[string]',
        description: '(Legal values: windows, macos, android, ios, ps4, xbone, switch)',
      }),
  })
  .openapi({
    title: 'StatusDto',
    required: [
      'id',
      'maintenance_status',
      'incident_severity',
      'titles',
      'updates',
      'created_at',
      'archive_at',
      'updated_at',
      'platforms',
    ],
  })
  .openapi('ValStatusV1StatusDto')

const ValStatusV1PlatformDataDtoSchema = z
  .object({
    id: z.string().openapi({ 'x-type': 'string' }),
    name: z.string().openapi({ 'x-type': 'string' }),
    locales: z
      .array(z.string().openapi({ 'x-type': 'string', 'x-enum': 'locale' }))
      .openapi({ 'x-type': 'List[string]' }),
    maintenances: z.array(ValStatusV1StatusDtoSchema).openapi({ 'x-type': 'List[StatusDto]' }),
    incidents: z.array(ValStatusV1StatusDtoSchema).openapi({ 'x-type': 'List[StatusDto]' }),
  })
  .openapi({
    title: 'PlatformDataDto',
    required: ['id', 'name', 'locales', 'maintenances', 'incidents'],
  })
  .openapi('ValStatusV1PlatformDataDto')

const ApiKeySecurityScheme = {
  type: 'apiKey',
  description: 'API key in query param.',
  name: 'api_key',
  in: 'query',
}

const XRiotTokenSecurityScheme = {
  type: 'apiKey',
  description: 'API key in header.',
  name: 'X-Riot-Token',
  in: 'header',
}

const RsoSecurityScheme = {
  type: 'oauth2',
  description: 'Riot Sign-On (RSO).',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://auth.riotgames.com/authorize',
      tokenUrl: 'https://auth.riotgames.com/token',
      scopes: {
        openid: 'Required, scope for authentication.',
        cpid: 'Returns the game region for League of Legends.',
        offline_access:
          'Allows Refresh Tokens to be used to retrieve new access_tokens that have access to the /userinfo endpoint.',
      },
    },
  },
}

export const getRiotAccountV1AccountsByPuuidPuuidRoute = createRoute({
  method: 'get',
  path: '/riot/account/v1/accounts/by-puuid/{puuid}',
  tags: ['account-v1'],
  summary: 'Get account by puuid',
  description: 'Get account by puuid',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#account-v1/GET_getByPuuid',
  },
  operationId: 'account-v1.getByPuuid',
  request: {
    params: z.object({
      puuid: z
        .string()
        .openapi({
          param: {
            name: 'puuid',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: AccountV1AccountDtoSchema.openapi({ 'x-type': 'AccountDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getRiotAccountV1AccountsByRiotIdGameNameTagLineRoute = createRoute({
  method: 'get',
  path: '/riot/account/v1/accounts/by-riot-id/{gameName}/{tagLine}',
  tags: ['account-v1'],
  summary: 'Get account by riot id',
  description: 'Get account by riot id',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#account-v1/GET_getByRiotId',
  },
  operationId: 'account-v1.getByRiotId',
  request: {
    params: z.object({
      tagLine: z
        .string()
        .openapi({
          param: {
            name: 'tagLine',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
            description:
              'When querying for a player by their riot id, the gameName and tagLine query params are required.',
          },
          'x-type': 'string',
        }),
      gameName: z
        .string()
        .openapi({
          param: {
            name: 'gameName',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
            description:
              'When querying for a player by their riot id, the gameName and tagLine query params are required.',
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: AccountV1AccountDtoSchema.openapi({ 'x-type': 'AccountDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getRiotAccountV1AccountsMeRoute = createRoute({
  method: 'get',
  path: '/riot/account/v1/accounts/me',
  tags: ['account-v1'],
  summary: 'Get account by access token',
  description: 'Get account by access token',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#account-v1/GET_getByAccessToken',
  },
  operationId: 'account-v1.getByAccessToken',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: AccountV1AccountDtoSchema.openapi({ 'x-type': 'AccountDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
  security: [{ rso: ['openid'] }],
})

export const getRiotAccountV1ActiveShardsByGameGameByPuuidPuuidRoute = createRoute({
  method: 'get',
  path: '/riot/account/v1/active-shards/by-game/{game}/by-puuid/{puuid}',
  tags: ['account-v1'],
  summary: 'Get active shard for a player',
  description: 'Get active shard for a player',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#account-v1/GET_getActiveShard',
  },
  operationId: 'account-v1.getActiveShard',
  request: {
    params: z.object({
      game: z
        .enum(['val', 'lor', '2xko'])
        .openapi({
          param: {
            name: 'game',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string', enum: ['val', 'lor', '2xko'] },
          },
          'x-type': 'string',
        }),
      puuid: z
        .string()
        .openapi({
          param: {
            name: 'puuid',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: AccountV1ActiveShardDtoSchema.openapi({ 'x-type': 'ActiveShardDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getRiotAccountV1RegionByGameGameByPuuidPuuidRoute = createRoute({
  method: 'get',
  path: '/riot/account/v1/region/by-game/{game}/by-puuid/{puuid}',
  tags: ['account-v1'],
  summary: 'Get active region (lol and tft)',
  description: 'Get active region (lol and tft)',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#account-v1/GET_getActiveRegion',
  },
  operationId: 'account-v1.getActiveRegion',
  request: {
    params: z.object({
      puuid: z
        .string()
        .openapi({
          param: {
            name: 'puuid',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
          },
          'x-type': 'string',
        }),
      game: z
        .enum(['lol', 'tft'])
        .openapi({
          param: {
            name: 'game',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string', enum: ['lol', 'tft'] },
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: AccountV1AccountRegionDTOSchema.openapi({ 'x-type': 'AccountRegionDTO' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDRoute = createRoute({
  method: 'get',
  path: '/lol/champion-mastery/v4/champion-masteries/by-puuid/{encryptedPUUID}',
  tags: ['champion-mastery-v4'],
  summary: 'Get all champion mastery entries sorted by number of champion points descending.',
  description: 'Get all champion mastery entries sorted by number of champion points descending.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#champion-mastery-v4/GET_getAllChampionMasteriesByPUUID',
  },
  operationId: 'champion-mastery-v4.getAllChampionMasteriesByPUUID',
  request: {
    params: z.object({
      encryptedPUUID: z
        .string()
        .openapi({
          param: {
            name: 'encryptedPUUID',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(ChampionMasteryV4ChampionMasteryDtoSchema)
            .openapi({ 'x-type': 'List[ChampionMasteryDto]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDByChampionChampionIdRoute =
  createRoute({
    method: 'get',
    path: '/lol/champion-mastery/v4/champion-masteries/by-puuid/{encryptedPUUID}/by-champion/{championId}',
    tags: ['champion-mastery-v4'],
    summary: 'Get a champion mastery by puuid and champion ID.',
    description: 'Get a champion mastery by puuid and champion ID.',
    externalDocs: {
      description: 'Official API Reference',
      url: 'https://developer.riotgames.com/api-methods/#champion-mastery-v4/GET_getChampionMasteryByPUUID',
    },
    operationId: 'champion-mastery-v4.getChampionMasteryByPUUID',
    request: {
      params: z.object({
        encryptedPUUID: z
          .string()
          .openapi({
            param: {
              name: 'encryptedPUUID',
              in: 'path',
              required: true,
              schema: { type: 'string', 'x-type': 'string' },
            },
            'x-type': 'string',
          }),
        championId: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int32(),
          )
          .openapi({
            param: {
              name: 'championId',
              in: 'path',
              required: true,
              schema: {
                type: 'integer',
                format: 'int32',
                'x-type': 'integer',
                'x-enum': 'champion',
              },
              description: 'Champion ID to retrieve Champion Mastery.',
            },
            'x-type': 'integer',
            'x-enum': 'champion',
          }),
      }),
    },
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: ChampionMasteryV4ChampionMasteryDtoSchema.openapi({
              'x-type': 'ChampionMasteryDto',
            }),
          },
        },
      },
      400: { description: 'Bad request' },
      401: { description: 'Unauthorized' },
      403: { description: 'Forbidden' },
      404: { description: 'Data not found' },
      405: { description: 'Method not allowed' },
      415: { description: 'Unsupported media type' },
      429: { description: 'Rate limit exceeded' },
      500: { description: 'Internal server error' },
      502: { description: 'Bad gateway' },
      503: { description: 'Service unavailable' },
      504: { description: 'Gateway timeout' },
    },
  })

export const getLolChampionMasteryV4ChampionMasteriesByPuuidEncryptedPUUIDTopRoute = createRoute({
  method: 'get',
  path: '/lol/champion-mastery/v4/champion-masteries/by-puuid/{encryptedPUUID}/top',
  tags: ['champion-mastery-v4'],
  summary:
    'Get specified number of top champion mastery entries sorted by number of champion points descending.',
  description:
    'Get specified number of top champion mastery entries sorted by number of champion points descending.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#champion-mastery-v4/GET_getTopChampionMasteriesByPUUID',
  },
  operationId: 'champion-mastery-v4.getTopChampionMasteriesByPUUID',
  request: {
    params: z.object({
      encryptedPUUID: z
        .string()
        .openapi({
          param: {
            name: 'encryptedPUUID',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
          },
          'x-type': 'string',
        }),
    }),
    query: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'count',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description: 'Number of entries to retrieve, defaults to 3.',
          },
          'x-type': 'int',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(ChampionMasteryV4ChampionMasteryDtoSchema)
            .openapi({ 'x-type': 'List[ChampionMasteryDto]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolChampionMasteryV4ScoresByPuuidEncryptedPUUIDRoute = createRoute({
  method: 'get',
  path: '/lol/champion-mastery/v4/scores/by-puuid/{encryptedPUUID}',
  tags: ['champion-mastery-v4'],
  summary:
    "Get a player's total champion mastery score, which is the sum of individual champion mastery levels.",
  description:
    "Get a player's total champion mastery score, which is the sum of individual champion mastery levels.",
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#champion-mastery-v4/GET_getChampionMasteryScoreByPUUID',
  },
  operationId: 'champion-mastery-v4.getChampionMasteryScoreByPUUID',
  request: {
    params: z.object({
      encryptedPUUID: z
        .string()
        .openapi({
          param: {
            name: 'encryptedPUUID',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.int32().openapi({ 'x-type': 'int' }) } },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolPlatformV3ChampionRotationsRoute = createRoute({
  method: 'get',
  path: '/lol/platform/v3/champion-rotations',
  tags: ['champion-v3'],
  summary:
    'Returns champion rotations, including free-to-play and low-level free-to-play rotations (REST)',
  description:
    'Returns champion rotations, including free-to-play and low-level free-to-play rotations (REST)',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#champion-v3/GET_getChampionInfo',
  },
  operationId: 'champion-v3.getChampionInfo',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ChampionV3ChampionInfoSchema.openapi({ 'x-type': 'ChampionInfo' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolClashV1PlayersByPuuidPuuidRoute = createRoute({
  method: 'get',
  path: '/lol/clash/v1/players/by-puuid/{puuid}',
  tags: ['clash-v1'],
  summary: 'Get players by puuid',
  description:
    'Get players by puuid\n## Implementation Notes\nThis endpoint returns a list of active Clash players for a given PUUID. If a summoner registers for multiple tournaments at the same time (e.g., Saturday and Sunday) then both registrations would appear in this list.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#clash-v1/GET_getPlayersByPUUID',
  },
  operationId: 'clash-v1.getPlayersByPUUID',
  request: {
    params: z.object({
      puuid: z
        .string()
        .openapi({
          param: {
            name: 'puuid',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(ClashV1PlayerDtoSchema).openapi({ 'x-type': 'List[PlayerDto]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolClashV1TeamsTeamIdRoute = createRoute({
  method: 'get',
  path: '/lol/clash/v1/teams/{teamId}',
  tags: ['clash-v1'],
  summary: 'Get team by ID.',
  description: 'Get team by ID.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#clash-v1/GET_getTeamById',
  },
  operationId: 'clash-v1.getTeamById',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ClashV1TeamDtoSchema.openapi({ 'x-type': 'TeamDto' }) },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolClashV1TournamentsRoute = createRoute({
  method: 'get',
  path: '/lol/clash/v1/tournaments',
  tags: ['clash-v1'],
  summary: 'Get all active or upcoming tournaments.',
  description: 'Get all active or upcoming tournaments.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#clash-v1/GET_getTournaments',
  },
  operationId: 'clash-v1.getTournaments',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(ClashV1TournamentDtoSchema).openapi({ 'x-type': 'List[TournamentDto]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolClashV1TournamentsByTeamTeamIdRoute = createRoute({
  method: 'get',
  path: '/lol/clash/v1/tournaments/by-team/{teamId}',
  tags: ['clash-v1'],
  summary: 'Get tournament by team ID.',
  description: 'Get tournament by team ID.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#clash-v1/GET_getTournamentByTeam',
  },
  operationId: 'clash-v1.getTournamentByTeam',
  request: {
    params: z.object({
      teamId: z
        .string()
        .openapi({
          param: {
            name: 'teamId',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ClashV1TournamentDtoSchema.openapi({ 'x-type': 'TournamentDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolClashV1TournamentsTournamentIdRoute = createRoute({
  method: 'get',
  path: '/lol/clash/v1/tournaments/{tournamentId}',
  tags: ['clash-v1'],
  summary: 'Get tournament by ID.',
  description: 'Get tournament by ID.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#clash-v1/GET_getTournamentById',
  },
  operationId: 'clash-v1.getTournamentById',
  request: {
    params: z.object({
      tournamentId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'tournamentId',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
          },
          'x-type': 'int',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ClashV1TournamentDtoSchema.openapi({ 'x-type': 'TournamentDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolLeagueExpV4EntriesQueueTierDivisionRoute = createRoute({
  method: 'get',
  path: '/lol/league-exp/v4/entries/{queue}/{tier}/{division}',
  tags: ['league-exp-v4'],
  summary: 'Get all the league entries.',
  description: 'Get all the league entries.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#league-exp-v4/GET_getLeagueEntries',
  },
  operationId: 'league-exp-v4.getLeagueEntries',
  request: {
    params: z.object({
      queue: z
        .enum(['RANKED_SOLO_5x5', 'RANKED_TFT', 'RANKED_FLEX_SR', 'RANKED_FLEX_TT'])
        .openapi({
          param: {
            name: 'queue',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              'x-type': 'string',
              'x-enum': 'queueType',
              enum: ['RANKED_SOLO_5x5', 'RANKED_TFT', 'RANKED_FLEX_SR', 'RANKED_FLEX_TT'],
            },
            description: 'Note that the queue value must be a valid ranked queue.',
          },
          'x-type': 'string',
          'x-enum': 'queueType',
        }),
      tier: z
        .enum([
          'CHALLENGER',
          'GRANDMASTER',
          'MASTER',
          'DIAMOND',
          'EMERALD',
          'PLATINUM',
          'GOLD',
          'SILVER',
          'BRONZE',
          'IRON',
        ])
        .openapi({
          param: {
            name: 'tier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              'x-type': 'string',
              'x-enum': 'tier',
              enum: [
                'CHALLENGER',
                'GRANDMASTER',
                'MASTER',
                'DIAMOND',
                'EMERALD',
                'PLATINUM',
                'GOLD',
                'SILVER',
                'BRONZE',
                'IRON',
              ],
            },
          },
          'x-type': 'string',
          'x-enum': 'tier',
        }),
      division: z
        .enum(['I', 'II', 'III', 'IV'])
        .openapi({
          param: {
            name: 'division',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              'x-type': 'string',
              'x-enum': 'division',
              enum: ['I', 'II', 'III', 'IV'],
            },
          },
          'x-type': 'string',
          'x-enum': 'division',
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description: 'Defaults to 1. Starts with page 1.',
          },
          'x-type': 'int',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(LeagueExpV4LeagueEntryDTOSchema)
            .openapi({ 'x-type': 'Set[LeagueEntryDTO]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolLeagueV4ChallengerleaguesByQueueQueueRoute = createRoute({
  method: 'get',
  path: '/lol/league/v4/challengerleagues/by-queue/{queue}',
  tags: ['league-v4'],
  summary: 'Get the challenger league for given queue.',
  description: 'Get the challenger league for given queue.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#league-v4/GET_getChallengerLeague',
  },
  operationId: 'league-v4.getChallengerLeague',
  request: {
    params: z.object({
      queue: z
        .enum(['RANKED_SOLO_5x5', 'RANKED_FLEX_SR', 'RANKED_FLEX_TT'])
        .openapi({
          param: {
            name: 'queue',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              'x-type': 'string',
              'x-enum': 'queueType',
              enum: ['RANKED_SOLO_5x5', 'RANKED_FLEX_SR', 'RANKED_FLEX_TT'],
            },
          },
          'x-type': 'string',
          'x-enum': 'queueType',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: LeagueV4LeagueListDTOSchema.openapi({ 'x-type': 'LeagueListDTO' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolLeagueV4EntriesByPuuidEncryptedPUUIDRoute = createRoute({
  method: 'get',
  path: '/lol/league/v4/entries/by-puuid/{encryptedPUUID}',
  tags: ['league-v4'],
  summary: 'Get league entries in all queues for a given puuid',
  description: 'Get league entries in all queues for a given puuid',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#league-v4/GET_getLeagueEntriesByPUUID',
  },
  operationId: 'league-v4.getLeagueEntriesByPUUID',
  request: {
    params: z.object({
      encryptedPUUID: z
        .string()
        .openapi({
          param: {
            name: 'encryptedPUUID',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(LeagueV4LeagueEntryDTOSchema)
            .openapi({ 'x-type': 'Set[LeagueEntryDTO]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolLeagueV4EntriesQueueTierDivisionRoute = createRoute({
  method: 'get',
  path: '/lol/league/v4/entries/{queue}/{tier}/{division}',
  tags: ['league-v4'],
  summary: 'Get all the league entries.',
  description: 'Get all the league entries.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#league-v4/GET_getLeagueEntries',
  },
  operationId: 'league-v4.getLeagueEntries',
  request: {
    params: z.object({
      division: z
        .enum(['I', 'II', 'III', 'IV'])
        .openapi({
          param: {
            name: 'division',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              'x-type': 'string',
              'x-enum': 'division',
              enum: ['I', 'II', 'III', 'IV'],
            },
          },
          'x-type': 'string',
          'x-enum': 'division',
        }),
      tier: z
        .enum(['DIAMOND', 'EMERALD', 'PLATINUM', 'GOLD', 'SILVER', 'BRONZE', 'IRON'])
        .openapi({
          param: {
            name: 'tier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              'x-type': 'string',
              'x-enum': 'tier',
              enum: ['DIAMOND', 'EMERALD', 'PLATINUM', 'GOLD', 'SILVER', 'BRONZE', 'IRON'],
            },
          },
          'x-type': 'string',
          'x-enum': 'tier',
        }),
      queue: z
        .enum(['RANKED_SOLO_5x5', 'RANKED_FLEX_SR', 'RANKED_FLEX_TT'])
        .openapi({
          param: {
            name: 'queue',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              'x-type': 'string',
              'x-enum': 'queueType',
              enum: ['RANKED_SOLO_5x5', 'RANKED_FLEX_SR', 'RANKED_FLEX_TT'],
            },
            description: 'Note that the queue value must be a valid ranked queue.',
          },
          'x-type': 'string',
          'x-enum': 'queueType',
        }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description: 'Defaults to 1. Starts with page 1.',
          },
          'x-type': 'int',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(LeagueV4LeagueEntryDTOSchema)
            .openapi({ 'x-type': 'Set[LeagueEntryDTO]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolLeagueV4GrandmasterleaguesByQueueQueueRoute = createRoute({
  method: 'get',
  path: '/lol/league/v4/grandmasterleagues/by-queue/{queue}',
  tags: ['league-v4'],
  summary: 'Get the grandmaster league of a specific queue.',
  description: 'Get the grandmaster league of a specific queue.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#league-v4/GET_getGrandmasterLeague',
  },
  operationId: 'league-v4.getGrandmasterLeague',
  request: {
    params: z.object({
      queue: z
        .enum(['RANKED_SOLO_5x5', 'RANKED_FLEX_SR', 'RANKED_FLEX_TT'])
        .openapi({
          param: {
            name: 'queue',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              'x-type': 'string',
              'x-enum': 'queueType',
              enum: ['RANKED_SOLO_5x5', 'RANKED_FLEX_SR', 'RANKED_FLEX_TT'],
            },
          },
          'x-type': 'string',
          'x-enum': 'queueType',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: LeagueV4LeagueListDTOSchema.openapi({ 'x-type': 'LeagueListDTO' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolLeagueV4MasterleaguesByQueueQueueRoute = createRoute({
  method: 'get',
  path: '/lol/league/v4/masterleagues/by-queue/{queue}',
  tags: ['league-v4'],
  summary: 'Get the master league for given queue.',
  description: 'Get the master league for given queue.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#league-v4/GET_getMasterLeague',
  },
  operationId: 'league-v4.getMasterLeague',
  request: {
    params: z.object({
      queue: z
        .enum(['RANKED_SOLO_5x5', 'RANKED_FLEX_SR', 'RANKED_FLEX_TT'])
        .openapi({
          param: {
            name: 'queue',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              'x-type': 'string',
              'x-enum': 'queueType',
              enum: ['RANKED_SOLO_5x5', 'RANKED_FLEX_SR', 'RANKED_FLEX_TT'],
            },
          },
          'x-type': 'string',
          'x-enum': 'queueType',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: LeagueV4LeagueListDTOSchema.openapi({ 'x-type': 'LeagueListDTO' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolChallengesV1ChallengesConfigRoute = createRoute({
  method: 'get',
  path: '/lol/challenges/v1/challenges/config',
  tags: ['lol-challenges-v1'],
  summary:
    'List of all basic challenge configuration information (includes all translations for names and descriptions)',
  description:
    'List of all basic challenge configuration information (includes all translations for names and descriptions)',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lol-challenges-v1/GET_getAllChallengeConfigs',
  },
  operationId: 'lol-challenges-v1.getAllChallengeConfigs',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(LolChallengesV1ChallengeConfigInfoDtoSchema)
            .openapi({ 'x-type': 'List[ChallengeConfigInfoDto]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolChallengesV1ChallengesPercentilesRoute = createRoute({
  method: 'get',
  path: '/lol/challenges/v1/challenges/percentiles',
  tags: ['lol-challenges-v1'],
  summary:
    'Map of level to percentile of players who have achieved it - keys: ChallengeId -> Season -> Level -> percentile of players who achieved it',
  description:
    'Map of level to percentile of players who have achieved it - keys: ChallengeId -> Season -> Level -> percentile of players who achieved it',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lol-challenges-v1/GET_getAllChallengePercentiles',
  },
  operationId: 'lol-challenges-v1.getAllChallengePercentiles',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .record(
              z.string(),
              z
                .record(z.string(), z.float64().openapi({ 'x-type': 'double' }))
                .openapi({
                  'x-type': 'Map[Level, Double]',
                  'x-key': { type: 'string', 'x-type': 'string', 'x-enum': 'tier' },
                }),
            )
            .openapi({
              'x-type': 'Map[Long, Map[Level, Double]]',
              'x-key': { 'x-type': 'long', type: 'integer', format: 'int64' },
            }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolChallengesV1ChallengesChallengeIdConfigRoute = createRoute({
  method: 'get',
  path: '/lol/challenges/v1/challenges/{challengeId}/config',
  tags: ['lol-challenges-v1'],
  summary: 'Get challenge configuration (REST)',
  description: 'Get challenge configuration (REST)',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lol-challenges-v1/GET_getChallengeConfigs',
  },
  operationId: 'lol-challenges-v1.getChallengeConfigs',
  request: {
    params: z.object({
      challengeId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'challengeId',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int64', 'x-type': 'long' },
          },
          'x-type': 'long',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: LolChallengesV1ChallengeConfigInfoDtoSchema.openapi({
            'x-type': 'ChallengeConfigInfoDto',
          }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolChallengesV1ChallengesChallengeIdLeaderboardsByLevelLevelRoute = createRoute({
  method: 'get',
  path: '/lol/challenges/v1/challenges/{challengeId}/leaderboards/by-level/{level}',
  tags: ['lol-challenges-v1'],
  summary: 'Return top players for each level. Level must be MASTER, GRANDMASTER or CHALLENGER.',
  description:
    'Return top players for each level. Level must be MASTER, GRANDMASTER or CHALLENGER.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lol-challenges-v1/GET_getChallengeLeaderboards',
  },
  operationId: 'lol-challenges-v1.getChallengeLeaderboards',
  request: {
    params: z.object({
      level: z
        .enum([
          'NONE',
          'IRON',
          'BRONZE',
          'SILVER',
          'GOLD',
          'PLATINUM',
          'DIAMOND',
          'MASTER',
          'GRANDMASTER',
          'CHALLENGER',
          'HIGHEST_NOT_LEADERBOARD_ONLY',
          'HIGHEST',
          'LOWEST',
        ])
        .openapi({
          param: {
            name: 'level',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              'x-type': 'string',
              'x-enum': 'tier',
              enum: [
                'NONE',
                'IRON',
                'BRONZE',
                'SILVER',
                'GOLD',
                'PLATINUM',
                'DIAMOND',
                'MASTER',
                'GRANDMASTER',
                'CHALLENGER',
                'HIGHEST_NOT_LEADERBOARD_ONLY',
                'HIGHEST',
                'LOWEST',
              ],
            },
          },
          'x-type': 'string',
          'x-enum': 'tier',
        }),
      challengeId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'challengeId',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int64', 'x-type': 'long' },
          },
          'x-type': 'long',
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
          },
          'x-type': 'int',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(LolChallengesV1ApexPlayerInfoDtoSchema)
            .openapi({ 'x-type': 'List[ApexPlayerInfoDto]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolChallengesV1ChallengesChallengeIdPercentilesRoute = createRoute({
  method: 'get',
  path: '/lol/challenges/v1/challenges/{challengeId}/percentiles',
  tags: ['lol-challenges-v1'],
  summary: 'Map of level to percentile of players who have achieved it',
  description: 'Map of level to percentile of players who have achieved it',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lol-challenges-v1/GET_getChallengePercentiles',
  },
  operationId: 'lol-challenges-v1.getChallengePercentiles',
  request: {
    params: z.object({
      challengeId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'challengeId',
            in: 'path',
            required: true,
            schema: { type: 'integer', format: 'int64', 'x-type': 'long' },
          },
          'x-type': 'long',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .record(z.string(), z.float64().openapi({ 'x-type': 'double' }))
            .openapi({
              'x-type': 'Map[Level, Double]',
              'x-key': { type: 'string', 'x-type': 'string', 'x-enum': 'tier' },
            }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolChallengesV1PlayerDataPuuidRoute = createRoute({
  method: 'get',
  path: '/lol/challenges/v1/player-data/{puuid}',
  tags: ['lol-challenges-v1'],
  summary: 'Returns player information with list of all progressed challenges (REST)',
  description: 'Returns player information with list of all progressed challenges (REST)',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lol-challenges-v1/GET_getPlayerData',
  },
  operationId: 'lol-challenges-v1.getPlayerData',
  request: {
    params: z.object({
      puuid: z
        .string()
        .openapi({
          param: {
            name: 'puuid',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: LolChallengesV1PlayerInfoDtoSchema.openapi({ 'x-type': 'PlayerInfoDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolRsoMatchV1MatchesIdsRoute = createRoute({
  method: 'get',
  path: '/lol/rso-match/v1/matches/ids',
  tags: ['lol-rso-match-v1'],
  summary: 'Get a list of match ids by player access token - Includes custom matches',
  description: 'Get a list of match ids by player access token - Includes custom matches',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lol-rso-match-v1/GET_getMatchIds',
  },
  operationId: 'lol-rso-match-v1.getMatchIds',
  request: {
    query: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'count',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description: 'Defaults to 20. Valid values: 0 to 100. Number of match ids to return.',
          },
          'x-type': 'int',
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description: 'Defaults to 0. Start index.',
          },
          'x-type': 'int',
        }),
      type: z
        .enum(['ranked', 'normal', 'tourney', 'tutorial'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              'x-type': 'string',
              enum: ['ranked', 'normal', 'tourney', 'tutorial'],
            },
            description:
              'Filter the list of match ids by the type of match. This filter is mutually inclusive of the queue filter meaning any match ids returned must match both the queue and type filters.',
          },
          'x-type': 'string',
        }),
      queue: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'queue',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description:
              'Filter the list of match ids by a specific queue id. This filter is mutually inclusive of the type filter meaning any match ids returned must match both the queue and type filters.',
          },
          'x-type': 'int',
        }),
      endTime: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'endTime',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int64', 'x-type': 'long' },
            description: 'Epoch timestamp in seconds.',
          },
          'x-type': 'long',
        }),
      startTime: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'startTime',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int64', 'x-type': 'long' },
            description:
              "Epoch timestamp in seconds. The matchlist started storing timestamps on June 16th, 2021. Any matches played before June 16th, 2021 won't be included in the results if the startTime filter is set.",
          },
          'x-type': 'long',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(z.string().openapi({ 'x-type': 'string' }))
            .openapi({ 'x-type': 'List[string]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
  security: [{ rso: ['openid'] }],
})

export const getLolRsoMatchV1MatchesMatchIdRoute = createRoute({
  method: 'get',
  path: '/lol/rso-match/v1/matches/{matchId}',
  tags: ['lol-rso-match-v1'],
  summary: 'Get a match by match id',
  description: 'Get a match by match id',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lol-rso-match-v1/GET_getMatch',
  },
  operationId: 'lol-rso-match-v1.getMatch',
  request: {
    params: z.object({
      matchId: z
        .string()
        .openapi({
          param: {
            name: 'matchId',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: MatchV5MatchDtoSchema.openapi({ 'x-type': 'MatchDto' }) },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
  security: [{ rso: ['openid'] }],
})

export const getLolRsoMatchV1MatchesMatchIdTimelineRoute = createRoute({
  method: 'get',
  path: '/lol/rso-match/v1/matches/{matchId}/timeline',
  tags: ['lol-rso-match-v1'],
  summary: 'Get a match timeline by match id',
  description: 'Get a match timeline by match id',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lol-rso-match-v1/GET_getTimeline',
  },
  operationId: 'lol-rso-match-v1.getTimeline',
  request: {
    params: z.object({
      matchId: z
        .string()
        .openapi({
          param: {
            name: 'matchId',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'String' },
          },
          'x-type': 'String',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: MatchV5TimelineDtoSchema.openapi({ 'x-type': 'TimelineDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
  security: [{ rso: ['openid'] }],
})

export const getLolStatusV4PlatformDataRoute = createRoute({
  method: 'get',
  path: '/lol/status/v4/platform-data',
  tags: ['lol-status-v4'],
  summary: 'Get League of Legends status for the given platform.',
  description: 'Get League of Legends status for the given platform.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lol-status-v4/GET_getPlatformData',
  },
  operationId: 'lol-status-v4.getPlatformData',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: LolStatusV4PlatformDataDtoSchema.openapi({ 'x-type': 'PlatformDataDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLorDeckV1DecksMeRoute = createRoute({
  method: 'get',
  path: '/lor/deck/v1/decks/me',
  tags: ['lor-deck-v1'],
  summary: "Get a list of the calling user's decks.",
  description: "Get a list of the calling user's decks.",
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lor-deck-v1/GET_getDecks',
  },
  operationId: 'lor-deck-v1.getDecks',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(LorDeckV1DeckDtoSchema).openapi({ 'x-type': 'List[DeckDto]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
  security: [{ rso: ['openid'] }],
})

export const postLorDeckV1DecksMeRoute = createRoute({
  method: 'post',
  path: '/lor/deck/v1/decks/me',
  tags: ['lor-deck-v1'],
  summary: 'Create a new deck for the calling user.',
  description: 'Create a new deck for the calling user.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lor-deck-v1/POST_createDeck',
  },
  operationId: 'lor-deck-v1.createDeck',
  request: {
    body: {
      content: {
        'application/json': {
          schema: LorDeckV1NewDeckDtoSchema.openapi({ 'x-type': 'NewDeckDto' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.string().openapi({ 'x-type': 'String' }) } },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
  security: [{ rso: ['openid'] }],
})

export const getLorInventoryV1CardsMeRoute = createRoute({
  method: 'get',
  path: '/lor/inventory/v1/cards/me',
  tags: ['lor-inventory-v1'],
  summary: 'Return a list of cards owned by the calling user.',
  description: 'Return a list of cards owned by the calling user.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lor-inventory-v1/GET_getCards',
  },
  operationId: 'lor-inventory-v1.getCards',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.array(LorInventoryV1CardDtoSchema).openapi({ 'x-type': 'List[CardDto]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
  security: [{ rso: ['openid'] }],
})

export const getLorMatchV1MatchesByPuuidPuuidIdsRoute = createRoute({
  method: 'get',
  path: '/lor/match/v1/matches/by-puuid/{puuid}/ids',
  tags: ['lor-match-v1'],
  summary: 'Get a list of match ids by PUUID',
  description: 'Get a list of match ids by PUUID',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lor-match-v1/GET_getMatchIdsByPUUID',
  },
  operationId: 'lor-match-v1.getMatchIdsByPUUID',
  request: {
    params: z.object({
      puuid: z
        .string()
        .openapi({
          param: {
            name: 'puuid',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'String' },
          },
          'x-type': 'String',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(z.string().openapi({ 'x-type': 'string' }))
            .openapi({ 'x-type': 'List[string]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLorMatchV1MatchesMatchIdRoute = createRoute({
  method: 'get',
  path: '/lor/match/v1/matches/{matchId}',
  tags: ['lor-match-v1'],
  summary: 'Get match by id',
  description: 'Get match by id',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lor-match-v1/GET_getMatch',
  },
  operationId: 'lor-match-v1.getMatch',
  request: {
    params: z.object({
      matchId: z
        .string()
        .openapi({
          param: {
            name: 'matchId',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'String' },
          },
          'x-type': 'String',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: LorMatchV1MatchDtoSchema.openapi({ 'x-type': 'MatchDto' }) },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLorRankedV1LeaderboardsRoute = createRoute({
  method: 'get',
  path: '/lor/ranked/v1/leaderboards',
  tags: ['lor-ranked-v1'],
  summary: 'Get the players in Master tier.',
  description: 'Get the players in Master tier.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lor-ranked-v1/GET_getLeaderboards',
  },
  operationId: 'lor-ranked-v1.getLeaderboards',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: LorRankedV1LeaderboardDtoSchema.openapi({ 'x-type': 'LeaderboardDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLorStatusV1PlatformDataRoute = createRoute({
  method: 'get',
  path: '/lor/status/v1/platform-data',
  tags: ['lor-status-v1'],
  summary: 'Get Legends of Runeterra status for the given platform.',
  description: 'Get Legends of Runeterra status for the given platform.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#lor-status-v1/GET_getPlatformData',
  },
  operationId: 'lor-status-v1.getPlatformData',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: LorStatusV1PlatformDataDtoSchema.openapi({ 'x-type': 'PlatformDataDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolMatchV5MatchesByPuuidPuuidIdsRoute = createRoute({
  method: 'get',
  path: '/lol/match/v5/matches/by-puuid/{puuid}/ids',
  tags: ['match-v5'],
  summary: 'Get a list of match ids by puuid',
  description: 'Get a list of match ids by puuid',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#match-v5/GET_getMatchIdsByPUUID',
  },
  operationId: 'match-v5.getMatchIdsByPUUID',
  request: {
    params: z.object({
      puuid: z
        .string()
        .openapi({
          param: {
            name: 'puuid',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'String' },
          },
          'x-type': 'String',
        }),
    }),
    query: z.object({
      startTime: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'startTime',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int64', 'x-type': 'long' },
            description:
              "Epoch timestamp in seconds. The matchlist started storing timestamps on June 16th, 2021. Any matches played before June 16th, 2021 won't be included in the results if the startTime filter is set.",
          },
          'x-type': 'long',
        }),
      endTime: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'endTime',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int64', 'x-type': 'long' },
            description: 'Epoch timestamp in seconds.',
          },
          'x-type': 'long',
        }),
      queue: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'queue',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int', 'x-enum': 'queue' },
            description:
              'Filter the list of match ids by a specific queue id. This filter is mutually inclusive of the type filter meaning any match ids returned must match both the queue and type filters.',
          },
          'x-type': 'int',
          'x-enum': 'queue',
        }),
      type: z
        .enum(['ranked', 'normal', 'tourney', 'tutorial'])
        .exactOptional()
        .openapi({
          param: {
            name: 'type',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              'x-type': 'string',
              enum: ['ranked', 'normal', 'tourney', 'tutorial'],
            },
            description:
              'Filter the list of match ids by the type of match. This filter is mutually inclusive of the queue filter meaning any match ids returned must match both the queue and type filters.',
          },
          'x-type': 'string',
        }),
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description: 'Defaults to 0. Start index.',
          },
          'x-type': 'int',
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'count',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description: 'Defaults to 20. Valid values: 0 to 100. Number of match ids to return.',
          },
          'x-type': 'int',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(z.string().openapi({ 'x-type': 'string' }))
            .openapi({ 'x-type': 'List[string]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolMatchV5MatchesReplaysRoute = createRoute({
  method: 'get',
  path: '/lol/match/v5/matches/replays',
  tags: ['match-v5'],
  summary: 'Get player replays by access token',
  description: 'Get player replays by access token',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#match-v5/GET_getReplayByAccessToken',
  },
  operationId: 'match-v5.getReplayByAccessToken',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: MatchV5ReplayDTOSchema.openapi({ 'x-type': 'ReplayDTO' }) },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
  security: [{ rso: ['openid'] }],
})

export const getLolMatchV5MatchesMatchIdRoute = createRoute({
  method: 'get',
  path: '/lol/match/v5/matches/{matchId}',
  tags: ['match-v5'],
  summary: 'Get a match by match id',
  description: 'Get a match by match id',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#match-v5/GET_getMatch',
  },
  operationId: 'match-v5.getMatch',
  request: {
    params: z.object({
      matchId: z
        .string()
        .openapi({
          param: {
            name: 'matchId',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'String' },
          },
          'x-type': 'String',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: MatchV5MatchDtoSchema.openapi({ 'x-type': 'MatchDto' }) },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolMatchV5MatchesMatchIdTimelineRoute = createRoute({
  method: 'get',
  path: '/lol/match/v5/matches/{matchId}/timeline',
  tags: ['match-v5'],
  summary: 'Get a match timeline by match id',
  description: 'Get a match timeline by match id',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#match-v5/GET_getTimeline',
  },
  operationId: 'match-v5.getTimeline',
  request: {
    params: z.object({
      matchId: z
        .string()
        .openapi({
          param: {
            name: 'matchId',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'String' },
          },
          'x-type': 'String',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: MatchV5TimelineDtoSchema.openapi({ 'x-type': 'TimelineDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getRiftboundContentV1ContentsRoute = createRoute({
  method: 'get',
  path: '/riftbound/content/v1/contents',
  tags: ['riftbound-content-v1'],
  summary: 'Get riftbound content',
  description: 'Get riftbound content',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#riftbound-content-v1/GET_getContent',
  },
  operationId: 'riftbound-content-v1.getContent',
  request: {
    query: z.object({
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'locale',
            in: 'query',
            required: false,
            schema: { type: 'string', 'x-type': 'string' },
            description:
              'Defaults to en. Optional. Specifies the language and regional settings for the response. Use a locale code. During beta only en available.',
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: RiftboundContentV1RiftboundContentDTOSchema.openapi({
            'x-type': 'RiftboundContentDTO',
          }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolSpectatorTftV5ActiveGamesByPuuidEncryptedPUUIDRoute = createRoute({
  method: 'get',
  path: '/lol/spectator/tft/v5/active-games/by-puuid/{encryptedPUUID}',
  tags: ['spectator-tft-v5'],
  summary: 'Get current game information for the given puuid.',
  description: 'Get current game information for the given puuid.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#spectator-tft-v5/GET_getCurrentGameInfoByPuuid',
  },
  operationId: 'spectator-tft-v5.getCurrentGameInfoByPuuid',
  request: {
    params: z.object({
      encryptedPUUID: z
        .string()
        .openapi({
          param: {
            name: 'encryptedPUUID',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
            description: 'The puuid of the summoner.',
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: SpectatorTftV5CurrentGameInfoSchema.openapi({ 'x-type': 'CurrentGameInfo' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolSpectatorV5ActiveGamesBySummonerEncryptedPUUIDRoute = createRoute({
  method: 'get',
  path: '/lol/spectator/v5/active-games/by-summoner/{encryptedPUUID}',
  tags: ['spectator-v5'],
  summary: 'Get current game information for the given puuid.',
  description: 'Get current game information for the given puuid.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#spectator-v5/GET_getCurrentGameInfoByPuuid',
  },
  operationId: 'spectator-v5.getCurrentGameInfoByPuuid',
  request: {
    params: z.object({
      encryptedPUUID: z
        .string()
        .openapi({
          param: {
            name: 'encryptedPUUID',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
            description: 'The puuid of the summoner.',
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: SpectatorV5CurrentGameInfoSchema.openapi({ 'x-type': 'CurrentGameInfo' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolSummonerV4SummonersByPuuidEncryptedPUUIDRoute = createRoute({
  method: 'get',
  path: '/lol/summoner/v4/summoners/by-puuid/{encryptedPUUID}',
  tags: ['summoner-v4'],
  summary: 'Get a summoner by PUUID.',
  description: 'Get a summoner by PUUID.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#summoner-v4/GET_getByPUUID',
  },
  operationId: 'summoner-v4.getByPUUID',
  request: {
    params: z.object({
      encryptedPUUID: z
        .string()
        .openapi({
          param: {
            name: 'encryptedPUUID',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
            description: 'Summoner ID',
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: SummonerV4SummonerDTOSchema.openapi({ 'x-type': 'SummonerDTO' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolSummonerV4SummonersMeRoute = createRoute({
  method: 'get',
  path: '/lol/summoner/v4/summoners/me',
  tags: ['summoner-v4'],
  summary: 'Get a summoner by access token.',
  description: 'Get a summoner by access token.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#summoner-v4/GET_getByAccessToken',
  },
  operationId: 'summoner-v4.getByAccessToken',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: SummonerV4SummonerDTOSchema.openapi({ 'x-type': 'SummonerDTO' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
  security: [{ rso: ['openid'] }],
})

export const getTftLeagueV1ByPuuidPuuidRoute = createRoute({
  method: 'get',
  path: '/tft/league/v1/by-puuid/{puuid}',
  tags: ['tft-league-v1'],
  summary: 'Get league entries in all queues for a given puuid',
  description: 'Get league entries in all queues for a given puuid',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tft-league-v1/GET_getLeagueEntriesByPUUID',
  },
  operationId: 'tft-league-v1.getLeagueEntriesByPUUID',
  request: {
    params: z.object({
      puuid: z
        .string()
        .openapi({
          param: {
            name: 'puuid',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(TftLeagueV1LeagueEntryDTOSchema)
            .openapi({ 'x-type': 'Set[LeagueEntryDTO]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getTftLeagueV1ChallengerRoute = createRoute({
  method: 'get',
  path: '/tft/league/v1/challenger',
  tags: ['tft-league-v1'],
  summary: 'Get the challenger league.',
  description: 'Get the challenger league.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tft-league-v1/GET_getChallengerLeague',
  },
  operationId: 'tft-league-v1.getChallengerLeague',
  request: {
    query: z.object({
      queue: z
        .enum(['RANKED_TFT', 'RANKED_TFT_DOUBLE_UP'])
        .exactOptional()
        .openapi({
          param: {
            name: 'queue',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              'x-type': 'string',
              enum: ['RANKED_TFT', 'RANKED_TFT_DOUBLE_UP'],
            },
            description: 'Defaults to RANKED_TFT.',
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: TftLeagueV1LeagueListDTOSchema.openapi({ 'x-type': 'LeagueListDTO' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getTftLeagueV1EntriesTierDivisionRoute = createRoute({
  method: 'get',
  path: '/tft/league/v1/entries/{tier}/{division}',
  tags: ['tft-league-v1'],
  summary: 'Get all the league entries.',
  description: 'Get all the league entries.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tft-league-v1/GET_getLeagueEntries',
  },
  operationId: 'tft-league-v1.getLeagueEntries',
  request: {
    params: z.object({
      tier: z
        .enum(['DIAMOND', 'EMERALD', 'PLATINUM', 'GOLD', 'SILVER', 'BRONZE', 'IRON'])
        .openapi({
          param: {
            name: 'tier',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              'x-type': 'string',
              'x-enum': 'tier',
              enum: ['DIAMOND', 'EMERALD', 'PLATINUM', 'GOLD', 'SILVER', 'BRONZE', 'IRON'],
            },
          },
          'x-type': 'string',
          'x-enum': 'tier',
        }),
      division: z
        .enum(['I', 'II', 'III', 'IV'])
        .openapi({
          param: {
            name: 'division',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string', enum: ['I', 'II', 'III', 'IV'] },
          },
          'x-type': 'string',
        }),
    }),
    query: z.object({
      queue: z
        .enum(['RANKED_TFT', 'RANKED_TFT_DOUBLE_UP'])
        .exactOptional()
        .openapi({
          param: {
            name: 'queue',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              'x-type': 'string',
              enum: ['RANKED_TFT', 'RANKED_TFT_DOUBLE_UP'],
            },
            description: 'Defaults to RANKED_TFT.',
          },
          'x-type': 'string',
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description: 'Defaults to 1. Starts with page 1.',
          },
          'x-type': 'int',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(TftLeagueV1LeagueEntryDTOSchema)
            .openapi({ 'x-type': 'Set[LeagueEntryDTO]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getTftLeagueV1GrandmasterRoute = createRoute({
  method: 'get',
  path: '/tft/league/v1/grandmaster',
  tags: ['tft-league-v1'],
  summary: 'Get the grandmaster league.',
  description: 'Get the grandmaster league.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tft-league-v1/GET_getGrandmasterLeague',
  },
  operationId: 'tft-league-v1.getGrandmasterLeague',
  request: {
    query: z.object({
      queue: z
        .enum(['RANKED_TFT', 'RANKED_TFT_DOUBLE_UP'])
        .exactOptional()
        .openapi({
          param: {
            name: 'queue',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              'x-type': 'string',
              enum: ['RANKED_TFT', 'RANKED_TFT_DOUBLE_UP'],
            },
            description: 'Defaults to RANKED_TFT.',
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: TftLeagueV1LeagueListDTOSchema.openapi({ 'x-type': 'LeagueListDTO' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getTftLeagueV1MasterRoute = createRoute({
  method: 'get',
  path: '/tft/league/v1/master',
  tags: ['tft-league-v1'],
  summary: 'Get the master league.',
  description: 'Get the master league.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tft-league-v1/GET_getMasterLeague',
  },
  operationId: 'tft-league-v1.getMasterLeague',
  request: {
    query: z.object({
      queue: z
        .enum(['RANKED_TFT', 'RANKED_TFT_DOUBLE_UP'])
        .exactOptional()
        .openapi({
          param: {
            name: 'queue',
            in: 'query',
            required: false,
            schema: {
              type: 'string',
              'x-type': 'string',
              enum: ['RANKED_TFT', 'RANKED_TFT_DOUBLE_UP'],
            },
            description: 'Defaults to RANKED_TFT.',
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: TftLeagueV1LeagueListDTOSchema.openapi({ 'x-type': 'LeagueListDTO' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getTftLeagueV1RatedLaddersQueueTopRoute = createRoute({
  method: 'get',
  path: '/tft/league/v1/rated-ladders/{queue}/top',
  tags: ['tft-league-v1'],
  summary: 'Get the top rated ladder for given queue',
  description: 'Get the top rated ladder for given queue',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tft-league-v1/GET_getTopRatedLadder',
  },
  operationId: 'tft-league-v1.getTopRatedLadder',
  request: {
    params: z.object({
      queue: z
        .literal('RANKED_TFT_TURBO')
        .openapi({
          param: {
            name: 'queue',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              'x-type': 'string',
              'x-enum': 'queueType',
              enum: ['RANKED_TFT_TURBO'],
            },
          },
          'x-type': 'string',
          'x-enum': 'queueType',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(TftLeagueV1TopRatedLadderEntryDtoSchema)
            .openapi({ 'x-type': 'List[TopRatedLadderEntryDto]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getTftMatchV1MatchesByPuuidPuuidIdsRoute = createRoute({
  method: 'get',
  path: '/tft/match/v1/matches/by-puuid/{puuid}/ids',
  tags: ['tft-match-v1'],
  summary: 'Get a list of match ids by PUUID',
  description: 'Get a list of match ids by PUUID',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tft-match-v1/GET_getMatchIdsByPUUID',
  },
  operationId: 'tft-match-v1.getMatchIdsByPUUID',
  request: {
    params: z.object({
      puuid: z
        .string()
        .openapi({
          param: {
            name: 'puuid',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'String' },
          },
          'x-type': 'String',
        }),
    }),
    query: z.object({
      start: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'start',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description: 'Defaults to 0. Start index.',
          },
          'x-type': 'int',
        }),
      endTime: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'endTime',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int64', 'x-type': 'long' },
            description: 'Epoch timestamp in seconds.',
          },
          'x-type': 'long',
        }),
      startTime: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            name: 'startTime',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int64', 'x-type': 'long' },
            description:
              "Epoch timestamp in seconds. The matchlist started storing timestamps on June 16th, 2021. Any matches played before June 16th, 2021 won't be included in the results if the startTime filter is set.",
          },
          'x-type': 'long',
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'count',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description: 'Defaults to 20. Number of match ids to return.',
          },
          'x-type': 'int',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(z.string().openapi({ 'x-type': 'string' }))
            .openapi({ 'x-type': 'List[string]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getTftMatchV1MatchesMatchIdRoute = createRoute({
  method: 'get',
  path: '/tft/match/v1/matches/{matchId}',
  tags: ['tft-match-v1'],
  summary: 'Get a match by match id',
  description: 'Get a match by match id',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tft-match-v1/GET_getMatch',
  },
  operationId: 'tft-match-v1.getMatch',
  request: {
    params: z.object({
      matchId: z
        .string()
        .openapi({
          param: {
            name: 'matchId',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'String' },
          },
          'x-type': 'String',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: TftMatchV1MatchDtoSchema.openapi({ 'x-type': 'MatchDto' }) },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getTftStatusV1PlatformDataRoute = createRoute({
  method: 'get',
  path: '/tft/status/v1/platform-data',
  tags: ['tft-status-v1'],
  summary: 'Get Teamfight Tactics status for the given platform.',
  description: 'Get Teamfight Tactics status for the given platform.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tft-status-v1/GET_getPlatformData',
  },
  operationId: 'tft-status-v1.getPlatformData',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: TftStatusV1PlatformDataDtoSchema.openapi({ 'x-type': 'PlatformDataDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getTftSummonerV1SummonersByPuuidEncryptedPUUIDRoute = createRoute({
  method: 'get',
  path: '/tft/summoner/v1/summoners/by-puuid/{encryptedPUUID}',
  tags: ['tft-summoner-v1'],
  summary: 'Get a summoner by PUUID.',
  description: 'Get a summoner by PUUID.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tft-summoner-v1/GET_getByPUUID',
  },
  operationId: 'tft-summoner-v1.getByPUUID',
  request: {
    params: z.object({
      encryptedPUUID: z
        .string()
        .openapi({
          param: {
            name: 'encryptedPUUID',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
            description: 'Summoner ID',
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: TftSummonerV1SummonerDTOSchema.openapi({ 'x-type': 'SummonerDTO' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getTftSummonerV1SummonersMeRoute = createRoute({
  method: 'get',
  path: '/tft/summoner/v1/summoners/me',
  tags: ['tft-summoner-v1'],
  summary: 'Get a summoner by access token.',
  description: 'Get a summoner by access token.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tft-summoner-v1/GET_getByAccessToken',
  },
  operationId: 'tft-summoner-v1.getByAccessToken',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: TftSummonerV1SummonerDTOSchema.openapi({ 'x-type': 'SummonerDTO' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
  security: [{ rso: ['openid'] }],
})

export const postLolTournamentStubV5CodesRoute = createRoute({
  method: 'post',
  path: '/lol/tournament-stub/v5/codes',
  tags: ['tournament-stub-v5'],
  summary: 'Create a tournament code for the given tournament - Stub method',
  description: 'Create a tournament code for the given tournament - Stub method',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tournament-stub-v5/POST_createTournamentCode',
  },
  operationId: 'tournament-stub-v5.createTournamentCode',
  request: {
    query: z.object({
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'count',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description: 'The number of codes to create (max 1000)',
          },
          'x-type': 'int',
        }),
      tournamentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'tournamentId',
            in: 'query',
            required: true,
            schema: { type: 'integer', format: 'int64', 'x-type': 'long' },
            description: 'The tournament ID',
          },
          'x-type': 'long',
        }),
    }),
    body: {
      description: 'Metadata for the generated code',
      content: {
        'application/json': {
          schema: TournamentStubV5TournamentCodeParametersV5Schema.openapi({
            'x-type': 'TournamentCodeParametersV5',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(z.string().openapi({ 'x-type': 'string' }))
            .openapi({ 'x-type': 'List[string]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolTournamentStubV5CodesTournamentCodeRoute = createRoute({
  method: 'get',
  path: '/lol/tournament-stub/v5/codes/{tournamentCode}',
  tags: ['tournament-stub-v5'],
  summary: 'Returns the tournament code DTO associated with a tournament code string - Stub Method',
  description:
    'Returns the tournament code DTO associated with a tournament code string - Stub Method',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tournament-stub-v5/GET_getTournamentCode',
  },
  operationId: 'tournament-stub-v5.getTournamentCode',
  request: {
    params: z.object({
      tournamentCode: z
        .string()
        .openapi({
          param: {
            name: 'tournamentCode',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
            description: 'The tournament code string.',
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: TournamentStubV5TournamentCodeV5DTOSchema.openapi({
            'x-type': 'TournamentCodeV5DTO',
          }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolTournamentStubV5LobbyEventsByCodeTournamentCodeRoute = createRoute({
  method: 'get',
  path: '/lol/tournament-stub/v5/lobby-events/by-code/{tournamentCode}',
  tags: ['tournament-stub-v5'],
  summary: 'Gets a list of lobby events by tournament code - Stub method',
  description: 'Gets a list of lobby events by tournament code - Stub method',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tournament-stub-v5/GET_getLobbyEventsByCode',
  },
  operationId: 'tournament-stub-v5.getLobbyEventsByCode',
  request: {
    params: z.object({
      tournamentCode: z
        .string()
        .openapi({
          param: {
            name: 'tournamentCode',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
            description: 'The short code to look up lobby events for',
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: TournamentStubV5LobbyEventV5DTOWrapperSchema.openapi({
            'x-type': 'LobbyEventV5DTOWrapper',
          }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const postLolTournamentStubV5ProvidersRoute = createRoute({
  method: 'post',
  path: '/lol/tournament-stub/v5/providers',
  tags: ['tournament-stub-v5'],
  summary: 'Creates a tournament provider and returns its ID - Stub method',
  description:
    'Creates a tournament provider and returns its ID - Stub method\n## Implementation Notes\nProviders will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tournament-stub-v5/POST_registerProviderData',
  },
  operationId: 'tournament-stub-v5.registerProviderData',
  request: {
    body: {
      description: 'The provider definition.',
      content: {
        'application/json': {
          schema: TournamentStubV5ProviderRegistrationParametersV5Schema.openapi({
            'x-type': 'ProviderRegistrationParametersV5',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.int32().openapi({ 'x-type': 'int' }) } },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const postLolTournamentStubV5TournamentsRoute = createRoute({
  method: 'post',
  path: '/lol/tournament-stub/v5/tournaments',
  tags: ['tournament-stub-v5'],
  summary: 'Creates a tournament and returns its ID - Stub method',
  description: 'Creates a tournament and returns its ID - Stub method',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tournament-stub-v5/POST_registerTournament',
  },
  operationId: 'tournament-stub-v5.registerTournament',
  request: {
    body: {
      description: 'The tournament definition.',
      content: {
        'application/json': {
          schema: TournamentStubV5TournamentRegistrationParametersV5Schema.openapi({
            'x-type': 'TournamentRegistrationParametersV5',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.int32().openapi({ 'x-type': 'int' }) } },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const postLolTournamentV5CodesRoute = createRoute({
  method: 'post',
  path: '/lol/tournament/v5/codes',
  tags: ['tournament-v5'],
  summary: 'Create a tournament code for the given tournament.',
  description: 'Create a tournament code for the given tournament.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tournament-v5/POST_createTournamentCode',
  },
  operationId: 'tournament-v5.createTournamentCode',
  request: {
    query: z.object({
      tournamentId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'tournamentId',
            in: 'query',
            required: true,
            schema: { type: 'integer', format: 'int64', 'x-type': 'long' },
            description: 'The tournament ID',
          },
          'x-type': 'long',
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'count',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description: 'The number of codes to create (max 1000)',
          },
          'x-type': 'int',
        }),
    }),
    body: {
      description: 'Metadata for the generated code',
      content: {
        'application/json': {
          schema: TournamentV5TournamentCodeParametersV5Schema.openapi({
            'x-type': 'TournamentCodeParametersV5',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(z.string().openapi({ 'x-type': 'string' }))
            .openapi({ 'x-type': 'List[string]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolTournamentV5CodesTournamentCodeRoute = createRoute({
  method: 'get',
  path: '/lol/tournament/v5/codes/{tournamentCode}',
  tags: ['tournament-v5'],
  summary: 'Returns the tournament code DTO associated with a tournament code string.',
  description: 'Returns the tournament code DTO associated with a tournament code string.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tournament-v5/GET_getTournamentCode',
  },
  operationId: 'tournament-v5.getTournamentCode',
  request: {
    params: z.object({
      tournamentCode: z
        .string()
        .openapi({
          param: {
            name: 'tournamentCode',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
            description: 'The tournament code string.',
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: TournamentV5TournamentCodeV5DTOSchema.openapi({
            'x-type': 'TournamentCodeV5DTO',
          }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const putLolTournamentV5CodesTournamentCodeRoute = createRoute({
  method: 'put',
  path: '/lol/tournament/v5/codes/{tournamentCode}',
  tags: ['tournament-v5'],
  summary: 'Update the pick type, map, spectator type, or allowed puuids for a code.',
  description: 'Update the pick type, map, spectator type, or allowed puuids for a code.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tournament-v5/PUT_updateCode',
  },
  operationId: 'tournament-v5.updateCode',
  request: {
    params: z.object({
      tournamentCode: z
        .string()
        .openapi({
          param: {
            name: 'tournamentCode',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
            description: 'The tournament code to update',
          },
          'x-type': 'string',
        }),
    }),
    body: {
      description: 'The fields to update',
      content: {
        'application/json': {
          schema: TournamentV5TournamentCodeUpdateParametersV5Schema.openapi({
            'x-type': 'TournamentCodeUpdateParametersV5',
          }),
        },
      },
    },
  },
  responses: {
    200: { description: 'Success' },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolTournamentV5GamesByCodeTournamentCodeRoute = createRoute({
  method: 'get',
  path: '/lol/tournament/v5/games/by-code/{tournamentCode}',
  tags: ['tournament-v5'],
  summary: 'Get games details',
  description:
    "Get games details\n## Implementation Notes\nAdditional endpoint to get tournament games. From this endpoint, you are able to get participants PUUID (the callback doesn't contain this info).\n\nYou can also use it to check if the game was recorded and validate callbacks. If the endpoint returns the game, it means a callback was attempted.\n\nThis will only work for tournament codes created after November 10, 2023.",
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tournament-v5/GET_getGames',
  },
  operationId: 'tournament-v5.getGames',
  request: {
    params: z.object({
      tournamentCode: z
        .string()
        .openapi({
          param: {
            name: 'tournamentCode',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z
            .array(TournamentV5TournamentGamesV5Schema)
            .openapi({ 'x-type': 'Set[TournamentGamesV5]' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getLolTournamentV5LobbyEventsByCodeTournamentCodeRoute = createRoute({
  method: 'get',
  path: '/lol/tournament/v5/lobby-events/by-code/{tournamentCode}',
  tags: ['tournament-v5'],
  summary: 'Gets a list of lobby events by tournament code.',
  description: 'Gets a list of lobby events by tournament code.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tournament-v5/GET_getLobbyEventsByCode',
  },
  operationId: 'tournament-v5.getLobbyEventsByCode',
  request: {
    params: z.object({
      tournamentCode: z
        .string()
        .openapi({
          param: {
            name: 'tournamentCode',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
            description: 'The short code to look up lobby events for',
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: TournamentV5LobbyEventV5DTOWrapperSchema.openapi({
            'x-type': 'LobbyEventV5DTOWrapper',
          }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const postLolTournamentV5ProvidersRoute = createRoute({
  method: 'post',
  path: '/lol/tournament/v5/providers',
  tags: ['tournament-v5'],
  summary: 'Creates a tournament provider and returns its ID.',
  description:
    'Creates a tournament provider and returns its ID.\n## Implementation Notes\nProviders will need to call this endpoint first to register their callback URL and their API key with the tournament system before any other tournament provider endpoints will work.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tournament-v5/POST_registerProviderData',
  },
  operationId: 'tournament-v5.registerProviderData',
  request: {
    body: {
      description: 'The provider definition.',
      content: {
        'application/json': {
          schema: TournamentV5ProviderRegistrationParametersV5Schema.openapi({
            'x-type': 'ProviderRegistrationParametersV5',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.int32().openapi({ 'x-type': 'int' }) } },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const postLolTournamentV5TournamentsRoute = createRoute({
  method: 'post',
  path: '/lol/tournament/v5/tournaments',
  tags: ['tournament-v5'],
  summary: 'Creates a tournament and returns its ID.',
  description: 'Creates a tournament and returns its ID.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#tournament-v5/POST_registerTournament',
  },
  operationId: 'tournament-v5.registerTournament',
  request: {
    body: {
      description: 'The tournament definition.',
      content: {
        'application/json': {
          schema: TournamentV5TournamentRegistrationParametersV5Schema.openapi({
            'x-type': 'TournamentRegistrationParametersV5',
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: z.int32().openapi({ 'x-type': 'int' }) } },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getValMatchConsoleV1MatchesMatchIdRoute = createRoute({
  method: 'get',
  path: '/val/match/console/v1/matches/{matchId}',
  tags: ['val-console-match-v1'],
  summary: 'Get match by id',
  description: 'Get match by id',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#val-console-match-v1/GET_getMatch',
  },
  operationId: 'val-console-match-v1.getMatch',
  request: {
    params: z.object({
      matchId: z
        .string()
        .openapi({
          param: {
            name: 'matchId',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'String' },
          },
          'x-type': 'String',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ValConsoleMatchV1MatchDtoSchema.openapi({ 'x-type': 'MatchDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getValMatchConsoleV1MatchlistsByPuuidPuuidRoute = createRoute({
  method: 'get',
  path: '/val/match/console/v1/matchlists/by-puuid/{puuid}',
  tags: ['val-console-match-v1'],
  summary: 'Get matchlist for games played by puuid and platform type',
  description: 'Get matchlist for games played by puuid and platform type',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#val-console-match-v1/GET_getMatchlist',
  },
  operationId: 'val-console-match-v1.getMatchlist',
  request: {
    params: z.object({
      puuid: z
        .string()
        .openapi({
          param: {
            name: 'puuid',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'String' },
          },
          'x-type': 'String',
        }),
    }),
    query: z.object({
      platformType: z
        .enum(['playstation', 'xbox'])
        .openapi({
          param: {
            name: 'platformType',
            in: 'query',
            required: true,
            schema: { type: 'string', 'x-type': 'string', enum: ['playstation', 'xbox'] },
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ValConsoleMatchV1MatchlistDtoSchema.openapi({ 'x-type': 'MatchlistDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getValMatchConsoleV1RecentMatchesByQueueQueueRoute = createRoute({
  method: 'get',
  path: '/val/match/console/v1/recent-matches/by-queue/{queue}',
  tags: ['val-console-match-v1'],
  summary: 'Get recent matches',
  description:
    'Get recent matches\n## Implementation Notes\nReturns a list of match ids that have completed in the last 10 minutes for live regions and 12 hours for the esports routing value. NA/LATAM/BR share a match history deployment. As such, recent matches will return a combined list of matches from those three regions. Requests are load balanced so you may see some inconsistencies as matches are added/removed from the list.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#val-console-match-v1/GET_getRecent',
  },
  operationId: 'val-console-match-v1.getRecent',
  request: {
    params: z.object({
      queue: z
        .enum([
          'console_unrated',
          'console_swiftplay',
          'console_hurm',
          'console_deathmatch',
          'console_competitive',
          'console_skirmish2v2',
          'console_skirmishascension1v1',
          'console_skirmishascension2v2',
          'console_abilitydraftarena',
        ])
        .openapi({
          param: {
            name: 'queue',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              'x-type': 'string',
              enum: [
                'console_unrated',
                'console_swiftplay',
                'console_hurm',
                'console_deathmatch',
                'console_competitive',
                'console_skirmish2v2',
                'console_skirmishascension1v1',
                'console_skirmishascension2v2',
                'console_abilitydraftarena',
              ],
            },
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ValConsoleMatchV1RecentMatchesDtoSchema.openapi({ 'x-type': 'RecentMatchesDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getValConsoleRankedV1LeaderboardsByActActIdRoute = createRoute({
  method: 'get',
  path: '/val/console/ranked/v1/leaderboards/by-act/{actId}',
  tags: ['val-console-ranked-v1'],
  summary: 'Get leaderboard for the competitive queue',
  description: 'Get leaderboard for the competitive queue',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#val-console-ranked-v1/GET_getLeaderboard',
  },
  operationId: 'val-console-ranked-v1.getLeaderboard',
  request: {
    params: z.object({
      actId: z
        .string()
        .openapi({
          param: {
            name: 'actId',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
            description: 'Act ids can be found using the val-content API.',
          },
          'x-type': 'string',
        }),
    }),
    query: z.object({
      platformType: z
        .enum(['playstation', 'xbox'])
        .openapi({
          param: {
            name: 'platformType',
            in: 'query',
            required: true,
            schema: { type: 'string', 'x-type': 'string', enum: ['playstation', 'xbox'] },
          },
          'x-type': 'string',
        }),
      startIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'startIndex',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description: 'Defaults to 0.',
          },
          'x-type': 'int',
        }),
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description: 'Defaults to 200. Valid values: 1 to 200.',
          },
          'x-type': 'int',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ValConsoleRankedV1LeaderboardDtoSchema.openapi({ 'x-type': 'LeaderboardDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getValContentV1ContentsRoute = createRoute({
  method: 'get',
  path: '/val/content/v1/contents',
  tags: ['val-content-v1'],
  summary: 'Get content optionally filtered by locale',
  description: 'Get content optionally filtered by locale',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#val-content-v1/GET_getContent',
  },
  operationId: 'val-content-v1.getContent',
  request: {
    query: z.object({
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'locale',
            in: 'query',
            required: false,
            schema: { type: 'string', 'x-type': 'String' },
          },
          'x-type': 'String',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ValContentV1ContentDtoSchema.openapi({ 'x-type': 'ContentDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getValMatchV1MatchesMatchIdRoute = createRoute({
  method: 'get',
  path: '/val/match/v1/matches/{matchId}',
  tags: ['val-match-v1'],
  summary: 'Get match by id',
  description: 'Get match by id',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#val-match-v1/GET_getMatch',
  },
  operationId: 'val-match-v1.getMatch',
  request: {
    params: z.object({
      matchId: z
        .string()
        .openapi({
          param: {
            name: 'matchId',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'String' },
          },
          'x-type': 'String',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': { schema: ValMatchV1MatchDtoSchema.openapi({ 'x-type': 'MatchDto' }) },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getValMatchV1MatchlistsByPuuidPuuidRoute = createRoute({
  method: 'get',
  path: '/val/match/v1/matchlists/by-puuid/{puuid}',
  tags: ['val-match-v1'],
  summary: 'Get matchlist for games played by puuid',
  description: 'Get matchlist for games played by puuid',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#val-match-v1/GET_getMatchlist',
  },
  operationId: 'val-match-v1.getMatchlist',
  request: {
    params: z.object({
      puuid: z
        .string()
        .openapi({
          param: {
            name: 'puuid',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'String' },
          },
          'x-type': 'String',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ValMatchV1MatchlistDtoSchema.openapi({ 'x-type': 'MatchlistDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getValMatchV1RecentMatchesByQueueQueueRoute = createRoute({
  method: 'get',
  path: '/val/match/v1/recent-matches/by-queue/{queue}',
  tags: ['val-match-v1'],
  summary: 'Get recent matches',
  description:
    'Get recent matches\n## Implementation Notes\nReturns a list of match ids that have completed in the last 10 minutes for live regions and 12 hours for the esports routing value. NA/LATAM/BR share a match history deployment. As such, recent matches will return a combined list of matches from those three regions. Requests are load balanced so you may see some inconsistencies as matches are added/removed from the list.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#val-match-v1/GET_getRecent',
  },
  operationId: 'val-match-v1.getRecent',
  request: {
    params: z.object({
      queue: z
        .enum([
          'competitive',
          'unrated',
          'spikerush',
          'tournamentmode',
          'deathmatch',
          'onefa',
          'ggteam',
          'hurm',
          'swiftplay',
          'skirmish2v2',
          'skirmishascension1v1',
          'skirmishascension2v2',
          'test',
          'abilitydraftarena',
        ])
        .openapi({
          param: {
            name: 'queue',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              'x-type': 'string',
              enum: [
                'competitive',
                'unrated',
                'spikerush',
                'tournamentmode',
                'deathmatch',
                'onefa',
                'ggteam',
                'hurm',
                'swiftplay',
                'skirmish2v2',
                'skirmishascension1v1',
                'skirmishascension2v2',
                'test',
                'abilitydraftarena',
              ],
            },
          },
          'x-type': 'string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ValMatchV1RecentMatchesDtoSchema.openapi({ 'x-type': 'RecentMatchesDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getValRankedV1LeaderboardsByActActIdRoute = createRoute({
  method: 'get',
  path: '/val/ranked/v1/leaderboards/by-act/{actId}',
  tags: ['val-ranked-v1'],
  summary: 'Get leaderboard for the competitive queue',
  description: 'Get leaderboard for the competitive queue',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#val-ranked-v1/GET_getLeaderboard',
  },
  operationId: 'val-ranked-v1.getLeaderboard',
  request: {
    params: z.object({
      actId: z
        .string()
        .openapi({
          param: {
            name: 'actId',
            in: 'path',
            required: true,
            schema: { type: 'string', 'x-type': 'string' },
            description: 'Act ids can be found using the val-content API.',
          },
          'x-type': 'string',
        }),
    }),
    query: z.object({
      size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'size',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description: 'Defaults to 200. Valid values: 1 to 200.',
          },
          'x-type': 'int',
        }),
      startIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'startIndex',
            in: 'query',
            required: false,
            schema: { type: 'integer', format: 'int32', 'x-type': 'int' },
            description: 'Defaults to 0.',
          },
          'x-type': 'int',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ValRankedV1LeaderboardDtoSchema.openapi({ 'x-type': 'LeaderboardDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})

export const getValStatusV1PlatformDataRoute = createRoute({
  method: 'get',
  path: '/val/status/v1/platform-data',
  tags: ['val-status-v1'],
  summary: 'Get VALORANT status for the given platform.',
  description: 'Get VALORANT status for the given platform.',
  externalDocs: {
    description: 'Official API Reference',
    url: 'https://developer.riotgames.com/api-methods/#val-status-v1/GET_getPlatformData',
  },
  operationId: 'val-status-v1.getPlatformData',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: ValStatusV1PlatformDataDtoSchema.openapi({ 'x-type': 'PlatformDataDto' }),
        },
      },
    },
    400: { description: 'Bad request' },
    401: { description: 'Unauthorized' },
    403: { description: 'Forbidden' },
    404: { description: 'Data not found' },
    405: { description: 'Method not allowed' },
    415: { description: 'Unsupported media type' },
    429: { description: 'Rate limit exceeded' },
    500: { description: 'Internal server error' },
    502: { description: 'Bad gateway' },
    503: { description: 'Service unavailable' },
    504: { description: 'Gateway timeout' },
  },
})
