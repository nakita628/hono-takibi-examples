import { createRoute, z } from '@hono/zod-openapi'

const AchievementResetResponseSchema = z
  .object({
    currentState: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current state of the achievement. This is the same as the initial state of the achievement. Possible values are: - "`HIDDEN`"- Achievement is hidden. - "`REVEALED`" - Achievement is revealed. - "`UNLOCKED`" - Achievement is unlocked. ',
      }),
    definitionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of an achievement for which player state has been updated.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetResponse`.',
      }),
    updateOccurred: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Flag to indicate if the requested update actually occurred.' }),
  })
  .openapi({ description: 'An achievement reset response.', required: [] })
  .openapi('AchievementResetResponse')

const AchievementResetAllResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetAllResponse`.',
      }),
    results: z
      .array(AchievementResetResponseSchema)
      .exactOptional()
      .openapi({ description: 'The achievement reset results.' }),
  })
  .openapi({ description: 'Achievement reset all response.', required: [] })
  .openapi('AchievementResetAllResponse')

const AchievementResetMultipleForAllRequestSchema = z
  .object({
    achievement_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The IDs of achievements to reset.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#achievementResetMultipleForAllRequest`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AchievementResetMultipleForAllRequest')

const EventsResetMultipleForAllRequestSchema = z
  .object({
    event_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The IDs of events to reset.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#eventsResetMultipleForAllRequest`.',
      }),
  })
  .openapi({ description: 'Multiple events reset all request.', required: [] })
  .openapi('EventsResetMultipleForAllRequest')

const GamesPlayerLevelResourceSchema = z
  .object({
    level: z.int32().exactOptional().openapi({ description: 'The level for the user.' }),
    maxExperiencePoints: z
      .string()
      .exactOptional()
      .openapi({ description: 'The maximum experience points for this level.' }),
    minExperiencePoints: z
      .string()
      .exactOptional()
      .openapi({ description: 'The minimum experience points for this level.' }),
  })
  .openapi({ description: "1P/3P metadata about a user's level.", required: [] })
  .openapi('GamesPlayerLevelResource')

const GamesPlayerExperienceInfoResourceSchema = z
  .object({
    currentExperiencePoints: z
      .string()
      .exactOptional()
      .openapi({ description: 'The current number of experience points for the player.' }),
    currentLevel: GamesPlayerLevelResourceSchema.exactOptional().openapi({
      description: 'The current level of the player.',
    }),
    lastLevelUpTimestampMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The timestamp when the player was leveled up, in millis since Unix epoch UTC.',
      }),
    nextLevel: GamesPlayerLevelResourceSchema.exactOptional().openapi({
      description:
        'The next level of the player. If the current level is the maximum level, this should be same as the current level.',
    }),
  })
  .openapi({ description: "1P/3P metadata about the player's experience.", required: [] })
  .openapi('GamesPlayerExperienceInfoResource')

const ProfileSettingsSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#profileSettings`.',
      }),
    profileVisible: z.boolean().exactOptional(),
  })
  .openapi({ description: 'Profile settings', required: [] })
  .openapi('ProfileSettings')

const PlayerSchema = z
  .object({
    avatarImageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The base URL for the image that represents the player.' }),
    bannerUrlLandscape: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url to the landscape mode player banner image.' }),
    bannerUrlPortrait: z
      .string()
      .exactOptional()
      .openapi({ description: 'The url to the portrait mode player banner image.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name to display for the player.' }),
    experienceInfo: GamesPlayerExperienceInfoResourceSchema.exactOptional().openapi({
      description: 'An object to represent Play Game experience information for the player.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#player`.',
      }),
    name: z
      .object({
        familyName: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The family name of this player. In some places, this is known as the last name.',
          }),
        givenName: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The given name of this player. In some places, this is known as the first name.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          "An object representation of the individual components of the player's name. For some players, these fields may not be present.",
        required: [],
      }),
    originalPlayerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The player ID that was used for this player the first time they signed into the game in question. This is only populated for calls to player.get for the requesting player, only if the player ID has subsequently changed, and only to clients that support remapping player IDs.',
      }),
    playerId: z.string().exactOptional().openapi({ description: 'The ID of the player.' }),
    profileSettings: ProfileSettingsSchema.exactOptional().openapi({
      description:
        "The player's profile settings. Controls whether or not the player's profile is visible to other players.",
    }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: "The player's title rewarded for their game activities." }),
  })
  .openapi({ description: 'A Player resource.', required: [] })
  .openapi('Player')

const HiddenPlayerSchema = z
  .object({
    hiddenTimeMillis: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time this player was hidden.', readOnly: true }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#hiddenPlayer`.',
        readOnly: true,
      }),
    player: PlayerSchema.exactOptional().openapi({
      description: 'Output only. The player information.',
      readOnly: true,
    }),
  })
  .openapi({ description: 'The HiddenPlayer resource.', required: [] })
  .openapi('HiddenPlayer')

const HiddenPlayerListSchema = z
  .object({
    items: z.array(HiddenPlayerSchema).exactOptional().openapi({ description: 'The players.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#hiddenPlayerList`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pagination token for the next page of results.' }),
  })
  .openapi({ description: 'A list of hidden players.', required: [] })
  .openapi('HiddenPlayerList')

const PlayerScoreResetResponseSchema = z
  .object({
    definitionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of an leaderboard for which player state has been updated.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#playerScoreResetResponse`.',
      }),
    resetScoreTimeSpans: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The time spans of the updated score. Possible values are: - "`ALL_TIME`" - The score is an all-time score. - "`WEEKLY`" - The score is a weekly score. - "`DAILY`" - The score is a daily score. ',
      }),
  })
  .openapi({ description: 'A list of reset leaderboard entry resources.', required: [] })
  .openapi('PlayerScoreResetResponse')

const PlayerScoreResetAllResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#playerScoreResetAllResponse`.',
      }),
    results: z
      .array(PlayerScoreResetResponseSchema)
      .exactOptional()
      .openapi({ description: 'The leaderboard reset results.' }),
  })
  .openapi({ description: 'A list of leaderboard reset resources.', required: [] })
  .openapi('PlayerScoreResetAllResponse')

const ScoresResetMultipleForAllRequestSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesManagement#scoresResetMultipleForAllRequest`.',
      }),
    leaderboard_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The IDs of leaderboards to reset.' }),
  })
  .openapi({ required: [] })
  .openapi('ScoresResetMultipleForAllRequest')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/games':
          'Create, edit, and delete your Google Play Games activity',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/games':
          'Create, edit, and delete your Google Play Games activity',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postGamesV1managementAchievementsResetRoute = createRoute({
  method: 'post',
  path: '/games/v1management/achievements/reset',
  tags: ['achievements'],
  description:
    'Resets all achievements for the currently authenticated player for your application. This method is only accessible to whitelisted tester accounts for your application.',
  operationId: 'gamesManagement.achievements.resetAll',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AchievementResetAllResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1managementAchievementsResetAllForAllPlayersRoute = createRoute({
  method: 'post',
  path: '/games/v1management/achievements/resetAllForAllPlayers',
  tags: ['achievements'],
  description:
    'Resets all draft achievements for all players. This method is only available to user accounts for your developer console.',
  operationId: 'gamesManagement.achievements.resetAllForAllPlayers',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1managementAchievementsResetMultipleForAllPlayersRoute = createRoute({
  method: 'post',
  path: '/games/v1management/achievements/resetMultipleForAllPlayers',
  tags: ['achievements'],
  description:
    'Resets achievements with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft achievements may be reset.',
  operationId: 'gamesManagement.achievements.resetMultipleForAllPlayers',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: {
      content: { 'application/json': { schema: AchievementResetMultipleForAllRequestSchema } },
    },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1managementAchievementsAchievementIdResetRoute = createRoute({
  method: 'post',
  path: '/games/v1management/achievements/{achievementId}/reset',
  tags: ['achievements'],
  description:
    'Resets the achievement with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.',
  operationId: 'gamesManagement.achievements.reset',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      achievementId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the achievement used by this method.',
            in: 'path',
            name: 'achievementId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AchievementResetResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1managementAchievementsAchievementIdResetForAllPlayersRoute = createRoute({
  method: 'post',
  path: '/games/v1management/achievements/{achievementId}/resetForAllPlayers',
  tags: ['achievements'],
  description:
    'Resets the achievement with the given ID for all players. This method is only available to user accounts for your developer console. Only draft achievements can be reset.',
  operationId: 'gamesManagement.achievements.resetForAllPlayers',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      achievementId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the achievement used by this method.',
            in: 'path',
            name: 'achievementId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const getGamesV1managementApplicationsApplicationIdPlayersHiddenRoute = createRoute({
  method: 'get',
  path: '/games/v1management/applications/{applicationId}/players/hidden',
  tags: ['applications'],
  description:
    'Get the list of players hidden from the given application. This method is only available to user accounts for your developer console.',
  operationId: 'gamesManagement.applications.listHidden',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of player resources to return in the response, used for paging. For any response, the actual number of player resources returned may be less than the specified `maxResults`.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The token returned by the previous request.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      applicationId: z
        .string()
        .openapi({
          param: {
            description: 'The application ID from the Google Play developer console.',
            in: 'path',
            name: 'applicationId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HiddenPlayerListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRoute = createRoute(
  {
    method: 'post',
    path: '/games/v1management/applications/{applicationId}/players/hidden/{playerId}',
    tags: ['players'],
    description:
      "Hide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.",
    operationId: 'gamesManagement.players.hide',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
        alt: AltParamsSchema,
        callback: CallbackParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        upload_protocol: UploadProtocolParamsSchema,
        uploadType: UploadTypeParamsSchema,
      }),
      params: z.object({
        applicationId: z
          .string()
          .openapi({
            param: {
              description: 'The application ID from the Google Play developer console.',
              in: 'path',
              name: 'applicationId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        playerId: z
          .string()
          .openapi({
            param: {
              description:
                "A player ID. A value of `me` may be used in place of the authenticated player's ID.",
              in: 'path',
              name: 'playerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/games'],
        Oauth2c: ['https://www.googleapis.com/auth/games'],
      },
    ],
  },
)

export const deleteGamesV1managementApplicationsApplicationIdPlayersHiddenPlayerIdRoute =
  createRoute({
    method: 'delete',
    path: '/games/v1management/applications/{applicationId}/players/hidden/{playerId}',
    tags: ['players'],
    description:
      "Unhide the given player's leaderboard scores from the given application. This method is only available to user accounts for your developer console.",
    operationId: 'gamesManagement.players.unhide',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
        alt: AltParamsSchema,
        callback: CallbackParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        upload_protocol: UploadProtocolParamsSchema,
        uploadType: UploadTypeParamsSchema,
      }),
      params: z.object({
        applicationId: z
          .string()
          .openapi({
            param: {
              description: 'The application ID from the Google Play developer console.',
              in: 'path',
              name: 'applicationId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        playerId: z
          .string()
          .openapi({
            param: {
              description:
                "A player ID. A value of `me` may be used in place of the authenticated player's ID.",
              in: 'path',
              name: 'playerId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/games'],
        Oauth2c: ['https://www.googleapis.com/auth/games'],
      },
    ],
  })

export const postGamesV1managementEventsResetRoute = createRoute({
  method: 'post',
  path: '/games/v1management/events/reset',
  tags: ['events'],
  description:
    'Resets all player progress on all events for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.',
  operationId: 'gamesManagement.events.resetAll',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1managementEventsResetAllForAllPlayersRoute = createRoute({
  method: 'post',
  path: '/games/v1management/events/resetAllForAllPlayers',
  tags: ['events'],
  description:
    'Resets all draft events for all players. This method is only available to user accounts for your developer console.',
  operationId: 'gamesManagement.events.resetAllForAllPlayers',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1managementEventsResetMultipleForAllPlayersRoute = createRoute({
  method: 'post',
  path: '/games/v1management/events/resetMultipleForAllPlayers',
  tags: ['events'],
  description:
    'Resets events with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft events may be reset.',
  operationId: 'gamesManagement.events.resetMultipleForAllPlayers',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: EventsResetMultipleForAllRequestSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1managementEventsEventIdResetRoute = createRoute({
  method: 'post',
  path: '/games/v1management/events/{eventId}/reset',
  tags: ['events'],
  description:
    'Resets all player progress on the event with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.',
  operationId: 'gamesManagement.events.reset',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      eventId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the event.',
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1managementEventsEventIdResetForAllPlayersRoute = createRoute({
  method: 'post',
  path: '/games/v1management/events/{eventId}/resetForAllPlayers',
  tags: ['events'],
  description:
    'Resets the event with the given ID for all players. This method is only available to user accounts for your developer console. Only draft events can be reset.',
  operationId: 'gamesManagement.events.resetForAllPlayers',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      eventId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the event.',
            in: 'path',
            name: 'eventId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1managementLeaderboardsLeaderboardIdScoresResetRoute = createRoute({
  method: 'post',
  path: '/games/v1management/leaderboards/{leaderboardId}/scores/reset',
  tags: ['scores'],
  description:
    'Resets scores for the leaderboard with the given ID for the currently authenticated player. This method is only accessible to whitelisted tester accounts for your application.',
  operationId: 'gamesManagement.scores.reset',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      leaderboardId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the leaderboard.',
            in: 'path',
            name: 'leaderboardId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlayerScoreResetResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1managementLeaderboardsLeaderboardIdScoresResetForAllPlayersRoute =
  createRoute({
    method: 'post',
    path: '/games/v1management/leaderboards/{leaderboardId}/scores/resetForAllPlayers',
    tags: ['scores'],
    description:
      'Resets scores for the leaderboard with the given ID for all players. This method is only available to user accounts for your developer console. Only draft leaderboards can be reset.',
    operationId: 'gamesManagement.scores.resetForAllPlayers',
    request: {
      query: z.object({
        '$.xgafv': XgafvParamsSchema,
        access_token: AccessTokenParamsSchema,
        alt: AltParamsSchema,
        callback: CallbackParamsSchema,
        fields: FieldsParamsSchema,
        key: KeyParamsSchema,
        oauth_token: OauthTokenParamsSchema,
        prettyPrint: PrettyPrintParamsSchema,
        quotaUser: QuotaUserParamsSchema,
        upload_protocol: UploadProtocolParamsSchema,
        uploadType: UploadTypeParamsSchema,
      }),
      params: z.object({
        leaderboardId: z
          .string()
          .openapi({
            param: {
              description: 'The ID of the leaderboard.',
              in: 'path',
              name: 'leaderboardId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: { 200: { description: 'Successful response' } },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/games'],
        Oauth2c: ['https://www.googleapis.com/auth/games'],
      },
    ],
  })

export const postGamesV1managementScoresResetRoute = createRoute({
  method: 'post',
  path: '/games/v1management/scores/reset',
  tags: ['scores'],
  description:
    'Resets all scores for all leaderboards for the currently authenticated players. This method is only accessible to whitelisted tester accounts for your application.',
  operationId: 'gamesManagement.scores.resetAll',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PlayerScoreResetAllResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1managementScoresResetAllForAllPlayersRoute = createRoute({
  method: 'post',
  path: '/games/v1management/scores/resetAllForAllPlayers',
  tags: ['scores'],
  description:
    'Resets scores for all draft leaderboards for all players. This method is only available to user accounts for your developer console.',
  operationId: 'gamesManagement.scores.resetAllForAllPlayers',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})

export const postGamesV1managementScoresResetMultipleForAllPlayersRoute = createRoute({
  method: 'post',
  path: '/games/v1management/scores/resetMultipleForAllPlayers',
  tags: ['scores'],
  description:
    'Resets scores for the leaderboards with the given IDs for all players. This method is only available to user accounts for your developer console. Only draft leaderboards may be reset.',
  operationId: 'gamesManagement.scores.resetMultipleForAllPlayers',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: ScoresResetMultipleForAllRequestSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/games'],
      Oauth2c: ['https://www.googleapis.com/auth/games'],
    },
  ],
})
