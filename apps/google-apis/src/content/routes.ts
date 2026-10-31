import { createRoute, z } from '@hono/zod-openapi'

type CustomAttributeType = { groupValues?: CustomAttributeType[]; name?: string; value?: string }

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
          'Timezone identifier for the cutoff time (for example, "Europe/Zurich"). List of identifiers. Required.',
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
          'Date of the order deadline, in ISO 8601 format. For example, "2016-11-29" for 29th November 2016. Required.',
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
          'Timezone identifier for the deadline hour (for example, "Europe/Zurich"). List of identifiers. Required.',
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
          'Date on which the deadline will become visible to consumers in ISO 8601 format. For example, "2016-10-31" for 31st October 2016. Required.',
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
          'Required. Carrier, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved through the `listSupportedCarriers` method.',
      }),
    carrierService: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved through the `listSupportedCarriers` method. The name of the service must be in the eddSupportedServices list.',
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
          "Shipping origin's country represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml).",
      }),
    originPostalCode: z.string().exactOptional().openapi({ description: 'Shipping origin.' }),
    originStreetAddress: z
      .string()
      .exactOptional()
      .openapi({ description: "Shipping origin's street address." }),
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
              'Maximum number of business days that are spent in transit. 0 means same day delivery, 1 means next day delivery. Must be greater than or equal to `minTransitTimeInDays`.',
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
              'Minimum number of business days that are spent in transit. 0 means same day delivery, 1 means next day delivery. Either `{min,max}TransitTimeInDays` or `transitTimeTable` must be set, but not both.',
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
      .openapi({ description: 'The name of the pickup carrier (for example, `"UPS"`). Required.' }),
    serviceName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the pickup service (for example, `"Access point"`). Required.',
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
          'Carrier service, such as `"UPS"` or `"Fedex"`. The list of supported carriers can be retrieved through the `getSupportedCarriers` method. Required.',
      }),
    carrierService: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Carrier service, such as `"ground"` or `"2 days"`. The list of supported services for a carrier can be retrieved through the `getSupportedCarriers` method. Required.',
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
          'A non-empty list of location IDs. They must all be of the same location type (for example, state).',
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
          'A percentage of the price represented as a number in decimal notation (for example, `"5.4"`). Can only be set if all other fields are not set.',
      }),
    subtableName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of a subtable. Can only be set in table cells (not for single values), and only if all other fields are not set.',
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
        'The value of the rate group (for example, flat rate $10). Can only be set if `mainTable` and `subtables` are not set.',
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

const AccountAdsLinkSchema = z
  .object({
    adsId: z.string().exactOptional().openapi({ description: 'Customer ID of the Ads account.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Status of the link between this Merchant Center account and the Ads account. Upon retrieval, it represents the actual status of the link and can be either `active` if it was approved in Google Ads or `pending` if it\'s pending approval. Upon insertion, it represents the *intended* status of the link. Re-uploading a link with status `active` when it\'s still pending or with status `pending` when it\'s already active will have no effect: the status will remain unchanged. Re-uploading a link with deprecated status `inactive` is equivalent to not submitting the link at all and will delete the link if it was active or cancel the link request if it was pending. Acceptable values are: - "`active`" - "`pending`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountAdsLink')

const AccountImageImprovementsSettingsSchema = z
  .object({
    allowAutomaticImageImprovements: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enables automatic image improvements.' }),
  })
  .openapi({ description: 'Settings for the Automatic Image Improvements.', required: [] })
  .openapi('AccountImageImprovementsSettings')

const AccountImageImprovementsSchema = z
  .object({
    accountImageImprovementsSettings:
      AccountImageImprovementsSettingsSchema.exactOptional().openapi({
        description:
          'Determines how the images should be automatically updated. If this field is not present, then the settings will be deleted. If there are no settings for subaccount, they are inherited from aggregator.',
      }),
    effectiveAllowAutomaticImageImprovements: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. The effective value of allow_automatic_image_improvements. If account_image_improvements_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973)",
    required: [],
  })
  .openapi('AccountImageImprovements')

const AccountItemUpdatesSettingsSchema = z
  .object({
    allowAvailabilityUpdates: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If availability updates are enabled, any previous availability values get overwritten if Google finds an out-of-stock annotation on the offer's page. If additionally `allow_availability_updates` field is set to true, values get overwritten if Google finds an in-stock annotation on the offer’s page.",
      }),
    allowConditionUpdates: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If condition updates are enabled, Google always updates item condition with the condition detected from the details of your product.',
      }),
    allowPriceUpdates: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If price updates are enabled, Google always updates the active price with the crawled information.',
      }),
    allowStrictAvailabilityUpdates: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If allow_availability_updates is enabled, items are automatically updated in all your Shopping target countries. By default, availability updates will only be applied to items that are 'out of stock' on your website but 'in stock' on Shopping. Set this to true to also update items that are 'in stock' on your website, but 'out of stock' on Google Shopping. In order for this field to have an effect, you must also allow availability updates.",
      }),
  })
  .openapi({ description: 'Settings for the Automatic Item Updates.', required: [] })
  .openapi('AccountItemUpdatesSettings')

const AccountItemUpdatesSchema = z
  .object({
    accountItemUpdatesSettings: AccountItemUpdatesSettingsSchema.exactOptional().openapi({
      description:
        'Determines which attributes of the items should be automatically updated. If this field is not present, then the settings will be deleted. If there are no settings for subaccount, they are inherited from aggregator.',
    }),
    effectiveAllowAvailabilityUpdates: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. The effective value of allow_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only.',
        readOnly: true,
      }),
    effectiveAllowConditionUpdates: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. The effective value of allow_condition_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only.',
        readOnly: true,
      }),
    effectiveAllowPriceUpdates: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. The effective value of allow_price_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only.',
        readOnly: true,
      }),
    effectiveAllowStrictAvailabilityUpdates: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. The effective value of allow_strict_availability_updates. If account_item_updates_settings is present, then this value is the same. Otherwise, it represents the inherited value of the parent account. Read-only.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown.",
    required: [],
  })
  .openapi('AccountItemUpdates')

const AccountShippingImprovementsSchema = z
  .object({
    allowShippingImprovements: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enables automatic shipping improvements.' }),
  })
  .openapi({
    description:
      'Not available for MCAs [accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: * Delivery address of an order * Current handling time and shipping time settings * Estimated weekdays or business days * Parcel tracking data',
    required: [],
  })
  .openapi('AccountShippingImprovements')

const AccountAutomaticImprovementsSchema = z
  .object({
    imageImprovements: AccountImageImprovementsSchema.exactOptional().openapi({
      description:
        "This improvement will attempt to automatically correct submitted images if they don't meet the [image requirements](https://support.google.com/merchants/answer/6324350), for example, removing overlays. If successful, the image will be replaced and approved. This improvement is only applied to images of disapproved offers. For more information see: [Automatic image improvements](https://support.google.com/merchants/answer/9242973) This field is only updated (cleared) if provided.",
    }),
    itemUpdates: AccountItemUpdatesSchema.exactOptional().openapi({
      description:
        "Turning on [item updates](https://support.google.com/merchants/answer/3246284) allows Google to automatically update items for you. When item updates are on, Google uses the structured data markup on the website and advanced data extractors to update the price and availability of the items. When the item updates are off, items with mismatched data aren't shown. This field is only updated (cleared) if provided.",
    }),
    shippingImprovements: AccountShippingImprovementsSchema.exactOptional().openapi({
      description:
        'Not available for MCAs [accounts](https://support.google.com/merchants/answer/188487). By turning on [automatic shipping improvements](https://support.google.com/merchants/answer/10027038), you are allowing Google to improve the accuracy of your delivery times shown to shoppers using Google. More accurate delivery times, especially when faster, typically lead to better conversion rates. Google will improve your estimated delivery times based on various factors: - Delivery address of an order - Current handling time and shipping time settings - Estimated weekdays or business days - Parcel tracking data This field is only updated (cleared) if provided.',
    }),
  })
  .openapi({
    description:
      'The automatic improvements of the account can be used to automatically update items, improve images and shipping.',
    required: [],
  })
  .openapi('AccountAutomaticImprovements')

const AccountAddressSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'CLDR country code (for example, "US"). All MCA sub-accounts inherit the country of their parent MCA by default, however the country can be updated for individual sub-accounts.',
      }),
    locality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs).',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal code or ZIP (for example, "94043").' }),
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
      .openapi({
        description: 'Street-level part of the address. Use `\\n` to add a second line.',
      }),
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
      description: 'The address of the business. Use `\\n` to add a second address line.',
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
      .openapi({
        description:
          'The phone number of the business in [E.164](https://en.wikipedia.org/wiki/E.164) format. This can only be updated if a verified phone number is not already set. To replace a verified phone number use the `Accounts.requestphoneverification` and `Accounts.verifyphonenumber`.',
      }),
    phoneVerificationStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Verification status of the phone number of the business. This status is read only and can be updated only by successful phone verification. Acceptable values are: - "`verified`" - "`unverified`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountBusinessInformation')

const AccountConversionSettingsSchema = z
  .object({
    freeListingsAutoTaggingEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When enabled, free listing URLs have a parameter to enable conversion tracking for products owned by the current merchant account. See [auto-tagging](https://support.google.com/merchants/answer/11127659).',
      }),
  })
  .openapi({ description: 'Settings for conversion tracking.', required: [] })
  .openapi('AccountConversionSettings')

const AccountGoogleMyBusinessLinkSchema = z
  .object({
    gmbAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Business Profile. If this is provided, then `gmbEmail` is ignored. The value of this field should match the `accountId` used by the Business Profile API.',
      }),
    gmbEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Business Profile email address of a specific account within a Business Profile. A sample account within a Business Profile could be a business account with set of locations, managed under the Business Profile.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Status of the link between this Merchant Center account and the Business Profile. Acceptable values are: - "`active`" - "`pending`" ',
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
    reportingManager: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether user is a reporting manager.' }),
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
    accountManagement: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. How the account is managed. Acceptable values are: - "`manual`" - "`automatic`" ',
        readOnly: true,
      }),
    adsLinks: z
      .array(AccountAdsLinkSchema)
      .exactOptional()
      .openapi({
        description:
          'Linked Ads accounts that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected either in the Ads interface or through the Google Ads API. To delete an active link, or to cancel a link request, remove it from the list.',
      }),
    adultContent: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the merchant sells adult content.' }),
    automaticImprovements: AccountAutomaticImprovementsSchema.exactOptional().openapi({
      description:
        'The automatic improvements of the account can be used to automatically update items, improve images and shipping. Each section inside AutomaticImprovements is updated separately.',
    }),
    automaticLabelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Automatically created label IDs that are assigned to the account by CSS Center.',
      }),
    businessInformation: AccountBusinessInformationSchema.exactOptional().openapi({
      description: 'The business information of the account.',
    }),
    conversionSettings: AccountConversionSettingsSchema.exactOptional().openapi({
      description: 'Settings for conversion tracking.',
    }),
    cssId: z.string().exactOptional().openapi({ description: 'ID of CSS the account belongs to.' }),
    googleMyBusinessLink: AccountGoogleMyBusinessLinkSchema.exactOptional().openapi({
      description:
        'The Business Profile which is linked or in the process of being linked with the Merchant Center account.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. 64-bit Merchant Center account ID.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#account`".',
      }),
    labelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Manually created label IDs that are assigned to the account by CSS.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Display name for the account.' }),
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
          'Linked YouTube channels that are active or pending approval. To create a new link request, add a new link with status `active` to the list. It will remain in a `pending` state until approved or rejected in the YT Creator Studio interface. To delete an active link, or to cancel a link request, remove it from the list.',
      }),
  })
  .openapi({
    description:
      "Account data. After the creation of a new account it may take a few minutes before it's fully operational. The methods delete, insert, and update require the admin role.",
    required: [],
  })
  .openapi('Account')

const AccountCredentialsSchema = z
  .object({
    accessToken: z.string().exactOptional().openapi({ description: 'An OAuth access token.' }),
    expiresIn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The amount of time, in seconds, after which the access token is no longer valid.',
      }),
    purpose: z
      .enum([
        'ACCOUNT_CREDENTIALS_PURPOSE_UNSPECIFIED',
        'SHOPIFY_ORDER_MANAGEMENT',
        'SHOPIFY_INTEGRATION',
      ])
      .exactOptional()
      .openapi({ description: 'Indicates to Google how Google should use these OAuth tokens.' }),
  })
  .openapi({
    description: "Credentials allowing Google to call a partner's API on behalf of a merchant.",
    required: [],
  })
  .openapi('AccountCredentials')

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

const AccountLabelSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Immutable. The ID of account this label belongs to.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of this label.' }),
    labelId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The ID of the label.', readOnly: true }),
    labelType: z
      .enum(['LABEL_TYPE_UNSPECIFIED', 'MANUAL', 'AUTOMATIC'])
      .exactOptional()
      .openapi({ description: 'Output only. The type of this label.', readOnly: true }),
    name: z.string().exactOptional().openapi({ description: 'The display name of this label.' }),
  })
  .openapi({
    description: 'Label assigned by CSS domain or CSS group to one of its sub-accounts.',
    required: [],
  })
  .openapi('AccountLabel')

const AccountReturnCarrierSchema = z
  .object({
    carrierAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. The Google-provided unique carrier ID, used to update the resource.',
        readOnly: true,
      }),
    carrierAccountName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the carrier account.' }),
    carrierAccountNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of the carrier account.' }),
    carrierCode: z
      .enum(['CARRIER_CODE_UNSPECIFIED', 'FEDEX', 'UPS'])
      .exactOptional()
      .openapi({ description: 'The carrier code enum. Accepts the values FEDEX or UPS.' }),
  })
  .openapi({
    description:
      ' The return carrier information. This service is designed for merchants enrolled in the Buy on Google program. ',
    required: [],
  })
  .openapi('AccountReturnCarrier')

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
    accountManagement: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'How the account is managed. Acceptable values are: - "`manual`" - "`automatic`" ',
      }),
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
      'The status of an account, that is, information about its products, which is computed offline and not returned immediately at insertion time.',
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
    description: 'Tax calculation rule to apply in a state or province (US only).',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#accountTax`".',
      }),
    rules: z
      .array(AccountTaxTaxRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'Tax rules. Updating the tax rules will enable "US" taxes (not reversible). Defining no rules is equivalent to not charging tax at all.',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#accountsAuthInfoResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#accountsClaimWebsiteResponse`".',
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
          'Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" - "`paymentServiceProvider`" ',
      }),
    linkedAccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the linked account.' }),
    services: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Provided services. Acceptable values are: - "`shoppingAdsProductManagement`" - "`shoppingActionsProductManagement`" - "`shoppingActionsOrderManagement`" - "`paymentProcessing`" ',
      }),
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
    view: z
      .string()
      .exactOptional()
      .openapi({
        description: "Controls which fields are visible. Only applicable if the method is 'get'.",
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
      description:
        'A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponseEntry`"',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#accountsCustomBatchResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountsCustomBatchResponse')

const ECommercePlatformLinkInfoSchema = z
  .object({
    externalAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id used by the third party service provider to identify the merchant.',
      }),
  })
  .openapi({
    description: 'Additional information required for E_COMMERCE_PLATFORM link type.',
    required: [],
  })
  .openapi('ECommercePlatformLinkInfo')

const PaymentServiceProviderLinkInfoSchema = z
  .object({
    externalAccountBusinessCountry: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The business country of the merchant account as identified by the third party service provider.',
      }),
    externalAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The id used by the third party service provider to identify the merchant.',
      }),
  })
  .openapi({
    description: 'Additional information required for PAYMENT_SERVICE_PROVIDER link type.',
    required: [],
  })
  .openapi('PaymentServiceProviderLinkInfo')

const AccountsLinkRequestSchema = z
  .object({
    action: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Action to perform for this link. The `"request"` action is only available to select merchants. Acceptable values are: - "`approve`" - "`remove`" - "`request`" ',
      }),
    eCommercePlatformLinkInfo: ECommercePlatformLinkInfoSchema.exactOptional().openapi({
      description: 'Additional information required for `eCommercePlatform` link type.',
    }),
    linkType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of the link between the two accounts. Acceptable values are: - "`channelPartner`" - "`eCommercePlatform`" - "`paymentServiceProvider`" ',
      }),
    linkedAccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the linked account.' }),
    paymentServiceProviderLinkInfo: PaymentServiceProviderLinkInfoSchema.exactOptional().openapi({
      description: 'Additional information required for `paymentServiceProvider` link type.',
    }),
    services: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          ' Acceptable values are: - "`shoppingAdsProductManagement`" - "`shoppingActionsProductManagement`" - "`shoppingActionsOrderManagement`" - "`paymentProcessing`" ',
      }),
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#accountsLinkResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountsLinkResponse')

const LinkServiceSchema = z
  .object({
    service: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Service provided to or by the linked account. Acceptable values are: - "`shoppingActionsOrderManagement`" - "`shoppingActionsProductManagement`" - "`shoppingAdsProductManagement`" - "`paymentProcessing`" ',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Status of the link Acceptable values are: - "`active`" - "`inactive`" - "`pending`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('LinkService')

const LinkedAccountSchema = z
  .object({
    linkedAccountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the linked account.' }),
    services: z
      .array(LinkServiceSchema)
      .exactOptional()
      .openapi({ description: 'List of provided services.' }),
  })
  .openapi({ required: [] })
  .openapi('LinkedAccount')

const AccountsListLinksResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#accountsListLinksResponse`".',
      }),
    links: z
      .array(LinkedAccountSchema)
      .exactOptional()
      .openapi({ description: 'The list of available links.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token for the retrieval of the next page of links.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountsListLinksResponse')

const AccountsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#accountsListResponse`".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token for the retrieval of the next page of accounts.' }),
    resources: z.array(AccountSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AccountsListResponse')

const AccountsUpdateLabelsRequestSchema = z
  .object({
    labelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The IDs of labels that should be assigned to the account.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountsUpdateLabelsRequest')

const AccountsUpdateLabelsResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#accountsUpdateLabelsResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountsUpdateLabelsResponse')

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
      description:
        'A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#accountstatusesCustomBatchResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#accountstatusesListResponse`".',
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
      description:
        'A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxCustomBatchResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#accounttaxListResponse`".',
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

const ActivateBuyOnGoogleProgramRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for the ActivateProgram method.' })
  .openapi('ActivateBuyOnGoogleProgramRequest')

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
          'Required. City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs).',
      }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. [CLDR country code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml) (for example, "US").',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Postal code or ZIP (for example, "94043").' }),
    streetAddress: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Street-level part of the address. Use `\\n` to add a second line.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Address')

const AmountSchema = z
  .object({
    priceAmount: PriceSchema.exactOptional().openapi({
      description:
        '[required] The pre-tax or post-tax price depending on the location of the order.',
    }),
    taxAmount: PriceSchema.exactOptional().openapi({ description: '[required] Tax value.' }),
  })
  .openapi({ required: [] })
  .openapi('Amount')

const AttributionSettingsConversionTypeSchema = z
  .object({
    includeInReporting: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Option indicating if the type should be included in Merchant Center reporting.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: "Output only. Conversion event name, as it'll be reported by the client.",
        readOnly: true,
      }),
  })
  .openapi({ description: 'Message representing a types of conversion events', required: [] })
  .openapi('AttributionSettingsConversionType')

const AttributionSettingsSchema = z
  .object({
    attributionLookbackWindowInDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. Lookback windows (in days) used for attribution in this source. Supported values are 7, 30, 60, 90.',
      }),
    attributionModel: z
      .enum([
        'ATTRIBUTION_MODEL_UNSPECIFIED',
        'CROSS_CHANNEL_LAST_CLICK',
        'ADS_PREFERRED_LAST_CLICK',
        'CROSS_CHANNEL_DATA_DRIVEN',
        'CROSS_CHANNEL_FIRST_CLICK',
        'CROSS_CHANNEL_LINEAR',
        'CROSS_CHANNEL_POSITION_BASED',
        'CROSS_CHANNEL_TIME_DECAY',
      ])
      .exactOptional()
      .openapi({ description: 'Required. Attribution model.' }),
    conversionType: z
      .array(AttributionSettingsConversionTypeSchema)
      .exactOptional()
      .openapi({
        description:
          'Immutable. Unordered list. List of different conversion types a conversion event can be classified as. A standard "purchase" type will be automatically created if this list is empty at creation time.',
      }),
  })
  .openapi({
    description:
      'Represents attribution settings for conversion sources receiving pre-attribution data.',
    required: [],
  })
  .openapi('AttributionSettings')

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

const BestSellersSchema = z
  .object({
    categoryId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Google product category ID to calculate the ranking for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436). If a `WHERE` condition on `best_sellers.category_id` is not specified in the query, rankings for all top-level categories are returned.",
      }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Country where the ranking is calculated. A `WHERE` condition on `best_sellers.country_code` is required in the query.',
      }),
    previousRank: z
      .string()
      .exactOptional()
      .openapi({ description: 'Popularity rank in the previous week or month.' }),
    previousRelativeDemand: z
      .enum(['RELATIVE_DEMAND_UNSPECIFIED', 'VERY_LOW', 'LOW', 'MEDIUM', 'HIGH', 'VERY_HIGH'])
      .exactOptional()
      .openapi({
        description:
          'Estimated demand in relation to the item with the highest popularity rank in the same category and country in the previous week or month.',
      }),
    rank: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Popularity on Shopping ads and free listings, in the selected category and country, based on the estimated number of units sold.',
      }),
    relativeDemand: z
      .enum(['RELATIVE_DEMAND_UNSPECIFIED', 'VERY_LOW', 'LOW', 'MEDIUM', 'HIGH', 'VERY_HIGH'])
      .exactOptional()
      .openapi({
        description:
          'Estimated demand in relation to the item with the highest popularity rank in the same category and country.',
      }),
    relativeDemandChange: z
      .enum(['RELATIVE_DEMAND_CHANGE_TYPE_UNSPECIFIED', 'SINKER', 'FLAT', 'RISER'])
      .exactOptional()
      .openapi({
        description: 'Change in the estimated demand. Whether it rose, sank or remained flat.',
      }),
    reportDate: DateSchema.exactOptional().openapi({
      description:
        'Report date. The value of this field can only be one of the following: * The first day of the week (Monday) for weekly reports. * The first day of the month for monthly reports. If a `WHERE` condition on `best_sellers.report_date` is not specified in the query, the latest available weekly or monthly report is returned.',
    }),
    reportGranularity: z
      .enum(['REPORT_GRANULARITY_UNSPECIFIED', 'WEEKLY', 'MONTHLY'])
      .exactOptional()
      .openapi({
        description:
          'Granularity of the report. The ranking can be done over a week or a month timeframe. A `WHERE` condition on `best_sellers.report_granularity` is required in the query.',
      }),
  })
  .openapi({
    description:
      'Fields related to the [Best sellers reports](https://support.google.com/merchants/answer/9488679).',
    required: [],
  })
  .openapi('BestSellers')

const BrandSchema = z
  .object({ name: z.string().exactOptional().openapi({ description: 'Name of the brand.' }) })
  .openapi({
    description:
      "Brand fields. Values are only set for fields requested explicitly in the request's search query.",
    required: [],
  })
  .openapi('Brand')

const BuyOnGoogleProgramStatusSchema = z
  .object({
    businessModel: z
      .array(
        z.enum(['BUSINESS_MODEL_UNSPECIFIED', 'MANUFACTURER', 'IMPORTER', 'RESELLER', 'OTHER']),
      )
      .exactOptional()
      .openapi({ description: 'The business models in which merchant participates.' }),
    customerServicePendingEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The customer service pending email. After verification this field becomes empty.',
      }),
    customerServicePendingPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The pending phone number specified for BuyOnGoogle program. It might be different than account level phone number. In order to update this field the customer_service_pending_phone_region_code must also be set. After verification this field becomes empty.',
      }),
    customerServicePendingPhoneRegionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Two letter country code for the pending phone number, for example `CA` for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes. In order to update this field the customer_service_pending_phone_number must also be set. After verification this field becomes empty.',
      }),
    customerServiceVerifiedEmail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The customer service verified email.',
        readOnly: true,
      }),
    customerServiceVerifiedPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The verified phone number specified for BuyOnGoogle program. It might be different than account level phone number.',
        readOnly: true,
      }),
    customerServiceVerifiedPhoneRegionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Two letter country code for the verified phone number, for example `CA` for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes.',
        readOnly: true,
      }),
    onlineSalesChannel: z
      .enum(['ONLINE_SALES_CHANNEL_UNSPECIFIED', 'GOOGLE_EXCLUSIVE', 'GOOGLE_AND_OTHER_WEBSITES'])
      .exactOptional()
      .openapi({ description: 'The channels through which the merchant is selling.' }),
    participationStage: z
      .enum([
        'PROGRAM_PARTICIPATION_STAGE_UNSPECIFIED',
        'NOT_ELIGIBLE',
        'ELIGIBLE',
        'ONBOARDING',
        'ELIGIBLE_FOR_REVIEW',
        'PENDING_REVIEW',
        'REVIEW_DISAPPROVED',
        'ACTIVE',
        'PAUSED',
      ])
      .exactOptional()
      .openapi({
        description: 'Output only. The current participation stage for the program.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'Response message for the GetProgramStatus method.', required: [] })
  .openapi('BuyOnGoogleProgramStatus')

const CaptureOrderRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for the CaptureOrder method.' })
  .openapi('CaptureOrderRequest')

const CaptureOrderResponseSchema = z
  .object({
    executionStatus: z
      .enum(['EXECUTION_STATUS_UNSPECIFIED', 'EXECUTED', 'DUPLICATE'])
      .exactOptional()
      .openapi({
        description:
          'The status of the execution. Only defined if the request was successful. Acceptable values are: * "duplicate" * "executed"',
      }),
  })
  .openapi({ description: 'Response message for the CaptureOrder method.', required: [] })
  .openapi('CaptureOrderResponse')

const CarriersCarrierSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The CLDR country code of the carrier (for example, "US"). Always present.',
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
      .openapi({ description: 'The name of the carrier (for example, `"UPS"`). Always present.' }),
    services: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of supported services (for example, `"ground"`) for that carrier. Contains at least one service. This is the list of valid values for CarrierRate.carrierService.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CarriersCarrier')

const CollectionFeaturedProductSchema = z
  .object({
    offerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier for the product item.' }),
    x: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Required. X-coordinate of the product callout on the Shoppable Image.',
      }),
    y: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'Required. Y-coordinate of the product callout on the Shoppable Image.',
      }),
  })
  .openapi({
    description:
      'The message for FeaturedProduct. [FeaturedProduct](https://support.google.com/merchants/answer/9703736)',
    required: [],
  })
  .openapi('CollectionFeaturedProduct')

const CollectionSchema = z
  .object({
    customLabel0: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. [Custom label](https://support.google.com/merchants/answer/9674217)',
      }),
    customLabel1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns.',
      }),
    customLabel2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns.',
      }),
    customLabel3: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns.',
      }),
    customLabel4: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns.',
      }),
    featuredProduct: z
      .array(CollectionFeaturedProductSchema)
      .exactOptional()
      .openapi({
        description:
          'This identifies one or more products associated with the collection. Used as a lookup to the corresponding product ID in your product feeds. Provide a maximum of 100 featuredProduct (for collections). Provide up to 10 featuredProduct (for Shoppable Images only) with ID and X and Y coordinates. [featured_product attribute](https://support.google.com/merchants/answer/9703736)',
      }),
    headline: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          "Your collection's name. [headline attribute](https://support.google.com/merchants/answer/9673580)",
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The REST ID of the collection. Content API methods that operate on collections take this as their collectionId parameter. The REST ID for a collection is of the form collectionId. [id attribute](https://support.google.com/merchants/answer/9649290)',
      }),
    imageLink: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The URL of a collection’s image. [image_link attribute](https://support.google.com/merchants/answer/9703236)',
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language of a collection and the language of any featured products linked to the collection. [language attribute](https://support.google.com/merchants/answer/9673781)',
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A collection’s landing page. URL directly linking to your collection's page on your website. [link attribute](https://support.google.com/merchants/answer/9673983)",
      }),
    mobileLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A collection’s mobile-optimized landing page when you have a different URL for mobile and desktop traffic. [mobile_link attribute](https://support.google.com/merchants/answer/9646123)',
      }),
    productCountry: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[product_country attribute](https://support.google.com/merchants/answer/9674155)',
      }),
  })
  .openapi({ description: 'The collection message.', required: [] })
  .openapi('Collection')

const CollectionStatusItemLevelIssueSchema = z
  .object({
    applicableCountries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Country codes (ISO 3166-1 alpha-2) where issue applies to the offer.',
      }),
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
      .openapi({ description: 'How this issue affects the serving of the collection.' }),
  })
  .openapi({ description: 'Issue associated with the collection.', required: [] })
  .openapi('CollectionStatusItemLevelIssue')

const CollectionStatusDestinationStatusSchema = z
  .object({
    approvedCountries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Country codes (ISO 3166-1 alpha-2) where the collection is approved.',
      }),
    destination: z.string().exactOptional().openapi({ description: 'The name of the destination' }),
    disapprovedCountries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Country codes (ISO 3166-1 alpha-2) where the collection is disapproved.',
      }),
    pendingCountries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Country codes (ISO 3166-1 alpha-2) where the collection is pending approval.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The status for the specified destination in the collections target country.',
      }),
  })
  .openapi({ description: 'Destination status message.', required: [] })
  .openapi('CollectionStatusDestinationStatus')

const CollectionStatusSchema = z
  .object({
    collectionLevelIssuses: z
      .array(CollectionStatusItemLevelIssueSchema)
      .exactOptional()
      .openapi({ description: 'A list of all issues associated with the collection.' }),
    creationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the collection has been created in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z"',
      }),
    destinationStatuses: z
      .array(CollectionStatusDestinationStatusSchema)
      .exactOptional()
      .openapi({ description: 'The intended destinations for the collection.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The ID of the collection for which status is reported.' }),
    lastUpdateDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the collection has been last updated in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z"',
      }),
  })
  .openapi({ description: 'The collectionstatus message.', required: [] })
  .openapi('CollectionStatus')

const GoogleAnalyticsLinkSchema = z
  .object({
    attributionSettings: AttributionSettingsSchema.exactOptional().openapi({
      description: 'Output only. Attribution settings for the linked Google Analytics property.',
      readOnly: true,
    }),
    propertyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. ID of the Google Analytics property the merchant is linked to.',
      }),
    propertyName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Name of the Google Analytics property the merchant is linked to.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      '"Google Analytics Link" sources can be used to get conversion data from an existing Google Analytics property into the linked Merchant Center account.',
    required: [],
  })
  .openapi('GoogleAnalyticsLink')

const MerchantCenterDestinationSchema = z
  .object({
    attributionSettings: AttributionSettingsSchema.exactOptional().openapi({
      description: 'Required. Attribution settings being used for the Merchant Center Destination.',
    }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Three-letter currency code (ISO 4217). The currency code defines in which currency the conversions sent to this destination will be reported in Merchant Center.',
      }),
    destinationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Merchant Center Destination ID.', readOnly: true }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Merchant-specified display name for the destination. This is the name that identifies the conversion source within the Merchant Center UI. Limited to 64 characters.',
      }),
  })
  .openapi({
    description:
      '"Merchant Center Destination" sources can be used to send conversion events from a website using a Google tag directly to a Merchant Center account where the source is created.',
    required: [],
  })
  .openapi('MerchantCenterDestination')

const ConversionSourceSchema = z
  .object({
    conversionSourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Generated by the Content API upon creation of a new `ConversionSource`. Format: [a-z]{4}:.+ The four characters before the colon represent the type of conversio source. Content after the colon represents the ID of the conversion source within that type. The ID of two different conversion sources might be the same across different types. The following type prefixes are supported: - galk: For GoogleAnalyticsLink sources. - mcdn: For MerchantCenterDestination sources.',
        readOnly: true,
      }),
    expireTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when an archived conversion source becomes permanently deleted and is no longer available to undelete.',
        readOnly: true,
      }),
    googleAnalyticsLink: GoogleAnalyticsLinkSchema.exactOptional().openapi({
      description: 'Immutable. Conversion Source of type "Link to Google Analytics Property".',
    }),
    merchantCenterDestination: MerchantCenterDestinationSchema.exactOptional().openapi({
      description: 'Conversion Source of type "Merchant Center Tag Destination".',
    }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'ACTIVE', 'ARCHIVED', 'PENDING'])
      .exactOptional()
      .openapi({
        description:
          "Output only. Current state of this conversion source. Can't be edited through the API.",
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a conversion source owned by a Merchant account. A merchant account can have up to 200 conversion sources.',
    required: [],
  })
  .openapi('ConversionSource')

const CssSchema = z
  .object({
    cssDomainId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Immutable. The CSS domain ID.', readOnly: true }),
    cssGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Immutable. The ID of the CSS group this CSS domain is affiliated with. Only populated for CSS group users.',
        readOnly: true,
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Immutable. The CSS domain's display name, used when space is constrained.",
        readOnly: true,
      }),
    fullName: z
      .string()
      .exactOptional()
      .openapi({
        description: "Output only. Immutable. The CSS domain's full name.",
        readOnly: true,
      }),
    homepageUri: z
      .string()
      .exactOptional()
      .openapi({
        description: "Output only. Immutable. The CSS domain's homepage.",
        readOnly: true,
      }),
    labelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of label IDs that are assigned to this CSS domain by its CSS group. Only populated for CSS group users.',
      }),
  })
  .openapi({ description: 'Information about CSS domain.', required: [] })
  .openapi('Css')

const CustomAttributeSchema: z.ZodType<CustomAttributeType> = z
  .lazy(() =>
    z
      .object({
        groupValues: z
          .array(CustomAttributeSchema)
          .exactOptional()
          .openapi({
            description:
              'Subattributes within this attribute group. Exactly one of value or groupValues must be provided.',
          }),
        name: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'The name of the attribute. Underscores will be replaced by spaces upon insertion.',
          }),
        value: z.string().exactOptional().openapi({ description: 'The value of the attribute.' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('CustomAttribute')

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
        description:
          'Time zone used for schedule. UTC by default. For example, "America/Los_Angeles".',
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
          'Deprecated. Use `feedLabel` instead. The country where the items in the feed will be included in the search index, represented as a CLDR territory code.',
      }),
    excludedDestinations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of destinations to exclude for this target (corresponds to cleared check boxes in Merchant Center). Products that are excluded from all destinations for more than 7 days are automatically deleted.',
      }),
    feedLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Feed label for the DatafeedTarget. Either `country` or `feedLabel` is required. If both `feedLabel` and `country` is specified, the values must match. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-).',
      }),
    includedDestinations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`.',
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-letter ISO 639-1 language of the items in the feed. Must be a valid language for `targets[].country`.',
      }),
    targetCountries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The countries where the items may be displayed. Represented as a CLDR territory code. Will be ignored for "product inventory" feeds.',
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
      .openapi({ description: 'The code of the error, for example, "validation/invalid_value".' }),
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
      .openapi({ description: 'The error message, for example, "Invalid price".' }),
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
    feedLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The feed label status is reported for.' }),
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
      'The status of a datafeed, that is, the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished.',
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
      description:
        'A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#datafeedsCustomBatchResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#datafeedsFetchNowResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#datafeedsListResponse`".',
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
          'Deprecated. Use `feedLabel` instead. The country to get the datafeed status for. If this parameter is provided, then `language` must also be provided. Note that for multi-target datafeeds this parameter is required.',
      }),
    datafeedId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the data feed to get.' }),
    feedLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The feed label to get the datafeed status for. If this parameter is provided, then `language` must also be provided. Note that for multi-target datafeeds this parameter is required.',
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language to get the datafeed status for. If this parameter is provided then `country` must also be provided. Note that for multi-target datafeeds this parameter is required.',
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
      description:
        'A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#datafeedstatusesCustomBatchResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#datafeedstatusesListResponse`".',
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

const TimeZoneSchema = z
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
  .openapi('TimeZone')

const DateTimeSchema = z
  .object({
    day: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Day of month. Must be from 1 to 31 and valid for the year and month, or 0 if specifying a datetime without a day.',
      }),
    hours: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Hours of day in 24 hour format. Should be from 0 to 23, defaults to 0 (midnight). An API may choose to allow the value "24:00:00" for scenarios like business closing time.',
      }),
    minutes: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Optional. Minutes of hour of day. Must be from 0 to 59, defaults to 0.',
      }),
    month: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Month of year. Must be from 1 to 12, or 0 if specifying a datetime without a month.',
      }),
    nanos: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999, defaults to 0.',
      }),
    seconds: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Seconds of minutes of the time. Must normally be from 0 to 59, defaults to 0. An API may allow the value 60 if it allows leap-seconds.',
      }),
    timeZone: TimeZoneSchema.exactOptional().openapi({ description: 'Time zone.' }),
    utcOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'UTC offset. Must be whole seconds, between -18 hours and +18 hours. For example, a UTC offset of -4:00 would be represented as { seconds: -14400 }.',
      }),
    year: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a datetime without a year.',
      }),
  })
  .openapi({
    description:
      "Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.",
    required: [],
  })
  .openapi('DateTime')

const DeliveryAreaPostalCodeRangeSchema = z
  .object({
    firstPostalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: `"94108"`, `"9410*"`, `"9*"`.',
      }),
    lastPostalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A postal code or a pattern of the form prefix* denoting the inclusive upper bound of the range defining the area (for example [070* - 078*] results in the range [07000 - 07899]). It must have the same length as `firstPostalCode`: if `firstPostalCode` is a postal code then `lastPostalCode` must be a postal code too; if firstPostalCode is a pattern then `lastPostalCode` must be a pattern with the same prefix length. Ignored if not set, then the area is defined as being all the postal codes matching `firstPostalCode`.',
      }),
  })
  .openapi({
    description:
      'A range of postal codes that defines the delivery area. Only set `firstPostalCode` when specifying a single postal code.',
    required: [],
  })
  .openapi('DeliveryAreaPostalCodeRange')

const DeliveryAreaSchema = z
  .object({
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The country that the product can be delivered to. Submit a [unicode CLDR region](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) such as `US` or `CH`.',
      }),
    postalCodeRange: DeliveryAreaPostalCodeRangeSchema.exactOptional().openapi({
      description:
        'A postal code, postal code range or postal code prefix that defines this area. Limited to US and AUS.',
    }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A state, territory, or prefecture. This is supported for the United States, Australia, and Japan. Provide a subdivision code from the ISO 3166-2 code tables ([US](https://en.wikipedia.org/wiki/ISO_3166-2:US), [AU](https://en.wikipedia.org/wiki/ISO_3166-2:AU), or [JP](https://en.wikipedia.org/wiki/ISO_3166-2:JP)) without country prefix (for example, `"NY"`, `"NSW"`, `"03"`).',
      }),
  })
  .openapi({
    description:
      'A delivery area for the product. Only one of `countryCode` or `postalCodeRange` must be set.',
    required: [],
  })
  .openapi('DeliveryArea')

const FreeListingsProgramStatusReviewIneligibilityReasonDetailsSchema = z
  .object({
    cooldownTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This timestamp represents end of cooldown period for review ineligbility reason `IN_COOLDOWN_PERIOD`.',
      }),
  })
  .openapi({ description: 'Additional details for review ineligibility reasons.', required: [] })
  .openapi('FreeListingsProgramStatusReviewIneligibilityReasonDetails')

const FreeListingsProgramStatusRegionStatusSchema = z
  .object({
    disapprovalDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date by which eligibilityStatus will go from `WARNING` to `DISAPPROVED`. Only visible when your eligibilityStatus is WARNING. In [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DD`.',
      }),
    eligibilityStatus: z
      .enum([
        'STATE_UNSPECIFIED',
        'APPROVED',
        'DISAPPROVED',
        'WARNING',
        'UNDER_REVIEW',
        'PENDING_REVIEW',
        'ONBOARDING',
      ])
      .exactOptional()
      .openapi({ description: 'Eligibility status of the standard free listing program.' }),
    onboardingIssues: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Issues that must be fixed to be eligible for review.' }),
    regionCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes for all the regions with the same `eligibilityStatus` and `reviewEligibility`.',
      }),
    reviewEligibilityStatus: z
      .enum(['REVIEW_ELIGIBILITY_UNSPECIFIED', 'ELIGIBLE', 'INELIGIBLE'])
      .exactOptional()
      .openapi({
        description:
          'If a program is eligible for review in a specific region. Only visible if `eligibilityStatus` is `DISAPPROVED`.',
      }),
    reviewIneligibilityReason: z
      .enum([
        'REVIEW_INELIGIBILITY_REASON_UNSPECIFIED',
        'ONBOARDING_ISSUES',
        'NOT_ENOUGH_OFFERS',
        'IN_COOLDOWN_PERIOD',
        'ALREADY_UNDER_REVIEW',
        'NO_REVIEW_REQUIRED',
        'WILL_BE_REVIEWED_AUTOMATICALLY',
        'IS_RETIRED',
        'ALREADY_REVIEWED',
      ])
      .exactOptional()
      .openapi({
        description: 'Review ineligibility reason if account is not eligible for review.',
      }),
    reviewIneligibilityReasonDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reason a program in a specific region isn’t eligible for review. Only visible if `reviewEligibilityStatus` is `INELIGIBLE`.',
      }),
    reviewIneligibilityReasonDetails:
      FreeListingsProgramStatusReviewIneligibilityReasonDetailsSchema.exactOptional().openapi({
        description:
          'Additional information for ineligibility. If `reviewIneligibilityReason` is `IN_COOLDOWN_PERIOD`, a timestamp for the end of the cooldown period is provided.',
      }),
    reviewIssues: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Issues evaluated in the review process. Fix all issues before requesting a review.',
      }),
  })
  .openapi({ description: 'Status of program and region.', required: [] })
  .openapi('FreeListingsProgramStatusRegionStatus')

const FreeListingsProgramStatusSchema = z
  .object({
    globalState: z
      .enum(['PROGRAM_STATE_UNSPECIFIED', 'NOT_ENABLED', 'NO_OFFERS_UPLOADED', 'ENABLED'])
      .exactOptional()
      .openapi({
        description: 'State of the program. `ENABLED` if there are offers for at least one region.',
      }),
    regionStatuses: z
      .array(FreeListingsProgramStatusRegionStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Status of the program in each region. Regions with the same status and review eligibility are grouped together in `regionCodes`.',
      }),
  })
  .openapi({ description: 'Response message for GetFreeListingsProgramStatus.', required: [] })
  .openapi('FreeListingsProgramStatus')

const RecommendationCallToActionSchema = z
  .object({
    intent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Intent of the action. This value describes the intent (for example, `OPEN_CREATE_EMAIL_CAMPAIGN_FLOW`) and can vary from recommendation to recommendation. This value can change over time for the same recommendation. Currently available intent values: - OPEN_CREATE_EMAIL_CAMPAIGN_FLOW: Opens a user journey where they can create a marketing email campaign. (No default URL) - OPEN_CREATE_COLLECTION_TAB: Opens a user journey where they can [create a collection](https://support.google.com/merchants/answer/9703228) for their Merchant account. (No default URL)',
        readOnly: true,
      }),
    localizedText: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Localized text of the CTA. Optional.',
        readOnly: true,
      }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. URL of the CTA. This field will only be set for some recommendations where there is a suggested landing URL. Otherwise it will be set to an empty string. We recommend developers to use their own custom landing page according to the description of the intent field above when this uri field is empty.',
      }),
  })
  .openapi({
    description:
      'Call to action (CTA) that explains how a merchant can implement this recommendation',
    required: [],
  })
  .openapi('RecommendationCallToAction')

const RecommendationDescriptionSchema = z
  .object({
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. Text of the description.', readOnly: true }),
    type: z
      .enum(['DESCRIPTION_TYPE_UNSPECIFIED', 'SHORT', 'LONG'])
      .exactOptional()
      .openapi({ description: 'Output only. Type of the description.', readOnly: true }),
  })
  .openapi({ description: 'Google-provided description for the recommendation.', required: [] })
  .openapi('RecommendationDescription')

const RecommendationCreativeSchema = z
  .object({
    type: z
      .enum(['CREATIVE_TYPE_UNSPECIFIED', 'VIDEO', 'PHOTO'])
      .exactOptional()
      .openapi({ description: 'Type of the creative.' }),
    uri: z.string().exactOptional().openapi({ description: 'URL of the creative.' }),
  })
  .openapi({
    description:
      'Creative is a multimedia attachment to recommendation that can be used on the frontend.',
    required: [],
  })
  .openapi('RecommendationCreative')

const RecommendationSchema = z
  .object({
    additionalCallToAction: z
      .array(RecommendationCallToActionSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. CTAs of this recommendation. Repeated.',
        readOnly: true,
      }),
    additionalDescriptions: z
      .array(RecommendationDescriptionSchema)
      .exactOptional()
      .openapi({
        description:
          'Output only. List of additional localized descriptions for a recommendation. Localication uses the `languageCode` field in `GenerateRecommendations` requests. Not all description types are guaranteed to be present and we recommend to rely on default description.',
        readOnly: true,
      }),
    creative: z
      .array(RecommendationCreativeSchema)
      .exactOptional()
      .openapi({
        description: 'Output only. Any creatives attached to the recommendation. Repeated.',
        readOnly: true,
      }),
    defaultCallToAction: RecommendationCallToActionSchema.exactOptional().openapi({
      description: 'Optional. Default CTA of the recommendation.',
    }),
    defaultDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Localized recommendation description. The localization the {@link `GenerateRecommendationsRequest.language_code`} field in {@link `GenerateRecommendationsRequest`} requests.',
      }),
    numericalImpact: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "Optional. A numerical score of the impact from the recommendation's description. For example, a recommendation might suggest an upward trend in sales for a certain product. Higher number means larger impact.",
      }),
    paid: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Indicates whether a user needs to pay when they complete the user journey suggested by the recommendation.',
      }),
    recommendationName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Localized recommendation name. The localization uses the {@link `GenerateRecommendationsRequest.language_code`} field in {@link `GenerateRecommendationsRequest`} requests.',
      }),
    subType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Subtype of the recommendations. Only applicable when multiple recommendations can be generated per type, and is used as an identifier of recommendation under the same recommendation type.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Localized Recommendation Title. Localization uses the {@link `GenerateRecommendationsRequest.language_code`} field in {@link `GenerateRecommendationsRequest`} requests.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Type of the recommendation. List of currently available recommendation types: - OPPORTUNITY_CREATE_NEW_COLLECTION - OPPORTUNITY_CREATE_EMAIL_CAMPAIGN',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      "Recommendations are suggested ways to improve your merchant account's performance. For example, to engage with a feature, or start using a new Google product.",
    required: [],
  })
  .openapi('Recommendation')

const GenerateRecommendationsResponseSchema = z
  .object({
    recommendations: z
      .array(RecommendationSchema)
      .exactOptional()
      .openapi({ description: 'Recommendations generated for a request.' }),
    responseToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. Response token is a string created for each `GenerateRecommendationsResponse`. This token doesn't expire, and is globally unique. This token must be used when reporting interactions for recommendations.",
        readOnly: true,
      }),
  })
  .openapi({ description: 'Response containing generated recommendations.', required: [] })
  .openapi('GenerateRecommendationsResponse')

const GmbAccountsGmbAccountSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email which identifies the Business Profile.' }),
    listingCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of listings under this account.' }),
    name: z.string().exactOptional().openapi({ description: 'The name of the Business Profile.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the Business Profile (User or Business).' }),
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
      .openapi({ description: 'A list of Business Profiles which are available to the merchant.' }),
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
          'The CLDR territory code of the country in which the holiday is available. For example, "US", "DE", "GB". A holiday cutoff can only be configured in a shipping settings service with matching delivery country. Always present.',
      }),
    date: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date of the holiday, in ISO 8601 format. For example, "2016-12-25" for Christmas 2016. Always present.',
      }),
    deliveryGuaranteeDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the order has to arrive at the customer\'s, in ISO 8601 format. For example, "2016-12-24" for 24th December 2016. Always present.',
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

const InapplicabilityDetailsSchema = z
  .object({
    inapplicableCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'Count of this inapplicable reason code.' }),
    inapplicableReason: z
      .enum([
        'INAPPLICABLE_REASON_UNSPECIFIED',
        'CANNOT_BEAT_BUYBOX_WINNER',
        'ALREADY_WINNING_BUYBOX',
        'TRIUMPHED_OVER_BY_SAME_TYPE_RULE',
        'TRIUMPHED_OVER_BY_OTHER_RULE_ON_OFFER',
        'RESTRICTIONS_NOT_MET',
        'UNCATEGORIZED',
        'INVALID_AUTO_PRICE_MIN',
        'INVALID_FLOOR_CONFIG',
      ])
      .exactOptional()
      .openapi({ description: 'Reason code this rule was not applicable.' }),
  })
  .openapi({ description: 'Map of inapplicability details.', required: [] })
  .openapi('InapplicabilityDetails')

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

const InvoiceSummarySchema = z
  .object({
    additionalChargeSummaries: z
      .array(InvoiceSummaryAdditionalChargeSummarySchema)
      .exactOptional()
      .openapi({ description: 'Summary of the total amounts of the additional charges.' }),
    productTotal: AmountSchema.exactOptional().openapi({
      description: '[required] Total price for the product.',
    }),
  })
  .openapi({ required: [] })
  .openapi('InvoiceSummary')

const LabelIdsSchema = z
  .object({
    labelIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The list of label IDs.' }),
  })
  .openapi({
    description: 'The IDs of labels that should be assigned to the CSS domain.',
    required: [],
  })
  .openapi('LabelIds')

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
      .openapi({ description: 'Required. CLDR country code (for example, "US").' }),
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
      .openapi({ description: 'The Business Profile. Required only for RequestGmbAccess.' }),
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
      description: 'The list of accessible Business Profiles.',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsCustomBatchResponse`".',
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
      .openapi({ description: 'A list of Business Profiles which are available to the merchant.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsGetAccessibleGmbAccountsResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsListPosDataProvidersResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsListResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsRequestGmbAccessResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsRequestInventoryVerificationResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsSetInventoryVerificationContactResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#liasettingsSetPosDataProviderResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('LiasettingsSetPosDataProviderResponse')

const ListAccountLabelsResponseSchema = z
  .object({
    accountLabels: z
      .array(AccountLabelSchema)
      .exactOptional()
      .openapi({ description: 'The labels from the specified account.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for the `ListAccountLabels` method.', required: [] })
  .openapi('ListAccountLabelsResponse')

const ListAccountReturnCarrierResponseSchema = z
  .object({
    accountReturnCarriers: z
      .array(AccountReturnCarrierSchema)
      .exactOptional()
      .openapi({ description: 'List of all available account return carriers for the merchant.' }),
  })
  .openapi({ description: 'Response for listing account return carriers.', required: [] })
  .openapi('ListAccountReturnCarrierResponse')

const ListCollectionStatusesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    resources: z
      .array(CollectionStatusSchema)
      .exactOptional()
      .openapi({ description: 'The collectionstatuses listed.' }),
  })
  .openapi({ description: 'Response message for the ListCollectionStatuses method.', required: [] })
  .openapi('ListCollectionStatusesResponse')

const ListCollectionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    resources: z
      .array(CollectionSchema)
      .exactOptional()
      .openapi({ description: 'The collections listed.' }),
  })
  .openapi({ description: 'Response message for the ListCollections method.', required: [] })
  .openapi('ListCollectionsResponse')

const ListConversionSourcesResponseSchema = z
  .object({
    conversionSources: z
      .array(ConversionSourceSchema)
      .exactOptional()
      .openapi({ description: 'List of conversion sources.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Token to be used to fetch the next results page.' }),
  })
  .openapi({ description: 'Response message for the ListConversionSources method.', required: [] })
  .openapi('ListConversionSourcesResponse')

const ListCssesResponseSchema = z
  .object({
    csses: z
      .array(CssSchema)
      .exactOptional()
      .openapi({ description: 'The CSS domains affiliated with the specified CSS group.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'The response message for the `ListCsses` method', required: [] })
  .openapi('ListCssesResponse')

const MethodQuotaSchema = z
  .object({
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The method name, for example `products.list`. Method name does not contain version because quota can be shared between different API versions of the same method.',
      }),
    quotaLimit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current quota limit per day, meaning the maximum number of calls for the method.',
      }),
    quotaUsage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The current quota usage, meaning the number of calls already made to the method.',
      }),
  })
  .openapi({
    description:
      'The quota information per method in the Content API. Includes only methods with current usage greater than zero for your account.',
    required: [],
  })
  .openapi('MethodQuota')

const ListMethodQuotasResponseSchema = z
  .object({
    methodQuotas: z
      .array(MethodQuotaSchema)
      .exactOptional()
      .openapi({ description: 'The current quota usage and limits per each method.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'Response message for the ListMethodQuotas method.', required: [] })
  .openapi('ListMethodQuotasResponse')

const RegionGeoTargetAreaSchema = z
  .object({
    geotargetCriteriaIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. A non-empty list of [location IDs](https://developers.google.com/adwords/api/docs/appendix/geotargeting). They must all be of the same location type (e.g., state).',
      }),
  })
  .openapi({ description: 'A list of geotargets that defines the region area.', required: [] })
  .openapi('RegionGeoTargetArea')

const RegionPostalCodeAreaPostalCodeRangeSchema = z
  .object({
    begin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: "94108", "9410*", "9*".',
      }),
    end: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A postal code or a pattern of the form prefix* denoting the inclusive upper bound of the range defining the area. It must have the same length as postalCodeRangeBegin: if postalCodeRangeBegin is a postal code then postalCodeRangeEnd must be a postal code too; if postalCodeRangeBegin is a pattern then postalCodeRangeEnd must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching postalCodeRangeBegin.',
      }),
  })
  .openapi({ description: 'A range of postal codes that defines the region area.', required: [] })
  .openapi('RegionPostalCodeAreaPostalCodeRange')

const RegionPostalCodeAreaSchema = z
  .object({
    postalCodes: z
      .array(RegionPostalCodeAreaPostalCodeRangeSchema)
      .exactOptional()
      .openapi({ description: 'Required. A range of postal codes.' }),
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. CLDR territory code or the country the postal code group applies to.',
      }),
  })
  .openapi({
    description:
      "A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible via the account's `ShippingSettings.postalCodeGroups` resource.",
    required: [],
  })
  .openapi('RegionPostalCodeArea')

const RegionSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The display name of the region.' }),
    geotargetArea: RegionGeoTargetAreaSchema.exactOptional().openapi({
      description: 'A list of geotargets that defines the region area.',
    }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Immutable. Merchant that owns the region.',
        readOnly: true,
      }),
    postalCodeArea: RegionPostalCodeAreaSchema.exactOptional().openapi({
      description: 'A list of postal codes that defines the region area.',
    }),
    regionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Immutable. The ID uniquely identifying each region.',
        readOnly: true,
      }),
    regionalInventoryEligible: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates if the region is eligible to use in the Regional Inventory configuration.',
        readOnly: true,
      }),
    shippingEligible: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Output only. Indicates if the region is eligible to use in the Shipping Services configuration.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Represents a geographic region that you can use as a target with both the `RegionalInventory` and `ShippingSettings` services. You can define regions as collections of either postal codes or, in some countries, using predefined geotargets.',
    required: [],
  })
  .openapi('Region')

const ListRegionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    regions: z
      .array(RegionSchema)
      .exactOptional()
      .openapi({ description: 'The regions from the specified merchant.' }),
  })
  .openapi({ description: 'Response message for the `ListRegions` method.', required: [] })
  .openapi('ListRegionsResponse')

const RepricingProductReportBuyboxWinningProductStatsSchema = z
  .object({
    buyboxWinsCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of times this product won the buybox with these rules during this time period.',
      }),
  })
  .openapi({
    description: 'Stats specific to buybox winning rules for product report.',
    required: [],
  })
  .openapi('RepricingProductReportBuyboxWinningProductStats')

const PriceAmountSchema = z
  .object({
    currency: z.string().exactOptional().openapi({ description: 'The currency of the price.' }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The price represented as a number.' }),
  })
  .openapi({ description: 'The price represented as a number and currency.', required: [] })
  .openapi('PriceAmount')

const RepricingProductReportSchema = z
  .object({
    applicationCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Total count of Repricer applications. This value captures how many times the rule of this type was applied to this product during this reporting period.',
      }),
    buyboxWinningProductStats:
      RepricingProductReportBuyboxWinningProductStatsSchema.exactOptional().openapi({
        description: 'Stats specific to buybox winning rules for product report (deprecated).',
      }),
    date: DateSchema.exactOptional().openapi({
      description:
        "Date of the stats in this report. The report starts and ends according to the merchant's timezone.",
    }),
    highWatermark: PriceAmountSchema.exactOptional().openapi({
      description: 'Maximum displayed price after repriced during this reporting period.',
    }),
    inapplicabilityDetails: z
      .array(InapplicabilityDetailsSchema)
      .exactOptional()
      .openapi({
        description:
          'List of all reasons the rule did not apply to the product during the specified reporting period.',
      }),
    lowWatermark: PriceAmountSchema.exactOptional().openapi({
      description: 'Minimum displayed price after repriced during this reporting period.',
    }),
    orderItemCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Total unit count of impacted products ordered while the rule was active on the date of the report. This count includes all orders that were started while the rule was active, even if the rule was no longer active when the order was completed.',
      }),
    ruleIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Ids of the Repricing rule for this report.' }),
    totalGmv: PriceAmountSchema.exactOptional().openapi({
      description:
        'Total GMV generated by impacted products while the rule was active on the date of the report. This value includes all orders that were started while the rule was active, even if the rule was no longer active when the order was completed.',
    }),
    type: z
      .enum([
        'REPRICING_RULE_TYPE_UNSPECIFIED',
        'TYPE_STATS_BASED',
        'TYPE_COGS_BASED',
        'TYPE_SALES_VOLUME_BASED',
        'TYPE_COMPETITIVE_PRICE',
      ])
      .exactOptional()
      .openapi({ description: 'Type of the rule.' }),
  })
  .openapi({
    description:
      'Resource that represents a daily Repricing product report. Each report contains stats for a single type of Repricing rule for a single product on a given day. If there are multiple rules of the same type for the product on that day, the report lists all the rules by rule ids, combines the stats, and paginates the results by date. To retrieve the stats of a particular rule, provide the rule_id in the request.',
    required: [],
  })
  .openapi('RepricingProductReport')

const ListRepricingProductReportsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token for retrieving the next page. Its absence means there is no subsequent page.',
      }),
    repricingProductReports: z
      .array(RepricingProductReportSchema)
      .exactOptional()
      .openapi({ description: 'Periodic reports for the given Repricing product.' }),
  })
  .openapi({
    description: 'Response message for the ListRepricingProductReports method.',
    required: [],
  })
  .openapi('ListRepricingProductReportsResponse')

const RepricingRuleReportBuyboxWinningRuleStatsSchema = z
  .object({
    buyboxWonProductCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of unique products that won the buybox with this rule during this period of time.',
      }),
  })
  .openapi({ description: 'Stats specific to buybox winning rules for rule report.', required: [] })
  .openapi('RepricingRuleReportBuyboxWinningRuleStats')

const RepricingRuleReportSchema = z
  .object({
    buyboxWinningRuleStats: RepricingRuleReportBuyboxWinningRuleStatsSchema.exactOptional().openapi(
      { description: 'Stats specific to buybox winning rules for rule report (deprecated).' },
    ),
    date: DateSchema.exactOptional().openapi({
      description:
        "Date of the stats in this report. The report starts and ends according to the merchant's timezone.",
    }),
    impactedProducts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of product ids that are impacted by this rule during this reporting period. Out of stock products and products not searched for by customers are examples of non-impacted products.',
      }),
    inapplicabilityDetails: z
      .array(InapplicabilityDetailsSchema)
      .exactOptional()
      .openapi({
        description:
          'List of all reasons the rule did not apply to the inapplicable products during the specified reporting period.',
      }),
    inapplicableProducts: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of product ids that are inapplicable to this rule during this reporting period. To get the inapplicable reason for a specific product, see RepricingProductReport.',
      }),
    orderItemCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Total unit count of impacted products ordered while the rule was active on the date of the report. This count includes all orders that were started while the rule was active, even if the rule was no longer active when the order was completed.',
      }),
    ruleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Id of the Repricing rule for this report.' }),
    totalGmv: PriceAmountSchema.exactOptional().openapi({
      description:
        'Total GMV generated by impacted products while the rule was active on the date of the report. This value includes all orders that were started while the rule was active, even if the rule was no longer active when the order was completed.',
    }),
    type: z
      .enum([
        'REPRICING_RULE_TYPE_UNSPECIFIED',
        'TYPE_STATS_BASED',
        'TYPE_COGS_BASED',
        'TYPE_SALES_VOLUME_BASED',
        'TYPE_COMPETITIVE_PRICE',
      ])
      .exactOptional()
      .openapi({ description: 'Type of the rule.' }),
  })
  .openapi({
    description: 'Resource that represents a daily Repricing rule report. Next ID: 11',
    required: [],
  })
  .openapi('RepricingRuleReport')

const ListRepricingRuleReportsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token for retrieving the next page. Its absence means there is no subsequent page.',
      }),
    repricingRuleReports: z
      .array(RepricingRuleReportSchema)
      .exactOptional()
      .openapi({ description: 'Daily reports for the given Repricing rule.' }),
  })
  .openapi({
    description: 'Response message for the ListRepricingRuleReports method.',
    required: [],
  })
  .openapi('ListRepricingRuleReportsResponse')

const RepricingRuleCostOfGoodsSaleRuleSchema = z
  .object({
    percentageDelta: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The percent change against the COGS. Ex: 20 would mean to set the adjusted price 1.2X of the COGS data.',
      }),
    priceDelta: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The price delta against the COGS. E.g. 2 means $2 more of the COGS.',
      }),
  })
  .openapi({
    description: 'A repricing rule that changes the sale price based on cost of goods sale.',
    required: [],
  })
  .openapi('RepricingRuleCostOfGoodsSaleRule')

const RepricingRuleEffectiveTimeFixedTimePeriodSchema = z
  .object({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The end time (exclusive) of the period. It can only be hour granularity.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The start time (inclusive) of the period. It can only be hour granularity.',
      }),
  })
  .openapi({ description: 'Definition of a fixed time period.', required: [] })
  .openapi('RepricingRuleEffectiveTimeFixedTimePeriod')

const RepricingRuleEffectiveTimeSchema = z
  .object({
    fixedTimePeriods: z
      .array(RepricingRuleEffectiveTimeFixedTimePeriodSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of fixed time periods combined with OR. The maximum number of entries is limited to 5.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RepricingRuleEffectiveTime')

const RepricingRuleEligibleOfferMatcherStringMatcherSchema = z
  .object({
    strAttributes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'String attributes, as long as such attribute of an offer is one of the string attribute values, the offer is considered as passing the matcher. The string matcher checks an offer for inclusivity in the string attributes, not equality. Only literal string matching is supported, no regex.',
      }),
  })
  .openapi({ description: 'Matcher by string attributes.', required: [] })
  .openapi('RepricingRuleEligibleOfferMatcherStringMatcher')

const RepricingRuleEligibleOfferMatcherSchema = z
  .object({
    brandMatcher: RepricingRuleEligibleOfferMatcherStringMatcherSchema.exactOptional().openapi({
      description: 'Filter by the brand.',
    }),
    itemGroupIdMatcher:
      RepricingRuleEligibleOfferMatcherStringMatcherSchema.exactOptional().openapi({
        description: 'Filter by the item group id.',
      }),
    matcherOption: z
      .enum([
        'MATCHER_OPTION_UNSPECIFIED',
        'MATCHER_OPTION_CUSTOM_FILTER',
        'MATCHER_OPTION_USE_FEED_ATTRIBUTE',
        'MATCHER_OPTION_ALL_PRODUCTS',
      ])
      .exactOptional()
      .openapi({
        description:
          'Determines whether to use the custom matchers or the product feed attribute "repricing_rule_id" to specify offer-rule mapping.',
      }),
    offerIdMatcher: RepricingRuleEligibleOfferMatcherStringMatcherSchema.exactOptional().openapi({
      description: 'Filter by the offer id.',
    }),
    skipWhenOnPromotion: z
      .boolean()
      .exactOptional()
      .openapi({
        description: "When true, the rule won't be applied to offers with active promotions.",
      }),
  })
  .openapi({
    description:
      'Matcher that specifies eligible offers. When the USE_FEED_ATTRIBUTE option is selected, only the repricing_rule_id attribute on the product feed is used to specify offer-rule mapping. When the CUSTOM_FILTER option is selected, only the *_matcher fields are used to filter the offers for offer-rule mapping. If the CUSTOM_FILTER option is selected, an offer needs to satisfy each custom filter matcher to be eligible for a rule. Size limit: the sum of the number of entries in all the matchers should not exceed 20. For example, there can be 15 product ids and 5 brands, but not 10 product ids and 11 brands.',
    required: [],
  })
  .openapi('RepricingRuleEligibleOfferMatcher')

const RepricingRuleRestrictionBoundarySchema = z
  .object({
    percentageDelta: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The percentage delta relative to the offer selling price. This field is signed. It must be negative in floor. When it is used in floor, it should be > -100. For example, if an offer is selling at $10 and this field is -30 in floor, the repricing rule only applies if the calculated new price is >= $7.',
      }),
    priceDelta: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The price micros relative to the offer selling price. This field is signed. It must be negative in floor. For example, if an offer is selling at $10 and this field is -$2 in floor, the repricing rule only applies if the calculated new price is >= $8.',
      }),
  })
  .openapi({ description: 'Definition of a boundary.', required: [] })
  .openapi('RepricingRuleRestrictionBoundary')

const RepricingRuleRestrictionSchema = z
  .object({
    floor: RepricingRuleRestrictionBoundarySchema.exactOptional().openapi({
      description:
        'The inclusive floor lower bound. The repricing rule only applies when new price >= floor.',
    }),
    useAutoPricingMinPrice: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, use the AUTO_PRICING_MIN_PRICE offer attribute as the lower bound of the rule. If use_auto_pricing_min_price is true, then only offers with `AUTO_PRICING_MIN_PRICE` existing on the offer will get Repricer treatment, even if a floor value is set on the rule. Also, if use_auto_pricing_min_price is true, the floor restriction will be ignored.',
      }),
  })
  .openapi({
    description:
      'Definition of a rule restriction. At least one of the following needs to be true: (1) use_auto_pricing_min_price is true (2) floor.price_delta exists (3) floor.percentage_delta exists If floor.price_delta and floor.percentage_delta are both set on a rule, the highest value will be chosen by the Repricer. In other words, for a product with a price of $50, if the `floor.percentage_delta` is "-10" and the floor.price_delta is "-12", the offer price will only be lowered $5 (10% lower than the original offer price).',
    required: [],
  })
  .openapi('RepricingRuleRestriction')

const RepricingRuleStatsBasedRuleSchema = z
  .object({
    percentageDelta: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The percent change against the price target. Valid from 0 to 100 inclusively.',
      }),
    priceDelta: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The price delta against the above price target. A positive value means the price should be adjusted to be above statistical measure, and a negative value means below. Currency code must not be included.',
      }),
  })
  .openapi({ description: 'Definition of stats based rule.', required: [] })
  .openapi('RepricingRuleStatsBasedRule')

const RepricingRuleSchema = z
  .object({
    cogsBasedRule: RepricingRuleCostOfGoodsSaleRuleSchema.exactOptional().openapi({
      description:
        'The rule definition for TYPE_COGS_BASED. Required when the rule type is TYPE_COGS_BASED.',
    }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. [CLDR country code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) (e.g. "US").',
      }),
    effectiveTimePeriod: RepricingRuleEffectiveTimeSchema.exactOptional().openapi({
      description: 'Required. Time period when the rule should take effect.',
    }),
    eligibleOfferMatcher: RepricingRuleEligibleOfferMatcherSchema.exactOptional().openapi({
      description: 'Required. Match criteria for the eligible offers.',
    }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Immutable. The two-letter ISO 639-1 language code associated with the repricing rule.',
      }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Immutable. Merchant that owns the repricing rule.',
        readOnly: true,
      }),
    paused: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Represents whether a rule is paused. A paused rule will behave like a non-paused rule within CRUD operations, with the major difference that a paused rule will not be evaluated and will have no effect on offers.',
      }),
    restriction: RepricingRuleRestrictionSchema.exactOptional().openapi({
      description: 'Required. Restriction of the rule appliance.',
    }),
    ruleId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Immutable. The ID to uniquely identify each repricing rule.',
        readOnly: true,
      }),
    statsBasedRule: RepricingRuleStatsBasedRuleSchema.exactOptional().openapi({
      description:
        'The rule definition for TYPE_STATS_BASED. Required when the rule type is TYPE_STATS_BASED.',
    }),
    title: z.string().exactOptional().openapi({ description: 'The title for the rule.' }),
    type: z
      .enum([
        'REPRICING_RULE_TYPE_UNSPECIFIED',
        'TYPE_STATS_BASED',
        'TYPE_COGS_BASED',
        'TYPE_SALES_VOLUME_BASED',
        'TYPE_COMPETITIVE_PRICE',
      ])
      .exactOptional()
      .openapi({ description: 'Required. Immutable. The type of the rule.' }),
  })
  .openapi({
    description:
      'Represents a repricing rule. A repricing rule is used by shopping serving to adjust transactable offer prices if conditions are met.',
    required: [],
  })
  .openapi('RepricingRule')

const ListRepricingRulesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    repricingRules: z
      .array(RepricingRuleSchema)
      .exactOptional()
      .openapi({ description: 'The rules from the specified merchant.' }),
  })
  .openapi({ description: 'Response message for the `ListRepricingRules` method.', required: [] })
  .openapi('ListRepricingRulesResponse')

const ReturnPolicyOnlinePolicySchema = z
  .object({
    days: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of days items can be returned after delivery, where one day is defined to be 24 hours after the delivery timestamp. Required for `numberOfDaysAfterDelivery` returns.',
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'NUMBER_OF_DAYS_AFTER_DELIVERY', 'NO_RETURNS', 'LIFETIME_RETURNS'])
      .exactOptional()
      .openapi({ description: 'Policy type.' }),
  })
  .openapi({ description: 'The available policies.', required: [] })
  .openapi('ReturnPolicyOnlinePolicy')

const ReturnPolicyOnlineRestockingFeeSchema = z
  .object({
    fixedFee: PriceAmountSchema.exactOptional().openapi({ description: 'Fixed restocking fee.' }),
    microPercent: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Percent of total price in micros. 15,000,000 means 15% of the total price would be charged.',
      }),
  })
  .openapi({
    description: 'The restocking fee. This can either be a fixed fee or a micro percent.',
    required: [],
  })
  .openapi('ReturnPolicyOnlineRestockingFee')

const ReturnPolicyOnlineReturnShippingFeeSchema = z
  .object({
    fixedFee: PriceAmountSchema.exactOptional().openapi({
      description:
        'Fixed return shipping fee amount. This value is only applicable when type is FIXED. We will treat the return shipping fee as free if type is FIXED and this value is not set.',
    }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'FIXED', 'CUSTOMER_PAYING_ACTUAL_FEE'])
      .exactOptional()
      .openapi({ description: 'Type of return shipping fee.' }),
  })
  .openapi({
    description:
      'The return shipping fee. This can either be a fixed fee or a boolean to indicate that the customer pays the actual shipping cost.',
    required: [],
  })
  .openapi('ReturnPolicyOnlineReturnShippingFee')

const ReturnPolicyOnlineReturnReasonCategoryInfoSchema = z
  .object({
    returnLabelSource: z
      .enum([
        'RETURN_LABEL_SOURCE_UNSPECIFIED',
        'DOWNLOAD_AND_PRINT',
        'IN_THE_BOX',
        'CUSTOMER_RESPONSIBILITY',
      ])
      .exactOptional()
      .openapi({ description: 'The corresponding return label source.' }),
    returnReasonCategory: z
      .enum(['RETURN_REASON_CATEGORY_UNSPECIFIED', 'BUYER_REMORSE', 'ITEM_DEFECT'])
      .exactOptional()
      .openapi({ description: 'The return reason category.' }),
    returnShippingFee: ReturnPolicyOnlineReturnShippingFeeSchema.exactOptional().openapi({
      description:
        "The corresponding return shipping fee. This is only applicable when returnLabelSource is not the customer's responsibility.",
    }),
  })
  .openapi({ description: 'The return reason category info wrapper.', required: [] })
  .openapi('ReturnPolicyOnlineReturnReasonCategoryInfo')

const ReturnPolicyOnlineSchema = z
  .object({
    countries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The countries of sale where the return policy is applicable. The values must be a valid 2 letter ISO 3166 code, e.g. "US".',
      }),
    itemConditions: z
      .array(z.enum(['ITEM_CONDITION_UNSPECIFIED', 'NEW', 'USED']))
      .exactOptional()
      .openapi({
        description:
          'The item conditions that are accepted for returns. This is required to not be empty unless the type of return policy is noReturns.',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The unique user-defined label of the return policy. The same label cannot be used in different return policies for the same country. Policies with the label 'default' will apply to all products, unless a product specifies a return_policy_label attribute.",
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the policy as shown in Merchant Center.' }),
    policy: ReturnPolicyOnlinePolicySchema.exactOptional().openapi({
      description: 'The return policy.',
    }),
    restockingFee: ReturnPolicyOnlineRestockingFeeSchema.exactOptional().openapi({
      description:
        'The restocking fee that applies to all return reason categories. This would be treated as a free restocking fee if the value is not set.',
    }),
    returnMethods: z
      .array(z.enum(['RETURN_METHOD_UNSPECIFIED', 'BY_MAIL', 'IN_STORE', 'AT_A_KIOSK']))
      .exactOptional()
      .openapi({
        description:
          'The return methods of how customers can return an item. This value is required to not be empty unless the type of return policy is noReturns.',
      }),
    returnPolicyId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. Return policy ID generated by Google.',
        readOnly: true,
      }),
    returnPolicyUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The return policy uri. This can used by Google to do a sanity check for the policy.',
      }),
    returnReasonCategoryInfo: z
      .array(ReturnPolicyOnlineReturnReasonCategoryInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'The return reason category information. This required to not be empty unless the type of return policy is noReturns.',
      }),
  })
  .openapi({
    description:
      'Return policy online object. This is currently used to represent return policies for ads and free listings programs.',
    required: [],
  })
  .openapi('ReturnPolicyOnline')

const ListReturnPolicyOnlineResponseSchema = z
  .object({
    returnPolicies: z
      .array(ReturnPolicyOnlineSchema)
      .exactOptional()
      .openapi({ description: 'The retrieved return policies.' }),
  })
  .openapi({
    description: 'Response message for the `ListReturnPolicyOnline` method.',
    required: [],
  })
  .openapi('ListReturnPolicyOnlineResponse')

const LocalInventorySchema = z
  .object({
    availability: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Availability of the product. For accepted attribute values, see the local product inventory feed specification.',
      }),
    customAttributes: z
      .array(CustomAttributeSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of custom (merchant-provided) attributes. Can also be used to submit any attribute of the feed specification in its generic form, for example, `{ "name": "size type", "value": "regular" }`.',
      }),
    instoreProductLocation: z
      .string()
      .exactOptional()
      .openapi({ description: 'In-store product location.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#localInventory`"',
      }),
    pickupMethod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Supported pickup method for this offer. Unless the value is "not supported", this field must be submitted together with `pickupSla`. For accepted attribute values, see the local product inventory feed specification.',
      }),
    pickupSla: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Expected date that an order will be ready for pickup relative to the order date. Must be submitted together with `pickupMethod`. For accepted attribute values, see the local product inventory feed specification.',
      }),
    price: PriceSchema.exactOptional().openapi({ description: 'Price of the product.' }),
    quantity: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Quantity of the product. Must be nonnegative.' }),
    salePrice: PriceSchema.exactOptional().openapi({
      description:
        'Sale price of the product. Mandatory if `sale_price_effective_date` is defined.',
    }),
    salePriceEffectiveDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates may be specified as 'null' if undecided.",
      }),
    storeCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Store code of this local inventory resource.' }),
  })
  .openapi({
    description:
      'Local inventory resource. For accepted attribute values, see the local product inventory feed specification.',
    required: [],
  })
  .openapi('LocalInventory')

const LocalinventoryCustomBatchRequestEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'An entry ID, unique within the batch request.' }),
    localInventory: LocalInventorySchema.exactOptional().openapi({
      description: 'Local inventory of the product.',
    }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the managing account.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Method of the batch request entry. Acceptable values are: - "`insert`" ',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the product for which to update local inventory.' }),
  })
  .openapi({
    description: 'Batch entry encoding a single local inventory update request.',
    required: [],
  })
  .openapi('LocalinventoryCustomBatchRequestEntry')

const LocalinventoryCustomBatchRequestSchema = z
  .object({
    entries: z
      .array(LocalinventoryCustomBatchRequestEntrySchema)
      .exactOptional()
      .openapi({ description: 'The request entries to be processed in the batch.' }),
  })
  .openapi({ required: [] })
  .openapi('LocalinventoryCustomBatchRequest')

const LocalinventoryCustomBatchResponseEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The ID of the request entry this entry responds to.' }),
    errors: ErrorsSchema.exactOptional().openapi({
      description:
        'A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#localinventoryCustomBatchResponseEntry`"',
      }),
  })
  .openapi({
    description: 'Batch entry encoding a single local inventory update response.',
    required: [],
  })
  .openapi('LocalinventoryCustomBatchResponseEntry')

const LocalinventoryCustomBatchResponseSchema = z
  .object({
    entries: z
      .array(LocalinventoryCustomBatchResponseEntrySchema)
      .exactOptional()
      .openapi({ description: 'The result of the execution of the batch requests.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#localinventoryCustomBatchResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('LocalinventoryCustomBatchResponse')

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

const MerchantRejectionReasonSchema = z
  .object({
    description: z.string().exactOptional().openapi({ description: 'Description of the reason.' }),
    reasonCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Code of the rejection reason.' }),
  })
  .openapi({ required: [] })
  .openapi('MerchantRejectionReason')

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
      .openapi({ description: 'The CLDR territory code of the target country of the product.' }),
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

const MonetaryAmountSchema = z
  .object({
    priceAmount: PriceSchema.exactOptional().openapi({
      description:
        'The pre-tax or post-tax price depends on the location of the order. - For countries (for example, "US". where price attribute excludes tax, this field corresponds to the pre-tax value. - For coutries (for example, "France") where price attribute includes tax, this field corresponds to the post-tax value .',
    }),
    taxAmount: PriceSchema.exactOptional().openapi({
      description:
        'Tax value, present only for countries where price attribute excludes tax (for example, "US". No tax is referenced as 0 value with the corresponding `currency`.',
    }),
  })
  .openapi({ required: [] })
  .openapi('MonetaryAmount')

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
    merchantRejectionReason: MerchantRejectionReasonSchema.exactOptional().openapi({
      description: 'The reason that the merchant chose to reject an item return.',
    }),
    merchantReturnReason: RefundReasonSchema.exactOptional().openapi({
      description: 'The reason that merchant chooses to accept a return item.',
    }),
    product: OrderLineItemProductSchema.exactOptional().openapi({
      description: 'Product data from the time of the order placement.',
    }),
    refundableAmount: MonetaryAmountSchema.exactOptional().openapi({
      description: 'Maximum amount that can be refunded for this return item.',
    }),
    returnItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unit level ID for the return item. Different units of the same product will have different IDs.',
      }),
    returnShipmentIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'IDs of the return shipments that this return item belongs to.' }),
    shipmentGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the original shipment group. Provided for shipments with invoice support.',
      }),
    shipmentUnitId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the shipment unit assigned by the merchant. Provided for shipments with invoice support.',
      }),
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

const ReturnPricingInfoSchema = z
  .object({
    chargeReturnShippingFee: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Default option for whether merchant should charge the customer for return shipping costs, based on customer selected return reason and merchant's return policy for the items being returned.",
      }),
    maxReturnShippingFee: MonetaryAmountSchema.exactOptional().openapi({
      description:
        "Maximum return shipping costs that may be charged to the customer depending on merchant's assessment of the return reason and the merchant's return policy for the items being returned.",
    }),
    refundableItemsTotalAmount: MonetaryAmountSchema.exactOptional().openapi({
      description:
        'Total amount that can be refunded for the items in this return. It represents the total amount received by the merchant for the items, after applying merchant coupons.',
    }),
    refundableShippingAmount: MonetaryAmountSchema.exactOptional().openapi({
      description: 'Maximum amount that can be refunded for the original shipping fee.',
    }),
    totalRefundedAmount: MonetaryAmountSchema.exactOptional().openapi({
      description:
        'Total amount already refunded by the merchant. It includes all types of refunds (items, shipping, etc.) Not provided if no refund has been applied yet.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ReturnPricingInfo')

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
          'Type of the return method. Acceptable values are: - "`byMail`" - "`contactCustomerSupport`" - "`returnless`" - "`inStore`" ',
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
    returnPricingInfo: ReturnPricingInfoSchema.exactOptional().openapi({
      description: 'Information about shipping costs.',
    }),
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

const MetricsSchema = z
  .object({
    aos: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Average order size - the average number of items in an order. **This metric cannot be segmented by product dimensions and customer_country_code.**',
      }),
    aovMicros: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "Average order value in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) - the average value (total price of items) of all placed orders. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by product dimensions and customer_country_code.**",
      }),
    clicks: z.string().exactOptional().openapi({ description: 'Number of clicks.' }),
    conversionRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Number of conversions divided by the number of clicks, reported on the impression date. The metric is currently available only for the FREE_PRODUCT_LISTING program.',
      }),
    conversionValueMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Value of conversions in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) attributed to the product, reported on the conversion date. The metric is currently available only for the FREE_PRODUCT_LISTING program. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response.",
      }),
    conversions: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Number of conversions attributed to the product, reported on the conversion date. Depending on the attribution model, a conversion might be distributed across multiple clicks, where each click gets its own credit assigned. This metric is a sum of all such credits. The metric is currently available only for the FREE_PRODUCT_LISTING program.',
      }),
    ctr: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "Click-through rate - the number of clicks merchant's products receive (clicks) divided by the number of times the products are shown (impressions).",
      }),
    daysToShip: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Average number of days between an order being placed and the order being fully shipped, reported on the last shipment date. **This metric cannot be segmented by product dimensions and customer_country_code.**',
      }),
    impressions: z
      .string()
      .exactOptional()
      .openapi({ description: "Number of times merchant's products are shown." }),
    itemDaysToShip: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Average number of days between an item being ordered and the item being **This metric cannot be segmented by customer_country_code.**',
      }),
    itemFillRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Percentage of shipped items in relation to all finalized items (shipped or rejected by the merchant; unshipped items are not taken into account), reported on the order date. Item fill rate is lowered by merchant rejections. **This metric cannot be segmented by customer_country_code.**',
      }),
    orderedItemSalesMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Total price of ordered items in micros (1 millionth of a standard unit, 1 USD = 1000000 micros). Excludes shipping, taxes (US only), and customer cancellations that happened within 30 minutes of placing the order. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.**",
      }),
    orderedItems: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of ordered items. Excludes customer cancellations that happened within 30 minutes of placing the order. **This metric cannot be segmented by customer_country_code.**',
      }),
    orders: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of placed orders. Excludes customer cancellations that happened within 30 minutes of placing the order. **This metric cannot be segmented by product dimensions and customer_country_code.**',
      }),
    rejectedItems: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of ordered items canceled by the merchant, reported on the order date. **This metric cannot be segmented by customer_country_code.**',
      }),
    returnRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "Total price of returned items divided by the total price of shipped items, reported on the order date. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.**",
      }),
    returnedItems: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of ordered items sent back for return, reported on the date when the merchant accepted the return. **This metric cannot be segmented by customer_country_code.**',
      }),
    returnsMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Total price of ordered items sent back for return in micros (1 millionth of a standard unit, 1 USD = 1000000 micros), reported on the date when the merchant accepted the return. The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.**",
      }),
    shippedItemSalesMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Total price of shipped items in micros (1 millionth of a standard unit, 1 USD = 1000000 micros), reported on the order date. Excludes shipping and taxes (US only). The currency of the returned value is stored in the currency_code segment. If this metric is selected, 'segments.currency_code' is automatically added to the SELECT clause in the search query (unless it is explicitly selected by the user) and the currency_code segment is populated in the response. **This metric cannot be segmented by customer_country_code.**",
      }),
    shippedItems: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of shipped items, reported on the shipment date. **This metric cannot be segmented by customer_country_code.**',
      }),
    shippedOrders: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Number of fully shipped orders, reported on the last shipment date. **This metric cannot be segmented by product dimensions and customer_country_code.**',
      }),
    unshippedItems: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Number of ordered items not shipped up until the end of the queried day. If a multi-day period is specified in the search query, the returned value is the average number of unshipped items over the days in the queried period. **This metric cannot be segmented by customer_country_code.**',
      }),
    unshippedOrders: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Number of orders not shipped or partially shipped up until the end of the queried day. If a multi-day period is specified in the search query, the returned value is the average number of unshipped orders over the days in the queried period. **This metric cannot be segmented by product dimensions and customer_country_code.**',
      }),
  })
  .openapi({
    description:
      "Performance metrics. Values are only set for metrics requested explicitly in the request's search query.",
    required: [],
  })
  .openapi('Metrics')

const OnboardBuyOnGoogleProgramRequestSchema = z
  .object({
    customerServiceEmail: z
      .string()
      .exactOptional()
      .openapi({ description: 'The customer service email.' }),
  })
  .openapi({ description: 'Request message for the OnboardProgram method.', required: [] })
  .openapi('OnboardBuyOnGoogleProgramRequest')

const OrderOrderAnnotationSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Key for additional google provided (as key-value pairs) annotation.',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Value for additional google provided (as key-value pairs) annotation.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderOrderAnnotation')

const OrderAddressSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'CLDR country code (for example, "US").' }),
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
          'City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs).',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal Code or ZIP (for example, "94043").' }),
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
      .openapi({
        description: 'Street-level part of the address. Use `\\n` to add a second line.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderAddress')

const OrderCustomerLoyaltyInfoSchema = z
  .object({
    loyaltyNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The loyalty card/membership number.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of card/membership holder, this field will be populated when',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderCustomerLoyaltyInfo')

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
    fullName: z.string().exactOptional().openapi({ description: 'Full name of the customer.' }),
    invoiceReceivingEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email address for the merchant to send value-added tax or invoice documentation of the order. Only the last document sent is made available to the customer. For more information, see About automated VAT invoicing for Buy on Google.',
      }),
    loyaltyInfo: OrderCustomerLoyaltyInfoSchema.exactOptional().openapi({
      description: 'Loyalty program information.',
    }),
    marketingRightsInfo: OrderCustomerMarketingRightsInfoSchema.exactOptional().openapi({
      description:
        "Customer's marketing preferences. Contains the marketing opt-in information that is current at the time that the merchant call. User preference selections can change from one order to the next so preferences must be checked with every order.",
    }),
  })
  .openapi({ required: [] })
  .openapi('OrderCustomer')

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

const OrderLineItemAdjustmentSchema = z
  .object({
    priceAdjustment: PriceSchema.exactOptional().openapi({
      description: 'Adjustment for total price of the line item.',
    }),
    taxAdjustment: PriceSchema.exactOptional().openapi({
      description: 'Adjustment for total tax of the line item.',
    }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Type of this adjustment. Acceptable values are: - "`promotion`" ' }),
  })
  .openapi({ required: [] })
  .openapi('OrderLineItemAdjustment')

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
          'The reason for the cancellation. Orders that are canceled with a noInventory reason will lead to the removal of the product from Buy on Google until you make an update to that product. This won\'t affect your Shopping ads. Acceptable values are: - "`autoPostInternal`" - "`autoPostInvalidBillingAddress`" - "`autoPostNoInventory`" - "`autoPostPriceError`" - "`autoPostUndeliverableShippingAddress`" - "`couponAbuse`" - "`customerCanceled`" - "`customerInitiatedCancel`" - "`customerSupportRequested`" - "`failToPushOrderGoogleError`" - "`failToPushOrderMerchantError`" - "`failToPushOrderMerchantFulfillmentError`" - "`failToPushOrderToMerchant`" - "`failToPushOrderToMerchantOutOfStock`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`merchantDidNotShipOnTime`" - "`noInventory`" - "`orderTimeout`" - "`other`" - "`paymentAbuse`" - "`paymentDeclined`" - "`priceError`" - "`returnRefundAbuse`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`failedToCaptureFunds`" ',
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
    pickupPromiseInMinutes: z
      .uint32()
      .exactOptional()
      .openapi({
        description:
          'The promised time in minutes in which the order will be ready for pickup. This only applies to buy-online-pickup-in-store same-day order.',
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
    adjustments: z
      .array(OrderLineItemAdjustmentSchema)
      .exactOptional()
      .openapi({ description: 'Price and tax adjustments applied on the line item.' }),
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
        'Product data as seen by customer from the time of the order placement. Note that certain attributes values (for example, title or gtin) might be reformatted and no longer match values submitted through product feed.',
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
    quantityUndeliverable: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'Number of items undeliverable.' }),
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
    pickupType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The pickup type of this order. Acceptable values are: - "`merchantStore`" - "`merchantStoreCurbside`" - "`merchantStoreLocker`" - "`thirdPartyPickupPoint`" - "`thirdPartyLocker`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderPickupDetails')

const OrderPromotionItemSchema = z
  .object({
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The line item ID of a product. Do not provide for `orders.createtestorder`.',
      }),
    offerId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Offer ID of a product. Only for `orders.createtestorder`.',
      }),
    productId: z.string().exactOptional().openapi({ description: '`orders.createtestorder`.' }),
    quantity: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The quantity of the associated product. Do not provide for `orders.createtestorder`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderPromotionItem')

const OrderPromotionSchema = z
  .object({
    applicableItems: z
      .array(OrderPromotionItemSchema)
      .exactOptional()
      .openapi({
        description:
          'Items that this promotion may be applied to. If empty, there are no restrictions on applicable items and quantity. This field will also be empty for shipping promotions because shipping is not tied to any specific item.',
      }),
    appliedItems: z
      .array(OrderPromotionItemSchema)
      .exactOptional()
      .openapi({
        description:
          'Items that this promotion have been applied to. Do not provide for `orders.createtestorder`. This field will be empty for shipping promotions because shipping is not tied to any specific item.',
      }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Promotion end time in ISO 8601 format. Date, time, and offset required, for example, "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z".',
      }),
    funder: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The party funding the promotion. Only `merchant` is supported for `orders.createtestorder`. Acceptable values are: - "`google`" - "`merchant`" ',
      }),
    merchantPromotionId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. This field is used to identify promotions within merchants' own systems.",
      }),
    priceValue: PriceSchema.exactOptional().openapi({
      description:
        'Estimated discount applied to price. Amount is pre-tax or post-tax depending on location of order.',
    }),
    shortTitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short title of the promotion to be shown on the checkout page. Do not provide for `orders.createtestorder`.',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Promotion start time in ISO 8601 format. Date, time, and offset required, for example, "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z".',
      }),
    subtype: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The category of the promotion. Only `moneyOff` is supported for `orders.createtestorder`. Acceptable values are: - "`buyMGetMoneyOff`" - "`buyMGetNMoneyOff`" - "`buyMGetNPercentOff`" - "`buyMGetPercentOff`" - "`freeGift`" - "`freeGiftWithItemId`" - "`freeGiftWithValue`" - "`freeShippingOvernight`" - "`freeShippingStandard`" - "`freeShippingTwoDay`" - "`moneyOff`" - "`percentOff`" - "`rewardPoints`" - "`salePrice`" ',
      }),
    taxValue: PriceSchema.exactOptional().openapi({
      description:
        'Estimated discount applied to tax (if allowed by law). Do not provide for `orders.createtestorder`.',
    }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The title of the promotion.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The scope of the promotion. Only `product` is supported for `orders.createtestorder`. Acceptable values are: - "`product`" - "`shipping`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderPromotion')

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
          'The phone number of the carrier fulfilling the delivery. The phone number is formatted as the international notation in ITU-T Recommendation E.123 (for example, "+41 44 668 1800").',
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
          'The carrier handling the shipment. For supported carriers, Google includes the carrier name and tracking URL in emails to customers. For select supported carriers, Google also automatically updates the shipment status based on the provided shipment ID. *Note:* You can also use unsupported carriers, but emails to customers won\'t include the carrier name or tracking URL, and there will be no automatic order status updates. Supported carriers for "US" are: - "`ups`" (United Parcel Service) *automatic status updates* - "`usps`" (United States Postal Service) *automatic status updates* - "`fedex`" (FedEx) *automatic status updates * - "`dhl`" (DHL eCommerce) *automatic status updates* (US only) - "`ontrac`" (OnTrac) *automatic status updates * - "`dhl express`" (DHL Express) - "`deliv`" (Deliv) - "`dynamex`" (TForce) - "`lasership`" (LaserShip) - "`mpx`" (Military Parcel Xpress) - "`uds`" (United Delivery Service) - "`efw`" (Estes Forwarding Worldwide) - "`jd logistics`" (JD Logistics) - "`yunexpress`" (YunExpress) - "`china post`" (China Post) - "`china ems`" (China Post Express Mail Service) - "`singapore post`" (Singapore Post) - "`pos malaysia`" (Pos Malaysia) - "`postnl`" (PostNL) - "`ptt`" (PTT Turkish Post) - "`eub`" (ePacket) - "`chukou1`" (Chukou1 Logistics) - "`bestex`" (Best Express) - "`canada post`" (Canada Post) - "`purolator`" (Purolator) - "`canpar`" (Canpar) - "`india post`" (India Post) - "`blue dart`" (Blue Dart) - "`delhivery`" (Delhivery) - "`dtdc`" (DTDC) - "`tpc india`" (TPC India) - "`lso`" (Lone Star Overnight) - "`tww`" (Team Worldwide) - "`deliver-it`" (Deliver-IT) - "`cdl last mile`" (CDL Last Mile) Supported carriers for FR are: - "`la poste`" (La Poste) *automatic status updates * - "`colissimo`" (Colissimo by La Poste) *automatic status updates* - "`ups`" (United Parcel Service) *automatic status updates * - "`chronopost`" (Chronopost by La Poste) - "`gls`" (General Logistics Systems France) - "`dpd`" (DPD Group by GeoPost) - "`bpost`" (Belgian Post Group) - "`colis prive`" (Colis Privé) - "`boxtal`" (Boxtal) - "`geodis`" (GEODIS) - "`tnt`" (TNT) - "`db schenker`" (DB Schenker) - "`aramex`" (Aramex) ',
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
    shipmentGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The shipment group ID of the shipment. This is set in shiplineitems request.',
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
    annotations: z
      .array(OrderOrderAnnotationSchema)
      .exactOptional()
      .openapi({ description: 'List of key-value pairs that are attached to a given order.' }),
    billingAddress: OrderAddressSchema.exactOptional().openapi({
      description: 'The billing address.',
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
    netPriceAmount: PriceSchema.exactOptional().openapi({
      description:
        'The net amount for the order (price part). For example, if an order was originally for $100 and a refund was issued for $20, the net amount will be $80.',
    }),
    netTaxAmount: PriceSchema.exactOptional().openapi({
      description:
        'The net amount for the order (tax part). Note that in certain cases due to taxable base adjustment `netTaxAmount` might not match to a sum of tax field across all lineItems and refunds.',
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
      .array(OrderPromotionSchema)
      .exactOptional()
      .openapi({
        description:
          'Promotions associated with the order. To determine which promotions apply to which products, check the `Promotions[].appliedItems[].lineItemId` field against the `LineItems[].id` field for each promotion. If a promotion is applied to more than 1 offerId, divide the discount value by the number of affected offers to determine how much discount to apply to each offerId. Examples: 1. To calculate price paid by the customer for a single line item including the discount: For each promotion, subtract the `LineItems[].adjustments[].priceAdjustment.value` amount from the `LineItems[].Price.value`. 2. To calculate price paid by the customer for a single line item including the discount in case of multiple quantity: For each promotion, divide the `LineItems[].adjustments[].priceAdjustment.value` by the quantity of products then subtract the resulting value from the `LineItems[].Product.Price.value` for each quantity item. Only 1 promotion can be applied to an offerId in a given order. To refund an item which had a promotion applied to it, make sure to refund the amount after first subtracting the promotion discount from the item price. More details about the program are here.',
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
    productAmount: ProductAmountSchema.exactOptional().openapi({
      description: 'Total amount for the items.',
    }),
    transactionDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The date of the transaction, in ISO 8601 format.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderReportTransaction')

const OrderTrackingSignalLineItemDetailsSchema = z
  .object({
    brand: z.string().exactOptional().openapi({ description: 'Brand of the product.' }),
    gtin: z.string().exactOptional().openapi({ description: 'The Global Trade Item Number.' }),
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The ID for this line item.' }),
    mpn: z.string().exactOptional().openapi({ description: 'The manufacturer part number.' }),
    productDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Plain text description of this product (deprecated: Please use product_title instead).',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The Content API REST ID of the product, in the form channel:contentLanguage:targetCountry:offerId.',
      }),
    productTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Plain text title of this product.' }),
    quantity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The quantity of the line item in the order.' }),
    sku: z
      .string()
      .exactOptional()
      .openapi({ description: 'Merchant SKU for this item (deprecated).' }),
    upc: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Universal product code for this item (deprecated: Please use GTIN instead).',
      }),
  })
  .openapi({ description: 'The line items of the order.', required: [] })
  .openapi('OrderTrackingSignalLineItemDetails')

const OrderTrackingSignalShipmentLineItemMappingSchema = z
  .object({
    lineItemId: z.string().exactOptional().openapi({ description: 'Required. The line item ID.' }),
    quantity: z
      .string()
      .exactOptional()
      .openapi({ description: 'The line item quantity in the shipment.' }),
    shipmentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response.',
      }),
  })
  .openapi({
    description:
      'Represents how many items are in the shipment for the given shipment_id and line_item_id.',
    required: [],
  })
  .openapi('OrderTrackingSignalShipmentLineItemMapping')

const OrderTrackingSignalShippingInfoSchema = z
  .object({
    actualDeliveryTime: DateTimeSchema.exactOptional().openapi({
      description:
        'The time when the shipment was actually delivered. Include the year and timezone string, if available. This field is required, if one of the following fields is absent: tracking_id or carrier_name.',
    }),
    carrierName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the shipping carrier for the delivery. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time.',
      }),
    carrierServiceName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The service type for fulfillment, e.g., GROUND, FIRST_CLASS, etc.',
      }),
    earliestDeliveryPromiseTime: DateTimeSchema.exactOptional().openapi({
      description:
        'The earliest delivery promised time. Include the year and timezone string, if available. This field is required, if one of the following fields is absent: tracking_id or carrier_name.',
    }),
    latestDeliveryPromiseTime: DateTimeSchema.exactOptional().openapi({
      description:
        'The latest delivery promised time. Include the year and timezone string, if available. This field is required, if one of the following fields is absent: tracking_id or carrier_name.',
    }),
    originPostalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The origin postal code, as a continuous string without spaces or dashes, e.g. "95016". This field will be anonymized in returned OrderTrackingSignal creation response.',
      }),
    originRegionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping origin.',
      }),
    shipmentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The shipment ID. This field will be hashed in returned OrderTrackingSignal creation response.',
      }),
    shippedTime: DateTimeSchema.exactOptional().openapi({
      description:
        'The time when the shipment was shipped. Include the year and timezone string, if available.',
    }),
    shippingStatus: z
      .enum(['SHIPPING_STATE_UNSPECIFIED', 'SHIPPED', 'DELIVERED'])
      .exactOptional()
      .openapi({ description: 'The status of the shipment.' }),
    trackingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tracking ID of the shipment. This field is required if one of the following fields is absent: earliest_delivery_promise_time, latest_delivery_promise_time, and actual_delivery_time.',
      }),
  })
  .openapi({ description: 'The shipping information for the order.', required: [] })
  .openapi('OrderTrackingSignalShippingInfo')

const OrderTrackingSignalSchema = z
  .object({
    customerShippingFee: PriceAmountSchema.exactOptional().openapi({
      description:
        'The shipping fee of the order; this value should be set to zero in the case of free shipping.',
    }),
    deliveryPostalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The delivery postal code, as a continuous string without spaces or dashes, e.g. "95016". This field will be anonymized in returned OrderTrackingSignal creation response.',
      }),
    deliveryRegionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The [CLDR territory code] (http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) for the shipping destination.',
      }),
    lineItems: z
      .array(OrderTrackingSignalLineItemDetailsSchema)
      .exactOptional()
      .openapi({ description: 'Information about line items in the order.' }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The Google merchant ID of this order tracking signal. This value is optional. If left unset, the caller's merchant ID is used. You must request access in order to provide data on behalf of another merchant. For more information, see [Submitting Order Tracking Signals](/shopping-content/guides/order-tracking-signals).",
      }),
    orderCreatedTime: DateTimeSchema.exactOptional().openapi({
      description:
        'Required. The time when the order was created on the merchant side. Include the year and timezone string, if available.',
    }),
    orderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The ID of the order on the merchant side. This field will be hashed in returned OrderTrackingSignal creation response.',
      }),
    orderTrackingSignalId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The ID that uniquely identifies this order tracking signal.',
        readOnly: true,
      }),
    shipmentLineItemMapping: z
      .array(OrderTrackingSignalShipmentLineItemMappingSchema)
      .exactOptional()
      .openapi({ description: 'The mapping of the line items to the shipment information.' }),
    shippingInfo: z
      .array(OrderTrackingSignalShippingInfoSchema)
      .exactOptional()
      .openapi({ description: 'The shipping information for the order.' }),
  })
  .openapi({
    description: 'Represents a merchant trade from which signals are extracted, e.g. shipping.',
    required: [],
  })
  .openapi('OrderTrackingSignal')

const UnitInvoiceAdditionalChargeSchema = z
  .object({
    additionalChargeAmount: AmountSchema.exactOptional().openapi({
      description:
        '[required] Amount of the additional charge per unit. *Note:* Invoicing works on a per unit bases. The `additionalChargeAmount` is the amount charged per unit, and will be multiplied by the number of entries in `shipmentUnitID`.',
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
      .openapi({ description: 'Additional charges for a unit, for example, shipping costs.' }),
    unitPrice: PriceSchema.exactOptional().openapi({
      description:
        '[required] Pre-tax or post-tax price of one unit depending on the locality of the order. *Note:* Invoicing works on a per unit basis. The `unitPrice` is the price of a single unit, and will be multiplied by the number of entries in `shipmentUnitId`.',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#orderinvoicesCreateChargeInvoiceResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#orderinvoicesCreateRefundInvoiceResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#orderreportsListDisbursementsResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#orderreportsListTransactionsResponse`".',
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

const OrderreturnsAcknowledgeRequestSchema = z
  .object({
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[required] The ID of the operation, unique across all operations for a given order return.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderreturnsAcknowledgeRequest')

const OrderreturnsAcknowledgeResponseSchema = z
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#orderreturnsAcknowledgeResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderreturnsAcknowledgeResponse')

const OrderreturnsLineItemSchema = z
  .object({
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the line item. This value is assigned by Google when an order is created. Either lineItemId or productId is required.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to cancel. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
    quantity: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The quantity of this line item.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderreturnsLineItem')

const OrderreturnsCreateOrderReturnRequestSchema = z
  .object({
    lineItems: z
      .array(OrderreturnsLineItemSchema)
      .exactOptional()
      .openapi({ description: 'The list of line items to return.' }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the operation. Unique across all operations for a given order.',
      }),
    orderId: z.string().exactOptional().openapi({ description: 'The ID of the order.' }),
    returnMethodType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The way of the package being returned.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderreturnsCreateOrderReturnRequest')

const OrderreturnsCreateOrderReturnResponseSchema = z
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#orderreturnsCreateOrderReturnResponse`".',
      }),
    orderReturn: MerchantOrderReturnSchema.exactOptional().openapi({
      description: 'Created order return.',
    }),
  })
  .openapi({ required: [] })
  .openapi('OrderreturnsCreateOrderReturnResponse')

const OrderreturnsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#orderreturnsListResponse`".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token for the retrieval of the next page of returns.' }),
    resources: z.array(MerchantOrderReturnSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrderreturnsListResponse')

const OrderreturnsPartialRefundSchema = z
  .object({
    priceAmount: PriceSchema.exactOptional().openapi({
      description:
        'The pre-tax or post-tax amount to be refunded, depending on the location of the order.',
    }),
    taxAmount: PriceSchema.exactOptional().openapi({
      description:
        'Tax amount to be refunded. Note: This has different meaning depending on the location of the order.',
    }),
  })
  .openapi({ required: [] })
  .openapi('OrderreturnsPartialRefund')

const OrderreturnsRefundOperationSchema = z
  .object({
    fullRefund: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If true, the item will be fully refunded. Allowed only when payment_type is FOP. Merchant can choose this refund option to indicate the full remaining amount of corresponding object to be refunded to the customer through FOP.',
      }),
    partialRefund: OrderreturnsPartialRefundSchema.exactOptional().openapi({
      description:
        'If this is set, the item will be partially refunded. Merchant can choose this refund option to specify the customized amount that to be refunded to the customer.',
    }),
    paymentType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The payment way of issuing refund. Default value is ORIGINAL_FOP if not set.',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
    returnRefundReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Code of the refund reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderreturnsRefundOperation')

const OrderreturnsRejectOperationSchema = z
  .object({
    reason: z.string().exactOptional().openapi({ description: 'The reason for the return.' }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderreturnsRejectOperation')

const OrderreturnsReturnItemSchema = z
  .object({
    refund: OrderreturnsRefundOperationSchema.exactOptional().openapi({
      description: 'Refunds the item.',
    }),
    reject: OrderreturnsRejectOperationSchema.exactOptional().openapi({
      description: 'Rejects the item.',
    }),
    returnItemId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unit level ID for the return item. Different units of the same product will have different IDs.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderreturnsReturnItem')

const OrderreturnsProcessRequestSchema = z
  .object({
    fullChargeReturnShippingCost: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Option to charge the customer return shipping cost.' }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '[required] The ID of the operation, unique across all operations for a given order return.',
      }),
    refundShippingFee: OrderreturnsRefundOperationSchema.exactOptional().openapi({
      description: 'Refunds for original shipping fee.',
    }),
    returnItems: z
      .array(OrderreturnsReturnItemSchema)
      .exactOptional()
      .openapi({ description: 'The list of items to return.' }),
  })
  .openapi({ required: [] })
  .openapi('OrderreturnsProcessRequest')

const OrderreturnsProcessResponseSchema = z
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#orderreturnsProcessResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrderreturnsProcessResponse')

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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersAcknowledgeResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersAdvanceTestOrderResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersAdvanceTestOrderResponse')

const OrdersCancelLineItemRequestSchema = z
  .object({
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
          'The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`failedToCaptureFunds`" ',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersCancelLineItemResponse`".',
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
          'The reason for the cancellation. Acceptable values are: - "`customerInitiatedCancel`" - "`invalidCoupon`" - "`malformedShippingAddress`" - "`noInventory`" - "`other`" - "`priceError`" - "`shippingPriceError`" - "`taxError`" - "`undeliverableShippingAddress`" - "`unsupportedPoBoxAddress`" - "`failedToCaptureFunds`" ',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersCancelResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersCancelTestOrderByCustomerResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCancelTestOrderByCustomerResponse')

const TestOrderAddressSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'CLDR country code (for example, "US").' }),
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
          'City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs).',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal Code or ZIP (for example, "94043").' }),
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
      .openapi({
        description: 'Street-level part of the address. Use `\\n` to add a second line.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TestOrderAddress')

const TestOrderDeliveryDetailsSchema = z
  .object({
    address: TestOrderAddressSchema.exactOptional().openapi({
      description: 'The delivery address',
    }),
    isScheduledDelivery: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the order is scheduled delivery order.' }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The phone number of the person receiving the delivery.' }),
  })
  .openapi({ required: [] })
  .openapi('TestOrderDeliveryDetails')

const TestOrderLineItemProductSchema = z
  .object({
    brand: z.string().exactOptional().openapi({ description: 'Required. Brand of the item.' }),
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
        description: 'Required. The CLDR territory code of the target country of the product.',
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
  })
  .openapi({ required: [] })
  .openapi('TestOrderLineItem')

const TestOrderPickupDetailsPickupPersonSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Full name of the pickup person.' }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The phone number of the person picking up the items.' }),
  })
  .openapi({ required: [] })
  .openapi('TestOrderPickupDetailsPickupPerson')

const TestOrderPickupDetailsSchema = z
  .object({
    locationCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Code of the location defined by provider or merchant.' }),
    pickupLocationAddress: TestOrderAddressSchema.exactOptional().openapi({
      description: 'Required. Pickup location address.',
    }),
    pickupLocationType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pickup location type. Acceptable values are: - "`locker`" - "`store`" - "`curbside`" ',
      }),
    pickupPersons: z
      .array(TestOrderPickupDetailsPickupPersonSchema)
      .exactOptional()
      .openapi({ description: 'Required. all pickup persons set by users.' }),
  })
  .openapi({ required: [] })
  .openapi('TestOrderPickupDetails')

const TestOrderSchema = z
  .object({
    deliveryDetails: TestOrderDeliveryDetailsSchema.exactOptional().openapi({
      description: 'Overrides the predefined delivery details if provided.',
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
    pickupDetails: TestOrderPickupDetailsSchema.exactOptional().openapi({
      description: 'Overrides the predefined pickup details if provided.',
    }),
    predefinedBillingAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The billing address. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" ',
      }),
    predefinedDeliveryAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Identifier of one of the predefined delivery addresses for the delivery. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" ',
      }),
    predefinedEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Email address of the customer. Acceptable values are: - "`pog.dwight.schrute@gmail.com`" - "`pog.jim.halpert@gmail.com`" - "`penpog.pam.beesly@gmail.comding`" ',
      }),
    predefinedPickupDetails: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier of one of the predefined pickup details. Required for orders containing line items with shipping type `pickup`. Acceptable values are: - "`dwight`" - "`jim`" - "`pam`" ',
      }),
    promotions: z
      .array(OrderPromotionSchema)
      .exactOptional()
      .openapi({ description: 'Promotions associated with the order.' }),
    shippingCost: PriceSchema.exactOptional().openapi({
      description:
        'Required. The price of shipping for all items. Shipping tax is automatically calculated for orders where marketplace facilitator tax laws are applicable. Otherwise, tax settings from Merchant Center are applied. Note that shipping is not taxed in certain states.',
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
          'The CLDR territory code of the country of the test order to create. Affects the currency and addresses of orders created through `template_name`, or the addresses of orders created through `test_order`. Acceptable values are: - "`US`" - "`FR`" Defaults to "`US`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersCreateTestOrderResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersCreateTestReturnResponse`".',
      }),
    returnId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the newly created test order return.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCreateTestReturnResponse')

const OrdersCustomBatchRequestEntryRefundItemItemSchema = z
  .object({
    amount: MonetaryAmountSchema.exactOptional().openapi({
      description:
        'The total amount that is refunded. (for example, refunding $5 each for 2 products should be done by setting quantity to 2 and amount to 10$) In case of multiple refunds, this should be the amount you currently want to refund to the customer.',
    }),
    fullRefund: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true, the full item will be refunded. If this is true, amount shouldn't be provided and will be ignored.",
      }),
    lineItemId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the line item. Either lineItemId or productId is required.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product. This is the REST ID used in the products service. Either lineItemId or productId is required.',
      }),
    quantity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of products that are refunded.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequestEntryRefundItemItem')

const OrdersCustomBatchRequestEntryRefundItemShippingSchema = z
  .object({
    amount: PriceSchema.exactOptional().openapi({
      description:
        'The amount that is refunded. If this is not the first refund for the shipment, this should be the newly refunded amount.',
    }),
    fullRefund: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If set to true, all shipping costs for the order will be refunded. If this is true, amount shouldn't be provided and will be ignored. If set to false, submit the amount of the partial shipping refund, excluding the shipping tax. The shipping tax is calculated and handled on Google's side.",
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersCustomBatchRequestEntryRefundItemShipping')

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

const OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetailsSchema = z
  .object({
    carrierPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The phone number of the carrier fulfilling the delivery. The phone number should be formatted as the international notation in',
      }),
    scheduledDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date a shipment is scheduled for delivery, in ISO 8601 format.',
      }),
  })
  .openapi({
    description: 'ScheduledDeliveryDetails used to update the scheduled delivery order.',
    required: [],
  })
  .openapi('OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails')

const OrdersGetByMerchantOrderIdResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersGetByMerchantOrderIdResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersGetTestOrderTemplateResponse`".',
      }),
    template: TestOrderSchema.exactOptional().openapi({
      description: 'The requested test order template.',
    }),
  })
  .openapi({ required: [] })
  .openapi('OrdersGetTestOrderTemplateResponse')

const OrdersInStoreRefundLineItemRequestSchema = z
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
    priceAmount: PriceSchema.exactOptional().openapi({
      description:
        'The amount to be refunded. This may be pre-tax or post-tax depending on the location of the order. Required.',
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
    taxAmount: PriceSchema.exactOptional().openapi({
      description: 'The amount of tax to be refunded. Required.',
    }),
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersInStoreRefundLineItemResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersListResponse`".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token for the retrieval of the next page of orders.' }),
    resources: z.array(OrderSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('OrdersListResponse')

const OrdersRefundItemRequestSchema = z
  .object({
    items: z
      .array(OrdersCustomBatchRequestEntryRefundItemItemSchema)
      .exactOptional()
      .openapi({
        description:
          'The items that are refunded. Either Item or Shipping must be provided in the request.',
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
          'The reason for the refund. Acceptable values are: - "`shippingCostAdjustment`" - "`priceAdjustment`" - "`taxAdjustment`" - "`feeAdjustment`" - "`courtesyAdjustment`" - "`adjustment`" - "`customerCancelled`" - "`noInventory`" - "`productNotAsDescribed`" - "`undeliverableShippingAddress`" - "`wrongProductShipped`" - "`lateShipmentCredit`" - "`deliveredLateByCarrier`" - "`productArrivedDamaged`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
    shipping: OrdersCustomBatchRequestEntryRefundItemShippingSchema.exactOptional().openapi({
      description:
        'The refund on shipping. Optional, but either Item or Shipping must be provided in the request.',
    }),
  })
  .openapi({ required: [] })
  .openapi('OrdersRefundItemRequest')

const OrdersRefundItemResponseSchema = z
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersRefundItemResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersRefundItemResponse')

const OrdersRefundOrderRequestSchema = z
  .object({
    amount: MonetaryAmountSchema.exactOptional().openapi({
      description:
        'The amount that is refunded. If this is not the first refund for the order, this should be the newly refunded amount.',
    }),
    fullRefund: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "If true, the full order will be refunded, including shipping. If this is true, amount shouldn't be provided and will be ignored.",
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
          'The reason for the refund. Acceptable values are: - "`courtesyAdjustment`" - "`other`" ',
      }),
    reasonText: z
      .string()
      .exactOptional()
      .openapi({ description: 'The explanation of the reason.' }),
  })
  .openapi({ required: [] })
  .openapi('OrdersRefundOrderRequest')

const OrdersRefundOrderResponseSchema = z
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersRefundOrderResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersRefundOrderResponse')

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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersRejectReturnLineItemResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersRejectReturnLineItemResponse')

const OrdersReturnRefundLineItemRequestSchema = z
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
    priceAmount: PriceSchema.exactOptional().openapi({
      description:
        'The amount to be refunded. This may be pre-tax or post-tax depending on the location of the order. If omitted, refundless return is assumed.',
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
    taxAmount: PriceSchema.exactOptional().openapi({
      description:
        'The amount of tax to be refunded. Optional, but if filled, then priceAmount must be set. Calculated automatically if not provided.',
    }),
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersReturnRefundLineItemResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersSetLineItemMetadataResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersSetLineItemMetadataResponse')

const OrdersShipLineItemsRequestSchema = z
  .object({
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
    shipmentInfos: z
      .array(OrdersCustomBatchRequestEntryShipLineItemsShipmentInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Shipment information. This field is repeated because a single line item can be shipped in several packages (and have several tracking IDs).',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersShipLineItemsResponse`".',
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
          "Updated delivery by date, in ISO 8601 format. If not specified only ship by date is updated. Provided date should be within 1 year timeframe and can't be a date in the past.",
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
          "Updated ship by date, in ISO 8601 format. If not specified only deliver by date is updated. Provided date should be within 1 year timeframe and can't be a date in the past.",
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersUpdateLineItemShippingDetailsResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersUpdateMerchantOrderIdResponse`".',
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
    lastPickupDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date after which the pickup will expire, in ISO 8601 format. Required only when order is buy-online-pickup-in-store(BOPIS) and `status` is `ready for pickup`.',
      }),
    operationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the operation. Unique across all operations for a given order.',
      }),
    readyPickupDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the shipment has been ready for pickup, in ISO 8601 format. Optional and can be provided only if `status` is `ready for pickup`.',
      }),
    scheduledDeliveryDetails:
      OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetailsSchema.exactOptional().openapi(
        { description: 'Delivery details of the shipment if scheduling is needed.' },
      ),
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
    undeliveredDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the shipment has been undeliverable, in ISO 8601 format. Optional and can be provided only if `status` is `undeliverable`.',
      }),
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#ordersUpdateShipmentResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('OrdersUpdateShipmentResponse')

const PauseBuyOnGoogleProgramRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for the PauseProgram method.' })
  .openapi('PauseBuyOnGoogleProgramRequest')

const PickupServicesPickupServiceSchema = z
  .object({
    carrierName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the carrier (for example, `"UPS"`). Always present.' }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The CLDR country code of the carrier (for example, "US"). Always present.',
      }),
    serviceName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the pickup service (for example, `"Access point"`). Always present.',
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
          "Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile.",
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
          "Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile.",
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#posCustomBatchResponse`".',
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
          "Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile.",
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#posInventoryResponse`".',
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
          "Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile.",
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#posListResponse`".',
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
          "Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile.",
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#posSaleResponse`".',
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
          "Required. The identifier of the merchant's store. Either a `storeCode` inserted through the API or the code of the store in a Business Profile.",
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

const PriceCompetitivenessSchema = z
  .object({
    benchmarkPriceCurrencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The price benchmark currency (ISO 4217 code).' }),
    benchmarkPriceMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The latest available price benchmark in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) for the product's catalog in the benchmark country.",
      }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The country of the price benchmark (ISO 3166 code).' }),
  })
  .openapi({
    description:
      'Price competitiveness fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceCompetitivenessProductView`. https://support.google.com/merchants/answer/9626903',
    required: [],
  })
  .openapi('PriceCompetitiveness')

const PriceInsightsSchema = z
  .object({
    predictedClicksChangeFraction: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The predicted change in clicks as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in clicks.',
      }),
    predictedConversionsChangeFraction: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The predicted change in conversions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in conversions).',
      }),
    predictedGrossProfitChangeFraction: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The predicted change in gross profit as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in gross profit.',
      }),
    predictedImpressionsChangeFraction: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The predicted change in impressions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in impressions.',
      }),
    predictedMonthlyGrossProfitChangeCurrencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The predicted monthly gross profit change currency (ISO 4217 code).',
      }),
    predictedMonthlyGrossProfitChangeMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The predicted change in gross profit in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) after introducing the suggested price for a month compared to current active price.',
      }),
    suggestedPriceCurrencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The suggested price currency (ISO 4217 code).' }),
    suggestedPriceMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The latest suggested price in micros (1 millionth of a standard unit, 1 USD = 1000000 micros) for the product.',
      }),
  })
  .openapi({
    description:
      'Price insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`. https://support.google.com/merchants/answer/11916926',
    required: [],
  })
  .openapi('PriceInsights')

const ProductProductDetailSchema = z
  .object({
    attributeName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the product detail.' }),
    attributeValue: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the product detail.' }),
    sectionName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The section header used to group a set of product details.' }),
  })
  .openapi({ required: [] })
  .openapi('ProductProductDetail')

const ProductDimensionSchema = z
  .object({
    unit: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The length units. Acceptable values are: - "`in`" - "`cm`" ',
      }),
    value: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Required. The length value represented as a number. The value can have a maximum precision of four decimal places.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProductDimension')

const ProductWeightSchema = z
  .object({
    unit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The weight unit. Acceptable values are: - "`g`" - "`kg`" - "`oz`" - "`lb`" ',
      }),
    value: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Required. The weight represented as a number. The weight can have a maximum precision of four decimal places.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProductWeight')

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
          'The numeric ID of a location that the shipping rate applies to as defined in the Google Ads API.',
      }),
    maxHandlingTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Maximum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it's received if it happens before the cut-off time. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds.",
      }),
    maxTransitTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Maximum transit time (inclusive) between when the order has shipped and when it's delivered in business days. 0 means that the order is delivered on the same day as it ships. Both maxHandlingTime and maxTransitTime are required if providing shipping speeds.",
      }),
    minHandlingTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Minimum handling time (inclusive) between when the order is received and shipped in business days. 0 means that the order is shipped on the same day as it's received if it happens before the cut-off time. minHandlingTime can only be present together with maxHandlingTime; but it's not required if maxHandlingTime is present.",
      }),
    minTransitTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Minimum transit time (inclusive) between when the order has shipped and when it's delivered in business days. 0 means that the order is delivered on the same day as it ships. minTransitTime can only be present together with maxTransitTime; but it's not required if maxTransitTime is present.",
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

const ProductSubscriptionCostSchema = z
  .object({
    amount: PriceSchema.exactOptional().openapi({
      description: 'The amount the buyer has to pay per subscription period.',
    }),
    period: z.string().exactOptional().openapi({ description: 'The type of subscription period.' }),
    periodLength: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of subscription periods the buyer has to pay.' }),
  })
  .openapi({ required: [] })
  .openapi('ProductSubscriptionCost')

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
          'The numeric ID of a location that the tax rate applies to as defined in the Google Ads API.',
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
    additionalSizeType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional cut of the item. Used together with size_type to represent combined size types for apparel items.',
      }),
    adsGrouping: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise.',
      }),
    adsLabels: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Similar to ads_grouping, but only works on CPC.' }),
    adsRedirect: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Allows advertisers to override the item URL when the product is shown within the context of Product Ads.',
      }),
    adult: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should be set to true if the item is targeted towards adults.' }),
    ageGroup: z.string().exactOptional().openapi({ description: 'Target age group of the item.' }),
    availability: z
      .string()
      .exactOptional()
      .openapi({ description: 'Availability status of the item.' }),
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
      .openapi({ description: 'Condition or state of the item.' }),
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
          'A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (for example, `{ "name": "size type", "value": "regular" }`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google (formerly known as Shopping Actions).',
      }),
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
        description: 'The energy efficiency class as defined in EU directive 2010/30/EU.',
      }),
    excludedDestinations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of destinations to exclude for this target (corresponds to cleared check boxes in Merchant Center). Products that are excluded from all destinations for more than 7 days are automatically deleted.',
      }),
    expirationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in `productstatuses` as `googleExpirationDate` and might be earlier if `expirationDate` is too far in the future.',
      }),
    externalSellerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required for multi-seller accounts. Use this attribute if you're a marketplace uploading products for various sellers to your multi-seller account.",
      }),
    feedLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Feed label for the item. Either `targetCountry` or `feedLabel` is required. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-).',
      }),
    gender: z.string().exactOptional().openapi({ description: 'Target gender of the item.' }),
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
          'The REST ID of the product. Content API methods that operate on products take this as their `productId` parameter. The REST ID for a product has one of the 2 forms channel:contentLanguage: targetCountry: offerId or channel:contentLanguage:feedLabel: offerId.',
      }),
    identifierExists: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada.',
      }),
    imageLink: z.string().exactOptional().openapi({ description: 'URL of an image of the item.' }),
    includedDestinations: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`.',
      }),
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
    lifestyleImageLinks: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Additional URLs of lifestyle images of the item. Used to explicitly identify images that showcase your item in a real-world context. See the Help Center article for more information.',
      }),
    link: z
      .string()
      .exactOptional()
      .openapi({ description: "URL directly linking to your item's page on your website." }),
    linkTemplate: z
      .string()
      .exactOptional()
      .openapi({ description: 'URL template for merchant hosted local storefront.' }),
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
        description: 'The energy efficiency class as defined in EU directive 2010/30/EU.',
      }),
    maxHandlingTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Maximal product handling time (in business days).' }),
    minEnergyEfficiencyClass: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The energy efficiency class as defined in EU directive 2010/30/EU.',
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
    mobileLinkTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL template for merchant hosted local storefront optimized for mobile devices.',
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
    pattern: z
      .string()
      .exactOptional()
      .openapi({ description: "The item's pattern (for example, polka dots)." }),
    pause: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Publication of this item should be temporarily paused. Acceptable values are: - "`ads`" ',
      }),
    pickupMethod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The pick up option for the item. Acceptable values are: - "`buy`" - "`reserve`" - "`ship to store`" - "`not supported`" ',
      }),
    pickupSla: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Item store pickup timeline. Acceptable values are: - "`same day`" - "`next day`" - "`2-day`" - "`3-day`" - "`4-day`" - "`5-day`" - "`6-day`" - "`7-day`" - "`multi-week`" ',
      }),
    price: PriceSchema.exactOptional().openapi({ description: 'Price of the item.' }),
    productDetails: z
      .array(ProductProductDetailSchema)
      .exactOptional()
      .openapi({ description: 'Technical specification or additional product details.' }),
    productHeight: ProductDimensionSchema.exactOptional().openapi({
      description:
        'The height of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive).',
    }),
    productHighlights: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Bullet points describing the most relevant highlights of a product.',
      }),
    productLength: ProductDimensionSchema.exactOptional().openapi({
      description:
        'The length of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive).',
    }),
    productTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Categories of the item (formatted as in product data specification).',
      }),
    productWeight: ProductWeightSchema.exactOptional().openapi({
      description:
        'The weight of the product in the units provided. The value must be between 0 (exclusive) and 2000 (inclusive).',
    }),
    productWidth: ProductDimensionSchema.exactOptional().openapi({
      description:
        'The width of the product in the units provided. The value must be between 0 (exclusive) and 3000 (inclusive).',
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
          'Date range during which the item is on sale (see product data specification ).',
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
    shoppingAdsExcludedCountries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of country codes (ISO 3166-1 alpha-2) to exclude the offer from Shopping Ads destination. Countries from this list are removed from countries configured in MC feed settings.',
      }),
    sizeSystem: z
      .string()
      .exactOptional()
      .openapi({
        description: 'System in which the size is specified. Recommended for apparel items.',
      }),
    sizeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The cut of the item. Recommended for apparel items.' }),
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
          'The source of the offer, that is, how the offer was created. Acceptable values are: - "`api`" - "`crawl`" - "`feed`" ',
      }),
    subscriptionCost: ProductSubscriptionCostSchema.exactOptional().openapi({
      description:
        'Number of periods (months or years) and amount of payment per period for an item with an associated subscription contract.',
    }),
    targetCountry: z
      .string()
      .exactOptional()
      .openapi({
        description: "Required. The CLDR territory code for the item's country of sale.",
      }),
    taxCategory: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tax category of the product, used to configure detailed tax nexus in account-level tax settings.',
      }),
    taxes: z.array(ProductTaxSchema).exactOptional().openapi({ description: 'Tax information.' }),
    title: z.string().exactOptional().openapi({ description: 'Title of the item.' }),
    transitTimeLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The transit time label of the product, used to group product in account-level transit time tables.',
      }),
    unitPricingBaseMeasure: ProductUnitPricingBaseMeasureSchema.exactOptional().openapi({
      description: 'The preference of the denominator of the unit price.',
    }),
    unitPricingMeasure: ProductUnitPricingMeasureSchema.exactOptional().openapi({
      description: 'The measure and dimension of an item.',
    }),
  })
  .openapi({
    description:
      ' Required product attributes are primarily defined by the product data specification. See the Product Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.',
    required: [],
  })
  .openapi('Product')

const ProductClusterSchema = z
  .object({
    brand: z.string().exactOptional().openapi({ description: 'Brand of the product cluster.' }),
    brandInventoryStatus: z
      .enum(['INVENTORY_STATUS_UNSPECIFIED', 'IN_STOCK', 'OUT_OF_STOCK', 'NOT_IN_INVENTORY'])
      .exactOptional()
      .openapi({
        description:
          "Tells if there is at least one product of the brand currently `IN_STOCK` in your product feed across multiple countries, all products are `OUT_OF_STOCK` in your product feed, or `NOT_IN_INVENTORY`. The field doesn't take the Best Sellers report country filter into account.",
      }),
    categoryL1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Product category (1st level) of the product cluster, represented in Google's product taxonomy.",
      }),
    categoryL2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Product category (2nd level) of the product cluster, represented in Google's product taxonomy.",
      }),
    categoryL3: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Product category (3rd level) of the product cluster, represented in Google's product taxonomy.",
      }),
    categoryL4: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Product category (4th level) of the product cluster, represented in Google's product taxonomy.",
      }),
    categoryL5: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Product category (5th level) of the product cluster, represented in Google's product taxonomy.",
      }),
    inventoryStatus: z
      .enum(['INVENTORY_STATUS_UNSPECIFIED', 'IN_STOCK', 'OUT_OF_STOCK', 'NOT_IN_INVENTORY'])
      .exactOptional()
      .openapi({
        description:
          "Tells whether the product cluster is `IN_STOCK` in your product feed across multiple countries, `OUT_OF_STOCK` in your product feed, or `NOT_IN_INVENTORY` at all. The field doesn't take the Best Sellers report country filter into account.",
      }),
    title: z.string().exactOptional().openapi({ description: 'Title of the product cluster.' }),
    variantGtins: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'GTINs of example variants of the product cluster.' }),
  })
  .openapi({
    description:
      "Product cluster fields. A product cluster is a grouping for different offers that represent the same product. Values are only set for fields requested explicitly in the request's search query.",
    required: [],
  })
  .openapi('ProductCluster')

const ProductDeliveryTimeAreaDeliveryTimeDeliveryTimeSchema = z
  .object({
    maxHandlingTimeDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The maximum number of business days (inclusive) between when an order is placed and when the product ships. If a product ships in the same day, set this value to 0.',
      }),
    maxTransitTimeDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The maximum number of business days (inclusive) between when the product ships and when the product is delivered.',
      }),
    minHandlingTimeDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The minimum number of business days (inclusive) between when an order is placed and when the product ships. If a product ships in the same day, set this value to 0.',
      }),
    minTransitTimeDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The minimum number of business days (inclusive) between when the product ships and when the product is delivered.',
      }),
  })
  .openapi({ description: 'A delivery time for this product.', required: [] })
  .openapi('ProductDeliveryTimeAreaDeliveryTimeDeliveryTime')

const ProductDeliveryTimeAreaDeliveryTimeSchema = z
  .object({
    deliveryArea: DeliveryAreaSchema.exactOptional().openapi({
      description: 'Required. The delivery area associated with `deliveryTime` for this product.',
    }),
    deliveryTime: ProductDeliveryTimeAreaDeliveryTimeDeliveryTimeSchema.exactOptional().openapi({
      description: 'Required. The delivery time associated with `deliveryArea` for this product.',
    }),
  })
  .openapi({
    description: 'A pairing of `DeliveryArea` associated with a `DeliveryTime` for this product.',
    required: [],
  })
  .openapi('ProductDeliveryTimeAreaDeliveryTime')

const ProductIdSchema = z
  .object({
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`.',
      }),
  })
  .openapi({ description: 'The Content API ID of the product.', required: [] })
  .openapi('ProductId')

const ProductDeliveryTimeSchema = z
  .object({
    areaDeliveryTimes: z
      .array(ProductDeliveryTimeAreaDeliveryTimeSchema)
      .exactOptional()
      .openapi({
        description:
          'Required. A set of associations between `DeliveryArea` and `DeliveryTime` entries. The total number of `areaDeliveryTimes` can be at most 100.',
      }),
    productId: ProductIdSchema.exactOptional().openapi({
      description: 'Required. The `id` of the product.',
    }),
  })
  .openapi({
    description:
      'The estimated days to deliver a product after an order is placed. Only authorized shipping signals partners working with a merchant can use this resource. Merchants should use the [`products`](https://developers.google.com/shopping-content/reference/rest/v2.1/products#productshipping) resource instead.',
    required: [],
  })
  .openapi('ProductDeliveryTime')

const ProductStatusDestinationStatusSchema = z
  .object({
    approvedCountries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of country codes (ISO 3166-1 alpha-2) where the offer is approved.',
      }),
    destination: z.string().exactOptional().openapi({ description: 'The name of the destination' }),
    disapprovedCountries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of country codes (ISO 3166-1 alpha-2) where the offer is disapproved.',
      }),
    pendingCountries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of country codes (ISO 3166-1 alpha-2) where the offer is pending approval.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({ description: 'Destination approval status in `targetCountry` of the offer.' }),
  })
  .openapi({ required: [] })
  .openapi('ProductStatusDestinationStatus')

const ProductStatusItemLevelIssueSchema = z
  .object({
    applicableCountries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of country codes (ISO 3166-1 alpha-2) where issue applies to the offer.',
      }),
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
    productId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the product for which status is reported.' }),
    title: z.string().exactOptional().openapi({ description: 'The title of the product.' }),
  })
  .openapi({
    description:
      'The status of a product, that is, information about a product computed asynchronously.',
    required: [],
  })
  .openapi('ProductStatus')

const ProductViewItemIssueItemIssueTypeSchema = z
  .object({
    canonicalAttribute: z
      .string()
      .exactOptional()
      .openapi({ description: 'Canonical attribute name for attribute-specific issues.' }),
  })
  .openapi({ description: 'Type of the item issue.', required: [] })
  .openapi('ProductViewItemIssueItemIssueType')

const ProductViewItemIssueIssueSeverityPerDestinationSchema = z
  .object({
    demotedCountries: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of demoted countries in the destination.' }),
    destination: z.string().exactOptional().openapi({ description: 'Issue destination.' }),
    disapprovedCountries: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of disapproved countries in the destination.' }),
  })
  .openapi({
    description: 'Issue severity for all affected regions in a destination.',
    required: [],
  })
  .openapi('ProductViewItemIssueIssueSeverityPerDestination')

const ProductViewItemIssueItemIssueSeveritySchema = z
  .object({
    aggregatedSeverity: z
      .enum(['AGGREGATED_ISSUE_SEVERITY_UNSPECIFIED', 'DISAPPROVED', 'DEMOTED', 'PENDING'])
      .exactOptional()
      .openapi({ description: 'Severity of an issue aggregated for destination.' }),
    severityPerDestination: z
      .array(ProductViewItemIssueIssueSeverityPerDestinationSchema)
      .exactOptional()
      .openapi({ description: 'Item issue severity for every destination.' }),
  })
  .openapi({
    description: 'Severity of an issue per destination in a region, and aggregated severity.',
    required: [],
  })
  .openapi('ProductViewItemIssueItemIssueSeverity')

const ProductViewItemIssueSchema = z
  .object({
    issueType: ProductViewItemIssueItemIssueTypeSchema.exactOptional().openapi({
      description: 'Item issue type.',
    }),
    resolution: z
      .enum(['UNKNOWN', 'MERCHANT_ACTION', 'PENDING_PROCESSING'])
      .exactOptional()
      .openapi({ description: 'Item issue resolution.' }),
    severity: ProductViewItemIssueItemIssueSeveritySchema.exactOptional().openapi({
      description: 'Item issue severity.',
    }),
  })
  .openapi({ description: 'Item issue associated with the product.', required: [] })
  .openapi('ProductViewItemIssue')

const ProductViewSchema = z
  .object({
    aggregatedDestinationStatus: z
      .enum([
        'AGGREGATED_STATUS_UNSPECIFIED',
        'NOT_ELIGIBLE_OR_DISAPPROVED',
        'PENDING',
        'ELIGIBLE_LIMITED',
        'ELIGIBLE',
      ])
      .exactOptional()
      .openapi({ description: 'Aggregated destination status.' }),
    availability: z
      .string()
      .exactOptional()
      .openapi({ description: 'Availability of the product.' }),
    brand: z.string().exactOptional().openapi({ description: 'Brand of the product.' }),
    categoryL1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "First level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).",
      }),
    categoryL2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Second level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).",
      }),
    categoryL3: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Third level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).",
      }),
    categoryL4: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Fourth level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).",
      }),
    categoryL5: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Fifth level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).",
      }),
    channel: z
      .enum(['CHANNEL_UNSPECIFIED', 'LOCAL', 'ONLINE'])
      .exactOptional()
      .openapi({ description: 'Channel of the product (online versus local).' }),
    condition: z.string().exactOptional().openapi({ description: 'Condition of the product.' }),
    creationTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time the merchant created the product in timestamp seconds.' }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Product price currency code (for example, ISO 4217). Absent if product price is not available.',
      }),
    expirationDate: DateSchema.exactOptional().openapi({
      description: 'Expiration date for the product. Specified on insertion.',
    }),
    gtin: z.array(z.string()).exactOptional().openapi({ description: 'GTIN of the product.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The REST ID of the product, in the form of channel:contentLanguage:targetCountry:offerId. Content API methods that operate on products take this as their productId parameter. Should always be included in the SELECT clause.',
      }),
    itemGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Item group ID provided by the merchant for grouping variants together.',
      }),
    itemIssues: z
      .array(ProductViewItemIssueSchema)
      .exactOptional()
      .openapi({ description: 'List of item issues for the product.' }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Language code of the product in BCP 47 format.' }),
    offerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Merchant-provided id of the product.' }),
    priceMicros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Product price specified as micros (1 millionth of a standard unit, 1 USD = 1000000 micros) in the product currency. Absent in case the information about the price of the product is not available.',
      }),
    productTypeL1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "First level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436).",
      }),
    productTypeL2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Second level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436).",
      }),
    productTypeL3: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Third level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436).",
      }),
    productTypeL4: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Fourth level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436).",
      }),
    productTypeL5: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Fifth level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436).",
      }),
    shippingLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The normalized shipping label specified in the feed' }),
    title: z.string().exactOptional().openapi({ description: 'Title of the product.' }),
  })
  .openapi({
    description:
      "Product fields. Values are only set for fields requested explicitly in the request's search query.",
    required: [],
  })
  .openapi('ProductView')

const ProductsCustomBatchRequestEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'An entry ID, unique within the batch request.' }),
    feedId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Content API Supplemental Feed ID. If present then product insertion or deletion applies to a supplemental feed instead of primary Content API feed.',
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
          'The method of the batch entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" - "`update`" ',
      }),
    product: ProductSchema.exactOptional().openapi({
      description:
        "The product to insert or update. Only required if the method is `insert` or `update`. If the `update` method is used with `updateMask` only to delete a field, then this isn't required. For example, setting `salePrice` on the `updateMask` and not providing a `product` will result in an existing sale price on the product specified by `productId` being deleted.",
    }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the product to get or mutate. Only defined if the method is `get`, `delete`, or `update`.',
      }),
    updateMask: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The comma-separated list of product attributes to be updated. Example: `"title,salePrice"`. Attributes specified in the update mask without a value specified in the body will be deleted from the product. *You must specify the update mask to delete attributes.* Only top-level product attributes can be updated. If not defined, product attributes with set values will be updated and other attributes will stay unchanged. Only defined if the method is `update`.',
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
      description:
        'A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#productsCustomBatchResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#productsListResponse`".',
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
    includeAttributes: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: Setting this field has no effect and attributes are never included.',
      }),
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
      description:
        'A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesCustomBatchResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#productstatusesListResponse`".',
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

const TimePeriodSchema = z
  .object({
    endTime: z.string().exactOptional().openapi({ description: 'The ending timestamp.' }),
    startTime: z.string().exactOptional().openapi({ description: 'The starting timestamp.' }),
  })
  .openapi({ description: 'A message that represents a time period.', required: [] })
  .openapi('TimePeriod')

const PromotionPromotionStatusDestinationStatusSchema = z
  .object({
    destination: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the destination.' }),
    status: z
      .enum(['STATE_UNSPECIFIED', 'IN_REVIEW', 'REJECTED', 'LIVE', 'STOPPED', 'EXPIRED', 'PENDING'])
      .exactOptional()
      .openapi({ description: 'The status for the specified destination.' }),
  })
  .openapi({ description: 'The destination status of the promotion.', required: [] })
  .openapi('PromotionPromotionStatusDestinationStatus')

const PromotionPromotionStatusPromotionIssueSchema = z
  .object({
    code: z.string().exactOptional().openapi({ description: 'Code of the issue.' }),
    detail: z.string().exactOptional().openapi({ description: 'Explanation of the issue.' }),
  })
  .openapi({ description: 'The issue associated with the promotion.', required: [] })
  .openapi('PromotionPromotionStatusPromotionIssue')

const PromotionPromotionStatusSchema = z
  .object({
    creationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the promotion has been created in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z"',
      }),
    destinationStatuses: z
      .array(PromotionPromotionStatusDestinationStatusSchema)
      .exactOptional()
      .openapi({ description: 'The intended destinations for the promotion.' }),
    lastUpdateDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the promotion status has been last updated in [ISO 8601](http://en.wikipedia.org/wiki/ISO_8601) format: Date, time, and offset, for example "2020-01-02T09:00:00+01:00" or "2020-01-02T09:00:00Z"',
      }),
    promotionIssue: z
      .array(PromotionPromotionStatusPromotionIssueSchema)
      .exactOptional()
      .openapi({ description: 'A list of issues associated with the promotion.' }),
  })
  .openapi({ description: 'The status of the promotion.', required: [] })
  .openapi('PromotionPromotionStatus')

const PromotionSchema = z
  .object({
    brand: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Product filter by brand for the promotion.' }),
    brandExclusion: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Product filter by brand exclusion for the promotion.' }),
    contentLanguage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The content language used as part of the unique identifier. `en` content language is available for all target countries. `fr` content language is available for `CA` and `FR` target countries. `de` content language is available for `DE` target country. `nl` content language is available for `NL` target country. `it` content language is available for `IT` target country. `pt` content language is available for `BR` target country. `ja` content language is available for `JP` target country. `ko` content language is available for `KR` target country.',
      }),
    couponValueType: z
      .enum([
        'COUPON_VALUE_TYPE_UNSPECIFIED',
        'MONEY_OFF',
        'PERCENT_OFF',
        'BUY_M_GET_N_MONEY_OFF',
        'BUY_M_GET_N_PERCENT_OFF',
        'BUY_M_GET_MONEY_OFF',
        'BUY_M_GET_PERCENT_OFF',
        'FREE_GIFT',
        'FREE_GIFT_WITH_VALUE',
        'FREE_GIFT_WITH_ITEM_ID',
        'FREE_SHIPPING_STANDARD',
        'FREE_SHIPPING_OVERNIGHT',
        'FREE_SHIPPING_TWO_DAY',
      ])
      .exactOptional()
      .openapi({ description: 'Required. Coupon value type for the promotion.' }),
    freeGiftDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'Free gift description for the promotion.' }),
    freeGiftItemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Free gift item ID for the promotion.' }),
    freeGiftValue: PriceAmountSchema.exactOptional().openapi({
      description: 'Free gift value for the promotion.',
    }),
    genericRedemptionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Generic redemption code for the promotion. To be used with the `offerType` field.',
      }),
    getThisQuantityDiscounted: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of items discounted in the promotion.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Output only. The REST promotion ID to uniquely identify the promotion. Content API methods that operate on promotions take this as their `promotionId` parameter. The REST ID for a promotion is of the form channel:contentLanguage:targetCountry:promotionId The `channel` field has a value of `"online"`, `"in_store"`, or `"online_in_store"`.',
        readOnly: true,
      }),
    itemGroupId: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Product filter by item group ID for the promotion.' }),
    itemGroupIdExclusion: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Product filter by item group ID exclusion for the promotion.' }),
    itemId: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Product filter by item ID for the promotion.' }),
    itemIdExclusion: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Product filter by item ID exclusion for the promotion.' }),
    limitQuantity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum purchase quantity for the promotion.' }),
    limitValue: PriceAmountSchema.exactOptional().openapi({
      description: 'Maximum purchase value for the promotion.',
    }),
    longTitle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. Long title for the promotion.' }),
    minimumPurchaseAmount: PriceAmountSchema.exactOptional().openapi({
      description: 'Minimum purchase amount for the promotion.',
    }),
    minimumPurchaseQuantity: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Minimum purchase quantity for the promotion.' }),
    moneyBudget: PriceAmountSchema.exactOptional().openapi({
      description: 'Cost cap for the promotion.',
    }),
    moneyOffAmount: PriceAmountSchema.exactOptional().openapi({
      description: 'The money off amount offered in the promotion.',
    }),
    offerType: z
      .enum(['OFFER_TYPE_UNSPECIFIED', 'NO_CODE', 'GENERIC_CODE'])
      .exactOptional()
      .openapi({ description: 'Required. Type of the promotion.' }),
    orderLimit: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Order limit for the promotion.' }),
    percentOff: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The percentage discount offered in the promotion.' }),
    productApplicability: z
      .enum(['PRODUCT_APPLICABILITY_UNSPECIFIED', 'ALL_PRODUCTS', 'SPECIFIC_PRODUCTS'])
      .exactOptional()
      .openapi({
        description:
          'Required. Applicability of the promotion to either all products or only specific products.',
      }),
    productType: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Product filter by product type for the promotion.' }),
    productTypeExclusion: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Product filter by product type exclusion for the promotion.' }),
    promotionDestinationIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Destination ID for the promotion.' }),
    promotionDisplayDates: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String representation of the promotion display dates. Deprecated. Use `promotion_display_time_period` instead.',
      }),
    promotionDisplayTimePeriod: TimePeriodSchema.exactOptional().openapi({
      description: "`TimePeriod` representation of the promotion's display dates.",
    }),
    promotionEffectiveDates: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String representation of the promotion effective dates. Deprecated. Use `promotion_effective_time_period` instead.',
      }),
    promotionEffectiveTimePeriod: TimePeriodSchema.exactOptional().openapi({
      description: "Required. `TimePeriod` representation of the promotion's effective dates.",
    }),
    promotionId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The user provided promotion ID to uniquely identify the promotion.',
      }),
    promotionStatus: PromotionPromotionStatusSchema.exactOptional().openapi({
      description: 'Output only. The current status of the promotion.',
      readOnly: true,
    }),
    promotionUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "URL to the page on the merchant's site where the promotion shows. Local Inventory ads promotions throw an error if no promo url is included. URL is used to confirm that the promotion is valid and can be redeemed.",
      }),
    redemptionChannel: z
      .array(z.enum(['REDEMPTION_CHANNEL_UNSPECIFIED', 'IN_STORE', 'ONLINE']))
      .exactOptional()
      .openapi({
        description:
          'Required. Redemption channel for the promotion. At least one channel is required.',
      }),
    shippingServiceNames: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Shipping service names for the promotion.' }),
    storeApplicability: z
      .enum(['STORE_APPLICABILITY_UNSPECIFIED', 'ALL_STORES', 'SPECIFIC_STORES'])
      .exactOptional()
      .openapi({
        description:
          'Whether the promotion applies to all stores, or only specified stores. Local Inventory ads promotions throw an error if no store applicability is included. An INVALID_ARGUMENT error is thrown if store_applicability is set to ALL_STORES and store_code or score_code_exclusion is set to a value.',
      }),
    storeCode: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Store codes to include for the promotion.' }),
    storeCodeExclusion: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Store codes to exclude for the promotion.' }),
    targetCountry: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The target country used as part of the unique identifier. Can be `AU`, `CA`, `DE`, `FR`, `GB`, `IN`, `US`, `BR`, `ES`, `NL`, `JP`, `IT` or `KR`.',
      }),
  })
  .openapi({
    description:
      'Represents a promotion. See the following articles for more details. * [Promotions feed specification](https://support.google.com/merchants/answer/2906014) * [Local promotions feed specification](https://support.google.com/merchants/answer/10146130) * [Promotions on Buy on Google product data specification](https://support.google.com/merchants/answer/9173673)',
    required: [],
  })
  .openapi('Promotion')

const PubsubNotificationSettingsSchema = z
  .object({
    cloudTopicName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Cloud pub/sub topic to which notifications are sent (read-only).' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#pubsubNotificationSettings`"',
      }),
    registeredEvents: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'List of event types. Acceptable values are: - "`orderPendingShipment`" ',
      }),
  })
  .openapi({
    description:
      'Settings for Pub/Sub notifications, all methods require that the caller is a direct user of the merchant center account.',
    required: [],
  })
  .openapi('PubsubNotificationSettings')

const RegionalInventorySchema = z
  .object({
    availability: z
      .string()
      .exactOptional()
      .openapi({ description: 'The availability of the product.' }),
    customAttributes: z
      .array(CustomAttributeSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#regionalInventory`".',
      }),
    price: PriceSchema.exactOptional().openapi({ description: 'The price of the product.' }),
    regionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID uniquely identifying each region.' }),
    salePrice: PriceSchema.exactOptional().openapi({
      description:
        'The sale price of the product. Mandatory if `sale_price_effective_date` is defined.',
    }),
    salePriceEffectiveDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A date range represented by a pair of ISO 8601 dates separated by a space, comma, or slash. Both dates might be specified as 'null' if undecided.",
      }),
  })
  .openapi({
    description:
      'Regional inventory resource. contains the regional name and all attributes which are overridden for the specified region.',
    required: [],
  })
  .openapi('RegionalInventory')

const RegionalinventoryCustomBatchRequestEntrySchema = z
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
        description: 'Method of the batch request entry. Acceptable values are: - "`insert`" ',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The ID of the product for which to update price and availability.',
      }),
    regionalInventory: RegionalInventorySchema.exactOptional().openapi({
      description: 'Price and availability of the product.',
    }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch regional inventory request.',
    required: [],
  })
  .openapi('RegionalinventoryCustomBatchRequestEntry')

const RegionalinventoryCustomBatchRequestSchema = z
  .object({
    entries: z
      .array(RegionalinventoryCustomBatchRequestEntrySchema)
      .exactOptional()
      .openapi({ description: 'The request entries to be processed in the batch.' }),
  })
  .openapi({ required: [] })
  .openapi('RegionalinventoryCustomBatchRequest')

const RegionalinventoryCustomBatchResponseEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'The ID of the request entry this entry responds to.' }),
    errors: ErrorsSchema.exactOptional().openapi({
      description:
        'A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#regionalinventoryCustomBatchResponseEntry`".',
      }),
    regionalInventory: RegionalInventorySchema.exactOptional().openapi({
      description: 'Price and availability of the product.',
    }),
  })
  .openapi({
    description: 'A batch entry encoding a single non-batch regional inventory response.',
    required: [],
  })
  .openapi('RegionalinventoryCustomBatchResponseEntry')

const RegionalinventoryCustomBatchResponseSchema = z
  .object({
    entries: z
      .array(RegionalinventoryCustomBatchResponseEntrySchema)
      .exactOptional()
      .openapi({ description: 'The result of the execution of the batch requests.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#regionalinventoryCustomBatchResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('RegionalinventoryCustomBatchResponse')

const ReportInteractionRequestSchema = z
  .object({
    interactionType: z
      .enum(['INTERACTION_TYPE_UNSPECIFIED', 'INTERACTION_CLICK'])
      .exactOptional()
      .openapi({
        description:
          'Required. Type of the interaction that is reported, for example INTERACTION_CLICK.',
      }),
    responseToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Token of the response when recommendation was returned.',
      }),
    subtype: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Subtype of the recommendations this interaction happened on. This field must be set only to the value that is returned by {@link `RecommendationsService.GenerateRecommendations`} call.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Type of the recommendations on which this interaction happened. This field must be set only to the value that is returned by {@link `GenerateRecommendationsResponse`} call.',
      }),
  })
  .openapi({ description: 'Request to report interactions on a recommendation.', required: [] })
  .openapi('ReportInteractionRequest')

const SegmentsSchema = z
  .object({
    brand: z.string().exactOptional().openapi({ description: 'Brand of the product.' }),
    categoryL1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "[Product category (1st level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy.",
      }),
    categoryL2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "[Product category (2nd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy.",
      }),
    categoryL3: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "[Product category (3rd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy.",
      }),
    categoryL4: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "[Product category (4th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy.",
      }),
    categoryL5: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "[Product category (5th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy.",
      }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Currency in which price metrics are represented, for example, if you select `ordered_item_sales_micros`, the returned value will be represented by this currency.',
      }),
    customLabel0: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom label 0 for custom grouping of products.' }),
    customLabel1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom label 1 for custom grouping of products.' }),
    customLabel2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom label 2 for custom grouping of products.' }),
    customLabel3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom label 3 for custom grouping of products.' }),
    customLabel4: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom label 4 for custom grouping of products.' }),
    customerCountryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Code of the country where the customer is located at the time of the event. Represented in the ISO 3166 format. If the customer country cannot be determined, a special 'ZZ' code is returned.",
      }),
    date: DateSchema.exactOptional().openapi({
      description: 'Date in the merchant timezone to which metrics apply.',
    }),
    offerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Merchant-provided id of the product.' }),
    productTypeL1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "[Product type (1st level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy.",
      }),
    productTypeL2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "[Product type (2nd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy.",
      }),
    productTypeL3: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "[Product type (3rd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy.",
      }),
    productTypeL4: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "[Product type (4th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy.",
      }),
    productTypeL5: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "[Product type (5th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy.",
      }),
    program: z
      .enum([
        'PROGRAM_UNSPECIFIED',
        'SHOPPING_ADS',
        'FREE_PRODUCT_LISTING',
        'FREE_LOCAL_PRODUCT_LISTING',
        'BUY_ON_GOOGLE_LISTING',
      ])
      .exactOptional()
      .openapi({
        description: 'Program to which metrics apply, for example, Free Product Listing.',
      }),
    title: z.string().exactOptional().openapi({ description: 'Title of the product.' }),
    week: DateSchema.exactOptional().openapi({
      description: 'First day of the week (Monday) of the metrics date in the merchant timezone.',
    }),
  })
  .openapi({
    description:
      "Dimensions according to which metrics are segmented in the response. Values of product dimensions, such as `offer_id`, reflect the state of a product at the time of the corresponding event, for example, impression or order. Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for dimensions requested explicitly in the request's search query.",
    required: [],
  })
  .openapi('Segments')

const ReportRowSchema = z
  .object({
    bestSellers: BestSellersSchema.exactOptional().openapi({
      description:
        'Best sellers fields requested by the merchant in the query. Field values are only set if the merchant queries `BestSellersProductClusterView` or `BestSellersBrandView`.',
    }),
    brand: BrandSchema.exactOptional().openapi({
      description:
        'Brand fields requested by the merchant in the query. Field values are only set if the merchant queries `BestSellersBrandView`.',
    }),
    metrics: MetricsSchema.exactOptional().openapi({
      description:
        'Metrics requested by the merchant in the query. Metric values are only set for metrics requested explicitly in the query.',
    }),
    priceCompetitiveness: PriceCompetitivenessSchema.exactOptional().openapi({
      description:
        'Price competitiveness fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceCompetitivenessProductView`.',
    }),
    priceInsights: PriceInsightsSchema.exactOptional().openapi({
      description:
        'Price insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`.',
    }),
    productCluster: ProductClusterSchema.exactOptional().openapi({
      description:
        'Product cluster fields requested by the merchant in the query. Field values are only set if the merchant queries `BestSellersProductClusterView`.',
    }),
    productView: ProductViewSchema.exactOptional().openapi({
      description:
        'Product fields requested by the merchant in the query. Field values are only set if the merchant queries `ProductView`.',
    }),
    segments: SegmentsSchema.exactOptional().openapi({
      description:
        'Segmentation dimensions requested by the merchant in the query. Dimension values are only set for dimensions requested explicitly in the query.',
    }),
  })
  .openapi({ description: 'Result row returned from the search query.', required: [] })
  .openapi('ReportRow')

const RequestPhoneVerificationRequestSchema = z
  .object({
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Language code [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) (for example, en-US). Language code is used to provide localized `SMS` and `PHONE_CALL`. Default language used is en-US if not provided.',
      }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'Phone number to be verified.' }),
    phoneRegionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Two letter country code for the phone number, for example `CA` for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes.',
      }),
    phoneVerificationMethod: z
      .enum(['PHONE_VERIFICATION_METHOD_UNSPECIFIED', 'SMS', 'PHONE_CALL'])
      .exactOptional()
      .openapi({ description: 'Verification method to receive verification code.' }),
  })
  .openapi({
    description: 'Request message for the RequestPhoneVerification method.',
    required: [],
  })
  .openapi('RequestPhoneVerificationRequest')

const RequestPhoneVerificationResponseSchema = z
  .object({
    verificationId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The verification ID to use in subsequent calls to `verifyphonenumber`.',
      }),
  })
  .openapi({
    description: 'Response message for the RequestPhoneVerification method.',
    required: [],
  })
  .openapi('RequestPhoneVerificationResponse')

const RequestReviewBuyOnGoogleProgramRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for the RequestReviewProgram method.' })
  .openapi('RequestReviewBuyOnGoogleProgramRequest')

const RequestReviewFreeListingsRequestSchema = z
  .object({
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country for which review is to be requested.',
      }),
  })
  .openapi({
    description: 'Request message for the RequestReviewFreeListings Program method.',
    required: [],
  })
  .openapi('RequestReviewFreeListingsRequest')

const RequestReviewShoppingAdsRequestSchema = z
  .object({
    regionCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the country for which review is to be requested.',
      }),
  })
  .openapi({
    description: 'Request message for the RequestReviewShoppingAds program method.',
    required: [],
  })
  .openapi('RequestReviewShoppingAdsRequest')

const ReturnAddressAddressSchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({ description: 'CLDR country code (for example, "US").' }),
    locality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'City, town or commune. May also include dependent localities or sublocalities (for example, neighborhoods or suburbs).',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Postal code or ZIP (for example, "94043").' }),
    recipientName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the recipient to address returns to.' }),
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
      .openapi({
        description:
          'Street-level part of the address. May be up to two lines, each line specified as an array element.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReturnAddressAddress')

const ReturnAddressSchema = z
  .object({
    address: ReturnAddressAddressSchema.exactOptional().openapi({
      description: 'Required. The address.',
    }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The country of sale where the return address is applicable.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#returnAddress`"',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The user-defined label of the return address. For the default address, use the label "default".',
      }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: "Required. The merchant's contact phone number regarding the return.",
      }),
    returnAddressId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Return address ID generated by Google.' }),
  })
  .openapi({ description: 'Return address resource.', required: [] })
  .openapi('ReturnAddress')

const ReturnPolicyPolicySchema = z
  .object({
    lastReturnDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Last day for returning the items. In ISO 8601 format. When specifying the return window like this, set the policy type to "lastReturnDate". Use this for seasonal overrides only.',
      }),
    numberOfDays: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of days items can be returned after delivery, where one day is defined to be 24 hours after the delivery timestamp. When specifying the return window like this, set the policy type to "numberOfDaysAfterDelivery". Acceptable values are 30, 45, 60, 90, 100, 180, 270 and 365 for the default policy. Additional policies further allow 14, 15, 21 and 28 days, but note that for most items a minimum of 30 days is required for returns. Exceptions may be made for electronics. A policy of less than 30 days can only be applied to those items.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Policy type. Use "lastReturnDate" for seasonal overrides only. Note that for most items a minimum of 30 days is required for returns. Exceptions may be made for electronics or non-returnable items such as food, perishables, and living things. A policy of less than 30 days can only be applied to those items. Acceptable values are: - "`lastReturnDate`" - "`lifetimeReturns`" - "`noReturns`" - "`numberOfDaysAfterDelivery`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReturnPolicyPolicy')

const ReturnPolicySeasonalOverrideSchema = z
  .object({
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. Last day on which the override applies. In ISO 8601 format.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The name of the seasonal override as shown in Merchant Center.',
      }),
    policy: ReturnPolicyPolicySchema.exactOptional().openapi({
      description: 'Required. The policy which is in effect during that time.',
    }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. First day on which the override applies. In ISO 8601 format.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReturnPolicySeasonalOverride')

const ReturnPolicySchema = z
  .object({
    country: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required. The country of sale where the return policy is applicable.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#returnPolicy`"',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The user-defined label of the return policy. For the default policy, use the label "default".',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The name of the policy as shown in Merchant Center.' }),
    nonFreeReturnReasons: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Return reasons that will incur return fees.' }),
    policy: ReturnPolicyPolicySchema.exactOptional().openapi({
      description: 'Required. The policy.',
    }),
    returnPolicyId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Return policy ID generated by Google.' }),
    returnShippingFee: PriceSchema.exactOptional().openapi({
      description: 'The return shipping fee that will apply to non free return reasons.',
    }),
    seasonalOverrides: z
      .array(ReturnPolicySeasonalOverrideSchema)
      .exactOptional()
      .openapi({ description: 'An optional list of seasonal overrides.' }),
  })
  .openapi({ description: 'Return policy resource.', required: [] })
  .openapi('ReturnPolicy')

const ReturnShippingLabelSchema = z
  .object({
    carrier: z.string().exactOptional().openapi({ description: 'Name of the carrier.' }),
    labelUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL for the return shipping label in PDF format' }),
    trackingId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tracking id of this return label.' }),
  })
  .openapi({
    description: 'Return shipping label for a Buy on Google merchant-managed return.',
    required: [],
  })
  .openapi('ReturnShippingLabel')

const ReturnaddressCustomBatchRequestEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'An entry ID, unique within the batch request.' }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Merchant Center account ID.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Method of the batch request entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" ',
      }),
    returnAddress: ReturnAddressSchema.exactOptional().openapi({
      description:
        'The return address to submit. This should be set only if the method is `insert`.',
    }),
    returnAddressId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The return address ID. This should be set only if the method is `delete` or `get`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReturnaddressCustomBatchRequestEntry')

const ReturnaddressCustomBatchRequestSchema = z
  .object({
    entries: z
      .array(ReturnaddressCustomBatchRequestEntrySchema)
      .exactOptional()
      .openapi({ description: 'The request entries to be processed in the batch.' }),
  })
  .openapi({ required: [] })
  .openapi('ReturnaddressCustomBatchRequest')

const ReturnaddressCustomBatchResponseEntrySchema = z
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#returnaddressCustomBatchResponseEntry`"',
      }),
    returnAddress: ReturnAddressSchema.exactOptional().openapi({
      description: 'The retrieved return address.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ReturnaddressCustomBatchResponseEntry')

const ReturnaddressCustomBatchResponseSchema = z
  .object({
    entries: z
      .array(ReturnaddressCustomBatchResponseEntrySchema)
      .exactOptional()
      .openapi({ description: 'The result of the execution of the batch requests.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#returnaddressCustomBatchResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReturnaddressCustomBatchResponse')

const ReturnaddressListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#returnaddressListResponse`".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token for the retrieval of the next page of addresses.' }),
    resources: z.array(ReturnAddressSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReturnaddressListResponse')

const ReturnpolicyCustomBatchRequestEntrySchema = z
  .object({
    batchId: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'An entry ID, unique within the batch request.' }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Merchant Center account ID.' }),
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Method of the batch request entry. Acceptable values are: - "`delete`" - "`get`" - "`insert`" ',
      }),
    returnPolicy: ReturnPolicySchema.exactOptional().openapi({
      description:
        'The return policy to submit. This should be set only if the method is `insert`.',
    }),
    returnPolicyId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The return policy ID. This should be set only if the method is `delete` or `get`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReturnpolicyCustomBatchRequestEntry')

const ReturnpolicyCustomBatchRequestSchema = z
  .object({
    entries: z
      .array(ReturnpolicyCustomBatchRequestEntrySchema)
      .exactOptional()
      .openapi({ description: 'The request entries to be processed in the batch.' }),
  })
  .openapi({ required: [] })
  .openapi('ReturnpolicyCustomBatchRequest')

const ReturnpolicyCustomBatchResponseEntrySchema = z
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#returnpolicyCustomBatchResponseEntry`"',
      }),
    returnPolicy: ReturnPolicySchema.exactOptional().openapi({
      description: 'The retrieved return policy.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ReturnpolicyCustomBatchResponseEntry')

const ReturnpolicyCustomBatchResponseSchema = z
  .object({
    entries: z
      .array(ReturnpolicyCustomBatchResponseEntrySchema)
      .exactOptional()
      .openapi({ description: 'The result of the execution of the batch requests.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#returnpolicyCustomBatchResponse`".',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReturnpolicyCustomBatchResponse')

const ReturnpolicyListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#returnpolicyListResponse`".',
      }),
    resources: z.array(ReturnPolicySchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ReturnpolicyListResponse')

const SearchRequestSchema = z
  .object({
    pageSize: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number of ReportRows to retrieve in a single page. Defaults to the maximum of 1000. Values above 1000 are coerced to 1000.',
      }),
    pageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token of the page to retrieve. If not specified, the first page of results is returned. In order to request the next page of results, the value obtained from `next_page_token` in the previous response should be used.',
      }),
    query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Query that defines performance metrics to retrieve and dimensions according to which the metrics are to be segmented. For details on how to construct your query, see the [Query Language guide](https://developers.google.com/shopping-content/guides/reports/query-language/overview).',
      }),
  })
  .openapi({ description: 'Request message for the ReportService.Search method.', required: [] })
  .openapi('SearchRequest')

const SearchResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Token which can be sent as `page_token` to retrieve the next page. If omitted, there are no subsequent pages.',
      }),
    results: z
      .array(ReportRowSchema)
      .exactOptional()
      .openapi({ description: 'Rows that matched the search query.' }),
  })
  .openapi({ description: 'Response message for the ReportService.Search method.', required: [] })
  .openapi('SearchResponse')

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
            'The carrier-service pair delivering items to collection points. The list of supported pickup services can be retrieved through the `getSupportedPickupServices` method. Required if and only if the service delivery type is `pickup`.',
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

const SettlementReportSchema = z
  .object({
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The end date on which all transactions are included in the report, in ISO 8601 format.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#settlementReport`"',
      }),
    previousBalance: PriceSchema.exactOptional().openapi({
      description:
        'The residual amount from the previous invoice. This is set only if the previous invoices are not paid because of negative balance.',
    }),
    settlementId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the settlement report.' }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start date on which all transactions are included in the report, in ISO 8601 format.',
      }),
    transferAmount: PriceSchema.exactOptional().openapi({
      description: 'The money due to the merchant.',
    }),
    transferDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which transfer for this payment was initiated by Google, in ISO 8601 format.',
      }),
    transferIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of bank identifiers used for the transfer. For example, Trace ID for Federal Automated Clearing House (ACH). This may also be known as the Wire ID.',
      }),
  })
  .openapi({
    description:
      ' Settlement reports detail order-level and item-level credits and debits between you and Google.',
    required: [],
  })
  .openapi('SettlementReport')

const SettlementTransactionAmountCommissionSchema = z
  .object({
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The category of the commission. Acceptable values are: - "`animalsAndPetSupplies`" - "`dogCatFoodAndCatLitter`" - "`apparelAndAccessories`" - "`shoesHandbagsAndSunglasses`" - "`costumesAndAccessories`" - "`jewelry`" - "`watches`" - "`hobbiesArtsAndCrafts`" - "`homeAndGarden`" - "`entertainmentCollectibles`" - "`collectibleCoins`" - "`sportsCollectibles`" - "`sportingGoods`" - "`toysAndGames`" - "`musicalInstruments`" - "`giftCards`" - "`babyAndToddler`" - "`babyFoodWipesAndDiapers`" - "`businessAndIndustrial`" - "`camerasOpticsAndPhotography`" - "`consumerElectronics`" - "`electronicsAccessories`" - "`personalComputers`" - "`videoGameConsoles`" - "`foodAndGrocery`" - "`beverages`" - "`tobaccoProducts`" - "`furniture`" - "`hardware`" - "`buildingMaterials`" - "`tools`" - "`healthAndPersonalCare`" - "`beauty`" - "`householdSupplies`" - "`kitchenAndDining`" - "`majorAppliances`" - "`luggageAndBags`" - "`media`" - "`officeSupplies`" - "`softwareAndVideoGames`" - "`vehiclePartsAndAccessories`" - "`vehicleTiresAndWheels`" - "`vehicles`" - "`everythingElse`" ',
      }),
    rate: z
      .string()
      .exactOptional()
      .openapi({ description: 'Rate of the commission in percentage.' }),
  })
  .openapi({ required: [] })
  .openapi('SettlementTransactionAmountCommission')

const SettlementTransactionAmountSchema = z
  .object({
    commission: SettlementTransactionAmountCommissionSchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description of the event. Acceptable values are: - "`taxWithhold`" - "`principal`" - "`principalAdjustment`" - "`shippingFee`" - "`merchantRemittedSalesTax`" - "`googleRemittedSalesTax`" - "`merchantCoupon`" - "`merchantCouponTax`" - "`merchantRemittedDisposalTax`" - "`googleRemittedDisposalTax`" - "`merchantRemittedRedemptionFee`" - "`googleRemittedRedemptionFee`" - "`eeeEcoFee`" - "`furnitureEcoFee`" - "`copyPrivateFee`" - "`eeeEcoFeeCommission`" - "`furnitureEcoFeeCommission`" - "`copyPrivateFeeCommission`" - "`principalRefund`" - "`principalRefundTax`" - "`itemCommission`" - "`adjustmentCommission`" - "`shippingFeeCommission`" - "`commissionRefund`" - "`damaged`" - "`damagedOrDefectiveItem`" - "`expiredItem`" - "`faultyItem`" - "`incorrectItemReceived`" - "`itemMissing`" - "`qualityNotExpected`" - "`receivedTooLate`" - "`storePackageMissing`" - "`transitPackageMissing`" - "`unsuccessfulDeliveryUndeliverable`" - "`wrongChargeInStore`" - "`wrongItem`" - "`returns`" - "`undeliverable`" - "`issueRelatedRefundAndReplacementAmountDescription`" - "`refundFromMerchant`" - "`returnLabelShippingFee`" - "`lumpSumCorrection`" - "`pspFee`" - "`principalRefundDoesNotFit`" - "`principalRefundOrderedWrongItem`" - "`principalRefundQualityNotExpected`" - "`principalRefundBetterPriceFound`" - "`principalRefundNoLongerNeeded`" - "`principalRefundChangedMind`" - "`principalRefundReceivedTooLate`" - "`principalRefundIncorrectItemReceived`" - "`principalRefundDamagedOrDefectiveItem`" - "`principalRefundDidNotMatchDescription`" - "`principalRefundExpiredItem`" ',
      }),
    transactionAmount: PriceSchema.exactOptional().openapi({
      description: 'The amount that contributes to the line item price.',
    }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the amount. Acceptable values are: - "`itemPrice`" - "`orderPrice`" - "`refund`" - "`earlyRefund`" - "`courtesyRefund`" - "`returnRefund`" - "`returnLabelShippingFeeAmount`" - "`lumpSumCorrectionAmount`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('SettlementTransactionAmount')

const SettlementTransactionIdentifiersSchema = z
  .object({
    adjustmentId: z
      .string()
      .exactOptional()
      .openapi({ description: "The identifier of the adjustments, if it's available." }),
    merchantOrderId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The merchant provided order ID.' }),
    orderItemId: z.string().exactOptional().openapi({ description: 'The identifier of the item.' }),
    settlementEntryId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the settlement transaction entry.' }),
    shipmentIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The shipment ids for the item.' }),
    transactionId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Google transaction ID.' }),
  })
  .openapi({ required: [] })
  .openapi('SettlementTransactionIdentifiers')

const SettlementTransactionTransactionSchema = z
  .object({
    postDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time on which the event occurred in ISO 8601 format.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the transaction that occurred. Acceptable values are: - "`order`" - "`reversal`" - "`orderRefund`" - "`reversalRefund`" - "`issueRelatedRefundAndReplacement`" - "`returnLabelShippingFeeTransaction`" - "`reversalIssueRelatedRefundAndReplacement`" - "`reversalReturnLabelShippingFeeTransaction`" - "`lumpSumCorrectionTransaction`" ',
      }),
  })
  .openapi({ required: [] })
  .openapi('SettlementTransactionTransaction')

const SettlementTransactionSchema = z
  .object({
    amount: SettlementTransactionAmountSchema.exactOptional().openapi({
      description: 'The amount for the transaction.',
    }),
    identifiers: SettlementTransactionIdentifiersSchema.exactOptional().openapi({
      description: 'Identifiers of the transaction.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#settlementTransaction`"',
      }),
    transaction: SettlementTransactionTransactionSchema.exactOptional().openapi({
      description: 'Details of the transaction.',
    }),
  })
  .openapi({
    description: 'Settlement transactions give a detailed breakdown of the settlement report.',
    required: [],
  })
  .openapi('SettlementTransaction')

const SettlementreportsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#settlementreportsListResponse`".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token for the retrieval of the next page of returns.' }),
    resources: z.array(SettlementReportSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SettlementreportsListResponse')

const SettlementtransactionsListResponseSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string "`content#settlementtransactionsListResponse`".',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token for the retrieval of the next page of returns.' }),
    resources: z.array(SettlementTransactionSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SettlementtransactionsListResponse')

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
      description:
        'A list of errors for failed custombatch entries. *Note:* Schema errors fail the whole request.',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsCustomBatchResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedCarriersResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedHolidaysResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsGetSupportedPickupServicesResponse`".',
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
          'Identifies what kind of resource this is. Value: the fixed string "`content#shippingsettingsListResponse`".',
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

const ShoppingAdsProgramStatusReviewIneligibilityReasonDetailsSchema = z
  .object({
    cooldownTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This timestamp represents end of cooldown period for review ineligbility reason `IN_COOLDOWN_PERIOD`.',
      }),
  })
  .openapi({ description: 'Additional details for review ineligibility reasons.', required: [] })
  .openapi('ShoppingAdsProgramStatusReviewIneligibilityReasonDetails')

const ShoppingAdsProgramStatusRegionStatusSchema = z
  .object({
    disapprovalDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date by which eligibilityStatus will go from `WARNING` to `DISAPPROVED`. Only visible when your eligibilityStatus is WARNING. In [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format: `YYYY-MM-DD`.',
      }),
    eligibilityStatus: z
      .enum([
        'STATE_UNSPECIFIED',
        'APPROVED',
        'DISAPPROVED',
        'WARNING',
        'UNDER_REVIEW',
        'PENDING_REVIEW',
        'ONBOARDING',
      ])
      .exactOptional()
      .openapi({ description: 'Eligibility status of the Shopping Ads program.' }),
    onboardingIssues: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Issues that must be fixed to be eligible for review.' }),
    regionCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) codes for all the regions with the same `eligibilityStatus` and `reviewEligibility`.',
      }),
    reviewEligibilityStatus: z
      .enum(['REVIEW_ELIGIBILITY_UNSPECIFIED', 'ELIGIBLE', 'INELIGIBLE'])
      .exactOptional()
      .openapi({
        description:
          'If a program is eligible for review in a specific region. Only visible if `eligibilityStatus` is `DISAPPROVED`.',
      }),
    reviewIneligibilityReason: z
      .enum([
        'REVIEW_INELIGIBILITY_REASON_UNSPECIFIED',
        'ONBOARDING_ISSUES',
        'NOT_ENOUGH_OFFERS',
        'IN_COOLDOWN_PERIOD',
        'ALREADY_UNDER_REVIEW',
        'NO_REVIEW_REQUIRED',
        'WILL_BE_REVIEWED_AUTOMATICALLY',
        'IS_RETIRED',
        'ALREADY_REVIEWED',
      ])
      .exactOptional()
      .openapi({
        description: 'Review ineligibility reason if account is not eligible for review.',
      }),
    reviewIneligibilityReasonDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Reason a program in a specific region isn’t eligible for review. Only visible if `reviewEligibilityStatus` is `INELIGIBLE`.',
      }),
    reviewIneligibilityReasonDetails:
      ShoppingAdsProgramStatusReviewIneligibilityReasonDetailsSchema.exactOptional().openapi({
        description:
          'Additional information for ineligibility. If `reviewIneligibilityReason` is `IN_COOLDOWN_PERIOD`, a timestamp for the end of the cooldown period is provided.',
      }),
    reviewIssues: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Issues evaluated in the review process. Fix all issues before requesting a review.',
      }),
  })
  .openapi({ description: 'Status of program and region.', required: [] })
  .openapi('ShoppingAdsProgramStatusRegionStatus')

const ShoppingAdsProgramStatusSchema = z
  .object({
    globalState: z
      .enum(['PROGRAM_STATE_UNSPECIFIED', 'NOT_ENABLED', 'NO_OFFERS_UPLOADED', 'ENABLED'])
      .exactOptional()
      .openapi({
        description: 'State of the program. `ENABLED` if there are offers for at least one region.',
      }),
    regionStatuses: z
      .array(ShoppingAdsProgramStatusRegionStatusSchema)
      .exactOptional()
      .openapi({
        description:
          'Status of the program in each region. Regions with the same status and review eligibility are grouped together in `regionCodes`.',
      }),
  })
  .openapi({ description: 'Response message for GetShoppingAdsProgramStatus.', required: [] })
  .openapi('ShoppingAdsProgramStatus')

const UndeleteConversionSourceRequestSchema = z
  .object({})
  .openapi({ description: 'Request message for the UndeleteConversionSource method.' })
  .openapi('UndeleteConversionSourceRequest')

const VerifyPhoneNumberRequestSchema = z
  .object({
    phoneVerificationMethod: z
      .enum(['PHONE_VERIFICATION_METHOD_UNSPECIFIED', 'SMS', 'PHONE_CALL'])
      .exactOptional()
      .openapi({ description: 'Verification method used to receive verification code.' }),
    verificationCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The verification code that was sent to the phone number for validation.',
      }),
    verificationId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The verification ID returned by `requestphoneverification`.' }),
  })
  .openapi({ description: 'Request message for the VerifyPhoneNumber method.', required: [] })
  .openapi('VerifyPhoneNumberRequest')

const VerifyPhoneNumberResponseSchema = z
  .object({
    verifiedPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Verified phone number if verification is successful. This phone number can only be replaced by another verified phone number.',
      }),
  })
  .openapi({ description: 'Response message for the VerifyPhoneNumber method.', required: [] })
  .openapi('VerifyPhoneNumberResponse')

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

export const postAccountsAccountIdCredentialsRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/credentials',
  tags: ['accounts'],
  description:
    'Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.',
  operationId: 'content.accounts.credentials.create',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The merchant id of the account these credentials belong to.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountCredentialsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountCredentialsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getAccountsAccountIdLabelsRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/labels',
  tags: ['accounts'],
  description: 'Lists the labels assigned to an account.',
  operationId: 'content.accounts.labels.list',
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
              'The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'A page token, received from a previous `ListAccountLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountLabels` must match the call that provided the page token.',
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
            description: 'Required. The account id for whose labels are to be listed.',
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
      content: { 'application/json': { schema: ListAccountLabelsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postAccountsAccountIdLabelsRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/labels',
  tags: ['accounts'],
  description: 'Creates a new label, not assigned to any account.',
  operationId: 'content.accounts.labels.create',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The id of the account this label belongs to.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountLabelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountLabelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const deleteAccountsAccountIdLabelsLabelIdRoute = createRoute({
  method: 'delete',
  path: '/accounts/{accountId}/labels/{labelId}',
  tags: ['accounts'],
  description: 'Deletes a label and removes it from all accounts to which it was assigned.',
  operationId: 'content.accounts.labels.delete',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The id of the account that owns the label.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      labelId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The id of the label to delete.',
            in: 'path',
            name: 'labelId',
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

export const patchAccountsAccountIdLabelsLabelIdRoute = createRoute({
  method: 'patch',
  path: '/accounts/{accountId}/labels/{labelId}',
  tags: ['accounts'],
  description: 'Updates a label.',
  operationId: 'content.accounts.labels.patch',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The id of the account this label belongs to.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      labelId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The id of the label to update.',
            in: 'path',
            name: 'labelId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountLabelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountLabelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getAccountsAccountIdReturncarrierRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}/returncarrier',
  tags: ['accounts'],
  description: 'Lists available return carriers in the merchant account.',
  operationId: 'content.accounts.returncarrier.list',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The Merchant Center Account Id under which the Return Carrier is to be linked.',
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
      content: { 'application/json': { schema: ListAccountReturnCarrierResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postAccountsAccountIdReturncarrierRoute = createRoute({
  method: 'post',
  path: '/accounts/{accountId}/returncarrier',
  tags: ['accounts'],
  description: 'Links return carrier to a merchant account.',
  operationId: 'content.accounts.returncarrier.create',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The Merchant Center Account Id under which the Return Carrier is to be linked.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountReturnCarrierSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountReturnCarrierSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const deleteAccountsAccountIdReturncarrierCarrierAccountIdRoute = createRoute({
  method: 'delete',
  path: '/accounts/{accountId}/returncarrier/{carrierAccountId}',
  tags: ['accounts'],
  description: 'Delete a return carrier in the merchant account.',
  operationId: 'content.accounts.returncarrier.delete',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The Merchant Center Account Id under which the Return Carrier is to be linked.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      carrierAccountId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The Google-provided unique carrier ID, used to update the resource.',
            in: 'path',
            name: 'carrierAccountId',
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

export const patchAccountsAccountIdReturncarrierCarrierAccountIdRoute = createRoute({
  method: 'patch',
  path: '/accounts/{accountId}/returncarrier/{carrierAccountId}',
  tags: ['accounts'],
  description: 'Updates a return carrier in the merchant account.',
  operationId: 'content.accounts.returncarrier.patch',
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
      accountId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The Merchant Center Account Id under which the Return Carrier is to be linked.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      carrierAccountId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The Google-provided unique carrier ID, used to update the resource.',
            in: 'path',
            name: 'carrierAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountReturnCarrierSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountReturnCarrierSchema } },
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

export const postLocalinventoryBatchRoute = createRoute({
  method: 'post',
  path: '/localinventory/batch',
  tags: ['localinventory'],
  description: 'Updates local inventory for multiple products or stores in a single request.',
  operationId: 'content.localinventory.custombatch',
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
    body: { content: { 'application/json': { schema: LocalinventoryCustomBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LocalinventoryCustomBatchResponseSchema } },
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

export const postRegionalinventoryBatchRoute = createRoute({
  method: 'post',
  path: '/regionalinventory/batch',
  tags: ['regionalinventory'],
  description: 'Updates regional inventory for multiple products or regions in a single request.',
  operationId: 'content.regionalinventory.custombatch',
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
    body: {
      content: { 'application/json': { schema: RegionalinventoryCustomBatchRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RegionalinventoryCustomBatchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postReturnaddressBatchRoute = createRoute({
  method: 'post',
  path: '/returnaddress/batch',
  tags: ['returnaddress'],
  description: 'Batches multiple return address related calls in a single request.',
  operationId: 'content.returnaddress.custombatch',
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
    body: { content: { 'application/json': { schema: ReturnaddressCustomBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReturnaddressCustomBatchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postReturnpolicyBatchRoute = createRoute({
  method: 'post',
  path: '/returnpolicy/batch',
  tags: ['returnpolicy'],
  description: 'Batches multiple return policy related calls in a single request.',
  operationId: 'content.returnpolicy.custombatch',
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
    body: { content: { 'application/json': { schema: ReturnpolicyCustomBatchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReturnpolicyCustomBatchResponseSchema } },
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

export const getCssGroupIdCssesRoute = createRoute({
  method: 'get',
  path: '/{cssGroupId}/csses',
  tags: ['csses'],
  description: 'Lists CSS domains affiliated with a CSS group.',
  operationId: 'content.csses.list',
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
              'The maximum number of CSS domains to return. The service may return fewer than this value. If unspecified, at most 50 CSS domains will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'A page token, received from a previous `ListCsses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCsses` must match the call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      cssGroupId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The CSS group ID of CSS domains to be listed.',
            in: 'path',
            name: 'cssGroupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListCssesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getCssGroupIdCssesCssDomainIdRoute = createRoute({
  method: 'get',
  path: '/{cssGroupId}/csses/{cssDomainId}',
  tags: ['csses'],
  description: 'Retrieves a single CSS domain by ID.',
  operationId: 'content.csses.get',
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
      cssGroupId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The ID of the managing account. If this parameter is not the same as [cssDomainId](#cssDomainId), then this ID must be a CSS group ID and `cssDomainId` must be the ID of a CSS domain affiliated with this group.',
            in: 'path',
            name: 'cssGroupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cssDomainId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the CSS domain to return.',
            in: 'path',
            name: 'cssDomainId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CssSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postCssGroupIdCssesCssDomainIdUpdatelabelsRoute = createRoute({
  method: 'post',
  path: '/{cssGroupId}/csses/{cssDomainId}/updatelabels',
  tags: ['csses'],
  description: 'Updates labels that are assigned to a CSS domain by its CSS group.',
  operationId: 'content.csses.updatelabels',
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
      cssGroupId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The CSS group ID of the updated CSS domain.',
            in: 'path',
            name: 'cssGroupId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      cssDomainId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the updated CSS domain.',
            in: 'path',
            name: 'cssDomainId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LabelIdsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CssSchema } },
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
      label: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If view is set to "css", only return accounts that are assigned label with given ID.',
            in: 'query',
            name: 'label',
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
              'The maximum number of accounts to return in the response, used for paging.',
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, only the accounts with the given name (case sensitive) will be returned.',
            in: 'query',
            name: 'name',
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
      view: z
        .enum(['MERCHANT', 'CSS'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant".',
            in: 'query',
            name: 'view',
            schema: { enum: ['MERCHANT', 'CSS'], type: 'string' },
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
      view: z
        .enum(['MERCHANT', 'CSS'])
        .exactOptional()
        .openapi({
          param: {
            description:
              'Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant".',
            in: 'query',
            name: 'view',
            schema: { enum: ['MERCHANT', 'CSS'], type: 'string' },
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
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'Option to delete sub-accounts with products. The default value is false.',
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
  description:
    "Claims the website of a Merchant Center sub-account. Merchant accounts with approved third-party CSSs aren't required to claim a website.",
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
              'Only available to selected merchants, for example multi-client accounts (MCAs) and their sub-accounts. When set to `True`, this option removes any existing claim on the requested website and replaces it with a claim from the account that makes the request.',
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

export const getMerchantIdAccountsAccountIdListlinksRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/accounts/{accountId}/listlinks',
  tags: ['accounts'],
  description: 'Returns the list of accounts linked to your Merchant Center account.',
  operationId: 'content.accounts.listlinks',
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
              'The maximum number of links to return in the response, used for pagination. The minimum allowed value is 5 results per page. If provided value is lower than 5, it will be automatically increased to 5.',
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
            description: 'The ID of the account for which to list links.',
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
      content: { 'application/json': { schema: AccountsListLinksResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdAccountsAccountIdRequestphoneverificationRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/accounts/{accountId}/requestphoneverification',
  tags: ['accounts'],
  description: 'Request verification code to start phone verification.',
  operationId: 'content.accounts.requestphoneverification',
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
              'Required. The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.',
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
            description: 'Required. The ID of the account.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RequestPhoneVerificationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RequestPhoneVerificationResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdAccountsAccountIdUpdatelabelsRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/accounts/{accountId}/updatelabels',
  tags: ['accounts'],
  description: 'Updates labels that are assigned to the Merchant Center account by CSS user.',
  operationId: 'content.accounts.updatelabels',
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
            description: 'The ID of the managing account.',
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
            description: 'The ID of the account whose labels are updated.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AccountsUpdateLabelsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AccountsUpdateLabelsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdAccountsAccountIdVerifyphonenumberRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/accounts/{accountId}/verifyphonenumber',
  tags: ['accounts'],
  description:
    'Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.',
  operationId: 'content.accounts.verifyphonenumber',
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
              'Required. The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account.',
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
            description: 'Required. The ID of the account.',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: VerifyPhoneNumberRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: VerifyPhoneNumberResponseSchema } },
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
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set, only the accounts with the given name (case sensitive) will be returned.',
            in: 'query',
            name: 'name',
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

export const getMerchantIdBuyongoogleprogramsRegionCodeRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/buyongoogleprograms/{regionCode}',
  tags: ['buyongoogleprograms'],
  description: 'Retrieves a status of the BoG program for your Merchant Center account.',
  operationId: 'content.buyongoogleprograms.get',
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
            description: 'Required. The ID of the account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      regionCode: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The Program region code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Currently only US is available.',
            in: 'path',
            name: 'regionCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BuyOnGoogleProgramStatusSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const patchMerchantIdBuyongoogleprogramsRegionCodeRoute = createRoute({
  method: 'patch',
  path: '/{merchantId}/buyongoogleprograms/{regionCode}',
  tags: ['buyongoogleprograms'],
  description: 'Updates the status of the BoG program for your Merchant Center account.',
  operationId: 'content.buyongoogleprograms.patch',
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
            description:
              'The list of fields to update. If the update mask is not provided, then all the fields set in buyOnGoogleProgramStatus will be updated. Clearing fields is only possible if update mask is provided.',
            in: 'query',
            name: 'updateMask',
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
            description: 'Required. The ID of the account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      regionCode: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The program region code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Currently only US is available.',
            in: 'path',
            name: 'regionCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BuyOnGoogleProgramStatusSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BuyOnGoogleProgramStatusSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdBuyongoogleprogramsRegionCodeActivateRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/buyongoogleprograms/{regionCode}/activate',
  tags: ['buyongoogleprograms'],
  description:
    'Reactivates the BoG program in your Merchant Center account. Moves the program to the active state when allowed, for example, when paused. This method is only available to selected merchants.',
  operationId: 'content.buyongoogleprograms.activate',
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
            description: 'Required. The ID of the account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      regionCode: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The program region code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Currently only US is available.',
            in: 'path',
            name: 'regionCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ActivateBuyOnGoogleProgramRequestSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdBuyongoogleprogramsRegionCodeOnboardRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/buyongoogleprograms/{regionCode}/onboard',
  tags: ['buyongoogleprograms'],
  description:
    'Onboards the BoG program in your Merchant Center account. By using this method, you agree to the [Terms of Service](https://merchants.google.com/mc/termsofservice/transactions/US/latest). Calling this method is only possible if the authenticated account is the same as the merchant id in the request. Calling this method multiple times will only accept Terms of Service if the latest version is not currently signed.',
  operationId: 'content.buyongoogleprograms.onboard',
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
            description: 'Required. The ID of the account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      regionCode: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The program region code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Currently only US is available.',
            in: 'path',
            name: 'regionCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OnboardBuyOnGoogleProgramRequestSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdBuyongoogleprogramsRegionCodePauseRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/buyongoogleprograms/{regionCode}/pause',
  tags: ['buyongoogleprograms'],
  description:
    'Pauses the BoG program in your Merchant Center account. This method is only available to selected merchants.',
  operationId: 'content.buyongoogleprograms.pause',
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
            description: 'Required. The ID of the account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      regionCode: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The program region code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Currently only US is available.',
            in: 'path',
            name: 'regionCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PauseBuyOnGoogleProgramRequestSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdBuyongoogleprogramsRegionCodeRequestreviewRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/buyongoogleprograms/{regionCode}/requestreview',
  tags: ['buyongoogleprograms'],
  description:
    'Requests review and then activates the BoG program in your Merchant Center account for the first time. Moves the program to the REVIEW_PENDING state. This method is only available to selected merchants.',
  operationId: 'content.buyongoogleprograms.requestreview',
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
            description: 'Required. The ID of the account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      regionCode: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The program region code [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). Currently only US is available.',
            in: 'path',
            name: 'regionCode',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: RequestReviewBuyOnGoogleProgramRequestSchema } },
    },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdCollectionsRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/collections',
  tags: ['collections'],
  description:
    'Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.',
  operationId: 'content.collections.list',
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
              'The maximum number of collections to return in the response, used for paging. Defaults to 50; values above 1000 will be coerced to 1000.',
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
              'Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.',
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
              'Required. The ID of the account that contains the collection. This account cannot be a multi-client account.',
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
      content: { 'application/json': { schema: ListCollectionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdCollectionsRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/collections',
  tags: ['collections'],
  description:
    'Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.',
  operationId: 'content.collections.create',
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
              'Required. The ID of the account that contains the collection. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CollectionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CollectionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdCollectionsCollectionIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/collections/{collectionId}',
  tags: ['collections'],
  description: 'Retrieves a collection from your Merchant Center account.',
  operationId: 'content.collections.get',
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
              'Required. The ID of the account that contains the collection. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The REST ID of the collection.',
            in: 'path',
            name: 'collectionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CollectionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const deleteMerchantIdCollectionsCollectionIdRoute = createRoute({
  method: 'delete',
  path: '/{merchantId}/collections/{collectionId}',
  tags: ['collections'],
  description: 'Deletes a collection from your Merchant Center account.',
  operationId: 'content.collections.delete',
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
              'Required. The ID of the account that contains the collection. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The collectionId of the collection. CollectionId is the same as the REST ID of the collection.',
            in: 'path',
            name: 'collectionId',
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

export const getMerchantIdCollectionstatusesRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/collectionstatuses',
  tags: ['collectionstatuses'],
  description: 'Lists the statuses of the collections in your Merchant Center account.',
  operationId: 'content.collectionstatuses.list',
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
              'The maximum number of collection statuses to return in the response, used for paging. Defaults to 50; values above 1000 will be coerced to 1000.',
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
              'Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.',
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
              'Required. The ID of the account that contains the collection. This account cannot be a multi-client account.',
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
      content: { 'application/json': { schema: ListCollectionStatusesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdCollectionstatusesCollectionIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/collectionstatuses/{collectionId}',
  tags: ['collectionstatuses'],
  description: 'Gets the status of a collection from your Merchant Center account.',
  operationId: 'content.collectionstatuses.get',
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
              'Required. The ID of the account that contains the collection. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      collectionId: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The collectionId of the collection. CollectionId is the same as the REST ID of the collection.',
            in: 'path',
            name: 'collectionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CollectionStatusSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdConversionsourcesRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/conversionsources',
  tags: ['conversionsources'],
  description: 'Retrieves the list of conversion sources the caller has access to.',
  operationId: 'content.conversionsources.list',
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
              'The maximum number of conversion sources to return in a page. If no `page_size` is specified, `100` is used as the default value. The maximum value is `200`. Values above `200` will be coerced to `200`. Regardless of pagination, at most `200` conversion sources are returned in total.',
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
            description: 'Page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description: 'If true, also returns archived conversion sources.',
            in: 'query',
            name: 'showDeleted',
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
            description: 'Required. The ID of the account that owns the new conversion source.',
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
      content: { 'application/json': { schema: ListConversionSourcesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdConversionsourcesRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/conversionsources',
  tags: ['conversionsources'],
  description: 'Creates a new conversion source.',
  operationId: 'content.conversionsources.create',
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
            description: 'Required. The ID of the account that owns the new conversion source.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConversionSourceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConversionSourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdConversionsourcesConversionSourceIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/conversionsources/{conversionSourceId}',
  tags: ['conversionsources'],
  description: 'Fetches a conversion source.',
  operationId: 'content.conversionsources.get',
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
            description: 'Required. The ID of the account that owns the new conversion source.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      conversionSourceId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The REST ID of the collection.',
            in: 'path',
            name: 'conversionSourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConversionSourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const deleteMerchantIdConversionsourcesConversionSourceIdRoute = createRoute({
  method: 'delete',
  path: '/{merchantId}/conversionsources/{conversionSourceId}',
  tags: ['conversionsources'],
  description:
    'Archives an existing conversion source. It will be recoverable for 30 days. This archiving behavior is not typical in the Content API and unique to this service.',
  operationId: 'content.conversionsources.delete',
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
            description: 'Required. The ID of the account that owns the new conversion source.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      conversionSourceId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the conversion source to be deleted.',
            in: 'path',
            name: 'conversionSourceId',
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

export const patchMerchantIdConversionsourcesConversionSourceIdRoute = createRoute({
  method: 'patch',
  path: '/{merchantId}/conversionsources/{conversionSourceId}',
  tags: ['conversionsources'],
  description: 'Updates information of an existing conversion source.',
  operationId: 'content.conversionsources.patch',
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
            description: 'Required. List of fields being updated.',
            in: 'query',
            name: 'updateMask',
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
            description: 'Required. The ID of the account that owns the new conversion source.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      conversionSourceId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the conversion source to be updated.',
            in: 'path',
            name: 'conversionSourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ConversionSourceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ConversionSourceSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdConversionsourcesConversionSourceIdUndeleteRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/conversionsources/{conversionSourceId}:undelete',
  tags: ['conversionsources'],
  description: 'Re-enables an archived conversion source.',
  operationId: 'content.conversionsources.undelete',
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
            description: 'Required. The ID of the account that owns the new conversion source.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      conversionSourceId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The ID of the conversion source to be undeleted.',
            in: 'path',
            name: 'conversionSourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UndeleteConversionSourceRequestSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
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
    'Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.',
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
              'Deprecated. Use `feedLabel` instead. The country to get the datafeed status for. If this parameter is provided then `language` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.',
            in: 'query',
            name: 'country',
            schema: { type: 'string' },
            required: false,
          },
        }),
      feedLabel: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The feed label to get the datafeed status for. If this parameter is provided then `language` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.',
            in: 'query',
            name: 'feedLabel',
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
              'The language to get the datafeed status for. If this parameter is provided then `country` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target.',
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

export const getMerchantIdFreelistingsprogramRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/freelistingsprogram',
  tags: ['freelistingsprogram'],
  description:
    'Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.',
  operationId: 'content.freelistingsprogram.get',
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
            description: 'Required. The ID of the account.',
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
      content: { 'application/json': { schema: FreeListingsProgramStatusSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdFreelistingsprogramRequestreviewRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/freelistingsprogram/requestreview',
  tags: ['freelistingsprogram'],
  description:
    'Requests a review of free listings in a specific region. This method is only available to selected merchants.',
  operationId: 'content.freelistingsprogram.requestreview',
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
            description: 'Required. The ID of the account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RequestReviewFreeListingsRequestSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
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
  description: 'Retrieves the list of accessible Business Profiles.',
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
              'The ID of the account for which to retrieve accessible Business Profiles.',
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
  description: 'Requests access to a specified Business Profile.',
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
            description: 'The email of the Business Profile.',
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
            description: 'The ID of the account for which Business Profile access is requested.',
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
              'The ID of the account for which to retrieve accessible Business Profiles.',
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
      acknowledged: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Obtains order returns that match the acknowledgement status. When set to true, obtains order returns that have been acknowledged. When false, obtains order returns that have not been acknowledged. When not provided, obtains order returns regardless of their acknowledgement status. We recommend using this filter set to `false`, in conjunction with the `acknowledge` call, such that only un-acknowledged order returns are returned. ',
            in: 'query',
            name: 'acknowledged',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
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
      googleOrderIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Obtains order returns with the specified order ids. If this parameter is provided, createdStartDate, createdEndDate, shipmentType, shipmentStatus, shipmentState and acknowledged parameters must be not set. Note: if googleOrderId and shipmentTrackingNumber parameters are provided, the obtained results will include all order returns that either match the specified order id or the specified tracking number.',
            explode: true,
            in: 'query',
            name: 'googleOrderIds',
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
      shipmentStates: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['NEW', 'SHIPPED', 'COMPLETED', 'UNDELIVERABLE', 'PENDING'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Obtains order returns that match any shipment state provided in this parameter. When this parameter is not provided, order returns are obtained regardless of their shipment states.',
            explode: true,
            in: 'query',
            name: 'shipmentStates',
            schema: {
              items: {
                enum: ['NEW', 'SHIPPED', 'COMPLETED', 'UNDELIVERABLE', 'PENDING'],
                type: 'string',
              },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      shipmentStatus: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['NEW', 'IN_PROGRESS', 'PROCESSED'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Obtains order returns that match any shipment status provided in this parameter. When this parameter is not provided, order returns are obtained regardless of their shipment statuses.',
            explode: true,
            in: 'query',
            name: 'shipmentStatus',
            schema: {
              items: { enum: ['NEW', 'IN_PROGRESS', 'PROCESSED'], type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      shipmentTrackingNumbers: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Obtains order returns with the specified tracking numbers. If this parameter is provided, createdStartDate, createdEndDate, shipmentType, shipmentStatus, shipmentState and acknowledged parameters must be not set. Note: if googleOrderId and shipmentTrackingNumber parameters are provided, the obtained results will include all order returns that either match the specified order id or the specified tracking number.',
            explode: true,
            in: 'query',
            name: 'shipmentTrackingNumbers',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      shipmentTypes: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['BY_MAIL', 'RETURNLESS', 'CONTACT_CUSTOMER_SUPPORT'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Obtains order returns that match any shipment type provided in this parameter. When this parameter is not provided, order returns are obtained regardless of their shipment types.',
            explode: true,
            in: 'query',
            name: 'shipmentTypes',
            schema: {
              items: {
                enum: ['BY_MAIL', 'RETURNLESS', 'CONTACT_CUSTOMER_SUPPORT'],
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

export const postMerchantIdOrderreturnsCreateOrderReturnRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orderreturns/createOrderReturn',
  tags: ['orderreturns'],
  description: 'Create return in your Merchant Center account.',
  operationId: 'content.orderreturns.createorderreturn',
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
    }),
    body: {
      content: { 'application/json': { schema: OrderreturnsCreateOrderReturnRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrderreturnsCreateOrderReturnResponseSchema } },
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

export const postMerchantIdOrderreturnsReturnIdAcknowledgeRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orderreturns/{returnId}/acknowledge',
  tags: ['orderreturns'],
  description: 'Acks an order return in your Merchant Center account.',
  operationId: 'content.orderreturns.acknowledge',
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
            description: 'The ID of the return.',
            in: 'path',
            name: 'returnId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrderreturnsAcknowledgeRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrderreturnsAcknowledgeResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrderreturnsReturnIdLabelsRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orderreturns/{returnId}/labels',
  tags: ['orderreturns'],
  description:
    'Links a return shipping label to a return id. You can only create one return label per return id. Since the label is sent to the buyer, the linked return label cannot be updated or deleted. If you try to create multiple return shipping labels for a single return id, every create request except the first will fail.',
  operationId: 'content.orderreturns.labels.create',
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
            description: 'Required. The merchant the Return Shipping Label belongs to.',
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
            description: 'Required. Provide the Google-generated merchant order return ID.',
            in: 'path',
            name: 'returnId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReturnShippingLabelSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReturnShippingLabelSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrderreturnsReturnIdProcessRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orderreturns/{returnId}/process',
  tags: ['orderreturns'],
  description: 'Processes return in your Merchant Center account.',
  operationId: 'content.orderreturns.process',
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
            description: 'The ID of the return.',
            in: 'path',
            name: 'returnId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrderreturnsProcessRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrderreturnsProcessResponseSchema } },
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
              'Obtains orders that match any of the specified statuses. Note that `active` is a shortcut for `pendingShipment` and `partiallyShipped`, and `completed` is a shortcut for `shipped`, `partiallyDelivered`, `delivered`, `partiallyReturned`, `returned`, and `canceled`.',
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

export const postMerchantIdOrdersOrderIdCaptureOrderRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/captureOrder',
  tags: ['orders'],
  description:
    "Capture funds from the customer for the current order total. This method should be called after the merchant verifies that they are able and ready to start shipping the order. This method blocks until a response is received from the payment processsor. If this method succeeds, the merchant is guaranteed to receive funds for the order after shipment. If the request fails, it can be retried or the order may be cancelled. This method cannot be called after the entire order is already shipped. A rejected error code is returned when the payment service provider has declined the charge. This indicates a problem between the PSP and either the merchant's or customer's account. Sometimes this error will be resolved by the customer. We recommend retrying these errors once per day or cancelling the order with reason `failedToCaptureFunds` if the items cannot be held.",
  operationId: 'content.orders.captureOrder',
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
              'Required. The ID of the account that manages the order. This cannot be a multi-client account.',
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
            description: 'Required. The ID of the Order.',
            in: 'path',
            name: 'orderId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CaptureOrderRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: CaptureOrderResponseSchema } },
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
    'Deprecated. Notifies that item return and refund was handled directly by merchant outside of Google payments processing (for example, cash refund done in store). Note: We recommend calling the returnrefundlineitem method to refund in-store returns. We will issue the refund directly to the customer. This helps to prevent possible differences arising between merchant and Google transaction records. We also recommend having the point of sale system communicate with Google to ensure that customers do not receive a double refund by first refunding through Google then through an in-store return.',
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

export const postMerchantIdOrdersOrderIdRefunditemRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/refunditem',
  tags: ['orders'],
  description: 'Issues a partial or total refund for items and shipment.',
  operationId: 'content.orders.refunditem',
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
    body: { content: { 'application/json': { schema: OrdersRefundItemRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersRefundItemResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdOrdersOrderIdRefundorderRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/refundorder',
  tags: ['orders'],
  description: 'Issues a partial or total refund for an order.',
  operationId: 'content.orders.refundorder',
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
    body: { content: { 'application/json': { schema: OrdersRefundOrderRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrdersRefundOrderResponseSchema } },
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

export const postMerchantIdOrdersOrderIdReturnRefundLineItemRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/orders/{orderId}/returnRefundLineItem',
  tags: ['orders'],
  description:
    'Returns and refunds a line item. Note that this method can only be called on fully shipped orders. The Orderreturns API is the preferred way to handle returns after you receive a return from a customer. You can use Orderreturns.list or Orderreturns.get to search for the return, and then use Orderreturns.processreturn to issue the refund. If the return cannot be found, then we recommend using this API to issue a refund.',
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
    'Sets (or overrides if it already exists) merchant provided annotations in the form of key-value pairs. A common use case would be to supply us with additional structured information about a line item that cannot be provided through other methods. Submitted key-value pairs can be retrieved as part of the orders resource.',
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

export const postMerchantIdOrdertrackingsignalsRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/ordertrackingsignals',
  tags: ['ordertrackingsignals'],
  description: 'Creates new order tracking signal.',
  operationId: 'content.ordertrackingsignals.create',
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
            description: 'The ID of the merchant for which the order signal is created.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OrderTrackingSignalSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OrderTrackingSignalSchema } },
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

export const postMerchantIdProductdeliverytimeRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/productdeliverytime',
  tags: ['productdeliverytime'],
  description: 'Creates or updates the delivery time of a product.',
  operationId: 'content.productdeliverytime.create',
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
              'The Google merchant ID of the account that contains the product. This account cannot be a multi-client account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ProductDeliveryTimeSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ProductDeliveryTimeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdProductdeliverytimeProductIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/productdeliverytime/{productId}',
  tags: ['productdeliverytime'],
  description: 'Gets `productDeliveryTime` by `productId`.',
  operationId: 'content.productdeliverytime.get',
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
              'Required. The Google merchant ID of the account that contains the product. This account cannot be a multi-client account.',
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
            description:
              'Required. The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`.',
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
      content: { 'application/json': { schema: ProductDeliveryTimeSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const deleteMerchantIdProductdeliverytimeProductIdRoute = createRoute({
  method: 'delete',
  path: '/{merchantId}/productdeliverytime/{productId}',
  tags: ['productdeliverytime'],
  description: 'Deletes the delivery time of a product.',
  operationId: 'content.productdeliverytime.delete',
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
              'Required. The Google merchant ID of the account that contains the product. This account cannot be a multi-client account.',
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
            description:
              'Required. The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`.',
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
      feedId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The Content API Supplemental Feed ID. If present then product insertion applies to the data in a supplemental feed.',
            in: 'query',
            name: 'feedId',
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
      feedId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The Content API Supplemental Feed ID. If present then product deletion applies to the data in a supplemental feed. If absent, entire product will be deleted.',
            in: 'query',
            name: 'feedId',
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

export const patchMerchantIdProductsProductIdRoute = createRoute({
  method: 'patch',
  path: '/{merchantId}/products/{productId}',
  tags: ['products'],
  description:
    'Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.',
  operationId: 'content.products.update',
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
            description:
              'The comma-separated list of product attributes to be updated. Example: `"title,salePrice"`. Attributes specified in the update mask without a value specified in the body will be deleted from the product. *You must specify the update mask to delete attributes.* Only top-level product attributes can be updated. If not defined, product attributes with set values will be updated and other attributes will stay unchanged.',
            in: 'query',
            name: 'updateMask',
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
            description: 'The REST ID of the product for which to update.',
            in: 'path',
            name: 'productId',
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

export const postMerchantIdProductsProductIdLocalinventoryRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/products/{productId}/localinventory',
  tags: ['localinventory'],
  description: 'Updates the local inventory of a product in your Merchant Center account.',
  operationId: 'content.localinventory.insert',
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
            description: 'The REST ID of the product for which to update local inventory.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LocalInventorySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LocalInventorySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdProductsProductIdRegionalinventoryRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/products/{productId}/regionalinventory',
  tags: ['regionalinventory'],
  description:
    'Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.',
  operationId: 'content.regionalinventory.insert',
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
            description: 'The REST ID of the product for which to update the regional inventory.',
            in: 'path',
            name: 'productId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RegionalInventorySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RegionalInventorySchema } },
    },
  },
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

export const getMerchantIdProductstatusesProductIdRepricingreportsRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/productstatuses/{productId}/repricingreports',
  tags: ['productstatuses'],
  description: 'Lists the metrics report for a given Repricing product.',
  operationId: 'content.productstatuses.repricingreports.list',
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Gets Repricing reports on and before this date in the merchant's timezone. You can only retrieve data up to 7 days ago (default) or earlier. Format is YYYY-MM-DD.",
            in: 'query',
            name: 'endDate',
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
              'Maximum number of days of reports to return. There can be more than one rule report returned per day. For example, if 3 rule types got applied to the same product within a 24-hour period, then a page_size of 1 will return 3 rule reports. The page size defaults to 50 and values above 1000 are coerced to 1000. This service may return fewer days of reports than this value, for example, if the time between your start and end date is less than the page size.',
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
              'Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ruleId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: "Id of the Repricing rule. If specified, only gets this rule's reports.",
            in: 'query',
            name: 'ruleId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Gets Repricing reports on and after this date in the merchant's timezone, up to one year ago. Do not use a start date later than 7 days ago (default). Format is YYYY-MM-DD.",
            in: 'query',
            name: 'startDate',
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
            description: 'Required. Id of the merchant who owns the Repricing rule.',
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
            description:
              'Required. Id of the Repricing product. Also known as the [REST_ID](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.id)',
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
      content: { 'application/json': { schema: ListRepricingProductReportsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdPromotionsRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/promotions',
  tags: ['promotions'],
  description:
    'Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.',
  operationId: 'content.promotions.create',
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
            description: 'Required. The ID of the account that contains the collection.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PromotionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PromotionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdPromotionsIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/promotions/{id}',
  tags: ['promotions'],
  description: 'Retrieves a promotion from your Merchant Center account.',
  operationId: 'content.promotions.get',
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
            description: 'Required. The ID of the account that contains the collection.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            description: 'Required. REST ID of the promotion to retrieve.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PromotionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdPubsubnotificationsettingsRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/pubsubnotificationsettings',
  tags: ['pubsubnotificationsettings'],
  description: "Retrieves a Merchant Center account's pubsub notification settings.",
  operationId: 'content.pubsubnotificationsettings.get',
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
            description: 'The ID of the account for which to get pubsub notification settings.',
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
      content: { 'application/json': { schema: PubsubNotificationSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const putMerchantIdPubsubnotificationsettingsRoute = createRoute({
  method: 'put',
  path: '/{merchantId}/pubsubnotificationsettings',
  tags: ['pubsubnotificationsettings'],
  description:
    "Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.",
  operationId: 'content.pubsubnotificationsettings.update',
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
            description: 'The ID of the account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PubsubNotificationSettingsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PubsubNotificationSettingsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdQuotasRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/quotas',
  tags: ['quotas'],
  description: 'Lists the daily call quota and usage per method for your Merchant Center account.',
  operationId: 'content.quotas.list',
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
              'The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000.',
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
              'Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.',
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
              'Required. The ID of the account that has quota. This account must be an admin.',
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
      content: { 'application/json': { schema: ListMethodQuotasResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdRecommendationsGenerateRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/recommendations/generate',
  tags: ['recommendations'],
  description: 'Generates recommendations for a merchant.',
  operationId: 'content.recommendations.generate',
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
      allowedTag: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. List of allowed tags. Tags are a set of predefined strings that describe the category that individual recommendation types. User can specify zero or more tags in this field to indicate what group of recommendations they want to receive. Current list of supported tags: - TREND',
            explode: true,
            in: 'query',
            name: 'allowedTag',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. Language code of the client. If not set, the result will be in default language (English). This language code affects all fields prefixed with "localized". This should be set to ISO 639-1 country code. List of currently verified supported language code: en, fr, cs, da, de, es, it, nl, no, pl, pt, pt, fi, sv, vi, tr, th, ko, zh-CN, zh-TW, ja, id, hi',
            in: 'query',
            name: 'languageCode',
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
            description: 'Required. The ID of the account to fetch recommendations for.',
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
      content: { 'application/json': { schema: GenerateRecommendationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdRecommendationsReportInteractionRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/recommendations/reportInteraction',
  tags: ['recommendations'],
  description: 'Reports an interaction on a recommendation for a merchant.',
  operationId: 'content.recommendations.reportInteraction',
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
            description: 'Required. The ID of the account that wants to report an interaction.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReportInteractionRequestSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdRegionsRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/regions',
  tags: ['regions'],
  description: 'Lists the regions in your Merchant Center account.',
  operationId: 'content.regions.list',
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
              'The maximum number of regions to return. The service may return fewer than this value. If unspecified, at most 50 rules will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'A page token, received from a previous `ListRegions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegions` must match the call that provided the page token.',
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
            description: 'Required. The id of the merchant for which to list region definitions.',
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
      content: { 'application/json': { schema: ListRegionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdRegionsRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/regions',
  tags: ['regions'],
  description: 'Creates a region definition in your Merchant Center account.',
  operationId: 'content.regions.create',
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
      regionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The id of the region to create.',
            in: 'query',
            name: 'regionId',
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
            description: 'Required. The id of the merchant for which to create region definition.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RegionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RegionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdRegionsRegionIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/regions/{regionId}',
  tags: ['regions'],
  description: 'Retrieves a region defined in your Merchant Center account.',
  operationId: 'content.regions.get',
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
              'Required. The id of the merchant for which to retrieve region definition.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      regionId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The id of the region to retrieve.',
            in: 'path',
            name: 'regionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RegionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const deleteMerchantIdRegionsRegionIdRoute = createRoute({
  method: 'delete',
  path: '/{merchantId}/regions/{regionId}',
  tags: ['regions'],
  description: 'Deletes a region definition from your Merchant Center account.',
  operationId: 'content.regions.delete',
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
            description: 'Required. The id of the merchant for which to delete region definition.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      regionId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The id of the region to delete.',
            in: 'path',
            name: 'regionId',
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

export const patchMerchantIdRegionsRegionIdRoute = createRoute({
  method: 'patch',
  path: '/{merchantId}/regions/{regionId}',
  tags: ['regions'],
  description: 'Updates a region definition in your Merchant Center account.',
  operationId: 'content.regions.patch',
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
            description:
              'Optional. The comma-separated field mask indicating the fields to update. Example: `"displayName,postalCodeArea.regionCode"`.',
            in: 'query',
            name: 'updateMask',
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
            description: 'Required. The id of the merchant for which to update region definition.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      regionId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The id of the region to update.',
            in: 'path',
            name: 'regionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RegionSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RegionSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdReportsSearchRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/reports/search',
  tags: ['reports'],
  description:
    'Retrieves merchant performance mertrics matching the search query and optionally segmented by selected dimensions.',
  operationId: 'content.reports.search',
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
              'Required. Id of the merchant making the call. Must be a standalone account or an MCA subaccount.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SearchRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdRepricingrulesRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/repricingrules',
  tags: ['repricingrules'],
  description: 'Lists the repricing rules in your Merchant Center account.',
  operationId: 'content.repricingrules.list',
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
      countryCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              '[CLDR country code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) (e.g. "US"), used as a filter on repricing rules.',
            in: 'query',
            name: 'countryCode',
            schema: { type: 'string' },
            required: false,
          },
        }),
      languageCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The two-letter ISO 639-1 language code associated with the repricing rule, used as a filter.',
            in: 'query',
            name: 'languageCode',
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
              'The maximum number of repricing rules to return. The service may return fewer than this value. If unspecified, at most 50 rules will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.',
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
              'A page token, received from a previous `ListRepricingRules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRepricingRules` must match the call that provided the page token.',
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
            description: 'Required. The id of the merchant who owns the repricing rule.',
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
      content: { 'application/json': { schema: ListRepricingRulesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdRepricingrulesRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/repricingrules',
  tags: ['repricingrules'],
  description: 'Creates a repricing rule for your Merchant Center account.',
  operationId: 'content.repricingrules.create',
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
      ruleId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Required. The id of the rule to create.',
            in: 'query',
            name: 'ruleId',
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
            description: 'Required. The id of the merchant who owns the repricing rule.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RepricingRuleSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RepricingRuleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdRepricingrulesRuleIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/repricingrules/{ruleId}',
  tags: ['repricingrules'],
  description: 'Retrieves a repricing rule from your Merchant Center account.',
  operationId: 'content.repricingrules.get',
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
            description: 'Required. The id of the merchant who owns the repricing rule.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ruleId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The id of the rule to retrieve.',
            in: 'path',
            name: 'ruleId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RepricingRuleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const deleteMerchantIdRepricingrulesRuleIdRoute = createRoute({
  method: 'delete',
  path: '/{merchantId}/repricingrules/{ruleId}',
  tags: ['repricingrules'],
  description: 'Deletes a repricing rule in your Merchant Center account.',
  operationId: 'content.repricingrules.delete',
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
            description: 'Required. The id of the merchant who owns the repricing rule.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ruleId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The id of the rule to Delete.',
            in: 'path',
            name: 'ruleId',
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

export const patchMerchantIdRepricingrulesRuleIdRoute = createRoute({
  method: 'patch',
  path: '/{merchantId}/repricingrules/{ruleId}',
  tags: ['repricingrules'],
  description:
    'Updates a repricing rule in your Merchant Center account. All mutable fields will be overwritten in each update request. In each update, you must provide all required mutable fields, or an error will be thrown. If you do not provide an optional field in the update request, if that field currently exists, it will be deleted from the rule.',
  operationId: 'content.repricingrules.patch',
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
            description: 'Required. The id of the merchant who owns the repricing rule.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ruleId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The id of the rule to update.',
            in: 'path',
            name: 'ruleId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RepricingRuleSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RepricingRuleSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdRepricingrulesRuleIdRepricingreportsRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/repricingrules/{ruleId}/repricingreports',
  tags: ['repricingrules'],
  description: 'Lists the metrics report for a given Repricing rule.',
  operationId: 'content.repricingrules.repricingreports.list',
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
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Gets Repricing reports on and before this date in the merchant's timezone. You can only retrieve data up to 7 days ago (default) or earlier. Format: YYYY-MM-DD.",
            in: 'query',
            name: 'endDate',
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
              'Maximum number of daily reports to return. Each report includes data from a single 24-hour period. The page size defaults to 50 and values above 1000 are coerced to 1000. This service may return fewer days than this value, for example, if the time between your start and end date is less than page size.',
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
              'Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      startDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Gets Repricing reports on and after this date in the merchant's timezone, up to one year ago. Do not use a start date later than 7 days ago (default). Format: YYYY-MM-DD.",
            in: 'query',
            name: 'startDate',
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
            description: 'Required. Id of the merchant who owns the Repricing rule.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      ruleId: z
        .string()
        .openapi({
          param: {
            description: 'Required. Id of the Repricing rule.',
            in: 'path',
            name: 'ruleId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListRepricingRuleReportsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdReturnaddressRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/returnaddress',
  tags: ['returnaddress'],
  description: 'Lists the return addresses of the Merchant Center account.',
  operationId: 'content.returnaddress.list',
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
              'List only return addresses applicable to the given country of sale. When omitted, all return addresses are listed.',
            in: 'query',
            name: 'country',
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
            description: 'The maximum number of addresses in the response, used for paging.',
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
            description: 'The Merchant Center account to list return addresses for.',
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
      content: { 'application/json': { schema: ReturnaddressListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdReturnaddressRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/returnaddress',
  tags: ['returnaddress'],
  description: 'Inserts a return address for the Merchant Center account.',
  operationId: 'content.returnaddress.insert',
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
            description: 'The Merchant Center account to insert a return address for.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReturnAddressSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReturnAddressSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdReturnaddressReturnAddressIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/returnaddress/{returnAddressId}',
  tags: ['returnaddress'],
  description: 'Gets a return address of the Merchant Center account.',
  operationId: 'content.returnaddress.get',
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
            description: 'The Merchant Center account to get a return address for.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      returnAddressId: z
        .string()
        .openapi({
          param: {
            description: 'Return address ID generated by Google.',
            in: 'path',
            name: 'returnAddressId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReturnAddressSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const deleteMerchantIdReturnaddressReturnAddressIdRoute = createRoute({
  method: 'delete',
  path: '/{merchantId}/returnaddress/{returnAddressId}',
  tags: ['returnaddress'],
  description: 'Deletes a return address for the given Merchant Center account.',
  operationId: 'content.returnaddress.delete',
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
              'The Merchant Center account from which to delete the given return address.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      returnAddressId: z
        .string()
        .openapi({
          param: {
            description: 'Return address ID generated by Google.',
            in: 'path',
            name: 'returnAddressId',
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

export const getMerchantIdReturnpolicyRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/returnpolicy',
  tags: ['returnpolicy'],
  description: 'Lists the return policies of the Merchant Center account.',
  operationId: 'content.returnpolicy.list',
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
            description: 'The Merchant Center account to list return policies for.',
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
      content: { 'application/json': { schema: ReturnpolicyListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdReturnpolicyRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/returnpolicy',
  tags: ['returnpolicy'],
  description: 'Inserts a return policy for the Merchant Center account.',
  operationId: 'content.returnpolicy.insert',
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
            description: 'The Merchant Center account to insert a return policy for.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReturnPolicySchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReturnPolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdReturnpolicyReturnPolicyIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/returnpolicy/{returnPolicyId}',
  tags: ['returnpolicy'],
  description: 'Gets a return policy of the Merchant Center account.',
  operationId: 'content.returnpolicy.get',
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
            description: 'The Merchant Center account to get a return policy for.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      returnPolicyId: z
        .string()
        .openapi({
          param: {
            description: 'Return policy ID generated by Google.',
            in: 'path',
            name: 'returnPolicyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReturnPolicySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const deleteMerchantIdReturnpolicyReturnPolicyIdRoute = createRoute({
  method: 'delete',
  path: '/{merchantId}/returnpolicy/{returnPolicyId}',
  tags: ['returnpolicy'],
  description: 'Deletes a return policy for the given Merchant Center account.',
  operationId: 'content.returnpolicy.delete',
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
              'The Merchant Center account from which to delete the given return policy.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      returnPolicyId: z
        .string()
        .openapi({
          param: {
            description: 'Return policy ID generated by Google.',
            in: 'path',
            name: 'returnPolicyId',
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

export const getMerchantIdReturnpolicyonlineRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/returnpolicyonline',
  tags: ['returnpolicyonline'],
  description: 'Lists all existing return policies.',
  operationId: 'content.returnpolicyonline.list',
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
              'Required. The id of the merchant for which to retrieve the return policy online object.',
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
      content: { 'application/json': { schema: ListReturnPolicyOnlineResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdReturnpolicyonlineRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/returnpolicyonline',
  tags: ['returnpolicyonline'],
  description: 'Creates a new return policy.',
  operationId: 'content.returnpolicyonline.create',
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
              'Required. The id of the merchant for which to retrieve the return policy online object.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReturnPolicyOnlineSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReturnPolicyOnlineSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdReturnpolicyonlineReturnPolicyIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/returnpolicyonline/{returnPolicyId}',
  tags: ['returnpolicyonline'],
  description: 'Gets an existing return policy.',
  operationId: 'content.returnpolicyonline.get',
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
              'Required. The id of the merchant for which to retrieve the return policy online object.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      returnPolicyId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The id of the return policy to retrieve.',
            in: 'path',
            name: 'returnPolicyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReturnPolicyOnlineSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const deleteMerchantIdReturnpolicyonlineReturnPolicyIdRoute = createRoute({
  method: 'delete',
  path: '/{merchantId}/returnpolicyonline/{returnPolicyId}',
  tags: ['returnpolicyonline'],
  description: 'Deletes an existing return policy.',
  operationId: 'content.returnpolicyonline.delete',
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
              'Required. The id of the merchant for which to retrieve the return policy online object.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      returnPolicyId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The id of the return policy to delete.',
            in: 'path',
            name: 'returnPolicyId',
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

export const patchMerchantIdReturnpolicyonlineReturnPolicyIdRoute = createRoute({
  method: 'patch',
  path: '/{merchantId}/returnpolicyonline/{returnPolicyId}',
  tags: ['returnpolicyonline'],
  description: 'Updates an existing return policy.',
  operationId: 'content.returnpolicyonline.patch',
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
              'Required. The id of the merchant for which to retrieve the return policy online object.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      returnPolicyId: z
        .string()
        .openapi({
          param: {
            description: 'Required. The id of the return policy to update.',
            in: 'path',
            name: 'returnPolicyId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ReturnPolicyOnlineSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ReturnPolicyOnlineSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdSettlementreportsRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/settlementreports',
  tags: ['settlementreports'],
  description: 'Retrieves a list of settlement reports from your Merchant Center account.',
  operationId: 'content.settlementreports.list',
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
              'The maximum number of settlements to return in the response, used for paging. The default value is 200 returns per page, and the maximum allowed value is 5000 returns per page.',
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
      transferEndDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Obtains settlements which have transactions before this date (inclusively), in ISO 8601 format.',
            in: 'query',
            name: 'transferEndDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      transferStartDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Obtains settlements which have transactions after this date (inclusively), in ISO 8601 format.',
            in: 'query',
            name: 'transferStartDate',
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
            description: 'The Merchant Center account to list settlements for.',
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
      content: { 'application/json': { schema: SettlementreportsListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdSettlementreportsSettlementIdRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/settlementreports/{settlementId}',
  tags: ['settlementreports'],
  description: 'Retrieves a settlement report from your Merchant Center account.',
  operationId: 'content.settlementreports.get',
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
            description: 'The Merchant Center account of the settlement report.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      settlementId: z
        .string()
        .openapi({
          param: {
            description: 'The Google-provided ID of the settlement.',
            in: 'path',
            name: 'settlementId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SettlementReportSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const getMerchantIdSettlementreportsSettlementIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/settlementreports/{settlementId}/transactions',
  tags: ['settlementtransactions'],
  description: 'Retrieves a list of transactions for the settlement.',
  operationId: 'content.settlementtransactions.list',
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
              'The maximum number of transactions to return in the response, used for paging. The default value is 200 transactions per page, and the maximum allowed value is 5000 transactions per page.',
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
      transactionIds: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The list of transactions to return. If not set, all transactions will be returned.',
            explode: true,
            in: 'query',
            name: 'transactionIds',
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
            description: 'The Merchant Center account to list transactions for.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      settlementId: z
        .string()
        .openapi({
          param: {
            description: 'The Google-provided ID of the settlement.',
            in: 'path',
            name: 'settlementId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SettlementtransactionsListResponseSchema } },
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

export const getMerchantIdShoppingadsprogramRoute = createRoute({
  method: 'get',
  path: '/{merchantId}/shoppingadsprogram',
  tags: ['shoppingadsprogram'],
  description:
    'Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.',
  operationId: 'content.shoppingadsprogram.get',
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
            description: 'Required. The ID of the account.',
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
      content: { 'application/json': { schema: ShoppingAdsProgramStatusSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/content'],
      Oauth2c: ['https://www.googleapis.com/auth/content'],
    },
  ],
})

export const postMerchantIdShoppingadsprogramRequestreviewRoute = createRoute({
  method: 'post',
  path: '/{merchantId}/shoppingadsprogram/requestreview',
  tags: ['shoppingadsprogram'],
  description:
    'Requests a review of Shopping ads in a specific region. This method is only available to selected merchants.',
  operationId: 'content.shoppingadsprogram.requestreview',
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
            description: 'Required. The ID of the account.',
            in: 'path',
            name: 'merchantId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RequestReviewShoppingAdsRequestSchema } } },
  },
  responses: { 200: { description: 'Successful response' } },
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
            description: 'The country of the template to retrieve. Defaults to "`US`".',
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
        .enum(['TEMPLATE1', 'TEMPLATE2', 'TEMPLATE1A', 'TEMPLATE1B', 'TEMPLATE3', 'TEMPLATE4'])
        .openapi({
          param: {
            description: 'The name of the template to retrieve.',
            in: 'path',
            name: 'templateName',
            required: true,
            schema: {
              enum: [
                'TEMPLATE1',
                'TEMPLATE2',
                'TEMPLATE1A',
                'TEMPLATE1B',
                'TEMPLATE3',
                'TEMPLATE4',
              ],
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
