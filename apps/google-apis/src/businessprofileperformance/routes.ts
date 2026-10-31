import { createRoute, z } from '@hono/zod-openapi'

const TimeOfDaySchema = z
  .object({
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minutes of hour of day. Must be from 0 to 59.' }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.',
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.',
      }),
  })
  .openapi({
    description:
      'Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.',
    required: [],
  })
  .openapi('TimeOfDay')

const DailySubEntityTypeSchema = z
  .object({
    dayOfWeek: z
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
      .openapi({
        description:
          'Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics = NONE.',
      }),
    timeOfDay: TimeOfDaySchema.exactOptional().openapi({
      description:
        'Represents the time of the day in 24 hour format. Eg: 13:34:20 Currently supported DailyMetrics = NONE.',
    }),
  })
  .openapi({
    description: 'Represents all possible subentity types that are associated with DailyMetrics.',
    required: [],
  })
  .openapi('DailySubEntityType')

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

const DatedValueSchema = z
  .object({
    date: DateSchema.exactOptional().openapi({
      description:
        'The date that the datapoint corresponds to. This represents a month value if the day field is not set.',
    }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The value of the datapoint. This will not be present when the value is zero.',
      }),
  })
  .openapi({
    description:
      'Represents a single datapoint in the timeseries, where each datapoint is a date-value pair.',
    required: [],
  })
  .openapi('DatedValue')

const TimeSeriesSchema = z
  .object({
    datedValues: z
      .array(DatedValueSchema)
      .exactOptional()
      .openapi({
        description:
          'List of datapoints in the timeseries, where each datapoint is a date-value pair.',
      }),
  })
  .openapi({ description: 'Represents a timeseries.', required: [] })
  .openapi('TimeSeries')

const DailyMetricTimeSeriesSchema = z
  .object({
    dailyMetric: z
      .enum([
        'DAILY_METRIC_UNKNOWN',
        'BUSINESS_IMPRESSIONS_DESKTOP_MAPS',
        'BUSINESS_IMPRESSIONS_DESKTOP_SEARCH',
        'BUSINESS_IMPRESSIONS_MOBILE_MAPS',
        'BUSINESS_IMPRESSIONS_MOBILE_SEARCH',
        'BUSINESS_CONVERSATIONS',
        'BUSINESS_DIRECTION_REQUESTS',
        'CALL_CLICKS',
        'WEBSITE_CLICKS',
        'BUSINESS_BOOKINGS',
        'BUSINESS_FOOD_ORDERS',
        'BUSINESS_FOOD_MENU_CLICKS',
      ])
      .exactOptional()
      .openapi({ description: 'The DailyMetric that the TimeSeries represents.' }),
    dailySubEntityType: DailySubEntityTypeSchema.exactOptional().openapi({
      description:
        'The DailySubEntityType that the TimeSeries represents. Will not be present when breakdown does not exist.',
    }),
    timeSeries: TimeSeriesSchema.exactOptional().openapi({
      description: 'List of datapoints where each datapoint is a date-value pair.',
    }),
  })
  .openapi({
    description:
      'Represents a single datapoint, where each datapoint is a DailyMetric-DailySubEntityType-TimeSeries tuple.',
    required: [],
  })
  .openapi('DailyMetricTimeSeries')

const MultiDailyMetricTimeSeriesSchema = z
  .object({
    dailyMetricTimeSeries: z
      .array(DailyMetricTimeSeriesSchema)
      .exactOptional()
      .openapi({ description: 'List of DailyMetric-TimeSeries pairs.' }),
  })
  .openapi({
    description: 'Represents a list of tuples of DailyMetric-DailySubEntityType-TimeSeries.',
    required: [],
  })
  .openapi('MultiDailyMetricTimeSeries')

const FetchMultiDailyMetricsTimeSeriesResponseSchema = z
  .object({
    multiDailyMetricTimeSeries: z
      .array(MultiDailyMetricTimeSeriesSchema)
      .exactOptional()
      .openapi({ description: 'DailyMetrics and their corresponding time series.' }),
  })
  .openapi({
    description: 'Represents the response for FetchMultiDailyMetricsTimeSeries.',
    required: [],
  })
  .openapi('FetchMultiDailyMetricsTimeSeriesResponse')

const GetDailyMetricsTimeSeriesResponseSchema = z
  .object({
    timeSeries: TimeSeriesSchema.exactOptional().openapi({ description: 'The daily time series.' }),
  })
  .openapi({ description: 'Represents the response for GetDailyMetricsTimeSeries.', required: [] })
  .openapi('GetDailyMetricsTimeSeriesResponse')

const InsightsValueSchema = z
  .object({
    threshold: z
      .string()
      .exactOptional()
      .openapi({ description: 'Represents the threshold below which the actual value falls.' }),
    value: z.string().exactOptional().openapi({ description: 'Represents the actual value.' }),
  })
  .openapi({ description: 'Represents an insights value.', required: [] })
  .openapi('InsightsValue')

const SearchKeywordCountSchema = z
  .object({
    insightsValue: InsightsValueSchema.exactOptional().openapi({
      description:
        'One of either: 1) The sum of the number of unique users that used the keyword in a month, aggregated for each month requested. 2) A threshold that indicates that the actual value is below this threshold.',
    }),
    searchKeyword: z
      .string()
      .exactOptional()
      .openapi({ description: 'The lower-cased string that the user entered.' }),
  })
  .openapi({ description: 'Represents a single search keyword and its value.', required: [] })
  .openapi('SearchKeywordCount')

const ListSearchKeywordImpressionsMonthlyResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token indicating the last paginated result returned. This can be used by succeeding requests to get the next "page" of keywords. It will only be present when there are more results to be returned.',
      }),
    searchKeywordsCounts: z
      .array(SearchKeywordCountSchema)
      .exactOptional()
      .openapi({ description: 'Search terms which have been used to find a business.' }),
  })
  .openapi({
    description: 'Represents the response for ListSearchKeywordImpressionsMonthly.',
    required: [],
  })
  .openapi('ListSearchKeywordImpressionsMonthlyResponse')

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

export const getV1LocationFetchMultiDailyMetricsTimeSeriesRoute = createRoute({
  method: 'get',
  path: '/v1/{location}:fetchMultiDailyMetricsTimeSeries',
  tags: ['locations'],
  description:
    ' Returns the values for each date from a given time range and optionally the sub entity type, where applicable, that are associated with the specific daily metrics. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`',
  operationId: 'businessprofileperformance.locations.fetchMultiDailyMetricsTimeSeries',
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
      dailyMetrics: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'DAILY_METRIC_UNKNOWN',
              'BUSINESS_IMPRESSIONS_DESKTOP_MAPS',
              'BUSINESS_IMPRESSIONS_DESKTOP_SEARCH',
              'BUSINESS_IMPRESSIONS_MOBILE_MAPS',
              'BUSINESS_IMPRESSIONS_MOBILE_SEARCH',
              'BUSINESS_CONVERSATIONS',
              'BUSINESS_DIRECTION_REQUESTS',
              'CALL_CLICKS',
              'WEBSITE_CLICKS',
              'BUSINESS_BOOKINGS',
              'BUSINESS_FOOD_ORDERS',
              'BUSINESS_FOOD_MENU_CLICKS',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The metrics to retrieve time series for.',
            explode: true,
            in: 'query',
            name: 'dailyMetrics',
            schema: {
              items: {
                enum: [
                  'DAILY_METRIC_UNKNOWN',
                  'BUSINESS_IMPRESSIONS_DESKTOP_MAPS',
                  'BUSINESS_IMPRESSIONS_DESKTOP_SEARCH',
                  'BUSINESS_IMPRESSIONS_MOBILE_MAPS',
                  'BUSINESS_IMPRESSIONS_MOBILE_SEARCH',
                  'BUSINESS_CONVERSATIONS',
                  'BUSINESS_DIRECTION_REQUESTS',
                  'CALL_CLICKS',
                  'WEBSITE_CLICKS',
                  'BUSINESS_BOOKINGS',
                  'BUSINESS_FOOD_ORDERS',
                  'BUSINESS_FOOD_MENU_CLICKS',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      'dailyRange.endDate.day': z
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
            name: 'dailyRange.endDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'dailyRange.endDate.month': z
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
            name: 'dailyRange.endDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'dailyRange.endDate.year': z
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
            name: 'dailyRange.endDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'dailyRange.startDate.day': z
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
            name: 'dailyRange.startDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'dailyRange.startDate.month': z
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
            name: 'dailyRange.startDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'dailyRange.startDate.year': z
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
            name: 'dailyRange.startDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
    }),
    params: z.object({
      location: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.',
            in: 'path',
            name: 'location',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FetchMultiDailyMetricsTimeSeriesResponseSchema } },
    },
  },
})

export const getV1NameGetDailyMetricsTimeSeriesRoute = createRoute({
  method: 'get',
  path: '/v1/{name}:getDailyMetricsTimeSeries',
  tags: ['locations'],
  description:
    ' Returns the values for each date from a given time range that are associated with the specific daily metric. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`',
  operationId: 'businessprofileperformance.locations.getDailyMetricsTimeSeries',
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
      dailyMetric: z
        .enum([
          'DAILY_METRIC_UNKNOWN',
          'BUSINESS_IMPRESSIONS_DESKTOP_MAPS',
          'BUSINESS_IMPRESSIONS_DESKTOP_SEARCH',
          'BUSINESS_IMPRESSIONS_MOBILE_MAPS',
          'BUSINESS_IMPRESSIONS_MOBILE_SEARCH',
          'BUSINESS_CONVERSATIONS',
          'BUSINESS_DIRECTION_REQUESTS',
          'CALL_CLICKS',
          'WEBSITE_CLICKS',
          'BUSINESS_BOOKINGS',
          'BUSINESS_FOOD_ORDERS',
          'BUSINESS_FOOD_MENU_CLICKS',
        ])
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The metric to retrieve time series.',
            in: 'query',
            name: 'dailyMetric',
            schema: {
              enum: [
                'DAILY_METRIC_UNKNOWN',
                'BUSINESS_IMPRESSIONS_DESKTOP_MAPS',
                'BUSINESS_IMPRESSIONS_DESKTOP_SEARCH',
                'BUSINESS_IMPRESSIONS_MOBILE_MAPS',
                'BUSINESS_IMPRESSIONS_MOBILE_SEARCH',
                'BUSINESS_CONVERSATIONS',
                'BUSINESS_DIRECTION_REQUESTS',
                'CALL_CLICKS',
                'WEBSITE_CLICKS',
                'BUSINESS_BOOKINGS',
                'BUSINESS_FOOD_ORDERS',
                'BUSINESS_FOOD_MENU_CLICKS',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      'dailyRange.endDate.day': z
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
            name: 'dailyRange.endDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'dailyRange.endDate.month': z
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
            name: 'dailyRange.endDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'dailyRange.endDate.year': z
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
            name: 'dailyRange.endDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'dailyRange.startDate.day': z
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
            name: 'dailyRange.startDate.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'dailyRange.startDate.month': z
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
            name: 'dailyRange.startDate.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'dailyRange.startDate.year': z
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
            name: 'dailyRange.startDate.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'dailySubEntityType.dayOfWeek': z
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
        .openapi({
          param: {
            description:
              'Represents the day of the week. Eg: MONDAY. Currently supported DailyMetrics = NONE.',
            in: 'query',
            name: 'dailySubEntityType.dayOfWeek',
            schema: {
              enum: [
                'DAY_OF_WEEK_UNSPECIFIED',
                'MONDAY',
                'TUESDAY',
                'WEDNESDAY',
                'THURSDAY',
                'FRIDAY',
                'SATURDAY',
                'SUNDAY',
              ],
              type: 'string',
            },
            required: false,
          },
        }),
      'dailySubEntityType.timeOfDay.hours': z
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
              'Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
            in: 'query',
            name: 'dailySubEntityType.timeOfDay.hours',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'dailySubEntityType.timeOfDay.minutes': z
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
            description: 'Minutes of hour of day. Must be from 0 to 59.',
            in: 'query',
            name: 'dailySubEntityType.timeOfDay.minutes',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'dailySubEntityType.timeOfDay.nanos': z
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
            description: 'Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.',
            in: 'query',
            name: 'dailySubEntityType.timeOfDay.nanos',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'dailySubEntityType.timeOfDay.seconds': z
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
              'Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.',
            in: 'query',
            name: 'dailySubEntityType.timeOfDay.seconds',
            schema: { type: 'integer' },
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
              'Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.',
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
      content: { 'application/json': { schema: GetDailyMetricsTimeSeriesResponseSchema } },
    },
  },
})

export const getV1ParentSearchkeywordsImpressionsMonthlyRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/searchkeywords/impressions/monthly',
  tags: ['locations'],
  description:
    'Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`',
  operationId: 'businessprofileperformance.locations.searchkeywords.impressions.monthly.list',
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
      'monthlyRange.endMonth.day': z
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
            name: 'monthlyRange.endMonth.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'monthlyRange.endMonth.month': z
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
            name: 'monthlyRange.endMonth.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'monthlyRange.endMonth.year': z
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
            name: 'monthlyRange.endMonth.year',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'monthlyRange.startMonth.day': z
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
            name: 'monthlyRange.startMonth.day',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'monthlyRange.startMonth.month': z
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
            name: 'monthlyRange.startMonth.month',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      'monthlyRange.startMonth.year': z
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
            name: 'monthlyRange.startMonth.year',
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
              'Optional. The number of results requested. The default page size is 100. Page size can be set to a maximum of 100.',
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
            description: 'Optional. A token indicating the next paginated result to be returned.',
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
              'Required. The location for which the time series should be fetched. Format: locations/{location_id} where location_id is an unobfuscated listing id.',
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
      content: {
        'application/json': { schema: ListSearchKeywordImpressionsMonthlyResponseSchema },
      },
    },
  },
})
