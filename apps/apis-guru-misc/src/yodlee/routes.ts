import { createRoute, z } from '@hono/zod-openapi'

const AccessTokensSchema = z
  .object({
    appId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the application for which the access token is generated.<br><br><b>Endpoints</b>:<ul><li>GET user/accessTokens</li></ul>',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Base URL using which the application is accessed.<br><br><b>Endpoints</b>:<ul><li>GET user/accessTokens</li></ul>',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Access token value used to invoke the widgets/apps.<br><br><b>Endpoints</b>:<ul><li>GET user/accessTokens</li></ul>',
      }),
  })
  .openapi({ title: 'AccessTokens', required: [] })
  .openapi('AccessTokens')

const MoneySchema = z
  .object({
    amount: z.float64(),
    currency: z.enum([
      'AUD',
      'BRL',
      'CAD',
      'EUR',
      'GBP',
      'HKD',
      'IDR',
      'INR',
      'JPY',
      'NZD',
      'SGD',
      'USD',
      'ZAR',
      'CNY',
      'VND',
      'MYR',
      'CHF',
    ]),
  })
  .openapi({ required: ['amount', 'currency'], title: 'Money' })
  .openapi('Money')

const AccountAddressSchema = z
  .object({
    address1: z.string().exactOptional(),
    address2: z.string().exactOptional(),
    address3: z.string().exactOptional(),
    city: z.string().exactOptional(),
    country: z.string().exactOptional(),
    sourceType: z.string().exactOptional(),
    state: z.string().exactOptional(),
    street: z.string().exactOptional(),
    type: z
      .enum([
        'HOME',
        'BUSINESS',
        'POBOX',
        'RETAIL',
        'OFFICE',
        'SMALL_BUSINESS',
        'COMMUNICATION',
        'PERMANENT',
        'STATEMENT_ADDRESS',
        'PAYMENT',
        'PAYOFF',
        'UNKNOWN',
      ])
      .exactOptional(),
    zip: z.string().exactOptional(),
  })
  .openapi({ title: 'AccountAddress', required: [] })
  .openapi('AccountAddress')

const AutoRefreshSchema = z
  .object({
    additionalStatus: z
      .enum([
        'SCHEDULED',
        'TEMP_ERROR',
        'SITE_BLOCKING',
        'SITE_NOT_SUPPORTED',
        'REAL_TIME_MFA_REQUIRED',
        'USER_ACTION_REQUIRED',
        'UNSUBSCRIBED',
        'MANUAL_ACCOUNT',
      ])
      .exactOptional()
      .openapi({
        description:
          'Indicates the reason for the status.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    asOfDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the auto refresh status is determined.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
    status: z
      .enum(['ENABLED', 'DISABLED'])
      .exactOptional()
      .openapi({
        description:
          'Indicates whether auto refresh is enabled or disabled.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'AutoRefresh', required: [] })
  .openapi('AutoRefresh')

const BankTransferCodeSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The FI's branch identification number.Additional Details: The routing number of the bank account in the United States. For non-United States accounts, it is the IFSC code (India), BSB number (Australia), and sort code (United Kingdom). <br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: bank, investment<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST verification</li></ul>",
      }),
    type: z
      .enum(['BSB', 'IFSC', 'ROUTING_NUMBER', 'SORT_CODE'])
      .exactOptional()
      .openapi({
        description:
          'The bank transfer code type varies depending on the region of the account origination. <br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: bank, investment<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST verification</li></ul><b>Applicable Values</b><br>',
      }),
  })
  .openapi({ title: 'BankTransferCode', required: [] })
  .openapi('BankTransferCode')

const CoverageAmountSchema = z
  .object({
    cover: MoneySchema.exactOptional(),
    limitType: z
      .enum(['IN_NETWORK', 'OUT_NETWORK'])
      .exactOptional()
      .openapi({
        description:
          'The type of coverage limit indicates if the coverage is in-network or out-of-network.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br>',
        readOnly: true,
      }),
    met: MoneySchema.exactOptional(),
    type: z
      .enum([
        'DEDUCTIBLE',
        'OUT_OF_POCKET',
        'ANNUAL_BENEFIT',
        'MAX_BENEFIT',
        'COVERAGE_AMOUNT',
        'MONTHLY_BENEFIT',
        'OTHER',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of coverage provided to an individual or an entity.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br>',
        readOnly: true,
      }),
    unitType: z
      .enum(['PER_FAMILY', 'PER_MEMBER'])
      .exactOptional()
      .openapi({
        description:
          'The type of coverage unit indicates if the coverage is for an individual or a family.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'CoverageAmount', required: [] })
  .openapi('CoverageAmount')

const CoverageSchema = z
  .object({
    amount: z
      .array(CoverageAmountSchema)
      .exactOptional()
      .openapi({
        description:
          'The coverage amount-related details.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the coverage for the account ends or expires.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
    planType: z
      .enum(['PPO', 'HMO', 'UNKNOWN'])
      .exactOptional()
      .openapi({
        description:
          'The plan type for an insurance provided to an individual or an entity.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br>',
        readOnly: true,
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the coverage for the account starts.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
    type: z
      .enum([
        'VISION',
        'DENTAL',
        'MEDICAL',
        'HEALTH',
        'DEATH_COVER',
        'TOTAL_PERMANENT_DISABILITY',
        'ACCIDENTAL_DEATH_COVER',
        'INCOME_PROTECTION',
        'DEATH_TOTAL_PERMANENT_DISABILITY',
        'OTHER',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of coverage provided to an individual or an entity.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values:</b><br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'Coverage', required: [] })
  .openapi('Coverage')

const AccountDatasetSchema = z
  .object({
    additionalStatus: z
      .enum([
        'LOGIN_IN_PROGRESS',
        'DATA_RETRIEVAL_IN_PROGRESS',
        'ACCT_SUMMARY_RECEIVED',
        'AVAILABLE_DATA_RETRIEVED',
        'PARTIAL_DATA_RETRIEVED',
        'DATA_RETRIEVAL_FAILED',
        'DATA_NOT_AVAILABLE',
        'ACCOUNT_LOCKED',
        'ADDL_AUTHENTICATION_REQUIRED',
        'BETA_SITE_DEV_IN_PROGRESS',
        'CREDENTIALS_UPDATE_NEEDED',
        'INCORRECT_CREDENTIALS',
        'PROPERTY_VALUE_NOT_AVAILABLE',
        'INVALID_ADDL_INFO_PROVIDED',
        'REQUEST_TIME_OUT',
        'SITE_BLOCKING_ERROR',
        'UNEXPECTED_SITE_ERROR',
        'SITE_NOT_SUPPORTED',
        'SITE_UNAVAILABLE',
        'TECH_ERROR',
        'USER_ACTION_NEEDED_AT_SITE',
        'SITE_SESSION_INVALIDATED',
        'NEW_AUTHENTICATION_REQUIRED',
        'DATASET_NOT_SUPPORTED',
        'ENROLLMENT_REQUIRED_FOR_DATASET',
        'CONSENT_REQUIRED',
        'CONSENT_EXPIRED',
        'CONSENT_REVOKED',
        'INCORRECT_OAUTH_TOKEN',
        'MIGRATION_IN_PROGRESS',
      ])
      .exactOptional()
      .openapi({
        description:
          'The status of last update attempted for the dataset. <br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    lastUpdateAttempt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicate when the last attempt was performed to update the dataset for the given provider account<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>',
        readOnly: true,
      }),
    lastUpdated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicate when the dataset is last updated successfully for the given provider account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>',
        readOnly: true,
      }),
    name: z
      .enum(['BASIC_AGG_DATA', 'ADVANCE_AGG_DATA', 'ACCT_PROFILE', 'DOCUMENT'])
      .exactOptional()
      .openapi({
        description:
          'The name of the dataset requested from the provider site<br><br><b>Account Type</b>: Manual<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br>',
      }),
    nextUpdateScheduled: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates when the next attempt to update the dataset is scheduled.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>',
        readOnly: true,
      }),
    updateEligibility: z
      .enum(['ALLOW_UPDATE', 'ALLOW_UPDATE_WITH_CREDENTIALS', 'DISALLOW_UPDATE'])
      .exactOptional()
      .openapi({
        description:
          'Indicate whether the dataset is eligible for update or not.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'AccountDataset', required: [] })
  .openapi('AccountDataset')

const FullAccountNumberListSchema = z
  .object({
    paymentAccountNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Payment Account Number of given account.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
    unmaskedAccountNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unmasked account number of given account.<br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'FullAccountNumberList', required: [] })
  .openapi('FullAccountNumberList')

const IdentifierSchema = z
  .object({
    type: z
      .enum(['NIE', 'DNI', 'EIN', 'BN', 'AADHAR', 'NIN', 'NRIC'])
      .exactOptional()
      .openapi({ description: 'Type of Identifier', readOnly: true }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value of the identifier', readOnly: true }),
  })
  .openapi({ title: 'Identifier', required: [] })
  .openapi('Identifier')

const NameSchema = z
  .object({
    first: z.string().exactOptional(),
    fullName: z.string().exactOptional(),
    last: z.string().exactOptional(),
    middle: z.string().exactOptional(),
  })
  .openapi({ title: 'Name', required: [] })
  .openapi('Name')

const AccountHolderSchema = z
  .object({
    gender: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifiers of the account holder.<br><br><b>Aggregated / Manual</b>: Aggregated <br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
    identifier: z
      .array(IdentifierSchema)
      .exactOptional()
      .openapi({
        description:
          'Identifiers of the account holder.<br><br><b>Aggregated / Manual</b>: Aggregated <br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
    name: NameSchema.exactOptional(),
    ownership: z
      .enum([
        'PRIMARY',
        'SECONDARY',
        'CUSTODIAN',
        'OTHERS',
        'POWER_OF_ATTORNEY',
        'TRUSTEE',
        'JOINT_OWNER',
        'BENEFICIARY',
        'AAS',
        'BUSINESS',
        'DBA',
        'TRUST',
      ])
      .exactOptional()
      .openapi({
        description:
          'Indicates the ownership of the account.<br><br><b>Aggregated / Manual</b>: Aggregated <br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'AccountHolder', required: [] })
  .openapi('AccountHolder')

const LoanPayoffDetailsSchema = z
  .object({
    outstandingBalance: MoneySchema.exactOptional(),
    payByDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date by which the payoff amount should be paid.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
    payoffAmount: MoneySchema.exactOptional(),
  })
  .openapi({ title: 'LoanPayoffDetails', required: [] })
  .openapi('LoanPayoffDetails')

const PaymentIdentifierSchema = z
  .object({
    type: z
      .enum(['REFERENCE_NUMBER', 'PLATFORM_CODE'])
      .exactOptional()
      .openapi({ description: 'Type of Identifier', readOnly: true }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value of the identifier', readOnly: true }),
  })
  .openapi({ title: 'PaymentIdentifier', required: [] })
  .openapi('PaymentIdentifier')

const PaymentBankTransferCodeSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Value of the identifier', readOnly: true }),
    type: z
      .enum(['ROUTING_NUMBER', 'BSB', 'IFSC', 'SORT_CODE'])
      .exactOptional()
      .openapi({ description: 'Type of BankTransferCode', readOnly: true }),
  })
  .openapi({ title: 'PaymentBankTransferCode', required: [] })
  .openapi('PaymentBankTransferCode')

const PaymentProfileSchema = z
  .object({
    address: z
      .array(AccountAddressSchema)
      .exactOptional()
      .openapi({
        description:
          'The address of the lender to which the monthly payments or the loan payoff amount should be paid. <br><b>Additional Details:</b>The address field applies only to the student loan account type.<br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
      }),
    identifier: PaymentIdentifierSchema.exactOptional(),
    paymentBankTransferCode: PaymentBankTransferCodeSchema.exactOptional(),
  })
  .openapi({ title: 'PaymentProfile', required: [] })
  .openapi('PaymentProfile')

const EmailSchema = z
  .object({
    type: z
      .enum(['PRIMARY', 'SECONDARY', 'PERSONAL', 'WORK', 'OTHERS'])
      .exactOptional()
      .openapi({ readOnly: true }),
    value: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ title: 'Email', required: [] })
  .openapi('Email')

const PhoneNumberSchema = z
  .object({
    type: z
      .enum(['HOME', 'WORK', 'LANDLINE', 'MOBILE'])
      .exactOptional()
      .openapi({ description: 'type of phone number', readOnly: true }),
    value: z.string().exactOptional().openapi({ description: 'Phone Number', readOnly: true }),
  })
  .openapi({ title: 'PhoneNumber', required: [] })
  .openapi('PhoneNumber')

const AccountProfileSchema = z
  .object({
    address: z
      .array(AccountAddressSchema)
      .exactOptional()
      .openapi({
        description:
          'Address available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
    email: z
      .array(EmailSchema)
      .exactOptional()
      .openapi({
        description:
          'Email Id available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
    identifier: z
      .array(IdentifierSchema)
      .exactOptional()
      .openapi({
        description:
          'Identifiers available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
    phoneNumber: z
      .array(PhoneNumberSchema)
      .exactOptional()
      .openapi({
        description:
          'Phone number available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'AccountProfile', required: [] })
  .openapi('AccountProfile')

const RewardBalanceSchema = z
  .object({
    balance: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The actual reward balance.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    balanceToLevel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The balance required to reach a reward level.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    balanceToReward: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The balance required to qualify for a reward such as retaining membership, business reward, etc.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    balanceType: z
      .enum([
        'EXPIRING_BALANCE',
        'BALANCE_TO_LEVEL',
        'BALANCE_TO_REWARD',
        'BALANCE',
        'TOTAL_BALANCE',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of reward balance.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description for the reward balance as available at provider source.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    expiryDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the balance expires.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    units: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unit of reward balance - miles, points, segments, dollars, credits.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'RewardBalance', required: [] })
  .openapi('RewardBalance')

const AccountSchema = z
  .object({
    '401kLoan': MoneySchema.exactOptional(),
    CONTAINER: z
      .enum([
        'bank',
        'creditCard',
        'investment',
        'insurance',
        'loan',
        'reward',
        'realEstate',
        'otherAssets',
        'otherLiabilities',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of service. E.g., Bank, Credit Card, Investment, Insurance, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    accountName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The account name as it appears at the site.<br>(The POST accounts service response return this field as name)<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    accountNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The account number as it appears on the site. (The POST accounts service response return this field as number)<br><b>Additional Details</b>:<b> Bank/ Loan/ Insurance/ Investment</b>:<br> The account number for the bank account as it appears at the site.<br><b>Credit Card</b>: The account number of the card account as it appears at the site,<br>i.e., the card number.The account number can be full or partial based on how it is displayed in the account summary page of the site.In most cases, the site does not display the full account number in the account summary page and additional navigation is required to aggregate it.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    accountStatus: z
      .enum(['ACTIVE', 'INACTIVE', 'TO_BE_CLOSED', 'CLOSED', 'DELETED'])
      .exactOptional()
      .openapi({
        description:
          'The status of the account that is updated by the consumer through an application or an API. Valid Values: AccountStatus<br><b>Additional Details:</b><br><b>ACTIVE:</b> All the added manual and aggregated accounts status will be made "ACTIVE" by default. <br><b>TO_BE_CLOSED:</b> If the aggregated accounts are not found or closed in the data provider site, Yodlee system marks the status as TO_BE_CLOSED<br><b>INACTIVE:</b> Users can update the status as INACTIVE to stop updating and to stop considering the account in other services<br><b>CLOSED:</b> Users can update the status as CLOSED, if the account is closed with the provider. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    accountType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of account that is aggregated, i.e., savings, checking, credit card, charge, HELOC, etc. The account type is derived based on the attributes of the account. <br><b>Valid Values:</b><br><b>Aggregated Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PPF</li><li>RECURRING_DEPOSIT</li><li>FSA</li><li>MONEY_MARKET</li><li>IRA</li><li>PREPAID</li></ul><b>creditCard</b><ul><li>OTHER</li><li>CREDIT</li><li>STORE</li><li>CHARGE</li><li>OTHER</li></ul><b>investment (SN 1.0)</b><ul><li>BROKERAGE_MARGIN</li><li>HSA</li><li>IRA</li><li>BROKERAGE_CASH</li><li>401K</li><li>403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE</li><li>CUSTODIAL</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE</li><li>JTTIC</li><li>JTWROS</li><li>COMMUNITY_PROPERTY</li><li>JOINT_BY_ENTIRETY</li><li>CONSERVATORSHIP</li><li>ROTH</li><li>ROTH_CONVERSION</li><li>ROLLOVER</li><li>EDUCATIONAL</li><li>529_PLAN</li><li>457_DEFERRED_COMPENSATION</li><li>401A</li><li>PSP</li><li>MPP</li><li>STOCK_BASKET</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER</li><li>CHARITABLE_LEAD</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP</li><li>UTMA</li><li>UGMA</li><li>ESOPP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>SOLE_PROPRIETORSHIP</li><li>CHURCH</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CMA</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET</li><li>SUPER_ANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN</li><li>DEFERRED_PROFIT_SHARING_PLAN</li><li>NON_REGISTERED_SAVINGS_PLAN</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN</li><li>GROUP_RETIREMENT_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_ACCOUNT</li><li>REGISTERED_PENSION_PLAN</li><li>TAX_FREE_SAVINGS_ACCOUNT</li><li>LIFE_INCOME_FUND</li><li>REGISTERED_RETIREMENT_INCOME_FUND</li><li>SPOUSAL_RETIREMENT_INCOME_FUND</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND</li><li>GUARANTEED_INVESTMENT_CERTIFICATES</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN</li><li>OTHER</li></ul><b>investment (SN 2.0)</b><ul><li>BROKERAGE_CASH</li><li>BROKERAGE_MARGIN</li><li>INDIVIDUAL_RETIREMENT_ACCOUNT_IRA</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_401K</li><li>EMPLOYEE_RETIREMENT_SAVINGS_PLAN_403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE_IRA</li><li>CUSTODIAL_ACCOUNT</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE_INVESTMENT_ACCOUNT</li><li>JOINT_TENANTS_TENANCY_IN_COMMON_JTIC</li><li>JOINT_TENANTS_WITH_RIGHTS_OF_SURVIVORSHIP_JTWROS</li><li>JOINT_TENANTS_COMMUNITY_PROPERTY</li><li>JOINT_TENANTS_TENANTS_BY_ENTIRETY</li><li>CONSERVATOR</li><li>ROTH_IRA</li><li>ROTH_CONVERSION</li><li>ROLLOVER_IRA</li><li>EDUCATIONAL</li><li>EDUCATIONAL_SAVINGS_PLAN_529</li><li>DEFERRED_COMPENSATION_PLAN_457</li><li>MONEY_PURCHASE_RETIREMENT_PLAN_401A</li><li>PROFIT_SHARING_PLAN</li><li>MONEY_PURCHASE_PLAN</li><li>STOCK_BASKET_ACCOUNT</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER_TRUST</li><li>CHARITABLE_LEAD_TRUST</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP_IRA</li><li>UNIFORM_TRANSFER_TO_MINORS_ACT_UTMA</li><li>UNIFORM_GIFT_TO_MINORS_ACT_UGMA</li><li>EMPLOYEE_STOCK_OWNERSHIP_PLAN_ESOP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>PROPRIETORSHIP</li><li>CHURCH_ACCOUNT</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CASH_MANAGEMENT_ACCOUNT</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN_ESPP</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET_ACCOUNT</li><li>SUPERANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN_RRSP</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN_SRSP</li><li>DEFERRED_PROFIT_SHARING_PLAN_DPSP</li><li>NON_REGISTERED_SAVINGS_PLAN_NRSP</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN_RESP</li><li>GROUP_RETIREMENT_SAVINGS_PLAN_GRSP</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN_LRSP</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN_RLSP</li><li>LOCKED_IN_RETIREMENT_ACCOUNT_LIRA</li><li>REGISTERED_PENSION_PLAN_RPP</li><li>TAX_FREE_SAVINGS_ACCOUNT_TFSA</li><li>LIFE_INCOME_FUND_LIF</li><li>REGISTERED_RETIREMENT_INCOME_FUND_RIF</li><li>SPOUSAL_RETIREMENT_INCOME_FUND_SRIF</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND_LRIF</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND_PRIF</li><li>GUARANTEED_INVESTMENT_CERTIFICATES_GIC</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN_RDSP</li><li>DEFINED_CONTRIBUTION_PLAN</li><li>DEFINED_BENEFIT_PLAN</li><li>EMPLOYEE_STOCK_OPTION_PLAN</li><li>NONQUALIFIED_DEFERRED_COMPENSATION_PLAN_409A</li><li>KEOGH_PLAN</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_ROTH_401K</li><li>DEFERRED_CONTINGENT_CAPITAL_PLAN_DCCP</li><li>EMPLOYEE_BENEFIT_PLAN</li><li>EMPLOYEE_SAVINGS_PLAN</li><li>HEALTH_SAVINGS_ACCOUNT_HSA</li><li>COVERDELL_EDUCATION_SAVINGS_ACCOUNT_ESA</li><li>TESTAMENTARY_TRUST</li><li>ESTATE</li><li>GRANTOR_RETAINED_ANNUITY_TRUST_GRAT</li><li>ADVISORY_ACCOUNT</li><li>NON_PROFIT_ORGANIZATION_501C</li><li>HEALTH_REIMBURSEMENT_ARRANGEMENT_HRA</li><li>INDIVIDUAL_SAVINGS_ACCOUNT_ISA</li><li>CASH_ISA</li><li>STOCKS_AND_SHARES_ISA</li><li>INNOVATIVE_FINANCE_ISA</li><li>JUNIOR_ISA</li><li>EMPLOYEES_PROVIDENT_FUND_ORGANIZATION_EPFO</li><li>PUBLIC_PROVIDENT_FUND_PPF</li><li>EMPLOYEES_PENSION_SCHEME_EPS</li><li>NATIONAL_PENSION_SYSTEM_NPS</li><li>INDEXED_ANNUITY</li><li>ANNUITIZED_ANNUITY</li><li>VARIABLE_ANNUITY</li><li>ROTH_403B</li><li>SPOUSAL_IRA</li><li>SPOUSAL_ROTH_IRA</li><li>SARSEP_IRA</li><li>SUBSTANTIALLY_EQUAL_PERIODIC_PAYMENTS_SEPP</li><li>OFFSHORE_TRUST</li><li>IRREVOCABLE_LIFE_INSURANCE_TRUST</li><li>INTERNATIONAL_TRUST</li><li>LIFE_INTEREST_TRUST</li><li>EMPLOYEE_BENEFIT_TRUST</li><li>PRECIOUS_METAL_ACCOUNT</li><li>INVESTMENT_LOAN_ACCOUNT</li><li>GRANTOR_RETAINED_INCOME_TRUST</li><li>PENSION_PLAN</li><li>OTHER</li></ul><b>loan</b><ul><li>MORTGAGE</li><li>INSTALLMENT_LOAN</li><li>PERSONAL_LOAN</li><li>HOME_EQUITY_LINE_OF_CREDIT</li><li>LINE_OF_CREDIT</li><li>AUTO_LOAN</li><li>STUDENT_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>AUTO_INSURANCE</li><li>HEALTH_INSURANCE</li><li>HOME_INSURANCE</li><li>LIFE_INSURANCE</li><li>ANNUITY</li><li>TRAVEL_INSURANCE</li><li>INSURANCE</li></ul><b>realEstate</b><ul> <li>REAL_ESTATE</li></ul><b>reward</b><ul><li>REWARD_POINTS</li></ul><b>Manual Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PREPAID</li></ul><b>credit</b><ul>  <li>CREDIT</li></ul><b>loan</b><ul>  <li>PERSONAL_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>INSURANCE</li><li>ANNUITY</li></ul><b>investment</b><ul><li>BROKERAGE_CASH</li></ul><br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    address: AccountAddressSchema.exactOptional(),
    aggregationSource: z
      .enum(['SYSTEM', 'USER'])
      .exactOptional()
      .openapi({
        description:
          'The source through which the account(s) are added in the system.<br><b>Valid Values</b>: SYSTEM, USER<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    amountDue: MoneySchema.exactOptional(),
    annualPercentageYield: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Annual percentage yield (APY) is a normalized representation of an interest rate, based on a compounding period of one year. APY generally refers to the rate paid to a depositor by a financial institution on an account.<br><b>Applicable containers</b>: bank<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    annuityBalance: MoneySchema.exactOptional(),
    apr: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The annual percentage rate (APR) is the yearly rate of interest on the credit card account.<br><b>Additional Details:</b> The yearly percentage rate charged when a balance is held on a credit card. This rate of interest is applied every month on the outstanding credit card balance.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    associatedProviderAccountId: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({
        description:
          'The providerAccountIds that share the account with the primary providerAccountId that was created when the user had added the account for the first time.<br><b>Additional Details</b>: This attribute is returned in the response only if the account deduplication feature is enabled and the same account is mapped to more than one provider account IDs indicating the account is owned by more than one user, for example, joint accounts.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All Containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    autoRefresh: AutoRefreshSchema.exactOptional(),
    availableBalance: MoneySchema.exactOptional(),
    availableCash: MoneySchema.exactOptional(),
    availableCredit: MoneySchema.exactOptional(),
    balance: MoneySchema.exactOptional(),
    bankTransferCode: z
      .array(BankTransferCodeSchema)
      .exactOptional()
      .openapi({
        description:
          'Bank and branch identification information.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, investment, loan<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    cash: MoneySchema.exactOptional(),
    cashApr: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Annual percentage rate applied to cash withdrawals on the card.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
      }),
    cashValue: MoneySchema.exactOptional(),
    classification: z
      .enum([
        'OTHER',
        'PERSONAL',
        'CORPORATE',
        'SMALL_BUSINESS',
        'TRUST',
        'ADD_ON_CARD',
        'VIRTUAL_CARD',
      ])
      .exactOptional()
      .openapi({
        description:
          'The classification of the account such as personal, corporate, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, reward, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    collateral: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Property or possession offered to support a loan that can be seized on a default.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    coverage: z
      .array(CoverageSchema)
      .exactOptional()
      .openapi({
        description:
          'The coverage-related details of the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    createdDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the account is created in the Yodlee system.<br><b>Additional Details:</b> It is the date when the user links or aggregates the account(s) that are held with the provider to the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    currentBalance: MoneySchema.exactOptional(),
    currentLevel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Current level of the reward program the user is associated with. E.g. Silver, Jade etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    dataset: z
      .array(AccountDatasetSchema)
      .exactOptional()
      .openapi({
        description:
          'Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    deathBenefit: MoneySchema.exactOptional(),
    derivedApr: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Derived APR will be an estimated purchase APR based on consumers credit card transactions and credit card purchase.<br><b>Aggregated / Manual / Derived</b>: Derived<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    displayedName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name or identification of the account owner, as it appears at the FI site. <br><b>Note:</b> The account holder name can be full or partial based on how it is displayed in the account summary page of the FI site. In most cases, the FI site does not display the full account holder name in the account summary page.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan,  reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    dueDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the due amount has to be paid. <br><b>Additional Details:</b><br><b>Credit Card:</b> The monthly date by when the minimum payment is due to be paid on the credit card account. <br><b>Loan:</b> The date on or before which the due amount should be paid.<br><b>Note:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    enrollmentDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the user is enrolled on the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    escrowBalance: MoneySchema.exactOptional(),
    estimatedDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the home value was estimated.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    expirationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the insurance policy expires or matures.<br><b>Additional Details:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    faceAmount: MoneySchema.exactOptional(),
    frequency: z
      .enum([
        'DAILY',
        'ONE_TIME',
        'WEEKLY',
        'EVERY_2_WEEKS',
        'SEMI_MONTHLY',
        'MONTHLY',
        'QUARTERLY',
        'SEMI_ANNUALLY',
        'ANNUALLY',
        'EVERY_2_MONTHS',
        'EBILL',
        'FIRST_DAY_MONTHLY',
        'LAST_DAY_MONTHLY',
        'EVERY_4_WEEKS',
        'UNKNOWN',
        'OTHER',
      ])
      .exactOptional()
      .openapi({
        description:
          'The frequency of the billing cycle of the account in case of card. The frequency in which premiums are paid in an insurance policy such as monthly, quarterly, and annually. The frequency in which due amounts are paid in a loan  account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>:  creditCard, insurance, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    fullAccountNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full account number of the account that is included only when include = fullAccountNumber is provided in the request. For student loan account the account number that will be used for ACH or fund transfer<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan, reward,  otherAssets, otherLiabilities <br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><b> Note : </b> fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.</ul>',
        readOnly: true,
      }),
    fullAccountNumberList: FullAccountNumberListSchema.exactOptional(),
    guarantor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A nonprofit or state organization that works with lender, servicer, school, and the Department of Education to help successfully repay Federal Family Education Loan Program (FFELP) loans. If FFELP student loans default, the guarantor takes ownership of them.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    holder: z
      .array(AccountHolderSchema)
      .exactOptional()
      .openapi({
        description:
          'Holder details of the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
    homeInsuranceType: z
      .enum(['HOME_OWNER', 'RENTAL', 'RENTER', 'UNKNOWN', 'OTHER'])
      .exactOptional()
      .openapi({
        description:
          'Type of home insurance, like -<ul><li>HOME_OWNER</li><li>RENTAL</li><li>RENTER</li><li>etc..</li></ul><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    homeValue: MoneySchema.exactOptional(),
    id: z
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
          'The primary key of the account resource and the unique identifier for the account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>GET investmentOptions</li><li>GET accounts/historicalBalances</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    includeInNetWorth: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Used to determine  whether an account to be considered in the networth calculation.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank,creditCard,loan,investment,insurance,realEstate,otherAssets,otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    interestPaidLastYear: MoneySchema.exactOptional(),
    interestPaidYTD: MoneySchema.exactOptional(),
    interestRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          '<br><b>Bank:</b> The interest rate offered by a FI to its depositors on a bank account.<br><b>Loan:</b> Interest rate applied on the loan.<br><b>Additional Details:</b><br><b>Note:</b> The Interest Rate field is only applicable for the following account types: savings, checking, money market, and certificate of deposit.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    interestRateType: z
      .enum(['FIXED', 'VARIABLE', 'UNKNOWN', 'OTHER'])
      .exactOptional()
      .openapi({
        description:
          'The type of the interest rate, for example, fixed or variable.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    isAsset: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The account to be considered as an asset or liability.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    isManual: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if an account is aggregated from a site or it is a manual account i.e. account information manually provided by the user.<br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    lastEmployeeContributionAmount: MoneySchema.exactOptional(),
    lastEmployeeContributionDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the last employee contribution was made to the 401k account.<br><b>Note:</b> The last employee contribution date field is derived from the transaction data and not aggregated from the FI site. The field is only applicable to the 401k account type.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    lastPayment: MoneySchema.exactOptional(),
    lastPaymentAmount: MoneySchema.exactOptional(),
    lastPaymentDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the payment for the previous or current billing cycle is done.<br><b>Additional Details:</b> If the payment is already done for the current billing cycle, then the field indicates the payment date of the current billing cycle. If payment is yet to be done for the current billing cycle, then the field indicates the date on which the payment was made for any of the previous billing cycles. The last payment date at the account-level can differ from the last payment date at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    lastUpdated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date time the account information was last retrieved from the provider site and updated in the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    lender: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The financial institution that provides the loan.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    lifeInsuranceType: z
      .enum([
        'OTHER',
        'TERM_LIFE_INSURANCE',
        'UNIVERSAL_LIFE_INSURANCE',
        'WHOLE_LIFE_INSURANCE',
        'VARIABLE_LIFE_INSURANCE',
        'ULIP',
        'ENDOWMENT',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of life insurance.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    loanPayByDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date by which the payoff amount should be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    loanPayoffAmount: MoneySchema.exactOptional(),
    loanPayoffDetails: LoanPayoffDetailsSchema.exactOptional(),
    marginBalance: MoneySchema.exactOptional(),
    maturityAmount: MoneySchema.exactOptional(),
    maturityDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date when a certificate of deposit (CD/FD) matures or the final payment date of a loan at which point the principal amount (including pending interest) is due to be paid.<br><b>Additional Details:</b> The date when a certificate of deposit (CD) matures, i.e., the money in the CD can be withdrawn without paying an early withdrawal penalty.The final payment date of a loan, i.e., the principal amount (including pending interest) is due to be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    memo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The additional description or notes given by the user.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    minimumAmountDue: MoneySchema.exactOptional(),
    moneyMarketBalance: MoneySchema.exactOptional(),
    nextLevel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The eligible next level of the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    nickname: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The nickname of the account as provided by the consumer to identify an account. The account nickname can be used instead of the account name.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    oauthMigrationStatus: z
      .enum(['IN_PROGRESS', 'TO_BE_MIGRATED', 'COMPLETED'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the migration status of the account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    originalLoanAmount: MoneySchema.exactOptional(),
    originationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the loan is disbursed.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    overDraftLimit: MoneySchema.exactOptional(),
    paymentProfile: PaymentProfileSchema.exactOptional(),
    policyEffectiveDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the insurance policy coverage commences.<br><b>Applicable containers</b>: insurance<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    policyFromDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date the insurance policy began.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    policyStatus: z
      .enum(['ACTIVE', 'INACTIVE', 'OTHER'])
      .exactOptional()
      .openapi({
        description:
          'The status of the policy.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    policyTerm: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The duration for which the policy is valid or in effect. For example, one year, five years, etc.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    policyToDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date to which the policy exists.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    premium: MoneySchema.exactOptional(),
    premiumPaymentTerm: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of years for which premium payments have to be made in a policy.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    primaryRewardUnit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Primary reward unit for this reward program. E.g. miles, points, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    principalBalance: MoneySchema.exactOptional(),
    profile: AccountProfileSchema.exactOptional(),
    providerAccountId: z
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
          'The primary key of the provider account resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    providerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier of the provider site. The primary key of provider resource. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    providerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Service provider or institution name where the account originates. This belongs to the provider resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    recurringPayment: MoneySchema.exactOptional(),
    remainingBalance: MoneySchema.exactOptional(),
    repaymentPlanType: z
      .enum([
        'STANDARD',
        'GRADUATED',
        'EXTENDED',
        'INCOME_BASED',
        'INCOME_CONTINGENT',
        'INCOME_SENSITIVE',
        'PAY_AS_YOU_EARN',
        'REVISED_PAY_AS_YOU_EARN',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of repayment plan that the borrower prefers to repay the loan. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values:</b><br>',
        readOnly: true,
      }),
    rewardBalance: z
      .array(RewardBalanceSchema)
      .exactOptional()
      .openapi({
        description:
          'Information of different reward balances associated with the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    runningBalance: MoneySchema.exactOptional(),
    shortBalance: MoneySchema.exactOptional(),
    sourceAccountStatus: z
      .enum([
        'IN_REPAYMENT',
        'DEFAULTED',
        'IN_SCHOOL',
        'IN_GRACE_PERIOD',
        'DELINQUENCY',
        'DEFERMENT',
        'FORBEARANCE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Indicates the status of the loan account. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values:</b><br>',
        readOnly: true,
      }),
    sourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique ID that the provider site has assigned to the account. The source ID is only available for the HELD accounts.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan,  reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    term: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tenure for which the CD account is valid  or in case of loan, the number of years/months over which the loan amount  has to be repaid. <br><b>Additional Details:</b><br>  Bank: The Term field is only applicable for the account type CD.Loan: The period for which the loan agreement is in force. The period, before or at the end of which, the loan should either be repaid or renegotiated for another term.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    totalCashLimit: MoneySchema.exactOptional(),
    totalCreditLimit: MoneySchema.exactOptional(),
    totalCreditLine: MoneySchema.exactOptional(),
    totalUnvestedBalance: MoneySchema.exactOptional(),
    totalVestedBalance: MoneySchema.exactOptional(),
    userClassification: z
      .enum(['BUSINESS', 'PERSONAL'])
      .exactOptional()
      .openapi({
        description:
          '<b>Applicable containers</b>: reward, bank, creditCard, investment, loan, insurance, realEstate,  otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>POST accounts</ul><li>GET dataExtracts/userData</li><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    valuationType: z
      .enum(['SYSTEM', 'MANUAL'])
      .exactOptional()
      .openapi({
        description:
          'The valuation type indicates whether the home value is calculated either manually or by Yodlee Partners.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'Account', required: [] })
  .openapi('Account')

const HistoricalBalanceSchema = z
  .object({
    asOfDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date as of when the balance is last updated due to the auto account updates or user triggered updates. This balance will be carry forward for the days where there is no balance available in the system. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul>',
        readOnly: true,
      }),
    balance: MoneySchema.exactOptional(),
    dataSourceType: z
      .enum(['S', 'C', 'CF'])
      .exactOptional()
      .openapi({
        description:
          'The source of balance information.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    date: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date for which the account balance was provided.  This balance could be a carryforward, calculated or a scraped balance.<br><b>Additional Details</b>:<br><b>Scraped</b>: Balance shown in the provider site. This balance gets stored in Yodlee system during system/user account updates.<br><b>CarryForward</b>: Balance carried forward from the scraped balance to the days for which the balance was not available in the system. Balance may not be available for all the days in the system due to MFA information required, error in the site, credential changes, etc.<br><b>calculated</b>: Balances that gets calculated for the days that are prior to the account added date.  <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li><li>GET derived/networth</li></ul>',
        readOnly: true,
      }),
    isAsset: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the balance is an asset or liability.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'HistoricalBalance', required: [] })
  .openapi('HistoricalBalance')

const AccountHistorySchema = z
  .object({
    historicalBalances: z
      .array(HistoricalBalanceSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    id: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
  })
  .openapi({ title: 'AccountHistory', required: [] })
  .openapi('AccountHistory')

const AccountHistoricalBalancesResponseSchema = z
  .object({ account: z.array(AccountHistorySchema).exactOptional().openapi({ readOnly: true }) })
  .openapi({ title: 'AccountHistoricalBalancesResponse', required: [] })
  .openapi('AccountHistoricalBalancesResponse')

const AccountResponseSchema = z
  .object({ account: z.array(AccountSchema).exactOptional().openapi({ readOnly: true }) })
  .openapi({ title: 'AccountResponse', required: [] })
  .openapi('AccountResponse')

const ApiKeyOutputSchema = z
  .object({
    createdDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the apiKey was created for the customer.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>',
      }),
    expiresIn: z
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
          'Time in seconds after which the JWT token created for users expires.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>',
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ApiKey or the issuer key used to generate the JWT token for authentication.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>',
      }),
    publicKey: z
      .string()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'Public key uploaded by the customer while generating ApiKey.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>',
      }),
  })
  .openapi({ title: 'ApiKeyOutput', required: [] })
  .openapi('ApiKeyOutput')

const ApiKeyRequestSchema = z
  .object({
    publicKey: z
      .string()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'Public key uploaded by the customer while generating ApiKey.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>',
      }),
  })
  .openapi({ title: 'ApiKeyRequest', required: [] })
  .openapi('ApiKeyRequest')

const ApiKeyResponseSchema = z
  .object({
    apiKey: z
      .array(ApiKeyOutputSchema)
      .exactOptional()
      .openapi({
        description:
          'ApiKey customer details.<br><br><b>Endpoints</b>:<ul><li>GET /auth/apiKey</li><li>POST /auth/apiKey</li></ul>',
      }),
  })
  .openapi({ title: 'ApiKeyResponse', required: [] })
  .openapi('ApiKeyResponse')

const AssetClassificationSchema = z
  .object({
    allocation: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The allocation percentage of the holding.<br><br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    classificationType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of classification to which the investment belongs (assetClass, country, sector, and style).<br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    classificationValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value for each classificationType.<br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'AssetClassification', required: [] })
  .openapi('AssetClassification')

const AssetClassificationListSchema = z
  .object({
    classificationType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of classification to which the investment belongs (assetClass, country, sector, and style).<br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    classificationValue: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The value for each classificationType.<br><b>Required Feature Enablement</b>: Asset classification feature<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'AssetClassificationList', required: [] })
  .openapi('AssetClassificationList')

const TransactionDaysSchema = z
  .object({
    fullAccountNumberFields: z
      .array(z.enum(['paymentAccountNumber', 'unmaskedAccountNumber']))
      .exactOptional(),
    numberOfTransactionDays: z.int32().exactOptional(),
  })
  .openapi({ title: 'TransactionDays', required: [] })
  .openapi('TransactionDays')

const ContainerAttributesSchema = z
  .object({
    BANK: TransactionDaysSchema.exactOptional(),
    CREDITCARD: TransactionDaysSchema.exactOptional(),
    INSURANCE: TransactionDaysSchema.exactOptional(),
    INVESTMENT: TransactionDaysSchema.exactOptional(),
    LOAN: TransactionDaysSchema.exactOptional(),
  })
  .openapi({ title: 'ContainerAttributes', required: [] })
  .openapi('ContainerAttributes')

const AttributeSchema = z
  .object({
    container: z
      .array(
        z.enum([
          'bank',
          'creditCard',
          'investment',
          'insurance',
          'loan',
          'reward',
          'realEstate',
          'otherAssets',
          'otherLiabilities',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'Containers for which the attributes are supported.<br><br><b>Endpoints</b>:<ul><li>GET providers</li><li>GET providers/{providerId}</li></ul>',
      }),
    containerAttributes: ContainerAttributesSchema.exactOptional(),
    fromDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Applicable only to EBILLS and STATEMENTS attributes of DOCUMENT dataset.<br><br><b>Endpoints</b>:<ul><li>POST providerAccounts</li><li>PUT providerAccounts</li></ul>',
        readOnly: true,
      }),
    fromFinYear: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Applicable only to TAX attribute of DOCUMENT dataset.<br><br><b>Endpoints</b>:<ul><li>POST providerAccounts</li><li>PUT providerAccounts</li></ul>',
        readOnly: true,
      }),
    name: z
      .enum([
        'BASIC_ACCOUNT_INFO',
        'TRANSACTIONS',
        'STATEMENTS',
        'HOLDINGS',
        'ACCOUNT_DETAILS',
        'TAX',
        'EBILLS',
        'FULL_ACCT_NUMBER',
        'BANK_TRANSFER_CODE',
        'HOLDER_NAME',
        'HOLDER_DETAILS',
        'PAYMENT_PROFILE',
        'PAYMENT_DETAILS',
        'INTEREST_DETAILS',
        'COVERAGE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Attributes that are supported for a dataset.<br><br><b>Endpoints</b>:<ul><li>GET providers</li><li>GET providers/{providerId}</li></ul>',
      }),
    toDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Applicable only to EBILLS and STATEMENTS attributes of DOCUMENT dataset.<br><br><b>Endpoints</b>:<ul><li>POST providerAccounts</li><li>PUT providerAccounts</li></ul>',
        readOnly: true,
      }),
    toFinYear: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Applicable only to TAX attribute of DOCUMENT dataset.<br><br><b>Endpoints</b>:<ul><li>POST providerAccounts</li><li>PUT providerAccounts</li></ul>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'Attribute', required: [] })
  .openapi('Attribute')

const CapabilitySchema = z
  .object({
    container: z
      .array(
        z.enum([
          'bank',
          'creditCard',
          'investment',
          'insurance',
          'loan',
          'reward',
          'realEstate',
          'otherAssets',
          'otherLiabilities',
        ]),
      )
      .exactOptional()
      .openapi({ readOnly: true }),
    name: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ title: 'Capability', required: [] })
  .openapi('Capability')

const ClientCredentialTokenSchema = z
  .object({
    accessToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Access Token to access YSL 1.1 services.<br><br><b>Endpoints</b>:<ul><li>POST /auth/token</li></ul>',
        readOnly: true,
      }),
    expiresIn: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Time in seconds after which the issued accessToken expires.<br><br><b>Endpoints</b>:<ul><li>POST /auth/token</li></ul>',
        readOnly: true,
      }),
    issuedAt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date and time on which accessToken was created for the customer.<br><br><b>Endpoints</b>:<ul><li>POST /auth/token</li></ul>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'ClientCredentialToken', required: [] })
  .openapi('ClientCredentialToken')

const ClientCredentialTokenResponseSchema = z
  .object({ token: ClientCredentialTokenSchema.exactOptional() })
  .openapi({ title: 'ClientCredentialTokenResponse', required: [] })
  .openapi('ClientCredentialTokenResponse')

const CobrandSchema = z
  .object({
    cobrandLogin: z.string().min(1).max(2147483647),
    cobrandPassword: z.string().min(1).max(2147483647),
    locale: z
      .string()
      .regex(/[a-z]{2}_[A-Z]{2}/)
      .exactOptional()
      .openapi({
        description:
          "The customer's locale that will be considered for the localization functionality.<br><br><b>Endpoints</b>:<ul><li>POST cobrand/login</li></ul>",
      }),
  })
  .openapi({ required: ['cobrandLogin', 'cobrandPassword'], title: 'Cobrand' })
  .openapi('Cobrand')

const CobrandLoginRequestSchema = z
  .object({ cobrand: CobrandSchema })
  .openapi({ required: ['cobrand'], title: 'CobrandLoginRequest' })
  .openapi('CobrandLoginRequest')

const CobrandSessionSchema = z
  .object({ cobSession: z.string().exactOptional() })
  .openapi({ title: 'CobrandSession', required: [] })
  .openapi('CobrandSession')

const CobrandLoginResponseSchema = z
  .object({
    applicationId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The application identifier.<br><br><b>Endpoints</b>:<ul><li>POST cobrand/login</li></ul>',
        readOnly: true,
      }),
    cobrandId: z
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
          'Unique identifier of the cobrand (customer) in the system.<br><br><b>Endpoints</b>:<ul><li>POST cobrand/login</li></ul>',
        readOnly: true,
      }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The customer's locale that will be considered for the localization functionality.<br><br><b>Endpoints</b>:<ul><li>POST cobrand/login</li></ul>",
        readOnly: true,
      }),
    session: CobrandSessionSchema.exactOptional(),
  })
  .openapi({ title: 'CobrandLoginResponse', required: [] })
  .openapi('CobrandLoginResponse')

const CobrandNotificationEventSchema = z
  .object({
    callbackUrl: z
      .string()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/config/notifications/events</li></ul>',
      }),
    name: z
      .enum(['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'])
      .exactOptional()
      .openapi({
        description:
          'Name of the event for which the customers must subscribe to receive notifications.<br><b>Valid Value:</b> Notification Events Name<br><br><b>Endpoints</b>:<ul><li>GET cobrand/config/notifications/events</li></ul><b>Applicable Values</b><br>',
      }),
  })
  .openapi({ title: 'CobrandNotificationEvent', required: [] })
  .openapi('CobrandNotificationEvent')

const CobrandNotificationResponseSchema = z
  .object({
    event: z.array(CobrandNotificationEventSchema).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ title: 'CobrandNotificationResponse', required: [] })
  .openapi('CobrandNotificationResponse')

const CobrandPublicKeyResponseSchema = z
  .object({
    keyAlias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key name used for encryption.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/publicKey</li></ul>',
        readOnly: true,
      }),
    keyAsPemString: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Public key that the customer should be using to encrypt the credentials and answers before sending to the add & update providerAccounts APIs.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/publicKey</li></ul>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'CobrandPublicKeyResponse', required: [] })
  .openapi('CobrandPublicKeyResponse')

const ConfigsNotificationEventSchema = z
  .object({
    callbackUrl: z
      .string()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET configs/notifications/events</li></ul>',
      }),
    name: z
      .enum(['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'])
      .exactOptional()
      .openapi({
        description:
          'Name of the event for which the customers must subscribe to receive notifications.<br><b>Valid Value:</b> Notification Events Name<br><br><b>Endpoints</b>:<ul><li>GET configs/notifications/events</li></ul><b>Applicable Values</b><br>',
      }),
  })
  .openapi({ title: 'ConfigsNotificationEvent', required: [] })
  .openapi('ConfigsNotificationEvent')

const ConfigsNotificationResponseSchema = z
  .object({
    event: z.array(ConfigsNotificationEventSchema).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ title: 'ConfigsNotificationResponse', required: [] })
  .openapi('ConfigsNotificationResponse')

const ConfigsPublicKeySchema = z
  .object({
    alias: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The key name used for encryption.<br><br><b>Endpoints</b>:<ul><li>GET configs/publicKey</li></ul>',
        readOnly: true,
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Public key that the customer should be using to encrypt the credentials and answers before sending to the add and update providerAccounts APIs.<br><br><b>Endpoints</b>:<ul><li>GET configs/publicKey</li></ul>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'ConfigsPublicKey', required: [] })
  .openapi('ConfigsPublicKey')

const ConfigsPublicKeyResponseSchema = z
  .object({ publicKey: ConfigsPublicKeySchema.exactOptional() })
  .openapi({ title: 'ConfigsPublicKeyResponse', required: [] })
  .openapi('ConfigsPublicKeyResponse')

const ContactSchema = z
  .object({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Email Id of the merchant<br><br><b>Applicable containers</b>: bank,creditCard,investment,loan<br>',
      }),
    phone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Phone number of the merchant<br><br><b>Applicable containers</b>: bank,creditCard,investment,loan<br>',
      }),
  })
  .openapi({ title: 'Contact', required: [] })
  .openapi('Contact')

const CoordinatesSchema = z
  .object({
    latitude: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Latitude of the merchant<br><br><b>Applicable containers</b>: bank,creditCard,loan<br>',
      }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Longitude of the merchant<br><br><b>Applicable containers</b>: bank,creditCard,loan<br>',
      }),
  })
  .openapi({ title: 'Coordinates', required: [] })
  .openapi('Coordinates')

const CreateAccountInfoSchema = z
  .object({
    accountName: z.string().min(1).max(100),
    accountNumber: z
      .string()
      .regex(/^[a-zA-Z0-9]+$/)
      .min(0)
      .max(100)
      .exactOptional(),
    accountType: z.string().min(1).max(2147483647),
    address: AccountAddressSchema.exactOptional(),
    amountDue: MoneySchema.exactOptional(),
    balance: MoneySchema.exactOptional(),
    dueDate: z.string().exactOptional(),
    frequency: z
      .enum([
        'DAILY',
        'ONE_TIME',
        'WEEKLY',
        'EVERY_2_WEEKS',
        'SEMI_MONTHLY',
        'MONTHLY',
        'QUARTERLY',
        'SEMI_ANNUALLY',
        'ANNUALLY',
        'EVERY_2_MONTHS',
        'EBILL',
        'FIRST_DAY_MONTHLY',
        'LAST_DAY_MONTHLY',
        'EVERY_4_WEEKS',
        'UNKNOWN',
        'OTHER',
      ])
      .exactOptional(),
    homeValue: MoneySchema.exactOptional(),
    includeInNetWorth: z.string().exactOptional(),
    memo: z.string().min(0).max(250).exactOptional(),
    nickname: z.string().min(0).max(50).exactOptional(),
    valuationType: z.enum(['SYSTEM', 'MANUAL']).exactOptional(),
  })
  .openapi({ required: ['accountName', 'accountType'], title: 'CreateAccountInfo' })
  .openapi('CreateAccountInfo')

const CreateAccountRequestSchema = z
  .object({ account: CreateAccountInfoSchema })
  .openapi({ required: ['account'], title: 'CreateAccountRequest' })
  .openapi('CreateAccountRequest')

const CreateCobrandNotificationEventSchema = z
  .object({
    callbackUrl: z
      .string()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/config/notifications/events</li></ul>',
      }),
  })
  .openapi({ title: 'CreateCobrandNotificationEvent', required: [] })
  .openapi('CreateCobrandNotificationEvent')

const CreateCobrandNotificationEventRequestSchema = z
  .object({ event: CreateCobrandNotificationEventSchema })
  .openapi({ required: ['event'], title: 'CreateCobrandNotificationEventRequest' })
  .openapi('CreateCobrandNotificationEventRequest')

const CreateConfigsNotificationEventSchema = z
  .object({
    callbackUrl: z
      .string()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET configs/notifications/events</li></ul>',
      }),
  })
  .openapi({ title: 'CreateConfigsNotificationEvent', required: [] })
  .openapi('CreateConfigsNotificationEvent')

const CreateConfigsNotificationEventRequestSchema = z
  .object({ event: CreateConfigsNotificationEventSchema })
  .openapi({ required: ['event'], title: 'CreateConfigsNotificationEventRequest' })
  .openapi('CreateConfigsNotificationEventRequest')

const CreatedAccountInfoSchema = z
  .object({
    accountName: z.string().exactOptional().openapi({ readOnly: true }),
    accountNumber: z.string().exactOptional().openapi({ readOnly: true }),
    id: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
  })
  .openapi({ title: 'CreatedAccountInfo', required: [] })
  .openapi('CreatedAccountInfo')

const CreatedAccountResponseSchema = z
  .object({
    account: z.array(CreatedAccountInfoSchema).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ title: 'CreatedAccountResponse', required: [] })
  .openapi('CreatedAccountResponse')

const DataExtractsAccountSchema = z
  .object({
    '401kLoan': MoneySchema.exactOptional(),
    CONTAINER: z
      .enum([
        'bank',
        'creditCard',
        'investment',
        'insurance',
        'loan',
        'reward',
        'realEstate',
        'otherAssets',
        'otherLiabilities',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of service. E.g., Bank, Credit Card, Investment, Insurance, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    accountName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The account name as it appears at the site.<br>(The POST accounts service response return this field as name)<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    accountNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The account number as it appears on the site. (The POST accounts service response return this field as number)<br><b>Additional Details</b>:<b> Bank/ Loan/ Insurance/ Investment</b>:<br> The account number for the bank account as it appears at the site.<br><b>Credit Card</b>: The account number of the card account as it appears at the site,<br>i.e., the card number.The account number can be full or partial based on how it is displayed in the account summary page of the site.In most cases, the site does not display the full account number in the account summary page and additional navigation is required to aggregate it.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    accountStatus: z
      .enum(['ACTIVE', 'INACTIVE', 'TO_BE_CLOSED', 'CLOSED', 'DELETED'])
      .exactOptional()
      .openapi({
        description:
          'The status of the account that is updated by the consumer through an application or an API. Valid Values: AccountStatus<br><b>Additional Details:</b><br><b>ACTIVE:</b> All the added manual and aggregated accounts status will be made "ACTIVE" by default. <br><b>TO_BE_CLOSED:</b> If the aggregated accounts are not found or closed in the data provider site, Yodlee system marks the status as TO_BE_CLOSED<br><b>INACTIVE:</b> Users can update the status as INACTIVE to stop updating and to stop considering the account in other services<br><b>CLOSED:</b> Users can update the status as CLOSED, if the account is closed with the provider. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    accountType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of account that is aggregated, i.e., savings, checking, credit card, charge, HELOC, etc. The account type is derived based on the attributes of the account. <br><b>Valid Values:</b><br><b>Aggregated Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PPF</li><li>RECURRING_DEPOSIT</li><li>FSA</li><li>MONEY_MARKET</li><li>IRA</li><li>PREPAID</li></ul><b>creditCard</b><ul><li>OTHER</li><li>CREDIT</li><li>STORE</li><li>CHARGE</li><li>OTHER</li></ul><b>investment (SN 1.0)</b><ul><li>BROKERAGE_MARGIN</li><li>HSA</li><li>IRA</li><li>BROKERAGE_CASH</li><li>401K</li><li>403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE</li><li>CUSTODIAL</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE</li><li>JTTIC</li><li>JTWROS</li><li>COMMUNITY_PROPERTY</li><li>JOINT_BY_ENTIRETY</li><li>CONSERVATORSHIP</li><li>ROTH</li><li>ROTH_CONVERSION</li><li>ROLLOVER</li><li>EDUCATIONAL</li><li>529_PLAN</li><li>457_DEFERRED_COMPENSATION</li><li>401A</li><li>PSP</li><li>MPP</li><li>STOCK_BASKET</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER</li><li>CHARITABLE_LEAD</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP</li><li>UTMA</li><li>UGMA</li><li>ESOPP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>SOLE_PROPRIETORSHIP</li><li>CHURCH</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CMA</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET</li><li>SUPER_ANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN</li><li>DEFERRED_PROFIT_SHARING_PLAN</li><li>NON_REGISTERED_SAVINGS_PLAN</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN</li><li>GROUP_RETIREMENT_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_ACCOUNT</li><li>REGISTERED_PENSION_PLAN</li><li>TAX_FREE_SAVINGS_ACCOUNT</li><li>LIFE_INCOME_FUND</li><li>REGISTERED_RETIREMENT_INCOME_FUND</li><li>SPOUSAL_RETIREMENT_INCOME_FUND</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND</li><li>GUARANTEED_INVESTMENT_CERTIFICATES</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN</li><li>OTHER</li></ul><b>investment (SN 2.0)</b><ul><li>BROKERAGE_CASH</li><li>BROKERAGE_MARGIN</li><li>INDIVIDUAL_RETIREMENT_ACCOUNT_IRA</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_401K</li><li>EMPLOYEE_RETIREMENT_SAVINGS_PLAN_403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE_IRA</li><li>CUSTODIAL_ACCOUNT</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE_INVESTMENT_ACCOUNT</li><li>JOINT_TENANTS_TENANCY_IN_COMMON_JTIC</li><li>JOINT_TENANTS_WITH_RIGHTS_OF_SURVIVORSHIP_JTWROS</li><li>JOINT_TENANTS_COMMUNITY_PROPERTY</li><li>JOINT_TENANTS_TENANTS_BY_ENTIRETY</li><li>CONSERVATOR</li><li>ROTH_IRA</li><li>ROTH_CONVERSION</li><li>ROLLOVER_IRA</li><li>EDUCATIONAL</li><li>EDUCATIONAL_SAVINGS_PLAN_529</li><li>DEFERRED_COMPENSATION_PLAN_457</li><li>MONEY_PURCHASE_RETIREMENT_PLAN_401A</li><li>PROFIT_SHARING_PLAN</li><li>MONEY_PURCHASE_PLAN</li><li>STOCK_BASKET_ACCOUNT</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER_TRUST</li><li>CHARITABLE_LEAD_TRUST</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP_IRA</li><li>UNIFORM_TRANSFER_TO_MINORS_ACT_UTMA</li><li>UNIFORM_GIFT_TO_MINORS_ACT_UGMA</li><li>EMPLOYEE_STOCK_OWNERSHIP_PLAN_ESOP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>PROPRIETORSHIP</li><li>CHURCH_ACCOUNT</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CASH_MANAGEMENT_ACCOUNT</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN_ESPP</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET_ACCOUNT</li><li>SUPERANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN_RRSP</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN_SRSP</li><li>DEFERRED_PROFIT_SHARING_PLAN_DPSP</li><li>NON_REGISTERED_SAVINGS_PLAN_NRSP</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN_RESP</li><li>GROUP_RETIREMENT_SAVINGS_PLAN_GRSP</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN_LRSP</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN_RLSP</li><li>LOCKED_IN_RETIREMENT_ACCOUNT_LIRA</li><li>REGISTERED_PENSION_PLAN_RPP</li><li>TAX_FREE_SAVINGS_ACCOUNT_TFSA</li><li>LIFE_INCOME_FUND_LIF</li><li>REGISTERED_RETIREMENT_INCOME_FUND_RIF</li><li>SPOUSAL_RETIREMENT_INCOME_FUND_SRIF</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND_LRIF</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND_PRIF</li><li>GUARANTEED_INVESTMENT_CERTIFICATES_GIC</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN_RDSP</li><li>DEFINED_CONTRIBUTION_PLAN</li><li>DEFINED_BENEFIT_PLAN</li><li>EMPLOYEE_STOCK_OPTION_PLAN</li><li>NONQUALIFIED_DEFERRED_COMPENSATION_PLAN_409A</li><li>KEOGH_PLAN</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_ROTH_401K</li><li>DEFERRED_CONTINGENT_CAPITAL_PLAN_DCCP</li><li>EMPLOYEE_BENEFIT_PLAN</li><li>EMPLOYEE_SAVINGS_PLAN</li><li>HEALTH_SAVINGS_ACCOUNT_HSA</li><li>COVERDELL_EDUCATION_SAVINGS_ACCOUNT_ESA</li><li>TESTAMENTARY_TRUST</li><li>ESTATE</li><li>GRANTOR_RETAINED_ANNUITY_TRUST_GRAT</li><li>ADVISORY_ACCOUNT</li><li>NON_PROFIT_ORGANIZATION_501C</li><li>HEALTH_REIMBURSEMENT_ARRANGEMENT_HRA</li><li>INDIVIDUAL_SAVINGS_ACCOUNT_ISA</li><li>CASH_ISA</li><li>STOCKS_AND_SHARES_ISA</li><li>INNOVATIVE_FINANCE_ISA</li><li>JUNIOR_ISA</li><li>EMPLOYEES_PROVIDENT_FUND_ORGANIZATION_EPFO</li><li>PUBLIC_PROVIDENT_FUND_PPF</li><li>EMPLOYEES_PENSION_SCHEME_EPS</li><li>NATIONAL_PENSION_SYSTEM_NPS</li><li>INDEXED_ANNUITY</li><li>ANNUITIZED_ANNUITY</li><li>VARIABLE_ANNUITY</li><li>ROTH_403B</li><li>SPOUSAL_IRA</li><li>SPOUSAL_ROTH_IRA</li><li>SARSEP_IRA</li><li>SUBSTANTIALLY_EQUAL_PERIODIC_PAYMENTS_SEPP</li><li>OFFSHORE_TRUST</li><li>IRREVOCABLE_LIFE_INSURANCE_TRUST</li><li>INTERNATIONAL_TRUST</li><li>LIFE_INTEREST_TRUST</li><li>EMPLOYEE_BENEFIT_TRUST</li><li>PRECIOUS_METAL_ACCOUNT</li><li>INVESTMENT_LOAN_ACCOUNT</li><li>GRANTOR_RETAINED_INCOME_TRUST</li><li>PENSION_PLAN</li><li>OTHER</li></ul><b>loan</b><ul><li>MORTGAGE</li><li>INSTALLMENT_LOAN</li><li>PERSONAL_LOAN</li><li>HOME_EQUITY_LINE_OF_CREDIT</li><li>LINE_OF_CREDIT</li><li>AUTO_LOAN</li><li>STUDENT_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>AUTO_INSURANCE</li><li>HEALTH_INSURANCE</li><li>HOME_INSURANCE</li><li>LIFE_INSURANCE</li><li>ANNUITY</li><li>TRAVEL_INSURANCE</li><li>INSURANCE</li></ul><b>realEstate</b><ul> <li>REAL_ESTATE</li></ul><b>reward</b><ul><li>REWARD_POINTS</li></ul><b>Manual Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PREPAID</li></ul><b>credit</b><ul>  <li>CREDIT</li></ul><b>loan</b><ul>  <li>PERSONAL_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>INSURANCE</li><li>ANNUITY</li></ul><b>investment</b><ul><li>BROKERAGE_CASH</li></ul><br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    address: AccountAddressSchema.exactOptional(),
    aggregationSource: z
      .enum(['SYSTEM', 'USER'])
      .exactOptional()
      .openapi({
        description:
          'The source through which the account(s) are added in the system.<br><b>Valid Values</b>: SYSTEM, USER<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    amountDue: MoneySchema.exactOptional(),
    annualPercentageYield: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Annual percentage yield (APY) is a normalized representation of an interest rate, based on a compounding period of one year. APY generally refers to the rate paid to a depositor by a financial institution on an account.<br><b>Applicable containers</b>: bank<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    annuityBalance: MoneySchema.exactOptional(),
    apr: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The annual percentage rate (APR) is the yearly rate of interest on the credit card account.<br><b>Additional Details:</b> The yearly percentage rate charged when a balance is held on a credit card. This rate of interest is applied every month on the outstanding credit card balance.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    associatedProviderAccountId: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({
        description:
          'The providerAccountIds that share the account with the primary providerAccountId that was created when the user had added the account for the first time.<br><b>Additional Details</b>: This attribute is returned in the response only if the account deduplication feature is enabled and the same account is mapped to more than one provider account IDs indicating the account is owned by more than one user, for example, joint accounts.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All Containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    availableBalance: MoneySchema.exactOptional(),
    availableCash: MoneySchema.exactOptional(),
    availableCredit: MoneySchema.exactOptional(),
    balance: MoneySchema.exactOptional(),
    bankTransferCode: z
      .array(BankTransferCodeSchema)
      .exactOptional()
      .openapi({
        description:
          'Bank and branch identification information.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, investment, loan<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    cash: MoneySchema.exactOptional(),
    cashApr: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Annual percentage rate applied to cash withdrawals on the card.<br><br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
      }),
    cashValue: MoneySchema.exactOptional(),
    classification: z
      .enum([
        'OTHER',
        'PERSONAL',
        'CORPORATE',
        'SMALL_BUSINESS',
        'TRUST',
        'ADD_ON_CARD',
        'VIRTUAL_CARD',
      ])
      .exactOptional()
      .openapi({
        description:
          'The classification of the account such as personal, corporate, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, reward, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    collateral: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Property or possession offered to support a loan that can be seized on a default.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    coverage: z
      .array(CoverageSchema)
      .exactOptional()
      .openapi({
        description:
          'The coverage-related details of the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance,investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    createdDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the account is created in the Yodlee system.<br><b>Additional Details:</b> It is the date when the user links or aggregates the account(s) that are held with the provider to the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    currentBalance: MoneySchema.exactOptional(),
    currentLevel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Current level of the reward program the user is associated with. E.g. Silver, Jade etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    dataset: z
      .array(AccountDatasetSchema)
      .exactOptional()
      .openapi({
        description:
          'Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    deathBenefit: MoneySchema.exactOptional(),
    derivedApr: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Derived APR will be an estimated purchase APR based on consumers credit card transactions and credit card purchase.<br><b>Aggregated / Manual / Derived</b>: Derived<br><b>Applicable containers</b>: creditCard<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    displayedName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name or identification of the account owner, as it appears at the FI site. <br><b>Note:</b> The account holder name can be full or partial based on how it is displayed in the account summary page of the FI site. In most cases, the FI site does not display the full account holder name in the account summary page.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan,  reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    dueDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the due amount has to be paid. <br><b>Additional Details:</b><br><b>Credit Card:</b> The monthly date by when the minimum payment is due to be paid on the credit card account. <br><b>Loan:</b> The date on or before which the due amount should be paid.<br><b>Note:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    enrollmentDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the user is enrolled on the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    escrowBalance: MoneySchema.exactOptional(),
    estimatedDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the home value was estimated.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    expirationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the insurance policy expires or matures.<br><b>Additional Details:</b> The due date at the account-level can differ from the due date field at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    faceAmount: MoneySchema.exactOptional(),
    frequency: z
      .enum([
        'DAILY',
        'ONE_TIME',
        'WEEKLY',
        'EVERY_2_WEEKS',
        'SEMI_MONTHLY',
        'MONTHLY',
        'QUARTERLY',
        'SEMI_ANNUALLY',
        'ANNUALLY',
        'EVERY_2_MONTHS',
        'EBILL',
        'FIRST_DAY_MONTHLY',
        'LAST_DAY_MONTHLY',
        'EVERY_4_WEEKS',
        'UNKNOWN',
        'OTHER',
      ])
      .exactOptional()
      .openapi({
        description:
          'The frequency of the billing cycle of the account in case of card. The frequency in which premiums are paid in an insurance policy such as monthly, quarterly, and annually. The frequency in which due amounts are paid in a loan  account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>:  creditCard, insurance, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    guarantor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A nonprofit or state organization that works with lender, servicer, school, and the Department of Education to help successfully repay Federal Family Education Loan Program (FFELP) loans. If FFELP student loans default, the guarantor takes ownership of them.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    homeInsuranceType: z
      .enum(['HOME_OWNER', 'RENTAL', 'RENTER', 'UNKNOWN', 'OTHER'])
      .exactOptional()
      .openapi({
        description:
          'Type of home insurance, like -<ul><li>HOME_OWNER</li><li>RENTAL</li><li>RENTER</li><li>etc..</li></ul><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    homeValue: MoneySchema.exactOptional(),
    id: z
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
          'The primary key of the account resource and the unique identifier for the account.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>GET investmentOptions</li><li>GET accounts/historicalBalances</li><li>POST accounts</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    includeInNetWorth: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Used to determine  whether an account to be considered in the networth calculation.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank,creditCard,loan,investment,insurance,realEstate,otherAssets,otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    interestPaidLastYear: MoneySchema.exactOptional(),
    interestPaidYTD: MoneySchema.exactOptional(),
    interestRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          '<br><b>Bank:</b> The interest rate offered by a FI to its depositors on a bank account.<br><b>Loan:</b> Interest rate applied on the loan.<br><b>Additional Details:</b><br><b>Note:</b> The Interest Rate field is only applicable for the following account types: savings, checking, money market, and certificate of deposit.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    interestRateType: z
      .enum(['FIXED', 'VARIABLE', 'UNKNOWN', 'OTHER'])
      .exactOptional()
      .openapi({
        description:
          'The type of the interest rate, for example, fixed or variable.<br><b>Applicable containers</b>: loan<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    isAsset: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The account to be considered as an asset or liability.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    isDeleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the account is marked as deleted.<b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    isManual: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if an account is aggregated from a site or it is a manual account i.e. account information manually provided by the user.<br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    lastEmployeeContributionAmount: MoneySchema.exactOptional(),
    lastEmployeeContributionDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the last employee contribution was made to the 401k account.<br><b>Note:</b> The last employee contribution date field is derived from the transaction data and not aggregated from the FI site. The field is only applicable to the 401k account type.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: investment<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    lastPayment: MoneySchema.exactOptional(),
    lastPaymentAmount: MoneySchema.exactOptional(),
    lastPaymentDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the payment for the previous or current billing cycle is done.<br><b>Additional Details:</b> If the payment is already done for the current billing cycle, then the field indicates the payment date of the current billing cycle. If payment is yet to be done for the current billing cycle, then the field indicates the date on which the payment was made for any of the previous billing cycles. The last payment date at the account-level can differ from the last payment date at the statement-level, as the information in the aggregated card account data provides an up-to-date information to the consumer.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: creditCard, loan, insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    lastUpdated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date time the account information was last retrieved from the provider site and updated in the Yodlee system.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    lender: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The financial institution that provides the loan.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    lifeInsuranceType: z
      .enum([
        'OTHER',
        'TERM_LIFE_INSURANCE',
        'UNIVERSAL_LIFE_INSURANCE',
        'WHOLE_LIFE_INSURANCE',
        'VARIABLE_LIFE_INSURANCE',
        'ULIP',
        'ENDOWMENT',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of life insurance.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    loanPayByDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date by which the payoff amount should be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    loanPayoffAmount: MoneySchema.exactOptional(),
    loanPayoffDetails: LoanPayoffDetailsSchema.exactOptional(),
    marginBalance: MoneySchema.exactOptional(),
    maturityAmount: MoneySchema.exactOptional(),
    maturityDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date when a certificate of deposit (CD/FD) matures or the final payment date of a loan at which point the principal amount (including pending interest) is due to be paid.<br><b>Additional Details:</b> The date when a certificate of deposit (CD) matures, i.e., the money in the CD can be withdrawn without paying an early withdrawal penalty.The final payment date of a loan, i.e., the principal amount (including pending interest) is due to be paid.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    memo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The additional description or notes given by the user.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    minimumAmountDue: MoneySchema.exactOptional(),
    moneyMarketBalance: MoneySchema.exactOptional(),
    nextLevel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The eligible next level of the rewards program.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    nickname: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The nickname of the account as provided by the consumer to identify an account. The account nickname can be used instead of the account name.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    oauthMigrationStatus: z
      .enum(['IN_PROGRESS', 'TO_BE_MIGRATED', 'COMPLETED'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the migration status of the account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    originalLoanAmount: MoneySchema.exactOptional(),
    originationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the loan is disbursed.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    overDraftLimit: MoneySchema.exactOptional(),
    policyEffectiveDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the insurance policy coverage commences.<br><b>Applicable containers</b>: insurance<br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    policyFromDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date the insurance policy began.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    policyStatus: z
      .enum(['ACTIVE', 'INACTIVE', 'OTHER'])
      .exactOptional()
      .openapi({
        description:
          'The status of the policy.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    policyTerm: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The duration for which the policy is valid or in effect. For example, one year, five years, etc.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    policyToDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date to which the policy exists.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    premium: MoneySchema.exactOptional(),
    premiumPaymentTerm: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of years for which premium payments have to be made in a policy.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: insurance<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    primaryRewardUnit: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Primary reward unit for this reward program. E.g. miles, points, etc.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    principalBalance: MoneySchema.exactOptional(),
    providerAccountId: z
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
          'The primary key of the provider account resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    providerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier of the provider site. The primary key of provider resource. <br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    providerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Service provider or institution name where the account originates. This belongs to the provider resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    recurringPayment: MoneySchema.exactOptional(),
    remainingBalance: MoneySchema.exactOptional(),
    repaymentPlanType: z
      .enum([
        'STANDARD',
        'GRADUATED',
        'EXTENDED',
        'INCOME_BASED',
        'INCOME_CONTINGENT',
        'INCOME_SENSITIVE',
        'PAY_AS_YOU_EARN',
        'REVISED_PAY_AS_YOU_EARN',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of repayment plan that the borrower prefers to repay the loan. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values:</b><br>',
        readOnly: true,
      }),
    rewardBalance: z
      .array(RewardBalanceSchema)
      .exactOptional()
      .openapi({
        description:
          'Information of different reward balances associated with the account.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    runningBalance: MoneySchema.exactOptional(),
    shortBalance: MoneySchema.exactOptional(),
    sourceAccountStatus: z
      .enum([
        'IN_REPAYMENT',
        'DEFAULTED',
        'IN_SCHOOL',
        'IN_GRACE_PERIOD',
        'DELINQUENCY',
        'DEFERMENT',
        'FORBEARANCE',
      ])
      .exactOptional()
      .openapi({
        description:
          'Indicates the status of the loan account. <br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values:</b><br>',
        readOnly: true,
      }),
    sourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique ID that the provider site has assigned to the account. The source ID is only available for the HELD accounts.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan,  reward<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    term: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tenure for which the CD account is valid  or in case of loan, the number of years/months over which the loan amount  has to be repaid. <br><b>Additional Details:</b><br>  Bank: The Term field is only applicable for the account type CD.Loan: The period for which the loan agreement is in force. The period, before or at the end of which, the loan should either be repaid or renegotiated for another term.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, loan<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    totalCashLimit: MoneySchema.exactOptional(),
    totalCreditLimit: MoneySchema.exactOptional(),
    totalCreditLine: MoneySchema.exactOptional(),
    totalUnvestedBalance: MoneySchema.exactOptional(),
    totalVestedBalance: MoneySchema.exactOptional(),
    userClassification: z
      .enum(['BUSINESS', 'PERSONAL'])
      .exactOptional()
      .openapi({
        description:
          '<b>Applicable containers</b>: reward, bank, creditCard, investment, loan, insurance, realEstate,  otherLiabilities<br><b>Endpoints</b>:<ul><li>GET accounts </li><li>GET accounts/{accountId}</li><li>POST accounts</ul><li>GET dataExtracts/userData</li><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    valuationType: z
      .enum(['SYSTEM', 'MANUAL'])
      .exactOptional()
      .openapi({
        description:
          'The valuation type indicates whether the home value is calculated either manually or by Yodlee Partners.<br><br><b>Aggregated / Manual</b>: Manual<br><b>Applicable containers</b>: realEstate<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'DataExtractsAccount', required: [] })
  .openapi('DataExtractsAccount')

const DataExtractsEventLinksSchema = z
  .object({
    href: z.string().exactOptional().openapi({ readOnly: true }),
    methodType: z.string().exactOptional().openapi({ readOnly: true }),
    rel: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ title: 'DataExtractsEventLinks', required: [] })
  .openapi('DataExtractsEventLinks')

const DataExtractsUserSchema = z
  .object({ loginName: z.string().exactOptional().openapi({ readOnly: true }) })
  .openapi({ title: 'DataExtractsUser', required: [] })
  .openapi('DataExtractsUser')

const DataExtractsEventUserDataSchema = z
  .object({
    links: z.array(DataExtractsEventLinksSchema).exactOptional().openapi({ readOnly: true }),
    user: DataExtractsUserSchema.exactOptional(),
  })
  .openapi({ title: 'DataExtractsEventUserData', required: [] })
  .openapi('DataExtractsEventUserData')

const DataExtractsEventDataSchema = z
  .object({
    fromDate: z.string().exactOptional().openapi({ readOnly: true }),
    toDate: z.string().exactOptional().openapi({ readOnly: true }),
    userCount: z.int32().exactOptional().openapi({ readOnly: true }),
    userData: z.array(DataExtractsEventUserDataSchema).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ title: 'DataExtractsEventData', required: [] })
  .openapi('DataExtractsEventData')

const DataExtractsEventSchema = z
  .object({
    data: DataExtractsEventDataSchema.exactOptional(),
    info: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ title: 'DataExtractsEvent', required: [] })
  .openapi('DataExtractsEvent')

const DataExtractsEventResponseSchema = z
  .object({ event: DataExtractsEventSchema.exactOptional() })
  .openapi({ title: 'DataExtractsEventResponse', required: [] })
  .openapi('DataExtractsEventResponse')

const DataExtractsHoldingSchema = z
  .object({
    accountId: z
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
          'Unique identifier of the account to which the security is linked.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    accruedIncome: MoneySchema.exactOptional(),
    accruedInterest: MoneySchema.exactOptional(),
    contractQuantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of tradeable units in a contract.<br><b>Note</b>: The contract quantity field is only applicable to commodity and currency.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    costBasis: MoneySchema.exactOptional(),
    couponRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The stated interest rate for a bond.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    createdDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the holding is created in the Yodlee system.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    cusipNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The CUSIP (Committee on Uniform Securities Identification Procedures) identifies most the financial instruments in the United States and Canada.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description (name) for the holding (E.g., Cisco Systems)<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types. <br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    enrichedDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The enrichedDescription is the security description of the normalized holding<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    exercisedQuantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of the employee stock options that are already exercised or bought by the employee.<br><b>Note</b>: Once the employee stock options is exercised, they are either converted to cash value or equity positions depending on the FI. The exercised quantity field is only applicable to employee stock options.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    expirationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which an option, right or warrant expires.<br><b>Note</b>: The expiration date field is only applicable to options and employee stock options.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    grantDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which equity awards like ESOP, RSU, etc., are issued or granted.<br><b>Note</b>: The grant date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    holdingType: z
      .enum([
        'stock',
        'mutualFund',
        'bond',
        'CD',
        'option',
        'moneyMarketFund',
        'other',
        'remic',
        'future',
        'commodity',
        'currency',
        'unitInvestmentTrust',
        'employeeStockOption',
        'insuranceAnnuity',
        'unknown',
        'preferredStock',
        'ETF',
        'warrants',
        'ETN',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of holding<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    id: z
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
          'Unique identifier for the security added in the system. This is the primary key of the holding resource.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    interestRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The interest rate on a CD.<br><b>Note</b>: The interest rate field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    isShort: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that the holding is a short trading.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    isin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ISIN (International Securities Identification Number) is used worldwide to identify specific securities. It is equivalent to CUSIP for international markets.<br><br><b>Note</b>: The ISIN field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    lastUpdated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date when the information was last updated in the system.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    matchStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the security match status id of the investment option identified during security normalization.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    maturityDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The stated maturity date of a bond or CD.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    optionType: z
      .enum(['put', 'call', 'unknown', 'other'])
      .exactOptional()
      .openapi({
        description:
          'The type of the option position (i.e., put or call).<br><b>Note</b>: The option type field is only applicable to options.<br><br><b>Applicable containers</b>: investment<br><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    price: MoneySchema.exactOptional(),
    providerAccountId: z
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
          "Unique identifier for the user's association with the provider.<br><br><b>Applicable containers</b>: investment, insurance<br>",
        readOnly: true,
      }),
    quantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity held for the holding.<br><b>Note</b>: Only for bonds the quantity field indicates the normalized quantity and not the quantity aggregated from the site. The quantity field is only applicable to restricted stock units/awards, performance units, currency, and commodity.<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    securityStyle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the security style of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    securityType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the security type of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    sedol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The SEDOL (Stock Exchange Daily Official List) is a set of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><b>Note</b>: The SEDOL field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    spread: MoneySchema.exactOptional(),
    strikePrice: MoneySchema.exactOptional(),
    symbol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The symbol of the security.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    term: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fixed duration for which the bond or CD is issued.<br><b>Note</b>: The term field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    unvestedQuantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Indicates the number of unvested quantity or units.<br><b>Note</b>: The unvested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    unvestedValue: MoneySchema.exactOptional(),
    value: MoneySchema.exactOptional(),
    vestedQuantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of units or shares that are already vested on a vest date.<br><b>Note</b>: The vested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    vestedSharesExercisable: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The number of vested shares that can be exercised by the employee. It is usually equal to the vested quantity.<br><b>Note</b>: The vested shares exercisable field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    vestedValue: MoneySchema.exactOptional(),
    vestingDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which a RSU, RSA, or an employee stock options become vested.<br><b>Note</b>: The vesting date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'DataExtractsHolding', required: [] })
  .openapi('DataExtractsHolding')

const DataExtractsProviderAccountSchema = z
  .object({
    aggregationSource: z
      .enum(['SYSTEM', 'USER'])
      .exactOptional()
      .openapi({
        description:
          'The source through which the providerAccount is added in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    createdDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on when the provider account is created in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>',
        readOnly: true,
      }),
    dataset: z
      .array(AccountDatasetSchema)
      .exactOptional()
      .openapi({
        description:
          'Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    id: z
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
          'Unique identifier for the provider account resource. This is created during account addition.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    isDeleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the provider account is deleted from the system.<b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    isManual: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether account is a manual or aggregated provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    lastUpdated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicate when the providerAccount is last updated successfully.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    oauthMigrationStatus: z
      .enum(['IN_PROGRESS', 'TO_BE_MIGRATED', 'COMPLETED'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the migration status of the provider account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>GET providerAccounts/{providerAccountId}</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    providerId: z
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
          'Unique identifier for the provider resource. This denotes the provider for which the provider account id is generated by the user.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique id generated to indicate the request.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>',
        readOnly: true,
      }),
    status: z
      .enum([
        'LOGIN_IN_PROGRESS',
        'USER_INPUT_REQUIRED',
        'IN_PROGRESS',
        'PARTIAL_SUCCESS',
        'SUCCESS',
        'FAILED',
        'MIGRATION_IN_PROGRESS',
      ])
      .exactOptional()
      .openapi({
        description:
          'The status of last update attempted for the account. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'DataExtractsProviderAccount', required: [] })
  .openapi('DataExtractsProviderAccount')

const DescriptionSchema = z
  .object({
    consumer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description of the transaction as defined by the consumer. The consumer can define or provide more details of the transaction in this field.<br><br><b>Applicable containers</b>:  creditCard, insurance, loan<br>',
      }),
    original: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Original transaction description as it appears at the FI site.<br><br><b>Applicable containers</b>:  creditCard, insurance, loan<br>',
        readOnly: true,
      }),
    security: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description will provide the actual name of the security.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    simple: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The transaction description that appears at the FI site may not be self-explanatory, i.e., the source, purpose of the transaction may not be evident. Yodlee attempts to simplify and make the transaction meaningful to the consumer, and this simplified transaction description is provided in the simple description field.Note: The simple description field is available only in the United States, Canada, United Kingdom, and India.<br><br><b>Applicable containers</b>:  creditCard, insurance, loan<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'Description', required: [] })
  .openapi('Description')

const MerchantSchema = z
  .object({
    address: AccountAddressSchema.exactOptional(),
    categoryLabel: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The business categories of the merchant.<br><br><b>Applicable containers</b>: bank,creditCard<br><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    contact: ContactSchema.exactOptional(),
    coordinates: CoordinatesSchema.exactOptional(),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier of the merchant.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the merchant.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    source: z
      .enum(['YODLEE', 'FACTUAL'])
      .exactOptional()
      .openapi({
        description:
          'The source through which merchant information is retrieved.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    website: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The website of the merchant.<br><br><b>Applicable containers</b>: bank,creditCard,investment,loan<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'Merchant', required: [] })
  .openapi('Merchant')

const DataExtractsTransactionSchema = z
  .object({
    CONTAINER: z
      .enum([
        'bank',
        'creditCard',
        'investment',
        'insurance',
        'loan',
        'reward',
        'realEstate',
        'otherAssets',
        'otherLiabilities',
      ])
      .exactOptional()
      .openapi({
        description:
          "The account's container.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>",
        readOnly: true,
      }),
    accountId: z
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
          'The account from which the transaction was made. This is basically the primary key of the account resource. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    amount: MoneySchema.exactOptional(),
    baseType: z
      .enum(['CREDIT', 'DEBIT'])
      .exactOptional()
      .openapi({
        description:
          'Indicates if the transaction appears as a debit or a credit transaction in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the category assigned to the transaction. This is the category field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    categoryId: z
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
          'The id of the category assigned to the transaction. This is the id field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    categorySource: z
      .enum(['SYSTEM', 'USER'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the source of the category, i.e., categories derived by the system or assigned/provided by the consumer. This is the source field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    categoryType: z
      .enum(['TRANSFER', 'DEFERRED_COMPENSATION', 'UNCATEGORIZE', 'INCOME', 'EXPENSE'])
      .exactOptional()
      .openapi({
        description:
          'The categoryType of the category assigned to the transaction. This is the type field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    checkNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The checkNumber of the transaction.<br><br><b>Applicable containers</b>: bank<br>',
        readOnly: true,
      }),
    commission: MoneySchema.exactOptional(),
    createdDate: z.string().exactOptional().openapi({ readOnly: true }),
    cusipNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The CUSIP (Committee on Uniform Securities Identification Procedures) identifies the financial instruments in the United States and Canada.<br><b><br><b>Note</b></b>: The CUSIP number field applies only to trade related transactions.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    date: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value provided will be either postDate or transactionDate. postDate takes higher priority than transactionDate, except for the investment container as only transactionDate is available. The availability of postDate or transactionDate depends on the provider site.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    description: DescriptionSchema.exactOptional(),
    detailCategoryId: z
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
          'The id of the detail category that is assigned to the transaction. The supported values are provided by GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard<br>',
        readOnly: true,
      }),
    highLevelCategoryId: z
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
          'The high level category assigned to the transaction. The supported values are provided by the GET transactions/categories. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    holdingDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For transactions involving securities, this captures the securities description.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    id: z
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
          'An unique identifier for the transaction. The combination of the id and account container are unique in the system. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    interest: MoneySchema.exactOptional(),
    isDeleted: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the transaction is marked as deleted.<b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    isManual: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the transaction is aggregated from the FI site or the consumer has manually created the transaction using the application or an API. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    isin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'International Securities Identification Number (ISIN) standard is used worldwide to identify specific securities.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    lastUpdated: z.string().exactOptional().openapi({ readOnly: true }),
    memo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional notes provided by the user for a particular  transaction through application or API services. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    merchant: MerchantSchema.exactOptional(),
    parentCategoryId: z
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
          'The parentCategoryId of the category assigned to the transaction.<br><b>Note</b>: This field will be provided in the response if the transaction is assigned to a user-created category. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    postDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the transaction is posted to the account.<br><br><b>Applicable containers</b>: bank,creditCard,insurance,loan<br>',
        readOnly: true,
      }),
    price: MoneySchema.exactOptional(),
    principal: MoneySchema.exactOptional(),
    quantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity associated with the transaction.<br><b>Note</b>: The quantity field applies only to trade-related transactions.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    runningBalance: MoneySchema.exactOptional(),
    sedol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'SEDOL stands for Stock Exchange Daily Official List, a list of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    settleDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'It is the date on which the transaction is finalized, that is, the date the ownership of the security is transferred to the buyer. The settlement date is usually few days after the transaction date.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    sourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique ID that the provider site has assigned to the transaction. The source ID is only available for the pre-populated accounts.<br>Pre-populated accounts are the accounts that the FI customers shares with Yodlee, so that the user does not have to add or aggregate those accounts.',
        readOnly: true,
      }),
    sourceType: z
      .enum(['AGGREGATED', 'MANUAL'])
      .exactOptional()
      .openapi({
        description:
          'The source through which the transaction is added to the Yodlee system.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loann<br><b>Applicable Values:</b><br>',
        readOnly: true,
      }),
    status: z
      .enum(['POSTED', 'PENDING', 'SCHEDULED', 'FAILED', 'CLEARED'])
      .exactOptional()
      .openapi({
        description:
          'The status of the transaction: pending or posted.<br><b>Note</b>: Most FI sites only display posted transactions. If the FI site displays transaction status, same will be aggregated.  <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    subType: z
      .enum([
        'AUTH_HOLD',
        'AUTH_REQUEST',
        'OVERDRAFT_CHARGE',
        'CREDIT_ADJUSTMENT',
        'PIN_DEBIT',
        'BANK_DIRECT_DEPOSIT',
        'DIVIDEND_DEPOSIT',
        'INTEREST_SAVINGS',
        'INTEREST_ADJUSTMENT',
        'ONLINE_PURCHASE',
        'PURCHASED_WITH_CHECK',
        'RECURRING_BILLING',
        'TAX_PAYMENT',
        'PAYMENT_BY_CHECK',
        'PAYMENT_PLAN',
        'FEE_REFUND',
        'WIRE_TRANSFER_CHARGE',
        'ACCOUNT_TO_ACCOUNT_TRANSFER',
        'BANK_TO_BANK_TRANSACTION',
        'BANK_TO_NON_BANK_ACCOUNT_TRANSFER',
        'CASH_WITHDRAWAL_AT_FI',
        'ATM_CASH_WITHDRAWAL',
        'AUTH_PROCESSING',
        'AUTH_RELEASE',
        'PRE_AUTH',
        'AUTH_COMPLETE',
        'AUTH_VOID',
        'BALANCE_ENQUIRY',
        'ACCOUNT_VERIFICATION',
        'PRE_AUTH_COMPLETION',
        'SERVICE_CHARGE',
        'SERVICE_CHARGE_FEE_REFUND',
        'RETURNED_CHECK_CHARGE',
        'RETURNED_CHECK_REIMBURSEMENT',
        'CASH_ADVANCE',
        'BILL_PAY_CHARGE',
        'CHECK_IMAGE_SERVICE_CHARGE',
        'OVERDRAFT_PROTECTION_CHARGE',
        'STOP_PAYMENT_CHARGE',
        'CHECKS_ORDERING_CHARGE',
        'MONTHLY_MAINTENANCE_CHARGE',
        'DEBIT_CARD_FEE',
        'CONVENIENCE_FEE',
        'PERSONAL_LOAN_CREDIT',
        'CREDIT_CARD_CREDIT',
        'AUTO_LOAN',
        'HOME_LOAN_MORTGAGE',
        'SHORT_TERM_CREDIT',
        'SIGNATURE_DEBIT',
        'CONTACT_LESS_DEBIT',
        'DEFERRED_DEPOSIT',
        'DEFERRED_BILL_PAY',
        'INSTALLMENT_PAYMENT',
        'RECURRING_SUBSCRIPTION_PAYMENT',
        'HOLD_CHECK_PAYMENT',
        'CAPITAL_GAINS_DISTIBUTION',
        'CG_LONG_TERM_DEPOSIT',
        'OPEN_SALE_DEPOSIT',
        'INTEREST__CHECK',
        'PURCHASE_VOID',
        'PURCHASE_WITH_CREDIT_CARD',
        'PURCHASE_WITH_DEBIT_CARD',
        'CHARGE_A_REPEAT_CUSTOMER',
        'DOWN_PAYMENT_OR_ANNUITY_PAYMENT_OR_DIRECT_PAYMENT',
        'FEE_PAYMENT',
        'FINANCE_CHARGE_REFUND',
        'TRANSACTION_VOID',
        'FEE_VOID',
        'DEBIT_CARD_WITHDRAWAL_AT_STORE',
        'ELECTRONIC_PAYMENT',
        'ACH_DEBIT',
        'ATM_TELLER_DEPOSIT',
        'POS_DEBIT',
        'BANK_ADJUSTMENT',
        'CHARGES_FEES',
        'INTEREST',
        'DEPOSITS_CREDITS',
        'PAYMENT',
        'PURCHASE',
        'REFUND',
        'TRANSFER',
        'WITHDRAWAL',
        'OTHER_DEPOSITS',
        'OTHER_WITHDRAWALS',
        'ADJUSTMENT',
        'FINANCE_CHARGE',
        'OTHER_CHARGES_FEES',
        'ANNUAL_FEE',
        'DEPOSIT',
        'DIRECT_DEPOSIT_SALARY',
        'INVESTMENT_INCOME_CASH',
        'SSA',
        'REWARDS',
        'CHECK_DEPOSIT',
        'MOBILE_REMOTE_DEPOSIT',
        'TELLER_DEPOSIT',
        'TAX_REFUND',
        'CREDIT_CARD_PAYMENT',
        'INSURANCE_PAYMENT',
        'UTILITIES_PAYMENT',
        'CHILD_SUPPORT',
        'LOAN',
        'PERSONAL_LOAN',
        'STUDENT_LOAN',
        'SALES_TAX',
        'REIMBURSEMENT',
        'BALANCE_TRANSFER',
        'WIRE_TRANSFER',
        'OVERDRAFT_PROTECTION',
        'DEBIT',
        'CREDIT',
        'NSF_FEES',
      ])
      .exactOptional()
      .openapi({
        description:
          'The transaction subtype field provides a detailed transaction type. For example, purchase is a transaction type and the transaction subtype field indicates if the purchase was made using a debit or credit card.<br><b>Note</b>: The transaction subtype field is available only in the United States, Canada, United Kingdom, and India.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    symbol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The symbol of the security being traded.<br><b>Note</b>: The settle date field applies only to trade-related transactions. <br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    transactionDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date the transaction happens in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The nature of the transaction, i.e., deposit, refund, payment, etc.<br><b>Note</b>: The transaction type field is available only for the United States, Canada, United Kingdom, and India based provider sites. <br><br><b>Applicable containers</b>: bank,creditCard,investment<br>',
        readOnly: true,
      }),
    valoren: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'It is an identification number that is assigned to financial instruments such as stocks and bonds trading in Switzerland.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'DataExtractsTransaction', required: [] })
  .openapi('DataExtractsTransaction')

const DataExtractsUserDataSchema = z
  .object({
    account: z.array(DataExtractsAccountSchema).exactOptional().openapi({ readOnly: true }),
    holding: z.array(DataExtractsHoldingSchema).exactOptional().openapi({ readOnly: true }),
    providerAccount: z
      .array(DataExtractsProviderAccountSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    totalTransactionsCount: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    transaction: z.array(DataExtractsTransactionSchema).exactOptional().openapi({ readOnly: true }),
    user: DataExtractsUserSchema.exactOptional(),
  })
  .openapi({ title: 'DataExtractsUserData', required: [] })
  .openapi('DataExtractsUserData')

const DataExtractsUserDataResponseSchema = z
  .object({
    userData: z.array(DataExtractsUserDataSchema).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ title: 'DataExtractsUserDataResponse', required: [] })
  .openapi('DataExtractsUserDataResponse')

const DerivedCategorySummaryDetailsSchema = z
  .object({
    creditTotal: MoneySchema.exactOptional(),
    date: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date on which the credit and debit transactions had occured.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br>',
        readOnly: true,
      }),
    debitTotal: MoneySchema.exactOptional(),
  })
  .openapi({ title: 'DerivedCategorySummaryDetails', required: [] })
  .openapi('DerivedCategorySummaryDetails')

const DerivedTransactionsLinksSchema = z
  .object({
    transactions: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Link of the transaction API service that corresponds to the value derivation.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'DerivedTransactionsLinks', required: [] })
  .openapi('DerivedTransactionsLinks')

const DerivedCategorySummarySchema = z
  .object({
    categoryId: z
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
          'Id of the category. This information is provided by transactions/categories service.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br>',
        readOnly: true,
      }),
    categoryName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the category.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br>',
        readOnly: true,
      }),
    creditTotal: MoneySchema.exactOptional(),
    debitTotal: MoneySchema.exactOptional(),
    details: z
      .array(DerivedCategorySummaryDetailsSchema)
      .exactOptional()
      .openapi({
        description:
          'Credit and debit summary per date.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br>',
        readOnly: true,
      }),
    links: DerivedTransactionsLinksSchema.exactOptional(),
  })
  .openapi({ title: 'DerivedCategorySummary', required: [] })
  .openapi('DerivedCategorySummary')

const DerivedHoldingSchema = z
  .object({
    accountId: z
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
          'Unique identifier of the account to which the security is linked.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    accruedIncome: MoneySchema.exactOptional(),
    accruedInterest: MoneySchema.exactOptional(),
    assetClassification: AssetClassificationSchema.exactOptional(),
    contractQuantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of tradeable units in a contract.<br><b>Note</b>: The contract quantity field is only applicable to commodity and currency.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    costBasis: MoneySchema.exactOptional(),
    couponRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The stated interest rate for a bond.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    createdDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the holding is created in the Yodlee system.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    cusipNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The CUSIP (Committee on Uniform Securities Identification Procedures) identifies most the financial instruments in the United States and Canada.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description (name) for the holding (E.g., Cisco Systems)<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types. <br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    enrichedDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The enrichedDescription is the security description of the normalized holding<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    exercisedQuantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of the employee stock options that are already exercised or bought by the employee.<br><b>Note</b>: Once the employee stock options is exercised, they are either converted to cash value or equity positions depending on the FI. The exercised quantity field is only applicable to employee stock options.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    expirationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which an option, right or warrant expires.<br><b>Note</b>: The expiration date field is only applicable to options and employee stock options.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    grantDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which equity awards like ESOP, RSU, etc., are issued or granted.<br><b>Note</b>: The grant date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    holdingType: z
      .enum([
        'stock',
        'mutualFund',
        'bond',
        'CD',
        'option',
        'moneyMarketFund',
        'other',
        'remic',
        'future',
        'commodity',
        'currency',
        'unitInvestmentTrust',
        'employeeStockOption',
        'insuranceAnnuity',
        'unknown',
        'preferredStock',
        'ETF',
        'warrants',
        'ETN',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of holding<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    id: z
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
          'Unique identifier for the security added in the system. This is the primary key of the holding resource.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    interestRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The interest rate on a CD.<br><b>Note</b>: The interest rate field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    isShort: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that the holding is a short trading.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    isin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ISIN (International Securities Identification Number) is used worldwide to identify specific securities. It is equivalent to CUSIP for international markets.<br><br><b>Note</b>: The ISIN field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    lastUpdated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date when the information was last updated in the system.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    matchStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the security match status id of the investment option identified during security normalization.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    maturityDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The stated maturity date of a bond or CD.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    optionType: z
      .enum(['put', 'call', 'unknown', 'other'])
      .exactOptional()
      .openapi({
        description:
          'The type of the option position (i.e., put or call).<br><b>Note</b>: The option type field is only applicable to options.<br><br><b>Applicable containers</b>: investment<br><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    price: MoneySchema.exactOptional(),
    providerAccountId: z
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
          "Unique identifier for the user's association with the provider.<br><br><b>Applicable containers</b>: investment, insurance<br>",
        readOnly: true,
      }),
    quantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity held for the holding.<br><b>Note</b>: Only for bonds the quantity field indicates the normalized quantity and not the quantity aggregated from the site. The quantity field is only applicable to restricted stock units/awards, performance units, currency, and commodity.<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    securityStyle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the security style of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    securityType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the security type of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    sedol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The SEDOL (Stock Exchange Daily Official List) is a set of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><b>Note</b>: The SEDOL field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    spread: MoneySchema.exactOptional(),
    strikePrice: MoneySchema.exactOptional(),
    symbol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The symbol of the security.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    term: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fixed duration for which the bond or CD is issued.<br><b>Note</b>: The term field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    unvestedQuantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Indicates the number of unvested quantity or units.<br><b>Note</b>: The unvested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    unvestedValue: MoneySchema.exactOptional(),
    value: MoneySchema.exactOptional(),
    vestedQuantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of units or shares that are already vested on a vest date.<br><b>Note</b>: The vested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    vestedSharesExercisable: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The number of vested shares that can be exercised by the employee. It is usually equal to the vested quantity.<br><b>Note</b>: The vested shares exercisable field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    vestedValue: MoneySchema.exactOptional(),
    vestingDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which a RSU, RSA, or an employee stock options become vested.<br><b>Note</b>: The vesting date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'DerivedHolding', required: [] })
  .openapi('DerivedHolding')

const DerivedHoldingsAccountSchema = z
  .object({
    id: z
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
          'The primary key of the account resource and the unique identifier for the account.<br>Required Feature Enablement: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    value: MoneySchema.exactOptional(),
  })
  .openapi({ title: 'DerivedHoldingsAccount', required: [] })
  .openapi('DerivedHoldingsAccount')

const DerivedHoldingsSummarySchema = z
  .object({
    account: z
      .array(DerivedHoldingsAccountSchema)
      .exactOptional()
      .openapi({
        description:
          'Accounts that contribute to the classification. <br><b>Required Feature Enablement</b>: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    classificationType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The classification type of the security. The supported asset classification type and the values are provided in the /holdings/assetClassificationList.<br><b>Required Feature Enablement</b>: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    classificationValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The classification value that corresponds to the classification type of the holding. The supported asset classification type and the values are provided in the /holdings/assetClassificationList.<br><b>Required Feature Enablement</b>: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    holding: z
      .array(DerivedHoldingSchema)
      .exactOptional()
      .openapi({
        description:
          'Securities that belong to the asset classification type and contributed to the summary value.<br><b>Required Feature Enablement</b>: Asset classification feature.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    value: MoneySchema.exactOptional(),
  })
  .openapi({ title: 'DerivedHoldingsSummary', required: [] })
  .openapi('DerivedHoldingsSummary')

const DerivedHoldingsLinksSchema = z
  .object({ holdings: z.string().exactOptional().openapi({ readOnly: true }) })
  .openapi({ title: 'DerivedHoldingsLinks', required: [] })
  .openapi('DerivedHoldingsLinks')

const DerivedHoldingSummaryResponseSchema = z
  .object({
    holdingSummary: z
      .array(DerivedHoldingsSummarySchema)
      .exactOptional()
      .openapi({ readOnly: true }),
    link: DerivedHoldingsLinksSchema.exactOptional(),
  })
  .openapi({ title: 'DerivedHoldingSummaryResponse', required: [] })
  .openapi('DerivedHoldingSummaryResponse')

const DerivedNetworthHistoricalBalanceSchema = z
  .object({
    accountId: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    asOfDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date as of when the balance is last  updated due to the auto account updates or user triggered updates. This balance will be carry forward for the days where there is no balance available in the system. <br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul>',
        readOnly: true,
      }),
    balance: MoneySchema.exactOptional(),
    dataSourceType: z
      .enum(['S', 'C', 'CF'])
      .exactOptional()
      .openapi({
        description:
          'The source of balance information.<br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    date: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Date for which the account balance was provided.  This balance could be a carryforward, calculated or a scraped balance. AdditIonal Details: scraped: Balance shown in the provider site. This balance gets stored in Yodlee system during system/user account updates. carryForward : Balance carried forward from the scraped balance to the days for which the balance was not available in the system. Balance may not be available for all the days in the system due to MFA information required, error in the site, credential changes, etc. calculated: Balances that gets calculated for the days that are prior to the account added date.<br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li><li>GET derived/networth</li></ul>',
        readOnly: true,
      }),
    isAsset: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the balance is an asset or liability.<br><br><b>Account Type</b>: Aggregated and Manual<br><b>Applicable containers</b>: bank, creditCard, investment, insurance, realEstate, loan<br><b>Endpoints</b>:<ul><li>GET accounts/historicalBalances</li></ul>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'DerivedNetworthHistoricalBalance', required: [] })
  .openapi('DerivedNetworthHistoricalBalance')

const DerivedNetworthSchema = z
  .object({
    asset: MoneySchema.exactOptional(),
    date: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date as of when the networth information is provided.<br><br><b>Applicable containers</b>: bank, creditcard, investment, insurance, realEstate, loan<br>',
        readOnly: true,
      }),
    historicalBalances: z
      .array(DerivedNetworthHistoricalBalanceSchema)
      .exactOptional()
      .openapi({
        description:
          'Balances of the accounts over the period of time.<br><br><b>Applicable containers</b>: bank, creditcard, investment, insurance, realEstate, loan<br>',
        readOnly: true,
      }),
    liability: MoneySchema.exactOptional(),
    networth: MoneySchema.exactOptional(),
  })
  .openapi({ title: 'DerivedNetworth', required: [] })
  .openapi('DerivedNetworth')

const DerivedNetworthResponseSchema = z
  .object({ networth: z.array(DerivedNetworthSchema).exactOptional().openapi({ readOnly: true }) })
  .openapi({ title: 'DerivedNetworthResponse', required: [] })
  .openapi('DerivedNetworthResponse')

const DerivedTransactionsSummarySchema = z
  .object({
    categorySummary: z
      .array(DerivedCategorySummarySchema)
      .exactOptional()
      .openapi({
        description:
          'Summary of transaction amouts at category level.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br>',
        readOnly: true,
      }),
    categoryType: z
      .enum(['TRANSFER', 'DEFERRED_COMPENSATION', 'UNCATEGORIZE', 'INCOME', 'EXPENSE'])
      .exactOptional()
      .openapi({
        description:
          'Type of categories provided by transactions/categories service.<br><br><b>Applicable containers</b>: creditCard, bank, investment<br><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    creditTotal: MoneySchema.exactOptional(),
    debitTotal: MoneySchema.exactOptional(),
    links: DerivedTransactionsLinksSchema.exactOptional(),
  })
  .openapi({ title: 'DerivedTransactionsSummary', required: [] })
  .openapi('DerivedTransactionsSummary')

const DerivedTransactionSummaryResponseSchema = z
  .object({
    links: DerivedTransactionsLinksSchema.exactOptional(),
    transactionSummary: z
      .array(DerivedTransactionsSummarySchema)
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ title: 'DerivedTransactionSummaryResponse', required: [] })
  .openapi('DerivedTransactionSummaryResponse')

const DetailCategorySchema = z
  .object({
    id: z
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
          'The unique identifier of the detail category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the detail category<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'DetailCategory', required: [] })
  .openapi('DetailCategory')

const DocumentSchema = z
  .object({
    accountID: z
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
          'The unique identifier for the account. The account ID to which the document is linked.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>',
        readOnly: true,
      }),
    docType: z
      .enum(['STMT', 'TAX', 'EBILL'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the type of the document.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>',
        readOnly: true,
      }),
    formType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the type of the tax form.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>',
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The document's primary key and unique identifier.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>",
        readOnly: true,
      }),
    lastUpdated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the date and time the document was last updated.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the name of the document.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>',
        readOnly: true,
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the source of the document download.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>',
        readOnly: true,
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the status of the document download.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'Document', required: [] })
  .openapi('Document')

const DocumentDownloadSchema = z
  .object({
    docContent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Contents of the document in Base64 format.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>',
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The document's primary key and unique identifier.<br><br><b>Applicable containers</b>: bank, investment, creditCard, loan, insurance<br>",
        readOnly: true,
      }),
  })
  .openapi({ title: 'DocumentDownload', required: [] })
  .openapi('DocumentDownload')

const DocumentDownloadResponseSchema = z
  .object({ document: z.array(DocumentDownloadSchema).exactOptional().openapi({ readOnly: true }) })
  .openapi({ title: 'DocumentDownloadResponse', required: [] })
  .openapi('DocumentDownloadResponse')

const DocumentResponseSchema = z
  .object({ document: z.array(DocumentSchema).exactOptional().openapi({ readOnly: true }) })
  .openapi({ title: 'DocumentResponse', required: [] })
  .openapi('DocumentResponse')

const EvaluateAccountAddressSchema = z
  .object({
    address1: z.string().exactOptional(),
    address2: z.string().exactOptional(),
    address3: z.string().exactOptional(),
    city: z.string().exactOptional(),
    country: z.string().exactOptional(),
    sourceType: z.string().exactOptional(),
    state: z.string().exactOptional(),
    street: z.string(),
    type: z
      .enum([
        'HOME',
        'BUSINESS',
        'POBOX',
        'RETAIL',
        'OFFICE',
        'SMALL_BUSINESS',
        'COMMUNICATION',
        'PERMANENT',
        'STATEMENT_ADDRESS',
        'PAYMENT',
        'PAYOFF',
        'UNKNOWN',
      ])
      .exactOptional(),
    zip: z.string().exactOptional(),
  })
  .openapi({ required: ['street'], title: 'EvaluateAccountAddress' })
  .openapi('EvaluateAccountAddress')

const EvaluateAddressRequestSchema = z
  .object({ address: EvaluateAccountAddressSchema })
  .openapi({ required: ['address'], title: 'EvaluateAddressRequest' })
  .openapi('EvaluateAddressRequest')

const EvaluateAddressResponseSchema = z
  .object({
    address: z.array(AccountAddressSchema).exactOptional().openapi({ readOnly: true }),
    isValidAddress: z.boolean().exactOptional(),
  })
  .openapi({ title: 'EvaluateAddressResponse', required: [] })
  .openapi('EvaluateAddressResponse')

const OptionSchema = z
  .object({
    displayText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The text that is displayed to the user for that option in the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
      }),
    isSelected: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The option that is selected by default in the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
      }),
    optionValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value that is associated with the option.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
      }),
  })
  .openapi({ title: 'Option', required: [] })
  .openapi('Option')

const FieldSchema = z
  .object({
    id: z
      .string()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'Identifier for the field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
      }),
    image: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Image displayed at the endsite.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li></ul>',
      }),
    isOptional: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if a field is an optional field or a mandatory field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
        readOnly: true,
      }),
    isValueProvided: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that the answer to the security question already exists in the Yodlee system.Persuading the user to provide the answer to the security question again during the edit-credential flow can be avoided.<br><br><br><b>Endpoints</b>:<ul><li>GET providerAccounts?include=questions</li><li>GET providerAccounts/{providerAccountId}? include=questions</li></ul>',
        readOnly: true,
      }),
    maxLength: z
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
          'The maximum length of the login form field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
        readOnly: true,
      }),
    minLength: z
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
          'The minimum length of the login form field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the field.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
        readOnly: true,
      }),
    option: z
      .array(OptionSchema)
      .exactOptional()
      .openapi({
        description:
          'Provides the different values that are available for the user to choose. This field is applicable for drop-down or radio field types.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
        readOnly: true,
      }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The prefix string that has to be displayed before the field value.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
        readOnly: true,
      }),
    suffix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The suffix string that has to be displayed next to the field value.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
        readOnly: true,
      }),
    type: z
      .enum(['text', 'password', 'option', 'checkbox', 'radio', 'image'])
      .exactOptional()
      .openapi({
        description:
          'This indicates the display type of the field. For example, text box, image, etc. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Value expected from the user for the field. This will be blank and is expected to be filled and sent back when submitting the login or MFA information.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
      }),
    valueEditable: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the field is editable or not.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'Field', required: [] })
  .openapi('Field')

const FieldOperationSchema = z
  .object({
    field: z
      .enum(['amount', 'description'])
      .exactOptional()
      .openapi({
        description:
          'Field for which the clause is created.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan<br><b>Applicable Values</b>:<ul><li>amount</li><li>description</li></ul><b>Applicable Values</b><br>',
      }),
    operation: z
      .enum([
        'numberEquals',
        'numberLessThan',
        'numberLessThanEquals',
        'numberGreaterThan',
        'numberGreaterThanEquals',
        'stringEquals',
        'stringContains',
      ])
      .exactOptional()
      .openapi({
        description:
          'Operation for which the clause is created.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan<br><b>Applicable values (depends on the value of field)</b>:<ul><li>field is <b>description</b> -> operation can be<ol><li>stringEquals</li><li>stringContains</li></ol></li><li>field is <b>amount</b> -> operation can be<ol><li>numberEquals</li><li>numberLessThan</li><li>numberLessThanEquals</li><li>numberGreaterThan</li><li>numberGreaterThanEquals</li></ol></li></ul><b>Applicable Values</b><br>',
      }),
    value: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'The value would be the amount value in case of amount based rule clause or the string value in case of description based rule clause.<br><br><b>Applicable containers</b>: bank, creditCard, investment, insurance, loan<br><b>Applicable Values</b>:<ul><li>field is <b>description</b> -> value should be <b>min of 3 and max of 50 characters</b></li><li>field is <b>amount</b> -> value should be <b> min value of 0 and a max value of 99999999999.99</b></li></ul>',
      }),
  })
  .openapi({ title: 'FieldOperation', required: [] })
  .openapi('FieldOperation')

const HoldingSchema = z
  .object({
    accountId: z
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
          'Unique identifier of the account to which the security is linked.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    accruedIncome: MoneySchema.exactOptional(),
    accruedInterest: MoneySchema.exactOptional(),
    assetClassification: z
      .array(AssetClassificationSchema)
      .exactOptional()
      .openapi({
        description:
          'Asset classification applied to the holding. <br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    contractQuantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of tradeable units in a contract.<br><b>Note</b>: The contract quantity field is only applicable to commodity and currency.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    costBasis: MoneySchema.exactOptional(),
    couponRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The stated interest rate for a bond.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    createdDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the holding is created in the Yodlee system.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    cusipNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The CUSIP (Committee on Uniform Securities Identification Procedures) identifies most the financial instruments in the United States and Canada.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description (name) for the holding (E.g., Cisco Systems)<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types. <br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    enrichedDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The enrichedDescription is the security description of the normalized holding<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    exercisedQuantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of the employee stock options that are already exercised or bought by the employee.<br><b>Note</b>: Once the employee stock options is exercised, they are either converted to cash value or equity positions depending on the FI. The exercised quantity field is only applicable to employee stock options.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    expirationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which an option, right or warrant expires.<br><b>Note</b>: The expiration date field is only applicable to options and employee stock options.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    grantDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which equity awards like ESOP, RSU, etc., are issued or granted.<br><b>Note</b>: The grant date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    holdingType: z
      .enum([
        'stock',
        'mutualFund',
        'bond',
        'CD',
        'option',
        'moneyMarketFund',
        'other',
        'remic',
        'future',
        'commodity',
        'currency',
        'unitInvestmentTrust',
        'employeeStockOption',
        'insuranceAnnuity',
        'unknown',
        'preferredStock',
        'ETF',
        'warrants',
        'ETN',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of holding<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    id: z
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
          'Unique identifier for the security added in the system. This is the primary key of the holding resource.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    interestRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The interest rate on a CD.<br><b>Note</b>: The interest rate field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    isShort: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates that the holding is a short trading.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    isin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ISIN (International Securities Identification Number) is used worldwide to identify specific securities. It is equivalent to CUSIP for international markets.<br><br><b>Note</b>: The ISIN field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    lastUpdated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date when the information was last updated in the system.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    matchStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the security match status id of the investment option identified during security normalization.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    maturityDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The stated maturity date of a bond or CD.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    optionType: z
      .enum(['put', 'call', 'unknown', 'other'])
      .exactOptional()
      .openapi({
        description:
          'The type of the option position (i.e., put or call).<br><b>Note</b>: The option type field is only applicable to options.<br><br><b>Applicable containers</b>: investment<br><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    price: MoneySchema.exactOptional(),
    providerAccountId: z
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
          "Unique identifier for the user's association with the provider.<br><br><b>Applicable containers</b>: investment, insurance<br>",
        readOnly: true,
      }),
    quantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity held for the holding.<br><b>Note</b>: Only for bonds the quantity field indicates the normalized quantity and not the quantity aggregated from the site. The quantity field is only applicable to restricted stock units/awards, performance units, currency, and commodity.<br>For insurance container, the field is only applicable for insurance annuity and variable life insurance types.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    securityStyle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the security style of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    securityType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the security type of holding identified through the security service.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    sedol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The SEDOL (Stock Exchange Daily Official List) is a set of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><b>Note</b>: The SEDOL field is only applicable to the trade related transactions<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    spread: MoneySchema.exactOptional(),
    strikePrice: MoneySchema.exactOptional(),
    symbol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The symbol of the security.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    term: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fixed duration for which the bond or CD is issued.<br><b>Note</b>: The term field is only applicable to CD.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    unvestedQuantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Indicates the number of unvested quantity or units.<br><b>Note</b>: The unvested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    unvestedValue: MoneySchema.exactOptional(),
    value: MoneySchema.exactOptional(),
    vestedQuantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity of units or shares that are already vested on a vest date.<br><b>Note</b>: The vested quantity field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    vestedSharesExercisable: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The number of vested shares that can be exercised by the employee. It is usually equal to the vested quantity.<br><b>Note</b>: The vested shares exercisable field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    vestedValue: MoneySchema.exactOptional(),
    vestingDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which a RSU, RSA, or an employee stock options become vested.<br><b>Note</b>: The vesting date field is only applicable to employee stock options, restricted stock units/awards, performance units, etc.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'Holding', required: [] })
  .openapi('Holding')

const HoldingAssetClassificationListResponseSchema = z
  .object({
    assetClassificationList: z
      .array(AssetClassificationListSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ title: 'HoldingAssetClassificationListResponse', required: [] })
  .openapi('HoldingAssetClassificationListResponse')

const HoldingResponseSchema = z
  .object({ holding: z.array(HoldingSchema).exactOptional().openapi({ readOnly: true }) })
  .openapi({ title: 'HoldingResponse', required: [] })
  .openapi('HoldingResponse')

const StockExchangeDetailSchema = z
  .object({
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Country codes are geocodes developed to represent countries and dependent areas.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ISO codes of currency.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    exchangeCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An Exchange code is a four-character code used to identify stock markets and other trading exchanges within global trading.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    symbol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Ticker symbol representing particular securities listed on an exchange.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'StockExchangeDetail', required: [] })
  .openapi('StockExchangeDetail')

const SecuritySchema = z
  .object({
    accrualMethod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The method in which interest is accrued or earned.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    agencyFactor: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Agency factor of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    callDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Next call date of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    callPrice: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Next call price of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    cdscFundFlag: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'cdsc fund flag of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    closedFlag: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          '<b>true</b>:Closed for all investors , <b>false</b>: Open to all investors.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    cusip: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A CUSIP is a nine-character alphanumeric code that identifies a North American financial security for the purposes of facilitating clearing and settlement of trades.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description (name) of the security. For example, Cisco Systems.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    federalTaxable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag indicating federal taxable.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    firmEligible: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<b>1</b>- indicates Eligible,<b>0</b>- indicates firm is not eligible.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    firstCouponDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'First coupon date of security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    frequency: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Coupon Frequency.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    fundFamily: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Mutual Fund Family Name.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    gicsSector: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'GICS Sector is a categorization the S&P assigns to all publically traded companies. <br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    id: z
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
          'The unique identifier of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    incomeCurrency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ISO 4217 currency code indicating income currency of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    interestRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          "The rate of interest paid annually, expressed as a percentage of the bond's par or face value.<br><br><b>Applicable containers</b>: investment, insurance<br>",
        readOnly: true,
      }),
    isDummySecurity: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the security is a dummy security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    isEnvestnetDummySecurity: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag indicating a dummy security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    isSyntheticSecurity: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the security is a simulated security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    isin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The International Securities Identification Number (ISIN) is used worldwide to identify specific securities. It is equivalent to CUSIP for international markets.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    issueDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Issue date of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    issueTypeMultiplier: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Price units corresponding to the security style. This is used to derive actual price of the security from market value.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    lastCouponDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Last coupon date of security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    lastModifiedDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last updated date of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    maturityDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Maturity date of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    minimumPurchase: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Minimum purchase of security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    moodyRating: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for Moody rating on Envestnet platform.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    sAndPRating: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier for S&P rating on Envestnet platform.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    sector: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier of the sector to which the security belongs to.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    sedol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Stock Exchange Daily Official List (SEDOL) is a set of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><b>Note</b>: The SEDOL field is only applicable to the trade related transactions.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    shareClass: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Share class of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    stateTaxable: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The state in which the security is taxed.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    stockExchangeDetails: z
      .array(StockExchangeDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'Securities exchange provide the securities information at the corresponding exchanges. <br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    style: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Classification of the style for the security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    subSector: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'GICS sector ID to which the security belongs to.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    tradeCurrencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'ISO 4217 currency code indicating trading currency of the security.<br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the type of security like stocks, mutual fund, etc. <br><br><b>Applicable containers</b>: investment, insurance<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'Security', required: [] })
  .openapi('Security')

const SecurityHoldingSchema = z
  .object({
    id: z.string().exactOptional().openapi({ readOnly: true }),
    security: SecuritySchema.exactOptional(),
  })
  .openapi({ title: 'SecurityHolding', required: [] })
  .openapi('SecurityHolding')

const HoldingSecuritiesResponseSchema = z
  .object({ holding: z.array(SecurityHoldingSchema).exactOptional().openapi({ readOnly: true }) })
  .openapi({ title: 'HoldingSecuritiesResponse', required: [] })
  .openapi('HoldingSecuritiesResponse')

const HoldingTypeListResponseSchema = z
  .object({
    holdingType: z
      .array(
        z.enum([
          'stock',
          'mutualFund',
          'bond',
          'CD',
          'option',
          'moneyMarketFund',
          'other',
          'remic',
          'future',
          'commodity',
          'currency',
          'unitInvestmentTrust',
          'employeeStockOption',
          'insuranceAnnuity',
          'unknown',
          'preferredStock',
          'ETF',
          'warrants',
          'ETN',
        ]),
      )
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ title: 'HoldingTypeListResponse', required: [] })
  .openapi('HoldingTypeListResponse')

const RowSchema = z
  .object({
    field: z
      .array(FieldSchema)
      .exactOptional()
      .openapi({
        description:
          'Details of fields that belong to the row.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
      }),
    fieldRowChoice: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Fields that belong to a particular choice are collected together using this field.<br><b>Recommendations</b>: All the field row choices label to be grouped and displayed as options to the customer. On choosing a particular choice field, we recommend displaying the fields relevant to them. First field choice could be selected by default.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
      }),
    form: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Form denotes the set of the fields that are related. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique identifier of the row.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
      }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The label text displayed for a row in the form.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
      }),
  })
  .openapi({ title: 'Row', required: [] })
  .openapi('Row')

const LoginFormSchema = z
  .object({
    forgetPasswordURL: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The forget password URL of the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
      }),
    formType: z
      .enum(['login', 'questionAndAnswer', 'token', 'image'])
      .exactOptional()
      .openapi({
        description:
          'The type of the forms for which the user information is required.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul><b>Applicable Values</b><br>',
      }),
    help: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The help that can be displayed to the customer in the login form.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
        readOnly: true,
      }),
    id: z
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
          'The identifier of the login form.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
      }),
    loginHelp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The help that can be displayed to the customer in the login form.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
        readOnly: true,
      }),
    mfaInfoText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The text displayed in the provider site while requesting the user's MFA information. This field is applicable for MFA form types only. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li></ul>",
        readOnly: true,
      }),
    mfaInfoTitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The title for the MFA information demanded from the user.This is the title displayed in the provider site.This field is applicable for MFA form types only. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li></ul>',
        readOnly: true,
      }),
    mfaTimeout: z
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
          'The amount of time before which the user is expected to provide MFA information. This field is applicable for MFA form types only. This would be an useful information that could be displayed to the users. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
        readOnly: true,
      }),
    row: z
      .array(RowSchema)
      .exactOptional()
      .openapi({
        description:
          'This indicates one row in the form. The row will have one label. But it may have single or multiple fields.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li></ul>',
      }),
  })
  .openapi({ title: 'LoginForm', required: [] })
  .openapi('LoginForm')

const ProfileSchema = z
  .object({
    address: z
      .array(AccountAddressSchema)
      .exactOptional()
      .openapi({
        description:
          'Address available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
    email: z
      .array(EmailSchema)
      .exactOptional()
      .openapi({
        description:
          'Email Id available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
    gender: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Gender of the provider account holder.<br><br><b>Aggregated / Manual</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET providerAccounts/profile</li></ul>',
        readOnly: true,
      }),
    identifier: z
      .array(IdentifierSchema)
      .exactOptional()
      .openapi({
        description:
          'Identifiers available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
    name: NameSchema.exactOptional(),
    phoneNumber: z
      .array(PhoneNumberSchema)
      .exactOptional()
      .openapi({
        description:
          'Phone number available in the profile page of the account.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li></ul>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'Profile', required: [] })
  .openapi('Profile')

const ProviderAccountPreferencesSchema = z
  .object({
    isAutoRefreshEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if auto-refreshes have to be triggered for the provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts?include=preferences</li><li>GET providerAccounts/{providerAccountId}?include=preferences</li></ul>',
      }),
    isDataExtractsEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the updates to the provider account should be part of the data extracts event notification or the data extract data retrieval service.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts?include=preferences</li><li>GET providerAccounts/{providerAccountId}?include=preferences</li></ul>',
      }),
    linkedProviderAccountId: z
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
          'LinkedproviderAccountd is a providerAccountId linked by the user to the primary provider account. <br>LinkedProviderAccountId and the providerAccountId belongs to the same institution.<br><br><b>Endpoints</b>:<ul><li>POST Provider Account</li><li>PUT Provider Account</li><li>GET Provider Accounts</li></ul>',
      }),
  })
  .openapi({ title: 'ProviderAccountPreferences', required: [] })
  .openapi('ProviderAccountPreferences')

const ProviderAccountSchema = z
  .object({
    aggregationSource: z
      .enum(['SYSTEM', 'USER'])
      .exactOptional()
      .openapi({
        description:
          'The source through which the providerAccount is added in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    consentId: z
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
          'Consent Id generated through POST Consent.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>',
      }),
    createdDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on when the provider account is created in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>',
        readOnly: true,
      }),
    dataset: z
      .array(AccountDatasetSchema)
      .exactOptional()
      .openapi({
        description:
          'Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    id: z
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
          'Unique identifier for the provider account resource. This is created during account addition.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    isManual: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether account is a manual or aggregated provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    lastUpdated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicate when the providerAccount is last updated successfully.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    oauthMigrationStatus: z
      .enum(['IN_PROGRESS', 'TO_BE_MIGRATED', 'COMPLETED'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the migration status of the provider account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>GET providerAccounts/{providerAccountId}</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    preferences: ProviderAccountPreferencesSchema.exactOptional(),
    providerId: z
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
          'Unique identifier for the provider resource. This denotes the provider for which the provider account id is generated by the user.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique id generated to indicate the request.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>',
        readOnly: true,
      }),
    status: z
      .enum([
        'LOGIN_IN_PROGRESS',
        'USER_INPUT_REQUIRED',
        'IN_PROGRESS',
        'PARTIAL_SUCCESS',
        'SUCCESS',
        'FAILED',
        'MIGRATION_IN_PROGRESS',
      ])
      .exactOptional()
      .openapi({
        description:
          'The status of last update attempted for the account. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'ProviderAccount', required: [] })
  .openapi('ProviderAccount')

const ProviderAccountDetailSchema = z
  .object({
    aggregationSource: z
      .enum(['SYSTEM', 'USER'])
      .exactOptional()
      .openapi({
        description:
          'The source through which the providerAccount is added in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    consentId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'Consent Id generated through POST Consent.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>',
      }),
    createdDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on when the provider account is created in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>',
        readOnly: true,
      }),
    dataset: z
      .array(AccountDatasetSchema)
      .exactOptional()
      .openapi({
        description:
          'Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    id: z
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
          'Unique identifier for the provider account resource. This is created during account addition.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    isManual: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether account is a manual or aggregated provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    lastUpdated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicate when the providerAccount is last updated successfully.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    loginForm: z
      .array(LoginFormSchema)
      .exactOptional()
      .openapi({
        description:
          'This entity gets returned in the response for only MFA based provider accounts during the add/update account polling process. This indicates that the MFA information is expected from the user to complete the process. This represents the structure of MFA form that is displayed to the user in the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>',
        readOnly: true,
      }),
    oauthMigrationStatus: z
      .enum(['IN_PROGRESS', 'TO_BE_MIGRATED', 'COMPLETED'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the migration status of the provider account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>GET providerAccounts/{providerAccountId}</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    preferences: ProviderAccountPreferencesSchema.exactOptional(),
    providerId: z
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
          'Unique identifier for the provider resource. This denotes the provider for which the provider account id is generated by the user.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique id generated to indicate the request.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>',
        readOnly: true,
      }),
    status: z
      .enum([
        'LOGIN_IN_PROGRESS',
        'USER_INPUT_REQUIRED',
        'IN_PROGRESS',
        'PARTIAL_SUCCESS',
        'SUCCESS',
        'FAILED',
        'MIGRATION_IN_PROGRESS',
      ])
      .exactOptional()
      .openapi({
        description:
          'The status of last update attempted for the account. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
  })
  .openapi({ required: ['consentId'], title: 'ProviderAccountDetail' })
  .openapi('ProviderAccountDetail')

const ProviderAccountDetailResponseSchema = z
  .object({
    providerAccount: z
      .array(ProviderAccountDetailSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ title: 'ProviderAccountDetailResponse', required: [] })
  .openapi('ProviderAccountDetailResponse')

const ProviderAccountPreferencesRequestSchema = z
  .object({ preferences: ProviderAccountPreferencesSchema.exactOptional() })
  .openapi({ title: 'ProviderAccountPreferencesRequest', required: [] })
  .openapi('ProviderAccountPreferencesRequest')

const ProviderAccountProfileSchema = z
  .object({
    id: z
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
          'Unique identifier for profile<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/profile</li></ul>',
        readOnly: true,
      }),
    profile: z
      .array(ProfileSchema)
      .exactOptional()
      .openapi({
        description:
          'PII related data like address, name, phoneNumber, identifier and email.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts/profile</li></ul>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'ProviderAccountProfile', required: [] })
  .openapi('ProviderAccountProfile')

const ProvidersDatasetSchema = z
  .object({
    attribute: z
      .array(AttributeSchema)
      .exactOptional()
      .openapi({
        description:
          'The name of the dataset attribute suported by the provider.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
      }),
    name: z
      .enum(['BASIC_AGG_DATA', 'ADVANCE_AGG_DATA', 'ACCT_PROFILE', 'DOCUMENT'])
      .exactOptional()
      .openapi({
        description:
          'The name of the dataset requested from the provider site<br><br><b>Account Type</b>: Manual<br><b>Endpoints</b>:<ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br>',
      }),
  })
  .openapi({ title: 'ProvidersDataset', required: [] })
  .openapi('ProvidersDataset')

const ProviderAccountRequestSchema = z
  .object({
    aggregationSource: z.enum(['SYSTEM', 'USER']).exactOptional(),
    consentId: z
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
          'Consent Id generated for the request through POST Consent.<br><br><b>Endpoints</b>:<ul><li>POST Provider Account</li><li>PUT Provider Account</li></ul>',
      }),
    dataset: z.array(ProvidersDatasetSchema).exactOptional(),
    datasetName: z
      .array(z.enum(['BASIC_AGG_DATA', 'ADVANCE_AGG_DATA', 'ACCT_PROFILE', 'DOCUMENT']))
      .exactOptional(),
    field: z.array(FieldSchema),
    preferences: ProviderAccountPreferencesSchema.exactOptional(),
  })
  .openapi({ required: ['field'], title: 'ProviderAccountRequest' })
  .openapi('ProviderAccountRequest')

const ProviderAccountResponseSchema = z
  .object({
    providerAccount: z.array(ProviderAccountSchema).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ title: 'ProviderAccountResponse', required: [] })
  .openapi('ProviderAccountResponse')

const ProviderAccountUserProfileResponseSchema = z
  .object({
    providerAccount: z
      .array(ProviderAccountProfileSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ title: 'ProviderAccountUserProfileResponse', required: [] })
  .openapi('ProviderAccountUserProfileResponse')

const ProviderDetailSchema = z
  .object({
    PRIORITY: z
      .enum(['POPULAR', 'SUGGESTED', 'COBRAND', 'SEARCH', 'ALL'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the priority for which the service is invoked.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    accountType: z
      .array(z.enum(['CURRENT', 'BROKERAGE_CASH']))
      .exactOptional()
      .openapi({
        description:
          'AccountType supported by the provider, eg: Brokerage Cash, Current<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    associatedProviderIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({
        description:
          'The screen-scraping providers that are associated to the Open Banking provider ID.<br><br><b>Applicable containers</b>: All Containers<br><b>Endpoints</b>:<ul><li>GET providers</li><li>GET providers/{providerId}</li></ul>',
        readOnly: true,
      }),
    authParameter: z
      .array(z.enum(['authorizationCode', 'idToken', 'authResponse']))
      .exactOptional()
      .openapi({
        description:
          'AuthParameter appears in the response only in case of token-based aggregation sites.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    authType: z
      .enum(['OAUTH', 'CREDENTIALS', 'MFA_CREDENTIALS'])
      .exactOptional()
      .openapi({
        description:
          'The authentication type enabled at the provider site. <br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    baseUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The base URL of the provider's site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>",
        readOnly: true,
      }),
    capability: z
      .array(CapabilitySchema)
      .exactOptional()
      .openapi({
        description:
          'Capability of the site<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><br><b>Note : </b> capability has been deprecated',
        readOnly: true,
      }),
    countryISOCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Country to which the provider belongs.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    dataset: z
      .array(ProvidersDatasetSchema)
      .exactOptional()
      .openapi({
        description:
          'Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    favicon: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Favicon link of the provider.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    help: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text to guide user through linking an account that belongs to the site<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    id: z
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
          'Unique identifier for the provider site(e.g., financial institution sites, biller sites, lender sites, etc.).<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    isAddedByUser: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates that the site has been added by the user at least once.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    isAutoRefreshEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if a provider site is auto-refreshed.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    isConsentRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if a provider site requires consent.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    languageISOCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The language in which the provider details are provided. For example, a site supports two languages English and French. English being the primary language, the provider response will be provided in French depending on the user's locale. The language follows the two letter ISO code.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>",
        readOnly: true,
      }),
    lastModified: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Determines when the provider information was updated by Yodlee. If the customer caches the data, the cache is recommended to be refreshed based on this field.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    loginForm: z
      .array(LoginFormSchema)
      .exactOptional()
      .openapi({
        description:
          'This entity represents the structure of the login or MFA form that is displayed to the user at the provider site. For performance reasons, this field is returned only when a single provider is requested in the request.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li></ul>',
        readOnly: true,
      }),
    loginUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The login URL of the provider's site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>",
        readOnly: true,
      }),
    logo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The logo link of the provider institution. The link will return the logo in the PNG format.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of a provider site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    primaryLanguageISOCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The primary language of the site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    status: z
      .enum(['Supported', 'Beta', 'Unsupported'])
      .exactOptional()
      .openapi({
        description:
          'Determines if the provider is supported for the cobrand (customer), is in the beta stage, etc. <br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'ProviderDetail', required: [] })
  .openapi('ProviderDetail')

const ProviderDetailResponseSchema = z
  .object({ provider: z.array(ProviderDetailSchema).exactOptional().openapi({ readOnly: true }) })
  .openapi({ title: 'ProviderDetailResponse', required: [] })
  .openapi('ProviderDetailResponse')

const ProvidersSchema = z
  .object({
    PRIORITY: z
      .enum(['POPULAR', 'SUGGESTED', 'COBRAND', 'SEARCH', 'ALL'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the priority for which the service is invoked.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    accountType: z
      .array(z.enum(['CURRENT', 'BROKERAGE_CASH']))
      .exactOptional()
      .openapi({
        description:
          'AccountType supported by the provider, eg: Brokerage Cash, Current<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    associatedProviderIds: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .exactOptional()
      .openapi({
        description:
          'The screen-scraping providers that are associated to the Open Banking provider ID.<br><br><b>Applicable containers</b>: All Containers<br><b>Endpoints</b>:<ul><li>GET providers</li><li>GET providers/{providerId}</li></ul>',
        readOnly: true,
      }),
    authParameter: z
      .array(z.enum(['authorizationCode', 'idToken', 'authResponse']))
      .exactOptional()
      .openapi({
        description:
          'AuthParameter appears in the response only in case of token-based aggregation sites.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    authType: z
      .enum(['OAUTH', 'CREDENTIALS', 'MFA_CREDENTIALS'])
      .exactOptional()
      .openapi({
        description:
          'The authentication type enabled at the provider site. <br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    baseUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The base URL of the provider's site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>",
        readOnly: true,
      }),
    capability: z
      .array(CapabilitySchema)
      .exactOptional()
      .openapi({
        description:
          'Capability of the site<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul><br><b>Note : </b> capability has been deprecated',
        readOnly: true,
      }),
    countryISOCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Country to which the provider belongs.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    dataset: z
      .array(ProvidersDatasetSchema)
      .exactOptional()
      .openapi({
        description:
          'Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    favicon: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Favicon link of the provider.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    forgetPasswordUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The forget password URL of the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providers</li></ul>',
        readOnly: true,
      }),
    help: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Text to guide user through linking an account that belongs to the site<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    id: z
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
          'Unique identifier for the provider site(e.g., financial institution sites, biller sites, lender sites, etc.).<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    isAddedByUser: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates that the site has been added by the user at least once.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    isAutoRefreshEnabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if a provider site is auto-refreshed.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    isConsentRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if a provider site requires consent.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    languageISOCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The language in which the provider details are provided. For example, a site supports two languages English and French. English being the primary language, the provider response will be provided in French depending on the user's locale. The language follows the two letter ISO code.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>",
        readOnly: true,
      }),
    lastModified: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Determines when the provider information was updated by Yodlee. If the customer caches the data, the cache is recommended to be refreshed based on this field.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    loginHelp: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Help text to guide the user to choose the correct provider site.<br><br><b>Endpoints</b>:<ul><li>GET providers</li></ul>',
        readOnly: true,
      }),
    loginUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The login URL of the provider's site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>",
        readOnly: true,
      }),
    logo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The logo link of the provider institution. The link will return the logo in the PNG format.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of a provider site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    primaryLanguageISOCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The primary language of the site.<br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
    status: z
      .enum(['Supported', 'Beta', 'Unsupported'])
      .exactOptional()
      .openapi({
        description:
          'Determines if the provider is supported for the cobrand (customer), is in the beta stage, etc. <br><br><b>Endpoints</b>:<ul><li>GET providers/{providerId}</li><li>GET providers</li></ul>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'Providers', required: [] })
  .openapi('Providers')

const ProviderResponseSchema = z
  .object({ provider: z.array(ProvidersSchema).exactOptional().openapi({ readOnly: true }) })
  .openapi({ title: 'ProviderResponse', required: [] })
  .openapi('ProviderResponse')

const TotalCountSchema = z
  .object({
    count: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
  })
  .openapi({ title: 'TotalCount', required: [] })
  .openapi('TotalCount')

const ProvidersCountSchema = z
  .object({ TOTAL: TotalCountSchema.exactOptional() })
  .openapi({ title: 'ProvidersCount', required: [] })
  .openapi('ProvidersCount')

const ProvidersCountResponseSchema = z
  .object({ provider: ProvidersCountSchema.exactOptional() })
  .openapi({ title: 'ProvidersCountResponse', required: [] })
  .openapi('ProvidersCountResponse')

const RuleClauseSchema = z
  .object({
    field: z
      .enum(['amount', 'description'])
      .exactOptional()
      .openapi({
        description:
          'Field for which the clause is created.<br><br><br><b>Valid Values</b>:amount,description<b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
    fieldValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value would be the amount value in case of amount based rule clause or the string value in case of description based rule clause.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
    operation: z
      .enum([
        'numberEquals',
        'numberLessThan',
        'numberLessThanEquals',
        'numberGreaterThan',
        'numberGreaterThanEquals',
        'stringEquals',
        'stringContains',
      ])
      .exactOptional()
      .openapi({
        description:
          'Operation for which the clause is created.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
    ruleClauseId: z
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
          'Unique identifier generated for the rule clause.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
    userDefinedRuleId: z
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
          'Unique identifier generated for every rule the user creates.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'RuleClause', required: [] })
  .openapi('RuleClause')

const StatementSchema = z
  .object({
    accountId: z
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
          'Account to which the statement belongs to.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>',
        readOnly: true,
      }),
    amountDue: MoneySchema.exactOptional(),
    apr: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The APR applied to the balance on the credit card account, as available in the statement.<br><b>Note:</b> In case of variable APR, the APR available on the statement might differ from the APR available at the account-level.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>',
        readOnly: true,
      }),
    billingPeriodEnd: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The end date of the statement period.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>',
        readOnly: true,
      }),
    billingPeriodStart: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start date of the statement period.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>',
        readOnly: true,
      }),
    cashAdvance: MoneySchema.exactOptional(),
    cashApr: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The APR applicable to cash withdrawals on the credit card account.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>',
        readOnly: true,
      }),
    dueDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date by when the minimum payment is due to be paid.<br><b>Note:</b> The due date that appears in the statement may differ from the due date at the account-level.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>',
        readOnly: true,
      }),
    id: z
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
          'Unique identifier for the statement.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>',
        readOnly: true,
      }),
    interestAmount: MoneySchema.exactOptional(),
    isLatest: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'The field is set to true if the statement is the latest generated statement.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>',
        readOnly: true,
      }),
    lastPaymentAmount: MoneySchema.exactOptional(),
    lastPaymentDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the last payment was done during the billing cycle.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>',
        readOnly: true,
      }),
    lastUpdated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date when the account was last updated by Yodlee.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>',
        readOnly: true,
      }),
    loanBalance: MoneySchema.exactOptional(),
    minimumPayment: MoneySchema.exactOptional(),
    newCharges: MoneySchema.exactOptional(),
    principalAmount: MoneySchema.exactOptional(),
    statementDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the statement is generated.<br><br><b>Applicable containers</b>: creditCard,  loan, insurance<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'Statement', required: [] })
  .openapi('Statement')

const StatementResponseSchema = z
  .object({ statement: z.array(StatementSchema).exactOptional().openapi({ readOnly: true }) })
  .openapi({ title: 'StatementResponse', required: [] })
  .openapi('StatementResponse')

const TransactionSchema = z
  .object({
    CONTAINER: z
      .enum([
        'bank',
        'creditCard',
        'investment',
        'insurance',
        'loan',
        'reward',
        'realEstate',
        'otherAssets',
        'otherLiabilities',
      ])
      .exactOptional()
      .openapi({
        description:
          "The account's container.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>",
        readOnly: true,
      }),
    accountId: z
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
          'The account from which the transaction was made. This is basically the primary key of the account resource. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    amount: MoneySchema.exactOptional(),
    baseType: z
      .enum(['CREDIT', 'DEBIT'])
      .exactOptional()
      .openapi({
        description:
          'Indicates if the transaction appears as a debit or a credit transaction in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the category assigned to the transaction. This is the category field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    categoryId: z
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
          'The id of the category assigned to the transaction. This is the id field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    categorySource: z
      .enum(['SYSTEM', 'USER'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the source of the category, i.e., categories derived by the system or assigned/provided by the consumer. This is the source field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    categoryType: z
      .enum(['TRANSFER', 'DEFERRED_COMPENSATION', 'UNCATEGORIZE', 'INCOME', 'EXPENSE'])
      .exactOptional()
      .openapi({
        description:
          'The categoryType of the category assigned to the transaction. This is the type field of the transaction category resource. The supported values are provided by the GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    checkNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The checkNumber of the transaction.<br><br><b>Applicable containers</b>: bank<br>',
        readOnly: true,
      }),
    commission: MoneySchema.exactOptional(),
    createdDate: z.string().exactOptional().openapi({ readOnly: true }),
    cusipNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The CUSIP (Committee on Uniform Securities Identification Procedures) identifies the financial instruments in the United States and Canada.<br><b><br><b>Note</b></b>: The CUSIP number field applies only to trade related transactions.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    date: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value provided will be either postDate or transactionDate. postDate takes higher priority than transactionDate, except for the investment container as only transactionDate is available. The availability of postDate or transactionDate depends on the provider site.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    description: DescriptionSchema.exactOptional(),
    detailCategoryId: z
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
          'The id of the detail category that is assigned to the transaction. The supported values are provided by GET transactions/categories.<br><br><b>Applicable containers</b>: bank,creditCard<br>',
        readOnly: true,
      }),
    highLevelCategoryId: z
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
          'The high level category assigned to the transaction. The supported values are provided by the GET transactions/categories. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    holdingDescription: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For transactions involving securities, this captures the securities description.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    id: z
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
          'An unique identifier for the transaction. The combination of the id and account container are unique in the system. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    interest: MoneySchema.exactOptional(),
    isManual: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the transaction is aggregated from the FI site or the consumer has manually created the transaction using the application or an API. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    isin: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'International Securities Identification Number (ISIN) standard is used worldwide to identify specific securities.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    lastUpdated: z.string().exactOptional().openapi({ readOnly: true }),
    memo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional notes provided by the user for a particular  transaction through application or API services. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    merchant: MerchantSchema.exactOptional(),
    parentCategoryId: z
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
          'The parentCategoryId of the category assigned to the transaction.<br><b>Note</b>: This field will be provided in the response if the transaction is assigned to a user-created category. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    postDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on which the transaction is posted to the account.<br><br><b>Applicable containers</b>: bank,creditCard,insurance,loan<br>',
        readOnly: true,
      }),
    price: MoneySchema.exactOptional(),
    principal: MoneySchema.exactOptional(),
    quantity: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The quantity associated with the transaction.<br><b>Note</b>: The quantity field applies only to trade-related transactions.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    runningBalance: MoneySchema.exactOptional(),
    sedol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'SEDOL stands for Stock Exchange Daily Official List, a list of security identifiers used in the United Kingdom and Ireland for clearing purposes.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    settleDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'It is the date on which the transaction is finalized, that is, the date the ownership of the security is transferred to the buyer. The settlement date is usually few days after the transaction date.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    sourceId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique ID that the provider site has assigned to the transaction. The source ID is only available for the pre-populated accounts.<br>Pre-populated accounts are the accounts that the FI customers shares with Yodlee, so that the user does not have to add or aggregate those accounts.',
        readOnly: true,
      }),
    sourceType: z
      .enum(['AGGREGATED', 'MANUAL'])
      .exactOptional()
      .openapi({
        description:
          'The source through which the transaction is added to the Yodlee system.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loann<br><b>Applicable Values:</b><br>',
        readOnly: true,
      }),
    status: z
      .enum(['POSTED', 'PENDING', 'SCHEDULED', 'FAILED', 'CLEARED'])
      .exactOptional()
      .openapi({
        description:
          'The status of the transaction: pending or posted.<br><b>Note</b>: Most FI sites only display posted transactions. If the FI site displays transaction status, same will be aggregated.  <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    subType: z
      .enum([
        'AUTH_HOLD',
        'AUTH_REQUEST',
        'OVERDRAFT_CHARGE',
        'CREDIT_ADJUSTMENT',
        'PIN_DEBIT',
        'BANK_DIRECT_DEPOSIT',
        'DIVIDEND_DEPOSIT',
        'INTEREST_SAVINGS',
        'INTEREST_ADJUSTMENT',
        'ONLINE_PURCHASE',
        'PURCHASED_WITH_CHECK',
        'RECURRING_BILLING',
        'TAX_PAYMENT',
        'PAYMENT_BY_CHECK',
        'PAYMENT_PLAN',
        'FEE_REFUND',
        'WIRE_TRANSFER_CHARGE',
        'ACCOUNT_TO_ACCOUNT_TRANSFER',
        'BANK_TO_BANK_TRANSACTION',
        'BANK_TO_NON_BANK_ACCOUNT_TRANSFER',
        'CASH_WITHDRAWAL_AT_FI',
        'ATM_CASH_WITHDRAWAL',
        'AUTH_PROCESSING',
        'AUTH_RELEASE',
        'PRE_AUTH',
        'AUTH_COMPLETE',
        'AUTH_VOID',
        'BALANCE_ENQUIRY',
        'ACCOUNT_VERIFICATION',
        'PRE_AUTH_COMPLETION',
        'SERVICE_CHARGE',
        'SERVICE_CHARGE_FEE_REFUND',
        'RETURNED_CHECK_CHARGE',
        'RETURNED_CHECK_REIMBURSEMENT',
        'CASH_ADVANCE',
        'BILL_PAY_CHARGE',
        'CHECK_IMAGE_SERVICE_CHARGE',
        'OVERDRAFT_PROTECTION_CHARGE',
        'STOP_PAYMENT_CHARGE',
        'CHECKS_ORDERING_CHARGE',
        'MONTHLY_MAINTENANCE_CHARGE',
        'DEBIT_CARD_FEE',
        'CONVENIENCE_FEE',
        'PERSONAL_LOAN_CREDIT',
        'CREDIT_CARD_CREDIT',
        'AUTO_LOAN',
        'HOME_LOAN_MORTGAGE',
        'SHORT_TERM_CREDIT',
        'SIGNATURE_DEBIT',
        'CONTACT_LESS_DEBIT',
        'DEFERRED_DEPOSIT',
        'DEFERRED_BILL_PAY',
        'INSTALLMENT_PAYMENT',
        'RECURRING_SUBSCRIPTION_PAYMENT',
        'HOLD_CHECK_PAYMENT',
        'CAPITAL_GAINS_DISTIBUTION',
        'CG_LONG_TERM_DEPOSIT',
        'OPEN_SALE_DEPOSIT',
        'INTEREST__CHECK',
        'PURCHASE_VOID',
        'PURCHASE_WITH_CREDIT_CARD',
        'PURCHASE_WITH_DEBIT_CARD',
        'CHARGE_A_REPEAT_CUSTOMER',
        'DOWN_PAYMENT_OR_ANNUITY_PAYMENT_OR_DIRECT_PAYMENT',
        'FEE_PAYMENT',
        'FINANCE_CHARGE_REFUND',
        'TRANSACTION_VOID',
        'FEE_VOID',
        'DEBIT_CARD_WITHDRAWAL_AT_STORE',
        'ELECTRONIC_PAYMENT',
        'ACH_DEBIT',
        'ATM_TELLER_DEPOSIT',
        'POS_DEBIT',
        'BANK_ADJUSTMENT',
        'CHARGES_FEES',
        'INTEREST',
        'DEPOSITS_CREDITS',
        'PAYMENT',
        'PURCHASE',
        'REFUND',
        'TRANSFER',
        'WITHDRAWAL',
        'OTHER_DEPOSITS',
        'OTHER_WITHDRAWALS',
        'ADJUSTMENT',
        'FINANCE_CHARGE',
        'OTHER_CHARGES_FEES',
        'ANNUAL_FEE',
        'DEPOSIT',
        'DIRECT_DEPOSIT_SALARY',
        'INVESTMENT_INCOME_CASH',
        'SSA',
        'REWARDS',
        'CHECK_DEPOSIT',
        'MOBILE_REMOTE_DEPOSIT',
        'TELLER_DEPOSIT',
        'TAX_REFUND',
        'CREDIT_CARD_PAYMENT',
        'INSURANCE_PAYMENT',
        'UTILITIES_PAYMENT',
        'CHILD_SUPPORT',
        'LOAN',
        'PERSONAL_LOAN',
        'STUDENT_LOAN',
        'SALES_TAX',
        'REIMBURSEMENT',
        'BALANCE_TRANSFER',
        'WIRE_TRANSFER',
        'OVERDRAFT_PROTECTION',
        'DEBIT',
        'CREDIT',
        'NSF_FEES',
      ])
      .exactOptional()
      .openapi({
        description:
          'The transaction subtype field provides a detailed transaction type. For example, purchase is a transaction type and the transaction subtype field indicates if the purchase was made using a debit or credit card.<br><b>Note</b>: The transaction subtype field is available only in the United States, Canada, United Kingdom, and India.<br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    symbol: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The symbol of the security being traded.<br><b>Note</b>: The settle date field applies only to trade-related transactions. <br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
    transactionDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date the transaction happens in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br>',
        readOnly: true,
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The nature of the transaction, i.e., deposit, refund, payment, etc.<br><b>Note</b>: The transaction type field is available only for the United States, Canada, United Kingdom, and India based provider sites. <br><br><b>Applicable containers</b>: bank,creditCard,investment<br>',
        readOnly: true,
      }),
    valoren: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'It is an identification number that is assigned to financial instruments such as stocks and bonds trading in Switzerland.<br><br><b>Applicable containers</b>: investment<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'Transaction', required: [] })
  .openapi('Transaction')

const TransactionCategorizationRuleSchema = z
  .object({
    categoryLevelId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The level of the category for which the rule is created.<br><br><b>Applicable containers</b>:  creditCard, insurance, loan<br>',
        readOnly: true,
      }),
    memId: z
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
          'Unique identifier of the user.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
    ruleClauses: z
      .array(RuleClauseSchema)
      .exactOptional()
      .openapi({
        description:
          'Details of rules. <br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
    rulePriority: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The order in which the rules get executed on transactions.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
    transactionCategorisationId: z
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
          'Category id that is assigned to the transaction when the transaction matches the rule clause. This is the id field of the transaction category resource.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
    userDefinedRuleId: z
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
          'Unique identifier generated for every rule the user creates.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'TransactionCategorizationRule', required: [] })
  .openapi('TransactionCategorizationRule')

const TransactionCategorizationRuleInfoSchema = z
  .object({
    categoryId: z.int32(),
    priority: z.int32().exactOptional(),
    ruleClause: z.array(FieldOperationSchema),
    source: z.enum(['SYSTEM', 'USER']).exactOptional(),
  })
  .openapi({ required: ['categoryId', 'ruleClause'], title: 'TransactionCategorizationRuleInfo' })
  .openapi('TransactionCategorizationRuleInfo')

const TransactionCategorizationRuleRequestSchema = z
  .object({ rule: TransactionCategorizationRuleInfoSchema })
  .openapi({ required: ['rule'], title: 'TransactionCategorizationRuleRequest' })
  .openapi('TransactionCategorizationRuleRequest')

const TransactionCategorizationRuleResponseSchema = z
  .object({
    txnRules: z
      .array(TransactionCategorizationRuleSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ title: 'TransactionCategorizationRuleResponse', required: [] })
  .openapi('TransactionCategorizationRuleResponse')

const TransactionCategorySchema = z
  .object({
    category: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the category.<br><b>Note</b>: Transaction categorization is one of the core features offered by Yodlee and the categories are assigned to the transactions by the system. Transactions can be clubbed together by the category that is assigned to them.  <br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
    classification: z
      .enum(['PERSONAL', 'BUSINESS'])
      .exactOptional()
      .openapi({
        description:
          'Category Classification.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    defaultCategoryName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A attribute which will always hold the first value(initial name) of Yodlee defined category attribute.<br><br><b>Applicable containers</b>: creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
    defaultHighLevelCategoryName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A attribute which will always hold the first value(initial name) of Yodlee defined highLevelCategoryName attribute.<br><br><b>Applicable containers</b>: creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
    detailCategory: z
      .array(DetailCategorySchema)
      .exactOptional()
      .openapi({
        description:
          'Entity that provides detail category attributes<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
    highLevelCategoryId: z
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
          'The unique identifier of the high level category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
    highLevelCategoryName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the high level category. A group of similar transaction categories are clubbed together to form a high-level category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
    id: z
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
          'Unique identifier of the category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br>',
        readOnly: true,
      }),
    source: z
      .enum(['SYSTEM', 'USER'])
      .exactOptional()
      .openapi({
        description:
          'Source used to identify whether the transaction category is user defined category or system created category.<br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    type: z
      .enum(['TRANSFER', 'DEFERRED_COMPENSATION', 'UNCATEGORIZE', 'INCOME', 'EXPENSE'])
      .exactOptional()
      .openapi({
        description:
          'Transaction categories and high-level categories are further mapped to five transaction category types. Customers, based on their needs can either use the transaction categories, the high-level categories, or the transaction category types. <br><br><b>Applicable containers</b>:  creditCard, investment, insurance, loan<br><b>Applicable Values</b><br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'TransactionCategory', required: [] })
  .openapi('TransactionCategory')

const TransactionCategoryRequestSchema = z
  .object({
    categoryName: z.string().min(1).max(50).exactOptional(),
    parentCategoryId: z.int32().min(1),
    source: z.string().exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['parentCategoryId'], title: 'TransactionCategoryRequest' })
  .openapi('TransactionCategoryRequest')

const TransactionCategoryResponseSchema = z
  .object({
    transactionCategory: z
      .array(TransactionCategorySchema)
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ title: 'TransactionCategoryResponse', required: [] })
  .openapi('TransactionCategoryResponse')

const TransactionTotalSchema = z
  .object({
    count: z
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
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ title: 'TransactionTotal', required: [] })
  .openapi('TransactionTotal')

const TransactionCountSchema = z
  .object({ TOTAL: TransactionTotalSchema.exactOptional() })
  .openapi({ title: 'TransactionCount', required: [] })
  .openapi('TransactionCount')

const TransactionCountResponseSchema = z
  .object({ transaction: TransactionCountSchema.exactOptional() })
  .openapi({ title: 'TransactionCountResponse', required: [] })
  .openapi('TransactionCountResponse')

const UpdateTransactionSchema = z
  .object({
    categoryId: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    categorySource: z.enum(['SYSTEM', 'USER']),
    container: z.enum([
      'bank',
      'creditCard',
      'investment',
      'insurance',
      'loan',
      'reward',
      'realEstate',
      'otherAssets',
      'otherLiabilities',
    ]),
    description: DescriptionSchema.exactOptional(),
    memo: z.string().exactOptional(),
  })
  .openapi({ required: ['categoryId', 'categorySource', 'container'], title: 'UpdateTransaction' })
  .openapi('UpdateTransaction')

const TransactionRequestSchema = z
  .object({ transaction: UpdateTransactionSchema })
  .openapi({ required: ['transaction'], title: 'TransactionRequest' })
  .openapi('TransactionRequest')

const TransactionResponseSchema = z
  .object({ transaction: z.array(TransactionSchema).exactOptional().openapi({ readOnly: true }) })
  .openapi({ title: 'TransactionResponse', required: [] })
  .openapi('TransactionResponse')

const UpdateAccountInfoSchema = z
  .object({
    accountName: z.string().min(1).max(100).exactOptional(),
    accountNumber: z
      .string()
      .regex(/^[a-zA-Z0-9]+$/)
      .min(0)
      .max(100)
      .exactOptional(),
    accountStatus: z
      .enum(['ACTIVE', 'INACTIVE', 'TO_BE_CLOSED', 'CLOSED', 'DELETED'])
      .exactOptional(),
    address: AccountAddressSchema.exactOptional(),
    amountDue: MoneySchema.exactOptional(),
    balance: MoneySchema.exactOptional(),
    container: z
      .enum([
        'bank',
        'creditCard',
        'investment',
        'insurance',
        'loan',
        'reward',
        'realEstate',
        'otherAssets',
        'otherLiabilities',
      ])
      .exactOptional(),
    dueDate: z.string().exactOptional(),
    frequency: z
      .enum([
        'DAILY',
        'ONE_TIME',
        'WEEKLY',
        'EVERY_2_WEEKS',
        'SEMI_MONTHLY',
        'MONTHLY',
        'QUARTERLY',
        'SEMI_ANNUALLY',
        'ANNUALLY',
        'EVERY_2_MONTHS',
        'EBILL',
        'FIRST_DAY_MONTHLY',
        'LAST_DAY_MONTHLY',
        'EVERY_4_WEEKS',
        'UNKNOWN',
        'OTHER',
      ])
      .exactOptional(),
    homeValue: MoneySchema.exactOptional(),
    includeInNetWorth: z.string().exactOptional(),
    isEbillEnrolled: z.string().exactOptional(),
    memo: z.string().min(0).max(250).exactOptional(),
    nickname: z.string().min(0).max(50).exactOptional(),
  })
  .openapi({ title: 'UpdateAccountInfo', required: [] })
  .openapi('UpdateAccountInfo')

const UpdateAccountRequestSchema = z
  .object({ account: UpdateAccountInfoSchema })
  .openapi({ required: ['account'], title: 'UpdateAccountRequest' })
  .openapi('UpdateAccountRequest')

const UpdateCategoryRequestSchema = z
  .object({
    categoryName: z.string().exactOptional(),
    highLevelCategoryName: z.string().exactOptional(),
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64().min(1n),
      )
      .openapi({ type: 'integer', format: 'int64', minimum: 1, exclusiveMinimum: false }),
    source: z.enum(['SYSTEM', 'USER']),
  })
  .openapi({ required: ['id', 'source'], title: 'UpdateCategoryRequest' })
  .openapi('UpdateCategoryRequest')

const UpdateCobrandNotificationEventSchema = z
  .object({
    callbackUrl: z
      .string()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET cobrand/config/notifications/events</li></ul>',
      }),
  })
  .openapi({ title: 'UpdateCobrandNotificationEvent', required: [] })
  .openapi('UpdateCobrandNotificationEvent')

const UpdateCobrandNotificationEventRequestSchema = z
  .object({ event: UpdateCobrandNotificationEventSchema })
  .openapi({ required: ['event'], title: 'UpdateCobrandNotificationEventRequest' })
  .openapi('UpdateCobrandNotificationEventRequest')

const UpdateConfigsNotificationEventSchema = z
  .object({
    callbackUrl: z
      .string()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'URL to which the notification should be posted.<br><br><b>Endpoints</b>:<ul><li>GET configs/notifications/events</li></ul>',
      }),
  })
  .openapi({ title: 'UpdateConfigsNotificationEvent', required: [] })
  .openapi('UpdateConfigsNotificationEvent')

const UpdateConfigsNotificationEventRequestSchema = z
  .object({ event: UpdateConfigsNotificationEventSchema })
  .openapi({ required: ['event'], title: 'UpdateConfigsNotificationEventRequest' })
  .openapi('UpdateConfigsNotificationEventRequest')

const UserAddressSchema = z
  .object({
    address1: z.string().exactOptional(),
    address2: z.string().exactOptional(),
    address3: z.string().exactOptional(),
    city: z.string().exactOptional(),
    country: z.string().exactOptional(),
    state: z.string().exactOptional(),
    zip: z.string().exactOptional(),
  })
  .openapi({ title: 'UserAddress', required: [] })
  .openapi('UserAddress')

const UserRequestPreferencesSchema = z
  .object({
    currency: z
      .enum([
        'AUD',
        'BRL',
        'CAD',
        'EUR',
        'GBP',
        'HKD',
        'IDR',
        'INR',
        'JPY',
        'NZD',
        'SGD',
        'USD',
        'ZAR',
        'CNY',
        'VND',
        'MYR',
        'CHF',
      ])
      .exactOptional()
      .openapi({
        description:
          'The currency of the user. This currency will be respected while providing the response for derived API services.<br><b>Applicable Values</b><br>',
      }),
    dateFormat: z
      .string()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The dateformat of the user.This attribute is just a place holder and has no impact on any other API services.',
      }),
    locale: z
      .enum(['en_US', 'en_ES', 'fr_CA', 'zh_CN'])
      .exactOptional()
      .openapi({
        description:
          'The locale of the user. This locale will be considered for localization features like providing the provider information in the supported locale or providing category names in the transaction related services.<br><b>Applicable Values</b><br>',
      }),
    timeZone: z
      .string()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The timezone of the user. This attribute is just a place holder and has no impact on any other API services.',
      }),
  })
  .openapi({ title: 'UserRequestPreferences', required: [] })
  .openapi('UserRequestPreferences')

const UpdateUserRegistrationSchema = z
  .object({
    address: UserAddressSchema.exactOptional(),
    email: z.string().exactOptional(),
    name: NameSchema.exactOptional(),
    preferences: UserRequestPreferencesSchema.exactOptional(),
    segmentName: z.string().exactOptional(),
  })
  .openapi({ title: 'UpdateUserRegistration', required: [] })
  .openapi('UpdateUserRegistration')

const UpdateUserRequestSchema = z
  .object({ user: UpdateUserRegistrationSchema })
  .openapi({ required: ['user'], title: 'UpdateUserRequest' })
  .openapi('UpdateUserRequest')

const VerificationBankTransferCodeSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The FI's branch identification number.Additional Details: The routing number of the bank account in the United States. For non-United States accounts, it is the IFSC code (India), BSB number (Australia), and sort code (United Kingdom). <br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: bank, investment<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST verification</li></ul>",
      }),
    type: z
      .enum(['BSB', 'IFSC', 'ROUTING_NUMBER', 'SORT_CODE'])
      .exactOptional()
      .openapi({
        description:
          'The bank transfer code type varies depending on the region of the account origination. <br><b>Account Type</b>: Aggregated<br><b>Applicable containers</b>: bank, investment<br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST verification</li></ul><b>Applicable Values</b><br>',
      }),
  })
  .openapi({ title: 'VerificationBankTransferCode', required: [] })
  .openapi('VerificationBankTransferCode')

const VerificationAccountSchema = z
  .object({
    accountName: z.string().exactOptional(),
    accountNumber: z.string().min(3).max(17),
    accountType: z.enum(['SAVINGS', 'CHECKING']),
    bankTransferCode: VerificationBankTransferCodeSchema,
  })
  .openapi({
    required: ['accountNumber', 'accountType', 'bankTransferCode'],
    title: 'VerificationAccount',
  })
  .openapi('VerificationAccount')

const VerificationTransactionSchema = z
  .object({ amount: MoneySchema, baseType: z.enum(['CREDIT', 'DEBIT']) })
  .openapi({ required: ['amount', 'baseType'], title: 'VerificationTransaction' })
  .openapi('VerificationTransaction')

const UpdateVerificationSchema = z
  .object({
    account: VerificationAccountSchema.exactOptional(),
    accountId: z
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
          'Unique identifier for the account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>',
      }),
    providerAccountId: z
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
          'Unique identifier for the provider account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>',
      }),
    reason: z
      .enum([
        'DATA_NOT_AVAILABLE',
        'ACCOUNT_HOLDER_MISMATCH',
        'FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE',
        'FULL_ACCOUNT_NUMBER_NOT_AVAILABLE',
        'BANK_TRANSFER_CODE_NOT_AVAILABLE',
        'EXPIRED',
        'DATA_MISMATCH',
        'INSTRUCTION_GENERATION_ERROR',
      ])
      .exactOptional()
      .openapi({
        description:
          'The reason the account verification failed.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>',
        readOnly: true,
      }),
    transaction: z.array(VerificationTransactionSchema),
    verificationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>',
        readOnly: true,
      }),
    verificationId: z
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
          'Unique identifier for the verification request.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>',
        readOnly: true,
      }),
    verificationStatus: z
      .enum(['INITIATED', 'DEPOSITED', 'SUCCESS', 'FAILED'])
      .exactOptional()
      .openapi({
        description:
          'The status of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b>',
        readOnly: true,
      }),
    verificationType: z
      .enum(['MATCHING', 'CHALLENGE_DEPOSIT'])
      .exactOptional()
      .openapi({
        description:
          'The account verification type.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b>',
      }),
  })
  .openapi({ required: ['transaction'], title: 'UpdateVerification' })
  .openapi('UpdateVerification')

const UpdateVerificationRequestSchema = z
  .object({ verification: UpdateVerificationSchema.exactOptional() })
  .openapi({ title: 'UpdateVerificationRequest', required: [] })
  .openapi('UpdateVerificationRequest')

const UpdatedProviderAccountSchema = z
  .object({
    aggregationSource: z
      .enum(['SYSTEM', 'USER'])
      .exactOptional()
      .openapi({
        description:
          'The source through which the providerAccount is added in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    createdDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date on when the provider account is created in the system.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    dataset: z
      .array(AccountDatasetSchema)
      .exactOptional()
      .openapi({
        description:
          'Logical grouping of dataset attributes into datasets such as Basic Aggregation Data, Account Profile and Documents.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    id: z
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
          'Unique identifier for the provider account resource. This is created during account addition.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    isManual: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether account is a manual or aggregated provider account.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    lastUpdated: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicate when the providerAccount is last updated successfully.<br><br><b>Account Type</b>: Aggregated<br><b>Endpoints</b>:<ul><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    loginForm: z
      .array(LoginFormSchema)
      .exactOptional()
      .openapi({
        description:
          'This entity gets returned in the response for only MFA based provider accounts during the add/update account polling process. This indicates that the MFA information is expected from the user to complete the process. This represents the structure of MFA form that is displayed to the user in the provider site.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>',
        readOnly: true,
      }),
    oauthMigrationStatus: z
      .enum(['IN_PROGRESS', 'TO_BE_MIGRATED', 'COMPLETED'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the migration status of the provider account from screen-scraping provider to the Open Banking provider. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>GET providerAccounts/{providerAccountId}</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    providerId: z
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
          'Unique identifier for the provider resource. This denotes the provider for which the provider account id is generated by the user.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul>',
        readOnly: true,
      }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Unique id generated to indicate the request.<br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li></ul>',
        readOnly: true,
      }),
    status: z
      .enum([
        'LOGIN_IN_PROGRESS',
        'USER_INPUT_REQUIRED',
        'IN_PROGRESS',
        'PARTIAL_SUCCESS',
        'SUCCESS',
        'FAILED',
        'MIGRATION_IN_PROGRESS',
      ])
      .exactOptional()
      .openapi({
        description:
          'The status of last update attempted for the account. <br><br><b>Endpoints</b>:<ul><li>GET providerAccounts</li><li>POST providerAccounts</li><li>PUT providerAccounts/{providerAccountId}</li><li>GET providerAccounts/{providerAccountId}</li><li>GET dataExtracts/userData</li></ul><b>Applicable Values</b><br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'UpdatedProviderAccount', required: [] })
  .openapi('UpdatedProviderAccount')

const UpdatedProviderAccountResponseSchema = z
  .object({
    providerAccount: z
      .array(UpdatedProviderAccountSchema)
      .exactOptional()
      .openapi({ readOnly: true }),
  })
  .openapi({ title: 'UpdatedProviderAccountResponse', required: [] })
  .openapi('UpdatedProviderAccountResponse')

const UserResponsePreferencesSchema = z
  .object({
    currency: z
      .enum([
        'AUD',
        'BRL',
        'CAD',
        'EUR',
        'GBP',
        'HKD',
        'IDR',
        'INR',
        'JPY',
        'NZD',
        'SGD',
        'USD',
        'ZAR',
        'CNY',
        'VND',
        'MYR',
        'CHF',
      ])
      .exactOptional()
      .openapi({
        description:
          'The currency of the user. This currency will be respected while providing the response for derived API services.<br><b>Applicable Values</b><br>',
      }),
    dateFormat: z
      .string()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The dateformat of the user.This attribute is just a place holder and has no impact on any other API services.',
      }),
    locale: z
      .enum(['en_US', 'en_ES', 'fr_CA', 'zh_CN'])
      .exactOptional()
      .openapi({
        description:
          'The locale of the user. This locale will be considered for localization features like providing the provider information in the supported locale or providing category names in the transaction related services.<br><b>Applicable Values</b><br>',
      }),
    timeZone: z
      .string()
      .min(1)
      .max(2147483647)
      .exactOptional()
      .openapi({
        description:
          'The timezone of the user. This attribute is just a place holder and has no impact on any other API services.',
      }),
  })
  .openapi({ title: 'UserResponsePreferences', required: [] })
  .openapi('UserResponsePreferences')

const UserSessionSchema = z
  .object({
    userSession: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Session provided for a valid user to access API services upon successful authentication.<br><br><b>Endpoints</b>:<ul><li>POST user/samlLogin</li><li>POST user/register</li></ul>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'UserSession', required: [] })
  .openapi('UserSession')

const UserSchema = z
  .object({
    id: z
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
          'The unique identifier of a consumer/user in Yodlee system for whom the API services would be accessed for.<br><br><b>Endpoints</b>:<ul><li>POST user/samlLogin</li><li>POST user/register</li><li>GET user</li></ul>',
        readOnly: true,
      }),
    loginName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The login name of the user used for authentication.<br><br><b>Endpoints</b>:<ul><li>POST user/register</li><li>GET user</li></ul>',
        readOnly: true,
      }),
    name: NameSchema.exactOptional(),
    preferences: UserResponsePreferencesSchema.exactOptional(),
    roleType: z.literal('INDIVIDUAL').exactOptional(),
    session: UserSessionSchema.exactOptional(),
  })
  .openapi({ title: 'User', required: [] })
  .openapi('User')

const UserAccessTokenSchema = z
  .object({ accessTokens: z.array(AccessTokensSchema).exactOptional() })
  .openapi({ title: 'UserAccessToken', required: [] })
  .openapi('UserAccessToken')

const UserAccessTokensResponseSchema = z
  .object({ user: UserAccessTokenSchema.exactOptional() })
  .openapi({ title: 'UserAccessTokensResponse', required: [] })
  .openapi('UserAccessTokensResponse')

const UserDetailSchema = z
  .object({
    address: UserAddressSchema.exactOptional(),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address of the user.<br><br><b>Endpoints</b>:<ul><li>GET user</li></ul>',
        readOnly: true,
      }),
    id: z
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
          'The unique identifier of a consumer/user in Yodlee system for whom the API services would be accessed for.<br><br><b>Endpoints</b>:<ul><li>POST user/samlLogin</li><li>POST user/register</li><li>GET user</li></ul>',
        readOnly: true,
      }),
    loginName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The login name of the user used for authentication.<br><br><b>Endpoints</b>:<ul><li>POST user/register</li><li>GET user</li></ul>',
        readOnly: true,
      }),
    name: NameSchema.exactOptional(),
    preferences: UserResponsePreferencesSchema.exactOptional(),
    roleType: z.literal('INDIVIDUAL').exactOptional(),
    segmentName: z.string().exactOptional(),
  })
  .openapi({ title: 'UserDetail', required: [] })
  .openapi('UserDetail')

const UserDetailResponseSchema = z
  .object({ user: UserDetailSchema.exactOptional() })
  .openapi({ title: 'UserDetailResponse', required: [] })
  .openapi('UserDetailResponse')

const UserRegistrationSchema = z
  .object({
    address: UserAddressSchema.exactOptional(),
    email: z.string().exactOptional(),
    loginName: z.string().min(3).max(150),
    name: NameSchema.exactOptional(),
    preferences: UserRequestPreferencesSchema.exactOptional(),
    segmentName: z.string().exactOptional(),
  })
  .openapi({ required: ['loginName'], title: 'UserRegistration' })
  .openapi('UserRegistration')

const UserRequestSchema = z
  .object({ user: UserRegistrationSchema })
  .openapi({ required: ['user'], title: 'UserRequest' })
  .openapi('UserRequest')

const UserResponseSchema = z
  .object({ user: UserSchema.exactOptional() })
  .openapi({ title: 'UserResponse', required: [] })
  .openapi('UserResponse')

const VerificationSchema = z
  .object({
    account: VerificationAccountSchema.exactOptional(),
    accountId: z
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
          'Unique identifier for the account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>',
      }),
    providerAccountId: z
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
          'Unique identifier for the provider account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>',
      }),
    reason: z
      .enum([
        'DATA_NOT_AVAILABLE',
        'ACCOUNT_HOLDER_MISMATCH',
        'FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE',
        'FULL_ACCOUNT_NUMBER_NOT_AVAILABLE',
        'BANK_TRANSFER_CODE_NOT_AVAILABLE',
        'EXPIRED',
        'DATA_MISMATCH',
        'INSTRUCTION_GENERATION_ERROR',
      ])
      .exactOptional()
      .openapi({
        description:
          'The reason the account verification failed.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>',
        readOnly: true,
      }),
    verificationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>',
        readOnly: true,
      }),
    verificationId: z
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
          'Unique identifier for the verification request.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>',
        readOnly: true,
      }),
    verificationStatus: z
      .enum(['INITIATED', 'DEPOSITED', 'SUCCESS', 'FAILED'])
      .exactOptional()
      .openapi({
        description:
          'The status of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b>',
        readOnly: true,
      }),
    verificationType: z
      .enum(['MATCHING', 'CHALLENGE_DEPOSIT'])
      .exactOptional()
      .openapi({
        description:
          'The account verification type.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b>',
      }),
  })
  .openapi({ title: 'Verification', required: [] })
  .openapi('Verification')

const VerificationRequestSchema = z
  .object({ verification: VerificationSchema })
  .openapi({ required: ['verification'], title: 'VerificationRequest' })
  .openapi('VerificationRequest')

const VerificationResponseSchema = z
  .object({ verification: z.array(VerificationSchema).exactOptional().openapi({ readOnly: true }) })
  .openapi({ title: 'VerificationResponse', required: [] })
  .openapi('VerificationResponse')

const VerificationStatusSchema = z
  .object({
    account: VerificationAccountSchema.exactOptional(),
    accountId: z
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
          'Unique identifier for the account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>',
      }),
    providerAccountId: z
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
          'Unique identifier for the provider account.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>',
      }),
    reason: z
      .enum([
        'DATA_NOT_AVAILABLE',
        'ACCOUNT_HOLDER_MISMATCH',
        'FULL_ACCOUNT_NUMBER_AND_BANK_TRANSFER_CODE_NOT_AVAILABLE',
        'FULL_ACCOUNT_NUMBER_NOT_AVAILABLE',
        'BANK_TRANSFER_CODE_NOT_AVAILABLE',
        'EXPIRED',
        'DATA_MISMATCH',
        'INSTRUCTION_GENERATION_ERROR',
      ])
      .exactOptional()
      .openapi({
        description:
          'The reason the account verification failed.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>',
        readOnly: true,
      }),
    remainingAttempts: z
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
      .openapi({ type: 'integer', format: 'int64', readOnly: true }),
    verificationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>',
        readOnly: true,
      }),
    verificationId: z
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
          'Unique identifier for the verification request.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul>',
        readOnly: true,
      }),
    verificationStatus: z
      .enum(['INITIATED', 'DEPOSITED', 'SUCCESS', 'FAILED'])
      .exactOptional()
      .openapi({
        description:
          'The status of the account verification.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b>',
        readOnly: true,
      }),
    verificationType: z
      .enum(['MATCHING', 'CHALLENGE_DEPOSIT'])
      .exactOptional()
      .openapi({
        description:
          'The account verification type.<br><br><b>Endpoints</b>:<ul><li>POST verification</li><li>GET verification</li><li>PUT verification</li></ul><br><b>Applicable Values</b>',
      }),
  })
  .openapi({ title: 'VerificationStatus', required: [] })
  .openapi('VerificationStatus')

const VerificationStatusResponseSchema = z
  .object({
    verification: z.array(VerificationStatusSchema).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ title: 'VerificationStatusResponse', required: [] })
  .openapi('VerificationStatusResponse')

const VerifiedAccountSchema = z
  .object({
    accountNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The account number as it appears on the site. (The POST accounts service response return this field as number)<br><b>Additional Details</b>:<b> Bank/ Loan/ Insurance/ Investment</b>:<br> The account number for the bank account as it appears at the site.<br><b>Credit Card</b>: The account number of the card account as it appears at the site,<br>i.e., the card number.The account number can be full or partial based on how it is displayed in the account summary page of the site.In most cases, the site does not display the full account number in the account summary page and additional navigation is required to aggregate it.<br><b>Applicable containers</b>: All Containers<br><b>Aggregated / Manual</b>: Both <br><b>Endpoints</b>:<br><ul><li>GET accounts</li><li>GET accounts/{accountId}</li><li>POST accounts</li></ul>',
        readOnly: true,
      }),
    accountType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of account that is aggregated, i.e., savings, checking, credit card, charge, HELOC, etc. The account type is derived based on the attributes of the account. <br><b>Valid Values:</b><br><b>Aggregated Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PPF</li><li>RECURRING_DEPOSIT</li><li>FSA</li><li>MONEY_MARKET</li><li>IRA</li><li>PREPAID</li></ul><b>creditCard</b><ul><li>OTHER</li><li>CREDIT</li><li>STORE</li><li>CHARGE</li><li>OTHER</li></ul><b>investment (SN 1.0)</b><ul><li>BROKERAGE_MARGIN</li><li>HSA</li><li>IRA</li><li>BROKERAGE_CASH</li><li>401K</li><li>403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE</li><li>CUSTODIAL</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE</li><li>JTTIC</li><li>JTWROS</li><li>COMMUNITY_PROPERTY</li><li>JOINT_BY_ENTIRETY</li><li>CONSERVATORSHIP</li><li>ROTH</li><li>ROTH_CONVERSION</li><li>ROLLOVER</li><li>EDUCATIONAL</li><li>529_PLAN</li><li>457_DEFERRED_COMPENSATION</li><li>401A</li><li>PSP</li><li>MPP</li><li>STOCK_BASKET</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER</li><li>CHARITABLE_LEAD</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP</li><li>UTMA</li><li>UGMA</li><li>ESOPP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>SOLE_PROPRIETORSHIP</li><li>CHURCH</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CMA</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET</li><li>SUPER_ANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN</li><li>DEFERRED_PROFIT_SHARING_PLAN</li><li>NON_REGISTERED_SAVINGS_PLAN</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN</li><li>GROUP_RETIREMENT_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN</li><li>LOCKED_IN_RETIREMENT_ACCOUNT</li><li>REGISTERED_PENSION_PLAN</li><li>TAX_FREE_SAVINGS_ACCOUNT</li><li>LIFE_INCOME_FUND</li><li>REGISTERED_RETIREMENT_INCOME_FUND</li><li>SPOUSAL_RETIREMENT_INCOME_FUND</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND</li><li>GUARANTEED_INVESTMENT_CERTIFICATES</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN</li><li>OTHER</li></ul><b>investment (SN 2.0)</b><ul><li>BROKERAGE_CASH</li><li>BROKERAGE_MARGIN</li><li>INDIVIDUAL_RETIREMENT_ACCOUNT_IRA</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_401K</li><li>EMPLOYEE_RETIREMENT_SAVINGS_PLAN_403B</li><li>TRUST</li><li>ANNUITY</li><li>SIMPLE_IRA</li><li>CUSTODIAL_ACCOUNT</li><li>BROKERAGE_CASH_OPTION</li><li>BROKERAGE_MARGIN_OPTION</li><li>INDIVIDUAL</li><li>CORPORATE_INVESTMENT_ACCOUNT</li><li>JOINT_TENANTS_TENANCY_IN_COMMON_JTIC</li><li>JOINT_TENANTS_WITH_RIGHTS_OF_SURVIVORSHIP_JTWROS</li><li>JOINT_TENANTS_COMMUNITY_PROPERTY</li><li>JOINT_TENANTS_TENANTS_BY_ENTIRETY</li><li>CONSERVATOR</li><li>ROTH_IRA</li><li>ROTH_CONVERSION</li><li>ROLLOVER_IRA</li><li>EDUCATIONAL</li><li>EDUCATIONAL_SAVINGS_PLAN_529</li><li>DEFERRED_COMPENSATION_PLAN_457</li><li>MONEY_PURCHASE_RETIREMENT_PLAN_401A</li><li>PROFIT_SHARING_PLAN</li><li>MONEY_PURCHASE_PLAN</li><li>STOCK_BASKET_ACCOUNT</li><li>LIVING_TRUST</li><li>REVOCABLE_TRUST</li><li>IRREVOCABLE_TRUST</li><li>CHARITABLE_REMAINDER_TRUST</li><li>CHARITABLE_LEAD_TRUST</li><li>CHARITABLE_GIFT_ACCOUNT</li><li>SEP_IRA</li><li>UNIFORM_TRANSFER_TO_MINORS_ACT_UTMA</li><li>UNIFORM_GIFT_TO_MINORS_ACT_UGMA</li><li>EMPLOYEE_STOCK_OWNERSHIP_PLAN_ESOP</li><li>ADMINISTRATOR</li><li>EXECUTOR</li><li>PARTNERSHIP</li><li>PROPRIETORSHIP</li><li>CHURCH_ACCOUNT</li><li>INVESTMENT_CLUB</li><li>RESTRICTED_STOCK_AWARD</li><li>CASH_MANAGEMENT_ACCOUNT</li><li>EMPLOYEE_STOCK_PURCHASE_PLAN_ESPP</li><li>PERFORMANCE_PLAN</li><li>BROKERAGE_LINK_ACCOUNT</li><li>MONEY_MARKET_ACCOUNT</li><li>SUPERANNUATION</li><li>REGISTERED_RETIREMENT_SAVINGS_PLAN_RRSP</li><li>SPOUSAL_RETIREMENT_SAVINGS_PLAN_SRSP</li><li>DEFERRED_PROFIT_SHARING_PLAN_DPSP</li><li>NON_REGISTERED_SAVINGS_PLAN_NRSP</li><li>REGISTERED_EDUCATION_SAVINGS_PLAN_RESP</li><li>GROUP_RETIREMENT_SAVINGS_PLAN_GRSP</li><li>LOCKED_IN_RETIREMENT_SAVINGS_PLAN_LRSP</li><li>RESTRICTED_LOCKED_IN_SAVINGS_PLAN_RLSP</li><li>LOCKED_IN_RETIREMENT_ACCOUNT_LIRA</li><li>REGISTERED_PENSION_PLAN_RPP</li><li>TAX_FREE_SAVINGS_ACCOUNT_TFSA</li><li>LIFE_INCOME_FUND_LIF</li><li>REGISTERED_RETIREMENT_INCOME_FUND_RIF</li><li>SPOUSAL_RETIREMENT_INCOME_FUND_SRIF</li><li>LOCKED_IN_REGISTERED_INVESTMENT_FUND_LRIF</li><li>PRESCRIBED_REGISTERED_RETIREMENT_INCOME_FUND_PRIF</li><li>GUARANTEED_INVESTMENT_CERTIFICATES_GIC</li><li>REGISTERED_DISABILITY_SAVINGS_PLAN_RDSP</li><li>DEFINED_CONTRIBUTION_PLAN</li><li>DEFINED_BENEFIT_PLAN</li><li>EMPLOYEE_STOCK_OPTION_PLAN</li><li>NONQUALIFIED_DEFERRED_COMPENSATION_PLAN_409A</li><li>KEOGH_PLAN</li><li>EMPLOYEE_RETIREMENT_ACCOUNT_ROTH_401K</li><li>DEFERRED_CONTINGENT_CAPITAL_PLAN_DCCP</li><li>EMPLOYEE_BENEFIT_PLAN</li><li>EMPLOYEE_SAVINGS_PLAN</li><li>HEALTH_SAVINGS_ACCOUNT_HSA</li><li>COVERDELL_EDUCATION_SAVINGS_ACCOUNT_ESA</li><li>TESTAMENTARY_TRUST</li><li>ESTATE</li><li>GRANTOR_RETAINED_ANNUITY_TRUST_GRAT</li><li>ADVISORY_ACCOUNT</li><li>NON_PROFIT_ORGANIZATION_501C</li><li>HEALTH_REIMBURSEMENT_ARRANGEMENT_HRA</li><li>INDIVIDUAL_SAVINGS_ACCOUNT_ISA</li><li>CASH_ISA</li><li>STOCKS_AND_SHARES_ISA</li><li>INNOVATIVE_FINANCE_ISA</li><li>JUNIOR_ISA</li><li>EMPLOYEES_PROVIDENT_FUND_ORGANIZATION_EPFO</li><li>PUBLIC_PROVIDENT_FUND_PPF</li><li>EMPLOYEES_PENSION_SCHEME_EPS</li><li>NATIONAL_PENSION_SYSTEM_NPS</li><li>INDEXED_ANNUITY</li><li>ANNUITIZED_ANNUITY</li><li>VARIABLE_ANNUITY</li><li>ROTH_403B</li><li>SPOUSAL_IRA</li><li>SPOUSAL_ROTH_IRA</li><li>SARSEP_IRA</li><li>SUBSTANTIALLY_EQUAL_PERIODIC_PAYMENTS_SEPP</li><li>OFFSHORE_TRUST</li><li>IRREVOCABLE_LIFE_INSURANCE_TRUST</li><li>INTERNATIONAL_TRUST</li><li>LIFE_INTEREST_TRUST</li><li>EMPLOYEE_BENEFIT_TRUST</li><li>PRECIOUS_METAL_ACCOUNT</li><li>INVESTMENT_LOAN_ACCOUNT</li><li>GRANTOR_RETAINED_INCOME_TRUST</li><li>PENSION_PLAN</li><li>OTHER</li></ul><b>loan</b><ul><li>MORTGAGE</li><li>INSTALLMENT_LOAN</li><li>PERSONAL_LOAN</li><li>HOME_EQUITY_LINE_OF_CREDIT</li><li>LINE_OF_CREDIT</li><li>AUTO_LOAN</li><li>STUDENT_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>AUTO_INSURANCE</li><li>HEALTH_INSURANCE</li><li>HOME_INSURANCE</li><li>LIFE_INSURANCE</li><li>ANNUITY</li><li>TRAVEL_INSURANCE</li><li>INSURANCE</li></ul><b>realEstate</b><ul> <li>REAL_ESTATE</li></ul><b>reward</b><ul><li>REWARD_POINTS</li></ul><b>Manual Account Type</b><br><b>bank</b><ul><li>CHECKING</li><li>SAVINGS</li><li>CD</li><li>PREPAID</li></ul><b>credit</b><ul>  <li>CREDIT</li></ul><b>loan</b><ul>  <li>PERSONAL_LOAN</li><li>HOME_LOAN</li></ul><b>insurance</b><ul><li>INSURANCE</li><li>ANNUITY</li></ul><b>investment</b><ul><li>BROKERAGE_CASH</li></ul><br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br></ul>',
        readOnly: true,
      }),
    bankTransferCode: z
      .array(BankTransferCodeSchema)
      .exactOptional()
      .openapi({
        description:
          'Bank and branch identification information.<br><b>Aggregated / Manual</b>: Aggregated<br><b>Applicable containers</b>: bank, investment, loan<br><b>Endpoints</b>:<br><ul></ul>',
        readOnly: true,
      }),
    fullAccountNumber: z.string().exactOptional(),
    holder: z.array(AccountHolderSchema).exactOptional(),
    id: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    providerAccountId: z
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
          'The primary key of the provider account resource.<br><br><b>Aggregated / Manual</b>: Both <br><b>Applicable containers</b>: All containers<br>',
        readOnly: true,
      }),
    providerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '<b>Applicable containers</b>: reward, bank, creditCard, investment, loan, insurance, realEstate,  otherLiabilities<br>',
        readOnly: true,
      }),
  })
  .openapi({ title: 'VerifiedAccount', required: [] })
  .openapi('VerifiedAccount')

const VerifyTransactionCriteriaSchema = z
  .object({
    amount: z.float64(),
    baseType: z
      .enum(['CREDIT', 'DEBIT'])
      .exactOptional()
      .openapi({
        description:
          'Indicates if the transaction appears as a debit or a credit transaction in the account. <br><br><b>Applicable containers</b>: bank,creditCard,investment,insurance,loan<br><b>Applicable Values</b><br>',
      }),
    date: z.string(),
    dateVariance: z.string().exactOptional(),
    keyword: z.string().exactOptional(),
    matched: z
      .enum(['COMPLETE', 'NONE'])
      .exactOptional()
      .openapi({
        description:
          'Indicates if the criteria is matched or not. <br><b>Applicable Values</b><br>',
        readOnly: true,
      }),
    verifiedTransaction: z.array(TransactionSchema).exactOptional().openapi({ readOnly: true }),
  })
  .openapi({ required: ['amount', 'date'], title: 'VerifyTransactionCriteria' })
  .openapi('VerifyTransactionCriteria')

const VerifyAccountSchema = z
  .object({
    account: z.array(VerifiedAccountSchema).exactOptional(),
    transactionCriteria: z.array(VerifyTransactionCriteriaSchema).exactOptional(),
  })
  .openapi({ title: 'VerifyAccount', required: [] })
  .openapi('VerifyAccount')

const VerifyAccountRequestSchema = z
  .object({
    accountId: z
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
      .openapi({ type: 'integer', format: 'int64' }),
    container: z
      .enum([
        'bank',
        'creditCard',
        'investment',
        'insurance',
        'loan',
        'reward',
        'realEstate',
        'otherAssets',
        'otherLiabilities',
      ])
      .exactOptional(),
    transactionCriteria: z.array(VerifyTransactionCriteriaSchema),
  })
  .openapi({ required: ['transactionCriteria'], title: 'VerifyAccountRequest' })
  .openapi('VerifyAccountRequest')

const VerifyAccountResponseSchema = z
  .object({ verifyAccount: VerifyAccountSchema.exactOptional() })
  .openapi({ title: 'VerifyAccountResponse', required: [] })
  .openapi('VerifyAccountResponse')

const YodleeErrorSchema = z
  .object({
    errorCode: z.string().exactOptional(),
    errorMessage: z.string().exactOptional(),
    referenceCode: z.string().exactOptional(),
  })
  .openapi({ title: 'YodleeError', required: [] })
  .openapi('YodleeError')

export const getAccountsRoute = createRoute({
  method: 'get',
  path: '/accounts',
  tags: ['Accounts'],
  summary: 'Get Accounts',
  description:
    'The get accounts service provides information about accounts added by the user.<br>By default, this service returns information for active and to be closed accounts.<br>If requestId is provided, the accounts that are updated in the context of the requestId will be provided in the response.<br><br><b>Note:</b><br><li>fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.</li><li>fullAccountNumberList, PII (Personal Identifiable Information) and holder details are not available by default, as it is a premium feature that needs security approval. This will not be available for testing in Sandbox environment.</li>',
  operationId: 'getAllAccounts',
  request: {
    query: z.object({
      accountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated accountIds.',
            in: 'query',
            name: 'accountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      container: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'bank/creditCard/investment/insurance/loan/reward/realEstate/otherAssets/otherLiabilities',
            in: 'query',
            name: 'container',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'profile, holder, fullAccountNumber, fullAccountNumberList, paymentProfile, autoRefresh<br><b>Note:</b>fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
      providerAccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated providerAccountIds.',
            in: 'query',
            name: 'providerAccountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The unique identifier that returns contextual data',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'ACTIVE,INACTIVE,TO_BE_CLOSED,CLOSED',
            in: 'query',
            name: 'status',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: AccountResponseSchema } },
    },
    400: {
      description:
        'Y800 : Invalid value for status<br>Y800 : Invalid value for container<br>Y800 : Invalid value for providerAccountId<br>Y824 : The maximum number of accountIds permitted is 100',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const postAccountsRoute = createRoute({
  method: 'post',
  path: '/accounts',
  tags: ['Accounts'],
  summary: 'Add Manual Account',
  description:
    'The add account service is used to add manual accounts.<br>The response of add account service includes the account name , account number and Yodlee generated account id.<br>All manual accounts added will be included as part of networth calculation by default.<br>Add manual account support is available for bank, card, investment, insurance and loan container only.<br><br><b>Note:</b> <li>A real estate account addition is only supported for SYSTEM and MANUAL valuation type.</li>',
  operationId: 'createManualAccount',
  request: {
    body: {
      description: 'accountParam',
      content: { 'application/json': { schema: CreateAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: CreatedAccountResponseSchema } },
    },
    400: {
      description:
        'Y800 : Invalid value for accountParam<br>Y811 : Real Estate Property value already exists<br>Y862 : The provided address is invalid, or the valuation is not available<br>Y869 : Multiple matches found. Provide the complete address or call the POST /accounts/evaluateAddress API to retrieve the list of matched addresses<br>',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const postAccountsEvaluateAddressRoute = createRoute({
  method: 'post',
  path: '/accounts/evaluateAddress',
  tags: ['Accounts'],
  summary: 'Evaluate Address',
  description:
    'Use this service to validate the address before adding the real estate account.<br>If the address is valid, the service will return the complete address information.<br>The response will contain multiple addresses if the user-provided input matches with multiple entries in the vendor database.<br>In the case of multiple matches, the user can select the appropriate address from the list and then invoke the add account service with the complete address.<br><br><b>Note:</b> <li>Yodlee recommends to use this service before adding the real estate account to avoid failures.</li>',
  operationId: 'evaluateAddress',
  request: {
    body: {
      description: 'addressParam',
      content: { 'application/json': { schema: EvaluateAddressRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: EvaluateAddressResponseSchema } },
    },
    400: {
      description:
        'Y806 : Invalid input<br>Y800 : Invalid value for zip<br>Y812 : Required field/value - address missing in the request<br>Y812 : Required field/value - street missing in the request<br>Y812 : Required field/value - state & city / zip missing in the request',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getAccountsHistoricalBalancesRoute = createRoute({
  method: 'get',
  path: '/accounts/historicalBalances',
  tags: ['Accounts'],
  summary: 'Get Historical Balances',
  description:
    'The historical balances service is used to retrieve the historical balances for an account or a user.<br>Historical balances are daily (D), weekly (W), and monthly (M). <br>The interval input should be passed as D, W, and M to retrieve the desired historical balances. The default interval is daily (D). <br>When no account id is provided, historical balances of the accounts that are active, to be closed, and closed are provided in the response. <br>If the fromDate and toDate are not passed, the last 90 days of data will be provided. <br>The fromDate and toDate should be passed in the YYYY-MM-DD format. <br>The date field in the response denotes the date for which the balance is requested.<br>includeCF needs to be sent as true if the customer wants to return carried forward balances for a date when the data is not available. <br>asofDate field in the response denotes the date as of which the balance was updated for that account.<br>When there is no balance available for a requested date and if includeCF is sent as true, the previous date for which the balance is available is provided in the response. <br>When there is no previous balance available, no data will be sent.',
  operationId: 'getHistoricalBalances',
  request: {
    query: z.object({
      accountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'accountId',
            in: 'query',
            name: 'accountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fromDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'from date for balance retrieval (YYYY-MM-DD)',
            in: 'query',
            name: 'fromDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeCF: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Consider carry forward logic for missing balances',
            in: 'query',
            name: 'includeCF',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      interval: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'D-daily, W-weekly or M-monthly',
            in: 'query',
            name: 'interval',
            schema: { type: 'string' },
            required: false,
          },
        }),
      skip: z
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
            allowEmptyValue: false,
            description: 'skip (Min 0)',
            in: 'query',
            name: 'skip',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      toDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'toDate for balance retrieval (YYYY-MM-DD)',
            in: 'query',
            name: 'toDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      top: z
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
            allowEmptyValue: false,
            description: 'top (Max 500)',
            in: 'query',
            name: 'top',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json;charset=UTF-8': { schema: AccountHistoricalBalancesResponseSchema },
      },
    },
    400: {
      description:
        'Y800 : Invalid value for accountId<br>Y800 : Invalid value for fromDate<br>Y800 : Invalid value for toDate<br>Y809 : Invalid date range<br>Y800 : Invalid value for interval<br>Y802 : Future date not allowed',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getAccountsAccountIdRoute = createRoute({
  method: 'get',
  path: '/accounts/{accountId}',
  tags: ['Accounts'],
  summary: 'Get Account Details',
  description:
    'The get account details service provides detailed information of an account.<br><br><b>Note:</b><li>fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.</li>',
  operationId: 'getAccount',
  request: {
    params: z.object({
      accountId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'accountId',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'profile, holder, fullAccountNumber, fullAccountNumberList, paymentProfile, autoRefresh<br><b>Note:</b>fullAccountNumber is deprecated and is replaced with fullAccountNumberList in include parameter and response.',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: AccountResponseSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const putAccountsAccountIdRoute = createRoute({
  method: 'put',
  path: '/accounts/{accountId}',
  tags: ['Accounts'],
  summary: 'Update Account',
  description:
    'The update account service is used to update manual and aggregated accounts.<br>The HTTP response code is 204 (Success without content).<br>Update manual account support is available for bank, card, investment, insurance, loan, otherAssets, otherLiabilities and realEstate containers only.<br><br><b>Note:</b><li> A real estate account update is only supported for SYSTEM and MANUAL valuation type.</li><li> Attribute <b>isEbillEnrolled</b> is deprecated as it is applicable for bill accounts only.</li>',
  operationId: 'updateAccount',
  request: {
    params: z.object({
      accountId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'accountId',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'accountRequest',
      content: { 'application/json': { schema: UpdateAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK', content: {} },
    400: {
      description:
        'Y800 : Invalid value for accountId<br>Y800 : Invalid value for updateParam<br>Y862 : The provided address is invalid, or the valuation is not available<br>Y868 : No action is allowed, as the data is being migrated to the Open Banking provider<br>Y869 : Multiple matches found. Provide the complete address or call the POST /accounts/evaluateAddress API to retrieve the list of matched addresses<br>',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const deleteAccountsAccountIdRoute = createRoute({
  method: 'delete',
  path: '/accounts/{accountId}',
  tags: ['Accounts'],
  summary: 'Delete Account',
  description:
    'The delete account service allows an account to be deleted.<br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br>',
  operationId: 'deleteAccount',
  request: {
    params: z.object({
      accountId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'accountId',
            in: 'path',
            name: 'accountId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'OK', content: {} },
    400: {
      description:
        'Y800 : Invalid value for accountId<br>Y807 : Resource not found<br>Y868 : No action is allowed, as the data is being migrated to the Open Banking provider<br>',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getAuthApiKeyRoute = createRoute({
  method: 'get',
  path: '/auth/apiKey',
  tags: ['Auth'],
  summary: 'Get API Keys',
  description:
    'This endpoint provides the list of API keys that exist for a customer.<br>You can use one of the following authorization methods to access this API:<br><ol><li>cobsession</li><li>JWT token</li></ol><b>Notes:</b><li>This service is not available in developer sandbox environment and will be made available for testing in your dedicated environment. ',
  operationId: 'getApiKeys',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: ApiKeyResponseSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const postAuthApiKeyRoute = createRoute({
  method: 'post',
  path: '/auth/apiKey',
  tags: ['Auth'],
  summary: 'Generate API Key',
  description:
    'This endpoint is used to generate an API key. The RSA public key you provide should be in 2048 bit PKCS#8 encoded format. <br>A public key is a mandatory input for generating the API key.<br/>The public key should be a unique key. The apiKeyId you get in the response is what you should use to generate the JWT token.<br> You can use one of the following authorization methods to access<br/>this API:<br><ol><li>cobsession</li><li>JWT token</li></ol> Alternatively, you can use base 64 encoded cobrandLogin and cobrandPassword in the Authorization header (Format: Authorization: Basic <encoded value of cobrandLogin: cobrandPassword>)<br><br><b>Note:</b><br><li>This service is not available in developer sandbox environment and will be made available for testing in your dedicated environment. The content type has to be passed as application/json for the body parameter.</li>',
  operationId: 'generateApiKey',
  request: {
    body: {
      description: 'apiKeyRequest',
      content: { 'application/json': { schema: ApiKeyRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: ApiKeyResponseSchema } },
    },
    400: {
      description:
        'Y800 : Invalid value for RS512 publicKey<br>Y806 : Invalid input<br>Y824 : The maximum number of apiKey permitted is 5<br>Y811 : publicKey value already exists',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const deleteAuthApiKeyKeyRoute = createRoute({
  method: 'delete',
  path: '/auth/apiKey/{key}',
  tags: ['Auth'],
  summary: 'Delete API Key',
  description:
    'This endpoint allows an existing API key to be deleted.<br>You can use one of the following authorization methods to access this API:<br><ol><li>cobsession</li><li>JWT token</li></ol> <b>Notes:</b> <li>This service is not available in developer sandbox environment and will be made availablefor testing in your dedicated environment. ',
  operationId: 'deleteApiKey',
  request: {
    params: z.object({
      key: z
        .string()
        .openapi({
          param: {
            description: 'key',
            in: 'path',
            name: 'key',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: { description: 'OK', content: {} },
    204: { description: 'No Content', content: {} },
    400: {
      description: 'Y807 : Resource not found<br>Y806 : Invalid input',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const postAuthTokenRoute = createRoute({
  method: 'post',
  path: '/auth/token',
  tags: ['Auth'],
  summary: 'Generate Access Token',
  description:
    "<b>Generate Access Token using client credential authentication.</b><br>This service returns access tokens required to access Yodlee 1.1 APIs. These tokens are the simplest and easiest of several alternatives for authenticating with Yodlee servers.<br>The most commonly used services obtain data specific to an end user (your customer). For these services, you need a <b>user access token</b>. These are simply tokens created with the user name parameter (<b>loginName</b>) set to the id of your end user.  <i><br><br><b>Note:</b> You determine this id and you must ensure it's unique among all your customers.</i> <br><br>Each token issued has an associated user. The token passed in the http headers explicitly names the user referenced in that API call.<br><br>Some of the APIs do administrative work, and don't reference an end user. <br/>One example of administrative work is key management. Another example is registering a new user explicitly, with <b>POST /user/register</b> call or subscribe to webhook, with <b>POST /config/notifications/events/{eventName}</b>. <br/>To invoke these, you need an <b>admin access token</b>. Create this by passing in your admin user login name in place of a regular user name.<br><br>This service also allows for simplified registration of new users. Any time you pass in a user name not already in use, the system will automatically implicitly create a new user for you. <br>This user will naturally have very few associated details. You can later provide additional user information by calling the <b>PUT user/register service</b>.<br><br><b>Notes:</b><li>The content type has to be passed as application/x-www-form-urlencoded.<li>Upgrading to client credential authentication requires infrastructure reconfiguration. <li>Customers wishing to switch from another authentication scheme to client credential authentication, please contact Yodlee Client Services.</li>",
  operationId: 'generateAccessToken',
  responses: {
    201: {
      description: 'OK',
      content: {
        'application/json;charset=UTF-8': { schema: ClientCredentialTokenResponseSchema },
      },
    },
    400: {
      description:
        'Y800 : Invalid value for loginName<br>Y806 : Invalid input<br>Y801 : Invalid length for loginName<br>Y303 : clientId or secret is missing<br>Y301 : Invalid clientId or secret<br>Y305 : Access token can be issued only for pre-registered users<br>Y004 : Inactive user<br>Y901 : Service not supported<br>',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: {
      description:
        'Y016 : loginName header missing<br>Y015 : Unauthorized User<br>Y016 : Api-Version header missing<br>Y020 : Invalid token in authorization header<br>Y027 : Unsupported authentication type',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    404: { description: 'Not Found', content: {} },
  },
})

export const deleteAuthTokenRoute = createRoute({
  method: 'delete',
  path: '/auth/token',
  tags: ['Auth'],
  summary: 'Delete Token',
  description:
    'This endpoint revokes the token passed in the Authorization header. This service is applicable for JWT-based (and all API key-based) authentication and also client credential (clientId and secret) based authentication. This service does not return a response body. The HTTP response code is 204 (success with no content). <br>Tokens generally have limited lifetime of up to 30 minutes. You will call this service when you finish working with one user, and you want to delete the valid token rather than simply letting it expire.<br><br><b>Note:</b> <li>Revoking an access token (either type, admin or a user token) can take up to 2 minutes, as the tokens are stored on a distributed system.<br/>',
  operationId: 'deleteToken',
  responses: {
    204: { description: 'No Content', content: {} },
    401: {
      description:
        'Y020 : Invalid token in authorization header<br>Y023 : Token has expired<br>Y016 : Api-Version header missing<br>Y015 : Unauthorized User<br>Y027 : Unsupported authentication type<br>Y007 : Authorization header missing<br>Y020 : Invalid token in authorization header',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    404: { description: 'Not Found', content: {} },
  },
})

export const getCobrandConfigNotificationsEventsRoute = createRoute({
  method: 'get',
  path: '/cobrand/config/notifications/events',
  tags: ['Cobrand'],
  summary: 'Get Subscribed Events',
  description:
    '<b>Refer GET /configs/notifications/events.</b><br>The get events service provides the list of events for which consumers subscribed <br>to receive notifications. <br>',
  operationId: 'getSubscribedEvents',
  request: {
    query: z.object({
      eventName: z
        .enum(['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'])
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'eventName',
            in: 'query',
            name: 'eventName',
            schema: { enum: ['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: CobrandNotificationResponseSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  deprecated: true,
})

export const putCobrandConfigNotificationsEventsEventNameRoute = createRoute({
  method: 'put',
  path: '/cobrand/config/notifications/events/{eventName}',
  tags: ['Cobrand'],
  summary: 'Update Subscription',
  description:
    '<b>Refer PUT /configs/notifications/events/{eventName}.</b><br>The update events service is used to update the callback URL.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br><b>Note:</b> The content type has to be passed as application/json for the body parameter. <br>',
  operationId: 'updateSubscribedEvent',
  request: {
    params: z.object({
      eventName: z
        .enum(['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'])
        .openapi({
          param: {
            description: 'eventName',
            in: 'path',
            name: 'eventName',
            required: true,
            schema: { enum: ['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'], type: 'string' },
          },
        }),
    }),
    body: {
      description: 'eventRequest',
      content: { 'application/json': { schema: UpdateCobrandNotificationEventRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK', content: {} },
    400: {
      description:
        'Y803 : eventName required<br>Y803 : callbackUrl required<br>Y800 : Invalid value for callbackUrl',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  deprecated: true,
})

export const postCobrandConfigNotificationsEventsEventNameRoute = createRoute({
  method: 'post',
  path: '/cobrand/config/notifications/events/{eventName}',
  tags: ['Cobrand'],
  summary: 'Subscribe Event',
  description:
    '<b>Refer POST /configs/notifications/events/{eventName}.</b><br>The subscribe events service is used to subscribe to an event for receiving notifications.<br>The callback URL, where the notification will be posted should be provided to this service.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br>Customers can subscribe to REFRESH,DATA_UPDATES and AUTO_REFRESH_UPDATES event.<br><br><b>Notes</b>:<br>This service is not available in developer sandbox/test environment and will be made available for testing in your dedicated environment, once the contract is signed.<br>The content type has to be passed as application/json for the body parameter.<br>',
  operationId: 'createSubscriptionEvent',
  request: {
    params: z.object({
      eventName: z
        .enum(['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'])
        .openapi({
          param: {
            description: 'eventName',
            in: 'path',
            name: 'eventName',
            required: true,
            schema: { enum: ['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'], type: 'string' },
          },
        }),
    }),
    body: {
      description: 'eventRequest',
      content: { 'application/json': { schema: CreateCobrandNotificationEventRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'OK', content: {} },
    400: {
      description:
        'Y803 : eventName required<br>Y803 : callbackUrl required<br>Y800 : Invalid value for callbackUrl',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  deprecated: true,
})

export const deleteCobrandConfigNotificationsEventsEventNameRoute = createRoute({
  method: 'delete',
  path: '/cobrand/config/notifications/events/{eventName}',
  tags: ['Cobrand'],
  summary: 'Delete Subscription',
  description:
    '<b>Refer DELETE /configs/notifications/events/{eventName}.</b><br>The delete events service is used to unsubscribe from an events service.<br>',
  operationId: 'deleteSubscribedEvent',
  request: {
    params: z.object({
      eventName: z
        .enum(['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'])
        .openapi({
          param: {
            description: 'eventName',
            in: 'path',
            name: 'eventName',
            required: true,
            schema: { enum: ['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'OK', content: {} },
    400: {
      description: 'Y803 : eventName required',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  deprecated: true,
})

export const postCobrandLoginRoute = createRoute({
  method: 'post',
  path: '/cobrand/login',
  tags: ['Cobrand'],
  summary: 'Cobrand Login',
  description:
    'The cobrand login service authenticates a cobrand.<br>Cobrand session in the response includes the cobrand session token (cobSession) <br>which is used in subsequent API calls like registering or signing in the user. <br>The idle timeout for a cobrand session is 2 hours and the absolute timeout is 24 hours. This service can be <br>invoked to create a new cobrand session token. <br><b>Note:</b> This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>The content type has to be passed as application/json for the body parameter. <br>',
  operationId: 'cobrandLogin',
  request: {
    body: {
      description: 'cobrandLoginRequest',
      content: { 'application/json': { schema: CobrandLoginRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: CobrandLoginResponseSchema } },
    },
    400: {
      description: 'Y800 : Invalid value for cobrandParam',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: {
      description:
        'Y003 : Account is locked, contact Yodlee customer care<br>Y001 : User name and password required',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    404: { description: 'Not Found', content: {} },
  },
})

export const postCobrandLogoutRoute = createRoute({
  method: 'post',
  path: '/cobrand/logout',
  tags: ['Cobrand'],
  summary: 'Cobrand Logout',
  description:
    'The cobrand logout service is used to log out the cobrand.<br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br><b>Note:</b> This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>',
  operationId: 'cobrandLogout',
  responses: {
    204: { description: 'Logout successful', content: {} },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getCobrandPublicKeyRoute = createRoute({
  method: 'get',
  path: '/cobrand/publicKey',
  tags: ['Cobrand'],
  summary: 'Get Public Key',
  description:
    '<b>Refer GET /configs/publicKey.</b><br>The get public key service provides the customer the public key that should be used to encrypt the user credentials before sending it to Yodlee.<br>This endpoint is useful only for PKI enabled.<br>',
  operationId: 'getPublicKey',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: CobrandPublicKeyResponseSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  deprecated: true,
})

export const getConfigsNotificationsEventsRoute = createRoute({
  method: 'get',
  path: '/configs/notifications/events',
  tags: ['Configs'],
  summary: 'Get Subscribed Notification Events',
  description:
    'The get events service provides the list of events for which consumers subscribed to receive notifications. <br>',
  operationId: 'getSubscribedNotificationEvents',
  request: {
    query: z.object({
      eventName: z
        .enum(['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'])
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'eventName',
            in: 'query',
            name: 'eventName',
            schema: { enum: ['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'], type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: ConfigsNotificationResponseSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const putConfigsNotificationsEventsEventNameRoute = createRoute({
  method: 'put',
  path: '/configs/notifications/events/{eventName}',
  tags: ['Configs'],
  summary: 'Update Notification Subscription',
  description:
    'The update events service is used to update the callback URL.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br><br><b>Note:</b> <li>The content type has to be passed as application/json for the body parameter. <br>',
  operationId: 'updateSubscribedNotificationEvent',
  request: {
    params: z.object({
      eventName: z
        .enum(['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'])
        .openapi({
          param: {
            description: 'eventName',
            in: 'path',
            name: 'eventName',
            required: true,
            schema: { enum: ['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'], type: 'string' },
          },
        }),
    }),
    body: {
      description: 'eventRequest',
      content: { 'application/json': { schema: UpdateConfigsNotificationEventRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK', content: {} },
    400: {
      description:
        'Y803 : eventName required<br>Y803 : callbackUrl required<br>Y800 : Invalid value for callbackUrl',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const postConfigsNotificationsEventsEventNameRoute = createRoute({
  method: 'post',
  path: '/configs/notifications/events/{eventName}',
  tags: ['Configs'],
  summary: 'Subscribe For Notification Event',
  description:
    'The subscribe events service is used to subscribe to an event for receiving notifications.<br>The callback URL, where the notification will be posted should be provided to this service.<br>If the callback URL is invalid or inaccessible, the subscription will be unsuccessful, and an error will be thrown.<br>Customers can subscribe to REFRESH,DATA_UPDATES and AUTO_REFRESH_UPDATES event.<br><br><b>Notes:</b><li>This service is not available in developer sandbox/test environment and will be made available for testing in your dedicated environment, once the contract is signed.<li>The content type has to be passed as application/json for the body parameter.</li>',
  operationId: 'createSubscriptionNotificationEvent',
  request: {
    params: z.object({
      eventName: z
        .enum(['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'])
        .openapi({
          param: {
            description: 'eventName',
            in: 'path',
            name: 'eventName',
            required: true,
            schema: { enum: ['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'], type: 'string' },
          },
        }),
    }),
    body: {
      description: 'eventRequest',
      content: { 'application/json': { schema: CreateConfigsNotificationEventRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'OK', content: {} },
    400: {
      description:
        'Y803 : eventName required<br>Y803 : callbackUrl required<br>Y800 : Invalid value for callbackUrl',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const deleteConfigsNotificationsEventsEventNameRoute = createRoute({
  method: 'delete',
  path: '/configs/notifications/events/{eventName}',
  tags: ['Configs'],
  summary: 'Delete Notification Subscription',
  description: 'The delete events service is used to unsubscribe from an events service.<br>',
  operationId: 'deleteSubscribedNotificationEvent',
  request: {
    params: z.object({
      eventName: z
        .enum(['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'])
        .openapi({
          param: {
            description: 'eventName',
            in: 'path',
            name: 'eventName',
            required: true,
            schema: { enum: ['REFRESH', 'DATA_UPDATES', 'AUTO_REFRESH_UPDATES'], type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'OK', content: {} },
    400: {
      description: 'Y803 : eventName required',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getConfigsPublicKeyRoute = createRoute({
  method: 'get',
  path: '/configs/publicKey',
  tags: ['Configs'],
  summary: 'Get Public Key',
  description:
    'The get public key service provides the public key that should be used to encrypt user credentials while invoking POST /providerAccounts and PUT /providerAccounts endpoints.<br>This service will only work if the PKI (public key infrastructure) feature is enabled for the customer.<br><br><b>Note:</b><li> The key in the response is a string in PEM format.</li><li>This endpoint is not available in the Sandbox environment and it is useful only if the PKI feature is enabled.</li>',
  operationId: 'getPublicEncryptionKey',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: ConfigsPublicKeyResponseSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getDataExtractsEventsRoute = createRoute({
  method: 'get',
  path: '/dataExtracts/events',
  tags: ['DataExtracts'],
  summary: 'Get Events',
  description:
    'The get extracts events service is used to learn about occurrences of data extract related events. This service currently supports only the DATA_UPDATES event.<br>Passing the event name as DATA_UPDATES provides information about users for whom data has been modified in the system for the specified time range. To learn more, please refer to the <a href="https://developer.yodlee.com/docs/api/1.1/DataExtracts">dataExtracts</a> page.<br>You can retrieve data in increments of no more than 60 minutes over the period of the last 7 days from today\'s date.<br>This service is only invoked with either admin access token or a cobrand session.<br>',
  operationId: 'getDataExtractsEvents',
  request: {
    query: z.object({
      eventName: z
        .string()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Event Name',
            in: 'query',
            name: 'eventName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      fromDate: z
        .string()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'From DateTime (YYYY-MM-DDThh:mm:ssZ)',
            in: 'query',
            name: 'fromDate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      toDate: z
        .string()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'To DateTime (YYYY-MM-DDThh:mm:ssZ)',
            in: 'query',
            name: 'toDate',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: DataExtractsEventResponseSchema } },
    },
    400: {
      description:
        'Y800 : Invalid value for fromDate.fromDate cannot be greater than current time<br>Y800 : Invalid value for toDate.toDate cannot be greater than current time<br>Y800 : Invalid value for fromDate or toDate.fromDate and toDate cannot be older than 7 days<br>Y800 : Invalid value for fromDate.fromDate cannot be greater than toDate.',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getDataExtractsUserDataRoute = createRoute({
  method: 'get',
  path: '/dataExtracts/userData',
  tags: ['DataExtracts'],
  summary: 'Get userData',
  description:
    'The get user data service is used to get a user\'s modified data for a particular period of time for accounts, transactions, holdings, and provider account information.<br>The time difference between fromDate and toDate fields cannot be more than 60 minutes.<br>By default, pagination is available for the transaction entity in this API. In the first response, the API will retrieve 500 transactions along with other data. The response header will provide a link to retrieve the next set of transactions.<br>In the response body of the first API response, totalTransactionsCount indicates the total number of transactions the API will retrieve for the user.<br>This service is only invoked with either admin access token or a cobrand session.<br/>Refer to <a href="https://developer.yodlee.com/docs/api/1.1/DataExtracts">dataExtracts</a> page for more information.<br><br><b>Note:</b><li>This service supports the localization feature and accepts locale as a header parameter.</li>',
  operationId: 'getDataExtractsUserData',
  request: {
    query: z.object({
      fromDate: z
        .string()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'From DateTime (YYYY-MM-DDThh:mm:ssZ)',
            in: 'query',
            name: 'fromDate',
            required: true,
            schema: { type: 'string' },
          },
        }),
      loginName: z
        .string()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Login Name',
            in: 'query',
            name: 'loginName',
            required: true,
            schema: { type: 'string' },
          },
        }),
      toDate: z
        .string()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'To DateTime (YYYY-MM-DDThh:mm:ssZ)',
            in: 'query',
            name: 'toDate',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: DataExtractsUserDataResponseSchema } },
    },
    400: {
      description:
        'Y800 : Invalid value for eventName<br>Y821 : Data update event not supported<br>Y800 : Invalid value for fromDate.fromDate cannot be greater than current time<br>Y800 : Invalid value for toDate.toDate cannot be greater than current time<br>.Y800 : Invalid value for fromDate or toDate.fromDate and toDate cannot be older than 7 days<br>Y800 : Invalid value for fromDate.fromDate can not be greater than toDate<br>Y800 : Invalid value for loginName',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getDerivedHoldingSummaryRoute = createRoute({
  method: 'get',
  path: '/derived/holdingSummary',
  tags: ['Derived'],
  summary: 'Get Holding Summary',
  description:
    'The get holding summary service is used to get the summary of asset classifications for the user.<br>By default, accounts with status as ACTIVE and TO BE CLOSED will be considered.<br>If the include parameter value is passed as details then a summary with holdings and account information is returned.<br>',
  operationId: 'getHoldingSummary',
  request: {
    query: z.object({
      accountIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated accountIds',
            in: 'query',
            name: 'accountIds',
            schema: { type: 'string' },
            required: false,
          },
        }),
      classificationType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'e.g. Country, Sector, etc.',
            in: 'query',
            name: 'classificationType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'details',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json;charset=UTF-8': { schema: DerivedHoldingSummaryResponseSchema },
      },
    },
    400: {
      description:
        'Y800 : Invalid value for classificationType<br>Y814 : Exchange rate not available for currency<br>Y824 : The maximum number of accountIds permitted is 100<br>',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getDerivedNetworthRoute = createRoute({
  method: 'get',
  path: '/derived/networth',
  tags: ['Derived'],
  summary: 'Get Networth Summary',
  description:
    'The get networth service is used to get the networth for the user.<br>If the include parameter value is passed as details then networth with historical balances is returned. <br>',
  operationId: 'getNetworth',
  request: {
    query: z.object({
      accountIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'comma separated accountIds',
            in: 'query',
            name: 'accountIds',
            schema: { type: 'string' },
            required: false,
          },
        }),
      container: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'bank/creditCard/investment/insurance/loan/realEstate/otherAssets/otherLiabilities',
            in: 'query',
            name: 'container',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fromDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'from date for balance retrieval (YYYY-MM-DD)',
            in: 'query',
            name: 'fromDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'details',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
      interval: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'D-daily, W-weekly or M-monthly',
            in: 'query',
            name: 'interval',
            schema: { type: 'string' },
            required: false,
          },
        }),
      skip: z
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
            allowEmptyValue: false,
            description: 'skip (Min 0)',
            in: 'query',
            name: 'skip',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      toDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'toDate for balance retrieval (YYYY-MM-DD)',
            in: 'query',
            name: 'toDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      top: z
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
            allowEmptyValue: false,
            description: 'top (Max 500)',
            in: 'query',
            name: 'top',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: DerivedNetworthResponseSchema } },
    },
    400: {
      description:
        'Y800 : Invalid value for accountIds<br>Y800 : Invalid value for fromDate<br>Y800 : Invalid value for toDate<br>Y809 : Invalid date range<br>Y800 : Invalid value for interval<br>Y802 : Future date not allowed<br>Y814 : Exchange rate not available for currency<br>Y800 : Invalid value for container',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getDerivedTransactionSummaryRoute = createRoute({
  method: 'get',
  path: '/derived/transactionSummary',
  tags: ['Derived'],
  summary: 'Get Transaction Summary',
  description:
    "The transaction summary service provides the summary values of transactions for the given date range by category type, high-level categories, or system-defined categories.<br><br>Yodlee has the transaction data stored for a day, month, year and week per category as per the availability of user's data. If the include parameter value is passed as details, then summary details will be returned depending on the interval passed-monthly is the default.<br><br><b>Notes:</b><ol> <li> Details can be requested for only one system-defined category<li>Passing categoryType is mandatory except when the groupBy value is CATEGORY_TYPE<li>Dates will not be respected for monthly, yearly, and weekly details<li>When monthly details are requested, only the fromDate and toDate month will be respected<li>When yearly details are requested, only the fromDate and toDate year will be respected<li>For weekly data points, details will be provided for every Sunday date available within the fromDate and toDate<li>This service supports the localization feature and accepts locale as a header parameter</li></ol>",
  operationId: 'getTransactionSummary',
  request: {
    query: z.object({
      accountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'comma separated account Ids',
            in: 'query',
            name: 'accountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      categoryId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'comma separated categoryIds',
            in: 'query',
            name: 'categoryId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      categoryType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'INCOME, EXPENSE, TRANSFER, UNCATEGORIZE or DEFERRED_COMPENSATION',
            in: 'query',
            name: 'categoryType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fromDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'YYYY-MM-DD format',
            in: 'query',
            name: 'fromDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      groupBy: z
        .string()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'CATEGORY_TYPE, HIGH_LEVEL_CATEGORY or CATEGORY',
            in: 'query',
            name: 'groupBy',
            required: true,
            schema: { type: 'string' },
          },
        }),
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'details',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
      includeUserCategory: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'TRUE/FALSE',
            in: 'query',
            name: 'includeUserCategory',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      interval: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'D-daily, W-weekly, M-mothly or Y-yearly',
            in: 'query',
            name: 'interval',
            schema: { type: 'string' },
            required: false,
          },
        }),
      toDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'YYYY-MM-DD format',
            in: 'query',
            name: 'toDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json;charset=UTF-8': { schema: DerivedTransactionSummaryResponseSchema },
      },
    },
    400: {
      description:
        "Y010 : Invalid session<br>Y800 : Invalid value for accountId<br>Y800 : Invalid value for groupBy<br>Y803 : groupBy required<br>Y803 : categoryType required<br>Y800 : Invalid value for categoryId<br>Y800 : Invalid value for fromDate<br>Y800 : Invalid value for toDate<br>Y800 : Invalid value for fromDate or toDate<br>Y814 : Exchange rate not available for currency<br>Y815 : Cannot apply filter on categoryId if groupBy value is CATEGORY_TYPE<br>Y816 : User-defined category details can only be requested for one system categoryId with groupBy='CATEGORY'<br>Y824 : The maximum number of accountIds permitted is 100<br>Y824 : The maximum number of categoryIds permitted is 100<br>Y824 : The maximum number of categoryTypes permitted is 100",
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getDocumentsRoute = createRoute({
  method: 'get',
  path: '/documents',
  tags: ['Documents'],
  summary: 'Get Documents',
  description:
    'The get documents service allows customers to search or retrieve metadata related to documents. <br>The API returns the document as per the input parameters passed. If no date range is provided then all downloaded documents will be retrieved. Details of deleted documents or documents associated to closed providerAccount will not be returned. <br>This API is a premium service which requires subscription in advance to use.  Please contact Yodlee Client Services for more information. <br>',
  operationId: 'getDocuments',
  request: {
    query: z.object({
      Keyword: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The string used to search a document by its name.',
            in: 'query',
            name: 'Keyword',
            schema: { type: 'string' },
            required: false,
          },
        }),
      accountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'The unique identifier of an account. Retrieve documents for a given accountId.',
            in: 'query',
            name: 'accountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      docType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Accepts only one of the following valid document types: STMT, TAX, and EBILL.',
            in: 'query',
            name: 'docType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fromDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The date from which documents have to be retrieved.',
            in: 'query',
            name: 'fromDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      toDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The date to which documents have to be retrieved.',
            in: 'query',
            name: 'toDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: DocumentResponseSchema } },
    },
    400: {
      description:
        'Y800 : Invalid value for accountId<br>Y800 : Invalid value for fromDate<br>Y800 : Invalid value for toDate<br>Y800 : Invalid value for docType',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getDocumentsDocumentIdRoute = createRoute({
  method: 'get',
  path: '/documents/{documentId}',
  tags: ['Documents'],
  summary: 'Download a Document',
  description:
    'The get document details service allows consumers to download a document. The document is provided in base64.<br>This API is a premium service which requires subscription in advance to use.  Please contact Yodlee Client Services for more information. <br>',
  operationId: 'downloadDocument',
  request: {
    params: z.object({
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'documentId',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: DocumentDownloadResponseSchema } },
    },
    400: {
      description: 'Y800 : Invalid value for documentId',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const deleteDocumentsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/documents/{documentId}',
  tags: ['Documents'],
  summary: 'Delete Document',
  description:
    'The delete document service allows the consumer to delete a document. The deleted document will not be returned in the get documents API. The HTTP response code is 204 (success without content).<br>Documents can be deleted only if the document related dataset attributes are subscribed.<br>',
  operationId: 'deleteDocument',
  request: {
    params: z.object({
      documentId: z
        .string()
        .openapi({
          param: {
            description: 'documentId',
            in: 'path',
            name: 'documentId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'OK', content: {} },
    400: {
      description:
        'Y800 : Invalid value for documentId<br>Y868 : No action is allowed, as the data is being migrated to the Open Banking provider<br>',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getHoldingsRoute = createRoute({
  method: 'get',
  path: '/holdings',
  tags: ['Holdings'],
  summary: 'Get Holdings',
  description:
    'The get holdings service is used to get the list of holdings of a user.<br>Supported holding types can be employeeStockOption, moneyMarketFund, bond, etc. and is obtained using get holding type list service. <br>Asset classifications for the holdings need to be requested through the "include" parameter.<br>Asset classification information for holdings are not available by default, as it is a premium feature.<br>',
  operationId: 'getHoldings',
  request: {
    query: z.object({
      accountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated accountId',
            in: 'query',
            name: 'accountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      'assetClassification.classificationType': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'e.g. Country, Sector, etc.',
            in: 'query',
            name: 'assetClassification.classificationType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      classificationValue: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'e.g. US',
            in: 'query',
            name: 'classificationValue',
            schema: { type: 'string' },
            required: false,
          },
        }),
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'assetClassification',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
      providerAccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'providerAccountId',
            in: 'query',
            name: 'providerAccountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: HoldingResponseSchema } },
    },
    400: {
      description:
        'Y800 : Invalid value for accountId<br>Y800 : Invalid value for providerAccountId<br>Y800 : Invalid value for include<br>Y800 : Invalid value for classificationType<br>Y800 : Invalid value for classificationValue<br>Y800 : Invalid value for include<br>Y400 : classificationType mismatch<br>Y400 : classificationValue mismatch<br>Y824 : The maximum number of accountIds permitted is 100',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getHoldingsAssetClassificationListRoute = createRoute({
  method: 'get',
  path: '/holdings/assetClassificationList',
  tags: ['Holdings'],
  summary: 'Get Asset Classification List',
  description:
    'The get asset classifications list service is used to get the supported asset classifications. <br>The response includes different classification types like assetClass, country, sector, style, etc. and the values corresponding to each type.<br>',
  operationId: 'getAssetClassificationList',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json;charset=UTF-8': { schema: HoldingAssetClassificationListResponseSchema },
      },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getHoldingsHoldingTypeListRoute = createRoute({
  method: 'get',
  path: '/holdings/holdingTypeList',
  tags: ['Holdings'],
  summary: 'Get Holding Type List',
  description:
    'The get holding types list service is used to get the supported holding types.<br>The response includes different holding types such as future, moneyMarketFund, stock, etc. and it returns the supported holding types <br>',
  operationId: 'getHoldingTypeList',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: HoldingTypeListResponseSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getHoldingsSecuritiesRoute = createRoute({
  method: 'get',
  path: '/holdings/securities',
  tags: ['Holdings'],
  summary: 'Get Security Details',
  description:
    'The get security details service is used to get all the security information for the holdings<br>',
  operationId: 'getSecurities',
  request: {
    query: z.object({
      holdingId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated holdingId',
            in: 'query',
            name: 'holdingId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: HoldingSecuritiesResponseSchema } },
    },
    400: {
      description:
        'Y800 : Invalid value for holdingId<br>Y824 : The maximum number of holdingIds permitted is 100',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getProviderAccountsRoute = createRoute({
  method: 'get',
  path: '/providerAccounts',
  tags: ['ProviderAccounts'],
  summary: 'Get Provider Accounts',
  description:
    'The get provider accounts service is used to return all the provider accounts added by the user. <br>This includes the failed and successfully added provider accounts.<br>',
  operationId: 'getAllProviderAccounts',
  request: {
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'include',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
      providerIds: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated providerIds.',
            in: 'query',
            name: 'providerIds',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: ProviderAccountResponseSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const putProviderAccountsRoute = createRoute({
  method: 'put',
  path: '/providerAccounts',
  tags: ['ProviderAccounts'],
  summary: 'Update Account',
  description:
    'The update account API is used to:<br> <ul><li>Retrieve the latest information for accounts that belong to one providerAccount from the provider site. You must allow at least 15 min between requests.<li>Retrieve the latest information of all the eligible accounts that belong to the user.<li>Data to be retrieved from the provider site can be overridden using datasetName or dataset. If you do pass datasetName, all the datasets that are implicitly configured for the dataset will be retrieved. This action is allowed for single provider account refresh flows only.<li>Check the status of the providerAccount before invoking this API. Do not call this API to trigger any action on a providerAccount when an action is already in progress for the providerAccount.<li>If the customer has subscribed to the REFRESH event notification and invoked this API, relevant notifications will be sent to the customer.<li>A dataset may depend on another dataset for retrieval, so the response will include the requested and dependent datasets.<li>Check all the dataset additional statuses returned in the response because the provider account status is drawn from the dataset additional statuses.<li>Updating preferences using this API will trigger refreshes.<li> The content type has to be passed as application/json for the body parameter.</ul><br>-----------------------------------------------------------------------------------------------------------------------------------------<br><br><b>Update All Eligible Accounts - Notes:</b><br><ul><li>This API will trigger a refresh for all the eligible provider accounts(both OB and credential-based accounts).<li>This API will not refresh closed, inactive, or UAR accounts, or accounts with refreshes in-progress or recently refreshed non-OB accounts.<li>No parameters should be passed to this API to trigger this action.<li>Do not call this API often. Our recommendation is to call this only at the time the user logs in to your app because it can hamper other API calls performance.<li>The response only contains information for accounts that were refreshed. If no accounts are eligible for refresh, no response is returned.</ul>',
  operationId: 'editCredentialsOrRefreshProviderAccount',
  request: {
    query: z.object({
      providerAccountIds: z
        .string()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'comma separated providerAccountIds',
            in: 'query',
            name: 'providerAccountIds',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'loginForm or field entity',
      content: { 'application/json': { schema: ProviderAccountRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json;charset=UTF-8': { schema: UpdatedProviderAccountResponseSchema },
      },
    },
    400: {
      description:
        'Y805 : Multiple providerAccountId not supported for updating credentials<br>Y800 : Invalid value for credentialsParam<br>Y400 : id and value in credentialsParam are mandatory<br>Y806 : Invalid input<br>Y823 : Credentials are not applicable for real estate aggregated / manual accounts<br>Y868 : No action is allowed, as the data is being migrated to the Open Banking provider<br>',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getProviderAccountsProfileRoute = createRoute({
  method: 'get',
  path: '/providerAccounts/profile',
  tags: ['ProviderAccounts'],
  summary: 'Get User Profile Details',
  description:
    'The get provider accounts profile service is used to return the user profile details that are associated to the provider account. <br>',
  operationId: 'getProviderAccountProfiles',
  request: {
    query: z.object({
      providerAccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated providerAccountIds.',
            in: 'query',
            name: 'providerAccountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json;charset=UTF-8': { schema: ProviderAccountUserProfileResponseSchema },
      },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getProviderAccountsProviderAccountIdRoute = createRoute({
  method: 'get',
  path: '/providerAccounts/{providerAccountId}',
  tags: ['ProviderAccounts'],
  summary: 'Get Provider Account Details',
  description:
    'The get provider account details service is used to learn the status of adding accounts and updating accounts.<br>This service has to be called continuously to know the progress level of the triggered process. This service also provides the MFA information requested by the provider site.<br>When <i>include = credentials</i>, questions is passed as input, the service returns the credentials (non-password values) and questions stored in the Yodlee system for that provider account. <br><br><b>Note:</b> <li>The password and answer fields are not returned in the response.</li>',
  operationId: 'getProviderAccount',
  request: {
    query: z.object({
      include: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'include credentials,questions',
            in: 'query',
            name: 'include',
            schema: { type: 'string' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'The unique identifier for the request that returns contextual data',
            in: 'query',
            name: 'requestId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      providerAccountId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'providerAccountId',
            in: 'path',
            name: 'providerAccountId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json;charset=UTF-8': { schema: ProviderAccountDetailResponseSchema },
      },
    },
    400: {
      description:
        'Y800 : Invalid value for providerAccountId<br>Y816 : questions can only be requested for questionAndAnswer Supported Sites',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const deleteProviderAccountsProviderAccountIdRoute = createRoute({
  method: 'delete',
  path: '/providerAccounts/{providerAccountId}',
  tags: ['ProviderAccounts'],
  summary: 'Delete Provider Account',
  description:
    'The delete provider account service is used to delete a provider account from the Yodlee system. This service also deletes the accounts that are created in the Yodlee system for that provider account. <br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br>',
  operationId: 'deleteProviderAccount',
  request: {
    params: z.object({
      providerAccountId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'providerAccountId',
            in: 'path',
            name: 'providerAccountId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    400: {
      description:
        'Y800 : Invalid value for providerAccountId<br>Y868 : No action is allowed, as the data is being migrated to the Open Banking provider<br>',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const putProviderAccountsProviderAccountIdPreferencesRoute = createRoute({
  method: 'put',
  path: '/providerAccounts/{providerAccountId}/preferences',
  tags: ['ProviderAccounts'],
  summary: 'Update Preferences',
  description:
    'This endpoint is used to update preferences like data extracts and auto refreshes without triggering refresh for the providerAccount.<br>Setting isDataExtractsEnabled to false will not trigger data extracts notification and dataExtracts/events will not reflect any data change that is happening for the providerAccount.<br>Modified data will not be provided in the dataExtracts/userData endpoint.<br>Setting isAutoRefreshEnabled to false will not trigger auto refreshes for the provider account.<br>',
  operationId: 'updatePreferences',
  request: {
    params: z.object({
      providerAccountId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'providerAccountId',
            in: 'path',
            name: 'providerAccountId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'preferences',
      content: { 'application/json': { schema: ProviderAccountPreferencesRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'OK', content: {} },
    400: {
      description:
        'Y800 : Invalid value for preferences<br>Y800 : Invalid value for preferences.isDataExtractsEnabled<br>Y800 : Invalid value for preferences.isAutoRefreshEnabled<br>Y807 : Resource not found<br>Y830 : Data extracts feature has to be enabled to set preferences.isDataExtractsEnabled as true<br>Y830 : Auto refresh feature has to be enabled to set preferences.isAutoRefreshEnabled as true<br>Y868 : No action is allowed, as the data is being migrated to the Open Banking provider<br>',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getProvidersRoute = createRoute({
  method: 'get',
  path: '/providers',
  tags: ['Providers'],
  summary: 'Get Providers',
  description:
    'The get provider service is used to get all the providers that are enabled, search a provider service by name or routing number and get popular sites of a region. <br>Searching for a provider using a routing number is applicable only to the USA and Canada regions.<br>The valid values for priority are: <br>   1. cobrand: Returns providers enabled for the cobrand (Default priority)<br>   2. popular: Returns providers popular among users of the customer<br><br>Only the datasets, attributes, and containers that are enabled for the customer will be returned in the response.<br>Input for the dataset$filter should adhere to the following expression:<br><dataset.name>[<attribute.name>.container[<container> OR <container>] OR <attribute.name>.container[<container>]] <br>OR <dataset.name>[<attribute.name> OR <attribute.name>]<br><b>dataset$filter value examples:</b><br>ACCT_PROFILE[FULL_ACCT_NUMBER.container[bank OR investment OR creditCard]]<br>ACCT_PROFILE[FULL_ACCT_NUMBER.container[bank]]<br>BASIC_AGG_DATA[ACCOUNT_DETAILS.container[bank OR investment] OR HOLDINGS.container[bank]] OR ACCT_PROFILE[FULL_ACCT_NUMBER.container[bank]]<br>BASIC_AGG_DATA<br>BASIC_AGG_DATA OR ACCT_PROFILE<br>BASIC_AGG_DATA [ ACCOUNT_DETAILS OR HOLDINGS ]<br>BASIC_AGG_DATA [ ACCOUNT_DETAILS] OR DOCUMENT <br>BASIC_AGG_DATA [ BASIC_ACCOUNT_INFO OR ACCOUNT_DETAILS ] <br><br>The fullAcountNumberFields is specified to filter the providers that have paymentAccountNumber or unmaskedAccountNumber support in the FULL_ACCT_NUMBER dataset attribute.<br><b>Examples for usage of fullAccountNumberFields </b><br>dataset$filter=ACCT_PROFILE[ FULL_ACCT_NUMBER.container [ bank ]] &amp; fullAccountNumberFields=paymentAccountNumber<br>dataset$filter=ACCT_PROFILE[ FULL_ACCT_NUMBER.container [ bank ]] &amp; fullAccountNumberFields=unmaskedAccountNumber<br>dataset$filter=ACCT_PROFILE[ FULL_ACCT_NUMBER.container [ bank ]] &amp; fullAccountNumberFields=unmaskedAccountNumber,paymentAccountNumber<br><br>The skip and top parameters are used for pagination. In the skip and top parameters, pass the number of records to be skipped and retrieved, respectively.<br>The response header provides the links to retrieve the next and previous set of transactions.<br><br><b>Note:</b> <ol><li>In a product flow involving user interaction, Yodlee recommends invoking this service with filters.<li>Without filters, the service may perform slowly as it takes a few minutes to return data in the response.<li>The AuthParameter appears in the response only in case of token-based aggregation sites.<li>The pagination feature only applies when the priority parameter is set as cobrand. If no values are provided in the skip and top parameters, the API will only return the first 500 records.<li>This service supports the localization feature and accepts locale as a header parameter.<li>The capability has been deprecated in query parameter and response.</li></ol>',
  operationId: 'getAllProviders',
  request: {
    query: z.object({
      capability: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'CHALLENGE_DEPOSIT_VERIFICATION - capability search is deprecated',
            in: 'query',
            name: 'capability',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dataset$filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Expression to filter the providers by dataset(s) or dataset attribute(s). The default value will be the dataset or dataset attributes configured as default for the customer.',
            in: 'query',
            name: 'dataset$filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fullAccountNumberFields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Specify to filter the providers with values paymentAccountNumber,unmaskedAccountNumber.',
            in: 'query',
            name: 'fullAccountNumberFields',
            schema: { type: 'string' },
            required: false,
          },
        }),
      institutionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Institution Id for Single site selection',
            in: 'query',
            name: 'institutionId',
            schema: { format: 'int64', type: 'integer' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Name in minimum 1 character or routing number.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      priority: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Search priority',
            in: 'query',
            name: 'priority',
            schema: { type: 'string' },
            required: false,
          },
        }),
      providerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Max 5 Comma seperated Provider Ids',
            in: 'query',
            name: 'providerId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      skip: z
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
            allowEmptyValue: false,
            description: "skip (Min 0) - This is not applicable along with 'name' parameter.",
            in: 'query',
            name: 'skip',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      top: z
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
            allowEmptyValue: false,
            description: "top (Max 500) - This is not applicable along with 'name' parameter.",
            in: 'query',
            name: 'top',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: ProviderResponseSchema } },
    },
    400: {
      description:
        'Y800 : Invalid value for priority<br>Y800 : Invalid value for providerName<br>Y801 : Invalid length for a site search. The search string must have atleast 1 character<br>Y800 : Invalid value for skip<br>Y804 : Permitted values of top between 1 - 500<br>Y821 : Dataset not supported<br>Y820 : The additionalDataSet is not supported for Get provider API',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getProvidersCountRoute = createRoute({
  method: 'get',
  path: '/providers/count',
  tags: ['Providers'],
  summary: 'Get Providers Count',
  description:
    'The count service provides the total number of providers that get returned in the GET /providers depending on the input parameters passed.<br>If you are implementing pagination for providers, call this endpoint before calling GET /providers to know the number of providers that are returned for the input parameters passed.<br>The functionality of the input parameters remains the same as that of the GET /providers endpoint<br><br><b>Note:</b> <li>The capability has been deprecated in the query parameter.</li>',
  operationId: 'getProvidersCount',
  request: {
    query: z.object({
      capability: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'CHALLENGE_DEPOSIT_VERIFICATION - capability search is deprecated',
            in: 'query',
            name: 'capability',
            schema: { type: 'string' },
            required: false,
          },
        }),
      dataset$filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Expression to filter the providers by dataset(s) or dataset attribute(s). The default value will be the dataset or dataset attributes configured as default for the customer.',
            in: 'query',
            name: 'dataset$filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fullAccountNumberFields: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Specify to filter the providers with values paymentAccountNumber,unmaskedAccountNumber.',
            in: 'query',
            name: 'fullAccountNumberFields',
            schema: { type: 'string' },
            required: false,
          },
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Name in minimum 1 character or routing number.',
            in: 'query',
            name: 'name',
            schema: { type: 'string' },
            required: false,
          },
        }),
      priority: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Search priority',
            in: 'query',
            name: 'priority',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: ProvidersCountResponseSchema } },
    },
    400: {
      description:
        'Y800 : Invalid value for priority<br>Y800 : Invalid value for providerName<br>Y801 : Invalid length for a site search. The search string must have at least 1 character<br>Y800 : Invalid value for skip<br>Y804 : Permitted values of top between 1 - 500<br>Y821 : Dataset not supported<br>Y820 : The additionalDataSet is not supported for Get provider API',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getProvidersProviderIdRoute = createRoute({
  method: 'get',
  path: '/providers/{providerId}',
  tags: ['Providers'],
  summary: 'Get Provider Details',
  description:
    "The get provider detail service is used to get detailed information including the login form for a provider.<br>The response is a provider object that includes information such as name of the provider, <br>provider's base URL, a list of containers supported by the provider, the login form details of the provider, etc.<br>Only enabled datasets, attributes and containers gets returned in the response.<br><br><b>Note:</b><li>This service supports the localization feature and accepts locale as a header parameter.<li>The capability has been deprecated in the response.",
  operationId: 'getProvider',
  request: {
    params: z.object({
      providerId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'providerId',
            in: 'path',
            name: 'providerId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: ProviderDetailResponseSchema } },
    },
    400: {
      description: 'Y800 : Invalid value for providerId',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getStatementsRoute = createRoute({
  method: 'get',
  path: '/statements',
  tags: ['Statements'],
  summary: 'Get Statements',
  description:
    'The statements service is used to get the list of statement related information. <br>By default, all the latest statements of active and to be closed accounts are retrieved for the user. <br>Certain sites do not have both a statement date and a due date. When a fromDate is passed as an input, all the statements that have the due date on or after the passed date are retrieved. <br>For sites that do not have the due date, statements that have the statement date on or after the passed date are retrieved. <br>The default value of "isLatest" is true. To retrieve historical statements isLatest needs to be set to false.<br>',
  operationId: 'getStatements',
  request: {
    query: z.object({
      accountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'accountId',
            in: 'query',
            name: 'accountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      container: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'creditCard/loan/insurance',
            in: 'query',
            name: 'container',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fromDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'from date for statement retrieval (YYYY-MM-DD)',
            in: 'query',
            name: 'fromDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      isLatest: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'isLatest (true/false)',
            in: 'query',
            name: 'isLatest',
            schema: { type: 'string' },
            required: false,
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'ACTIVE,TO_BE_CLOSED,CLOSED',
            in: 'query',
            name: 'status',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: StatementResponseSchema } },
    },
    400: {
      description:
        'Y800 : Invalid value for accountId<br>Y800 : Invalid value for status<br>Y805 : Multiple containers not supported<br>Y800 : Invalid value for container<br>Y800 : Invalid value for isLatest<br>Y800 : Invalid value for fromDate<br>',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getTransactionsRoute = createRoute({
  method: 'get',
  path: '/transactions',
  tags: ['Transactions'],
  summary: 'Get Transactions',
  description:
    "The Transaction service is used to get a list of transactions for a user.<br>By default, this service returns the last 30 days of transactions from today's date.<br>The keyword parameter performs a contains search on the original, consumer, and simple description attributes, replace the special characters #, &, and + with percent-encoding values %23, %26, and %2B respectively. Eg: for -Debit# , pass the input as -Debit%23.<br>Values for categoryId parameter can be fetched from get transaction category list service.<br> The categoryId is used to filter transactions based on system-defined category as well as user-defined category.<br>User-defined categoryIds should be provided in the filter with the prefix ''U''. E.g. U10002<br>The skip and top parameters are used for pagination. In the skip and top parameters pass the number of records to be skipped and retrieved, respectively. The response header provides the links to retrieve the next and previous set of transactions.<br>Double quotes in the merchant name will be prefixed by backslashes (&#92;) in the response, e.g. Toys \"R\" Us. <br>sourceId is a unique ID that the provider site has assigned to the transaction. The source ID is only available for the pre-populated accounts. Pre-populated accounts are the accounts that the FI customers shares with Yodlee, so that the user does not have to add or aggregate those accounts.<br><br><b>Note</b><li> <a href=\"https://developer.yodlee.com/docs/api/1.1/Transaction_Data_Enrichment\">TDE</a> is made available for bank and card accounts and for the US market only.The address field in the response is available only when the TDE key is turned on.<li>The pagination feature is available by default. If no values are passed in the skip and top parameters, the API will only return the first 500 transactions.<li>This service supports the localization feature and accepts locale as a header parameter.<br>",
  operationId: 'getTransactions',
  request: {
    query: z.object({
      accountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated accountIds',
            in: 'query',
            name: 'accountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      baseType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'DEBIT/CREDIT',
            in: 'query',
            name: 'baseType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      categoryId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated categoryIds',
            in: 'query',
            name: 'categoryId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      categoryType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Transaction Category Type(UNCATEGORIZE, INCOME, TRANSFER, EXPENSE or DEFERRED_COMPENSATION)',
            in: 'query',
            name: 'categoryType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      container: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'bank/creditCard/investment/insurance/loan',
            in: 'query',
            name: 'container',
            schema: { type: 'string' },
            required: false,
          },
        }),
      detailCategoryId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated detailCategoryIds',
            in: 'query',
            name: 'detailCategoryId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fromDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Transaction from date(YYYY-MM-DD)',
            in: 'query',
            name: 'fromDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      highLevelCategoryId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated highLevelCategoryIds',
            in: 'query',
            name: 'highLevelCategoryId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      keyword: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Transaction search text',
            in: 'query',
            name: 'keyword',
            schema: { type: 'string' },
            required: false,
          },
        }),
      skip: z
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
            allowEmptyValue: false,
            description: 'skip (Min 0)',
            in: 'query',
            name: 'skip',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      toDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Transaction end date (YYYY-MM-DD)',
            in: 'query',
            name: 'toDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      top: z
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
            allowEmptyValue: false,
            description: 'top (Max 500)',
            in: 'query',
            name: 'top',
            schema: { format: 'int32', type: 'integer' },
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Transaction Type(SELL,SWEEP, etc.) for bank/creditCard/investment',
            in: 'query',
            name: 'type',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: TransactionResponseSchema } },
    },
    400: {
      description:
        'Y800 : Invalid value for baseType<br>Y800 : Invalid value for fromDate<br>Y800 : Invalid value for category<br>Y800 : Invalid value for toDate<br>Y800 : Invalid value for container<br>Y809 : Invalid date range<br>Y804 : Permitted values of top between 1 - 500<br>Y805 : Multiple containers not supported<br>Y800 : Invalid value for transaction type<br>Y824 : The maximum number of accountIds permitted is 100<br>Y824 : The maximum number of categoryIds permitted is 100<br>Y824 : The maximum number of highLevelCategoryIds permitted is 100<br>Y848 : detailCategoryId cannot be provided as input, as the detailedCategory feature is not enabled<br>Y823 : detailCategoryId is not for applicable containers other than bank and card<br>Y824 : The maximum number of detailCategoryIds permitted is 100<br>Y800 : Invalid value for detailCategoryId',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getTransactionsCategoriesRoute = createRoute({
  method: 'get',
  path: '/transactions/categories',
  tags: ['Transactions'],
  summary: 'Get Transaction Category List',
  description:
    'The categories service returns the list of available transaction categories.<br>High level category is returned in the response only if it is opted by the customer.<br>When invoked by passing the cobrand session or admin access token, this service returns the supported transaction categories at the cobrand level. <br>When invoked by passing the cobrand session and the user session or user access token, this service returns the transaction categories <br>along with user-defined categories.<br>Double quotes in the user-defined category name will be prefixed by backslashes (&#92;) in the response, <br>e.g. Toys "R" Us.<br/>Source and id are the primary attributes of the category entity.<br><br><b>Note:</b><li>This service supports the localization feature and accepts locale as a header parameter.</li>',
  operationId: 'getTransactionCategories',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: TransactionCategoryResponseSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const putTransactionsCategoriesRoute = createRoute({
  method: 'put',
  path: '/transactions/categories',
  tags: ['Transactions'],
  summary: 'Update Category',
  description:
    'The update transaction categories service is used to update the transaction category name<br>for a high level category, a system-defined category and a user-defined category.<br>The renamed category can be set back to the original name by passing an empty string for categoryName.<br>The categoryName can accept minimum of 1, maximum of 50 alphanumeric or special characters.<br>The HTTP response code is 204 (Success without content).<br>',
  operationId: 'updateTransactionCategory',
  request: {
    body: {
      description: 'updateCategoryRequest',
      content: { 'application/json': { schema: UpdateCategoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Updated Successfully', content: {} },
    400: {
      description:
        'Y800 : Invalid value for categoryParam<br>Y800 : Invalid value for source<br>Y801 : Invalid length for categoryName. Min 1 and max 50 is required<br>Y803 : id required<br>Y811 : categoryName value already exists',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const postTransactionsCategoriesRoute = createRoute({
  method: 'post',
  path: '/transactions/categories',
  tags: ['Transactions'],
  summary: 'Create Category',
  description:
    'The create transaction categories service is used to create user-defined categories for a system-defined category.<br>The parentCategoryId is the system-defined category id.This can be retrieved using get transaction categories service.<br>The categoryName can accept minimum of 1, maximum of 50 alphanumeric or special characters.<br>The HTTP response code is 201 (Created successfully).<br>',
  operationId: 'createTransactionCategory',
  request: {
    body: {
      description: 'User Transaction Category in JSON format',
      content: { 'application/json': { schema: TransactionCategoryRequestSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'Created Successfully', content: {} },
    400: {
      description:
        'Y800 : Invalid value for categoryParam<br>Y800 : Invalid value for source<br>Y801 : Invalid length for categoryName. Min 1 and max 50 is required<br>Y803 : parentCategoryId required<br>Y811 : categoryName value already exists',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getTransactionsCategoriesRulesRoute = createRoute({
  method: 'get',
  path: '/transactions/categories/rules',
  tags: ['Transactions'],
  summary: 'Get Transaction Categorization Rules',
  description:
    'The get transaction categorization rule service is used to get all the categorization rules.<br>',
  operationId: 'getTransactionCategorizationRulesDeprecated',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json;charset=UTF-8': { schema: z.array(TransactionCategorizationRuleSchema) },
      },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
  deprecated: true,
})

export const postTransactionsCategoriesRulesRoute = createRoute({
  method: 'post',
  path: '/transactions/categories/rules',
  tags: ['Transactions'],
  summary: 'Create or Run Transaction Categorization Rule',
  description:
    'The Create or Run Transaction Categorization Rule endpoint is used to: <br>Create transaction categorization rules for both system and user-defined categories.<br>Run all the transaction categorization rules to categorize transactions by calling the endpoint with action=run as the query parameter. <br><br>The input body parameters to create transaction categorization rules follow:<br>     categoryId - This field is mandatory and numeric<br>     priority - This field is optional and numeric. Priority decides the order in which the rule gets applied on transactions.<br>     ruleClause - This field is mandatory and should contain at least one rule<br>     field - The value can be description or amount<br><br>       If the field value is description then,<br>         1. operation - value can be stringEquals or stringContains<br>         2. value - value should be min of 3 and max of 50 characters<br><br>       If the field value is amount then, <br>         1. operation - value can be numberEquals, numberLessThan, numberLessThanEquals, numberGreaterThan or numberGreaterThanEquals<br>         2. value - min value 0 and a max value of 99999999999.99 is allowed<br>The HTTP response code is 201 (Created Successfully).',
  operationId: 'createOrRunTransactionCategorizationRules',
  request: {
    query: z.object({
      action: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'To run rules, pass action=run. Only value run is supported',
            in: 'query',
            name: 'action',
            schema: { type: 'string' },
            required: false,
          },
        }),
      ruleParam: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'rules(JSON format) to categorize the transactions',
            in: 'query',
            name: 'ruleParam',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    201: { description: 'Created Successfully', content: {} },
    204: { description: 'No Content', content: {} },
    400: {
      description:
        'Y806 : Invalid input<br>Y400 : Rule already exists. Rule should be unique in terms of combination of description and amount',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const putTransactionsCategoriesRulesRuleIdRoute = createRoute({
  method: 'put',
  path: '/transactions/categories/rules/{ruleId}',
  tags: ['Transactions'],
  summary: 'Update Transaction Categorization Rule',
  description:
    'The update transaction categorization rule service is used to update a categorization rule for both system-defined category as well as user-defined category.<br>ruleParam JSON input should be as explained in the create transaction categorization rule service.<br>The HTTP response code is 204 (Success without content).<br>',
  operationId: 'updateTransactionCategorizationRule',
  request: {
    params: z.object({
      ruleId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'ruleId',
            in: 'path',
            name: 'ruleId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'transactionCategoriesRuleRequest',
      content: { 'application/json': { schema: TransactionCategorizationRuleRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Updated Successfully', content: {} },
    400: {
      description: 'Y800 : Invalid value for ruleId<br>Y806 : Invalid input',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const postTransactionsCategoriesRulesRuleIdRoute = createRoute({
  method: 'post',
  path: '/transactions/categories/rules/{ruleId}',
  tags: ['Transactions'],
  summary: 'Run Transaction Categorization Rule',
  description:
    'The run transaction categorization rule service is used to run a rule on transactions, to categorize the transactions.<br>The HTTP response code is 204 (Success with no content).<br>',
  operationId: 'runTransactionCategorizationRule',
  request: {
    query: z.object({
      action: z
        .literal('run')
        .default('run')
        .openapi({
          param: {
            in: 'query',
            name: 'action',
            required: true,
            schema: { default: 'run', enum: ['run'], type: 'string' },
          },
        }),
    }),
    params: z.object({
      ruleId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'Unique id of the categorization rule',
            in: 'path',
            name: 'ruleId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Run Successfully', content: {} },
    400: {
      description: 'Y800 : Invalid value for ruleId<br>Y400 : Categorization already in progress',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const deleteTransactionsCategoriesRulesRuleIdRoute = createRoute({
  method: 'delete',
  path: '/transactions/categories/rules/{ruleId}',
  tags: ['Transactions'],
  summary: 'Delete Transaction Categorization Rule',
  description:
    'The delete transaction categorization rule service is used to delete the given user-defined transaction categorization rule for both system-defined category as well as user-defined category.<br>This will delete all the corresponding rule clauses associated with the rule.<br>The HTTP response code is 204 (Success without content).<br>',
  operationId: 'deleteTransactionCategorizationRule',
  request: {
    params: z.object({
      ruleId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'ruleId',
            in: 'path',
            name: 'ruleId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Deleted Successfully', content: {} },
    400: {
      description: 'Y800 : Invalid value for ruleId',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getTransactionsCategoriesTxnRulesRoute = createRoute({
  method: 'get',
  path: '/transactions/categories/txnRules',
  tags: ['Transactions'],
  summary: 'Get Transaction Categorization Rules',
  description:
    'The get transaction categorization rule service is used to get all the categorization rules.<br>',
  operationId: 'getTransactionCategorizationRules',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json;charset=UTF-8': { schema: TransactionCategorizationRuleResponseSchema },
      },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const deleteTransactionsCategoriesCategoryIdRoute = createRoute({
  method: 'delete',
  path: '/transactions/categories/{categoryId}',
  tags: ['Transactions'],
  summary: 'Delete Category',
  description:
    'The delete transaction categories service is used to delete the given user-defined category.<br>The HTTP response code is 204 (Success without content).<br>',
  operationId: 'deleteTransactionCategory',
  request: {
    params: z.object({
      categoryId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'categoryId',
            in: 'path',
            name: 'categoryId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Deleted Successfully', content: {} },
    400: {
      description: 'Y800 : Invalid value for categoryId',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getTransactionsCountRoute = createRoute({
  method: 'get',
  path: '/transactions/count',
  tags: ['Transactions'],
  summary: 'Get Transactions Count',
  description:
    'The count service provides the total number of transactions for a specific user depending on the input parameters passed.<br>If you are implementing pagination for transactions, call this endpoint before calling GET /transactions to know the number of transactions that are returned for the input parameters passed.<br>The functionality of the input parameters remains the same as that of the GET /transactions endpoint.<br>',
  operationId: 'getTransactionsCount',
  request: {
    query: z.object({
      accountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated accountIds\t',
            in: 'query',
            name: 'accountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      baseType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'DEBIT/CREDIT',
            in: 'query',
            name: 'baseType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      categoryId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated categoryIds',
            in: 'query',
            name: 'categoryId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      categoryType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description:
              'Transaction Category Type(UNCATEGORIZE, INCOME, TRANSFER, EXPENSE or DEFERRED_COMPENSATION)',
            in: 'query',
            name: 'categoryType',
            schema: { type: 'string' },
            required: false,
          },
        }),
      container: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'bank/creditCard/investment/insurance/loan',
            in: 'query',
            name: 'container',
            schema: { type: 'string' },
            required: false,
          },
        }),
      detailCategoryId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated detailCategoryIds',
            in: 'query',
            name: 'detailCategoryId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      fromDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Transaction from date(YYYY-MM-DD)',
            in: 'query',
            name: 'fromDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      highLevelCategoryId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated highLevelCategoryIds',
            in: 'query',
            name: 'highLevelCategoryId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      keyword: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Transaction search text\t',
            in: 'query',
            name: 'keyword',
            schema: { type: 'string' },
            required: false,
          },
        }),
      toDate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Transaction end date (YYYY-MM-DD)',
            in: 'query',
            name: 'toDate',
            schema: { type: 'string' },
            required: false,
          },
        }),
      type: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Transaction Type(SELL,SWEEP, etc.)',
            in: 'query',
            name: 'type',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: TransactionCountResponseSchema } },
    },
    400: {
      description:
        'Y800 : Invalid value for detailCategoryId<br>Y848 : detailCategoryId cannot be provided as input, as the detailedCategory feature is not enabled<br>Y823 : detailCategoryId is not applicable for containers other than bank and card<br>Y824 : The maximum number of detailCategoryIds permitted is 100<br>',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const putTransactionsTransactionIdRoute = createRoute({
  method: 'put',
  path: '/transactions/{transactionId}',
  tags: ['Transactions'],
  summary: 'Update Transaction',
  description:
    'The update transaction service is used to update the category,consumer description, memo for a transaction.<br>The HTTP response code is 204 (Success without content).<br>',
  operationId: 'updateTransaction',
  request: {
    params: z.object({
      transactionId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            description: 'transactionId',
            in: 'path',
            name: 'transactionId',
            required: true,
            schema: { format: 'int64', type: 'integer' },
          },
        }),
    }),
    body: {
      description: 'transactionRequest',
      content: { 'application/json': { schema: TransactionRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'Updated Successfully', content: {} },
    400: {
      description:
        'Y812 : Required field -container missing in the transactionParam parameter input<br>Y800 : Invalid value for transactionId<br>Y800 : Invalid value for categoryId<br>Y868 : No action is allowed, as the data is being migrated to the Open Banking provider<br>',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getUserRoute = createRoute({
  method: 'get',
  path: '/user',
  tags: ['User'],
  summary: 'Get User Details',
  description:
    'The get user details service is used to get the user profile information and the application preferences set at the time of user registration.<br>',
  operationId: 'getUser',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: UserDetailResponseSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const putUserRoute = createRoute({
  method: 'put',
  path: '/user',
  tags: ['User'],
  summary: 'Update User Details',
  description:
    'The update user details service is used to update user details like name, address, currency preference, etc.<br>Currency provided in the input will be respected in the <a href="https://developer.yodlee.com/api-reference#tag/Derived">derived</a> services and the amount fields in the response will be provided in the preferred currency.<br>The HTTP response code is 204 (Success without content). <br>',
  operationId: 'updateUser',
  request: {
    body: {
      description: 'userRequest',
      content: { 'application/json': { schema: UpdateUserRequestSchema } },
      required: true,
    },
  },
  responses: {
    204: { description: 'No Content', content: {} },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getUserAccessTokensRoute = createRoute({
  method: 'get',
  path: '/user/accessTokens',
  tags: ['User'],
  summary: 'Get Access Tokens',
  description:
    'The Get Access Tokens service is used to retrieve the access tokens for the application id(s) provided.<br>URL in the response can be used to launch the application for which token is requested.<br><br><b>Note:</b> <li>This endpoint is deprecated for customers using the API Key-based authentication and is applicable only to customers who use the SAML-based authentication.<br>',
  operationId: 'getAccessTokens',
  request: {
    query: z.object({
      appIds: z
        .string()
        .openapi({
          param: {
            description: 'appIds',
            in: 'query',
            name: 'appIds',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: UserAccessTokensResponseSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const postUserLogoutRoute = createRoute({
  method: 'post',
  path: '/user/logout',
  tags: ['User'],
  summary: 'User Logout',
  description:
    '<b>Deprecated</b>: This endpoint is deprecated for API Key-based authentication. The user logout service allows the user to log out of the application.<br>The service does not return a response body. The HTTP response code is 204 (Success with no content).<br>',
  operationId: 'userLogout',
  responses: {
    204: { description: 'Logout successful', content: {} },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const postUserRegisterRoute = createRoute({
  method: 'post',
  path: '/user/register',
  tags: ['User'],
  summary: 'Register User',
  description:
    'The register user service is used to register a user in Yodlee.<br>The loginName cannot include spaces and must be between 3 and 150 characters.<br>locale passed must be one of the supported locales for the customer. <br>Currency provided in the input will be respected in the derived services and the amount fields in the response will be provided in the preferred currency.<br>userParam is accepted as a body parameter. <br><br><b>Note:</b> <li>The content type has to be passed as application/json for the body parameter.</li>',
  operationId: 'registerUser',
  request: {
    body: {
      description: 'userRequest',
      content: { 'application/json': { schema: UserRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Login Successful',
      content: { 'application/json;charset=UTF-8': { schema: UserResponseSchema } },
    },
    400: {
      description:
        'Y800 : Invalid value for loginName<br>Y800 : Invalid value for email<br>Y801 : Invalid length for loginName<br>',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const postUserSamlLoginRoute = createRoute({
  method: 'post',
  path: '/user/samlLogin',
  tags: ['User'],
  summary: 'Saml Login',
  description:
    "The SAML login service is used to authenticate system users with a SAML response.<br>A new user will be created with the input provided if that user isn't already in the system.<br>For existing users, the system will make updates based on changes or new information.<br>When authentication is successful, a user session token is returned.<br><br><b>Note:</b> <li>The content type has to be passed as application/x-www-form-urlencoded. <li>issuer, source and samlResponse should be passed as body parameters.</li>",
  operationId: 'samlLogin',
  request: {
    query: z.object({
      issuer: z
        .string()
        .openapi({
          param: {
            description: 'issuer',
            in: 'query',
            name: 'issuer',
            required: true,
            schema: { type: 'string' },
          },
        }),
      samlResponse: z
        .string()
        .openapi({
          param: {
            description: 'samlResponse',
            in: 'query',
            name: 'samlResponse',
            required: true,
            schema: { type: 'string' },
          },
        }),
      source: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'source',
            in: 'query',
            name: 'source',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: UserResponseSchema } },
    },
    400: {
      description: 'Y013 : Invalid value for samlResponse<br>Y013 : Invalid value for issuer',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const deleteUserUnregisterRoute = createRoute({
  method: 'delete',
  path: '/user/unregister',
  tags: ['User'],
  summary: 'Delete User',
  description:
    'The delete user service is used to delete or unregister a user from Yodlee. <br>Once deleted, the information related to the users cannot be retrieved. <br>The HTTP response code is 204 (Success without content)<br>',
  operationId: 'unregister',
  responses: {
    204: { description: 'No Content', content: {} },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const getVerificationRoute = createRoute({
  method: 'get',
  path: '/verification',
  tags: ['Verification'],
  summary: 'Get Verification Status',
  description:
    'The get verification status service is used to retrieve the verification status of all accounts for which the MS or CDV process has been initiated.<br>For the MS process, the account details object returns the aggregated information of the verified accounts. For the CDV process, the account details object returns the user provided account information.<br>',
  operationId: 'getVerificationStatus',
  request: {
    query: z.object({
      accountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated accountId',
            in: 'query',
            name: 'accountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      providerAccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'Comma separated providerAccountId',
            in: 'query',
            name: 'providerAccountId',
            schema: { type: 'string' },
            required: false,
          },
        }),
      verificationType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            allowEmptyValue: false,
            description: 'verificationType',
            in: 'query',
            name: 'verificationType',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: VerificationStatusResponseSchema } },
    },
    400: {
      description:
        'Y901 : Service not supported<br>Y813 : Either of accountId or providerAccountId should be provided<br>Y800 : Invalid value for accountId<br>Y800 : Invalid value for verification.verificationType<br>Y800 : Invalid value for providerAccountId<br>Y835 : Account(s) not eligible for Matching verification<br>Y836 : No verification initiated',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const putVerificationRoute = createRoute({
  method: 'put',
  path: '/verification',
  tags: ['Verification'],
  summary: 'Verify Challenge Deposit',
  description:
    "The put verification service is used to complete the challenge deposit verification (CDV) process.<br>This service is used only by the customer of CDV flow.<br>In the CDV process, the user-provided microtransaction details (i.e., credit and debit) is matched against the microtransactions posted by Yodlee. For a successful verification of the account's ownership both the microtransaction details should match.<br>The CDV process is currently supported only in the United States.<br><br><b>Notes:</b><ul><li>This endpoint cannot be used to test the CDV functionality in the developer sandbox or test environment. You will need a money transmitter license to implement the CDV functionality and also require the Yodlee Professional Services team's assistance to set up a dedicated environment.</li></ul>",
  operationId: 'verifyChallengeDeposit',
  request: {
    body: {
      description: 'verification information',
      content: { 'application/json': { schema: UpdateVerificationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: VerificationResponseSchema } },
    },
    400: {
      description:
        'Y901 : Service not supported<br>Y812 : Required field/value - verification.verificationType missing in the verificationParam<br>Y812 : Required field/value - amount.amount missing in the verificationParam<br>Y812 : Required field/value - baseType missing in the verificationParam<br>Y812 : Required field/value - currency missing in the verificationParam<br>Y812 : Required field/value - providerAccountId missing in the verificationParam<br>Y812 : Required field/value - accountId missing in the verificationParam<br>Y800 : Invalid value for verificationParam<br>Y800 : Invalid value for verification.verificationType<br>Y800 : Invalid value for baseType<br>Y800 : Invalid value for providerAccountId<br>Y800 : Invalid value for accountId<br>Y813 : Transaction should be provided<br>Y801 : Invalid length for accountNumber<br>Y801 : Invalid length for amount<br>Y835 : Account(s) not eligible for Challenge Deposit verification<br>Y806 : Invalid Input<br>Y840 : Verification has been initiated already<br>Y837 : Account has been verified already<br>Y838 : The currency code provided does not match with the currency of the transaction executed on the target account<br>Y846 : The number of financial transactions made on the target account does not match with the number of transactions entered by the user.<br>Y842 : Number of retries exceeded the maximum Challenge Deposit verification limit<br>Y844 : Financial Instructions were not executed successfully on the target account<br>Y845 : Verification time expired. Please try initiating challenge deposit again<br>Y868 : No action is allowed, as the data is being migrated to the Open Banking provider<br>',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const postVerificationRoute = createRoute({
  method: 'post',
  path: '/verification',
  tags: ['Verification'],
  summary: 'Initiaite Matching Service and Challenge Deposit',
  description:
    "The post verification service is used to initiate the matching service (MS) and the challenge deposit account verification (CDV) process to verify account ownership.<br>The MS and CDV process can verify ownership of only bank accounts (i.e., checking and savings).<br>The MS verification can be initiated only for an already aggregated account or a providerAccount.<br>The prerequisite for the MS verification process is to request the ACCT_PROFILE dataset with the HOLDER_NAME attribute.<br>In the MS verification process, a string-match of the account holder name with the registered user name is performed instantaneously. You can contact the Yodlee CustomerCare to configure the full name or only the last name match.<br>Once the CDV process is initiated Yodlee will post the microtransaction (i.e., credit and debit) in the user's account. The CDV process takes 2 to 3 days to complete as it requires the user to provide the microtransaction details.<br>The CDV process is currently supported only in the United States.<br>The verificationId in the response can be used to track the verification request.<br><br><b>Notes:</b><li>This endpoint cannot be used to test the CDV functionality in the developer sandbox or test environment. You will need a money transmitter license to implement the CDV functionality and also require the Yodlee Professional Services team's assistance to set up a dedicated environment.",
  operationId: 'initiateMatchingOrChallengeDepositeVerification',
  request: {
    body: {
      description: 'verification information',
      content: { 'application/json': { schema: VerificationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: VerificationResponseSchema } },
    },
    400: {
      description:
        'Y901 : Service not supported<br>Y812 : Required field/value - verification.verificationType missing in the verificationParam<br>Y812 : Required field/value - accountNumber missing in the verificationParam<br>Y812 : Required field/value - accountType missing in the verificationParam<br>Y812 : Required field/value - bankTransferCode missing in the verificationParam<br>Y812 : Required field/value - bankTransferCode.id missing in the verificationParam<br>Y812 : Required field/value - bankTransferCode.type missing in the verificationParam<br>Y800 : Invalid value for verification.verificationType<br>Y800 : Invalid value for verificationParam<br>Y800 : Invalid value for bankTransferCode.type<br>Y800 : Invalid value for bankTransferCode.id<br>Y800 : Invalid value for accountType<br>Y800 : Invalid value for accountId<br>Y813 : Account details should be provided<br>Y801 : Invalid length for accountNumber<br>Y835 : Account(s) not eligible for Challenge Deposit verification<br>Y806 : Invalid Input<br>Y840 : Verification has been initiated already<br>Y837 : Account has been verified already',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})

export const postVerifyAccountProviderAccountIdRoute = createRoute({
  method: 'post',
  path: '/verifyAccount/{providerAccountId}',
  tags: ['Verify Account'],
  summary: 'Verify Accounts Using Transactions',
  description:
    "The verify account service is used to verify the account's ownership by  matching the transaction details with the accounts aggregated for the user.<br><ul><li>If a match is identified, the service returns details of all the accounts along with the matched transaction's details.<li>If no transaction match is found, an empty response will be returned.<li>A maximum of 5 transactionCriteria can be passed in a request.<li>The baseType, date, and amount parameters should mandatorily be passed.<li>The optional dateVariance parameter cannot be more than 7 days. For example, +7, -4, or +/-2.<li>Pass the container or accountId parameters for better performance.<li>This service supports the localization feature and accepts locale as a header parameter.</li></ul>",
  operationId: 'initiateAccountVerification',
  request: {
    params: z.object({
      providerAccountId: z
        .string()
        .openapi({
          param: {
            description: 'providerAccountId',
            in: 'path',
            name: 'providerAccountId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'verificationParam',
      content: { 'application/json': { schema: VerifyAccountRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json;charset=UTF-8': { schema: VerifyAccountResponseSchema } },
    },
    400: {
      description:
        'Y800 : Invalid value for container<br>Y800 : Invalid value for accountId<br>Y800 : Invalid value for amount<br>Y800 : Invalid value for dateVariance<br>Y801 : Invalid length for keyword<br>Y804 : Permitted values of dateVariance between 1 - 7<br>Y806 : Invalid input<br>Y807 : Resource not found<br>Y809 : Invalid date range<br>Y812 : Required field/value - transactionCriteria missing in the input<br>Y812 : Required field/value - amount missing in the transactionCriteria<br>Y812 : Required field/value - amount date in the transactionCriteria<br>Y812 : Required field/value - baseType missing in the transactionCriteria<br>Y823 : Transaction not applicable for container <br>Y824 : The maximum number of transactionCriteria permitted is 5<br>Y857 : Transactions are not refreshed in the past 24 hours<br>Y858 : Only active accounts can be verified<br>Y901 : Service not supported<br>',
      content: { 'application/json;charset=UTF-8': { schema: YodleeErrorSchema } },
    },
    401: { description: 'Unauthorized', content: {} },
    404: { description: 'Not Found', content: {} },
  },
})
