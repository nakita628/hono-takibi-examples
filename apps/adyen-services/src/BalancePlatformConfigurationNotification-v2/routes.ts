import { createRoute, z } from '@hono/zod-openapi'

const AmountSchema = z
  .strictObject({
    currency: z
      .string()
      .length(3)
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes#currency-codes) of the amount.',
      }),
    value: z
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
          'The numeric value of the amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes#minor-units).',
      }),
  })
  .openapi({ required: ['currency', 'value'] })
  .openapi('Amount')

const CapabilitySettingsSchema = z
  .strictObject({
    amountPerIndustry: z
      .record(z.string(), AmountSchema)
      .exactOptional()
      .openapi({ description: '' }),
    authorizedCardUsers: z.boolean().exactOptional().openapi({ description: '' }),
    fundingSource: z
      .array(z.enum(['credit', 'debit', 'prepaid']))
      .exactOptional()
      .openapi({ description: '' }),
    interval: z.enum(['daily', 'monthly', 'weekly']).exactOptional().openapi({ description: '' }),
    maxAmount: AmountSchema.exactOptional().openapi({ description: '' }),
  })
  .openapi({ required: [] })
  .openapi('CapabilitySettings')

const CapabilityProblemEntityRecursiveSchema = z
  .strictObject({
    documents: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of document IDs to which the verification errors related to the capabilities correspond to.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the entity.' }),
    type: z
      .enum(['BankAccount', 'Document', 'LegalEntity'])
      .exactOptional()
      .openapi({
        description:
          'Type of entity. \n\nPossible values: **LegalEntity**, **BankAccount**, **Document**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CapabilityProblemEntityRecursive')

const CapabilityProblemEntitySchema = z
  .strictObject({
    documents: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of document IDs to which the verification errors related to the capabilities correspond to.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the entity.' }),
    owner: CapabilityProblemEntityRecursiveSchema.exactOptional().openapi({
      description: 'Contains details about the owner of the entity that has an error.',
    }),
    type: z
      .enum(['BankAccount', 'Document', 'LegalEntity'])
      .exactOptional()
      .openapi({
        description:
          'Type of entity. \n\nPossible values: **LegalEntity**, **BankAccount**, **Document**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CapabilityProblemEntity')

const RemediatingActionSchema = z
  .strictObject({
    code: z.string().exactOptional().openapi({ description: 'The remediating action code.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of how you can resolve the verification error.' }),
  })
  .openapi({ required: [] })
  .openapi('RemediatingAction')

const VerificationErrorRecursiveSchema = z
  .strictObject({
    capabilities: z
      .array(
        z.enum([
          'acceptExternalFunding',
          'acceptPspFunding',
          'acceptTransactionInRestrictedCountries',
          'acceptTransactionInRestrictedCountriesCommercial',
          'acceptTransactionInRestrictedCountriesConsumer',
          'acceptTransactionInRestrictedIndustries',
          'acceptTransactionInRestrictedIndustriesCommercial',
          'acceptTransactionInRestrictedIndustriesConsumer',
          'acquiring',
          'atmWithdrawal',
          'atmWithdrawalCommercial',
          'atmWithdrawalConsumer',
          'atmWithdrawalInRestrictedCountries',
          'atmWithdrawalInRestrictedCountriesCommercial',
          'atmWithdrawalInRestrictedCountriesConsumer',
          'authorisedPaymentInstrumentUser',
          'getGrantOffers',
          'issueBankAccount',
          'issueCard',
          'issueCardCommercial',
          'issueCardConsumer',
          'issueChargeCard',
          'issueChargeCardCommercial',
          'issueCreditLimit',
          'localAcceptance',
          'payout',
          'payoutToTransferInstrument',
          'processing',
          'receiveFromBalanceAccount',
          'receiveFromPlatformPayments',
          'receiveFromThirdParty',
          'receiveFromTransferInstrument',
          'receiveGrants',
          'receivePayments',
          'sendToBalanceAccount',
          'sendToThirdParty',
          'sendToTransferInstrument',
          'thirdPartyFunding',
          'useCard',
          'useCardCommercial',
          'useCardConsumer',
          'useCardInRestrictedCountries',
          'useCardInRestrictedCountriesCommercial',
          'useCardInRestrictedCountriesConsumer',
          'useCardInRestrictedIndustries',
          'useCardInRestrictedIndustriesCommercial',
          'useCardInRestrictedIndustriesConsumer',
          'useChargeCard',
          'useChargeCardCommercial',
          'withdrawFromAtm',
          'withdrawFromAtmCommercial',
          'withdrawFromAtmConsumer',
          'withdrawFromAtmInRestrictedCountries',
          'withdrawFromAtmInRestrictedCountriesCommercial',
          'withdrawFromAtmInRestrictedCountriesConsumer',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'Contains the capabilities that the verification error applies to.',
      }),
    code: z.string().exactOptional().openapi({ description: 'The verification error code.' }),
    message: z.string().exactOptional().openapi({ description: 'A description of the error.' }),
    type: z
      .enum(['dataMissing', 'dataReview', 'invalidInput', 'pendingStatus'])
      .exactOptional()
      .openapi({
        description:
          'The type of error.\n\n\n\nPossible values:\n*  **invalidInput**\n*  **dataMissing**\n*  **pendingStatus**\n*  **dataReview**\n\n',
      }),
    remediatingActions: z
      .array(RemediatingActionSchema)
      .exactOptional()
      .openapi({
        description: 'Contains the actions that you can take to resolve the verification error.',
      }),
  })
  .openapi({ required: [] })
  .openapi('VerificationErrorRecursive')

const VerificationErrorSchema = z
  .strictObject({
    capabilities: z
      .array(
        z.enum([
          'acceptExternalFunding',
          'acceptPspFunding',
          'acceptTransactionInRestrictedCountries',
          'acceptTransactionInRestrictedCountriesCommercial',
          'acceptTransactionInRestrictedCountriesConsumer',
          'acceptTransactionInRestrictedIndustries',
          'acceptTransactionInRestrictedIndustriesCommercial',
          'acceptTransactionInRestrictedIndustriesConsumer',
          'acquiring',
          'atmWithdrawal',
          'atmWithdrawalCommercial',
          'atmWithdrawalConsumer',
          'atmWithdrawalInRestrictedCountries',
          'atmWithdrawalInRestrictedCountriesCommercial',
          'atmWithdrawalInRestrictedCountriesConsumer',
          'authorisedPaymentInstrumentUser',
          'getGrantOffers',
          'issueBankAccount',
          'issueCard',
          'issueCardCommercial',
          'issueCardConsumer',
          'issueChargeCard',
          'issueChargeCardCommercial',
          'issueCreditLimit',
          'localAcceptance',
          'payout',
          'payoutToTransferInstrument',
          'processing',
          'receiveFromBalanceAccount',
          'receiveFromPlatformPayments',
          'receiveFromThirdParty',
          'receiveFromTransferInstrument',
          'receiveGrants',
          'receivePayments',
          'sendToBalanceAccount',
          'sendToThirdParty',
          'sendToTransferInstrument',
          'thirdPartyFunding',
          'useCard',
          'useCardCommercial',
          'useCardConsumer',
          'useCardInRestrictedCountries',
          'useCardInRestrictedCountriesCommercial',
          'useCardInRestrictedCountriesConsumer',
          'useCardInRestrictedIndustries',
          'useCardInRestrictedIndustriesCommercial',
          'useCardInRestrictedIndustriesConsumer',
          'useChargeCard',
          'useChargeCardCommercial',
          'withdrawFromAtm',
          'withdrawFromAtmCommercial',
          'withdrawFromAtmConsumer',
          'withdrawFromAtmInRestrictedCountries',
          'withdrawFromAtmInRestrictedCountriesCommercial',
          'withdrawFromAtmInRestrictedCountriesConsumer',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'Contains the capabilities that the verification error applies to.',
      }),
    code: z.string().exactOptional().openapi({ description: 'The verification error code.' }),
    message: z.string().exactOptional().openapi({ description: 'A description of the error.' }),
    remediatingActions: z
      .array(RemediatingActionSchema)
      .exactOptional()
      .openapi({
        description: 'Contains the actions that you can take to resolve the verification error.',
      }),
    subErrors: z
      .array(VerificationErrorRecursiveSchema)
      .exactOptional()
      .openapi({ description: 'Contains more granular information about the verification error.' }),
    type: z
      .enum(['dataMissing', 'dataReview', 'invalidInput', 'pendingStatus'])
      .exactOptional()
      .openapi({
        description:
          'The type of error.\n\n\n\nPossible values:\n*  **invalidInput**\n*  **dataMissing**\n*  **pendingStatus**\n*  **dataReview**\n\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('VerificationError')

const CapabilityProblemSchema = z
  .strictObject({
    entity: CapabilityProblemEntitySchema.exactOptional().openapi({
      description: 'Contains the type of the entity and the corresponding ID.',
    }),
    verificationErrors: z
      .array(VerificationErrorSchema)
      .exactOptional()
      .openapi({ description: 'Contains information about the verification error.' }),
  })
  .openapi({ required: [] })
  .openapi('CapabilityProblem')

const AccountSupportingEntityCapabilitySchema = z
  .strictObject({
    allowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the supporting entity capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability.',
      }),
    allowedLevel: z
      .enum(['high', 'low', 'medium', 'notApplicable'])
      .exactOptional()
      .openapi({
        description:
          'The capability level that is allowed for the account holder.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.',
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the supporting entity.' }),
    requested: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field.',
      }),
    requestedLevel: z
      .enum(['high', 'low', 'medium', 'notApplicable'])
      .exactOptional()
      .openapi({
        description:
          'The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.',
      }),
    verificationStatus: z
      .enum(['invalid', 'pending', 'rejected', 'valid'])
      .exactOptional()
      .openapi({
        description:
          'The status of the verification checks for the supporting entity capability.\n\nPossible values:\n\n* **pending**: Adyen is running the verification.\n\n* **invalid**: The verification failed. Check if the `errors` array contains more information.\n\n* **valid**: The verification has been successfully completed.\n\n* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountSupportingEntityCapability')

type AccountHolderCapabilityType = {
  allowed?: boolean
  allowedLevel?: 'high' | 'low' | 'medium' | 'notApplicable'
  allowedSettings?: z.infer<typeof CapabilitySettingsSchema>
  enabled?: boolean
  problems?: z.infer<typeof CapabilityProblemSchema>[]
  requested?: boolean
  requestedLevel?: 'high' | 'low' | 'medium' | 'notApplicable'
  requestedSettings?: z.infer<typeof CapabilitySettingsSchema>
  transferInstruments?: z.infer<typeof AccountSupportingEntityCapabilitySchema>[]
  verificationStatus?: 'invalid' | 'pending' | 'rejected' | 'valid'
}

const AccountHolderCapabilitySchema: z.ZodType<AccountHolderCapabilityType> = z
  .strictObject({
    allowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability.',
      }),
    allowedLevel: z
      .enum(['high', 'low', 'medium', 'notApplicable'])
      .exactOptional()
      .openapi({
        description:
          'The capability level that is allowed for the account holder.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.',
      }),
    allowedSettings: CapabilitySettingsSchema.exactOptional().openapi({
      description: 'A JSON object containing the settings that are allowed for the account holder.',
    }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder.',
      }),
    problems: z
      .array(CapabilityProblemSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains verification errors and the actions that you can take to resolve them.',
      }),
    requested: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the capability is requested. To check whether the account holder is permitted to use the capability, refer to the `allowed` field.',
      }),
    requestedLevel: z
      .enum(['high', 'low', 'medium', 'notApplicable'])
      .exactOptional()
      .openapi({
        description:
          'The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.',
      }),
    requestedSettings: CapabilitySettingsSchema.exactOptional().openapi({
      description:
        'A JSON object containing the settings that were requested for the account holder.',
    }),
    transferInstruments: z
      .array(AccountSupportingEntityCapabilitySchema)
      .exactOptional()
      .openapi({
        description:
          'Contains the status of the transfer instruments associated with this capability. ',
      }),
    verificationStatus: z
      .enum(['invalid', 'pending', 'rejected', 'valid'])
      .exactOptional()
      .openapi({
        description:
          'The status of the verification checks for the capability.\n\nPossible values:\n\n* **pending**: Adyen is running the verification.\n\n* **invalid**: The verification failed. Check if the `errors` array contains more information.\n\n* **valid**: The verification has been successfully completed.\n\n* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountHolderCapability')

const AddressSchema = z
  .strictObject({
    city: z
      .string()
      .max(3000)
      .openapi({ description: 'The name of the city. Maximum length: 3000 characters.' }),
    country: z
      .string()
      .openapi({
        description:
          "The two-character ISO-3166-1 alpha-2 country code. For example, **US**.\n> If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.",
      }),
    houseNumberOrName: z
      .string()
      .max(3000)
      .openapi({
        description: 'The number or name of the house. Maximum length: 3000 characters.',
      }),
    postalCode: z
      .string()
      .openapi({
        description:
          'A maximum of five digits for an address in the US, or a maximum of ten characters for an address in all other countries.',
      }),
    stateOrProvince: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-character ISO 3166-2 state or province code. For example, **CA** in the US or **ON** in Canada.\n> Required for the US and Canada.',
      }),
    street: z
      .string()
      .max(3000)
      .openapi({
        description:
          'The name of the street. Maximum length: 3000 characters.\n> The house number should not be included in this field; it should be separately provided via `houseNumberOrName`.',
      }),
  })
  .openapi({ required: ['city', 'country', 'houseNumberOrName', 'postalCode', 'street'] })
  .openapi('Address')

const PhoneSchema = z
  .strictObject({
    number: z
      .string()
      .openapi({
        description:
          'The full phone number provided as a single string. \nFor example, **"0031 6 11 22 33 44"**, **"+316/1122-3344"**, \n\n or **"(0031) 611223344"**.',
      }),
    type: z
      .enum(['landline', 'mobile'])
      .openapi({
        description: 'Type of phone number.\nPossible values: \n**Landline**, **Mobile**.\n',
      }),
  })
  .openapi({ required: ['number', 'type'] })
  .openapi('Phone')

const ContactDetailsSchema = z
  .strictObject({
    address: AddressSchema.openapi({ description: 'The address of the account holder.' }),
    email: z.string().openapi({ description: 'The email address of the account holder.' }),
    phone: PhoneSchema.openapi({ description: 'The phone number of the account holder.' }),
    webAddress: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of the account holder's website." }),
  })
  .openapi({ deprecated: true, required: ['address', 'email', 'phone'] })
  .openapi('ContactDetails')

const VerificationDeadlineSchema = z
  .strictObject({
    capabilities: z
      .array(
        z.enum([
          'acceptExternalFunding',
          'acceptPspFunding',
          'acceptTransactionInRestrictedCountries',
          'acceptTransactionInRestrictedCountriesCommercial',
          'acceptTransactionInRestrictedCountriesConsumer',
          'acceptTransactionInRestrictedIndustries',
          'acceptTransactionInRestrictedIndustriesCommercial',
          'acceptTransactionInRestrictedIndustriesConsumer',
          'acquiring',
          'atmWithdrawal',
          'atmWithdrawalCommercial',
          'atmWithdrawalConsumer',
          'atmWithdrawalInRestrictedCountries',
          'atmWithdrawalInRestrictedCountriesCommercial',
          'atmWithdrawalInRestrictedCountriesConsumer',
          'authorisedPaymentInstrumentUser',
          'getGrantOffers',
          'issueBankAccount',
          'issueCard',
          'issueCardCommercial',
          'issueCardConsumer',
          'issueChargeCard',
          'issueChargeCardCommercial',
          'issueCreditLimit',
          'localAcceptance',
          'payout',
          'payoutToTransferInstrument',
          'processing',
          'receiveFromBalanceAccount',
          'receiveFromPlatformPayments',
          'receiveFromThirdParty',
          'receiveFromTransferInstrument',
          'receiveGrants',
          'receivePayments',
          'sendToBalanceAccount',
          'sendToThirdParty',
          'sendToTransferInstrument',
          'thirdPartyFunding',
          'useCard',
          'useCardCommercial',
          'useCardConsumer',
          'useCardInRestrictedCountries',
          'useCardInRestrictedCountriesCommercial',
          'useCardInRestrictedCountriesConsumer',
          'useCardInRestrictedIndustries',
          'useCardInRestrictedIndustriesCommercial',
          'useCardInRestrictedIndustriesConsumer',
          'useChargeCard',
          'useChargeCardCommercial',
          'withdrawFromAtm',
          'withdrawFromAtmCommercial',
          'withdrawFromAtmConsumer',
          'withdrawFromAtmInRestrictedCountries',
          'withdrawFromAtmInRestrictedCountriesCommercial',
          'withdrawFromAtmInRestrictedCountriesConsumer',
        ]),
      )
      .openapi({ description: 'The names of the capabilities to be disallowed.' }),
    entityIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The unique identifiers of the bank account(s) that the deadline applies to',
      }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date that verification is due by before capabilities are disallowed.',
      }),
  })
  .openapi({ required: ['capabilities', 'expiresAt'] })
  .openapi('VerificationDeadline')

type AccountHolderType = {
  balancePlatform?: string
  capabilities?: { [key: string]: z.infer<typeof AccountHolderCapabilitySchema> }
  contactDetails?: z.infer<typeof ContactDetailsSchema>
  description?: string
  id: string
  legalEntityId: string
  metadata?: { [key: string]: string }
  migratedAccountHolderCode?: string
  primaryBalanceAccount?: string
  reference?: string
  status?: 'active' | 'closed' | 'suspended'
  timeZone?: string
  verificationDeadlines?: z.infer<typeof VerificationDeadlineSchema>[]
}

const AccountHolderSchema: z.ZodType<AccountHolderType> = z
  .strictObject({
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms.',
      }),
    capabilities: z
      .record(z.string(), AccountHolderCapabilitySchema)
      .exactOptional()
      .openapi({
        description:
          'Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.',
      }),
    contactDetails: ContactDetailsSchema.exactOptional().openapi({
      deprecated: true,
      description: 'Contact details of the account holder.',
    }),
    description: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({ description: 'Your description for the account holder.' }),
    id: z.string().openapi({ description: 'The unique identifier of the account holder.' }),
    legalEntityId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder.',
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of key and value pairs for general use.\nThe keys do not have specific names and may be used for storing miscellaneous data as desired.\n> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.',
      }),
    migratedAccountHolderCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the migrated account holder in the classic integration.',
      }),
    primaryBalanceAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The ID of the account holder's primary balance account. By default, this is set to the first balance account that you create for the account holder. To assign a different balance account, send a PATCH request.",
      }),
    reference: z
      .string()
      .max(150)
      .exactOptional()
      .openapi({ description: 'Your reference for the account holder.' }),
    status: z
      .enum(['active', 'closed', 'suspended'])
      .exactOptional()
      .openapi({
        description:
          'The status of the account holder.\n\nPossible values: \n\n * **active**: The account holder is active and allowed to use its capabilities. This is the initial status for account holders and balance accounts. You can change this status to **suspended** or **closed**. \n\n * **suspended**: The account holder is temporarily disabled and payouts are blocked. You can change this status to **active** or **closed**. \n\n* **closed**: The account holder and all of its capabilities are permanently disabled. This is a final status and cannot be changed.',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time zone of the account holder. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).',
      }),
    verificationDeadlines: z
      .array(VerificationDeadlineSchema)
      .exactOptional()
      .openapi({
        description:
          'List of verification deadlines and the capabilities that will be disallowed if verification errors are not resolved.',
      }),
  })
  .openapi({ required: ['id', 'legalEntityId'] })
  .openapi('AccountHolder')

type AccountHolderNotificationDataType = {
  accountHolder?: z.infer<typeof AccountHolderSchema>
  balancePlatform?: string
}

const AccountHolderNotificationDataSchema: z.ZodType<AccountHolderNotificationDataType> = z
  .strictObject({
    accountHolder: AccountHolderSchema.exactOptional().openapi({
      description:
        'Contains information about the account holder resource that triggered the event.',
    }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountHolderNotificationData')

type AccountHolderNotificationRequestType = {
  data: z.infer<typeof AccountHolderNotificationDataSchema>
  environment: string
  timestamp?: string
  type: 'balancePlatform.accountHolder.updated' | 'balancePlatform.accountHolder.created'
}

const AccountHolderNotificationRequestSchema: z.ZodType<AccountHolderNotificationRequestType> = z
  .strictObject({
    data: AccountHolderNotificationDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .enum(['balancePlatform.accountHolder.updated', 'balancePlatform.accountHolder.created'])
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('AccountHolderNotificationRequest')

const AccountPayoutAutoApplicationWebhookDataSchema = z
  .strictObject({
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the balance account to which the payout schedule was unsuccessfully applied.',
      }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    balancePlatformPayoutScheduleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the balance platform payout schedule that was unsuccessfully applied to the balance account.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason why the payout schedule could not be applied.' }),
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the transfer instrument linked to the balance account. This transfer instrument is the counterparty account for the payout schedule that was unsuccessfully applied.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountPayoutAutoApplicationWebhookData')

const AccountPayoutAutoApplicationNotificationRequestSchema = z
  .strictObject({
    data: AccountPayoutAutoApplicationWebhookDataSchema.openapi({
      description: 'Contains event details.',
    }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .literal('balancePlatform.balanceAccountPayoutScheduleAutoApplication.failed')
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('AccountPayoutAutoApplicationNotificationRequest')

const AccountPayoutConfigWebhookDataSchema = z
  .strictObject({
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the balance account to which the payout schedule was applied.',
      }),
    balanceAccountPayoutScheduleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the balance platform payout schedule that was applied to the balance account.',
      }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The three-character [ISO code](https://docs.adyen.com/development-resources/currency-codes) of the currency used for this schedule.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The description used for all payouts initiated by this payout schedule.\n\nMaximum length: 140 characters. If your description is longer, it may be truncated.',
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Specifies whether the payout schedule is active.' }),
    frequency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The frequency of payouts initiated by this payout schedule.\n\nPossible values:\n* daily\n* weekdays\n* weekly\n* monthly\n\n',
      }),
    frequencyValue: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The date of the month or day of the week when payouts are initiated. Allowed only if `frequency` is **monthly** or **weekly**.\n\nPossible values if `frequency` is **monthly**: **[1 - 31]**.\n* If your specified date happens on a weekend, the payout is initiated on the next business day.\n* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated on the last day of that month.\n\nPossible values if `frequency` is **weekly**: **[1 - 5]**.',
      }),
    maxPayoutAmount: z
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
          'The maximum amount that can be paid out from balance accounts that use this payout schedule.',
      }),
    minPayoutAmount: z
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
          'The minimum amount that can be paid out from balance accounts that use this payout schedule.',
      }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your internal reference of the payout schedule.' }),
    referenceForBeneficiary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reference for beneficiary used for all payouts initiated by this payout schedule. This reference is sent to the recipient of the transfer and is included in all webhooks related to the payout.\n\nSupported characters: **a-z**, **A-Z**, **0-9**, **-** and space. Spaces might be replaced with **-** if the recipient bank or payment infrastructure does not allow spaces.',
      }),
    retainedAmount: z
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
          'The amount of funds that must remain available in the balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.',
      }),
    salesDayClosingTime: z
      .string()
      .regex(
        /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
      )
      .regex(/HH:mm:SS/)
      .exactOptional()
      .openapi({
        format: 'time',
        description:
          'The time of day when the sales day is closed in balance account time zone. The sales day closing time can be between 00:00 to 07:00.\n\nFormat: **HH:mm:SS**',
      }),
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the transfer instrument to which the funds are paid out.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountPayoutConfigWebhookData')

const AuthenticationSchema = z
  .strictObject({
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address where the one-time password (OTP) is sent.' }),
    password: z
      .string()
      .min(1)
      .max(30)
      .exactOptional()
      .openapi({
        description:
          'The password used for 3D Secure password-based authentication. The value must be between 1 to 30 characters and must only contain the following supported characters.\n\n* Characters between **a-z**, **A-Z**, and **0-9**\n\n* Special characters: **äöüßÄÖÜ+-*/ç%()=?!~#\'",;:$&àùòâôûáúó**',
      }),
    phone: PhoneSchema.exactOptional().openapi({
      description:
        'The phone number where the one-time password (OTP) is sent.\n\nThis object must have:\n\n* A `type` set to **mobile**.\n\n* A `number` with a valid country code.\n\n* A `number` with more than 4 digits, excluding the country code.\n\n>Make sure to verify that the card user owns the phone number.',
    }),
  })
  .openapi({ required: [] })
  .openapi('Authentication')

const BalanceSchema = z
  .strictObject({
    available: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'The balance available for use.' }),
    balance: z
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
        description: 'The sum of the transactions that have already been settled.',
      }),
    currency: z
      .string()
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.',
      }),
    pending: z
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
        description: 'The sum of the transactions that will be settled in the future.',
      }),
    pendingAvailable: z
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
          'The balance that will become the available balance after the pending balance is settled.\n\nThe pending available balance is equal to the lower of the following:\n- The `pending` balance\n- The `pending` balance plus the `available` balance.',
      }),
    reserved: z
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
        description: 'The balance currently held in reserve.',
      }),
  })
  .openapi({ required: ['available', 'balance', 'currency', 'reserved'] })
  .openapi('Balance')

const PlatformPaymentConfigurationSchema = z
  .strictObject({
    salesDayClosingTime: z
      .string()
      .regex(
        /^(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d+)?)?(?:Z|[+-](?:[01]\d|2[0-3]):[0-5]\d)?$/,
      )
      .exactOptional()
      .openapi({
        format: 'time',
        description:
          'Specifies at what time a sales day ends for this account.\n\nPossible values: Time in **"HH:MM"** format. **HH** ranges from **00** to **07**. **MM** must be **00**.\n\nDefault value: **"00:00"**.',
      }),
    settlementDelayDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Specifies after how many business days the funds in a settlement batch are made available in this balance account. Requires Custom Sales Day Payout to be enabled for your balance account. Contact your account manager or implementation manager to enable this.\n\nPossible values: **1** to **20**, or **null**.\n\nDefault value: **null**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PlatformPaymentConfiguration')

const BalanceAccountSchema = z
  .strictObject({
    accountHolderId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders#responses-200-id) associated with the balance account.',
      }),
    balances: z
      .array(BalanceSchema)
      .exactOptional()
      .openapi({ description: 'List of balances with the amount and currency.' }),
    defaultCurrencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The default three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance account. This is the currency displayed on the Balance Account overview page in your Customer Area.\nThe default value is **EUR**.\n> After a balance account is created, you cannot change its default currency.',
      }),
    description: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description:
          'A human-readable description of the balance account, maximum 300 characters. You can use this parameter to distinguish between multiple balance accounts under an account holder.',
      }),
    id: z.string().openapi({ description: 'The unique identifier of the balance account.' }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of key and value pairs for general use.\nThe keys do not have specific names and may be used for storing miscellaneous data as desired.\n> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.',
      }),
    migratedAccountCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the account of the migrated account holder in the classic integration.',
      }),
    platformPaymentConfiguration: PlatformPaymentConfigurationSchema.exactOptional().openapi({
      description:
        'Contains key-value pairs to configure the sales day closing time and settlement delay for a balance account.',
    }),
    reference: z
      .string()
      .max(150)
      .exactOptional()
      .openapi({ description: 'Your reference for the balance account, maximum 150 characters.' }),
    status: z
      .enum(['active', 'closed', 'inactive', 'suspended'])
      .exactOptional()
      .openapi({
        description: 'The status of the balance account, set to **active** by default. \n',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time zone of the balance account. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).',
      }),
  })
  .openapi({ required: ['accountHolderId', 'id'] })
  .openapi('BalanceAccount')

const BalanceAccountNotificationDataSchema = z
  .strictObject({
    balanceAccount: BalanceAccountSchema.exactOptional(),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
  })
  .openapi({ required: [] })
  .openapi('BalanceAccountNotificationData')

const BalanceAccountNotificationRequestSchema = z
  .strictObject({
    data: BalanceAccountNotificationDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .enum(['balancePlatform.balanceAccount.updated', 'balancePlatform.balanceAccount.created'])
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('BalanceAccountNotificationRequest')

const BalancePlatformNotificationResponseSchema = z
  .strictObject({
    notificationResponse: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Respond with any **2xx** HTTP status code to [accept the webhook](https://docs.adyen.com/development-resources/webhooks/#accept-webhooks).',
      }),
  })
  .openapi({ required: [] })
  .openapi('BalancePlatformNotificationResponse')

const BankAccountDetailsSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank account number, without separators or whitespace.' }),
    accountType: z
      .string()
      .default('checking')
      .exactOptional()
      .openapi({
        description:
          'The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.',
      }),
    branchNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank account branch number, without separators or whitespace' }),
    formFactor: z
      .string()
      .default('physical')
      .exactOptional()
      .openapi({
        description:
          'Business accounts with a `formFactor` value of **physical** are business accounts issued under the central bank of that country. The default value is **physical** for NL, US, and UK business accounts. \n\nAdyen creates a local IBAN for business accounts when the `formFactor` value is set to **virtual**. The local IBANs that are supported are for DE and FR, which reference a physical NL account, with funds being routed through the central bank of NL.',
      }),
    iban: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.',
      }),
    routingNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.',
      }),
    sortCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.',
      }),
    type: z
      .string()
      .default('iban')
      .openapi({ description: '**iban** or **usLocal** or **ukLocal**' }),
  })
  .openapi({ required: ['type'] })
  .openapi('BankAccountDetails')

const ResourceReferenceSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the resource.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the resource.' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference for the resource.' }),
  })
  .openapi({ required: [] })
  .openapi('ResourceReference')

const BankScoreSignalTriggeredDataSchema = z
  .strictObject({
    accountHolder: ResourceReferenceSchema.exactOptional().openapi({
      description: 'Contains information about the account holder.',
    }),
    accountHolderStatus: z
      .string()
      .exactOptional()
      .openapi({ description: 'The status of the account holder.' }),
    automatedActions: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The automated action(s) taken as a result of the score signals that were triggered.',
      }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
    riskScore: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The score of the identity resulting from the signal(s) that were triggered.',
      }),
    scoreSignalsTriggered: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The name(s) of the score signals that were triggered.' }),
    signalSourceTypes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The type(s) of the score signals that were triggered.' }),
  })
  .openapi({ required: [] })
  .openapi('BankScoreSignalTriggeredData')

const BulkAddressSchema = z
  .strictObject({
    city: z.string().exactOptional().openapi({ description: 'The name of the city.' }),
    company: z.string().exactOptional().openapi({ description: 'The name of the company.' }),
    country: z
      .string()
      .openapi({
        description: 'The two-character ISO-3166-1 alpha-2 country code. For example, **US**.',
      }),
    email: z.string().exactOptional().openapi({ description: 'The email address.' }),
    houseNumberOrName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The house number or name.' }),
    line1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the street and the number of the building.\n\nFor example: **Simon Carmiggeltstraat 6-50**.',
        'x-addedInVersion': '2',
      }),
    line2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional information about the delivery address. For example, an apartment number.',
        'x-addedInVersion': '2',
      }),
    line3: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Additional information about the delivery address.',
        'x-addedInVersion': '2',
      }),
    mobile: z.string().exactOptional().openapi({ description: 'The full telephone number.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The recipient’s name (person or contact), for example ‘John Doe’.',
        'x-addedInVersion': '2',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The postal code.\n\nMaximum length:\n\n* 5 digits for addresses in the US.\n\n* 10 characters for all other countries.',
      }),
    stateOrProvince: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-letter ISO 3166-2 state or province code.\n\nMaximum length: 2 characters for addresses in the US.',
      }),
    street: z.string().exactOptional().openapi({ description: 'The streetname of the house.' }),
  })
  .openapi({ required: ['country'] })
  .openapi('BulkAddress')

const CardConfigurationSchema = z
  .strictObject({
    activation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The activation label attached to the card that contains the activation instructions.\n\nThis field overrides the activation label design ID defined in the card configuration profile.',
      }),
    activationUrl: z
      .string()
      .max(255)
      .exactOptional()
      .openapi({
        description:
          "Your app's URL, if you want to activate cards through your app. For example, **my-app://ref1236a7d**. A QR code is created based on this URL, and is included in the carrier. Before you use this field, reach out to your Adyen contact to set up the QR code process. \n\nMaximum length: 255 characters.",
      }),
    bulkAddress: BulkAddressSchema.exactOptional().openapi({
      description: 'Overrides the shipment bulk address defined in the card configuration profile.',
    }),
    cardImageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the card image. This image is printed on the full front of the card.',
      }),
    carrier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The letter or packaging to which the card is attached.\n\nThis field overrides the carrier design ID defined in the card configuration profile. ',
      }),
    carrierImageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the carrier image. This image is printed on the letter to which the card is attached.',
      }),
    configurationProfileId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the card configuration profile that contains the settings that are applied to the card. For example, the envelope and PIN mailer designs or the logistics company handling the shipment.\n\nYou can override some of the existing settings in the configuration profile by providing the corresponding fields in the `configuration` object. For example, send the `shipmentMethod` to override the logistics company defined in the card configuration profile.',
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The three-letter [ISO-4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the card. For example, **EUR**.\n\nThis field overrides the existing currency setting on the card configuration profile.',
      }),
    envelope: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Overrides the envelope design ID defined in the card configuration profile. ',
      }),
    insert: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Any additional material, such as marketing material, that is shipped together with the card.\n\nThis field overrides the insert design ID defined in the card configuration profile.',
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-letter [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code of the card. For example, **en**.',
      }),
    logoImageId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the logo image. This image is printed on the partial front of the card, for example, a logo on the upper right corner.',
      }),
    pinMailer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The letter on which the PIN of the card is printed.\n\nThis field overrides the PIN mailer design ID defined in the card configuration profile.',
      }),
    printLine: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Print Line.\n\nText printed on the physical card below the cardholder name. You provide the value, which can be up to 26 characters.',
      }),
    shipmentMethod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The logistics company that ships the card.\n\nThis field overrides the logistics company defined in the card configuration profile.',
      }),
  })
  .openapi({ required: ['configurationProfileId'] })
  .openapi('CardConfiguration')

const DeliveryAddressSchema = z
  .strictObject({
    city: z.string().exactOptional().openapi({ description: 'The name of the city.' }),
    country: z
      .string()
      .openapi({
        description:
          "The two-character ISO-3166-1 alpha-2 country code. For example, **US**.\n>If you don't know the country or are not collecting the country from the shopper, provide `country` as `ZZ`.",
      }),
    line1: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the street. Do not include the number of the building.\n\nFor example, if the address is Simon Carmiggeltstraat 6-50, provide **Simon Carmiggeltstraat**.',
      }),
    line2: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of the building.\n\nFor example, if the address is Simon Carmiggeltstraat 6-50, provide **6-50**.',
      }),
    line3: z
      .string()
      .exactOptional()
      .openapi({ description: 'Additional information about the delivery address.' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The postal code.\nMaximum length:\n* 5 digits for an address in the US.\n* 10 characters for an address in all other countries.',
      }),
    stateOrProvince: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The state or province code, maximum 3 characters. For example, **CA** for California in the US or **ON** for Ontario in Canada.\n> Required for the US and Canada.',
      }),
  })
  .openapi({ required: ['country'] })
  .openapi('DeliveryAddress')

const NameSchema = z
  .strictObject({
    firstName: z.string().max(80).openapi({ description: 'The first name.' }),
    lastName: z.string().max(80).openapi({ description: 'The last name.' }),
  })
  .openapi({ required: ['firstName', 'lastName'] })
  .openapi('Name')

const PhoneNumberSchema = z
  .strictObject({
    phoneCountryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-character ISO-3166-1 alpha-2 country code of the phone number.\nFor example, **US** or **NL**.',
      }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The phone number.\nThe inclusion of the phone number country code is not necessary.',
      }),
    phoneType: z
      .enum(['Fax', 'Landline', 'Mobile', 'SIP'])
      .exactOptional()
      .openapi({
        description:
          'The type of the phone number.\nPossible values: **Landline**, **Mobile**, **SIP**, **Fax**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PhoneNumber')

const DeliveryContactSchema = z
  .strictObject({
    address: DeliveryAddressSchema.openapi({ description: 'The address of the contact.' }),
    company: z
      .string()
      .exactOptional()
      .openapi({ description: 'The company name of the contact.', 'x-addedInVersion': '2' }),
    email: z.string().exactOptional().openapi({ description: 'The email address of the contact.' }),
    fullPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full phone number of the contact provided as a single string. It will be handled as a landline phone.\n**Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"',
      }),
    name: NameSchema.openapi({ description: 'The name of the contact.' }),
    phoneNumber: PhoneNumberSchema.exactOptional().openapi({
      description: 'The phone number of the contact.',
    }),
    webAddress: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of the contact's website." }),
  })
  .openapi({ required: ['address', 'name'] })
  .openapi('DeliveryContact')

const ExpirySchema = z
  .strictObject({
    month: z
      .string()
      .exactOptional()
      .openapi({ description: 'The month in which the card will expire.' }),
    year: z
      .string()
      .exactOptional()
      .openapi({ description: 'The year in which the card will expire.' }),
  })
  .openapi({ required: [] })
  .openapi('Expiry')

const CardSchema = z
  .strictObject({
    authentication: AuthenticationSchema.exactOptional().openapi({
      description:
        "Contains the card user's password and mobile phone number. This is required when you issue cards that can be used to make online payments within the EEA and the UK, or can be added to digital wallets. Refer to [3D Secure and digital wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information.",
    }),
    bin: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank identification number (BIN) of the card number.' }),
    brand: z
      .string()
      .openapi({
        description:
          'The brand of the physical or the virtual card.\nPossible values: **visa**, **mc**.',
      }),
    brandVariant: z
      .string()
      .openapi({
        description:
          'The brand variant of the physical or the virtual card. For example, **visadebit** or **mcprepaid**.\n>Reach out to your Adyen contact to get the values relevant for your integration.',
      }),
    cardholderName: z
      .string()
      .max(26)
      .openapi({ description: 'The name of the cardholder.\n Maximum length: 26 characters.' }),
    configuration: CardConfigurationSchema.exactOptional().openapi({
      description:
        'Contains information about the configuration profile for your cards. The configuration profile consists of settings required when creating a physical or a virtual card. You identify a configuration profile with its `configurationProfileId`.\n\nWhen you provide this field in a request, you can override the settings of an existing configuration profile.\n\nReach out to your Adyen contact to get the values that you can send in this object.',
    }),
    cvc: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The CVC2 value of the card.\n> The CVC2 is not sent by default. This is only returned in the `POST` response for single-use virtual cards.',
      }),
    deliveryContact: DeliveryContactSchema.exactOptional().openapi({
      description: 'The delivery contact (name and address) for physical card delivery.',
      'x-addedInVersion': '2',
    }),
    expiration: ExpirySchema.exactOptional().openapi({
      description: 'The expiration date of the card.',
    }),
    formFactor: z
      .enum(['physical', 'unknown', 'virtual'])
      .openapi({
        description: 'The form factor of the card.\nPossible values: **virtual**, **physical**.',
      }),
    lastFour: z
      .string()
      .exactOptional()
      .openapi({ description: 'Last last four digits of the card number.' }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The primary account number (PAN) of the card.\n> The PAN is masked by default and returned only for single-use virtual cards.',
      }),
    threeDSecure: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The 3DS configuration of the physical or the virtual card. Possible values: **fullySupported**, **secureCorporate**.\n> Reach out to your Adyen contact to get the values relevant for your integration.',
      }),
    usage: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies how many times the card can be used. Possible values: **singleUse**, **multiUse**.\n\n> Reach out to your Adyen contact to determine the value relevant for your integration.',
      }),
  })
  .openapi({ required: ['brand', 'brandVariant', 'cardholderName', 'formFactor'] })
  .openapi('Card')

const CardOrderItemDeliveryStatusSchema = z
  .strictObject({
    errorMessage: z.string().exactOptional().openapi({ description: 'An error message.' }),
    status: z
      .enum([
        'created',
        'delivered',
        'notApplicable',
        'processing',
        'produced',
        'rejected',
        'shipped',
        'unknown',
      ])
      .exactOptional()
      .openapi({ description: 'The status of the PIN delivery.' }),
    trackingNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tracking number of the PIN delivery.' }),
  })
  .openapi({ required: [] })
  .openapi('CardOrderItemDeliveryStatus')

const CardOrderItemSchema = z
  .strictObject({
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    card: CardOrderItemDeliveryStatusSchema.exactOptional().openapi({
      description:
        'The status of the card delivery.\n\nPossible values: **created**, **rejected**, **processing**, **produced**, **shipped**, **delivered**, **notApplicable**, **unknown**. ',
    }),
    cardOrderItemId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the card order item.' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
    paymentInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the payment instrument related to the card order item.',
      }),
    pin: CardOrderItemDeliveryStatusSchema.exactOptional().openapi({
      description: 'Contains information about the status of the PIN delivery.',
    }),
    shippingMethod: z
      .string()
      .exactOptional()
      .openapi({ description: 'The shipping method used to deliver the card or the PIN.' }),
  })
  .openapi({ required: [] })
  .openapi('CardOrderItem')

const CardOrderNotificationRequestSchema = z
  .strictObject({
    data: CardOrderItemSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .enum(['balancePlatform.cardorder.created', 'balancePlatform.cardorder.updated'])
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('CardOrderNotificationRequest')

const DeviceSchema = z
  .strictObject({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the device used for provisioning the network token.',
        'x-addedInVersion': '2',
      }),
    formFactor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of the device used for provisioning the network token.\n\nFor example, **phone**, **mobile_phone**, **watch**, **mobilephone_or_tablet**, etc',
      }),
    osName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The operating system of the device used for provisioning the network token.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Device')

const IbanAccountIdentificationSchema = z
  .strictObject({
    bic: z
      .string()
      .exactOptional()
      .openapi({ description: "The bank's 8- or 11-character BIC or SWIFT code." }),
    iban: z
      .string()
      .openapi({
        description:
          'The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.',
      }),
    type: z.literal('iban').default('iban').openapi({ description: '**iban**' }),
  })
  .openapi({ required: ['iban', 'type'] })
  .openapi('IbanAccountIdentification')

const MandatePartyIdentificationSchema = z
  .strictObject({
    fullName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The full name of the entity that owns the bank account.\n\nSupported characters: [a-z] [A-Z] [0-9] , . ; : - — / \\ + & ! ? @ ( ) " \' and space.',
      }),
  })
  .openapi({ required: [] })
  .openapi('MandatePartyIdentification')

const UKLocalMandateAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .length(8)
      .openapi({
        description: 'The 8-digit bank account number, without separators or whitespace.',
      }),
    sortCode: z
      .string()
      .length(6)
      .openapi({
        description:
          'The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.',
      }),
    type: z.literal('ukLocal').default('ukLocal').openapi({ description: '**ukLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'sortCode', 'type'] })
  .openapi('UKLocalMandateAccountIdentification')

const MandateBankAccountSchema = z
  .strictObject({
    accountHolder: MandatePartyIdentificationSchema.openapi({
      description: 'Contains information about the owner of the counterparty bank account.',
    }),
    accountIdentification: z
      .xor([UKLocalMandateAccountIdentificationSchema])
      .openapi({
        description:
          'Contains the bank account details of the counterparty. The fields required in this object depend on the country of the bank account and the currency of the transfer.',
        discriminator: {
          propertyName: 'type',
          mapping: { ukLocal: '#/components/schemas/UKLocalMandateAccountIdentification' },
        },
      }),
  })
  .openapi({ required: ['accountHolder', 'accountIdentification'] })
  .openapi('MandateBankAccount')

const MandateSchema = z
  .strictObject({
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the balance account linked to the payment instrument.',
      }),
    counterparty: MandateBankAccountSchema.exactOptional().openapi({
      description: 'Contains information to identify the counterparty.',
    }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the mandate was created.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the mandate.' }),
    paymentInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the payment instrument linked to the mandate.',
      }),
    status: z
      .enum(['approved', 'cancelled', 'pending'])
      .exactOptional()
      .openapi({
        description:
          'The status of the mandate.\n\nPossible values: **pending**, **approved**, **cancelled**.',
      }),
    type: z
      .literal('bacs')
      .exactOptional()
      .openapi({ description: 'The type of mandate. Possible value: **bacs**.' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the mandate was updated.' }),
  })
  .openapi({ required: [] })
  .openapi('Mandate')

const MandateNotificationDataSchema = z
  .strictObject({
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    mandate: MandateSchema.exactOptional().openapi({
      description: 'Contains information about the mandate that triggered the event.',
    }),
  })
  .openapi({ required: [] })
  .openapi('MandateNotificationData')

const MandateNotificationRequestSchema = z
  .strictObject({
    data: MandateNotificationDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .enum(['balancePlatform.mandate.created', 'balancePlatform.mandate.updated'])
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('MandateNotificationRequest')

const TokenAuthenticationSchema = z
  .strictObject({
    method: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The method used to complete the authentication process.\n\nPossible values: **sms_OTP**, **email_OTP**.',
      }),
    result: z
      .string()
      .exactOptional()
      .openapi({ description: 'The result of the authentication process.' }),
  })
  .openapi({ required: [] })
  .openapi('TokenAuthentication')

const NetworkTokenRequestorSchema = z
  .strictObject({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the network token requestor.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the network token requestor.' }),
  })
  .openapi({ required: [] })
  .openapi('NetworkTokenRequestor')

const NetworkTokenRiskRuleDataSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the transaction rule.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the transaction rule.' }),
    outcomeType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The outcome type of the transaction rule.' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference for the transaction rule.' }),
    score: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The transaction score determined by the rule.' }),
  })
  .openapi({ required: [] })
  .openapi('NetworkTokenRiskRuleData')

const NetworkTokenRiskRuleSourceSchema = z
  .strictObject({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the resource to which the transaction rule applies.',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates the type of resource for which the transaction rule is defined.\n\nPossible values:\n\n * **PaymentInstrumentGroup**\n\n* **PaymentInstrument**\n\n* **BalancePlatform**\n\n* **EntityUsageConfiguration**\n\n* **PlatformRule**: The transaction rule is a platform-wide rule imposed by Adyen.',
      }),
  })
  .openapi({ required: [] })
  .openapi('NetworkTokenRiskRuleSource')

const NetworkTokenTriggeredRiskRuleSchema = z
  .strictObject({
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'Explains why the transaction rule failed.' }),
    transactionRule: NetworkTokenRiskRuleDataSchema.exactOptional().openapi({
      description: 'Contains information about the transaction rule.',
    }),
    transactionRuleSource: NetworkTokenRiskRuleSourceSchema.exactOptional().openapi({
      description: 'Contains information about the resource to which the transaction rule applies.',
    }),
  })
  .openapi({ required: [] })
  .openapi('NetworkTokenTriggeredRiskRule')

const NetworkTokenTransactionRulesResultSchema = z
  .strictObject({
    advice: z
      .string()
      .exactOptional()
      .openapi({ description: 'The advice given by the Risk analysis.' }),
    allHardBlockRulesPassed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the transaction passed all rules with `outcomeType` **hardBlock**.',
      }),
    score: z.int32().exactOptional().openapi({ description: 'The score of the Risk analysis.' }),
    triggeredTransactionRules: z
      .array(NetworkTokenTriggeredRiskRuleSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains a list of all triggered transaction rules and the corresponding data.',
      }),
  })
  .openapi({ required: [] })
  .openapi('NetworkTokenTransactionRulesResult')

const ValidationFactsSchema = z
  .strictObject({
    reasons: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The reason for the `result` of the validations.\n\nThis field is only sent for `validationFacts.type` **walletValidation**, when `validationFacts.result` is **invalid**.',
      }),
    result: z
      .enum(['invalid', 'notApplicable', 'notValidated', 'valid'])
      .exactOptional()
      .openapi({
        description:
          'The evaluation result of the validation facts.\n\nPossible values: **valid**, **invalid**, **notValidated**, **notApplicable**.',
      }),
    type: z.string().exactOptional().openapi({ description: 'The type of the validation fact.' }),
  })
  .openapi({ required: [] })
  .openapi('ValidationFacts')

const WalletSchema = z
  .strictObject({
    accountScore: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The confidence score of the wallet account, calculated by the wallet provider.\n\nA high score means that account is considered trustworthy. A low score means that the account is considered suspicious.\n\nPossible values: **1** to **5**.',
      }),
    device: DeviceSchema.exactOptional().openapi({
      description: 'Contains information about the device used for provisioning the network token.',
    }),
    deviceScore: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The confidence score of the device, calculated by the wallet provider.\n\nA high score means that device is considered trustworthy. A low score means that the device is considered suspicious.\n\nPossible values: **1** to **5**.',
      }),
    provisioningMethod: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The method used for provisioning the network token.\n\nPossible values: **push**, **manual**, **cof**, **unknown**.',
      }),
    recommendationReasons: z
      .array(
        z.enum([
          'accountCardTooNew',
          'accountHighRisk',
          'accountRecentlyChanged',
          'accountTooNew',
          'accountTooNewSinceLaunch',
          'cardholderPanAssociatedToAccountWithinThresholdDays',
          'changesMadeToAccountDataWithinThresholdDays',
          'deviceProvisioningLocationOutsideOfCardholdersWalletAccountHomeCountry',
          'deviceRecentlyLost',
          'encryptedPaymentInstrumentDataIsBeingPushedByTheIssuerToTheSameDeviceThatIssuerApplicationAuthenticatedButWithSuccessfulUpfrontAuthentication',
          'encryptedPaymentInstrumentDataIsBeingPushedByTheIssuerToTheSameDeviceThatIssuerApplicationAuthenticatedButWithoutAnyUpfrontAuthentication',
          'encryptedPaymentInstrumentDataIsPushedToADifferentDeviceThanTheOneThatIssuerApplicationAuthenticated',
          'encryptedPaymentInstrumentDataIsPushedToADifferentUserThanTheCardHolder',
          'hasSuspendedTokens',
          'inactiveAccount',
          'issuerDeferredIDVDecision',
          'issuerEncryptedPaymentInstrumentDataExpired',
          'lowAccountScore',
          'lowDeviceScore',
          'lowPhoneNumberScore',
          'numberOfActiveTokensGreaterThanThreshold',
          'numberOfActiveTokensOnAllDevicesIsGreaterThanThreshold',
          'numberOfDaysSinceDeviceWasLastReportedLostIsLessThanThresholdDays',
          'numberOfDevicesWithSameUseridWithTokenIsGreaterThanThreshold',
          'numberOfTransactionsInLast12MonthsLessThanThresholdNumber',
          'outSideHomeTerritory',
          'suspendedCardsInTheWALLETAccountIsGreaterThanThreshold',
          'suspiciousActivity',
          'theNumberOfProvisioningAttemptsAcrossAllCardsOnThisDeviceInTheLast24HoursExceedsTheThreshold',
          'theWALLETAccountIntoWhichTheCardIsBeingProvisionedContainDistinctNamesGreaterThanThreshold',
          'thisAccountHasNotHadActivityWithinThresholdPeriod',
          'tooManyDifferentCardholders',
          'tooManyRecentAttempts',
          'tooManyRecentTokens',
          'unableToAssess',
          'unknown',
          'userAccountWasCreatedWithinThresholdDays',
          'userDeviceReceivingEncryptedPaymentInstrumentDataIsDifferentThanTheOneThatIsProvisioningTheToken',
          'usersAccountOnDeviceLessThanThresholdDays',
          'walletAccountCreatedWithinThresholdDays',
          'walletAccountHolderNameOnFileDoesNotMatchCardholderEnteredName',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of risk indicators triggered at the time of provisioning the network token.\n\nSome example values of risk indicators are:\n\n* **accountTooNewSinceLaunch**\n* **tooManyRecentAttempts**\n* **lowDeviceScore**\n* **lowAccountScore**\n',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The type of wallet that the network token is associated with.\n\nPossible values: **applePay**, **googlePay**, **garminPay**.',
        'x-deprecatedInVersion': '2',
        'x-deprecatedMessage': 'Use name of the `tokenRequestor` instead.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Wallet')

const NetworkTokenNotificationDataV2Schema = z
  .strictObject({
    authentication: TokenAuthenticationSchema.exactOptional().openapi({
      description:
        'Contains information about the authentication process triggered during token provisioning.',
    }),
    authenticationApplied: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether the authentication process was triggered during token provisioning.',
      }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    decision: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The decision about the network token provisioning.\n\nPossible values: **approved**, **declined**, **requiresAuthentication**.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the network token.' }),
    paymentInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the payment instrument to which the network token is associated.',
      }),
    schemeRiskScore: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The confidence score of scheme, indicating the degree of risk associated with a token.\n\nA high score indicates a high level of risk. A low score indicates a low level of risk.\n\nPossible values for visa : **00** to **99**, a value of 00 signifies no score was provided by visa',
        'x-addedInVersion': '2',
      }),
    status: z.string().exactOptional().openapi({ description: 'The status of the network token.' }),
    tokenLastFour: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last four digits of the network token. Use this value to help your user to identify their network token.',
      }),
    tokenRequestor: NetworkTokenRequestorSchema.exactOptional().openapi({
      description:
        'Contains information about the entity or organization that is requesting the network token.',
      'x-addedInVersion': '2',
    }),
    transactionRulesResult: NetworkTokenTransactionRulesResultSchema.exactOptional().openapi({
      description:
        'Contains the results of the evaluation of the transaction rules that apply to network token creation.',
      'x-addedInVersion': '2',
    }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The type of network token.\n\nPossible values: **wallet**, **cof**.',
      }),
    validationFacts: z
      .array(ValidationFactsSchema)
      .exactOptional()
      .openapi({
        description: 'The rules used to validate the request for provisioning the network token.',
      }),
    wallet: WalletSchema.exactOptional().openapi({
      description:
        'Contains information about the wallet for which the network token is provisioned.\n\nReturned only when `type` is **wallet**.',
    }),
  })
  .openapi({ required: [] })
  .openapi('NetworkTokenNotificationDataV2')

const NetworkTokenNotificationRequestSchema = z
  .strictObject({
    data: NetworkTokenNotificationDataV2Schema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .enum(['balancePlatform.networkToken.created', 'balancePlatform.networkToken.updated'])
      .openapi({ description: 'The type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('NetworkTokenNotificationRequest')

const PaymentInstrumentSchema = z
  .strictObject({
    additionalBankAccountIdentifications: z
      .array(
        z
          .xor([IbanAccountIdentificationSchema])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: { iban: '#/components/schemas/IbanAccountIdentification' },
            },
          }),
      )
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'Contains optional, additional business account details. Returned when you create a payment instrument with `type` **bankAccount**.',
        'x-deprecatedInVersion': '2',
        'x-deprecatedMessage': 'Please use `bankAccount` object instead',
      }),
    balanceAccountId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.',
      }),
    bankAccount: BankAccountDetailsSchema.exactOptional().openapi({
      description:
        'Contains the business account details. Returned when you create a payment instrument with `type` **bankAccount**.',
    }),
    card: CardSchema.exactOptional().openapi({
      description:
        'Contains information about the card payment instrument. Returned when you create a payment instrument with `type` **card**.',
    }),
    description: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description: 'Your description for the payment instrument, maximum 300 characters.',
      }),
    id: z.string().openapi({ description: 'The unique identifier of the payment instrument.' }),
    issuingCountryCode: z
      .string()
      .openapi({
        description:
          'The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.',
      }),
    paymentInstrumentGroupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the [payment instrument group](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/paymentInstrumentGroups__resParam_id) to which the payment instrument belongs.',
      }),
    reference: z
      .string()
      .max(150)
      .exactOptional()
      .openapi({
        description: 'Your reference for the payment instrument, maximum 150 characters.',
      }),
    replacedById: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the payment instrument that replaced this payment instrument.',
      }),
    replacementOfId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the payment instrument that is replaced by this payment instrument.',
      }),
    status: z
      .enum(['active', 'closed', 'inactive', 'suspended'])
      .exactOptional()
      .openapi({
        description:
          'The status of the payment instrument. If a status is not specified when creating a payment instrument, it is set to **active** by default. However, there can be exceptions for cards based on the `card.formFactor` and the `issuingCountryCode`. For example, when issuing physical cards in the US, the default status is **inactive**.\n\nPossible values: \n\n * **active**:  The payment instrument is active and can be used to make payments. \n\n * **inactive**: The payment instrument is inactive and cannot be used to make payments. \n\n * **suspended**: The payment instrument is suspended, either because it was stolen or lost. \n\n * **closed**: The payment instrument is permanently closed. This action cannot be undone. \n\n',
      }),
    statusComment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status comment provides additional information for the statusReason of the payment instrument.',
        'x-addedInVersion': '2',
      }),
    statusReason: z
      .enum([
        'accountClosure',
        'damaged',
        'endOfLife',
        'expired',
        'lost',
        'other',
        'stolen',
        'suspectedFraud',
        'transactionRule',
      ])
      .exactOptional()
      .openapi({
        description:
          'The reason for the status of the payment instrument.\n\nPossible values: **accountClosure**, **damaged**, **endOfLife**, **expired**, **lost**, **stolen**, **suspectedFraud**, **transactionRule**, **other**.\nIf the reason is **other**, you must also send the `statusComment` parameter describing the status change.',
        'x-addedInVersion': '2',
      }),
    type: z
      .enum(['bankAccount', 'card'])
      .openapi({
        description:
          'The type of payment instrument.\n\nPossible values: **card**, **bankAccount**.',
      }),
  })
  .openapi({ required: ['balanceAccountId', 'id', 'issuingCountryCode', 'type'] })
  .openapi('PaymentInstrument')

const PaymentInstrumentNotificationDataSchema = z
  .strictObject({
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    paymentInstrument: PaymentInstrumentSchema.exactOptional().openapi({
      description:
        'Contains information about the payment instrument resource that triggered the event.',
    }),
  })
  .openapi({ required: [] })
  .openapi('PaymentInstrumentNotificationData')

const PaymentNotificationRequestSchema = z
  .strictObject({
    data: PaymentInstrumentNotificationDataSchema.openapi({
      description: 'Contains event details.',
    }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .enum([
        'balancePlatform.paymentInstrument.created',
        'balancePlatform.paymentInstrument.updated',
      ])
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('PaymentNotificationRequest')

const PayoutScheduleBANotificationRequestSchema = z
  .strictObject({
    data: AccountPayoutConfigWebhookDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .enum([
        'balancePlatform.balanceAccountPayoutSchedule.created',
        'balancePlatform.balanceAccountPayoutSchedule.updated',
        'balancePlatform.balanceAccountPayoutSchedule.deleted',
      ])
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('PayoutScheduleBANotificationRequest')

const PlatformPayoutConfigWebhookDataSchema = z
  .strictObject({
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    balancePlatformPayoutScheduleId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the balance platform payout schedule that is applied to the balance account.',
      }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country to which the payout schedule applies.',
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The three-character [ISO code](https://docs.adyen.com/development-resources/currency-codes) of the currency used for the payout schedule.',
      }),
    defaultDescription: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The default description for payouts initiated by this payout schedule.',
      }),
    defaultFrequency: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The default frequency of payouts initiated by this payout schedule.',
      }),
    defaultFrequencyValue: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The default value for date of the month or day of the week when payouts are initiated. Allowed only if `defaultFrequency` is **monthly** or **weekly**.\n\nPossible values if `frequency` is **monthly**: **[1 - 31]**.\n* If your specified date happens on a weekend, the payout is initiated on the next business day.\n* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated  on the last day of that month.\n\nPossible values if `defaultFrequency` is **weekly**: **[1 - 5]**.',
      }),
    defaultReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Your internal default reference for the payout schedule.\n\nWhen the payout schedule is applied to a balance account, this reference is also used for that payout schedule, unless you specify a new reference.',
      }),
    defaultReferenceForBeneficiary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The default reference for beneficiary for payouts initiated by this payout schedule.',
      }),
    maxPayoutAmount: z
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
          'The maximum amount that can be paid out from balance accounts that use this payout schedule.',
      }),
    minPayoutAmount: z
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
          'The minimum amount that can be paid out from balance accounts that use this payout schedule.',
      }),
    retainedAmount: z
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
          'The amount of funds that must remain available in a balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PlatformPayoutConfigWebhookData')

const PayoutScheduleBPNotificationRequestSchema = z
  .strictObject({
    data: PlatformPayoutConfigWebhookDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .enum([
        'balancePlatform.balancePlatformPayoutSchedule.created',
        'balancePlatform.balancePlatformPayoutSchedule.updated',
        'balancePlatform.balancePlatformPayoutSchedule.deleted',
      ])
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('PayoutScheduleBPNotificationRequest')

const ResultDetailsSchema = z
  .strictObject({
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason why the execution was not successful.' }),
    reasonCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The numeric code of the reason.' }),
    transferId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the transfer created for this execution.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ResultDetails')

const PayoutStateWebhookDataSchema = z
  .strictObject({
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the balance account from which the payout is initiated.',
      }),
    balanceAccountPayoutScheduleId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the managed payout schedule.' }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    result: z
      .enum(['failed', 'skipped', 'succeeded'])
      .exactOptional()
      .openapi({ description: 'The result of the execution.' }),
    resultDetails: ResultDetailsSchema.exactOptional().openapi({
      description: 'Contains details of the execution result.',
    }),
    triggeredAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestamp of the moment when the execution was triggered.' }),
  })
  .openapi({ required: [] })
  .openapi('PayoutStateWebhookData')

const PayoutScheduleStateNotificationRequestSchema = z
  .strictObject({
    data: PayoutStateWebhookDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .enum([
        'balancePlatform.balanceAccountPayoutScheduleExecution.succeeded',
        'balancePlatform.balanceAccountPayoutScheduleExecution.failed',
        'balancePlatform.balanceAccountPayoutScheduleExecution.skipped',
      ])
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('PayoutScheduleStateNotificationRequest')

const ResourceSchema = z
  .strictObject({
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
  })
  .openapi({ required: [] })
  .openapi('Resource')

const ScoreNotificationRequestSchema = z
  .strictObject({
    data: BankScoreSignalTriggeredDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z.literal('balancePlatform.score.triggered').openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('ScoreNotificationRequest')

const SweepCounterpartySchema = z
  .strictObject({
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the destination or source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).\n\n > If you are updating the counterparty from a transfer instrument to a balance account, set `transferInstrumentId` to **null**.',
      }),
    merchantAccount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The merchant account that will be the source of funds.\n\nYou can only use this parameter with sweeps of `type` **pull** and if you are processing payments with Adyen.',
      }),
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the destination or source [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) depending on the sweep `type`\n\n. To set up automated top-up sweeps to balance accounts in your [marketplace](https://docs.adyen.com/marketplaces/top-up-balance-account/#before-you-begin) or [platform](https://docs.adyen.com/platforms/top-up-balance-account/#before-you-begin), use this parameter in combination with a `merchantAccount` and a sweep `type` of **pull**.\n\nTop-up sweeps start a direct debit request from the source transfer instrument. Contact Adyen Support to enable this feature.> If you are updating the counterparty from a balance account to a transfer instrument, set `balanceAccountId` to **null**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SweepCounterparty')

const SweepScheduleSchema = z
  .strictObject({
    cronExpression: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A [cron expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) that is used to set the sweep schedule. The schedule uses the time zone of the balance account. \nFor example, **30 17 * * MON** schedules a sweep every Monday at 17:30.\n\nThe expression must have five values separated by a single space in the following order:\n\n* Minute: **0-59**\n\n* Hour: **0-23**\n\n* Day of the month: **1-31**\n\n* Month: **1-12** or **JAN-DEC**\n\n* Day of the week: **0-7** (0 and 7 are Sunday) or **MON-SUN**.\n\nThe following non-standard characters are supported: **&ast;**, **L**, **#**, **W** and **/**. See [crontab guru](https://crontab.guru/) for more examples.\n\nRequired when `type` is **cron**.\n',
      }),
    type: z
      .enum(['daily', 'weekly', 'monthly', 'balance', 'cron'])
      .openapi({
        description:
          'The schedule type.\n\nPossible values:\n\n* **cron**: push out funds based on a `cronExpression`.\n\n* **daily**: push out funds daily at 07:00 AM CET.\n\n* **weekly**: push out funds every Monday at 07:00 AM CET.\n\n* **monthly**: push out funds every first of the month at 07:00 AM CET.\n\n* **balance**: execute the sweep instantly if the `triggerAmount` is reached.\n',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('SweepSchedule')

const SweepConfigurationV2Schema = z
  .strictObject({
    category: z
      .enum(['bank', 'internal', 'platformPayment'])
      .exactOptional()
      .openapi({
        description:
          'The type of transfer that results from the sweep.\n\nPossible values:\n\n - **bank**: Sweep to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).\n\n- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.\n\nRequired when setting `priorities`.',
        'x-addedInVersion': '2',
      }),
    counterparty: SweepCounterpartySchema.openapi({
      description:
        'The destination or the source of the funds, depending on the sweep `type`.\n\nEither a `balanceAccountId`, `transferInstrumentId`, or `merchantAccount` is required.',
    }),
    currency: z
      .string()
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) in uppercase. For example, **EUR**.\n\nThe sweep currency must match any of the [balances currencies](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balanceAccounts/{id}__resParam_balances).',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The message that will be used in the sweep transfer's description body with a maximum length of 140 characters.\n\nIf the message is longer after replacing placeholders, the message will be cut off at 140 characters.",
      }),
    id: z.string().openapi({ description: 'The unique identifier of the sweep.' }),
    priorities: z
      .array(z.enum(['crossBorder', 'fast', 'instant', 'internal', 'regular', 'wire']))
      .exactOptional()
      .openapi({
        description:
          'The list of priorities for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. You can provide multiple priorities, ordered by your preference. Adyen will try to pay out using the priorities in the given order. If the first priority is not currently supported or enabled for your platform, the system will try the next one, and so on.\n\nThe request will be accepted as long as **at least one** of the provided priorities is valid (i.e., supported by Adyen and activated for your platform). For example, if you provide `["wire","regular"]`, and `wire` is not supported but `regular` is, the request will still be accepted and processed.\n\nPossible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.\n\n* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).\n\n* **crossBorder**: For high-value transfers to a recipient in a different country.\n\n* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).\n\nSet `category` to **bank**. For more details, see optional priorities setup for [marketplaces](https://docs.adyen.com/marketplaces/payout-to-users/scheduled-payouts#optional-priorities-setup) or [platforms](https://docs.adyen.com/platforms/payout-to-users/scheduled-payouts#optional-priorities-setup).',
        'x-addedInVersion': '2',
      }),
    reason: z
      .enum([
        'accountHierarchyNotActive',
        'amountLimitExceeded',
        'approved',
        'counterpartyAccountBlocked',
        'counterpartyAccountClosed',
        'counterpartyAccountNotFound',
        'counterpartyAddressRequired',
        'counterpartyBankTimedOut',
        'counterpartyBankUnavailable',
        'directDebitNotSupported',
        'error',
        'notEnoughBalance',
        'refusedByCounterpartyBank',
        'routeNotFound',
        'transferInstrumentDoesNotExist',
        'unknown',
      ])
      .exactOptional()
      .openapi({ description: 'The reason for disabling the sweep.' }),
    reasonDetail: z
      .string()
      .exactOptional()
      .openapi({ description: 'The human readable reason for disabling the sweep.' }),
    reference: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({ description: 'Your reference for the sweep configuration.' }),
    referenceForBeneficiary: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description:
          'The reference sent to or received from the counterparty. Only alphanumeric characters are allowed.',
      }),
    schedule: SweepScheduleSchema.openapi({
      description:
        'The schedule when the `triggerAmount` is evaluated. If the balance meets the threshold, funds are pushed out of or pulled in to the balance account.',
    }),
    status: z
      .enum(['active', 'inactive'])
      .exactOptional()
      .openapi({
        description:
          'The status of the sweep. If not provided, by default, this is set to **active**.\n\nPossible values: \n\n * **active**:  the sweep is enabled and funds will be pulled in or pushed out based on the defined configuration. \n\n * **inactive**: the sweep is disabled and cannot be triggered. \n\n',
      }),
    sweepAmount: AmountSchema.exactOptional().openapi({
      description:
        'The amount that must be pushed out or pulled in. You can configure either `sweepAmount` or `targetAmount`, not both.',
    }),
    targetAmount: AmountSchema.exactOptional().openapi({
      description:
        'The amount that must be available in the balance account after the sweep. You can configure either `sweepAmount` or `targetAmount`, not both.',
    }),
    triggerAmount: AmountSchema.exactOptional().openapi({
      description:
        'The threshold amount that triggers the sweep. If not provided, by default, the amount is set to zero. The `triggerAmount` is evaluated according to the specified `schedule.type`.\n\n* For `type` **pull**, if the balance is less than or equal to the `triggerAmount`, funds are pulled in to the balance account.\n\n* For `type` **push**, if the balance is more than or equal to the `triggerAmount`, funds are pushed out of the balance account.',
    }),
    type: z
      .enum(['pull', 'push'])
      .default('push')
      .exactOptional()
      .openapi({
        description:
          'The direction of sweep, whether pushing out or pulling in funds to the balance account. If not provided, by default, this is set to **push**.\n\nPossible values:\n\n * **push**: _push out funds_ to a destination balance account or transfer instrument.\n\n * **pull**: _pull in funds_ from a source merchant account, transfer instrument, or balance account.',
      }),
  })
  .openapi({ required: ['counterparty', 'currency', 'id', 'schedule'] })
  .openapi('SweepConfigurationV2')

const SweepConfigurationNotificationDataSchema = z
  .strictObject({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the balance account for which the sweep was configured.',
      }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    sweep: SweepConfigurationV2Schema.exactOptional().openapi({
      description: 'Contains information about the sweep resource that triggered the event.',
    }),
  })
  .openapi({ required: [] })
  .openapi('SweepConfigurationNotificationData')

const SweepConfigurationNotificationRequestSchema = z
  .strictObject({
    data: SweepConfigurationNotificationDataSchema.openapi({
      description: 'Contains event details.',
    }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .enum([
        'balancePlatform.balanceAccountSweep.created',
        'balancePlatform.balanceAccountSweep.updated',
        'balancePlatform.balanceAccountSweep.deleted',
      ])
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('SweepConfigurationNotificationRequest')

const SweepResultDetailsSchema = z
  .strictObject({
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Human readable reason for why execution was not successful if applicable.',
      }),
    reasonCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'Reason Code for why execution was not successful if applicable.' }),
    sweepConfigurationDisabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is true if the sweep configuration was disabled.' }),
    transferId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the transfer from executing the sweep.' }),
  })
  .openapi({ required: [] })
  .openapi('SweepResultDetails')

const SweepExecutionNotificationDataSchema = z
  .strictObject({
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the balance account from which the sweep is initiated.',
      }),
    balanceAccountSweepId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the sweep configuration.' }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
    result: z
      .enum(['failed', 'skipped', 'succeeded'])
      .exactOptional()
      .openapi({
        description:
          'The outcome of the sweep execution.\n\nPossible results:\n- **succeeded**: The sweep payout was completed successfully.\n- **failed**: The sweep payout was not completed due to an error.\n- **skipped**: The sweep payout was not triggered as expected.',
      }),
    resultDetails: SweepResultDetailsSchema.exactOptional().openapi({
      description: 'The details of the execution result.',
    }),
    triggeredAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestamp of when the execution was triggered.' }),
  })
  .openapi({ required: [] })
  .openapi('SweepExecutionNotificationData')

const SweepExecutionNotificationRequestSchema = z
  .strictObject({
    data: SweepExecutionNotificationDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .enum([
        'balancePlatform.balanceAccountSweepExecution.succeeded',
        'balancePlatform.balanceAccountSweepExecution.skipped',
        'balancePlatform.balanceAccountSweepExecution.failed',
      ])
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('SweepExecutionNotificationRequest')

const WebhookTopUpCounterpartySchema = z
  .strictObject({
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the transfer instrument that is the source of the funds.',
      }),
  })
  .openapi({ required: [] })
  .openapi('WebhookTopUpCounterparty')

const WebhookTopUpMandateSchema = z
  .strictObject({
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date when the mandate was created, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.',
      }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the mandate.' }),
  })
  .openapi({ required: [] })
  .openapi('WebhookTopUpMandate')

const WebhookAmountSchema = z
  .strictObject({
    currency: z
      .string()
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).',
      }),
    value: z
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
          'The amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).',
      }),
  })
  .openapi({ required: ['currency', 'value'] })
  .openapi('WebhookAmount')

const WebhookTopUpAmountSchema = z
  .strictObject({
    fixedAmount: WebhookAmountSchema.exactOptional().openapi({
      description: 'The fixed amount with which you want to top up the balance account.',
    }),
    targetAmount: WebhookAmountSchema.exactOptional().openapi({
      description: 'The target balance for the balance account that the top-up must achieve.',
    }),
  })
  .openapi({ required: [] })
  .openapi('WebhookTopUpAmount')

const WebhookTopUpTriggerSchema = z
  .strictObject({
    schedule: z
      .enum(['monthly', 'weekdays', 'weekly'])
      .exactOptional()
      .openapi({
        description:
          'The schedule for recurring top-ups. Defines when the top-up should be triggered based on time.\n\nPossible values:\n\n* **weekly**: triggers the top-up once per week.\n\n* **monthly**: triggers the top-up once per month.\n\n* **weekdays**: triggers the top-up on weekdays only.',
      }),
    threshold: WebhookAmountSchema.exactOptional().openapi({
      description:
        'The balance threshold that triggers the top-up. If the balance falls below this amount, a top-up is initiated.',
    }),
  })
  .openapi({ required: [] })
  .openapi('WebhookTopUpTrigger')

const WebhookTopUpConfigurationSchema = z
  .strictObject({
    counterparty: WebhookTopUpCounterpartySchema.openapi({
      description: 'The source of the funds.',
    }),
    description: z
      .string()
      .max(140)
      .openapi({
        description:
          "The message that is used in the top-up transfer's description body with a maximum length of 140 characters.\n\nIf the message is longer after replacing placeholders, the message is cut off at 140 characters.",
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier of the recurring top-up configuration.' }),
    mandate: WebhookTopUpMandateSchema.exactOptional().openapi({
      description: 'The mandate associated with the recurring top-up.',
    }),
    referenceForBeneficiary: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description:
          ' A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.\n\n Supported characters: **a-z**, **A-Z**, **0-9**.',
      }),
    status: z
      .enum(['active', 'inactive'])
      .openapi({
        description:
          'The status of the top-up configuration.\n\nPossible values: \n\n * **active**: the top-up is enabled and funds are pulled in.\n\n * **inactive**: the top-up is disabled and cannot be triggered. \n\n',
      }),
    topUpAmount: WebhookTopUpAmountSchema.openapi({
      description: 'The amount of the top-up. This can be a fixed amount or a target amount.',
    }),
    trigger: WebhookTopUpTriggerSchema.openapi({
      description:
        'The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold.',
    }),
  })
  .openapi({ required: ['counterparty', 'description', 'id', 'status', 'topUpAmount', 'trigger'] })
  .openapi('WebhookTopUpConfiguration')

const TopUpWebhookDataSchema = z
  .strictObject({
    accountId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the balance account for which the recurring top-up is configured.',
      }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
    webhookTopUpConfiguration: WebhookTopUpConfigurationSchema.openapi({
      description: 'The recurring top-up configuration details.',
    }),
  })
  .openapi({ required: ['accountId', 'webhookTopUpConfiguration'] })
  .openapi('TopUpWebhookData')

const TopUpConfigurationEventRequestSchema = z
  .strictObject({
    data: TopUpWebhookDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .enum([
        'balancePlatform.balanceAccount.recurringTopUp.created',
        'balancePlatform.balanceAccount.recurringTopUp.deleted',
      ])
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('TopUpConfigurationEventRequest')

const WebhookTopUpConfigurationUpdatedSchema = z
  .strictObject({
    counterparty: WebhookTopUpCounterpartySchema.openapi({
      description: 'The source of the funds.',
    }),
    description: z
      .string()
      .max(140)
      .openapi({
        description:
          "The message that is used in the top-up transfer's description body with a maximum length of 140 characters.\n\nIf the message is longer after replacing placeholders, the message is cut off at 140 characters.",
      }),
    disabledReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A machine-readable code identifying the reason the system deactivated the top-up configuration. This field is only populated when the status is `inactive`.\n\nPossible values:\n\n* **transferInstrumentDoesNotExist**\n* **directDebitNotSupported**\n* **accountHierarchyNotActive**\n* **mandateNotFound**\n* **mandateNotActive**\n* **directDebitAmountThresholdExceeded**\n* **topUpNotSupported**\n* **routeNotFound**\n* **counterpartyAccountBlocked**\n* **counterpartyAccountInvalid**\n* **unknown**',
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier of the recurring top-up configuration.' }),
    mandate: WebhookTopUpMandateSchema.exactOptional().openapi({
      description: 'The mandate associated with the recurring top-up.',
    }),
    reasonDetail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A human-readable description providing the specific reason or context for why the configuration was disabled. This field is only populated when the status is `inactive`.',
      }),
    referenceForBeneficiary: z
      .string()
      .max(80)
      .exactOptional()
      .openapi({
        description:
          ' A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.\n\n Supported characters: **a-z**, **A-Z**, **0-9**.',
      }),
    status: z
      .enum(['active', 'inactive'])
      .openapi({
        description:
          'The status of the top-up configuration.\n\nPossible values: \n\n * **active**: the top-up is enabled and funds are pulled in.\n\n * **inactive**: the top-up is disabled and cannot be triggered. \n\n',
      }),
    topUpAmount: WebhookTopUpAmountSchema.openapi({
      description: 'The amount of the top-up. This can be a fixed amount or a target amount.',
    }),
    trigger: WebhookTopUpTriggerSchema.openapi({
      description:
        'The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold.',
    }),
  })
  .openapi({ required: ['counterparty', 'description', 'id', 'status', 'topUpAmount', 'trigger'] })
  .openapi('WebhookTopUpConfigurationUpdated')

const TopUpUpdatedWebhookDataSchema = z
  .strictObject({
    accountId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the balance account for which the recurring top-up is configured.',
      }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the balance platform.' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the event was triggered, in ISO 8601 extended format. For example, **2025-03-19T10:15:30+01:00**.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The ID of the resource.' }),
    webhookTopUpConfiguration: WebhookTopUpConfigurationUpdatedSchema.openapi({
      description: 'The recurring top-up configuration details.',
    }),
  })
  .openapi({ required: ['accountId', 'webhookTopUpConfiguration'] })
  .openapi('TopUpUpdatedWebhookData')

const TopUpConfigurationUpdatedEventRequestSchema = z
  .strictObject({
    data: TopUpUpdatedWebhookDataSchema.openapi({ description: 'Contains event details.' }),
    environment: z
      .string()
      .openapi({
        description:
          'The environment from which the webhook originated.\n\nPossible values: **test**, **live**.',
      }),
    timestamp: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the event was queued.' }),
    type: z
      .literal('balancePlatform.balanceAccount.recurringTopUp.updated')
      .openapi({ description: 'Type of webhook.' }),
  })
  .openapi({ required: ['data', 'environment', 'type'] })
  .openapi('TopUpConfigurationUpdatedEventRequest')

const PostBalancePlatformAccountHolderCreatedBalancePlatformAccountHolderCreatedExample = {
  summary: 'Account holder created with LEM API v1, v2',
  description: 'Example webhook when an account holder was created with LEM API v1, v2',
  value: {
    data: {
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      accountHolder: {
        contactDetails: {
          email: 'test@adyen.com',
          phone: { number: '0612345678', type: 'mobile' },
          address: {
            houseNumberOrName: '23',
            city: 'Amsterdam',
            country: 'NL',
            postalCode: '12345',
            street: 'Main Street 1',
          },
        },
        description: 'Shelly Eller',
        legalEntityId: 'LE00000000000000000001',
        reference: 'YOUR_REFERENCE-2412C',
        capabilities: {
          issueCard: {
            enabled: true,
            requested: true,
            allowed: false,
            verificationStatus: 'pending',
          },
          receiveFromTransferInstrument: {
            enabled: true,
            requested: true,
            allowed: false,
            verificationStatus: 'pending',
          },
          sendToTransferInstrument: {
            enabled: true,
            requested: true,
            allowed: false,
            verificationStatus: 'pending',
          },
          sendToBalanceAccount: {
            enabled: true,
            requested: true,
            allowed: false,
            verificationStatus: 'pending',
          },
          receiveFromBalanceAccount: {
            enabled: true,
            requested: true,
            allowed: false,
            verificationStatus: 'pending',
          },
        },
        id: 'AH00000000000000000001',
        status: 'active',
      },
    },
    environment: 'test',
    timestamp: '2024-12-15T15:42:03+01:00',
    type: 'balancePlatform.accountHolder.created',
  },
}

const PostBalancePlatformAccountHolderCreatedBalancePlatformAccountHolderCreatedLemV3Example = {
  summary: 'Account holder created with LEM API v3',
  description: 'Example webhook when an account holder was created with LEM API v3',
  value: {
    data: {
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      accountHolder: {
        legalEntityId: 'LE00000000000000000001',
        reference: 'YOUR_REFERENCE-2412C',
        capabilities: {
          sendToTransferInstrument: {
            enabled: true,
            requested: true,
            allowed: false,
            problems: [
              {
                entity: { id: 'LE00000000000000000001', type: 'LegalEntity' },
                verificationErrors: [
                  {
                    code: '2_902',
                    message: 'Terms Of Service forms are not accepted.',
                    remediatingActions: [{ code: '2_902', message: 'Accept TOS' }],
                    type: 'invalidInput',
                  },
                ],
              },
              {
                entity: { id: 'SE00000000000000000001', type: 'BankAccount' },
                verificationErrors: [
                  {
                    code: '2_8037',
                    message: "'bankStatement' was missing.",
                    remediatingActions: [{ code: '1_703', message: 'Upload a bank statement' }],
                    type: 'dataMissing',
                  },
                ],
              },
              {
                entity: { id: 'SE00000000000000000002', type: 'BankAccount' },
                verificationErrors: [
                  {
                    code: '2_8037',
                    message: "'bankStatement' was missing.",
                    remediatingActions: [{ code: '1_703', message: 'Upload a bank statement' }],
                    type: 'dataMissing',
                  },
                ],
              },
              {
                entity: { id: 'LE00000000000000000001', type: 'LegalEntity' },
                verificationErrors: [
                  {
                    code: '2_8189',
                    message: "'UBO through control' was missing.",
                    remediatingActions: [
                      {
                        code: '2_151',
                        message:
                          "Add 'organization.entityAssociations' of type 'uboThroughControl' to legal entity",
                      },
                    ],
                    type: 'dataMissing',
                  },
                  {
                    code: '1_50',
                    message: "Organization details couldn't be verified",
                    subErrors: [
                      {
                        code: '1_5016',
                        message: "The tax ID number couldn't be verified",
                        remediatingActions: [
                          { code: '1_500', message: 'Update organization details' },
                          { code: '1_501', message: 'Upload a registration document' },
                        ],
                        type: 'invalidInput',
                      },
                    ],
                    type: 'invalidInput',
                  },
                  {
                    code: '2_8067',
                    message: "'Signatory' was missing.",
                    remediatingActions: [
                      {
                        code: '2_124',
                        message:
                          "Add 'organization.entityAssociations' of type 'signatory' to legal entity",
                      },
                    ],
                    type: 'dataMissing',
                  },
                ],
              },
            ],
            transferInstruments: [
              {
                enabled: true,
                requested: true,
                allowed: false,
                id: 'SE00000000000000000001',
                verificationStatus: 'pending',
              },
              {
                enabled: true,
                requested: true,
                allowed: false,
                id: 'SE00000000000000000002',
                verificationStatus: 'pending',
              },
            ],
            verificationStatus: 'pending',
          },
        },
        id: 'AH00000000000000000001',
        status: 'active',
      },
    },
    environment: 'live',
    timestamp: '2024-12-15T15:42:03+01:00',
    type: 'balancePlatform.accountHolder.created',
  },
}

const PostBalancePlatformAccountHolderUpdatedBalancePlatformAccountHolderUpdatedExample = {
  summary: 'Account holder updated with LEM API v1, v2',
  description: 'Example webhook when an account holder was updated with LEM API v1, v2',
  value: {
    data: {
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      accountHolder: {
        description: 'Shelly Eller',
        legalEntityId: 'LE00000000000000000001',
        reference: 'YOUR_REFERENCE-2412C',
        capabilities: {
          sendToTransferInstrument: {
            enabled: true,
            requested: true,
            allowed: false,
            problems: [
              {
                entity: { id: 'LE00000000000000000001', type: 'BankAccount' },
                verificationErrors: [
                  {
                    code: '2_8037',
                    message: "'bankStatement' was missing.",
                    remediatingActions: [{ code: '1_703', message: 'Upload a bank statement' }],
                    type: 'dataMissing',
                  },
                ],
              },
            ],
            verificationStatus: 'invalid',
          },
        },
        id: 'AH00000000000000000001',
        status: 'active',
      },
    },
    environment: 'test',
    timestamp: '2024-12-15T15:42:03+01:00',
    type: 'balancePlatform.accountHolder.updated',
  },
}

const PostBalancePlatformAccountHolderUpdatedBalancePlatformAccountHolderUpdatedLemV3Example = {
  summary: 'Account holder updated with LEM API v3',
  description: 'Example webhook when an account holder was updated with LEM API v3',
  value: {
    data: {
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      accountHolder: {
        legalEntityId: 'LE00000000000000000001',
        reference: 'YOUR_REFERENCE-2412C',
        capabilities: {
          sendToTransferInstrument: {
            enabled: true,
            requested: true,
            allowed: false,
            problems: [
              {
                entity: { id: 'LE00000000000000000001', type: 'LegalEntity' },
                verificationErrors: [
                  {
                    code: '2_902',
                    message: 'Terms Of Service forms are not accepted.',
                    remediatingActions: [{ code: '2_902', message: 'Accept TOS' }],
                    type: 'invalidInput',
                  },
                ],
              },
              {
                entity: { id: 'SE00000000000000000001', type: 'BankAccount' },
                verificationErrors: [
                  {
                    code: '2_8037',
                    message: "'bankStatement' was missing.",
                    remediatingActions: [{ code: '1_703', message: 'Upload a bank statement' }],
                    type: 'dataMissing',
                  },
                ],
              },
              {
                entity: { id: 'SE00000000000000000002', type: 'BankAccount' },
                verificationErrors: [
                  {
                    code: '2_8037',
                    message: "'bankStatement' was missing.",
                    remediatingActions: [{ code: '1_703', message: 'Upload a bank statement' }],
                    type: 'dataMissing',
                  },
                ],
              },
              {
                entity: { id: 'LE00000000000000000001', type: 'LegalEntity' },
                verificationErrors: [
                  {
                    code: '2_8189',
                    message: "'UBO through control' was missing.",
                    remediatingActions: [
                      {
                        code: '2_151',
                        message:
                          "Add 'organization.entityAssociations' of type 'uboThroughControl' to legal entity",
                      },
                    ],
                    type: 'dataMissing',
                  },
                  {
                    code: '1_50',
                    message: "Organization details couldn't be verified",
                    subErrors: [
                      {
                        code: '1_5016',
                        message: "The tax ID number couldn't be verified",
                        remediatingActions: [
                          { code: '1_500', message: 'Update organization details' },
                          { code: '1_501', message: 'Upload a registration document' },
                        ],
                        type: 'invalidInput',
                      },
                    ],
                    type: 'invalidInput',
                  },
                  {
                    code: '2_8067',
                    message: "'Signatory' was missing.",
                    remediatingActions: [
                      {
                        code: '2_124',
                        message:
                          "Add 'organization.entityAssociations' of type 'signatory' to legal entity",
                      },
                    ],
                    type: 'dataMissing',
                  },
                ],
              },
            ],
            transferInstruments: [
              {
                enabled: true,
                requested: true,
                allowed: false,
                id: 'SE00000000000000000001',
                verificationStatus: 'pending',
              },
              {
                enabled: true,
                requested: true,
                allowed: false,
                id: 'SE00000000000000000002',
                verificationStatus: 'pending',
              },
            ],
            verificationStatus: 'pending',
          },
        },
        id: 'AH00000000000000000001',
        status: 'active',
      },
    },
    environment: 'live',
    timestamp: '2024-12-15T15:42:03+01:00',
    type: 'balancePlatform.accountHolder.updated',
  },
}

const PostBalancePlatformBalanceAccountCreatedBalancePlatformBalanceAccountCreatedExample = {
  summary: 'Balance account created',
  description: 'Example webhook when a balance account was created',
  value: {
    data: {
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      balanceAccount: {
        accountHolderId: 'AH00000000000000000001',
        defaultCurrencyCode: 'EUR',
        id: 'BA00000000000000000001',
        status: 'active',
      },
    },
    environment: 'test',
    timestamp: '2024-12-15T15:42:03+01:00',
    type: 'balancePlatform.balanceAccount.created',
  },
}

const PostBalancePlatformBalanceAccountRecurringTopUpCreatedBalancePlatformRecurringTopUpCreatedExample =
  {
    summary: 'Recurring top-up created',
    description: 'Example webhook when a recurring top-up was created',
    value: {
      data: {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        creationDate: '2026-04-17T10:30:00+01:00',
        accountId: 'BA00000000000000000001',
        webhookTopUpConfiguration: {
          id: 'TU4227C224555B5FTD2NT2JV4WN5',
          description: 'Top up when balance is low',
          status: 'active',
          topUpAmount: { fixedAmount: { currency: 'EUR', value: 10000 } },
          trigger: { schedule: 'weekly', threshold: { currency: 'EUR', value: 5000 } },
          counterparty: { transferInstrumentId: 'SE00000000000000000001' },
          referenceForBeneficiary: 'TopUpFromSavings',
          mandate: {
            reference: 'MND00000000000000000001',
            creationDate: '2026-04-17T10:30:00+01:00',
          },
        },
      },
      environment: 'test',
      timestamp: '2026-04-17T10:30:00+01:00',
      type: 'balancePlatform.balanceAccount.recurringTopUp.created',
    },
  }

const PostBalancePlatformBalanceAccountRecurringTopUpCreatedBalancePlatformRecurringTopUpCreated_200Example =
  { summary: 'Acknowledge Webhook', value: { notificationResponse: '[accepted]' } }

const PostBalancePlatformBalanceAccountRecurringTopUpDeletedBalancePlatformRecurringTopUpDeletedExample =
  {
    summary: 'Recurring top-up deleted',
    description: 'Example webhook when a recurring top-up was deleted',
    value: {
      data: {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        creationDate: '2026-04-17T10:30:00+01:00',
        accountId: 'BA00000000000000000001',
        webhookTopUpConfiguration: {
          id: 'TU4227C224555B5FTD2NT2JV4WN5',
          description: 'Top up when balance is low',
          status: 'active',
          topUpAmount: { fixedAmount: { currency: 'EUR', value: 10000 } },
          trigger: { schedule: 'weekly', threshold: { currency: 'EUR', value: 5000 } },
          counterparty: { transferInstrumentId: 'SE00000000000000000001' },
          referenceForBeneficiary: 'TopUpFromSavings',
          mandate: {
            reference: 'MND00000000000000000001',
            creationDate: '2026-04-17T10:30:00+01:00',
          },
        },
      },
      environment: 'test',
      timestamp: '2026-04-17T16:20:00+01:00',
      type: 'balancePlatform.balanceAccount.recurringTopUp.deleted',
    },
  }

const PostBalancePlatformBalanceAccountRecurringTopUpDeletedBalancePlatformRecurringTopUpDeleted_200Example =
  { summary: 'Acknowledge Webhook', value: { notificationResponse: '[accepted]' } }

const PostBalancePlatformBalanceAccountRecurringTopUpUpdatedBalancePlatformRecurringTopUpUpdatedExample =
  {
    summary: 'Recurring top-up updated',
    description: 'Example webhook when a recurring top-up was updated',
    value: {
      data: {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        creationDate: '2026-04-17T10:30:00+01:00',
        accountId: 'BA00000000000000000001',
        webhookTopUpConfiguration: {
          id: 'TU4227C224555B5FTD2NT2JV4WN5',
          description: 'Top up when balance is low - updated',
          status: 'inactive',
          topUpAmount: { fixedAmount: { currency: 'EUR', value: 15000 } },
          trigger: { schedule: 'monthly', threshold: { currency: 'EUR', value: 3000 } },
          counterparty: { transferInstrumentId: 'SE00000000000000000001' },
          referenceForBeneficiary: 'TopUpFromSavings',
          mandate: {
            reference: 'MND00000000000000000001',
            creationDate: '2026-04-17T10:30:00+01:00',
          },
          disabledReason: 'counterpartyAccountBlocked',
          reasonDetail: 'The counterparty account is blocked.',
        },
      },
      environment: 'test',
      timestamp: '2026-04-17T14:45:00+01:00',
      type: 'balancePlatform.balanceAccount.recurringTopUp.updated',
    },
  }

const PostBalancePlatformBalanceAccountRecurringTopUpUpdatedBalancePlatformRecurringTopUpUpdated_200Example =
  { summary: 'Acknowledge Webhook', value: { notificationResponse: '[accepted]' } }

const PostBalancePlatformBalanceAccountUpdatedBalancePlatformBalanceAccountUpdatedExample = {
  summary: 'Balance account updated',
  description: 'Example webhook when a balance account was updated',
  value: {
    data: {
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      balanceAccount: {
        accountHolderId: 'AH00000000000000000001',
        defaultCurrencyCode: 'EUR',
        id: 'BA00000000000000000001',
        status: 'active',
        timeZone: 'Europe/Amsterdam',
      },
    },
    environment: 'test',
    timestamp: '2024-12-15T15:42:03+01:00',
    type: 'balancePlatform.balanceAccount.updated',
  },
}

const PostBalancePlatformBalanceAccountSweepCreatedBalancePlatformSweepCreatedExample = {
  summary: 'Sweep created',
  description: 'Example webhook when a sweep was created',
  value: {
    data: {
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      accountId: 'BA00000000000000000001',
      sweep: {
        id: 'SWPC4227C224555B5FTD2NT2JV4WN5',
        schedule: { type: 'weekly' },
        status: 'active',
        targetAmount: { currency: 'EUR', value: 0 },
        triggerAmount: { currency: 'EUR', value: 0 },
        type: 'push',
        counterparty: { balanceAccountId: 'BA00000000000000000002' },
        currency: 'EUR',
      },
    },
    environment: 'test',
    timestamp: '2024-12-15T15:42:03+01:00',
    type: 'balancePlatform.balanceAccountSweep.created',
  },
}

const PostBalancePlatformBalanceAccountSweepDeletedBalancePlatformSweepDeletedExample = {
  summary: 'Sweep deleted',
  description: 'Example webhook when a sweep was deleted',
  value: {
    data: {
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      accountId: 'BA00000000000000000001',
      sweep: {
        id: 'SWPC4227C224555B5FTD2NT2JV4WN5',
        schedule: { type: 'weekly' },
        status: 'active',
        targetAmount: { currency: 'EUR', value: 0 },
        triggerAmount: { currency: 'EUR', value: 0 },
        type: 'push',
        counterparty: { balanceAccountId: 'BA00000000000000000002' },
        currency: 'EUR',
      },
    },
    environment: 'test',
    timestamp: '2024-12-15T15:42:03+01:00',
    type: 'balancePlatform.balanceAccountSweep.deleted',
  },
}

const PostBalancePlatformBalanceAccountSweepUpdatedBalancePlatformSweepUpdatedExample = {
  summary: 'Sweep updated',
  description: 'Example webhook when a sweep was updated',
  value: {
    data: {
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      accountId: 'BA00000000000000000001',
      sweep: {
        id: 'SWPC4227C224555B5FTD2NT2JV4WN5',
        schedule: { type: 'weekly' },
        status: 'inactive',
        targetAmount: { currency: 'EUR', value: 0 },
        triggerAmount: { currency: 'EUR', value: 0 },
        type: 'push',
        counterparty: { balanceAccountId: 'BA00000000000000000002' },
        currency: 'EUR',
      },
    },
    environment: 'test',
    timestamp: '2024-12-15T15:42:03+01:00',
    type: 'balancePlatform.balanceAccountSweep.updated',
  },
}

const PostBalancePlatformBalanceAccountSweepExecutionFailedBalancePlatformSweepExecutionFailedExample =
  {
    summary: 'Sweep execution failed',
    description: 'Example webhook when a sweep execution fails',
    value: {
      data: {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        id: 'SWPE00000000000000000000000003',
        balanceAccountId: 'BA00000000000000000001',
        balanceAccountSweepId: 'SWPC4227C224555B5FTD2NT2JV4WN5',
        result: 'failed',
        resultDetails: { reason: 'Missing capabilities', reasonCode: 'missingCapabilities' },
        triggeredAt: '2026-05-11T12:52:00Z',
      },
      environment: 'test',
      timestamp: '2026-05-11T12:52:00.727Z',
      type: 'balancePlatform.balanceAccountSweepExecution.failed',
    },
  }

const PostBalancePlatformBalanceAccountSweepExecutionSkippedBalancePlatformSweepExecutionSkippedExample =
  {
    summary: 'Sweep execution skipped',
    description: 'Example webhook when a sweep execution is skipped',
    value: {
      data: {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        id: 'SWPE00000000000000000000000002',
        balanceAccountId: 'BA00000000000000000001',
        balanceAccountSweepId: 'SWPC4227C224555B5FTD2NT2JV4WN5',
        result: 'skipped',
        resultDetails: { reason: 'No balance to pay out', reasonCode: 'noBalanceToPayOut' },
        triggeredAt: '2026-05-11T13:02:00Z',
      },
      environment: 'test',
      timestamp: '2026-05-11T13:02:00.982Z',
      type: 'balancePlatform.balanceAccountSweepExecution.skipped',
    },
  }

const PostBalancePlatformBalanceAccountSweepExecutionSucceededBalancePlatformSweepExecutionSucceededExample =
  {
    summary: 'Sweep execution succeeded',
    description: 'Example webhook when a sweep execution succeeds',
    value: {
      data: {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        id: 'SWPE00000000000000000000000001',
        balanceAccountId: 'BA00000000000000000001',
        balanceAccountSweepId: 'SWPC4227C224555B5FTD2NT2JV4WN5',
        result: 'succeeded',
        resultDetails: { transferId: '1VVF0D5U66PIUIVP' },
        triggeredAt: '2026-05-11T12:57:00Z',
      },
      environment: 'test',
      timestamp: '2026-05-11T12:57:01.346Z',
      type: 'balancePlatform.balanceAccountSweepExecution.succeeded',
    },
  }

const PostBalancePlatformCardorderCreatedBalancePlatformCardorderCreatedProcessingExample = {
  summary: 'Order for physical card with a PIN was successful',
  description: 'Example webhook for when a user successfully orders a physical card with a PIN',
  value: {
    data: {
      card: { status: 'processing' },
      cardOrderItemId: 'OI00000000000000000000001',
      paymentInstrumentId: 'PI00000000000000000000001',
      pin: { status: 'processing' },
      shippingMethod: 'dhlInternationalExpressBulk',
    },
    environment: 'test',
    type: 'balancePlatform.cardorder.created',
  },
}

const PostBalancePlatformCardorderCreatedBalancePlatformCardorderCreatedRejectedExample = {
  summary: 'Order for physical card with a PIN was rejected',
  description:
    'Example webhook for when a user orders a physical card with a PIN, but it is rejected',
  value: {
    data: {
      card: { errorMessage: 'Unknown value in the image field', status: 'rejected' },
      cardOrderItemId: 'OI00000000000000000000001',
      paymentInstrumentId: 'PI00000000000000000000001',
      pin: { errorMessage: 'Unknown value in the image field', status: 'rejected' },
      shippingMethod: 'dhlInternationalExpressBulk',
    },
    environment: 'test',
    type: 'balancePlatform.cardorder.created',
  },
}

const PostBalancePlatformCardorderUpdatedBalancePlatformCardorderUpdatedProducedExample = {
  summary: 'Physical card with a PIN was produced',
  description: 'Example webhook for when a physical card with a PIN has been produced',
  value: {
    data: {
      card: { status: 'produced' },
      cardOrderItemId: 'OI00000000000000000000001',
      paymentInstrumentId: 'PI00000000000000000000001',
      pin: { status: 'produced' },
      shippingMethod: 'dhlInternationalExpressBulk',
    },
    environment: 'test',
    type: 'balancePlatform.cardorder.updated',
  },
}

const PostBalancePlatformCardorderUpdatedBalancePlatformCardorderUpdatedShippedCardExample = {
  summary: 'Physical card was shipped',
  description: 'Example webhook for when a physical card has been shipped',
  value: {
    data: {
      card: { status: 'shipped', trackingNumber: '12345ABCDEF' },
      cardOrderItemId: 'OI00000000000000000000001',
      paymentInstrumentId: 'PI00000000000000000000001',
      shippingMethod: 'laposteLettreVert',
    },
    environment: 'test',
    type: 'balancePlatform.cardorder.updated',
  },
}

const PostBalancePlatformCardorderUpdatedBalancePlatformCardorderUpdatedShippedPinExample = {
  summary: 'PIN for physical card was shipped',
  description: 'Example webhook for when the PIN for a physical card has been shipped',
  value: {
    data: {
      cardOrderItemId: 'OI00000000000000000000001',
      paymentInstrumentId: 'PI00000000000000000000001',
      pin: { status: 'shipped', trackingNumber: '9876543210' },
      shippingMethod: 'dhlInternationalExpressLetter',
    },
    environment: 'test',
    type: 'balancePlatform.cardorder.updated',
  },
}

const PostBalancePlatformPaymentInstrumentCreated_01BalancePlatformPaymentInstrumentCardCreatedExample =
  {
    summary: 'Card created',
    description: 'Example webhook when a card was created',
    value: {
      data: {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        paymentInstrument: {
          balanceAccountId: 'BA00000000000000000001',
          description: 'C. Holden - card',
          issuingCountryCode: 'GB',
          status: 'active',
          type: 'card',
          card: {
            cardholderName: 'Carl Holden',
            formFactor: 'virtual',
            brand: 'mc',
            brandVariant: 'mc',
            number: '4010100000000000000',
            bin: '555544',
            expiration: { month: '04', year: '2030' },
            lastFour: '2732',
          },
          id: 'PI00000000000000000001',
        },
      },
      environment: 'test',
      timestamp: '2026-03-24T09:30:12+01:00',
      type: 'balancePlatform.paymentInstrument.created',
    },
  }

const PostBalancePlatformPaymentInstrumentCreated_02BalancePlatformPaymentInstrumentBusinessAccountCreatedExample =
  {
    summary: 'Business account created',
    description: 'Example webhook when a business account was created',
    value: {
      data: {
        balancePlatform: 'YOUR_BALANCE_PLATFORM',
        paymentInstrument: {
          balanceAccountId: 'BA00000000000000000001',
          issuingCountryCode: 'NL',
          status: 'active',
          type: 'bankAccount',
          bankAccount: { type: 'iban', iban: 'NL11ADYB00000000' },
          id: 'PI00000000000000000001',
        },
      },
      environment: 'test',
      timestamp: '2026-03-24T09:30:12+01:00',
      type: 'balancePlatform.paymentInstrument.created',
    },
  }

const PostBalancePlatformPaymentInstrumentUpdatedBalancePlatformPaymentInstrumentUpdatedExample = {
  summary: 'Card updated',
  description: 'Example webhook when a card was updated',
  value: {
    data: {
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      paymentInstrument: {
        balanceAccountId: 'BA00000000000000000001',
        description: 'C. Holden - card',
        issuingCountryCode: 'GB',
        status: 'suspended',
        type: 'card',
        card: {
          cardholderName: 'Carl Holden',
          formFactor: 'virtual',
          brand: 'mc',
          brandVariant: 'mc',
          number: '4010100000000000000',
          bin: '555544',
          expiration: { month: '04', year: '2024' },
          lastFour: '2732',
        },
        id: 'PI00000000000000000001',
      },
    },
    environment: 'test',
    timestamp: '2024-12-15T15:42:03+01:00',
    type: 'balancePlatform.paymentInstrument.updated',
  },
}

const PostBalancePlatformScoreTriggeredBalancePlatformScoreTriggeredExample = {
  summary: 'Score signal triggered',
  description: 'Example webhook when a risk score signal is triggered',
  value: {
    data: {
      balancePlatform: 'YOUR_BALANCE_PLATFORM',
      creationDate: '2023-03-16T13:58:31+01:00',
      id: 'V4HZ4RBFJGXXGN82',
      accountHolder: {
        reference: 'YOUR_ACCOUNT_HOLDER_REFERENCE',
        description: 'S.Hopper - Staff 123',
        id: 'AH00000000000000000000001',
      },
      accountHolderStatus: 'Active',
      automatedActions: ['bumpKYCTier'],
      riskScore: 67,
      scoreSignalsTriggered: [
        'DistinctAddressUsage',
        'HighNumberOfLegalEntitiesInIdentity',
        'HighNumberOfAccountsInIdentity',
        'AccountAge',
        'LEMCountry',
        'LegalEntityEmailReferral',
      ],
      signalSourceTypes: ['LegalEntityEmailReferral'],
    },
    environment: 'test',
    timestamp: '2023-03-16T13:58:31+01:00',
    type: 'balancePlatform.score.triggered',
  },
}

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const balancePlatformAccountHolderCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.accountHolder.created',
  tags: ['Account holder'],
  summary: 'Account holder created',
  description:
    'Adyen sends this webhook when you successfully [create an account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders).',
  operationId: 'post-balancePlatform.accountHolder.created',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountHolderNotificationRequestSchema,
          examples: {
            'balancePlatform-accountHolder-created':
              PostBalancePlatformAccountHolderCreatedBalancePlatformAccountHolderCreatedExample,
            'balancePlatform-accountHolder-created-lem-v3':
              PostBalancePlatformAccountHolderCreatedBalancePlatformAccountHolderCreatedLemV3Example,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformAccountHolderUpdatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.accountHolder.updated',
  tags: ['Account holder'],
  summary: 'Account holder updated',
  description:
    'Adyen sends this webhook when you successfully [update an account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/patch/accountHolders/_id_).',
  operationId: 'post-balancePlatform.accountHolder.updated',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountHolderNotificationRequestSchema,
          examples: {
            'balancePlatform-accountHolder-updated':
              PostBalancePlatformAccountHolderUpdatedBalancePlatformAccountHolderUpdatedExample,
            'balancePlatform-accountHolder-updated-lem-v3':
              PostBalancePlatformAccountHolderUpdatedBalancePlatformAccountHolderUpdatedLemV3Example,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccount.created',
  tags: ['Balance account'],
  summary: 'Balance account created',
  description:
    'Adyen sends this webhook when you successfully [create a balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts).',
  operationId: 'post-balancePlatform.balanceAccount.created',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BalanceAccountNotificationRequestSchema,
          examples: {
            'balancePlatform-balanceAccount-created':
              PostBalancePlatformBalanceAccountCreatedBalancePlatformBalanceAccountCreatedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountRecurringTopUpCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccount.recurringTopUp.created',
  tags: ['Recurring top ups'],
  summary: 'Recurring top-up created',
  description:
    'Adyen sends this webhook when a [recurring top-up](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts/_balanceAccountId_/recurringTopUps) is successfully created for a balance account.',
  operationId: 'post-balancePlatform.balanceAccount.recurringTopUp.created',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TopUpConfigurationEventRequestSchema,
          examples: {
            'balancePlatform-recurringTopUp-created':
              PostBalancePlatformBalanceAccountRecurringTopUpCreatedBalancePlatformRecurringTopUpCreatedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: BalancePlatformNotificationResponseSchema,
          examples: {
            'balancePlatform-recurringTopUp-created':
              PostBalancePlatformBalanceAccountRecurringTopUpCreatedBalancePlatformRecurringTopUpCreated_200Example,
          },
        },
      },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountRecurringTopUpDeletedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccount.recurringTopUp.deleted',
  tags: ['Recurring top ups'],
  summary: 'Recurring top-up deleted',
  description:
    'Adyen sends this webhook when a [recurring top-up](https://docs.adyen.com/api-explorer/balanceplatform/latest/delete/balanceAccounts/_balanceAccountId_/recurringTopUps/_recurringTopUpId_) is successfully deleted from a balance account.',
  operationId: 'post-balancePlatform.balanceAccount.recurringTopUp.deleted',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TopUpConfigurationEventRequestSchema,
          examples: {
            'balancePlatform-recurringTopUp-deleted':
              PostBalancePlatformBalanceAccountRecurringTopUpDeletedBalancePlatformRecurringTopUpDeletedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: BalancePlatformNotificationResponseSchema,
          examples: {
            'balancePlatform-recurringTopUp-deleted':
              PostBalancePlatformBalanceAccountRecurringTopUpDeletedBalancePlatformRecurringTopUpDeleted_200Example,
          },
        },
      },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountRecurringTopUpUpdatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccount.recurringTopUp.updated',
  tags: ['Recurring top ups'],
  summary: 'Recurring top-up updated',
  description:
    'Adyen sends this webhook when a [recurring top-up](https://docs.adyen.com/api-explorer/balanceplatform/latest/patch/balanceAccounts/_balanceAccountId_/recurringTopUps/_recurringTopUpId_) is successfully updated for a balance account.',
  operationId: 'post-balancePlatform.balanceAccount.recurringTopUp.updated',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TopUpConfigurationUpdatedEventRequestSchema,
          examples: {
            'balancePlatform-recurringTopUp-updated':
              PostBalancePlatformBalanceAccountRecurringTopUpUpdatedBalancePlatformRecurringTopUpUpdatedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: BalancePlatformNotificationResponseSchema,
          examples: {
            'balancePlatform-recurringTopUp-updated':
              PostBalancePlatformBalanceAccountRecurringTopUpUpdatedBalancePlatformRecurringTopUpUpdated_200Example,
          },
        },
      },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountUpdatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccount.updated',
  tags: ['Balance account'],
  summary: 'Balance account updated',
  description:
    'Adyen sends this webhook when you successfully [update a balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/patch/balanceAccounts/_id_).',
  operationId: 'post-balancePlatform.balanceAccount.updated',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BalanceAccountNotificationRequestSchema,
          examples: {
            'balancePlatform-balanceAccount-updated':
              PostBalancePlatformBalanceAccountUpdatedBalancePlatformBalanceAccountUpdatedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountPayoutScheduleCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccountPayoutSchedule.created',
  tags: ['Payout schedules'],
  summary: 'Managed payout schedule created on a balance account',
  description:
    'Adyen sends this webhook when you successfully create a managed payout schedule on a balance account.',
  operationId: 'post-balancePlatform.balanceAccountPayoutSchedule.created',
  request: {
    body: {
      content: { 'application/json': { schema: PayoutScheduleBANotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountPayoutScheduleDeletedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccountPayoutSchedule.deleted',
  tags: ['Payout schedules'],
  summary: 'Managed payout schedule deleted from a balance account',
  description:
    'Adyen sends this webhook when you successfully delete a payout schedule from a balance account.',
  operationId: 'post-balancePlatform.balanceAccountPayoutSchedule.deleted',
  request: {
    body: {
      content: { 'application/json': { schema: PayoutScheduleBANotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountPayoutScheduleUpdatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccountPayoutSchedule.updated',
  tags: ['Payout schedules'],
  summary: 'Managed payout schedule updated on a balance account',
  description:
    'Adyen sends this webhook when you successfully update a managed payout schedule on a balance account.',
  operationId: 'post-balancePlatform.balanceAccountPayoutSchedule.updated',
  request: {
    body: {
      content: { 'application/json': { schema: PayoutScheduleBANotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountPayoutScheduleAutoApplicationFailedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccountPayoutScheduleAutoApplication.failed',
  tags: ['Payout schedules'],
  summary: 'Automatic application of a managed payout schedule failed',
  description:
    'Adyen sends this webhook when a managed payout schedule could not be automatically applied to a balance account.',
  operationId: 'post-balancePlatform.balanceAccountPayoutScheduleAutoApplication.failed',
  request: {
    body: {
      content: {
        'application/json': { schema: AccountPayoutAutoApplicationNotificationRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountPayoutScheduleExecutionFailedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccountPayoutScheduleExecution.failed',
  tags: ['Payout schedules'],
  summary: 'Payout schedule execution failed',
  description: 'Adyen sends this webhook when a scheduled payout execution fails.',
  operationId: 'post-balancePlatform.balanceAccountPayoutScheduleExecution.failed',
  request: {
    body: {
      content: { 'application/json': { schema: PayoutScheduleStateNotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountPayoutScheduleExecutionSkippedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccountPayoutScheduleExecution.skipped',
  tags: ['Payout schedules'],
  summary: 'Payout schedule execution skipped',
  description: 'Adyen sends this webhook when a scheduled payout execution is skipped.',
  operationId: 'post-balancePlatform.balanceAccountPayoutScheduleExecution.skipped',
  request: {
    body: {
      content: { 'application/json': { schema: PayoutScheduleStateNotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountPayoutScheduleExecutionSucceededPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccountPayoutScheduleExecution.succeeded',
  tags: ['Payout schedules'],
  summary: 'Payout schedule execution succeeded',
  description: 'Adyen sends this webhook when a scheduled payout execution succeeds.',
  operationId: 'post-balancePlatform.balanceAccountPayoutScheduleExecution.succeeded',
  request: {
    body: {
      content: { 'application/json': { schema: PayoutScheduleStateNotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountSweepCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccountSweep.created',
  tags: ['Balance account'],
  summary: 'Sweep created',
  description:
    'Adyen sends this webhook when you successfully [create a sweep](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts/_balanceAccountId_/sweeps).',
  operationId: 'post-balancePlatform.balanceAccountSweep.created',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SweepConfigurationNotificationRequestSchema,
          examples: {
            'balancePlatform-sweep-created':
              PostBalancePlatformBalanceAccountSweepCreatedBalancePlatformSweepCreatedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountSweepDeletedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccountSweep.deleted',
  tags: ['Balance account'],
  summary: 'Sweep deleted',
  description:
    'Adyen sends this webhook when you successfully [delete a sweep](https://docs.adyen.com/api-explorer/balanceplatform/latest/delete/balanceAccounts/_balanceAccountId_/sweeps/_sweepId_).',
  operationId: 'post-balancePlatform.balanceAccountSweep.deleted',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SweepConfigurationNotificationRequestSchema,
          examples: {
            'balancePlatform-sweep-deleted':
              PostBalancePlatformBalanceAccountSweepDeletedBalancePlatformSweepDeletedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountSweepUpdatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccountSweep.updated',
  tags: ['Balance account'],
  summary: 'Sweep updated',
  description:
    'Adyen sends this webhook when you successfully [update a sweep](https://docs.adyen.com/api-explorer/balanceplatform/latest/patch/balanceAccounts/_balanceAccountId_/sweeps/_sweepId_).',
  operationId: 'post-balancePlatform.balanceAccountSweep.updated',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SweepConfigurationNotificationRequestSchema,
          examples: {
            'balancePlatform-sweep-updated':
              PostBalancePlatformBalanceAccountSweepUpdatedBalancePlatformSweepUpdatedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountSweepExecutionFailedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccountSweepExecution.failed',
  tags: ['Balance account'],
  summary: 'Sweep execution failed',
  description: 'Adyen sends this webhook when a sweep execution fails.',
  operationId: 'post-balancePlatform.balanceAccountSweepExecution.failed',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SweepExecutionNotificationRequestSchema,
          examples: {
            'balancePlatform-sweep-execution-failed':
              PostBalancePlatformBalanceAccountSweepExecutionFailedBalancePlatformSweepExecutionFailedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountSweepExecutionSkippedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccountSweepExecution.skipped',
  tags: ['Balance account'],
  summary: 'Sweep skipped',
  description: 'Adyen sends this webhook when a sweep execution is skipped.',
  operationId: 'post-balancePlatform.balanceAccountSweepExecution.skipped',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SweepExecutionNotificationRequestSchema,
          examples: {
            'balancePlatform-sweep-execution-skipped':
              PostBalancePlatformBalanceAccountSweepExecutionSkippedBalancePlatformSweepExecutionSkippedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalanceAccountSweepExecutionSucceededPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balanceAccountSweepExecution.succeeded',
  tags: ['Balance account'],
  summary: 'Sweep execution succeeded',
  description: 'Adyen sends this webhook when a sweep execution succeeds.',
  operationId: 'post-balancePlatform.balanceAccountSweepExecution.succeeded',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SweepExecutionNotificationRequestSchema,
          examples: {
            'balancePlatform-sweep-execution-succeeded':
              PostBalancePlatformBalanceAccountSweepExecutionSucceededBalancePlatformSweepExecutionSucceededExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalancePlatformPayoutScheduleCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balancePlatformPayoutSchedule.created',
  tags: ['Payout schedules'],
  summary: 'Managed payout schedule created on your balance platform',
  description:
    'Adyen sends this webhook when a managed payout schedule is successfully created on your balance platform.',
  operationId: 'post-balancePlatform.balancePlatformPayoutSchedule.created',
  request: {
    body: {
      content: { 'application/json': { schema: PayoutScheduleBPNotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalancePlatformPayoutScheduleDeletedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balancePlatformPayoutSchedule.deleted',
  tags: ['Payout schedules'],
  summary: 'Managed payout schedule deleted from your balance platform',
  description:
    'Adyen sends this webhook when you successfully delete a payout schedule on a balance platform.',
  operationId: 'post-balancePlatform.balancePlatformPayoutSchedule.deleted',
  request: {
    body: {
      content: { 'application/json': { schema: PayoutScheduleBPNotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformBalancePlatformPayoutScheduleUpdatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.balancePlatformPayoutSchedule.updated',
  tags: ['Payout schedules'],
  summary: 'Managed payout schedule updated on your balance platform',
  description:
    'Adyen sends this webhook when a managed payout schedule is successfully updated on your balance platform.',
  operationId: 'post-balancePlatform.balancePlatformPayoutSchedule.updated',
  request: {
    body: {
      content: { 'application/json': { schema: PayoutScheduleBPNotificationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformCardorderCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.cardorder.created',
  tags: ['Card order'],
  summary: 'Card order created',
  description:
    'Adyen sends this webhook to indicate a successful creation of a card order after you create a [payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments) of `type` **card** and `formFactor` **physical**.',
  operationId: 'post-balancePlatform.cardorder.created',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CardOrderNotificationRequestSchema,
          examples: {
            'balancePlatform-cardorder-created-processing':
              PostBalancePlatformCardorderCreatedBalancePlatformCardorderCreatedProcessingExample,
            'balancePlatform-cardorder-created-rejected':
              PostBalancePlatformCardorderCreatedBalancePlatformCardorderCreatedRejectedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformCardorderUpdatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.cardorder.updated',
  tags: ['Card order'],
  summary: 'Card order updated',
  description: 'Adyen sends this webhook when there is an update in card order status.',
  operationId: 'post-balancePlatform.cardorder.updated',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CardOrderNotificationRequestSchema,
          examples: {
            'balancePlatform-cardorder-updated-produced':
              PostBalancePlatformCardorderUpdatedBalancePlatformCardorderUpdatedProducedExample,
            'balancePlatform-cardorder-updated-shipped-card':
              PostBalancePlatformCardorderUpdatedBalancePlatformCardorderUpdatedShippedCardExample,
            'balancePlatform-cardorder-updated-shipped-pin':
              PostBalancePlatformCardorderUpdatedBalancePlatformCardorderUpdatedShippedPinExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformMandateCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.mandate.created',
  tags: ['Direct debit mandates'],
  summary: 'Mandate created',
  description:
    'Adyen sends this webhook when a [direct debit mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk) is created.',
  operationId: 'post-balancePlatform.mandate.created',
  request: {
    body: { content: { 'application/json': { schema: MandateNotificationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformMandateUpdatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.mandate.updated',
  tags: ['Direct debit mandates'],
  summary: 'Mandate updated',
  description:
    'Adyen sends this webhook when a [direct debit mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk) is updated.',
  operationId: 'post-balancePlatform.mandate.updated',
  request: {
    body: { content: { 'application/json': { schema: MandateNotificationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformNetworkTokenCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.networkToken.created',
  tags: ['Network token'],
  summary: 'Network token created',
  description:
    'Adyen sends this webhook when you initiate a request for provisioning a network token.',
  operationId: 'post-balancePlatform.networkToken.created',
  request: {
    body: { content: { 'application/json': { schema: NetworkTokenNotificationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformNetworkTokenUpdatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.networkToken.updated',
  tags: ['Network token'],
  summary: 'Network token updated',
  description:
    'Adyen sends this webhook when there is an internal status update for the network token during the provisioning process.',
  operationId: 'post-balancePlatform.networkToken.updated',
  request: {
    body: { content: { 'application/json': { schema: NetworkTokenNotificationRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformPaymentInstrumentCreatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.paymentInstrument.created',
  tags: ['Payment instrument'],
  summary: 'Payment instrument created',
  description:
    'Adyen sends this webhook when you successfully [create a payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments). \n>The webhook does not include the card number when creating virtual cards. You can only get the card number in the response of the POST [/paymentInstruments](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/paymentInstruments#responses-200-card-number) request.',
  operationId: 'post-balancePlatform.paymentInstrument.created',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaymentNotificationRequestSchema,
          examples: {
            '01.balancePlatform-paymentInstrument-card-created':
              PostBalancePlatformPaymentInstrumentCreated_01BalancePlatformPaymentInstrumentCardCreatedExample,
            '02.balancePlatform-paymentInstrument-business-account-created':
              PostBalancePlatformPaymentInstrumentCreated_02BalancePlatformPaymentInstrumentBusinessAccountCreatedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformPaymentInstrumentUpdatedPostWebhook = {
  method: 'post',
  path: '/balancePlatform.paymentInstrument.updated',
  tags: ['Payment instrument'],
  summary: 'Payment instrument updated',
  description:
    'Adyen sends this webhook when you successfully [update a payment instrument](https://docs.adyen.com/api-explorer/balanceplatform/latest/patch/paymentInstruments/_id_). ',
  operationId: 'post-balancePlatform.paymentInstrument.updated',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaymentNotificationRequestSchema,
          examples: {
            'balancePlatform-paymentInstrument-updated':
              PostBalancePlatformPaymentInstrumentUpdatedBalancePlatformPaymentInstrumentUpdatedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const balancePlatformScoreTriggeredPostWebhook = {
  method: 'post',
  path: '/balancePlatform.score.triggered',
  tags: ['Score'],
  summary: 'Score signal triggered',
  description:
    'For merchants who opt in to the Score product, Adyen sends this webhook when a score signal is triggered against an account holder.',
  operationId: 'post-balancePlatform.score.triggered',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ScoreNotificationRequestSchema,
          examples: {
            'balancePlatform-score-triggered':
              PostBalancePlatformScoreTriggeredBalancePlatformScoreTriggeredExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformNotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}
