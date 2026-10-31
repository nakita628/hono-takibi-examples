import { createRoute, z } from '@hono/zod-openapi'

const BinSchema = z
  .object({
    density: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The proportion of users that experienced this bin's value for the given metric.",
      }),
    end: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'End is the end of the data bin. If end is not populated, then the bin has no end and is valid from start to +inf.',
      }),
    start: z
      .any()
      .exactOptional()
      .openapi({ description: 'Start is the beginning of the data bin.' }),
  })
  .openapi({
    description:
      'A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin\'s start and end values are given in the value type of the metric it represents. For example, "first contentful paint" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, "cumulative layout shift" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type.',
    required: [],
  })
  .openapi('Bin')

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

const CollectionPeriodSchema = z
  .object({
    firstDate: DateSchema.exactOptional().openapi({
      description: 'The first day in the collection period, inclusive.',
    }),
    lastDate: DateSchema.exactOptional().openapi({
      description: 'The last day in the collection period, inclusive.',
    }),
  })
  .openapi({
    description: 'The collection period is a date range which includes the `first` and `last` day.',
    required: [],
  })
  .openapi('CollectionPeriod')

const HistoryKeySchema = z
  .object({
    formFactor: z
      .enum(['ALL_FORM_FACTORS', 'PHONE', 'DESKTOP', 'TABLET'])
      .exactOptional()
      .openapi({
        description:
          'The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned.',
      }),
    origin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Origin specifies the origin that this record is for. Note: When specifying an origin, data for loads under this origin over all pages are aggregated into origin level user experience data.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Url specifies a specific url that this record is for. This url should be normalized, following the normalization actions taken in the request to increase the chances of successful lookup. Note: When specifying a "url" only data for that specific url will be aggregated.',
      }),
  })
  .openapi({
    description: 'Key defines all the dimensions that identify this record as unique.',
    required: [],
  })
  .openapi('HistoryKey')

const TimeseriesBinSchema = z
  .object({
    densities: z
      .array(z.float64())
      .exactOptional()
      .openapi({
        description:
          "The proportion of users that experienced this bin's value for the given metric in a given collection period; the index for each of these entries corresponds to an entry in the CollectionPeriods field in the HistoryRecord message, which describes when the density was observed in the field. Thus, the length of this list of densities is equal to the length of the CollectionPeriods field in the HistoryRecord message.",
      }),
    end: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'End is the end of the data bin. If end is not populated, then the bin has no end and is valid from start to +inf.',
      }),
    start: z
      .any()
      .exactOptional()
      .openapi({ description: 'Start is the beginning of the data bin.' }),
  })
  .openapi({
    description:
      'A bin is a discrete portion of data spanning from start to end, or if no end is given, then from start to +inf. A bin\'s start and end values are given in the value type of the metric it represents. For example, "first contentful paint" is measured in milliseconds and exposed as ints, therefore its metric bins will use int32s for its start and end types. However, "cumulative layout shift" is measured in unitless decimals and is exposed as a decimal encoded as a string, therefore its metric bins will use strings for its value type.',
    required: [],
  })
  .openapi('TimeseriesBin')

const TimeseriesPercentilesSchema = z
  .object({
    p75s: z
      .array(z.any())
      .exactOptional()
      .openapi({
        description:
          '75% of users experienced the given metric at or below this value. The length of this list of densities is equal to the length of the CollectionPeriods field in the HistoryRecord message, which describes when the density was observed in the field.',
      }),
  })
  .openapi({
    description:
      "Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users.",
    required: [],
  })
  .openapi('TimeseriesPercentiles')

const MetricTimeseriesSchema = z
  .object({
    histogramTimeseries: z
      .array(TimeseriesBinSchema)
      .exactOptional()
      .openapi({
        description:
          'The histogram of user experiences for a metric. The histogram will have at least one bin and the densities of all bins will add up to ~1, for each timeseries entry.',
      }),
    percentilesTimeseries: TimeseriesPercentilesSchema.exactOptional().openapi({
      description:
        'Commonly useful percentiles of the Metric. The value type for the percentiles will be the same as the value types given for the Histogram bins.',
    }),
  })
  .openapi({
    description:
      'A `metric timeseries` is a set of user experience data for a single web performance metric, like "first contentful paint". It contains a summary histogram of real world Chrome usage as a series of `bins`, where each bin has density values for a particular time period.',
    required: [],
  })
  .openapi('MetricTimeseries')

const HistoryRecordSchema = z
  .object({
    collectionPeriods: z
      .array(CollectionPeriodSchema)
      .exactOptional()
      .openapi({
        description:
          'The collection periods indicate when each of the data points reflected in the time series data in metrics was collected. Note that all the time series share the same collection periods, and it is enforced in the CrUX pipeline that every time series has the same number of data points.',
      }),
    key: HistoryKeySchema.exactOptional().openapi({
      description:
        'Key defines all of the unique querying parameters needed to look up a user experience history record.',
    }),
    metrics: z
      .record(z.string(), MetricTimeseriesSchema)
      .exactOptional()
      .openapi({
        description:
          'Metrics is the map of user experience time series data available for the record defined in the key field. Metrics are keyed on the metric name. Allowed key values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]',
      }),
  })
  .openapi({
    description:
      'HistoryRecord is a timeseries of Chrome UX Report data. It contains user experience statistics for a single url pattern and a set of dimensions.',
    required: [],
  })
  .openapi('HistoryRecord')

const KeySchema = z
  .object({
    effectiveConnectionType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The effective connection type is the general connection class that all users experienced for this record. This field uses the values ["offline", "slow-2G", "2G", "3G", "4G"] as specified in: https://wicg.github.io/netinfo/#effective-connection-types If the effective connection type is unspecified, then aggregated data over all effective connection types will be returned.',
      }),
    formFactor: z
      .enum(['ALL_FORM_FACTORS', 'PHONE', 'DESKTOP', 'TABLET'])
      .exactOptional()
      .openapi({
        description:
          'The form factor is the device class that all users used to access the site for this record. If the form factor is unspecified, then aggregated data over all form factors will be returned.',
      }),
    origin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Origin specifies the origin that this record is for. Note: When specifying an origin, data for loads under this origin over all pages are aggregated into origin level user experience data.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Url specifies a specific url that this record is for. Note: When specifying a "url" only data for that specific url will be aggregated.',
      }),
  })
  .openapi({
    description: 'Key defines all the dimensions that identify this record as unique.',
    required: [],
  })
  .openapi('Key')

const PercentilesSchema = z
  .object({
    p75: z
      .any()
      .exactOptional()
      .openapi({
        description: '75% of users experienced the given metric at or below this value.',
      }),
  })
  .openapi({
    description:
      "Percentiles contains synthetic values of a metric at a given statistical percentile. These are used for estimating a metric's value as experienced by a percentage of users out of the total number of users.",
    required: [],
  })
  .openapi('Percentiles')

const MetricSchema = z
  .object({
    histogram: z
      .array(BinSchema)
      .exactOptional()
      .openapi({
        description:
          'The histogram of user experiences for a metric. The histogram will have at least one bin and the densities of all bins will add up to ~1.',
      }),
    percentiles: PercentilesSchema.exactOptional().openapi({
      description:
        'Commonly useful percentiles of the Metric. The value type for the percentiles will be the same as the value types given for the Histogram bins.',
    }),
  })
  .openapi({
    description:
      'A `metric` is a set of user experience data for a single web performance metric, like "first contentful paint". It contains a summary histogram of real world Chrome usage as a series of `bins`.',
    required: [],
  })
  .openapi('Metric')

const QueryHistoryRequestSchema = z
  .object({
    formFactor: z
      .enum(['ALL_FORM_FACTORS', 'PHONE', 'DESKTOP', 'TABLET'])
      .exactOptional()
      .openapi({
        description:
          "The form factor is a query dimension that specifies the device class that the record's data should belong to. Note: If no form factor is specified, then a special record with aggregated data over all form factors will be returned.",
      }),
    metrics: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The metrics that should be included in the response. If none are specified then any metrics found will be returned. Allowed values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]',
      }),
    origin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The url pattern "origin" refers to a url pattern that is the origin of a website. Examples: "https://example.com", "https://cloud.google.com"',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The url pattern "url" refers to a url pattern that is any arbitrary url. Examples: "https://example.com/", "https://cloud.google.com/why-google-cloud/"',
      }),
  })
  .openapi({
    description:
      'Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience history record.',
    required: [],
  })
  .openapi('QueryHistoryRequest')

const UrlNormalizationSchema = z
  .object({
    normalizedUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL after any normalization actions. This is a valid user experience URL that could reasonably be looked up.',
      }),
    originalUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The original requested URL prior to any normalization actions.' }),
  })
  .openapi({
    description:
      'Object representing the normalization actions taken to normalize a url to achieve a higher chance of successful lookup. These are simple automated changes that are taken when looking up the provided `url_patten` would be known to fail. Complex actions like following redirects are not handled.',
    required: [],
  })
  .openapi('UrlNormalization')

const QueryHistoryResponseSchema = z
  .object({
    record: HistoryRecordSchema.exactOptional().openapi({
      description: 'The record that was found.',
    }),
    urlNormalizationDetails: UrlNormalizationSchema.exactOptional().openapi({
      description:
        'These are details about automated normalization actions that were taken in order to make the requested `url_pattern` valid.',
    }),
  })
  .openapi({
    description:
      'Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryHistoryRequest`. The returned response will have a history record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful.',
    required: [],
  })
  .openapi('QueryHistoryResponse')

const QueryRequestSchema = z
  .object({
    effectiveConnectionType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The effective connection type is a query dimension that specifies the effective network class that the record\'s data should belong to. This field uses the values ["offline", "slow-2G", "2G", "3G", "4G"] as specified in: https://wicg.github.io/netinfo/#effective-connection-types Note: If no effective connection type is specified, then a special record with aggregated data over all effective connection types will be returned.',
      }),
    formFactor: z
      .enum(['ALL_FORM_FACTORS', 'PHONE', 'DESKTOP', 'TABLET'])
      .exactOptional()
      .openapi({
        description:
          "The form factor is a query dimension that specifies the device class that the record's data should belong to. Note: If no form factor is specified, then a special record with aggregated data over all form factors will be returned.",
      }),
    metrics: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The metrics that should be included in the response. If none are specified then any metrics found will be returned. Allowed values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]',
      }),
    origin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The url pattern "origin" refers to a url pattern that is the origin of a website. Examples: "https://example.com", "https://cloud.google.com"',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The url pattern "url" refers to a url pattern that is any arbitrary url. Examples: "https://example.com/", "https://cloud.google.com/why-google-cloud/"',
      }),
  })
  .openapi({
    description:
      'Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience record.',
    required: [],
  })
  .openapi('QueryRequest')

const RecordSchema = z
  .object({
    collectionPeriod: CollectionPeriodSchema.exactOptional().openapi({
      description:
        'The collection period indicates when the data reflected in this record was collected.',
    }),
    key: KeySchema.exactOptional().openapi({
      description:
        'Key defines all of the unique querying parameters needed to look up a user experience record.',
    }),
    metrics: z
      .record(z.string(), MetricSchema)
      .exactOptional()
      .openapi({
        description:
          'Metrics is the map of user experience data available for the record defined in the key field. Metrics are keyed on the metric name. Allowed key values: ["first_contentful_paint", "first_input_delay", "largest_contentful_paint", "cumulative_layout_shift", "experimental_time_to_first_byte", "experimental_interaction_to_next_paint"]',
      }),
  })
  .openapi({
    description:
      'Record is a single Chrome UX report data record. It contains use experience statistics for a single url pattern and set of dimensions.',
    required: [],
  })
  .openapi('Record')

const QueryResponseSchema = z
  .object({
    record: RecordSchema.exactOptional().openapi({ description: 'The record that was found.' }),
    urlNormalizationDetails: UrlNormalizationSchema.exactOptional().openapi({
      description:
        'These are details about automated normalization actions that were taken in order to make the requested `url_pattern` valid.',
    }),
  })
  .openapi({
    description:
      'Response payload sent back to a physical web client. This response contains the record found based on the identiers present in a `QueryRequest`. The returned response will have a record, and sometimes details on normalization actions taken on the request that were necessary to make the request successful.',
    required: [],
  })
  .openapi('QueryResponse')

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

export const postV1RecordsQueryHistoryRecordRoute = createRoute({
  method: 'post',
  path: '/v1/records:queryHistoryRecord',
  tags: ['records'],
  description:
    'Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.',
  operationId: 'chromeuxreport.records.queryHistoryRecord',
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
    body: { content: { 'application/json': { schema: QueryHistoryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QueryHistoryResponseSchema } },
    },
  },
})

export const postV1RecordsQueryRecordRoute = createRoute({
  method: 'post',
  path: '/v1/records:queryRecord',
  tags: ['records'],
  description:
    'Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.',
  operationId: 'chromeuxreport.records.queryRecord',
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
    body: { content: { 'application/json': { schema: QueryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: QueryResponseSchema } },
    },
  },
})
