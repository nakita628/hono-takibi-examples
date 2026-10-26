import { createRoute, z } from '@hono/zod-openapi'

const LiabilityShiftSchema = z
  .enum(['NO', 'POSSIBLE', 'UNKNOWN'])
  .openapi({
    description: "Liability shift indicator. The outcome of the issuer's authentication.",
    'x-enumDescriptions': [
      { value: 'NO', description: 'Liability is with the merchant.' },
      { value: 'POSSIBLE', description: 'Liability may shift to the card issuer.' },
      { value: 'UNKNOWN', description: 'The authentication system is not available.' },
    ],
  })
  .openapi('LiabilityShift')

const ParesStatusSchema = z
  .enum(['Y', 'N', 'U', 'A', 'C', 'R', 'D', 'I'])
  .openapi({
    description:
      "Transactions status result identifier. The outcome of the issuer's authentication.",
    'x-enumDescriptions': [
      { value: 'Y', description: 'Successful authentication.' },
      {
        value: 'N',
        description: 'Failed authentication / account not verified / transaction denied.',
      },
      { value: 'U', description: 'Unable to complete authentication.' },
      { value: 'A', description: 'Successful attempts transaction.' },
      { value: 'C', description: 'Challenge required for authentication.' },
      {
        value: 'R',
        description: 'Authentication rejected (merchant must not submit for authorization).',
      },
      { value: 'D', description: 'Challenge required; decoupled authentication confirmed.' },
      {
        value: 'I',
        description: 'Informational only; 3DS requestor challenge preference acknowledged.',
      },
    ],
  })
  .openapi('ParesStatus')

const EnrolledSchema = z
  .enum(['Y', 'N', 'U', 'B'])
  .openapi({
    description: 'Status of Authentication eligibility.',
    'x-enumDescriptions': [
      {
        value: 'Y',
        description:
          'Yes. The bank is participating in 3-D Secure protocol and will return the ACSUrl.',
      },
      { value: 'N', description: 'No. The bank is not participating in 3-D Secure protocol.' },
      {
        value: 'U',
        description:
          'Unavailable. The DS or ACS is not available for authentication at the time of the request.',
      },
      {
        value: 'B',
        description:
          'Bypass. The merchant authentication rule is triggered to bypass authentication.',
      },
    ],
  })
  .openapi('Enrolled')

const ThreeDSecureAuthenticationResponseSchema = z
  .object({
    authentication_status: ParesStatusSchema.exactOptional().openapi({
      description: "The outcome of the issuer's authentication.",
    }),
    enrollment_status: EnrolledSchema.exactOptional().openapi({
      description: 'Status of authentication eligibility.',
    }),
  })
  .openapi({
    title: '3D Secure Authentication Response',
    description: 'Results of 3D Secure Authentication.',
    required: [],
  })
  .openapi('ThreeDSecureAuthenticationResponse')

type AuthenticationResponseType = {
  liability_shift?: z.infer<typeof LiabilityShiftSchema>
  three_d_secure?: z.infer<typeof ThreeDSecureAuthenticationResponseSchema>
}

const _400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_VALUE').exactOptional(),
              description: z.literal('The value of a field is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_VALUE', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_400')

const _401Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_ACCOUNT_STATUS').exactOptional(),
              description: z.literal('Account validations failed for the user.').exactOptional(),
            })
            .openapi({ title: 'INVALID_ACCOUNT_STATUS', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_401')

const _403Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('PERMISSION_DENIED').exactOptional(),
              description: z
                .literal(
                  'You do not have permission to access or perform operations on this resource.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'PERMISSION_DENIED', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_403')

const _404Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_RESOURCE_ID').exactOptional(),
              description: z
                .literal(
                  'Specified resource ID does not exist. Please check the resource ID and try again.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_RESOURCE_ID', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_404')

const _422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('USER_ACCOUNT_CLOSED').exactOptional(),
              description: z.literal('User account locked or closed.').exactOptional(),
            })
            .openapi({ title: 'USER_ACCOUNT_CLOSED', required: [] }),
          z
            .object({
              issue: z.literal('CURRENCY_MISMATCH').exactOptional(),
              description: z
                .literal('All currency codes in the request should be of similar value.')
                .exactOptional(),
            })
            .openapi({ title: 'CURRENCY_MISMATCH', required: [] }),
          z
            .object({
              issue: z.literal('MULTIPLE_FREE_TRIAL_BILLING_CYCLES_NOT_SUPPORTED').exactOptional(),
              description: z
                .literal('Only one free trial billing cycle is allowed.')
                .exactOptional(),
            })
            .openapi({ title: 'MULTIPLE_FREE_TRIAL_BILLING_CYCLES_NOT_SUPPORTED', required: [] }),
          z
            .object({
              issue: z.literal('MORE_THAN_TWO_TRIAL_BILLING_CYCLE_NOT_SUPPORTED').exactOptional(),
              description: z.literal('Only two trial billing cycles are allowed.').exactOptional(),
            })
            .openapi({ title: 'MORE_THAN_TWO_TRIAL_BILLING_CYCLE_NOT_SUPPORTED', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_REGULAR_BILLING_CYCLE').exactOptional(),
              description: z
                .literal('Plan should have at least one regular billing cycle.')
                .exactOptional(),
            })
            .openapi({ title: 'MISSING_REGULAR_BILLING_CYCLE', required: [] }),
          z
            .object({
              issue: z.literal('MULTIPLE_REGULAR_BILLING_CYCLES_NOT_SUPPORTED').exactOptional(),
              description: z.literal('Only one regular billing cycle is allowed.').exactOptional(),
            })
            .openapi({ title: 'MULTIPLE_REGULAR_BILLING_CYCLES_NOT_SUPPORTED', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_BILLING_CYCLE_SEQUENCE').exactOptional(),
              description: z
                .literal('Billing cycle sequence should start with `1` and be consecutive.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_BILLING_CYCLE_SEQUENCE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_BILLING_CYCLE_SEQUENCE').exactOptional(),
              description: z
                .literal('Trial Billing cycle should precede regular billing cycle.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_BILLING_CYCLE_SEQUENCE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_TRIAL_BILLING_TOTAL_CYCLES').exactOptional(),
              description: z
                .literal("Total cycles for trial billing must be greater than '0'.")
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_TRIAL_BILLING_TOTAL_CYCLES', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_TIER_AMOUNT').exactOptional(),
              description: z.literal('Free tiers are not supported.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_TIER_AMOUNT', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_PRICING_SCHEME_TIERS').exactOptional(),
              description: z.literal('Tier(s) are missing for some quantities.').exactOptional(),
            })
            .openapi({ title: 'MISSING_PRICING_SCHEME_TIERS', required: [] }),
          z
            .object({
              issue: z.literal('OVERLAPPING_PRICING_SCHEME_TIERS').exactOptional(),
              description: z
                .literal('The specified quantity overlaps with multiple pricing tiers.')
                .exactOptional(),
            })
            .openapi({ title: 'OVERLAPPING_PRICING_SCHEME_TIERS', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_MODEL').exactOptional(),
              description: z
                .literal('The specified pricing model is not supported for trial billing cycle.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_MODEL', required: [] }),
          z
            .object({
              issue: z.literal('FIXED_PRICE_NOT_SUPPORTED').exactOptional(),
              description: z
                .literal('Fixed price is not supported for tiered pricing schemes.')
                .exactOptional(),
            })
            .openapi({ title: 'FIXED_PRICE_NOT_SUPPORTED', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_TIER_QUANTITY').exactOptional(),
              description: z
                .literal('Tier starting quantity must be less than ending quantity.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_TIER_QUANTITY', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_QUANTITY_SUPPORTED').exactOptional(),
              description: z
                .literal('Quantity is always supported for volume and tiered plans.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_QUANTITY_SUPPORTED', required: [] }),
          z
            .object({
              issue: z.literal('CURRENCY_NOT_SUPPORTED_FOR_RECEIVER').exactOptional(),
              description: z
                .literal('This currency cannot be accepted for this recipient’s account.')
                .exactOptional(),
            })
            .openapi({ title: 'CURRENCY_NOT_SUPPORTED_FOR_RECEIVER', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_METADATA_CUSTOM_NOTE').exactOptional(),
              description: z
                .literal('Merchant custom note cannot exceed 255 characters.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_METADATA_CUSTOM_NOTE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_METADATA_INVOICE_ID').exactOptional(),
              description: z.literal('Invoice id cannot exceed 127 characters.').exactOptional(),
            })
            .openapi({ title: 'INVALID_METADATA_INVOICE_ID', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('_422')

const AccountIdSchema = z
  .string()
  .regex(/^[2-9A-HJ-NP-Z]{13}$/)
  .length(13)
  .openapi({
    title: 'PayPal Account Identifier',
    description: 'The account identifier for a PayPal account.',
  })
  .openapi('AccountId')

const CurrencyCodeSchema = z
  .string()
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

const AmountWithBreakdownSchema = z
  .object({
    gross_amount: MoneySchema.openapi({
      description: 'The amount for this transaction.',
      readOnly: true,
    }),
    total_item_amount: MoneySchema.exactOptional().openapi({
      description: 'The item total for the transaction.',
      readOnly: true,
    }),
    fee_amount: MoneySchema.exactOptional().openapi({
      description: 'The fee details for the transaction.',
      readOnly: true,
    }),
    shipping_amount: MoneySchema.exactOptional().openapi({
      description: 'The shipping amount for the transaction.',
      readOnly: true,
    }),
    tax_amount: MoneySchema.exactOptional().openapi({
      description: 'The tax amount for the transaction.',
      readOnly: true,
    }),
    net_amount: MoneySchema.exactOptional().openapi({
      description:
        'The net amount that the payee receives for this transaction in their PayPal account. The net amount is computed as <code>gross_amount</code> minus the <code>paypal_fee</code>.',
      readOnly: true,
    }),
  })
  .openapi({
    title: 'Amount with Breakdown',
    description:
      'The breakdown details for the amount. Includes the gross, tax, fee, and shipping amounts.',
    required: ['gross_amount'],
  })
  .openapi('AmountWithBreakdown')

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

const PayeePaymentMethodPreferenceSchema = z
  .enum(['UNRESTRICTED', 'IMMEDIATE_PAYMENT_REQUIRED'])
  .default('UNRESTRICTED')
  .openapi({
    description: 'The merchant-preferred payment methods.',
    'x-enumDescriptions': [
      {
        value: 'UNRESTRICTED',
        description: 'Accepts any type of payment from the customer.',
        default: true,
      },
      {
        value: 'IMMEDIATE_PAYMENT_REQUIRED',
        description:
          'Accepts only immediate payment from the customer. For example, credit card, PayPal balance, or instant ACH. Ensures that at the time of capture, the payment does not have the `pending` status.',
      },
    ],
  })
  .openapi('PayeePaymentMethodPreference')

const ApplicationContextSchema = z
  .object({
    brand_name: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({
        description:
          'The label that overrides the business name in the PayPal account on the PayPal site.',
      }),
    locale: LanguageSchema.exactOptional().openapi({
      description:
        'The BCP 47-formatted locale of pages that the PayPal payment experience shows. PayPal supports a five-character code. For example, `da-DK`, `he-IL`, `id-ID`, `ja-JP`, `no-NO`, `pt-BR`, `ru-RU`, `sv-SE`, `th-TH`, `zh-CN`, `zh-HK`, or `zh-TW`.',
    }),
    shipping_preference: z
      .enum(['GET_FROM_FILE', 'NO_SHIPPING', 'SET_PROVIDED_ADDRESS'])
      .default('GET_FROM_FILE')
      .exactOptional()
      .openapi({
        description: 'The location from which the shipping address is derived.',
        'x-enumDescriptions': [
          {
            value: 'GET_FROM_FILE',
            description: 'Get the customer-provided shipping address on the PayPal site.',
            default: true,
          },
          {
            value: 'NO_SHIPPING',
            description:
              'Redacts the shipping address from the PayPal site. Recommended for digital goods.',
          },
          {
            value: 'SET_PROVIDED_ADDRESS',
            description:
              'Get the merchant-provided address. The customer cannot change this address on the PayPal site. If merchant does not pass an address, customer can choose the address on PayPal pages.',
          },
        ],
      }),
    user_action: z
      .enum(['CONTINUE', 'SUBSCRIBE_NOW'])
      .default('SUBSCRIBE_NOW')
      .exactOptional()
      .openapi({
        description:
          'Configures the label name to `Continue` or `Subscribe Now` for subscription consent experience.',
        'x-enumDescriptions': [
          {
            value: 'CONTINUE',
            description:
              'After you redirect the customer to the PayPal subscription consent page, a <strong>Continue</strong> button appears. Use this option when you want to control the activation of the subscription and do not want PayPal to activate the subscription.',
            default: true,
          },
          {
            value: 'SUBSCRIBE_NOW',
            description:
              'After you redirect the customer to the PayPal subscription consent page, a <strong>Subscribe Now</strong> button appears. Use this option when you want PayPal to activate the subscription.',
          },
        ],
      }),
    payment_method: z
      .object({ payee_preferred: PayeePaymentMethodPreferenceSchema.exactOptional() })
      .exactOptional()
      .openapi({
        description: 'The customer and merchant payment preferences.',
        title: 'Payment Method',
        required: [],
      }),
    return_url: z
      .url()
      .min(10)
      .max(4000)
      .openapi({
        description:
          'The URL where the customer is redirected after the customer approves the payment.',
      }),
    cancel_url: z
      .url()
      .min(10)
      .max(4000)
      .openapi({
        description:
          'The URL where the customer is redirected after the customer cancels the payment.',
      }),
  })
  .openapi({
    title: 'Application Context',
    description:
      'The application context, which customizes the payer experience during the subscription approval process with PayPal.',
    required: ['return_url', 'cancel_url'],
  })
  .openapi('ApplicationContext')

const AuthenticationResponseSchema: z.ZodType<AuthenticationResponseType> = z
  .lazy(() =>
    z
      .object({
        liability_shift: LiabilityShiftSchema.exactOptional(),
        three_d_secure: ThreeDSecureAuthenticationResponseSchema.exactOptional(),
      })
      .openapi({
        title: 'Authentication Response',
        description: 'Results of Authentication such as 3D Secure.',
        required: [],
      }),
  )
  .openapi('AuthenticationResponse')

const PricingTierSchema = z
  .object({
    starting_quantity: z
      .string()
      .regex(/^([0-9]+|([0-9]+)?[.][0-9]+)$/)
      .min(1)
      .max(32)
      .openapi({ description: 'The starting quantity for the tier.' }),
    ending_quantity: z
      .string()
      .regex(/^([0-9]+|([0-9]+)?[.][0-9]+)$/)
      .min(1)
      .max(32)
      .exactOptional()
      .openapi({ description: 'The ending quantity for the tier. Optional for the last tier.' }),
    amount: MoneySchema.openapi({ description: 'The pricing amount for the tier.' }),
  })
  .openapi({
    title: 'Pricing Tier',
    description: 'The pricing tier details.',
    required: ['starting_quantity', 'amount'],
  })
  .openapi('PricingTier')

const PricingTierListSchema = z
  .array(PricingTierSchema)
  .min(1)
  .max(32)
  .openapi({
    description:
      'An array of pricing tiers which are used for billing volume/tiered plans. pricing_model field has to be specified.',
  })
  .openapi('PricingTierList')

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

const PricingSchemeSchema = z
  .object({
    version: z
      .int()
      .min(0)
      .max(999)
      .exactOptional()
      .openapi({ description: 'The version of the pricing scheme.', readOnly: true }),
    fixed_price: MoneySchema.exactOptional().openapi({
      description:
        'The fixed amount to charge for the subscription. The changes to fixed amount are applicable to both existing and future subscriptions. For existing subscriptions, payments within 10 days of price change are not affected.',
    }),
    pricing_model: z
      .enum(['VOLUME', 'TIERED'])
      .exactOptional()
      .openapi({
        description: 'The pricing model for tiered plan. The `tiers` parameter is required.',
        'x-enumDescriptions': [
          { value: 'VOLUME', description: 'A volume pricing model.' },
          { value: 'TIERED', description: 'A tiered pricing model.' },
        ],
      }),
    tiers: PricingTierListSchema.exactOptional(),
    create_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when this pricing scheme was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      readOnly: true,
    }),
    update_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when this pricing scheme was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      readOnly: true,
    }),
  })
  .openapi({ title: 'Pricing Scheme', description: 'The pricing scheme details.', required: [] })
  .openapi('PricingScheme')

const FrequencySchema = z
  .object({
    interval_unit: z.enum(['DAY', 'WEEK', 'MONTH', 'YEAR']).openapi({
      description: 'The interval at which the subscription is charged or billed.',
      'x-enumDescriptions': [
        { value: 'DAY', description: 'A daily billing cycle.' },
        { value: 'WEEK', description: 'A weekly billing cycle.' },
        { value: 'MONTH', description: 'A monthly billing cycle.' },
        { value: 'YEAR', description: 'A yearly billing cycle.' },
      ],
    }),
    interval_count: z
      .int()
      .min(1)
      .max(365)
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'The number of intervals after which a subscriber is billed. For example, if the `interval_unit` is `DAY` with an `interval_count` of  `2`, the subscription is billed once every two days. The following table lists the maximum allowed values for the `interval_count` for each `interval_unit`:<table><thead><tr><th><code>Interval unit</code></th><th>Maximum interval count</th></tr></thead><tbody><tr><td><code>DAY</code></td><td align="right">365</td></tr><tr><td><code>WEEK</code></td><td align="right">52</td></tr><tr><td><code>MONTH</code></td><td align="right">12</td></tr><tr><td><code>YEAR</code></td><td align="right">1</td></tr></tbody></table>',
      }),
  })
  .openapi({
    title: 'Billing Cycle Frequency',
    description: 'The frequency of the billing cycle.',
    required: ['interval_unit'],
  })
  .openapi('Frequency')

const BillingCycleSchema = z
  .object({
    pricing_scheme: PricingSchemeSchema.exactOptional().openapi({
      description:
        'The active pricing scheme for this billing cycle. A free trial billing cycle does not require a pricing scheme.',
    }),
    frequency: FrequencySchema.openapi({
      description: 'The frequency details for this billing cycle.',
    }),
    tenure_type: z.enum(['REGULAR', 'TRIAL']).openapi({
      description:
        'The tenure type of the billing cycle. In case of a plan having trial cycle, only 2 trial cycles are allowed per plan.',
      'x-enumDescriptions': [
        { value: 'REGULAR', description: 'A regular billing cycle.' },
        { value: 'TRIAL', description: 'A trial billing cycle.' },
      ],
    }),
    sequence: z
      .int()
      .min(1)
      .max(99)
      .openapi({
        description:
          'The order in which this cycle is to run among other billing cycles. For example, a trial billing cycle has a `sequence` of `1` while a regular billing cycle has a `sequence` of `2`, so that trial cycle runs before the regular cycle.',
      }),
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
  })
  .openapi({
    title: 'Billing Cycle',
    description: 'The billing cycle details.',
    required: ['frequency', 'tenure_type', 'sequence'],
  })
  .openapi('BillingCycle')

const BillingCycleListSchema = z
  .array(BillingCycleSchema)
  .min(1)
  .max(12)
  .openapi({
    description:
      'An array of billing cycles for trial billing and regular billing. A plan can have at most two trial cycles and only one regular cycle.',
  })
  .openapi('BillingCycleList')

const BillingCycleOverrideSchema = z
  .object({
    pricing_scheme: PricingSchemeSchema.exactOptional().openapi({
      description:
        'The active pricing scheme for this billing cycle. A free trial billing cycle does not require a pricing scheme.',
    }),
    sequence: z
      .int()
      .min(1)
      .max(99)
      .openapi({
        description:
          'The order in which this cycle is to run among other billing cycles. For example, a trial billing cycle has a `sequence` of `1` while a regular billing cycle has a `sequence` of `2`, so that trial cycle runs before the regular cycle.',
      }),
    total_cycles: z
      .int()
      .min(0)
      .max(999)
      .exactOptional()
      .openapi({
        description:
          'The number of times this billing cycle gets executed. Trial billing cycles can only be executed a finite number of times (value between <code>1</code> and <code>999</code> for <code>total_cycles</code>). Regular billing cycles can be executed infinite times (value of <code>0</code> for <code>total_cycles</code>) or a finite number of times (value between <code>1</code> and <code>999</code> for <code>total_cycles</code>).',
      }),
  })
  .openapi({
    title: 'Billing Cycle Override',
    description:
      'The billing cycle details to override at subscription level. The subscription billing cycle definition has to adhere to the plan billing cycle definition.',
    required: ['sequence'],
  })
  .openapi('BillingCycleOverride')

const BillingCycleOverrideListSchema = z
  .array(BillingCycleOverrideSchema)
  .min(1)
  .max(12)
  .openapi({
    description:
      'An array of billing cycles for trial billing and regular billing. The subscription billing cycle definition has to adhere to the plan billing cycle definition.',
  })
  .openapi('BillingCycleOverrideList')

const CountryCode_2Schema = z
  .string()
  .regex(/^([A-Z]{2}|C2)$/)
  .length(2)
  .openapi({
    description:
      'The [two-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>',
  })
  .openapi('CountryCode_2')

const ProductsSchema = z
  .string()
  .min(1)
  .max(255)
  .openapi({ description: 'This value provides the category of the BIN.' })
  .openapi('Products')

const ProductsListSchema = z
  .array(ProductsSchema)
  .min(1)
  .max(256)
  .openapi({
    description:
      'The type of card product assigned to the BIN by the issuer. These values are defined by the issuer and may change over time. Some examples include: PREPAID_GIFT, CONSUMER, CORPORATE.',
  })
  .openapi('ProductsList')

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
      .min(1)
      .max(64)
      .exactOptional()
      .openapi({ description: 'The issuer of the card instrument.' }),
    bin_country_code: CountryCode_2Schema.exactOptional().openapi({
      description:
        'The [two-character ISO-3166-1 country code](/docs/integration/direct/rest/country-codes/) of the bank.',
    }),
    products: ProductsListSchema.exactOptional(),
  })
  .openapi({
    title: 'Bin Details',
    description: 'Bank Identification Number (BIN) details used to fund a payment.',
    required: [],
  })
  .openapi('BinDetails')

const MerchantPartnerCustomerIdSchema = z
  .string()
  .regex(/^[0-9a-zA-Z_-]+$/)
  .min(1)
  .max(22)
  .openapi({ description: 'The unique ID for a customer generated by PayPal.' })
  .openapi('MerchantPartnerCustomerId')

const EmailSchema = z
  .string()
  .regex(
    /(?:[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*|(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  )
  .min(3)
  .max(254)
  .openapi({
    description:
      'The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote>',
  })
  .openapi('Email')

const PhoneTypeSchema = z
  .enum(['FAX', 'HOME', 'MOBILE', 'OTHER', 'PAGER'])
  .openapi({ title: 'Phone Type', description: 'The phone type.' })
  .openapi('PhoneType')

const PhoneWithTypeSchema = z
  .object({
    phone_type: PhoneTypeSchema.exactOptional(),
    phone_number: z
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
        description:
          'The phone number, in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en).',
        title: 'Phone',
        required: ['national_number'],
      }),
  })
  .openapi({
    title: 'Phone With Type',
    description: 'The phone information.',
    required: ['phone_number'],
  })
  .openapi('PhoneWithType')

const CustomerSchema = z
  .object({
    id: MerchantPartnerCustomerIdSchema.exactOptional(),
    email_address: EmailSchema.exactOptional().openapi({
      description:
        'Email address of the buyer as provided to the merchant or on file with the merchant. Email Address is required if you are processing the transaction using PayPal Guest Processing which is offered to select partners and merchants. For all other use cases we do not expect partners/merchant to send email_address of their customer.',
    }),
    phone: PhoneWithTypeSchema.exactOptional().openapi({
      description:
        'The phone number of the buyer as provided to the merchant or on file with the merchant. The `phone.phone_number` supports only `national_number`.',
    }),
  })
  .openapi({
    title: 'Customer Information',
    description: "The details about a customer in PayPal's system of record.",
    required: [],
  })
  .openapi('Customer')

const StoreInVaultInstructionSchema = z
  .literal('ON_SUCCESS')
  .openapi({
    description: 'Defines how and when the payment source gets vaulted.',
    'x-enumDescriptions': [
      {
        value: 'ON_SUCCESS',
        description:
          'Defines that the payment_source will be vaulted only when at least one authorization or capture using that payment_source is successful.',
      },
    ],
  })
  .openapi('StoreInVaultInstruction')

const VaultInstructionBaseSchema = z
  .object({ store_in_vault: StoreInVaultInstructionSchema.exactOptional() })
  .openapi({
    title: 'Vault Instruction Base',
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
        description: 'The method used for card verification.',
        'x-enumDescriptions': [
          {
            value: 'SCA_ALWAYS',
            description:
              'Selecting this option will attempt to force a strong customer authentication for the authorization/transaction. In countries where SCA has been defined and implemented it will result in a contingency and HATEOAS link being returned.  The API caller should redirect the payer to that link so that they can authenticate themselves against their issuing bank or other entity. As noted, the HATEOAS link is only available in all regions where strong authentication is supported, (e.g. in European countries where 3DS is live). Merchants can use this setting as an additional layer of security if they choose to. In all cases, when an authorization is requested the AVS/CVV results will be returned in the response.',
          },
          {
            value: 'SCA_WHEN_REQUIRED',
            description:
              'This is the default. When an authorization or transaction is attempted this option will return a contingency and HATEOAS link only when local regulations require strong customer authentication, (e.g. 3DS in countries and use cases where it is mandated). The API caller should redirect the payer to the link so that they can authenticate themselves. In all cases, when an authorization is requested the AVS/CVV results will be returned in the response.',
          },
          {
            value: '3D_SECURE',
            description:
              'The contingency surfaced as an additional security layer that helps prevent unauthorized card-not-present transactions and protects the merchant from exposure to fraud.',
            deprecated: true,
          },
          {
            value: 'AVS_CVV',
            description:
              'Places a temporary hold on the card to ensure its validity. This process protects the merchant from exposure to fraud. This verification method will confirm that the address information or CVV included matches what the issuing bank has on file for the associated card, ensuring that only authorized card users are able to make purchases from you.',
            deprecated: true,
          },
        ],
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
    customer: CustomerSchema.exactOptional(),
    vault: VaultInstructionBaseSchema.exactOptional().openapi({
      description: 'Instruction to vault the card based on the specified strategy.',
    }),
    verification: CardVerificationSchema.exactOptional().openapi({
      description: 'Instruction to optionally verify the card based on the specified strategy.',
    }),
  })
  .openapi({
    title: 'Card Attributes',
    description: 'Additional attributes associated with the use of this card.',
    required: [],
  })
  .openapi('CardAttributes')

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

const DefinitionsLinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .min(1)
  .max(10)
  .openapi({ description: 'An array of request-related HATEOAS links.', readOnly: true })
  .openapi('DefinitionsLinkDescriptionList')

const VaultResponseSchema = z
  .object({
    id: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'The PayPal-generated ID for the saved payment source.' }),
    status: z
      .enum(['VAULTED', 'CREATED', 'APPROVED'])
      .exactOptional()
      .openapi({
        title: 'Vault Status',
        description: 'The vault status.',
        'x-enumDescriptions': [
          {
            value: 'VAULTED',
            description:
              "The payment source has been saved in your customer's vault. This vault status reflects `/v3/vault` status.",
          },
          {
            value: 'CREATED',
            description:
              "DEPRECATED. The payment source has been saved in your customer's vault. This status applies to deprecated integration patterns and will not be returned for v3/vault integrations.",
          },
          {
            value: 'APPROVED',
            description:
              'Customer has approved the action of saving the specified payment_source into their vault. Use v3/vault/payment-tokens with given setup_token to save the payment source in the vault',
          },
        ],
        deprecated: true,
      }),
    customer: z
      .object({ id: MerchantPartnerCustomerIdSchema.exactOptional() })
      .exactOptional()
      .openapi({
        title: 'Customer Information',
        description: "The details about a customer in PayPal's system of record.",
        required: [],
      }),
    links: DefinitionsLinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Vault Response',
    description: 'The details about a saved payment source.',
    required: [],
  })
  .openapi('VaultResponse')

const CardAttributesResponseSchema = z
  .object({ vault: VaultResponseSchema.exactOptional() })
  .openapi({
    title: 'Card Attributes Response',
    description: 'Additional attributes associated with the use of this card.',
    required: [],
  })
  .openapi('CardAttributesResponse')

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
    'UNKNOWN',
  ])
  .openapi({
    title: 'Card Brand',
    description: 'The card network or brand. Applies to credit, debit, gift, and payment cards.',
    'x-enumDescriptions': [
      { value: 'VISA', description: 'Visa card.' },
      { value: 'MASTERCARD', description: 'Mastecard card.' },
      { value: 'DISCOVER', description: 'Discover card.' },
      { value: 'AMEX', description: 'American Express card.' },
      { value: 'SOLO', description: 'Solo debit card.' },
      { value: 'JCB', description: 'Japan Credit Bureau card.' },
      { value: 'STAR', description: 'Military Star card.' },
      { value: 'DELTA', description: 'Delta Airlines card.' },
      { value: 'SWITCH', description: 'Switch credit card.' },
      { value: 'MAESTRO', description: 'Maestro credit card.' },
      { value: 'CB_NATIONALE', description: 'Carte Bancaire (CB) credit card.' },
      { value: 'CONFIGOGA', description: 'Configoga credit card.' },
      { value: 'CONFIDIS', description: 'Confidis credit card.' },
      { value: 'ELECTRON', description: 'Visa Electron credit card.' },
      { value: 'CETELEM', description: 'Cetelem credit card.' },
      { value: 'CHINA_UNION_PAY', description: 'China union pay credit card.' },
      {
        value: 'DINERS',
        description:
          'The Diners Club International banking and payment services capability network owned by Discover Financial Services (DFS), one of the most recognized brands in US financial services.',
      },
      { value: 'ELO', description: 'The Brazilian Elo card payment network.' },
      { value: 'HIPER', description: 'The Hiper - Ingenico ePayment network.' },
      {
        value: 'HIPERCARD',
        description:
          "The Brazilian Hipercard payment network that's widely accepted in the retail market.",
      },
      { value: 'RUPAY', description: 'The RuPay payment network.' },
      { value: 'GE', description: 'The GE Credit Union 3Point card payment network.' },
      { value: 'SYNCHRONY', description: 'The Synchrony Financial (SYF) payment network.' },
      { value: 'UNKNOWN', description: 'UNKNOWN payment network.' },
    ],
  })
  .openapi('CardBrand')

const CardBrandListSchema = z
  .array(CardBrandSchema)
  .min(1)
  .max(256)
  .openapi({ description: 'Array of brands or networks associated with the card.', readOnly: true })
  .openapi('CardBrandList')

const DateYearMonthSchema = z
  .string()
  .regex(/^[0-9]{4}-(0[1-9]|1[0-2])$/)
  .length(7)
  .openapi({
    description:
      'The year and month, in ISO-8601 `YYYY-MM` date format. See [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
  })
  .openapi('DateYearMonth')

const CardFromRequestSchema = z
  .object({
    expiry: DateYearMonthSchema.exactOptional().openapi({
      description:
        'The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    last_digits: z
      .string()
      .regex(/[0-9]{2,}/)
      .min(2)
      .max(4)
      .exactOptional()
      .openapi({ description: 'The last digits of the payment card.', readOnly: true }),
  })
  .openapi({
    title: 'Card from Request',
    description: 'Representation of card details as received in the request.',
    required: [],
  })
  .openapi('CardFromRequest')

const CardTypeSchema = z
  .enum(['CREDIT', 'DEBIT', 'PREPAID', 'STORE', 'UNKNOWN'])
  .openapi({
    title: 'Card Type',
    description: 'Type of card. i.e Credit, Debit and so on.',
    'x-enumDescriptions': [
      { value: 'CREDIT', description: 'A credit card.' },
      { value: 'DEBIT', description: 'A debit card.' },
      { value: 'PREPAID', description: 'A Prepaid card.' },
      { value: 'STORE', description: 'A store card.' },
      { value: 'UNKNOWN', description: 'Card type cannot be determined.' },
    ],
  })
  .openapi('CardType')

const CardResponseSchema = z
  .object({
    name: z
      .string()
      .min(2)
      .max(300)
      .exactOptional()
      .openapi({ description: "The card holder's name as it appears on the card." }),
    last_digits: z
      .string()
      .regex(/[0-9]{2,}/)
      .exactOptional()
      .openapi({ description: 'The last digits of the payment card.', readOnly: true }),
    brand: CardBrandSchema.exactOptional().openapi({
      description: 'The card brand or network. Typically used in the response.',
      readOnly: true,
    }),
    available_networks: CardBrandListSchema.exactOptional(),
    type: CardTypeSchema.exactOptional().openapi({ description: 'The payment card type.' }),
    authentication_result: AuthenticationResponseSchema.exactOptional(),
    attributes: CardAttributesResponseSchema.exactOptional(),
    from_request: CardFromRequestSchema.exactOptional(),
    expiry: DateYearMonthSchema.exactOptional().openapi({
      description:
        'The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).',
    }),
    bin_details: BinDetailsSchema.exactOptional().openapi({
      description: 'Bank Identification Number (BIN) details used to fund a payment.',
    }),
  })
  .openapi({
    title: 'Card Response',
    description: 'The payment card to use to fund a payment. Card can be a credit or debit card.',
    required: [],
  })
  .openapi('CardResponse')

const CountryCodeSchema = z
  .string()
  .regex(/^([A-Z]{2}|C2)$/)
  .length(2)
  .openapi({
    description:
      'The [2-character ISO 3166-1 code](/api/rest/reference/country-codes/) that identifies the country or region.<blockquote><strong>Note:</strong> The country code for Great Britain is <code>GB</code> and not <code>UK</code> as used in the top-level domain names for that country. Use the `C2` country code for China worldwide for comparable uncontrolled price (CUP) method, bank card, and cross-border transactions.</blockquote>',
  })
  .openapi('CountryCode')

const CardResponseWithBillingAddressSchema = CardResponseSchema.and(
  z
    .object({
      name: z
        .string()
        .min(2)
        .max(300)
        .exactOptional()
        .openapi({ description: "The card holder's name as it appears on the card." }),
      billing_address: z
        .object({
          address_line_1: z
            .string()
            .max(300)
            .exactOptional()
            .openapi({
              description:
                'The first line of the address, such as number and street, for example, `173 Drury Lane`. Needed for data entry, and Compliance and Risk checks. This field needs to pass the full address.',
            }),
          address_line_2: z
            .string()
            .max(300)
            .exactOptional()
            .openapi({
              description:
                'The second line of the address, for example, a suite or apartment number.',
            }),
          admin_area_2: z
            .string()
            .max(120)
            .exactOptional()
            .openapi({
              description: 'A city, town, or village. Smaller than `admin_area_level_1`.',
            }),
          admin_area_1: z
            .string()
            .max(300)
            .exactOptional()
            .openapi({
              description:
                'The highest-level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. This data is formatted for postal delivery, for example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A *kanton*.</li></ul>',
            }),
          postal_code: z
            .string()
            .max(60)
            .exactOptional()
            .openapi({
              description:
                'The postal code, which is the ZIP code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).',
            }),
          country_code: CountryCodeSchema,
        })
        .exactOptional()
        .openapi({
          description:
            'The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).',
          title: 'Portable Postal Address (Medium-Grained)',
          required: ['country_code'],
        }),
      expiry: DateYearMonthSchema.exactOptional().openapi({
        description:
          'The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      }),
      currency_code: CurrencyCodeSchema.exactOptional().openapi({
        description: 'Currency code of the given instrument',
      }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .object({})
      .openapi({
        title: 'Card Response with billing address and name',
        description:
          'The payment card used to fund the payment. Card can be a credit or debit card.',
      }),
  )
  .openapi('CardResponseWithBillingAddress')

const CycleExecutionSchema = z
  .object({
    tenure_type: z.enum(['REGULAR', 'TRIAL']).openapi({
      description: 'The type of the billing cycle.',
      'x-enumDescriptions': [
        { value: 'REGULAR', description: 'A regular billing cycle.' },
        { value: 'TRIAL', description: 'A trial billing cycle.' },
      ],
      readOnly: true,
    }),
    sequence: z
      .int()
      .min(0)
      .max(99)
      .openapi({ description: 'The order in which to run this cycle among other billing cycles.' }),
    cycles_completed: z
      .int()
      .min(0)
      .max(9999)
      .openapi({
        description: 'The number of billing cycles that have completed.',
        readOnly: true,
      }),
    cycles_remaining: z
      .int()
      .min(0)
      .max(9999)
      .exactOptional()
      .openapi({
        description:
          'For a finite billing cycle, cycles_remaining is the number of remaining cycles. For an infinite billing cycle, cycles_remaining is set as 0.',
        readOnly: true,
      }),
    current_pricing_scheme_version: z
      .int()
      .min(1)
      .max(99)
      .exactOptional()
      .openapi({
        description: 'The active pricing scheme version for the billing cycle.',
        readOnly: true,
      }),
    total_cycles: z
      .int()
      .min(0)
      .max(999)
      .exactOptional()
      .openapi({
        description:
          'The number of times this billing cycle gets executed. Trial billing cycles can only be executed a finite number of times (value between <code>1</code> and <code>999</code> for <code>total_cycles</code>). Regular billing cycles can be executed infinite times (value of <code>0</code> for <code>total_cycles</code>) or a finite number of times (value between <code>1</code> and <code>999</code> for <code>total_cycles</code>).',
        readOnly: true,
      }),
  })
  .openapi({
    title: 'Billing Cycle Execution Details',
    description: 'The regular and trial execution details for a billing cycle.',
    required: ['tenure_type', 'sequence', 'cycles_completed'],
  })
  .openapi('CycleExecution')

const CycleExecutionListSchema = z
  .array(CycleExecutionSchema)
  .min(0)
  .max(3)
  .openapi({ description: 'The trial and regular billing executions.', readOnly: true })
  .openapi('CycleExecutionList')

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

const FailedPaymentDetailsSchema = z
  .object({
    amount: MoneySchema.openapi({ description: 'The failed payment amount.', readOnly: true }),
    time: DateTimeSchema.openapi({
      description:
        'The date and time when the failed payment was made, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      readOnly: true,
    }),
    reason_code: z
      .enum([
        'PAYMENT_DENIED',
        'INTERNAL_SERVER_ERROR',
        'PAYEE_ACCOUNT_RESTRICTED',
        'PAYER_ACCOUNT_RESTRICTED',
        'PAYER_CANNOT_PAY',
        'SENDING_LIMIT_EXCEEDED',
        'TRANSACTION_RECEIVING_LIMIT_EXCEEDED',
        'CURRENCY_MISMATCH',
      ])
      .exactOptional()
      .openapi({
        description: 'The reason code for the payment failure.',
        'x-enumDescriptions': [
          {
            value: 'PAYMENT_DENIED',
            description: 'PayPal declined the payment due to one or more customer issues.',
          },
          { value: 'INTERNAL_SERVER_ERROR', description: 'An internal server error has occurred.' },
          {
            value: 'PAYEE_ACCOUNT_RESTRICTED',
            description: 'The payee account is not in good standing and cannot receive payments.',
          },
          {
            value: 'PAYER_ACCOUNT_RESTRICTED',
            description: 'The payer account is not in good standing and cannot make payments.',
          },
          { value: 'PAYER_CANNOT_PAY', description: 'Payer cannot pay for this transaction.' },
          {
            value: 'SENDING_LIMIT_EXCEEDED',
            description: "The transaction exceeds the payer's sending limit.",
          },
          {
            value: 'TRANSACTION_RECEIVING_LIMIT_EXCEEDED',
            description: "The transaction exceeds the receiver's receiving limit.",
          },
          {
            value: 'CURRENCY_MISMATCH',
            description: 'The transaction is declined due to a currency mismatch.',
          },
        ],
        readOnly: true,
      }),
    next_payment_retry_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The time when the retry attempt for the failed payment occurs, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      readOnly: true,
    }),
  })
  .openapi({
    title: 'Failed Payment Details',
    description: 'The details for the failed payment of the subscription.',
    required: ['amount', 'time'],
  })
  .openapi('FailedPaymentDetails')

const LastPaymentDetailsSchema = z
  .object({
    amount: MoneySchema.exactOptional().openapi({
      description: 'The last payment amount.',
      readOnly: true,
    }),
    time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the last payment was made, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      readOnly: true,
    }),
  })
  .openapi({ required: [] })
  .openapi({
    title: 'Last Payment Details',
    description: 'The details for the last payment.',
    required: ['amount', 'time'],
  })
  .openapi('LastPaymentDetails')

const LinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .min(1)
  .max(10)
  .openapi({
    description:
      'An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).',
    readOnly: true,
  })
  .openapi('LinkDescriptionList')

const MerchantInventorySchema = z.any().openapi('MerchantInventory')

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
    full_name: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({ description: "When the party is a person, the party's full name." }),
  })
  .openapi({ title: 'Name', description: 'The name of the party.', required: [] })
  .openapi('Name')

const PatchSchema = z
  .object({
    op: z.enum(['add', 'remove', 'replace', 'move', 'copy', 'test']).openapi({
      description: 'The operation.',
      'x-enumDescriptions': [
        {
          value: 'add',
          description:
            'Depending on the target location reference, completes one of these functions:<ul><li><strong>The target location is an array index</strong>. Inserts a new value into the array at the specified index.</li><li><strong>The target location is an object parameter that does not already exist</strong>. Adds a new parameter to the object.</li><li><strong>The target location is an object parameter that does exist</strong>. Replaces that parameter\'s value.</li></ul>The <code>value</code> parameter defines the value to add. For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.1">4.1. add</a>.',
        },
        {
          value: 'remove',
          description:
            'Removes the value at the target location. For the operation to succeed, the target location must exist. For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.2">4.2. remove</a>.',
        },
        {
          value: 'replace',
          description:
            'Replaces the value at the target location with a new value. The operation object must contain a <code>value</code> parameter that defines the replacement value. For the operation to succeed, the target location must exist. For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.3">4.3. replace</a>.',
        },
        {
          value: 'move',
          description:
            'Removes the value at a specified location and adds it to the target location. The operation object must contain a <code>from</code> parameter, which is a string that contains a JSON pointer value that references the location in the target document from which to move the value. For the operation to succeed, the <code>from</code> location must exist. For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.4">4.4. move</a>.',
        },
        {
          value: 'copy',
          description:
            'Copies the value at a specified location to the target location. The operation object must contain a <code>from</code> parameter, which is a string that contains a JSON pointer value that references the location in the target document from which to copy the value. For the operation to succeed, the <code>from</code> location must exist. For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.5">4.5. copy</a>.',
        },
        {
          value: 'test',
          description:
            'Tests that a value at the target location is equal to a specified value. The operation object must contain a <code>value</code> parameter that defines the value to compare to the target location\'s value. For the operation to succeed, the target location must be equal to the <code>value</code> value. For test, <code>equal</code> indicates that the value at the target location and the value that <code>value</code> defines are of the same JSON type. The data type of the value determines how equality is defined:<table><thead align="left"><tr><th>Type</th><th>Considered equal if both values</th></tr></thead><tbody align="left"><tr><td><strong>strings</strong></td><td>Contain the same number of Unicode characters and their code points are byte-by-byte equal.</td></tr><tr><td><strong>numbers</strong></td><td>Are numerically equal.</td></tr><tr><td><strong>arrays</strong></td><td>Contain the same number of values, and each value is equal to the value at the corresponding position in the other array, by using these type-specific rules.</td></tr><tr><td><strong>objects</strong></td><td>Contain the same number of parameters, and each parameter is equal to a parameter in the other object, by comparing their keys (as strings) and their values (by using these type-specific rules).</td></tr><tr><td><strong>literals (<code>false</code>, <code>true</code>, and <code>null</code>)</strong></td><td>Are the same. The comparison is a logical comparison. For example, whitespace between the parameter values of an array is not significant. Also, ordering of the serialization of object parameters is not significant.</td></tr></tbody></table>For more information, see <a href="https://tools.ietf.org/html/rfc6902#section-4.6">4.6. test</a>.',
        },
      ],
    }),
    path: z
      .string()
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
          'The value to apply. The <code>remove</code>, <code>copy</code>, and <code>move</code> operations do not require a value. Since <a href="https://www.rfc-editor.org/rfc/rfc69021">JSON Patch</a> allows any type for <code>value</code>, the <code>type</code> property is not specified.',
      }),
    from: z
      .string()
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
  .array(PatchSchema)
  .openapi({
    title: 'Patch Request',
    description: 'An array of JSON patch objects to apply partial updates to resources.',
  })
  .openapi('PatchRequest')

const PayerBaseSchema = z
  .object({
    email_address: EmailSchema.exactOptional().openapi({
      description: 'The email address of the payer.',
    }),
    payer_id: AccountIdSchema.exactOptional().openapi({
      description: 'The PayPal-assigned ID for the payer.',
      readOnly: true,
    }),
  })
  .openapi({
    title: 'Payer Base',
    description:
      'The customer who approves and pays for the order. The customer is also known as the payer.',
    required: [],
  })
  .openapi('PayerBase')

const PaymentPreferencesSchema = z
  .object({
    auto_bill_outstanding: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Indicates whether to automatically bill the outstanding amount in the next billing cycle.',
      }),
    setup_fee: MoneySchema.exactOptional().openapi({
      description: 'The initial set-up fee for the service.',
    }),
    setup_fee_failure_action: z
      .enum(['CONTINUE', 'CANCEL'])
      .default('CANCEL')
      .exactOptional()
      .openapi({
        description:
          'The action to take on the subscription if the initial payment for the setup fails.',
        'x-enumDescriptions': [
          {
            value: 'CONTINUE',
            description: 'Continues the subscription if the initial payment for the setup fails.',
          },
          {
            value: 'CANCEL',
            description: 'Cancels the subscription if the initial payment for the setup fails.',
          },
        ],
      }),
    payment_failure_threshold: z
      .int()
      .min(0)
      .max(999)
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'The maximum number of payment failures before a subscription is suspended. For example, if `payment_failure_threshold` is `2`, the subscription automatically updates to the `SUSPEND` state if two consecutive payments fail.',
      }),
  })
  .openapi({
    title: 'Payment Preferences',
    description: 'The payment preferences for a subscription.',
    required: [],
  })
  .openapi('PaymentPreferences')

const PaymentPreferencesOverrideSchema = z
  .object({
    auto_bill_outstanding: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether to automatically bill the outstanding amount in the next billing cycle.',
      }),
    setup_fee: MoneySchema.exactOptional().openapi({
      description: 'The initial set-up fee for the service.',
    }),
    setup_fee_failure_action: z
      .enum(['CONTINUE', 'CANCEL'])
      .exactOptional()
      .openapi({
        description:
          'The action to take on the subscription if the initial payment for the setup fails.',
        'x-enumDescriptions': [
          {
            value: 'CONTINUE',
            description: 'Continues the subscription if the initial payment for the setup fails.',
          },
          {
            value: 'CANCEL',
            description: 'Cancels the subscription if the initial payment for the setup fails.',
          },
        ],
      }),
    payment_failure_threshold: z
      .int()
      .min(0)
      .max(999)
      .exactOptional()
      .openapi({
        description:
          'The maximum number of payment failures before a subscription is suspended. For example, if `payment_failure_threshold` is `2`, the subscription automatically updates to the `SUSPEND` state if two consecutive payments fail.',
      }),
  })
  .openapi({
    title: 'Payment Preferences Override',
    description: 'The payment preferences to override at subscription level.',
    required: [],
  })
  .openapi('PaymentPreferencesOverride')

const PaymentSourceSchema = z
  .object({
    card: z
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
        expiry: DateYearMonthSchema.exactOptional().openapi({
          description:
            'The card expiration year and month, in [Internet date format](https://tools.ietf.org/html/rfc3339#section-5.6).',
        }),
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
        type: CardTypeSchema.exactOptional().openapi({ description: 'The payment card type.' }),
        brand: CardBrandSchema.exactOptional().openapi({
          description: 'The card brand or network. Typically used in the response.',
        }),
        billing_address: z
          .object({
            address_line_1: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The first line of the address, such as number and street, for example, `173 Drury Lane`. Needed for data entry, and Compliance and Risk checks. This field needs to pass the full address.',
              }),
            address_line_2: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The second line of the address, for example, a suite or apartment number.',
              }),
            admin_area_2: z
              .string()
              .max(120)
              .exactOptional()
              .openapi({
                description: 'A city, town, or village. Smaller than `admin_area_level_1`.',
              }),
            admin_area_1: z
              .string()
              .max(300)
              .exactOptional()
              .openapi({
                description:
                  'The highest-level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. This data is formatted for postal delivery, for example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A *kanton*.</li></ul>',
              }),
            postal_code: z
              .string()
              .max(60)
              .exactOptional()
              .openapi({
                description:
                  'The postal code, which is the ZIP code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).',
              }),
            country_code: CountryCodeSchema,
          })
          .exactOptional()
          .openapi({
            description:
              'The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).',
            title: 'Portable Postal Address (Medium-Grained)',
            required: ['country_code'],
          }),
        attributes: CardAttributesSchema.exactOptional().openapi({
          description: 'Additional attributes associated with the use of this card.',
        }),
      })
      .exactOptional()
      .openapi({
        title: 'Card',
        description: 'The payment card to use to fund a payment. Can be a credit or debit card.',
        required: [],
      }),
  })
  .openapi({
    title: 'Payment Source',
    description:
      'The payment source definition. To be eligible to create subscription using debit or credit card, you will need to sign up here (https://www.paypal.com/bizsignup/entry/product/ppcp). Please note, its available only for non-3DS cards and for merchants in US and AU regions.',
    required: [],
  })
  .openapi('PaymentSource')

const PaymentSourceResponseSchema = z
  .object({ card: CardResponseWithBillingAddressSchema.exactOptional() })
  .openapi({
    title: 'Payment Source Response',
    description: 'The payment source used to fund the payment.',
    required: [],
  })
  .openapi('PaymentSourceResponse')

const PercentageSchema = z
  .string()
  .regex(/^((-?[0-9]+)|(-?([0-9]+)?[.][0-9]+))$/)
  .openapi({
    description:
      'The percentage, as a fixed-point, signed decimal number. For example, define a 19.99% interest rate as `19.99`.',
  })
  .openapi('Percentage')

const TaxesSchema = z
  .object({
    percentage: PercentageSchema.openapi({
      description: 'The tax percentage on the billing amount.',
    }),
    inclusive: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Indicates whether the tax was already included in the billing amount.',
      }),
  })
  .openapi({ title: 'Taxes', description: 'The tax details.', required: ['percentage'] })
  .openapi('Taxes')

const PlanSchema = z
  .object({
    id: z
      .string()
      .regex(/^P-[A-Z0-9]*$/)
      .length(26)
      .exactOptional()
      .openapi({ description: 'The unique PayPal-generated ID for the plan.', readOnly: true }),
    product_id: z
      .string()
      .regex(/^PROD-[A-Z0-9]*$/)
      .length(22)
      .exactOptional()
      .openapi({ description: 'The ID for the product.' }),
    name: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({ description: 'The plan name.' }),
    status: z
      .enum(['CREATED', 'INACTIVE', 'ACTIVE'])
      .exactOptional()
      .openapi({
        description: 'The plan status.',
        'x-enumDescriptions': [
          {
            value: 'CREATED',
            description:
              'The plan was created. You cannot create subscriptions for a plan in this state.',
          },
          { value: 'INACTIVE', description: 'The plan is inactive.' },
          {
            value: 'ACTIVE',
            description:
              'The plan is active. You can only create subscriptions for a plan in this state.',
          },
        ],
      }),
    description: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({ description: 'The detailed description of the plan.' }),
    billing_cycles: BillingCycleListSchema.exactOptional(),
    payment_preferences: PaymentPreferencesSchema.exactOptional(),
    taxes: TaxesSchema.exactOptional(),
    quantity_supported: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates whether you can subscribe to this plan by providing a quantity for the goods or service.',
      }),
    create_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the plan was created, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      readOnly: true,
    }),
    update_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the plan was last updated, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      readOnly: true,
    }),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({ title: 'Plan', description: 'The plan details.', required: [] })
  .openapi('Plan')

const PlanListSchema = z
  .array(PlanSchema)
  .min(0)
  .max(32767)
  .openapi({ description: 'An array of plans.' })
  .openapi('PlanList')

const PlanCollectionSchema = z
  .object({
    plans: PlanListSchema.exactOptional(),
    total_items: z
      .int()
      .min(0)
      .max(500000000)
      .exactOptional()
      .openapi({ description: 'The total number of items.' }),
    total_pages: z
      .int()
      .min(0)
      .max(100000000)
      .exactOptional()
      .openapi({ description: 'The total number of pages.' }),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Plan Collection',
    description: 'The list of plans with details.',
    required: [],
  })
  .openapi('PlanCollection')

const TaxesOverrideSchema = z
  .object({
    percentage: PercentageSchema.exactOptional().openapi({
      description: 'The tax percentage on the billing amount.',
    }),
    inclusive: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the tax was already included in the billing amount.',
      }),
  })
  .openapi({ title: 'Taxes Override', description: 'The tax details.', required: [] })
  .openapi('TaxesOverride')

const PlanOverrideSchema = z
  .object({
    billing_cycles: BillingCycleOverrideListSchema.exactOptional(),
    payment_preferences: PaymentPreferencesOverrideSchema.exactOptional(),
    taxes: TaxesOverrideSchema.exactOptional(),
  })
  .openapi({
    title: 'Plan Override',
    description:
      'An inline plan object to customise the subscription. You can override plan level default attributes by providing customised values for the subscription in this object.',
    required: [],
  })
  .openapi('PlanOverride')

const PlanRequestPOSTSchema = z
  .object({
    product_id: z
      .string()
      .regex(/^PROD-[A-Z0-9]*$/)
      .length(22)
      .openapi({ description: 'The ID of the product created through Catalog Products API.' }),
    name: z.string().regex(/^.*$/).min(1).max(127).openapi({ description: 'The plan name.' }),
    status: z
      .enum(['CREATED', 'INACTIVE', 'ACTIVE'])
      .default('ACTIVE')
      .exactOptional()
      .openapi({
        description: 'The initial state of the plan. Allowed input values are CREATED and ACTIVE.',
        'x-enumDescriptions': [
          {
            value: 'CREATED',
            description:
              'The plan was created. You cannot create subscriptions for a plan in this state.',
          },
          { value: 'INACTIVE', description: 'The plan is inactive.' },
          {
            value: 'ACTIVE',
            description:
              'The plan is active. You can only create subscriptions for a plan in this state.',
          },
        ],
      }),
    description: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({ description: 'The detailed description of the plan.' }),
    billing_cycles: BillingCycleListSchema,
    payment_preferences: PaymentPreferencesSchema,
    taxes: TaxesSchema.exactOptional(),
    quantity_supported: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Indicates whether you can subscribe to this plan by providing a quantity for the goods or service.',
      }),
  })
  .openapi({
    title: 'Create Plan Request',
    description: 'The create plan request details.',
    required: ['name', 'billing_cycles', 'payment_preferences', 'product_id'],
  })
  .openapi('PlanRequestPOST')

const PlansActivate_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('USER_ACCOUNT_CLOSED').exactOptional(),
              description: z.literal('User account locked or closed.').exactOptional(),
            })
            .openapi({ title: 'USER_ACCOUNT_CLOSED', required: [] }),
          z
            .object({
              issue: z.literal('PLAN_STATUS_INVALID').exactOptional(),
              description: z
                .literal(
                  'Invalid plan status for activate action; plan status should be either created or inactive.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'PLAN_STATUS_INVALID', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlansActivate_422')

const PlansCreate_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('The value of a field does not conform to the expected format.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_VALUE').exactOptional(),
              description: z.literal('The value of a field is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_REQUIRED_PARAMETER').exactOptional(),
              description: z.literal('A required field is missing.').exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUIRED_PARAMETER', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MIN_LENGTH').exactOptional(),
              description: z.literal('The value of a field is too short.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MIN_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z.literal('The value of a field is too long.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_INTEGER_MIN_VALUE').exactOptional(),
              description: z.literal('The integer value of a field is too small.').exactOptional(),
            })
            .openapi({ title: 'INVALID_INTEGER_MIN_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_INTEGER_MAX_VALUE').exactOptional(),
              description: z.literal('The integer value of a field is too large.').exactOptional(),
            })
            .openapi({ title: 'INVALID_INTEGER_MAX_VALUE', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlansCreate_400')

const PlansDeactivate_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('USER_ACCOUNT_CLOSED').exactOptional(),
              description: z.literal('User account locked or closed.').exactOptional(),
            })
            .openapi({ title: 'USER_ACCOUNT_CLOSED', required: [] }),
          z
            .object({
              issue: z.literal('PLAN_STATUS_INVALID').exactOptional(),
              description: z
                .literal('Invalid plan status for deactivate action; plan status should be active.')
                .exactOptional(),
            })
            .openapi({ title: 'PLAN_STATUS_INVALID', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlansDeactivate_422')

const PlansPatch_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('UNSUPPORTED_PATCH_OPERATION').exactOptional(),
              description: z
                .literal('The specified patch operation not supported for this field.')
                .exactOptional(),
            })
            .openapi({ title: 'UNSUPPORTED_PATCH_OPERATION', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PATCH_PATH').exactOptional(),
              description: z.literal('The specified field cannot be patched.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PATCH_PATH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PATCH_PATH').exactOptional(),
              description: z
                .literal('Multiple operations on the same field are not allowed.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PATCH_PATH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('The value of a field does not conform to the expected format.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_VALUE').exactOptional(),
              description: z.literal('The value of a field is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_VALUE').exactOptional(),
              description: z
                .literal("The field is not eligible for '$value' patch operation.")
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_VALUE', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlansPatch_400')

const PlansPatch_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('USER_ACCOUNT_CLOSED').exactOptional(),
              description: z.literal('User account locked or closed.').exactOptional(),
            })
            .openapi({ title: 'USER_ACCOUNT_CLOSED', required: [] }),
          z
            .object({
              issue: z.literal('PLAN_STATUS_INACTIVE').exactOptional(),
              description: z
                .literal('Status update is the only patchable filed on an inactive plan.')
                .exactOptional(),
            })
            .openapi({ title: 'PLAN_STATUS_INACTIVE', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlansPatch_422')

const PlansUpdatePricingSchemes_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_VALUE').exactOptional(),
              description: z.literal('The value of a field is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_REQUIRED_PARAMETER').exactOptional(),
              description: z.literal('A required field is missing.').exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUIRED_PARAMETER', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlansUpdatePricingSchemes_400')

const PlansUpdatePricingSchemes_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('CURRENCY_MISMATCH').exactOptional(),
              description: z
                .literal("The currency code is different from the plan's currency code.")
                .exactOptional(),
            })
            .openapi({ title: 'CURRENCY_MISMATCH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_BILLING_CYCLE_SEQUENCE').exactOptional(),
              description: z
                .literal('The provided billing cycle sequence is not available.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_BILLING_CYCLE_SEQUENCE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_SCHEME').exactOptional(),
              description: z
                .literal(
                  'The new pricing scheme should be of the same type as that of the old one.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_SCHEME', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_TIER_AMOUNT').exactOptional(),
              description: z.literal('Free tiers are not supported.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_TIER_AMOUNT', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_PRICING_SCHEME_TIERS').exactOptional(),
              description: z.literal('Tier(s) are missing for some quantities.').exactOptional(),
            })
            .openapi({ title: 'MISSING_PRICING_SCHEME_TIERS', required: [] }),
          z
            .object({
              issue: z.literal('OVERLAPPING_PRICING_SCHEME_TIERS').exactOptional(),
              description: z
                .literal('The specified quantity overlaps with multiple pricing tiers.')
                .exactOptional(),
            })
            .openapi({ title: 'OVERLAPPING_PRICING_SCHEME_TIERS', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_MODEL').exactOptional(),
              description: z
                .literal('The specified pricing model is not supported for trial billing cycle.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_MODEL', required: [] }),
          z
            .object({
              issue: z.literal('FIXED_PRICE_NOT_SUPPORTED').exactOptional(),
              description: z
                .literal('Fixed price is not supported for tiered pricing schemes.')
                .exactOptional(),
            })
            .openapi({ title: 'FIXED_PRICE_NOT_SUPPORTED', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_TIER_QUANTITY').exactOptional(),
              description: z
                .literal('Tier starting quantity must be less than ending quantity.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_TIER_QUANTITY', required: [] }),
          z
            .object({
              issue: z.literal('PRICING_SCHEME_UPDATE_NOT_ALLOWED').exactOptional(),
              description: z
                .literal('Pricing scheme update is not allowed for the plan.')
                .exactOptional(),
            })
            .openapi({ title: 'PRICING_SCHEME_UPDATE_NOT_ALLOWED', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PlansUpdatePricingSchemes_422')

const ShippingTypeSchema = z
  .enum(['SHIPPING', 'PICKUP', 'PICKUP_IN_STORE', 'PICKUP_FROM_PERSON'])
  .openapi({
    title: 'Shipping Type',
    description: 'A classification for the method of purchase fulfillment.',
    'x-enumDescriptions': [
      {
        value: 'SHIPPING',
        description: 'The payer intends to receive the items at a specified address.',
        default: true,
      },
      {
        value: 'PICKUP',
        description:
          "DEPRECATED. To ensure that seller protection is correctly assigned, please use 'PICKUP_IN_STORE' or 'PICKUP_FROM_PERSON' instead. Currently, this field indicates that the payer intends to pick up the items at a specified address (ie. a store address). ",
      },
      {
        value: 'PICKUP_IN_STORE',
        description:
          'The payer intends to pick up the item(s) from the payee\'s physical store. Also termed as BOPIS, "Buy Online, Pick-up in Store". Seller protection is provided with this option.',
      },
      {
        value: 'PICKUP_FROM_PERSON',
        description:
          'The payer intends to pick up the item(s) from the payee in person. Also termed as BOPIP, "Buy Online, Pick-up in Person". Seller protection is not available, since the payer is receiving the item from the payee in person, and can validate the item prior to payment.',
      },
    ],
  })
  .openapi('ShippingType')

const ShippingOptionSchema = z
  .object({
    id: z
      .string()
      .max(127)
      .openapi({ description: 'A unique ID that identifies a payer-selected shipping option.' }),
    label: z
      .string()
      .max(127)
      .openapi({
        description:
          "A description that the payer sees, which helps them choose an appropriate shipping option. For example, `Free Shipping`, `USPS Priority Shipping`, `Expédition prioritaire USPS`, or `USPS yōuxiān fā huò`. Localize this description to the payer's locale.",
      }),
    type: ShippingTypeSchema.exactOptional().openapi({
      description: 'A classification for the method of purchase fulfillment.',
    }),
    amount: MoneySchema.exactOptional().openapi({
      description: 'The shipping cost for the selected option.',
    }),
    selected: z
      .boolean()
      .openapi({
        description:
          'If the API request sets `selected = true`, it represents the shipping option that the payee or merchant expects to be pre-selected for the payer when they first view the `shipping.options` in the PayPal Checkout experience. As part of the response if a `shipping.option` contains `selected=true`, it represents the shipping option that the payer selected during the course of checkout with PayPal. Only one `shipping.option` can be set to `selected=true`.',
      }),
  })
  .openapi({
    title: 'Shipping Option',
    description:
      'The options that the payee or merchant offers to the payer to ship or pick up their items.',
    required: ['id', 'label', 'selected'],
  })
  .openapi('ShippingOption')

const ShippingOptionListSchema = z
  .array(ShippingOptionSchema)
  .min(0)
  .max(10)
  .openapi({
    description:
      'An array of shipping options that the payee or merchant offers to the payer to ship or pick up their items.',
  })
  .openapi('ShippingOptionList')

const ShippingDetailSchema = z
  .object({
    name: z
      .object({
        full_name: z
          .string()
          .max(300)
          .exactOptional()
          .openapi({ description: "When the party is a person, the party's full name." }),
      })
      .exactOptional()
      .openapi({ description: 'The name of the party.', title: 'Name', required: [] }),
    type: z
      .enum(['SHIPPING', 'PICKUP_IN_PERSON', 'PICKUP_IN_STORE', 'PICKUP_FROM_PERSON'])
      .exactOptional()
      .openapi({
        title: 'Fullfillment Type',
        description:
          'A classification for the method of purchase fulfillment (e.g shipping, in-store pickup, etc). Either `type` or `options` may be present, but not both.',
        'x-enumDescriptions': [
          {
            value: 'SHIPPING',
            description: 'The payer intends to receive the items at a specified address.',
            default: true,
          },
          {
            value: 'PICKUP_IN_PERSON',
            description: 'DEPRECATED. Please use "PICKUP_FROM_PERSON" instead.',
          },
          {
            value: 'PICKUP_IN_STORE',
            description:
              'The payer intends to pick up the item(s) from the payee\'s physical store. Also termed as BOPIS, "Buy Online, Pick-up in Store". Seller protection is provided with this option.',
          },
          {
            value: 'PICKUP_FROM_PERSON',
            description:
              'The payer intends to pick up the item(s) from the payee in person. Also termed as BOPIP, "Buy Online, Pick-up in Person". Seller protection is not available, since the payer is receiving the item from the payee in person, and can validate the item prior to payment.',
          },
        ],
      }),
    options: ShippingOptionListSchema.exactOptional(),
    address: z
      .object({
        address_line_1: z
          .string()
          .max(300)
          .exactOptional()
          .openapi({
            description:
              'The first line of the address, such as number and street, for example, `173 Drury Lane`. Needed for data entry, and Compliance and Risk checks. This field needs to pass the full address.',
          }),
        address_line_2: z
          .string()
          .max(300)
          .exactOptional()
          .openapi({
            description:
              'The second line of the address, for example, a suite or apartment number.',
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
              'The highest-level sub-division in a country, which is usually a province, state, or ISO-3166-2 subdivision. This data is formatted for postal delivery, for example, `CA` and not `California`. Value, by country, is:<ul><li>UK. A county.</li><li>US. A state.</li><li>Canada. A province.</li><li>Japan. A prefecture.</li><li>Switzerland. A *kanton*.</li></ul>',
          }),
        postal_code: z
          .string()
          .max(60)
          .exactOptional()
          .openapi({
            description:
              'The postal code, which is the ZIP code or equivalent. Typically required for countries with a postal code or an equivalent. See [postal code](https://en.wikipedia.org/wiki/Postal_code).',
          }),
        country_code: CountryCodeSchema,
      })
      .exactOptional()
      .openapi({
        description:
          'The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute).',
        title: 'Portable Postal Address (Medium-Grained)',
        required: ['country_code'],
      }),
  })
  .openapi({ description: 'The shipping details.', title: 'Shipping Details', required: [] })
  .openapi('ShippingDetail')

const SubscriberSchema = PayerBaseSchema.and(
  z
    .object({
      name: z
        .object({
          given_name: z
            .string()
            .max(140)
            .exactOptional()
            .openapi({
              description: "When the party is a person, the party's given, or first, name.",
            }),
          surname: z
            .string()
            .max(140)
            .exactOptional()
            .openapi({
              description:
                "When the party is a person, the party's surname or family name. Also known as the last name. Required when the party is a person. Use also to store multiple surnames including the matronymic, or mother's, surname.",
            }),
        })
        .exactOptional()
        .openapi({ description: 'The name of the party.', title: 'Name', required: [] }),
      phone: PhoneWithTypeSchema.exactOptional().openapi({
        description:
          'The phone number of the customer. Available only when you enable the **Contact Telephone Number** option in the <a href="https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-website-payments">**Profile & Settings**</a> for the merchant\'s PayPal account. The `phone.phone_number` supports only `national_number`.',
      }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .object({})
      .openapi({
        title: 'Payer',
        description:
          'The customer who approves and pays for the order. The customer is also known as the payer.',
      }),
  )
  .and(
    z
      .object({
        shipping_address: ShippingDetailSchema.exactOptional(),
        payment_source: PaymentSourceResponseSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .and(
    z
      .object({})
      .openapi({
        title: 'Subscriber Response Information',
        description: 'The subscriber response information.',
      }),
  )
  .openapi('Subscriber')

const SubscriberRequestSchema = PayerBaseSchema.and(
  z
    .object({
      name: z
        .object({
          given_name: z
            .string()
            .max(140)
            .exactOptional()
            .openapi({
              description: "When the party is a person, the party's given, or first, name.",
            }),
          surname: z
            .string()
            .max(140)
            .exactOptional()
            .openapi({
              description:
                "When the party is a person, the party's surname or family name. Also known as the last name. Required when the party is a person. Use also to store multiple surnames including the matronymic, or mother's, surname.",
            }),
        })
        .exactOptional()
        .openapi({ description: 'The name of the party.', title: 'Name', required: [] }),
      phone: PhoneWithTypeSchema.exactOptional().openapi({
        description:
          'The phone number of the customer. Available only when you enable the **Contact Telephone Number** option in the <a href="https://www.paypal.com/cgi-bin/customerprofileweb?cmd=_profile-website-payments">**Profile & Settings**</a> for the merchant\'s PayPal account. The `phone.phone_number` supports only `national_number`.',
      }),
    })
    .openapi({ required: [] }),
)
  .and(
    z
      .object({})
      .openapi({
        title: 'Payer',
        description:
          'The customer who approves and pays for the order. The customer is also known as the payer.',
      }),
  )
  .and(
    z
      .object({
        shipping_address: ShippingDetailSchema.exactOptional(),
        payment_source: PaymentSourceSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .and(
    z
      .object({})
      .openapi({
        title: 'Subscriber Request Information',
        description: 'The subscriber request information .',
      }),
  )
  .openapi('SubscriberRequest')

const SubscriptionStatusSchema = z
  .object({
    status: z
      .enum(['APPROVAL_PENDING', 'APPROVED', 'ACTIVE', 'SUSPENDED', 'CANCELLED', 'EXPIRED'])
      .exactOptional()
      .openapi({
        description: 'The status of the subscription.',
        'x-enumDescriptions': [
          {
            value: 'APPROVAL_PENDING',
            description: 'The subscription is created but not yet approved by the buyer.',
          },
          { value: 'APPROVED', description: 'The buyer has approved the subscription.' },
          { value: 'ACTIVE', description: 'The subscription is active.' },
          { value: 'SUSPENDED', description: 'The subscription is suspended.' },
          { value: 'CANCELLED', description: 'The subscription is cancelled.' },
          { value: 'EXPIRED', description: 'The subscription is expired.' },
        ],
      }),
    status_change_note: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(128)
      .exactOptional()
      .openapi({ description: 'The reason or notes for the status of the subscription.' }),
    status_update_time: DateTimeSchema.exactOptional().openapi({ readOnly: true }),
  })
  .openapi({
    title: 'Subscription Status',
    description: 'The subscription status details.',
    required: [],
  })
  .openapi('SubscriptionStatus')

const SubscriptionBillingInfoSchema = z
  .object({
    outstanding_balance: MoneySchema.openapi({
      description: 'The total pending bill amount, to be paid by the subscriber.',
    }),
    cycle_executions: CycleExecutionListSchema.exactOptional(),
    last_payment: LastPaymentDetailsSchema.exactOptional().openapi({
      readOnly: true,
      description: 'The details for the last payment of the subscription.',
    }),
    next_billing_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The next date and time for billing this subscription, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      readOnly: true,
    }),
    final_payment_time: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the final billing cycle occurs, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      readOnly: true,
    }),
    failed_payments_count: z
      .int()
      .min(0)
      .max(999)
      .openapi({
        description:
          'The number of consecutive payment failures. Resets to `0` after a successful payment. If this reaches the `payment_failure_threshold` value, the subscription updates to the `SUSPENDED` state.',
        readOnly: true,
      }),
    last_failed_payment: FailedPaymentDetailsSchema.exactOptional().openapi({
      description: 'The details for the last failed payment of the subscription.',
      readOnly: true,
    }),
  })
  .openapi({
    title: 'Subscription Billing Information',
    description:
      'The billing details for the subscription. If the subscription was or is active, these fields are populated.',
    required: ['outstanding_balance', 'failed_payments_count'],
  })
  .openapi('SubscriptionBillingInfo')

const SubscriptionSchema = SubscriptionStatusSchema.and(z.any())
  .and(
    z
      .object({
        id: z
          .string()
          .min(3)
          .max(50)
          .exactOptional()
          .openapi({
            description: 'The PayPal-generated ID for the subscription.',
            readOnly: true,
          }),
        plan_id: z
          .string()
          .min(3)
          .max(50)
          .exactOptional()
          .openapi({ description: 'The ID of the plan.' }),
        start_time: DateTimeSchema.exactOptional(),
        quantity: z
          .string()
          .regex(/^([0-9]+|([0-9]+)?[.][0-9]+)$/)
          .min(1)
          .max(32)
          .exactOptional()
          .openapi({ description: 'The quantity of the product in the subscription.' }),
        shipping_amount: MoneySchema.exactOptional(),
        subscriber: SubscriberSchema.exactOptional(),
        billing_info: SubscriptionBillingInfoSchema.exactOptional().openapi({ readOnly: true }),
        create_time: DateTimeSchema.exactOptional().openapi({ readOnly: true }),
        update_time: DateTimeSchema.exactOptional().openapi({ readOnly: true }),
        custom_id: z
          .string()
          .regex(/^[\x20-\x7E]+/)
          .min(1)
          .max(127)
          .exactOptional()
          .openapi({ description: 'The custom id for the subscription. Can be invoice id.' }),
        plan_overridden: z
          .boolean()
          .exactOptional()
          .openapi({
            description: 'Indicates whether the subscription has overridden any plan attributes.',
            readOnly: true,
          }),
        plan: z
          .object({
            product_id: z
              .string()
              .regex(/^PROD-[A-Z0-9]*$/)
              .length(22)
              .exactOptional()
              .openapi({ description: 'The ID for the product.' }),
            name: z
              .string()
              .regex(/^.*$/)
              .min(1)
              .max(127)
              .exactOptional()
              .openapi({ description: 'The plan name.' }),
            description: z
              .string()
              .regex(/^.*$/)
              .min(1)
              .max(127)
              .exactOptional()
              .openapi({ description: 'The detailed description of the plan.' }),
            billing_cycles: BillingCycleListSchema.exactOptional(),
            payment_preferences: PaymentPreferencesSchema.exactOptional(),
            taxes: TaxesSchema.exactOptional(),
            quantity_supported: z
              .boolean()
              .default(false)
              .exactOptional()
              .openapi({
                description:
                  'Indicates whether you can subscribe to this plan by providing a quantity for the goods or service.',
              }),
          })
          .exactOptional()
          .openapi({ description: 'The plan details.', title: 'Plan', required: [] }),
        links: LinkDescriptionListSchema.exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .and(z.object({}).openapi({ title: 'Subscription', description: 'The subscription details.' }))
  .openapi('Subscription')

const SubscriptionActivateRequestSchema = z
  .object({
    reason: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(128)
      .exactOptional()
      .openapi({
        description:
          'The reason for activation of a subscription. Required to reactivate the subscription.',
      }),
  })
  .openapi({
    title: 'Activate Subscription Request',
    description: 'The activate subscription request details.',
    required: [],
  })
  .openapi('SubscriptionActivateRequest')

const SubscriptionCancelRequestSchema = z
  .object({
    reason: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(128)
      .openapi({ description: 'The reason for the cancellation of a subscription.' }),
  })
  .openapi({
    title: 'Cancel Subscription Request',
    description: 'The cancel subscription request details.',
    required: ['reason'],
  })
  .openapi('SubscriptionCancelRequest')

const SubscriptionCaptureRequestSchema = z
  .object({
    note: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(128)
      .openapi({ description: 'The reason or note for the subscription charge.' }),
    capture_type: z
      .literal('OUTSTANDING_BALANCE')
      .openapi({
        description: 'The type of capture.',
        'x-enumDescriptions': [
          {
            value: 'OUTSTANDING_BALANCE',
            description: 'The outstanding balance that the subscriber must clear.',
          },
        ],
      }),
    amount: MoneySchema.openapi({
      description:
        'The amount of the outstanding balance. This value cannot be greater than the current outstanding balance amount.',
    }),
  })
  .openapi({
    title: 'Charge Amount from Subscriber',
    description: 'The charge amount from the subscriber.',
    required: ['note', 'capture_type', 'amount'],
  })
  .openapi('SubscriptionCaptureRequest')

const SubscriptionRequestPostSchema = z
  .object({
    plan_id: z
      .string()
      .regex(/^P-[A-Z0-9]*$/)
      .length(26)
      .openapi({ description: 'The ID of the plan.' }),
    start_time: DateTimeSchema.default('Current time')
      .exactOptional()
      .openapi({
        description:
          'The date and time when the subscription started, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      }),
    quantity: z
      .string()
      .regex(/^([0-9]+|([0-9]+)?[.][0-9]+)$/)
      .min(1)
      .max(32)
      .exactOptional()
      .openapi({ description: 'The quantity of the product in the subscription.' }),
    shipping_amount: MoneySchema.exactOptional().openapi({ description: 'The shipping charges.' }),
    subscriber: SubscriberRequestSchema.exactOptional(),
    auto_renewal: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'DEPRECATED. Indicates whether the subscription auto-renews after the billing cycles complete.',
        deprecated: true,
      }),
    application_context: ApplicationContextSchema.exactOptional(),
    custom_id: z
      .string()
      .regex(/^[\x20-\x7E]+/)
      .min(1)
      .max(127)
      .exactOptional()
      .openapi({ description: 'The custom id for the subscription. Can be invoice id.' }),
    plan: PlanOverrideSchema.exactOptional().openapi({
      description:
        'An inline plan object to customise the subscription. You can override plan level default attributes by providing customised values for the subscription in this object.',
    }),
    merchant_inventory: MerchantInventorySchema.exactOptional().openapi({
      description: "Merchant's inventory identifier details for the WPS hosted button.",
    }),
  })
  .openapi({
    title: 'Create Subscription Request',
    description: 'The create subscription request details.',
    required: ['plan_id'],
  })
  .openapi('SubscriptionRequestPost')

const SubscriptionReviseRequestSchema = z
  .object({
    plan_id: z
      .string()
      .regex(/^P-[A-Z0-9]*$/)
      .length(26)
      .exactOptional()
      .openapi({ description: 'The unique PayPal-generated ID for the plan.' }),
    quantity: z
      .string()
      .regex(/^([0-9]+|([0-9]+)?[.][0-9]+)$/)
      .min(1)
      .max(32)
      .exactOptional()
      .openapi({ description: 'The quantity of the product or service in the subscription.' }),
    shipping_amount: MoneySchema.exactOptional().openapi({ description: 'The shipping charges.' }),
    shipping_address: ShippingDetailSchema.exactOptional().openapi({
      description: 'The shipping address of the subscriber.',
    }),
    application_context: z
      .object({
        brand_name: z
          .string()
          .regex(/^.*$/)
          .min(1)
          .max(127)
          .exactOptional()
          .openapi({
            description:
              'The label that overrides the business name in the PayPal account on the PayPal site.',
          }),
        locale: LanguageSchema.exactOptional().openapi({
          description:
            'The BCP 47-formatted locale of pages that the PayPal payment experience shows. PayPal supports a five-character code. For example, `da-DK`, `he-IL`, `id-ID`, `ja-JP`, `no-NO`, `pt-BR`, `ru-RU`, `sv-SE`, `th-TH`, `zh-CN`, `zh-HK`, or `zh-TW`.',
        }),
        shipping_preference: z
          .enum(['GET_FROM_FILE', 'NO_SHIPPING', 'SET_PROVIDED_ADDRESS'])
          .default('GET_FROM_FILE')
          .exactOptional()
          .openapi({
            description: 'The location from which the shipping address is derived.',
            'x-enumDescriptions': [
              {
                value: 'GET_FROM_FILE',
                description: 'Get the customer-provided shipping address on the PayPal site.',
                default: true,
              },
              {
                value: 'NO_SHIPPING',
                description:
                  'Redacts the shipping address from the PayPal site. Recommended for digital goods.',
              },
              {
                value: 'SET_PROVIDED_ADDRESS',
                description:
                  'Get the merchant-provided address. The customer cannot change this address on the PayPal site. If merchant does not pass an address, customer can choose the address on PayPal pages.',
              },
            ],
          }),
        payment_method: z
          .object({ payee_preferred: PayeePaymentMethodPreferenceSchema.exactOptional() })
          .exactOptional()
          .openapi({
            description: 'The customer and merchant payment preferences.',
            title: 'Payment Method',
            required: [],
          }),
        return_url: z
          .url()
          .min(10)
          .max(4000)
          .openapi({
            description:
              'The URL where the customer is redirected after the customer approves the payment.',
          }),
        cancel_url: z
          .url()
          .min(10)
          .max(4000)
          .openapi({
            description:
              'The URL where the customer is redirected after the customer cancels the payment.',
          }),
      })
      .exactOptional()
      .openapi({
        title: 'Application Context',
        description:
          'The application context, which customizes the payer experience during the subscription approval process with PayPal.',
        required: ['return_url', 'cancel_url'],
      }),
    plan: PlanOverrideSchema.exactOptional().openapi({
      description:
        'An inline plan object to customise the subscription. You can override plan level default attributes by providing customised values for the subscription in this object. Any existing overrides will not be carried forward during subscription revise.',
    }),
  })
  .openapi({
    title: 'Subscription Modify Plan Request',
    description:
      "The request to update the quantity of the product or service in a subscription. You can also use this method to switch the plan and update the `shipping_amount` and `shipping_address` values for the subscription. This type of update requires the buyer's consent.",
    required: [],
  })
  .openapi('SubscriptionReviseRequest')

const SubscriptionReviseResponseDefinitionsLinkDescriptionListSchema = z
  .array(LinkDescriptionSchema)
  .openapi({
    description:
      'An array of request-related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links).',
    readOnly: true,
  })
  .openapi('SubscriptionReviseResponseDefinitionsLinkDescriptionList')

const SubscriptionReviseResponseSchema = z
  .object({
    plan_id: z
      .string()
      .regex(/^P-[A-Z0-9]*$/)
      .length(26)
      .exactOptional()
      .openapi({ description: 'The unique PayPal-generated ID for the plan.' }),
    quantity: z
      .string()
      .regex(/^([0-9]+|([0-9]+)?[.][0-9]+)$/)
      .min(1)
      .max(32)
      .exactOptional()
      .openapi({ description: 'The quantity of the product or service in the subscription.' }),
    shipping_amount: MoneySchema.exactOptional().openapi({ description: 'The shipping charges.' }),
    shipping_address: ShippingDetailSchema.exactOptional().openapi({
      description: 'The shipping address of the subscriber.',
    }),
    plan: PlanOverrideSchema.exactOptional().openapi({
      description:
        'An inline plan object to customise the subscription. You can override plan level default attributes by providing customised values for the subscription in this object. Any existing overrides will not be carried forward during subscription revise.',
    }),
    plan_overridden: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the subscription has overridden any plan attributes.',
        readOnly: true,
      }),
    links: SubscriptionReviseResponseDefinitionsLinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'Update Product Quantity in Subscription Response',
    description:
      "The response to a request to update the quantity of the product or service in a subscription. You can also use this method to switch the plan and update the `shipping_amount` and `shipping_address` values for the subscription. This type of update requires the buyer's consent.",
    required: [],
  })
  .openapi('SubscriptionReviseResponse')

const SubscriptionSuspendRequestSchema = z
  .object({
    reason: z
      .string()
      .regex(/^.*$/)
      .min(1)
      .max(128)
      .openapi({ description: 'The reason for suspension of the Subscription.' }),
  })
  .openapi({
    title: 'Suspend Subscription',
    description: 'The suspend subscription request details.',
    required: ['reason'],
  })
  .openapi('SubscriptionSuspendRequest')

const SubscriptionsActivate_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z.literal('The value of a field is too long.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionsActivate_400')

const SubscriptionsActivate_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('USER_ACCOUNT_CLOSED').exactOptional(),
              description: z.literal('User account locked or closed.').exactOptional(),
            })
            .openapi({ title: 'USER_ACCOUNT_CLOSED', required: [] }),
          z
            .object({
              issue: z.literal('SUBSCRIPTION_STATUS_INVALID').exactOptional(),
              description: z
                .literal(
                  'Invalid subscription status for activate action; subscription status should be suspended.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'SUBSCRIPTION_STATUS_INVALID', required: [] }),
          z
            .object({
              issue: z.literal('SUBSCRIPTION_CANNOT_BE_ACTIVATED').exactOptional(),
              description: z
                .literal(
                  'Subscription cannot be activated after payment failure threshold has reached.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'SUBSCRIPTION_CANNOT_BE_ACTIVATED', required: [] }),
          z
            .object({
              issue: z.literal('SUBSCRIPTION_CANNOT_BE_ACTIVATED').exactOptional(),
              description: z
                .literal('This subscription should be activated by the system.')
                .exactOptional(),
            })
            .openapi({ title: 'SUBSCRIPTION_CANNOT_BE_ACTIVATED', required: [] }),
          z
            .object({
              issue: z.literal('SUBSCRIPTION_CANNOT_BE_ACTIVATED').exactOptional(),
              description: z
                .literal('This subscription should be activated by the merchant.')
                .exactOptional(),
            })
            .openapi({ title: 'SUBSCRIPTION_CANNOT_BE_ACTIVATED', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionsActivate_422')

const SubscriptionsCancel_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z.literal('The value of a field is too long.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionsCancel_400')

const SubscriptionsCancel_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('USER_ACCOUNT_CLOSED').exactOptional(),
              description: z.literal('User account locked or closed.').exactOptional(),
            })
            .openapi({ title: 'USER_ACCOUNT_CLOSED', required: [] }),
          z
            .object({
              issue: z.literal('SUBSCRIPTION_STATUS_INVALID').exactOptional(),
              description: z
                .literal(
                  'Invalid subscription status for cancel action; subscription status should be active or suspended.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'SUBSCRIPTION_STATUS_INVALID', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionsCancel_422')

const SubscriptionsCapture_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('MISSING_REQUEST_BODY').exactOptional(),
              description: z.literal('Request body is missing.').exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUEST_BODY', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_VALUE').exactOptional(),
              description: z.literal('The value of a field is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z.literal('The value of a field is too long.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_REQUIRED_PARAMETER').exactOptional(),
              description: z.literal('A required field is missing.').exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUIRED_PARAMETER', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionsCapture_400')

const SubscriptionsCapture_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('USER_ACCOUNT_CLOSED').exactOptional(),
              description: z.literal('User account locked or closed.').exactOptional(),
            })
            .openapi({ title: 'USER_ACCOUNT_CLOSED', required: [] }),
          z
            .object({
              issue: z.literal('SUBSCRIBER_ACCOUNT_LOCKED').exactOptional(),
              description: z.literal('Subscriber Account Locked.').exactOptional(),
            })
            .openapi({ title: 'SUBSCRIBER_ACCOUNT_LOCKED', required: [] }),
          z
            .object({
              issue: z.literal('SUBSCRIBER_ACCOUNT_CLOSED').exactOptional(),
              description: z.literal('Subscriber Account Closed.').exactOptional(),
            })
            .openapi({ title: 'SUBSCRIBER_ACCOUNT_CLOSED', required: [] }),
          z
            .object({
              issue: z.literal('SUBSCRIBER_ACCOUNT_RESTRICTED').exactOptional(),
              description: z.literal('Subscriber Account Restricted.').exactOptional(),
            })
            .openapi({ title: 'SUBSCRIBER_ACCOUNT_RESTRICTED', required: [] }),
          z
            .object({
              issue: z.literal('SUBSCRIPTION_STATUS_INVALID').exactOptional(),
              description: z
                .literal(
                  'Invalid subscription status for capture action; subscription status should be active or suspended or expired.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'SUBSCRIPTION_STATUS_INVALID', required: [] }),
          z
            .object({
              issue: z.literal('ZERO_OUTSTANDING_BALANCE').exactOptional(),
              description: z
                .literal('Current outstanding balance should be greater than zero.')
                .exactOptional(),
            })
            .openapi({ title: 'ZERO_OUTSTANDING_BALANCE', required: [] }),
          z
            .object({
              issue: z.literal('CURRENCY_MISMATCH').exactOptional(),
              description: z
                .literal("The currency code is different from the subscription's currency code.")
                .exactOptional(),
            })
            .openapi({ title: 'CURRENCY_MISMATCH', required: [] }),
          z
            .object({
              issue: z.literal('AMOUNT_GREATER_THAN_OUTSTANDING_BALANCE').exactOptional(),
              description: z
                .literal(
                  'The capture amount can not be greater than the current outstanding balance.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'AMOUNT_GREATER_THAN_OUTSTANDING_BALANCE', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionsCapture_422')

const SubscriptionsCreate_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('The value of a field does not conform to the expected format.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z.literal('The value of a field is too long.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_VALUE').exactOptional(),
              description: z.literal('The value of a field is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_INTEGER_MIN_VALUE').exactOptional(),
              description: z.literal('The integer value of a field is too small.').exactOptional(),
            })
            .openapi({ title: 'INVALID_INTEGER_MIN_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_INTEGER_MAX_VALUE').exactOptional(),
              description: z.literal('The integer value of a field is too large.').exactOptional(),
            })
            .openapi({ title: 'INVALID_INTEGER_MAX_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_VALUE').exactOptional(),
              description: z
                .literal('Start time must be a valid future date and time.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_REQUEST_BODY').exactOptional(),
              description: z.literal('Request body is missing.').exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUEST_BODY', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_REQUIRED_PARAMETER').exactOptional(),
              description: z.literal('A required field is missing.').exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUIRED_PARAMETER', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z.literal('The value of a field is too long.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionsCreate_400')

const SubscriptionsCreate_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('USER_ACCOUNT_CLOSED').exactOptional(),
              description: z.literal('User account locked or closed.').exactOptional(),
            })
            .openapi({ title: 'USER_ACCOUNT_CLOSED', required: [] }),
          z
            .object({
              issue: z.literal('PLAN_STATUS_INVALID').exactOptional(),
              description: z
                .literal(
                  'Invalid plan status for subscription creation; plan status should be active.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'PLAN_STATUS_INVALID', required: [] }),
          z
            .object({
              issue: z.literal('SUBSCRIPTION_CANNOT_HAVE_QUANTITY').exactOptional(),
              description: z
                .literal("Subscription can't have quantity as the plan does not support quantity.")
                .exactOptional(),
            })
            .openapi({ title: 'SUBSCRIPTION_CANNOT_HAVE_QUANTITY', required: [] }),
          z
            .object({
              issue: z.literal('CARD_SUBSCRIPTIONS_NOT_ENABLED').exactOptional(),
              description: z
                .literal(
                  'The account is not setup to be able to process subscriptions funded by card payments. Please contact PayPal customer support.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'CARD_SUBSCRIPTIONS_NOT_ENABLED', required: [] }),
          z
            .object({
              issue: z.literal('3DS_CARDS_NOT_SUPPORTED').exactOptional(),
              description: z
                .literal('Cards that require 3DS authentication not supported.')
                .exactOptional(),
            })
            .openapi({ title: '3DS_CARDS_NOT_SUPPORTED', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_BILLING_CYCLE_SEQUENCE').exactOptional(),
              description: z
                .literal('The provided billing cycle sequence is not available.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_BILLING_CYCLE_SEQUENCE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_SCHEME').exactOptional(),
              description: z
                .literal(
                  'The override plan pricing scheme should be of the same type as that of the original plan.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_SCHEME', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_TIER_AMOUNT').exactOptional(),
              description: z.literal('Free tiers are not supported.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_TIER_AMOUNT', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_PRICING_SCHEME_TIERS').exactOptional(),
              description: z.literal('Tier(s) are missing for some quantities.').exactOptional(),
            })
            .openapi({ title: 'MISSING_PRICING_SCHEME_TIERS', required: [] }),
          z
            .object({
              issue: z.literal('OVERLAPPING_PRICING_SCHEME_TIERS').exactOptional(),
              description: z
                .literal('The specified quantity overlaps with multiple pricing tiers.')
                .exactOptional(),
            })
            .openapi({ title: 'OVERLAPPING_PRICING_SCHEME_TIERS', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_MODEL').exactOptional(),
              description: z
                .literal('The specified pricing model is not supported for trial billing cycle.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_MODEL', required: [] }),
          z
            .object({
              issue: z.literal('FIXED_PRICE_NOT_SUPPORTED').exactOptional(),
              description: z
                .literal('Fixed price is not supported for tiered pricing schemes.')
                .exactOptional(),
            })
            .openapi({ title: 'FIXED_PRICE_NOT_SUPPORTED', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_TIER_QUANTITY').exactOptional(),
              description: z
                .literal('Tier starting quantity must be less than ending quantity.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_TIER_QUANTITY', required: [] }),
          z
            .object({
              issue: z.literal('CURRENCY_MISMATCH').exactOptional(),
              description: z
                .literal("The currency code is different from the plan's currency code.")
                .exactOptional(),
            })
            .openapi({ title: 'CURRENCY_MISMATCH', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionsCreate_422')

const SubscriptionsPatch_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('UNSUPPORTED_PATCH_OPERATION').exactOptional(),
              description: z
                .literal('The specified patch operation not supported for this field.')
                .exactOptional(),
            })
            .openapi({ title: 'UNSUPPORTED_PATCH_OPERATION', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PATCH_PATH').exactOptional(),
              description: z.literal('The specified field cannot be patched.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PATCH_PATH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PATCH_PATH').exactOptional(),
              description: z
                .literal('Multiple operations on the same field are not allowed.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PATCH_PATH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('The value of a field does not conform to the expected format.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_VALUE').exactOptional(),
              description: z.literal('The value of a field is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z.literal('The value of a field is too long.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_STRING_MIN_LENGTH').exactOptional(),
              description: z.literal('The value of a field is too short.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MIN_LENGTH', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_INTEGER_MIN_VALUE').exactOptional(),
              description: z.literal('The integer value of a field is too small.').exactOptional(),
            })
            .openapi({ title: 'INVALID_INTEGER_MIN_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_INTEGER_MAX_VALUE').exactOptional(),
              description: z.literal('The integer value of a field is too large.').exactOptional(),
            })
            .openapi({ title: 'INVALID_INTEGER_MAX_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_REQUEST_BODY').exactOptional(),
              description: z.literal('Request body is missing.').exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUEST_BODY', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_REQUIRED_PARAMETER').exactOptional(),
              description: z.literal('A required field is missing.').exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUIRED_PARAMETER', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionsPatch_400')

const SubscriptionsPatch_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('USER_ACCOUNT_CLOSED').exactOptional(),
              description: z.literal('User account locked or closed.').exactOptional(),
            })
            .openapi({ title: 'USER_ACCOUNT_CLOSED', required: [] }),
          z
            .object({
              issue: z.literal('SUBSCRIPTION_STATUS_INVALID').exactOptional(),
              description: z
                .literal(
                  'Invalid subscription status for patch action; subscription status should be either active or suspended.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'SUBSCRIPTION_STATUS_INVALID', required: [] }),
          z
            .object({
              issue: z.literal('CARD_SUBSCRIPTIONS_NOT_ENABLED').exactOptional(),
              description: z
                .literal(
                  'The account is not setup to be able to process subscriptions funded by card payments. Please contact PayPal customer support.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'CARD_SUBSCRIPTIONS_NOT_ENABLED', required: [] }),
          z
            .object({
              issue: z.literal('3DS_CARDS_NOT_SUPPORTED').exactOptional(),
              description: z
                .literal('Cards that require 3DS authentication not supported.')
                .exactOptional(),
            })
            .openapi({ title: '3DS_CARDS_NOT_SUPPORTED', required: [] }),
          z
            .object({
              issue: z.literal('BILLING_CYCLE_EXECUTION_COMPLETED').exactOptional(),
              description: z
                .literal(
                  'Update cannot be performed on a billing cycle that has completed execution.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'BILLING_CYCLE_EXECUTION_COMPLETED', required: [] }),
          z
            .object({
              issue: z.literal('AMOUNT_GREATER_THAN_OUTSTANDING_BALANCE').exactOptional(),
              description: z
                .literal(
                  'The new outstanding balance cannot be greater than the current outstanding balance.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'AMOUNT_GREATER_THAN_OUTSTANDING_BALANCE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_BILLING_TOTAL_CYCLES').exactOptional(),
              description: z
                .literal(
                  'The total cycles cannot be less than the number of billing cycles completed.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_BILLING_TOTAL_CYCLES', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_TIER_AMOUNT').exactOptional(),
              description: z.literal('Free tiers are not supported.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_TIER_AMOUNT', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_PRICING_SCHEME_TIERS').exactOptional(),
              description: z.literal('Tier(s) are missing for some quantities.').exactOptional(),
            })
            .openapi({ title: 'MISSING_PRICING_SCHEME_TIERS', required: [] }),
          z
            .object({
              issue: z.literal('OVERLAPPING_PRICING_SCHEME_TIERS').exactOptional(),
              description: z
                .literal('The specified quantity overlaps with multiple pricing tiers.')
                .exactOptional(),
            })
            .openapi({ title: 'OVERLAPPING_PRICING_SCHEME_TIERS', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_MODEL').exactOptional(),
              description: z
                .literal('The specified pricing model is not supported for trial billing cycle.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_MODEL', required: [] }),
          z
            .object({
              issue: z.literal('FIXED_PRICE_NOT_SUPPORTED').exactOptional(),
              description: z
                .literal('Fixed price is not supported for tiered pricing schemes.')
                .exactOptional(),
            })
            .openapi({ title: 'FIXED_PRICE_NOT_SUPPORTED', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_TIER_QUANTITY').exactOptional(),
              description: z
                .literal('Tier starting quantity must be less than ending quantity.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_TIER_QUANTITY', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_START_TIME').exactOptional(),
              description: z
                .literal(
                  'The start time cannot be updated for a subscription that has been activated.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_START_TIME', required: [] }),
          z
            .object({
              issue: z.literal('CURRENCY_MISMATCH').exactOptional(),
              description: z
                .literal("The currency code is different from the subscription's currency code.")
                .exactOptional(),
            })
            .openapi({ title: 'CURRENCY_MISMATCH', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionsPatch_422')

const SubscriptionsRevise_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('The value of a field does not conform to the expected format.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_VALUE').exactOptional(),
              description: z.literal('The value of a field is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_INTEGER_MIN_VALUE').exactOptional(),
              description: z.literal('The integer value of a field is too small.').exactOptional(),
            })
            .openapi({ title: 'INVALID_INTEGER_MIN_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_INTEGER_MAX_VALUE').exactOptional(),
              description: z.literal('The integer value of a field is too large.').exactOptional(),
            })
            .openapi({ title: 'INVALID_INTEGER_MAX_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_REQUEST_BODY').exactOptional(),
              description: z.literal('Request body is missing.').exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUEST_BODY', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_REQUIRED_PARAMETER').exactOptional(),
              description: z.literal('A required field is missing.').exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUIRED_PARAMETER', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionsRevise_400')

const SubscriptionsRevise_404Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_RESOURCE_ID').exactOptional(),
              description: z.literal('Requested resource ID was not found.').exactOptional(),
            })
            .openapi({ title: 'INVALID_RESOURCE_ID', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionsRevise_404')

const SubscriptionsRevise_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('USER_ACCOUNT_CLOSED').exactOptional(),
              description: z.literal('User account locked or closed.').exactOptional(),
            })
            .openapi({ title: 'USER_ACCOUNT_CLOSED', required: [] }),
          z
            .object({
              issue: z.literal('PLAN_PRODUCT_NOT_COMPATIBLE').exactOptional(),
              description: z
                .literal('The old and the new plans should be for the same product.')
                .exactOptional(),
            })
            .openapi({ title: 'PLAN_PRODUCT_NOT_COMPATIBLE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_BILLING_CYCLE_SEQUENCE').exactOptional(),
              description: z
                .literal('The provided billing cycle sequence is not available.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_BILLING_CYCLE_SEQUENCE', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_SCHEME').exactOptional(),
              description: z
                .literal(
                  'The override plan pricing scheme should be of the same type as that of the original plan.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_SCHEME', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_TIER_AMOUNT').exactOptional(),
              description: z.literal('Free tiers are not supported.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_TIER_AMOUNT', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_PRICING_SCHEME_TIERS').exactOptional(),
              description: z.literal('Tier(s) are missing for some quantities.').exactOptional(),
            })
            .openapi({ title: 'MISSING_PRICING_SCHEME_TIERS', required: [] }),
          z
            .object({
              issue: z.literal('OVERLAPPING_PRICING_SCHEME_TIERS').exactOptional(),
              description: z
                .literal('The specified quantity overlaps with multiple pricing tiers.')
                .exactOptional(),
            })
            .openapi({ title: 'OVERLAPPING_PRICING_SCHEME_TIERS', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_MODEL').exactOptional(),
              description: z
                .literal('The specified pricing model is not supported for trial billing cycle.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_MODEL', required: [] }),
          z
            .object({
              issue: z.literal('FIXED_PRICE_NOT_SUPPORTED').exactOptional(),
              description: z
                .literal('Fixed price is not supported for tiered pricing schemes.')
                .exactOptional(),
            })
            .openapi({ title: 'FIXED_PRICE_NOT_SUPPORTED', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PRICING_TIER_QUANTITY').exactOptional(),
              description: z
                .literal('Tier starting quantity must be less than ending quantity.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PRICING_TIER_QUANTITY', required: [] }),
          z
            .object({
              issue: z.literal('CURRENCY_MISMATCH').exactOptional(),
              description: z
                .literal("The currency code is different from the plan's currency code.")
                .exactOptional(),
            })
            .openapi({ title: 'CURRENCY_MISMATCH', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionsRevise_422')

const SubscriptionsSuspend_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_STRING_MAX_LENGTH').exactOptional(),
              description: z.literal('The value of a field is too long.').exactOptional(),
            })
            .openapi({ title: 'INVALID_STRING_MAX_LENGTH', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionsSuspend_400')

const SubscriptionsSuspend_422Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('USER_ACCOUNT_CLOSED').exactOptional(),
              description: z.literal('User account locked or closed.').exactOptional(),
            })
            .openapi({ title: 'USER_ACCOUNT_CLOSED', required: [] }),
          z
            .object({
              issue: z.literal('SUBSCRIPTION_STATUS_INVALID').exactOptional(),
              description: z
                .literal(
                  'Invalid subscription status for suspend action; subscription status should be active.',
                )
                .exactOptional(),
            })
            .openapi({ title: 'SUBSCRIPTION_STATUS_INVALID', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionsSuspend_422')

const SubscriptionsTransactions_400Schema = z
  .object({
    details: z
      .array(
        z.union([
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_SYNTAX').exactOptional(),
              description: z
                .literal('The value of a field does not conform to the expected format.')
                .exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_SYNTAX', required: [] }),
          z
            .object({
              issue: z.literal('INVALID_PARAMETER_VALUE').exactOptional(),
              description: z.literal('The value of a field is invalid.').exactOptional(),
            })
            .openapi({ title: 'INVALID_PARAMETER_VALUE', required: [] }),
          z
            .object({
              issue: z.literal('MISSING_REQUIRED_PARAMETER').exactOptional(),
              description: z.literal('A required field is missing.').exactOptional(),
            })
            .openapi({ title: 'MISSING_REQUIRED_PARAMETER', required: [] }),
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SubscriptionsTransactions_400')

const TransactionSchema = z
  .object({
    status: z
      .enum(['COMPLETED', 'DECLINED', 'PARTIALLY_REFUNDED', 'PENDING', 'REFUNDED', 'FAILED'])
      .exactOptional()
      .openapi({
        title: 'Capture Status',
        description: 'The status of the captured payment.',
        'x-enumDescriptions': [
          {
            value: 'COMPLETED',
            description:
              "The funds for this captured payment were credited to the payee's PayPal account.",
          },
          { value: 'DECLINED', description: 'The funds could not be captured.' },
          {
            value: 'PARTIALLY_REFUNDED',
            description:
              "An amount less than this captured payment's amount was partially refunded to the payer.",
          },
          {
            value: 'PENDING',
            description:
              "The funds for this captured payment was not yet credited to the payee's PayPal account. For more information, see <code>status.details</code>.",
          },
          {
            value: 'REFUNDED',
            description:
              "An amount greater than or equal to this captured payment's amount was refunded to the payer.",
          },
          { value: 'FAILED', description: 'There was an error while capturing payment.' },
        ],
        readOnly: true,
      }),
    id: z
      .string()
      .min(3)
      .max(50)
      .openapi({ description: 'The PayPal-generated transaction ID.', readOnly: true }),
    amount_with_breakdown: AmountWithBreakdownSchema,
    payer_name: NameSchema.exactOptional().openapi({
      description: 'The name of the customer.',
      readOnly: true,
    }),
    payer_email: EmailAddressSchema.exactOptional().openapi({
      description: 'The email ID of the customer.',
      readOnly: true,
    }),
    time: DateTimeSchema.openapi({
      description:
        'The date and time when the transaction was processed, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6).',
      readOnly: true,
    }),
  })
  .openapi({
    title: 'Transaction Details',
    description: 'The transaction details.',
    required: ['id', 'amount_with_breakdown', 'time'],
  })
  .openapi('Transaction')

const TransactionListSchema = z
  .array(TransactionSchema)
  .min(0)
  .max(32767)
  .openapi({ description: 'An array of transactions.' })
  .openapi('TransactionList')

const TransactionsListSchema = z
  .object({
    transactions: TransactionListSchema.exactOptional(),
    total_items: z
      .int()
      .min(0)
      .max(500000000)
      .exactOptional()
      .openapi({ description: 'The total number of items.' }),
    total_pages: z
      .int()
      .min(0)
      .max(100000000)
      .exactOptional()
      .openapi({ description: 'The total number of pages.' }),
    links: LinkDescriptionListSchema.exactOptional(),
  })
  .openapi({
    title: 'List Transactions',
    description: 'The list transactions for a subscription request details.',
    required: [],
  })
  .openapi('TransactionsList')

const UpdatePricingSchemeRequestSchema = z
  .object({
    billing_cycle_sequence: z
      .int()
      .min(1)
      .max(99)
      .openapi({ description: 'The billing cycle sequence.' }),
    pricing_scheme: PricingSchemeSchema,
  })
  .openapi({
    title: 'Update Pricing Scheme',
    description: 'The update pricing scheme request details.',
    required: ['billing_cycle_sequence', 'pricing_scheme'],
  })
  .openapi('UpdatePricingSchemeRequest')

const UpdatePricingSchemeRequestListSchema = z
  .array(UpdatePricingSchemeRequestSchema)
  .min(1)
  .max(99)
  .openapi({ description: 'An array of pricing schemes.' })
  .openapi('UpdatePricingSchemeRequestList')

const UpdatePricingSchemesListRequestSchema = z
  .object({ pricing_schemes: UpdatePricingSchemeRequestListSchema })
  .openapi({
    title: 'Update Pricing Scheme Request',
    description: 'The update pricing scheme request details.',
    required: ['pricing_schemes'],
  })
  .openapi('UpdatePricingSchemesListRequest')

const DefaultResponse = {
  description: 'The default response.',
  content: { 'application/json': { schema: ErrorDefaultSchema } },
}

const PreferParamsSchema = z
  .string()
  .default('return=minimal')
  .exactOptional()
  .openapi({
    param: {
      name: 'Prefer',
      in: 'header',
      description:
        'The preferred server response upon successful completion of the request. Value is:<ul><li><code>return=minimal</code>. The server returns a minimal response to optimize communication between the API caller and the server. A minimal response includes the <code>id</code>, <code>status</code> and HATEOAS links.</li><li><code>return=representation</code>. The server returns a complete resource representation, including the current state of the resource.</li></ul>',
      required: false,
      schema: { type: 'string', default: 'return=minimal' },
    },
  })

const PaypalRequestIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      name: 'PayPal-Request-Id',
      in: 'header',
      description: 'The server stores keys for 72 hours.',
      required: false,
      schema: { type: 'string' },
    },
  })

const ProductIdParamsSchema = z
  .string()
  .min(6)
  .max(50)
  .exactOptional()
  .openapi({
    param: {
      name: 'product_id',
      in: 'query',
      description: 'Filters the response by a Product ID.',
      required: false,
      schema: { type: 'string', minLength: 6, maxLength: 50 },
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
    z.int().min(1).max(20),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      name: 'page_size',
      in: 'query',
      description: 'The number of items to return in the response.',
      schema: { type: 'integer', minimum: 1, maximum: 20, default: 10 },
      required: false,
    },
  })

const PageParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(100000),
  )
  .default(1)
  .exactOptional()
  .openapi({
    param: {
      name: 'page',
      in: 'query',
      description:
        'A non-zero integer which is the start index of the entire list of items to return in the response. The combination of `page=1` and `page_size=20` returns the first 20 items. The combination of `page=2` and `page_size=20` returns the next 20 items.',
      schema: { type: 'integer', minimum: 1, maximum: 100000, default: 1 },
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
      description: 'Indicates whether to show the total count in the response.',
      schema: { type: 'boolean', default: false },
      required: false,
    },
  })

const IdParamsSchema = z
  .string()
  .openapi({
    param: {
      name: 'id',
      in: 'path',
      required: true,
      description: 'The ID of the subscription.',
      schema: { type: 'string' },
    },
  })

const FieldsParamsSchema = z
  .string()
  .min(1)
  .max(100)
  .exactOptional()
  .openapi({
    param: {
      name: 'fields',
      in: 'query',
      description:
        'List of fields that are to be returned in the response. Possible value for fields are last_failed_payment and plan.',
      schema: { type: 'string', minLength: 1, maxLength: 100 },
      required: false,
    },
  })

const StartTimeParamsSchema = z
  .string()
  .regex(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/,
  )
  .min(20)
  .max(64)
  .openapi({
    param: {
      name: 'start_time',
      in: 'query',
      required: true,
      description: 'The start time of the range of transactions to list.',
      schema: {
        type: 'string',
        minLength: 20,
        maxLength: 64,
        pattern:
          '^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$',
      },
    },
  })

const EndTimeParamsSchema = z
  .string()
  .regex(
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$/,
  )
  .min(20)
  .max(64)
  .openapi({
    param: {
      name: 'end_time',
      in: 'query',
      required: true,
      description: 'The end time of the range of transactions to list.',
      schema: {
        type: 'string',
        minLength: 20,
        maxLength: 64,
        pattern:
          '^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])[T,t]([0-1][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)([.][0-9]+)?([Zz]|[+-][0-9]{2}:[0-9]{2})$',
      },
    },
  })

const PatchRequestRequestBody = { content: { 'application/json': { schema: PatchRequestSchema } } }

const Oauth2SecurityScheme = {
  type: 'oauth2',
  description: 'Oauth 2.0 authentication',
  flows: {
    clientCredentials: {
      tokenUrl: '/v1/oauth2/token',
      scopes: { 'https://uri.paypal.com/services/subscriptions': 'Manage plan & subscription' },
    },
  },
}

export const getV1BillingPlansRoute = createRoute({
  method: 'get',
  path: '/v1/billing/plans',
  tags: ['plans'],
  summary: 'List plans',
  description: 'Lists billing plans.',
  operationId: 'plans.list',
  request: {
    headers: z.object({ Prefer: PreferParamsSchema }),
    query: z.object({
      product_id: ProductIdParamsSchema,
      page_size: PageSizeParamsSchema,
      page: PageParamsSchema,
      total_required: TotalRequiredParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that lists billing plans.',
      content: { 'application/json': { schema: PlanCollectionSchema } },
    },
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: { 'application/json': { schema: Error_400Schema.and(_400Schema) } },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: Error_404Schema } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const postV1BillingPlansRoute = createRoute({
  method: 'post',
  path: '/v1/billing/plans',
  tags: ['plans'],
  summary: 'Create plan',
  description: 'Creates a plan that defines pricing and billing cycle details for subscriptions.',
  operationId: 'plans.create',
  request: {
    headers: z.object({
      Prefer: PreferParamsSchema,
      'PayPal-Request-Id': PaypalRequestIdParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: PlanRequestPOSTSchema,
          examples: {
            plan_request_post: {
              value: {
                product_id: 'PROD-XXCD1234QWER65782',
                name: 'Video Streaming Service Plan',
                description: 'Video Streaming Service basic plan',
                status: 'ACTIVE',
                billing_cycles: [
                  {
                    frequency: { interval_unit: 'MONTH', interval_count: 1 },
                    tenure_type: 'TRIAL',
                    sequence: 1,
                    total_cycles: 2,
                    pricing_scheme: { fixed_price: { value: '3', currency_code: 'USD' } },
                  },
                  {
                    frequency: { interval_unit: 'MONTH', interval_count: 1 },
                    tenure_type: 'TRIAL',
                    sequence: 2,
                    total_cycles: 3,
                    pricing_scheme: { fixed_price: { value: '6', currency_code: 'USD' } },
                  },
                  {
                    frequency: { interval_unit: 'MONTH', interval_count: 1 },
                    tenure_type: 'REGULAR',
                    sequence: 3,
                    total_cycles: 12,
                    pricing_scheme: { fixed_price: { value: '10', currency_code: 'USD' } },
                  },
                ],
                payment_preferences: {
                  auto_bill_outstanding: true,
                  setup_fee: { value: '10', currency_code: 'USD' },
                  setup_fee_failure_action: 'CONTINUE',
                  payment_failure_threshold: 3,
                },
                taxes: { percentage: '10', inclusive: false },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows billing plan details.',
      content: {
        'application/json': {
          schema: PlanSchema,
          examples: {
            plan: {
              value: {
                id: 'P-5ML4271244454362WXNWU5NQ',
                product_id: 'PROD-XXCD1234QWER65782',
                name: 'Video Streaming Service Plan',
                description: 'Video Streaming Service basic plan',
                status: 'ACTIVE',
                billing_cycles: [
                  {
                    frequency: { interval_unit: 'MONTH', interval_count: 1 },
                    tenure_type: 'TRIAL',
                    sequence: 1,
                    total_cycles: 2,
                    pricing_scheme: {
                      fixed_price: { value: '3', currency_code: 'USD' },
                      version: 1,
                      create_time: '2020-05-27T12:13:51Z',
                      update_time: '2020-05-27T12:13:51Z',
                    },
                  },
                  {
                    frequency: { interval_unit: 'MONTH', interval_count: 1 },
                    tenure_type: 'TRIAL',
                    sequence: 2,
                    total_cycles: 3,
                    pricing_scheme: {
                      fixed_price: { currency_code: 'USD', value: '6' },
                      version: 1,
                      create_time: '2020-05-27T12:13:51Z',
                      update_time: '2020-05-27T12:13:51Z',
                    },
                  },
                  {
                    frequency: { interval_unit: 'MONTH', interval_count: 1 },
                    tenure_type: 'REGULAR',
                    sequence: 3,
                    total_cycles: 12,
                    pricing_scheme: {
                      fixed_price: { currency_code: 'USD', value: '10' },
                      version: 1,
                      create_time: '2020-05-27T12:13:51Z',
                      update_time: '2020-05-27T12:13:51Z',
                    },
                  },
                ],
                payment_preferences: {
                  auto_bill_outstanding: true,
                  setup_fee: { value: '10', currency_code: 'USD' },
                  setup_fee_failure_action: 'CONTINUE',
                  payment_failure_threshold: 3,
                },
                taxes: { percentage: '10', inclusive: false },
                create_time: '2020-05-27T12:13:51Z',
                update_time: '2020-05-27T12:13:51Z',
                links: [
                  {
                    href: 'https://api-m.paypal.com/v1/billing/plans/P-5ML4271244454362WXNWU5NQ',
                    rel: 'self',
                    method: 'GET',
                  },
                  {
                    href: 'https://api-m.paypal.com/v1/billing/plans/P-5ML4271244454362WXNWU5NQ',
                    rel: 'edit',
                    method: 'PATCH',
                  },
                  {
                    href: 'https://api-m.paypal.com/v1/billing/plans/P-5ML4271244454362WXNWU5NQ/deactivate',
                    rel: 'deactivate',
                    method: 'POST',
                  },
                  {
                    href: 'https://api-m.paypal.com/v1/billing/plans/P-5ML4271244454362WXNWU5NQ/update-pricing-schemes',
                    rel: 'edit',
                    method: 'POST',
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
        'A successful request returns the HTTP `201 Created` status code and a JSON response body that shows billing plan details.',
      content: { 'application/json': { schema: PlanSchema } },
    },
    400: {
      description:
        'Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.',
      content: { 'application/json': { schema: Error_400Schema.and(PlansCreate_400Schema) } },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: { 'application/json': { schema: Error_422Schema.and(_422Schema) } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const getV1BillingPlansIdRoute = createRoute({
  method: 'get',
  path: '/v1/billing/plans/{id}',
  tags: ['plans'],
  summary: 'Show plan details',
  description: 'Shows details for a plan, by ID.',
  operationId: 'plans.get',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows plan details.',
      content: { 'application/json': { schema: PlanSchema } },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: Error_404Schema.and(_404Schema) } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const patchV1BillingPlansIdRoute = createRoute({
  method: 'patch',
  path: '/v1/billing/plans/{id}',
  tags: ['plans'],
  summary: 'Update plan',
  description:
    'Updates a plan with the `CREATED` or `ACTIVE` status. For an `INACTIVE` plan, you can make only status updates.<br/>You can patch these attributes and objects:<table><thead><tr><th>Attribute or object</th><th>Operations</th></tr></thead><tbody><tr><td><code>description</code></td><td>replace</td></tr><tr><td><code>payment_preferences.auto_bill_outstanding</code></td><td>replace</td></tr><tr><td><code>taxes.percentage</code></td><td>replace</td></tr><tr><td><code>payment_preferences.payment_failure_threshold</code></td><td>replace</td></tr><tr><td><code>payment_preferences.setup_fee</code></td><td>replace</td></tr><tr><td><code>payment_preferences.setup_fee_failure_action</code></td><td>replace</td></tr><tr><td><code>name</code></td><td>replace</td></tr></tbody></table>',
  operationId: 'plans.patch',
  request: { params: z.object({ id: IdParamsSchema }), body: PatchRequestRequestBody },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: { 'application/json': { schema: Error_400Schema.and(PlansPatch_400Schema) } },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: Error_404Schema.and(_404Schema) } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: { 'application/json': { schema: Error_422Schema.and(PlansPatch_422Schema) } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const postV1BillingPlansIdActivateRoute = createRoute({
  method: 'post',
  path: '/v1/billing/plans/{id}/activate',
  tags: ['plans'],
  summary: 'Activate plan',
  description: 'Activates a plan, by ID.',
  operationId: 'plans.activate',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: Error_404Schema.and(_404Schema) } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: { 'application/json': { schema: Error_422Schema.and(PlansActivate_422Schema) } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const postV1BillingPlansIdDeactivateRoute = createRoute({
  method: 'post',
  path: '/v1/billing/plans/{id}/deactivate',
  tags: ['plans'],
  summary: 'Deactivate plan',
  description: 'Deactivates a plan, by ID.',
  operationId: 'plans.deactivate',
  request: { params: z.object({ id: IdParamsSchema }) },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: Error_404Schema.and(_404Schema) } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: { 'application/json': { schema: Error_422Schema.and(PlansDeactivate_422Schema) } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const postV1BillingPlansIdUpdatePricingSchemesRoute = createRoute({
  method: 'post',
  path: '/v1/billing/plans/{id}/update-pricing-schemes',
  tags: ['plans'],
  summary: 'Update pricing',
  description:
    'Updates pricing for a plan. For example, you can update a regular billing cycle from $5 per month to $7 per month.',
  operationId: 'plans.update-pricing-schemes',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: UpdatePricingSchemesListRequestSchema,
          examples: {
            update_pricing_schemes_list_request: {
              value: {
                pricing_schemes: [
                  {
                    billing_cycle_sequence: 1,
                    pricing_scheme: { fixed_price: { value: '50', currency_code: 'USD' } },
                  },
                  {
                    billing_cycle_sequence: 2,
                    pricing_scheme: {
                      fixed_price: { value: '100', currency_code: 'USD' },
                      pricing_model: 'VOLUME',
                      tiers: [
                        {
                          starting_quantity: '1',
                          ending_quantity: '1000',
                          amount: { value: '150', currency_code: 'USD' },
                        },
                        {
                          starting_quantity: '1001',
                          amount: { value: '250', currency_code: 'USD' },
                        },
                      ],
                    },
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
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    400: {
      description:
        'Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.',
      content: {
        'application/json': { schema: Error_400Schema.and(PlansUpdatePricingSchemes_400Schema) },
      },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: Error_404Schema.and(_404Schema) } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: {
        'application/json': { schema: Error_422Schema.and(PlansUpdatePricingSchemes_422Schema) },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const postV1BillingSubscriptionsRoute = createRoute({
  method: 'post',
  path: '/v1/billing/subscriptions',
  tags: ['subscriptions'],
  summary: 'Create subscription',
  description: 'Creates a subscription.',
  operationId: 'subscriptions.create',
  request: {
    headers: z.object({
      Prefer: PreferParamsSchema,
      'PayPal-Request-Id': PaypalRequestIdParamsSchema,
    }),
    body: {
      content: {
        'application/json': {
          schema: SubscriptionRequestPostSchema,
          examples: {
            subscription_request_post: {
              value: {
                plan_id: 'P-5ML4271244454362WXNWU5NQ',
                start_time: '2018-11-01T00:00:00Z',
                quantity: '20',
                shipping_amount: { currency_code: 'USD', value: '10.00' },
                subscriber: {
                  name: { given_name: 'John', surname: 'Doe' },
                  email_address: 'customer@example.com',
                  shipping_address: {
                    name: { full_name: 'John Doe' },
                    address: {
                      address_line_1: '2211 N First Street',
                      address_line_2: 'Building 17',
                      admin_area_2: 'San Jose',
                      admin_area_1: 'CA',
                      postal_code: '95131',
                      country_code: 'US',
                    },
                  },
                },
                application_context: {
                  brand_name: 'walmart',
                  locale: 'en-US',
                  shipping_preference: 'SET_PROVIDED_ADDRESS',
                  user_action: 'SUBSCRIBE_NOW',
                  payment_method: {
                    payer_selected: 'PAYPAL',
                    payee_preferred: 'IMMEDIATE_PAYMENT_REQUIRED',
                  },
                  return_url: 'https://example.com/returnUrl',
                  cancel_url: 'https://example.com/cancelUrl',
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows subscription details.',
      content: {
        'application/json': {
          schema: SubscriptionSchema,
          examples: {
            subscription: {
              value: {
                id: 'I-BW452GLLEP1G',
                status: 'APPROVAL_PENDING',
                status_update_time: '2018-12-10T21:20:49Z',
                plan_id: 'P-5ML4271244454362WXNWU5NQ',
                plan_overridden: false,
                start_time: '2018-11-01T00:00:00Z',
                quantity: '20',
                shipping_amount: { currency_code: 'USD', value: '10.00' },
                subscriber: {
                  name: { given_name: 'John', surname: 'Doe' },
                  email_address: 'customer@example.com',
                  payer_id: '2J6QB8YJQSJRJ',
                  shipping_address: {
                    name: { full_name: 'John Doe' },
                    address: {
                      address_line_1: '2211 N First Street',
                      address_line_2: 'Building 17',
                      admin_area_2: 'San Jose',
                      admin_area_1: 'CA',
                      postal_code: '95131',
                      country_code: 'US',
                    },
                  },
                },
                create_time: '2018-12-10T21:20:49Z',
                links: [
                  {
                    href: 'https://www.paypal.com/webapps/billing/subscriptions?ba_token=BA-2M539689T3856352J',
                    rel: 'approve',
                    method: 'GET',
                  },
                  {
                    href: 'https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G',
                    rel: 'edit',
                    method: 'PATCH',
                  },
                  {
                    href: 'https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G',
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
        'A successful request returns the HTTP `201 Created` status code and a JSON response body that shows subscription details.',
      content: {
        'application/json': {
          schema: SubscriptionSchema,
          examples: {
            subscription: {
              value: {
                id: 'I-BW452GLLEP1G',
                status: 'APPROVAL_PENDING',
                status_update_time: '2018-12-10T21:20:49Z',
                plan_id: 'P-5ML4271244454362WXNWU5NQ',
                plan_overridden: false,
                start_time: '2018-11-01T00:00:00Z',
                quantity: '20',
                shipping_amount: { currency_code: 'USD', value: '10.00' },
                subscriber: {
                  name: { given_name: 'John', surname: 'Doe' },
                  email_address: 'customer@example.com',
                  payer_id: '2J6QB8YJQSJRJ',
                  shipping_address: {
                    name: { full_name: 'John Doe' },
                    address: {
                      address_line_1: '2211 N First Street',
                      address_line_2: 'Building 17',
                      admin_area_2: 'San Jose',
                      admin_area_1: 'CA',
                      postal_code: '95131',
                      country_code: 'US',
                    },
                  },
                },
                create_time: '2018-12-10T21:20:49Z',
                links: [
                  {
                    href: 'https://www.paypal.com/webapps/billing/subscriptions?ba_token=BA-2M539689T3856352J',
                    rel: 'approve',
                    method: 'GET',
                  },
                  {
                    href: 'https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G',
                    rel: 'edit',
                    method: 'PATCH',
                  },
                  {
                    href: 'https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G',
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
      description:
        'Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.',
      content: {
        'application/json': { schema: Error_400Schema.and(SubscriptionsCreate_400Schema) },
      },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: {
        'application/json': { schema: Error_422Schema.and(SubscriptionsCreate_422Schema) },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const getV1BillingSubscriptionsIdRoute = createRoute({
  method: 'get',
  path: '/v1/billing/subscriptions/{id}',
  tags: ['subscriptions'],
  summary: 'Show subscription details',
  description: 'Shows details for a subscription, by ID.',
  operationId: 'subscriptions.get',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({ fields: FieldsParamsSchema }),
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows subscription details.',
      content: { 'application/json': { schema: SubscriptionSchema } },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: Error_404Schema.and(_404Schema) } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const patchV1BillingSubscriptionsIdRoute = createRoute({
  method: 'patch',
  path: '/v1/billing/subscriptions/{id}',
  tags: ['subscriptions'],
  summary: 'Update subscription',
  description:
    'Updates a subscription which could be in <code>ACTIVE</code> or <code>SUSPENDED</code> status. You can override plan level default attributes by providing customised values for plan path in the patch request.<br /> <ul> <li>You cannot update attributes that have already completed (Example - trial cycles can’t be updated if completed).</li> <li>Once overridden, changes to plan resource will not impact subscription.</li> <li>Any price update will not impact billing cycles within next 10 days (Applicable only for subscriptions funded by PayPal account).</li> </ul> Following are the fields eligible for patch.<table><thead><tr><th>Attribute or object</th><th>Operations</th></tr></thead><tbody><tr><td><code>billing_info.outstanding_balance</code></td><td>replace</td></tr><tr><td><code>custom_id</code></td><td>add,replace</td></tr><tr><td><code>plan.billing_cycles[@sequence==n].<br/>pricing_scheme.fixed_price</code></td><td>add,replace</td></tr><tr><td><code>plan.billing_cycles[@sequence==n].<br/>pricing_scheme.tiers</code></td><td>replace</td></tr><tr><td><code>plan.billing_cycles[@sequence==n].<br/>total_cycles</code></td><td>replace</td></tr><tr><td><code>plan.payment_preferences.<br/>auto_bill_outstanding</code></td><td>replace</td></tr><tr><td><code>plan.payment_preferences.<br/>payment_failure_threshold</code></td><td>replace</td></tr><tr><td><code>plan.taxes.inclusive</code></td><td>add,replace</td></tr><tr><td><code>plan.taxes.percentage</code></td><td>add,replace</td></tr><tr><td><code>shipping_amount</code></td><td>add,replace</td></tr><tr><td><code>start_time</code></td><td>replace</td></tr><tr><td><code>subscriber.shipping_address</code></td><td>add,replace</td></tr><tr><td><code>subscriber.payment_source (for subscriptions funded<br/>by card payments)</code></td><td>replace</td></tr></tbody></table>',
  operationId: 'subscriptions.patch',
  request: { params: z.object({ id: IdParamsSchema }), body: PatchRequestRequestBody },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    400: {
      description: 'Request is not well-formed, syntactically incorrect, or violates schema.',
      content: {
        'application/json': { schema: Error_400Schema.and(SubscriptionsPatch_400Schema) },
      },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: Error_404Schema.and(_404Schema) } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: {
        'application/json': { schema: Error_422Schema.and(SubscriptionsPatch_422Schema) },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const postV1BillingSubscriptionsIdReviseRoute = createRoute({
  method: 'post',
  path: '/v1/billing/subscriptions/{id}/revise',
  tags: ['subscriptions'],
  summary: 'Revise plan or quantity of subscription',
  description:
    "Updates the quantity of the product or service in a subscription. You can also use this method to switch the plan and update the `shipping_amount`, `shipping_address` values for the subscription. This type of update requires the buyer's consent.",
  operationId: 'subscriptions.revise',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: SubscriptionReviseRequestSchema,
          examples: {
            subscription_revise_request: {
              value: {
                plan_id: 'P-5ML4271244454362WXNWU5NQ',
                shipping_amount: { currency_code: 'USD', value: '10.00' },
                shipping_address: {
                  name: { full_name: 'John Doe' },
                  address: {
                    address_line_1: '2211 N First Street',
                    address_line_2: 'Building 17',
                    admin_area_2: 'San Jose',
                    admin_area_1: 'CA',
                    postal_code: '95131',
                    country_code: 'US',
                  },
                },
                application_context: {
                  brand_name: 'walmart',
                  locale: 'en-US',
                  shipping_preference: 'SET_PROVIDED_ADDRESS',
                  payment_method: {
                    payer_selected: 'PAYPAL',
                    payee_preferred: 'IMMEDIATE_PAYMENT_REQUIRED',
                  },
                  return_url: 'https://example.com/returnUrl',
                  cancel_url: 'https://example.com/cancelUrl',
                },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows subscription details.',
      content: {
        'application/json': {
          schema: SubscriptionReviseResponseSchema,
          examples: {
            subscription_revise_response: {
              value: {
                plan_id: 'P-5ML4271244454362WXNWU5NQ',
                plan_overridden: false,
                shipping_amount: { currency_code: 'USD', value: '10.00' },
                shipping_address: {
                  name: { full_name: 'John Doe' },
                  address: {
                    address_line_1: '2211 N First Street',
                    address_line_2: 'Building 17',
                    admin_area_2: 'San Jose',
                    admin_area_1: 'CA',
                    postal_code: '95131',
                    country_code: 'US',
                  },
                },
                links: [
                  {
                    href: 'https://www.paypal.com/webapps/billing/subscriptions/update?ba_token=BA-2M539689T3856352J',
                    rel: 'approve',
                    method: 'GET',
                  },
                  {
                    href: 'https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G',
                    rel: 'edit',
                    method: 'PATCH',
                  },
                  {
                    href: 'https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G',
                    rel: 'self',
                    method: 'GET',
                  },
                  {
                    href: 'https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G/cancel',
                    rel: 'cancel',
                    method: 'POST',
                  },
                  {
                    href: 'https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G/suspend',
                    rel: 'suspend',
                    method: 'POST',
                  },
                  {
                    href: 'https://api-m.paypal.com/v1/billing/subscriptions/I-BW452GLLEP1G/capture',
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
    400: {
      description:
        'Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.',
      content: {
        'application/json': { schema: Error_400Schema.and(SubscriptionsRevise_400Schema) },
      },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: {
        'application/json': { schema: Error_404Schema.and(SubscriptionsRevise_404Schema) },
      },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: {
        'application/json': { schema: Error_422Schema.and(SubscriptionsRevise_422Schema) },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const postV1BillingSubscriptionsIdSuspendRoute = createRoute({
  method: 'post',
  path: '/v1/billing/subscriptions/{id}/suspend',
  tags: ['subscriptions'],
  summary: 'Suspend subscription',
  description: 'Suspends the subscription.',
  operationId: 'subscriptions.suspend',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: SubscriptionSuspendRequestSchema,
          examples: { subscription_suspend_request: { value: { reason: 'Item out of stock' } } },
        },
      },
    },
  },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    400: {
      description:
        'Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.',
      content: {
        'application/json': { schema: Error_400Schema.and(SubscriptionsSuspend_400Schema) },
      },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: Error_404Schema.and(_404Schema) } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: {
        'application/json': { schema: Error_422Schema.and(SubscriptionsSuspend_422Schema) },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const postV1BillingSubscriptionsIdCancelRoute = createRoute({
  method: 'post',
  path: '/v1/billing/subscriptions/{id}/cancel',
  tags: ['subscriptions'],
  summary: 'Cancel subscription',
  description: 'Cancels the subscription.',
  operationId: 'subscriptions.cancel',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: SubscriptionCancelRequestSchema,
          examples: {
            subscription_cancel_request: { value: { reason: 'Not satisfied with the service' } },
          },
        },
      },
    },
  },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    400: {
      description:
        'Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.',
      content: {
        'application/json': { schema: Error_400Schema.and(SubscriptionsCancel_400Schema) },
      },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: Error_404Schema.and(_404Schema) } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: {
        'application/json': { schema: Error_422Schema.and(SubscriptionsCancel_422Schema) },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const postV1BillingSubscriptionsIdActivateRoute = createRoute({
  method: 'post',
  path: '/v1/billing/subscriptions/{id}/activate',
  tags: ['subscriptions'],
  summary: 'Activate subscription',
  description: 'Activates the subscription.',
  operationId: 'subscriptions.activate',
  request: {
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: SubscriptionActivateRequestSchema,
          examples: {
            subscription_activate_request: { value: { reason: 'Reactivating the subscription' } },
          },
        },
      },
    },
  },
  responses: {
    204: {
      description:
        'A successful request returns the HTTP `204 No Content` status code with no JSON response body.',
    },
    400: {
      description:
        'Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.',
      content: {
        'application/json': { schema: Error_400Schema.and(SubscriptionsActivate_400Schema) },
      },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: Error_404Schema.and(_404Schema) } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: {
        'application/json': { schema: Error_422Schema.and(SubscriptionsActivate_422Schema) },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const postV1BillingSubscriptionsIdCaptureRoute = createRoute({
  method: 'post',
  path: '/v1/billing/subscriptions/{id}/capture',
  tags: ['subscriptions'],
  summary: 'Capture authorized payment on subscription',
  description: 'Captures an authorized payment from the subscriber on the subscription.',
  operationId: 'subscriptions.capture',
  request: {
    headers: z.object({ 'PayPal-Request-Id': PaypalRequestIdParamsSchema }),
    params: z.object({ id: IdParamsSchema }),
    body: {
      content: {
        'application/json': {
          schema: SubscriptionCaptureRequestSchema,
          examples: {
            subscription_capture_request: {
              value: {
                note: 'Charging as the balance reached the limit',
                capture_type: 'OUTSTANDING_BALANCE',
                amount: { currency_code: 'USD', value: '100' },
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows subscription details.',
      content: { 'application/json': { schema: TransactionSchema } },
    },
    202: { description: 'Request Accepted.' },
    400: {
      description:
        'Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.',
      content: {
        'application/json': { schema: Error_400Schema.and(SubscriptionsCapture_400Schema) },
      },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: Error_404Schema.and(_404Schema) } },
    },
    422: {
      description:
        'The requested action could not be performed, semantically incorrect, or failed business validation.',
      content: {
        'application/json': { schema: Error_422Schema.and(SubscriptionsCapture_422Schema) },
      },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})

export const getV1BillingSubscriptionsIdTransactionsRoute = createRoute({
  method: 'get',
  path: '/v1/billing/subscriptions/{id}/transactions',
  tags: ['subscriptions'],
  summary: 'List transactions for subscription',
  description: 'Lists transactions for a subscription.',
  operationId: 'subscriptions.transactions',
  request: {
    params: z.object({ id: IdParamsSchema }),
    query: z.object({ start_time: StartTimeParamsSchema, end_time: EndTimeParamsSchema }),
  },
  responses: {
    200: {
      description:
        'A successful request returns the HTTP `200 OK` status code and a JSON response body that shows subscription details.',
      content: { 'application/json': { schema: TransactionsListSchema } },
    },
    400: {
      description:
        'Bad Request. Request is not well-formed, syntactically incorrect, or violates schema.',
      content: {
        'application/json': { schema: Error_400Schema.and(SubscriptionsTransactions_400Schema) },
      },
    },
    401: {
      description:
        'Authentication failed due to missing authorization header, or invalid authentication credentials.',
      content: { 'application/json': { schema: Error_401Schema.and(_401Schema) } },
    },
    403: {
      description: 'Authorization failed due to insufficient permissions.',
      content: { 'application/json': { schema: Error_403Schema.and(_403Schema) } },
    },
    404: {
      description: 'The specified resource does not exist.',
      content: { 'application/json': { schema: Error_404Schema.and(_404Schema) } },
    },
    500: {
      description: 'An internal server error has occurred.',
      content: { 'application/json': { schema: Error_500Schema } },
    },
    default: DefaultResponse,
  },
  security: [{ Oauth2: ['https://uri.paypal.com/services/subscriptions'] }],
})
