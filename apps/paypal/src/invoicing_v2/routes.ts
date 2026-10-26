import { createRoute, z } from '@hono/zod-openapi'

const CurrencyCodeSchema = z
  .string()
  .length(3)
  .openapi({
    description:
      'The [three-character ISO-4217 currency code](/api/rest/reference/currency-codes/) that identifies the currency.',
    'x-security-classification': { data_class: 'class4', data_category: 'INTRINSIC' },
  })
  .openapi('CurrencyCode')

const MoneySchema = z
  .object({
    currency_code: CurrencyCodeSchema,
    value: z
      .string()
      .regex(/^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$/)
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

const PartialPaymentSchema = z
  .object({
    allow_partial_payment: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the invoice allows a partial payment. If `false`, the invoice must be paid in full. If `true`, the invoice allows partial payments.<blockquote><strong>Note:</strong> This feature is not available for users in `India`, `Brazil`, or `Israel`.</blockquote>',
      }),
    minimum_amount_due: MoneySchema.exactOptional().openapi({
      description:
        'The minimum amount allowed for a partial payment. Valid only when `allow_partial_payment` is `true`.',
    }),
  })
  .openapi({
    title: 'Partial Payment',
    description:
      'The partial payment details. Includes the minimum amount that the invoicer expects from the payer.',
    required: [],
  })
  .openapi('PartialPayment')

const TemplateConfigurationSchema = z
  .object({
    tax_calculated_after_discount: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the tax is calculated before or after a discount. If `false`, the tax is calculated before a discount. If `true`, the tax is calculated after a discount.',
      }),
    tax_inclusive: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Indicates whether the unit price includes tax.' }),
    allow_tip: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the invoice enables the customer to enter a tip amount during payment. If `true`, the invoice shows a tip amount field so that the customer can enter a tip amount. If `false`, the invoice does not show a tip amount field.<blockquote><strong>Note:</strong> This feature is not available for users in `Hong Kong`, `Taiwan`, `India`, or `Japan`.</blockquote>',
      }),
    partial_payment: PartialPaymentSchema.exactOptional().openapi({
      description:
        'The partial payment details. Includes the minimum amount that the invoicer wants the payer to pay.',
    }),
    has_conditional_rule: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates whether conditional pricing rules are applied to the invoice. If `true`, pricing rules (such as discounts or surcharges based on specific conditions) are applied. If `false`, no conditional pricing rules are applied.',
      }),
  })
  .openapi({
    title: 'Template Configuration',
    description:
      'The template configuration details. Includes tax information, tip, and partial payment.',
    required: [],
  })
  .openapi('TemplateConfiguration')

type ConfigurationType = z.infer<typeof TemplateConfigurationSchema> & { template_id?: string }

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

const TemplateMetadataSchema = z
  .object({
    create_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the resource was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      readOnly: true,
    }),
    created_by: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description: 'The email address of the account that created the resource.',
        readOnly: true,
      }),
    last_update_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the resource was last edited, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      readOnly: true,
    }),
    last_updated_by: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description: 'The email address of the account that last edited the resource.',
        readOnly: true,
      }),
  })
  .openapi({
    title: 'Template Metadata',
    description: 'The audit metadata. Captures all template actions on create and update.',
    required: [],
  })
  .openapi('TemplateMetadata')

const InvoiceCreationFlowSchema = z
  .enum(['MULTIPLE_RECIPIENTS_GROUP', 'BATCH', 'REGULAR_SINGLE'])
  .openapi({
    title: 'Invoice Creation Flow',
    description:
      'The frequency at which the invoice is sent:<ul><li>Multiple recipient. Sent to multiple recipients.</li><li>Batch. Sent in a batch.</li><li>Regular single. Sent one time to a single recipient.</li></ul>',
    'x-enumDescriptions': [
      {
        value: 'MULTIPLE_RECIPIENTS_GROUP',
        description: 'The invoice sent to multiple recipients.',
      },
      { value: 'BATCH', description: 'The invoice sent as a batch.' },
      { value: 'REGULAR_SINGLE', description: 'The regular invoice sent to single recipient.' },
    ],
  })
  .openapi('InvoiceCreationFlow')

type MetadataType = z.infer<typeof TemplateMetadataSchema> & {
  cancel_time?: z.infer<typeof DateTimeSchema>
  cancelled_by?: string
  first_sent_time?: z.infer<typeof DateTimeSchema>
  last_sent_time?: z.infer<typeof DateTimeSchema>
  last_sent_by?: string
  created_by_flow?: z.infer<typeof InvoiceCreationFlowSchema>
  recipient_view_url?: string
  invoicer_view_url?: string
}

const _400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_INTEGER_MAX_VALUE').exactOptional(),
              description: z.literal('Value exceeds max value.').exactOptional(),
            })
            .openapi({ title: 'INVALID_INTEGER_MAX_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_INTEGER_MIN_VALUE').exactOptional(),
              description: z.literal('Value less than minimum value.').exactOptional(),
            })
            .openapi({ title: 'INVALID_INTEGER_MIN_VALUE', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_400')

const _403Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('PERMISSION_DENIED').exactOptional(),
              description: z
                .literal('The requested invoice is not associated with the requested user.')
                .exactOptional(),
            })
            .openapi({ title: 'PERMISSION_DENIED', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_403')

const _422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('USER_NOT_FOUND').exactOptional(),
              description: z
                .literal('User is not associated with paypal based on invoicer email.')
                .exactOptional(),
            })
            .openapi({ title: 'USER_NOT_FOUND', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_422')

const AddressDetailsSchema = z
  .object({
    street_number: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'The street number.' }),
    street_name: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'The street name. Just `Drury` in `Drury Lane`.' }),
    street_type: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description: 'The street type. For example, avenue, boulevard, road, or expressway.',
      }),
    delivery_service: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description: 'The delivery service. Post office box, bag number, or post office name.',
      }),
    building_name: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'A named locations that represents the premise. Usually a building name or number or collection of buildings with a common name or number. For example, <code>Craven House</code>.',
      }),
    sub_building: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The first-order entity below a named building or location that represents the sub-premises. Usually a single building within a collection of buildings with a common name. Can be a flat, story, floor, room, or apartment.',
      }),
  })
  .openapi({
    title: 'Address Details',
    description:
      'The non-portable additional address details that are sometimes needed for compliance, risk, or other scenarios where fine-grain address information might be needed. Not portable with common third party and open source. Redundant with core fields.<br/>For example, `address_portable.address_line_1` is usually a combination of `address_details.street_number`, `street_name`, and `street_type`.',
    required: [],
  })
  .openapi('AddressDetails')

const CountryCodeSchema = z
  .string()
  .regex(/^([A-Z]{2}|C2)$/)
  .length(2)
  .openapi({
    description:
      'The [two-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>',
  })
  .openapi('CountryCode')

const AddressPortableSchema = z
  .object({
    address_line_1: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description:
          'The first line of the address. For example, number or street. For example, `173 Drury Lane`. Required for data entry and compliance and risk checks. Must contain the full address.',
      }),
    address_line_2: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description: 'The second line of the address. For example, suite or apartment number.',
      }),
    address_line_3: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The third line of the address, if needed. For example, a street complement for Brazil, direction text, such as `next to Walmart`, or a landmark in an Indian address.',
      }),
    admin_area_4: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The neighborhood, ward, or district. Smaller than `admin_area_level_3` or `sub_locality`. Value is:<ul><li>The postal sorting code for Guernsey and many French territories, such as French Guiana.</li><li>The fine-grained administrative levels in China.</li></ul>',
      }),
    admin_area_3: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'A sub-locality, suburb, neighborhood, or district. Smaller than `admin_area_level_2`. Value is:<ul><li>Brazil. Suburb, bairro, or neighborhood.</li><li>India. Sub-locality or district. Street name information is not always available but a sub-locality or district can be a very small area.</li></ul>',
      }),
    admin_area_2: z
      .string()
      .max(120)
      .exactOptional()
      .openapi({ description: 'A city, town, or village. Smaller than `admin_area_level_1`.' }),
    admin_area_1: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description:
          'The highest level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. Format for postal delivery. For example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A kanton.</li></ul>',
      }),
    postal_code: z
      .string()
      .max(60)
      .exactOptional()
      .openapi({
        description:
          'The postal code, which is the zip code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).',
      }),
    country_code: CountryCodeSchema,
    address_details: AddressDetailsSchema.exactOptional(),
  })
  .openapi({
    title: 'Portable Postal Address (Medium-Grained)',
    description:
      'The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).',
    required: ['country_code'],
  })
  .openapi('AddressPortable')

const AddressPortableListSchema = z
  .array(AddressPortableSchema)
  .min(0)
  .max(2147483647)
  .openapi({ description: "An array of addresses in the user's PayPal profile.", readOnly: true })
  .openapi('AddressPortableList')

const PercentageSchema = z
  .string()
  .regex(/^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$/)
  .openapi({
    description:
      'The percentage, as a fixed-point, signed decimal number. For example, define a 19.99% interest rate as `19.99`.',
  })
  .openapi('Percentage')

const DiscountSchema = z
  .object({
    percent: PercentageSchema.exactOptional().openapi({
      description:
        'The discount as a percentage value. Value is from `0` to `100`. Supports up to five decimal places.',
    }),
    amount: MoneySchema.exactOptional().openapi({
      description:
        'The invoice level discount amount. Value is from `0` to `1000000`. Supports up to two decimal places.',
    }),
  })
  .openapi({
    title: 'Discount',
    description:
      'The discount as a percent or amount at invoice level. The invoice discount amount is subtracted from the item total.',
    required: [],
  })
  .openapi('Discount')

const AggregatedDiscountSchema = z
  .object({
    invoice_discount: DiscountSchema.exactOptional().openapi({
      description:
        'The discount as a percent or amount at invoice level. The invoice discount amount is subtracted from the item total.',
    }),
    item_discount: MoneySchema.exactOptional().openapi({
      description:
        'The discount as a percent or amount at item level. The item discount amount is subtracted from each item amount.',
    }),
  })
  .openapi({
    title: 'Aggregated Discount',
    description:
      'The discount. Can be an item- or invoice-level discount, or both. Can be applied as a percent or amount. If you provide both amount and percent, amount takes precedent.',
    required: [],
  })
  .openapi('AggregatedDiscount')

const AmountRangeSchema = z
  .object({
    lower_amount: MoneySchema.openapi({ description: 'The lower limit of the amount range.' }),
    upper_amount: MoneySchema.openapi({ description: 'The upper limit of the amount range.' }),
  })
  .openapi({
    title: 'Amount Range',
    description: 'The amount range.',
    required: ['lower_amount', 'upper_amount'],
  })
  .openapi('AmountRange')

const TaxSchema = z
  .object({
    name: z
      .string()
      .regex(/^[\s\S]*$/)
      .min(0)
      .max(100)
      .openapi({ description: 'The name of the tax applied on the invoice items.' }),
    percent: PercentageSchema.openapi({
      description: 'The tax rate. Value is from `0` to `100`. Supports up to five decimal places.',
    }),
    amount: MoneySchema.exactOptional().openapi({
      description: 'The calculated tax amount. The tax amount is added to the item total.',
      readOnly: true,
    }),
    tax_note: z
      .string()
      .regex(/^[\s\S]*$/)
      .min(0)
      .max(40)
      .exactOptional()
      .openapi({ description: 'The tax note used to track the tax related data.' }),
  })
  .openapi({
    title: 'Tax',
    description:
      'The tax information. Includes the tax name and tax rate of invoice items. The tax amount is added to the item total.',
    required: ['name', 'percent'],
  })
  .openapi('Tax')

const ShippingCostSchema = z
  .object({
    amount: MoneySchema.exactOptional().openapi({
      description:
        'The shipping amount. Value is from `0` to `1000000`. Supports up to two decimal places.',
    }),
    tax: TaxSchema.exactOptional().openapi({
      description: 'The tax associated with the shipping.',
    }),
  })
  .openapi({
    title: 'Shipping Cost',
    description: 'The shipping fee for all items. Includes tax on shipping.',
    required: [],
  })
  .openapi('ShippingCost')

const CustomAmountSchema = z
  .object({
    label: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(50)
      .openapi({ description: 'The label to the custom amount of the invoice.' }),
    amount: MoneySchema.exactOptional().openapi({
      description:
        'The custom amount value. Value is from `-1000000` to `1000000`. Supports up to two decimal places.',
    }),
  })
  .openapi({
    title: 'Custom Amount',
    description:
      'The custom amount to apply to an invoice. If you include a label, you must include a custom amount.',
    required: ['label'],
  })
  .openapi('CustomAmount')

const AmountWithBreakdownSchema = z
  .object({
    item_total: MoneySchema.exactOptional().openapi({
      description:
        'The subtotal for all items. Must equal the sum of (`items[].unit_amount` * `items[].quantity`) for all items.',
    }),
    discount: AggregatedDiscountSchema.exactOptional().openapi({
      description:
        'The discount can be at the item or invoice level, or both. Can be applied as a percent or amount. If you provide both amount and percent, amount takes precedent.',
    }),
    tax_total: MoneySchema.exactOptional().openapi({
      description: 'The aggregated amount of the item and shipping taxes.',
    }),
    shipping: ShippingCostSchema.exactOptional().openapi({
      description: 'The shipping fee for all items. Includes tax on shipping.',
    }),
    custom: CustomAmountSchema.exactOptional().openapi({
      description:
        'The custom amount to apply to an invoice. If you include a label, you must include the custom amount.',
    }),
  })
  .openapi({
    title: 'Amount with Breakdown',
    description:
      'The breakdown of the amount. Includes total item amount, total tax amount, custom amount, and shipping and discounts, if any.',
    required: [],
  })
  .openapi('AmountWithBreakdown')

const AmountSummaryDetailSchema = z
  .object({
    currency_code: CurrencyCodeSchema.exactOptional(),
    value: z
      .string()
      .regex(/^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$/)
      .min(0)
      .max(32)
      .exactOptional()
      .openapi({
        description:
          'The value, which might be:<ul><li>An integer for currencies like `JPY` that are not typically fractional.</li><li>A decimal fraction for currencies like `TND` that are subdivided into thousandths.</li></ul>For the required number of decimal places for a currency code, see [Currency Codes](/docs/integration/direct/rest/currency-codes/).',
      }),
    breakdown: AmountWithBreakdownSchema.exactOptional().openapi({
      description:
        'The breakdown of the amount. Breakdown provides details such as total item amount, total tax amount, custom amount, shipping and discounts, if any.',
    }),
  })
  .openapi({
    title: 'Invoice Amount Summary',
    description: 'The invoice amount summary of item total, discount, tax total, and shipping.',
    required: [],
  })
  .openapi('AmountSummaryDetail')

const BusinessNameSchema = z
  .object({
    business_name: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({ description: 'Required. The business name of the party.' }),
  })
  .openapi({ title: 'Business Name', description: 'The business name of the party.', required: [] })
  .openapi('BusinessName')

const NameSchema = z
  .object({
    prefix: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: "The prefix, or title, to the party's name." }),
    given_name: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: "When the party is a person, the party's given, or first, name." }),
    surname: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({
        description:
          "When the party is a person, the party's surname or family name. Also known as the last name. Required when the party is a person. Use also to store multiple surnames including the matronymic, or mother's, surname.",
      }),
    middle_name: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({
        description:
          "When the party is a person, the party's middle name. Use also to store multiple middle names including the patronymic, or father's, middle name.",
      }),
    suffix: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({ description: "The suffix for the party's name." }),
    alternate_full_name: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description:
          "DEPRECATED. The party's alternate name. Can be a business name, nickname, or any other name that cannot be split into first, last name. Required when the party is a business.",
      }),
    full_name: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({ description: "When the party is a person, the party's full name." }),
  })
  .openapi({ title: 'Name', description: 'The name of the party.', required: [] })
  .openapi('Name')

const ContactNameAddressSchema = BusinessNameSchema.and(
  z
    .object({
      name: NameSchema.exactOptional().openapi({
        description: 'The first and Last name of the recipient.',
      }),
      address: AddressPortableSchema.exactOptional().openapi({
        description: 'The address of the recipient.',
      }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'Contact Information',
    description: 'The contact information of the user. Includes name and address.',
  })
  .openapi('ContactNameAddress')

const RestrictiveEmailAddressSchema = z
  .string()
  .regex(
    /^(?!\.)(?:[A-Za-z0-9!#$&'*\/=?^`{|}~_%+-]|\.(?!\.)){1,64}(?<!\.)@(?:[A-Za-z0-9-]|\.(?!\.))+\.[a-zA-Z]{2,}$/,
  )
  .min(3)
  .max(254)
  .openapi({
    description:
      "The internationalized email address with more restrictive rules. This version restricts the local-part to a dot-atom as defined in https://www.ietf.org/rfc/rfc5322.txt. It does not allow for a quoted-string or an obs-local-part. <ul><li>Allows alphanumeric and RFC-allowed special characters, !#$%&'*+-/=?^_`{|}~</li><li>Ensures that the local part does not start with dot (.), have consecutive dots, or end with dot. Ensures that the domain part does not have consecutive dots.</li><li>Ensures that the local part does not exceed 64 characters.</li></ul><blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>",
  })
  .openapi('RestrictiveEmailAddress')

const PhoneSchema = z
  .object({
    country_code: z
      .string()
      .regex(/^[0-9]{1,3}?$/)
      .min(1)
      .max(3)
      .openapi({
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

const PhoneTypeSchema = z
  .enum(['FAX', 'HOME', 'MOBILE', 'OTHER', 'PAGER'])
  .openapi({ title: 'Phone Type', description: 'The phone type.' })
  .openapi('PhoneType')

const PhoneDetailSchema = PhoneSchema.and(
  z.object({ phone_type: PhoneTypeSchema.exactOptional() }).openapi({ required: [] }),
)
  .openapi({
    title: 'Phone Detail',
    description: 'The phone details. Includes the phone number and type.',
    required: ['phone_type'],
  })
  .openapi('PhoneDetail')

const DefinitionsPhoneDetailListSchema = z
  .array(PhoneDetailSchema)
  .openapi({
    description: "The invoice recipient's phone numbers. Extension number is not supported.",
  })
  .openapi('DefinitionsPhoneDetailList')

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

const BillingInfoSchema = ContactNameAddressSchema.and(
  z
    .object({
      email_address: RestrictiveEmailAddressSchema.exactOptional().openapi({
        description:
          'The invoice recipient email address. If you omit this value, the invoice is payable and a notification email is not sent.',
      }),
      phones: DefinitionsPhoneDetailListSchema.exactOptional(),
      additional_info: z
        .string()
        .max(40)
        .exactOptional()
        .openapi({ description: 'Any additional information about the recipient.' }),
      language: LanguageSchema.exactOptional().openapi({
        description:
          "The language in which to show the invoice recipient's email message. Used only when the recipient does not have a PayPal account. If you omit the language and the recipient does not have a PayPal account, the email message is sent in the language of the merchant's PayPal account.",
      }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'Billing Information',
    description:
      'The billing information of the invoice recipient. Includes name, address, email, phone, and language.',
  })
  .openapi('BillingInfo')

const ConfigurationSchema: z.ZodType<ConfigurationType> = z
  .lazy(() =>
    TemplateConfigurationSchema.and(
      z
        .object({
          template_id: z
            .string()
            .max(30)
            .default('PayPal system template')
            .exactOptional()
            .openapi({
              description:
                "The template ID. The template determines the layout of the invoice. Includes which fields to show and hide.<blockquote><strong>Note:</strong> This is an optional field. If you wish to customize the invoice layout using a specific template, provide a valid template ID here. You can either use an existing template ID or create a new template via the create template API and then use the newly created template's ID.</blockquote>",
            }),
        })
        .openapi({ required: [] }),
    ).openapi({
      title: 'Configuration',
      description:
        'The invoice configuration details. Includes partial payment, tip, and tax calculated after discount.',
    }),
  )
  .openapi('Configuration')

const ConnectionSchema = z
  .object({
    platform_name: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({
        description:
          'The name of the platform. This property supports Unicode. The pattern is not provided because the value is defined by an external party.',
      }),
    last_sync_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the resource is last synced with the accounting platform. This property supports Unicode.',
    }),
    last_sync_status: z
      .enum(['IN_PROGRESS', 'SUCCESS', 'FAILED'])
      .exactOptional()
      .openapi({
        description: 'The status of the last sync. This property supports Unicode.',
        'x-enumDescriptions': [
          { value: 'IN_PROGRESS', description: 'The last sync process has started.' },
          { value: 'SUCCESS', description: 'The last sync process is success.' },
          { value: 'FAILED', description: 'The last sync process failed.' },
        ],
      }),
  })
  .openapi({
    title: 'Connections',
    description: 'This lists last sync status and connection platform name.',
    required: [],
  })
  .openapi('Connection')

const ConnectionListSchema = z
  .array(ConnectionSchema)
  .min(1)
  .max(1000)
  .openapi({ description: 'An array of connection-level details.' })
  .openapi('ConnectionList')

const ConnectionsSchema = z
  .object({ connections: ConnectionListSchema.exactOptional() })
  .openapi({
    title: 'Connections',
    description:
      'This object contains an array of connection details. It is used to load sync status for a user.',
    required: [],
  })
  .openapi('Connections')

const ConnectionsListSchema = z
  .array(ConnectionsSchema)
  .min(1)
  .max(1000)
  .openapi({ description: 'An array of connection-level details.' })
  .openapi('ConnectionsList')

const DateNoTimeSchema = z
  .string()
  .regex(/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/)
  .length(10)
  .openapi({
    description:
      'The stand-alone date, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). To represent special legal values, such as a date of birth, you should use dates with no associated time or time-zone data. Whenever possible, use the standard `date_time` type. This regular expression does not validate all dates. For example, February 31 is valid and nothing is known about leap years.',
  })
  .openapi('DateNoTime')

const DateRangeSchema = z
  .object({
    start: DateNoTimeSchema.openapi({
      description:
        'The start date of the range. Filters invoices by creation date, invoice date, due date, and payment date.',
    }),
    end: DateNoTimeSchema.openapi({
      description:
        'The end date of the range. Filters invoices by creation date, invoice date, due date, and payment date.',
    }),
  })
  .openapi({
    title: 'Date Range',
    description:
      'The date range. Filters invoices by creation date, invoice date, due date, and payment date.',
    required: ['start', 'end'],
  })
  .openapi('DateRange')

const DateTimeRangeSchema = z
  .object({
    start: DateTimeSchema.openapi({
      description:
        'The start date of the range. Filters invoices by creation date, invoice date, due date, and payment date.',
    }),
    end: DateTimeSchema.openapi({
      description:
        'The end date of the range. Filters invoices by creation date, invoice date, due date, and payment date. <blockquote><strong>Note: The regular expression provides guidance but does not reject all invalid dates.</strong></blockquote><br/>Minimum length: 20.<br/>Maximum length: 64<br/>Pattern: <code>^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$</code>',
    }),
  })
  .openapi({
    title: 'Date and Time Range',
    description:
      'The date and time range. Filters invoices by creation date, invoice date, due date, and payment date.',
    required: ['start', 'end'],
  })
  .openapi('DateTimeRange')

const UnitOfMeasureSchema = z
  .enum(['QUANTITY', 'HOURS', 'AMOUNT'])
  .openapi({
    description: 'The unit of measure for the invoiced item.',
    'x-enumDescriptions': [
      {
        value: 'QUANTITY',
        description:
          'The unit of measure is quantity. This invoice template is typically used for physical goods.',
      },
      {
        value: 'HOURS',
        description:
          'The unit of measure is hours. This invoice template is typically used for services.',
      },
      {
        value: 'AMOUNT',
        description:
          'The unit of measure is amount. This invoice template is typically used when only amount is required.',
      },
    ],
  })
  .openapi('UnitOfMeasure')

const ItemSchema = z
  .object({
    id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(22)
      .exactOptional()
      .openapi({ description: 'The ID of the invoice line item.', readOnly: true }),
    name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(200)
      .openapi({ description: 'The item name for the invoice line item.' }),
    description: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(1000)
      .exactOptional()
      .openapi({ description: 'The item description for the invoice line item.' }),
    quantity: z
      .string()
      .regex(/\d+(.\d{1,5})?$/)
      .min(0)
      .max(14)
      .openapi({
        description:
          'The quantity of the item that the invoicer provides to the payer. Value is from `-1000000` to `1000000`. Supports up to five decimal places.',
      }),
    unit_amount: MoneySchema.openapi({
      description:
        'The unit price of the item. This does not include tax and discount. Value is from `-1000000` to `1000000`. Supports up to two decimal places.',
    }),
    tax: TaxSchema.exactOptional().openapi({
      description:
        'The tax associated with the item. The tax amount is added to the item total. Value is from `0` to `100`. Supports up to five decimal places.',
    }),
    item_date: DateNoTimeSchema.exactOptional().openapi({
      description:
        'The date when the item or service was provided, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *yyyy*-*MM*-*dd*T*z*.',
    }),
    discount: DiscountSchema.exactOptional().openapi({
      description:
        'Discount as a percent or amount at invoice level. The invoice discount amount is subtracted from the item total.',
    }),
    unit_of_measure: UnitOfMeasureSchema.exactOptional().openapi({
      description:
        'The unit of measure for the invoiced item. For `AMOUNT` the `unit_amount` and `quantity` are not shown on the invoice.<blockquote><strong>Note:</strong> If your specify different `unit_of_measure` values for the same invoice, the invoice uses the first value.</blockquote>',
    }),
  })
  .openapi({
    title: 'Invoice Item',
    description:
      'An array of invoice line item information. The maximum items for an invoice is `100`.',
    required: ['name', 'quantity', 'unit_amount'],
  })
  .openapi('Item')

const DefinitionsItemListSchema = z
  .array(ItemSchema)
  .min(0)
  .max(100)
  .openapi({ description: 'An array of invoice line-item information.' })
  .openapi('DefinitionsItemList')

const RecipientInfoSchema = z
  .object({
    billing_info: BillingInfoSchema.exactOptional().openapi({
      description:
        'The billing information for the invoice recipient. Includes name, address, email, phone, and language.',
    }),
    shipping_info: ContactNameAddressSchema.exactOptional().openapi({
      description:
        "The recipient's shipping information. Includes the user's contact information, which includes name and address.",
    }),
  })
  .openapi({
    title: 'Recipient Information',
    description:
      'The billing and shipping information. Includes name, email, address, phone, and language.',
    required: [],
  })
  .openapi('RecipientInfo')

const DefinitionsRecipientInfoListSchema = z
  .array(RecipientInfoSchema)
  .min(0)
  .max(100)
  .openapi({
    description:
      'The billing and shipping information. Includes name, email, address, phone, and language.',
  })
  .openapi('DefinitionsRecipientInfoList')

const FileReferenceSchema = z
  .object({
    id: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'The ID of the referenced file.' }),
    reference_url: z
      .url()
      .min(1)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'The reference URL for the file.' }),
    content_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [Internet Assigned Numbers Authority (IANA) media type of the file](https://www.iana.org/assignments/media-types/media-types.xhtml).',
      }),
    create_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the file was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    size: z
      .string()
      .regex(/^[0-9]+$/)
      .exactOptional()
      .openapi({ description: 'The size of the file, in bytes.' }),
  })
  .openapi({
    title: 'File Reference',
    description:
      'The file reference. Can be a file in PayPal MediaServ, PayPal DMS, or other custom store.',
    required: [],
  })
  .openapi('FileReference')

const FileReferenceListSchema = z
  .array(FileReferenceSchema)
  .min(0)
  .max(2147483647)
  .openapi({ description: 'An array of PayPal IDs for the files that are attached to an invoice.' })
  .openapi('FileReferenceList')

const DetailSchema = z
  .object({
    reference: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(120)
      .exactOptional()
      .openapi({ description: 'The reference data. Includes a Purchase Order (PO) number.' }),
    currency_code: CurrencyCodeSchema.openapi({
      description:
        'The [three-character ISO-4217 currency code](/docs/integration/direct/rest/currency-codes/) that identifies the currency.',
    }),
    note: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(4000)
      .exactOptional()
      .openapi({
        description:
          'A note to the invoice recipient. Also appears on the invoice notification email.',
      }),
    terms_and_conditions: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(4000)
      .exactOptional()
      .openapi({
        description:
          'The general terms of the invoice. Can include return or cancellation policy and other terms and conditions.',
      }),
    memo: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(500)
      .exactOptional()
      .openapi({ description: 'A private bookkeeping memo for the user.' }),
    attachments: FileReferenceListSchema.exactOptional(),
  })
  .openapi({
    title: 'Invoice_Detail',
    description: 'The details of the invoice like notes, terms and conditions, memo, attachments.',
    required: ['currency_code'],
  })
  .openapi('Detail')

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

const EmailAddressListSchema = z
  .array(EmailAddressSchema)
  .min(0)
  .max(100)
  .openapi({
    description:
      'An array of one or more CC: emails to which notifications are sent. If you omit this parameter, a notification is sent to all CC: email addresses that are part of the invoice.<blockquote><strong>Note:</strong> Valid values are email addresses in the `additional_recipients` value associated with the invoice.</blockquote>',
  })
  .openapi('EmailAddressList')

const ErrorLocationSchema = z
  .enum(['body', 'path', 'query'])
  .default('body')
  .openapi({
    description:
      'The location of the field that caused the error. Value is `body`, `path`, or `query`.',
  })
  .openapi('ErrorLocation')

const ErrorDetailsSchema = z
  .object({
    field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The field that caused the error. If this field is in the body, set this value to the field's JSON pointer value. Required for client-side errors.",
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the field that caused the error.' }),
    location: ErrorLocationSchema.exactOptional(),
    issue: z
      .string()
      .openapi({ description: 'The unique, fine-grained application-level error code.' }),
    description: z
      .string()
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

const ErrorLinkDescriptionSchema = z
  .object({
    href: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(20000)
      .openapi({
        description:
          'The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.',
      }),
    rel: z
      .string()
      .regex(/^.*$/)
      .min(0)
      .max(100)
      .openapi({
        description:
          'The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).',
      }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'PATCH'])
      .exactOptional()
      .openapi({ description: 'The HTTP method required to make the related call.' }),
  })
  .openapi({
    title: 'Link Description',
    description:
      'The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.',
    required: ['href', 'rel'],
  })
  .openapi('ErrorLinkDescription')

const Error_400Schema = z
  .object({
    name: z.literal('INVALID_REQUEST').exactOptional(),
    message: z
      .literal('Request is not well-formed, syntactically incorrect, or violates schema.')
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Bad Request Error',
    description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
    required: [],
  })
  .openapi('Error_400')

const Error_401Schema = z
  .object({
    name: z.literal('AUTHENTICATION_FAILURE').exactOptional(),
    message: z
      .literal(
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      )
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Unauthorized Error',
    description:
      'Authentication failed due to missing Authorization header, or invalid authentication credentials.',
    required: [],
  })
  .openapi('Error_401')

const Error_403Schema = z
  .object({
    name: z.literal('NOT_AUTHORIZED').exactOptional(),
    message: z.literal('Authorization failed due to insufficient permissions.').exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Not Authorized Error',
    description:
      'The client is not authorized to access this resource, although it may have valid credentials. ',
    required: [],
  })
  .openapi('Error_403')

const Error_404Schema = z
  .object({
    name: z.literal('RESOURCE_NOT_FOUND').exactOptional(),
    message: z.literal('The specified resource does not exist.').exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Not found Error',
    description:
      'The server has not found anything matching the request URI. This either means that the URI is incorrect or the resource is not available.',
    required: [],
  })
  .openapi('Error_404')

const Error_409Schema = z
  .object({
    name: z.literal('RESOURCE_CONFLICT').exactOptional(),
    message: z
      .literal('The server has detected a conflict while processing this request.')
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Resource Conflict Error',
    description: 'The server has detected a conflict while processing this request.',
    required: [],
  })
  .openapi('Error_409')

const Error_415Schema = z
  .object({
    name: z.literal('UNSUPPORTED_MEDIA_TYPE').exactOptional(),
    message: z
      .literal("The server does not support the request payload's media type.")
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Unsupported Media Type Error',
    description: "The server does not support the request payload's media type.",
    required: [],
  })
  .openapi('Error_415')

const Error_422Schema = z
  .object({
    name: z.literal('UNPROCESSABLE_ENTITY').exactOptional(),
    message: z
      .literal(
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      )
      .exactOptional(),
    details: z.array(ErrorDetailsSchema).exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Unprocessable Entity Error',
    description:
      'The requested action cannot be performed and may require interaction with APIs or processes outside of the current request. This is distinct from a 500 response in that there are no systemic problems limiting the API from performing the request.',
    required: [],
  })
  .openapi('Error_422')

const Error_500Schema = z
  .object({
    name: z.literal('INTERNAL_SERVER_ERROR').exactOptional(),
    message: z.literal('An internal server error occurred.').exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Internal Server Error',
    description:
      'This is either a system or application error, and generally indicates that although the client appeared to provide a correct request, something unexpected has gone wrong on the server.',
    example: {
      name: 'INTERNAL_SERVER_ERROR',
      message: 'An internal server error occurred.',
      debug_id: '90957fca61718',
      links: [
        {
          href: 'https://developer.paypal.com/api/orders/v2/#error-INTERNAL_SERVER_ERROR',
          rel: 'information_link',
        },
      ],
    },
    required: [],
  })
  .openapi('Error_500')

const Error_503Schema = z
  .object({
    name: z.literal('SERVICE_UNAVAILABLE').exactOptional(),
    message: z.literal('Service Unavailable.').exactOptional(),
    debug_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PayPal internal ID. Used for correlation purposes.' }),
    links: z
      .array(ErrorLinkDescriptionSchema)
      .min(0)
      .max(10000)
      .exactOptional()
      .openapi({
        description:
          'An array of request-related [HATEOAS links](https://en.wikipedia.org/wiki/HATEOAS).',
      }),
  })
  .openapi({
    title: 'Service Unavailable Error',
    description:
      'The server is temporarily unable to handle the request, for example, because of planned maintenance or downtime.',
    example: {
      name: 'SERVICE_UNAVAILABLE',
      message: 'Service Unavailable.',
      debug_id: '90957fca61718',
      information_link:
        'https://developer.paypal.com/docs/api/orders/v2/#error-SERVICE_UNAVAILABLE',
    },
    required: [],
  })
  .openapi('Error_503')

const ErrorDefaultSchema = z
  .xor([
    Error_400Schema,
    Error_401Schema,
    Error_403Schema,
    Error_404Schema,
    Error_409Schema,
    Error_415Schema,
    Error_422Schema,
    Error_500Schema,
    Error_503Schema,
  ])
  .openapi({ description: 'The default error response.' })
  .openapi('ErrorDefault')

const FetchtypeSchema = z
  .object({
    fetch_id: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Optional to decide the number or ID.' }),
  })
  .openapi({
    title: 'Fetch Type',
    description: 'Is the fetch type invoice number or id.',
    required: [],
  })
  .openapi('Fetchtype')

const FieldsSchema = z
  .string()
  .regex(/^[\S\s]*$/)
  .min(0)
  .max(2147483647)
  .openapi({ description: 'The name of the field.' })
  .openapi('Fields')

const FieldsListSchema = z
  .array(FieldsSchema)
  .min(0)
  .max(5)
  .openapi({
    description:
      'A CSV file of fields to return for the user, if available. Because the invoice object can be very large, field filtering is required. Valid collection fields are <code>items</code>, <code>payments</code>, <code>refunds</code>, <code>additional_recipients_info</code>, and <code>attachments</code>.',
  })
  .openapi('FieldsList')

const InvoiceStatusSchema = z
  .enum([
    'DRAFT',
    'SENT',
    'SCHEDULED',
    'PAID',
    'MARKED_AS_PAID',
    'CANCELLED',
    'REFUNDED',
    'PARTIALLY_PAID',
    'PARTIALLY_REFUNDED',
    'MARKED_AS_REFUNDED',
    'UNPAID',
    'PAYMENT_PENDING',
    'AUTO_CANCELLED',
    'PAID_EXTERNAL',
    'REFUNDED_EXTERNAL',
    'SHARED',
  ])
  .openapi({
    title: 'Invoice Status',
    description: 'The status of the invoice.',
    'x-enumDescriptions': [
      {
        value: 'DRAFT',
        description: 'The invoice is in draft state. It is not yet sent to the payer.',
      },
      {
        value: 'SENT',
        description:
          'The invoice has been sent to the payer. The payment is awaited from the payer.',
      },
      {
        value: 'SCHEDULED',
        description: 'The invoice is scheduled on a future date. It is not yet sent to the payer.',
      },
      { value: 'PAID', description: 'The payer has paid for the invoice.' },
      { value: 'MARKED_AS_PAID', description: 'The invoice is marked as paid by the invoicer.' },
      { value: 'CANCELLED', description: 'The invoice has been cancelled by the invoicer.' },
      { value: 'REFUNDED', description: 'The invoice has been refunded by the invoicer.' },
      { value: 'PARTIALLY_PAID', description: 'The payer has partially paid for the invoice.' },
      {
        value: 'PARTIALLY_REFUNDED',
        description: 'The invoice has been partially refunded by the invoicer.',
      },
      {
        value: 'MARKED_AS_REFUNDED',
        description: 'The invoice is marked as refunded by the invoicer.',
      },
      {
        value: 'UNPAID',
        description: 'The invoicer is yet to receive the payment from the payer for the invoice.',
      },
      {
        value: 'PAYMENT_PENDING',
        description:
          'The invoicer is yet to receive the payment for the invoice. It is under pending review.',
      },
      {
        value: 'AUTO_CANCELLED',
        description:
          'The invoice was automatically cancelled because the payment was not received within the specified timeframe.',
      },
      {
        value: 'PAID_EXTERNAL',
        description:
          'The invoice has been paid through an external system or method outside of the standard PayPal payment flow. This status is set manually, indicating payment was received through other means.',
      },
      {
        value: 'REFUNDED_EXTERNAL',
        description:
          'The invoice has been refunded through an external system or method. This status indicates a refund was issued outside of the standard PayPal payment flow.',
      },
      {
        value: 'SHARED',
        description:
          'The invoice has been shared with the payer, typically via a link or other method. This status is used to track when an invoice has been distributed but not necessarily sent via PayPal.',
      },
    ],
  })
  .openapi('InvoiceStatus')

const PaymentTermTypeSchema = z
  .enum([
    'DUE_ON_RECEIPT',
    'DUE_ON_DATE_SPECIFIED',
    'NET_10',
    'NET_15',
    'NET_30',
    'NET_45',
    'NET_60',
    'NET_90',
    'NO_DUE_DATE',
  ])
  .openapi({
    title: 'Payment Term Type',
    description:
      'The payment term. Payment can be due upon receipt, a specified date, or in a set number of days.',
    'x-enumDescriptions': [
      {
        value: 'DUE_ON_RECEIPT',
        description: 'The payment for the invoice is due upon receipt of the invoice.',
      },
      {
        value: 'DUE_ON_DATE_SPECIFIED',
        description: 'The payment for the invoice is due on the date specified in the invoice.',
      },
      { value: 'NET_10', description: 'The payment for the invoice is due in 10 days.' },
      { value: 'NET_15', description: 'The payment for the invoice is due in 15 days.' },
      { value: 'NET_30', description: 'The payment for the invoice is due in 30 days.' },
      { value: 'NET_45', description: 'The payment for the invoice is due in 45 days.' },
      { value: 'NET_60', description: 'The payment for the invoice is due in 60 days.' },
      { value: 'NET_90', description: 'The payment for the invoice is due in 90 days.' },
      { value: 'NO_DUE_DATE', description: 'The invoice has no payment due date.' },
    ],
  })
  .openapi('PaymentTermType')

const PaymentTermSchema = z
  .object({
    term_type: PaymentTermTypeSchema.exactOptional().openapi({
      description:
        'The payment term. Payment can be due upon receipt, a specified date, or in a set number of days.',
    }),
  })
  .openapi({
    title: 'Payment Term',
    description:
      'The payment term of the invoice. Payment can be due upon receipt, a specified date, or in a set number of days.',
    required: [],
  })
  .openapi('PaymentTerm')

const InvoicePaymentTermSchema = PaymentTermSchema.and(
  z
    .object({
      due_date: DateNoTimeSchema.exactOptional().openapi({
        description:
          'The date when the invoice payment is due, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *yyyy*-*MM*-*dd*T*z*.',
      }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'Invoice Payment Term',
    description:
      'The payment term of the invoice. Payment can be due upon receipt, a specified date, or in a set number of days.',
  })
  .openapi('InvoicePaymentTerm')

const MetadataSchema: z.ZodType<MetadataType> = z
  .lazy(() =>
    TemplateMetadataSchema.and(
      z
        .object({
          cancel_time: DateTimeSchema.exactOptional().openapi({
            description:
              'The date and time when the resource was canceled, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
            readOnly: true,
          }),
          cancelled_by: z
            .string()
            .exactOptional()
            .openapi({ description: 'The actor who canceled the resource.', readOnly: true }),
          first_sent_time: DateTimeSchema.exactOptional().openapi({
            description:
              'The date and time when the resource was first sent, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
            readOnly: true,
          }),
          last_sent_time: DateTimeSchema.exactOptional().openapi({
            description:
              'The date and time when the resource was last sent, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
            readOnly: true,
          }),
          last_sent_by: z
            .string()
            .exactOptional()
            .openapi({
              description: 'The email address of the account that last sent the resource.',
              readOnly: true,
            }),
          created_by_flow: InvoiceCreationFlowSchema.exactOptional().openapi({
            description: 'The flow variation that created this invoice.',
            readOnly: true,
          }),
          recipient_view_url: z
            .url()
            .exactOptional()
            .openapi({
              readOnly: true,
              description: 'The URL for the invoice payer view hosted on paypal.com.',
            }),
          invoicer_view_url: z
            .url()
            .exactOptional()
            .openapi({
              readOnly: true,
              description: 'The URL for the invoice merchant view hosted on paypal.com.',
            }),
        })
        .openapi({ required: [] }),
    ).openapi({
      title: 'Metadata',
      description:
        'The audit metadata. Captures all invoicing actions on create, send, update, and cancel.',
    }),
  )
  .openapi('Metadata')

const InvoiceDetailSchema = DetailSchema.and(
  z
    .object({
      invoice_number: z
        .string()
        .max(25)
        .exactOptional()
        .openapi({
          description:
            'The invoice number. Default is the number that is auto-incremented number from the last number.',
        }),
      invoice_date: DateNoTimeSchema.exactOptional().openapi({
        description:
          'The invoice date as specificed by the sender, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Only UTC is supported in response. For example, *yyyy*-*MM*-*dd*T*z*.',
      }),
      payment_term: InvoicePaymentTermSchema.exactOptional().openapi({
        description:
          'The payment due date for the invoice. Value is either but not both <code>term_type</code> or <code>due_date</code>.',
      }),
      metadata: MetadataSchema.exactOptional().openapi({
        description:
          'The audit metadata. Captures all invoicing actions on create, send, update, and cancel.',
        readOnly: true,
      }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'Invoice Detail',
    description:
      'The details of the invoice. Includes invoice number, date, payment terms, and audit metadata.',
  })
  .openapi('InvoiceDetail')

const PhoneDetailListSchema = z
  .array(PhoneDetailSchema)
  .openapi({
    description:
      "An array of invoicer's phone numbers. The invoicer can choose to hide the phone number on the invoice.",
  })
  .openapi('PhoneDetailList')

const InvoicerInfoSchema = ContactNameAddressSchema.and(
  z
    .object({
      email_address: RestrictiveEmailAddressSchema.exactOptional().openapi({
        description:
          "The invoicer email address, which must be listed in the user's PayPal profile. If you omit this value, notifications are sent from and to the primary email address but do not appear on the invoice.",
      }),
      phones: PhoneDetailListSchema.exactOptional(),
      website: z
        .url()
        .max(2048)
        .exactOptional()
        .openapi({ description: "The invoicer's website." }),
      tax_id: z
        .string()
        .max(100)
        .exactOptional()
        .openapi({ description: "The invoicer's tax ID." }),
      additional_notes: z
        .string()
        .max(400)
        .exactOptional()
        .openapi({ description: 'Any additional information. Includes business hours.' }),
      logo_url: z
        .url()
        .max(2000)
        .exactOptional()
        .openapi({
          description:
            'The full URL to an external logo image. The logo image must not be larger than 250 pixels wide by 90 pixels high.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'Invoicer Information',
    description: 'The invoicer business information that appears on the invoice.',
  })
  .openapi('InvoicerInfo')

const RecipientInfoListSchema = z
  .array(RecipientInfoSchema)
  .min(0)
  .max(100)
  .openapi({
    description:
      'The billing and shipping information. Includes name, email, address, phone and language.',
  })
  .openapi('RecipientInfoList')

const ItemListSchema = z
  .array(ItemSchema)
  .min(0)
  .max(100)
  .openapi({ description: 'An array of invoice line item information.' })
  .openapi('ItemList')

const PaymentTypeSchema = z
  .enum(['PAYPAL', 'EXTERNAL'])
  .openapi({
    title: 'Payment Type',
    description:
      'The payment type. Can be PayPal or an external payment. Includes cash or a check.',
    'x-enumDescriptions': [
      { value: 'PAYPAL', description: 'The payment type is PayPal.' },
      {
        value: 'EXTERNAL',
        description: 'The payment type is an external cash or a check payment.',
      },
    ],
  })
  .openapi('PaymentType')

const PaymentMethodSchema = z
  .enum([
    'BANK_TRANSFER',
    'CASH',
    'CHECK',
    'CREDIT_CARD',
    'DEBIT_CARD',
    'PAYPAL',
    'WIRE_TRANSFER',
    'OTHER',
  ])
  .openapi({
    title: 'Payment Method',
    description: 'The payment mode or method through which the invoicer can accept the payments.',
    'x-enumDescriptions': [
      { value: 'BANK_TRANSFER', description: 'Payments can be received through bank transfers.' },
      { value: 'CASH', description: 'Payments can be received as cash.' },
      { value: 'CHECK', description: 'Payments can be received as check.' },
      {
        value: 'CREDIT_CARD',
        description: 'Payments can be received through credit card payments.',
      },
      { value: 'DEBIT_CARD', description: 'Payments can be received through debit card payments.' },
      { value: 'PAYPAL', description: 'Payments can be received through paypal payments.' },
      { value: 'WIRE_TRANSFER', description: 'Payments can be received through wire transfer.' },
      { value: 'OTHER', description: 'Payments can be received through other modes.' },
    ],
  })
  .openapi('PaymentMethod')

const PaymentDetailSchema = z
  .object({
    type: PaymentTypeSchema.exactOptional().openapi({
      description:
        'The payment type in an invoicing flow which can be PayPal or an external cash or check payment.',
      readOnly: true,
    }),
    payment_id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(22)
      .exactOptional()
      .openapi({
        description:
          'The ID for a PayPal payment transaction. Required for the `PAYPAL` payment type.',
      }),
    payment_date: DateNoTimeSchema.exactOptional().openapi({
      description:
        'The date when the invoice was paid, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *yyyy*-*MM*-*dd* *z*.',
    }),
    method: PaymentMethodSchema.openapi({
      description: 'The payment mode or method through which the invoicer can accept the payment.',
    }),
    note: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(2000)
      .exactOptional()
      .openapi({ description: 'A note associated with an external cash or check payment.' }),
    amount: MoneySchema.exactOptional().openapi({
      description:
        'The payment amount to record against the invoice. If you omit this parameter, the total invoice amount is marked as paid. This amount cannot exceed the amount due.',
    }),
    shipping_info: ContactNameAddressSchema.exactOptional().openapi({
      description:
        "The recipient's shipping information. Includes the user's contact information, which includes name and address.",
    }),
  })
  .openapi({
    title: 'Payment Detail',
    description:
      'The payment details of the invoice. Includes payment type, method, date, discount, and transaction type.',
    required: ['method'],
  })
  .openapi('PaymentDetail')

const PaymentDetailListSchema = z
  .array(PaymentDetailSchema)
  .min(0)
  .max(100)
  .openapi({
    description:
      'An array of payment details for the invoice. The payment details of the invoice like payment type, method, date, discount and transaction type.',
    readOnly: true,
  })
  .openapi('PaymentDetailList')

const PaymentsSchema = z
  .object({
    paid_amount: MoneySchema.exactOptional().openapi({
      readOnly: true,
      description: 'The aggregated payment amounts against this invoice.',
    }),
    transactions: PaymentDetailListSchema.exactOptional(),
  })
  .openapi({
    title: 'Payments',
    description: 'An array of payments registered against the invoice.',
    required: [],
  })
  .openapi('Payments')

const RefundDetailSchema = z
  .object({
    type: PaymentTypeSchema.exactOptional().openapi({
      description:
        'The PayPal refund type. Indicates whether the refund was paid through PayPal or externally in the invoicing flow. The record refund method supports the `EXTERNAL` refund type. The `PAYPAL` refund type is supported for backward compatibility.',
      readOnly: true,
    }),
    refund_id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(22)
      .exactOptional()
      .openapi({
        description:
          'The ID for a PayPal payment transaction. Required for the `PAYPAL` payment type.',
        readOnly: true,
      }),
    refund_date: DateNoTimeSchema.exactOptional().openapi({
      description:
        'The date when the invoice was refunded, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, `2014-02-27`.',
    }),
    amount: MoneySchema.exactOptional().openapi({
      description:
        'The amount to record as refunded. If you omit the amount, the total invoice paid amount is recorded as refunded.',
    }),
    method: PaymentMethodSchema.openapi({
      description: 'The payment mode or method through which the invoicer can accept the payments.',
    }),
  })
  .openapi({
    title: 'Refund Detail',
    description:
      'The refund details of the invoice. Includes the refund type, date, amount, and method.',
    required: ['method'],
  })
  .openapi('RefundDetail')

const RefundDetailListSchema = z
  .array(RefundDetailSchema)
  .min(0)
  .max(100)
  .openapi({
    description:
      'An array of refund details for the invoice. Includes the refund type, date, amount, and method.',
    readOnly: true,
  })
  .openapi('RefundDetailList')

const RefundsSchema = z
  .object({
    refund_amount: MoneySchema.exactOptional().openapi({
      readOnly: true,
      description: 'The aggregated refund amounts.',
    }),
    transactions: RefundDetailListSchema.exactOptional(),
  })
  .openapi({
    title: 'Refunds',
    description:
      'The invoicing refund details. Includes the refund type, date, amount, and method.',
    required: [],
  })
  .openapi('Refunds')

const LinkDescriptionSchema = z
  .object({
    href: z
      .string()
      .openapi({
        description:
          'The complete target URL. To make the related call, combine the method with this [URI Template-formatted](https://tools.ietf.org/html/rfc6570) link. For pre-processing, include the `$`, `(`, and `)` characters. The `href` is the key HATEOAS component that links a completed call with a subsequent call.',
      }),
    rel: z
      .string()
      .openapi({
        description:
          'The [link relation type](https://tools.ietf.org/html/rfc5988#section-4), which serves as an ID for a link that unambiguously describes the semantics of the link. See [Link Relations](https://www.iana.org/assignments/link-relations/link-relations.xhtml).',
      }),
    method: z
      .enum(['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'CONNECT', 'OPTIONS', 'PATCH'])
      .exactOptional()
      .openapi({ description: 'The HTTP method required to make the related call.' }),
  })
  .openapi({
    title: 'Link Description',
    description:
      'The request-related [HATEOAS link](/api/rest/responses/#hateoas-links) information.',
    required: ['href', 'rel'],
  })
  .openapi('LinkDescription')

const LinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .min(0)
  .max(2147483647)
  .openapi({
    description:
      'An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).',
    readOnly: true,
  })
  .openapi('LinkDescriptionList')

const InvoiceSchema = z
  .object({
    id: z
      .string()
      .regex(/^[\s\S]*$/)
      .min(0)
      .max(30)
      .exactOptional()
      .openapi({ description: 'The ID of the invoice.', readOnly: true }),
    parent_id: z
      .string()
      .regex(/^[\s\S]*$/)
      .min(0)
      .max(30)
      .exactOptional()
      .openapi({
        description:
          'The parent ID to an invoice that defines the group invoice to which the invoice is related.',
        readOnly: true,
      }),
    status: InvoiceStatusSchema.exactOptional().openapi({ readOnly: true }),
    detail: InvoiceDetailSchema.openapi({
      description:
        'The details of the invoice. Includes the invoice number, date, payment terms, and audit metadata.',
    }),
    invoicer: InvoicerInfoSchema.exactOptional().openapi({
      description:
        'The invoicer information. Includes the business name, email, address, phone, fax, tax ID, additional notes, and logo URL.',
    }),
    primary_recipients: RecipientInfoListSchema.exactOptional(),
    additional_recipients: EmailAddressListSchema.exactOptional(),
    items: ItemListSchema.exactOptional(),
    configuration: ConfigurationSchema.exactOptional().openapi({
      description:
        'The invoice configuration details. Includes partial payment, tip, and tax calculated after discount.',
    }),
    amount: AmountSummaryDetailSchema.exactOptional().openapi({
      description: 'The invoice amount summary of item total, discount, tax total and shipping..',
    }),
    due_amount: MoneySchema.exactOptional().openapi({
      description: 'The due amount, which is the balance amount outstanding after payments.',
      readOnly: true,
    }),
    gratuity: MoneySchema.exactOptional().openapi({
      description: 'The amount paid by the payer as gratuity to the invoicer.',
      readOnly: true,
    }),
    payments: PaymentsSchema.exactOptional().openapi({
      description: 'List of payments registered against the invoice..',
    }),
    refunds: RefundsSchema.exactOptional().openapi({
      description:
        'List of refunds against this invoice. The invoicing refund details includes refund type, date, amount, and method.',
    }),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Invoice',
    description:
      'The invoice details which includes all information of the invoice like items, billing information.',
    required: ['detail'],
  })
  .openapi('Invoice')

const InvoiceConnectionDetailsSchema = z
  .object({
    id: z
      .string()
      .regex(/^[A-Za-z0-9\-]+$/)
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({ description: 'The ID of the invoice. This property supports Unicode.' }),
    connection_status: ConnectionsListSchema.exactOptional(),
  })
  .openapi({
    title: 'Invoice Connection Details',
    description: 'Returns invoice connection status with timestamp per invoice.',
    required: [],
  })
  .openapi('InvoiceConnectionDetails')

const InvoiceListSchema = z
  .array(InvoiceSchema)
  .min(0)
  .max(100)
  .openapi({ description: 'The list of invoices that match the search criteria.', readOnly: true })
  .openapi('InvoiceList')

const InvoiceNumberSchema = z
  .object({
    invoice_number: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(25)
      .exactOptional()
      .openapi({
        description:
          'The invoice number. If you omit this value, the default is the auto-incremented number from the last number.',
        readOnly: true,
      }),
    invoice_id: z
      .string()
      .regex(/^(INV2-)[A-Z0-9\-]{19}$/)
      .min(1)
      .max(24)
      .exactOptional()
      .openapi({ description: 'Resource Id.', readOnly: true }),
  })
  .openapi({ title: 'Invoice Number', description: 'The invoice number.', required: [] })
  .openapi('InvoiceNumber')

const InvoiceStatusListSchema = z
  .array(InvoiceStatusSchema)
  .min(0)
  .max(5)
  .openapi({ description: 'An array of status values.' })
  .openapi('InvoiceStatusList')

const InvoicesSchema = z
  .object({
    total_pages: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The total number of pages that are available for the search criteria. <blockquote><strong>Note:</strong> Clients MUST NOT assume that the value of total_pages is constant. The value MAY change from one request to the next</blockquote>',
        readOnly: true,
      }),
    total_items: z
      .int()
      .min(0)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The total number of invoices that match the search criteria.<blockquote><strong>Note:</strong> Clients MUST NOT assume that the value of <code>total_items</code> is constant. The value MAY change from one request to the next.</blockquote>',
        readOnly: true,
      }),
    items: InvoiceListSchema.exactOptional(),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Invoices',
    description:
      'An array of merchant invoices. Includes the total invoices count and [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links) for navigation.',
    required: [],
  })
  .openapi('Invoices')

const InvoicesCancel_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Field value exceeded the maximum allowed number of characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_ARRAY_MAX_ITEMS').exactOptional(),
              description: z
                .literal('Only maximum of 100 email address is supported in additional recipients.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_ARRAY_MAX_ITEMS', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoicesCancel_400')

const InvoicesCancel_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('CANNOT_CANCEL_DRAFT_INVOICE').exactOptional(),
              description: z.literal('Draft invoice cannot be canceled.').exactOptional(),
            })
            .openapi({ title: 'CANNOT_CANCEL_DRAFT_INVOICE', required: [] }),
          z
            .object({
              issue: z.literal('CANNOT_CANCEL_PAID_INVOICE').exactOptional(),
              description: z
                .literal('Cannot cancel a paid or partially paid invoice.')
                .exactOptional(),
            })
            .openapi({ title: 'CANNOT_CANCEL_PAID_INVOICE', required: [] }),
          z
            .object({
              issue: z.literal('CANNOT_CANCEL_REFUNDED_INVOICE').exactOptional(),
              description: z
                .literal('Cannot cancel a refunded or partially refunded invoice.')
                .exactOptional(),
            })
            .openapi({ title: 'CANNOT_CANCEL_REFUNDED_INVOICE', required: [] }),
          z
            .object({
              issue: z.literal('CANNOT_CANCEL_SCHEDULED_INVOICE').exactOptional(),
              description: z.literal('Cannot cancel a scheduled invoice.').exactOptional(),
            })
            .openapi({ title: 'CANNOT_CANCEL_SCHEDULED_INVOICE', required: [] }),
          z
            .object({
              issue: z.literal('INVOICE_CANCELED_ALREADY').exactOptional(),
              description: z.literal('Invoice is already cancelled.').exactOptional(),
            })
            .openapi({ title: 'INVOICE_CANCELED_ALREADY', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoicesCancel_422')

const InvoicesCreate_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Address line2 length should be less than 300 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('National Number length should be between 1 and 14.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Address line1 length should be less than 300 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z.literal('Country code is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Custom label length should be less than 50 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Given name length should be less than 140 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z.literal('Language is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Admin area1 length should be less than 300 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z.literal('Item quantity length should be 1 and 14.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Surname length should be less than 140 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('Attachment reference url length should be between 1 and 2000.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z.literal('Country code length should be 2 characters.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('Currency code length should be 3 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Business name length should be less than 300 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Minimum due amount length should be less than 32 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('Attachment id length should be between 1 and 255.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Admin area2 length should be less than 300 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z.literal('Tax name length should be less than 100.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Website url length should be less than 2048 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Postal code length should be less than 60 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z.literal('National Number is not valid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Memo length should be less than 4000 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Item name length should be less than 200 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('country code length should be between 1 and 3.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Template Id length should be less than 22 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Logo url length should be less than 4000 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Invoice note length should be less than 4000 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Reference field length should be less than 120 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z.literal('Due date is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Terms and Conditions length should be less than 4000 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('Email address length should be between 3 and 254.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Additional data length should be less than 4000.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Additional information value length should be less than 40 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Tax id length should be less than 100 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z.literal('Invoice date is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z.literal('Invoice date is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Invoice number length should be less than 25 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z.literal('Item Date is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Item description length should be less than 1000 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Shipping Tax name length should be less than 100 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoicesCreate_400')

const InvoicesGenerateQrCode_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_INTEGER_MAX_VALUE').exactOptional(),
              description: z.literal('Value exceeds max value.').exactOptional(),
            })
            .openapi({ title: 'INVALID_INTEGER_MAX_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_INTEGER_MIN_VALUE').exactOptional(),
              description: z.literal('Value less than minimum value.').exactOptional(),
            })
            .openapi({ title: 'INVALID_INTEGER_MIN_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('Value of the field does not conform to the expected format.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoicesGenerateQrCode_400')

const InvoicesPayments_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('MISSING_REQUIRED_PARAMETER').exactOptional(),
              description: z
                .literal('Payment method is missing. Please provide a valid payment method.')
                .exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUIRED_PARAMETER', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PAYMENT_METHOD').exactOptional(),
              description: z
                .literal('The value provided is not an acceptable method of payment.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PAYMENT_METHOD', required: [] }),
          z
            .object({
              issue: z.literal('NOT_SUPPORTED').exactOptional(),
              description: z.literal('Currency code is not supported.').exactOptional(),
            })
            .openapi({ title: 'NOT_SUPPORTED', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('Currency code length should be 3 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_REQUIRED_PARAMETER').exactOptional(),
              description: z
                .literal('Amount value is missing. Please provide a valid amount.')
                .exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUIRED_PARAMETER', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal(
                  'Amount value cannot be greater than the maximum limit of 32 characters length.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('Amount value is invalid. Should be a numeric value.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('VALUE_CANNOT_BE_ZERO').exactOptional(),
              description: z
                .literal('Payment amount cannot be zero. Please provide a valid amount.')
                .exactOptional(),
            })
            .openapi({ title: 'VALUE_CANNOT_BE_ZERO', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_DECIMAL_VALUE').exactOptional(),
              description: z
                .literal(
                  'Payment amount value is invalid. Can have non-negative value with maximum 7 digits and upto 2 fractions.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_DECIMAL_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_INTEGER_VALUE').exactOptional(),
              description: z
                .literal(
                  'Payment amount value is invalid. Can have non-negative value with maximum 6 digits.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_INTEGER_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z.literal('Date should be of format yyyy-mm-dd.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoicesPayments_400')

const InvoicesPayments_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('PAYMENT_AMOUNT_GREATER_THAN_AMOUNT_DUE').exactOptional(),
              description: z
                .literal('Payment amount is greater than the amount due.')
                .exactOptional(),
            })
            .openapi({ title: 'PAYMENT_AMOUNT_GREATER_THAN_AMOUNT_DUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_INVOICE_TYPE').exactOptional(),
              description: z
                .literal('The invoice type is not valid for paying an invoice.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_INVOICE_TYPE', required: [] }),
          z
            .object({
              issue: z.literal('CANNOT_PROCESS_PAYMENTS').exactOptional(),
              description: z
                .literal('Current invoice state does not support payment processing.')
                .exactOptional(),
            })
            .openapi({ title: 'CANNOT_PROCESS_PAYMENTS', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoicesPayments_422')

const InvoicesPaymentsDelete_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('CANNOT_DELETE_EXTERNAL_PAYMENT').exactOptional(),
              description: z
                .literal(
                  'The external payment cannot be deleted as the recorded refund cannot exceed the recored payment for an invoice.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'CANNOT_DELETE_EXTERNAL_PAYMENT', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoicesPaymentsDelete_422')

const InvoicesRefunds_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('MISSING_REQUIRED_PARAMETER').exactOptional(),
              description: z
                .literal('Payment method is missing. Please provide a valid payment method.')
                .exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUIRED_PARAMETER', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_REFUND_METHOD').exactOptional(),
              description: z
                .literal('The value provided is not an acceptable method of refund.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_REFUND_METHOD', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('The value provided is not an acceptable method of refund.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('Currency code length should be 3 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('NOT_SUPPORTED').exactOptional(),
              description: z
                .literal('Currency code is not supported. Please provide a valid currency code.')
                .exactOptional(),
            })
            .openapi({ title: 'NOT_SUPPORTED', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_REQUIRED_PARAMETER').exactOptional(),
              description: z
                .literal('Amount value is missing. Please provide a valid amount.')
                .exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUIRED_PARAMETER', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('Amount value is invalid. Should be a numeric value.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal(
                  'Amount value cannot be greater than the maximum limit of 32 characters length.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('VALUE_CANNOT_BE_ZERO').exactOptional(),
              description: z.literal('Refund amount cannot be zero.').exactOptional(),
            })
            .openapi({ title: 'VALUE_CANNOT_BE_ZERO', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_INTEGER_VALUE').exactOptional(),
              description: z
                .literal(
                  'Refund amount value is invalid. Can have non-negative value with maximum 6 digits.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_INTEGER_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_DECIMAL_VALUE').exactOptional(),
              description: z
                .literal(
                  'Refund amount value is invalid. Can have non-negative value with maximum 7 digits and upto 2 fractions.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_DECIMAL_VALUE', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoicesRefunds_400')

const InvoicesRefunds_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_REFUND_AMOUNT').exactOptional(),
              description: z
                .literal('Recorded refunds cannot exceed recorded payments.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_REFUND_AMOUNT', required: [] }),
          z
            .object({
              issue: z.literal('CANNOT_PROCESS_REFUNDS').exactOptional(),
              description: z
                .literal('Current invoice state does not support refunds.')
                .exactOptional(),
            })
            .openapi({ title: 'CANNOT_PROCESS_REFUNDS', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoicesRefunds_422')

const InvoicesRemind_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z.literal('the value of a field is too long.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_ARRAY_MAX_ITEMS').exactOptional(),
              description: z
                .literal('Only maximum of 100 email address is supported in additional recipients.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_ARRAY_MAX_ITEMS', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoicesRemind_400')

const InvoicesRemind_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('CANNOT_REMIND_INVOICE').exactOptional(),
              description: z
                .literal(
                  'You cannot remind an invoice which is in DRAFT status. Only UNPAID, SENT and PARTIALLY_PAID invoices can be reminded.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'CANNOT_REMIND_INVOICE', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoicesRemind_422')

const InvoicesSearchInvoices_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_INTEGER_MAX_VALUE').exactOptional(),
              description: z.literal('Value exceeds max value.').exactOptional(),
            })
            .openapi({ title: 'INVALID_INTEGER_MAX_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_INTEGER_MIN_VALUE').exactOptional(),
              description: z.literal('Value less than minimum value.').exactOptional(),
            })
            .openapi({ title: 'INVALID_INTEGER_MIN_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z.literal('the value of a field is too long.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_ARRAY_MAX_ITEMS').exactOptional(),
              description: z
                .literal('the number of items in an array parameter is too large.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_ARRAY_MAX_ITEMS', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('the value of a field is either too short or too long.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z.literal('the value of a field is too long.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('the value of a field does not conform to the expected format.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoicesSearchInvoices_400')

const InvoicesUpdate_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Address line2 length should be less than 300 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('National Number length should be between 1 and 14.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Address line1 length should be less than 300 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z.literal('Country code is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Custom label length should be less than 50 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Given name length should be less than 140 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z.literal('Language is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Admin area1 length should be less than 300 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z.literal('Item quantity length should be 1 and 14.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Surname length should be less than 140 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('Attachment reference url length should be between 1 and 2000.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z.literal('Country code length should be 2 characters.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('Currency code length should be 3 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Business name length should be less than 300 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Minimum due amount length should be less than 32 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('Attachment id length should be between 1 and 255.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Admin area2 length should be less than 300 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z.literal('Tax name length should be less than 100.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Website url length should be less than 2048 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Postal code length should be less than 60 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z.literal('National Number is not valid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Memo length should be less than 4000 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Item name length should be less than 200 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('country code length should be between 1 and 3.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Template Id length should be less than 22 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Logo url length should be less than 4000 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Invoice note length should be less than 4000 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Reference field length should be less than 120 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z.literal('Due date is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Terms and Conditions length should be less than 4000 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('Email address length should be between 3 and 254.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Additional data length should be less than 4000.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Additional information value length should be less than 40 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Tax id length should be less than 100 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z.literal('Invoice date is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z.literal('Invoice date is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Invoice number length should be less than 25 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z.literal('Item Date is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Item description length should be less than 1000 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z
                .literal('Shipping Tax name length should be less than 100 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoicesUpdate_400')

const InvoicesUpdate_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('USER_NOT_FOUND').exactOptional(),
              description: z
                .literal('User is not associated with paypal based on invoicer email.')
                .exactOptional(),
            })
            .openapi({ title: 'USER_NOT_FOUND', required: [] }),
          z
            .object({
              issue: z.literal('AUTH_FLOW_REQUIRED').exactOptional(),
              description: z.literal('User is required to pass auth challenge').exactOptional(),
            })
            .openapi({ title: 'AUTH_FLOW_REQUIRED', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InvoicesUpdate_422')

const NotificationSchema = z
  .object({
    subject: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(4000)
      .exactOptional()
      .openapi({
        description:
          'The subject of the email that is sent as a notification to the recipient.<blockquote><strong>Note:</strong> User-provided values for this field will not be honored and the subject will always be defaulted to a system-defined value.</blockquote>',
      }),
    note: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(4000)
      .exactOptional()
      .openapi({
        description:
          'A note to the payer.<blockquote><strong>Note:</strong> User-provided values for this field will not be honored and the note will always be defaulted to a system-defined value.</blockquote>',
      }),
    send_to_invoicer: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Indicates whether to send a copy of the email to the merchant.' }),
    send_to_recipient: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Indicates whether to send a copy of the email to the recipient.' }),
    additional_recipients: EmailAddressListSchema.exactOptional(),
  })
  .openapi({
    title: 'Notification',
    description:
      'The email or SMS notification to send to the invoicer or payer on sending an invoice.',
    required: [],
  })
  .openapi('Notification')

const PaymentReferenceSchema = z
  .object({
    payment_id: z
      .string()
      .regex(/^[0-9A-Za-z_-]+$/)
      .min(1)
      .max(22)
      .exactOptional()
      .openapi({ description: 'The ID for the invoice payment.', readOnly: true }),
  })
  .openapi({
    title: 'Payment Reference',
    description: 'The reference to the payment detail.',
    required: [],
  })
  .openapi('PaymentReference')

const QrConfigSchema = z
  .object({
    width: z
      .int()
      .min(150)
      .max(500)
      .default(500)
      .exactOptional()
      .openapi({
        description: 'The width, in pixels, of the QR code image. Value is from `150` to `500`.',
      }),
    height: z
      .int()
      .min(150)
      .max(500)
      .default(500)
      .exactOptional()
      .openapi({
        description: 'The height, in pixels, of the QR code image. Value is from `150` to `500`.',
      }),
    action: z
      .string()
      .regex(/^(pay|details)$/i)
      .min(0)
      .max(7)
      .default('pay')
      .exactOptional()
      .openapi({
        description:
          'The type of URL for which to generate a QR code. Valid values are `pay` and `details`.',
      }),
  })
  .openapi({
    title: 'QR Configuration',
    description: 'The configuration for a QR code.',
    required: [],
  })
  .openapi('QrConfig')

const RefundReferenceSchema = z
  .object({
    refund_id: z
      .string()
      .regex(/^[0-9A-Za-z_-]+$/)
      .min(1)
      .max(22)
      .exactOptional()
      .openapi({ description: 'The ID of the refund of an invoice payment.', readOnly: true }),
  })
  .openapi({
    title: 'Refund Payment Reference',
    description: 'The reference to the refund payment detail.',
    required: [],
  })
  .openapi('RefundReference')

const SearchDataSchema = z
  .object({
    recipient_email: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(254)
      .exactOptional()
      .openapi({ description: 'Filters the search by the email address.' }),
    recipient_first_name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(140)
      .exactOptional()
      .openapi({ description: 'Filters the search by the recipient first name.' }),
    recipient_last_name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(140)
      .exactOptional()
      .openapi({ description: 'Filters the search by the recipient last name.' }),
    recipient_business_name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(300)
      .exactOptional()
      .openapi({ description: 'Filters the search by the recipient business name.' }),
    invoice_number: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(25)
      .exactOptional()
      .openapi({ description: 'Filters the search by the invoice number.' }),
    status: InvoiceStatusListSchema.exactOptional(),
    reference: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(120)
      .exactOptional()
      .openapi({ description: 'The reference data. Includes a Purchase Order (PO) number.' }),
    currency_code: CurrencyCodeSchema.exactOptional().openapi({
      description:
        'The [three-character ISO-4217 currency code](/docs/integration/direct/rest/currency-codes/) that identifies the currency.',
    }),
    memo: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(500)
      .exactOptional()
      .openapi({ description: 'A private bookkeeping memo for the user.' }),
    total_amount_range: AmountRangeSchema.exactOptional().openapi({
      description: 'Filters the search by the total amount.',
    }),
    invoice_date_range: DateRangeSchema.exactOptional().openapi({
      description:
        'Filters the search by a date range for the invoice, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    due_date_range: DateRangeSchema.exactOptional().openapi({
      description:
        'Filters the search by a due date range for the invoice, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    payment_date_range: DateTimeRangeSchema.exactOptional(),
    creation_date_range: DateTimeRangeSchema.exactOptional().openapi({
      description:
        'Filters the search by a creation date range for the invoice, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    archived: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether to list merchant-archived invoices in the response. Value is:<ul><li><code>true</code>. Response lists only merchant-archived invoices.</li><li><code>false</code>. Response lists only unarchived invoices.</li><li><code>null</code>. Response lists all invoices.</li></ul>',
      }),
    fields: FieldsListSchema.exactOptional(),
  })
  .openapi({ title: 'Search Data', description: 'The invoice search parameters.', required: [] })
  .openapi('SearchData')

const TemplateDetailSchema = DetailSchema.and(
  z
    .object({
      payment_term: PaymentTermSchema.exactOptional().openapi({
        description:
          'The payment due date for the invoice. Value is either but not both <code>term_type</code> or <code>due_date</code>.',
      }),
      metadata: TemplateMetadataSchema.exactOptional().openapi({
        description: 'The audit metadata. Captures all template actions on create and update.',
      }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    title: 'Template Detail',
    description:
      'The template-related details. Includes notes, terms and conditions, memo, and attachments.',
  })
  .openapi('TemplateDetail')

const TemplateInfoSchema = z
  .object({
    detail: TemplateDetailSchema.exactOptional().openapi({
      description:
        'The template-related details. Includes notes, terms and conditions, memo, and attachments.',
    }),
    invoicer: InvoicerInfoSchema.exactOptional().openapi({
      description:
        'The invoicer information. Includes business name, email, address, phone, fax, tax ID, additional notes, and logo URL.',
    }),
    primary_recipients: DefinitionsRecipientInfoListSchema.exactOptional(),
    additional_recipients: EmailAddressListSchema.exactOptional(),
    items: DefinitionsItemListSchema.exactOptional(),
    configuration: TemplateConfigurationSchema.exactOptional().openapi({
      description:
        'The template configuration details. Includes tax information, tip, and partial payment.',
    }),
    amount: AmountSummaryDetailSchema.exactOptional().openapi({
      description:
        'The invoice amount summary of the item total, discount, tax total, and shipping.',
    }),
    due_amount: MoneySchema.exactOptional().openapi({
      description: 'The amount due for the invoice.',
      readOnly: true,
    }),
  })
  .openapi({
    title: 'Template Information',
    description:
      'The template details. Includes invoicer business information, invoice recipients, items, and configuration.',
    required: [],
  })
  .openapi('TemplateInfo')

const TemplateItemFieldSchema = z
  .enum(['ITEMS_QUANTITY', 'ITEMS_DESCRIPTION', 'ITEMS_DATE', 'ITEMS_DISCOUNT', 'ITEMS_TAX'])
  .openapi({
    title: 'Template Item Field',
    description: 'The field names for the invoice line items in the template.',
    'x-enumDescriptions': [
      {
        value: 'ITEMS_QUANTITY',
        description:
          'The quantity of the item in the template that the invoicer provides to the payer. Value is from `-1000000` to `1000000`. Supports up to five decimal places.',
      },
      {
        value: 'ITEMS_DESCRIPTION',
        description: 'The description of the item in the invoice template.',
      },
      {
        value: 'ITEMS_DATE',
        description:
          'The date in invoice template when the item or service was provided, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). For example, *yyyy*-*MM*-*dd*T*z*.',
      },
      {
        value: 'ITEMS_DISCOUNT',
        description:
          'The item discount in the invoice template. Discount as a percent or amount at invoice level. Invoice discount amount is subtracted from the item total.',
      },
      {
        value: 'ITEMS_TAX',
        description:
          'The tax associated with the item in the invoice template. The tax amount is added to the item total. Value is from `0` to `100`. Supports up to five decimal places.',
      },
    ],
  })
  .openapi('TemplateItemField')

const TemplateDisplayPreferenceSchema = z
  .object({
    hidden: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Indicates whether to show or hide this field.' }),
  })
  .openapi({
    title: 'Template Display Preference',
    description: 'The template display preference.',
    required: [],
  })
  .openapi('TemplateDisplayPreference')

const TemplateItemSettingSchema = z
  .object({
    field_name: TemplateItemFieldSchema.exactOptional().openapi({
      description:
        'The field name in `template_data` for which to map corresponding display preferences.',
    }),
    display_preference: TemplateDisplayPreferenceSchema.exactOptional().openapi({
      description: 'The display preference.',
    }),
  })
  .openapi({
    title: 'Template Item Setting',
    description:
      'The template item setting. Sets a template as the default template or edit template.',
    required: [],
  })
  .openapi('TemplateItemSetting')

const TemplateItemSettingListSchema = z
  .array(TemplateItemSettingSchema)
  .min(0)
  .max(2147483647)
  .openapi({ description: 'The template item headers display preference.' })
  .openapi('TemplateItemSettingList')

const TemplateSubtotalFieldSchema = z
  .enum(['DISCOUNT', 'SHIPPING', 'CUSTOM'])
  .openapi({
    title: 'Template Subtotal Field',
    description: 'The field names in the template for discount, shipping, and custom amounts.',
    'x-enumDescriptions': [
      {
        value: 'DISCOUNT',
        description:
          'The discount as a percent or amount at invoice level. The invoice discount amount is subtracted from the item total.',
      },
      {
        value: 'SHIPPING',
        description:
          'The shipping fee for all items in the invoice template. Also includes the tax on shipping.',
      },
      {
        value: 'CUSTOM',
        description:
          'The custom amount to apply to an invoice in the template. If you include a label, you must include the custom amount.',
      },
    ],
  })
  .openapi('TemplateSubtotalField')

const TemplateSubtotalSettingSchema = z
  .object({
    field_name: TemplateSubtotalFieldSchema.exactOptional().openapi({
      description:
        'The field name in `template_data` for which to map corresponding display preferences.',
    }),
    display_preference: TemplateDisplayPreferenceSchema.exactOptional().openapi({
      description: 'The display preference.',
    }),
  })
  .openapi({
    title: 'Template Subtotal Setting',
    description: 'The template subtotal setting. Includes the field name and display preference.',
    required: [],
  })
  .openapi('TemplateSubtotalSetting')

const TemplateSubtotalSettingListSchema = z
  .array(TemplateSubtotalSettingSchema)
  .min(0)
  .max(2147483647)
  .openapi({ description: 'The template subtotal headers display preference.' })
  .openapi('TemplateSubtotalSettingList')

const TemplateSettingsSchema = z
  .object({
    template_item_settings: TemplateItemSettingListSchema.exactOptional(),
    template_subtotal_settings: TemplateSubtotalSettingListSchema.exactOptional(),
  })
  .openapi({
    title: 'Template Settings',
    description: 'The template settings. Sets a template as the default template or edit template.',
    required: [],
  })
  .openapi('TemplateSettings')

const TemplateSchema = z
  .object({
    id: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(0)
      .max(30)
      .exactOptional()
      .openapi({ description: 'The ID of the template.', readOnly: true }),
    name: z
      .string()
      .regex(/^[\S\s]*$/)
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'The template name.<blockquote><strong>Note:</strong> The template name must be unique.</blockquote>',
      }),
    default_template: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether this template is the default template. A invoicer can have one default template.',
      }),
    template_info: TemplateInfoSchema.exactOptional().openapi({
      description:
        'The template details. Includes invoicer business information, invoice recipients, items, and configuration.',
    }),
    settings: TemplateSettingsSchema.exactOptional().openapi({
      description:
        'The template settings. Describes which fields to show or hide when you create an invoice.',
    }),
    unit_of_measure: UnitOfMeasureSchema.exactOptional().openapi({
      description: 'The unit of measure for the template. Value is quantity, hours, or amount.',
    }),
    standard_template: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether this template is a invoicer-created custom template. The system generates non-custom templates.',
        readOnly: true,
      }),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Template',
    description: 'The template with invoice details to load with all captured fields.',
    required: [],
  })
  .openapi('Template')

const TemplateListSchema = z
  .array(TemplateSchema)
  .min(0)
  .max(2147483647)
  .openapi({
    description:
      'An array of details for each template. If `fields` is `none`, returns only the template name, ID, and default status.',
  })
  .openapi('TemplateList')

const TemplatesDefinitionsPhoneDetailListSchema = z
  .array(PhoneDetailSchema)
  .min(0)
  .max(2147483647)
  .openapi({ description: "An array of phone numbers in the user's PayPal profile." })
  .openapi('TemplatesDefinitionsPhoneDetailList')

const TemplatesSchema = z
  .object({
    addresses: AddressPortableListSchema.exactOptional(),
    emails: EmailAddressSchema.exactOptional().openapi({
      description: "An array of emails in the user's PayPal profile.",
      readOnly: true,
    }),
    phones: TemplatesDefinitionsPhoneDetailListSchema.exactOptional(),
    templates: TemplateListSchema.exactOptional(),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Templates',
    description:
      "An array of merchant-created templates with associated details that include the emails, addresses, and phone numbers from the user's PayPal profile.",
    required: [],
  })
  .openapi('Templates')

const TemplatesCreate_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('TEMPLATE_NAME_ALREADY_EXISTS').exactOptional(),
              description: z.literal('Template name already exists.').exactOptional(),
            })
            .openapi({ title: 'TEMPLATE_NAME_ALREADY_EXISTS', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('Template name length should be between 1 and 500.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('Currency code length should be 3 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('the value of a field is either too short or too long.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z.literal('Value of the field is too long.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('the value of a field does not conform to the expected format.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplatesCreate_400')

const TemplatesCreate_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('CANNOT_CANCEL_DRAFT_INVOICE').exactOptional(),
              description: z.literal('Cannot cancel a draft invoice.').exactOptional(),
            })
            .openapi({ title: 'CANNOT_CANCEL_DRAFT_INVOICE', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplatesCreate_422')

const TemplatesDelete_403Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('PERMISSION_DENIED').exactOptional(),
              description: z
                .literal('The requested template is not associated with the requested user.')
                .exactOptional(),
            })
            .openapi({ title: 'PERMISSION_DENIED', required: [] }),
          z
            .object({
              issue: z.literal('CANNOT_DELETE_GLOBAL_TEMPLATE').exactOptional(),
              description: z.literal('Global templates cannot be deleted.').exactOptional(),
            })
            .openapi({ title: 'CANNOT_DELETE_GLOBAL_TEMPLATE', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplatesDelete_403')

const TemplatesGet_403Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('PERMISSION_DENIED').exactOptional(),
              description: z
                .literal('The requested template is not associated with the requested user.')
                .exactOptional(),
            })
            .openapi({ title: 'PERMISSION_DENIED', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplatesGet_403')

const TemplatesUpdate_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('TEMPLATE_NAME_ALREADY_EXISTS').exactOptional(),
              description: z.literal('Template name already exists.').exactOptional(),
            })
            .openapi({ title: 'TEMPLATE_NAME_ALREADY_EXISTS', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('Template name length should be between 1 and 500.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('Currency code length should be 3 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_LENGTH').exactOptional(),
              description: z
                .literal('Value of the field is either too short or too long.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z.literal('Value of the field is too long.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('Value of the field does not conform to the expected format.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TemplatesUpdate_400')

const DefaultResponse = {
  description: 'The default response.',
  content: { 'application/json': { schema: ErrorDefaultSchema } },
}

const PageParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(1000),
  )
  .default(1)
  .exactOptional()
  .openapi({
    param: {
      name: 'page',
      in: 'query',
      description:
        'The page number to be retrieved, for the list of templates. So, a combination of `page=1` and `page_size=20` returns the first 20 templates. A combination of `page=2` and `page_size=20` returns the next 20 templates.',
      schema: { type: 'integer', minimum: 1, maximum: 1000, default: 1 },
      required: false,
    },
  })

const PageSizeParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(100),
  )
  .default(20)
  .exactOptional()
  .openapi({
    param: {
      name: 'page_size',
      in: 'query',
      description: 'The maximum number of templates to return in the response.',
      schema: { type: 'integer', minimum: 1, maximum: 100, default: 20 },
      required: false,
    },
  })

const TotalRequiredParamsSchema = z
  .stringbool()
  .default(false)
  .exactOptional()
  .openapi({
    param: {
      name: 'total_required',
      in: 'query',
      description:
        'Indicates whether the to show <code>total_pages</code> and <code>total_items</code> in the response.',
      schema: { type: 'boolean', default: false },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .regex(/^(all|none)$/i)
  .min(0)
  .max(2147483647)
  .default('all')
  .exactOptional()
  .openapi({
    param: {
      name: 'fields',
      in: 'query',
      description:
        'The fields to return in the response. Value is `all` or `none`. To return only the template name, ID, and default attributes, specify `none`.',
      schema: {
        type: 'string',
        minLength: 0,
        maxLength: 2147483647,
        pattern: '(?i)^(all|none)$',
        default: 'all',
      },
      required: false,
    },
  })

const InvoiceIdParamsSchema = z
  .string()
  .regex(/^.*$/)
  .min(0)
  .max(2147483647)
  .openapi({
    param: {
      name: 'invoice_id',
      in: 'path',
      required: true,
      description: 'The ID of the draft invoice to delete.',
      schema: { type: 'string', minLength: 0, maxLength: 2147483647, pattern: '^.*$' },
    },
  })

const TransactionIdParamsSchema = z
  .string()
  .regex(/^.*$/)
  .min(0)
  .max(2147483647)
  .openapi({
    param: {
      name: 'transaction_id',
      in: 'path',
      required: true,
      description: 'The ID of the external refund transaction to delete.',
      schema: { type: 'string', minLength: 0, maxLength: 2147483647, pattern: '^.*$' },
    },
  })

const SendToRecipientParamsSchema = z
  .stringbool()
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      name: 'send_to_recipient',
      in: 'query',
      description: 'Indicates whether to send the invoice update notification to the recipient.',
      schema: { type: 'boolean', default: true },
      required: false,
    },
  })

const SendToInvoicerParamsSchema = z
  .stringbool()
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      name: 'send_to_invoicer',
      in: 'query',
      description: 'Indicates whether to send the invoice update notification to the merchant.',
      schema: { type: 'boolean', default: true },
      required: false,
    },
  })

const TemplateIdParamsSchema = z
  .string()
  .regex(/^.*$/)
  .min(0)
  .max(2147483647)
  .openapi({
    param: {
      name: 'template_id',
      in: 'path',
      required: true,
      description: 'The ID of the template to delete.',
      schema: { type: 'string', minLength: 0, maxLength: 2147483647, pattern: '^.*$' },
    },
  })

const IdParamsSchema = z
  .string()
  .regex(/^[0-9]+$/)
  .min(1)
  .max(24)
  .openapi({
    param: {
      name: 'id',
      description: 'The invoice id of the account.',
      in: 'path',
      required: true,
      schema: { type: 'string', minLength: 1, maxLength: 24, pattern: '^[0-9]+$' },
    },
  })

const Oauth2SecurityScheme = {
  type: 'oauth2',
  description: 'Oauth 2.0 authentication',
  flows: {
    clientCredentials: {
      tokenUrl: '/v1/oauth2/token',
      scopes: {
        'https://uri.paypal.com/services/invoicing/invoices/read':
          'For Reading the invoice details.',
        'https://uri.paypal.com/services/invoicing/invoices/readwrite':
          'For managing (Create, Update, Delete) invoice.',
        'https://uri.paypal.com/services/invoicing/internal':
          'Manage invoice resource internal clients.',
      },
    },
  },
}

export const getV2InvoicingInvoicesRoute = createRoute({
  method: 'get',
  path: '/v2/invoicing/invoices',
  tags: ['invoices'],
  summary: 'List invoices',
  description:
    'Lists invoices. To filter the invoices that appear in the response, you can specify one or more optional query parameters.',
  operationId: 'invoices.list',
  request: {
    query: z.object({
      page: PageParamsSchema,
      page_size: PageSizeParamsSchema,
      total_required: TotalRequiredParamsSchema,
      fields: FieldsParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that lists invoices with details.',
      content: {
        'application/json': { schema: InvoicesSchema },
        'multipart/mixed': { schema: InvoicesSchema },
      },
    },
    400: {
      description: 'Invalid request.',
      content: {
        'application/json': { schema: Error_400Schema.and(_400Schema) },
        'multipart/mixed': { schema: Error_400Schema.and(_400Schema) },
      },
    },
    403: {
      description: 'Authorization Error.',
      content: {
        'application/json': { schema: Error_403Schema },
        'multipart/mixed': { schema: Error_403Schema },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: {
        'application/json': { schema: Error_500Schema },
        'multipart/mixed': { schema: Error_500Schema },
      },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/read'] }],
})

export const postV2InvoicingInvoicesRoute = createRoute({
  method: 'post',
  path: '/v2/invoicing/invoices',
  tags: ['invoices'],
  summary: 'Create draft invoice',
  description:
    'Creates a draft invoice. To move the invoice from a draft to payable state, you must <a href="#invoices_send">send the invoice</a>.<br/><br/>In the JSON request body, include invoice details including merchant information. The <code>invoice</code> object must include an <code>items</code> array.<blockquote><strong>Note:</strong> The merchant that you specify in an invoice must have a PayPal account in good standing.</blockquote>.',
  operationId: 'invoices.create',
  request: {
    body: {
      description:
        'The invoice details which includes all information of the invoice like items, billing information.',
      content: { 'application/json': { schema: InvoiceSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description:
        'A successful request returns the HTTP `201 Created` status code. A JSON response body that shows invoice details is returned if you set <code>prefer=return=representation</code>.',
      content: {
        'application/json': { schema: InvoiceSchema },
        'multipart/mixed': { schema: InvoiceSchema },
      },
    },
    400: {
      description: 'Invalid request.',
      content: {
        'application/json': { schema: Error_400Schema.and(InvoicesCreate_400Schema) },
        'multipart/mixed': { schema: Error_400Schema.and(InvoicesCreate_400Schema) },
      },
    },
    403: {
      description: 'Authorization Error.',
      content: {
        'application/json': { schema: Error_403Schema },
        'multipart/mixed': { schema: Error_403Schema },
      },
    },
    422: {
      description: 'Unprocessable Entity.',
      content: {
        'application/json': { schema: Error_422Schema.and(_422Schema) },
        'multipart/mixed': { schema: Error_422Schema.and(_422Schema) },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: {
        'application/json': { schema: Error_500Schema },
        'multipart/mixed': { schema: Error_500Schema },
      },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/readwrite'] }],
})

export const postV2InvoicingInvoicesInvoiceIdSendRoute = createRoute({
  method: 'post',
  path: '/v2/invoicing/invoices/{invoice_id}/send',
  tags: ['invoices'],
  summary: 'Send invoice',
  description:
    'Sends or schedules an invoice, by ID, to be sent to a customer. The action depends on the invoice issue date:<ul><li>If the invoice issue date is current or in the past, sends the invoice immediately.</li><li>If the invoice issue date is in the future, schedules the invoice to be sent on that date.</li></ul>To suppress the merchant\'s email notification, set the `send_to_invoicer` body parameter to `false`. To send the invoice through a share link and not through PayPal, set the <code>send_to_recipient</code> parameter to <code>false</code> in the <code>notification</code> object. The <code>send_to_recipient</code> parameter does not apply to a future issue date because the invoice is scheduled to be sent through PayPal on that date.<blockquote><strong>Notes:</strong><ul><li>After you send an invoice, resending it has no effect.</li><li>To send a notification for updates, <a href="#invoices_update">update the invoice</a> and set the <code>send_to_recipient</code> body parameter to <code>true</code>.</li></ul></blockquote>',
  operationId: 'invoices.send',
  request: {
    params: z.object({ invoice_id: InvoiceIdParamsSchema }),
    body: {
      description: 'The email or SMS notification to send to the payer when they send an invoice..',
      content: { 'application/json': { schema: NotificationSchema } },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` when the invoice issue date is current date.',
      content: {
        'application/json': { schema: LinkDescriptionSchema },
        'multipart/mixed': { schema: LinkDescriptionSchema },
      },
    },
    202: {
      description: 'The server has accepted the request and will execute it at a later time.',
      content: {
        'application/json': { schema: LinkDescriptionSchema },
        'multipart/mixed': { schema: LinkDescriptionSchema },
      },
    },
    400: {
      description: 'Invalid request.',
      content: {
        'application/json': { schema: Error_400Schema },
        'multipart/mixed': { schema: Error_400Schema },
      },
    },
    403: {
      description: 'Authorization Error.',
      content: {
        'application/json': { schema: Error_403Schema },
        'multipart/mixed': { schema: Error_403Schema },
      },
    },
    404: {
      description: 'Resource Not Found.',
      content: {
        'application/json': { schema: Error_404Schema },
        'multipart/mixed': { schema: Error_404Schema },
      },
    },
    422: {
      description: 'Unprocessable Entity.',
      content: {
        'application/json': { schema: Error_422Schema },
        'multipart/mixed': { schema: Error_422Schema },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: {
        'application/json': { schema: Error_500Schema },
        'multipart/mixed': { schema: Error_500Schema },
      },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/readwrite'] }],
})

export const postV2InvoicingInvoicesInvoiceIdRemindRoute = createRoute({
  method: 'post',
  path: '/v2/invoicing/invoices/{invoice_id}/remind',
  tags: ['invoices'],
  summary: 'Send invoice reminder',
  description:
    'Sends a reminder to the payer about an invoice, by ID. In the JSON request body, include a `notification` object that defines the subject of the reminder and other details. <blockquote><strong>Notes:</strong><ul><li>API caller can send only 2 reminders in a day.</li></ul></blockquote>.',
  operationId: 'invoices.remind',
  request: {
    params: z.object({ invoice_id: InvoiceIdParamsSchema }),
    body: {
      description: 'The email or SMS notification that will be sent to the payer for reminder.',
      content: { 'application/json': { schema: NotificationSchema } },
    },
  },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    400: {
      description: 'Invalid request.',
      content: {
        'application/json': { schema: Error_400Schema.and(InvoicesRemind_400Schema) },
        'multipart/mixed': { schema: Error_400Schema.and(InvoicesRemind_400Schema) },
      },
    },
    403: {
      description: 'Authorization Error.',
      content: {
        'application/json': { schema: Error_403Schema.and(_403Schema) },
        'multipart/mixed': { schema: Error_403Schema.and(_403Schema) },
      },
    },
    404: {
      description: 'Resource Not Found.',
      content: {
        'application/json': { schema: Error_404Schema },
        'multipart/mixed': { schema: Error_404Schema },
      },
    },
    422: {
      description: 'Unprocessable Entity.',
      content: {
        'application/json': { schema: Error_422Schema.and(InvoicesRemind_422Schema) },
        'multipart/mixed': { schema: Error_422Schema.and(InvoicesRemind_422Schema) },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: {
        'application/json': { schema: Error_500Schema },
        'multipart/mixed': { schema: Error_500Schema },
      },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/readwrite'] }],
})

export const postV2InvoicingInvoicesInvoiceIdCancelRoute = createRoute({
  method: 'post',
  path: '/v2/invoicing/invoices/{invoice_id}/cancel',
  tags: ['invoices'],
  summary: 'Cancel sent invoice',
  description:
    'Cancels a sent invoice, by ID, and, optionally, sends a notification about the cancellation to the payer, merchant, and CC: emails.',
  operationId: 'invoices.cancel',
  request: {
    params: z.object({ invoice_id: InvoiceIdParamsSchema }),
    body: {
      description: 'The email or SMS notification that will be sent to the payer on cancellation.',
      content: { 'application/json': { schema: NotificationSchema } },
      required: true,
    },
  },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    400: {
      description: 'Invalid request.',
      content: { 'application/json': { schema: Error_400Schema.and(InvoicesCancel_400Schema) } },
    },
    403: {
      description: 'Authorization Error.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'Resource Not Found.',
      content: { 'application/json': { schema: Error_404Schema } },
    },
    422: {
      description: 'Unprocessable Entity.',
      content: { 'application/json': { schema: Error_422Schema.and(InvoicesCancel_422Schema) } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/readwrite'] }],
})

export const postV2InvoicingInvoicesInvoiceIdPaymentsRoute = createRoute({
  method: 'post',
  path: '/v2/invoicing/invoices/{invoice_id}/payments',
  tags: ['invoices'],
  summary: 'Record payment for invoice',
  description:
    'Records a payment for the invoice. If no payment is due, the invoice is marked as `PAID`. Otherwise, the invoice is marked as `PARTIALLY PAID`.',
  operationId: 'invoices.payments',
  request: {
    params: z.object({ invoice_id: InvoiceIdParamsSchema }),
    body: {
      description: 'The details of the payment to record against the invoice.',
      content: { 'application/json': { schema: PaymentDetailSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 Created` status code and a reference to the recorded payment.',
      content: {
        'application/json': { schema: PaymentReferenceSchema },
        'multipart/mixed': { schema: PaymentReferenceSchema },
      },
    },
    400: {
      description: 'Invalid request.',
      content: {
        'application/json': { schema: Error_400Schema.and(InvoicesPayments_400Schema) },
        'multipart/mixed': { schema: Error_400Schema.and(InvoicesPayments_400Schema) },
      },
    },
    403: {
      description: 'Authorization Error.',
      content: {
        'application/json': { schema: Error_403Schema.and(_403Schema) },
        'multipart/mixed': { schema: Error_403Schema.and(_403Schema) },
      },
    },
    404: {
      description: 'Resource Not Found.',
      content: {
        'application/json': { schema: Error_404Schema },
        'multipart/mixed': { schema: Error_404Schema },
      },
    },
    422: {
      description: 'Unprocessable Entity.',
      content: {
        'application/json': { schema: Error_422Schema.and(InvoicesPayments_422Schema) },
        'multipart/mixed': { schema: Error_422Schema.and(InvoicesPayments_422Schema) },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: {
        'application/json': { schema: Error_500Schema },
        'multipart/mixed': { schema: Error_500Schema },
      },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/readwrite'] }],
})

export const deleteV2InvoicingInvoicesInvoiceIdPaymentsTransactionIdRoute = createRoute({
  method: 'delete',
  path: '/v2/invoicing/invoices/{invoice_id}/payments/{transaction_id}',
  tags: ['invoices'],
  summary: 'Delete external payment',
  description: 'Deletes an external payment, by invoice ID and transaction ID.',
  operationId: 'invoices.payments-delete',
  request: {
    params: z.object({
      invoice_id: InvoiceIdParamsSchema,
      transaction_id: TransactionIdParamsSchema,
    }),
  },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    400: {
      description: 'Invalid request.',
      content: { 'application/json': { schema: Error_400Schema } },
    },
    403: {
      description: 'Authorization Error.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'Resource Not Found.',
      content: { 'application/json': { schema: Error_404Schema } },
    },
    422: {
      description: 'Unprocessable Entity.',
      content: {
        'application/json': { schema: Error_422Schema.and(InvoicesPaymentsDelete_422Schema) },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/readwrite'] }],
})

export const postV2InvoicingInvoicesInvoiceIdRefundsRoute = createRoute({
  method: 'post',
  path: '/v2/invoicing/invoices/{invoice_id}/refunds',
  tags: ['invoices'],
  summary: 'Record refund for invoice',
  description:
    'Records a refund for the invoice. If all payments are refunded, the invoice is marked as `REFUNDED`. Otherwise, the invoice is marked as `PARTIALLY REFUNDED`.',
  operationId: 'invoices.refunds',
  request: {
    params: z.object({ invoice_id: InvoiceIdParamsSchema }),
    body: {
      description: 'The details of the refund to record against the invoice.',
      content: { 'application/json': { schema: RefundDetailSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 Created` status code and a reference to the recorded refund.',
      content: {
        'application/json': { schema: RefundReferenceSchema },
        'multipart/mixed': { schema: RefundReferenceSchema },
      },
    },
    400: {
      description: 'Invalid request.',
      content: {
        'application/json': { schema: Error_400Schema.and(InvoicesRefunds_400Schema) },
        'multipart/mixed': { schema: Error_400Schema.and(InvoicesRefunds_400Schema) },
      },
    },
    403: {
      description: 'Authorization Error.',
      content: {
        'application/json': { schema: Error_403Schema.and(_403Schema) },
        'multipart/mixed': { schema: Error_403Schema.and(_403Schema) },
      },
    },
    404: {
      description: 'Resource Not Found.',
      content: {
        'application/json': { schema: Error_404Schema },
        'multipart/mixed': { schema: Error_404Schema },
      },
    },
    422: {
      description: 'Unprocessable Entity.',
      content: {
        'application/json': { schema: Error_422Schema.and(InvoicesRefunds_422Schema) },
        'multipart/mixed': { schema: Error_422Schema.and(InvoicesRefunds_422Schema) },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: {
        'application/json': { schema: Error_500Schema },
        'multipart/mixed': { schema: Error_500Schema },
      },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/readwrite'] }],
})

export const deleteV2InvoicingInvoicesInvoiceIdRefundsTransactionIdRoute = createRoute({
  method: 'delete',
  path: '/v2/invoicing/invoices/{invoice_id}/refunds/{transaction_id}',
  tags: ['invoices'],
  summary: 'Delete external refund',
  description: 'Deletes an external refund, by invoice ID and transaction ID.',
  operationId: 'invoices.refunds-delete',
  request: {
    params: z.object({
      invoice_id: InvoiceIdParamsSchema,
      transaction_id: TransactionIdParamsSchema,
    }),
  },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    400: {
      description: 'Invalid request.',
      content: {
        'application/json': { schema: Error_400Schema },
        'multipart/mixed': { schema: Error_400Schema },
      },
    },
    403: {
      description: 'Authorization Error.',
      content: {
        'application/json': { schema: Error_403Schema.and(_403Schema) },
        'multipart/mixed': { schema: Error_403Schema.and(_403Schema) },
      },
    },
    404: {
      description: 'Resource Not Found.',
      content: {
        'application/json': { schema: Error_404Schema },
        'multipart/mixed': { schema: Error_404Schema },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: {
        'application/json': { schema: Error_500Schema },
        'multipart/mixed': { schema: Error_500Schema },
      },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/readwrite'] }],
})

export const postV2InvoicingInvoicesInvoiceIdGenerateQrCodeRoute = createRoute({
  method: 'post',
  path: '/v2/invoicing/invoices/{invoice_id}/generate-qr-code',
  tags: ['invoices'],
  summary: 'Generate QR code',
  description:
    'Generates a QR code for an invoice, by ID. The QR code is a PNG image in <a href="https://www.base64encode.org/">Base64-encoded</a> format that corresponds to the invoice ID. You can generate a QR code for an invoice and add it to a paper or PDF invoice. When customers use their mobile devices to scan the QR code, they are redirected to the PayPal mobile payment flow where they can view the invoice and pay online with PayPal or a credit card. Before you get a QR code, you must <a href="#invoices_create">create an invoice</a> and <a href="#invoices_send">send an invoice</a> to move the invoice from a draft to payable state. Do not include an email address if you do not want the invoice emailed.',
  operationId: 'invoices.generate-qr-code',
  request: {
    params: z.object({ invoice_id: InvoiceIdParamsSchema }),
    body: {
      description:
        'Optional configuration parameters to adjust QR code width, height and the encoded URL.',
      content: { 'application/json': { schema: QrConfigSchema } },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows the QR code as a PNG image.',
    },
    400: {
      description: 'Invalid request.',
      content: {
        'multipart/mixed': { schema: Error_400Schema.and(InvoicesGenerateQrCode_400Schema) },
      },
    },
    403: {
      description: 'Authorization Error.',
      content: { 'multipart/mixed': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'Resource Not Found.',
      content: { 'multipart/mixed': { schema: Error_404Schema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'multipart/mixed': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/readwrite'] }],
})

export const postV2InvoicingGenerateNextInvoiceNumberRoute = createRoute({
  method: 'post',
  path: '/v2/invoicing/generate-next-invoice-number',
  tags: ['invoices'],
  summary: 'Generate invoice number',
  description:
    'Generates the next invoice number that is available to the merchant. The next invoice number uses the prefix and suffix from the last invoice number and increments the number by one. For example, the next invoice number after `INVOICE-1234` is `INVOICE-1235`.',
  operationId: 'invoicing.generate-next-invoice-number',
  request: {
    body: {
      description: 'Is the fetch type invoice number or id.',
      content: { 'application/json': { schema: FetchtypeSchema } },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows the next invoice number.',
      content: { 'application/json': { schema: InvoiceNumberSchema } },
    },
    400: {
      description: 'Invalid request.',
      content: { 'application/json': { schema: Error_400Schema } },
    },
    403: {
      description: 'Authorization Error.',
      content: { 'application/json': { schema: Error_403Schema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/readwrite'] }],
})

export const getV2InvoicingInvoicesInvoiceIdRoute = createRoute({
  method: 'get',
  path: '/v2/invoicing/invoices/{invoice_id}',
  tags: ['invoices'],
  summary: 'Show invoice details',
  description: 'Shows details for an invoice, by ID.',
  operationId: 'invoices.get',
  request: { params: z.object({ invoice_id: InvoiceIdParamsSchema }) },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows invoice details.',
      content: { 'application/json': { schema: InvoiceSchema } },
    },
    400: {
      description: 'Invalid request.',
      content: { 'application/json': { schema: Error_400Schema } },
    },
    403: {
      description: 'Authorization Error.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'Resource Not Found.',
      content: { 'application/json': { schema: Error_404Schema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/read'] }],
})

export const putV2InvoicingInvoicesInvoiceIdRoute = createRoute({
  method: 'put',
  path: '/v2/invoicing/invoices/{invoice_id}',
  tags: ['invoices'],
  summary: 'Fully update invoice',
  description:
    'Fully updates an invoice, by ID. In the JSON request body, include a complete `invoice` object. This call does not support partial updates. <blockquote><strong>Notes:</strong><ul><li>API caller can change/modify recipient only 2 times in 72 hours.</li></ul></blockquote>.',
  operationId: 'invoices.update',
  request: {
    params: z.object({ invoice_id: InvoiceIdParamsSchema }),
    query: z.object({
      send_to_recipient: SendToRecipientParamsSchema,
      send_to_invoicer: SendToInvoicerParamsSchema,
    }),
    body: {
      description: 'A representation of changes to make in the invoice.',
      content: { 'application/json': { schema: InvoiceSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code. A JSON response body that shows invoice details is returned if you set <code>prefer=return=representation</code>.',
      content: {
        'application/json': { schema: InvoiceSchema },
        'multipart/mixed': { schema: InvoiceSchema },
      },
    },
    400: {
      description: 'Invalid request.',
      content: {
        'application/json': { schema: Error_400Schema.and(InvoicesUpdate_400Schema) },
        'multipart/mixed': { schema: Error_400Schema.and(InvoicesUpdate_400Schema) },
      },
    },
    403: {
      description: 'Authorization Error.',
      content: {
        'application/json': { schema: Error_403Schema.and(_403Schema) },
        'multipart/mixed': { schema: Error_403Schema.and(_403Schema) },
      },
    },
    404: {
      description: 'Resource Not Found.',
      content: {
        'application/json': { schema: Error_404Schema },
        'multipart/mixed': { schema: Error_404Schema },
      },
    },
    422: {
      description: 'Unprocessable Entity.',
      content: {
        'application/json': { schema: Error_422Schema.and(InvoicesUpdate_422Schema) },
        'multipart/mixed': { schema: Error_422Schema.and(InvoicesUpdate_422Schema) },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: {
        'application/json': { schema: Error_500Schema },
        'multipart/mixed': { schema: Error_500Schema },
      },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/readwrite'] }],
})

export const deleteV2InvoicingInvoicesInvoiceIdRoute = createRoute({
  method: 'delete',
  path: '/v2/invoicing/invoices/{invoice_id}',
  tags: ['invoices'],
  summary: 'Delete invoice',
  description:
    'Deletes a draft or scheduled invoice, by ID. Deletes invoices in the draft or scheduled state only. For invoices that have already been sent, you can <a href="/docs/api/invoicing/v2/#invoices_cancel">cancel the invoice</a>. After you delete a draft or scheduled invoice, you can no longer use it or show its details. However, you can reuse its invoice number.',
  operationId: 'invoices.delete',
  request: { params: z.object({ invoice_id: InvoiceIdParamsSchema }) },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    400: {
      description: 'Invalid request.',
      content: { 'application/json': { schema: Error_400Schema } },
    },
    403: {
      description: 'Authorization Error.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'Resource Not Found.',
      content: { 'application/json': { schema: Error_404Schema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/readwrite'] }],
})

export const postV2InvoicingSearchInvoicesRoute = createRoute({
  method: 'post',
  path: '/v2/invoicing/search-invoices',
  tags: ['search-invoices'],
  summary: 'Search for invoices',
  description:
    'Searches for and lists invoices that match search criteria. If you pass multiple criteria, the response lists invoices that match all criteria.',
  operationId: 'invoices.search-invoices',
  request: {
    query: z.object({
      page: PageParamsSchema,
      page_size: PageSizeParamsSchema,
      total_required: TotalRequiredParamsSchema,
    }),
    body: {
      description:
        'The invoice search can be used to retrieve the invoices based on the search parameters.',
      content: { 'application/json': { schema: SearchDataSchema } },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that lists the invoices that match the search criteria.',
      content: {
        'application/json': { schema: InvoicesSchema },
        'multipart/mixed': { schema: InvoicesSchema },
      },
    },
    400: {
      description: 'Invalid request.',
      content: {
        'application/json': { schema: Error_400Schema.and(InvoicesSearchInvoices_400Schema) },
        'multipart/mixed': { schema: Error_400Schema.and(InvoicesSearchInvoices_400Schema) },
      },
    },
    403: {
      description: 'Authorization Error.',
      content: {
        'application/json': { schema: Error_403Schema },
        'multipart/mixed': { schema: Error_403Schema },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: {
        'application/json': { schema: Error_500Schema },
        'multipart/mixed': { schema: Error_500Schema },
      },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/read'] }],
})

export const getV2InvoicingTemplatesRoute = createRoute({
  method: 'get',
  path: '/v2/invoicing/templates',
  tags: ['templates'],
  summary: 'List templates',
  description:
    "Lists merchant-created templates with associated details. The associated details include the emails, addresses, and phone numbers from the user's PayPal profile.<br/>The user can select which values to show in the business information section of their template.",
  operationId: 'templates.list',
  request: {
    query: z.object({
      fields: FieldsParamsSchema,
      page: PageParamsSchema,
      page_size: PageSizeParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that lists invoices.',
      content: {
        'application/json': { schema: TemplatesSchema },
        'multipart/mixed': { schema: TemplatesSchema },
      },
    },
    400: {
      description: 'Invalid request.',
      content: {
        'application/json': { schema: Error_400Schema.and(_400Schema) },
        'multipart/mixed': { schema: Error_400Schema.and(_400Schema) },
      },
    },
    403: {
      description: 'Authorization Error.',
      content: {
        'application/json': { schema: Error_403Schema },
        'multipart/mixed': { schema: Error_403Schema },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: {
        'application/json': { schema: Error_500Schema },
        'multipart/mixed': { schema: Error_500Schema },
      },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/read'] }],
})

export const postV2InvoicingTemplatesRoute = createRoute({
  method: 'post',
  path: '/v2/invoicing/templates',
  tags: ['templates'],
  summary: 'Create template',
  description:
    'Creates an invoice template. You can use details from this template to create an invoice. You can create up to 50 templates.<blockquote><strong>Note:</strong> Every merchant starts with three PayPal system templates that are optimized for the unit type billed. The template includes `Quantity`, `Hours`, and `Amount`.</blockquote>',
  operationId: 'templates.create',
  request: {
    body: { content: { 'application/json': { schema: TemplateSchema } }, required: true },
  },
  responses: {
    201: {
      description:
        'A successful request returns the HTTP `201 Created` status code. A JSON response body that shows template details is returned if you set <code>prefer=return=representation</code>.',
      content: {
        'application/json': { schema: TemplateSchema },
        'multipart/mixed': { schema: TemplateSchema },
      },
    },
    400: {
      description: 'Invalid request.',
      content: {
        'application/json': { schema: Error_400Schema.and(TemplatesCreate_400Schema) },
        'multipart/mixed': { schema: Error_400Schema.and(TemplatesCreate_400Schema) },
      },
    },
    403: {
      description: 'Authorization Error.',
      content: {
        'application/json': { schema: Error_403Schema },
        'multipart/mixed': { schema: Error_403Schema },
      },
    },
    422: {
      description: 'Unprocessable Entity.',
      content: {
        'application/json': { schema: Error_422Schema.and(TemplatesCreate_422Schema) },
        'multipart/mixed': { schema: Error_422Schema.and(TemplatesCreate_422Schema) },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: {
        'application/json': { schema: Error_500Schema },
        'multipart/mixed': { schema: Error_500Schema },
      },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/readwrite'] }],
})

export const getV2InvoicingTemplatesTemplateIdRoute = createRoute({
  method: 'get',
  path: '/v2/invoicing/templates/{template_id}',
  tags: ['templates'],
  summary: 'Show template details',
  description: 'Shows details for a template, by ID.',
  operationId: 'templates.get',
  request: { params: z.object({ template_id: TemplateIdParamsSchema }) },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows template details.',
      content: {
        'application/json': { schema: TemplateSchema },
        'multipart/mixed': { schema: TemplateSchema },
      },
    },
    403: {
      description: 'Authorization Error.',
      content: {
        'application/json': { schema: Error_403Schema.and(TemplatesGet_403Schema) },
        'multipart/mixed': { schema: Error_403Schema.and(TemplatesGet_403Schema) },
      },
    },
    404: {
      description: 'Resource Not Found.',
      content: {
        'application/json': { schema: Error_404Schema },
        'multipart/mixed': { schema: Error_404Schema },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: {
        'application/json': { schema: Error_500Schema },
        'multipart/mixed': { schema: Error_500Schema },
      },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/read'] }],
})

export const putV2InvoicingTemplatesTemplateIdRoute = createRoute({
  method: 'put',
  path: '/v2/invoicing/templates/{template_id}',
  tags: ['templates'],
  summary: 'Fully update template',
  description:
    'Fully updates a template, by ID. In the JSON request body, include a complete `template` object. This call does not support partial updates.',
  operationId: 'templates.update',
  request: {
    params: z.object({ template_id: TemplateIdParamsSchema }),
    body: {
      description: 'A representation of changes to make in the template.',
      content: { 'application/json': { schema: TemplateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code. A JSON response body that shows template details is returned if you set <code>prefer=return=representation</code>.',
      content: { 'application/json': { schema: TemplateSchema } },
    },
    400: {
      description: 'Invalid request.',
      content: { 'application/json': { schema: Error_400Schema.and(TemplatesUpdate_400Schema) } },
    },
    403: {
      description: 'Authorization Error.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'Resource Not Found.',
      content: { 'application/json': { schema: Error_404Schema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/readwrite'] }],
})

export const deleteV2InvoicingTemplatesTemplateIdRoute = createRoute({
  method: 'delete',
  path: '/v2/invoicing/templates/{template_id}',
  tags: ['templates'],
  summary: 'Delete template',
  description: 'Deletes a template, by ID.',
  operationId: 'templates.delete',
  request: { params: z.object({ template_id: TemplateIdParamsSchema }) },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    403: {
      description: 'Authorization Error.',
      content: {
        'application/json': { schema: Error_403Schema.and(TemplatesDelete_403Schema) },
        'multipart/mixed': { schema: Error_403Schema.and(TemplatesDelete_403Schema) },
      },
    },
    404: {
      description: 'Resource Not Found.',
      content: {
        'application/json': { schema: Error_404Schema },
        'multipart/mixed': { schema: Error_404Schema },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: {
        'application/json': { schema: Error_500Schema },
        'multipart/mixed': { schema: Error_500Schema },
      },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/invoicing/invoices/readwrite'] }],
})

export const getV2InvoicingAccountingSyncMerchantConnectionsRoute = createRoute({
  method: 'get',
  path: '/v2/invoicing/accounting-sync/merchant/connections',
  tags: ['connections'],
  summary: 'List Connections.',
  description: 'Lists connections to accounting platforms per merchant.',
  operationId: 'connections.get',
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body.',
      content: { 'application/json': { schema: ConnectionsSchema } },
    },
    400: {
      description: 'Invalid request.',
      content: { 'application/json': { schema: Error_400Schema } },
    },
    403: {
      description: 'Authorization Error.',
      content: { 'application/json': { schema: Error_403Schema } },
    },
    404: {
      description: 'Resource Not Found.',
      content: { 'application/json': { schema: Error_404Schema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [
    {
      Oauth2: [
        'https://uri.paypal.com/services/invoicing/invoices/read',
        'https://uri.paypal.com/services/invoicing/invoices/readwrite',
        'https://uri.paypal.com/services/invoicing/internal',
      ],
    },
  ],
})

export const getV2InvoicingAccountingSyncInvoicesIdConnectionsRoute = createRoute({
  method: 'get',
  path: '/v2/invoicing/accounting-sync/invoices/{id}/connections',
  tags: ['invoice-connection-details'],
  summary: 'List Connection Status for an Invoice.',
  description: 'Lists connections to accounting platforms per invoice.',
  operationId: 'invoice_connection_details.get',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body.',
      content: { 'application/json': { schema: InvoiceConnectionDetailsSchema } },
    },
    400: {
      description: 'Invalid request.',
      content: { 'application/json': { schema: Error_400Schema } },
    },
    403: {
      description: 'Authorization Error.',
      content: { 'application/json': { schema: Error_403Schema } },
    },
    404: {
      description: 'Resource Not Found.',
      content: { 'application/json': { schema: Error_404Schema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [
    {
      Oauth2: [
        'https://uri.paypal.com/services/invoicing/invoices/read',
        'https://uri.paypal.com/services/invoicing/invoices/readwrite',
        'https://uri.paypal.com/services/invoicing/internal',
      ],
    },
  ],
})
