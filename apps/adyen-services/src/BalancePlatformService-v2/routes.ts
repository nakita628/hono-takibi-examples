import { createRoute, z } from '@hono/zod-openapi'

const RepaymentTermSchema = z
  .strictObject({
    estimatedDays: z
      .int32()
      .openapi({ description: 'The estimated term for repaying the grant, in days.' }),
    maximumDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum term for repaying the grant, in days. Only applies when `contractType` is **loan**.',
      }),
  })
  .openapi({ required: ['estimatedDays'] })
  .openapi('RepaymentTerm')

const AmountSchema = z
  .object({
    currency: z
      .string()
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

const ThresholdRepaymentSchema = z
  .strictObject({
    amount: AmountSchema.openapi({ description: 'The amount to be repaid on a 30-day basis.' }),
  })
  .openapi({ required: ['amount'] })
  .openapi('ThresholdRepayment')

type RepaymentType = {
  basisPoints: number
  term?: z.infer<typeof RepaymentTermSchema>
  threshold?: z.infer<typeof ThresholdRepaymentSchema>
}

const AULocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(5)
      .max(9)
      .openapi({ description: 'The bank account number, without separators or whitespace.' }),
    bsbCode: z
      .string()
      .length(6)
      .openapi({
        description:
          'The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.',
      }),
    type: z.literal('auLocal').default('auLocal').openapi({ description: '**auLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'bsbCode', 'type'] })
  .openapi('AULocalAccountIdentification')

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
        readOnly: true,
      }),
    allowedLevel: z
      .enum(['high', 'low', 'medium', 'notApplicable'])
      .exactOptional()
      .openapi({
        description:
          'The capability level that is allowed for the account holder.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.',
        readOnly: true,
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the capability is enabled. If **false**, the capability is temporarily disabled for the account holder.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the supporting entity.', readOnly: true }),
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
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountSupportingEntityCapability')

const AccountHolderCapabilitySchema = z
  .strictObject({
    allowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful and the account holder is permitted to use the capability.',
        readOnly: true,
      }),
    allowedLevel: z
      .enum(['high', 'low', 'medium', 'notApplicable'])
      .exactOptional()
      .openapi({
        description:
          'The capability level that is allowed for the account holder.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.',
        readOnly: true,
      }),
    allowedSettings: CapabilitySettingsSchema.exactOptional().openapi({
      description: 'A JSON object containing the settings that are allowed for the account holder.',
      readOnly: true,
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
        readOnly: true,
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
      readOnly: true,
    }),
    transferInstruments: z
      .array(AccountSupportingEntityCapabilitySchema)
      .exactOptional()
      .openapi({
        description:
          'Contains the status of the transfer instruments associated with this capability. ',
        readOnly: true,
      }),
    verificationStatus: z
      .enum(['invalid', 'pending', 'rejected', 'valid'])
      .exactOptional()
      .openapi({
        description:
          'The status of the verification checks for the capability.\n\nPossible values:\n\n* **pending**: Adyen is running the verification.\n\n* **invalid**: The verification failed. Check if the `errors` array contains more information.\n\n* **valid**: The verification has been successfully completed.\n\n* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.\n',
        readOnly: true,
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
      .openapi({ description: 'The names of the capabilities to be disallowed.', readOnly: true }),
    entityIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'The unique identifiers of the bank account(s) that the deadline applies to',
        readOnly: true,
      }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description: 'The date that verification is due by before capabilities are disallowed.',
        readOnly: true,
      }),
  })
  .openapi({ required: ['capabilities', 'expiresAt'] })
  .openapi('VerificationDeadline')

const AccountHolderSchema = z
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
    id: z
      .string()
      .openapi({ description: 'The unique identifier of the account holder.', readOnly: true }),
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
        readOnly: true,
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
        readOnly: true,
      }),
  })
  .openapi({ required: ['id', 'legalEntityId'] })
  .openapi('AccountHolder')

const AccountHolderInfoSchema = z
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
        readOnly: true,
      }),
    reference: z
      .string()
      .max(150)
      .exactOptional()
      .openapi({ description: 'Your reference for the account holder.' }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time zone of the account holder. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).',
      }),
  })
  .openapi({ required: ['legalEntityId'] })
  .openapi('AccountHolderInfo')

const AccountHolderUpdateRequestSchema = z
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
        readOnly: true,
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
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountHolderUpdateRequest')

const ActiveNetworkTokensRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z.int32().exactOptional().openapi({ description: 'The number of tokens.' }),
  })
  .openapi({ required: ['operation'] })
  .openapi('ActiveNetworkTokensRestriction')

const AdditionalBankIdentificationSchema = z
  .strictObject({
    code: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the additional bank identification.' }),
    type: z
      .enum(['auBsbCode', 'caRoutingNumber', 'gbSortCode', 'usRoutingNumber'])
      .exactOptional()
      .openapi({
        description:
          'The type of additional bank identification, depending on the country.\n\nPossible values:\n\n * **auBsbCode**: The 6-digit [Australian Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or spaces.\n * **caRoutingNumber**: The 9-digit [Canadian routing number](https://en.wikipedia.org/wiki/Routing_number_(Canada)), in EFT format, without separators or spaces.\n * **gbSortCode**: The 6-digit [UK sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or spaces\n * **usRoutingNumber**: The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or spaces.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AdditionalBankIdentification')

const AdditionalBankIdentificationRequirementSchema = z
  .strictObject({
    additionalBankIdentificationType: z
      .enum(['auBsbCode', 'caRoutingNumber', 'gbSortCode', 'usRoutingNumber'])
      .exactOptional()
      .openapi({
        description:
          'The type of additional bank identification, depending on the country.\n\nPossible values:\n\n * **auBsbCode**: The 6-digit [Australian Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or spaces.\n * **caRoutingNumber**: The 9-digit [Canadian routing number](https://en.wikipedia.org/wiki/Routing_number_(Canada)), in EFT format, without separators or spaces.\n * **gbSortCode**: The 6-digit [UK sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or spaces\n * **usRoutingNumber**: The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or spaces.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The description of the additional bank identification requirement.',
      }),
    type: z
      .literal('additionalBankIdentificationRequirement')
      .default('additionalBankIdentificationRequirement')
      .openapi({ description: '**additionalBankIdentificationRequirement**' }),
  })
  .openapi({ required: ['type'] })
  .openapi('AdditionalBankIdentificationRequirement')

const AddressRequirementSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Specifies the required address related fields for a particular route.',
      }),
    requiredAddressFields: z
      .array(z.enum(['city', 'country', 'line1', 'postalCode', 'stateOrProvince']))
      .exactOptional()
      .openapi({ description: 'List of address fields.' }),
    type: z
      .literal('addressRequirement')
      .default('addressRequirement')
      .openapi({ description: '**addressRequirement**' }),
  })
  .openapi({ required: ['type'] })
  .openapi('AddressRequirement')

const AmountMinMaxRequirementSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Specifies the eligible amounts for a particular route.' }),
    max: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Maximum amount.' }),
    min: z
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
      .openapi({ type: 'integer', format: 'int64', description: 'Minimum amount.' }),
    type: z
      .literal('amountMinMaxRequirement')
      .default('amountMinMaxRequirement')
      .openapi({ description: '**amountMinMaxRequirement**' }),
  })
  .openapi({ required: ['type'] })
  .openapi('AmountMinMaxRequirement')

const AmountNonZeroDecimalsRequirementSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies for which routes the amount in a transfer request must have no non-zero decimal places, so the transfer can only be processed if the amount consists of round numbers.',
      }),
    type: z
      .literal('amountNonZeroDecimalsRequirement')
      .default('amountNonZeroDecimalsRequirement')
      .openapi({ description: '**amountNonZeroDecimalsRequirement**' }),
  })
  .openapi({ required: ['type'] })
  .openapi('AmountNonZeroDecimalsRequirement')

const AssociationDelegatedAuthenticationDataSchema = z
  .strictObject({
    sdkOutput: z
      .string()
      .max(20000)
      .openapi({
        description:
          'A base64-encoded block with the data required to authenticate the request. You obtain this information by using our authentication SDK.',
      }),
  })
  .openapi({ required: ['sdkOutput'] })
  .openapi('AssociationDelegatedAuthenticationData')

const AssociationFinaliseRequestSchema = z
  .strictObject({
    ids: z
      .array(z.string())
      .openapi({
        description:
          'The list of unique identifiers of the resources that you are associating with the SCA device.\n\nMaximum: 5 strings.',
      }),
    strongCustomerAuthentication: AssociationDelegatedAuthenticationDataSchema.openapi({
      description:
        'Contains authentication information required to associate the resource with the SCA device.',
    }),
    type: z
      .literal('PaymentInstrument')
      .openapi({
        description:
          'The type of resource that you are associating with the SCA device.\n\nPossible value: **PaymentInstrument**',
      }),
  })
  .openapi({ required: ['ids', 'strongCustomerAuthentication', 'type'] })
  .openapi('AssociationFinaliseRequest')

const AssociationFinaliseResponseSchema = z
  .strictObject({
    deviceId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the SCA device you associated with a resource.',
      }),
    ids: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of unique identifiers of the resources that you associated with the SCA device.',
      }),
    type: z
      .literal('PAYMENT_INSTRUMENT')
      .openapi({ description: 'The type of resource that you associated with the SCA device.' }),
  })
  .openapi({ required: ['type'] })
  .openapi('AssociationFinaliseResponse')

const AssociationInitiateRequestSchema = z
  .strictObject({
    ids: z
      .array(z.string())
      .openapi({
        description:
          'The list of unique identifiers of the resources that you are associating with the SCA device.\n\nMaximum: 5 strings.',
      }),
    type: z
      .literal('PaymentInstrument')
      .openapi({
        description:
          'The type of resource that you are associating with the SCA device.\n\nPossible value: **PaymentInstrument**',
      }),
  })
  .openapi({ required: ['ids', 'type'] })
  .openapi('AssociationInitiateRequest')

const AssociationInitiateResponseSchema = z
  .strictObject({
    sdkInput: z
      .string()
      .max(20000)
      .exactOptional()
      .openapi({
        description:
          'A string that you must pass to the authentication SDK to continue with the association process.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AssociationInitiateResponse')

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

const BRLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(1)
      .max(10)
      .openapi({ description: 'The bank account number, without separators or whitespace.' }),
    bankCode: z
      .string()
      .length(3)
      .openapi({ description: 'The 3-digit bank code, with leading zeros.' }),
    branchNumber: z
      .string()
      .min(1)
      .max(4)
      .openapi({
        description: 'The bank account branch number, without separators or whitespace.',
      }),
    ispb: z
      .string()
      .length(8)
      .exactOptional()
      .openapi({ description: 'The 8-digit ISPB, with leading zeros.' }),
    type: z.literal('brLocal').default('brLocal').openapi({ description: '**brLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'bankCode', 'branchNumber', 'type'] })
  .openapi('BRLocalAccountIdentification')

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
        readOnly: true,
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

const BalanceAccountBaseSchema = z
  .strictObject({
    accountHolderId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders#responses-200-id) associated with the balance account.',
      }),
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
        readOnly: true,
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
  .openapi('BalanceAccountBase')

const BalanceAccountInfoSchema = z
  .strictObject({
    accountHolderId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders#responses-200-id) associated with the balance account.',
      }),
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
        readOnly: true,
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
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time zone of the balance account. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).',
      }),
  })
  .openapi({ required: ['accountHolderId'] })
  .openapi('BalanceAccountInfo')

const BalanceAccountUpdateRequestSchema = z
  .strictObject({
    accountHolderId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the [account holder](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/accountHolders#responses-200-id) associated with the balance account.',
      }),
    description: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description:
          'A human-readable description of the balance account. You can use this parameter to distinguish between multiple balance accounts under an account holder.',
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of key and value pairs for general use.\nThe keys do not have specific names and may be used for storing miscellaneous data as desired.\n> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.',
      }),
    platformPaymentConfiguration: PlatformPaymentConfigurationSchema.exactOptional().openapi({
      description:
        'Contains key-value pairs to configure the sales day closing time and settlement delay for a balance account.',
    }),
    reference: z
      .string()
      .max(150)
      .exactOptional()
      .openapi({ description: 'Your reference to the balance account.' }),
    status: z
      .enum(['active', 'closed', 'inactive', 'suspended'])
      .exactOptional()
      .openapi({
        description:
          'The status of the balance account. Payment instruments linked to the balance account can only be used if the balance account status is **active**.\n\nPossible values: **active**, **closed**, **suspended**.',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time zone of the balance account. For example, **Europe/Amsterdam**.\nDefaults to the time zone of the account holder if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).',
      }),
  })
  .openapi({ required: [] })
  .openapi('BalanceAccountUpdateRequest')

const BalancePlatformSchema = z
  .strictObject({
    description: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({ description: 'Your description of the balance platform.' }),
    id: z.string().openapi({ description: 'The unique identifier of the balance platform.' }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the balance platform.\n\nPossible values: **Active**, **Inactive**, **Closed**, **Suspended**.',
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('BalancePlatform')

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
    id: z.string().openapi({ description: 'The unique identifier of the sweep.', readOnly: true }),
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
      .openapi({ description: 'The reason for disabling the sweep.', readOnly: true }),
    reasonDetail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The human readable reason for disabling the sweep.',
        readOnly: true,
      }),
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

const BalanceSweepConfigurationsResponseSchema = z
  .strictObject({
    hasNext: z
      .boolean()
      .openapi({ description: 'Indicates whether there are more items on the next page.' }),
    hasPrevious: z
      .boolean()
      .openapi({ description: 'Indicates whether there are more items on the previous page.' }),
    sweeps: z
      .array(SweepConfigurationV2Schema)
      .openapi({ description: 'List of sweeps associated with the balance account.' }),
  })
  .openapi({ required: ['hasNext', 'hasPrevious', 'sweeps'] })
  .openapi('BalanceSweepConfigurationsResponse')

const CALocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(5)
      .max(12)
      .openapi({
        description: 'The 5- to 12-digit bank account number, without separators or whitespace.',
      }),
    accountType: z
      .enum(['checking', 'savings'])
      .default('checking')
      .exactOptional()
      .openapi({
        description:
          'The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.',
      }),
    institutionNumber: z
      .string()
      .length(3)
      .openapi({
        description: 'The 3-digit institution number, without separators or whitespace.',
      }),
    transitNumber: z
      .string()
      .length(5)
      .openapi({ description: 'The 5-digit transit number, without separators or whitespace.' }),
    type: z.literal('caLocal').default('caLocal').openapi({ description: '**caLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'institutionNumber', 'transitNumber', 'type'] })
  .openapi('CALocalAccountIdentification')

const CZLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(2)
      .max(17)
      .openapi({
        description:
          'The 2- to 16-digit bank account number (Číslo účtu) in the following format:\n\n- The optional prefix (předčíslí).\n\n- The required second part (základní část) which must be at least two non-zero digits.\n\nExamples:\n\n- **19-123457** (with prefix)\n\n- **123457** (without prefix)\n\n- **000019-0000123457** (with prefix, normalized)\n\n- **000000-0000123457** (without prefix, normalized)',
      }),
    bankCode: z
      .string()
      .length(4)
      .openapi({
        description: 'The 4-digit bank code (Kód banky), without separators or whitespace.',
      }),
    type: z.literal('czLocal').default('czLocal').openapi({ description: '**czLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'bankCode', 'type'] })
  .openapi('CZLocalAccountIdentification')

const DKLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(4)
      .max(10)
      .openapi({
        description:
          'The 4-10 digits bank account number (Kontonummer) (without separators or whitespace).',
      }),
    bankCode: z
      .string()
      .length(4)
      .openapi({
        description:
          'The 4-digit bank code (Registreringsnummer) (without separators or whitespace).',
      }),
    type: z.literal('dkLocal').default('dkLocal').openapi({ description: '**dkLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'bankCode', 'type'] })
  .openapi('DKLocalAccountIdentification')

const HKLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(9)
      .max(17)
      .openapi({
        description:
          'The 9- to 17-digit bank account number, without separators or whitespace. Starts with the 3-digit branch code.',
      }),
    clearingCode: z
      .string()
      .length(3)
      .openapi({ description: 'The 3-digit clearing code, without separators or whitespace.' }),
    type: z.literal('hkLocal').default('hkLocal').openapi({ description: '**hkLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'clearingCode', 'type'] })
  .openapi('HKLocalAccountIdentification')

const HULocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .length(24)
      .openapi({
        description: 'The 24-digit bank account number, without separators or whitespace.',
      }),
    type: z.literal('huLocal').default('huLocal').openapi({ description: '**huLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'type'] })
  .openapi('HULocalAccountIdentification')

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

const NOLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .length(11)
      .openapi({
        description: 'The 11-digit bank account number, without separators or whitespace.',
      }),
    type: z.literal('noLocal').default('noLocal').openapi({ description: '**noLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'type'] })
  .openapi('NOLocalAccountIdentification')

const NZLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(15)
      .max(16)
      .openapi({
        description:
          'The 15-16 digit bank account number. The first 2 digits are the bank number, the next 4 digits are the branch number, the next 7 digits are the account number, and the final 2-3 digits are the suffix.',
      }),
    type: z.literal('nzLocal').default('nzLocal').openapi({ description: '**nzLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'type'] })
  .openapi('NZLocalAccountIdentification')

const NumberAndBicAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .max(34)
      .openapi({
        description:
          'The bank account number, without separators or whitespace. The length and format depends on the bank or country.',
      }),
    additionalBankIdentification: AdditionalBankIdentificationSchema.exactOptional().openapi({
      description:
        'Additional identification codes of the bank. Some banks may require these identifiers for cross-border transfers.',
    }),
    bic: z
      .string()
      .min(8)
      .max(11)
      .openapi({ description: "The bank's 8- or 11-character BIC or SWIFT code." }),
    type: z
      .literal('numberAndBic')
      .default('numberAndBic')
      .openapi({ description: '**numberAndBic**' }),
  })
  .openapi({ required: ['accountNumber', 'bic', 'type'] })
  .openapi('NumberAndBicAccountIdentification')

const PLLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .length(26)
      .openapi({
        description:
          'The 26-digit bank account number ([Numer rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or whitespace.',
      }),
    type: z.literal('plLocal').default('plLocal').openapi({ description: '**plLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'type'] })
  .openapi('PLLocalAccountIdentification')

const SELocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(7)
      .max(10)
      .openapi({
        description:
          'The 7- to 10-digit bank account number ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)), without the clearing number, separators, or whitespace.',
      }),
    clearingNumber: z
      .string()
      .min(4)
      .max(5)
      .openapi({
        description:
          'The 4- to 5-digit clearing number ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or whitespace.',
      }),
    type: z.literal('seLocal').default('seLocal').openapi({ description: '**seLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'clearingNumber', 'type'] })
  .openapi('SELocalAccountIdentification')

const SGLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(4)
      .max(19)
      .openapi({
        description: 'The 4- to 19-digit bank account number, without separators or whitespace.',
      }),
    bic: z
      .string()
      .min(8)
      .max(11)
      .openapi({ description: "The bank's 8- or 11-character BIC or SWIFT code." }),
    type: z
      .literal('sgLocal')
      .default('sgLocal')
      .exactOptional()
      .openapi({ description: '**sgLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'bic'] })
  .openapi('SGLocalAccountIdentification')

const UKLocalAccountIdentificationSchema = z
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
  .openapi('UKLocalAccountIdentification')

const USLocalAccountIdentificationSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .min(2)
      .max(18)
      .openapi({ description: 'The bank account number, without separators or whitespace.' }),
    accountType: z
      .enum(['checking', 'savings'])
      .default('checking')
      .exactOptional()
      .openapi({
        description:
          'The bank account type.\n\nPossible values: **checking** or **savings**. Defaults to **checking**.',
      }),
    routingNumber: z
      .string()
      .length(9)
      .openapi({
        description:
          'The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.',
      }),
    type: z.literal('usLocal').default('usLocal').openapi({ description: '**usLocal**' }),
  })
  .openapi({ required: ['accountNumber', 'routingNumber', 'type'] })
  .openapi('USLocalAccountIdentification')

const BankAccountSchema = z
  .strictObject({
    accountIdentification: z
      .xor([
        AULocalAccountIdentificationSchema,
        BRLocalAccountIdentificationSchema,
        CALocalAccountIdentificationSchema,
        CZLocalAccountIdentificationSchema,
        DKLocalAccountIdentificationSchema,
        HKLocalAccountIdentificationSchema,
        HULocalAccountIdentificationSchema,
        IbanAccountIdentificationSchema,
        NOLocalAccountIdentificationSchema,
        NZLocalAccountIdentificationSchema,
        NumberAndBicAccountIdentificationSchema,
        PLLocalAccountIdentificationSchema,
        SELocalAccountIdentificationSchema,
        SGLocalAccountIdentificationSchema,
        UKLocalAccountIdentificationSchema,
        USLocalAccountIdentificationSchema,
      ])
      .openapi({
        description:
          'Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            iban: '#/components/schemas/IbanAccountIdentification',
            numberAndBic: '#/components/schemas/NumberAndBicAccountIdentification',
            auLocal: '#/components/schemas/AULocalAccountIdentification',
            czLocal: '#/components/schemas/CZLocalAccountIdentification',
            noLocal: '#/components/schemas/NOLocalAccountIdentification',
            plLocal: '#/components/schemas/PLLocalAccountIdentification',
            huLocal: '#/components/schemas/HULocalAccountIdentification',
            seLocal: '#/components/schemas/SELocalAccountIdentification',
            sgLocal: '#/components/schemas/SGLocalAccountIdentification',
            ukLocal: '#/components/schemas/UKLocalAccountIdentification',
            usLocal: '#/components/schemas/USLocalAccountIdentification',
            brLocal: '#/components/schemas/BRLocalAccountIdentification',
            dkLocal: '#/components/schemas/DKLocalAccountIdentification',
            caLocal: '#/components/schemas/CALocalAccountIdentification',
            nzLocal: '#/components/schemas/NZLocalAccountIdentification',
            hkLocal: '#/components/schemas/HKLocalAccountIdentification',
          },
        },
      }),
  })
  .openapi({ required: ['accountIdentification'] })
  .openapi('BankAccount')

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

const BankAccountIdentificationTypeRequirementSchema = z
  .strictObject({
    bankAccountIdentificationTypes: z
      .array(
        z.enum([
          'auLocal',
          'brLocal',
          'caLocal',
          'czLocal',
          'dkLocal',
          'hkLocal',
          'huLocal',
          'iban',
          'inLocal',
          'jpLocal',
          'legacy',
          'mxLocal',
          'myLocal',
          'noLocal',
          'numberAndBic',
          'nzLocal',
          'plLocal',
          'seLocal',
          'sgLocal',
          'ukLocal',
          'usLocal',
        ]),
      )
      .exactOptional()
      .openapi({
        description: 'List of bank account identification types: eg.; [iban , numberAndBic]',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the bank account details for a particular route per required field in this object depending on the country of the bank account and the currency of the transfer.',
      }),
    type: z
      .literal('bankAccountIdentificationTypeRequirement')
      .default('bankAccountIdentificationTypeRequirement')
      .openapi({ description: '**bankAccountIdentificationTypeRequirement**' }),
  })
  .openapi({ required: ['type'] })
  .openapi('BankAccountIdentificationTypeRequirement')

const BankAccountIdentificationValidationRequestSchema = z
  .strictObject({
    accountIdentification: z
      .xor([
        AULocalAccountIdentificationSchema,
        BRLocalAccountIdentificationSchema,
        CALocalAccountIdentificationSchema,
        CZLocalAccountIdentificationSchema,
        DKLocalAccountIdentificationSchema,
        HKLocalAccountIdentificationSchema,
        HULocalAccountIdentificationSchema,
        IbanAccountIdentificationSchema,
        NOLocalAccountIdentificationSchema,
        NZLocalAccountIdentificationSchema,
        NumberAndBicAccountIdentificationSchema,
        PLLocalAccountIdentificationSchema,
        SELocalAccountIdentificationSchema,
        SGLocalAccountIdentificationSchema,
        UKLocalAccountIdentificationSchema,
        USLocalAccountIdentificationSchema,
      ])
      .openapi({
        description: 'Bank account identification.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            iban: '#/components/schemas/IbanAccountIdentification',
            numberAndBic: '#/components/schemas/NumberAndBicAccountIdentification',
            auLocal: '#/components/schemas/AULocalAccountIdentification',
            czLocal: '#/components/schemas/CZLocalAccountIdentification',
            noLocal: '#/components/schemas/NOLocalAccountIdentification',
            plLocal: '#/components/schemas/PLLocalAccountIdentification',
            huLocal: '#/components/schemas/HULocalAccountIdentification',
            seLocal: '#/components/schemas/SELocalAccountIdentification',
            sgLocal: '#/components/schemas/SGLocalAccountIdentification',
            ukLocal: '#/components/schemas/UKLocalAccountIdentification',
            usLocal: '#/components/schemas/USLocalAccountIdentification',
            brLocal: '#/components/schemas/BRLocalAccountIdentification',
            dkLocal: '#/components/schemas/DKLocalAccountIdentification',
            caLocal: '#/components/schemas/CALocalAccountIdentification',
            nzLocal: '#/components/schemas/NZLocalAccountIdentification',
            hkLocal: '#/components/schemas/HKLocalAccountIdentification',
          },
        },
      }),
  })
  .openapi({ required: ['accountIdentification'] })
  .openapi('BankAccountIdentificationValidationRequest')

const BankAccountModelSchema = z
  .strictObject({
    formFactor: z
      .enum(['physical', 'unknown', 'virtual'])
      .nullable()
      .default('physical')
      .exactOptional()
      .openapi({
        description:
          'Business accounts with a `formFactor` value of **physical** are business accounts issued under the central bank of that country. The default value is **physical** for NL, US, and UK business accounts. \n\nAdyen creates a local IBAN for business accounts when the `formFactor` value is set to **virtual**. The local IBANs that are supported are for DE and FR, which reference a physical NL account, with funds being routed through the central bank of NL.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BankAccountModel')

const BankIdentificationSchema = z
  .strictObject({
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.',
      }),
    identification: z
      .string()
      .exactOptional()
      .openapi({ description: 'The bank identification code.' }),
    identificationType: z
      .enum(['bic', 'iban', 'routingNumber', 'sortCode'])
      .exactOptional()
      .openapi({
        description:
          'The type of the identification.\n\nPossible values: **iban**, **routingNumber**, **sortCode**, **bic**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BankIdentification')

const BrandVariantsRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of card brand variants.\n\nPossible values: \n\n- **mc**, **mccredit**, **mccommercialcredit_b2b**, **mcdebit**, **mcbusinessdebit**, **mcbusinessworlddebit**, **mcprepaid**, **mcmaestro**\n\n - **visa**, **visacredit**, **visadebit**, **visaprepaid**.\n\nYou can specify a rule for a generic variant. For example, to create a rule for all Mastercard payment instruments, use **mc**. The rule is applied to all payment instruments under **mc**, such as **mcbusinessdebit** and **mcdebit**.\n\n',
      }),
  })
  .openapi({ required: ['operation'] })
  .openapi('BrandVariantsRestriction')

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

const CapitalBalanceSchema = z
  .strictObject({
    currency: z
      .string()
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes).',
      }),
    fee: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Fee amount.' }),
    principal: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', description: 'Principal amount.' }),
    total: z
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
        description: 'Total amount. A sum of principal amount and fee amount.',
      }),
  })
  .openapi({ required: ['currency', 'fee', 'principal', 'total'] })
  .openapi('CapitalBalance')

const GrantLimitSchema = z
  .strictObject({
    amount: AmountSchema.exactOptional().openapi({
      description: 'The amount available on the grant account.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GrantLimit')

const CapitalGrantAccountSchema = z
  .strictObject({
    balances: z
      .array(CapitalBalanceSchema)
      .exactOptional()
      .openapi({ description: 'The balances of the grant account.' }),
    fundingBalanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the balance account used to fund the grant.',
      }),
    id: z.string().exactOptional().openapi({ description: 'The identifier of the grant account.' }),
    limits: z
      .array(GrantLimitSchema)
      .exactOptional()
      .openapi({ description: 'The limits of the grant account.' }),
  })
  .openapi({ required: [] })
  .openapi('CapitalGrantAccount')

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
        readOnly: true,
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

const CardInfoSchema = z
  .strictObject({
    authentication: AuthenticationSchema.exactOptional().openapi({
      description:
        "Contains the card user's password and mobile phone number. This is required when you issue cards that can be used to make online payments within the EEA and the UK, or can be added to digital wallets. Refer to [3D Secure and digital wallets](https://docs.adyen.com/issuing/3d-secure-and-wallets) for more information.",
    }),
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
    deliveryContact: DeliveryContactSchema.exactOptional().openapi({
      description: 'The delivery contact (name and address) for physical card delivery.',
      'x-addedInVersion': '2',
    }),
    formFactor: z
      .enum(['physical', 'unknown', 'virtual'])
      .openapi({
        description: 'The form factor of the card.\nPossible values: **virtual**, **physical**.',
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
  .openapi('CardInfo')

const CardOrderSchema = z
  .strictObject({
    beginDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the card order is created.' }),
    cardManufacturingProfileId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the card manufacturer profile.' }),
    closedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the card order processing ends.' }),
    endDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date when you manually closed the card order.\n\nCard orders are automatically closed by the end of the day it was created. If you manually closed it beforehand, the closing date is shown as the `endDate`.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the card order.' }),
    lockDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the card order processing begins.' }),
    serviceCenter: z.string().exactOptional().openapi({ description: 'The service center.' }),
    status: z
      .enum(['closed', 'open'])
      .exactOptional()
      .openapi({
        description: 'The status of the card order.\n\nPossible values: **Open**, **Closed**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CardOrder')

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
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the resource.', readOnly: true }),
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

const CounterpartySchema = z
  .strictObject({
    bankAccount: BankAccountSchema.exactOptional().openapi({
      description: 'Contains information about the bank account.',
    }),
    transferInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).',
      }),
  })
  .openapi({ required: [] })
  .openapi('Counterparty')

const CounterpartyBankRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z
      .array(BankIdentificationSchema)
      .exactOptional()
      .openapi({ description: 'The list of counterparty bank institutions to be evaluated.' }),
  })
  .openapi({ required: ['operation'] })
  .openapi('CounterpartyBankRestriction')

const CounterpartyTypesRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z
      .array(z.enum(['balanceAccount', 'bankAccount', 'card', 'transferInstrument']))
      .exactOptional()
      .openapi({ description: 'The list of counterparty types to be evaluated.' }),
  })
  .openapi({ required: ['operation'] })
  .openapi('CounterpartyTypesRestriction')

const CountriesRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes.',
      }),
  })
  .openapi({ required: ['operation'] })
  .openapi('CountriesRestriction')

const CreateSweepConfigurationV2Schema = z
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
      .openapi({ description: 'The reason for disabling the sweep.', readOnly: true }),
    reasonDetail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The human readable reason for disabling the sweep.',
        readOnly: true,
      }),
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
  .openapi({ required: ['counterparty', 'currency', 'schedule'] })
  .openapi('CreateSweepConfigurationV2')

const DayOfWeekRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z
      .array(z.enum(['friday', 'monday', 'saturday', 'sunday', 'thursday', 'tuesday', 'wednesday']))
      .exactOptional()
      .openapi({
        description:
          'List of days of the week.\n\nPossible values: **monday**, **tuesday**, **wednesday**, **thursday**, **friday**, **saturday**, **sunday**.\n\n',
      }),
  })
  .openapi({ required: ['operation'] })
  .openapi('DayOfWeekRestriction')

const DelegatedAuthenticationDataSchema = z
  .strictObject({
    sdkOutput: z
      .string()
      .max(20000)
      .openapi({
        description:
          'A base64-encoded block with the data required to register the SCA device. You obtain this information by using our authentication SDK.',
      }),
  })
  .openapi({ required: ['sdkOutput'] })
  .openapi('DelegatedAuthenticationData')

const DeviceSchema = z
  .strictObject({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the SCA device.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the SCA device. You can show this name to your user to help them identify the device.',
      }),
    paymentInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the payment instrument that is associated with the SCA device.',
      }),
    type: z
      .enum(['ios', 'android', 'browser'])
      .exactOptional()
      .openapi({
        description: 'The type of device.\n\nPossible values: **ios**, **android**, **browser**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Device')

const PhoneInfoSchema = z
  .strictObject({
    hashedNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The hashed value of the phone number used to provision the network token.',
      }),
    lastFourDigits: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The last four digits of the phone number used to provision the network token.',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The full phone number of the device used to provision the network token.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PhoneInfo')

const DeviceInfoSchema = z
  .strictObject({
    formFactor: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of device used to provision the network token.' }),
    osName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The operating system of the device used to provision the network token.',
      }),
    phone: PhoneInfoSchema.exactOptional().openapi({
      description:
        'The information about the phone number of the device used to provision the the network token. This object is conditionally returned and is available for up to 24 hours after the provisioning request (access to this field requires a specific user role, please contact your Adyen representative to request permission).',
      'x-addedInVersion': '2',
    }),
  })
  .openapi({ required: [] })
  .openapi('DeviceInfo')

const DifferentCurrenciesRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Checks the currency of the payment against the currency of the payment instrument.\n\nPossible values:\n\n- **true**: The currency of the payment is different from the currency of the payment instrument.\n\n- **false**: The currencies are the same.\n\n',
      }),
  })
  .openapi({ required: ['operation'] })
  .openapi('DifferentCurrenciesRestriction')

const DurationSchema = z
  .strictObject({
    unit: z
      .enum(['days', 'hours', 'minutes', 'months', 'weeks'])
      .exactOptional()
      .openapi({
        description:
          'The unit of time. You can only use **minutes** and **hours** if the `interval.type` is **sliding**.\n\nPossible values: **minutes**, **hours**, **days**, **weeks**, or **months**',
      }),
    value: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The length of time by the unit. For example, 5 days.\n\nThe maximum duration is 90 days or an equivalent in other units. For example, 3 months.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Duration')

const EntryModesRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z
      .array(
        z.enum([
          'barcode',
          'chip',
          'cof',
          'contactless',
          'magstripe',
          'manual',
          'ocr',
          'server',
          'unknown',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'List of point-of-sale entry modes.\n\nPossible values: **barcode**, **chip**, **cof**, **contactless**, **magstripe**, **manual**, **ocr**, **server**.\n\n',
      }),
  })
  .openapi({ required: ['operation'] })
  .openapi('EntryModesRestriction')

const FeeSchema = z
  .strictObject({ amount: AmountSchema.openapi({ description: 'Contains the fee amount.' }) })
  .openapi({ required: ['amount'] })
  .openapi('Fee')

const NetworkTokenRequestorSchema = z
  .strictObject({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the network token requestor.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the network token requestor.' }),
  })
  .openapi({ required: [] })
  .openapi('NetworkTokenRequestor')

const NetworkTokenSchema = z
  .strictObject({
    brandVariant: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The card brand variant of the payment instrument associated with the network token. For example, **mc_prepaid_mrw**.',
      }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Date and time when the network token was created, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) extended format. For example, **2025-03-19T10:15:30+01:00**..',
      }),
    device: DeviceInfoSchema.exactOptional().openapi({
      description: 'Contains information about the device used to provision the network token.',
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
          'The unique identifier of the payment instrument to which this network token belongs to.',
      }),
    status: z
      .enum(['active', 'inactive', 'suspended', 'closed'])
      .exactOptional()
      .openapi({
        description:
          'The status of the network token. Possible values: **active**, **inactive**, **suspended**, **closed**.',
      }),
    tokenLastFour: z
      .string()
      .exactOptional()
      .openapi({ description: 'The last four digits of the network token `id`.' }),
    tokenRequestor: NetworkTokenRequestorSchema.exactOptional().openapi({
      description:
        'The token requestor is an entity who requested tokenization of the card for secure payments.',
    }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of network token. For example, **wallet**, **cof**.' }),
  })
  .openapi({ required: [] })
  .openapi('NetworkToken')

const GetNetworkTokenResponseSchema = z
  .strictObject({
    token: NetworkTokenSchema.openapi({ description: 'The details of the network token.' }),
  })
  .openapi({ required: ['token'] })
  .openapi('GetNetworkTokenResponse')

const GetTaxFormResponseSchema = z
  .strictObject({
    content: z.string().openapi({ description: 'The content of the tax form in Base64 format.' }),
    contentType: z
      .literal('application/pdf')
      .exactOptional()
      .openapi({
        description:
          'The content type of the tax form.\n\nPossible values:\n*  **application/pdf**\n\n',
      }),
  })
  .openapi({ required: ['content'] })
  .openapi('GetTaxFormResponse')

const RepaymentSchema: z.ZodType<RepaymentType> = z
  .lazy(() =>
    z
      .strictObject({
        basisPoints: z
          .int32()
          .openapi({
            description:
              'The repayment that is deducted daily from incoming net volume, in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).',
          }),
        term: RepaymentTermSchema.exactOptional().openapi({
          description: 'An object containing the details of the configuration for repayment term.',
        }),
        threshold: ThresholdRepaymentSchema.exactOptional().openapi({
          description: 'An object containing the details of the 30-day repayment threshold.',
        }),
      })
      .openapi({ required: ['basisPoints'] }),
  )
  .openapi('Repayment')

const GrantOfferSchema = z
  .strictObject({
    accountHolderId: z
      .string()
      .openapi({
        description: 'The identifier of the account holder to which the grant is offered.',
      }),
    amount: AmountSchema.exactOptional().openapi({
      description: 'The principal amount of the grant.',
    }),
    contractType: z
      .enum(['cashAdvance', 'loan'])
      .exactOptional()
      .openapi({
        description:
          'The contract type of the grant offer. Possible value: **cashAdvance**, **loan**.',
      }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The end date of the grant offer validity period.' }),
    fee: FeeSchema.exactOptional().openapi({ description: 'Details of the fee configuration.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the grant offer.' }),
    repayment: RepaymentSchema.exactOptional().openapi({
      description: 'Details of the repayment configuration.',
    }),
    startsAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The starting date of the grant offer validity period.' }),
  })
  .openapi({ required: ['accountHolderId'] })
  .openapi('GrantOffer')

const GrantOffersSchema = z
  .strictObject({
    grantOffers: z
      .array(GrantOfferSchema)
      .openapi({ description: 'A list of available grant offers.' }),
  })
  .openapi({ required: ['grantOffers'] })
  .openapi('GrantOffers')

const HrefSchema = z
  .object({ href: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Href')

const IbanAccountIdentificationRequirementSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the allowed prefixes for the international bank account number as defined in the ISO-13616 standard.',
      }),
    ibanPrefixes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Contains the list of allowed prefixes for international bank accounts. For example: NL, US, UK.',
      }),
    type: z
      .literal('ibanAccountIdentificationRequirement')
      .default('ibanAccountIdentificationRequirement')
      .openapi({ description: '**ibanAccountIdentificationRequirement**' }),
  })
  .openapi({ required: ['type'] })
  .openapi('IbanAccountIdentificationRequirement')

const InternationalTransactionRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean indicating whether transaction is an international transaction.\n\nPossible values:\n\n- **true**: The transaction is an international transaction.\n\n- **false**: The transaction is a domestic transaction.\n\n',
      }),
  })
  .openapi({ required: ['operation'] })
  .openapi('InternationalTransactionRestriction')

const InvalidFieldSchema = z
  .object({
    message: z.string().openapi({ description: 'Description of the validation error.' }),
    name: z.string().openapi({ description: 'The field that has an invalid value.' }),
    value: z.string().openapi({ description: 'The invalid value.' }),
  })
  .openapi({ required: ['message', 'name', 'value'] })
  .openapi('InvalidField')

const JSONObjectSchema = z.object({}).openapi('JSONObject')

const LinkSchema = z
  .object({
    first: HrefSchema.exactOptional().openapi({
      description: 'The link to the first page of the list.',
    }),
    last: HrefSchema.exactOptional().openapi({
      description: 'The link to the last page of the list.',
    }),
    next: HrefSchema.exactOptional().openapi({
      description: 'The link to the next page of the list.',
    }),
    previous: HrefSchema.exactOptional().openapi({
      description: 'The link to the previous page of the list.',
    }),
    self: HrefSchema.exactOptional().openapi({
      description: 'The link to the list page you are currently viewing.',
    }),
  })
  .openapi({ required: [] })
  .openapi('Link')

const ListNetworkTokensResponseSchema = z
  .strictObject({
    networkTokens: z
      .array(NetworkTokenSchema)
      .exactOptional()
      .openapi({ description: 'List of network tokens.' }),
  })
  .openapi({ required: [] })
  .openapi('ListNetworkTokensResponse')

const MatchingTransactionsRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z.int32().exactOptional().openapi({ description: 'The number of transactions.' }),
  })
  .openapi({ required: ['operation'] })
  .openapi('MatchingTransactionsRestriction')

const MatchingValuesRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z
      .array(z.enum(['acquirerId', 'amount', 'currency', 'merchantId', 'merchantName']))
      .exactOptional(),
  })
  .openapi({ required: ['operation'] })
  .openapi('MatchingValuesRestriction')

const MccsRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of merchant category codes (MCCs).' }),
  })
  .openapi({ required: ['operation'] })
  .openapi('MccsRestriction')

const MerchantAcquirerPairSchema = z
  .strictObject({
    acquirerId: z.string().exactOptional().openapi({ description: 'The acquirer ID.' }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The merchant identification number (MID).' }),
  })
  .openapi({ required: [] })
  .openapi('MerchantAcquirerPair')

const StringMatchSchema = z
  .strictObject({
    operation: z
      .enum(['contains', 'endsWith', 'isEqualTo', 'startsWith'])
      .exactOptional()
      .openapi({
        description:
          'The type of string matching operation. Possible values:  **startsWith**, **endsWith**, **isEqualTo**, **contains**,',
      }),
    value: z.string().exactOptional().openapi({ description: 'The string to be matched.' }),
  })
  .openapi({ required: [] })
  .openapi('StringMatch')

const MerchantNamesRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z.array(StringMatchSchema).exactOptional(),
  })
  .openapi({ required: ['operation'] })
  .openapi('MerchantNamesRestriction')

const MerchantsRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z
      .array(MerchantAcquirerPairSchema)
      .exactOptional()
      .openapi({ description: 'List of merchant ID and acquirer ID pairs.' }),
  })
  .openapi({ required: ['operation'] })
  .openapi('MerchantsRestriction')

const NetworkTokenActivationDataRequestSchema = z
  .strictObject({
    sdkOutput: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A block of data automatically generated by Adyen's SDK for network token provisioning. This `sdkOutput` is required to create provisioning data for the network token.\n\nFor more information, see the repositories for Adyen's SDKs for network token provisioning:\n* [Adyen Apple Pay Provisioning SDK](https://github.com/Adyen/adyen-apple-pay-provisioning-ios).\n* [Adyen Google Wallet Provisioning SDK](https://github.com/Adyen/adyen-issuing-android)",
      }),
  })
  .openapi({ required: [] })
  .openapi('NetworkTokenActivationDataRequest')

const NetworkTokenActivationDataResponseSchema = z
  .strictObject({
    sdkInput: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A block of data that contains the activation data for a network token. This `sdkInput` is required to initialize Adyen's SDK for network token provisioning.\n\nFor more information, see the repositories for Adyen's SDKs for network token provisioning:\n* [Adyen Apple Pay Provisioning SDK](https://github.com/Adyen/adyen-apple-pay-provisioning-ios).\n* [Adyen Google Wallet Provisioning SDK](https://github.com/Adyen/adyen-issuing-android)",
      }),
  })
  .openapi({ required: [] })
  .openapi('NetworkTokenActivationDataResponse')

const PaginatedAccountHoldersResponseSchema = z
  .strictObject({
    accountHolders: z
      .array(AccountHolderSchema)
      .openapi({ description: 'List of account holders.' }),
    hasNext: z
      .boolean()
      .openapi({ description: 'Indicates whether there are more items on the next page.' }),
    hasPrevious: z
      .boolean()
      .openapi({ description: 'Indicates whether there are more items on the previous page.' }),
  })
  .openapi({ required: ['accountHolders', 'hasNext', 'hasPrevious'] })
  .openapi('PaginatedAccountHoldersResponse')

const PaginatedBalanceAccountsResponseSchema = z
  .strictObject({
    balanceAccounts: z
      .array(BalanceAccountBaseSchema)
      .openapi({ description: 'List of balance accounts.' }),
    hasNext: z
      .boolean()
      .openapi({ description: 'Indicates whether there are more items on the next page.' }),
    hasPrevious: z
      .boolean()
      .openapi({ description: 'Indicates whether there are more items on the previous page.' }),
  })
  .openapi({ required: ['balanceAccounts', 'hasNext', 'hasPrevious'] })
  .openapi('PaginatedBalanceAccountsResponse')

const PaginatedGetCardOrderItemResponseSchema = z
  .strictObject({
    data: z
      .array(CardOrderItemSchema)
      .openapi({ description: 'List of card order items in the card order batch.' }),
    hasNext: z
      .boolean()
      .openapi({ description: 'Indicates whether there are more items on the next page.' }),
    hasPrevious: z
      .boolean()
      .openapi({ description: 'Indicates whether there are more items on the previous page.' }),
  })
  .openapi({ required: ['data', 'hasNext', 'hasPrevious'] })
  .openapi('PaginatedGetCardOrderItemResponse')

const PaginatedGetCardOrderResponseSchema = z
  .strictObject({
    cardOrders: z
      .array(CardOrderSchema)
      .exactOptional()
      .openapi({ description: 'Contains objects with information about card orders.' }),
    hasNext: z
      .boolean()
      .openapi({ description: 'Indicates whether there are more items on the next page.' }),
    hasPrevious: z
      .boolean()
      .openapi({ description: 'Indicates whether there are more items on the previous page.' }),
  })
  .openapi({ required: ['hasNext', 'hasPrevious'] })
  .openapi('PaginatedGetCardOrderResponse')

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

const PaginatedPaymentInstrumentsResponseSchema = z
  .strictObject({
    hasNext: z
      .boolean()
      .openapi({ description: 'Indicates whether there are more items on the next page.' }),
    hasPrevious: z
      .boolean()
      .openapi({ description: 'Indicates whether there are more items on the previous page.' }),
    paymentInstruments: z
      .array(PaymentInstrumentSchema)
      .openapi({ description: 'List of payment instruments associated with the balance account.' }),
  })
  .openapi({ required: ['hasNext', 'hasPrevious', 'paymentInstruments'] })
  .openapi('PaginatedPaymentInstrumentsResponse')

const PaymentInstrumentGroupSchema = z
  .strictObject({
    balancePlatform: z
      .string()
      .openapi({
        description:
          'The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the payment instrument group belongs.',
      }),
    description: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({ description: 'Your description for the payment instrument group.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the payment instrument group.' }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Properties of the payment instrument group.' }),
    reference: z
      .string()
      .max(150)
      .exactOptional()
      .openapi({ description: 'Your reference for the payment instrument group.' }),
    txVariant: z
      .string()
      .openapi({ description: 'The tx variant of the payment instrument group.' }),
  })
  .openapi({ required: ['balancePlatform', 'txVariant'] })
  .openapi('PaymentInstrumentGroup')

const PaymentInstrumentGroupInfoSchema = z
  .strictObject({
    balancePlatform: z
      .string()
      .openapi({
        description:
          'The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the payment instrument group belongs.',
      }),
    description: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({ description: 'Your description for the payment instrument group.' }),
    properties: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({ description: 'Properties of the payment instrument group.' }),
    reference: z
      .string()
      .max(150)
      .exactOptional()
      .openapi({ description: 'Your reference for the payment instrument group.' }),
    txVariant: z
      .string()
      .openapi({ description: 'The tx variant of the payment instrument group.' }),
  })
  .openapi({ required: ['balancePlatform', 'txVariant'] })
  .openapi('PaymentInstrumentGroupInfo')

const PaymentInstrumentInfoSchema = z
  .strictObject({
    balanceAccountId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/v1/post/balanceAccounts__resParam_id) associated with the payment instrument.',
      }),
    bankAccount: BankAccountModelSchema.exactOptional().openapi({
      description: 'Contains the business account details.',
    }),
    card: CardInfoSchema.exactOptional().openapi({
      description:
        'Contains information about the card. Required when you create a payment instrument of `type` **card**.',
    }),
    description: z
      .string()
      .max(300)
      .exactOptional()
      .openapi({
        description: 'Your description for the payment instrument, maximum 300 characters.',
      }),
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
  .openapi({ required: ['balanceAccountId', 'issuingCountryCode', 'type'] })
  .openapi('PaymentInstrumentInfo')

const PaymentInstrumentRequirementSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the requirements for the payment instrument that need to be included in the request for a particular route.',
      }),
    issuingCountryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the payment instrument is issued. For example, **NL** or **US**.',
      }),
    issuingCountryCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The two-character ISO-3166-1 alpha-2 country code list for payment instruments.',
      }),
    onlyForCrossBalancePlatform: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies if the requirement only applies to transfers to another balance platform.',
      }),
    paymentInstrumentType: z
      .enum(['BankAccount', 'Card'])
      .exactOptional()
      .openapi({
        description: 'The type of the payment instrument. For example, "BankAccount" or "Card".',
      }),
    type: z
      .literal('paymentInstrumentRequirement')
      .default('paymentInstrumentRequirement')
      .openapi({ description: '**paymentInstrumentRequirement**' }),
  })
  .openapi({ required: ['type'] })
  .openapi('PaymentInstrumentRequirement')

const PaymentInstrumentRevealInfoSchema = z
  .strictObject({
    cvc: z.string().openapi({ description: 'The CVC2 value of the card.' }),
    expiration: ExpirySchema.openapi({ description: 'The expiration date of the card.' }),
    pan: z.string().openapi({ description: 'The primary account number (PAN) of the card.' }),
  })
  .openapi({ required: ['cvc', 'expiration', 'pan'] })
  .openapi('PaymentInstrumentRevealInfo')

const PaymentInstrumentRevealRequestSchema = z
  .strictObject({
    encryptedKey: z
      .string()
      .openapi({
        description:
          'The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen.',
      }),
    paymentInstrumentId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the payment instrument, which is the card for which you are managing the PIN.',
      }),
  })
  .openapi({ required: ['encryptedKey', 'paymentInstrumentId'] })
  .openapi('PaymentInstrumentRevealRequest')

const PaymentInstrumentRevealResponseSchema = z
  .strictObject({
    encryptedData: z
      .string()
      .openapi({ description: 'The data encrypted using the `encryptedKey`.' }),
  })
  .openapi({ required: ['encryptedData'] })
  .openapi('PaymentInstrumentRevealResponse')

const PaymentInstrumentUpdateRequestSchema = z
  .strictObject({
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the balance account associated with this payment instrument.\n>You can only change the balance account ID if the payment instrument has **inactive** status.',
      }),
    card: CardInfoSchema.exactOptional().openapi({
      description: 'Object that contains information about the card payment instrument.',
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
          'Comment for the status of the payment instrument.\n\nRequired if `statusReason` is **other**.',
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
          'The reason for updating the status of the payment instrument.\n\nPossible values: **lost**, **stolen**, **damaged**, **suspectedFraud**, **expired**, **endOfLife**, **accountClosure**, **other**.\nIf the reason is **other**, you must also send the `statusComment` parameter describing the status change.',
        'x-addedInVersion': '2',
      }),
  })
  .openapi({ required: [] })
  .openapi('PaymentInstrumentUpdateRequest')

const PinChangeRequestSchema = z
  .strictObject({
    encryptedKey: z
      .string()
      .openapi({
        description:
          'The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen.',
      }),
    encryptedPinBlock: z
      .string()
      .openapi({
        description:
          'The encrypted [PIN block](https://www.pcisecuritystandards.org/glossary/pin-block).',
      }),
    paymentInstrumentId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the payment instrument, which is the card for which you are managing the PIN.',
      }),
    token: z
      .string()
      .openapi({
        description: 'The 16-digit token that you used to generate the `encryptedPinBlock`.',
      }),
  })
  .openapi({ required: ['encryptedKey', 'encryptedPinBlock', 'paymentInstrumentId', 'token'] })
  .openapi('PinChangeRequest')

const PinChangeResponseSchema = z
  .strictObject({
    status: z
      .enum(['completed', 'pending', 'unavailable'])
      .openapi({
        description:
          'The status of the request for PIN change.\n\nPossible values: **completed**, **pending**, **unavailable**.',
      }),
  })
  .openapi({ required: ['status'] })
  .openapi('PinChangeResponse')

const ProcessingTypesRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z
      .array(
        z.enum([
          'atmWithdraw',
          'balanceInquiry',
          'ecommerce',
          'moto',
          'pos',
          'recurring',
          'token',
          'unknown',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'List of processing types.\n\nPossible values: **atmWithdraw**, **balanceInquiry**, **ecommerce**, **moto**, **pos**, **recurring**, **token**.\n\n',
      }),
  })
  .openapi({ required: ['operation'] })
  .openapi('ProcessingTypesRestriction')

const PublicKeyResponseSchema = z
  .strictObject({
    publicKey: z
      .string()
      .openapi({ description: 'The public key you need for encrypting a symmetric session key.' }),
    publicKeyExpiryDate: z.string().openapi({ description: 'The expiry date of the public key.' }),
  })
  .openapi({ required: ['publicKey', 'publicKeyExpiryDate'] })
  .openapi('PublicKeyResponse')

const RegisterSCAFinalResponseSchema = z
  .strictObject({
    success: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Specifies if the registration was initiated successfully.' }),
  })
  .openapi({ required: [] })
  .openapi('RegisterSCAFinalResponse')

const RegisterSCARequestSchema = z
  .strictObject({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the SCA device that you are registering. You can use it to help your users identify the device.\n\nIf you do not specify a `name`, Adyen automatically generates one.',
      }),
    paymentInstrumentId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the payment instrument for which you are registering the SCA device.',
      }),
    strongCustomerAuthentication: DelegatedAuthenticationDataSchema.openapi({
      description: 'Contains information required to register the SCA device.',
    }),
  })
  .openapi({ required: ['paymentInstrumentId', 'strongCustomerAuthentication'] })
  .openapi('RegisterSCARequest')

const RegisterSCAResponseSchema = z
  .strictObject({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the SCA device you are registering.' }),
    paymentInstrumentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the payment instrument for which you are registering the SCA device.',
      }),
    sdkInput: z
      .string()
      .max(20000)
      .exactOptional()
      .openapi({
        description:
          'A string that you must pass to the authentication SDK to continue with the registration process.',
      }),
    success: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Specifies if the registration was initiated successfully.' }),
  })
  .openapi({ required: [] })
  .openapi('RegisterSCAResponse')

const RestServiceErrorSchema = z
  .strictObject({
    detail: z
      .string()
      .openapi({
        description: 'A human-readable explanation specific to this occurrence of the problem.',
      }),
    errorCode: z.string().openapi({ description: 'A code that identifies the problem type.' }),
    instance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique URI that identifies the specific occurrence of the problem.',
      }),
    invalidFields: z
      .array(InvalidFieldSchema)
      .exactOptional()
      .openapi({ description: 'Detailed explanation of each validation error, when applicable.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique reference for the request, essentially the same as `pspReference`.',
      }),
    response: JSONObjectSchema.exactOptional().openapi({ description: 'JSON response payload.' }),
    status: z.int32().openapi({ description: 'The HTTP status code.' }),
    title: z
      .string()
      .openapi({ description: 'A short, human-readable summary of the problem type.' }),
    type: z
      .string()
      .openapi({
        description:
          'A URI that identifies the problem type, pointing to human-readable documentation on this problem type.',
      }),
  })
  .openapi({ required: ['detail', 'errorCode', 'status', 'title', 'type'] })
  .openapi('RestServiceError')

const RevealPinRequestSchema = z
  .strictObject({
    encryptedKey: z
      .string()
      .openapi({
        description:
          'The symmetric session key that you encrypted with the [public key](https://docs.adyen.com/api-explorer/balanceplatform/2/get/publicKey) that you received from Adyen.',
      }),
    paymentInstrumentId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the payment instrument, which is the card for which you are managing the PIN.',
      }),
  })
  .openapi({ required: ['encryptedKey', 'paymentInstrumentId'] })
  .openapi('RevealPinRequest')

const RevealPinResponseSchema = z
  .strictObject({
    encryptedPinBlock: z
      .string()
      .openapi({
        description:
          'The encrypted [PIN block](https://www.pcisecuritystandards.org/glossary/pin-block).',
      }),
    token: z
      .string()
      .openapi({
        description: 'The 16-digit token that you need to extract the `encryptedPinBlock`.',
      }),
  })
  .openapi({ required: ['encryptedPinBlock', 'token'] })
  .openapi('RevealPinResponse')

const RiskScoresSchema = z
  .strictObject({
    mastercard: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Transaction risk score provided by Mastercard. Values provided by Mastercard range between 0 (lowest risk) to 998 (highest risk).',
      }),
    visa: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Transaction risk score provided by Visa. Values provided by Visa range between 01 (lowest risk) to 99 (highest risk).',
      }),
  })
  .openapi({ required: [] })
  .openapi('RiskScores')

const RiskScoresRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: RiskScoresSchema.exactOptional(),
  })
  .openapi({ required: ['operation'] })
  .openapi('RiskScoresRestriction')

const SameAmountRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z.boolean().exactOptional(),
  })
  .openapi({ required: ['operation'] })
  .openapi('SameAmountRestriction')

const SameCounterpartyRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z.boolean().exactOptional(),
  })
  .openapi({ required: ['operation'] })
  .openapi('SameCounterpartyRestriction')

const SearchRegisteredDevicesResponseSchema = z
  .strictObject({
    data: z
      .array(DeviceSchema)
      .exactOptional()
      .openapi({
        description: 'Contains a list of registered SCA devices and their corresponding details.',
      }),
    itemsTotal: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The total amount of registered SCA devices that match the query parameters.',
      }),
    link: LinkSchema.exactOptional().openapi({ description: 'Contains links to the list pages.' }),
    pagesTotal: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The total amount of list pages.' }),
  })
  .openapi({ required: [] })
  .openapi('SearchRegisteredDevicesResponse')

const SourceAccountTypesRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z
      .array(z.enum(['balanceAccount', 'businessAccount']))
      .exactOptional()
      .openapi({ description: 'The list of source account types to be evaluated.' }),
  })
  .openapi({ required: ['operation'] })
  .openapi('SourceAccountTypesRestriction')

const TimeOfDaySchema = z
  .strictObject({
    endTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The end time in a time-only ISO-8601 extended offset format. For example: **08:00:00+02:00**, **22:30:00-03:00**.\n\n',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The start time in a time-only ISO-8601 extended offset format. For example: **08:00:00+02:00**, **22:30:00-03:00**.\n\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('TimeOfDay')

const TimeOfDayRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: TimeOfDaySchema.exactOptional(),
  })
  .openapi({ required: ['operation'] })
  .openapi('TimeOfDayRestriction')

const TokenRequestorsRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z.array(z.string()).exactOptional(),
  })
  .openapi({ required: ['operation'] })
  .openapi('TokenRequestorsRestriction')

const TotalAmountRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: AmountSchema.exactOptional().openapi({ description: 'The amount value and currency.' }),
  })
  .openapi({ required: ['operation'] })
  .openapi('TotalAmountRestriction')

const TransactionRuleEntityKeySchema = z
  .strictObject({
    entityReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the resource.' }),
    entityType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of resource.\n\nPossible values: **balancePlatform**, **paymentInstrumentGroup**, **accountHolder**, **balanceAccount**, or **paymentInstrument**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransactionRuleEntityKey')

const TransactionRuleIntervalSchema = z
  .strictObject({
    dayOfMonth: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The day of month, used when the `duration.unit` is **months**. If not provided, by default, this is set to **1**, the first day of the month.',
        'x-addedInVersion': '2',
      }),
    dayOfWeek: z
      .enum(['friday', 'monday', 'saturday', 'sunday', 'thursday', 'tuesday', 'wednesday'])
      .exactOptional()
      .openapi({
        description:
          'The day of week, used when the `duration.unit` is **weeks**. If not provided, by default, this is set to **monday**.\n\nPossible values: **sunday**, **monday**, **tuesday**, **wednesday**, **thursday**, **friday**.',
        'x-addedInVersion': '2',
      }),
    duration: DurationSchema.exactOptional().openapi({
      description:
        'The duration, which you can specify in hours, days, weeks, or months. The maximum duration is 90 days or an equivalent in other units. Required when the `type` is **rolling** or **sliding**.',
      'x-addedInVersion': '2',
    }),
    timeOfDay: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time of day, in **hh:mm:ss** format, used when the `duration.unit` is **hours**. If not provided, by default, this is set to **00:00:00**.',
        'x-addedInVersion': '2',
      }),
    timeZone: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [time zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For example, **Europe/Amsterdam**. By default, this is set to **UTC**.',
        'x-addedInVersion': '2',
      }),
    type: z
      .enum(['daily', 'lifetime', 'monthly', 'perTransaction', 'rolling', 'sliding', 'weekly'])
      .openapi({
        description:
          'The [type of interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) during which the rule conditions and limits apply, and how often counters are reset.\n\nPossible values:\n  * **perTransaction**: conditions are evaluated and the counters are reset for every transaction.\n * **daily**: the counters are reset daily at 00:00:00 CET.\n * **weekly**: the counters are reset every Monday at 00:00:00 CET. \n * **monthly**: the counters reset every first day of the month at 00:00:00 CET. \n * **lifetime**: conditions are applied to the lifetime of the payment instrument.\n * **rolling**: conditions are applied and the counters are reset based on a `duration`. If the reset date and time are not provided, Adyen applies the default reset time similar to fixed intervals. For example, if the duration is every two weeks, the counter resets every third Monday at 00:00:00 CET.\n * **sliding**: conditions are applied and the counters are reset based on the current time and a `duration` that you specify.',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('TransactionRuleInterval')

const WalletProviderAccountScoreRestrictionSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z.int32().exactOptional(),
  })
  .openapi({ required: ['operation'] })
  .openapi('WalletProviderAccountScoreRestriction')

const WalletProviderDeviceScoreSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z.int32().exactOptional(),
  })
  .openapi({ required: ['operation'] })
  .openapi('WalletProviderDeviceScore')

const WalletProviderDeviceTypeSchema = z
  .strictObject({
    operation: z.string().openapi({ description: 'Defines how the condition must be evaluated.' }),
    value: z
      .array(
        z.enum([
          'CARD',
          'MOBILE_PHONE',
          'OTHER',
          'PC',
          'TABLET_OR_EREADER',
          'UNKNOWN',
          'WATCH_OR_WRISTBAND',
          'WEARABLE',
        ]),
      )
      .exactOptional(),
  })
  .openapi({ required: ['operation'] })
  .openapi('WalletProviderDeviceType')

const TransactionRuleRestrictionsSchema = z
  .strictObject({
    activeNetworkTokens: ActiveNetworkTokensRestrictionSchema.exactOptional().openapi({
      description:
        "The total number of tokens that a card can have across different kinds of digital wallets on the user's phones, watches, or other wearables.\n\nSupported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.",
    }),
    brandVariants: BrandVariantsRestrictionSchema.exactOptional().openapi({
      description:
        'List of card brand variants and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**.',
    }),
    counterpartyBank: CounterpartyBankRestrictionSchema.exactOptional().openapi({
      description:
        'Contains a list of counterparty financial institutions and how they must be evaluated.\n\nSupported operations: **anyMatch**, **noneMatch**.',
    }),
    counterpartyTypes: CounterpartyTypesRestrictionSchema.exactOptional().openapi({
      description:
        'Contains a list of counterparty types and how they must be evaluated.\n\nSupported operations: **anyMatch**, **noneMatch**.\n\nSupported value inputs:\n- **balanceAccount**\n- **bankAccount**\n- **card**\n- **transferInstrument**',
    }),
    countries: CountriesRestrictionSchema.exactOptional().openapi({
      description:
        'List of countries and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**.',
    }),
    dayOfWeek: DayOfWeekRestrictionSchema.exactOptional().openapi({
      description:
        'List of week days and the operation. Supported operations: **anyMatch**, **noneMatch**.',
    }),
    differentCurrencies: DifferentCurrenciesRestrictionSchema.exactOptional().openapi({
      description:
        'Compares the currency of the payment against the currency of the payment instrument, and specifies the operation.\n\nSupported operations: **equals**, **notEquals**.',
    }),
    entryModes: EntryModesRestrictionSchema.exactOptional().openapi({
      description:
        'List of point-of-sale entry modes and the operation..\n\nSupported operations: **anyMatch**, **noneMatch**.',
    }),
    internationalTransaction: InternationalTransactionRestrictionSchema.exactOptional().openapi({
      description:
        'Indicates whether transaction is an international transaction and specifies the operation.\n\nSupported operations: **equals**, **notEquals**.',
    }),
    matchingTransactions: MatchingTransactionsRestrictionSchema.exactOptional().openapi({
      description:
        'The number of transactions and the operation.\n\nSupported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.',
    }),
    matchingValues: MatchingValuesRestrictionSchema.exactOptional().openapi({
      description:
        'Checks if a user has recently made multiple transfers with the specified values.\n\nTo use this restriction, you must:\n\n- Set the rule `type` to **velocity**.\n\n- Specify a time `interval`.\n\n- Specify a number of `matchingTransactions`.\n\nSupported operation: **allMatch**.\n\nSupported value inputs:\n- **merchantId** and **acquirerId**\n- **amount** and **currency**\n- **merchantName**.',
    }),
    mccs: MccsRestrictionSchema.exactOptional().openapi({
      description:
        'List of merchant category codes (MCCs) and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**.',
    }),
    merchantNames: MerchantNamesRestrictionSchema.exactOptional().openapi({
      description:
        'List of names that will be compared to the merchant name according to the matching type.\n\nSupported operations: **anyMatch**, **noneMatch**.',
    }),
    merchants: MerchantsRestrictionSchema.exactOptional().openapi({
      description:
        'List of merchant ID and acquirer ID pairs, and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**.',
    }),
    processingTypes: ProcessingTypesRestrictionSchema.exactOptional().openapi({
      description:
        'List of processing types and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**.',
    }),
    riskScores: RiskScoresRestrictionSchema.exactOptional().openapi({
      description:
        'Risk scores provided by specific sources. The same operation applies to all scores.\n\nCurrent sources available: **visa**, **mastercard**\n\nSupported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.',
    }),
    sameAmountRestriction: SameAmountRestrictionSchema.exactOptional().openapi({
      description:
        'Checks if a user has recently sent the same amount of funds in multiple transfers.\n\nTo use this restriction, you must:\n\n- Set the rule `type` to **velocity**.\n\n- Specify a time `interval`.\n\n- Specify a number of `matchingTransactions`.\n\nSupported operation: **equals**.',
    }),
    sameCounterpartyRestriction: SameCounterpartyRestrictionSchema.exactOptional().openapi({
      description:
        'Checks if a user has recently made multiple transfers to the same counterparty.\n\nTo use this restriction, you must:\n\n- Set the rule `type` to **velocity**.\n\n- Specify a time `interval`.\n\n- Specify a number of `matchingTransactions`.\n\nSupported operations: **equals**.',
    }),
    sourceAccountTypes: SourceAccountTypesRestrictionSchema.exactOptional().openapi({
      description:
        'Contains a list of source account types and how they must be evaluated.\n\nSupported operations: **anyMatch**, **noneMatch**.\n\nSupported value inputs:\n- **balanceAccount**\n- **businessAccount**.',
    }),
    timeOfDay: TimeOfDayRestrictionSchema.exactOptional().openapi({
      description:
        'A start and end time in a time-only ISO-8601 extended offset format. Supported operations: **equals**, **notEquals**.',
    }),
    tokenRequestors: TokenRequestorsRestrictionSchema.exactOptional().openapi({
      description:
        'List of token requestor IDs and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**.',
    }),
    totalAmount: TotalAmountRestrictionSchema.exactOptional().openapi({
      description:
        'The total amount and the operation.\n\nSupported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.',
    }),
    walletProviderAccountScore: WalletProviderAccountScoreRestrictionSchema.exactOptional().openapi(
      {
        description:
          'Checks the wallet account score.\n\nSupported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.',
      },
    ),
    walletProviderDeviceScore: WalletProviderDeviceScoreSchema.exactOptional().openapi({
      description:
        'Wallet Provider Device Score and the operation.\n\nSupported operations: **equals**, **notEquals**, **greaterThanOrEqualTo**, **greaterThan**, **lessThanOrEqualTo**, **lessThan**.',
    }),
    walletProviderDeviceType: WalletProviderDeviceTypeSchema.exactOptional().openapi({
      description:
        'Wallet Provider Device Type and the operation.\n\nSupported operations: **anyMatch**, **noneMatch**.\n\nSupported value inputs:\n- **MOBILE_PHONE**\n- **TABLET_OR_EREADER**\n- **WATCH_OR_WRISTBAND**\n- **WEARABLE**\n\n- **CARD**\n- **PC**\n- **OTHER**\n- **UNKNOWN**\n',
    }),
  })
  .openapi({ required: [] })
  .openapi('TransactionRuleRestrictions')

const TransactionRuleSchema = z
  .strictObject({
    aggregationLevel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The level at which data must be accumulated, used in rules with `type` **velocity** or **maxUsage**. The level must be the [same or lower in hierarchy](https://docs.adyen.com/issuing/transaction-rules#accumulate-data) than the `entityKey`.\n\nIf not provided, by default, the rule will accumulate data at the **paymentInstrument** level.\n\nPossible values: **paymentInstrument**, **paymentInstrumentGroup**, **balanceAccount**, **accountHolder**, **balancePlatform**.',
        'x-addedInVersion': '2',
      }),
    description: z
      .string()
      .max(300)
      .openapi({ description: 'Your description for the transaction rule.' }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format. For example, **2025-03-19T10:15:30+01:00**.\n\nIf not provided, the rule will be evaluated until the rule status is set to **inactive**.',
      }),
    entityKey: TransactionRuleEntityKeySchema.openapi({
      description: 'The type and unique identifier of the resource to which the rule applies.',
      'x-addedInVersion': '2',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the transaction rule.' }),
    interval: TransactionRuleIntervalSchema.openapi({
      description:
        'The [time interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) when the rule conditions apply.',
    }),
    outcomeType: z
      .enum(['enforceSCA', 'hardBlock', 'scoreBased', 'timedBlock'])
      .exactOptional()
      .openapi({
        description:
          'The [outcome](https://docs.adyen.com/issuing/transaction-rules#outcome) that will be applied when a transaction meets the conditions of the rule.\n\nPossible values:\n* **hardBlock** (default): the transaction is declined.\n* **scoreBased**: the transaction is assigned the `score` you specified. Adyen calculates the total score and if it exceeds 100, the transaction is declined. This value is not allowed when `requestType` is **bankTransfer**.\n\n* **enforceSCA**: your user is prompted to verify their identity using [3D Secure authentication](https://docs.adyen.com/issuing/3d-secure/). If the authentication fails or times out, the transaction is declined. This value is only allowed when `requestType` is **authentication**.',
        'x-addedInVersion': '2',
      }),
    overridesRule: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the transaction rule you want to override or skip for the specified `entityKey`.',
        'x-addedInVersion': '2',
      }),
    purpose: z
      .enum(['compliance', 'fraud', 'internalPolicy', 'policy', 'system'])
      .exactOptional()
      .openapi({
        description:
          "Specifies the reason for creating the rule.\n\nPossible values:\n* **fraud**: the rule is created to regulate fraudulent activity.\n* **policy**: the rule is created to ensure that the transaction adheres to your business' policies. For example, if your business has policies about the Merchant Category Codes (MCCs) allowed on a transaction, you can create a rule to block transactions that have specific MCCs.",
        'x-addedInVersion': '2',
      }),
    reference: z
      .string()
      .max(150)
      .openapi({ description: 'Your reference for the transaction rule.' }),
    requestType: z
      .enum(['authentication', 'authorization', 'bankTransfer', 'tokenization'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the type of request to which the rule applies. If not provided, by default, this is set to **authorization**.\n\nPossible values: **authorization**, **authentication**, **tokenization**, **bankTransfer**.',
        'x-addedInVersion': '2',
      }),
    ruleRestrictions: TransactionRuleRestrictionsSchema.openapi({
      description:
        'Contains one or more objects that define the [rule conditions](https://docs.adyen.com/issuing/transaction-rules#conditions). Each object must have a value and an operation which determines how the values must be evaluated.\n\nFor example, a `countries` object can have a list of country codes **["US", "CA"]** in the `value` field and **anyMatch** in the `operation` field.',
      'x-addedInVersion': '2',
    }),
    score: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'A positive or negative score applied to the transaction if it meets the conditions of the rule. Required when `outcomeType` is **scoreBased**.  The value must be between **-100** and **100**.',
        'x-addedInVersion': '2',
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time format. For example, **2025-03-19T10:15:30+01:00**.\n\nIf not provided when creating a transaction rule, the `startDate` is set to the date when the rule status is set to **active**. \n\n',
      }),
    status: z
      .enum(['active', 'inactive'])
      .exactOptional()
      .openapi({
        description:
          'The status of the transaction rule. If you provide a `startDate` in the request, the rule is automatically created \nwith an **active** status. \n\nPossible values: **active**, **inactive**.',
      }),
    type: z
      .enum(['allowList', 'blockList', 'bypass', 'maxUsage', 'velocity'])
      .openapi({
        description:
          'The [type of rule](https://docs.adyen.com/issuing/transaction-rules#rule-types), which defines if a rule blocks transactions based on individual characteristics or accumulates data.\n\nPossible values:\n * **blockList**: decline a transaction when the conditions are met.\n * **maxUsage**: add the amount or number of transactions for the lifetime of a payment instrument, and then decline a transaction when the specified limits are met.\n * **velocity**: add the amount or number of transactions based on a specified time interval, and then decline a transaction when the specified limits are met.\n * **bypass**: bypass or skip a rule for the specified `entityKey`. Transactions processed to that entity are no longer evaluated by the bypassed rule.  You must provide the `id` of the rule to bypass in `overridesRule` and leave the `ruleRestrictions` object empty.\n',
      }),
  })
  .openapi({
    required: ['description', 'entityKey', 'interval', 'reference', 'ruleRestrictions', 'type'],
  })
  .openapi('TransactionRule')

const TransactionRuleInfoSchema = z
  .strictObject({
    aggregationLevel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The level at which data must be accumulated, used in rules with `type` **velocity** or **maxUsage**. The level must be the [same or lower in hierarchy](https://docs.adyen.com/issuing/transaction-rules#accumulate-data) than the `entityKey`.\n\nIf not provided, by default, the rule will accumulate data at the **paymentInstrument** level.\n\nPossible values: **paymentInstrument**, **paymentInstrumentGroup**, **balanceAccount**, **accountHolder**, **balancePlatform**.',
        'x-addedInVersion': '2',
      }),
    description: z
      .string()
      .max(300)
      .openapi({ description: 'Your description for the transaction rule.' }),
    endDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date when the rule will stop being evaluated, in ISO 8601 extended offset date-time format. For example, **2025-03-19T10:15:30+01:00**.\n\nIf not provided, the rule will be evaluated until the rule status is set to **inactive**.',
      }),
    entityKey: TransactionRuleEntityKeySchema.openapi({
      description: 'The type and unique identifier of the resource to which the rule applies.',
      'x-addedInVersion': '2',
    }),
    interval: TransactionRuleIntervalSchema.openapi({
      description:
        'The [time interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) when the rule conditions apply.',
    }),
    outcomeType: z
      .enum(['enforceSCA', 'hardBlock', 'scoreBased', 'timedBlock'])
      .exactOptional()
      .openapi({
        description:
          'The [outcome](https://docs.adyen.com/issuing/transaction-rules#outcome) that will be applied when a transaction meets the conditions of the rule.\n\nPossible values:\n* **hardBlock** (default): the transaction is declined.\n* **scoreBased**: the transaction is assigned the `score` you specified. Adyen calculates the total score and if it exceeds 100, the transaction is declined. This value is not allowed when `requestType` is **bankTransfer**.\n\n* **enforceSCA**: your user is prompted to verify their identity using [3D Secure authentication](https://docs.adyen.com/issuing/3d-secure/). If the authentication fails or times out, the transaction is declined. This value is only allowed when `requestType` is **authentication**.',
        'x-addedInVersion': '2',
      }),
    overridesRule: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The `id` of the transaction rule you want to override or skip for the specified `entityKey`.',
        'x-addedInVersion': '2',
      }),
    purpose: z
      .enum(['compliance', 'fraud', 'internalPolicy', 'policy', 'system'])
      .exactOptional()
      .openapi({
        description:
          "Specifies the reason for creating the rule.\n\nPossible values:\n* **fraud**: the rule is created to regulate fraudulent activity.\n* **policy**: the rule is created to ensure that the transaction adheres to your business' policies. For example, if your business has policies about the Merchant Category Codes (MCCs) allowed on a transaction, you can create a rule to block transactions that have specific MCCs.",
        'x-addedInVersion': '2',
      }),
    reference: z
      .string()
      .max(150)
      .openapi({ description: 'Your reference for the transaction rule.' }),
    requestType: z
      .enum(['authentication', 'authorization', 'bankTransfer', 'tokenization'])
      .exactOptional()
      .openapi({
        description:
          'Indicates the type of request to which the rule applies. If not provided, by default, this is set to **authorization**.\n\nPossible values: **authorization**, **authentication**, **tokenization**, **bankTransfer**.',
        'x-addedInVersion': '2',
      }),
    ruleRestrictions: TransactionRuleRestrictionsSchema.openapi({
      description:
        'Contains one or more objects that define the [rule conditions](https://docs.adyen.com/issuing/transaction-rules#conditions). Each object must have a value and an operation which determines how the values must be evaluated.\n\nFor example, a `countries` object can have a list of country codes **["US", "CA"]** in the `value` field and **anyMatch** in the `operation` field.',
      'x-addedInVersion': '2',
    }),
    score: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'A positive or negative score applied to the transaction if it meets the conditions of the rule. Required when `outcomeType` is **scoreBased**.  The value must be between **-100** and **100**.',
        'x-addedInVersion': '2',
      }),
    startDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date when the rule will start to be evaluated, in ISO 8601 extended offset date-time format. For example, **2025-03-19T10:15:30+01:00**.\n\nIf not provided when creating a transaction rule, the `startDate` is set to the date when the rule status is set to **active**. \n\n',
      }),
    status: z
      .enum(['active', 'inactive'])
      .exactOptional()
      .openapi({
        description:
          'The status of the transaction rule. If you provide a `startDate` in the request, the rule is automatically created \nwith an **active** status. \n\nPossible values: **active**, **inactive**.',
      }),
    type: z
      .enum(['allowList', 'blockList', 'bypass', 'maxUsage', 'velocity'])
      .openapi({
        description:
          'The [type of rule](https://docs.adyen.com/issuing/transaction-rules#rule-types), which defines if a rule blocks transactions based on individual characteristics or accumulates data.\n\nPossible values:\n * **blockList**: decline a transaction when the conditions are met.\n * **maxUsage**: add the amount or number of transactions for the lifetime of a payment instrument, and then decline a transaction when the specified limits are met.\n * **velocity**: add the amount or number of transactions based on a specified time interval, and then decline a transaction when the specified limits are met.\n * **bypass**: bypass or skip a rule for the specified `entityKey`. Transactions processed to that entity are no longer evaluated by the bypassed rule.  You must provide the `id` of the rule to bypass in `overridesRule` and leave the `ruleRestrictions` object empty.\n',
      }),
  })
  .openapi({
    required: ['description', 'entityKey', 'interval', 'reference', 'ruleRestrictions', 'type'],
  })
  .openapi('TransactionRuleInfo')

const TransactionRuleResponseSchema = z
  .strictObject({
    transactionRule: TransactionRuleSchema.exactOptional().openapi({
      description: 'The transaction rule.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TransactionRuleResponse')

const TransactionRulesResponseSchema = z
  .strictObject({
    transactionRules: z
      .array(TransactionRuleSchema)
      .exactOptional()
      .openapi({ description: 'List of transaction rules.' }),
  })
  .openapi({ required: [] })
  .openapi('TransactionRulesResponse')

const USInstantPayoutAddressRequirementSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies that you must provide complete street addresses for the party and counterParty for transactions greater than USD 3000.',
      }),
    type: z
      .literal('usInstantPayoutAddressRequirement')
      .default('usInstantPayoutAddressRequirement')
      .openapi({ description: '**usInstantPayoutAddressRequirement**' }),
  })
  .openapi({ required: ['type'] })
  .openapi('USInstantPayoutAddressRequirement')

const USInternationalAchAddressRequirementSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies that you must provide a complete street address for International ACH (IAT) transactions.',
      }),
    type: z
      .literal('usInternationalAchAddressRequirement')
      .default('usInternationalAchAddressRequirement')
      .openapi({ description: '**usInternationalAchAddressRequirement**' }),
  })
  .openapi({ required: ['type'] })
  .openapi('USInternationalAchAddressRequirement')

const USInternationalAchPriorityRequirementSchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies that transactions deemed to be International ACH (IAT) per OFAC/NACHA rules cannot have fast priority.',
      }),
    type: z
      .literal('usInternationalAchPriorityRequirement')
      .default('usInternationalAchPriorityRequirement')
      .openapi({ description: '**usInternationalAchPriorityRequirement**' }),
  })
  .openapi({ required: ['type'] })
  .openapi('USInternationalAchPriorityRequirement')

const TransferRouteSchema = z
  .strictObject({
    category: z
      .enum([
        'bank',
        'card',
        'grants',
        'interest',
        'internal',
        'issuedCard',
        'migration',
        'platformPayment',
        'topUp',
        'upgrade',
      ])
      .exactOptional()
      .openapi({
        description:
          ' The type of transfer.\n\n Possible values:\n\n  - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.\n',
      }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-character ISO-3166-1 alpha-2 country code of the counterparty. For example, **US** or **NL**.',
      }),
    currency: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The three-character ISO currency code of transfer. For example, **USD** or **EUR**.',
      }),
    priority: z
      .enum(['crossBorder', 'fast', 'instant', 'internal', 'regular', 'wire'])
      .exactOptional()
      .openapi({
        description:
          'The priority for the bank transfer. This sets the speed at which the transfer is sent and the fees that you have to pay. Possible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.\n\n* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).\n\n* **crossBorder**: For high-value transfers to a recipient in a different country.\n\n* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).',
      }),
    requirements: z
      .array(
        z
          .discriminatedUnion('type', [
            AdditionalBankIdentificationRequirementSchema,
            AddressRequirementSchema,
            AmountMinMaxRequirementSchema,
            AmountNonZeroDecimalsRequirementSchema,
            BankAccountIdentificationTypeRequirementSchema,
            IbanAccountIdentificationRequirementSchema,
            PaymentInstrumentRequirementSchema,
            USInstantPayoutAddressRequirementSchema,
            USInternationalAchAddressRequirementSchema,
            USInternationalAchPriorityRequirementSchema,
          ])
          .openapi({
            discriminator: {
              propertyName: 'type',
              mapping: {
                amountMinMaxRequirement: '#/components/schemas/AmountMinMaxRequirement',
                additionalBankIdentificationRequirement:
                  '#/components/schemas/AdditionalBankIdentificationRequirement',
                addressRequirement: '#/components/schemas/AddressRequirement',
                amountNonZeroDecimalsRequirement:
                  '#/components/schemas/AmountNonZeroDecimalsRequirement',
                bankAccountIdentificationTypeRequirement:
                  '#/components/schemas/BankAccountIdentificationTypeRequirement',
                ibanAccountIdentificationRequirement:
                  '#/components/schemas/IbanAccountIdentificationRequirement',
                paymentInstrumentRequirement: '#/components/schemas/PaymentInstrumentRequirement',
                usInternationalAchAddressRequirement:
                  '#/components/schemas/USInternationalAchAddressRequirement',
                usInstantPayoutAddressRequirement:
                  '#/components/schemas/USInstantPayoutAddressRequirement',
                usInternationalAchPriorityRequirement:
                  '#/components/schemas/USInternationalAchPriorityRequirement',
              },
            },
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'A set of rules defined by clearing houses and banking partners. Your transfer request must adhere to these rules to ensure successful initiation of transfer. Based on the priority, one or more requirements may be returned. Each requirement is defined with a `type` and `description`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransferRoute')

const TransferRouteRequestSchema = z
  .strictObject({
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the source [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id).\nRequired if `counterparty` is **transferInstrumentId**.',
      }),
    balancePlatform: z
      .string()
      .openapi({
        description:
          'The unique identifier assigned to the balance platform associated with the account holder.',
      }),
    category: z
      .literal('bank')
      .openapi({
        description:
          ' The type of transfer. Possible values:\n\n  - **bank**: Transfer to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id) or a bank account.\n',
      }),
    counterparty: CounterpartySchema.exactOptional().openapi({
      description: 'The recipient of the funds transfer. A bank account or a transfer instrument.',
    }),
    country: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-character ISO-3166-1 alpha-2 country code of the counterparty. For example, **US** or **NL**.\n > Either `counterparty` or `country` field must be provided in a transfer route request.',
      }),
    currency: z
      .string()
      .openapi({
        description:
          'The three-character ISO currency code of transfer. For example, **USD** or **EUR**.',
      }),
    priorities: z
      .array(z.enum(['crossBorder', 'fast', 'instant', 'internal', 'regular', 'wire']))
      .exactOptional()
      .openapi({
        description:
          'The list of priorities for the bank transfer. Priorities set the speed at which the transfer is sent and the fees that you have to pay. Multiple values can be provided.\nPossible values:\n\n* **regular**: For normal, low-value transactions.\n\n* **fast**: A faster way to transfer funds, but the fees are higher. Recommended for high-priority, low-value transactions.\n\n* **wire**: The fastest way to transfer funds, but this has the highest fees. Recommended for high-priority, high-value transactions.\n\n* **instant**: For instant funds transfers within the United States and in [SEPA locations](https://www.ecb.europa.eu/paym/integration/retail/sepa/html/index.en.html).\n\n* **crossBorder**: For high-value transfers to a recipient in a different country.\n\n* **internal**: For transfers to an Adyen-issued business bank account (by bank account number/IBAN).',
      }),
  })
  .openapi({ required: ['balancePlatform', 'category', 'currency'] })
  .openapi('TransferRouteRequest')

const TransferRouteResponseSchema = z
  .strictObject({
    transferRoutes: z
      .array(TransferRouteSchema)
      .exactOptional()
      .openapi({
        description:
          'List of available priorities for a transfer, along with requirements. Use this information to initiate a transfer.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TransferRouteResponse')

const UpdateNetworkTokenRequestSchema = z
  .strictObject({
    status: z
      .enum(['active', 'suspended', 'closed'])
      .exactOptional()
      .openapi({
        description:
          'The new status of the network token. Possible values: **active**, **suspended**, **closed**. The **closed** status is final and cannot be changed.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateNetworkTokenRequest')

const UpdatePaymentInstrumentSchema = z
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
          'Comment for the status of the payment instrument.\n\nRequired if `statusReason` is **other**.',
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
  .openapi('UpdatePaymentInstrument')

const UpdateSweepConfigurationV2Schema = z
  .strictObject({
    category: z
      .enum(['bank', 'internal', 'platformPayment'])
      .exactOptional()
      .openapi({
        description:
          'The type of transfer that results from the sweep.\n\nPossible values:\n\n - **bank**: Sweep to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).\n\n- **internal**: Transfer to another [balance account](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/post/balanceAccounts__resParam_id) within your platform.\n\nRequired when setting `priorities`.',
        'x-addedInVersion': '2',
      }),
    counterparty: SweepCounterpartySchema.exactOptional().openapi({
      description:
        'The destination or the source of the funds, depending on the sweep `type`.\n\nEither a `balanceAccountId`, `transferInstrumentId`, or `merchantAccount` is required.',
    }),
    currency: z
      .string()
      .exactOptional()
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
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the sweep.', readOnly: true }),
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
      .openapi({ description: 'The reason for disabling the sweep.', readOnly: true }),
    reasonDetail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The human readable reason for disabling the sweep.',
        readOnly: true,
      }),
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
    schedule: SweepScheduleSchema.exactOptional().openapi({
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
  .openapi({ required: [] })
  .openapi('UpdateSweepConfigurationV2')

const AmountDTOSchema = z
  .object({
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
          'The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).',
      }),
  })
  .openapi({ required: ['currency', 'value'] })
  .openapi('AmountDTO')

const AmountUpdateSchema = z
  .object({
    currency: z
      .string()
      .exactOptional()
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
      .exactOptional()
      .openapi({
        type: 'integer',
        format: 'int64',
        description:
          'The amount of the transaction, in [minor units](https://docs.adyen.com/development-resources/currency-codes).',
      }),
  })
  .openapi({ required: [] })
  .openapi('AmountUpdate')

const ScaEntityTypeSchema = z
  .enum(['accountHolder', 'legalEntity', 'paymentInstrument'])
  .openapi('ScaEntityType')

const AssociationStatusSchema = z.enum(['pendingApproval', 'active']).openapi('AssociationStatus')

const ApproveAssociationRequestSchema = z
  .object({
    entityId: z
      .string()
      .min(1)
      .max(100)
      .openapi({ description: 'The unique identifier of the entity.' }),
    entityType: ScaEntityTypeSchema.openapi({
      description:
        'The type of the entity. \n\nPossible values: **accountHolder**, **legalEntity** or **paymentInstrument**.',
      example: 'accountHolder',
    }),
    scaDeviceIds: z
      .array(z.string().length(30))
      .min(0)
      .max(5)
      .openapi({
        description: 'List of device ids associated to the entity that will be approved.',
      }),
    status: AssociationStatusSchema.openapi({
      description:
        'The status of the association. \n\nPossible values: **active** or **pendingApproval**.',
      example: 'active',
    }),
  })
  .openapi({ required: ['entityId', 'entityType', 'scaDeviceIds', 'status'] })
  .openapi('ApproveAssociationRequest')

const AssociationSchema = z
  .object({
    entityId: z
      .string()
      .min(1)
      .max(100)
      .openapi({ description: 'The unique identifier of the entity.' }),
    entityType: ScaEntityTypeSchema.openapi({
      description:
        'The type of entity you are associating the device with. \n\nPossible values: **accountHolder**, **legalEntity** or **paymentInstrument**.',
      example: 'accountHolder',
    }),
    scaDeviceId: z
      .string()
      .length(30)
      .openapi({
        description: 'The unique identifier for the SCA device.',
        example: 'BSDR11111111111A1AAA1AAAAA1AA1',
      }),
    status: AssociationStatusSchema.openapi({
      description:
        'The status of the association. \n\nPossible values: **active** or **pendingApproval**.',
      example: 'pendingApproval',
    }),
  })
  .openapi({ required: ['entityId', 'entityType', 'scaDeviceId', 'status'] })
  .openapi('Association')

const ApproveAssociationResponseSchema = z
  .object({
    scaAssociations: z
      .array(AssociationSchema)
      .min(1)
      .openapi({ description: 'The list of associations.' }),
  })
  .openapi({ required: ['scaAssociations'] })
  .openapi('ApproveAssociationResponse')

const ApproveTransferLimitRequestSchema = z
  .object({
    transferLimitIds: z
      .array(z.string())
      .min(1)
      .max(2147483647)
      .openapi({
        description:
          'A list that includes the `transferLimitId` of all the pending transfer limits you want to approve.',
      }),
  })
  .openapi({ required: ['transferLimitIds'] })
  .openapi('ApproveTransferLimitRequest')

const ScaDeviceTypeSchema = z.enum(['browser', 'ios', 'android']).openapi('ScaDeviceType')

const AssociationListingSchema = z
  .object({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the association was created.' }),
    entityId: z
      .string()
      .min(1)
      .max(100)
      .openapi({ description: 'The unique identifier of the entity.' }),
    entityType: ScaEntityTypeSchema.openapi({
      description:
        'The type of the entity. \n\nPossible values: **accountHolder**, **legalEntity** or **paymentInstrument**.',
      example: 'accountHolder',
    }),
    scaDeviceId: z
      .string()
      .length(30)
      .openapi({
        description: 'The unique identifier of the SCA device.',
        example: 'BSDR11111111111A1AAA1AAAAA1AA1',
      }),
    scaDeviceName: z
      .string()
      .min(0)
      .max(64)
      .exactOptional()
      .openapi({ description: 'The human-readable name for the SCA device that was registered.' }),
    scaDeviceType: ScaDeviceTypeSchema.openapi({
      description: 'The type of the device.',
      example: 'browser',
    }),
    status: AssociationStatusSchema.openapi({
      description:
        'The status of the association. \n\nPossible values: **active** or **pendingApproval**.',
      example: 'pendingApproval',
    }),
  })
  .openapi({
    required: ['createdAt', 'entityId', 'entityType', 'scaDeviceId', 'scaDeviceType', 'status'],
  })
  .openapi('AssociationListing')

const AuthorisedCardUsersSchema = z
  .object({
    legalEntityIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The legal entity IDs of the authorized card users linked to the specified payment instrument.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AuthorisedCardUsers')

const ScheduledPayoutFrequencySchema = z
  .string()
  .openapi({ 'x-extensible-enum': ['daily', 'weekly', 'weekdays', 'monthly'] })
  .openapi('ScheduledPayoutFrequency')

const BalanceAccountConfigurationSchema = z
  .object({
    balanceAccountId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the balance account to which you apply the payout schedule.',
      }),
    balancePlatformPayoutScheduleId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the balance platform payout schedule that is applied to the balance account.',
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date and time when the payout schedule was created.' }),
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
          'The description used for all payouts initiated by this payout schedule.\n\nMaximum length: 140 characters. If your description is longer, it may be truncated.\n\nDefault value: The `defaultDescription` from the balance platform schedule that you are applying.',
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Specifies whether the payout schedule is active.' }),
    frequency: ScheduledPayoutFrequencySchema.exactOptional().openapi({
      description:
        'The frequency of payouts initiated by this payout schedule.\n\nPossible values:\n* daily\n* weekdays\n* weekly\n* monthly\n\nDefault value: The `defaultFrequency` from the balance platform schedule that you are applying.',
    }),
    frequencyValue: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The date of the month or day of the week when payouts are initiated. Allowed only if `frequency` is **monthly** or **weekly**.\n\nPossible values if `frequency` is **monthly**: **[1 - 31]**.\n* If your specified date happens on a weekend, the payout is initiated on the next business day.\n* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated  on the last day of that month.\n\nPossible values if `frequency` is **weekly**: **[1 - 5]**.\n\nDefault value: The `defaultFrequencyValue` from the balance platform schedule that you are applying.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the payout schedule for the balance account.',
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
          'The maximum amount that can be paid out from balance accounts that use this payout schedule.\n\nDefault value: **0**',
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
          'The minimum amount that can be paid out from balance accounts that use this payout schedule.\n\nDefault value: **0**',
      }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Your reference for the payout schedule. This reference does not appear on statements of payouts initiated by the payout schedule.',
      }),
    referenceForBeneficiary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reference for beneficiary used for all payouts initiated by this payout schedule. This reference is sent to the recipient of the payout and is included in all webhooks related to the payout.\n\nSupported characters: **a-z**, **A-Z**, **0-9**.\n\nDefault value: The `defaultReferenceForBeneficiary` from the balance platform schedule that you are applying.',
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
          'The amount of funds that must remain available in the balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.\n\nDefault value: **0**',
      }),
    salesDayClosingTime: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The time of day when the sales day is closed in balance account time zone. The sales day closing time can be between 00:00 to 07:00.\n\nFormat: **HH:mm:ss**',
      }),
    transferInstrumentId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the transfer instrument to which the funds are paid out.',
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the payout schedule was updated.' }),
  })
  .openapi({
    required: [
      'balanceAccountId',
      'balancePlatformPayoutScheduleId',
      'createdAt',
      'transferInstrumentId',
    ],
  })
  .openapi('BalanceAccountConfiguration')

const BalanceAccountConfigurationRequestSchema = z
  .object({
    balancePlatformPayoutScheduleId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the payout schedule that is applied to the balance account.',
      }),
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
          'The description used for all payouts initiated by this payout schedule.\n\nMaximum length: 140 characters. If your description is longer, it may be truncated.\n\nDefault value: The `defaultDescription` from the balance platform schedule that you are applying.',
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether the payout schedule is enabled immediately after it is created.',
      }),
    frequency: z
      .enum(['daily', 'weekly', 'weekdays', 'monthly'])
      .exactOptional()
      .openapi({
        description:
          'The frequency of payouts initiated by this payout schedule.\n\nPossible values:\n* daily\n* weekdays\n* weekly\n* monthly\n\nDefault value: The `defaultFrequency` from the balance platform schedule that you are applying.',
      }),
    frequencyValue: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The date of the month or day of the week when payouts are initiated. Allowed only if `frequency` is **monthly** or **weekly**.\n\nPossible values if `frequency` is **monthly**: **[1 - 31]**.\n* If your specified date happens on a weekend, the payout is initiated on the next business day.\n* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated on the last day of that month.\n\nPossible values if `frequency` is **weekly**: **[1 - 5]**.\n\nDefault value: The `defaultFrequencyValue` from the balance platform schedule that you are applying.',
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
          'The maximum amount that can be paid out from balance accounts that use this payout schedule.\n\nDefault value: **0**',
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
          'The minimum amount that can be paid out from balance accounts that use this payout schedule.\n\nDefault value: **0**',
      }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The merchant reference that will be shown only in the schedule.' }),
    referenceForBeneficiary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reference for beneficiary used for all payouts initiated by this payout schedule. This reference is sent to the recipient of the transfer and is included in all webhooks related to the payout.\n\nSupported characters: **a-z**, **A-Z**, **0-9**, **-** and space. Spaces might be replaced with **-** if the recipient bank or payment infrastructure does not allow spaces.\n\nDefault value: The `defaultReferenceForBeneficiary` from the balance platform schedule that you are applying.',
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
          'The amount of funds that must remain available in the balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.\n\nDefault value: **0**',
      }),
    salesDayClosingTime: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The time of day when the sales day is closed in balance account time zone. The sales day closing time can be between 00:00 to 07:00.\n\nFormat: **HH:mm:ss**',
      }),
    transferInstrumentId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the transfer instrument to which the funds are paid out.',
      }),
  })
  .openapi({ required: ['balancePlatformPayoutScheduleId', 'transferInstrumentId'] })
  .openapi('BalanceAccountConfigurationRequest')

const BalanceAccountConfigurationUpdateSchema = z
  .object({
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The description used for all payouts initiated by this payout schedule.\n\nMaximum length: 140 characters. If your description is longer, it may be truncated.\n\nDefault value: The `defaultDescription` from the balance platform schedule that you are applying.',
      }),
    enabled: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether the payout schedule is enabled immediately after it is created.',
      }),
    frequency: z
      .enum(['daily', 'weekly', 'weekdays', 'monthly'])
      .exactOptional()
      .openapi({
        description:
          'The frequency of payouts initiated by this payout schedule.\n\nPossible values:\n* daily\n* weekdays\n* weekly\n* monthly\n\nDefault value: The `defaultFrequency` from the balance platform schedule that you are applying.',
      }),
    frequencyValue: z
      .int32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The date of the month or day of the week when payouts are initiated. Allowed only if `frequency` is **monthly** or **weekly**.\n\nPossible values if `frequency` is **monthly**: **[1 - 31]**.\n* If your specified date happens on a weekend, the payout is initiated on the next business day.\n* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated on the last day of that month.\n\nPossible values if `frequency` is **weekly**: **[1 - 5]**.\n\nDefault value: The `defaultFrequencyValue` from the balance platform schedule that you are applying.',
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
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'The maximum amount that can be paid out from balance accounts that use this payout schedule.\n\nDefault value: **0**',
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
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'The minimum amount that can be paid out from balance accounts that use this payout schedule.\n\nDefault value: **0**',
      }),
    reference: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The merchant reference that will be shown only in the schedule.' }),
    referenceForBeneficiary: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The reference for beneficiary used for all payouts initiated by this payout schedule. This reference is sent to the recipient of the transfer and is included in all webhooks related to the payout.\n\nSupported characters: **a-z**, **A-Z**, **0-9**, **-** and space. Spaces might be replaced with **-** if the recipient bank or payment infrastructure does not allow spaces.\n\nDefault value: The `defaultReferenceForBeneficiary` from the balance platform schedule that you are applying.',
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
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'int64',
        description:
          'The amount of funds that must remain available in the balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.\n\nDefault value: **0**',
      }),
    salesDayClosingTime: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The time of day when the sales day is closed in balance account time zone. The sales day closing time can be between 00:00 to 07:00.\n\nFormat: **HH:mm:ss**',
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
  .openapi('BalanceAccountConfigurationUpdate')

const BalanceAccountConfigurationsSchema = z
  .object({
    balanceAccountPayoutSchedules: z
      .array(BalanceAccountConfigurationSchema)
      .openapi({ description: 'Contains a list of the Balance Account payout schedules.' }),
    link: LinkSchema.openapi({
      description: 'Contains links to the next and previous page whenever applicable.',
    }),
  })
  .openapi({ required: ['balanceAccountPayoutSchedules', 'link'] })
  .openapi('BalanceAccountConfigurations')

const BalancePlatformConfigurationSchema = z
  .object({
    automaticApplication: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether this payout schedule is automatically applied to new balance accounts.',
      }),
    balancePlatformId: z
      .string()
      .openapi({ description: 'The balance platform to which the payout schedule applies.' }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code of the country to which the payout schedule applies.',
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date when the payout schedule was created.' }),
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
    defaultFrequency: ScheduledPayoutFrequencySchema.exactOptional().openapi({
      description: 'The default frequency of payouts initiated by this payout schedule.',
    }),
    defaultFrequencyValue: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The default value for date of the month or day of the week when payouts are initiated. Allowed only if `defaultFrequency` is **monthly** or **weekly**.\n\nPossible values if `defaultFrequency` is **monthly**: **[1 - 31]**.\n* If your specified date happens on a weekend, the payout is initiated on the next business day.\n* If your specified date (**29**, **30**, or **31**) does not exist in a month, the payout is initiated  on the last day of that month.\n\nPossible values if `defaultFrequency` is **weekly**: **[1 - 5]**.',
      }),
    defaultReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Your internal default reference for the payout schedule.When the payout schedule is applied to a balance account, this reference is also used for that payout schedule.',
      }),
    defaultReferenceForBeneficiary: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The default reference for beneficiary for payouts initiated by this payout schedule.',
      }),
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether the payout schedule is enabled immediately after it is created.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the payout schedule for your balance platform.',
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
          'The maximum amount that can be paid out from balance accounts that use this payout schedule.\n\nDefault value: **0**, which means that there is no maximum limit.',
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
          'The minimum amount that can be paid out from balance accounts that use this payout schedule.\n\nDefault value: **0**.',
      }),
    payoutScheduleDescription: z
      .string()
      .openapi({
        description:
          "The type of payout schedule. This type indicates how fast funds are paid out to your user.\n\nPossible values:\n- **Standard**: The funds arrive in your user's transfer instrument two days after the funds are settled.\n- **Accelerated**: The funds arrive to your user's transfer instrument the day after the funds are settled.",
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
          'The amount of funds that must remain available in a balance account after an execution of the payout schedule. If the funds in the balance account are less than the retained amount, the execution is not initiated.\n\nDefault value: **0**',
      }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the payout schedule was updated.' }),
    userSettlementDelay: z
      .int32()
      .openapi({
        description:
          'The default [settlement delay](https://docs.adyen.com/platforms/settle-funds/#settlement-delay) for this payout schedule.',
      }),
    userSettlementTime: z
      .string()
      .openapi({
        description:
          "The time when the payout funds are settled in your user's transfer instrument. For example, 11:30:00.",
      }),
    userSettlementTimeZone: z
      .string()
      .openapi({ description: 'The timezone of the `userSettlementTime`.' }),
  })
  .openapi({
    required: [
      'balancePlatformId',
      'createdAt',
      'payoutScheduleDescription',
      'userSettlementDelay',
      'userSettlementTime',
      'userSettlementTimeZone',
    ],
  })
  .openapi('BalancePlatformConfiguration')

const BalancePlatformConfigurationsSchema = z
  .object({
    balancePlatformPayoutSchedules: z
      .array(BalancePlatformConfigurationSchema)
      .openapi({
        description: 'Contains a list of the payout schedules configured in your balance platform.',
      }),
  })
  .openapi({ required: ['balancePlatformPayoutSchedules'] })
  .openapi('BalancePlatformConfigurations')

const SettingStatusSchema = z
  .string()
  .openapi({ 'x-extensible-enum': ['active', 'inactive'] })
  .openapi('SettingStatus')

const TargetSchema = z
  .object({
    id: z
      .string()
      .min(1)
      .openapi({
        description:
          "The unique identifier of the `target.type`. This can be the ID of your:\n\n* balance platform\n* account holder\n* account holder's balance account",
      }),
    type: z
      .enum(['balanceAccount', 'accountHolder', 'balancePlatform'])
      .openapi({
        description:
          'The resource for which you want to receive notifications. Possible values:\n\n* **balancePlatform**: receive notifications about balance changes in your entire balance platform.\n\n* **accountHolder**: receive notifications about balance changes of a specific user.\n\n* **balanceAccount**: receive notifications about balance changes in a specific balance account.',
      }),
  })
  .openapi({ required: ['id', 'type'] })
  .openapi('Target')

const SettingTypeSchema = z.literal('balance').openapi('SettingType')

const WebhookSettingSchema = z
  .object({
    currency: z
      .string()
      .min(1)
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.',
      }),
    id: z.string().openapi({ description: 'The unique identifier of the webhook setting.' }),
    status: SettingStatusSchema.openapi({
      description:
        'The status of the webhook setting. Possible values:\n\n* **active**: You receive a balance webhook if any of the conditions in this setting are met.\n* **inactive**: You do not receive a balance webhook even if the conditions in this settings are met.',
    }),
    target: TargetSchema.openapi({
      description: 'The resource about whose balance change you want to get notified.',
    }),
    type: SettingTypeSchema.openapi({ description: 'The type of the webhook setting.' }),
  })
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: { balance: '#/components/schemas/BalanceWebhookSetting' },
    },
    required: ['currency', 'id', 'status', 'target', 'type'],
  })
  .openapi('WebhookSetting')

const ConditionSchema = z
  .object({
    balanceType: z
      .enum(['balance', 'available', 'pending', 'reserved'])
      .openapi({
        description:
          'Define the type of balance about which you want to get notified. Possible values:\n\n* **available**: the balance available for use.\n\n* **balance**: the sum of transactions that have already been settled.\n\n* **pending**: the sum of transactions that will be settled in the future.\n\n* **reserved**: the balance currently held in reserve.',
      }),
    conditionType: z
      .enum(['greaterThan', 'greaterThanOrEqual', 'lessThan', 'lessThanOrEqual'])
      .openapi({
        description:
          'Define when you want to get notified about a balance change. Possible values:\n\n* **greaterThan**: the balance in the account(s) exceeds the specified `value`.\n\n* **greaterThanOrEqual**: the balance in the account(s) reaches or exceeds the specified `value`.\n\n* **lessThan**: the balance in the account(s) drops below the specified `value`.\n\n* **lessThanOrEqual**: the balance in the account(s) reaches to drops below the specified `value`.',
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
        description: 'The value limit in the specified balance type and currency, in minor units.',
      }),
  })
  .openapi({ required: ['balanceType', 'conditionType', 'value'] })
  .openapi('Condition')

const BalanceWebhookSettingSchema = WebhookSettingSchema.and(
  z
    .object({
      conditions: z
        .array(ConditionSchema)
        .exactOptional()
        .openapi({
          description:
            'The list of settings and criteria for triggering the [balance webhook](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).',
        }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['currency', 'id', 'status', 'target', 'type'] })
  .openapi('BalanceWebhookSetting')

const BalanceWebhookSettingInfoSchema = z
  .object({
    conditions: z
      .array(ConditionSchema)
      .min(0)
      .max(20)
      .exactOptional()
      .openapi({
        description:
          'The array of conditions a balance change must meet for Adyen to send the webhook.',
      }),
    currency: z
      .string()
      .min(1)
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.',
      }),
    status: z
      .enum(['active', 'inactive'])
      .openapi({
        description:
          'The status of the webhook setting. Possible values:\n\n* **active**: You receive a balance webhook if any of the conditions in this setting are met.\n* **inactive**: You do not receive a balance webhook even if the conditions in this settings are met.',
      }),
    target: TargetSchema.openapi({
      description:
        'The type and ID of the resource about whose balance changes you want to be notified.',
    }),
    type: z
      .literal('balance')
      .openapi({ description: 'The type of the webhook you are configuring. Set to **balance**.' }),
  })
  .openapi({ required: ['currency', 'status', 'target', 'type'] })
  .openapi('BalanceWebhookSettingInfo')

const TargetUpdateSchema = z
  .object({
    id: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          "The unique identifier of the `target.type`. This can be the ID of your:\n\n* balance platform\n* account holder\n* account holder's balance account",
      }),
    type: z
      .enum(['balanceAccount', 'accountHolder', 'balancePlatform'])
      .exactOptional()
      .openapi({
        description:
          'The resource for which you want to receive notifications. Possible values:\n\n* **balancePlatform**: receive notifications about balance changes in your entire balance platform.\n\n* **accountHolder**: receive notifications about balance changes of a specific user.\n\n* **balanceAccount**: receive notifications about balance changes in a specific balance account.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TargetUpdate')

const BalanceWebhookSettingInfoUpdateSchema = z
  .object({
    conditions: z
      .array(ConditionSchema)
      .min(0)
      .max(20)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The array of conditions a balance change must meet for Adyen to send the webhook.',
      }),
    currency: z
      .string()
      .min(1)
      .exactOptional()
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the balance.',
      }),
    status: z
      .enum(['active', 'inactive'])
      .exactOptional()
      .openapi({
        description:
          'The status of the webhook setting. Possible values:\n\n* **active**: You receive a balance webhook if any of the conditions in this setting are met.\n* **inactive**: You do not receive a balance webhook even if the conditions in this settings are met.',
      }),
    target: TargetUpdateSchema.exactOptional().openapi({
      description:
        'The type and ID of the resource about whose balance changes you want to be notified.',
    }),
    type: z
      .literal('balance')
      .exactOptional()
      .openapi({ description: 'The type of the webhook you are configuring. Set to **balance**.' }),
  })
  .openapi({ required: [] })
  .openapi('BalanceWebhookSettingInfoUpdate')

const BeginScaDeviceRegistrationRequestSchema = z
  .object({
    name: z
      .string()
      .min(0)
      .max(64)
      .openapi({
        description:
          'The name of the SCA device that you are registering. You can use it to help your users identify the device.',
      }),
    sdkOutput: z
      .string()
      .min(0)
      .max(20000)
      .openapi({
        description:
          "A base64-encoded block with the data required to register the SCA device. You obtain this information by using Adyen's authentication SDK.",
      }),
  })
  .openapi({ required: ['name', 'sdkOutput'] })
  .openapi('BeginScaDeviceRegistrationRequest')

const ScaDeviceSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'The unique identifier of the SCA device you are registering.' }),
    name: z
      .string()
      .min(0)
      .max(64)
      .openapi({
        description:
          'The name of the SCA device that you are registering. You can use it to help your users identify the device.',
      }),
    type: ScaDeviceTypeSchema.openapi({
      description:
        'Type of device registered. \n\nPossible values: **ios**, **android**, **browser**. ',
    }),
  })
  .openapi({
    description:
      'A resource that contains information about a device, including its unique ID, name, and type.',
    required: ['id', 'name', 'type'],
  })
  .openapi('ScaDevice')

const BeginScaDeviceRegistrationResponseSchema = z
  .object({
    scaDevice: ScaDeviceSchema.exactOptional(),
    sdkInput: z
      .string()
      .max(20000)
      .exactOptional()
      .openapi({
        description:
          'A string that you must pass to the authentication SDK to continue with the registration process.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BeginScaDeviceRegistrationResponse')

const TopUpCounterpartySchema = z
  .object({
    transferInstrumentId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id) that is funding the top-up. ',
      }),
  })
  .openapi({ required: ['transferInstrumentId'] })
  .openapi('TopUpCounterparty')

const TopUpAmountSchema = z
  .object({
    fixed: AmountDTOSchema.exactOptional().openapi({
      description: 'The fixed amount with which you want to top up the balance account.',
    }),
    target: AmountDTOSchema.exactOptional().openapi({
      description: 'The target balance for the balance account that the top-up must achieve.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TopUpAmount')

const ScheduleTypeSchema = z.enum(['weekdays', 'weekly', 'monthly']).openapi('ScheduleType')

const ScheduleSchema = z
  .object({
    type: ScheduleTypeSchema.openapi({
      description:
        'The type of schedule at which the top up is executed.\n* **weekdays**: pull in funds Monday-Friday at 07:00 AM in the local timezone of the balance account.\n\n* **weekly**: pull in funds every Monday at 07:00 AM in the local timezone of the balance account.\n\n* **monthly**: pull in funds every first of the month at 07:00 AM in the local timezone of the balance account.\n* **null** (default): continuous monitoring.',
    }),
  })
  .openapi({ required: ['type'] })
  .openapi('Schedule')

const TriggerSchema = z
  .object({
    schedule: ScheduleSchema.exactOptional().openapi({
      description:
        'Contains the details about the schedule that determines when the top up is executed.',
    }),
    threshold: AmountDTOSchema.openapi({
      description:
        'The balance threshold that triggers the top-up. If the balance falls below this amount, a top-up is initiated.',
    }),
  })
  .openapi({ required: ['threshold'] })
  .openapi('Trigger')

const CreateRecurringTopUpSchema = z
  .object({
    counterparty: TopUpCounterpartySchema.openapi({
      description: 'The details about the counterparty that is funding the top-up. ',
    }),
    description: z
      .string()
      .min(0)
      .max(140)
      .openapi({
        description:
          'Your description for the recurring top-up.\n\nMaximum length is 140 characters. If you set a longer description, it will be cut off at 140 characters.',
      }),
    referenceForBeneficiary: z
      .string()
      .min(0)
      .max(80)
      .exactOptional()
      .openapi({
        description:
          ' A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.\n\n Supported characters: **a-z**, **A-Z**, **0-9**.',
      }),
    status: z
      .enum(['active', 'inactive'])
      .exactOptional()
      .openapi({
        description:
          'The status of the recurring top-up. If not provided, by default, this is set to **active**.\n\nPossible values: \n\n * **active**:  the top up is enabled and funds will be pulled in.\n\n * **inactive**: the top up is disabled and cannot be triggered. \n\n',
      }),
    topUpAmount: TopUpAmountSchema.openapi({
      description:
        'The currency and value to be added to the balance account, specified in minor units. This can be a fixed amount or a target amount.',
    }),
    trigger: TriggerSchema.openapi({
      description:
        'The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold.',
    }),
  })
  .openapi({ required: ['counterparty', 'description', 'topUpAmount', 'trigger'] })
  .openapi('CreateRecurringTopUp')

const ScaExemptionSchema = z
  .enum(['setByPlatform', 'initialLimit', 'lowerLimit', 'notRegulated', 'alreadyPerformed'])
  .openapi({
    description:
      "The type of exemption for Strong Customer Authentication (SCA). Possible values:\n* **lowerLimit**: the newly created limit is lower than the existing limit.\n* **notRegulated**: the limit is created in a country, region, or industry where it is not mandated by law to use SCA.\n* **setByPlatform**: you set a limit for one of your user's balance accounts, or for your balance platform.\n* **initialLimit**: there are no existing transfer limits set on the balance account or balance platform.\n* **alreadyPerformed**: you are confident about your user's identity and do not need to verify this using SCA.",
  })
  .openapi('ScaExemption')

const CreateScaInformationSchema = z
  .object({
    exemption: ScaExemptionSchema.exactOptional().openapi({
      description:
        "The type of exemption for Strong Customer Authentication (SCA). Possible values:\n* **lowerLimit**: the newly created limit is lower than the existing limit.\n* **notRegulated**: the limit is created in a country, region, or industry where it is not mandated by law to use SCA.\n* **setByPlatform**: you set a limit for one of your user's balance accounts, or for your balance platform.\n* **initialLimit**: there are no existing transfer limits set on the balance account or balance platform.\n* **alreadyPerformed**: you are confident about your user's identity and do not need to verify this using SCA.",
    }),
    scaOnApproval: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether to initiate Strong Customer Authentication (SCA) later, during approval, or immediately after you submit this request. Possible values:\n* **true**: you can initiate SCA later, during approval, for all pending transfer limits.\n* **false** (default): you initiate SCA immediately after submitting the transfer limit request.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateScaInformation')

const ScopeSchema = z
  .enum(['perDay', 'perTransaction'])
  .openapi({
    description:
      'The scope to which the transfer limit applies. Possible values:\n* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.\n* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day.',
  })
  .openapi('Scope')

const TransferTypeSchema = z
  .enum(['instant', 'all'])
  .openapi({
    description:
      'The type of transfer to which the limit applies. Possible values:\n* **instant**: the limit applies to transfers with an **instant** priority.\n* **all**: the limit applies to all transfers, regardless of priority.',
  })
  .openapi('TransferType')

const CreateTransferLimitRequestSchema = z
  .object({
    amount: AmountSchema.openapi({
      description:
        'The amount for the transfer limit. This is the maximum amount allowed per transfer or per day based on the `scope` of the limit.',
    }),
    endsAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the transfer limit becomes inactive. If you do not specify an end date, the limit stays active until you override it with a new limit.\n\nFormat [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD**',
      }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your reference for the transfer limit.' }),
    scaInformation: CreateScaInformationSchema.exactOptional().openapi({
      description: 'Information for the Strong Customer Authentication (SCA)',
    }),
    scope: ScopeSchema.openapi({
      description:
        'The scope to which the transfer limit applies. Possible values:\n* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.\n* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day.',
    }),
    startsAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the transfer limit becomes active. If you specify a date in the future, we will schedule a transfer limit.\n\nFormat [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD**',
      }),
    transferType: TransferTypeSchema.openapi({
      description:
        'The type of transfer to which the limit applies. Possible values:\n* **instant**: the limit applies to transfers with an **instant** priority.\n* **all**: the limit applies to all transfers, regardless of priority.',
    }),
  })
  .openapi({ required: ['amount', 'scope', 'transferType'] })
  .openapi('CreateTransferLimitRequest')

const DefaultErrorResponseEntitySchema = z
  .object({
    detail: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A human-readable explanation specific to this occurrence of the problem.',
      }),
    errorCode: z.string().exactOptional().openapi({ description: 'Unique business error code.' }),
    instance: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A URI that identifies the specific occurrence of the problem if applicable.',
      }),
    invalidFields: z
      .array(InvalidFieldSchema)
      .exactOptional()
      .openapi({ description: 'Array of fields with validation errors when applicable.' }),
    requestId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique reference for the request.' }),
    status: z.int32().exactOptional().openapi({ description: 'The HTTP status code.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short, human-readable summary of the problem type.' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URI that identifies the validation error type. It points to human-readable documentation for the problem type.',
      }),
  })
  .openapi({
    description: 'Standardized error response following RFC-7807 format',
    externalDocs: { url: 'https://www.rfc-editor.org/rfc/rfc7807' },
    required: [],
  })
  .openapi('DefaultErrorResponseEntity')

const ExecutionResultSchema = z.enum(['failed', 'succeeded', 'skipped']).openapi('ExecutionResult')

const FinishScaDeviceRegistrationRequestSchema = z
  .object({
    sdkOutput: z
      .string()
      .min(0)
      .max(20000)
      .openapi({
        description:
          "A base64-encoded block with the data required to register the SCA device. You obtain this information by using Adyen's authentication SDK.",
      }),
  })
  .openapi({ required: ['sdkOutput'] })
  .openapi('FinishScaDeviceRegistrationRequest')

const FinishScaDeviceRegistrationResponseSchema = z
  .object({ scaDevice: ScaDeviceSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('FinishScaDeviceRegistrationResponse')

const LimitStatusSchema = z
  .enum(['active', 'inactive', 'pendingSCA', 'scheduled'])
  .openapi({
    description:
      'The status of the transfer limit. Possible values:   \n* **active**: the limit is currently active.\n* **inactive**: the limit is currently inactive.\n* **pendingSCA**: the limit is pending until your user performs SCA.\n* **scheduled**: the limit is scheduled to become active at a future date.',
  })
  .openapi('LimitStatus')

const ListAssociationsResponseSchema = z
  .object({
    _links: LinkSchema.openapi({
      description: 'A list of hyperlinks to resources related to this response.',
    }),
    data: z
      .array(AssociationListingSchema)
      .openapi({ description: 'Contains a list of associations and their corresponding details.' }),
    itemsTotal: z
      .int32()
      .openapi({ description: 'The total number of items available.', example: 1 }),
    pagesTotal: z
      .int32()
      .openapi({ description: 'The total number of pages available.', example: 1 }),
  })
  .openapi({ required: ['_links', 'data', 'itemsTotal', 'pagesTotal'] })
  .openapi('ListAssociationsResponse')

const MandatePartyIdentificationSchema = z
  .object({
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

const MandateAccountIdentificationSchema = z
  .object({ type: z.string() })
  .openapi({
    discriminator: {
      propertyName: 'type',
      mapping: { ukLocal: '#/components/schemas/UKLocalMandateAccountIdentification' },
    },
    required: ['type'],
  })
  .openapi('MandateAccountIdentification')

const MandateBankAccountSchema = z
  .object({
    accountHolder: MandatePartyIdentificationSchema.openapi({
      description: 'Contains information about the owner of the counterparty bank account.',
    }),
    accountIdentification: MandateAccountIdentificationSchema.openapi({
      description:
        'Contains the bank account details of the counterparty. The fields required in this object depend on the country of the bank account and the currency of the transfer.',
    }),
  })
  .openapi({ required: ['accountHolder', 'accountIdentification'] })
  .openapi('MandateBankAccount')

const MandateStatusSchema = z.enum(['pending', 'approved', 'cancelled']).openapi('MandateStatus')

const MandateTypeSchema = z.literal('bacs').openapi('MandateType')

const MandateSchema = z
  .object({
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
    status: MandateStatusSchema.exactOptional().openapi({
      description:
        'The status of the mandate.\n\nPossible values: **pending**, **approved**, **cancelled**.',
    }),
    type: MandateTypeSchema.exactOptional().openapi({
      description: 'The type of mandate. Possible value: **bacs**.',
    }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the mandate was updated.' }),
  })
  .openapi({ required: [] })
  .openapi('Mandate')

const ListMandatesResponseSchema = z
  .object({
    link: LinkSchema.openapi({
      description: 'Contains links to the next and previous page whenever applicable.',
    }),
    mandates: z.array(MandateSchema).openapi({ description: 'Contains a list of the mandates.' }),
  })
  .openapi({ required: ['link', 'mandates'] })
  .openapi('ListMandatesResponse')

const MandateUpdateSchema = z
  .object({
    paymentInstrumentId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the payment instrument linked to the mandate.',
      }),
  })
  .openapi({ required: [] })
  .openapi('MandateUpdate')

const PayoutScheduleExecutionDetailsSchema = z
  .object({
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
    transferId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The id of the transfer from executing the payout.' }),
  })
  .openapi({ required: [] })
  .openapi('PayoutScheduleExecutionDetails')

const PayoutScheduleExecutionSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the payout execution.' }),
    result: ExecutionResultSchema.exactOptional().openapi({
      description:
        'The status of the payout execution.\n\nPossible values:\n- **succeeded**: The payout was sent successfully.\n- **failed**: The payout could not be sent because an error occurred.\n- **skipped**: The payout was not triggered as expected.',
    }),
    resultDetails: PayoutScheduleExecutionDetailsSchema.exactOptional().openapi({
      description: 'Contains information about the result of the payout execution.',
    }),
    triggeredAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date and time when the payout execution was initiated.' }),
  })
  .openapi({ required: [] })
  .openapi('PayoutScheduleExecution')

const PayoutScheduleExecutionsSchema = z
  .object({
    payoutScheduleExecutions: z
      .array(PayoutScheduleExecutionSchema)
      .openapi({ description: 'Contains a list of executions of the payout schedule.' }),
  })
  .openapi({ required: ['payoutScheduleExecutions'] })
  .openapi('PayoutScheduleExecutions')

const PayoutSweepExecutionDetailsSchema = z
  .object({
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The human-readable reason for why the sweep execution was not successful, if applicable.',
      }),
    reasonCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason code for why the sweep execution was not successful, if applicable.',
      }),
    sweepConfigurationDisabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the sweep configuration was disabled.' }),
    transferId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the transfer created by the sweep execution, if applicable.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PayoutSweepExecutionDetails')

const PayoutSweepExecutionSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the sweep execution.' }),
    result: ExecutionResultSchema.exactOptional().openapi({
      description:
        'The outcome of the sweep execution.\n\nPossible results:\n- **succeeded**: The sweep payout was completed successfully.\n- **failed**: The sweep payout was not completed due to an error.\n- **skipped**: The sweep payout was not triggered as expected.',
    }),
    resultDetails: PayoutSweepExecutionDetailsSchema.exactOptional().openapi({
      description: 'Details about the outcome of the sweep execution.',
    }),
    triggeredAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The timestamp of when the execution was triggered.' }),
  })
  .openapi({ required: [] })
  .openapi('PayoutSweepExecution')

const PayoutSweepExecutionsSchema = z
  .object({
    link: LinkSchema.openapi({
      description: 'Contains links to the next and previous page whenever applicable.',
    }),
    sweepExecutions: z
      .array(PayoutSweepExecutionSchema)
      .openapi({ description: 'Contains a list of executions of the sweep configuration.' }),
  })
  .openapi({ required: ['link', 'sweepExecutions'] })
  .openapi('PayoutSweepExecutions')

const RecurringTopUpSchema = z
  .object({
    counterparty: TopUpCounterpartySchema.openapi({
      description: 'The details about the counterparty that is funding the top-up. ',
    }),
    description: z
      .string()
      .min(0)
      .max(140)
      .openapi({
        description:
          'Your description for the recurring top-up.\n\nMaximum length is 140 characters. If you set a longer description, it will be cut off at 140 characters.',
      }),
    id: z.string().openapi({ description: 'The unique identifier of the top up.', readOnly: true }),
    referenceForBeneficiary: z
      .string()
      .min(0)
      .max(80)
      .exactOptional()
      .openapi({
        description:
          ' A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.\n\n Supported characters: **a-z**, **A-Z**, **0-9**.',
      }),
    status: z
      .enum(['active', 'inactive'])
      .exactOptional()
      .openapi({
        description:
          'The status of the recurring top-up. If not provided, by default, this is set to **active**.\n\nPossible values: \n\n * **active**:  the top up is enabled and funds will be pulled in.\n\n * **inactive**: the top up is disabled and cannot be triggered. \n\n',
      }),
    topUpAmount: TopUpAmountSchema.openapi({
      description:
        'The currency and value to be added to the balance account, specified in minor units. This can be a fixed amount or a target amount.',
    }),
    trigger: TriggerSchema.openapi({
      description:
        'The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold.',
    }),
  })
  .openapi({ required: ['counterparty', 'description', 'id', 'topUpAmount', 'trigger'] })
  .openapi('RecurringTopUp')

const TopUpAmountUpdateSchema = z
  .object({
    fixed: z
      .xor([AmountUpdateSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description: 'The fixed amount with which you want to top up the balance account.',
      }),
    target: z
      .xor([AmountUpdateSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description: 'The target balance for the balance account that the top-up must achieve.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TopUpAmountUpdate')

const ScheduleUpdateSchema = z
  .object({
    type: ScheduleTypeSchema.exactOptional().openapi({
      description:
        'The type of schedule at which the top up is executed.\n* **weekdays**: pull in funds Monday-Friday at 07:00 AM in the local timezone of the balance account.\n\n* **weekly**: pull in funds every Monday at 07:00 AM in the local timezone of the balance account.\n\n* **monthly**: pull in funds every first of the month at 07:00 AM in the local timezone of the balance account.\n* **null** (default): continuous monitoring.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ScheduleUpdate')

const TriggerUpdateSchema = z
  .object({
    schedule: z
      .xor([ScheduleUpdateSchema, z.null().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Contains the details about the schedule that determines when the top up is executed.',
      }),
    threshold: AmountUpdateSchema.exactOptional().openapi({
      description:
        'The balance threshold that triggers the top-up. If the balance falls below this amount, a top-up is initiated.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TriggerUpdate')

const RecurringTopUpUpdateSchema = z
  .object({
    description: z
      .string()
      .min(0)
      .max(140)
      .exactOptional()
      .openapi({
        description:
          'Your description for the recurring top-up.\n\nMaximum length is 140 characters. If you set a longer description, it will be cut off at 140 characters.',
      }),
    referenceForBeneficiary: z
      .string()
      .min(0)
      .max(80)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          ' A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both parties involved in the funds movement.\n\n Supported characters: **a-z**, **A-Z**, **0-9**.',
      }),
    status: z
      .enum(['active', 'inactive'])
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The status of the recurring top-up. If not provided, by default, this is set to **active**.\n\nPossible values: \n\n * **active**:  the top up is enabled and funds will be pulled in.\n\n * **inactive**: the top up is disabled and cannot be triggered. \n\n',
      }),
    topUpAmount: TopUpAmountUpdateSchema.exactOptional().openapi({
      description:
        'The currency and value to be added to the balance account, specified in minor units. This can be a fixed amount or a target amount.',
    }),
    trigger: TriggerUpdateSchema.exactOptional().openapi({
      description:
        'The condition that triggers the top-up. This can be a recurring schedule or a minimum balance threshold.',
    }),
  })
  .openapi({ required: [] })
  .openapi('RecurringTopUpUpdate')

const RecurringTopUpsResultSchema = z
  .object({ link: LinkSchema, recurringTopUps: z.array(RecurringTopUpSchema) })
  .openapi({ required: ['link', 'recurringTopUps'] })
  .openapi('RecurringTopUpsResult')

const RemoveAssociationRequestSchema = z
  .object({
    entityId: z
      .string()
      .min(1)
      .max(100)
      .openapi({ description: 'The unique identifier of the entity.' }),
    entityType: ScaEntityTypeSchema.openapi({
      description:
        'The type of the entity.  \n\nPossible values: **accountHolder**, **legalEntity** or **paymentInstrument**.',
      example: 'accountHolder',
    }),
    scaDeviceIds: z
      .array(z.string().length(30))
      .min(0)
      .max(5)
      .openapi({
        description: 'A list of device ids associated with the entity that should be removed.',
      }),
  })
  .openapi({ required: ['entityId', 'entityType', 'scaDeviceIds'] })
  .openapi('RemoveAssociationRequest')

const ScaEntitySchema = z
  .object({
    id: z
      .string()
      .min(0)
      .max(100)
      .openapi({
        description: 'The unique identifier of the entity.',
        example: 'AH9999Z99Z999999ZZZZ9999Z',
      }),
    type: ScaEntityTypeSchema.openapi({
      description:
        'The type of the entity that you are associating with the SCA device. \n\nPossible values: **accountHolder**, **legalEntity** or **paymentInstrument**.',
      example: 'accountHolder',
    }),
  })
  .openapi({ required: ['id', 'type'] })
  .openapi('ScaEntity')

const ScaStatusSchema = z
  .enum(['notPerformed', 'pending', 'performed'])
  .openapi({
    description:
      'The status of Strong Customer Authentication (SCA). Possible values:\n* **notPerformed**: the requester was unable to successfully authenticate the request using SCA, or has an SCA exemption.\n* **pending**: the request is pending SCA authentication.\n* **performed**: the request is successfully authenticated using SCA.',
  })
  .openapi('ScaStatus')

const ScaInformationSchema = z
  .object({
    exemption: ScaExemptionSchema.exactOptional().openapi({
      description:
        "The type of exemption for Strong Customer Authentication (SCA). Possible values:\n* **lowerLimit**: the newly created limit is lower than the existing limit.\n* **notRegulated**: the limit is created in a country, region, or industry where it is not mandated by law to use SCA.\n* **setByPlatform**: you set a limit for one of your user's balance accounts, or for your balance platform.\n* **initialLimit**: there are no existing transfer limits set on the balance account or balance platform.\n* **alreadyPerformed**: you are confident about your user's identity and do not need to verify this using SCA.",
    }),
    status: ScaStatusSchema.openapi({
      description:
        'The status of Strong Customer Authentication (SCA). Possible values:\n* **notPerformed**: the requester was unable to successfully authenticate the request using SCA, or has an SCA exemption.\n* **pending**: the request is pending SCA authentication.\n* **performed**: the request is successfully authenticated using SCA.',
    }),
  })
  .openapi({ required: ['status'] })
  .openapi('ScaInformation')

const SubmitScaAssociationRequestSchema = z
  .object({
    entities: z
      .array(ScaEntitySchema)
      .min(0)
      .max(5)
      .openapi({ description: 'The list of entities to be associated.' }),
  })
  .openapi({ required: ['entities'] })
  .openapi('SubmitScaAssociationRequest')

const SubmitScaAssociationResponseSchema = z
  .object({
    scaAssociations: z
      .array(AssociationSchema)
      .min(1)
      .openapi({ description: 'List of associations created to the entities and their statuses.' }),
  })
  .openapi({ required: ['scaAssociations'] })
  .openapi('SubmitScaAssociationResponse')

const SummarySchema = z
  .object({
    legalEntityId: z
      .string()
      .openapi({ description: 'The unique identifier of the legal entity.' }),
    taxYears: z
      .array(z.int32())
      .openapi({ description: 'The tax years for which the legal entity has a tax form.' }),
  })
  .openapi({ required: ['legalEntityId', 'taxYears'] })
  .openapi('Summary')

const TaxFormSummaryResponseSchema = z
  .object({
    data: z
      .array(SummarySchema)
      .openapi({
        description:
          'A list of tax form summaries, where each summary consists of the legal entity and the tax years in which the legal entity has a tax form.',
      }),
  })
  .openapi({ required: ['data'] })
  .openapi('TaxFormSummaryResponse')

const TransferLimitSchema = z
  .object({
    amount: AmountSchema.openapi({
      description:
        'The amount for the transfer limit. This is the maximum amount allowed per transfer or per day based on the `scope` of the limit.',
    }),
    endsAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date and time when the transfer limit becomes inactive. If you do not specify an end date, the limit stays active until you override it with a new limit.\n\nFormat [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD**',
      }),
    id: z.string().openapi({ description: 'The unique identifier of the transfer limit.' }),
    limitStatus: LimitStatusSchema.openapi({
      description:
        'The status of the transfer limit. Possible values:   \n* **active**: the limit is currently active.\n* **inactive**: the limit is currently inactive.\n* **pendingSCA**: the limit is pending until your user performs SCA.\n* **scheduled**: the limit is scheduled to become active at a future date.',
    }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your reference for the transfer limit.' }),
    scaInformation: ScaInformationSchema.exactOptional().openapi({
      description: 'Information for the Strong Customer Authentication (SCA)',
    }),
    scope: ScopeSchema.openapi({
      description:
        'The scope to which the transfer limit applies. Possible values:\n* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.\n* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day.',
    }),
    startsAt: z.iso
      .datetime({ offset: true })
      .openapi({
        description:
          'The date and time when the transfer limit becomes active. If you specify a date in the future, we will schedule a transfer limit.\n\nFormat [ISO 8601](https://www.w3.org/TR/NOTE-datetime): **YYYY-MM-DDThh:mm:ss.sssTZD**',
      }),
    transferType: TransferTypeSchema.openapi({
      description:
        'The type of transfer to which the limit applies. Possible values:\n* **instant**: the limit applies to transfers with an **instant** priority.\n* **all**: the limit applies to all transfers, regardless of priority.',
    }),
  })
  .openapi({
    description: 'The transfer limit configured to regulate outgoing transfers.',
    required: ['amount', 'id', 'limitStatus', 'scope', 'startsAt', 'transferType'],
  })
  .openapi('TransferLimit')

const TransferLimitListResponseSchema = z
  .object({
    transferLimits: z
      .array(TransferLimitSchema)
      .openapi({ description: 'List of available transfer limits.' }),
  })
  .openapi({ required: ['transferLimits'] })
  .openapi('TransferLimitListResponse')

const UKLocalMandateAccountIdentificationSchema = MandateAccountIdentificationSchema.and(
  z
    .object({
      accountNumber: z
        .string()
        .length(8)
        .exactOptional()
        .openapi({
          description: 'The 8-digit bank account number, without separators or whitespace.',
        }),
      sortCode: z
        .string()
        .length(6)
        .exactOptional()
        .openapi({
          description:
            'The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.',
        }),
      type: z.string().default('ukLocal').exactOptional().openapi({ description: '**ukLocal**' }),
    })
    .openapi({ required: [] }),
)
  .openapi({ required: ['accountNumber', 'sortCode', 'type'] })
  .openapi('UKLocalMandateAccountIdentification')

const WebhookSettingsSchema = z
  .object({
    webhookSettings: z
      .array(WebhookSettingSchema)
      .exactOptional()
      .openapi({ description: 'The list of webhook settings.' }),
  })
  .openapi({ required: [] })
  .openapi('WebhookSettings')

const DeleteTransactionRulesTransactionRuleIdSuccess_200Example = {
  summary: 'Transaction rule deleted',
  description: 'Example response for successfully deleting a transaction rule',
  value: {
    aggregationLevel: 'paymentInstrument',
    description: 'Up to 1000 EUR per card for the last 12 hours',
    entityKey: {
      entityReference: 'PG3227C223222C5GXR3M5592Q',
      entityType: 'paymentInstrumentGroup',
    },
    interval: { duration: { unit: 'hours', value: 12 }, timeZone: 'UTC', type: 'sliding' },
    outcomeType: 'hardBlock',
    reference: 'myRule12345',
    requestType: 'authorization',
    ruleRestrictions: {
      totalAmount: { operation: 'greaterThan', value: { currency: 'EUR', value: 100000 } },
    },
    type: 'velocity',
    id: 'TR3227C223222C5GXT3DD5VCF',
  },
}

const Generic_400Example = {
  summary: 'Response code - 400 Bad request',
  value: {
    type: 'https://docs.adyen.com/errors/general/bad-request',
    title: 'Bad request',
    status: 400,
    detail: 'Empty input which would have resulted in a null result.',
    errorCode: '00_400',
  },
}

const Generic_401Example = {
  summary: 'Response code - 401 Unauthorized',
  value: {
    type: 'https://docs.adyen.com/errors/security/unauthorized',
    title: 'Unauthorized',
    status: 401,
    detail: 'Not authorized to access this service.',
    errorCode: '00_401',
  },
}

const Generic_403Example = {
  summary: 'Response code - 403 Forbidden.',
  value: {
    type: 'https://docs.adyen.com/errors/security/unauthorized',
    title: 'Forbidden',
    status: 403,
    detail: 'Not the right permission to access this service.',
    errorCode: '00_403',
  },
}

const Generic_404Example = {
  summary: 'Response code 404 - Not found',
  value: {
    type: 'https://docs.adyen.com/errors/general/not-found',
    title: 'Not found',
    status: 404,
    detail: 'Service not found.',
    errorCode: '00_404',
  },
}

const Generic_422Example = {
  summary: 'Response code - 422 Unprocessable Entity.',
  value: {
    type: 'https://docs.adyen.com/errors/general/invalid-field-value',
    title: 'Invalid Payment Instrument information provided',
    status: 422,
    detail: 'The balanceAccountId can only be changed when the status is Inactive or Requested',
    requestId: '1W1UI15PLVGC9V8O',
    errorCode: '30_031',
  },
}

const Generic_500Example = {
  summary: 'Response code - 500 Internal Server Error',
  value: {
    type: 'https://docs.adyen.com/errors/general/internal',
    title: 'An internal error happened',
    status: 500,
    detail: 'Unrecoverable error while trying to create payment instrument',
    requestId: '1WAF555PLWNTLYOQ',
    errorCode: '00_500',
  },
}

const Generic_503Example = {
  summary: 'Response code - 503 Internal Server Error',
  value: {
    type: 'https://docs.adyen.com/errors/general/processing-error',
    title: 'Error processing request',
    status: 500,
    detail: 'Error while determining the payment instrument workflow',
    requestId: '1W1UHY5O2CONU4R7',
    errorCode: '99_500',
  },
}

const GetAccountHoldersIdBalanceAccountsSuccess_200Example = {
  summary: 'List of balance accounts retrieved',
  description:
    'Example response when retrieving a list of balance accounts under an account holder',
  value: {
    balanceAccounts: [
      {
        accountHolderId: 'AH32272223222B5CTBMZT6W2V',
        defaultCurrencyCode: 'EUR',
        description: 'S. Hopper - Main Account',
        reference: 'YOUR_REFERENCE-X173L',
        timeZone: 'Europe/Amsterdam',
        id: 'BA32272223222B5CTDNB66W2Z',
        status: 'active',
      },
      {
        accountHolderId: 'AH32272223222B5CTBMZT6W2V',
        defaultCurrencyCode: 'EUR',
        description: 'S. Hopper - Main Account',
        reference: 'YOUR_REFERENCE-X173L',
        timeZone: 'Europe/Amsterdam',
        id: 'BA32272223222B5CTDQPM6W2H',
        status: 'active',
      },
      {
        accountHolderId: 'AH32272223222B5CTBMZT6W2V',
        defaultCurrencyCode: 'EUR',
        description: 'S. Hopper - Main Account',
        reference: 'YOUR_REFERENCE-X173L',
        timeZone: 'Europe/Amsterdam',
        id: 'BA32272223222B5CVF5J63LMW',
        status: 'active',
      },
    ],
    hasNext: true,
    hasPrevious: false,
  },
}

const GetAccountHoldersIdSuccess_200Example = {
  summary: 'Account holder retrieved',
  description: 'Example response when retrieving an account holder',
  value: {
    balancePlatform: 'YOUR_BALANCE_PLATFORM',
    description: 'Account holder used for international payments and payouts',
    legalEntityId: 'LE322JV223222D5GG42KN6869',
    reference: 'S.Eller-001',
    capabilities: {
      receiveFromPlatformPayments: {
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
      sendToBalanceAccount: {
        enabled: true,
        requested: true,
        allowed: false,
        verificationStatus: 'pending',
      },
      sendToTransferInstrument: {
        enabled: true,
        requested: true,
        allowed: false,
        transferInstruments: [
          {
            enabled: true,
            requested: true,
            allowed: false,
            id: 'SE322KH223222F5GXZFNM3BGP',
            verificationStatus: 'pending',
          },
        ],
        verificationStatus: 'pending',
      },
    },
    id: 'AH3227C223222C5GXQXF658WB',
    status: 'active',
  },
}

const GetAccountHoldersIdTaxFormsSuccess_200Example = {
  summary: 'Tax form retrieved for an account holder',
  description: 'Example response when retrieving a tax form for an account holder',
  value: {
    content: 'JVBERi0xLjcKJcfsj6IKJSVJbnZvY2F0aW9uOiBwYXRoL2dzd2luNjQuZXhlIC1kRGlzcGxh',
    contentType: 'application/pdf',
  },
}

const GetBalanceAccountsBalanceAccountIdSweepsSuccess_200Example = {
  summary: 'Sweeps under a balance account retrieved',
  description: 'Example response when retrieving sweeps under a balance account',
  value: {
    hasNext: false,
    hasPrevious: false,
    sweeps: [
      {
        id: 'SWPC4227C224555B5FTD2NT2JV4WN5',
        schedule: { type: 'daily' },
        status: 'active',
        targetAmount: { currency: 'EUR', value: 0 },
        triggerAmount: { currency: 'EUR', value: 0 },
        type: 'push',
        counterparty: { balanceAccountId: 'BA32272223222B5FTD2KR6TJD' },
        currency: 'EUR',
      },
    ],
  },
}

const GetBalanceAccountsBalanceAccountIdSweepsSweepIdSuccess_200Example = {
  summary: 'Sweep retrieved',
  description: 'Example response when retrieving a sweep',
  value: {
    id: 'SWPC4227C224555B5FTD2NT2JV4WN5',
    schedule: { type: 'daily' },
    status: 'active',
    targetAmount: { currency: 'EUR', value: 0 },
    triggerAmount: { currency: 'EUR', value: 0 },
    type: 'push',
    counterparty: { balanceAccountId: 'BA32272223222B5FTD2KR6TJD' },
    currency: 'EUR',
  },
}

const GetBalanceAccountsIdPaymentInstrumentsSuccess_200Example = {
  summary: 'List of payment instruments retrieved',
  description:
    'Example response when retrieving a list of payment instruments under a balance account',
  value: {
    hasNext: true,
    hasPrevious: false,
    paymentInstruments: [
      {
        balanceAccountId: 'BA32272223222B59CZ3T52DKZ',
        issuingCountryCode: 'GB',
        status: 'active',
        type: 'card',
        card: {
          brand: 'mc',
          brandVariant: 'mc',
          cardholderName: 'name',
          formFactor: 'virtual',
          bin: '555544',
          expiration: { month: '12', year: '2022' },
          lastFour: '2357',
          number: '************2357',
        },
        id: 'PI32272223222B59M5TM658DT',
      },
      {
        balanceAccountId: 'BA32272223222B59CZ3T52DKZ',
        issuingCountryCode: 'GB',
        status: 'active',
        type: 'card',
        card: {
          brand: 'mc',
          brandVariant: 'mc',
          cardholderName: 'name',
          formFactor: 'virtual',
          bin: '555544',
          expiration: { month: '01', year: '2023' },
          lastFour: '8331',
          number: '************8331',
        },
        id: 'PI32272223222B59PXDGQDLSF',
      },
    ],
  },
}

const GetBalanceAccountsIdSuccess_200Example = {
  summary: 'Balance account details retrieved',
  description: 'Example response for retrieving a balance account',
  value: {
    accountHolderId: 'AH32272223222B59K6RTQBFNZ',
    defaultCurrencyCode: 'EUR',
    timeZone: 'Europe/Amsterdam',
    balances: [
      { available: 0, balance: 0, currency: 'EUR', reserved: 0, pending: 0, pendingAvailable: 0 },
    ],
    id: 'BA3227C223222B5BLP6JQC3FD',
    status: 'active',
  },
}

const GetBalancePlatformsIdAccountHoldersSuccess_200Example = {
  summary: 'List of account holders retrieved',
  description:
    'Example response when retrieving a list of account holders under a balance platform',
  value: {
    accountHolders: [
      {
        description: 'Test-305',
        legalEntityId: 'LE3227C223222D5D8S5S33M4M',
        reference: 'LegalEntity internal error test',
        id: 'AH32272223222B5GFSNSXFFL9',
        status: 'active',
      },
      {
        description: 'Test-751',
        legalEntityId: 'LE3227C223222D5D8S5TT3SRX',
        reference: 'LegalEntity internal error test',
        id: 'AH32272223222B5GFSNVGFFM7',
        status: 'active',
      },
      {
        description: 'Explorer Holder',
        legalEntityId: 'LE3227C223222D5D8S5TT3SRX',
        reference: 'Account from the Explorer Holder',
        id: 'AH32272223222B5GFWNRFFVR6',
        status: 'active',
      },
    ],
    hasNext: true,
    hasPrevious: true,
  },
}

const GetBalancePlatformsIdSuccess_200Example = {
  summary: 'Balance platform retrieved',
  description: 'Example response when retrieving a balance platform',
  value: { id: 'YOUR_BALANCE_PLATFORM', status: 'Active' },
}

const GetCardordersIdItemsSuccess_200Example = {
  summary: 'Item list of a specific card order retrieved',
  description: 'Example response for retrieving the item list of a specific card order',
  value: {
    data: [
      {
        card: { status: 'shipped' },
        cardOrderItemId: 'UNIQUE_CARD_ORDER_ITEM_ID',
        paymentInstrumentId: 'UNIQUE_PAYMENT_INSTRUMENT_ID',
        pin: { status: 'produced' },
        shippingMethod: 'Cardholder Post Basic National',
      },
    ],
    hasNext: false,
    hasPrevious: false,
  },
}

const GetCardordersSuccess_200Example = {
  summary: 'List of card orders retrieved',
  description: 'Example response for retrieving a paginated list of card orders',
  value: {
    cardOrders: [
      {
        beginDate: '2022-12-05T00:00:00+01:00',
        cardManufacturingProfileId: 'UNIQUE_CARD_MANUFACTURER_PROFILE_ID',
        endDate: '2022-12-06T00:00:00+01:00',
        id: 'UNIQUE_CARD_ORDER_ID',
        lockDate: '2023-04-14T16:43:02+02:00',
        serviceCenter: 'IDEMIA Sittard',
        status: 'closed',
      },
    ],
    hasNext: true,
    hasPrevious: false,
  },
}

const GetPaymentInstrumentGroupsIdSuccess_200Example = {
  summary: 'Payment instrument group retrieved',
  description: 'Example response when retrieving a payment instrument group',
  value: {
    balancePlatform: 'YOUR_BALANCE_PLATFORM',
    txVariant: 'mc',
    id: 'PG3227C223222B5CMD3FJFKGZ',
  },
}

const GetPaymentInstrumentGroupsIdTransactionRulesSuccess_200Example = {
  summary: 'Transaction rules for a payment instrument group retrieved',
  description:
    'Example response when retrieving a list of transaction rules applied to a payment instrument group',
  value: {
    transactionRules: [
      {
        aggregationLevel: 'paymentInstrument',
        description: 'Up to 1000 EUR per card for the last 12 hours',
        entityKey: {
          entityReference: 'PG3227C223222C5GXR3M5592Q',
          entityType: 'paymentInstrumentGroup',
        },
        interval: { duration: { unit: 'hours', value: 12 }, timeZone: 'UTC', type: 'sliding' },
        outcomeType: 'hardBlock',
        reference: 'YOUR_REFERENCE_2918A',
        requestType: 'authorization',
        ruleRestrictions: {
          totalAmount: { operation: 'greaterThan', value: { currency: 'EUR', value: 100000 } },
        },
        status: 'inactive',
        type: 'velocity',
        id: 'TR3227C223222C5GXR3XP596N',
      },
      {
        aggregationLevel: 'paymentInstrument',
        description: 'NL only',
        entityKey: {
          entityReference: 'PG3227C223222C5GXR3M5592Q',
          entityType: 'paymentInstrumentGroup',
        },
        interval: { duration: { unit: 'hours', value: 12 }, timeZone: 'UTC', type: 'sliding' },
        outcomeType: 'hardBlock',
        reference: 'myRule12345',
        requestType: 'authorization',
        ruleRestrictions: {
          totalAmount: { operation: 'greaterThan', value: { currency: 'EUR', value: 100000 } },
        },
        status: 'inactive',
        type: 'velocity',
        id: 'TR3227C223222C5GXR3WC595H',
      },
    ],
  },
}

const GetPaymentInstrumentsIdRevealSuccess_200Example = {
  summary: "Get the card's primary account number (PAN)",
  description: 'Example response for getting the card PAN',
  value: { cvc: '123', expiration: { month: '02', year: '2026' }, pan: '5555444411209883' },
}

const GetPaymentInstrumentsIdSuccess_200Example = {
  summary: 'Payment instruments retrieved',
  description:
    'Example response for retrieving payment instruments associated with a balance account',
  value: {
    balanceAccountId: 'BA32272223222B59CZ3T52DKZ',
    description: 'S. Hopper - Main card',
    issuingCountryCode: 'GB',
    status: 'active',
    type: 'card',
    card: {
      brand: 'mc',
      brandVariant: 'mcdebit',
      cardholderName: 'Simon Hopper',
      formFactor: 'virtual',
      bin: '555544',
      expiration: { month: '01', year: '2024' },
      lastFour: '3548',
      number: '************3548',
    },
    id: 'PI32272223222B5CMD3MQ3HXX',
  },
}

const GetPaymentInstrumentsIdTransactionRulesSuccess_200Example = {
  summary: 'Transaction rules for a payment instrument retrieved',
  description:
    'Example response when retrieving a list of transaction rules applied to a payment instrument',
  value: {
    transactionRules: [
      {
        description: 'Only allow point-of-sale transactions',
        entityKey: {
          entityReference: 'PI3227C223222B5FN65FN5NS9',
          entityType: 'paymentInstrument',
        },
        interval: { timeZone: 'UTC', type: 'perTransaction' },
        outcomeType: 'hardBlock',
        reference: 'YOUR_REFERENCE_4F7346',
        requestType: 'authorization',
        ruleRestrictions: { processingTypes: { operation: 'noneMatch', value: ['pos'] } },
        startDate: '2022-08-02T16:07:00.851374+02:00',
        status: 'active',
        type: 'blockList',
        id: 'TR32272223222B5GFSGFLFCHM',
      },
      {
        description: 'Set the maximum number of active network tokens to one for this card',
        entityKey: {
          entityReference: 'PI3227C223222B5FN65FN5NS9',
          entityType: 'paymentInstrument',
        },
        interval: { timeZone: 'UTC', type: 'perTransaction' },
        outcomeType: 'hardBlock',
        reference: 'myRule123',
        requestType: 'authorization',
        ruleRestrictions: { activeNetworkTokens: { operation: 'greaterThanOrEqualTo', value: 1 } },
        startDate: '2022-10-03T14:48:28.999314+02:00',
        status: 'active',
        type: 'blockList',
        id: 'TR32272223222C5GQJ93L7J8Z',
      },
    ],
  },
}

const GetPublicKeySuccess_200Example = {
  summary: 'Response with public key',
  value: { publicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMII...', publicKeyExpiryDate: '2023-12-12' },
}

const GetTransactionRulesTransactionRuleIdSuccess_200Example = {
  summary: 'Transaction rules retrieved',
  description: 'Example response when retrieving a transaction rule',
  value: {
    transactionRule: {
      description: 'Only allow point-of-sale transactions',
      entityKey: { entityReference: 'PI3227C223222B5FN65FN5NS9', entityType: 'paymentInstrument' },
      interval: { timeZone: 'UTC', type: 'perTransaction' },
      outcomeType: 'hardBlock',
      reference: 'YOUR_REFERENCE_4F7346',
      requestType: 'authorization',
      ruleRestrictions: { processingTypes: { operation: 'noneMatch', value: ['pos'] } },
      startDate: '2022-08-02T16:07:00.851374+02:00',
      status: 'active',
      type: 'blockList',
      id: 'TR32272223222B5GFSGFLFCHM',
    },
  },
}

const PatchAccountHoldersIdRequestAccountHolderCapabilityExample = {
  summary: 'Request account holder capability',
  description: 'Example request for the `receivePayments` capability for an account holder',
  value: {
    description: 'Account holder used for international payments and payouts',
    reference: 'S.Eller-001',
    capabilities: { receivePayments: { requested: true } },
  },
}

const PatchAccountHoldersIdRequestAccountHolderCapability_200Example = {
  summary: 'Account holder capability requested',
  description:
    'Example response for requesting the `receivePayments` capability for an account holder',
  value: {
    balancePlatform: 'YOUR_BALANCE_PLATFORM',
    description: 'Account holder used for international payments and payouts',
    legalEntityId: 'LE322JV223222F5GKQZZ9DS99',
    reference: 'S.Eller-001',
    capabilities: {
      receivePayments: {
        enabled: false,
        requested: true,
        allowed: false,
        verificationStatus: 'pending',
      },
    },
    id: 'AH3227C223222C5GKR23686TF',
    status: 'active',
  },
}

const PatchAccountHoldersIdUpdateAccountHolderStatusExample = {
  summary: 'Deactivate an account holder',
  description: 'Example request for permanently deactivating an account holder',
  value: { status: 'closed' },
}

const PatchAccountHoldersIdUpdateAccountHolderStatus_200Example = {
  summary: 'Account holder deactivated',
  description: 'Example response for permanently deactivating an account holder',
  value: {
    balancePlatform: 'YOUR_BALANCE_PLATFORM',
    description: 'Account holder used for international payments and payouts',
    legalEntityId: 'LE322JV223222F5GKQZZ9DS99',
    reference: 'S.Eller-001',
    id: 'AH3227C223222C5GKR23686TF',
    status: 'closed',
  },
}

const PatchBalanceAccountsBalanceAccountIdSweepsSweepIdUpdateSweepStatusExample = {
  summary: 'Update the status of a sweep',
  description: 'Example request for updating a sweep',
  value: { status: 'inactive' },
}

const PatchBalanceAccountsBalanceAccountIdSweepsSweepIdUpdateSweepStatus_200Example = {
  summary: 'Sweep status updated',
  description: 'Example response for updating a sweep',
  value: {
    id: 'SWPC4227C224555B5FTD2NT2JV4WN5',
    counterparty: { merchantAccount: 'YOUR_MERCHANT_ACCOUNT' },
    triggerAmount: { currency: 'EUR', value: 50000 },
    currency: 'EUR',
    schedule: { type: 'balance' },
    type: 'pull',
    status: 'inactive',
  },
}

const PatchBalanceAccountsIdUpdateBalanceAccountExample = {
  summary: 'Update the time zone of a balance account',
  description: 'Example request for updating a balance account',
  value: { timeZone: 'Europe/Amsterdam' },
}

const PatchBalanceAccountsIdUpdateBalanceAccount_200Example = {
  summary: 'Time zone of a balance account updated',
  description: 'Example response for updating a balance account',
  value: {
    accountHolderId: 'AH32272223222B5GFSNVGFFM7',
    defaultCurrencyCode: 'EUR',
    timeZone: 'Europe/Amsterdam',
    balances: [{ available: 0, balance: 0, currency: 'EUR', reserved: 0 }],
    id: 'BA32272223222B59K6ZXHBFN6',
    status: 'active',
  },
}

const PatchPaymentInstrumentsIdUpdatePaymentInstrumentBalanceAccountExample = {
  summary: 'Update the balance account linked to a payment instrument',
  description: 'Example request for updating the balance account of a payment instrument',
  value: { balanceAccountId: 'BA32272223222B5CM82WL892M' },
}

const PatchPaymentInstrumentsIdUpdatePaymentInstrumentBalanceAccount_200Example = {
  summary: 'Balance account updated',
  description: 'Example response for updating the balance account linked to a payment instrument',
  value: {
    balanceAccountId: 'BA32272223222B5CM82WL892M',
    description: 'S. Hopper - Main card',
    issuingCountryCode: 'GB',
    status: 'inactive',
    type: 'card',
    card: {
      brand: 'mc',
      brandVariant: 'mcdebit',
      cardholderName: 'Simon Hopper',
      formFactor: 'virtual',
      bin: '555544',
      expiration: { month: '01', year: '2024' },
      lastFour: '5785',
      number: '************5785',
    },
    id: 'PI3227C223222B5CMD278FKGS',
  },
}

const PatchPaymentInstrumentsIdUpdatePaymentInstrumentStatusExample = {
  summary: 'Update the status of a payment instrument',
  description: 'Example request for updating the status of a payment instrument',
  value: { status: 'suspended' },
}

const PatchPaymentInstrumentsIdUpdatePaymentInstrumentStatus_200Example = {
  summary: 'Payment instrument status updated',
  description: 'Example response for updating the status of a payment instrument',
  value: {
    balanceAccountId: 'BA32272223222B59CZ3T52DKZ',
    description: 'S. Hopper - Main card',
    issuingCountryCode: 'GB',
    status: 'suspended',
    type: 'card',
    card: {
      brand: 'mc',
      brandVariant: 'mcdebit',
      cardholderName: 'Simon Hopper',
      formFactor: 'virtual',
      bin: '555544',
      expiration: { month: '01', year: '2024' },
      lastFour: '5785',
      number: '************5785',
    },
    id: 'PI3227C223222B5CMD278FKGS',
  },
}

const PatchTransactionRulesTransactionRuleIdUpdateTransactionRuleStatusExample = {
  summary: 'Update the interval of transaction rule',
  description: 'Example request for updating the interval of a transaction rule',
  value: {
    description: 'Allow only point-of-sale transactions',
    reference: 'YOUR_REFERENCE_4F7346',
    entityKey: { entityType: 'paymentInstrument', entityReference: 'PI3227C223222B5FG88SB8BHR' },
    status: 'inactive',
    interval: { type: 'weekly' },
    ruleRestrictions: { processingTypes: { operation: 'noneMatch', value: ['pos'] } },
    type: 'blockList',
  },
}

const PatchTransactionRulesTransactionRuleIdUpdateTransactionRuleStatus_200Example = {
  summary: 'Transaction rule status updated',
  description: 'Example response for successfully updating the status of a transaction rule',
  value: {
    aggregationLevel: 'paymentInstrument',
    description: 'Up to 1000 EUR per card for the last 12 hours',
    entityKey: {
      entityReference: 'PG3227C223222C5GXR3M5592Q',
      entityType: 'paymentInstrumentGroup',
    },
    interval: { duration: { unit: 'hours', value: 12 }, timeZone: 'UTC', type: 'sliding' },
    outcomeType: 'hardBlock',
    reference: 'YOUR_REFERENCE_2918A',
    requestType: 'authorization',
    ruleRestrictions: {
      totalAmount: { operation: 'greaterThan', value: { currency: 'EUR', value: 100000 } },
    },
    startDate: '2022-11-17T00:07:09.10057663+01:00',
    status: 'inactive',
    type: 'velocity',
    id: 'TR3227C223222C5GXR3XP596N',
  },
}

const PostAccountHoldersCreateAccountHolderExample = {
  summary: 'Create an account holder',
  description: 'Example request for creating an account holder',
  value: {
    description: 'Account holder used for international payments and payouts',
    reference: 'S.Eller-001',
    legalEntityId: 'LE322JV223222D5GG42KN6869',
  },
}

const PostAccountHoldersCreateAccountHolder_200Example = {
  summary: 'Response for creating an account holder',
  description: 'Example response for creating an account holder',
  value: {
    balancePlatform: 'YOUR_BALANCE_PLATFORM',
    description: 'Account holder used for international payments and payouts',
    legalEntityId: 'LE322JV223222D5GG42KN6869',
    reference: 'S.Eller-001',
    capabilities: {
      receiveFromPlatformPayments: {
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
      sendToBalanceAccount: {
        enabled: true,
        requested: true,
        allowed: false,
        verificationStatus: 'pending',
      },
      sendToTransferInstrument: {
        enabled: true,
        requested: true,
        allowed: false,
        requestedSettings: { interval: 'daily', maxAmount: { currency: 'EUR', value: 0 } },
        verificationStatus: 'pending',
      },
    },
    id: 'AH3227C223222H5J4DCLW9VBV',
    status: 'active',
  },
}

const PostBalanceAccountsBalanceAccountIdSweepsCreateSweepPullExample = {
  summary: 'Create a sweep to pull funds in to a balance account',
  description: 'Example request for creating a pull sweep',
  value: {
    counterparty: { merchantAccount: 'YOUR_MERCHANT_ACCOUNT' },
    triggerAmount: { currency: 'EUR', value: 50000 },
    currency: 'EUR',
    schedule: { type: 'balance' },
    type: 'pull',
    status: 'active',
  },
}

const PostBalanceAccountsBalanceAccountIdSweepsCreateSweepPull_200Example = {
  summary: 'Sweep of pull type created',
  description: 'Example response for creating a pull sweep',
  value: {
    id: 'SWPC4227C224555B5FTD2NT2JV4WN5',
    counterparty: { merchantAccount: 'YOUR_MERCHANT_ACCOUNT' },
    triggerAmount: { currency: 'EUR', value: 50000 },
    currency: 'EUR',
    schedule: { type: 'balance' },
    type: 'pull',
    status: 'active',
  },
}

const PostBalanceAccountsBalanceAccountIdSweepsCreateSweepPushExample = {
  summary: 'Create a sweep to push funds out of a balance account',
  description: 'Example request for creating a push sweep',
  value: {
    counterparty: { balanceAccountId: 'BA32278887611B5FTD2KR6TJD' },
    triggerAmount: { currency: 'EUR', value: 50000 },
    currency: 'EUR',
    schedule: { type: 'weekly' },
    type: 'push',
    status: 'active',
  },
}

const PostBalanceAccountsBalanceAccountIdSweepsCreateSweepPush_200Example = {
  summary: 'Sweep of push type created',
  description: 'Example response for creating a push sweep',
  value: {
    id: 'SWPC4227C224555B5FTD2NT2JV4WN5',
    counterparty: { balanceAccountId: 'BA32278887611B5FTD2KR6TJD' },
    triggerAmount: { currency: 'EUR', value: 50000 },
    currency: 'EUR',
    schedule: { type: 'weekly' },
    type: 'push',
    status: 'active',
  },
}

const PostBalanceAccountsBalanceAccountIdSweepsCreateSweepPushPrioritiesExample = {
  summary: 'Create a sweep to push funds out of a balance account with set priorities',
  description: 'Example request for creating a push sweep with priorities',
  value: {
    counterparty: { transferInstrumentId: 'SE322JV223222J5HGLCGF2WDV' },
    triggerAmount: { currency: 'EUR', value: 50000 },
    currency: 'EUR',
    priorities: ['fast', 'instant'],
    category: 'bank',
    schedule: { type: 'weekly' },
    type: 'push',
    status: 'active',
  },
}

const PostBalanceAccountsBalanceAccountIdSweepsCreateSweepPushPriorities_200Example = {
  summary: 'Sweep of push type with priorities created',
  description: 'Example response for creating a push sweep with priorities',
  value: {
    id: 'SWPC4227C224555B5FTD2NT2JV4WN9',
    counterparty: { transferInstrumentId: 'SE322JV223222J5HGLCGF2WDV' },
    triggerAmount: { currency: 'EUR', value: 50000 },
    currency: 'EUR',
    priorities: ['fast', 'instant'],
    category: 'bank',
    schedule: { type: 'weekly' },
    type: 'push',
    status: 'active',
  },
}

const PostBalanceAccountsCreateBalanceAccountExample = {
  summary: 'Create a balance account',
  description: 'Example request for creating a balance account',
  value: {
    accountHolderId: 'AH32272223222C5GXTD343TKP',
    description: 'S.Hopper - Main balance account',
  },
}

const PostBalanceAccountsCreateBalanceAccount_200Example = {
  summary: 'Create a balance account',
  description: 'Example request for creating a balance account',
  value: {
    accountHolderId: 'AH32272223222C5GXTD343TKP',
    defaultCurrencyCode: 'EUR',
    description: 'S.Hopper - Main balance account',
    timeZone: 'Europe/Amsterdam',
    balances: [{ available: 0, balance: 0, currency: 'EUR', reserved: 0 }],
    id: 'BA3227C223222H5J4DCGQ9V9L',
    status: 'active',
  },
}

const PostBalanceAccountsCreateBalanceAccountCADExample = {
  summary: 'Create a balance account - CAD default currency',
  description: 'Example request for creating a balance account with CAD as the default currency.',
  value: {
    accountHolderId: 'AH0000000000000000000001',
    description: 'CAD Balance Account',
    defaultCurrencyCode: 'CAD',
    timeZone: 'America/Toronto',
  },
}

const PostBalanceAccountsCreateBalanceAccountCAD_200Example = {
  summary: 'Create a balance account - CAD default currency',
  description: 'Example request for creating a balance account with CAD as the default currency.',
  value: {
    accountHolderId: 'AH0000000000000000000001',
    defaultCurrencyCode: 'CAD',
    description: 'CAD Balance Account',
    timeZone: 'America/Toronto',
    balances: [{ available: 0, balance: 0, currency: 'CAD', pending: 0, reserved: 0 }],
    id: 'BA0000000000000000000001',
    status: 'active',
  },
}

const PostBalanceAccountsCreateBalanceAccountGBPExample = {
  summary: 'Create a balance account - GBP default currency',
  description: 'Example request for creating a balance account with GBP as the default currency.',
  value: {
    accountHolderId: 'AH0000000000000000000001',
    description: 'GBP Balance Account',
    defaultCurrencyCode: 'GBP',
    timeZone: 'Europe/London',
  },
}

const PostBalanceAccountsCreateBalanceAccountGBP_200Example = {
  summary: 'Create a balance account - GBP default currency',
  description: 'Example request for creating a balance account with GBP as the default currency.',
  value: {
    accountHolderId: 'AH0000000000000000000001',
    defaultCurrencyCode: 'GBP',
    description: 'GBP Balance Account',
    timeZone: 'Europe/London',
    balances: [{ available: 0, balance: 0, currency: 'GBP', pending: 0, reserved: 0 }],
    id: 'BA0000000000000000000001',
    status: 'active',
  },
}

const PostBalanceAccountsCreateBalanceAccountUSDExample = {
  summary: 'Create a balance account - USD default currency',
  description: 'Example request for creating a balance account with USD as the default currency.',
  value: {
    accountHolderId: 'AH0000000000000000000001',
    description: 'USD Balance Account',
    defaultCurrencyCode: 'USD',
    timeZone: 'America/Chicago',
  },
}

const PostBalanceAccountsCreateBalanceAccountUSD_200Example = {
  summary: 'Create a balance account - USD default currency',
  description: 'Example request for creating a balance account with USD as the default currency.',
  value: {
    accountHolderId: 'AH0000000000000000000001',
    defaultCurrencyCode: 'USD',
    description: 'USD Balance Account',
    timeZone: 'America/Chicago',
    balances: [{ available: 0, balance: 0, currency: 'USD', pending: 0, reserved: 0 }],
    id: 'BA0000000000000000000001',
    status: 'active',
  },
}

const PostPaymentInstrumentGroupsCreatePaymentInstrumentGroupsExample = {
  summary: 'Create a payment instrument group',
  description: 'Example request for creating a payment instrument group',
  value: { balancePlatform: 'YOUR_BALANCE_PLATFORM', txVariant: 'mc' },
}

const PostPaymentInstrumentGroupsCreatePaymentInstrumentGroups_200Example = {
  summary: 'Create a payment instrument group',
  description: 'Example request for creating a payment instrument group',
  value: {
    balancePlatform: 'YOUR_BALANCE_PLATFORM',
    txVariant: 'mc',
    id: 'PG32272223222H5J4DCRVC9DH',
  },
}

const PostPaymentInstrumentsCreateBusinessAccountNLExample = {
  summary: 'Create a business account in NL',
  description: 'Example request for creating a business account in NL',
  value: {
    type: 'bankAccount',
    description: 'YOUR_DESCRIPTION',
    balanceAccountId: 'BA3227C223222B5CTBLR8BWJB',
    issuingCountryCode: 'NL',
  },
}

const PostPaymentInstrumentsCreateBusinessAccountNL_200Example = {
  summary: 'Business account in NL created',
  description: 'Example response for creating a business account in NL',
  value: {
    balanceAccountId: 'BA3227C223222B5CTBLR8BWJB',
    issuingCountryCode: 'NL',
    status: 'active',
    type: 'bankAccount',
    description: 'YOUR_DESCRIPTION',
    bankAccount: { formFactor: 'physical', type: 'iban', iban: 'NL20ADYB2017000035' },
    id: 'PI322LJ223222B5DJS7CD9LWL',
  },
}

const PostPaymentInstrumentsCreateBusinessAccountNLDELocalIBANExample = {
  summary: 'Create a local IBAN in DE (first create an NL business account)',
  description: 'Example request for creating a local IBAN in DE',
  value: {
    type: 'bankAccount',
    description: 'YOUR_DESCRIPTION',
    balanceAccountId: 'BA3227C223222B5CTBLR8BWJB',
    issuingCountryCode: 'DE',
    bankAccount: { formFactor: 'virtual' },
  },
}

const PostPaymentInstrumentsCreateBusinessAccountNLDELocalIBAN_200Example = {
  summary: 'Virtual business account in DE (local IBAN) created',
  description: 'Example response for creating a local IBAN business account in DE',
  value: {
    balanceAccountId: 'BA3227C223222B5CTBLR8BWJB',
    description: 'YOUR_DESCRIPTION',
    issuingCountryCode: 'DE',
    status: 'active',
    type: 'bankAccount',
    bankAccount: { type: 'iban', iban: 'DE20100190002300001206', formFactor: 'virtual' },
    id: 'PI3227C223226C5JW49ZHBQMS',
  },
}

const PostPaymentInstrumentsCreateBusinessAccountNLFRLocalIBANExample = {
  summary: 'Create a local IBAN in FR (first create an NL business account)',
  description: 'Example request for creating a local IBAN in FR',
  value: {
    type: 'bankAccount',
    description: 'YOUR_DESCRIPTION',
    balanceAccountId: 'BA3227C223222B5CTBLR8BWJB',
    issuingCountryCode: 'FR',
    bankAccount: { formFactor: 'virtual' },
  },
}

const PostPaymentInstrumentsCreateBusinessAccountNLFRLocalIBAN_200Example = {
  summary: 'Virtual business account in FR (local IBAN) created',
  description: 'Example response for creating a local IBAN business account in FR',
  value: {
    balanceAccountId: 'BA3227C223222B5CTBLR8BWJB',
    description: 'YOUR_DESCRIPTION',
    issuingCountryCode: 'FR',
    status: 'active',
    type: 'bankAccount',
    bankAccount: { type: 'iban', iban: 'FR7621733712350230000110741', formFactor: 'virtual' },
    id: 'PI3227C223226C5JW49ZAHSYD',
  },
}

const PostPaymentInstrumentsCreateBusinessAccountUKExample = {
  summary: 'Create a business account in the UK',
  description: 'Example request for creating a business account in the UK',
  value: {
    type: 'bankAccount',
    description: 'YOUR_DESCRIPTION',
    balanceAccountId: 'BA328R4223227F5KMH9NJB2S4',
    issuingCountryCode: 'GB',
  },
}

const PostPaymentInstrumentsCreateBusinessAccountUK_200Example = {
  summary: 'Business account in the UK created',
  description: 'Example response for creating a business account in the UK',
  value: {
    balanceAccountId: 'BA328R4223227F5KMH9NJB2S4',
    description: 'YOUR_DESCRIPTION',
    issuingCountryCode: 'GB',
    status: 'active',
    type: 'bankAccount',
    bankAccount: {
      accountNumber: '20010731',
      formFactor: 'physical',
      iban: 'GB68ADYX04295720010731',
      sortCode: '042957',
      type: 'ukLocal',
    },
    id: 'PI328Q9223227F5KMH9P92MDG',
  },
}

const PostPaymentInstrumentsCreateBusinessAccountUSExample = {
  summary: 'Create a business account in the US',
  description: 'Example request for creating a business account in the US',
  value: {
    type: 'bankAccount',
    description: 'YOUR_DESCRIPTION',
    balanceAccountId: 'BA3227C223222B5CTBLR8BWJB',
    issuingCountryCode: 'US',
  },
}

const PostPaymentInstrumentsCreateBusinessAccountUS_200Example = {
  summary: 'Business account in the US created',
  description: 'Example response for creating a business account in the US',
  value: {
    balanceAccountId: 'BA3227C223222B5CTBLR8BWJB',
    issuingCountryCode: 'US',
    status: 'active',
    type: 'bankAccount',
    description: 'YOUR_DESCRIPTION',
    bankAccount: {
      accountNumber: '333720756',
      accountType: 'checking',
      formFactor: 'physical',
      routingNumber: '210000210',
      type: 'usLocal',
    },
    id: 'PI322LJ223222B5DJS7CD9LWL',
  },
}

const PostPaymentInstrumentsCreatePhysicalCardExample = {
  summary: 'Create a physical card',
  description: 'Example request for creating a physical card',
  value: {
    type: 'card',
    issuingCountryCode: 'NL',
    balanceAccountId: 'BA32272223222B59CZ3T52DKZ',
    description: 'S.Hopper - Main card',
    status: 'inactive',
    card: {
      formFactor: 'physical',
      brand: 'mc',
      brandVariant: 'mcdebit',
      cardholderName: 'Sam Hopper',
      deliveryContact: {
        address: {
          city: 'Amsterdam',
          country: 'NL',
          stateOrProvince: 'NH',
          line1: 'Brannan Street',
          line2: '274',
          postalCode: '1020CD',
        },
        name: { firstName: 'Sam', lastName: 'Hopper' },
      },
      configuration: { configurationProfileId: 'CP123AB45678C91ABCD2ABCDE' },
    },
  },
}

const PostPaymentInstrumentsCreatePhysicalCard_200Example = {
  summary: 'Physical card created',
  description: 'Example response for creating a physical card',
  value: {
    balanceAccountId: 'BA32272223222B59CZ3T52DKZ',
    description: 'S. Hopper - Main card',
    issuingCountryCode: 'NL',
    status: 'inactive',
    type: 'card',
    card: {
      brand: 'mc',
      brandVariant: 'mcdebit',
      cardholderName: 'Sam Hopper',
      formFactor: 'physical',
      number: '************5785',
      bin: '555544',
      expiration: { month: '08', year: '2024' },
      lastFour: '2765',
      authentication: { password: '******', phone: { number: '+123456789', type: 'mobile' } },
      deliveryContact: {
        address: {
          city: 'Amsterdam',
          country: 'NL',
          stateOrProvince: 'NH',
          line1: 'Brannan Street',
          line2: '274',
          postalCode: '1020CD',
        },
        name: { firstName: 'Sam', lastName: 'Hopper' },
      },
      configuration: { configurationProfileId: 'CP123AB45678C91ABCD2ABCDE' },
    },
    id: 'PI3227C223222B5BPCMFXD2XG',
  },
}

const PostPaymentInstrumentsCreateVirtualCardExample = {
  summary: 'Create a virtual card',
  description: 'Example request for creating a virtual card',
  value: {
    type: 'card',
    description: 'My test card',
    balanceAccountId: 'BA3227C223222B5FG88S28BGN',
    issuingCountryCode: 'NL',
    card: {
      cardholderName: 'Simon Hopper',
      brand: 'mc',
      brandVariant: 'mcdebit',
      formFactor: 'virtual',
    },
  },
}

const PostPaymentInstrumentsCreateVirtualCard_200Example = {
  summary: 'Virtual card created',
  description: 'Example response for creating a virtual card',
  value: {
    balanceAccountId: 'BA3227C223222B5FG88S28BGN',
    description: 'My test card',
    issuingCountryCode: 'NL',
    status: 'active',
    type: 'card',
    card: {
      brand: 'mc',
      brandVariant: 'mcdebit',
      cardholderName: 'Simon Hopper',
      formFactor: 'virtual',
      bin: '555544',
      cvc: '136',
      expiration: { month: '11', year: '2025' },
      lastFour: '3703',
      number: '5555444411213703',
    },
    id: 'PI32272223222C5GXTDWH3TTN',
  },
}

const PostPinsChangeRequestPinChangeExample = {
  summary: 'Request a PIN change',
  value: {
    paymentInstrumentId: 'PI6789678967896789',
    encryptedKey: '75989E8881284D10153ABACF022EEA09F5...',
    encryptedPinBlock: '63E5060591EF65F48DD1D4FECD0FECD5',
    token: '5555341244441115',
  },
}

const PostPinsChangeRequestPinChange_200Example = {
  summary: 'Request completed',
  value: { status: 'completed' },
}

const PostPinsRevealRequestPinBlockExample = {
  summary: 'Request a PIN block',
  value: {
    paymentInstrumentId: 'PI3227C223222B5BPCMFXD2XG',
    encryptedKey: '75989E8881284D10153ABACF022EEA09F5...',
  },
}

const PostPinsRevealRequestPinBlock_200Example = {
  summary: 'Response with encrypted PIN block',
  value: { encryptedPinBlock: '63E5060591EF65F48DD1D4FECD0FECD5', token: '5555341244441115' },
}

const PostTransactionRulesCreateTransactionRuleAllowPosExample = {
  summary: 'Allow only point-of-sale transactions',
  description: 'Example request to allow only point-of-sale transactions',
  value: {
    description: 'Allow only point-of-sale transactions',
    reference: 'YOUR_REFERENCE_4F7346',
    entityKey: { entityType: 'paymentInstrument', entityReference: 'PI3227C223222B5FG88SB8BHR' },
    status: 'active',
    interval: { type: 'perTransaction' },
    ruleRestrictions: { processingTypes: { operation: 'noneMatch', value: ['pos'] } },
    type: 'blockList',
  },
}

const PostTransactionRulesCreateTransactionRuleAllowPos_200Example = {
  summary: 'Transaction rule to allow only point-of-sale transactions',
  description: 'Example response for allowing only point-of-sale transactions',
  value: {
    description: 'Allow only point-of-sale transactions',
    entityKey: { entityReference: 'PI3227C223222B5FG88SB8BHR', entityType: 'paymentInstrument' },
    interval: { timeZone: 'UTC', type: 'perTransaction' },
    outcomeType: 'hardBlock',
    reference: 'YOUR_REFERENCE_4F7346',
    requestType: 'authorization',
    ruleRestrictions: { processingTypes: { operation: 'noneMatch', value: ['pos'] } },
    startDate: '2023-06-29T22:34:36.173226192+02:00',
    status: 'active',
    type: 'blockList',
    id: 'TR3227C223222H5J4D9ML9V4D',
  },
}

const PostTransactionRulesCreateTransactionRuleIncreaseScoreExample = {
  summary: 'Increase the score of a card',
  description: 'Example request to increase the score of a card',
  value: {
    description: 'Assign score if more than 500 EUR in 2 hours',
    entityKey: { entityType: 'paymentInstrument', entityReference: 'PI3227C223222B5FG88SB8BHR' },
    interval: { type: 'sliding', duration: { value: 2, unit: 'hours' } },
    outcomeType: 'scoreBased',
    reference: 'myRule11789',
    ruleRestrictions: {
      totalAmount: { operation: 'greaterThan', value: { currency: 'EUR', value: 50000 } },
    },
    score: 20,
    type: 'velocity',
  },
}

const PostTransactionRulesCreateTransactionRuleIncreaseScore_200Example = {
  summary: 'Transaction rule for increasing the score of a card',
  description: 'Example response to increase the score of a card',
  value: {
    description: 'Assign score if more than 500 EUR in 2 hours',
    entityKey: { entityReference: 'PI3227C223222B5FG88SB8BHR', entityType: 'paymentInstrument' },
    interval: { duration: { unit: 'hours', value: 2 }, timeZone: 'UTC', type: 'sliding' },
    outcomeType: 'scoreBased',
    reference: 'myRule11789',
    requestType: 'authorization',
    ruleRestrictions: {
      totalAmount: { operation: 'greaterThan', value: { currency: 'EUR', value: 50000 } },
    },
    score: 20,
    status: 'inactive',
    type: 'velocity',
    id: 'TR3227C223222H5J4D9S39V59',
  },
}

const PostTransactionRulesCreateTransactionRuleLimitSlidingExample = {
  summary: 'Limit total amount in the last 12 hours',
  description: 'Example request to limit the total amount in a sliding interval',
  value: {
    description: 'Up to 1000 EUR per card for the last 12 hours',
    reference: 'YOUR_REFERENCE_2918A',
    status: 'active',
    entityKey: { entityReference: 'BA3227C223222B5FN65355NR3', entityType: 'balanceAccount' },
    aggregationLevel: 'paymentInstrument',
    interval: { type: 'sliding', duration: { value: 12, unit: 'hours' } },
    outcomeType: 'hardBlock',
    ruleRestrictions: {
      totalAmount: { operation: 'greaterThan', value: { value: 100000, currency: 'EUR' } },
    },
    type: 'velocity',
  },
}

const PostTransactionRulesCreateTransactionRuleLimitSliding_200Example = {
  summary: 'Transaction rule for limiting total amount in the last 12 hours',
  description: 'Example response to limit the total amount in a sliding interval',
  value: {
    aggregationLevel: 'paymentInstrument',
    description: 'Up to 1000 EUR per card for the last 12 hours',
    entityKey: { entityReference: 'BA3227C223222B5FN65355NR3', entityType: 'balanceAccount' },
    interval: { duration: { unit: 'hours', value: 12 }, timeZone: 'UTC', type: 'sliding' },
    outcomeType: 'hardBlock',
    reference: 'YOUR_REFERENCE_2918A',
    requestType: 'authorization',
    ruleRestrictions: {
      totalAmount: { operation: 'greaterThan', value: { currency: 'EUR', value: 100000 } },
    },
    startDate: '2023-06-29T22:39:06.887628679+02:00',
    status: 'active',
    type: 'velocity',
    id: 'TR32272223222H5J4D9Z8C97H',
  },
}

const PostTransactionRulesCreateTransactionRuleLimitTransactionExample = {
  summary: 'Limit international payments',
  description: 'Example request to limit total amount of international transactions',
  value: {
    description: 'Up to 50 EUR international transactions',
    reference: 'YOUR_REFERENCE_B2634',
    status: 'active',
    entityKey: { entityType: 'balanceAccount', entityReference: 'BA3227C223222B5FN65355NR3' },
    interval: { type: 'daily' },
    outcomeType: 'hardBlock',
    ruleRestrictions: {
      totalAmount: { operation: 'greaterThan', value: { currency: 'EUR', value: 5000 } },
      internationalTransaction: { operation: 'equals', value: true },
    },
    type: 'velocity',
  },
}

const PostTransactionRulesCreateTransactionRuleLimitTransaction_200Example = {
  summary: 'Transaction rule for limiting international payments',
  description: 'Example response to limit total amount of international transactions',
  value: {
    description: 'Up to 50 EUR international transactions',
    entityKey: { entityReference: 'BA3227C223222B5FN65355NR3', entityType: 'balanceAccount' },
    interval: { timeOfDay: '00:00:00', timeZone: 'UTC', type: 'daily' },
    outcomeType: 'hardBlock',
    reference: 'YOUR_REFERENCE_B2634',
    requestType: 'authorization',
    ruleRestrictions: {
      internationalTransaction: { operation: 'equals', value: true },
      totalAmount: { operation: 'greaterThan', value: { currency: 'EUR', value: 5000 } },
    },
    startDate: '2023-06-29T22:39:54.068487152+02:00',
    status: 'active',
    type: 'velocity',
    id: 'TR3227C223222H5J4DB2X9V65',
  },
}

const PostTransferRoutesCalculateTransferRoutesCalculateExample = {
  summary: 'Calculate transfer routes',
  description: 'Example request for calculating transfer routes',
  value: {
    balancePlatform: 'YOUR_BALANCE_PLATFORM',
    currency: 'USD',
    category: 'bank',
    counterparty: {
      bankAccount: { accountIdentification: { type: 'iban', iban: 'NL91ABNA0417164300' } },
    },
  },
}

const PostTransferRoutesCalculateTransferRoutesCalculate_200Example = {
  summary: 'Response for calculating transfer routes',
  description: 'Example response for calculating transfer routes',
  value: {
    transferRoutes: [
      {
        country: 'NL',
        currency: 'USD',
        priority: 'crossBorder',
        requirements: [
          {
            description: 'Amount of transfer must be at least 100, and no greater than 99999999999',
            max: 99999999999,
            min: 100,
            type: 'amountMinMaxRequirement',
          },
          {
            description: 'Country, street and city is required.',
            requiredAddressFields: ['line1', 'city', 'country'],
            type: 'addressRequirement',
          },
          {
            description: 'Bank account identification type must be iban or numberAndBic',
            bankAccountIdentificationTypes: ['iban', 'numberAndBic'],
            type: 'bankAccountIdentificationTypeRequirement',
          },
          {
            issuingCountryCode: 'NL',
            paymentInstrumentType: 'BankAccount',
            type: 'paymentInstrumentRequirement',
          },
        ],
      },
      {
        country: 'NL',
        currency: 'USD',
        priority: 'wire',
        requirements: [
          {
            description: 'Amount of transfer must be at least 100, and no greater than 99999999999',
            max: 99999999999,
            min: 100,
            type: 'amountMinMaxRequirement',
          },
          {
            description: 'Country, street and city is required.',
            requiredAddressFields: ['line1', 'city', 'country'],
            type: 'addressRequirement',
          },
          {
            description: 'Bank account identification type must be iban or numberAndBic',
            bankAccountIdentificationTypes: ['iban', 'numberAndBic'],
            type: 'bankAccountIdentificationTypeRequirement',
          },
          {
            issuingCountryCode: 'NL',
            paymentInstrumentType: 'BankAccount',
            type: 'paymentInstrumentRequirement',
          },
        ],
      },
    ],
  },
}

const PostValidateBankAccountIdentificationValidateBankAccountIdentificationIbanExample = {
  summary: 'Validate an IBAN',
  value: { accountIdentification: { type: 'iban', iban: '1001001234' } },
}

const PostValidateBankAccountIdentificationValidateBankAccountIdentificationIban_422Example = {
  summary: 'Invalid IBAN details',
  value: {
    type: 'https://docs.adyen.com/errors/validation',
    title: 'Invalid bank account identification details provided',
    detail: 'Provided IBAN is incorrect',
    status: 422,
    invalidFields: [{ name: 'iban', value: '1001001234', message: 'Invalid IBAN.' }],
    errorCode: '33_01',
  },
}

const PostValidateBankAccountIdentificationValidateBankAccountIdentificationUsExample = {
  summary: 'Validate a US bank account',
  value: {
    accountIdentification: {
      type: 'usLocal',
      accountNumber: '12345JHDhjkf67890',
      accountType: 'checking',
      routingNumber: '121000567',
    },
  },
}

const PostValidateBankAccountIdentificationValidateBankAccountIdentificationUs_422Example = {
  summary: 'Invalid US bank account details',
  value: {
    type: 'https://docs.adyen.com/errors/validation',
    title: 'Invalid bank account identification details provided',
    detail: 'Provided account number and the routing number are incorrect',
    status: 422,
    invalidFields: [
      { name: 'accountNumber', value: '12345JHDhjkf67890', message: 'Invalid account number.' },
      { name: 'routingNumber', value: '121000567', message: 'Invalid routing number.' },
    ],
    errorCode: '33_01',
  },
}

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

const ClientKeySecurityScheme = { type: 'apiKey', name: 'clientKey', in: 'query' }

export const postAccountHoldersRoute = createRoute({
  method: 'post',
  path: '/accountHolders',
  tags: ['Account holders'],
  summary: 'Create an account holder',
  description:
    'Creates an account holder linked to a [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities).\n\n',
  operationId: 'post-accountHolders',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountHolderInfoSchema,
          examples: { createAccountHolder: PostAccountHoldersCreateAccountHolderExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: AccountHolderSchema,
          examples: { createAccountHolder: PostAccountHoldersCreateAccountHolder_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getAccountHoldersIdRoute = createRoute({
  method: 'get',
  path: '/accountHolders/{id}',
  tags: ['Account holders'],
  summary: 'Get an account holder',
  description: 'Returns an account holder.',
  operationId: 'get-accountHolders-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the account holder.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: AccountHolderSchema,
          examples: { success: GetAccountHoldersIdSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const patchAccountHoldersIdRoute = createRoute({
  method: 'patch',
  path: '/accountHolders/{id}',
  tags: ['Account holders'],
  summary: 'Update an account holder',
  description:
    'Updates an account holder. When updating an account holder resource, if a parameter is not provided in the request, it is left unchanged.',
  operationId: 'patch-accountHolders-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the account holder.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: AccountHolderUpdateRequestSchema,
          examples: {
            requestAccountHolderCapability:
              PatchAccountHoldersIdRequestAccountHolderCapabilityExample,
            updateAccountHolderStatus: PatchAccountHoldersIdUpdateAccountHolderStatusExample,
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
          schema: AccountHolderSchema,
          examples: {
            requestAccountHolderCapability:
              PatchAccountHoldersIdRequestAccountHolderCapability_200Example,
            updateAccountHolderStatus: PatchAccountHoldersIdUpdateAccountHolderStatus_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getAccountHoldersIdBalanceAccountsRoute = createRoute({
  method: 'get',
  path: '/accountHolders/{id}/balanceAccounts',
  tags: ['Account holders'],
  summary: 'Get all balance accounts of an account holder',
  description:
    'Returns a paginated list of the balance accounts associated with an account holder. To fetch multiple pages, use the query parameters. \n\nFor example, to limit the page to 5 balance accounts and skip the first 10, use `/accountHolders/{id}/balanceAccounts?limit=5&offset=10`.',
  operationId: 'get-accountHolders-id-balanceAccounts',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the account holder.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
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
            name: 'offset',
            in: 'query',
            description: 'The number of items that you want to skip.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: PaginatedBalanceAccountsResponseSchema,
          examples: { success: GetAccountHoldersIdBalanceAccountsSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getAccountHoldersIdTaxFormsRoute = createRoute({
  method: 'get',
  path: '/accountHolders/{id}/taxForms',
  tags: ['Account holders'],
  summary: 'Get a tax form',
  description:
    'Generates a tax form for account holders operating in the US. For more information, refer to US tax forms for [marketplaces](https://docs.adyen.com/marketplaces/us-tax-forms/) or [platforms](https://docs.adyen.com/platforms/us-tax-forms/) .',
  operationId: 'get-accountHolders-id-taxForms',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the account holder.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      formType: z
        .enum(['US1099k', 'US1099nec'])
        .openapi({
          param: {
            name: 'formType',
            in: 'query',
            description:
              'The type of tax form you want to retrieve. Accepted values are **US1099k** and **US1099nec**.',
            required: true,
            style: 'form',
            explode: true,
            schema: {
              type: 'string',
              enum: ['US1099k', 'US1099nec'],
              'x-enum': [{ value: 'US1099k' }, { value: 'US1099nec' }],
            },
          },
          'x-enum': [{ value: 'US1099k' }, { value: 'US1099nec' }],
        }),
      year: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'year',
            in: 'query',
            description: 'The tax year in **YYYY** format for the tax form you want to retrieve.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
      legalEntityId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'legalEntityId',
            in: 'query',
            description: 'The legal entity reference whose tax form you want to retrieve.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: GetTaxFormResponseSchema,
          examples: { success: GetAccountHoldersIdTaxFormsSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    404: {
      description: 'The requested tax form was not available.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_404Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getAccountHoldersIdTransactionRulesRoute = createRoute({
  method: 'get',
  path: '/accountHolders/{id}/transactionRules',
  tags: ['Account holders'],
  summary: 'Get all transaction rules for an account holder',
  description: 'Returns a list of transaction rules associated with an account holder.',
  operationId: 'get-accountHolders-id-transactionRules',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the account holder.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: TransactionRulesResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postBalanceAccountsRoute = createRoute({
  method: 'post',
  path: '/balanceAccounts',
  tags: ['Balance accounts'],
  summary: 'Create a balance account',
  description: 'Creates a balance account that holds the funds of the associated account holder.',
  operationId: 'post-balanceAccounts',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BalanceAccountInfoSchema,
          examples: {
            createBalanceAccount: PostBalanceAccountsCreateBalanceAccountExample,
            createBalanceAccountCAD: PostBalanceAccountsCreateBalanceAccountCADExample,
            createBalanceAccountGBP: PostBalanceAccountsCreateBalanceAccountGBPExample,
            createBalanceAccountUSD: PostBalanceAccountsCreateBalanceAccountUSDExample,
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
          schema: BalanceAccountSchema,
          examples: {
            createBalanceAccount: PostBalanceAccountsCreateBalanceAccount_200Example,
            createBalanceAccountCAD: PostBalanceAccountsCreateBalanceAccountCAD_200Example,
            createBalanceAccountGBP: PostBalanceAccountsCreateBalanceAccountGBP_200Example,
            createBalanceAccountUSD: PostBalanceAccountsCreateBalanceAccountUSD_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getBalanceAccountsBalanceAccountIdSweepsRoute = createRoute({
  method: 'get',
  path: '/balanceAccounts/{balanceAccountId}/sweeps',
  tags: ['Custom payout schedules (sweeps)'],
  summary: 'Get all sweeps for a balance account',
  description:
    'Returns a list of the sweeps configured for a balance account.\n\nTo fetch multiple pages, use the query parameters. For example, to limit the page to 5 sweeps and to skip the first 10, use `/balanceAccounts/{balanceAccountId}/sweeps?limit=5&offset=10`.',
  operationId: 'get-balanceAccounts-balanceAccountId-sweeps',
  request: {
    params: z.object({
      balanceAccountId: z
        .string()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
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
            name: 'offset',
            in: 'query',
            description: 'The number of items that you want to skip.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: BalanceSweepConfigurationsResponseSchema,
          examples: { success: GetBalanceAccountsBalanceAccountIdSweepsSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postBalanceAccountsBalanceAccountIdSweepsRoute = createRoute({
  method: 'post',
  path: '/balanceAccounts/{balanceAccountId}/sweeps',
  tags: ['Custom payout schedules (sweeps)'],
  summary: 'Create a sweep',
  description:
    'Creates a sweep that results in moving funds from or to a balance account.\n\nA sweep pulls in or pushes out funds based on a defined schedule, amount, currency, and a source or a destination.',
  operationId: 'post-balanceAccounts-balanceAccountId-sweeps',
  request: {
    params: z.object({
      balanceAccountId: z
        .string()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: CreateSweepConfigurationV2Schema,
          examples: {
            'createSweep-pull': PostBalanceAccountsBalanceAccountIdSweepsCreateSweepPullExample,
            'createSweep-push': PostBalanceAccountsBalanceAccountIdSweepsCreateSweepPushExample,
            'createSweep-push-priorities':
              PostBalanceAccountsBalanceAccountIdSweepsCreateSweepPushPrioritiesExample,
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
          schema: SweepConfigurationV2Schema,
          examples: {
            'createSweep-pull': PostBalanceAccountsBalanceAccountIdSweepsCreateSweepPull_200Example,
            'createSweep-push': PostBalanceAccountsBalanceAccountIdSweepsCreateSweepPush_200Example,
            'createSweep-push-priorities':
              PostBalanceAccountsBalanceAccountIdSweepsCreateSweepPushPriorities_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getBalanceAccountsBalanceAccountIdSweepsSweepIdRoute = createRoute({
  method: 'get',
  path: '/balanceAccounts/{balanceAccountId}/sweeps/{sweepId}',
  tags: ['Custom payout schedules (sweeps)'],
  summary: 'Get a sweep',
  description: 'Returns a sweep.',
  operationId: 'get-balanceAccounts-balanceAccountId-sweeps-sweepId',
  request: {
    params: z.object({
      balanceAccountId: z
        .string()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      sweepId: z
        .string()
        .openapi({
          param: {
            name: 'sweepId',
            in: 'path',
            description: 'The unique identifier of the sweep.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: SweepConfigurationV2Schema,
          examples: { success: GetBalanceAccountsBalanceAccountIdSweepsSweepIdSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const deleteBalanceAccountsBalanceAccountIdSweepsSweepIdRoute = createRoute({
  method: 'delete',
  path: '/balanceAccounts/{balanceAccountId}/sweeps/{sweepId}',
  tags: ['Custom payout schedules (sweeps)'],
  summary: 'Delete a sweep',
  description: 'Deletes a sweep for a balance account.',
  operationId: 'delete-balanceAccounts-balanceAccountId-sweeps-sweepId',
  request: {
    params: z.object({
      balanceAccountId: z
        .string()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      sweepId: z
        .string()
        .openapi({
          param: {
            name: 'sweepId',
            in: 'path',
            description: 'The unique identifier of the sweep.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'No Content - look at the actual response code for the status of the request. ',
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const patchBalanceAccountsBalanceAccountIdSweepsSweepIdRoute = createRoute({
  method: 'patch',
  path: '/balanceAccounts/{balanceAccountId}/sweeps/{sweepId}',
  tags: ['Custom payout schedules (sweeps)'],
  summary: 'Update a sweep',
  description:
    'Updates a sweep. When updating a sweep resource, note that if a request parameter is not provided, the parameter is left unchanged.',
  operationId: 'patch-balanceAccounts-balanceAccountId-sweeps-sweepId',
  request: {
    params: z.object({
      balanceAccountId: z
        .string()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      sweepId: z
        .string()
        .openapi({
          param: {
            name: 'sweepId',
            in: 'path',
            description: 'The unique identifier of the sweep.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: UpdateSweepConfigurationV2Schema,
          examples: {
            'updateSweep-status':
              PatchBalanceAccountsBalanceAccountIdSweepsSweepIdUpdateSweepStatusExample,
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
          schema: SweepConfigurationV2Schema,
          examples: {
            'updateSweep-status':
              PatchBalanceAccountsBalanceAccountIdSweepsSweepIdUpdateSweepStatus_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getBalanceAccountsIdRoute = createRoute({
  method: 'get',
  path: '/balanceAccounts/{id}',
  tags: ['Balance accounts'],
  summary: 'Get a balance account',
  description:
    'Returns a balance account and its balances for the default currency and other currencies with a non-zero balance.',
  operationId: 'get-balanceAccounts-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: BalanceAccountSchema,
          examples: { success: GetBalanceAccountsIdSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const patchBalanceAccountsIdRoute = createRoute({
  method: 'patch',
  path: '/balanceAccounts/{id}',
  tags: ['Balance accounts'],
  summary: 'Update a balance account',
  description: 'Updates a balance account.',
  operationId: 'patch-balanceAccounts-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BalanceAccountUpdateRequestSchema,
          examples: { updateBalanceAccount: PatchBalanceAccountsIdUpdateBalanceAccountExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: BalanceAccountSchema,
          examples: { updateBalanceAccount: PatchBalanceAccountsIdUpdateBalanceAccount_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getBalanceAccountsIdPaymentInstrumentsRoute = createRoute({
  method: 'get',
  path: '/balanceAccounts/{id}/paymentInstruments',
  tags: ['Balance accounts'],
  summary: 'Get payment instruments linked to a balance account',
  description:
    'Returns a paginated list of the payment instruments associated with a balance account. \n\nTo fetch multiple pages, use the query parameters.For example, to limit the page to 3 payment instruments which are in active status and to skip the first 6, use `/balanceAccounts/{id}/paymentInstruments?limit=3&offset=6&status=active`.',
  operationId: 'get-balanceAccounts-id-paymentInstruments',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
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
            name: 'offset',
            in: 'query',
            description: 'The number of items that you want to skip.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description:
              'The status of the payment instruments that you want to get. By default, the response includes payment instruments with any status.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: PaginatedPaymentInstrumentsResponseSchema,
          examples: { success: GetBalanceAccountsIdPaymentInstrumentsSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getBalanceAccountsIdTransactionRulesRoute = createRoute({
  method: 'get',
  path: '/balanceAccounts/{id}/transactionRules',
  tags: ['Balance accounts'],
  summary: 'Get all transaction rules for a balance account',
  description: 'Returns a list of transaction rules associated with a balance account.',
  operationId: 'get-balanceAccounts-id-transactionRules',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: TransactionRulesResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getBalancePlatformsIdRoute = createRoute({
  method: 'get',
  path: '/balancePlatforms/{id}',
  tags: ['Platform'],
  summary: 'Get a balance platform',
  description: 'Returns a balance platform.',
  operationId: 'get-balancePlatforms-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance platform.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: BalancePlatformSchema,
          examples: { success: GetBalancePlatformsIdSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getBalancePlatformsIdAccountHoldersRoute = createRoute({
  method: 'get',
  path: '/balancePlatforms/{id}/accountHolders',
  tags: ['Platform'],
  summary: 'Get all account holders under a balance platform',
  description:
    'Returns a paginated list of all the account holders that belong to the balance platform. To fetch multiple pages, use the query parameters. \n\nFor example, to limit the page to 5 account holders and to skip the first 20, use `/balancePlatforms/{id}/accountHolders?limit=5&offset=20`.',
  operationId: 'get-balancePlatforms-id-accountHolders',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance platform.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
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
            name: 'offset',
            in: 'query',
            description: 'The number of items that you want to skip.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The number of items returned per page, maximum 100 items. By default, the response returns 10 items per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: PaginatedAccountHoldersResponseSchema,
          examples: { success: GetBalancePlatformsIdAccountHoldersSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getBalancePlatformsIdTransactionRulesRoute = createRoute({
  method: 'get',
  path: '/balancePlatforms/{id}/transactionRules',
  tags: ['Platform'],
  summary: 'Get all transaction rules for a balance platform',
  description: 'Returns a list of transaction rules associated with a balance platform.',
  operationId: 'get-balancePlatforms-id-transactionRules',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance platform.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: TransactionRulesResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getCardordersRoute = createRoute({
  method: 'get',
  path: '/cardorders',
  tags: ['Card orders'],
  summary: 'Get a list of card orders',
  description: 'Returns a paginated list of card orders.',
  operationId: 'get-cardorders',
  request: {
    query: z.object({
      id: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description: 'The unique identifier of the card order. ',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      cardManufacturingProfileId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cardManufacturingProfileId',
            in: 'query',
            description: 'The unique identifier of the card manufacturer profile.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      status: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            description: 'The status of the card order.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      txVariantCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'txVariantCode',
            in: 'query',
            description:
              'The unique code of the card manufacturer profile.\n\nPossible values: **mcmaestro**, **mc**, **visa**, **mcdebit**. ',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      createdSince: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdSince',
            in: 'query',
            description:
              'Only include card orders that have been created on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      createdUntil: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'createdUntil',
            in: 'query',
            description:
              'Only include card orders that have been created on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      lockedSince: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'lockedSince',
            in: 'query',
            description:
              'Only include card orders that have been locked on or after this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      lockedUntil: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'lockedUntil',
            in: 'query',
            description:
              'Only include card orders that have been locked on or before this point in time. The value must be in ISO 8601 format. For example, **2021-05-30T15:07:40Z**.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      serviceCenter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'serviceCenter',
            in: 'query',
            description:
              'The service center at which the card is issued. The value is case-sensitive. ',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      offset: z
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
            name: 'offset',
            in: 'query',
            description:
              'Specifies the position of an element in a list of card orders. The response includes a list of card orders that starts at the specified offset.\n\n**Default:** 0, which means that the response contains all the elements in the list of card orders.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The number of card orders returned per page. **Default:** 10.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: PaginatedGetCardOrderResponseSchema,
          examples: { success: GetCardordersSuccess_200Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getCardordersIdItemsRoute = createRoute({
  method: 'get',
  path: '/cardorders/{id}/items',
  tags: ['Card orders'],
  summary: 'Get card order items',
  description: 'Returns the item list of a specific card order.',
  operationId: 'get-cardorders-id-items',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the card order.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      offset: z
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
            name: 'offset',
            in: 'query',
            description:
              'Specifies the position of an element in a list of card orders. The response includes a list of card order items that starts at the specified offset.\n\n**Default:** 0, which means that the response contains all the elements in the list of card order items.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The number of card order items returned per page. **Default:** 10.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: PaginatedGetCardOrderItemResponseSchema,
          examples: { success: GetCardordersIdItemsSuccess_200Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getGrantAccountsIdRoute = createRoute({
  method: 'get',
  path: '/grantAccounts/{id}',
  tags: ['Grant accounts'],
  summary: 'Get a grant account',
  description:
    'Returns the details of the [grant account](https://docs.adyen.com/platforms/capital#grant-account).',
  operationId: 'get-grantAccounts-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the grant account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: CapitalGrantAccountSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  deprecated: true,
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getGrantOffersRoute = createRoute({
  method: 'get',
  path: '/grantOffers',
  tags: ['Grant offers'],
  summary: 'Get all available grant offers',
  description:
    'Returns a list of all [grant offers](https://docs.adyen.com/platforms/capital#grant-offers) available for `accountHolderId` specified as a query parameter.',
  operationId: 'get-grantOffers',
  request: {
    query: z.object({
      accountHolderId: z
        .string()
        .openapi({
          param: {
            name: 'accountHolderId',
            in: 'query',
            description: 'The unique identifier of the grant account.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: GrantOffersSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  deprecated: true,
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getGrantOffersGrantOfferIdRoute = createRoute({
  method: 'get',
  path: '/grantOffers/{grantOfferId}',
  tags: ['Grant offers'],
  summary: 'Get a grant offer',
  description: 'Returns the details of a single grant offer.',
  operationId: 'get-grantOffers-grantOfferId',
  request: {
    params: z.object({
      grantOfferId: z
        .string()
        .openapi({
          param: {
            name: 'grantOfferId',
            in: 'path',
            description: 'The unique identifier of the grant offer.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: GrantOfferSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  deprecated: true,
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getNetworkTokensNetworkTokenIdRoute = createRoute({
  method: 'get',
  path: '/networkTokens/{networkTokenId}',
  tags: ['Network tokens'],
  summary: 'Get a network token',
  description: 'Returns the details of a network token.',
  operationId: 'get-networkTokens-networkTokenId',
  request: {
    params: z.object({
      networkTokenId: z
        .string()
        .openapi({
          param: {
            name: 'networkTokenId',
            in: 'path',
            description: 'The unique identifier of the network token.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: GetNetworkTokenResponseSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const patchNetworkTokensNetworkTokenIdRoute = createRoute({
  method: 'patch',
  path: '/networkTokens/{networkTokenId}',
  tags: ['Network tokens'],
  summary: 'Update a network token',
  description: 'Updates the status of the network token.',
  operationId: 'patch-networkTokens-networkTokenId',
  request: {
    params: z.object({
      networkTokenId: z
        .string()
        .openapi({
          param: {
            name: 'networkTokenId',
            in: 'path',
            description: 'The unique identifier of the network token.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateNetworkTokenRequestSchema } } },
  },
  responses: {
    202: {
      description: 'No Content - look at the actual response code for the status of the request. ',
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postPaymentInstrumentGroupsRoute = createRoute({
  method: 'post',
  path: '/paymentInstrumentGroups',
  tags: ['Payment instrument groups'],
  summary: 'Create a payment instrument group',
  description:
    'Creates a payment instrument group to associate and group payment instrument resources together. You can apply a transaction rule to a payment instrument group.',
  operationId: 'post-paymentInstrumentGroups',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaymentInstrumentGroupInfoSchema,
          examples: {
            createPaymentInstrumentGroups:
              PostPaymentInstrumentGroupsCreatePaymentInstrumentGroupsExample,
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
          schema: PaymentInstrumentGroupSchema,
          examples: {
            createPaymentInstrumentGroups:
              PostPaymentInstrumentGroupsCreatePaymentInstrumentGroups_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getPaymentInstrumentGroupsIdRoute = createRoute({
  method: 'get',
  path: '/paymentInstrumentGroups/{id}',
  tags: ['Payment instrument groups'],
  summary: 'Get a payment instrument group',
  description: 'Returns the details of a payment instrument group.',
  operationId: 'get-paymentInstrumentGroups-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the payment instrument group.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: PaymentInstrumentGroupSchema,
          examples: { success: GetPaymentInstrumentGroupsIdSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getPaymentInstrumentGroupsIdTransactionRulesRoute = createRoute({
  method: 'get',
  path: '/paymentInstrumentGroups/{id}/transactionRules',
  tags: ['Payment instrument groups'],
  summary: 'Get all transaction rules for a payment instrument group',
  description:
    'Returns a list of all the transaction rules associated with a payment instrument group.',
  operationId: 'get-paymentInstrumentGroups-id-transactionRules',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the payment instrument group.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: TransactionRulesResponseSchema,
          examples: { success: GetPaymentInstrumentGroupsIdTransactionRulesSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postPaymentInstrumentsRoute = createRoute({
  method: 'post',
  path: '/paymentInstruments',
  tags: ['Payment instruments'],
  summary: 'Create a payment instrument',
  description:
    'Creates a payment instrument to issue a physical card, a virtual card, or a business account to your user.\n\n For more information, refer to [Issue cards](https://docs.adyen.com/issuing/create-cards) or [Issue business accounts](https://docs.adyen.com/platforms/business-accounts).',
  operationId: 'post-paymentInstruments',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaymentInstrumentInfoSchema,
          examples: {
            createBusinessAccountNL: PostPaymentInstrumentsCreateBusinessAccountNLExample,
            'createBusinessAccountNL-DELocalIBAN':
              PostPaymentInstrumentsCreateBusinessAccountNLDELocalIBANExample,
            'createBusinessAccountNL-FRLocalIBAN':
              PostPaymentInstrumentsCreateBusinessAccountNLFRLocalIBANExample,
            createBusinessAccountUK: PostPaymentInstrumentsCreateBusinessAccountUKExample,
            createBusinessAccountUS: PostPaymentInstrumentsCreateBusinessAccountUSExample,
            createPhysicalCard: PostPaymentInstrumentsCreatePhysicalCardExample,
            createVirtualCard: PostPaymentInstrumentsCreateVirtualCardExample,
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
          schema: PaymentInstrumentSchema,
          examples: {
            createBusinessAccountNL: PostPaymentInstrumentsCreateBusinessAccountNL_200Example,
            'createBusinessAccountNL-DELocalIBAN':
              PostPaymentInstrumentsCreateBusinessAccountNLDELocalIBAN_200Example,
            'createBusinessAccountNL-FRLocalIBAN':
              PostPaymentInstrumentsCreateBusinessAccountNLFRLocalIBAN_200Example,
            createBusinessAccountUK: PostPaymentInstrumentsCreateBusinessAccountUK_200Example,
            createBusinessAccountUS: PostPaymentInstrumentsCreateBusinessAccountUS_200Example,
            createPhysicalCard: PostPaymentInstrumentsCreatePhysicalCard_200Example,
            createVirtualCard: PostPaymentInstrumentsCreateVirtualCard_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postPaymentInstrumentsRevealRoute = createRoute({
  method: 'post',
  path: '/paymentInstruments/reveal',
  tags: ['Payment instruments'],
  summary: 'Reveal the data of a payment instrument',
  description:
    'Returns the encrypted data of a specified payment instrument. These data include:\n\n- The primary account number (PAN)\n- The card verification code (CVC)\n- The expiry date\n\nYou can decrypt the data to reveal it in your user interface.\n\nTo make this request, your API credential must have the following role:\n* Bank Issuing PAN Reveal Webservice role',
  operationId: 'post-paymentInstruments-reveal',
  request: {
    body: { content: { 'application/json': { schema: PaymentInstrumentRevealRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: PaymentInstrumentRevealResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getPaymentInstrumentsIdRoute = createRoute({
  method: 'get',
  path: '/paymentInstruments/{id}',
  tags: ['Payment instruments'],
  summary: 'Get a payment instrument',
  description: 'Returns the details of a payment instrument.',
  operationId: 'get-paymentInstruments-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the payment instrument.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: PaymentInstrumentSchema,
          examples: { success: GetPaymentInstrumentsIdSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const patchPaymentInstrumentsIdRoute = createRoute({
  method: 'patch',
  path: '/paymentInstruments/{id}',
  tags: ['Payment instruments'],
  summary: 'Update a payment instrument',
  description:
    'Updates a payment instrument. Once a payment instrument is already active, you can only update its status. However, for cards created with **inactive** status, you can still update the balance account associated with the card.',
  operationId: 'patch-paymentInstruments-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the payment instrument.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PaymentInstrumentUpdateRequestSchema,
          examples: {
            updatePaymentInstrumentBalanceAccount:
              PatchPaymentInstrumentsIdUpdatePaymentInstrumentBalanceAccountExample,
            updatePaymentInstrumentStatus:
              PatchPaymentInstrumentsIdUpdatePaymentInstrumentStatusExample,
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
          schema: UpdatePaymentInstrumentSchema,
          examples: {
            updatePaymentInstrumentBalanceAccount:
              PatchPaymentInstrumentsIdUpdatePaymentInstrumentBalanceAccount_200Example,
            updatePaymentInstrumentStatus:
              PatchPaymentInstrumentsIdUpdatePaymentInstrumentStatus_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getPaymentInstrumentsIdNetworkTokenActivationDataRoute = createRoute({
  method: 'get',
  path: '/paymentInstruments/{id}/networkTokenActivationData',
  tags: ['Payment instruments'],
  summary: 'Get network token activation data',
  description: 'Get the network token activation data for a payment instrument.',
  operationId: 'get-paymentInstruments-id-networkTokenActivationData',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the payment instrument.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NetworkTokenActivationDataResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postPaymentInstrumentsIdNetworkTokenActivationDataRoute = createRoute({
  method: 'post',
  path: '/paymentInstruments/{id}/networkTokenActivationData',
  tags: ['Payment instruments'],
  summary: 'Create network token provisioning data',
  description:
    "Create provisioning data for a network token. Use the provisioning data to add a user's payment instrument to their digital wallet.",
  operationId: 'post-paymentInstruments-id-networkTokenActivationData',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the payment instrument.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: NetworkTokenActivationDataRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NetworkTokenActivationDataResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getPaymentInstrumentsIdNetworkTokensRoute = createRoute({
  method: 'get',
  path: '/paymentInstruments/{id}/networkTokens',
  tags: ['Payment instruments'],
  summary: 'List network tokens',
  description: 'List the network tokens connected to a payment instrument.',
  operationId: 'get-paymentInstruments-id-networkTokens',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the payment instrument.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: ListNetworkTokensResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getPaymentInstrumentsIdRevealRoute = createRoute({
  method: 'get',
  path: '/paymentInstruments/{id}/reveal',
  tags: ['Payment instruments'],
  summary: 'Get the PAN of a payment instrument',
  description:
    'Returns the primary account number (PAN) of a payment instrument.\n\nTo make this request, your API credential must have the following [role](https://docs.adyen.com/issuing/manage-access/api-credentials-web-service#api-permissions):\n\n* Balance Platform BCL PCI role',
  operationId: 'get-paymentInstruments-id-reveal',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the payment instrument.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: PaymentInstrumentRevealInfoSchema,
          examples: { success: GetPaymentInstrumentsIdRevealSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getPaymentInstrumentsIdTransactionRulesRoute = createRoute({
  method: 'get',
  path: '/paymentInstruments/{id}/transactionRules',
  tags: ['Payment instruments'],
  summary: 'Get all transaction rules for a payment instrument',
  description: 'Returns a list of transaction rules associated with a payment instrument.',
  operationId: 'get-paymentInstruments-id-transactionRules',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the payment instrument.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: TransactionRulesResponseSchema,
          examples: { success: GetPaymentInstrumentsIdTransactionRulesSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postPinsChangeRoute = createRoute({
  method: 'post',
  path: '/pins/change',
  tags: ['Manage card PIN'],
  summary: 'Change a card PIN',
  description:
    'Changes the personal identification number (PIN) of a specified card.\n\nTo make this request, your API credential must have the following role:\n* Bank Issuing PIN Change Webservice role',
  operationId: 'post-pins-change',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PinChangeRequestSchema,
          examples: { requestPinChange: PostPinsChangeRequestPinChangeExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: PinChangeResponseSchema,
          examples: { requestPinChange: PostPinsChangeRequestPinChange_200Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postPinsRevealRoute = createRoute({
  method: 'post',
  path: '/pins/reveal',
  tags: ['Manage card PIN'],
  summary: 'Reveal a card PIN',
  description:
    'Returns an encrypted PIN block that contains the PIN of a specified card. You can use the decrypted data to reveal the PIN in your user interface.\n\nTo make this request, your API credential must have the following role:\n* Bank Issuing PIN Reveal Webservice role',
  operationId: 'post-pins-reveal',
  request: {
    body: {
      content: {
        'application/json': {
          schema: RevealPinRequestSchema,
          examples: { requestPinBlock: PostPinsRevealRequestPinBlockExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: RevealPinResponseSchema,
          examples: { requestPinBlock: PostPinsRevealRequestPinBlock_200Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getPublicKeyRoute = createRoute({
  method: 'get',
  path: '/publicKey',
  tags: ['Manage card PIN'],
  summary: 'Get an RSA public key',
  description:
    'Get an [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)) public key to encrypt or decrypt card data.\n\n You need the RSA public key to generate the `encryptedKey` required to:\n- [Change a PIN](https://docs.adyen.com/api-explorer/balanceplatform/2/post/pins/change).\n- [Reveal a PIN](https://docs.adyen.com/api-explorer/balanceplatform/2/post/pins/reveal).\n- [Reveal a PAN](https://docs.adyen.com/api-explorer/balanceplatform/2/post/paymentInstruments/reveal).',
  operationId: 'get-publicKey',
  request: {
    query: z.object({
      purpose: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'purpose',
            in: 'query',
            description:
              'The purpose of the public key.\n\nPossible values: **pinChange**, **pinReveal**, **panReveal**.\n\nDefault value: **pinReveal**.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      format: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'format',
            in: 'query',
            description:
              'The encoding format of public key.\n\nPossible values: **jwk**, **pem**.\n\nDefault value: **pem**.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: PublicKeyResponseSchema,
          examples: { success: GetPublicKeySuccess_200Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getRegisteredDevicesRoute = createRoute({
  method: 'get',
  path: '/registeredDevices',
  tags: ['Manage SCA devices'],
  summary: 'Get a list of registered SCA devices',
  description:
    'Get a paginated list of the SCA devices you have currently registered for a specific payment instrument.',
  operationId: 'get-registeredDevices',
  request: {
    query: z.object({
      paymentInstrumentId: z
        .string()
        .openapi({
          param: {
            name: 'paymentInstrumentId',
            in: 'query',
            description:
              'The unique identifier of a payment instrument. It limits the returned list to SCA devices associated to this payment instrument.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      pageNumber: z
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
            name: 'pageNumber',
            in: 'query',
            description:
              'The index of the page to retrieve. The index of the first page is 0 (zero).\n\nDefault: 0.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32' },
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
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'The number of items to have on a page.\n\nDefault: 20. Maximum: 100.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: SearchRegisteredDevicesResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postRegisteredDevicesRoute = createRoute({
  method: 'post',
  path: '/registeredDevices',
  tags: ['Manage SCA devices'],
  summary: 'Initiate the registration of an SCA device',
  description:
    "Initiates the registration of a user's device for Strong Customer Authentication (SCA). You can register SCA devices for [business accounts](https://docs.adyen.com/platforms/business-accounts/sca/register-devices) or [Adyen-issued cards](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/register-devices).\n\nFor a successful request, the device must be eligible for SCA.",
  operationId: 'post-registeredDevices',
  request: { body: { content: { 'application/json': { schema: RegisterSCARequestSchema } } } },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: RegisterSCAResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postRegisteredDevicesDeviceIdAssociationsRoute = createRoute({
  method: 'post',
  path: '/registeredDevices/{deviceId}/associations',
  tags: ['Manage SCA devices'],
  summary: 'Initiate an association between an SCA device and a resource',
  description:
    "Initiates an association between a user's registered SCA device and an Adyen resource. For example, you can associate an SCA device with additional [business accounts](https://docs.adyen.com/platforms/business-accounts/sca/register-devices) or [Adyen-issued cards](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/register-devices).",
  operationId: 'post-registeredDevices-deviceId-associations',
  request: {
    params: z.object({
      deviceId: z
        .string()
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            description:
              'The unique identifier of the SCA device that you are associating with a resource.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AssociationInitiateRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: AssociationInitiateResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const patchRegisteredDevicesDeviceIdAssociationsRoute = createRoute({
  method: 'patch',
  path: '/registeredDevices/{deviceId}/associations',
  tags: ['Manage SCA devices'],
  summary: 'Complete an association between an SCA device and a resource',
  description:
    "Completes an association between a user's registered SCA device and an Adyen resource. For example, you can associate an SCA device with additional [business accounts](https://docs.adyen.com/platforms/business-accounts/sca/register-devices) or [Adyen-issued cards](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk/register-devices).\n\nTo complete the association, this endpoint validates the authentication data of the registered device.",
  operationId: 'patch-registeredDevices-deviceId-associations',
  request: {
    params: z.object({
      deviceId: z
        .string()
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            description:
              'The unique identifier of the SCA device that you are associating with a resource.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AssociationFinaliseRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: AssociationFinaliseResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const deleteRegisteredDevicesIdRoute = createRoute({
  method: 'delete',
  path: '/registeredDevices/{id}',
  tags: ['Manage SCA devices'],
  summary: 'Delete a registration of an SCA device',
  description:
    'Deletes an SCA device from the list of registered devices of a specific payment instrument.',
  operationId: 'delete-registeredDevices-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the SCA device.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      paymentInstrumentId: z
        .string()
        .openapi({
          param: {
            name: 'paymentInstrumentId',
            in: 'query',
            description:
              'The unique identifier of the payment instrument linked to the SCA device.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: {
      description: 'No Content - look at the actual response code for the status of the request. ',
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const patchRegisteredDevicesIdRoute = createRoute({
  method: 'patch',
  path: '/registeredDevices/{id}',
  tags: ['Manage SCA devices'],
  summary: 'Complete the registration of an SCA device',
  description:
    'Completes the registration of an SCA device by validating the authentication data of the device. You can register SCA devices for [business accounts](https://docs.adyen.com/platforms/business-accounts/sca) or [Adyen-issued cards](https://docs.adyen.com/issuing/3d-secure/oob-auth-sdk).\n\n',
  operationId: 'patch-registeredDevices-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The unique identifier of the SCA device. You obtain this `id` in the response of a POST&nbsp;[/registeredDevices](https://docs.adyen.com/api-explorer/balanceplatform/2/post/registeredDevices#responses-200-id) request.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RegisterSCARequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: RegisterSCAFinalResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postTransactionRulesRoute = createRoute({
  method: 'post',
  path: '/transactionRules',
  tags: ['Transaction rules'],
  summary: 'Create a transaction rule',
  description:
    'Creates a [transaction rule](https://docs.adyen.com/issuing/transaction-rules). When your user makes a transaction with their Adyen-issued card, the transaction is allowed or declined based on the conditions and outcome defined in the transaction rule. You can apply the transaction rule to several cards, such as all the cards in your platform, or to a specific card. For use cases, see [examples](https://docs.adyen.com/issuing/transaction-rules/examples).',
  operationId: 'post-transactionRules',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TransactionRuleInfoSchema,
          examples: {
            createTransactionRuleAllowPos: PostTransactionRulesCreateTransactionRuleAllowPosExample,
            createTransactionRuleIncreaseScore:
              PostTransactionRulesCreateTransactionRuleIncreaseScoreExample,
            createTransactionRuleLimitSliding:
              PostTransactionRulesCreateTransactionRuleLimitSlidingExample,
            createTransactionRuleLimitTransaction:
              PostTransactionRulesCreateTransactionRuleLimitTransactionExample,
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
          schema: TransactionRuleSchema,
          examples: {
            createTransactionRuleAllowPos:
              PostTransactionRulesCreateTransactionRuleAllowPos_200Example,
            createTransactionRuleIncreaseScore:
              PostTransactionRulesCreateTransactionRuleIncreaseScore_200Example,
            createTransactionRuleLimitSliding:
              PostTransactionRulesCreateTransactionRuleLimitSliding_200Example,
            createTransactionRuleLimitTransaction:
              PostTransactionRulesCreateTransactionRuleLimitTransaction_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getTransactionRulesTransactionRuleIdRoute = createRoute({
  method: 'get',
  path: '/transactionRules/{transactionRuleId}',
  tags: ['Transaction rules'],
  summary: 'Get a transaction rule',
  description: 'Returns the details of a transaction rule.',
  operationId: 'get-transactionRules-transactionRuleId',
  request: {
    params: z.object({
      transactionRuleId: z
        .string()
        .openapi({
          param: {
            name: 'transactionRuleId',
            in: 'path',
            description: 'The unique identifier of the transaction rule.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: TransactionRuleResponseSchema,
          examples: { success: GetTransactionRulesTransactionRuleIdSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const deleteTransactionRulesTransactionRuleIdRoute = createRoute({
  method: 'delete',
  path: '/transactionRules/{transactionRuleId}',
  tags: ['Transaction rules'],
  summary: 'Delete a transaction rule',
  description: 'Deletes a transaction rule.',
  operationId: 'delete-transactionRules-transactionRuleId',
  request: {
    params: z.object({
      transactionRuleId: z
        .string()
        .openapi({
          param: {
            name: 'transactionRuleId',
            in: 'path',
            description: 'The unique identifier of the transaction rule.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: TransactionRuleSchema,
          examples: { success: DeleteTransactionRulesTransactionRuleIdSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const patchTransactionRulesTransactionRuleIdRoute = createRoute({
  method: 'patch',
  path: '/transactionRules/{transactionRuleId}',
  tags: ['Transaction rules'],
  summary: 'Update a transaction rule',
  description:
    'Updates a transaction rule. \n\n* To update only the status of a transaction rule, send only the `status` parameter. All other parameters not provided in the request are left unchanged.\n\n* When updating any other parameter, you need to send all existing resource parameters. If you omit a parameter in the request, that parameter is removed from the resource.',
  operationId: 'patch-transactionRules-transactionRuleId',
  request: {
    params: z.object({
      transactionRuleId: z
        .string()
        .openapi({
          param: {
            name: 'transactionRuleId',
            in: 'path',
            description: 'The unique identifier of the transaction rule.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: TransactionRuleInfoSchema,
          examples: {
            updateTransactionRuleStatus:
              PatchTransactionRulesTransactionRuleIdUpdateTransactionRuleStatusExample,
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
          schema: TransactionRuleSchema,
          examples: {
            updateTransactionRuleStatus:
              PatchTransactionRulesTransactionRuleIdUpdateTransactionRuleStatus_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postTransferRoutesCalculateRoute = createRoute({
  method: 'post',
  path: '/transferRoutes/calculate',
  tags: ['Transfer routes'],
  summary: 'Calculate transfer routes',
  description:
    'Returns available transfer routes based on a combination of transfer `country`, `currency`, `counterparty`, and `priorities`. Use this endpoint to find optimal transfer priorities and associated requirements before you [make a transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers).',
  operationId: 'post-transferRoutes-calculate',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TransferRouteRequestSchema,
          examples: {
            transferRoutesCalculate: PostTransferRoutesCalculateTransferRoutesCalculateExample,
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
          schema: TransferRouteResponseSchema,
          examples: {
            transferRoutesCalculate: PostTransferRoutesCalculateTransferRoutesCalculate_200Example,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_422Example },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postValidateBankAccountIdentificationRoute = createRoute({
  method: 'post',
  path: '/validateBankAccountIdentification',
  tags: ['Bank account validation'],
  summary: 'Validate a bank account',
  description:
    'Validates bank account identification details. You can use this endpoint to validate bank account details before you [make a transfer](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers) or [create a transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments).',
  operationId: 'post-validateBankAccountIdentification',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BankAccountIdentificationValidationRequestSchema,
          examples: {
            validateBankAccountIdentificationIban:
              PostValidateBankAccountIdentificationValidateBankAccountIdentificationIbanExample,
            validateBankAccountIdentificationUs:
              PostValidateBankAccountIdentificationValidateBankAccountIdentificationUsExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'No Content - look at the actual response code for the status of the request. ',
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_401Example },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: {
            generic: Generic_422Example,
            validateBankAccountIdentificationIban:
              PostValidateBankAccountIdentificationValidateBankAccountIdentificationIban_422Example,
            validateBankAccountIdentificationUs:
              PostValidateBankAccountIdentificationValidateBankAccountIdentificationUs_422Example,
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: RestServiceErrorSchema,
          examples: { generic: Generic_500Example },
        },
      },
    },
  },
  security: [{ clientKey: [] }, { BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getAccountHoldersIdTaxFormSummaryRoute = createRoute({
  method: 'get',
  path: '/accountHolders/{id}/taxFormSummary',
  tags: ['Account holders'],
  summary: 'Get summary of tax forms for an account holder',
  description: 'Returns a summary of all tax forms for an account holder.',
  operationId: 'get-accountHolders-id-taxFormSummary',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the account holder.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      formType: z
        .string()
        .openapi({
          param: {
            name: 'formType',
            in: 'query',
            description:
              'The type of tax form you want a summary for. Accepted values are **US1099k** and **US1099nec**.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: TaxFormSummaryResponseSchema,
          examples: {
            'get-tax-form-summary-200': {
              summary: 'Summary of tax forms for an account holder',
              description: 'Summary of tax forms for an account holder',
              value: {
                data: [
                  { legalEntityId: 'LE123', taxYears: [2023] },
                  { legalEntityId: 'LE987', taxYears: [2024, 2025] },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getBalanceAccountsBalanceAccountIdPayoutSchedulesRoute = createRoute({
  method: 'get',
  path: '/balanceAccounts/{balanceAccountId}/payoutSchedules',
  tags: ['Managed payout schedules'],
  summary: 'Get all managed payout schedules on a balance account',
  description:
    'Returns a list of all managed payout schedules that are configured on a balance account. You can use query parameters to filter the elements that are returned in the list.',
  operationId: 'get-balanceAccounts-balanceAccountId-payoutSchedules',
  request: {
    params: z.object({
      balanceAccountId: z
        .string()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'currency',
            in: 'query',
            description:
              'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the currency used in the payout schedule.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description: 'The `cursor` returned in the links of the previous response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
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
          z.int32().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The number of items returned per page, maximum of 100 items. By default, the response returns 10 items per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', default: 10, maximum: 100, minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: BalanceAccountConfigurationsSchema,
          examples: {
            'list-payout-schedules': {
              summary: 'List of managed payout schedules',
              description:
                'The response returned when you get all managed payout schedules on a balance account.',
              value: {
                balanceAccountPayoutSchedules: [
                  {
                    id: 'PSAC00000000000000000000000001',
                    balancePlatformPayoutScheduleId: 'PSPC00000000000000000000000001',
                    balanceAccountId: 'BA000000000000000000001',
                    transferInstrumentId: 'SE00000000000000000000001',
                    currency: 'EUR',
                    reference: 'Monthly payout',
                    description: 'Scheduled payout to merchant bank account',
                    referenceForBeneficiary: 'PAYOUT-REF-001',
                    retainedAmount: 10000,
                    minPayoutAmount: 1000,
                    maxPayoutAmount: 100000000,
                    createdAt: '2024-01-15T10:30:00Z',
                    enabled: true,
                    frequency: 'monthly',
                    frequencyValue: 1,
                  },
                ],
                link: {
                  next: {
                    href: '/balanceAccounts/BA000000000000000000001/payoutSchedules?limit=10',
                  },
                },
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'Not Found - the resource was not found',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postBalanceAccountsBalanceAccountIdPayoutSchedulesRoute = createRoute({
  method: 'post',
  path: '/balanceAccounts/{balanceAccountId}/payoutSchedules',
  tags: ['Managed payout schedules'],
  summary: 'Apply a managed payout schedule to a balance account',
  description:
    'Apply a managed payout schedule to a balance account. This payout schedule is based on an existing payout schedule in your balance platform.',
  operationId: 'post-balanceAccounts-balanceAccountId-payoutSchedules',
  request: {
    params: z.object({
      balanceAccountId: z
        .string()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BalanceAccountConfigurationRequestSchema,
          examples: {
            'create-payout-schedule': {
              summary: 'Apply a managed payout schedule to a balance account',
              description: 'The request to apply a managed payout schedule to a balance account.',
              value: {
                balancePlatformPayoutScheduleId: 'PSPC00000000000000000000000001',
                transferInstrumentId: 'SE00000000000000000000001',
                currency: 'EUR',
                reference: 'Monthly payout',
                description: 'Scheduled payout to merchant bank account',
                referenceForBeneficiary: 'PAYOUT-REF-001',
                retainedAmount: 10000,
                minPayoutAmount: 1000,
                maxPayoutAmount: 100000000,
                enabled: true,
                frequency: 'monthly',
                frequencyValue: 1,
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
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: BalanceAccountConfigurationSchema,
          examples: {
            'create-payout-schedule': {
              summary: 'Managed payout schedule applied',
              description:
                'The response returned when you apply a managed payout schedule to a balance account.',
              value: {
                id: 'PSAC00000000000000000000000001',
                balancePlatformPayoutScheduleId: 'PSPC00000000000000000000000001',
                balanceAccountId: 'BA000000000000000000001',
                transferInstrumentId: 'SE00000000000000000000001',
                currency: 'EUR',
                reference: 'Monthly payout',
                description: 'Scheduled payout to merchant bank account',
                referenceForBeneficiary: 'PAYOUT-REF-001',
                retainedAmount: 10000,
                minPayoutAmount: 1000,
                maxPayoutAmount: 100000000,
                createdAt: '2024-01-15T10:30:00Z',
                enabled: true,
                frequency: 'monthly',
                frequencyValue: 1,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'Not Found - the resource was not found',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute = createRoute({
  method: 'get',
  path: '/balanceAccounts/{balanceAccountId}/payoutSchedules/{id}',
  tags: ['Managed payout schedules'],
  summary: 'Get a specific managed payout schedule on a balance account',
  description: 'Returns the specified payout schedule.',
  operationId: 'get-balanceAccounts-balanceAccountId-payoutSchedules-id',
  request: {
    params: z.object({
      balanceAccountId: z
        .string()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the payout schedule for the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: BalanceAccountConfigurationSchema,
          examples: {
            'get-payout-schedule': {
              summary: 'Managed payout schedule details',
              description: 'The response returned when you get a specific managed payout schedule.',
              value: {
                id: 'PSAC00000000000000000000000001',
                balancePlatformPayoutScheduleId: 'PSPC00000000000000000000000001',
                balanceAccountId: 'BA000000000000000000001',
                transferInstrumentId: 'SE00000000000000000000001',
                currency: 'EUR',
                reference: 'Monthly payout',
                description: 'Scheduled payout to merchant bank account',
                referenceForBeneficiary: 'PAYOUT-REF-001',
                retainedAmount: 10000,
                minPayoutAmount: 1000,
                maxPayoutAmount: 100000000,
                createdAt: '2024-01-15T10:30:00Z',
                enabled: true,
                frequency: 'monthly',
                frequencyValue: 1,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'Not Found - the resource was not found',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const deleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute = createRoute({
  method: 'delete',
  path: '/balanceAccounts/{balanceAccountId}/payoutSchedules/{id}',
  tags: ['Managed payout schedules'],
  summary: 'Delete a managed payout schedule on a balance account',
  description: 'Delete a payout schedule applied to a balance account.',
  operationId: 'delete-balanceAccounts-balanceAccountId-payoutSchedules-id',
  request: {
    params: z.object({
      balanceAccountId: z
        .string()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The unique identifier of the payout schedule applied to the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'OK - The request has succeeded.' },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'Not Found - the resource was not found',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const patchBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute = createRoute({
  method: 'patch',
  path: '/balanceAccounts/{balanceAccountId}/payoutSchedules/{id}',
  tags: ['Managed payout schedules'],
  summary: 'Update a managed payout schedule on a balance account',
  description:
    'Update a managed payout schedule applied to a balance account. If an optional parameter is not included in the request, it remains unchanged.',
  operationId: 'patch-balanceAccounts-balanceAccountId-payoutSchedules-id',
  request: {
    params: z.object({
      balanceAccountId: z
        .string()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The unique identifier of the payout schedule applied to the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BalanceAccountConfigurationUpdateSchema,
          examples: {
            'update-payout-schedule': {
              summary: 'Update a managed payout schedule on a balance account',
              description: 'The request to update a managed payout schedule on a balance account.',
              value: {
                description: 'Updated payout description',
                enabled: false,
                retainedAmount: 20000,
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
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: BalanceAccountConfigurationSchema,
          examples: {
            'update-payout-schedule': {
              summary: 'Managed payout schedule updated',
              description: 'The response returned when you update a managed payout schedule.',
              value: {
                id: 'PSAC00000000000000000000000001',
                balancePlatformPayoutScheduleId: 'PSPC00000000000000000000000001',
                balanceAccountId: 'BA000000000000000000001',
                transferInstrumentId: 'SE00000000000000000000001',
                currency: 'EUR',
                reference: 'Monthly payout',
                description: 'Updated payout description',
                referenceForBeneficiary: 'PAYOUT-REF-001',
                retainedAmount: 20000,
                minPayoutAmount: 1000,
                maxPayoutAmount: 100000000,
                createdAt: '2024-01-15T10:30:00Z',
                updatedAt: '2024-01-16T14:00:00Z',
                enabled: false,
                frequency: 'monthly',
                frequencyValue: 1,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'Not Found - the resource was not found',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsRoute = createRoute({
  method: 'get',
  path: '/balanceAccounts/{balanceAccountId}/payoutSchedules/{id}/executions',
  tags: ['Managed payout schedules'],
  summary: 'View executions of a managed payout schedule',
  description:
    'View information about the executions of a managed payout schedule on the specified balance account. An execution is an attempt to make a payout according to the payout schedule. ',
  operationId: 'get-balanceAccounts-balanceAccountId-payoutSchedules-id-executions',
  request: {
    params: z.object({
      balanceAccountId: z
        .string()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the payout schedule on the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      results: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'results',
            in: 'query',
            description:
              'Contains a comma-separated list of payout statuses. If included, the response returns only executed payouts that currently have one of the specified statuses.\n\nPossible statuses:\n- **succeeded**: The payout was sent successfully.\n- **failed**: The payout was not sent due to an error.\n- **skipped**: The payout was not triggered as expected.\n\nExamples: `results=succeeded`, `results=failed,skipped`',
            required: false,
            style: 'form',
            explode: false,
            schema: { type: 'string' },
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
          z.int32().min(10),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The number of items returned per page.\n\nDefault: **10**',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', minimum: 10 },
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32().min(1).max(100),
        )
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            description: 'The page number to be returned.\n\nDefault: **1**',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', maximum: 100, minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: PayoutScheduleExecutionsSchema,
          examples: {
            'list-payout-schedule-executions': {
              summary: 'List of payout executions',
              description: 'The response returned when you view payout schedule executions.',
              value: {
                payoutScheduleExecutions: [
                  {
                    id: 'PS0000000000001',
                    result: 'skipped',
                    triggeredAt: '2026-03-11T08:00:00Z',
                    resultDetails: {
                      reasonCode: 'noBalanceToPayOut',
                      reason: 'No balance to pay out',
                    },
                  },
                  {
                    id: 'PS0000000000002',
                    result: 'succeeded',
                    triggeredAt: '2026-03-12T08:00:00Z',
                    resultDetails: { transferId: 'A0A0A0A0A0A0A0A0' },
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'Not Found - the resource was not found',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getBalanceAccountsBalanceAccountIdRecurringTopUpsRoute = createRoute({
  method: 'get',
  path: '/balanceAccounts/{balanceAccountId}/recurringTopUps',
  tags: ['Recurring top ups'],
  summary: 'Get recurring top ups for a specific balanceAccountId',
  description:
    'View all recurring top ups configured for a specific `balanceAccountId`.\n\nFor more information, refer to [Manage recurring top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/manage-recurring-top-ups).\n',
  operationId: 'get-balanceAccounts-balanceAccountId-recurringTopUps',
  request: {
    params: z.object({
      balanceAccountId: z
        .string()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
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
          z.int32().min(1).max(100),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The number of items to return per page. Value must be between 1 and 100.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', default: 10, maximum: 100, minimum: 1 },
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description:
              'The cursor used for pagination. Required if you want to see the next or previous page of results.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: RecurringTopUpsResultSchema,
          examples: {
            'get-recurring-topups-200': {
              summary: 'Gets recurring top Ups config for a balanceAccountId',
              description: 'Get Recurring top ups for a balanceAccountId',
              value: {
                recurringTopUps: [
                  {
                    id: 'TUPC0000000000000000000001',
                    counterparty: { transferInstrumentId: 'SE000000000000000000000001' },
                    description: 'My description',
                    topUpAmount: { fixed: { value: 1000, currency: 'EUR' } },
                    trigger: {
                      schedule: { type: 'weekdays' },
                      threshold: { value: 100, currency: 'EUR' },
                    },
                    status: 'active',
                  },
                ],
                link: {
                  next: {
                    href: '/balanceAccounts/balanceAccount1/recurringTopUps?limit=10&cursor=nextCursorToken',
                  },
                  previous: {
                    href: '/balanceAccounts/balanceAccount1/recurringTopUps?limit=10&cursor=previousCursorToken',
                  },
                },
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'unauthorized-error-response': {
              summary: 'Unauthorized error response',
              description: 'Error response for unauthorized API requests',
              value: {
                type: 'https://docs.adyen.com/errors/unauthorized',
                errorCode: '00_401',
                title: 'Unauthorized',
                status: 401,
                detail: 'Authentication failed',
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'access-denied-error-response': {
              summary: 'Access denied error response',
              description: 'Error response when access to resource is denied',
              value: {
                type: 'https://docs.adyen.com/errors/forbidden',
                errorCode: '00_403',
                title: 'Forbidden',
                status: 403,
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found - the recurring top up was not found',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'not-found-error-response': {
              summary: 'Not found error response',
              description: 'Error response when balance account or top-up is not found',
              value: {
                type: 'https://docs.adyen.com/errors/not-found',
                errorCode: '30_013',
                title: 'Balance account not found',
                status: 404,
                detail: 'Could not find balance account with id SampleUSD.',
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'internal-server-error-response': {
              summary: 'Internal server error response',
              description: 'Error response when an unexpected server error occurs',
              value: {
                type: 'https://docs.adyen.com/errors/internal-server-error',
                errorCode: '00_500',
                title: 'Internal Server Error',
                status: 500,
                detail: 'An unexpected error occurred while processing the request.',
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
  },
})

export const postBalanceAccountsBalanceAccountIdRecurringTopUpsRoute = createRoute({
  method: 'post',
  path: '/balanceAccounts/{balanceAccountId}/recurringTopUps',
  tags: ['Recurring top ups'],
  summary: 'Create recurring top up',
  description:
    'Create a recurring top up configuration.\n\nFor more information, refer to [Create recurring top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/create-recurring-top-ups).\n',
  operationId: 'post-balanceAccounts-balanceAccountId-recurringTopUps',
  request: {
    params: z.object({
      balanceAccountId: z
        .string()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: CreateRecurringTopUpSchema,
          examples: {
            'create-recurring-topup': {
              summary: 'Creates recurring topup',
              description: 'Creates a new persistent configuration for a recurrent top-up.',
              value: {
                counterparty: { transferInstrumentId: 'SE000000000000000000000001' },
                description: 'My description',
                topUpAmount: { fixed: { value: 1000, currency: 'EUR' } },
                trigger: {
                  schedule: { type: 'weekdays' },
                  threshold: { value: 100, currency: 'EUR' },
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
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: RecurringTopUpSchema,
          examples: {
            'create-recurring-topup-200': {
              summary: 'Successfully created recurring topup',
              description:
                'Successfully created a new persistent configuration for a recurrent top-up',
              value: {
                id: 'TUPC0000000000000000000001',
                counterparty: { transferInstrumentId: 'SE000000000000000000000001' },
                description: 'My description',
                topUpAmount: { fixed: { value: 1000, currency: 'EUR' } },
                trigger: {
                  schedule: { type: 'weekdays' },
                  threshold: { value: 100, currency: 'EUR' },
                },
                status: 'active',
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'bad-request-error-response': {
              summary: 'Bad request error response',
              description: 'Error response when the request body cannot be parsed',
              value: {
                type: 'https://docs.adyen.com/errors/bad-request',
                errorCode: '00_400',
                title: 'Bad Request',
                status: 400,
                detail: 'The request could not be processed due to malformed syntax.',
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'unauthorized-error-response': {
              summary: 'Unauthorized error response',
              description: 'Error response for unauthorized API requests',
              value: {
                type: 'https://docs.adyen.com/errors/unauthorized',
                errorCode: '00_401',
                title: 'Unauthorized',
                status: 401,
                detail: 'Authentication failed',
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'access-denied-error-response': {
              summary: 'Access denied error response',
              description: 'Error response when access to resource is denied',
              value: {
                type: 'https://docs.adyen.com/errors/forbidden',
                errorCode: '00_403',
                title: 'Forbidden',
                status: 403,
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'currency-mismatch-error-response': {
              summary: 'Currency mismatch error response',
              description: 'Error response when currency mismatch occurs',
              value: {
                type: 'https://docs.adyen.com/errors/validation',
                errorCode: '29_001',
                title: 'The request is missing required fields or contains invalid data.',
                status: 422,
                detail: 'Account top up currency mismatch',
                requestId: 'req123456789',
              },
            },
            'feature-disabled-error-response': {
              summary: 'Feature disabled error response',
              description: 'Error response when feature is disabled',
              value: {
                type: 'https://docs.adyen.com/errors/validation',
                errorCode: '29_001',
                title: 'The request is missing required fields or contains invalid data.',
                status: 422,
                detail: 'BAP property DirectDebitTopUp is not active for balance account',
                requestId: 'req123456789',
              },
            },
            'inactive-account-holder-error-response': {
              summary: 'Inactive account holder error response',
              description: 'Error response when account holder is inactive',
              value: {
                type: 'https://docs.adyen.com/errors/validation',
                errorCode: '29_001',
                title: 'The request is missing required fields or contains invalid data.',
                status: 422,
                detail:
                  'BalanceAccountHolder PeterPanInactive has invalid account status inactive.',
                requestId: 'req123456789',
              },
            },
            'invalid-transfer-instrument-error-response': {
              summary: 'Invalid transfer instrument error response',
              description: 'Error response when transfer instrument is invalid',
              value: {
                type: 'https://docs.adyen.com/errors/validation',
                errorCode: '29_001',
                title: 'The request is missing required fields or contains invalid data.',
                status: 422,
                detail: 'Invalid Transfer instrument with id 00000000-0000-0000-0000-000000000000',
                requestId: 'req123456789',
              },
            },
            'missing-capability-error-response': {
              summary: 'Missing capability error response',
              description: 'Error response when required capability is missing',
              value: {
                type: 'https://docs.adyen.com/errors/validation',
                errorCode: '29_001',
                title: 'The request is missing required fields or contains invalid data.',
                status: 422,
                detail:
                  'Missing Capabilities [receiveFromTransferInstrument] for BalanceAccountHolder.PeterPanWithoutTransferInstrument',
                requestId: 'req123456789',
              },
            },
            'validation-error-response': {
              summary: 'Validation error response',
              description: 'Error response for request validation failures',
              value: {
                type: 'https://docs.adyen.com/errors/validation',
                errorCode: '29_001',
                title: 'The request is missing required fields or contains invalid data.',
                status: 422,
                detail: 'No routes could be found using the provided sweep.',
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
  },
})

export const deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRoute = createRoute({
  method: 'delete',
  path: '/balanceAccounts/{balanceAccountId}/recurringTopUps/{topUpId}',
  tags: ['Recurring top ups'],
  summary: 'Delete a recurring top up',
  description:
    'Delete a recurring top up configuration by `topUpId`.\n\nFor more information, refer to [Manage recurring top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/manage-recurring-top-ups).\n',
  operationId: 'delete-balanceAccounts-balanceAccountId-recurringTopUps-topUpId',
  request: {
    params: z.object({
      balanceAccountId: z
        .string()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      topUpId: z
        .string()
        .openapi({
          param: {
            name: 'topUpId',
            in: 'path',
            description: 'The unique identifier of the recurring top-up you want to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: {
      description:
        'No Content - the request has been successfully processed, but there is no additional content.',
      content: {},
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'bad-request-error-response': {
              summary: 'Bad request error response',
              description: 'bad-request-error-response',
              value: {
                type: 'https://docs.adyen.com/errors/bad-request',
                errorCode: '00_400',
                title: 'Bad Request',
                status: 400,
                detail: 'The request could not be processed due to malformed syntax.',
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'unauthorized-error-response': {
              summary: 'Unauthorized error response',
              description: 'unauthorized-error-response',
              value: {
                type: 'https://docs.adyen.com/errors/unauthorized',
                errorCode: '00_401',
                title: 'Unauthorized',
                status: 401,
                detail: 'Authentication failed',
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'access-denied-error-response': {
              summary: 'Access denied error response',
              description: 'access-denied-error-response',
              value: {
                type: 'https://docs.adyen.com/errors/forbidden',
                errorCode: '00_403',
                title: 'Forbidden',
                status: 403,
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found - the recurring top up was not found',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'not-found-error-response': {
              summary: 'Not found error response',
              description: 'not-found-error-response',
              value: {
                type: 'https://docs.adyen.com/errors/not-found',
                errorCode: '30_013',
                title: 'Balance account not found',
                status: 404,
                detail: 'Could not find balance account with id SampleUSD.',
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'validation-error-response': {
              summary: 'Validation error response',
              description: 'validation-error-response',
              value: {
                type: 'https://docs.adyen.com/errors/validation',
                errorCode: '29_001',
                title: 'The request is missing required fields or contains invalid data.',
                status: 422,
                detail: 'No routes could be found using the provided sweep.',
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'internal-server-error-response': {
              summary: 'Internal server error response',
              description: 'internal-server-error-response',
              value: {
                type: 'https://docs.adyen.com/errors/internal-server-error',
                errorCode: '00_500',
                title: 'Internal Server Error',
                status: 500,
                detail: 'An unexpected error occurred while processing the request.',
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
  },
})

export const patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRoute = createRoute({
  method: 'patch',
  path: '/balanceAccounts/{balanceAccountId}/recurringTopUps/{topUpId}',
  tags: ['Recurring top ups'],
  summary: 'Update a RecurringTopUp',
  description:
    'Update the configuration of an existing recurring top up.\n\nFor more information, refer to [Manage recurring top-ups](https://docs.adyen.com/issuing/add-manage-funds/top-ups/manage-recurring-top-ups).',
  operationId: 'patch-balanceAccounts-balanceAccountId-recurringTopUps-topUpId',
  request: {
    params: z.object({
      balanceAccountId: z
        .string()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      topUpId: z
        .string()
        .openapi({
          param: {
            name: 'topUpId',
            in: 'path',
            description: 'The unique identifier of the recurring top-up you want to update.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: RecurringTopUpUpdateSchema,
          examples: {
            'update-recurring-topup': {
              summary: 'Partially updates the configuration of a recurring Top up',
              description: 'Partially updates the configuration of a recurring Top up',
              value: { description: 'new description' },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: RecurringTopUpSchema,
          examples: {
            'update-recurring-topup-200': {
              summary: 'Successfully updated recurring topup',
              description: 'Successfully updated the configuration of a recurring Top up',
              value: {
                id: 'TUPC0000000000000000000001',
                counterparty: { transferInstrumentId: 'SE000000000000000000000001' },
                description: 'new description',
                topUpAmount: { fixed: { value: 1000, currency: 'EUR' } },
                trigger: {
                  schedule: { type: 'weekdays' },
                  threshold: { value: 100, currency: 'EUR' },
                },
                status: 'inactive',
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'bad-request-error-response': {
              summary: 'Bad request error response',
              description: 'Error response when the request body cannot be parsed',
              value: {
                type: 'https://docs.adyen.com/errors/bad-request',
                errorCode: '00_400',
                title: 'Bad Request',
                status: 400,
                detail: 'The request could not be processed due to malformed syntax.',
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'unauthorized-error-response': {
              summary: 'Unauthorized error response',
              description: 'Error response for unauthorized API requests',
              value: {
                type: 'https://docs.adyen.com/errors/unauthorized',
                errorCode: '00_401',
                title: 'Unauthorized',
                status: 401,
                detail: 'Authentication failed',
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'access-denied-error-response': {
              summary: 'Access denied error response',
              description: 'Error response when access to resource is denied',
              value: {
                type: 'https://docs.adyen.com/errors/forbidden',
                errorCode: '00_403',
                title: 'Forbidden',
                status: 403,
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'currency-mismatch-error-response': {
              summary: 'Currency mismatch error response',
              description: 'Error response when currency mismatch occurs',
              value: {
                type: 'https://docs.adyen.com/errors/validation',
                errorCode: '29_001',
                title: 'The request is missing required fields or contains invalid data.',
                status: 422,
                detail: 'Account top up currency mismatch',
                requestId: 'req123456789',
              },
            },
            'feature-disabled-error-response': {
              summary: 'Feature disabled error response',
              description: 'Error response when feature is disabled',
              value: {
                type: 'https://docs.adyen.com/errors/validation',
                errorCode: '29_001',
                title: 'The request is missing required fields or contains invalid data.',
                status: 422,
                detail: 'BAP property DirectDebitTopUp is not active for balance account',
                requestId: 'req123456789',
              },
            },
            'inactive-account-holder-error-response': {
              summary: 'Inactive account holder error response',
              description: 'Error response when account holder is inactive',
              value: {
                type: 'https://docs.adyen.com/errors/validation',
                errorCode: '29_001',
                title: 'The request is missing required fields or contains invalid data.',
                status: 422,
                detail:
                  'BalanceAccountHolder PeterPanInactive has invalid account status inactive.',
                requestId: 'req123456789',
              },
            },
            'invalid-transfer-instrument-error-response': {
              summary: 'Invalid transfer instrument error response',
              description: 'Error response when transfer instrument is invalid',
              value: {
                type: 'https://docs.adyen.com/errors/validation',
                errorCode: '29_001',
                title: 'The request is missing required fields or contains invalid data.',
                status: 422,
                detail: 'Invalid Transfer instrument with id 00000000-0000-0000-0000-000000000000',
                requestId: 'req123456789',
              },
            },
            'missing-capability-error-response': {
              summary: 'Missing capability error response',
              description: 'Error response when required capability is missing',
              value: {
                type: 'https://docs.adyen.com/errors/validation',
                errorCode: '29_001',
                title: 'The request is missing required fields or contains invalid data.',
                status: 422,
                detail:
                  'Missing Capabilities [receiveFromTransferInstrument] for BalanceAccountHolder.PeterPanWithoutTransferInstrument',
                requestId: 'req123456789',
              },
            },
            'validation-error-response': {
              summary: 'Validation error response',
              description: 'Error response for request validation failures',
              value: {
                type: 'https://docs.adyen.com/errors/validation',
                errorCode: '29_001',
                title: 'The request is missing required fields or contains invalid data.',
                status: 422,
                detail: 'No routes could be found using the provided sweep.',
                requestId: 'req123456789',
              },
            },
          },
        },
      },
    },
  },
})

export const getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsRoute = createRoute({
  method: 'get',
  path: '/balanceAccounts/{balanceAccountId}/sweeps/{sweepId}/executions',
  tags: ['Custom payout schedules (sweeps)'],
  summary: 'View executions of a custom payout schedule',
  description:
    'Returns a paginated list of executions of a custom payout schedule on a balance account. You can use query parameters to filter the executions that are returned in the list.',
  operationId: 'get-balanceAccounts-balanceAccountId-sweeps-sweepId-executions',
  request: {
    params: z.object({
      balanceAccountId: z
        .string()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      sweepId: z
        .string()
        .openapi({
          param: {
            name: 'sweepId',
            in: 'path',
            description: 'The unique identifier of the sweep configuration.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      results: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'results',
            in: 'query',
            description:
              'Contains a comma-separated list of sweep execution results. If included, the response returns only sweep executions with the specified results.\n\nPossible results:\n- **succeeded**: The sweep payout was completed successfully.\n- **failed**: The sweep payout was not completed due to an error.\n- **skipped**: The sweep payout was not triggered as expected.',
            required: false,
            style: 'form',
            explode: false,
            schema: { type: 'string' },
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
          z.int32().min(10),
        )
        .default(10)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description:
              'The number of items returned per page. By default, the response returns 10 items per page.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', default: 10, minimum: 10 },
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description:
              'The cursor from the `next` or `previous` pagination link in the previous response.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: PayoutSweepExecutionsSchema,
          examples: {
            'list-sweep-executions': {
              summary: 'Sweep executions retrieved',
              description: 'Example response when retrieving executions of a sweep.',
              value: {
                sweepExecutions: [
                  {
                    id: 'SWPE12345678901234567890123456',
                    triggeredAt: '2026-02-16T08:00:00Z',
                    result: 'succeeded',
                    resultDetails: { transferId: '4VXLNP68FCFE5FQ1' },
                  },
                ],
                link: {
                  next: {
                    href: 'https://balanceplatform-api-test.adyen.com/bcl/v2/balanceAccounts/BA000000000000000000001/sweeps/SWPC000000000000000000001/executions?limit=10&cursor=eyJvZmZzZXQiOjEwfQ',
                  },
                },
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'Not Found - the resource was not found',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getBalanceAccountsIdTransferLimitsRoute = createRoute({
  method: 'get',
  path: '/balanceAccounts/{id}/transferLimits',
  tags: ['Transfer limits - balance account level'],
  summary: 'Filter and view the transfer limits',
  description:
    "Filter and view the transfer limits configured for a balance account using the balance account's unique `id` and the available query parameters.\n",
  operationId: 'get-balanceAccounts-id-transferLimits',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      scope: ScopeSchema.openapi({
        param: {
          name: 'scope',
          in: 'query',
          description:
            'The scope to which the transfer limit applies. Possible values:\n* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.\n* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day.',
          required: false,
          style: 'form',
          explode: true,
          schema: { $ref: '#/components/schemas/Scope' },
        },
      }).exactOptional(),
      transferType: TransferTypeSchema.openapi({
        param: {
          name: 'transferType',
          in: 'query',
          description:
            'The type of transfer to which the limit applies. Possible values:\n* **instant**: the limit applies to transfers with an **instant** priority.\n* **all**: the limit applies to all transfers, regardless of priority.',
          required: false,
          style: 'form',
          explode: true,
          schema: { $ref: '#/components/schemas/TransferType' },
        },
      }).exactOptional(),
      status: LimitStatusSchema.openapi({
        param: {
          name: 'status',
          in: 'query',
          description:
            'The status of the transfer limit. Possible values:   \n* **active**: the limit is currently active.\n* **inactive**: the limit is currently inactive.\n* **pendingSCA**: the limit is pending until your user performs SCA.\n* **scheduled**: the limit is scheduled to become active at a future date.',
          required: false,
          style: 'form',
          explode: true,
          schema: { $ref: '#/components/schemas/LimitStatus' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: TransferLimitListResponseSchema,
          examples: {
            'Response code 200: list of transfer limits': {
              summary: 'Response code 200: list of transfer limits',
              description: 'Response code 200: list of transfer limits',
              value: {
                transferLimits: [
                  {
                    amount: { currency: 'EUR', value: 10000 },
                    endsAt: '2026-08-13T23:00:00+01:00',
                    id: 'TRLI00000000000000000000000001',
                    limitStatus: 'active',
                    reference: 'Your reference for the transfer limit',
                    scaInformation: { exemption: 'initialLimit', status: 'notPerformed' },
                    scope: 'perTransaction',
                    startsAt: '2025-08-13T23:00:00+01:00',
                    transferType: 'instant',
                  },
                  {
                    amount: { currency: 'EUR', value: 20000 },
                    endsAt: '2026-08-13T23:00:00+01:00',
                    id: 'TRLI00000000000000000000000002',
                    limitStatus: 'active',
                    reference: 'Your reference for the transfer limit',
                    scaInformation: { exemption: 'initialLimit', status: 'notPerformed' },
                    scope: 'perTransaction',
                    startsAt: '2025-08-13T23:00:00+01:00',
                    transferType: 'all',
                  },
                ],
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found - One of the transfer limits could not be found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Content - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const postBalanceAccountsIdTransferLimitsRoute = createRoute({
  method: 'post',
  path: '/balanceAccounts/{id}/transferLimits',
  tags: ['Transfer limits - balance account level'],
  summary: 'Create a transfer limit',
  description:
    'Create a transfer limit for your balance account using the unique `id` of your balance account.\n',
  operationId: 'post-balanceAccounts-id-transferLimits',
  request: {
    headers: z.object({
      'WWW-Authenticate': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'WWW-Authenticate',
            in: 'header',
            description: 'Header for authenticating through SCA',
            required: false,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
            example:
              'SCA realm="TransferLimit" auth-param1="eyJjaGFsbGVuZ2UiOiJiVlV6ZW5wek0waFNl..."',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: CreateTransferLimitRequestSchema,
          examples: {
            'Create a transfer limit request': {
              summary: 'Create a transfer limit request',
              description: 'Create a transfer limit request',
              value: {
                amount: { currency: 'EUR', value: 10000 },
                reference: 'Your reference for the transfer limit',
                scaInformation: { scaOnApproval: true },
                scope: 'perTransaction',
                startsAt: '2025-08-15T06:36:20+01:00',
                endsAt: '2026-08-14T00:00:00+01:00',
                transferType: 'all',
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
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: TransferLimitSchema,
          examples: {
            'Create a transfer limit response': {
              summary: 'Create a transfer limit response',
              description: 'Create a transfer limit response',
              value: {
                amount: { currency: 'EUR', value: 10000 },
                endsAt: '2026-08-13T23:00:00+01:00',
                id: 'TRLI00000000000000000000000001',
                limitStatus: 'pendingSCA',
                reference: 'Your reference for the transfer limit',
                scaInformation: { status: 'pending' },
                scope: 'perTransaction',
                startsAt: '2025-08-15T06:36:20+01:00',
                transferType: 'all',
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request - The input is invalid, or no registered device for SCA was found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    401: {
      description:
        'Unauthorized - Authentication required via Strong Customer Authentication (SCA). The client must resolve the provided challenge.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      headers: z.object({
        'WWW-Authenticate': {
          description:
            'SCA challenge header containing the details necessary for completing authentication. The client should solve the challenge contained.',
          required: true,
          style: 'simple',
          schema: z
            .string()
            .openapi({
              description:
                'SCA challenge header containing the details necessary for completing authentication. The client should solve the challenge contained.',
            }),
        },
      }),
    },
    422: {
      description: 'Unprocessable Content - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const postBalanceAccountsIdTransferLimitsApproveRoute = createRoute({
  method: 'post',
  path: '/balanceAccounts/{id}/transferLimits/approve',
  tags: ['Transfer limits - balance account level'],
  summary: 'Approve pending transfer limits',
  description: 'Approve transfer limits that are pending SCA authentication.\n',
  operationId: 'post-balanceAccounts-id-transferLimits-approve',
  request: {
    headers: z.object({
      'WWW-Authenticate': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'WWW-Authenticate',
            in: 'header',
            description: 'Header for authenticating using SCA.',
            required: false,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
            example:
              'SCA realm="TransferLimit" auth-param1="eyJjaGFsbGVuZ2UiOiJiVlV6ZW5wek0waFNl..."',
          },
        }),
    }),
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ApproveTransferLimitRequestSchema,
          examples: {
            'Approve pending transfer limits requests': {
              summary: 'Approve pending transfer limits requests',
              description: 'Approve pending transfer limits requests',
              value: {
                transferLimitIds: [
                  'TRLI00000000000000000000000001',
                  'TRLI00000000000000000000000002',
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
    204: { description: 'No Content - The request has succeeded.' },
    401: {
      description:
        'Unauthorized - Authentication required via Strong Customer Authentication (SCA). The client must resolve the provided challenge.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      headers: z.object({
        'WWW-Authenticate': {
          description:
            'SCA challenge header containing the details necessary for completing authentication. The client should solve the challenge contained.',
          required: true,
          style: 'simple',
          schema: z
            .string()
            .openapi({
              description:
                'SCA challenge header containing the details necessary for completing authentication. The client should solve the challenge contained.',
            }),
        },
      }),
    },
    404: {
      description: 'Not found - One of the transfer limits could not be found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Content - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getBalanceAccountsIdTransferLimitsCurrentRoute = createRoute({
  method: 'get',
  path: '/balanceAccounts/{id}/transferLimits/current',
  tags: ['Transfer limits - balance account level'],
  summary: 'Get all current transfer limits',
  description:
    'Get all transfer limits that currently apply to a balance account using the unique `id` of the balance account.\n',
  operationId: 'get-balanceAccounts-id-transferLimits-current',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      scope: ScopeSchema.openapi({
        param: {
          name: 'scope',
          in: 'query',
          description:
            'The scope to which the transfer limit applies. Possible values:\n* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.\n* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day.',
          required: false,
          style: 'form',
          explode: true,
          schema: { $ref: '#/components/schemas/Scope' },
        },
      }).exactOptional(),
      transferType: TransferTypeSchema.openapi({
        param: {
          name: 'transferType',
          in: 'query',
          description:
            'The type of transfer to which the limit applies. Possible values:\n* **instant**: the limit applies to transfers with an **instant** priority.\n* **all**: the limit applies to all transfers, regardless of priority.',
          required: false,
          style: 'form',
          explode: true,
          schema: { $ref: '#/components/schemas/TransferType' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: TransferLimitListResponseSchema,
          examples: {
            'Response code 200: list of current transfer limits': {
              summary: 'Response code 200: list of current transfer limits',
              description: 'Response code 200: list of current transfer limits',
              value: {
                transferLimits: [
                  {
                    amount: { currency: 'EUR', value: 10000 },
                    endsAt: '2026-08-13T23:00:00+01:00',
                    id: 'TRLI00000000000000000000000001',
                    limitStatus: 'active',
                    reference: 'Your reference for the transfer limit',
                    scaInformation: { exemption: 'initialLimit', status: 'notPerformed' },
                    scope: 'perDay',
                    startsAt: '2025-08-13T23:00:00+01:00',
                    transferType: 'instant',
                  },
                ],
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found - One of the transfer limits could not be found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Content - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getBalanceAccountsIdTransferLimitsTransferLimitIdRoute = createRoute({
  method: 'get',
  path: '/balanceAccounts/{id}/transferLimits/{transferLimitId}',
  tags: ['Transfer limits - balance account level'],
  summary: 'Get the details of a transfer limit',
  description: 'Get the details of a transfer limit using its unique `transferLimitId`.\n',
  operationId: 'get-balanceAccounts-id-transferLimits-transferLimitId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      transferLimitId: z
        .string()
        .openapi({
          param: {
            name: 'transferLimitId',
            in: 'path',
            description: 'The unique identifier of the transfer limit.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: TransferLimitSchema,
          examples: {
            'Response code 200: transfer limit details': {
              summary: 'Response code 200: transfer limit details',
              description: 'Response code 200: transfer limit details',
              value: {
                amount: { currency: 'EUR', value: 10000 },
                endsAt: '2026-08-13T23:00:00+01:00',
                id: 'TRLI00000000000000000000000001',
                limitStatus: 'active',
                reference: 'Your reference for the transfer limit',
                scaInformation: { exemption: 'initialLimit', status: 'notPerformed' },
                scope: 'perTransaction',
                startsAt: '2025-08-13T23:00:00+01:00',
                transferType: 'all',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found - One of the transfer limits could not be found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Content - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const deleteBalanceAccountsIdTransferLimitsTransferLimitIdRoute = createRoute({
  method: 'delete',
  path: '/balanceAccounts/{id}/transferLimits/{transferLimitId}',
  tags: ['Transfer limits - balance account level'],
  summary: 'Delete a scheduled or pending transfer limit',
  description:
    'Delete a scheduled or pending transfer limit using its unique `transferLimitId`. You cannot delete an active limit.\n',
  operationId: 'delete-balanceAccounts-id-transferLimits-transferLimitId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance account.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      transferLimitId: z
        .string()
        .openapi({
          param: {
            name: 'transferLimitId',
            in: 'path',
            description: 'The unique identifier of the transfer limit.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content - The request has succeeded.' },
    404: {
      description: 'Not found - One of the transfer limits could not be found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Content - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getBalancePlatformsBalancePlatformIdPayoutSchedulesRoute = createRoute({
  method: 'get',
  path: '/balancePlatforms/{balancePlatformId}/payoutSchedules',
  tags: ['Managed payout schedules'],
  summary: 'Get all managed payout schedules on your balance platform',
  description:
    'Returns a list of all the payout schedules that are configured for your balance platform. You can use query parameters to filter the elements that are returned in the list.',
  operationId: 'get-balancePlatforms-balancePlatformId-payoutSchedules',
  request: {
    params: z.object({
      balancePlatformId: z
        .string()
        .openapi({
          param: {
            name: 'balancePlatformId',
            in: 'path',
            description: 'The unique identifier of the balance platform.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      countryCode: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'countryCode',
            in: 'query',
            description:
              'The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the country to which the payout configuration applies.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      currency: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'currency',
            in: 'query',
            description:
              'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes) of the currency used in the payout configuration.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformConfigurationsSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'Not Found - the resource was not found',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getBalancePlatformsBalancePlatformIdPayoutSchedulesIdRoute = createRoute({
  method: 'get',
  path: '/balancePlatforms/{balancePlatformId}/payoutSchedules/{id}',
  tags: ['Managed payout schedules'],
  summary: 'Get a specific managed payout schedule on your balance platform',
  description: 'Returns the specified managed payout schedule configured on your balance platform.',
  operationId: 'get-balancePlatforms-balancePlatformId-payoutSchedules-id',
  request: {
    params: z.object({
      balancePlatformId: z
        .string()
        .openapi({
          param: {
            name: 'balancePlatformId',
            in: 'path',
            description: 'The unique identifier of the balance platform.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The unique identifier of the payout configuration for your balance platform.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: { 'application/json': { schema: BalancePlatformConfigurationSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'Not Found - the resource was not found',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRoute = createRoute({
  method: 'get',
  path: '/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings',
  tags: ['Balances'],
  summary: 'Get all balance webhook settings',
  description:
    'Returns all balance webhook settings configured for triggering [balance webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).',
  operationId: 'get-balancePlatforms-balancePlatformId-webhooks-webhookId-settings',
  request: {
    params: z.object({
      balancePlatformId: z
        .string()
        .openapi({
          param: {
            name: 'balancePlatformId',
            in: 'path',
            description: 'The unique identifier of the balance platform.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      webhookId: z
        .string()
        .openapi({
          param: {
            name: 'webhookId',
            in: 'path',
            description: 'The unique identifier of the balance webhook.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: WebhookSettingsSchema,
          examples: {
            'get-webhook-settings-200': {
              summary: 'Get all webhook settings',
              description: 'Retrieve all settings of a webhook',
              value: {
                webhookSettings: [
                  {
                    id: 'BWHS00000000000000000000000001',
                    type: 'balance',
                    target: { type: 'balancePlatform', id: 'YOUR_BALANCE_PLATFORM' },
                    currency: 'USD',
                    status: 'active',
                    conditions: [
                      { balanceType: 'available', conditionType: 'lessThan', value: 500000 },
                    ],
                  },
                  {
                    id: 'BWHS00000000000000000000000002',
                    type: 'balance',
                    target: { type: 'balanceAccount', id: 'BA00000000000000000LIABLE' },
                    currency: 'USD',
                    status: 'active',
                    conditions: [
                      { balanceType: 'available', conditionType: 'greaterThan', value: 1000000 },
                    ],
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'Not Found - the payment was not found',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRoute = createRoute({
  method: 'post',
  path: '/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings',
  tags: ['Balances'],
  summary: 'Create a balance webhook setting',
  description:
    'Configures the criteria for triggering [balance webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/1/post/balancePlatform.balanceAccount.balance.updated).\n\nAdyen sends balance webhooks to notify you of balance changes in your balance platform. They can be triggered when the balance reaches, exceeds, or drops below a specific value in a specific currency.\n\nYou can get notified about balance changes in your entire balance platform, in the balance accounts of a specific user, or a specific balance account. The hierarchy between the webhook settings are based on the following business logic:\n\n* Settings on a higher level apply to all lower level resources (balance platform > account holder > balance acocunt).\n\n* The most granular setting overrides higher level settings (balance account > account holder > balance platform).',
  operationId: 'post-balancePlatforms-balancePlatformId-webhooks-webhookId-settings',
  request: {
    params: z.object({
      balancePlatformId: z
        .string()
        .openapi({
          param: {
            name: 'balancePlatformId',
            in: 'path',
            description: 'The unique identifier of the balance platform.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      webhookId: z
        .string()
        .openapi({
          param: {
            name: 'webhookId',
            in: 'path',
            description: 'The unique identifier of the balance webhook.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: BalanceWebhookSettingInfoSchema,
          examples: {
            'create-webhook-setting': {
              summary: 'Create a webhook setting',
              description: 'Create a webhook setting',
              value: {
                type: 'balance',
                target: { type: 'balanceAccount', id: 'BA00000000000000000LIABLE' },
                currency: 'USD',
                status: 'active',
                conditions: [
                  { balanceType: 'available', conditionType: 'lessThan', value: 500000 },
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
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: WebhookSettingSchema,
          examples: {
            'create-webhook-setting': {
              summary: 'Successfully created a webhook setting',
              description: 'Successfully created a webhook setting',
              value: {
                id: 'BWHS00000000000000000000000001',
                type: 'balance',
                target: { type: 'balanceAccount', id: 'BA00000000000000000LIABLE' },
                currency: 'USD',
                status: 'active',
                conditions: [
                  { balanceType: 'available', conditionType: 'lessThan', value: 500000 },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'Not Found - the payment was not found',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute =
  createRoute({
    method: 'get',
    path: '/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}',
    tags: ['Balances'],
    summary: 'Get a balance webhook setting by id',
    description:
      'Returns the details of a specific balance webhook setting configured for triggering [balance webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).',
    operationId: 'get-balancePlatforms-balancePlatformId-webhooks-webhookId-settings-settingId',
    request: {
      params: z.object({
        balancePlatformId: z
          .string()
          .openapi({
            param: {
              name: 'balancePlatformId',
              in: 'path',
              description: 'The unique identifier of the balance platform.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string' },
            },
          }),
        webhookId: z
          .string()
          .openapi({
            param: {
              name: 'webhookId',
              in: 'path',
              description: 'The unique identifier of the balance webhook.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string' },
            },
          }),
        settingId: z
          .string()
          .openapi({
            param: {
              name: 'settingId',
              in: 'path',
              description: 'The unique identifier of the balance webhook setting.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      200: {
        description: 'OK - the request has succeeded.',
        content: {
          'application/json': {
            schema: WebhookSettingSchema,
            examples: {
              'get-webhook-setting-by-id-200': {
                summary: 'Get a webhook setting',
                description: 'Retrieve the details of a webhook setting',
                value: {
                  id: 'BWHS00000000000000000000000001',
                  type: 'balance',
                  target: { type: 'balancePlatform', id: 'YOUR_BALANCE_PLATFORM' },
                  currency: 'USD',
                  status: 'active',
                  conditions: [
                    { balanceType: 'available', conditionType: 'lessThan', value: 500000 },
                  ],
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Bad Request - a problem reading or understanding the request.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      401: {
        description: 'Unauthorized - authentication required.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      403: {
        description: 'Forbidden - insufficient permissions to process the request.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      404: {
        description: 'Not Found - the payment was not found',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      422: {
        description: 'Unprocessable Entity - a request validation error.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      500: {
        description: 'Internal Server Error - the server could not process the request.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
    },
  })

export const deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute =
  createRoute({
    method: 'delete',
    path: '/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}',
    tags: ['Balances'],
    summary: 'Delete a balance webhook setting by id',
    description:
      'Deletes a balance webhook setting that contains the conditions for triggering [balance webhooks](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).',
    operationId: 'delete-balancePlatforms-balancePlatformId-webhooks-webhookId-settings-settingId',
    request: {
      params: z.object({
        balancePlatformId: z
          .string()
          .openapi({
            param: {
              name: 'balancePlatformId',
              in: 'path',
              description: 'The unique identifier of the balance platform.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string' },
            },
          }),
        webhookId: z
          .string()
          .openapi({
            param: {
              name: 'webhookId',
              in: 'path',
              description: 'The unique identifier of the balance webhook.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string' },
            },
          }),
        settingId: z
          .string()
          .openapi({
            param: {
              name: 'settingId',
              in: 'path',
              description: 'The unique identifier of the balance webhook setting.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string' },
            },
          }),
      }),
    },
    responses: {
      204: {
        description:
          'No Content - the request has been successfully processed, but there is no additional content.',
        content: {},
      },
      400: {
        description: 'Bad Request - a problem reading or understanding the request.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      401: {
        description: 'Unauthorized - authentication required.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      403: {
        description: 'Forbidden - insufficient permissions to process the request.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      404: {
        description: 'Not Found - the payment was not found',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      422: {
        description: 'Unprocessable Entity - a request validation error.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      500: {
        description: 'Internal Server Error - the server could not process the request.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
    },
  })

export const patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute =
  createRoute({
    method: 'patch',
    path: '/balancePlatforms/{balancePlatformId}/webhooks/{webhookId}/settings/{settingId}',
    tags: ['Balances'],
    summary: 'Update a balance webhook setting by id',
    description:
      'Updates the conditions the balance change needs to meet for Adyen to send a [balance webhook](https://docs.adyen.com/api-explorer/balance-webhooks/latest/post/balanceAccount.balance.updated).',
    operationId: 'patch-balancePlatforms-balancePlatformId-webhooks-webhookId-settings-settingId',
    request: {
      params: z.object({
        balancePlatformId: z
          .string()
          .openapi({
            param: {
              name: 'balancePlatformId',
              in: 'path',
              description: 'The unique identifier of the balance platform.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string' },
            },
          }),
        webhookId: z
          .string()
          .openapi({
            param: {
              name: 'webhookId',
              in: 'path',
              description: 'The unique identifier of the balance webhook.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string' },
            },
          }),
        settingId: z
          .string()
          .openapi({
            param: {
              name: 'settingId',
              in: 'path',
              description: 'The unique identifier of the balance webhook setting.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string' },
            },
          }),
      }),
      body: {
        content: {
          'application/json': {
            schema: BalanceWebhookSettingInfoUpdateSchema,
            examples: {
              'deactivate-webhook-setting': {
                summary: 'Deactivate a webhook setting',
                description: 'Deactivate a webhook setting',
                value: { type: 'balance', status: 'inactive' },
              },
              'update-webhook-setting': {
                summary: 'Update a webhook setting',
                description: 'Update a webhook setting',
                value: {
                  type: 'balance',
                  target: { type: 'balanceAccount', id: 'BA00000000000000000LIABLE' },
                  currency: 'USD',
                  status: 'active',
                  conditions: [
                    { balanceType: 'available', conditionType: 'lessThan', value: 500000 },
                    { balanceType: 'balance', conditionType: 'greaterThan', value: 1000000 },
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
      200: {
        description: 'OK - the request has succeeded.',
        content: {
          'application/json': {
            schema: WebhookSettingSchema,
            examples: {
              'deactivate-webhook-setting': {
                summary: 'Successfully deactivated a webhook setting',
                description: 'Successfully deactivated a webhook setting',
                value: {
                  type: 'balance',
                  id: 'BWHS00000000000000000000000001',
                  target: { type: 'balanceAccount', id: 'BA00000000000000000LIABLE' },
                  currency: 'USD',
                  status: 'inactive',
                  conditions: [
                    { balanceType: 'available', conditionType: 'lessThan', value: 500000 },
                    { balanceType: 'balance', conditionType: 'greaterThan', value: 1000000 },
                  ],
                },
              },
              'update-webhook-setting': {
                summary: 'Successfully updated a webhook setting',
                description: 'Successfully updated a webhook setting',
                value: {
                  type: 'balance',
                  id: 'BWHS00000000000000000000000001',
                  target: { type: 'balanceAccount', id: 'BA00000000000000000LIABLE' },
                  currency: 'USD',
                  status: 'active',
                  conditions: [
                    { balanceType: 'available', conditionType: 'lessThan', value: 500000 },
                    { balanceType: 'balance', conditionType: 'greaterThan', value: 1000000 },
                  ],
                },
              },
            },
          },
        },
      },
      400: {
        description: 'Bad Request - a problem reading or understanding the request.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      401: {
        description: 'Unauthorized - authentication required.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      403: {
        description: 'Forbidden - insufficient permissions to process the request.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      404: {
        description: 'Not Found - the payment was not found',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      422: {
        description: 'Unprocessable Entity - a request validation error.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
      500: {
        description: 'Internal Server Error - the server could not process the request.',
        content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      },
    },
  })

export const getBalancePlatformsIdTransferLimitsRoute = createRoute({
  method: 'get',
  path: '/balancePlatforms/{id}/transferLimits',
  tags: ['Transfer limits - balance platform level'],
  summary: 'Filter and view the transfer limits',
  description:
    "Filter and view the transfer limits configured for your balance platform using the balance platform's unique `id` and the available query parameters.\n",
  operationId: 'get-balancePlatforms-id-transferLimits',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance platform.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      scope: ScopeSchema.openapi({
        param: {
          name: 'scope',
          in: 'query',
          description:
            'The scope to which the transfer limit applies. Possible values:\n* **perTransaction**: you set a maximum amount for each transfer made from the balance account or balance platform.\n* **perDay**: you set a maximum total amount for all transfers made from the balance account or balance platform in a day.',
          required: false,
          style: 'form',
          explode: true,
          schema: { $ref: '#/components/schemas/Scope' },
        },
      }).exactOptional(),
      transferType: TransferTypeSchema.openapi({
        param: {
          name: 'transferType',
          in: 'query',
          description:
            'The type of transfer to which the limit applies. Possible values:\n* **instant**: the limit applies to transfers with an **instant** priority.\n* **all**: the limit applies to all transfers, regardless of priority.',
          required: false,
          style: 'form',
          explode: true,
          schema: { $ref: '#/components/schemas/TransferType' },
        },
      }).exactOptional(),
      status: LimitStatusSchema.openapi({
        param: {
          name: 'status',
          in: 'query',
          description:
            'The status of the transfer limit. Possible values:   \n* **active**: the limit is currently active.\n* **inactive**: the limit is currently inactive.\n* **pendingSCA**: the limit is pending until your user performs SCA.\n* **scheduled**: the limit is scheduled to become active at a future date.',
          required: false,
          style: 'form',
          explode: true,
          schema: { $ref: '#/components/schemas/LimitStatus' },
        },
      }).exactOptional(),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: TransferLimitListResponseSchema,
          examples: {
            'Response code 200: list of transfer limits': {
              summary: 'Response code 200: list of transfer limits',
              description: 'Response code 200: list of transfer limits',
              value: {
                transferLimits: [
                  {
                    amount: { currency: 'EUR', value: 10000 },
                    endsAt: '2026-08-13T23:00:00+01:00',
                    id: 'TRLI00000000000000000000000001',
                    limitStatus: 'active',
                    reference: 'Your reference for the transfer limit',
                    scaInformation: { exemption: 'initialLimit', status: 'notPerformed' },
                    scope: 'perTransaction',
                    startsAt: '2025-08-13T23:00:00+01:00',
                    transferType: 'instant',
                  },
                  {
                    amount: { currency: 'EUR', value: 20000 },
                    endsAt: '2026-08-13T23:00:00+01:00',
                    id: 'TRLI00000000000000000000000002',
                    limitStatus: 'active',
                    reference: 'Your reference for the transfer limit',
                    scaInformation: { exemption: 'initialLimit', status: 'notPerformed' },
                    scope: 'perTransaction',
                    startsAt: '2025-08-13T23:00:00+01:00',
                    transferType: 'all',
                  },
                ],
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found - One of the transfer limits could not be found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Content - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const postBalancePlatformsIdTransferLimitsRoute = createRoute({
  method: 'post',
  path: '/balancePlatforms/{id}/transferLimits',
  tags: ['Transfer limits - balance platform level'],
  summary: 'Create a transfer limit',
  description:
    'Create a transfer limit for your balance platform using the unique `id` of your balance platform.\n',
  operationId: 'post-balancePlatforms-id-transferLimits',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance platform.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: CreateTransferLimitRequestSchema,
          examples: {
            'Create a transfer limit request': {
              summary: 'Create a transfer limit request',
              description: 'Create a transfer limit request',
              value: {
                amount: { currency: 'EUR', value: 10000 },
                reference: 'Your reference for the transfer limit',
                scaInformation: { scaOnApproval: true },
                scope: 'perTransaction',
                startsAt: '2025-08-15T06:36:20+01:00',
                endsAt: '2026-08-14T00:00:00+01:00',
                transferType: 'all',
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
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: TransferLimitSchema,
          examples: {
            'Create a transfer limit response': {
              summary: 'Create a transfer limit response',
              description: 'Create a transfer limit response',
              value: {
                amount: { currency: 'EUR', value: 10000 },
                endsAt: '2026-08-13T23:00:00+01:00',
                id: 'TRLI00000000000000000000000001',
                limitStatus: 'pendingSCA',
                reference: 'Your reference for the transfer limit',
                scaInformation: { status: 'pending' },
                scope: 'perTransaction',
                startsAt: '2025-08-15T06:36:20+01:00',
                transferType: 'all',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found - One of the transfer limits could not be found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Content - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getBalancePlatformsIdTransferLimitsTransferLimitIdRoute = createRoute({
  method: 'get',
  path: '/balancePlatforms/{id}/transferLimits/{transferLimitId}',
  tags: ['Transfer limits - balance platform level'],
  summary: 'Get the details of a transfer limit',
  description: 'Get the details of a transfer limit using its unique `transferLimitId`.\n',
  operationId: 'get-balancePlatforms-id-transferLimits-transferLimitId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance platform.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      transferLimitId: z
        .string()
        .openapi({
          param: {
            name: 'transferLimitId',
            in: 'path',
            description: 'The unique identifier of the transfer limit.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: TransferLimitSchema,
          examples: {
            'Response code 200: transfer limit details': {
              summary: 'Response code 200: transfer limit details',
              description: 'Response code 200: transfer limit details',
              value: {
                amount: { currency: 'EUR', value: 10000 },
                endsAt: '2026-08-13T23:00:00+01:00',
                id: 'TRLI00000000000000000000000001',
                limitStatus: 'active',
                reference: 'Your reference for the transfer limit',
                scaInformation: { exemption: 'initialLimit', status: 'notPerformed' },
                scope: 'perTransaction',
                startsAt: '2025-08-13T23:00:00+01:00',
                transferType: 'all',
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not found - One of the transfer limits could not be found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Content - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const deleteBalancePlatformsIdTransferLimitsTransferLimitIdRoute = createRoute({
  method: 'delete',
  path: '/balancePlatforms/{id}/transferLimits/{transferLimitId}',
  tags: ['Transfer limits - balance platform level'],
  summary: 'Delete a scheduled or pending transfer limit',
  description:
    'Delete a scheduled or pending transfer limit using its unique `transferLimitId`. You cannot delete an active limit.\n',
  operationId: 'delete-balancePlatforms-id-transferLimits-transferLimitId',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the balance platform.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      transferLimitId: z
        .string()
        .openapi({
          param: {
            name: 'transferLimitId',
            in: 'path',
            description: 'The unique identifier of the transfer limit.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content - The request has succeeded.' },
    404: {
      description: 'Not found - One of the transfer limits could not be found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Content - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getMandatesRoute = createRoute({
  method: 'get',
  path: '/mandates',
  tags: ['Direct debit mandates'],
  summary: 'Get a list of mandates',
  description:
    'Returns a list of all [direct debit mandates](https://docs.adyen.com/business-accounts/accept-direct-debits-uk) created for a business account.',
  operationId: 'get-mandates',
  request: {
    query: z.object({
      balanceAccountId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'balanceAccountId',
            in: 'query',
            description:
              'The unique identifier of the balance account linked to the payment instrument.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      paymentInstrumentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'paymentInstrumentId',
            in: 'query',
            description: 'The unique identifier of the payment instrument linked to the mandate.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
      cursor: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'cursor',
            in: 'query',
            description: 'The pagination cursor returned in a previous GET `/mandates` request.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded',
      content: { 'application/json': { schema: ListMandatesResponseSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getMandatesMandateIdRoute = createRoute({
  method: 'get',
  path: '/mandates/{mandateId}',
  tags: ['Direct debit mandates'],
  summary: 'Get a specific mandate',
  description:
    'Returns the details of the specified [direct debit mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk).',
  operationId: 'get-mandates-mandateId',
  request: {
    params: z.object({
      mandateId: z
        .string()
        .openapi({
          param: {
            name: 'mandateId',
            in: 'path',
            description: 'The unique identifier of the mandate.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded',
      content: { 'application/json': { schema: MandateSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'The mandate was not found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const patchMandatesMandateIdRoute = createRoute({
  method: 'patch',
  path: '/mandates/{mandateId}',
  tags: ['Direct debit mandates'],
  summary: 'Amend a mandate',
  description:
    'Amend the specified [direct debit mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk).',
  operationId: 'patch-mandates-mandateId',
  request: {
    params: z.object({
      mandateId: z
        .string()
        .openapi({
          param: {
            name: 'mandateId',
            in: 'path',
            description: 'The unique identifier of the mandate.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MandateUpdateSchema } }, required: true },
  },
  responses: {
    202: { description: 'Accepted - The request has been accepted' },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'The mandate was not found',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const postMandatesMandateIdCancelRoute = createRoute({
  method: 'post',
  path: '/mandates/{mandateId}/cancel',
  tags: ['Direct debit mandates'],
  summary: 'Cancel a mandate',
  description:
    'Cancel a specified [direct debit mandate](https://docs.adyen.com/business-accounts/accept-direct-debits-uk).',
  operationId: 'post-mandates-mandateId-cancel',
  request: {
    params: z.object({
      mandateId: z
        .string()
        .openapi({
          param: {
            name: 'mandateId',
            in: 'path',
            description: 'The unique identifier of the mandate.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: { description: 'Accepted - The request has been accepted' },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'The mandate was not found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute = createRoute({
  method: 'get',
  path: '/paymentInstruments/{paymentInstrumentId}/authorisedCardUsers',
  tags: ['Authorized card users'],
  summary: 'Get authorized users for a card.',
  description: 'Returns the authorized users for a card.',
  operationId: 'get-paymentInstruments-paymentInstrumentId-authorisedCardUsers',
  request: {
    params: z.object({
      paymentInstrumentId: z
        .string()
        .openapi({
          param: {
            name: 'paymentInstrumentId',
            in: 'path',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful operation',
      content: {
        'application/json': {
          schema: AuthorisedCardUsersSchema,
          examples: {
            authorisedCardUsers: {
              summary: 'List of authorised users of the payment instrument.',
              description:
                'The response returned the list of authorised users of the payment instrument.',
              value: { legalEntityIds: ['LE328V522322685LV3KTNF35M', 'LE328SW223226B5LWVWNQ8THN'] },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authorisedCardUsers-401': {
              summary: 'Unauthorized',
              description: 'Authentication failed.',
              value: {
                type: 'https://docs.adyen.com/errors/unauthorized',
                title: 'Unauthorized',
                status: 401,
                errorCode: '00_401',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authorisedCardUsers-403': {
              summary: 'Forbidden',
              description:
                "Most commonly happens when user does not have sufficient roles or doesn't own requested resource.",
              value: {
                type: 'https://docs.adyen.com/errors/forbidden',
                errorCode: '00_403',
                title: 'Forbidden',
                detail: 'Not allowed for card partner yet.',
                requestId: 'd42c493b5176df89e51516c6060cc34c',
                status: 403,
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Not Found',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authorisedCardUsers-404': {
              summary: 'Entity not found',
              description: 'Given payment instrument or legal entities not found.',
              value: {
                type: 'https://docs.adyen.com/errors/not-found',
                errorCode: '999_404_001',
                title: 'Entity not found',
                detail:
                  'Given payment instrument does not exist in our system. PI: PI3222722322935MDMZ9J83KH',
                requestId: '2fd2bd9cd4739575c5c562f0ff1e7396',
                status: 404,
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authorisedCardUsers-422': {
              summary: 'Business constraint violation',
              description: 'Response returned when request fields were invalid.',
              value: {
                type: 'https://docs.adyen.com/errors/unprocessable-entity',
                errorCode: '999_422_002',
                title: 'Business constraint violation',
                detail: 'There is not any legal entity tied to this payment instrument.',
                requestId: '4949a74bb7be732e559808a8ac3a86fc',
                status: 422,
              },
            },
          },
        },
      },
    },
  },
})

export const postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute = createRoute({
  method: 'post',
  path: '/paymentInstruments/{paymentInstrumentId}/authorisedCardUsers',
  tags: ['Authorized card users'],
  summary: 'Create authorized users for a card.',
  description:
    'Assigns authorized users to a card. Users must have the **authorisedPaymentInstrumentUser** capability to be able to use the card.',
  operationId: 'post-paymentInstruments-paymentInstrumentId-authorisedCardUsers',
  request: {
    params: z.object({
      paymentInstrumentId: z
        .string()
        .openapi({
          param: {
            name: 'paymentInstrumentId',
            in: 'path',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: AuthorisedCardUsersSchema,
          examples: {
            authorisedCardUsers: {
              summary: 'Assigns authorised users to the payment instrument.',
              description:
                'The request to assign given authorised users to the payment instrument.',
              value: { legalEntityIds: ['LE328V522322685LV3KTNF35M', 'LE328SW223226B5LWVWNQ8THN'] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful operation' },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authorisedCardUsers-post-400': {
              summary: 'Bad request',
              description:
                'Response returned when request parsing has failed or some request fields were invalid.',
              value: {
                type: 'https://docs.adyen.com/errors/bad-request',
                errorCode: '999_400_000',
                title: 'Bad request',
                detail:
                  'Payment instrument already linked with legal entities. Please use patch method.',
                requestId: '24433d4ef9de1fa82be15274638f5d49',
                status: 400,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authorisedCardUsers-401': {
              summary: 'Unauthorized',
              description: 'Authentication failed.',
              value: {
                type: 'https://docs.adyen.com/errors/unauthorized',
                title: 'Unauthorized',
                status: 401,
                errorCode: '00_401',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authorisedCardUsers-403': {
              summary: 'Forbidden',
              description:
                "Most commonly happens when user does not have sufficient roles or doesn't own requested resource.",
              value: {
                type: 'https://docs.adyen.com/errors/forbidden',
                errorCode: '00_403',
                title: 'Forbidden',
                detail: 'Not allowed for card partner yet.',
                requestId: 'd42c493b5176df89e51516c6060cc34c',
                status: 403,
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authorisedCardUsers-post-422': {
              summary: 'Business constraint violation',
              description: 'Response returned when request fields were invalid.',
              value: {
                type: 'https://docs.adyen.com/errors/unprocessable-entity',
                errorCode: '999_422_002',
                title: 'Business constraint violation',
                detail: 'Given payment instrument is not a multi use payment instrument.',
                requestId: '4a7beaa203f673074e029916d4325602',
                status: 422,
              },
            },
          },
        },
      },
    },
  },
})

export const deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute = createRoute({
  method: 'delete',
  path: '/paymentInstruments/{paymentInstrumentId}/authorisedCardUsers',
  tags: ['Authorized card users'],
  summary: 'Delete the authorized users for a card.',
  description: 'Deletes the list of authorized users assigned to a card.',
  operationId: 'delete-paymentInstruments-paymentInstrumentId-authorisedCardUsers',
  request: {
    params: z.object({
      paymentInstrumentId: z
        .string()
        .openapi({
          param: {
            name: 'paymentInstrumentId',
            in: 'path',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Successful operation' },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authorisedCardUsers-401': {
              summary: 'Unauthorized',
              description: 'Authentication failed.',
              value: {
                type: 'https://docs.adyen.com/errors/unauthorized',
                title: 'Unauthorized',
                status: 401,
                errorCode: '00_401',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authorisedCardUsers-403': {
              summary: 'Forbidden',
              description:
                "Most commonly happens when user does not have sufficient roles or doesn't own requested resource.",
              value: {
                type: 'https://docs.adyen.com/errors/forbidden',
                errorCode: '00_403',
                title: 'Forbidden',
                detail: 'Not allowed for card partner yet.',
                requestId: 'd42c493b5176df89e51516c6060cc34c',
                status: 403,
              },
            },
          },
        },
      },
    },
  },
})

export const patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute = createRoute({
  method: 'patch',
  path: '/paymentInstruments/{paymentInstrumentId}/authorisedCardUsers',
  tags: ['Authorized card users'],
  summary: 'Update the authorized users for a card.',
  description:
    'Updates the list of authorized users for a card.\n\n>This request replaces all existing authorized users for the card.',
  operationId: 'patch-paymentInstruments-paymentInstrumentId-authorisedCardUsers',
  request: {
    params: z.object({
      paymentInstrumentId: z
        .string()
        .openapi({
          param: {
            name: 'paymentInstrumentId',
            in: 'path',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: AuthorisedCardUsersSchema,
          examples: {
            authorisedCardUsers: {
              summary: 'Updates authorised users of the payment instrument.',
              description:
                'The request replaces existing authorised users of the payment instrument with the ones in the request.',
              value: { legalEntityIds: ['LE328V522322685LV3KTNF35M', 'LE328SW223226B5LWVWNQ8THN'] },
            },
          },
        },
      },
      required: true,
    },
  },
  responses: {
    204: { description: 'Successful operation' },
    400: {
      description: 'Bad request',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authorisedCardUsers-patch-400': {
              summary: 'Bad request',
              description:
                'Response returned when request parsing has failed or some request fields were invalid.',
              value: {
                type: 'https://docs.adyen.com/errors/bad-request',
                errorCode: '999_400_000',
                title: 'Bad request',
                detail:
                  "Payment instrument hasn't linked with any legal entity reference Please use post method.",
                requestId: 'a852d1b1c0fcbb7177b3bd16a0a2f6d7',
                status: 400,
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authorisedCardUsers-401': {
              summary: 'Unauthorized',
              description: 'Authentication failed.',
              value: {
                type: 'https://docs.adyen.com/errors/unauthorized',
                title: 'Unauthorized',
                status: 401,
                errorCode: '00_401',
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authorisedCardUsers-403': {
              summary: 'Forbidden',
              description:
                "Most commonly happens when user does not have sufficient roles or doesn't own requested resource.",
              value: {
                type: 'https://docs.adyen.com/errors/forbidden',
                errorCode: '00_403',
                title: 'Forbidden',
                detail: 'Not allowed for card partner yet.',
                requestId: 'd42c493b5176df89e51516c6060cc34c',
                status: 403,
              },
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: {
        'application/json': {
          schema: DefaultErrorResponseEntitySchema,
          examples: {
            'authorisedCardUsers-patch-422': {
              summary: 'Business constraint violation',
              description: 'Response returned when request fields were invalid.',
              value: {
                type: 'https://docs.adyen.com/errors/unprocessable-entity',
                errorCode: '999_422_002',
                title: 'Business constraint violation',
                detail: 'Request must have maximum 10 legal entity reference.',
                requestId: 'aeadb5646efe065f5e027d2fb6b137ec',
                status: 422,
              },
            },
          },
        },
      },
    },
  },
})

export const getScaAssociationsRoute = createRoute({
  method: 'get',
  path: '/scaAssociations',
  tags: ['SCA association management'],
  summary: 'Get a list of devices associated with an entity',
  description: 'Returns a paginated list of the SCA devices associated with a specific entity.',
  operationId: 'get-scaAssociations',
  request: {
    query: z.object({
      entityType: ScaEntityTypeSchema.openapi({
        param: {
          name: 'entityType',
          in: 'query',
          description:
            'The type of entity you want to retrieve a list of associations for. \n\nPossible values: **accountHolder**, **legalEntity** or **paymentInstrument**.',
          required: true,
          style: 'form',
          explode: true,
          schema: { $ref: '#/components/schemas/ScaEntityType' },
        },
      }),
      entityId: z
        .string()
        .min(1)
        .max(100)
        .openapi({
          param: {
            name: 'entityId',
            in: 'query',
            description: 'The unique identifier of the entity.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'string', maxLength: 100, minLength: 1 },
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
          z.int32().min(1).max(10),
        )
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description: 'The number of items to have on a page. \n\nDefault: **5**.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32', maximum: 10, minimum: 1 },
          },
        }),
      pageNumber: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            name: 'pageNumber',
            in: 'query',
            description:
              'The index of the page to retrieve. The index of the first page is **0** (zero). \n\nDefault:  **0**.',
            required: true,
            style: 'form',
            explode: true,
            schema: { type: 'integer', format: 'int32' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - The request has succeeded.',
      content: {
        'application/json': {
          schema: ListAssociationsResponseSchema,
          examples: {
            'List SCA Associations Response': {
              summary: 'Response for listing SCA associations.',
              description:
                'This response provides a paginated list of Strong Customer Authentication (SCA) device information for an associated entity.',
              value: {
                _links: {
                  self: {
                    href: 'https://exampledomain.com/bcl/api/v2/scaAssociations?pageNumber=0&entityType=accountHolder&pageSize=10&entityId=AH3227J223222D5HHM4779X6X',
                  },
                },
                itemsTotal: 2,
                pagesTotal: 1,
                data: [
                  {
                    scaDeviceId: 'BSDR11111111111A1AAA1AAAAA1AA1',
                    scaDeviceName: 'Device 1',
                    scaDeviceType: 'ios',
                    entityType: 'accountHolder',
                    entityId: 'AH00000000000000000000001',
                    status: 'active',
                    createdAt: '2025-09-02T14:39:17.232Z',
                  },
                  {
                    scaDeviceId: 'BSDR22222222222B2BBB2BBBBB2BB2',
                    scaDeviceName: 'Device 2',
                    scaDeviceType: 'ios',
                    entityType: 'accountHolder',
                    entityId: 'AH00000000000000000000001',
                    status: 'pendingApproval',
                    createdAt: '2025-09-02T14:39:17.232Z',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad request - The request contains invalid input and fails validation.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    401: {
      description: 'Unauthorized - Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - Insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - The server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const deleteScaAssociationsRoute = createRoute({
  method: 'delete',
  path: '/scaAssociations',
  tags: ['SCA association management'],
  summary: 'Delete association to devices',
  description: 'Deletes one or more SCA associations for a device.',
  operationId: 'delete-scaAssociations',
  request: {
    headers: z.object({
      'WWW-Authenticate': z
        .string()
        .min(1)
        .max(20000)
        .openapi({
          param: {
            name: 'WWW-Authenticate',
            in: 'header',
            description: 'The header for authenticating through SCA.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', maxLength: 20000, minLength: 1 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: RemoveAssociationRequestSchema,
          examples: {
            'Remove SCA Association Request': {
              summary: 'Request to remove an SCA association.',
              description:
                'Use this request to remove an association from a Strong Customer Authentication (SCA) device.',
              value: {
                entityType: 'accountHolder',
                entityId: 'AH00000000000000000000001',
                scaDeviceIds: ['BSDR42XV3223223S5N6CDQDGH53M8H'],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    204: { description: 'No Content - Successful association deletion.' },
    401: {
      description: 'Unauthorized - Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      headers: z.object({
        'WWW-Authenticate': {
          description:
            'Authentication header, a string that you must pass to the authentication SDK to continue with the deletion process.',
          style: 'simple',
          schema: z
            .any()
            .exactOptional()
            .openapi({
              description:
                'Authentication header, a string that you must pass to the authentication SDK to continue with the deletion process.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden - Insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - The server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const patchScaAssociationsRoute = createRoute({
  method: 'patch',
  path: '/scaAssociations',
  tags: ['SCA association management'],
  summary: 'Approve a pending approval association',
  description: 'Approves a previously created association that is in a pending state.',
  operationId: 'patch-scaAssociations',
  request: {
    headers: z.object({
      'WWW-Authenticate': z
        .string()
        .min(1)
        .max(20000)
        .openapi({
          param: {
            name: 'WWW-Authenticate',
            in: 'header',
            description: 'The header for authenticating through SCA.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', maxLength: 20000, minLength: 1 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: ApproveAssociationRequestSchema,
          examples: {
            'Approve SCA Association Request': {
              summary: 'Request to approve a pending SCA association.',
              description:
                'Use this request to approve a pending association for a Strong Customer Authentication (SCA) device.',
              value: {
                status: 'active',
                entityType: 'accountHolder',
                entityId: 'AH00000000000000000000001',
                scaDeviceIds: ['BSDR42XV3223223S5N6CDQDGH53M8H'],
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - Successful approval',
      content: {
        'application/json': {
          schema: ApproveAssociationResponseSchema,
          examples: {
            'Approve SCA Association Response': {
              summary: 'Response for a successful SCA association approval.',
              description:
                'This response indicates that the SCA association has been successfully approved.',
              value: {
                scaAssociations: [
                  {
                    scaDeviceId: 'BSDR42XV3223223S5N6CDQDGH53M8H',
                    entityType: 'accountHolder',
                    entityId: 'AH00000000000000000000001',
                    status: 'active',
                  },
                ],
              },
            },
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
      headers: z.object({
        'WWW-Authenticate': {
          description:
            'Authentication header, a string that you must pass to the authentication SDK to continue with the association approval process.',
          style: 'simple',
          schema: z
            .any()
            .exactOptional()
            .openapi({
              description:
                'Authentication header, a string that you must pass to the authentication SDK to continue with the association approval process.',
              param: { required: false },
            }),
        },
      }),
    },
    403: {
      description: 'Forbidden - Insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - The server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const postScaDevicesRoute = createRoute({
  method: 'post',
  path: '/scaDevices',
  tags: ['SCA device management'],
  summary: 'Begin SCA device registration',
  description:
    'Begins the registration process for a new Strong Customer Authentication (SCA) device.',
  operationId: 'post-scaDevices',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BeginScaDeviceRegistrationRequestSchema,
          examples: {
            'Begin SCA Device Registration Request': {
              summary: 'Request to begin SCA device registration.',
              description:
                'Use this request to start the registration process for a new Strong Customer Authentication (SCA) device.',
              value: {
                name: 'My Device',
                sdkOutput:
                  'eyJjaGFsbGVuZ2UiOiJVWEZaTURONGNXWjZUVFExUlhWV2JuaEJPVzVzTm05cVVEUktUbFZtZGtrPSJ9',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description:
        "Created - A device resource is created. The initial step of registration is complete, but the device isn't ready for use.",
      content: {
        'application/json': {
          schema: BeginScaDeviceRegistrationResponseSchema,
          examples: {
            'Begin SCA Device Registration Response': {
              summary: 'Response for beginning SCA device registration.',
              description:
                'This response is returned after successfully initiating the SCA device registration process.',
              value: {
                scaDevice: { id: 'BSDR42XV3223223S5N6CDQDGH53M8H', name: 'My Device', type: 'ios' },
                sdkInput:
                  'eyJjaGFsbGVuZ2UiOiJVWEZaTURONGNXWjZUVFExUlhWV2JuaEJPVzVzTm05cVVEUktUbFZtZGtrPSJ9',
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request - The request contains invalid input and fails validation.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    401: {
      description: 'Unauthorized - Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - Insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - The server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const deleteScaDevicesDeviceIdRoute = createRoute({
  method: 'delete',
  path: '/scaDevices/{deviceId}',
  tags: ['SCA device management'],
  summary: 'Delete an SCA device',
  description: 'Deletes a Strong Customer Authentication (SCA) device.',
  operationId: 'delete-scaDevices-deviceId',
  request: {
    params: z.object({
      deviceId: z
        .string()
        .length(30)
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            description: 'The unique identifier of the SCA device to delete.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', maxLength: 30, minLength: 30 },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'No Content - The device was deleted successfully.' },
    400: {
      description: 'Bad Request - The request contains invalid input and fails validation.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    401: {
      description: 'Unauthorized - Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - Insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'Not Found - Device not found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - The server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const patchScaDevicesDeviceIdRoute = createRoute({
  method: 'patch',
  path: '/scaDevices/{deviceId}',
  tags: ['SCA device management'],
  summary: 'Finish registration process for a SCA device',
  description:
    'Finishes the registration process for a new Strong Customer Authentication (SCA) device.',
  operationId: 'patch-scaDevices-deviceId',
  request: {
    params: z.object({
      deviceId: z
        .string()
        .length(30)
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            description:
              'The unique identifier of the SCA device that you are associating with a resource.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', maxLength: 30, minLength: 30 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: FinishScaDeviceRegistrationRequestSchema,
          examples: {
            'Finish SCA Device Registration Request': {
              summary: 'Request to finish SCA device registration.',
              description: 'Use this request to finish the registration of an SCA device.',
              value: {
                sdkOutput:
                  'eyJjaGFsbGVuZ2UiOiJVWEZaTURONGNXWjZUVFExUlhWV2JuaEJPVzVzTm05cVVEUktUbFZtZGtrPSJ9',
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - Device registration was completed successfully.',
      content: {
        'application/json': {
          schema: FinishScaDeviceRegistrationResponseSchema,
          examples: {
            'Finish SCA Device Registration Response': {
              summary: 'Response for finishing SCA device registration.',
              description:
                'This response is returned after successfully completing the SCA device registration process.',
              value: {
                scaDevice: { id: 'BSDR42XV3223223S5N6CDQDGH53M8H', name: 'Device', type: 'ios' },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request - The request contains invalid input and fails validation.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    401: {
      description: 'Unauthorized - Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - Insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'Not Found - Device not found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - The server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})

export const postScaDevicesDeviceIdScaAssociationsRoute = createRoute({
  method: 'post',
  path: '/scaDevices/{deviceId}/scaAssociations',
  tags: ['SCA device management'],
  summary: 'Create a new SCA association for a device',
  description:
    'Creates an association between an SCA-enabled device and an entity, such as an account holder. This action does not guarantee the association is immediately ready for use; its status may be `pendingApproval` if the account holder has existing devices. If the entity is configured to allow only a single associated device and single-device replacement is enabled for your account, the new association immediately replaces the existing one: its status is `active` and the previously associated device is no longer associated.',
  operationId: 'post-scaDevices-deviceId-scaAssociations',
  request: {
    params: z.object({
      deviceId: z
        .string()
        .length(30)
        .openapi({
          param: {
            name: 'deviceId',
            in: 'path',
            description:
              'The unique identifier of the SCA device that you are associating with a resource.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string', maxLength: 30, minLength: 30 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: SubmitScaAssociationRequestSchema,
          examples: {
            'Submit SCA Association Request': {
              summary: 'Request to create a new SCA association.',
              description:
                'Use this request to create an association between an SCA device and an entity.',
              value: { entities: [{ type: 'accountHolder', id: 'AH00000000000000000000001' }] },
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created - Association created.',
      content: {
        'application/json': {
          schema: SubmitScaAssociationResponseSchema,
          examples: {
            'Submit SCA Association Response': {
              summary: 'Response for a new SCA association.',
              description:
                'This response is returned after successfully creating a new SCA association.',
              value: {
                scaAssociations: [
                  {
                    scaDeviceId: 'BSDR11111111111A1AAA1AAAAA1AA1',
                    entityType: 'accountHolder',
                    entityId: 'AH00000000000000000000001',
                    status: 'pendingApproval',
                  },
                ],
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Bad Request - The request contains invalid input and fails validation.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    401: {
      description: 'Unauthorized - Authentication required.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    403: {
      description: 'Forbidden - Insufficient permissions to process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    404: {
      description: 'Not Found - Device not found.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    422: {
      description: 'Unprocessable Entity - A request validation error.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
    500: {
      description: 'Internal Server Error - The server could not process the request.',
      content: { 'application/json': { schema: DefaultErrorResponseEntitySchema } },
    },
  },
})
