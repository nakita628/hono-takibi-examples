import { createRoute, z } from '@hono/zod-openapi'

const AccountingCategoryResponseSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        description: 'The unique ID of the accounting category.',
        example: '8d831292-f950-4c5a-83f9-030df8cacd3f',
      }),
    name: z
      .string()
      .openapi({ description: 'The name of the accounting category.', example: 'Transportation' }),
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the accounting category.', example: '305' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the accounting category was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
        example: '2025-10-20T15:09:24Z',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the accounting category was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
        example: '2025-10-20T15:09:24Z',
      }),
    default_tax_rate_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The ID of the default [tax rate](https://developer.revolut.com/docs/api/business#get-tax-rate) applied to items in this accounting category unless overridden for a specific item.',
        example: '2a3520af-e6f7-416c-821e-0e83ffac1dfa',
      }),
  })
  .openapi({ required: ['id', 'name', 'created_at', 'updated_at'] })
  .openapi('AccountingCategoryResponse')

const AccountingTaxRateSchema = z
  .object({
    name: z.string().min(1).max(20).openapi({ description: 'The name of the tax.' }),
    percentage: z
      .float64()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The tax rate percentage applied to the taxable amount. For example, `23` for 23%.',
      }),
  })
  .openapi({
    description: 'The tax rate that can be applied to financial records, such as expenses.',
    required: ['name'],
  })
  .openapi('AccountingTaxRate')

const AccountCurrencySchema = z
  .string()
  .regex(/^[A-Z]{3}$/)
  .openapi({
    description: '[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.',
  })
  .openapi('AccountCurrency')

const AccountSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The account ID.' }),
    name: z.string().exactOptional().openapi({ description: 'The account name.' }),
    balance: z.float64().openapi({ description: 'The current balance on the account.' }),
    currency: AccountCurrencySchema,
    state: z
      .enum(['active', 'inactive'])
      .openapi({ description: 'Indicates the state of the account.' }),
    public: z
      .boolean()
      .openapi({
        description: 'Indicates whether the account is visible to other businesses on Revolut.',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the account was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the account was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    account_type: z
      .enum(['current', 'merchant', 'savings', 'credit', 'debt', 'blocking', 'other'])
      .openapi({
        description:
          "The type of the account.\n\n| Value | Description |\n| --- | --- |\n| **`current`** | Standard account for everyday spending and transfers. |\n| **`merchant`** | Account for receiving payments as a [merchant](https://developer.revolut.com/docs/guides/merchant/introduction), for example from sales, invoices, and payment requests. |\n| **`savings`** | Savings account, such as a vault or cashback account. |\n| **`credit`** | Account associated with a credit card. |\n| **`debt`** | Account holding funds blocked or collected on behalf of a government authority. The account holder can't use these funds, and they contribute to the total negative balance. |\n| **`blocking`** | Account holding funds temporarily blocked during a compliance review. |\n| **`other`** | Any account type not covered by the above categories. |",
      }),
  })
  .openapi({
    description: '',
    required: [
      'id',
      'balance',
      'currency',
      'state',
      'public',
      'created_at',
      'updated_at',
      'account_type',
    ],
  })
  .openapi('Account')

const AccountsSchema = z.array(AccountSchema).openapi('Accounts')

const BeneficiaryAddressSchema = z
  .object({
    street_line1: z
      .string()
      .exactOptional()
      .openapi({ description: 'Street line 1 information.', example: 'Revolut LTD' }),
    street_line2: z
      .string()
      .exactOptional()
      .openapi({ description: 'Street line 2 information.', example: '1 Canada Square' }),
    region: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the region (state or province), for example, Ontario for Canada.',
        example: 'Ontario',
      }),
    city: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the city.', example: 'London' }),
    country: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .openapi({
        description:
          'The country of the counterparty, as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.',
        example: 'GB',
      }),
    postcode: z
      .string()
      .openapi({ description: 'The postcode of the counterparty address.', example: 'E14 5AB' }),
  })
  .openapi({ description: 'The address of the counterparty.', required: ['country', 'postcode'] })
  .openapi('BeneficiaryAddress')

const BankCountryCodeSchema = z
  .string()
  .regex(/^[A-Z]{2}$/)
  .openapi({
    description:
      'The country of the bank, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.',
    example: 'GB',
  })
  .openapi('BankCountryCode')

const PaymentSystemSchema = z
  .enum([
    'chaps',
    'bacs',
    'faster_payments',
    'sepa',
    'swift',
    'ach',
    'elixir',
    'sorbnet',
    'nics',
    'rix',
    'sumclearing',
  ])
  .openapi({
    example: 'swift',
    description: 'Indicates the payment scheme used to execute transactions.',
  })
  .openapi('PaymentSystem')

const EstimatedTimeSchema = z
  .object({
    unit: z
      .enum(['days', 'hours'])
      .openapi({
        description: 'The estimated time unit of the inbound transfer of the funds.',
        example: 'days',
      }),
    min: z.int().exactOptional().openapi({ description: 'The minimum time estimate.', example: 1 }),
    max: z.int().exactOptional().openapi({ description: 'The maximum time estimate.', example: 3 }),
  })
  .openapi({
    description:
      'The estimated time of the inbound transfer of the funds, i.e. when we expect the recipient to receive the transfer.',
    required: ['unit'],
  })
  .openapi('EstimatedTime')

const AccountBankDetailsItemSchema = z
  .object({
    iban: z.string().exactOptional().openapi({ description: 'The IBAN number.' }),
    bic: z
      .string()
      .exactOptional()
      .openapi({ description: 'The BIC number, also known as SWIFT code.' }),
    account_no: z.string().exactOptional().openapi({ description: 'The account number.' }),
    sort_code: z.string().exactOptional().openapi({ description: 'The sort code of the account.' }),
    routing_number: z
      .string()
      .exactOptional()
      .openapi({ description: 'The routing number of the account.' }),
    beneficiary: z.string().openapi({ description: 'The name of the counterparty.' }),
    beneficiary_address: BeneficiaryAddressSchema,
    bank_country: BankCountryCodeSchema.exactOptional(),
    pooled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the account address is pooled or unique.' }),
    unique_reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference of the pooled account.' }),
    schemes: z
      .array(PaymentSystemSchema)
      .openapi({ description: 'The schemes that are available for this currency account.' }),
    estimated_time: EstimatedTimeSchema,
  })
  .openapi({
    description: '',
    required: ['beneficiary', 'beneficiary_address', 'schemes', 'estimated_time'],
  })
  .openapi('AccountBankDetailsItem')

const AccountBankDetailsItemsSchema = z
  .array(AccountBankDetailsItemSchema)
  .openapi({ description: 'Indicates the payment scheme used to execute transactions.' })
  .openapi('AccountBankDetailsItems')

const AccountNameValidationReasonUKSchema = z
  .object({
    type: z
      .enum(['uk_cop', 'eu_cop', 'ro_cop', 'au_cop'])
      .exactOptional()
      .openapi({
        description:
          'The reason type.\nDetermines the [service](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/confirmation-of-payee#supported-regions-and-services) used for the validation that returned the reason code.\nFor UK, the values is: `uk_cop`.',
      }),
    code: z
      .enum([
        'close_match',
        'individual_account_name_matched',
        'company_account_name_matched',
        'individual_account_close_match',
        'company_account_close_match',
        'not_matched',
        'account_does_not_exist',
        'account_switched',
        'cannot_be_checked',
      ])
      .exactOptional()
      .openapi({
        description:
          "The reason code.\nPossible values for UK:\n\n| Value | Description |\n| --- | --- |\n| **`close_match`** | The provided name is similar to the account name, the account type is correct. The actual name is returned. |\n| **`individual_account_name_matched`** | The names match but the counterparty is an individual, not a business. |\n| **`company_account_name_matched`** | The names match but the counterparty is a business, not an individual. |\n| **`individual_account_close_match`** | The provided name is similar to the account name, and the account type is incorrect – the counterparty is an individual, not a business. The actual name is returned. |\n| **`company_account_close_match`** | The provided name is similar to the account name, and the account type is incorrect - the counterparty is a business, not an individual. The actual name is returned. |\n| **`not_matched`** | The account details don't match the provided values. |\n| **`account_does_not_exist`** | The account does not exist. |\n| **`account_switched`** | The account has been switched using the Current Account Switching Service. Please contact the recipient for updated account details. |\n| **`cannot_be_checked`** | The account cannot be checked. |",
      }),
  })
  .openapi({
    description:
      'A code which explains why a given result was returned, and the service that returned it.\nFor example, it might happen that the details you provided match the account details, but you specified the counterparty as an individual, and the account type is business.',
    required: [],
  })
  .openapi('AccountNameValidationReasonUK')

const AccountNameValidationReasonAUSchema = z
  .object({
    type: z
      .enum(['uk_cop', 'eu_cop', 'ro_cop', 'au_cop'])
      .exactOptional()
      .openapi({
        description:
          'The reason type.\nDetermines the [service](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/confirmation-of-payee#supported-regions-and-services) used for the validation that returned the reason code.\nFor AU, the value is: `au_cop`.',
      }),
    code: z
      .enum([
        'close_match',
        'individual_account_name_matched',
        'company_account_name_matched',
        'individual_account_close_match',
        'company_account_close_match',
        'not_matched',
        'account_does_not_exist',
        'account_switched',
        'cannot_be_checked',
      ])
      .exactOptional()
      .openapi({
        description:
          "The reason code.\nPossible values for AU:\n\n| Value | Description |\n| --- | --- |\n| **`close_match`** (business accounts): | The provided name is similar to the account name. The actual name is returned. Mismatched account type is corrected. |\n| **`not_matched`** | The account details don't match the provided values. |\n| **`account_does_not_exist`** | The account does not exist. |\n| **`account_switched`** | The account has been switched using the Current Account Switching Service. Please contact the recipient for updated account details. |\n| **`cannot_be_checked`** | The account cannot be checked. |",
      }),
  })
  .openapi({
    description:
      'A code which explains why a given result was returned, and the service that returned it.\nIn some cases, it may provide more details about the result.',
    required: [],
  })
  .openapi('AccountNameValidationReasonAU')

const AccountNameValidationReasonROSchema = z
  .object({
    type: z
      .enum(['uk_cop', 'eu_cop', 'ro_cop', 'au_cop'])
      .exactOptional()
      .openapi({
        description:
          'The reason type.\nDetermines the [service](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/confirmation-of-payee#supported-regions-and-services) used for the validation that returned the reason code.\nFor RO, the value is: `ro_cop`.',
      }),
    code: z
      .enum([
        'close_match',
        'individual_account_name_matched',
        'company_account_name_matched',
        'individual_account_close_match',
        'company_account_close_match',
        'not_matched',
        'account_does_not_exist',
        'account_switched',
        'cannot_be_checked',
      ])
      .exactOptional()
      .openapi({
        description:
          'The reason code.\nPossible values for RO:\n\n| Value | Description |\n| --- | --- |\n| **`cannot_be_checked`** | The account cannot be checked. |',
      }),
  })
  .openapi({
    description:
      'A code which explains why a given result was returned, and the service that returned it.',
    required: [],
  })
  .openapi('AccountNameValidationReasonRO')

const AccountNameValidationReasonEURSchema = z
  .object({
    type: z
      .enum(['uk_cop', 'eu_cop', 'ro_cop', 'au_cop'])
      .exactOptional()
      .openapi({
        description:
          'The reason type.\nDetermines the [service](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/confirmation-of-payee#supported-regions-and-services) used for the validation that returned the reason code.\nFor EUR, the value is: `eu_cop`.',
      }),
    code: z
      .enum([
        'close_match',
        'individual_account_name_matched',
        'company_account_name_matched',
        'individual_account_close_match',
        'company_account_close_match',
        'not_matched',
        'account_does_not_exist',
        'account_switched',
        'cannot_be_checked',
      ])
      .exactOptional()
      .openapi({
        description:
          "The reason code.\nPossible values for EUR:\n\n| Value | Description |\n| --- | --- |\n| **`close_match`** | The provided name is similar to the account name. The actual name is returned. |\n| **`not_matched`** | The account details don't match the provided values. |\n| **`account_does_not_exist`** | The account does not exist. |\n| **`account_switched`** | The account has been switched using the Current Account Switching Service. Please contact the recipient for updated account details. |\n| **`cannot_be_checked`** | The account cannot be checked. |",
      }),
  })
  .openapi({
    description:
      'A code which explains why a given result was returned, and the service that returned it.\nFor example, it might happen that the details you provided match the account details, but you specified the counterparty as an individual, and the account type is business.',
    required: [],
  })
  .openapi('AccountNameValidationReasonEUR')

const AmountSchema = z.float64().openapi({ description: 'The amount of money.' }).openapi('Amount')

const CurrencySchema = z
  .string()
  .regex(/^[A-Z]{3}$/)
  .openapi({
    description: '[ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code in upper case.',
  })
  .openapi('Currency')

const AmountWithCurrencySchema = z
  .object({
    amount: z.float64().exactOptional().openapi({ description: 'The amount of the transaction.' }),
    currency: CurrencySchema.exactOptional(),
  })
  .openapi({ description: '', required: [] })
  .openapi('AmountWithCurrency')

const UpdateCounterpartyPaymentMethodAddressSchema = z
  .object({
    street_line1: z
      .string()
      .max(100)
      .openapi({ description: 'Street line 1 information.', example: '7 Revolut Street' }),
    street_line2: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'Street line 2 information.', example: 'Floor 3' }),
    region: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({
        description: 'The name of the region (state or province), for example, Ontario for Canada.',
        example: 'Greater London',
      }),
    city: z.string().max(50).openapi({ description: 'The name of the city.', example: 'London' }),
    country: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .openapi({
        description:
          'The country of the counterparty, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.',
        example: 'GB',
      }),
    postcode: z
      .string()
      .max(15)
      .openapi({ description: 'The postcode of the counterparty address.', example: 'EC2V 8PH' }),
  })
  .openapi({
    description:
      "The updated address for the counterparty's payment method. All required fields must be provided.",
    required: ['country', 'street_line1', 'city', 'postcode'],
  })
  .openapi('UpdateCounterpartyPaymentMethodAddress')

const UpdateCounterpartyPaymentMethodRequestSchema = z
  .object({ address: UpdateCounterpartyPaymentMethodAddressSchema })
  .openapi({
    description: "The request body for updating a counterparty's payment method address.",
    required: ['address'],
  })
  .openapi('UpdateCounterpartyPaymentMethodRequest')

const BusinessMerchantCategorySchema = z
  .enum([
    'health',
    'general',
    'services',
    'airlines',
    'transport',
    'accommodation',
    'utilities',
    'shopping',
    'financial',
    'furniture',
    'hardware',
    'groceries',
    'fuel',
    'entertainment',
    'software',
    'restaurants',
    'advertising',
    'cash',
    'education',
    'government',
  ])
  .openapi('BusinessMerchantCategory')

const CardInvitationIdSchema = z
  .uuid()
  .openapi({ description: 'The ID of the card invitation.' })
  .openapi('CardInvitationId')

const CardInvitationStateSchema = z
  .enum(['created', 'expired', 'failed', 'redeemed'])
  .openapi({
    description:
      'The current state of the card invitation:\n\n| Value | Description |\n| --- | --- |\n| **`created`** | Invitation has been created but not yet claimed. |\n| **`expired`** | Invitation has expired due to expiry date being reached or manual cancellation. |\n| **`failed`** | Invitation claim attempt failed. |\n| **`redeemed`** | Invitation has been successfully claimed. |\n\nTo learn more about card invitation lifecycle, see the guide: [Manage card invitations → Card invitation state](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations#card-invitation-state).',
  })
  .openapi('CardInvitationState')

const CardInvitationCreatedAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date and time the card invitation was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
  })
  .openapi('CardInvitationCreatedAt')

const CardInvitationUpdatedAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date and time the card invitation was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
  })
  .openapi('CardInvitationUpdatedAt')

const CardInvitationExpiryDateSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date and time after which this card invitation expires if not claimed or cancelled before then.\nSpecified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.\n:::note\nOnly returned for invitations in state `created`.\n:::tip\nFor other states, to find out when a card invitation transitioned to its [final state](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations#card-invitation-state), check the `updated_at` value. \n:::',
    example: '2025-10-20T15:09:24Z',
  })
  .openapi('CardInvitationExpiryDate')

const CardInvitationCardIdSchema = z
  .uuid()
  .openapi({
    description:
      'The ID of the card issued after this invitation was claimed. \n:::note\nOnly returned for invitations in state `redeemed`.\n:::\n',
  })
  .openapi('CardInvitationCardId')

const CardInvitationCreatedHolderIdSchema = z
  .uuid()
  .openapi({
    description:
      'The ID of the team member to be assigned as the holder of the card after the invitation is claimed.',
  })
  .openapi('CardInvitationCreatedHolderId')

const CardInvitationHolderIdSchema = z
  .uuid()
  .openapi({
    description:
      'The ID of the team member to be assigned as the holder of the card after the invitation is claimed.\n\n:::note\nIf the team member has been deleted since the invitation was created, the `holder_id` is not returned.\n:::',
  })
  .openapi('CardInvitationHolderId')

const CardInvitationVirtualSchema = z
  .boolean()
  .openapi({
    description:
      'Specifies whether the issued card will be a virtual (`true`) or physical (`false`) one.',
  })
  .openapi('CardInvitationVirtual')

const CardInvitationLabelSchema = z
  .string()
  .openapi({ description: 'The label of the card.' })
  .openapi('CardInvitationLabel')

const SpendingPeriodSchemaSchema = z
  .union([
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'start_date')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['start_date'] }),
    z
      .unknown()
      .superRefine((val, ctx) => {
        if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
          if (!Object.hasOwn(val, 'end_date')) {
            ctx.addIssue({ code: 'custom' })
          }
          if (!Object.hasOwn(val, 'end_date_action')) {
            ctx.addIssue({ code: 'custom' })
          }
        }
      })
      .openapi({ required: ['end_date', 'end_date_action'] }),
  ])
  .and(
    z
      .object({
        start_date: z.iso
          .date()
          .exactOptional()
          .openapi({
            description:
              'The start date (inclusive) of the spending period, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`).\nUses the [timezone set by the business](https://business.revolut.com/settings/appearance), or defaults to `Europe/London`.',
            example: '2025-09-26',
          }),
        end_date: z.iso
          .date()
          .exactOptional()
          .openapi({
            description:
              'The end date (inclusive) of the spending period, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DD`).\nUses the [timezone set by the business](https://business.revolut.com/settings/appearance), or defaults to `Europe/London`.',
            example: '2030-12-31',
          }),
        end_date_action: z
          .enum(['lock', 'terminate'])
          .exactOptional()
          .openapi({
            description: 'The action to take after the end date of the spending period.',
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('SpendingPeriodSchema')

const CardInvitationSpendingPeriodSchema = SpendingPeriodSchemaSchema.openapi({
  description:
    "The controls for the card's spending period.\n\nThey specify the dates when the card will become available or unavailable for spending, and define what happens after the end date.",
}).openapi('CardInvitationSpendingPeriod')

const CardInvitationCategoriesSchema = z
  .array(BusinessMerchantCategorySchema)
  .openapi({
    description:
      'The list of merchant categories that will be available for card spending.             \nIf this parameter is not specified, categories are not restricted.',
  })
  .openapi('CardInvitationCategories')

const CardInvitationCountriesSchema = z
  .array(
    z
      .string()
      .regex(/^[A-Z]{2}$/)
      .openapi({ example: 'GB' }),
  )
  .openapi({
    description:
      'The list of countries where the team member will be able to use the card.\nSpecified as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.',
  })
  .openapi('CardInvitationCountries')

const CardInvitationAccountsSchema = z
  .array(z.uuid())
  .openapi({ description: 'The list of accounts that will be linked to the card.' })
  .openapi('CardInvitationAccounts')

const TransactionLimitCurrencySchema = z
  .string()
  .regex(/^[A-Z]{3}$/)
  .openapi({
    description:
      'The currency of the spending limit, provided as [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code in upper case.',
  })
  .openapi('TransactionLimitCurrency')

const SpendingLimitSingleTransactionSchema = z
  .object({
    amount: z.float64().openapi({ description: 'The value of the spending limit.' }),
    currency: TransactionLimitCurrencySchema,
  })
  .openapi({ description: 'The limit for a single transaction.', required: ['amount', 'currency'] })
  .openapi('SpendingLimitSingleTransaction')

const SpendingLimitPeriodicSchema = z
  .object({
    amount: z.float64().openapi({ description: 'The value of the spending limit.' }),
    currency: TransactionLimitCurrencySchema,
  })
  .openapi({
    description: 'The limit for transactions within a given period.',
    required: ['amount', 'currency'],
  })
  .openapi('SpendingLimitPeriodic')

const SpendingLimitsSchemaSchema = z
  .object({
    single: SpendingLimitSingleTransactionSchema.exactOptional().openapi({
      description: 'The limit for a single transaction.',
    }),
    day: SpendingLimitPeriodicSchema.exactOptional().openapi({
      description: 'The daily limit for transactions.',
    }),
    week: SpendingLimitPeriodicSchema.exactOptional().openapi({
      description: 'The weekly limit for transactions.',
    }),
    month: SpendingLimitPeriodicSchema.exactOptional().openapi({
      description: 'The monthly limit for transactions.',
    }),
    quarter: SpendingLimitPeriodicSchema.exactOptional().openapi({
      description: 'The quarterly limit for transactions.',
    }),
    year: SpendingLimitPeriodicSchema.exactOptional().openapi({
      description: 'The yearly limit for transactions.',
    }),
    all_time: SpendingLimitPeriodicSchema.exactOptional().openapi({
      description: 'The all-time limit for transactions.',
    }),
  })
  .openapi({
    example: {
      single: { amount: 200.22, currency: 'GBP' },
      week: { amount: 200.44, currency: 'GBP' },
    },
    required: [],
  })
  .openapi('SpendingLimitsSchema')

const MerchantControlsSchemaSchema = z
  .object({
    control_type: z
      .enum(['block', 'allow'])
      .openapi({
        description:
          'The type of control to apply.\nPossible values:\n\n| Value | Description |\n| --- | --- |\n| **`allow`** | Permits only the specified merchants. |\n| **`block`** | Blocks the specified merchants. |',
      }),
    merchant_ids: z
      .array(z.uuid())
      .min(1)
      .max(20)
      .openapi({
        description:
          'The list of IDs of merchants to which the control applies.\n\n:::tip\nTo find merchant IDs, check transaction details (→ `merchant.id`).\nYou can fetch transaction details for a [specific transaction](https://developer.revolut.com/docs/api/business#get-transaction#response) or for [all transactions](https://developer.revolut.com/docs/api/business#get-transactions#response).\n:::',
      }),
  })
  .openapi({
    description: 'The merchant-level controls for card spending.',
    required: ['control_type', 'merchant_ids'],
  })
  .openapi('MerchantControlsSchema')

const MccControlTypeSchema = z
  .literal('allow')
  .openapi({ 'x-accept-case-insensitive': true, description: 'The type of control to apply.' })
  .openapi('MccControlType')

const MccsSchema = z
  .array(
    z
      .string()
      .regex(/^[0-9]{4}$/)
      .openapi({
        description:
          'A 4-digit [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category code.',
        example: '7033',
      }),
  )
  .min(1)
  .max(100)
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
      'The list of [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes to which the control applies.',
  })
  .openapi('Mccs')

const MccControlsSchemaSchema = z
  .object({ control_type: MccControlTypeSchema, mccs: MccsSchema })
  .openapi({
    description:
      'The MCC controls for card spending.\nThey restrict card spending to merchants with the specified [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes (MCCs).\n:::tip\nMCCs are 4-digit codes used by payment card networks to classify businesses by the type of goods or services they provide — for example, `5411` for grocery stores or `7011` for hotels.\n:::',
    required: ['control_type', 'mccs'],
  })
  .openapi('MccControlsSchema')

const CardInvitationCreatedResponseSchema = z
  .object({
    id: CardInvitationIdSchema,
    state: CardInvitationStateSchema,
    created_at: CardInvitationCreatedAtSchema,
    updated_at: CardInvitationUpdatedAtSchema,
    expiry_date: CardInvitationExpiryDateSchema.exactOptional(),
    holder_id: CardInvitationCreatedHolderIdSchema.exactOptional(),
    virtual: CardInvitationVirtualSchema,
    label: CardInvitationLabelSchema.exactOptional(),
    spending_limits: SpendingLimitsSchemaSchema.exactOptional(),
    spending_period: CardInvitationSpendingPeriodSchema.exactOptional(),
    categories: CardInvitationCategoriesSchema.exactOptional(),
    merchant_controls: MerchantControlsSchemaSchema.exactOptional(),
    mcc_controls: MccControlsSchemaSchema.exactOptional(),
    countries: CardInvitationCountriesSchema.exactOptional(),
    accounts: CardInvitationAccountsSchema,
  })
  .openapi({ required: ['id', 'created_at', 'updated_at', 'virtual', 'state', 'accounts'] })
  .openapi('CardInvitationCreatedResponse')

const SpendProgramSchema = z
  .object({ label: z.string().max(30).openapi({ description: 'The name of the spend program.' }) })
  .openapi({
    description:
      'The [spend program](https://help.revolut.com/business/help/making-paymentsbusiness/spend-controls/setting-card-presets-for-my-team-members/) assigned to the card.\n:::note\nTo use this property, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::',
    readOnly: true,
    required: ['label'],
  })
  .openapi('SpendProgram')

const CardInvitationUpdatedResponseSchema = z
  .object({
    id: CardInvitationIdSchema,
    state: CardInvitationStateSchema,
    created_at: CardInvitationCreatedAtSchema,
    updated_at: CardInvitationUpdatedAtSchema,
    expiry_date: CardInvitationExpiryDateSchema.exactOptional(),
    holder_id: CardInvitationCreatedHolderIdSchema.exactOptional(),
    virtual: CardInvitationVirtualSchema,
    label: CardInvitationLabelSchema.exactOptional(),
    spend_program: SpendProgramSchema.exactOptional(),
    spending_limits: SpendingLimitsSchemaSchema.exactOptional(),
    spending_period: CardInvitationSpendingPeriodSchema.exactOptional(),
    categories: CardInvitationCategoriesSchema.exactOptional(),
    merchant_controls: MerchantControlsSchemaSchema.exactOptional(),
    mcc_controls: MccControlsSchemaSchema.exactOptional(),
    countries: CardInvitationCountriesSchema.exactOptional(),
    accounts: CardInvitationAccountsSchema,
  })
  .openapi({ required: ['id', 'created_at', 'updated_at', 'virtual', 'state', 'accounts'] })
  .openapi('CardInvitationUpdatedResponse')

const CardInvitationResponseSchema = z
  .object({
    id: CardInvitationIdSchema,
    state: CardInvitationStateSchema,
    created_at: CardInvitationCreatedAtSchema,
    updated_at: CardInvitationUpdatedAtSchema,
    expiry_date: CardInvitationExpiryDateSchema.exactOptional(),
    card_id: CardInvitationCardIdSchema.exactOptional(),
    holder_id: CardInvitationHolderIdSchema.exactOptional(),
    virtual: CardInvitationVirtualSchema,
    label: CardInvitationLabelSchema.exactOptional(),
    spend_program: SpendProgramSchema.exactOptional(),
    spending_limits: SpendingLimitsSchemaSchema.exactOptional(),
    spending_period: CardInvitationSpendingPeriodSchema.exactOptional(),
    categories: CardInvitationCategoriesSchema.exactOptional(),
    merchant_controls: MerchantControlsSchemaSchema.exactOptional(),
    mcc_controls: MccControlsSchemaSchema.exactOptional(),
    countries: CardInvitationCountriesSchema.exactOptional(),
    accounts: CardInvitationAccountsSchema,
  })
  .openapi({ required: ['id', 'created_at', 'updated_at', 'virtual', 'state', 'accounts'] })
  .openapi('CardInvitationResponse')

const CardInvitationsResponseSchema = z
  .array(CardInvitationResponseSchema)
  .openapi({ description: 'A list of card invitations' })
  .openapi('CardInvitationsResponse')

const CardIdSchema = z.uuid().openapi({ description: 'The ID of the card.' }).openapi('CardId')

const CardHolderIdSchema = z
  .uuid()
  .openapi({
    description:
      'The ID of the team member who is the holder of the card.\nIf the card belongs to the business, this will be empty.\n\nFor more information, see the guides: [Manage Cards - Create a virtual card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#create-a-virtual-card).',
  })
  .openapi('CardHolderId')

const CardContactSchema = z
  .uuid()
  .openapi({ description: "One of the card's contacts." })
  .openapi('CardContact')

const CardContactsSchema = z
  .array(CardContactSchema)
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
      'The list of contacts for a [company card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards).',
  })
  .openapi('CardContacts')

const CardCreatedAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date and time the card was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
  })
  .openapi('CardCreatedAt')

const CardUpdatedAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date and time the card was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
  })
  .openapi('CardUpdatedAt')

const CardProductSchema = z
  .object({ code: z.string().openapi({ description: 'The code of the card product.' }) })
  .openapi({
    description:
      'The card product offered by the card provider for this card.\nIn other words, the program that the card was issued under.\n\n:::note\nThis property is only available to travel intermediaries using our travel solution.\nTo use it, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::',
    required: ['code'],
  })
  .openapi('CardProduct')

const CardVirtualSchema = z
  .boolean()
  .openapi({ description: 'Specifies whether the card is virtual (`true`) or physical (`false`).' })
  .openapi('CardVirtual')

const CardLastDigitsSchema = z
  .string()
  .regex(/^[0-9]{4}$/)
  .openapi({ description: "The last 4 digits of the card's PAN." })
  .openapi('CardLastDigits')

const CardExpirySchema = z
  .string()
  .regex(/^(0[1-9]|1[0-2])\/[0-9]{4}$/)
  .openapi({ description: 'The card expiration date.' })
  .openapi('CardExpiry')

const CardLabelSchema = z
  .string()
  .openapi({ description: 'The label of the card.' })
  .openapi('CardLabel')

const CardReferenceSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(30)
      .openapi({ description: 'The name of the card reference.\nMust be unique.' }),
    value: z.string().min(1).max(30).openapi({ description: 'The value for this reference.' }),
  })
  .openapi({
    description:
      'Reference for the card.\nOne of the name-value pairs assigned to the card for tracking.\n\n:::info\nEach time the card is used, the references are recorded in the [transaction details](https://developer.revolut.com/docs/api/business#get-transaction#response) (`card.references`), helping track transactions made with this card.\n:::\n\nThe names must be unique.\nThe references can be [amended](https://developer.revolut.com/docs/api/business#update-card-references) up to 10 times.\nReferences are only supported for cards owned by the business (i.e. [company](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) or [auto-issued cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards)).\nThey are **not** supported for [team member cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (i.e. with `holder_id` present). \n\n:::note\nThe references recorded on a transaction are those assigned to the card at the time the transaction took place.\nIf the references are amended, the new references are only applied to future transactions.\nExisting transaction are not affected.\n:::',
    required: ['name', 'value'],
    example: { name: 'PNR', value: 'RT12345' },
  })
  .openapi('CardReference')

const CardReferencesSchema = z
  .array(CardReferenceSchema)
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
      'References for the card.\nUp to 5 name-value pairs assigned to the card for tracking.\n\n:::info\nEach time the card is used, the references are recorded in the [transaction details](https://developer.revolut.com/docs/api/business#get-transaction#response) (`card.references`), helping track transactions made with this card.\n:::\n\nThe names must be unique.\nThe references can be [amended](https://developer.revolut.com/docs/api/business#update-card-references) up to 10 times.\n\nReferences are only supported for cards owned by the business (i.e. [company](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) or [auto-issued cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards)).\nThey are **not** supported for [team member cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (i.e. with `holder_id` present).\n\n:::note\nThe references recorded on a transaction are those assigned to the card at the time the transaction took place.\nIf the references are amended, they will only be applied to future transactions.\nExisting transaction are not affected.\n:::',
    example: [
      { name: 'PNR', value: 'RT12345' },
      { name: 'Traveller', value: 'John Smith' },
    ],
  })
  .openapi('CardReferences')

const CardStateSchema = z
  .enum(['created', 'pending', 'active', 'frozen', 'locked'])
  .openapi({
    description:
      "The state that the card is in.\n\nPossible values:\n| Value | Description |\n| --- | --- |\n| **`active`** | The card is available for spending. Newly created cards typically go into `active` unless subject to certain conditions, for example, spending period starting in the future. |\n| **`frozen`** | The card has been frozen and is temporarily unavailable for spending. |\n| **`locked`** | The card is locked, typically due to an [admin lock](https://developer.revolut.com/docs/api/business#lock-card) or spending period settings, i.e. when its `spending_period.start_date` is in the future or `spending_period.end_date` is in the past. A locked card is unavailable for spending until it's [unlocked](https://developer.revolut.com/docs/api/business#unlock-card) and active. |\n| **`created`** | The card has been created but is not yet active. Used only for a specific type of cards. |\n| **`pending`** | This status is currently not in use. |\n\n:::tip[Card locked?]\nTo see if the card can be unlocked, check the `can_be_unlocked` parameter.\nNote that you'll still need the [necessary scope or permission](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#lock-or-unlock-cards) to unlock it.\n:::",
  })
  .openapi('CardState')

const CardCanBeUnlockedSchema = z
  .boolean()
  .openapi({
    description:
      "Returned for locked cards (`state=locked`).\nIndicates whether the card can be [unlocked](https://developer.revolut.com/docs/api/business#unlock-card) manually (via API or in-app).\nIf `true`, you'll still need the [necessary scope or permission](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#lock-or-unlock-cards) to unlock the card.\n\n:::info\nCards can be locked for various reasons.\nFor example, a card can be locked by the user, due to spending period settings, or automatically by the system.\nOnly certain types of lock can be lifted manually.\n:::",
  })
  .openapi('CardCanBeUnlocked')

const CardSpendingPeriodSchema = SpendingPeriodSchemaSchema.openapi({
  description:
    "The controls for the card's spending period.\n\nThey specify the dates when the card becomes available or unavailable for spending, and define what happens after the end date.",
}).openapi('CardSpendingPeriod')

const CardBusinessMerchantCategoriesSchema = z
  .array(BusinessMerchantCategorySchema)
  .openapi({
    description:
      'The list of merchant categories that are available for card spending. If not specified, categories are not restricted.',
  })
  .openapi('CardBusinessMerchantCategories')

const CardMerchantControlsSchema = MerchantControlsSchemaSchema.openapi({
  description:
    'The merchant-level controls for card spending.\n\nThey block or allow the card to only transact with specific merchants.',
}).openapi('CardMerchantControls')

const CardCountriesSchema = z
  .array(
    z
      .string()
      .regex(/^[A-Z]{2}$/)
      .openapi({ example: 'GB' }),
  )
  .openapi({
    description:
      'The list of countries where the card can be used, specified as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.',
  })
  .openapi('CardCountries')

const CardAccountsSchema = z
  .array(z.uuid())
  .openapi({ description: 'The list of linked accounts.' })
  .openapi('CardAccounts')

const CardCreatedResponseSchema = z
  .object({
    id: CardIdSchema,
    holder_id: CardHolderIdSchema.exactOptional(),
    contact_ids: CardContactsSchema.exactOptional(),
    created_at: CardCreatedAtSchema,
    updated_at: CardUpdatedAtSchema,
    product: CardProductSchema.exactOptional(),
    virtual: CardVirtualSchema,
    last_digits: CardLastDigitsSchema,
    expiry: CardExpirySchema,
    label: CardLabelSchema.exactOptional(),
    references: CardReferencesSchema.exactOptional(),
    state: CardStateSchema.openapi({ description: 'The state that the card is in.' }),
    can_be_unlocked: CardCanBeUnlockedSchema.exactOptional(),
    spending_limits: SpendingLimitsSchemaSchema.exactOptional(),
    spending_period: CardSpendingPeriodSchema.exactOptional(),
    categories: CardBusinessMerchantCategoriesSchema.exactOptional(),
    merchant_controls: CardMerchantControlsSchema.exactOptional(),
    mcc_controls: MccControlsSchemaSchema.exactOptional(),
    countries: CardCountriesSchema.exactOptional(),
    accounts: CardAccountsSchema,
  })
  .openapi({
    required: [
      'id',
      'created_at',
      'updated_at',
      'virtual',
      'last_digits',
      'expiry',
      'state',
      'accounts',
    ],
  })
  .openapi('CardCreatedResponse')

const CardResponseSchema = z
  .object({
    id: CardIdSchema,
    holder_id: CardHolderIdSchema.exactOptional(),
    contact_ids: CardContactsSchema.exactOptional(),
    created_at: CardCreatedAtSchema,
    updated_at: CardUpdatedAtSchema,
    product: CardProductSchema.exactOptional(),
    virtual: CardVirtualSchema,
    last_digits: CardLastDigitsSchema,
    expiry: CardExpirySchema,
    label: CardLabelSchema.exactOptional(),
    references: CardReferencesSchema.exactOptional(),
    state: CardStateSchema,
    can_be_unlocked: CardCanBeUnlockedSchema.exactOptional(),
    spend_program: SpendProgramSchema.exactOptional(),
    spending_limits: SpendingLimitsSchemaSchema.exactOptional(),
    spending_period: CardSpendingPeriodSchema.exactOptional(),
    categories: CardBusinessMerchantCategoriesSchema.exactOptional(),
    merchant_controls: CardMerchantControlsSchema.exactOptional(),
    mcc_controls: MccControlsSchemaSchema.exactOptional(),
    countries: CardCountriesSchema.exactOptional(),
    accounts: CardAccountsSchema,
  })
  .openapi({
    required: [
      'id',
      'created_at',
      'updated_at',
      'virtual',
      'last_digits',
      'expiry',
      'state',
      'accounts',
    ],
  })
  .openapi('CardResponse')

const CardsResponseSchema = z
  .array(CardResponseSchema)
  .openapi({ description: 'A list of cards.' })
  .openapi('CardsResponse')

const CardTerminatedAtSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'The date and time the card was terminated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. Only returned for cards in the `terminated` state. This is distinct from `updated_at`, as a terminated card can still have updates after termination.',
    example: '2026-07-22T11:15:41.113202Z',
  })
  .openapi('CardTerminatedAt')

const CardStateWithTerminatedSchema = z
  .enum(['created', 'pending', 'active', 'frozen', 'locked', 'terminated'])
  .openapi({
    description:
      "The state that the card is in.\n\nPossible values:\n| Value | Description |\n| --- | --- |\n| **`active`** | The card is available for spending. Newly created cards typically go into `active` unless subject to certain conditions, for example, spending period starting in the future. |\n| **`frozen`** | The card has been frozen and is temporarily unavailable for spending. |\n| **`locked`** | The card is locked, typically due to an [admin lock](https://developer.revolut.com/docs/api/business#lock-card) or spending period settings, i.e. when its `spending_period.start_date` is in the future or `spending_period.end_date` is in the past. A locked card is unavailable for spending until it's [unlocked](https://developer.revolut.com/docs/api/business#unlock-card) and active. |\n| **`created`** | The card has been created but is not yet active. Used only for a specific type of cards. |\n| **`pending`** | This status is currently not in use. |\n| **`terminated`** | The card is terminated and cannot be used. This is a final state and cannot be reversed. |\n\n:::tip[Card locked?]\nTo see if the card can be unlocked, check the `can_be_unlocked` parameter.\nNote that you'll still need the [necessary scope or permission](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#lock-or-unlock-cards) to unlock it.\n:::",
  })
  .openapi('CardStateWithTerminated')

const SpendingLimitPeriodicWithUsageSchema = SpendingLimitPeriodicSchema.and(
  z
    .object({
      usage: z
        .float64()
        .min(0)
        .exactOptional()
        .openapi({
          description:
            'The amount used within the current spending-limit period, in the same currency and decimal representation as `amount`. Returned only when usage data is available.',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({
    description:
      'The limit for transactions within a given period, including spending limit utilisation.',
  })
  .openapi('SpendingLimitPeriodicWithUsage')

const SpendingLimitsWithUsageSchema = z
  .object({
    single: SpendingLimitSingleTransactionSchema.exactOptional().openapi({
      description: 'The limit for a single transaction.',
    }),
    day: SpendingLimitPeriodicWithUsageSchema.exactOptional().openapi({
      description: 'The daily limit for transactions.',
    }),
    week: SpendingLimitPeriodicWithUsageSchema.exactOptional().openapi({
      description: 'The weekly limit for transactions.',
    }),
    month: SpendingLimitPeriodicWithUsageSchema.exactOptional().openapi({
      description: 'The monthly limit for transactions.',
    }),
    quarter: SpendingLimitPeriodicWithUsageSchema.exactOptional().openapi({
      description: 'The quarterly limit for transactions.',
    }),
    year: SpendingLimitPeriodicWithUsageSchema.exactOptional().openapi({
      description: 'The yearly limit for transactions.',
    }),
    all_time: SpendingLimitPeriodicWithUsageSchema.exactOptional().openapi({
      description: 'The all-time limit for transactions.',
    }),
  })
  .openapi({
    description:
      'All spending limits set for the card, including spending limit utilisation for periodic limits.',
    required: [],
  })
  .openapi('SpendingLimitsWithUsage')

const CardResponseWithTerminatedSchema = z
  .object({
    id: CardIdSchema,
    holder_id: CardHolderIdSchema.exactOptional(),
    contact_ids: CardContactsSchema.exactOptional(),
    created_at: CardCreatedAtSchema,
    updated_at: CardUpdatedAtSchema,
    terminated_at: CardTerminatedAtSchema.exactOptional(),
    product: CardProductSchema.exactOptional(),
    virtual: CardVirtualSchema,
    last_digits: CardLastDigitsSchema,
    expiry: CardExpirySchema,
    label: CardLabelSchema.exactOptional(),
    references: CardReferencesSchema.exactOptional(),
    state: CardStateWithTerminatedSchema,
    can_be_unlocked: CardCanBeUnlockedSchema.exactOptional(),
    spend_program: SpendProgramSchema.exactOptional(),
    spending_limits: SpendingLimitsWithUsageSchema.exactOptional(),
    spending_period: CardSpendingPeriodSchema.exactOptional(),
    categories: CardBusinessMerchantCategoriesSchema.exactOptional(),
    merchant_controls: CardMerchantControlsSchema.exactOptional(),
    mcc_controls: MccControlsSchemaSchema.exactOptional(),
    countries: CardCountriesSchema.exactOptional(),
    accounts: CardAccountsSchema,
  })
  .openapi({
    required: [
      'id',
      'created_at',
      'updated_at',
      'virtual',
      'last_digits',
      'expiry',
      'state',
      'accounts',
    ],
  })
  .openapi('CardResponseWithTerminated')

const CategorySchema = z
  .object({
    id: z.uuid().openapi({ description: 'The ID of the accounting category.' }),
    name: z.string().openapi({ description: 'The name of the accounting category.' }),
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the accounting category.' }),
  })
  .openapi({
    description:
      'The [accounting category](https://developer.revolut.com/docs/api/business#delete-accounting-category) of the expense split.',
    required: ['id', 'name'],
  })
  .openapi('Category')

const ChargeBearerSchema = z
  .enum(['shared', 'debtor', 'prefer_debtor'])
  .openapi({
    description:
      "The party to which any transaction fees are charged if the resulting transaction route has associated fees: \n\n| Value | Description |\n| --- | --- |\n| **`shared`** | Also known as **SHA**. The transaction route fees are split between the sender and the recipient. The sender pays the fees charged by their bank, while the recipient pays the fees charged by the receiving and any intermediary banks. |\n| **`debtor`** | Also known as **OUR**. The sender pays all explicit transaction fees. |\n| **`prefer_debtor`** | Selects the SWIFT **OUR** option when available. If the payment doesn't offer the OUR option, this value is ignored and the default fee handling applies — no error `3287` is returned. |\n\n:::note\nSome transactions with fees might not support forced charge bearer selection.\nIf this is the case, the request will return an error.\nThis does **not** apply to `prefer_debtor`, which falls back to default if `debtor` is not available.\n:::",
  })
  .openapi('ChargeBearer')

const ProfileTypeSchema = z
  .enum(['personal', 'business'])
  .openapi({
    description:
      'The type of the counterparty.\nIndicates whether the recipient is an individual or a company.',
  })
  .openapi('ProfileType')

const CountryCodeSchema = z
  .string()
  .regex(/^[A-Z]{2}$/)
  .openapi({
    description:
      "The counterparty's bank country, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.",
  })
  .openapi('CountryCode')

const CounterpartyAddressSchema = z
  .object({
    street_line1: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'Street line 1 information.' }),
    street_line2: z
      .string()
      .max(100)
      .exactOptional()
      .openapi({ description: 'Street line 2 information.' }),
    region: z
      .string()
      .max(50)
      .exactOptional()
      .openapi({
        description: 'The name of the region (state or province), for example, Ontario for Canada.',
      }),
    city: z.string().max(50).exactOptional().openapi({ description: 'The name of the city.' }),
    country: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .openapi({
        description:
          'The country of the counterparty, as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.',
      }),
    postcode: z
      .string()
      .max(15)
      .exactOptional()
      .openapi({ description: 'The postcode of the counterparty address.' }),
  })
  .openapi({ description: "The address of the counterparty's account.", required: ['country'] })
  .openapi('CounterpartyAddress')

const CounterpartyAccountSchema = z
  .object({
    id: z.uuid().openapi({ description: "The ID of the counterparty's account." }),
    name: z.string().exactOptional().openapi({ description: 'The name of the counterparty.' }),
    bank_country: BankCountryCodeSchema.exactOptional(),
    currency: AccountCurrencySchema,
    type: z
      .enum(['revolut', 'external'])
      .openapi({ description: 'Indicates the type of account.' }),
    account_no: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank account number of the counterparty.' }),
    iban: z
      .string()
      .exactOptional()
      .openapi({ description: "The IBAN number of the counterparty's account if applicable." }),
    sort_code: z
      .string()
      .exactOptional()
      .openapi({ description: "The sort code of the counterparty's account if applicable." }),
    routing_number: z
      .string()
      .exactOptional()
      .openapi({ description: "The routing number of the counterparty's account if applicable." }),
    bic: z
      .string()
      .exactOptional()
      .openapi({ description: "The BIC number of the counterparty's account if applicable." }),
    clabe: z
      .string()
      .exactOptional()
      .openapi({ description: "The CLABE number of the counterparty's account if applicable." }),
    ifsc: z
      .string()
      .exactOptional()
      .openapi({ description: "The IFSC number of the counterparty's account if applicable." }),
    bsb_code: z
      .string()
      .exactOptional()
      .openapi({ description: "The BSB number of the counterparty's account if applicable." }),
    route: z
      .enum(['ach', 'fedwire', 'swift'])
      .exactOptional()
      .openapi({
        description:
          'Routing method for US/USD transfers. Defaults to `ach` for US-registered businesses and `fedwire` for non-US businesses.',
        example: 'ach',
      }),
    bank_number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Brazilian bank identification code (COMPE). Returned for BR counterparties.',
        example: '033',
      }),
    branch_code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Brazilian branch (agência) code. Returned for BR counterparties.',
        example: '0001',
      }),
    account_type: z
      .enum(['checking', 'savings'])
      .exactOptional()
      .openapi({
        description:
          'Bank account type. Returned for BR, CO, and CL counterparties. Defaults to `checking` for US ACH transfers.',
        example: 'checking',
      }),
    tax_id: z
      .string()
      .max(20)
      .exactOptional()
      .openapi({
        description:
          'Tax identification number.\nRouted based on `bank_country` and recipient type:\n\n| Country   | Recipient type                   | Tax ID type                                   | Format                                              | Example                                  |\n|-----------|----------------------------------|-----------------------------------------------|-----------------------------------------------------|------------------------------------------|\n| **BR**    | **Individual**                   | CPF (Cadastro de Pessoas Físicas)             | `^\\d{11}$` or `^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$`         | `52998224725` or `529.982.247-25`        |\n| **BR**    | **Company**                      | CNPJ (Cadastro Nacional da Pessoa Jurídica)   | `^\\d{14}$` or `^\\d{2}\\.\\d{3}\\.\\d{3}/\\d{4}-\\d{2}$`   | `12345678000195` or `12.345.678/0001-95` |\n| **CO**    | **Company**                      | NIT (Número de Identificación Tributaria)     | `^\\d{10}$`                                          | `9012345678`                             |\n| **CL**    | **Individual**, **Company**      | RUT (Rol Único Tributario)                    | `^\\d{7,8}[0-9Kk]$`                                  | `12345678K`                              |',
      }),
    national_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'National identification number.\nSpecifies Colombian Cédula de Ciudadanía when `bank_country` is `CO` and `profile_type` is `personal`.',
      }),
    phone: z
      .string()
      .max(20)
      .exactOptional()
      .openapi({
        description:
          'The phone number of the counterparty in [E.164](https://en.wikipedia.org/wiki/E.164) format.\n\nCountry-specific formats:\n\n| Country | Format description          | Format          | Example         |\n|---------|-----------------------------|-----------------|-----------------|\n| **CO**  | `+57` followed by 10 digits | `^\\+?57\\d{10}$` | `+573001234567` |\n| **LK**  | `+94` followed by 10 digits | `^\\+?94\\d{10}$` | `+941234567890` |\n| **KR**  | `+82` followed by 10 digits | `^\\+?82\\d{10}$` | `+821012345678` |',
        example: '+573001234567',
      }),
    business_registration_id: z
      .string()
      .max(64)
      .exactOptional()
      .openapi({
        description: 'Company registration number. Used for business LK counterparties.',
        example: 'PV12345',
      }),
    recipient_charges: z
      .enum(['no', 'expected'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the possibility of the recipient charges.\n\n:::warning\nThis field is deprecated and should be disregarded.\nIt is returned for legacy purposes only.\n:::',
        deprecated: true,
      }),
    address: CounterpartyAddressSchema.exactOptional(),
  })
  .openapi({ required: ['id', 'currency', 'type'] })
  .openapi('CounterpartyAccount')

const CountryCodeCardSchema = z
  .string()
  .regex(/^[A-Z]{2}$/)
  .openapi({
    description:
      'The country of the card issuer, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.',
  })
  .openapi('CountryCodeCard')

const CounterpartyCardSchema = z
  .object({
    id: z.uuid().openapi({ description: "The ID of the counterparty's card." }),
    name: z.string().openapi({ description: 'The name of the counterparty.' }),
    last_digits: z.string().openapi({ description: 'The last four digits of the card number.' }),
    scheme: z.enum(['visa', 'mastercard']).openapi({ description: 'The card brand.' }),
    country: CountryCodeCardSchema,
    currency: CurrencySchema,
  })
  .openapi({ required: ['id', 'name', 'last_digits', 'scheme', 'country', 'currency'] })
  .openapi('CounterpartyCard')

const CounterpartySchema = z
  .object({
    id: z.uuid().openapi({ description: 'The ID of the counterparty.' }),
    name: z.string().openapi({ description: 'The name of the counterparty.' }),
    revtag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [Revtag](https://help.revolut.com/help/transfers/internal-transfers/username-payments/revtags/) of the counterparty.',
      }),
    profile_type: ProfileTypeSchema.exactOptional(),
    country: CountryCodeSchema.exactOptional(),
    state: z
      .enum(['created', 'draft', 'deleted'])
      .openapi({ description: 'Indicates the state of the counterparty.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the counterparty was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the counterparty was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    accounts: z
      .array(CounterpartyAccountSchema)
      .exactOptional()
      .openapi({ description: 'The list of public accounts associated with this counterparty.' }),
    cards: z
      .array(CounterpartyCardSchema)
      .exactOptional()
      .openapi({ description: 'The list of cards associated with this counterparty.' }),
  })
  .openapi({ required: ['id', 'name', 'state', 'created_at', 'updated_at'] })
  .openapi('Counterparty')

const CounterpartiesSchema = z.array(CounterpartySchema).openapi('Counterparties')

const CounterpartyErrorParamsSchema = z
  .object({
    counterparty_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The ID of the Revolut counterparty (i.e. internal counterparty) that already exists.',
      }),
  })
  .openapi({ description: 'Additional parameters related to the error.', required: [] })
  .openapi('CounterpartyErrorParams')

const CounterpartyErrorSchema = z
  .object({
    code: z.int().openapi({ description: 'The error code.' }),
    message: z.string().openapi({ description: 'The description of the error.' }),
    params: CounterpartyErrorParamsSchema.exactOptional(),
  })
  .openapi({ required: ['code', 'message'] })
  .openapi('CounterpartyError')

const CountryCodeMerchantSchema = z
  .string()
  .regex(/^[A-Z]{2,3}$/)
  .openapi({
    description:
      'The bank country of the merchant, provided as an [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.\nTypically 3 letters, though in some cases, card networks might provide it as a 2-letter code.',
  })
  .openapi('CountryCodeMerchant')

const CreateAccountingCategoryRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(60)
      .openapi({
        description: 'The full name for the accounting category.',
        example: 'Work From Home equipment',
      }),
    code: z
      .string()
      .min(1)
      .max(50)
      .openapi({ description: 'The code name for the accounting category.', example: 'WFH' }),
    default_tax_rate_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The ID of the default [tax rate](https://developer.revolut.com/docs/api/business#get-tax-rate) that should be applied to items in this accounting category unless overridden for a specific item.',
        example: 'f93f6c3e-bf95-4b58-bfcd-e642c4fc098e',
      }),
  })
  .openapi({ description: 'The accounting category to create.', required: ['name', 'code'] })
  .openapi('CreateAccountingCategoryRequest')

const CounterpartyCountrySchema = z
  .object({
    country: BankCountryCodeSchema,
    currencies: z
      .array(CurrencySchema)
      .openapi({
        description: 'The currencies available for counterparty creation in this country.',
      }),
  })
  .openapi({
    description: 'A supported bank country with its available currencies.',
    required: ['country', 'currencies'],
  })
  .openapi('CounterpartyCountry')

const CounterpartyCountriesResponseSchema = z
  .object({
    countries: z
      .array(CounterpartyCountrySchema)
      .openapi({ description: 'A list of supported bank countries.' }),
  })
  .openapi({
    description: 'The response containing supported bank countries and their available currencies.',
    required: ['countries'],
  })
  .openapi('CounterpartyCountriesResponse')

const CounterpartyRequirementsFieldRegexSchema = z
  .object({
    pattern: z.string().openapi({ description: 'The regex pattern the field value must match.' }),
    description: z
      .string()
      .openapi({ description: 'A human-readable description of the regex constraint.' }),
  })
  .openapi({
    description: 'Regular expression validation rules.',
    required: ['pattern', 'description'],
  })
  .openapi('CounterpartyRequirementsFieldRegex')

const CounterpartyRequirementsFieldOptionSchema = z
  .object({
    value: z.string().openapi({ description: 'The accepted value to be passed to the API.' }),
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates the default option for the field if there is one.' }),
  })
  .openapi({ description: 'An allowed value option for the field.', required: ['value'] })
  .openapi('CounterpartyRequirementsFieldOption')

const CounterpartyRequirementsFieldSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'The name of the field to be provided in the [Create a counterparty endpoint](https://developer.revolut.com/docs/api/business#add-counterparty) request body. \nMatches the field names in the Create a counterparty endpoint exactly (e.g. `first_name`, `last_name`, `tax_id`, `route`, `account_type`).',
      }),
    required: z
      .boolean()
      .openapi({
        description:
          'Indicates whether this field must be provided when creating the counterparty.',
      }),
    regex: CounterpartyRequirementsFieldRegexSchema.exactOptional(),
    options: z
      .array(CounterpartyRequirementsFieldOptionSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of allowed values for the field (enum).\nIf provided, the field value must be one of these options.',
      }),
  })
  .openapi({
    description: 'Represents a contextual field and its rules.',
    required: ['name', 'required'],
  })
  .openapi('CounterpartyRequirementsField')

const CounterpartyRequirementsResponseSchema = z
  .object({
    fields: z
      .array(CounterpartyRequirementsFieldSchema)
      .openapi({
        description:
          'A list of applicable and conditionally required fields for the specific counterparty context.',
      }),
  })
  .openapi({
    description:
      'The response containing applicable counterparty fields and their validation rules.',
    required: ['fields'],
  })
  .openapi('CounterpartyRequirementsResponse')

const IndividualNameSchema = z
  .object({
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the individual counterparty.' }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the individual counterparty.' }),
  })
  .openapi({
    description:
      'The name of the counterparty, provided when the counterparty is an **individual** (personal account type) and is **not** being added via Revtag.\n\nIf specified, `company_name` and `name` must be empty.',
    required: [],
  })
  .openapi('IndividualName')

const CreateCounterpartyRequestSchema = z
  .object({
    profile_type: z
      .enum(['personal', 'business'])
      .exactOptional()
      .openapi({
        description:
          'The type of the Revolut profile.\nIndicates whether the counterparty is a personal or business account.\nProvide it when adding a Revolut counterparty via Revtag.',
      }),
    revtag: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [Revtag](https://help.revolut.com/help/transfers/internal-transfers/username-payments/revtags/) of the counterparty to add.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the counterparty, provided when the counterparty is being added via **Revtag**.\n\nIf specified, `individual_name` and `company_name` must be empty.\n\n:::note\nThe name that you provide must match or closely match the actual name associated with the account that you're trying to add.\nOtherwise, the creation fails and a `404` error is returned.\n:::\n",
      }),
    company_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the counterparty, provided when the counterparty is a **company** (business account type) and is **not** being added via Revtag.\n\nIf specified, `individual_name` and `name` must be empty.\n\n:::warning\nThe `company_name` must contain at least 2 letters (not just characters).\nFor example, names like `12` will fail validation because they are two characters but not two letters.\n:::',
      }),
    individual_name: IndividualNameSchema.exactOptional(),
    bank_country: BankCountryCodeSchema.exactOptional(),
    currency: CurrencySchema.exactOptional(),
    account_no: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank account number of the counterparty.' }),
    iban: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The IBAN number of the counterparty's account. This field is displayed for IBAN countries.",
      }),
    sort_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The sort code of the counterparty's account. This field is required for GBP accounts.",
      }),
    routing_number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The routing number of the counterparty's account. This field is required for USD accounts.",
      }),
    bic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The BIC number of the counterparty's account. This field is required for non-SEPA IBAN/SWIFT.",
      }),
    clabe: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The CLABE number of the counterparty's account. This field is required for SWIFT MX.",
      }),
    ifsc: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The IFSC number of the counterparty's account. This field is required for INR accounts.",
      }),
    bsb_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The BSB number of the counterparty's account. This field is required for AUD accounts.",
      }),
    address: BeneficiaryAddressSchema.exactOptional(),
    route: z
      .enum(['ach', 'fedwire', 'swift'])
      .exactOptional()
      .openapi({
        description:
          'Routing method for US USD transfers. When omitted, defaults to `ach` for US-registered businesses and `fedwire` for non-US businesses. \n\nRequired when `bank_country` is `US` and the desired routing method differs from the default.',
        example: 'ach',
      }),
    bank_number: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({
        description: 'Brazilian bank identification code (COMPE). Required for BR counterparties.',
        example: '033',
      }),
    branch_code: z
      .string()
      .length(4)
      .exactOptional()
      .openapi({
        description: 'Brazilian branch (agência) code. Required for BR counterparties.',
        example: '0001',
      }),
    account_type: z
      .enum(['checking', 'savings'])
      .exactOptional()
      .openapi({
        description:
          'Bank account type. Defaults to `checking` for US ACH transfers when omitted. \n\nRequired for BR, CO, and CL counterparties.',
        example: 'checking',
      }),
    tax_id: z
      .string()
      .max(20)
      .exactOptional()
      .openapi({
        description:
          'Tax identification number.\n\nRequired and routed based on `bank_country` and recipient type:\n\n| Country   | Recipient type                   | Tax ID type                                   | Format                                              | Example                                  |\n|-----------|----------------------------------|-----------------------------------------------|-----------------------------------------------------|------------------------------------------|\n| **BR**    | **Individual**                   | CPF (Cadastro de Pessoas Físicas)             | `^\\d{11}$` or `^\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}$`         | `52998224725` or `529.982.247-25`        |\n| **BR**    | **Company**                      | CNPJ (Cadastro Nacional da Pessoa Jurídica)   | `^\\d{14}$` or `^\\d{2}\\.\\d{3}\\.\\d{3}/\\d{4}-\\d{2}$`   | `12345678000195` or `12.345.678/0001-95` |\n| **CO**    | **Company**                      | NIT (Número de Identificación Tributaria)     | `^\\d{10}$`                                          | `9012345678`                             |\n| **CL**    | **Individual**, **Company**      | RUT (Rol Único Tributario)                    | `^\\d{7,8}[0-9Kk]$`                                  | `12345678K`                              |',
      }),
    national_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'National identification number. Required  when `bank_country` is `CO` and `profile_type` is `personal`, must specify Colombian Cédula de Ciudadanía.',
      }),
    phone: z
      .string()
      .max(20)
      .exactOptional()
      .openapi({
        description:
          "The phone number of the counterparty in [E.164](https://en.wikipedia.org/wiki/E.164) format.\n\n- For internal (Revolut) counterparties: the recipient's Revolut phone number used to look them up.\n- For external counterparties in CO, KR, and LK: the bank account phone number. Required when `bank_country` is `CO`, `KR`, or `LK`.\n\nCountry-specific formats:\n\n| Country | Format description          | Format          | Example         |\n|---------|-----------------------------|-----------------|-----------------|\n| **CO**  | `+57` followed by 10 digits | `^\\+?57\\d{10}$` | `+573001234567` |\n| **KR**  | `+82` followed by 10 digits | `^\\+?82\\d{10}$` | `+821012345678` |\n| **LK**  | `+94` followed by 10 digits | `^\\+?94\\d{10}$` | `+941234567890` |",
        example: '+573001234567',
      }),
    business_registration_id: z
      .string()
      .max(64)
      .exactOptional()
      .openapi({
        description:
          'Company registration number. Required for business LK counterparties (`profile_type`: `business`).',
        example: 'PV12345',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateCounterpartyRequest')

const CreateLabelRequestSchema = z
  .object({
    name: z.string().min(1).max(100).openapi({ description: 'The name for the new label.' }),
  })
  .openapi({ required: ['name'] })
  .openapi('CreateLabelRequest')

const CreateLabelGroupRequestSchema = z
  .object({
    name: z.string().min(1).max(100).openapi({ description: 'The name for the new label group.' }),
    labels: z
      .array(CreateLabelRequestSchema)
      .min(1)
      .max(200)
      .openapi({
        description:
          'The labels to create in the new group.\n\nThe maximum number of labels you can create for a new group is 200.\nIf you need to add more, you can add them later by [creating new labels individually](https://developer.revolut.com/docs/api/business#create-label).',
      }),
  })
  .openapi({ required: ['name', 'labels'] })
  .openapi('CreateLabelGroupRequest')

const PaymentReceiverSchema = z
  .object({
    counterparty_id: z.uuid().openapi({ description: 'The ID of the receiving counterparty.' }),
    account_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "The ID of the receiving counterparty's account. Used for bank transfers.\n\nIf the counterparty has multiple payment methods available, use it to specify the account to which you want to send the money.",
      }),
    card_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "The ID of the receiving counterparty's card.\nUsed for card transfers.\n\nIf the counterparty has multiple payment methods available, use it to specify the card to which you want to send the money.",
      }),
  })
  .openapi({
    description:
      'The details of the transfer recipient.\n\nIf the counterparty has multiple payment methods available (e.g. 2 accounts, or 1 account and 1 card), you must specify the account (`account_id`) or card (`card_id`) to which you want to transfer the money.',
    required: ['counterparty_id'],
  })
  .openapi('PaymentReceiver')

const TransferReasonCodeSchema = z
  .string()
  .openapi({
    description:
      'The reason code for the transaction. Transactions to certain countries and currencies might require you to provide a transfer reason. \nYou can check available reason codes with the [`GET /transfer-reasons` operation](https://developer.revolut.com/docs/api/business#get-transfer-reasons).\n\nIf a transfer reason is not required for the given currency and country, this field is ignored.',
    example: 'property_rental',
  })
  .openapi('TransferReasonCode')

const PaymentRequestSchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({
        description:
          'The ID of the account to pay from. \n\n:::note\nYou can specify only one account ID for multiple payments in the same payment draft.\n:::',
      }),
    receiver: PaymentReceiverSchema,
    amount: z.float64().positive().openapi({ description: 'The amount of the payment.' }),
    currency: CurrencySchema,
    reference: z
      .string()
      .max(255)
      .openapi({
        description:
          'The reference for the payment.\nA piece of text or number you provide to help identify what the payment relates to.\nIt can be used, for example, for reconciliation or tracking purposes.\n\nYou might include an invoice number, account or transaction ID, or any other reference meaningful to you.',
      }),
    charge_bearer: z
      .enum(['shared', 'debtor'])
      .exactOptional()
      .openapi({
        description:
          'The party that should bear the transaction fees related to the selected transaction route if applied.\nPossible options are: \n\n| Value | Description |\n| --- | --- |\n| **`shared`** | Also known as **SHA**. The transaction route fees are split between the sender and the recipient. The sender pays the fees charged by their bank, while the recipient pays the fees charged by the receiving and any intermediary banks. |\n| **`debtor`** | Also known as **OUR**. The sender pays all explicit transaction fees. |\n\n:::note\n- This field is not supported for [bulk payments](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts#use-cases).\n- Some transactions with fees might not support charge bearer selection.\n  If this is the case, the request will return an error.\n  To proceed with the default fee handling, remove this field from your request and try again.\n:::',
      }),
    transfer_reason_code: TransferReasonCodeSchema.exactOptional(),
  })
  .openapi({
    description: 'The details of the draft payment.',
    required: ['account_id', 'receiver', 'amount', 'currency', 'reference'],
  })
  .openapi('PaymentRequest')

const CreatePaymentDraftRequestSchema = z
  .object({
    title: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({ description: 'The title of the payment draft.' }),
    schedule_for: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The scheduled date of the payment draft in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    payments: z
      .array(PaymentRequestSchema)
      .openapi({ description: 'The details of the payment(s) to be made.' }),
  })
  .openapi({ required: ['payments'] })
  .openapi('CreatePaymentDraftRequest')

const CreatePaymentDraftResponseSchema = z
  .object({ id: z.string().openapi({ description: 'The ID of the payment draft created.' }) })
  .openapi({ required: ['id'] })
  .openapi('CreatePaymentDraftResponse')

const CreatePaymentDraftPaymentResponseSchema = z
  .object({ id: z.uuid().openapi({ description: 'The ID of the payment added to the draft.' }) })
  .openapi({ required: ['id'] })
  .openapi('CreatePaymentDraftPaymentResponse')

const PayoutLinkCounterpartyNameSchema = z
  .string()
  .openapi({
    description: 'The name of the counterparty provided by the sender.',
    example: 'John Smith',
  })
  .openapi('PayoutLinkCounterpartyName')

const PayoutLinkRequestIdSchema = z
  .string()
  .openapi({
    description: 'The ID of the request, provided by the sender.',
    example: '5a7fcb46-4be4-47d4-a56f-27a2e5b78dd1',
  })
  .openapi('PayoutLinkRequestId')

const PayoutLinkAccountIdSchema = z
  .uuid()
  .openapi({
    description: "The ID of the sender's account.",
    example: '85f515e4-588f-4496-a6a5-a7615a193e6b',
  })
  .openapi('PayoutLinkAccountId')

const PayoutLinkAmountSchema = z
  .float64()
  .openapi({
    description:
      'The amount of money to be transferred.\n\n:::note\nThe amount must be between £1 and £2,500, or equivalent in the selected currency.\n:::',
    example: 105.6,
  })
  .openapi('PayoutLinkAmount')

const PayoutMethodSchema = z
  .enum(['revolut', 'bank_account', 'card'])
  .openapi({
    description:
      'The payout method that the recipient can use to claim the payout.\n\n| Value | Description |\n| --- | --- |\n| **`revolut`** | Revolut peer-to-peer (P2P) transfer |\n| **`bank_account`** | External bank transfer |\n| **`card`** | Card transfer <br /> **Note:** <ul><li>This payout method is available in the UK and the EEA. </li><li>This payout method is not available in Sandbox.</li></ul> |',
  })
  .openapi('PayoutMethod')

const PayoutLinkPayoutMethodsSchema = z
  .array(PayoutMethodSchema)
  .openapi({
    description: 'The list of payout methods that the recipient can use to claim the payout.',
    example: ['revolut', 'bank_account', 'card'],
  })
  .openapi('PayoutLinkPayoutMethods')

const PayoutLinkExpiryPeriodSchema = z.iso
  .duration()
  .default('P7D')
  .openapi({
    description:
      'The period after which the payout link expires if not claimed before, provided in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).\n\nThe default and maximum value is 7 days from the link creation.',
    example: 'P3D',
  })
  .openapi('PayoutLinkExpiryPeriod')

const CreatePayoutLinkRequestSchema = z
  .object({
    counterparty_name: PayoutLinkCounterpartyNameSchema,
    save_counterparty: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "Indicates whether to save the recipient as your counterparty upon link claim.\nIf `false` then the counterparty will not show up on your counterparties list, for example, when you retrieve your counterparties. \nHowever, you will still be able to retrieve this counterparty by its ID.\n\nIf you don't choose to save the counterparty on link creation, you can do it later from your transactions list in the Business app.",
      }),
    request_id: PayoutLinkRequestIdSchema.openapi({
      description:
        'The ID of the request, provided by the sender.\n\n:::warning\nTo ensure that a link payment is not processed multiple times if there are network or system errors, the same `request_id` should be used for requests related to the same link.\n:::',
      example: '5a7fcb46-4be4-47d4-a56f-27a2e5b78dd1',
    }),
    account_id: PayoutLinkAccountIdSchema,
    amount: PayoutLinkAmountSchema,
    currency: CurrencySchema.openapi({ example: 'GBP' }),
    reference: z
      .string()
      .min(1)
      .max(100)
      .openapi({
        description:
          'The reference for the payout link.\nA piece of text or number you provide to help identify what the payment relates to.\nIt can be used, for example, for reconciliation or tracking purposes.\n\nYou might include an invoice number, account or transaction ID, or any other reference meaningful to you or the recipient.',
      }),
    payout_methods: PayoutLinkPayoutMethodsSchema.default([
      'revolut',
      'bank_account',
    ]).exactOptional(),
    expiry_period: PayoutLinkExpiryPeriodSchema.exactOptional(),
    transfer_reason_code: TransferReasonCodeSchema.exactOptional(),
  })
  .openapi({
    required: ['counterparty_name', 'request_id', 'account_id', 'amount', 'currency', 'reference'],
  })
  .openapi('CreatePayoutLinkRequest')

const CreateTaxRateRequestSchema = AccountingTaxRateSchema.and(
  z
    .unknown()
    .superRefine((val, ctx) => {
      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
        if (!Object.hasOwn(val, 'name')) {
          ctx.addIssue({ code: 'custom' })
        }
        if (!Object.hasOwn(val, 'percentage')) {
          ctx.addIssue({ code: 'custom' })
        }
      }
    })
    .openapi({ description: 'The tax rate to create.', required: ['name', 'percentage'] }),
).openapi('CreateTaxRateRequest')

const UrlSchema = z
  .url()
  .openapi({
    description:
      'A valid webhook URL to which to send event notifications. The supported protocol is `https`.',
  })
  .openapi('Url')

const WebhookEventTypeSchema = z
  .enum([
    'TransactionCreated',
    'TransactionStateChanged',
    'PayoutLinkCreated',
    'PayoutLinkStateChanged',
  ])
  .openapi({ description: 'The type of the webhook event to subscribe to.' })
  .openapi('WebhookEventType')

const CreateWebhookRequestSchema = z
  .object({
    url: UrlSchema.openapi({
      description:
        'A valid webhook URL to which to send event notifications. The supported protocol is `https`.',
    }),
    events: z
      .array(WebhookEventTypeSchema)
      .default(['TransactionCreated', 'TransactionStateChanged'])
      .exactOptional()
      .openapi({
        description:
          "A list of event types to subscribe to.\nIf you don't provide it, you're automatically subscribed to the [default event types](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks#default-event-types).",
      }),
  })
  .openapi({ required: ['url'] })
  .openapi('CreateWebhookRequest')

const DepartmentSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The ID of the department.' }),
    name: z.string().max(100).openapi({ description: 'The name of the department.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the department was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the department was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
  })
  .openapi({ required: ['id', 'name', 'created_at', 'updated_at'] })
  .openapi('Department')

const ErrorSchema = z
  .object({
    code: z.int().openapi({ description: 'The error code.' }),
    message: z.string().openapi({ description: 'The description of the error.' }),
  })
  .openapi({ required: ['code', 'message'] })
  .openapi('Error')

const ErrorWithIdSchema = z
  .object({
    error_id: z
      .string()
      .openapi({ description: 'The ID of the specific error instance. Used for traceability.' }),
    code: z.int().openapi({ description: 'The error code.' }),
    message: z.string().openapi({ description: 'The description of the error.' }),
  })
  .openapi({ required: ['code', 'message', 'error_id'] })
  .openapi('ErrorWithId')

const ErrorWithStatusSchema = z
  .object({
    status: z.int().openapi({ description: 'The error code.' }),
    message: z.string().openapi({ description: 'The description of the error.' }),
  })
  .openapi({
    description: 'Error returning a status instead of code.',
    required: ['status', 'message'],
  })
  .openapi('ErrorWithStatus')

const ErrorUnauthorizedSchema = ErrorWithStatusSchema.openapi({
  description:
    'Unauthorised\n\nReturned, for example, when the credentials you used to make the request are invalid.\nFor more information, see the **Authorization** section.',
}).openapi('ErrorUnauthorized')

const ErrorUnprocessableEntitySchema = z
  .object({
    code: z.int().exactOptional().openapi({ description: 'The error code.' }),
    message: z.string().openapi({ description: 'The description of the error.' }),
  })
  .openapi({
    description:
      'Unprocessable entity\n\nReturned, for example, when you try to modify a resource which is not a in state that would allow for modifications, e.g. a card invitation in state `failed`.',
    required: ['message'],
  })
  .openapi('ErrorUnprocessableEntity')

const ExchangePartFromSchema = z
  .object({
    account_id: z.uuid().openapi({ description: 'The ID of the account to sell currency from.' }),
    currency: CurrencySchema,
    amount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The amount of currency.\nSpecify **only** if you want to sell currency.',
      }),
  })
  .openapi({
    description: 'The details of the currency to exchange from.',
    required: ['account_id', 'currency'],
  })
  .openapi('ExchangePartFrom')

const ExchangePartToSchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({ description: 'The ID of the account to receive exchanged currency into.' }),
    currency: CurrencySchema,
    amount: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The amount of currency.\nSpecify **only** if you want to buy currency.',
      }),
  })
  .openapi({
    description: 'The details of the currency to exchange to.',
    required: ['account_id', 'currency'],
  })
  .openapi('ExchangePartTo')

const FeeSchema = z
  .object({
    amount: z.float64().exactOptional().openapi({ description: 'The fee amount.' }),
    currency: CurrencySchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Fee')

const ExchangeRateResponseSchema = z
  .object({
    from: AmountWithCurrencySchema.openapi({ description: 'The money to sell.' }),
    to: AmountWithCurrencySchema.openapi({ description: 'The money to receive.' }),
    rate: z.float64().openapi({ description: 'The proposed exchange rate.' }),
    fee: FeeSchema.openapi({ description: 'The expected fee for the transaction.' }),
    rate_date: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date of the proposed exchange rate in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
  })
  .openapi({ required: ['from', 'to', 'rate', 'fee', 'rate_date'] })
  .openapi('ExchangeRateResponse')

const ExchangeReasonSchema = z
  .object({
    code: z
      .enum([
        'business_expense_and_claims',
        'fees_and_charges',
        'fund_transfer_and_intracompany_payment',
        'gifts_and_donations',
        'government_services_and_tax',
        'insurance',
        'inventory',
        'investment_dividend_and_interest',
        'loan_and_loan_repayment',
        'marketing',
        'payment_for_goods_and_services',
        'payroll',
        'refund',
        'rental_and_property',
        'sales',
        'service_provider_and_software',
        'travel_and_transportation',
        'utilities',
      ])
      .openapi({ description: 'Category code of the reason for the exchange.' }),
    name: z.string().openapi({ description: 'Category name of the reason for the exchange.' }),
  })
  .openapi({ required: ['code', 'name'] })
  .openapi('ExchangeReason')

const ExchangeReasonsSchema = z
  .array(ExchangeReasonSchema)
  .openapi({
    description: 'The list of available exchange reasons.',
    example: [
      { code: 'business_expense_and_claims', name: 'Business expense and claims' },
      { code: 'fees_and_charges', name: 'Fees and charges' },
      {
        code: 'fund_transfer_and_intracompany_payment',
        name: 'Fund transfer and intracompany payment',
      },
      { code: 'gifts_and_donations', name: 'Gifts and donations' },
      { code: 'government_services_and_tax', name: 'Government services and tax' },
      { code: 'insurance', name: 'Insurance' },
      { code: 'inventory', name: 'Inventory' },
      { code: 'investment_dividend_and_interest', name: 'Investment, dividend and interest' },
      { code: 'loan_and_loan_repayment', name: 'Loan and loan repayment' },
      { code: 'marketing', name: 'Marketing' },
      { code: 'payment_for_goods_and_services', name: 'Payment for goods and services' },
      { code: 'payroll', name: 'Payroll' },
      { code: 'refund', name: 'Refund' },
      { code: 'rental_and_property', name: 'Rental and property' },
      { code: 'sales', name: 'Sales' },
      { code: 'service_provider_and_software', name: 'Service provider and software' },
      { code: 'travel_and_transportation', name: 'Travel and transportation' },
      { code: 'utilities', name: 'Utilities' },
    ],
  })
  .openapi('ExchangeReasons')

const ExchangeReasonCodeSchema = z
  .string()
  .openapi({
    description:
      'The reason code for the exchange.\nDepending on the country and the amount of funds to be exchanged, you might be required to provide an exchange reason. \nYou can check available reason codes with the [`GET /exchange-reasons` operation](https://developer.revolut.com/docs/api/business#get-exchange-reasons).\n\nIf an exchange reason is not required, this field is ignored.',
    example: 'fund_transfer_and_intracompany_payment',
  })
  .openapi('ExchangeReasonCode')

const ExchangeRequestSchema = z
  .object({
    from: ExchangePartFromSchema,
    to: ExchangePartToSchema,
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reference for the exchange transaction, provided by you.\nIt helps you to identify the transaction if you want to look it up later.',
      }),
    request_id: z
      .string()
      .max(40)
      .openapi({
        description:
          'The ID of the request, provided by you.\nIt helps you identify the transaction in your system.\n\n:::warning\nTo ensure that an exchange transaction is not processed multiple times if there are network or system errors,\nthe same `request_id` should be used for requests related to the same transaction.\n:::',
      }),
    exchange_reason_code: ExchangeReasonCodeSchema.exactOptional(),
  })
  .openapi({ description: 'The exchange information.', required: ['from', 'to', 'request_id'] })
  .openapi('ExchangeRequest')

const TransactionStateSchema = z
  .enum(['created', 'pending', 'completed', 'declined', 'failed', 'reverted'])
  .openapi({
    description:
      "Indicates the transaction state.\nPossible values:\n\n| Value | Description |\n| --- | --- |\n| **`created`** | The transaction has been created and is either processed asynchronously or scheduled for a later time. |\n| **`pending`** | The transaction is pending until it's being processed. If the transfer is made between Revolut accounts, this state is skipped and the transaction is executed instantly. |\n| **`completed`** | The transaction was successful. |\n| **`declined`** | The transaction was unsuccessful. This can happen for a variety of reasons, for example, insufficient account balance, wrong receiver information, etc. |\n| **`failed`** | The transaction was unsuccessful. This can happen for a variety of reasons, for example, invalid API calls, blocked payments, etc. |\n| **`reverted`** | The transaction was reverted. This can happen for a variety of reasons, for example, the receiver being inaccessible. |",
  })
  .openapi('TransactionState')

const ExchangeResponseSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'The ID of the created transaction.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of the transaction. For money exchange, it is `exchange`.',
      }),
    reason_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason why the transaction was failed or declined.\n\nPresent only when the `state` parameter of the transaction is `declined` or `failed`.',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the transaction was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    completed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the transaction was completed in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    state: TransactionStateSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ExchangeResponse')

const ExpenseStateSchema = z
  .enum([
    'missing_info',
    'awaiting_review',
    'rejected',
    'pending_reimbursement',
    'refund_requested',
    'refunded',
    'approved',
    'reverted',
  ])
  .openapi({
    description:
      "Indicates the state of the expense.\nPossible values:\n\n| Value | Description |\n| --- | --- |\n| **`missing_info`** | The expense is missing some required information. This is the initial state of the expense when it's first created. Once the missing information is provided, the expense is ready to be submitted. |\n| **`awaiting_review`** | The expense is awaiting approval before it can be completed. The approver can approve, reject, or request repayment for the expense. It is also possible for the submitter to undo the submission at this stage. |\n| **`rejected`** | The expense has been rejected by the approver. The expense submitter (typically, the payer) should fix the issue that was the reason for the rejection and resubmit the expense. |\n| **`pending_reimbursement`** | The reimbursement request has been approved, and the expense is awaiting reimbursement. This state is possible for reimbursements (transaction type = `External`). |\n| **`refund_requested`** | The expense has been rejected and repayment has been requested.* This state is possible for card transactions. It indicates that following the review, the approver rejected the expense and requested that it be paid back to the business account. This can happen, for example, if an employee accidentally makes a personal purchase with their business card. Once the money has been returned, the **admin** can mark this expense as repaid. |\n| **`refunded`** | The expense has been repaid.* This state indicates that the admin has marked the expense as repaid. |\n| **`approved`** | The expense has been approved and is now completed.* |\n| **`reverted`** | The expense has been reverted. This status indicates that the transaction related to the expense has been reverted. In such a case, the expense status is automatically set to `reverted`, and the expense is completed. This can happen, for example, when the transaction has been reverted by the merchant. |\n\n_*Additionally, if an admin has previously approved the expense, marked it as repaid/completed, or requested repayment, they can revert their decision.\nIn such a case, the expense goes back to the initial `missing_info` state._\n\nFor more information, see the guides: [Retrieve expenses and receipts](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-expenses#expense-state).",
  })
  .openapi('ExpenseState')

const ExpenseTransactionTypeSchema = z
  .enum([
    'atm',
    'card_payment',
    'fee',
    'transfer',
    'external',
    'mileage_reimbursement',
    'rev_payment',
  ])
  .openapi({
    description:
      'The type of the [transaction](https://developer.revolut.com/docs/api/business#get-transaction) related to the expense.',
  })
  .openapi('ExpenseTransactionType')

const LabelGroupSchema = z
  .array(z.string().openapi({ description: 'The name of the selected label.', example: 'HR' }))
  .length(1)
  .openapi({
    description:
      'A label group with the selected label from that group.\n\nFor example, you might have a label group called **Department**, and the label you select from that group might be **HR**: `"Department": [ "HR" ]`.',
    example: ['HR'],
  })
  .openapi('LabelGroup')

const TaxRateSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The ID of the tax rate.' }),
    name: z.string().min(1).max(20).openapi({ description: 'The name of the tax.' }),
    percentage: z
      .float64()
      .min(0)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The tax rate percentage applied to the taxable amount. For example, `23` for 23%.',
      }),
  })
  .openapi({
    description:
      'The [tax rate](https://developer.revolut.com/docs/api/business#delete-tax-rate) applied to the expense split.',
    required: ['id', 'name'],
  })
  .openapi('TaxRate')

const ExpenseSplitSchema = z
  .object({
    amount: z
      .object({ amount: AmountSchema.exactOptional(), currency: CurrencySchema.exactOptional() })
      .openapi({ description: 'The original amount of the expense split.', required: [] }),
    category: CategorySchema,
    labels: z
      .record(z.string(), LabelGroupSchema)
      .refine((val) => Object.keys(val).length <= 5)
      .openapi({
        description:
          ':::note\nThis field replaces the expense-level `labels` field, which is now deprecated.\nDuring the deprecation period, the labels are filled as follows:\n- For expenses created before the migration, the expense-level label is copied to all splits of the expense.\n- For new expenses, the labels are set at the split level, and the expense-level label is populated with the first label from the first split.\n:::\n\nThe [labels](https://developer.revolut.com/docs/api/business#delete-label) assigned to the split, organised in groups.\n\nYou can have up to 5 label groups, with max. 1 label per group.\nEach split can have a different set of labels.\n\nThe labels are provided as an object, where each key is the name of a label group, and each value is a single-element array containing the selected label from that group.\n\nThis field is always returned, but it can be an empty object (`{}`) when the split has no labels.',
        example: { 'Office supplies': ['Photocopying'] },
      }),
    tax_rate: TaxRateSchema,
  })
  .openapi({ required: ['amount', 'category', 'labels', 'tax_rate'] })
  .openapi('ExpenseSplit')

const ExpenseSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The ID of the expense.' }),
    state: ExpenseStateSchema,
    transaction_type: ExpenseTransactionTypeSchema,
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the expense.' }),
    submitted_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the expense was submitted in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    completed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the expense was completed in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    payer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the [team member](https://developer.revolut.com/docs/api/business#delete-team-member) who made the transaction, refund request, or ATM withdrawal, or the name of the business if the related transaction is of type `fee`.',
      }),
    merchant: z.string().exactOptional().openapi({ description: 'The name of the merchant.' }),
    transaction_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The ID of the [transaction](https://developer.revolut.com/docs/api/business#get-transaction) related to the expense. Not available for transactions of type `external`.',
      }),
    expense_date: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          "The expense data depends on the type of the expense and whether it has been completed.\n\nTypically, it's the date and time of the expense [transaction](https://developer.revolut.com/docs/api/business#get-transaction) in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.\n- If the transaction related to the expense is completed, it is the date and time of its completion ([`completed_at`](https://developer.revolut.com/docs/api/business#get-transaction#response)).\n- Otherwise, it is the date and time of its creation ([`created_at`](https://developer.revolut.com/docs/api/business#get-transaction#response)).\n\nFor reimbursements, it's the payment date provided in the reimbursement request.",
      }),
    labels: z
      .record(z.string(), LabelGroupSchema)
      .refine((val) => Object.keys(val).length <= 5)
      .openapi({
        description:
          ':::warning [Deprecated]\nThis field is deprecated.\nLabels are now assigned per split and returned in `splits[].labels`.\nDuring the deprecation period, this field is still returned for backwards compatibility, and the labels are filled as follows:\n- For expenses created before the migration, the expense-level label is copied to all splits of the expense.\n- For new expenses, the labels are set at the split level, and the expense-level label is populated with the label from the first split.\nThis field will be removed in a future release.\n:::\n\nThe [labels](https://developer.revolut.com/docs/api/business#delete-label) added to the expense, organised in groups.\n\nYou can have up to 5 label groups, with max. 1 label per group.\n\nThe labels are provided as an object, where each key is the name of a label group, and each value is a single-element array containing the selected label from that group.\n\nThis field is always returned, but it can be an empty object (`{}`) if no label is assigned.',
        deprecated: true,
        example: { 'Office supplies': ['Photocopying'], Department: ['HR'] },
      }),
    splits: z
      .array(ExpenseSplitSchema)
      .openapi({
        description:
          'The splits of the expense.\n\nA single expense can be divided into multiple parts (splits), for example, to allocate different portions of the expense to different categories.',
      }),
    receipt_ids: z
      .array(z.uuid())
      .openapi({ description: 'The IDs of the receipts related to the expense.' }),
    spent_amount: z
      .object({ amount: AmountSchema, currency: CurrencySchema })
      .openapi({
        description:
          'The expense amount in billed currency.\n\nIf the expense involves FX, this currency can differ from the currency of the splits.',
        required: ['amount', 'currency'],
      }),
  })
  .openapi({
    required: [
      'id',
      'state',
      'transaction_type',
      'expense_date',
      'labels',
      'splits',
      'spent_amount',
      'receipt_ids',
    ],
  })
  .openapi('Expense')

const ExpensesSchema = z.array(ExpenseSchema).openapi('Expenses')

const IndicativeQuoteEstimatedArrivalSchema = z
  .object({
    date: z.iso
      .date()
      .openapi({
        description:
          'The estimated arrival date provided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    speed: z
      .enum(['instant', 'in_seconds', 'today', 'tomorrow', 'by_date'])
      .openapi({
        description:
          'The expected speed of the transfer.\n\nPossible values are:\n| Value | Description |\n| --- | --- |\n| **`instant`** | The funds are expected to reach the recipient **immediately** after the transfer is created. |\n| **`in_seconds`** | The funds are expected to reach the recipient **within 5 minutes** after the transfer is created. |\n| **`today`** | The funds are expected to reach the recipient by the end of the **same day** the transfer is created. |\n| **`tomorrow`** | The funds are expected to reach the recipient by the end of the **day after** the transfer is created. |\n| **`by_date`** | The funds are expected to reach the recipient by the end of the **day specified** in the `date` parameter. |',
      }),
  })
  .openapi({
    description:
      'Estimated time and speed of funds arrival in relation to the current date and time.\nPresent if such information is available.',
    required: ['date', 'speed'],
  })
  .openapi('IndicativeQuoteEstimatedArrival')

const SimpleFeeSchema = z
  .object({
    amount: z.float64().openapi({ description: 'Fee amount in major units.' }),
    currency: CurrencySchema,
  })
  .openapi({ description: 'A specific fee component.', required: ['amount', 'currency'] })
  .openapi('SimpleFee')

const IndicativeQuoteFeeBreakdownSchema = z
  .object({
    transfer_fee: SimpleFeeSchema.exactOptional(),
    exchange_fee: SimpleFeeSchema.exactOptional(),
  })
  .openapi({
    description:
      'Breakdown of transfer and exchange fees.\n\nWhen the total `fee` is zero, this field is omitted from the response.',
    required: [],
  })
  .openapi('IndicativeQuoteFeeBreakdown')

const IndicativeQuoteFeeSchema = z
  .object({
    amount: z.float64().openapi({ description: 'Fee amount in major units.' }),
    currency: CurrencySchema,
    breakdown: IndicativeQuoteFeeBreakdownSchema.exactOptional(),
  })
  .openapi({
    description: 'Details of the total fee for the transfer.',
    required: ['amount', 'currency'],
  })
  .openapi('IndicativeQuoteFee')

const IndicativeQuoteRequestSchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({ description: 'The ID of the account from which the transfer will be made.' }),
    receiver: PaymentReceiverSchema,
    amount: z.float64().openapi({ description: 'The transfer amount in major units.' }),
    currency: CurrencySchema,
    charge_bearer: ChargeBearerSchema.exactOptional(),
    transfer_reason_code: TransferReasonCodeSchema.exactOptional(),
    exchange_reason_code: ExchangeReasonCodeSchema.exactOptional(),
  })
  .openapi({
    description: 'The request details for an indicative quote.',
    required: ['account_id', 'receiver', 'amount', 'currency'],
  })
  .openapi('IndicativeQuoteRequest')

const MoneySchema = z
  .object({
    amount: z.float64().openapi({ description: 'Amount in major units.' }),
    currency: CurrencySchema,
  })
  .openapi({
    description: 'A monetary amount and its associated currency.',
    required: ['amount', 'currency'],
  })
  .openapi('Money')

const IndicativeQuoteResponseSchema = z
  .object({
    amount: MoneySchema.openapi({
      description: 'Amount the recipient receives before fees are deducted, in major units.',
    }),
    fee: IndicativeQuoteFeeSchema.openapi({
      description: 'Total fee for the transfer (in source or target currency).',
    }),
    estimated_total: MoneySchema.openapi({
      description: "Total amount of money which will be charged on the sender's account.",
    }),
    estimated_exchange_rate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Exchange rate for the transfer.\n\nFor same-currency transfers, this field is omitted from the response.',
      }),
    estimated_amount_after_exchange: MoneySchema.exactOptional().openapi({
      description:
        "Amount of the money converted to the sender's currency.\n\nFor same-currency transfers, this field is omitted from the response.",
    }),
    estimated_arrival: IndicativeQuoteEstimatedArrivalSchema.exactOptional(),
    warnings: z
      .array(z.literal('volatile_fx_rate'))
      .exactOptional()
      .openapi({
        description:
          'Potential warnings regarding the quote:\n\n| Value | Description |\n| --- | --- |\n| **`volatile_fx_rate`** | Returned when the specified FX rate is volatile. |',
      }),
  })
  .openapi({
    description: 'The expected processing attributes for a potential transfer.',
    required: ['amount', 'fee', 'estimated_total'],
  })
  .openapi('IndicativeQuoteResponse')

const LabelGroupResponseSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The unique ID of the label group.', readOnly: true }),
    name: z.string().min(1).max(100).openapi({ description: 'The name of the label group.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the label group was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
        readOnly: true,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the label group was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
        readOnly: true,
      }),
  })
  .openapi({ required: ['id', 'name', 'created_at', 'updated_at'] })
  .openapi('LabelGroupResponse')

const LabelResponseSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The unique ID of the label.', readOnly: true }),
    name: z.string().min(1).max(100).openapi({ description: 'The name of the label.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the label was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
        readOnly: true,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the label was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
        readOnly: true,
      }),
  })
  .openapi({ required: ['id', 'name', 'created_at', 'updated_at'] })
  .openapi('LabelResponse')

const PaymentStateSchema = z
  .enum([
    'CREATED',
    'PENDING',
    'COMPLETED',
    'REVERTED',
    'DECLINED',
    'CANCELLED',
    'FAILED',
    'DELETED',
  ])
  .openapi({ description: 'Indicates the state of the transaction.' })
  .openapi('PaymentState')

const PaymentInfoSchema = z
  .object({
    id: z
      .uuid()
      .openapi({
        description:
          'The ID of the payment.\n\nDo not confuse it with the [payment draft ID](https://developer.revolut.com/docs/api/business#get-payment-drafts#response) or [transaction ID](https://developer.revolut.com/docs/api/business#get-transaction).',
      }),
    amount: AmountWithCurrencySchema,
    currency: CurrencySchema.exactOptional(),
    account_id: z.uuid().openapi({ description: 'The ID of the account to pay from.' }),
    receiver: PaymentReceiverSchema.exactOptional(),
    state: PaymentStateSchema,
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason for the current state.' }),
    error_message: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the error message.' }),
    current_charge_options: z
      .object({
        from: AmountWithCurrencySchema,
        to: AmountWithCurrencySchema,
        rate: z.string().exactOptional(),
        fee: AmountWithCurrencySchema.exactOptional(),
      })
      .openapi({ description: 'The explanation of conversion process.', required: ['from', 'to'] }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the transaction.' }),
    transfer_reason_code: TransferReasonCodeSchema.exactOptional(),
  })
  .openapi({
    description: 'The details of the payment draft.',
    required: ['id', 'amount', 'account_id', 'state', 'current_charge_options'],
  })
  .openapi('PaymentInfo')

const PaymentDraftResponseSchema = z
  .object({
    scheduled_for: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The scheduled date of the payment draft in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    title: z.string().exactOptional().openapi({ description: 'The title of the payment draft.' }),
    payments: z
      .array(PaymentInfoSchema)
      .openapi({ description: 'The list of payments in the bulk.' }),
    source: z
      .enum(['api', 'integration', 'email', 'business_app'])
      .exactOptional()
      .openapi({ description: 'The source from which the payment draft was created.' }),
  })
  .openapi({ required: ['payments'] })
  .openapi('PaymentDraftResponse')

const PageTokenSchema = z
  .string()
  .openapi({
    description:
      'Cursor for the next page. \nUsed for pagination when the total number of results exceeds the maximum number per page.\n\nTo get the next page of results, make a new request and set `page_token` to the `next_page_token` value returned in the previous response.\nOmit this parameter to fetch the first page.\n:::note\nIf there are no more results to fetch, `next_page_token` is not returned in the response.\n:::',
    example: 'MjAyNi0wMS0wMVQwOToxMzoxNS40MDZaN2RhNTFjZGY0LTZiYjctNDRkNi04OWU1LTc2OWEzZGYxZDc5ZA',
  })
  .openapi('PageToken')

const PaymentOrderInfoSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The ID of the payment draft.' }),
    scheduled_for: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The scheduled date of the payment draft in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    title: z.string().exactOptional().openapi({ description: 'The title of the payment draft.' }),
    payments_count: z
      .int()
      .openapi({ description: 'The number of payments in the payment draft.' }),
    source: z
      .enum(['api', 'integration', 'email', 'business_app'])
      .exactOptional()
      .openapi({ description: 'The source from which the payment draft was created.' }),
  })
  .openapi({ description: 'A list of payments.', required: ['id', 'payments_count'] })
  .openapi('PaymentOrderInfo')

const PaymentDraftsResponseSchema = z
  .object({
    payment_orders: z
      .array(PaymentOrderInfoSchema)
      .openapi({
        description: "The list of payment drafts that haven't been sent for processing.",
      }),
  })
  .openapi({ required: ['payment_orders'] })
  .openapi('PaymentDraftsResponse')

const PaymentRequirementsRequestSchema = z
  .object({
    account_id: z
      .uuid()
      .openapi({ description: 'The ID of the account from which the transfer will be made.' }),
    receiver: PaymentReceiverSchema,
  })
  .openapi({
    description: 'The request details to evaluate payment requirements.',
    required: ['account_id', 'receiver'],
  })
  .openapi('PaymentRequirementsRequest')

const PaymentRequirementsFieldRegexSchema = z
  .object({
    pattern: z.string().openapi({ description: 'The regex pattern the field value must match.' }),
    description: z
      .string()
      .openapi({ description: 'A human-readable description of the regex constraint.' }),
  })
  .openapi({
    description: 'Regular expression validation rules.',
    required: ['pattern', 'description'],
  })
  .openapi('PaymentRequirementsFieldRegex')

const PaymentRequirementsFieldValidationSchema = z
  .object({
    min_length: z
      .int()
      .exactOptional()
      .openapi({ description: 'The minimum allowed character length for the field value.' }),
    max_length: z
      .int()
      .exactOptional()
      .openapi({ description: 'The maximum allowed character length for the field value.' }),
    regex: PaymentRequirementsFieldRegexSchema.exactOptional(),
  })
  .openapi({ description: 'Validation rules applied to the field.', required: [] })
  .openapi('PaymentRequirementsFieldValidation')

const PaymentRequirementsFieldOptionSchema = z
  .object({
    value: z.string().openapi({ description: 'The accepted value to be passed to the API.' }),
    default: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates the default option for the field if there is one.' }),
  })
  .openapi({ description: 'An allowed value option for the field.', required: ['value'] })
  .openapi('PaymentRequirementsFieldOption')

const PaymentRequirementsFieldSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'The name of the field to be provided in the [`/pay` endpoint](https://developer.revolut.com/docs/business#create-payment) request body.\nMatches the field names in the `/pay` endpoint exactly.\n\nE.g. `reference`, `charge_bearer`, `transfer_reason_code`, `exchange_reason_code`, `fiscal_code`.\n\nUniversally required fields (such as `amount`, `account_id`, `receiver`, and `request_id`) are always required and are intentionally excluded from this response.\nFor field descriptions, see the [`/pay` endpoint](https://developer.revolut.com/docs/business#create-payment) request body.',
      }),
    required: z
      .boolean()
      .openapi({
        description: 'Indicates whether this field must be provided for the given transfer.',
      }),
    validation: PaymentRequirementsFieldValidationSchema.exactOptional(),
    options: z
      .array(PaymentRequirementsFieldOptionSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of allowed values for the field (enum).\nIf provided, the field value must be one of these options.',
      }),
  })
  .openapi({
    description: 'Represents a contextual field and its rules.',
    required: ['name', 'required'],
  })
  .openapi('PaymentRequirementsField')

const PaymentRequirementsResponseSchema = z
  .object({
    fields: z
      .array(PaymentRequirementsFieldSchema)
      .openapi({
        description:
          'A list of applicable and conditionally required fields for the specific payment context.',
      }),
  })
  .openapi({
    description: 'The response containing applicable payment fields and their validation rules.',
    required: ['fields'],
  })
  .openapi('PaymentRequirementsResponse')

const PayoutLinkStateSchema = z
  .enum([
    'created',
    'failed',
    'awaiting',
    'active',
    'expired',
    'cancelled',
    'processing',
    'processed',
  ])
  .openapi({
    description:
      "The state that the payout link is in.\nPossible states are:\n\n| Value | Description |\n| --- | --- |\n| **`created`** | The payout link has been created, but the amount has not yet been [blocked](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payout-links#sender-link-generation). |\n| **`failed`** | The payout link couldn't be generated due to a failure during transaction booking. |\n| **`awaiting`** | The payout link is awaiting approval. |\n| **`active`** | The payout link can be redeemed. |\n| **`expired`** | The payout link cannot be redeemed because it wasn't claimed before its expiry date. |\n| **`cancelled`** | The payout link cannot be redeemed because it was cancelled. |\n| **`processing`** | The payout link has been redeemed and is being processed. |\n| **`processed`** | The payout link has been redeemed and the money has been transferred to the recipient. |",
  })
  .openapi('PayoutLinkState')

const PayoutLinkExpiryDateSchema = z.iso
  .datetime({ offset: true })
  .default('now + 7 days')
  .openapi({
    description:
      "The date and time after which the payout link expires in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).\nIf the recipient doesn't claim the money before then, the payout link expires and is no longer available.\n\nThe default and maximum value is the date and time of creating the link + 7 days.",
    example: '2023‐07‐20T15:09:24Z',
  })
  .openapi('PayoutLinkExpiryDate')

const PayoutLinkReferenceSchema = z
  .string()
  .openapi({
    description: 'The reference for the payout transaction, provided by the sender.',
    example: 'Rent',
  })
  .openapi('PayoutLinkReference')

const PayoutLinkInitialPropsSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The ID of the payout link.' }),
    state: PayoutLinkStateSchema,
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the payout link was created in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the payout link was last updated in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).',
      }),
    counterparty_name: PayoutLinkCounterpartyNameSchema,
    save_counterparty: z
      .boolean()
      .default(false)
      .openapi({
        description:
          "Indicates whether you chose to save the recipient as your counterparty upon link claim. \nIf `false` then the counterparty will not show up on your counterparties list, for example, when you [retrieve your counterparties](https://developer.revolut.com/docs/api/business#get-counterparties). \nHowever, you can still [retrieve this counterparty by its ID](https://developer.revolut.com/docs/api/business#get-counterparty).\n\nIf you didn't choose to save the counterparty on link creation, you can still do it from your transactions list in the Business app.",
      }),
    request_id: PayoutLinkRequestIdSchema,
    expiry_date: PayoutLinkExpiryDateSchema.exactOptional(),
    payout_methods: PayoutLinkPayoutMethodsSchema,
    account_id: PayoutLinkAccountIdSchema,
    amount: PayoutLinkAmountSchema,
    currency: CurrencySchema,
    url: z
      .url()
      .exactOptional()
      .openapi({
        description: 'The URL of the payout link. Returned only for active payout links.',
      }),
    reference: PayoutLinkReferenceSchema,
    transfer_reason_code: TransferReasonCodeSchema.exactOptional(),
  })
  .openapi({
    required: [
      'id',
      'state',
      'created_at',
      'updated_at',
      'counterparty_name',
      'request_id',
      'payout_methods',
      'account_id',
      'amount',
      'currency',
      'reference',
      'save_counterparty',
    ],
  })
  .openapi('PayoutLinkInitialProps')

const PayoutLinkAdditionalPropsSchema = z
  .object({
    counterparty_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          "The ID of the counterparty created based on the recipient's details. \n\n:::note\nBy default, the newly created counterparty is hidden from your counterparties list. \n\nTo automatically save it when the link is claimed, pass the `save_counterparty` parameter set to `true`. \n\nAlternatively, you can add the recipient to your counterparties later from the list of transactions in the Business app.\n:::",
      }),
    transaction_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The ID of the created transaction. Returned only if the payout has been claimed.',
      }),
    cancellation_reason: z
      .literal('too_many_name_check_attempts')
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'The reason for which the payout link was cancelled.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PayoutLinkAdditionalProps')

const PayoutLinkSchema = PayoutLinkInitialPropsSchema.and(PayoutLinkAdditionalPropsSchema).openapi(
  'PayoutLink',
)

const PayoutLinksSchema = z
  .array(PayoutLinkSchema)
  .openapi({ description: 'A list of payout links' })
  .openapi('PayoutLinks')

const ResourceCreatedResponseSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'The ID of the created resource.' }),
  })
  .openapi({ description: 'Successfully created resource.', required: [] })
  .openapi('ResourceCreatedResponse')

const RoleSchema = z
  .object({
    id: z
      .string()
      .openapi({
        description:
          'The ID of the role. This can be a UUID or other default role such as `OWNER`.',
      }),
    name: z.string().openapi({ description: 'The name of the role.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the role was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the role was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
  })
  .openapi({ required: ['id', 'name', 'created_at', 'updated_at'] })
  .openapi('Role')

const TaxRateResponseSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The unique ID of the tax rate.', readOnly: true }),
    name: z.string().min(1).max(20).openapi({ description: 'The name of the tax.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the tax rate was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
        readOnly: true,
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the tax rate was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
        readOnly: true,
      }),
    percentage: z
      .float64()
      .min(-100)
      .max(100)
      .exactOptional()
      .openapi({
        description:
          'The tax rate percentage applied to the taxable amount. For example, `23` for 23%.\n\n:::note\nYou cannot create negative tax rates manually. \nHowever, negative tax rates might be synced from your accounting software, if integrated. \n:::',
      }),
  })
  .openapi({ required: ['id', 'name', 'created_at', 'updated_at'] })
  .openapi('TaxRateResponse')

const TeamMemberStateSchema = z
  .enum(['created', 'confirmed', 'waiting', 'active', 'locked', 'disabled'])
  .openapi({ description: 'The state that the team member is in.' })
  .openapi('TeamMemberState')

const TeamMemberSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The ID of the team member.' }),
    email: z.email().openapi({ description: 'The email of the team member.' }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: "The team member's first name." }),
    last_name: z.string().exactOptional().openapi({ description: "The team member's last name." }),
    state: TeamMemberStateSchema,
    role_id: z
      .string()
      .openapi({
        description:
          "The ID of the team member's [role](https://developer.revolut.com/docs/api/business#get-roles). This can be a UUID or other default role such as `Owner`.",
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the team member was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the team member was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    department_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The ID of the [department](https://developer.revolut.com/docs/api/business#get-departments) the team member is assigned to.',
      }),
    manager_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: "The ID of the team member's manager." }),
  })
  .openapi({ required: ['id', 'email', 'state', 'role_id', 'created_at', 'updated_at'] })
  .openapi('TeamMember')

const TransactionTypeSchema = z
  .enum([
    'atm',
    'card_payment',
    'card_refund',
    'card_chargeback',
    'card_credit',
    'charge',
    'charge_refund',
    'exchange',
    'transfer',
    'loan',
    'fee',
    'refund',
    'topup',
    'topup_return',
    'tax',
    'tax_refund',
    'rev_payment',
  ])
  .openapi({ description: 'Indicates the transaction type.' })
  .openapi('TransactionType')

const TransactionMerchantSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'The ID of the merchant.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the merchant. If `full_name` is available and merchant mapping applies, this is the cleaned, mapped name.',
        example: 'Acme Corp.',
      }),
    full_name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The original merchant name supplied by the card network.',
        example: 'ACME*1234MN1HA2',
      }),
    city: z.string().exactOptional().openapi({ description: 'The city of the merchant.' }),
    category_code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The category code of the merchant.' }),
    country: CountryCodeMerchantSchema.exactOptional(),
  })
  .openapi({
    description: 'The information about the merchant (only for card transactions).',
    required: [],
  })
  .openapi('TransactionMerchant')

const TransactionCounterpartyAccountTypeSchema = z
  .enum(['self', 'revolut', 'external'])
  .openapi({ description: 'Indicates the type of the account.' })
  .openapi('TransactionCounterpartyAccountType')

const TransactionCounterpartySchema = z
  .object({
    account_id: z
      .uuid()
      .exactOptional()
      .openapi({ description: 'The ID of the counterparty account.' }),
    account_type: TransactionCounterpartyAccountTypeSchema,
    id: z.uuid().exactOptional().openapi({ description: 'The ID of the counterparty.' }),
  })
  .openapi({ required: ['account_type'] })
  .openapi('TransactionCounterparty')

const TransactionLegSchema = z
  .object({
    leg_id: z.uuid().openapi({ description: 'The ID of the leg.' }),
    amount: z.float64().openapi({ description: 'The amount of the transaction.' }),
    fee: z.float64().exactOptional().openapi({ description: 'The amount of the transaction fee.' }),
    currency: CurrencySchema,
    bill_amount: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The billing amount for cross-currency payments.' }),
    bill_currency: CurrencySchema.exactOptional(),
    account_id: z
      .uuid()
      .openapi({ description: 'The ID of the account that the transaction is associated with.' }),
    counterparty: TransactionCounterpartySchema.exactOptional(),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The transaction leg purpose.' }),
    balance: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'The total balance of the account that the transaction is associated with.',
      }),
  })
  .openapi({
    description:
      'The legs of the transaction:\n- For transactions between your Revolut accounts, there can be 2 legs, for example, an internal transfer made out of the BGP account and into the EUR account.\n- For transactions in other cases, there is only 1 leg.',
    required: ['leg_id', 'amount', 'currency', 'account_id'],
  })
  .openapi('TransactionLeg')

const TransactionCardSchema = z
  .object({
    id: z.uuid().exactOptional().openapi({ description: 'The ID of the card.' }),
    card_number: z.string().exactOptional().openapi({ description: 'The masked card number.' }),
    first_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The first name of the cardholder.' }),
    last_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last name of the cardholder.' }),
    phone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The phone number of the cardholder in [E.164](https://en.wikipedia.org/wiki/E.164) format.',
      }),
    references: z
      .array(CardReferenceSchema)
      .min(1)
      .max(5)
      .exactOptional()
      .openapi({
        description:
          'Card references ([`references`](https://developer.revolut.com/docs/api/business#get-card#response)).\n\n:::note\nThese are the references that were assigned to the card at the time the transaction was made.\nAny [update](https://developer.revolut.com/docs/api/business#update-card-references) to card references does not affect existing transactions.\n:::',
        required: ['id', 'card_number'],
      }),
  })
  .openapi({
    description: 'The details of the card associated with the transaction.',
    required: [],
  })
  .openapi('TransactionCard')

const TransactionSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the transaction.' }),
    type: TransactionTypeSchema,
    request_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The request ID that you provided previously.' }),
    state: TransactionStateSchema,
    reason_code: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reason code when the transaction `state` is `declined` or `failed`.',
      }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the transaction was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the transaction was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    completed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the transaction was completed in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. \nThis is required when the transaction `state` is `completed`.',
      }),
    scheduled_for: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'The scheduled date of the payment, if applicable.\nProvided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    related_transaction_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The ID of the original transaction to which this transaction is related. \nReturned, for example, when this transaction is a refund of the related transaction, or for transactions related to cashback.',
      }),
    merchant: TransactionMerchantSchema.exactOptional(),
    reference: z.string().exactOptional().openapi({ description: 'The payment reference.' }),
    legs: z
      .array(TransactionLegSchema)
      .openapi({
        description:
          'The legs of the transaction:\n- For transactions between your Revolut accounts, there can be 2 legs, for example, an internal transfer made out of the GBP account and into the EUR account.\n- For transactions in other cases, there is only 1 leg.',
      }),
    card: TransactionCardSchema.exactOptional(),
    auth_code: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The authorization code from the card network.\nReturned for card transactions when the authorization code is available.',
      }),
  })
  .openapi({ required: ['id', 'type', 'state', 'created_at', 'updated_at', 'legs'] })
  .openapi('Transaction')

const TransactionsSchema = z.array(TransactionSchema).openapi('Transactions')

const TransactionPaymentRequestSchema = z
  .object({
    request_id: z
      .string()
      .max(40)
      .openapi({
        description:
          'A unique identifier for the transaction, provided by you.  \nThis is used for idempotency to prevent duplicate payments. \nThere are no strict format requirements, but we recommend using UUID v4 values.\n\n:::tip[Retrying requests safely with idempotency]\nIf you do not receive a response (for example, due to a network error or timeout), you can safely retry the request using the same `request_id`. \n\nIf a transaction with the same `request_id` was already created, the API will not create a duplicate transaction.\n\n:::warning[Idempotency expiry]\nIdempotency checks apply only to transactions created **within the last 2 weeks**. \nReusing a `request_id` **after this period** may result in a **new transaction being created**.\n:::',
      }),
    account_id: z
      .uuid()
      .openapi({ description: 'The ID of the account that you send the funds from.' }),
    receiver: PaymentReceiverSchema,
    amount: z.float64().openapi({ description: 'The amount to transfer.' }),
    currency: CurrencySchema,
    reference: z
      .string()
      .max(140)
      .exactOptional()
      .openapi({
        description:
          'The reference for the payment.\n\n- For **BRL**/**KRW**/**VND**/**COP**/**LKR**/**CLP**/**NPR** company transfers, and all **INR** transfers:\n          \n  This field must specify the commercial invoice number.\n\n- For other corridors:\n\n  A piece of text or number you provide to help identify what the payment relates to.\n  It can be used, for example, for reconciliation or tracking purposes.\n\n  You might include an invoice number, account or transaction ID, or any other reference meaningful to you.\n\nIf the provided reference is longer than 140 characters, it will be truncated.\nNote that some recipient banks might truncate the reference even further.',
      }),
    charge_bearer: ChargeBearerSchema.exactOptional(),
    transfer_reason_code: TransferReasonCodeSchema.exactOptional(),
    exchange_reason_code: ExchangeReasonCodeSchema.exactOptional(),
    fiscal_code: z
      .string()
      .regex(/^[a-zA-Z0-9]+$/)
      .max(50)
      .exactOptional()
      .openapi({
        description:
          "Fiscal code of the payer, required for payments to Romanian tax authority beneficiaries (counterparty BIC: `TREZROBUXXX`).\n\nThe business's own tax identification number (TIN) is attached automatically from the business profile.",
        example: 'RO12345678',
      }),
    name_validation_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The identifier returned by a preceding [account name validation (CoP)](https://developer.revolut.com/docs/api/business#validate-account-name) check.\n\nPass this to link the CoP check to the payment, preventing rate-limiting issues in regions like Romania, where CoP queries are limited to 3 per 24 hours without an initiated payment.',
        example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
      }),
  })
  .openapi({ required: ['request_id', 'account_id', 'receiver', 'amount', 'currency'] })
  .openapi('TransactionPaymentRequest')

const TransferReasonSchema = z
  .object({
    country: CountryCodeSchema,
    currency: CurrencySchema,
    code: z
      .enum([
        'advertising',
        'advisor_fees',
        'business_insurance',
        'construction',
        'delivery',
        'education',
        'family',
        'fund_investment',
        'goods',
        'homesend',
        'hotel',
        'exports',
        'insurance_claims',
        'insurance_premium',
        'loan_repayment',
        'medical',
        'office',
        'other_fees',
        'personal_transfer',
        'property_purchase',
        'property_rental',
        'royalties',
        'services',
        'share_investment',
        'tax',
        'transfer',
        'transportation',
        'travel',
        'utilities',
      ])
      .openapi({ description: 'Category name of the transfer reason.' }),
    description: z
      .string()
      .openapi({ description: 'The description of the given transfer reason.' }),
  })
  .openapi({ required: ['country', 'currency', 'code', 'description'] })
  .openapi('TransferReason')

const TransferReasonsSchema = z.array(TransferReasonSchema).openapi('TransferReasons')

const TransferRequestSchema = z
  .object({
    request_id: z
      .string()
      .max(40)
      .openapi({
        description:
          'The ID of the request, provided by you.\nIt helps you identify the transaction in your system.\n\n:::warning\nTo ensure that a transfer is not processed multiple times if there are network or system errors,\nthe same `request_id` should be used for requests related to the same transfer.\n:::',
      }),
    source_account_id: z
      .uuid()
      .openapi({ description: 'The ID of the source account that you transfer the funds from.' }),
    target_account_id: z
      .uuid()
      .openapi({ description: 'The ID of the target account that you transfer the funds to.' }),
    amount: z.float64().openapi({ description: 'The amount of the funds to be transferred.' }),
    currency: CurrencySchema,
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference for the funds transfer.' }),
  })
  .openapi({
    description: 'Transfer the funds between accounts of the business in the same currency.',
    required: ['request_id', 'source_account_id', 'target_account_id', 'amount', 'currency'],
  })
  .openapi('TransferRequest')

const TransferResponseSchema = z
  .object({
    id: z.string().openapi({ description: 'The ID of the transaction created.' }),
    state: TransactionStateSchema,
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the transaction was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    completed_at: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the transaction was completed in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
  })
  .openapi({ required: ['id', 'state', 'created_at'] })
  .openapi('TransferResponse')

const UpdateAccountingCategoryRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(60)
      .exactOptional()
      .openapi({
        description: 'The new full name for the accounting category.',
        example: 'Work From Home equipment',
      }),
    code: z
      .string()
      .min(1)
      .max(50)
      .exactOptional()
      .openapi({ description: 'The new code name for the accounting category.', example: 'WFH' }),
    default_tax_rate_id: z
      .uuid()
      .exactOptional()
      .openapi({
        description:
          'The ID of the new default [tax rate](https://developer.revolut.com/docs/api/business#get-tax-rate) that should be applied to items in this accounting category unless overridden for a specific item.',
        example: 'f93f6c3e-bf95-4b58-bfcd-e642c4fc098e',
      }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ description: 'The new settings for the accounting category.', required: [] })
  .openapi('UpdateAccountingCategoryRequest')

const UpdateDraftPaymentRequestSchema = z
  .object({
    receiver: PaymentReceiverSchema.exactOptional(),
    amount: z
      .float64()
      .positive()
      .exactOptional()
      .openapi({ description: 'The amount of the payment.' }),
    currency: CurrencySchema.exactOptional(),
    reference: z
      .string()
      .min(1)
      .max(255)
      .exactOptional()
      .openapi({
        description:
          'The reference for the payment.\nA piece of text or number you provide to help identify what the payment relates to.\nIt can be used, for example, for reconciliation or tracking purposes.',
      }),
    charge_bearer: z
      .enum(['shared', 'debtor'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The party that should bear the transaction fees related to the selected transaction route if applied.\n\n| Value | Description |\n| --- | --- |\n| **`shared`** | Also known as **SHA**. The transaction route fees are split between the sender and the recipient. |\n| **`debtor`** | Also known as **OUR**. The sender pays all explicit transaction fees. |',
      }),
    transfer_reason_code: TransferReasonCodeSchema.exactOptional(),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({
    description: 'The updated details of a single payment in a payment draft.',
    required: [],
  })
  .openapi('UpdateDraftPaymentRequest')

const UpdateLabelGroupRequestSchema = z
  .object({
    name: z.string().min(1).max(100).openapi({ description: 'The new name for the label group.' }),
  })
  .openapi({ description: 'The new name for the label group.', required: ['name'] })
  .openapi('UpdateLabelGroupRequest')

const UpdateLabelRequestSchema = z
  .object({
    name: z.string().min(1).max(100).openapi({ description: 'The new name for the label.' }),
  })
  .openapi({ description: 'The new name for the label.', required: ['name'] })
  .openapi('UpdateLabelRequest')

const UpdatePaymentDraftRequestSchema = z
  .object({
    title: z
      .string()
      .min(1)
      .max(255)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The title of the payment draft. To clear the title, provide `null`.',
      }),
    schedule_for: z.iso
      .date()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The scheduled date of the payment draft in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.\n\n:::note\nThe date must be in the future.\n:::\n\nTo clear the scheduled date, provide `null`.',
      }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ description: 'The updated metadata of a payment draft.', required: [] })
  .openapi('UpdatePaymentDraftRequest')

const UpdateTaxRateRequestSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(20)
      .exactOptional()
      .openapi({ description: 'The new name for the tax rate.' }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ description: 'The new setting for the tax rate.', required: [] })
  .openapi('UpdateTaxRateRequest')

const UpdateWebhookRequestSchema = z
  .object({
    url: UrlSchema.exactOptional().openapi({
      description:
        'A valid webhook URL to which to send event notifications. The supported protocol is `https`.',
    }),
    events: z
      .array(WebhookEventTypeSchema)
      .exactOptional()
      .openapi({ description: 'A list of event types to subscribe to.' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateWebhookRequest')

const AccountNameValidationIdSchema = z
  .uuid()
  .openapi({
    description:
      'The unique identifier of a CoP (Confirmation of Payee) check.\n\nPass this as `name_validation_id` on a subsequent [`POST /pay`](https://developer.revolut.com/docs/api/business#create-payment) request to link the check to the payment.\nThis prevents rate-limiting issues in regions like Romania, where CoP queries are limited to 3 per 24 hours without an initiated payment.',
    example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
  })
  .openapi('AccountNameValidationId')

const ValidateAccountNameRequestSchema = z.any().openapi('ValidateAccountNameRequest')

const ValidateAccountNameRequestUKSchema = z
  .object({
    account_no: z.string().openapi({ description: 'The account number of the counterparty.' }),
    sort_code: z.string().openapi({ description: "The sort code of the counterparty's account." }),
    company_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the business counterparty.\n\n**Required** when the account type is business (`individual_name` is not specified).\n',
      }),
    individual_name: z
      .object({
        first_name: z.string().openapi({ description: 'The first name of the recipient.' }),
        last_name: z.string().openapi({ description: 'The last name of the recipient.' }),
      })
      .exactOptional()
      .openapi({
        description:
          "The name of the individual counterparty, split into first name and last name.\n\n**Required** when the account type is personal (`company_name` isn't specified).\n",
        required: ['first_name', 'last_name'],
      }),
  })
  .openapi({ title: 'UK', required: ['account_no', 'sort_code'] })
  .openapi('ValidateAccountNameRequestUK')

const ValidateAccountNameRequestAUSchema = z
  .object({
    account_no: z.string().openapi({ description: 'The account number of the counterparty.' }),
    bsb: z
      .string()
      .openapi({
        description:
          "The BSB (Bank-State-Branch) number for the counterparty's account.\nUsed to identify the bank and branch in Australia.",
      }),
    company_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the business counterparty.\n\n**Required** when the account type is business (`individual_name` is not specified).\n',
      }),
    individual_name: z
      .object({
        first_name: z.string().openapi({ description: 'The first name of the recipient.' }),
        last_name: z.string().openapi({ description: 'The last name of the recipient.' }),
      })
      .exactOptional()
      .openapi({
        description:
          "The name of the individual counterparty, split into first name and last name.\n\n**Required** when the account type is personal (`company_name` isn't specified).\n",
        required: ['first_name', 'last_name'],
      }),
  })
  .openapi({ title: 'AU', required: ['account_no', 'bsb'] })
  .openapi('ValidateAccountNameRequestAU')

const ValidateAccountNameRequestROSchema = z
  .object({
    iban: z
      .string()
      .openapi({
        description: "The IBAN (International Bank Account Number) for the counterparty's account.",
      }),
    bic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The BIC (Bank Identifier Code) for the counterparty's account.\nAlso known as the SWIFT code.\nThis value is optional. \nIt can be provided, for example, when the automatic BIC detection fails and the check is unsuccessful.",
      }),
    recipient_country: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .openapi({
        description:
          "The counterparty's bank country, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.\n\nFor RO CoP, the **possible value** is `RO`.",
        example: 'RO',
      }),
    recipient_currency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .openapi({
        description:
          'The counterparty account’s currency, provided as a 3-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code.\n\nFor RO CoP, the **possible value** is `RON`.\n',
        example: 'RON',
      }),
    company_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the business counterparty.\n\n**Required** when the account type is business (`individual_name` is not specified).\n\nⓘ Note that for [RO](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/confirmation-of-payee#supported-regions-and-services), the name you provide helps identify the request, but is **not** used for the actual check.\nThe API simply returns the partially masked name associated with the IBAN for you to validate.\nTherefore, the returned name may differ from the one you provide.\n',
      }),
    individual_name: z
      .object({
        first_name: z.string().openapi({ description: 'The first name of the recipient.' }),
        last_name: z.string().openapi({ description: 'The last name of the recipient.' }),
      })
      .exactOptional()
      .openapi({
        description:
          "The name of the individual counterparty, split into first name and last name.\n\n**Required** when the account type is personal (`company_name` isn't specified).\n\nⓘ Note that for [RO](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/confirmation-of-payee#supported-regions-and-services), the name you provide helps identify the request, but is **not** used for the actual check.\nThe API simply returns the partially masked name associated with the IBAN for you to validate.\nTherefore, the returned name may differ from the one you provide.\n",
        required: ['first_name', 'last_name'],
      }),
  })
  .openapi({ title: 'RO', required: ['iban', 'recipient_country', 'recipient_currency'] })
  .openapi('ValidateAccountNameRequestRO')

const ValidateAccountNameRequestEURSchema = z
  .object({
    iban: z
      .string()
      .openapi({
        description: "The IBAN (International Bank Account Number) for the counterparty's account.",
      }),
    bic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The BIC (Bank Identifier Code) for the counterparty's account.\nAlso known as the SWIFT code.\nIt can be provided, for example, when the automatic BIC detection fails and the check is unsuccessful.",
      }),
    recipient_country: z
      .string()
      .regex(/^[A-Z]{2}$/)
      .openapi({
        description:
          "The counterparty's bank country, provided as a 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) code.",
        example: 'FR',
      }),
    recipient_currency: z
      .string()
      .regex(/^[A-Z]{3}$/)
      .openapi({
        description:
          'The counterparty account’s currency, provided as a 3-letter [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) code.\n\nFor VoP, the **possible value** is `EUR`.\n',
        example: 'EUR',
      }),
    company_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the business counterparty.\n\n**Required** when the account type is business (`individual_name` is not specified).\n',
      }),
    individual_name: z
      .object({
        first_name: z.string().openapi({ description: 'The first name of the recipient.' }),
        last_name: z.string().openapi({ description: 'The last name of the recipient.' }),
      })
      .exactOptional()
      .openapi({
        description:
          "The name of the individual counterparty, split into first name and last name.\n\n**Required** when the account type is personal (`company_name` isn't specified).\n",
        required: ['first_name', 'last_name'],
      }),
  })
  .openapi({ title: 'EUR', required: ['iban', 'recipient_country', 'recipient_currency'] })
  .openapi('ValidateAccountNameRequestEUR')

const ValidateAccountNameResponseSchema = z.any().openapi('ValidateAccountNameResponse')

const ValidateAccountNameResponseUKSchema = z
  .object({
    result_code: z
      .enum([
        'matched',
        'close_match',
        'not_matched',
        'cannot_be_checked',
        'temporarily_unavailable',
      ])
      .openapi({
        description:
          "The result of the check. \n\nPossible values for UK:\n\n| Result code       | Description |\n|-------------------|-------------|\n| **`matched`**     | The name and account type match the provided details. |\n| **`close_match`** | The name and/or account type are similar to the provided values: <ul><li>The name is a match, but the account type is incorrect. For example, an individual recipient's name was provided under `company_name`. The **actual account type** is returned.</li><li>The name is similar to the provided values. Account type is correct. The **actual name** is returned.</li><li>The name is similar to the provided values, and the account type is incorrect. The **actual values** are returned.</li></ul>The actual values are returned. |\n| **`not_matched`** | The name and account type don't match the provided values. |\n| **`cannot_be_checked`** | The check cannot be performed and retries won't help. For example, the recipient's bank doesn't support CoP. |\n| **`temporarily_unavailable`** | The check cannot be performed right now. For example, the recipient's bank didn't respond to our request. You should retry the request later. |",
      }),
    reason: AccountNameValidationReasonUKSchema.exactOptional(),
    company_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the recipient when the account type is business.\nProvided only if `individual_name` is not specified.\n\nWhen the name is a close match, the actual full name is returned, otherwise, the name you provided is returned.',
      }),
    individual_name: z
      .object({
        first_name: z.string().openapi({ description: 'The first name of the recipient.' }),
        last_name: z.string().openapi({ description: 'The last name of the recipient.' }),
      })
      .exactOptional()
      .openapi({
        required: ['first_name', 'last_name'],
        description:
          'The name of the recipient when the account type is personal.\nProvided only if `company_name` is not specified.\n\nWhen the name is a close match, the actual first and last names are returned in full.',
      }),
    name_validation_id: AccountNameValidationIdSchema.exactOptional(),
  })
  .openapi({ title: 'UK', required: ['result_code'] })
  .openapi('ValidateAccountNameResponseUK')

const ValidateAccountNameResponseAUSchema = z
  .object({
    result_code: z
      .enum([
        'matched',
        'close_match',
        'not_matched',
        'cannot_be_checked',
        'temporarily_unavailable',
      ])
      .openapi({
        description:
          "The result of the check. \n\nPossible values for AU:\n\n| Result code                        | Description |\n|------------------------------------|-------------|\n| **`matched`**                      | The name matches the provided details. For personal accounts, this also covers **close matches**, in which case the **actual name** is returned. |\n| **`close_match` (business account)** | The name is similar to the provided value. |\n| **`not_matched`**                  | The name doesn't match the provided values. |\n| **`cannot_be_checked`**            | The check cannot be performed and retries won't help. For example, the recipient's bank doesn't support CoP. |\n| **`temporarily_unavailable`**      | The check cannot be performed right now. For example, the recipient's bank didn't respond to our request. You should retry the request later. |",
      }),
    reason: AccountNameValidationReasonAUSchema.exactOptional(),
    company_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the recipient when the account type is business.\nProvided only if `individual_name` is not specified.\n\nWhen the name is a close match, the actual full name is returned.\nOtherwise, the name you provided is returned.\n\n:::tip[Mismatched name type is corrected]\nThe mismatched name type in the request is corrected in the response.\nThis means that, for example, if an individual recipient's name was provided under `company_name`, in the response it is returned under `individual_name`.\n:::",
      }),
    individual_name: z
      .object({
        first_name: z.string().openapi({ description: 'The first name of the recipient.' }),
        last_name: z.string().openapi({ description: 'The last name of the recipient.' }),
      })
      .exactOptional()
      .openapi({
        required: ['first_name', 'last_name'],
        description:
          "The name of the recipient when the account type is personal.\nProvided only if `company_name` is not specified.\n\nWhen the name is a close match, the actual first and last names are returned.\nOtherwise, the name you provided is returned.\n\n:::tip[Mismatched name type is corrected]\nThe mismatched name type in the request is corrected in the response.\nThis means that, for example, if an individual recipient's name was provided under `company_name`, in the response it is returned under `individual_name`.\n:::",
      }),
    name_validation_id: AccountNameValidationIdSchema.exactOptional(),
  })
  .openapi({ title: 'AU', required: ['result_code'] })
  .openapi('ValidateAccountNameResponseAU')

const ValidateAccountNameResponseROSchema = z
  .object({
    result_code: z
      .enum([
        'matched',
        'close_match',
        'not_matched',
        'cannot_be_checked',
        'temporarily_unavailable',
      ])
      .openapi({
        description:
          "The result of the check. \n\nFor RO CoP, the API **checks if an account exists for the provided IBAN**.\nPossible results are:\n\n| Result code                 | Description |\n|-----------------------------|-------------|\n| **`matched`**               | An account with the provided IBAN was found. When this status is returned, the API also returns a partial name of the account holder. Use this returned name to validate your recipient's details. |\n| **`cannot_be_checked`**     | The check cannot be performed and retries won't help. For example, the recipient's bank doesn't support CoP. |\n| **`temporarily_unavailable`** | The check cannot be performed right now. For example, the recipient's bank didn't respond to our request. You should retry the request later. |",
      }),
    reason: AccountNameValidationReasonROSchema.exactOptional(),
    company_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The **partially masked** name of the recipient when the account type is business.\nProvided only if `individual_name` is not specified.\n\n:::warning[Name considerations]\n- The name you provide helps identify the request, but is not used for the actual check.\n  The API simply returns the partial name associated with the IBAN for you to validate.\n  Therefore, the **returned name may differ** from the one you provided.\n- **Mismatched name type is not corrected**.\n  This means that the name type in the response is returned as it was provided in the request.\n  For example, if an individual recipient's name was provided under `company_name`, in the response it's still returned under `company_name` (instead of `individual_name`).\n:::",
        example: 'Rodri**** SA',
      }),
    individual_name: z
      .object({
        first_name: z
          .string()
          .openapi({ description: 'The first name of the recipient.', example: 'Alexandru' }),
        last_name: z
          .string()
          .openapi({
            description: 'The initial of the last name of the recipient.',
            example: 'I.',
          }),
      })
      .exactOptional()
      .openapi({
        required: ['first_name', 'last_name'],
        description:
          "The partial name of the recipient when the account type is personal, that is, the first name and the last name's initial.\nProvided only if `company_name` is not specified.\n\n:::warning[Name considerations]\n- The name you provide helps identify the request, but is not used for the actual check.\n  The API simply returns the partial name associated with the IBAN for you to validate.\n  Therefore, the **returned name may differ** from the one you provided.\n- **Mismatched name type is not corrected**.\n  This means that the name type in the response is returned as it was provided in the request.\n  For example, if an individual recipient's name was provided under `company_name`, in the response it's still returned under `company_name` (instead of `individual_name`).\n:::",
      }),
    name_validation_id: AccountNameValidationIdSchema.exactOptional(),
  })
  .openapi({ title: 'RO', required: ['result_code'] })
  .openapi('ValidateAccountNameResponseRO')

const ValidateAccountNameResponseEURSchema = z
  .object({
    result_code: z
      .enum([
        'matched',
        'close_match',
        'not_matched',
        'cannot_be_checked',
        'temporarily_unavailable',
      ])
      .openapi({
        description:
          "The result of the check. \n\nPossible values for EUR:\n\n| Result code                 | Description |\n|-----------------------------|-------------|\n| **`matched`**               | The name matches the provided details. |\n| **`close_match`**           | The recipient's name is similar to the provided value. The **actual name** is returned. |\n| **`not_matched`**           | The name and account type don't match the provided values. The **name provided in the request** is returned. |\n| **`cannot_be_checked`**     | The check cannot be performed and retries won't help. For example, the recipient's bank doesn't support VoP. |\n| **`temporarily_unavailable`** | The check cannot be performed right now. For example, the recipient's bank didn't respond to our request. You should retry the request later. |",
      }),
    reason: AccountNameValidationReasonEURSchema.exactOptional(),
    company_name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the recipient when the account type is business.\nProvided only if `individual_name` is not specified.\n\nWhen the name is a close match, the actual name is returned.\nOtherwise, the name you provided is returned.\n\n:::warning[Mismatched name type is not corrected]\nThe name type in the response is returned as it was provided in the request.\nFor example, if an individual recipient's name was provided under `company_name`, in the response it's still returned under `company_name` (instead of `individual_name`).\n:::",
      }),
    individual_name: z
      .object({
        first_name: z.string().openapi({ description: 'The first name of the recipient.' }),
        last_name: z.string().openapi({ description: 'The last name of the recipient.' }),
      })
      .exactOptional()
      .openapi({
        required: ['first_name', 'last_name'],
        description:
          "The name of the recipient when the account type is personal.\nProvided only if `company_name` is not specified.\n\nWhen the name is a close match, the actual name is returned.\nOtherwise, the name you provided is returned.\n\n:::warning[Mismatched name type is not corrected]\nThe name type in the response is returned as it was provided in the request.\nFor example, if an individual recipient's name was provided under `company_name`, in the response it's still returned under `company_name` (instead of `individual_name`).\n:::",
      }),
    name_validation_id: AccountNameValidationIdSchema.exactOptional(),
  })
  .openapi({ title: 'EUR', required: ['result_code'] })
  .openapi('ValidateAccountNameResponseEUR')

const WebhookV1Schema = z
  .object({
    url: z
      .url()
      .openapi({
        description:
          'The valid webhook URL that event notifications are sent to. The supported protocol is `https`.',
      }),
  })
  .openapi({ required: ['url'] })
  .openapi('WebhookV1')

const WebhookV2BasicSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The ID of the webhook.' }),
    url: z
      .url()
      .openapi({
        description:
          'The valid webhook URL that event notifications are sent to. The supported protocol is `https`.',
      }),
    events: z
      .array(WebhookEventTypeSchema)
      .openapi({ description: 'The list of event types that you are subscribed to.' }),
  })
  .openapi({
    required: ['id', 'url', 'events'],
    example: {
      id: '6fc346be-5cb5-4c14-aadc-e8aba6a655d7',
      url: 'https://www.example.com/',
      events: ['TransactionCreated'],
    },
  })
  .openapi('WebhookV2Basic')

const WebhookV2Schema = z
  .object({
    id: z.uuid().openapi({ description: 'The ID of the webhook.' }),
    url: z
      .url()
      .openapi({
        description:
          'The valid webhook URL that event notifications are sent to. The supported protocol is `https`.',
      }),
    events: z
      .array(WebhookEventTypeSchema)
      .openapi({ description: 'The list of event types that you are subscribed to.' }),
    signing_secret: z.string().openapi({ description: 'The signing secret for the webhook.' }),
  })
  .openapi({
    required: ['id', 'url', 'events', 'signing_secret'],
    example: {
      id: '6fc346be-5cb5-4c14-aadc-e8aba6a655d7',
      url: 'https://www.example.com/',
      events: ['TransactionCreated'],
      signing_secret: 'wsk_4jETWMz1g1b37gCONjNp84t2KSSIT7dK',
    },
  })
  .openapi('WebhookV2')

const WebhooksSchema = z.array(WebhookV2BasicSchema).openapi('Webhooks')

const WebhookEventSchema = z
  .object({
    id: z.uuid().openapi({ description: 'The ID of the webhook event.' }),
    created_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the event was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    updated_at: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time the event was last updated in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    webhook_id: z
      .uuid()
      .openapi({ description: 'The ID of the webhook for which the event failed.' }),
    webhook_url: z
      .url()
      .openapi({
        description:
          'The valid webhook URL that event notifications are sent to. The supported protocol is `https`.',
      }),
    payload: z.looseObject({}).openapi({ description: 'The details of the failed event.' }),
    last_sent_date: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time the last attempt at the event delivery occurred in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
  })
  .openapi({
    required: ['id', 'created_at', 'updated_at', 'webhook_id', 'webhook_url', 'payload'],
    description: 'A webhook event',
  })
  .openapi('WebhookEvent')

const WebhookEventsSchema = z.array(WebhookEventSchema).openapi('WebhookEvents')

const WebhookSigningSecretRotateRequestSchema = z
  .object({
    expiration_period: z.iso
      .duration()
      .default('P0D')
      .exactOptional()
      .openapi({
        description:
          'The expiration period for the signing secret in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601#Durations). If set, when you rotate the secret, it continues to be valid until the expiration period has passed. Otherwise, on rotation, the secret is invalidated immediately. The maximum value is 7 days.',
        example: 'PT5H30M',
      }),
  })
  .openapi({ required: [] })
  .openapi('WebhookSigningSecretRotateRequest')

const UnauthorizedResponse = {
  description:
    'Unauthorized – authentication credentials are missing or invalid\n\nReturned when the request was not fulfilled because authentication has failed or has not been provided.',
  content: {
    'application/json': {
      schema: ErrorWithIdSchema,
      examples: {
        access_token_invalid_or_expired: {
          summary: 'Access token invalid or expired',
          value: {
            error_id: '69bb3be2-24b7-afe7-8c69-c9f26aa37a69',
            code: 1000,
            message:
              "Access token is invalid or has expired. Please refresh your access token or generate a new one following the 'Get a new access token' guide in the Revolut API docs.",
          },
        },
        invalid_token: {
          summary: 'Invalid token',
          value: {
            error_id: '7835beae-98ed-42dc-b993-95f4ded951a1',
            code: 1000,
            message:
              "Invalid token. The authorization header must follow the 'Bearer <token>' format.",
          },
        },
      },
    },
  },
}

const ForbiddenResponse = {
  description:
    "Action forbidden - insufficient permissions to perform this action\n\nReturned, for example, when you don't have permissions necessary to perform this action.",
  content: {
    'application/json': {
      schema: ErrorWithIdSchema,
      example: {
        error_id: 'c5deadcc-1934-4438-818a-3c7ca1e6c01c',
        code: 9002,
        message: 'This action is forbidden',
      },
    },
  },
}

const TooManyRequestsResponse = {
  description:
    'Too many requests\n\nReturned, for example, when the rate limit has been exceeded.\nIf the response includes the `Retry-After` instruction, please respect it and refrain from earlier retry attempts.',
  content: {
    'application/json': {
      schema: ErrorWithIdSchema,
      examples: {
        rateLimitExceededNoRetryAfter: {
          summary: 'Rate limit exceeded (no Retry-After)',
          value: {
            error_id: '06153eec-c5cd-4db8-8898-7ae96b9d89ab',
            code: 3162,
            message: 'Request rate limit has been reached. Try again later.',
          },
        },
        rateLimitExceededWithRetryAfter: {
          summary: 'Rate limit exceeded (with Retry-After)',
          value: {
            error_id: '06153eec-c5cd-4db8-8898-7ae96b9d89ab',
            code: 3162,
            message: 'Request rate limit has been reached. Try again after 30 seconds.',
          },
        },
      },
    },
  },
}

const InternalServerErrorResponse = {
  description: 'Internal server error\n\nAn unexpected application error occurred.',
  content: {
    'application/json': {
      schema: ErrorWithIdSchema,
      example: {
        error_id: '7f96652e-7518-4229-872b-4e4c867fb4da',
        code: 5000,
        message:
          'An unexpected error occurred while processing your request. If the issue persists, please contact support',
      },
    },
  },
}

const ServiceUnavailableResponse = {
  description:
    'Service Unavailable\n\nThe system is temporarily unavailable.\nIf the response includes the `Retry-After` header instruction, please respect it and refrain from earlier retry attempts.',
  content: {
    'application/json': {
      schema: ErrorWithIdSchema,
      examples: {
        service_unavailable: {
          summary: 'System temporarily unavailable',
          value: {
            error_id: '201768bc-c5cd-4db8-8898-7ae96b9d89ab',
            code: 5003,
            message:
              'The service is temporarily unavailable. Try again in a few moments. If the issue persists, please contact support',
          },
        },
      },
    },
  },
}

const ResourceCreatedResponseResponse = {
  description:
    'Resource created\n\nOn successful creation, the response returns only the ID of the new resource, even if the resource has more properties.\nTo get all details, use the returned resource ID with a GET request.',
  content: {
    'application/json': {
      schema: ResourceCreatedResponseSchema,
      examples: {
        resource_created: {
          summary: 'Resource created',
          value: { id: '6a37383e-cfd3-4a2f-aa81-e3a6e6939efa' },
        },
      },
    },
  },
}

const PageTokenParamsSchema = PageTokenSchema.openapi({
  param: {
    in: 'query',
    name: 'page_token',
    required: false,
    schema: { $ref: '#/components/schemas/PageToken' },
  },
}).exactOptional()

const CardErrorBadIdExample = {
  summary: 'Invalid ID - the path parameter must be UUID',
  value: { message: "Invalid path parameter 'id': expected UUID", code: 2101 },
}

const CardErrorBadCountryCodeExample = {
  summary: 'Invalid country code (when countries=["GB", "USA"])',
  value: {
    code: 3000,
    message: "Invalid value for 'countries[1]': expected a 2-letter ISO country code (e.g. 'US').",
  },
}

const CardInvitationMinCreateExample = {
  summary: 'Card invitation for an onboarding team member - minimal example',
  value: {
    request_id: '4016b891-bb50-4bd2-8a1b-adb74f4aacdd',
    holder_id: '3791712d-e5b5-4d5f-b1f1-79a93d57e08b',
    virtual: true,
  },
}

const CardInvitationMaxCreateExample = {
  summary: 'Card invitation for an onboarding team member - full example',
  value: {
    request_id: '4016b891-bb50-4bd2-8a1b-adb74f4aacdd',
    expiry_period: 'P14D',
    holder_id: '3791712d-e5b5-4d5f-b1f1-79a93d57e08b',
    virtual: true,
    label: 'Dariel Pattie',
    spending_limits: {
      single: { amount: 50, currency: 'GBP' },
      week: { amount: 250, currency: 'GBP' },
    },
    spending_period: { end_date: '2026-12-31', end_date_action: 'terminate' },
    categories: ['groceries', 'restaurants'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '14c8d663-2093-4086-96ed-334a4011333f',
        '06e0f7fa-38a2-4fcf-a115-df5caf190b55',
      ],
    },
    countries: ['GB'],
    accounts: ['26a852b8-4046-4e71-949d-22f4cb6be26a'],
  },
}

const CardInvitationWithMccControlsCreateExample = {
  summary: 'Card invitation with MCC controls',
  value: {
    request_id: '5027c902-cc61-5ce3-9b2c-bec85f5bbdce',
    expiry_period: 'P14D',
    holder_id: '3791712d-e5b5-4d5f-b1f1-79a93d57e08b',
    virtual: true,
    label: 'Dariel Pattie',
    mcc_controls: { control_type: 'allow', mccs: ['5411', '7011'] },
    countries: ['GB'],
    accounts: ['26a852b8-4046-4e71-949d-22f4cb6be26a'],
  },
}

const CardInvitationUpdatedAllPropertiesExample = {
  summary: 'Update all properties',
  value: {
    id: '4016b891-bb50-4bd2-8a1b-adb74f4aacdd',
    state: 'created',
    created_at: '2025-11-21T00:00:00Z',
    updated_at: '2025-11-21T10:27:15Z',
    expiry_date: '2025-12-06T00:00:00Z',
    holder_id: '3791712d-e5b5-4d5f-b1f1-79a93d57e08b',
    virtual: true,
    label: 'New card label',
    spending_limits: {
      single: { amount: 100, currency: 'GBP' },
      week: { amount: 300, currency: 'GBP' },
    },
    spending_period: { start_date: '2025-12-20', end_date: '2027-12-20', end_date_action: 'lock' },
    categories: ['services', 'shopping', 'furniture'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
        'e8a87432-f71e-4deb-be84-969a02792929',
        '3f09819f-63d1-473a-966c-54d8b9f43a93',
      ],
    },
    countries: ['GB', 'SG', 'ES'],
    accounts: ['f52c6c84-26b9-4e95-bbcf-99ed6523fb51', '9ae4345a-5ee5-496b-b776-241fcc5a5ba4'],
  },
}

const CardInvitationUpdatedEraseSpendingPeriodStartDateExample = {
  summary: 'Erase spending period start date and update end date',
  value: {
    id: '4016b891-bb50-4bd2-8a1b-adb74f4aacdd',
    state: 'created',
    created_at: '2025-11-21T00:00:00Z',
    updated_at: '2025-11-21T10:27:15Z',
    expiry_date: '2025-12-06T00:00:00Z',
    holder_id: '3791712d-e5b5-4d5f-b1f1-79a93d57e08b',
    virtual: true,
    label: 'Dariel Pattie',
    spending_limits: {
      single: { amount: 50, currency: 'GBP' },
      week: { amount: 250, currency: 'GBP' },
    },
    spending_period: { end_date: '2027-12-20', end_date_action: 'terminate' },
    categories: ['groceries', 'restaurants'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '14c8d663-2093-4086-96ed-334a4011333f',
        '06e0f7fa-38a2-4fcf-a115-df5caf190b55',
      ],
    },
    countries: ['GB'],
    accounts: ['26a852b8-4046-4e71-949d-22f4cb6be26a'],
  },
}

const CardInvitationUpdatedEraseAllSpendingLimitsExample = {
  summary: 'Erase all spending limits',
  value: {
    id: '4016b891-bb50-4bd2-8a1b-adb74f4aacdd',
    state: 'created',
    created_at: '2025-11-21T00:00:00Z',
    updated_at: '2025-11-21T10:27:15Z',
    expiry_date: '2025-12-06T00:00:00Z',
    holder_id: '3791712d-e5b5-4d5f-b1f1-79a93d57e08b',
    virtual: true,
    label: 'Dariel Pattie',
    spending_period: { start_date: '2025-12-20', end_date: '2026-12-31', end_date_action: 'lock' },
    categories: ['groceries', 'restaurants'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '14c8d663-2093-4086-96ed-334a4011333f',
        '06e0f7fa-38a2-4fcf-a115-df5caf190b55',
      ],
    },
    countries: ['GB'],
    accounts: ['26a852b8-4046-4e71-949d-22f4cb6be26a'],
  },
}

const CardInvitationUpdatedAllowSpecificMerchantsExample = {
  summary: 'Erase single-transaction limit',
  value: {
    id: '4016b891-bb50-4bd2-8a1b-adb74f4aacdd',
    state: 'created',
    created_at: '2025-11-21T00:00:00Z',
    updated_at: '2025-11-21T10:27:15Z',
    expiry_date: '2025-12-06T00:00:00Z',
    holder_id: '3791712d-e5b5-4d5f-b1f1-79a93d57e08b',
    virtual: true,
    label: 'Dariel Pattie',
    spending_limits: {
      single: { amount: 50, currency: 'GBP' },
      week: { amount: 250, currency: 'GBP' },
    },
    spending_period: { start_date: '2025-12-20', end_date: '2026-12-31', end_date_action: 'lock' },
    merchant_controls: {
      control_type: 'allow',
      merchant_ids: [
        '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
        'e8a87432-f71e-4deb-be84-969a02792929',
      ],
    },
    countries: ['GB'],
    accounts: ['26a852b8-4046-4e71-949d-22f4cb6be26a'],
  },
}

const CardInvitationUpdatedEraseSingleTransactionLimitExample = {
  summary: 'Erase single-transaction limit',
  value: {
    id: '4016b891-bb50-4bd2-8a1b-adb74f4aacdd',
    state: 'created',
    created_at: '2025-11-21T00:00:00Z',
    updated_at: '2025-11-21T10:27:15Z',
    expiry_date: '2025-12-06T00:00:00Z',
    holder_id: '3791712d-e5b5-4d5f-b1f1-79a93d57e08b',
    virtual: true,
    label: 'Dariel Pattie',
    spending_limits: { week: { amount: 250, currency: 'GBP' } },
    spending_period: { start_date: '2025-12-20', end_date: '2026-12-31', end_date_action: 'lock' },
    categories: ['groceries', 'restaurants'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '14c8d663-2093-4086-96ed-334a4011333f',
        '06e0f7fa-38a2-4fcf-a115-df5caf190b55',
      ],
    },
    countries: ['GB'],
    accounts: ['26a852b8-4046-4e71-949d-22f4cb6be26a'],
  },
}

const CardInvitationCreatedDetailsExample = {
  summary: 'Created (active) invitation (example with spending limits)',
  value: {
    id: '4016b891-bb50-4bd2-8a1b-adb74f4aacdd',
    state: 'created',
    created_at: '2025-11-21T00:00:00Z',
    updated_at: '2025-11-21T00:00:00Z',
    expiry_date: '2025-12-06T00:00:00Z',
    holder_id: '3791712d-e5b5-4d5f-b1f1-79a93d57e08b',
    virtual: true,
    label: 'Dariel Pattie',
    spending_limits: {
      single: { amount: 50, currency: 'GBP' },
      week: { amount: 250, currency: 'GBP' },
    },
    spending_period: { end_date: '2026-12-31', end_date_action: 'lock' },
    categories: ['groceries', 'restaurants'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '14c8d663-2093-4086-96ed-334a4011333f',
        '06e0f7fa-38a2-4fcf-a115-df5caf190b55',
      ],
    },
    countries: ['GB'],
    accounts: ['26a852b8-4046-4e71-949d-22f4cb6be26a'],
  },
}

const CardInvitationRedeemedDetailsExample = {
  summary: 'Redeemed invitation (example with spend program)',
  value: {
    id: '809d745d-9598-4680-8464-d82113e9024b',
    state: 'redeemed',
    created_at: '2025-11-21T00:00:00Z',
    updated_at: '2025-11-23T09:01:13Z',
    card_id: '744b29d4-19e9-40f8-89e6-bfb264ef5710',
    holder_id: '19c76bef-3583-4848-af09-4b2a96c75a14',
    virtual: true,
    label: 'Manuel Haleigh - WFH',
    spend_program: { label: 'WFH equipment' },
    spending_period: {
      start_date: '2025-11-23',
      end_date: '2025-12-23',
      end_date_action: 'terminate',
    },
    categories: ['furniture', 'hardware'],
    countries: ['GB'],
    accounts: ['6b472c0e-f595-4681-88b4-76eaa0522824'],
  },
}

const CardInvitationExpiredDetailsExample = {
  summary: 'Expired or cancelled invitation',
  value: {
    id: '0c0d252e-5fff-498e-83f8-f9b635904275',
    state: 'expired',
    created_at: '2025-11-22T00:00:00Z',
    updated_at: '2025-11-30T00:00:00Z',
    holder_id: '5ea0ffa1-5dc5-43c4-ac5e-b9e0deb9ec12',
    virtual: true,
    label: 'Valeria Keone - meals',
    spending_limits: {
      single: { amount: 50, currency: 'GBP' },
      week: { amount: 250, currency: 'GBP' },
    },
    spending_period: {
      start_date: '2025-11-29',
      end_date: '2025-12-29',
      end_date_action: 'terminate',
    },
    categories: ['groceries', 'restaurants'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '14c8d663-2093-4086-96ed-334a4011333f',
        '06e0f7fa-38a2-4fcf-a115-df5caf190b55',
      ],
    },
    countries: ['GB'],
    accounts: ['6b472c0e-f595-4681-88b4-76eaa0522824'],
  },
}

const CardInvitationFailedDetailsExample = {
  summary: 'Failed invitation',
  value: {
    id: '9ab6019a-6a26-41f8-b034-44b591f8b1a8',
    state: 'failed',
    created_at: '2025-11-27T00:00:00Z',
    updated_at: '2025-11-27T00:00:00Z',
    holder_id: 'af686385-4ec0-4139-a4a0-963ee9fa5bc8',
    virtual: true,
    label: 'Connor Thato - meals',
    spending_period: {
      start_date: '2025-12-01',
      end_date: '2026-01-01',
      end_date_action: 'terminate',
    },
    categories: ['groceries', 'restaurants'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '14c8d663-2093-4086-96ed-334a4011333f',
        '06e0f7fa-38a2-4fcf-a115-df5caf190b55',
      ],
    },
    countries: ['GB'],
    accounts: ['6b472c0e-f595-4681-88b4-76eaa0522824'],
  },
}

const CardInvitationFailedNoHolderDetailsExample = {
  summary: 'Invitation that failed because team member was deleted',
  value: {
    id: 'bfc40b73-1e8b-4cba-ad7d-2f54ee707a21',
    state: 'failed',
    created_at: '2025-11-28T00:00:00Z',
    updated_at: '2025-12-02T11:31:15Z',
    virtual: true,
    label: 'Natália Popović - offb',
    spending_period: {
      start_date: '2025-11-30',
      end_date: '2026-11-30',
      end_date_action: 'terminate',
    },
    categories: ['groceries', 'restaurants'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '14c8d663-2093-4086-96ed-334a4011333f',
        '06e0f7fa-38a2-4fcf-a115-df5caf190b55',
      ],
    },
    countries: ['GB'],
    accounts: ['6b472c0e-f595-4681-88b4-76eaa0522824'],
  },
}

const CardInvitationsListExample = {
  summary: 'List of card invitations',
  value: [
    {
      id: '4016b891-bb50-4bd2-8a1b-adb74f4aacdd',
      state: 'created',
      created_at: '2025-11-21T00:00:00Z',
      updated_at: '2025-11-21T00:00:00Z',
      expiry_date: '2025-12-06T00:00:00Z',
      holder_id: '3791712d-e5b5-4d5f-b1f1-79a93d57e08b',
      virtual: true,
      label: 'Dariel Pattie',
      spending_limits: {
        single: { amount: 50, currency: 'GBP' },
        week: { amount: 250, currency: 'GBP' },
      },
      spending_period: { end_date: '2026-12-31', end_date_action: 'lock' },
      categories: ['groceries', 'restaurants'],
      merchant_controls: {
        control_type: 'block',
        merchant_ids: [
          '14c8d663-2093-4086-96ed-334a4011333f',
          '06e0f7fa-38a2-4fcf-a115-df5caf190b55',
        ],
      },
      countries: ['GB'],
      accounts: ['26a852b8-4046-4e71-949d-22f4cb6be26a'],
    },
    {
      id: '809d745d-9598-4680-8464-d82113e9024b',
      state: 'redeemed',
      created_at: '2025-11-21T00:00:00Z',
      updated_at: '2025-11-23T09:01:13Z',
      card_id: '744b29d4-19e9-40f8-89e6-bfb264ef5710',
      holder_id: '19c76bef-3583-4848-af09-4b2a96c75a14',
      virtual: true,
      label: 'Manuel Haleigh - WFH',
      spend_program: { label: 'WFH equipment' },
      spending_period: {
        start_date: '2025-11-23',
        end_date: '2025-12-23',
        end_date_action: 'terminate',
      },
      categories: ['furniture', 'hardware'],
      countries: ['GB'],
      accounts: ['6b472c0e-f595-4681-88b4-76eaa0522824'],
    },
    {
      id: '0c0d252e-5fff-498e-83f8-f9b635904275',
      state: 'expired',
      created_at: '2025-11-22T00:00:00Z',
      updated_at: '2025-11-30T00:00:00Z',
      holder_id: '5ea0ffa1-5dc5-43c4-ac5e-b9e0deb9ec12',
      virtual: true,
      label: 'Valeria Keone - meals',
      spending_limits: {
        single: { amount: 50, currency: 'GBP' },
        week: { amount: 250, currency: 'GBP' },
      },
      spending_period: {
        start_date: '2025-11-29',
        end_date: '2025-12-29',
        end_date_action: 'terminate',
      },
      categories: ['groceries', 'restaurants'],
      merchant_controls: {
        control_type: 'block',
        merchant_ids: [
          '14c8d663-2093-4086-96ed-334a4011333f',
          '06e0f7fa-38a2-4fcf-a115-df5caf190b55',
        ],
      },
      countries: ['GB'],
      accounts: ['6b472c0e-f595-4681-88b4-76eaa0522824'],
    },
    {
      id: '9ab6019a-6a26-41f8-b034-44b591f8b1a8',
      state: 'failed',
      created_at: '2025-11-27T00:00:00Z',
      updated_at: '2025-11-27T00:00:00Z',
      holder_id: 'af686385-4ec0-4139-a4a0-963ee9fa5bc8',
      virtual: true,
      label: 'Connor Thato - meals',
      spending_period: {
        start_date: '2025-12-01',
        end_date: '2026-01-01',
        end_date_action: 'terminate',
      },
      categories: ['groceries', 'restaurants'],
      merchant_controls: {
        control_type: 'block',
        merchant_ids: [
          '14c8d663-2093-4086-96ed-334a4011333f',
          '06e0f7fa-38a2-4fcf-a115-df5caf190b55',
        ],
      },
      countries: ['GB'],
      accounts: ['6b472c0e-f595-4681-88b4-76eaa0522824'],
    },
    {
      id: 'bfc40b73-1e8b-4cba-ad7d-2f54ee707a21',
      state: 'failed',
      created_at: '2025-11-28T00:00:00Z',
      updated_at: '2025-12-02T11:31:15Z',
      virtual: true,
      label: 'Natália Popović - offb',
      spending_period: {
        start_date: '2025-11-30',
        end_date: '2026-11-30',
        end_date_action: 'terminate',
      },
      categories: ['groceries', 'restaurants'],
      merchant_controls: {
        control_type: 'block',
        merchant_ids: [
          '14c8d663-2093-4086-96ed-334a4011333f',
          '06e0f7fa-38a2-4fcf-a115-df5caf190b55',
        ],
      },
      countries: ['GB'],
      accounts: ['6b472c0e-f595-4681-88b4-76eaa0522824'],
    },
  ],
}

const CardsListSimpleExample = {
  summary: 'List of cards - virtual and physical',
  value: [
    {
      id: 'aa14a9af-d7a7-4214-a743-10b818f74bd0',
      holder_id: '173ab846-de2a-1234-5678-160bd2e660e6',
      created_at: '2025-09-15T11:04:11.047305Z',
      updated_at: '2025-09-17T08:32:11.024721Z',
      virtual: true,
      last_digits: '2671',
      expiry: '09/2030',
      label: 'Kirby Janette',
      state: 'active',
      spending_limits: {
        single: { amount: 200.22, currency: 'GBP' },
        month: { amount: 200.44, currency: 'GBP' },
      },
      spending_period: {
        start_date: '2025-09-20',
        end_date: '2026-12-20',
        end_date_action: 'terminate',
      },
      categories: ['restaurants', 'groceries'],
      merchant_controls: {
        control_type: 'block',
        merchant_ids: [
          '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
          'e8a87432-f71e-4deb-be84-969a02792929',
        ],
      },
      countries: ['GB', 'SG'],
      accounts: ['f52c6c84-26b9-4e95-bbcf-99ed6523fb51'],
    },
    {
      id: 'b8b56da4-1fde-4320-a8d7-cb7560252f7e',
      created_at: '2025-09-15T11:04:11.047305Z',
      updated_at: '2025-09-15T11:04:11.047305Z',
      virtual: false,
      last_digits: '2672',
      expiry: '09/2030',
      state: 'active',
    },
  ],
}

const CardIndividualCreateExample = {
  summary: 'Team member card',
  value: {
    request_id: '7a10f3eb-fe56-4699-9bd0-044a63508828',
    holder_id: '173ab846-de2a-1234-5678-160bd2e660e6',
    virtual: true,
    label: 'Kirby Janette',
    spending_limits: {
      single: { amount: 200.22, currency: 'GBP' },
      week: { amount: 200.44, currency: 'GBP' },
    },
    spending_period: { end_date: '2026-12-15', end_date_action: 'terminate' },
    categories: ['groceries', 'restaurants'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
        'e8a87432-f71e-4deb-be84-969a02792929',
      ],
    },
    countries: ['GB', 'SG'],
    accounts: ['75aa436d-2a04-4ab9-af14-ed0955769b8c'],
  },
}

const CardWithMccControlsCreateExample = {
  summary: 'Team member card with MCC controls',
  value: {
    request_id: '8b21f4fc-af67-578a-0ce1-15bd3e7719e7',
    holder_id: '173ab846-de2a-1234-5678-160bd2e660e6',
    virtual: true,
    label: 'Kirby Janette',
    mcc_controls: { control_type: 'allow', mccs: ['5411', '7011'] },
    countries: ['GB'],
    accounts: ['75aa436d-2a04-4ab9-af14-ed0955769b8c'],
  },
}

const CardWithAllControlsCreateExample = {
  summary: 'Team member card with categories, merchant controls, and MCC controls',
  value: {
    request_id: '9c32f5ad-b078-689b-1df2-26ce4f882af8',
    holder_id: '173ab846-de2a-1234-5678-160bd2e660e6',
    virtual: true,
    label: 'Kirby Janette',
    categories: ['groceries', 'restaurants'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: ['46df0a1b-3678-4ded-9cf5-9f4da1b5019d'],
    },
    mcc_controls: { control_type: 'allow', mccs: ['5411', '7011'] },
    countries: ['GB'],
    accounts: ['75aa436d-2a04-4ab9-af14-ed0955769b8c'],
  },
}

const CardIndividualDetailsExample = {
  summary: 'Team member card',
  value: {
    id: 'aa14a9af-d7a7-4214-a743-10b818f74bd0',
    holder_id: '173ab846-de2a-1234-5678-160bd2e660e6',
    created_at: '2025-09-15T11:04:11.047305Z',
    updated_at: '2025-09-15T11:04:11.047305Z',
    virtual: true,
    last_digits: '2671',
    expiry: '09/2030',
    label: 'Kirby Janette',
    state: 'active',
    spending_limits: { single: { amount: 200.22, currency: 'GBP' } },
    spending_period: {
      end_date: '2026-12-15',
      end_date_action: 'terminate',
      week: { amount: 200.44, currency: 'GBP' },
    },
    categories: ['restaurants', 'groceries'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
        'e8a87432-f71e-4deb-be84-969a02792929',
      ],
    },
    countries: ['GB', 'SG'],
    accounts: ['f52c6c84-26b9-4e95-bbcf-99ed6523fb51'],
  },
}

const CardCompanyCreateExample = {
  summary: 'Company card',
  value: {
    request_id: '7a10f3eb-fe56-4699-9bd0-044a63508829',
    contact_ids: [
      '3ea984a5-d599-4c97-b2b3-c6c12bb9b5e9',
      '02b969cb-b984-4a70-873d-f93220805e5e',
      '36d9604d-4821-45fc-bf1a-a2881f6336c0',
    ],
    virtual: true,
    label: 'Engagement team',
    spending_limits: {
      single: { amount: 200, currency: 'GBP' },
      week: { amount: 1000, currency: 'GBP' },
    },
    spending_period: { end_date: '2026-12-15', end_date_action: 'terminate' },
    categories: ['accommodation'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
        'e8a87432-f71e-4deb-be84-969a02792929',
      ],
    },
    countries: ['GB', 'SG'],
    accounts: ['75aa436d-2a04-4ab9-af14-ed0955769b8c'],
  },
}

const CardCompanyDetailsExample = {
  summary: 'Company card',
  value: {
    id: '448b9493-8bd7-48f9-a7ce-59293b5118ec',
    contact_ids: [
      '3ea984a5-d599-4c97-b2b3-c6c12bb9b5e9',
      '02b969cb-b984-4a70-873d-f93220805e5e',
      '36d9604d-4821-45fc-bf1a-a2881f6336c0',
    ],
    created_at: '2025-09-15T11:04:11.047305Z',
    updated_at: '2025-09-15T11:04:11.047305Z',
    virtual: true,
    last_digits: '4321',
    expiry: '09/2030',
    label: 'Engagement team',
    state: 'active',
    spending_limits: {
      single: { amount: 200, currency: 'GBP' },
      week: { amount: 1000, currency: 'GBP' },
    },
    spending_period: { end_date: '2026-12-15', end_date_action: 'terminate' },
    categories: ['accommodation'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
        'e8a87432-f71e-4deb-be84-969a02792929',
      ],
    },
    countries: ['GB', 'SG'],
    accounts: ['75aa436d-2a04-4ab9-af14-ed0955769b8c'],
  },
}

const CardAutogeneratedCreateExample = {
  summary: 'Auto-issued card',
  value: {
    request_id: '7a10f3eb-fe56-4699-9bd0-044a63508830',
    product: { code: 'MBJ' },
    virtual: true,
    label: 'Reservation 123456',
    references: [
      { name: 'PNR', value: 'RT12345' },
      { name: 'Traveller', value: 'John Smith' },
    ],
    spending_limits: {
      single: { amount: 1500, currency: 'GBP' },
      week: { amount: 3000, currency: 'GBP' },
    },
    spending_period: { end_date: '2026-12-15', end_date_action: 'terminate' },
    categories: ['airlines'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
        'e8a87432-f71e-4deb-be84-969a02792929',
      ],
    },
    countries: ['GB', 'SG'],
    accounts: ['75aa436d-2a04-4ab9-af14-ed0955769b8c'],
  },
}

const CardAutogeneratedDetailsExample = {
  summary: 'Auto-issued card',
  value: {
    id: 'f296f3b6-d28c-44e7-aae5-3d540e6a20e9',
    created_at: '2025-09-15T11:04:11.047305Z',
    updated_at: '2025-09-15T11:04:11.047305Z',
    product: { code: 'MBJ' },
    virtual: true,
    last_digits: '9876',
    expiry: '09/2030',
    label: 'Reservation 123456',
    references: [
      { name: 'PNR', value: 'RT12345' },
      { name: 'Traveller', value: 'John Smith' },
    ],
    state: 'active',
    spending_limits: {
      single: { amount: 1500, currency: 'GBP' },
      week: { amount: 3000, currency: 'GBP' },
    },
    spending_period: { end_date: '2026-12-15', end_date_action: 'terminate' },
    categories: ['airlines'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
        'e8a87432-f71e-4deb-be84-969a02792929',
      ],
    },
    countries: ['GB', 'SG'],
    accounts: ['75aa436d-2a04-4ab9-af14-ed0955769b8c'],
  },
}

const CardWithSpendingPeriodStartDateCreateExample = {
  summary: 'Card with a spending period start date',
  value: {
    request_id: '7a10f3eb-fe56-4699-9bd0-044a63508831',
    holder_id: 'd2d68875-55b4-42d9-a816-19449b8e0840',
    virtual: true,
    label: 'Kim Took',
    spending_limits: {
      single: { amount: 200.22, currency: 'GBP' },
      week: { amount: 200.44, currency: 'GBP' },
    },
    spending_period: {
      start_date: '2025-11-16',
      end_date: '2026-12-15',
      end_date_action: 'terminate',
    },
    categories: ['groceries', 'restaurants'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
        'e8a87432-f71e-4deb-be84-969a02792929',
      ],
    },
    countries: ['GB', 'SG'],
    accounts: ['75aa436d-2a04-4ab9-af14-ed0955769b8c'],
  },
}

const CardWithSpendingPeriodStartDateDetailsExample = {
  summary: 'Card with a spending period start date',
  value: {
    id: 'e466e17f-7727-46b3-be0f-56acf9209195',
    holder_id: 'd2d68875-55b4-42d9-a816-19449b8e0840',
    created_at: '2025-09-15T11:04:11.047305Z',
    updated_at: '2025-09-15T11:04:11.047305Z',
    virtual: true,
    last_digits: '1289',
    expiry: '09/2030',
    label: 'Kim Took',
    state: 'locked',
    can_be_unlocked: true,
    spending_limits: {
      single: { amount: 200.22, currency: 'GBP' },
      week: { amount: 200.44, currency: 'GBP' },
    },
    spending_period: {
      start_date: '2025-11-16',
      end_date: '2026-12-15',
      end_date_action: 'terminate',
    },
    categories: ['groceries', 'restaurants'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
        'e8a87432-f71e-4deb-be84-969a02792929',
      ],
    },
    countries: ['GB', 'SG'],
    accounts: ['75aa436d-2a04-4ab9-af14-ed0955769b8c'],
  },
}

const CardWithSpendProgramDetailsExample = {
  summary: 'Card with a spend program',
  value: {
    id: 'f9bea0b8-ddbd-47c8-bccd-40c60c8fa266',
    contact_ids: [
      '3ea984a5-d599-4c97-b2b3-c6c12bb9b5e9',
      '02b969cb-b984-4a70-873d-f93220805e5e',
      '36d9604d-4821-45fc-bf1a-a2881f6336c0',
    ],
    created_at: '2025-09-15T11:04:11.047305Z',
    updated_at: '2025-09-15T11:04:11.047305Z',
    virtual: true,
    last_digits: '3467',
    expiry: '09/2030',
    label: 'Company lunches',
    state: 'locked',
    spend_program: { label: 'Lunch' },
    merchant_controls: {
      control_type: 'allow',
      merchant_ids: [
        '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
        'e8a87432-f71e-4deb-be84-969a02792929',
      ],
    },
    countries: ['GB'],
    accounts: ['75aa436d-2a04-4ab9-af14-ed0955769b8c'],
  },
}

const CardPhysicalDetailsExample = {
  summary: 'Physical card details',
  value: {
    id: 'b8b56da4-1fde-4320-a8d7-cb7560252f7e',
    created_at: '2025-09-15T11:04:11.047305Z',
    updated_at: '2025-09-15T11:04:11.047305Z',
    virtual: false,
    last_digits: '2672',
    expiry: '09/2030',
    state: 'active',
  },
}

const CardTerminatedDetailsExample = {
  summary: 'Terminated card details',
  value: {
    id: 'aa14a9af-d7a7-4214-a743-10b818f74bd0',
    holder_id: '173ab846-de2a-1234-5678-160bd2e660e6',
    created_at: '2025-09-15T11:04:11.047305Z',
    updated_at: '2025-09-18T09:15:22.031844Z',
    terminated_at: '2025-09-17T14:22:18.113202Z',
    virtual: true,
    last_digits: '2671',
    expiry: '09/2030',
    label: 'Kirby Janette',
    state: 'terminated',
    spending_limits: {
      single: { amount: 200.22, currency: 'GBP' },
      month: { amount: 200.44, currency: 'GBP' },
    },
    spending_period: {
      start_date: '2025-09-20',
      end_date: '2026-12-20',
      end_date_action: 'terminate',
    },
    categories: ['restaurants', 'groceries'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
        'e8a87432-f71e-4deb-be84-969a02792929',
      ],
    },
    countries: ['GB', 'SG'],
    accounts: ['f52c6c84-26b9-4e95-bbcf-99ed6523fb51'],
  },
}

const CardUpdatedAllPropertiesDetailsExample = {
  summary: 'Update all properties',
  value: {
    id: 'aa14a9af-d7a7-4214-a743-10b818f74bd0',
    holder_id: '173ab846-de2a-1234-5678-160bd2e660e6',
    created_at: '2025-09-15T11:04:11.047305Z',
    updated_at: '2025-09-17T08:32:11.024721Z',
    virtual: true,
    last_digits: '2671',
    expiry: '09/2030',
    label: 'New card label',
    state: 'locked',
    spending_limits: {
      single: { amount: 100, currency: 'GBP' },
      week: { amount: 300, currency: 'GBP' },
    },
    spending_period: { start_date: '2025-09-18', end_date: '2026-12-20', end_date_action: 'lock' },
    categories: ['services', 'shopping', 'furniture'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
        'e8a87432-f71e-4deb-be84-969a02792929',
        '3f09819f-63d1-473a-966c-54d8b9f43a93',
      ],
    },
    countries: ['GB', 'SG', 'ES'],
    accounts: ['f52c6c84-26b9-4e95-bbcf-99ed6523fb51', '9ae4345a-5ee5-496b-b776-241fcc5a5ba4'],
  },
}

const CardUpdatedEraseSpendingPeriodStartDateDetailsExample = {
  summary: 'Erase spending period start date',
  value: {
    id: 'aa14a9af-d7a7-4214-a743-10b818f74bd0',
    holder_id: '173ab846-de2a-1234-5678-160bd2e660e6',
    created_at: '2025-09-15T11:04:11.047305Z',
    updated_at: '2025-09-17T08:32:11.024721Z',
    virtual: true,
    last_digits: '2671',
    expiry: '09/2030',
    label: 'Kirby Janette',
    state: 'active',
    spending_period: { end_date: '2026-12-20', end_date_action: 'lock' },
    categories: ['restaurants', 'groceries'],
    accounts: ['f52c6c84-26b9-4e95-bbcf-99ed6523fb51'],
  },
}

const CardUpdatedEraseAllSpendingLimitsDetailsExample = {
  summary: 'Erase all spending limits',
  value: {
    id: 'aa14a9af-d7a7-4214-a743-10b818f74bd0',
    holder_id: '173ab846-de2a-1234-5678-160bd2e660e6',
    created_at: '2025-09-15T11:04:11.047305Z',
    updated_at: '2025-09-17T08:32:11.024721Z',
    virtual: true,
    last_digits: '2671',
    expiry: '09/2030',
    label: 'Kirby Janette',
    state: 'active',
    categories: ['restaurants', 'groceries'],
    accounts: ['f52c6c84-26b9-4e95-bbcf-99ed6523fb51'],
  },
}

const CardUpdatedEraseSingleTransactionLimitDetailsExample = {
  summary: 'Erase the single-transaction limit',
  value: {
    id: 'aa14a9af-d7a7-4214-a743-10b818f74bd0',
    holder_id: '173ab846-de2a-1234-5678-160bd2e660e6',
    created_at: '2025-09-15T11:04:11.047305Z',
    updated_at: '2025-09-17T08:32:11.024721Z',
    virtual: true,
    last_digits: '2671',
    expiry: '09/2030',
    label: 'Kirby Janette',
    state: 'active',
    spending_limits: { month: { amount: 200.44, currency: 'GBP' } },
    categories: ['restaurants', 'groceries'],
    accounts: ['f52c6c84-26b9-4e95-bbcf-99ed6523fb51'],
  },
}

const CardUpdatedAllowSpecificMerchantsDetailsExample = {
  summary: 'Allow only specific merchants',
  value: {
    id: 'aa14a9af-d7a7-4214-a743-10b818f74bd0',
    holder_id: '173ab846-de2a-1234-5678-160bd2e660e6',
    created_at: '2025-09-15T11:04:11.047305Z',
    updated_at: '2025-09-17T08:32:11.024721Z',
    virtual: true,
    last_digits: '2671',
    expiry: '09/2030',
    label: 'Kirby Janette',
    state: 'active',
    spending_limits: {
      single: { amount: 200.22, currency: 'GBP' },
      month: { amount: 200.44, currency: 'GBP' },
    },
    merchant_controls: {
      control_type: 'allow',
      merchant_ids: [
        '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
        'e8a87432-f71e-4deb-be84-969a02792929',
      ],
    },
    accounts: ['f52c6c84-26b9-4e95-bbcf-99ed6523fb51'],
  },
}

const CardVirtualDetailsExample = {
  summary: 'Virtual card details',
  value: {
    id: 'aa14a9af-d7a7-4214-a743-10b818f74bd0',
    holder_id: '173ab846-de2a-1234-5678-160bd2e660e6',
    created_at: '2025-09-15T11:04:11.047305Z',
    updated_at: '2025-09-17T08:32:11.024721Z',
    virtual: true,
    last_digits: '2671',
    expiry: '09/2030',
    label: 'Kirby Janette',
    state: 'active',
    spending_limits: {
      single: { amount: 200.22, currency: 'GBP' },
      month: { amount: 200.44, currency: 'GBP' },
    },
    spending_period: {
      start_date: '2025-09-20',
      end_date: '2026-12-20',
      end_date_action: 'terminate',
    },
    categories: ['restaurants', 'groceries'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
        'e8a87432-f71e-4deb-be84-969a02792929',
      ],
    },
    countries: ['GB', 'SG'],
    accounts: ['f52c6c84-26b9-4e95-bbcf-99ed6523fb51'],
  },
}

const CardWithSpendLimitUsageExample = {
  summary: 'Card with spending limit utilisation',
  value: {
    id: 'aa14a9af-d7a7-4214-a743-10b818f74bd0',
    holder_id: '173ab846-de2a-1234-5678-160bd2e660e6',
    created_at: '2025-09-15T11:04:11.047305Z',
    updated_at: '2025-09-17T08:32:11.024721Z',
    virtual: true,
    last_digits: '2671',
    expiry: '09/2030',
    label: 'Kirby Janette',
    state: 'active',
    spending_limits: {
      single: { amount: 200.22, currency: 'GBP' },
      month: { amount: 200.44, currency: 'GBP', usage: 125.3 },
    },
    spending_period: {
      start_date: '2025-09-20',
      end_date: '2026-12-20',
      end_date_action: 'terminate',
    },
    categories: ['restaurants', 'groceries'],
    merchant_controls: {
      control_type: 'block',
      merchant_ids: [
        '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
        'e8a87432-f71e-4deb-be84-969a02792929',
      ],
    },
    countries: ['GB', 'SG'],
    accounts: ['f52c6c84-26b9-4e95-bbcf-99ed6523fb51'],
  },
}

const CardContactsExample = {
  summary: 'Company card contacts (max.5)',
  value: [
    '3ea984a5-d599-4c97-b2b3-c6c12bb9b5e9',
    '02b969cb-b984-4a70-873d-f93220805e5e',
    '36d9604d-4821-45fc-bf1a-a2881f6336c0',
  ],
}

const CardReferencesExample = {
  summary: 'References for the card (max.5)',
  value: [
    { name: 'Budget', value: 'Engagement' },
    { name: 'Department', value: 'Business' },
  ],
}

const ErrorUnauthorizedExample = {
  summary: 'Unauthorized',
  value: { status: 401, message: 'The request should be authorized.' },
}

const PayoutLinkActiveExample = {
  id: '12dcd8c2-6408-458f-98a9-3f4abc180898',
  state: 'active',
  created_at: '2023-07-11T13:55:54.834963Z',
  updated_at: '2023-07-11T13:55:55.082655Z',
  counterparty_name: 'John Smith',
  request_id: '5a7fcb46-4be4-47d4-a56f-27a2e5b78dd1',
  expiry_date: '2023-07-18T13:55:55.082280Z',
  payout_methods: ['revolut', 'bank_account', 'card'],
  account_id: '85f515e4-588f-4496-a6a5-a7615a193e6b',
  amount: 105.6,
  currency: 'GBP',
  url: 'https://business.revolut.com/p/uSJVAd5SnP1',
  reference: 'Rent',
  transfer_reason_code: 'property_rental',
}

const PayoutLinkProcessedExample = {
  id: '8e32b08a-e012-4530-bd15-c4e9ebde953d',
  state: 'processed',
  created_at: '2024-01-11T14:02:53.472318Z',
  updated_at: '2024-01-11T14:05:02.962886Z',
  counterparty_name: 'Jane Doe',
  request_id: '5a7fcb46-4be4-47d4-a56f-27a2e5b78dMM',
  expiry_date: '2023-07-18T14:02:53.717626Z',
  payout_methods: ['revolut'],
  account_id: '85f515e4-588f-4496-a6a5-a7615a193e6b',
  amount: 5.6,
  currency: 'GBP',
  counterparty_id: '2ef4618a-f258-4ac5-a846-ca6e089214f6',
  transaction_id: '64ad618e-655a-a925-8425-2284c03f6c08',
  reference: 'Bus ticket',
  transfer_reason_code: 'travel',
}

const PayoutLinkCancelledExample = {
  id: '12dcd8c2-6408-458f-98a9-3f4abc180898',
  state: 'cancelled',
  created_at: '2023-07-11T13:55:54.834963Z',
  updated_at: '2023-07-11T15:01:20.236508Z',
  counterparty_name: 'John Doe',
  request_id: '5a7fcb46-4be4-47d4-a56f-27a2e5b78dd1',
  expiry_date: '2023-07-18T13:55:55.082280Z',
  payout_methods: ['revolut', 'bank_account'],
  account_id: '85f515e4-588f-4496-a6a5-a7615a193e6b',
  amount: 105.6,
  currency: 'GBP',
  reference: 'Rent',
  transfer_reason_code: 'property_rental',
}

const WebhookV2BasicSelectedEventsExample = {
  id: 'c6db947e-e9ce-41c2-b445-02e6eb741d21',
  url: 'https://www.example.com',
  events: ['TransactionCreated', 'PayoutLinkCreated'],
}

const WebhookV2BasicAllEventsExample = {
  id: '9f9919a2-932d-498f-a088-3a01b9080c4a',
  url: 'https://www.revolut.com',
  events: [
    'TransactionCreated',
    'TransactionStateChanged',
    'PayoutLinkCreated',
    'PayoutLinkStateChanged',
  ],
}

const AccessTokenSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description:
    'Each Business API request must contain an authorization header in the following format to make a call: `Bearer <your_access_token>`.\n\nThe access token will be obtained the first time you set up your application and has an expiration of 40 minutes. \nDuring setup, a `refresh_token` will also be obtained which allows to obtain a new `access_token`.\n\n:::danger\nNever share your client-assertion JWT (JSON web token), `access_token` and `refresh_token` with anyone, as these can be used to access your banking data and initiate transactions.\n:::\n\nAccess tokens can be issued with four security scopes and require a JWT (JSON Web Token) signature to be obtained:\n- `READ`: Permissions for `GET` operations.\n- `WRITE`: Permissions to update counterparties, webhooks, and issue payment drafts.\n- `PAY`: Permissions to initiate or cancel transactions and currency exchanges.    \n- `READ_SENSITIVE_CARD_DATA`: Permissions to retrieve sensitive card details.\n\n  :::warning\n  If you enable the `READ_SENSITIVE_CARD_DATA` scope for your access token, you must set up IP whitelisting. \n  Failing to do so will prevent you from accessing **any** Business API endpoint. \n\n  IP whitelisting means that you must specify an IP or a set of IPs which will be the only IPs from which requests to the API will be accepted. \n  To do so:\n  1. Go to the Revolut Business web app [settings](https://business.revolut.com/settings) → **APIs** → **Business API**.\n  2. Select the corresponding API certificate.\n  3. In **Production IP whitelist**, provide the IP(s) which should be whitelisted.\n      Make sure that the IPs you provide are **not** [local (i.e. private) IP addresses](https://www.okta.com/en-sg/identity-101/understanding-private-ip-ranges/). \n  4. Save the new settings.\n  :::\n\nTo configure your JWT and obtain the refresh and first access tokens, complete the following steps:\n\n  1. [Sign up for a Revolut Business account](https://developer.revolut.com/docs/guides/manage-accounts/get-started/sign-up-for-revolut-business-account)\n  2. [Prepare your Sandbox environment](https://developer.revolut.com/docs/guides/manage-accounts/get-started/prepare-sandbox-environment)\n  3. [Make your first API request](https://developer.revolut.com/docs/guides/manage-accounts/get-started/make-your-first-api-request)',
}

export const getAccountingCategoriesRoute = createRoute({
  method: 'get',
  path: '/accounting-categories',
  tags: ['Accounting', 'Accounting categories'],
  summary: 'Retrieve a list of accounting categories',
  description:
    "Get available accounting categories based on the provided query criteria.\n\n:::note\nThe API returns a maximum of 500 accounting categories per request. \nThe default page size is 100.\n:::\n\nThe accounting categories are sorted by the `created_at` date in reverse chronological order, and they're **paginated**.\nThe page size, that is, the maximum number of accounting categories returned per page is specified by the `limit` parameter. \n- If the number of results exceeds the page size, the response also returns a cursor for the next page under `next_page_token`.        \n  To get the next page of results, make a new request using that `next_page_token` value in `page_token`.\n- If the number of results is smaller than the page size, `next_page_token` is not returned.\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories).",
  operationId: 'getAccountingCategories',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The page size, that is, the maximum number of accounting categories to return per page.\n\nTo get the next page of results, use `page_token`.',
            schema: { type: 'integer', minimum: 1, maximum: 500, default: 100, example: 10 },
          },
          example: 10,
        }),
      page_token: PageTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description:
        'List of accounting categories and the next page token if the number of results exceeds the page size',
      content: {
        'application/json': {
          schema: z
            .object({
              next_page_token: PageTokenSchema.exactOptional(),
              accounting_categories: z
                .array(AccountingCategoryResponseSchema)
                .openapi({ description: 'The list of accounting categories.' }),
            })
            .openapi({ required: ['accounting_categories'] }),
          examples: {
            results_with_next_page: {
              summary: 'Results exceed page size (when limit=5) & next page available',
              value: {
                next_page_token:
                  'MjAyNi0wMS0wMVQwOToxMzoxNS40MDZaN2RhNTFjZGY0LTZiYjctNDRkNi04OWU1LTc2OWEzZGYxZDc5ZA',
                accounting_categories: [
                  {
                    id: '8d831292-f950-4c5a-83f9-030df8cacd3f',
                    name: 'Transportation',
                    code: '400',
                    created_at: '2026-03-11T17:03:25.570942Z',
                    updated_at: '2026-03-11T17:03:25.570942Z',
                    default_tax_rate_id: 'd8f6bf6c-5b70-4c16-9549-5943e67ab009',
                  },
                  {
                    id: '8d749b93-4a2e-4f28-8b5b-9d64fe2e1d62',
                    name: 'Office Supplies',
                    code: '410',
                    created_at: '2026-03-11T17:03:25.570940Z',
                    updated_at: '2026-03-11T17:03:25.570940Z',
                    default_tax_rate_id: '2a3520af-e6f7-416c-821e-0e83ffac1dfa',
                  },
                  {
                    id: '3726661e-0e93-4822-8bda-4d1a4c6e7dff',
                    name: 'Software & Subscriptions',
                    code: '420',
                    created_at: '2026-03-11T17:03:25.570937Z',
                    updated_at: '2026-03-11T17:03:25.570937Z',
                    default_tax_rate_id: '6a83d8d8-f5a5-405d-aafd-729786569c2d',
                  },
                  {
                    id: 'b37c42c8-1d42-4ee1-aa7e-348dd06ea69f',
                    name: 'General Expenses',
                    code: '429',
                    created_at: '2026-03-11T17:03:25.570927Z',
                    updated_at: '2026-03-11T17:03:25.570927Z',
                    default_tax_rate_id: '5781063b-d140-4c72-bde9-b8b21e64e3e0',
                  },
                  {
                    id: 'c729ea95-3ae7-4d21-91f7-1a69844175f2',
                    name: 'Travel & Lodging',
                    code: '460',
                    created_at: '2026-03-11T17:03:25.570924Z',
                    updated_at: '2026-03-11T17:03:25.570924Z',
                    default_tax_rate_id: 'f2519604-b04a-4a82-9b01-68235c4ad000',
                  },
                ],
              },
            },
            results_single_page: {
              summary: 'Results fit within page size, no more pages available',
              value: {
                accounting_categories: [
                  {
                    id: '8d831292-f950-4c5a-83f9-030df8cacd3f',
                    name: 'Transportation',
                    code: '400',
                    created_at: '2026-03-11T17:03:25.570942Z',
                    updated_at: '2026-03-11T17:03:25.570942Z',
                    default_tax_rate_id: 'd8f6bf6c-5b70-4c16-9549-5943e67ab009',
                  },
                  {
                    id: '8d749b93-4a2e-4f28-8b5b-9d64fe2e1d62',
                    name: 'Office Supplies',
                    code: '410',
                    created_at: '2026-03-11T17:03:25.570940Z',
                    updated_at: '2026-03-11T17:03:25.570940Z',
                    default_tax_rate_id: '2a3520af-e6f7-416c-821e-0e83ffac1dfa',
                  },
                  {
                    id: '3726661e-0e93-4822-8bda-4d1a4c6e7dff',
                    name: 'Software & Subscriptions',
                    code: '420',
                    created_at: '2026-03-11T17:03:25.570937Z',
                    updated_at: '2026-03-11T17:03:25.570937Z',
                    default_tax_rate_id: '6a83d8d8-f5a5-405d-aafd-729786569c2d',
                  },
                  {
                    id: 'b37c42c8-1d42-4ee1-aa7e-348dd06ea69f',
                    name: 'General Expenses',
                    code: '429',
                    created_at: '2026-03-11T17:03:25.570927Z',
                    updated_at: '2026-03-11T17:03:25.570927Z',
                    default_tax_rate_id: '5781063b-d140-4c72-bde9-b8b21e64e3e0',
                  },
                  {
                    id: 'c729ea95-3ae7-4d21-91f7-1a69844175f2',
                    name: 'Travel & Lodging',
                    code: '460',
                    created_at: '2026-03-11T17:03:25.570924Z',
                    updated_at: '2026-03-11T17:03:25.570924Z',
                    default_tax_rate_id: 'f2519604-b04a-4a82-9b01-68235c4ad000',
                  },
                  {
                    id: '846b4cad-462d-4b4e-b96c-fc4e14de564d',
                    name: 'Utilities',
                    code: '499',
                    created_at: '2026-03-11T17:03:25.570919Z',
                    updated_at: '2026-03-11T17:03:25.570919Z',
                    default_tax_rate_id: 'fa95a4ae-a7d2-4ea6-bf42-2af1aead8ca4',
                  },
                  {
                    id: '2f76152a-2b14-4390-aa32-bbab02a1e98c',
                    name: 'Meals & Entertainment',
                    code: '500',
                    created_at: '2026-03-11T17:03:25.570919Z',
                    updated_at: '2026-03-11T17:03:25.570919Zs',
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
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            bad_param_type: {
              summary: 'Incorrect query parameter type',
              value: {
                error_id: '29146977-8042-0ebf-b362-af224b14c830',
                code: 2101,
                message: "Query parameter 'limit' must be an integer",
              },
            },
            param_value_too_low: {
              summary: 'Query parameter value too low',
              value: {
                error_id: 'b5a51cd1-4f78-4074-adae-675e2921d71c',
                code: 2101,
                message: "Query parameter 'limit' must be at least 1",
              },
            },
            param_value_too_high: {
              summary: 'Query parameter value too high',
              value: {
                error_id: 'fa12f45e-4633-446f-8d40-42dadc380511',
                code: 2101,
                message: "Query parameter 'limit' must be at most 500",
              },
            },
            multiple_values_not_allowed: {
              summary: 'Multiple values provided for a single-value query parameter',
              value: {
                error_id: 'c4da2d3c-1cd8-4bbc-ac43-233575e471b7',
                code: 2101,
                message: "Query parameter 'limit' must have a single value",
              },
            },
            param_cannot_be_empty: {
              summary: 'Query parameter provided without a value',
              value: {
                error_id: 'fa12f45e-0ebf-4f7c-88e0-3673c665f135',
                code: 2101,
                message:
                  "Query parameter 'limit' must not be empty, Query parameter 'page_token' must not be empty",
              },
            },
            bad_page_token: {
              summary: 'Incorrect page token',
              value: {
                error_id: '69772914-8042-0ebf-b362-14c830af224b',
                code: 2101,
                message:
                  "Query parameter 'page_token' is invalid. Use a value from a previous response's next_page_token field.",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const postAccountingCategoriesRoute = createRoute({
  method: 'post',
  path: '/accounting-categories',
  tags: ['Accounting', 'Accounting categories'],
  summary: 'Create an accounting category',
  description:
    'Add a new accounting category to the list of accounting categories that can be assigned to your financial records, such as expenses.\n\n:::note\nThis operation is not supported for [externally managed accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories#externally-managed-settings).\n:::\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories).',
  operationId: 'createAccountingCategory',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateAccountingCategoryRequestSchema,
          examples: {
            category_with_default_tax_rate: {
              summary: 'Accounting category with default tax rate',
              value: {
                name: 'Transportation',
                code: '400',
                default_tax_rate_id: 'e6b84ddb-a127-466b-9a0a-501bda07773f',
              },
            },
            category_without_default_tax_rate: {
              summary: 'Accounting category without default tax rate',
              value: { name: 'Office supplies', code: '410' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: ResourceCreatedResponseResponse,
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            param_required: {
              summary: 'Required parameter(s) missing',
              value: {
                error_id: 'fa12f45e-0ebf-4f7c-88e0-ebb7a1441a18',
                code: 2101,
                message: "'code' is required, 'name' is required",
              },
            },
            bad_param_type: {
              summary: 'Incorrect parameter type',
              value: {
                error_id: '29146977-8042-446f-b362-675e2921d71c',
                code: 2101,
                message: "'code' must be a string, 'name' must be a string",
              },
            },
            invalid_json: {
              summary: 'Invalid JSON',
              value: {
                error_id: 'df7b76b2-1313-42f0-8c0b-3673c665f135',
                code: 2101,
                message: 'Request body is not valid JSON',
              },
            },
            param_value_too_short: {
              summary: 'Parameter value too short',
              value: {
                error_id: '7acc6073-5290-45f8-8956-c79d487ef1e5',
                code: 2101,
                message: "'name' must be at least 1 character",
              },
            },
            param_value_too_long: {
              summary: 'Parameter value too long',
              value: {
                error_id: 'c4da2d3c-1cd8-4bbc-ac43-233575e471b7',
                code: 2101,
                message: "'name' must be at most 60 characters",
              },
            },
            bad_param_format: {
              summary: 'Incorrect parameter format',
              value: {
                error_id: 'f70973ea-c939-41f8-a106-1656ab5fae2f',
                code: 2101,
                message: "'default_tax_rate_id' must be a valid UUID",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    409: {
      description:
        'Conflict\n\nRequest conflicts with the current state of the resource.\nReturned, for example, when an accounting category with the provided name already exists.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            category_with_name_exists: {
              summary: 'Name must be unique',
              value: {
                error_id: '8c08b656-ab6e-4768-4e57-f281da25aa2b',
                code: 3503,
                message: 'Category with name My Unique Accounting Category already exists',
              },
            },
            category_with_code_exists: {
              summary: 'Code must be unique',
              value: {
                error_id: '8c08b656-ab6e-4768-4e57-f281da25aa2b',
                code: 3504,
                message: 'Category with code MUAC already exists',
              },
            },
          },
        },
      },
    },
    422: {
      description:
        "Unprocessable entity - accounting category cannot be created due to business rules \n\nReturned, for example, when you have an accounting software integration connected to your Revolut Business account, and accounting categories are managed by that integration.\n\nThe request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.\nRetrying the same request won't succeed.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            cannot_modify_externally_managed_resource: {
              summary:
                'Accounting categories are managed by integration, cannot be created manually',
              value: {
                error_id: 'e950c41e-cfd6-4e04-bd79-2d57a3951774',
                code: 3514,
                message:
                  'Accounting categories are managed by your connected accounting integration and cannot be modified manually',
              },
            },
          },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getAccountingCategoriesAccountingCategoryIdRoute = createRoute({
  method: 'get',
  path: '/accounting-categories/{accounting_category_id}',
  tags: ['Accounting', 'Accounting categories'],
  summary: 'Retrieve accounting category details',
  description:
    'Get the details of a specific accounting category based on its ID.\n\nThe details include the accounting category name, code, and default tax rate, as well as when the accounting category was added to your settings, and when it was last updated.\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories).',
  operationId: 'getAccountingCategory',
  request: {
    params: z.object({
      accounting_category_id: z
        .uuid()
        .openapi({
          param: {
            name: 'accounting_category_id',
            in: 'path',
            required: true,
            description: 'The ID of the accounting category to retrieve.',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '64a2d310-e2a0-43c2-872f-969098141ebb',
            },
          },
          example: '64a2d310-e2a0-43c2-872f-969098141ebb',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Accounting category details',
      content: {
        'application/json': {
          schema: AccountingCategoryResponseSchema,
          examples: {
            category_with_default_tax_rate: {
              summary: 'Accounting category with default tax rate',
              value: {
                id: '8d831292-f950-4c5a-83f9-030df8cacd3f',
                name: 'Transportation',
                code: '400',
                created_at: '2026-03-11T17:03:25.570942Z',
                updated_at: '2026-03-11T17:03:25.570942Z',
                default_tax_rate_id: 'e6b84ddb-a127-466b-9a0a-501bda07773f',
              },
            },
            category_without_default_tax_rate: {
              summary: 'Accounting category without default tax rate',
              value: {
                id: '6a37383e-cfd3-4a2f-aa81-e3a6e6939efa',
                name: 'Office supplies',
                code: '410',
                created_at: '2026-03-11T17:03:25.570942Z',
                updated_at: '2026-03-11T17:03:25.570942Z',
              },
            },
          },
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when the required path parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '36e1a581-b05e-4018-b202-6b371092a19a',
            code: 2101,
            message: "Path parameter 'id' must be a valid UUID",
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the accounting category that you're trying to retrieve cannot be found.\nThis can happen, for example, when the accounting category doesn't exist, or the provided accounting category ID is incorrect.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'cbb15721-5f51-4588-a959-7494bb7ba827',
            code: 3006,
            message: 'Accounting category with id 8945879d-6854-4e10-88d6-ce92c5f010ac not found',
          },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const deleteAccountingCategoriesAccountingCategoryIdRoute = createRoute({
  method: 'delete',
  path: '/accounting-categories/{accounting_category_id}',
  tags: ['Accounting', 'Accounting categories'],
  summary: 'Delete an accounting category',
  description:
    "Delete a specific accounting category, based on its ID.\n\n:::note\nThis operation is not supported for [externally managed accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories#externally-managed-settings).\n:::\n\nOnce the accounting category is deleted, it will not be returned by the API or in the Revolut Business app, and:\n- You will not be able to assign it to new financial records (e.g. expenses). \n- Existing records assigned to this category that have not been completed will be marked as invalid, and you'll need to reassign them to another category.\n- Completed records will not be affected by the change. \n\nA successful response does not get any content in return.\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories).",
  operationId: 'deleteAccountingCategory',
  request: {
    params: z.object({
      accounting_category_id: z
        .uuid()
        .openapi({
          param: {
            name: 'accounting_category_id',
            in: 'path',
            required: true,
            description: 'The ID of the accounting category to delete.',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '64a2d310-e2a0-43c2-872f-969098141ebb',
            },
          },
          example: '64a2d310-e2a0-43c2-872f-969098141ebb',
        }),
    }),
  },
  responses: {
    204: { description: 'Accounting category deleted' },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            bad_param_format: {
              summary: 'Incorrect path parameter format',
              value: {
                error_id: 'f70973ea-c939-41f8-a106-1656ab5fae2f',
                code: 2101,
                message: "Path parameter 'id' must be a valid UUID",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the accounting category that you're trying to delete doesn't exist.\nThis can happen when, for example, the accounting category has already been deleted, or the provided category ID is incorrect.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '69bca351a-22a7-ac4d-af05-21032f9080ec',
            code: 3006,
            message: 'Accounting category with id d6c034a8-b302-4741-b66f-cc0f0a19642e not found',
          },
        },
      },
    },
    422: {
      description:
        "Unprocessable entity - accounting category cannot be deleted due to business rules \n\nReturned, for example, when you have an accounting software integration connected to your Revolut Business account, and accounting category are managed by that integration.\n\nThe request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.\nRetrying the same request won't succeed.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            cannot_delete_externally_managed_resource: {
              summary: 'Accounting categories managed by integration, cannot be deleted',
              value: {
                error_id: 'e950c41e-cfd6-4e04-bd79-2d57a3951774',
                code: 3514,
                message:
                  'Accounting categories are managed by your connected accounting integration and cannot be modified manually',
              },
            },
          },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const patchAccountingCategoriesAccountingCategoryIdRoute = createRoute({
  method: 'patch',
  path: '/accounting-categories/{accounting_category_id}',
  tags: ['Accounting', 'Accounting categories'],
  summary: 'Update accounting category settings',
  description:
    'Update settings for a specific accounting category, based on its ID.\n\n:::note\nThis operation is not supported for [externally managed accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories#externally-managed-settings).\n:::\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage accounting categories](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-categories).',
  operationId: 'updateAccountingCategory',
  request: {
    params: z.object({
      accounting_category_id: z
        .uuid()
        .openapi({
          param: {
            name: 'accounting_category_id',
            in: 'path',
            required: true,
            description: 'The ID of the accounting category to update.',
            schema: {
              type: 'string',
              format: 'uuid',
              example: '64a2d310-e2a0-43c2-872f-969098141ebb',
            },
          },
          example: '64a2d310-e2a0-43c2-872f-969098141ebb',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: UpdateAccountingCategoryRequestSchema,
          examples: {
            update_all_props: {
              summary: 'Update all properties',
              value: {
                name: 'Custom with tax rate',
                code: '998',
                default_tax_rate_id: 'e6b84ddb-a127-466b-9a0a-501bda07773f',
              },
            },
            update_category_name: {
              summary: 'Update accounting category name',
              value: { name: 'Marketing' },
            },
            update_category_code: {
              summary: 'Update accounting category code',
              value: { code: '998' },
            },
            update_default_tax_rate: {
              summary: 'Update default tax rate',
              value: { default_tax_rate_id: '6a6399c3-4a3b-4b21-b710-57aa03aae58f' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Accounting category updated' },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            param_required: {
              summary: 'Body is empty',
              value: {
                error_id: 'f1059c4b-4278-45d3-a17f-bd433ab33c15',
                code: 2101,
                message: 'Request body must not be empty',
              },
            },
            bad_param_type: {
              summary: 'Incorrect parameter format',
              value: {
                error_id: 'a79a73ea-7dk4-41f8-a106-1656ab5f1234',
                code: 2101,
                message: "'name' must be a string",
              },
            },
            bad_param_format: {
              summary: 'Incorrect parameter format',
              value: {
                error_id: 'f70973ea-c939-41f8-a106-1656ab5fae2f',
                code: 2101,
                message: "Path parameter 'id' must be a valid UUID",
              },
            },
            invalid_json: {
              summary: 'Invalid JSON',
              value: {
                error_id: '36f3cec5-b4b9-431f-9c28-afd3899bc64f',
                code: 2101,
                message: 'Request body is not valid JSON',
              },
            },
            param_value_too_short: {
              summary: 'Parameter value too short',
              value: {
                error_id: '32fd0697-2f3f-4308-b25d-c9230f99c589',
                code: 2101,
                message: "'name' must be at least 1 character",
              },
            },
            param_value_too_long: {
              summary: 'Parameter value too long',
              value: {
                error_id: 'd8d919b5-d667-4058-9bb3-17b6f7bcd6c8',
                code: 2101,
                message: "'name' must be at most 60 characters",
              },
            },
            param_value_too_long2: {
              summary: 'Parameter value too long',
              value: {
                error_id: 'b4d919b5-d667-4058-9bb3-17b6f7bcdd03',
                code: 2101,
                message: "'code' must be at most 50 characters",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the accounting category that you're trying to modify cannot be found.\nThis can happen, for example, when the accounting category doesn't exist, or the provided category ID is incorrect.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'be6c9d90-df25-458a-b559-be61896c94b8',
            code: 3006,
            message: 'Accounting category with id b656d8a4-a5cb-4f03-9a95-f281da25aa2b not found',
          },
        },
      },
    },
    409: {
      description:
        'Conflict\n\nRequest conflicts with the current state of the resource.\nReturned, for example, when an accounting category with the provided name and/or code already exists.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            category_with_name_exists: {
              summary: 'Name must be unique',
              value: {
                error_id: '8c08b656-ab6e-4768-4e57-f281da25aa2b',
                code: 3503,
                message: 'Category with name My Unique Accounting Category already exists',
              },
            },
            category_with_code_exists: {
              summary: 'Code must be unique',
              value: {
                error_id: 'd8a48c08-4e57-4768-ab6e-4d53aa1731b0',
                code: 3504,
                message: 'Category with code MUAC already exists',
              },
            },
          },
        },
      },
    },
    422: {
      description:
        "Unprocessable entity - accounting category cannot be updated due to business rules \n\nReturned, for example, when you have an accounting software integration connected to your Revolut Business account, and accounting categories are managed by that integration.\nMay also be returned if you try to modify a category that has already been deleted, or when you try to clear `name` and/or `code` values using `null`. \n\nThe request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.\nRetrying the same request won't succeed.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            cannot_update_externally_managed_resource: {
              summary: 'Accounting category managed by integration, cannot be updated',
              value: {
                error_id: '9c4be950c-cfd6-4e04-bd79-bd433ab33c15',
                code: 3514,
                message:
                  'Accounting categories are managed by your connected accounting integration and cannot be modified manually',
              },
            },
            state_mismatch: {
              summary: 'Accounting category is no longer available',
              value: {
                error_id: '41ef105-4278-cfd6-a17f-2d57a3951774',
                code: 3100,
                message: 'Invalid request',
              },
            },
            null_name: {
              summary: 'Name cannot be null',
              value: {
                error_id: '41ef105-4278-cfd6-a17f-2d57a3951774',
                code: 3100,
                message: 'Invalid request',
              },
            },
            null_code: {
              summary: 'Code cannot be null',
              value: {
                error_id: '41ef105-4278-cfd6-a17f-2d57a3951774',
                code: 3100,
                message: 'Invalid request',
              },
            },
            null_name_and_code: {
              summary: 'Name or code cannot be null',
              value: {
                error_id: '41ef105-4278-cfd6-a17f-2d57a3951774',
                code: 3100,
                message: 'Invalid request',
              },
            },
          },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const postAccountNameValidationRoute = createRoute({
  method: 'post',
  path: '/account-name-validation',
  tags: ['Counterparties'],
  summary: 'Validate an account name (CoP/VoP)',
  description:
    "Validate a counterparty's account name against their account details when [adding a counterparty](https://developer.revolut.com/docs/api/business#add-counterparty) or [making a transfer](https://developer.revolut.com/docs/api/business#create-payment) to a new or existing counterparty.\n\n:::warning\nThe CoP check is **not** a complete fraud-prevention tool, and it does **not** guarantee the person is who they claim to be.\nIt only confirms that the name and account details your provide match the bank's records.\n\nEven if the counterparty's details match, you should still exercise due caution when transferring funds.\n:::\n\n:::note[Availability & Sandbox behaviour]\n- This feature is only available to businesses in the [supported regions](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/confirmation-of-payee#supported-regions-and-services).\n  Additionally, to get access to CoP in the UK, eligible businesses must contact [Revolut API Support](mailto:api-requests@revolut.com).\n- In Sandbox, this feature is only available for **testing**.\n  While **incomplete or invalid requests** will return production-like error responses, **complete and valid requests** in Sandbox do **not** undergo real validation and will always return `cannot_be_checked`.\n:::\n\nThe validation relies on different underlying services, depending on the recipient's payment scheme (region and currency).\nThese factors determine which fields you must provide and what response you get.\n- For examples, refer to the request body samples.\n- For more information, see the guides: [Validate an account name (CoP/VoP)](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/confirmation-of-payee).",
  operationId: 'validateAccountName',
  request: {
    body: {
      description: 'Counterparty account details',
      content: {
        'application/json': {
          schema: ValidateAccountNameRequestSchema,
          examples: {
            uk_individual: {
              summary: 'UK individual counterparty (personal account)',
              value: {
                sort_code: '54-01-05',
                account_no: '12345678',
                individual_name: { first_name: 'John', last_name: 'Smith' },
              },
            },
            uk_company: {
              summary: 'UK company (business account)',
              value: {
                sort_code: '54-01-05',
                account_no: '12345678',
                company_name: 'John Smith Co.',
              },
            },
            eu_individual: {
              summary: 'EUR individual counterparty (personal account)',
              value: {
                iban: 'LT479258808892168739',
                recipient_country: 'LT',
                recipient_currency: 'EUR',
                individual_name: { first_name: 'Petras', last_name: 'Petrauskas' },
              },
            },
            eu_company: {
              summary: 'EUR company (business account)',
              value: {
                iban: 'LT479258808892168739',
                recipient_country: 'LT',
                recipient_currency: 'EUR',
                company_name: 'Petras Petrauskas UAB',
              },
            },
            ro_individual: {
              summary: 'RO individual counterparty (personal account)',
              value: {
                iban: 'RO1598536106002528374911',
                recipient_country: 'RO',
                recipient_currency: 'RON',
                individual_name: { first_name: 'Alexandru', last_name: 'Ionescu' },
              },
            },
            ro_company: {
              summary: 'RO company (business account)',
              value: {
                iban: 'RO1598536106002528374911',
                recipient_country: 'RO',
                recipient_currency: 'RON',
                company_name: 'Alexandru Ionescu SRL',
              },
            },
            au_individual: {
              summary: 'AU individual counterparty (personal account)',
              value: {
                account_no: '486196918',
                bsb: '159517',
                individual_name: { first_name: 'Joseph', last_name: 'Bloggs' },
              },
            },
            au_company: {
              summary: 'AU company (business account)',
              value: {
                account_no: '486196918',
                bsb: '159517',
                company_name: 'Joseph Bloggs Pty Ltd',
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
        'Account name validation result\n\n:::note\n- The actual results returned in the response come from the CoP services, not from Revolut.\n  The Business API passes them on as received.\n\n  Because of this, the descriptions below should be treated as an approximation rather than complete documentation.\n- The responses differ depending on the CoP service, even when the schema appears the same.\n  Make sure that you refer to the appropriate response variant.\n:::',
      content: {
        'application/json': {
          schema: ValidateAccountNameResponseSchema,
          examples: {
            match_individual_uk: {
              summary: '(UK) Individual account name and number match',
              value: {
                result_code: 'matched',
                individual_name: { first_name: 'John', last_name: 'Smith' },
              },
            },
            match_company_uk: {
              summary: '(UK) Company account name and number match',
              value: { result_code: 'matched', company_name: 'John Smith Co.' },
            },
            match_but_individual_account_type_uk: {
              summary: '(UK) Names match but counterparty is an individual, not a company',
              value: {
                result_code: 'close_match',
                reason: { type: 'uk_cop', code: 'individual_account_name_matched' },
                individual_name: { first_name: 'John', last_name: 'Smith' },
              },
            },
            match_but_company_account_type_uk: {
              summary: '(UK) Names match but counterparty is a company, not an individual',
              value: {
                result_code: 'close_match',
                reason: { type: 'uk_cop', code: 'company_account_name_matched' },
                company_name: 'John Smith Co.',
              },
            },
            close_match_individual_name_uk: {
              summary: '(UK) Individual account name is a close match',
              value: {
                result_code: 'close_match',
                reason: { type: 'uk_cop', code: 'close_match' },
                individual_name: { first_name: 'Joan', last_name: 'Smith' },
              },
            },
            close_match_company_name_uk: {
              summary: '(UK) Company account name is a close match',
              value: {
                result_code: 'close_match',
                reason: { type: 'uk_cop', code: 'close_match' },
                company_name: 'Joan Smith Co.',
              },
            },
            close_match_individual_name_and_account_type_uk: {
              summary: '(UK) Names are similar and counterparty is an individual, not a company',
              value: {
                result_code: 'close_match',
                reason: { type: 'uk_cop', code: 'individual_account_close_match' },
                individual_name: { first_name: 'Joan', last_name: 'Smith' },
              },
            },
            close_match_company_name_and_account_type_uk: {
              summary: '(UK) Names are similar and counterparty is a company, not an individual',
              value: {
                result_code: 'close_match',
                reason: { type: 'uk_cop', code: 'company_account_close_match' },
                company_name: 'Joan Smith Co.',
              },
            },
            account_does_not_match_individual_uk: {
              summary: '(UK) Provided details for individual do not match account details',
              value: {
                result_code: 'not_matched',
                reason: { type: 'uk_cop', code: 'not_matched' },
                individual_name: { first_name: 'John', last_name: 'Smith' },
              },
            },
            account_does_not_match_company_uk: {
              summary: '(UK) Provided details for company do not match account details',
              value: {
                result_code: 'not_matched',
                reason: { type: 'uk_cop', code: 'not_matched' },
                company_name: 'John Smith Co.',
              },
            },
            account_does_not_exist_uk: {
              summary: '(UK) Account does not exist',
              value: {
                result_code: 'not_matched',
                reason: { type: 'uk_cop', code: 'account_does_not_exist' },
              },
            },
            account_switched_uk: {
              summary: '(UK) Account switched',
              value: {
                result_code: 'cannot_be_checked',
                reason: { type: 'uk_cop', code: 'account_switched' },
              },
            },
            cannot_be_checked_uk: {
              summary: '(UK) Account cannot be checked',
              value: {
                result_code: 'cannot_be_checked',
                reason: { type: 'uk_cop', code: 'cannot_be_checked' },
                individual_name: { first_name: 'Jane', last_name: 'Doe' },
              },
            },
            match_individual_au: {
              summary: '(AU) Individual account name and number match',
              value: {
                result_code: 'matched',
                individual_name: { first_name: 'Joseph', last_name: 'Bloggs' },
              },
            },
            match_company_au: {
              summary: '(AU) Company account name and number match',
              value: { result_code: 'matched', company_name: 'Joseph Bloggs Pty Ltd' },
            },
            match_but_individual_account_type_au: {
              summary: '(AU) Names match but counterparty is an individual, not a company',
              value: {
                result_code: 'matched',
                individual_name: { first_name: 'Joseph', last_name: 'Bloggs' },
              },
            },
            match_but_company_account_type_au: {
              summary: '(AU) Names match but counterparty is a company, not an individual',
              value: { result_code: 'matched', company_name: 'Joseph Bloggs Pty Ltd' },
            },
            close_match_company_name_au: {
              summary: '(AU) Company account name is a close match',
              value: {
                result_code: 'close_match',
                reason: { type: 'au_cop', code: 'close_match' },
                company_name: 'Josef Bloggs Pty Ltd',
              },
            },
            account_does_not_match_individual_au: {
              summary: '(AU) Provided details for individual do not match account details',
              value: {
                result_code: 'not_matched',
                reason: { type: 'au_cop', code: 'not_matched' },
                individual_name: { first_name: 'Jane', last_name: 'Bloggs' },
              },
            },
            account_does_not_match_company_au: {
              summary: '(AU) Provided details for company do not match account details',
              value: {
                result_code: 'not_matched',
                reason: { type: 'uk_cop', code: 'not_matched' },
                company_name: 'Jane Bloggs Pty Ltd',
              },
            },
            match_individual_eur: {
              summary: '(EUR) Individual account name and number match',
              value: {
                result_code: 'matched',
                individual_name: { first_name: 'Petras', last_name: 'Petrauskas' },
              },
            },
            match_company_eur: {
              summary: '(EUR) Company account name and number match',
              value: { result_code: 'matched', company_name: 'Petras Petrauskas UAB' },
            },
            match_but_individual_account_type_eur: {
              summary: '(EUR) Names match, though counterparty is an individual, not a company',
              value: { result_code: 'matched', company_name: 'Petras Petrauskas' },
            },
            match_but_company_account_type_eur: {
              summary: '(EUR) Names match, though counterparty is a company, not an individual',
              value: {
                result_code: 'matched',
                individual_name: { first_name: 'Petras', last_name: 'Petrauskas UAB' },
              },
            },
            close_match_individual_name_eur: {
              summary: '(EUR) Individual account name is a close match',
              value: {
                result_code: 'close_match',
                reason: { type: 'eu_cop', code: 'close_match' },
                individual_name: { first_name: 'Petras', last_name: 'Petrauskas' },
              },
            },
            close_match_company_name_eur: {
              summary: '(EUR) Company account name is a close match',
              value: {
                result_code: 'close_match',
                reason: { type: 'eu_cop', code: 'close_match' },
                company_name: 'Petras Petrauskas UAB',
              },
            },
            account_does_not_match_individual_eur: {
              summary: '(EUR) Provided details for individual do not match account details',
              value: {
                result_code: 'not_matched',
                reason: { type: 'au_cop', code: 'not_matched' },
                individual_name: { first_name: 'Piter', last_name: 'Petrauskas' },
              },
            },
            account_does_not_match_company_eur: {
              summary: '(EUR) Provided details for company do not match account details',
              value: {
                result_code: 'not_matched',
                reason: { type: 'uk_cop', code: 'not_matched' },
                company_name: 'Piter Petrauskas Ltd',
              },
            },
            match_individual_ro: {
              summary: '(RO) Account found, partial name returned for individual',
              value: {
                result_code: 'matched',
                name_validation_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
                individual_name: { first_name: 'Alexandru', last_name: 'I.' },
              },
            },
            match_company_ro: {
              summary: '(RO) Account found, partial name returned for company',
              value: {
                result_code: 'matched',
                name_validation_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
                company_name: 'Rodri**** SA',
              },
            },
            cannot_be_checked_not_supported: {
              summary:
                'The specified currency+country combination is invalid or not supported for your region',
              value: { result_code: 'cannot_be_checked', reason: { code: 'not_supported' } },
            },
            unavailable: {
              summary: 'Temporarily unavailable',
              value: { result_code: 'temporarily_unavailable' },
            },
          },
        },
      },
    },
    400: {
      description:
        'Bad request\n\nReturned, for example, when the data you provided is invalid or required data is missing.\n',
      content: {
        'application/json': {
          schema: z
            .object({
              code: z.int().openapi({ description: 'The error code.' }),
              message: z.string().openapi({ description: 'The description of the error.' }),
            })
            .openapi({ required: ['code', 'message'] }),
          examples: {
            invalid_sort_code_uk: {
              summary: 'Invalid sort code (UK)',
              value: { message: 'Invalid sort code: 54-01-050', code: 3000 },
            },
            invalid_iban_ro: {
              summary: 'Invalid IBAN (RO)',
              value: { message: 'RO49AAAA1B31007593840000 is not a valid IBAN', code: 3000 },
            },
            country_missing: {
              summary: 'Country prefix is missing in IBAN',
              value: { message: "Required 'country' is missing", code: 3000 },
            },
            name_missing_eur: {
              summary: "Recipient's name is missing",
              value: { message: 'company_name or individual_name should be provided', code: 3000 },
            },
            last_name_is_empty_ro: {
              summary: 'Last name is required but was not provided',
              value: { message: 'last_name is empty', code: 3000 },
            },
          },
        },
      },
    },
    401: {
      description:
        'Unauthorized\n\nReturned, for example, when the credentials you used to make the request are invalid.\nFor more information, see the **Authorization** section.',
      content: {
        'application/json': {
          schema: z
            .object({
              message: z.string().openapi({ description: 'The description of the error.' }),
              status: z.string().exactOptional().openapi({ description: 'The HTTP error code.' }),
            })
            .openapi({ required: ['message'] }),
          example: { message: 'The request should be authorized.', status: 401 },
        },
      },
    },
    404: {
      description:
        'Not found\n\nReturned, for example, when your account does not have access to CoP.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'Resource not found', code: 3006 },
        },
      },
    },
    429: {
      description:
        "Too many requests\n\nReturned when you've exceeded the rate limit for CoP checks.\nIn Romania, for example, making more than 3 CoP queries without initiating a payment within a 24-hour period will temporarily restrict access to the service for 24 hours.",
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'Rate limit exceeded', code: 3162 },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/accounts',
  tags: ['Accounts'],
  summary: 'Retrieve all accounts',
  description:
    'Get a list of all your accounts.\n\nFor more information, see the guides: [Get your account details](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/manage-your-accounts).',
  operationId: 'getAccounts',
  responses: {
    200: {
      description: 'List of business accounts',
      content: {
        'application/json': {
          schema: AccountsSchema,
          example: [
            {
              id: 'b7ec67d3-5af1-42c8-bece-3d28nlmo894d',
              name: 'International account',
              balance: 3171.89,
              currency: 'GBP',
              state: 'active',
              public: false,
              created_at: '2022-08-05T14:29:22.215785Z',
              updated_at: '2022-08-05T14:29:22.215785Z',
              account_type: 'current',
            },
            {
              id: 'bssc67d3-5afd-42c2-bece-3d28nlmo894d',
              name: 'International account 2',
              balance: 411561.89,
              currency: 'EUR',
              state: 'active',
              public: true,
              created_at: '2022-08-25T14:29:22.215785Z',
              updated_at: '2022-08-30T14:29:22.215785Z',
              account_type: 'current',
            },
          ],
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const getAccountsAccountIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{account_id}',
  tags: ['Accounts'],
  summary: 'Retrieve an account',
  description:
    'Get the information about one of your accounts.\nSpecify the account by its ID.\n\nFor more information, see the guides: [Get your account details](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/manage-your-accounts).',
  operationId: 'getAccount',
  request: {
    params: z.object({
      account_id: z
        .uuid()
        .openapi({
          param: {
            name: 'account_id',
            in: 'path',
            required: true,
            description: 'The ID of the account to retrieve.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The information about a specific account',
      content: {
        'application/json': {
          schema: AccountSchema,
          example: {
            id: 'b7ec67d3-5af1-42c8-bece-3d28nlmo894d',
            name: 'International account',
            balance: 3171.89,
            currency: 'GBP',
            state: 'active',
            public: false,
            created_at: '2022-08-05T14:29:22.215785Z',
            updated_at: '2022-08-05T14:29:22.215785Z',
            account_type: 'current',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const getAccountsAccountIdBankDetailsRoute = createRoute({
  method: 'get',
  path: '/accounts/{account_id}/bank-details',
  tags: ['Accounts'],
  summary: "Retrieve account's full bank details",
  description:
    'Get all the bank details of one of your accounts.\nSpecify the account by its ID.\n\nFor more information, see the guides: [Get your account details](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/manage-your-accounts).',
  operationId: 'getAccountDetails',
  request: {
    params: z.object({
      account_id: z
        .uuid()
        .openapi({
          param: {
            name: 'account_id',
            in: 'path',
            required: true,
            description: 'The ID of the account to retrieve all bank details.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The bank details of a specific account',
      content: {
        'application/json': {
          schema: AccountBankDetailsItemsSchema,
          example: [
            {
              iban: 'GB66REVO00996995908888',
              bic: 'REVOGB21',
              beneficiary: 'International account',
              beneficiary_address: {
                street_line1: 'Revolut LTD',
                street_line2: '1 Canada Square',
                city: 'London',
                country: 'GB',
                postcode: 'E14 5AB',
              },
              bank_country: 'GB',
              pooled: false,
              schemes: ['swift'],
              estimated_time: { unit: 'days', min: 1, max: 3 },
            },
          ],
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const getCardInvitationsRoute = createRoute({
  method: 'get',
  path: '/card-invitations',
  tags: ['Card invitations'],
  summary: 'Retrieve a list of card invitations',
  description:
    "Get the list of all card invitations in your organisation.\n\nThe results are paginated and sorted by the `created_at` date in reverse chronological order.\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\nFor more information, see the guides: [Manage card invitations](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations).",
  operationId: 'getCardInvitations',
  request: {
    query: z.object({
      created_before: z.iso
        .datetime({ offset: true })
        .default('the date-time at which the request is made')
        .exactOptional()
        .openapi({
          param: {
            name: 'created_before',
            in: 'query',
            required: false,
            description:
              'Retrieves only card invitations created before this timestamp (`created_at` < `created_before`).\nUsed for pagination.\nThe default value is the current date and time at which you are calling the endpoint.\nProvided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
            schema: {
              type: 'string',
              format: 'date-time',
              default: 'the date-time at which the request is made',
            },
            example: '2025-10-15T14:30:00Z',
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of card invitations to return per page.\n\nTo get to the next page, make a new request and use the `created_at` date of the last card invitation returned in the previous response as the value for `created_before`.',
            schema: { type: 'number', format: 'integer', minimum: 1, maximum: 100, default: 100 },
          },
        }),
      state: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(CardInvitationStateSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            required: false,
            description:
              'Retrieves card invitations filtered by the specified state(s).\nTo specify multiple values, follow this pattern: `state={VALUE1}&state={VALUE2}`. \nIf not provided, all states are returned.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/CardInvitationState' } },
            style: 'form',
            explode: false,
            example: 'state=created&state=redeemed',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of card invitations for your business',
      content: {
        'application/json': {
          schema: z.array(CardInvitationsResponseSchema),
          examples: { list_of_card_invitations: CardInvitationsListExample },
        },
      },
    },
    400: {
      description:
        'Bad request\n\nReturned, for example, when you provide invalid query parameters.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_limit_parameter: {
              summary: 'Invalid limit parameter',
              value: {
                code: 2101,
                message: 'Parameter limit must be a valid integer in range: [1, 100].',
              },
            },
            invalid_created_before_format: {
              summary: 'Invalid created_before format',
              value: { code: 2101, message: 'Parameter created_before must be a valid timestamp' },
            },
            invalid_state_parameter: {
              summary: 'Invalid state parameter',
              value: { code: 2101, message: 'Invalid card invitation state: active' },
            },
          },
        },
      },
    },
    401: {
      description:
        'Unauthorised\n\nReturned, for example, when the credentials you used to make the request are invalid.\nFor more information, see the **Authorization** section.',
      content: {
        'application/json': {
          schema: ErrorUnauthorizedSchema,
          examples: { unauthorized: ErrorUnauthorizedExample },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const postCardInvitationsRoute = createRoute({
  method: 'post',
  path: '/card-invitations',
  tags: ['Card invitations'],
  summary: 'Create a card invitation',
  description:
    "Create an invitation for a virtual [team member card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) for a new, not-yet-onboarded team member.\nWhen the team member completes onboarding before the invitation's expiry date, the invitation will automatically be claimed, and the card will then be issued for the team member immediately.\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\nFor more information, see the guides: [Manage card invitations](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations).",
  operationId: 'createCardInvitation',
  request: {
    body: {
      description: 'Card to create an invitation for',
      content: {
        'application/json': {
          schema: z
            .object({
              request_id: z
                .string()
                .max(40)
                .openapi({
                  description:
                    'A unique ID of the request that you provide.\n\nThere is no strict requirement on the format of this ID, but we suggest using v4 UUIDs.\n\n:::warning\nThis ID is used to prevent duplicate card creation requests in case of a lost connection or client error, so make sure you use the same `request_id` for requests related to the same card invitation.\nThe deduplication is limited to 24 hours counting from the first request using a given ID.\n:::\nFor more information, see the guides: [Manage card invitations - Idempotency](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations#idempotency).',
                }),
              expiry_period: z
                .string()
                .regex(/^P\d+D$/)
                .default('P90D')
                .exactOptional()
                .openapi({
                  description:
                    "The period after which the card invitation expires if it hasn't been claimed or cancelled. \nMust be specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) duration format.\nThe duration is counted from the card invitation creation.\n- **Minimum duration:** 1 day (`P1D`)\n- **Maximum duration:** 90 days (`P90D`)\n- **Default duration:** 90 days (`P90D`)",
                  example: 'P3D',
                }),
              holder_id: z
                .uuid()
                .openapi({
                  description:
                    "The ID of the team member who will be assigned as the holder of the card after the invitation is claimed.\n\n:::tip\nTo retrieve a team member's ID, use the [`GET /team-members` operation](https://developer.revolut.com/docs/api/business#get-team-members).\n:::",
                }),
              virtual: z
                .literal(true)
                .openapi({
                  description:
                    'Specifies the type of the card. \nMust be set to `true`, as with the API, you can create only virtual cards.\n\n:::tip\nTo create physical cards, use the [Revolut Business app](https://business.revolut.com).\n:::',
                }),
              label: z
                .string()
                .min(1)
                .max(30)
                .default('Virtual')
                .exactOptional()
                .openapi({
                  description:
                    "The label for the card to be issued, displayed in the UI to help distinguish between cards.\nIf not specified, the default label will be set according to the card's type.\nFor card invitations created via API, it's always `Virtual`.",
                }),
              spending_limits: SpendingLimitsSchemaSchema.exactOptional().openapi({
                description:
                  'All spending limits set for the card.\n\nYou can have at most 1 periodic (day/week/month/quarter/all-time) and 1 non-periodic (single transaction) limit at a time.\nIf you try to specify 2 periodic limits at a time, it will result in an error.',
              }),
              spending_period: SpendingPeriodSchemaSchema.exactOptional().openapi({
                description:
                  "The controls for the card's spending period.\n\nThey let you set the dates when the card becomes available or unavailable for spending, and define what happens after the end date.\n\nIf specified, you must provide at least one of these:\n- `start_date`\n- `end_date` together with `end_date_action`\n\nThe dates provided must be in the future.",
              }),
              categories: z
                .array(BusinessMerchantCategorySchema)
                .exactOptional()
                .openapi({
                  description:
                    'The list of merchant categories to be available for card spending.\nIf not specified, all categories will be allowed.',
                }),
              merchant_controls: MerchantControlsSchemaSchema.exactOptional().openapi({
                description:
                  'The merchant-level controls for card spending.\nThey let you block or allow the card to only transact with specific merchants.',
              }),
              mcc_controls: MccControlsSchemaSchema.exactOptional().openapi({
                description:
                  'Restricts card spending to merchants with the specified [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes (MCCs).\n:::tip\nMCCs are 4-digit codes used by payment card networks to classify businesses by the type of goods or services they provide — for example, `5411` for grocery stores or `7011` for hotels.\n:::',
              }),
              countries: z
                .array(
                  z
                    .string()
                    .regex(/^[A-Z]{2}$/)
                    .openapi({ example: 'GB' }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Restricts card use to specified countries, provided as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.',
                }),
              accounts: z
                .array(z.uuid())
                .exactOptional()
                .openapi({
                  description:
                    'The list of accounts to link to the card.\nIf not specified, all accounts will be linked.\nTo retrieve account IDs, use the [`GET /accounts` operation](https://developer.revolut.com/docs/api/business#get-accounts).',
                }),
            })
            .openapi({ required: ['request_id', 'holder_id', 'virtual'] }),
          examples: {
            card_invitation_minimal_example: CardInvitationMinCreateExample,
            card_invitation_full_example: CardInvitationMaxCreateExample,
            card_invitation_with_mcc_controls: CardInvitationWithMccControlsCreateExample,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Successfully created card invitation',
      content: {
        'application/json': {
          schema: CardInvitationCreatedResponseSchema,
          examples: { card_invitation_response: CardInvitationCreatedDetailsExample },
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when your request is malformed, missing required fields, or when it contains fields that cannot co-exist or unsupported values.\n\nIf the invalid value is an array item, the error might indicate the array index of this faulty item, counting from `0`. \nFor example, if you provide the list of countries, such as `"countries": ["GB", "USA", ...]`, the first item (`GB`) has index `0`, the second item (`USA`) has index `1`, and so on.\nIn the example, `USA` is invalid, because it should be a 2-letter code.\nIn such a case, the error will indicate that `countries[1]` is invalid, thus pointing to the second item in the array, i.e. `USA`.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            missing_required_field: {
              summary: 'Merchant controls are missing merchant IDs',
              value: { code: 3000, message: 'merchant_ids is empty' },
            },
            expiry_period_too_long: {
              summary: 'Expiry period is too long (max.90 days)',
              value: { code: 3000, message: 'expiry_period must be between PT24H and PT2160H' },
            },
            invalid_json: {
              summary: 'Invalid request body',
              value: { code: 3000, message: 'Cannot parse request: invalid JSON' },
            },
            wrong_spending_period_date: {
              summary: 'Wrong spending period date',
              value: { code: 2101, message: 'Spending period start_date must be in the future' },
            },
            invalid_account_id: {
              summary: 'Invalid account ID',
              value: {
                code: 2101,
                message: 'Invalid account ids provided=[0f187658-8c07-491f-9129-ae567b829137]',
              },
            },
            invalid_country_code: CardErrorBadCountryCodeExample,
          },
        },
      },
    },
    401: {
      description:
        'Unauthorised\n\nReturned, for example, when the credentials you used to make the request are invalid.\nFor more information, see the **Authorization** section.',
      content: {
        'application/json': {
          schema: ErrorUnauthorizedSchema,
          examples: { unauthorized: ErrorUnauthorizedExample },
        },
      },
    },
    404: {
      description:
        'Team member not found\n\nReturned when the team member specified as cardholder in `holder_id` does not exist.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 3042, message: 'Team member not found' },
        },
      },
    },
    422: {
      description:
        'Unprocessable Entity\n\nFor example, you try to set more than one periodic limit at a time, create an invitation for a deleted team member, or an unexpected error occurred when the initial request with the same `request_id` was sent.',
      content: {
        'application/json': {
          schema: ErrorUnprocessableEntitySchema,
          examples: {
            multiple_periodic_limits: {
              summary: 'Only one periodic spending limit at a time is allowed',
              value: { code: 33000, message: 'Only one periodic limit can be set on a card' },
            },
            inactive_team_member: {
              summary: 'Team member not in supported state, e.g. team member was deleted',
              value: { message: 'Card invitations are only allowed for users in created state' },
            },
            unexpected_error: {
              summary: 'Unexpected error on initial request',
              value: {
                code: 33009,
                message: 'Idempotent replay failed: first execution was not successful',
              },
            },
          },
        },
      },
    },
    429: {
      description: 'Concurrent requests with the same idempotency key',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            code: 3162,
            message:
              'Parallel requests conflict. Please synchronize your requests. request_id=5baa6989-ae59-4668-bb09-042fca180518',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getCardInvitationsCardInvitationIdRoute = createRoute({
  method: 'get',
  path: '/card-invitations/{card_invitation_id}',
  tags: ['Card invitations'],
  summary: 'Retrieve card invitation details',
  description:
    "Get the details of a specific card invitation, based on its ID.\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\nFor more information, see the guides: [Manage card invitations](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations).",
  operationId: 'getCardInvitation',
  request: {
    params: z.object({
      card_invitation_id: z
        .uuid()
        .openapi({
          param: {
            name: 'card_invitation_id',
            in: 'path',
            required: true,
            description: 'The ID of the card invitation.',
            schema: { type: 'string', format: 'uuid' },
            example: '4016b891-bb50-4bd2-8a1b-adb74f4aacdd',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Information about the card invitation',
      content: {
        'application/json': {
          schema: CardInvitationResponseSchema,
          examples: {
            invitation_created: CardInvitationCreatedDetailsExample,
            invitation_redeemed: CardInvitationRedeemedDetailsExample,
            invitation_expired: CardInvitationExpiredDetailsExample,
            invitation_failed: CardInvitationFailedDetailsExample,
            invitation_failed_team_member_deleted: CardInvitationFailedNoHolderDetailsExample,
          },
        },
      },
    },
    400: {
      description:
        'Bad request\n\nReturned, for example, when you provide an invalid card invitation ID in the path.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_id: CardErrorBadIdExample },
        },
      },
    },
    401: {
      description:
        'Unauthorised\n\nReturned, for example, when the credentials you used to make the request are invalid.\nFor more information, see the **Authorization** section.',
      content: {
        'application/json': {
          schema: ErrorUnauthorizedSchema,
          examples: { unauthorized: ErrorUnauthorizedExample },
        },
      },
    },
    404: {
      description: "Card invitation doesn't exist",
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 1214, message: 'Card invitation not found' },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const patchCardInvitationsCardInvitationIdRoute = createRoute({
  method: 'patch',
  path: '/card-invitations/{card_invitation_id}',
  tags: ['Card invitations'],
  summary: 'Update card invitation settings',
  description:
    "Update settings for a specific card invitation, based on its ID.\nYou can update successfully created invitations that have not been claimed yet (`state=created`).\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\nFor more information, see the guides: [Manage card invitations](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations).",
  operationId: 'updateCardInvitation',
  request: {
    params: z.object({
      card_invitation_id: z
        .uuid()
        .openapi({
          param: {
            name: 'card_invitation_id',
            in: 'path',
            required: true,
            description: 'The ID of the card invitation.',
            schema: { type: 'string', format: 'uuid' },
            example: '4016b891-bb50-4bd2-8a1b-adb74f4aacdd',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              label: z
                .string()
                .min(1)
                .max(30)
                .default("Default label according to card's type")
                .exactOptional()
                .openapi({
                  description:
                    "The label of the card.\n\nCards without labels are not allowed.\nIf set to `null`, the default label will be set according to the card's type.\n\n:::tip[Default labels]\nFor virtual cards, the default label is `Virtual`.\nFor physical cards, depending on the type, it can be, for example, `Standard` or `Metal`. \n\nAs these values depend on available card types, they are subject to change over time.\n:::",
                }),
              spending_limits: SpendingLimitsSchemaSchema.exactOptional().openapi({
                description:
                  'All spending limits to be set for the card.\n\nYou can have at most 1 periodic (day/week/month/quarter/all-time) and 1 non-periodic (single transaction) limit at a time.\nIf you try to specify 2 periodic limits at a time, it will result in an error.\n\nUse `null` as the value for a specific limit to erase that limit.\nUse `null` as the value for the `spending_limits` object to erase all limits.',
              }),
              spending_period: SpendingPeriodSchemaSchema.exactOptional().openapi({
                description:
                  "The controls for the card's spending period.\n\nThey let you set or modify the dates when the card should become available or unavailable for spending, and define what happens after the end date.\n\nIf specified, you must provide at least one of these:\n- `start_date`\n- `end_date` together with `end_date_action`\n\nThe spending period dates must be in the future.\n\nThe dates are inclusive.\nThis means that:\n- If you set the `start_date` to `2026-03-31`, the card will become active on that day.\n- If you set the `end_date` to `2027-12-31`, the card will be active through that day, and will be locked/terminated starting on 1st Jan 2028.\n\n:::note\nYou can update the spending period settings in a few ways, depending on your use case:\n- To remove the start date, but keep the end date settings, provide the current `spending_period` settings without the `start_date`.\n- To remove the start date when no end date is set, provide the `spending_period.start_date` set to `null`.\n- To remove **all** spending period settings, provide `spending_period` set to `null`.\n\nIf you wish to erase a spending period end date, you can do this in a similar way, applying the steps to `spending_period.end_date` and `spending_period.end_date_action`.\n:::",
              }),
              categories: z
                .array(BusinessMerchantCategorySchema)
                .exactOptional()
                .openapi({
                  description:
                    'The list of merchant categories to be available for card spending.\nUse `null` to erase the value and reset to empty (all categories will be allowed).',
                }),
              merchant_controls: MerchantControlsSchemaSchema.exactOptional().openapi({
                description:
                  'The merchant-level controls for card spending.\n\nThey let you block or allow the card to only transact with specific merchants.',
              }),
              mcc_controls: MccControlsSchemaSchema.nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The MCC controls for card spending.\nSet to `null` to remove MCC controls.\n:::tip\nMCCs are 4-digit codes used by payment card networks to classify businesses by the type of goods or services they provide — for example, `5411` for grocery stores or `7011` for hotels.\n:::',
                }),
              countries: z
                .array(
                  z
                    .string()
                    .regex(/^[A-Z]{2}$/)
                    .openapi({ example: 'GB' }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The list of countries where the card can be used, provided as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.',
                }),
              accounts: z
                .array(z.uuid())
                .exactOptional()
                .openapi({
                  description:
                    'The list of accounts to link to the card.\nIf not specified, all accounts will be linked.\nTo retrieve account IDs, use the [`GET /accounts` operation](https://developer.revolut.com/docs/api/business#get-accounts).',
                }),
            })
            .openapi({ required: [] }),
          examples: {
            update_all_properties: {
              summary: 'Update all properties',
              value: {
                label: 'New card label',
                spending_limits: {
                  single: { amount: 100, currency: 'GBP' },
                  month: { amount: 300, currency: 'GBP' },
                },
                spending_period: {
                  start_date: '2025-12-20',
                  end_date: '2027-12-20',
                  end_date_action: 'lock',
                },
                categories: ['services', 'shopping', 'furniture'],
                merchant_controls: {
                  control_type: 'block',
                  merchant_ids: [
                    '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
                    'e8a87432-f71e-4deb-be84-969a02792929',
                    '3f09819f-63d1-473a-966c-54d8b9f43a93',
                  ],
                },
                countries: ['GB', 'SG', 'ES'],
                accounts: [
                  'f52c6c84-26b9-4e95-bbcf-99ed6523fb51',
                  '9ae4345a-5ee5-496b-b776-241fcc5a5ba4',
                ],
              },
            },
            erase_spending_period_start_date: {
              summary: 'Erase spending period start date and update end date',
              value: {
                spending_period: {
                  start_date: null,
                  end_date: '2027-12-20',
                  end_date_action: 'terminate',
                },
              },
            },
            erase_all_spending_limits: {
              summary: 'Erase all spending limits',
              value: { spending_limits: null },
            },
            erase_single_transaction_limit: {
              summary: 'Erase the single-transaction limit',
              value: { spending_limits: { single: null } },
            },
            allow_specific_merchants: {
              summary: 'Allow only specific merchants',
              value: {
                categories: [],
                merchant_controls: {
                  control_type: 'allow',
                  merchant_ids: [
                    '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
                    'e8a87432-f71e-4deb-be84-969a02792929',
                  ],
                },
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
      description: 'Information about the updated card invitation',
      content: {
        'application/json': {
          schema: CardInvitationUpdatedResponseSchema,
          examples: {
            update_all_properties: CardInvitationUpdatedAllPropertiesExample,
            erase_spending_period_start_date:
              CardInvitationUpdatedEraseSpendingPeriodStartDateExample,
            erase_all_spending_limits: CardInvitationUpdatedEraseAllSpendingLimitsExample,
            erase_single_transaction_limit: CardInvitationUpdatedEraseSingleTransactionLimitExample,
            allow_specific_merchants: CardInvitationUpdatedAllowSpecificMerchantsExample,
          },
        },
      },
    },
    400: {
      description:
        'Bad request\n\nReturned, for example, when there\'s nothing to update or the provided details are unsupported for this operation.\n\nIf the invalid value is an array item, the error might indicate the array index of this faulty item, counting from `0`. \nFor example, if you provide the list of countries, such as `"countries": ["GB", "USA", ...]`, the first item (`GB`) has index `0`, the second item (`USA`) has index `1`, and so on.\nIn the example, `USA` is invalid, because it should be a 2-letter code.\nIn such a case, the error will indicate that `countries[1]` is invalid, thus pointing to the second item in the array, i.e. `USA`.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            nothing_to_update: {
              summary: 'Empty request body - nothing to update',
              value: { code: 1112, message: 'Specify at least one parameter for card update' },
            },
            invalid_spending_period_date_settings: {
              summary: 'Invalid spending period date settings',
              value: {
                code: 3000,
                message: 'At least one of start_date or end_date must be present',
              },
            },
            invalid_spending_period_end_settings: {
              summary: 'Invalid spending period end settings',
              value: {
                code: 3000,
                message: 'end_date and end_date_action must be either both present or both empty',
              },
            },
            spending_period_end_date_before_start_date: {
              summary: 'Spending period end date is sooner than start date',
              value: {
                code: 3000,
                message: 'end_date must be at or after 2025-12-28, but is 2024-12-20',
              },
            },
            past_spending_period_end_date: {
              summary: 'Spending period start date is in the past',
              value: { code: 2102, message: 'Spending period start_date must be in the future' },
            },
            multiple_periodic_limits: {
              summary: 'Multiple periodic spending limits at a time',
              value: { code: 3000, message: 'Only one periodic limit can be specified' },
            },
            label_too_long: {
              summary: 'Card label too long',
              value: { code: 3000, message: 'Card label cannot contain more than 30 characters' },
            },
            invalid_id: CardErrorBadIdExample,
            invalid_country_code: CardErrorBadCountryCodeExample,
          },
        },
      },
    },
    401: {
      description:
        'Unauthorised\n\nReturned, for example, when the credentials you used to make the request are invalid.\nFor more information, see the **Authorization** section.',
      content: {
        'application/json': {
          schema: ErrorUnauthorizedSchema,
          examples: { unauthorized: ErrorUnauthorizedExample },
        },
      },
    },
    404: {
      description:
        "Card invitation doesn't exist\n\nThe card invitation for which you wish to update details does not exist.",
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            code: 3088,
            message: "Card invitation '3c059a42-24e1-4fd6-bfbe-f3c09234315f not found",
          },
        },
      },
    },
    422: {
      description:
        "Unprocessable Entity\n\nReturned, for example, when you try to update a card invitation that's not in state `created`.\nSuch an invitation is no longer active and therefore cannot be modified.",
      content: {
        'application/json': {
          schema: ErrorUnprocessableEntitySchema,
          examples: {
            unsupported_card_invitation_state: {
              summary: "Card invitation is not in state 'created'",
              value: { message: 'Unable to update card invitation with state=redeemed' },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const postCardInvitationsCardInvitationIdCancelRoute = createRoute({
  method: 'post',
  path: '/card-invitations/{cardInvitationId}/cancel',
  tags: ['Card invitations'],
  summary: 'Cancel a card invitation',
  description:
    "Cancel a specific card invitation, based on its ID.\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\nYou can cancel successfully created invitations that have not been claimed yet (`state=created`).\n\nOnce the card invitation is cancelled, it cannot be claimed or reactivated.\n\nA successful response does not get any content in return.\n\nFor more information, see the guides: [Manage card invitations](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-card-invitations).",
  operationId: 'cancelCardInvitation',
  request: {
    params: z.object({
      card_invitation_id: z
        .uuid()
        .openapi({
          param: {
            name: 'card_invitation_id',
            in: 'path',
            required: true,
            description: 'The ID of the card invitation to cancel.',
            schema: { type: 'string', format: 'uuid' },
            example: '4016b891-bb50-4bd2-8a1b-adb74f4aacdd',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Card invitation successfully cancelled' },
    400: {
      description:
        'Bad request\n\nReturned, for example, when the format of the invitation ID you provided is invalid.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_id: CardErrorBadIdExample },
        },
      },
    },
    401: {
      description:
        'Unauthorised\n\nReturned, for example, when the credentials you used to make the request are invalid.\nFor more information, see the **Authorization** section.',
      content: {
        'application/json': {
          schema: ErrorUnauthorizedSchema,
          examples: { unauthorized: ErrorUnauthorizedExample },
        },
      },
    },
    404: {
      description:
        "Card invitation doesn't exist\n\nThe card invitation you wish to cancel does not exist.",
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            code: 3088,
            message: "Card invitation '10a2069f-fc11-4d5f-82b4-29c4ecc3a62e' not found",
          },
        },
      },
    },
    422: {
      description:
        "Unprocessable entity\n\nReturned, for example, when you try to cancel a card invitation that's not in state `created`.\nSuch an invitation is no longer active and therefore cannot be cancelled.",
      content: {
        'application/json': {
          schema: ErrorUnprocessableEntitySchema,
          examples: {
            unsupported_card_invitation_state: {
              summary: "Card invitation is not in state 'created'",
              value: { message: 'Unable to cancel card invitation with state=redeemed' },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getCardsRoute = createRoute({
  method: 'get',
  path: '/cards',
  tags: ['Cards'],
  summary: 'Retrieve a list of cards',
  description:
    "Get the list of all cards in your organisation.\n\nThe results are paginated and sorted by the `created_at` date in reverse chronological order.\nTerminated cards are not included in the list.\nTo check the status of a specific terminated card, [retrieve it by its ID](https://developer.revolut.com/docs/api/business#get-card).\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\nFor more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).",
  operationId: 'getCards',
  request: {
    query: z.object({
      created_before: z.iso
        .datetime({ offset: true })
        .default('the date-time at which the request is made')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'created_before',
            schema: {
              type: 'string',
              format: 'date-time',
              default: 'the date-time at which the request is made',
            },
            description:
              'Retrieves cards with `created_at` < `created_before`.\nThe default value is the current date and time at which you are calling the endpoint.\n\nProvided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(100),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of cards to return per page.\n\nTo get to the next page, make a new request and use the `created_at` date of the last card returned in the previous response as the value for `created_before`.',
            schema: { type: 'number', format: 'integer', default: 100, maximum: 100, minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of cards of the business',
      content: {
        'application/json': {
          schema: CardsResponseSchema,
          examples: { list_of_cards: CardsListSimpleExample },
        },
      },
    },
    400: {
      description: 'Bad pagination parameters',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            code: 2101,
            message: 'Parameter limit must be a valid integer in range: [1, 100].',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const postCardsRoute = createRoute({
  method: 'post',
  path: '/cards',
  tags: ['Cards'],
  summary: 'Create a card',
  description:
    "Create a new [team member card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards), [company card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards), or [auto-issued card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards).\n\nWhen using the API, you can create only virtual cards.\nTo create a physical card, use the [Revolut Business app](https://business.revolut.com).\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\nFor more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).",
  operationId: 'createCard',
  request: {
    body: {
      description: 'Card to create',
      content: {
        'application/json': {
          schema: z
            .object({
              request_id: z
                .string()
                .max(40)
                .openapi({
                  description:
                    'A unique ID of the request that you provide.\n\nThere is no strict requirement on the format of this ID, but we suggest using v4 UUIDs.\n\n:::warning\nThis ID is used to prevent duplicate card creation requests in case of a lost connection or client error, so make sure you use the same `request_id` for requests related to the same card.\nThe deduplication is limited to 24 hours counting from the first request using a given ID.\nFor more information, see the guides: [Manage cards - Idempotency](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#idempotency).\n:::',
                }),
              holder_id: z
                .uuid()
                .exactOptional()
                .openapi({
                  description:
                    "The ID of the team member to assign as the holder of the card.\n\n:::tip\nTo retrieve a team member's ID, use the [`GET /team-members` operation](https://developer.revolut.com/docs/api/business#get-team-members).\n:::\n\nFor virtual cards (`virtual=true`), this field is optional.                    \nIf not provided, the type of the issued card depends on `contact_ids`:\n  - `contact_ids` provided → [company card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards)\n  - `contact_ids` not specified → [auto-issued card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards)",
                }),
              contact_ids: z
                .array(z.uuid())
                .min(1)
                .max(5)
                .exactOptional()
                .openapi({
                  description:
                    'The list of [contacts](https://help.revolut.com/business/help/cards/more-on-cards/company-cards/) for the card.\nUp to 5 team members sharing the card, much like co-holders.\nCan be [edited](https://developer.revolut.com/docs/api/business#update-card-contacts).\n\nAllowed only for [company cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (`virtual=true`, `holder_id` not specified).',
                }),
              product: z
                .object({
                  code: z
                    .string()
                    .openapi({ description: 'The code of the card product.', example: 'MBJ' }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The card product offered by the card provider for this card.\nIn other words, the program that the card is issued under.\n\nProvided only for virtual cards with no holder ID (`virtual=true`, and `holder_id` not specified):\n- **Required** for [auto-issued cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (`contact_ids` not specified)\n- Optional for [company cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (`contact_ids` specified)\n\nNot allowed for [team member cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (`holder_id` present).\n\n:::note\nThis property is only available to travel intermediaries using our travel solution.\nTo use it, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::',
                  required: ['code'],
                }),
              virtual: z
                .literal(true)
                .openapi({
                  description:
                    'Specifies the type of the card. \nMust be set to `true`, as with the API, you can create only virtual cards.\n\n:::tip\nTo create a physical card, use the [Revolut Business app](https://business.revolut.com).\n:::',
                }),
              label: z
                .string()
                .max(30)
                .exactOptional()
                .openapi({
                  description:
                    'The label for the issued card, displayed in the UI to help distinguish between cards.\nIf not specified, no label will be added.',
                }),
              references: CardReferencesSchema.exactOptional().openapi({
                description:
                  'References for the card.\nUp to 5 name-value pairs assigned to the card for tracking.\n\n:::info\nEach time the card is used, the references are recorded in the [transaction details](https://developer.revolut.com/docs/api/business#get-transaction#response) (`card.references`), helping track transactions made with this card.\n:::\n\nThe names must be unique.\nThe references can be [amended](https://developer.revolut.com/docs/api/business#update-card-references) up to 10 times.\n\nReferences are only supported for cards owned by the business (i.e. [company](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) or [auto-issued cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards)).\nThey are **not** supported for [team member cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (i.e. with `holder_id` present). \n\n:::note\nThe references recorded on a transaction are those assigned to the card at the time the transaction took place.\nIf the references are amended, they will only be applied to future transactions. \nExisting transaction are not affected.\n:::',
              }),
              spending_limits: SpendingLimitsSchemaSchema.exactOptional().openapi({
                description:
                  'All spending limits set for the card.\n\nYou can have at most 1 periodic (day/week/month/quarter/all-time) and 1 non-periodic (single transaction) limit at a time.\nIf you try to specify 2 periodic limits at a time, it will result in an error.',
              }),
              spending_period: SpendingPeriodSchemaSchema.exactOptional().openapi({
                description:
                  "The controls for the card's spending period.\n\nThey let you set the dates when the card becomes available or unavailable for spending, and define what happens after the end date.\n\nIf specified, you must provide at least one of these:\n- `start_date`\n- `end_date` together with `end_date_action`\n\nThe dates provided must be in the future.",
              }),
              categories: z
                .array(BusinessMerchantCategorySchema)
                .exactOptional()
                .openapi({
                  description:
                    'The list of merchant categories to be available for card spending.\nIf not specified, all categories will be allowed.',
                }),
              merchant_controls: MerchantControlsSchemaSchema.exactOptional().openapi({
                description:
                  'The merchant-level controls for card spending.\n\nThey let you block or allow the card to only transact with specific merchants.',
              }),
              mcc_controls: MccControlsSchemaSchema.exactOptional().openapi({
                description:
                  'Restricts card spending to merchants with the specified [ISO 18245](https://en.wikipedia.org/wiki/ISO_18245) merchant category codes (MCCs).\n:::tip\nMCCs are 4-digit codes used by payment card networks to classify businesses by the type of goods or services they provide — for example, `5411` for grocery stores or `7011` for hotels.\n:::',
              }),
              countries: z
                .array(
                  z
                    .string()
                    .regex(/^[A-Z]{2}$/)
                    .openapi({ example: 'GB' }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Restricts card use to specified countries, provided as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.',
                }),
              accounts: z
                .array(z.uuid())
                .exactOptional()
                .openapi({
                  description:
                    'The list of accounts to link to the card.\nIf not specified, all accounts will be linked.\nTo retrieve account IDs, use the [`GET /accounts` operation](https://developer.revolut.com/docs/api/business#get-accounts).',
                }),
            })
            .openapi({ required: ['request_id', 'virtual'] }),
          examples: {
            team_member_card: CardIndividualCreateExample,
            company_card: CardCompanyCreateExample,
            autogenerated_card: CardAutogeneratedCreateExample,
            card_with_spending_period_start_date: CardWithSpendingPeriodStartDateCreateExample,
            card_with_mcc_controls: CardWithMccControlsCreateExample,
            card_with_all_controls: CardWithAllControlsCreateExample,
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Information about the created card',
      content: {
        'application/json': {
          schema: CardCreatedResponseSchema,
          examples: {
            team_member_card: CardIndividualDetailsExample,
            company_card: CardCompanyDetailsExample,
            autogenerated_card: CardAutogeneratedDetailsExample,
            card_with_spending_period_start_date: CardWithSpendingPeriodStartDateDetailsExample,
          },
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when your request is malformed, missing required fields, or when it contains fields that cannot co-exist or unsupported values.\n\nIf the invalid value is an array item, the error might indicate the array index of this faulty item, counting from `0`. \nFor example, if you provide the list of countries, such as `"countries": ["GB", "USA", ...]`, the first item (`GB`) has index `0`, the second item (`USA`) has index `1`, and so on.\nIn the example, `USA` is invalid, because it should be a 2-letter code.\nIn such a case, the error will indicate that `countries[1]` is invalid, thus pointing to the second item in the array, i.e. `USA`.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            missing_conditional_fields: {
              summary: 'Contact IDs or product are required when holder ID not provided',
              value: {
                code: 3000,
                message: 'Either contact_ids or product must be present when holder_id is empty',
              },
            },
            contact_ids_and_product_not_allowed_with_holder_id: {
              summary: 'Contact IDs and product are not allowed when holder ID present',
              value: {
                code: 3000,
                message: 'Both contact_ids and product must be empty when holder_id is present',
              },
            },
            references_not_allowed_with_holder_id: {
              summary: 'References are not allowed when holder ID present',
              value: { code: 3000, message: 'references must be empty when holder_id is present' },
            },
            missing_required_field: {
              summary: 'Merchant controls are missing merchant IDs',
              value: { code: 3000, message: 'merchant_ids is empty' },
            },
            invalid_json: {
              summary: 'Invalid request body',
              value: { code: 3000, message: 'Cannot parse request: invalid JSON' },
            },
            product_not_found: {
              summary: 'Card product not found',
              value: { code: 2101, message: 'Product MJB not found' },
            },
            cannot_add_contact_ids: {
              summary: 'Contact ID(s) not found',
              value: { code: 2101, message: 'Unable to attach contactIds' },
            },
            wrong_spending_period_date: {
              summary: 'Wrong spending period date',
              value: { code: 2101, message: 'Spending period start_date must be in the future' },
            },
            invalid_account_id: {
              summary: 'Invalid account ID',
              value: {
                code: 2101,
                message: 'Invalid account ids provided=[0f187658-8c07-491f-9129-ae567b829137]',
              },
            },
            invalid_country_code: CardErrorBadCountryCodeExample,
          },
        },
      },
    },
    404: {
      description:
        'Team member not found\n\nReturned when the team member specified as cardholder in `holder_id` does not exist.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 3042, message: 'Team member not found' },
        },
      },
    },
    422: {
      description:
        'Unprocessable entity\n\nFor example, the team member exceeds the limit for virtual cards per account, or an unexpected error occurred when the initial request with the same `request_id` was sent.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            cards_limit_exceeded: {
              summary: 'Virtual cards limit per account exceeded',
              value: {
                code: 3087,
                message: 'Active virtual cards limit is exceeded for the employee',
              },
            },
            unexpected_error: {
              summary: 'Unexpected error on initial request',
              value: {
                code: 33009,
                message: 'Idempotent replay failed: first execution was not successful',
              },
            },
          },
        },
      },
    },
    429: {
      description: 'Concurrent requests with the same idempotency key',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            code: 3162,
            message:
              'Parallel requests conflict. Please synchronize your requests. request_id=5baa6989-ae59-4668-bb09-042fca180518',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getCardsCardIdRoute = createRoute({
  method: 'get',
  path: '/cards/{card_id}',
  tags: ['Cards'],
  summary: 'Retrieve card details',
  description:
    "Get the details of a specific card, based on its ID.\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\nFor more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).",
  operationId: 'getCard',
  request: {
    params: z.object({
      card_id: z
        .uuid()
        .openapi({
          param: {
            name: 'card_id',
            in: 'path',
            required: true,
            description: 'The ID of the card.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Information about the card',
      content: {
        'application/json': {
          schema: CardResponseWithTerminatedSchema,
          examples: {
            virtual_card: CardVirtualDetailsExample,
            physical_card: CardPhysicalDetailsExample,
            card_with_spend_program: CardWithSpendProgramDetailsExample,
            team_member_card: CardIndividualDetailsExample,
            company_card: CardCompanyDetailsExample,
            autogenerated_card: CardAutogeneratedDetailsExample,
            card_with_spending_period_start_date: CardWithSpendingPeriodStartDateDetailsExample,
            card_with_spend_limit_usage: CardWithSpendLimitUsageExample,
            terminated_card: CardTerminatedDetailsExample,
          },
        },
      },
    },
    400: {
      description:
        'Bad request\n\nReturned, for example, when you provide an invalid card ID in the path.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_id: CardErrorBadIdExample },
        },
      },
    },
    404: {
      description: "Card doesn't exist",
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 1214, message: 'Card not found' },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const deleteCardsCardIdRoute = createRoute({
  method: 'delete',
  path: '/cards/{card_id}',
  tags: ['Cards'],
  summary: 'Terminate a card',
  description:
    "Terminate a specific card, based on its ID.\n\nOnce the card is terminated, its state changes to `terminated`.\nTerminated cards are not returned when listing cards, but you can still retrieve a terminated card by its ID using the [`GET /cards/{card_id}` endpoint](https://developer.revolut.com/docs/api/business#get-card).\n\nA successful response does not get any content in return.\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\nFor more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).",
  operationId: 'deleteCard',
  request: {
    params: z.object({
      card_id: z
        .uuid()
        .openapi({
          param: {
            name: 'card_id',
            in: 'path',
            required: true,
            description: 'The ID of the card.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Card successfully terminated' },
    400: {
      description:
        'Bad request\n\nReturned, for example, when you provide an invalid card ID in the path.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_id: CardErrorBadIdExample },
        },
      },
    },
    404: {
      description: "Card doesn't exist",
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 1214, message: 'Card not found' },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const patchCardsCardIdRoute = createRoute({
  method: 'patch',
  path: '/cards/{card_id}',
  tags: ['Cards'],
  summary: 'Update card settings',
  description:
    "Update settings for a specific card, based on its ID.\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\nFor more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).",
  operationId: 'updateCard',
  request: {
    params: z.object({
      card_id: z
        .uuid()
        .openapi({
          param: {
            name: 'card_id',
            in: 'path',
            required: true,
            description: 'The ID of the card.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              label: z
                .string()
                .max(30)
                .exactOptional()
                .openapi({ description: 'The label of the card.' }),
              spending_limits: SpendingLimitsSchemaSchema.exactOptional().openapi({
                description:
                  'All spending limits set for the card.\n\nYou can have at most 1 periodic (day/week/month/quarter/all-time) and 1 non-periodic (single transaction) limit at a time.\nIf you try to specify 2 periodic limits at a time, it will result in an error.\n\nUse `null` as the value for a specific limit to erase that limit.\nUse `null` as the value for the `spending_limits` object to erase all limits.\n\n:::note\nUpdating a spending limit does not reset the spending counter.\nFor more information, see the guides: [Manage cards - Update a card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#update-a-card).\n:::',
              }),
              spending_period: SpendingPeriodSchemaSchema.exactOptional().openapi({
                description:
                  "The controls for the card's spending period.\n\nThey let you set or modify the dates when the card becomes available or unavailable for spending, and define what happens after the end date.\n\nIf specified, you must provide at least one of these:\n- `start_date`\n- `end_date` together with `end_date_action`\n\nThe spending period dates must be in the future.\n\nThe dates are inclusive.\nThis means that:\n- If you set the `start_date` to `2025-12-31`, the card will become active on that day.\n- If you set the `end_date` to `2026-06-01`, the card will be active through that day, and will be locked/terminated starting on 2nd June 2026.\n\n:::note []\nIf you wish to unlock a card with a spending period starting in the future and make it available for spending right away, you can do it in a few ways, depending on your use case:\n- To remove the start date, but keep the end date settings, provide the current `spending_period` settings without the `start_date`.\n- To remove the start date when no end date is set, provide the `spending_period.start_date` set to `null`.\n- To remove **all** spending period settings, either provide `spending_period` set to `null`, or use the dedicated endpoint to [unlock](https://developer.revolut.com/docs/api/business#unlock-card) the card.\n\nIf you wish to erase a spending period end date, you can do this in a similar way, applying the steps to `spending_period.end_date` and `spending_period.end_date_action`.\n:::",
              }),
              categories: z
                .array(BusinessMerchantCategorySchema)
                .exactOptional()
                .openapi({
                  description:
                    'The list of merchant categories that will be available for card spending.\nUse `null` to erase the value and reset to empty (all categories will be allowed).',
                }),
              merchant_controls: MerchantControlsSchemaSchema.exactOptional().openapi({
                description:
                  'The merchant-level controls for card spending.\n\nThey let you block or allow the card to only transact with specific merchants.',
              }),
              mcc_controls: MccControlsSchemaSchema.nullable()
                .exactOptional()
                .openapi({
                  description:
                    'The MCC controls for card spending.\nSet to `null` to remove MCC controls.\n:::tip\nMCCs are 4-digit codes used by payment card networks to classify businesses by the type of goods or services they provide — for example, `5411` for grocery stores or `7011` for hotels.\n:::',
                }),
              countries: z
                .array(
                  z
                    .string()
                    .regex(/^[A-Z]{2}$/)
                    .openapi({ example: 'GB' }),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The list of countries where the card can be used, provided as 2-letter [ISO 3166](https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes) codes.',
                }),
              accounts: z
                .array(z.uuid())
                .exactOptional()
                .openapi({
                  description:
                    'The list of accounts to link to the card.\nIf not specified, all accounts will be linked.\nTo retrieve account IDs, use the [`GET /accounts` operation](https://developer.revolut.com/docs/api/business#get-accounts).',
                }),
            })
            .openapi({ required: [] }),
          examples: {
            update_all_properties: {
              summary: 'Update all properties',
              value: {
                label: 'New card label',
                spending_limits: {
                  single: { amount: 100, currency: 'GBP' },
                  month: { amount: 300, currency: 'GBP' },
                },
                spending_period: {
                  start_date: '2025-09-18',
                  end_date: '2026-12-20',
                  end_date_action: 'lock',
                },
                categories: ['services', 'shopping', 'furniture'],
                merchant_controls: {
                  control_type: 'block',
                  merchant_ids: [
                    '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
                    'e8a87432-f71e-4deb-be84-969a02792929',
                    '3f09819f-63d1-473a-966c-54d8b9f43a93',
                  ],
                },
                countries: ['GB', 'SG', 'ES'],
                accounts: [
                  'f52c6c84-26b9-4e95-bbcf-99ed6523fb51',
                  '9ae4345a-5ee5-496b-b776-241fcc5a5ba4',
                ],
              },
            },
            erase_spending_period_start_date: {
              summary: 'Erase spending period start date',
              value: {
                spending_period: {
                  start_date: null,
                  end_date: '2026-12-20',
                  end_date_action: 'lock',
                },
              },
            },
            erase_all_spending_limits: {
              summary: 'Erase all spending limits',
              value: { spending_limits: null },
            },
            erase_single_transaction_limit: {
              summary: 'Erase the single-transaction limit',
              value: { spending_limits: { single: null } },
            },
            allow_specific_merchants: {
              summary: 'Allow only specific merchants',
              value: {
                categories: [],
                merchant_controls: {
                  control_type: 'allow',
                  merchant_ids: [
                    '46df0a1b-3678-4ded-9cf5-9f4da1b5019d',
                    'e8a87432-f71e-4deb-be84-969a02792929',
                  ],
                },
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
        "Information about the updated card\n\n:::note\nIf you modify the card's spending period in the request, the card's `state` returned in the response might not yet reflect those changes.\nThis is because these spending period locks are applied to the card asynchronously, which might result in a slight delay in the card's state update.\n\nTo re-check the state, [fetch the card's details](https://developer.revolut.com/docs/api/business#get-card).\n:::",
      content: {
        'application/json': {
          schema: CardResponseSchema,
          examples: {
            update_all_properties: CardUpdatedAllPropertiesDetailsExample,
            erase_spending_period_start_date: CardUpdatedEraseSpendingPeriodStartDateDetailsExample,
            erase_all_spending_limits: CardUpdatedEraseAllSpendingLimitsDetailsExample,
            erase_single_transaction_limit: CardUpdatedEraseSingleTransactionLimitDetailsExample,
            allow_specific_merchants: CardUpdatedAllowSpecificMerchantsDetailsExample,
          },
        },
      },
    },
    400: {
      description:
        'Nothing to update or the provided details are unsupported for this operation\n\nIf the invalid value is an array item, the error might indicate the array index of this faulty item, counting from `0`. \nFor example, if you provide the list of countries, such as `"countries": ["GB", "USA", ...]`, the first item (`GB`) has index `0`, the second item (`USA`) has index `1`, and so on.\nIn the example, `USA` is invalid, because it should be a 2-letter code.\nIn such a case, the error will indicate that `countries[1]` is invalid, thus pointing to the second item in the array, i.e. `USA`.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            nothing_to_update: {
              summary: 'Nothing to update',
              value: { code: 1112, message: 'Specify at least one parameter for card update' },
            },
            invalid_spending_period_date_settings: {
              summary: 'Invalid spending period date settings',
              value: {
                code: 3000,
                message: 'At least one of start_date or end_date must be present',
              },
            },
            invalid_spending_period_end_settings: {
              summary: 'Invalid spending period end settings',
              value: {
                code: 3000,
                message: 'end_date and end_date_action must be either both present or both empty',
              },
            },
            invalid_id: CardErrorBadIdExample,
            invalid_country_code: CardErrorBadCountryCodeExample,
          },
        },
      },
    },
    404: {
      description:
        "Card doesn't exist\n\nThe card for which you wish to update details does not exist.",
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 1214, message: 'Card not found' },
        },
      },
    },
    422: {
      description:
        "Unprocessable entity\n\nFor example, you try to provide a spending period end date that's in the past.",
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            past_spending_period_end_date: {
              summary: 'Spending period end date is in the past',
              value: { code: 33003, message: 'Unable to update the card with state=active' },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const putCardsCardIdContactsRoute = createRoute({
  method: 'put',
  path: '/cards/{card_id}/contacts',
  tags: ['Cards'],
  summary: 'Update card contacts',
  description:
    "Update the list of card contacts (`contact_ids`) for a [company card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards).\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\nYou can only update cards with existing contacts.\nIf a card does not have any contacts assigned, this operation is not allowed.\n\nOn success, the updated list of contacts is returned.\n\n:::warning\nThis operation **overrides** the existing contacts.\nThis means that it removes the current list completely, and replaces it with the new one provided in this request.\n\nIf you want to add new contacts for the card instead of replacing the existing ones, make sure that you [fetch](https://developer.revolut.com/docs/api/business#get-card) the existing contacts first, and include them in your request.\n:::\n\nFor more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).",
  operationId: 'updateCardContacts',
  request: {
    params: z.object({
      card_id: z
        .uuid()
        .openapi({
          param: {
            name: 'card_id',
            in: 'path',
            required: true,
            description: 'The ID of the card whose contacts should be updated.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      description:
        'New contacts for the card.\n:::warning\nThis will **override** the existing list of contacts.\n:::',
      content: {
        'application/json': {
          schema: CardContactsSchema,
          examples: { list_of_contacts: CardContactsExample },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Updated list of contacts',
      content: {
        'application/json': {
          schema: CardContactsSchema,
          examples: { list_of_contacts: CardContactsExample },
        },
      },
    },
    400: {
      description:
        "Bad Request\n\nReturned, for example, when the provided list of contacts is empty or too many contacts are provided, or when it's malformed or contains incorrect values.",
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            wrong_size: {
              summary: 'Wrong number of contacts',
              value: { code: 2101, message: 'Card contacts size must be between 1 and 5' },
            },
            incorrect_values: {
              summary: 'Incorrect value(s)',
              value: { code: 3000, message: "Value of field '[0]' is not in correct format" },
            },
            invalid_json: {
              summary: 'Incorrect request format',
              value: { code: 3000, message: 'Cannot parse request: invalid JSON' },
            },
            invalid_id: CardErrorBadIdExample,
          },
        },
      },
    },
    404: {
      description:
        'Card not found\n\nThe card for which you wish to update contacts does not exist.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 1214, message: 'Card not found' },
        },
      },
    },
    422: {
      description:
        'Unprocessable Content\n\nReturned, for example, when you try to update contacts for a card other than a [company card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards).',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            code: 33011,
            message:
              'Card contacts are not supported for the card=23a8befd-7b7b-4922-a00f-188b0153730b',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const putCardsCardIdReferencesRoute = createRoute({
  method: 'put',
  path: '/cards/{card_id}/references',
  tags: ['Cards'],
  summary: 'Update card references',
  description:
    "Update the list of [references (`references`)](https://developer.revolut.com/docs/api/business#get-card#response) for a [company](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) or [auto-issued card](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards).\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\nReferences can be amended up to 10 times.\nReference names must be unique.\n\nReferences are only supported for cards owned by the business (i.e. [company](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) or [auto-issued cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards)).\nThey can't be added to [team member cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards#different-types-of-cards) (i.e. with `holder_id` present). \n\nThe references recorded on a transaction are those assigned to the card at the time the transaction took place.\nIf the references are amended, they will only be applied to future transactions.\nExisting transaction are not affected.\n\nOn success, the updated list of references is returned.\n\n:::warning\nThis operation **overrides** the existing references.\nThis means that it removes the current list completely, and replaces it with the new one provided in this request.\n\nIf you want to add references to the card instead of replacing the existing ones, make sure that you [fetch](https://developer.revolut.com/docs/api/business#get-card) the existing references first, and include them in your request.\n\nTo delete existing references without adding new ones, simply provide an empty list.\n:::\n\nFor more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).",
  operationId: 'updateCardReferences',
  request: {
    params: z.object({
      card_id: z
        .uuid()
        .openapi({
          param: {
            name: 'card_id',
            in: 'path',
            required: true,
            description: 'The ID of the card whose references should be amended.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      description:
        'References for the card.\nUp to 5 name-value pairs assigned to the card for tracking.\n:::warning\nThis will **override** the existing references.\n:::',
      content: {
        'application/json': {
          schema: CardReferencesSchema,
          examples: { list_of_references: CardReferencesExample },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Updated list of references.             \nUp to 5 name-value pairs assigned to the card for tracking.',
      content: {
        'application/json': {
          schema: CardReferencesSchema.openapi({
            description:
              'References for the card.\nUp to 5 name-value pairs assigned to the card for tracking.\n\nThe names must be unique.\nThe references can be amended up to 10 times.',
          }),
          examples: { list_of_references: CardReferencesExample },
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when you provide duplicate reference names, too many references, the reference names or values are too long, or your request is malformed.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            duplicate_names: {
              summary: 'Duplicate names',
              value: { code: 2101, message: 'Reference names must be unique' },
            },
            too_long_names: {
              summary: 'Too long reference name(s)',
              value: { code: 3000, message: 'name cannot be longer than 30' },
            },
            too_long_values: {
              summary: 'Too long reference value(s)',
              value: { code: 3000, message: 'value cannot be longer than 30' },
            },
            wrong_size: {
              summary: 'Too many references',
              value: { code: 3000, message: 'references size must be not greater than 5' },
            },
            invalid_json: {
              summary: 'Incorrect request format',
              value: { code: 3000, message: 'Cannot parse request: invalid JSON' },
            },
            invalid_id: CardErrorBadIdExample,
          },
        },
      },
    },
    404: {
      description:
        'Card not found\n\nThe card for which you wish to update references does not exist.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 1214, message: 'Card not found' },
        },
      },
    },
    422: {
      description:
        'Unprocessable Content\n\nReturned, for example, when you try to amend references more than 10 times, or when you try to add them to a card that does not support references, like a card with a `holder_id` present.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            update_limit_exceeded: {
              summary: 'References can be amended up to 10 times',
              value: { code: 3549, message: 'Card references update limit exceeded' },
            },
            unsupported_card: {
              summary: "References can't be assigned to cards with holder_id",
              value: {
                code: 33012,
                message:
                  'Card references are not supported for the card=a5c697d1-84ae-40b2-879a-a17aab3362bb',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const postCardsCardIdFreezeRoute = createRoute({
  method: 'post',
  path: '/cards/{card_id}/freeze',
  tags: ['Cards'],
  summary: 'Freeze a card',
  description:
    "Freeze a card to make it temporarily unavailable for spending.\nYou can only freeze a card that is in the state `active`.\n\nA successful freeze changes the card's state to `frozen`, and no content is returned in the response.\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\nFor more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).",
  operationId: 'freezeCard',
  request: {
    params: z.object({
      card_id: z
        .uuid()
        .openapi({
          param: {
            name: 'card_id',
            in: 'path',
            required: true,
            description: 'The ID of the card to freeze.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Card successfully frozen' },
    400: {
      description:
        'Bad request\n\nReturned, for example, when you provide an invalid card ID in the path.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_id: CardErrorBadIdExample },
        },
      },
    },
    403: {
      description: "State of the card doesn't allow to freeze it",
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 9002, message: 'Card is locked' },
        },
      },
    },
    404: {
      description: "Card doesn't exist",
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 1214, message: 'Card not found' },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const postCardsCardIdUnfreezeRoute = createRoute({
  method: 'post',
  path: '/cards/{card_id}/unfreeze',
  tags: ['Cards'],
  summary: 'Unfreeze a card',
  description:
    "Unfreeze a card to re-enable spending for that card.\nYou can only unfreeze a card that is in the state `frozen`.\n\nA successful unfreeze changes the card's state back to `active`, and no content is returned in the response.\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\nFor more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).",
  operationId: 'unfreezeCard',
  request: {
    params: z.object({
      card_id: z
        .uuid()
        .openapi({
          param: {
            name: 'card_id',
            in: 'path',
            required: true,
            description: 'The ID of the card to unfreeze.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Card successfully unfrozen' },
    400: {
      description:
        'Bad request\n\nReturned, for example, when you provide an invalid card ID in the path.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_id: CardErrorBadIdExample },
        },
      },
    },
    403: {
      description: "State of the card doesn't allow to unfreeze it",
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 9002, message: 'Card is locked' },
        },
      },
    },
    404: {
      description: "Card doesn't exist",
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 1214, message: 'Card not found' },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const postCardsCardIdLockRoute = createRoute({
  method: 'post',
  path: '/cards/{card_id}/lock',
  tags: ['Cards'],
  summary: 'Lock a card',
  description:
    "Apply an admin lock to a card to make it temporarily unavailable for spending.\n\nA successful lock changes the card's state to `locked`, and no content is returned in the response.\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\nFor more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).",
  operationId: 'lockCard',
  request: {
    params: z.object({
      card_id: z
        .uuid()
        .openapi({
          param: {
            name: 'card_id',
            in: 'path',
            required: true,
            description: 'The ID of the card to lock.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Card successfully locked' },
    400: {
      description:
        'Bad request\n\nReturned, for example, when you provide an invalid card ID in the path.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_id: CardErrorBadIdExample },
        },
      },
    },
    403: {
      description:
        'Action forbidden\n\nReturned, for example, when the request is valid, but the provided access token does not include the required scope for this action.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 9002, message: 'This action is forbidden' },
        },
      },
    },
    404: {
      description: "Card doesn't exist",
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 1214, message: 'Card not found' },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const postCardsCardIdUnlockRoute = createRoute({
  method: 'post',
  path: '/cards/{card_id}/unlock',
  tags: ['Cards'],
  summary: 'Unlock a card',
  description:
    "Unlock a card locked with an admin lock or spending period settings to make it available for spending again.\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\n:::warning\nIf a card has a `spending_period` set and is locked due to being outside of that period, unlocking the card removes this spending period completely, including the end date.\n\nIf you want to unlock such a card but keep its spending period end date:\n1. [Fetch](https://developer.revolut.com/docs/api/business#get-card) the card's details.\n2. Save the `spending_period.end_date` and `spending_period.end_date_action` settings.\n3. [Unlock](https://developer.revolut.com/docs/api/business#unlock-card) the card.\n4. [Update](https://developer.revolut.com/docs/api/business#update-card) the card's `spending_period` by re-adding the saved settings.\n\n:::tip\nIf both start and end dates for the spending period are provided, and the card is locked due to those dates, to unlock such a card, [update](https://developer.revolut.com/docs/api/business#update-card) its `spending_period` settings instead.\n:::\n\nA successful unlock changes the card's state to `active`, and no content is returned in the response.\n\nFor more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).",
  operationId: 'unlockCard',
  request: {
    params: z.object({
      card_id: z
        .uuid()
        .openapi({
          param: {
            name: 'card_id',
            in: 'path',
            required: true,
            description: 'The ID of the card to unlock.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Card successfully unlocked' },
    400: {
      description:
        'Bad request\n\nReturned, for example, when you provide an invalid card ID in the path.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_id: CardErrorBadIdExample },
        },
      },
    },
    403: {
      description:
        'Action forbidden\n\nReturned, for example, when the request is valid, but the provided access token does not include the required scope for this action.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 9002, message: 'This action is forbidden' },
        },
      },
    },
    404: {
      description: "Card doesn't exist",
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 1214, message: 'Card not found' },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getCardsCardIdSensitiveDetailsRoute = createRoute({
  method: 'get',
  path: '/cards/{card_id}/sensitive-details',
  tags: ['Cards'],
  summary: 'Retrieve sensitive card details',
  description:
    "Get sensitive details of a specific card, based on its ID.\n\nRequires the `READ_SENSITIVE_CARD_DATA` token scope. For more information, see the **Authorization** section.\n\n:::note\nTo increase your account's card limits, please contact [Revolut API Support](mailto:api-requests@revolut.com).\n:::\n\nFor more information, see the guides: [Manage cards](https://developer.revolut.com/docs/guides/manage-accounts/cards/manage-cards).",
  operationId: 'getSensitiveCardDetails',
  request: {
    params: z.object({
      card_id: z
        .uuid()
        .openapi({
          param: {
            name: 'card_id',
            in: 'path',
            required: true,
            description: 'The ID of the card for which to retrieve the sensitive details.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Sensitive details of the card',
      content: {
        'application/json': {
          schema: z
            .object({
              pan: z
                .string()
                .openapi({ description: 'The PAN (Primary Account Number) of the card.' }),
              cvv: z
                .string()
                .openapi({ description: 'The CVV (Card Verification Value) of the card.' }),
              expiry: z
                .string()
                .regex(/^[0-9]{2}\/[0-9]{4}$/)
                .openapi({ description: 'The card expiration date.' }),
            })
            .openapi({ required: ['pan', 'cvv', 'expiry'] }),
          example: { pan: '4111111111111111', cvv: '123', expiry: '06/2030' },
        },
      },
    },
    400: {
      description:
        'Bad request\n\nReturned, for example, when you provide an invalid card ID in the path.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: { invalid_id: CardErrorBadIdExample },
        },
      },
    },
    403: {
      description: 'Action forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 9002, message: 'This action is forbidden' },
        },
      },
    },
    404: {
      description: "Card doesn't exist",
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 1214, message: 'Card not found' },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ_SENSITIVE_CARD_DATA'] }],
})

export const getCounterpartiesRoute = createRoute({
  method: 'get',
  path: '/counterparties',
  tags: ['Counterparties'],
  summary: 'Retrieve a list of counterparties',
  description:
    'Get all the counterparties that you have created, or use the query parameters to filter the results. \n\nThe counterparties are sorted by the `created_at` date in reverse chronological order.\n\nThe returned counterparties are **paginated**. \nThe maximum number of counterparties returned per page is specified by the `limit` parameter.\nTo get to the next page, make a new request and use the `created_at` date of the last counterparty returned in the previous response.\n\nFor more information, see the guides: [Retrieve counterparties](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/retrieve-counterparties).',
  operationId: 'getCounterparties',
  request: {
    query: z.object({
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            description:
              'The name of the counterparty to retrieve. It does not need to be an exact match, partial match is also supported. \n\n:::note\nSpecial characters must be properly URL-encoded.\n:::',
            required: false,
          },
        }),
      account_no: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'account_no',
            schema: { type: 'string' },
            description: 'The exact account number of the counterparty to retrieve.',
            required: false,
          },
        }),
      sort_code: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'sort_code',
            schema: { type: 'string' },
            description:
              'The exact sort code of the counterparty to retrieve. \nOnly allowed in combination with the `account_no` parameter.',
            required: false,
          },
        }),
      iban: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'iban',
            schema: { type: 'string' },
            description: 'The exact IBAN of the counterparty to retrieve.',
            required: false,
          },
        }),
      bic: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'bic',
            schema: { type: 'string' },
            description:
              'The exact BIC of the counterparty to retrieve. \nOnly allowed in combination with the `iban` parameter.',
            required: false,
          },
        }),
      created_before: z.iso
        .datetime({ offset: true })
        .default('the date-time at which the request is made')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'created_before',
            schema: {
              type: 'string',
              format: 'date-time',
              default: 'the date-time at which the request is made',
            },
            description:
              'Retrieves counterparties with `created_at` < `created_before`.\nThe default value is the current date and time at which you are calling the endpoint. \n\nProvide it in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { type: 'integer', minimum: 1, maximum: 1000, default: 100 },
            description:
              'The maximum number of counterparties returned per page.\n\nTo get to the next page, make a new request and use the `created_at` date of the last counterparty returned in the previous response as the value for `created_before`.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of your counterparties',
      content: {
        'application/json': {
          schema: CounterpartiesSchema,
          examples: {
            all_counterparties: {
              summary: 'A list of your counterparties',
              value: [
                {
                  id: '239d6f1f-2222-4ae6-1111-5cc603341b4e',
                  name: 'Jane Doe Co.',
                  profile_type: 'business',
                  state: 'created',
                  created_at: '2022-09-14T14:47:12.273718Z',
                  updated_at: '2022-09-14T14:47:12.273718Z',
                  accounts: [
                    {
                      iban: 'GB66REVO00996995908786',
                      bic: 'REVOGB21',
                      id: 'b209281b-aakk-9911-8d83-ac72469cef8f',
                      name: 'Jane Doe Co.',
                      bank_country: 'GB',
                      currency: 'EUR',
                      type: 'external',
                      address: {
                        street_line1: 'Revolut LTD',
                        street_line2: '1 Canada Square',
                        region: 'Greater London',
                        city: 'London',
                        country: 'GB',
                        postcode: 'E14 5AB',
                      },
                    },
                  ],
                },
                {
                  id: '8e0e9886-0af1-4b0c-acf4-111180d2892b',
                  name: 'John Smith',
                  revtag: 'johnsmith',
                  profile_type: 'personal',
                  country: 'GB',
                  state: 'created',
                  created_at: '2022-09-14T14:41:39.312017Z',
                  updated_at: '2022-09-14T14:41:39.312017Z',
                },
                {
                  id: '11cae5ef-ec24-401d-98a3-e5baa0041671',
                  name: 'John Smith Co.',
                  revtag: 'jsmithco1',
                  profile_type: 'business',
                  country: 'GB',
                  state: 'created',
                  created_at: '2025-09-16T09:34:41.790401Z',
                  updated_at: '2025-09-16T09:34:41.790401Z',
                  accounts: [
                    {
                      id: 'ad3c3b03-611e-461e-99b2-572f4785e44b',
                      name: 'Main GBP',
                      currency: 'GBP',
                      type: 'revolut',
                    },
                    {
                      id: '67fe3eaa-c994-40c0-b3e0-7b6bfe0cedca',
                      name: 'Main EUR',
                      currency: 'EUR',
                      type: 'revolut',
                    },
                  ],
                },
                {
                  id: 'e7e36cce-2e9c-4e96-818e-1c2fed325852',
                  name: 'John Doe Co.',
                  profile_type: 'business',
                  state: 'created',
                  created_at: '2022-08-14T14:34:11.168340Z',
                  updated_at: '2022-08-14T14:34:11.168340Z',
                  accounts: [
                    {
                      account_no: '12345674',
                      sort_code: '540107',
                      id: 'e277b2bd-3a6d-423b-933d-3d425094bb13',
                      name: 'John Doe Co.',
                      bank_country: 'GB',
                      currency: 'GBP',
                      type: 'external',
                      address: {
                        street_line1: "7 King's Road",
                        region: 'Greater London',
                        city: 'London',
                        country: 'GB',
                        postcode: 'SW3 4PQ',
                      },
                    },
                  ],
                },
                {
                  id: '239d6f1f-2222-4ae6-1111-5cc603341b4e',
                  name: 'Bleu Blanc Conseil SARL',
                  profile_type: 'business',
                  state: 'created',
                  created_at: '2022-09-14T14:47:12.273718Z',
                  updated_at: '2022-09-14T14:47:12.273718Z',
                  accounts: [
                    {
                      iban: 'FR1420041010050500013M02606',
                      bic: 'PSSTFRPPLIL',
                      id: 'b209281b-aakk-9911-8d83-ac72469cef8f',
                      name: 'Bleu Blanc Conseil SARL',
                      bank_country: 'FR',
                      currency: 'EUR',
                      type: 'external',
                      address: {
                        street_line1: '12 Rue de la Paix',
                        city: 'Paris',
                        country: 'FR',
                        postcode: '75002',
                      },
                    },
                  ],
                },
                {
                  id: 'b8ce3922-d518-4ae6-9426-e8cc117e5332',
                  name: 'Johann Meier Co.',
                  profile_type: 'business',
                  state: 'created',
                  created_at: '2023-08-10T12:43:20.273500Z',
                  updated_at: '2026-01-30T12:43:20.273500Z',
                  accounts: [
                    {
                      iban: 'CH9300762011623852957',
                      bic: 'UBSWCHZH80A',
                      id: 'd95bc455-f495-4f18-95fa-32f99479318c',
                      name: 'Johann Meier Co.',
                      bank_country: 'CH',
                      currency: 'EUR',
                      type: 'external',
                      address: {
                        street_line1: 'Bahnhofstrasse 10',
                        city: 'Zurich',
                        country: 'CH',
                        postcode: '8001',
                      },
                    },
                  ],
                },
                {
                  id: '173e6a6b-d955-465f-8f31-7f6f7c03927c',
                  name: 'Edelweiss Handel GmbH',
                  profile_type: 'business',
                  state: 'created',
                  created_at: '2023-08-10T12:43:20.273500Z',
                  updated_at: '2026-01-32T10:54:03.350240Z',
                  accounts: [
                    {
                      iban: 'CH5604835012345678009',
                      bic: 'UBSWCHZH80A',
                      id: 'b3cc43e8-f141-459b-9bd5-3505cf9797f8',
                      name: 'Edelweiss Handel GmbH',
                      bank_country: 'CH',
                      currency: 'CHF',
                      type: 'external',
                      address: {
                        street_line1: 'Marktgasse 22',
                        city: 'Bern',
                        country: 'CH',
                        postcode: '3011',
                      },
                    },
                  ],
                },
                {
                  id: '1d9013c8-84bf-474c-b3d9-690f2ae2e65c',
                  name: 'Jane Doe',
                  state: 'created',
                  created_at: '2024-01-10T15:32:10.172300Z',
                  updated_at: '2024-01-10T15:32:10.172300Z',
                  cards: [
                    {
                      id: '0130f363-eeaf-4aa8-b77f-a6a629c603f5',
                      name: 'Jane Doe',
                      last_digits: 1234,
                      scheme: 'visa',
                      country: 'GB',
                      currency: 'GBP',
                    },
                    {
                      id: 'fa05f2e5-d253-4661-85cc-bcff98b136ac',
                      name: 'Jane Doe',
                      last_digits: 5678,
                      scheme: 'mastercard',
                      country: 'GB',
                      currency: 'GBP',
                    },
                  ],
                },
              ],
            },
            no_search_results: { summary: 'No matching search results', value: [] },
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            bad_limit: {
              summary: 'Bad limit',
              value: { message: 'limit must be between 1 and 1000', code: 2101 },
            },
            bic_only_allowed_with_iban: {
              summary: 'BIC can be used only in combination with IBAN',
              value: { message: 'bic param can be used only combined with iban param', code: 2101 },
            },
            sort_code_only_allowed_with_account_no: {
              summary: 'Sort code can be used only in combination with account number',
              value: {
                message: 'sort_code param can be used only combined with account_no param',
                code: 2101,
              },
            },
            invalid_timestamp: {
              summary: 'Invalid timestamp',
              value: { message: 'Parameter created_before must be a valid timestamp', code: 2101 },
            },
          },
        },
      },
    },
    401: {
      description: 'Anauthorized',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'The request should be authorized.' },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const postCounterpartyRoute = createRoute({
  method: 'post',
  path: '/counterparty',
  tags: ['Counterparties'],
  summary: 'Create a counterparty',
  description:
    "Create a new counterparty to transact with.\n\n### Revtags in Sandbox\n\nIn the Sandbox environment, you cannot add real people and businesses as Revolut counterparties.\nTo help you simulate adding counterparties using Revtag, we created some test accounts of profile type `personal` that you can use.\n\n<details id='test-accounts-for-sandbox'>\n  <summary> \n  <b>Test accounts for Sandbox</b>\n  </summary>\n\n  To add a counterparty via Revtag, use one of these pairs for the `name` and `revtag` fields respectively:\n  - `Test User 1` & `john1pvki`\n  - `Test User 2` & `john2pvki`\n  -    ...\n  - `Test User 9` & `john9pvki`\n\n</details>\n\n### Address field recommendations\n\nSome payment rails may have stricter requirements regarding the `address` field – for example, by also requiring the `region` field.  \nThis is why we recommend that you use **all** available address fields (including `street_line1`, `region` and `city`) when creating a counterparty.\n\nThis significantly reduces the risk of any disruption to payments made via the API.\n\n### Multiple counterparties with the same details\n\nYou cannot create multiple counterparties with the same Revtag.\nThis restriction does not apply to other details. \nFor example:\n- **Revtag**: If you've already added `johnsmith` as a Revolut counterparty, you can't add another counterparty with the `johnsmith` Revtag.\n  If you try to do so, you'll get an error.\n- **Other details**: If you've added John Smith as an individual UK counterparty using GBP with `sort_code=54-01-05` and `account_no=12345678`, you can still use the same details to create another counterparty.\n\n### Counterparty name\n\nWhen creating a counterparty, ensure that you use the correct field to define the counterparty's name.\n\n<table>\n  <thead>\n    <tr>\n      <th rowSpan=\"2\"> Counterparty type</th>\n      <th colSpan=\"2\">Name field to use when added with:</th>\n    </tr>\n    <tr>\n      <th>Revtag</th>\n      <th>Other details</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <th>Individual</th>\n      <td><code>name</code> (string)</td>\n      <td><code>individual_name</code> (<b>object</b> with string subfields for first and last name)</td>\n    </tr>\n    <tr>\n      <th>Company</th>\n      <td><code>name</code> (string)</td>\n      <td><code>company_name</code> (string)</td>\n    </tr>\n  </tbody>\n</table>\n\n---\n\nFor more information, see the guides: [Create a counterparty](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/create-a-counterparty).",
  operationId: 'addCounterparty',
  request: {
    body: {
      description: 'Counterparty to add',
      content: {
        'application/json': {
          schema: CreateCounterpartyRequestSchema,
          examples: {
            revolut_counterparty_individual: {
              summary: 'Revolut individual counterparty',
              value: { profile_type: 'personal', name: 'John Smith', revtag: 'johnsmith' },
            },
            revolut_counterparty_business: {
              summary: 'Revolut business counterparty',
              value: { profile_type: 'business', name: 'John Smith Co.', revtag: 'jsmithco1' },
            },
            uk_individual: {
              summary: 'UK individual counterparty',
              value: {
                individual_name: { first_name: 'John', last_name: 'Smith' },
                bank_country: 'GB',
                currency: 'GBP',
                sort_code: '54-01-05',
                account_no: '12345678',
              },
            },
            uk_individual_with_address: {
              summary: 'UK individual counterparty with address',
              value: {
                individual_name: { first_name: 'John', last_name: 'Smith' },
                bank_country: 'GB',
                currency: 'GBP',
                sort_code: '54-01-05',
                account_no: '12345678',
                address: {
                  city: 'London',
                  street_line1: '20 Upping St',
                  country: 'GB',
                  postcode: 'SW1A 2AB',
                },
              },
            },
            uk_business: {
              summary: 'UK business counterparty',
              value: {
                company_name: 'John Smith Co.',
                bank_country: 'GB',
                currency: 'GBP',
                sort_code: '54-01-05',
                account_no: '12345678',
              },
            },
            uk_business_with_address: {
              summary: 'UK business counterparty with address',
              value: {
                company_name: 'John Smith Co.',
                bank_country: 'GB',
                currency: 'GBP',
                sort_code: '54-01-05',
                account_no: '12345678',
                address: {
                  city: 'London',
                  street_line1: '20 Upping St',
                  country: 'GB',
                  postcode: 'SW1A 2AB',
                },
              },
            },
            international_business_eurozone: {
              summary: 'International business counterparty (eurozone with EUR)',
              value: {
                company_name: 'Bleu Blanc Conseil SARL',
                bank_country: 'FR',
                currency: 'EUR',
                iban: 'FR1420041010050500013M02606',
              },
            },
            international_business_ch_eur: {
              summary: 'International business counterparty (outside eurozone, with EUR)',
              value: {
                company_name: 'Johann Meier Co.',
                bank_country: 'CH',
                currency: 'EUR',
                iban: 'CH9300762011623852957',
              },
            },
            international_business_ch_chf: {
              summary: 'International business counterparty (outside eurozone, non-EUR)',
              value: {
                company_name: 'Edelweiss Handel GmbH',
                bank_country: 'CH',
                currency: 'CHF',
                iban: 'CH5604835012345678009',
                address: {
                  street_line1: 'Bahnhofstrasse 4a/8',
                  city: 'Zurich',
                  country: 'CH',
                  postcode: '8001',
                },
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
      description: 'Added counterparty',
      content: {
        'application/json': {
          schema: CounterpartySchema,
          examples: {
            revolut_counterparty_individual: {
              summary: 'Revolut individual counterparty',
              value: {
                id: '54ee57d7-1234-abcd-1234-0e1f79164d5e',
                name: 'John Smith',
                revtag: 'johnsmith',
                profile_type: 'personal',
                country: 'GB',
                state: 'created',
                created_at: '2023-07-26T09:34:41.790401Z',
                updated_at: '2023-07-26T09:34:41.790401Z',
              },
            },
            revolut_counterparty_business: {
              summary: 'Revolut business counterparty',
              value: {
                id: '11cae5ef-ec24-401d-98a3-e5baa0041671',
                name: 'John Smith Co.',
                revtag: 'jsmithco1',
                profile_type: 'business',
                country: 'GB',
                state: 'created',
                created_at: '2025-09-16T09:34:41.790401Z',
                updated_at: '2025-09-16T09:34:41.790401Z',
              },
            },
            uk_individual: {
              summary: 'UK individual counterparty',
              value: {
                id: '19dcf5a2-110f-43f7-9d5f-98aaf4b8f0d6',
                name: 'John Smith',
                profile_type: 'personal',
                state: 'created',
                created_at: '2023-03-13T09:34:41.790401Z',
                updated_at: '2023-03-13T09:34:41.790401Z',
                accounts: [
                  {
                    account_no: '12345678',
                    sort_code: '540105',
                    id: '6f45a49a-710c-4ef4-b42b-6c247c82af75',
                    name: 'John Doe',
                    bank_country: 'GB',
                    currency: 'GBP',
                    type: 'external',
                  },
                ],
              },
            },
            uk_business: {
              summary: 'UK business counterparty',
              value: {
                id: 'b53fdd78-8d67-4f63-a103-eeeeef53cac8',
                name: 'John Smith Co.',
                profile_type: 'business',
                state: 'created',
                created_at: '2022-09-14T14:34:11.168340Z',
                updated_at: '2022-09-14T14:34:11.168340Z',
                accounts: [
                  {
                    account_no: '12345678',
                    sort_code: '540105',
                    id: '5c9e171c-7e23-4d6a-b768-aaaaaba535f3',
                    name: 'John Smith Co.',
                    bank_country: 'GB',
                    currency: 'GBP',
                    type: 'external',
                  },
                ],
              },
            },
            international_business_eurozone: {
              summary: 'International business counterparty (eurozone with EUR)',
              value: {
                id: '239d6f1f-2222-4ae6-1111-5cc603341b4e',
                name: 'Bleu Blanc Conseil SARL',
                profile_type: 'business',
                state: 'created',
                created_at: '2022-09-14T14:47:12.273718Z',
                updated_at: '2022-09-14T14:47:12.273718Z',
                accounts: [
                  {
                    iban: 'FR1420041010050500013M02606',
                    bic: 'PSSTFRPPLIL',
                    id: 'b209281b-aakk-9911-8d83-ac72469cef8f',
                    name: 'Bleu Blanc Conseil SARL',
                    bank_country: 'FR',
                    currency: 'EUR',
                    type: 'external',
                  },
                ],
              },
            },
            international_business_ch_eur: {
              summary: 'International business counterparty (outside eurozone, with EUR)',
              value: {
                id: 'b8ce3922-d518-4ae6-9426-e8cc117e5332',
                name: 'Johann Meier Co.',
                profile_type: 'business',
                state: 'created',
                created_at: '2026-01-30T12:43:20.273500Z',
                updated_at: '2026-01-30T12:43:20.273500Z',
                accounts: [
                  {
                    iban: 'CH9300762011623852957',
                    bic: 'UBSWCHZH80A',
                    id: 'd95bc455-f495-4f18-95fa-32f99479318c',
                    name: 'Johann Meier Co.',
                    bank_country: 'CH',
                    currency: 'EUR',
                    type: 'external',
                  },
                ],
              },
            },
            international_business_ch_chf: {
              summary: 'International business counterparty (outside eurozone, non-EUR)',
              value: {
                id: '173e6a6b-d955-465f-8f31-7f6f7c03927c',
                name: 'Edelweiss Handel GmbH',
                profile_type: 'business',
                state: 'created',
                created_at: '2023-08-10T12:43:20.273500Z',
                updated_at: '2023-08-10T12:43:20.273500Z',
                accounts: [
                  {
                    iban: 'CH5604835012345678009',
                    bic: 'UBSWCHZH80A',
                    id: 'b3cc43e8-f141-459b-9bd5-3505cf9797f8',
                    name: 'Edelweiss Handel GmbH',
                    bank_country: 'CH',
                    currency: 'CHF',
                    type: 'external',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request\n\nReturned, for example, when the provided IBAN is invalid.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 3000, message: 'FR66995908786 is not a valid IBAN' },
        },
      },
    },
    404: {
      description:
        "Not Found\n\nReturned, for example, when the counterparty that you're trying to add doesn't exist, or when the name that you provide for the Revtag counterparty doesn't match the actual name on the account.",
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 3006, message: 'Resource not found' },
        },
      },
    },
    422: {
      description:
        "Unprocessable Content\n\nReturned, for example, when the Revolut counterparty that you're trying to add using Revtag already exists, or when the counterparty cannot be added.",
      content: {
        'application/json': {
          schema: CounterpartyErrorSchema,
          examples: {
            counterparty_exists: {
              summary: 'Counterparty already exists',
              value: {
                message: 'This counterparty already exists',
                code: 3012,
                params: { counterparty_id: '878029d4-5972-4424-ae8c-80fe5f59407b' },
              },
            },
            counterparty_cannot_be_added: {
              summary: 'Counterparty cannot be added',
              value: { message: "Recipient can't be added", code: 2101 },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ', 'WRITE'] }],
})

export const getCounterpartiesCountriesRoute = createRoute({
  method: 'get',
  path: '/counterparties/countries',
  tags: ['Counterparties'],
  summary: 'Check supported countries and currencies',
  description:
    'Retrieve all supported bank countries and their available currencies for counterparty creation.\n\n:::note [Note]\nThis feature is not available in Sandbox.\n:::\n\nUse this endpoint to discover which country and currency combinations are supported before checking field requirements with the [Check counterparty field requirements endpoint](https://developer.revolut.com/docs/api/business#get-counterparty-requirements).\n\nFor more details, see the guide: **Check supported counterparty countries and currencies** section in [Create a counterparty](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/create-a-counterparty#check-supported-counterparty-countries-and-currencies).',
  operationId: 'getCounterpartyCountries',
  responses: {
    200: {
      description: 'The list of supported bank countries and their available currencies',
      content: {
        'application/json': {
          schema: CounterpartyCountriesResponseSchema,
          example: {
            countries: [
              { country: 'GB', currencies: ['GBP'] },
              { country: 'US', currencies: ['USD'] },
              { country: 'DE', currencies: ['EUR'] },
            ],
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const getCounterpartiesFieldsRoute = createRoute({
  method: 'get',
  path: '/counterparties/fields',
  tags: ['Counterparties'],
  summary: 'Check counterparty field requirements',
  description:
    "Retrieve the list of conditionally required or applicable fields for creating a counterparty together with their constraints.\n\n:::note [Note]\nThis feature is not available in Sandbox.\n:::\n\nWhen creating a counterparty via the [Create a counterparty endpoint](https://developer.revolut.com/docs/api/business#add-counterparty), certain fields (such as `first_name`, `last_name`, `company_name`, `tax_id`, `route`, or `account_type`) become required depending on the counterparty's bank country, currency, and profile type.\nThis read-only endpoint allows you to discover these contextual fields dynamically, along with their validation rules and available options.\n\nOnly the fields relevant to the specific context are returned.\nThe input parameters (`country`, `currency`, and `recipient_type`) are intentionally excluded from the response.\n\nFor more details, see the guide: **Check counterparty field requirements** section in [Create a counterparty](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/create-a-counterparty#check-counterparty-field-requirements).",
  operationId: 'getCounterpartyRequirements',
  request: {
    query: z.object({
      country: BankCountryCodeSchema.openapi({
        param: {
          name: 'country',
          in: 'query',
          required: true,
          description: "The country where the counterparty's bank account is located.",
          schema: { $ref: '#/components/schemas/BankCountryCode' },
        },
      }),
      currency: CurrencySchema.openapi({
        param: {
          name: 'currency',
          in: 'query',
          required: true,
          description: "The currency of the counterparty's bank account.",
          schema: { $ref: '#/components/schemas/Currency' },
        },
      }),
      recipient_type: z
        .enum(['personal', 'business'])
        .openapi({
          param: {
            name: 'recipient_type',
            in: 'query',
            required: true,
            description:
              'The type of the counterparty profile.\nIndicates whether the counterparty is a personal or business account.',
            schema: { type: 'string', enum: ['personal', 'business'] },
          },
        }),
      route: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'route',
            in: 'query',
            required: false,
            description:
              'The routing method for the corridor. \nWhen omitted, the response includes fields for the default route.\nFor example, for USD to US, the default is `ach`.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The applicable and conditionally required fields for creating the counterparty',
      content: {
        'application/json': {
          schema: CounterpartyRequirementsResponseSchema,
          examples: {
            gb_counterparty: {
              summary: 'GB personal counterparty',
              value: {
                fields: [
                  {
                    name: 'first_name',
                    required: true,
                    regex: {
                      pattern: "^[-'\\p{L} ]{1,40}$",
                      description: 'Letters, hyphens and apostrophes only, up to 40 characters',
                    },
                  },
                  {
                    name: 'last_name',
                    required: true,
                    regex: {
                      pattern: "^[-'\\p{L} ]{1,40}$",
                      description: 'Letters, hyphens and apostrophes only, up to 40 characters',
                    },
                  },
                  {
                    name: 'sort_code',
                    required: true,
                    regex: { pattern: '^\\d{6}$', description: '6-digit number' },
                  },
                  {
                    name: 'account_no',
                    required: true,
                    regex: { pattern: '^\\d{8}$', description: '8-digit number' },
                  },
                  { name: 'address', required: true },
                ],
              },
            },
            us_counterparty: {
              summary: 'US business counterparty',
              value: {
                fields: [
                  {
                    name: 'company_name',
                    required: true,
                    regex: { pattern: '^.{1,140}$', description: 'Up to 140 characters' },
                  },
                  {
                    name: 'route',
                    required: true,
                    options: [{ value: 'ach', default: true }, { value: 'fedwire' }],
                  },
                  {
                    name: 'routing_number',
                    required: true,
                    regex: { pattern: '^\\d{9}$', description: '9-digit number' },
                  },
                  {
                    name: 'account_no',
                    required: true,
                    regex: { pattern: '^\\d{6,17}$', description: '6 to 17 digits' },
                  },
                  { name: 'address', required: true },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description:
        'Bad request\n\nFor example:\n- missing or invalid query parameters\n- unsupported recipient type for country/currency combination',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            invalid_request: {
              summary: 'Invalid request',
              value: {
                error_id: '40626b34-365b-43d0-b148-04dcbaeaf4df',
                code: 2101,
                message: 'Invalid request (missing or invalid query parameters)',
              },
            },
            unsupported_recipient: {
              summary: 'Unsupported recipient type',
              value: {
                error_id: '015c2e86-30a5-404b-aa25-b68c25d97e69',
                code: 3081,
                message: 'Recipient type is not supported for the given country and currency',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            not_found: {
              summary: 'Resource not found',
              value: {
                error_id: 'a29241ce-1f37-4ffb-8249-d09faec81aed',
                code: 3006,
                message: 'Resource not found',
              },
            },
          },
        },
      },
    },
    422: {
      description:
        'Unprocessable entity\n\nFor example:\n- currency not supported for the given country',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            unsupported_currency: {
              summary: 'Unsupported currency',
              value: {
                error_id: '2cd5330c-c4a9-45ce-88d3-8cbdaeba887c',
                code: 4030,
                message: 'Currency for country is not supported',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const getCounterpartyCounterpartyIdRoute = createRoute({
  method: 'get',
  path: '/counterparty/{counterparty_id}',
  tags: ['Counterparties'],
  summary: 'Retrieve a counterparty',
  description: 'Get the information about a specific counterparty by ID.',
  operationId: 'getCounterparty',
  request: {
    params: z.object({
      counterparty_id: z
        .uuid()
        .openapi({
          param: {
            name: 'counterparty_id',
            in: 'path',
            required: true,
            description: 'The ID of the counterparty to retrieve.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The information about a specific counterparty',
      content: {
        'application/json': {
          schema: CounterpartySchema,
          examples: {
            revolut_counterparty_individual: {
              summary: 'Revolut individual counterparty',
              value: {
                id: '8e0e9886-0af1-4b0c-acf4-111180d2892b',
                name: 'John Smith',
                revtag: 'johnsmith',
                profile_type: 'personal',
                country: 'GB',
                state: 'created',
                created_at: '2022-09-14T14:41:39.312017Z',
                updated_at: '2022-09-14T14:41:39.312017Z',
              },
            },
            revolut_counterparty_business: {
              summary: 'Revolut business counterparty',
              value: {
                id: '11cae5ef-ec24-401d-98a3-e5baa0041671',
                name: 'John Smith Co.',
                revtag: 'jsmithco1',
                profile_type: 'business',
                country: 'GB',
                state: 'created',
                created_at: '2025-09-16T09:34:41.790401Z',
                updated_at: '2025-09-16T09:34:41.790401Z',
              },
            },
            uk_counterparty: {
              summary: 'UK counterparty',
              value: {
                id: 'b53fdd78-8d67-4f63-a103-eeeeef53cac8',
                name: 'John Smith Co.',
                profile_type: 'business',
                state: 'created',
                created_at: '2022-09-14T14:34:11.168340Z',
                updated_at: '2022-09-14T14:34:11.168340Z',
                accounts: [
                  {
                    account_no: '12345678',
                    sort_code: '540105',
                    id: '5c9e171c-7e23-4d6a-b768-aaaaaba535f3',
                    name: 'John Smith Co.',
                    bank_country: 'GB',
                    currency: 'GBP',
                    type: 'external',
                    address: {
                      street_line1: 'Revolut LTD',
                      street_line2: '1 Canada Square',
                      region: 'Greater London',
                      city: 'London',
                      country: 'GB',
                      postcode: 'E14 5AB',
                    },
                  },
                ],
              },
            },
            international_business_eurozone: {
              summary: 'International business counterparty (eurozone with EUR)',
              value: {
                id: '239d6f1f-2222-4ae6-1111-5cc603341b4e',
                name: 'Bleu Blanc Conseil SARL',
                profile_type: 'business',
                state: 'created',
                created_at: '2022-09-14T14:47:12.273718Z',
                updated_at: '2022-09-14T14:47:12.273718Z',
                accounts: [
                  {
                    iban: 'FR1420041010050500013M02606',
                    bic: 'PSSTFRPPLIL',
                    id: 'b209281b-aakk-9911-8d83-ac72469cef8f',
                    name: 'Bleu Blanc Conseil SARL',
                    bank_country: 'FR',
                    currency: 'EUR',
                    type: 'external',
                    address: {
                      street_line1: '12 Rue de la Paix',
                      city: 'Paris',
                      country: 'FR',
                      postcode: '75002',
                    },
                  },
                ],
              },
            },
            international_business_ch_eur: {
              summary: 'International business counterparty (outside eurozone, with EUR)',
              value: {
                id: 'b8ce3922-d518-4ae6-9426-e8cc117e5332',
                name: 'Johann Meier Co.',
                profile_type: 'business',
                state: 'created',
                created_at: '2023-08-10T12:43:20.273500Z',
                updated_at: '2026-01-30T12:43:20.273500Z',
                accounts: [
                  {
                    iban: 'CH9300762011623852957',
                    bic: 'UBSWCHZH80A',
                    id: 'd95bc455-f495-4f18-95fa-32f99479318c',
                    name: 'Johann Meier Co.',
                    bank_country: 'CH',
                    currency: 'EUR',
                    type: 'external',
                    address: {
                      street_line1: 'Bahnhofstrasse 10',
                      city: 'Zurich',
                      country: 'CH',
                      postcode: '8001',
                    },
                  },
                ],
              },
            },
            international_business_ch_chf: {
              summary: 'International business counterparty (outside eurozone, non-EUR)',
              value: {
                id: '173e6a6b-d955-465f-8f31-7f6f7c03927c',
                name: 'Edelweiss Handel GmbH',
                profile_type: 'business',
                state: 'created',
                created_at: '2023-08-10T12:43:20.273500Z',
                updated_at: '2026-01-32T10:54:03.350240Z',
                accounts: [
                  {
                    iban: 'CH5604835012345678009',
                    bic: 'UBSWCHZH80A',
                    id: 'b3cc43e8-f141-459b-9bd5-3505cf9797f8',
                    name: 'Edelweiss Handel GmbH',
                    bank_country: 'CH',
                    currency: 'CHF',
                    type: 'external',
                    address: {
                      street_line1: 'Marktgasse 22',
                      city: 'Bern',
                      country: 'CH',
                      postcode: '3011',
                    },
                  },
                ],
              },
            },
            card_counterparty: {
              summary: 'Card counterparty',
              value: {
                id: '1d9013c8-84bf-474c-b3d9-690f2ae2e65c',
                name: 'Jane Doe',
                state: 'created',
                created_at: '2024-01-10T15:32:10.172300Z',
                updated_at: '2024-01-10T15:32:10.172300Z',
                cards: [
                  {
                    id: '0130f363-eeaf-4aa8-b77f-a6a629c603f5',
                    name: 'Jane Doe',
                    last_digits: 1234,
                    scheme: 'visa',
                    country: 'GB',
                    currency: 'GBP',
                  },
                  {
                    id: 'fa05f2e5-d253-4661-85cc-bcff98b136ac',
                    name: 'Jane Doe',
                    last_digits: 5678,
                    scheme: 'mastercard',
                    country: 'GB',
                    currency: 'GBP',
                  },
                ],
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const deleteCounterpartyCounterpartyIdRoute = createRoute({
  method: 'delete',
  path: '/counterparty/{counterparty_id}',
  tags: ['Counterparties'],
  summary: 'Delete a counterparty',
  description:
    'Delete a counterparty with the given ID. When a counterparty is deleted, you cannot make any payments to the counterparty.',
  operationId: 'deleteCounterparty',
  request: {
    params: z.object({
      counterparty_id: z
        .uuid()
        .openapi({
          param: {
            name: 'counterparty_id',
            in: 'path',
            required: true,
            description: 'The ID of the counterparty to delete.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The counterparty deleted' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ', 'WRITE'] }],
})

export const patchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdRoute = createRoute({
  method: 'patch',
  path: '/counterparties/{counterparty_id}/payment-methods/{payment_method_id}',
  tags: ['Counterparties'],
  summary: "Update a counterparty's payment method",
  description:
    "Update the **address** of a counterparty's payment method.\n\n:::tip [What is a payment method?]\nA payment method is an individual account or card linked to a counterparty. When you [retrieve a counterparty](https://developer.revolut.com/docs/api/business#get-counterparty), the response includes an `accounts` array and a `cards` array — each entry in these arrays is a payment method with its own `id`.\n:::\n\nAs only bank account payment methods have an address, you can use this endpoint to update the address of a counterparty's bank account.\n\nTo get the `payment_method_id` for the bank account, [retrieve the counterparty](https://developer.revolut.com/docs/api/business#get-counterparty) and use the `id` from the `accounts` array in the response.\n\nYou must provide the full address object — all required address fields must be present in the request.\nOmitted optional fields will retain their existing values.\n\nFor more information, see the guide: [Update a counterparty's payment method](https://developer.revolut.com/docs/guides/manage-accounts/counterparties/update-counterparty-payment-method).",
  operationId: 'updateCounterpartyPaymentMethod',
  request: {
    params: z.object({
      counterparty_id: z
        .uuid()
        .openapi({
          param: {
            name: 'counterparty_id',
            in: 'path',
            required: true,
            description: 'The ID of the counterparty.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      payment_method_id: z
        .uuid()
        .openapi({
          param: {
            name: 'payment_method_id',
            in: 'path',
            required: true,
            description:
              'The ID of the payment method to update. To get the `payment_method_id` for the bank account, [retrieve the counterparty](https://developer.revolut.com/docs/api/business#get-counterparty) and use the `id` from the `accounts` array in the response.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      description: 'The updated address details.',
      content: {
        'application/json': {
          schema: UpdateCounterpartyPaymentMethodRequestSchema,
          examples: {
            update_address: {
              summary: "Update a counterparty's address",
              value: {
                address: {
                  country: 'GB',
                  street_line1: '7 Revolut Street',
                  street_line2: 'Floor 3',
                  city: 'London',
                  postcode: 'EC2V 8PH',
                },
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'The address was updated' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getRateRoute = createRoute({
  method: 'get',
  path: '/rate',
  tags: ['Foreign exchange'],
  summary: 'Get an exchange rate',
  description:
    'Get the sell exchange rate between two currencies.\n\nYou can check the [currencies supported in Production](https://help.revolut.com/business/help/receiving-payments/currency-exchanges/which-currencies-can-i-exchange-and-keep-in-my-account/) in the Revolut Help Centre.\nSome of these currencies might not be available in Sandbox.\n\nFor more information, see the guides: [Exchange money](https://developer.revolut.com/docs/guides/manage-accounts/exchange-money).',
  operationId: 'getRate',
  request: {
    query: z.object({
      from: CurrencySchema.openapi({
        param: {
          name: 'from',
          in: 'query',
          required: true,
          description:
            'The currency that you exchange from in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format.',
          schema: { $ref: '#/components/schemas/Currency' },
        },
      }),
      amount: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float64(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            name: 'amount',
            in: 'query',
            required: false,
            description:
              'The amount of the currency to exchange **from**. The default value is `1.00`.',
            schema: { type: 'number', format: 'double', default: '1.00' },
          },
        }),
      to: CurrencySchema.openapi({
        param: {
          name: 'to',
          in: 'query',
          required: true,
          description:
            'The currency that you exchange to in [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) format.',
          schema: { $ref: '#/components/schemas/Currency' },
        },
      }),
    }),
  },
  responses: {
    200: {
      description: 'The exchange rate information',
      content: {
        'application/json': {
          schema: ExchangeRateResponseSchema,
          example: {
            from: { amount: 1, currency: 'EUR' },
            to: { amount: 1, currency: 'USD' },
            rate: 1.0044090351,
            fee: { amount: 0, currency: 'EUR' },
            rate_date: '2022-08-31T17:30:34Z',
          },
        },
      },
    },
    404: {
      description: 'Not found\n\nReturned, for example, when the exchange rate is unknown',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'Exchange rate unknown', code: 3472 },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const postExchangeRoute = createRoute({
  method: 'post',
  path: '/exchange',
  tags: ['Foreign exchange'],
  summary: 'Exchange money',
  description:
    'Exchange money using one of these methods: \n\n- **Sell currency**: You know the amount of currency to sell. \n  For example, you want to exchange 135.5 USD to some EUR. \n\n  Specify the amount in the `from` object.\n- **Buy currency**: You know the amount of currency to buy. \n  For example, you want to exchange some USD to 200 EUR. \n\n  Specify the amount in the `to` object.\n\n:::note\nYou must specify the `amount` field only once, either in the `from` object or in the `to` object.\n:::\n\nYou can check the [currencies supported in Production](https://help.revolut.com/business/help/receiving-payments/currency-exchanges/which-currencies-can-i-exchange-and-keep-in-my-account/) in the Revolut Help Centre.\nSome of these currencies might not be available in Sandbox.\n\nFor more information, see the guides: [Exchange money](https://developer.revolut.com/docs/guides/manage-accounts/exchange-money).',
  operationId: 'exchangeMoney',
  request: {
    body: {
      description: 'Specify the exchange information',
      content: {
        'application/json': {
          schema: ExchangeRequestSchema,
          examples: {
            sell: {
              summary: 'Sell',
              value: {
                from: {
                  account_id: 'af98333c-ea53-482b-93c2-1fa5e4eae671',
                  currency: 'USD',
                  amount: 135.5,
                },
                to: { account_id: 'b7ec67d3-5af1-42c8-bece-3d285774894d', currency: 'EUR' },
                reference: 'exchange',
                request_id: 'A1pH4num3ric2',
              },
            },
            buy: {
              summary: 'Buy',
              value: {
                from: { account_id: 'af98333c-ea53-482b-93c2-1fa5e4eae671', currency: 'USD' },
                to: {
                  account_id: 'b7ec67d3-5af1-42c8-bece-3d285774894d',
                  currency: 'EUR',
                  amount: 200,
                },
                reference: 'exchange',
                request_id: 'A1pH4num3ric2',
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
      description: 'Exchange operation details',
      content: {
        'application/json': {
          schema: ExchangeResponseSchema,
          example: {
            id: '630f9c2e-2e74-a06d-ab61-deb7ggkkd6cb',
            state: 'completed',
            created_at: '2022-08-31T17:36:46.656876Z',
            completed_at: '2022-08-31T17:36:46.657239Z',
          },
        },
      },
    },
    400: {
      description: 'Bad request\n\nFor example, the exchange reason is required.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { code: 3448, message: 'Exchange reason is required' },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ', 'PAY'] }],
})

export const getExchangeReasonsRoute = createRoute({
  method: 'get',
  path: '/exchange-reasons',
  tags: ['Foreign exchange', 'Transfers'],
  summary: 'Get exchange reasons',
  description:
    'Depending on the country and the amount of funds to be exchanged, you might be required to provide an exchange reason. \nWith this endpoint, you can retrieve all exchange reasons available to your business account.\n\nAfter you retrieve the results, use the appropriate reason code in the `exchange_reason_code` field when [exchanging money](https://developer.revolut.com/docs/api/business#exchange-money) or [making a payment](https://developer.revolut.com/docs/api/business#create-payment) that involves foreign currency exchange.',
  operationId: 'getExchangeReasons',
  responses: {
    200: {
      description: 'List of exchange reasons',
      content: {
        'application/json': {
          schema: ExchangeReasonsSchema,
          example: [
            { code: 'business_expense_and_claims', name: 'Business expense and claims' },
            { code: 'fees_and_charges', name: 'Fees and charges' },
            {
              code: 'fund_transfer_and_intracompany_payment',
              name: 'Fund transfer and intracompany payment',
            },
            { code: 'gifts_and_donations', name: 'Gifts and donations' },
            { code: 'government_services_and_tax', name: 'Government services and tax' },
            { code: 'insurance', name: 'Insurance' },
            { code: 'inventory', name: 'Inventory' },
            { code: 'investment_dividend_and_interest', name: 'Investment, dividend and interest' },
            { code: 'loan_and_loan_repayment', name: 'Loan and loan repayment' },
            { code: 'marketing', name: 'Marketing' },
            { code: 'payment_for_goods_and_services', name: 'Payment for goods and services' },
            { code: 'payroll', name: 'Payroll' },
            { code: 'refund', name: 'Refund' },
            { code: 'rental_and_property', name: 'Rental and property' },
            { code: 'sales', name: 'Sales' },
            { code: 'service_provider_and_software', name: 'Service provider and software' },
            { code: 'travel_and_transportation', name: 'Travel and transportation' },
            { code: 'utilities', name: 'Utilities' },
          ],
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const getExpensesRoute = createRoute({
  method: 'get',
  path: '/expenses',
  tags: ['Expenses'],
  summary: 'Retrieve a list of expenses',
  description:
    "Get all your expenses, or use the query parameters to filter the results.\n\nThe expenses are sorted by the `expense_date` value in reverse chronological order, and they're **paginated**.\nThe maximum number of expenses returned per page is specified by the `count` parameter.\nTo get the next page of results, make a new request and use the `expense_date` value from the last item of the previous page as the value for the `to` parameter.\n\nThe data enriched by the user, for example, VAT and cost centre, is returned under `splits[].tax_rate` and `splits[].labels`, respectively.\n\n:::note\n- The API returns a maximum of 500 expenses per request.\n- This feature is not available in Sandbox.\n:::\n\nFor more information, see the guides: [Retrieve expenses and receipts](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-expenses).",
  operationId: 'getExpenses',
  request: {
    query: z.object({
      from: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'from',
            description:
              'The date and time to retrieve the expenses from, including this date-time.\nCorresponds to the value of `expense_date`.\nProvided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.\n\nUsed also for pagination.\nTo get back to the previous page of results, make a new request and use the `expense_date` value from the first item of the current page as the value for the `from` parameter.',
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      to: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'to',
            description:
              "The date and time to retrieve the expenses to, excluding this date-time.\nCorresponds to the value of `expense_date`.\nProvided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.\nThe default value is the date and time at which you're calling the endpoint.\n\nUsed also for pagination.\nTo get back to the next page of results, make a new request and use the `expense_date` value from the last item of the previous (current) page as the value for the `to` parameter.",
            schema: { type: 'string', format: 'date-time' },
            required: false,
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'count',
            description:
              'The maximum number of the expenses to retrieve per page.\nTo get the next page of results, make a new request and use the `expense_date` value from the last item of the previous page as the value for the `to` parameter.',
            schema: { type: 'integer', default: 100, maximum: 500, minimum: 1 },
            required: false,
          },
        }),
      state: z
        .enum([
          'missing_info',
          'awaiting_review',
          'reverted',
          'pending_reimbursement',
          'refund_requested',
          'refunded',
          'approved',
          'rejected',
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'state',
            description: 'Retrieves the expenses in the specified state.',
            schema: {
              type: 'string',
              enum: [
                'missing_info',
                'awaiting_review',
                'reverted',
                'pending_reimbursement',
                'refund_requested',
                'refunded',
                'approved',
                'rejected',
              ],
            },
            required: false,
          },
        }),
      transaction_type: z
        .enum([
          'atm',
          'card_payment',
          'fee',
          'transfer',
          'external',
          'mileage_reimbursement',
          'rev_payment',
        ])
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'transaction_type',
            description:
              'The type of the transaction related to the expense.\nIf provided, only expenses with transactions of this type are returned.',
            schema: {
              type: 'string',
              enum: [
                'atm',
                'card_payment',
                'fee',
                'transfer',
                'external',
                'mileage_reimbursement',
                'rev_payment',
              ],
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of expenses',
      content: {
        'application/json': {
          schema: ExpensesSchema,
          example: [
            {
              id: '8decf9f8-053e-46cb-92d8-a7b450fe5ae0',
              state: 'approved',
              transaction_type: 'card_payment',
              description: 'Printer paper',
              submitted_at: '2024-09-13T20:48:40.912Z',
              completed_at: '2024-09-13T20:48:40.948Z',
              payer: 'Ray Trenfield',
              merchant: 'Best Printers Company',
              transaction_id: '163e0ef6-2414-4fcf-846f-1f871059d506',
              expense_date: '2024-09-13T18:47:01.782Z',
              splits: [
                {
                  amount: { amount: 15.39, currency: 'GBP' },
                  category: {
                    id: '71b9ec74-d5ff-4aa1-a489-f8dc39d4c9b7',
                    name: 'Printing & Stationery',
                    code: '461',
                  },
                  labels: { 'Office supplies': ['photocopying'], Department: ['HR'] },
                  tax_rate: {
                    id: '5704fdd2-bac2-42ec-bab0-e075182260be',
                    name: 'VAT',
                    percentage: 20,
                  },
                },
                {
                  amount: { amount: 8.99, currency: 'GBP' },
                  category: {
                    id: 'a5532a5e-d859-4795-967b-14723f8920ea',
                    name: 'Electronics',
                    code: '573',
                  },
                  labels: { 'Office supplies': ['photocopying'], Department: ['HR'] },
                  tax_rate: {
                    id: 'd92efe31-fc26-4364-af4b-3630c1057ece',
                    name: 'No VAT',
                    percentage: 0,
                  },
                },
              ],
              labels: { 'Office supplies': ['photocopying'], Department: ['HR'] },
              receipt_ids: ['84c0169a-37f9-4bfa-ab1e-f2c81dbc34cf'],
              spent_amount: { amount: 24.38, currency: 'GBP' },
            },
            {
              id: '8498b232-28ba-4baf-b33d-22fb464e83c8',
              state: 'missing_info',
              transaction_type: 'fee',
              description: 'Expenses app charges',
              payer: 'Bingston Labs',
              transaction_id: '91b56d41-7b42-40e8-8970-0082cf965e6e',
              expense_date: '2024-09-04T13:39:18.606Z',
              splits: [
                {
                  amount: { amount: 17.68, currency: 'EUR' },
                  category: {
                    id: '95bf2a30-7284-4664-989a-1dcb51e2053a',
                    name: 'General Expenses',
                    code: '429',
                  },
                  labels: {},
                  tax_rate: {
                    id: '812f50e7-37b3-480b-a7c4-2ad08442f7cf',
                    name: '20% (VAT on Expenses)',
                    percentage: 20,
                  },
                },
              ],
              labels: {},
              receipt_ids: ['d97d062f-5aae-4a0c-b5f3-52ae134d384d'],
              spent_amount: { amount: 17.68, currency: 'EUR' },
            },
            {
              id: 'a0e0294e-0460-42f4-bd97-f969469f1afc',
              state: 'missing_info',
              transaction_type: 'mileage_reimbursement',
              payer: 'John Smith',
              expense_date: '2025-10-6T08:34:18.123Z',
              splits: [
                {
                  amount: { amount: 25.99, currency: 'EUR' },
                  category: {
                    id: 'dab86546-a442-464a-9bad-18a826542b03',
                    name: 'Vehicle Operating Expenses',
                  },
                  labels: {},
                  tax_rate: {
                    id: '728980d1-aa76-44f5-8902-53520160bfeb',
                    name: '20% Fuel bills',
                    percentage: 20,
                  },
                },
              ],
              labels: {},
              receipt_ids: [],
              spent_amount: { amount: 25.99, currency: 'EUR' },
            },
            {
              id: 'b6f4e0c2-8a3d-4e61-9c50-2f7a9b1c4d8e',
              state: 'approved',
              transaction_type: 'card_payment',
              description: 'Client visit - accommodation and dinner',
              submitted_at: '2025-11-14T19:02:11.224Z',
              completed_at: '2025-11-14T19:02:33.901Z',
              payer: 'Amara Okafor',
              merchant: 'Hotel do Cais',
              transaction_id: '7f3a2c9e-4b5d-4f2a-8c31-2d6e9b1a7f05',
              expense_date: '2025-11-13T21:47:01.782Z',
              splits: [
                {
                  amount: { amount: 45, currency: 'GBP' },
                  category: {
                    id: '2f76152a-2b14-4390-aa32-bbab02a1e98c',
                    name: 'Meals & Entertainment',
                    code: '500',
                  },
                  labels: { Hospitality: ['client visit'] },
                  tax_rate: {
                    id: '5704fdd2-bac2-42ec-bab0-e075182260be',
                    name: 'VAT',
                    percentage: 20,
                  },
                },
                {
                  amount: { amount: 210, currency: 'GBP' },
                  category: {
                    id: 'c729ea95-3ae7-4d21-91f7-1a69844175f2',
                    name: 'Travel & Lodging',
                    code: '460',
                  },
                  labels: { Hospitality: ['client visit'] },
                  tax_rate: {
                    id: 'd92efe31-fc26-4364-af4b-3630c1057ece',
                    name: 'No VAT',
                    percentage: 0,
                  },
                },
              ],
              labels: { Hospitality: ['client visit'] },
              receipt_ids: ['2d84c9fa-47b3-4a1e-b5f7-3c8a9d0e6f21'],
              spent_amount: { amount: 295.8, currency: 'EUR' },
            },
          ],
        },
      },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    403: {
      description:
        'Forbidden\n\nReturned, for example, when the Expenses API is disabled for the business that is trying to use it.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'Expenses API for business is disabled', code: 9002 },
        },
      },
    },
    422: {
      description:
        'Unprocessable content\n\nReturned, for example, when the Expenses feature (not just the API) is disabled for the business.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'Expenses feature is not enabled', code: 3470 },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const getExpensesExpenseIdRoute = createRoute({
  method: 'get',
  path: '/expenses/{expense_id}',
  tags: ['Expenses'],
  summary: 'Retrieve an expense',
  description:
    'Get the information about a specific expense by ID.\n\nThe data enriched by the user, for example, VAT and cost centre, is returned under `splits[].tax_rate` and `splits[].labels`, respectively.\n\n:::note\nThis feature is not available in Sandbox.\n:::\n\nFor more information, see the guides: [Retrieve expenses and receipts](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-expenses).',
  operationId: 'getExpense',
  request: {
    params: z.object({
      expense_id: z
        .uuid()
        .openapi({
          param: {
            name: 'expense_id',
            in: 'path',
            required: true,
            description: 'The ID of the expense to retrieve.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Expense',
      content: {
        'application/json': {
          schema: ExpenseSchema,
          examples: {
            expense_approved: {
              summary: 'Approved expense, with labels and multiple splits',
              value: {
                id: '8decf9f8-053e-46cb-92d8-a7b450fe5ae0',
                state: 'approved',
                transaction_type: 'card_payment',
                description: 'Printer paper',
                submitted_at: '2024-09-13T20:48:40.912Z',
                completed_at: '2024-09-13T20:48:40.948Z',
                payer: 'Ray Trenfield',
                merchant: 'Best Printers Company',
                transaction_id: '163e0ef6-2414-4fcf-846f-1f871059d506',
                expense_date: '2024-09-13T18:47:01.782Z',
                splits: [
                  {
                    amount: { amount: 15.39, currency: 'GBP' },
                    category: {
                      id: '71b9ec74-d5ff-4aa1-a489-f8dc39d4c9b7',
                      name: 'Printing & Stationery',
                      code: '461',
                    },
                    labels: { 'Office supplies': ['photocopying'], Department: ['HR'] },
                    tax_rate: {
                      id: '5704fdd2-bac2-42ec-bab0-e075182260be',
                      name: 'VAT',
                      percentage: 20,
                    },
                  },
                  {
                    amount: { amount: 8.99, currency: 'GBP' },
                    category: {
                      id: 'a5532a5e-d859-4795-967b-14723f8920ea',
                      name: 'Electronics',
                      code: '573',
                    },
                    labels: { 'Office supplies': ['photocopying'], Department: ['HR'] },
                    tax_rate: {
                      id: 'd92efe31-fc26-4364-af4b-3630c1057ece',
                      name: 'No VAT',
                      percentage: 0,
                    },
                  },
                ],
                labels: { 'Office supplies': ['photocopying'], Department: ['HR'] },
                receipt_ids: ['84c0169a-37f9-4bfa-ab1e-f2c81dbc34cf'],
                spent_amount: { amount: 24.38, currency: 'GBP' },
              },
            },
            expense_with_fx: {
              summary: 'Approved expense with FX, split amounts in GBP and spent amount in EUR',
              value: {
                id: 'b6f4e0c2-8a3d-4e61-9c50-2f7a9b1c4d8e',
                state: 'approved',
                transaction_type: 'card_payment',
                description: 'Client visit - accommodation and dinner',
                submitted_at: '2025-11-14T19:02:11.224Z',
                completed_at: '2025-11-14T19:02:33.901Z',
                payer: 'Amara Okafor',
                merchant: 'Hotel do Cais',
                transaction_id: '7f3a2c9e-4b5d-4f2a-8c31-2d6e9b1a7f05',
                expense_date: '2025-11-13T21:47:01.782Z',
                splits: [
                  {
                    amount: { amount: 45, currency: 'GBP' },
                    category: {
                      id: '2f76152a-2b14-4390-aa32-bbab02a1e98c',
                      name: 'Meals & Entertainment',
                      code: '500',
                    },
                    labels: { Hospitality: ['client visit'] },
                    tax_rate: {
                      id: '5704fdd2-bac2-42ec-bab0-e075182260be',
                      name: 'VAT',
                      percentage: 20,
                    },
                  },
                  {
                    amount: { amount: 210, currency: 'GBP' },
                    category: {
                      id: 'c729ea95-3ae7-4d21-91f7-1a69844175f2',
                      name: 'Travel & Lodging',
                      code: '460',
                    },
                    labels: { Hospitality: ['client visit'] },
                    tax_rate: {
                      id: 'd92efe31-fc26-4364-af4b-3630c1057ece',
                      name: 'No VAT',
                      percentage: 0,
                    },
                  },
                ],
                labels: { Hospitality: ['client visit'] },
                receipt_ids: ['2d84c9fa-47b3-4a1e-b5f7-3c8a9d0e6f21'],
                spent_amount: { amount: 295.8, currency: 'EUR' },
              },
            },
            expense_awaiting_review: {
              summary: 'Expense awaiting review, with external transaction',
              value: {
                id: '7ff44b9f-556b-4dce-8e39-4a667246f49f',
                state: 'awaiting_review',
                transaction_type: 'external',
                description: 'Snack',
                submitted_at: '2024-09-11T13:19:24.659Z',
                payer: 'Chima Aragonye',
                merchant: 'Go FroYo Co.',
                expense_date: '2024-01-21T00:00:00Z',
                splits: [
                  {
                    amount: { amount: 5, currency: 'GBP' },
                    category: {
                      id: '95bf2a30-7284-4664-989a-1dcb51e2053a',
                      name: 'General Expenses',
                      code: '429',
                    },
                    labels: {},
                    tax_rate: {
                      id: 'd92efe31-fc26-4364-af4b-3630c1057ece',
                      name: 'No VAT',
                      percentage: 0,
                    },
                  },
                ],
                labels: {},
                receipt_ids: [],
                spent_amount: { amount: 5, currency: 'GBP' },
              },
            },
            expense_missing_info: {
              summary: 'Expense missing information',
              value: {
                id: '8498b232-28ba-4baf-b33d-22fb464e83c8',
                state: 'missing_info',
                transaction_type: 'fee',
                description: 'Expenses app charges',
                payer: 'Bingston Labs',
                transaction_id: '91b56d41-7b42-40e8-8970-0082cf965e6e',
                expense_date: '2024-09-04T13:39:18.606Z',
                splits: [
                  {
                    amount: { amount: 17.68, currency: 'EUR' },
                    category: {
                      id: '95bf2a30-7284-4664-989a-1dcb51e2053a',
                      name: 'General Expenses',
                      code: '429',
                    },
                    labels: {},
                    tax_rate: {
                      id: '812f50e7-37b3-480b-a7c4-2ad08442f7cf',
                      name: '20% (VAT on Expenses)',
                      percentage: 20,
                    },
                  },
                ],
                labels: {},
                receipt_ids: ['d97d062f-5aae-4a0c-b5f3-52ae134d384d'],
                spent_amount: { amount: 17.68, currency: 'EUR' },
              },
            },
            expense_reverted: {
              summary: 'Reverted expense',
              value: {
                id: '9b9cf87a-e17f-4854-8800-515a0475c4df',
                state: 'reverted',
                transaction_type: 'transfer',
                payer: 'Mindy Carter',
                transaction_id: '5581efb8-6b98-4c2b-bdcd-1270062a8d48',
                expense_date: '2024-09-16T12:48:39.960Z',
                splits: [{ amount: { amount: 100, currency: 'EUR' }, labels: {} }],
                labels: {},
                receipt_ids: [],
                spent_amount: { amount: 100, currency: 'EUR' },
              },
            },
          },
        },
      },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    403: {
      description:
        'Forbidden\n\nReturned, for example, when the access token is missing the required [scope](https://developer.revolut.com/docs/api/business#access-token) or if the Expenses API is disabled for the business.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            forbidden: {
              summary: 'Forbidden',
              value: { message: 'This action is forbidden', code: 9002 },
            },
            api_disabled: {
              summary: 'Feature disabled',
              value: { message: 'Expenses API for business is disabled', code: 9002 },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            message: "Expense 'bd415411-6e3e-46e7-af07-42f9b790c44e' not found",
            code: 3006,
          },
        },
      },
    },
    422: {
      description:
        'Unprocessable content\n\nReturned, for example, when the Expenses feature (not just the API) is disabled for the business.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'Expenses feature is not enabled', code: 3470 },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const getExpensesExpenseIdReceiptsReceiptIdContentRoute = createRoute({
  method: 'get',
  path: '/expenses/{expense_id}/receipts/{receipt_id}/content',
  tags: ['Expenses'],
  summary: 'Retrieve a receipt related to an expense',
  description:
    "Get the receipt related to an expense by providing the receipt's ID.\n\n:::note\nThis feature is not available in Sandbox.\n:::\n\nFor more information, see the guides: [Retrieve expenses and receipts](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-expenses).",
  operationId: 'getExpenseReceipt',
  request: {
    params: z.object({
      expense_id: z
        .uuid()
        .openapi({
          param: {
            name: 'expense_id',
            in: 'path',
            required: true,
            description:
              'The ID of the [expense](https://developer.revolut.com/docs/api/business#get-expense) to which the receipt is related.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      receipt_id: z
        .uuid()
        .openapi({
          param: {
            name: 'receipt_id',
            in: 'path',
            required: true,
            description:
              "The ID of the receipt to retrieve.\n\nTo find the ID of a receipt related to a specific expense, refer to the [expense's details](https://developer.revolut.com/docs/api/business#get-expense#response).\nThe IDs of receipts related to that expense are returned under `receipt_ids`.",
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Receipt content. The exact format depends on the receipt.',
      content: {
        '*/*': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
          examples: { receipt_pdf: { summary: 'A PDF receipt', value: '@sample-receipt.pdf' } },
        },
      },
    },
    400: { description: 'Bad request', content: { 'application/json': { schema: ErrorSchema } } },
    403: {
      description:
        'Forbidden\n\nReturned, for example, when the access token is missing the required [scope](https://developer.revolut.com/docs/api/business#access-token) or if the Expenses API is disabled for the business.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            forbidden: {
              summary: 'Forbidden',
              value: { message: 'This action is forbidden', code: 9002 },
            },
            api_disabled: {
              summary: 'Feature disabled',
              value: { message: 'Expenses API for business is disabled', code: 9002 },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            message:
              "Receipt 'cea368fe-c757-44ce-b2cc-3da94b3d13a6' for expense '3e45f3d7-9919-46df-9793-300726c9fed1' not found",
            code: 3006,
          },
        },
      },
    },
    422: {
      description:
        'Unprocessable content\n\nReturned, for example, when the Expenses feature (not just the API) is disabled for the business.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'Expenses feature is not enabled', code: 3470 },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const getLabelGroupsRoute = createRoute({
  method: 'get',
  path: '/label-groups',
  tags: ['Accounting', 'Labels'],
  summary: 'Retrieve a list of label groups',
  description:
    "Get available label groups based on the provided query criteria.\n\nThe label groups are sorted by the `created_at` date in reverse chronological order, and they're **paginated**.\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).",
  operationId: 'getLabelGroups',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The page size, that is, the maximum number of label groups to return per page.\n\nTo get the next page of results, use `page_token`.',
            schema: { type: 'integer', minimum: 1, maximum: 500, default: 100, example: 10 },
          },
          example: 10,
        }),
      page_token: PageTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of label groups',
      content: {
        'application/json': {
          schema: z
            .object({
              next_page_token: PageTokenSchema.exactOptional(),
              label_groups: z
                .array(LabelGroupResponseSchema)
                .openapi({ description: 'List of label groups.' }),
            })
            .openapi({ required: ['label_groups'] }),
          examples: {
            results_with_next_page: {
              summary: 'Results exceed page size (when limit=5) & next page available',
              value: {
                next_page_token:
                  'MjAyNi0wMS0wMVQwOToxMzoxNS40MDZaN2RhNTFjZGY0LTZiYjctNDRkNi04OWU1LTc2OWEzZGYxZDc5ZA',
                label_groups: [
                  {
                    id: 'f0e1d2c3-b4a5-4678-9012-3456789abcde',
                    name: 'Department',
                    created_at: '2026-03-19T07:15:00.000000Z',
                    updated_at: '2026-03-19T08:45:22.111444Z',
                  },
                  {
                    id: 'f09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
                    name: 'Employee',
                    created_at: '2026-03-11T10:33:51.121090Z',
                    updated_at: '2026-03-11T10:33:51.121090Z',
                  },
                  {
                    id: 'a1b2c3d4-e5f6-4a5b-bc6d-7e8f9a0b1c2d',
                    name: 'Project',
                    created_at: '2026-02-01T08:00:00.000000Z',
                    updated_at: '2026-02-01T08:00:00.000000Z',
                  },
                  {
                    id: '5f4e3d2c-1b0a-4987-8765-43210fedcba9',
                    name: 'Location',
                    created_at: '2026-01-15T10:20:30.123456Z',
                    updated_at: '2026-03-10T14:45:12.987654Z',
                  },
                  {
                    id: '98765432-abcd-ef01-2345-67890abcdef0',
                    name: 'Task',
                    created_at: '2025-12-20T11:11:11.000Z',
                    updated_at: '2026-03-15T09:30:00.555222Z',
                  },
                ],
              },
            },
            results_single_page: {
              summary: 'Results fit within page size, no more pages available',
              value: {
                label_groups: [
                  {
                    id: 'f0e1d2c3-b4a5-4678-9012-3456789abcde',
                    name: 'Department',
                    created_at: '2026-03-19T07:15:00.000000Z',
                    updated_at: '2026-03-19T08:45:22.111444Z',
                  },
                  {
                    id: 'f09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
                    name: 'Employee',
                    created_at: '2026-03-11T10:33:51.121090Z',
                    updated_at: '2026-03-11T10:33:51.121090Z',
                  },
                  {
                    id: 'a1b2c3d4-e5f6-4a5b-bc6d-7e8f9a0b1c2d',
                    name: 'Project',
                    created_at: '2026-02-01T08:00:00.000000Z',
                    updated_at: '2026-02-01T08:00:00.000000Z',
                  },
                  {
                    id: '5f4e3d2c-1b0a-4987-8765-43210fedcba9',
                    name: 'Location',
                    created_at: '2026-01-15T10:20:30.123456Z',
                    updated_at: '2026-03-10T14:45:12.987654Z',
                  },
                  {
                    id: '98765432-abcd-ef01-2345-67890abcdef0',
                    name: 'Task',
                    created_at: '2025-12-20T11:11:11.000Z',
                    updated_at: '2026-03-15T09:30:00.555222Z',
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
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            bad_param_type: {
              summary: 'Incorrect query parameter type',
              value: {
                error_id: '29146977-8042-446f-b362-af224b14c830',
                code: 2101,
                message: "Query parameter 'limit' must be an integer",
              },
            },
            param_value_too_low: {
              summary: 'Query parameter value too low',
              value: {
                error_id: 'b5a51cd1-9d0f-4074-adae-675e2921d71c',
                code: 2101,
                message: "Query parameter 'limit' must be at least 1",
              },
            },
            param_value_too_high: {
              summary: 'Query parameter value too high',
              value: {
                error_id: 'fa12f45e-4633-4f78-8d40-42dadc380511',
                code: 2101,
                message: "Query parameter 'limit' must be at most 500",
              },
            },
            multiple_values_not_allowed: {
              summary: 'Multiple values provided for a single-value query parameter',
              value: {
                error_id: 'c4da2d3c-1cd8-4bbc-ac43-233575e471b7',
                code: 2101,
                message: "Query parameter 'limit' must have a single value",
              },
            },
            param_cannot_be_empty: {
              summary: 'Query parameter provided without a value',
              value: {
                error_id: 'fa12f45e-0ebf-4f7c-88e0-3673c665f135',
                code: 2101,
                message: "Query parameter 'limit' must not be empty",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const postLabelGroupsRoute = createRoute({
  method: 'post',
  path: '/label-groups',
  tags: ['Accounting', 'Labels'],
  summary: 'Create a new label group',
  description:
    'Add a new group of labels that can be applied to your financial records, such as expenses.\n\n:::note\n- This operation is not supported for [externally managed label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups#externally-managed-settings).\n- You can have up to 5 label groups at a time per business.\n:::\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).',
  operationId: 'createLabelGroup',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateLabelGroupRequestSchema,
          examples: {
            department_labels: {
              summary: 'Label group for Department',
              value: {
                name: 'Department',
                labels: [
                  { name: 'Sales & Account Management' },
                  { name: 'Product Management' },
                  { name: 'Design & UX' },
                  { name: 'Customer Success' },
                  { name: 'Engineering' },
                  { name: 'Research & Development' },
                  { name: 'Operations' },
                  { name: 'Quality Assurance' },
                  { name: 'Data Science & Analytics' },
                  { name: 'Executive & Leadership' },
                ],
              },
            },
            team_labels: {
              summary: 'Label group for Team',
              value: {
                name: 'Team',
                labels: [
                  { name: 'Brand Design & Creative Services' },
                  { name: 'Enterprise Sales (Europe)' },
                  { name: 'Cloud Infrastructure & DevOps' },
                  { name: 'Growth & Performance Marketing' },
                  { name: 'Mobile App Development' },
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: ResourceCreatedResponseResponse,
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            param_required: {
              summary: 'Required parameter is missing',
              value: {
                error_id: '69bc43d4-0ebf-4f7c-88e0-ebb7a1441a18',
                code: 2101,
                message: "'labels' is required",
              },
            },
            bad_param_type: {
              summary: 'Incorrect parameter type',
              value: {
                error_id: '69bc4467-8042-446f-b362-675e2921d71c',
                code: 2101,
                message: "'labels' must be an array",
              },
            },
            invalid_json: {
              summary: 'Invalid JSON',
              value: {
                error_id: '69bc1985-1313-42f0-8c0b-3673c665f135',
                code: 2101,
                message: 'Request body is not valid JSON',
              },
            },
            param_value_too_short: {
              summary: 'Parameter value too short',
              value: {
                error_id: '7acc6073-5290-45f8-8956-c79d487ef1e5',
                code: 2101,
                message: "'name' must be at least 1 character",
              },
            },
            param_value_too_long: {
              summary: 'Parameter value too long',
              value: {
                error_id: 'c4da2d3c-1cd8-4bbc-ac43-233575e471b7',
                code: 2101,
                message: "'name' must be at most 100 characters",
              },
            },
            param_value_missing: {
              summary: 'Parameter value too long',
              value: {
                error_id: 'c4da2d3c-1cd8-4bbc-ac43-233575e471b7',
                code: 2101,
                message: "'labels' must not be empty",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    409: {
      description:
        'Conflict\n\nRequest conflicts with the current state of the resource.\nReturned, for example, when a label group with the provided name already exists.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '69bc49bc-4e57-4768-ab6e-f281da25aa2b',
            code: 3506,
            message: "Label group with name 'My Unique Label Group' already exists",
          },
        },
      },
    },
    422: {
      description:
        "Unprocessable entity - label group cannot be created due to business rules \n\nReturned, for example, when you have an accounting software integration connected to your Revolut Business account, and labels are managed by that integration.\n\nThe request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.\nRetrying the same request won't succeed.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            cannot_modify_externally_managed_resource: {
              summary:
                'Labels and label groups are managed by integration, cannot be created manually',
              value: {
                error_id: 'e950c41e-cfd6-4e04-bd79-2d57a3951774',
                code: 3514,
                message:
                  'Labels are managed by your connected accounting integration and cannot be modified manually',
              },
            },
            group_limit_exceeded: {
              summary: 'Label groups limit exceeded',
              value: {
                error_id: '69bc3507-cfd6-4e04-bd79-2d57a3951774',
                code: 3591,
                message: 'Maximum of 5 label groups per business reached',
              },
            },
          },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getLabelGroupsGroupIdRoute = createRoute({
  method: 'get',
  path: '/label-groups/{group_id}',
  tags: ['Accounting', 'Labels'],
  summary: 'Retrieve label group details',
  description:
    'Get the details of a specific label group based on the label group ID.\n\nThe details include the label group name, as well as when the label group was added to your settings, and when it was last updated.\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).',
  operationId: 'getLabelGroup',
  request: {
    params: z.object({
      group_id: z
        .uuid()
        .openapi({
          param: {
            name: 'group_id',
            in: 'path',
            description: 'The ID of the label group to retrieve.',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
            },
          },
          example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Label group details',
      content: {
        'application/json': {
          schema: LabelGroupResponseSchema,
          example: {
            id: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
            name: 'Department',
            created_at: '2026-03-11T10:33:51.121090Z',
            updated_at: '2026-03-11T10:33:51.121090Z',
          },
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            bad_param_format: {
              summary: 'Incorrect path parameter format',
              value: {
                error_id: 'f70973ea-c939-41f8-a106-1656ab5fae2f',
                code: 2101,
                message: "Path parameter 'id' must be a valid UUID",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the label group that you're trying to retrieve cannot be found.\nThis can happen, for example, when the label group has been deleted, or the provided label group ID is incorrect.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'cbb15721-5f51-4588-a959-7494bb7ba827',
            code: 3006,
            message: 'Label group with id 8945879d-6854-4e10-88d6-ce92c5f010ac not found',
          },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const deleteLabelGroupsGroupIdRoute = createRoute({
  method: 'delete',
  path: '/label-groups/{group_id}',
  tags: ['Accounting', 'Labels'],
  summary: 'Delete a label group',
  description:
    "Delete a specific label group, based on its ID.\n\n:::note\nThis operation is not supported for [externally managed label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups#externally-managed-settings).\n:::\n\nOnce the label group is deleted, it will not be returned by the API or in the Revolut Business app, and:\n- You will not be able to apply labels from the group to new financial records (e.g. expenses). \n- Existing records that have not been completed and that contain labels from this group will be marked as invalid, and you'll need to update them to use different labels.\n- Completed records will not be affected by the change. \n\nA successful response does not get any content in return.\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).",
  operationId: 'deleteLabelGroup',
  request: {
    params: z.object({
      group_id: z
        .uuid()
        .openapi({
          param: {
            name: 'group_id',
            description: 'The ID of the label group to delete.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
            },
          },
          example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
        }),
    }),
  },
  responses: {
    204: { description: 'Label group deleted' },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            bad_param_format: {
              summary: 'Incorrect path parameter format',
              value: {
                error_id: 'f70973ea-c939-41f8-a106-1656ab5fae2f',
                code: 2101,
                message: "Path parameter 'id' must be a valid UUID",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the label group that you're trying to delete cannot be found.\nThis can happen, for example, when the label group doesn't exist, or the provided label group ID is incorrect.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'ca73d8a4-a5cb-4f03-9a95-4d53aa1731b0',
            code: 3006,
            message: 'Label group with id be6c9d90-df25-458a-b559-be61896c94b8 not found',
          },
        },
      },
    },
    422: {
      description:
        "Unprocessable entity - label group cannot be deleted due to business rules \n\nReturned, for example, when you have an accounting software integration connected to your Revolut Business account, and label groups are managed by that integration.\n\nThe request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.\nRetrying the same request won't succeed.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            cannot_delete_externally_managed_resource: {
              summary: 'Labels and label groups are managed by integration, cannot be deleted',
              value: {
                error_id: 'e950c41e-cfd6-4e04-bd79-2d57a3951774',
                code: 3514,
                message:
                  'Labels are managed by your connected accounting integration and cannot be modified manually',
              },
            },
          },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const patchLabelGroupsGroupIdRoute = createRoute({
  method: 'patch',
  path: '/label-groups/{group_id}',
  tags: ['Accounting', 'Labels'],
  summary: 'Update label group settings',
  description:
    'Update the name for a specific label group, based on its ID.\n\n:::note\nThis operation is not supported for [externally managed label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups#externally-managed-settings).\n:::\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).',
  operationId: 'updateLabelGroup',
  request: {
    params: z.object({
      group_id: z
        .uuid()
        .openapi({
          param: {
            name: 'group_id',
            in: 'path',
            description: 'The ID of the label group to update.',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
            },
          },
          example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
        }),
    }),
    body: {
      content: {
        'application/json': { schema: UpdateLabelGroupRequestSchema, example: { name: '20% VAT' } },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Label group updated' },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            param_required: {
              summary: 'Body is empty',
              value: {
                error_id: 'f1059c4b-4278-45d3-a17f-bd433ab33c15',
                code: 2101,
                message: 'Request body must not be empty',
              },
            },
            bad_param_format: {
              summary: 'Incorrect parameter format',
              value: {
                error_id: 'f70973ea-c939-41f8-a106-1656ab5fae2f',
                code: 2101,
                message: "Path parameter 'id' must be a valid UUID",
              },
            },
            invalid_json: {
              summary: 'Invalid JSON',
              value: {
                error_id: '36f3cec5-b4b9-431f-9c28-afd3899bc64f',
                code: 2101,
                message: 'Request body is not valid JSON',
              },
            },
            param_value_too_short: {
              summary: 'Parameter value too short',
              value: {
                error_id: '32fd0697-2f3f-4308-b25d-c9230f99c589',
                code: 2101,
                message: "'name' must be at least 1 character",
              },
            },
            param_value_too_long: {
              summary: 'Parameter value too long',
              value: {
                error_id: 'd8d919b5-d667-4058-9bb3-17b6f7bcd6c8',
                code: 2101,
                message: "'name' must be at most 20 characters",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the label group that you're trying to update cannot be found.\nThis can happen, for example, when the label group doesn't exist, or the provided label group ID is incorrect.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'ca73d8a4-a5cb-4f03-9a95-4d53aa1731b0',
            code: 3006,
            message: 'Label group with id be6c9d90-df25-458a-b559-be61896c94b8 not found',
          },
        },
      },
    },
    409: {
      description:
        'Conflict\n\nRequest conflicts with the current state of the resource.\nReturned, for example, when a label group with the provided name already exists.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '8c08b656-4e57-4768-ab6e-f281da25aa2b',
            code: 3506,
            message: "Label group with name 'My Unique Label Group' already exists",
          },
        },
      },
    },
    422: {
      description:
        "Unprocessable entity - label group cannot be updated due to business rules \n\nReturned, for example, when you have an accounting software integration connected to your Revolut Business account, and label groups are managed by that integration.\n\nThe request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.\nRetrying the same request won't succeed.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            cannot_update_externally_managed_resource: {
              summary: 'Labels and label groups are managed by integration, cannot be updated',
              value: {
                error_id: 'e950c41e-cfd6-4e04-bd79-2d57a3951774',
                code: 3514,
                message:
                  'Labels are managed by your connected accounting integration and cannot be modified manually',
              },
            },
            state_mismatch: {
              summary: 'Label group is no longer available',
              value: {
                error_id: 'f1059c4b-4278-45d3-a17f-bd433ab33c15',
                code: 3100,
                message: 'Invalid request',
              },
            },
          },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getLabelGroupsGroupIdLabelsRoute = createRoute({
  method: 'get',
  path: '/label-groups/{group_id}/labels',
  tags: ['Accounting', 'Labels'],
  summary: 'Retrieve a list of labels from a label group',
  description:
    "Get labels from a specific label group based on the provided query criteria.\n\n:::note\nThe API returns a maximum of 500 labels per request. \nThe default page size is 100.\n:::\n\nThe labels are sorted by the `created_at` date in reverse chronological order, and they're **paginated**.\nThe page size, that is, the maximum number of labels returned per page is specified by the `limit` parameter. \n- If the number of results exceeds the page size, the response also returns a cursor for the next page under `next_page_token`.        \n  To get the next page of results, make a new request using that `next_page_token` value in `page_token`.\n- If the number of results is smaller than the page size, `next_page_token` is not returned.\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).",
  operationId: 'getLabels',
  request: {
    params: z.object({
      group_id: z
        .uuid()
        .openapi({
          param: {
            name: 'group_id',
            in: 'path',
            description: 'The ID of the label group from which to retrieve labels.',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
            },
          },
          example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The page size, that is, the maximum number of labels to return per page.\n\nTo get the next page of results, use `page_token`.',
            schema: { type: 'integer', minimum: 1, maximum: 500, default: 100, example: 10 },
          },
          example: 10,
        }),
      page_token: PageTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of labels',
      content: {
        'application/json': {
          schema: z
            .object({
              next_page_token: PageTokenSchema.exactOptional(),
              labels: z
                .array(LabelResponseSchema)
                .openapi({ description: 'List of labels in the specified group' }),
            })
            .openapi({ required: ['labels'] }),
          examples: {
            results_with_next_page: {
              summary: 'Results exceed page size (when limit=5) & next page available',
              value: {
                next_page_token:
                  'MjAyNi0wMS0wMVQwOToxMzoxNS40MDZaN2RhNTFjZGY0LTZiYjctNDRkNi04OWU1LTc2OWEzZGYxZDc5ZA',
                labels: [
                  {
                    id: 'f0e1d2c3-b4a5-4678-9012-3456789abcde',
                    name: 'Consultants',
                    created_at: '2026-03-19T07:15:00.000000Z',
                    updated_at: '2026-03-19T08:45:22.111444Z',
                  },
                  {
                    id: 'f09ad1ad-a1c0-4c09-b8f8-24b439e72690',
                    name: 'IT & Tech Support',
                    created_at: '2026-03-11T10:33:51.121090Z',
                    updated_at: '2026-03-11T10:33:51.121090Z',
                  },
                  {
                    id: 'a1b2c3d4-e5f6-4a5b-bc6d-7e8f9a0b1c2d',
                    name: 'HR & Facility',
                    created_at: '2026-02-01T08:00:00.000000Z',
                    updated_at: '2026-02-01T08:00:00.000000Z',
                  },
                  {
                    id: 'c3b2a1d0-e9f8-47a6-9d8c-7b6a5f4e3d2c',
                    name: 'Finance & Legal',
                    created_at: '2026-01-22T09:10:15.555000Z',
                    updated_at: '2026-01-23T11:00:45.123456Z',
                  },
                  {
                    id: 'd9e8f7a6-b5c4-4321-8765-43210fedcba9',
                    name: 'Sales & Marketing',
                    created_at: '2026-01-20T14:20:00.000000Z',
                    updated_at: '2026-01-20T14:20:00.000000Z',
                  },
                ],
              },
            },
            results_single_page: {
              summary: 'Results fit within page size, no more pages available',
              value: {
                labels: [
                  {
                    id: 'f0e1d2c3-b4a5-4678-9012-3456789abcde',
                    name: 'Consultants',
                    created_at: '2026-03-19T07:15:00.000000Z',
                    updated_at: '2026-03-19T08:45:22.111444Z',
                  },
                  {
                    id: 'f09ad1ad-a1c0-4c09-b8f8-24b439e72690',
                    name: 'IT & Tech Support',
                    created_at: '2026-03-11T10:33:51.121090Z',
                    updated_at: '2026-03-11T10:33:51.121090Z',
                  },
                  {
                    id: 'a1b2c3d4-e5f6-4a5b-bc6d-7e8f9a0b1c2d',
                    name: 'HR & Facility',
                    created_at: '2026-02-01T08:00:00.000000Z',
                    updated_at: '2026-02-01T08:00:00.000000Z',
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
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            bad_param_type: {
              summary: 'Incorrect query parameter type',
              value: {
                error_id: '29146977-8042-446f-b362-af224b14c830',
                code: 2101,
                message: "Query parameter 'limit' must be an integer",
              },
            },
            param_value_too_low: {
              summary: 'Query parameter value too low',
              value: {
                error_id: 'b5a51cd1-9d0f-4074-adae-675e2921d71c',
                code: 2101,
                message: "Query parameter 'limit' must be at least 1",
              },
            },
            param_value_too_high: {
              summary: 'Query parameter value too high',
              value: {
                error_id: 'fa12f45e-4633-4f78-8d40-42dadc380511',
                code: 2101,
                message: "Query parameter 'limit' must be at most 500",
              },
            },
            multiple_values_not_allowed: {
              summary: 'Multiple values provided for a single-value query parameter',
              value: {
                error_id: 'c4da2d3c-1cd8-4bbc-ac43-233575e471b7',
                code: 2101,
                message: "Query parameter 'limit' must have a single value",
              },
            },
            param_cannot_be_empty: {
              summary: 'Query parameter provided without a value',
              value: {
                error_id: 'fa12f45e-0ebf-4f7c-88e0-3673c665f135',
                code: 2101,
                message: "Query parameter 'limit' must not be empty",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const postLabelGroupsGroupIdLabelsRoute = createRoute({
  method: 'post',
  path: '/label-groups/{group_id}/labels',
  tags: ['Accounting', 'Labels'],
  summary: 'Create a new label',
  description:
    'Add a new label to a label group. \n\n:::note\nThis operation is not supported for [externally managed labels](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups#externally-managed-settings).\n:::\n\nThe labels are used for accounting and can be applied to your financial records, such as expenses.\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).',
  operationId: 'createLabel',
  request: {
    params: z.object({
      group_id: z
        .uuid()
        .openapi({
          param: {
            name: 'group_id',
            in: 'path',
            description: 'The ID of the label group to which to add the new label.',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
            },
          },
          example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: CreateLabelRequestSchema,
          example: { name: 'Communications' },
        },
      },
      required: true,
    },
  },
  responses: {
    201: ResourceCreatedResponseResponse,
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            param_required: {
              summary: 'Required parameter is missing',
              value: {
                error_id: 'fa12f45e-0ebf-4f7c-88e0-ebb7a1441a18',
                code: 2101,
                message: "'name' is required",
              },
            },
            bad_param_type: {
              summary: 'Incorrect parameter type',
              value: {
                error_id: '29146977-8042-446f-b362-675e2921d71c',
                code: 2101,
                message: "'name' must be a string",
              },
            },
            invalid_json: {
              summary: 'Invalid JSON',
              value: {
                error_id: 'df7b76b2-1313-42f0-8c0b-3673c665f135',
                code: 2101,
                message: 'Request body is not valid JSON',
              },
            },
            param_value_too_short: {
              summary: 'Parameter value too short',
              value: {
                error_id: '7acc6073-5290-45f8-8956-c79d487ef1e5',
                code: 2101,
                message: "'name' must be at least 1 character",
              },
            },
            param_value_too_long: {
              summary: 'Parameter value too long',
              value: {
                error_id: 'c4da2d3c-1cd8-4bbc-ac43-233575e471b7',
                code: 2101,
                message: "'name' must be at most 100 characters",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    409: {
      description:
        'Conflict\n\nRequest conflicts with the current state of the resource.\nReturned, for example, when a label with the provided name already exists.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '8c08b656-4e57-4768-ab6e-f281da25aa2b',
            code: 3506,
            message: "Label with name 'My Unique Label' already exists",
          },
        },
      },
    },
    422: {
      description:
        "Unprocessable entity - label cannot be created due to business rules \n\nReturned, for example, when you have an accounting software integration connected to your Revolut Business account, and labels are managed by that integration.\n\nThe request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.\nRetrying the same request won't succeed.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            cannot_modify_externally_managed_resource: {
              summary:
                'Labels and label groups are managed by integration, cannot be created manually',
              value: {
                error_id: 'e950c41e-cfd6-4e04-bd79-2d57a3951774',
                code: 3514,
                message:
                  'Labels are managed by your connected accounting integration and cannot be modified manually',
              },
            },
          },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const deleteLabelGroupsGroupIdLabelsLabelIdRoute = createRoute({
  method: 'delete',
  path: '/label-groups/{group_id}/labels/{label_id}',
  tags: ['Accounting', 'Labels'],
  summary: 'Delete a label',
  description:
    "Delete a specific label, based on the IDs of the label and its label group.\n\n:::note\nThis operation is not supported for [externally managed labels](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups#externally-managed-settings).\n:::\n\nOnce the label is deleted, it will not be returned by the API or in the Revolut Business app, and:\n- You will not be able to apply it to new financial records (e.g. expenses). \n- Existing records with this label that have not been completed will be marked as invalid, and you'll need to update them to use a different label.\n- Completed records will not be affected by the change. \n\nA successful response does not get any content in return.\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).",
  operationId: 'deleteLabel',
  request: {
    params: z.object({
      group_id: z
        .uuid()
        .openapi({
          param: {
            name: 'group_id',
            in: 'path',
            description: 'The ID of the label group to which the label belongs.',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
            },
          },
          example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
        }),
      label_id: z
        .uuid()
        .openapi({
          param: {
            name: 'label_id',
            in: 'path',
            description: 'The ID of the label to delete.',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '33279b4f-97ac-4a6f-8932-c6a3b0974060',
            },
          },
          example: '33279b4f-97ac-4a6f-8932-c6a3b0974060',
        }),
    }),
  },
  responses: {
    204: { description: 'Label deleted' },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            bad_param_format: {
              summary: 'Incorrect path parameter format',
              value: {
                error_id: 'f70973ea-c939-41f8-a106-1656ab5fae2f',
                code: 2101,
                message: "Path parameter 'id' must be a valid UUID",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the label that you're trying to delete cannot be found.\nThis can happen, for example, when the label doesn't exist, or the provided label ID is incorrect.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'ca73d8a4-a5cb-4f03-9a95-4d53aa1731b0',
            code: 3006,
            message: 'Label with id be6c9d90-df25-458a-b559-be61896c94b8 not found',
          },
        },
      },
    },
    422: {
      description:
        "Unprocessable entity - label cannot be deleted due to business rules \n\nReturned, for example, when you have an accounting software integration connected to your Revolut Business account, and labels are managed by that integration.\n\nThe request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.\nRetrying the same request won't succeed.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            cannot_delete_externally_managed_resource: {
              summary: 'Labels and label groups are managed by integration, cannot be deleted',
              value: {
                error_id: 'e950c41e-cfd6-4e04-bd79-2d57a3951774',
                code: 3514,
                message:
                  'Labels are managed by your connected accounting integration and cannot be modified manually',
              },
            },
          },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const patchLabelGroupsGroupIdLabelsLabelIdRoute = createRoute({
  method: 'patch',
  path: '/label-groups/{group_id}/labels/{label_id}',
  tags: ['Accounting', 'Labels'],
  summary: 'Update a label',
  description:
    'Update the name for a specific label, based on the IDs of the label and its label group.\n\n:::note\nThis operation is not supported for [externally managed labels]/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups(#externally-managed-settings).\n:::\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage labels and label groups](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-labels-and-label-groups).',
  operationId: 'updateLabel',
  request: {
    params: z.object({
      group_id: z
        .uuid()
        .openapi({
          param: {
            name: 'group_id',
            in: 'path',
            description: 'The ID of the label group to which the label belongs.',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
            },
          },
          example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
        }),
      label_id: z
        .uuid()
        .openapi({
          param: {
            name: 'label_id',
            in: 'path',
            description: 'The ID of the label to update.',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '33279b4f-97ac-4a6f-8932-c6a3b0974060',
            },
          },
          example: '33279b4f-97ac-4a6f-8932-c6a3b0974060',
        }),
    }),
    body: {
      content: {
        'application/json': { schema: UpdateLabelRequestSchema, example: { name: '20% VAT' } },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Label updated' },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            param_required: {
              summary: 'Body is empty',
              value: {
                error_id: 'f1059c4b-4278-45d3-a17f-bd433ab33c15',
                code: 2101,
                message: 'Request body must not be empty',
              },
            },
            bad_param_format: {
              summary: 'Incorrect parameter format',
              value: {
                error_id: 'f70973ea-c939-41f8-a106-1656ab5fae2f',
                code: 2101,
                message: "Path parameter 'id' must be a valid UUID",
              },
            },
            invalid_json: {
              summary: 'Invalid JSON',
              value: {
                error_id: '36f3cec5-b4b9-431f-9c28-afd3899bc64f',
                code: 2101,
                message: 'Request body is not valid JSON',
              },
            },
            param_value_too_short: {
              summary: 'Parameter value too short',
              value: {
                error_id: '32fd0697-2f3f-4308-b25d-c9230f99c589',
                code: 2101,
                message: "'name' must be at least 1 character",
              },
            },
            param_value_too_long: {
              summary: 'Parameter value too long',
              value: {
                error_id: 'd8d919b5-d667-4058-9bb3-17b6f7bcd6c8',
                code: 2101,
                message: "'name' must be at most 100 characters",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the label that you're trying to update cannot be found.\nThis can happen, for example, when the label or corresponding label group doesn't exist, or the provided ID is incorrect.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'ca73d8a4-a5cb-4f03-9a95-4d53aa1731b0',
            code: 3006,
            message: 'Label with id be6c9d90-df25-458a-b559-be61896c94b8 not found',
          },
        },
      },
    },
    409: {
      description:
        'Conflict\n\nRequest conflicts with the current state of the resource.\nReturned, for example, when a label with the provided name already exists.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '8c08b656-4e57-4768-ab6e-f281da25aa2b',
            code: 3506,
            message: "Label with name 'My Unique Label' already exists",
          },
        },
      },
    },
    422: {
      description:
        "Unprocessable entity - label cannot be updated due to business rules \n\nReturned, for example, when you have an accounting software integration connected to your Revolut Business account, and labels are managed by that integration.\n\nThe request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.\nRetrying the same request won't succeed.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            cannot_update_externally_managed_resource: {
              summary: 'Labels and label groups are managed by integration, cannot be updated',
              value: {
                error_id: 'e950c41e-cfd6-4e04-bd79-2d57a3951774',
                code: 3514,
                message:
                  'Labels are managed by your connected accounting integration and cannot be modified manually',
              },
            },
            state_mismatch: {
              summary: 'Label is no longer available',
              value: {
                error_id: 'f1059c4b-4278-45d3-a17f-bd433ab33c15',
                code: 3100,
                message: 'Invalid request',
              },
            },
          },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getPaymentDraftsRoute = createRoute({
  method: 'get',
  path: '/payment-drafts',
  tags: ['Payment drafts'],
  summary: 'Retrieve a list of payment drafts',
  description:
    "Get the list of payment drafts that haven't been [sent for processing](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts#send-drafts-for-processing).\n\nBy default, only payment drafts created with the API (including [Draft payment](https://developer.revolut.com/docs/api/open-banking#tag-draft-payment) endpoints) are returned. To retrieve drafts from other sources, use the `source` parameter.\n\nThe response lists the drafts with their details, such as the number of payments included in the draft, but not the payment details.\n\nFor more information, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).",
  operationId: 'getPaymentDrafts',
  request: {
    query: z.object({
      source: z
        .enum(['api', 'integration', 'email', 'all'])
        .exactOptional()
        .openapi({
          param: {
            name: 'source',
            in: 'query',
            required: false,
            description:
              'Filter payment drafts by the source from which they were created.\n\n| Value | Description |\n| --- | --- |\n| **`api`** | Only drafts created with the API (excluding the [Draft payment](https://developer.revolut.com/docs/api/open-banking#tag-draft-payment) endpoints). |\n| **`integration`** | Drafts created via integrations (e.g., Xero) and [Draft payment](https://developer.revolut.com/docs/api/open-banking#tag-draft-payment) endpoints. |\n| **`email`** | Only drafts created via email. |\n| **`all`** | All payment drafts, **including drafts created in the Revolut Business app**. |',
            schema: { type: 'string', enum: ['api', 'integration', 'email', 'all'] },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of payment drafts',
      content: {
        'application/json': {
          schema: PaymentDraftsResponseSchema,
          example: {
            payment_orders: [
              {
                id: 'e7e54cb2-861a-aaaa-80e9-3e6600f3db10',
                scheduled_for: '2026-06-24',
                title: 'Draft Payment through API',
                payments_count: 1,
                source: 'api',
              },
            ],
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const postPaymentDraftsRoute = createRoute({
  method: 'post',
  path: '/payment-drafts',
  tags: ['Payment drafts'],
  summary: 'Create a payment draft',
  description:
    "Create a payment draft.\n\nWhen you create a payment draft, it stays a draft until you [send it for processing as payment](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts#send-drafts-for-processing) in the [Revolut Business app](https://business.revolut.com/).\n\nUntil then, you can [delete](https://developer.revolut.com/docs/api/business#delete-payment-draft) the draft if you no longer wish to proceed with it.\n\n:::note\nIf you or the payment you're making is subject to an [approval process](https://help.revolut.com/business/help/managing-my-business/users-and-employees/how-can-i-set-payment-approval-rules/), when you send the draft for processing, the payment goes into the `Pending review` state.\nBefore it can be processed, the business owner, administrator, or another team member designated as an approver must approve it in the Revolut Business app.\n:::\n\nFor more information on use cases and other details, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).",
  operationId: 'createPaymentDraft',
  request: {
    body: {
      description: 'The payment draft information',
      content: {
        'application/json': {
          schema: CreatePaymentDraftRequestSchema,
          examples: {
            simple_draft: {
              summary: 'Payment draft for a simple payment',
              value: {
                title: 'Payment Draft Title',
                payments: [
                  {
                    account_id: '2e6de1bf-97ad-478d-aad1-9d7a3cdf70cb',
                    receiver: {
                      counterparty_id: 'a15bcac4-dd42-45ed-a828-6806ccc8bb7e',
                      account_id: '2bf609f4-9825-4401-b6f7-960c61f8bee0',
                    },
                    amount: 10,
                    currency: 'GBP',
                    reference: 'Payment #123',
                  },
                ],
              },
            },
            draft_with_charge_bearer: {
              summary: 'Payment draft for a single payment with charge bearer specified',
              value: {
                title: 'Payment Draft Title',
                payments: [
                  {
                    account_id: '21cb9b68-0017-45cf-93f2-1a8954bcb120',
                    receiver: { counterparty_id: 'd4d52566-280b-47df-b34f-0da6da484c43' },
                    amount: 100,
                    currency: 'USD',
                    reference: 'Transaction #456',
                    charge_bearer: 'debtor',
                  },
                ],
              },
            },
            bulk_payment_draft: {
              summary: 'Payment draft for a bulk payment',
              value: {
                title: 'Payment Draft Title',
                payments: [
                  {
                    account_id: '2e6de1bf-97ad-478d-aad1-9d7a3cdf70cb',
                    receiver: {
                      counterparty_id: 'a15bcac4-dd42-45ed-a828-6806ccc8bb7e',
                      account_id: '2bf609f4-9825-4401-b6f7-960c61f8bee0',
                    },
                    amount: 10,
                    currency: 'GBP',
                    reference: 'Payment #123',
                  },
                  {
                    account_id: '2e6de1bf-97ad-478d-aad1-9d7a3cdf70cb',
                    receiver: { counterparty_id: 'f3107ecc-d368-48f3-8120-92b7d612f949' },
                    amount: 120,
                    currency: 'GBP',
                    reference: 'Transaction #654',
                  },
                  {
                    account_id: '2e6de1bf-97ad-478d-aad1-9d7a3cdf70cb',
                    receiver: { counterparty_id: 'd4d52566-280b-47df-b34f-0da6da484c43' },
                    amount: 100,
                    currency: 'EUR',
                    reference: 'Invoice #789',
                  },
                ],
              },
            },
            scheduled_payment_draft: {
              summary: 'Payment draft for a scheduled payment',
              value: {
                title: 'Payment Draft Title',
                schedule_for: '2026-06-24',
                payments: [
                  {
                    account_id: '2e6de1bf-97ad-478d-aad1-9d7a3cdf70cb',
                    receiver: {
                      counterparty_id: 'a15bcac4-dd42-45ed-a828-6806ccc8bb7e',
                      account_id: '2bf609f4-9825-4401-b6f7-960c61f8bee0',
                    },
                    amount: 10,
                    currency: 'GBP',
                    reference: 'Payment #123',
                  },
                ],
              },
            },
            scheduled_bulk_payment_draft: {
              summary: 'Payment draft for a scheduled bulk payment',
              value: {
                title: 'Payment Draft Title',
                schedule_for: '2026-06-24',
                payments: [
                  {
                    account_id: '2e6de1bf-97ad-478d-aad1-9d7a3cdf70cb',
                    receiver: {
                      counterparty_id: 'a15bcac4-dd42-45ed-a828-6806ccc8bb7e',
                      account_id: '2bf609f4-9825-4401-b6f7-960c61f8bee0',
                    },
                    amount: 10,
                    currency: 'GBP',
                    reference: 'Payment #123',
                  },
                  {
                    account_id: '2e6de1bf-97ad-478d-aad1-9d7a3cdf70cb',
                    receiver: { counterparty_id: 'd4d52566-280b-47df-b34f-0da6da484c43' },
                    amount: 100,
                    currency: 'EUR',
                    reference: 'Invoice #789',
                  },
                ],
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The ID of the payment draft that was created',
      content: {
        'application/json': {
          schema: CreatePaymentDraftResponseSchema,
          example: { id: 'e7e54cb2-861a-aaaa-80e9-3e6600f3db10' },
        },
      },
    },
    204: { description: 'No payments provided' },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted, or when the request contains incompatible parameters.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            charge_bearer_bulk_payments: {
              summary: 'Charge bearer cannot be used with bulk payments',
              value: { code: 2101, message: 'Charge bearer is not supported for bulk payments.' },
            },
            charge_bearer_not_eligible: {
              summary: 'Charge bearer not supported for the given recipient',
              value: { code: 3287, message: 'Recipient not eligible for SWIFT SHA/OUR' },
            },
            currency_should_match: {
              summary: 'Payment currency must match the recipient account currency',
              value: {
                code: 3452,
                message:
                  'Payment draft currency should match with recipient currency [USD] but is [EUR]',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ', 'WRITE'] }],
})

export const getPaymentDraftsPaymentDraftIdRoute = createRoute({
  method: 'get',
  path: '/payment-drafts/{payment_draft_id}',
  tags: ['Payment drafts'],
  summary: 'Retrieve a payment draft',
  description:
    'Get the information about a specific payment draft by ID.\n\nReturns drafts created with the API or via the [Revolut Business app](https://business.revolut.com/).\n\nThe response lists the details of the payment(s) included in the draft, as well as the draft details.\n\nFor more information, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).',
  operationId: 'getPaymentDraft',
  request: {
    params: z.object({
      payment_draft_id: z
        .uuid()
        .openapi({
          param: {
            name: 'payment_draft_id',
            in: 'path',
            required: true,
            description: 'The ID of the payment draft to retrieve.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The information about a specific payment draft',
      content: {
        'application/json': {
          schema: PaymentDraftResponseSchema,
          example: {
            title: 'Draft Payment through API',
            scheduled_for: '2026-06-24',
            payments: [
              {
                id: '67b38771-3db0-4cf0-bdc0-aaaa1284ab81',
                amount: { amount: 123, currency: 'GBP' },
                reference: 'Draft Payment through API',
                account_id: '05018b0d-e67c-4fec-aaaa-415e9da9432c',
                receiver: { counterparty_id: 'c71af44d-aaaa-4e1a-84bb-17589c81f022' },
                state: 'CREATED',
                current_charge_options: {
                  from: { amount: 123, currency: 'GBP' },
                  to: { amount: 123, currency: 'GBP' },
                  rate: '1.0000',
                  fee: { amount: 0, currency: 'GBP' },
                },
              },
            ],
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const deletePaymentDraftsPaymentDraftIdRoute = createRoute({
  method: 'delete',
  path: '/payment-drafts/{payment_draft_id}',
  tags: ['Payment drafts'],
  summary: 'Delete a payment draft',
  description:
    "Delete a payment draft with the given ID.\n\nYou can delete a payment draft only if it hasn't been [sent for processing](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts#send-drafts-for-processing).\n\nFor more information, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).",
  operationId: 'deletePaymentDraft',
  request: {
    params: z.object({
      payment_draft_id: z
        .uuid()
        .openapi({
          param: {
            name: 'payment_draft_id',
            in: 'path',
            required: true,
            description: 'The ID of the payment draft to delete.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The payment draft was successfully deleted' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ', 'WRITE'] }],
})

export const patchPaymentDraftsPaymentDraftIdRoute = createRoute({
  method: 'patch',
  path: '/payment-drafts/{payment_draft_id}',
  tags: ['Payment drafts'],
  summary: 'Update a payment draft',
  description:
    'Update the metadata of a payment draft (`title` and/or `schedule_for`).\n\n:::note\n- You can update drafts created with the API or via the Revolut Business app.\n- The `schedule_for` date must be in the future.\n:::\n\nAll fields are optional — omitting a field leaves it unchanged.\n\nFor more information, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).',
  operationId: 'updatePaymentDraft',
  request: {
    params: z.object({
      payment_draft_id: z
        .uuid()
        .openapi({
          param: {
            name: 'payment_draft_id',
            in: 'path',
            required: true,
            description: 'The ID of the payment draft to update.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      description: 'The fields to update on the payment draft.',
      content: {
        'application/json': {
          schema: UpdatePaymentDraftRequestSchema,
          examples: {
            update_title: {
              summary: 'Update the draft title',
              value: { title: 'Updated Draft Title' },
            },
            update_schedule: {
              summary: 'Update the scheduled date',
              value: { schedule_for: '2026-07-01' },
            },
            update_both: {
              summary: 'Update both title and scheduled date',
              value: { title: 'Updated Draft Title', schedule_for: '2026-07-01' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'The payment draft was successfully updated' },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
    404: {
      description: 'The specified payment draft was not found.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            draft_not_found: {
              summary: 'Payment draft not found',
              value: { code: 3006, message: 'The specified payment draft was not found' },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity\n\nReturned when the payment draft cannot be modified.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            created_by_other_source: {
              summary: 'Draft created by other source cannot be modified',
              value: {
                code: 3100,
                message: 'Payment draft was created via Partner API and cannot be updated',
              },
            },
            already_processed: {
              summary: 'Draft is already processed',
              value: { code: 3417, message: 'Payment draft is already processed' },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ', 'WRITE'] }],
})

export const postPaymentDraftsPaymentDraftIdPaymentsRoute = createRoute({
  method: 'post',
  path: '/payment-drafts/{payment_draft_id}/payments',
  tags: ['Payment drafts'],
  summary: 'Add a payment to a payment draft',
  description:
    'Add a new payment to an existing payment draft.\n\n:::note\nYou can add payments to drafts created with the API or via the Revolut Business app.\n:::\n\nThe payment uses the same shape as the payments in the [create payment draft](#create-payment-draft) request.\n\nFor more information, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).',
  operationId: 'addPaymentDraftPayment',
  request: {
    params: z.object({
      payment_draft_id: z
        .uuid()
        .openapi({
          param: {
            name: 'payment_draft_id',
            in: 'path',
            required: true,
            description: 'The ID of the payment draft to add the payment to.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      description: 'The payment to add to the draft.',
      content: {
        'application/json': {
          schema: PaymentRequestSchema,
          examples: {
            simple_payment: {
              summary: 'Add a simple payment to a draft',
              value: {
                account_id: '2e6de1bf-97ad-478d-aad1-9d7a3cdf70cb',
                receiver: {
                  counterparty_id: 'a15bcac4-dd42-45ed-a828-6806ccc8bb7e',
                  account_id: '2bf609f4-9825-4401-b6f7-960c61f8bee0',
                },
                amount: 50,
                currency: 'GBP',
                reference: 'Payment #456',
              },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The ID of the payment that was added to the draft',
      content: {
        'application/json': {
          schema: CreatePaymentDraftPaymentResponseSchema,
          example: { id: 'a1b2c3d4-0000-0000-0000-000000000002' },
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
    404: {
      description: 'The specified payment draft was not found.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            draft_not_found: {
              summary: 'Payment draft not found',
              value: { code: 3006, message: 'The specified payment draft was not found' },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity\n\nReturned when the payment draft cannot be modified.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            created_by_other_source: {
              summary: 'Draft created by other source cannot be modified',
              value: {
                code: 3100,
                message: 'Payment draft was created via Partner API and cannot be updated',
              },
            },
            already_processed: {
              summary: 'Draft is already processed',
              value: { code: 3417, message: 'Payment draft is already processed' },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ', 'WRITE'] }],
})

export const deletePaymentDraftsPaymentDraftIdPaymentsPaymentIdRoute = createRoute({
  method: 'delete',
  path: '/payment-drafts/{payment_draft_id}/payments/{payment_id}',
  tags: ['Payment drafts'],
  summary: 'Delete a payment from a payment draft',
  description:
    'Delete a single payment from a payment draft. Other payments in the draft are unaffected.\n\n:::note\nYou can delete payments from drafts created with the API or via the Revolut Business app.\n:::\n\nFor more information, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).',
  operationId: 'deletePaymentDraftPayment',
  request: {
    params: z.object({
      payment_draft_id: z
        .uuid()
        .openapi({
          param: {
            name: 'payment_draft_id',
            in: 'path',
            required: true,
            description: 'The ID of the payment draft that contains the payment.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      payment_id: z
        .uuid()
        .openapi({
          param: {
            name: 'payment_id',
            in: 'path',
            required: true,
            description: 'The ID of the payment to delete.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The payment was successfully removed from the draft' },
    404: {
      description: 'The specified payment draft or payment was not found.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            not_found: {
              summary: 'Payment draft or payment not found',
              value: {
                code: 3006,
                message: 'The specified payment draft or payment was not found',
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity\n\nReturned when the payment draft cannot be modified.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            created_by_other_source: {
              summary: 'Draft created by other source cannot be modified',
              value: {
                code: 3100,
                message: 'Payment draft was created via Partner API and cannot be updated',
              },
            },
            already_processed: {
              summary: 'Draft is already processed',
              value: { code: 3417, message: 'Payment draft is already processed' },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ', 'WRITE'] }],
})

export const patchPaymentDraftsPaymentDraftIdPaymentsPaymentIdRoute = createRoute({
  method: 'patch',
  path: '/payment-drafts/{payment_draft_id}/payments/{payment_id}',
  tags: ['Payment drafts'],
  summary: 'Update a payment in a payment draft',
  description:
    'Update the fields of a single payment within a payment draft.\n\n:::note\nYou can update payments in drafts created with the API or via the Revolut Business app.\n:::\n\nAll fields are optional — omit what should not change. Other payments in the draft are unaffected.\n\nFor more information, see the guides: [Payment drafts](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payment-drafts).',
  operationId: 'updatePaymentDraftPayment',
  request: {
    params: z.object({
      payment_draft_id: z
        .uuid()
        .openapi({
          param: {
            name: 'payment_draft_id',
            in: 'path',
            required: true,
            description: 'The ID of the payment draft that contains the payment.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
      payment_id: z
        .uuid()
        .openapi({
          param: {
            name: 'payment_id',
            in: 'path',
            required: true,
            description: 'The ID of the payment to update.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      description: 'The fields to update on the payment.',
      content: {
        'application/json': {
          schema: UpdateDraftPaymentRequestSchema,
          examples: {
            update_amount: { summary: 'Update the payment amount', value: { amount: 200 } },
            update_reference: {
              summary: 'Update the payment reference',
              value: { reference: 'Updated reference' },
            },
            update_receiver: {
              summary: 'Update the receiver',
              value: { receiver: { counterparty_id: 'f3107ecc-d368-48f3-8120-92b7d612f949' } },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'The payment was successfully updated' },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
    404: {
      description: 'The specified payment draft or payment was not found.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            not_found: {
              summary: 'Payment draft or payment not found',
              value: {
                code: 3006,
                message: 'The specified payment draft or payment was not found',
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity\n\nReturned when the payment draft cannot be modified.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            created_by_other_source: {
              summary: 'Draft created by other source cannot be modified',
              value: {
                code: 3100,
                message: 'Payment draft was created via Partner API and cannot be updated',
              },
            },
            already_processed: {
              summary: 'Draft is already processed',
              value: { code: 3417, message: 'Payment draft is already processed' },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ', 'WRITE'] }],
})

export const getPayoutLinksRoute = createRoute({
  method: 'get',
  path: '/payout-links',
  tags: ['Payout links'],
  summary: 'Retrieve a list of payout links',
  description:
    'Get all the links that you have created, or use the query parameters to filter the results.\n\nThe links are sorted by the `created_at` date in reverse chronological order.\n\nThe returned links are **paginated**. \nThe maximum number of payout links returned per page is specified by the `limit` parameter.\nTo get to the next page, make a new request and use the `created_at` date of the last payout link returned in the previous response.\n\n:::note\nThis feature is available in the UK, the EEA, AU, and SG.\n:::        \n\nFor more information, see the guides: [Send money via payout link](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payout-links).',
  operationId: 'getPayoutLinks',
  request: {
    query: z.object({
      state: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(PayoutLinkStateSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            description:
              'Retrieves links in the specified state(s).\nUse for filtering.\n\nTo specify multiple values, follow this pattern: `state={VALUE1}&state={VALUE2}`.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/PayoutLinkState' } },
            explode: true,
            required: false,
          },
        }),
      created_before: z.iso
        .datetime({ offset: true })
        .default('the date-time at which the request is made')
        .exactOptional()
        .openapi({
          param: {
            name: 'created_before',
            in: 'query',
            description:
              'Retrieves links with `created_at` < `created_before`.\nThe default value is the current date and time at which you are calling the endpoint.\n\nProvided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
            schema: {
              type: 'string',
              format: 'date-time',
              default: 'the date-time at which the request is made',
            },
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of links returned per page.\n\nTo get to the next page, make a new request and use the `created_at` date of the last payout link returned in the previous response as the value for `created_before`.',
            schema: { type: 'integer', minimum: 1, maximum: 1000, default: 100 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of your payout links',
      content: {
        'application/json': {
          schema: PayoutLinksSchema,
          example: [
            {
              id: '8e32b08a-e012-4530-bd15-c4e9ebde953d',
              state: 'processed',
              created_at: '2024-01-11T14:02:53.472318Z',
              updated_at: '2024-01-11T14:05:02.962886Z',
              counterparty_name: 'Jane Doe',
              request_id: '5a7fcb46-4be4-47d4-a56f-27a2e5b78dMM',
              expiry_date: '2023-07-18T14:02:53.717626Z',
              payout_methods: ['revolut', 'bank_account', 'card'],
              account_id: '85f515e4-588f-4496-a6a5-a7615a193e6b',
              amount: 5.6,
              currency: 'GBP',
              counterparty_id: '2ef4618a-f258-4ac5-a846-ca6e089214f6',
              transaction_id: '64ad618e-655a-a925-8425-2284c03f6c08',
              reference: 'Bus ticket',
              transfer_reason_code: 'travel',
            },
            {
              id: '12dcd8c2-6408-458f-98a9-3f4abc180898',
              state: 'active',
              created_at: '2023-07-11T13:55:54.834963Z',
              updated_at: '2023-07-11T14:02:12.868346Z',
              counterparty_name: 'John Doe',
              request_id: '5a7fcb46-4be4-47d4-a56f-27a2e5b78dd1',
              expiry_date: '2023-07-18T13:55:55.082280Z',
              payout_methods: ['revolut', 'bank_account'],
              account_id: '85f515e4-588f-4496-a6a5-a7615a193e6b',
              amount: 105.6,
              currency: 'GBP',
              url: 'https://business.revolut.com/p/uSJVAd5SnP1',
              reference: 'Rent',
              transfer_reason_code: 'property_rental',
            },
            {
              id: 'd3b02315-044c-471f-ad41-59d9a4e3c538',
              state: 'active',
              created_at: '2023-07-11T13:53:45.986248Z',
              updated_at: '2023-07-11T13:53:46.475470Z',
              counterparty_name: 'John Smith',
              request_id: 'rev-001',
              expiry_date: '2023-07-18T13:53:46.474777Z',
              payout_methods: ['revolut'],
              account_id: '85f515e4-588f-4496-a6a5-a7615a193e6b',
              amount: 15.6,
              currency: 'GBP',
              url: 'https://business.revolut.com/p/DPYtd2BUUwP',
              reference: 'meal delivery',
            },
          ],
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            forbidden: {
              summary: 'Action forbidden',
              value: { message: 'This action is forbidden', code: 9002 },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const postPayoutLinksRoute = createRoute({
  method: 'post',
  path: '/payout-links',
  tags: ['Payout links'],
  summary: 'Create a payout link',
  description:
    "Create a payout link to send money even when you don't have the full banking details of the counterparty.  \nAfter you have created the link, send it to the recipient so that they can claim the payment.\n\n:::note\nThis feature is available in the UK, the EEA, AU, and SG.\n:::\n\nFor more information, see the guides: [Send money via payout link](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payout-links).",
  operationId: 'createPayoutLink',
  request: {
    body: {
      description: 'Payout link to create',
      content: { 'application/json': { schema: CreatePayoutLinkRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created payout link details',
      content: {
        'application/json': {
          schema: PayoutLinkInitialPropsSchema,
          example: {
            id: '12dcd8c2-6408-458f-98a9-3f4abc180898',
            state: 'active',
            created_at: '2023-07-11T13:55:54.834963Z',
            updated_at: '2023-07-11T13:55:55.082655Z',
            counterparty_name: 'John Smith',
            request_id: '5a7fcb46-4be4-47d4-a56f-27a2e5b78dd1',
            expiry_date: '2023-07-18T13:55:55.082280Z',
            payout_methods: ['revolut', 'bank_account', 'card'],
            account_id: '85f515e4-588f-4496-a6a5-a7615a193e6b',
            amount: 105.6,
            currency: 'GBP',
            url: 'https://business.revolut.com/p/uSJVAd5SnP1',
            reference: 'Rent',
            transfer_reason_code: 'property_rental',
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            required_param_missing: {
              summary: 'Required parameter missing',
              value: { message: "Required 'account_id' is missing", code: 3009 },
            },
            incorrect_param_format: {
              summary: 'Incorrect parameter format',
              value: {
                message: "Value '123' is not in correct format for field 'account_id'",
                code: 3000,
              },
            },
            ivalid_json: {
              summary: 'Invalid JSON',
              value: { message: 'Cannot parse request: invalid JSON', code: 3000 },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'This action is forbidden', code: 9002 },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['PAY', 'WRITE'] }],
})

export const getPayoutLinksPayoutLinkIdRoute = createRoute({
  method: 'get',
  path: '/payout-links/{payout_link_id}',
  tags: ['Payout links'],
  summary: 'Retrieve a payout link',
  description:
    'Get the information about a specific link by its ID.\n\n:::note\nThis feature is available in the UK, the EEA, AU, and SG.\n:::\n\nFor more information, see the guides: [Send money via payout link](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payout-links).',
  operationId: 'getPayoutLink',
  request: {
    params: z.object({
      payout_link_id: z
        .uuid()
        .openapi({
          param: {
            name: 'payout_link_id',
            in: 'path',
            required: true,
            description: 'The ID of the link to retrieve.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The information about a specific link',
      content: {
        'application/json': {
          schema: PayoutLinkSchema,
          examples: {
            active_payout_link: {
              summary: 'Active payout link',
              value: { $ref: '#/components/examples/payoutLinkActive' },
            },
            processed_payout_link: {
              summary: 'Processed payout link',
              value: { $ref: '#/components/examples/payoutLinkProcessed' },
            },
            cancelled_payout_link: {
              summary: 'Cancelled payout link',
              value: { $ref: '#/components/examples/payoutLinkCancelled' },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            forbidden: {
              summary: 'Action forbidden',
              value: { message: 'This action is forbidden', code: 9002 },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'Resource not found', code: 3006 },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const postPayoutLinksPayoutLinkIdCancelRoute = createRoute({
  method: 'post',
  path: '/payout-links/{payout_link_id}/cancel',
  tags: ['Payout links'],
  summary: 'Cancel a payout link',
  description:
    "Cancel a payout link. You can only cancel a link that hasn't been claimed yet. \nA successful request does not get any content in response.\n\n:::note\nThis feature is available in the UK, the EEA, AU, and SG.\n:::\n\nFor more information, see the guides: [Send money via payout link](https://developer.revolut.com/docs/guides/manage-accounts/transfers/payout-links).",
  operationId: 'cancelPayoutLink',
  request: {
    params: z.object({
      payout_link_id: z
        .uuid()
        .openapi({
          param: {
            name: 'payout_link_id',
            in: 'path',
            required: true,
            description: 'The ID of the link to cancel.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Payout link has been cancelled' },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            forbidden: {
              summary: 'Action forbidden',
              value: { message: 'This action is forbidden', code: 9002 },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ', 'WRITE'] }],
})

export const postSandboxTransactionsIdActionRoute = createRoute({
  method: 'post',
  path: '/sandbox/transactions/{id}/{action}',
  tags: ['Simulations'],
  summary: 'Simulate a transfer state update (Sandbox only)',
  description:
    'Simulate a transfer state change in the Sandbox environment. \n\nFor example, after you make a transfer in Sandbox, you can change its state to `completed`. The resulting state is final and cannot be changed.\n\nFor more information, see the guides: [Test your flows with simulations (Sandbox only)](https://developer.revolut.com/docs/guides/manage-accounts/api-usage-and-testing/test-flows-with-simulations).',
  operationId: 'simulateTransferStateUpdate',
  request: {
    params: z.object({
      id: z
        .uuid()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the transfer whose state you want to update.',
            required: true,
          },
        }),
      action: z
        .enum(['complete', 'revert', 'decline', 'fail'])
        .openapi({
          param: {
            name: 'action',
            in: 'path',
            schema: {
              type: 'string',
              enum: ['complete', 'revert', 'decline', 'fail'],
              description:
                'Indicates the transaction state update. Possible values:\n- `complete` - Transaction is successfully processed.\n- `revert` - Transaction is reverted by the system or company, but not the user. This can happen for a variety of reasons, for example, the receiver being inaccessible.\n- `decline` - Transaction is declined to the user for a good reason, such as insufficient account balance, wrong receiver information, etc.\n- `fail` - Transaction fails during initiation or completion. This can happen for a variety of reasons, for example, invalid API calls, blocked payments, etc.',
            },
            required: true,
          },
          description:
            'Indicates the transaction state update. Possible values:\n- `complete` - Transaction is successfully processed.\n- `revert` - Transaction is reverted by the system or company, but not the user. This can happen for a variety of reasons, for example, the receiver being inaccessible.\n- `decline` - Transaction is declined to the user for a good reason, such as insufficient account balance, wrong receiver information, etc.\n- `fail` - Transaction fails during initiation or completion. This can happen for a variety of reasons, for example, invalid API calls, blocked payments, etc.',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Information about the updated transfer state',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z
                .uuid()
                .openapi({ description: 'The ID of the transfer whose state was updated.' }),
              state: z
                .enum(['completed', 'reverted', 'declined', 'failed'])
                .openapi({
                  description:
                    'Indicates the simulated transaction state. Possible values:\n- `completed` - Transaction was successfully processed.\n- `reverted` - Transaction was reverted by the system or company, but not the user. This can happen for a variety of reasons, for example, the receiver being inaccessible.\n- `declined` - Transaction was declined to the user for a good reason, such as insufficient account balance, wrong receiver information, etc.\n- `failed` - Transaction failed during initiation or completion. This can happen for a variety of reasons, for example, invalid API calls, blocked payments, etc.',
                }),
              created_at: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    'The date and time the transfer was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
                }),
              completed_at: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The date and time the transfer was completed in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
                }),
            })
            .openapi({ required: ['id', 'state', 'created_at'] }),
          example: {
            id: 'a6ea39d7-62c9-481c-8ba6-8a887a44c486',
            state: 'completed',
            created_at: '2023-01-23T08:39:35.811005Z',
            completed_at: '2023-01-23T08:39:35.811005Z',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const postSandboxTopupRoute = createRoute({
  method: 'post',
  path: '/sandbox/topup',
  tags: ['Simulations'],
  summary: 'Simulate an account top-up (Sandbox only)',
  description:
    'Simulate a top-up of your account in the Sandbox environment. \n\nThis is useful during testing, when you run out of money in your test account and need to add more.\n\nFor more information, see the guides: [Test your flows with simulations (Sandbox only)](https://developer.revolut.com/docs/guides/manage-accounts/api-usage-and-testing/test-flows-with-simulations).',
  operationId: 'simulateTopUp',
  request: {
    body: {
      description: 'Top-up details',
      content: {
        'application/json': {
          schema: z
            .object({
              account_id: z
                .uuid()
                .openapi({ description: 'The ID of the account that you want to top up.' }),
              amount: z
                .float64()
                .max(10000)
                .openapi({ description: 'The amount with which you want to top up the account.' }),
              currency: CurrencySchema.openapi({
                description: 'The currency of the account that you want to top up.',
              }),
              reference: z
                .string()
                .default('Test Top-up')
                .exactOptional()
                .openapi({ description: 'A short description for your top up.' }),
              state: z
                .enum(['pending', 'completed', 'reverted', 'failed'])
                .default('completed')
                .exactOptional()
                .openapi({
                  description: 'The state to which you want to set the top-up transaction.',
                }),
            })
            .openapi({ required: ['account_id', 'amount', 'currency'] }),
          example: {
            account_id: 'e042f1fe-f721-49cc-af82-db7a6c46944f',
            amount: 100,
            currency: 'GBP',
            reference: 'Test Top-up',
            state: 'completed',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Information about the top-up state',
      content: {
        'application/json': {
          schema: z
            .object({
              id: z.uuid().openapi({ description: 'The ID of the account that was topped up.' }),
              state: z
                .enum(['pending', 'completed', 'reverted', 'failed'])
                .openapi({ description: 'The state of the top-up transaction.' }),
              created_at: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    'The date and time the transaction was created in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
                }),
              completed_at: z.iso
                .datetime({ offset: true })
                .exactOptional()
                .openapi({
                  description:
                    'The date and time the transaction was completed in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
                }),
            })
            .openapi({ required: ['id', 'state', 'created_at'] }),
          example: {
            id: '330953b8-b089-4cfd-9f03-e88173d64248',
            state: 'completed',
            created_at: '2023-01-23T08:39:35.811005Z',
            completed_at: '2023-01-23T08:39:35.811005Z',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getTaxRatesRoute = createRoute({
  method: 'get',
  path: '/tax-rates',
  tags: ['Accounting', 'Tax rates'],
  summary: 'Retrieve a list of tax rates',
  description:
    "Get available tax rates based on the provided query criteria.\n\n:::note\nThe API returns a maximum of 500 tax rates per request. \nThe default page size is 100.\n:::\n\nThe tax rates are sorted by the `created_at` date in reverse chronological order, and they're **paginated**.\nThe page size, that is, the maximum number of tax rates returned per page is specified by the `limit` parameter. \n- If the number of results exceeds the page size, the response also returns a cursor for the next page under `next_page_token`.        \n  To get the next page of results, make a new request using that `next_page_token` value in `page_token`.\n- If the number of results is smaller than the page size, `next_page_token` is not returned.\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates).",
  operationId: 'getTaxRates',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(500),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The page size, that is, the maximum number of tax rates to return per page.\n\nTo get the next page of results, use `page_token`.',
            schema: { type: 'integer', minimum: 1, maximum: 500, default: 100, example: 10 },
          },
          example: 10,
        }),
      page_token: PageTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'List of tax rates',
      content: {
        'application/json': {
          schema: z
            .object({
              next_page_token: PageTokenSchema.exactOptional(),
              tax_rates: z.array(TaxRateResponseSchema),
            })
            .openapi({ required: ['tax_rates'] }),
          examples: {
            results_with_next_page: {
              summary: 'Results exceed page size (when limit=5) & next page available',
              value: {
                next_page_token:
                  'MjAyNi0wMS0wMVQwOToxMzoxNS40MDZaN2RhNTFjZGY0LTZiYjctNDRkNi04OWU1LTc2OWEzZGYxZDc5ZA',
                tax_rates: [
                  {
                    id: 'f0e1d2c3-b4a5-4678-9012-3456789abcde',
                    name: 'Import Duty Surcharge',
                    created_at: '2026-03-19T07:15:00.000000Z',
                    updated_at: '2026-03-19T08:45:22.111444Z',
                    percentage: 12.75,
                  },
                  {
                    id: 'f09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
                    name: '20% (VAT on Expenses)',
                    created_at: '2026-03-11T10:33:51.121090Z',
                    updated_at: '2026-03-11T10:33:51.121090Z',
                    percentage: 20,
                  },
                  {
                    id: 'a1b2c3d4-e5f6-4a5b-bc6d-7e8f9a0b1c2d',
                    name: 'Reduced Rate Food & Beverage',
                    created_at: '2026-02-01T08:00:00.000000Z',
                    updated_at: '2026-02-01T08:00:00.000000Z',
                    percentage: 5.5,
                  },
                  {
                    id: '5f4e3d2c-1b0a-4987-8765-43210fedcba9',
                    name: 'Standard Output Tax (High)',
                    created_at: '2026-01-15T10:20:30.123456Z',
                    updated_at: '2026-03-10T14:45:12.987654Z',
                    percentage: 20,
                  },
                  {
                    id: '98765432-abcd-ef01-2345-67890abcdef0',
                    name: 'Exempt Financial Services',
                    created_at: '2025-12-20T11:11:11.000Z',
                    updated_at: '2026-03-15T09:30:00.555222Z',
                    percentage: 0,
                  },
                ],
              },
            },
            results_single_page: {
              summary: 'Results fit within page size, no more pages available',
              value: {
                tax_rates: [
                  {
                    id: '7e6d5c4b-3a2b-1c0d-9e8f-7a6b5c4d3e2f',
                    name: 'Luxury Goods Tax',
                    created_at: '2026-03-23T14:30:00.000000Z',
                    updated_at: '2026-03-23T14:30:00.000000Z',
                    percentage: 25,
                  },
                  {
                    id: '8a7b6c5d-4e3f-2g1h-0i9j-8k7l6m5n4o3p',
                    name: 'Environmental Levy',
                    created_at: '2026-03-22T09:15:22.000000Z',
                    updated_at: '2026-03-22T10:00:00.000000Z',
                    percentage: 3.5,
                  },
                  {
                    id: '1f2e3d4c-5b6a-7988-7766-554433221100',
                    name: 'Digital Services Tax',
                    created_at: '2026-03-21T11:45:00.000000Z',
                    updated_at: '2026-03-21T11:45:00.000000Z',
                    percentage: 7,
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
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            bad_param_type: {
              summary: 'Incorrect query parameter type',
              value: {
                error_id: '29146977-8042-446f-b362-af224b14c830',
                code: 2101,
                message: "Query parameter 'limit' must be an integer",
              },
            },
            param_value_too_low: {
              summary: 'Query parameter value too low',
              value: {
                error_id: 'b5a51cd1-9d0f-4074-adae-675e2921d71c',
                code: 2101,
                message: "Query parameter 'limit' must be at least 1",
              },
            },
            param_value_too_high: {
              summary: 'Query parameter value too high',
              value: {
                error_id: 'fa12f45e-4633-4f78-8d40-42dadc380511',
                code: 2101,
                message: "Query parameter 'limit' must be at most 500",
              },
            },
            multiple_values_not_allowed: {
              summary: 'Multiple values provided for a single-value query parameter',
              value: {
                error_id: 'c4da2d3c-1cd8-4bbc-ac43-233575e471b7',
                code: 2101,
                message: "Query parameter 'limit' must have a single value",
              },
            },
            param_cannot_be_empty: {
              summary: 'Query parameter provided without a value',
              value: {
                error_id: 'fa12f45e-0ebf-4f7c-88e0-3673c665f135',
                code: 2101,
                message: "Query parameter 'limit' must not be empty",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const postTaxRatesRoute = createRoute({
  method: 'post',
  path: '/tax-rates',
  tags: ['Accounting', 'Tax rates'],
  summary: 'Create a new tax rate',
  description:
    'Add a new tax rate to the list of tax rates that can be applied to your financial records, such as expenses.\n\n:::note\nThis operation is not supported for [externally managed tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates#externally-managed-settings).\n:::\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates).',
  operationId: 'createTaxRate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateTaxRateRequestSchema,
          example: { name: '20% (VAT on Expenses)', percentage: 20 },
        },
      },
      required: true,
    },
  },
  responses: {
    201: ResourceCreatedResponseResponse,
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            param_required: {
              summary: 'Required parameter is missing',
              value: {
                error_id: 'fa12f45e-0ebf-4f7c-88e0-ebb7a1441a18',
                code: 2101,
                message: "'percentage' is required",
              },
            },
            bad_param_type: {
              summary: 'Incorrect parameter type',
              value: {
                error_id: '29146977-8042-446f-b362-675e2921d71c',
                code: 2101,
                message: "'percentage' must be a number",
              },
            },
            param_value_too_low: {
              summary: 'Parameter value too low',
              value: {
                error_id: 'b5a51cd1-9d0f-4074-adae-af224b14c830',
                code: 2101,
                message: "'percentage' must be at least 0",
              },
            },
            param_value_too_high: {
              summary: 'Parameter value too high',
              value: {
                error_id: '89ceb92e-4633-4f78-8d40-42dadc380511',
                code: 2101,
                message: "'percentage' must be at most 100",
              },
            },
            invalid_json: {
              summary: 'Invalid JSON',
              value: {
                error_id: 'df7b76b2-1313-42f0-8c0b-3673c665f135',
                code: 2101,
                message: 'Request body is not valid JSON',
              },
            },
            param_value_too_short: {
              summary: 'Parameter value too short',
              value: {
                error_id: '7acc6073-5290-45f8-8956-c79d487ef1e5',
                code: 2101,
                message: "'name' must be at least 1 character",
              },
            },
            param_value_too_long: {
              summary: 'Parameter value too long',
              value: {
                error_id: 'c4da2d3c-1cd8-4bbc-ac43-233575e471b7',
                code: 2101,
                message: "'name' must be at most 20 characters",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    409: {
      description:
        'Conflict\n\nRequest conflicts with the current state of the resource.\nReturned, for example, when a tax rate with the provided name already exists.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '8c08b656-4e57-4768-ab6e-f281da25aa2b',
            code: 3505,
            message: 'Tax rate with name My Unique Rate already exists',
          },
        },
      },
    },
    422: {
      description:
        "Unprocessable entity - tax rate cannot be created due to business rules \n\nReturned, for example, when you have an accounting software integration connected to your Revolut Business account, and tax rates are managed by that integration.\n\nThe request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.\nRetrying the same request won't succeed.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            cannot_modify_externally_managed_resource: {
              summary: 'Tax rates are managed by integration, cannot be created manually',
              value: {
                error_id: 'e950c41e-cfd6-4e04-bd79-2d57a3951774',
                code: 3514,
                message:
                  'Tax rates are managed by your connected accounting integration and cannot be modified manually',
              },
            },
          },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getTaxRatesTaxRateIdRoute = createRoute({
  method: 'get',
  path: '/tax-rates/{tax_rate_id}',
  tags: ['Accounting', 'Tax rates'],
  summary: 'Retrieve tax rate details',
  description:
    'Get the details of a specific tax rate based on the tax rate ID.\n\nThe details include the tax rate name and percentage, as well as when the tax rate was added to your settings, and when it was last updated.\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates).',
  operationId: 'getTaxRate',
  request: {
    params: z.object({
      tax_rate_id: z
        .uuid()
        .openapi({
          param: {
            name: 'tax_rate_id',
            in: 'path',
            description: 'The ID of the tax rate to retrieve.',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
            },
          },
          example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Tax rate details',
      content: {
        'application/json': {
          schema: TaxRateResponseSchema,
          example: {
            id: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
            name: '20% (VAT on Expenses)',
            created_at: '2026-03-11T10:33:51.121090Z',
            updated_at: '2026-03-11T10:33:51.121090Z',
            percentage: 20,
          },
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            bad_param_format: {
              summary: 'Incorrect path parameter format',
              value: {
                error_id: 'f70973ea-c939-41f8-a106-1656ab5fae2f',
                code: 2101,
                message: "Path parameter 'id' must be a valid UUID",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the tax rate that you're trying to retrieve cannot be found.\nThis can happen, for example, when the tax rate has been deleted, or the provided tax rate ID is incorrect.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'cbb15721-5f51-4588-a959-7494bb7ba827',
            code: 3006,
            message: 'Tax rate with id 8945879d-6854-4e10-88d6-ce92c5f010ac not found',
          },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const deleteTaxRatesTaxRateIdRoute = createRoute({
  method: 'delete',
  path: '/tax-rates/{tax_rate_id}',
  tags: ['Accounting', 'Tax rates'],
  summary: 'Delete a tax rate',
  description:
    "Delete a specific tax rate, based on its ID.\n\n:::note\nThis operation is not supported for [externally managed tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates#externally-managed-settings).\n:::\n\nOnce the tax rate is deleted, it will not be returned by the API or in the Revolut Business app, and:\n- You will not be able to apply it to new financial records (e.g. expenses). \n- Existing records with this tax rate that have not been completed will be marked as invalid, and you'll need to update them to use a different tax rate.\n- Completed records will not be affected by the change. \n\nA successful response does not get any content in return.\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates).",
  operationId: 'deleteTaxRate',
  request: {
    params: z.object({
      tax_rate_id: z
        .uuid()
        .openapi({
          param: {
            name: 'tax_rate_id',
            description: 'The ID of the tax rate to delete.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
            },
          },
          example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
        }),
    }),
  },
  responses: {
    204: { description: 'Tax rate deleted' },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            bad_param_format: {
              summary: 'Incorrect path parameter format',
              value: {
                error_id: 'f70973ea-c939-41f8-a106-1656ab5fae2f',
                code: 2101,
                message: "Path parameter 'id' must be a valid UUID",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the tax rate that you're trying to delete cannot be found.\nThis can happen, for example, when the tax rate doesn't exist, or the provided tax rate ID is incorrect.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'ca73d8a4-a5cb-4f03-9a95-4d53aa1731b0',
            code: 3006,
            message: 'Tax rate with id be6c9d90-df25-458a-b559-be61896c94b8 not found',
          },
        },
      },
    },
    422: {
      description:
        "Unprocessable entity - tax rate cannot be deleted due to business rules \n\nReturned, for example, when you have an accounting software integration connected to your Revolut Business account, and tax rates are managed by that integration.\n\nThe request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.\nRetrying the same request won't succeed.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            cannot_delete_externally_managed_resource: {
              summary: 'Tax rate managed by integration, cannot be deleted',
              value: {
                error_id: 'e950c41e-cfd6-4e04-bd79-2d57a3951774',
                code: 3514,
                message:
                  'Tax rates are managed by your connected accounting integration and cannot be modified manually',
              },
            },
          },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const patchTaxRatesTaxRateIdRoute = createRoute({
  method: 'patch',
  path: '/tax-rates/{tax_rate_id}',
  tags: ['Accounting', 'Tax rates'],
  summary: 'Update tax rate settings',
  description:
    'Update settings for a specific tax rate, based on its ID.\n\n:::note\nThis operation is not supported for [externally managed tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates#externally-managed-settings).\n:::\n\nFor more details, see the guides: [Manage accounting settings](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-accounting-settings) and [Manage tax rates](https://developer.revolut.com/docs/guides/manage-accounts/accounting/manage-tax-rates).',
  operationId: 'updateTaxRate',
  request: {
    params: z.object({
      tax_rate_id: z
        .uuid()
        .openapi({
          param: {
            name: 'tax_rate_id',
            in: 'path',
            description: 'The ID of the tax rate to update.',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
            },
          },
          example: '09ad1ad3-a1c0-4c09-b8f8-24b439e72690',
        }),
    }),
    body: {
      content: {
        'application/json': { schema: UpdateTaxRateRequestSchema, example: { name: '20% VAT' } },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Tax rate updated' },
    400: {
      description:
        'Bad Request\n\nReturned, for example, when a required parameter is missing or malformatted.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            param_required: {
              summary: 'Body is empty',
              value: {
                error_id: 'f1059c4b-4278-45d3-a17f-bd433ab33c15',
                code: 2101,
                message: 'Request body must not be empty',
              },
            },
            bad_param_format: {
              summary: 'Incorrect parameter format',
              value: {
                error_id: 'f70973ea-c939-41f8-a106-1656ab5fae2f',
                code: 2101,
                message: "Path parameter 'id' must be a valid UUID",
              },
            },
            invalid_json: {
              summary: 'Invalid JSON',
              value: {
                error_id: '36f3cec5-b4b9-431f-9c28-afd3899bc64f',
                code: 2101,
                message: 'Request body is not valid JSON',
              },
            },
            param_value_too_short: {
              summary: 'Parameter value too short',
              value: {
                error_id: '32fd0697-2f3f-4308-b25d-c9230f99c589',
                code: 2101,
                message: "'name' must be at least 1 character",
              },
            },
            param_value_too_long: {
              summary: 'Parameter value too long',
              value: {
                error_id: 'd8d919b5-d667-4058-9bb3-17b6f7bcd6c8',
                code: 2101,
                message: "'name' must be at most 20 characters",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the tax rate that you're trying to update cannot be found.\nThis can happen, for example, when the tax rate doesn't exist, or the provided tax rate ID is incorrect.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'ca73d8a4-a5cb-4f03-9a95-4d53aa1731b0',
            code: 3006,
            message: 'Tax rate with id be6c9d90-df25-458a-b559-be61896c94b8 not found',
          },
        },
      },
    },
    409: {
      description:
        'Conflict\n\nRequest conflicts with the current state of the resource.\nReturned, for example, when a tax rate with the provided name already exists.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '8c08b656-4e57-4768-ab6e-f281da25aa2b',
            code: 3505,
            message: 'Tax rate with name My Unique Rate already exists',
          },
        },
      },
    },
    422: {
      description:
        "Unprocessable entity - tax rate cannot be updated due to business rules \n\nReturned, for example, when you have an accounting software integration connected to your Revolut Business account, and tax rates are managed by that integration.\n\nThe request is well-formed and the server understands it, but the operation cannot be performed because the resource state doesn't permit it.\nRetrying the same request won't succeed.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            cannot_update_externally_managed_resource: {
              summary: 'Tax rate managed by integration, cannot be updated',
              value: {
                error_id: 'e950c41e-cfd6-4e04-bd79-2d57a3951774',
                code: 3514,
                message:
                  'Tax rates are managed by your connected accounting integration and cannot be modified manually',
              },
            },
            state_mismatch: {
              summary: 'Tax rate is no longer available',
              value: {
                error_id: 'f1059c4b-4278-45d3-a17f-bd433ab33c15',
                code: 3100,
                message: 'Invalid request',
              },
            },
          },
        },
      },
    },
    429: TooManyRequestsResponse,
    500: InternalServerErrorResponse,
    503: ServiceUnavailableResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getTeamMembersRoute = createRoute({
  method: 'get',
  path: '/team-members',
  tags: ['Teams'],
  summary: 'Retrieve a list of team members',
  description:
    'Get information about all the team members of your business.\n\nThe results are paginated and sorted by the `created_at` date in reverse chronological order.\n\nFor more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).',
  operationId: 'getTeamMembers',
  request: {
    query: z.object({
      created_before: z.iso
        .datetime({ offset: true })
        .default('the date-time at which the request is made')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'created_before',
            schema: {
              type: 'string',
              format: 'date-time',
              default: 'the date-time at which the request is made',
            },
            description:
              'Retrieves team members with `created_at` < `created_before`.\nThe default value is the current date and time at which you are calling the endpoint.\n\nProvided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of team members returned per page.\n\nTo get to the next page, make a new request and use the `created_at` date of the last team member returned in the previous response as the value for `created_before`.',
            schema: { type: 'number', format: 'integer', default: 100, maximum: 1000, minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Information about team members of the business',
      content: {
        'application/json': {
          schema: z.array(TeamMemberSchema),
          example: [
            {
              email: 'john.doe@example.com',
              id: '76969b71-a123-42dc-b874-a34688d7bba4',
              role_id: 'owner',
              state: 'active',
              first_name: 'John',
              last_name: 'Doe',
              created_at: '2022-09-07T09:19:31.592368Z',
              updated_at: '2022-09-07T09:21:24.346670Z',
            },
            {
              email: 'john.smith@example.com',
              id: '168922e1-594f-4ca0-93b2-56b742f3936b',
              role_id: '024abb3d-06da-4701-9254-dfcc3da38385',
              state: 'active',
              created_at: '2022-09-07T09:19:32.592368Z',
              updated_at: '2022-09-07T09:21:25.346670Z',
              department_id: '9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c',
              manager_id: '76969b71-a123-42dc-b874-a34688d7bba4',
            },
          ],
        },
      },
    },
    400: {
      description: 'Bad pagination parameters',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '4d5e6f7a-8b9c-0d1e-2f3a-4b5c6d7e8f9a',
            code: 2101,
            message: 'Parameter limit must be a valid integer in range: [1, 1000]',
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const postTeamMembersRoute = createRoute({
  method: 'post',
  path: '/team-members',
  tags: ['Teams'],
  summary: 'Invite a new member to your business',
  description:
    'Invite a new member to your business account.\n\nWhen you invite a new team member to your business account, an invitation is sent to their email address that you provided in this request.\nTo join your business account, the new team member has to accept this invitation.\n\nFor more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).',
  operationId: 'inviteTeamMember',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              email: z.email().openapi({ description: 'The email address of the invited member.' }),
              role_id: z
                .string()
                .openapi({
                  description:
                    'The ID of the [role](https://developer.revolut.com/docs/api/business#get-roles) to assign to the new member.',
                }),
            })
            .openapi({ required: ['email', 'role_id'] }),
          example: {
            email: 'john.smith@example.com',
            role_id: '0098ac28-b92f-435e-a3a2-2829d3918dfb',
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Information about the new member',
      content: {
        'application/json': {
          schema: z
            .object({
              email: z.email().openapi({ description: 'The email address of the invited member.' }),
              id: z.string().openapi({ description: 'The ID of the invited member.' }),
              role_id: z
                .string()
                .openapi({
                  description:
                    'The ID of the [role](https://developer.revolut.com/docs/api/business#get-roles) assigned to the member.',
                }),
              created_at: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'The date and time when the member was created.' }),
              updated_at: z.iso
                .datetime({ offset: true })
                .openapi({ description: 'The date and time when the member was last updated.' }),
            })
            .openapi({ required: ['email', 'id', 'role_id', 'created_at', 'updated_at'] }),
          example: {
            email: 'john.smith@example.com',
            id: '76969b71-a123-42dc-b874-a34688d7bba4',
            role_id: '0098ac28-b92f-435e-a3a2-2829d3918dfb',
            created_at: '2022-09-07T09:19:31.592368Z',
            updated_at: '2022-09-07T09:21:24.346670Z',
          },
        },
      },
    },
    400: {
      description: 'Bad request, for example, invalid role ID or invalid email address provided',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            invalid_role_id_uuid: {
              summary: 'Invalid role ID (UUID)',
              value: {
                error_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
                code: 3053,
                message: 'Business role 0098ac28-b92f-435e-a3a2-2829d3918dfb not found',
              },
            },
            invalid_role_id_default: {
              summary: 'Invalid role ID (non-UUID)',
              value: {
                error_id: 'b2c3d4e5-f6a7-8901-bcde-f12345678901',
                code: 3402,
                message: 'Invalid role: nonexistent_role_id',
              },
            },
            invalid_email: {
              summary: 'Invalid email address',
              value: {
                error_id: 'c3d4e5f6-a7b8-9012-cdef-123456789012',
                code: 3000,
                message: 'Invalid email address: (masked) ****.*******.*******.***',
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    422: {
      description: 'Team member with the given email cannot be invited',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            user_already_invited: {
              summary: 'Team member already invited',
              value: {
                error_id: '6a577522-c02c-a59b-b43f-2169bf4feb21',
                code: 33005,
                message: 'Team member with given email has already been invited',
              },
            },
            user_is_member_of_another_business: {
              summary: 'Team member cannot be invited',
              value: {
                error_id: '7b688633-d13d-b6ac-c543-3270a050fc32',
                code: 33008,
                message: 'Team member with given email cannot be invited',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getTeamMembersTeamMemberIdRoute = createRoute({
  method: 'get',
  path: '/team-members/{team_member_id}',
  tags: ['Teams'],
  summary: 'Retrieve a team member',
  description:
    'Get information about a specific team member by their ID.\n\nFor more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).',
  operationId: 'getTeamMemberById',
  request: {
    params: z.object({
      team_member_id: z
        .uuid()
        .openapi({
          param: {
            name: 'team_member_id',
            description: 'The ID of the team member to retrieve.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '76969b71-a123-42dc-b874-a34688d7bba4',
            },
          },
          example: '76969b71-a123-42dc-b874-a34688d7bba4',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Team member details',
      content: {
        'application/json': {
          schema: TeamMemberSchema,
          example: {
            id: '76969b71-a123-42dc-b874-a34688d7bba4',
            email: 'dana.white@example.com',
            role_id: 'admin',
            state: 'active',
            created_at: '2026-07-02T12:01:37.605141Z',
            updated_at: '2026-07-02T12:06:29.234986Z',
            first_name: 'Dana',
            last_name: 'White',
          },
        },
      },
    },
    400: {
      description: 'Invalid path parameter',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '6a5e4243-6a9c-a966-9800-06a73f092fc7',
            code: 2101,
            message: "Path parameter 'teamMemberId' must be a valid UUID",
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the team member doesn't exist.\nThis can happen when, for example, the team member has been deleted, or the provided team member ID is incorrect.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '2601eb7c-6569-42b0-8dc1-dac520229a19',
            code: 3006,
            message: 'Team member with id 76969b71-a123-42dc-b874-a34688d7bba4 not found',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const deleteTeamMembersTeamMemberIdRoute = createRoute({
  method: 'delete',
  path: '/team-members/{team_member_id}',
  tags: ['Teams'],
  summary: 'Delete a team member',
  description:
    'Delete a specific member of your team.\n\n:::note\nThis action does not delete the person’s Revolut Business user account – it only removes them from your team.\nThey will lose access to your Revolut Business account and team but can still log in to Revolut Business.\nTheir user account will remain linked to any other teams and accounts it’s associated with.\n:::\n\nFor more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).',
  operationId: 'deleteTeamMember',
  request: {
    params: z.object({
      team_member_id: z
        .uuid()
        .openapi({
          param: {
            name: 'team_member_id',
            description: 'The ID of the team member to delete.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '76969b71-a123-42dc-b874-a34688d7bba4',
            },
          },
          example: '76969b71-a123-42dc-b874-a34688d7bba4',
        }),
    }),
  },
  responses: {
    204: { description: 'Team member was deleted' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the team member that you're trying to delete doesn't exist.\nThis can happen when, for example, the team member has already been deleted, or the provided team member ID is incorrect.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '2601eb7c-6569-42b0-8dc1-dac520229a19',
            code: 3006,
            message: 'User not found: 76969b71-a123-42dc-b874-a34688d7bba4',
          },
        },
      },
    },
    422: {
      description: 'Cannot modify owner',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '86d3f68c-2086-403f-8a73-cf6efb0cecd7',
            code: 3547,
            message: 'Cannot modify owner',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const putTeamMembersTeamMemberIdDepartmentRoute = createRoute({
  method: 'put',
  path: '/team-members/{team_member_id}/department',
  tags: ['Teams'],
  summary: 'Assign a department to a team member',
  description:
    'Assign a department to a specific team member.\n\nFor more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members) and [Manage departments](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-departments).',
  operationId: 'assignDepartment',
  request: {
    params: z.object({
      team_member_id: z
        .uuid()
        .openapi({
          param: {
            name: 'team_member_id',
            description: 'The ID of the team member to assign the department to.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '76969b71-a123-42dc-b874-a34688d7bba4',
            },
          },
          example: '76969b71-a123-42dc-b874-a34688d7bba4',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              department_id: z
                .uuid()
                .openapi({ description: 'The ID of the department to assign to the team member.' }),
            })
            .openapi({ required: ['department_id'] }),
          example: { department_id: '9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c' },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Department was assigned to the team member.' },
    400: {
      description: 'Bad request\n\nReturned when the specified department does not exist.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'f3ef4ce5-9248-4918-97c3-df576a2bec1d',
            code: 2101,
            message: 'Department with id 9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c not found',
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the team member that you're trying to update doesn't exist.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '2601eb7c-6569-42b0-8dc1-dac520229a19',
            code: 3006,
            message: 'Team member with id 76969b71-a123-42dc-b874-a34688d7bba4 not found',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const deleteTeamMembersTeamMemberIdDepartmentRoute = createRoute({
  method: 'delete',
  path: '/team-members/{team_member_id}/department',
  tags: ['Teams'],
  summary: 'Remove department from a team member',
  description:
    'Remove the department assignment from a specific team member.\n\nFor more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).',
  operationId: 'unassignDepartment',
  request: {
    params: z.object({
      team_member_id: z
        .uuid()
        .openapi({
          param: {
            name: 'team_member_id',
            description: 'The ID of the team member to remove the department from.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '76969b71-a123-42dc-b874-a34688d7bba4',
            },
          },
          example: '76969b71-a123-42dc-b874-a34688d7bba4',
        }),
    }),
  },
  responses: {
    204: { description: 'Department was unassigned from the team member.' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the team member that you're trying to update doesn't exist.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '2601eb7c-6569-42b0-8dc1-dac520229a19',
            code: 3006,
            message: 'Team member with id d1199d76-572f-4837-8a0b-5d527a97934b not found',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const putTeamMembersTeamMemberIdManagerRoute = createRoute({
  method: 'put',
  path: '/team-members/{team_member_id}/manager',
  tags: ['Teams'],
  summary: 'Assign a manager to a team member',
  description:
    'Assign a manager to a specific team member.\n\nFor more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).',
  operationId: 'assignManager',
  request: {
    params: z.object({
      team_member_id: z
        .uuid()
        .openapi({
          param: {
            name: 'team_member_id',
            description: 'The ID of the team member to assign the manager to.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '76969b71-a123-42dc-b874-a34688d7bba4',
            },
          },
          example: '76969b71-a123-42dc-b874-a34688d7bba4',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              manager_id: z
                .uuid()
                .openapi({ description: 'The ID of the manager to assign to the team member.' }),
            })
            .openapi({ required: ['manager_id'] }),
          example: { manager_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Manager was assigned to the team member.' },
    400: {
      description: 'Bad request\n\nReturned when the specified manager does not exist.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'e353844c-cde2-4dd6-94a4-13fab4f0d2b7',
            code: 2101,
            message: 'Manager with id a1b2c3d4-e5f6-7890-abcd-ef1234567890 not found',
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the team member that you're trying to update doesn't exist.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'dc32fe7f-4118-4f91-bbfc-7f756195b71d',
            code: 3006,
            message: 'Team member with id 76969b71-a123-42dc-b874-a34688d7bba4 not found',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const deleteTeamMembersTeamMemberIdManagerRoute = createRoute({
  method: 'delete',
  path: '/team-members/{team_member_id}/manager',
  tags: ['Teams'],
  summary: 'Remove manager from a team member',
  description:
    'Remove the manager assignment from a specific team member.\n\nFor more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).',
  operationId: 'unassignManager',
  request: {
    params: z.object({
      team_member_id: z
        .uuid()
        .openapi({
          param: {
            name: 'team_member_id',
            description: 'The ID of the team member to remove the manager from.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '76969b71-a123-42dc-b874-a34688d7bba4',
            },
          },
          example: '76969b71-a123-42dc-b874-a34688d7bba4',
        }),
    }),
  },
  responses: {
    204: { description: 'Manager was unassigned from the team member.' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the team member that you're trying to update doesn't exist.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '816b404e-9ccb-456d-a087-68e060031d74',
            code: 3006,
            message: 'Team member with id 76969b71-a123-42dc-b874-a34688d7bba4 not found',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const putTeamMembersTeamMemberIdRoleRoute = createRoute({
  method: 'put',
  path: '/team-members/{team_member_id}/role',
  tags: ['Teams'],
  summary: "Update a team member's role",
  description:
    'Update the role assigned to a specific team member.\n\n:::note\nYou cannot modify the business owner or assign the owner role to another team member.\n:::\n\nFor more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).',
  operationId: 'updateTeamMemberRole',
  request: {
    params: z.object({
      team_member_id: z
        .uuid()
        .openapi({
          param: {
            name: 'team_member_id',
            description: 'The ID of the team member whose role to update.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '76969b71-a123-42dc-b874-a34688d7bba4',
            },
          },
          example: '76969b71-a123-42dc-b874-a34688d7bba4',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              role_id: z
                .string()
                .max(40)
                .openapi({
                  description:
                    'The ID of the role to assign to the team member.\n\nFor default roles (such as `Owner`, `Admin`, `Member`), the ID is the same as the role name.\nFor custom roles, use the UUID returned by the [`GET /roles` operation](#get-roles).',
                }),
            })
            .openapi({ required: ['role_id'] }),
          example: { role_id: 'a40b6121-350b-4d2e-9ba1-9dab61a18d46' },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Role was updated.' },
    400: {
      description:
        'Bad request\n\nReturned when the specified role ID does not exist or does not belong to this business.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '87524a16-6cb3-4f76-9535-133ebfc68134',
            code: 2101,
            message: 'Role with id a40b6121-350b-4d2e-9ba1-9dab61a18d46 not found',
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the team member that you're trying to update doesn't exist.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'f4df1fa0-9582-44f1-bd07-d63ef2cce9a7',
            code: 3006,
            message: 'Team member with id 76969b71-a123-42dc-b874-a34688d7bba4 not found',
          },
        },
      },
    },
    422: {
      description:
        "Cannot modify owner\n\nReturned when you're trying to modify the business owner or assign the owner role to another team member.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '86d3f68c-2086-403f-8a73-cf6efb0cecd7',
            code: 3547,
            message: 'Cannot modify owner',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const postTeamMembersTeamMemberIdSuspendRoute = createRoute({
  method: 'post',
  path: '/team-members/{team_member_id}/suspend',
  tags: ['Teams'],
  summary: 'Suspend a team member',
  description:
    'Suspend a specific team member, preventing them from accessing the business.\n\nTo restore access, use the [Unsuspend a team member](#unsuspend-a-team-member) operation.\n\n:::note\nYou cannot suspend the business owner.\n:::\n\nFor more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).',
  operationId: 'suspendTeamMember',
  request: {
    params: z.object({
      team_member_id: z
        .uuid()
        .openapi({
          param: {
            name: 'team_member_id',
            description: 'The ID of the team member to suspend.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '76969b71-a123-42dc-b874-a34688d7bba4',
            },
          },
          example: '76969b71-a123-42dc-b874-a34688d7bba4',
        }),
    }),
  },
  responses: {
    204: { description: 'Team member was suspended.' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the team member that you're trying to suspend doesn't exist.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '0d493577-2918-4de0-8484-414d87ed7c17',
            code: 3006,
            message: 'Team member with id 76969b71-a123-42dc-b874-a34688d7bba4 not found',
          },
        },
      },
    },
    422: {
      description:
        "Unprocessable entity\n\nReturned when:\n- You're trying to suspend the business owner.\n- The team member has a pending invitation (they haven't accepted it yet).",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            cannot_suspend_owner: {
              summary: 'Cannot suspend owner',
              value: {
                error_id: '5e830574-32db-4854-b17d-7c3fbc2db11d',
                code: 3547,
                message: 'Cannot modify owner',
              },
            },
            member_pending_invitation: {
              summary: 'Member has a pending invitation',
              value: {
                error_id: '7a1e2f3b-4c5d-6e7f-8a9b-0c1d2e3f4a5b',
                code: 3100,
                message: 'Invalid request',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const postTeamMembersTeamMemberIdUnsuspendRoute = createRoute({
  method: 'post',
  path: '/team-members/{team_member_id}/unsuspend',
  tags: ['Teams'],
  summary: 'Unsuspend a team member',
  description:
    'Unsuspend a [suspended](#suspend-a-team-member) team member, restoring their access to the business.\n\n:::note\nYou cannot unsuspend the business owner (the owner cannot be suspended).\n:::\n\nFor more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).',
  operationId: 'unsuspendTeamMember',
  request: {
    params: z.object({
      team_member_id: z
        .uuid()
        .openapi({
          param: {
            name: 'team_member_id',
            description: 'The ID of the team member to unsuspend.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '76969b71-a123-42dc-b874-a34688d7bba4',
            },
          },
          example: '76969b71-a123-42dc-b874-a34688d7bba4',
        }),
    }),
  },
  responses: {
    204: { description: 'Team member was unsuspended.' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the team member that you're trying to unsuspend doesn't exist.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '4686c3a2-8b42-42a3-b6d8-23448696b36b',
            code: 3006,
            message: 'Team member with id 76969b71-a123-42dc-b874-a34688d7bba4 not found',
          },
        },
      },
    },
    422: {
      description:
        "Unprocessable entity\n\nReturned when:\n- You're trying to unsuspend the business owner (the owner cannot be suspended).\n- The team member has a pending invitation (they haven't accepted it yet).",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            cannot_unsuspend_owner: {
              summary: 'Cannot unsuspend owner',
              value: {
                error_id: '89030a00-0aaf-4f8e-b578-f1ca62062c08',
                code: 3547,
                message: 'Cannot modify owner',
              },
            },
            member_pending_invitation: {
              summary: 'Member has a pending invitation',
              value: {
                error_id: '9b2f3g4c-5d6e-7f8a-9b0c-1d2e3f4a5b6c',
                code: 3100,
                message: 'Invalid request',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getRolesRoute = createRoute({
  method: 'get',
  path: '/roles',
  tags: ['Teams'],
  summary: 'Retrieve team roles',
  description:
    'Get the list of roles for your business.\n\nThe results are paginated and sorted by the `created_at` date in reverse chronological order.\n\nFor more information, see the guides: [Manage team members](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-team-members).',
  operationId: 'getRoles',
  request: {
    query: z.object({
      created_before: z.iso
        .datetime({ offset: true })
        .default('the date-time at which the request is made')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'created_before',
            schema: {
              type: 'string',
              format: 'date-time',
              default: 'the date-time at which the request is made',
            },
            description:
              'Retrieves roles with `created_at` < `created_before`.\nThe default value is the current date and time at which you are calling the endpoint.\n\nProvided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of roles returned per page.\n\nTo get to the next page, make a new request and use the `created_at` date of the last role returned in the previous response as the value for `created_before`.',
            schema: { type: 'number', format: 'integer', default: 100, maximum: 1000, minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Information about roles of the business',
      content: {
        'application/json': {
          schema: z.array(RoleSchema),
          example: [
            {
              id: 'owner',
              name: 'Owner',
              created_at: '2023-09-07T09:21:12.962303Z',
              updated_at: '2023-09-07T09:21:12.962303Z',
            },
            {
              id: 'member',
              name: 'Member',
              created_at: '2023-09-07T09:21:12.962303Z',
              updated_at: '2023-09-07T09:21:12.962303Z',
            },
            {
              id: 'viewer',
              name: 'Viewer',
              created_at: '2023-09-07T09:21:12.962303Z',
              updated_at: '2023-09-07T09:21:12.962303Z',
            },
            {
              id: 'a40b6121-350b-4d2e-9ba1-9dab61a18d46',
              name: 'Example custom role',
              created_at: '2023-09-07T09:21:12.963143Z',
              updated_at: '2023-09-07T09:21:12.963143Z',
            },
          ],
        },
      },
    },
    400: {
      description: 'Bad pagination parameters',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'ec4bef87-0141-4b5e-aca8-724988661e0e',
            code: 2101,
            message: "Query parameter 'limit' must be at most 1000",
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const getDepartmentsRoute = createRoute({
  method: 'get',
  path: '/departments',
  tags: ['Teams'],
  summary: 'Retrieve a list of departments',
  description:
    'Get a paginated list of all departments in your business.\n\nFor more information, see the guides: [Manage departments](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-departments).',
  operationId: 'getDepartments',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number().min(1).max(500),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: false,
            description:
              'The maximum number of departments returned per page.\n\nTo get to the next page, use the `next_page_token` from the previous response.',
            schema: { type: 'number', format: 'integer', default: 100, maximum: 500, minimum: 1 },
          },
        }),
      page_token: PageTokenParamsSchema,
    }),
  },
  responses: {
    200: {
      description: 'A paginated list of departments.',
      content: {
        'application/json': {
          schema: z
            .object({
              departments: z.array(DepartmentSchema),
              next_page_token: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Token to fetch the next page.\n\nOmitted when there are no more results.',
                }),
            })
            .openapi({ required: ['departments'] }),
          example: {
            departments: [
              {
                id: '9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c',
                name: 'Engineering',
                created_at: '2026-06-15T10:30:00.000000Z',
                updated_at: '2026-06-15T10:30:00.000000Z',
              },
              {
                id: 'c4d5e6f7-8a9b-0c1d-2e3f-4a5b6c7d8e9f',
                name: 'Finance',
                created_at: '2026-06-15T10:31:00.000000Z',
                updated_at: '2026-06-15T10:31:00.000000Z',
              },
            ],
            next_page_token: 'eyJwYWdlIjoyfQ',
          },
        },
      },
    },
    400: {
      description:
        'Bad pagination parameters\n\nReturned when the pagination parameters are invalid.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            limit_not_integer: {
              summary: 'Limit is not an integer',
              value: {
                error_id: 'c2b74bf6-56b6-4d3d-92b3-0d2c5642be39',
                code: 2101,
                message: "Query parameter 'limit' must be an integer",
              },
            },
            limit_exceeds_max: {
              summary: 'Limit exceeds maximum',
              value: {
                error_id: 'd3c85c07-67c7-5e4e-a3c4-1e3d67543cf5',
                code: 2101,
                message: "Query parameter 'limit' must be at most 500",
              },
            },
            invalid_page_token: {
              summary: 'Invalid page token',
              value: {
                error_id: 'e4d96d18-78d8-6f5f-b4d5-2f4e78654da6',
                code: 2101,
                message:
                  "Query parameter 'page_token' is invalid. Use a value from a previous response's next_page_token field.",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const postDepartmentsRoute = createRoute({
  method: 'post',
  path: '/departments',
  tags: ['Teams'],
  summary: 'Create a department',
  description:
    'Create a new department in your business.\n\nFor more information, see the guides: [Manage departments](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-departments).',
  operationId: 'createDepartment',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().max(100).openapi({ description: 'The name of the department.' }),
            })
            .openapi({ required: ['name'] }),
          example: { name: 'Engineering' },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Department created.',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.uuid().openapi({ description: 'The ID of the created department.' }) })
            .openapi({ required: ['id'] }),
          example: { id: '9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c' },
        },
      },
    },
    400: {
      description:
        'Bad request\n\nReturned when the request body is invalid.\nFor example, when the `name` field is missing or exceeds 100 characters.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            name_missing: {
              summary: 'Name is required',
              value: {
                error_id: 'aa1c8231-f10a-4256-93b6-f540ef6eba01',
                code: 2101,
                message: "'name' is required",
              },
            },
            name_too_long: {
              summary: 'Name exceeds 100 characters',
              value: {
                error_id: 'b8f2a103-2c34-4d5e-9f6a-7b8c9d0e1f2a',
                code: 2101,
                message: "'name' must be at most 100 characters",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    409: {
      description: 'Conflict\n\nReturned when a department with the given name already exists.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '46a05085-ac3f-4a0c-bf37-204c0d645bde',
            code: 3406,
            message: 'Department with this name already exists',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getDepartmentsDepartmentIdRoute = createRoute({
  method: 'get',
  path: '/departments/{department_id}',
  tags: ['Teams'],
  summary: 'Retrieve a department',
  description:
    'Get details of a specific department by its ID.\n\nFor more information, see the guides: [Manage departments](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-departments).',
  operationId: 'getDepartment',
  request: {
    params: z.object({
      department_id: z
        .uuid()
        .openapi({
          param: {
            name: 'department_id',
            description: 'The ID of the department to retrieve.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c',
            },
          },
          example: '9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Information about the department.',
      content: {
        'application/json': {
          schema: DepartmentSchema,
          example: {
            id: '9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c',
            name: 'Engineering',
            created_at: '2026-06-15T10:30:00.000000Z',
            updated_at: '2026-06-15T10:30:00.000000Z',
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the department that you're trying to retrieve doesn't exist.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'd5d7a8a7-d967-4a69-8359-892b1ce22157',
            code: 3006,
            message: 'Department with id 9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c not found',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const deleteDepartmentsDepartmentIdRoute = createRoute({
  method: 'delete',
  path: '/departments/{department_id}',
  tags: ['Teams'],
  summary: 'Delete a department',
  description:
    'Delete a specific department from your business.\n\n:::note\nDeleting a department does not delete the team members assigned to it.\nThe department assignment is simply removed from the team members.\n:::\n\nFor more information, see the guides: [Manage departments](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-departments).',
  operationId: 'deleteDepartment',
  request: {
    params: z.object({
      department_id: z
        .uuid()
        .openapi({
          param: {
            name: 'department_id',
            description: 'The ID of the department to delete.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c',
            },
          },
          example: '9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c',
        }),
    }),
  },
  responses: {
    204: { description: 'Department was deleted.' },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the department that you're trying to delete doesn't exist.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: 'f3b8f47d-2e34-4205-a5fb-64d219ba13d6',
            code: 3006,
            message: 'Department with id 9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c not found',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const patchDepartmentsDepartmentIdRoute = createRoute({
  method: 'patch',
  path: '/departments/{department_id}',
  tags: ['Teams'],
  summary: 'Update a department',
  description:
    'Update the name of a specific department.\n\nFor more information, see the guides: [Manage departments](https://developer.revolut.com/docs/guides/manage-accounts/teams/manage-departments).',
  operationId: 'updateDepartment',
  request: {
    params: z.object({
      department_id: z
        .uuid()
        .openapi({
          param: {
            name: 'department_id',
            description: 'The ID of the department to update.',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
              format: 'uuid',
              example: '9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c',
            },
          },
          example: '9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .max(100)
                .openapi({ description: 'The new name for the department.' }),
            })
            .openapi({ required: ['name'] }),
          example: { name: 'Platform Engineering' },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Department was updated.' },
    400: {
      description:
        'Bad request\n\nReturned when the request body is invalid.\nFor example, when the `name` field is missing or exceeds 100 characters.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            name_missing: {
              summary: 'Name is required',
              value: {
                error_id: 'c9d3b204-3d45-4e6f-0a7b-8c9d0e1f2a3b',
                code: 2101,
                message: "'name' is required",
              },
            },
            name_too_long: {
              summary: 'Name exceeds 100 characters',
              value: {
                error_id: 'd0e4c305-4e56-4f7a-1b8c-9d0e1f2a3b4c',
                code: 2101,
                message: "'name' must be at most 100 characters",
              },
            },
          },
        },
      },
    },
    401: UnauthorizedResponse,
    403: ForbiddenResponse,
    404: {
      description:
        "Not found\n\nReturned when the department that you're trying to update doesn't exist.",
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '994fcef2-cb26-4c6a-8f2f-d784d9cf5097',
            code: 3006,
            message: 'Department with id 9b3f7a2c-1d4e-4f5b-8a6c-7d8e9f0a1b2c not found',
          },
        },
      },
    },
    409: {
      description: 'Conflict\n\nReturned when a department with the given name already exists.',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          example: {
            error_id: '0ce741cc-48e5-43ae-aada-44aa07f44e67',
            code: 3406,
            message: 'Department with this name already exists',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getTransactionsRoute = createRoute({
  method: 'get',
  path: '/transactions',
  tags: ['Transactions'],
  summary: 'Retrieve a list of transactions',
  description:
    "Retrieve the historical transactions based on the provided query criteria.\n\nThe transactions are sorted by the `created_at` date in reverse chronological order, and they're **paginated**. \nThe maximum number of transactions returned per page is specified by the `count` parameter. \nTo get the next page of results, make a new request and use the `created_at` date from the last item of the previous page as the value for the `to` parameter.\n\n:::note\nThe API returns a maximum of 1,000 transactions per request.\n:::\n\nFor more details, see the guides: [Retrieve transactions](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-transactions).",
  operationId: 'getTransactions',
  request: {
    query: z.object({
      from: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'from',
            schema: { type: 'string', format: 'date-time or date' },
            description:
              'The date and time you retrieve the historical transactions from, including this date-time.\nCorresponds to the `created_at` value of the transaction.\nProvided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.\n\nUsed also for pagination.\nTo get back to the previous page of results, make a new request and use the `created_at` date from the first item of the current page as the value for the `from` parameter.',
            required: false,
          },
        }),
      to: z
        .string()
        .default('the date-time at which the request is made')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'to',
            schema: {
              type: 'string',
              format: 'date-time or date',
              default: 'the date-time at which the request is made',
            },
            description:
              "The date and time you retrieve the historical transactions to, excluding this date-time. \nCorresponds to the `created_at` value of the transaction.\nProvided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.\nThe default value is the date and time at which you're calling the endpoint.\n\nUsed also for pagination.\nTo get the next page of results, make a new request and use the `created_at` date from the last item of the previous (current) page as the value for the `to` parameter.",
            required: false,
          },
        }),
      account: z
        .uuid()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'account',
            schema: { type: 'string', format: 'uuid' },
            description: 'The ID of the account',
            required: false,
          },
        }),
      count: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'count',
            schema: { type: 'integer', default: 100, maximum: 1000 },
            description:
              'The maximum number of the historical transactions to retrieve per page.\n\nTo get the next page of results, make a new request and use the `created_at` date from the last item of the previous page as the value for the `to` parameter.',
            required: false,
          },
        }),
      type: TransactionTypeSchema.openapi({
        param: {
          in: 'query',
          name: 'type',
          schema: { $ref: '#/components/schemas/TransactionType' },
          description: 'The type of the historical transactions to retrieve.',
          required: false,
        },
      }).exactOptional(),
      request_id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'request_id',
            schema: { type: 'string', example: 'invoice00912345' },
            description:
              'The request ID provided when the transaction was created.\nLets you filter transactions related to that ID.\n\nWhen provided, the `from` query parameter is also required, and the search interval must not exceed 14 days.\nFor older transactions, adjust the `to` parameter as well.',
            required: false,
          },
          example: 'invoice00912345',
        }),
      state: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['created', 'pending', 'completed', 'declined', 'failed', 'reverted'])),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'state',
            schema: {
              type: 'array',
              items: {
                type: 'string',
                enum: ['created', 'pending', 'completed', 'declined', 'failed', 'reverted'],
              },
            },
            description:
              'The transaction [state(s)](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-transactions#transaction-states) to filter by.\n\nTo specify multiple values, follow this pattern: `state={VALUE1}&state={VALUE2}`.',
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of historical transactions retrieved',
      content: {
        'application/json': {
          schema: TransactionsSchema,
          example: [
            {
              id: '630f9890-95e3-add1-be4a-95f126988221',
              type: 'transfer',
              state: 'pending',
              request_id: 'invoice00912345',
              created_at: '2024-08-31T17:21:20.364171Z',
              updated_at: '2024-08-31T17:21:20.364171Z',
              reference: 'invoice00912345',
              legs: [
                {
                  leg_id: '630f9890-95e3-add1-0000-95f1269f0000',
                  account_id: '812fff9a-3b0c-4ad1-b41a-cc60899d9900',
                  counterparty: {
                    account_type: 'revolut',
                    account_id: 'e0af9f24-504c-4c5d-bd1d-07edf9f49876',
                  },
                  amount: -1.16,
                  currency: 'EUR',
                  bill_amount: -1,
                  bill_currency: 'GBP',
                  description: 'To John Doe',
                },
              ],
            },
            {
              id: '640c2b97-aaaa-1234-aaaa-c47a165c2e7e',
              type: 'card_payment',
              state: 'completed',
              request_id: 'REVP:8988a9a0-aaaa-1234-aaaa-5bcc66d938bf',
              created_at: '2024-03-11T07:19:51.302559Z',
              updated_at: '2024-03-12T02:13:36.842322Z',
              completed_at: '2024-03-12T02:13:36.836595Z',
              merchant: {
                name: 'Acme Corp.',
                full_name: 'ACME*1234MN1HA2',
                city: 'New York',
                category_code: '7311',
                country: 'USA',
              },
              legs: [
                {
                  leg_id: '640c2b97-aaaa-1234-aaaa-c47a165c2e7e',
                  account_id: '92e43866-aaaa-1234-aaaa-6e31dd23f024',
                  amount: -47.8,
                  fee: 0.66,
                  currency: 'AED',
                  bill_amount: -13,
                  bill_currency: 'USD',
                  description: 'Acm *1234mn1ha2',
                  balance: 7.74,
                },
              ],
              card: {
                id: '2b1a31bc-4795-4f95-b939-ae9cf911dc6e',
                card_number: '516760******1234',
                first_name: 'John',
                last_name: 'Smith',
                phone: '+12412341234',
              },
              auth_code: '224466',
            },
            {
              id: '6886001b-c4a4-4920-912b-c9d7d2575bf7',
              type: 'card_payment',
              state: 'completed',
              request_id: 'REVP:5b3dc80d-f77b-4073-b245-d05f0acd348f',
              created_at: '2025-09-11T07:19:51.302559Z',
              updated_at: '2025-09-12T02:13:36.842322Z',
              completed_at: '2025-03-12T02:13:36.836595Z',
              merchant: { name: 'Alfa', city: 'Paris', category_code: '7311', country: 'FRA' },
              legs: [
                {
                  leg_id: '0e82681d-10db-40b7-b6c8-f99c595f1c82',
                  account_id: '5e85a129-74c9-4714-bbd2-d762b42b15fb',
                  amount: -153.32,
                  fee: 0,
                  currency: 'EUR',
                  description: 'Al 1234abcxyz0',
                  balance: 3210.43,
                },
              ],
              card: {
                id: '12d6d4c2-288b-4670-8297-444720bd811b',
                card_number: '456230******1433',
                references: [
                  { name: 'PNR', value: 'RT12345' },
                  { name: 'Traveller', value: 'John Smith' },
                ],
              },
              auth_code: '224466',
            },
          ],
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const getTransactionIdRoute = createRoute({
  method: 'get',
  path: '/transaction/{id}',
  tags: ['Transactions'],
  summary: 'Retrieve a transaction',
  description:
    "Retrieve the details of a specific transaction by the transaction's ID.\nThe details can include, for example, cardholder details for card payments.\n\n:::tip [Retrieve by request_id instead]\nAlternatively, you can retrieve a transaction by the **request ID** that was provided for this transaction at the time of its creation, for example, when you [created a payment](https://developer.revolut.com/docs/api/business#create-payment).\n\nTo do that, use the `GET /transactions` endpoint to [retrieve a list of transactions](https://developer.revolut.com/docs/api/business#get-transactions) and provide the `request_id` and appropriate `from`/`to` values as filters.\n:::\n\nFor more details, see the guides: [Retrieve transactions](https://developer.revolut.com/docs/guides/manage-accounts/accounts-and-transactions/retrieve-transactions).",
  operationId: 'getTransaction',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            required: true,
            description:
              'The unique ID of the transaction.\n\n:::warning [Request ID deprecation]\nIf `id_type=request_id` is provided, set this field to the request ID from payment creation instead of the transaction ID.\n\nThis behavior is deprecated and will be removed in a future release.\nUse [`GET /transactions`](https://developer.revolut.com/docs/api/business#get-transactions) to retrieve transactions by request ID.\n:::',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      id_type: z
        .literal('request_id')
        .exactOptional()
        .openapi({
          param: {
            name: 'id_type',
            in: 'query',
            required: false,
            deprecated: true,
            description:
              'The type of ID to retrieve the transaction by.\n\n:::warning [Deprecated]\nThis field is now deprecated and will be removed in a future release.\n\nTo retrieve transactions by their unique transaction ID, use this endpoint.\nTo retrieve transactions by request ID, use the [`GET /transactions`](https://developer.revolut.com/docs/api/business#get-transactions) endpoint instead.\n:::',
            schema: { enum: ['request_id'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The information about a specific transaction',
      content: {
        'application/json': {
          schema: TransactionSchema,
          examples: {
            exchange: {
              summary: 'Exchange',
              value: {
                id: '640dc0b7-1234-aaaa-1234-92ac4de1dacd',
                type: 'exchange',
                state: 'completed',
                request_id: 'd8f041ab-1234-aaaa-1234-78b6a0b2801f',
                created_at: '2023-03-12T12:08:07.833414Z',
                updated_at: '2023-03-12T12:08:07.833414Z',
                completed_at: '2023-03-12T12:08:07.833705Z',
                legs: [
                  {
                    leg_id: '640dc0a7-aaaa-a5b5-aaaa-92ac4de1dacd',
                    account_id: '0d1848dc-aaaa-4a9a-aaaa-cae53cbd4baf',
                    amount: -1,
                    currency: 'GBP',
                    bill_amount: -8.39,
                    bill_currency: 'DKK',
                    description: 'Exchanged to DKK',
                    balance: 8.74,
                  },
                  {
                    leg_id: '640dc0a7-aaaa-a5b5-aaaa-92ac4de1dacd',
                    account_id: '246bc9de-aaaa-4f86-aaaa-4d291a5d0390',
                    amount: 8.39,
                    fee: 0.08,
                    currency: 'DKK',
                    description: 'Exchanged from GBP Main',
                    balance: 19.33,
                  },
                ],
              },
            },
            card_payment: {
              summary: 'Card payment',
              value: {
                id: '640c2b97-aaaa-1234-aaaa-c47a165c2e7e',
                type: 'card_payment',
                state: 'completed',
                request_id: 'REVP:8988a9a0-aaaa-1234-aaaa-5bcc66d938bf',
                created_at: '2023-03-11T07:19:51.302559Z',
                updated_at: '2023-03-12T02:13:36.842322Z',
                completed_at: '2023-03-12T02:13:36.836595Z',
                merchant: {
                  name: 'Acme Corp.',
                  full_name: 'ACME*1234MN1HA2',
                  city: 'New York',
                  category_code: '7311',
                  country: 'USA',
                },
                legs: [
                  {
                    leg_id: '640c2b97-aaaa-1234-aaaa-c47a165c2e7e',
                    account_id: '92e43866-aaaa-1234-aaaa-6e31dd23f024',
                    amount: -47.8,
                    fee: 0.66,
                    currency: 'AED',
                    bill_amount: -13,
                    bill_currency: 'USD',
                    description: 'Acm *1234mn1ha2',
                    balance: 7.74,
                  },
                ],
                card: {
                  id: '2b1a31bc-4795-4f95-b939-ae9cf911dc6e',
                  card_number: '516760******1234',
                  first_name: 'John',
                  last_name: 'Smith',
                  phone: '+12412341234',
                },
                auth_code: '224466',
              },
            },
            company_card_payment: {
              summary: 'Payment by card with no holder',
              value: {
                id: '6886001b-c4a4-4920-912b-c9d7d2575bf7',
                type: 'card_payment',
                state: 'completed',
                request_id: 'REVP:5b3dc80d-f77b-4073-b245-d05f0acd348f',
                created_at: '2025-09-11T07:19:51.302559Z',
                updated_at: '2025-09-12T02:13:36.842322Z',
                completed_at: '2025-03-12T02:13:36.836595Z',
                merchant: { name: 'Alfa', city: 'Paris', category_code: '7311', country: 'FRA' },
                legs: [
                  {
                    leg_id: '0e82681d-10db-40b7-b6c8-f99c595f1c82',
                    account_id: '5e85a129-74c9-4714-bbd2-d762b42b15fb',
                    amount: -153.32,
                    fee: 0,
                    currency: 'EUR',
                    description: 'Al 1234abcxyz0',
                    balance: 3210.43,
                  },
                ],
                card: {
                  id: '12d6d4c2-288b-4670-8297-444720bd811b',
                  card_number: '456230******1433',
                  references: [
                    { name: 'PNR', value: 'RT12345' },
                    { name: 'Traveller', value: 'John Smith' },
                  ],
                },
                auth_code: '224466',
              },
            },
            outbound_transfer: {
              summary: 'Outbound transfer',
              value: {
                id: '640c1963-aaaa-1234-aaaa-a6b451197c6a',
                type: 'transfer',
                state: 'completed',
                request_id: '8cc6f5db-aaaa-1234-aaaa-068a05af424e',
                created_at: '2023-03-11T06:02:11.785704Z',
                updated_at: '2023-03-11T06:02:14.628964Z',
                completed_at: '2023-03-11T06:02:14.624946Z',
                reference: 'Reference example',
                legs: [
                  {
                    leg_id: '640c1963-aaaa-1234-aaaa-a6b451197c6a',
                    account_id: '0d1848dc-aaaa-1234-aaaa-cae53cbd4baf',
                    counterparty: {
                      id: 'f5a9a06b-aaaa-1234-aaaa-c51df843e30d',
                      account_type: 'external',
                      account_id: '25c9d813-aaaa-1234-aaaa-28334fc4d133',
                    },
                    amount: -100,
                    fee: 0.1,
                    currency: 'GBP',
                    description: 'To John Smith',
                    balance: 9.74,
                  },
                ],
              },
            },
            inbound_transfer: {
              summary: 'Inbound transfer',
              value: {
                id: '63f3a305-aaaa-1234-aaaa-54f06420ae58',
                type: 'transfer',
                state: 'completed',
                request_id: '7d3a3358-aaaa-1234-aaaa-c332c49b6431',
                created_at: '2023-02-20T16:42:45.897576Z',
                updated_at: '2023-02-20T16:42:45.897576Z',
                completed_at: '2023-02-20T16:42:45.897845Z',
                reference: 'Reference 1234',
                legs: [
                  {
                    leg_id: '63f3a305-aaaa-1234-aaaa-54f06420ae58',
                    account_id: '74d4d6cb-aaaa-1234-aaaa-9604b94e3019',
                    counterparty: { account_type: 'revolut' },
                    amount: 10,
                    currency: 'GBP',
                    description: 'From JOHN SMITH',
                    balance: 3.7,
                  },
                ],
              },
            },
            internal_transfer: {
              summary: 'Internal transfer',
              value: {
                id: '640b4fbf-aaaa-1234-aaaa-17a2d10142af',
                type: 'transfer',
                state: 'completed',
                request_id: 'f8bbea44-aaaa-1234-aaaa-113df56660f7',
                created_at: '2023-03-10T15:41:51.304765Z',
                updated_at: '2023-03-10T15:41:51.395348Z',
                completed_at: '2023-03-10T15:41:51.388279Z',
                legs: [
                  {
                    leg_id: '640b4fbf-aaaa-1234-aaaa-17a2d10142af',
                    account_id: '0d1848dc-aaaa-1234-aaaa-cae53cbd4baf',
                    amount: 100,
                    currency: 'GBP',
                    description: 'To GBP Deposit pocket',
                    balance: 100.84,
                  },
                  {
                    leg_id: '640b4fbf-aaaa-1234-aaaa-17a2d10142af',
                    account_id: '87f2f697-aaaa-1234-aaaa-a20c78c0d24f',
                    amount: 100,
                    currency: 'GBP',
                    description: 'From GBP Regular pocket',
                    balance: 100.65,
                  },
                ],
              },
            },
            atm_withdrawal: {
              summary: 'ATM withdrawal',
              value: {
                id: '62d5161d-aaaa-1234-aaaa-219f88258175',
                type: 'atm',
                state: 'completed',
                request_id: 'REVP:b46e51ca-aaaa-1234-aaaa-e54321796ff0',
                created_at: '2022-07-18T08:13:17.025950Z',
                updated_at: '2022-07-19T16:21:22.521625Z',
                completed_at: '2022-07-19T16:21:22.515565Z',
                merchant: {
                  name: 'Barclays',
                  full_name: 'BARCLAYS*ATM*CANARYWHARF',
                  city: 'Canary Wharf',
                  category_code: '6011',
                  country: 'GBR',
                },
                legs: [
                  {
                    leg_id: 'c84cec91-aaaa-1234-aaaa-62d1979dcf3a',
                    account_id: 'dbd3c68b-aaaa-1234-aaaa-5621a117ecbf',
                    amount: -21.22,
                    fee: 0.48,
                    currency: 'GBP',
                    bill_amount: -25,
                    bill_currency: 'EUR',
                    description: 'Cash at Barclays',
                    balance: 9.9,
                  },
                ],
                card: {
                  id: '2b1a31bc-4795-4f95-b939-ae9cf911dc6e',
                  card_number: '516760******1234',
                  first_name: 'John',
                  last_name: 'Smith',
                  phone: '+447712341234',
                },
              },
            },
            top_up: {
              summary: 'Top up',
              value: {
                id: '63c95e75-aaaa-1234-aaaa-4e7a7768c663',
                type: 'topup',
                state: 'completed',
                request_id: '9d4d90c5-aaaa-1234-aaaa-ac65bf589532',
                created_at: '2023-01-19T15:15:01.895737Z',
                updated_at: '2023-01-19T15:16:14.839234Z',
                completed_at: '2023-01-19T15:16:14.833964Z',
                reference: 'Top up Revolut account',
                legs: [
                  {
                    leg_id: '63c95e75-aaaa-1234-aaaa-4e7a7768c663',
                    account_id: '6ce35350-aaaa-1234-aaaa-006d3f739b80',
                    amount: 100,
                    currency: 'EUR',
                    description: 'Payment from John Smith',
                    balance: 1,
                  },
                ],
              },
            },
            card_chargeback: {
              summary: 'Card chargeback',
              value: {
                id: '6409e928-aaaa-1234-aaaa-872a41309af1',
                type: 'card_chargeback',
                state: 'completed',
                request_id: 'CARD_CHARGEBACK_eabeb099-aaaa-1234-aaaa-ce72583866bb_0',
                created_at: '2023-03-09T14:11:52.453528Z',
                updated_at: '2023-03-09T14:11:52.453528Z',
                completed_at: '2023-03-09T14:11:52.453740Z',
                legs: [
                  {
                    leg_id: '6409e928-aaaa-1234-aaaa-872a41309af1',
                    account_id: '0d1848dc-aaaa-1234-aaaa-cae53cbd4baf',
                    amount: 4.68,
                    currency: 'GBP',
                    description: 'Card chargeback for Rev*www.revolut.com',
                    balance: 13.08,
                  },
                ],
              },
            },
            refund: {
              summary: 'Refund',
              value: {
                id: '172884ea-a529-4d5f-8a81-8ebab9f23e33',
                type: 'refund',
                state: 'completed',
                request_id: '79fb7626-df83-46eb-b89a-b31b1e1ae2d7',
                created_at: '2024-03-17T06:05:10.575740Z',
                updated_at: '2024-03-17T06:05:10.575740Z',
                completed_at: '2024-03-17T06:05:10.575740Z',
                related_transaction_id: '640c1963-aaaa-1234-aaaa-a6b451197c6a',
                legs: [
                  {
                    leg_id: '172884ea-a529-4d5f-8a81-8ebab9f23e33',
                    account_id: '74d4d6cb-aaaa-1234-aaaa-9604b94e3019',
                    amount: 100,
                    currency: 'GBP',
                    description: 'A sample refund description',
                    balance: 109.74,
                  },
                ],
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const postPayRoute = createRoute({
  method: 'post',
  path: '/pay',
  tags: ['Transfers'],
  summary: 'Create a transfer to another account or card',
  description:
    'Make a payment to a counterparty. You can choose either a bank transfer or a card transfer. The resulting transaction has the type `transfer`.\n\nIf you make the payment to another Revolut account, either business or personal, the transaction is executed instantly.\n\nIf the counterparty has multiple payment methods available, for example, 2 accounts, or 1 account and 1 card, you **must specify the account or card** to which you want to transfer the money (`receiver.account_id` or `receiver.card_id` respectively).\n\nFor more details, see the guides: [Send money via bank transfer](https://developer.revolut.com/docs/guides/manage-accounts/transfers/bank-transfers) and [Card transfers](https://developer.revolut.com/docs/guides/manage-accounts/transfers/card-transfers).',
  operationId: 'createPayment',
  request: {
    body: {
      description: 'Create a transfer',
      content: {
        'application/json': {
          schema: TransactionPaymentRequestSchema,
          examples: {
            generic_transfer: {
              summary: 'Bank transfer',
              value: {
                request_id: 'A1pH4num3ric',
                account_id: 'af98333c-ea53-482b-93c2-1fa5e4eae671',
                receiver: {
                  counterparty_id: '49c6a48b-6b58-40a0-b974-0b8c4888c8a7',
                  account_id: '9116f03a-c074-4585-b261-18a706b3768b',
                },
                amount: 10,
                charge_bearer: 'shared',
                currency: 'EUR',
                reference: 'To John Doe',
              },
            },
            transfer_to_card_p2c: {
              summary: 'Card transfer',
              value: {
                request_id: 'A1pH4num3ric',
                account_id: 'af98333c-ea53-482b-93c2-1fa5e4eae671',
                receiver: { counterparty_id: '1099791d-8980-401f-8417-b9d66eeb6d93' },
                amount: 15,
                currency: 'EUR',
                reference: 'To John Doe',
              },
            },
            transfer_with_reason_code: {
              summary: 'Transfer with reason code',
              value: {
                request_id: 'A1pH4num3ric',
                account_id: 'f2efd687-1084-45a6-ace6-8abc1352f0d3',
                receiver: {
                  counterparty_id: '03153735-d49c-4f8b-ac42-1fe40aeb4167',
                  account_id: '8b9eff51-2bd1-4ce2-9974-b87385092e3e',
                },
                amount: 2500,
                currency: 'INR',
                charge_bearer: 'shared',
                reference: 'To John Doe',
                transfer_reason_code: 'advertising',
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
      description: 'The information about the created transfer',
      content: {
        'application/json': {
          schema: TransferResponseSchema,
          examples: {
            pending: {
              summary: 'Pending transfer',
              value: {
                id: '630f9a62-e488-a9ce-a2d3-a30kkkke03f0',
                state: 'pending',
                created_at: '2022-08-31T17:29:06.625613Z',
              },
            },
            completed: {
              summary: 'Completed transfer',
              value: {
                id: '630f9a62-e488-a9ce-a2d3-a30kkkke03f0',
                state: 'completed',
                created_at: '2022-08-31T17:29:06.625613Z',
                completed_at: '2022-09-01T17:29:06.625613Z',
              },
            },
          },
        },
      },
    },
    400: {
      description:
        'Bad request\n\nFor example:\n- a duplicate `request_id` is being used\n- the specified `charge_bearer` is not supported\n- the exchange reason is required and `exchange_reason_code` is missing\n- the transfer reason is required and `transfer_reason_code` is missing',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            duplicate_request: {
              summary: 'Duplicate request_id',
              value: {
                code: 3020,
                message: 'Duplicate request: 1f0f3850-9627-42de-8ad4-a2c497c37d0b',
              },
            },
            unsupported_charge_bearer: {
              summary: 'Unsupported charge_bearer',
              value: {
                code: 3287,
                message: "Specified 'charge_bearer' is not supported for this transaction.",
              },
            },
            missing_exchange_reason_code: {
              summary: 'Missing exchange_reason_code',
              value: { code: 3448, message: 'Exchange reason is required' },
            },
            missing_transfer_reason_code: {
              summary: 'Missing transfer_reason_code',
              value: { code: 4100, message: 'Please provide a reason for the transaction.' },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ', 'PAY'] }],
})

export const postPayIndicativeQuoteRoute = createRoute({
  method: 'post',
  path: '/pay/indicative-quote',
  tags: ['Transfers'],
  summary: 'Get an indicative quote for a transfer',
  description:
    'Get a non-binding estimate of fees, the exchange rate, and the expected delivery time for a potential [transfer](https://developer.revolut.com/docs/api/business#create-payment).\nNo money is moved and no resource is created.\n\nThe request mirrors the [`/pay` endpoint](https://developer.revolut.com/docs/api/business#create-payment) that is used to initiate a transfer, but it excludes irrelevant fields that do not affect pricing or delivery time, such as the request ID or reference.\n\nIf the counterparty has multiple payment methods available, for example, 2 accounts, or 1 account and 1 card, you **must specify the account or card** to which you want to transfer the money (`receiver.account_id` or `receiver.card_id` respectively).\nNote that in a single request, you can specify either an account or a card, but not both.\n\n:::note[Sandbox behaviour]\nIn Sandbox, this feature is only available for testing.\nWhile **incomplete** or **invalid requests** will return production-like error responses, **complete and valid requests** in Sandbox do not return real values and `estimated_arrival` will always return `instant`.\n:::\n\nFor more details, see the guides: **Check costs and delivery time before paying** section in [Bank transfers](https://developer.revolut.com/docs/guides/manage-accounts/transfers/bank-transfers#check-costs-and-delivery-time-before-paying) or [Card transfers](https://developer.revolut.com/docs/guides/manage-accounts/transfers/card-transfers#check-costs-and-delivery-time-before-paying).',
  operationId: 'getIndicativeQuote',
  request: {
    body: {
      description: 'Request an indicative quote',
      content: {
        'application/json': {
          schema: IndicativeQuoteRequestSchema,
          examples: {
            cross_currency_swift: {
              summary: 'Cross-currency SWIFT payment',
              value: {
                account_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
                receiver: {
                  counterparty_id: 'f7e6d5c4-b3a2-1098-7654-321fedcba098',
                  account_id: '12345678-90ab-cdef-1234-567890abcdef',
                },
                amount: 100.5,
                currency: 'EUR',
                charge_bearer: 'shared',
              },
            },
            same_currency_internal: {
              summary: 'Same-currency internal transfer',
              value: {
                account_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
                receiver: {
                  counterparty_id: 'f7e6d5c4-b3a2-1098-7654-321fedcba098',
                  account_id: '87654321-abcd-ef01-2345-678901234567',
                },
                amount: 25,
                currency: 'GBP',
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
      description: 'The expected processing attributes for the potential transfer',
      content: {
        'application/json': {
          schema: IndicativeQuoteResponseSchema,
          examples: {
            cross_currency_swift: {
              summary: 'Cross-currency SWIFT payment with fees and exchange rate',
              value: {
                amount: { amount: 100.5, currency: 'EUR' },
                fee: {
                  amount: 20,
                  currency: 'GBP',
                  breakdown: { transfer_fee: { amount: 20, currency: 'GBP' } },
                },
                estimated_total: { amount: 106.3, currency: 'GBP' },
                estimated_exchange_rate: '1.16458',
                estimated_amount_after_exchange: { amount: 86.3, currency: 'GBP' },
                estimated_arrival: { date: '2026-05-14', speed: 'instant' },
              },
            },
            same_currency_internal: {
              summary: 'Same-currency internal transfer - instant with no fees',
              value: {
                amount: { amount: 25, currency: 'GBP' },
                fee: { amount: 0, currency: 'GBP' },
                estimated_total: { amount: 25, currency: 'GBP' },
                estimated_arrival: { date: '2026-05-14', speed: 'instant' },
              },
            },
            fx_transfer_fees: {
              summary: 'FX transfer with transfer and exchange fee',
              value: {
                amount: { amount: 100.5, currency: 'EUR' },
                fee: {
                  amount: 5.75,
                  currency: 'GBP',
                  breakdown: {
                    transfer_fee: { amount: 3, currency: 'GBP' },
                    exchange_fee: { amount: 2.75, currency: 'GBP' },
                  },
                },
                estimated_total: { amount: 92.05, currency: 'GBP' },
                estimated_exchange_rate: '1.16458',
                estimated_amount_after_exchange: { amount: 86.3, currency: 'GBP' },
                estimated_arrival: { date: '2026-05-14', speed: 'instant' },
              },
            },
            volatile_fx_rate: {
              summary: 'Volatile FX rate warning',
              value: {
                amount: { amount: 100.5, currency: 'EUR' },
                fee: {
                  amount: 5.75,
                  currency: 'GBP',
                  breakdown: {
                    transfer_fee: { amount: 3, currency: 'GBP' },
                    exchange_fee: { amount: 2.75, currency: 'GBP' },
                  },
                },
                estimated_total: { amount: 92.05, currency: 'GBP' },
                estimated_exchange_rate: '1.16458',
                estimated_amount_after_exchange: { amount: 86.3, currency: 'GBP' },
                estimated_arrival: { date: '2026-05-14', speed: 'instant' },
                warnings: ['volatile_fx_rate'],
              },
            },
          },
        },
      },
    },
    400: {
      description:
        'Bad request\n\nFor example:\n- the request is invalid (e.g. malformed body, validation failure)\n- both `account_id` and `card_id` are provided in `receiver` (only one of these values can be provided in a single request)\n- the specified `charge_bearer` is not supported\n- `exchange_reason_code` is required for such a transfer but was not provided in the request\n- the specified counterparty, account, or card was not found',
      content: {
        'application/json': {
          schema: ErrorWithIdSchema,
          examples: {
            invalid_request: {
              summary: 'Invalid request (malformed body, validation failure)',
              value: {
                error_id: '3bfe9326-87eb-a849-9e35-150de29664dd',
                code: 2101,
                message: 'Request body is not valid JSON',
              },
            },
            missing_counterparty: {
              summary: 'Missing receiver.counterparty_id',
              value: {
                error_id: '6fa7dcdd-bdd3-43d6-bffa-423452083501',
                code: 2101,
                message: "'receiver.counterparty_id' is required",
              },
            },
            missing_account_or_card: {
              summary:
                'Missing receiver.account_id or receiver.card_id when multiple options available for counterparty',
              value: {
                error_id: '510bea31-df11-4229-84ae-35a9a0dba020',
                code: 2101,
                message: "'receiver.account_id' or 'receiver.card_id' is missing",
              },
            },
            invalid_charge_bearer: {
              summary: 'Invalid charge_bearer',
              value: {
                error_id: 'f2bb54d3-8e8d-49ae-a3db-178afebc9da3',
                code: 2101,
                message: "'charge_bearer' must be one of: shared, debtor, prefer_debtor",
              },
            },
            multiple_receiver_methods: {
              summary: 'Both account_id and card_id provided',
              value: {
                error_id: 'c5698032-4ca2-446b-b43a-e278e21ac100',
                code: 2101,
                message: "Both 'account_id' and 'card_id' can't be provided",
              },
            },
            currency_mismatch: {
              summary: 'Mismatched currency',
              value: {
                error_id: 'ea1fc5c9-d0cb-4614-a19c-71c9ce4e2e72',
                code: 3187,
                message: "The payment currency does not match the counterparty's account currency",
              },
            },
            unsupported_charge_bearer: {
              summary: 'Unsupported charge_bearer',
              value: {
                error_id: 'c4e93983-4bcf-4bbc-88de-171be6811d35',
                code: 3287,
                message: "Specified 'charge_bearer' is not supported for this transaction.",
              },
            },
            missing_exchange_reason_code: {
              summary: 'Missing exchange_reason_code',
              value: {
                error_id: '6e8365f6-560f-469c-9561-07d024fad9c5',
                code: 3448,
                message: 'exchange_reason_code is required for this transfer',
              },
            },
            counterparty_not_found: {
              summary: 'Invalid recipient - the specified counterparty was not found',
              value: {
                error_id: '7300ed0a-bfed-4b47-b46e-6d55c9aa398c',
                code: 3544,
                message: 'Counterparty not found f7e6d5c4-b3a2-1098-7654-321fedcba098',
              },
            },
            account_not_found: {
              summary:
                'Invalid recipient - the account specified for the counterparty was not found',
              value: {
                error_id: 'ab3d5761-4b97-42dc-b4a4-8c2b010836e7',
                code: 3544,
                message: 'Account not found for counterparty f7e6d5c4-b3a2-1098-7654-321fedcba098',
              },
            },
            card_not_found: {
              summary: 'Invalid recipient - the card specified for the counterparty was not found',
              value: {
                error_id: 'd89d4df4-e461-47e0-90d8-a79fefcf9e18',
                code: 3544,
                message: 'Card not found for counterparty f7e6d5c4-b3a2-1098-7654-321fedcba098',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorWithIdSchema } },
    },
  },
  security: [{ AccessToken: ['READ', 'PAY'] }],
})

export const postPayFieldsRoute = createRoute({
  method: 'post',
  path: '/pay/fields',
  tags: ['Transfers'],
  summary: 'Check transfer field requirements',
  description:
    'Retrieve the list of conditionally required or applicable fields for a specific transfer destination together with their constraints.\n\n:::note [Note]\nThis feature is not available in Sandbox.\n:::\n\nWhen creating a payment via the [`/pay` endpoint](https://developer.revolut.com/docs/api/business#create-payment), certain fields (such as `transfer_reason_code`, `charge_bearer`, or `exchange_reason_code`) become required or applicable depending on the source account, destination corridor, and business profile.\nThis read-only endpoint allows you to discover these contextual fields dynamically, along with their validation rules and available options.\n\n:::tip\nA **destination corridor** is a specific combination of bank country and currency representing a supported payment destination (e.g. GBP to GB, USD to US).\n:::\n\nOnly the fields relevant to the specific context are returned.\nUniversally required fields (such as `amount`, `account_id`, `receiver`, and `request_id`) are always required and are intentionally excluded from this response.\n\nFor more details, see the guides: **Check transfer field requirements** section in [Bank transfers](https://developer.revolut.com/docs/guides/manage-accounts/transfers/bank-transfers#check-transfer-field-requirements) or [Card transfers](https://developer.revolut.com/docs/guides/manage-accounts/transfers/card-transfers#check-transfer-field-requirements).',
  operationId: 'getPaymentRequirements',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaymentRequirementsRequestSchema,
          examples: {
            standard_request: {
              summary: 'Standard requirements request',
              value: {
                account_id: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
                receiver: {
                  counterparty_id: 'f7e6d5c4-b3a2-1098-7654-321fedcba098',
                  account_id: '12345678-90ab-cdef-1234-567890abcdef',
                },
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
        'The applicable and conditionally required fields for the specified transfer destination',
      content: {
        'application/json': {
          schema: PaymentRequirementsResponseSchema,
          examples: {
            swift_payment: {
              summary: 'SWIFT payment - charge bearer applicable, reference required',
              value: {
                fields: [
                  { name: 'reference', required: true, validation: { max_length: 140 } },
                  {
                    name: 'charge_bearer',
                    required: false,
                    options: [
                      { value: 'shared', default: true },
                      { value: 'debtor' },
                      { value: 'prefer_debtor' },
                    ],
                  },
                ],
              },
            },
            inr_payment: {
              summary: 'INR payment - transfer reason required, reference capped at 30 characters',
              value: {
                fields: [
                  { name: 'reference', required: true, validation: { max_length: 30 } },
                  {
                    name: 'transfer_reason_code',
                    required: true,
                    options: [
                      { value: 'advertising' },
                      { value: 'advisor_fees' },
                      { value: 'construction' },
                      { value: 'exports' },
                      { value: 'goods' },
                      { value: 'insurance_claims' },
                      { value: 'other_fees' },
                      { value: 'personal_transfer' },
                      { value: 'property_rental' },
                      { value: 'royalties' },
                      { value: 'services' },
                      { value: 'travel' },
                    ],
                  },
                ],
              },
            },
            swiss_qr_payment: {
              summary: 'Swiss QR payment - strict reference validation with regex',
              value: {
                fields: [
                  {
                    name: 'reference',
                    required: true,
                    validation: {
                      min_length: 27,
                      max_length: 27,
                      regex: { pattern: '\\d{27}', description: 'Value should be numbers only' },
                    },
                  },
                  {
                    name: 'charge_bearer',
                    required: false,
                    options: [{ value: 'shared' }, { value: 'debtor', default: true }],
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
        'Bad request\n\nFor example:\n- the request is invalid (e.g. malformed body, validation failure)\n- both `account_id` and `card_id` are provided in `receiver` (only one of these values can be provided in a single request)',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            invalid_request: {
              summary: 'Invalid request',
              value: {
                code: 2101,
                message: 'Invalid request (malformed body, validation failure)',
              },
            },
            multiple_receiver_methods: {
              summary: 'Both account_id and card_id provided',
              value: { code: 3000, message: 'Both account_id and card_id provided in receiver' },
            },
          },
        },
      },
    },
    404: {
      description:
        'Not found\n\nReturned when the specified counterparty, account, or card was not found.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            counterparty_not_found: {
              summary: 'Counterparty, account, or card not found',
              value: {
                code: 3006,
                message: 'The specified counterparty, account, or card was not found',
              },
            },
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ', 'PAY'] }],
})

export const postTransferRoute = createRoute({
  method: 'post',
  path: '/transfer',
  tags: ['Transfers'],
  summary: 'Move money between your accounts',
  description:
    'Move money between the Revolut accounts of the business in the same currency.\n\nThe resulting transaction has the type `transfer`.\n\nFor more information, see the guides: [Send money](https://developer.revolut.com/docs/guides/manage-accounts/transfers/send-money).',
  operationId: 'createTransfer',
  request: {
    body: {
      description: 'Create a transfer',
      content: {
        'application/json': {
          schema: TransferRequestSchema,
          example: {
            request_id: '129999',
            source_account_id: '2e6de1bf-97ad-478d-aad1-9d7a3cdf1234',
            target_account_id: 'ae2e1241-81dd-498d-868e-075484785678',
            amount: 10,
            currency: 'GBP',
            reference: "John's transfer",
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The information about the transfer created',
      content: {
        'application/json': {
          schema: TransferResponseSchema,
          example: {
            id: '630f95f7-a3f9-abf2-b4e4-3f65281234dc',
            state: 'completed',
            created_at: '2020-11-23T08:39:35.811005Z',
            completed_at: '2020-11-23T08:39:35.811005Z',
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ', 'PAY'] }],
})

export const getTransferReasonsRoute = createRoute({
  method: 'get',
  path: '/transfer-reasons',
  tags: ['Transfers', 'Payout links'],
  summary: 'Get transfer reasons',
  description:
    'In order to initiate a transfer in certain currencies and countries, you must provide a transfer reason. \nWith this endpoint you can retrieve all transfer reasons available to your business account per country and currency.\n\nAfter you retrieve the results, use the appropriate reason code in the `transfer_reason_code` field when [making a transfer to a counterparty](https://developer.revolut.com/docs/api/business#create-payment) or [creating a payout link](https://developer.revolut.com/docs/api/business#create-payout-link).',
  operationId: 'getTransferReasons',
  responses: {
    200: {
      description: 'List of transfer reasons',
      content: {
        'application/json': {
          schema: TransferReasonsSchema,
          example: [
            { country: 'IN', currency: 'INR', code: 'advertising', description: 'Advertising' },
            { country: 'IN', currency: 'INR', code: 'advisor_fees', description: 'Advisor fees' },
            { country: 'IN', currency: 'INR', code: 'construction', description: 'Construction' },
            { country: 'IN', currency: 'INR', code: 'delivery', description: 'Delivery' },
          ],
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const getWebhookRoute = createRoute({
  method: 'get',
  path: '/webhook',
  tags: ['Webhooks (v1) (deprecated)'],
  summary: 'Retrieve a webhook',
  description: 'Get your webhook URL.',
  operationId: 'getWebhookV1',
  responses: {
    200: {
      description: 'The existing webhook',
      content: {
        'application/json': {
          schema: WebhookV1Schema,
          example: { url: 'https://www.revolut.com' },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  deprecated: true,
  security: [{ AccessToken: ['READ'] }],
})

export const postWebhookRoute = createRoute({
  method: 'post',
  path: '/webhook',
  tags: ['Webhooks (v1) (deprecated)'],
  summary: 'Set a webhook',
  description:
    'Set up a webhook URL so that event notifications are pushed to the specified URL. Only HTTPS URLs are supported.',
  operationId: 'setUpWebhook',
  request: {
    body: {
      description: 'URL to set up as a webhook',
      content: {
        'application/json': {
          schema: WebhookV1Schema,
          example: { url: 'https://www.revolut.com' },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'The webhook has been set up' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  deprecated: true,
  security: [{ AccessToken: ['READ', 'WRITE'] }],
})

export const deleteWebhookRoute = createRoute({
  method: 'delete',
  path: '/webhook',
  tags: ['Webhooks (v1) (deprecated)'],
  summary: 'Delete a webhook',
  description: 'Delete a webhook so that events are not sent to the specified URL any more.',
  operationId: 'deleteWebhookV1',
  responses: {
    204: { description: 'The webhook has been deleted' },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  deprecated: true,
  security: [{ AccessToken: ['READ', 'WRITE'] }],
})

export const getWebhooksRoute = createRoute({
  method: 'get',
  path: '/webhooks',
  tags: ['Webhooks (v2)'],
  summary: 'Retrieve a list of webhooks',
  description:
    'Get the list of all your existing webhooks and their details.\n\nFor more information, see the guides: [About webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks) and [Manage webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/manage-webhooks#retrieve-a-list-of-webhooks).',
  operationId: 'getWebhooks',
  responses: {
    200: {
      description: 'The list of all your existing webhooks',
      content: {
        'application/json': {
          schema: WebhooksSchema,
          example: [
            { $ref: '#/components/examples/webhookV2BasicSelectedEvents' },
            { $ref: '#/components/examples/webhookV2BasicAllEvents' },
          ],
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const postWebhooksRoute = createRoute({
  method: 'post',
  path: '/webhooks',
  tags: ['Webhooks (v2)'],
  summary: 'Create a new webhook',
  description:
    'Create a new webhook to receive event notifications to the specified URL. Provide a list of event types that you want to subscribe to and a URL for the webhook.\nOnly HTTPS URLs are supported.\n\nFor more information, see the guides: [About webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks) and [Manage webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/manage-webhooks#create-a-webhook).',
  operationId: 'createWebhook',
  request: {
    body: {
      description: 'The webhook to create.',
      content: {
        'application/json': {
          schema: CreateWebhookRequestSchema,
          example: {
            url: 'https://www.example.com',
            events: ['TransactionCreated', 'PayoutLinkCreated'],
          },
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'The successfully created webhook',
      content: {
        'application/json': {
          schema: WebhookV2Schema,
          example: {
            id: 'c6db947e-e9ce-41c2-b445-02e6eb741d21',
            url: 'https://www.example.com',
            events: ['TransactionCreated', 'PayoutLinkCreated'],
            signing_secret: 'wsk_4jETWMz1g1b37gCONjNp84t2KSSIT7dK',
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: "Required 'url' is missing", code: 3000 },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            message:
              'Owner [ownerId=a3e64c3f-eedd-4487-9ab3-246e23c9ec3e,ownerType=BUSINESS] already has 10 webhooks. Only 10 are allowed.',
            code: 3352,
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getWebhooksWebhookIdRoute = createRoute({
  method: 'get',
  path: '/webhooks/{webhook_id}',
  tags: ['Webhooks (v2)'],
  summary: 'Retrieve a webhook',
  description:
    'Get the information about a specific webhook by ID.\n\nFor more information, see the guides: [About webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks) and [Manage webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/manage-webhooks#retrieve-a-specific-webhook).',
  operationId: 'getWebhook',
  request: {
    params: z.object({
      webhook_id: z
        .uuid()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            required: true,
            description: 'The ID of the webhook to retrieve.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The information about the webhook',
      content: {
        'application/json': {
          schema: WebhookV2Schema,
          example: {
            id: 'c6db947e-e9ce-41c2-b445-02e6eb741d21',
            url: 'https://www.example.com',
            events: ['TransactionCreated', 'PayoutLinkCreated'],
            signing_secret: 'wsk_4jETWMz1g1b37gCONjNp84t2KSSIT7dK',
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'Something went wrong', code: 2101 },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'Webhook not found', code: 3040 },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})

export const deleteWebhooksWebhookIdRoute = createRoute({
  method: 'delete',
  path: '/webhooks/{webhook_id}',
  tags: ['Webhooks (v2)'],
  summary: 'Delete a webhook',
  description:
    'Delete a specific webhook.\n\nA successful response does not get any content in return.\n\nFor more information, see the guides: [About webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks) and [Manage webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/manage-webhooks#delete-a-webhook).',
  operationId: 'deleteWebhook',
  request: {
    params: z.object({
      webhook_id: z
        .uuid()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            required: true,
            description: 'The ID of the webhook to delete.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The webhook has been deleted' },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'Webhook not found', code: 3040 },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const patchWebhooksWebhookIdRoute = createRoute({
  method: 'patch',
  path: '/webhooks/{webhook_id}',
  tags: ['Webhooks (v2)'],
  summary: 'Update a webhook',
  description:
    "Update an existing webhook. Change the URL to which event notifications are sent or the list of event types to be notified about.\n\nYou must specify at least one of these two. The fields that you don't specify are not updated.\n\nFor more information, see the guides: [About webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks) and [Manage webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/manage-webhooks#update-a-webhook).",
  operationId: 'updateWebhook',
  request: {
    params: z.object({
      webhook_id: z
        .uuid()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            required: true,
            description: 'The ID of the webhook to update.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      description: 'The new webhook URL for the given webhook',
      content: {
        'application/json': {
          schema: UpdateWebhookRequestSchema,
          examples: {
            modify_url: { summary: 'Modify the URL', value: { url: 'https://www.example.com/' } },
            modify_events: {
              summary: 'Modify the subscribed event types',
              value: { events: ['TransactionCreated', 'PayoutLinkCreated'] },
            },
            modify_all: {
              summary: 'Modify both the URL and event types',
              value: {
                url: 'https://www.example.com/',
                events: ['TransactionCreated', 'PayoutLinkCreated'],
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
      description: 'The successfully updated webhook',
      content: {
        'application/json': {
          schema: WebhookV2BasicSchema,
          example: {
            id: 'c6db947e-e9ce-41c2-b445-02e6eb741d21',
            url: 'https://www.example.com',
            events: ['TransactionCreated', 'PayoutLinkCreated'],
          },
        },
      },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'url or events must be provided', code: 3000 },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const postWebhooksWebhookIdRotateSigningSecretRoute = createRoute({
  method: 'post',
  path: '/webhooks/{webhook_id}/rotate-signing-secret',
  tags: ['Webhooks (v2)'],
  summary: 'Rotate a webhook signing secret',
  description:
    'Rotate a signing secret for a specific webhook.\n\nFor more information, see the guides: [About webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks) and [Manage webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/manage-webhooks#rotate-a-webhook-signing-secret).',
  operationId: 'rotateWebhookSigningSecret',
  request: {
    params: z.object({
      webhook_id: z
        .uuid()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            required: true,
            description: 'The ID of the webhook for which to rotate the secret.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    body: {
      description: 'Webhook signing secret rotation request',
      content: { 'application/json': { schema: WebhookSigningSecretRotateRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The details of the webhook for which you rotated the signing secret',
      content: {
        'application/json': {
          schema: WebhookV2Schema,
          example: {
            id: 'c6db947e-e9ce-41c2-b445-02e6eb741d21',
            url: 'https://www.example.com',
            events: ['TransactionCreated', 'PayoutLinkCreated'],
            signing_secret: 'wsk_4jETWMz1g1b37gCONjNp84t2KSSIT7dK',
          },
        },
      },
    },
    400: {
      description:
        'Bad Request\n\nReturned, for example, for an incorrect expiration period provided.',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'Something went wrong', code: 2101 },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'Webhook not found', code: 3040 },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: {
            message:
              "Webhook bf6c61eb-a4b0-4e0d-afb1-d6d2f3d27a9e can't have more than 3 active signing keys",
            code: 3355,
          },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['WRITE'] }],
})

export const getWebhooksWebhookIdFailedEventsRoute = createRoute({
  method: 'get',
  path: '/webhooks/{webhook_id}/failed-events',
  tags: ['Webhooks (v2)'],
  summary: 'Retrieve a list of failed webhook events',
  description:
    'Get the list of all your failed webhook events, or use the query parameters to filter the results.\n\nThe events are sorted by the `created_at` date in reverse chronological order.\n\nThe returned failed events are **paginated**. \nThe maximum number of events returned per page is specified by the `limit` parameter.\nTo get to the next page, make a new request and use the `created_at` date of the last event returned in the previous response.\n\nFor more information, see the guides: [About webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/about-webhooks) and [Manage webhooks](https://developer.revolut.com/docs/guides/manage-accounts/webhooks/manage-webhooks#retrieve-a-list-of-failed-webhook-events).',
  operationId: 'getFailedWebhookEvents',
  request: {
    params: z.object({
      webhook_id: z
        .uuid()
        .openapi({
          param: {
            name: 'webhook_id',
            in: 'path',
            required: true,
            description: 'The ID of the webhook for which to get the failed events.',
            schema: { type: 'string', format: 'uuid' },
          },
        }),
    }),
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The maximum number of events returned per page.\n\nTo get to the next page, make a new request and use the `created_at` date of the last event returned in the previous response as value for `created_before`.',
            schema: { type: 'integer', minimum: 1, maximum: 1000, default: 100 },
            required: false,
          },
        }),
      created_before: z
        .string()
        .default('the date-time at which the request is made')
        .exactOptional()
        .openapi({
          param: {
            name: 'created_before',
            in: 'query',
            description:
              'Retrieves events with `created_at` < `created_before`. \nCannot be older than the current date minus 21 days. \nThe default value is the current date and time at which you are calling the endpoint.\n\nProvided in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
            schema: {
              type: 'string',
              format: 'date-time or date',
              default: 'the date-time at which the request is made',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The list of all your existing failed webhook events',
      content: {
        'application/json': {
          schema: WebhookEventsSchema,
          example: [
            {
              id: 'd6d04ec2-2a48-4825-8fba-3603cdacdba7',
              created_at: '2023-01-26T16:22:21.297570Z',
              updated_at: '2023-01-26T16:22:21.534872Z',
              webhook_id: 'c8083529-fb91-4de0-a66d-9fc3ccc1da10',
              webhook_url: 'https://www.example.com',
              payload: {
                data: {
                  id: '63d2a8bd-8b67-a2de-b1d2-b58ee21d7073',
                  legs: [
                    {
                      fee: 0.2,
                      amount: -10,
                      leg_id: '63d2a8bd-8b67-a2de-0000-b58ee21d7073',
                      currency: 'GBP',
                      account_id: '05018b0d-e67c-4fec-bea6-415e9da9432c',
                      description: 'To Acme Corp',
                      counterparty: {
                        id: '7e18625a-3e6c-4d4f-8429-216c25309a5f',
                        account_id: 'ff29e658-f07f-4d81-bc0f-7ad0ff141357',
                        account_type: 'external',
                      },
                    },
                  ],
                  type: 'transfer',
                  state: 'pending',
                  reference: 'To John Doe',
                  created_at: '2023-01-26T16:22:21.232551Z',
                  request_id: '6a8b2ad9-d8b9-4348-9207-1c5737ccf11b',
                  updated_at: '2023-01-26T16:22:21.232551Z',
                },
                event: 'TransactionCreated',
                timestamp: '2023-01-26T16:22:21.230599Z',
              },
              last_sent_date: '2023-01-26T16:52:21.534798Z',
            },
            {
              id: 'd6d04ec2-2a48-4825-8fba-3603cdacdba7',
              created_at: '2023-07-22T11:52:21.297570Z',
              updated_at: '2023-07-22T11:52:21.534872Z',
              webhook_id: 'c8083529-fb91-4de0-a66d-9fc3ccc1da10',
              webhook_url: 'https://www.example.com',
              payload: {
                data: {
                  id: '0e1a8d4b-1d1e-457d-9f10-3e7007a82ea8',
                  request_id: '2e2837f5-828d-473f-85e8-5614afd3f8e8',
                  old_state: 'active',
                  new_state: 'processed',
                },
                event: 'PayoutLinkStateChanged',
                timestamp: '2023-07-22T12:31:18.534798Z',
              },
              last_sent_date: '2023-07-22T12:52:21.534798Z',
            },
          ],
        },
      },
    },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: ErrorSchema,
          examples: {
            bad_limit: {
              summary: 'Bad limit',
              value: { message: 'limit must be between 1 and 1000', code: 2101 },
            },
            bad_created_before: {
              summary: 'Bad created_before',
              value: {
                message:
                  'created_before must be after 2023-07-11T13:11:39.623178Z, but is: 2023-07-10T16:22:21.297570Z',
                code: 2101,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Webhook not found',
      content: {
        'application/json': {
          schema: ErrorSchema,
          example: { message: 'Webhook not found', code: 3040 },
        },
      },
    },
    default: {
      description: 'Unexpected error',
      content: { 'application/json': { schema: ErrorSchema } },
    },
  },
  security: [{ AccessToken: ['READ'] }],
})
