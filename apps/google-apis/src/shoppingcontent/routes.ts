import { createRoute, z } from '@hono/zod-openapi'

const CutoffTimeSchema = z
  .object({
    hour: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'Hour of the cutoff time until which an order has to be placed to be processed in the same day. Required.',
      }),
    minute: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'Minute of the cutoff time until which an order has to be placed to be processed in the same day. Required.',
      }),
    timezone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timezone identifier for the cutoff time. A list of identifiers can be found in the AdWords API documentation. E.g. "Europe/Zurich". Required.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CutoffTime')

const BusinessDayConfigSchema = z
  .object({
    businessDays: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Regular business days, such as \'"monday"\'. May not be empty.' }),
  })
  .openapi({ required: [] })
  .openapi('BusinessDayConfig')

const HolidayCutoffSchema = z
  .object({
    deadlineDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date of the order deadline, in ISO 8601 format. E.g. "2016-11-29" for 29th November 2016. Required.',
      }),
    deadlineHour: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'Hour of the day on the deadline date until which the order has to be placed to qualify for the delivery guarantee. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Required.',
      }),
    deadlineTimezone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Timezone identifier for the deadline hour. A list of identifiers can be found in the AdWords API documentation. E.g. "Europe/Zurich". Required.',
      }),
    holidayId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Unique identifier for the holiday. Required.' }),
    visibleFromDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the deadline will become visible to consumers in ISO 8601 format. E.g. "2016-10-31" for 31st October 2016. Required.',
      }),
  })
  .openapi({ required: [] })
  .openapi('HolidayCutoff')

const TransitTableTransitTimeRowTransitTimeValueSchema = z
  .object({
    maxTransitTimeInDays: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Must be greater than or equal to `minTransitTimeInDays`.' }),
    minTransitTimeInDays: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'Transit time range (min-max) in business days. 0 means same day delivery, 1 means next day delivery.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransitTableTransitTimeRowTransitTimeValue')

const TransitTableTransitTimeRowSchema = z
  .object({ values: z.array(TransitTableTransitTimeRowTransitTimeValueSchema).exactOptional() })
  .openapi({ required: [] })
  .openapi('TransitTableTransitTimeRow')

const TransitTableSchema = z
  .object({
    postalCodeGroupNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service.',
      }),
    rows: z.array(TransitTableTransitTimeRowSchema).exactOptional(),
    transitTimeLabels: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of transit time labels. The last value can be `"all other labels"`. Example: `["food", "electronics", "all other labels"]`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransitTable')

const WarehouseBasedDeliveryTimeSchema = z
  .object({
    carrier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Carrier, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved via the `listSupportedCarriers` method.',
      }),
    carrierService: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved via the `listSupportedCarriers` method. The name of the service must be in the eddSupportedServices list.',
      }),
    originAdministrativeArea: z
      .string()
      .exactOptional()
      .openapi({ description: "Shipping origin's state." }),
    originCity: z.string().exactOptional().openapi({ description: "Shipping origin's city." }),
    originCountry: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Shipping origin's country represented as a [CLDR territory code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml).",
      }),
    originPostalCode: z.string().exactOptional().openapi({ description: 'Shipping origin.' }),
    originStreetAddress: z
      .string()
      .exactOptional()
      .openapi({ description: "Shipping origin's street address" }),
    warehouseName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the warehouse. Warehouse name need to be matched with name. If warehouseName is set, the below fields will be ignored. The warehouse info will be read from warehouse.',
      }),
  })
  .openapi({ required: [] })
  .openapi('WarehouseBasedDeliveryTime')

type DeliveryTimeType = {
  cutoffTime?: z.infer<typeof CutoffTimeSchema>
  handlingBusinessDayConfig?: z.infer<typeof BusinessDayConfigSchema>
  holidayCutoffs?: z.infer<typeof HolidayCutoffSchema>[]
  maxHandlingTimeInDays?: number
  maxTransitTimeInDays?: number
  minHandlingTimeInDays?: number
  minTransitTimeInDays?: number
  transitBusinessDayConfig?: z.infer<typeof BusinessDayConfigSchema>
  transitTimeTable?: z.infer<typeof TransitTableSchema>
  warehouseBasedDeliveryTimes?: z.infer<typeof WarehouseBasedDeliveryTimeSchema>[]
}

const DeliveryTimeSchema: z.ZodType<DeliveryTimeType> = z
  .lazy(() =>
    z
      .object({
        cutoffTime: CutoffTimeSchema.exactOptional().openapi({
          description:
            'Business days cutoff time definition. If not configured the cutoff time will be defaulted to 8AM PST.',
        }),
        handlingBusinessDayConfig: BusinessDayConfigSchema.exactOptional().openapi({
          description:
            'The business days during which orders can be handled. If not provided, Monday to Friday business days will be assumed.',
        }),
        holidayCutoffs: z
          .array(HolidayCutoffSchema)
          .exactOptional()
          .openapi({
            description:
              'Holiday cutoff definitions. If configured, they specify order cutoff times for holiday-specific shipping.',
          }),
        maxHandlingTimeInDays: z
          .uint32()
          .exactOptional()
          .openapi({
            description:
              'Maximum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped. Must be greater than or equal to `minHandlingTimeInDays`.',
          }),
        maxTransitTimeInDays: z
          .uint32()
          .exactOptional()
          .openapi({
            description:
              'Maximum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to `minTransitTimeInDays`.',
          }),
        minHandlingTimeInDays: z
          .uint32()
          .exactOptional()
          .openapi({
            description:
              'Minimum number of business days spent before an order is shipped. 0 means same day shipped, 1 means next day shipped.',
          }),
        minTransitTimeInDays: z
          .uint32()
          .exactOptional()
          .openapi({
            description:
              'Minimum number of business days that is spent in transit. 0 means same day delivery, 1 means next day delivery. Either `{min,max}TransitTimeInDays` or `transitTimeTable` must be set, but not both.',
          }),
        transitBusinessDayConfig: BusinessDayConfigSchema.exactOptional().openapi({
          description:
            'The business days during which orders can be in-transit. If not provided, Monday to Friday business days will be assumed.',
        }),
        transitTimeTable: TransitTableSchema.exactOptional().openapi({
          description:
            'Transit time table, number of business days spent in transit based on row and column dimensions. Either `{min,max}TransitTimeInDays` or `transitTimeTable` can be set, but not both.',
        }),
        warehouseBasedDeliveryTimes: z
          .array(WarehouseBasedDeliveryTimeSchema)
          .exactOptional()
          .openapi({
            description:
              'Indicates that the delivery time should be calculated per warehouse (shipping origin location) based on the settings of the selected carrier. When set, no other transit time related field in DeliveryTime should be set.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('DeliveryTime')

const PriceSchema = z
  .object({
    currency: z.string().exactOptional().openapi({ description: 'The currency of the price.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The price represented as a number.' }),
  })
  .openapi({ required: [] })
  .openapi('Price')

const MinimumOrderValueTableStoreCodeSetWithMovSchema = z
  .object({
    storeCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of unique store codes or empty for the catch all.' }),
    value: PriceSchema.exactOptional().openapi({
      description: 'The minimum order value for the given stores.',
    }),
  })
  .openapi({
    description:
      "A list of store code sets sharing the same minimum order value. At least two sets are required and the last one must be empty, which signifies 'MOV for all other stores'. Each store code can only appear once across all the sets. All prices within a service must have the same currency.",
    required: [],
  })
  .openapi('MinimumOrderValueTableStoreCodeSetWithMov')

const MinimumOrderValueTableSchema = z
  .object({
    storeCodeSetWithMovs: z.array(MinimumOrderValueTableStoreCodeSetWithMovSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MinimumOrderValueTable')

const PickupCarrierServiceSchema = z
  .object({
    carrierName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the pickup carrier (e.g., `"UPS"`). Required.' }),
    serviceName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the pickup service (e.g., `"Access point"`). Required.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PickupCarrierService')

const CarrierRateSchema = z
  .object({
    carrierName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Carrier service, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved via the `getSupportedCarriers` method. Required.',
      }),
    carrierService: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved via the `getSupportedCarriers` method. Required.',
      }),
    flatAdjustment: PriceSchema.exactOptional().openapi({
      description:
        'Additive shipping rate modifier. Can be negative. For example `{ "value": "1", "currency" : "USD" }` adds $1 to the rate, `{ "value": "-3", "currency" : "USD" }` removes $3 from the rate. Optional.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the carrier rate. Must be unique per rate group. Required.',
      }),
    originPostalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Shipping origin for this carrier rate. Required.' }),
    percentageAdjustment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Multiplicative shipping rate modifier as a number in decimal notation. Can be negative. For example `"5.4"` increases the rate by 5.4%, `"-3"` decreases the rate by 3%. Optional.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CarrierRate')

const LocationIdSetSchema = z
  .object({
    locationIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A non-empty list of location IDs. They must all be of the same location type (e.g., state).',
      }),
  })
  .openapi({ required: [] })
  .openapi('LocationIdSet')

const WeightSchema = z
  .object({
    unit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The weight unit. Acceptable values are: - "`kg`" - "`lb`" ',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The weight represented as a number. The weight can have a maximum precision of four decimal places.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Weight')

const HeadersSchema = z
  .object({
    locations: z
      .array(LocationIdSetSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of location ID sets. Must be non-empty. Can only be set if all other fields are not set.',
      }),
    numberOfItems: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of inclusive number of items upper bounds. The last value can be `"infinity"`. For example `["10", "50", "infinity"]` represents the headers "<= 10 items", "<= 50 items", and "> 50 items". Must be non-empty. Can only be set if all other fields are not set.',
      }),
    postalCodeGroupNames: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of postal group names. The last value can be `"all other locations"`. Example: `["zone 1", "zone 2", "all other locations"]`. The referred postal code groups must match the delivery country of the service. Must be non-empty. Can only be set if all other fields are not set.',
      }),
    prices: z
      .array(PriceSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of inclusive order price upper bounds. The last price\'s value can be `"infinity"`. For example `[{"value": "10", "currency": "USD"}, {"value": "500", "currency": "USD"}, {"value": "infinity", "currency": "USD"}]` represents the headers "<= $10", "<= $500", and "> $500". All prices within a service must have the same currency. Must be non-empty. Can only be set if all other fields are not set.',
      }),
    weights: z
      .array(WeightSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of inclusive order weight upper bounds. The last weight\'s value can be `"infinity"`. For example `[{"value": "10", "unit": "kg"}, {"value": "50", "unit": "kg"}, {"value": "infinity", "unit": "kg"}]` represents the headers "<= 10kg", "<= 50kg", and "> 50kg". All weights within a service must have the same unit. Must be non-empty. Can only be set if all other fields are not set.',
      }),
  })
  .openapi({
    description:
      'A non-empty list of row or column headers for a table. Exactly one of `prices`, `weights`, `numItems`, `postalCodeGroupNames`, or `location` must be set.',
    required: [],
  })
  .openapi('Headers')

const ValueSchema = z
  .object({
    carrierRateName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of a carrier rate referring to a carrier rate defined in the same rate group. Can only be set if all other fields are not set.',
      }),
    flatRate: PriceSchema.exactOptional().openapi({
      description: 'A flat rate. Can only be set if all other fields are not set.',
    }),
    noShipping: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true, then the product can't ship. Must be true when set, can only be set if all other fields are not set.",
      }),
    pricePercentage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A percentage of the price represented as a number in decimal notation (e.g., `"5.4"`). Can only be set if all other fields are not set.',
      }),
    subtableName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of a subtable. Can only be set in table cells (i.e., not for single values), and only if all other fields are not set.',
      }),
  })
  .openapi({
    description:
      "The single value of a rate group or the value of a rate group table's cell. Exactly one of `noShipping`, `flatRate`, `pricePercentage`, `carrierRateName`, `subtableName` must be set.",
    required: [],
  })
  .openapi('Value')

const RowSchema = z
  .object({
    cells: z
      .array(ValueSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of cells that constitute the row. Must have the same length as `columnHeaders` for two-dimensional tables, a length of 1 for one-dimensional tables. Required.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Row')

const TableSchema = z
  .object({
    columnHeaders: HeadersSchema.exactOptional().openapi({
      description:
        "Headers of the table's columns. Optional: if not set then the table has only one dimension.",
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the table. Required for subtables, ignored for the main table.',
      }),
    rowHeaders: HeadersSchema.exactOptional().openapi({
      description: "Headers of the table's rows. Required.",
    }),
    rows: z
      .array(RowSchema)
      .exactOptional()
      .openapi({
        description:
          'The list of rows that constitute the table. Must have the same length as `rowHeaders`. Required.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Table')

const RateGroupSchema = z
  .object({
    applicableShippingLabels: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of shipping labels defining the products to which this rate group applies to. This is a disjunction: only one of the labels has to match for the rate group to apply. May only be empty for the last rate group of a service. Required.',
      }),
    carrierRates: z
      .array(CarrierRateSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of carrier rates that can be referred to by `mainTable` or `singleValue`.',
      }),
    mainTable: TableSchema.exactOptional().openapi({
      description:
        'A table defining the rate group, when `singleValue` is not expressive enough. Can only be set if `singleValue` is not set.',
    }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the rate group. Optional. If set has to be unique within shipping service.',
      }),
    singleValue: ValueSchema.exactOptional().openapi({
      description:
        'The value of the rate group (e.g. flat rate $10). Can only be set if `mainTable` and `subtables` are not set.',
    }),
    subtables: z
      .array(TableSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of subtables referred to by `mainTable`. Can only be set if `mainTable` is set.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RateGroup')

type ServiceType = {
  active?: boolean
  currency?: string
  deliveryCountry?: string
  deliveryTime?: z.infer<typeof DeliveryTimeSchema>
  eligibility?: string
  minimumOrderValue?: z.infer<typeof PriceSchema>
  minimumOrderValueTable?: z.infer<typeof MinimumOrderValueTableSchema>
  name?: string
  pickupService?: z.infer<typeof PickupCarrierServiceSchema>
  rateGroups?: z.infer<typeof RateGroupSchema>[]
  shipmentType?: string
}

const AccountAdwordsLinkSchema = z
  .object({
    adwordsId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Customer ID of the AdWords account.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Status of the link between this Merchant Center account and the AdWords account. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in Google AdWords or `pending` if it\'s pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it\'s still pending or with status `pending` when it\'s already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending. Acceptable values are: - "`active`" - "`pending`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountAdwordsLink')

const AccountAddressSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'CLDR country code (e.g. "US"). This value cannot be set for a sub-account of an MCA. All MCA sub-accounts inherit the country of their parent MCA.',
      }),
    locality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal code or ZIP (e.g. "94043").' }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").',
      }),
    streetAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Street-level part of the address.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountAddress')

const AccountCustomerServiceSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: 'Customer service email.' }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Customer service phone number.' }),
    url: z.string().exactOptional().openapi({ description: 'Customer service URL.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountCustomerService')

const AccountBusinessInformationSchema = z
  .object({
    address: AccountAddressSchema.exactOptional().openapi({
      description: 'The address of the business.',
    }),
    customerService: AccountCustomerServiceSchema.exactOptional().openapi({
      description: 'The customer service information of the business.',
    }),
    koreanBusinessRegistrationNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The 10-digit [Korean business registration number](https://support.google.com/merchants/answer/9037766) separated with dashes in the format: XXX-XX-XXXXX. This field will only be updated if explicitly set.',
      }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The phone number of the business.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountBusinessInformation')

const AccountGoogleMyBusinessLinkSchema = z
  .object({
    gmbEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The GMB email address of which a specific account within a GMB account. A sample account within a GMB account could be a business account with set of locations, managed under the GMB account.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Status of the link between this Merchant Center account and the GMB account. Acceptable values are: - "`active`" - "`pending`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountGoogleMyBusinessLink')

const AccountUserSchema = z
  .object({
    admin: z.boolean().exactOptional().openapi({ description: 'Whether user is an admin.' }),
    emailAddress: z.string().exactOptional().openapi({ description: "User's email address." }),
    orderManager: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether user is an order manager.' }),
    paymentsAnalyst: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether user can access payment statements.' }),
    paymentsManager: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether user can manage payment settings.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountUser')

const AccountYouTubeChannelLinkSchema = z
  .object({
    channelId: z.string().exactOptional().openapi({ description: 'Channel ID.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Status of the link between this Merchant Center account and the YouTube channel. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in YT Creator Studio or `pending` if it's pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it's still pending or with status `pending` when it's already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending.",
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountYouTubeChannelLink')

const AccountSchema = z
  .object({
    adultContent: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the merchant sells adult content.' }),
    adwordsLinks: z
      .array(AccountAdwordsLinkSchema)
      .exactOptional()
      .openapi({
        description:
          'List of linked AdWords accounts that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected either in the AdWords interface or through the AdWords API. To delete an active link, or to cancel a link request, remove it from the list.',
      }),
    businessInformation: AccountBusinessInformationSchema.exactOptional().openapi({
      description: 'The business information of the account.',
    }),
    googleMyBusinessLink: AccountGoogleMyBusinessLinkSchema.exactOptional().openapi({
      description:
        'The GMB account which is linked or in the process of being linked with the Merchant Center account.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required for update. Merchant Center account ID.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#account`"',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Display name for the account.' }),
    reviewsUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: '[DEPRECATED] This field is never returned and will be ignored if provided.',
      }),
    sellerId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Client-specific, locally-unique, internal ID for the child account.',
      }),
    users: z
      .array(AccountUserSchema)
      .exactOptional()
      .openapi({
        description:
          'Users with access to the account. Every account (except for subaccounts) must have at least one admin user.',
      }),
    websiteUrl: z.string().exactOptional().openapi({ description: "The merchant's website." }),
    youtubeChannelLinks: z
      .array(AccountYouTubeChannelLinkSchema)
      .exactOptional()
      .openapi({
        description:
          'List of linked YouTube channels that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected in the YT Creator Studio interface. To delete an active link, or to cancel a link request, remove it from the list.',
      }),
  })
  .openapi({
    description:
      'Account data. After the creation of a new account it may take a few minutes before it is fully operational. The methods delete, insert, and update require the admin role.',
    required: [],
  })
  .openapi('Account')

const AccountIdentifierSchema = z
  .object({
    aggregatorId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The aggregator ID, set for aggregators and subaccounts (in that case, it represents the aggregator of the subaccount).',
      }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The merchant account ID, set for individual accounts and subaccounts.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountIdentifier')

const AccountStatusAccountLevelIssueSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country for which this issue is reported.' }),
    destination: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The destination the issue applies to. If this field is empty then the issue applies to all available destinations.',
      }),
    detail: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional details about the issue.' }),
    documentation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of a web page to help resolving this issue.' }),
    id: z.string().exactOptional().openapi({ description: 'Issue identifier.' }),
    severity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Severity of the issue. Acceptable values are: - "`critical`" - "`error`" - "`suggestion`" ',
      }),
    title: z.string().exactOptional().openapi({ description: 'Short description of the issue.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountStatusAccountLevelIssue')

const AccountStatusExampleItemSchema = z
  .object({
    itemId: z.string().exactOptional(),
    link: z.string().exactOptional(),
    submittedValue: z.string().exactOptional(),
    title: z.string().exactOptional(),
    valueOnLandingPage: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccountStatusExampleItem')

const AccountStatusDataQualityIssueSchema = z
  .object({
    country: z.string().exactOptional(),
    destination: z.string().exactOptional(),
    detail: z.string().exactOptional(),
    displayedValue: z.string().exactOptional(),
    exampleItems: z.array(AccountStatusExampleItemSchema).exactOptional(),
    id: z.string().exactOptional(),
    lastChecked: z.string().exactOptional(),
    location: z.string().exactOptional(),
    numItems: z.uint32().exactOptional(),
    severity: z
      .string()
      .exactOptional()
      .openapi({
        description: ' Acceptable values are: - "`critical`" - "`error`" - "`suggestion`" ',
      }),
    submittedValue: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccountStatusDataQualityIssue')

const AccountStatusItemLevelIssueSchema = z
  .object({
    attributeName: z
      .string()
      .exactOptional()
      .openapi({
        description: "The attribute's name, if the issue is caused by a single attribute.",
      }),
    code: z.string().exactOptional().openapi({ description: 'The error code of the issue.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short issue description in English.' }),
    detail: z
      .string()
      .exactOptional()
      .openapi({ description: 'A detailed issue description in English.' }),
    documentation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of a web page to help with resolving this issue.' }),
    numItems: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of items with this issue.' }),
    resolution: z
      .string()
      .exactOptional()
      .openapi({ description: 'Whether the issue can be resolved by the merchant.' }),
    servability: z
      .string()
      .exactOptional()
      .openapi({ description: 'How this issue affects serving of the offer.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountStatusItemLevelIssue')

const AccountStatusStatisticsSchema = z
  .object({
    active: z.string().exactOptional().openapi({ description: 'Number of active offers.' }),
    disapproved: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of disapproved offers.' }),
    expiring: z.string().exactOptional().openapi({ description: 'Number of expiring offers.' }),
    pending: z.string().exactOptional().openapi({ description: 'Number of pending offers.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountStatusStatistics')

const AccountStatusProductsSchema = z
  .object({
    channel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The channel the data applies to. Acceptable values are: - "`local`" - "`online`" ',
      }),
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country the data applies to.' }),
    destination: z
      .string()
      .exactOptional()
      .openapi({ description: 'The destination the data applies to.' }),
    itemLevelIssues: z
      .array(AccountStatusItemLevelIssueSchema)
      .exactOptional()
      .openapi({ description: 'List of item-level issues.' }),
    statistics: AccountStatusStatisticsSchema.exactOptional().openapi({
      description: 'Aggregated product statistics.',
    }),
  })
  .openapi({ required: [] })
  .openapi('AccountStatusProducts')

const AccountStatusSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the account for which the status is reported.' }),
    accountLevelIssues: z
      .array(AccountStatusAccountLevelIssueSchema)
      .exactOptional()
      .openapi({ description: 'A list of account level issues.' }),
    dataQualityIssues: z
      .array(AccountStatusDataQualityIssueSchema)
      .exactOptional()
      .openapi({ description: 'DEPRECATED - never populated.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#accountStatus`"',
      }),
    products: z
      .array(AccountStatusProductsSchema)
      .exactOptional()
      .openapi({
        description:
          'List of product-related data by channel, destination, and country. Data in this field may be delayed by up to 30 minutes.',
      }),
    websiteClaimed: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Whether the account's website is claimed or not." }),
  })
  .openapi({
    description:
      'The status of an account, i.e., information about its products, which is computed offline and not returned immediately at insertion time.',
    required: [],
  })
  .openapi('AccountStatus')

const AccountTaxTaxRuleSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'Country code in which tax is applicable.' }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. State (or province) is which the tax is applicable, described by its location ID (also called criteria ID).',
      }),
    ratePercent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Explicit tax rate in percent, represented as a floating point number without the percentage character. Must not be negative.',
      }),
    shippingTaxed: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If true, shipping charges are also taxed.' }),
    useGlobalRate: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the tax rate is taken from a global tax table or specified explicitly.',
      }),
  })
  .openapi({
    description: 'Tax calculation rule to apply in a state or province (USA only).',
    required: [],
  })
  .openapi('AccountTaxTaxRule')

const AccountTaxSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The ID of the account to which these account tax settings belong.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#accountTax".',
      }),
    rules: z
      .array(AccountTaxTaxRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'Tax rules. Updating the tax rules will enable US taxes (not reversible). Defining no rules is equivalent to not charging tax at all.',
      }),
  })
  .openapi({
    description: 'The tax settings of a merchant account. All methods require the admin role.',
    required: [],
  })
  .openapi('AccountTax')

const AccountsAuthInfoResponseSchema = z
  .object({
    accountIdentifiers: z
      .array(AccountIdentifierSchema)
      .exactOptional()
      .openapi({
        description:
          'The account identifiers corresponding to the authenticated user. - For an individual account: only the merchant ID is defined - For an aggregator: only the aggregator ID is defined - For a subaccount of an MCA: both the merchant ID and the aggregator ID are defined. ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#accountsAuthInfoResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountsAuthInfoResponse')

const AccountsClaimWebsiteResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#accountsClaimWebsiteResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountsClaimWebsiteResponse')

const AccountsCustomBatchRequestEntryLinkRequestSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`" ',
      }),
    linkType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" ',
      }),
    linkedAccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the linked account.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountsCustomBatchRequestEntryLinkRequest')

const AccountsCustomBatchRequestEntrySchema = z
  .object({
    account: AccountSchema.exactOptional().openapi({
      description:
        'The account to create or update. Only defined if the method is `insert` or `update`.',
    }),
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the targeted account. Only defined if the method is not `insert`.',
      }),
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'An entry ID, unique within the batch request.' }),
    force: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the account should be deleted if the account has offers. Only applicable if the method is `delete`.',
      }),
    labelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: "Label IDs for the 'updatelabels' request." }),
    linkRequest: AccountsCustomBatchRequestEntryLinkRequestSchema.exactOptional().openapi({
      description: 'Details about the `link` request.',
    }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the managing account.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The method of the batch entry. Acceptable values are: - "`claimWebsite`" - "`delete`" - "`get`" - "`insert`" - "`link`" - "`update`" ',
      }),
    overwrite: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Only applicable if the method is `claimwebsite`. Indicates whether or not to take the claim from another account in case there is a conflict.',
      }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch accounts request.',
    required: [],
  })
  .openapi('AccountsCustomBatchRequestEntry')

const AccountsCustomBatchRequestSchema = z
  .object({
    entries: z
      .array(AccountsCustomBatchRequestEntrySchema)
      .exactOptional()
      .openapi({ description: 'The request entries to be processed in the batch.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountsCustomBatchRequest')

const ErrorSchema = z
  .object({
    domain: z.string().exactOptional().openapi({ description: 'The domain of the error.' }),
    message: z.string().exactOptional().openapi({ description: 'A description of the error.' }),
    reason: z.string().exactOptional().openapi({ description: 'The error code.' }),
  })
  .openapi({ description: 'An error returned by the API.', required: [] })
  .openapi('Error')

const ErrorsSchema = z
  .object({
    code: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The HTTP status of the first error in `errors`.' }),
    errors: z.array(ErrorSchema).exactOptional().openapi({ description: 'A list of errors.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The message of the first error in `errors`.' }),
  })
  .openapi({ description: 'A list of errors returned by a failed batch entry.', required: [] })
  .openapi('Errors')

const AccountsCustomBatchResponseEntrySchema = z
  .object({
    account: AccountSchema.exactOptional().openapi({
      description:
        'The retrieved, created, or updated account. Not defined if the method was `delete`, `claimwebsite` or `link`.',
    }),
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The ID of the request entry this entry responds to.' }),
    errors: ErrorsSchema.exactOptional().openapi({
      description: 'A list of errors defined if and only if the request failed.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponseEntry`"',
      }),
    linkStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. This field is never set. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" ',
      }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch accounts response.',
    required: [],
  })
  .openapi('AccountsCustomBatchResponseEntry')

const AccountsCustomBatchResponseSchema = z
  .object({
    entries: z
      .array(AccountsCustomBatchResponseEntrySchema)
      .exactOptional()
      .openapi({ description: 'The result of the execution of the batch requests.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#accountsCustomBatchResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountsCustomBatchResponse')

const AccountsLinkRequestSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`" ',
      }),
    linkType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" ',
      }),
    linkedAccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the linked account.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountsLinkRequest')

const AccountsLinkResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#accountsLinkResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountsLinkResponse')

const AccountsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#accountsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token for the retrieval of the next page of accounts.' }),
    resources: z.array(AccountSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccountsListResponse')

const AccountstatusesCustomBatchRequestEntrySchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the (sub-)account whose status to get.' }),
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'An entry ID, unique within the batch request.' }),
    destinations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.',
      }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the managing account.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({ description: 'The method of the batch entry. Acceptable values are: - "`get`" ' }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch accountstatuses request.',
    required: [],
  })
  .openapi('AccountstatusesCustomBatchRequestEntry')

const AccountstatusesCustomBatchRequestSchema = z
  .object({
    entries: z
      .array(AccountstatusesCustomBatchRequestEntrySchema)
      .exactOptional()
      .openapi({ description: 'The request entries to be processed in the batch.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountstatusesCustomBatchRequest')

const AccountstatusesCustomBatchResponseEntrySchema = z
  .object({
    accountStatus: AccountStatusSchema.exactOptional().openapi({
      description:
        'The requested account status. Defined if and only if the request was successful.',
    }),
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The ID of the request entry this entry responds to.' }),
    errors: ErrorsSchema.exactOptional().openapi({
      description: 'A list of errors defined if and only if the request failed.',
    }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch accountstatuses response.',
    required: [],
  })
  .openapi('AccountstatusesCustomBatchResponseEntry')

const AccountstatusesCustomBatchResponseSchema = z
  .object({
    entries: z
      .array(AccountstatusesCustomBatchResponseEntrySchema)
      .exactOptional()
      .openapi({ description: 'The result of the execution of the batch requests.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesCustomBatchResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountstatusesCustomBatchResponse')

const AccountstatusesListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#accountstatusesListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The token for the retrieval of the next page of account statuses.',
      }),
    resources: z.array(AccountStatusSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccountstatusesListResponse')

const AccounttaxCustomBatchRequestEntrySchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the account for which to get/update account tax settings.',
      }),
    accountTax: AccountTaxSchema.exactOptional().openapi({
      description: 'The account tax settings to update. Only defined if the method is `update`.',
    }),
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'An entry ID, unique within the batch request.' }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the managing account.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The method of the batch entry. Acceptable values are: - "`get`" - "`update`" ',
      }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch accounttax request.',
    required: [],
  })
  .openapi('AccounttaxCustomBatchRequestEntry')

const AccounttaxCustomBatchRequestSchema = z
  .object({
    entries: z
      .array(AccounttaxCustomBatchRequestEntrySchema)
      .exactOptional()
      .openapi({ description: 'The request entries to be processed in the batch.' }),
  })
  .openapi({ required: [] })
  .openapi('AccounttaxCustomBatchRequest')

const AccounttaxCustomBatchResponseEntrySchema = z
  .object({
    accountTax: AccountTaxSchema.exactOptional().openapi({
      description: 'The retrieved or updated account tax settings.',
    }),
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The ID of the request entry this entry responds to.' }),
    errors: ErrorsSchema.exactOptional().openapi({
      description: 'A list of errors defined if and only if the request failed.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxCustomBatchResponseEntry`"',
      }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch accounttax response.',
    required: [],
  })
  .openapi('AccounttaxCustomBatchResponseEntry')

const AccounttaxCustomBatchResponseSchema = z
  .object({
    entries: z
      .array(AccounttaxCustomBatchResponseEntrySchema)
      .exactOptional()
      .openapi({ description: 'The result of the execution of the batch requests.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#accounttaxCustomBatchResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccounttaxCustomBatchResponse')

const AccounttaxListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#accounttaxListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The token for the retrieval of the next page of account tax settings.',
      }),
    resources: z.array(AccountTaxSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccounttaxListResponse')

const AddressSchema = z
  .object({
    administrativeArea: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").',
      }),
    city: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).',
      }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. [CLDR country code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml)(e.g. "US").',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Postal code or ZIP (e.g. "94043"). Required.' }),
    streetAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Street-level part of the address.' }),
  })
  .openapi({ required: [] })
  .openapi('Address')

const AmountSchema = z
  .object({
    pretax: PriceSchema.exactOptional().openapi({ description: '[required] Value before taxes.' }),
    tax: PriceSchema.exactOptional().openapi({ description: '[required] Tax value.' }),
  })
  .openapi({ required: [] })
  .openapi('Amount')

const CarriersCarrierSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The CLDR country code of the carrier (e.g., "US"). Always present.',
      }),
    eddServices: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of services supported for EDD (Estimated Delivery Date) calculation. This is the list of valid values for WarehouseBasedDeliveryTime.carrierService.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the carrier (e.g., `"UPS"`). Always present.' }),
    services: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of supported services (e.g., `"ground"`) for that carrier. Contains at least one service. This is the list of valid values for CarrierRate.carrierService.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CarriersCarrier')

const CustomAttributeSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the attribute. Underscores will be replaced by spaces upon insertion.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the attribute. Acceptable values are: - "`boolean`" - "`datetimerange`" - "`float`" - "`group`" - "`int`" - "`price`" - "`text`" - "`time`" - "`url`" ',
      }),
    unit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Free-form unit of the attribute. Unit can only be used for values of type int, float, or price.',
      }),
    value: z.string().exactOptional().openapi({ description: 'The value of the attribute.' }),
  })
  .openapi({ required: [] })
  .openapi('CustomAttribute')

const CustomGroupSchema = z
  .object({
    attributes: z
      .array(CustomAttributeSchema)
      .exactOptional()
      .openapi({ description: 'The sub-attributes.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the group. Underscores will be replaced by spaces upon insertion.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CustomGroup')

const CustomerReturnReasonSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Description of the reason.' }),
    reasonCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Code of the return reason. Acceptable values are: - "`betterPriceFound`" - "`changedMind`" - "`damagedOrDefectiveItem`" - "`didNotMatchDescription`" - "`doesNotFit`" - "`expiredItem`" - "`incorrectItemReceived`" - "`noLongerNeeded`" - "`notSpecified`" - "`orderedWrongItem`" - "`other`" - "`qualityNotExpected`" - "`receivedTooLate`" - "`undeliverable`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('CustomerReturnReason')

const DatafeedFetchScheduleSchema = z
  .object({
    dayOfMonth: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The day of the month the feed file should be fetched (1-31).' }),
    fetchUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL where the feed file can be fetched. Google Merchant Center will support automatic scheduled uploads using the HTTP, HTTPS, FTP, or SFTP protocols, so the value will need to be a valid link using one of those four protocols.',
      }),
    hour: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The hour of the day the feed file should be fetched (0-23).' }),
    minuteOfHour: z
      .uint32()
      .exactOptional()
      .openapi({
        description: 'The minute of the hour the feed file should be fetched (0-59). Read-only.',
      }),
    password: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional password for fetch_url.' }),
    paused: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the scheduled fetch is paused or not.' }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Time zone used for schedule. UTC by default. E.g., "America/Los_Angeles".',
      }),
    username: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional user name for fetch_url.' }),
    weekday: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The day of the week the feed file should be fetched. Acceptable values are: - "`monday`" - "`tuesday`" - "`wednesday`" - "`thursday`" - "`friday`" - "`saturday`" - "`sunday`" ',
      }),
  })
  .openapi({
    description:
      'The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required.',
    required: [],
  })
  .openapi('DatafeedFetchSchedule')

const DatafeedFormatSchema = z
  .object({
    columnDelimiter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Delimiter for the separation of values in a delimiter-separated values feed. If not specified, the delimiter will be auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - "`pipe`" - "`tab`" - "`tilde`" ',
      }),
    fileEncoding: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Character encoding scheme of the data feed. If not specified, the encoding will be auto-detected. Acceptable values are: - "`latin-1`" - "`utf-16be`" - "`utf-16le`" - "`utf-8`" - "`windows-1252`" ',
      }),
    quotingMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies how double quotes are interpreted. If not specified, the mode will be auto-detected. Ignored for non-DSV data feeds. Acceptable values are: - "`normal character`" - "`value quoting`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('DatafeedFormat')

const DatafeedTargetSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The country where the items in the feed will be included in the search index, represented as a CLDR territory code.',
      }),
    excludedDestinations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of destinations to exclude for this target (corresponds to unchecked check boxes in Merchant Center).',
      }),
    includedDestinations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`. List of supported destinations (if available to the account): - DisplayAds - Shopping - ShoppingActions - SurfacesAcrossGoogle ',
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targets[].country`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DatafeedTarget')

const DatafeedSchema = z
  .object({
    attributeLanguage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-letter ISO 639-1 language in which the attributes are defined in the data feed.',
      }),
    contentLanguage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[DEPRECATED] Please use targets[].language instead. The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targetCountry`.',
      }),
    contentType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The type of data feed. For product inventory feeds, only feeds for local stores, not online stores, are supported. Acceptable values are: - "`local products`" - "`product inventory`" - "`products`" ',
      }),
    fetchSchedule: DatafeedFetchScheduleSchema.exactOptional().openapi({
      description: 'Fetch schedule for the feed file.',
    }),
    fileName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The filename of the feed. All feeds must have a unique file name.',
      }),
    format: DatafeedFormatSchema.exactOptional().openapi({
      description: 'Format of the feed file.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required for update. The ID of the data feed.' }),
    intendedDestinations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          '[DEPRECATED] Please use targets[].includedDestinations instead. The list of intended destinations (corresponds to checked check boxes in Merchant Center).',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#datafeed`"',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required for insert. A descriptive name of the data feed.' }),
    targetCountry: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[DEPRECATED] Please use targets[].country instead. The country where the items in the feed will be included in the search index, represented as a CLDR territory code.',
      }),
    targets: z
      .array(DatafeedTargetSchema)
      .exactOptional()
      .openapi({
        description: 'The targets this feed should apply to (country, language, destinations).',
      }),
  })
  .openapi({ description: 'Datafeed configuration data.', required: [] })
  .openapi('Datafeed')

const DatafeedStatusExampleSchema = z
  .object({
    itemId: z.string().exactOptional().openapi({ description: 'The ID of the example item.' }),
    lineNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Line number in the data feed where the example is found.' }),
    value: z.string().exactOptional().openapi({ description: 'The problematic value.' }),
  })
  .openapi({ description: 'An example occurrence for a particular error.', required: [] })
  .openapi('DatafeedStatusExample')

const DatafeedStatusErrorSchema = z
  .object({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the error, e.g., "validation/invalid_value".' }),
    count: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of occurrences of the error in the feed.' }),
    examples: z
      .array(DatafeedStatusExampleSchema)
      .exactOptional()
      .openapi({ description: 'A list of example occurrences of the error, grouped by product.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error message, e.g., "Invalid price".' }),
  })
  .openapi({ description: 'An error occurring in the feed, like "invalid price".', required: [] })
  .openapi('DatafeedStatusError')

const DatafeedStatusSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The country for which the status is reported, represented as a CLDR territory code.',
      }),
    datafeedId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the feed for which the status is reported.' }),
    errors: z
      .array(DatafeedStatusErrorSchema)
      .exactOptional()
      .openapi({ description: 'The list of errors occurring in the feed.' }),
    itemsTotal: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of items in the feed that were processed.' }),
    itemsValid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of items in the feed that were valid.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#datafeedStatus`"',
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The two-letter ISO 639-1 language for which the status is reported.',
      }),
    lastUploadDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last date at which the feed was uploaded.' }),
    processingStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The processing status of the feed. Acceptable values are: - "`"`failure`": The feed could not be processed or all items had errors.`" - "`in progress`": The feed is being processed. - "`none`": The feed has not yet been processed. For example, a feed that has never been uploaded will have this processing status. - "`success`": The feed was processed successfully, though some items might have had errors. ',
      }),
    warnings: z
      .array(DatafeedStatusErrorSchema)
      .exactOptional()
      .openapi({ description: 'The list of errors occurring in the feed.' }),
  })
  .openapi({
    description:
      'The status of a datafeed, i.e., the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished.',
    required: [],
  })
  .openapi('DatafeedStatus')

const DatafeedsCustomBatchRequestEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'An entry ID, unique within the batch request.' }),
    datafeed: DatafeedSchema.exactOptional().openapi({ description: 'The data feed to insert.' }),
    datafeedId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the data feed to get, delete or fetch.' }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the managing account.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The method of the batch entry. Acceptable values are: - "`delete`" - "`fetchNow`" - "`get`" - "`insert`" - "`update`" ',
      }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch datafeeds request.',
    required: [],
  })
  .openapi('DatafeedsCustomBatchRequestEntry')

const DatafeedsCustomBatchRequestSchema = z
  .object({
    entries: z
      .array(DatafeedsCustomBatchRequestEntrySchema)
      .exactOptional()
      .openapi({ description: 'The request entries to be processed in the batch.' }),
  })
  .openapi({ required: [] })
  .openapi('DatafeedsCustomBatchRequest')

const DatafeedsCustomBatchResponseEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The ID of the request entry this entry responds to.' }),
    datafeed: DatafeedSchema.exactOptional().openapi({
      description: 'The requested data feed. Defined if and only if the request was successful.',
    }),
    errors: ErrorsSchema.exactOptional().openapi({
      description: 'A list of errors defined if and only if the request failed.',
    }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch datafeeds response.',
    required: [],
  })
  .openapi('DatafeedsCustomBatchResponseEntry')

const DatafeedsCustomBatchResponseSchema = z
  .object({
    entries: z
      .array(DatafeedsCustomBatchResponseEntrySchema)
      .exactOptional()
      .openapi({ description: 'The result of the execution of the batch requests.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#datafeedsCustomBatchResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('DatafeedsCustomBatchResponse')

const DatafeedsFetchNowResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#datafeedsFetchNowResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('DatafeedsFetchNowResponse')

const DatafeedsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#datafeedsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token for the retrieval of the next page of datafeeds.' }),
    resources: z.array(DatafeedSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatafeedsListResponse')

const DatafeedstatusesCustomBatchRequestEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'An entry ID, unique within the batch request.' }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that for multi-target datafeeds this parameter is required.',
      }),
    datafeedId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the data feed to get.' }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that for multi-target datafeeds this parameter is required.',
      }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the managing account.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({ description: 'The method of the batch entry. Acceptable values are: - "`get`" ' }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch datafeedstatuses request.',
    required: [],
  })
  .openapi('DatafeedstatusesCustomBatchRequestEntry')

const DatafeedstatusesCustomBatchRequestSchema = z
  .object({
    entries: z
      .array(DatafeedstatusesCustomBatchRequestEntrySchema)
      .exactOptional()
      .openapi({ description: 'The request entries to be processed in the batch.' }),
  })
  .openapi({ required: [] })
  .openapi('DatafeedstatusesCustomBatchRequest')

const DatafeedstatusesCustomBatchResponseEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The ID of the request entry this entry responds to.' }),
    datafeedStatus: DatafeedStatusSchema.exactOptional().openapi({
      description:
        'The requested data feed status. Defined if and only if the request was successful.',
    }),
    errors: ErrorsSchema.exactOptional().openapi({
      description: 'A list of errors defined if and only if the request failed.',
    }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch datafeedstatuses response.',
    required: [],
  })
  .openapi('DatafeedstatusesCustomBatchResponseEntry')

const DatafeedstatusesCustomBatchResponseSchema = z
  .object({
    entries: z
      .array(DatafeedstatusesCustomBatchResponseEntrySchema)
      .exactOptional()
      .openapi({ description: 'The result of the execution of the batch requests.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesCustomBatchResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('DatafeedstatusesCustomBatchResponse')

const DatafeedstatusesListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#datafeedstatusesListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The token for the retrieval of the next page of datafeed statuses.',
      }),
    resources: z.array(DatafeedStatusSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DatafeedstatusesListResponse')

const GmbAccountsGmbAccountSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email which identifies the GMB account.' }),
    listingCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of listings under this account.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the GMB account.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the GMB account (User or Business).' }),
  })
  .openapi({ required: [] })
  .openapi('GmbAccountsGmbAccount')

const GmbAccountsSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the Merchant Center account.' }),
    gmbAccounts: z
      .array(GmbAccountsGmbAccountSchema)
      .exactOptional()
      .openapi({ description: 'A list of GMB accounts which are available to the merchant.' }),
  })
  .openapi({ required: [] })
  .openapi('GmbAccounts')

const HolidaysHolidaySchema = z
  .object({
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The CLDR territory code of the country in which the holiday is available. E.g. "US", "DE", "GB". A holiday cutoff can only be configured in a shipping settings service with matching delivery country. Always present.',
      }),
    date: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date of the holiday, in ISO 8601 format. E.g. "2016-12-25" for Christmas 2016. Always present.',
      }),
    deliveryGuaranteeDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the order has to arrive at the customer\'s, in ISO 8601 format. E.g. "2016-12-24" for 24th December 2016. Always present.',
      }),
    deliveryGuaranteeHour: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Hour of the day in the delivery location's timezone on the guaranteed delivery date by which the order has to arrive at the customer's. Possible values are: 0 (midnight), 1, ..., 12 (noon), 13, ..., 23. Always present.",
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for the holiday to be used when configuring holiday cutoffs. Always present.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The holiday type. Always present. Acceptable values are: - "`Christmas`" - "`Easter`" - "`Father\'s Day`" - "`Halloween`" - "`Independence Day (USA)`" - "`Mother\'s Day`" - "`Thanksgiving`" - "`Valentine\'s Day`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('HolidaysHoliday')

const InstallmentSchema = z
  .object({
    amount: PriceSchema.exactOptional().openapi({
      description: 'The amount the buyer has to pay per month.',
    }),
    months: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of installments the buyer has to pay.' }),
  })
  .openapi({ required: [] })
  .openapi('Installment')

const InvoiceSummaryAdditionalChargeSummarySchema = z
  .object({
    totalAmount: AmountSchema.exactOptional().openapi({
      description: '[required] Total additional charge for this type.',
    }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[required] Type of the additional charge. Acceptable values are: - "`shipping`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceSummaryAdditionalChargeSummary')

const PromotionSchema = z
  .object({
    promotionAmount: AmountSchema.exactOptional().openapi({
      description:
        '[required] Amount of the promotion. The values here are the promotion applied to the unit price pretax and to the total of the tax amounts.',
    }),
    promotionId: z
      .string()
      .exactOptional()
      .openapi({ description: '[required] ID of the promotion.' }),
  })
  .openapi({ required: [] })
  .openapi('Promotion')

const InvoiceSummarySchema = z
  .object({
    additionalChargeSummaries: z
      .array(InvoiceSummaryAdditionalChargeSummarySchema)
      .exactOptional()
      .openapi({ description: 'Summary of the total amounts of the additional charges.' }),
    customerBalance: AmountSchema.exactOptional().openapi({ description: 'Deprecated.' }),
    googleBalance: AmountSchema.exactOptional().openapi({ description: 'Deprecated.' }),
    merchantBalance: AmountSchema.exactOptional().openapi({ description: 'Deprecated.' }),
    productTotal: AmountSchema.exactOptional().openapi({
      description: '[required] Total price for the product.',
    }),
    promotionSummaries: z
      .array(PromotionSchema)
      .exactOptional()
      .openapi({ description: 'Deprecated.' }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceSummary')

const LiaAboutPageSettingsSchema = z
  .object({
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the verification process for the About page. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" ',
      }),
    url: z.string().exactOptional().openapi({ description: 'The URL for the About page.' }),
  })
  .openapi({ required: [] })
  .openapi('LiaAboutPageSettings')

const LiaInventorySettingsSchema = z
  .object({
    inventoryVerificationContactEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email of the contact for the inventory verification process.' }),
    inventoryVerificationContactName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the contact for the inventory verification process.' }),
    inventoryVerificationContactStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the verification contact. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" ',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the inventory verification process. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('LiaInventorySettings')

const LiaOnDisplayToOrderSettingsSchema = z
  .object({
    shippingCostPolicyUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Shipping cost and policy URL.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the ?On display to order? feature. Acceptable values are: - "`active`" - "`inactive`" - "`pending`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('LiaOnDisplayToOrderSettings')

const LiaPosDataProviderSchema = z
  .object({
    posDataProviderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the POS data provider.' }),
    posExternalAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The account ID by which this merchant is known to the POS data provider.',
      }),
  })
  .openapi({ required: [] })
  .openapi('LiaPosDataProvider')

const LiaCountrySettingsSchema = z
  .object({
    about: LiaAboutPageSettingsSchema.exactOptional().openapi({
      description: 'The settings for the About page.',
    }),
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. CLDR country code (e.g. "US").' }),
    hostedLocalStorefrontActive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The status of the "Merchant hosted local storefront" feature.' }),
    inventory: LiaInventorySettingsSchema.exactOptional().openapi({
      description: 'LIA inventory verification settings.',
    }),
    onDisplayToOrder: LiaOnDisplayToOrderSettingsSchema.exactOptional().openapi({
      description: 'LIA "On Display To Order" settings.',
    }),
    posDataProvider: LiaPosDataProviderSchema.exactOptional().openapi({
      description: 'The POS data provider linked with this country.',
    }),
    storePickupActive: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The status of the "Store pickup" feature.' }),
  })
  .openapi({ required: [] })
  .openapi('LiaCountrySettings')

const LiaSettingsSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the account to which these LIA settings belong. Ignored upon update, always present in get request responses.',
      }),
    countrySettings: z
      .array(LiaCountrySettingsSchema)
      .exactOptional()
      .openapi({ description: 'The LIA settings for each country.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#liaSettings`"',
      }),
  })
  .openapi({
    description:
      'Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.',
    required: [],
  })
  .openapi('LiaSettings')

const LiasettingsCustomBatchRequestEntrySchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the account for which to get/update account LIA settings.',
      }),
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'An entry ID, unique within the batch request.' }),
    contactEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Inventory validation contact email. Required only for SetInventoryValidationContact.',
      }),
    contactName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Inventory validation contact name. Required only for SetInventoryValidationContact.',
      }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The country code. Required only for RequestInventoryVerification.',
      }),
    gmbEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'The GMB account. Required only for RequestGmbAccess.' }),
    liaSettings: LiaSettingsSchema.exactOptional().openapi({
      description: 'The account Lia settings to update. Only defined if the method is `update`.',
    }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the managing account.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The method of the batch entry. Acceptable values are: - "`get`" - "`getAccessibleGmbAccounts`" - "`requestGmbAccess`" - "`requestInventoryVerification`" - "`setInventoryVerificationContact`" - "`update`" ',
      }),
    posDataProviderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of POS data provider. Required only for SetPosProvider.' }),
    posExternalAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The account ID by which this merchant is known to the POS provider.',
      }),
  })
  .openapi({ required: [] })
  .openapi('LiasettingsCustomBatchRequestEntry')

const LiasettingsCustomBatchRequestSchema = z
  .object({
    entries: z
      .array(LiasettingsCustomBatchRequestEntrySchema)
      .exactOptional()
      .openapi({ description: 'The request entries to be processed in the batch.' }),
  })
  .openapi({ required: [] })
  .openapi('LiasettingsCustomBatchRequest')

const PosDataProvidersPosDataProviderSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of Pos data Provider.' }),
    fullName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full name of this POS data Provider.' }),
    providerId: z.string().exactOptional().openapi({ description: 'The ID of the account.' }),
  })
  .openapi({ required: [] })
  .openapi('PosDataProvidersPosDataProvider')

const PosDataProvidersSchema = z
  .object({
    country: z.string().exactOptional().openapi({ description: 'Country code.' }),
    posDataProviders: z
      .array(PosDataProvidersPosDataProviderSchema)
      .exactOptional()
      .openapi({ description: 'A list of POS data providers.' }),
  })
  .openapi({ required: [] })
  .openapi('PosDataProviders')

const LiasettingsCustomBatchResponseEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The ID of the request entry to which this entry responds.' }),
    errors: ErrorsSchema.exactOptional().openapi({
      description: 'A list of errors defined if, and only if, the request failed.',
    }),
    gmbAccounts: GmbAccountsSchema.exactOptional().openapi({
      description: 'The list of accessible GMB accounts.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsCustomBatchResponseEntry`"',
      }),
    liaSettings: LiaSettingsSchema.exactOptional().openapi({
      description: 'The retrieved or updated Lia settings.',
    }),
    posDataProviders: z
      .array(PosDataProvidersSchema)
      .exactOptional()
      .openapi({ description: 'The list of POS data providers.' }),
  })
  .openapi({ required: [] })
  .openapi('LiasettingsCustomBatchResponseEntry')

const LiasettingsCustomBatchResponseSchema = z
  .object({
    entries: z
      .array(LiasettingsCustomBatchResponseEntrySchema)
      .exactOptional()
      .openapi({ description: 'The result of the execution of the batch requests.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#liasettingsCustomBatchResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('LiasettingsCustomBatchResponse')

const LiasettingsGetAccessibleGmbAccountsResponseSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the Merchant Center account.' }),
    gmbAccounts: z
      .array(GmbAccountsGmbAccountSchema)
      .exactOptional()
      .openapi({ description: 'A list of GMB accounts which are available to the merchant.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#liasettingsGetAccessibleGmbAccountsResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('LiasettingsGetAccessibleGmbAccountsResponse')

const LiasettingsListPosDataProvidersResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#liasettingsListPosDataProvidersResponse".',
      }),
    posDataProviders: z
      .array(PosDataProvidersSchema)
      .exactOptional()
      .openapi({ description: 'The list of POS data providers for each eligible country' }),
  })
  .openapi({ required: [] })
  .openapi('LiasettingsListPosDataProvidersResponse')

const LiasettingsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#liasettingsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token for the retrieval of the next page of LIA settings.' }),
    resources: z.array(LiaSettingsSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('LiasettingsListResponse')

const LiasettingsRequestGmbAccessResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#liasettingsRequestGmbAccessResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('LiasettingsRequestGmbAccessResponse')

const LiasettingsRequestInventoryVerificationResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#liasettingsRequestInventoryVerificationResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('LiasettingsRequestInventoryVerificationResponse')

const LiasettingsSetInventoryVerificationContactResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#liasettingsSetInventoryVerificationContactResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('LiasettingsSetInventoryVerificationContactResponse')

const LiasettingsSetPosDataProviderResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#liasettingsSetPosDataProviderResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('LiasettingsSetPosDataProviderResponse')

const LoyaltyPointsSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of loyalty points program. It is recommended to limit the name to 12 full-width characters or 24 Roman characters.',
      }),
    pointsValue: z
      .string()
      .exactOptional()
      .openapi({ description: "The retailer's loyalty points in absolute value." }),
    ratio: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The ratio of a point when converted to currency. Google assumes currency based on Merchant Center settings. If ratio is left out, it defaults to 1.0.',
      }),
  })
  .openapi({ required: [] })
  .openapi('LoyaltyPoints')

const RefundReasonSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Description of the reason.' }),
    reasonCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Code of the refund reason. Acceptable values are: - "`adjustment`" - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`customerSupportRequested`" - "`deliveredLateByCarrier`" - "`deliveredTooLate`" - "`expiredItem`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`feeAdjustment`" - "`invalidCoupon`" - "`lateShipmentCredit`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceAdjustment`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`promoReallocation`" - "`qualityNotAsExpected`" - "`returnRefundAbuse`" - "`shippingCostAdjustment`" - "`shippingPriceError`" - "`taxAdjustment`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('RefundReason')

const OrderLineItemProductFeeSchema = z
  .object({
    amount: PriceSchema.exactOptional().openapi({ description: 'Amount of the fee.' }),
    name: z.string().exactOptional().openapi({ description: 'Name of the fee.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderLineItemProductFee')

const OrderLineItemProductVariantAttributeSchema = z
  .object({
    dimension: z.string().exactOptional().openapi({ description: 'The dimension of the variant.' }),
    value: z.string().exactOptional().openapi({ description: 'The value for the dimension.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderLineItemProductVariantAttribute')

const OrderLineItemProductSchema = z
  .object({
    brand: z.string().exactOptional().openapi({ description: 'Brand of the item.' }),
    channel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The item\'s channel (online or local). Acceptable values are: - "`local`" - "`online`" ',
      }),
    condition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Condition or state of the item. Acceptable values are: - "`new`" - "`refurbished`" - "`used`" ',
      }),
    contentLanguage: z
      .string()
      .exactOptional()
      .openapi({ description: 'The two-letter ISO 639-1 language code for the item.' }),
    fees: z
      .array(OrderLineItemProductFeeSchema)
      .exactOptional()
      .openapi({ description: 'Associated fees at order creation time.' }),
    gtin: z
      .string()
      .exactOptional()
      .openapi({ description: 'Global Trade Item Number (GTIN) of the item.' }),
    id: z.string().exactOptional().openapi({ description: 'The REST ID of the product.' }),
    imageLink: z.string().exactOptional().openapi({ description: 'URL of an image of the item.' }),
    itemGroupId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Shared identifier for all variants of the same product.' }),
    mpn: z
      .string()
      .exactOptional()
      .openapi({ description: 'Manufacturer Part Number (MPN) of the item.' }),
    offerId: z.string().exactOptional().openapi({ description: 'An identifier of the item.' }),
    price: PriceSchema.exactOptional().openapi({ description: 'Price of the item.' }),
    shownImage: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL to the cached image shown to the user when order was placed.' }),
    targetCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'The CLDR territory // code of the target country of the product.' }),
    title: z.string().exactOptional().openapi({ description: 'The title of the product.' }),
    variantAttributes: z
      .array(OrderLineItemProductVariantAttributeSchema)
      .exactOptional()
      .openapi({
        description:
          'Variant attributes for the item. These are dimensions of the product, such as color, gender, material, pattern, and size. You can find a comprehensive list of variant attributes here.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderLineItemProduct')

const MerchantOrderReturnItemSchema = z
  .object({
    customerReturnReason: CustomerReturnReasonSchema.exactOptional().openapi({
      description: 'The reason that the customer chooses to return an item.',
    }),
    itemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Product level item ID. If the returned items are of the same product, they will have the same ID.',
      }),
    merchantReturnReason: RefundReasonSchema.exactOptional().openapi({
      description: 'The reason that merchant chooses to accept a return item.',
    }),
    product: OrderLineItemProductSchema.exactOptional().openapi({
      description: 'Product data from the time of the order placement.',
    }),
    returnShipmentIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'IDs of the return shipments that this return item belongs to.' }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'State of the item. Acceptable values are: - "`canceled`" - "`new`" - "`received`" - "`refunded`" - "`rejected`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('MerchantOrderReturnItem')

const ShipmentTrackingInfoSchema = z
  .object({
    carrier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The shipping carrier that handles the package. Acceptable values are: - "`boxtal`" - "`bpost`" - "`chronopost`" - "`colisPrive`" - "`colissimo`" - "`cxt`" - "`deliv`" - "`dhl`" - "`dpd`" - "`dynamex`" - "`eCourier`" - "`easypost`" - "`efw`" - "`fedex`" - "`fedexSmartpost`" - "`geodis`" - "`gls`" - "`googleCourier`" - "`gsx`" - "`jdLogistics`" - "`laPoste`" - "`lasership`" - "`manual`" - "`mpx`" - "`onTrac`" - "`other`" - "`tnt`" - "`uds`" - "`ups`" - "`usps`" ',
      }),
    trackingNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tracking number for the package.' }),
  })
  .openapi({ required: [] })
  .openapi('ShipmentTrackingInfo')

const ReturnShipmentSchema = z
  .object({
    creationDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date of creation of the shipment, in ISO 8601 format.' }),
    deliveryDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date of delivery of the shipment, in ISO 8601 format.' }),
    returnMethodType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of the return method. Acceptable values are: - "`byMail`" - "`contactCustomerSupport`" - "`returnless`" ',
      }),
    shipmentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Shipment ID generated by Google.' }),
    shipmentTrackingInfos: z
      .array(ShipmentTrackingInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Tracking information of the shipment. One return shipment might be handled by several shipping carriers sequentially.',
      }),
    shippingDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date of shipping of the shipment, in ISO 8601 format.' }),
    state: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'State of the shipment. Acceptable values are: - "`completed`" - "`new`" - "`shipped`" - "`undeliverable`" - "`pending`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReturnShipment')

const MerchantOrderReturnSchema = z
  .object({
    creationDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date of creation of the return, in ISO 8601 format.' }),
    merchantOrderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Merchant defined order ID.' }),
    orderId: z.string().exactOptional().openapi({ description: 'Google order ID.' }),
    orderReturnId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Order return ID generated by Google.' }),
    returnItems: z
      .array(MerchantOrderReturnItemSchema)
      .exactOptional()
      .openapi({ description: 'Items of the return.' }),
    returnShipments: z
      .array(ReturnShipmentSchema)
      .exactOptional()
      .openapi({ description: 'Shipments of the return.' }),
  })
  .openapi({
    description:
      'Order return. Production access (all methods) requires the order manager role. Sandbox access does not.',
    required: [],
  })
  .openapi('MerchantOrderReturn')

const OrderCustomerMarketingRightsInfoSchema = z
  .object({
    explicitMarketingPreference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last known customer selection regarding marketing preferences. In certain cases this selection might not be known, so this field would be empty. If a customer selected `granted` in their most recent order, they can be subscribed to marketing emails. Customers who have chosen `denied` must not be subscribed, or must be unsubscribed if already opted-in. Acceptable values are: - "`denied`" - "`granted`" ',
      }),
    lastUpdatedTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Timestamp when last time marketing preference was updated. Could be empty, if user wasn't offered a selection yet.",
      }),
    marketingEmailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Email address that can be used for marketing purposes. The field may be empty even if `explicitMarketingPreference` is 'granted'. This happens when retrieving an old order from the customer who deleted their account.",
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderCustomerMarketingRightsInfo')

const OrderCustomerSchema = z
  .object({
    email: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
    explicitMarketingPreference: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Deprecated. Please use marketingRightsInfo instead.' }),
    fullName: z.string().exactOptional().openapi({ description: 'Full name of the customer.' }),
    invoiceReceivingEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email address for the merchant to send value-added tax or invoice documentation of the order. Only the last document sent is made available to the customer. For more information, see About automated VAT invoicing for Buy on Google.',
      }),
    marketingRightsInfo: OrderCustomerMarketingRightsInfoSchema.exactOptional().openapi({
      description:
        "Customer's marketing preferences. Contains the marketing opt-in information that is current at the time that the merchant call. User preference selections can change from one order to the next so preferences must be checked with every order.",
    }),
  })
  .openapi({ required: [] })
  .openapi('OrderCustomer')

const OrderAddressSchema = z
  .object({
    country: z.string().exactOptional().openapi({ description: 'CLDR country code (e.g. "US").' }),
    fullAddress: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Strings representing the lines of the printed label for mailing the order, for example: John Smith 1600 Amphitheatre Parkway Mountain View, CA, 94043 United States ',
      }),
    isPostOfficeBox: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the address is a post office box.' }),
    locality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'City, town or commune. May also include dependent localities or sublocalities (e.g. neighborhoods or suburbs).',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal Code or ZIP (e.g. "94043").' }),
    recipientName: z.string().exactOptional().openapi({ description: 'Name of the recipient.' }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Top-level administrative subdivision of the country. For example, a state like California ("CA") or a province like Quebec ("QC").',
      }),
    streetAddress: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Street-level part of the address.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderAddress')

const OrderDeliveryDetailsSchema = z
  .object({
    address: OrderAddressSchema.exactOptional().openapi({ description: 'The delivery address' }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The phone number of the person receiving the delivery.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderDeliveryDetails')

const OrderMerchantProvidedAnnotationSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Key for additional merchant provided (as key-value pairs) annotation about the line item.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value for additional merchant provided (as key-value pairs) annotation about the line item.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderMerchantProvidedAnnotation')

const OrderCancellationSchema = z
  .object({
    actor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The actor that created the cancellation. Acceptable values are: - "`customer`" - "`googleBot`" - "`googleCustomerService`" - "`googlePayments`" - "`googleSabre`" - "`merchant`" ',
      }),
    creationDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Date on which the cancellation has been created, in ISO 8601 format.',
      }),
    quantity: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The quantity that was canceled.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the cancellation. Orders that are canceled with a noInventory reason will lead to the removal of the product from Buy on Google until you make an update to that product. This will not affect your Shopping ads. Acceptable values are: - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`customerCanceled`" - "`customerInitiatedCancel`" - "`customerSupportRequested`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceError`" - "`returnRefundAbuse`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderCancellation')

const OrderLineItemReturnInfoSchema = z
  .object({
    daysToReturn: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. How many days later the item can be returned.' }),
    isReturnable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Required. Whether the item is returnable.' }),
    policyUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. URL of the item return policy.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderLineItemReturnInfo')

const OrderReturnSchema = z
  .object({
    actor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The actor that created the refund. Acceptable values are: - "`customer`" - "`googleBot`" - "`googleCustomerService`" - "`googlePayments`" - "`googleSabre`" - "`merchant`" ',
      }),
    creationDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date on which the item has been created, in ISO 8601 format.' }),
    quantity: z.uint32().exactOptional().openapi({ description: 'Quantity that is returned.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderReturn')

const OrderLineItemShippingDetailsMethodSchema = z
  .object({
    carrier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The carrier for the shipping. Optional. See `shipments[].carrier` for a list of acceptable values.',
      }),
    maxDaysInTransit: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Required. Maximum transit time.' }),
    methodName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the shipping method.' }),
    minDaysInTransit: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Required. Minimum transit time.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderLineItemShippingDetailsMethod')

const OrderLineItemShippingDetailsSchema = z
  .object({
    deliverByDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The delivery by date, in ISO 8601 format.' }),
    method: OrderLineItemShippingDetailsMethodSchema.exactOptional().openapi({
      description: 'Required. Details of the shipping method.',
    }),
    shipByDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The ship by date, in ISO 8601 format.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of shipment. Indicates whether `deliveryDetails` or `pickupDetails` is applicable for this shipment. Acceptable values are: - "`delivery`" - "`pickup`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderLineItemShippingDetails')

const OrderLineItemSchema = z
  .object({
    annotations: z
      .array(OrderMerchantProvidedAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'Annotations that are attached to the line item.' }),
    cancellations: z
      .array(OrderCancellationSchema)
      .exactOptional()
      .openapi({ description: 'Cancellations of the line item.' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the line item.' }),
    price: PriceSchema.exactOptional().openapi({
      description:
        'Total price for the line item. For example, if two items for $10 are purchased, the total price will be $20.',
    }),
    product: OrderLineItemProductSchema.exactOptional().openapi({
      description:
        'Product data as seen by customer from the time of the order placement. Note that certain attributes values (e.g. title or gtin) might be reformatted and no longer match values submitted via product feed.',
    }),
    quantityCanceled: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Number of items canceled.' }),
    quantityDelivered: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Number of items delivered.' }),
    quantityOrdered: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Number of items ordered.' }),
    quantityPending: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Number of items pending.' }),
    quantityReadyForPickup: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Number of items ready for pickup.' }),
    quantityReturned: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Number of items returned.' }),
    quantityShipped: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Number of items shipped.' }),
    returnInfo: OrderLineItemReturnInfoSchema.exactOptional().openapi({
      description: 'Details of the return policy for the line item.',
    }),
    returns: z
      .array(OrderReturnSchema)
      .exactOptional()
      .openapi({ description: 'Returns of the line item.' }),
    shippingDetails: OrderLineItemShippingDetailsSchema.exactOptional().openapi({
      description: 'Details of the requested shipping for the line item.',
    }),
    tax: PriceSchema.exactOptional().openapi({
      description:
        'Total tax amount for the line item. For example, if two items are purchased, and each have a cost tax of $2, the total tax amount will be $4.',
    }),
  })
  .openapi({ required: [] })
  .openapi('OrderLineItem')

const OrderPaymentMethodSchema = z
  .object({
    billingAddress: OrderAddressSchema.exactOptional().openapi({
      description: 'The billing address.',
    }),
    expirationMonth: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The card expiration month (January = 1, February = 2 etc.).' }),
    expirationYear: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The card expiration year (4-digit, e.g. 2015).' }),
    lastFourDigits: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last four digits of the card number.' }),
    phoneNumber: z.string().exactOptional().openapi({ description: 'The billing phone number.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of instrument. Acceptable values are: - "`AMEX`" - "`DISCOVER`" - "`JCB`" - "`MASTERCARD`" - "`UNIONPAY`" - "`VISA`" - "``" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderPaymentMethod')

const OrderPickupDetailsCollectorSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the person picking up the shipment.' }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Phone number of the person picking up the shipment.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderPickupDetailsCollector')

const OrderPickupDetailsSchema = z
  .object({
    address: OrderAddressSchema.exactOptional().openapi({
      description:
        'Address of the pickup location where the shipment should be sent. Note that `recipientName` in the address is the name of the business at the pickup location.',
    }),
    collectors: z
      .array(OrderPickupDetailsCollectorSchema)
      .exactOptional()
      .openapi({
        description: 'Collectors authorized to pick up shipment from the pickup location.',
      }),
    locationId: z.string().exactOptional().openapi({ description: 'ID of the pickup location.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderPickupDetails')

const OrderLegacyPromotionBenefitSchema = z
  .object({
    discount: PriceSchema.exactOptional().openapi({
      description: 'The discount in the order price when the promotion is applied.',
    }),
    offerIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The OfferId(s) that were purchased in this order and map to this specific benefit of the promotion.',
      }),
    subType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Further describes the benefit of the promotion. Note that we will expand on this enumeration as we support new promotion sub-types. Acceptable values are: - "`buyMGetMoneyOff`" - "`buyMGetNMoneyOff`" - "`buyMGetNPercentOff`" - "`buyMGetPercentOff`" - "`freeGift`" - "`freeGiftWithItemId`" - "`freeGiftWithValue`" - "`freeOvernightShipping`" - "`freeShipping`" - "`freeTwoDayShipping`" - "`moneyOff`" - "`percentageOff`" - "`rewardPoints`" - "`salePrice`" ',
      }),
    taxImpact: PriceSchema.exactOptional().openapi({
      description: 'The impact on tax when the promotion is applied.',
    }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Describes whether the promotion applies to products (e.g. 20% off) or to shipping (e.g. Free Shipping). Acceptable values are: - "`product`" - "`shipping`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderLegacyPromotionBenefit')

const OrderLegacyPromotionSchema = z
  .object({
    benefits: z.array(OrderLegacyPromotionBenefitSchema).exactOptional(),
    effectiveDates: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time frame when the promotion is active and ready for validation review. Note that the promotion live time may be delayed for a few hours due to the validation review. Start date and end date are separated by a forward slash (/). The start date is specified by the format (YYYY-MM-DD), followed by the letter ?T?, the time of the day when the sale starts (in Greenwich Mean Time, GMT), followed by an expression of the time zone for the sale. The end date is in the same format.',
      }),
    genericRedemptionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The text code that corresponds to the promotion when applied on the retailer?s website.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The unique ID of the promotion.' }),
    longTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'The full title of the promotion.' }),
    productApplicability: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Whether the promotion is applicable to all products or only specific products. Acceptable values are: - "`allProducts`" - "`specificProducts`" ',
      }),
    redemptionChannel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates that the promotion is valid online. Acceptable values are: - "`online`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderLegacyPromotion')

const OrderRefundSchema = z
  .object({
    actor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The actor that created the refund. Acceptable values are: - "`customer`" - "`googleBot`" - "`googleCustomerService`" - "`googlePayments`" - "`googleSabre`" - "`merchant`" ',
      }),
    amount: PriceSchema.exactOptional().openapi({ description: 'The amount that is refunded.' }),
    creationDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date on which the item has been created, in ISO 8601 format.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the refund. Acceptable values are: - "`adjustment`" - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`customerSupportRequested`" - "`deliveredLateByCarrier`" - "`deliveredTooLate`" - "`expiredItem`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`feeAdjustment`" - "`invalidCoupon`" - "`lateShipmentCredit`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceAdjustment`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`promoReallocation`" - "`qualityNotAsExpected`" - "`returnRefundAbuse`" - "`shippingCostAdjustment`" - "`shippingPriceError`" - "`taxAdjustment`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderRefund')

const OrderShipmentLineItemShipmentSchema = z
  .object({
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the line item that is shipped. This value is assigned by Google when an order is created. Either lineItemId or productId is required.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to ship. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
    quantity: z.uint32().exactOptional().openapi({ description: 'The quantity that is shipped.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderShipmentLineItemShipment')

const OrderShipmentScheduledDeliveryDetailsSchema = z
  .object({
    carrierPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The phone number of the carrier fulfilling the delivery. The phone number is formatted as the international notation in ITU-T Recommendation E.123 (e.g., "+41 44 668 1800").',
      }),
    scheduledDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date a shipment is scheduled for delivery, in ISO 8601 format.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderShipmentScheduledDeliveryDetails')

const OrderShipmentSchema = z
  .object({
    carrier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The carrier handling the shipment. For supported carriers, Google includes the carrier name and tracking URL in emails to customers. For select supported carriers, Google also automatically updates the shipment status based on the provided shipment ID. *Note:* You can also use unsupported carriers, but emails to customers will not include the carrier name or tracking URL, and there will be no automatic order status updates. Supported carriers for US are: - "`ups`" (United Parcel Service) *automatic status updates* - "`usps`" (United States Postal Service) *automatic status updates* - "`fedex`" (FedEx) *automatic status updates * - "`dhl`" (DHL eCommerce) *automatic status updates* (US only) - "`ontrac`" (OnTrac) *automatic status updates * - "`dhl express`" (DHL Express) - "`deliv`" (Deliv) - "`dynamex`" (TForce) - "`lasership`" (LaserShip) - "`mpx`" (Military Parcel Xpress) - "`uds`" (United Delivery Service) - "`efw`" (Estes Forwarding Worldwide) - "`jd logistics`" (JD Logistics) - "`yunexpress`" (YunExpress) - "`china post`" (China Post) - "`china ems`" (China Post Express Mail Service) - "`singapore post`" (Singapore Post) - "`pos malaysia`" (Pos Malaysia) - "`postnl`" (PostNL) - "`ptt`" (PTT Turkish Post) - "`eub`" (ePacket) - "`chukou1`" (Chukou1 Logistics) - "`bestex`" (Best Express) - "`canada post`" (Canada Post) - "`purolator`" (Purolator) - "`canpar`" (Canpar) - "`india post`" (India Post) - "`blue dart`" (Blue Dart) - "`delhivery`" (Delhivery) - "`dtdc`" (DTDC) - "`tpc india`" (TPC India) Supported carriers for FR are: - "`la poste`" (La Poste) *automatic status updates * - "`colissimo`" (Colissimo by La Poste) *automatic status updates* - "`ups`" (United Parcel Service) *automatic status updates * - "`chronopost`" (Chronopost by La Poste) - "`gls`" (General Logistics Systems France) - "`dpd`" (DPD Group by GeoPost) - "`bpost`" (Belgian Post Group) - "`colis prive`" (Colis Privé) - "`boxtal`" (Boxtal) - "`geodis`" (GEODIS) - "`tnt`" (TNT) - "`db schenker`" (DB Schenker) - "`aramex`" (Aramex) ',
      }),
    creationDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date on which the shipment has been created, in ISO 8601 format.' }),
    deliveryDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the shipment has been delivered, in ISO 8601 format. Present only if `status` is `delivered`',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the shipment.' }),
    lineItems: z
      .array(OrderShipmentLineItemShipmentSchema)
      .exactOptional()
      .openapi({ description: 'The line items that are shipped.' }),
    scheduledDeliveryDetails: OrderShipmentScheduledDeliveryDetailsSchema.exactOptional().openapi({
      description: 'Delivery details of the shipment if scheduling is needed.',
    }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the shipment. Acceptable values are: - "`delivered`" - "`readyForPickup`" - "`shipped`" - "`undeliverable`" ',
      }),
    trackingId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tracking ID for the shipment.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderShipment')

const OrderSchema = z
  .object({
    acknowledged: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the order was acknowledged.' }),
    channelType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Acceptable values are: - "`googleExpress`" - "`purchasesOnGoogle`" ',
      }),
    customer: OrderCustomerSchema.exactOptional().openapi({
      description: 'The details of the customer who placed the order.',
    }),
    deliveryDetails: OrderDeliveryDetailsSchema.exactOptional().openapi({
      description: 'Delivery details for shipments of type `delivery`.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The REST ID of the order. Globally unique.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#order`"',
      }),
    lineItems: z
      .array(OrderLineItemSchema)
      .exactOptional()
      .openapi({ description: 'Line items that are ordered.' }),
    merchantId: z.string().exactOptional(),
    merchantOrderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Merchant-provided ID of the order.' }),
    netAmount: PriceSchema.exactOptional().openapi({
      description:
        'The net amount for the order. For example, if an order was originally for a grand total of $100 and a refund was issued for $20, the net amount will be $80.',
    }),
    paymentMethod: OrderPaymentMethodSchema.exactOptional().openapi({
      description: 'The details of the payment method.',
    }),
    paymentStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the payment. Acceptable values are: - "`paymentCaptured`" - "`paymentRejected`" - "`paymentSecured`" - "`pendingAuthorization`" ',
      }),
    pickupDetails: OrderPickupDetailsSchema.exactOptional().openapi({
      description: 'Pickup details for shipments of type `pickup`.',
    }),
    placedDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date when the order was placed, in ISO 8601 format.' }),
    promotions: z
      .array(OrderLegacyPromotionSchema)
      .exactOptional()
      .openapi({
        description:
          'The details of the merchant provided promotions applied to the order. To determine which promotions apply to which products, check the `Promotions[].Benefits[].OfferIds` field against the `LineItems[].Product.OfferId` field for each promotion. If a promotion is applied to more than 1 `offerId`, divide the discount value by the number of affected offers to determine how much discount to apply to each `offerId`. Examples: 1. To calculate the line item level discount for a single specific item: For each promotion, subtract the `Promotions[].Benefits[].Discount.value` amount from the `LineItems[].Price.value`. 2. To calculate the line item level discount for multiple quantity of a specific item: For each promotion, divide the `Promotions[].Benefits[].Discount.value` by the quantity of products and substract it from `LineItems[].Product.Price.value` for each quantity item. Only 1 promotion can be applied to an offerId in a given order. To refund an item which had a promotion applied to it, make sure to refund the amount after first subtracting the promotion discount from the item price. More details about the program are here.',
      }),
    refunds: z
      .array(OrderRefundSchema)
      .exactOptional()
      .openapi({ description: 'Refunds for the order.' }),
    shipments: z
      .array(OrderShipmentSchema)
      .exactOptional()
      .openapi({ description: 'Shipments of the order.' }),
    shippingCost: PriceSchema.exactOptional().openapi({
      description: 'The total cost of shipping for all items.',
    }),
    shippingCostTax: PriceSchema.exactOptional().openapi({
      description: 'The tax for the total shipping cost.',
    }),
    shippingOption: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Shipping details are provided with line items instead. Acceptable values are: - "`economy`" - "`expedited`" - "`oneDay`" - "`sameDay`" - "`standard`" - "`twoDay`" ',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the order. Acceptable values are: - "`canceled`" - "`delivered`" - "`inProgress`" - "`partiallyDelivered`" - "`partiallyReturned`" - "`partiallyShipped`" - "`pendingShipment`" - "`returned`" - "`shipped`" ',
      }),
    taxCollector: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The party responsible for collecting and remitting taxes. Acceptable values are: - "`marketplaceFacilitator`" - "`merchant`" ',
      }),
  })
  .openapi({
    description:
      'Order. Production access (all methods) requires the order manager role. Sandbox access does not.',
    required: [],
  })
  .openapi('Order')

const OrderReportDisbursementSchema = z
  .object({
    disbursementAmount: PriceSchema.exactOptional().openapi({
      description: 'The disbursement amount.',
    }),
    disbursementCreationDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The disbursement date, in ISO 8601 format.' }),
    disbursementDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date the disbursement was initiated, in ISO 8601 format.' }),
    disbursementId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the disbursement.' }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the managing account.' }),
  })
  .openapi({
    description: 'Order disbursement. All methods require the payment analyst role.',
    required: [],
  })
  .openapi('OrderReportDisbursement')

const ProductAmountSchema = z
  .object({
    priceAmount: PriceSchema.exactOptional().openapi({
      description: 'The pre-tax or post-tax price depending on the location of the order.',
    }),
    remittedTaxAmount: PriceSchema.exactOptional().openapi({ description: 'Remitted tax value.' }),
    taxAmount: PriceSchema.exactOptional().openapi({ description: 'Tax value.' }),
  })
  .openapi({ required: [] })
  .openapi('ProductAmount')

const OrderReportTransactionSchema = z
  .object({
    disbursementAmount: PriceSchema.exactOptional().openapi({
      description: 'The disbursement amount.',
    }),
    disbursementCreationDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date the disbursement was created, in ISO 8601 format.' }),
    disbursementDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date the disbursement was initiated, in ISO 8601 format.' }),
    disbursementId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the disbursement.' }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the managing account.' }),
    merchantOrderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Merchant-provided ID of the order.' }),
    orderId: z.string().exactOptional().openapi({ description: 'The ID of the order.' }),
    productAmount: AmountSchema.exactOptional().openapi({
      description: 'Total amount for the items.',
    }),
    productAmountWithRemittedTax: ProductAmountSchema.exactOptional().openapi({
      description: 'Total amount with remitted tax for the items.',
    }),
    transactionDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date of the transaction, in ISO 8601 format.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderReportTransaction')

const UnitInvoiceAdditionalChargeSchema = z
  .object({
    additionalChargeAmount: AmountSchema.exactOptional().openapi({
      description: '[required] Amount of the additional charge.',
    }),
    additionalChargePromotions: z
      .array(PromotionSchema)
      .exactOptional()
      .openapi({ description: 'Deprecated.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[required] Type of the additional charge. Acceptable values are: - "`shipping`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('UnitInvoiceAdditionalCharge')

const UnitInvoiceTaxLineSchema = z
  .object({
    taxAmount: PriceSchema.exactOptional().openapi({
      description: '[required] Tax amount for the tax type.',
    }),
    taxName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional name of the tax type. This should only be provided if `taxType` is `otherFeeTax`.',
      }),
    taxType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[required] Type of the tax. Acceptable values are: - "`otherFee`" - "`otherFeeTax`" - "`sales`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('UnitInvoiceTaxLine')

const UnitInvoiceSchema = z
  .object({
    additionalCharges: z
      .array(UnitInvoiceAdditionalChargeSchema)
      .exactOptional()
      .openapi({ description: 'Additional charges for a unit, e.g. shipping costs.' }),
    promotions: z.array(PromotionSchema).exactOptional().openapi({ description: 'Deprecated.' }),
    unitPricePretax: PriceSchema.exactOptional().openapi({
      description: '[required] Price of the unit, before applying taxes.',
    }),
    unitPriceTaxes: z
      .array(UnitInvoiceTaxLineSchema)
      .exactOptional()
      .openapi({ description: 'Tax amounts to apply to the unit price.' }),
  })
  .openapi({ required: [] })
  .openapi('UnitInvoice')

const ShipmentInvoiceLineItemInvoiceSchema = z
  .object({
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the line item. Either lineItemId or productId must be set.' }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the product. This is the REST ID used in the products service. Either lineItemId or productId must be set.',
      }),
    shipmentUnitIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          '[required] The shipment unit ID is assigned by the merchant and defines individual quantities within a line item. The same ID can be assigned to units that are the same while units that differ must be assigned a different ID (for example: free or promotional units).',
      }),
    unitInvoice: UnitInvoiceSchema.exactOptional().openapi({
      description: '[required] Invoice details for a single unit.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ShipmentInvoiceLineItemInvoice')

const OrderinvoicesCreateChargeInvoiceRequestSchema = z
  .object({
    invoiceId: z
      .string()
      .exactOptional()
      .openapi({ description: '[required] The ID of the invoice.' }),
    invoiceSummary: InvoiceSummarySchema.exactOptional().openapi({
      description: '[required] Invoice summary.',
    }),
    lineItemInvoices: z
      .array(ShipmentInvoiceLineItemInvoiceSchema)
      .exactOptional()
      .openapi({ description: '[required] Invoice details per line item.' }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[required] The ID of the operation, unique across all operations for a given order.',
      }),
    shipmentGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[required] ID of the shipment group. It is assigned by the merchant in the `shipLineItems` method and is used to group multiple line items that have the same kind of shipping charges.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderinvoicesCreateChargeInvoiceRequest')

const OrderinvoicesCreateChargeInvoiceResponseSchema = z
  .object({
    executionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#orderinvoicesCreateChargeInvoiceResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderinvoicesCreateChargeInvoiceResponse')

const OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOptionSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional description of the refund reason.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[required] Reason for the refund. Acceptable values are: - "`adjustment`" - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`customerSupportRequested`" - "`deliveredLateByCarrier`" - "`deliveredTooLate`" - "`expiredItem`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`feeAdjustment`" - "`invalidCoupon`" - "`lateShipmentCredit`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceAdjustment`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`promoReallocation`" - "`qualityNotAsExpected`" - "`returnRefundAbuse`" - "`shippingCostAdjustment`" - "`shippingPriceError`" - "`taxAdjustment`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOption')

const OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOptionSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional description of the return reason.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[required] Reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOption')

const ShipmentInvoiceSchema = z
  .object({
    invoiceSummary: InvoiceSummarySchema.exactOptional().openapi({
      description: '[required] Invoice summary.',
    }),
    lineItemInvoices: z
      .array(ShipmentInvoiceLineItemInvoiceSchema)
      .exactOptional()
      .openapi({ description: '[required] Invoice details per line item.' }),
    shipmentGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[required] ID of the shipment group. It is assigned by the merchant in the `shipLineItems` method and is used to group multiple line items that have the same kind of shipping charges.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ShipmentInvoice')

const OrderinvoicesCreateRefundInvoiceRequestSchema = z
  .object({
    invoiceId: z
      .string()
      .exactOptional()
      .openapi({ description: '[required] The ID of the invoice.' }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[required] The ID of the operation, unique across all operations for a given order.',
      }),
    refundOnlyOption:
      OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceRefundOptionSchema.exactOptional().openapi(
        {
          description:
            'Option to create a refund-only invoice. Exactly one of `refundOnlyOption` or `returnOption` must be provided.',
        },
      ),
    returnOption:
      OrderinvoicesCustomBatchRequestEntryCreateRefundInvoiceReturnOptionSchema.exactOptional().openapi(
        {
          description:
            'Option to create an invoice for a refund and mark all items within the invoice as returned. Exactly one of `refundOnlyOption` or `returnOption` must be provided.',
        },
      ),
    shipmentInvoices: z
      .array(ShipmentInvoiceSchema)
      .exactOptional()
      .openapi({ description: 'Invoice details for different shipment groups.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderinvoicesCreateRefundInvoiceRequest')

const OrderinvoicesCreateRefundInvoiceResponseSchema = z
  .object({
    executionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#orderinvoicesCreateRefundInvoiceResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderinvoicesCreateRefundInvoiceResponse')

const OrderreportsListDisbursementsResponseSchema = z
  .object({
    disbursements: z
      .array(OrderReportDisbursementSchema)
      .exactOptional()
      .openapi({ description: 'The list of disbursements.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#orderreportsListDisbursementsResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token for the retrieval of the next page of disbursements.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderreportsListDisbursementsResponse')

const OrderreportsListTransactionsResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#orderreportsListTransactionsResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token for the retrieval of the next page of transactions.' }),
    transactions: z
      .array(OrderReportTransactionSchema)
      .exactOptional()
      .openapi({ description: 'The list of transactions.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderreportsListTransactionsResponse')

const OrderreturnsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#orderreturnsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token for the retrieval of the next page of returns.' }),
    resources: z.array(MerchantOrderReturnSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderreturnsListResponse')

const OrdersAcknowledgeRequestSchema = z
  .object({
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the operation. Unique across all operations for a given order.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersAcknowledgeRequest')

const OrdersAcknowledgeResponseSchema = z
  .object({
    executionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersAcknowledgeResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersAcknowledgeResponse')

const OrdersAdvanceTestOrderResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersAdvanceTestOrderResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersAdvanceTestOrderResponse')

const OrdersCancelLineItemRequestSchema = z
  .object({
    amount: PriceSchema.exactOptional().openapi({
      description: 'Deprecated. Please use amountPretax and amountTax instead.',
    }),
    amountPretax: PriceSchema.exactOptional().openapi({
      description:
        'Amount to refund for the cancelation. Optional. If not set, Google will calculate the default based on the price and tax of the items involved. The amount must not be larger than the net amount left on the order.',
    }),
    amountTax: PriceSchema.exactOptional().openapi({
      description:
        'Tax amount that corresponds to cancellation amount in amountPretax. Optional, but if filled, then amountPretax must be set. Calculated automatically if not provided.',
    }),
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the line item to cancel. Either lineItemId or productId is required.',
      }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the operation. Unique across all operations for a given order.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
    quantity: z.uint32().exactOptional().openapi({ description: 'The quantity to cancel.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCancelLineItemRequest')

const OrdersCancelLineItemResponseSchema = z
  .object({
    executionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelLineItemResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCancelLineItemResponse')

const OrdersCancelRequestSchema = z
  .object({
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the operation. Unique across all operations for a given order.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCancelRequest')

const OrdersCancelResponseSchema = z
  .object({
    executionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCancelResponse')

const OrdersCancelTestOrderByCustomerRequestSchema = z
  .object({
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the cancellation. Acceptable values are: - "`changedMind`" - "`orderedWrongItem`" - "`other`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCancelTestOrderByCustomerRequest')

const OrdersCancelTestOrderByCustomerResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersCancelTestOrderByCustomerResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCancelTestOrderByCustomerResponse')

const TestOrderCustomerMarketingRightsInfoSchema = z
  .object({
    explicitMarketingPreference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last know user use selection regards marketing preferences. In certain cases selection might not be known, so this field would be empty. Acceptable values are: - "`denied`" - "`granted`" ',
      }),
    lastUpdatedTimestamp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Timestamp when last time marketing preference was updated. Could be empty, if user wasn't offered a selection yet.",
      }),
  })
  .openapi({ required: [] })
  .openapi('TestOrderCustomerMarketingRightsInfo')

const TestOrderCustomerSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Email address of the customer. Acceptable values are: - "`pog.dwight.schrute@gmail.com`" - "`pog.jim.halpert@gmail.com`" - "`penpog.pam.beesly@gmail.comding`" ',
      }),
    explicitMarketingPreference: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Deprecated. Please use marketingRightsInfo instead.' }),
    fullName: z.string().exactOptional().openapi({ description: 'Full name of the customer.' }),
    marketingRightsInfo: TestOrderCustomerMarketingRightsInfoSchema.exactOptional().openapi({
      description: "Customer's marketing preferences.",
    }),
  })
  .openapi({ required: [] })
  .openapi('TestOrderCustomer')

const TestOrderLineItemProductSchema = z
  .object({
    brand: z.string().exactOptional().openapi({ description: 'Required. Brand of the item.' }),
    channel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Deprecated. Acceptable values are: - "`online`" ' }),
    condition: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Condition or state of the item. Acceptable values are: - "`new`" ',
      }),
    contentLanguage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The two-letter ISO 639-1 language code for the item. Acceptable values are: - "`en`" - "`fr`" ',
      }),
    fees: z
      .array(OrderLineItemProductFeeSchema)
      .exactOptional()
      .openapi({ description: 'Fees for the item. Optional.' }),
    gtin: z
      .string()
      .exactOptional()
      .openapi({ description: 'Global Trade Item Number (GTIN) of the item. Optional.' }),
    imageLink: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. URL of an image of the item.' }),
    itemGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Shared identifier for all variants of the same product. Optional.',
      }),
    mpn: z
      .string()
      .exactOptional()
      .openapi({ description: 'Manufacturer Part Number (MPN) of the item. Optional.' }),
    offerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. An identifier of the item.' }),
    price: PriceSchema.exactOptional().openapi({
      description:
        'Required. The price for the product. Tax is automatically calculated for orders where marketplace facilitator tax laws are applicable. Otherwise, tax settings from Merchant Center are applied.',
    }),
    targetCountry: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The CLDR territory // code of the target country of the product.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The title of the product.' }),
    variantAttributes: z
      .array(OrderLineItemProductVariantAttributeSchema)
      .exactOptional()
      .openapi({ description: 'Variant attributes for the item. Optional.' }),
  })
  .openapi({ required: [] })
  .openapi('TestOrderLineItemProduct')

const TestOrderLineItemSchema = z
  .object({
    product: TestOrderLineItemProductSchema.exactOptional().openapi({
      description: 'Required. Product data from the time of the order placement.',
    }),
    quantityOrdered: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Required. Number of items ordered.' }),
    returnInfo: OrderLineItemReturnInfoSchema.exactOptional().openapi({
      description: 'Required. Details of the return policy for the line item.',
    }),
    shippingDetails: OrderLineItemShippingDetailsSchema.exactOptional().openapi({
      description: 'Required. Details of the requested shipping for the line item.',
    }),
    unitTax: PriceSchema.exactOptional().openapi({
      description: 'Deprecated. Ignored if provided.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TestOrderLineItem')

const TestOrderPaymentMethodSchema = z
  .object({
    expirationMonth: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The card expiration month (January = 1, February = 2 etc.).' }),
    expirationYear: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The card expiration year (4-digit, e.g. 2015).' }),
    lastFourDigits: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last four digits of the card number.' }),
    predefinedBillingAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The billing address. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" ',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of instrument. Note that real orders might have different values than the four values accepted by `createTestOrder`. Acceptable values are: - "`AMEX`" - "`DISCOVER`" - "`MASTERCARD`" - "`VISA`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('TestOrderPaymentMethod')

const TestOrderSchema = z
  .object({
    customer: TestOrderCustomerSchema.exactOptional().openapi({
      description: 'Required. The details of the customer who placed the order.',
    }),
    enableOrderinvoices: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the orderinvoices service should support this order.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#testOrder`"',
      }),
    lineItems: z
      .array(TestOrderLineItemSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. Line items that are ordered. At least one line item must be provided.',
      }),
    notificationMode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Restricted. Do not use.' }),
    paymentMethod: TestOrderPaymentMethodSchema.exactOptional().openapi({
      description: 'The details of the payment method.',
    }),
    predefinedDeliveryAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Identifier of one of the predefined delivery addresses for the delivery. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" ',
      }),
    predefinedPickupDetails: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier of one of the predefined pickup details. Required for orders containing line items with shipping type `pickup`. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" ',
      }),
    promotions: z
      .array(OrderLegacyPromotionSchema)
      .exactOptional()
      .openapi({ description: 'Deprecated. Ignored if provided.' }),
    shippingCost: PriceSchema.exactOptional().openapi({
      description:
        'Required. The price of shipping for all items. Shipping tax is automatically calculated for orders where marketplace facilitator tax laws are applicable. Otherwise, tax settings from Merchant Center are applied. Note that shipping is not taxed in certain states.',
    }),
    shippingCostTax: PriceSchema.exactOptional().openapi({
      description: 'Deprecated. Ignored if provided.',
    }),
    shippingOption: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The requested shipping option. Acceptable values are: - "`economy`" - "`expedited`" - "`oneDay`" - "`sameDay`" - "`standard`" - "`twoDay`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('TestOrder')

const OrdersCreateTestOrderRequestSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The CLDR territory code of the country of the test order to create. Affects the currency and addresses of orders created via `template_name`, or the addresses of orders created via `test_order`. Acceptable values are: - "`US`" - "`FR`" Defaults to `US`.',
      }),
    templateName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The test order template to use. Specify as an alternative to `testOrder` as a shortcut for retrieving a template and then creating an order using that template. Acceptable values are: - "`template1`" - "`template1a`" - "`template1b`" - "`template2`" - "`template3`" ',
      }),
    testOrder: TestOrderSchema.exactOptional().openapi({
      description: 'The test order to create.',
    }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCreateTestOrderRequest')

const OrdersCreateTestOrderResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersCreateTestOrderResponse".',
      }),
    orderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the newly created test order.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCreateTestOrderResponse')

const OrdersCustomBatchRequestEntryCreateTestReturnReturnItemSchema = z
  .object({
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the line item to return.' }),
    quantity: z.uint32().exactOptional().openapi({ description: 'Quantity that is returned.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequestEntryCreateTestReturnReturnItem')

const OrdersCreateTestReturnRequestSchema = z
  .object({
    items: z
      .array(OrdersCustomBatchRequestEntryCreateTestReturnReturnItemSchema)
      .exactOptional()
      .openapi({ description: 'Returned items.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCreateTestReturnRequest')

const OrdersCreateTestReturnResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersCreateTestReturnResponse".',
      }),
    returnId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the newly created test order return.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCreateTestReturnResponse')

const OrdersCustomBatchRequestEntryCancelSchema = z
  .object({
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequestEntryCancel')

const OrdersCustomBatchRequestEntryCancelLineItemSchema = z
  .object({
    amount: PriceSchema.exactOptional().openapi({
      description: 'Deprecated. Please use amountPretax and amountTax instead.',
    }),
    amountPretax: PriceSchema.exactOptional().openapi({
      description:
        'Amount to refund for the cancelation. Optional. If not set, Google will calculate the default based on the price and tax of the items involved. The amount must not be larger than the net amount left on the order.',
    }),
    amountTax: PriceSchema.exactOptional().openapi({
      description:
        'Tax amount that corresponds to cancellation amount in amountPretax. Optional, but if filled, then amountPretax must be set. Calculated automatically if not provided.',
    }),
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the line item to cancel. Either lineItemId or productId is required.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
    quantity: z.uint32().exactOptional().openapi({ description: 'The quantity to cancel.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequestEntryCancelLineItem')

const OrdersCustomBatchRequestEntryInStoreRefundLineItemSchema = z
  .object({
    amountPretax: PriceSchema.exactOptional().openapi({
      description: 'The amount that is refunded. Required.',
    }),
    amountTax: PriceSchema.exactOptional().openapi({
      description: 'Tax amount that correspond to refund amount in amountPretax. Required.',
    }),
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the line item to return. Either lineItemId or productId is required.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
    quantity: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The quantity to return and refund.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequestEntryInStoreRefundLineItem')

const OrdersCustomBatchRequestEntryRefundSchema = z
  .object({
    amount: PriceSchema.exactOptional().openapi({
      description: 'Deprecated. Please use amountPretax and amountTax instead.',
    }),
    amountPretax: PriceSchema.exactOptional().openapi({
      description: 'The amount that is refunded. Either amount or amountPretax should be filled.',
    }),
    amountTax: PriceSchema.exactOptional().openapi({
      description:
        'Tax amount that corresponds to refund amount in amountPretax. Optional, but if filled, amountPretax must be set. Calculated automatically if not provided.',
    }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the refund. Acceptable values are: - "`adjustment`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`deliveredLateByCarrier`" - "`feeAdjustment`" - "`lateShipmentCredit`" - "`noInventory`" - "`other`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`shippingCostAdjustment`" - "`taxAdjustment`" - "`undeliverableShippingAddress`" - "`wrongProductShipped`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequestEntryRefund')

const OrdersCustomBatchRequestEntryRejectReturnLineItemSchema = z
  .object({
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the line item to return. Either lineItemId or productId is required.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
    quantity: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The quantity to return and refund.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the return. Acceptable values are: - "`damagedOrUsed`" - "`missingComponent`" - "`notEligible`" - "`other`" - "`outOfReturnWindow`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequestEntryRejectReturnLineItem')

const OrdersCustomBatchRequestEntryReturnLineItemSchema = z
  .object({
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the line item to return. Either lineItemId or productId is required.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
    quantity: z.uint32().exactOptional().openapi({ description: 'The quantity to return.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequestEntryReturnLineItem')

const OrdersCustomBatchRequestEntryReturnRefundLineItemSchema = z
  .object({
    amountPretax: PriceSchema.exactOptional().openapi({
      description:
        'The amount that is refunded. If omitted, refundless return is assumed (same as calling returnLineItem method).',
    }),
    amountTax: PriceSchema.exactOptional().openapi({
      description:
        'Tax amount that corresponds to refund amount in amountPretax. Optional, but if filled, then amountPretax must be set. Calculated automatically if not provided.',
    }),
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the line item to return. Either lineItemId or productId is required.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
    quantity: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The quantity to return and refund.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequestEntryReturnRefundLineItem')

const OrdersCustomBatchRequestEntrySetLineItemMetadataSchema = z
  .object({
    annotations: z.array(OrderMerchantProvidedAnnotationSchema).exactOptional(),
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the line item to set metadata. Either lineItemId or productId is required.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequestEntrySetLineItemMetadata')

const OrdersCustomBatchRequestEntryShipLineItemsShipmentInfoSchema = z
  .object({
    carrier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The carrier handling the shipment. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values.',
      }),
    shipmentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ID of the shipment. This is assigned by the merchant and is unique to each shipment.',
      }),
    trackingId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tracking ID for the shipment.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo')

const OrdersCustomBatchRequestEntryShipLineItemsSchema = z
  .object({
    carrier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values.',
      }),
    lineItems: z
      .array(OrderShipmentLineItemShipmentSchema)
      .exactOptional()
      .openapi({ description: 'Line items to ship.' }),
    shipmentGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the shipment group. Required for orders that use the orderinvoices service.',
      }),
    shipmentId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Deprecated. Please use shipmentInfo instead. The ID of the shipment.',
      }),
    shipmentInfos: z
      .array(OrdersCustomBatchRequestEntryShipLineItemsShipmentInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs).',
      }),
    trackingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequestEntryShipLineItems')

const OrdersCustomBatchRequestEntryUpdateLineItemShippingDetailsSchema = z
  .object({
    deliverByDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past.',
      }),
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the line item to set metadata. Either lineItemId or productId is required.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
    shipByDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails')

const OrdersCustomBatchRequestEntryUpdateShipmentSchema = z
  .object({
    carrier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The carrier handling the shipment. Not updated if missing. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values.',
      }),
    deliveryDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if `status` is `delivered`.',
      }),
    shipmentId: z.string().exactOptional().openapi({ description: 'The ID of the shipment.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'New status for the shipment. Not updated if missing. Acceptable values are: - "`delivered`" - "`undeliverable`" - "`readyForPickup`" ',
      }),
    trackingId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tracking ID for the shipment. Not updated if missing.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequestEntryUpdateShipment')

const OrdersCustomBatchRequestEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'An entry ID, unique within the batch request.' }),
    cancel: OrdersCustomBatchRequestEntryCancelSchema.exactOptional().openapi({
      description: 'Required for `cancel` method.',
    }),
    cancelLineItem: OrdersCustomBatchRequestEntryCancelLineItemSchema.exactOptional().openapi({
      description: 'Required for `cancelLineItem` method.',
    }),
    inStoreRefundLineItem:
      OrdersCustomBatchRequestEntryInStoreRefundLineItemSchema.exactOptional().openapi({
        description: 'Required for `inStoreReturnLineItem` method.',
      }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the managing account.' }),
    merchantOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The merchant order ID. Required for `updateMerchantOrderId` and `getByMerchantOrderId` methods.',
      }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The method of the batch entry. Acceptable values are: - "`acknowledge`" - "`cancel`" - "`cancelLineItem`" - "`get`" - "`getByMerchantOrderId`" - "`inStoreRefundLineItem`" - "`refund`" - "`rejectReturnLineItem`" - "`returnLineItem`" - "`returnRefundLineItem`" - "`setLineItemMetadata`" - "`shipLineItems`" - "`updateLineItemShippingDetails`" - "`updateMerchantOrderId`" - "`updateShipment`" ',
      }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the operation. Unique across all operations for a given order. Required for all methods beside `get` and `getByMerchantOrderId`.',
      }),
    orderId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the order. Required for all methods beside `getByMerchantOrderId`.',
      }),
    refund: OrdersCustomBatchRequestEntryRefundSchema.exactOptional().openapi({
      description: 'Required for `refund` method.',
    }),
    rejectReturnLineItem:
      OrdersCustomBatchRequestEntryRejectReturnLineItemSchema.exactOptional().openapi({
        description: 'Required for `rejectReturnLineItem` method.',
      }),
    returnLineItem: OrdersCustomBatchRequestEntryReturnLineItemSchema.exactOptional().openapi({
      description: 'Required for `returnLineItem` method.',
    }),
    returnRefundLineItem:
      OrdersCustomBatchRequestEntryReturnRefundLineItemSchema.exactOptional().openapi({
        description: 'Required for `returnRefundLineItem` method.',
      }),
    setLineItemMetadata:
      OrdersCustomBatchRequestEntrySetLineItemMetadataSchema.exactOptional().openapi({
        description: 'Required for `setLineItemMetadata` method.',
      }),
    shipLineItems: OrdersCustomBatchRequestEntryShipLineItemsSchema.exactOptional().openapi({
      description: 'Required for `shipLineItems` method.',
    }),
    updateLineItemShippingDetails:
      OrdersCustomBatchRequestEntryUpdateLineItemShippingDetailsSchema.exactOptional().openapi({
        description: 'Required for `updateLineItemShippingDate` method.',
      }),
    updateShipment: OrdersCustomBatchRequestEntryUpdateShipmentSchema.exactOptional().openapi({
      description: 'Required for `updateShipment` method.',
    }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequestEntry')

const OrdersCustomBatchRequestSchema = z
  .object({
    entries: z
      .array(OrdersCustomBatchRequestEntrySchema)
      .exactOptional()
      .openapi({ description: 'The request entries to be processed in the batch.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequest')

const OrdersCustomBatchResponseEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The ID of the request entry this entry responds to.' }),
    errors: ErrorsSchema.exactOptional().openapi({
      description: 'A list of errors defined if and only if the request failed.',
    }),
    executionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Only defined if 1. the request was successful; and 2. the method is not `get`, `getByMerchantOrderId`, or one of the test methods. Acceptable values are: - "`duplicate`" - "`executed`" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersCustomBatchResponseEntry`"',
      }),
    order: OrderSchema.exactOptional().openapi({
      description:
        'The retrieved order. Only defined if the method is `get` and if the request was successful.',
    }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchResponseEntry')

const OrdersCustomBatchResponseSchema = z
  .object({
    entries: z
      .array(OrdersCustomBatchResponseEntrySchema)
      .exactOptional()
      .openapi({ description: 'The result of the execution of the batch requests.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersCustomBatchResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchResponse')

const OrdersGetByMerchantOrderIdResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersGetByMerchantOrderIdResponse".',
      }),
    order: OrderSchema.exactOptional().openapi({ description: 'The requested order.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersGetByMerchantOrderIdResponse')

const OrdersGetTestOrderTemplateResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersGetTestOrderTemplateResponse".',
      }),
    template: TestOrderSchema.exactOptional().openapi({
      description: 'The requested test order template.',
    }),
  })
  .openapi({ required: [] })
  .openapi('OrdersGetTestOrderTemplateResponse')

const OrdersInStoreRefundLineItemRequestSchema = z
  .object({
    amountPretax: PriceSchema.exactOptional().openapi({
      description: 'The amount that is refunded. Required.',
    }),
    amountTax: PriceSchema.exactOptional().openapi({
      description: 'Tax amount that correspond to refund amount in amountPretax. Required.',
    }),
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the line item to return. Either lineItemId or productId is required.',
      }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the operation. Unique across all operations for a given order.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
    quantity: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The quantity to return and refund.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersInStoreRefundLineItemRequest')

const OrdersInStoreRefundLineItemResponseSchema = z
  .object({
    executionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersInStoreRefundLineItemResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersInStoreRefundLineItemResponse')

const OrdersListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token for the retrieval of the next page of orders.' }),
    resources: z.array(OrderSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrdersListResponse')

const OrdersRefundRequestSchema = z
  .object({
    amount: PriceSchema.exactOptional().openapi({
      description: 'Deprecated. Please use amountPretax and amountTax instead.',
    }),
    amountPretax: PriceSchema.exactOptional().openapi({
      description: 'The amount that is refunded. Either amount or amountPretax should be filled.',
    }),
    amountTax: PriceSchema.exactOptional().openapi({
      description:
        'Tax amount that corresponds to refund amount in amountPretax. Optional, but if filled, amountPretax must be set. Calculated automatically if not provided.',
    }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the operation. Unique across all operations for a given order.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the refund. Acceptable values are: - "`adjustment`" - "`courtesyAdjustment`" - "`customerCanceled`" - "`customerDiscretionaryReturn`" - "`deliveredLateByCarrier`" - "`feeAdjustment`" - "`lateShipmentCredit`" - "`noInventory`" - "`other`" - "`priceError`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`shippingCostAdjustment`" - "`taxAdjustment`" - "`undeliverableShippingAddress`" - "`wrongProductShipped`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersRefundRequest')

const OrdersRefundResponseSchema = z
  .object({
    executionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersRefundResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersRefundResponse')

const OrdersRejectReturnLineItemRequestSchema = z
  .object({
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the line item to return. Either lineItemId or productId is required.',
      }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the operation. Unique across all operations for a given order.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
    quantity: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The quantity to return and refund.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the return. Acceptable values are: - "`damagedOrUsed`" - "`missingComponent`" - "`notEligible`" - "`other`" - "`outOfReturnWindow`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersRejectReturnLineItemRequest')

const OrdersRejectReturnLineItemResponseSchema = z
  .object({
    executionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersRejectReturnLineItemResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersRejectReturnLineItemResponse')

const OrdersReturnLineItemRequestSchema = z
  .object({
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the line item to return. Either lineItemId or productId is required.',
      }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the operation. Unique across all operations for a given order.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
    quantity: z.uint32().exactOptional().openapi({ description: 'The quantity to return.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersReturnLineItemRequest')

const OrdersReturnLineItemResponseSchema = z
  .object({
    executionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersReturnLineItemResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersReturnLineItemResponse')

const OrdersReturnRefundLineItemRequestSchema = z
  .object({
    amountPretax: PriceSchema.exactOptional().openapi({
      description:
        'The amount that is refunded. If omitted, refundless return is assumed (same as calling returnLineItem method).',
    }),
    amountTax: PriceSchema.exactOptional().openapi({
      description:
        'Tax amount that corresponds to refund amount in amountPretax. Optional, but if filled, then amountPretax must be set. Calculated automatically if not provided.',
    }),
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the line item to return. Either lineItemId or productId is required.',
      }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the operation. Unique across all operations for a given order.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to return. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
    quantity: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The quantity to return and refund. Quantity is required.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the return. Acceptable values are: - "`customerDiscretionaryReturn`" - "`customerInitiatedMerchantCancel`" - "`deliveredTooLate`" - "`expiredItem`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`other`" - "`productArrivedDamaged`" - "`productNotAsDescribed`" - "`qualityNotAsExpected`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`wrongProductShipped`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersReturnRefundLineItemRequest')

const OrdersReturnRefundLineItemResponseSchema = z
  .object({
    executionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersReturnRefundLineItemResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersReturnRefundLineItemResponse')

const OrdersSetLineItemMetadataRequestSchema = z
  .object({
    annotations: z.array(OrderMerchantProvidedAnnotationSchema).exactOptional(),
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the line item to set metadata. Either lineItemId or productId is required.',
      }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the operation. Unique across all operations for a given order.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersSetLineItemMetadataRequest')

const OrdersSetLineItemMetadataResponseSchema = z
  .object({
    executionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersSetLineItemMetadataResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersSetLineItemMetadataResponse')

const OrdersShipLineItemsRequestSchema = z
  .object({
    carrier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Please use shipmentInfo instead. The carrier handling the shipment. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values.',
      }),
    lineItems: z
      .array(OrderShipmentLineItemShipmentSchema)
      .exactOptional()
      .openapi({ description: 'Line items to ship.' }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the operation. Unique across all operations for a given order.',
      }),
    shipmentGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the shipment group. Required for orders that use the orderinvoices service.',
      }),
    shipmentId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Deprecated. Please use shipmentInfo instead. The ID of the shipment.',
      }),
    shipmentInfos: z
      .array(OrdersCustomBatchRequestEntryShipLineItemsShipmentInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs).',
      }),
    trackingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Deprecated. Please use shipmentInfo instead. The tracking ID for the shipment.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersShipLineItemsRequest')

const OrdersShipLineItemsResponseSchema = z
  .object({
    executionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersShipLineItemsResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersShipLineItemsResponse')

const OrdersUpdateLineItemShippingDetailsRequestSchema = z
  .object({
    deliverByDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past.',
      }),
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the line item to set metadata. Either lineItemId or productId is required.',
      }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the operation. Unique across all operations for a given order.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
    shipByDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated. Provided date should be within 1 year timeframe and can not be a date in the past.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersUpdateLineItemShippingDetailsRequest')

const OrdersUpdateLineItemShippingDetailsResponseSchema = z
  .object({
    executionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateLineItemShippingDetailsResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersUpdateLineItemShippingDetailsResponse')

const OrdersUpdateMerchantOrderIdRequestSchema = z
  .object({
    merchantOrderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The merchant order id to be assigned to the order. Must be unique per merchant.',
      }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the operation. Unique across all operations for a given order.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersUpdateMerchantOrderIdRequest')

const OrdersUpdateMerchantOrderIdResponseSchema = z
  .object({
    executionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateMerchantOrderIdResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersUpdateMerchantOrderIdResponse')

const OrdersUpdateShipmentRequestSchema = z
  .object({
    carrier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The carrier handling the shipment. Not updated if missing. See `shipments[].carrier` in the Orders resource representation for a list of acceptable values.',
      }),
    deliveryDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the shipment has been delivered, in ISO 8601 format. Optional and can be provided only if `status` is `delivered`.',
      }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the operation. Unique across all operations for a given order.',
      }),
    shipmentId: z.string().exactOptional().openapi({ description: 'The ID of the shipment.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'New status for the shipment. Not updated if missing. Acceptable values are: - "`delivered`" - "`undeliverable`" - "`readyForPickup`" ',
      }),
    trackingId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tracking ID for the shipment. Not updated if missing.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersUpdateShipmentRequest')

const OrdersUpdateShipmentResponseSchema = z
  .object({
    executionStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Acceptable values are: - "`duplicate`" - "`executed`" ',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#ordersUpdateShipmentResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersUpdateShipmentResponse')

const PickupServicesPickupServiceSchema = z
  .object({
    carrierName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the carrier (e.g., `"UPS"`). Always present.' }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The CLDR country code of the carrier (e.g., "US"). Always present.',
      }),
    serviceName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the pickup service (e.g., `"Access point"`). Always present.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PickupServicesPickupService')

const PosInventorySchema = z
  .object({
    contentLanguage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The two-letter ISO 639-1 language code for the item.' }),
    gtin: z.string().exactOptional().openapi({ description: 'Global Trade Item Number.' }),
    itemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. A unique identifier for the item.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#posInventory`"',
      }),
    price: PriceSchema.exactOptional().openapi({
      description: 'Required. The current price of the item.',
    }),
    quantity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The available quantity of the item.' }),
    storeCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.",
      }),
    targetCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The CLDR territory code for the item.' }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The inventory timestamp, in ISO 8601 format.' }),
  })
  .openapi({
    description: 'The absolute quantity of an item available at the given store.',
    required: [],
  })
  .openapi('PosInventory')

const PosSaleSchema = z
  .object({
    contentLanguage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The two-letter ISO 639-1 language code for the item.' }),
    gtin: z.string().exactOptional().openapi({ description: 'Global Trade Item Number.' }),
    itemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. A unique identifier for the item.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#posSale`"',
      }),
    price: PriceSchema.exactOptional().openapi({ description: 'Required. The price of the item.' }),
    quantity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The relative change of the available quantity. Negative for items returned.',
      }),
    saleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique ID to group items from the same sale event.' }),
    storeCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.",
      }),
    targetCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The CLDR territory code for the item.' }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The inventory timestamp, in ISO 8601 format.' }),
  })
  .openapi({
    description: 'The change of the available quantity of an item at the given store.',
    required: [],
  })
  .openapi('PosSale')

const PosStoreSchema = z
  .object({
    gcidCategory: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The business type of the store.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#posStore`"',
      }),
    phoneNumber: z.string().exactOptional().openapi({ description: 'The store phone number.' }),
    placeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Google Place Id of the store location.' }),
    storeAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The street address of the store.' }),
    storeCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. A store identifier that is unique for the given merchant.',
      }),
    storeName: z.string().exactOptional().openapi({ description: 'The merchant or store name.' }),
    websiteUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The website url for the store or merchant.' }),
  })
  .openapi({ description: 'Store resource.', required: [] })
  .openapi('PosStore')

const PosCustomBatchRequestEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'An entry ID, unique within the batch request.' }),
    inventory: PosInventorySchema.exactOptional().openapi({
      description: 'The inventory to submit. This should be set only if the method is `inventory`.',
    }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the POS data provider.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" - "`inventory`" - "`sale`" ',
      }),
    sale: PosSaleSchema.exactOptional().openapi({
      description:
        'The sale information to submit. This should be set only if the method is `sale`.',
    }),
    store: PosStoreSchema.exactOptional().openapi({
      description:
        'The store information to submit. This should be set only if the method is `insert`.',
    }),
    storeCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The store code. This should be set only if the method is `delete` or `get`.',
      }),
    targetMerchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the account for which to get/submit data.' }),
  })
  .openapi({ required: [] })
  .openapi('PosCustomBatchRequestEntry')

const PosCustomBatchRequestSchema = z
  .object({
    entries: z
      .array(PosCustomBatchRequestEntrySchema)
      .exactOptional()
      .openapi({ description: 'The request entries to be processed in the batch.' }),
  })
  .openapi({ required: [] })
  .openapi('PosCustomBatchRequest')

const PosCustomBatchResponseEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The ID of the request entry to which this entry responds.' }),
    errors: ErrorsSchema.exactOptional().openapi({
      description: 'A list of errors defined if, and only if, the request failed.',
    }),
    inventory: PosInventorySchema.exactOptional().openapi({
      description: 'The updated inventory information.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#posCustomBatchResponseEntry`"',
      }),
    sale: PosSaleSchema.exactOptional().openapi({ description: 'The updated sale information.' }),
    store: PosStoreSchema.exactOptional().openapi({
      description: 'The retrieved or updated store information.',
    }),
  })
  .openapi({ required: [] })
  .openapi('PosCustomBatchResponseEntry')

const PosCustomBatchResponseSchema = z
  .object({
    entries: z
      .array(PosCustomBatchResponseEntrySchema)
      .exactOptional()
      .openapi({ description: 'The result of the execution of the batch requests.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#posCustomBatchResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('PosCustomBatchResponse')

const PosInventoryRequestSchema = z
  .object({
    contentLanguage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The two-letter ISO 639-1 language code for the item.' }),
    gtin: z.string().exactOptional().openapi({ description: 'Global Trade Item Number.' }),
    itemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. A unique identifier for the item.' }),
    price: PriceSchema.exactOptional().openapi({
      description: 'Required. The current price of the item.',
    }),
    quantity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The available quantity of the item.' }),
    storeCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.",
      }),
    targetCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The CLDR territory code for the item.' }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The inventory timestamp, in ISO 8601 format.' }),
  })
  .openapi({ required: [] })
  .openapi('PosInventoryRequest')

const PosInventoryResponseSchema = z
  .object({
    contentLanguage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The two-letter ISO 639-1 language code for the item.' }),
    gtin: z.string().exactOptional().openapi({ description: 'Global Trade Item Number.' }),
    itemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. A unique identifier for the item.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#posInventoryResponse".',
      }),
    price: PriceSchema.exactOptional().openapi({
      description: 'Required. The current price of the item.',
    }),
    quantity: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The available quantity of the item.' }),
    storeCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.",
      }),
    targetCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The CLDR territory code for the item.' }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The inventory timestamp, in ISO 8601 format.' }),
  })
  .openapi({ required: [] })
  .openapi('PosInventoryResponse')

const PosListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#posListResponse".',
      }),
    resources: z.array(PosStoreSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PosListResponse')

const PosSaleRequestSchema = z
  .object({
    contentLanguage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The two-letter ISO 639-1 language code for the item.' }),
    gtin: z.string().exactOptional().openapi({ description: 'Global Trade Item Number.' }),
    itemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. A unique identifier for the item.' }),
    price: PriceSchema.exactOptional().openapi({ description: 'Required. The price of the item.' }),
    quantity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The relative change of the available quantity. Negative for items returned.',
      }),
    saleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique ID to group items from the same sale event.' }),
    storeCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.",
      }),
    targetCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The CLDR territory code for the item.' }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The inventory timestamp, in ISO 8601 format.' }),
  })
  .openapi({ required: [] })
  .openapi('PosSaleRequest')

const PosSaleResponseSchema = z
  .object({
    contentLanguage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The two-letter ISO 639-1 language code for the item.' }),
    gtin: z.string().exactOptional().openapi({ description: 'Global Trade Item Number.' }),
    itemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. A unique identifier for the item.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#posSaleResponse".',
      }),
    price: PriceSchema.exactOptional().openapi({ description: 'Required. The price of the item.' }),
    quantity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The relative change of the available quantity. Negative for items returned.',
      }),
    saleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique ID to group items from the same sale event.' }),
    storeCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The identifier of the merchant's store. Either a `storeCode` inserted via the API or the code of the store in Google My Business.",
      }),
    targetCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The CLDR territory code for the item.' }),
    timestamp: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The inventory timestamp, in ISO 8601 format.' }),
  })
  .openapi({ required: [] })
  .openapi('PosSaleResponse')

const PostalCodeRangeSchema = z
  .object({
    postalCodeRangeBegin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A postal code or a pattern of the form `prefix*` denoting the inclusive lower bound of the range defining the area. Examples values: `"94108"`, `"9410*"`, `"9*"`. Required.',
      }),
    postalCodeRangeEnd: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A postal code or a pattern of the form `prefix*` denoting the inclusive upper bound of the range defining the area. It must have the same length as `postalCodeRangeBegin`: if `postalCodeRangeBegin` is a postal code then `postalCodeRangeEnd` must be a postal code too; if `postalCodeRangeBegin` is a pattern then `postalCodeRangeEnd` must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching `postalCodeRangeBegin`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PostalCodeRange')

const PostalCodeGroupSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The CLDR territory code of the country the postal code group applies to. Required.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the postal code group, referred to in headers. Required.',
      }),
    postalCodeRanges: z
      .array(PostalCodeRangeSchema)
      .exactOptional()
      .openapi({ description: 'A range of postal codes. Required.' }),
  })
  .openapi({ required: [] })
  .openapi('PostalCodeGroup')

const ProductAspectSchema = z
  .object({
    aspectName: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
    destinationName: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
    intention: z.string().exactOptional().openapi({ description: 'Deprecated.' }),
  })
  .openapi({ required: [] })
  .openapi('ProductAspect')

const ProductDestinationSchema = z
  .object({
    destinationName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the destination.' }),
    intention: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Whether the destination is required, excluded or should be validated. Acceptable values are: - "`default`" - "`excluded`" - "`optional`" - "`required`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProductDestination')

const ProductShippingSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The CLDR territory code of the country to which an item will ship.',
      }),
    locationGroupName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The location where the shipping is applicable, represented by a location group name.',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The numeric ID of a location that the shipping rate applies to as defined in the AdWords API.',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The postal code range that the shipping rate applies to, represented by a postal code, a postal code prefix followed by a * wildcard, a range between two postal codes or two postal code prefixes of equal length.',
      }),
    price: PriceSchema.exactOptional().openapi({
      description: 'Fixed shipping price, represented as a number.',
    }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'The geographic region to which a shipping rate applies.' }),
    service: z
      .string()
      .exactOptional()
      .openapi({ description: 'A free-form description of the service class or delivery speed.' }),
  })
  .openapi({ required: [] })
  .openapi('ProductShipping')

const ProductShippingDimensionSchema = z
  .object({
    unit: z.string().exactOptional().openapi({ description: 'The unit of value.' }),
    value: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The dimension of the product used to calculate the shipping cost of the item.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProductShippingDimension')

const ProductShippingWeightSchema = z
  .object({
    unit: z.string().exactOptional().openapi({ description: 'The unit of value.' }),
    value: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The weight of the product used to calculate the shipping cost of the item.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProductShippingWeight')

const ProductTaxSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The country within which the item is taxed, specified as a CLDR territory code.',
      }),
    locationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The numeric ID of a location that the tax rate applies to as defined in the AdWords API.',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The postal code range that the tax rate applies to, represented by a ZIP code, a ZIP code prefix using * wildcard, a range between two ZIP codes or two ZIP code prefixes of equal length. Examples: 94114, 94*, 94002-95460, 94*-95*.',
      }),
    rate: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The percentage of tax rate that applies to the item price.' }),
    region: z
      .string()
      .exactOptional()
      .openapi({ description: 'The geographic region to which the tax rate applies.' }),
    taxShip: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should be set to true if tax is charged on shipping.' }),
  })
  .openapi({ required: [] })
  .openapi('ProductTax')

const ProductUnitPricingBaseMeasureSchema = z
  .object({
    unit: z.string().exactOptional().openapi({ description: 'The unit of the denominator.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The denominator of the unit price.' }),
  })
  .openapi({ required: [] })
  .openapi('ProductUnitPricingBaseMeasure')

const ProductUnitPricingMeasureSchema = z
  .object({
    unit: z.string().exactOptional().openapi({ description: 'The unit of the measure.' }),
    value: z.float64().exactOptional().openapi({ description: 'The measure of an item.' }),
  })
  .openapi({ required: [] })
  .openapi('ProductUnitPricingMeasure')

const ProductSchema = z
  .object({
    additionalImageLinks: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Additional URLs of images of the item.' }),
    additionalProductTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Additional categories of the item (formatted as in products data specification).',
      }),
    adult: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should be set to true if the item is targeted towards adults.' }),
    adwordsGrouping: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise.',
      }),
    adwordsLabels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Similar to adwords_grouping, but only works on CPC.' }),
    adwordsRedirect: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Allows advertisers to override the item URL when the product is shown within the context of Product Ads.',
      }),
    ageGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Target age group of the item. Acceptable values are: - "`adult`" - "`infant`" - "`kids`" - "`newborn`" - "`toddler`" - "`youngAdult`" ',
      }),
    aspects: z
      .array(ProductAspectSchema)
      .exactOptional()
      .openapi({ description: 'Deprecated. Do not use.' }),
    availability: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Availability status of the item. Acceptable values are: - "`in stock`" - "`out of stock`" - "`preorder`" ',
      }),
    availabilityDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The day a pre-ordered product becomes available for delivery, in ISO 8601 format.',
      }),
    brand: z.string().exactOptional().openapi({ description: 'Brand of the item.' }),
    canonicalLink: z
      .string()
      .exactOptional()
      .openapi({ description: "URL for the canonical version of your item's landing page." }),
    channel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The item\'s channel (online or local). Acceptable values are: - "`local`" - "`online`" ',
      }),
    color: z.string().exactOptional().openapi({ description: 'Color of the item.' }),
    condition: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Condition or state of the item. Acceptable values are: - "`new`" - "`refurbished`" - "`used`" ',
      }),
    contentLanguage: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The two-letter ISO 639-1 language code for the item.' }),
    costOfGoodsSold: PriceSchema.exactOptional().openapi({
      description: 'Cost of goods sold. Used for gross profit reporting.',
    }),
    customAttributes: z
      .array(CustomAttributeSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (e.g., `{ "name": "size type", "value": "regular" }`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google (formerly known as Shopping Actions).',
      }),
    customGroups: z
      .array(CustomGroupSchema)
      .exactOptional()
      .openapi({ description: 'A list of custom (merchant-provided) custom attribute groups.' }),
    customLabel0: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom label 0 for custom grouping of items in a Shopping campaign.',
      }),
    customLabel1: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom label 1 for custom grouping of items in a Shopping campaign.',
      }),
    customLabel2: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom label 2 for custom grouping of items in a Shopping campaign.',
      }),
    customLabel3: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom label 3 for custom grouping of items in a Shopping campaign.',
      }),
    customLabel4: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Custom label 4 for custom grouping of items in a Shopping campaign.',
      }),
    description: z.string().exactOptional().openapi({ description: 'Description of the item.' }),
    destinations: z
      .array(ProductDestinationSchema)
      .exactOptional()
      .openapi({ description: 'Specifies the intended destinations for the product.' }),
    displayAdsId: z
      .string()
      .exactOptional()
      .openapi({ description: 'An identifier for an item for dynamic remarketing campaigns.' }),
    displayAdsLink: z
      .string()
      .exactOptional()
      .openapi({
        description: "URL directly to your item's landing page for dynamic remarketing campaigns.",
      }),
    displayAdsSimilarIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Advertiser-specified recommendations.' }),
    displayAdsTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of an item for dynamic remarketing campaigns.' }),
    displayAdsValue: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Offer margin for dynamic remarketing campaigns.' }),
    energyEfficiencyClass: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" - "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`" ',
      }),
    expirationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in `productstatuses` as `googleExpirationDate` and might be earlier if `expirationDate` is too far in the future.',
      }),
    gender: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Target gender of the item. Acceptable values are: - "`female`" - "`male`" - "`unisex`" ',
      }),
    googleProductCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Google's category of the item (see [Google product taxonomy](https://support.google.com/merchants/answer/1705911)). When querying products, this field will contain the user provided value. There is currently no way to get back the auto assigned google product categories through the API.",
      }),
    gtin: z
      .string()
      .exactOptional()
      .openapi({ description: 'Global Trade Item Number (GTIN) of the item.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The REST ID of the product. Content API methods that operate on products take this as their `productId` parameter. The REST ID for a product is of the form channel:contentLanguage: targetCountry: offerId.',
      }),
    identifierExists: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada.',
      }),
    imageLink: z.string().exactOptional().openapi({ description: 'URL of an image of the item.' }),
    installment: InstallmentSchema.exactOptional().openapi({
      description: 'Number and amount of installments to pay for an item.',
    }),
    isBundle: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price.',
      }),
    itemGroupId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Shared identifier for all variants of the same product.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#product`"',
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({ description: "URL directly linking to your item's page on your website." }),
    loyaltyPoints: LoyaltyPointsSchema.exactOptional().openapi({
      description: 'Loyalty points that users receive after purchasing the item. Japan only.',
    }),
    material: z
      .string()
      .exactOptional()
      .openapi({ description: 'The material of which the item is made.' }),
    maxEnergyEfficiencyClass: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" - "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`" ',
      }),
    maxHandlingTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Maximal product handling time (in business days).' }),
    minEnergyEfficiencyClass: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" - "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`" ',
      }),
    minHandlingTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Minimal product handling time (in business days).' }),
    mobileLink: z
      .string()
      .exactOptional()
      .openapi({
        description: "URL for the mobile-optimized version of your item's landing page.",
      }),
    mpn: z
      .string()
      .exactOptional()
      .openapi({ description: 'Manufacturer Part Number (MPN) of the item.' }),
    multipack: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of identical products in a merchant-defined multipack.',
      }),
    offerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A unique identifier for the item. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. Only valid unicode characters are accepted. See the products feed specification for details. *Note:* Content API methods that operate on products take the REST ID of the product, *not* this identifier.',
      }),
    onlineOnly: z.boolean().exactOptional().openapi({ description: 'Deprecated.' }),
    pattern: z
      .string()
      .exactOptional()
      .openapi({ description: "The item's pattern (e.g. polka dots)." }),
    price: PriceSchema.exactOptional().openapi({ description: 'Price of the item.' }),
    productType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Your category of the item (formatted as in products data specification).',
      }),
    promotionIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The unique ID of a promotion.' }),
    salePrice: PriceSchema.exactOptional().openapi({
      description: 'Advertised sale price of the item.',
    }),
    salePriceEffectiveDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date range during which the item is on sale (see products data specification ).',
      }),
    sellOnGoogleQuantity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The quantity of the product that is available for selling on Google. Supported only for online products.',
      }),
    shipping: z
      .array(ProductShippingSchema)
      .exactOptional()
      .openapi({ description: 'Shipping rules.' }),
    shippingHeight: ProductShippingDimensionSchema.exactOptional().openapi({
      description: 'Height of the item for shipping.',
    }),
    shippingLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The shipping label of the product, used to group product in account-level shipping rules.',
      }),
    shippingLength: ProductShippingDimensionSchema.exactOptional().openapi({
      description: 'Length of the item for shipping.',
    }),
    shippingWeight: ProductShippingWeightSchema.exactOptional().openapi({
      description: 'Weight of the item for shipping.',
    }),
    shippingWidth: ProductShippingDimensionSchema.exactOptional().openapi({
      description: 'Width of the item for shipping.',
    }),
    sizeSystem: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'System in which the size is specified. Recommended for apparel items. Acceptable values are: - "`AU`" - "`BR`" - "`CN`" - "`DE`" - "`EU`" - "`FR`" - "`IT`" - "`JP`" - "`MEX`" - "`UK`" - "`US`" ',
      }),
    sizeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The cut of the item. Recommended for apparel items. Acceptable values are: - "`big and tall`" - "`maternity`" - "`oversize`" - "`petite`" - "`plus`" - "`regular`" ',
      }),
    sizes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same `itemGroupId` value (see size definition).',
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The source of the offer, i.e., how the offer was created. Acceptable values are: - "`api`" - "`crawl`" - "`feed`" ',
      }),
    targetCountry: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The CLDR territory code for the item.' }),
    taxes: z.array(ProductTaxSchema).exactOptional().openapi({ description: 'Tax information.' }),
    title: z.string().exactOptional().openapi({ description: 'Title of the item.' }),
    unitPricingBaseMeasure: ProductUnitPricingBaseMeasureSchema.exactOptional().openapi({
      description: 'The preference of the denominator of the unit price.',
    }),
    unitPricingMeasure: ProductUnitPricingMeasureSchema.exactOptional().openapi({
      description: 'The measure and dimension of an item.',
    }),
    validatedDestinations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Deprecated. The read-only list of intended destinations which passed validation.',
      }),
    warnings: z.array(ErrorSchema).exactOptional().openapi({ description: 'Read-only warnings.' }),
  })
  .openapi({
    description:
      ' Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.',
    required: [],
  })
  .openapi('Product')

const ProductStatusDataQualityIssueSchema = z
  .object({
    destination: z.string().exactOptional(),
    detail: z.string().exactOptional(),
    fetchStatus: z.string().exactOptional(),
    id: z.string().exactOptional(),
    location: z.string().exactOptional(),
    severity: z.string().exactOptional(),
    timestamp: z.string().exactOptional(),
    valueOnLandingPage: z.string().exactOptional(),
    valueProvided: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductStatusDataQualityIssue')

const ProductStatusDestinationStatusSchema = z
  .object({
    approvalPending: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether the approval status might change due to further processing.',
      }),
    approvalStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The destination\'s approval status. Acceptable values are: - "`approved`" - "`disapproved`" ',
      }),
    destination: z.string().exactOptional().openapi({ description: 'The name of the destination' }),
    intention: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Provided for backward compatibility only. Always set to "required". Acceptable values are: - "`default`" - "`excluded`" - "`optional`" - "`required`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProductStatusDestinationStatus')

const ProductStatusItemLevelIssueSchema = z
  .object({
    attributeName: z
      .string()
      .exactOptional()
      .openapi({
        description: "The attribute's name, if the issue is caused by a single attribute.",
      }),
    code: z.string().exactOptional().openapi({ description: 'The error code of the issue.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short issue description in English.' }),
    destination: z
      .string()
      .exactOptional()
      .openapi({ description: 'The destination the issue applies to.' }),
    detail: z
      .string()
      .exactOptional()
      .openapi({ description: 'A detailed issue description in English.' }),
    documentation: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of a web page to help with resolving this issue.' }),
    resolution: z
      .string()
      .exactOptional()
      .openapi({ description: 'Whether the issue can be resolved by the merchant.' }),
    servability: z
      .string()
      .exactOptional()
      .openapi({ description: 'How this issue affects serving of the offer.' }),
  })
  .openapi({ required: [] })
  .openapi('ProductStatusItemLevelIssue')

const ProductStatusSchema = z
  .object({
    creationDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date on which the item has been created, in ISO 8601 format.' }),
    dataQualityIssues: z
      .array(ProductStatusDataQualityIssueSchema)
      .exactOptional()
      .openapi({ description: 'DEPRECATED - never populated' }),
    destinationStatuses: z
      .array(ProductStatusDestinationStatusSchema)
      .exactOptional()
      .openapi({ description: 'The intended destinations for the product.' }),
    googleExpirationDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Date on which the item expires in Google Shopping, in ISO 8601 format.',
      }),
    itemLevelIssues: z
      .array(ProductStatusItemLevelIssueSchema)
      .exactOptional()
      .openapi({ description: 'A list of all issues associated with the product.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#productStatus`"',
      }),
    lastUpdateDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Date on which the item has been last updated, in ISO 8601 format.',
      }),
    link: z.string().exactOptional().openapi({ description: 'The link to the product.' }),
    product: ProductSchema.exactOptional().openapi({
      description: 'Product data after applying all the join inputs.',
    }),
    productId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the product for which status is reported.' }),
    title: z.string().exactOptional().openapi({ description: 'The title of the product.' }),
  })
  .openapi({
    description:
      'The status of a product, i.e., information about a product computed asynchronously.',
    required: [],
  })
  .openapi('ProductStatus')

const ProductsCustomBatchRequestEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'An entry ID, unique within the batch request.' }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the managing account.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" ',
      }),
    product: ProductSchema.exactOptional().openapi({
      description: 'The product to insert. Only required if the method is `insert`.',
    }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to get or delete. Only defined if the method is `get` or `delete`.',
      }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch products request.',
    required: [],
  })
  .openapi('ProductsCustomBatchRequestEntry')

const ProductsCustomBatchRequestSchema = z
  .object({
    entries: z
      .array(ProductsCustomBatchRequestEntrySchema)
      .exactOptional()
      .openapi({ description: 'The request entries to be processed in the batch.' }),
  })
  .openapi({ required: [] })
  .openapi('ProductsCustomBatchRequest')

const ProductsCustomBatchResponseEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The ID of the request entry this entry responds to.' }),
    errors: ErrorsSchema.exactOptional().openapi({
      description: 'A list of errors defined if and only if the request failed.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#productsCustomBatchResponseEntry`"',
      }),
    product: ProductSchema.exactOptional().openapi({
      description:
        'The inserted product. Only defined if the method is `insert` and if the request was successful.',
    }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch products response.',
    required: [],
  })
  .openapi('ProductsCustomBatchResponseEntry')

const ProductsCustomBatchResponseSchema = z
  .object({
    entries: z
      .array(ProductsCustomBatchResponseEntrySchema)
      .exactOptional()
      .openapi({ description: 'The result of the execution of the batch requests.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#productsCustomBatchResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProductsCustomBatchResponse')

const ProductsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#productsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token for the retrieval of the next page of products.' }),
    resources: z.array(ProductSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductsListResponse')

const ProductstatusesCustomBatchRequestEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'An entry ID, unique within the batch request.' }),
    destinations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.',
      }),
    includeAttributes: z.boolean().exactOptional(),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the managing account.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({ description: 'The method of the batch entry. Acceptable values are: - "`get`" ' }),
    productId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the product whose status to get.' }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch productstatuses request.',
    required: [],
  })
  .openapi('ProductstatusesCustomBatchRequestEntry')

const ProductstatusesCustomBatchRequestSchema = z
  .object({
    entries: z
      .array(ProductstatusesCustomBatchRequestEntrySchema)
      .exactOptional()
      .openapi({ description: 'The request entries to be processed in the batch.' }),
  })
  .openapi({ required: [] })
  .openapi('ProductstatusesCustomBatchRequest')

const ProductstatusesCustomBatchResponseEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The ID of the request entry this entry responds to.' }),
    errors: ErrorsSchema.exactOptional().openapi({
      description: 'A list of errors, if the request failed.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesCustomBatchResponseEntry`"',
      }),
    productStatus: ProductStatusSchema.exactOptional().openapi({
      description: 'The requested product status. Only defined if the request was successful.',
    }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch productstatuses response.',
    required: [],
  })
  .openapi('ProductstatusesCustomBatchResponseEntry')

const ProductstatusesCustomBatchResponseSchema = z
  .object({
    entries: z
      .array(ProductstatusesCustomBatchResponseEntrySchema)
      .exactOptional()
      .openapi({ description: 'The result of the execution of the batch requests.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#productstatusesCustomBatchResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProductstatusesCustomBatchResponse')

const ProductstatusesListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#productstatusesListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The token for the retrieval of the next page of products statuses.',
      }),
    resources: z.array(ProductStatusSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProductstatusesListResponse')

const ServiceSchema: z.ZodType<ServiceType> = z
  .lazy(() =>
    z
      .object({
        active: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'A boolean exposing the active status of the shipping service. Required.',
          }),
        currency: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The CLDR code of the currency to which this service applies. Must match that of the prices in rate groups.',
          }),
        deliveryCountry: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The CLDR territory code of the country to which the service applies. Required.',
          }),
        deliveryTime: DeliveryTimeSchema.exactOptional().openapi({
          description:
            'Time spent in various aspects from order to the delivery of the product. Required.',
        }),
        eligibility: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Eligibility for this service. Acceptable values are: - "`All scenarios`" - "`All scenarios except Shopping Actions`" - "`Shopping Actions`" ',
          }),
        minimumOrderValue: PriceSchema.exactOptional().openapi({
          description:
            'Minimum order value for this service. If set, indicates that customers will have to spend at least this amount. All prices within a service must have the same currency. Cannot be set together with minimum_order_value_table.',
        }),
        minimumOrderValueTable: MinimumOrderValueTableSchema.exactOptional().openapi({
          description:
            'Table of per store minimum order values for the pickup fulfillment type. Cannot be set together with minimum_order_value.',
        }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Free-form name of the service. Must be unique within target account. Required.',
          }),
        pickupService: PickupCarrierServiceSchema.exactOptional().openapi({
          description:
            'The carrier-service pair delivering items to collection points. The list of supported pickup services can be retrieved via the `getSupportedPickupServices` method. Required if and only if the service delivery type is `pickup`.',
        }),
        rateGroups: z
          .array(RateGroupSchema)
          .exactOptional()
          .openapi({
            description:
              'Shipping rate group definitions. Only the last one is allowed to have an empty `applicableShippingLabels`, which means "everything else". The other `applicableShippingLabels` must not overlap.',
          }),
        shipmentType: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Type of locations this service ships orders to. Acceptable values are: - "`delivery`" - "`pickup`" ',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Service')

const WarehouseCutoffTimeSchema = z
  .object({
    hour: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. Hour (24-hour clock) of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Hour is based on the timezone of warehouse.',
      }),
    minute: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. Minute of the cutoff time until which an order has to be placed to be processed in the same day by the warehouse. Minute is based on the timezone of warehouse.',
      }),
  })
  .openapi({ required: [] })
  .openapi('WarehouseCutoffTime')

const WarehouseSchema = z
  .object({
    businessDayConfig: BusinessDayConfigSchema.exactOptional().openapi({
      description:
        'Business days of the warehouse. If not set, will be Monday to Friday by default.',
    }),
    cutoffTime: WarehouseCutoffTimeSchema.exactOptional().openapi({
      description:
        'Required. The latest time of day that an order can be accepted and begin processing. Later orders will be processed in the next day. The time is based on the warehouse postal code.',
    }),
    handlingDays: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The number of days it takes for this warehouse to pack up and ship an item. This is on the warehouse level, but can be overridden on the offer level based on the attributes of an item.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The name of the warehouse. Must be unique within account.',
      }),
    shippingAddress: AddressSchema.exactOptional().openapi({
      description: 'Required. Shipping address of the warehouse.',
    }),
  })
  .openapi({
    description: 'A fulfillment warehouse, which stores and handles inventory.',
    required: [],
  })
  .openapi('Warehouse')

const ShippingSettingsSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the account to which these account shipping settings belong. Ignored upon update, always present in get request responses.',
      }),
    postalCodeGroups: z
      .array(PostalCodeGroupSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of postal code groups that can be referred to in `services`. Optional.',
      }),
    services: z
      .array(ServiceSchema)
      .exactOptional()
      .openapi({ description: "The target account's list of services. Optional." }),
    warehouses: z
      .array(WarehouseSchema)
      .exactOptional()
      .openapi({
        description: 'Optional. A list of warehouses which can be referred to in `services`.',
      }),
  })
  .openapi({
    description:
      "The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role.",
    required: [],
  })
  .openapi('ShippingSettings')

const ShippingsettingsCustomBatchRequestEntrySchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the account for which to get/update account shipping settings.',
      }),
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'An entry ID, unique within the batch request.' }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the managing account.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The method of the batch entry. Acceptable values are: - "`get`" - "`update`" ',
      }),
    shippingSettings: ShippingSettingsSchema.exactOptional().openapi({
      description:
        'The account shipping settings to update. Only defined if the method is `update`.',
    }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch shippingsettings request.',
    required: [],
  })
  .openapi('ShippingsettingsCustomBatchRequestEntry')

const ShippingsettingsCustomBatchRequestSchema = z
  .object({
    entries: z
      .array(ShippingsettingsCustomBatchRequestEntrySchema)
      .exactOptional()
      .openapi({ description: 'The request entries to be processed in the batch.' }),
  })
  .openapi({ required: [] })
  .openapi('ShippingsettingsCustomBatchRequest')

const ShippingsettingsCustomBatchResponseEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The ID of the request entry to which this entry responds.' }),
    errors: ErrorsSchema.exactOptional().openapi({
      description: 'A list of errors defined if, and only if, the request failed.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsCustomBatchResponseEntry`"',
      }),
    shippingSettings: ShippingSettingsSchema.exactOptional().openapi({
      description: 'The retrieved or updated account shipping settings.',
    }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch shipping settings response.',
    required: [],
  })
  .openapi('ShippingsettingsCustomBatchResponseEntry')

const ShippingsettingsCustomBatchResponseSchema = z
  .object({
    entries: z
      .array(ShippingsettingsCustomBatchResponseEntrySchema)
      .exactOptional()
      .openapi({ description: 'The result of the execution of the batch requests.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsCustomBatchResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('ShippingsettingsCustomBatchResponse')

const ShippingsettingsGetSupportedCarriersResponseSchema = z
  .object({
    carriers: z
      .array(CarriersCarrierSchema)
      .exactOptional()
      .openapi({ description: 'A list of supported carriers. May be empty.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedCarriersResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('ShippingsettingsGetSupportedCarriersResponse')

const ShippingsettingsGetSupportedHolidaysResponseSchema = z
  .object({
    holidays: z
      .array(HolidaysHolidaySchema)
      .exactOptional()
      .openapi({
        description: 'A list of holidays applicable for delivery guarantees. May be empty.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedHolidaysResponse".',
      }),
  })
  .openapi({ required: [] })
  .openapi('ShippingsettingsGetSupportedHolidaysResponse')

const ShippingsettingsGetSupportedPickupServicesResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsGetSupportedPickupServicesResponse".',
      }),
    pickupServices: z
      .array(PickupServicesPickupServiceSchema)
      .exactOptional()
      .openapi({ description: 'A list of supported pickup services. May be empty.' }),
  })
  .openapi({ required: [] })
  .openapi('ShippingsettingsGetSupportedPickupServicesResponse')

const ShippingsettingsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "content#shippingsettingsListResponse".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The token for the retrieval of the next page of shipping settings.',
      }),
    resources: z.array(ShippingSettingsSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ShippingsettingsListResponse')

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
        'https://www.googleapis.com/auth/content':
          'Manage your product listings and accounts for Google Shopping',
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
        'https://www.googleapis.com/auth/content':
          'Manage your product listings and accounts for Google Shopping',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getAccountsAuthinfoRoute = createRoute({
  method: 'get',
  path: '/accounts/authinfo',
  tags: ['accounts'],
  description: 'Returns information about the authenticated user.',
  operationId: 'content.accounts.authinfo',
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
      content: { 'application/json': { schema: AccountsAuthInfoResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postAccountsBatchRoute = createRoute({
  method: 'post',
  path: '/accounts/batch',
  tags: ['accounts'],
  description:
    'Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.',
  operationId: 'content.accounts.custombatch',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountsCustomBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountsCustomBatchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postAccountstatusesBatchRoute = createRoute({
  method: 'post',
  path: '/accountstatuses/batch',
  tags: ['accountstatuses'],
  description: 'Retrieves multiple Merchant Center account statuses in a single request.',
  operationId: 'content.accountstatuses.custombatch',
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
    body: { content: { 'application/json': { schema: AccountstatusesCustomBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountstatusesCustomBatchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postAccounttaxBatchRoute = createRoute({
  method: 'post',
  path: '/accounttax/batch',
  tags: ['accounttax'],
  description: 'Retrieves and updates tax settings of multiple accounts in a single request.',
  operationId: 'content.accounttax.custombatch',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccounttaxCustomBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccounttaxCustomBatchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postDatafeedsBatchRoute = createRoute({
  method: 'post',
  path: '/datafeeds/batch',
  tags: ['datafeeds'],
  description:
    'Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.',
  operationId: 'content.datafeeds.custombatch',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatafeedsCustomBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatafeedsCustomBatchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postDatafeedstatusesBatchRoute = createRoute({
  method: 'post',
  path: '/datafeedstatuses/batch',
  tags: ['datafeedstatuses'],
  description: 'Gets multiple Merchant Center datafeed statuses in a single request.',
  operationId: 'content.datafeedstatuses.custombatch',
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
    body: { content: { 'application/json': { schema: DatafeedstatusesCustomBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatafeedstatusesCustomBatchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postLiasettingsBatchRoute = createRoute({
  method: 'post',
  path: '/liasettings/batch',
  tags: ['liasettings'],
  description:
    'Retrieves and/or updates the LIA settings of multiple accounts in a single request.',
  operationId: 'content.liasettings.custombatch',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LiasettingsCustomBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LiasettingsCustomBatchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getLiasettingsPosdataprovidersRoute = createRoute({
  method: 'get',
  path: '/liasettings/posdataproviders',
  tags: ['liasettings'],
  description:
    'Retrieves the list of POS data providers that have active settings for the all eiligible countries.',
  operationId: 'content.liasettings.listposdataproviders',
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
      content: { 'application/json': { schema: LiasettingsListPosDataProvidersResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postOrdersBatchRoute = createRoute({
  method: 'post',
  path: '/orders/batch',
  tags: ['orders'],
  description: 'Retrieves or modifies multiple orders in a single request.',
  operationId: 'content.orders.custombatch',
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
    body: { content: { 'application/json': { schema: OrdersCustomBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersCustomBatchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postPosBatchRoute = createRoute({
  method: 'post',
  path: '/pos/batch',
  tags: ['pos'],
  description: 'Batches multiple POS-related calls in a single request.',
  operationId: 'content.pos.custombatch',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PosCustomBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PosCustomBatchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postProductsBatchRoute = createRoute({
  method: 'post',
  path: '/products/batch',
  tags: ['products'],
  description: 'Retrieves, inserts, and deletes multiple products in a single request.',
  operationId: 'content.products.custombatch',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProductsCustomBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProductsCustomBatchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postProductstatusesBatchRoute = createRoute({
  method: 'post',
  path: '/productstatuses/batch',
  tags: ['productstatuses'],
  description: 'Gets the statuses of multiple products in a single request.',
  operationId: 'content.productstatuses.custombatch',
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
      includeAttributes: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to include full product data in the results of this request. The default value is false.',
            in: 'query',
            name: 'includeAttributes',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProductstatusesCustomBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProductstatusesCustomBatchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postShippingsettingsBatchRoute = createRoute({
  method: 'post',
  path: '/shippingsettings/batch',
  tags: ['shippingsettings'],
  description:
    'Retrieves and updates the shipping settings of multiple accounts in a single request.',
  operationId: 'content.shippingsettings.custombatch',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ShippingsettingsCustomBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ShippingsettingsCustomBatchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdAccountsRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/accounts',
  tags: ['accounts'],
  description: 'Lists the sub-accounts in your Merchant Center account.',
  operationId: 'content.accounts.list',
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
              'The maximum number of accounts to return in the response, used for paging.',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the managing account. This must be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdAccountsRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/accounts',
  tags: ['accounts'],
  description: 'Creates a Merchant Center sub-account.',
  operationId: 'content.accounts.insert',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the managing account. This must be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdAccountsAccountIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/accounts/{accountId}',
  tags: ['accounts'],
  description: 'Retrieves a Merchant Center account.',
  operationId: 'content.accounts.get',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the account.',
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
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const putMerchantIdAccountsAccountIdRoute = createRoute({
  method: 'put',
  path: '/{merchantId}/accounts/{accountId}',
  tags: ['accounts'],
  description:
    'Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.',
  operationId: 'content.accounts.update',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the account.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const deleteMerchantIdAccountsAccountIdRoute = createRoute({
  method: 'delete',
  path: '/{merchantId}/accounts/{accountId}',
  tags: ['accounts'],
  description: 'Deletes a Merchant Center sub-account.',
  operationId: 'content.accounts.delete',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Flag to delete sub-accounts with products. The default value is false.',
            in: 'query',
            name: 'force',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the managing account. This must be a multi-client account, and accountId must be the ID of a sub-account of this account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the account.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdAccountsAccountIdClaimwebsiteRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/accounts/{accountId}/claimwebsite',
  tags: ['accounts'],
  description: 'Claims the website of a Merchant Center sub-account.',
  operationId: 'content.accounts.claimwebsite',
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
      overwrite: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only available to selected merchants. When set to `True`, this flag removes any existing claim on the requested website by another account and replaces it with a claim from this account.',
            in: 'query',
            name: 'overwrite',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the account whose website is claimed.',
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
      content: { 'application/json': { schema: AccountsClaimWebsiteResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdAccountsAccountIdLinkRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/accounts/{accountId}/link',
  tags: ['accounts'],
  description:
    'Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.',
  operationId: 'content.accounts.link',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the account that should be linked.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountsLinkRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountsLinkResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdAccountstatusesRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/accountstatuses',
  tags: ['accountstatuses'],
  description: 'Lists the statuses of the sub-accounts in your Merchant Center account.',
  operationId: 'content.accountstatuses.list',
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
      destinations: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.',
            explode: true,
            in: 'query',
            name: 'destinations',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of account statuses to return in the response, used for paging.',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the managing account. This must be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountstatusesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdAccountstatusesAccountIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/accountstatuses/{accountId}',
  tags: ['accountstatuses'],
  description:
    'Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.',
  operationId: 'content.accountstatuses.get',
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
      destinations: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.',
            explode: true,
            in: 'query',
            name: 'destinations',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the account.',
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
      content: { 'application/json': { schema: AccountStatusSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdAccounttaxRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/accounttax',
  tags: ['accounttax'],
  description: 'Lists the tax settings of the sub-accounts in your Merchant Center account.',
  operationId: 'content.accounttax.list',
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
              'The maximum number of tax settings to return in the response, used for paging.',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the managing account. This must be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccounttaxListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdAccounttaxAccountIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/accounttax/{accountId}',
  tags: ['accounttax'],
  description: 'Retrieves the tax settings of the account.',
  operationId: 'content.accounttax.get',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the account for which to get/update account tax settings.',
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
      content: { 'application/json': { schema: AccountTaxSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const putMerchantIdAccounttaxAccountIdRoute = createRoute({
  method: 'put',
  path: '/{merchantId}/accounttax/{accountId}',
  tags: ['accounttax'],
  description:
    'Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.',
  operationId: 'content.accounttax.update',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the account for which to get/update account tax settings.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountTaxSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountTaxSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdDatafeedsRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/datafeeds',
  tags: ['datafeeds'],
  description: 'Lists the configurations for datafeeds in your Merchant Center account.',
  operationId: 'content.datafeeds.list',
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
              'The maximum number of products to return in the response, used for paging.',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the datafeeds. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatafeedsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdDatafeedsRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/datafeeds',
  tags: ['datafeeds'],
  description: 'Registers a datafeed configuration with your Merchant Center account.',
  operationId: 'content.datafeeds.insert',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the datafeed. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatafeedSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatafeedSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdDatafeedsDatafeedIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/datafeeds/{datafeedId}',
  tags: ['datafeeds'],
  description: 'Retrieves a datafeed configuration from your Merchant Center account.',
  operationId: 'content.datafeeds.get',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the datafeed. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datafeedId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the datafeed.',
            in: 'path',
            name: 'datafeedId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatafeedSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const putMerchantIdDatafeedsDatafeedIdRoute = createRoute({
  method: 'put',
  path: '/{merchantId}/datafeeds/{datafeedId}',
  tags: ['datafeeds'],
  description:
    'Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.',
  operationId: 'content.datafeeds.update',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the datafeed. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datafeedId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the datafeed.',
            in: 'path',
            name: 'datafeedId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: DatafeedSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatafeedSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const deleteMerchantIdDatafeedsDatafeedIdRoute = createRoute({
  method: 'delete',
  path: '/{merchantId}/datafeeds/{datafeedId}',
  tags: ['datafeeds'],
  description: 'Deletes a datafeed configuration from your Merchant Center account.',
  operationId: 'content.datafeeds.delete',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the datafeed. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datafeedId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the datafeed.',
            in: 'path',
            name: 'datafeedId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdDatafeedsDatafeedIdFetchNowRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/datafeeds/{datafeedId}/fetchNow',
  tags: ['datafeeds'],
  description:
    'Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the Products service to update your product data.',
  operationId: 'content.datafeeds.fetchnow',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the datafeed. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datafeedId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the datafeed to be fetched.',
            in: 'path',
            name: 'datafeedId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatafeedsFetchNowResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdDatafeedstatusesRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/datafeedstatuses',
  tags: ['datafeedstatuses'],
  description: 'Lists the statuses of the datafeeds in your Merchant Center account.',
  operationId: 'content.datafeedstatuses.list',
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
              'The maximum number of products to return in the response, used for paging.',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the datafeeds. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatafeedstatusesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdDatafeedstatusesDatafeedIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/datafeedstatuses/{datafeedId}',
  tags: ['datafeedstatuses'],
  description: 'Retrieves the status of a datafeed from your Merchant Center account.',
  operationId: 'content.datafeedstatuses.get',
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
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The country for which to get the datafeed status. If this parameter is provided then language must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.',
            in: 'query',
            name: 'country',
            schema: { type: 'string' },
            required: false,
          },
        }),
      language: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The language for which to get the datafeed status. If this parameter is provided then country must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.',
            in: 'query',
            name: 'language',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the datafeed. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      datafeedId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the datafeed.',
            in: 'path',
            name: 'datafeedId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: DatafeedStatusSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdLiasettingsRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/liasettings',
  tags: ['liasettings'],
  description: 'Lists the LIA settings of the sub-accounts in your Merchant Center account.',
  operationId: 'content.liasettings.list',
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
              'The maximum number of LIA settings to return in the response, used for paging.',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the managing account. This must be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LiasettingsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdLiasettingsAccountIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/liasettings/{accountId}',
  tags: ['liasettings'],
  description: 'Retrieves the LIA settings of the account.',
  operationId: 'content.liasettings.get',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the account for which to get or update LIA settings.',
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
      content: { 'application/json': { schema: LiaSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const putMerchantIdLiasettingsAccountIdRoute = createRoute({
  method: 'put',
  path: '/{merchantId}/liasettings/{accountId}',
  tags: ['liasettings'],
  description:
    'Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.',
  operationId: 'content.liasettings.update',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the account for which to get or update LIA settings.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LiaSettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LiaSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/liasettings/{accountId}/accessiblegmbaccounts',
  tags: ['liasettings'],
  description: 'Retrieves the list of accessible Google My Business accounts.',
  operationId: 'content.liasettings.getaccessiblegmbaccounts',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account for which to retrieve accessible Google My Business accounts.',
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
      content: {
        'application/json': { schema: LiasettingsGetAccessibleGmbAccountsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdLiasettingsAccountIdRequestgmbaccessRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/liasettings/{accountId}/requestgmbaccess',
  tags: ['liasettings'],
  description: 'Requests access to a specified Google My Business account.',
  operationId: 'content.liasettings.requestgmbaccess',
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
      gmbEmail: z
        .string()
        .openapi({
          param: {
            description: 'The email of the Google My Business account.',
            in: 'query',
            name: 'gmbEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the account for which GMB access is requested.',
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
      content: { 'application/json': { schema: LiasettingsRequestGmbAccessResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryRoute =
  createRoute({
    method: 'post',
    path: '/{merchantId}/liasettings/{accountId}/requestinventoryverification/{country}',
    tags: ['liasettings'],
    description: 'Requests inventory validation for the specified country.',
    operationId: 'content.liasettings.requestinventoryverification',
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
        merchantId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.',
              in: 'path',
              name: 'merchantId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        accountId: z
          .string()
          .openapi({
            param: {
              description:
                'The ID of the account that manages the order. This cannot be a multi-client account.',
              in: 'path',
              name: 'accountId',
              required: true,
              schema: { type: 'string' },
            },
          }),
        country: z
          .string()
          .openapi({
            param: {
              description: 'The country for which inventory validation is requested.',
              in: 'path',
              name: 'country',
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
          'application/json': { schema: LiasettingsRequestInventoryVerificationResponseSchema },
        },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/content'],
        Oauth2c: ['https://www.googleapis.com/auth/content'],
      },
    ],
  })

export const postMerchantIdLiasettingsAccountIdSetinventoryverificationcontactRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/liasettings/{accountId}/setinventoryverificationcontact',
  tags: ['liasettings'],
  description: 'Sets the inventory verification contract for the specified country.',
  operationId: 'content.liasettings.setinventoryverificationcontact',
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
      country: z
        .string()
        .openapi({
          param: {
            description: 'The country for which inventory verification is requested.',
            in: 'query',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
      language: z
        .string()
        .openapi({
          param: {
            description: 'The language for which inventory verification is requested.',
            in: 'query',
            name: 'language',
            required: true,
            schema: { type: 'string' },
          },
        }),
      contactName: z
        .string()
        .openapi({
          param: {
            description: 'The name of the inventory verification contact.',
            in: 'query',
            name: 'contactName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      contactEmail: z
        .string()
        .openapi({
          param: {
            description: 'The email of the inventory verification contact.',
            in: 'query',
            name: 'contactEmail',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
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
      content: {
        'application/json': { schema: LiasettingsSetInventoryVerificationContactResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdLiasettingsAccountIdSetposdataproviderRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/liasettings/{accountId}/setposdataprovider',
  tags: ['liasettings'],
  description: 'Sets the POS data provider for the specified country.',
  operationId: 'content.liasettings.setposdataprovider',
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
      country: z
        .string()
        .openapi({
          param: {
            description: 'The country for which the POS data provider is selected.',
            in: 'query',
            name: 'country',
            required: true,
            schema: { type: 'string' },
          },
        }),
      posDataProviderId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of POS data provider.',
            in: 'query',
            name: 'posDataProviderId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      posExternalAccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The account ID by which this merchant is known to the POS data provider.',
            in: 'query',
            name: 'posExternalAccountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account for which to retrieve accessible Google My Business accounts.',
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
      content: { 'application/json': { schema: LiasettingsSetPosDataProviderResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orderinvoices/{orderId}/createChargeInvoice',
  tags: ['orderinvoices'],
  description:
    'Creates a charge invoice for a shipment group, and triggers a charge capture for orderinvoice enabled orders.',
  operationId: 'content.orderinvoices.createchargeinvoice',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: OrderinvoicesCreateChargeInvoiceRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrderinvoicesCreateChargeInvoiceResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orderinvoices/{orderId}/createRefundInvoice',
  tags: ['orderinvoices'],
  description:
    'Creates a refund invoice for one or more shipment groups, and triggers a refund for orderinvoice enabled orders. This can only be used for line items that have previously been charged using `createChargeInvoice`. All amounts (except for the summary) are incremental with respect to the previous invoice.',
  operationId: 'content.orderinvoices.createrefundinvoice',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: OrderinvoicesCreateRefundInvoiceRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrderinvoicesCreateRefundInvoiceResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdOrderreportsDisbursementsRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/orderreports/disbursements',
  tags: ['orderreports'],
  description: 'Retrieves a report for disbursements from your Merchant Center account.',
  operationId: 'content.orderreports.listdisbursements',
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
      disbursementEndDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The last date which disbursements occurred. In ISO 8601 format. Default: current date.',
            in: 'query',
            name: 'disbursementEndDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      disbursementStartDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The first date which disbursements occurred. In ISO 8601 format.',
            in: 'query',
            name: 'disbursementStartDate',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of disbursements to return in the response, used for paging.',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrderreportsListDisbursementsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/orderreports/disbursements/{disbursementId}/transactions',
  tags: ['orderreports'],
  description:
    'Retrieves a list of transactions for a disbursement from your Merchant Center account.',
  operationId: 'content.orderreports.listtransactions',
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
              'The maximum number of disbursements to return in the response, used for paging.',
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
      transactionEndDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The last date in which transaction occurred. In ISO 8601 format. Default: current date.',
            in: 'query',
            name: 'transactionEndDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      transactionStartDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The first date in which transaction occurred. In ISO 8601 format.',
            in: 'query',
            name: 'transactionStartDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      disbursementId: z
        .string()
        .openapi({
          param: {
            description: 'The Google-provided ID of the disbursement (found in Wallet).',
            in: 'path',
            name: 'disbursementId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrderreportsListTransactionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdOrderreturnsRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/orderreturns',
  tags: ['orderreturns'],
  description: 'Lists order returns in your Merchant Center account.',
  operationId: 'content.orderreturns.list',
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
      createdEndDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Obtains order returns created before this date (inclusively), in ISO 8601 format.',
            in: 'query',
            name: 'createdEndDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      createdStartDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Obtains order returns created after this date (inclusively), in ISO 8601 format.',
            in: 'query',
            name: 'createdStartDate',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of order returns to return in the response, used for paging. The default value is 25 returns per page, and the maximum allowed value is 250 returns per page.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      orderBy: z
        .enum(['RETURN_CREATION_TIME_DESC', 'RETURN_CREATION_TIME_ASC'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Return the results in the specified order.',
            in: 'query',
            name: 'orderBy',
            schema: {
              enum: ['RETURN_CREATION_TIME_DESC', 'RETURN_CREATION_TIME_ASC'],
              type: 'string',
            },
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrderreturnsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdOrderreturnsReturnIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/orderreturns/{returnId}',
  tags: ['orderreturns'],
  description: 'Retrieves an order return from your Merchant Center account.',
  operationId: 'content.orderreturns.get',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      returnId: z
        .string()
        .openapi({
          param: {
            description: 'Merchant order return ID generated by Google.',
            in: 'path',
            name: 'returnId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: MerchantOrderReturnSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdOrdersRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/orders',
  tags: ['orders'],
  description: 'Lists the orders in your Merchant Center account.',
  operationId: 'content.orders.list',
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
      acknowledged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Obtains orders that match the acknowledgement status. When set to true, obtains orders that have been acknowledged. When false, obtains orders that have not been acknowledged. We recommend using this filter set to `false`, in conjunction with the `acknowledge` call, such that only un-acknowledged orders are returned. ',
            in: 'query',
            name: 'acknowledged',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of orders to return in the response, used for paging. The default value is 25 orders per page, and the maximum allowed value is 250 orders per page.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Order results by placement date in descending or ascending order. Acceptable values are: - placedDateAsc - placedDateDesc ',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
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
      placedDateEnd: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Obtains orders placed before this date (exclusively), in ISO 8601 format.',
            in: 'query',
            name: 'placedDateEnd',
            schema: { type: 'string' },
            required: false,
          },
        }),
      placedDateStart: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Obtains orders placed after this date (inclusively), in ISO 8601 format.',
            in: 'query',
            name: 'placedDateStart',
            schema: { type: 'string' },
            required: false,
          },
        }),
      statuses: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.enum([
              'ACTIVE',
              'COMPLETED',
              'CANCELED',
              'IN_PROGRESS',
              'PENDING_SHIPMENT',
              'PARTIALLY_SHIPPED',
              'SHIPPED',
              'PARTIALLY_DELIVERED',
              'DELIVERED',
              'PARTIALLY_RETURNED',
              'RETURNED',
            ]),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Obtains orders that match any of the specified statuses. Please note that `active` is a shortcut for `pendingShipment` and `partiallyShipped`, and `completed` is a shortcut for `shipped`, `partiallyDelivered`, `delivered`, `partiallyReturned`, `returned`, and `canceled`.',
            explode: true,
            in: 'query',
            name: 'statuses',
            schema: {
              items: {
                enum: [
                  'ACTIVE',
                  'COMPLETED',
                  'CANCELED',
                  'IN_PROGRESS',
                  'PENDING_SHIPMENT',
                  'PARTIALLY_SHIPPED',
                  'SHIPPED',
                  'PARTIALLY_DELIVERED',
                  'DELIVERED',
                  'PARTIALLY_RETURNED',
                  'RETURNED',
                ],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdOrdersOrderIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/orders/{orderId}',
  tags: ['orders'],
  description: 'Retrieves an order from your Merchant Center account.',
  operationId: 'content.orders.get',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrderSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrdersOrderIdAcknowledgeRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/acknowledge',
  tags: ['orders'],
  description: 'Marks an order as acknowledged.',
  operationId: 'content.orders.acknowledge',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrdersAcknowledgeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersAcknowledgeResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrdersOrderIdCancelRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/cancel',
  tags: ['orders'],
  description: 'Cancels all line items in an order, making a full refund.',
  operationId: 'content.orders.cancel',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order to cancel.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrdersCancelRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersCancelResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrdersOrderIdCancelLineItemRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/cancelLineItem',
  tags: ['orders'],
  description: 'Cancels a line item, making a full refund.',
  operationId: 'content.orders.cancellineitem',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrdersCancelLineItemRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersCancelLineItemResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrdersOrderIdInStoreRefundLineItemRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/inStoreRefundLineItem',
  tags: ['orders'],
  description:
    'Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (e.g. cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding via Google then via an in-store return.',
  operationId: 'content.orders.instorerefundlineitem',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrdersInStoreRefundLineItemRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersInStoreRefundLineItemResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrdersOrderIdRefundRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/refund',
  tags: ['orders'],
  description: 'Deprecated, please use returnRefundLineItem instead.',
  operationId: 'content.orders.refund',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order to refund.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrdersRefundRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersRefundResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrdersOrderIdRejectReturnLineItemRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/rejectReturnLineItem',
  tags: ['orders'],
  description: 'Rejects return on an line item.',
  operationId: 'content.orders.rejectreturnlineitem',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrdersRejectReturnLineItemRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersRejectReturnLineItemResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrdersOrderIdReturnLineItemRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/returnLineItem',
  tags: ['orders'],
  description: 'Returns a line item.',
  operationId: 'content.orders.returnlineitem',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrdersReturnLineItemRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersReturnLineItemResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrdersOrderIdReturnRefundLineItemRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/returnRefundLineItem',
  tags: ['orders'],
  description:
    'Returns and refunds a line item. Note that this method can only be called on fully shipped orders. Please also note that the Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.',
  operationId: 'content.orders.returnrefundlineitem',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrdersReturnRefundLineItemRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersReturnRefundLineItemResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrdersOrderIdSetLineItemMetadataRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/setLineItemMetadata',
  tags: ['orders'],
  description:
    'Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided via other methods. Submitted key-value pairs can be retrieved as part of the orders resource.',
  operationId: 'content.orders.setlineitemmetadata',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrdersSetLineItemMetadataRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersSetLineItemMetadataResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrdersOrderIdShipLineItemsRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/shipLineItems',
  tags: ['orders'],
  description: 'Marks line item(s) as shipped.',
  operationId: 'content.orders.shiplineitems',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrdersShipLineItemsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersShipLineItemsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrdersOrderIdTestreturnRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/testreturn',
  tags: ['orders'],
  description: 'Sandbox only. Creates a test return.',
  operationId: 'content.orders.createtestreturn',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrdersCreateTestReturnRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersCreateTestReturnResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/updateLineItemShippingDetails',
  tags: ['orders'],
  description: 'Updates ship by and delivery by dates for a line item.',
  operationId: 'content.orders.updatelineitemshippingdetails',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: OrdersUpdateLineItemShippingDetailsRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: OrdersUpdateLineItemShippingDetailsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrdersOrderIdUpdateMerchantOrderIdRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/updateMerchantOrderId',
  tags: ['orders'],
  description: 'Updates the merchant order ID for a given order.',
  operationId: 'content.orders.updatemerchantorderid',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrdersUpdateMerchantOrderIdRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersUpdateMerchantOrderIdResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrdersOrderIdUpdateShipmentRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/updateShipment',
  tags: ['orders'],
  description: "Updates a shipment's status, carrier, and/or tracking ID.",
  operationId: 'content.orders.updateshipment',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrdersUpdateShipmentRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersUpdateShipmentResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdOrdersbymerchantidMerchantOrderIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/ordersbymerchantid/{merchantOrderId}',
  tags: ['orders'],
  description: 'Retrieves an order using merchant order ID.',
  operationId: 'content.orders.getbymerchantorderid',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      merchantOrderId: z
        .string()
        .openapi({
          param: {
            description: 'The merchant order ID to be looked for.',
            in: 'path',
            name: 'merchantOrderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersGetByMerchantOrderIdResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdPosTargetMerchantIdInventoryRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/pos/{targetMerchantId}/inventory',
  tags: ['pos'],
  description: 'Submit inventory for the given merchant.',
  operationId: 'content.pos.inventory',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the POS or inventory data provider.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      targetMerchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the target merchant.',
            in: 'path',
            name: 'targetMerchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PosInventoryRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PosInventoryResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdPosTargetMerchantIdSaleRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/pos/{targetMerchantId}/sale',
  tags: ['pos'],
  description: 'Submit a sale event for the given merchant.',
  operationId: 'content.pos.sale',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the POS or inventory data provider.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      targetMerchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the target merchant.',
            in: 'path',
            name: 'targetMerchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PosSaleRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PosSaleResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdPosTargetMerchantIdStoreRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/pos/{targetMerchantId}/store',
  tags: ['pos'],
  description: 'Lists the stores of the target merchant.',
  operationId: 'content.pos.list',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the POS or inventory data provider.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      targetMerchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the target merchant.',
            in: 'path',
            name: 'targetMerchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PosListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdPosTargetMerchantIdStoreRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/pos/{targetMerchantId}/store',
  tags: ['pos'],
  description: 'Creates a store for the given merchant.',
  operationId: 'content.pos.insert',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the POS or inventory data provider.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      targetMerchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the target merchant.',
            in: 'path',
            name: 'targetMerchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PosStoreSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PosStoreSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdPosTargetMerchantIdStoreStoreCodeRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/pos/{targetMerchantId}/store/{storeCode}',
  tags: ['pos'],
  description: 'Retrieves information about the given store.',
  operationId: 'content.pos.get',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the POS or inventory data provider.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      targetMerchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the target merchant.',
            in: 'path',
            name: 'targetMerchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      storeCode: z
        .string()
        .openapi({
          param: {
            description: 'A store code that is unique per merchant.',
            in: 'path',
            name: 'storeCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PosStoreSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const deleteMerchantIdPosTargetMerchantIdStoreStoreCodeRoute = createRoute({
  method: 'delete',
  path: '/{merchantId}/pos/{targetMerchantId}/store/{storeCode}',
  tags: ['pos'],
  description: 'Deletes a store for the given merchant.',
  operationId: 'content.pos.delete',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the POS or inventory data provider.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      targetMerchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the target merchant.',
            in: 'path',
            name: 'targetMerchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      storeCode: z
        .string()
        .openapi({
          param: {
            description: 'A store code that is unique per merchant.',
            in: 'path',
            name: 'storeCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdProductsRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/products',
  tags: ['products'],
  description:
    'Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.',
  operationId: 'content.products.list',
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
      includeInvalidInsertedItems: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).',
            in: 'query',
            name: 'includeInvalidInsertedItems',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of products to return in the response, used for paging.',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that contains the products. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProductsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdProductsRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/products',
  tags: ['products'],
  description:
    'Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.',
  operationId: 'content.products.insert',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that contains the product. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProductSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProductSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdProductsProductIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/products/{productId}',
  tags: ['products'],
  description: 'Retrieves a product from your Merchant Center account.',
  operationId: 'content.products.get',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that contains the product. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      productId: z
        .string()
        .openapi({
          param: {
            description: 'The REST ID of the product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProductSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const deleteMerchantIdProductsProductIdRoute = createRoute({
  method: 'delete',
  path: '/{merchantId}/products/{productId}',
  tags: ['products'],
  description: 'Deletes a product from your Merchant Center account.',
  operationId: 'content.products.delete',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that contains the product. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      productId: z
        .string()
        .openapi({
          param: {
            description: 'The REST ID of the product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdProductstatusesRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/productstatuses',
  tags: ['productstatuses'],
  description: 'Lists the statuses of the products in your Merchant Center account.',
  operationId: 'content.productstatuses.list',
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
      destinations: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.',
            explode: true,
            in: 'query',
            name: 'destinations',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      includeAttributes: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to include full product data in the results of the list request. The default value is false.',
            in: 'query',
            name: 'includeAttributes',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      includeInvalidInsertedItems: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to include the invalid inserted items in the result of the list request. By default the invalid items are not shown (the default value is false).',
            in: 'query',
            name: 'includeInvalidInsertedItems',
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The maximum number of product statuses to return in the response, used for paging.',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that contains the products. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProductstatusesListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdProductstatusesProductIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/productstatuses/{productId}',
  tags: ['productstatuses'],
  description: 'Gets the status of a product from your Merchant Center account.',
  operationId: 'content.productstatuses.get',
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
      destinations: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination.',
            explode: true,
            in: 'query',
            name: 'destinations',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      includeAttributes: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to include full product data in the result of this get request. The default value is false.',
            in: 'query',
            name: 'includeAttributes',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that contains the product. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      productId: z
        .string()
        .openapi({
          param: {
            description: 'The REST ID of the product.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProductStatusSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdShippingsettingsRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/shippingsettings',
  tags: ['shippingsettings'],
  description: 'Lists the shipping settings of the sub-accounts in your Merchant Center account.',
  operationId: 'content.shippingsettings.list',
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
              'The maximum number of shipping settings to return in the response, used for paging.',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the managing account. This must be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ShippingsettingsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdShippingsettingsAccountIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/shippingsettings/{accountId}',
  tags: ['shippingsettings'],
  description: 'Retrieves the shipping settings of the account.',
  operationId: 'content.shippingsettings.get',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the account for which to get/update shipping settings.',
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
      content: { 'application/json': { schema: ShippingSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const putMerchantIdShippingsettingsAccountIdRoute = createRoute({
  method: 'put',
  path: '/{merchantId}/shippingsettings/{accountId}',
  tags: ['shippingsettings'],
  description:
    'Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.',
  operationId: 'content.shippingsettings.update',
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
      dryRun: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Flag to simulate a request like in a live environment. If set to true, dry-run mode checks the validity of the request and returns errors (if any).',
            in: 'query',
            name: 'dryRun',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the account for which to get/update shipping settings.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ShippingSettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ShippingSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdSupportedCarriersRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/supportedCarriers',
  tags: ['shippingsettings'],
  description: 'Retrieves supported carriers and carrier services for an account.',
  operationId: 'content.shippingsettings.getsupportedcarriers',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the account for which to retrieve the supported carriers.',
            in: 'path',
            name: 'merchantId',
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
        'application/json': { schema: ShippingsettingsGetSupportedCarriersResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdSupportedHolidaysRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/supportedHolidays',
  tags: ['shippingsettings'],
  description: 'Retrieves supported holidays for an account.',
  operationId: 'content.shippingsettings.getsupportedholidays',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the account for which to retrieve the supported holidays.',
            in: 'path',
            name: 'merchantId',
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
        'application/json': { schema: ShippingsettingsGetSupportedHolidaysResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdSupportedPickupServicesRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/supportedPickupServices',
  tags: ['shippingsettings'],
  description: 'Retrieves supported pickup services for an account.',
  operationId: 'content.shippingsettings.getsupportedpickupservices',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account for which to retrieve the supported pickup services.',
            in: 'path',
            name: 'merchantId',
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
        'application/json': { schema: ShippingsettingsGetSupportedPickupServicesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdTestordersRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/testorders',
  tags: ['orders'],
  description: 'Sandbox only. Creates a test order.',
  operationId: 'content.orders.createtestorder',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that should manage the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrdersCreateTestOrderRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersCreateTestOrderResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdTestordersOrderIdAdvanceRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/testorders/{orderId}/advance',
  tags: ['orders'],
  description:
    'Sandbox only. Moves a test order from state "`inProgress`" to state "`pendingShipment`".',
  operationId: 'content.orders.advancetestorder',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the test order to modify.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersAdvanceTestOrderResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdTestordersOrderIdCancelByCustomerRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/testorders/{orderId}/cancelByCustomer',
  tags: ['orders'],
  description: 'Sandbox only. Cancels a test order for customer-initiated cancellation.',
  operationId: 'content.orders.canceltestorderbycustomer',
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
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that manages the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      orderId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the test order to cancel.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: OrdersCancelTestOrderByCustomerRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersCancelTestOrderByCustomerResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdTestordertemplatesTemplateNameRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/testordertemplates/{templateName}',
  tags: ['orders'],
  description:
    'Sandbox only. Retrieves an order template that can be used to quickly create a new order in sandbox.',
  operationId: 'content.orders.gettestordertemplate',
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
      country: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The country of the template to retrieve. Defaults to `US`.',
            in: 'query',
            name: 'country',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      merchantId: z
        .string()
        .openapi({
          param: {
            description:
              'The ID of the account that should manage the order. This cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      templateName: z
        .enum(['TEMPLATE1', 'TEMPLATE2', 'TEMPLATE1A', 'TEMPLATE1B', 'TEMPLATE3'])
        .openapi({
          param: {
            description: 'The name of the template to retrieve.',
            in: 'path',
            name: 'templateName',
            required: true,
            schema: {
              enum: ['TEMPLATE1', 'TEMPLATE2', 'TEMPLATE1A', 'TEMPLATE1B', 'TEMPLATE3'],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersGetTestOrderTemplateResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})
