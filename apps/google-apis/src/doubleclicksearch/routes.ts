import { createRoute, z } from '@hono/zod-openapi'

const AvailabilitySchema = z
  .object({
    advertiserId: z.string().exactOptional().openapi({ description: 'DS advertiser ID.' }),
    agencyId: z.string().exactOptional().openapi({ description: 'DS agency ID.' }),
    availabilityTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time by which all conversions have been uploaded, in epoch millis UTC.',
      }),
    customerId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Customer ID of a client account in the new Search Ads 360 experience.',
      }),
    segmentationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The numeric segmentation identifier (for example, DoubleClick Search Floodlight activity ID).',
      }),
    segmentationName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly segmentation identifier (for example, DoubleClick Search Floodlight activity name).',
      }),
    segmentationType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The segmentation type that this availability is for (its default value is `FLOODLIGHT`).',
      }),
  })
  .openapi({
    description: 'A message containing availability data relevant to DoubleClick Search.',
    required: [],
  })
  .openapi('Availability')

const CustomDimensionSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Custom dimension name.' }),
    value: z.string().exactOptional().openapi({ description: 'Custom dimension value.' }),
  })
  .openapi({ description: 'A message containing the custom dimension.', required: [] })
  .openapi('CustomDimension')

const CustomMetricSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'Custom metric name.' }),
    value: z.float64().exactOptional().openapi({ description: 'Custom metric numeric value.' }),
  })
  .openapi({ description: 'A message containing the custom metric.', required: [] })
  .openapi('CustomMetric')

const ConversionSchema = z
  .object({
    adGroupId: z.string().exactOptional().openapi({ description: 'DS ad group ID.' }),
    adId: z.string().exactOptional().openapi({ description: 'DS ad ID.' }),
    advertiserId: z.string().exactOptional().openapi({ description: 'DS advertiser ID.' }),
    agencyId: z.string().exactOptional().openapi({ description: 'DS agency ID.' }),
    attributionModel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Available to advertisers only after contacting DoubleClick Search customer support.',
      }),
    campaignId: z.string().exactOptional().openapi({ description: 'DS campaign ID.' }),
    channel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Sales channel for the product. Acceptable values are: - "`local`": a physical store - "`online`": an online store ',
      }),
    clickId: z.string().exactOptional().openapi({ description: 'DS click ID for the conversion.' }),
    conversionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "For offline conversions, advertisers provide this ID. Advertisers can specify any ID that is meaningful to them. Each conversion in a request must specify a unique ID, and the combination of ID and timestamp must be unique amongst all conversions within the advertiser. For online conversions, DS copies the `dsConversionId` or `floodlightOrderId` into this property depending on the advertiser's Floodlight instructions.",
      }),
    conversionModifiedTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time at which the conversion was last modified, in epoch millis UTC.',
      }),
    conversionTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time at which the conversion took place, in epoch millis UTC.',
      }),
    countMillis: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Available to advertisers only after contacting DoubleClick Search customer support.',
      }),
    criterionId: z.string().exactOptional().openapi({ description: 'DS criterion (keyword) ID.' }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The currency code for the conversion's revenue. Should be in ISO 4217 alphabetic (3-char) format.",
      }),
    customDimension: z
      .array(CustomDimensionSchema)
      .exactOptional()
      .openapi({
        description:
          'Custom dimensions for the conversion, which can be used to filter data in a report.',
      }),
    customMetric: z
      .array(CustomMetricSchema)
      .exactOptional()
      .openapi({ description: 'Custom metrics for the conversion.' }),
    customerId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Customer ID of a client account in the new Search Ads 360 experience.',
      }),
    deviceType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of device on which the conversion occurred.' }),
    dsConversionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID that DoubleClick Search generates for each conversion.' }),
    engineAccountId: z.string().exactOptional().openapi({ description: 'DS engine account ID.' }),
    floodlightOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The Floodlight order ID provided by the advertiser for the conversion.',
      }),
    inventoryAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID that DS generates and uses to uniquely identify the inventory account that contains the product.',
      }),
    productCountry: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The country registered for the Merchant Center feed that contains the product. Use an ISO 3166 code to specify a country.',
      }),
    productGroupId: z.string().exactOptional().openapi({ description: 'DS product group ID.' }),
    productId: z.string().exactOptional().openapi({ description: 'The product ID (SKU).' }),
    productLanguage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language registered for the Merchant Center feed that contains the product. Use an ISO 639 code to specify a language.',
      }),
    quantityMillis: z
      .string()
      .exactOptional()
      .openapi({ description: 'The quantity of this conversion, in millis.' }),
    revenueMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The revenue amount of this `TRANSACTION` conversion, in micros (value multiplied by 1000000, no decimal). For example, to specify a revenue value of "10" enter "10000000" (10 million) in your request.',
      }),
    segmentationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The numeric segmentation identifier (for example, DoubleClick Search Floodlight activity ID).',
      }),
    segmentationName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The friendly segmentation identifier (for example, DoubleClick Search Floodlight activity name).',
      }),
    segmentationType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The segmentation type of this conversion (for example, `FLOODLIGHT`).',
      }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The state of the conversion, that is, either `ACTIVE` or `REMOVED`. Note: state DELETED is deprecated.',
      }),
    storeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the local store for which the product was advertised. Applicable only when the channel is "`local`".',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the conversion, that is, either `ACTION` or `TRANSACTION`. An `ACTION` conversion is an action by the user that has no monetarily quantifiable value, while a `TRANSACTION` conversion is an action that does have a monetarily quantifiable value. Examples are email list signups (`ACTION`) versus ecommerce purchases (`TRANSACTION`).',
      }),
  })
  .openapi({
    description: 'A conversion containing data relevant to DoubleClick Search.',
    required: [],
  })
  .openapi('Conversion')

const ConversionListSchema = z
  .object({
    conversion: z
      .array(ConversionSchema)
      .exactOptional()
      .openapi({ description: 'The conversions being requested.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies this as a ConversionList resource. Value: the fixed string doubleclicksearch#conversionList.',
      }),
  })
  .openapi({ description: 'A list of conversions.', required: [] })
  .openapi('ConversionList')

const IdMappingFileSchema = z
  .object({})
  .openapi({
    description:
      'File returned to https://developers.google.com/search-ads/v2/reference/reports/getIdMappingFile.',
  })
  .openapi('IdMappingFile')

const ReportApiColumnSpecSchema = z
  .object({
    columnName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of a DoubleClick Search column to include in the report.' }),
    customDimensionName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Segments a report by a custom dimension. The report must be scoped to an advertiser or lower, and the custom dimension must already be set up in DoubleClick Search. The custom dimension name, which appears in DoubleClick Search, is case sensitive.\\ If used in a conversion report, returns the value of the specified custom dimension for the given conversion, if set. This column does not segment the conversion report.',
      }),
    customMetricName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of a custom metric to include in the report. The report must be scoped to an advertiser or lower, and the custom metric must already be set up in DoubleClick Search. The custom metric name, which appears in DoubleClick Search, is case sensitive.',
      }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Inclusive day in YYYY-MM-DD format. When provided, this overrides the overall time range of the report for this column only. Must be provided together with `startDate`.',
      }),
    groupByColumn: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Synchronous report only. Set to `true` to group by this column. Defaults to `false`.',
      }),
    headerText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text used to identify this column in the report output; defaults to `columnName` or `savedColumnName` when not specified. This can be used to prevent collisions between DoubleClick Search columns and saved columns with the same name.',
      }),
    platformSource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The platform that is used to provide data for the custom dimension. Acceptable values are "floodlight".',
      }),
    productReportPerspective: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Returns metrics only for a specific type of product activity. Accepted values are: - "`sold`": returns metrics only for products that were sold - "`advertised`": returns metrics only for products that were advertised in a Shopping campaign, and that might or might not have been sold ',
      }),
    savedColumnName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of a saved column to include in the report. The report must be scoped at advertiser or lower, and this saved column must already be created in the DoubleClick Search UI.',
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Inclusive date in YYYY-MM-DD format. When provided, this overrides the overall time range of the report for this column only. Must be provided together with `endDate`.',
      }),
  })
  .openapi({
    description: 'A request object used to create a DoubleClick Search report.',
    required: [],
  })
  .openapi('ReportApiColumnSpec')

const ReportRequestSchema = z
  .object({
    columns: z
      .array(ReportApiColumnSpecSchema)
      .exactOptional()
      .openapi({
        description:
          'The columns to include in the report. This includes both DoubleClick Search columns and saved columns. For DoubleClick Search columns, only the `columnName` parameter is required. For saved columns only the `savedColumnName` parameter is required. Both `columnName` and `savedColumnName` cannot be set in the same stanza.\\ The maximum number of columns per request is 300.',
      }),
    downloadFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Format that the report should be returned in. Currently `csv` or `tsv` is supported.',
      }),
    filters: z
      .array(
        z
          .object({
            column: ReportApiColumnSpecSchema.exactOptional().openapi({
              description:
                'Column to perform the filter on. This can be a DoubleClick Search column or a saved column.',
            }),
            operator: z
              .string()
              .exactOptional()
              .openapi({
                description:
                  'Operator to use in the filter. See the filter reference for a list of available operators.',
              }),
            values: z
              .array(z.any())
              .exactOptional()
              .openapi({
                description:
                  'A list of values to filter the column value against.\\ The maximum number of filter values per request is 300.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of filters to be applied to the report.\\ The maximum number of filters per request is 300.',
      }),
    includeDeletedEntities: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines if removed entities should be included in the report. Defaults to `false`. Deprecated, please use `includeRemovedEntities` instead.',
      }),
    includeRemovedEntities: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines if removed entities should be included in the report. Defaults to `false`.',
      }),
    maxRowsPerFile: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Asynchronous report only. The maximum number of rows per report file. A large report is split into many files based on this field. Acceptable values are `1000000` to `100000000`, inclusive.',
      }),
    orderBy: z
      .array(
        z
          .object({
            column: ReportApiColumnSpecSchema.exactOptional().openapi({
              description:
                'Column to perform the sort on. This can be a DoubleClick Search-defined column or a saved column.',
            }),
            sortOrder: z
              .string()
              .exactOptional()
              .openapi({
                description: 'The sort direction, which is either `ascending` or `descending`.',
              }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Synchronous report only. A list of columns and directions defining sorting to be performed on the report rows.\\ The maximum number of orderings per request is 300.',
      }),
    reportScope: z
      .object({
        adGroupId: z.string().exactOptional().openapi({ description: 'DS ad group ID.' }),
        adId: z.string().exactOptional().openapi({ description: 'DS ad ID.' }),
        advertiserId: z.string().exactOptional().openapi({ description: 'DS advertiser ID.' }),
        agencyId: z.string().exactOptional().openapi({ description: 'DS agency ID.' }),
        campaignId: z.string().exactOptional().openapi({ description: 'DS campaign ID.' }),
        engineAccountId: z
          .string()
          .exactOptional()
          .openapi({ description: 'DS engine account ID.' }),
        keywordId: z.string().exactOptional().openapi({ description: 'DS keyword ID.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required.',
        required: [],
      }),
    reportType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Determines the type of rows that are returned in the report. For example, if you specify `reportType: keyword`, each row in the report will contain data about a keyword. See the [Types of Reports](/search-ads/v2/report-types/) reference for the columns that are available for each type.',
      }),
    rowCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Synchronous report only. The maximum number of rows to return; additional rows are dropped. Acceptable values are `0` to `10000`, inclusive. Defaults to `10000`.',
      }),
    startRow: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Synchronous report only. Zero-based index of the first row to return. Acceptable values are `0` to `50000`, inclusive. Defaults to `0`.',
      }),
    statisticsCurrency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the currency in which monetary will be returned. Possible values are: `usd`, `agency` (valid if the report is scoped to agency or lower), `advertiser` (valid if the report is scoped to * advertiser or lower), or `account` (valid if the report is scoped to engine account or lower).',
      }),
    timeRange: z
      .object({
        changedAttributesSinceTimestamp: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Inclusive UTC timestamp in RFC format, e.g., `2013-07-16T10:16:23.555Z`. See additional references on how changed attribute reports work.',
          }),
        changedMetricsSinceTimestamp: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Inclusive UTC timestamp in RFC format, e.g., `2013-07-16T10:16:23.555Z`. See additional references on how changed metrics reports work.',
          }),
        endDate: z
          .string()
          .exactOptional()
          .openapi({ description: 'Inclusive date in YYYY-MM-DD format.' }),
        startDate: z
          .string()
          .exactOptional()
          .openapi({ description: 'Inclusive date in YYYY-MM-DD format.' }),
      })
      .exactOptional()
      .openapi({
        description:
          'If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range.',
        required: [],
      }),
    verifySingleTimeZone: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If `true`, the report would only be created if all the requested stat data are sourced from a single timezone. Defaults to `false`.',
      }),
  })
  .openapi({
    description: 'A request object used to create a DoubleClick Search report.',
    required: [],
  })
  .openapi('ReportRequest')

const ReportRowSchema = z
  .record(
    z.string(),
    z
      .any()
      .openapi({
        description:
          'Indicates the columns that are represented in this row. That is, each key corresponds to a column with a non-empty cell in this row.',
      }),
  )
  .openapi({ description: 'A row in a DoubleClick Search report.' })
  .openapi('ReportRow')

const ReportSchema = z
  .object({
    files: z
      .array(
        z
          .object({
            byteCount: z
              .string()
              .exactOptional()
              .openapi({ description: 'The size of this report file in bytes.' }),
            url: z
              .string()
              .exactOptional()
              .openapi({ description: 'Use this url to download the report file.' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional()
      .openapi({
        description:
          'Asynchronous report only. Contains a list of generated report files once the report has successfully completed.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Asynchronous report only. Id of the report.' }),
    isReportReady: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Asynchronous report only. True if and only if the report has completed successfully and the report files are ready to be downloaded.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies this as a Report resource. Value: the fixed string `doubleclicksearch#report`.',
      }),
    request: ReportRequestSchema.exactOptional().openapi({
      description:
        'The request that created the report. Optional fields not specified in the original request are filled with default values.',
    }),
    rowCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The number of report rows generated by the report, not including headers.',
      }),
    rows: z
      .array(ReportRowSchema)
      .exactOptional()
      .openapi({ description: 'Synchronous report only. Generated report rows.' }),
    statisticsCurrencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The currency code of all monetary values produced in the report, including values that are set by users (e.g., keyword bid settings) and metrics (e.g., cost and revenue). The currency code of a report is determined by the `statisticsCurrency` field of the report request.',
      }),
    statisticsTimeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If all statistics of the report are sourced from the same time zone, this would be it. Otherwise the field is unset.',
      }),
  })
  .openapi({
    description:
      'A DoubleClick Search report. This object contains the report request, some report metadata such as currency code, and the generated report rows or report files.',
    required: [],
  })
  .openapi('Report')

const SavedColumnSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies this as a SavedColumn resource. Value: the fixed string doubleclicksearch#savedColumn.',
      }),
    savedColumnName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the saved column.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of data this saved column will produce.' }),
  })
  .openapi({ description: 'A saved column', required: [] })
  .openapi('SavedColumn')

const SavedColumnListSchema = z
  .object({
    items: z
      .array(SavedColumnSchema)
      .exactOptional()
      .openapi({ description: 'The saved columns being requested.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies this as a SavedColumnList resource. Value: the fixed string doubleclicksearch#savedColumnList.',
      }),
  })
  .openapi({
    description:
      "A list of saved columns. Advertisers create saved columns to report on Floodlight activities, Google Analytics goals, or custom KPIs. To request reports with saved columns, you'll need the saved column names that are available from this list.",
    required: [],
  })
  .openapi('SavedColumnList')

const UpdateAvailabilityRequestSchema = z
  .object({
    availabilities: z
      .array(AvailabilitySchema)
      .exactOptional()
      .openapi({ description: 'The availabilities being requested.' }),
  })
  .openapi({ description: 'The request to update availability.', required: [] })
  .openapi('UpdateAvailabilityRequest')

const UpdateAvailabilityResponseSchema = z
  .object({
    availabilities: z
      .array(AvailabilitySchema)
      .exactOptional()
      .openapi({ description: 'The availabilities being returned.' }),
  })
  .openapi({ description: 'The response to a update availability request.', required: [] })
  .openapi('UpdateAvailabilityResponse')

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
        'https://www.googleapis.com/auth/doubleclicksearch':
          'View and manage your advertising data in DoubleClick Search',
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
        'https://www.googleapis.com/auth/doubleclicksearch':
          'View and manage your advertising data in DoubleClick Search',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdEngineEngineAccountIdConversionRoute =
  createRoute({
    method: 'get',
    path: '/doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/engine/{engineAccountId}/conversion',
    tags: ['conversion'],
    description: 'Retrieves a list of conversions from a DoubleClick Search engine account.',
    operationId: 'doubleclicksearch.conversion.get',
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
        endDate: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(20091101).max(99991231),
          )
          .openapi({
            param: {
              description:
                'Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.',
              in: 'query',
              name: 'endDate',
              required: true,
              schema: { maximum: 99991231, minimum: 20091101, type: 'integer' },
            },
          }),
        rowCount: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(1).max(1000),
          )
          .openapi({
            param: {
              description: 'The number of conversions to return per call.',
              in: 'query',
              name: 'rowCount',
              required: true,
              schema: { maximum: 1000, minimum: 1, type: 'integer' },
            },
          }),
        startDate: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int().min(20091101).max(99991231),
          )
          .openapi({
            param: {
              description:
                'First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.',
              in: 'query',
              name: 'startDate',
              required: true,
              schema: { maximum: 99991231, minimum: 20091101, type: 'integer' },
            },
          }),
        startRow: z
          .preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            z.int(),
          )
          .openapi({
            param: {
              description: 'The 0-based starting index for retrieving conversions results.',
              in: 'query',
              name: 'startRow',
              required: true,
              schema: { type: 'integer' },
            },
          }),
        adGroupId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Numeric ID of the ad group.',
              in: 'query',
              name: 'adGroupId',
              schema: { type: 'string' },
              required: false,
            },
          }),
        adId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Numeric ID of the ad.',
              in: 'query',
              name: 'adId',
              schema: { type: 'string' },
              required: false,
            },
          }),
        campaignId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Numeric ID of the campaign.',
              in: 'query',
              name: 'campaignId',
              schema: { type: 'string' },
              required: false,
            },
          }),
        criterionId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Numeric ID of the criterion.',
              in: 'query',
              name: 'criterionId',
              schema: { type: 'string' },
              required: false,
            },
          }),
        customerId: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              description: 'Customer ID of a client account in the new Search Ads 360 experience.',
              in: 'query',
              name: 'customerId',
              schema: { type: 'string' },
              required: false,
            },
          }),
      }),
      params: z.object({
        agencyId: z
          .string()
          .openapi({
            param: {
              description: 'Numeric ID of the agency.',
              in: 'path',
              name: 'agencyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Numeric ID of the advertiser.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        engineAccountId: z
          .string()
          .openapi({
            param: {
              description: 'Numeric ID of the engine account.',
              in: 'path',
              name: 'engineAccountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: ConversionListSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/doubleclicksearch'],
        Oauth2c: ['https://www.googleapis.com/auth/doubleclicksearch'],
      },
    ],
  })

export const getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdIdmappingRoute = createRoute(
  {
    method: 'get',
    path: '/doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/idmapping',
    tags: ['reports'],
    description:
      'Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.',
    operationId: 'doubleclicksearch.reports.getIdMappingFile',
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
        agencyId: z
          .string()
          .openapi({
            param: {
              description: 'Legacy SA360 agency ID.',
              in: 'path',
              name: 'agencyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'Legacy SA360 advertiser ID.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: IdMappingFileSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/doubleclicksearch'],
        Oauth2c: ['https://www.googleapis.com/auth/doubleclicksearch'],
      },
    ],
  },
)

export const getDoubleclicksearchV2AgencyAgencyIdAdvertiserAdvertiserIdSavedcolumnsRoute =
  createRoute({
    method: 'get',
    path: '/doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/savedcolumns',
    tags: ['savedColumns'],
    description: 'Retrieve the list of saved columns for a specified advertiser.',
    operationId: 'doubleclicksearch.savedColumns.list',
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
        agencyId: z
          .string()
          .openapi({
            param: {
              description: 'DS ID of the agency.',
              in: 'path',
              name: 'agencyId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        advertiserId: z
          .string()
          .openapi({
            param: {
              description: 'DS ID of the advertiser.',
              in: 'path',
              name: 'advertiserId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: SavedColumnListSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/doubleclicksearch'],
        Oauth2c: ['https://www.googleapis.com/auth/doubleclicksearch'],
      },
    ],
  })

export const putDoubleclicksearchV2ConversionRoute = createRoute({
  method: 'put',
  path: '/doubleclicksearch/v2/conversion',
  tags: ['conversion'],
  description: 'Updates a batch of conversions in DoubleClick Search.',
  operationId: 'doubleclicksearch.conversion.update',
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
    body: { content: { 'application/json': { schema: ConversionListSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConversionListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/doubleclicksearch'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclicksearch'],
    },
  ],
})

export const postDoubleclicksearchV2ConversionRoute = createRoute({
  method: 'post',
  path: '/doubleclicksearch/v2/conversion',
  tags: ['conversion'],
  description: 'Inserts a batch of new conversions into DoubleClick Search.',
  operationId: 'doubleclicksearch.conversion.insert',
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
    body: { content: { 'application/json': { schema: ConversionListSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConversionListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/doubleclicksearch'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclicksearch'],
    },
  ],
})

export const postDoubleclicksearchV2ConversionUpdateAvailabilityRoute = createRoute({
  method: 'post',
  path: '/doubleclicksearch/v2/conversion/updateAvailability',
  tags: ['conversion'],
  description:
    'Updates the availabilities of a batch of floodlight activities in DoubleClick Search.',
  operationId: 'doubleclicksearch.conversion.updateAvailability',
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
    body: { content: { 'application/json': { schema: UpdateAvailabilityRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UpdateAvailabilityResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/doubleclicksearch'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclicksearch'],
    },
  ],
})

export const getDoubleclicksearchV2CustomerCustomerIdConversionRoute = createRoute({
  method: 'get',
  path: '/doubleclicksearch/v2/customer/{customerId}/conversion',
  tags: ['conversion'],
  description: 'Retrieves a list of conversions from a DoubleClick Search engine account.',
  operationId: 'doubleclicksearch.conversion.getByCustomerId',
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
      endDate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(20091101).max(99991231),
        )
        .openapi({
          param: {
            description:
              'Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.',
            in: 'query',
            name: 'endDate',
            required: true,
            schema: { maximum: 99991231, minimum: 20091101, type: 'integer' },
          },
        }),
      rowCount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .openapi({
          param: {
            description: 'The number of conversions to return per call.',
            in: 'query',
            name: 'rowCount',
            required: true,
            schema: { maximum: 1000, minimum: 1, type: 'integer' },
          },
        }),
      startDate: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(20091101).max(99991231),
        )
        .openapi({
          param: {
            description:
              'First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.',
            in: 'query',
            name: 'startDate',
            required: true,
            schema: { maximum: 99991231, minimum: 20091101, type: 'integer' },
          },
        }),
      startRow: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            description: 'The 0-based starting index for retrieving conversions results.',
            in: 'query',
            name: 'startRow',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      adGroupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Numeric ID of the ad group.',
            in: 'query',
            name: 'adGroupId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      adId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Numeric ID of the ad.',
            in: 'query',
            name: 'adId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      advertiserId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Numeric ID of the advertiser.',
            in: 'query',
            name: 'advertiserId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      agencyId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Numeric ID of the agency.',
            in: 'query',
            name: 'agencyId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      campaignId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Numeric ID of the campaign.',
            in: 'query',
            name: 'campaignId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      criterionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Numeric ID of the criterion.',
            in: 'query',
            name: 'criterionId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      engineAccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Numeric ID of the engine account.',
            in: 'query',
            name: 'engineAccountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      customerId: z
        .string()
        .openapi({
          param: {
            description: 'Customer ID of a client account in the new Search Ads 360 experience.',
            in: 'path',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConversionListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/doubleclicksearch'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclicksearch'],
    },
  ],
})

export const postDoubleclicksearchV2ReportsRoute = createRoute({
  method: 'post',
  path: '/doubleclicksearch/v2/reports',
  tags: ['reports'],
  description: 'Inserts a report request into the reporting system.',
  operationId: 'doubleclicksearch.reports.request',
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
    body: { content: { 'application/json': { schema: ReportRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/doubleclicksearch'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclicksearch'],
    },
  ],
})

export const postDoubleclicksearchV2ReportsGenerateRoute = createRoute({
  method: 'post',
  path: '/doubleclicksearch/v2/reports/generate',
  tags: ['reports'],
  description: 'Generates and returns a report immediately.',
  operationId: 'doubleclicksearch.reports.generate',
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
    body: { content: { 'application/json': { schema: ReportRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/doubleclicksearch'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclicksearch'],
    },
  ],
})

export const getDoubleclicksearchV2ReportsReportIdRoute = createRoute({
  method: 'get',
  path: '/doubleclicksearch/v2/reports/{reportId}',
  tags: ['reports'],
  description: 'Polls for the status of a report request.',
  operationId: 'doubleclicksearch.reports.get',
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
      reportId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the report request being polled.',
            in: 'path',
            name: 'reportId',
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
      Oauth2: ['https://www.googleapis.com/auth/doubleclicksearch'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclicksearch'],
    },
  ],
})

export const getDoubleclicksearchV2ReportsReportIdFilesReportFragmentRoute = createRoute({
  method: 'get',
  path: '/doubleclicksearch/v2/reports/{reportId}/files/{reportFragment}',
  tags: ['reports'],
  description: 'Downloads a report file encoded in UTF-8.',
  operationId: 'doubleclicksearch.reports.getFile',
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
      reportId: z
        .string()
        .openapi({
          param: {
            description: 'ID of the report.',
            in: 'path',
            name: 'reportId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      reportFragment: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .openapi({
          param: {
            description: 'The index of the report fragment to download.',
            in: 'path',
            name: 'reportFragment',
            required: true,
            schema: { minimum: 0, type: 'integer' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/doubleclicksearch'],
      Oauth2c: ['https://www.googleapis.com/auth/doubleclicksearch'],
    },
  ],
})
