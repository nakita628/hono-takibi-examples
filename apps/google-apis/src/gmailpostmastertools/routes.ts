import { createRoute, z } from '@hono/zod-openapi'

const DeliveryErrorSchema = z
  .object({
    errorClass: z
      .enum(['DELIVERY_ERROR_CLASS_UNSPECIFIED', 'PERMANENT_ERROR', 'TEMPORARY_ERROR'])
      .exactOptional()
      .openapi({ description: 'The class of delivery error.' }),
    errorRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The ratio of messages where the error occurred vs all authenticated traffic.',
      }),
    errorType: z
      .enum([
        'DELIVERY_ERROR_TYPE_UNSPECIFIED',
        'RATE_LIMIT_EXCEEDED',
        'SUSPECTED_SPAM',
        'CONTENT_SPAMMY',
        'BAD_ATTACHMENT',
        'BAD_DMARC_POLICY',
        'LOW_IP_REPUTATION',
        'LOW_DOMAIN_REPUTATION',
        'IP_IN_RBL',
        'DOMAIN_IN_RBL',
        'BAD_PTR_RECORD',
      ])
      .exactOptional()
      .openapi({ description: 'The type of delivery error.' }),
  })
  .openapi({ description: 'Metric on a particular delivery error type.', required: [] })
  .openapi('DeliveryError')

const DomainSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp when the user registered this domain. Assigned by the server.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the Domain. Domain names have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com).',
      }),
    permission: z
      .enum(['PERMISSION_UNSPECIFIED', 'OWNER', 'READER', 'NONE'])
      .exactOptional()
      .openapi({ description: 'User’s permission for this domain. Assigned by the server.' }),
  })
  .openapi({ description: 'A registered domain resource in the Postmaster API.', required: [] })
  .openapi('Domain')

const FeedbackLoopSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Feedback loop identifier that uniquely identifies individual campaigns.',
      }),
    spamRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The ratio of user marked spam messages with the identifier vs the total number of inboxed messages with that identifier.',
      }),
  })
  .openapi({
    description:
      '[Feedback loop](https://support.google.com/mail/answer/6254652) identifier information.',
    required: [],
  })
  .openapi('FeedbackLoop')

const IpReputationSchema = z
  .object({
    ipCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Total number of unique IPs in this reputation category. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).',
      }),
    numIps: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Total number of unique IPs in this reputation category. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/). Deprecated to be complied with ApiLinter for Quantities. Use ip_count instead.',
      }),
    reputation: z
      .enum(['REPUTATION_CATEGORY_UNSPECIFIED', 'HIGH', 'MEDIUM', 'LOW', 'BAD'])
      .exactOptional()
      .openapi({ description: 'The reputation category this IP reputation represents.' }),
    sampleIps: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A sample of IPs in this reputation category.' }),
  })
  .openapi({
    description: 'IP Reputation information for a set of IPs in a specific reputation category.',
    required: [],
  })
  .openapi('IpReputation')

const ListDomainsResponseSchema = z
  .object({
    domains: z.array(DomainSchema).exactOptional().openapi({ description: 'The list of domains.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
  })
  .openapi({ description: 'Response message for ListDomains.', required: [] })
  .openapi('ListDomainsResponse')

const TrafficStatsSchema = z
  .object({
    deliveryErrors: z
      .array(DeliveryErrorSchema)
      .exactOptional()
      .openapi({
        description:
          'Delivery errors for the domain. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).',
      }),
    dkimSuccessRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The ratio of mail that successfully authenticated with DKIM vs. all mail that attempted to authenticate with [DKIM](http://www.dkim.org/). Spoofed mail is excluded.',
      }),
    dmarcSuccessRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The ratio of mail that passed [DMARC](https://dmarc.org/) alignment checks vs all mail received from the domain that successfully authenticated with either of [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).',
      }),
    domainReputation: z
      .enum(['REPUTATION_CATEGORY_UNSPECIFIED', 'HIGH', 'MEDIUM', 'LOW', 'BAD'])
      .exactOptional()
      .openapi({ description: 'Reputation of the domain.' }),
    inboundEncryptionRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The ratio of incoming mail (to Gmail), that passed secure transport (TLS) vs all mail received from that domain. This metric only pertains to traffic that passed [SPF](http://www.openspf.org/) or [DKIM](http://www.dkim.org/).',
      }),
    ipReputations: z
      .array(IpReputationSchema)
      .exactOptional()
      .openapi({
        description:
          'Reputation information pertaining to the IP addresses of the email servers for the domain. There is exactly one entry for each reputation category except REPUTATION_CATEGORY_UNSPECIFIED.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the traffic statistics. Traffic statistic names have the form `domains/{domain}/trafficStats/{date}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com) of the domain this traffic statistics pertains to and date is the date in yyyymmdd format that these statistics corresponds to. For example: domains/mymail.mydomain.com/trafficStats/20160807',
      }),
    outboundEncryptionRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The ratio of outgoing mail (from Gmail) that was accepted over secure transport (TLS).',
      }),
    spammyFeedbackLoops: z
      .array(FeedbackLoopSchema)
      .exactOptional()
      .openapi({
        description:
          'Spammy [Feedback loop identifiers] (https://support.google.com/mail/answer/6254652) with their individual spam rates. This metric only pertains to traffic that is authenticated by [DKIM](http://www.dkim.org/).',
      }),
    spfSuccessRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The ratio of mail that successfully authenticated with SPF vs. all mail that attempted to authenticate with [SPF](http://www.openspf.org/). Spoofed mail is excluded.',
      }),
    userReportedSpamRatio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The ratio of user-report spam vs. email that was sent to the inbox. This metric only pertains to emails authenticated by [DKIM](http://www.dkim.org/).',
      }),
  })
  .openapi({ description: 'Email traffic statistics pertaining to a specific date.', required: [] })
  .openapi('TrafficStats')

const ListTrafficStatsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token to retrieve the next page of results, or empty if there are no more results in the list.',
      }),
    trafficStats: z
      .array(TrafficStatsSchema)
      .exactOptional()
      .openapi({ description: 'The list of TrafficStats.' }),
  })
  .openapi({ description: 'Response message for ListTrafficStats.', required: [] })
  .openapi('ListTrafficStatsResponse')

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
        'https://www.googleapis.com/auth/postmaster.readonly':
          'See email traffic metrics for the domains you have registered in Gmail Postmaster Tools',
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
        'https://www.googleapis.com/auth/postmaster.readonly':
          'See email traffic metrics for the domains you have registered in Gmail Postmaster Tools',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1beta1DomainsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/domains',
  tags: ['domains'],
  description:
    'Lists the domains that have been registered by the client. The order of domains in the response is unspecified and non-deterministic. Newly created domains will not necessarily be added to the end of this list.',
  operationId: 'gmailpostmastertools.domains.list',
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
      pageSize: z
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
              'Requested page size. Server may return fewer domains than requested. If unspecified, server will pick an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The next_page_token value returned from a previous List request, if any. This is the value of ListDomainsResponse.next_page_token returned from the previous call to `ListDomains` method.',
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
      content: { 'application/json': { schema: ListDomainsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/postmaster.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/postmaster.readonly'],
    },
  ],
})

export const getV1beta1NameRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{name}',
  tags: ['domains'],
  description:
    'Get traffic statistics for a domain on a specific date. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.',
  operationId: 'gmailpostmastertools.domains.trafficStats.get',
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
      name: z
        .string()
        .openapi({
          param: {
            description:
              'The resource name of the traffic statistics to get. E.g., domains/mymail.mydomain.com/trafficStats/20160807.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TrafficStatsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/postmaster.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/postmaster.readonly'],
    },
  ],
})

export const getV1beta1ParentTrafficStatsRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{parent}/trafficStats',
  tags: ['domains'],
  description:
    'List traffic statistics for all available days. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.',
  operationId: 'gmailpostmastertools.domains.trafficStats.list',
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
      'endDate.day': z
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
              "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
            in: 'query',
            name: 'endDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'endDate.month': z
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
              'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
            in: 'query',
            name: 'endDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'endDate.year': z
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
              'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
            in: 'query',
            name: 'endDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageSize: z
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
              'Requested page size. Server may return fewer TrafficStats than requested. If unspecified, server will pick an appropriate default.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The next_page_token value returned from a previous List request, if any. This is the value of ListTrafficStatsResponse.next_page_token returned from the previous call to `ListTrafficStats` method.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'startDate.day': z
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
              "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
            in: 'query',
            name: 'startDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'startDate.month': z
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
              'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
            in: 'query',
            name: 'startDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'startDate.year': z
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
              'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
            in: 'query',
            name: 'startDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              "The resource name of the domain whose traffic statistics we'd like to list. It should have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name.",
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListTrafficStatsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/postmaster.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/postmaster.readonly'],
    },
  ],
})
