import { createRoute, z } from '@hono/zod-openapi'

const LocalizedStringSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#localizedString`.',
      }),
    locale: z.string().exactOptional().openapi({ description: 'The locale string.' }),
    value: z.string().exactOptional().openapi({ description: 'The string value.' }),
  })
  .openapi({ description: 'A localized string resource.', required: [] })
  .openapi('LocalizedString')

const LocalizedStringBundleSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#localizedStringBundle`.',
      }),
    translations: z
      .array(LocalizedStringSchema)
      .exactOptional()
      .openapi({ description: 'The locale strings.' }),
  })
  .openapi({ description: 'A localized string bundle resource.', required: [] })
  .openapi('LocalizedStringBundle')

const AchievementConfigurationDetailSchema = z
  .object({
    description: LocalizedStringBundleSchema.exactOptional().openapi({
      description: 'Localized strings for the achievement description.',
    }),
    iconUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The icon url of this achievement. Writes to this field are ignored.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfigurationDetail`.',
      }),
    name: LocalizedStringBundleSchema.exactOptional().openapi({
      description: 'Localized strings for the achievement name.',
    }),
    pointValue: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Point value for the achievement.' }),
    sortRank: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The sort rank of this achievement. Writes to this field are ignored.',
      }),
  })
  .openapi({ description: 'An achievement configuration detail.', required: [] })
  .openapi('AchievementConfigurationDetail')

const AchievementConfigurationSchema = z
  .object({
    achievementType: z
      .enum(['ACHIEVEMENT_TYPE_UNSPECIFIED', 'STANDARD', 'INCREMENTAL'])
      .exactOptional()
      .openapi({ description: 'The type of the achievement.' }),
    draft: AchievementConfigurationDetailSchema.exactOptional().openapi({
      description: 'The draft data of the achievement.',
    }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the achievement.' }),
    initialState: z
      .enum(['INITIAL_STATE_UNSPECIFIED', 'HIDDEN', 'REVEALED'])
      .exactOptional()
      .openapi({ description: 'The initial state of the achievement.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfiguration`.',
      }),
    published: AchievementConfigurationDetailSchema.exactOptional().openapi({
      description: 'The read-only published data of the achievement.',
    }),
    stepsToUnlock: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Steps to unlock. Only applicable to incremental achievements.' }),
    token: z.string().exactOptional().openapi({ description: 'The token for this resource.' }),
  })
  .openapi({ description: 'An achievement configuration resource.', required: [] })
  .openapi('AchievementConfiguration')

const AchievementConfigurationListResponseSchema = z
  .object({
    items: z
      .array(AchievementConfigurationSchema)
      .exactOptional()
      .openapi({ description: 'The achievement configurations.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#achievementConfigurationListResponse`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pagination token for the next page of results.' }),
  })
  .openapi({ description: 'A ListConfigurations response.', required: [] })
  .openapi('AchievementConfigurationListResponse')

const GamesNumberAffixConfigurationSchema = z
  .object({
    few: LocalizedStringBundleSchema.exactOptional().openapi({
      description:
        'When the language requires special treatment of "small" numbers (as with 2, 3, and 4 in Czech; or numbers ending 2, 3, or 4 but not 12, 13, or 14 in Polish).',
    }),
    many: LocalizedStringBundleSchema.exactOptional().openapi({
      description:
        'When the language requires special treatment of "large" numbers (as with numbers ending 11-99 in Maltese).',
    }),
    one: LocalizedStringBundleSchema.exactOptional().openapi({
      description:
        'When the language requires special treatment of numbers like one (as with the number 1 in English and most other languages; in Russian, any number ending in 1 but not ending in 11 is in this class).',
    }),
    other: LocalizedStringBundleSchema.exactOptional().openapi({
      description:
        'When the language does not require special treatment of the given quantity (as with all numbers in Chinese, or 42 in English).',
    }),
    two: LocalizedStringBundleSchema.exactOptional().openapi({
      description:
        'When the language requires special treatment of numbers like two (as with 2 in Welsh, or 102 in Slovenian).',
    }),
    zero: LocalizedStringBundleSchema.exactOptional().openapi({
      description: 'When the language requires special treatment of the number 0 (as in Arabic).',
    }),
  })
  .openapi({ description: 'A number affix resource.', required: [] })
  .openapi('GamesNumberAffixConfiguration')

const GamesNumberFormatConfigurationSchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The curreny code string. Only used for CURRENCY format type.' }),
    numDecimalPlaces: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of decimal places for number. Only used for NUMERIC format type.',
      }),
    numberFormatType: z
      .enum(['NUMBER_FORMAT_TYPE_UNSPECIFIED', 'NUMERIC', 'TIME_DURATION', 'CURRENCY'])
      .exactOptional()
      .openapi({ description: 'The formatting for the number.' }),
    suffix: GamesNumberAffixConfigurationSchema.exactOptional().openapi({
      description:
        'An optional suffix for the NUMERIC format type. These strings follow the same plural rules as all Android string resources.',
    }),
  })
  .openapi({ description: 'A number format resource.', required: [] })
  .openapi('GamesNumberFormatConfiguration')

const LeaderboardConfigurationDetailSchema = z
  .object({
    iconUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The icon url of this leaderboard. Writes to this field are ignored.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationDetail`.',
      }),
    name: LocalizedStringBundleSchema.exactOptional().openapi({
      description: 'Localized strings for the leaderboard name.',
    }),
    scoreFormat: GamesNumberFormatConfigurationSchema.exactOptional().openapi({
      description: 'The score formatting for the leaderboard.',
    }),
    sortRank: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The sort rank of this leaderboard. Writes to this field are ignored.',
      }),
  })
  .openapi({ description: 'A leaderboard configuration detail.', required: [] })
  .openapi('LeaderboardConfigurationDetail')

const LeaderboardConfigurationSchema = z
  .object({
    draft: LeaderboardConfigurationDetailSchema.exactOptional().openapi({
      description: 'The draft data of the leaderboard.',
    }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the leaderboard.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfiguration`.',
      }),
    published: LeaderboardConfigurationDetailSchema.exactOptional().openapi({
      description: 'The read-only published data of the leaderboard.',
    }),
    scoreMax: z
      .string()
      .exactOptional()
      .openapi({ description: 'Maximum score that can be posted to this leaderboard.' }),
    scoreMin: z
      .string()
      .exactOptional()
      .openapi({ description: 'Minimum score that can be posted to this leaderboard.' }),
    scoreOrder: z
      .enum(['SCORE_ORDER_UNSPECIFIED', 'LARGER_IS_BETTER', 'SMALLER_IS_BETTER'])
      .exactOptional(),
    token: z.string().exactOptional().openapi({ description: 'The token for this resource.' }),
  })
  .openapi({ description: 'An leaderboard configuration resource.', required: [] })
  .openapi('LeaderboardConfiguration')

const LeaderboardConfigurationListResponseSchema = z
  .object({
    items: z
      .array(LeaderboardConfigurationSchema)
      .exactOptional()
      .openapi({ description: 'The leaderboard configurations.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Uniquely identifies the type of this resource. Value is always the fixed string `gamesConfiguration#leaderboardConfigurationListResponse`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The pagination token for the next page of results.' }),
  })
  .openapi({ description: 'A ListConfigurations response.', required: [] })
  .openapi('LeaderboardConfigurationListResponse')

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
        'https://www.googleapis.com/auth/androidpublisher':
          'View and manage your Google Play Developer account',
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
        'https://www.googleapis.com/auth/androidpublisher':
          'View and manage your Google Play Developer account',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getGamesV1configurationAchievementsAchievementIdRoute = createRoute({
  method: 'get',
  path: '/games/v1configuration/achievements/{achievementId}',
  tags: ['achievementConfigurations'],
  description: 'Retrieves the metadata of the achievement configuration with the given ID.',
  operationId: 'gamesConfiguration.achievementConfigurations.get',
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
      content: { 'application/json': { schema: AchievementConfigurationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const putGamesV1configurationAchievementsAchievementIdRoute = createRoute({
  method: 'put',
  path: '/games/v1configuration/achievements/{achievementId}',
  tags: ['achievementConfigurations'],
  description: 'Update the metadata of the achievement configuration with the given ID.',
  operationId: 'gamesConfiguration.achievementConfigurations.update',
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
    body: { content: { 'application/json': { schema: AchievementConfigurationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AchievementConfigurationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const deleteGamesV1configurationAchievementsAchievementIdRoute = createRoute({
  method: 'delete',
  path: '/games/v1configuration/achievements/{achievementId}',
  tags: ['achievementConfigurations'],
  description: 'Delete the achievement configuration with the given ID.',
  operationId: 'gamesConfiguration.achievementConfigurations.delete',
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
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const getGamesV1configurationApplicationsApplicationIdAchievementsRoute = createRoute({
  method: 'get',
  path: '/games/v1configuration/applications/{applicationId}/achievements',
  tags: ['achievementConfigurations'],
  description: 'Returns a list of the achievement configurations in this application.',
  operationId: 'gamesConfiguration.achievementConfigurations.list',
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
              'The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`.',
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
      content: { 'application/json': { schema: AchievementConfigurationListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const postGamesV1configurationApplicationsApplicationIdAchievementsRoute = createRoute({
  method: 'post',
  path: '/games/v1configuration/applications/{applicationId}/achievements',
  tags: ['achievementConfigurations'],
  description: 'Insert a new achievement configuration in this application.',
  operationId: 'gamesConfiguration.achievementConfigurations.insert',
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
    }),
    body: { content: { 'application/json': { schema: AchievementConfigurationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AchievementConfigurationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const getGamesV1configurationApplicationsApplicationIdLeaderboardsRoute = createRoute({
  method: 'get',
  path: '/games/v1configuration/applications/{applicationId}/leaderboards',
  tags: ['leaderboardConfigurations'],
  description: 'Returns a list of the leaderboard configurations in this application.',
  operationId: 'gamesConfiguration.leaderboardConfigurations.list',
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
              'The maximum number of resource configurations to return in the response, used for paging. For any response, the actual number of resources returned may be less than the specified `maxResults`.',
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
      content: { 'application/json': { schema: LeaderboardConfigurationListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const postGamesV1configurationApplicationsApplicationIdLeaderboardsRoute = createRoute({
  method: 'post',
  path: '/games/v1configuration/applications/{applicationId}/leaderboards',
  tags: ['leaderboardConfigurations'],
  description: 'Insert a new leaderboard configuration in this application.',
  operationId: 'gamesConfiguration.leaderboardConfigurations.insert',
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
    }),
    body: { content: { 'application/json': { schema: LeaderboardConfigurationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LeaderboardConfigurationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const getGamesV1configurationLeaderboardsLeaderboardIdRoute = createRoute({
  method: 'get',
  path: '/games/v1configuration/leaderboards/{leaderboardId}',
  tags: ['leaderboardConfigurations'],
  description: 'Retrieves the metadata of the leaderboard configuration with the given ID.',
  operationId: 'gamesConfiguration.leaderboardConfigurations.get',
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
      content: { 'application/json': { schema: LeaderboardConfigurationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const putGamesV1configurationLeaderboardsLeaderboardIdRoute = createRoute({
  method: 'put',
  path: '/games/v1configuration/leaderboards/{leaderboardId}',
  tags: ['leaderboardConfigurations'],
  description: 'Update the metadata of the leaderboard configuration with the given ID.',
  operationId: 'gamesConfiguration.leaderboardConfigurations.update',
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
    body: { content: { 'application/json': { schema: LeaderboardConfigurationSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LeaderboardConfigurationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})

export const deleteGamesV1configurationLeaderboardsLeaderboardIdRoute = createRoute({
  method: 'delete',
  path: '/games/v1configuration/leaderboards/{leaderboardId}',
  tags: ['leaderboardConfigurations'],
  description: 'Delete the leaderboard configuration with the given ID.',
  operationId: 'gamesConfiguration.leaderboardConfigurations.delete',
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
      Oauth2: ['https://www.googleapis.com/auth/androidpublisher'],
      Oauth2c: ['https://www.googleapis.com/auth/androidpublisher'],
    },
  ],
})
