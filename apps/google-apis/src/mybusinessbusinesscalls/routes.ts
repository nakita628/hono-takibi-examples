import { createRoute, z } from '@hono/zod-openapi'

const DateSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.",
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.',
      }),
  })
  .openapi({
    description:
      'Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp',
    required: [],
  })
  .openapi('Date')

const HourlyMetricsSchema = z
  .object({
    hour: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Hour of the day. Allowed values are 0-23.' }),
    missedCallsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total count of missed calls for this hour.' }),
  })
  .openapi({ description: 'Metrics for an hour.', required: [] })
  .openapi('HourlyMetrics')

const WeekDayMetricsSchema = z
  .object({
    day: z
      .enum([
        'DAY_OF_WEEK_UNSPECIFIED',
        'MONDAY',
        'TUESDAY',
        'WEDNESDAY',
        'THURSDAY',
        'FRIDAY',
        'SATURDAY',
        'SUNDAY',
      ])
      .exactOptional()
      .openapi({ description: 'Day of the week. Allowed values are Sunday - Saturday.' }),
    missedCallsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total count of missed calls for this hour.' }),
  })
  .openapi({ description: 'Metrics for a week day.', required: [] })
  .openapi('WeekDayMetrics')

const AggregateMetricsSchema = z
  .object({
    answeredCallsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total count of answered calls.' }),
    endDate: DateSchema.exactOptional().openapi({ description: 'End date for this metric.' }),
    hourlyMetrics: z
      .array(HourlyMetricsSchema)
      .exactOptional()
      .openapi({ description: 'A list of metrics by hour of day.' }),
    missedCallsCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Total count of missed calls.' }),
    startDate: DateSchema.exactOptional().openapi({
      description: 'Date for this metric. If metric is monthly, only year and month are used.',
    }),
    weekdayMetrics: z
      .array(WeekDayMetricsSchema)
      .exactOptional()
      .openapi({ description: 'A list of metrics by day of week.' }),
  })
  .openapi({ description: 'Metrics aggregated over the input time range.', required: [] })
  .openapi('AggregateMetrics')

const BusinessCallsInsightsSchema = z
  .object({
    aggregateMetrics: AggregateMetricsSchema.exactOptional().openapi({
      description: 'Metric for the time range based on start_date and end_date.',
    }),
    metricType: z
      .enum(['METRIC_TYPE_UNSPECIFIED', 'AGGREGATE_COUNT'])
      .exactOptional()
      .openapi({ description: 'The metric for which the value applies.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of the calls insights. Format: locations/{location}/businesscallsinsights',
      }),
  })
  .openapi({ description: 'Insights for calls made to a location.', required: [] })
  .openapi('BusinessCallsInsights')

const BusinessCallsSettingsSchema = z
  .object({
    callsState: z
      .enum(['CALLS_STATE_UNSPECIFIED', 'ENABLED', 'DISABLED'])
      .exactOptional()
      .openapi({
        description: "Required. The state of this location's enrollment in Business calls.",
      }),
    consentTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. Time when the end user provided consent to the API user to enable business calls.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The resource name of the calls settings. Format: locations/{location}/businesscallssettings',
      }),
  })
  .openapi({ description: 'Business calls settings for a location.', required: [] })
  .openapi('BusinessCallsSettings')

const ListBusinessCallsInsightsResponseSchema = z
  .object({
    businessCallsInsights: z
      .array(BusinessCallsInsightsSchema)
      .exactOptional()
      .openapi({ description: 'A collection of business calls insights for the location.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Some of the metric_types (e.g, AGGREGATE_COUNT) returns a single page. For these metrics, the next_page_token will be empty.',
      }),
  })
  .openapi({ description: 'Response message for ListBusinessCallsInsights.', required: [] })
  .openapi('ListBusinessCallsInsightsResponse')

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

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['locations'],
  description: 'Returns the Business calls settings resource for the given location.',
  operationId: 'mybusinessbusinesscalls.locations.getBusinesscallssettings',
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
              'Required. The BusinessCallsSettings to get. The `name` field is used to identify the business call settings to get. Format: locations/{location_id}/businesscallssettings.',
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
      content: { 'application/json': { schema: BusinessCallsSettingsSchema } },
    },
  },
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['locations'],
  description: 'Updates the Business call settings for the specified location.',
  operationId: 'mybusinessbusinesscalls.locations.updateBusinesscallssettings',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The list of fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The resource name of the calls settings. Format: locations/{location}/businesscallssettings',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BusinessCallsSettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BusinessCallsSettingsSchema } },
    },
  },
})

export const getV1ParentBusinesscallsinsightsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/businesscallsinsights',
  tags: ['locations'],
  description: 'Returns insights for Business calls for a location.',
  operationId: 'mybusinessbusinesscalls.locations.businesscallsinsights.list',
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
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. A filter constraining the calls insights to return. The response includes only entries that match the filter. If the MetricType is not provided, AGGREGATE_COUNT is returned. If no end_date is provided, the last date for which data is available is used. If no start_date is provided, we will default to the first date for which data is available, which is currently 6 months. If start_date is before the date when data is available, data is returned starting from the date when it is available. At this time we support following filters. 1. start_date="DATE" where date is in YYYY-MM-DD format. 2. end_date="DATE" where date is in YYYY-MM-DD format. 3. metric_type=XYZ where XYZ is a valid MetricType. 4. Conjunctions(AND) of all of the above. e.g., "start_date=2021-08-01 AND end_date=2021-08-10 AND metric_type=AGGREGATE_COUNT" The AGGREGATE_COUNT metric_type ignores the DD part of the date.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
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
              'Optional. The maximum number of BusinessCallsInsights to return. If unspecified, at most 20 will be returned. Some of the metric_types(e.g, AGGREGATE_COUNT) returns a single page. For these metrics, the page_size is ignored.',
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
              'Optional. A page token, received from a previous `ListBusinessCallsInsights` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBusinessCallsInsights` must match the call that provided the page token. Some of the metric_types (e.g, AGGREGATE_COUNT) returns a single page. For these metrics, the pake_token is ignored.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
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
              'Required. The parent location to fetch calls insights for. Format: locations/{location_id}',
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
      content: { 'application/json': { schema: ListBusinessCallsInsightsResponseSchema } },
    },
  },
})
