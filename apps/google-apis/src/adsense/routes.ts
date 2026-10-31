import { createRoute, z } from '@hono/zod-openapi'

type AccountType = {
  creation_time?: string
  id?: string
  kind?: string
  name?: string
  premium?: boolean
  subAccounts?: AccountType[]
  timezone?: string
}

const AccountSchema: z.ZodType<AccountType> = z
  .lazy(() =>
    z
      .object({
        creation_time: z.string().exactOptional(),
        id: z
          .string()
          .exactOptional()
          .openapi({ description: 'Unique identifier of this account.' }),
        kind: z
          .string()
          .default('adsense#account')
          .exactOptional()
          .openapi({ description: 'Kind of resource this is, in this case adsense#account.' }),
        name: z.string().exactOptional().openapi({ description: 'Name of this account.' }),
        premium: z
          .boolean()
          .exactOptional()
          .openapi({ description: 'Whether this account is premium.' }),
        subAccounts: z
          .array(AccountSchema)
          .exactOptional()
          .openapi({ description: 'Sub accounts of the this account.' }),
        timezone: z
          .string()
          .exactOptional()
          .openapi({ description: 'AdSense timezone of this account.' }),
      })
      .openapi({ required: [] }),
  )
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
      .default('adsense#accounts')
      .exactOptional()
      .openapi({ description: 'Kind of list this is, in this case adsense#accounts.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Continuation token used to page through accounts. To retrieve the next page of results, set the next request\'s "pageToken" value to this.',
      }),
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
      .default('adsense#adClient')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is, in this case adsense#adClient.' }),
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
      .default('adsense#adClients')
      .exactOptional()
      .openapi({ description: 'Kind of list this is, in this case adsense#adClients.' }),
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
    adCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Auto ad code snippet. The ad code snippet.' }),
    ampBody: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The AMP Auto ad code snippet that goes in the body of an AMP page.',
      }),
    ampHead: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The AMP Auto ad code snippet that goes in the head of an AMP page.',
      }),
    kind: z
      .string()
      .default('adsense#adCode')
      .exactOptional()
      .openapi({ description: 'Kind this is, in this case adsense#adCode.' }),
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
          'The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.',
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
        family: z.string().exactOptional().openapi({ description: 'The family of the font.' }),
        size: z.string().exactOptional().openapi({ description: 'The size of the font.' }),
      })
      .exactOptional()
      .openapi({ description: 'The font which is included in the style.', required: [] }),
    kind: z
      .string()
      .default('adsense#adStyle')
      .exactOptional()
      .openapi({ description: 'Kind this is, in this case adsense#adStyle.' }),
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
              .openapi({ description: 'Color to use when type is set to COLOR.' }),
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
        size: z.string().exactOptional().openapi({ description: 'Size of this ad unit.' }),
        type: z.string().exactOptional().openapi({ description: 'Type of this ad unit.' }),
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
    feedAdsSettings: z
      .object({
        adPosition: z
          .string()
          .exactOptional()
          .openapi({ description: 'The position of the ads relative to the feed entries.' }),
        frequency: z
          .int32()
          .exactOptional()
          .openapi({
            description:
              'The frequency at which ads should appear in the feed (i.e. every N entries).',
          }),
        minimumWordCount: z
          .int32()
          .exactOptional()
          .openapi({
            description: 'The minimum length an entry should be in order to have attached ads.',
          }),
        type: z
          .string()
          .exactOptional()
          .openapi({ description: 'The type of ads which should appear.' }),
      })
      .exactOptional()
      .openapi({ description: 'Settings specific to feed ads (AFF) - deprecated.', required: [] }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.',
      }),
    kind: z
      .string()
      .default('adsense#adUnit')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is, in this case adsense#adUnit.' }),
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
        description: 'Settings specific to WAP mobile content ads (AFMC) - deprecated.',
        required: [],
      }),
    name: z.string().exactOptional().openapi({ description: 'Name of this ad unit.' }),
    savedStyleId: z
      .string()
      .exactOptional()
      .openapi({
        description: "ID of the saved ad style which holds this ad unit's style information.",
      }),
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
      .default('adsense#adUnits')
      .exactOptional()
      .openapi({ description: 'Kind of list this is, in this case adsense#adUnits.' }),
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

const AdsenseReportsGenerateResponseSchema = z
  .object({
    averages: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty.',
      }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The requested end date in yyyy-mm-dd format.' }),
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
      .default('adsense#report')
      .exactOptional()
      .openapi({ description: 'Kind this is, in this case adsense#report.' }),
    rows: z
      .array(z.array(z.string()))
      .exactOptional()
      .openapi({
        description:
          'The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers.',
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The requested start date in yyyy-mm-dd format.' }),
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
  .openapi('AdsenseReportsGenerateResponse')

const AlertSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of this alert. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.',
      }),
    isDismissible: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether this alert can be dismissed.' }),
    kind: z
      .string()
      .default('adsense#alert')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is, in this case adsense#alert.' }),
    message: z.string().exactOptional().openapi({ description: 'The localized alert message.' }),
    severity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Severity of this alert. Possible values: INFO, WARNING, SEVERE.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of this alert. Possible values: SELF_HOLD, MIGRATED_TO_BILLING3, ADDRESS_PIN_VERIFICATION, PHONE_PIN_VERIFICATION, CORPORATE_ENTITY, GRAYLISTED_PUBLISHER, API_HOLD.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Alert')

const AlertsSchema = z
  .object({
    items: z
      .array(AlertSchema)
      .exactOptional()
      .openapi({ description: 'The alerts returned in this list response.' }),
    kind: z
      .string()
      .default('adsense#alerts')
      .exactOptional()
      .openapi({ description: 'Kind of list this is, in this case adsense#alerts.' }),
  })
  .openapi({ required: [] })
  .openapi('Alerts')

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
      .default('adsense#customChannel')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is, in this case adsense#customChannel.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of this custom channel.' }),
    targetingInfo: z
      .object({
        adsAppearOn: z
          .string()
          .exactOptional()
          .openapi({ description: 'The name used to describe this channel externally.' }),
        description: z
          .string()
          .exactOptional()
          .openapi({ description: 'The external description of the channel.' }),
        location: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The locations in which ads appear. (Only valid for content and mobile content ads (deprecated)). Acceptable values for content ads are: TOP_LEFT, TOP_CENTER, TOP_RIGHT, MIDDLE_LEFT, MIDDLE_CENTER, MIDDLE_RIGHT, BOTTOM_LEFT, BOTTOM_CENTER, BOTTOM_RIGHT, MULTIPLE_LOCATIONS. Acceptable values for mobile content ads (deprecated) are: TOP, MIDDLE, BOTTOM, MULTIPLE_LOCATIONS.',
          }),
        siteLanguage: z
          .string()
          .exactOptional()
          .openapi({ description: 'The language of the sites ads will be displayed on.' }),
      })
      .exactOptional()
      .openapi({
        description: 'The targeting information of this custom channel, if activated.',
        required: [],
      }),
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
      .default('adsense#customChannels')
      .exactOptional()
      .openapi({ description: 'Kind of list this is, in this case adsense#customChannels.' }),
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

const ReportingMetadataEntrySchema = z
  .object({
    compatibleDimensions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'For metrics this is a list of dimension IDs which the metric is compatible with, for dimensions it is a list of compatibility groups the dimension belongs to.',
      }),
    compatibleMetrics: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The names of the metrics the dimension or metric this reporting metadata entry describes is compatible with.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of this reporting metadata entry, corresponding to the name of the appropriate dimension or metric.',
      }),
    kind: z
      .string()
      .default('adsense#reportingMetadataEntry')
      .exactOptional()
      .openapi({
        description: 'Kind of resource this is, in this case adsense#reportingMetadataEntry.',
      }),
    requiredDimensions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The names of the dimensions which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted.',
      }),
    requiredMetrics: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The names of the metrics which the dimension or metric this reporting metadata entry describes requires to also be present in order for the report to be valid. Omitting these will not cause an error or warning, but may result in data which cannot be correctly interpreted.',
      }),
    supportedProducts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The codes of the projects supported by the dimension or metric this reporting metadata entry describes.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReportingMetadataEntry')

const MetadataSchema = z
  .object({
    items: z.array(ReportingMetadataEntrySchema).exactOptional(),
    kind: z
      .string()
      .default('adsense#metadata')
      .exactOptional()
      .openapi({ description: 'Kind of list this is, in this case adsense#metadata.' }),
  })
  .openapi({ required: [] })
  .openapi('Metadata')

const PaymentSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'Unique identifier of this Payment.' }),
    kind: z
      .string()
      .default('adsense#payment')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is, in this case adsense#payment.' }),
    paymentAmount: z.string().exactOptional().openapi({ description: 'The amount to be paid.' }),
    paymentAmountCurrencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency code for the amount to be paid.' }),
    paymentDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date this payment was/will be credited to the user, or none if the payment threshold has not been met.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Payment')

const PaymentsSchema = z
  .object({
    items: z
      .array(PaymentSchema)
      .exactOptional()
      .openapi({
        description:
          "The list of Payments for the account. One or both of a) the account's most recent payment; and b) the account's upcoming payment.",
      }),
    kind: z
      .string()
      .default('adsense#payments')
      .exactOptional()
      .openapi({ description: 'Kind of list this is, in this case adsense#payments.' }),
  })
  .openapi({ required: [] })
  .openapi('Payments')

const SavedAdStyleSchema = z
  .object({
    adStyle: AdStyleSchema.exactOptional().openapi({ description: 'The AdStyle itself.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of this saved ad style. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format.',
      }),
    kind: z
      .string()
      .default('adsense#savedAdStyle')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is, in this case adsense#savedAdStyle.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The user selected name of this SavedAdStyle.' }),
  })
  .openapi({ required: [] })
  .openapi('SavedAdStyle')

const SavedAdStylesSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'ETag of this response for caching purposes.' }),
    items: z
      .array(SavedAdStyleSchema)
      .exactOptional()
      .openapi({ description: 'The saved ad styles returned in this list response.' }),
    kind: z
      .string()
      .default('adsense#savedAdStyles')
      .exactOptional()
      .openapi({ description: 'Kind of list this is, in this case adsense#savedAdStyles.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Continuation token used to page through ad units. To retrieve the next page of results, set the next request\'s "pageToken" value to this.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SavedAdStyles')

const SavedReportSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier of this saved report.' }),
    kind: z
      .string()
      .default('adsense#savedReport')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is, in this case adsense#savedReport.' }),
    name: z.string().exactOptional().openapi({ description: "This saved report's name." }),
  })
  .openapi({ required: [] })
  .openapi('SavedReport')

const SavedReportsSchema = z
  .object({
    etag: z
      .string()
      .exactOptional()
      .openapi({ description: 'ETag of this response for caching purposes.' }),
    items: z
      .array(SavedReportSchema)
      .exactOptional()
      .openapi({ description: 'The saved reports returned in this list response.' }),
    kind: z
      .string()
      .default('adsense#savedReports')
      .exactOptional()
      .openapi({ description: 'Kind of list this is, in this case adsense#savedReports.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Continuation token used to page through saved reports. To retrieve the next page of results, set the next request\'s "pageToken" value to this.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SavedReports')

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
      .default('adsense#urlChannel')
      .exactOptional()
      .openapi({ description: 'Kind of resource this is, in this case adsense#urlChannel.' }),
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
      .default('adsense#urlChannels')
      .exactOptional()
      .openapi({ description: 'Kind of list this is, in this case adsense#urlChannels.' }),
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
        'https://www.googleapis.com/auth/adsense': 'View and manage your AdSense data',
        'https://www.googleapis.com/auth/adsense.readonly': 'View your AdSense data',
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
        'https://www.googleapis.com/auth/adsense': 'View and manage your AdSense data',
        'https://www.googleapis.com/auth/adsense.readonly': 'View your AdSense data',
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
  description: 'List all accounts available to this AdSense account.',
  operationId: 'adsense.accounts.list',
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
              'The maximum number of accounts to include in the response, used for paging.',
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
              'A continuation token, used to page through accounts. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.',
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
      content: { 'application/json': { schema: AccountsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAccountsAccountIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}',
  tags: ['accounts'],
  description: 'Get information about the selected AdSense account.',
  operationId: 'adsense.accounts.get',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      tree: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Whether the tree of sub accounts should be returned.',
            in: 'query',
            name: 'tree',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
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
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAccountsAccountIdAdclientsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/adclients',
  tags: ['accounts'],
  description: 'List all ad clients in the specified account.',
  operationId: 'adsense.accounts.adclients.list',
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
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAccountsAccountIdAdclientsAdClientIdAdcodeRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/adclients/{adClientId}/adcode',
  tags: ['accounts'],
  description: 'Get Auto ad code for a given ad client.',
  operationId: 'adsense.accounts.adclients.getAdCode',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      tagPartner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Tag partner to include in the ad code snippet.',
            in: 'query',
            name: 'tagPartner',
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
            description: 'Ad client to get the code for.',
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
      content: { 'application/json': { schema: AdCodeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAccountsAccountIdAdclientsAdClientIdAdunitsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/adclients/{adClientId}/adunits',
  tags: ['accounts'],
  description: 'List all ad units in the specified ad client for the specified account.',
  operationId: 'adsense.accounts.adunits.list',
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
            description: 'Account to which the ad client belongs.',
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
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}',
  tags: ['accounts'],
  description: 'Gets the specified ad unit in the specified ad client for the specified account.',
  operationId: 'adsense.accounts.adunits.get',
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
            description: 'Account to which the ad client belongs.',
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
            description: 'Ad client for which to get the ad unit.',
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
            description: 'Ad unit to retrieve.',
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
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/adcode',
  tags: ['accounts'],
  description: 'Get ad code for the specified ad unit.',
  operationId: 'adsense.accounts.adunits.getAdCode',
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
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsRoute =
  createRoute({
    method: 'get',
    path: '/accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/customchannels',
    tags: ['accounts'],
    description: 'List all custom channels which the specified ad unit belongs to.',
    operationId: 'adsense.accounts.adunits.customchannels.list',
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
        accountId: z
          .string()
          .openapi({
            param: {
              description: 'Account to which the ad client belongs.',
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
        adUnitId: z
          .string()
          .openapi({
            param: {
              description: 'Ad unit for which to list custom channels.',
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
        content: { 'application/json': { schema: CustomChannelsSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/adsense'],
        Oauth2c: ['https://www.googleapis.com/auth/adsense'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
      },
    ],
  })

export const getAccountsAccountIdAdclientsAdClientIdCustomchannelsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/adclients/{adClientId}/customchannels',
  tags: ['accounts'],
  description: 'List all custom channels in the specified ad client for the specified account.',
  operationId: 'adsense.accounts.customchannels.list',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account to which the ad client belongs.',
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
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdRoute =
  createRoute({
    method: 'get',
    path: '/accounts/{accountId}/adclients/{adClientId}/customchannels/{customChannelId}',
    tags: ['accounts'],
    description:
      'Get the specified custom channel from the specified ad client for the specified account.',
    operationId: 'adsense.accounts.customchannels.get',
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
              description: 'Account to which the ad client belongs.',
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
              description: 'Ad client which contains the custom channel.',
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
              description: 'Custom channel to retrieve.',
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
        Oauth2: ['https://www.googleapis.com/auth/adsense'],
        Oauth2c: ['https://www.googleapis.com/auth/adsense'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
      },
    ],
  })

export const getAccountsAccountIdAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsRoute =
  createRoute({
    method: 'get',
    path: '/accounts/{accountId}/adclients/{adClientId}/customchannels/{customChannelId}/adunits',
    tags: ['accounts'],
    description: 'List all ad units in the specified custom channel.',
    operationId: 'adsense.accounts.customchannels.adunits.list',
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
              description: 'Account to which the ad client belongs.',
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
              description: 'Ad client which contains the custom channel.',
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
              description: 'Custom channel for which to list ad units.',
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
        content: { 'application/json': { schema: AdUnitsSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/adsense'],
        Oauth2c: ['https://www.googleapis.com/auth/adsense'],
      },
      {
        Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
        Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
      },
    ],
  })

export const getAccountsAccountIdAdclientsAdClientIdUrlchannelsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/adclients/{adClientId}/urlchannels',
  tags: ['accounts'],
  description: 'List all URL channels in the specified ad client for the specified account.',
  operationId: 'adsense.accounts.urlchannels.list',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account to which the ad client belongs.',
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
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAccountsAccountIdAlertsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/alerts',
  tags: ['accounts'],
  description: 'List the alerts for the specified AdSense account.',
  operationId: 'adsense.accounts.alerts.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.',
            in: 'query',
            name: 'locale',
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
            description: 'Account for which to retrieve the alerts.',
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
      content: { 'application/json': { schema: AlertsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const deleteAccountsAccountIdAlertsAlertIdRoute = createRoute({
  method: 'delete',
  path: '/accounts/{accountId}/alerts/{alertId}',
  tags: ['accounts'],
  description: 'Dismiss (delete) the specified alert from the specified publisher AdSense account.',
  operationId: 'adsense.accounts.alerts.delete',
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
      alertId: z
        .string()
        .openapi({
          param: {
            description: 'Alert to delete.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
  ],
})

export const getAccountsAccountIdPaymentsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/payments',
  tags: ['accounts'],
  description: 'List the payments for the specified AdSense account.',
  operationId: 'adsense.accounts.payments.list',
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
            description: 'Account for which to retrieve the payments.',
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
      content: { 'application/json': { schema: PaymentsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAccountsAccountIdReportsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/reports',
  tags: ['accounts'],
  description:
    'Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.',
  operationId: 'adsense.accounts.reports.generate',
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
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.",
            in: 'query',
            name: 'currency',
            schema: { type: 'string' },
            required: false,
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
      useTimezoneReporting: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.",
            in: 'query',
            name: 'useTimezoneReporting',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Account upon which to report.',
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
      content: { 'application/json': { schema: AdsenseReportsGenerateResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAccountsAccountIdReportsSavedRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/reports/saved',
  tags: ['accounts'],
  description: 'List all saved reports in the specified AdSense account.',
  operationId: 'adsense.accounts.reports.saved.list',
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
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of saved reports to include in the response, used for paging.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 100, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.',
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
            description: 'Account to which the saved reports belong.',
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
      content: { 'application/json': { schema: SavedReportsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAccountsAccountIdReportsSavedReportIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/reports/{savedReportId}',
  tags: ['accounts'],
  description:
    'Generate an AdSense report based on the saved report ID sent in the query parameters.',
  operationId: 'adsense.accounts.reports.saved.generate',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
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
            description: 'Account to which the saved reports belong.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      savedReportId: z
        .string()
        .openapi({
          param: {
            description: 'The saved report to retrieve.',
            in: 'path',
            name: 'savedReportId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdsenseReportsGenerateResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAccountsAccountIdSavedadstylesRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/savedadstyles',
  tags: ['accounts'],
  description: 'List all saved ad styles in the specified account.',
  operationId: 'adsense.accounts.savedadstyles.list',
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
              'The maximum number of saved ad styles to include in the response, used for paging.',
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
              'A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.',
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
            description: 'Account for which to list saved ad styles.',
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
      content: { 'application/json': { schema: SavedAdStylesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAccountsAccountIdSavedadstylesSavedAdStyleIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/savedadstyles/{savedAdStyleId}',
  tags: ['accounts'],
  description: 'List a specific saved ad style for the specified account.',
  operationId: 'adsense.accounts.savedadstyles.get',
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
            description: 'Account for which to get the saved ad style.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      savedAdStyleId: z
        .string()
        .openapi({
          param: {
            description: 'Saved ad style to retrieve.',
            in: 'path',
            name: 'savedAdStyleId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SavedAdStyleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAdclientsRoute = createRoute({
  method: 'get',
  path: '/adclients',
  tags: ['adclients'],
  description: 'List all ad clients in this AdSense account.',
  operationId: 'adsense.adclients.list',
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
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAdclientsAdClientIdAdunitsRoute = createRoute({
  method: 'get',
  path: '/adclients/{adClientId}/adunits',
  tags: ['adunits'],
  description: 'List all ad units in the specified ad client for this AdSense account.',
  operationId: 'adsense.adunits.list',
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
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAdclientsAdClientIdAdunitsAdUnitIdRoute = createRoute({
  method: 'get',
  path: '/adclients/{adClientId}/adunits/{adUnitId}',
  tags: ['adunits'],
  description: 'Gets the specified ad unit in the specified ad client.',
  operationId: 'adsense.adunits.get',
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
            description: 'Ad client for which to get the ad unit.',
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
            description: 'Ad unit to retrieve.',
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
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAdclientsAdClientIdAdunitsAdUnitIdAdcodeRoute = createRoute({
  method: 'get',
  path: '/adclients/{adClientId}/adunits/{adUnitId}/adcode',
  tags: ['adunits'],
  description: 'Get ad code for the specified ad unit.',
  operationId: 'adsense.adunits.getAdCode',
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
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsRoute = createRoute({
  method: 'get',
  path: '/adclients/{adClientId}/adunits/{adUnitId}/customchannels',
  tags: ['adunits'],
  description: 'List all custom channels which the specified ad unit belongs to.',
  operationId: 'adsense.adunits.customchannels.list',
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
            description: 'Ad client which contains the ad unit.',
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
            description: 'Ad unit for which to list custom channels.',
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
      content: { 'application/json': { schema: CustomChannelsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAdclientsAdClientIdCustomchannelsRoute = createRoute({
  method: 'get',
  path: '/adclients/{adClientId}/customchannels',
  tags: ['customchannels'],
  description: 'List all custom channels in the specified ad client for this AdSense account.',
  operationId: 'adsense.customchannels.list',
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
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAdclientsAdClientIdCustomchannelsCustomChannelIdRoute = createRoute({
  method: 'get',
  path: '/adclients/{adClientId}/customchannels/{customChannelId}',
  tags: ['customchannels'],
  description: 'Get the specified custom channel from the specified ad client.',
  operationId: 'adsense.customchannels.get',
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
            description: 'Ad client which contains the custom channel.',
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
            description: 'Custom channel to retrieve.',
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
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsRoute = createRoute({
  method: 'get',
  path: '/adclients/{adClientId}/customchannels/{customChannelId}/adunits',
  tags: ['customchannels'],
  description: 'List all ad units in the specified custom channel.',
  operationId: 'adsense.customchannels.adunits.list',
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
      adClientId: z
        .string()
        .openapi({
          param: {
            description: 'Ad client which contains the custom channel.',
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
            description: 'Custom channel for which to list ad units.',
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
      content: { 'application/json': { schema: AdUnitsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAdclientsAdClientIdUrlchannelsRoute = createRoute({
  method: 'get',
  path: '/adclients/{adClientId}/urlchannels',
  tags: ['urlchannels'],
  description: 'List all URL channels in the specified ad client for this AdSense account.',
  operationId: 'adsense.urlchannels.list',
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
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getAlertsRoute = createRoute({
  method: 'get',
  path: '/alerts',
  tags: ['alerts'],
  description: 'List the alerts for this AdSense account.',
  operationId: 'adsense.alerts.list',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
      locale: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.',
            in: 'query',
            name: 'locale',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AlertsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const deleteAlertsAlertIdRoute = createRoute({
  method: 'delete',
  path: '/alerts/{alertId}',
  tags: ['alerts'],
  description: "Dismiss (delete) the specified alert from the publisher's AdSense account.",
  operationId: 'adsense.alerts.delete',
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
      alertId: z
        .string()
        .openapi({
          param: {
            description: 'Alert to delete.',
            in: 'path',
            name: 'alertId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
  ],
})

export const getMetadataDimensionsRoute = createRoute({
  method: 'get',
  path: '/metadata/dimensions',
  tags: ['metadata'],
  description: 'List the metadata for the dimensions available to this AdSense account.',
  operationId: 'adsense.metadata.dimensions.list',
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
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MetadataSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getMetadataMetricsRoute = createRoute({
  method: 'get',
  path: '/metadata/metrics',
  tags: ['metadata'],
  description: 'List the metadata for the metrics available to this AdSense account.',
  operationId: 'adsense.metadata.metrics.list',
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
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MetadataSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getPaymentsRoute = createRoute({
  method: 'get',
  path: '/payments',
  tags: ['payments'],
  description: 'List the payments for this AdSense account.',
  operationId: 'adsense.payments.list',
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
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PaymentsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getReportsRoute = createRoute({
  method: 'get',
  path: '/reports',
  tags: ['reports'],
  description:
    'Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.',
  operationId: 'adsense.reports.generate',
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
      accountId: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Accounts upon which to report.',
            explode: true,
            in: 'query',
            name: 'accountId',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Optional currency to use when reporting on monetary metrics. Defaults to the account's currency if not set.",
            in: 'query',
            name: 'currency',
            schema: { type: 'string' },
            required: false,
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
      useTimezoneReporting: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Whether the report should be generated in the AdSense account's local timezone. If false default PST/PDT timezone will be used.",
            in: 'query',
            name: 'useTimezoneReporting',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdsenseReportsGenerateResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getReportsSavedRoute = createRoute({
  method: 'get',
  path: '/reports/saved',
  tags: ['reports'],
  description: 'List all saved reports in this AdSense account.',
  operationId: 'adsense.reports.saved.list',
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
          z.int().min(0).max(100),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of saved reports to include in the response, used for paging.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 100, minimum: 0, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A continuation token, used to page through saved reports. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.',
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
      content: { 'application/json': { schema: SavedReportsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getReportsSavedReportIdRoute = createRoute({
  method: 'get',
  path: '/reports/{savedReportId}',
  tags: ['reports'],
  description:
    'Generate an AdSense report based on the saved report ID sent in the query parameters.',
  operationId: 'adsense.reports.saved.generate',
  request: {
    query: z.object({
      alt: AltParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      userIp: UserIpParamsSchema,
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
      savedReportId: z
        .string()
        .openapi({
          param: {
            description: 'The saved report to retrieve.',
            in: 'path',
            name: 'savedReportId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AdsenseReportsGenerateResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getSavedadstylesRoute = createRoute({
  method: 'get',
  path: '/savedadstyles',
  tags: ['savedadstyles'],
  description: "List all saved ad styles in the user's account.",
  operationId: 'adsense.savedadstyles.list',
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
              'The maximum number of saved ad styles to include in the response, used for paging.',
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
              'A continuation token, used to page through saved ad styles. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.',
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
      content: { 'application/json': { schema: SavedAdStylesSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})

export const getSavedadstylesSavedAdStyleIdRoute = createRoute({
  method: 'get',
  path: '/savedadstyles/{savedAdStyleId}',
  tags: ['savedadstyles'],
  description: "Get a specific saved ad style from the user's account.",
  operationId: 'adsense.savedadstyles.get',
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
      savedAdStyleId: z
        .string()
        .openapi({
          param: {
            description: 'Saved ad style to retrieve.',
            in: 'path',
            name: 'savedAdStyleId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SavedAdStyleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense'],
    },
    {
      Oauth2: ['https://www.googleapis.com/auth/adsense.readonly'],
      Oauth2c: ['https://www.googleapis.com/auth/adsense.readonly'],
    },
  ],
})
