import { createRoute, z } from '@hono/zod-openapi'

const AuthorizedPaymentMethodSchema = z
  .object({
    number_of_days: z.int32().exactOptional(),
    number_of_installments: z.int32().exactOptional(),
    type: z.enum([
      'invoice',
      'fixed_amount',
      'base_account',
      'direct_debit',
      'direct_bank_transfer',
      'b2b_invoice',
      'card',
      'slice_it_by_card',
      'pay_later_by_card',
      'pay_by_card',
      'fixed_sum_credit',
    ]),
  })
  .openapi({ required: ['type'] })
  .openapi('AuthorizedPaymentMethod')

const ErrorV2Schema = z
  .object({
    authorized_payment_method: AuthorizedPaymentMethodSchema.exactOptional(),
    correlation_id: z.string().exactOptional(),
    error_code: z.string().exactOptional(),
    error_messages: z.array(z.string()).exactOptional(),
    fraud_status: z.string().exactOptional(),
    reason: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorV2')

const AddressSchema = z
  .object({
    attention: z
      .string()
      .min(0)
      .max(99)
      .exactOptional()
      .openapi({
        description: '‘Attn.’ (if applicable). Only applicable for B2B customers.',
        example: 'Attn',
      }),
    city: z
      .string()
      .min(0)
      .max(99)
      .exactOptional()
      .openapi({ description: 'Customer’s city.', example: 'London' }),
    country: z
      .string()
      .regex(/^[A-Za-z]{2,2}$/)
      .exactOptional()
      .openapi({
        description:
          'Customer’s country. This value overrides the purchase country if they are different. Should follow the standard of ISO 3166 alpha-2. E.g. GB, US, DE, SE.',
        example: 'GB',
      }),
    email: z
      .string()
      .min(0)
      .max(99)
      .exactOptional()
      .openapi({ description: 'Customer’s email address.', example: 'test.sam@test.com' }),
    family_name: z
      .string()
      .min(0)
      .max(99)
      .exactOptional()
      .openapi({
        description:
          "Customers family name in UTF-8 encoding.\nCannot be only numbers, must be more than 1 character.\nAllowed special characters: -'’.\nMore information can be found [in this link](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-data-requirements/#details-needed-per-market)",
        example: 'Andersson',
      }),
    given_name: z
      .string()
      .min(0)
      .max(99)
      .exactOptional()
      .openapi({
        description:
          "Customers given name in UTF-8 encoding.\nCannot be only numbers, must be more than 1 character.\nAllowed special characters: -'’.\nMore information can be found [in this link](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-data-requirements/#details-needed-per-market)",
        example: 'Adam',
      }),
    organization_name: z
      .string()
      .min(0)
      .max(99)
      .exactOptional()
      .openapi({
        description: 'Organization name (if applicable). Only applicable for B2B customers.',
      }),
    phone: z
      .string()
      .min(5)
      .max(99)
      .exactOptional()
      .openapi({
        description: 'Phone number. Preferably a mobile phone number.',
        example: '+44795465131',
      }),
    postal_code: z
      .string()
      .min(0)
      .max(10)
      .exactOptional()
      .openapi({
        description:
          'Customer’s postal code. Validation according to Universal Postal Union addressing systems.\nE.g. 12345, W1G OPW.',
        example: 'W1G 0PW',
      }),
    region: z
      .string()
      .min(0)
      .max(99)
      .exactOptional()
      .openapi({
        description:
          'Customer’s region or state - Mandatory for US and AU market. Validations according to ISO 3166-2 format, e.g. OH, NJ, etc.',
        example: 'OH',
      }),
    street_address: z
      .string()
      .min(0)
      .max(99)
      .exactOptional()
      .openapi({
        description:
          'Customer’s street address. Regional formatting is required, as follows:\nUK/US/FR: 33 Cavendish Square\nRest of EU: De Ruijterkade 7',
        example: '33 Cavendish Square',
      }),
    street_address2: z
      .string()
      .min(0)
      .max(99)
      .exactOptional()
      .openapi({
        description: 'Customer’s street address. Second Line. ',
        example: 'Floor 22 / Flat 2',
      }),
    title: z
      .string()
      .min(0)
      .max(20)
      .exactOptional()
      .openapi({
        description:
          'Customer’s Title. Allowed values per country:\nUK - "Mr", "Ms"\nDE - "Herr", "Frau"\nAT: "Herr, "Frau"\nCH: de-CH: "Herr, "Frau" it-CH: "Sig.", "Sig.ra" fr-CH: "M", "Mme" \nBE: "Dhr.", "Mevr."\nNL: "Dhr.", "Mevr."',
        example: 'Mr.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Address')

const AssetUrlsSchema = z
  .object({
    descriptive: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL of the descriptive asset. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated.',
        example: 'https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg',
      }),
    standard: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL of the standard asset. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated.',
        example: 'https://x.klarnacdn.net/payment-method/assets/badges/generic/klarna.svg',
      }),
  })
  .openapi({ required: [] })
  .openapi('AssetUrls')

const AttachmentSchema = z
  .object({
    body: z
      .string()
      .openapi({
        description:
          'The content of the extra merchant data should be presented as a string inside this property. The body should be an object containing any of the keys and sub-objects described below serialized to JSON. More information on that object can be found [here](https://developers.klarna.com/api/#attachment-schema).',
        example:
          '{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}',
      }),
    content_type: z
      .string()
      .openapi({
        description:
          'The content type of the body. It is usually represented as "application/vnd.klarna.internal.emd-v2+json"',
        example: 'application/vnd.klarna.internal.emd-v2+json',
      }),
  })
  .openapi({ required: ['body', 'content_type'] })
  .openapi('Attachment')

const CustomerSchema = z
  .object({
    date_of_birth: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Customer’s date of birth. The format is ‘yyyy-mm-dd’',
        example: '1978-12-31',
      }),
    gender: z
      .string()
      .exactOptional()
      .openapi({ description: 'Customer’s gender - ‘male’ or ‘female’', example: 'male' }),
    last_four_ssn: z
      .string()
      .regex(/^([0-9]{4}|[0-9]{9})$/)
      .exactOptional()
      .openapi({
        description:
          "Last four digits of the customer's social security number. This value is available for US customers.",
      }),
    national_identification_number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The customer's national identification number. This value is available for EU customers utilizing national identification numbers.",
      }),
    organization_entity_type: z
      .enum([
        'LIMITED_COMPANY',
        'PUBLIC_LIMITED_COMPANY',
        'ENTREPRENEURIAL_COMPANY',
        'LIMITED_PARTNERSHIP_LIMITED_COMPANY',
        'LIMITED_PARTNERSHIP',
        'GENERAL_PARTNERSHIP',
        'REGISTERED_SOLE_TRADER',
        'SOLE_TRADER',
        'CIVIL_LAW_PARTNERSHIP',
        'PUBLIC_INSTITUTION',
        'OTHER',
      ])
      .exactOptional()
      .openapi({ description: 'Organization entity type. Only applicable for B2B customers.' }),
    organization_registration_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Organization registration id. Only applicable for B2B customers.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Customer’s Title. Allowed values per country:\nUK - "Mr", "Ms"\nDE - "Herr", "Frau"\nAT: "Herr, "Frau"\nCH: de-CH: "Herr, "Frau" it-CH: "Sig.", "Sig.ra" fr-CH: "M", "Mme" \nBE: "Dhr.", "Mevr."\nNL: "Dhr.", "Mevr."',
        example: 'Mr.',
      }),
    type: z
      .string()
      .regex(/^(person|organization)$/)
      .exactOptional()
      .openapi({
        description:
          'Type of customer in the session. If nothing is added, a B2C session will be the default. If it is a b2b-session, you should enter organization to trigger a B2B session.',
        example: 'organization',
      }),
    vat_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'VAT ID. Only applicable for B2B customers.' }),
  })
  .openapi({ required: [] })
  .openapi('Customer')

const MerchantUrlsSchema = z
  .object({
    authorization: z
      .string()
      .min(0)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'URL for receiving the authorization token when payment is completed. Used for Authorization Callback.',
        example: 'https://www.example-url.com/authorization',
      }),
    confirmation: z
      .string()
      .min(0)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'URL of the merchant confirmation page. The consumer will be redirected back to the confirmation page if the consumer is sent to the redirect URL after placing the order. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL(max 2000 characters).',
        example: 'https://www.example-url.com/confirmation',
      }),
    notification: z
      .string()
      .min(0)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'URL for notifications on pending orders. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL (max 2000 characters).',
        example: 'https://www.example-url.com/notification',
      }),
    push: z
      .string()
      .min(0)
      .max(2000)
      .exactOptional()
      .openapi({
        description:
          'URL that will be requested when an order is completed. Should be different than checkout and confirmation URLs. Insert {session.id} and/or {order.id} as placeholder to connect either of those IDs to the URL (max 2000 characters).',
        example: 'https://www.example-url.com/push',
      }),
  })
  .openapi({ required: [] })
  .openapi('MerchantUrls')

const ProductIdentifiersSchema = z
  .object({
    brand: z
      .string()
      .min(0)
      .max(70)
      .exactOptional()
      .openapi({
        description:
          "The product's brand name as generally recognized by consumers. If no brand is available for a product, do not supply any value.",
        example: 'shoe-brand',
      }),
    category_path: z
      .string()
      .min(0)
      .max(750)
      .exactOptional()
      .openapi({
        description:
          "The product's category path as used in the merchant's webshop. Include the full and most detailed category and separate the segments with ' > '",
        example: 'Shoes > Running',
      }),
    color: z
      .string()
      .min(0)
      .max(64)
      .exactOptional()
      .openapi({
        description: 'Color to be shown to the end customer (max 64 characters).',
        example: 'white',
      }),
    global_trade_item_number: z
      .string()
      .min(0)
      .max(50)
      .exactOptional()
      .openapi({
        description:
          "The product's Global Trade Item Number (GTIN). Common types of GTIN are EAN, ISBN or UPC. Exclude dashes and spaces, where possible",
        example: '4912345678904',
      }),
    manufacturer_part_number: z
      .string()
      .min(0)
      .max(70)
      .exactOptional()
      .openapi({
        description:
          "The product's Manufacturer Part Number (MPN), which - together with the brand - uniquely identifies a product. Only submit MPNs assigned by a manufacturer and use the most specific MPN possible",
        example: 'AD6654412-334.22',
      }),
    size: z
      .string()
      .min(0)
      .max(64)
      .exactOptional()
      .openapi({
        description: 'Size to be shown to the end customer (max 64 characters).',
        example: 'small',
      }),
  })
  .openapi({ required: [] })
  .openapi('ProductIdentifiers')

const SubscriptionSchema = z
  .object({
    interval: z
      .enum(['DAY', 'WEEK', 'MONTH', 'YEAR'])
      .openapi({ description: 'The cadence unit for this.' }),
    interval_count: z.int().min(1).openapi({ description: 'The number of intervals' }),
    name: z
      .string()
      .min(1)
      .max(255)
      .openapi({ description: 'The name of the subscription product' }),
  })
  .openapi({ required: ['name', 'interval', 'interval_count'] })
  .openapi('Subscription')

const OrderLineSchema = z
  .object({
    image_url: z
      .string()
      .min(0)
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          "URL to an image that can be later embedded in communications between Klarna and the customer. (max 1024 characters).\n A minimum of 250x250 px resolution is recommended for the image to look good in the Klarna app, and below 50x50 px won't even show. We recommend using a good sized image (650x650 px or more), however the file size must not exceed 12MB.",
        example: 'https://www.exampleobjects.com/logo.png',
      }),
    merchant_data: z
      .string()
      .min(0)
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          "Used for storing merchant's internal order number or other reference. Pass through field. (max 1024 characters)",
        example:
          '{"customer_account_info":[{"unique_account_identifier":"test@gmail.com","account_registration_date":"2017-02-13T10:49:20Z","account_last_modified":"2019-03-13T11:45:27Z"}]}',
      }),
    name: z
      .string()
      .min(1)
      .max(255)
      .openapi({
        description: 'Descriptive name of the order line item.',
        example: 'Running shoe',
      }),
    product_identifiers: ProductIdentifiersSchema.exactOptional(),
    product_url: z
      .string()
      .min(0)
      .max(1024)
      .exactOptional()
      .openapi({
        description:
          'URL to the product in the merchant’s webshop that can be later used in communications between Klarna and the customer. (max 1024 characters)',
        example: 'https://.../AD6654412.html',
      }),
    quantity: z
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
        description: 'Quantity of the order line item. Must be a non-negative number.',
        example: 1,
      }),
    quantity_unit: z
      .string()
      .min(1)
      .max(8)
      .exactOptional()
      .openapi({
        description:
          'Unit used to describe the quantity, e.g. kg, pcs, etc. If defined the value has to be 1-8 characters.',
        example: 'pcs',
      }),
    reference: z
      .string()
      .min(0)
      .max(256)
      .exactOptional()
      .openapi({
        description: 'Client facing article number, SKU or similar. Max length is 256 characters.',
        example: 'AD6654412',
      }),
    subscription: SubscriptionSchema.exactOptional(),
    tax_rate: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n).max(10000n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        maximum: 10000,
        description:
          'Tax rate of the order line. Non-negative value. The percentage value is represented with two implicit decimals. I.e 1900 = 19%.',
        example: 1900,
      }),
    total_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(100000000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 100000000,
        description:
          'Total amount of the order line. Must be defined as minor units. Includes tax and discount. Eg: 2500=25 euros\nValue = (quantity x unit_price) - total_discount_amount. \n(max value: 100000000)',
        example: 2500,
      }),
    total_discount_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description: 'Non-negative minor units. Includes tax. Eg: 500=5 euros',
        example: 500,
      }),
    total_tax_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Total tax amount of the order line. Must be within ±1 of total_amount - total_amount 10000 / (10000 + tax_rate). Negative when type is discount.',
        example: 475,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of the order line item. The possible values are:\n\nphysical\ndiscount\nshipping_fee\nsales_tax\ndigital\ngift_card\nstore_credit\nsurcharge',
        example: 'physical',
      }),
    unit_price: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().max(100000000n),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        maximum: 100000000,
        description:
          'Price for a single unit of the order line. Must be defined as minor units. Includes tax, excludes discount. (max value: 100000000)',
        example: 2500,
      }),
  })
  .openapi({ required: ['name', 'quantity', 'total_amount', 'unit_price'] })
  .openapi('OrderLine')

const PaymentMethodCategorySchema = z
  .object({
    asset_urls: AssetUrlsSchema.exactOptional(),
    identifier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ID of the payment method category to be used while loading the widget later.\nThe possible values are:<ul><li>klarna</li><li>pay_later</li><li>pay_now</li><li>pay_over_time</li><li>direct_bank_transfer</li><li>direct_debit</li></ul>',
        example: 'klarna',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the payment method category. These names are dynamic depending on what payment method is in the category. Using this dynamic asset will make sure that any copy update of Klarna will automatically be propagated, or any updates of included payment methods by you.',
        example: 'Pay with Klarna',
      }),
  })
  .openapi({ required: [] })
  .openapi('PaymentMethodCategory')

const CreateOrderRequestSchema = z
  .object({
    authorization_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Authorization token.', readOnly: true }),
    auto_capture: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Allow merchant to trigger auto capturing.' }),
    billing_address: AddressSchema.exactOptional(),
    custom_payment_method_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. ',
      }),
    customer: CustomerSchema.exactOptional(),
    locale: z
      .string()
      .regex(/^[A-Za-z]{2,2}(?:-[A-Za-z]{2,2})*$/)
      .exactOptional()
      .openapi({
        description:
          'Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.\nThe following values are applicable:\n\nAT: "de-AT", "de-DE", "en-DE"\nBE: "be-BE", "nl-BE", "fr-BE", "en-BE"\nCH: "it-CH", "de-CH", "fr-CH", "en-CH"\nDE: "de-DE", "de-AT", "en-DE"\nDK: "da-DK", "en-DK"\nES: "es-ES", "ca-ES", "en-ES"\nFI: "fi-FI", "sv-FI", "en-FI"\nGB: "en-GB"\nIT: "it-IT", "en-IT"\nNL: "nl-NL", "en-NL"\nNO: "nb-NO", "en-NO"\nPL: "pl-PL", "en-PL"\nSE: "sv-SE", "en-SE"\nUS: "en-US".',
        example: 'en-GB',
      }),
    merchant_data: z
      .string()
      .min(0)
      .max(6000)
      .exactOptional()
      .openapi({
        description:
          'Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)',
        example:
          '{"order_specific":[{"substore":"Women\'s Fashion","product_name":"Women Sweatshirt"}]}',
      }),
    merchant_reference1: z
      .string()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description: "Used for storing merchant's internal order number or other reference.",
        example: 'ON4711',
      }),
    merchant_reference2: z
      .string()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          "Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).",
        example: 'hdt53h-zdgg6-hdaff2',
      }),
    merchant_urls: MerchantUrlsSchema.exactOptional(),
    order_amount: z
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
        description:
          'Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.',
        example: 2500,
      }),
    order_lines: z
      .array(OrderLineSchema)
      .min(1)
      .max(1000)
      .openapi({
        description:
          'The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.',
      }),
    order_tax_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          'Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.',
        example: 475,
      }),
    payment_method_categories: z
      .array(PaymentMethodCategorySchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Available payment method categories', readOnly: true }),
    purchase_country: z
      .string()
      .regex(/^[A-Za-z]{2,2}$/)
      .openapi({
        description:
          'The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.',
        example: 'GB',
      }),
    purchase_currency: z
      .string()
      .regex(/^[A-Za-z]{3,3}$/)
      .openapi({
        description:
          'The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.',
        example: 'GBP',
      }),
    shipping_address: AddressSchema.exactOptional(),
    status: z
      .enum(['complete', 'incomplete'])
      .exactOptional()
      .openapi({
        description:
          "The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed.",
        example: 'complete',
        readOnly: true,
      }),
  })
  .openapi({ required: ['order_amount', 'order_lines', 'purchase_country', 'purchase_currency'] })
  .openapi('CreateOrderRequest')

const CustomerReadSchema = z
  .object({
    date_of_birth: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Customer’s date of birth. The format is ‘yyyy-mm-dd’',
        example: '1978-12-31',
      }),
    gender: z
      .string()
      .exactOptional()
      .openapi({ description: 'Customer’s gender - ‘male’ or ‘female’', example: 'male' }),
    organization_entity_type: z
      .enum([
        'LIMITED_COMPANY',
        'PUBLIC_LIMITED_COMPANY',
        'ENTREPRENEURIAL_COMPANY',
        'LIMITED_PARTNERSHIP_LIMITED_COMPANY',
        'LIMITED_PARTNERSHIP',
        'GENERAL_PARTNERSHIP',
        'REGISTERED_SOLE_TRADER',
        'SOLE_TRADER',
        'CIVIL_LAW_PARTNERSHIP',
        'PUBLIC_INSTITUTION',
        'OTHER',
      ])
      .exactOptional()
      .openapi({ description: 'Organization entity type. Only applicable for B2B customers.' }),
    organization_registration_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Organization registration id. Only applicable for B2B customers.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Customer’s Title. Allowed values per country:\nUK - "Mr", "Ms"\nDE - "Herr", "Frau"\nAT: "Herr, "Frau"\nCH: de-CH: "Herr, "Frau" it-CH: "Sig.", "Sig.ra" fr-CH: "M", "Mme" \nBE: "Dhr.", "Mevr."\nNL: "Dhr.", "Mevr."',
        example: 'Mr.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type of customer in the session. If nothing is added, a B2C session will be the default. If it is a b2b-session, you should enter organization to trigger a B2B session.',
        example: 'organization',
      }),
    vat_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'VAT ID. Only applicable for B2B customers.' }),
  })
  .openapi({ required: [] })
  .openapi('CustomerRead')

const CustomerReadCreateTokenSchema = z
  .object({
    date_of_birth: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Customer’s date of birth. The format is ‘yyyy-mm-dd’',
        example: '1978-12-31',
      }),
    gender: z
      .string()
      .exactOptional()
      .openapi({ description: 'Customer’s gender - ‘male’ or ‘female’', example: 'male' }),
  })
  .openapi({ required: [] })
  .openapi('CustomerReadCreateToken')

const CustomerTokenCreationRequestSchema = z
  .object({
    billing_address: AddressSchema.exactOptional(),
    customer: CustomerSchema.exactOptional(),
    description: z
      .string()
      .max(255)
      .openapi({ description: 'Description of the purpose of the token.' }),
    intended_use: z.literal('SUBSCRIPTION').openapi({ description: 'Intended use for the token.' }),
    locale: z
      .string()
      .regex(/^[A-Za-z]{2,2}(?:-[A-Za-z]{2,2})*$/)
      .openapi({ description: "RFC 1766 customer's locale.", example: 'en-GB' }),
    purchase_country: z
      .string()
      .regex(/^[A-Za-z]{2,2}$/)
      .openapi({ description: 'ISO 3166 alpha-2 purchase country.', example: 'GB' }),
    purchase_currency: z
      .string()
      .regex(/^[A-Za-z]{3,3}$/)
      .openapi({ description: 'ISO 4217 purchase currency.', example: 'GBP' }),
  })
  .openapi({
    required: ['description', 'intended_use', 'locale', 'purchase_country', 'purchase_currency'],
  })
  .openapi('CustomerTokenCreationRequest')

const CustomerTokenCreationResponseSchema = z
  .object({
    billing_address: AddressSchema.exactOptional(),
    customer: CustomerReadCreateTokenSchema.exactOptional(),
    payment_method_reference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Used to connect customers with payment method when it is present.',
        example: '0b1d9815-165e-42e2-8867-35bc03789e00',
      }),
    redirect_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL to redirect the customer to after placing the order. This is a Klarna URL where Klarna will place a cookie in the customer’s browser (if redirected) and redirect the customer back to the confirmation URL provided by the merchant. This is not a mandatory step but a recommended one to improve the returning customer’s experience.',
        example:
          'https://credit.klarna.com/v1/sessions/0b1d9815-165e-42e2-8867-35bc03789e00/redirect',
      }),
    token_id: z
      .string()
      .openapi({
        description:
          'Generated customer token. This token will be used to create a new order for the subscription using the Create a New order using token API.',
        example: '0b1d9815-165e-42e2-8867-35bc03789e00',
      }),
  })
  .openapi({ required: ['token_id'] })
  .openapi('CustomerTokenCreationResponse')

const MerchantSessionSchema = z
  .object({
    client_token: z
      .string()
      .min(0)
      .max(4096)
      .openapi({
        description:
          'Client token to be passed to the JS client while initializing the JS SDK in the next step.',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJzZXNzaW9uX2lkIiA6ICIw',
      }),
    payment_method_categories: z
      .array(PaymentMethodCategorySchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Available payment method categories for this particular session' }),
    session_id: z
      .string()
      .min(0)
      .max(255)
      .openapi({
        description:
          'ID of the created session. Please use this ID to share with Klarna for identifying any issues during integration.',
        example: '0b1d9815-165e-42e2-8867-35bc03789e00',
      }),
  })
  .openapi({ required: ['client_token', 'session_id'] })
  .openapi('MerchantSession')

const OptionsSchema = z
  .object({
    color_border: z
      .string()
      .regex(/^#[A-Fa-f0-9]{6}$/)
      .exactOptional()
      .openapi({
        description:
          'Color for the border of elements within the iFrame. Value should be a CSS hex color, e.g. "#FF9900"',
        example: '#FF9900',
      }),
    color_border_selected: z
      .string()
      .regex(/^#[A-Fa-f0-9]{6}$/)
      .exactOptional()
      .openapi({
        description:
          'Color for the border of elements within the iFrame when selected by the customer. Value should be a CSS hex color, e.g. "#FF9900"',
        example: '#FF9900',
      }),
    color_details: z
      .string()
      .regex(/^#[A-Fa-f0-9]{6}$/)
      .exactOptional()
      .openapi({
        description:
          'Color for the bullet points within the iFrame. Value should be a CSS hex color, e.g. "#FF9900"',
        example: '#FF9900',
      }),
    color_text: z
      .string()
      .regex(/^#[A-Fa-f0-9]{6}$/)
      .exactOptional()
      .openapi({
        description:
          'Color for the texts within the iFrame. Value should be a CSS hex color, e.g. "#FF9900"',
        example: '#FF9900',
      }),
    radius_border: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Radius for the border of elements within the iFrame.',
        example: '5px',
      }),
  })
  .openapi({ required: [] })
  .openapi('Options')

const OrderSchema = z
  .object({
    authorized_payment_method: AuthorizedPaymentMethodSchema.exactOptional(),
    fraud_status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fraud status for the order. Either ACCEPTED or PENDING. If ACCEPTED, the order could be captured. If PENDING, please wait till you receive the notification from Klarna in the notification URL that the order has been approved. You can find additional information here.',
      }),
    order_id: z
      .string()
      .openapi({
        description:
          'Unique order ID of the transaction. This ID will be used for all order management processes.',
      }),
    redirect_url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL to redirect the customer to after placing the order. This is a Klarna URL to which the merchant should redirect the customer to. Klarna will place a cookie in the customer’s browser (if redirected) and redirect the customer back to the confirmation URL provided by the merchant. This is not a mandatory step but a recommended one to improve the returning customer’s experience. It is a spontaneous step and does not harm the customer’s experience.',
        example:
          'https://credit.klarna.com/v1/sessions/0b1d9815-165e-42e2-8867-35bc03789e00/redirect',
      }),
  })
  .openapi({ required: ['order_id'] })
  .openapi('Order')

const SessionSchema = z
  .object({
    acquiring_channel: z
      .enum(['ECOMMERCE', 'IN_STORE', 'TELESALES'])
      .exactOptional()
      .openapi({
        description:
          'The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement.',
        example: 'ECOMMERCE',
      }),
    attachment: AttachmentSchema.exactOptional(),
    authorization_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Authorization token.', readOnly: true }),
    billing_address: AddressSchema.exactOptional(),
    client_token: z
      .string()
      .min(0)
      .max(4096)
      .exactOptional()
      .openapi({
        description: 'Token to be passed to the JS client',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJzZXNzaW9uX2lkIiA6ICIw',
        readOnly: true,
      }),
    custom_payment_method_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. ',
      }),
    customer: CustomerSchema.exactOptional(),
    design: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter.',
      }),
    expires_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Session expiration date',
        example: '2038-01-19T03:14:07.000Z',
        readOnly: true,
      }),
    intent: z
      .enum(['buy', 'tokenize', 'buy_and_tokenize'])
      .exactOptional()
      .openapi({
        description:
          'Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session.',
        example: 'buy',
      }),
    locale: z
      .string()
      .regex(/^[A-Za-z]{2,2}(?:-[A-Za-z]{2,2})*$/)
      .exactOptional()
      .openapi({
        description:
          'Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.\nThe following values are applicable:\n\nAT: "de-AT", "de-DE", "en-DE"\nBE: "be-BE", "nl-BE", "fr-BE", "en-BE"\nCH: "it-CH", "de-CH", "fr-CH", "en-CH"\nDE: "de-DE", "de-AT", "en-DE"\nDK: "da-DK", "en-DK"\nES: "es-ES", "ca-ES", "en-ES"\nFI: "fi-FI", "sv-FI", "en-FI"\nGB: "en-GB"\nIT: "it-IT", "en-IT"\nNL: "nl-NL", "en-NL"\nNO: "nb-NO", "en-NO"\nPL: "pl-PL", "en-PL"\nSE: "sv-SE", "en-SE"\nUS: "en-US".',
        example: 'en-GB',
      }),
    merchant_data: z
      .string()
      .min(0)
      .max(6000)
      .exactOptional()
      .openapi({
        description:
          'Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)',
        example:
          '{"order_specific":[{"substore":"Women\'s Fashion","product_name":"Women Sweatshirt"}]}',
      }),
    merchant_reference1: z
      .string()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description: "Used for storing merchant's internal order number or other reference.",
        example: 'ON4711',
      }),
    merchant_reference2: z
      .string()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          "Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).",
        example: 'hdt53h-zdgg6-hdaff2',
      }),
    merchant_urls: MerchantUrlsSchema.exactOptional(),
    options: OptionsSchema.exactOptional(),
    order_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          'Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.',
        example: 2500,
      }),
    order_lines: z
      .array(OrderLineSchema)
      .min(1)
      .max(1000)
      .exactOptional()
      .openapi({
        description:
          'The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.',
      }),
    order_tax_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          'Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.',
        example: 475,
      }),
    payment_method_categories: z
      .array(PaymentMethodCategorySchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Available payment method categories', readOnly: true }),
    purchase_country: z
      .string()
      .regex(/^[A-Za-z]{2,2}$/)
      .exactOptional()
      .openapi({
        description:
          'The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.',
        example: 'GB',
      }),
    purchase_currency: z
      .string()
      .regex(/^[A-Za-z]{3,3}$/)
      .exactOptional()
      .openapi({
        description:
          'The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.',
        example: 'GBP',
      }),
    shipping_address: AddressSchema.exactOptional(),
    status: z
      .enum(['complete', 'incomplete'])
      .exactOptional()
      .openapi({
        description:
          "The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed.",
        example: 'complete',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('Session')

const SessionCreateSchema = z
  .object({
    acquiring_channel: z
      .enum(['ECOMMERCE', 'IN_STORE', 'TELESALES'])
      .exactOptional()
      .openapi({
        description:
          'The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement.',
        example: 'ECOMMERCE',
      }),
    attachment: AttachmentSchema.exactOptional(),
    authorization_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Authorization token.', readOnly: true }),
    billing_address: AddressSchema.exactOptional(),
    client_token: z
      .string()
      .min(0)
      .max(4096)
      .exactOptional()
      .openapi({
        description: 'Token to be passed to the JS client',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJzZXNzaW9uX2lkIiA6ICIw',
        readOnly: true,
      }),
    custom_payment_method_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. ',
      }),
    customer: CustomerSchema.exactOptional(),
    design: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter.',
      }),
    expires_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Session expiration date',
        example: '2038-01-19T03:14:07.000Z',
        readOnly: true,
      }),
    intent: z
      .enum(['buy', 'tokenize', 'buy_and_tokenize'])
      .exactOptional()
      .openapi({
        description:
          'Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session.',
        example: 'buy',
      }),
    locale: z
      .string()
      .regex(/^[A-Za-z]{2,2}(?:-[A-Za-z]{2,2})*$/)
      .exactOptional()
      .openapi({
        description:
          'Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.\nThe following values are applicable:\n\nAT: "de-AT", "de-DE", "en-DE"\nBE: "be-BE", "nl-BE", "fr-BE", "en-BE"\nCH: "it-CH", "de-CH", "fr-CH", "en-CH"\nDE: "de-DE", "de-AT", "en-DE"\nDK: "da-DK", "en-DK"\nES: "es-ES", "ca-ES", "en-ES"\nFI: "fi-FI", "sv-FI", "en-FI"\nGB: "en-GB"\nIT: "it-IT", "en-IT"\nNL: "nl-NL", "en-NL"\nNO: "nb-NO", "en-NO"\nPL: "pl-PL", "en-PL"\nSE: "sv-SE", "en-SE"\nUS: "en-US". Default value is "en-US".',
        example: 'en-US',
      }),
    merchant_data: z
      .string()
      .min(0)
      .max(6000)
      .exactOptional()
      .openapi({
        description:
          'Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)',
        example:
          '{"order_specific":[{"substore":"Women\'s Fashion","product_name":"Women Sweatshirt"}]}',
      }),
    merchant_reference1: z
      .string()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description: "Used for storing merchant's internal order number or other reference.",
        example: 'ON4711',
      }),
    merchant_reference2: z
      .string()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          "Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).",
        example: 'hdt53h-zdgg6-hdaff2',
      }),
    merchant_urls: MerchantUrlsSchema.exactOptional(),
    options: OptionsSchema.exactOptional(),
    order_amount: z
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
        description:
          'Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.',
        example: 2500,
      }),
    order_lines: z
      .array(OrderLineSchema)
      .min(1)
      .max(1000)
      .openapi({
        description:
          'The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.',
      }),
    order_tax_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          'Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.',
        example: 475,
      }),
    payment_method_categories: z
      .array(PaymentMethodCategorySchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Available payment method categories', readOnly: true }),
    purchase_country: z
      .string()
      .regex(/^[A-Za-z]{2,2}$/)
      .openapi({
        description:
          'The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.',
        example: 'GB',
      }),
    purchase_currency: z
      .string()
      .regex(/^[A-Za-z]{3,3}$/)
      .openapi({
        description:
          'The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.',
        example: 'GBP',
      }),
    shipping_address: AddressSchema.exactOptional(),
    status: z
      .enum(['complete', 'incomplete'])
      .exactOptional()
      .openapi({
        description:
          "The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed.",
        example: 'complete',
        readOnly: true,
      }),
  })
  .openapi({ required: ['order_amount', 'order_lines', 'purchase_country', 'purchase_currency'] })
  .openapi('SessionCreate')

const SessionReadSchema = z
  .object({
    acquiring_channel: z
      .enum(['ECOMMERCE', 'IN_STORE', 'TELESALES'])
      .exactOptional()
      .openapi({
        description:
          'The acquiring channel in which the session takes place. Ecommerce is default unless specified. Any other values should be defined in the agreement.',
        example: 'ECOMMERCE',
      }),
    attachment: AttachmentSchema.exactOptional(),
    authorization_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Authorization token.', readOnly: true }),
    billing_address: AddressSchema.exactOptional(),
    client_token: z
      .string()
      .min(0)
      .max(4096)
      .exactOptional()
      .openapi({
        description: 'Token to be passed to the JS client',
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ewogICJzZXNzaW9uX2lkIiA6ICIw',
        readOnly: true,
      }),
    custom_payment_method_ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Promo codes - The array could be used to define which of the configured payment options within a payment category (pay_later, pay_over_time, etc.) should be shown for this purchase. Discuss with the delivery manager to know about the promo codes that will be configured for your account. The feature could also be used to provide promotional offers to specific customers (eg: 0% financing). Please be informed that the usage of this feature can have commercial implications. ',
      }),
    customer: CustomerReadSchema.exactOptional(),
    design: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Design package to use in the session. This can only by used if a custom design has been implemented for Klarna Payments and agreed upon in the agreement. It might have a financial impact. Delivery manager will provide the value for the parameter.',
      }),
    expires_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Session expiration date',
        example: '2038-01-19T03:14:07.000Z',
        readOnly: true,
      }),
    intent: z
      .enum(['buy', 'tokenize', 'buy_and_tokenize'])
      .exactOptional()
      .openapi({
        description:
          'Intent for the session. The field is designed to let partners inform Klarna of the purpose of the customer’s session.',
        example: 'buy',
      }),
    locale: z
      .string()
      .regex(/^[A-Za-z]{2,2}(?:-[A-Za-z]{2,2})*$/)
      .exactOptional()
      .openapi({
        description:
          'Used to define the language and region of the customer. The locale follows the format of (RFC 1766)[https://datatracker.ietf.org/doc/rfc1766/], meaning its value consists of language-country.\nThe following values are applicable:\n\nAT: "de-AT", "de-DE", "en-DE"\nBE: "be-BE", "nl-BE", "fr-BE", "en-BE"\nCH: "it-CH", "de-CH", "fr-CH", "en-CH"\nDE: "de-DE", "de-AT", "en-DE"\nDK: "da-DK", "en-DK"\nES: "es-ES", "ca-ES", "en-ES"\nFI: "fi-FI", "sv-FI", "en-FI"\nGB: "en-GB"\nIT: "it-IT", "en-IT"\nNL: "nl-NL", "en-NL"\nNO: "nb-NO", "en-NO"\nPL: "pl-PL", "en-PL"\nSE: "sv-SE", "en-SE"\nUS: "en-US".',
        example: 'en-GB',
      }),
    merchant_data: z
      .string()
      .min(0)
      .max(6000)
      .exactOptional()
      .openapi({
        description:
          'Pass through field to send any information about the order to be used later for reference while retrieving the order details (max 6000 characters)',
        example:
          '{"order_specific":[{"substore":"Women\'s Fashion","product_name":"Women Sweatshirt"}]}',
      }),
    merchant_reference1: z
      .string()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description: "Used for storing merchant's internal order number or other reference.",
        example: 'ON4711',
      }),
    merchant_reference2: z
      .string()
      .min(0)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          "Used for storing merchant's internal order number or other reference. The value is available in the settlement files. (max 255 characters).",
        example: 'hdt53h-zdgg6-hdaff2',
      }),
    merchant_urls: MerchantUrlsSchema.exactOptional(),
    options: OptionsSchema.exactOptional(),
    order_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          'Total amount of the order including tax and any available discounts. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.',
        example: 2500,
      }),
    order_lines: z
      .array(OrderLineSchema)
      .min(1)
      .max(1000)
      .exactOptional()
      .openapi({
        description:
          'The array containing list of line items that are part of this order. Maximum of 1000 line items could be processed in a single order.',
      }),
    order_tax_amount: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(0n),
      )
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        minimum: 0,
        description:
          'Total tax amount of the order. The value should be in non-negative minor units. Eg: 25 Euros should be 2500.',
        example: 475,
      }),
    payment_method_categories: z
      .array(PaymentMethodCategorySchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .exactOptional()
      .openapi({ description: 'Available payment method categories', readOnly: true }),
    purchase_country: z
      .string()
      .regex(/^[A-Za-z]{2,2}$/)
      .exactOptional()
      .openapi({
        description:
          'The purchase country of the customer. The billing country always overrides purchase country if the values are different. Formatted according to ISO 3166 alpha-2 standard, e.g. GB, SE, DE, US, etc.',
        example: 'GB',
      }),
    purchase_currency: z
      .string()
      .regex(/^[A-Za-z]{3,3}$/)
      .exactOptional()
      .openapi({
        description:
          'The purchase currency of the order. Formatted according to ISO 4217 standard, e.g. USD, EUR, SEK, GBP, etc.',
        example: 'GBP',
      }),
    shipping_address: AddressSchema.exactOptional(),
    status: z
      .enum(['complete', 'incomplete'])
      .exactOptional()
      .openapi({
        description:
          "The current status of the session. Possible values: 'complete', 'incomplete' where 'complete' is set when the order has been placed.",
        example: 'complete',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('SessionRead')

export const deletePaymentsV1AuthorizationsAuthorizationTokenRoute = createRoute({
  method: 'delete',
  path: '/payments/v1/authorizations/{authorizationToken}',
  tags: ['orders'],
  summary: 'Cancel an existing authorization',
  description:
    'Use this API call to cancel/release an authorization. If the `authorization_token` received during a Klarna Payments won’t be used to place an order immediately you could release the authorization.\nRead more on **[Cancel an existing authorization](https://docs.klarna.com/klarna-payments/other-actions/cancel-an-authorization/)**.',
  operationId: 'cancelAuthorization',
  request: {
    params: z.object({
      authorizationToken: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'authorizationToken',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The authorization was cancelled successfully.' },
    403: { description: 'You were not authorized to execute this operation.' },
    404: { description: 'The authorization does not exist.' },
  },
})

export const postPaymentsV1AuthorizationsAuthorizationTokenCustomerTokenRoute = createRoute({
  method: 'post',
  path: '/payments/v1/authorizations/{authorizationToken}/customer-token',
  tags: ['orders'],
  summary: 'Generate a consumer token',
  description:
    'Use this API call to create a Klarna Customer Token.<br/>After having obtained an `authorization_token` for a successful authorization, this can be used to create a purchase token instead of placing the order. Creating a Klarna Customer Token results in Klarna storing customer and payment method details.\nRead more on **[Generate a consumer token](https://docs.klarna.com/klarna-payments/in-depth-knowledge/customer-token/)**.',
  operationId: 'purchaseToken',
  request: {
    params: z.object({
      authorizationToken: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'authorizationToken',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CustomerTokenCreationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Token was successfully created.',
      content: { 'application/json': { schema: CustomerTokenCreationResponseSchema } },
    },
    400: {
      description:
        'We were unable to create a customer token with the provided data. Some field constraint was violated.',
      content: { 'application/json': { schema: ErrorV2Schema } },
    },
    403: { description: 'You were not authorized to execute this operation.' },
    404: { description: 'The authorization does not exist.' },
    409: {
      description: 'The data in the request does not match the session for the authorization.',
    },
  },
})

export const postPaymentsV1AuthorizationsAuthorizationTokenOrderRoute = createRoute({
  method: 'post',
  path: '/payments/v1/authorizations/{authorizationToken}/order',
  tags: ['orders'],
  summary: 'Create a new order',
  description:
    "Use this API call to create a new order. Placing an order towards Klarna means that the Klarna Payments session will be closed and that an order will be created in Klarna's system.<br/>When you have received the `authorization_token` for a successful authorization you can place the order. Among the other order details in this request, you include a URL to the confirmation page for the customer.<br/>When the Order has been successfully placed at Klarna, you need to handle it either through the Merchant Portal or using [Klarna’s Order Management API](#order-management-api).\nRead more on **[Create a new order](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-3-create-an-order/)**.",
  operationId: 'createOrder',
  request: {
    params: z.object({
      authorizationToken: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'authorizationToken',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CreateOrderRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Order was successfully created.',
      content: { 'application/json': { schema: OrderSchema } },
    },
    400: {
      description:
        'We were unable to create an order with the provided data. Some field constraint was violated.',
    },
    403: { description: 'You were not authorized to execute this operation.' },
    404: { description: 'The authorization does not exist.' },
    409: {
      description: 'The data in the request does not match the session for the authorization.',
    },
  },
})

export const postPaymentsV1SessionsRoute = createRoute({
  method: 'post',
  path: '/payments/v1/sessions',
  tags: ['sessions'],
  summary: 'Create a new payment session',
  description:
    'Use this API call to create a Klarna Payments session.<br/>When a session is created you will receive the available `payment_method_categories` for the session, a `session_id` and a `client_token`. The `session_id` can be used to read or update the session using the REST API. The `client_token` should be passed to the browser.\nRead more on **[Create a new payment session](https://docs.klarna.com/klarna-payments/integrate-with-klarna-payments/step-1-initiate-a-payment/)**.',
  operationId: 'createCreditSession',
  request: {
    body: {
      description: 'session_request',
      content: { 'application/json': { schema: SessionCreateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: MerchantSessionSchema } },
    },
    400: {
      description:
        'We were unable to create a session with the provided data. Some field constraint was violated.',
    },
    403: { description: 'You were not authorized to execute this operation.' },
  },
})

export const getPaymentsV1SessionsSessionIdRoute = createRoute({
  method: 'get',
  path: '/payments/v1/sessions/{session_id}',
  tags: ['sessions'],
  summary: 'Read an existing payment session',
  description:
    'Use this API call to read a Klarna Payments session. You can read the Klarna Payments session at any time after it has been created, to get information about it. This will return all data that has been collected during the session.\nRead more on **[Read an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/check-the-details-of-a-payment-session/)**.',
  operationId: 'readCreditSession',
  request: {
    params: z.object({
      session_id: z
        .string()
        .openapi({
          param: {
            description: 'session_id',
            in: 'path',
            name: 'session_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: { 'application/json': { schema: SessionReadSchema } },
    },
    403: { description: 'You were not authorized to execute this operation.' },
    404: { description: 'The session does not exist.' },
  },
})

export const postPaymentsV1SessionsSessionIdRoute = createRoute({
  method: 'post',
  path: '/payments/v1/sessions/{session_id}',
  tags: ['sessions'],
  summary: 'Update an existing payment session',
  description:
    'Use this API call to update a Klarna Payments session with new details, in case something in the order has changed and the checkout has been reloaded. Including if the consumer adds a new item to the cart or if consumer details are updated.\nRead more on **[Update an existing payment session](https://docs.klarna.com/klarna-payments/other-actions/update-the-cart/)**.',
  operationId: 'updateCreditSession',
  request: {
    params: z.object({
      session_id: z
        .string()
        .openapi({
          param: {
            description: 'session_id',
            in: 'path',
            name: 'session_id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'session_request',
      content: { 'application/json': { schema: SessionSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'The session was updated successfully.' },
    400: {
      description:
        'We were unable to update the session with the provided data. Some field constraint was violated.',
    },
    403: { description: 'You were not authorized to execute this operation.' },
    404: { description: 'The session does not exist.' },
  },
})
