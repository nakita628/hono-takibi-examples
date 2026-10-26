import { createRoute, z } from '@hono/zod-openapi'

const CurrencyCodeSchema = z
  .string()
  .regex(/^[\S\s]*$/)
  .length(3)
  .openapi({
    description:
      'The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.',
  })
  .openapi('CurrencyCode')

const MoneySchema = z
  .object({
    currency_code: CurrencyCodeSchema,
    value: z
      .string()
      .regex(/^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$/)
      .min(0)
      .max(32)
      .openapi({
        description:
          'The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/api/rest/reference/currency-codes/).',
      }),
  })
  .openapi({
    title: 'Money',
    description:
      'The currency and amount for a financial transaction, such as a balance or payment due.',
    required: ['currency_code', 'value'],
  })
  .openapi('Money')

const Level_2CardProcessingDataSchema = z
  .object({
    invoice_id: z
      .string()
      .regex(/^[\w‘\-.,":;\!?]*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          'Use this field to pass a purchase identification value of up to 127 ASCII characters. The length of this field will be adjusted to meet network specifications (25chars for Visa and Mastercard, 17chars for Amex), and the original invoice ID will still be displayed in your existing reports.',
      }),
    tax_total: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            "Use this field to break down the amount of tax included in the total purchase amount. The value provided here will not add to the total purchase amount. The value can't be negative, and in most cases, it must be greater than zero in order to qualify for lower interchange rates. \n Value, by country, is:\n\n    UK. A county.\n    US. A state.\n    Canada. A province.\n    Japan. A prefecture.\n    Switzerland. A kanton.\n",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'level_2',
    description:
      'The level 2 card processing data collections. If your merchant account has been configured for Level 2 processing this field will be passed to the processor on your behalf. Please contact your PayPal Technical Account Manager to define level 2 data for your business.',
    required: [],
  })
  .openapi('Level_2CardProcessingData')

const CountryCodeSchema = z
  .string()
  .regex(/^([A-Z]{2}|C2)$/)
  .length(2)
  .openapi({
    description:
      'The [2-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>',
  })
  .openapi('CountryCode')

const AddressPortableSchema = z
  .object({
    address_line_1: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(300)
      .exactOptional()
      .openapi({
        description:
          'The first line of the address, such as number and street, for example, `173 Drury Lane`. Needed for data entry, and Compliance and Risk checks. This field needs to pass the full address.',
      }),
    address_line_2: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(300)
      .exactOptional()
      .openapi({
        description: 'The second line of the address, for example, a suite or apartment number.',
      }),
    address_line_3: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The third line of the address, if needed. Examples include a street complement for Brazil, direction text, such as `next to Walmart`, or a landmark in an Indian address.',
      }),
    admin_area_4: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The neighborhood, ward, or district. This is smaller than `admin_area_level_3` or `sub_locality`. Value is:<ul><li>The postal sorting code that is used in Guernsey and many French territories, such as French Guiana.</li><li>The fine-grained administrative levels in China.</li></ul>',
      }),
    admin_area_3: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          "The sub-locality, suburb, neighborhood, or district. This is smaller than `admin_area_level_2`. Value is:<ul><li>Brazil. Suburb, *bairro*, or neighborhood.</li><li>India. Sub-locality or district. Street name information isn't always available, but a sub-locality or district can be a very small area.</li></ul>",
      }),
    admin_area_2: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(120)
      .exactOptional()
      .openapi({ description: 'A city, town, or village. Smaller than `admin_area_level_1`.' }),
    admin_area_1: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(300)
      .exactOptional()
      .openapi({
        description:
          'The highest-level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. This data is formatted for postal delivery, for example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A *kanton*.</li></ul>',
      }),
    postal_code: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(60)
      .exactOptional()
      .openapi({
        description:
          'The postal code, which is the ZIP code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).',
      }),
    country_code: CountryCodeSchema,
    address_details: z
      .object({
        street_number: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(100)
          .exactOptional()
          .openapi({ description: 'The street number.' }),
        street_name: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(100)
          .exactOptional()
          .openapi({ description: 'The street name. Just `Drury` in `Drury Lane`.' }),
        street_type: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(100)
          .exactOptional()
          .openapi({
            description: 'The street type. For example, avenue, boulevard, road, or expressway.',
          }),
        delivery_service: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(100)
          .exactOptional()
          .openapi({
            description: 'The delivery service. Post office box, bag number, or post office name.',
          }),
        building_name: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(100)
          .exactOptional()
          .openapi({
            description:
              'A named locations that represents the premise. Usually a building name or number or collection of buildings with a common name or number. For example, <code>Craven House</code>.',
          }),
        sub_building: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(100)
          .exactOptional()
          .openapi({
            description:
              'The first-order entity below a named building or location that represents the sub-premise. Usually a single building within a collection of buildings with a common name. Can be a flat, story, floor, room, or apartment.',
          }),
      })
      .exactOptional()
      .openapi({
        title: 'Address Details',
        description:
          "The non-portable additional address details include fine-grain address information for Compliance, Risk, and other scenarios. This isn't portable with common third-party and open source applications. This can include data that is redundant with core fields. For example, `address_portable.address_line_1` is usually a combination of `address_details.street_number`, `street_name`, and `street_type`.",
        required: [],
      }),
  })
  .openapi({
    title: 'Portable Postal Address (Medium-Grained)',
    description:
      'The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).',
    required: ['country_code'],
  })
  .openapi('AddressPortable')

const UniversalProductCodeSchema = z
  .object({
    type: z
      .enum(['UPC-A', 'UPC-B', 'UPC-C', 'UPC-D', 'UPC-E', 'UPC-2', 'UPC-5'])
      .openapi({
        title: 'Universal Product Code Type',
        description: 'The Universal Product Code type.',
      }),
    code: z
      .string()
      .regex(/^[0-9]{0,17}$/)
      .min(6)
      .max(17)
      .openapi({ description: 'The UPC product code of the item.' }),
  })
  .openapi({
    title: 'universal_product_code',
    description: 'The Universal Product Code of the item.',
    required: ['code', 'type'],
  })
  .openapi('UniversalProductCode')

const PricingSchemeSchema = z
  .object({
    price: MoneySchema.and(
      z
        .any()
        .openapi({
          description: 'The price the customer will be charged based on the pricing model',
        }),
    ).exactOptional(),
    pricing_model: z
      .enum(['FIXED', 'VARIABLE', 'AUTO_RELOAD'])
      .openapi({ description: 'The pricing model for the billing cycle.' }),
    reload_threshold_amount: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The threshold amount on which the reload charge would be triggered. This will be associated with the account-balance where if the account-balance goes below this amount then customer would incur reload charge.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'pricing_scheme',
    description: 'The pricing scheme details.',
    required: ['pricing_model'],
  })
  .openapi('PricingScheme')

const DateNoTimeSchema = z
  .string()
  .regex(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/)
  .length(10)
  .openapi({
    description:
      'The stand-alone date, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). To represent special legal values, such as a date of birth, you should use dates with no associated time or time-zone data. Whenever possible, use the standard `date_time` type. This regular expression does not validate all dates. For example, February 31 is valid and nothing is known about leap years.',
  })
  .openapi('DateNoTime')

const BillingCycleSchema = z
  .object({
    tenure_type: z
      .enum(['REGULAR', 'TRIAL'])
      .openapi({
        description:
          'The tenure type of the billing cycle identifies if the billing cycle is a trial(free or discounted) or regular billing cycle.',
      }),
    pricing_scheme: PricingSchemeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The active pricing scheme for this billing cycle. A free trial billing cycle does not require a pricing scheme.',
        }),
    ).exactOptional(),
    total_cycles: z
      .int()
      .min(0)
      .max(999)
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'The number of times this billing cycle gets executed. Trial billing cycles can only be executed a finite number of times (value between <code>1</code> and <code>999</code> for <code>total_cycles</code>). Regular billing cycles can be executed infinite times (value of <code>0</code> for <code>total_cycles</code>) or a finite number of times (value between <code>1</code> and <code>999</code> for <code>total_cycles</code>).',
      }),
    sequence: z
      .int()
      .min(1)
      .max(3)
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'The order in which this cycle is to run among other billing cycles. For example, a trial billing cycle has a `sequence` of `1` while a regular billing cycle has a `sequence` of `2`, so that trial cycle runs before the regular cycle.',
      }),
    start_date: DateNoTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The start date for the billing cycle, in YYYY-MM-DD. This field should be not be provided if the billing cycle starts at the time of checkout. When this field is not provided, the billing cycle amount will be included in any data validations confirming that the total provided by the merchant match the sum of individual items due at the time of checkout. Only one billing cycle (with sequence equal to 1) can have a no start date.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'billing_cycle',
    description:
      'The billing cycle providing details of the billing frequency, amount, duration and if the billing cycle is a free, discounted or regular billing cycle. The sequence of the billing cycle will be in the following order - free trial billing cycle(s), discounted trial billing cycle(s), regular billing cycle(s).',
    required: ['tenure_type'],
  })
  .openapi('BillingCycle')

const OrderBillingPlanSchema = z
  .object({
    billing_cycles: z
      .array(BillingCycleSchema)
      .min(1)
      .max(3)
      .openapi({
        description:
          'An array of billing cycles for trial billing and regular billing. A plan can have at most two trial cycles and only one regular cycle.',
      }),
    setup_fee: MoneySchema.and(
      z
        .any()
        .openapi({
          description: 'The setup fee for the recurring plan. Ensure its part of the item amount.',
        }),
    ).exactOptional(),
    name: z
      .string()
      .regex(/^[A-Za-z0-9() +',.:-]+$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({ description: 'Name of the recurring plan.' }),
  })
  .openapi({
    title: 'order_billing_plan',
    description:
      'Metadata for merchant-managed recurring billing plans. Valid only during the saved payment method token or billing agreement creation.',
    required: ['billing_cycles'],
  })
  .openapi('OrderBillingPlan')

const ItemWithoutCategoryTaxOrAmountSchema = z
  .object({
    name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(127)
      .openapi({ description: 'The item name or title.' }),
    quantity: z
      .string()
      .regex(/^[1-9][0-9]{0,9}$/)
      .min(0)
      .max(10)
      .openapi({ description: 'The item quantity. Must be a whole number.' }),
    description: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2048)
      .exactOptional()
      .openapi({ description: 'The detailed item description.' }),
    sku: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(127)
      .exactOptional()
      .openapi({ description: 'The stock keeping unit (SKU) for the item.' }),
    url: z
      .url()
      .min(1)
      .max(2048)
      .exactOptional()
      .openapi({
        description:
          'The URL to the item being purchased. Visible to buyer and used in buyer experiences.',
      }),
    image_url: z
      .url()
      .min(1)
      .max(2048)
      .exactOptional()
      .openapi({
        description:
          "The URL of the item's image. File type and size restrictions apply. An image that violates these restrictions will not be honored.",
      }),
    upc: UniversalProductCodeSchema.and(
      z.any().openapi({ description: 'The Universal Product Code of the item.' }),
    ).exactOptional(),
    billing_plan: OrderBillingPlanSchema.exactOptional(),
  })
  .openapi({
    title: 'item',
    description: 'The details for the items to be purchased.',
    required: ['name', 'quantity'],
  })
  .openapi('ItemWithoutCategoryTaxOrAmount')

const LineItemSchema = ItemWithoutCategoryTaxOrAmountSchema.and(
  z
    .object({
      unit_amount: MoneySchema.and(
        z
          .any()
          .openapi({
            description:
              'The item price or rate per unit. Must equal <code>unit_amount * quantity</code> for all items. <code>unit_amount.value</code> can not be a negative number.',
          }),
      ).exactOptional(),
      tax: MoneySchema.and(
        z
          .any()
          .openapi({
            description:
              'The item tax for each unit. Must equal <code>tax * quantity</code> for all items. <code>tax.value</code> can not be a negative number.',
          }),
      ).exactOptional(),
      commodity_code: z
        .string()
        .regex(/^[a-zA-Z0-9_'.-]*$/)
        .min(1)
        .max(12)
        .exactOptional()
        .openapi({
          description:
            'Code used to classify items purchased and track the total amount spent across various categories of products and services. Different corporate purchasing organizations may use different standards, but the United Nations Standard Products and Services Code (UNSPSC) is frequently used.',
        }),
      discount_amount: MoneySchema.and(
        z
          .any()
          .openapi({
            description:
              'Use this field to break down the discount amount included in the total purchase amount. The value provided here will not add to the total purchase amount. The value cannot be negative.',
          }),
      ).exactOptional(),
      total_amount: MoneySchema.and(
        z
          .any()
          .openapi({
            description:
              'The subtotal for all items. Must equal the sum of (items[].unit_amount * items[].quantity) for all items. item_total.value can not be a negative number.',
          }),
      ).exactOptional(),
      unit_of_measure: z
        .string()
        .regex(/^[a-zA-Z0-9_'.-]*$/)
        .min(1)
        .max(12)
        .exactOptional()
        .openapi({
          description:
            'Unit of measure is a standard used to express the magnitude of a quantity in international trade. Most commonly used (but not limited to) examples are: Acre (ACR), Ampere (AMP), Centigram (CGM), Centimetre (CMT), Cubic inch (INQ), Cubic metre (MTQ), Fluid ounce (OZA), Foot (FOT), Hour (HUR), Item (ITM), Kilogram (KGM), Kilometre (KMT), Kilowatt (KWT), Liquid gallon (GLL), Liter (LTR), Pounds (LBS), Square foot (FTK).',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'line_item',
    description:
      'The line items for this purchase. If your merchant account has been configured for Level 3 processing this field will be passed to the processor on your behalf.',
  })
  .openapi('LineItem')

const Level_3CardProcessingDataSchema = z
  .object({
    shipping_amount: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this field to break down the shipping cost included in the total purchase amount. The value provided here will not add to the total purchase amount. The value cannot be negative.',
        }),
    ).exactOptional(),
    duty_amount: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this field to break down the duty amount included in the total purchase amount. The value provided here will not add to the total purchase amount. The value cannot be negative.',
        }),
    ).exactOptional(),
    discount_amount: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'Use this field to break down the discount amount included in the total purchase amount. The value provided here will not add to the total purchase amount. The value cannot be negative.',
        }),
    ).exactOptional(),
    shipping_address: AddressPortableSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_line_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_line_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_4')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_4'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_details')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_details'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({
          description:
            'The address of the person to whom to ship the items. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties.',
        }),
    ).exactOptional(),
    ships_from_postal_code: z
      .string()
      .regex(/^[a-zA-Z0-9_'.-]*$/)
      .min(1)
      .max(60)
      .exactOptional()
      .openapi({
        description: 'Use this field to specify the postal code of the shipping location.',
      }),
    line_items: z
      .array(LineItemSchema.and(z.any().openapi({ title: 'line_item' })))
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'A list of the items that were purchased with this payment. If your merchant account has been configured for Level 3 processing this field will be passed to the processor on your behalf.',
      }),
  })
  .openapi({
    title: 'level_3',
    description:
      'The level 3 card processing data collections, If your merchant account has been configured for Level 3 processing this field will be passed to the processor on your behalf. Please contact your PayPal Technical Account Manager to define level 3 data for your business.',
    required: [],
  })
  .openapi('Level_3CardProcessingData')

const CardSupplementaryDataSchema = z
  .object({
    level_2: Level_2CardProcessingDataSchema.exactOptional(),
    level_3: Level_3CardProcessingDataSchema.exactOptional(),
  })
  .openapi({
    title: 'card_supplementary_data',
    description:
      'Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see <a href="https://developer.paypal.com/docs/checkout/advanced/processing/">checkout</a> or <a href="https://developer.paypal.com/docs/multiparty/checkout/advanced/processing/">multiparty checkout</a>.',
    required: [],
  })
  .openapi('CardSupplementaryData')

const IpAddressSchema = z
  .string()
  .regex(
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
  )
  .min(7)
  .max(39)
  .openapi({
    title: 'IP Address',
    description:
      'An Internet Protocol address (IP address). This address assigns a numerical label to each device that is connected to a computer network through the Internet Protocol. Supports IPv4 and IPv6 addresses.',
  })
  .openapi('IpAddress')

const ParticipantMetadataSchema = z
  .object({
    ip_address: IpAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            "The consumer's IP address, which can be represented in either IPv4 or IPv6 format.",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'participant_metadata',
    description: 'Profile information of the sender or receiver.',
    required: [],
  })
  .openapi('ParticipantMetadata')

const RiskSupplementaryDataSchema = z
  .object({ customer: ParticipantMetadataSchema.exactOptional() })
  .openapi({
    title: 'risk_supplementary_data',
    description: 'Additional information necessary to evaluate the risk profile of a transaction.',
    required: [],
  })
  .openapi('RiskSupplementaryData')

type SupplementaryDataType = {
  card?: z.infer<typeof CardSupplementaryDataSchema> & { [key: string]: unknown }
  risk?: z.infer<typeof RiskSupplementaryDataSchema> & { [key: string]: unknown }
}

const LiabilityShiftSchema = z
  .enum(['NO', 'POSSIBLE', 'UNKNOWN'])
  .openapi({
    title: 'liability_shift',
    description: "Liability shift indicator. The outcome of the issuer's authentication.",
  })
  .openapi('LiabilityShift')

const ParesStatusSchema = z
  .enum(['Y', 'N', 'U', 'A', 'C', 'R', 'D', 'I'])
  .openapi({
    description:
      "Transactions status result identifier. The outcome of the issuer's authentication.",
  })
  .openapi('ParesStatus')

const EnrolledSchema = z
  .enum(['Y', 'N', 'U', 'B'])
  .openapi({ description: 'Status of Authentication eligibility.' })
  .openapi('Enrolled')

const ThreeDSecureAuthenticationResponseSchema = z
  .object({
    authentication_status: ParesStatusSchema.and(
      z.any().openapi({ description: "The outcome of the issuer's authentication." }),
    ).exactOptional(),
    enrollment_status: EnrolledSchema.and(
      z.any().openapi({ description: 'Status of authentication eligibility.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'three_d_secure_authentication_response',
    description: 'Results of 3D Secure Authentication.',
    required: [],
  })
  .openapi('ThreeDSecureAuthenticationResponse')

type AuthenticationResponseType = {
  liability_shift?: z.infer<typeof LiabilityShiftSchema>
  three_d_secure?: z.infer<typeof ThreeDSecureAuthenticationResponseSchema>
}

const GuidSchema = z
  .string()
  .regex(/^[A-Za-z0-9-{}(),]*$/)
  .min(1)
  .max(68)
  .openapi({ title: 'GUID', description: 'A Globally Unique Identifier (GUID) value.' })
  .openapi('Guid')

const StandardHeaderSchemaSchema = z
  .string()
  .regex(/^.*$/)
  .min(1)
  .max(16000)
  .openapi({
    title: 'Schema Object for standard headers',
    description:
      'Standard headers are generally less restrictive in structure due to historical precedent across browsers, etc. This is a common schema for use in defining most standard headers.',
  })
  .openapi('StandardHeaderSchema')

const CheckoutPaymentIntentSchema = z
  .enum(['CAPTURE', 'AUTHORIZE'])
  .openapi({
    title: 'checkout_payment_intent',
    description:
      'The intent to either capture payment immediately or authorize a payment for an order after order creation.',
  })
  .openapi('CheckoutPaymentIntent')

const EmailSchema = z
  .string()
  .regex(
    /^.*(?:[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]).*$/,
  )
  .min(3)
  .max(254)
  .openapi({
    title: 'email',
    description:
      'The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>',
  })
  .openapi('Email')

const AccountIdSchema = z
  .string()
  .regex(/^[2-9A-HJ-NP-Z]{13}$/)
  .length(13)
  .openapi({
    title: 'PayPal Account Identifier',
    description: 'The account identifier for a PayPal account.',
  })
  .openapi('AccountId')

const PayerBaseSchema = z
  .object({
    email_address: EmailSchema.and(
      z.any().openapi({ description: 'The email address of the payer.' }),
    ).exactOptional(),
    payer_id: AccountIdSchema.and(
      z.any().openapi({ description: 'The PayPal-assigned ID for the payer.', readOnly: true }),
    ).exactOptional(),
  })
  .openapi({
    title: 'payer_base',
    description:
      'The customer who approves and pays for the order. The customer is also known as the payer.',
    required: [],
  })
  .openapi('PayerBase')

const NameSchema = z
  .object({
    prefix: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(140)
      .exactOptional()
      .openapi({ description: "The prefix, or title, to the party's name." }),
    given_name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(140)
      .exactOptional()
      .openapi({ description: "When the party is a person, the party's given, or first, name." }),
    surname: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(140)
      .exactOptional()
      .openapi({
        description:
          "When the party is a person, the party's surname or family name. Also known as the last name. Required when the party is a person. Use also to store multiple surnames including the matronymic, or mother's, surname.",
      }),
    middle_name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(140)
      .exactOptional()
      .openapi({
        description:
          "When the party is a person, the party's middle name. Use also to store multiple middle names including the patronymic, or father's, middle name.",
      }),
    suffix: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(140)
      .exactOptional()
      .openapi({ description: "The suffix for the party's name." }),
    full_name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(300)
      .exactOptional()
      .openapi({ description: "When the party is a person, the party's full name." }),
  })
  .openapi({ title: 'Name', description: 'The name of the party.', required: [] })
  .openapi('Name')

const PhoneTypeSchema = z
  .enum(['FAX', 'HOME', 'MOBILE', 'OTHER', 'PAGER'])
  .openapi({ title: 'Phone Type', description: 'The phone type.' })
  .openapi('PhoneType')

const PhoneNumberWithoutCountryCodeSchema = z
  .object({
    national_number: z
      .string()
      .regex(/^[0-9]{1,14}?$/)
      .min(1)
      .max(14)
      .openapi({
        description:
          'The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).',
      }),
  })
  .openapi({
    title: 'Phone Number Format Requiring National Number Excluding Country Code',
    description:
      'A structured representation of a phone number conforming to the international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en),requiring only the national_number field.',
    required: ['national_number'],
  })
  .openapi('PhoneNumberWithoutCountryCode')

const PhoneWithTypeSchema = z
  .object({
    phone_type: PhoneTypeSchema.exactOptional(),
    phone_number: PhoneNumberWithoutCountryCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). Supports only the `national_number` property.',
        }),
    ),
  })
  .openapi({
    title: 'phone_with_type',
    description: 'The phone information.',
    required: ['phone_number'],
  })
  .openapi('PhoneWithType')

const TaxInfoSchema = z
  .object({
    tax_id: z
      .string()
      .regex(/^.*([a-zA-Z0-9]).*$/)
      .min(1)
      .max(14)
      .openapi({ description: "The customer's tax ID value." }),
    tax_id_type: z
      .enum(['BR_CPF', 'BR_CNPJ'])
      .openapi({ description: "The customer's tax ID type." }),
  })
  .openapi({
    title: 'tax_info',
    description:
      'The tax ID of the customer. The customer is also known as the payer. Both `tax_id` and `tax_id_type` are required.',
    required: ['tax_id', 'tax_id_type'],
  })
  .openapi('TaxInfo')

const CountryCode_2Schema = z
  .string()
  .regex(/^([A-Z]{2}|C2)$/)
  .length(2)
  .openapi({
    description:
      'The [two-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>',
  })
  .openapi('CountryCode_2')

const PayerSchema = PayerBaseSchema.and(
  z
    .object({
      name: NameSchema.and(
        z
          .any()
          .refine(
            (val) =>
              !z
                .union([
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'prefix')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['prefix'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'middle_name')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['middle_name'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'suffix')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['suffix'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'alternate_full_name')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['alternate_full_name'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'full_name')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['full_name'] }),
                ])
                .safeParse(val).success,
          )
          .openapi({
            description:
              'The name of the payer. Supports only the `given_name` and `surname` properties.',
          }),
      ).exactOptional(),
      phone: PhoneWithTypeSchema.and(
        z
          .any()
          .openapi({
            description:
              'The phone number of the customer. Available only when you enable the **Contact Telephone Number** option in the <a href="https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-website-payments">**Profile & Settings**</a> for the merchant\'s PayPal account. The `phone.phone_number` supports only `national_number`.',
          }),
      ).exactOptional(),
      birth_date: DateNoTimeSchema.and(
        z.any().openapi({ description: 'The birth date of the payer in `YYYY-MM-DD` format.' }),
      ).exactOptional(),
      tax_info: TaxInfoSchema.and(
        z
          .any()
          .openapi({
            description:
              "The tax information of the payer. Required only for Brazilian payer's. Both `tax_id` and `tax_id_type` are required.",
          }),
      ).exactOptional(),
      address: AddressPortableSchema.and(
        z
          .any()
          .refine(
            (val) =>
              !z
                .union([
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'address_line_3')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['address_line_3'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'admin_area_3')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['admin_area_3'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'admin_area_4')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['admin_area_4'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'address_details')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['address_details'] }),
                ])
                .safeParse(val).success,
          )
          .openapi({
            description:
              'The address of the payer. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. Also referred to as the billing address of the customer.',
          }),
      ).exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'payer',
    description:
      'The customer who approves and pays for the order. The customer is also known as the payer.',
  })
  .openapi('Payer')

const DiscountWithBreakdownSchema = MoneySchema.and(z.object({}))
  .openapi({
    title: 'discount_with_breakdown',
    description:
      'The discount amount and currency code. For list of supported currencies and decimal precision, see the PayPal REST APIs <a href="/docs/integration/direct/rest/currency-codes/">Currency Codes</a>.',
  })
  .openapi('DiscountWithBreakdown')

const AmountBreakdownSchema = z
  .object({
    item_total: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The subtotal for all items. Required if the request includes `purchase_units[].items[].unit_amount`. Must equal the sum of `(items[].unit_amount * items[].quantity)` for all items. <code>item_total.value</code> can not be a negative number.',
        }),
    ).exactOptional(),
    shipping: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The shipping fee for all items within a given `purchase_unit`. <code>shipping.value</code> can not be a negative number.',
        }),
    ).exactOptional(),
    handling: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The handling fee for all items within a given `purchase_unit`. <code>handling.value</code> can not be a negative number.',
        }),
    ).exactOptional(),
    tax_total: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The total tax for all items. Required if the request includes `purchase_units.items.tax`. Must equal the sum of `(items[].tax * items[].quantity)` for all items. <code>tax_total.value</code> can not be a negative number.',
        }),
    ).exactOptional(),
    insurance: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The insurance fee for all items within a given `purchase_unit`. <code>insurance.value</code> can not be a negative number.',
        }),
    ).exactOptional(),
    shipping_discount: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The shipping discount for all items within a given `purchase_unit`. <code>shipping_discount.value</code> can not be a negative number.',
        }),
    ).exactOptional(),
    discount: DiscountWithBreakdownSchema.and(
      z
        .any()
        .openapi({
          description:
            'The discount for all items within a given `purchase_unit`. <code>discount.value</code> can not be a negative number.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'amount_breakdown',
    description:
      'The breakdown of the amount. Breakdown provides details such as total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.',
    required: [],
  })
  .openapi('AmountBreakdown')

const AmountWithBreakdownSchema = MoneySchema.and(
  z.object({ breakdown: AmountBreakdownSchema.exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    title: 'amount_with_breakdown',
    description:
      'The total order amount with an optional breakdown that provides details, such as the total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.<br/>If you specify `amount.breakdown`, the amount equals `item_total` plus `tax_total` plus `shipping` plus `handling` plus `insurance` minus `shipping_discount` minus discount.<br/>The amount must be a positive number. For listed of supported currencies and decimal precision, see the PayPal REST APIs <a href="/docs/integration/direct/rest/currency-codes/">Currency Codes</a>.',
  })
  .openapi('AmountWithBreakdown')

const PayeeBaseSchema = z
  .object({
    email_address: EmailSchema.and(
      z.any().openapi({ description: 'The email address of merchant.' }),
    ).exactOptional(),
    merchant_id: AccountIdSchema.and(
      z.any().openapi({ description: 'The encrypted PayPal account ID of the merchant.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'payee_base',
    description:
      'The details for the merchant who receives the funds and fulfills the order. The merchant is also known as the payee.',
    required: [],
  })
  .openapi('PayeeBase')

const PhoneSchema = z
  .object({
    country_code: z
      .string()
      .regex(/^[0-9]{1,3}?$/)
      .min(1)
      .max(3)
      .openapi({
        title: 'country_calling_code',
        description:
          'The country calling code (CC), in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the CC and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).',
      }),
    national_number: z
      .string()
      .regex(/^[0-9]{1,14}?$/)
      .min(1)
      .max(14)
      .openapi({
        description:
          'The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).',
      }),
    extension_number: z
      .string()
      .regex(/^[0-9]{1,15}?$/)
      .min(1)
      .max(15)
      .exactOptional()
      .openapi({ description: 'The extension number.' }),
  })
  .openapi({
    title: 'Phone',
    description:
      'The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).',
    required: ['country_code', 'national_number'],
  })
  .openapi('Phone')

const PayeeSchema = PayeeBaseSchema.and(z.object({}))
  .openapi({
    title: 'payee',
    description:
      'The merchant who receives the funds and fulfills the order. The merchant is also known as the payee.',
  })
  .openapi('Payee')

const PlatformFeeSchema = z
  .object({
    amount: MoneySchema.and(
      z.any().openapi({ title: 'amount', description: 'The fee for this transaction.' }),
    ),
    payee: PayeeBaseSchema.and(
      z
        .any()
        .openapi({ title: 'payee', description: 'The recipient of the fee for this transaction.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'platform_fee',
    description:
      'The platform or partner fee, commission, or brokerage fee that is associated with the transaction. Not a separate or isolated transaction leg from the external perspective. The platform fee is limited in scope and is always associated with the original payment for the purchase unit.',
    required: ['amount'],
  })
  .openapi('PlatformFee')

const DisbursementModeSchema = z
  .enum(['INSTANT', 'DELAYED'])
  .default('INSTANT')
  .openapi({
    title: 'disbursement_mode',
    description: 'The funds that are held on behalf of the merchant.',
  })
  .openapi('DisbursementMode')

const PaymentInstructionSchema = z
  .object({
    platform_fees: z
      .array(PlatformFeeSchema.and(z.any().openapi({ title: 'platform_fee' })))
      .min(0)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'An array of various fees, commissions, tips, or donations. This field is only applicable to merchants that been enabled for PayPal Complete Payments Platform for Marketplaces and Platforms capability.',
      }),
    disbursement_mode: DisbursementModeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The funds that are held payee by the marketplace/platform. This field is only applicable to merchants that been enabled for PayPal Complete Payments Platform for Marketplaces and Platforms capability.',
        }),
    ).exactOptional(),
    payee_pricing_tier_id: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(20)
      .exactOptional()
      .openapi({
        description:
          "This field is only enabled for selected merchants/partners to use and provides the ability to trigger a specific pricing rate/plan for a payment transaction. The list of eligible 'payee_pricing_tier_id' would be provided to you by your Account Manager. Specifying values other than the one provided to you by your account manager would result in an error.",
      }),
    payee_receivable_fx_rate_id: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(4000)
      .exactOptional()
      .openapi({
        description:
          'FX identifier generated returned by PayPal to be used for payment processing in order to honor FX rate (for eligible integrations) to be used when amount is settled/received into the payee account.',
      }),
  })
  .openapi({
    title: 'payment_instruction',
    description:
      'Any additional payment instructions to be consider during payment processing. This processing instruction is applicable for Capturing an order or Authorizing an Order.',
    required: [],
  })
  .openapi('PaymentInstruction')

const ItemRequestSchema = z
  .object({
    name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(3000)
      .openapi({
        description:
          'The item name or title. <blockquote>This field supports up to 3000 characters, but <strong>any content beyond 127 characters (including spaces) will be truncated. The 127 character limit is reflected in the response</strong> representation of this field</blockquote>.',
      }),
    unit_amount: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The item price or rate per unit. If you specify <code>unit_amount</code>, <code>purchase_units[].amount.breakdown.item_total</code> is required. Must equal <code>unit_amount * quantity</code> for all items. <code>unit_amount.value</code> can not be a negative number.',
        }),
    ),
    tax: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The item tax for each unit. If <code>tax</code> is specified, <code>purchase_units[].amount.breakdown.tax_total</code> is required. Must equal <code>tax * quantity</code> for all items. <code>tax.value</code> can not be a negative number.',
        }),
    ).exactOptional(),
    quantity: z
      .string()
      .regex(/^[1-9][0-9]{0,9}$/)
      .min(0)
      .max(10)
      .openapi({ description: 'The item quantity. Must be a whole number.' }),
    description: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(4000)
      .exactOptional()
      .openapi({
        description:
          '<blockquote>This field supports up to 4000 characters, but <strong>any content beyond 2048 characters (including spaces) will be truncated. The 2048 character limit is reflected in the response</strong> representation of this field</blockquote>.',
      }),
    sku: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(127)
      .exactOptional()
      .openapi({ description: 'The stock keeping unit (SKU) for the item.' }),
    url: z
      .url()
      .min(1)
      .max(2048)
      .exactOptional()
      .openapi({
        description:
          'The URL to the item being purchased. Visible to buyer and used in buyer experiences.',
      }),
    category: z
      .enum(['DIGITAL_GOODS', 'PHYSICAL_GOODS', 'DONATION'])
      .exactOptional()
      .openapi({ description: 'The item category type.' }),
    image_url: z
      .url()
      .min(1)
      .max(2048)
      .exactOptional()
      .openapi({
        description:
          "The URL of the item's image. File type and size restrictions apply. An image that violates these restrictions will not be honored.",
      }),
    upc: UniversalProductCodeSchema.and(
      z.any().openapi({ description: 'The Universal Product Code of the item.' }),
    ).exactOptional(),
    billing_plan: OrderBillingPlanSchema.exactOptional(),
  })
  .openapi({
    title: 'item_request',
    description: 'The details for the items to be purchased.',
    required: ['name', 'quantity', 'unit_amount'],
  })
  .openapi('ItemRequest')

const EmailAddressSchema = z
  .string()
  .regex(
    /^(?:[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[A-Za-z0-9-]*[A-Za-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
  )
  .min(3)
  .max(254)
  .openapi({
    description:
      'The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>',
  })
  .openapi('EmailAddress')

const ShippingTypeSchema = z
  .enum(['SHIPPING', 'PICKUP', 'PICKUP_IN_STORE', 'PICKUP_FROM_PERSON'])
  .default('SHIPPING')
  .openapi({
    title: 'shipping_type',
    description: 'A classification for the method of purchase fulfillment.',
  })
  .openapi('ShippingType')

const DateTimeSchema = z
  .string()
  .regex(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/,
  )
  .min(20)
  .max(64)
  .openapi({
    description:
      'The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote>',
  })
  .openapi('DateTime')

const ShippingOptionSchema = z
  .object({
    id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(127)
      .openapi({ description: 'A unique ID that identifies a payer-selected shipping option.' }),
    label: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(127)
      .openapi({
        description:
          "A description that the payer sees, which helps them choose an appropriate shipping option. For example, `Free Shipping`, `USPS Priority Shipping`, `Expédition prioritaire USPS`, or `USPS yōuxiān fā huò`. Localize this description to the payer's locale.",
      }),
    type: ShippingTypeSchema.and(
      z.any().openapi({ description: 'A classification for the method of purchase fulfillment.' }),
    ).exactOptional(),
    amount: MoneySchema.and(
      z.any().openapi({ description: 'The shipping cost for the selected option.' }),
    ).exactOptional(),
    selected: z
      .boolean()
      .openapi({
        description:
          'If the API request sets `selected = true`, it represents the shipping option that the payee or merchant expects to be pre-selected for the payer when they first view the `shipping.options` in the PayPal Checkout experience. As part of the response if a `shipping.option` contains `selected=true`, it represents the shipping option that the payer selected during the course of checkout with PayPal. Only one `shipping.option` can be set to `selected=true`.',
      }),
  })
  .openapi({
    title: 'shipping_option',
    description:
      'The options that the payee or merchant offers to the payer to ship or pick up their items.',
    required: ['id', 'label', 'selected'],
  })
  .openapi('ShippingOption')

const ShippingDetailSchema = z
  .object({
    name: NameSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'prefix')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['prefix'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'given_name')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['given_name'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'surname')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['surname'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'middle_name')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['middle_name'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'suffix')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['suffix'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'alternate_full_name')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['alternate_full_name'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({
          description:
            'The name of the person to whom to ship the items. Supports only the `full_name` property.',
        }),
    ).exactOptional(),
    email_address: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address of the recipient of the shipped items, which may belong to either the payer, or an alternate contact, for delivery.',
        }),
    ).exactOptional(),
    phone_number: PhoneSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                  if (!Object.hasOwn(val, 'extension_number')) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .openapi({ required: ['extension_number'] })
              .safeParse(val).success,
        )
        .openapi({
          description:
            'The phone number of the recipient of the shipped items, which may belong to either the payer, or an alternate contact, for delivery. [Format - canonical international [E.164 numbering plan](https://www.itu.int/rec/T-REC-E.164/en)]',
        }),
    ).exactOptional(),
    type: z
      .enum(['SHIPPING', 'PICKUP_IN_PERSON', 'PICKUP_IN_STORE', 'PICKUP_FROM_PERSON'])
      .default('SHIPPING')
      .exactOptional()
      .openapi({
        title: 'Fulfillment Type',
        description:
          'A classification for the method of purchase fulfillment (e.g shipping, in-store pickup, etc). Either `type` or `options` may be present, but not both.',
      }),
    options: z
      .array(
        ShippingOptionSchema.and(
          z
            .any()
            .openapi({
              title: 'shipping_option',
              description:
                'The option that the payee or merchant offers to the payer to ship or pick up their items.',
            }),
        ),
      )
      .min(0)
      .max(30)
      .exactOptional()
      .openapi({
        description:
          'An array of shipping options that the payee or merchant offers to the payer to ship or pick up their items.',
      }),
    address: AddressPortableSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_line_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_line_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_4')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_4'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_details')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_details'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({
          description:
            'The address of the person to whom to ship the items. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. `admin_area_1` is required for addresses located in Argentina, Brazil, China, Canada, India, Indonesia, Japan, Mexico, Thailand, and the United States.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'shipping_detail', description: 'The shipping details.', required: [] })
  .openapi('ShippingDetail')

const SupplementaryDataSchema: z.ZodType<SupplementaryDataType> = z
  .lazy(() =>
    z
      .object({
        card: CardSupplementaryDataSchema.and(
          z
            .any()
            .openapi({
              description:
                'Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see <a href="https://developer.paypal.com/docs/checkout/advanced/processing/">checkout</a> or <a href="https://developer.paypal.com/docs/multiparty/checkout/advanced/processing/">multiparty checkout</a>.',
            }),
        ).exactOptional(),
        risk: RiskSupplementaryDataSchema.and(
          z
            .any()
            .openapi({
              description:
                'Merchants and partners can add additional customer parameters that can help with better fraud protection and reduced risk for unbranded card payments.',
            }),
        ).exactOptional(),
      })
      .openapi({
        title: 'supplementary_data',
        description:
          'Supplementary data about a payment. This object passes information that can be used to improve risk assessments and processing costs, for example, by providing Level 2 and Level 3 payment data.',
        required: [],
      }),
  )
  .openapi('SupplementaryData')

const PurchaseUnitRequestSchema = z
  .object({
    reference_id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({
        description:
          'The API caller-provided external ID for the purchase unit. Required for multiple purchase units when you must update the order through `PATCH`. If you omit this value and the order contains only one purchase unit, PayPal sets this value to `default`.',
      }),
    amount: AmountWithBreakdownSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total order amount with an optional breakdown that provides details, such as the total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.<br/>If you specify `amount.breakdown`, the amount equals `item_total` plus `tax_total` plus `shipping` plus `handling` plus `insurance` minus `shipping_discount` minus discount.<br/>The amount must be a positive number. The `amount.value` field supports up to 15 digits preceding the decimal. For a list of supported currencies, decimal precision, and maximum charge amount, see the PayPal REST APIs <a href="https://developer.paypal.com/api/rest/reference/currency-codes/">Currency Codes</a>.',
        }),
    ),
    payee: PayeeSchema.and(
      z.any().openapi({ description: 'The merchant who receives payment for this transaction.' }),
    ).exactOptional(),
    payment_instruction: PaymentInstructionSchema.exactOptional(),
    description: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(3000)
      .exactOptional()
      .openapi({
        description:
          '<blockquote>This field supports up to 3,000 characters, but <strong>any content beyond 127 characters (including spaces) will be truncated. The 127 character limit is reflected in the response</strong> representation of this field.</blockquote>The purchase description. The maximum length of the character is dependent on the type of characters used. The character length is specified assuming a US ASCII character. Depending on type of character; (e.g. accented character, Japanese characters) the number of characters that that can be specified as input might not equal the permissible max length.',
      }),
    custom_id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'The API caller-provided external ID. Used to reconcile client transactions with PayPal transactions. Appears in transaction and settlement reports but is not visible to the payer.',
      }),
    invoice_id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          "The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives. invoice_id values are required to be unique within each merchant account by default. Although the uniqueness validation is configurable, disabling this behavior will remove the account's ability to use invoice_id in other APIs as an identifier. It is highly recommended to keep a unique invoice_id for each Order.",
      }),
    soft_descriptor: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(1000)
      .exactOptional()
      .openapi({
        description:
          '<blockquote>This field supports up to 127 characters, but <strong>any content beyond 22 characters (including spaces) will be truncated. The 22 character limit is reflected in the response</strong> representation of this field.</blockquote>The soft descriptor is the dynamic text used to construct the statement descriptor that appears on a payer\'s card statement.<br><br>If an Order is paid using the "PayPal Wallet", the statement descriptor will appear in following format on the payer\'s card statement: <code><var>PAYPAL_prefix</var>+(space)+<var>merchant_descriptor</var>+(space)+ <var>soft_descriptor</var></code><blockquote><strong>Note:</strong> The merchant descriptor is the descriptor of the merchant’s payment receiving preferences which can be seen by logging into the merchant account https://www.sandbox.paypal.com/businessprofile/settings/info/edit</blockquote>The <code>PAYPAL</code> prefix uses 8 characters. Only the first 22 characters will be displayed in the statement. <br>For example, if:<ul><li>The PayPal prefix toggle is <code>PAYPAL *</code>.</li><li>The merchant descriptor in the profile is <code>Janes Gift</code>.</li><li>The soft descriptor is <code>800-123-1234</code>.</li></ul>Then, the statement descriptor on the card is <code>PAYPAL * Janes Gift 80</code>.',
      }),
    items: z
      .array(ItemRequestSchema.and(z.any().openapi({ title: 'item', description: 'The item.' })))
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({ description: 'An array of items that the customer purchases from the merchant.' }),
    shipping: ShippingDetailSchema.and(
      z
        .any()
        .openapi({ description: 'The name and address of the person to whom to ship the items.' }),
    ).exactOptional(),
    supplementary_data: SupplementaryDataSchema.and(
      z.any().openapi({ description: 'Contains Supplementary Data.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'Purchase Unit Request',
    description:
      'The purchase unit request. Includes required information for the payment contract.',
    required: ['amount'],
  })
  .openapi('PurchaseUnitRequest')

const LanguageSchema = z
  .string()
  .regex(/^[a-z]{2}(?:-[A-Z][a-z]{3})?(?:-(?:[A-Z]{2}|[0-9]{3}))?$/)
  .min(2)
  .max(10)
  .openapi({
    description:
      'The [language tag](https://tools.ietf.org/html/bcp47#section-2) for the language in which to localize the error-related strings, such as messages, issues, and suggested actions. The tag is made up of the [ISO 639-2 language code](https://www.loc.gov/standards/iso639-2/php/code_list.php), the optional [ISO-15924 script tag](https://www.unicode.org/iso15924/codelists.html), and the [ISO-3166 alpha-2 country code](/api/rest/reference/country-codes/) or [M49 region code](https://unstats.un.org/unsd/methodology/m49/).',
  })
  .openapi('Language')

const UrlSchema = z
  .url()
  .min(0)
  .max(2147483647)
  .openapi({ description: 'Describes the URL.' })
  .openapi('Url')

const ExperienceContextBaseSchema = z
  .object({
    brand_name: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          'The label that overrides the business name in the PayPal account on the PayPal site. The pattern is defined by an external party and supports Unicode.',
      }),
    locale: LanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The BCP 47-formatted locale of pages that the PayPal payment experience shows. PayPal supports a five-character code. For example, `da-DK`, `he-IL`, `id-ID`, `ja-JP`, `no-NO`, `pt-BR`, `ru-RU`, `sv-SE`, `th-TH`, `zh-CN`, `zh-HK`, or `zh-TW`.',
        }),
    ).exactOptional(),
    shipping_preference: z
      .enum(['GET_FROM_FILE', 'NO_SHIPPING', 'SET_PROVIDED_ADDRESS'])
      .default('GET_FROM_FILE')
      .exactOptional()
      .openapi({ description: 'The location from which the shipping address is derived.' }),
    return_url: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL where the customer is redirected after the customer approves the payment.',
        }),
    ).exactOptional(),
    cancel_url: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL where the customer is redirected after the customer cancels the payment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'experience_context_base',
    description: 'Customizes the payer experience during the approval process for the payment.',
    required: [],
  })
  .openapi('ExperienceContextBase')

const InstrumentIdSchema = z
  .string()
  .regex(/^[A-Za-z0-9-_.+=]+$/)
  .min(1)
  .max(256)
  .openapi({ description: 'The identifier of the instrument.' })
  .openapi('InstrumentId')

const DateYearMonthSchema = z
  .string()
  .regex(/^[0-9]{4}-(0[1-9]|1[0-2])$/)
  .length(7)
  .openapi({
    description:
      'The year and month, in ISO-8601 `YYYY-MM` date format. See [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
  })
  .openapi('DateYearMonth')

const CardBrandSchema = z
  .enum([
    'VISA',
    'MASTERCARD',
    'DISCOVER',
    'AMEX',
    'SOLO',
    'JCB',
    'STAR',
    'DELTA',
    'SWITCH',
    'MAESTRO',
    'CB_NATIONALE',
    'CONFIGOGA',
    'CONFIDIS',
    'ELECTRON',
    'CETELEM',
    'CHINA_UNION_PAY',
    'DINERS',
    'ELO',
    'HIPER',
    'HIPERCARD',
    'RUPAY',
    'GE',
    'SYNCHRONY',
    'EFTPOS',
    'CARTE_BANCAIRE',
    'STAR_ACCESS',
    'PULSE',
    'NYCE',
    'ACCEL',
    'UNKNOWN',
  ])
  .openapi({
    title: 'card_brand',
    description: 'The card network or brand. Applies to credit, debit, gift, and payment cards.',
  })
  .openapi('CardBrand')

const CardTypeSchema = z
  .enum(['CREDIT', 'DEBIT', 'PREPAID', 'STORE', 'UNKNOWN'])
  .openapi({ title: 'card_type', description: 'Type of card. i.e Credit, Debit and so on.' })
  .openapi('CardType')

const EciFlagSchema = z
  .enum([
    'MASTERCARD_NON_3D_SECURE_TRANSACTION',
    'MASTERCARD_ATTEMPTED_AUTHENTICATION_TRANSACTION',
    'MASTERCARD_FULLY_AUTHENTICATED_TRANSACTION',
    'FULLY_AUTHENTICATED_TRANSACTION',
    'ATTEMPTED_AUTHENTICATION_TRANSACTION',
    'NON_3D_SECURE_TRANSACTION',
  ])
  .openapi({
    description:
      'Electronic Commerce Indicator (ECI). The ECI value is part of the 2 data elements that indicate the transaction was processed electronically. This should be passed on the authorization transaction to the Gateway/Processor.',
  })
  .openapi('EciFlag')

const MerchantPartnerCustomerIdSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_-]+$/)
  .min(1)
  .max(22)
  .openapi({
    title: 'merchant_partner_customer_id',
    description: 'The unique ID for a customer generated by PayPal.',
  })
  .openapi('MerchantPartnerCustomerId')

const CustomerSchema = z
  .object({
    id: MerchantPartnerCustomerIdSchema.exactOptional(),
    email_address: EmailSchema.and(
      z
        .any()
        .openapi({
          description:
            'Email address of the customer as provided to the merchant or on file with the merchant. Email Address is required if you are processing the transaction using PayPal Guest Processing which is offered to select partners and merchants.',
        }),
    ).exactOptional(),
    phone: PhoneWithTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The phone number of the customer as provided to the merchant or on file with the merchant. The `phone.phone_number` supports only `national_number`.',
        }),
    ).exactOptional(),
    name: NameSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'prefix')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['prefix'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'middle_name')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['middle_name'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'suffix')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['suffix'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'alternate_full_name')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['alternate_full_name'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'full_name')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['full_name'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({
          description:
            'The full name of the customer as provided to the merchant or on file with the merchant.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'customer',
    description:
      'This object represents a merchant’s customer, allowing them to store contact details, and track all payments associated with the same customer.',
    required: [],
  })
  .openapi('Customer')

const CardCustomerSchema = CustomerSchema.and(
  z
    .object({
      merchant_customer_id: z
        .string()
        .regex(/^[0-9a-zA-Z-_.^*$@#]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          description:
            'Merchants and partners may already have a data-store where their customer information is persisted. Use merchant_customer_id to associate the PayPal-generated customer.id to your representation of a customer.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'card_customer',
    description: "The details about a customer in PayPal's system of record.",
  })
  .openapi('CardCustomer')

const StoreInVaultInstructionSchema = z
  .literal('ON_SUCCESS')
  .openapi({
    title: 'store_in_vault_instruction',
    description: 'Defines how and when the payment source gets vaulted.',
  })
  .openapi('StoreInVaultInstruction')

const VaultInstructionBaseSchema = z
  .object({ store_in_vault: StoreInVaultInstructionSchema.exactOptional() })
  .openapi({
    title: 'vault_instruction_base',
    description:
      'Basic vault instruction specification that can be extended by specific payment sources that supports vaulting.',
    required: [],
  })
  .openapi('VaultInstructionBase')

const CardVerificationSchema = z
  .object({
    method: z
      .enum(['SCA_ALWAYS', 'SCA_WHEN_REQUIRED', '3D_SECURE', 'AVS_CVV'])
      .default('SCA_WHEN_REQUIRED')
      .exactOptional()
      .openapi({
        title: 'card_verification',
        description: 'The method used for card verification.',
      }),
  })
  .openapi({
    title: 'Card Verification',
    description:
      'The API caller can opt in to verify the card through PayPal offered verification services (e.g. Smart Dollar Auth, 3DS).',
    required: [],
  })
  .openapi('CardVerification')

const CardAttributesSchema = z
  .object({
    customer: CardCustomerSchema.exactOptional(),
    vault: VaultInstructionBaseSchema.and(
      z
        .any()
        .openapi({ description: 'Instruction to vault the card based on the specified strategy.' }),
    ).exactOptional(),
    verification: CardVerificationSchema.and(
      z
        .any()
        .openapi({
          description: 'Instruction to optionally verify the card based on the specified strategy.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'card_attributes',
    description: 'Additional attributes associated with the use of this card.',
    required: [],
  })
  .openapi('CardAttributes')

const CardSchema = z
  .object({
    id: InstrumentIdSchema.and(
      z.any().openapi({ description: 'The PayPal-generated ID for the card.', readOnly: true }),
    ).exactOptional(),
    name: z
      .string()
      .regex(/^.{1,300}$/)
      .min(1)
      .max(300)
      .exactOptional()
      .openapi({ description: "The card holder's name as it appears on the card." }),
    number: z
      .string()
      .regex(/^[0-9]{13,19}$/)
      .min(13)
      .max(19)
      .exactOptional()
      .openapi({ description: 'The primary account number (PAN) for the payment card.' }),
    expiry: DateYearMonthSchema.and(
      z
        .any()
        .openapi({
          description:
            'The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6) For example: 2028-04',
        }),
    ).exactOptional(),
    security_code: z
      .string()
      .regex(/^[0-9]{3,4}$/)
      .min(3)
      .max(4)
      .exactOptional()
      .openapi({
        description:
          'The three- or four-digit security code of the card. Also known as the CVV, CVC, CVN, CVE, or CID. This parameter cannot be present in the request when `payment_initiator=MERCHANT`.',
      }),
    last_digits: z
      .string()
      .regex(/^[0-9]{2,4}$/)
      .min(2)
      .max(4)
      .exactOptional()
      .openapi({ description: 'The last digits of the payment card.', readOnly: true }),
    card_type: CardBrandSchema.and(
      z
        .any()
        .openapi({
          description:
            'The card brand or network. Typically used in the response. <b>DEPRECATED</b><br><table><tr><th>See</th></tr><tr><td>type</td></tr></table>',
          deprecated: true,
          readOnly: true,
        }),
    ).exactOptional(),
    type: CardTypeSchema.and(
      z.any().openapi({ description: 'The payment card type.' }),
    ).exactOptional(),
    brand: CardBrandSchema.and(
      z
        .any()
        .openapi({ description: 'The card brand or network. Typically used in the response.' }),
    ).exactOptional(),
    billing_address: AddressPortableSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_line_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_line_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_4')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_4'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_details')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_details'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({
          description:
            'The billing address for this card. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties.',
        }),
    ).exactOptional(),
    attributes: CardAttributesSchema.and(
      z
        .any()
        .openapi({
          title: 'card_attributes',
          description: 'Additional attributes associated with the use of this card.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'card',
    description: 'The payment card to use to fund a payment. Can be a credit or debit card.',
    required: [],
  })
  .openapi('Card')

const VaultIdSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_-]+$/)
  .min(1)
  .max(255)
  .openapi({
    title: 'vault_id',
    description:
      "The PayPal-generated ID for the vaulted payment source. This ID should be stored on the merchant's server so the saved payment source can be used for future transactions.",
  })
  .openapi('VaultId')

const SingleUseTokenSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_-]+$/)
  .min(1)
  .max(255)
  .openapi({
    title: 'single_use_token',
    description:
      'The PayPal-generated, short-lived, one-time-use token, used to communicate payment information to PayPal for transaction processing.',
  })
  .openapi('SingleUseToken')

const PaymentInitiatorSchema = z
  .enum(['CUSTOMER', 'MERCHANT'])
  .openapi({
    title: 'payment_initiator',
    description: 'The person or party who initiated or triggered the payment.',
  })
  .openapi('PaymentInitiator')

const StoredPaymentSourcePaymentTypeSchema = z
  .enum(['ONE_TIME', 'RECURRING', 'UNSCHEDULED'])
  .openapi({
    title: 'stored_payment_source_payment_type',
    description: 'Indicates the type of the stored payment_source payment.',
  })
  .openapi('StoredPaymentSourcePaymentType')

const StoredPaymentSourceUsageTypeSchema = z
  .enum(['FIRST', 'SUBSEQUENT', 'DERIVED'])
  .default('DERIVED')
  .openapi({
    title: 'stored_payment_source_usage_type',
    description:
      'Indicates if this is a `first` or `subsequent` payment using a stored payment source (also referred to as stored credential or card on file).',
  })
  .openapi('StoredPaymentSourceUsageType')

const NetworkTransactionSchema = z
  .object({
    id: z
      .string()
      .regex(/^[a-zA-Z0-9-_@.:&+=*^'~#!$%()]+$/)
      .min(9)
      .max(36)
      .exactOptional()
      .openapi({
        description:
          'Transaction reference id returned by the scheme. For Visa and Amex, this is the "Tran id" field in response. For MasterCard, this is the "BankNet reference id" field in response. For Discover, this is the "NRID" field in response. The pattern we expect for this field from Visa/Amex/CB/Discover is numeric, Mastercard/BNPP is alphanumeric and Paysecure is alphanumeric with special character -.',
      }),
    date: z
      .string()
      .regex(/^[0-9]+$/)
      .length(4)
      .exactOptional()
      .openapi({
        description:
          'The date that the transaction was authorized by the scheme. This field may not be returned for all networks. MasterCard refers to this field as "BankNet reference date". For some specific networks, such as MasterCard and Discover, this date field is mandatory when the `previous_network_transaction_reference_id` is passed.',
      }),
    network: CardBrandSchema.and(
      z
        .any()
        .openapi({
          description: 'Name of the card network through which the transaction was routed.',
        }),
    ).exactOptional(),
    acquirer_reference_number: z
      .string()
      .regex(/^[a-zA-Z0-9]+$/)
      .min(1)
      .max(36)
      .exactOptional()
      .openapi({
        description:
          'Reference ID issued for the card transaction. This ID can be used to track the transaction across processors, card brands and issuing banks.',
      }),
  })
  .openapi({
    title: 'network_transaction',
    description: 'Reference values used by the card network to identify a transaction.',
    required: [],
  })
  .openapi('NetworkTransaction')

const NetworkTransactionReferenceSchema = NetworkTransactionSchema.openapi({
  title: 'network_transaction_reference',
  description: 'Reference values used by the card network to identify a transaction.',
  required: ['id'],
}).openapi('NetworkTransactionReference')

const CardStoredCredentialSchema = z
  .object({
    payment_initiator: PaymentInitiatorSchema,
    payment_type: StoredPaymentSourcePaymentTypeSchema,
    usage: StoredPaymentSourceUsageTypeSchema.exactOptional(),
    previous_network_transaction_reference: NetworkTransactionReferenceSchema.exactOptional(),
  })
  .openapi({
    title: 'card_stored_credential',
    description:
      'Provides additional details to process a payment using a `card` that has been stored or is intended to be stored (also referred to as stored_credential or card-on-file).<br/>Parameter compatibility:<br/><ul><li>`payment_type=ONE_TIME` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`usage=FIRST` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`previous_transaction_reference` or `previous_network_transaction_reference` is compatible only with `payment_initiator=MERCHANT`.</li><li>Only one of the parameters - `previous_transaction_reference` and `previous_network_transaction_reference` - can be present in the request.</li></ul>',
    required: ['payment_initiator', 'payment_type'],
  })
  .openapi('CardStoredCredential')

const NetworkTokenRequestSchema = z
  .object({
    number: z
      .string()
      .regex(/^[0-9]{13,19}$/)
      .min(13)
      .max(19)
      .openapi({ description: 'Third party network token number.' }),
    expiry: DateYearMonthSchema.and(
      z
        .any()
        .openapi({
          description:
            'The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).',
        }),
    ),
    cryptogram: z
      .string()
      .regex(/^.*$/)
      .min(28)
      .max(32)
      .exactOptional()
      .openapi({
        description:
          "An Encrypted one-time use value that's sent along with Network Token. This field is not required to be present for recurring transactions.",
      }),
    eci_flag: EciFlagSchema.exactOptional(),
    token_requestor_id: z
      .string()
      .regex(/^[0-9A-Z_]+$/)
      .min(1)
      .max(11)
      .exactOptional()
      .openapi({
        description:
          'A TRID, or a Token Requestor ID, is an identifier used by merchants to request network tokens from card networks. A TRID is a precursor to obtaining a network token for a credit card primary account number (PAN), and will aid in enabling secure card on file (COF) payments and reducing fraud.',
      }),
  })
  .openapi({
    title: 'network_token',
    description: 'The Third Party Network token used to fund a payment.',
    required: ['expiry', 'number'],
  })
  .openapi('NetworkTokenRequest')

const CardExperienceContextSchema = z
  .object({
    return_url: UrlSchema.and(
      z
        .url()
        .min(10)
        .max(4000)
        .openapi({
          description:
            'The URL where the customer will be redirected upon successfully completing the 3DS challenge.',
        }),
    ).exactOptional(),
    cancel_url: UrlSchema.and(
      z
        .url()
        .min(10)
        .max(4000)
        .openapi({
          description:
            'The URL where the customer will be redirected upon cancelling the 3DS challenge.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'card_experience_context',
    description: 'Customizes the payer experience during the 3DS Approval for payment.',
    required: [],
  })
  .openapi('CardExperienceContext')

const CardRequestSchema = CardSchema.and(
  z.any().refine(
    (val) =>
      !z
        .union([
          z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'id')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['id'] }),
          z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'last_digits')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['last_digits'] }),
          z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'card_type')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['card_type'] }),
          z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'type')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['type'] }),
          z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'brand')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['brand'] }),
        ])
        .safeParse(val).success,
  ),
)
  .and(
    z
      .object({
        vault_id: VaultIdSchema.and(
          z
            .any()
            .openapi({
              description:
                "The PayPal-generated ID for the saved card payment source. Typically stored on the merchant's server.",
            }),
        ).exactOptional(),
        single_use_token: SingleUseTokenSchema.and(
          z
            .any()
            .openapi({
              description:
                'The PayPal-generated, short-lived, one-time-use token, used to communicate payment information to PayPal for transaction processing.',
            }),
        ).exactOptional(),
        stored_credential: CardStoredCredentialSchema.exactOptional(),
        network_token: NetworkTokenRequestSchema.and(
          z
            .any()
            .openapi({
              description:
                'A 3rd party network token refers to a network token that the merchant provisions from and vaults with an external TSP (Token Service Provider) other than PayPal.',
            }),
        ).exactOptional(),
        experience_context: CardExperienceContextSchema.and(z.any()).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    title: 'card_request',
    description:
      'The payment card to use to fund a payment. Can be a credit or debit card.<blockquote><strong>Note:</strong> Passing card number, cvv and expiry directly via the API requires <a href="https://www.pcisecuritystandards.org/pci_security/completing_self_assessment"> PCI SAQ D compliance</a>. <br>*PayPal offers a mechanism by which you do not have to take on the <strong>PCI SAQ D</strong> burden by using hosted fields - refer to <a href="https://developer.paypal.com/docs/checkout/advanced/integrate/">this Integration Guide</a>*.</blockquote>',
  })
  .openapi('CardRequest')

const TokenSchema = z
  .object({
    id: z
      .string()
      .regex(/^[0-9a-zA-Z_-]+$/)
      .min(1)
      .max(255)
      .openapi({ description: 'The PayPal-generated ID for the token.' }),
    type: z
      .literal('BILLING_AGREEMENT')
      .openapi({ description: 'The tokenization method that generated the ID.' }),
  })
  .openapi({
    title: 'token',
    description: 'The tokenized payment source to fund a payment.',
    required: ['id', 'type'],
  })
  .openapi('Token')

const V3VaultInstructionBaseSchema = z
  .object({ store_in_vault: StoreInVaultInstructionSchema })
  .openapi({
    title: 'v3_vault_instruction_base',
    description:
      'Base vaulting specification. The object can be extended for specific use cases within each payment_source that supports vaulting.',
    required: ['store_in_vault'],
  })
  .openapi('V3VaultInstructionBase')

const PayeePaymentMethodPreferenceSchema = z
  .enum(['UNRESTRICTED', 'IMMEDIATE_PAYMENT_REQUIRED'])
  .default('UNRESTRICTED')
  .openapi({
    title: 'payee_payment_method_preference',
    description: 'The merchant-preferred payment methods.',
  })
  .openapi('PayeePaymentMethodPreference')

const PaypalWalletCustomerSchema = CustomerSchema.and(
  z
    .object({
      merchant_customer_id: z
        .string()
        .regex(/^[0-9a-zA-Z-_.^*$@#]+$/)
        .min(1)
        .max(64)
        .exactOptional()
        .openapi({
          description:
            'Merchants and partners may already have a data-store where their customer information is persisted. Use merchant_customer_id to associate the PayPal-generated customer.id to your representation of a customer.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'paypal_wallet_customer',
    description: "The details about a customer in PayPal's system of record.",
  })
  .openapi('PaypalWalletCustomer')

const AccountId_2Schema = z
  .string()
  .regex(/^[2-9A-HJ-NP-Z]{13}$/)
  .length(13)
  .openapi({
    description:
      'The PayPal payer ID, which is a masked version of the PayPal account number intended for use with third parties. The account number is reversibly encrypted and a proprietary variant of Base32 is used to encode the result.',
  })
  .openapi('AccountId_2')

const VaultPaypalWalletBaseSchema = VaultInstructionBaseSchema.and(
  z
    .object({
      description: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          description:
            'The description displayed to PayPal consumer on the approval flow for PayPal, as well as on the PayPal payment token management experience on PayPal.com.',
        }),
      usage_pattern: z
        .enum([
          'IMMEDIATE',
          'DEFERRED',
          'RECURRING_PREPAID',
          'RECURRING_POSTPAID',
          'THRESHOLD_PREPAID',
          'THRESHOLD_POSTPAID',
          'SUBSCRIPTION_PREPAID',
          'SUBSCRIPTION_POSTPAID',
          'UNSCHEDULED_PREPAID',
          'UNSCHEDULED_POSTPAID',
          'INSTALLMENT_PREPAID',
          'INSTALLMENT_POSTPAID',
        ])
        .exactOptional()
        .openapi({
          title: 'PayPal Payment Token Usage Pattern',
          description: 'Expected business/pricing model for the billing agreement.',
        }),
      shipping: ShippingDetailSchema.and(
        z
          .any()
          .refine(
            (val) =>
              !z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'options')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['options'] })
                .safeParse(val).success,
          )
          .openapi({ description: 'The shipping address for the Payer.' }),
      ).exactOptional(),
      usage_type: z
        .enum(['MERCHANT', 'PLATFORM'])
        .exactOptional()
        .openapi({
          title: 'PayPal Payment Token Usage Type',
          description: 'The usage type associated with the PayPal payment token.',
        }),
      customer_type: z
        .enum(['CONSUMER', 'BUSINESS'])
        .default('CONSUMER')
        .exactOptional()
        .openapi({
          title: 'PayPal Payment Token Customer Type',
          description:
            'The customer type associated with the PayPal payment token. This is to indicate whether the customer acting on the merchant / platform is either a business or a consumer.',
        }),
      permit_multiple_payment_tokens: z
        .boolean()
        .default(false)
        .exactOptional()
        .openapi({
          description:
            'Create multiple payment tokens for the same payer, merchant/platform combination. Use this when the customer has not logged in at merchant/platform. The payment token thus generated, can then also be used to create the customer account at merchant/platform. Use this also when multiple payment tokens are required for the same payer, different customer at merchant/platform. This helps to identify customers distinctly even though they may share the same PayPal account. This only applies to PayPal payment source.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'vault_paypal_wallet_base',
    description:
      'Resource consolidating common request and response attributes for vaulting PayPal Wallet.',
    required: ['usage_type'],
  })
  .openapi('VaultPaypalWalletBase')

const ChargePatternSchema = z
  .enum([
    'IMMEDIATE',
    'DEFERRED',
    'RECURRING_PREPAID',
    'RECURRING_POSTPAID',
    'THRESHOLD_PREPAID',
    'THRESHOLD_POSTPAID',
    'SUBSCRIPTION_PREPAID',
    'SUBSCRIPTION_POSTPAID',
    'UNSCHEDULED_PREPAID',
    'UNSCHEDULED_POSTPAID',
    'INSTALLMENT_PREPAID',
    'INSTALLMENT_POSTPAID',
  ])
  .openapi({ description: 'Expected business/pricing model for the billing agreement.' })
  .openapi('ChargePattern')

const PaypalWalletAttributesSchema = z
  .object({
    customer: PaypalWalletCustomerSchema.exactOptional(),
    vault: VaultPaypalWalletBaseSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                  if (!Object.hasOwn(val, 'shipping')) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .openapi({ required: ['shipping'] })
              .safeParse(val).success,
        )
        .openapi({
          description:
            'Attributes used to provide the instructions during vaulting of the PayPal Wallet.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'paypal_wallet_attributes',
    description: 'Additional attributes associated with the use of this PayPal Wallet.',
    required: [],
  })
  .openapi('PaypalWalletAttributes')

const NativeAppContextSchema = z
  .object({
    os_type: z
      .enum(['ANDROID', 'IOS', 'OTHER'])
      .exactOptional()
      .openapi({
        description: 'Operating System type of the device that the buyer is using.',
        readOnly: true,
      }),
    os_version: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({
        description: 'Operating System version of the device that the buyer is using.',
        readOnly: true,
      }),
  })
  .openapi({
    title: 'App Switch Preferences on Native App',
    description:
      "Merchant provided, buyer's native app preferences to app switch to the PayPal consumer app.",
    required: [],
  })
  .openapi('NativeAppContext')

const MobileWebContextSchema = z
  .object({
    return_flow: z
      .enum(['AUTO', 'MANUAL'])
      .default('AUTO')
      .exactOptional()
      .openapi({
        description:
          'Merchant preference on how the buyer can navigate back to merchant website post approving the transaction on the PayPal App.',
        readOnly: true,
      }),
    buyer_user_agent: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(512)
      .exactOptional()
      .openapi({
        description:
          "User agent from the request originating from the buyer's device. This will be used to identify the buyer's operating system and browser versions. NOTE: Merchants must not alter or modify the buyer's device user agent.",
      }),
  })
  .openapi({
    title: 'Mobile Web App Switch Context',
    description: "Buyer's mobile web browser context to app switch to the PayPal consumer app.",
    required: [],
  })
  .openapi('MobileWebContext')

const AppSwitchContextSchema = z
  .object({
    native_app: NativeAppContextSchema.exactOptional(),
    mobile_web: MobileWebContextSchema.exactOptional(),
  })
  .openapi({
    title: 'Merchant App Switch Details & Preferences',
    description:
      "Merchant provided details of the native app or mobile web browser to facilitate buyer's app switch to the PayPal consumer app.",
    required: [],
  })
  .openapi('AppSwitchContext')

const BillingAgreementIdSchema = z
  .string()
  .regex(/^[a-zA-Z0-9-]+$/)
  .min(2)
  .max(128)
  .openapi({
    title: 'billing_agreement_id',
    description:
      'The PayPal billing agreement ID. References an approved recurring payment for goods or services.',
  })
  .openapi('BillingAgreementId')

const CallbackConfigurationSchema = z
  .object({
    callback_events: z
      .array(
        z
          .enum(['SHIPPING_ADDRESS', 'SHIPPING_OPTIONS'])
          .openapi({ title: 'callback events', description: 'CallBack event.' }),
      )
      .min(1)
      .max(5)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({
        description:
          'An array of callback events merchant can subscribe to for the corresponding callback url.',
      }),
    callback_url: z
      .url()
      .min(10)
      .max(2040)
      .openapi({
        description:
          'Merchant provided CallBack url.PayPal/Venmo will use this url to call the merchant back when the events occur .PayPal/Venmo expects a secured url usually in the https format.merchant can append the cart id or other params part of the url as query or path params.',
      }),
  })
  .openapi({
    title: 'callback_configuration',
    description: 'CallBack Configuration that the merchant can provide to PayPal/Venmo.',
    required: ['callback_events', 'callback_url'],
  })
  .openapi('CallbackConfiguration')

const PaypalWalletExperienceContextSchema = z
  .object({
    brand_name: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          'The label that overrides the business name in the PayPal account on the PayPal site. The pattern is defined by an external party and supports Unicode.',
      }),
    locale: LanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The BCP 47-formatted locale of pages that the PayPal payment experience shows. PayPal supports a five-character code. For example, `da-DK`, `he-IL`, `id-ID`, `ja-JP`, `no-NO`, `pt-BR`, `ru-RU`, `sv-SE`, `th-TH`, `zh-CN`, `zh-HK`, or `zh-TW`.',
        }),
    ).exactOptional(),
    shipping_preference: z
      .enum(['GET_FROM_FILE', 'NO_SHIPPING', 'SET_PROVIDED_ADDRESS'])
      .default('GET_FROM_FILE')
      .exactOptional()
      .openapi({ description: 'The location from which the shipping address is derived.' }),
    contact_preference: z
      .enum(['NO_CONTACT_INFO', 'UPDATE_CONTACT_INFO', 'RETAIN_CONTACT_INFO'])
      .default('NO_CONTACT_INFO')
      .exactOptional()
      .openapi({
        description:
          "The preference to display the contact information (buyer’s shipping email & phone number) on PayPal's checkout for easy merchant-buyer communication.",
      }),
    return_url: UrlSchema.and(
      z
        .any()
        .openapi({
          description: 'The URL where the customer will be redirected upon approving a payment.',
        }),
    ).exactOptional(),
    cancel_url: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL where the customer will be redirected upon cancelling the payment approval.',
        }),
    ).exactOptional(),
    app_switch_context: AppSwitchContextSchema.and(
      z
        .any()
        .openapi({
          description:
            'Merchants can use this to switch buyers from their website/application to the PayPal consumer app to review and approve the transaction.',
        }),
    ).exactOptional(),
    landing_page: z
      .enum(['LOGIN', 'GUEST_CHECKOUT', 'NO_PREFERENCE', 'BILLING'])
      .default('NO_PREFERENCE')
      .exactOptional()
      .openapi({
        description: 'The type of landing page to show on the PayPal site for customer checkout.',
      }),
    user_action: z
      .enum(['CONTINUE', 'PAY_NOW'])
      .default('CONTINUE')
      .exactOptional()
      .openapi({
        description:
          'Configures a <strong>Continue</strong> or <strong>Pay Now</strong> checkout flow.',
      }),
    payment_method_preference: z
      .enum(['UNRESTRICTED', 'IMMEDIATE_PAYMENT_REQUIRED'])
      .default('UNRESTRICTED')
      .exactOptional()
      .openapi({ description: 'The merchant-preferred payment methods.' }),
    order_update_callback_config: CallbackConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "Merchant provided Order Update callback configuration for PayPal Wallet.PayPal will call back merchant when the specified event occurs.we recommend merchants to pass both the shipping_options and shipping_address callback events. Not supported when `shipping.type` is specified or when 'application_context.shipping_preference' is set as 'NO_SHIPPING' or 'SET_PROVIDED_ADDRESS'.",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'paypal_wallet_experience_context',
    description:
      'Customizes the payer experience during the approval process for payment with PayPal.<blockquote><strong>Note:</strong> Partners and Marketplaces might configure <code>brand_name</code> and <code>shipping_preference</code> during partner account setup, which overrides the request values.</blockquote>',
    required: [],
  })
  .openapi('PaypalWalletExperienceContext')

const PaypalWalletStoredCredentialSchema = z
  .object({
    payment_initiator: PaymentInitiatorSchema,
    charge_pattern: ChargePatternSchema.and(
      z
        .any()
        .openapi({
          description:
            'DEPRECATED. Expected business/pricing model for the billing agreement, Please use usage_pattern instead. <b>DEPRECATED</b><br><table><tr><th>See</th></tr><tr><td>usage_pattern</td></tr></table>',
          deprecated: true,
        }),
    ).exactOptional(),
    usage_pattern: ChargePatternSchema.exactOptional(),
    usage: StoredPaymentSourceUsageTypeSchema.exactOptional(),
  })
  .openapi({
    title: 'paypal_wallet_stored_credential',
    description:
      'Provides additional details to process a payment using the PayPal wallet billing agreement or a vaulted payment method that has been stored or is intended to be stored.',
    required: ['payment_initiator'],
  })
  .openapi('PaypalWalletStoredCredential')

const PaypalWalletSchema = z
  .object({
    vault_id: VaultIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The PayPal-generated ID for the payment_source stored within the Vault.',
        }),
    ).exactOptional(),
    email_address: EmailSchema.and(
      z.any().openapi({ description: 'The email address of the PayPal account holder.' }),
    ).exactOptional(),
    name: NameSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'prefix')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['prefix'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'middle_name')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['middle_name'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'suffix')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['suffix'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'alternate_full_name')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['alternate_full_name'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'full_name')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['full_name'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({
          description:
            'The name of the PayPal account holder. Supports only the `given_name` and `surname` properties.',
        }),
    ).exactOptional(),
    phone: PhoneWithTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The phone number of the customer. Available only when you enable the **Contact Telephone Number** option in the <a href="https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-website-payments">**Profile & Settings**</a> for the merchant\'s PayPal account. The `phone.phone_number` supports only `national_number`.',
        }),
    ).exactOptional(),
    birth_date: DateNoTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The birth date of the PayPal account holder in `YYYY-MM-DD` format.',
        }),
    ).exactOptional(),
    tax_info: TaxInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            "The tax information of the PayPal account holder. Required only for Brazilian PayPal account holder's. Both `tax_id` and `tax_id_type` are required.",
        }),
    ).exactOptional(),
    address: AddressPortableSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_line_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_line_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_4')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_4'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_details')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_details'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({
          description:
            'The address of the PayPal account holder. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. Also referred to as the billing address of the customer.',
        }),
    ).exactOptional(),
    attributes: PaypalWalletAttributesSchema.and(
      z
        .any()
        .openapi({
          title: 'paypal_wallet_attributes',
          description: 'Additional attributes associated with the use of this wallet.',
        }),
    ).exactOptional(),
    experience_context: PaypalWalletExperienceContextSchema.exactOptional(),
    billing_agreement_id: BillingAgreementIdSchema.exactOptional(),
    stored_credential: PaypalWalletStoredCredentialSchema.exactOptional(),
  })
  .openapi({
    title: 'paypal_wallet',
    description: 'A resource that identifies a PayPal Wallet is used for payment.',
    required: [],
  })
  .openapi('PaypalWallet')

const FullNameSchema = z
  .string()
  .regex(/^[\S\s]*$/)
  .min(3)
  .max(300)
  .openapi({ title: 'name', description: 'The full name representation like Mr J Smith.' })
  .openapi('FullName')

const BancontactRequestSchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ),
    experience_context: ExperienceContextBaseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Customizes the payer experience during the approval process for the payment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'bancontact_request',
    description: 'Information needed to pay using Bancontact.',
    required: ['country_code', 'name'],
  })
  .openapi('BancontactRequest')

const BlikExperienceContextSchema = ExperienceContextBaseSchema.and(
  z
    .object({
      consumer_ip: IpAddressSchema.and(
        z
          .any()
          .openapi({
            description: 'The IP address of the consumer. It could be either IPv4 or IPv6.',
          }),
      ).exactOptional(),
      consumer_user_agent: z
        .string()
        .regex(/^.*$/)
        .min(1)
        .max(256)
        .exactOptional()
        .openapi({
          description:
            "The payer's User Agent. For example, Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0).",
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'blik_experience_context',
    description:
      'Customizes the payer experience during the approval process for the BLIK payment.',
  })
  .openapi('BlikExperienceContext')

const BlikSeamlessSchema = z
  .object({
    auth_code: z
      .string()
      .regex(/^[0-9]{6}$/)
      .length(6)
      .openapi({ description: 'The 6-digit code used to authenticate a consumer within BLIK.' }),
  })
  .openapi({
    title: 'blik_level_0',
    description: 'Information used to pay using BLIK level_0 flow.',
    required: ['auth_code'],
  })
  .openapi('BlikSeamless')

const BlikOneClickSchema = z
  .object({
    auth_code: z
      .string()
      .regex(/^[0-9]{6}$/)
      .length(6)
      .exactOptional()
      .openapi({ description: 'The 6-digit code used to authenticate a consumer within BLIK.' }),
    consumer_reference: z
      .string()
      .regex(/^[ -~]{3,64}$/)
      .min(3)
      .max(64)
      .openapi({
        description:
          'The merchant generated, unique reference serving as a primary identifier for accounts connected between Blik and a merchant.',
      }),
    alias_label: z
      .string()
      .regex(/^[ -~]{8,35}$/)
      .min(8)
      .max(35)
      .exactOptional()
      .openapi({
        description:
          'A bank defined identifier used as a display name to allow the payer to differentiate between multiple registered bank accounts.',
      }),
    alias_key: z
      .string()
      .regex(/^[0-9]+$/)
      .min(1)
      .max(19)
      .exactOptional()
      .openapi({
        description:
          'A Blik-defined identifier for a specific Blik-enabled bank account that is associated with a given merchant. Used only in conjunction with a Consumer Reference.',
      }),
  })
  .openapi({
    title: 'blik_one_click',
    description: 'Information used to pay using BLIK one-click flow.',
    required: ['consumer_reference'],
  })
  .openapi('BlikOneClick')

const BlikRequestSchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ),
    email: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address of the account holder associated with this payment method.',
        }),
    ).exactOptional(),
    experience_context: BlikExperienceContextSchema.and(
      z
        .any()
        .openapi({
          description:
            'Customizes the payer experience during the approval process for the payment.',
        }),
    ).exactOptional(),
    level_0: BlikSeamlessSchema.and(
      z.any().openapi({ description: 'The level_0 integration flow object.' }),
    ).exactOptional(),
    one_click: BlikOneClickSchema.and(
      z.any().openapi({ description: 'The one-click integration flow object.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'blik_request',
    description: 'Information needed to pay using BLIK.',
    required: ['country_code', 'name'],
  })
  .openapi('BlikRequest')

const EpsRequestSchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ),
    experience_context: ExperienceContextBaseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Customizes the payer experience during the approval process for the payment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'eps_request',
    description: 'Information needed to pay using eps.',
    required: ['country_code', 'name'],
  })
  .openapi('EpsRequest')

const GiropayRequestSchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ),
    experience_context: ExperienceContextBaseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Customizes the payer experience during the approval process for the payment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'giropay_request',
    description: 'Information needed to pay using giropay.',
    required: ['country_code', 'name'],
  })
  .openapi('GiropayRequest')

const BicSchema = z
  .string()
  .regex(/^[A-Z-a-z0-9]{4}[A-Z-a-z]{2}[A-Z-a-z0-9]{2}([A-Z-a-z0-9]{3})?$/)
  .min(8)
  .max(11)
  .openapi({
    title: 'BIC',
    description:
      'The business identification code (BIC). In payments systems, a BIC is used to identify a specific business, most commonly a bank.',
  })
  .openapi('Bic')

const IdealRequestSchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ),
    bic: BicSchema.and(
      z.any().openapi({ description: 'The bank identification code (BIC).' }),
    ).exactOptional(),
    experience_context: ExperienceContextBaseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Customizes the payer experience during the approval process for the payment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'ideal_request',
    description: 'Information needed to pay using iDEAL.',
    required: ['country_code', 'name'],
  })
  .openapi('IdealRequest')

const MybankRequestSchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ),
    experience_context: ExperienceContextBaseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Customizes the payer experience during the approval process for the payment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'mybank_request',
    description: 'Information needed to pay using MyBank.',
    required: ['country_code', 'name'],
  })
  .openapi('MybankRequest')

const P24RequestSchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ),
    email: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address of the account holder associated with this payment method.',
        }),
    ),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ),
    experience_context: ExperienceContextBaseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Customizes the payer experience during the approval process for the payment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'p24_request',
    description: 'Information needed to pay using P24 (Przelewy24).',
    required: ['country_code', 'email', 'name'],
  })
  .openapi('P24Request')

const SofortRequestSchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ),
    experience_context: ExperienceContextBaseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Customizes the payer experience during the approval process for the payment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'sofort_request',
    description: 'Information needed to pay using Sofort.',
    required: ['country_code', 'name'],
  })
  .openapi('SofortRequest')

const TrustlyRequestSchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ),
    email: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address of the account holder associated with this payment method.',
        }),
    ),
    experience_context: ExperienceContextBaseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Customizes the payer experience during the approval process for the payment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'trustly_request',
    description: 'Information needed to pay using Trustly.',
    required: ['country_code', 'email', 'name'],
  })
  .openapi('TrustlyRequest')

const ApplePayPaymentDataSchema = z
  .object({
    cryptogram: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'Online payment cryptogram, as defined by 3D Secure. The pattern is defined by an external party and supports Unicode.',
      }),
    eci_indicator: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({
        description:
          'ECI indicator, as defined by 3- Secure. The pattern is defined by an external party and supports Unicode.',
      }),
    emv_data: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'Encoded Apple Pay EMV Payment Structure used for payments in China. The pattern is defined by an external party and supports Unicode.',
      }),
    pin: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'Bank Key encrypted Apple Pay PIN. The pattern is defined by an external party and supports Unicode.',
      }),
  })
  .openapi({
    title: 'apple_pay_payment_data',
    description:
      'Information about the decrypted apple pay payment data for the token like cryptogram, eci indicator.',
    required: [],
  })
  .openapi('ApplePayPaymentData')

const ApplePayDecryptedTokenDataSchema = z
  .object({
    transaction_amount: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The transaction amount for the payment that the payer has approved on apple platform.',
        }),
    ).exactOptional(),
    tokenized_card: CardSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'id')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['id'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'security_code')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['security_code'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'last_digits')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['last_digits'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'authentication_results')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['authentication_results'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'attributes')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['attributes'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({ description: 'Apple Pay tokenized credit card used to pay.' }),
    ),
    device_manufacturer_id: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'Apple Pay Hex-encoded device manufacturer identifier. The pattern is defined by an external party and supports Unicode.',
      }),
    payment_data_type: z
      .enum(['3DSECURE', 'EMV'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the type of payment data passed, in case of Non China the payment data is 3DSECURE and for China it is EMV.',
      }),
    payment_data: ApplePayPaymentDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Apple Pay payment data object which contains the cryptogram, eci_indicator and other data.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'apple_pay_decrypted_token_data',
    description: 'Information about the Payment data obtained by decrypting Apple Pay token.',
    required: ['tokenized_card'],
  })
  .openapi('ApplePayDecryptedTokenData')

const ApplePayAttributesSchema = z
  .object({
    customer: CustomerSchema.exactOptional(),
    vault: V3VaultInstructionBaseSchema.exactOptional(),
  })
  .openapi({
    title: 'apple_pay_attributes',
    description: 'Additional attributes associated with apple pay.',
    required: [],
  })
  .openapi('ApplePayAttributes')

const ApplePayExperienceContextSchema = z
  .object({
    return_url: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL where the customer is redirected after the customer approves the payment.',
        }),
    ),
    cancel_url: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL where the customer is redirected after the customer cancels the payment.',
        }),
    ),
  })
  .openapi({
    title: 'apple_pay_experience_context',
    description: 'Customizes the payer experience during the approval process for the payment.',
    required: ['cancel_url', 'return_url'],
  })
  .openapi('ApplePayExperienceContext')

const ApplePayRequestSchema = z
  .object({
    id: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(250)
      .exactOptional()
      .openapi({
        description:
          'ApplePay transaction identifier, this will be the unique identifier for this transaction provided by Apple. The pattern is defined by an external party and supports Unicode.',
      }),
    name: FullNameSchema.and(
      z.any().openapi({ description: 'Name on the account holder associated with apple pay.' }),
    ).exactOptional(),
    email_address: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'The email address of the account holder associated with apple pay.',
        }),
    ).exactOptional(),
    phone_number: PhoneNumberWithoutCountryCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). Supports only the `national_number` property.',
        }),
    ).exactOptional(),
    decrypted_token: ApplePayDecryptedTokenDataSchema.and(
      z.any().openapi({ description: 'The decrypted payload details for the apple pay token.' }),
    ).exactOptional(),
    stored_credential: CardStoredCredentialSchema.exactOptional(),
    vault_id: VaultIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The PayPal-generated ID for the saved apple pay payment_source. This ID should be stored on the merchant's server so the saved payment source can be used for future transactions.",
        }),
    ).exactOptional(),
    attributes: ApplePayAttributesSchema.exactOptional(),
    experience_context: ApplePayExperienceContextSchema.exactOptional(),
  })
  .openapi({
    title: 'apple_pay_request',
    description: 'Information needed to pay using ApplePay.',
    required: [],
  })
  .openapi('ApplePayRequest')

const PhoneWithNationalRequiredAndCountryCodeSchema = z
  .object({
    country_code: z
      .string()
      .regex(/^[0-9]{1,3}?$/)
      .min(1)
      .max(3)
      .exactOptional()
      .openapi({
        title: 'country_calling_code',
        description:
          'The country calling code (CC), in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the CC and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).',
      }),
    national_number: z
      .string()
      .regex(/^[0-9]{1,14}?$/)
      .min(1)
      .max(14)
      .openapi({
        description:
          'The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).',
      }),
  })
  .openapi({
    title: 'Phone Number Schema with Required National Number and Optional Country Code',
    description:
      'A structured representation of a phone number conforming to the international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en),requiring the national_number field and optionally supporting the country_code.',
    required: ['national_number'],
  })
  .openapi('PhoneWithNationalRequiredAndCountryCode')

const GooglePayCardSchema = z
  .object({
    name: z
      .string()
      .regex(/^.{1,300}$/)
      .min(1)
      .max(300)
      .exactOptional()
      .openapi({ description: "The card holder's name as it appears on the card." }),
    number: z
      .string()
      .regex(/^[0-9]{13,19}$/)
      .min(13)
      .max(19)
      .exactOptional()
      .openapi({ description: 'The primary account number (PAN) for the payment card.' }),
    expiry: DateYearMonthSchema.and(
      z
        .any()
        .openapi({
          description:
            'The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).',
        }),
    ).exactOptional(),
    last_digits: z
      .string()
      .regex(/^[0-9]{2,4}$/)
      .min(2)
      .max(4)
      .exactOptional()
      .openapi({ description: 'The last digits of the payment card.', readOnly: true }),
    type: CardTypeSchema.and(
      z.any().openapi({ description: 'The payment card type.' }),
    ).exactOptional(),
    brand: CardBrandSchema.and(
      z
        .any()
        .openapi({ description: 'The card brand or network. Typically used in the response.' }),
    ).exactOptional(),
    billing_address: AddressPortableSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_line_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_line_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_4')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_4'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_details')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_details'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({
          description:
            'The billing address for this card. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'google_pay_card',
    description:
      'The payment card used to fund a Google Pay payment. Can be a credit or debit card.',
    required: [],
  })
  .openapi('GooglePayCard')

const GooglePayDecryptedTokenDataSchema = z
  .object({
    message_id: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(250)
      .exactOptional()
      .openapi({
        description:
          'A unique ID that identifies the message in case it needs to be revoked or located at a later time.',
      }),
    message_expiration: z
      .string()
      .regex(/^\d{13}$/)
      .length(13)
      .exactOptional()
      .openapi({
        description:
          "Date and time at which the message expires as UTC milliseconds since epoch. Integrators should reject any message that's expired.",
      }),
    payment_method: z
      .literal('CARD')
      .openapi({
        description: 'The type of the payment credential. Currently, only CARD is supported.',
      }),
    card: GooglePayCardSchema.and(
      z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'number')) {
              ctx.addIssue({ code: 'custom' })
            }
            if (!Object.hasOwn(val, 'expiry')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ required: ['number', 'expiry'] }),
    ).openapi({ description: 'Google Pay tokenized credit card used to pay.' }),
    authentication_method: z
      .enum(['PAN_ONLY', 'CRYPTOGRAM_3DS'])
      .openapi({ description: 'Authentication Method which is used for the card transaction.' }),
    cryptogram: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'Base-64 cryptographic identifier used by card schemes to validate the token verification result. This is a conditionally required field if authentication_method is CRYPTOGRAM_3DS.',
      }),
    eci_indicator: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({
        description:
          'Electronic Commerce Indicator may not always be present. It is only returned for tokens on the Visa card network. This value is passed through in the payment authorization request.',
      }),
  })
  .openapi({
    title: 'google_pay_decrypted_token_data',
    description:
      'Details shared by Google for the merchant to be shared with PayPal. This is required to process the transaction using the Google Pay payment method.',
    required: ['authentication_method', 'card', 'payment_method'],
  })
  .openapi('GooglePayDecryptedTokenData')

const AssuranceDetailsSchema = z
  .object({
    account_verified: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If true, indicates that Cardholder possession validation has been performed on returned payment credential.',
      }),
    card_holder_authenticated: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If true, indicates that identification and verifications (ID&V) was performed on the returned payment credential.If false, the same risk-based authentication can be performed as you would for card transactions. This risk-based authentication can include, but not limited to, step-up with 3D Secure protocol if applicable.',
      }),
  })
  .openapi({
    title: 'assurance_details',
    description:
      'Information about cardholder possession validation and cardholder identification and verifications (ID&V).',
    required: [],
  })
  .openapi('AssuranceDetails')

const GooglePayExperienceContextSchema = z
  .object({
    return_url: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL where the customer is redirected after the customer approves the payment.',
        }),
    ),
    cancel_url: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL where the customer is redirected after the customer cancels the payment.',
        }),
    ),
  })
  .openapi({
    title: 'google_pay_experience_context',
    description: 'Customizes the payer experience during the approval process for the payment.',
    required: ['cancel_url', 'return_url'],
  })
  .openapi('GooglePayExperienceContext')

const GooglePayRequestSchema = z
  .object({
    name: FullNameSchema.and(
      z.any().openapi({ description: 'Name on the account holder associated with Google Pay.' }),
    ).exactOptional(),
    email_address: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'The email address of the account holder associated with Google Pay.',
        }),
    ).exactOptional(),
    phone_number: PhoneWithNationalRequiredAndCountryCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The phone number of account holder, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). Supports only the `national_number` property.',
        }),
    ).exactOptional(),
    card: GooglePayCardSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'number')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['number'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'expiry')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['expiry'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'last_digits')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['last_digits'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({ description: 'The payment card information.' }),
    ).exactOptional(),
    decrypted_token: GooglePayDecryptedTokenDataSchema.and(
      z.any().openapi({ description: 'The decrypted payload details for the Google Pay token.' }),
    ).exactOptional(),
    assurance_details: AssuranceDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about what validation has been performed on the returned payment credentials.',
        }),
    ).exactOptional(),
    experience_context: GooglePayExperienceContextSchema.exactOptional(),
  })
  .openapi({
    title: 'google_pay_request',
    description: 'Information needed to pay using Google Pay.',
    required: [],
  })
  .openapi('GooglePayRequest')

const VenmoWalletExperienceContextSchema = z
  .object({
    brand_name: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          'The business name of the merchant. The pattern is defined by an external party and supports Unicode.',
      }),
    shipping_preference: z
      .enum(['GET_FROM_FILE', 'NO_SHIPPING', 'SET_PROVIDED_ADDRESS'])
      .default('GET_FROM_FILE')
      .exactOptional()
      .openapi({ description: 'The location from which the shipping address is derived.' }),
    order_update_callback_config: CallbackConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            "Merchant provided Order Update callback configuration for Venmo Wallet.Venmo will call back merchant when the specified event occurs.we recommend merchants to pass both the shipping_options and shipping_address callback events. Not supported when `shipping.type` is specified or when 'application_context.shipping_preference' is set as 'NO_SHIPPING' or 'SET_PROVIDED_ADDRESS'.",
        }),
    ).exactOptional(),
    user_action: z
      .enum(['CONTINUE', 'PAY_NOW'])
      .default('CONTINUE')
      .exactOptional()
      .openapi({
        description:
          'Configures a <strong>Continue</strong> or <strong>Pay Now</strong> checkout flow.',
      }),
  })
  .openapi({
    title: 'venmo_wallet_experience_context',
    description:
      'Customizes the buyer experience during the approval process for payment with Venmo.<blockquote><strong>Note:</strong> Partners and Marketplaces might configure <code>shipping_preference</code> during partner account setup, which overrides the request values.</blockquote>',
    required: [],
  })
  .openapi('VenmoWalletExperienceContext')

const VenmoWalletCustomerSchema = CustomerSchema.and(z.object({}))
  .openapi({
    title: 'venmo_wallet_customer',
    description:
      'This object represents a merchant’s customer, allowing them to store contact details, and track all payments associated with the same customer.',
  })
  .openapi('VenmoWalletCustomer')

const VaultVenmoWalletBaseSchema = V3VaultInstructionBaseSchema.and(
  z
    .object({
      description: z
        .string()
        .regex(/^[a-zA-Z0-9_'\-., :;\!?"]*$/)
        .min(1)
        .max(128)
        .exactOptional()
        .openapi({
          description:
            'The description displayed to Venmo consumer on the approval flow for Venmo, as well as on the Venmo payment token management experience on Venmo.com.',
        }),
      usage_pattern: z
        .enum([
          'IMMEDIATE',
          'DEFERRED',
          'RECURRING_PREPAID',
          'RECURRING_POSTPAID',
          'THRESHOLD_PREPAID',
          'THRESHOLD_POSTPAID',
        ])
        .exactOptional()
        .openapi({
          title: 'Venmo Payment Token Usage Pattern',
          description: 'Expected business/pricing model for the billing agreement.',
        }),
      usage_type: z
        .enum(['MERCHANT', 'PLATFORM'])
        .exactOptional()
        .openapi({
          title: 'Venmo Payment Token Usage Type',
          description: 'The usage type associated with the Venmo payment token.',
        }),
      customer_type: z
        .enum(['CONSUMER', 'BUSINESS'])
        .default('CONSUMER')
        .exactOptional()
        .openapi({
          title: 'Venmo Payment Token Customer Type',
          description:
            'The customer type associated with the Venmo payment token. This is to indicate whether the customer acting on the merchant / platform is either a business or a consumer.',
        }),
      permit_multiple_payment_tokens: z
        .boolean()
        .default(false)
        .exactOptional()
        .openapi({
          description:
            'Create multiple payment tokens for the same payer, merchant/platform combination. Use this when the customer has not logged in at merchant/platform. The payment token thus generated, can then also be used to create the customer account at merchant/platform. Use this also when multiple payment tokens are required for the same payer, different customer at merchant/platform. This helps to identify customers distinctly even though they may share the same Venmo account.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'vault_Venmo_wallet_base',
    description:
      'Resource consolidating common request and response attirbutes for vaulting Venmo Wallet.',
    required: ['usage_type'],
  })
  .openapi('VaultVenmoWalletBase')

const VenmoWalletAttributesSchema = z
  .object({
    customer: VenmoWalletCustomerSchema.exactOptional(),
    vault: VaultVenmoWalletBaseSchema.and(
      z
        .any()
        .openapi({
          description:
            'Attributes used to provide the instructions during vaulting of the Venmo Wallet.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'venmo_wallet_attributes',
    description: 'Additional attributes associated with the use of this Venmo Wallet.',
    required: [],
  })
  .openapi('VenmoWalletAttributes')

const VenmoWalletRequestSchema = z
  .object({
    vault_id: VaultIdSchema.and(
      z
        .any()
        .openapi({
          description:
            "The PayPal-generated ID for the saved Venmo wallet payment_source. This ID should be stored on the merchant's server so the saved payment source can be used for future transactions.",
        }),
    ).exactOptional(),
    email_address: EmailSchema.and(
      z.any().openapi({ description: 'The email address of the payer.' }),
    ).exactOptional(),
    experience_context: VenmoWalletExperienceContextSchema.exactOptional(),
    attributes: VenmoWalletAttributesSchema.and(
      z
        .any()
        .openapi({ description: 'Additional attributes associated with the use of this wallet.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'venmo_wallet_request',
    description: 'Information needed to pay using Venmo.',
    required: [],
  })
  .openapi('VenmoWalletRequest')

const CryptoAccountHolderNameSchema = z
  .object({
    prefix: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(140)
      .exactOptional()
      .openapi({ description: "The prefix, or title, to the account holder's name." }),
    given_name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(140)
      .openapi({
        description:
          "When the account holder is a person, the account holder's given, or first, name.",
      }),
    surname: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(140)
      .openapi({
        description:
          "When the account holder is a person, the account holder's surname or family name. Also known as the last name. Required when the account holder is a person. Use also to store multiple surnames including the matronymic, or mother's, surname.",
      }),
    middle_name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(140)
      .exactOptional()
      .openapi({
        description:
          "When the account holder is a person, the account holder's middle name. Use also to store multiple middle names including the patronymic, or father's, middle name.",
      }),
  })
  .openapi({
    title: 'crypto_account_holder_name',
    description: 'Crypto account holder name.',
    required: ['given_name', 'surname'],
  })
  .openapi('CryptoAccountHolderName')

const ExperienceContextBaseWithoutBrandShippingSchema = z
  .object({
    locale: LanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The BCP 47-formatted locale of pages that the PayPal payment experience shows. PayPal supports a five-character code. For example, `da-DK`, `he-IL`, `id-ID`, `ja-JP`, `no-NO`, `pt-BR`, `ru-RU`, `sv-SE`, `th-TH`, `zh-CN`, `zh-HK`, or `zh-TW`.',
        }),
    ).exactOptional(),
    return_url: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL where the customer is redirected after the customer approves the payment.',
        }),
    ),
    cancel_url: UrlSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL where the customer is redirected after the customer cancels the payment.',
        }),
    ),
  })
  .openapi({
    title: 'experience_context_base',
    description: 'Customizes the payer experience during the approval process for the payment.',
    required: ['cancel_url', 'return_url'],
  })
  .openapi('ExperienceContextBaseWithoutBrandShipping')

const CryptoRequestSchema = z
  .object({
    country_code: CountryCodeSchema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 purchase country code.' }),
    ),
    name: CryptoAccountHolderNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the account holder associated with Crypto wallet.' }),
    ),
    experience_context: ExperienceContextBaseWithoutBrandShippingSchema.and(
      z
        .any()
        .openapi({
          description:
            'Customizes the payer experience during the approval process for the payment.',
        }),
    ),
  })
  .openapi({
    title: 'crypto_request',
    description: 'Crypto payment used to fund the transaction.',
    required: ['country_code', 'experience_context', 'name'],
  })
  .openapi('CryptoRequest')

const PaymentSourceSchema = z
  .object({
    card: CardRequestSchema.exactOptional(),
    token: TokenSchema.exactOptional(),
    paypal: PaypalWalletSchema.and(
      z
        .any()
        .openapi({
          description:
            'Indicates that PayPal Wallet is the payment source. Main use of this selection is to provide additional instructions associated with this choice like vaulting.',
        }),
    ).exactOptional(),
    bancontact: BancontactRequestSchema.and(
      z
        .any()
        .openapi({
          title: 'bancontact',
          description:
            'Bancontact is the most popular online payment in Belgium. [More Details](https://www.bancontact.com/).',
        }),
    ).exactOptional(),
    blik: BlikRequestSchema.and(
      z
        .any()
        .openapi({
          title: 'blik',
          description:
            'BLIK is a mobile payment system, created by Polish Payment Standard in order to allow millions of users to pay in shops, payout cash in ATMs and make online purchases and payments. [More Details](https://blikmobile.pl/).',
        }),
    ).exactOptional(),
    eps: EpsRequestSchema.and(
      z
        .any()
        .openapi({
          title: 'eps',
          description:
            'The eps transfer is an online payment method developed by many Austrian banks. [More Details](https://www.eps-ueberweisung.at/).',
        }),
    ).exactOptional(),
    giropay: GiropayRequestSchema.and(
      z
        .any()
        .openapi({
          title: 'giropay',
          description:
            'Giropay is an Internet payment System in Germany, based on online banking. [More Details](https://giropay.de/).',
        }),
    ).exactOptional(),
    ideal: IdealRequestSchema.and(
      z
        .any()
        .openapi({
          title: 'ideal',
          description:
            'The Dutch payment method iDEAL is an online payment method that enables consumers to pay online through their own bank. [More Details](https://www.ideal.nl/).',
        }),
    ).exactOptional(),
    mybank: MybankRequestSchema.and(
      z
        .any()
        .openapi({
          title: 'mybank',
          description:
            'MyBank is an e-authorisation solution which enables safe digital payments and identity authentication through a consumer’s own online banking portal or mobile application. [More Details](https://www.mybank.eu/).',
        }),
    ).exactOptional(),
    p24: P24RequestSchema.and(
      z
        .any()
        .openapi({
          title: 'p24',
          description:
            'P24 (Przelewy24) is a secure and fast online bank transfer service linked to all the major banks in Poland. [More Details](https://www.przelewy24.pl/).',
        }),
    ).exactOptional(),
    sofort: SofortRequestSchema.and(
      z
        .any()
        .openapi({
          title: 'sofort',
          description:
            'SOFORT Banking is a real-time bank transfer payment method that buyers use to transfer funds directly to merchants from their bank accounts. [More Details](https://www.klarna.com/sofort/).',
        }),
    ).exactOptional(),
    trustly: TrustlyRequestSchema.and(
      z
        .any()
        .openapi({
          title: 'trustly',
          description:
            'Trustly is a payment method that allows customers to shop and pay from their bank account. [More Details](https://www.trustly.net/).',
        }),
    ).exactOptional(),
    apple_pay: ApplePayRequestSchema.and(
      z
        .any()
        .openapi({
          title: 'applepay',
          description:
            'ApplePay payment source, allows buyer to pay using ApplePay, both on Web as well as on Native.',
        }),
    ).exactOptional(),
    google_pay: GooglePayRequestSchema.and(
      z
        .any()
        .openapi({
          title: 'googlepay',
          description: 'Google Pay payment source, allows buyer to pay using Google Pay.',
        }),
    ).exactOptional(),
    venmo: VenmoWalletRequestSchema.and(
      z
        .any()
        .openapi({
          title: 'venmo',
          description:
            'Information needed to indicate that Venmo is being used to fund the payment.',
        }),
    ).exactOptional(),
    crypto: CryptoRequestSchema.and(
      z
        .any()
        .openapi({
          title: 'crypto',
          description: 'Indicates that Crypto Wallet is the payment source.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'payment_source', description: 'The payment source definition.', required: [] })
  .openapi('PaymentSource')

const PaymentMethodSchema = z
  .object({
    payee_preferred: PayeePaymentMethodPreferenceSchema.exactOptional(),
    standard_entry_class_code: z
      .enum(['TEL', 'WEB', 'CCD', 'PPD'])
      .default('WEB')
      .exactOptional()
      .openapi({
        description:
          'NACHA (the regulatory body governing the ACH network) requires that API callers (merchants, partners) obtain the consumer’s explicit authorization before initiating a transaction. To stay compliant, you’ll need to make sure that you retain a compliant authorization for each transaction that you originate to the ACH Network using this API. ACH transactions are categorized (using SEC codes) by how you capture authorization from the Receiver (the person whose bank account is being debited or credited). PayPal supports the following SEC codes.',
      }),
  })
  .openapi({
    title: 'payment_method',
    description: 'The customer and merchant payment preferences.',
    required: [],
  })
  .openapi('PaymentMethod')

const StoredPaymentSourceSchema = z
  .object({
    payment_initiator: PaymentInitiatorSchema,
    payment_type: StoredPaymentSourcePaymentTypeSchema,
    usage: StoredPaymentSourceUsageTypeSchema.exactOptional(),
    previous_network_transaction_reference: NetworkTransactionReferenceSchema.exactOptional(),
  })
  .openapi({
    title: 'stored_payment_source',
    description:
      'Provides additional details to process a payment using a `payment_source` that has been stored or is intended to be stored (also referred to as stored_credential or card-on-file).<br/>Parameter compatibility:<br/><ul><li>`payment_type=ONE_TIME` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`usage=FIRST` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`previous_transaction_reference` or `previous_network_transaction_reference` is compatible only with `payment_initiator=MERCHANT`.</li><li>Only one of the parameters - `previous_transaction_reference` and `previous_network_transaction_reference` - can be present in the request.</li></ul>',
    required: ['payment_initiator', 'payment_type'],
  })
  .openapi('StoredPaymentSource')

const OrderApplicationContextSchema = z
  .object({
    brand_name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          'DEPRECATED. The label that overrides the business name in the PayPal account on the PayPal site. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.brand_name`). Please specify this field in the `experience_context` object instead of the `application_context` object.',
      }),
    locale: LanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            'DEPRECATED. The BCP 47-formatted locale of pages that the PayPal payment experience shows. PayPal supports a five-character code. For example, `da-DK`, `he-IL`, `id-ID`, `ja-JP`, `no-NO`, `pt-BR`, `ru-RU`, `sv-SE`, `th-TH`, `zh-CN`, `zh-HK`, or `zh-TW`.  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.locale`). Please specify this field in the `experience_context` object instead of the `application_context` object.',
        }),
    ).exactOptional(),
    landing_page: z
      .enum(['LOGIN', 'BILLING', 'NO_PREFERENCE'])
      .default('NO_PREFERENCE')
      .exactOptional()
      .openapi({
        title: 'Order Application Context Landing Page',
        description:
          'DEPRECATED. DEPRECATED. The type of landing page to show on the PayPal site for customer checkout.  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.landing_page`). Please specify this field in the `experience_context` object instead of the `application_context` object. <b>DEPRECATED</b><br><table><tr><th>See</th><th>Since Version</th></tr><tr><td>payment_source.paypal.experience_context.landing_page</td><td>2.9</td></tr></table>',
        deprecated: true,
      }),
    shipping_preference: z
      .enum(['GET_FROM_FILE', 'NO_SHIPPING', 'SET_PROVIDED_ADDRESS'])
      .default('GET_FROM_FILE')
      .exactOptional()
      .openapi({
        title: 'Order Application Context Shipping Preference',
        description:
          'DEPRECATED. DEPRECATED. The shipping preference:<ul><li>Displays the shipping address to the customer.</li><li>Enables the customer to choose an address on the PayPal site.</li><li>Restricts the customer from changing the address during the payment-approval process.</li></ul>.  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.shipping_preference`). Please specify this field in the `experience_context` object instead of the `application_context` object. <b>DEPRECATED</b><br><table><tr><th>See</th><th>Since Version</th></tr><tr><td>payment_source.paypal.experience_context.shipping_preference</td><td>2.9</td></tr></table>',
        deprecated: true,
      }),
    user_action: z
      .enum(['CONTINUE', 'PAY_NOW'])
      .default('CONTINUE')
      .exactOptional()
      .openapi({
        description:
          'DEPRECATED. Configures a <strong>Continue</strong> or <strong>Pay Now</strong> checkout flow.  The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.user_action`). Please specify this field in the `experience_context` object instead of the `application_context` object.',
      }),
    payment_method: PaymentMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            'DEPRECATED. The customer and merchant payment preferences. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.payment_method_selected`). Please specify this field in the `experience_context` object instead of the `application_context` object..',
        }),
    ).exactOptional(),
    return_url: z
      .url()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'DEPRECATED. The URL where the customer is redirected after the customer approves the payment. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.return_url`). Please specify this field in the `experience_context` object instead of the `application_context` object.',
      }),
    cancel_url: z
      .url()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'DEPRECATED. The URL where the customer is redirected after the customer cancels the payment. The fields in `application_context` are now available in the `experience_context` object under the `payment_source` which supports them (eg. `payment_source.paypal.experience_context.cancel_url`). Please specify this field in the `experience_context` object instead of the `application_context` object.',
      }),
    stored_payment_source: StoredPaymentSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'DEPRECATED. Provides additional details to process a payment using a `payment_source` that has been stored or is intended to be stored (also referred to as stored_credential or card-on-file).<br/>Parameter compatibility:<br/><ul><li>`payment_type=ONE_TIME` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`usage=FIRST` is compatible only with `payment_initiator=CUSTOMER`.</li><li>`previous_transaction_reference` or `previous_network_transaction_reference` is compatible only with `payment_initiator=MERCHANT`.</li><li>Only one of the parameters - `previous_transaction_reference` and `previous_network_transaction_reference` - can be present in the request.</li></ul>.  The fields in `stored_payment_source` are now available in the `stored_credential` object under the `payment_source` which supports them (eg. `payment_source.card.stored_credential.payment_initiator`). Please specify this field in the `payment_source` object instead of the `application_context` object. <b>DEPRECATED</b><br><table><tr><th>See</th><th>Since Version</th></tr><tr><td>payment_source.card.stored_credential</td><td>2.9</td></tr></table>',
          deprecated: true,
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'application_context',
    description:
      'Customizes the payer experience during the approval process for the payment with PayPal.<blockquote><strong>Note:</strong> Partners and Marketplaces might configure <code>brand_name</code> and <code>shipping_preference</code> during partner account setup, which overrides the request values.</blockquote>',
    required: [],
  })
  .openapi('OrderApplicationContext')

const OrderRequestSchema = z
  .object({
    intent: CheckoutPaymentIntentSchema,
    payer: PayerSchema.and(
      z
        .any()
        .openapi({
          description:
            'DEPRECATED. The customer is also known as the payer. The Payer object was intended to only be used with the `payment_source.paypal` object. In order to make this design more clear, the details in the `payer` object are now available under `payment_source.paypal`. Please use `payment_source.paypal`. <b>DEPRECATED</b><br><table><tr><th>See</th><th>Since Version</th></tr><tr><td>payment_source.paypal</td><td>2.9</td></tr></table>',
          deprecated: true,
        }),
    ).exactOptional(),
    purchase_units: z
      .array(
        PurchaseUnitRequestSchema.and(
          z
            .any()
            .openapi({
              title: 'purchase_unit',
              description:
                'The purchase unit. Establishes a contract between a payer and the payee.',
            }),
        ),
      )
      .min(1)
      .max(10)
      .openapi({
        description:
          'An array of purchase units. Each purchase unit establishes a contract between a payer and the payee. Each purchase unit represents either a full or partial order that the payer intends to purchase from the payee.',
      }),
    payment_source: PaymentSourceSchema.exactOptional(),
    application_context: OrderApplicationContextSchema.and(
      z
        .any()
        .openapi({
          title: 'application_context',
          description:
            'Customize the payer experience during the approval process for the payment with PayPal.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'Order Request',
    description: 'The order request details.',
    required: ['intent', 'purchase_units'],
  })
  .openapi('OrderRequest')

const LinkSchemaSchema = z
  .object({
    additionalItems: z
      .object({})
      .exactOptional()
      .openapi({ title: 'additional_items', description: 'Any additional items.' }),
    dependencies: z
      .object({})
      .exactOptional()
      .openapi({ title: 'Dependencies', description: 'The dependencies.' }),
    items: z.object({}).exactOptional().openapi({ title: 'Items', description: 'An item.' }),
    definitions: z
      .object({})
      .exactOptional()
      .openapi({ title: 'Definitions', description: 'Definitions.' }),
    patternProperties: z
      .object({})
      .exactOptional()
      .openapi({ title: 'pattern_properties', description: 'The pattern properties.' }),
    properties: z
      .object({})
      .exactOptional()
      .openapi({ title: 'Properties', description: 'The properties.' }),
    allOf: z
      .array(
        z
          .object({})
          .openapi({
            title: 'all_of_item',
            description: 'A sub-schema against which the data must validate.',
          }),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        title: 'all_of',
        description: 'An array of sub-schemas. The data must validate against all sub-schemas.',
      }),
    anyOf: z
      .array(
        z
          .object({})
          .openapi({
            title: 'any_of_item',
            description: 'A sub-schema against which the data must validate.',
          }),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        title: 'any_of',
        description:
          'An array of sub-schemas. The data must validate against one or more sub-schemas.',
      }),
    oneOf: z
      .array(
        z
          .object({})
          .openapi({
            title: 'one_of_item',
            description: 'A sub-schema against which the data must validate.',
          }),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        title: 'one_of',
        description: 'An array of sub-schemas. The data must validate against one sub-schema.',
      }),
    not: z.object({}).exactOptional().openapi({ title: 'Not', description: 'Not.' }),
    links: z
      .array(z.object({}).openapi({ title: 'link', description: 'A link.', readOnly: true }))
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({ description: 'An array of links.', readOnly: true }),
    fragmentResolution: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ title: 'fragment_resolution', description: 'The fragment resolution.' }),
    media: z
      .object({
        type: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(2147483647)
          .exactOptional()
          .openapi({
            description:
              'The media type. See [Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types](https://tools.ietf.org/html/rfc2046).',
          }),
        binaryEncoding: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(2147483647)
          .exactOptional()
          .openapi({
            title: 'binary_encoding',
            description:
              'The content-encoding scheme. See [Multipurpose Internet Mail Extensions (MIME) Part One: Format of Internet Message Bodies](https://tools.ietf.org/html/rfc2045).',
          }),
      })
      .exactOptional()
      .openapi({
        title: 'Media',
        description: 'The media type and context-encoding scheme.',
        required: [],
      }),
    pathStart: z
      .url()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        title: 'path_start',
        description: "To apply this schema to the instances' URIs, start the URIs with this value.",
      }),
  })
  .openapi({ title: 'Link Schema', description: 'The request data or link target.', required: [] })
  .openapi('LinkSchema')

const LinkDescriptionSchema = z
  .object({
    href: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .openapi({
        description:
          'The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.',
      }),
    rel: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .openapi({
        description:
          'The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).',
      }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'CONNECT', 'OPTIONS', 'PATCH'])
      .exactOptional()
      .openapi({ description: 'The HTTP method required to make the related call.' }),
    title: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: 'The link title.' }),
    mediaType: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        title: 'media_type',
        description:
          'The media type, as defined by [RFC 2046](https://www.ietf.org/rfc/rfc2046.txt). Describes the link target.',
      }),
    encType: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .default('application/json')
      .exactOptional()
      .openapi({
        title: 'enc_type',
        description: 'The media type in which to submit the request data.',
      }),
    schema: LinkSchemaSchema.and(
      z.any().openapi({ description: 'The schema that describes the request data.' }),
    ).exactOptional(),
    targetSchema: LinkSchemaSchema.and(
      z
        .any()
        .openapi({
          title: 'target_schema',
          description: 'The schema that describes the link target.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'Link Description',
    description:
      'The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.',
    required: ['href', 'rel'],
  })
  .openapi('LinkDescription')

const ErrorDetailsSchema = z
  .object({
    field: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          "The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.",
      }),
    value: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: 'The value of the field that caused the error.' }),
    location: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .default('body')
      .exactOptional()
      .openapi({
        description:
          'The location of the field that caused the error. Value is `body`, `path`, or `query`.',
      }),
    issue: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .openapi({ description: 'The unique, fine-grained application-level error code.' }),
    links: z
      .array(
        LinkDescriptionSchema.and(z.any().openapi({ title: 'link_description', readOnly: true })),
      )
      .min(1)
      .max(4)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links) that are either relevant to the issue by providing additional information or offering potential resolutions.',
        readOnly: true,
      }),
    description: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The human-readable description for an issue. The description can change over the lifetime of an API, so clients must not depend on this value.',
      }),
  })
  .openapi({
    title: 'Error Details',
    description: 'The error details. Required for client-side `4XX` errors.',
    required: ['issue'],
  })
  .openapi('ErrorDetails')

const ErrorSchema = z
  .object({
    name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .openapi({ description: 'The human-readable, unique name of the error.' }),
    message: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .openapi({ description: 'The message that describes the error.' }),
    debug_id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    details: z
      .array(ErrorDetailsSchema.and(z.any().openapi({ title: 'error_details' })))
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({ description: 'An array of additional details about the error.' }),
    links: z
      .array(
        LinkDescriptionSchema.and(z.any().openapi({ title: 'link_description', readOnly: true })),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links).',
        readOnly: true,
      }),
  })
  .openapi({
    title: 'Error',
    description: 'The error details.',
    required: ['debug_id', 'message', 'name'],
  })
  .openapi('Error')

const ActivityTimestampsSchema = z
  .object({
    create_time: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the transaction occurred, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
          readOnly: true,
        }),
    ).exactOptional(),
    update_time: DateTimeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time when the transaction was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
          readOnly: true,
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'activity_timestamps',
    description:
      'The date and time stamps that are common to authorized payment, captured payment, and refund transactions.',
    required: [],
  })
  .openapi('ActivityTimestamps')

const AuthenticationResponseSchema: z.ZodType<AuthenticationResponseType> = z
  .lazy(() =>
    z
      .object({
        liability_shift: LiabilityShiftSchema.exactOptional(),
        three_d_secure: ThreeDSecureAuthenticationResponseSchema.exactOptional(),
      })
      .openapi({
        title: 'authentication_response',
        description: 'Results of Authentication such as 3D Secure.',
        required: [],
      }),
  )
  .openapi('AuthenticationResponse')

const VaultResponseSchema = z
  .object({
    id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'The PayPal-generated ID for the saved payment source.' }),
    status: z
      .enum(['VAULTED', 'CREATED', 'APPROVED'])
      .exactOptional()
      .openapi({ title: 'Vault Status', description: 'The vault status.' }),
    customer: CustomerSchema.and(
      z.any().refine(
        (val) =>
          !z
            .union([
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'email_address')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['email_address'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'phone')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['phone'] }),
            ])
            .safeParse(val).success,
      ),
    ).exactOptional(),
    links: z
      .array(
        LinkDescriptionSchema.and(
          z
            .any()
            .openapi({
              title: 'link_description',
              description:
                'A request-related [HATEOAS link](/docs/api/reference/api-responses/#hateoas-links).',
            }),
        ),
      )
      .min(1)
      .max(10)
      .exactOptional()
      .openapi({ description: 'An array of request-related HATEOAS links.', readOnly: true }),
  })
  .openapi({
    title: 'vault_response',
    description: 'The details about a saved payment source.',
    required: [],
  })
  .openapi('VaultResponse')

const CardVaultResponseSchema = VaultResponseSchema.and(
  z.any().refine(
    (val) =>
      !z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'customer')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ required: ['customer'] })
        .safeParse(val).success,
  ),
)
  .and(z.object({ customer: CardCustomerSchema.exactOptional() }).openapi({ required: [] }))
  .openapi({
    title: 'card_vault_response',
    description: 'The details about a saved Card payment source.',
  })
  .openapi('CardVaultResponse')

const CardAttributesResponseSchema = z
  .object({ vault: CardVaultResponseSchema.exactOptional() })
  .openapi({
    title: 'card_attributes_response',
    description: 'Additional attributes associated with the use of this card.',
    required: [],
  })
  .openapi('CardAttributesResponse')

const CardFromRequestSchema = z
  .object({
    expiry: DateYearMonthSchema.and(
      z
        .any()
        .openapi({
          description:
            'The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).',
        }),
    ).exactOptional(),
    last_digits: z
      .string()
      .regex(/^.*[0-9]{2,}.*$/)
      .min(2)
      .max(4)
      .exactOptional()
      .openapi({ description: 'The last digits of the payment card.', readOnly: true }),
  })
  .openapi({
    title: 'card_from_request',
    description: 'Representation of card details as received in the request.',
    required: [],
  })
  .openapi('CardFromRequest')

const BinDetailsSchema = z
  .object({
    bin: z
      .string()
      .regex(/^[0-9]+$/)
      .min(1)
      .max(25)
      .exactOptional()
      .openapi({
        description:
          'The Bank Identification Number (BIN) signifies the number that is being used to identify the granular level details (except the PII information) of the card.',
      }),
    issuing_bank: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({ description: 'The issuer of the card instrument.' }),
    bin_country_code: CountryCode_2Schema.and(
      z
        .any()
        .openapi({
          description:
            'The [two-character ISO-3166-1 country code](/docs/integration/direct/rest/country-codes/) of the bank.',
        }),
    ).exactOptional(),
    products: z
      .array(
        z
          .string()
          .regex(/^[\S\s]*$/)
          .min(1)
          .max(255)
          .openapi({
            title: 'products',
            description: 'This value provides the category of the BIN.',
          }),
      )
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({
        description:
          'The type of card product assigned to the BIN by the issuer. These values are defined by the issuer and may change over time. Some examples include: PREPAID_GIFT, CONSUMER, CORPORATE.',
      }),
  })
  .openapi({
    title: 'bin_details',
    description: 'Bank Identification Number (BIN) details used to fund a payment.',
    required: [],
  })
  .openapi('BinDetails')

const CardResponseSchema = z
  .object({
    name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(2)
      .max(300)
      .exactOptional()
      .openapi({ description: "The card holder's name as it appears on the card." }),
    last_digits: z
      .string()
      .regex(/^.*[0-9]{2,}.*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: 'The last digits of the payment card.', readOnly: true }),
    brand: CardBrandSchema.and(
      z
        .any()
        .openapi({
          description: 'The card brand or network. Typically used in the response.',
          readOnly: true,
        }),
    ).exactOptional(),
    available_networks: z
      .array(CardBrandSchema.and(z.any().openapi({ title: 'card_brand' })))
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({
        description: 'Array of brands or networks associated with the card.',
        readOnly: true,
      }),
    type: CardTypeSchema.and(
      z.any().openapi({ description: 'The payment card type.' }),
    ).exactOptional(),
    authentication_result: AuthenticationResponseSchema.exactOptional(),
    attributes: CardAttributesResponseSchema.exactOptional(),
    from_request: CardFromRequestSchema.exactOptional(),
    expiry: DateYearMonthSchema.and(
      z
        .any()
        .openapi({
          description:
            'The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).',
        }),
    ).exactOptional(),
    bin_details: BinDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Bank Identification Number (BIN) details used to fund a payment.',
        }),
    ).exactOptional(),
    stored_credential: CardStoredCredentialSchema.exactOptional(),
  })
  .openapi({
    title: 'card_response',
    description: 'The payment card to use to fund a payment. Card can be a credit or debit card.',
    required: [],
  })
  .openapi('CardResponse')

const Phone_3Schema = z
  .object({
    national_number: z
      .string()
      .regex(/^[0-9]{1,14}?$/)
      .min(1)
      .max(14)
      .openapi({
        description:
          'The national number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). The combined length of the country calling code (CC) and the national number must not be greater than 15 digits. The national number consists of a national destination code (NDC) and subscriber number (SN).',
      }),
  })
  .openapi({
    title: 'Phone Number',
    description:
      'The phone number in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).',
    required: ['national_number'],
  })
  .openapi('Phone_3')

const PaypalWalletVaultResponseSchema = VaultResponseSchema.and(
  z.any().refine(
    (val) =>
      !z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'customer')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ required: ['customer'] })
        .safeParse(val).success,
  ),
)
  .and(z.object({ customer: PaypalWalletCustomerSchema.exactOptional() }).openapi({ required: [] }))
  .openapi({
    title: 'paypal_wallet_vault_response',
    description: 'The details about a saved PayPal Wallet payment source.',
  })
  .openapi('PaypalWalletVaultResponse')

const CobrandedCardSchema = z
  .object({
    labels: z
      .array(
        z
          .string()
          .regex(/^[\S\s]*$/)
          .min(1)
          .max(256)
          .openapi({ title: 'label', description: 'Label for the cobranded card.' }),
      )
      .min(1)
      .max(25)
      .exactOptional()
      .openapi({ description: 'Array of labels for the cobranded card.' }),
    payee: PayeeBaseSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                  if (!Object.hasOwn(val, 'client_id')) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .openapi({ required: ['client_id'] })
              .safeParse(val).success,
        )
        .openapi({ title: 'payee', description: 'Merchant associated with the purchase.' }),
    ).exactOptional(),
    amount: MoneySchema.and(
      z.any().openapi({ description: 'Amount that was charged to the cobranded card.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'cobranded_card',
    description: 'Details about the merchant cobranded card used for order purchase.',
    required: [],
  })
  .openapi('CobrandedCard')

const PaypalWalletAttributesResponseSchema = z
  .object({
    vault: PaypalWalletVaultResponseSchema.exactOptional(),
    cobranded_cards: z
      .array(CobrandedCardSchema.and(z.any().openapi({ title: 'cobranded_card' })))
      .min(0)
      .max(25)
      .exactOptional()
      .openapi({
        description:
          'An array of merchant cobranded cards used by buyer to complete an order. This array will be present if a merchant has onboarded their cobranded card with PayPal and provided corresponding label(s).',
      }),
  })
  .openapi({
    title: 'paypal_wallet_attributes_response',
    description: 'Additional attributes associated with the use of a PayPal Wallet.',
    required: [],
  })
  .openapi('PaypalWalletAttributesResponse')

const PaypalWalletResponseSchema = z
  .object({
    email_address: EmailSchema.and(
      z.any().openapi({ description: 'The email address of the PayPal account holder.' }),
    ).exactOptional(),
    account_id: AccountId_2Schema.and(
      z
        .any()
        .openapi({
          description: 'The PayPal-assigned ID for the PayPal account holder.',
          readOnly: true,
        }),
    ).exactOptional(),
    account_status: z
      .enum(['VERIFIED', 'UNVERIFIED'])
      .exactOptional()
      .openapi({
        description:
          'The account status indicates whether the buyer has verified the financial details associated with their PayPal account.',
        readOnly: true,
      }),
    name: NameSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'prefix')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['prefix'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'middle_name')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['middle_name'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'suffix')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['suffix'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'alternate_full_name')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['alternate_full_name'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'full_name')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['full_name'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({
          description:
            'The name of the PayPal account holder. Supports only the `given_name` and `surname` properties.',
        }),
    ).exactOptional(),
    phone_type: PhoneTypeSchema.exactOptional(),
    phone_number: Phone_3Schema.and(
      z
        .any()
        .openapi({
          description:
            'The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). Available only when you enable the **Contact Telephone Number** option in the <a href="https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-website-payments">**Profile & Settings**</a> for the merchant\'s PayPal account. Supports only the `national_number` property.',
        }),
    ).exactOptional(),
    birth_date: DateNoTimeSchema.and(
      z
        .any()
        .openapi({
          description: 'The birth date of the PayPal account holder in `YYYY-MM-DD` format.',
        }),
    ).exactOptional(),
    business_name: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(300)
      .exactOptional()
      .openapi({
        description:
          'The business name of the PayPal account holder (populated for business accounts only)',
      }),
    tax_info: TaxInfoSchema.and(
      z
        .any()
        .openapi({
          description:
            "The tax information of the PayPal account holder. Required only for Brazilian PayPal account holder's. Both `tax_id` and `tax_id_type` are required.",
        }),
    ).exactOptional(),
    address: AddressPortableSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_line_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_line_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_4')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_4'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_details')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_details'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({
          description:
            'The address of the PayPal account holder. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. Also referred to as the billing address of the customer.',
        }),
    ).exactOptional(),
    attributes: PaypalWalletAttributesResponseSchema.exactOptional(),
    stored_credential: PaypalWalletStoredCredentialSchema.exactOptional(),
    experience_status: z
      .enum(['NOT_STARTED', 'IN_PROGRESS', 'CANCELED', 'APPROVED'])
      .exactOptional()
      .openapi({
        description:
          "This field indicates the status of PayPal's Checkout experience throughout the order lifecycle. The values reflect the current stage of the checkout process.",
        readOnly: true,
      }),
  })
  .openapi({
    title: 'paypal_wallet_response',
    description: 'The PayPal Wallet response.',
    required: [],
  })
  .openapi('PaypalWalletResponse')

const ApplePayCardResponseSchema = CardResponseSchema.and(
  z.any().refine(
    (val) =>
      !z
        .union([
          z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'id')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['id'] }),
          z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'last_n_chars')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['last_n_chars'] }),
          z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'issuer')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['issuer'] }),
        ])
        .safeParse(val).success,
  ),
)
  .and(
    z
      .object({
        name: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(300)
          .exactOptional()
          .openapi({ description: "The card holder's name as it appears on the card." }),
        billing_address: AddressPortableSchema.and(
          z
            .any()
            .refine(
              (val) =>
                !z
                  .union([
                    z
                      .unknown()
                      .superRefine((val, ctx) => {
                        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                          if (!Object.hasOwn(val, 'address_line_3')) {
                            ctx.addIssue({ code: 'custom' })
                          }
                        }
                      })
                      .openapi({ required: ['address_line_3'] }),
                    z
                      .unknown()
                      .superRefine((val, ctx) => {
                        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                          if (!Object.hasOwn(val, 'admin_area_3')) {
                            ctx.addIssue({ code: 'custom' })
                          }
                        }
                      })
                      .openapi({ required: ['admin_area_3'] }),
                    z
                      .unknown()
                      .superRefine((val, ctx) => {
                        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                          if (!Object.hasOwn(val, 'admin_area_4')) {
                            ctx.addIssue({ code: 'custom' })
                          }
                        }
                      })
                      .openapi({ required: ['admin_area_4'] }),
                    z
                      .unknown()
                      .superRefine((val, ctx) => {
                        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                          if (!Object.hasOwn(val, 'address_details')) {
                            ctx.addIssue({ code: 'custom' })
                          }
                        }
                      })
                      .openapi({ required: ['address_details'] }),
                  ])
                  .safeParse(val).success,
            )
            .openapi({
              description:
                'The billing address for this card. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties.',
            }),
        ).exactOptional(),
        country_code: CountryCode_2Schema.and(
          z.any().openapi({ description: 'The country where the card is issued.' }),
        ).exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi({
    title: 'apple_pay_card_response',
    description: 'The Card from Apple Pay Wallet used to fund the payment.',
  })
  .openapi('ApplePayCardResponse')

const IbanLastCharsSchema = z
  .string()
  .regex(/^.*[a-zA-Z0-9]{4}.*$/)
  .min(4)
  .max(34)
  .openapi({
    title: 'iban_last_chars',
    description: 'The last characters of the IBAN used to pay.',
  })
  .openapi('IbanLastChars')

const BancontactSchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ).exactOptional(),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ).exactOptional(),
    bic: BicSchema.and(
      z.any().openapi({ description: 'The bank identification code (BIC).' }),
    ).exactOptional(),
    iban_last_chars: IbanLastCharsSchema.exactOptional(),
    card_last_digits: z
      .string()
      .regex(/^[0-9]{4}$/)
      .length(4)
      .exactOptional()
      .openapi({ description: 'The last digits of the card used to fund the Bancontact payment.' }),
  })
  .openapi({
    title: 'bancontact',
    description: 'Information used to pay Bancontact.',
    required: [],
  })
  .openapi('Bancontact')

const BlikOneClickResponseSchema = z
  .object({
    consumer_reference: z
      .string()
      .regex(/^[ -~]{3,64}$/)
      .min(3)
      .max(64)
      .exactOptional()
      .openapi({
        description:
          'The merchant generated, unique reference serving as a primary identifier for accounts connected between Blik and a merchant.',
      }),
  })
  .openapi({
    title: 'blik_one_click_response',
    description: 'Information used to pay using BLIK one-click flow.',
    required: [],
  })
  .openapi('BlikOneClickResponse')

const BlikSchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ).exactOptional(),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ).exactOptional(),
    email: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address of the account holder associated with this payment method.',
        }),
    ).exactOptional(),
    one_click: BlikOneClickResponseSchema.and(
      z.any().openapi({ description: 'The one-click integration flow object.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'blik', description: 'Information used to pay using BLIK.', required: [] })
  .openapi('Blik')

const EpsSchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ).exactOptional(),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ).exactOptional(),
    bic: BicSchema.and(
      z.any().openapi({ description: 'The bank identification code (BIC).' }),
    ).exactOptional(),
  })
  .openapi({ title: 'eps', description: 'Information used to pay using eps.', required: [] })
  .openapi('Eps')

const GiropaySchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ).exactOptional(),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ).exactOptional(),
    bic: BicSchema.and(
      z.any().openapi({ description: 'The bank identification code (BIC).' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'giropay',
    description: 'Information needed to pay using giropay.',
    required: [],
  })
  .openapi('Giropay')

const IdealSchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ).exactOptional(),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ).exactOptional(),
    bic: BicSchema.and(
      z.any().openapi({ description: 'The bank identification code (BIC).' }),
    ).exactOptional(),
    iban_last_chars: IbanLastCharsSchema.exactOptional(),
  })
  .openapi({ title: 'ideal', description: 'Information used to pay using iDEAL.', required: [] })
  .openapi('Ideal')

const MybankSchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ).exactOptional(),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ).exactOptional(),
    bic: BicSchema.and(
      z.any().openapi({ description: 'The bank identification code (BIC).' }),
    ).exactOptional(),
    iban_last_chars: IbanLastCharsSchema.exactOptional(),
  })
  .openapi({ title: 'mybank', description: 'Information used to pay using MyBank.', required: [] })
  .openapi('Mybank')

const P24Schema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ).exactOptional(),
    email: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address of the account holder associated with this payment method.',
        }),
    ).exactOptional(),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ title: 'name', description: 'The two-character ISO 3166-1 country code.' }),
    ).exactOptional(),
    payment_descriptor: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'P24 generated payment description.' }),
    method_id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(300)
      .exactOptional()
      .openapi({
        description: 'Numeric identifier of the payment scheme or bank used for the payment.',
      }),
    method_description: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({
        description: 'Friendly name of the payment scheme or bank used for the payment.',
      }),
  })
  .openapi({
    title: 'p24',
    description: 'Information used to pay using P24(Przelewy24).',
    required: [],
  })
  .openapi('P24')

const SofortSchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ).exactOptional(),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ).exactOptional(),
    bic: BicSchema.and(
      z.any().openapi({ description: 'The bank identification code (BIC).' }),
    ).exactOptional(),
    iban_last_chars: IbanLastCharsSchema.exactOptional(),
  })
  .openapi({ title: 'sofort', description: 'Information used to pay using Sofort.', required: [] })
  .openapi('Sofort')

const TrustlySchema = z
  .object({
    name: FullNameSchema.and(
      z
        .any()
        .openapi({
          title: 'name',
          description: 'The name of the account holder associated with this payment method.',
        }),
    ).exactOptional(),
    country_code: CountryCode_2Schema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 country code.' }),
    ).exactOptional(),
    email: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address of the account holder associated with this payment method.',
        }),
    ).exactOptional(),
    bic: BicSchema.and(
      z.any().openapi({ description: 'The bank identification code (BIC).' }),
    ).exactOptional(),
    iban_last_chars: IbanLastCharsSchema.exactOptional(),
  })
  .openapi({
    title: 'trustly',
    description: 'Information needed to pay using Trustly.',
    required: [],
  })
  .openapi('Trustly')

const ApplePayAttributesResponseSchema = z
  .object({ vault: VaultResponseSchema.exactOptional() })
  .openapi({
    title: 'apple_pay_attributes_response',
    description: 'Additional attributes associated with the use of Apple Pay.',
    required: [],
  })
  .openapi('ApplePayAttributesResponse')

const ApplePaySchema = z
  .object({
    id: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(250)
      .exactOptional()
      .openapi({
        description:
          'ApplePay transaction identifier, this will be the unique identifier for this transaction provided by Apple. The pattern is defined by an external party and supports Unicode.',
      }),
    token: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'Encrypted ApplePay token, containing card information. This token would be base64encoded. The pattern is defined by an external party and supports Unicode.',
      }),
    name: FullNameSchema.and(
      z.any().openapi({ description: 'Name on the wallet.' }),
    ).exactOptional(),
    email_address: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description:
            'The email address of the account holder associated with this payment method.',
        }),
    ).exactOptional(),
    phone_number: PhoneSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'country_code')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['country_code'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'extension_number')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['extension_number'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({
          description:
            'The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). Supports only the `national_number` property.',
        }),
    ).exactOptional(),
    card: ApplePayCardResponseSchema.and(
      z.any().openapi({ description: 'The payment card information.' }),
    ).exactOptional(),
    attributes: ApplePayAttributesResponseSchema.and(
      z.any().openapi({ description: 'Additional attributes associated with apple pay.' }),
    ).exactOptional(),
    stored_credential: CardStoredCredentialSchema.exactOptional(),
  })
  .openapi({
    title: 'apple_pay',
    description: 'Information needed to pay using ApplePay.',
    required: [],
  })
  .openapi('ApplePay')

const GooglePayCardResponseSchema = z
  .object({
    name: z
      .string()
      .regex(/^.{1,300}$/)
      .min(1)
      .max(300)
      .exactOptional()
      .openapi({ description: "The card holder's name as it appears on the card." }),
    last_digits: z
      .string()
      .regex(/^[0-9]{2,4}$/)
      .min(2)
      .max(4)
      .exactOptional()
      .openapi({ description: 'The last digits of the payment card.', readOnly: true }),
    type: CardTypeSchema.and(
      z.any().openapi({ description: 'The payment card type.' }),
    ).exactOptional(),
    brand: CardBrandSchema.and(
      z
        .any()
        .openapi({ description: 'The card brand or network. Typically used in the response.' }),
    ).exactOptional(),
    billing_address: AddressPortableSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_line_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_line_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_4')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_4'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_details')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_details'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({
          description:
            'The billing address for this card. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties.',
        }),
    ).exactOptional(),
    authentication_result: AuthenticationResponseSchema.exactOptional(),
  })
  .openapi({
    title: 'google_pay_card_response',
    description:
      'The payment card to use to fund a Google Pay payment response. Can be a credit or debit card.',
    required: [],
  })
  .openapi('GooglePayCardResponse')

const GooglePaySchema = z
  .object({
    name: FullNameSchema.and(
      z.any().openapi({ description: 'Name on the account holder associated with Google Pay.' }),
    ).exactOptional(),
    email_address: EmailAddressSchema.and(
      z
        .any()
        .openapi({
          description: 'The email address of the account holder associated with Google Pay.',
        }),
    ).exactOptional(),
    phone_number: PhoneWithNationalRequiredAndCountryCodeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The phone number of account holder, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). Supports only the `national_number` property.',
        }),
    ).exactOptional(),
    card: GooglePayCardResponseSchema.and(
      z.any().openapi({ description: 'The Card from Google Pay Wallet used to fund the payment.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'google_pay', description: 'Google Pay Wallet payment data.', required: [] })
  .openapi('GooglePay')

const VenmoVaultResponseSchema = VaultResponseSchema.and(
  z.any().refine(
    (val) =>
      !z
        .unknown()
        .superRefine((val, ctx) => {
          if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
            if (!Object.hasOwn(val, 'customer')) {
              ctx.addIssue({ code: 'custom' })
            }
          }
        })
        .openapi({ required: ['customer'] })
        .safeParse(val).success,
  ),
)
  .and(z.object({ customer: VenmoWalletCustomerSchema.exactOptional() }).openapi({ required: [] }))
  .openapi({
    title: 'venmo_vault_response',
    description: 'The details about a saved venmo payment source.',
  })
  .openapi('VenmoVaultResponse')

const VenmoWalletAttributesResponseSchema = z
  .object({ vault: VenmoVaultResponseSchema.exactOptional() })
  .openapi({
    title: 'venmo_wallet_attributes_response',
    description: 'Additional attributes associated with the use of a Venmo Wallet.',
    required: [],
  })
  .openapi('VenmoWalletAttributesResponse')

const VenmoWalletResponseSchema = z
  .object({
    email_address: EmailSchema.and(
      z.any().openapi({ description: 'The email address of the payer.' }),
    ).exactOptional(),
    account_id: AccountId_2Schema.and(
      z
        .any()
        .openapi({
          description: "This is an immutable system-generated id for a user's Venmo account.",
          readOnly: true,
        }),
    ).exactOptional(),
    user_name: z
      .string()
      .regex(/^[-a-zA-Z0-9_]*$/)
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({
        description: 'The Venmo user name chosen by the user, also know as a Venmo handle.',
      }),
    name: NameSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'prefix')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['prefix'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'middle_name')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['middle_name'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'suffix')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['suffix'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'alternate_full_name')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['alternate_full_name'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'full_name')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['full_name'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({
          description:
            'The name associated with the Venmo account. Supports only the `given_name` and `surname` properties.',
        }),
    ).exactOptional(),
    phone_number: Phone_3Schema.and(
      z
        .any()
        .openapi({
          description:
            'The phone number associated with the Venmo account, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). Supports only the `national_number` property.',
        }),
    ).exactOptional(),
    address: AddressPortableSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_line_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_line_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_4')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_4'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_details')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_details'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({
          description:
            'The address of the payer. Supports only the `address_line_1`, `address_line_2`, `admin_area_1`, `admin_area_2`, `postal_code`, and `country_code` properties. Also referred to as the billing address of the customer.',
        }),
    ).exactOptional(),
    return_flow: z
      .enum(['AUTO', 'MANUAL'])
      .default('AUTO')
      .exactOptional()
      .openapi({
        description:
          'Merchant preference on how the buyer can navigate back to merchant website post approving the transaction on the Venmo App.',
        readOnly: true,
      }),
    attributes: VenmoWalletAttributesResponseSchema.exactOptional(),
  })
  .openapi({ title: 'venmo_wallet_response', description: 'Venmo wallet response.', required: [] })
  .openapi('VenmoWalletResponse')

const CryptoSchema = z
  .object({
    country_code: CountryCodeSchema.and(
      z.any().openapi({ description: 'The two-character ISO 3166-1 purchase country code.' }),
    ).exactOptional(),
    name: CryptoAccountHolderNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the account holder associated with Crypto wallet.' }),
    ).exactOptional(),
    experience_context: ExperienceContextBaseSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'brand_name')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['brand_name'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'shipping_preference')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['shipping_preference'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({
          description:
            'Customizes the payer experience during the approval process for the payment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'crypto',
    description: 'Pay With Crypto details response object.',
    required: [],
  })
  .openapi('Crypto')

const PaymentSourceResponseSchema = z
  .object({
    card: CardResponseSchema.exactOptional(),
    paypal: PaypalWalletResponseSchema.exactOptional(),
    bancontact: BancontactSchema.exactOptional(),
    blik: BlikSchema.exactOptional(),
    eps: EpsSchema.exactOptional(),
    giropay: GiropaySchema.exactOptional(),
    ideal: IdealSchema.exactOptional(),
    mybank: MybankSchema.exactOptional(),
    p24: P24Schema.exactOptional(),
    sofort: SofortSchema.exactOptional(),
    trustly: TrustlySchema.exactOptional(),
    apple_pay: ApplePaySchema.exactOptional(),
    google_pay: GooglePaySchema.exactOptional(),
    venmo: VenmoWalletResponseSchema.exactOptional(),
    crypto: CryptoSchema.exactOptional(),
  })
  .openapi({
    title: 'payment_source_response',
    description: 'The payment source used to fund the payment.',
    required: [],
  })
  .openapi('PaymentSourceResponse')

const ItemSchema = z
  .object({
    name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(127)
      .openapi({ description: 'The item name or title.' }),
    unit_amount: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The item price or rate per unit. If you specify <code>unit_amount</code>, <code>purchase_units[].amount.breakdown.item_total</code> is required. Must equal <code>unit_amount * quantity</code> for all items. <code>unit_amount.value</code> can not be a negative number.',
        }),
    ),
    tax: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The item tax for each unit. If <code>tax</code> is specified, <code>purchase_units[].amount.breakdown.tax_total</code> is required. Must equal <code>tax * quantity</code> for all items. <code>tax.value</code> can not be a negative number.',
        }),
    ).exactOptional(),
    quantity: z
      .string()
      .regex(/^[1-9][0-9]{0,9}$/)
      .min(0)
      .max(10)
      .openapi({ description: 'The item quantity. Must be a whole number.' }),
    description: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2048)
      .exactOptional()
      .openapi({ description: 'The detailed item description.' }),
    sku: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(127)
      .exactOptional()
      .openapi({ description: 'The stock keeping unit (SKU) for the item.' }),
    url: z
      .url()
      .min(1)
      .max(2048)
      .exactOptional()
      .openapi({
        description:
          'The URL to the item being purchased. Visible to buyer and used in buyer experiences.',
      }),
    category: z
      .enum(['DIGITAL_GOODS', 'PHYSICAL_GOODS', 'DONATION'])
      .exactOptional()
      .openapi({ description: 'The item category type.' }),
    image_url: z
      .url()
      .min(1)
      .max(2048)
      .exactOptional()
      .openapi({
        description:
          "The URL of the item's image. File type and size restrictions apply. An image that violates these restrictions will not be honored.",
      }),
    upc: UniversalProductCodeSchema.and(
      z.any().openapi({ description: 'The Universal Product Code of the item.' }),
    ).exactOptional(),
    billing_plan: OrderBillingPlanSchema.exactOptional(),
  })
  .openapi({
    title: 'item',
    description: 'The details for the items to be purchased.',
    required: ['name', 'quantity', 'unit_amount'],
  })
  .openapi('Item')

const TrackerStatusSchema = z
  .enum(['CANCELLED', 'SHIPPED'])
  .openapi({ title: 'Tracker Status', description: 'The status of the item shipment.' })
  .openapi('TrackerStatus')

const TrackerItemSchema = z
  .object({
    name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({ description: 'The item name or title.' }),
    quantity: z
      .string()
      .regex(/^[1-9][0-9]{0,9}$/)
      .min(1)
      .max(10)
      .exactOptional()
      .openapi({ description: 'The item quantity. Must be a whole number.' }),
    sku: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          'The stock keeping unit (SKU) for the item. This can contain unicode characters.',
      }),
    url: z
      .url()
      .min(1)
      .max(2048)
      .exactOptional()
      .openapi({
        description:
          'The URL to the item being purchased. Visible to buyer and used in buyer experiences.',
      }),
    image_url: z
      .url()
      .min(1)
      .max(2048)
      .exactOptional()
      .openapi({
        description:
          "The URL of the item's image. File type and size restrictions apply. An image that violates these restrictions will not be honored.",
      }),
    upc: UniversalProductCodeSchema.and(
      z.any().openapi({ description: 'The Universal Product Code of the item.' }),
    ).exactOptional(),
  })
  .openapi({
    title: 'tracker_item',
    description: 'The details of the items in the shipment.',
    required: [],
  })
  .openapi('TrackerItem')

const LinkSchema_2Schema = z
  .object({
    additionalItems: z
      .object({})
      .exactOptional()
      .openapi({ title: 'additional_items', description: 'Any additional items.' }),
    dependencies: z
      .object({})
      .exactOptional()
      .openapi({ title: 'Dependencies', description: 'Any Dependencies.' }),
    items: z.object({}).exactOptional().openapi({ title: 'Items', description: 'An item.' }),
    definitions: z
      .object({})
      .exactOptional()
      .openapi({ title: 'Definitions', description: 'Definitions.' }),
    patternProperties: z
      .object({})
      .exactOptional()
      .openapi({ title: 'pattern_properties', description: 'The pattern properties.' }),
    properties: z
      .object({})
      .exactOptional()
      .openapi({ title: 'Properties', description: 'Properties.' }),
    allOf: z
      .array(
        z
          .object({})
          .openapi({
            title: 'all_of_item',
            description: 'A sub-schema against which the data must validate.',
          }),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        title: 'all_of',
        description: 'An array of sub-schemas. The data must validate against all sub-schemas.',
      }),
    anyOf: z
      .array(
        z
          .object({})
          .openapi({
            title: 'any_of_item',
            description: 'A sub-schema against which the data must validate.',
          }),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        title: 'any_of',
        description:
          'An array of sub-schemas. The data must validate against one or more sub-schemas.',
      }),
    oneOf: z
      .array(
        z
          .object({})
          .openapi({
            title: 'one_of_item',
            description: 'A sub-schema against which the data must validate.',
          }),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        title: 'one_of',
        description: 'An array of sub-schemas. The data must validate against one sub-schema.',
      }),
    not: z.object({}).exactOptional().openapi({ title: 'Not', description: 'Not.' }),
    links: z
      .array(z.object({}).openapi({ title: 'link', description: 'A link.', readOnly: true }))
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({ description: 'An array of links.', readOnly: true }),
    fragmentResolution: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ title: 'fragment_resolution', description: 'The fragment resolution.' }),
    media: z
      .object({
        type: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(2147483647)
          .exactOptional()
          .openapi({
            description:
              'The media type. See [Multipurpose Internet Mail Extensions (MIME) Part Two: Media Types](https://tools.ietf.org/html/rfc2046).',
          }),
        binaryEncoding: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(2147483647)
          .exactOptional()
          .openapi({
            title: 'binary_encoding',
            description:
              'The content-encoding scheme. See [Multipurpose Internet Mail Extensions (MIME) Part One: Format of Internet Message Bodies](https://tools.ietf.org/html/rfc2045).',
          }),
      })
      .exactOptional()
      .openapi({
        title: 'Media',
        description: 'The media type and context-encoding scheme.',
        required: [],
      }),
    pathStart: z
      .url()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        title: 'path_start',
        description: "To apply this schema to the instances' URIs, start the URIs with this value.",
      }),
  })
  .openapi({ title: 'Link Schema', description: 'The request data or link target.', required: [] })
  .openapi('LinkSchema_2')

const LinkDescription_2Schema = z
  .object({
    href: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .openapi({
        description:
          'The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.',
      }),
    rel: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .openapi({
        description:
          'The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).',
      }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'CONNECT', 'OPTIONS', 'PATCH'])
      .exactOptional()
      .openapi({ description: 'The HTTP method required to make the related call.' }),
    title: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: 'The link title.' }),
    mediaType: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        title: 'media_type',
        description:
          'The media type, as defined by [RFC 2046](https://www.ietf.org/rfc/rfc2046.txt). Describes the link target.',
      }),
    encType: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .default('application/json')
      .exactOptional()
      .openapi({
        title: 'enc_type',
        description: 'The media type in which to submit the request data.',
      }),
    schema: LinkSchema_2Schema.and(
      z.any().openapi({ description: 'The schema that describes the request data.' }),
    ).exactOptional(),
    targetSchema: LinkSchema_2Schema.and(
      z
        .any()
        .openapi({
          title: 'target_schema',
          description: 'The schema that describes the link target.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'Link Description',
    description:
      'The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.',
    required: ['href', 'rel'],
  })
  .openapi('LinkDescription_2')

const TrackerSchema = z
  .object({
    id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({ description: 'The tracker id.', readOnly: true }),
    status: TrackerStatusSchema.exactOptional(),
    items: z
      .array(
        TrackerItemSchema.and(
          z.any().openapi({ title: 'tracker_item', description: 'Items in a shipment.' }),
        ),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({ description: 'An array of details of items in the shipment.' }),
    links: z
      .array(
        LinkDescription_2Schema.and(
          z
            .any()
            .openapi({
              title: 'link_description',
              description: 'A request-related [HATEOAS link](/api/rest/responses/#hateoas-links).',
            }),
        ),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({ description: 'An array of request-related HATEOAS links.', readOnly: true }),
  })
  .openapi({ required: [] })
  .and(ActivityTimestampsSchema)
  .openapi({ title: 'tracker', description: 'The tracking response on creation of tracker.' })
  .openapi('Tracker')

const ShippingWithTrackingDetailsSchema = ShippingDetailSchema.and(
  z
    .object({
      phone_number: PhoneWithNationalRequiredAndCountryCodeSchema.and(
        z
          .any()
          .openapi({
            description:
              'The phone number of the recipient of the shipped items, which may belong to either the payer, or an alternate contact, for delivery.',
          }),
      ).exactOptional(),
      trackers: z
        .array(TrackerSchema)
        .min(0)
        .max(32767)
        .exactOptional()
        .openapi({ description: 'An array of trackers for a transaction.' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ title: 'shipping_with_tracking_details', description: 'The order shipping details.' })
  .openapi('ShippingWithTrackingDetails')

const AuthorizationStatusDetailsSchema = z
  .object({
    reason: z
      .enum(['PENDING_REVIEW', 'DECLINED_BY_RISK_FRAUD_FILTERS'])
      .exactOptional()
      .openapi({
        title: 'Authorization Incomplete Reason',
        description: 'The reason why the authorized status is `PENDING`.',
      }),
  })
  .openapi({
    title: 'authorization_status_details',
    description: 'The details of the authorized payment status.',
    required: [],
  })
  .openapi('AuthorizationStatusDetails')

const AuthorizationStatusSchema = z
  .object({
    status: z
      .enum(['CREATED', 'CAPTURED', 'DENIED', 'PARTIALLY_CAPTURED', 'VOIDED', 'PENDING'])
      .exactOptional()
      .openapi({
        title: 'Authorization Status',
        description: 'The status for the authorized payment.',
        readOnly: true,
      }),
    status_details: AuthorizationStatusDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'The details of the authorized order pending status.',
          readOnly: true,
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'authorization_status',
    description: 'The status fields and status details for an authorized payment.',
    required: [],
  })
  .openapi('AuthorizationStatus')

const SellerProtectionSchema = z
  .object({
    status: z
      .enum(['ELIGIBLE', 'PARTIALLY_ELIGIBLE', 'NOT_ELIGIBLE'])
      .exactOptional()
      .openapi({
        title: 'Seller Protection Status',
        description:
          'Indicates whether the transaction is eligible for seller protection. For information, see [PayPal Seller Protection for Merchants](https://www.paypal.com/us/webapps/mpp/security/seller-protection).',
        readOnly: true,
      }),
    dispute_categories: z
      .array(
        z
          .enum(['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'])
          .openapi({
            title: 'dispute_category',
            description: 'The condition that is covered for the transaction.',
          }),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        description: 'An array of conditions that are covered for the transaction.',
        readOnly: true,
      }),
  })
  .openapi({
    title: 'seller_protection',
    description:
      'The level of protection offered as defined by [PayPal Seller Protection for Merchants](https://www.paypal.com/us/webapps/mpp/security/seller-protection).',
    required: [],
  })
  .openapi('SellerProtection')

const AuthorizationSchema = AuthorizationStatusSchema.and(
  z
    .object({
      id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .exactOptional()
        .openapi({
          description: 'The PayPal-generated ID for the authorized payment.',
          readOnly: true,
        }),
      amount: AmountWithBreakdownSchema.and(
        z.any().openapi({ description: 'The amount for this authorized payment.', readOnly: true }),
      ).exactOptional(),
      invoice_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .exactOptional()
        .openapi({
          description:
            "The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.",
          readOnly: true,
        }),
      custom_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(255)
        .exactOptional()
        .openapi({
          description:
            'The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.',
        }),
      network_transaction_reference: NetworkTransactionSchema.exactOptional(),
      seller_protection: SellerProtectionSchema.and(
        z.any().openapi({ readOnly: true }),
      ).exactOptional(),
      expiration_time: DateTimeSchema.and(
        z
          .any()
          .openapi({
            description:
              'The date and time when the authorized payment expires, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
            readOnly: true,
          }),
      ).exactOptional(),
      links: z
        .array(LinkDescription_2Schema.and(z.any().openapi({ title: 'link_description' })))
        .min(0)
        .max(32767)
        .exactOptional()
        .openapi({
          description:
            'An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).',
          readOnly: true,
        }),
    })
    .openapi({ required: [] }),
)
  .and(ActivityTimestampsSchema)
  .openapi({ title: 'authorization', description: 'The authorized payment transaction.' })
  .openapi('Authorization')

const ProcessorResponseSchema = z
  .object({
    avs_code: z
      .enum([
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'I',
        'M',
        'N',
        'P',
        'R',
        'S',
        'U',
        'W',
        'X',
        'Y',
        'Z',
        'Null',
        '0',
        '1',
        '2',
        '3',
        '4',
      ])
      .exactOptional()
      .openapi({
        description:
          'The address verification code for Visa, Discover, Mastercard, or American Express transactions.',
        readOnly: true,
      }),
    cvv_code: z
      .enum(['E', 'I', 'M', 'N', 'P', 'S', 'U', 'X', 'All others', '0', '1', '2', '3', '4'])
      .exactOptional()
      .openapi({
        description:
          'The card verification value code for for Visa, Discover, Mastercard, or American Express.',
        readOnly: true,
      }),
    response_code: z
      .enum([
        '0000',
        '00N7',
        '0100',
        '0390',
        '0500',
        '0580',
        '0800',
        '0880',
        '0890',
        '0960',
        '0R00',
        '1000',
        '10BR',
        '1300',
        '1310',
        '1312',
        '1317',
        '1320',
        '1330',
        '1335',
        '1340',
        '1350',
        '1352',
        '1360',
        '1370',
        '1380',
        '1382',
        '1384',
        '1390',
        '1393',
        '5100',
        '5110',
        '5120',
        '5130',
        '5135',
        '5140',
        '5150',
        '5160',
        '5170',
        '5180',
        '5190',
        '5200',
        '5210',
        '5400',
        '5500',
        '5650',
        '5700',
        '5710',
        '5800',
        '5900',
        '5910',
        '5920',
        '5930',
        '5950',
        '6300',
        '7600',
        '7700',
        '7710',
        '7800',
        '7900',
        '8000',
        '8010',
        '8020',
        '8030',
        '8100',
        '8110',
        '8220',
        '9100',
        '9500',
        '9510',
        '9520',
        '9530',
        '9540',
        '9600',
        'PCNR',
        'PCVV',
        'PP06',
        'PPRN',
        'PPAD',
        'PPAB',
        'PPAE',
        'PPAG',
        'PPAI',
        'PPAR',
        'PPAU',
        'PPAV',
        'PPAX',
        'PPBG',
        'PPC2',
        'PPCE',
        'PPCO',
        'PPCR',
        'PPCT',
        'PPCU',
        'PPD3',
        'PPDC',
        'PPDI',
        'PPDV',
        'PPDT',
        'PPEF',
        'PPEL',
        'PPER',
        'PPEX',
        'PPFE',
        'PPFI',
        'PPFR',
        'PPFV',
        'PPGR',
        'PPH1',
        'PPIF',
        'PPII',
        'PPIM',
        'PPIT',
        'PPLR',
        'PPLS',
        'PPMB',
        'PPMC',
        'PPMD',
        'PPNC',
        'PPNL',
        'PPNM',
        'PPNT',
        'PPPH',
        'PPPI',
        'PPPM',
        'PPQC',
        'PPRE',
        'PPRF',
        'PPRR',
        'PPS0',
        'PPS1',
        'PPS2',
        'PPS3',
        'PPS4',
        'PPS5',
        'PPS6',
        'PPSC',
        'PPSD',
        'PPSE',
        'PPTE',
        'PPTF',
        'PPTI',
        'PPTR',
        'PPTT',
        'PPTV',
        'PPUA',
        'PPUC',
        'PPUE',
        'PPUI',
        'PPUP',
        'PPUR',
        'PPVC',
        'PPVE',
        'PPVT',
      ])
      .exactOptional()
      .openapi({
        description: 'Processor response code for the non-PayPal payment processor errors.',
        readOnly: true,
      }),
    payment_advice_code: z
      .enum([
        '01',
        '02',
        '03',
        '04',
        '21',
        '22',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '40',
        '43',
      ])
      .exactOptional()
      .openapi({
        description:
          'The declined payment transactions might have payment advice codes. The card networks, like Visa and Mastercard, return payment advice codes.',
        readOnly: true,
      }),
  })
  .openapi({
    title: 'processor_response',
    description:
      'The processor response information for payment requests, such as direct credit card transactions.',
    required: [],
  })
  .openapi('ProcessorResponse')

const AuthorizationWithAdditionalDataSchema = AuthorizationSchema.and(
  z
    .object({
      processor_response: ProcessorResponseSchema.and(
        z
          .any()
          .openapi({
            description: 'The processor response for card transactions.',
            readOnly: true,
          }),
      ).exactOptional(),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'authorization_with_additional_data',
    description:
      'The authorization with additional payment details, such as risk assessment and processor response. These details are populated only for certain payment methods.',
  })
  .openapi('AuthorizationWithAdditionalData')

const CaptureStatusDetailsSchema = z
  .object({
    reason: z
      .enum([
        'BUYER_COMPLAINT',
        'CHARGEBACK',
        'ECHECK',
        'INTERNATIONAL_WITHDRAWAL',
        'OTHER',
        'PENDING_REVIEW',
        'RECEIVING_PREFERENCE_MANDATES_MANUAL_ACTION',
        'REFUNDED',
        'TRANSACTION_APPROVED_AWAITING_FUNDING',
        'UNILATERAL',
        'VERIFICATION_REQUIRED',
        'DECLINED_BY_RISK_FRAUD_FILTERS',
      ])
      .exactOptional()
      .openapi({
        title: 'Capture Incomplete Reason',
        description: 'The reason why the captured payment status is `PENDING` or `DENIED`.',
      }),
  })
  .openapi({
    title: 'capture_status_details',
    description: 'The details of the captured payment status.',
    required: [],
  })
  .openapi('CaptureStatusDetails')

const CaptureStatusSchema = z
  .object({
    status: z
      .enum(['COMPLETED', 'DECLINED', 'PARTIALLY_REFUNDED', 'PENDING', 'REFUNDED', 'FAILED'])
      .exactOptional()
      .openapi({
        title: 'Capture Status',
        description: 'The status of the captured payment.',
        readOnly: true,
      }),
    status_details: CaptureStatusDetailsSchema.and(
      z
        .any()
        .openapi({ description: 'The details of the captured payment status.', readOnly: true }),
    ).exactOptional(),
  })
  .openapi({
    title: 'capture_status',
    description: 'The status and status details of a captured payment.',
    required: [],
  })
  .openapi('CaptureStatus')

const ExchangeRateSchema = z
  .object({
    source_currency: CurrencyCodeSchema.and(
      z.any().openapi({ description: 'The source currency from which to convert an amount.' }),
    ).exactOptional(),
    target_currency: CurrencyCodeSchema.and(
      z.any().openapi({ description: 'The target currency to which to convert an amount.' }),
    ).exactOptional(),
    value: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The target currency amount. Equivalent to one unit of the source currency. Formatted as integer or decimal value with one to 15 digits to the right of the decimal point.',
      }),
  })
  .openapi({
    title: 'exchange_rate',
    description:
      'The exchange rate that determines the amount to convert from one currency to another currency.',
    readOnly: true,
    required: [],
  })
  .openapi('ExchangeRate')

const SellerReceivableBreakdownSchema = z
  .object({
    gross_amount: MoneySchema.and(
      z
        .any()
        .openapi({
          description: 'The amount for this captured payment in the currency of the transaction.',
        }),
    ),
    paypal_fee: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The applicable fee for this captured payment in the currency of the transaction.',
        }),
    ).exactOptional(),
    paypal_fee_in_receivable_currency: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            "The applicable fee for this captured payment in the receivable currency. Returned only in cases the fee is charged in the receivable currency. Example 'CNY'.",
        }),
    ).exactOptional(),
    net_amount: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            'The net amount that the payee receives for this captured payment in their PayPal account. The net amount is computed as <code>gross_amount</code> minus the <code>paypal_fee</code> minus the <code>platform_fees</code>.',
        }),
    ).exactOptional(),
    receivable_amount: MoneySchema.and(
      z
        .any()
        .openapi({
          description:
            "The net amount that is credited to the payee's PayPal account. Returned only when the currency of the captured payment is different from the currency of the PayPal account where the payee wants to credit the funds. The amount is computed as <code>net_amount</code> times <code>exchange_rate</code>.",
        }),
    ).exactOptional(),
    exchange_rate: ExchangeRateSchema.and(
      z
        .any()
        .openapi({
          description:
            "The exchange rate that determines the amount that is credited to the payee's PayPal account. Returned when the currency of the captured payment is different from the currency of the PayPal account where the payee wants to credit the funds.",
        }),
    ).exactOptional(),
    platform_fees: z
      .array(PlatformFeeSchema.and(z.any().openapi({ title: 'platform_fee' })))
      .min(0)
      .max(1)
      .exactOptional()
      .openapi({
        description:
          'An array of platform or partner fees, commissions, or brokerage fees that associated with the captured payment.',
      }),
  })
  .openapi({
    title: 'Seller Receivable Breakdown',
    description:
      'The detailed breakdown of the capture activity. This is not available for transactions that are in pending state.',
    required: ['gross_amount'],
  })
  .openapi('SellerReceivableBreakdown')

const CaptureSchema = CaptureStatusSchema.and(
  z
    .object({
      id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .exactOptional()
        .openapi({
          description: 'The PayPal-generated ID for the captured payment.',
          readOnly: true,
        }),
      amount: AmountWithBreakdownSchema.and(
        z.any().openapi({ description: 'The amount for this captured payment.', readOnly: true }),
      ).exactOptional(),
      invoice_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .exactOptional()
        .openapi({
          description:
            "The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.",
          readOnly: true,
        }),
      custom_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(255)
        .exactOptional()
        .openapi({
          description:
            'The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.',
        }),
      network_transaction_reference: NetworkTransactionSchema.exactOptional(),
      seller_protection: SellerProtectionSchema.and(
        z.any().openapi({ readOnly: true }),
      ).exactOptional(),
      final_capture: z
        .boolean()
        .default(false)
        .exactOptional()
        .openapi({
          description:
            'Indicates whether you can make additional captures against the authorized payment. Set to `true` if you do not intend to capture additional payments against the authorization. Set to `false` if you intend to capture additional payments against the authorization.',
          readOnly: true,
        }),
      seller_receivable_breakdown: SellerReceivableBreakdownSchema.and(
        z.any().openapi({ readOnly: true }),
      ).exactOptional(),
      disbursement_mode: DisbursementModeSchema.exactOptional(),
      links: z
        .array(LinkDescription_2Schema.and(z.any().openapi({ title: 'link_description' })))
        .min(0)
        .max(32767)
        .exactOptional()
        .openapi({
          description:
            'An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).',
          readOnly: true,
        }),
      processor_response: ProcessorResponseSchema.and(
        z
          .any()
          .openapi({
            description:
              'An object that provides additional processor information for a direct credit card transaction.',
          }),
      ).exactOptional(),
    })
    .openapi({ required: [] }),
)
  .and(ActivityTimestampsSchema)
  .openapi({ title: 'capture', description: 'A captured payment.' })
  .openapi('Capture')

const RefundStatusDetailsSchema = z
  .object({
    reason: z
      .literal('ECHECK')
      .exactOptional()
      .openapi({
        title: 'Refund Incomplete Reason',
        description: 'The reason why the refund has the `PENDING` or `FAILED` status.',
      }),
  })
  .openapi({
    title: 'refund_status_details',
    description: 'The details of the refund status.',
    required: [],
  })
  .openapi('RefundStatusDetails')

const RefundStatusSchema = z
  .object({
    status: z
      .enum(['CANCELLED', 'FAILED', 'PENDING', 'COMPLETED'])
      .exactOptional()
      .openapi({
        title: 'Refund Status With Details',
        description: 'The status of the refund.',
        readOnly: true,
      }),
    status_details: RefundStatusDetailsSchema.and(
      z.any().openapi({ description: 'The details of the refund status.', readOnly: true }),
    ).exactOptional(),
  })
  .openapi({ title: 'refund_status', description: 'The refund status with details.', required: [] })
  .openapi('RefundStatus')

const NetAmountBreakdownItemSchema = z
  .object({
    payable_amount: MoneySchema.and(
      z
        .any()
        .openapi({
          description: "The net amount debited from the merchant's PayPal account.",
          readOnly: true,
        }),
    ).exactOptional(),
    converted_amount: MoneySchema.and(
      z.any().openapi({ description: 'The converted payable amount.', readOnly: true }),
    ).exactOptional(),
    exchange_rate: ExchangeRateSchema.and(
      z
        .any()
        .openapi({
          description:
            "The exchange rate that determines the amount that was debited from the merchant's PayPal account.",
          readOnly: true,
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'net_amount_breakdown',
    description:
      'The net amount. Returned when the currency of the refund is different from the currency of the PayPal account where the merchant holds their funds.',
    required: [],
  })
  .openapi('NetAmountBreakdownItem')

const RefundSchema = RefundStatusSchema.and(
  z
    .object({
      id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .exactOptional()
        .openapi({ description: 'The PayPal-generated ID for the refund.', readOnly: true }),
      amount: MoneySchema.and(
        z
          .any()
          .openapi({
            description: 'The amount that the payee refunded to the payer.',
            readOnly: true,
          }),
      ).exactOptional(),
      invoice_id: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .exactOptional()
        .openapi({
          description:
            "The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives.",
          readOnly: true,
        }),
      custom_id: z
        .string()
        .regex(/^[A-Za-z0-9-_.,]*$/)
        .min(1)
        .max(255)
        .exactOptional()
        .openapi({
          description:
            'The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.',
        }),
      acquirer_reference_number: z
        .string()
        .regex(/^[a-zA-Z0-9]+$/)
        .min(1)
        .max(36)
        .exactOptional()
        .openapi({
          description:
            'Reference ID issued for the card transaction. This ID can be used to track the transaction across processors, card brands and issuing banks.',
        }),
      note_to_payer: z
        .string()
        .regex(/^[\S\s]*$/)
        .min(0)
        .max(2147483647)
        .exactOptional()
        .openapi({
          description:
            "The reason for the refund. Appears in both the payer's transaction history and the emails that the payer receives.",
          readOnly: true,
        }),
      seller_payable_breakdown: z
        .object({
          gross_amount: MoneySchema.and(
            z
              .any()
              .openapi({
                description: 'The amount that the payee refunded to the payer.',
                readOnly: true,
              }),
          ).exactOptional(),
          paypal_fee: MoneySchema.and(
            z
              .any()
              .openapi({
                description:
                  'The PayPal fee that was refunded to the payer in the currency of the transaction. This fee might not match the PayPal fee that the payee paid when the payment was captured.',
                readOnly: true,
              }),
          ).exactOptional(),
          paypal_fee_in_receivable_currency: MoneySchema.and(
            z
              .any()
              .openapi({
                description:
                  "The PayPal fee that was refunded to the payer in the receivable currency. Returned only in cases when the receivable currency is different from transaction currency. Example 'CNY'.",
                readOnly: true,
              }),
          ).exactOptional(),
          net_amount: MoneySchema.and(
            z
              .any()
              .openapi({
                description:
                  "The net amount that the payee's account is debited in the transaction currency. The net amount is calculated as <code>gross_amount</code> minus <code>paypal_fee</code> minus <code>platform_fees</code>.",
                readOnly: true,
              }),
          ).exactOptional(),
          net_amount_in_receivable_currency: MoneySchema.and(
            z
              .any()
              .openapi({
                description:
                  "The net amount that the payee's account is debited in the receivable currency. Returned only in cases when the receivable currency is different from transaction currency. Example 'CNY'.",
                readOnly: true,
              }),
          ).exactOptional(),
          platform_fees: z
            .array(PlatformFeeSchema.and(z.any().openapi({ title: 'platform_fee' })))
            .min(0)
            .max(1)
            .exactOptional()
            .openapi({
              description:
                'An array of platform or partner fees, commissions, or brokerage fees for the refund.',
            }),
          net_amount_breakdown: z
            .array(
              NetAmountBreakdownItemSchema.and(
                z.any().openapi({ title: 'net_amount_breakdown_item' }),
              ),
            )
            .min(0)
            .max(32767)
            .exactOptional()
            .openapi({
              description:
                'An array of breakdown values for the net amount. Returned when the currency of the refund is different from the currency of the PayPal account where the payee holds their funds.',
              readOnly: true,
            }),
          total_refunded_amount: MoneySchema.and(
            z
              .any()
              .openapi({
                description:
                  'The total amount refunded from the original capture to date. For example, if a payer makes a $100 purchase and was refunded $20 a week ago and was refunded $30 in this refund, the `gross_amount` is $30 for this refund and the `total_refunded_amount` is $50.',
              }),
          ).exactOptional(),
        })
        .exactOptional()
        .openapi({
          title: 'Seller Payable Breakdown',
          description: 'The breakdown of the refund.',
          readOnly: true,
          required: [],
        }),
      payer: PayeeBaseSchema.and(
        z
          .any()
          .openapi({
            description: 'The details associated with the merchant for this transaction.',
            readOnly: true,
          }),
      ).exactOptional(),
      links: z
        .array(LinkDescription_2Schema.and(z.any().openapi({ title: 'link_description' })))
        .min(0)
        .max(32767)
        .exactOptional()
        .openapi({
          description:
            'An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).',
          readOnly: true,
        }),
    })
    .openapi({
      title: 'Refund Properties',
      description:
        'The detailed properties of the refund transaction, including identifiers, amounts, breakdowns, and associated metadata.',
      required: [],
    }),
)
  .and(ActivityTimestampsSchema)
  .openapi({ title: 'refund', description: 'The refund information.' })
  .openapi('Refund')

const PaymentCollectionSchema = z
  .object({
    authorizations: z
      .array(
        AuthorizationWithAdditionalDataSchema.and(
          z
            .any()
            .openapi({
              title: 'authorizations',
              description: 'The authorized payment for a purchase unit.',
            }),
        ),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        description:
          'An array of authorized payments for a purchase unit. A purchase unit can have zero or more authorized payments.',
      }),
    captures: z
      .array(
        CaptureSchema.and(
          z
            .any()
            .openapi({
              title: 'capture',
              description: 'The captured payment for a purchase unit.',
            }),
        ),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        description:
          'An array of captured payments for a purchase unit. A purchase unit can have zero or more captured payments.',
      }),
    refunds: z
      .array(
        RefundSchema.and(
          z.any().openapi({ title: 'refund', description: 'A refund for a purchase unit.' }),
        ),
      )
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({
        description:
          'An array of refunds for a purchase unit. A purchase unit can have zero or more refunds.',
      }),
  })
  .openapi({
    title: 'Payment Collection',
    description:
      'The collection of payments, or transactions, for a purchase unit in an order. For example, authorized payments, captured payments, and refunds.',
    required: [],
  })
  .openapi('PaymentCollection')

const PurchaseUnitSchema = z
  .object({
    reference_id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(256)
      .exactOptional()
      .openapi({
        description:
          'The API caller-provided external ID for the purchase unit. Required for multiple purchase units when you must update the order through `PATCH`. If you omit this value and the order contains only one purchase unit, PayPal sets this value to `default`. <blockquote><strong>Note:</strong> If there are multiple purchase units, <code>reference_id</code> is required for each purchase unit.</blockquote>',
      }),
    amount: AmountWithBreakdownSchema.exactOptional(),
    payee: PayeeSchema.and(
      z.any().openapi({ description: 'The merchant who receives payment for this transaction.' }),
    ).exactOptional(),
    payment_instruction: PaymentInstructionSchema.exactOptional(),
    description: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({ description: 'The purchase description.' }),
    custom_id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports.',
      }),
    invoice_id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({ description: 'The API caller-provided external invoice ID for this order.' }),
    id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(19)
      .exactOptional()
      .openapi({
        description:
          "The PayPal-generated ID for the purchase unit. This ID appears in both the payer's transaction history and the emails that the payer receives. In addition, this ID is available in transaction and settlement reports that merchants and API callers can use to reconcile transactions. This ID is only available when an order is saved by calling <code>v2/checkout/orders/id/save</code>.",
      }),
    soft_descriptor: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(22)
      .exactOptional()
      .openapi({
        description:
          "The payment descriptor on account transactions on the customer's credit card statement, that PayPal sends to processors. The maximum length of the soft descriptor information that you can pass in the API field is 22 characters, in the following format:<code>22 - len(PAYPAL * (8)) - len(<var>Descriptor in Payment Receiving Preferences of Merchant account</var> + 1)</code>The PAYPAL prefix uses 8 characters.<br/><br/>The soft descriptor supports the following ASCII characters:<ul><li>Alphanumeric characters</li><li>Dashes</li><li>Asterisks</li><li>Periods (.)</li><li>Spaces</li></ul>For Wallet payments marketplace integrations:<ul><li>The merchant descriptor in the Payment Receiving Preferences must be the marketplace name.</li><li>You can't use the remaining space to show the customer service number.</li><li>The remaining spaces can be a combination of seller name and country.</li></ul><br/>For unbranded payments (Direct Card) marketplace integrations, use a combination of the seller name and phone number.",
      }),
    items: z
      .array(ItemSchema.and(z.any().openapi({ title: 'item', description: 'An item.' })))
      .min(0)
      .max(32767)
      .exactOptional()
      .openapi({ description: 'An array of items that the customer purchases from the merchant.' }),
    shipping: ShippingWithTrackingDetailsSchema.and(
      z.any().openapi({ description: 'The shipping address and method.' }),
    ).exactOptional(),
    supplementary_data: SupplementaryDataSchema.and(
      z
        .any()
        .openapi({
          description:
            'Supplementary data about this payment. Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see <a href="https://developer.paypal.com/docs/checkout/advanced/processing/">checkout</a> or <a href="https://developer.paypal.com/docs/multiparty/checkout/advanced/processing/">multiparty checkout</a>.',
        }),
    ).exactOptional(),
    payments: PaymentCollectionSchema.and(
      z
        .any()
        .openapi({
          description: 'The comprehensive history of payments for the purchase unit.',
          readOnly: true,
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'Purchase Unit',
    description:
      'The purchase unit details. Used to capture required information for the payment contract.',
    required: [],
  })
  .openapi('PurchaseUnit')

const OrderStatusSchema = z
  .enum(['CREATED', 'SAVED', 'APPROVED', 'VOIDED', 'COMPLETED', 'PAYER_ACTION_REQUIRED'])
  .openapi({ title: 'Order Status', description: 'The order status.' })
  .openapi('OrderStatus')

const OrderSchema = ActivityTimestampsSchema.and(z.any().openapi({ title: 'activity_timestamps' }))
  .and(
    z
      .object({
        id: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(2147483647)
          .exactOptional()
          .openapi({ description: 'The ID of the order.', readOnly: true }),
        payment_source: PaymentSourceResponseSchema.exactOptional(),
        intent: CheckoutPaymentIntentSchema.exactOptional(),
        payer: PayerSchema.and(
          z
            .any()
            .openapi({
              description:
                'DEPRECATED. The customer is also known as the payer. The Payer object was intended to only be used with the `payment_source.paypal` object. In order to make this design more clear, the details in the `payer` object are now available under `payment_source.paypal`. Please use `payment_source.paypal`. <b>DEPRECATED</b><br><table><tr><th>See</th><th>Since Version</th></tr><tr><td>payment_source.paypal</td><td>2.9</td></tr></table>',
              deprecated: true,
            }),
        ).exactOptional(),
        purchase_units: z
          .array(
            PurchaseUnitSchema.and(
              z
                .any()
                .openapi({
                  title: 'purchase_unit',
                  description:
                    'A purchase unit. Establishes a contract between a customer and merchant.',
                }),
            ),
          )
          .min(1)
          .max(10)
          .exactOptional()
          .openapi({
            description:
              'An array of purchase units. Each purchase unit establishes a contract between a customer and merchant. Each purchase unit represents either a full or partial order that the customer intends to purchase from the merchant.',
          }),
        status: OrderStatusSchema.and(z.any().openapi({ readOnly: true })).exactOptional(),
        links: z
          .array(
            LinkDescription_2Schema.and(
              z
                .any()
                .openapi({
                  title: 'link_description',
                  description:
                    'A request-related [HATEOAS link](/api/rest/responses/#hateoas-links). To complete payer approval, use the `approve` link with the `GET` method.',
                }),
            ),
          )
          .min(0)
          .max(32767)
          .exactOptional()
          .openapi({
            description:
              'An array of request-related HATEOAS links. To complete payer approval, use the `approve` link to redirect the payer. The API caller has 6 hours (default setting, this which can be changed by your account manager to 24/48/72 hours to accommodate your use case) from the time the order is created, to redirect your payer. Once redirected, the API caller has 6 hours for the payer to approve the order and either authorize or capture the order. If you are not using the PayPal JavaScript SDK to initiate PayPal Checkout (in context) ensure that you include `application_context.return_url` is specified or you will get "We\'re sorry, Things don\'t appear to be working at the moment" after the payer approves the payment.',
            readOnly: true,
          }),
      })
      .openapi({ title: 'Order', description: 'The order details.', required: [] }),
  )
  .openapi({ title: 'Order', description: 'The order details.' })
  .openapi('Order')

const PatchSchema = z
  .object({
    op: z
      .enum(['add', 'remove', 'replace', 'move', 'copy', 'test'])
      .openapi({ description: 'The operation.' }),
    path: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The <a href="https://tools.ietf.org/html/rfc6901">JSON Pointer</a> to the target document location at which to complete the operation.',
      }),
    value: z
      .any()
      .exactOptional()
      .openapi({
        title: 'Patch Value',
        description:
          'The value to apply. The <code>remove</code>, <code>copy</code>, and <code>move</code> operations do not require a value. Since <a href="https://www.rfc-editor.org/rfc/rfc6902">JSON Patch</a> allows any type for <code>value</code>, the <code>type</code> property is not specified.',
      }),
    from: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The <a href="https://tools.ietf.org/html/rfc6901">JSON Pointer</a> to the target document location from which to move the value. Required for the <code>move</code> operation.',
      }),
  })
  .openapi({
    title: 'Patch',
    description: 'The JSON patch object to apply partial updates to resources.',
    required: ['op'],
  })
  .openapi('Patch')

const PatchRequestSchema = z
  .array(PatchSchema.and(z.any().openapi({ title: 'patch' })))
  .min(0)
  .max(32767)
  .openapi({
    title: 'Patch Request',
    description: 'An array of JSON patch objects to apply partial updates to resources.',
  })
  .openapi('PatchRequest')

const OrderConfirmApplicationContextSchema = z
  .object({
    brand_name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description: 'Label to present to your payer as part of the PayPal hosted web experience.',
      }),
    locale: LanguageSchema.and(
      z
        .any()
        .openapi({
          description:
            'The BCP 47-formatted locale of pages that the PayPal payment experience shows. PayPal supports a five-character code. For example, `da-DK`, `he-IL`, `id-ID`, `ja-JP`, `no-NO`, `pt-BR`, `ru-RU`, `sv-SE`, `th-TH`, `zh-CN`, `zh-HK`, or `zh-TW`.',
        }),
    ).exactOptional(),
    return_url: z
      .url()
      .min(10)
      .max(4000)
      .exactOptional()
      .openapi({
        description:
          'The URL where the customer is redirected after the customer approves the payment.',
      }),
    cancel_url: z
      .url()
      .min(10)
      .max(4000)
      .exactOptional()
      .openapi({
        description:
          'The URL where the customer is redirected after the customer cancels the payment.',
      }),
    stored_payment_source: StoredPaymentSourceSchema.exactOptional(),
  })
  .openapi({
    title: 'Order Confirm Application Context',
    description: 'Customizes the payer confirmation experience.',
    required: [],
  })
  .openapi('OrderConfirmApplicationContext')

const ConfirmOrderRequestSchema = z
  .object({
    payment_source: PaymentSourceSchema,
    application_context: OrderConfirmApplicationContextSchema.exactOptional(),
  })
  .openapi({
    title: 'confirm_order_request',
    description:
      'Payer confirms the intent to pay for the Order using the provided payment source.',
    required: ['payment_source'],
  })
  .openapi('ConfirmOrderRequest')

const OrderAuthorizeRequestSchema = z
  .object({
    payment_source: PaymentSourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The source of payment for the order, which can be a token or a card. Use this object only if you have not redirected the user after order creation to approve the payment. In such cases, the user-selected payment method in the PayPal flow is implicitly used.',
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'Order Authorize Request',
    description: 'The authorization of an order request.',
    required: [],
  })
  .openapi('OrderAuthorizeRequest')

const OrderAuthorizeResponseSchema = ActivityTimestampsSchema.and(
  z.any().openapi({ title: 'activity_timestamps' }),
)
  .and(
    z
      .object({
        id: z
          .string()
          .regex(/^[\S\s]*$/)
          .min(0)
          .max(2147483647)
          .exactOptional()
          .openapi({ description: 'The ID of the order.', readOnly: true }),
        payment_source: PaymentSourceResponseSchema.and(
          z.any().refine(
            (val) =>
              !z
                .union([
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'alipay')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['alipay'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'bancomatpay')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['bancomatpay'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'bancontact')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['bancontact'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'blik')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['blik'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'boletobancario')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['boletobancario'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'eps')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['eps'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'giropay')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['giropay'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'grabpay')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['grabpay'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'ideal')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['ideal'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'mbway')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['mbway'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'multibanco')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['multibanco'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'mybank')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['mybank'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'oxxo')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['oxxo'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'payu')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['payu'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'pay_upon_invoice')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['pay_upon_invoice'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'p24')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['p24'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'safetypay')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['safetypay'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'satispay')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['satispay'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'swish')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['swish'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'sofort')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['sofort'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'trustly')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['trustly'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'verkkopankki')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['verkkopankki'] }),
                  z
                    .unknown()
                    .superRefine((val, ctx) => {
                      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                        if (!Object.hasOwn(val, 'wechatpay')) {
                          ctx.addIssue({ code: 'custom' })
                        }
                      }
                    })
                    .openapi({ required: ['wechatpay'] }),
                ])
                .safeParse(val).success,
          ),
        ).exactOptional(),
        intent: CheckoutPaymentIntentSchema.exactOptional(),
        payer: PayerSchema.exactOptional(),
        purchase_units: z
          .array(
            PurchaseUnitSchema.and(
              z
                .any()
                .openapi({
                  title: 'purchase_unit',
                  description:
                    'A purchase unit. Establishes a contract between a customer and merchant.',
                }),
            ),
          )
          .min(1)
          .max(10)
          .exactOptional()
          .openapi({
            description:
              'An array of purchase units. Each purchase unit establishes a contract between a customer and merchant. Each purchase unit represents either a full or partial order that the customer intends to purchase from the merchant.',
          }),
        status: OrderStatusSchema.and(z.any().openapi({ readOnly: true })).exactOptional(),
        links: z
          .array(
            LinkDescription_2Schema.and(
              z
                .any()
                .openapi({
                  title: 'link_description',
                  description:
                    'A request-related [HATEOAS link](/api/rest/responses/#hateoas-links). To complete payer approval, use the `approve` link with the `GET` method.',
                }),
            ),
          )
          .min(0)
          .max(32767)
          .exactOptional()
          .openapi({
            description:
              'An array of request-related HATEOAS links. To complete payer approval, use the `approve` link to redirect the payer. The API caller has 6 hours (default setting, this which can be changed by your account manager to 24/48/72 hours to accommodate your use case) from the time the order is created, to redirect your payer. Once redirected, the API caller has 6 hours for the payer to approve the order and either authorize or capture the order. If you are not using the PayPal JavaScript SDK to initiate PayPal Checkout (in context) ensure that you include `application_context.return_url` is specified or you will get "We\'re sorry, Things don\'t appear to be working at the moment" after the payer approves the payment.',
            readOnly: true,
          }),
      })
      .openapi({
        title: 'Order Authorize Response',
        description: 'The order authorize response.',
        required: [],
      }),
  )
  .openapi({ title: 'Order Authorize Response', description: 'The order authorize response.' })
  .openapi('OrderAuthorizeResponse')

const OrderCaptureRequestSchema = z
  .object({
    payment_source: PaymentSourceSchema.and(
      z.any().refine(
        (val) =>
          !z
            .union([
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'afterpay')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['afterpay'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'bancontact')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['bancontact'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'blik')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['blik'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'bizum')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['bizum'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'blik_pay_later')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['blik_pay_later'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'crypto')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['crypto'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'dragonpay')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['dragonpay'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'eps')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['eps'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'estonia_banks')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['estonia_banks'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'fiuu_cash')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['fiuu_cash'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'floa_pay')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['floa_pay'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'fpx')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['fpx'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'giropay')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['giropay'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'gopay')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['gopay'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'ideal')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['ideal'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'klarna')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['klarna'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'latvia_banks')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['latvia_banks'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'lithuania_banks')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['lithuania_banks'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'mybank')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['mybank'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'paysafecard')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['paysafecard'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'pix_international')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['pix_international'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'p24')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['p24'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'skrill')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['skrill'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'paysera')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['paysera'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'scalapay')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['scalapay'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'sofort')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['sofort'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'swish')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['swish'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'thailand_banks')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['thailand_banks'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'trustly')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['trustly'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'wero')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['wero'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'zip')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['zip'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'doku')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['doku'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'alfamart')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['alfamart'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'indomaret')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['indomaret'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'indonesia_banks')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['indonesia_banks'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'jenius_pay')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['jenius_pay'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'kredivo')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['kredivo'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'linkaja')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['linkaja'] }),
              z
                .unknown()
                .superRefine((val, ctx) => {
                  if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                    if (!Object.hasOwn(val, 'ovo')) {
                      ctx.addIssue({ code: 'custom' })
                    }
                  }
                })
                .openapi({ required: ['ovo'] }),
            ])
            .safeParse(val).success,
      ),
    ).exactOptional(),
  })
  .openapi({
    title: 'Order Capture Request',
    description: 'Completes an capture payment for an order.',
    required: [],
  })
  .openapi('OrderCaptureRequest')

const ShipmentCarrierSchema = z
  .enum([
    'DPD_RU',
    'BG_BULGARIAN_POST',
    'KR_KOREA_POST',
    'ZA_COURIERIT',
    'FR_EXAPAQ',
    'ARE_EMIRATES_POST',
    'GAC',
    'GEIS',
    'SF_EX',
    'PAGO',
    'MYHERMES',
    'DIAMOND_EUROGISTICS',
    'CORPORATECOURIERS_WEBHOOK',
    'BOND',
    'OMNIPARCEL',
    'SK_POSTA',
    'PUROLATOR',
    'FETCHR_WEBHOOK',
    'THEDELIVERYGROUP',
    'CELLO_SQUARE',
    'TARRIVE',
    'COLLIVERY',
    'MAINFREIGHT',
    'IND_FIRSTFLIGHT',
    'ACSWORLDWIDE',
    'AMSTAN',
    'OKAYPARCEL',
    'ENVIALIA_REFERENCE',
    'SEUR_ES',
    'CONTINENTAL',
    'FDSEXPRESS',
    'AMAZON_FBA_SWISHIP',
    'WYNGS',
    'DHL_ACTIVE_TRACING',
    'ZYLLEM',
    'RUSTON',
    'XPOST',
    'CORREOS_ES',
    'DHL_FR',
    'PAN_ASIA',
    'BRT_IT',
    'SRE_KOREA',
    'SPEEDEE',
    'TNT_UK',
    'VENIPAK',
    'SHREENANDANCOURIER',
    'CROSHOT',
    'NIPOST_NG',
    'EPST_GLBL',
    'NEWGISTICS',
    'POST_SLOVENIA',
    'JERSEY_POST',
    'BOMBINOEXP',
    'WMG',
    'XQ_EXPRESS',
    'FURDECO',
    'LHT_EXPRESS',
    'SOUTH_AFRICAN_POST_OFFICE',
    'SPOTON',
    'DIMERCO',
    'CYPRUS_POST_CYP',
    'ABCUSTOM',
    'IND_DELIVREE',
    'CN_BESTEXPRESS',
    'DX_SFTP',
    'PICKUPP_MYS',
    'FMX',
    'HELLMANN',
    'SHIP_IT_ASIA',
    'KERRY_ECOMMERCE',
    'FRETERAPIDO',
    'PITNEY_BOWES',
    'XPRESSEN_DK',
    'SEUR_SP_API',
    'DELIVERYONTIME',
    'JINSUNG',
    'TRANS_KARGO',
    'SWISHIP_DE',
    'IVOY_WEBHOOK',
    'AIRMEE_WEBHOOK',
    'DHL_BENELUX',
    'FIRSTMILE',
    'FASTWAY_IR',
    'HH_EXP',
    'MYS_MYPOST_ONLINE',
    'TNT_NL',
    'TIPSA',
    'TAQBIN_MY',
    'KGMHUB',
    'INTEXPRESS',
    'OVERSE_EXP',
    'ONECLICK',
    'ROADRUNNER_FREIGHT',
    'GLS_CROTIA',
    'MRW_FTP',
    'BLUEX',
    'DYLT',
    'DPD_IR',
    'SIN_GLBL',
    'TUFFNELLS_REFERENCE',
    'CJPACKET',
    'MILKMAN',
    'ASIGNA',
    'ONEWORLDEXPRESS',
    'ROYAL_MAIL',
    'VIA_EXPRESS',
    'TIGFREIGHT',
    'ZTO_EXPRESS',
    'TWO_GO',
    'IML',
    'INTEL_VALLEY',
    'EFS',
    'UK_UK_MAIL',
    'RAM',
    'ALLIEDEXPRESS',
    'APC_OVERNIGHT',
    'SHIPPIT',
    'TFM',
    'M_XPRESS',
    'HDB_BOX',
    'CLEVY_LINKS',
    'IBEONE',
    'FIEGE_NL',
    'KWE_GLOBAL',
    'CTC_EXPRESS',
    'AMAZON',
    'MORE_LINK',
    'JX',
    'EASY_MAIL',
    'ADUIEPYLE',
    'GB_PANTHER',
    'EXPRESSSALE',
    'SG_DETRACK',
    'TRUNKRS_WEBHOOK',
    'MATDESPATCH',
    'DICOM',
    'MBW',
    'KHM_CAMBODIA_POST',
    'SINOTRANS',
    'BRT_IT_PARCELID',
    'DHL_SUPPLY_CHAIN',
    'DHL_PL',
    'TOPYOU',
    'PALEXPRESS',
    'DHL_SG',
    'CN_WEDO',
    'FULFILLME',
    'DPD_DELISTRACK',
    'UPS_REFERENCE',
    'CARIBOU',
    'LOCUS_WEBHOOK',
    'DSV',
    'P2P_TRC',
    'DIRECTPARCELS',
    'NOVA_POSHTA_INT',
    'FEDEX_POLAND',
    'CN_JCEX',
    'FAR_INTERNATIONAL',
    'IDEXPRESS',
    'GANGBAO',
    'NEWAY',
    'POSTNL_INT_3_S',
    'RPX_ID',
    'DESIGNERTRANSPORT_WEBHOOK',
    'GLS_SLOVEN',
    'PARCELLED_IN',
    'GSI_EXPRESS',
    'CON_WAY',
    'BROUWER_TRANSPORT',
    'CPEX',
    'ISRAEL_POST',
    'DTDC_IN',
    'PTT_POST',
    'XDE_WEBHOOK',
    'TOLOS',
    'GIAO_HANG',
    'GEODIS_ESPACE',
    'MAGYAR_HU',
    'DOORDASH_WEBHOOK',
    'TIKI_ID',
    'CJ_HK_INTERNATIONAL',
    'STAR_TRACK_EXPRESS',
    'HELTHJEM',
    'SFB2C',
    'FREIGHTQUOTE',
    'LANDMARK_GLOBAL_REFERENCE',
    'PARCEL2GO',
    'DELNEXT',
    'RCL',
    'CGS_EXPRESS',
    'HK_POST',
    'SAP_EXPRESS',
    'PARCELPOST_SG',
    'HERMES',
    'IND_SAFEEXPRESS',
    'TOPHATTEREXPRESS',
    'MGLOBAL',
    'AVERITT',
    'LEADER',
    '_2EBOX',
    'SG_SPEEDPOST',
    'DBSCHENKER_SE',
    'ISR_POST_DOMESTIC',
    'BESTWAYPARCEL',
    'ASENDIA_DE',
    'NIGHTLINE_UK',
    'TAQBIN_SG',
    'TCK_EXPRESS',
    'ENDEAVOUR_DELIVERY',
    'NANJINGWOYUAN',
    'HEPPNER_FR',
    'EMPS_CN',
    'FONSEN',
    'PICKRR',
    'APC_OVERNIGHT_CONNUM',
    'STAR_TRACK_NEXT_FLIGHT',
    'DAJIN',
    'UPS_FREIGHT',
    'POSTA_PLUS',
    'CEVA',
    'ANSERX',
    'JS_EXPRESS',
    'PADTF',
    'UPS_MAIL_INNOVATIONS',
    'SYPOST',
    'AMAZON_SHIP_MCF',
    'YUSEN',
    'BRING',
    'SDA_IT',
    'GBA',
    'NEWEGGEXPRESS',
    'SPEEDCOURIERS_GR',
    'FORRUN',
    'PICKUP',
    'ECMS',
    'INTELIPOST',
    'FLASHEXPRESS',
    'CN_STO',
    'SEKO_SFTP',
    'HOME_DELIVERY_SOLUTIONS',
    'DPD_HGRY',
    'KERRYTTC_VN',
    'JOYING_BOX',
    'TOTAL_EXPRESS',
    'ZJS_EXPRESS',
    'STARKEN',
    'DEMANDSHIP',
    'CN_DPEX',
    'AUPOST_CN',
    'LOGISTERS',
    'GOGLOBALPOST',
    'GLS_CZ',
    'PAACK_WEBHOOK',
    'GRAB_WEBHOOK',
    'PARCELPOINT',
    'ICUMULUS',
    'DAIGLOBALTRACK',
    'GLOBAL_IPARCEL',
    'YURTICI_KARGO',
    'CN_PAYPAL_PACKAGE',
    'PARCEL_2_POST',
    'GLS_IT',
    'PIL_LOGISTICS',
    'HEPPNER',
    'GENERAL_OVERNIGHT',
    'HAPPY2POINT',
    'CHITCHATS',
    'SMOOTH',
    'CLE_LOGISTICS',
    'FIEGE',
    'MX_CARGO',
    'ZIINGFINALMILE',
    'DAYTON_FREIGHT',
    'TCS',
    'AEX',
    'HERMES_DE',
    'ROUTIFIC_WEBHOOK',
    'GLOBAVEND',
    'CJ_LOGISTICS',
    'PALLET_NETWORK',
    'RAF_PH',
    'UK_XDP',
    'PAPER_EXPRESS',
    'LA_POSTE_SUIVI',
    'PAQUETEXPRESS',
    'LIEFERY',
    'STRECK_TRANSPORT',
    'PONY_EXPRESS',
    'ALWAYS_EXPRESS',
    'GBS_BROKER',
    'CITYLINK_MY',
    'ALLJOY',
    'YODEL',
    'YODEL_DIR',
    'STONE3PL',
    'PARCELPAL_WEBHOOK',
    'DHL_ECOMERCE_ASA',
    'SIMPLYPOST',
    'KY_EXPRESS',
    'SHENZHEN',
    'US_LASERSHIP',
    'UC_EXPRE',
    'DIDADI',
    'CJ_KR',
    'DBSCHENKER_B2B',
    'MXE',
    'CAE_DELIVERS',
    'PFCEXPRESS',
    'WHISTL',
    'WEPOST',
    'DHL_PARCEL_ES',
    'DDEXPRESS',
    'ARAMEX_AU',
    'BNEED',
    'HK_TGX',
    'LATVIJAS_PASTS',
    'VIAEUROPE',
    'CORREO_UY',
    'CHRONOPOST_FR',
    'J_NET',
    '_6LS',
    'BLR_BELPOST',
    'BIRDSYSTEM',
    'DOBROPOST',
    'WAHANA_ID',
    'WEASHIP',
    'SONICTL',
    'KWT',
    'AFLLOG_FTP',
    'SKYNET_WORLDWIDE',
    'NOVA_POSHTA',
    'SEINO',
    'SZENDEX',
    'BPOST_INT',
    'DBSCHENKER_SV',
    'AO_DEUTSCHLAND',
    'EU_FLEET_SOLUTIONS',
    'PCFCORP',
    'LINKBRIDGE',
    'PRIMAMULTICIPTA',
    'COUREX',
    'ZAJIL_EXPRESS',
    'COLLECTCO',
    'JTEXPRESS',
    'FEDEX_UK',
    'USHIP',
    'PIXSELL',
    'SHIPTOR',
    'CDEK',
    'VNM_VIETTELPOST',
    'CJ_CENTURY',
    'GSO',
    'VIWO',
    'SKYBOX',
    'KERRYTJ',
    'NTLOGISTICS_VN',
    'SDH_SCM',
    'ZINC',
    'DPE_SOUTH_AFRC',
    'CESKA_CZ',
    'ACS_GR',
    'DEALERSEND',
    'JOCOM',
    'CSE',
    'TFORCE_FINALMILE',
    'SHIP_GATE',
    'SHIPTER',
    'NATIONAL_SAMEDAY',
    'YUNEXPRESS',
    'CAINIAO',
    'DMS_MATRIX',
    'DIRECTLOG',
    'ASENDIA_US',
    '_3JMSLOGISTICS',
    'LICCARDI_EXPRESS',
    'SKY_POSTAL',
    'CNWANGTONG',
    'POSTNORD_LOGISTICS_DK',
    'LOGISTIKA',
    'CELERITAS',
    'PRESSIODE',
    'SHREE_MARUTI',
    'LOGISTICSWORLDWIDE_HK',
    'EFEX',
    'LOTTE',
    'LONESTAR',
    'APRISAEXPRESS',
    'BEL_RS',
    'OSM_WORLDWIDE',
    'WESTGATE_GL',
    'FASTRACK',
    'DTD_EXPR',
    'ALFATREX',
    'PROMEDDELIVERY',
    'THABIT_LOGISTICS',
    'HCT_LOGISTICS',
    'CARRY_FLAP',
    'US_OLD_DOMINION',
    'ANICAM_BOX',
    'WANBEXPRESS',
    'AN_POST',
    'DPD_LOCAL',
    'STALLIONEXPRESS',
    'RAIDEREX',
    'SHOPFANS',
    'KYUNGDONG_PARCEL',
    'CHAMPION_LOGISTICS',
    'PICKUPP_SGP',
    'MORNING_EXPRESS',
    'NACEX',
    'THENILE_WEBHOOK',
    'HOLISOL',
    'LBCEXPRESS_FTP',
    'KURASI',
    'USF_REDDAWAY',
    'APG',
    'CN_BOXC',
    'ECOSCOOTING',
    'MAINWAY',
    'PAPERFLY',
    'HOUNDEXPRESS',
    'BOX_BERRY',
    'EP_BOX',
    'PLUS_LOG_UK',
    'FULFILLA',
    'ASE',
    'MAIL_PLUS',
    'XPO_LOGISTICS',
    'WNDIRECT',
    'CLOUDWISH_ASIA',
    'ZELERIS',
    'GIO_EXPRESS',
    'OCS_WORLDWIDE',
    'ARK_LOGISTICS',
    'AQUILINE',
    'PILOT_FREIGHT',
    'QWINTRY',
    'DANSKE_FRAGT',
    'CARRIERS',
    'AIR_CANADA_GLOBAL',
    'PRESIDENT_TRANS',
    'STEPFORWARDFS',
    'SKYNET_UK',
    'PITTOHIO',
    'CORREOS_EXPRESS',
    'RL_US',
    'DESTINY',
    'UK_YODEL',
    'COMET_TECH',
    'DHL_PARCEL_RU',
    'TNT_REFR',
    'SHREE_ANJANI_COURIER',
    'MIKROPAKKET_BE',
    'ETS_EXPRESS',
    'COLIS_PRIVE',
    'CN_YUNDA',
    'AAA_COOPER',
    'ROCKET_PARCEL',
    '_360LION',
    'PANDU',
    'PROFESSIONAL_COURIERS',
    'FLYTEXPRESS',
    'LOGISTICSWORLDWIDE_MY',
    'CORREOS_DE_ESPANA',
    'IMX',
    'FOUR_PX_EXPRESS',
    'XPRESSBEES',
    'PICKUPP_VNM',
    'STARTRACK_EXPRESS',
    'FR_COLISSIMO',
    'NACEX_SPAIN_REFERENCE',
    'DHL_SUPPLY_CHAIN_AU',
    'ESHIPPING',
    'SHREETIRUPATI',
    'HX_EXPRESS',
    'INDOPAKET',
    'CN_17POST',
    'K1_EXPRESS',
    'CJ_GLS',
    'MYS_GDEX',
    'NATIONEX',
    'ANJUN',
    'FARGOOD',
    'SMG_EXPRESS',
    'RZYEXPRESS',
    'SEFL',
    'TNT_CLICK_IT',
    'HDB',
    'HIPSHIPPER',
    'RPXLOGISTICS',
    'KUEHNE',
    'IT_NEXIVE',
    'PTS',
    'SWISS_POST_FTP',
    'FASTRK_SERV',
    '_4_72',
    'US_YRC',
    'POSTNL_INTL_3S',
    'ELIAN_POST',
    'CUBYN',
    'SAU_SAUDI_POST',
    'ABXEXPRESS_MY',
    'HUAHAN_EXPRESS',
    'ZES_EXPRESS',
    'ZEPTO_EXPRESS',
    'SKYNET_ZA',
    'ZEEK_2_DOOR',
    'BLINKLASTMILE',
    'POSTA_UKR',
    'CHROBINSON',
    'CN_POST56',
    'COURANT_PLUS',
    'SCUDEX_EXPRESS',
    'SHIPENTEGRA',
    'B_TWO_C_EUROPE',
    'COPE',
    'IND_GATI',
    'CN_WISHPOST',
    'NACEX_ES',
    'TAQBIN_HK',
    'GLOBALTRANZ',
    'HKD',
    'BJSHOMEDELIVERY',
    'OMNIVA',
    'SUTTON',
    'PANTHER_REFERENCE',
    'SFCSERVICE',
    'LTL',
    'PARKNPARCEL',
    'SPRING_GDS',
    'ECEXPRESS',
    'INTERPARCEL_AU',
    'AGILITY',
    'XL_EXPRESS',
    'ADERONLINE',
    'DIRECTCOURIERS',
    'PLANZER',
    'SENDING',
    'NINJAVAN_WB',
    'NATIONWIDE_MY',
    'SENDIT',
    'GB_ARROW',
    'IND_GOJAVAS',
    'KPOST',
    'DHL_FREIGHT',
    'BLUECARE',
    'JINDOUYUN',
    'TRACKON',
    'GB_TUFFNELLS',
    'TRUMPCARD',
    'ETOTAL',
    'SFPLUS_WEBHOOK',
    'SEKOLOGISTICS',
    'HERMES_2MANN_HANDLING',
    'DPD_LOCAL_REF',
    'UDS',
    'ZA_SPECIALISED_FREIGHT',
    'THA_KERRY',
    'PRT_INT_SEUR',
    'BRA_CORREIOS',
    'NZ_NZ_POST',
    'CN_EQUICK',
    'MYS_EMS',
    'GB_NORSK',
    'ESP_MRW',
    'ESP_PACKLINK',
    'KANGAROO_MY',
    'RPX',
    'XDP_UK_REFERENCE',
    'NINJAVAN_MY',
    'ADICIONAL',
    'ROADBULL',
    'YAKIT',
    'MAILAMERICAS',
    'MIKROPAKKET',
    'DYNALOGIC',
    'DHL_ES',
    'DHL_PARCEL_NL',
    'DHL_GLOBAL_MAIL_ASIA',
    'DAWN_WING',
    'GENIKI_GR',
    'HERMESWORLD_UK',
    'ALPHAFAST',
    'BUYLOGIC',
    'EKART',
    'MEX_SENDA',
    'SFC_LOGISTICS',
    'POST_SERBIA',
    'IND_DELHIVERY',
    'DE_DPD_DELISTRACK',
    'RPD2MAN',
    'CN_SF_EXPRESS',
    'YANWEN',
    'MYS_SKYNET',
    'CORREOS_DE_MEXICO',
    'CBL_LOGISTICA',
    'MEX_ESTAFETA',
    'AU_AUSTRIAN_POST',
    'RINCOS',
    'NLD_DHL',
    'RUSSIAN_POST',
    'COURIERS_PLEASE',
    'POSTNORD_LOGISTICS',
    'FEDEX',
    'DPE_EXPRESS',
    'DPD',
    'ADSONE',
    'IDN_JNE',
    'THECOURIERGUY',
    'CNEXPS',
    'PRT_CHRONOPOST',
    'LANDMARK_GLOBAL',
    'IT_DHL_ECOMMERCE',
    'ESP_NACEX',
    'PRT_CTT',
    'BE_KIALA',
    'ASENDIA_UK',
    'GLOBAL_TNT',
    'POSTUR_IS',
    'EPARCEL_KR',
    'INPOST_PACZKOMATY',
    'IT_POSTE_ITALIA',
    'BE_BPOST',
    'PL_POCZTA_POLSKA',
    'MYS_MYS_POST',
    'SG_SG_POST',
    'THA_THAILAND_POST',
    'LEXSHIP',
    'FASTWAY_NZ',
    'DHL_AU',
    'COSTMETICSNOW',
    'PFLOGISTICS',
    'LOOMIS_EXPRESS',
    'GLS_ITALY',
    'LINE',
    'GEL_EXPRESS',
    'HUODULL',
    'NINJAVAN_SG',
    'JANIO',
    'AO_COURIER',
    'BRT_IT_SENDER_REF',
    'SAILPOST',
    'LALAMOVE',
    'NEWZEALAND_COURIERS',
    'ETOMARS',
    'VIRTRANSPORT',
    'WIZMO',
    'PALLETWAYS',
    'I_DIKA',
    'CFL_LOGISTICS',
    'GEMWORLDWIDE',
    'GLOBAL_EXPRESS',
    'LOGISTYX_TRANSGROUP',
    'WESTBANK_COURIER',
    'ARCO_SPEDIZIONI',
    'YDH_EXPRESS',
    'PARCELINKLOGISTICS',
    'CNDEXPRESS',
    'NOX_NIGHT_TIME_EXPRESS',
    'AERONET',
    'LTIANEXP',
    'INTEGRA2_FTP',
    'PARCELONE',
    'NOX_NACHTEXPRESS',
    'CN_CHINA_POST_EMS',
    'CHUKOU1',
    'GLS_SLOV',
    'ORANGE_DS',
    'JOOM_LOGIS',
    'AUS_STARTRACK',
    'DHL',
    'GB_APC',
    'BONDSCOURIERS',
    'JPN_JAPAN_POST',
    'USPS',
    'WINIT',
    'ARG_OCA',
    'TW_TAIWAN_POST',
    'DMM_NETWORK',
    'TNT',
    'BH_POSTA',
    'SWE_POSTNORD',
    'CA_CANADA_POST',
    'WISELOADS',
    'ASENDIA_HK',
    'NLD_GLS',
    'MEX_REDPACK',
    'JET_SHIP',
    'DE_DHL_EXPRESS',
    'NINJAVAN_THAI',
    'RABEN_GROUP',
    'ESP_ASM',
    'HRV_HRVATSKA',
    'GLOBAL_ESTES',
    'LTU_LIETUVOS',
    'BEL_DHL',
    'AU_AU_POST',
    'SPEEDEXCOURIER',
    'FR_COLIS',
    'ARAMEX',
    'DPEX',
    'MYS_AIRPAK',
    'CUCKOOEXPRESS',
    'DPD_POLAND',
    'NLD_POSTNL',
    'NIM_EXPRESS',
    'QUANTIUM',
    'SENDLE',
    'ESP_REDUR',
    'MATKAHUOLTO',
    'CPACKET',
    'POSTI',
    'HUNTER_EXPRESS',
    'CHOIR_EXP',
    'LEGION_EXPRESS',
    'AUSTRIAN_POST_EXPRESS',
    'GRUPO',
    'POSTA_RO',
    'INTERPARCEL_UK',
    'GLOBAL_ABF',
    'POSTEN_NORGE',
    'XPERT_DELIVERY',
    'DHL_REFR',
    'DHL_HK',
    'SKYNET_UAE',
    'GOJEK',
    'YODEL_INTNL',
    'JANCO',
    'YTO',
    'WISE_EXPRESS',
    'JTEXPRESS_VN',
    'FEDEX_INTL_MLSERV',
    'VAMOX',
    'AMS_GRP',
    'DHL_JP',
    'HRPARCEL',
    'GESWL',
    'BLUESTAR',
    'CDEK_TR',
    'DESCARTES',
    'DELTEC_UK',
    'DTDC_EXPRESS',
    'TOURLINE',
    'BH_WORLDWIDE',
    'OCS',
    'YINGNUO_LOGISTICS',
    'UPS',
    'TOLL',
    'PRT_SEUR',
    'DTDC_AU',
    'THA_DYNAMIC_LOGISTICS',
    'UBI_LOGISTICS',
    'FEDEX_CROSSBORDER',
    'A1POST',
    'TAZMANIAN_FREIGHT',
    'CJ_INT_MY',
    'SAIA_FREIGHT',
    'SG_QXPRESS',
    'NHANS_SOLUTIONS',
    'DPD_FR',
    'COORDINADORA',
    'ANDREANI',
    'DOORA',
    'INTERPARCEL_NZ',
    'PHL_JAMEXPRESS',
    'BEL_BELGIUM_POST',
    'US_APC',
    'IDN_POS',
    'FR_MONDIAL',
    'DE_DHL',
    'HK_RPX',
    'DHL_PIECEID',
    'VNPOST_EMS',
    'RRDONNELLEY',
    'DPD_DE',
    'DELCART_IN',
    'IMEXGLOBALSOLUTIONS',
    'ACOMMERCE',
    'EURODIS',
    'CANPAR',
    'GLS',
    'IND_ECOM',
    'ESP_ENVIALIA',
    'DHL_UK',
    'SMSA_EXPRESS',
    'TNT_FR',
    'DEX_I',
    'BUDBEE_WEBHOOK',
    'COPA_COURIER',
    'VNM_VIETNAM_POST',
    'DPD_HK',
    'TOLL_NZ',
    'ECHO',
    'FEDEX_FR',
    'BORDEREXPRESS',
    'MAILPLUS_JPN',
    'TNT_UK_REFR',
    'KEC',
    'DPD_RO',
    'TNT_JP',
    'TH_CJ',
    'EC_CN',
    'FASTWAY_UK',
    'FASTWAY_US',
    'GLS_DE',
    'GLS_ES',
    'GLS_FR',
    'MONDIAL_BE',
    'SGT_IT',
    'TNT_CN',
    'TNT_DE',
    'TNT_ES',
    'TNT_PL',
    'PARCELFORCE',
    'SWISS_POST',
    'TOLL_IPEC',
    'AIR_21',
    'AIRSPEED',
    'BERT',
    'BLUEDART',
    'COLLECTPLUS',
    'COURIERPLUS',
    'COURIER_POST',
    'DHL_GLOBAL_MAIL',
    'DPD_UK',
    'DELTEC_DE',
    'DEUTSCHE_DE',
    'DOTZOT',
    'ELTA_GR',
    'EMS_CN',
    'ECARGO',
    'ENSENDA',
    'FERCAM_IT',
    'FASTWAY_ZA',
    'FASTWAY_AU',
    'FIRST_LOGISITCS',
    'GEODIS',
    'GLOBEGISTICS',
    'GREYHOUND',
    'JETSHIP_MY',
    'LION_PARCEL',
    'AEROFLASH',
    'ONTRAC',
    'SAGAWA',
    'SIODEMKA',
    'STARTRACK',
    'TNT_AU',
    'TNT_IT',
    'TRANSMISSION',
    'YAMATO',
    'DHL_IT',
    'DHL_AT',
    'LOGISTICSWORLDWIDE_KR',
    'GLS_SPAIN',
    'AMAZON_UK_API',
    'DPD_FR_REFERENCE',
    'DHLPARCEL_UK',
    'MEGASAVE',
    'QUALITYPOST',
    'IDS_LOGISTICS',
    'JOYINGBOX',
    'PANTHER_ORDER_NUMBER',
    'WATKINS_SHEPARD',
    'FASTTRACK',
    'UP_EXPRESS',
    'ELOGISTICA',
    'ECOURIER',
    'CJ_PHILIPPINES',
    'SPEEDEX',
    'ORANGECONNEX',
    'TECOR',
    'SAEE',
    'GLS_ITALY_FTP',
    'DELIVERE',
    'YYCOM',
    'ADICIONAL_PT',
    'DKSH',
    'NIPPON_EXPRESS_FTP',
    'GOLS',
    'FUJEXP',
    'QTRACK',
    'OMLOGISTICS_API',
    'GDPHARM',
    'MISUMI_CN',
    'AIR_CANADA',
    'CITY56_WEBHOOK',
    'SAGAWA_API',
    'KEDAEX',
    'PGEON_API',
    'WEWORLDEXPRESS',
    'JT_LOGISTICS',
    'TRUSK',
    'VIAXPRESS',
    'DHL_SUPPLYCHAIN_ID',
    'ZUELLIGPHARMA_SFTP',
    'MEEST',
    'TOLL_PRIORITY',
    'MOTHERSHIP_API',
    'CAPITAL',
    'EUROPAKET_API',
    'HFD',
    'TOURLINE_REFERENCE',
    'GIO_ECOURIER',
    'CN_LOGISTICS',
    'PANDION',
    'BPOST_API',
    'PASSPORTSHIPPING',
    'PAKAJO',
    'DACHSER',
    'YUSEN_SFTP',
    'SHYPLITE',
    'XYY',
    'MWD',
    'FAXECARGO',
    'MAZET',
    'FIRST_LOGISTICS_API',
    'SPRINT_PACK',
    'HERMES_DE_FTP',
    'CONCISE',
    'KERRY_EXPRESS_TW_API',
    'EWE',
    'FASTDESPATCH',
    'ABCUSTOM_SFTP',
    'CHAZKI',
    'SHIPPIE',
    'GEODIS_API',
    'NAQEL_EXPRESS',
    'PAPA_WEBHOOK',
    'FORWARDAIR',
    'DIALOGO_LOGISTICA_API',
    'LALAMOVE_API',
    'TOMYDOOR',
    'KRONOS_WEBHOOK',
    'JTCARGO',
    'T_CAT',
    'CONCISE_WEBHOOK',
    'TELEPORT_WEBHOOK',
    'CUSTOMCO_API',
    'SPX_TH',
    'BOLLORE_LOGISTICS',
    'CLICKLINK_SFTP',
    'M3LOGISTICS',
    'VNPOST_API',
    'AXLEHIRE_FTP',
    'SHADOWFAX',
    'MYHERMES_UK_API',
    'DAIICHI',
    'MENSAJEROSURBANOS_API',
    'POLARSPEED',
    'IDEXPRESS_ID',
    'PAYO',
    'WHISTL_SFTP',
    'INTEX_DE',
    'TRANS2U',
    'PRODUCTCAREGROUP_SFTP',
    'BIGSMART',
    'EXPEDITORS_API_REF',
    'AITWORLDWIDE_API',
    'WORLDCOURIER',
    'QUIQUP',
    'AGEDISS_SFTP',
    'ANDREANI_API',
    'CRLEXPRESS',
    'SMARTCAT',
    'CROSSFLIGHT',
    'PROCARRIER',
    'DHL_REFERENCE_API',
    'SEINO_API',
    'WSPEXPRESS',
    'KRONOS',
    'TOTAL_EXPRESS_API',
    'PARCLL',
    'XPEDIGO',
    'STAR_TRACK_WEBHOOK',
    'GPOST',
    'UCS',
    'DMFGROUP',
    'COORDINADORA_API',
    'MARKEN',
    'NTL',
    'REDJEPAKKETJE',
    'ALLIED_EXPRESS_FTP',
    'MONDIALRELAY_ES',
    'NAEKO_FTP',
    'MHI',
    'SHIPPIFY',
    'MALCA_AMIT_API',
    'JTEXPRESS_SG_API',
    'DACHSER_WEB',
    'FLIGHTLG',
    'CAGO',
    'COM1EXPRESS',
    'TONAMI_FTP',
    'PACKFLEET',
    'PUROLATOR_INTERNATIONAL',
    'WINESHIPPING_WEBHOOK',
    'DHL_ES_SFTP',
    'PCHOME_API',
    'CESKAPOSTA_API',
    'GORUSH',
    'HOMERUNNER',
    'AMAZON_ORDER',
    'EFWNOW_API',
    'CBL_LOGISTICA_API',
    'NIMBUSPOST',
    'LOGWIN_LOGISTICS',
    'NOWLOG_API',
    'DPD_NL',
    'GODEPENDABLE',
    'ESDEX',
    'LOGISYSTEMS_SFTP',
    'EXPEDITORS',
    'SNTGLOBAL_API',
    'SHIPX',
    'QINTL_API',
    'PACKS',
    'POSTNL_INTERNATIONAL',
    'AMAZON_EMAIL_PUSH',
    'DHL_API',
    'SPX',
    'AXLEHIRE',
    'ICSCOURIER',
    'DIALOGO_LOGISTICA',
    'SHUNBANG_EXPRESS',
    'TCS_API',
    'SF_EXPRESS_CN',
    'PACKETA',
    'SIC_TELIWAY',
    'MONDIALRELAY_FR',
    'INTIME_FTP',
    'JD_EXPRESS',
    'FASTBOX',
    'PATHEON',
    'INDIA_POST',
    'TIPSA_REF',
    'ECOFREIGHT',
    'VOX',
    'DIRECTFREIGHT_AU_REF',
    'BESTTRANSPORT_SFTP',
    'AUSTRALIA_POST_API',
    'FRAGILEPAK_SFTP',
    'FLIPXP',
    'VALUE_WEBHOOK',
    'DAESHIN',
    'SHERPA',
    'MWD_API',
    'SMARTKARGO',
    'DNJ_EXPRESS',
    'GOPEOPLE',
    'MYSENDLE_API',
    'ARAMEX_API',
    'PIDGE',
    'THAIPARCELS',
    'PANTHER_REFERENCE_API',
    'POSTAPLUS',
    'BUFFALO',
    'U_ENVIOS',
    'ELITE_CO',
    'ROCHE_INTERNAL_SFTP',
    'DBSCHENKER_ICELAND',
    'TNT_FR_REFERENCE',
    'NEWGISTICSAPI',
    'GLOVO',
    'GWLOGIS_API',
    'SPREETAIL_API',
    'MOOVA',
    'PLYCONGROUP',
    'USPS_WEBHOOK',
    'REIMAGINEDELIVERY',
    'EDF_FTP',
    'DAO365',
    'BIOCAIR_FTP',
    'RANSA_WEBHOOK',
    'SHIPXPRES',
    'COURANT_PLUS_API',
    'SHIPA',
    'HOMELOGISTICS',
    'DX',
    'POSTE_ITALIANE_PACCOCELERE',
    'TOLL_WEBHOOK',
    'LCTBR_API',
    'DX_FREIGHT',
    'DHL_SFTP',
    'SHIPROCKET',
    'UBER_WEBHOOK',
    'STATOVERNIGHT',
    'BURD',
    'FASTSHIP',
    'IBVENTURE_WEBHOOK',
    'GATI_KWE_API',
    'CRYOPDP_FTP',
    'HUBBED',
    'TIPSA_API',
    'ARASKARGO',
    'THIJS_NL',
    'ATSHEALTHCARE_REFERENCE',
    '99MINUTOS',
    'HELLENIC_POST',
    'HSM_GLOBAL',
    'MNX',
    'NMTRANSFER',
    'LOGYSTO',
    'INDIA_POST_INT',
    'AMAZON_FBA_SWISHIP_IN',
    'SRT_TRANSPORT',
    'BOMI',
    'DELIVERR_SFTP',
    'HSDEXPRESS',
    'SIMPLETIRE_WEBHOOK',
    'HUNTER_EXPRESS_SFTP',
    'UPS_API',
    'WOOYOUNG_LOGISTICS_SFTP',
    'PHSE_API',
    'WISH_EMAIL_PUSH',
    'NORTHLINE',
    'MEDAFRICA',
    'DPD_AT_SFTP',
    'ANTERAJA',
    'DHL_GLOBAL_FORWARDING_API',
    'LBCEXPRESS_API',
    'SIMSGLOBAL',
    'CDLDELIVERS',
    'TYP',
    'TESTING_COURIER_WEBHOOK',
    'PANDAGO_API',
    'ROYAL_MAIL_FTP',
    'THUNDEREXPRESS',
    'SECRETLAB_WEBHOOK',
    'SETEL',
    'JD_WORLDWIDE',
    'DPD_RU_API',
    'ARGENTS_WEBHOOK',
    'POSTONE',
    'TUSKLOGISTICS',
    'RHENUS_UK_API',
    'TAQBIN_SG_API',
    'INNTRALOG_SFTP',
    'DAYROSS',
    'CORREOSEXPRESS_API',
    'INTERNATIONAL_SEUR_API',
    'YODEL_API',
    'HEROEXPRESS',
    'DHL_SUPPLYCHAIN_IN',
    'URGENT_CARGUS',
    'FRONTDOORCORP',
    'JTEXPRESS_PH',
    'PARCELSTARS_WEBHOOK',
    'DPD_SK_SFTP',
    'MOVIANTO',
    'OZEPARTS_SHIPPING',
    'KARGOMKOLAY',
    'TRUNKRS',
    'OMNIRPS_WEBHOOK',
    'CHILEXPRESS',
    'TESTING_COURIER',
    'JNE_API',
    'BJSHOMEDELIVERY_FTP',
    'DEXPRESS_WEBHOOK',
    'USPS_API',
    'TRANSVIRTUAL',
    'SOLISTICA_API',
    'CHIENVENTURE_WEBHOOK',
    'DPD_UK_SFTP',
    'INPOST_UK',
    'JAVIT',
    'ZTO_DOMESTIC',
    'DHL_GT_API',
    'CEVA_TRACKING',
    'KOMON_EXPRESS',
    'EASTWESTCOURIER_FTP',
    'DANNIAO',
    'SPECTRAN',
    'DELIVER_IT',
    'RELAISCOLIS',
    'GLS_SPAIN_API',
    'POSTPLUS',
    'AIRTERRA',
    'GIO_ECOURIER_API',
    'DPD_CH_SFTP',
    'FEDEX_API',
    'INTERSMARTTRANS',
    'HERMES_UK_SFTP',
    'EXELOT_FTP',
    'DHL_PA_API',
    'VIRTRANSPORT_SFTP',
    'WORLDNET',
    'INSTABOX_WEBHOOK',
    'KNG',
    'FLASHEXPRESS_WEBHOOK',
    'MAGYAR_POSTA_API',
    'WESHIP_API',
    'OHI_WEBHOOK',
    'MUDITA',
    'BLUEDART_API',
    'T_CAT_API',
    'ADS',
    'HERMES_IT',
    'FITZMARK_API',
    'POSTI_API',
    'SMSA_EXPRESS_WEBHOOK',
    'TAMERGROUP_WEBHOOK',
    'LIVRAPIDE',
    'NIPPON_EXPRESS',
    'BETTERTRUCKS',
    'FAN',
    'PB_USPSFLATS_FTP',
    'PARCELRIGHT',
    'ITHINKLOGISTICS',
    'KERRY_EXPRESS_TH_WEBHOOK',
    'ECOUTIER',
    'SHOWL',
    'BRT_IT_API',
    'RIXONHK_API',
    'DBSCHENKER_API',
    'ILYANGLOGIS',
    'MAIL_BOX_ETC',
    'WESHIP',
    'DHL_GLOBAL_MAIL_API',
    'ACTIVOS24_API',
    'ATSHEALTHCARE',
    'LUWJISTIK',
    'GW_WORLD',
    'FAIRSENDEN_API',
    'SERVIP_WEBHOOK',
    'SWISHIP',
    'TANET',
    'HOTSIN_CARGO',
    'DIREX',
    'HUANTONG',
    'IMILE_API',
    'AUEXPRESS',
    'NYTLOGISTICS',
    'DSV_REFERENCE',
    'NOVOFARMA_WEBHOOK',
    'AITWORLDWIDE_SFTP',
    'SHOPOLIVE',
    'FNF_ZA',
    'DHL_ECOMMERCE_GC',
    'FETCHR',
    'STARLINKS_API',
    'YYEXPRESS',
    'SERVIENTREGA',
    'HANJIN',
    'SPANISH_SEUR_FTP',
    'DX_B2B_CONNUM',
    'HELTHJEM_API',
    'INEXPOST',
    'A2B_BA',
    'RHENUS_GROUP',
    'SBERLOGISTICS_RU',
    'MALCA_AMIT',
    'PPL',
    'OSM_WORLDWIDE_SFTP',
    'ACILOGISTIX',
    'OPTIMACOURIER',
    'NOVA_POSHTA_API',
    'LOGGI',
    'YIFAN',
    'MYDYNALOGIC',
    'MORNINGLOBAL',
    'CONCISE_API',
    'FXTRAN',
    'DELIVERYOURPARCEL_ZA',
    'UPARCEL',
    'MOBI_BR',
    'LOGINEXT_WEBHOOK',
    'EMS',
    'SPEEDY',
    'ZOOM_RED',
    'NAVLUNGO',
    'CASTLEPARCELS',
    'WEEE',
    'PACKALY',
    'YUNHUIPOST',
    'YOUPARCEL',
    'LEMAN',
    'MOOVIN',
    'URB_IT',
    'MULTIENTREGAPANAMA',
    'JUSDASR',
    'DISCOUNTPOST',
    'RHENUS_UK',
    'SWISHIP_JP',
    'GLS_US',
    'SMTL',
    'EMEGA',
    'EXPRESSONE_SV',
    'HEPSIJET',
    'WELIVERY',
    'BRINGER',
    'EASYROUTES',
    'MRW',
    'RPM',
    'DPD_PRT',
    'GLS_ROMANIA',
    'LMPARCEL',
    'GTAGSM',
    'DOMINO',
    'ESHIPPER',
    'TRANSPAK',
    'XINDUS',
    'AOYUE',
    'EASYPARCEL',
    'EXPRESSONE',
    'SENDEO_KARGO',
    'SPEEDAF',
    'ETOWER',
    'GCX',
    'NINJAVAN_VN',
    'ALLEGRO',
    'JUMPPOINT',
    'SHIPGLOBAL_US',
    'KINISI',
    'OAKH',
    'AWEST',
    'BARSAN',
    'ENERGOLOGISTIC',
    'MADROOEX',
    'GOBOLT',
    'SWISS_UNIVERSAL_EXPRESS',
    'IORDIRECT',
    'XMSZM',
    'GLS_HUN',
    'SENDY',
    'BRAUNSEXPRESS',
    'GRANDSLAMEXPRESS',
    'XGS',
    'OTSCHILE',
    'PACK_UP',
    'PARCELSTARS',
    'TEAMEXPRESSLLC',
    'ASYADEXPRESS',
    'TDN',
    'EARLYBIRD',
    'CACESA',
    'PARCELJET',
    'MNG_KARGO',
    'SUPERPACKLINE',
    'SPEEDX',
    'VESYL',
    'SKYKING',
    'DIRMENSAJERIA',
    'NETLOGIXGROUP',
    'ZYOU',
    'JAWAR',
    'AGSYSTEMS',
    'GPS',
    'PTT_KARGO',
    'MAERGO',
    'ARIHANTCOURIER',
    'VTFE',
    'YUNANT',
    'URBIFY',
    'PACK_MAN',
    'LIEFERGRUN',
    'OBIBOX',
    'PAIKEDA',
    'SCOTTY',
    'INTELCOM_CA',
    'SWE',
    'ASENDIA',
    'DPD_AT',
    'RELAY',
    'ATA',
    'SKYEXPRESS_INTERNATIONAL',
    'SURAT_KARGO',
    'SGLINK',
    'FLEETOPTICSINC',
    'SHOPLINE',
    'PIGGYSHIP',
    'LOGOIX',
    'KOLAY_GELSIN',
    'ASSOCIATED_COURIERS',
    'UPS_CHECKER',
    'WINESHIPPING',
    'SPEDISCI',
    'FOURKITES',
    'ETONAS',
    'FINMILE',
    'UNIUNI',
    'RODONAVES',
    'INPOST_IT',
    'TFORCE_FREIGHT',
    'RICHMOM',
    'FRANCO',
    'ECPARCEL',
    'FEDEX_CHINA',
    'GOFO_EXPRESS',
    'SHIPBOB',
    'JERSEYPOST_ATLAS',
    'CORETRAILS',
    'RHENUS_ITALY',
    'JADLOG',
    'JITSU',
    'YANWEN_EXPRESS',
    'DASHLINK',
    'SEINO_SUPER_EXPRESS',
    'FLOSHIP',
    'METROSCG',
    'SENDPARCEL',
    'P2P',
    'CN_EXPRESS',
    'CIRROTRACK',
    'LAND_LOGISTICS',
    'VEHO',
    'MEDLINE',
    'VDTRACK',
    'SINO_SCM',
    '3PE_EXPRESS',
    'SWIFTX',
    'SFYDEXPRESS',
    'TOPTRANS',
    'OTHER',
  ])
  .openapi({
    title: 'carrier',
    description:
      'The carrier for the shipment. Some carriers have a global version as well as local subsidiaries. The subsidiaries are repeated over many countries and might also have an entry in the global list. Choose the carrier for your country. If the carrier is not available for your country, choose the global version of the carrier. If your carrier name is not in the list, set `carrier` to `OTHER` and set carrier name in `carrier_name_other`. For allowed values, see <a href="/docs/tracking/reference/carriers/">Carriers</a>.',
  })
  .openapi('ShipmentCarrier')

const ShipmentTrackerSchema = z
  .object({
    tracking_number: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(64)
      .openapi({
        description: 'The tracking number for the shipment. This property supports Unicode.',
      }),
    carrier: ShipmentCarrierSchema,
    carrier_name_other: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({
        description:
          'The name of the carrier for the shipment. Provide this value only if the carrier parameter is OTHER. This property supports Unicode.',
      }),
  })
  .openapi({
    title: 'tracker',
    description: 'The tracking information for a shipment.',
    required: ['tracking_number', 'carrier'],
  })
  .openapi('ShipmentTracker')

const OrderTrackerRequestSchema = ShipmentTrackerSchema.and(
  z
    .object({
      capture_id: z
        .string()
        .regex(/^[a-zA-Z0-9]*$/)
        .min(1)
        .max(50)
        .openapi({ description: 'The PayPal capture ID.' }),
      notify_payer: z
        .boolean()
        .default(false)
        .exactOptional()
        .openapi({
          description:
            "If true, PayPal will send an email notification to the payer of the PayPal transaction. The email contains the tracking details provided through the Orders tracking API request. Independent of any value passed for `notify_payer`, the payer may receive tracking notifications within the PayPal app, based on the user's notification preferences.",
        }),
      items: z
        .array(
          TrackerItemSchema.and(
            z.any().openapi({ title: 'tracker_item', description: 'Items in a shipment.' }),
          ),
        )
        .min(0)
        .max(32767)
        .exactOptional()
        .openapi({ description: 'An array of details of items in the shipment.' }),
    })
    .openapi({
      title: 'tracker_request',
      description: 'The tracking details of an order.',
      required: ['capture_id'],
    }),
)
  .openapi({ title: 'tracker_request', description: 'The tracking details of an order.' })
  .openapi('OrderTrackerRequest')

const OrderUpdateCallbackRequestSchema = z
  .object({
    id: z
      .string()
      .regex(/^[A-Z0-9-]+$/)
      .min(1)
      .max(36)
      .exactOptional()
      .openapi({ description: 'The ID of the order.', readOnly: true }),
    shipping_address: AddressPortableSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .union([
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_line_1')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_line_1'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_line_2')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_line_2'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_line_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_line_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_3')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_3'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'admin_area_4')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['admin_area_4'] }),
                z
                  .unknown()
                  .superRefine((val, ctx) => {
                    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                      if (!Object.hasOwn(val, 'address_details')) {
                        ctx.addIssue({ code: 'custom' })
                      }
                    }
                  })
                  .openapi({ required: ['address_details'] }),
              ])
              .safeParse(val).success,
        )
        .openapi({
          description:
            'Redacted shipping address to be used for shipping options and tax calculations.',
        }),
    ).exactOptional(),
    shipping_option: ShippingOptionSchema.and(
      z
        .any()
        .refine(
          (val) =>
            !z
              .unknown()
              .superRefine((val, ctx) => {
                if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                  if (!Object.hasOwn(val, 'selected')) {
                    ctx.addIssue({ code: 'custom' })
                  }
                }
              })
              .openapi({ required: ['selected'] })
              .safeParse(val).success,
        )
        .openapi({ description: 'Buyer selected shipping option.' }),
    ).exactOptional(),
    purchase_units: z
      .array(PurchaseUnitRequestSchema.and(z.any().openapi({ title: 'purchase_unit' })))
      .length(1)
      .openapi({
        description:
          'An array of purchase units. At present only 1 purchase_unit is supported. Each purchase unit establishes a contract between a payer and the payee. Each purchase unit represents either a full or partial order that the payer intends to purchase from the payee.',
      }),
  })
  .openapi({
    title: 'OrderUpdateCallbackRequest',
    description: 'Shipping Options Callback request. This will be implemented by the merchants.',
    required: ['purchase_units'],
  })
  .openapi('OrderUpdateCallbackRequest')

const OrderUpdateCallbackResponseSchema = z
  .object({
    id: z
      .string()
      .regex(/^[A-Z0-9-]+$/)
      .min(1)
      .max(36)
      .exactOptional()
      .openapi({ description: 'The ID of the order.', readOnly: true }),
  })
  .openapi({
    title: 'OrderUpdateCallbackResponse',
    description: 'Returns the updated shipping options for an order.',
    required: [],
  })
  .openapi('OrderUpdateCallbackResponse')

const OrderUpdateCallbackErrorResponseDetailsSchema = z
  .object({
    field: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(256)
      .exactOptional()
      .openapi({
        description:
          "The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.",
      }),
    value: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(1024)
      .exactOptional()
      .openapi({ description: 'The value of the field that caused the error.' }),
    issue: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(256)
      .openapi({ description: 'The unique, fine-grained application-level error code.' }),
  })
  .openapi({
    title: 'OrderUpdateCallbackErrorResponseDetails',
    description: 'The error details. Required for client-side `4XX` errors.',
    required: ['issue'],
  })
  .openapi('OrderUpdateCallbackErrorResponseDetails')

const OrderUpdateCallbackErrorResponseSchema = z
  .object({
    name: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(256)
      .openapi({ description: 'The human-readable, unique name of the error.' }),
    message: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(2048)
      .exactOptional()
      .openapi({ description: 'The message that describes the error.' }),
    details: z
      .array(OrderUpdateCallbackErrorResponseDetailsSchema)
      .min(1)
      .max(100)
      .exactOptional()
      .openapi({ description: 'An array of additional details about the error.' }),
  })
  .openapi({
    title: 'OrderUpdateCallbackErrorResponse',
    description: 'The error details.',
    required: ['name'],
  })
  .openapi('OrderUpdateCallbackErrorResponse')

const DefaultResponseResponse = {
  description: 'Default response.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        generic: {
          summary: 'Default response.',
          description: 'Example catch all response, should not be encountered in practice.',
          value: {
            name: 'INTERNAL_SERVER_ERROR',
            debug_id: 'b1d1f06c7246c',
            message: 'An internal server error has occurred.',
          },
        },
      },
    },
  },
}

const _401ErrorResponseResponse = {
  description: 'Unauthorized.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        generic: {
          summary: "Generic 'Unauthorized' error.",
          description: 'Example response for unauthorized request.',
          value: {
            name: 'AUTHENTICATION_FAILURE',
            debug_id: 'b1d1f06c7246c',
            message:
              'Authentication failed due to missing Authorization header, or invalid authentication credentials.',
          },
        },
      },
    },
  },
}

const _403ErrorResponseResponse = {
  description: 'Forbidden.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        generic: {
          summary: "Generic 'Forbidden' error.",
          description: 'Example response for a forbidden request.',
          value: {
            name: 'NOT_AUTHORIZED',
            debug_id: 'b1d1f06c7246c',
            message: 'Authorization failed due to insufficient permissions.',
          },
        },
      },
    },
  },
}

const _500ErrorResponseResponse = {
  description: 'Internal Server Error.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        generic: {
          summary: 'Generic internal server error.',
          description:
            'Example response for a request that fails for reasons internal to the server.',
          value: {
            name: 'INTERNAL_SERVER_ERROR',
            debug_id: 'b1d1f06c7246c',
            message: 'An internal server error has occurred.',
          },
        },
      },
    },
  },
}

const _404ErrorResponseResponse = {
  description: 'Not Found.',
  content: {
    'application/json': {
      schema: ErrorSchema,
      examples: {
        generic: {
          summary: "Generic 'Not Found' error.",
          description: 'Example response for a request to a resource that does not exist.',
          value: {
            name: 'RESOURCE_NOT_FOUND',
            debug_id: 'b1d1f06c7246c',
            message: 'The specified resource does not exist.',
          },
        },
      },
    },
  },
}

const _204ResponseResponse = { description: 'No Content.' }

const PaypalClientMetadataIdParamsSchema = GuidSchema.openapi({
  param: {
    name: 'PayPal-Client-Metadata-Id',
    in: 'header',
    description:
      'A GUID value originating from Fraudnet and Dyson passed from external API clients via HTTP header. The value is used by Risk decisions to correlate calls which, in turn, might result in lower decline rates..',
    required: false,
    schema: { $ref: '#/components/schemas/guid' },
    examples: {
      guid: {
        summary: 'A GUID.',
        description: 'A paypal-client-metadata-id header with a randomized value.',
        value: '1295065d-6f34-42dc-ac65-fac0c86af250',
      },
    },
  },
}).exactOptional()

const AuthorizationParamsSchema = StandardHeaderSchemaSchema.openapi({
  param: {
    name: 'Authorization',
    in: 'header',
    description: 'Holds authorization information for external API calls.',
    required: false,
    schema: { $ref: '#/components/schemas/standard_header_schema' },
    examples: {
      bearer: {
        summary: 'Bearer authorization.',
        description:
          'An authorization header with information for the Bearer authorization scheme. The authorization parameter value is randomized for this example.',
        value:
          'Bearer A21AAGHr9qtiRRXH4oYcQokQgV99rGqEIfgrr8xHCclP0OzmD9KVgg5ppIIg1jzJgQkV4wd02svIvBJyg6cLFJjFow_SjBhxQ',
      },
    },
  },
}).exactOptional()

const PaypalAuthAssertionParamsSchema = z
  .string()
  .regex(/^.*$/)
  .min(1)
  .max(10000)
  .exactOptional()
  .openapi({
    param: {
      name: 'PayPal-Auth-Assertion',
      in: 'header',
      description:
        'Header for an API client-provided JWT assertion that identifies the merchant. Establishing the consent to act-on-behalf of a merchant is a prerequisite for using this header.',
      required: false,
      schema: {
        description:
          'Header for an API client-provided JWT assertion that identifies the merchant. Establishing the consent to act-on-behalf of a merchant is a prerequisite for using this header.',
        type: 'string',
        minLength: 1,
        maxLength: 10000,
        pattern: '^.*$',
      },
      examples: {
        auth_assertion: {
          summary: 'An auth assertion.',
          description: 'A paypal-auth-assertion header with a randomized value.',
          value: 'eyJhbGciOiJub25lIn0.eyJlbWFpbCI6Im15QGVtYWlsLmNvbSJ9',
        },
      },
    },
    description:
      'Header for an API client-provided JWT assertion that identifies the merchant. Establishing the consent to act-on-behalf of a merchant is a prerequisite for using this header.',
  })

const Oauth2SecurityScheme = {
  type: 'oauth2',
  description: 'Oauth 2.0 authentication',
  flows: {
    clientCredentials: {
      tokenUrl: 'https://api-m.paypal.com/v1/oauth2/token',
      scopes: {
        'https://uri.paypal.com/services/payments/payment':
          'Manage payments and checkout workflow.',
        'https://uri.paypal.com/services/payments/payment/reference-transaction':
          'Permission to initiate reference transaction',
        'https://uri.paypal.com/services/payments/initiatepayment':
          'Initiates payments and checkout workflows.',
        'https://uri.paypal.com/services/payments/orders/deprecating-jssdk-migration-for-limited-merchants':
          'Allows client-side integration on Create, Get, Patch, Authorize & Capture Order endpoints.',
        'https://uri.paypal.com/services/payments/orders/client_sdk_orders_api':
          'Enables secure client-side integration on confirm payment source endpoint',
        'https://uri.paypal.com/services/payments/orders/provision-card':
          'Manage card provisioning merchants.',
      },
    },
  },
}

export const postV2CheckoutOrdersRoute = createRoute({
  method: 'post',
  path: '/v2/checkout/orders',
  tags: ['orders'],
  summary: 'Create order',
  description:
    'Creates an order. Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see <a href="https://developer.paypal.com/docs/checkout/advanced/processing/">checkout</a> or <a href="https://developer.paypal.com/docs/multiparty/checkout/advanced/processing/">multiparty checkout</a>.<blockquote><strong>Note:</strong> For error handling and troubleshooting, see <a href="https://developer.paypal.com/api/rest/reference/orders/v2/errors/#create-order">Orders v2 errors</a>.</blockquote>',
  operationId: 'orders.create',
  request: {
    headers: z.object({
      'PayPal-Request-Id': z
        .string()
        .regex(/^[\S\s]*$/)
        .min(1)
        .max(108)
        .exactOptional()
        .openapi({
          param: {
            name: 'PayPal-Request-Id',
            description:
              'The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager. It is mandatory for all single-step create order calls (E.g. Create Order Request with payment source information like Card, PayPal.vault_id, PayPal.billing_agreement_id, etc).',
            in: 'header',
            required: false,
            schema: { type: 'string', minLength: 1, maxLength: 108, pattern: '^[\\S\\s]*$' },
            examples: {
              orders_create_authorize_single_step_paypal_with_vault_id_and_stored_credentials_usage_pattern:
                {
                  summary:
                    'Create and authorize an order for a PayPal wallet vaulted account holder passing a usage pattern indicator using stored credentials (Single Shot).',
                  description:
                    'Creates an order and authorizes payment with a PayPal wallet vault id as the payment source and a usage pattern (billing indicator) RECURRING_PREPAID passed using stored credentials.',
                  value: '7b92603e-77ed-4896-8e78-5dea2050476a',
                },
              '00_orders_create': {
                summary:
                  'Create Order - PayPal Wallet as Payment Source, Resulting in PAYER_ACTION_REQUIRED Response',
                description: 'Creates a new order. API caller receives payer-action link.',
                value: '7b92603e-77ed-4896-8e78-5dea2050476a',
              },
            },
          },
        }),
      'PayPal-Partner-Attribution-Id': z
        .string()
        .regex(/^[\S\s]*$/)
        .min(1)
        .max(36)
        .exactOptional()
        .openapi({
          param: {
            name: 'PayPal-Partner-Attribution-Id',
            description:
              'PayPal Partner can send a PayPal-Partner-Attribution-Id request header with the value that they have been assigned by the PayPal Partner program. This value is known as a BN Code. In order to reward such partners (through partner programs), all the activities (including API calls) that they are doing on behalf of the merchants need to be tracked.',
            in: 'header',
            required: false,
            schema: { type: 'string', minLength: 1, maxLength: 36, pattern: '^[\\S\\s]*$' },
          },
        }),
      'PayPal-Client-Metadata-Id': PaypalClientMetadataIdParamsSchema,
      Prefer: z
        .string()
        .regex(/^[a-zA-Z=,-]*$/)
        .min(1)
        .max(25)
        .default('return=minimal')
        .exactOptional()
        .openapi({
          param: {
            name: 'Prefer',
            description:
              'The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>',
            in: 'header',
            required: false,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 25,
              pattern: '^[a-zA-Z=,-]*$',
              default: 'return=minimal',
            },
            examples: {
              orders_create_create_orders_with_shipping_type_pickup_in_store: {
                summary: 'Create Order - Buy Online Pickup In Store Shipping Type',
                description:
                  'Creates an order with minimal parameters and contains the Buy Online Pickup in Store-related fields.',
                value: 'return=representation',
              },
            },
          },
        }),
      Authorization: AuthorizationParamsSchema,
      'PayPal-Auth-Assertion': PaypalAuthAssertionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: OrderRequestSchema,
          examples: {
            '00_orders_create': {
              summary:
                'Create Order - PayPal Wallet as Payment Source, Resulting in PAYER_ACTION_REQUIRED Response',
              description: 'Creates a new order. API caller receives payer-action link.',
              value: {
                payment_source: {
                  paypal: {
                    experience_context: {
                      payment_method_preference: 'IMMEDIATE_PAYMENT_REQUIRED',
                      landing_page: 'LOGIN',
                      shipping_preference: 'GET_FROM_FILE',
                      user_action: 'PAY_NOW',
                      return_url: 'https://example.com/returnUrl',
                      cancel_url: 'https://example.com/cancelUrl',
                    },
                  },
                },
                purchase_units: [
                  {
                    invoice_id: '90210',
                    amount: {
                      currency_code: 'USD',
                      value: '230.00',
                      breakdown: {
                        item_total: { currency_code: 'USD', value: '220.00' },
                        shipping: { currency_code: 'USD', value: '10.00' },
                      },
                    },
                    items: [
                      {
                        name: 'T-Shirt',
                        description: 'Super Fresh Shirt',
                        unit_amount: { currency_code: 'USD', value: '20.00' },
                        quantity: '1',
                        category: 'PHYSICAL_GOODS',
                        sku: 'sku01',
                        image_url: 'https://example.com/static/images/items/1/tshirt_green.jpg',
                        url: 'https://example.com/url-to-the-item-being-purchased-1',
                        upc: { type: 'UPC-A', code: '123456789012' },
                      },
                      {
                        name: 'Shoes',
                        description: 'Running, Size 10.5',
                        sku: 'sku02',
                        unit_amount: { currency_code: 'USD', value: '100.00' },
                        quantity: '2',
                        category: 'PHYSICAL_GOODS',
                        image_url: 'https://example.com/static/images/items/1/shoes_running.jpg',
                        url: 'https://example.com/url-to-the-item-being-purchased-2',
                        upc: { type: 'UPC-A', code: '987654321012' },
                      },
                    ],
                  },
                ],
              },
            },
            create_422_unprocessable_entity_missing_pickup_address: {
              summary: 'Create Order - 422 Unprocessable Entity Error - Missing Pickup Address',
              description:
                'This code sample attempts to create an order but the shipping address is required and `shipping.type` is set to PICKUP_FROM_PERSON ',
              value: {
                payment_source: {
                  paypal: {
                    experience_context: {
                      return_url: 'https://www.example.com/returnURL',
                      cancel_url: 'https://www.example.com/cancelURL',
                      shipping_preference: 'SET_PROVIDED_ADDRESS',
                    },
                  },
                },
                purchase_units: [
                  {
                    reference_id: 'PUHF',
                    amount: { currency_code: 'USD', value: '100.00' },
                    shipping: { type: 'PICKUP_FROM_PERSON' },
                  },
                ],
              },
            },
            orders_create_authorize_single_step_paypal_with_vault_id_and_stored_credentials_usage_pattern:
              {
                summary:
                  'Create and authorize an order for a PayPal wallet vaulted account holder passing a usage pattern indicator using stored credentials (Single Shot).',
                description:
                  'Creates an order and authorizes payment with a PayPal wallet vault id as the payment source and a usage pattern (billing indicator) RECURRING_PREPAID passed using stored credentials.',
                value: {
                  purchase_units: [{ amount: { currency_code: 'USD', value: '100.00' } }],
                  payment_source: { paypal: { vault_id: '2w915838hr181240m' } },
                },
              },
            orders_create_create_orders_with_shipping_type_pickup_in_store: {
              summary: 'Create Order - Buy Online Pickup In Store Shipping Type',
              description:
                'Creates an order with minimal parameters and contains the Buy Online Pickup in Store-related fields.',
              value: {
                purchase_units: [
                  {
                    reference_id: 'PUHF',
                    amount: { currency_code: 'USD', value: '50.00' },
                    payee: { email_address: 'merchant@example.com' },
                    shipping: {
                      address: {
                        address_line_1: '123 Townsend St',
                        address_line_2: 'Floor 6',
                        admin_area_2: 'San Francisco',
                        admin_area_1: 'CA',
                        postal_code: '94107',
                        country_code: 'US',
                      },
                      type: 'PICKUP_IN_STORE',
                    },
                  },
                ],
              },
            },
            orders_create_simple: {
              summary: 'Create Order - Minimal Request and Response',
              description:
                'Creates an order with only required parameters. By default, uses the minimal representation.',
              value: { purchase_units: [{ amount: { currency_code: 'USD', value: '100.00' } }] },
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
        'A successful response to an idempotent request returns the HTTP `200 OK` status code with a JSON response body that shows order details.',
      content: {
        'application/json': {
          schema: OrderSchema,
          examples: {
            '00_orders_create': {
              summary:
                'Create Order - PayPal Wallet as Payment Source, Resulting in PAYER_ACTION_REQUIRED Response',
              description: 'Creates a new order. API caller receives payer-action link.',
              value: {
                id: '5O190127TN364715T',
                payment_source: { paypal: {} },
                links: [
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T',
                    rel: 'self',
                    method: 'GET',
                  },
                  {
                    href: 'https://www.paypal.com/checkoutnow?token=5O190127TN364715T',
                    rel: 'payer-action',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    201: {
      description:
        'A successful request returns the HTTP `201 Created` status code and a JSON response body that includes by default a minimal response with the ID, status, and HATEOAS links. If you require the complete order resource representation, you must pass the <a href="https://developer.paypal.com/docs/api/orders/v2/#orders-create-header-parameters"><code>Prefer: return=representation</code> request header</a>. This header value is not the default.',
      content: {
        'application/json': {
          schema: OrderSchema,
          examples: {
            orders_create_authorize_single_step_paypal_with_vault_id_and_stored_credentials_usage_pattern:
              {
                summary:
                  'Create and authorize an order for a PayPal wallet vaulted account holder passing a usage pattern indicator using stored credentials (Single Shot).',
                description:
                  'Creates an order and authorizes payment with a PayPal wallet vault id as the payment source and a usage pattern (billing indicator) RECURRING_PREPAID passed using stored credentials.',
                value: {
                  id: '8K832279M55989614',
                  payment_source: {
                    paypal: {
                      email_address: 'buyer@paypal.com',
                      account_id: 'XQHSN372NGSP2',
                      account_status: 'UNVERIFIED',
                      name: { given_name: 'Tom', surname: 'Business' },
                      phone_number: { national_number: '8127081430' },
                      address: { country_code: 'US' },
                    },
                  },
                  purchase_units: [
                    {
                      reference_id: 'default',
                      amount: { currency_code: 'USD', value: '100.00' },
                      payee: { email_address: 'seller@paypal.com', merchant_id: 'Q7C9N6S4YRQXG' },
                      shipping: {
                        name: { full_name: 'Tom Business' },
                        address: {
                          address_line_1: '123 Fake St.',
                          admin_area_2: 'Baton Rouge',
                          admin_area_1: 'LA',
                          postal_code: '70802',
                          country_code: 'US',
                        },
                      },
                      payments: {
                        authorizations: [
                          {
                            status: 'CREATED',
                            id: '7X550106NA4440028',
                            amount: { currency_code: 'USD', value: '100.00' },
                            seller_protection: {
                              status: 'ELIGIBLE',
                              dispute_categories: ['UNAUTHORIZED_TRANSACTION'],
                            },
                            expiration_time: '2024-06-05T18:46:54Z',
                            links: [
                              {
                                href: 'https://api-m.paypal.com/v2/payments/authorizations/7X550106NA4440028',
                                rel: 'self',
                                method: 'GET',
                              },
                              {
                                href: 'https://api-m.paypal.com/v2/payments/authorizations/7X550106NA4440028/capture',
                                rel: 'capture',
                                method: 'POST',
                              },
                              {
                                href: 'https://api-m.paypal.com/v2/payments/authorizations/7X550106NA4440028/void',
                                rel: 'void',
                                method: 'POST',
                              },
                              {
                                href: 'https://api-m.paypal.com/v2/checkout/orders/8K832279M55989614',
                                rel: 'up',
                                method: 'GET',
                              },
                            ],
                            create_time: '2024-05-07T18:46:54Z',
                            update_time: '2024-05-07T18:46:54Z',
                          },
                        ],
                      },
                    },
                  ],
                  payer: {
                    name: { given_name: 'Tom', surname: 'Business' },
                    email_address: 'buyer@paypal.com',
                    payer_id: 'XQHSN372NGSP2',
                    phone: { phone_number: { national_number: '8127081430' } },
                    address: { country_code: 'US' },
                  },
                  create_time: '2024-05-07T18:46:15Z',
                  update_time: '2024-05-07T18:46:54Z',
                  links: [
                    {
                      href: 'https://api-m.paypal.com/v2/checkout/orders/8K832279M55989614',
                      rel: 'self',
                      method: 'GET',
                    },
                  ],
                },
              },
            orders_create_create_orders_with_shipping_type_pickup_in_store: {
              summary: 'Create Order - Buy Online Pickup In Store Shipping Type',
              description:
                'Creates an order with minimal parameters and contains the Buy Online Pickup in Store-related fields.',
              value: {
                id: '4SP74185RW2405200',
                purchase_units: [
                  {
                    reference_id: 'PUHF',
                    amount: { currency_code: 'USD', value: '50.00' },
                    payee: { email_address: 'merchant@example.com' },
                    shipping: {
                      address: {
                        address_line_1: '123 Townsend St',
                        address_line_2: 'Floor 6',
                        admin_area_2: 'San Francisco',
                        admin_area_1: 'CA',
                        postal_code: '94107',
                        country_code: 'US',
                      },
                      type: 'PICKUP_IN_STORE',
                    },
                  },
                ],
                links: [
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/4SP74185RW2405200',
                    rel: 'self',
                    method: 'GET',
                  },
                  {
                    href: 'https://www.paypal.com/checkoutnow?token=4SP74185RW2405200',
                    rel: 'approve',
                    method: 'GET',
                  },
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/4SP74185RW2405200',
                    rel: 'edit',
                    method: 'PATCH',
                  },
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/4SP74185RW2405200/authorize',
                    rel: 'authorize',
                    method: 'POST',
                  },
                ],
              },
            },
            orders_create_simple: {
              summary: 'Create Order - Minimal Request and Response',
              description:
                'Creates an order with only required parameters. By default, uses the minimal representation.',
              value: {
                id: '5O190127TN364715T',
                links: [
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T',
                    rel: 'self',
                    method: 'GET',
                  },
                  {
                    href: 'https://www.paypal.com/checkoutnow?token=5O190127TN364715T',
                    rel: 'approve',
                    method: 'GET',
                  },
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T',
                    rel: 'edit',
                    method: 'PATCH',
                  },
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T/capture',
                    rel: 'capture',
                    method: 'POST',
                  },
                ],
              },
            },
          },
        },
      },
    },
    202: {
      description:
        'The request has been accepted for processing, but the processing has not been completed yet. The server returns the HTTP `202 Accepted` status code to indicate that the request is valid and will be handled asynchronously.',
      content: { 'application/json': { schema: OrderSchema } },
    },
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            create_400_bad_request: {
              summary: 'Create Order - 400 Bad Request Error - Purchase Unit is Empty',
              description:
                'This code sample attempts to create an order with empty purchase units. The request fails.',
              value: {
                name: 'INVALID_REQUEST',
                message: 'Request is not well-formed, syntactically incorrect, or violates schema.',
                debug_id: '10398537340c8',
                details: [
                  {
                    field: '/purchase_units',
                    value: '[]',
                    location: 'body',
                    issue: 'INVALID_ARRAY_MIN_ITEMS',
                    description: 'The number of items in an array parameter is too small.',
                  },
                ],
                links: [
                  {
                    href: 'https://developer.paypal.com/api/orders/v2/#error-INVALID_ARRAY_MIN_ITEMS',
                    rel: 'information_link',
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            create_422_unprocessable_entity_missing_pickup_address: {
              summary: 'Create Order - 422 Unprocessable Entity Error - Missing Pickup Address',
              description:
                'This code sample attempts to create an order but the shipping address is required and `shipping.type` is set to PICKUP_FROM_PERSON ',
              value: {
                name: 'UNPROCESSABLE_ENTITY',
                details: [
                  {
                    field: "/purchase_units/@reference_id=='PUHF'/shipping/address",
                    issue: 'MISSING_SHIPPING_ADDRESS',
                    description:
                      'The shipping address is required when `shipping_preference=SET_PROVIDED_ADDRESS`.',
                  },
                ],
                message:
                  'The requested action could not be performed, semantically incorrect, or failed business validation.',
                debug_id: 'f200264a4e02a',
                links: [
                  {
                    href: 'https://developer.paypal.com/api/rest/reference/orders/v2/errors/#MISSING_SHIPPING_ADDRESS',
                    rel: 'information_link',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  security: [
    {
      Oauth2: [
        'https://uri.paypal.com/services/payments/payment',
        'https://uri.paypal.com/services/payments/orders/deprecating-jssdk-migration-for-limited-merchants',
      ],
    },
  ],
})

export const getV2CheckoutOrdersIdRoute = createRoute({
  method: 'get',
  path: '/v2/checkout/orders/{id}',
  tags: ['orders'],
  summary: 'Show order details',
  description:
    'Shows details for an order, by ID.<blockquote><strong>Note:</strong> For error handling and troubleshooting, see <a href="https://developer.paypal.com/api/rest/reference/orders/v2/errors/#get-order">Orders v2 errors</a>.</blockquote>',
  operationId: 'orders.get',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[A-Z0-9]+$/)
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'id',
            description: 'The ID of the order for which to show details.',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 1, maxLength: 36, pattern: '^[A-Z0-9]+$' },
            examples: {
              '00_orders_get': {
                summary: 'Get Order - Show Order Details After Customer Approval',
                description: 'Shows order details immediately after customer approval.',
                value: '5O190127TN364715T',
              },
            },
          },
        }),
    }),
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'PayPal-Auth-Assertion': PaypalAuthAssertionParamsSchema,
    }),
    query: z.object({
      fields: z
        .string()
        .regex(/^[a-z_]*$/)
        .min(0)
        .max(2147483647)
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            description:
              'A comma-separated list of fields that should be returned for the order. Valid filter field is `payment_source`.',
            in: 'query',
            required: false,
            schema: { type: 'string', minLength: 0, maxLength: 2147483647, pattern: '^[a-z_]*$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows order details.',
      content: {
        'application/json': {
          schema: OrderSchema,
          examples: {
            '00_orders_get': {
              summary: 'Get Order - Show Order Details After Customer Approval',
              description: 'Shows order details immediately after customer approval.',
              value: {
                id: '5O190127TN364715T',
                payment_source: {
                  paypal: {
                    name: { given_name: 'John', surname: 'Doe' },
                    email_address: 'customer@example.com',
                    account_id: 'QYR5Z8XDVJNXQ',
                  },
                },
                purchase_units: [
                  {
                    reference_id: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
                    amount: { currency_code: 'USD', value: '100.00' },
                  },
                ],
                payer: {
                  name: { given_name: 'John', surname: 'Doe' },
                  email_address: 'customer@example.com',
                  payer_id: 'QYR5Z8XDVJNXQ',
                },
                create_time: '2018-04-01T21:18:49Z',
                links: [
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T',
                    rel: 'self',
                    method: 'GET',
                  },
                  {
                    href: 'https://www.paypal.com/checkoutnow?token=5O190127TN364715T',
                    rel: 'approve',
                    method: 'GET',
                  },
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T',
                    rel: 'edit',
                    method: 'PATCH',
                  },
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T/capture',
                    rel: 'capture',
                    method: 'POST',
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  security: [
    {
      Oauth2: [
        'https://uri.paypal.com/services/payments/payment',
        'https://uri.paypal.com/services/payments/orders/deprecating-jssdk-migration-for-limited-merchants',
      ],
    },
  ],
})

export const patchV2CheckoutOrdersIdRoute = createRoute({
  method: 'patch',
  path: '/v2/checkout/orders/{id}',
  tags: ['orders'],
  summary: 'Update order',
  description:
    'Updates an order with a `CREATED` or `APPROVED` status. You cannot update an order with the `COMPLETED` status.<br/><br/>To make an update, you must provide a `reference_id`. If you omit this value with an order that contains only one purchase unit, PayPal sets the value to `default` which enables you to use the path: <code>\\"/purchase_units/@reference_id==\'default\'/{attribute-or-object}\\"</code>. Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see <a href="https://developer.paypal.com/docs/checkout/advanced/processing/">checkout</a> or <a href="https://developer.paypal.com/docs/multiparty/checkout/advanced/processing/">multiparty checkout</a>.<blockquote><strong>Note:</strong> For error handling and troubleshooting, see <a href="https://developer.paypal.com/api/rest/reference/orders/v2/errors/#patch-order">Orders v2 errors</a>.</blockquote>Patchable attributes or objects:<br/><br/><table><thead><th>Attribute</th><th>Op</th><th>Notes</th></thead><tbody><tr><td><code>intent</code></td><td>replace</td><td></td></tr><tr><td><code>payer</code></td><td>replace, add</td><td>Using replace op for <code>payer</code> will replace the whole <code>payer</code> object with the value sent in request.</td></tr><tr><td><code>purchase_units</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].custom_id</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].description</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].payee.email</code></td><td>replace</td><td></td></tr><tr><td><code>purchase_units[].shipping.name</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.email_address</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.phone_number</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.options</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.address</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].shipping.type</code></td><td>replace, add</td><td></td></tr><tr><td><code>purchase_units[].soft_descriptor</code></td><td>replace, remove</td><td></td></tr><tr><td><code>purchase_units[].amount</code></td><td>replace</td><td></td></tr><tr><td><code>purchase_units[].items</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].invoice_id</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].payment_instruction</code></td><td>replace</td><td></td></tr><tr><td><code>purchase_units[].payment_instruction.disbursement_mode</code></td><td>replace</td><td>By default, <code>disbursement_mode</code> is <code>INSTANT</code>.</td></tr><tr><td><code>purchase_units[].payment_instruction.payee_receivable_fx_rate_id</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].payment_instruction.platform_fees</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].supplementary_data.airline</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>purchase_units[].supplementary_data.card</code></td><td>replace, add, remove</td><td></td></tr><tr><td><code>application_context.client_configuration</code></td><td>replace, add</td><td></td></tr></tbody></table>',
  operationId: 'orders.patch',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[A-Z0-9]+$/)
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'id',
            description: 'The ID of the order to update.',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 1, maxLength: 36, pattern: '^[A-Z0-9]+$' },
            examples: {
              '00_orders_patch': {
                summary: 'Patch Order - Add Shipping Address',
                description: 'Updates an order to add shipping address to purchase unit.',
                value: '5O190127TN364715T',
              },
              orders_patch_add_items_and_replace_amount: {
                summary: 'Patch Order - Add Items and Replace Amount',
                description:
                  'Updates an order to add items to and replace the amount within a purchase unit. The amount breakdown with an item total is added to reflect the newly added items. Whenever the quantity or price of items is modified in an order with a PATCH, the purchase_units.amount must also be updated.',
                value: '5O190127TN364715T',
              },
              orders_patch_replace_amount: {
                summary: 'Patch Order - Replace Amount',
                description:
                  'Updates an order to revise the amount, adding the cost of shipping, to a purchase unit.',
                value: '5O190127TN364715T',
              },
              patch_422_payer_patch_not_allowed: {
                summary: 'Patch Order - 422 Unprocessable Entity Error - Payer Patch Not Allowed',
                description:
                  'This code sample attempts to update an order with a payer object. The request fails since buyer has already approved.',
                value: '5O190127TN364715T',
              },
            },
          },
        }),
    }),
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'PayPal-Auth-Assertion': PaypalAuthAssertionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: PatchRequestSchema,
          examples: {
            '00_orders_patch': {
              summary: 'Patch Order - Add Shipping Address',
              description: 'Updates an order to add shipping address to purchase unit.',
              value: [
                {
                  op: 'replace',
                  path: "/purchase_units/@reference_id=='PUHF'/shipping/address",
                  value: {
                    address_line_1: '2211 N First Street',
                    address_line_2: 'Building 17',
                    admin_area_2: 'San Jose',
                    admin_area_1: 'CA',
                    postal_code: '95131',
                    country_code: 'US',
                  },
                },
              ],
            },
            orders_patch_add_items_and_replace_amount: {
              summary: 'Patch Order - Add Items and Replace Amount',
              description:
                'Updates an order to add items to and replace the amount within a purchase unit. The amount breakdown with an item total is added to reflect the newly added items. Whenever the quantity or price of items is modified in an order with a PATCH, the purchase_units.amount must also be updated.',
              value: [
                {
                  op: 'add',
                  path: "/purchase_units/@reference_id=='PUHF'/items",
                  value: [
                    {
                      name: 'T-Shirt',
                      description: 'Green XL',
                      sku: 'sku01',
                      unit_amount: { currency_code: 'USD', value: '90.00' },
                      tax: { currency_code: 'USD', value: '10.00' },
                      quantity: '1',
                      category: 'PHYSICAL_GOODS',
                    },
                    {
                      name: 'Shoes',
                      description: 'Running, Size 10.5',
                      sku: 'sku02',
                      unit_amount: { currency_code: 'USD', value: '45.00' },
                      tax: { currency_code: 'USD', value: '5.00' },
                      quantity: '2',
                      category: 'PHYSICAL_GOODS',
                    },
                  ],
                },
                {
                  op: 'replace',
                  path: "/purchase_units/@reference_id=='PUHF'/amount",
                  value: {
                    currency_code: 'USD',
                    value: '205.00',
                    breakdown: {
                      item_total: { currency_code: 'USD', value: '180.00' },
                      shipping: { currency_code: 'USD', value: '5.00' },
                      handling: { currency_code: 'USD', value: '0.00' },
                      tax_total: { currency_code: 'USD', value: '20.00' },
                      shipping_discount: { currency_code: 'USD', value: '0.00' },
                    },
                  },
                },
              ],
            },
            orders_patch_replace_amount: {
              summary: 'Patch Order - Replace Amount',
              description:
                'Updates an order to revise the amount, adding the cost of shipping, to a purchase unit.',
              value: [
                {
                  op: 'replace',
                  path: "/purchase_units/@reference_id=='PUHF'/amount",
                  value: {
                    currency_code: 'USD',
                    value: '200.00',
                    breakdown: {
                      item_total: { currency_code: 'USD', value: '180.00' },
                      shipping: { currency_code: 'USD', value: '20.00' },
                    },
                  },
                },
              ],
            },
            patch_422_payer_patch_not_allowed: {
              summary: 'Patch Order - 422 Unprocessable Entity Error - Payer Patch Not Allowed',
              description:
                'This code sample attempts to update an order with a payer object. The request fails since buyer has already approved.',
              value: [
                {
                  op: 'add',
                  path: '/payer',
                  value: {
                    name: { given_name: 'TestFirst', surname: 'TestLast' },
                    email_address: 'payee@example.com',
                    phone: { phone_number: { national_number: '19876543210' } },
                    address: {
                      address_line_1: '2211 North First Street',
                      address_line_2: 'Floor 6',
                      admin_area_2: 'San Jose',
                      admin_area_1: 'CA',
                      postal_code: '95126',
                      country_code: 'US',
                    },
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  responses: {
    204: _204ResponseResponse,
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            patch_400_invalid_shipping_address: {
              summary: 'Patch Order - 400 Bad Request Error - Shipping Address Invalid',
              description:
                'This code sample attempts to update an the shipping address with an invalid value. The request fails.',
              value: {
                name: 'INVALID_REQUEST',
                details: [
                  {
                    field: "/purchase_units/@reference_id=='Reference ID 2'/shipping/address",
                    value: 'x',
                    location: 'body',
                    issue: 'INVALID_PARAMETER_SYNTAX',
                    description: 'The value of a field does not conform to the expected format.',
                  },
                ],
                message: 'Request is not well-formed, syntactically incorrect, or violates schema.',
                debug_id: 'f087ef02ffdb6',
                links: [
                  {
                    href: 'https://developer.paypal.com/api/orders/v2/#error-INVALID_PARAMETER_SYNTAX',
                    rel: 'information_link',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            patch_422_payer_patch_not_allowed: {
              summary: 'Patch Order - 422 Unprocessable Entity Error - Payer Patch Not Allowed',
              description:
                'This code sample attempts to update an order with a payer object. The request fails since buyer has already approved.',
              value: {
                name: 'UNPROCESSABLE_ENTITY',
                details: [
                  {
                    field: '/payer',
                    issue: 'PAYER_PATCH_NOT_ALLOWED',
                    description:
                      'Payer path patch is not allowed after payer has approved the order.',
                    location: 'body',
                  },
                ],
                message:
                  'The requested action could not be performed, semantically incorrect, or failed business validation.',
                debug_id: '90957fca61718',
                links: [
                  {
                    href: 'https://developer.paypal.com/api/orders/v2/#error-PAYER_PATCH_NOT_ALLOWED',
                    rel: 'information_link',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  security: [
    {
      Oauth2: [
        'https://uri.paypal.com/services/payments/payment',
        'https://uri.paypal.com/services/payments/orders/deprecating-jssdk-migration-for-limited-merchants',
      ],
    },
  ],
})

export const postV2CheckoutOrdersIdConfirmPaymentSourceRoute = createRoute({
  method: 'post',
  path: '/v2/checkout/orders/{id}/confirm-payment-source',
  tags: ['orders'],
  summary: 'Confirm the Order',
  description:
    'Payer confirms their intent to pay for the the Order with the given payment source.',
  operationId: 'orders.confirm',
  request: {
    headers: z.object({
      'PayPal-Client-Metadata-Id': PaypalClientMetadataIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'PayPal-Auth-Assertion': PaypalAuthAssertionParamsSchema,
      Prefer: z
        .string()
        .regex(/^[a-zA-Z=]*$/)
        .min(1)
        .max(25)
        .default('return=minimal')
        .exactOptional()
        .openapi({
          param: {
            name: 'Prefer',
            description:
              'The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>',
            in: 'header',
            required: false,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 25,
              pattern: '^[a-zA-Z=]*$',
              default: 'return=minimal',
            },
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .regex(/^[A-Z0-9]+$/)
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'id',
            description: 'The ID of the order for which the payer confirms their intent to pay.',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 1, maxLength: 36, pattern: '^[A-Z0-9]+$' },
            examples: {
              '00_orders_confirm': {
                summary: 'Confirm Order - PayPal Wallet Resulting in Payer Action Required',
                description:
                  'The API Caller is adding or changing the PayPal wallet payment_source on an Order after the Order has been created. Orders status transitions to PAYER_ACTION_REQUIRED.',
                value: '5O190127TN364715T',
              },
              confirm_422_unprocessable_entity_paypal_wallet_vault_id_payment_source_mismatch: {
                summary:
                  'Confirm Order - 422 Unprocessable Entity Error -Using Card Vault ID for a PayPal Wallet Payment Source',
                description:
                  'Attempt to Confirm PayPal Wallet for an order with card vault id. The request fails with a MISMATCHED_VAULT_ID_TO_PAYMENT_SOURCE error.',
                value: '5O190127TN364715T',
              },
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ConfirmOrderRequestSchema,
          examples: {
            '00_orders_confirm': {
              summary: 'Confirm Order - PayPal Wallet Resulting in Payer Action Required',
              description:
                'The API Caller is adding or changing the PayPal wallet payment_source on an Order after the Order has been created. Orders status transitions to PAYER_ACTION_REQUIRED.',
              value: {
                payment_source: {
                  paypal: {
                    name: { given_name: 'John', surname: 'Doe' },
                    email_address: 'customer@example.com',
                    experience_context: {
                      payment_method_preference: 'IMMEDIATE_PAYMENT_REQUIRED',
                      brand_name: 'EXAMPLE INC',
                      locale: 'en-US',
                      landing_page: 'LOGIN',
                      shipping_preference: 'SET_PROVIDED_ADDRESS',
                      user_action: 'PAY_NOW',
                      return_url: 'https://example.com/returnUrl',
                      cancel_url: 'https://example.com/cancelUrl',
                    },
                  },
                },
              },
            },
            confirm_422_unprocessable_entity_paypal_wallet_vault_id_payment_source_mismatch: {
              summary:
                'Confirm Order - 422 Unprocessable Entity Error -Using Card Vault ID for a PayPal Wallet Payment Source',
              description:
                'Attempt to Confirm PayPal Wallet for an order with card vault id. The request fails with a MISMATCHED_VAULT_ID_TO_PAYMENT_SOURCE error.',
              value: { payment_source: { paypal: { vault_id: '8kk845' } } },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request indicates that the payment source was added to the Order. A successful request returns the HTTP `200 OK` status code with a JSON response body that shows order details.',
      content: {
        'application/json': {
          schema: OrderSchema,
          examples: {
            '00_orders_confirm': {
              summary: 'Confirm Order - PayPal Wallet Resulting in Payer Action Required',
              description:
                'The API Caller is adding or changing the PayPal wallet payment_source on an Order after the Order has been created. Orders status transitions to PAYER_ACTION_REQUIRED.',
              value: {
                id: '5O190127TN364715T',
                payment_source: {
                  paypal: {
                    name: { given_name: 'John', surname: 'Doe' },
                    email_address: 'customer@example.com',
                  },
                },
                payer: {
                  name: { given_name: 'John', surname: 'Doe' },
                  email_address: 'customer@example.com',
                },
                links: [
                  {
                    href: 'https://api.paypal.com/v2/checkout/orders/5O190127TN364715T',
                    rel: 'self',
                    method: 'GET',
                  },
                  {
                    href: 'https://www.paypal.com/checkoutnow?token=5O190127TN364715T',
                    rel: 'payer-action',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            confirm_400_bad_request_missing_required_parameter: {
              summary:
                'Confirm Order - 400 Bad Request Error - Missing Required Parameter - Payment Source',
              description:
                'This code sample attempts to confirm an order, but the payment source is missing. The request fails.',
              value: {
                name: 'INVALID_REQUEST',
                details: [
                  {
                    field: '/payment_source',
                    issue: 'MISSING_REQUIRED_PARAMETER',
                    description: 'A required field or parameter is missing.',
                    location: 'body',
                  },
                ],
                message: 'Request is not well-formed, syntactically incorrect, or violates schema.',
                debug_id: '90957fca61718',
                links: [
                  {
                    href: 'https://developer.paypal.com/api/orders/v2/#error-MISSING_REQUIRED_PARAMETER',
                    rel: 'information_link',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            confirm_422_unprocessable_entity_paypal_wallet_vault_id_payment_source_mismatch: {
              summary:
                'Confirm Order - 422 Unprocessable Entity Error -Using Card Vault ID for a PayPal Wallet Payment Source',
              description:
                'Attempt to Confirm PayPal Wallet for an order with card vault id. The request fails with a MISMATCHED_VAULT_ID_TO_PAYMENT_SOURCE error.',
              value: {
                name: 'UNPROCESSABLE_ENTITY',
                details: [
                  {
                    field: '/payment_source/paypal/vault_id',
                    location: 'body',
                    issue: 'MISMATCHED_VAULT_ID_TO_PAYMENT_SOURCE',
                    description:
                      'The vault_id does not match the payment_source provided. Please verify that the vault_id token used refers to the matching payment_source and try again. For example, a PayPal token cannot be passed in the vault_id field in the payment_source.card object.',
                  },
                ],
                message:
                  'The requested action could not be performed, semantically incorrect, or failed business validation.',
                debug_id: '90957fca61718',
                links: [
                  {
                    href: 'https://developer.paypal.com/docs/api/orders/v2/#error-MISMATCHED_VAULT_ID_TO_PAYMENT_SOURCE',
                    rel: 'information_link',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  security: [
    {
      Oauth2: [
        'https://uri.paypal.com/services/payments/payment',
        'https://uri.paypal.com/services/payments/initiatepayment',
        'https://uri.paypal.com/services/payments/orders/client_sdk_orders_api',
      ],
    },
  ],
})

export const postV2CheckoutOrdersIdAuthorizeRoute = createRoute({
  method: 'post',
  path: '/v2/checkout/orders/{id}/authorize',
  tags: ['orders'],
  summary: 'Authorize payment for order',
  description:
    'Authorizes payment for an order. To successfully authorize payment for an order, the buyer must first approve the order or a valid payment_source must be provided in the request. A buyer can approve the order upon being redirected to the rel:approve URL that was returned in the HATEOAS links in the create order response.<blockquote><strong>Note:</strong> For error handling and troubleshooting, see <a href="https://developer.paypal.com/api/rest/reference/orders/v2/errors/#authorize-order">Orders v2 errors</a>.</blockquote>',
  operationId: 'orders.authorize',
  request: {
    headers: z.object({
      'PayPal-Request-Id': z
        .string()
        .regex(/^[\S\s]*$/)
        .min(1)
        .max(108)
        .exactOptional()
        .openapi({
          param: {
            name: 'PayPal-Request-Id',
            description:
              'The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager. It is mandatory for all single-step create order calls (E.g. Create Order Request with payment source information like Card, PayPal.vault_id, PayPal.billing_agreement_id, etc).',
            in: 'header',
            required: false,
            schema: { type: 'string', minLength: 1, maxLength: 108, pattern: '^[\\S\\s]*$' },
            examples: {
              authorize_422_payer_action_required_cib_psd2_sca_ba_in_sc: {
                summary: 'Authorize Order - 422 - Payer Action Required',
                description:
                  'This code sample attempts to authorize payment for an order that was created by the api caller and the payment could not be processed due to PSD2 SCA compliance requirement.',
                value: '7b92603e-77ed-4896-8e78-5dea2050476a',
              },
              orders_authorize_idempotent: {
                summary: 'Authorize Order - Idempotent Response with PayPal Wallet',
                description:
                  'Authorizes payment for an order with the same idempotency key. By default, uses the minimal representation.',
                value: '7b92603e-77ed-4896-8e78-5dea2050476a',
              },
              authorize_422_unprocessable_entity_payment_denied: {
                summary: 'Authorize Order - 422 Unprocessable Entity Error - Payment Denied',
                description:
                  'This code sample attempts to authorize an order, but the payment is denied by PayPal. This can occur due to various reasons such as insufficient funds, expired card, incorrect payment information, or payment gateway issues.',
                value: '7b92603e-77ed-4896-8e78-5dea2050476a',
              },
              '00_orders_authorize': {
                summary: 'Authorize Order - PayPal Wallet as Payment Source',
                description:
                  'Authorize payment for an order after PayPal wallet approval. By default, uses the minimal representation.',
                value: '7b92603e-77ed-4896-8e78-5dea2050476a',
              },
              orders_authorize_paypal_wallet_vault_id: {
                summary: 'Authorize Order - PayPal Wallet Vault ID',
                description:
                  'Authorizes payment for an order through a previously acquired vault id for a PayPal wallet. By default, uses the minimal representation.',
                value: '7b92603e-77ed-4896-8e78-5dea2050476a',
              },
            },
          },
        }),
      Prefer: z
        .string()
        .regex(/^[a-zA-Z=,-]*$/)
        .min(1)
        .max(25)
        .default('return=minimal')
        .exactOptional()
        .openapi({
          param: {
            name: 'Prefer',
            description:
              'The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>',
            in: 'header',
            required: false,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 25,
              pattern: '^[a-zA-Z=,-]*$',
              default: 'return=minimal',
            },
          },
        }),
      'PayPal-Client-Metadata-Id': PaypalClientMetadataIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'PayPal-Auth-Assertion': PaypalAuthAssertionParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .regex(/^[A-Z0-9]+$/)
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'id',
            description: 'The ID of the order for which to authorize.',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 1, maxLength: 36, pattern: '^[A-Z0-9]+$' },
            examples: {
              '00_orders_authorize': {
                summary: 'Authorize Order - PayPal Wallet as Payment Source',
                description:
                  'Authorize payment for an order after PayPal wallet approval. By default, uses the minimal representation.',
                value: '5O190127TN364715T',
              },
              authorize_422_payer_action_required_cib_psd2_sca_ba_in_sc: {
                summary: 'Authorize Order - 422 - Payer Action Required',
                description:
                  'This code sample attempts to authorize payment for an order that was created by the api caller and the payment could not be processed due to PSD2 SCA compliance requirement.',
                value: '9SY02093A2309081P',
              },
              authorize_422_unprocessable_entity_payment_denied: {
                summary: 'Authorize Order - 422 Unprocessable Entity Error - Payment Denied',
                description:
                  'This code sample attempts to authorize an order, but the payment is denied by PayPal. This can occur due to various reasons such as insufficient funds, expired card, incorrect payment information, or payment gateway issues.',
                value: '5O190127TN364715T',
              },
              orders_authorize_idempotent: {
                summary: 'Authorize Order - Idempotent Response with PayPal Wallet',
                description:
                  'Authorizes payment for an order with the same idempotency key. By default, uses the minimal representation.',
                value: '5O190127TN364715T',
              },
              orders_authorize_paypal_wallet_vault_id: {
                summary: 'Authorize Order - PayPal Wallet Vault ID',
                description:
                  'Authorizes payment for an order through a previously acquired vault id for a PayPal wallet. By default, uses the minimal representation.',
                value: '5O190127TN364715T',
              },
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: OrderAuthorizeRequestSchema,
          examples: {
            '00_orders_authorize': {
              summary: 'Authorize Order - PayPal Wallet as Payment Source',
              description:
                'Authorize payment for an order after PayPal wallet approval. By default, uses the minimal representation.',
              value: {},
            },
            authorize_422_payer_action_required_cib_psd2_sca_ba_in_sc: {
              summary: 'Authorize Order - 422 - Payer Action Required',
              description:
                'This code sample attempts to authorize payment for an order that was created by the api caller and the payment could not be processed due to PSD2 SCA compliance requirement.',
              value: {},
            },
            authorize_422_unprocessable_entity_payment_denied: {
              summary: 'Authorize Order - 422 Unprocessable Entity Error - Payment Denied',
              description:
                'This code sample attempts to authorize an order, but the payment is denied by PayPal. This can occur due to various reasons such as insufficient funds, expired card, incorrect payment information, or payment gateway issues.',
              value: { payment_source: { card: { vault_id: '8cg02452we902502k' } } },
            },
            orders_authorize_idempotent: {
              summary: 'Authorize Order - Idempotent Response with PayPal Wallet',
              description:
                'Authorizes payment for an order with the same idempotency key. By default, uses the minimal representation.',
              value: {},
            },
            orders_authorize_paypal_wallet_vault_id: {
              summary: 'Authorize Order - PayPal Wallet Vault ID',
              description:
                'Authorizes payment for an order through a previously acquired vault id for a PayPal wallet. By default, uses the minimal representation.',
              value: { payment_source: { paypal: { vault_id: 'nkq2y9g' } } },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful response to an idempotent request returns the HTTP `200 OK` status code with a JSON response body that shows authorized payment details.',
      content: {
        'application/json': {
          schema: OrderAuthorizeResponseSchema,
          examples: {
            orders_authorize_idempotent: {
              summary: 'Authorize Order - Idempotent Response with PayPal Wallet',
              description:
                'Authorizes payment for an order with the same idempotency key. By default, uses the minimal representation.',
              value: {
                id: '5O190127TN364715T',
                payment_source: {
                  paypal: {
                    name: { given_name: 'John', surname: 'Doe' },
                    account_status: 'VERIFIED',
                    email_address: 'customer@example.com',
                    account_id: 'QYR5Z8XDVJNXQ',
                  },
                },
                purchase_units: [
                  {
                    reference_id: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
                    shipping: {
                      address: {
                        address_line_1: '2211 N First Street',
                        address_line_2: 'Building 17',
                        admin_area_2: 'San Jose',
                        admin_area_1: 'CA',
                        postal_code: '95131',
                        country_code: 'US',
                      },
                    },
                    payments: {
                      authorizations: [
                        {
                          id: '0AW2184448108334S',
                          status: 'CREATED',
                          amount: { currency_code: 'USD', value: '100.00' },
                          seller_protection: {
                            status: 'ELIGIBLE',
                            dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                          },
                          expiration_time: '2018-05-01T21:20:49Z',
                          create_time: '2018-04-01T21:20:49Z',
                          update_time: '2018-04-01T21:20:49Z',
                          links: [
                            {
                              href: 'https://api-m.paypal.com/v2/payments/authorizations/0AW2184448108334S',
                              rel: 'self',
                              method: 'GET',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/payments/authorizations/0AW2184448108334S/capture',
                              rel: 'capture',
                              method: 'POST',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/payments/authorizations/0AW2184448108334S/void',
                              rel: 'void',
                              method: 'POST',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/payments/authorizations/0AW2184448108334S/reauthorize',
                              rel: 'reauthorize',
                              method: 'POST',
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
                payer: {
                  name: { given_name: 'John', surname: 'Doe' },
                  email_address: 'customer@example.com',
                  payer_id: 'QYR5Z8XDVJNXQ',
                },
                links: [
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T',
                    rel: 'self',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    201: {
      description:
        'A successful response to a non-idempotent request returns the HTTP `201 Created` status code with a JSON response body that shows authorized payment details. If a duplicate response is retried, returns the HTTP `200 OK` status code. By default, the response is minimal. If you need the complete resource representation, you must pass the <a href="https://developer.paypal.com/docs/api/orders/v2/#orders-authorize-header-parameters"><code>Prefer: return=representation</code> request header</a>.',
      content: {
        'application/json': {
          schema: OrderAuthorizeResponseSchema,
          examples: {
            '00_orders_authorize': {
              summary: 'Authorize Order - PayPal Wallet as Payment Source',
              description:
                'Authorize payment for an order after PayPal wallet approval. By default, uses the minimal representation.',
              value: {
                id: '5O190127TN364715T',
                payment_source: {
                  paypal: {
                    name: { given_name: 'John', surname: 'Doe' },
                    email_address: 'customer@example.com',
                    account_id: 'QYR5Z8XDVJNXQ',
                  },
                },
                purchase_units: [
                  {
                    reference_id: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
                    payments: {
                      authorizations: [
                        {
                          id: '3C679366HH908993F',
                          status: 'CREATED',
                          amount: { currency_code: 'USD', value: '100.00' },
                          seller_protection: {
                            status: 'ELIGIBLE',
                            dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                          },
                          expiration_time: '2021-10-08T23:37:39Z',
                          links: [
                            {
                              href: 'https://api-m.paypal.com/v2/payments/authorizations/5O190127TN364715T',
                              rel: 'self',
                              method: 'GET',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/payments/authorizations/5O190127TN364715T/capture',
                              rel: 'capture',
                              method: 'POST',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/payments/authorizations/5O190127TN364715T/void',
                              rel: 'void',
                              method: 'POST',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T',
                              rel: 'up',
                              method: 'GET',
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
                payer: {
                  name: { given_name: 'John', surname: 'Doe' },
                  email_address: 'customer@example.com',
                  payer_id: 'QYR5Z8XDVJNXQ',
                },
                links: [
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T',
                    rel: 'self',
                    method: 'GET',
                  },
                ],
              },
            },
            orders_authorize_paypal_wallet_vault_id: {
              summary: 'Authorize Order - PayPal Wallet Vault ID',
              description:
                'Authorizes payment for an order through a previously acquired vault id for a PayPal wallet. By default, uses the minimal representation.',
              value: {
                id: '5O190127TN364715T',
                payment_source: {
                  paypal: {
                    name: { given_name: 'John', surname: 'Doe' },
                    email_address: 'customer@example.com',
                    account_id: 'QYR5Z8XDVJNXQ',
                    account_status: 'VERIFIED',
                  },
                },
                purchase_units: [
                  {
                    reference_id: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
                    shipping: {
                      address: {
                        address_line_1: '2211 N First Street',
                        address_line_2: 'Building 17',
                        admin_area_2: 'San Jose',
                        admin_area_1: 'CA',
                        postal_code: '95131',
                        country_code: 'US',
                      },
                    },
                    payments: {
                      authorizations: [
                        {
                          id: '0AW2184448108334S',
                          status: 'CREATED',
                          amount: { currency_code: 'USD', value: '100.00' },
                          seller_protection: {
                            status: 'ELIGIBLE',
                            dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                          },
                          expiration_time: '2022-01-29T21:20:49Z',
                          create_time: '2021-12-29T21:20:49Z',
                          update_time: '2021-12-29T21:20:49Z',
                          links: [
                            {
                              href: 'https://api-m.paypal.com/v2/payments/authorizations/0AW2184448108334S',
                              rel: 'self',
                              method: 'GET',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/payments/authorizations/0AW2184448108334S/capture',
                              rel: 'capture',
                              method: 'POST',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/payments/authorizations/0AW2184448108334S/void',
                              rel: 'void',
                              method: 'POST',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/payments/authorizations/0AW2184448108334S/reauthorize',
                              rel: 'reauthorize',
                              method: 'POST',
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
                links: [
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T',
                    rel: 'self',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    202: {
      description:
        'The request has been accepted for processing, but the processing has not been completed yet. The server returns the HTTP `202 Accepted` status code to indicate that the request is valid and will be handled asynchronously.',
      content: { 'application/json': { schema: OrderAuthorizeResponseSchema } },
    },
    207: {
      description:
        'The request was successfully processed, but the result contains mixed outcomes. When an order includes multiple purchase units, the server returns the HTTP `207 Multi-Status` code to indicate that one or more purchase units were processed successfully while others failed. The response body provides the processing result for each purchase unit.',
      content: { 'application/json': { schema: OrderAuthorizeResponseSchema } },
    },
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    409: {
      description:
        'The request could not be completed due to a conflict with the current state of the resource. The HTTP `409 Conflict` status code is returned when the requested operation is not allowed because the order or one or more purchase units are in a state that prevents the operation.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            authorize_422_payer_action_required_cib_psd2_sca_ba_in_sc: {
              summary: 'Authorize Order - 422 - Payer Action Required',
              description:
                'This code sample attempts to authorize payment for an order that was created by the api caller and the payment could not be processed due to PSD2 SCA compliance requirement.',
              value: {
                name: 'UNPROCESSABLE_ENTITY',
                details: [
                  {
                    issue: 'PAYER_ACTION_REQUIRED',
                    description:
                      'Transaction cannot complete successfully, instruct the buyer to return to PayPal.',
                  },
                ],
                message:
                  'The requested action could not be performed, semantically incorrect, or failed business validation.',
                debug_id: 'f63fbc340a6ce',
                links: [
                  {
                    href: 'https://developer.paypal.com/api/orders/v2/#error-PAYER_ACTION_REQUIRED',
                    rel: 'information_link',
                    method: 'GET',
                  },
                  {
                    href: 'https://www.paypal.com/checkoutnow?token=9SY02093A2309081P',
                    rel: 'payer-action',
                    method: 'GET',
                  },
                ],
              },
            },
            authorize_422_unprocessable_entity_payment_denied: {
              summary: 'Authorize Order - 422 Unprocessable Entity Error - Payment Denied',
              description:
                'This code sample attempts to authorize an order, but the payment is denied by PayPal. This can occur due to various reasons such as insufficient funds, expired card, incorrect payment information, or payment gateway issues.',
              value: {
                name: 'UNPROCESSABLE_ENTITY',
                details: [
                  {
                    issue: 'PAYMENT_DENIED',
                    description: 'PayPal has declined to process this transaction.',
                  },
                ],
                message:
                  'The requested action could not be performed, semantically incorrect, or failed business validation.',
                debug_id: 'eb476257836d9',
                links: [
                  {
                    href: 'https://developer.paypal.com/docs/api/orders/v2/#error-PAYMENT_DENIED',
                    rel: 'information_link',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  security: [
    {
      Oauth2: [
        'https://uri.paypal.com/services/payments/payment',
        'https://uri.paypal.com/services/payments/orders/deprecating-jssdk-migration-for-limited-merchants',
      ],
    },
  ],
})

export const postV2CheckoutOrdersIdCaptureRoute = createRoute({
  method: 'post',
  path: '/v2/checkout/orders/{id}/capture',
  tags: ['orders'],
  summary: 'Capture payment for order',
  description:
    'Captures payment for an order. To successfully capture payment for an order, the buyer must first approve the order or a valid payment_source must be provided in the request. A buyer can approve the order upon being redirected to the rel:approve URL that was returned in the HATEOAS links in the create order response.<blockquote><strong>Note:</strong> For error handling and troubleshooting, see <a href="https://developer.paypal.com/api/rest/reference/orders/v2/errors/#capture-order">Orders v2 errors</a>.</blockquote>',
  operationId: 'orders.capture',
  request: {
    headers: z.object({
      'PayPal-Request-Id': z
        .string()
        .regex(/^[\S\s]*$/)
        .min(1)
        .max(108)
        .exactOptional()
        .openapi({
          param: {
            name: 'PayPal-Request-Id',
            description:
              'The server stores keys for 6 hours. The API callers can request the times to up to 72 hours by speaking to their Account Manager. It is mandatory for all single-step create order calls (E.g. Create Order Request with payment source information like Card, PayPal.vault_id, PayPal.billing_agreement_id, etc).',
            in: 'header',
            required: false,
            schema: { type: 'string', minLength: 1, maxLength: 108, pattern: '^[\\S\\s]*$' },
            examples: {
              orders_capture_wallet_idempotent: {
                summary: 'Capture Order - Idempotent Response with PayPal Wallet',
                description:
                  'Captures payment for an order after wallet approval with the same idempotency key. By default, uses the minimal representation.',
                value: '7b92603e-77ed-4896-8e78-5dea2050476a',
              },
              capture_422_unprocessable_entity: {
                summary:
                  'Capture Order - 422 Unprocessable Entity Error - Action Does Not Match Intent',
                description:
                  'This code sample attempts to capture payment for an order that was created with `intent=AUTHORIZE`. The operation is incorrect.',
                value: '7b92603e-77ed-4896-8e78-5dea2050476a',
              },
              '00_orders_capture': {
                summary: 'Capture Order - PayPal Wallet as Payment Source',
                description:
                  'Captures payment for an order after wallet approval. By default, uses the minimal representation.',
                value: '7b92603e-77ed-4896-8e78-5dea2050476a',
              },
              capture_422_payer_action_required_cib_psd2_sca_ba_in_sc: {
                summary: 'Capture Order - 422 - Payer Action Required',
                description:
                  'This code sample attempts to capture payment for an order that was created by the api caller and the payment could not be processed due to PSD2 SCA compliance requirement.',
                value: '7b92603e-77ed-4896-8e78-5dea2050476a',
              },
              orders_capture_vault_wallet: {
                summary: 'Capture Order - Minimal Representation with PayPal Wallet Vault ID',
                description:
                  'The partner captures payment for an order after PayPal Wallet approval. By default, uses the minimal representation.',
                value: '7b92603e-77ed-4896-8e78-5dea2050476a',
              },
            },
          },
        }),
      Prefer: z
        .string()
        .regex(/^[a-zA-Z=,-]*$/)
        .min(1)
        .max(25)
        .default('return=minimal')
        .exactOptional()
        .openapi({
          param: {
            name: 'Prefer',
            description:
              'The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>',
            in: 'header',
            required: false,
            schema: {
              type: 'string',
              minLength: 1,
              maxLength: 25,
              pattern: '^[a-zA-Z=,-]*$',
              default: 'return=minimal',
            },
          },
        }),
      'PayPal-Client-Metadata-Id': PaypalClientMetadataIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'PayPal-Auth-Assertion': PaypalAuthAssertionParamsSchema,
    }),
    params: z.object({
      id: z
        .string()
        .regex(/^[A-Z0-9]+$/)
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'id',
            description: 'The ID of the order for which to capture a payment.',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 1, maxLength: 36, pattern: '^[A-Z0-9]+$' },
            examples: {
              '00_orders_capture': {
                summary: 'Capture Order - PayPal Wallet as Payment Source',
                description:
                  'Captures payment for an order after wallet approval. By default, uses the minimal representation.',
                value: '5O190127TN364715T',
              },
              capture_422_payer_action_required_cib_psd2_sca_ba_in_sc: {
                summary: 'Capture Order - 422 - Payer Action Required',
                description:
                  'This code sample attempts to capture payment for an order that was created by the api caller and the payment could not be processed due to PSD2 SCA compliance requirement.',
                value: '5O190127TN364715T',
              },
              capture_422_unprocessable_entity: {
                summary:
                  'Capture Order - 422 Unprocessable Entity Error - Action Does Not Match Intent',
                description:
                  'This code sample attempts to capture payment for an order that was created with `intent=AUTHORIZE`. The operation is incorrect.',
                value: '5O190127TN364715T',
              },
              orders_capture_vault_wallet: {
                summary: 'Capture Order - Minimal Representation with PayPal Wallet Vault ID',
                description:
                  'The partner captures payment for an order after PayPal Wallet approval. By default, uses the minimal representation.',
                value: '5O190127TN364715T',
              },
              orders_capture_wallet_idempotent: {
                summary: 'Capture Order - Idempotent Response with PayPal Wallet',
                description:
                  'Captures payment for an order after wallet approval with the same idempotency key. By default, uses the minimal representation.',
                value: '5O190127TN364715T',
              },
            },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: OrderCaptureRequestSchema,
          examples: {
            '00_orders_capture': {
              summary: 'Capture Order - PayPal Wallet as Payment Source',
              description:
                'Captures payment for an order after wallet approval. By default, uses the minimal representation.',
              value: {},
            },
            capture_422_payer_action_required_cib_psd2_sca_ba_in_sc: {
              summary: 'Capture Order - 422 - Payer Action Required',
              description:
                'This code sample attempts to capture payment for an order that was created by the api caller and the payment could not be processed due to PSD2 SCA compliance requirement.',
              value: {},
            },
            capture_422_unprocessable_entity: {
              summary:
                'Capture Order - 422 Unprocessable Entity Error - Action Does Not Match Intent',
              description:
                'This code sample attempts to capture payment for an order that was created with `intent=AUTHORIZE`. The operation is incorrect.',
              value: {},
            },
            orders_capture_vault_wallet: {
              summary: 'Capture Order - Minimal Representation with PayPal Wallet Vault ID',
              description:
                'The partner captures payment for an order after PayPal Wallet approval. By default, uses the minimal representation.',
              value: {},
            },
            orders_capture_wallet_idempotent: {
              summary: 'Capture Order - Idempotent Response with PayPal Wallet',
              description:
                'Captures payment for an order after wallet approval with the same idempotency key. By default, uses the minimal representation.',
              value: {},
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful response to an idempotent request returns the HTTP `200 OK` status code with a JSON response body that shows captured payment details.',
      content: {
        'application/json': {
          schema: OrderSchema,
          examples: {
            orders_capture_wallet_idempotent: {
              summary: 'Capture Order - Idempotent Response with PayPal Wallet',
              description:
                'Captures payment for an order after wallet approval with the same idempotency key. By default, uses the minimal representation.',
              value: {
                id: '5O190127TN364715T',
                payment_source: {
                  paypal: {
                    name: { given_name: 'John', surname: 'Doe' },
                    email_address: 'customer@example.com',
                    account_id: 'QYR5Z8XDVJNXQ',
                    account_status: 'VERIFIED',
                  },
                },
                purchase_units: [
                  {
                    reference_id: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
                    shipping: {
                      address: {
                        address_line_1: '2211 N First Street',
                        address_line_2: 'Building 17',
                        admin_area_2: 'San Jose',
                        admin_area_1: 'CA',
                        postal_code: '95131',
                        country_code: 'US',
                      },
                    },
                    payments: {
                      captures: [
                        {
                          id: '3C679366HH908993F',
                          status: 'COMPLETED',
                          amount: { currency_code: 'USD', value: '100.00' },
                          seller_protection: {
                            status: 'ELIGIBLE',
                            dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                          },
                          final_capture: true,
                          seller_receivable_breakdown: {
                            gross_amount: { currency_code: 'USD', value: '100.00' },
                            paypal_fee: { currency_code: 'USD', value: '3.00' },
                            net_amount: { currency_code: 'USD', value: '97.00' },
                          },
                          create_time: '2018-04-01T21:20:49Z',
                          update_time: '2018-04-01T21:20:49Z',
                          links: [
                            {
                              href: 'https://api-m.paypal.com/v2/payments/captures/3C679366HH908993F',
                              rel: 'self',
                              method: 'GET',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/payments/captures/3C679366HH908993F/refund',
                              rel: 'refund',
                              method: 'POST',
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
                payer: {
                  name: { given_name: 'John', surname: 'Doe' },
                  email_address: 'customer@example.com',
                  payer_id: 'QYR5Z8XDVJNXQ',
                },
                links: [
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T',
                    rel: 'self',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    201: {
      description:
        'A successful response to a non-idempotent request returns the HTTP `201 Created` status code with a JSON response body that shows captured payment details. If a duplicate response is retried, returns the HTTP `200 OK` status code. By default, the response is minimal. If you need the complete resource representation, pass the <a href="https://developer.paypal.com/docs/api/orders/v2/#orders-authorize-header-parameters"><code>Prefer: return=representation</code> request header</a>.',
      content: {
        'application/json': {
          schema: OrderSchema,
          examples: {
            '00_orders_capture': {
              summary: 'Capture Order - PayPal Wallet as Payment Source',
              description:
                'Captures payment for an order after wallet approval. By default, uses the minimal representation.',
              value: {
                id: '5O190127TN364715T',
                payment_source: {
                  paypal: {
                    name: { given_name: 'John', surname: 'Doe' },
                    email_address: 'customer@example.com',
                    account_id: 'QYR5Z8XDVJNXQ',
                  },
                },
                purchase_units: [
                  {
                    reference_id: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
                    shipping: {
                      address: {
                        address_line_1: '2211 N First Street',
                        address_line_2: 'Building 17',
                        admin_area_2: 'San Jose',
                        admin_area_1: 'CA',
                        postal_code: '95131',
                        country_code: 'US',
                      },
                    },
                    payments: {
                      captures: [
                        {
                          id: '3C679366HH908993F',
                          status: 'COMPLETED',
                          amount: { currency_code: 'USD', value: '100.00' },
                          seller_protection: {
                            status: 'ELIGIBLE',
                            dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                          },
                          final_capture: true,
                          seller_receivable_breakdown: {
                            gross_amount: { currency_code: 'USD', value: '100.00' },
                            paypal_fee: { currency_code: 'USD', value: '3.00' },
                            net_amount: { currency_code: 'USD', value: '97.00' },
                          },
                          create_time: '2018-04-01T21:20:49Z',
                          update_time: '2018-04-01T21:20:49Z',
                          links: [
                            {
                              href: 'https://api-m.paypal.com/v2/payments/captures/3C679366HH908993F',
                              rel: 'self',
                              method: 'GET',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/payments/captures/3C679366HH908993F/refund',
                              rel: 'refund',
                              method: 'POST',
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
                payer: {
                  name: { given_name: 'John', surname: 'Doe' },
                  email_address: 'customer@example.com',
                  payer_id: 'QYR5Z8XDVJNXQ',
                },
                links: [
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T',
                    rel: 'self',
                    method: 'GET',
                  },
                ],
              },
            },
            orders_capture_vault_wallet: {
              summary: 'Capture Order - Minimal Representation with PayPal Wallet Vault ID',
              description:
                'The partner captures payment for an order after PayPal Wallet approval. By default, uses the minimal representation.',
              value: {
                id: '5O190127TN364715T',
                payment_source: {
                  paypal: { attributes: { vault: { id: 'm6yd4yw', status: 'CREATED' } } },
                },
                purchase_units: [
                  {
                    reference_id: 'refernece_id_1001',
                    shipping: {
                      name: { full_name: 'William Chris' },
                      address: {
                        address_line_1: '500 Hillside Street',
                        address_line_2: '#100',
                        admin_area_2: 'San Jose',
                        admin_area_1: 'CA',
                        postal_code: '95131',
                        country_code: 'US',
                      },
                    },
                    payments: {
                      captures: [
                        {
                          id: '54986457XR262021N',
                          status: 'COMPLETED',
                          amount: { currency_code: 'USD', value: '31.01' },
                          final_capture: true,
                          seller_protection: {
                            status: 'ELIGIBLE',
                            dispute_categories: ['ITEM_NOT_RECEIVED', 'UNAUTHORIZED_TRANSACTION'],
                          },
                          seller_receivable_breakdown: {
                            gross_amount: { currency_code: 'USD', value: '31.01' },
                            platform_fees: [
                              {
                                amount: { currency_code: 'USD', value: '10.01' },
                                payee: { merchant_id: 'J8NCBBULP5JH2' },
                              },
                            ],
                            net_amount: { currency_code: 'USD', value: '21.00' },
                          },
                          invoice_id: 'invoice_id_380358551C5240203',
                          custom_id: 'custom_id_1001',
                          links: [
                            {
                              href: 'https://api-m.paypal.com/v2/payments/captures/54986457XR262021N',
                              rel: 'self',
                              method: 'GET',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/payments/captures/54986457XR262021N/refund',
                              rel: 'refund',
                              method: 'POST',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/checkout/orders/12645781RH9888226',
                              rel: 'up',
                              method: 'GET',
                            },
                          ],
                          create_time: '2020-06-08T23:11:34Z',
                          update_time: '2020-06-08T23:11:34Z',
                        },
                      ],
                    },
                  },
                ],
                links: [
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T',
                    rel: 'self',
                    method: 'GET',
                  },
                  {
                    href: 'https://api-m.paypal.com/v2/vault/payment-tokens/m6yd4yw',
                    rel: 'payment-token',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    202: {
      description:
        'The request has been accepted for processing, but the processing has not been completed yet. The server returns the HTTP `202 Accepted` status code to indicate that the request is valid and will be handled asynchronously.',
      content: { 'application/json': { schema: OrderSchema } },
    },
    207: {
      description:
        'The request was successfully processed, but the result contains mixed outcomes. When an order includes multiple purchase units, the server returns the HTTP `207 Multi-Status` code to indicate that one or more purchase units were processed successfully while others failed. The response body provides the processing result for each purchase unit.',
      content: { 'application/json': { schema: OrderSchema } },
    },
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    409: {
      description:
        'The request could not be completed due to a conflict with the current state of the resource. The HTTP `409 Conflict` status code is returned when the requested operation is not allowed because the order or one or more purchase units are in a state that prevents the operation.',
      content: { 'application/json': { schema: ErrorSchema } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            capture_422_payer_action_required_cib_psd2_sca_ba_in_sc: {
              summary: 'Capture Order - 422 - Payer Action Required',
              description:
                'This code sample attempts to capture payment for an order that was created by the api caller and the payment could not be processed due to PSD2 SCA compliance requirement.',
              value: {
                name: 'UNPROCESSABLE_ENTITY',
                details: [
                  {
                    issue: 'PAYER_ACTION_REQUIRED',
                    description:
                      'Transaction cannot complete successfully, instruct the buyer to return to PayPal.',
                  },
                ],
                message:
                  'The requested action could not be performed, semantically incorrect, or failed business validation.',
                debug_id: 'f63fbc340a6ce',
                links: [
                  {
                    href: 'https://developer.paypal.com/api/orders/v2/#error-PAYER_ACTION_REQUIRED',
                    rel: 'information_link',
                    method: 'GET',
                  },
                  {
                    href: 'https://www.paypal.com/checkoutnow?token=5O190127TN364715T',
                    rel: 'payer-action',
                    method: 'GET',
                  },
                ],
              },
            },
            capture_422_unprocessable_entity: {
              summary:
                'Capture Order - 422 Unprocessable Entity Error - Action Does Not Match Intent',
              description:
                'This code sample attempts to capture payment for an order that was created with `intent=AUTHORIZE`. The operation is incorrect.',
              value: {
                name: 'UNPROCESSABLE_ENTITY',
                details: [
                  {
                    location: 'body',
                    issue: 'ACTION_DOES_NOT_MATCH_INTENT',
                    description:
                      'The order was created with an intent of `AUTHORIZE`. To complete authorization, use `/v2/checkout/orders/{order_id}/authorize`. Or, alternately create an order with an intent of `CAPTURE`.',
                  },
                ],
                message:
                  'The requested action could not be performed, semantically incorrect, or failed business validation.',
                debug_id: '90957fca61718',
                links: [
                  {
                    href: 'https://developer.paypal.com/api/orders/v2/#error-ACTION_DOES_NOT_MATCH_INTENT',
                    rel: 'information_link',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  security: [
    {
      Oauth2: [
        'https://uri.paypal.com/services/payments/payment',
        'https://uri.paypal.com/services/payments/orders/deprecating-jssdk-migration-for-limited-merchants',
      ],
    },
  ],
})

export const postV2CheckoutOrdersIdTrackRoute = createRoute({
  method: 'post',
  path: '/v2/checkout/orders/{id}/track',
  tags: ['orders'],
  summary: 'Add tracking information for an Order.',
  description: 'Adds tracking information for an Order.',
  operationId: 'orders.track.create',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[A-Z0-9]+$/)
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'id',
            description: 'The ID of the order that the tracking information is associated with.',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 1, maxLength: 36, pattern: '^[A-Z0-9]+$' },
            examples: {
              orders_track_create_complete_request: {
                summary: 'Add Tracking to Order - Carrier Information and Items Breakdown',
                description: 'Adds tracking information for a PayPal order.',
                value: '5O190127TN364715T',
              },
              orders_track_create_idempotent_complete_request: {
                summary: 'Add Tracking to Order - Idempotent Response',
                description:
                  'Adds tracking information for a PayPal Order with the same capture id & tracking number. Idempotency for trackers is based on the capture_id and tracking_number combination sent in the request body.',
                value: '5O190127TN364715T',
              },
              track_create_422_unprocessable_entity_invalid_capture_status: {
                summary:
                  'Add Tracking to Order - 422 Unprocessable Entity Error - Invalid Capture Status.',
                description:
                  'This code sample attempts to add tracking information for a PayPal order but the request fails as capture status is invalid.',
                value: '5O190127TN364715T',
              },
            },
          },
        }),
    }),
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'PayPal-Auth-Assertion': PaypalAuthAssertionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: OrderTrackerRequestSchema,
          examples: {
            orders_track_create_complete_request: {
              summary: 'Add Tracking to Order - Carrier Information and Items Breakdown',
              description: 'Adds tracking information for a PayPal order.',
              value: {
                capture_id: '8MC585209K746392H',
                tracking_number: '443844607820',
                notify_payer: false,
                items: [
                  {
                    name: 'T-Shirt',
                    sku: 'sku02',
                    quantity: '1',
                    upc: { type: 'UPC-A', code: '012345678901' },
                    image_url: 'https://www.example.com/example.jpg',
                    url: 'https://www.example.com/example',
                  },
                ],
              },
            },
            orders_track_create_idempotent_complete_request: {
              summary: 'Add Tracking to Order - Idempotent Response',
              description:
                'Adds tracking information for a PayPal Order with the same capture id & tracking number. Idempotency for trackers is based on the capture_id and tracking_number combination sent in the request body.',
              value: {
                capture_id: '8MC585209K746392H',
                tracking_number: '443844607820',
                notify_payer: false,
                items: [
                  {
                    name: 'T-Shirt',
                    sku: 'sku01',
                    quantity: '1',
                    upc: { type: 'UPC-A', code: '012345678901' },
                    image_url: 'https://www.example.com/example.jpg',
                    url: 'https://www.example.com/example',
                  },
                ],
              },
            },
            track_create_422_unprocessable_entity_invalid_capture_status: {
              summary:
                'Add Tracking to Order - 422 Unprocessable Entity Error - Invalid Capture Status.',
              description:
                'This code sample attempts to add tracking information for a PayPal order but the request fails as capture status is invalid.',
              value: { capture_id: '8MC585209K746392H', tracking_number: '443844607820' },
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
        'A successful response to an idempotent request returns the HTTP `200 OK` status code with a JSON response body that shows tracker details.',
      content: {
        'application/json': {
          schema: OrderSchema,
          examples: {
            orders_track_create_idempotent_complete_request: {
              summary: 'Add Tracking to Order - Idempotent Response',
              description:
                'Adds tracking information for a PayPal Order with the same capture id & tracking number. Idempotency for trackers is based on the capture_id and tracking_number combination sent in the request body.',
              value: {
                id: '5O190127TN364715T',
                purchase_units: [
                  {
                    reference_id: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
                    items: [
                      {
                        name: 'Air Jordan Shoe',
                        sku: 'sku01',
                        quantity: '1',
                        unit_amount: { currency_code: 'USD', value: '50.00' },
                      },
                      {
                        name: 'T-Shirt',
                        sku: 'sku02',
                        quantity: '1',
                        unit_amount: { currency_code: 'USD', value: '50.00' },
                      },
                    ],
                    shipping: {
                      trackers: [
                        {
                          id: '8MC585209K746392H-443844607820',
                          links: [
                            {
                              href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T',
                              rel: 'up',
                              method: 'GET',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T/trackers/8MC585209K746392H-443844607820',
                              rel: 'edit',
                              method: 'PATCH',
                            },
                          ],
                          create_time: '2022-08-12T21:20:49Z',
                          update_time: '2022-08-12T21:20:49Z',
                        },
                      ],
                    },
                    payments: {
                      captures: [
                        {
                          id: '8MC585209K746392H',
                          status: 'COMPLETED',
                          amount: { currency_code: 'USD', value: '100.00' },
                          seller_protection: { status: 'NOT_ELIGIBLE' },
                          final_capture: true,
                          seller_receivable_breakdown: {
                            gross_amount: { currency_code: 'USD', value: '100.00' },
                            paypal_fee: { currency_code: 'USD', value: '3.00' },
                            net_amount: { currency_code: 'USD', value: '97.00' },
                          },
                          create_time: '2018-04-01T21:20:49Z',
                          update_time: '2018-04-01T21:20:49Z',
                          links: [
                            {
                              href: 'https://api-m.paypal.com/v2/payments/captures/8MC585209K746392H',
                              rel: 'self',
                              method: 'GET',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/payments/captures/8MC585209K746392H/refund',
                              rel: 'refund',
                              method: 'POST',
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
                links: [
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T',
                    rel: 'self',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    201: {
      description:
        'A successful response to a non-idempotent request returns the HTTP `201 Created` status code with a JSON response body that shows tracker details. If a duplicate response is retried, returns the HTTP `200 OK` status code.',
      content: {
        'application/json': {
          schema: OrderSchema,
          examples: {
            orders_track_create_complete_request: {
              summary: 'Add Tracking to Order - Carrier Information and Items Breakdown',
              description: 'Adds tracking information for a PayPal order.',
              value: {
                id: '5O190127TN364715T',
                purchase_units: [
                  {
                    reference_id: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
                    items: [
                      {
                        name: 'Air Jordan Shoe',
                        sku: 'sku01',
                        quantity: '1',
                        unit_amount: { currency_code: 'USD', value: '50.00' },
                      },
                      {
                        name: 'T-Shirt',
                        sku: 'sku02',
                        quantity: '1',
                        unit_amount: { currency_code: 'USD', value: '50.00' },
                      },
                    ],
                    shipping: {
                      trackers: [
                        {
                          id: '8MC585209K746392H-443844607820',
                          links: [
                            {
                              href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T',
                              rel: 'up',
                              method: 'GET',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T/trackers/8MC585209K746392H-443844607820',
                              rel: 'edit',
                              method: 'PATCH',
                            },
                          ],
                          create_time: '2022-08-12T21:20:49Z',
                          update_time: '2022-08-12T21:20:49Z',
                        },
                      ],
                    },
                    payments: {
                      captures: [
                        {
                          id: '8MC585209K746392H',
                          status: 'COMPLETED',
                          amount: { currency_code: 'USD', value: '100.00' },
                          seller_protection: { status: 'NOT_ELIGIBLE' },
                          final_capture: true,
                          seller_receivable_breakdown: {
                            gross_amount: { currency_code: 'USD', value: '100.00' },
                            paypal_fee: { currency_code: 'USD', value: '3.00' },
                            net_amount: { currency_code: 'USD', value: '97.00' },
                          },
                          create_time: '2018-04-01T21:20:49Z',
                          update_time: '2018-04-01T21:20:49Z',
                          links: [
                            {
                              href: 'https://api-m.paypal.com/v2/payments/captures/8MC585209K746392H',
                              rel: 'self',
                              method: 'GET',
                            },
                            {
                              href: 'https://api-m.paypal.com/v2/payments/captures/8MC585209K746392H/refund',
                              rel: 'refund',
                              method: 'POST',
                            },
                          ],
                        },
                      ],
                    },
                  },
                ],
                links: [
                  {
                    href: 'https://api-m.paypal.com/v2/checkout/orders/5O190127TN364715T',
                    rel: 'self',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            track_create_400_missing_parameter: {
              summary: 'Add Tracking to Order - 400 Bad Request - Missing Required Parameter',
              description:
                'This code sample attempts to add tracking information for a PayPal order but required parameter capture id is not passed.',
              value: {
                name: 'INVALID_REQUEST',
                message: 'Request is not well-formed, syntactically incorrect, or violates schema.',
                debug_id: '360ee42996992',
                details: [
                  {
                    field: '/capture_id',
                    issue: 'MISSING_REQUIRED_PARAMETER',
                    description: 'A required field / parameter is missing.',
                    location: 'body',
                  },
                ],
                links: [
                  {
                    href: 'https://developer.paypal.com/api/orders/v2/#error-MISSING_REQUIRED_PARAMETER',
                    rel: 'information_link',
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            track_create_422_unprocessable_entity_invalid_capture_status: {
              summary:
                'Add Tracking to Order - 422 Unprocessable Entity Error - Invalid Capture Status.',
              description:
                'This code sample attempts to add tracking information for a PayPal order but the request fails as capture status is invalid.',
              value: {
                name: 'UNPROCESSABLE_ENTITY',
                message:
                  'The requested action could not be performed, semantically incorrect, or failed business validation.',
                debug_id: '360ee42996992',
                details: [
                  {
                    issue: 'CAPTURE_STATUS_NOT_VALID',
                    description:
                      'Invalid capture status. Tracker information can only be added to captures in `COMPLETED` state.',
                  },
                ],
                links: [
                  {
                    href: 'https://developer.paypal.com/docs/api/orders/v2/#error-CAPTURE_STATUS_NOT_VALID',
                    rel: 'information_link',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/payments/payment'] }],
})

export const patchV2CheckoutOrdersIdTrackersTrackerIdRoute = createRoute({
  method: 'patch',
  path: '/v2/checkout/orders/{id}/trackers/{tracker_id}',
  tags: ['trackers'],
  summary: 'Update or cancel tracking information for an order',
  description:
    'Updates or cancels the tracking information for a PayPal order, by ID. Updatable attributes or objects:<br/><br/><table><thead><th>Attribute</th><th>Op</th><th>Notes</th></thead><tbody></tr><tr><td><code>items</code></td><td>replace</td><td>Using replace op for <code>items</code> will replace the entire <code>items</code> object with the value sent in request.</td></tr><tr><td><code>notify_payer</code></td><td>replace, add</td><td></td></tr><tr><td><code>status</code></td><td>replace</td><td>Only patching status to CANCELLED is currently supported.</td></tr></tbody></table>',
  operationId: 'orders.trackers.patch',
  request: {
    params: z.object({
      id: z
        .string()
        .regex(/^[A-Z0-9]+$/)
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'id',
            description: 'The ID of the order that the tracking information is associated with.',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 1, maxLength: 36, pattern: '^[A-Z0-9]+$' },
            examples: {
              example: {
                summary: 'Example id value',
                description: 'An example value for the id parameter.',
                value: '5O190127TN364715T',
              },
            },
          },
        }),
      tracker_id: z
        .string()
        .regex(/^[A-Z0-9]+$/)
        .min(1)
        .max(36)
        .openapi({
          param: {
            name: 'tracker_id',
            description: 'The order tracking ID.',
            in: 'path',
            required: true,
            schema: { type: 'string', minLength: 1, maxLength: 36, pattern: '^[A-Z0-9]+$' },
            examples: {
              example: {
                summary: 'Example tracker_id value',
                description: 'An example value for the tracker_id parameter.',
                value: '8MC585209K746392H443844607820',
              },
            },
          },
        }),
    }),
    headers: z.object({
      Authorization: AuthorizationParamsSchema,
      'PayPal-Auth-Assertion': PaypalAuthAssertionParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: PatchRequestSchema,
          examples: {
            'orders_trackers_patch_add_notify-payer': {
              summary: 'Patch Tracking Information - Add Notification for a Shipment.',
              description:
                'Updates an order tracking information to add notification for a shipment.',
              value: [{ op: 'add', path: '/notify_payer', value: true }],
            },
            orders_trackers_patch_replace_status: {
              summary: 'Patch Tracking Information - Replace the Status of the Tracker.',
              description:
                'Updates order tracking information to replace the existing status with a new status.',
              value: [{ op: 'replace', path: '/status', value: 'CANCELLED' }],
            },
            trackers_patch_422_cannot_patch_cancelled_tracker: {
              summary:
                'Patch Tracking Information - 422 UNPROCESSABLE ENTITY Error - Cannot patch cancelled tracker.',
              description:
                'This code sample attempts to update an order\'s Tracking information but the request fails as the tracker had been previously transitioned into the "cancelled" state.',
              value: [
                {
                  op: 'replace',
                  path: 'items',
                  value: [
                    {
                      name: 'T-Shirt',
                      sku: 'sku01',
                      quantity: '1',
                      upc: { type: 'UPC-A', code: 'upc001' },
                      image_url: 'https://www.example.com/example1.jpg',
                      url: 'https://www.example.com/example',
                    },
                    {
                      name: 'NeoPhone',
                      sku: 'sku02',
                      quantity: '2',
                      upc: { type: 'UPC-A', code: 'upc002' },
                      image_url: 'https://www.example.com/example2.jpg',
                      url: 'https://www.example.com/example',
                    },
                  ],
                },
              ],
            },
          },
        },
      },
    },
  },
  responses: {
    204: _204ResponseResponse,
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            trackers_patch_400_invalid_patch_value: {
              summary: 'Patch Tracking Information - 400 Bad Request Error - Invalid Request.',
              description:
                'This code sample attempts to update an order tracking information to replace notify_payer, but the request fails due to invalid value in the request.',
              value: {
                name: 'INVALID_REQUEST',
                message: 'Request is not well-formed, syntactically incorrect, or violates schema.',
                debug_id: '2f541ace12987',
                details: [
                  {
                    field: '/notify_payer',
                    issue: 'INVALID_PARAMETER_VALUE',
                    description: 'The value of a field is invalid.',
                    location: 'body',
                  },
                ],
                links: [
                  {
                    href: 'https://developer.paypal.com/docs/api/orders/v2/#error-INVALID_PARAMETER_VALUE',
                    rel: 'information_link',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    404: _404ErrorResponseResponse,
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            trackers_patch_422_cannot_patch_cancelled_tracker: {
              summary:
                'Patch Tracking Information - 422 UNPROCESSABLE ENTITY Error - Cannot patch cancelled tracker.',
              description:
                'This code sample attempts to update an order\'s Tracking information but the request fails as the tracker had been previously transitioned into the "cancelled" state.',
              value: {
                name: 'UNPROCESSABLE_ENTITY',
                message:
                  'The requested action could not be performed, semantically incorrect, or failed business validation.',
                debug_id: '3178dbf457625',
                details: [
                  {
                    field: 'path',
                    value: '/status',
                    location: 'body',
                    issue: 'CANNOT_PATCH_CANCELLED_TRACKER',
                    description: 'Cancelled trackers cannot be modified.',
                  },
                ],
                links: [
                  {
                    href: 'https://developer.paypal.com/docs/api/orders/v2/#error-NOT_PATCHABLE',
                    rel: 'information_link',
                    method: 'GET',
                  },
                ],
              },
            },
          },
        },
      },
    },
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/payments/payment'] }],
})

export const postV2CheckoutOrdersOrderUpdateCallbackRoute = createRoute({
  method: 'post',
  path: '/v2/checkout/orders/order-update-callback',
  tags: ['externalcallback'],
  summary: 'Receive updated order information via callback URL',
  description:
    "The documentation for this 'endpoint' is different from the other endpoints under v2 Orders. For this endpoint the role of client and server is reversed. The client sending the request is PayPal, and the server sending the response is the merchant. In the request, PayPal will send the buyer's redacted shipping address and selected shipping option to the callback URL defined the create order request. The response from the merchant will update the Orders resource.",
  operationId: 'server.callback',
  request: {
    headers: z.object({ Authorization: AuthorizationParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: OrderUpdateCallbackRequestSchema,
          examples: {
            orders_shippingOptionsExternalCallback_discount_code_callback_add_code: {
              summary: 'Discount Code Callback Request - Adding a Discount Code',
              description:
                "The PayPal callback server sends a request with the discount code provided by the buyer, along with the buyer's address and purchase_units of the order, to the merchant listener URL. The request payload represents the event triggered when the buyer applies a discount code. The merchant responds with the updated order details, reflecting the discount applied successfully.",
              value: {
                id: '5O190127TN364715T',
                shipping_address: {
                  country_code: 'US',
                  admin_area_1: 'TX',
                  admin_area_2: 'Dallas',
                  postal_code: '75001',
                },
                purchase_units: [
                  {
                    reference_id: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
                    amount: {
                      currency_code: 'USD',
                      value: '100.00',
                      breakdown: {
                        item_total: { currency_code: 'USD', value: '90.00' },
                        tax_total: { currency_code: 'USD', value: '10.00' },
                        shipping: { currency_code: 'USD', value: '0.00' },
                      },
                    },
                    items: [
                      {
                        name: 'T-Shirt',
                        description: 'Green XL',
                        sku: 'sku01',
                        unit_amount: { currency_code: 'USD', value: '90.00' },
                        tax: { currency_code: 'USD', value: '10.00' },
                        quantity: '1',
                        category: 'PHYSICAL_GOODS',
                      },
                    ],
                  },
                ],
              },
            },
            orders_shippingOptionsExternalCallback_discount_code_callback_add_code_no_address: {
              summary: 'Discount Code Callback Request - Adding a Discount Code - No Address',
              description:
                'The PayPal callback server sends a request with the discount code provided by the buyer, along with the purchase_units of the order, to the merchant listener URL. The request payload represents the event triggered when the buyer applies a discount code to an order that does not require shipping. The merchant responds with the updated order details, reflecting the discount applied successfully.',
              value: {
                id: '5O190127TN364715T',
                purchase_units: [
                  {
                    reference_id: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
                    amount: {
                      currency_code: 'USD',
                      value: '100.00',
                      breakdown: {
                        item_total: { currency_code: 'USD', value: '90.00' },
                        tax_total: { currency_code: 'USD', value: '10.00' },
                        shipping: { currency_code: 'USD', value: '0.00' },
                      },
                    },
                    items: [
                      {
                        name: 'E-book',
                        description: 'Digital E-book',
                        sku: 'sku01',
                        unit_amount: { currency_code: 'USD', value: '90.00' },
                        tax: { currency_code: 'USD', value: '10.00' },
                        quantity: '1',
                        category: 'DIGITAL_GOODS',
                      },
                    ],
                  },
                ],
              },
            },
            orders_shippingOptionsExternalCallback_discount_code_callback_remove_code: {
              summary: 'Discount Code Callback Request - Removing a Discount Code',
              description:
                "The PayPal callback server sends a request with the discount code the buyer wants to remove, along with the buyer's address and purchase_units of the order, to the merchant listener URL. The request payload represents the event triggered when the buyer removes a discount code. The merchant responds with the updated order details, reflecting the discount removal.",
              value: {
                id: '5O190127TN364715T',
                shipping_address: {
                  country_code: 'US',
                  admin_area_1: 'TX',
                  admin_area_2: 'Dallas',
                  postal_code: '75001',
                },
                purchase_units: [
                  {
                    reference_id: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
                    amount: {
                      currency_code: 'USD',
                      value: '90.00',
                      breakdown: {
                        item_total: { currency_code: 'USD', value: '90.00' },
                        tax_total: { currency_code: 'USD', value: '10.00' },
                        shipping: { currency_code: 'USD', value: '0.00' },
                        discount: { currency_code: 'USD', value: '10.00' },
                      },
                    },
                    items: [
                      {
                        name: 'T-Shirt',
                        description: 'Green XL',
                        sku: 'sku01',
                        unit_amount: { currency_code: 'USD', value: '90.00' },
                        tax: { currency_code: 'USD', value: '10.00' },
                        quantity: '1',
                        category: 'PHYSICAL_GOODS',
                      },
                    ],
                  },
                ],
              },
            },
            orders_shippingOptionsExternalCallback_shipping_address_callback_address_alone: {
              summary: 'Shipping Options Callback Request - Shipping Address Only Event',
              description:
                'The PayPal callback server sends request with a buyer\'s shipping address, and the purchase_units of the order, to the merchant listener URL. The request payload is an example of the event that will be sent as soon as the buyer is presented with the "PayPal Buyer Approval" page. The merchant responds with a the appropriate tax calculation for the shipping address, and a list of available shipping options.',
              value: {
                id: '8HFTASDATTV',
                shipping_address: {
                  country_code: 'US',
                  admin_area_1: 'TX',
                  admin_area_2: 'Dallas',
                  postal_code: '75001',
                },
                purchase_units: [
                  {
                    reference_id: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
                    amount: { currency_code: 'USD', value: '100.00' },
                  },
                ],
              },
            },
            orders_shippingOptionsExternalCallback_shipping_address_callback_with_address_and_options:
              {
                summary:
                  'Shipping Options Callback Request - Shipping Address and Shipping Options Event',
                description:
                  "The PayPal callback server sends request with a buyer's shipping address, the shipping option the buyer selected, and the purchase_units of the order, to the merchant listener URL. The merchant responds with a the appropriate tax calculation and breakdown for the given address and shipping option combination.",
                value: {
                  id: '5O190127TN364715T',
                  shipping_address: {
                    country_code: 'US',
                    admin_area_1: 'TX',
                    admin_area_2: 'Dallas',
                    postal_code: '75001',
                  },
                  purchase_units: [
                    {
                      reference_id: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
                      amount: { currency_code: 'USD', value: '100.00' },
                    },
                  ],
                },
              },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'The callback to merchant was successful.',
      content: {
        'application/json': {
          schema: OrderUpdateCallbackResponseSchema,
          examples: {
            orders_shippingOptionsExternalCallback_discount_code_callback_add_code: {
              summary: 'Discount Code Callback Request - Adding a Discount Code',
              description:
                "The PayPal callback server sends a request with the discount code provided by the buyer, along with the buyer's address and purchase_units of the order, to the merchant listener URL. The request payload represents the event triggered when the buyer applies a discount code. The merchant responds with the updated order details, reflecting the discount applied successfully.",
              value: {
                id: '5O190127TN364715T',
                purchase_units: {
                  reference_id: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
                  amount: {
                    currency_code: 'USD',
                    value: '90.00',
                    breakdown: {
                      item_total: { currency_code: 'USD', value: '90.00' },
                      tax_total: { currency_code: 'USD', value: '10.00' },
                      shipping: { currency_code: 'USD', value: '0.00' },
                      discount: {
                        currency_code: 'USD',
                        value: '10.00',
                        breakdown: [
                          {
                            value: '10.00',
                            currency_code: 'USD',
                            discount_code: 'SUMMER_SALE',
                            description: '$10 off for summer sale',
                          },
                        ],
                      },
                    },
                  },
                  items: [
                    {
                      name: 'T-Shirt',
                      description: 'Green XL',
                      sku: 'sku01',
                      unit_amount: { currency_code: 'USD', value: '90.00' },
                      tax: { currency_code: 'USD', value: '10.00' },
                      quantity: '1',
                      category: 'PHYSICAL_GOODS',
                    },
                  ],
                  shipping: {
                    options: [
                      {
                        id: 'FEDEX',
                        amount: { currency_code: 'USD', value: '0.00' },
                        type: 'SHIPPING',
                        label: 'Free Shipping',
                        selected: true,
                      },
                    ],
                  },
                },
              },
            },
            orders_shippingOptionsExternalCallback_discount_code_callback_add_code_no_address: {
              summary: 'Discount Code Callback Request - Adding a Discount Code - No Address',
              description:
                'The PayPal callback server sends a request with the discount code provided by the buyer, along with the purchase_units of the order, to the merchant listener URL. The request payload represents the event triggered when the buyer applies a discount code to an order that does not require shipping. The merchant responds with the updated order details, reflecting the discount applied successfully.',
              value: { id: '5O190127TN364715T' },
            },
            orders_shippingOptionsExternalCallback_discount_code_callback_remove_code: {
              summary: 'Discount Code Callback Request - Removing a Discount Code',
              description:
                "The PayPal callback server sends a request with the discount code the buyer wants to remove, along with the buyer's address and purchase_units of the order, to the merchant listener URL. The request payload represents the event triggered when the buyer removes a discount code. The merchant responds with the updated order details, reflecting the discount removal.",
              value: {
                id: '5O190127TN364715T',
                purchase_units: {
                  reference_id: 'd9f80740-38f0-11e8-b467-0ed5f89f718b',
                  amount: {
                    currency_code: 'USD',
                    value: '100.00',
                    breakdown: {
                      item_total: { currency_code: 'USD', value: '90.00' },
                      tax_total: { currency_code: 'USD', value: '10.00' },
                      shipping: { currency_code: 'USD', value: '0.00' },
                    },
                  },
                  items: [
                    {
                      name: 'T-Shirt',
                      description: 'Green XL',
                      sku: 'sku01',
                      unit_amount: { currency_code: 'USD', value: '90.00' },
                      tax: { currency_code: 'USD', value: '10.00' },
                      quantity: '1',
                      category: 'PHYSICAL_GOODS',
                    },
                  ],
                  shipping: {
                    options: [
                      {
                        id: 'FEDEX',
                        amount: { currency_code: 'USD', value: '0.00' },
                        type: 'SHIPPING',
                        label: 'Free Shipping',
                        selected: true,
                      },
                    ],
                  },
                },
              },
            },
            orders_shippingOptionsExternalCallback_shipping_address_callback_address_alone: {
              summary: 'Shipping Options Callback Request - Shipping Address Only Event',
              description:
                'The PayPal callback server sends request with a buyer\'s shipping address, and the purchase_units of the order, to the merchant listener URL. The request payload is an example of the event that will be sent as soon as the buyer is presented with the "PayPal Buyer Approval" page. The merchant responds with a the appropriate tax calculation for the shipping address, and a list of available shipping options.',
              value: { id: '8HFTASDATTV' },
            },
            orders_shippingOptionsExternalCallback_shipping_address_callback_with_address_and_options:
              {
                summary:
                  'Shipping Options Callback Request - Shipping Address and Shipping Options Event',
                description:
                  "The PayPal callback server sends request with a buyer's shipping address, the shipping option the buyer selected, and the purchase_units of the order, to the merchant listener URL. The merchant responds with a the appropriate tax calculation and breakdown for the given address and shipping option combination.",
                value: { id: '8HFTASDATTV' },
              },
          },
        },
      },
    },
    400: {
      description:
        'The request is not well-formed, is syntactically incorrect, or violates the schema.',
      content: { 'application/json': { schema: OrderUpdateCallbackErrorResponseSchema } },
    },
    401: _401ErrorResponseResponse,
    403: _403ErrorResponseResponse,
    422: {
      description:
        'The requested action could not be completed, was semantically incorrect, or failed business validation.',
      content: { 'application/json': { schema: OrderUpdateCallbackErrorResponseSchema } },
    },
    500: _500ErrorResponseResponse,
    default: DefaultResponseResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/payments/payment'] }],
})
