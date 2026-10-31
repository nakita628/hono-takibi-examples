import { createRoute, z } from '@hono/zod-openapi'

const GoogleAdsHomeservicesLocalservicesV1AggregatorInfoSchema = z
  .object({
    aggregatorProviderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provider id (listed in aggregator system) which maps to a account id in GLS system.',
      }),
  })
  .openapi({
    description:
      'Conatiner for aggregator specific information if lead is for an aggregator GLS account.',
    required: [],
  })
  .openapi('GoogleAdsHomeservicesLocalservicesV1AggregatorInfo')

const GoogleAdsHomeservicesLocalservicesV1AccountReportSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of the GLS account.' }),
    aggregatorInfo:
      GoogleAdsHomeservicesLocalservicesV1AggregatorInfoSchema.exactOptional().openapi({
        description: 'Aggregator specific information related to the account.',
      }),
    averageFiveStarRating: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Average review rating score from 1-5 stars.' }),
    averageWeeklyBudget: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Average weekly budget in the currency code of the account.' }),
    businessName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Business name of the account.' }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Currency code of the account.' }),
    currentPeriodChargedLeads: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of charged leads the account received in current specified period.',
      }),
    currentPeriodConnectedPhoneCalls: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of connected phone calls (duration over 30s) in current specified period.',
      }),
    currentPeriodPhoneCalls: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of phone calls in current specified period, including both connected and unconnected calls.',
      }),
    currentPeriodTotalCost: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "Total cost of the account in current specified period in the account's specified currency.",
      }),
    impressionsLastTwoDays: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of impressions that customers have had in the past 2 days.',
      }),
    phoneLeadResponsiveness: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Phone lead responsiveness of the account for the past 90 days from current date. This is computed by taking the total number of connected calls from charged phone leads and dividing by the total number of calls received.',
      }),
    previousPeriodChargedLeads: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Number of charged leads the account received in previous specified period.',
      }),
    previousPeriodConnectedPhoneCalls: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of connected phone calls (duration over 30s) in previous specified period.',
      }),
    previousPeriodPhoneCalls: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of phone calls in previous specified period, including both connected and unconnected calls.',
      }),
    previousPeriodTotalCost: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "Total cost of the account in previous specified period in the account's specified currency.",
      }),
    totalReview: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total number of reviews the account has up to current date.' }),
  })
  .openapi({
    description:
      'An Account Report of a GLS account identified by their account id containing aggregate data gathered from a particular date range. Next ID: 18',
    required: [],
  })
  .openapi('GoogleAdsHomeservicesLocalservicesV1AccountReport')

const GoogleAdsHomeservicesLocalservicesV1BookingLeadSchema = z
  .object({
    bookingAppointmentTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp of when service is provided by advertiser.' }),
    consumerEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Consumer email associated with the booking lead.' }),
    consumerPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Consumer phone number associated with the booking lead.' }),
    customerName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the customer who created the lead.' }),
    jobType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The job type of the specified lead.' }),
  })
  .openapi({ description: 'Container for booking lead specific information.', required: [] })
  .openapi('GoogleAdsHomeservicesLocalservicesV1BookingLead')

const GoogleAdsHomeservicesLocalservicesV1MessageLeadSchema = z
  .object({
    consumerPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Consumer phone number associated with the message lead.' }),
    customerName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the customer who created the lead.' }),
    jobType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The job type of the specified lead.' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The postal code of the customer who created the lead.' }),
  })
  .openapi({ description: 'Container for message lead specific information.', required: [] })
  .openapi('GoogleAdsHomeservicesLocalservicesV1MessageLead')

const GoogleAdsHomeservicesLocalservicesV1PhoneLeadSchema = z
  .object({
    chargedCallTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Timestamp of the phone call which resulted in a charged phone lead.',
      }),
    chargedConnectedCallDurationSeconds: z
      .string()
      .exactOptional()
      .openapi({ description: 'Duration of the charged phone call in seconds.' }),
    consumerPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Consumer phone number associated with the phone lead.' }),
  })
  .openapi({ description: 'Container for phone lead specific information.', required: [] })
  .openapi('GoogleAdsHomeservicesLocalservicesV1PhoneLead')

const GoogleTypeTimeZoneSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'IANA Time Zone Database time zone, e.g. "America/New_York".' }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. IANA Time Zone Database version number, e.g. "2019a".' }),
  })
  .openapi({
    description:
      'Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).',
    required: [],
  })
  .openapi('GoogleTypeTimeZone')

const GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Identifies account that received the lead.' }),
    aggregatorInfo:
      GoogleAdsHomeservicesLocalservicesV1AggregatorInfoSchema.exactOptional().openapi({
        description: 'Aggregator specific information related to the lead.',
      }),
    bookingLead: GoogleAdsHomeservicesLocalservicesV1BookingLeadSchema.exactOptional().openapi({
      description: 'More information associated to only booking leads.',
    }),
    businessName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Business name associated to the account.' }),
    chargeStatus: z
      .enum(['CHARGE_STATUS_UNSPECIFIED', 'CHARGED', 'NOT_CHARGED'])
      .exactOptional()
      .openapi({ description: 'Whether the lead has been charged.' }),
    currencyCode: z.string().exactOptional().openapi({ description: 'Currency code.' }),
    disputeStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'Dispute status related to the lead.' }),
    geo: z
      .string()
      .exactOptional()
      .openapi({ description: "Location of the associated account's home city." }),
    leadCategory: z
      .string()
      .exactOptional()
      .openapi({ description: 'Lead category (e.g. hvac, plumber)' }),
    leadCreationTimestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Timestamp of when the lead was created.' }),
    leadId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of a Detailed Lead Report.' }),
    leadPrice: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Price of the lead (available only after it has been charged).' }),
    leadType: z
      .enum(['LEAD_TYPE_UNSPECIFIED', 'MESSAGE', 'PHONE_CALL', 'BOOKING'])
      .exactOptional()
      .openapi({ description: 'Lead type.' }),
    messageLead: GoogleAdsHomeservicesLocalservicesV1MessageLeadSchema.exactOptional().openapi({
      description: 'More information associated to only message leads.',
    }),
    phoneLead: GoogleAdsHomeservicesLocalservicesV1PhoneLeadSchema.exactOptional().openapi({
      description: 'More information associated to only phone leads.',
    }),
    timezone: GoogleTypeTimeZoneSchema.exactOptional().openapi({
      description: 'Timezone of the particular provider associated to a lead.',
    }),
  })
  .openapi({
    description:
      'A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data.',
    required: [],
  })
  .openapi('GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport')

const GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponseSchema = z
  .object({
    accountReports: z
      .array(GoogleAdsHomeservicesLocalservicesV1AccountReportSchema)
      .exactOptional()
      .openapi({
        description: 'List of account reports which maps 1:1 to a particular linked GLS account.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set.',
      }),
  })
  .openapi({
    description:
      'A page of the response received from the SearchAccountReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.',
    required: [],
  })
  .openapi('GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponse')

const GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponseSchema = z
  .object({
    detailedLeadReports: z
      .array(GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportSchema)
      .exactOptional()
      .openapi({
        description: 'List of detailed lead reports uniquely identified by external lead id.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pagination token to retrieve the next page of results. When `next_page_token` is not filled in, there is no next page and the list returned is the last page in the result set.',
      }),
  })
  .openapi({
    description:
      'A page of the response received from the SearchDetailedLeadReports method. A paginated response where more pages are available has `next_page_token` set. This token can be used in a subsequent request to retrieve the next request page.',
    required: [],
  })
  .openapi('GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponse')

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
        'https://www.googleapis.com/auth/adwords':
          'See, edit, create, and delete your Google Ads accounts and data.',
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
        'https://www.googleapis.com/auth/adwords':
          'See, edit, create, and delete your Google Ads accounts and data.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1AccountReportsSearchRoute = createRoute({
  method: 'get',
  path: '/v1/accountReports:search',
  tags: ['accountReports'],
  description:
    'Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.',
  operationId: 'localservices.accountReports.search',
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
              'The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional.',
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
              'The `next_page_token` value returned from a previous request to SearchAccountReports that indicates where listing should continue. Optional.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked accounts. Search expressions are case insensitive. Example query: | Query | Description | |-------------------------|-----------------------------------------------| | manager_customer_id:123 | Get Account Report for Manager with id 123. | Required.',
            in: 'query',
            name: 'query',
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
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleAdsHomeservicesLocalservicesV1SearchAccountReportsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adwords'],
      Oauth2c: ['https://www.googleapis.com/auth/adwords'],
    },
  ],
})

export const getV1DetailedLeadReportsSearchRoute = createRoute({
  method: 'get',
  path: '/v1/detailedLeadReports:search',
  tags: ['detailedLeadReports'],
  description:
    'Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.',
  operationId: 'localservices.detailedLeadReports.search',
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
              'The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional.',
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
              'The `next_page_token` value returned from a previous request to SearchDetailedLeadReports that indicates where listing should continue. Optional.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked accounts. Search expressions are case insensitive. Example query: | Query | Description | |-------------------------|-----------------------------------------------| | manager_customer_id:123 | Get Detailed Lead Report for Manager with id | | | 123. | Required.',
            in: 'query',
            name: 'query',
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
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: GoogleAdsHomeservicesLocalservicesV1SearchDetailedLeadReportsResponseSchema,
        },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adwords'],
      Oauth2c: ['https://www.googleapis.com/auth/adwords'],
    },
  ],
})
