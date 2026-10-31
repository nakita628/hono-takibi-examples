import { createRoute, z } from '@hono/zod-openapi'

const AddressResidentialIndicatorSchema = z
  .enum(['unknown', 'yes', 'no'])
  .openapi({
    description: 'Indicates whether an address is residential.',
    title: 'address_residential_indicator',
  })
  .openapi('AddressResidentialIndicator')

const CountryCodeSchema = z
  .string()
  .length(2)
  .openapi({
    description:
      'A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)\n',
    example: 'CA',
    title: 'country_code',
  })
  .openapi('CountryCode')

const PostalCodeSchema = z
  .string()
  .min(1)
  .openapi({ description: 'postal code', example: '78756-3717', title: 'postal_code' })
  .openapi('PostalCode')

const PartialAddressSchema = z
  .strictObject({
    address_line1: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The first line of the street address.  For some addresses, this may be the only line.  Other addresses may require 2 or 3 lines.\n',
        example: '1999 Bishop Grandin Blvd.',
      }),
    address_line2: z
      .string()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The second line of the street address.  For some addresses, this line may not be needed.\n',
        example: 'Unit 408',
      }),
    address_line3: z
      .string()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The third line of the street address.  For some addresses, this line may not be needed.\n',
        example: 'Building #7',
      }),
    address_residential_indicator: AddressResidentialIndicatorSchema.default('unknown')
      .exactOptional()
      .openapi({ description: 'Indicates whether this is a residential address.', example: 'no' }),
    city_locality: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The name of the city or locality', example: 'Winnipeg' }),
    company_name: z
      .string()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If this is a business address, then the company name should be specified here.\n',
        example: 'The Home Depot',
      }),
    country_code: CountryCodeSchema.exactOptional().openapi({
      description:
        'The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)\n',
    }),
    email: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Email for the address owner.\n', example: 'example@example.com' }),
    name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The name of a contact person at this address.  This field may be set instead of - or in addition to - the `company_name` field.\n',
        example: 'John Doe',
      }),
    phone: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The phone number of a contact person at this address.  The format of this phone number varies depending on the country.\n',
        example: '+1 204-253-9411 ext. 123',
      }),
    postal_code: PostalCodeSchema.exactOptional(),
    state_province: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The state or province.  For some countries (including the U.S.) only abbreviations are allowed.  Other countries allow the full name or abbreviation.\n',
        example: 'Manitoba',
      }),
  })
  .openapi({
    description: 'A complete or partial mailing address.',
    title: 'partial_address',
    required: [],
  })
  .openapi('PartialAddress')

type AddressType = z.infer<typeof PartialAddressSchema>

const UrlSchema = z
  .url()
  .min(1)
  .openapi({
    description: 'A URL',
    example: 'http://api.shipengine.com/v1/labels/se-28529731',
    title: 'url',
  })
  .openapi('Url')

const OptionalLinkSchema = z
  .strictObject({
    href: UrlSchema.exactOptional().openapi({
      description: 'The URL of the linked resource, if any',
    }),
    type: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'The type of resource, or the type of relationship to the parent resource',
      }),
  })
  .openapi({
    description:
      'A link to a related resource, or an empty object if there is no resource to link to',
    title: 'optional_link',
    required: [],
  })
  .openapi('OptionalLink')

type LinkType = z.infer<typeof OptionalLinkSchema>

const BillToPartySchema = z
  .enum(['recipient', 'third_party'])
  .openapi({ description: 'The possible bill to party values', title: 'bill_to_party' })
  .openapi('BillToParty')

const CurrencySchema = z
  .string()
  .openapi({
    description:
      'The currencies that are supported by ShipEngine are the ones that specified by ISO 4217: https://www.iso.org/iso-4217-currency-codes.html\n',
    title: 'currency',
  })
  .openapi('Currency')

const PaymentAmountSchema = z
  .object({ amount: z.float64().min(0).exactOptional(), currency: CurrencySchema.exactOptional() })
  .openapi({ title: 'payment_amount', required: [] })
  .openapi('PaymentAmount')

const CollectOnDeliveryPaymentTypeSchema = z
  .enum(['any', 'cash', 'cash_equivalent', 'none'])
  .openapi({
    description: 'Types of payment that are supported',
    title: 'collect_on_delivery_payment_type',
  })
  .openapi('CollectOnDeliveryPaymentType')

const CollectOnDeliverySchema = z
  .object({
    payment_amount: PaymentAmountSchema.exactOptional(),
    payment_type: CollectOnDeliveryPaymentTypeSchema.exactOptional(),
  })
  .openapi({
    description: 'Defer payment until package is delivered, instead of when it is ordered.',
    title: 'collect_on_delivery',
    required: [],
  })
  .openapi('CollectOnDelivery')

const WeightUnitSchema = z
  .enum(['pound', 'ounce', 'gram', 'kilogram'])
  .openapi({ description: 'The possible weight unit values', title: 'weight_unit' })
  .openapi('WeightUnit')

const WeightSchema = z
  .strictObject({
    unit: WeightUnitSchema,
    value: z.float64().positive().openapi({ description: 'The weight, in the specified unit' }),
  })
  .openapi({ description: 'The weight of a package', required: ['value', 'unit'], title: 'weight' })
  .openapi('Weight')

const OriginTypeSchema = z
  .enum(['pickup', 'drop_off'])
  .openapi({
    description: 'Indicates if the package will be picked up or dropped off by the carrier',
    title: 'origin_type',
  })
  .openapi('OriginType')

const AdvancedShipmentOptionsSchema = z
  .strictObject({
    bill_to_account: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'This field is used to [bill shipping costs to a third party](https://www.shipengine.com/docs/shipping/bill-to-third-party/).  This field must be used in conjunction with the `bill_to_country_code`, `bill_to_party`, and `bill_to_postal_code` fields.\n',
      }),
    bill_to_country_code: CountryCodeSchema.nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) of the third-party that is responsible for shipping costs.\n',
      }),
    bill_to_party: BillToPartySchema.nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Indicates whether to bill shipping costs to the recipient or to a third-party.  When billing to a third-party, the `bill_to_account`, `bill_to_country_code`, and `bill_to_postal_code` fields must also be set.\n',
      }),
    bill_to_postal_code: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description: 'The postal code of the third-party that is responsible for shipping costs.\n',
      }),
    collect_on_delivery: CollectOnDeliverySchema.exactOptional(),
    contains_alcohol: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Indicates that the shipment contains alcohol.' }),
    custom_field1: z
      .string()
      .max(100)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'An arbitrary field that can be used to store information about the shipment.\n',
      }),
    custom_field2: z
      .string()
      .max(100)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'An arbitrary field that can be used to store information about the shipment.\n',
      }),
    custom_field3: z
      .string()
      .max(100)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'An arbitrary field that can be used to store information about the shipment.\n',
      }),
    delivered_duty_paid: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates that the shipper is paying the international delivery duties for this shipment.  This option is supported by UPS, FedEx, and DHL Express.\n',
      }),
    dry_ice: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Indicates if the shipment contain dry ice' }),
    dry_ice_weight: WeightSchema.nullable()
      .exactOptional()
      .openapi({ description: 'The weight of the dry ice in the shipment' }),
    fedex_freight: z
      .object({
        booking_confirmation: z.string().exactOptional(),
        shipper_load_and_count: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Provide details for the Fedex freight service', required: [] }),
    freight_class: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'The National Motor Freight Traffic Association [freight class](http://www.nmfta.org/pages/nmfc?AspxAutoDetectCookieSupport=1), such as "77.5", "110", or "250".\n',
        example: 77.5,
      }),
    non_machinable: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates that the package cannot be processed automatically because it is too large or irregularly shaped. This is primarily for USPS shipments.  See [Section 1.2 of the USPS parcel standards](https://pe.usps.com/text/dmm300/101.htm#ep1047495) for details.\n',
      }),
    origin_type: OriginTypeSchema.nullable().default(null).exactOptional(),
    saturday_delivery: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Enables Saturday delivery, if supported by the carrier.' }),
    shipper_release: z.boolean().nullable().default(null).exactOptional(),
    third_party_consignee: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Third Party Consignee option is a value-added service that allows the shipper to supply goods without commercial invoices being attached',
      }),
    use_ups_ground_freight_pricing: z
      .boolean()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Whether to use [UPS Ground Freight pricing](https://www.shipengine.com/docs/shipping/ups-ground-freight/).  If enabled, then a `freight_class` must also be specified.\n',
      }),
  })
  .openapi({
    description: 'Advanced shipment options',
    title: 'advanced_shipment_options',
    required: [],
  })
  .openapi('AdvancedShipmentOptions')

const SeIdSchema = z
  .string()
  .regex(/^se(-[a-z0-9]+)+$/)
  .min(1)
  .max(25)
  .openapi({
    description:
      'A string that uniquely identifies a ShipEngine resource, such as a carrier, label, shipment, etc.',
    example: 'se-28529731',
    title: 'se_id',
  })
  .openapi('SeId')

const DeliveryConfirmationSchema = z
  .enum([
    'none',
    'delivery',
    'signature',
    'adult_signature',
    'direct_signature',
    'delivery_mailed',
    'verbal_confirmation',
  ])
  .openapi({
    description: 'The possible delivery confirmation values',
    title: 'delivery_confirmation',
  })
  .openapi('DeliveryConfirmation')

const DateTimeSchema = z.iso
  .datetime({ offset: true })
  .regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[-+]\d{2}:\d{2})$/)
  .openapi({
    description:
      'An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date and time.\n',
    example: '2018-09-23T15:00:00.000Z',
    title: 'date_time',
  })
  .openapi('DateTime')

const PackageContentsSchema = z
  .enum(['merchandise', 'documents', 'gift', 'returned_goods', 'sample'])
  .openapi({ description: 'The possible package contents values', title: 'package_contents' })
  .openapi('PackageContents')

const MonetaryValueSchema = z
  .strictObject({
    amount: z
      .float64()
      .min(0)
      .openapi({ description: 'The monetary amount, in the specified currency.' }),
    currency: CurrencySchema,
  })
  .openapi({
    description:
      'A monetary value, such as the price of a shipping label, the insured value of a package, or an account balance.\n',
    required: ['currency', 'amount'],
    title: 'monetary_value',
  })
  .openapi('MonetaryValue')

const CustomsItemSchema = z
  .strictObject({
    country_of_origin: CountryCodeSchema.nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'The two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) where this item originated\n',
      }),
    customs_item_id: SeIdSchema.openapi({
      description: 'A string that uniquely identifies the customs item',
      readOnly: true,
    }),
    description: z
      .string()
      .max(100)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'A description of the item' }),
    harmonized_tariff_code: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'The [Harmonized Tariff Code](https://en.wikipedia.org/wiki/Harmonized_System) of this item.',
        example: 3926.1,
      }),
    quantity: z
      .int32()
      .min(0)
      .default(0)
      .exactOptional()
      .openapi({ description: 'The quantity of this item in the shipment.' }),
    sku: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The SKU (Stock Keeping Unit) of the customs item' }),
    sku_description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: "Description of the Custom Item's SKU" }),
    unit_of_measure: z.string().nullable().exactOptional(),
    value: MonetaryValueSchema.exactOptional().openapi({
      description: 'The declared customs value of each item',
    }),
    weight: WeightSchema.exactOptional().openapi({ description: 'The item weight' }),
  })
  .openapi({
    description: 'The customs declaration for a single item in the shipment.',
    required: ['customs_item_id'],
    title: 'customs_item',
  })
  .openapi('CustomsItem')

const NonDeliverySchema = z
  .enum(['return_to_sender', 'treat_as_abandoned'])
  .openapi({ description: 'The possible non delivery values', title: 'non_delivery' })
  .openapi('NonDelivery')

const InternationalShipmentOptionsSchema = z
  .strictObject({
    contents: PackageContentsSchema.default('merchandise').openapi({
      description:
        'The type of contents in this shipment.  This may impact import duties or customs treatment.',
    }),
    customs_items: z
      .array(CustomsItemSchema)
      .min(0)
      .default([])
      .exactOptional()
      .openapi({ description: 'Customs declarations for each item in the shipment.' }),
    non_delivery: NonDeliverySchema.default('return_to_sender').openapi({
      description: 'Indicates what to do if a package is unable to be delivered.',
    }),
  })
  .openapi({
    description: 'Options for international shipments, such as customs declarations.',
    required: ['contents', 'non_delivery'],
    title: 'international_shipment_options',
  })
  .openapi('InternationalShipmentOptions')

const InsuranceProviderSchema = z
  .enum(['none', 'shipsurance', 'carrier', 'third_party'])
  .openapi({ description: 'The possible insurance provider values', title: 'insurance_provider' })
  .openapi('InsuranceProvider')

const OrderSourceNameSchema = z
  .enum([
    'amazon_ca',
    'amazon_us',
    'brightpearl',
    'channel_advisor',
    'cratejoy',
    'ebay',
    'etsy',
    'jane',
    'groupon_goods',
    'magento',
    'paypal',
    'seller_active',
    'shopify',
    'stitch_labs',
    'squarespace',
    'three_dcart',
    'tophatter',
    'walmart',
    'woo_commerce',
    'volusion',
  ])
  .openapi({
    description: 'The order sources that are supported by ShipEngine',
    title: 'order_source_name',
  })
  .openapi('OrderSourceName')

const ShipmentItemSchema = z
  .strictObject({
    asin: z
      .string()
      .length(10)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Amazon Standard Identification Number', example: 'B00005N5PF' }),
    external_order_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'external order id' }),
    external_order_item_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'external order item id' }),
    name: z.string().min(0).exactOptional().openapi({ description: 'item name' }),
    order_source_code: OrderSourceNameSchema.exactOptional(),
    quantity: z
      .int32()
      .min(0)
      .exactOptional()
      .openapi({ description: 'The quantity of this item included in the shipment' }),
    sales_order_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'sales order id' }),
    sales_order_item_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'sales order item id' }),
    sku: z.string().nullable().exactOptional().openapi({ description: 'Item Stock Keeping Unit' }),
  })
  .openapi({ description: 'A shipment item', title: 'shipment_item', required: [] })
  .openapi('ShipmentItem')

const DimensionUnitSchema = z
  .enum(['inch', 'centimeter'])
  .openapi({
    description: 'The dimension units that are supported by ShipEngine.',
    title: 'dimension_unit',
  })
  .openapi('DimensionUnit')

const DimensionsSchema = z
  .strictObject({
    height: z
      .float64()
      .min(0)
      .default(0)
      .openapi({ description: 'The length of the package, in the specified unit' }),
    length: z
      .float64()
      .min(0)
      .default(0)
      .openapi({ description: 'The length of the package, in the specified unit' }),
    unit: DimensionUnitSchema.default('inch'),
    width: z
      .float64()
      .min(0)
      .default(0)
      .openapi({ description: 'The width of the package, in the specified unit' }),
  })
  .openapi({
    description: 'The dimensions of a package',
    required: ['unit', 'length', 'width', 'height'],
    title: 'dimensions',
  })
  .openapi('Dimensions')

const LabelDownloadSchema = z
  .strictObject({
    href: UrlSchema.exactOptional().openapi({
      description: 'The URL of the linked resource, if any',
    }),
    pdf: UrlSchema.exactOptional().openapi({ description: 'The URL for the pdf generated label' }),
    png: UrlSchema.exactOptional().openapi({ description: 'The URL for the png generated label' }),
    zpl: UrlSchema.exactOptional().openapi({ description: 'The URL for the zpl generated label' }),
  })
  .openapi({
    description: 'Reference to the various downloadable file formats for the generated label\n',
    title: 'label_download',
    required: [],
  })
  .openapi('LabelDownload')

const LabelMessagesSchema = z
  .strictObject({
    reference1: z
      .string()
      .nullable()
      .default(null)
      .openapi({
        description:
          'The first line of the custom label message.  Some carriers may prefix this line with something like "REF", "Reference", "Trx Ref No.", etc.\n',
      }),
    reference2: z
      .string()
      .nullable()
      .default(null)
      .openapi({
        description:
          'The second line of the custom label message.  Some carriers may prefix this line with something like "INV", "Reference 2", "Trx Ref No.", etc.\n',
      }),
    reference3: z
      .string()
      .nullable()
      .default(null)
      .openapi({
        description:
          'The third line of the custom label message.  Some carriers may prefix this line with something like "PO", "Reference 3", etc.\n',
      }),
  })
  .openapi({
    description:
      'Custom messages to print on the shipping label for the package.  These are typically used to print invoice numbers, product numbers, or other internal reference numbers.  Not all carriers support label messages. The number of lines and the maximum length of each line also varies by carrier.\n\n|Carrier            |Max lines |Max line length\n|-------------------|----------|--------------------\n|USPS (Stamps.com)  |3         |60\n|FedEx              |3         |35 for the first line. 30 for additional lines.\n|UPS                |2         |35\n|OnTrac             |2         |25\n',
    required: ['reference1', 'reference2', 'reference3'],
    title: 'label_messages',
  })
  .openapi('LabelMessages')

const PackageCodeSchema = z
  .string()
  .regex(/^[a-z0-9]+(_[a-z0-9]+)*$/)
  .openapi({
    description:
      'A [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  Use the code `package` for custom or unknown package types.\n',
    example: 'small_flat_rate_box',
    title: 'package_code',
  })
  .openapi('PackageCode')

const TrackingNumberSchema = z
  .string()
  .min(1)
  .openapi({
    description: 'A tracking number for a package. The format depends on the carrier.',
    example: '1Z932R800392060079',
    title: 'tracking_number',
  })
  .openapi('TrackingNumber')

const PackageSchema = z
  .strictObject({
    content_description: z
      .string()
      .min(1)
      .max(35)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A short description of the package content. Required for shipments moving to, from, and through Mexico.\n',
        example: 'Hand knitted wool socks',
      }),
    dimensions: DimensionsSchema.exactOptional().openapi({ description: 'The package dimensions' }),
    external_package_id: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'An external package id.' }),
    form_download: OptionalLinkSchema.exactOptional().openapi({
      description: 'The form download for any customs that are needed',
      readOnly: true,
    }),
    insured_value: MonetaryValueSchema.default([{ amount: 0, currency: 'usd' }])
      .exactOptional()
      .openapi({
        description:
          'The insured value of the package.  Requires the `insurance_provider` field of the shipment to be set.\n',
      }),
    label_download: LabelDownloadSchema.exactOptional().openapi({
      description: 'The label download for the package',
      readOnly: true,
    }),
    label_messages: LabelMessagesSchema.exactOptional(),
    package_code: PackageCodeSchema.exactOptional().openapi({
      description:
        'The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.\n',
    }),
    package_id: SeIdSchema.exactOptional().openapi({
      description:
        'A string that uniquely identifies this [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/)',
    }),
    sequence: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Package sequence', readOnly: true }),
    tracking_number: TrackingNumberSchema.exactOptional().openapi({
      description: 'The tracking number for the package.  The format depends on the carrier.\n',
      readOnly: true,
    }),
    weight: WeightSchema.openapi({ description: 'The package weight' }),
  })
  .openapi({
    description:
      'A package associated with a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/)\n',
    required: ['weight'],
    title: 'package',
  })
  .openapi('Package')

const ShippingAddressSchema: z.ZodType<ShippingAddressType> = z
  .lazy(() =>
    AddressSchema.and(PartialShippingAddressSchema).openapi({ title: 'shipping_address' }),
  )
  .openapi('ShippingAddress')

const ServiceCodeSchema = z
  .string()
  .regex(/^[a-z0-9]+(_[a-z0-9-]+)* ?$/)
  .openapi({
    description:
      'A [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/), such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.\n',
    example: 'usps_first_class_mail',
    title: 'service_code',
  })
  .openapi('ServiceCode')

const DateSchema = z.iso
  .datetime({ offset: true })
  .regex(/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[-+]\d{2}:\d{2}))?$/)
  .openapi({
    description:
      'An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) string that represents a date, but not a specific time.  The value _may_ contain a time component, but it will be set to `00:00:00` UTC by ShipEngine.\n',
    example: '2018-09-23T00:00:00.000Z',
    title: 'date',
  })
  .openapi('Date')

const ShipmentStatusSchema = z
  .enum(['pending', 'processing', 'label_purchased', 'cancelled'])
  .openapi({ description: 'The possible shipment status values', title: 'shipment_status' })
  .openapi('ShipmentStatus')

const TagSchema = z
  .strictObject({
    name: z.string().min(1).openapi({ description: 'The tag name.', example: 'Fragile' }),
  })
  .openapi({
    description:
      'Tags are arbitrary strings that you can use to categorize shipments.  For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.\n',
    required: ['name'],
    title: 'tag',
  })
  .openapi('Tag')

const IdentifierTypeSchema = z
  .enum(['vat', 'eori', 'ssn', 'ein', 'tin', 'ioss', 'pan', 'voec'])
  .openapi({
    description:
      'Determines how FedEx will pickup your packages\n\n|Pickup Type    | Description\n|---------------|-----------------------------------------\n|`vat`          | The tax identifier is a Value Added Tax.\n|`eori`         | The tax identifier is an Economic Operators Registration and Identification Number (EORI).\n|`ssn`          | The tax identifier is a Social Security Number.\n|`ein`          | The tax identifier is an Employer Identification Number (EIN).\n|`tin`          | The tax identifier is a Tax Identification Number (TIN).\n|`ioss`         | The tax identifier is an Import One-Stop Shop (IOSS).\n|`pan`          | The tax identifier is a Permanent Account Number (PAN).\n|`voec`         | The tax identifier is a Norwegian VAT On E-Commerce(VOEC).\n',
    title: 'identifier_type',
  })
  .openapi('IdentifierType')

const TaxableEntityTypeSchema = z
  .enum(['shipper', 'recipient'])
  .openapi({
    description:
      'The taxable entity type for this tax item. Valid values include the following\n\n|Value       |Description\n|:---------  |:-----------------------------------------------------\n|`shipper`   | The shipper is responsible for this tax.\n|`recipient` | The recipient of the shipment is responsible for this tax.\n',
    title: 'taxable_entity_type',
  })
  .openapi('TaxableEntityType')

const TaxIdentifierSchema = z
  .strictObject({
    identifier_type: IdentifierTypeSchema,
    issuing_authority: z
      .string()
      .openapi({
        description:
          'The authority that issued this tax. This must be a valid 2 character ISO 3166 Alpha 2 country code.',
      }),
    taxable_entity_type: TaxableEntityTypeSchema,
    value: z.string().openapi({ description: 'The value of the identifier' }),
  })
  .openapi({
    description: 'A tax identifier object',
    required: ['taxable_entity_type', 'identifier_type', 'issuing_authority', 'value'],
    title: 'tax_identifier',
  })
  .openapi('TaxIdentifier')

const PartialShipmentSchema = z
  .strictObject({
    advanced_options: AdvancedShipmentOptionsSchema.exactOptional().openapi({
      description: 'Advanced shipment options.  These are entirely optional.',
    }),
    carrier_id: SeIdSchema.exactOptional().openapi({
      description: 'The carrier account that is billed for the shipping charges',
    }),
    confirmation: DeliveryConfirmationSchema.default('none')
      .exactOptional()
      .openapi({
        description: 'The type of delivery confirmation that is required for this shipment.',
      }),
    created_at: DateTimeSchema.exactOptional().openapi({
      description: 'The date and time that the shipment was created in ShipEngine.',
      readOnly: true,
    }),
    customs: InternationalShipmentOptionsSchema.nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Customs information.  This is usually only needed for international shipments.\n',
      }),
    external_order_id: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'ID that the Order Source assigned' }),
    external_shipment_id: z
      .string()
      .max(50)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A unique user-defined key to identify a shipment.  This can be used to retrieve the shipment.\n\n> **Warning:** The `external_shipment_id` is limited to 50 characters. Any additional characters will be truncated.\n',
      }),
    insurance_provider: InsuranceProviderSchema.default('none')
      .exactOptional()
      .openapi({
        description: 'The insurance provider to use for any insured packages in the shipment.\n',
      }),
    items: z
      .array(ShipmentItemSchema)
      .default([])
      .exactOptional()
      .openapi({
        description:
          'Describe the packages included in this shipment as related to potential metadata that was imported from\nexternal order sources\n',
      }),
    modified_at: DateTimeSchema.exactOptional().openapi({
      description: 'The date and time that the shipment was created or last modified.',
      readOnly: true,
    }),
    order_source_code: OrderSourceNameSchema.exactOptional(),
    origin_type: OriginTypeSchema.nullable()
      .exactOptional()
      .openapi({
        description: 'Indicates if the package will be picked up or dropped off by the carrier',
      }),
    packages: z
      .array(PackageSchema)
      .min(1)
      .exactOptional()
      .openapi({
        description:
          "The packages in the shipment.\n\n> **Note:** Some carriers only allow one package per shipment.  If you attempt to create a multi-package shipment for a carrier that doesn't allow it, an error will be returned.\n",
      }),
    return_to: ShippingAddressSchema.exactOptional().openapi({
      description: 'The return address for this shipment.  Defaults to the `ship_from` address.\n',
    }),
    service_code: ServiceCodeSchema.exactOptional().openapi({
      description:
        'The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.\n',
    }),
    ship_date: DateSchema.exactOptional().openapi({
      description:
        'The date that the shipment was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.\n',
    }),
    ship_from: ShippingAddressSchema.exactOptional().openapi({
      description:
        "The shipment's origin address. If you frequently ship from the same location, consider [creating a warehouse](https://www.shipengine.com/docs/reference/create-warehouse/).  Then you can simply specify the `warehouse_id` rather than the complete address each time.\n",
    }),
    ship_to: ShippingAddressSchema.exactOptional().openapi({
      description: "The recipient's mailing address",
    }),
    shipment_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the shipment',
      readOnly: true,
    }),
    shipment_number: z
      .string()
      .max(50)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A non-unique user-defined number used to identify a shipment.  If undefined, this will match the external_shipment_id of the shipment.\n\n> **Warning:** The `shipment_number` is limited to 50 characters. Any additional characters will be truncated.\n',
      }),
    shipment_status: ShipmentStatusSchema.default('pending')
      .exactOptional()
      .openapi({ description: 'The current status of the shipment', readOnly: true }),
    tags: z
      .array(TagSchema)
      .min(0)
      .default([])
      .exactOptional()
      .openapi({
        description:
          'Arbitrary tags associated with this shipment.  Tags can be used to categorize shipments, and shipments can be queried by their tags.\n',
        readOnly: true,
      }),
    tax_identifiers: z.array(TaxIdentifierSchema).nullable().exactOptional(),
    total_weight: WeightSchema.exactOptional().openapi({
      description: 'The combined weight of all packages in the shipment',
      readOnly: true,
    }),
    warehouse_id: SeIdSchema.nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'The [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) that the shipment is being shipped from.  Either `warehouse_id` or `ship_from` must be specified.\n',
      }),
  })
  .openapi({
    description:
      'The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.\n',
    title: 'partial_shipment',
    required: [],
  })
  .openapi('PartialShipment')

type ShipmentType = z.infer<typeof PartialShipmentSchema>

const AddressSchema: z.ZodType<AddressType> = z
  .lazy(() =>
    PartialAddressSchema.openapi({
      description:
        'Any residential or business mailing address, anywhere in the world.\n\n> **Note:** Either `name` or `company_name` must be set. Both may be specified, if relevant.\n',
      required: [
        'name',
        'phone',
        'address_line1',
        'city_locality',
        'state_province',
        'postal_code',
        'country_code',
        'address_residential_indicator',
      ],
      title: 'address',
    }),
  )
  .openapi('Address')

const PartialShippingAddressSchema = z
  .strictObject({
    instructions: z
      .string()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Additional text about how to handle the shipment at this address.\n',
      }),
  })
  .openapi({
    description: 'A complete or partial mailing address.',
    title: 'partial_shipping_address',
    required: [],
  })
  .openapi('PartialShippingAddress')

type ShippingAddressType = z.infer<typeof AddressSchema> &
  z.infer<typeof PartialShippingAddressSchema>

const AddFundsToCarrierRequestBodySchema = MonetaryValueSchema.openapi({
  description: 'An add funds to carrier request body',
  title: 'add_funds_to_carrier_request_body',
}).openapi('AddFundsToCarrierRequestBody')

const AddFundsToCarrierResponseBodySchema = z
  .strictObject({
    balance: MonetaryValueSchema.openapi({
      description: 'The current balance of the account',
      readOnly: true,
    }),
  })
  .openapi({
    description: 'The current balance of the requested carrier account',
    required: ['balance'],
    title: 'add_funds_to_carrier_response_body',
  })
  .openapi('AddFundsToCarrierResponseBody')

const AddFundsToInsuranceRequestBodySchema = MonetaryValueSchema.openapi({
  description: 'An add funds to insurance request body',
  title: 'add_funds_to_insurance_request_body',
}).openapi('AddFundsToInsuranceRequestBody')

const AddFundsToInsuranceResponseBodySchema = MonetaryValueSchema.openapi({
  description: 'Add funds to insurance response body',
  title: 'add_funds_to_insurance_response_body',
}).openapi('AddFundsToInsuranceResponseBody')

const ModifyBatchSchema = z
  .strictObject({
    rate_ids: z
      .array(SeIdSchema.openapi({ description: 'The Rate ID to be modified on the batch' }))
      .exactOptional()
      .openapi({ description: 'Array of Rate IDs to be modifed on the batch' }),
    shipment_ids: z
      .array(SeIdSchema.openapi({ description: 'The Shipment ID to be modified on the batch' }))
      .exactOptional()
      .openapi({ description: 'The Shipment Ids to be modified on the batch' }),
  })
  .openapi({ description: 'A modify batch object', title: 'modify_batch', required: [] })
  .openapi('ModifyBatch')

const AddToBatchRequestBodySchema = ModifyBatchSchema.openapi({
  description: 'An add to batch request body',
  title: 'add_to_batch_request_body',
}).openapi('AddToBatchRequestBody')

const AddressToValidateSchema = PartialAddressSchema.openapi({
  description: 'Any residential or business mailing address, anywhere in the world.\n',
  required: ['address_line1', 'city_locality', 'state_province', 'country_code'],
  title: 'address_to_validate',
}).openapi('AddressToValidate')

const ValidateAddressSchema = z
  .enum(['no_validation', 'validate_only', 'validate_and_clean'])
  .openapi({ description: 'The possible validate address values', title: 'validate_address' })
  .openapi('ValidateAddress')

const ValidateShipmentFieldsSchema = z
  .object({ validate_address: ValidateAddressSchema.default('no_validation').exactOptional() })
  .openapi({ title: 'validate_shipment_fields', required: [] })
  .openapi('ValidateShipmentFields')

const AddressValidatingShipmentSchema = ValidateShipmentFieldsSchema.and(PartialShipmentSchema)
  .openapi({
    description: 'An address validating shipment',
    required: ['shipment_id', 'carrier_id', 'service_code', 'ship_to', 'ship_from'],
    title: 'address_validating_shipment',
  })
  .openapi('AddressValidatingShipment')

const AddressValidationCodeSchema = z
  .enum([
    'a1000',
    'a1001',
    'a1002',
    'a1003',
    'a1004',
    'a1005',
    'a1006',
    'a1007',
    'a1008',
    'r1000',
    'r1001',
    'r1002',
    'r1003',
  ])
  .openapi({
    description: 'The error codes that can be returned by the address validation API',
    title: 'address_validation_code',
  })
  .openapi('AddressValidationCode')

const AddressValidationDetailCodeSchema = z
  .enum([
    'unsupported_country',
    'non_supported_country',
    'minimum_postal_code_verification_failed',
    'street_does_not_match_unique_street_name',
    'multiple_directionals',
    'multiple_matches',
    'suite_not_valid',
    'suite_missing',
    'incompatible_paired_labels',
    'invalid_house_number',
    'missing_house_number',
    'invalid_box_number',
    'invalid_charge_event',
    'missing_box_number',
    'missing_cmra_or_private_mail_box_number',
    'suite_has_no_secondaries',
    'postal_code_changed_or_added',
    'state_province_changed_or_added',
    'city_locality_changed_or_added',
    'urbanization_changed',
    'street_name_spelling_changed_or_added',
    'street_name_type_changed_or_added',
    'street_direction_changed_or_added',
    'suite_type_changed_or_added',
    'suite_unit_number_changed_or_added',
    'double_dependent_locality_changed_or_added',
    'subadministrative_area_changed_or_added',
    'subnational_area_changed_or_added',
    'po_box_changed_or_added',
    'premise_type_changed_or_added',
    'house_number_changed',
    'organization_changed_or_added',
    'partially_verified_to_state_level',
    'partially_verified_to_city_level',
    'partially_verified_to_street_level',
    'partially_verified_to_premise_level',
    'verified_to_state_level',
    'verified_to_city_level',
    'verified_to_street_level',
    'verified_to_premise_level',
    'verified_to_suite_level',
    'coded_to_street_lavel',
    'coded_to_neighborhood_level',
    'coded_to_community_level',
    'coded_to_state_level',
    'coded_to_rooftop_level',
    'coded_to_rooftop_interpolation_level',
    'name_max_length_exceeded',
    'phone_max_length_exceeded',
    'company_name_max_length_exceeded',
    'line1_min_max_length',
    'line2_max_length_exceeded',
    'line3_max_length_exceeded',
    'city_locality_max_length_exceeded',
    'state_province_max_length_exceeded',
    'invalid_postal_code',
    'country_invalid_length',
    'address_not_found',
  ])
  .openapi({
    description: 'The detailed error codes that can be returned by the address validation API',
    title: 'address_validation_detail_code',
  })
  .openapi('AddressValidationDetailCode')

const AddressValidationMessageTypeSchema = z
  .enum(['error', 'warning', 'info'])
  .openapi({
    description:
      'The different types of messages that can be returned by the address validation API',
    title: 'address_validation_message_type',
  })
  .openapi('AddressValidationMessageType')

const ResponseMessageSchema = z
  .strictObject({
    code: AddressValidationCodeSchema.openapi({ readOnly: true }),
    detail_code: AddressValidationDetailCodeSchema.nullable(),
    message: z
      .string()
      .min(1)
      .openapi({
        description: 'Message explaining the address validation error',
        example: 'Invalid Postal Code',
        readOnly: true,
      }),
    type: AddressValidationMessageTypeSchema.openapi({ readOnly: true }),
  })
  .openapi({
    description:
      'A response message that displays when additional info is needed for an address validation request.',
    required: ['code', 'message', 'type', 'detail_code'],
    title: 'response_message',
  })
  .openapi('ResponseMessage')

const AddressValidationStatusSchema = z
  .enum(['unverified', 'verified', 'warning', 'error'])
  .openapi({
    description: 'The possible address validation status values',
    title: 'address_validation_status',
  })
  .openapi('AddressValidationStatus')

const AddressValidationResultSchema = z
  .strictObject({
    matched_address: AddressSchema.nullable().openapi({
      description: 'The matched address found by the Shipengine API',
      readOnly: true,
    }),
    messages: z
      .array(ResponseMessageSchema)
      .default([])
      .openapi({
        description:
          'The list of messages that were generated during the address validation request.',
        readOnly: true,
      }),
    original_address: AddressSchema.openapi({
      description: 'The original address that was sent for validation',
    }),
    status: AddressValidationStatusSchema,
  })
  .openapi({
    description: 'An address validation result',
    required: ['status', 'original_address', 'matched_address', 'messages'],
    title: 'address_validation_result',
  })
  .openapi('AddressValidationResult')

const AlternativeIdentifierSchema = z
  .strictObject({
    type: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'The type of alternative_identifier that corresponds to the value.\n',
        example: 'last_mile_tracking_number',
      }),
    value: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'The value of the alternative_identifier.\n',
        example: '12345678912345678912',
      }),
  })
  .openapi({
    description:
      'Additional information some carriers may provide by which to identify a given label in their system. \n',
    title: 'alternative_identifier',
    required: [],
  })
  .openapi('AlternativeIdentifier')

const AncillaryServiceEndorsementSchema = z
  .enum([
    'none',
    'return_service_requested',
    'forwarding_service_requested',
    'address_service_requested',
    'change_service_requested',
    'leave_if_no_response',
  ])
  .openapi({
    description:
      "[Ancillary service endorsements](https://pe.usps.com/text/qsg300/Q507.htm) are used by mailers to request an addressee's new address and to provide the carrier with instructions on how to handle packages that are undeliverable as addressed.\n\n| Ancillary Service Endorsement  | Description\n|--------------------------------|-----------------------------------------------------\n| `none`                         | No ancillary service is requested. Depending on the carrier servive, the package may be forwarded, returned, or discarded.\n| `return_service_requested`     | The package is returned to the sender. If possible, notification of the new address is is included with the returned package.\n| `forwarding_service_requested` | Forward the package to the new address, if possible; otherwise, return it to the sender.\n| `address_service_requested`    | Forward the package to the new address, if possible; otherwise, return it to the sender. This is similar to `forwarding_service_requested`, but different restrictions and charges may apply.\n| `change_service_requested`     | The package is discarded. If possible, notification of the new address is sent to the sender.\n| `leave_if_no_response`         |\n",
    title: 'ancillary_service_endorsement',
  })
  .openapi('AncillaryServiceEndorsement')

const LabelFormatSchema = z
  .enum(['pdf', 'png', 'zpl'])
  .openapi({
    description:
      'The possible file formats in which shipping labels can be downloaded.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.\n\n|Label Format  | Supported Carriers\n|--------------|-----------------------------------\n|`pdf`         | All carriers\n|`png`         | `fedex` <br> `stamps_com` <br> `ups` <br> `usps`\n|`zpl`         | `access_worldwide` <br> `apc` <br> `asendia` <br> `dhl_global_mail` <br> `dhl_express` <br> `dhl_express_australia` <br> `dhl_express_canada` <br> `dhl_express_worldwide` <br> `dhl_express_uk` <br> `dpd` <br> `endicia` <br> `fedex` <br> `fedex_uk` <br> `firstmile` <br> `imex` <br> `newgistics` <br> `ontrac` <br> `rr_donnelley` <br> `stamps_com` <br> `ups` <br> `usps`\n',
    title: 'label_format',
  })
  .openapi('LabelFormat')

const LabelLayoutSchema = z
  .enum(['4x6', 'letter'])
  .openapi({
    description:
      'The available layouts (sizes) in which shipping labels can be downloaded.  The label format determines which sizes are supported.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.\n',
    title: 'label_layout',
  })
  .openapi('LabelLayout')

const BatchStatusSchema = z
  .enum([
    'open',
    'queued',
    'processing',
    'completed',
    'completed_with_errors',
    'archived',
    'notifying',
    'invalid',
  ])
  .openapi({ description: 'The possible batch status values', title: 'batch_status' })
  .openapi('BatchStatus')

const BatchSchema = z
  .strictObject({
    batch_errors_url: OptionalLinkSchema.openapi({
      description: 'Link to batch errors endpoint',
      readOnly: true,
    }),
    batch_id: SeIdSchema.openapi({
      description: 'A string that uniquely identifies the batch',
      readOnly: true,
    }),
    batch_labels_url: OptionalLinkSchema.openapi({ description: 'Link to batch labels query' }),
    batch_notes: z
      .string()
      .nullable()
      .default('')
      .openapi({
        description: 'Custom notes you can add for each created batch',
        example: 'Batch for morning shipment',
        readOnly: true,
      }),
    batch_number: z.string().min(0).openapi({ description: 'The batch number.', readOnly: true }),
    batch_shipments_url: OptionalLinkSchema.openapi({
      description: 'The batch shipments endpoint',
    }),
    completed: z
      .int32()
      .min(0)
      .openapi({
        description: 'The number of labels generated in the batch',
        example: 1,
        readOnly: true,
      }),
    count: z
      .int32()
      .min(0)
      .openapi({
        description: 'The total of errors, warnings, and completed properties',
        example: 2,
        readOnly: true,
      }),
    created_at: DateTimeSchema.openapi({
      description: 'The date and time the batch was created in ShipEngine',
      readOnly: true,
    }),
    errors: z
      .int32()
      .min(0)
      .openapi({
        description: 'The number of errors that occurred while generating the batch',
        example: 2,
        readOnly: true,
      }),
    external_batch_id: z
      .string()
      .min(0)
      .nullable()
      .openapi({
        description: 'A string that uniquely identifies the external batch',
        readOnly: true,
      }),
    form_download: OptionalLinkSchema.openapi({
      description: 'The form download for any customs that are needed',
      readOnly: true,
    }),
    forms: z
      .int32()
      .min(0)
      .openapi({
        description: 'The number of forms for customs that are available for download',
        example: 3,
        readOnly: true,
      }),
    label_download: LabelDownloadSchema.openapi({
      description: 'The label download for the batch',
      readOnly: true,
    }),
    label_format: LabelFormatSchema.default('pdf').openapi({ readOnly: true }),
    label_layout: LabelLayoutSchema.default('4x6').openapi({
      description: 'label layout',
      readOnly: true,
    }),
    processed_at: DateTimeSchema.nullable().openapi({
      description: 'The date and time the batch was processed in ShipEngine',
      readOnly: true,
    }),
    status: BatchStatusSchema.openapi({ readOnly: true }),
    warnings: z
      .int32()
      .min(0)
      .openapi({
        description: 'The number of warnings that occurred while generating the batch',
        example: 1,
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'Batches are an advanced feature of ShipEngine designed for users who need to generate hundreds or\nthousands of labels at a time.\n',
    required: [
      'label_layout',
      'label_format',
      'batch_id',
      'batch_number',
      'external_batch_id',
      'batch_notes',
      'created_at',
      'processed_at',
      'errors',
      'warnings',
      'completed',
      'forms',
      'count',
      'batch_shipments_url',
      'batch_labels_url',
      'batch_errors_url',
      'label_download',
      'form_download',
      'status',
    ],
    title: 'batch',
  })
  .openapi('Batch')

const BatchResponseErrorSchema = z
  .strictObject({
    error: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'Error message associated with the shipment.',
        example: 'Recipient address has not been verified.',
        readOnly: true,
      }),
    external_shipment_id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An external shipment id associated with the shipment',
        readOnly: true,
      }),
    shipment_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the shipment',
      readOnly: true,
    }),
  })
  .openapi({ description: 'A batch response error', title: 'batch_response_error', required: [] })
  .openapi('BatchResponseError')

const BatchesSortBySchema = z
  .enum(['ship_date', 'processed_at', 'created_at'])
  .openapi({ description: 'The possible batches sort by values', title: 'batches_sort_by' })
  .openapi('BatchesSortBy')

const ErrorCodeSchema = z
  .enum([
    'auto_fund_not_supported',
    'batch_cannot_be_modified',
    'carrier_conflict',
    'carrier_disconnected',
    'carrier_not_connected',
    'carrier_not_supported',
    'confirmation_not_supported',
    'default_warehouse_cannot_be_deleted',
    'field_conflict',
    'field_value_required',
    'forbidden',
    'identifier_conflict',
    'identifiers_must_match',
    'insufficient_funds',
    'invalid_address',
    'invalid_billing_plan',
    'invalid_field_value',
    'invalid_identifier',
    'invalid_status',
    'invalid_string_length',
    'label_images_not_supported',
    'meter_failure',
    'order_source_not_active',
    'rate_limit_exceeded',
    'refresh_not_supported',
    'request_body_required',
    'return_label_not_supported',
    'settings_not_supported',
    'subscription_inactive',
    'terms_not_accepted',
    'tracking_not_supported',
    'trial_expired',
    'unauthorized',
    'unknown',
    'unspecified',
    'verification_failure',
    'warehouse_conflict',
    'webhook_event_type_conflict',
  ])
  .openapi({ description: 'The error code specified for the failed API Call', title: 'error_code' })
  .openapi('ErrorCode')

const ErrorSourceSchema = z
  .enum(['carrier', 'order_source', 'shipengine'])
  .openapi({
    description:
      'The source of the error, as indicated by the name this informs us if the API call failed because of the\ncarrier, the order source, or the ShipEngine API itself.\n',
    title: 'error_source',
  })
  .openapi('ErrorSource')

const ErrorTypeSchema = z
  .enum(['account_status', 'business_rules', 'validation', 'security', 'system', 'integrations'])
  .openapi({ description: 'The type of error\n', title: 'error_type' })
  .openapi('ErrorType')

const ErrorSchema = z
  .strictObject({
    error_code: ErrorCodeSchema,
    error_source: ErrorSourceSchema,
    error_type: ErrorTypeSchema,
    message: z
      .string()
      .min(1)
      .openapi({
        description: 'An error message associated with the failed API call',
        example: 'Body of request cannot be null.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'The error structure that gets returned with almost all failed API calls\n',
    required: ['error_source', 'error_type', 'error_code', 'message'],
    title: 'error',
  })
  .openapi('Error')

const RateResponseStatusSchema = z
  .enum(['working', 'completed', 'partial', 'error'])
  .openapi({
    description: 'The possible rate response status values',
    title: 'rate_response_status',
  })
  .openapi('RateResponseStatus')

const BulkRateSchema = z
  .strictObject({
    created_at: DateTimeSchema.openapi({ readOnly: true }),
    errors: z
      .array(
        ErrorSchema.openapi({
          description: 'An error that occurred while retrieving the bulk rate',
          readOnly: true,
        }),
      )
      .openapi({
        description: 'An array of errors that were returned while retrieving the bulk rate',
        readOnly: true,
      }),
    rate_request_id: SeIdSchema.openapi({
      description: 'A string that uniquely identifies the rate request',
      readOnly: true,
    }),
    shipment_id: SeIdSchema.openapi({
      description: 'A string that uniquely identifies the shipment',
      readOnly: true,
    }),
    status: RateResponseStatusSchema.openapi({ readOnly: true }),
  })
  .openapi({
    description: 'A bulk rate',
    required: ['rate_request_id', 'shipment_id', 'created_at', 'status', 'errors'],
    title: 'bulk_rate',
  })
  .openapi('BulkRate')

const RateRequestBodySchema = z
  .strictObject({
    calculate_tax_amount: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Calculate the duties and tariffs for cross border shipments.' }),
    carrier_ids: z
      .array(SeIdSchema.openapi({ description: 'carrier ids' }))
      .min(1)
      .openapi({ description: 'Array of carrier ids to get rates for' }),
    is_return: z
      .boolean()
      .exactOptional()
      .openapi({ description: "Indicate if it's a return shipment" }),
    package_types: z.array(z.string().min(1)).exactOptional(),
    preferred_currency: CurrencySchema.exactOptional(),
    service_codes: z
      .array(z.string().min(1).openapi({ description: 'Item Service Codes' }))
      .exactOptional(),
  })
  .openapi({
    description: 'A rate request body',
    required: ['carrier_ids'],
    title: 'rate_request_body',
  })
  .openapi('RateRequestBody')

const RateRequestOptionsSchema = z
  .object({
    rate_options: RateRequestBodySchema.exactOptional().openapi({
      description: 'The rate options',
    }),
  })
  .openapi({ title: 'rate_request_options', required: [] })
  .openapi('RateRequestOptions')

const CalculateRatesRequestBodySchema = RateRequestOptionsSchema.openapi({
  description: 'A rate shipment request body',
  required: ['shipment_id', 'shipment'],
  title: 'calculate_rates_request_body',
}).openapi('CalculateRatesRequestBody')

const RateTypeSchema = z
  .enum(['check', 'shipment'])
  .openapi({ description: 'The possible rate type values', title: 'rate_type' })
  .openapi('RateType')

const ValidationStatusSchema = z
  .enum(['valid', 'invalid', 'has_warnings', 'unknown'])
  .openapi({ description: 'The possible validation status values', title: 'validation_status' })
  .openapi('ValidationStatus')

const RateSchema = z
  .strictObject({
    carrier_code: z.string().min(1).openapi({ description: 'carrier code', readOnly: true }),
    carrier_delivery_days: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The carrier delivery days', readOnly: true }),
    carrier_friendly_name: z
      .string()
      .min(1)
      .openapi({ description: 'carrier friendly name', readOnly: true }),
    carrier_id: SeIdSchema.openapi({
      description: 'A string that uniquely identifies the carrier',
      readOnly: true,
    }),
    carrier_nickname: z
      .string()
      .min(1)
      .openapi({ description: 'carrier nickname', readOnly: true }),
    confirmation_amount: MonetaryValueSchema.openapi({
      description: 'The confirmation amount',
      readOnly: true,
    }),
    delivery_days: z
      .int32()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The number of days estimated for delivery, this will show the _actual_ delivery\ntime if for example, the package gets shipped on a Friday\n',
        example: 5,
        readOnly: true,
      }),
    error_messages: z
      .array(z.string().min(0).openapi({ description: 'error message', readOnly: true }))
      .min(0)
      .openapi({ description: 'The error messages', readOnly: true }),
    estimated_delivery_date: DateSchema.exactOptional().openapi({ readOnly: true }),
    guaranteed_service: z
      .boolean()
      .openapi({ description: 'Indicates if the rate is guaranteed.', readOnly: true }),
    insurance_amount: MonetaryValueSchema.openapi({
      description: 'The insurance amount',
      readOnly: true,
    }),
    negotiated_rate: z
      .boolean()
      .openapi({ description: 'Indicates if the rates been negotiated', readOnly: true }),
    other_amount: MonetaryValueSchema.openapi({
      description: 'Any other charges associated with this rate',
      readOnly: true,
    }),
    package_type: z
      .string()
      .min(1)
      .nullable()
      .openapi({
        description: 'package type that this rate was estimated for',
        example: 'package',
        readOnly: true,
      }),
    rate_id: SeIdSchema.openapi({
      description: 'A string that uniquely identifies the rate',
      readOnly: true,
    }),
    rate_type: RateTypeSchema.openapi({ readOnly: true }),
    service_code: z
      .string()
      .min(1)
      .openapi({ description: 'service code for the rate', readOnly: true }),
    service_type: z.string().min(1).openapi({ description: 'service type', readOnly: true }),
    ship_date: z.iso
      .datetime({ offset: true })
      .min(1)
      .exactOptional()
      .openapi({ description: 'ship date', readOnly: true }),
    shipping_amount: MonetaryValueSchema.openapi({
      description: 'The shipping amount',
      readOnly: true,
    }),
    tax_amount: MonetaryValueSchema.exactOptional().openapi({
      description: 'Tariff and additional taxes associated with an international shipment.',
      readOnly: true,
    }),
    trackable: z
      .boolean()
      .openapi({ description: 'Indicates if rate is trackable', readOnly: true }),
    validation_status: ValidationStatusSchema.openapi({ readOnly: true }),
    warning_messages: z
      .array(z.string().min(0).openapi({ description: 'warning message', readOnly: true }))
      .min(0)
      .openapi({ description: 'The warning messages', readOnly: true }),
    zone: z
      .int32()
      .min(0)
      .nullable()
      .openapi({
        description:
          'Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of\ncustom zones that vary depending upon the ship_to and ship_from location\n',
        example: 6,
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A rate',
    required: [
      'rate_id',
      'rate_type',
      'carrier_id',
      'shipping_amount',
      'insurance_amount',
      'confirmation_amount',
      'other_amount',
      'zone',
      'package_type',
      'guaranteed_service',
      'negotiated_rate',
      'service_type',
      'service_code',
      'trackable',
      'carrier_code',
      'carrier_nickname',
      'carrier_friendly_name',
      'validation_status',
      'warning_messages',
      'error_messages',
    ],
    title: 'rate',
  })
  .openapi('Rate')

const RatesInformationSchema = z
  .strictObject({
    created_at: SeIdSchema.exactOptional().openapi({ description: 'When the rate was created' }),
    errors: z.array(ErrorSchema).exactOptional(),
    invalid_rates: z
      .array(RateSchema.openapi({ description: 'Invalid Shipment Rate', readOnly: true }))
      .default([])
      .exactOptional()
      .openapi({ description: 'An array of invalid shipment rates', readOnly: true }),
    rate_request_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the rate request',
      readOnly: true,
    }),
    rates: z
      .array(RateSchema.openapi({ description: 'Shipment Rates', readOnly: true }))
      .exactOptional()
      .openapi({ description: 'An array of shipment rates', readOnly: true }),
    shipment_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the shipment',
      readOnly: true,
    }),
    status: RateResponseStatusSchema.exactOptional().openapi({ readOnly: true }),
  })
  .openapi({
    description: 'A rates information resource',
    title: 'rates_information',
    required: [],
  })
  .openapi('RatesInformation')

const RateResponseSchema = z
  .strictObject({
    rate_response: RatesInformationSchema.exactOptional().openapi({
      description: 'The rates response',
    }),
  })
  .openapi({ title: 'rate_response', required: [] })
  .openapi('RateResponse')

const CalculateRatesResponseBodySchema = PartialShipmentSchema.and(RateResponseSchema)
  .openapi({
    description: 'A rate shipment response body',
    required: [
      'rate_response',
      'shipment_id',
      'ship_date',
      'created_at',
      'modified_at',
      'shipment_status',
      'return_to',
      'confirmation',
      'customs',
      'advanced_options',
      'insurance_provider',
      'tags',
      'packages',
      'total_weight',
    ],
    title: 'calculate_rates_response_body',
  })
  .openapi('CalculateRatesResponseBody')

const CarrierAdvancedOptionSchema = z
  .strictObject({
    default_value: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Default value of option', example: false, readOnly: true }),
    description: z
      .string()
      .min(0)
      .exactOptional()
      .openapi({ description: 'Description of option', readOnly: true }),
    name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'Name of advanced option',
        example: 'contains_alcohol',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'Advanced options that are specific to the carrier',
    title: 'carrier_advanced_option',
    required: [],
  })
  .openapi('CarrierAdvancedOption')

const PackageTypeSchema = z
  .strictObject({
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Provides a helpful description for the custom package.',
        example: 'Packaging for laptops',
      }),
    dimensions: DimensionsSchema.exactOptional().openapi({
      description: 'The custom dimensions for the package.',
    }),
    name: z.string().min(1).openapi({ example: 'laptop_box' }),
    package_code: PackageCodeSchema,
    package_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the package.',
    }),
  })
  .openapi({
    description: 'A package type that a carrier supports for shipment.',
    required: ['name', 'package_code'],
    title: 'package_type',
  })
  .openapi('PackageType')

const ServiceSchema = z
  .strictObject({
    carrier_code: SeIdSchema.exactOptional(),
    carrier_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the carrier',
      readOnly: true,
    }),
    domestic: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Supports domestic shipping', readOnly: true }),
    international: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Supports international shipping.', readOnly: true }),
    is_multi_package_supported: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Carrier supports multiple packages per shipment', readOnly: true }),
    name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'User friendly service name',
        example: 'USPS First Class Mail',
        readOnly: true,
      }),
    service_code: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'service code', example: 'usps_media_mail', readOnly: true }),
  })
  .openapi({ description: 'A service offered by the carrier', title: 'service', required: [] })
  .openapi('Service')

const CarrierSchema = z
  .strictObject({
    account_number: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'The account number that the carrier is connected to.',
        example: 'account_570827',
        readOnly: true,
      }),
    balance: z
      .float64()
      .min(0)
      .exactOptional()
      .openapi({ description: 'Current available balance', example: 3799.52, readOnly: true }),
    carrier_code: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the carrier.',
    }),
    carrier_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the carrier.',
      readOnly: true,
    }),
    friendly_name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Screen readable name', example: 'Stamps.com', readOnly: true }),
    has_multi_package_supporting_services: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Carrier supports multiple packages per shipment', readOnly: true }),
    nickname: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'Nickname given to the account when initially setting up the carrier.',
        example: 'ShipEngine Account - Stamps.com',
        readOnly: true,
      }),
    options: z
      .array(CarrierAdvancedOptionSchema.openapi({ readOnly: true }))
      .exactOptional()
      .openapi({
        description: 'A list of options that are available to that carrier',
        readOnly: true,
      }),
    packages: z
      .array(PackageTypeSchema.openapi({ readOnly: true }))
      .exactOptional()
      .openapi({
        description: 'A list of package types that are supported by the carrier',
        readOnly: true,
      }),
    primary: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Is this the primary carrier that is used by default when no carrier is specified in label/shipment creation',
        readOnly: true,
      }),
    requires_funded_amount: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the carrier requires funding to use its services',
        readOnly: true,
      }),
    services: z
      .array(ServiceSchema.openapi({ readOnly: true }))
      .exactOptional()
      .openapi({
        description: 'A list of services that are offered by the carrier',
        readOnly: true,
      }),
    supports_label_messages: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'The carrier supports adding custom label messages to an order.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A carrier object that represents a provider such as UPS, USPS, DHL, etc\nthat has been tied to the current account.\n',
    title: 'carrier',
    required: [],
  })
  .openapi('Carrier')

const CarrierCodeSchema = z
  .string()
  .regex(/^[a-z0-9]+(_[a-z0-9]+)*$/)
  .openapi({
    description:
      'A [shipping carrier](https://www.shipengine.com/docs/carriers/setup/), such as `fedex`, `dhl_express`, `stamps_com`, etc.\n',
    example: 'dhl_express',
    title: 'carrier_code',
  })
  .openapi('CarrierCode')

const CarrierNameSchema = z
  .enum([
    'access_worldwide',
    'amazon_buy_shipping',
    'amazon_shipping_uk',
    'apc',
    'asendia',
    'australia_post',
    'canada_post',
    'dhl_ecommerce',
    'dhl_express',
    'dhl_express_au',
    'dhl_express_ca',
    'dhl_express_uk',
    'dpd',
    'endicia',
    'fedex',
    'fedex_uk',
    'firstmile',
    'imex',
    'newgistics',
    'ontrac',
    'purolator_canada',
    'royal_mail',
    'rr_donnelley',
    'seko',
    'sendle',
    'stamps_com',
    'ups',
  ])
  .openapi({
    description: 'The shipping carriers that are supported by ShipEngine',
    title: 'carrier_name',
  })
  .openapi('CarrierName')

const CarrierNameWithSettingsSchema = z
  .enum(['dhl_express', 'fedex', 'newgistics', 'ups'])
  .openapi({
    description: 'The shipping carriers for which ShipEngine supports carrier settings',
    title: 'carrier_name_with_settings',
  })
  .openapi('CarrierNameWithSettings')

const RateRequestRateOptionsSchema = z
  .object({
    rate_options: RateRequestBodySchema.exactOptional().openapi({
      description: 'The rate options',
    }),
  })
  .openapi({ title: 'rate_request_rate_options', required: [] })
  .openapi('RateRequestRateOptions')

const CompareBulkRatesRequestBodySchema = RateRequestRateOptionsSchema.openapi({
  description: 'A rate shipments request body',
  required: ['rate_options'],
  title: 'compare_bulk_rates_request_body',
}).openapi('CompareBulkRatesRequestBody')

const CompareBulkRatesResponseBodySchema = z
  .array(BulkRateSchema)
  .openapi({ description: 'A bulk rate response body', title: 'compare_bulk_rates_response_body' })
  .openapi('CompareBulkRatesResponseBody')

const ConnectAccessWorldwideRequestBodySchema = z
  .strictObject({
    nickname: z
      .string()
      .min(1)
      .openapi({
        description: 'The nickname associated with the carrier connection',
        example: 'Stamps.com',
      }),
    password: z.string().min(1).openapi({ description: 'Access Worldwide Password' }),
    username: z.string().min(1).openapi({ description: 'Access Worldwide Username' }),
  })
  .openapi({
    description: 'An Access Worldwide account information request body',
    required: ['nickname', 'username', 'password'],
    title: 'connect_access_worldwide_request_body',
  })
  .openapi('ConnectAccessWorldwideRequestBody')

const EmailSchema = z
  .email()
  .min(1)
  .openapi({ description: 'An email address.', example: 'john.doe@example.com', title: 'email' })
  .openapi('Email')

const ConnectAmazonBuyShippingRequestBodySchema = z
  .strictObject({
    email: EmailSchema,
    merchant_seller_id: z.string().min(1),
    mws_auth_token: z.string().min(1),
    nickname: z
      .string()
      .min(1)
      .openapi({
        description: 'Nickname to be associated with the account connection',
        example: 'Test Amazon Buy Shipping',
      }),
  })
  .openapi({
    description: 'An Amazon account information request body',
    required: ['nickname', 'merchant_seller_id', 'email', 'mws_auth_token'],
    title: 'connect_amazon_buy_shipping_request_body',
  })
  .openapi('ConnectAmazonBuyShippingRequestBody')

const ConnectAmazonShippingUkSchema = z
  .strictObject({
    auth_code: z.string().min(1).openapi({ description: 'Amazon UK Shipping auth code.' }),
    nickname: z
      .string()
      .min(1)
      .openapi({
        description: 'The nickname associated with the carrier connection',
        example: 'Stamps.com',
      }),
  })
  .openapi({
    description: 'An Amazon Shipping UK account information request body',
    required: ['nickname', 'auth_code'],
    title: 'connect_amazon_shipping_uk',
  })
  .openapi('ConnectAmazonShippingUk')

const ConnectApcRequestBodySchema = z
  .strictObject({
    nickname: z
      .string()
      .min(1)
      .openapi({ description: 'The nickname for the APC account', example: 'APC carrier account' }),
    password: z
      .string()
      .min(1)
      .openapi({ description: 'The password for the APC account', example: 12345 }),
    username: z
      .string()
      .min(1)
      .openapi({ description: 'The username for the APC account', example: 'john_doe' }),
  })
  .openapi({
    description: 'An APC account information request body',
    required: ['nickname', 'username', 'password'],
    title: 'connect_apc_request_body',
  })
  .openapi('ConnectApcRequestBody')

const ConnectAsendiaRequestBodySchema = z
  .strictObject({
    account_number: z.string().min(1).openapi({ description: 'Asendia account number' }),
    ftp_password: z.string().min(1).openapi({ description: 'FTP password' }),
    ftp_username: z.string().min(1).openapi({ description: 'FTP username' }),
    nickname: z
      .string()
      .min(1)
      .openapi({ description: 'The nickname of the Asendia account', example: 'Asendia account' }),
  })
  .openapi({
    description: 'An Asendia account information request body',
    required: ['nickname', 'account_number', 'ftp_username', 'ftp_password'],
    title: 'connect_asendia_request_body',
  })
  .openapi('ConnectAsendiaRequestBody')

const ConnectAustraliaPostRequestBodySchema = z
  .strictObject({
    account_number: z.string().min(1).openapi({ description: 'Account number' }),
    api_key: z.string().min(1).openapi({ description: 'API key' }),
    api_secret: z.string().min(1).openapi({ description: 'API secret' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
  })
  .openapi({
    description: 'An Australia Post account information request body',
    required: ['account_number', 'api_key', 'api_secret', 'nickname'],
    title: 'connect_australia_post_request_body',
  })
  .openapi('ConnectAustraliaPostRequestBody')

const ConnectCanadaPostRequestBodySchema = z
  .strictObject({
    account_number: z.string().min(1).openapi({ description: 'Canada Post Account Number' }),
    api_key: z.string().min(1).openapi({ description: 'Canada Post Account API Key' }),
    api_secret: z.string().min(1).openapi({ description: 'Canada Post Account API Secret' }),
    contract_id: z.string().min(1).openapi({ description: 'Canada Post Account Contract ID' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
  })
  .openapi({
    description: 'A Canada Post account information request body',
    required: ['nickname', 'api_key', 'api_secret', 'account_number', 'contract_id'],
    title: 'connect_canada_post_request_body',
  })
  .openapi('ConnectCanadaPostRequestBody')

const ConnectDhlEcommerceRequestBodySchema = z
  .strictObject({
    account_number: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ deprecated: true, description: 'Account number' }),
    ancillary_endorsement: AncillaryServiceEndorsementSchema.exactOptional(),
    api_key: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The DHL E-Commerce API key. This field is optional, but if not set you will not be able to get rates for this account.\n',
      }),
    api_secret: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The DHL E-Commerce API secret. This field is optional, but if not set you will not be able to get rates for this account.\n',
      }),
    client_id: z.string().min(1).openapi({ description: 'The client id' }),
    distribution_center: z.string().min(1).openapi({ description: 'The distribution center' }),
    ftp_password: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ deprecated: true, description: 'FTP password' }),
    ftp_username: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ deprecated: true, description: 'FTP username' }),
    nickname: z
      .string()
      .min(1)
      .openapi({ description: 'A nickname to help you identify this account' }),
    password: z.string().min(1).openapi({ description: 'The account password' }),
    pickup_number: z.string().min(1).openapi({ description: 'The pickup number' }),
    registration_id: z.string().exactOptional(),
    software_name: z.string().exactOptional(),
    sold_to: z.string().exactOptional().openapi({ description: 'Sold To field' }),
    username: z.string().min(1).openapi({ description: 'The account username' }),
  })
  .openapi({
    description: 'A DHL Ecommerce account information request body',
    required: [
      'nickname',
      'client_id',
      'username',
      'password',
      'pickup_number',
      'distribution_center',
    ],
    title: 'connect_dhl_ecommerce_request_body',
  })
  .openapi('ConnectDhlEcommerceRequestBody')

const ConnectDhlExpressRequestBodySchema = z
  .strictObject({
    account_number: z.string().min(1).openapi({ description: 'Account number' }),
    country_code: CountryCodeSchema.exactOptional(),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
    password: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Required if site id is provided' }),
    site_id: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Required if password is provided' }),
  })
  .openapi({
    description: 'A DHL express account information request body',
    required: ['nickname', 'account_number'],
    title: 'connect_dhl_express_request_body',
  })
  .openapi('ConnectDhlExpressRequestBody')

const ConnectDhlExpressAuRequestBodySchema = z
  .strictObject({
    account_number: z.string().min(1).openapi({ description: 'Account number' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
  })
  .openapi({
    description: 'A DHL Express AU account information request body',
    required: ['nickname', 'account_number'],
    title: 'connect_dhl_express_au_request_body',
  })
  .openapi('ConnectDhlExpressAuRequestBody')

const ConnectDhlExpressCaRequestBodySchema = z
  .strictObject({
    account_number: z.string().min(1).openapi({ description: 'Account number' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
  })
  .openapi({
    description: 'A DHL Express CA account information request body',
    required: ['nickname', 'account_number'],
    title: 'connect_dhl_express_ca_request_body',
  })
  .openapi('ConnectDhlExpressCaRequestBody')

const ConnectDhlExpressUkRequestBodySchema = z
  .strictObject({
    account_number: z.string().min(1).openapi({ description: 'Account number' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
    password: z.string().min(1).openapi({ description: 'Password' }),
    site_id: SeIdSchema.openapi({ description: 'A string that uniquely identifies the site' }),
  })
  .openapi({
    description: 'A DHL Express UK account information request body',
    required: ['account_number', 'site_id', 'password', 'nickname'],
    title: 'connect_dhl_express_uk_request_body',
  })
  .openapi('ConnectDhlExpressUkRequestBody')

const ConnectDpdRequestBodySchema = z
  .strictObject({
    account_number: z.string().min(1).openapi({ description: 'Account number' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
    password: z.string().min(1).openapi({ description: 'Password' }),
  })
  .openapi({
    description: 'A DPD account information request body',
    required: ['account_number', 'password', 'nickname'],
    title: 'connect_dpd_request_body',
  })
  .openapi('ConnectDpdRequestBody')

const ConnectEndiciaRequestBodySchema = z
  .strictObject({
    account: z.string().min(1).openapi({ description: 'Account' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
    passphrase: z.string().min(1).openapi({ description: 'Passphrase' }),
  })
  .openapi({
    description: 'An Endicia account information request body',
    required: ['nickname', 'account', 'passphrase'],
    title: 'connect_endicia_request_body',
  })
  .openapi('ConnectEndiciaRequestBody')

const ConnectFedexRequestBodySchema = z
  .strictObject({
    account_number: z.string().min(1).openapi({ description: 'Account number' }),
    address1: z.string().min(1).openapi({ description: 'Address' }),
    address2: z.string().min(1).exactOptional().openapi({ description: 'Address' }),
    agree_to_eula: z
      .boolean()
      .openapi({
        description: 'Boolean signaling agreement to the Fedex End User License Agreement',
      }),
    city: z.string().min(1).openapi({ description: 'The city' }),
    company: z.string().min(1).exactOptional().openapi({ description: 'The company' }),
    country_code: z.string().min(1).openapi({ description: 'Country code' }),
    email: EmailSchema.openapi({ description: 'The email address' }),
    first_name: z.string().min(1).openapi({ description: 'First name' }),
    last_name: z.string().min(1).openapi({ description: 'Last name' }),
    meter_number: z.string().min(1).exactOptional().openapi({ description: 'Meter number' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
    phone: z.string().min(1).openapi({ description: 'Phone number' }),
    postal_code: z.string().min(1).openapi({ description: 'Postal Code' }),
    state: z.string().min(1).openapi({ description: 'State' }),
  })
  .openapi({
    description: 'A Fedex account information request body',
    required: [
      'account_number',
      'address1',
      'city',
      'country_code',
      'email',
      'first_name',
      'last_name',
      'phone',
      'postal_code',
      'state',
      'nickname',
      'agree_to_eula',
    ],
    title: 'connect_fedex_request_body',
  })
  .openapi('ConnectFedexRequestBody')

const ConnectFedexUkRequestBodySchema = z
  .strictObject({
    account_number: z.string().min(1).openapi({ description: 'Account number' }),
    address1: z.string().min(1).openapi({ description: 'Address' }),
    address2: z.string().min(1).exactOptional().openapi({ description: 'Address' }),
    agree_to_eula: z
      .boolean()
      .openapi({
        description: 'Boolean signaling agreement to the Fedex End User License Agreement',
      }),
    city: z.string().min(1).openapi({ description: 'The city' }),
    company: z.string().min(1).exactOptional().openapi({ description: 'The company' }),
    country_code: z.string().min(1).openapi({ description: 'Country code' }),
    email: EmailSchema.openapi({ description: 'The email address' }),
    first_name: z.string().min(1).openapi({ description: 'First name' }),
    last_name: z.string().min(1).openapi({ description: 'Last name' }),
    meter_number: z.string().min(1).exactOptional().openapi({ description: 'Meter number' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
    phone: z.string().min(1).openapi({ description: 'Phone number' }),
    postal_code: z.string().min(1).openapi({ description: 'Postal Code' }),
    state: z.string().min(1).openapi({ description: 'State' }),
  })
  .openapi({
    description: 'A Fedex UK account information request body',
    required: [
      'account_number',
      'address1',
      'city',
      'country_code',
      'email',
      'first_name',
      'last_name',
      'phone',
      'postal_code',
      'state',
      'nickname',
      'agree_to_eula',
    ],
    title: 'connect_fedex_uk_request_body',
  })
  .openapi('ConnectFedexUkRequestBody')

const ConnectFirstmileRequestBodySchema = z
  .strictObject({
    mailer_id: SeIdSchema.openapi({ description: 'A string that uniquely identifies the mailer' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
    password: z.string().min(1).openapi({ description: 'Password' }),
    profile_name: z.string().min(1).exactOptional().openapi({ description: 'Profile name' }),
  })
  .openapi({
    description: 'A First Mile account information request body',
    required: ['nickname', 'mailer_id', 'password'],
    title: 'connect_firstmile_request_body',
  })
  .openapi('ConnectFirstmileRequestBody')

const ConnectImexRequestBodySchema = z
  .strictObject({
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
    password: z.string().min(1).openapi({ description: 'Password' }),
    username: z.string().min(1).openapi({ description: 'Username' }),
  })
  .openapi({
    description: 'An Imex account information request body',
    required: ['nickname', 'username', 'password'],
    title: 'connect_imex_request_body',
  })
  .openapi('ConnectImexRequestBody')

const ConnectNewgisticsRequestBodySchema = z
  .strictObject({
    induction_site: z.string().min(1).openapi({ description: 'Induction site' }),
    mailer_id: z.int32().min(0).exactOptional().openapi({ description: 'Mailer id' }),
    merchant_id: z.int32().min(0).exactOptional().openapi({ description: 'Merchant id' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
  })
  .openapi({
    description: 'A Newgistics account information request body',
    required: ['induction_site', 'nickname'],
    title: 'connect_newgistics_request_body',
  })
  .openapi('ConnectNewgisticsRequestBody')

const ConnectOntracRequestBodySchema = z
  .strictObject({
    account_number: z.string().min(1).openapi({ description: 'Account number' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
    password: z.string().min(1).openapi({ description: 'Password' }),
  })
  .openapi({
    description: 'An Ontrac account information request body',
    required: ['nickname', 'account_number', 'password'],
    title: 'connect_ontrac_request_body',
  })
  .openapi('ConnectOntracRequestBody')

const ConnectPurolatorRequestBodySchema = z
  .strictObject({
    account_number: z.string().min(1).openapi({ description: 'Account number' }),
    activation_key: z.string().min(1).openapi({ description: 'Activation key' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
  })
  .openapi({
    description: 'A Purolator account information request body',
    required: ['account_number', 'activation_key', 'nickname'],
    title: 'connect_purolator_request_body',
  })
  .openapi('ConnectPurolatorRequestBody')

const ConnectRoyalMailRequestBodySchema = z
  .strictObject({
    account_number: z.string().min(1).openapi({ description: 'Account number' }),
    city: z.string().min(1).openapi({ description: 'City' }),
    company_name: z.string().min(1).exactOptional().openapi({ description: 'Company name' }),
    contact_name: z.string().min(1).openapi({ description: 'Contact name' }),
    email: EmailSchema.exactOptional().openapi({ description: 'The email address' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
    oba_email: EmailSchema.exactOptional().openapi({ description: 'The oba email address' }),
    phone: z.string().min(1).exactOptional().openapi({ description: 'Phone' }),
    postal_code: z.string().min(1).openapi({ description: 'Postal code' }),
    street_line1: z.string().min(1).exactOptional().openapi({ description: 'Street line1' }),
    street_line2: z.string().min(1).exactOptional().openapi({ description: 'Street line2' }),
    street_line3: z.string().min(1).exactOptional().openapi({ description: 'Street line3' }),
  })
  .openapi({
    description: 'A Royal Mail account information request body',
    required: ['account_number', 'contact_name', 'city', 'postal_code', 'nickname'],
    title: 'connect_royal_mail_request_body',
  })
  .openapi('ConnectRoyalMailRequestBody')

const ConnectRrDonnelleyRequestBodySchema = z
  .strictObject({
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
    password: z.string().min(1).openapi({ description: 'Password' }),
    username: z.string().min(1).openapi({ description: 'Username' }),
  })
  .openapi({
    description: 'A RR Donnelley account information request body',
    required: ['nickname', 'username', 'password'],
    title: 'connect_rr_donnelley_request_body',
  })
  .openapi('ConnectRrDonnelleyRequestBody')

const ConnectSekoRequestBodySchema = z
  .strictObject({
    access_key: z.string().min(1).openapi({ description: 'Seko Account Access Key' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
  })
  .openapi({
    description: 'A SEKO account information request body',
    required: ['nickname', 'access_key'],
    title: 'connect_seko_request_body',
  })
  .openapi('ConnectSekoRequestBody')

const ConnectSendleRequestBodySchema = z
  .strictObject({
    api_key: z.string().min(1).openapi({ description: 'API key' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
    sendle_id: SeIdSchema.openapi({ description: 'A string that uniquely identifies the sendle' }),
  })
  .openapi({
    description: 'A Sendle account information request body',
    required: ['nickname', 'sendle_id', 'api_key'],
    title: 'connect_sendle_request_body',
  })
  .openapi('ConnectSendleRequestBody')

const ConnectStampsRequestBodySchema = z
  .strictObject({
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
    password: z.string().min(1).openapi({ description: 'Password' }),
    username: z.string().min(1).openapi({ description: 'Username' }),
  })
  .openapi({
    description: 'A Stamps account information request body',
    required: ['nickname', 'username', 'password'],
    title: 'connect_stamps_request_body',
  })
  .openapi('ConnectStampsRequestBody')

const UpsInvoiceSchema = z
  .strictObject({
    control_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the control',
    }),
    invoice_amount: z.float64().min(0).exactOptional(),
    invoice_currency_code: z.string().exactOptional(),
    invoice_date: z.iso
      .datetime({ offset: true })
      .min(1)
      .exactOptional()
      .openapi({ description: 'invoice date' }),
    invoice_number: z.string().min(1).exactOptional().openapi({ description: 'invoice number' }),
  })
  .openapi({ description: 'UPS invoice', title: 'ups_invoice', required: [] })
  .openapi('UpsInvoice')

const ConnectUpsRequestBodySchema = z
  .strictObject({
    account_country_code: z.string().min(1).openapi({ description: 'Account country code' }),
    account_number: z.string().min(1).openapi({ description: 'Account number' }),
    account_postal_code: z.string().min(1).openapi({ description: 'Account postal code' }),
    address1: z.string().min(1).openapi({ description: 'Address Line 1' }),
    address2: z.string().min(1).exactOptional().openapi({ description: 'Address Line 2' }),
    agree_to_technology_agreement: z
      .boolean()
      .openapi({
        description:
          'The Agreement to the [UPS Technology Agreement](https://www.ups.com/assets/resources/media/UTA_with_EUR.pdf)',
      }),
    city: z.string().min(1).openapi({ description: 'City' }),
    company: z.string().min(1).openapi({ description: 'Company' }),
    country_code: z.string().min(1).openapi({ description: 'Country code' }),
    email: EmailSchema.openapi({ description: 'The email address' }),
    first_name: z.string().min(1).openapi({ description: 'First name' }),
    invoice: UpsInvoiceSchema.exactOptional().openapi({ description: 'The UPS invoice' }),
    invoice_amount: z.float64().exactOptional().openapi({ description: 'The invoice amount' }),
    invoice_currency_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The invoice currency code' }),
    last_name: z.string().min(1).openapi({ description: 'Last name' }),
    nickname: z.string().min(1).openapi({ description: 'Nickname' }),
    phone: z.string().min(1).openapi({ description: 'Phone' }),
    postal_code: z.string().min(1).openapi({ description: 'Postal code' }),
    state: z.string().min(1).openapi({ description: 'State' }),
    title: z.string().min(1).exactOptional().openapi({ description: 'Title' }),
  })
  .openapi({
    description: 'A UPS account information request body',
    required: [
      'nickname',
      'account_number',
      'account_country_code',
      'account_postal_code',
      'first_name',
      'last_name',
      'company',
      'address1',
      'city',
      'state',
      'postal_code',
      'country_code',
      'email',
      'phone',
      'agree_to_technology_agreement',
    ],
    title: 'connect_ups_request_body',
  })
  .openapi('ConnectUpsRequestBody')

const ConnectCarrierRequestBodySchema = z
  .xor([
    ConnectAccessWorldwideRequestBodySchema,
    ConnectAmazonBuyShippingRequestBodySchema,
    ConnectAmazonShippingUkSchema,
    ConnectApcRequestBodySchema,
    ConnectAsendiaRequestBodySchema,
    ConnectAustraliaPostRequestBodySchema,
    ConnectCanadaPostRequestBodySchema,
    ConnectDhlEcommerceRequestBodySchema,
    ConnectDhlExpressRequestBodySchema,
    ConnectDhlExpressAuRequestBodySchema,
    ConnectDhlExpressCaRequestBodySchema,
    ConnectDhlExpressUkRequestBodySchema,
    ConnectDpdRequestBodySchema,
    ConnectEndiciaRequestBodySchema,
    ConnectFedexRequestBodySchema,
    ConnectFedexUkRequestBodySchema,
    ConnectFirstmileRequestBodySchema,
    ConnectImexRequestBodySchema,
    ConnectNewgisticsRequestBodySchema,
    ConnectOntracRequestBodySchema,
    ConnectPurolatorRequestBodySchema,
    ConnectRoyalMailRequestBodySchema,
    ConnectRrDonnelleyRequestBodySchema,
    ConnectSekoRequestBodySchema,
    ConnectSendleRequestBodySchema,
    ConnectStampsRequestBodySchema,
    ConnectUpsRequestBodySchema,
  ])
  .openapi({ title: 'connect_carrier_request_body' })
  .openapi('ConnectCarrierRequestBody')

const ConnectCarrierResponseBodySchema = z
  .strictObject({
    carrier_id: SeIdSchema.openapi({
      description: 'A string that uniquely identifies the carrier',
    }),
  })
  .openapi({
    description: 'A connect account response body',
    required: ['carrier_id'],
    title: 'connect_carrier_response_body',
  })
  .openapi('ConnectCarrierResponseBody')

const ConnectInsurerRequestBodySchema = z
  .strictObject({ email: EmailSchema, policy_id: z.string().min(1) })
  .openapi({
    description: 'A create shipsurance connection request body',
    required: ['email', 'policy_id'],
    title: 'connect_insurer_request_body',
  })
  .openapi('ConnectInsurerRequestBody')

const ConnectInsurerResponseBodySchema = z
  .object({})
  .openapi({ title: 'connect_insurer_response_body' })
  .openapi('ConnectInsurerResponseBody')

const ContactDetailsSchema = z
  .object({
    email: EmailSchema,
    name: z.string().min(1),
    phone: z.string().min(7).openapi({ description: 'Phone number associated' }),
  })
  .openapi({ required: ['name', 'email', 'phone'], title: 'contact_details' })
  .openapi('ContactDetails')

const CreateShipmentResponseBodyFieldsSchema = z
  .object({
    address_validation: AddressValidationResultSchema.exactOptional().openapi({
      description: 'The address validation',
    }),
    errors: z
      .array(
        z
          .string()
          .min(1)
          .openapi({
            description: 'An error that occurred while creating a shipment.',
            example: "Parameter value '100000000.00' is out of range.",
          }),
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'An array of errors that occurred while creating shipment.',
        readOnly: true,
      }),
  })
  .openapi({ title: 'create_shipment_response_body_fields', required: [] })
  .openapi('CreateShipmentResponseBodyFields')

const CreateAndValidateShipmentSchema = PartialShipmentSchema.and(
  CreateShipmentResponseBodyFieldsSchema,
)
  .openapi({
    description: 'A create and validate shipment resource',
    title: 'create_and_validate_shipment',
  })
  .openapi('CreateAndValidateShipment')

const CreateBatchRequestBodySchema = z
  .strictObject({
    batch_notes: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'Add custom messages for a particular batch',
        example: 'This is my batch',
      }),
    external_batch_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the external batch',
    }),
    rate_ids: z
      .array(SeIdSchema)
      .exactOptional()
      .openapi({ description: 'Array of rate IDs used in the batch' }),
    shipment_ids: z
      .array(SeIdSchema)
      .exactOptional()
      .openapi({ description: 'Array of shipment IDs used in the batch' }),
  })
  .openapi({
    description: 'A create batch request body',
    title: 'create_batch_request_body',
    required: [],
  })
  .openapi('CreateBatchRequestBody')

const CreateBatchResponseBodySchema = BatchSchema.openapi({
  description: 'A create batch response body',
  title: 'create_batch_response_body',
}).openapi('CreateBatchResponseBody')

const DisplaySchemeSchema = z
  .enum(['label', 'qr_code', 'label_and_qr_code'])
  .openapi({
    description: 'The display format that the label should be shown in.',
    title: 'display_scheme',
  })
  .openapi('DisplayScheme')

const LabelDownloadTypeSchema = z
  .enum(['url', 'inline'])
  .openapi({
    description:
      'There are two different ways to [download a label](https://www.shipengine.com/docs/labels/downloading/):\n\n|Label Download Type | Description\n|--------------------|------------------------------\n|`url`               |You will receive a URL, which you can use to download the label in a separate request. The URL will remain valid for 90 days.<br><br>This is the default if `label_download_type` is unspecified.\n|`inline`            |You will receive the Base64-encoded label as part of the response. No need for a second request to download the label.\n',
    title: 'label_download_type',
  })
  .openapi('LabelDownloadType')

const PurchaseLabelWithoutShipmentSchema = z
  .strictObject({
    display_scheme: DisplaySchemeSchema.default('label')
      .exactOptional()
      .openapi({ description: 'The display format that the label should be shown in.' }),
    label_download_type: LabelDownloadTypeSchema.exactOptional(),
    label_format: LabelFormatSchema.default('pdf').exactOptional(),
    label_layout: LabelLayoutSchema.default('4x6').exactOptional(),
    validate_address: ValidateAddressSchema.exactOptional(),
  })
  .openapi({
    description: 'A purchase label without shipment resource',
    title: 'purchase_label_without_shipment',
    required: [],
  })
  .openapi('PurchaseLabelWithoutShipment')

const CreateLabelFromRateRequestBodySchema = PurchaseLabelWithoutShipmentSchema.openapi({
  description: 'A purchase label without shipment request body',
  title: 'create_label_from_rate_request_body',
}).openapi('CreateLabelFromRateRequestBody')

const LabelChargeEventSchema = z
  .enum(['carrier_default', 'on_creation', 'on_carrier_acceptance'])
  .openapi({
    description: "Determines when the user's account will be charged for the label.",
    title: 'label_charge_event',
  })
  .openapi('LabelChargeEvent')

const LinkSchema: z.ZodType<LinkType> = z
  .lazy(() =>
    OptionalLinkSchema.openapi({
      description: 'A link to a related resource',
      required: ['href'],
      title: 'link',
    }),
  )
  .openapi('Link')

const ImageIdSchema = z
  .string()
  .min(4)
  .openapi({
    description: 'Used to identify an image resource.',
    example: 'img_DtBXupDBxREpHnwEXhTfgK',
    title: 'image_id',
  })
  .openapi('ImageId')

const ShipmentSchema: z.ZodType<ShipmentType> = z
  .lazy(() =>
    PartialShipmentSchema.openapi({
      description:
        'The information necessary to ship a package, such as the origin, the destination, the carrier service, and the package dimensions and weight.\n\n> **Note:** Either `ship_from` or `warehouse_id` must be set.\n',
      required: [
        'shipment_id',
        'carrier_id',
        'service_code',
        'ship_date',
        'created_at',
        'modified_at',
        'shipment_status',
        'ship_to',
        'ship_from',
        'warehouse_id',
        'return_to',
        'confirmation',
        'customs',
        'advanced_options',
        'insurance_provider',
        'tags',
        'packages',
        'total_weight',
      ],
      title: 'shipment',
    }),
  )
  .openapi('Shipment')

const LabelStatusSchema = z
  .enum(['processing', 'completed', 'error', 'voided'])
  .openapi({
    description:
      'The possible statuses that a [shipping label](https://www.shipengine.com/docs/labels/create-a-label/) can be in.\n\n|Status       |Description\n|:------------|:-----------------------------------------------------\n|`processing` |When labels are created in a [batch](https://www.shipengine.com/docs/labels/bulk/), it may take a few minutes for all of the labels in the batch to be created.  During this period, they will be in `processing` status.\n|`completed`  |The label was successfully created\n|`error`      |The label could not be created due to an error, such as an invalid delivery address\n|`voided`     |The label has been [voided](https://www.shipengine.com/docs/labels/voiding/)\n',
    title: 'label_status',
  })
  .openapi('LabelStatus')

const TrackingStatusSchema = z
  .enum(['unknown', 'in_transit', 'error', 'delivered'])
  .openapi({
    description: 'The different statuses that can apply to a shipment.',
    title: 'tracking_status',
  })
  .openapi('TrackingStatus')

const LabelSchema = z
  .strictObject({
    alternative_identifiers: z
      .array(AlternativeIdentifierSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Additional information some carriers may provide by which to identify a given label in their system. \n',
        readOnly: true,
      }),
    batch_id: SeIdSchema.exactOptional().openapi({
      description:
        'If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.\n',
      readOnly: true,
    }),
    carrier_code: CarrierCodeSchema.exactOptional().openapi({
      description:
        'The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.\n',
      readOnly: true,
    }),
    carrier_id: SeIdSchema.exactOptional().openapi({
      description:
        'The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label\n',
      readOnly: true,
    }),
    charge_event: LabelChargeEventSchema.exactOptional().openapi({
      description: 'The label charge event.\n',
    }),
    created_at: DateTimeSchema.exactOptional().openapi({
      description: 'The date and time that the label was created in ShipEngine.',
      readOnly: true,
    }),
    display_scheme: DisplaySchemeSchema.default('label')
      .exactOptional()
      .openapi({ description: 'The display format that the label should be shown in.' }),
    form_download: LinkSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'The link to download the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.\n',
        readOnly: true,
      }),
    insurance_claim: LinkSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.\n',
        readOnly: true,
      }),
    insurance_cost: MonetaryValueSchema.exactOptional().openapi({
      description:
        'The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.\n',
      readOnly: true,
    }),
    is_international: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether this is an international shipment.  That is, the originating country and destination country are different.\n',
        readOnly: true,
      }),
    is_return_label: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.\n',
      }),
    label_download: LabelDownloadSchema.exactOptional().openapi({ readOnly: true }),
    label_download_type: LabelDownloadTypeSchema.default('url')
      .exactOptional()
      .openapi({ writeOnly: true }),
    label_format: LabelFormatSchema.default('pdf')
      .exactOptional()
      .openapi({
        description:
          'The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.\n',
      }),
    label_id: SeIdSchema.exactOptional().openapi({
      description:
        'A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.\n',
      readOnly: true,
    }),
    label_image_id: ImageIdSchema.nullable()
      .exactOptional()
      .openapi({
        description: 'The label image resource that was used to create a custom label image.',
      }),
    label_layout: LabelLayoutSchema.default('4x6')
      .exactOptional()
      .openapi({
        description:
          'The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.\n',
      }),
    outbound_label_id: SeIdSchema.exactOptional().openapi({
      description:
        'The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is\nrequired by some carriers.\n',
      writeOnly: true,
    }),
    package_code: PackageCodeSchema.exactOptional().openapi({
      description:
        'The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.\n',
      readOnly: true,
    }),
    packages: z
      .array(PackageSchema)
      .exactOptional()
      .openapi({
        description:
          "The label's package(s).\n\n> **Note:** Some carriers only allow one package per label.  If you attempt to create a multi-package label for a carrier that doesn't allow it, an error will be returned.\n",
        readOnly: true,
      }),
    rma_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.\n',
      }),
    service_code: ServiceCodeSchema.exactOptional().openapi({
      description:
        'The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.\n',
      readOnly: true,
    }),
    ship_date: DateSchema.exactOptional().openapi({
      description:
        'The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.\n',
      readOnly: true,
    }),
    shipment: ShipmentSchema.exactOptional().openapi({
      description: 'The shipment information used to generate the label',
      writeOnly: true,
    }),
    shipment_cost: MonetaryValueSchema.exactOptional().openapi({
      description:
        'The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.\n',
      readOnly: true,
    }),
    shipment_id: SeIdSchema.exactOptional().openapi({
      description:
        'The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)\n',
      readOnly: true,
    }),
    status: LabelStatusSchema.exactOptional().openapi({ readOnly: true }),
    test_label: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.',
        writeOnly: true,
      }),
    trackable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.\n',
        readOnly: true,
      }),
    tracking_number: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The tracking number for the package. Tracking number formats vary across carriers.',
        example: '782758401696',
        readOnly: true,
      }),
    tracking_status: TrackingStatusSchema.exactOptional().openapi({
      description: 'The current status of the package, such as `in_transit` or `delivered`',
      readOnly: true,
    }),
    validate_address: ValidateAddressSchema.default('validate_and_clean')
      .exactOptional()
      .openapi({ writeOnly: true }),
    voided: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)\n',
        readOnly: true,
      }),
    voided_at: DateTimeSchema.nullable()
      .exactOptional()
      .openapi({
        description:
          'The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided\n',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.\n',
    title: 'label',
    required: [],
  })
  .openapi('Label')

const CreateLabelFromRateResponseBodySchema = LabelSchema.openapi({
  description: 'A create label from rate response body',
  title: 'create_label_from_rate_response_body',
}).openapi('CreateLabelFromRateResponseBody')

const CreateLabelFromShipmentRequestBodySchema = z
  .strictObject({
    display_scheme: DisplaySchemeSchema.default('label')
      .exactOptional()
      .openapi({ description: 'The display format that the label should be shown in.' }),
    label_download_type: LabelDownloadTypeSchema.exactOptional(),
    label_format: LabelFormatSchema.default('pdf').exactOptional(),
    label_layout: LabelLayoutSchema.default('4x6').exactOptional(),
    validate_address: ValidateAddressSchema.exactOptional(),
  })
  .openapi({
    description: 'A purchase label without shipment request body',
    title: 'create_label_from_shipment_request_body',
    required: [],
  })
  .openapi('CreateLabelFromShipmentRequestBody')

const CreateLabelFromShipmentResponseBodySchema = LabelSchema.openapi({
  description: 'A create label from shipment response body',
  title: 'create_label_from_shipment_response_body',
}).openapi('CreateLabelFromShipmentResponseBody')

const CreateLabelRequestBodySchema = LabelSchema.and(
  z
    .object({
      ship_from_service_point_id: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            "A unique identifier for a carrier drop off point where a merchant plans to deliver packages. This will take precedence over a shipment's ship from address.",
          example: '614940',
        }),
      ship_to_service_point_id: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          description:
            "A unique identifier for a carrier service point where the shipment will be delivered by the carrier. This will take precedence over a shipment's ship to address.",
          example: '614940',
        }),
    })
    .openapi({ required: ['shipment'] }),
)
  .openapi({
    description: 'A purchase label request body',
    required: ['shipment'],
    title: 'create_label_request_body',
  })
  .openapi('CreateLabelRequestBody')

const CreateLabelResponseBodySchema = LabelSchema.openapi({
  description: 'A create label response body',
  required: [
    'label_id',
    'status',
    'shipment_id',
    'ship_date',
    'created_at',
    'shipment_cost',
    'insurance_cost',
    'tracking_number',
    'is_international',
    'batch_id',
    'carrier_id',
    'service_code',
    'voided',
    'voided_at',
    'label_image_id',
    'label_format',
    'label_layout',
    'trackable',
    'carrier_code',
    'tracking_status',
    'label_download',
    'form_download',
    'insurance_claim',
    'packages',
    'is_return_label',
    'rma_number',
    'charge_event',
    'package_code',
    'display_scheme',
  ],
  title: 'create_label_response_body',
}).openapi('CreateLabelResponseBody')

const CreateManifestByObjectRequestBodySchema = z
  .strictObject({
    carrier_id: SeIdSchema.openapi({
      description: 'A string that uniquely identifies the carrier',
    }),
    excluded_label_ids: z
      .array(
        SeIdSchema.openapi({ description: 'Label Id that will be excluded from the manifest' }),
      )
      .exactOptional()
      .openapi({ description: 'The list of label ids to exclude from the manifest' }),
    label_ids: z
      .array(SeIdSchema.openapi({ description: 'Label Id that will be included for the manifest' }))
      .exactOptional()
      .openapi({ description: 'The list of label ids to include for the manifest' }),
    ship_date: z.iso
      .datetime({ offset: true })
      .min(1)
      .openapi({
        description: 'The ship date that the shipment will be sent out on',
        example: '2018-09-23T15:00:00.000Z',
      }),
    warehouse_id: SeIdSchema.openapi({
      description: 'A string that uniquely identifies the warehouse',
    }),
  })
  .openapi({
    description: 'A create manifest request body',
    required: ['carrier_id', 'warehouse_id', 'ship_date'],
    title: 'create_manifest_by_object_request_body',
  })
  .openapi('CreateManifestByObjectRequestBody')

const CreateManifestLabelIdsRequestBodySchema = z
  .strictObject({
    label_ids: z
      .array(SeIdSchema.openapi({ description: 'Label Id that will be included in the manifest' }))
      .openapi({ description: 'The list of label ids to include in the manifest' }),
  })
  .openapi({
    description: 'A create manifest request body',
    required: ['label_ids'],
    title: 'create_manifest_label_ids_request_body',
  })
  .openapi('CreateManifestLabelIdsRequestBody')

const CreateManifestRequestBodySchema = z
  .xor([CreateManifestByObjectRequestBodySchema, CreateManifestLabelIdsRequestBodySchema])
  .openapi({ title: 'create_manifest_request_body' })
  .openapi('CreateManifestRequestBody')

const ManifestDownloadSchema = z
  .strictObject({
    href: UrlSchema.exactOptional().openapi({
      description: 'The URL of the linked resource, if any',
    }),
  })
  .openapi({
    description: 'Object containing the href link to download the manifest file',
    title: 'manifest_download',
    required: [],
  })
  .openapi('ManifestDownload')

const ManifestSchema = z
  .strictObject({
    carrier_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the carrier',
      readOnly: true,
    }),
    created_at: z.iso
      .datetime({ offset: true })
      .min(1)
      .exactOptional()
      .openapi({
        description: 'The date-time that the manifest was created',
        example: '2019-07-12T13:37:39.050Z',
        readOnly: true,
      }),
    form_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the form',
      readOnly: true,
    }),
    label_ids: z
      .array(SeIdSchema)
      .exactOptional()
      .openapi({ description: 'An array of the label ids used in this manifest.', readOnly: true }),
    manifest_download: ManifestDownloadSchema.exactOptional().openapi({ readOnly: true }),
    manifest_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the manifest',
      readOnly: true,
    }),
    ship_date: z.iso
      .datetime({ offset: true })
      .min(1)
      .exactOptional()
      .openapi({
        description: 'The date-time that the manifests shipments will be picked up',
        example: '2019-07-12T13:37:39.050Z',
        readOnly: true,
      }),
    shipments: z
      .int32()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'The number of shipments that are included in this manifest',
        example: 100,
        readOnly: true,
      }),
    submission_id: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'A string that uniquely identifies the submission',
        example: '9475711899564878915476',
        readOnly: true,
      }),
    warehouse_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the warehouse',
      readOnly: true,
    }),
  })
  .openapi({
    description:
      'Used for combining packages into one scannable form that a carrier can use when picking up a large \nnumber of shipments\n',
    title: 'manifest',
    required: [],
  })
  .openapi('Manifest')

const ManifestsSchema = z
  .strictObject({
    manifests: z
      .array(ManifestSchema)
      .exactOptional()
      .openapi({ description: 'Resulting Manifests' }),
  })
  .openapi({ description: 'An array of manifest resources', title: 'manifests', required: [] })
  .openapi('Manifests')

const ManifestRequestStatusSchema = z
  .enum(['in_progress', 'completed'])
  .openapi({
    description: 'The possible statuses of a manifest request',
    title: 'manifest_request_status',
  })
  .openapi('ManifestRequestStatus')

const ManifestRequestSchema = z
  .strictObject({
    manifest_request_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies a manifest request',
      readOnly: true,
    }),
    status: ManifestRequestStatusSchema.exactOptional(),
  })
  .openapi({
    description: 'A reference to the manifest request',
    title: 'manifest_request',
    required: [],
  })
  .openapi('ManifestRequest')

const ManifestsRequestsSchema = z
  .strictObject({
    manifest_requests: z
      .array(ManifestRequestSchema)
      .exactOptional()
      .openapi({ description: 'Resulting manifest requests with statuses' }),
  })
  .openapi({
    description: 'An array of manifest requests',
    title: 'manifests_requests',
    required: [],
  })
  .openapi('ManifestsRequests')

const DeprecatedManifestSchema = z
  .strictObject({
    carrier_id: SeIdSchema.exactOptional().openapi({
      deprecated: true,
      description: 'A string that uniquely identifies the carrier',
    }),
    created_at: z.iso
      .datetime({ offset: true })
      .min(1)
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The date-time that the manifest was created',
        example: '2019-07-12T13:37:39.050Z',
      }),
    form_id: SeIdSchema.exactOptional().openapi({
      deprecated: true,
      description: 'A string that uniquely identifies the form',
    }),
    label_ids: z
      .array(SeIdSchema)
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'An array of the label ids used in this manifest.',
        readOnly: true,
      }),
    manifest_download: ManifestDownloadSchema.exactOptional().openapi({ deprecated: true }),
    manifest_id: SeIdSchema.exactOptional().openapi({
      deprecated: true,
      description: 'A string that uniquely identifies the manifest',
    }),
    ship_date: z.iso
      .datetime({ offset: true })
      .min(1)
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The date-time that the manifests shipments will be picked up',
        example: '2019-07-12T13:37:39.050Z',
      }),
    shipments: z
      .int32()
      .min(1)
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The number of shipments that are included in this manifest',
        example: 100,
        readOnly: true,
      }),
    submission_id: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'A string that uniquely identifies the submission',
        example: '9475711899564878915476',
      }),
    warehouse_id: SeIdSchema.exactOptional().openapi({
      deprecated: true,
      description: 'A string that uniquely identifies the warehouse',
    }),
  })
  .openapi({
    description: 'Deprecated manifest resource',
    title: 'deprecated_manifest',
    required: [],
  })
  .openapi('DeprecatedManifest')

const UuidSchema = z
  .uuid()
  .regex(/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/)
  .length(36)
  .openapi({
    description: 'A UUID (a.k.a. GUID) that uniquely identifies a resource',
    example: 'aa3d8e8e-462b-4476-9618-72db7f7b7009',
    title: 'uuid',
  })
  .openapi('Uuid')

const ErrorWithLabelIdResponseBodySchema = z
  .strictObject({
    errors: z
      .array(ErrorSchema)
      .openapi({ description: 'The errors associated with the failed API call', readOnly: true }),
    request_id: UuidSchema.openapi({
      description:
        'A UUID that uniquely identifies the request id.\nThis can be given to the support team to help debug non-trivial issues that may occur\n',
    }),
  })
  .openapi({
    description: 'An error response body',
    required: ['request_id', 'errors'],
    title: 'error_with_label_id_response_body',
  })
  .openapi('ErrorWithLabelIdResponseBody')

const CreateManifestResponseBodySchema = ManifestsSchema.and(ManifestsRequestsSchema)
  .and(DeprecatedManifestSchema)
  .and(ErrorWithLabelIdResponseBodySchema)
  .openapi({
    description: 'A create manifest response body',
    required: [
      'manifest_id',
      'form_id',
      'created_at',
      'ship_date',
      'shipments',
      'warehouse_id',
      'submission_id',
      'carrier_id',
      'manifest_download',
    ],
    title: 'create_manifest_response_body',
  })
  .openapi('CreateManifestResponseBody')

const CreatePackageTypeRequestBodySchema = PackageTypeSchema.openapi({
  description: 'A create package type request body',
  title: 'create_package_type_request_body',
}).openapi('CreatePackageTypeRequestBody')

const CreatePackageTypeResponseBodySchema = PackageTypeSchema.openapi({
  description: 'A create package type response body',
  title: 'create_package_type_response_body',
}).openapi('CreatePackageTypeResponseBody')

const CreateReturnLabelRequestBodySchema = z
  .strictObject({
    charge_event: LabelChargeEventSchema.exactOptional().openapi({
      description: 'The label charge event.\n',
    }),
    display_scheme: DisplaySchemeSchema.default('label')
      .exactOptional()
      .openapi({ description: 'The display format that the label should be shown in.' }),
    label_download_type: LabelDownloadTypeSchema.default('url')
      .exactOptional()
      .openapi({ writeOnly: true }),
    label_format: LabelFormatSchema.default('pdf')
      .exactOptional()
      .openapi({
        description:
          'The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.\n',
      }),
    label_image_id: ImageIdSchema.nullable()
      .exactOptional()
      .openapi({
        description: 'The label image resource that was used to create a custom label image.',
      }),
    label_layout: LabelLayoutSchema.default('4x6')
      .exactOptional()
      .openapi({
        description:
          'The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.\n',
      }),
  })
  .openapi({
    description: 'A create return label request body',
    title: 'create_return_label_request_body',
    required: [],
  })
  .openapi('CreateReturnLabelRequestBody')

const CreateReturnLabelResponseBodySchema = LabelSchema.openapi({
  description: 'A create return label response body',
  title: 'create_return_label_response_body',
}).openapi('CreateReturnLabelResponseBody')

const CreateShipmentsRequestBodySchema = z
  .strictObject({
    shipments: z
      .array(AddressValidatingShipmentSchema)
      .min(1)
      .openapi({ description: 'An array of shipments to be created.' }),
  })
  .openapi({
    description: 'A create shipments request body',
    required: ['shipments'],
    title: 'create_shipments_request_body',
  })
  .openapi('CreateShipmentsRequestBody')

const CreateShipmentsResponseBodySchema = z
  .strictObject({
    has_errors: z
      .boolean()
      .default(false)
      .openapi({ description: 'Indicates if errors occured while creating the shipments' }),
    shipments: z
      .array(
        CreateAndValidateShipmentSchema.openapi({ description: 'The shipment that was created.' }),
      )
      .openapi({ description: 'An array of shipments that were created.' }),
  })
  .openapi({
    description: 'A create shipments response body',
    required: ['has_errors', 'shipments'],
    title: 'create_shipments_response_body',
  })
  .openapi('CreateShipmentsResponseBody')

const CreateTagResponseBodySchema = TagSchema.openapi({
  description: 'Response body for creating tags',
  title: 'create_tag_response_body',
}).openapi('CreateTagResponseBody')

const WarehouseSchema = z
  .strictObject({
    created_at: z.iso
      .datetime({ offset: true })
      .min(1)
      .exactOptional()
      .openapi({
        description: 'Timestamp that indicates when the warehouse was created',
        example: '2019-06-25T18:12:35.583Z',
        readOnly: true,
      }),
    is_default: z
      .boolean()
      .nullable()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Designates which single warehouse is the default on the account' }),
    name: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Name of the warehouse', example: 'Zero Cool HQ' }),
    origin_address: AddressSchema.exactOptional().openapi({
      description: 'The origin address of the warehouse',
    }),
    return_address: AddressSchema.exactOptional().openapi({
      description: 'The return address associated with the warehouse',
    }),
    warehouse_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the warehouse',
      readOnly: true,
    }),
  })
  .openapi({ description: 'A warehouse', title: 'warehouse', required: [] })
  .openapi('Warehouse')

const CreateWarehouseRequestBodySchema = WarehouseSchema.openapi({
  description: 'A create warehouse request body',
  required: ['name', 'origin_address'],
  title: 'create_warehouse_request_body',
}).openapi('CreateWarehouseRequestBody')

const CreateWarehouseResponseBodySchema = WarehouseSchema.openapi({
  description: 'A create warehouse response body',
  required: ['warehouse_id', 'name', 'created_at', 'origin_address', 'return_address'],
  title: 'create_warehouse_response_body',
}).openapi('CreateWarehouseResponseBody')

const WebhookEventSchema = z
  .enum([
    'batch',
    'carrier_connected',
    'order_source_refresh_complete',
    'rate',
    'report_complete',
    'sales_orders_imported',
    'track',
  ])
  .openapi({ description: 'The possible webook event values', title: 'webhook_event' })
  .openapi('WebhookEvent')

const CreateWebhookRequestBodySchema = z
  .strictObject({
    event: WebhookEventSchema,
    url: UrlSchema.openapi({
      description: 'The url that the webhook sends the request to',
      example: 'https://[YOUR ENDPOINT ID].x.requestbin.com',
    }),
  })
  .openapi({
    description: 'A create webhook request body',
    required: ['event', 'url'],
    title: 'create_webhook_request_body',
  })
  .openapi('CreateWebhookRequestBody')

const WebhookSchema = z
  .strictObject({
    event: WebhookEventSchema.exactOptional(),
    url: UrlSchema.exactOptional().openapi({
      description: 'The url that the webhook sends the request to',
      example: 'https://[YOUR ENDPOINT ID].x.requestbin.com',
    }),
    webhook_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the webhook',
      readOnly: true,
    }),
  })
  .openapi({ description: 'A webhook', title: 'webhook', required: [] })
  .openapi('Webhook')

const CreateWebhookResponseBodySchema = WebhookSchema.openapi({
  description: 'A webhook response body',
  required: ['webhook_id', 'url', 'event'],
  title: 'create_webhook_response_body',
}).openapi('CreateWebhookResponseBody')

const ErrorResponseBodySchema = z
  .strictObject({
    errors: z
      .array(ErrorSchema)
      .openapi({ description: 'The errors associated with the failed API call', readOnly: true }),
    request_id: UuidSchema.openapi({
      description:
        'A UUID that uniquely identifies the request id.\nThis can be given to the support team to help debug non-trivial issues that may occur\n',
    }),
  })
  .openapi({
    description: 'An error response body',
    required: ['request_id', 'errors'],
    title: 'error_response_body',
  })
  .openapi('ErrorResponseBody')

const PickupResourceIdSchema = z
  .string()
  .min(4)
  .openapi({
    description: 'Pickup Resource ID',
    example: 'pik_3YcKU5zdtJuCqoeNwyqqbW',
    title: 'pickup_resource_id',
  })
  .openapi('PickupResourceId')

const DeleteScheduledPickupResponseBodySchema = z
  .strictObject({ pickup_id: PickupResourceIdSchema })
  .openapi({
    description: 'A delete scheduled pickup response body',
    required: ['pickup_id'],
    title: 'delete_scheduled_pickup_response_body',
  })
  .openapi('DeleteScheduledPickupResponseBody')

const DeletePickupByIdResponseBodySchema = ErrorResponseBodySchema.and(
  DeleteScheduledPickupResponseBodySchema,
)
  .openapi({ title: 'delete_pickup_by_id_response_body' })
  .openapi('DeletePickupByIdResponseBody')

const DhlExpressAccountSettingsSchema = z
  .strictObject({
    is_primary_account: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if this is primary account' }),
    nickname: z.string().min(1).exactOptional().openapi({ description: 'Account nickname' }),
    should_hide_account_number_on_archive_doc: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the account number should be hidden on the archive documentation',
      }),
  })
  .openapi({
    description: 'A DHL Express account settings',
    title: 'dhl_express_account_settings',
    required: [],
  })
  .openapi('DhlExpressAccountSettings')

const DhlExpressSettingsResponseBodySchema = DhlExpressAccountSettingsSchema.openapi({
  description: 'A DHL Express response body',
  title: 'dhl_express_settings_response_body',
}).openapi('DhlExpressSettingsResponseBody')

const DisconnectInsurerResponseBodySchema = z
  .object({})
  .openapi({ title: 'disconnect_insurer_response_body' })
  .openapi('DisconnectInsurerResponseBody')

const DownloadFilePdfResponseBodySchema = z
  .file()
  .openapi({ type: 'string', format: 'binary', title: 'download_file_pdf_response_body' })
  .openapi('DownloadFilePdfResponseBody')

const DownloadFilePngResponseBodySchema = z
  .file()
  .openapi({ type: 'string', format: 'binary', title: 'download_file_png_response_body' })
  .openapi('DownloadFilePngResponseBody')

const DownloadFileZplResponseBodySchema = z
  .file()
  .openapi({ type: 'string', format: 'binary', title: 'download_file_zpl_response_body' })
  .openapi('DownloadFileZplResponseBody')

const EmptyResponseBodySchema = z
  .string()
  .max(0)
  .openapi({ title: 'empty_response_body' })
  .openapi('EmptyResponseBody')

const RateEstimateOptionsSchema = z
  .object({
    address_residential_indicator: AddressResidentialIndicatorSchema.exactOptional(),
    confirmation: DeliveryConfirmationSchema.exactOptional(),
    dimensions: DimensionsSchema.exactOptional().openapi({
      description: 'The dimensions of the package',
    }),
    from_city_locality: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'from postal code', example: 'Austin' }),
    from_country_code: CountryCodeSchema.exactOptional(),
    from_postal_code: PostalCodeSchema.exactOptional(),
    from_state_province: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'From state province', example: 'Austin' }),
    ship_date: DateTimeSchema.exactOptional().openapi({ description: 'ship date' }),
    to_city_locality: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description: 'The city locality the package is being shipped to',
        example: 'Austin',
      }),
    to_country_code: CountryCodeSchema.exactOptional(),
    to_postal_code: PostalCodeSchema.exactOptional(),
    to_state_province: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'To state province', example: 'Houston' }),
    weight: WeightSchema.exactOptional().openapi({ description: 'The weight of the package' }),
  })
  .openapi({ title: 'rate_estimate_options', required: [] })
  .openapi('RateEstimateOptions')

const EstimateRatesRequestBodySchema = RateEstimateOptionsSchema.openapi({
  description: 'A rate estimate request body',
  required: [
    'from_country_code',
    'from_postal_code',
    'from_city_locality',
    'from_state_province',
    'to_country_code',
    'to_postal_code',
    'to_city_locality',
    'to_state_province',
    'weight',
    'ship_date',
  ],
  title: 'estimate_rates_request_body',
}).openapi('EstimateRatesRequestBody')

const RateEstimateSchema = z
  .strictObject({
    carrier_code: z.string().min(1).openapi({ description: 'carrier code', readOnly: true }),
    carrier_delivery_days: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'The carrier delivery days', readOnly: true }),
    carrier_friendly_name: z
      .string()
      .min(1)
      .openapi({ description: 'carrier friendly name', readOnly: true }),
    carrier_id: SeIdSchema.openapi({
      description: 'A string that uniquely identifies the carrier',
      readOnly: true,
    }),
    carrier_nickname: z
      .string()
      .min(1)
      .openapi({ description: 'carrier nickname', readOnly: true }),
    confirmation_amount: MonetaryValueSchema.openapi({
      description: 'The confirmation amount',
      readOnly: true,
    }),
    delivery_days: z
      .int32()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The number of days estimated for delivery, this will show the _actual_ delivery\ntime if for example, the package gets shipped on a Friday\n',
        example: 5,
        readOnly: true,
      }),
    error_messages: z
      .array(z.string().min(0).openapi({ description: 'error message', readOnly: true }))
      .min(0)
      .openapi({ description: 'The error messages', readOnly: true }),
    estimated_delivery_date: DateSchema.exactOptional().openapi({ readOnly: true }),
    guaranteed_service: z
      .boolean()
      .openapi({ description: 'Indicates if the rate is guaranteed.', readOnly: true }),
    insurance_amount: MonetaryValueSchema.openapi({
      description: 'The insurance amount',
      readOnly: true,
    }),
    negotiated_rate: z
      .boolean()
      .openapi({ description: 'Indicates if the rates been negotiated', readOnly: true }),
    other_amount: MonetaryValueSchema.openapi({
      description: 'Any other charges associated with this rate',
      readOnly: true,
    }),
    package_type: z
      .string()
      .min(1)
      .nullable()
      .openapi({
        description: 'package type that this rate was estimated for',
        example: 'package',
        readOnly: true,
      }),
    rate_type: RateTypeSchema.openapi({ readOnly: true }),
    service_code: z
      .string()
      .min(1)
      .openapi({ description: 'service code for the rate', readOnly: true }),
    service_type: z.string().min(1).openapi({ description: 'service type', readOnly: true }),
    ship_date: z.iso
      .datetime({ offset: true })
      .min(1)
      .exactOptional()
      .openapi({ description: 'ship date', readOnly: true }),
    shipping_amount: MonetaryValueSchema.openapi({
      description: 'The shipping amount',
      readOnly: true,
    }),
    tax_amount: MonetaryValueSchema.exactOptional().openapi({
      description: 'Tariff and additional taxes associated with an international shipment.',
      readOnly: true,
    }),
    trackable: z
      .boolean()
      .openapi({ description: 'Indicates if rate is trackable', readOnly: true }),
    validation_status: ValidationStatusSchema.openapi({ readOnly: true }),
    warning_messages: z
      .array(z.string().min(0).openapi({ description: 'warning message', readOnly: true }))
      .min(0)
      .openapi({ description: 'The warning messages', readOnly: true }),
    zone: z
      .int32()
      .min(0)
      .nullable()
      .openapi({
        description:
          'Certain carriers base [their rates](https://blog.stamps.com/2017/09/08/usps-postal-zones/) off of\ncustom zones that vary depending upon the ship_to and ship_from location\n',
        example: 6,
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A rate estimate',
    required: [
      'rate_type',
      'carrier_id',
      'shipping_amount',
      'insurance_amount',
      'confirmation_amount',
      'other_amount',
      'zone',
      'package_type',
      'guaranteed_service',
      'negotiated_rate',
      'service_type',
      'service_code',
      'trackable',
      'carrier_code',
      'carrier_nickname',
      'carrier_friendly_name',
      'validation_status',
      'warning_messages',
      'error_messages',
    ],
    title: 'rate_estimate',
  })
  .openapi('RateEstimate')

const EstimateRatesResponseBodySchema = z
  .array(RateEstimateSchema)
  .openapi({ description: 'A rate estimate response body', title: 'estimate_rates_response_body' })
  .openapi('EstimateRatesResponseBody')

const FedexPickupTypeSchema = z
  .enum([
    'none',
    'regular_pickup',
    'request_courier',
    'drop_box',
    'business_service_center',
    'station',
  ])
  .openapi({
    description:
      'Determines how FedEx will pickup your packages\n\n|Pickup Type               |Description\n|--------------------------|-----------------------------------------\n|`none`                    | Not specified\n|`regular_pickup`          | You already have a daily pickup scheduled with FedEx\n|`request_courier`         | You will call FedEx to request a courier\n|`drop_box`                | You will drop-off packages in a FedEx drop box\n|`business_service_center` | You will drop-off packages at an authorized FedEx business service center\n|`station`                 | You will drop-off the package at a FedEx Station\n',
    title: 'fedex_pickup_type',
  })
  .openapi('FedexPickupType')

const SmartPostHubSchema = z
  .enum([
    'none',
    'allentown_pa',
    'atlanta_ga',
    'baltimore_md',
    'charlotte_nc',
    'chino_ca',
    'dallas_tx',
    'denver_co',
    'detroit_mi',
    'edison_nj',
    'grove_city_oh',
    'groveport_oh',
    'houston_tx',
    'indianapolis_in',
    'kansas_city_ks',
    'los_angeles_ca',
    'martinsburg_wv',
    'memphis_tn',
    'minneapolis_mn',
    'new_berlin_wi',
    'northborough_ma',
    'orlando_fl',
    'phoneix_az',
    'pittsburgh_pa',
    'reno_nv',
    'sacramento_ca',
    'salt_lake_city_ut',
    'seattle_wa',
    'st_louis_mo',
    'windsor_ct',
    'newark_ny',
    'south_brunswick_nj',
    'scranton_pa',
    'wheeling_il',
  ])
  .openapi({ description: 'The possible smart post hub values', title: 'smart_post_hub' })
  .openapi('SmartPostHub')

const FedexAccountSettingsSchema = z
  .strictObject({
    is_primary_account: z.boolean().exactOptional(),
    letterhead_image: z.string().exactOptional(),
    nickname: z.string().min(1).exactOptional().openapi({ description: 'Account nickname' }),
    pickup_type: FedexPickupTypeSchema.exactOptional(),
    signature_image: z.string().exactOptional(),
    smart_post_endorsement: AncillaryServiceEndorsementSchema.exactOptional(),
    smart_post_hub: SmartPostHubSchema.exactOptional(),
  })
  .openapi({
    description: 'A Fedex account settings request body',
    title: 'fedex_account_settings',
    required: [],
  })
  .openapi('FedexAccountSettings')

const FedexAccountSettingsRequestBodySchema = FedexAccountSettingsSchema.openapi({
  description: 'A Fedex account settings request body',
  title: 'fedex_account_settings_request_body',
}).openapi('FedexAccountSettingsRequestBody')

const FedexSettingsResponseBodySchema = FedexAccountSettingsRequestBodySchema.openapi({
  description: 'A Fedex settings response body',
  title: 'fedex_settings_response_body',
}).openapi('FedexSettingsResponseBody')

const GetBatchByExternalIdResponseBodySchema = BatchSchema.openapi({
  description: 'A get batch by external id response body',
  title: 'get_batch_by_external_id_response_body',
}).openapi('GetBatchByExternalIdResponseBody')

const GetBatchByIdResponseBodySchema = BatchSchema.openapi({
  description: 'A get batch by id response body',
  title: 'get_batch_by_id_response_body',
}).openapi('GetBatchByIdResponseBody')

const GetCarrierByIdResponseBodySchema = CarrierSchema.openapi({
  description: 'A get carrier by id response body',
  title: 'get_carrier_by_id_response_body',
}).openapi('GetCarrierByIdResponseBody')

const GetCarrierOptionsResponseBodySchema = z
  .strictObject({
    options: z
      .array(CarrierAdvancedOptionSchema.openapi({ description: 'Carrer options', readOnly: true }))
      .exactOptional()
      .openapi({ description: 'AN array of carrier options', readOnly: true }),
  })
  .openapi({
    description: 'A carrier list options response body',
    title: 'get_carrier_options_response_body',
    required: [],
  })
  .openapi('GetCarrierOptionsResponseBody')

const UpsPickupTypeSchema = z
  .enum(['daily_pickup', 'occasional_pickup', 'customer_counter'])
  .openapi({ description: 'The possible ups pickup type values', title: 'ups_pickup_type' })
  .openapi('UpsPickupType')

const UpsAccountSettingsSchema = z
  .strictObject({
    account_postal_code: z
      .string()
      .min(5)
      .exactOptional()
      .openapi({ description: 'account postal code' }),
    invoice: UpsInvoiceSchema.exactOptional().openapi({ description: 'The invoice' }),
    is_primary_account: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates if this is the primary UPS account' }),
    mail_innovations_cost_center: z
      .string()
      .min(0)
      .exactOptional()
      .openapi({ description: 'mail innovations cost center' }),
    mail_innovations_endorsement: AncillaryServiceEndorsementSchema.exactOptional(),
    nickname: z.string().min(1).exactOptional().openapi({ description: 'nickname' }),
    pickup_type: UpsPickupTypeSchema.exactOptional(),
    use_carbon_neutral_shipping_program: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The use carbon neutral shipping program' }),
    use_consolidation_services: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The use consolidation services' }),
    use_ground_freight_pricing: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The use ground freight pricing' }),
    use_negotiated_rates: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The use negotiated rates' }),
    use_order_number_on_mail_innovations_labels: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The use order number on mail innovations labels' }),
  })
  .openapi({ description: 'UPS account settings', title: 'ups_account_settings', required: [] })
  .openapi('UpsAccountSettings')

const UpsSettingsResponseBodySchema = UpsAccountSettingsSchema.openapi({
  description: 'A UPS settings response body',
  title: 'ups_settings_response_body',
}).openapi('UpsSettingsResponseBody')

const GetCarrierSettingsResponseBodySchema = z
  .xor([
    DhlExpressSettingsResponseBodySchema,
    FedexSettingsResponseBodySchema,
    UpsSettingsResponseBodySchema,
  ])
  .openapi({ title: 'get_carrier_settings_response_body' })
  .openapi('GetCarrierSettingsResponseBody')

const ListCarriersResponseBodySchema = z
  .strictObject({
    carriers: z
      .array(CarrierSchema.openapi({ readOnly: true }))
      .openapi({ description: 'The carrier response body', readOnly: true }),
  })
  .openapi({
    description: 'A carrier list response body',
    required: ['carriers'],
    title: 'list_carriers_response_body',
  })
  .openapi('ListCarriersResponseBody')

const GetCarriersResponseBodySchema = ListCarriersResponseBodySchema.and(ErrorResponseBodySchema)
  .openapi({ title: 'get_carriers_response_body' })
  .openapi('GetCarriersResponseBody')

const GetInsuranceBalanceResponseBodySchema = MonetaryValueSchema.openapi({
  description: 'A get insurance balance response body',
  title: 'get_insurance_balance_response_body',
}).openapi('GetInsuranceBalanceResponseBody')

const GetLabelByExternalShipmentIdResponseBodySchema = LabelSchema.openapi({
  description: 'A get label by external shipment id response body',
  title: 'get_label_by_external_shipment_id_response_body',
}).openapi('GetLabelByExternalShipmentIdResponseBody')

const GetLabelByIdResponseBodySchema = LabelSchema.openapi({
  description: 'A get label by id response body',
  title: 'get_label_by_id_response_body',
}).openapi('GetLabelByIdResponseBody')

const GetManifestByIdResponseBodySchema = ManifestSchema.openapi({
  description: 'A get manifest by id response body',
  required: [
    'manifest_id',
    'form_id',
    'created_at',
    'ship_date',
    'shipments',
    'warehouse_id',
    'submission_id',
    'carrier_id',
    'manifest_download',
    'label_ids',
  ],
  title: 'get_manifest_by_id_response_body',
}).openapi('GetManifestByIdResponseBody')

const GetPackageTypeByIdResponseBodySchema = PackageTypeSchema.openapi({
  description: 'A get package type by id response body',
  title: 'get_package_type_by_id_response_body',
}).openapi('GetPackageTypeByIdResponseBody')

const PickupWindowSchema = z
  .object({ end_at: DateTimeSchema, start_at: DateTimeSchema })
  .openapi({
    description: 'The desired time range for the package pickup.',
    required: ['start_at', 'end_at'],
    title: 'pickup_window',
    writeOnly: true,
  })
  .openapi('PickupWindow')

const PickupWindowsSchema = z
  .object({ end_at: DateTimeSchema.exactOptional(), start_at: DateTimeSchema.exactOptional() })
  .openapi({ title: 'pickup_windows', required: [] })
  .openapi('PickupWindows')

const PickupSchema = z
  .strictObject({
    cancelled_at: DateTimeSchema.exactOptional().openapi({
      description: 'The date and time that the pickup was cancelled in ShipEngine.',
      readOnly: true,
    }),
    carrier_id: SeIdSchema.exactOptional().openapi({
      description: 'The carrier_id associated with the pickup',
      readOnly: true,
    }),
    confirmation_number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The carrier confirmation number for the scheduled pickup.',
        example: '292513CL4A3',
        readOnly: true,
      }),
    contact_details: ContactDetailsSchema.exactOptional(),
    created_at: DateTimeSchema.exactOptional().openapi({
      description: 'The date and time that the pickup was created in ShipEngine.',
      readOnly: true,
    }),
    label_ids: z
      .array(
        SeIdSchema.openapi({ description: 'Label ID that will be included in the pickup request' }),
      )
      .exactOptional()
      .openapi({ description: 'Label IDs that will be included in the pickup request' }),
    pickup_address: AddressSchema.exactOptional().openapi({ readOnly: true }),
    pickup_id: PickupResourceIdSchema.exactOptional().openapi({ readOnly: true }),
    pickup_notes: z
      .string()
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Used by some carriers to give special instructions for a package pickup',
      }),
    pickup_window: PickupWindowSchema.exactOptional(),
    pickup_windows: z
      .array(PickupWindowsSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of available pickup windows. Carriers can return multiple times that they will pickup packages.\n',
        readOnly: true,
      }),
    warehouse_id: SeIdSchema.exactOptional().openapi({
      description: 'The warehouse_id associated with the pickup',
      readOnly: true,
    }),
  })
  .openapi({
    description: 'The information necessary to schedule a package pickup\n',
    title: 'pickup',
    required: [],
  })
  .openapi('Pickup')

const PickupResponseBodySchema = PickupSchema.openapi({
  description: 'A pickup response body',
  required: [
    'pickup',
    'pickup_id',
    'label_ids',
    'created_at',
    'carrier_id',
    'warehouse_id',
    'pickup_address',
    'contact_details',
    'notes',
    'pickup_window',
    'confirmation_number',
  ],
  title: 'pickup_response_body',
}).openapi('PickupResponseBody')

const GetPickupByIdResponseBodySchema = PickupResponseBodySchema.and(ErrorResponseBodySchema)
  .openapi({ title: 'get_pickup_by_id_response_body' })
  .openapi('GetPickupByIdResponseBody')

const PaginationLinkSchema = z
  .strictObject({
    first: LinkSchema.openapi({
      description:
        'The link to the first page of results.  This object will _always_ have an `href` field. If there are no results, then the first page will contain an empty array of items.\n',
    }),
    last: LinkSchema.openapi({
      description:
        'The link to the final page of results.  This object will _always_ have an `href` field. If there are no results, then the final page will contain an empty array of items.\n',
    }),
    next: OptionalLinkSchema.openapi({
      description:
        'The link to the next page of results.  The `href` field will only be set when the `page` is less than `pages`.\n',
    }),
    prev: OptionalLinkSchema.openapi({
      description:
        'The link to the previous page of results.  The `href` field will only be set when the `page` is 2 or greater.\n',
    }),
  })
  .openapi({
    description: 'Helpful links to other pages of results',
    required: ['first', 'last', 'prev', 'next'],
    title: 'pagination_link',
  })
  .openapi('PaginationLink')

const ListPickupResponseBodySchema = z
  .strictObject({
    links: PaginationLinkSchema.openapi({
      description: 'Helpful links to other pages of results',
      readOnly: true,
    }),
    page: z
      .int32()
      .min(1)
      .openapi({
        description: 'Current page of the list pickups results',
        example: 3,
        readOnly: true,
      }),
    pages: z
      .int32()
      .min(1)
      .openapi({
        description: 'Total number of pages for list pickups results',
        example: 4,
        readOnly: true,
      }),
    pickups: z
      .array(PickupSchema)
      .openapi({ description: "An array of pickups associated with the user's account." }),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'The total number of pickups returned',
        example: 3,
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A list pickup response body',
    required: ['pickups', 'total', 'page', 'pages', 'links'],
    title: 'list_pickup_response_body',
  })
  .openapi('ListPickupResponseBody')

const GetPickupsResponseBodySchema = ListPickupResponseBodySchema.and(ErrorResponseBodySchema)
  .openapi({ title: 'get_pickups_response_body' })
  .openapi('GetPickupsResponseBody')

const GetRateByIdResponseBodySchema = RateSchema.openapi({
  description: 'A rate response body',
  required: [
    'rates',
    'invalid_rates',
    'rate_request_id',
    'shipment_id',
    'created_at',
    'status',
    'errors',
  ],
  title: 'get_rate_by_id_response_body',
}).openapi('GetRateByIdResponseBody')

const GetServicePointByIdResponseBodySchema = z
  .object({
    service_point: z
      .object({
        address_line1: z.string().exactOptional().openapi({ example: 'PLACE DU CANADA' }),
        carrier_code: z.string().exactOptional().openapi({ example: 'chronopost' }),
        city_locality: z.string().exactOptional().openapi({ example: 'TRUN' }),
        company_name: z.string().exactOptional().openapi({ example: 'My fancy company name' }),
        country_code: z.string().exactOptional().openapi({ example: 'FR' }),
        features: z
          .array(
            z.enum([
              'drop_off_point',
              'pickup_point',
              'print_services',
              'after_hours_locker',
              'after_hours_dropbox',
            ]),
          )
          .exactOptional(),
        hours_of_operation: z
          .object({
            friday: z
              .array(
                z
                  .object({
                    close: z.string().exactOptional().openapi({ example: '12:00' }),
                    open: z.string().exactOptional().openapi({ example: '09:15' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            monday: z
              .array(
                z
                  .object({
                    close: z.string().exactOptional().openapi({ example: '12:00' }),
                    open: z.string().exactOptional().openapi({ example: '09:15' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            saturday: z
              .array(
                z
                  .object({
                    close: z.string().exactOptional().openapi({ example: '12:00' }),
                    open: z.string().exactOptional().openapi({ example: '09:15' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            sunday: z
              .array(
                z
                  .object({
                    close: z.string().exactOptional().openapi({ example: '12:00' }),
                    open: z.string().exactOptional().openapi({ example: '09:15' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            thursday: z
              .array(
                z
                  .object({
                    close: z.string().exactOptional().openapi({ example: '12:00' }),
                    open: z.string().exactOptional().openapi({ example: '09:15' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            tuesday: z
              .array(
                z
                  .object({
                    close: z.string().exactOptional().openapi({ example: '12:00' }),
                    open: z.string().exactOptional().openapi({ example: '09:15' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
            wednesday: z
              .array(
                z
                  .object({
                    close: z.string().exactOptional().openapi({ example: '12:00' }),
                    open: z.string().exactOptional().openapi({ example: '09:15' }),
                  })
                  .openapi({ required: [] }),
              )
              .exactOptional(),
          })
          .exactOptional()
          .openapi({ required: [] }),
        lat: z.float64().exactOptional().openapi({ example: 48.842608 }),
        long: z.float64().exactOptional().openapi({ example: 0.032875 }),
        phone_number: z.string().exactOptional().openapi({ example: '555-555-5555' }),
        postal_code: z.string().exactOptional().openapi({ example: '61160' }),
        service_codes: z.array(z.string()).exactOptional(),
        service_point_id: z.string().exactOptional().openapi({ example: '614940' }),
        state_province: z.string().exactOptional().openapi({ example: 'TRUN' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({
    description: 'A get service point by ID response body',
    title: 'get_service_point_by_id_response_body',
    required: [],
  })
  .openapi('GetServicePointByIdResponseBody')

const GetServicePointsRequestBodySchema = z
  .object({
    address: z
      .object({
        address_line1: z.string().exactOptional(),
        address_line2: z.string().exactOptional(),
        address_line3: z.string().exactOptional(),
        city_locality: z.string().exactOptional(),
        country_code: z.string(),
        postal_code: z.string().exactOptional(),
        state_province: z.string().exactOptional(),
      })
      .exactOptional()
      .openapi({ description: 'Structured address to search by.', required: ['country_code'] }),
    address_query: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Unstructured text to search for service points by.',
        example: '177A Bleecker Street New York',
      }),
    lat: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The latitude of the point. Represented as signed degrees. Required if long is provided. http://www.geomidpoint.com/latlon.html',
        example: 48.874518928233094,
      }),
    long: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The longitude of the point. Represented as signed degrees. Required if lat is provided. http://www.geomidpoint.com/latlon.html',
        example: 2.3591775711639404,
      }),
    max_results: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum number of service points to return', example: 25 }),
    providers: z
      .array(
        z
          .object({
            carrier_id: z
              .string()
              .exactOptional()
              .openapi({
                description: 'Uniquely identifies a carrier connection',
                example: 'se-123456',
              }),
            service_code: z
              .array(
                z
                  .string()
                  .openapi({
                    description: 'Uniquely identifies a shipping service',
                    example: 'chronoclassic',
                  }),
              )
              .exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .openapi({ description: 'An array of shipping service providers and service codes' }),
    radius: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Search radius in kilometers', example: 500 }),
  })
  .openapi({
    description:
      'A get service points request body. Caller must provide exactly one of address_query, address, or lat / long pair.',
    required: ['providers'],
    title: 'get_service_points_request_body',
  })
  .openapi('GetServicePointsRequestBody')

const GetServicePointsRequestSchema = z
  .xor([GetServicePointsRequestBodySchema])
  .openapi({ title: 'get_service_points_request' })
  .openapi('GetServicePointsRequest')

const GetShipmentByExternalIdResponseBodySchema = ShipmentSchema.openapi({
  description: 'A get shipment by external id response body',
  title: 'get_shipment_by_external_id_response_body',
}).openapi('GetShipmentByExternalIdResponseBody')

const GetShipmentByIdResponseBodySchema = ShipmentSchema.openapi({
  description: 'A get shipment by id response body',
  title: 'get_shipment_by_id_response_body',
}).openapi('GetShipmentByIdResponseBody')

const StatusCodeSchema = z
  .enum(['un', 'ac', 'it', 'de', 'ex', 'at', 'ny'])
  .openapi({
    description:
      'The tracking status codes\n\n|Value       |Description\n|:---------  |:-----------------------------------------------------\n|`un` | Unknown\n|`ac` | Accepted\n|`it` | In Transit\n|`de` | Delivered\n|`ex` | Exception\n|`at` | Delivery Attempt\n|`ny` | Not Yet In System\n',
    readOnly: true,
    title: 'status_code',
  })
  .openapi('StatusCode')

const TrackEventSchema = z
  .strictObject({
    carrier_detail_code: z
      .string()
      .min(1)
      .openapi({ description: 'Carrier detail code', example: 'OT', readOnly: true }),
    carrier_occurred_at: DateTimeSchema.exactOptional().openapi({
      description:
        'Carrier timestamp for the event, it is assumed to be the local time of where the event occurred.',
    }),
    carrier_status_code: z
      .string()
      .min(1)
      .openapi({ description: 'Carrier status code', example: 1, readOnly: true }),
    carrier_status_description: z
      .string()
      .min(0)
      .openapi({
        description: 'carrier status description',
        example: 'Your item was delivered in or at the mailbox at 9:10 am on March',
        readOnly: true,
      }),
    city_locality: z
      .string()
      .min(0)
      .openapi({ description: 'City locality', example: 'AUSTIN', readOnly: true }),
    company_name: z
      .string()
      .min(0)
      .exactOptional()
      .openapi({ description: 'Company Name', example: 'Stamps.com', readOnly: true }),
    country_code: CountryCodeSchema.exactOptional(),
    description: z
      .string()
      .min(0)
      .exactOptional()
      .openapi({
        description: 'Event description',
        example: 'Delivered, In/At Mailbox',
        readOnly: true,
      }),
    event_code: z.string().min(0).exactOptional().openapi({ description: 'Event Code' }),
    latitude: z
      .float64()
      .min(-90)
      .max(90)
      .exactOptional()
      .openapi({ description: 'Latitude coordinate of tracking event.' }),
    longitude: z
      .float64()
      .min(-180)
      .max(180)
      .exactOptional()
      .openapi({ description: 'Longitude coordinate of tracking event.' }),
    occurred_at: DateTimeSchema.openapi({ description: 'Timestamp for carrier event' }),
    postal_code: z
      .string()
      .min(0)
      .openapi({ description: 'Postal code', example: 78756, readOnly: true }),
    signer: z
      .string()
      .min(0)
      .exactOptional()
      .openapi({ description: 'Signer information', readOnly: true }),
    state_province: z
      .string()
      .min(2)
      .openapi({ description: 'State province', example: 'TX', readOnly: true }),
    status_code: StatusCodeSchema,
    status_description: z
      .string()
      .min(1)
      .openapi({ description: 'Event Status Description', example: 'In Transit', readOnly: true }),
  })
  .openapi({
    description: 'A track event',
    required: [
      'occurred_at',
      'city_locality',
      'state_province',
      'postal_code',
      'carrier_detail_code',
      'status_code',
      'status_description',
      'carrier_status_code',
      'carrier_status_description',
    ],
    title: 'track_event',
  })
  .openapi('TrackEvent')

const TrackingInformationSchema = z
  .strictObject({
    actual_delivery_date: DateTimeSchema.exactOptional(),
    carrier_code: CarrierCodeSchema.exactOptional(),
    carrier_detail_code: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Carrier detail code', example: 'OT', readOnly: true }),
    carrier_id: SeIdSchema.exactOptional(),
    carrier_status_code: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({ description: 'Carrier status code', example: 1, readOnly: true }),
    carrier_status_description: z
      .string()
      .min(0)
      .exactOptional()
      .openapi({
        description: 'carrier status description',
        example: 'Your item was delivered in or at the mailbox at 9:10 am on March',
        readOnly: true,
      }),
    estimated_delivery_date: DateTimeSchema.exactOptional(),
    events: z
      .array(TrackEventSchema)
      .exactOptional()
      .openapi({
        description: 'The events that have occured during the lifetime of this tracking number.',
        readOnly: true,
      }),
    exception_description: z
      .string()
      .min(0)
      .exactOptional()
      .openapi({ description: 'Exception description', readOnly: true }),
    ship_date: DateTimeSchema.exactOptional(),
    status_code: StatusCodeSchema.exactOptional(),
    status_description: z
      .string()
      .min(0)
      .exactOptional()
      .openapi({ description: 'Status description', example: 'Delivered', readOnly: true }),
    tracking_number: TrackingNumberSchema.exactOptional(),
    tracking_url: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Carrier Tracking Url, if available',
        example: 'https://www.fedex.com/fedextrack/?action=track&trackingnumber=1234',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A tracking information resource',
    title: 'tracking_information',
    required: [],
  })
  .openapi('TrackingInformation')

const GetTrackingLogFromLabelResponseBodySchema = TrackingInformationSchema.openapi({
  description: 'A get tracking log from label response body',
  required: [
    'tracking_number',
    'status_code',
    'carrier_status_code',
    'estimated_delivery_date',
    'events',
  ],
  title: 'get_tracking_log_from_label_response_body',
}).openapi('GetTrackingLogFromLabelResponseBody')

const GetTrackingLogResponseBodySchema = TrackingInformationSchema.openapi({
  description: 'A get tracking log response body',
  required: [
    'tracking_number',
    'tracking_url',
    'status_code',
    'carrier_code',
    'carrier_id',
    'carrier_detail_code',
    'carrier_status_code',
    'estimated_delivery_date',
    'events',
  ],
  title: 'get_tracking_log_response_body',
}).openapi('GetTrackingLogResponseBody')

const GetWarehouseByIdResponseBodySchema = WarehouseSchema.openapi({
  description: 'A get warehouse by id response body',
  required: ['warehouse_id', 'name', 'created_at', 'origin_address', 'return_address'],
  title: 'get_warehouse_by_id_response_body',
}).openapi('GetWarehouseByIdResponseBody')

const GetWebhookByIdResponseBodySchema = WebhookSchema.openapi({
  description: 'A get webhook id response body',
  required: ['webhook_id', 'url', 'event'],
  title: 'get_webhook_by_id_response_body',
}).openapi('GetWebhookByIdResponseBody')

const ListBatchErrorsResponseBodySchema = z
  .strictObject({
    errors: z
      .array(BatchResponseErrorSchema)
      .default([])
      .openapi({ description: 'The errors currently associated with the batch', readOnly: true }),
    links: PaginationLinkSchema.openapi({ readOnly: true }),
  })
  .openapi({
    description: 'A batch errors response body',
    required: ['errors', 'links'],
    title: 'list_batch_errors_response_body',
  })
  .openapi('ListBatchErrorsResponseBody')

const ListBatchesResponseBodySchema = z
  .strictObject({
    batches: z
      .array(BatchSchema.openapi({ description: 'Batch' }))
      .min(0)
      .openapi({ description: 'Batch List', readOnly: true }),
    links: PaginationLinkSchema.openapi({ readOnly: true }),
    page: z
      .int32()
      .min(1)
      .openapi({
        description: 'The page that is currently being read',
        example: 1,
        readOnly: true,
      }),
    pages: z
      .int32()
      .min(1)
      .openapi({
        description: 'The total number of batch pages the API call returned',
        example: 10,
        readOnly: true,
      }),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'The total number of batches the API call returned',
        example: 10,
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A list batch response body',
    required: ['batches', 'total', 'page', 'pages', 'links'],
    title: 'list_batches_response_body',
  })
  .openapi('ListBatchesResponseBody')

const ListCarrierPackageTypesResponseBodySchema = z
  .strictObject({
    packages: z
      .array(
        PackageTypeSchema.openapi({ description: 'Custom Package Type items', readOnly: true }),
      )
      .exactOptional()
      .openapi({ description: 'An array of custom package types', readOnly: true }),
  })
  .openapi({
    description: 'A list carrier package types response body',
    title: 'list_carrier_package_types_response_body',
    required: [],
  })
  .openapi('ListCarrierPackageTypesResponseBody')

const ListCarrierServicesResponseBodySchema = z
  .strictObject({
    services: z
      .array(ServiceSchema.openapi({ description: 'A carrier service', readOnly: true }))
      .exactOptional()
      .openapi({ description: 'An array of services associated with the carrier', readOnly: true }),
  })
  .openapi({
    description: 'A carrier list services response body',
    title: 'list_carrier_services_response_body',
    required: [],
  })
  .openapi('ListCarrierServicesResponseBody')

const PagedListResponseBodySchema = z
  .looseObject({
    links: PaginationLinkSchema,
    page: z
      .int()
      .min(1)
      .openapi({
        description:
          'The current page number of results.  For example, if there are 80 results, and the page size is 25, then `page` could be 1, 2, 3, or 4.  The first three pages would contain 25 items each, and the fourth page would contain the five remaining items.',
        example: 1,
      }),
    pages: z
      .int()
      .min(0)
      .openapi({
        description:
          'The total number of pages of results.  For example, if there are 80 results, and the page size is 25, then `pages` would be 4.  The first three pages would contain 25 items each, and the fourth page would contain the five remaining items.  If there are no results, then `pages` will be zero.',
        example: 4,
      }),
    total: z
      .int()
      .min(0)
      .openapi({
        description: 'The total number of items across all pages of results',
        example: 2750,
      }),
  })
  .openapi({
    description:
      'Many ShipEngine endpoints return a paged list of items.  In addition to the returned items, these responses also include information about the total number of items, the number of pages of results, and URLs of other pages of results.\n',
    required: ['total', 'page', 'pages', 'links'],
    title: 'paged_list_response_body',
  })
  .openapi('PagedListResponseBody')

const ListLabelsResponseBodySchema = PagedListResponseBodySchema.and(
  z
    .object({
      labels: z
        .array(
          z
            .strictObject({
              alternative_identifiers: z
                .array(AlternativeIdentifierSchema)
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'Additional information some carriers may provide by which to identify a given label in their system. \n',
                  readOnly: true,
                }),
              batch_id: SeIdSchema.exactOptional().openapi({
                description:
                  'If this label was created as part of a [batch](https://www.shipengine.com/docs/labels/bulk/), then this is the unique ID of that batch.\n',
                readOnly: true,
              }),
              carrier_code: CarrierCodeSchema.exactOptional().openapi({
                description:
                  'The [shipping carrier](https://www.shipengine.com/docs/carriers/setup/) who will ship the package, such as `fedex`, `dhl_express`, `stamps_com`, etc.\n',
                readOnly: true,
              }),
              carrier_id: SeIdSchema.exactOptional().openapi({
                description:
                  'The unique ID of the [carrier account](https://www.shipengine.com/docs/carriers/setup/) that was used to create this label\n',
                readOnly: true,
              }),
              charge_event: LabelChargeEventSchema.exactOptional().openapi({
                description: 'The label charge event.\n',
              }),
              created_at: DateTimeSchema.exactOptional().openapi({
                description: 'The date and time that the label was created in ShipEngine.',
                readOnly: true,
              }),
              display_scheme: DisplaySchemeSchema.default('label')
                .exactOptional()
                .openapi({ description: 'The display format that the label should be shown in.' }),
              form_download: LinkSchema.nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The link to download the customs form (a.k.a. commercial invoice) for this shipment, if any.  Forms are in PDF format. This field is null if the shipment does not require a customs form, or if the carrier does not support it.\n',
                  readOnly: true,
                }),
              insurance_claim: LinkSchema.nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The link to submit an insurance claim for the shipment.  This field is null if the shipment is not insured or if the insurance provider does not support online claim submission.\n',
                  readOnly: true,
                }),
              insurance_cost: MonetaryValueSchema.exactOptional().openapi({
                description:
                  'The insurance cost for this package.  Add this to the `shipment_cost` field to get the total cost.\n',
                readOnly: true,
              }),
              is_international: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether this is an international shipment.  That is, the originating country and destination country are different.\n',
                  readOnly: true,
                }),
              is_return_label: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether this is a return label.  You may also want to set the `rma_number` so you know what is being returned.\n',
                }),
              label_download: LabelDownloadSchema.exactOptional().openapi({ readOnly: true }),
              label_download_type: LabelDownloadTypeSchema.default('url')
                .exactOptional()
                .openapi({ writeOnly: true }),
              label_format: LabelFormatSchema.default('pdf')
                .exactOptional()
                .openapi({
                  description:
                    'The file format that you want the label to be in.  We recommend `pdf` format because it is supported by all carriers, whereas some carriers do not support the `png` or `zpl` formats.\n',
                }),
              label_id: SeIdSchema.exactOptional().openapi({
                description:
                  'A string that uniquely identifies the label. This ID is generated by ShipEngine when the label is created.\n',
                readOnly: true,
              }),
              label_image_id: ImageIdSchema.nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The label image resource that was used to create a custom label image.',
                }),
              label_layout: LabelLayoutSchema.default('4x6')
                .exactOptional()
                .openapi({
                  description:
                    'The layout (size) that you want the label to be in.  The `label_format` determines which sizes are allowed.  `4x6` is supported for all label formats, whereas `letter` (8.5" x 11") is only supported for `pdf` format.\n',
                }),
              outbound_label_id: SeIdSchema.exactOptional().openapi({
                description:
                  'The `label_id` of the original (outgoing) label that the return label is for. This associates the two labels together, which is\nrequired by some carriers.\n',
                writeOnly: true,
              }),
              package_code: PackageCodeSchema.exactOptional().openapi({
                description:
                  'The [package type](https://www.shipengine.com/docs/reference/list-carrier-packages/), such as `thick_envelope`, `small_flat_rate_box`, `large_package`, etc.  The code `package` indicates a custom or unknown package type.\n',
                readOnly: true,
              }),
              packages: z
                .array(PackageSchema)
                .exactOptional()
                .openapi({
                  description:
                    "The label's package(s).\n\n> **Note:** Some carriers only allow one package per label.  If you attempt to create a multi-package label for a carrier that doesn't allow it, an error will be returned.\n",
                  readOnly: true,
                }),
              rma_number: z
                .string()
                .nullable()
                .exactOptional()
                .openapi({
                  description:
                    'An optional Return Merchandise Authorization number.  This field is useful for return labels.  You can set it to any string value.\n',
                }),
              service_code: ServiceCodeSchema.exactOptional().openapi({
                description:
                  'The [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) used to ship the package, such as `fedex_ground`, `usps_first_class_mail`, `flat_rate_envelope`, etc.\n',
                readOnly: true,
              }),
              ship_date: DateSchema.exactOptional().openapi({
                description:
                  'The date that the package was (or will be) shippped.  ShipEngine will take the day of week into consideration. For example, if the carrier does not operate on Sundays, then a package that would have shipped on Sunday will ship on Monday instead.\n',
                readOnly: true,
              }),
              shipment: ShipmentSchema.exactOptional().openapi({
                description: 'The shipment information used to generate the label',
                writeOnly: true,
              }),
              shipment_cost: MonetaryValueSchema.exactOptional().openapi({
                description:
                  'The cost of shipping, delivery confirmation, and other carrier charges.  This amount **does not** include insurance costs.\n',
                readOnly: true,
              }),
              shipment_id: SeIdSchema.exactOptional().openapi({
                description:
                  'The shipment that this label is for.  ShipEngine can create a shipment for you automatically when you [create a label](https://www.shipengine.com/docs/labels/create-a-label/), or you can [create your own shipment](https://www.shipengine.com/docs/shipping/create-a-shipment/) and then [use it to print a label](https://www.shipengine.com/docs/labels/create-from-shipment/)\n',
                readOnly: true,
              }),
              status: LabelStatusSchema.exactOptional().openapi({ readOnly: true }),
              test_label: z
                .boolean()
                .default(false)
                .exactOptional()
                .openapi({
                  deprecated: true,
                  description:
                    'Indicate if this label is being used only for testing purposes. If true, then no charge will be added to your account.',
                  writeOnly: true,
                }),
              trackable: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether the shipment is trackable, in which case the `tracking_status` field will reflect the current status and each package will have a `tracking_number`.\n',
                  readOnly: true,
                }),
              tracking_number: z
                .string()
                .min(1)
                .exactOptional()
                .openapi({
                  description:
                    'The tracking number for the package. Tracking number formats vary across carriers.',
                  example: '782758401696',
                  readOnly: true,
                }),
              tracking_status: TrackingStatusSchema.exactOptional().openapi({
                description:
                  'The current status of the package, such as `in_transit` or `delivered`',
                readOnly: true,
              }),
              validate_address: ValidateAddressSchema.default('validate_and_clean')
                .exactOptional()
                .openapi({ writeOnly: true }),
              voided: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    'Indicates whether the label has been [voided](https://www.shipengine.com/docs/labels/voiding/)\n',
                  readOnly: true,
                }),
              voided_at: DateTimeSchema.nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The date and time that the label was [voided](https://www.shipengine.com/docs/labels/voiding/), or `null` if the label has not been voided\n',
                  readOnly: true,
                }),
            })
            .openapi({
              description:
                'A label represents the physical sticker that you affix to a package to ship it.  ShipEngine makes it easy for you to [create labels](https://www.shipengine.com/docs/labels/create-a-label/) and then download them in PDF, PNG, or ZPL format so you can print them.\n',
              title: 'label',
              required: [],
            }),
        )
        .min(0)
        .openapi({
          description:
            'The labels that matched the query criteria.  If no matching labels were found, then this array is empty; otherwise, it contains one page of results.  The last page of results may have fewer labels than the `page_size`.\n',
        }),
    })
    .openapi({ required: ['labels'] }),
)
  .openapi({
    description: 'A list label response body',
    required: ['labels'],
    title: 'list_labels_response_body',
  })
  .openapi('ListLabelsResponseBody')

const ListManifestsResponseBodySchema = z
  .strictObject({
    links: PaginationLinkSchema.openapi({
      description: 'Helpful links to other pages of results',
      readOnly: true,
    }),
    manifests: z
      .array(ManifestSchema.openapi({ description: 'A single manifest', readOnly: true }))
      .default([])
      .openapi({ description: 'The list of available manifests', readOnly: true }),
    page: z
      .int32()
      .min(1)
      .openapi({
        description: 'Current page of the list manifests results',
        example: 3,
        readOnly: true,
      }),
    pages: z
      .int32()
      .min(1)
      .openapi({
        description: 'Total number of pages for list manifests results',
        example: 4,
        readOnly: true,
      }),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'The total number of manifests returned',
        example: 3,
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A list manifests response body',
    required: ['manifests', 'total', 'page', 'pages', 'links'],
    title: 'list_manifests_response_body',
  })
  .openapi('ListManifestsResponseBody')

const ListPackageTypesResponseBodySchema = z
  .strictObject({
    packages: z
      .array(
        PackageTypeSchema.openapi({ description: 'Custom Package Types items', readOnly: true }),
      )
      .exactOptional()
      .openapi({ description: 'An array of custom package types', readOnly: true }),
  })
  .openapi({
    description: 'A list package types response body',
    title: 'list_package_types_response_body',
    required: [],
  })
  .openapi('ListPackageTypesResponseBody')

const ListServicePointsResponseBodySchema = z
  .object({
    errors: z
      .array(ErrorSchema)
      .exactOptional()
      .openapi({ description: 'The errors associated with the failed API call', readOnly: true }),
    lat: z.float64().exactOptional().openapi({ example: 48.842608 }),
    long: z.float64().exactOptional().openapi({ example: 0.032875 }),
    service_points: z
      .array(
        z
          .object({
            address_line1: z.string().exactOptional().openapi({ example: 'PLACE DU CANADA' }),
            carrier_code: z.string().exactOptional().openapi({ example: 'chronopost' }),
            city_locality: z.string().exactOptional().openapi({ example: 'TRUN' }),
            company_name: z.string().exactOptional().openapi({ example: 'My fancy company name' }),
            country_code: z.string().exactOptional().openapi({ example: 'FR' }),
            distance_in_meters: z.float64().exactOptional().openapi({ example: 728.9959308847579 }),
            features: z
              .array(
                z.enum([
                  'drop_off_point',
                  'pickup_point',
                  'print_services',
                  'after_hours_locker',
                  'after_hours_dropbox',
                ]),
              )
              .exactOptional(),
            hours_of_operation: z
              .object({
                friday: z
                  .array(
                    z
                      .object({
                        close: z.string().exactOptional().openapi({ example: '12:00' }),
                        open: z.string().exactOptional().openapi({ example: '09:15' }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                monday: z
                  .array(
                    z
                      .object({
                        close: z.string().exactOptional().openapi({ example: '12:00' }),
                        open: z.string().exactOptional().openapi({ example: '09:15' }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                saturday: z
                  .array(
                    z
                      .object({
                        close: z.string().exactOptional().openapi({ example: '12:00' }),
                        open: z.string().exactOptional().openapi({ example: '09:15' }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                sunday: z
                  .array(
                    z
                      .object({
                        close: z.string().exactOptional().openapi({ example: '12:00' }),
                        open: z.string().exactOptional().openapi({ example: '09:15' }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                thursday: z
                  .array(
                    z
                      .object({
                        close: z.string().exactOptional().openapi({ example: '12:00' }),
                        open: z.string().exactOptional().openapi({ example: '09:15' }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                tuesday: z
                  .array(
                    z
                      .object({
                        close: z.string().exactOptional().openapi({ example: '12:00' }),
                        open: z.string().exactOptional().openapi({ example: '09:15' }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
                wednesday: z
                  .array(
                    z
                      .object({
                        close: z.string().exactOptional().openapi({ example: '12:00' }),
                        open: z.string().exactOptional().openapi({ example: '09:15' }),
                      })
                      .openapi({ required: [] }),
                  )
                  .exactOptional(),
              })
              .exactOptional()
              .openapi({ required: [] }),
            lat: z.float64().exactOptional().openapi({ example: 48.842608 }),
            long: z.float64().exactOptional().openapi({ example: 0.032875 }),
            phone_number: z.string().exactOptional().openapi({ example: '555-555-5555' }),
            postal_code: z.string().exactOptional().openapi({ example: '61160' }),
            service_codes: z
              .array(z.string().openapi({ example: 'chronoclassic' }))
              .exactOptional(),
            service_point_id: z.string().exactOptional().openapi({ example: '614940' }),
            state_province: z.string().exactOptional().openapi({ example: 'TRUN' }),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
  })
  .openapi({
    description: 'A list service points response body',
    title: 'list_service_points_response_body',
    required: [],
  })
  .openapi('ListServicePointsResponseBody')

const ListShipmentRatesResponseBodySchema = RatesInformationSchema.openapi({
  description: 'A list shipment rates response body',
  required: [
    'rates',
    'invalid_rates',
    'rate_request_id',
    'shipment_id',
    'created_at',
    'status',
    'errors',
  ],
  title: 'list_shipment_rates_response_body',
}).openapi('ListShipmentRatesResponseBody')

const ListShipmentsResponseBodySchema = z
  .strictObject({
    links: PaginationLinkSchema.openapi({ readOnly: true }),
    page: z.int32().min(1).openapi({ example: '????', readOnly: true }),
    pages: z.int32().min(1).openapi({ readOnly: true }),
    shipments: z
      .array(ShipmentSchema.openapi({ description: 'A shipment object', readOnly: true }))
      .openapi({ description: 'The list of shipments returned by the api call', readOnly: true }),
    total: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'Total number of shipments returned by the api call',
        example: 1990,
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A list shipment response body',
    required: ['shipments', 'total', 'page', 'pages', 'links'],
    title: 'list_shipments_response_body',
  })
  .openapi('ListShipmentsResponseBody')

const ListTagsResponseBodySchema = z
  .strictObject({
    tags: z
      .array(TagSchema)
      .exactOptional()
      .openapi({ description: 'The array of tags returned by the API call' }),
  })
  .openapi({
    description: 'Response body from a successful GET /tags API call',
    title: 'list_tags_response_body',
    required: [],
  })
  .openapi('ListTagsResponseBody')

const ListWarehousesResponseBodySchema = z
  .strictObject({
    warehouses: z
      .array(WarehouseSchema.openapi({ readOnly: true }))
      .openapi({ description: 'The array of warehouses returned by the API call', readOnly: true }),
  })
  .openapi({
    description: 'A warehouse list response body',
    required: ['warehouses'],
    title: 'list_warehouses_response_body',
  })
  .openapi('ListWarehousesResponseBody')

const ListWebhooksResponseBodySchema = z
  .array(WebhookSchema.openapi({ description: 'The webhook list response body' }))
  .openapi({ description: 'A webhook list response body', title: 'list_webhooks_response_body' })
  .openapi('ListWebhooksResponseBody')

const NormalizedEntitySchema = z
  .looseObject({})
  .openapi({
    description:
      'The normalized value of the entity.\n\nMost entity results have a `value` field, which is the normalized value of the entity.  For example, if the substring "john doe" was recognized as a "person" entity, then the value might be normalized to have proper capitalization (e.g. "John Doe").  Or if the substring "ft worth" was recognized as a "city" entity, then the value might be normalized to "Fort Worth".\n\nSome entities have other information in addition to, or instead of a `value`.  For example, a "dimensions" entity will have separate fields for `length`, `width`, `height`, and `unit`.\n',
    title: 'normalized_entity',
  })
  .openapi('NormalizedEntity')

const ParseAddressRequestBodySchema = z
  .strictObject({
    address: PartialAddressSchema.exactOptional().openapi({
      description:
        "You can optionally provide any already-known address values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines.\n",
    }),
    text: z
      .string()
      .min(1)
      .openapi({
        description: 'The unstructured text that contains address-related entities',
        example:
          'Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652.',
      }),
  })
  .openapi({
    description:
      "The only required field is `text`, which is the text to be parsed. You can optionally also provide an `address` containing already-known values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines.\n",
    required: ['text'],
    title: 'parse_address_request_body',
  })
  .openapi('ParseAddressRequestBody')

const RecognizedEntitySchema = z
  .strictObject({
    end_index: z
      .int()
      .min(0)
      .openapi({
        description: 'The index of the last character of this entity within the original text',
      }),
    result: NormalizedEntitySchema.exactOptional(),
    score: z
      .float64()
      .min(0)
      .max(1)
      .openapi({
        description:
          'A confidence score between zero and one that indicates how certain the API is that it correctly recognized this entity\n',
      }),
    start_index: z
      .int()
      .min(0)
      .openapi({
        description: 'The index of the first character of this entity within the original text',
      }),
    text: z
      .string()
      .min(1)
      .openapi({
        description: 'The substring from the original text that was recognized as this entity',
      }),
    type: z
      .string()
      .min(1)
      .openapi({ description: 'The Entity type (e.g. "weight", "person", "address_line1", etc.)' }),
  })
  .openapi({
    description:
      'An entity is a single piece of data that was recognized in unstructured text.  For example, a city, a postal code, package dimensions, insured value, etc.  Each entity includes the original text and the parsed value.\n',
    required: ['type', 'score', 'text', 'start_index', 'end_index'],
    title: 'recognized_entity',
  })
  .openapi('RecognizedEntity')

const ParseAddressResponseBodySchema = z
  .strictObject({
    address: PartialAddressSchema.openapi({
      description:
        'The parsed address.  This address may not be complete, depending on how much information was included in the text and how confident the API is about each recognized entity.\n\n> **Note:** The address-recognition API does not currently perform any validation of the parsed address, so we recommend that you use the [address-validation API](https://www.shipengine.com/docs/addresses/validation/) to ensure that the address is correct.\n',
    }),
    entities: z
      .array(RecognizedEntitySchema)
      .min(0)
      .openapi({
        description:
          'All of the entities that were recognized in the text. An "entity" is a single piece of data, such as a city, a postal code, or an address line.  Each entity includes the original text and the parsed value.\n',
      }),
    score: z
      .float64()
      .min(0)
      .max(1)
      .openapi({
        description:
          'A confidence score between zero and one that indicates how certain the API is that it understood the text.\n',
      }),
  })
  .openapi({
    description:
      'The parsed address, as well as a confidence score and a list of all the entities that were recognized in the text.\n',
    required: ['score', 'address', 'entities'],
    title: 'parse_address_response_body',
  })
  .openapi('ParseAddressResponseBody')

const ParseShipmentRequestBodySchema = z
  .strictObject({
    shipment: PartialShipmentSchema.exactOptional().openapi({
      description:
        'You can optionally provide a `shipment` object containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use.\n',
    }),
    text: z
      .string()
      .min(1)
      .openapi({
        description: 'The unstructured text that contains shipping-related entities',
        example:
          "I have a 4oz package that's 5x10x14in, and I need to ship it to Margie McMiller at 3800 North Lamar suite 200 in austin, tx 78652. Please send it via USPS first class and require an adult signature. It also needs to be insured for $400.\n",
      }),
  })
  .openapi({
    description:
      'The only required field is `text`, which is the text to be parsed. You can optionally also provide a `shipment` containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use.\n',
    required: ['text'],
    title: 'parse_shipment_request_body',
  })
  .openapi('ParseShipmentRequestBody')

const ParseShipmentResponseBodySchema = z
  .strictObject({
    entities: z
      .array(RecognizedEntitySchema)
      .min(0)
      .openapi({
        description:
          'All of the entities that were recognized in the text. An "entity" is a single piece of data, such as a city, a postal code, a carrier name, or a package weight.  Each entity includes the original text and the parsed value.\n',
      }),
    score: z
      .float64()
      .min(0)
      .max(1)
      .openapi({
        description:
          'A confidence score between zero and one that indicates how certain the API is that it understood the text.\n',
      }),
    shipment: PartialShipmentSchema.openapi({
      description:
        'The parsed shipment.  This shipment may not be complete, depending on how much information was included in the text and how confident the API is about each recognized entity.\n\n> **Note:** The shipment-recognition API does not currently perform any validation of the parsed addresses, so we recommend that you use the [address-validation API](https://www.shipengine.com/docs/addresses/validation/) to ensure that the addresses are correct.\n',
    }),
  })
  .openapi({
    description:
      'The parsed shipment, as well as a confidence score and a list of all the shipping entities that were recognized in the text.\n',
    required: ['score', 'shipment', 'entities'],
    title: 'parse_shipment_response_body',
  })
  .openapi('ParseShipmentResponseBody')

const ProcessBatchRequestBodySchema = z
  .strictObject({
    display_scheme: DisplaySchemeSchema.default('label')
      .exactOptional()
      .openapi({ description: 'The display format that the label should be shown in.' }),
    label_format: LabelFormatSchema.default('pdf').exactOptional(),
    label_layout: LabelLayoutSchema.default('4x6').exactOptional(),
    ship_date: DateTimeSchema.exactOptional().openapi({
      description: 'The Ship date the batch is being processed for',
    }),
  })
  .openapi({
    description: 'A process batch request body',
    title: 'process_batch_request_body',
    required: [],
  })
  .openapi('ProcessBatchRequestBody')

const RateEstimateByCarrierIdSchema = z
  .object({
    carrier_id: SeIdSchema.exactOptional().openapi({
      deprecated: true,
      description: 'A string that uniquely identifies the carrier',
    }),
  })
  .openapi({ title: 'rate_estimate_by_carrier_id', required: [] })
  .openapi('RateEstimateByCarrierId')

const RateEstimateByCarrierIdsSchema = z
  .object({
    carrier_ids: z
      .array(SeIdSchema.openapi({ description: 'carrier id' }))
      .min(1)
      .exactOptional()
      .openapi({ description: 'Array of Carrier Ids' }),
  })
  .openapi({ title: 'rate_estimate_by_carrier_ids', required: [] })
  .openapi('RateEstimateByCarrierIds')

const RateRequestByShipmentIdsSchema = z
  .object({
    shipment_ids: z
      .array(SeIdSchema.openapi({ description: 'shipment ids' }))
      .openapi({ description: 'The array of shipment IDs' }),
  })
  .openapi({ required: ['shipment_ids'], title: 'rate_request_by_shipment_ids' })
  .openapi('RateRequestByShipmentIds')

const RateRequestByShipmentsSchema = z
  .object({
    shipments: z
      .array(
        AddressValidatingShipmentSchema.openapi({
          description: 'The shipment to get a bulk rate estimate for',
        }),
      )
      .min(1)
      .openapi({ description: 'The array of shipments to get bulk rate estimates for' }),
  })
  .openapi({ required: ['shipments'], title: 'rate_request_by_shipments' })
  .openapi('RateRequestByShipments')

const RedirectSchema = z
  .literal('shipengine-dashboard')
  .openapi({ description: 'The resource to return a redirect URL to.', title: 'redirect' })
  .openapi('Redirect')

const RemoveFromBatchRequestBodySchema = ModifyBatchSchema.openapi({
  description: 'A modify batch request body',
  title: 'remove_from_batch_request_body',
}).openapi('RemoveFromBatchRequestBody')

const SchedulePickupRequestBodySchema = PickupSchema.openapi({
  description: 'A schedule pickup request body',
  required: ['contact_details', 'label_ids', 'pickup_window'],
  title: 'schedule_pickup_request_body',
}).openapi('SchedulePickupRequestBody')

const SchedulePickupResponseBodySchema = PickupSchema.and(ErrorResponseBodySchema)
  .openapi({ title: 'schedule_pickup_response_body' })
  .openapi('SchedulePickupResponseBody')

const ShipmentIdRequestSchema = z
  .object({
    shipment_id: SeIdSchema.exactOptional().openapi({
      description: 'A string that uniquely identifies the shipment',
    }),
  })
  .openapi({ title: 'shipment_id_request', required: [] })
  .openapi('ShipmentIdRequest')

const ShipmentRequestSchema = z
  .object({
    shipment: AddressValidatingShipmentSchema.exactOptional().openapi({
      description: 'The shipment object',
    }),
  })
  .openapi({ title: 'shipment_request', required: [] })
  .openapi('ShipmentRequest')

const ShipmentsSortBySchema = z
  .enum(['modified_at', 'created_at'])
  .openapi({ description: 'The possible shipments sort by values', title: 'shipments_sort_by' })
  .openapi('ShipmentsSortBy')

const SortDirSchema = z
  .enum(['asc', 'desc'])
  .openapi({
    description:
      'Controls the sort order of queries\n\n|Value     |Description\n|:---------|:-----------------------------------------------------\n|`asc`     |Return results in ascending order\n|`desc`    |Return results in descending order\n',
    title: 'sort_dir',
  })
  .openapi('SortDir')

const TagNameSchema = z
  .string()
  .min(1)
  .openapi({
    description:
      'Tags are arbitrary strings that you can use to categorize shipments.  For example, you may want to use tags to distinguish between domestic and international shipments, or between insured and uninsured shipments.  Or maybe you want to create a tag for each of your customers so you can easily retrieve every shipment for a customer.\n',
    example: 'Fragile',
    title: 'tag_name',
  })
  .openapi('TagName')

const TagShipmentResponseBodySchema = z
  .strictObject({
    shipment_id: SeIdSchema.openapi({
      description: 'A string that uniquely identifies the shipment',
      readOnly: true,
    }),
    tag: TagSchema.openapi({
      description: 'The tag that is now associated with this shipment',
      readOnly: true,
    }),
  })
  .openapi({
    description: 'A shipment add tag response body',
    required: ['shipment_id', 'tag'],
    title: 'tag_shipment_response_body',
  })
  .openapi('TagShipmentResponseBody')

const TokensGetEphemeralTokenResponseBodyYamlSchema = z
  .object({
    redirect_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The redirect url formatted with the requested token.' }),
    token: z
      .string()
      .exactOptional()
      .openapi({ description: 'The requested token that expires in 10 seconds.' }),
  })
  .openapi({ title: 'tokens_get_ephemeral_token_response_body.yaml', required: [] })
  .openapi('TokensGetEphemeralTokenResponseBodyYaml')

const UpdateAmazonBuyShippingRequestBodySchema = z
  .strictObject({ email: z.string().min(1).exactOptional().openapi({ description: 'Email' }) })
  .openapi({
    description: 'An amazon buy shipping account settings request body',
    title: 'update_amazon_buy_shipping_request_body',
    required: [],
  })
  .openapi('UpdateAmazonBuyShippingRequestBody')

const UpdateDhlExpressSettingsRequestBodySchema = DhlExpressAccountSettingsSchema.openapi({
  description: 'An update dhl express settings request body',
  title: 'update_dhl_express_settings_request_body',
}).openapi('UpdateDhlExpressSettingsRequestBody')

const UpdateFedexSettingsRequestBodySchema = FedexAccountSettingsSchema.openapi({
  description: 'An update Fedex settings request body',
  title: 'update_fedex_settings_request_body',
}).openapi('UpdateFedexSettingsRequestBody')

const UpdateNewgisticsSettingsRequestBodySchema = z
  .strictObject({
    include_barcode_with_order_number: z.boolean().exactOptional(),
    receive_email_on_manifest_processing: z.boolean().exactOptional(),
  })
  .openapi({
    description: 'A newgistics account settings request body',
    title: 'update_newgistics_settings_request_body',
    required: [],
  })
  .openapi('UpdateNewgisticsSettingsRequestBody')

const UpdateUpsSettingsRequestBodySchema = UpsAccountSettingsSchema.openapi({
  description: 'An update UPS settings request body',
  title: 'update_ups_settings_request_body',
}).openapi('UpdateUpsSettingsRequestBody')

const UpdateCarrierSettingsRequestBodySchema = z
  .xor([
    UpdateDhlExpressSettingsRequestBodySchema,
    UpdateFedexSettingsRequestBodySchema,
    UpdateNewgisticsSettingsRequestBodySchema,
    UpdateUpsSettingsRequestBodySchema,
    UpdateAmazonBuyShippingRequestBodySchema,
  ])
  .openapi({ title: 'update_carrier_settings_request_body' })
  .openapi('UpdateCarrierSettingsRequestBody')

const UpdatePackageTypeRequestBodySchema = PackageTypeSchema.openapi({
  description: 'An update package type request body',
  title: 'update_package_type_request_body',
}).openapi('UpdatePackageTypeRequestBody')

const UpdateShipmentFieldsSchema = z
  .object({ validate_address: ValidateAddressSchema.default('no_validation').exactOptional() })
  .openapi({ title: 'update_shipment_fields', required: [] })
  .openapi('UpdateShipmentFields')

const UpdateShipmentRequestBodySchema = PartialShipmentSchema.and(UpdateShipmentFieldsSchema)
  .openapi({
    description: 'An update shipment request body',
    required: ['ship_to', 'ship_from'],
    title: 'update_shipment_request_body',
  })
  .openapi('UpdateShipmentRequestBody')

const UpdateShipmentResponseBodySchema = CreateAndValidateShipmentSchema.openapi({
  description: 'An update shipment response body',
  required: [
    'errors',
    'has_errors',
    'address_validation',
    'shipment_id',
    'carrier_id',
    'service_code',
    'ship_date',
    'created_at',
    'shipment_status',
    'ship_to',
    'ship_from',
    'return_to',
    'confirmation',
    'customs',
    'advanced_options',
    'insurance_provider',
    'tags',
    'packages',
    'total_weight',
  ],
  title: 'update_shipment_response_body',
}).openapi('UpdateShipmentResponseBody')

const UpdateWarehouseRequestBodySchema = WarehouseSchema.openapi({
  description: 'An update warehouse request body',
  required: ['name', 'origin_address'],
  title: 'update_warehouse_request_body',
}).openapi('UpdateWarehouseRequestBody')

const UpdateWarehouseSettingsRequestBodySchema = z
  .strictObject({
    is_default: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The default property on the warehouse.', example: true }),
  })
  .openapi({
    description: 'An update warehouse settings request body',
    title: 'update_warehouse_settings_request_body',
    required: [],
  })
  .openapi('UpdateWarehouseSettingsRequestBody')

const UpdateWebhookRequestBodySchema = z
  .strictObject({
    url: UrlSchema.exactOptional().openapi({
      description: 'The url that the wehbook sends the request',
      example: 'https://[YOUR ENDPOINT ID].x.requestbin.com',
    }),
  })
  .openapi({
    description: 'An update webhook request body',
    title: 'update_webhook_request_body',
    required: [],
  })
  .openapi('UpdateWebhookRequestBody')

const ValidateAddressRequestBodySchema = z
  .array(AddressToValidateSchema.openapi({ description: 'An array of addresses to validate.' }))
  .openapi({
    description: 'An address validation request body',
    title: 'validate_address_request_body',
  })
  .openapi('ValidateAddressRequestBody')

const ValidateAddressResponseBodySchema = z
  .array(
    AddressValidationResultSchema.openapi({
      description: 'The address validation response body',
      readOnly: true,
    }),
  )
  .openapi({
    description: 'An address validation response body',
    title: 'validate_address_response_body',
  })
  .openapi('ValidateAddressResponseBody')

const VoidLabelResponseBodySchema = z
  .strictObject({
    approved: z
      .boolean()
      .openapi({
        description: 'Indicates whether the attempt to void the label was successful',
        readOnly: true,
      }),
    message: z
      .string()
      .min(0)
      .openapi({
        example: 'Request for refund submitted.  This label has been voided.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'A void label response body',
    required: ['approved', 'message'],
    title: 'void_label_response_body',
  })
  .openapi('VoidLabelResponseBody')

const _400ErrorResponseResponse = {
  description: 'The request contained errors.',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const _404ErrorResponseResponse = {
  description: 'The specified resource does not exist.',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const _409ErrorResponseResponse = {
  description: 'The request conflicts with an existing resource.',
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const _500ErrorResponseResponse = {
  description:
    "An error occurred on ShipEngine's side.\n\n> This error will automatically be reported to our engineers.\n",
  content: { 'application/json': { schema: ErrorResponseBodySchema } },
}

const ApiKeySecurityScheme = {
  description:
    "To authenticate yourself to ShipEngine, you need to include an `API-Key` header in each API call. If you don't include a key when making an API request, or if you use an incorrect or expired key, then ShipEngine will respond with a `401 Unauthorized` error.\n\nLearn more about API keys in our [authentication guide](https://www.shipengine.com/docs/auth/).\n",
  in: 'header',
  name: 'API-Key',
  type: 'apiKey',
}

export const putV1AddressesRecognizeRoute = createRoute({
  method: 'put',
  path: '/v1/addresses/recognize',
  tags: ['addresses'],
  summary: 'Parse an address',
  description:
    "The address-recognition API makes it easy for you to extract address data from unstructured text, including the recipient name, line 1, line 2, city, postal code, and more.\n\nData often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's address-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed address data is returned in the same structure that's used for other ShipEngine APIs, such as address validation, rate quotes, and shipping labels.\n\n> **Note:** Address recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.\n",
  operationId: 'parse_address',
  request: {
    body: {
      description:
        "The only required field is `text`, which is the text to be parsed. You can optionally also provide an `address` containing already-known values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines.\n",
      content: {
        'application/json': {
          schema: ParseAddressRequestBodySchema,
          examples: {
            some_known_fields: {
              summary: 'Some known fields',
              description:
                "You can optionally provide an `address` object containing any already-known values. For example, you may already know the recipient's name, city, and country, and only want to parse the street address into separate lines.\n",
              value: {
                address: { address_residential_indicator: 'yes', country_code: 'US' },
                text: 'Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652.',
              },
            },
            text_only: {
              summary: 'Text only',
              description:
                'This is the simplest way to call the address-recognition API. Just pass the text to be parsed and nothing else.\n',
              value: {
                text: 'Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652.',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Returns the parsed address, as well as a confidence score and a list of all the entities that were recognized in the text.\n',
      content: {
        'application/json': {
          schema: ParseAddressResponseBodySchema,
          examples: {
            some_known_fields: {
              description:
                'This response is shows that the address-recognition API was able to recognize all the address entities in the text.  Notice that the `country_code` and `address_residential_indicator` fields are populated with the values that were provided in the request.\n',
              value: {
                address: {
                  address_line1: '3800 North Lamar',
                  address_line2: 'Suite 200',
                  address_residential_indicator: 'yes',
                  city_locality: 'Austin',
                  country_code: 'US',
                  name: 'Margie McMiller',
                  postal_code: 78652,
                  state_province: 'TX',
                },
                entities: [
                  {
                    end_index: 14,
                    result: { value: 'Margie McMiller' },
                    score: 0.9519646137063122,
                    start_index: 0,
                    text: 'Margie McMiller',
                    type: 'person',
                  },
                  {
                    end_index: 34,
                    result: { line: 1, value: '3800 North Lamar' },
                    score: 0.9805313966503588,
                    start_index: 19,
                    text: '3800 North Lamar',
                    type: 'address_line',
                  },
                  {
                    end_index: 22,
                    result: { type: 'cardinal', value: 3800 },
                    score: 0.9805313966503588,
                    start_index: 19,
                    text: 3800,
                    type: 'number',
                  },
                  {
                    end_index: 44,
                    result: { line: 2, value: 'Suite 200' },
                    score: 1,
                    start_index: 36,
                    text: 'suite 200',
                    type: 'address_line',
                  },
                  {
                    end_index: 44,
                    result: { type: 'cardinal', value: 200 },
                    score: 0.9805313966503588,
                    start_index: 42,
                    text: 200,
                    type: 'number',
                  },
                  {
                    end_index: 54,
                    result: { value: 'Austin' },
                    score: 0.9805313966503588,
                    start_index: 49,
                    text: 'austin',
                    type: 'city_locality',
                  },
                  {
                    end_index: 58,
                    result: { name: 'Texas', value: 'TX' },
                    score: 0.6082904353940255,
                    start_index: 57,
                    text: 'tx',
                    type: 'state_province',
                  },
                  {
                    end_index: 88,
                    result: { value: 78652 },
                    score: 0.9519646137063122,
                    start_index: 84,
                    text: 78652,
                    type: 'postal_code',
                  },
                ],
                score: 0.9122137426845613,
              },
            },
            text_only: {
              description:
                'This response shows that the address-recognition API was able to recognize all the address entities in the text.  Notice that the `country_code` is not populated and the `address_residential_indicator` is "unknown", since neither of these fields was included in the text.\n',
              value: {
                address: {
                  address_line1: '3800 North Lamar',
                  address_line2: 'Suite 200',
                  address_residential_indicator: 'unknown',
                  city_locality: 'Austin',
                  name: 'Margie McMiller',
                  postal_code: 78652,
                  state_province: 'TX',
                },
                entities: [
                  {
                    end_index: 14,
                    result: { value: 'Margie McMiller' },
                    score: 0.9519646137063122,
                    start_index: 0,
                    text: 'Margie McMiller',
                    type: 'person',
                  },
                  {
                    end_index: 34,
                    result: { line: 1, value: '3800 North Lamar' },
                    score: 0.9805313966503588,
                    start_index: 19,
                    text: '3800 North Lamar',
                    type: 'address_line',
                  },
                  {
                    end_index: 22,
                    result: { type: 'cardinal', value: 3800 },
                    score: 0.9805313966503588,
                    start_index: 19,
                    text: 3800,
                    type: 'number',
                  },
                  {
                    end_index: 44,
                    result: { line: 2, value: 'Suite 200' },
                    score: 1,
                    start_index: 36,
                    text: 'suite 200',
                    type: 'address_line',
                  },
                  {
                    end_index: 44,
                    result: { type: 'cardinal', value: 200 },
                    score: 0.9805313966503588,
                    start_index: 42,
                    text: 200,
                    type: 'number',
                  },
                  {
                    end_index: 54,
                    result: { value: 'Austin' },
                    score: 0.9805313966503588,
                    start_index: 49,
                    text: 'austin',
                    type: 'city_locality',
                  },
                  {
                    end_index: 58,
                    result: { name: 'Texas', value: 'TX' },
                    score: 0.6082904353940255,
                    start_index: 57,
                    text: 'tx',
                    type: 'state_province',
                  },
                  {
                    end_index: 88,
                    result: { value: 78652 },
                    score: 0.9519646137063122,
                    start_index: 84,
                    text: 78652,
                    type: 'postal_code',
                  },
                ],
                score: 0.9122137426845613,
              },
            },
          },
        },
      },
    },
    400: _400ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1AddressesValidateRoute = createRoute({
  method: 'post',
  path: '/v1/addresses/validate',
  tags: ['addresses'],
  summary: 'Validate An Address',
  description:
    'Address validation ensures accurate addresses and can lead to reduced shipping costs by preventing address correction surcharges.\nShipEngine cross references multiple databases to validate addresses and identify potential deliverability issues.\n',
  operationId: 'validate_address',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ValidateAddressRequestBodySchema,
          examples: {
            all_known_fields_request: {
              summary: 'All Known Fields',
              description: 'A call that returns a status of `verified`.',
              value: [
                {
                  address_line1: '500 South Buena Vista Street',
                  city_locality: 'Burbank',
                  company_name: 'The Walt Disney Company',
                  country_code: 'US',
                  name: 'Mickey and Minnie Mouse',
                  phone: '714-781-4565',
                  postal_code: 91521,
                  state_province: 'CA',
                },
              ],
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: {
        'application/json': {
          schema: ValidateAddressResponseBodySchema,
          examples: {
            all_known_fields: {
              summary: 'All Known Fields',
              description: 'A response for a `verified` status call.',
              value: [
                {
                  matched_address: {
                    address_line1: '500 S BUENA VISTA ST',
                    address_line2: null,
                    address_line3: null,
                    address_residential_indicator: 'no',
                    city_locality: 'BURBANK',
                    company_name: 'THE WALT DISNEY COMPANY',
                    country_code: 'US',
                    name: 'MICKEY AND MINNIE MOUSE',
                    phone: '714-781-4565',
                    postal_code: '91521-0007',
                    state_province: 'CA',
                  },
                  messages: [],
                  original_address: {
                    address_line1: '500 South Buena Vista Street',
                    address_line2: null,
                    address_line3: null,
                    address_residential_indicator: 'unknown',
                    city_locality: 'Burbank',
                    company_name: 'The Walt Disney Company',
                    country_code: 'US',
                    name: 'Mickey and Minnie Mouse',
                    phone: '714-781-4565',
                    postal_code: 91521,
                    state_province: 'CA',
                  },
                  status: 'verified',
                },
              ],
            },
            empty_fields: {
              summary: 'Empty Fields',
              description: 'A response for an `unverified` API Call with error message',
              value: [
                {
                  matched_address: null,
                  messages: [
                    {
                      code: 'a1001',
                      detail_code: 'unsupported_country',
                      message:
                        'country_code is not currently a supported country please check the documentation for acceptable 2-letter country codes.',
                      type: 'error',
                    },
                  ],
                  original_address: {
                    address_line1: null,
                    address_line2: null,
                    address_line3: null,
                    address_residential_indicator: 'unknown',
                    city_locality: null,
                    company_name: null,
                    country_code: null,
                    name: null,
                    phone: null,
                    postal_code: null,
                    state_province: null,
                  },
                  status: 'unverified',
                },
              ],
            },
          },
        },
      },
    },
    400: _400ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1BatchesRoute = createRoute({
  method: 'get',
  path: '/v1/batches',
  tags: ['batches'],
  summary: 'List Batches',
  description: 'List Batches associated with your Shipengine account',
  operationId: 'list_batches',
  request: {
    query: z.object({
      status: BatchStatusSchema.openapi({
        param: {
          in: 'query',
          name: 'status',
          required: false,
          schema: { $ref: '#/components/schemas/batch_status' },
        },
      }).exactOptional(),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              "Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.\n",
            example: 2,
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return per response.',
            example: 50,
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 25, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
      sort_dir: SortDirSchema.default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Controls the sort order of the query.',
            in: 'query',
            name: 'sort_dir',
            required: false,
            schema: { allOf: [{ $ref: '#/components/schemas/sort_dir' }], default: 'desc' },
          },
        }),
      batch_number: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Batch Number',
            in: 'query',
            name: 'batch_number',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort_by: BatchesSortBySchema.openapi({
        param: {
          in: 'query',
          name: 'sort_by',
          required: false,
          schema: { $ref: '#/components/schemas/batches_sort_by' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: ListBatchesResponseBodySchema } },
    },
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1BatchesRoute = createRoute({
  method: 'post',
  path: '/v1/batches',
  tags: ['batches'],
  summary: 'Create A Batch',
  description: 'Create a Batch',
  operationId: 'create_batch',
  request: {
    body: {
      content: { 'application/json': { schema: CreateBatchRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The requested object creation was a success.',
      content: { 'application/json': { schema: CreateBatchResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1BatchesExternalBatchIdExternalBatchIdRoute = createRoute({
  method: 'get',
  path: '/v1/batches/external_batch_id/{external_batch_id}',
  tags: ['batches'],
  summary: 'Get Batch By External ID',
  description: 'Get Batch By External ID',
  operationId: 'get_batch_by_external_id',
  request: {
    params: z.object({
      external_batch_id: z
        .string()
        .openapi({
          param: {
            example: '13553d7f-3c87-4771-bae1-c49bacef11cb',
            in: 'path',
            name: 'external_batch_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetBatchByExternalIdResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1BatchesBatchIdRoute = createRoute({
  method: 'get',
  path: '/v1/batches/{batch_id}',
  tags: ['batches'],
  summary: 'Get Batch By ID',
  description: 'Get Batch By ID',
  operationId: 'get_batch_by_id',
  request: {
    params: z.object({
      batch_id: SeIdSchema.openapi({
        param: {
          description: 'Batch ID',
          in: 'path',
          name: 'batch_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetBatchByIdResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const putV1BatchesBatchIdRoute = createRoute({
  method: 'put',
  path: '/v1/batches/{batch_id}',
  tags: ['batches'],
  summary: 'Update Batch By Id',
  description: 'Update Batch By Id',
  operationId: 'update_batch',
  request: {
    params: z.object({
      batch_id: SeIdSchema.openapi({
        param: {
          description: 'Batch ID',
          in: 'path',
          name: 'batch_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const deleteV1BatchesBatchIdRoute = createRoute({
  method: 'delete',
  path: '/v1/batches/{batch_id}',
  tags: ['batches'],
  summary: 'Delete Batch By Id',
  description: 'Delete Batch By Id',
  operationId: 'delete_batch',
  request: {
    params: z.object({
      batch_id: SeIdSchema.openapi({
        param: {
          description: 'Batch ID',
          in: 'path',
          name: 'batch_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1BatchesBatchIdAddRoute = createRoute({
  method: 'post',
  path: '/v1/batches/{batch_id}/add',
  tags: ['batches'],
  summary: 'Add to a Batch',
  description: 'Add a Shipment or Rate to a Batch',
  operationId: 'add_to_batch',
  request: {
    params: z.object({
      batch_id: SeIdSchema.openapi({
        param: {
          description: 'Batch ID',
          in: 'path',
          name: 'batch_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: AddToBatchRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1BatchesBatchIdErrorsRoute = createRoute({
  method: 'get',
  path: '/v1/batches/{batch_id}/errors',
  tags: ['batches'],
  summary: 'Get Batch Errors',
  description:
    'Error handling in batches are handled differently than in a single synchronous request.\nYou must retrieve the status of your batch by [getting a batch](https://www.shipengine.com/docs/reference/get-batch-by-id/) and getting an overview of the statuses or you can list errors directly here below to get detailed information about the errors.\n',
  operationId: 'list_batch_errors',
  request: {
    params: z.object({
      batch_id: SeIdSchema.openapi({
        param: {
          description: 'Batch ID',
          in: 'path',
          name: 'batch_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
    query: z.object({
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              "Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.\n",
            example: 2,
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
      pagesize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'pagesize',
            required: false,
            schema: { format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: ListBatchErrorsResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1BatchesBatchIdProcessLabelsRoute = createRoute({
  method: 'post',
  path: '/v1/batches/{batch_id}/process/labels',
  tags: ['batches'],
  summary: 'Process Batch ID Labels',
  description: 'Process Batch ID Labels',
  operationId: 'process_batch',
  request: {
    params: z.object({
      batch_id: SeIdSchema.openapi({
        param: {
          description: 'Batch ID',
          in: 'path',
          name: 'batch_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: ProcessBatchRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1BatchesBatchIdRemoveRoute = createRoute({
  method: 'post',
  path: '/v1/batches/{batch_id}/remove',
  tags: ['batches'],
  summary: 'Remove From Batch',
  description: 'Remove a shipment or rate from a batch',
  operationId: 'remove_from_batch',
  request: {
    params: z.object({
      batch_id: SeIdSchema.openapi({
        param: {
          description: 'Batch ID',
          in: 'path',
          name: 'batch_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: RemoveFromBatchRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1CarriersRoute = createRoute({
  method: 'get',
  path: '/v1/carriers',
  tags: ['carriers'],
  summary: 'List Carriers',
  description: 'List all carriers that have been added to this account',
  operationId: 'list_carriers',
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetCarriersResponseBodySchema } },
    },
    207: {
      description: 'The request was a partial success. It contains results, as well as errors.',
      content: { 'application/json': { schema: GetCarriersResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1CarriersCarrierIdRoute = createRoute({
  method: 'get',
  path: '/v1/carriers/{carrier_id}',
  tags: ['carriers'],
  summary: 'Get Carrier By ID',
  description: 'Retrive carrier info by ID',
  operationId: 'get_carrier_by_id',
  request: {
    params: z.object({
      carrier_id: SeIdSchema.openapi({
        param: {
          description: 'Carrier ID',
          example: 'se-28529731',
          in: 'path',
          name: 'carrier_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetCarrierByIdResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const putV1CarriersCarrierIdAddFundsRoute = createRoute({
  method: 'put',
  path: '/v1/carriers/{carrier_id}/add_funds',
  tags: ['carriers'],
  summary: 'Add Funds To Carrier',
  description: 'Add Funds To A Carrier',
  operationId: 'add_funds_to_carrier',
  request: {
    params: z.object({
      carrier_id: SeIdSchema.openapi({
        param: {
          description: 'Carrier ID',
          example: 'se-28529731',
          in: 'path',
          name: 'carrier_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: AddFundsToCarrierRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: AddFundsToCarrierResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1CarriersCarrierIdOptionsRoute = createRoute({
  method: 'get',
  path: '/v1/carriers/{carrier_id}/options',
  tags: ['carriers'],
  summary: 'Get Carrier Options',
  description: 'Get a list of the options available for the carrier',
  operationId: 'get_carrier_options',
  request: {
    params: z.object({
      carrier_id: SeIdSchema.openapi({
        param: {
          description: 'Carrier ID',
          example: 'se-28529731',
          in: 'path',
          name: 'carrier_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetCarrierOptionsResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1CarriersCarrierIdPackagesRoute = createRoute({
  method: 'get',
  path: '/v1/carriers/{carrier_id}/packages',
  tags: ['carriers'],
  summary: 'List Carrier Package Types',
  description: 'List the package types associated with the carrier',
  operationId: 'list_carrier_package_types',
  request: {
    params: z.object({
      carrier_id: SeIdSchema.openapi({
        param: {
          description: 'Carrier ID',
          example: 'se-28529731',
          in: 'path',
          name: 'carrier_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: ListCarrierPackageTypesResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1CarriersCarrierIdServicesRoute = createRoute({
  method: 'get',
  path: '/v1/carriers/{carrier_id}/services',
  tags: ['carriers'],
  summary: 'List Carrier Services',
  description: 'List the services associated with the carrier ID',
  operationId: 'list_carrier_services',
  request: {
    params: z.object({
      carrier_id: SeIdSchema.openapi({
        param: {
          description: 'Carrier ID',
          example: 'se-28529731',
          in: 'path',
          name: 'carrier_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: ListCarrierServicesResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1ConnectionsCarriersCarrierNameRoute = createRoute({
  method: 'post',
  path: '/v1/connections/carriers/{carrier_name}',
  tags: ['carrier_accounts'],
  summary: 'Connect a carrier account',
  description: 'Connect a carrier account',
  operationId: 'connect_carrier',
  request: {
    params: z.object({
      carrier_name: CarrierNameSchema.openapi({
        param: {
          description: 'The carrier name, such as `stamps_com`, `ups`, `fedex`, or `dhl_express`.',
          example: 'dhl_express',
          in: 'path',
          name: 'carrier_name',
          required: true,
          schema: { $ref: '#/components/schemas/carrier_name' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: ConnectCarrierRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: ConnectCarrierResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const deleteV1ConnectionsCarriersCarrierNameCarrierIdRoute = createRoute({
  method: 'delete',
  path: '/v1/connections/carriers/{carrier_name}/{carrier_id}',
  tags: ['carrier_accounts'],
  summary: 'Disconnect a carrier',
  description: 'Disconnect a carrier',
  operationId: 'disconnect_carrier',
  request: {
    params: z.object({
      carrier_name: CarrierNameSchema.openapi({
        param: {
          description: 'The carrier name, such as `stamps_com`, `ups`, `fedex`, or `dhl_express`.',
          example: 'dhl_express',
          in: 'path',
          name: 'carrier_name',
          required: true,
          schema: { $ref: '#/components/schemas/carrier_name' },
        },
      }),
      carrier_id: SeIdSchema.openapi({
        param: {
          description: 'Carrier ID',
          example: 'se-28529731',
          in: 'path',
          name: 'carrier_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1ConnectionsCarriersCarrierNameCarrierIdSettingsRoute = createRoute({
  method: 'get',
  path: '/v1/connections/carriers/{carrier_name}/{carrier_id}/settings',
  tags: ['carrier_accounts'],
  summary: 'Get carrier settings',
  description: 'Get carrier settings',
  operationId: 'get_carrier_settings',
  request: {
    params: z.object({
      carrier_name: CarrierNameWithSettingsSchema.openapi({
        param: {
          description: 'The carrier name, such as `ups`, `fedex`, or `dhl_express`.',
          example: 'dhl_express',
          in: 'path',
          name: 'carrier_name',
          required: true,
          schema: { $ref: '#/components/schemas/carrier_name_with_settings' },
        },
      }),
      carrier_id: SeIdSchema.openapi({
        param: {
          description: 'Carrier ID',
          example: 'se-28529731',
          in: 'path',
          name: 'carrier_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetCarrierSettingsResponseBodySchema } },
    },
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const putV1ConnectionsCarriersCarrierNameCarrierIdSettingsRoute = createRoute({
  method: 'put',
  path: '/v1/connections/carriers/{carrier_name}/{carrier_id}/settings',
  tags: ['carrier_accounts'],
  summary: 'Update carrier settings',
  description: 'Update carrier settings',
  operationId: 'update_carrier_settings',
  request: {
    params: z.object({
      carrier_name: CarrierNameWithSettingsSchema.openapi({
        param: {
          description: 'The carrier name, such as `ups`, `fedex`, or `dhl_express`.',
          example: 'dhl_express',
          in: 'path',
          name: 'carrier_name',
          required: true,
          schema: { $ref: '#/components/schemas/carrier_name_with_settings' },
        },
      }),
      carrier_id: SeIdSchema.openapi({
        param: {
          description: 'Carrier ID',
          example: 'se-28529731',
          in: 'path',
          name: 'carrier_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateCarrierSettingsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1ConnectionsInsuranceShipsuranceRoute = createRoute({
  method: 'post',
  path: '/v1/connections/insurance/shipsurance',
  tags: ['insurance'],
  summary: 'Connect a Shipsurance Account',
  description: 'Connect a Shipsurance Account',
  operationId: 'connect_insurer',
  request: {
    body: {
      content: { 'application/json': { schema: ConnectInsurerRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was a success',
      content: { 'application/json': { schema: ConnectInsurerResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const deleteV1ConnectionsInsuranceShipsuranceRoute = createRoute({
  method: 'delete',
  path: '/v1/connections/insurance/shipsurance',
  tags: ['insurance'],
  summary: 'Disconnect a Shipsurance Account',
  description: 'Disconnect a Shipsurance Account',
  operationId: 'disconnect_insurer',
  responses: {
    200: {
      description: 'The request was a success',
      content: { 'application/json': { schema: DisconnectInsurerResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1DownloadsDirSubdirFilenameRoute = createRoute({
  method: 'get',
  path: '/v1/downloads/{dir}/{subdir}/{filename}',
  tags: ['downloads'],
  summary: 'Download File',
  description: 'Get File',
  operationId: 'download_file',
  request: {
    params: z.object({
      subdir: z
        .string()
        .openapi({
          param: { in: 'path', name: 'subdir', required: true, schema: { type: 'string' } },
        }),
      filename: z
        .string()
        .openapi({
          param: { in: 'path', name: 'filename', required: true, schema: { type: 'string' } },
        }),
      dir: z
        .string()
        .openapi({
          param: { in: 'path', name: 'dir', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      download: z
        .string()
        .exactOptional()
        .openapi({
          param: { in: 'query', name: 'download', required: false, schema: { type: 'string' } },
        }),
      rotation: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'rotation',
            required: false,
            schema: { format: 'int32', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success',
      content: {
        'application/pdf': { schema: DownloadFilePdfResponseBodySchema },
        'application/zpl': { schema: DownloadFileZplResponseBodySchema },
        'image/png': { schema: DownloadFilePngResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1EnvironmentWebhooksRoute = createRoute({
  method: 'get',
  path: '/v1/environment/webhooks',
  tags: ['webhooks'],
  summary: 'List Webhooks',
  description: 'List all webhooks currently enabled for the account.',
  operationId: 'list_webhooks',
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: ListWebhooksResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1EnvironmentWebhooksRoute = createRoute({
  method: 'post',
  path: '/v1/environment/webhooks',
  tags: ['webhooks'],
  summary: 'Create a Webhook',
  description: 'Create a webook for specific events in the environment.',
  operationId: 'create_webhook',
  request: {
    body: {
      content: { 'application/json': { schema: CreateWebhookRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: CreateWebhookResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    409: _409ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1EnvironmentWebhooksWebhookIdRoute = createRoute({
  method: 'get',
  path: '/v1/environment/webhooks/{webhook_id}',
  tags: ['webhooks'],
  summary: 'Get Webhook By ID',
  description: 'Retrieve individual webhook by an ID',
  operationId: 'get_webhook_by_id',
  request: {
    params: z.object({
      webhook_id: SeIdSchema.openapi({
        param: {
          description: 'Webhook ID',
          in: 'path',
          name: 'webhook_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetWebhookByIdResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const putV1EnvironmentWebhooksWebhookIdRoute = createRoute({
  method: 'put',
  path: '/v1/environment/webhooks/{webhook_id}',
  tags: ['webhooks'],
  summary: 'Update a Webhook',
  description: 'Update the webhook url property',
  operationId: 'update_webhook',
  request: {
    params: z.object({
      webhook_id: SeIdSchema.openapi({
        param: {
          description: 'Webhook ID',
          in: 'path',
          name: 'webhook_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateWebhookRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const deleteV1EnvironmentWebhooksWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/v1/environment/webhooks/{webhook_id}',
  tags: ['webhooks'],
  summary: 'Delete Webhook By ID',
  description: 'Delete a webhook',
  operationId: 'delete_webhook',
  request: {
    params: z.object({
      webhook_id: SeIdSchema.openapi({
        param: {
          description: 'Webhook ID',
          in: 'path',
          name: 'webhook_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const patchV1InsuranceShipsuranceAddFundsRoute = createRoute({
  method: 'patch',
  path: '/v1/insurance/shipsurance/add_funds',
  tags: ['insurance'],
  summary: 'Add Funds To Insurance',
  description:
    "You may need to auto fund your account from time to time. For example, if you don't normally ship items over $100,\nand may want to add funds to insurance rather than keeping the account funded.\n",
  operationId: 'add_funds_to_insurance',
  request: {
    body: {
      content: { 'application/json': { schema: AddFundsToInsuranceRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: AddFundsToInsuranceResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1InsuranceShipsuranceBalanceRoute = createRoute({
  method: 'get',
  path: '/v1/insurance/shipsurance/balance',
  tags: ['insurance'],
  summary: 'Get Insurance Funds Balance',
  description: 'Retrieve the balance of your Shipsurance account.',
  operationId: 'get_insurance_balance',
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetInsuranceBalanceResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1LabelsRoute = createRoute({
  method: 'get',
  path: '/v1/labels',
  tags: ['labels'],
  summary: 'List labels',
  description:
    "This endpoint returns a list of labels that you've [created](https://www.shipengine.com/docs/labels/create-a-label/). You can optionally filter the results as well as control their sort order and the number of results returned at a time.\n\nBy default, all labels are returned, 25 at a time, starting with the most recently created ones.  You can combine multiple filter options to narrow-down the results.  For example, if you only want to get your UPS labels for your east coast warehouse you could query by both `warehouse_id` and `carrier_id`\n",
  operationId: 'list_labels',
  request: {
    query: z.object({
      label_status: LabelStatusSchema.openapi({
        param: {
          description: 'Only return labels that are currently in the specified status',
          in: 'query',
          name: 'label_status',
          required: false,
          schema: { $ref: '#/components/schemas/label_status' },
        },
      }).exactOptional(),
      service_code: ServiceCodeSchema.openapi({
        param: {
          description:
            'Only return labels for a specific [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/)',
          example: 'usps_first_class_mail',
          in: 'query',
          name: 'service_code',
          required: false,
          schema: { $ref: '#/components/schemas/service_code' },
        },
      }).exactOptional(),
      carrier_id: SeIdSchema.openapi({
        param: {
          description:
            'Only return labels for a specific [carrier account](https://www.shipengine.com/docs/carriers/setup/)',
          in: 'query',
          name: 'carrier_id',
          required: false,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }).exactOptional(),
      tracking_number: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return labels with a specific tracking number',
            example: '9405511899223197428490',
            in: 'query',
            name: 'tracking_number',
            required: false,
            schema: { minLength: 1, type: 'string' },
          },
        }),
      batch_id: SeIdSchema.openapi({
        param: {
          description:
            'Only return labels that were created in a specific [batch](https://www.shipengine.com/docs/labels/bulk/)',
          in: 'query',
          name: 'batch_id',
          required: false,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }).exactOptional(),
      rate_id: SeIdSchema.openapi({
        param: {
          description: 'Rate ID',
          in: 'query',
          name: 'rate_id',
          required: false,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }).exactOptional(),
      shipment_id: SeIdSchema.openapi({
        param: {
          description: 'Shipment ID',
          in: 'query',
          name: 'shipment_id',
          required: false,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }).exactOptional(),
      warehouse_id: SeIdSchema.openapi({
        param: {
          description:
            'Only return labels that originate from a specific [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/)',
          in: 'query',
          name: 'warehouse_id',
          required: false,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }).exactOptional(),
      created_at_start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return labels that were created on or after a specific date/time',
            example: '2019-03-12T19:24:13.657Z',
            in: 'query',
            name: 'created_at_start',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      created_at_end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return labels that were created on or before a specific date/time',
            example: '2019-03-12T19:24:13.657Z',
            in: 'query',
            name: 'created_at_end',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              "Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.\n",
            example: 2,
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return per response.',
            example: 50,
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 25, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
      sort_dir: SortDirSchema.default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Controls the sort order of the query.',
            in: 'query',
            name: 'sort_dir',
            required: false,
            schema: { allOf: [{ $ref: '#/components/schemas/sort_dir' }], default: 'desc' },
          },
        }),
      sort_by: z
        .enum(['modified_at', 'created_at'])
        .default('created_at')
        .exactOptional()
        .openapi({
          param: {
            description: 'Controls which field the query is sorted by.',
            in: 'query',
            name: 'sort_by',
            required: false,
            schema: { default: 'created_at', enum: ['modified_at', 'created_at'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'The response includes a `labels` array containing a page of results (as determined by the `page_size` query parameter).  It also includes other useful information, such as the total number of labels that match the query criteria, the number of pages of results, and the URLs of the first, last, next, and previous pages of results.\n',
      content: { 'application/json': { schema: ListLabelsResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1LabelsRoute = createRoute({
  method: 'post',
  path: '/v1/labels',
  tags: ['labels'],
  summary: 'Purchase Label',
  description: 'Purchase and print a label for shipment',
  operationId: 'create_label',
  request: {
    body: {
      content: { 'application/json': { schema: CreateLabelRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The requested object creation was a success.',
      content: { 'application/json': { schema: CreateLabelResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1LabelsExternalShipmentIdExternalShipmentIdRoute = createRoute({
  method: 'get',
  path: '/v1/labels/external_shipment_id/{external_shipment_id}',
  tags: ['labels'],
  summary: 'Get Label By External Shipment ID',
  description:
    'Find a label by using the external shipment id that was used during label creation\n',
  operationId: 'get_label_by_external_shipment_id',
  request: {
    params: z.object({
      external_shipment_id: z
        .string()
        .openapi({
          param: {
            example: '0bcb569d-1727-4ff9-ab49-b2fec0cee5ae',
            in: 'path',
            name: 'external_shipment_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      label_download_type: LabelDownloadTypeSchema.openapi({
        param: {
          example: 'url',
          in: 'query',
          name: 'label_download_type',
          required: false,
          schema: { $ref: '#/components/schemas/label_download_type' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'The requested object creation was a success.',
      content: { 'application/json': { schema: GetLabelByExternalShipmentIdResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1LabelsRatesRateIdRoute = createRoute({
  method: 'post',
  path: '/v1/labels/rates/{rate_id}',
  tags: ['labels'],
  summary: 'Purchase Label with Rate ID',
  description:
    'When retrieving rates for shipments using the `/rates` endpoint, the returned information contains a `rate_id` property that can be used\nto generate a label without having to refill in the shipment information repeatedly.\n',
  operationId: 'create_label_from_rate',
  request: {
    params: z.object({
      rate_id: SeIdSchema.openapi({
        param: {
          description: 'Rate ID',
          in: 'path',
          name: 'rate_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLabelFromRateRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The requested object creation was a success.',
      content: { 'application/json': { schema: CreateLabelFromRateResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1LabelsShipmentShipmentIdRoute = createRoute({
  method: 'post',
  path: '/v1/labels/shipment/{shipment_id}',
  tags: ['labels'],
  summary: 'Purchase Label with Shipment ID',
  description:
    'Purchase a label using a shipment ID that has already been created with the desired address and\npackage info.\n',
  operationId: 'create_label_from_shipment',
  request: {
    params: z.object({
      shipment_id: SeIdSchema.openapi({
        param: {
          description: 'Shipment ID',
          in: 'path',
          name: 'shipment_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLabelFromShipmentRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The requested object creation was a success.',
      content: { 'application/json': { schema: CreateLabelFromShipmentResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1LabelsLabelIdRoute = createRoute({
  method: 'get',
  path: '/v1/labels/{label_id}',
  tags: ['labels'],
  summary: 'Get Label By ID',
  description: 'Retrieve information for individual labels.',
  operationId: 'get_label_by_id',
  request: {
    params: z.object({
      label_id: SeIdSchema.openapi({
        param: {
          description: 'Label ID',
          in: 'path',
          name: 'label_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
    query: z.object({
      label_download_type: LabelDownloadTypeSchema.openapi({
        param: {
          example: 'url',
          in: 'query',
          name: 'label_download_type',
          required: false,
          schema: { $ref: '#/components/schemas/label_download_type' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetLabelByIdResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1LabelsLabelIdReturnRoute = createRoute({
  method: 'post',
  path: '/v1/labels/{label_id}/return',
  tags: ['labels'],
  summary: 'Create a return label',
  description: 'Create a return label',
  operationId: 'create_return_label',
  request: {
    params: z.object({
      label_id: SeIdSchema.openapi({
        param: {
          description: 'Label ID',
          in: 'path',
          name: 'label_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: CreateReturnLabelRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: CreateReturnLabelResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1LabelsLabelIdTrackRoute = createRoute({
  method: 'get',
  path: '/v1/labels/{label_id}/track',
  tags: ['labels'],
  summary: 'Get Label Tracking Information',
  description: "Retrieve the label's tracking information",
  operationId: 'get_tracking_log_from_label',
  request: {
    params: z.object({
      label_id: SeIdSchema.openapi({
        param: {
          description: 'Label ID',
          in: 'path',
          name: 'label_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetTrackingLogFromLabelResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const putV1LabelsLabelIdVoidRoute = createRoute({
  method: 'put',
  path: '/v1/labels/{label_id}/void',
  tags: ['labels'],
  summary: 'Void a Label By ID',
  description: 'Void a label by ID to get a refund.',
  operationId: 'void_label',
  request: {
    params: z.object({
      label_id: SeIdSchema.openapi({
        param: {
          description: 'Label ID',
          in: 'path',
          name: 'label_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: VoidLabelResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1ManifestsRoute = createRoute({
  method: 'get',
  path: '/v1/manifests',
  tags: ['manifests'],
  summary: 'List Manifests',
  description:
    'Similar to querying shipments, we allow you to query manifests since there will likely be a large number over a long period of time.',
  operationId: 'list_manifests',
  request: {
    query: z.object({
      warehouse_id: SeIdSchema.openapi({
        param: {
          description: 'Warehouse ID',
          in: 'query',
          name: 'warehouse_id',
          required: false,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }).exactOptional(),
      ship_date_start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'ship date start range',
            example: '2018-09-23T15:00:00.000Z',
            in: 'query',
            name: 'ship_date_start',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      ship_date_end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description: 'ship date end range',
            example: '2018-09-23T15:00:00.000Z',
            in: 'query',
            name: 'ship_date_end',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      created_at_start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)',
            example: '2019-03-12T19:24:13.657Z',
            in: 'query',
            name: 'created_at_start',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      created_at_end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)',
            example: '2019-03-12T19:24:13.657Z',
            in: 'query',
            name: 'created_at_end',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      carrier_id: SeIdSchema.openapi({
        param: {
          description: 'Carrier ID',
          in: 'query',
          name: 'carrier_id',
          required: false,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }).exactOptional(),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              "Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.\n",
            example: 2,
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return per response.',
            example: 50,
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 25, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
      label_ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z
              .string()
              .regex(/^se(-[a-z0-9]+)+$/)
              .min(1)
              .max(25)
              .openapi({
                description:
                  'A string that uniquely identifies a ShipEngine resource, such as a carrier, label, shipment, etc.',
                example: 'se-28529731',
                title: 'se_id',
              }),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'label_ids',
            required: false,
            schema: {
              description: 'Array of label ids',
              items: {
                description:
                  'A string that uniquely identifies a ShipEngine resource, such as a carrier, label, shipment, etc.',
                example: 'se-28529731',
                maxLength: 25,
                minLength: 1,
                pattern: '^se(-[a-z0-9]+)+$',
                title: 'se_id',
                type: 'string',
              },
              type: 'array',
            },
          },
          description: 'Array of label ids',
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: ListManifestsResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1ManifestsRoute = createRoute({
  method: 'post',
  path: '/v1/manifests',
  tags: ['manifests'],
  summary: 'Create Manifest',
  description:
    "Each ShipEngine manifest is created for a specific warehouse, so you'll need to provide the warehouse_id\nrather than the ship_from address. You can create a warehouse for each location that you want to create manifests for.\n",
  operationId: 'create_manifest',
  request: {
    body: {
      content: { 'application/json': { schema: CreateManifestRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: CreateManifestResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1ManifestsRequestsManifestRequestIdRoute = createRoute({
  method: 'get',
  path: '/v1/manifests/requests/{manifest_request_id}',
  tags: ['manifests'],
  summary: 'Get Manifest Request By Id',
  description: 'Get Manifest Request By Id',
  operationId: 'get_manifest_request_by_id',
  request: {
    params: z.object({
      manifest_request_id: SeIdSchema.openapi({
        param: {
          description: 'The Manifest Request Id',
          in: 'path',
          name: 'manifest_request_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: CreateManifestResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1ManifestsManifestIdRoute = createRoute({
  method: 'get',
  path: '/v1/manifests/{manifest_id}',
  tags: ['manifests'],
  summary: 'Get Manifest By Id',
  description: 'Get Manifest By Id',
  operationId: 'get_manifest_by_id',
  request: {
    params: z.object({
      manifest_id: SeIdSchema.openapi({
        param: {
          description: 'The Manifest Id',
          in: 'path',
          name: 'manifest_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetManifestByIdResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1PackagesRoute = createRoute({
  method: 'get',
  path: '/v1/packages',
  tags: ['package_types'],
  summary: 'List Custom Package Types',
  description: 'List the custom package types associated with the account',
  operationId: 'list_package_types',
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: ListPackageTypesResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1PackagesRoute = createRoute({
  method: 'post',
  path: '/v1/packages',
  tags: ['package_types'],
  summary: 'Create Custom Package Type',
  description: 'Create a custom package type to better assist in getting accurate rate estimates',
  operationId: 'create_package_type',
  request: {
    body: {
      content: { 'application/json': { schema: CreatePackageTypeRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: CreatePackageTypeResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1PackagesPackageIdRoute = createRoute({
  method: 'get',
  path: '/v1/packages/{package_id}',
  tags: ['package_types'],
  summary: 'Get Custom Package Type By ID',
  description: 'Get Custom Package Type by ID',
  operationId: 'get_package_type_by_id',
  request: {
    params: z.object({
      package_id: SeIdSchema.openapi({
        param: {
          description: 'Package ID',
          in: 'path',
          name: 'package_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetPackageTypeByIdResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const putV1PackagesPackageIdRoute = createRoute({
  method: 'put',
  path: '/v1/packages/{package_id}',
  tags: ['package_types'],
  summary: 'Update Custom Package Type By ID',
  description: 'Update the custom package type object by ID',
  operationId: 'update_package_type',
  request: {
    params: z.object({
      package_id: SeIdSchema.openapi({
        param: {
          description: 'Package ID',
          in: 'path',
          name: 'package_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: UpdatePackageTypeRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const deleteV1PackagesPackageIdRoute = createRoute({
  method: 'delete',
  path: '/v1/packages/{package_id}',
  tags: ['package_types'],
  summary: 'Delete A Custom Package By ID',
  description: 'Delete a custom package using the ID',
  operationId: 'delete_package_type',
  request: {
    params: z.object({
      package_id: SeIdSchema.openapi({
        param: {
          description: 'Package ID',
          in: 'path',
          name: 'package_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1PickupsRoute = createRoute({
  method: 'get',
  path: '/v1/pickups',
  tags: ['package_pickups'],
  summary: 'List Scheduled Pickups',
  description: 'List all pickups that have been scheduled for this carrier',
  operationId: 'list_scheduled_pickups',
  request: {
    query: z.object({
      carrier_id: SeIdSchema.openapi({
        param: {
          description: 'Carrier ID',
          in: 'query',
          name: 'carrier_id',
          required: false,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }).exactOptional(),
      warehouse_id: SeIdSchema.openapi({
        param: {
          description: 'Warehouse ID',
          in: 'query',
          name: 'warehouse_id',
          required: false,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }).exactOptional(),
      created_at_start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return scheduled pickups that were created on or after a specific date/time',
            example: '2019-03-12T19:24:13.657Z',
            in: 'query',
            name: 'created_at_start',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      created_at_end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return scheduled pickups that were created on or before a specific date/time',
            example: '2019-03-12T19:24:13.657Z',
            in: 'query',
            name: 'created_at_end',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              "Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.\n",
            example: 2,
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return per response.',
            example: 50,
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 25, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetPickupsResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1PickupsRoute = createRoute({
  method: 'post',
  path: '/v1/pickups',
  tags: ['package_pickups'],
  summary: 'Schedule a Pickup',
  description: 'Schedule a package pickup with a carrier',
  operationId: 'schedule_pickup',
  request: {
    body: {
      content: { 'application/json': { schema: SchedulePickupRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: SchedulePickupResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1PickupsPickupIdRoute = createRoute({
  method: 'get',
  path: '/v1/pickups/{pickup_id}',
  tags: ['package_pickups'],
  summary: 'Get Pickup By ID',
  description: 'Get Pickup By ID',
  operationId: 'get_pickup_by_id',
  request: {
    params: z.object({
      pickup_id: PickupResourceIdSchema.openapi({
        param: {
          in: 'path',
          name: 'pickup_id',
          required: true,
          schema: { $ref: '#/components/schemas/pickup_resource_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetPickupByIdResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const deleteV1PickupsPickupIdRoute = createRoute({
  method: 'delete',
  path: '/v1/pickups/{pickup_id}',
  tags: ['package_pickups'],
  summary: 'Delete a Scheduled Pickup',
  description: 'Delete a previously-scheduled pickup by ID',
  operationId: 'delete_scheduled_pickup',
  request: {
    params: z.object({
      pickup_id: PickupResourceIdSchema.openapi({
        param: {
          in: 'path',
          name: 'pickup_id',
          required: true,
          schema: { $ref: '#/components/schemas/pickup_resource_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'Return the `pickup_id` of the scheduled pickup that was successfully deleted\n',
      content: { 'application/json': { schema: DeletePickupByIdResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1RatesRoute = createRoute({
  method: 'post',
  path: '/v1/rates',
  tags: ['rates'],
  summary: 'Get Shipping Rates',
  description:
    "It's not uncommon that you want to give your customer the choice between whether they want to ship the fastest, cheapest, or the most trusted route. Most companies don't solely ship things using a single shipping option;\nso we provide functionality to show you all your options!\n",
  operationId: 'calculate_rates',
  request: {
    body: {
      content: { 'application/json': { schema: CalculateRatesRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: CalculateRatesResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1RatesBulkRoute = createRoute({
  method: 'post',
  path: '/v1/rates/bulk',
  tags: ['rates'],
  summary: 'Get Bulk Rates',
  description: 'Get Bulk Shipment Rates',
  operationId: 'compare_bulk_rates',
  request: {
    body: {
      content: { 'application/json': { schema: CompareBulkRatesRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: CompareBulkRatesResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1RatesEstimateRoute = createRoute({
  method: 'post',
  path: '/v1/rates/estimate',
  tags: ['rates'],
  summary: 'Estimate Rates',
  description: 'Get Rate Estimates',
  operationId: 'estimate_rates',
  request: {
    body: {
      content: { 'application/json': { schema: EstimateRatesRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: EstimateRatesResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1RatesRateIdRoute = createRoute({
  method: 'get',
  path: '/v1/rates/{rate_id}',
  tags: ['rates'],
  summary: 'Get Rate By ID',
  description: 'Retrieve a previously queried rate by its ID',
  operationId: 'get_rate_by_id',
  request: {
    params: z.object({
      rate_id: SeIdSchema.openapi({
        param: {
          description: 'Rate ID',
          in: 'path',
          name: 'rate_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetRateByIdResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1ServicePointsListRoute = createRoute({
  method: 'post',
  path: '/v1/service_points/list',
  tags: ['service_points'],
  summary: 'List Service Points',
  description: 'List carrier service points by location',
  operationId: 'service_points_list',
  request: {
    body: {
      content: { 'application/json': { schema: GetServicePointsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: ListServicePointsResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1ServicePointsCarrierCodeCountryCodeServicePointIdRoute = createRoute({
  method: 'get',
  path: '/v1/service_points/{carrier_code}/{country_code}/{service_point_id}',
  tags: ['service_points'],
  summary: 'Get Service Point By ID',
  description: 'Returns a carrier service point by using the service_point_id',
  operationId: 'service_points_get_by_id',
  request: {
    params: z.object({
      carrier_code: z
        .string()
        .min(1)
        .openapi({
          param: {
            description: 'Carrier code',
            example: 'stamps_com',
            in: 'path',
            name: 'carrier_code',
            required: true,
            schema: { minLength: 1, type: 'string' },
          },
        }),
      country_code: z
        .string()
        .length(2)
        .openapi({
          param: {
            description:
              'A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)\n',
            example: 'CA',
            in: 'path',
            name: 'country_code',
            required: true,
            schema: { maxLength: 2, minLength: 2, type: 'string' },
          },
        }),
      service_point_id: z
        .string()
        .openapi({
          param: {
            example: '614940',
            in: 'path',
            name: 'service_point_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetServicePointByIdResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1ShipmentsRoute = createRoute({
  method: 'get',
  path: '/v1/shipments',
  tags: ['shipments'],
  summary: 'List Shipments',
  description: 'Get list of Shipments',
  operationId: 'list_shipments',
  request: {
    query: z.object({
      shipment_status: ShipmentStatusSchema.openapi({
        param: {
          in: 'query',
          name: 'shipment_status',
          required: false,
          schema: { $ref: '#/components/schemas/shipment_status' },
        },
      }).exactOptional(),
      batch_id: SeIdSchema.openapi({
        param: {
          description: 'Batch ID',
          in: 'query',
          name: 'batch_id',
          required: false,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }).exactOptional(),
      tag: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              'Search for shipments based on the custom tag added to the shipment object',
            example: 'Letters_to_santa',
            in: 'query',
            name: 'tag',
            required: false,
            schema: { minLength: 1, type: 'string' },
          },
        }),
      created_at_start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)',
            example: '2019-03-12T19:24:13.657Z',
            in: 'query',
            name: 'created_at_start',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      created_at_end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time)',
            example: '2019-03-12T19:24:13.657Z',
            in: 'query',
            name: 'created_at_end',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      modified_at_start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to create a filter for when a resource was modified (ex. A shipment that was modified after a certain time)',
            example: '2019-03-12T19:24:13.657Z',
            in: 'query',
            name: 'modified_at_start',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      modified_at_end: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to create a filter for when a resource was modified (ex. A shipment that was modified before a certain time)',
            example: '2019-03-12T19:24:13.657Z',
            in: 'query',
            name: 'modified_at_end',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
      page: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description:
              "Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.\n",
            example: 2,
            in: 'query',
            name: 'page',
            required: false,
            schema: { default: 1, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
      page_size: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1),
        )
        .default(25)
        .exactOptional()
        .openapi({
          param: {
            description: 'The number of results to return per response.',
            example: 50,
            in: 'query',
            name: 'page_size',
            required: false,
            schema: { default: 25, format: 'int32', minimum: 1, type: 'integer' },
          },
        }),
      sales_order_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Sales Order ID',
            in: 'query',
            name: 'sales_order_id',
            required: false,
            schema: { type: 'string' },
          },
        }),
      sort_dir: SortDirSchema.default('desc')
        .exactOptional()
        .openapi({
          param: {
            description: 'Controls the sort order of the query.',
            in: 'query',
            name: 'sort_dir',
            required: false,
            schema: { allOf: [{ $ref: '#/components/schemas/sort_dir' }], default: 'desc' },
          },
        }),
      sort_by: ShipmentsSortBySchema.openapi({
        param: {
          example: 'modified_at',
          in: 'query',
          name: 'sort_by',
          required: false,
          schema: { $ref: '#/components/schemas/shipments_sort_by' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: ListShipmentsResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1ShipmentsRoute = createRoute({
  method: 'post',
  path: '/v1/shipments',
  tags: ['shipments'],
  summary: 'Create Shipments',
  description: 'Create one or multiple shipments.',
  operationId: 'create_shipments',
  request: {
    body: {
      content: { 'application/json': { schema: CreateShipmentsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The requested object creation was a success.',
      content: { 'application/json': { schema: CreateShipmentsResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1ShipmentsExternalShipmentIdExternalShipmentIdRoute = createRoute({
  method: 'get',
  path: '/v1/shipments/external_shipment_id/{external_shipment_id}',
  tags: ['shipments'],
  summary: 'Get Shipment By External ID',
  description: 'Query Shipments created using your own custom ID convention using this endpint',
  operationId: 'get_shipment_by_external_id',
  request: {
    params: z.object({
      external_shipment_id: z
        .string()
        .openapi({
          param: {
            example: '0bcb569d-1727-4ff9-ab49-b2fec0cee5ae',
            in: 'path',
            name: 'external_shipment_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetShipmentByExternalIdResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const putV1ShipmentsRecognizeRoute = createRoute({
  method: 'put',
  path: '/v1/shipments/recognize',
  tags: ['shipments'],
  summary: 'Parse shipping info',
  description:
    "The shipment-recognition API makes it easy for you to extract shipping data from unstructured text, including people's names, addresses, package weights and dimensions, insurance and delivery requirements, and more.\n\nData often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's shipment-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed shipment data is returned in the same structure that's used for other ShipEngine APIs, so you can easily use the parsed data to create a shipping label.\n\n> **Note:** Shipment recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland.\n",
  operationId: 'parse_shipment',
  request: {
    body: {
      description:
        'The only required field is `text`, which is the text to be parsed. You can optionally also provide a `shipment` containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use.\n',
      content: {
        'application/json': {
          schema: ParseShipmentRequestBodySchema,
          examples: {
            some_known_fields: {
              summary: 'Some known fields',
              description:
                'You can optionally provide a `shipment` object containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use.\n',
              value: {
                shipment: {
                  service_code: 'usps_first_class_mail',
                  ship_from: {
                    address_line1: '587 Shotwell St.',
                    address_line2: 'Suite 201',
                    address_residential_indicator: 'yes',
                    city_locality: 'San Francisco',
                    company_name: 'My Awesome Store',
                    country_code: 'US',
                    phone: '555-555-5555',
                    postal_code: 94110,
                    state_province: 'CA',
                  },
                },
                text: "I have a 4oz package that's 5x10x14in, and I need to ship it to Margie McMiller at 3800 North Lamar suite 200 in austin, tx 78652. Please send it via USPS first class and require an adult signature. It also needs to be insured for $400.\n",
              },
            },
            text_only: {
              summary: 'Text only',
              description:
                'This is the simplest way to call the shipment-recognition API. Just pass the text to be parsed and nothing else.\n',
              value: {
                text: "I have a 4oz package that's 5x10x14in, and I need to ship it to Margie McMiller at 3800 North Lamar suite 200 in austin, tx 78652. Please send it via USPS first class and require an adult signature. It also needs to be insured for $400.\n",
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Returns the parsed shipment, as well as a confidence score and a list of all the shipping entities that were recognized in the text.\n',
      content: {
        'application/json': {
          schema: ParseShipmentResponseBodySchema,
          examples: {
            some_known_fields: {
              description:
                'This response is shows that the shipment-recognition API was able to recognize all the shipping entities in the text.  Notice that the `ship_from` and `service_code` fields are populated with the values that were provided in the request.\n',
              value: {
                entities: [
                  {
                    end_index: 11,
                    result: { unit: 'ounce', value: 4 },
                    score: 0.9805313966503588,
                    start_index: 9,
                    text: '4oz',
                    type: 'weight',
                  },
                  {
                    end_index: 36,
                    result: { height: 14, length: 5, unit: 'inch', width: 10 },
                    score: 1,
                    start_index: 28,
                    text: '5x10x14in',
                    type: 'dimensions',
                  },
                  {
                    end_index: 36,
                    result: { unit: 'inch', value: 14 },
                    score: 0.9805313966503588,
                    start_index: 33,
                    text: '14in',
                    type: 'dimension',
                  },
                  {
                    end_index: 196,
                    result: {
                      address_line1: '3800 North Lamar',
                      address_line2: 'Suite 200',
                      city_locality: 'Austin',
                      company_name: 'Adult Signature',
                      direction: 'to',
                      name: 'Margie McMiller',
                      postal_code: 78652,
                      state_province: 'TX',
                    },
                    score: 0.9281558837267101,
                    start_index: 61,
                    text: 'to Margie McMiller at 3800 North Lamar suite 200 in austin, tx 78652. Please send it via USPS first class and require an adult signature',
                    type: 'address',
                  },
                  {
                    end_index: 78,
                    result: { value: 'Margie McMiller' },
                    score: 0.9519646137063122,
                    start_index: 64,
                    text: 'Margie McMiller',
                    type: 'person',
                  },
                  {
                    end_index: 98,
                    result: { line: 1, value: '3800 North Lamar' },
                    score: 0.9805313966503588,
                    start_index: 83,
                    text: '3800 North Lamar',
                    type: 'address_line',
                  },
                  {
                    end_index: 86,
                    result: { type: 'cardinal', value: 3800 },
                    score: 0.9805313966503588,
                    start_index: 83,
                    text: 3800,
                    type: 'number',
                  },
                  {
                    end_index: 108,
                    result: { line: 2, value: 'Suite 200' },
                    score: 1,
                    start_index: 100,
                    text: 'suite 200',
                    type: 'address_line',
                  },
                  {
                    end_index: 111,
                    result: { unit: 'inch', value: 200 },
                    score: 0.4792571878834418,
                    start_index: 106,
                    text: '200 in',
                    type: 'dimension',
                  },
                  {
                    end_index: 118,
                    result: { value: 'Austin' },
                    score: 0.9805313966503588,
                    start_index: 113,
                    text: 'austin',
                    type: 'city_locality',
                  },
                  {
                    end_index: 122,
                    result: { name: 'Texas', value: 'TX' },
                    score: 0.6082904353940255,
                    start_index: 121,
                    text: 'tx',
                    type: 'state_province',
                  },
                  {
                    end_index: 128,
                    result: { value: 78652 },
                    score: 0.9519646137063122,
                    start_index: 124,
                    text: 78652,
                    type: 'postal_code',
                  },
                  {
                    end_index: 153,
                    result: { name: 'Stamps.com', value: 'se-118608' },
                    score: 0.9519646137063122,
                    start_index: 150,
                    text: 'USPS',
                    type: 'carrier',
                  },
                  {
                    end_index: 165,
                    result: { name: 'USPS First Class Mail', value: 'usps_first_class_mail' },
                    score: 0.6082904353940255,
                    start_index: 155,
                    text: 'first class',
                    type: 'service',
                  },
                  {
                    end_index: 159,
                    result: { type: 'ordinal', value: 1 },
                    score: 0.9805313966503588,
                    start_index: 155,
                    text: 'first',
                    type: 'number',
                  },
                  {
                    end_index: 196,
                    result: { value: 'Adult Signature' },
                    score: 0.9519646137063122,
                    start_index: 182,
                    text: 'adult signature',
                    type: 'company',
                  },
                  {
                    end_index: 196,
                    result: { name: 'Adult Signature', value: 'adult_signature' },
                    score: 0.8530163983409642,
                    start_index: 182,
                    text: 'adult signature',
                    type: 'delivery_confirmation',
                  },
                  {
                    end_index: 234,
                    result: { unit: 'USD', value: 400 },
                    score: 0.8530163983409642,
                    start_index: 219,
                    text: 'insured for $400',
                    type: 'insurance',
                  },
                  {
                    end_index: 234,
                    result: { unit: 'USD', value: 400 },
                    score: 1,
                    start_index: 231,
                    text: '$400',
                    type: 'insured_value',
                  },
                ],
                score: 0.9031369611169101,
                shipment: {
                  carrier_id: 'se-118608',
                  confirmation: 'adult_signature',
                  packages: [
                    {
                      dimensions: { height: 14, length: 5, unit: 'inch', width: 10 },
                      insured_value: { amount: 400, currency: 'USD' },
                      weight: { unit: 'ounce', value: 4 },
                    },
                  ],
                  service_code: 'usps_first_class_mail',
                  ship_from: {
                    address_line1: '587 Shotwell St.',
                    address_line2: 'Suite 201',
                    address_residential_indicator: 'yes',
                    city_locality: 'San Francisco',
                    company_name: 'My Awesome Store',
                    country_code: 'US',
                    phone: '555-555-5555',
                    postal_code: 94110,
                    state_province: 'CA',
                  },
                  ship_to: {
                    address_line1: '3800 North Lamar',
                    address_line2: 'Suite 200',
                    address_residential_indicator: 'unknown',
                    city_locality: 'Austin',
                    company_name: 'Adult Signature',
                    name: 'Margie McMiller',
                    postal_code: 78652,
                    state_province: 'TX',
                  },
                },
              },
            },
            text_only: {
              description:
                "This response shows that the shipment-recognition API was able to recognize all the shipping entities in the text.  Notice that the `ship_from` field is not populated, since it wasn't included in the request or in the parsed text.\n",
              value: {
                entities: [
                  {
                    end_index: 11,
                    result: { unit: 'ounce', value: 4 },
                    score: 0.9805313966503588,
                    start_index: 9,
                    text: '4oz',
                    type: 'weight',
                  },
                  {
                    end_index: 36,
                    result: { height: 14, length: 5, unit: 'inch', width: 10 },
                    score: 1,
                    start_index: 28,
                    text: '5x10x14in',
                    type: 'dimensions',
                  },
                  {
                    end_index: 36,
                    result: { unit: 'inch', value: 14 },
                    score: 0.9805313966503588,
                    start_index: 33,
                    text: '14in',
                    type: 'dimension',
                  },
                  {
                    end_index: 196,
                    result: {
                      address_line1: '3800 North Lamar',
                      address_line2: 'Suite 200',
                      city_locality: 'Austin',
                      company_name: 'Adult Signature',
                      direction: 'to',
                      name: 'Margie McMiller',
                      postal_code: 78652,
                      state_province: 'TX',
                    },
                    score: 0.9281558837267101,
                    start_index: 61,
                    text: 'to Margie McMiller at 3800 North Lamar suite 200 in austin, tx 78652. Please send it via USPS first class and require an adult signature',
                    type: 'address',
                  },
                  {
                    end_index: 78,
                    result: { value: 'Margie McMiller' },
                    score: 0.9519646137063122,
                    start_index: 64,
                    text: 'Margie McMiller',
                    type: 'person',
                  },
                  {
                    end_index: 98,
                    result: { line: 1, value: '3800 North Lamar' },
                    score: 0.9805313966503588,
                    start_index: 83,
                    text: '3800 North Lamar',
                    type: 'address_line',
                  },
                  {
                    end_index: 86,
                    result: { type: 'cardinal', value: 3800 },
                    score: 0.9805313966503588,
                    start_index: 83,
                    text: 3800,
                    type: 'number',
                  },
                  {
                    end_index: 108,
                    result: { line: 2, value: 'Suite 200' },
                    score: 1,
                    start_index: 100,
                    text: 'suite 200',
                    type: 'address_line',
                  },
                  {
                    end_index: 111,
                    result: { unit: 'inch', value: 200 },
                    score: 0.4792571878834418,
                    start_index: 106,
                    text: '200 in',
                    type: 'dimension',
                  },
                  {
                    end_index: 118,
                    result: { value: 'Austin' },
                    score: 0.9805313966503588,
                    start_index: 113,
                    text: 'austin',
                    type: 'city_locality',
                  },
                  {
                    end_index: 122,
                    result: { name: 'Texas', value: 'TX' },
                    score: 0.6082904353940255,
                    start_index: 121,
                    text: 'tx',
                    type: 'state_province',
                  },
                  {
                    end_index: 128,
                    result: { value: 78652 },
                    score: 0.9519646137063122,
                    start_index: 124,
                    text: 78652,
                    type: 'postal_code',
                  },
                  {
                    end_index: 153,
                    result: { name: 'Stamps.com', value: 'se-118608' },
                    score: 0.9519646137063122,
                    start_index: 150,
                    text: 'USPS',
                    type: 'carrier',
                  },
                  {
                    end_index: 165,
                    result: { name: 'USPS First Class Mail', value: 'usps_first_class_mail' },
                    score: 0.6082904353940255,
                    start_index: 155,
                    text: 'first class',
                    type: 'service',
                  },
                  {
                    end_index: 159,
                    result: { type: 'ordinal', value: 1 },
                    score: 0.9805313966503588,
                    start_index: 155,
                    text: 'first',
                    type: 'number',
                  },
                  {
                    end_index: 196,
                    result: { value: 'Adult Signature' },
                    score: 0.9519646137063122,
                    start_index: 182,
                    text: 'adult signature',
                    type: 'company',
                  },
                  {
                    end_index: 196,
                    result: { name: 'Adult Signature', value: 'adult_signature' },
                    score: 0.8530163983409642,
                    start_index: 182,
                    text: 'adult signature',
                    type: 'delivery_confirmation',
                  },
                  {
                    end_index: 234,
                    result: { unit: 'USD', value: 400 },
                    score: 0.8530163983409642,
                    start_index: 219,
                    text: 'insured for $400',
                    type: 'insurance',
                  },
                  {
                    end_index: 234,
                    result: { unit: 'USD', value: 400 },
                    score: 1,
                    start_index: 231,
                    text: '$400',
                    type: 'insured_value',
                  },
                ],
                score: 0.9031369611169101,
                shipment: {
                  carrier_id: 'se-118608',
                  confirmation: 'adult_signature',
                  packages: [
                    {
                      dimensions: { height: 14, length: 5, unit: 'inch', width: 10 },
                      insured_value: { amount: 400, currency: 'USD' },
                      weight: { unit: 'ounce', value: 4 },
                    },
                  ],
                  service_code: 'usps_first_class_mail',
                  ship_to: {
                    address_line1: '3800 North Lamar',
                    address_line2: 'Suite 200',
                    address_residential_indicator: 'unknown',
                    city_locality: 'Austin',
                    company_name: 'Adult Signature',
                    name: 'Margie McMiller',
                    postal_code: 78652,
                    state_province: 'TX',
                  },
                },
              },
            },
          },
        },
      },
    },
    400: _400ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1ShipmentsShipmentIdRoute = createRoute({
  method: 'get',
  path: '/v1/shipments/{shipment_id}',
  tags: ['shipments'],
  summary: 'Get Shipment By ID',
  description: 'Get an individual shipment based on its ID',
  operationId: 'get_shipment_by_id',
  request: {
    params: z.object({
      shipment_id: SeIdSchema.openapi({
        param: {
          description: 'Shipment ID',
          in: 'path',
          name: 'shipment_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetShipmentByIdResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const putV1ShipmentsShipmentIdRoute = createRoute({
  method: 'put',
  path: '/v1/shipments/{shipment_id}',
  tags: ['shipments'],
  summary: 'Update Shipment By ID',
  description: 'Update a shipment object based on its ID',
  operationId: 'update_shipment',
  request: {
    params: z.object({
      shipment_id: SeIdSchema.openapi({
        param: {
          description: 'Shipment ID',
          in: 'path',
          name: 'shipment_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateShipmentRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: UpdateShipmentResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const putV1ShipmentsShipmentIdCancelRoute = createRoute({
  method: 'put',
  path: '/v1/shipments/{shipment_id}/cancel',
  tags: ['shipments'],
  summary: 'Cancel a Shipment',
  description:
    'Mark a shipment cancelled, if it is no longer needed or being used by your organized. Any label associated with the shipment needs to be voided first\nAn example use case would be if a batch label creation job is going to run at a set time and only queries `pending` shipments. Marking a shipment as cancelled\nwould remove it from this process\n',
  operationId: 'cancel_shipments',
  request: {
    params: z.object({
      shipment_id: SeIdSchema.openapi({
        param: {
          description: 'Shipment ID',
          in: 'path',
          name: 'shipment_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1ShipmentsShipmentIdRatesRoute = createRoute({
  method: 'get',
  path: '/v1/shipments/{shipment_id}/rates',
  tags: ['shipments'],
  summary: 'Get Shipment Rates',
  description: 'Get Rates for the shipment information associated with the shipment ID',
  operationId: 'list_shipment_rates',
  request: {
    params: z.object({
      shipment_id: SeIdSchema.openapi({
        param: {
          description: 'Shipment ID',
          in: 'path',
          name: 'shipment_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
    query: z.object({
      created_at_start: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time)',
            example: '2019-03-12T19:24:13.657Z',
            in: 'query',
            name: 'created_at_start',
            required: false,
            schema: { format: 'date-time', type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: ListShipmentRatesResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1ShipmentsShipmentIdTagsTagNameRoute = createRoute({
  method: 'post',
  path: '/v1/shipments/{shipment_id}/tags/{tag_name}',
  tags: ['shipments'],
  summary: 'Add Tag to Shipment',
  description: 'Add a tag to the shipment object',
  operationId: 'tag_shipment',
  request: {
    params: z.object({
      shipment_id: SeIdSchema.openapi({
        param: {
          description: 'Shipment ID',
          in: 'path',
          name: 'shipment_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
      tag_name: TagNameSchema.openapi({
        param: {
          in: 'path',
          name: 'tag_name',
          required: true,
          schema: { $ref: '#/components/schemas/tag_name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The requested object creation was a success.',
      content: { 'application/json': { schema: TagShipmentResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const deleteV1ShipmentsShipmentIdTagsTagNameRoute = createRoute({
  method: 'delete',
  path: '/v1/shipments/{shipment_id}/tags/{tag_name}',
  tags: ['shipments'],
  summary: 'Remove Tag from Shipment',
  description: 'Remove an existing tag from the Shipment object',
  operationId: 'untag_shipment',
  request: {
    params: z.object({
      shipment_id: SeIdSchema.openapi({
        param: {
          description: 'Shipment ID',
          in: 'path',
          name: 'shipment_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
      tag_name: TagNameSchema.openapi({
        param: {
          in: 'path',
          name: 'tag_name',
          required: true,
          schema: { $ref: '#/components/schemas/tag_name' },
        },
      }),
    }),
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1TagsRoute = createRoute({
  method: 'get',
  path: '/v1/tags',
  tags: ['tags'],
  summary: 'Get Tags',
  description: 'Get a list of all tags associated with an account.',
  operationId: 'list_tags',
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: ListTagsResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1TagsTagNameRoute = createRoute({
  method: 'post',
  path: '/v1/tags/{tag_name}',
  tags: ['tags'],
  summary: 'Create a New Tag',
  description: 'Create a new Tag for customizing how you track your shipments',
  operationId: 'create_tag',
  request: {
    params: z.object({
      tag_name: TagNameSchema.openapi({
        param: {
          in: 'path',
          name: 'tag_name',
          required: true,
          schema: { $ref: '#/components/schemas/tag_name' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: CreateTagResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const deleteV1TagsTagNameRoute = createRoute({
  method: 'delete',
  path: '/v1/tags/{tag_name}',
  tags: ['tags'],
  summary: 'Delete Tag',
  description: 'Delete a tag that is no longer needed',
  operationId: 'delete_tag',
  request: {
    params: z.object({
      tag_name: TagNameSchema.openapi({
        param: {
          in: 'path',
          name: 'tag_name',
          required: true,
          schema: { $ref: '#/components/schemas/tag_name' },
        },
      }),
    }),
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const putV1TagsTagNameNewTagNameRoute = createRoute({
  method: 'put',
  path: '/v1/tags/{tag_name}/{new_tag_name}',
  tags: ['tags'],
  summary: 'Update Tag Name',
  description: 'Change a tag name while still keeping the relevant shipments attached to it',
  operationId: 'rename_tag',
  request: {
    params: z.object({
      tag_name: TagNameSchema.openapi({
        param: {
          in: 'path',
          name: 'tag_name',
          required: true,
          schema: { $ref: '#/components/schemas/tag_name' },
        },
      }),
      new_tag_name: TagNameSchema.openapi({
        param: {
          in: 'path',
          name: 'new_tag_name',
          required: true,
          schema: { $ref: '#/components/schemas/tag_name' },
        },
      }),
    }),
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1TokensEphemeralRoute = createRoute({
  method: 'post',
  path: '/v1/tokens/ephemeral',
  tags: ['tokens'],
  summary: 'Get Ephemeral Token',
  description:
    'This endpoint returns a token that can be passed to an application for authorized access.  The lifetime of this token is 10 seconds.',
  operationId: 'tokens_get_ephemeral_token',
  request: {
    query: z.object({
      redirect: RedirectSchema.openapi({
        param: {
          description:
            'Include a redirect url to the application formatted with the ephemeral token.',
          in: 'query',
          name: 'redirect',
          required: false,
          schema: { $ref: '#/components/schemas/redirect' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TokensGetEphemeralTokenResponseBodyYamlSchema } },
    },
  },
})

export const getV1TrackingRoute = createRoute({
  method: 'get',
  path: '/v1/tracking',
  tags: ['tracking'],
  summary: 'Get Tracking Information',
  description: 'Retrieve package tracking information',
  operationId: 'get_tracking_log',
  request: {
    query: z.object({
      carrier_code: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Carrier code used to retrieve tracking information',
            example: 'stamps_com',
            in: 'query',
            name: 'carrier_code',
            required: false,
            schema: { minLength: 1, type: 'string' },
          },
        }),
      tracking_number: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The tracking number associated with a shipment',
            example: '9405511899223197428490',
            in: 'query',
            name: 'tracking_number',
            required: false,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetTrackingLogResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1TrackingStartRoute = createRoute({
  method: 'post',
  path: '/v1/tracking/start',
  tags: ['tracking'],
  summary: 'Start Tracking a Package',
  description:
    'Allows you to subscribe to tracking updates for a package. You specify the carrier_code and tracking_number of the package,\nand receive notifications via webhooks whenever the shipping status changes.\n',
  operationId: 'start_tracking',
  request: {
    query: z.object({
      carrier_code: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Carrier code used to retrieve tracking information',
            example: 'stamps_com',
            in: 'query',
            name: 'carrier_code',
            required: false,
            schema: { minLength: 1, type: 'string' },
          },
        }),
      tracking_number: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The tracking number associated with a shipment',
            example: '9405511899223197428490',
            in: 'query',
            name: 'tracking_number',
            required: false,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1TrackingStopRoute = createRoute({
  method: 'post',
  path: '/v1/tracking/stop',
  tags: ['tracking'],
  summary: 'Stop Tracking a Package',
  description: 'Unsubscribe from tracking updates for a package.',
  operationId: 'stop_tracking',
  request: {
    query: z.object({
      carrier_code: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Carrier code used to retrieve tracking information',
            example: 'stamps_com',
            in: 'query',
            name: 'carrier_code',
            required: false,
            schema: { minLength: 1, type: 'string' },
          },
        }),
      tracking_number: z
        .string()
        .min(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'The tracking number associated with a shipment',
            example: '9405511899223197428490',
            in: 'query',
            name: 'tracking_number',
            required: false,
            schema: { minLength: 1, type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1WarehousesRoute = createRoute({
  method: 'get',
  path: '/v1/warehouses',
  tags: ['warehouses'],
  summary: 'List Warehouses',
  description: 'Retrieve a list of warehouses associated with this account.',
  operationId: 'list_warehouses',
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: ListWarehousesResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const postV1WarehousesRoute = createRoute({
  method: 'post',
  path: '/v1/warehouses',
  tags: ['warehouses'],
  summary: 'Create Warehouse',
  description:
    'Create a warehouse location that you can use to create shipping items by simply passing in the generated warehouse id.\nIf the return address is not supplied in the request body then it is assumed that the origin address is the return address as well\n',
  operationId: 'create_warehouse',
  request: {
    body: {
      content: { 'application/json': { schema: CreateWarehouseRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: CreateWarehouseResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const getV1WarehousesWarehouseIdRoute = createRoute({
  method: 'get',
  path: '/v1/warehouses/{warehouse_id}',
  tags: ['warehouses'],
  summary: 'Get Warehouse By Id',
  description: 'Retrieve warehouse data based on the warehouse ID',
  operationId: 'get_warehouse_by_id',
  request: {
    params: z.object({
      warehouse_id: SeIdSchema.openapi({
        param: {
          description: 'Warehouse ID',
          in: 'path',
          name: 'warehouse_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The request was a success.',
      content: { 'application/json': { schema: GetWarehouseByIdResponseBodySchema } },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const putV1WarehousesWarehouseIdRoute = createRoute({
  method: 'put',
  path: '/v1/warehouses/{warehouse_id}',
  tags: ['warehouses'],
  summary: 'Update Warehouse By Id',
  description: 'Update Warehouse object information',
  operationId: 'update_warehouse',
  request: {
    params: z.object({
      warehouse_id: SeIdSchema.openapi({
        param: {
          description: 'Warehouse ID',
          in: 'path',
          name: 'warehouse_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateWarehouseRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const deleteV1WarehousesWarehouseIdRoute = createRoute({
  method: 'delete',
  path: '/v1/warehouses/{warehouse_id}',
  tags: ['warehouses'],
  summary: 'Delete Warehouse By ID',
  description: 'Delete a warehouse by ID',
  operationId: 'delete_warehouse',
  request: {
    params: z.object({
      warehouse_id: SeIdSchema.openapi({
        param: {
          description: 'Warehouse ID',
          in: 'path',
          name: 'warehouse_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})

export const putV1WarehousesWarehouseIdSettingsRoute = createRoute({
  method: 'put',
  path: '/v1/warehouses/{warehouse_id}/settings',
  tags: ['warehouses'],
  summary: 'Update Warehouse Settings',
  description: 'Update Warehouse settings object information',
  operationId: 'update_warehouse_settings',
  request: {
    params: z.object({
      warehouse_id: SeIdSchema.openapi({
        param: {
          description: 'Warehouse ID',
          in: 'path',
          name: 'warehouse_id',
          required: true,
          schema: { $ref: '#/components/schemas/se_id' },
        },
      }),
    }),
    body: {
      content: { 'application/json': { schema: UpdateWarehouseSettingsRequestBodySchema } },
      required: true,
    },
  },
  responses: {
    204: {
      description: 'The request was successful.',
      content: {
        'application/json': { schema: EmptyResponseBodySchema },
        'text/plain': { schema: EmptyResponseBodySchema },
      },
    },
    400: _400ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
  },
})
