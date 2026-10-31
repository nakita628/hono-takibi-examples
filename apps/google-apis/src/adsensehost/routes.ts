import { createRoute, z } from '@hono/zod-openapi'

const AccountSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Unique identifier of this account.' }),
    kind: z
      .string()
      .default('adsensehost#account')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is, in this case adsensehost#account.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of this account.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Approval status of this account. One of: PENDING, APPROVED, DISABLED.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Account')

const AccountsSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'ETag of this response for caching purposes.' }),
    items: z
      .array(AccountSchema)
      .exactOptional()
      .openapi({ description: 'The accounts returned in this list response.' }),
    kind: z
      .string()
      .default('adsensehost#accounts')
      .exactOptional()
      .openapi({ description: 'Kind of list this is, in this case adsensehost#accounts.' }),
  })
  .openapi({ required: [] })
  .openapi('Accounts')

const AdClientSchema = z
  .object({
    arcOptIn: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this ad client is opted in to ARC.' }),
    id: z.string().exactOptional().openapi({ description: 'Unique identifier of this ad client.' }),
    kind: z
      .string()
      .default('adsensehost#adClient')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is, in this case adsensehost#adClient.' }),
    productCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "This ad client's product code, which corresponds to the PRODUCT_CODE report dimension.",
      }),
    supportsReporting: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this ad client supports being reported on.' }),
  })
  .openapi({ required: [] })
  .openapi('AdClient')

const AdClientsSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'ETag of this response for caching purposes.' }),
    items: z
      .array(AdClientSchema)
      .exactOptional()
      .openapi({ description: 'The ad clients returned in this list response.' }),
    kind: z
      .string()
      .default('adsensehost#adClients')
      .exactOptional()
      .openapi({ description: 'Kind of list this is, in this case adsensehost#adClients.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Continuation token used to page through ad clients. To retrieve the next page of results, set the next request\'s "pageToken" value to this.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AdClients')

const AdCodeSchema = z
  .object({
    adCode: z.string().exactOptional().openapi({ description: 'The ad code snippet.' }),
    kind: z
      .string()
      .default('adsensehost#adCode')
      .exactOptional()
      .openapi({ description: 'Kind this is, in this case adsensehost#adCode.' }),
  })
  .openapi({ required: [] })
  .openapi('AdCode')

const AdStyleSchema = z
  .object({
    colors: z
      .object({
        background: z
          .string()
          .exactOptional()
          .openapi({ description: 'The color of the ad background.' }),
        border: z.string().exactOptional().openapi({ description: 'The color of the ad border.' }),
        text: z.string().exactOptional().openapi({ description: 'The color of the ad text.' }),
        title: z.string().exactOptional().openapi({ description: 'The color of the ad title.' }),
        url: z.string().exactOptional().openapi({ description: 'The color of the ad url.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'The colors included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.',
        required: [],
      }),
    corners: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The style of the corners in the ad (deprecated: never populated, ignored).',
      }),
    font: z
      .object({
        family: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The family of the font. Possible values are: ACCOUNT_DEFAULT_FAMILY, ADSENSE_DEFAULT_FAMILY, ARIAL, TIMES and VERDANA.',
          }),
        size: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The size of the font. Possible values are: ACCOUNT_DEFAULT_SIZE, ADSENSE_DEFAULT_SIZE, SMALL, MEDIUM and LARGE.',
          }),
      })
      .exactOptional()
      .openapi({ description: 'The font which is included in the style.', required: [] }),
    kind: z
      .string()
      .default('adsensehost#adStyle')
      .exactOptional()
      .openapi({ description: 'Kind this is, in this case adsensehost#adStyle.' }),
  })
  .openapi({ required: [] })
  .openapi('AdStyle')

const AdUnitSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identity code of this ad unit, not necessarily unique across ad clients.',
      }),
    contentAdsSettings: z
      .object({
        backupOption: z
          .object({
            color: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Color to use when type is set to COLOR. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.',
              }),
            type: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Type of the backup option. Possible values are BLANK, COLOR and URL.',
              }),
            url: z
              .string()
              .exactOptional()
              .openapi({ description: 'URL to use when type is set to URL.' }),
          })
          .exactOptional()
          .openapi({
            description: 'The backup option to be used in instances where no ad is available.',
            required: [],
          }),
        size: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Size of this ad unit. Size values are in the form SIZE_{width}_{height}.',
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Type of this ad unit. Possible values are TEXT, TEXT_IMAGE, IMAGE and LINK.',
          }),
      })
      .exactOptional()
      .openapi({
        description:
          'Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated).',
        required: [],
      }),
    customStyle: AdStyleSchema.exactOptional().openapi({
      description: 'Custom style information specific to this ad unit.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.',
      }),
    kind: z
      .string()
      .default('adsensehost#adUnit')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is, in this case adsensehost#adUnit.' }),
    mobileContentAdsSettings: z
      .object({
        markupLanguage: z
          .string()
          .exactOptional()
          .openapi({ description: 'The markup language to use for this ad unit.' }),
        scriptingLanguage: z
          .string()
          .exactOptional()
          .openapi({ description: 'The scripting language to use for this ad unit.' }),
        size: z.string().exactOptional().openapi({ description: 'Size of this ad unit.' }),
        type: z.string().exactOptional().openapi({ description: 'Type of this ad unit.' }),
      })
      .exactOptional()
      .openapi({
        description: 'Settings specific to WAP mobile content ads (AFMC - deprecated).',
        required: [],
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of this ad unit.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Status of this ad unit. Possible values are:\nNEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.\n\nACTIVE: Indicates that there has been activity on this ad unit in the last seven days.\n\nINACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AdUnit')

const AdUnitsSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'ETag of this response for caching purposes.' }),
    items: z
      .array(AdUnitSchema)
      .exactOptional()
      .openapi({ description: 'The ad units returned in this list response.' }),
    kind: z
      .string()
      .default('adsensehost#adUnits')
      .exactOptional()
      .openapi({ description: 'Kind of list this is, in this case adsensehost#adUnits.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Continuation token used to page through ad units. To retrieve the next page of results, set the next request\'s "pageToken" value to this.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AdUnits')

const AssociationSessionSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Hosted account id of the associated publisher after association. Present if status is ACCEPTED.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of this association session.' }),
    kind: z
      .string()
      .default('adsensehost#associationSession')
      .exactOptional()
      .openapi({
        description: 'Kind of resource this is, in this case adsensehost#associationSession.',
      }),
    productCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The products to associate with the user. Options: AFC, AFG, AFV, AFS (deprecated), AFMC (deprecated)',
      }),
    redirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Redirect URL of this association session. Used to redirect users into the AdSense association flow.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Status of the completed association, available once the association callback token has been verified. One of ACCEPTED, REJECTED, or ERROR.',
      }),
    userLocale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The preferred locale of the user themselves when going through the AdSense association flow.',
      }),
    websiteLocale: z
      .string()
      .exactOptional()
      .openapi({ description: "The locale of the user's hosted website." }),
    websiteUrl: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of the user's hosted website." }),
  })
  .openapi({ required: [] })
  .openapi('AssociationSession')

const CustomChannelSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Code of this custom channel, not necessarily unique across ad clients.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.',
      }),
    kind: z
      .string()
      .default('adsensehost#customChannel')
      .exactOptional()
      .openapi({
        description: 'Kind of resource this is, in this case adsensehost#customChannel.',
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of this custom channel.' }),
  })
  .openapi({ required: [] })
  .openapi('CustomChannel')

const CustomChannelsSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'ETag of this response for caching purposes.' }),
    items: z
      .array(CustomChannelSchema)
      .exactOptional()
      .openapi({ description: 'The custom channels returned in this list response.' }),
    kind: z
      .string()
      .default('adsensehost#customChannels')
      .exactOptional()
      .openapi({ description: 'Kind of list this is, in this case adsensehost#customChannels.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Continuation token used to page through custom channels. To retrieve the next page of results, set the next request\'s "pageToken" value to this.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CustomChannels')

const ReportSchema = z
  .object({
    averages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.',
      }),
    headers: z
      .array(
        z
          .object({
            currency: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The currency of this column. Only present if the header type is METRIC_CURRENCY.',
              }),
            name: z.string().exactOptional().openapi({ description: 'The name of the header.' }),
            type: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request.',
      }),
    kind: z
      .string()
      .default('adsensehost#report')
      .exactOptional()
      .openapi({ description: 'Kind this is, in this case adsensehost#report.' }),
    rows: z
      .array(z.array(z.string()))
      .exactOptional()
      .openapi({
        description:
          'The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.',
      }),
    totalMatchedRows: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit.',
      }),
    totals: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.',
      }),
    warnings: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Any warnings associated with generation of the report.' }),
  })
  .openapi({ required: [] })
  .openapi('Report')

const UrlChannelSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.',
      }),
    kind: z
      .string()
      .default('adsensehost#urlChannel')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is, in this case adsensehost#urlChannel.' }),
    urlPattern: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home',
      }),
  })
  .openapi({ required: [] })
  .openapi('UrlChannel')

const UrlChannelsSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'ETag of this response for caching purposes.' }),
    items: z
      .array(UrlChannelSchema)
      .exactOptional()
      .openapi({ description: 'The URL channels returned in this list response.' }),
    kind: z
      .string()
      .default('adsensehost#urlChannels')
      .exactOptional()
      .openapi({ description: 'Kind of list this is, in this case adsensehost#urlChannels.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Continuation token used to page through URL channels. To retrieve the next page of results, set the next request\'s "pageToken" value to this.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UrlChannels')

const AltParamsSchema = z
  .enum(['csv', 'json'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for the response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['csv', 'json'], type: 'string' },
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
        'An opaque string that represents a user for quota purposes. Must not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UserIpParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Deprecated. Please use quotaUser instead.',
      in: 'query',
      name: 'userIp',
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
        'https://www.googleapis.com/auth/adsensehost':
          'View and manage your AdSense host data and associated accounts',
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
        'https://www.googleapis.com/auth/adsensehost':
          'View and manage your AdSense host data and associated accounts',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/accounts',
  tags: ['accounts'],
  description: 'List hosted accounts associated with this AdSense account by ad client id.',
  operationId: 'adsensehost.accounts.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      filterAdClientId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            description: 'Ad clients to list accounts for.',
            explode: true,
            in: 'query',
            name: 'filterAdClientId',
            required: true,
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const getAccountsAccountIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}',
  tags: ['accounts'],
  description: 'Get information about the selected associated AdSense account.',
  operationId: 'adsensehost.accounts.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account to get information about.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const getAccountsAccountIdAdclientsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/adclients',
  tags: ['accounts'],
  description: 'List all hosted ad clients in the specified hosted account.',
  operationId: 'adsensehost.accounts.adclients.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of ad clients to include in the response, used for paging.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 10000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account for which to list ad clients.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdClientsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const getAccountsAccountIdAdclientsAdClientIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/adclients/{adClientId}',
  tags: ['accounts'],
  description:
    "Get information about one of the ad clients in the specified publisher's AdSense account.",
  operationId: 'adsensehost.accounts.adclients.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account which contains the ad client.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client to get.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdClientSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const getAccountsAccountIdAdclientsAdClientIdAdunitsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/adclients/{adClientId}/adunits',
  tags: ['accounts'],
  description: "List all ad units in the specified publisher's AdSense account.",
  operationId: 'adsensehost.accounts.adunits.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      includeInactive: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether to include inactive ad units. Default: true.',
            in: 'query',
            name: 'includeInactive',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of ad units to include in the response, used for paging.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 10000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account which contains the ad client.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client for which to list ad units.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdUnitsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const putAccountsAccountIdAdclientsAdClientIdAdunitsRoute = createRoute({
  method: 'put',
  path: '/accounts/{accountId}/adclients/{adClientId}/adunits',
  tags: ['accounts'],
  description: 'Update the supplied ad unit in the specified publisher AdSense account.',
  operationId: 'adsensehost.accounts.adunits.update',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account which contains the ad client.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client which contains the ad unit.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdUnitSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdUnitSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const postAccountsAccountIdAdclientsAdClientIdAdunitsRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/adclients/{adClientId}/adunits',
  tags: ['accounts'],
  description: 'Insert the supplied ad unit into the specified publisher AdSense account.',
  operationId: 'adsensehost.accounts.adunits.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account which will contain the ad unit.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client into which to insert the ad unit.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdUnitSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdUnitSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const patchAccountsAccountIdAdclientsAdClientIdAdunitsRoute = createRoute({
  method: 'patch',
  path: '/accounts/{accountId}/adclients/{adClientId}/adunits',
  tags: ['accounts'],
  description:
    'Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.',
  operationId: 'adsensehost.accounts.adunits.patch',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      adUnitId: z
        .string()
        .openapi({
          param: {
            description: 'Ad unit to get.',
            in: 'query',
            name: 'adUnitId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account which contains the ad client.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client which contains the ad unit.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AdUnitSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdUnitSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}',
  tags: ['accounts'],
  description: 'Get the specified host ad unit in this AdSense account.',
  operationId: 'adsensehost.accounts.adunits.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account which contains the ad unit.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client for which to get ad unit.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      adUnitId: z
        .string()
        .openapi({
          param: {
            description: 'Ad unit to get.',
            in: 'path',
            name: 'adUnitId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdUnitSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const deleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRoute = createRoute({
  method: 'delete',
  path: '/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}',
  tags: ['accounts'],
  description: 'Delete the specified ad unit from the specified publisher AdSense account.',
  operationId: 'adsensehost.accounts.adunits.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account which contains the ad unit.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client for which to get ad unit.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      adUnitId: z
        .string()
        .openapi({
          param: {
            description: 'Ad unit to delete.',
            in: 'path',
            name: 'adUnitId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdUnitSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/adcode',
  tags: ['accounts'],
  description:
    'Get ad code for the specified ad unit, attaching the specified host custom channels.',
  operationId: 'adsensehost.accounts.adunits.getAdCode',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      hostCustomChannelId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Host custom channel to attach to the ad code.',
            explode: true,
            in: 'query',
            name: 'hostCustomChannelId',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account which contains the ad client.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client with contains the ad unit.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      adUnitId: z
        .string()
        .openapi({
          param: {
            description: 'Ad unit to get the code for.',
            in: 'path',
            name: 'adUnitId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdCodeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const getAccountsAccountIdReportsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/reports',
  tags: ['accounts'],
  description:
    'Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.',
  operationId: 'adsensehost.accounts.reports.generate',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      startDate: z
        .string()
        .openapi({
          param: {
            description: 'Start of the date range to report on in "YYYY-MM-DD" format, inclusive.',
            in: 'query',
            name: 'startDate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      endDate: z
        .string()
        .openapi({
          param: {
            description: 'End of the date range to report on in "YYYY-MM-DD" format, inclusive.',
            in: 'query',
            name: 'endDate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dimension: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Dimensions to base the report on.',
            explode: true,
            in: 'query',
            name: 'dimension',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      filter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filters to be run on the report.',
            explode: true,
            in: 'query',
            name: 'filter',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.',
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(50000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of rows of report data to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 50000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      metric: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Numeric columns to include in the report.',
            explode: true,
            in: 'query',
            name: 'metric',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.',
            explode: true,
            in: 'query',
            name: 'sort',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      startIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(5000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the first row of report data to return.',
            in: 'query',
            name: 'startIndex',
            schema: { maximum: 5000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Hosted account upon which to report.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const getAdclientsRoute = createRoute({
  method: 'get',
  path: '/adclients',
  tags: ['adclients'],
  description: 'List all host ad clients in this AdSense account.',
  operationId: 'adsensehost.adclients.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of ad clients to include in the response, used for paging.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 10000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdClientsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const getAdclientsAdClientIdRoute = createRoute({
  method: 'get',
  path: '/adclients/{adClientId}',
  tags: ['adclients'],
  description: 'Get information about one of the ad clients in the Host AdSense account.',
  operationId: 'adsensehost.adclients.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client to get.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdClientSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const getAdclientsAdClientIdCustomchannelsRoute = createRoute({
  method: 'get',
  path: '/adclients/{adClientId}/customchannels',
  tags: ['customchannels'],
  description: 'List all host custom channels in this AdSense account.',
  operationId: 'adsensehost.customchannels.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of custom channels to include in the response, used for paging.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 10000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client for which to list custom channels.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomChannelsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const putAdclientsAdClientIdCustomchannelsRoute = createRoute({
  method: 'put',
  path: '/adclients/{adClientId}/customchannels',
  tags: ['customchannels'],
  description: 'Update a custom channel in the host AdSense account.',
  operationId: 'adsensehost.customchannels.update',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client in which the custom channel will be updated.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomChannelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const postAdclientsAdClientIdCustomchannelsRoute = createRoute({
  method: 'post',
  path: '/adclients/{adClientId}/customchannels',
  tags: ['customchannels'],
  description: 'Add a new custom channel to the host AdSense account.',
  operationId: 'adsensehost.customchannels.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client to which the new custom channel will be added.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomChannelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const patchAdclientsAdClientIdCustomchannelsRoute = createRoute({
  method: 'patch',
  path: '/adclients/{adClientId}/customchannels',
  tags: ['customchannels'],
  description:
    'Update a custom channel in the host AdSense account. This method supports patch semantics.',
  operationId: 'adsensehost.customchannels.patch',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      customChannelId: z
        .string()
        .openapi({
          param: {
            description: 'Custom channel to get.',
            in: 'query',
            name: 'customChannelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client in which the custom channel will be updated.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomChannelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const getAdclientsAdClientIdCustomchannelsCustomChannelIdRoute = createRoute({
  method: 'get',
  path: '/adclients/{adClientId}/customchannels/{customChannelId}',
  tags: ['customchannels'],
  description: 'Get a specific custom channel from the host AdSense account.',
  operationId: 'adsensehost.customchannels.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client from which to get the custom channel.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      customChannelId: z
        .string()
        .openapi({
          param: {
            description: 'Custom channel to get.',
            in: 'path',
            name: 'customChannelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const deleteAdclientsAdClientIdCustomchannelsCustomChannelIdRoute = createRoute({
  method: 'delete',
  path: '/adclients/{adClientId}/customchannels/{customChannelId}',
  tags: ['customchannels'],
  description: 'Delete a specific custom channel from the host AdSense account.',
  operationId: 'adsensehost.customchannels.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client from which to delete the custom channel.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      customChannelId: z
        .string()
        .openapi({
          param: {
            description: 'Custom channel to delete.',
            in: 'path',
            name: 'customChannelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CustomChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const getAdclientsAdClientIdUrlchannelsRoute = createRoute({
  method: 'get',
  path: '/adclients/{adClientId}/urlchannels',
  tags: ['urlchannels'],
  description: 'List all host URL channels in the host AdSense account.',
  operationId: 'adsensehost.urlchannels.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(10000),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of URL channels to include in the response, used for paging.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 10000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client for which to list URL channels.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UrlChannelsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const postAdclientsAdClientIdUrlchannelsRoute = createRoute({
  method: 'post',
  path: '/adclients/{adClientId}/urlchannels',
  tags: ['urlchannels'],
  description: 'Add a new URL channel to the host AdSense account.',
  operationId: 'adsensehost.urlchannels.insert',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client to which the new URL channel will be added.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UrlChannelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UrlChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const deleteAdclientsAdClientIdUrlchannelsUrlChannelIdRoute = createRoute({
  method: 'delete',
  path: '/adclients/{adClientId}/urlchannels/{urlChannelId}',
  tags: ['urlchannels'],
  description: 'Delete a URL channel from the host AdSense account.',
  operationId: 'adsensehost.urlchannels.delete',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
    }),
    params: z.object({
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client from which to delete the URL channel.',
            in: 'path',
            name: 'adClientId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      urlChannelId: z
        .string()
        .openapi({
          param: {
            description: 'URL channel to delete.',
            in: 'path',
            name: 'urlChannelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UrlChannelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const getAssociationsessionsStartRoute = createRoute({
  method: 'get',
  path: '/associationsessions/start',
  tags: ['associationsessions'],
  description: 'Create an association session for initiating an association with an AdSense user.',
  operationId: 'adsensehost.associationsessions.start',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      productCode: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['AFC', 'AFG', 'AFMC', 'AFS', 'AFV'])),
        )
        .openapi({
          param: {
            description: 'Products to associate with the user.',
            explode: true,
            in: 'query',
            name: 'productCode',
            required: true,
            schema: {
              items: { enum: ['AFC', 'AFG', 'AFMC', 'AFS', 'AFV'], type: 'string' },
              type: 'array',
            },
            style: 'form',
          },
        }),
      websiteUrl: z
        .string()
        .openapi({
          param: {
            description: "The URL of the user's hosted website.",
            in: 'query',
            name: 'websiteUrl',
            required: true,
            schema: { type: 'string' },
          },
        }),
      callbackUrl: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The URL to redirect the user to once association is completed. It receives a token parameter that can then be used to retrieve the associated account.',
            in: 'query',
            name: 'callbackUrl',
            schema: { type: 'string' },
            required: false,
          },
        }),
      userLocale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The preferred locale of the user.',
            in: 'query',
            name: 'userLocale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      websiteLocale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "The locale of the user's hosted website.",
            in: 'query',
            name: 'websiteLocale',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AssociationSessionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const getAssociationsessionsVerifyRoute = createRoute({
  method: 'get',
  path: '/associationsessions/verify',
  tags: ['associationsessions'],
  description:
    'Verify an association session after the association callback returns from AdSense signup.',
  operationId: 'adsensehost.associationsessions.verify',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      token: z
        .string()
        .openapi({
          param: {
            description: 'The token returned to the association callback URL.',
            in: 'query',
            name: 'token',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AssociationSessionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})

export const getReportsRoute = createRoute({
  method: 'get',
  path: '/reports',
  tags: ['reports'],
  description:
    'Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.',
  operationId: 'adsensehost.reports.generate',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      startDate: z
        .string()
        .openapi({
          param: {
            description: 'Start of the date range to report on in "YYYY-MM-DD" format, inclusive.',
            in: 'query',
            name: 'startDate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      endDate: z
        .string()
        .openapi({
          param: {
            description: 'End of the date range to report on in "YYYY-MM-DD" format, inclusive.',
            in: 'query',
            name: 'endDate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      dimension: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Dimensions to base the report on.',
            explode: true,
            in: 'query',
            name: 'dimension',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      filter: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Filters to be run on the report.',
            explode: true,
            in: 'query',
            name: 'filter',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.',
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(50000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of rows of report data to return.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 50000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      metric: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Numeric columns to include in the report.',
            explode: true,
            in: 'query',
            name: 'metric',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      sort: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.',
            explode: true,
            in: 'query',
            name: 'sort',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      startIndex: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0).max(5000),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Index of the first row of report data to return.',
            in: 'query',
            name: 'startIndex',
            schema: { maximum: 5000, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsensehost'],
      Oauth2c: ['https://www.googleapis.com/auth/adsensehost'],
    },
  ],
})
