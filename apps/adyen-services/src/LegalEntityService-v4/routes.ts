import { createRoute, z } from '@hono/zod-openapi'

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

const AcceptTermsOfServiceRequestSchema = z
  .strictObject({
    acceptedBy: z
      .string()
      .openapi({
        description:
          'The legal entity ID of the user accepting the Terms of Service.\n\nFor organizations, this must be the individual legal entity ID of an authorized signatory for the organization.\n\nFor sole proprietorships, this must be the individual legal entity ID of the owner.\n\nFor individuals, this must be the individual legal entity id of either the individual, parent, or guardian.\n\n',
      }),
    ipAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'The IP address of the user accepting the Terms of Service.' }),
  })
  .openapi({ required: ['acceptedBy'] })
  .openapi('AcceptTermsOfServiceRequest')

const AcceptTermsOfServiceResponseSchema = z
  .strictObject({
    acceptedBy: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the user that accepted the Terms of Service.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the Terms of Service acceptance.' }),
    ipAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'The IP address of the user that accepted the Terms of Service.' }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language used for the Terms of Service document, specified by the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. Possible value: **en** for English or **fr** for French.\n\nNote that French is only available for some integration types in certain countries/regions. Reach out to your Adyen contact for more information.',
      }),
    termsOfServiceDocumentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the Terms of Service document.' }),
    type: z
      .enum([
        'adyenAccount',
        'adyenCapital',
        'adyenCapitalCashAdvance',
        'adyenCard',
        'adyenChargeCard',
        'adyenForPlatformsAdvanced',
        'adyenForPlatformsManage',
        'adyenFranchisee',
        'adyenIssuing',
        'adyenPccr',
        'directDebit',
        'kycOnInvite',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of Terms of Service.\n\nPossible values:\n*  **adyenForPlatformsManage**\n*  **adyenIssuing**\n*  **adyenForPlatformsAdvanced**\n*  **adyenCapital**\n*  **adyenCapitalCashAdvance**\n*  **adyenAccount**\n*  **adyenCard**\n*  **adyenFranchisee**\n*  **adyenPccr**\n*  **adyenChargeCard**\n*  **kycOnInvite**\n*  **directDebit**\n\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('AcceptTermsOfServiceResponse')

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

const AddressSchema = z
  .strictObject({
    city: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the city. Required if `stateOrProvince` is provided.\n\nIf you specify the city, you must also send `postalCode` and `street`.\n\nThe city name must be at least 3 characters. If the city name contains only repeated characters, the minimum length is two characters. For example, Aa is accepted, but Aaaa is not.\n\nFor more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).',
      }),
    country: z
      .string()
      .openapi({
        description:
          'The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.',
      }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The postal code. Required if `stateOrProvince` and/or `city` is provided.\n\nWhen using alphanumeric postal codes, all letters must be uppercase. For example, 1234 AB or SW1A 1AA.',
      }),
    stateOrProvince: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-letter ISO 3166-2 state or province code. For example, **CA** in the US. Required for Australia and New Zealand.\n\nIf you specify the state or province, you must also send `city`, `postalCode`, and `street`.',
      }),
    street: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the street, and the house or building number. Must be at least 3 characters. Required if `stateOrProvince` and/or `city` is provided. For more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).',
      }),
    street2: z
      .string()
      .exactOptional()
      .openapi({ description: 'The apartment, unit, or suite number.' }),
  })
  .openapi({ required: ['country'] })
  .openapi('Address')

const AmountSchema = z
  .strictObject({
    currency: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of currency. Must be EUR (or EUR equivalent)' }),
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
        description: 'Total value of amount. Must be >= 0',
      }),
  })
  .openapi({ required: [] })
  .openapi('Amount')

const AttachmentSchema = z
  .strictObject({
    content: z.string().openapi({ description: 'The document in Base64-encoded string format.' }),
    contentType: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The file format.\n\n Possible values: **application/pdf**, **image/jpg**, **image/jpeg**, **image/png**. ',
        'x-deprecatedInVersion': '1',
      }),
    filename: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The name of the file including the file extension.',
        'x-deprecatedInVersion': '1',
      }),
    pageName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the file including the file extension.',
        'x-addedInVersion': '2',
      }),
    pageType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies which side of the ID card is uploaded.\n\n* If the `type` is **driversLicense** or **identityCard**, you must set this to **front** or **back** and include both sides in the same API request.\n\n* For any other types, when this is omitted, we infer the page number based on the order of attachments.',
      }),
  })
  .openapi({ required: ['content'] })
  .openapi('Attachment')

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

const BankAccountInfoSchema = z
  .strictObject({
    accountIdentification: z
      .xor([
        AULocalAccountIdentificationSchema,
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
      .exactOptional()
      .openapi({
        description: 'Identification of the bank account.',
        discriminator: {
          propertyName: 'type',
          mapping: {
            iban: '#/components/schemas/IbanAccountIdentification',
            numberAndBic: '#/components/schemas/NumberAndBicAccountIdentification',
            auLocal: '#/components/schemas/AULocalAccountIdentification',
            sgLocal: '#/components/schemas/SGLocalAccountIdentification',
            nzLocal: '#/components/schemas/NZLocalAccountIdentification',
            hkLocal: '#/components/schemas/HKLocalAccountIdentification',
            czLocal: '#/components/schemas/CZLocalAccountIdentification',
            noLocal: '#/components/schemas/NOLocalAccountIdentification',
            plLocal: '#/components/schemas/PLLocalAccountIdentification',
            huLocal: '#/components/schemas/HULocalAccountIdentification',
            seLocal: '#/components/schemas/SELocalAccountIdentification',
            ukLocal: '#/components/schemas/UKLocalAccountIdentification',
            usLocal: '#/components/schemas/USLocalAccountIdentification',
            dkLocal: '#/components/schemas/DKLocalAccountIdentification',
            caLocal: '#/components/schemas/CALocalAccountIdentification',
          },
        },
        'x-addedInVersion': '3',
      }),
    accountType: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The type of bank account.',
        'x-deprecatedInVersion': '2',
      }),
    bankName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The name of the banking institution where the bank account is held.',
      }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the bank account is registered. For example, **NL**.',
      }),
    trustedSource: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies if the bank account was created through [instant bank verification](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-08-hosted-onboarding).',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('BankAccountInfo')

const BirthDataSchema = z
  .strictObject({
    dateOfBirth: z
      .string()
      .exactOptional()
      .openapi({ description: "The individual's date of birth, in YYYY-MM-DD format." }),
  })
  .openapi({ required: [] })
  .openapi('BirthData')

const CapabilityProblemEntityRecursiveSchema = z
  .strictObject({
    documents: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of document IDs corresponding to the verification errors from capabilities.',
      }),
    id: z.string().exactOptional(),
    type: z.enum(['BankAccount', 'Document', 'LegalEntity', 'product']).exactOptional(),
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
          'List of document IDs corresponding to the verification errors from capabilities.',
      }),
    id: z.string().exactOptional(),
    owner: CapabilityProblemEntityRecursiveSchema.exactOptional(),
    type: z.enum(['BankAccount', 'Document', 'LegalEntity', 'product']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CapabilityProblemEntity')

const RemediatingActionSchema = z
  .strictObject({ code: z.string().exactOptional(), message: z.string().exactOptional() })
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
        description:
          'Contains key-value pairs that specify the actions that the legal entity can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing.The value is an object containing the settings for the capability.',
      }),
    code: z.string().exactOptional().openapi({ description: 'The general error code.' }),
    message: z.string().exactOptional().openapi({ description: 'The general error message.' }),
    type: z
      .enum(['dataMissing', 'dataReview', 'invalidInput', 'pendingStatus', 'rejected'])
      .exactOptional()
      .openapi({
        description:
          'The type of error.\n\nPossible values:\n*  **invalidInput**\n*  **dataMissing**\n*  **pendingStatus**\n*  **rejected**\n*  **dataReview**\n\n',
      }),
    remediatingActions: z
      .array(RemediatingActionSchema)
      .exactOptional()
      .openapi({
        description: 'An object containing possible solutions to fix a verification error.',
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
        description:
          'Contains key-value pairs that specify the actions that the legal entity can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing.The value is an object containing the settings for the capability.',
      }),
    code: z.string().exactOptional().openapi({ description: 'The general error code.' }),
    message: z.string().exactOptional().openapi({ description: 'The general error message.' }),
    remediatingActions: z
      .array(RemediatingActionSchema)
      .exactOptional()
      .openapi({
        description: 'An object containing possible solutions to fix a verification error.',
      }),
    subErrors: z
      .array(VerificationErrorRecursiveSchema)
      .exactOptional()
      .openapi({
        description:
          'An array containing more granular information about the cause of the verification error.',
      }),
    type: z
      .enum(['dataMissing', 'dataReview', 'invalidInput', 'pendingStatus', 'rejected'])
      .exactOptional()
      .openapi({
        description:
          'The type of error.\n\nPossible values:\n*  **invalidInput**\n*  **dataMissing**\n*  **pendingStatus**\n*  **rejected**\n*  **dataReview**\n\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('VerificationError')

const CapabilityProblemSchema = z
  .strictObject({
    entity: CapabilityProblemEntitySchema.exactOptional(),
    verificationErrors: z.array(VerificationErrorSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CapabilityProblem')

const FinancierSchema = z
  .strictObject({
    amount: AmountSchema.openapi({
      description: 'The amount of the funds the financier provided.',
    }),
    firstName: z.string().openapi({ description: "The financier's first name." }),
    lastName: z.string().openapi({ description: "The financier's last name." }),
    location: z
      .string()
      .openapi({
        description:
          'The city and country/region where the financier is currently located. For example: Chicago, USA',
      }),
  })
  .openapi({ required: ['amount', 'firstName', 'lastName', 'location'] })
  .openapi('Financier')

const SourceOfFundsSchema = z
  .strictObject({
    adyenProcessedFunds: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the funds are coming from transactions processed by Adyen. If **false**, the `type` is required.',
      }),
    amount: AmountSchema.exactOptional().openapi({
      description:
        'Required if `type` is **business**, **assetSale**, **gamblingWinnings** or **inheritance**.\n\nFor `type` **business**, provide the annual turn over of the business. For `type` **assetSale**, **gamblingWinnings** or **inheritance**, provide the amount of the funds.',
      'x-addedInVersion': '4',
    }),
    assetMonthsHeld: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of months that the asset has been in possession of the user.\n\nFor example, if the source of funds is of type **cryptocurrencyIncome** then `assetMonthsHeld` is the number of months the user has owned the cryptocurrency.',
        'x-addedInVersion': '4',
      }),
    cryptocurrencyExchange: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if `type` is **cryptocurrencyIncome**. The cryptocurrency exchange where the funds were acquired.',
        'x-addedInVersion': '4',
      }),
    dateOfFundsReceived: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Required if `type` is **donations** or **inheritance**. The date the funds were received, in YYYY-MM-DD format.',
        'x-addedInVersion': '4',
      }),
    dateOfSourceEvent: z.iso
      .date()
      .exactOptional()
      .openapi({
        description:
          'Required if `type` is **assetSale** or **gamblingWinnings**. The date the funds were received, in YYYY-MM-DD format.\n\nFor example, if the source of funds is of type **assetSale**, the dateOfSourceEvent is the date of the sale. If the source of funds is of type **gamblingWinnings**, the dateOfSourceEvent is the date of winnings.',
        'x-addedInVersion': '4',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if `type` is **business** or **assetSale**. A description for the source of funds.\n\nFor example, for `type` **business**, provide a description of where the business transactions come from, such as payments through bank transfer. For `type` **assetSale**, provide a description of the asset. For example, the address of a residential property if it is a property sale.',
      }),
    financiers: z
      .array(FinancierSchema)
      .exactOptional()
      .openapi({
        description:
          'Required if `type` is **thirdPartyFunding**. Information about the financiers.',
        'x-addedInVersion': '4',
      }),
    originatorLegalEntityId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if `type` is **donations** or **inheritance**. The legal entity ID representing the originator of the source of funds.\n\nFor example, if the source of funds is **inheritance**, then `originatorOfFundsReference` should be the legal entity reference of the benefactor.',
        'x-addedInVersion': '4',
      }),
    purpose: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Required if `type` is **donations**. The reason for receiving the funds.',
        'x-addedInVersion': '4',
      }),
    relationship: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if `type` is **donations** or **inheritance**. The relationship of the originator of the funds to the recipient.',
        'x-addedInVersion': '4',
      }),
    type: z
      .enum([
        'business',
        'employment',
        'donations',
        'inheritance',
        'financialAid',
        'rentalIncome',
        'dividendIncome',
        'royaltyIncome',
        'thirdPartyFunding',
        'pensionIncome',
        'insuranceSettlement',
        'cryptocurrencyIncome',
        'assetSale',
        'loans',
        'gamblingWinnings',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of the source of funds.\n\n\n\nPossible values:\n*  **business**\n*  **employment**\n*  **donations**\n*  **inheritance**\n*  **financialAid**\n*  **rentalIncome**\n*  **dividendIncome**\n*  **royaltyIncome**\n*  **thirdPartyFunding**\n*  **pensionIncome**\n*  **insuranceSettlement**\n*  **cryptocurrencyIncome**\n*  **assetSale**\n*  **loans**\n*  **gamblingWinnings**\n\n',
      }),
    website: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if `type` is **gamblingWinnings**. The location of the gambling site for the winnings.\n\nFor example, if the source of funds is online gambling, provide the website of the gambling company.',
        'x-addedInVersion': '4',
      }),
  })
  .openapi({ required: ['adyenProcessedFunds'] })
  .openapi('SourceOfFunds')

const WebDataSchema = z
  .strictObject({
    webAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the website or the app store URL.' }),
    webAddressId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the web address.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('WebData')

const WebDataExemptionSchema = z
  .strictObject({
    reason: z
      .enum(['noOnlinePresence', 'notCollectedDuringOnboarding'])
      .exactOptional()
      .openapi({
        description:
          'The reason why the web data was not provided. Possible value: **noOnlinePresence**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('WebDataExemption')

const BusinessLineSchema = z
  .strictObject({
    id: z
      .string()
      .openapi({ description: 'The unique identifier of the business line.', readOnly: true }),
    industryCode: z
      .string()
      .openapi({
        description:
          'A code that represents the industry of the legal entity for [marketplaces](https://docs.adyen.com/marketplaces/verification-requirements/reference-additional-products/#list-industry-codes) or [platforms](https://docs.adyen.com/platforms/verification-requirements/reference-additional-products/#list-industry-codes). For example, **4431A** for computer software stores.',
      }),
    industryCodeDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the industry code.', readOnly: true }),
    legalEntityId: z
      .string()
      .openapi({
        description:
          'Unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) that owns the business line.',
      }),
    problems: z
      .array(CapabilityProblemSchema)
      .exactOptional()
      .openapi({
        description: 'The verification errors related to capabilities for this supporting entity.',
        'x-addedInVersion': '3',
      }),
    salesChannels: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of channels where goods or services are sold.\n\nPossible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.\n\nRequired only in combination with the `service` **paymentProcessing**.',
      }),
    service: z
      .enum(['paymentProcessing', 'issuing', 'banking'])
      .openapi({
        description:
          'The service for which you are creating the business line.\n\n\n\nPossible values:\n*  **paymentProcessing**\n*  **issuing**\n*  **banking**\n\n',
        'x-addedInVersion': '3',
      }),
    sourceOfFunds: SourceOfFundsSchema.exactOptional().openapi({
      description:
        "Contains information about the source of your user's funds. Required only if the `service` is **banking** or **issuing**.",
    }),
    webData: z
      .array(WebDataSchema)
      .exactOptional()
      .openapi({
        description:
          "List of website URLs where your user's goods or services are sold. When this is required for a service but your user does not have an online presence, provide the reason in the `webDataExemption` object.",
      }),
    webDataExemption: WebDataExemptionSchema.exactOptional().openapi({
      description: 'The reason why the web data is not provided.',
    }),
  })
  .openapi({ required: ['id', 'industryCode', 'legalEntityId', 'service'] })
  .openapi('BusinessLine')

const BusinessLineInfoSchema = z
  .strictObject({
    industryCode: z
      .string()
      .openapi({
        description:
          'A code that represents the industry of the legal entity for [marketplaces](https://docs.adyen.com/marketplaces/verification-requirements/reference-additional-products/#list-industry-codes) or [platforms](https://docs.adyen.com/platforms/verification-requirements/reference-additional-products/#list-industry-codes). For example, **4431A** for computer software stores.',
      }),
    industryCodeDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the industry code.', readOnly: true }),
    legalEntityId: z
      .string()
      .openapi({
        description:
          'Unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) that owns the business line.',
      }),
    salesChannels: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of channels where goods or services are sold.\n\nPossible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.\n\nRequired only in combination with the `service` **paymentProcessing**.',
      }),
    service: z
      .enum(['paymentProcessing', 'issuing', 'banking'])
      .openapi({
        description:
          'The service for which you are creating the business line.\n\n\n\nPossible values:\n*  **paymentProcessing**\n*  **issuing**\n*  **banking**\n\n',
        'x-addedInVersion': '3',
      }),
    sourceOfFunds: SourceOfFundsSchema.exactOptional().openapi({
      description:
        "Contains information about the source of your user's funds. Required only if the `service` is **banking** or **issuing**.",
    }),
    webData: z
      .array(WebDataSchema)
      .exactOptional()
      .openapi({
        description:
          "List of website URLs where your user's goods or services are sold. When this is required for a service but your user does not have an online presence, provide the reason in the `webDataExemption` object.",
      }),
    webDataExemption: WebDataExemptionSchema.exactOptional().openapi({
      description: 'The reason why the web data is not provided.',
    }),
  })
  .openapi({ required: ['industryCode', 'legalEntityId', 'service'] })
  .openapi('BusinessLineInfo')

const BusinessLineInfoUpdateSchema = z
  .strictObject({
    industryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A code that represents the industry of your legal entity. For example, **4431A** for computer software stores.',
      }),
    industryCodeDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the industry code.', readOnly: true }),
    salesChannels: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of channels where goods or services are sold.\n\nPossible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.\n\nRequired only in combination with the `service` **paymentProcessing**.',
      }),
    sourceOfFunds: SourceOfFundsSchema.exactOptional().openapi({
      description:
        "Contains information about the source of your user's funds. Required only if the `service` is **banking** or **issuing**.",
    }),
    webData: z
      .array(WebDataSchema)
      .exactOptional()
      .openapi({
        description:
          "List of website URLs where your user's goods or services are sold. When this is required for a service but your user does not have an online presence, provide the reason in the `webDataExemption` object.",
      }),
    webDataExemption: WebDataExemptionSchema.exactOptional().openapi({
      description: 'The reason why the web data is not provided.',
    }),
  })
  .openapi({ required: [] })
  .openapi('BusinessLineInfoUpdate')

const BusinessLinesSchema = z
  .strictObject({
    businessLines: z.array(BusinessLineSchema).openapi({ description: 'List of business lines.' }),
  })
  .openapi({ required: ['businessLines'] })
  .openapi('BusinessLines')

const CalculatePciStatusRequestSchema = z
  .strictObject({
    additionalSalesChannels: z
      .array(z.enum(['eCommerce', 'ecomMoto', 'pos', 'posMoto']))
      .exactOptional()
      .openapi({
        description:
          'An array of additional sales channels to generate PCI questionnaires. Include the relevant sales channels if you need your user to sign PCI questionnaires. Not required if you [create stores](https://docs.adyen.com/platforms) and [add payment methods](https://docs.adyen.com/adyen-for-platforms-model) before you generate the questionnaires.\n\nPossible values:\n*  **eCommerce**\n*  **pos**\n*  **ecomMoto**\n*  **posMoto**\n\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('CalculatePciStatusRequest')

const CalculatePciStatusResponseSchema = z
  .strictObject({
    signingRequired: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the user is required to sign PCI questionnaires. If **false**, they do not need to sign any questionnaires.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CalculatePciStatusResponse')

const CalculateTermsOfServiceStatusResponseSchema = z
  .strictObject({
    termsOfServiceTypes: z
      .array(
        z.enum([
          'adyenAccount',
          'adyenCapital',
          'adyenCapitalCashAdvance',
          'adyenCard',
          'adyenChargeCard',
          'adyenForPlatformsAdvanced',
          'adyenForPlatformsManage',
          'adyenFranchisee',
          'adyenIssuing',
          'adyenPccr',
          'directDebit',
          'kycOnInvite',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'The type of Terms of Service that the legal entity needs to accept. If empty, no Terms of Service needs to be accepted.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CalculateTermsOfServiceStatusResponse')

const CapabilitySettingsSchema = z
  .strictObject({
    amountPerIndustry: z
      .record(z.string(), AmountSchema)
      .exactOptional()
      .openapi({ description: 'The maximum amount a card holder can spend per industry.' }),
    authorizedCardUsers: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'The number of card holders who can use the card.' }),
    fundingSource: z
      .array(z.enum(['credit', 'debit', 'prepaid']))
      .exactOptional()
      .openapi({ description: 'The funding source of the card, for example **debit**.' }),
    interval: z
      .enum(['daily', 'monthly', 'weekly'])
      .exactOptional()
      .openapi({ description: 'The period when the rule conditions apply.' }),
    maxAmount: AmountSchema.exactOptional().openapi({
      description: 'The maximum amount a card holder can withdraw per day.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CapabilitySettings')

const CheckTaxElectronicDeliveryConsentResponseSchema = z
  .strictObject({
    US1099k: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Consent to electronically deliver tax form US1099-K.' }),
  })
  .openapi({ required: [] })
  .openapi('CheckTaxElectronicDeliveryConsentResponse')

const DataReviewConfirmationResponseSchema = z
  .strictObject({
    dataReviewedAt: z
      .string()
      .exactOptional()
      .openapi({ description: 'Date when data review was confirmed.' }),
  })
  .openapi({ required: [] })
  .openapi('DataReviewConfirmationResponse')

const OwnerEntitySchema = z
  .strictObject({
    id: z
      .string()
      .openapi({
        description:
          'Unique identifier of the resource that owns the document. For `type` **legalEntity**, this value is the unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id). For `type` **bankAccount**, this value is the unique identifier of the [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id).',
      }),
    type: z
      .string()
      .openapi({
        description:
          'Type of resource that owns the document.\n\nPossible values: **legalEntity**, **bankAccount**.',
      }),
  })
  .openapi({ required: ['id', 'type'] })
  .openapi('OwnerEntity')

const DocumentSchema = z
  .strictObject({
    attachment: AttachmentSchema.exactOptional().openapi({
      deprecated: true,
      description: 'Object that contains the document.',
      'x-deprecatedInVersion': '1',
      'x-deprecatedMessage': 'Use the `attachments` array instead.',
    }),
    attachments: z
      .array(AttachmentSchema)
      .exactOptional()
      .openapi({
        description:
          'Array that contains the document. The array supports multiple attachments for uploading different sides or pages of a document.',
      }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The creation date of the document.', readOnly: true }),
    description: z.string().openapi({ description: 'Your description for the document.' }),
    expiryDate: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The expiry date of the document, in YYYY-MM-DD format.',
        'x-deprecatedInVersion': '1',
      }),
    fileName: z.string().exactOptional().openapi({ description: 'The filename of the document.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the document.', readOnly: true }),
    issuerCountry: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**.',
        'x-deprecatedInVersion': '1',
      }),
    issuerState: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'The state or province where the document was issued (AU only).',
        'x-deprecatedInVersion': '1',
      }),
    modificationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The modification date of the document.', readOnly: true }),
    number: z.string().exactOptional().openapi({ description: 'The number in the document.' }),
    owner: OwnerEntitySchema.exactOptional().openapi({
      description: 'Contains information about the resource that owns the document.',
    }),
    type: z
      .enum([
        'bankStatement',
        'driversLicense',
        'identityCard',
        'nationalIdNumber',
        'passport',
        'proofOfAddress',
        'proofOfNationalIdNumber',
        'proofOfResidency',
        'registrationDocument',
        'vatDocument',
        'proofOfOrganizationTaxInfo',
        'proofOfIndividualTaxId',
        'proofOfOwnership',
        'proofOfSignatory',
        'liveSelfie',
        'proofOfIndustry',
        'constitutionalDocument',
        'proofOfFundingOrWealthSource',
        'proofOfRelationship',
        'proofOfDirector',
      ])
      .openapi({
        description:
          'Type of document, used when providing an ID number or uploading a document. The possible values depend on the legal entity type.\n\n* For **organization**, the `type` values can be **proofOfAddress**, **registrationDocument**, **vatDocument**, **proofOfOrganizationTaxInfo**, **proofOfOwnership**, **proofOfIndustry**, **proofOfSignatory**, **proofOfDirector**, or **proofOfFundingOrWealthSource**.\n\n* For **individual**, the `type` values can be **identityCard**, **driversLicense**, **passport**, **liveSelfie**, **proofOfNationalIdNumber**, **proofOfResidency**, **proofOfIndustry**, **proofOfIndividualTaxId**, **proofOfFundingOrWealthSource** or **proofOfRelationship**.\n\n* For **soleProprietorship**, the `type` values can be **constitutionalDocument**, **proofOfAddress**, or **proofOfIndustry**.\n\n* For **trust**, the `type` value is **constitutionalDocument**.\n\n* For **unincorporatedPartnership**, the `type` value is **constitutionalDocument**.\n\n* Use **bankStatement** to upload documents for a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/transferInstruments__resParam_id).',
      }),
  })
  .openapi({ required: ['description', 'type'] })
  .openapi('Document')

const DocumentPageSchema = z
  .strictObject({
    pageName: z.string().exactOptional(),
    pageNumber: z.int32().exactOptional(),
    type: z.enum(['BACK', 'FRONT', 'UNDEFINED']).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DocumentPage')

const DocumentReferenceSchema = z
  .strictObject({
    active: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Identifies whether the document is active and used for checks.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your description for the document.' }),
    fileName: z.string().exactOptional().openapi({ description: 'Document name.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the resource.' }),
    modificationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The modification date of the document.' }),
    pages: z
      .array(DocumentPageSchema)
      .exactOptional()
      .openapi({ description: 'List of document pages' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Type of document, used when providing an ID number or uploading a document.',
      }),
  })
  .openapi({ required: [] })
  .openapi('DocumentReference')

const EntityReferenceSchema = z
  .strictObject({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the resource.' }),
  })
  .openapi({ required: [] })
  .openapi('EntityReference')

const FinancialReportSchema = z
  .strictObject({
    annualTurnover: z
      .string()
      .exactOptional()
      .openapi({ description: 'The annual turnover of the business.', 'x-addedInVersion': '3' }),
    balanceSheetTotal: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The balance sheet total of the business.',
        'x-addedInVersion': '3',
      }),
    currencyOfFinancialData: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The currency used for the financial data.',
        'x-addedInVersion': '3',
      }),
    dateOfFinancialData: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date the financial data were provided, in YYYY-MM-DD format.',
        'x-addedInVersion': '3',
      }),
    employeeCount: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The number of employees of the business.',
        'x-addedInVersion': '3',
      }),
    netAssets: z
      .string()
      .exactOptional()
      .openapi({ description: 'The net assets of the business.', 'x-addedInVersion': '3' }),
  })
  .openapi({ required: [] })
  .openapi('FinancialReport')

const GeneratePciDescriptionRequestSchema = z
  .strictObject({
    additionalSalesChannels: z
      .array(z.enum(['eCommerce', 'ecomMoto', 'pos', 'posMoto']))
      .exactOptional()
      .openapi({
        description:
          'An array of additional sales channels to generate PCI questionnaires. Include the relevant sales channels if you need your user to sign PCI questionnaires. Not required if you [create stores](https://docs.adyen.com/platforms) and [add payment methods](https://docs.adyen.com/adyen-for-platforms-model) before you generate the questionnaires.\n\nPossible values:\n*  **eCommerce**\n*  **pos**\n*  **ecomMoto**\n*  **posMoto**\n\n',
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Sets the language of the PCI questionnaire. Its value is a two-character [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639-1) language code, for example, **en**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GeneratePciDescriptionRequest')

const GeneratePciDescriptionResponseSchema = z
  .strictObject({
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'The generated questionnaires in a base64 encoded format.' }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-letter [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code for the questionnaire. For example, **en**.',
      }),
    pciTemplateReferences: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The array of Adyen-generated unique identifiers for the questionnaires. If empty, the user is not required to sign questionnaires.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GeneratePciDescriptionResponse')

const GetAcceptedTermsOfServiceDocumentResponseSchema = z
  .strictObject({
    document: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The accepted Terms of Service document in the requested format represented as a Base64-encoded bytes array.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the legal entity.' }),
    termsOfServiceAcceptanceReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'An Adyen-generated reference for the accepted Terms of Service.' }),
    termsOfServiceDocumentFormat: z
      .enum(['JSON', 'PDF', 'TXT'])
      .exactOptional()
      .openapi({ description: 'The format of the Terms of Service document.' }),
  })
  .openapi({ required: [] })
  .openapi('GetAcceptedTermsOfServiceDocumentResponse')

const PciDocumentInfoSchema = z
  .strictObject({
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date the questionnaire was created, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the signed questionnaire.' }),
    validUntil: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The expiration date of the questionnaire, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00',
      }),
  })
  .openapi({ required: [] })
  .openapi('PciDocumentInfo')

const GetPciQuestionnaireInfosResponseSchema = z
  .strictObject({
    data: z
      .array(PciDocumentInfoSchema)
      .exactOptional()
      .openapi({ description: 'Information about the signed PCI questionnaires.' }),
  })
  .openapi({ required: [] })
  .openapi('GetPciQuestionnaireInfosResponse')

const GetPciQuestionnaireResponseSchema = z
  .strictObject({
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'The generated questionnaire in a base64 encoded format.' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date the questionnaire was created, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the signed questionnaire.' }),
    validUntil: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The expiration date of the questionnaire, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetPciQuestionnaireResponse')

const TermsOfServiceAcceptanceInfoSchema = z
  .strictObject({
    acceptedBy: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the user that accepted the Terms of Service.',
      }),
    acceptedFor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the legal entity for which the Terms of Service are accepted.',
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date when the Terms of Service were accepted, in ISO 8601 extended format. For example, 2022-12-18T10:15:30+01:00.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'An Adyen-generated reference for the accepted Terms of Service.' }),
    type: z
      .enum([
        'adyenAccount',
        'adyenCapital',
        'adyenCapitalCashAdvance',
        'adyenCard',
        'adyenChargeCard',
        'adyenForPlatformsAdvanced',
        'adyenForPlatformsManage',
        'adyenFranchisee',
        'adyenIssuing',
        'adyenPccr',
        'directDebit',
        'kycOnInvite',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of Terms of Service.\n\nPossible values:\n*  **adyenForPlatformsManage**\n*  **adyenIssuing**\n*  **adyenForPlatformsAdvanced**\n*  **adyenCapital**\n*  **adyenCapitalCashAdvance**\n*  **adyenAccount**\n*  **adyenCard**\n*  **adyenFranchisee**\n*  **adyenPccr**\n*  **adyenChargeCard**\n*  **kycOnInvite**\n*  **directDebit**\n\n',
      }),
    validTo: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The expiration date for the Terms of Service acceptance, in ISO 8601 extended format. For example, 2022-12-18T00:00:00+01:00.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TermsOfServiceAcceptanceInfo')

const GetTermsOfServiceAcceptanceInfosResponseSchema = z
  .strictObject({
    data: z
      .array(TermsOfServiceAcceptanceInfoSchema)
      .exactOptional()
      .openapi({ description: 'The Terms of Service acceptance information.' }),
  })
  .openapi({ required: [] })
  .openapi('GetTermsOfServiceAcceptanceInfosResponse')

const GetTermsOfServiceDocumentRequestSchema = z
  .strictObject({
    language: z
      .string()
      .openapi({
        description:
          'The language to be used for the Terms of Service document, specified by the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. Possible values: **en** for English or **fr** for French.',
      }),
    termsOfServiceDocumentFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The requested format for the Terms of Service document. Default value: JSON. Possible values: **JSON**, **PDF**, or **TXT**.',
      }),
    type: z
      .enum([
        'adyenAccount',
        'adyenCapital',
        'adyenCapitalCashAdvance',
        'adyenCard',
        'adyenChargeCard',
        'adyenForPlatformsAdvanced',
        'adyenForPlatformsManage',
        'adyenFranchisee',
        'adyenIssuing',
        'adyenPccr',
        'directDebit',
        'kycOnInvite',
      ])
      .openapi({
        description:
          'The type of Terms of Service.\n\nPossible values:\n*  **adyenForPlatformsManage**\n*  **adyenIssuing**\n*  **adyenForPlatformsAdvanced**\n*  **adyenCapital**\n*  **adyenCapitalCashAdvance**\n*  **adyenAccount**\n*  **adyenCard**\n*  **adyenFranchisee**\n*  **adyenPccr**\n*  **adyenChargeCard**\n*  **kycOnInvite**\n*  **directDebit**\n\n',
      }),
  })
  .openapi({ required: ['language', 'type'] })
  .openapi('GetTermsOfServiceDocumentRequest')

const GetTermsOfServiceDocumentResponseSchema = z
  .strictObject({
    document: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Terms of Service document in Base64-encoded format.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the legal entity.' }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language used for the Terms of Service document, specified by the two-letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language code. Possible value: **en** for English or **fr** for French.\n\nNote that French is only available for some integration types in certain countries/regions. Reach out to your Adyen contact for more information.',
      }),
    termsOfServiceDocumentFormat: z
      .string()
      .exactOptional()
      .openapi({ description: 'The format of the Terms of Service document.' }),
    termsOfServiceDocumentId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the Terms of Service document.' }),
    type: z
      .enum([
        'adyenAccount',
        'adyenCapital',
        'adyenCapitalCashAdvance',
        'adyenCard',
        'adyenChargeCard',
        'adyenForPlatformsAdvanced',
        'adyenForPlatformsManage',
        'adyenFranchisee',
        'adyenIssuing',
        'adyenPccr',
        'directDebit',
        'kycOnInvite',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of Terms of Service.\n\nPossible values:\n*  **adyenForPlatformsManage**\n*  **adyenIssuing**\n*  **adyenForPlatformsAdvanced**\n*  **adyenCapital**\n*  **adyenCapitalCashAdvance**\n*  **adyenAccount**\n*  **adyenCard**\n*  **adyenFranchisee**\n*  **adyenPccr**\n*  **adyenChargeCard**\n*  **kycOnInvite**\n*  **directDebit**\n\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetTermsOfServiceDocumentResponse')

const IdentificationDataSchema = z
  .strictObject({
    cardNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The card number of the document that was issued (AU only).' }),
    expiryDate: z
      .string()
      .exactOptional()
      .openapi({ description: 'The expiry date of the document, in YYYY-MM-DD format.' }),
    issuerCountry: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code where the document was issued. For example, **US**.',
        'x-deprecatedInVersion': '1',
      }),
    issuerState: z
      .string()
      .exactOptional()
      .openapi({ description: 'The state or province where the document was issued (AU only).' }),
    nationalIdExempt: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Applies only to individuals in the US. Set to **true** if the individual does not have an SSN. To verify their identity, Adyen will require them to upload an ID document.',
      }),
    number: z.string().exactOptional().openapi({ description: 'The number in the document.' }),
    type: z
      .enum(['nationalIdNumber', 'passport', 'driversLicense', 'identityCard'])
      .openapi({
        description:
          'Type of identity data. For individuals, the following types are supported. See our [onboarding guide](https://docs.adyen.com/platforms/onboard-users/onboarding-steps/?onboarding_type=custom) for other supported countries.\n\n- Australia: **driversLicense**, **passport**\n\n- Hong Kong: **driversLicense**, **nationalIdNumber**, **passport**\n\n- New Zealand: **driversLicense**, **passport**\n\n- Singapore: **driversLicense**, **nationalIdNumber**, **passport** \n\n- All other supported countries: **nationalIdNumber**',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('IdentificationData')

const NameSchema = z
  .strictObject({
    firstName: z
      .string()
      .openapi({
        description:
          "The individual's first name. Must not be blank.\n\nThe combined length of `firstName` and `lastName` must be at least 3 characters. For example, a `firstName` of N and `lastName` of Ha is accepted.\n\nOnly the following special characters are allowed: **-**, **—**, **.**, **/**. Accents and non-Latin scripts are allowed.\n\nThe field cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious names** such as **John Doe** or **N/A**.\n\nFor more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).",
      }),
    infix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The infix in the individual's name, if any.\n\nOnly the following special characters are allowed: **-**, **—**, **.**, **/**. Accents and non-Latin scripts are allowed.\n\nThe field cannot contain emojis, only symbols, only numbers, or only spaces.\n\nFor more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).",
      }),
    lastName: z
      .string()
      .openapi({
        description:
          "The individual's last name. Must not be blank.\n\nThe combined length of `firstName` and `lastName` must be at least 3 characters.\n\nOnly the following special characters are allowed: **-**, **—**, **.**, **/**. Accents and non-Latin scripts are allowed.\n\nThe field cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious names** such as **John Doe** or **N/A**.\n\nFor more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).",
      }),
  })
  .openapi({ required: ['firstName', 'lastName'] })
  .openapi('Name')

const PhoneNumberSchema = z
  .strictObject({
    number: z
      .string()
      .openapi({
        description:
          'The full phone number, including the country code. For example, **+3112345678**.',
      }),
    phoneCountryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code prefix of the phone number. For example, **US** or **NL**.\n\nThe value of the `phoneCountryCode` is determined by the country code digit(s) of `phone.number`',
        readOnly: true,
        'x-addedInVersion': '2',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of phone number.\n Possible values: **mobile**, **landline**, **sip**, **fax.** ',
      }),
  })
  .openapi({ required: ['number'] })
  .openapi('PhoneNumber')

const SupportSchema = z
  .strictObject({
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The support email address of the legal entity. Required if you have a platform setup.',
        'x-addedInVersion': '4',
      }),
    phone: PhoneNumberSchema.exactOptional().openapi({
      description:
        'The support phone number of the legal entity. Required if you have a platform setup.',
      'x-addedInVersion': '4',
    }),
  })
  .openapi({ required: [] })
  .openapi('Support')

const TaxInformationSchema = z
  .strictObject({
    country: z
      .string()
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'The two-letter [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code.',
      }),
    number: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tax ID number (TIN) of the organization or individual.' }),
    numberAbsent: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set this to **true** if the legal entity or legal arrangement does not have a tax ID number (TIN). Only applicable in Australia.',
        'x-addedInVersion': '4',
      }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The TIN type depending on the country where it was issued. Only provide if the country has multiple tax IDs: Singapore, Sweden, the UK, or the US. For example, provide **SSN**, **EIN**, or **ITIN** for the US.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TaxInformation')

const IndividualSchema = z
  .strictObject({
    birthData: BirthDataSchema.exactOptional().openapi({
      description: "The individual's birth information.",
    }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the legal entity.' }),
    identificationData: IdentificationDataSchema.exactOptional().openapi({
      description: "Information about the individual's identification document.",
    }),
    name: NameSchema.openapi({
      description:
        "The individual's name. The combined length of `firstName` and `lastName` must be at least 3 characters.\n\nOnly **-**, **—**, **.**, **/** are allowed as special characters.\n\nFor more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).",
    }),
    nationality: z
      .string()
      .exactOptional()
      .openapi({ description: "The individual's nationality." }),
    phone: PhoneNumberSchema.exactOptional().openapi({
      description: 'The phone number of the legal entity.',
    }),
    residentialAddress: AddressSchema.openapi({
      description:
        'The residential address of the individual. Individuals cannot use a PO box as their residential address.\n\nAddress fields cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious values** such as **John Doe** or **N/A**. All parts of the address must be different. For example, Spain, Spain, Spain is not allowed.\n\nFor more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).',
    }),
    support: SupportSchema.exactOptional().openapi({
      description:
        'Support information for the legal entity. Required if you have a platform setup.',
      'x-addedInVersion': '4',
    }),
    taxInformation: z
      .array(TaxInformationSchema)
      .exactOptional()
      .openapi({ description: 'The tax information of the individual.', 'x-addedInVersion': '2' }),
    webData: WebDataSchema.exactOptional().openapi({
      deprecated: true,
      description: 'The website and app URL of the legal entity.',
      'x-deprecatedInVersion': '1',
    }),
  })
  .openapi({ required: ['name', 'residentialAddress'] })
  .openapi('Individual')

const SupportingEntityCapabilitySchema = z
  .strictObject({
    allowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the capability is allowed for the supporting entity.\n\nIf a capability is allowed for a supporting entity but not for the parent legal entity, this means the legal entity has other supporting entities that failed verification.\n\n**You can use the allowed supporting entity** regardless of the verification status of other supporting entities.',
        readOnly: true,
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Supporting entity reference ', readOnly: true }),
    requested: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the supporting entity capability is requested. ',
        readOnly: true,
      }),
    verificationStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the verification checks for the capability of the supporting entity.\n\nPossible values:\n\n* **pending**: Adyen is running the verification.\n\n* **invalid**: The verification failed. Check if the `errors` array contains more information.\n\n* **valid**: The verification has been successfully completed.\n\n* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.\n',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('SupportingEntityCapability')

const LegalEntityCapabilitySchema = z
  .strictObject({
    allowed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the capability is allowed. Adyen sets this to **true** if the verification is successful.',
        readOnly: true,
      }),
    allowedLevel: z
      .enum(['high', 'low', 'medium', 'notApplicable'])
      .exactOptional()
      .openapi({
        description:
          'The capability level that is allowed for the legal entity.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.',
        readOnly: true,
      }),
    allowedSettings: CapabilitySettingsSchema.exactOptional().openapi({
      description: 'The settings that are allowed for the legal entity.',
      readOnly: true,
    }),
    requested: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the capability is requested. To check whether the legal entity is permitted to use the capability, refer to the `allowed` field.',
        readOnly: true,
      }),
    requestedLevel: z
      .enum(['high', 'low', 'medium', 'notApplicable'])
      .exactOptional()
      .openapi({
        description:
          'The requested level of the capability. Some capabilities, such as those used in [card issuing](https://docs.adyen.com/issuing/add-capabilities#capability-levels), have different levels. Levels increase the capability, but also require additional checks and increased monitoring.\n\nPossible values: **notApplicable**, **low**, **medium**, **high**.',
        readOnly: true,
      }),
    requestedSettings: CapabilitySettingsSchema.exactOptional().openapi({
      description: 'The settings that are requested for the legal entity.',
      readOnly: true,
    }),
    transferInstruments: z
      .array(SupportingEntityCapabilitySchema)
      .exactOptional()
      .openapi({
        description:
          'The capability status of transfer instruments associated with the legal entity.',
        readOnly: true,
        'x-addedInVersion': '2',
      }),
    verificationStatus: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The status of the verification checks for the capability.\n\nPossible values:\n\n* **pending**: Adyen is running the verification.\n\n* **invalid**: The verification failed. Check if the `errors` array contains more information.\n\n* **valid**: The verification has been successfully completed.\n\n* **rejected**: Adyen has verified the information, but found reasons to not allow the capability.\n',
        readOnly: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('LegalEntityCapability')

const LegalEntityAssociationSchema = z
  .strictObject({
    associatorId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of another legal entity with which the `legalEntityId` is associated. When the `legalEntityId` is associated to legal entities other than the current one, the response returns all the associations.',
        readOnly: true,
      }),
    entityType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The legal entity type of associated legal entity.\n\nFor example, **organization**, **soleProprietorship** or **individual**.',
        readOnly: true,
      }),
    jobTitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The individual's job title if the `type` is **uboThroughControl** or **signatory**.",
      }),
    legalEntityId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the associated [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id).',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the associated [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id).\n\n- For **individual**, `name.firstName` and `name.lastName`.\n- For **organization**, `legalName`.\n- For **soleProprietorship**, `name`.',
        readOnly: true,
      }),
    nominee: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default value: **false**\nSet to **true** if the entity association `type` **director**, **secondaryPartner** or **shareholder** is also a nominee. Only applicable to New Zealand.',
      }),
    relationship: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The individual's relationship to a legal representative if the `type` is **legalRepresentative**. Possible values: **parent**, **guardian**.",
      }),
    settlorExemptionReason: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Defines the KYC exemption reason for a settlor associated with a trust. Only applicable to trusts in Australia.\n\nFor example, **professionalServiceProvider**, **deceased**, or **contributionBelowThreshold**.',
      }),
    type: z
      .enum([
        'definedBeneficiary',
        'director',
        'immediateParentCompany',
        'legalRepresentative',
        'pciSignatory',
        'protector',
        'secondaryPartner',
        'secondaryTrustee',
        'settlor',
        'signatory',
        'soleProprietorship',
        'trust',
        'trustOwnership',
        'uboThroughControl',
        'uboThroughOwnership',
        'ultimateParentCompany',
        'undefinedBeneficiary',
        'unincorporatedPartnership',
      ])
      .openapi({
        description:
          'Defines the relationship of the legal entity to the current legal entity.\n\nPossible value for individuals: **legalRepresentative**.\n\nPossible values for organizations: **director**, **signatory**, **trustOwnership**, **uboThroughOwnership**, **uboThroughControl**, **ultimateParentCompany**, or **immediateParentCompany**.\n\nPossible values for sole proprietorships: **soleProprietorship**.\n\nPossible value for trusts: **trust**.\n\nPossible values for trust members: **definedBeneficiary**, **protector**, **secondaryTrustee**, **settlor**, **uboThroughControl**, or **uboThroughOwnership**.\n\nPossible value for unincorporated partnership: **unincorporatedPartnership**.\n\nPossible values for unincorporated partnership members: **secondaryPartner**, **uboThroughControl**, **uboThroughOwnership**',
      }),
  })
  .openapi({ required: ['legalEntityId', 'type'] })
  .openapi('LegalEntityAssociation')

const StockDataSchema = z
  .strictObject({
    marketIdentifier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The four-digit [Market Identifier Code](https://en.wikipedia.org/wiki/Market_Identifier_Code) of the stock market where the organization's stocks are traded.",
      }),
    stockNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The 12-digit International Securities Identification Number (ISIN) of the company, without dashes (-).',
      }),
    tickerSymbol: z.string().exactOptional().openapi({ description: 'The stock ticker symbol.' }),
  })
  .openapi({ required: [] })
  .openapi('StockData')

const TaxReportingClassificationSchema = z
  .strictObject({
    businessType: z
      .enum([
        'other',
        'listedPublicCompany',
        'subsidiaryOfListedPublicCompany',
        'governmentalOrganization',
        'internationalOrganization',
        'financialInstitution',
      ])
      .exactOptional()
      .openapi({
        description:
          "The organization's business type.\n\nPossible values: **other**, **listedPublicCompany**, **subsidiaryOfListedPublicCompany**, **governmentalOrganization**, **internationalOrganization**, **financialInstitution**.",
      }),
    financialInstitutionNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Global Intermediary Identification Number (GIIN) required for FATCA. Only required if the organization is a US financial institution and the `businessType` is **financialInstitution**.',
      }),
    mainSourceOfIncome: z
      .enum([
        'businessOperation',
        'realEstateSales',
        'investmentInterestOrRoyalty',
        'propertyRental',
        'other',
      ])
      .exactOptional()
      .openapi({
        description:
          "The organization's main source of income. Only required if `businessType` is **other**.\n\nPossible values: **businessOperation**, **realEstateSales**, **investmentInterestOrRoyalty**, **propertyRental**, **other**.",
      }),
    type: z
      .enum([
        'nonFinancialNonReportable',
        'financialNonReportable',
        'nonFinancialActive',
        'nonFinancialPassive',
      ])
      .exactOptional()
      .openapi({
        description:
          'The tax reporting classification type.\n\nPossible values: **nonFinancialNonReportable**, **financialNonReportable**, **nonFinancialActive**, **nonFinancialPassive**.',
      }),
  })
  .openapi({ required: [] })
  .openapi('TaxReportingClassification')

const OrganizationSchema = z
  .strictObject({
    countryOfGoverningLaw: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country.',
        'x-addedInVersion': '2',
      }),
    dateOfIncorporation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date when the organization was incorporated in YYYY-MM-DD format.',
        'x-addedInVersion': '2',
      }),
    dateOfInitiationOfLegalProceeding: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required if the value of `statusOfLegalProceeding` is one of the following:\n\n**underJudicialAdministration**, **bankruptcyInsolvency**, **otherLegalMeasures**\n\nThe date at which a legal proceeding was initiated, in **YYYY-MM-DD** format. Example: **2000-02-12**\n',
        'x-addedInVersion': '3',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your description for the organization.' }),
    doingBusinessAs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The organization's trading name, if different from the registered legal name.",
      }),
    doingBusinessAsAbsent: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Set this to **true** if the organization or legal arrangement does not have a `Doing business as` name.',
        'x-addedInVersion': '4',
      }),
    economicSector: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The sector of the economy the legal entity operates within, represented by a 2-4 digit code that may include a ".". Example: 45.11\n\nYou can locate economic sector codes for your area by referencing codes defined by the NACE (Nomenclature of Economic Activities) used in the European Union.\n',
        'x-addedInVersion': '3',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the legal entity.' }),
    financialReports: z
      .array(FinancialReportSchema)
      .exactOptional()
      .openapi({
        description: 'The financial report information of the organization.',
        'x-addedInVersion': '3',
      }),
    globalLegalEntityIdentifier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The global legal entity identifier for the organization.\n\nThis field is not required if the `registrationNumber` for the organization has been provided.',
        'x-addedInVersion': '3',
      }),
    headOfficeIndicator: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates that the registered business address is also the company's headquarters.",
        'x-addedInVersion': '3',
      }),
    institutionalSector: z
      .enum([
        'nonFinancialCorporation',
        'centralBank',
        'creditInstitutions',
        'depositTakingCorporations',
        'moneyMarketFunds',
        'nonMMFInvestmentFunds',
        'financialVehicleCorporation',
        'otherFinancialIntermediaries',
        'financialAuxiliaries',
        'captiveFinancialInstitutionsAndMoneyLenders',
        'insuranceCorporations',
        'pensionFunds',
        'centralGovernment',
        'stateGovernment',
        'localGovernment',
        'socialSecurityFunds',
        'nonProfitInstitutionsServingHouseholds',
      ])
      .exactOptional()
      .openapi({
        description: 'The institutional sector the organization operates within.',
        'x-addedInVersion': '3',
      }),
    legalForm: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of business entity as defined in the national legal system. Use a legal form listed within the accepted legal forms compiled by the Central Bank of Europe.\n',
        'x-addedInVersion': '3',
      }),
    legalName: z
      .string()
      .openapi({
        description:
          "The organization's legal name. Must be at least 3 characters.\n\nOnly the following special characters are allowed: **,**, **-**, **—**, **.**, **;**, **:**, **&**, **?**, **@**, **(**, **)**, **\"**, **'**, **!**, **\\**, **+**, **/**. Accents and non-Latin scripts are allowed.\n\nThe field cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious names** such as **John Doe** or **N/A**.\n\nFor more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).",
      }),
    phone: PhoneNumberSchema.exactOptional().openapi({
      description: 'The phone number of the legal entity.',
    }),
    principalPlaceOfBusiness: AddressSchema.exactOptional().openapi({
      description:
        'The address where the organization operates from. Provide this if the principal place of business is different from the `registeredAddress`.',
    }),
    registeredAddress: AddressSchema.openapi({
      description:
        'The address of the organization registered at their registrar (such as the Chamber of Commerce). If you use a PO box, you must also provide a `principalPlaceOfBusiness`. The principal place of business cannot be a PO box.\n\nAddress fields cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious values** such as **John Doe** or **N/A**. All parts of the address must be different. For example, Spain, Spain, Spain is not allowed.\n\nFor more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).',
    }),
    registrationNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "The organization's registration number." }),
    registrationNumberAbsent: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Set this to **true** if the organization does not have a registration number available. Only applicable for organizations in New Zealand, and incorporated partnerships and government organizations in Australia.',
        'x-addedInVersion': '4',
      }),
    residentialAddressIndicator: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the `registeredAddress` is a place of residence, instead of a business address.\n\nSet to **true** if the address is a place of residence. The default value is **false**.',
        'x-addedInVersion': '2',
      }),
    statusOfLegalProceeding: z
      .enum([
        'noLegalActionsTaken',
        'underJudicialAdministration',
        'bankruptcyInsolvency',
        'otherLegalMeasures',
      ])
      .exactOptional()
      .openapi({
        description:
          'The status of any current or past legal action taken against the legal entity.\n\nPossible values: **noLegalActionsTaken**, **underJudicialAdministration**, **bankruptcyInsolvency**, **otherLegalMeasures**\n\nIf the value of this field is **noLegalActionsTaken**, then `dateOfInitiationOfLegalProceeding` is not required. Otherwise, it is required.\n',
        'x-addedInVersion': '3',
      }),
    stockData: StockDataSchema.exactOptional().openapi({
      description:
        "Information about the organization's publicly traded stock. Provide this object only if `type` is **listedPublicCompany**.",
    }),
    support: SupportSchema.exactOptional().openapi({
      description:
        'Support information for the legal entity. Required if you have a platform setup.',
      'x-addedInVersion': '4',
    }),
    taxInformation: z
      .array(TaxInformationSchema)
      .exactOptional()
      .openapi({
        description: 'The tax information of the organization.',
        'x-addedInVersion': '2',
      }),
    taxReportingClassification: TaxReportingClassificationSchema.exactOptional().openapi({
      description:
        'The tax reporting classification (FATCA/CRS self-certification) of the organization. Not required if your organization is US-based and requests business bank account capabilities.',
      'x-addedInVersion': '2',
    }),
    type: z
      .enum([
        'associationIncorporated',
        'governmentalOrganization',
        'listedPublicCompany',
        'nonProfit',
        'partnershipIncorporated',
        'privateCompany',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of organization.\n\nPossible values: **associationIncorporated**, **governmentalOrganization**, **listedPublicCompany**, **nonProfit**, **partnershipIncorporated**, **privateCompany**.',
      }),
    vatAbsenceReason: z
      .enum(['industryExemption', 'belowTaxThreshold'])
      .exactOptional()
      .openapi({
        description:
          'The reason the organization has not provided a VAT number.\n\nPossible values: **industryExemption**, **belowTaxThreshold**.',
        'x-addedInVersion': '2',
      }),
    vatNumber: z
      .string()
      .exactOptional()
      .openapi({ description: "The organization's VAT number.", 'x-addedInVersion': '2' }),
    webData: WebDataSchema.exactOptional().openapi({
      deprecated: true,
      description: 'The website and app URL of the legal entity.',
      'x-deprecatedInVersion': '1',
    }),
  })
  .openapi({ required: ['legalName', 'registeredAddress'] })
  .openapi('Organization')

const SoleProprietorshipSchema = z
  .strictObject({
    countryOfGoverningLaw: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country.',
      }),
    dateOfIncorporation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date when the legal arrangement was incorporated in YYYY-MM-DD format.',
        'x-addedInVersion': '2',
      }),
    doingBusinessAs: z
      .string()
      .exactOptional()
      .openapi({ description: 'The registered name, if different from the `name`.' }),
    doingBusinessAsAbsent: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Set this to **true** if the legal arrangement does not have a `Doing business as` name.',
        'x-addedInVersion': '4',
      }),
    financialReports: z
      .array(FinancialReportSchema)
      .exactOptional()
      .openapi({
        description: 'The information from the financial report of the sole proprietorship.',
        'x-addedInVersion': '3',
      }),
    name: z
      .string()
      .openapi({
        description:
          'The legal name. Must be at least 3 characters.\n\nOnly the following special characters are allowed: **,**, **-**, **—**, **.**, **;**, **:**, **&**, **?**, **@**, **(**, **)**, **"**, **\'**, **!**, **\\**, **+**, **/**. Accents and non-Latin scripts are allowed.\n\nThe field cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious names** such as **John Doe** or **N/A**.\n\nFor more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).',
      }),
    principalPlaceOfBusiness: AddressSchema.exactOptional().openapi({
      description:
        'The business address. Required if the principal place of business is different from the `registeredAddress`.',
    }),
    registeredAddress: AddressSchema.openapi({
      description:
        'The address registered at the registrar, such as the Chamber of Commerce. If you use a PO box, you must also provide a `principalPlaceOfBusiness`. The principal place of business cannot be a PO box.\n\nAddress fields cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious values** such as **John Doe** or **N/A**. All parts of the address must be different. For example, Spain, Spain, Spain is not allowed.\n\nFor more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).',
    }),
    registrationNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The registration number.' }),
    residentialAddressIndicator: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the `registeredAddress` is a place of residence, instead of a business address.\n\nSet to **true** if the address is a place of residence. The default value is **false**.',
        'x-addedInVersion': '2',
      }),
    taxAbsent: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The tax information is absent.', 'x-addedInVersion': '2' }),
    taxInformation: z
      .array(TaxInformationSchema)
      .exactOptional()
      .openapi({ description: 'The tax information of the entity.', 'x-addedInVersion': '2' }),
    vatAbsenceReason: z
      .enum(['industryExemption', 'belowTaxThreshold'])
      .exactOptional()
      .openapi({
        description:
          'The reason for not providing a VAT number.\n\nPossible values: **industryExemption**, **belowTaxThreshold**.',
      }),
    vatNumber: z.string().exactOptional().openapi({ description: 'The VAT number.' }),
  })
  .openapi({ required: ['name', 'registeredAddress'] })
  .openapi('SoleProprietorship')

const TransferInstrumentReferenceSchema = z
  .strictObject({
    accountIdentifier: z
      .string()
      .openapi({ description: 'The masked IBAN or bank account number.' }),
    id: z.string().openapi({ description: 'The unique identifier of the resource.' }),
    realLastFour: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Four last digits of the bank account number. If the transfer instrument is created using [instant bank account verification](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-08-hosted-onboarding), and it is a virtual bank account, these digits may be different from the last four digits of the masked account number.',
      }),
    trustedSource: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies if the bank account was created through [instant bank verification](https://docs.adyen.com/release-notes/platforms-and-financial-products#releaseNote=2023-05-08-hosted-onboarding).',
        readOnly: true,
      }),
  })
  .openapi({ required: ['accountIdentifier', 'id'] })
  .openapi('TransferInstrumentReference')

const UndefinedBeneficiarySchema = z
  .strictObject({
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The details of the undefined beneficiary.' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference of the undefined beneficiary.', readOnly: true }),
  })
  .openapi({ required: [] })
  .openapi('UndefinedBeneficiary')

const TrustSchema = z
  .strictObject({
    countryOfGoverningLaw: z
      .string()
      .openapi({
        description:
          'The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country.',
      }),
    dateOfIncorporation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date when the legal arrangement was incorporated in YYYY-MM-DD format.',
        'x-addedInVersion': '2',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short description about the trust. Only applicable for charitable trusts in New Zealand.',
        'x-addedInVersion': '3',
      }),
    doingBusinessAs: z
      .string()
      .exactOptional()
      .openapi({ description: 'The registered name, if different from the `name`.' }),
    doingBusinessAsAbsent: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Set this to **true** if the legal arrangement does not have a `Doing business as` name.',
        'x-addedInVersion': '4',
      }),
    name: z
      .string()
      .openapi({
        description:
          'The legal name. Must be at least 3 characters.\n\nOnly the following special characters are allowed: **,**, **-**, **—**, **.**, **;**, **:**, **&**, **?**, **@**, **(**, **)**, **"**, **\'**, **!**, **\\**, **+**, **/**. Accents and non-Latin scripts are allowed.\n\nThe field cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious names** such as **John Doe** or **N/A**.\n\nFor more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).',
      }),
    principalPlaceOfBusiness: AddressSchema.exactOptional().openapi({
      description:
        'The business address. Required if the principal place of business is different from the `registeredAddress`.',
    }),
    registeredAddress: AddressSchema.openapi({
      description:
        'The address registered at the registrar, such as the Chamber of Commerce. If you use a PO box, you must also provide a `principalPlaceOfBusiness`. The principal place of business cannot be a PO box.\n\nAddress fields cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious values** such as **John Doe** or **N/A**. All parts of the address must be different. For example, Spain, Spain, Spain is not allowed.\n\nFor more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).',
    }),
    registrationNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The registration number.' }),
    residentialAddressIndicator: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the `registeredAddress` is a place of residence, instead of a business address.\n\nSet to **true** if the address is a place of residence. The default value is **false**.',
        'x-addedInVersion': '2',
      }),
    taxInformation: z
      .array(TaxInformationSchema)
      .exactOptional()
      .openapi({ description: 'The tax information of the entity.', 'x-addedInVersion': '2' }),
    type: z
      .enum([
        'businessTrust',
        'cashManagementTrust',
        'charitableTrust',
        'corporateUnitTrust',
        'deceasedEstate',
        'discretionaryTrust',
        'discretionaryInvestmentTrust',
        'discretionaryServicesManagementTrust',
        'discretionaryTradingTrust',
        'familyTrust',
        'firstHomeSaverAccountsTrust',
        'fixedTrust',
        'fixedUnitTrust',
        'hybridTrust',
        'listedPublicUnitTrust',
        'otherTrust',
        'pooledSuperannuationTrust',
        'publicTradingTrust',
        'unlistedPublicUnitTrust',
      ])
      .openapi({
        description:
          'Type of trust.\n\nSee possible values for trusts in [Australia](https://docs.adyen.com/platforms/verification-requirements/?tab=trust_3_4#trust-types-in-australia) and [New Zealand](https://docs.adyen.com/platforms/verification-requirements/?tab=trust_3_4#trust-types-in-new-zealand).',
      }),
    undefinedBeneficiaryInfo: z
      .array(UndefinedBeneficiarySchema)
      .exactOptional()
      .openapi({
        description: 'The undefined beneficiary information of the entity.',
        'x-addedInVersion': '2',
      }),
    vatAbsenceReason: z
      .enum(['industryExemption', 'belowTaxThreshold'])
      .exactOptional()
      .openapi({
        description:
          'The reason for not providing a VAT number.\n\nPossible values: **industryExemption**, **belowTaxThreshold**.',
      }),
    vatNumber: z.string().exactOptional().openapi({ description: 'The VAT number.' }),
  })
  .openapi({ required: ['countryOfGoverningLaw', 'name', 'registeredAddress', 'type'] })
  .openapi('Trust')

const UnincorporatedPartnershipSchema = z
  .strictObject({
    countryOfGoverningLaw: z
      .string()
      .openapi({
        description:
          'The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the governing country.',
      }),
    dateOfIncorporation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date when the legal arrangement was incorporated in YYYY-MM-DD format.',
        'x-addedInVersion': '2',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Short description about the Legal Arrangement.',
        'x-addedInVersion': '3',
      }),
    doingBusinessAs: z
      .string()
      .exactOptional()
      .openapi({ description: 'The registered name, if different from the `name`.' }),
    doingBusinessAsAbsent: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Set this to **true** if the legal arrangement does not have a `Doing business as` name.',
        'x-addedInVersion': '4',
      }),
    name: z
      .string()
      .openapi({
        description:
          'The legal name. Must be at least 3 characters.\n\nOnly the following special characters are allowed: **,**, **-**, **—**, **.**, **;**, **:**, **&**, **?**, **@**, **(**, **)**, **"**, **\'**, **!**, **\\**, **+**, **/**. Accents and non-Latin scripts are allowed.\n\nThe field cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious names** such as **John Doe** or **N/A**.\n\nFor more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).',
      }),
    principalPlaceOfBusiness: AddressSchema.exactOptional().openapi({
      description:
        'The business address. Required if the principal place of business is different from the `registeredAddress`.',
    }),
    registeredAddress: AddressSchema.openapi({
      description:
        'The address registered at the registrar, such as the Chamber of Commerce. If you use a PO box, you must also provide a `principalPlaceOfBusiness`. The principal place of business cannot be a PO box.\n\nAddress fields cannot contain emojis, only one repeated character (unless two characters long), only symbols, only numbers, only spaces, or **fictitious values** such as **John Doe** or **N/A**. All parts of the address must be different. For example, Spain, Spain, Spain is not allowed.\n\nFor more information, see [validations on fields](https://docs.adyen.com/platforms/onboard-users/onboarding-versions/onboarding-v4/#validations).',
    }),
    registrationNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The registration number.' }),
    residentialAddressIndicator: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Indicates if the `registeredAddress` is a place of residence, instead of a business address.\n\nSet to **true** if the address is a place of residence. The default value is **false**.',
        'x-addedInVersion': '2',
      }),
    taxInformation: z
      .array(TaxInformationSchema)
      .exactOptional()
      .openapi({ description: 'The tax information of the entity.', 'x-addedInVersion': '2' }),
    type: z
      .enum([
        'limitedPartnership',
        'generalPartnership',
        'familyPartnership',
        'commercialPartnership',
        'publicPartnership',
        'otherPartnership',
        'gbr',
        'gmbh',
        'kgaa',
        'cv',
        'vof',
        'maatschap',
        'privateFundLimitedPartnership',
        'businessTrustEntity',
        'businessPartnership',
        'limitedLiabilityPartnership',
        'eg',
        'cooperative',
        'vos',
        'comunidadDeBienes',
        'herenciaYacente',
        'comunidadDePropietarios',
        'sep',
        'sca',
        'bt',
        'kkt',
        'scs',
        'snc',
      ])
      .exactOptional()
      .openapi({
        description:
          'Type of Partnership.\n\nPossible values:\n*  **limitedPartnership**\n*  **generalPartnership**\n*  **familyPartnership**\n*  **commercialPartnership**\n*  **publicPartnership**\n*  **otherPartnership**\n*  **gbr**\n*  **gmbh**\n*  **kgaa**\n*  **cv**\n*  **vof**\n*  **maatschap**\n*  **privateFundLimitedPartnership**\n*  **businessTrustEntity**\n*  **businessPartnership**\n*  **limitedLiabilityPartnership**\n*  **eg**\n*  **cooperative**\n*  **vos**\n*  **comunidadDeBienes**\n*  **herenciaYacente**\n*  **comunidadDePropietarios**\n*  **sep**\n*  **sca**\n*  **bt**\n*  **kkt**\n*  **scs**\n*  **snc**\n\n',
        readOnly: true,
      }),
    vatAbsenceReason: z
      .enum(['industryExemption', 'belowTaxThreshold'])
      .exactOptional()
      .openapi({
        description:
          'The reason for not providing a VAT number.\n\nPossible values: **industryExemption**, **belowTaxThreshold**.',
      }),
    vatNumber: z.string().exactOptional().openapi({ description: 'The VAT number.' }),
  })
  .openapi({ required: ['countryOfGoverningLaw', 'name', 'registeredAddress'] })
  .openapi('UnincorporatedPartnership')

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
      .openapi({
        description:
          'The list of capabilities that will be disallowed if information is not reviewed by the time of the deadline',
        readOnly: true,
      }),
    entityIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The unique identifiers of the legal entity or supporting entities that the deadline applies to',
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

const LegalEntitySchema = z
  .strictObject({
    capabilities: z
      .record(z.string(), LegalEntityCapabilitySchema)
      .exactOptional()
      .openapi({
        description:
          'Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.',
      }),
    documentDetails: z
      .array(DocumentReferenceSchema)
      .exactOptional()
      .openapi({
        description: 'List of documents uploaded for the legal entity.',
        'x-addedInVersion': '2',
      }),
    documents: z
      .array(EntityReferenceSchema)
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'List of documents uploaded for the legal entity.',
        'x-deprecatedInVersion': '1',
        'x-deprecatedMessage': 'Use the `documentDetails` array instead.',
      }),
    entityAssociations: z
      .array(LegalEntityAssociationSchema)
      .exactOptional()
      .openapi({
        description:
          'List of legal entities associated with the current legal entity.\nFor example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.',
      }),
    id: z
      .string()
      .openapi({ description: 'The unique identifier of the legal entity.', readOnly: true }),
    individual: IndividualSchema.exactOptional().openapi({
      description: 'Information about the individual. Required if `type` is **individual**.',
    }),
    organization: OrganizationSchema.exactOptional().openapi({
      description: 'Information about the organization. Required if `type` is **organization**.',
    }),
    problems: z
      .array(CapabilityProblemSchema)
      .exactOptional()
      .openapi({
        description: 'List of verification errors related to capabilities for the legal entity.',
        'x-addedInVersion': '3',
      }),
    reference: z
      .string()
      .max(150)
      .exactOptional()
      .openapi({ description: 'Your reference for the legal entity, maximum 150 characters.' }),
    soleProprietorship: SoleProprietorshipSchema.exactOptional().openapi({
      description:
        'Information about the sole proprietorship. Required if `type` is **soleProprietorship**.',
      'x-addedInVersion': '2',
    }),
    transferInstruments: z
      .array(TransferInstrumentReferenceSchema)
      .exactOptional()
      .openapi({
        description: 'List of transfer instruments that the legal entity owns.',
        readOnly: true,
      }),
    trust: TrustSchema.exactOptional().openapi({
      description: 'Information about the trust. Required if `type` is **trust**.',
    }),
    type: z
      .enum([
        'individual',
        'organization',
        'soleProprietorship',
        'trust',
        'unincorporatedPartnership',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of legal entity.\n\nPossible values: **individual**, **organization**, **soleProprietorship**, or **trust**.',
      }),
    unincorporatedPartnership: UnincorporatedPartnershipSchema.exactOptional().openapi({
      description:
        'Information about the unincorporated partnership. Required if `type` is **unincorporatedPartnership**.',
    }),
    verificationDeadlines: z
      .array(VerificationDeadlineSchema)
      .exactOptional()
      .openapi({
        description:
          'List of verification deadlines and the capabilities that will be disallowed if verification errors are not resolved.',
        readOnly: true,
        'x-addedInVersion': '3',
      }),
    verificationPlan: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A key-value pair that specifies the verification process for a legal entity. Set to **upfront** for upfront verification for [marketplaces](https://docs.adyen.com/marketplaces/verification-overview/verification-types/#upfront-verification).',
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('LegalEntity')

const LegalEntityInfoSchema = z
  .strictObject({
    capabilities: z
      .record(z.string(), LegalEntityCapabilitySchema)
      .exactOptional()
      .openapi({
        description:
          'Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.',
      }),
    entityAssociations: z
      .array(LegalEntityAssociationSchema)
      .exactOptional()
      .openapi({
        description:
          'List of legal entities associated with the current legal entity.\nFor example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.',
      }),
    individual: IndividualSchema.exactOptional().openapi({
      description: 'Information about the individual. Required if `type` is **individual**.',
    }),
    organization: OrganizationSchema.exactOptional().openapi({
      description: 'Information about the organization. Required if `type` is **organization**.',
    }),
    reference: z
      .string()
      .max(150)
      .exactOptional()
      .openapi({ description: 'Your reference for the legal entity, maximum 150 characters.' }),
    soleProprietorship: SoleProprietorshipSchema.exactOptional().openapi({
      description:
        'Information about the sole proprietorship. Required if `type` is **soleProprietorship**.',
      'x-addedInVersion': '2',
    }),
    trust: TrustSchema.exactOptional().openapi({
      description: 'Information about the trust. Required if `type` is **trust**.',
    }),
    type: z
      .enum([
        'individual',
        'organization',
        'soleProprietorship',
        'trust',
        'unincorporatedPartnership',
      ])
      .exactOptional()
      .openapi({
        description:
          'The type of legal entity.\n\nPossible values: **individual**, **organization**, **soleProprietorship**, or **trust**.',
      }),
    unincorporatedPartnership: UnincorporatedPartnershipSchema.exactOptional().openapi({
      description:
        'Information about the unincorporated partnership. Required if `type` is **unincorporatedPartnership**.',
    }),
    verificationPlan: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A key-value pair that specifies the verification process for a legal entity. Set to **upfront** for upfront verification for [marketplaces](https://docs.adyen.com/marketplaces/verification-overview/verification-types/#upfront-verification).',
      }),
  })
  .openapi({ required: [] })
  .openapi('LegalEntityInfo')

const LegalEntityInfoRequiredTypeSchema = z
  .strictObject({
    capabilities: z
      .record(z.string(), LegalEntityCapabilitySchema)
      .exactOptional()
      .openapi({
        description:
          'Contains key-value pairs that specify the actions that the legal entity can do in your platform.The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability.',
      }),
    entityAssociations: z
      .array(LegalEntityAssociationSchema)
      .exactOptional()
      .openapi({
        description:
          'List of legal entities associated with the current legal entity.\nFor example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.',
      }),
    individual: IndividualSchema.exactOptional().openapi({
      description: 'Information about the individual. Required if `type` is **individual**.',
    }),
    organization: OrganizationSchema.exactOptional().openapi({
      description: 'Information about the organization. Required if `type` is **organization**.',
    }),
    reference: z
      .string()
      .max(150)
      .exactOptional()
      .openapi({ description: 'Your reference for the legal entity, maximum 150 characters.' }),
    soleProprietorship: SoleProprietorshipSchema.exactOptional().openapi({
      description:
        'Information about the sole proprietorship. Required if `type` is **soleProprietorship**.',
      'x-addedInVersion': '2',
    }),
    trust: TrustSchema.exactOptional().openapi({
      description: 'Information about the trust. Required if `type` is **trust**.',
    }),
    type: z
      .enum([
        'individual',
        'organization',
        'soleProprietorship',
        'trust',
        'unincorporatedPartnership',
      ])
      .openapi({
        description:
          'The type of legal entity.\n\n Possible values: **individual**, **organization**, **soleProprietorship**, or **trust**.',
      }),
    unincorporatedPartnership: UnincorporatedPartnershipSchema.exactOptional().openapi({
      description:
        'Information about the unincorporated partnership. Required if `type` is **unincorporatedPartnership**.',
    }),
    verificationPlan: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A key-value pair that specifies the verification process for a legal entity. Set to **upfront** for upfront verification for [marketplaces](https://docs.adyen.com/marketplaces/verification-overview/verification-types/#upfront-verification).',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('LegalEntityInfoRequiredType')

const OnboardingLinkSchema = z
  .strictObject({
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL of the hosted onboarding page where you need to redirect your user. This URL:\n\n - Expires after 4 minutes.\n\n- Can only be used once.\n\n- Can only be clicked once by the user.\n\nIf the link expires, you need to create a new link.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OnboardingLink')

const OnboardingLinkSettingsSchema = z
  .strictObject({
    acceptedCountries: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The list of countries the user can choose from in hosted onboarding when `editPrefilledCountry` is allowed.\n\nThe value must be in the two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code format.\n\nThe array is empty by default, allowing all [countries and regions supported by hosted onboarding](https://docs.adyen.com/platforms/onboard-users/#hosted-onboarding).',
      }),
    allowBankAccountFormatSelection: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default value: **false**\n\nIndicates if the user can select the format for their payout account (if applicable).',
      }),
    allowDebugUi: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default value: **true**\n\nIndicates whether the debug user interface (UI) is enabled. The debug UI provides information for your support staff to diagnose and resolve user issues during onboarding. It can be accessed using a keyboard shortcut.',
      }),
    allowIntraRegionCrossBorderPayout: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default value: **false**\n\nIndicates if the user can select a payout account in a different EU/EEA location (including Switzerland and the UK) than the location of their legal entity.',
      }),
    changeLegalEntityType: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default value: **true**\n\nIndicates if the user can change their legal entity type.',
      }),
    editPrefilledCountry: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Default value: **true**\n\nIndicates if the user can change the country of their legal entity's address, for example the registered address of an organization.",
      }),
    enforceLegalAge: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default value: **false**\n\nIndicates if only users above the age of 18 can be onboarded.',
      }),
    hideOnboardingIntroductionIndividual: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default value: **true**\n\nIndicates whether the introduction screen is hidden for the user of the individual legal entity type.\nThe introduction screen provides brief instructions for the subsequent steps in the hosted onboarding process.',
      }),
    hideOnboardingIntroductionOrganization: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default value: **true**\n\nIndicates whether the introduction screen is hidden for the user of the organization legal entity type.\nThe introduction screen provides brief instructions for the subsequent steps in the hosted onboarding process.',
      }),
    hideOnboardingIntroductionSoleProprietor: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default value: **true**\n\nIndicates whether the introduction screen is hidden for the user of the sole proprietorship legal entity type.\nThe introduction screen provides brief instructions for the subsequent steps in the hosted onboarding process.',
      }),
    hideOnboardingIntroductionTrust: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default value: **true**\n\nIndicates whether the introduction screen is hidden for the user of the trust legal entity type.\nThe introduction screen provides brief instructions for the subsequent steps in the hosted onboarding process.',
      }),
    instantBankVerification: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default value: **true**\n\nIndicates if the user can initiate the verification process through open banking providers, like Plaid or Tink.',
      }),
    requirePciSignEcomMoto: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default value: **false**\n\nIndicates if the user is required to sign a PCI questionnaires for the **ecomMoto** sales channel type.',
      }),
    requirePciSignEcommerce: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default value: **false**\n\nIndicates if the user is required to sign a PCI questionnaires for the **eCommerce** sales channel type.',
      }),
    requirePciSignPos: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default value: **false**\n\nIndicates if the user is required to sign a PCI questionnaires for the **pos** sales channel type.',
      }),
    requirePciSignPosMoto: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Default value: **false**\n\nIndicates if the user is required to sign a PCI questionnaires for the **posMoto** sales channel type.',
      }),
    transferInstrumentLimit: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The maximum number of transfer instruments the user can create.' }),
  })
  .openapi({ required: [] })
  .openapi('OnboardingLinkSettings')

const OnboardingLinkInfoSchema = z
  .strictObject({
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The language that will be used for the page, specified by a combination of two letter [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) language and [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country codes. See possible valuesfor [marketplaces](https://docs.adyen.com/marketplaces/onboard-users/hosted#supported-languages) or [platforms](https://docs.adyen.com/platforms/onboard-users/hosted#supported-languages). \n\nIf not specified in the request or if the language is not supported, the page uses the browser language. If the browser language is not supported, the page uses **en-US** by default.',
      }),
    redirectUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The URL where the user is redirected after they complete hosted onboarding.',
      }),
    settings: OnboardingLinkSettingsSchema.exactOptional().openapi({
      description:
        'Key-value pairs indicating the settings for the hosted onboarding page. The key represents a specific setting.',
    }),
    themeId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique identifier of the hosted onboarding theme.' }),
  })
  .openapi({ required: [] })
  .openapi('OnboardingLinkInfo')

const OnboardingThemeSchema = z
  .strictObject({
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The creation date of the theme.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'The description of the theme.' }),
    id: z.string().openapi({ description: 'The unique identifier of the theme.' }),
    properties: z
      .record(z.string(), z.string())
      .openapi({ description: 'The properties of the theme.' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when the theme was last updated.' }),
  })
  .openapi({ required: ['createdAt', 'id', 'properties'] })
  .openapi('OnboardingTheme')

const OnboardingThemesSchema = z
  .strictObject({
    next: z
      .string()
      .exactOptional()
      .openapi({ description: 'The next page. Only present if there is a next page.' }),
    previous: z
      .string()
      .exactOptional()
      .openapi({ description: 'The previous page. Only present if there is a previous page.' }),
    themes: z.array(OnboardingThemeSchema).openapi({ description: 'List of onboarding themes.' }),
  })
  .openapi({ required: ['themes'] })
  .openapi('OnboardingThemes')

const PciSigningRequestSchema = z
  .strictObject({
    pciTemplateReferences: z
      .array(z.string())
      .openapi({
        description: 'The array of Adyen-generated unique identifiers for the questionnaires.',
      }),
    signedBy: z
      .string()
      .openapi({
        description:
          'The [legal entity ID](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) of the individual who signs the PCI questionnaire.',
      }),
  })
  .openapi({ required: ['pciTemplateReferences', 'signedBy'] })
  .openapi('PciSigningRequest')

const PciSigningResponseSchema = z
  .strictObject({
    pciQuestionnaireIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The unique identifiers of the signed PCI documents.' }),
    signedBy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [legal entity ID](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) of the individual who signed the PCI questionnaire.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PciSigningResponse')

const ServiceErrorSchema = z
  .strictObject({
    errorCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The error code mapped to the error message.' }),
    errorType: z.string().exactOptional().openapi({ description: 'The category of the error.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short explanation of the issue.' }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The PSP reference of the payment.' }),
    status: z.int32().exactOptional().openapi({ description: 'The HTTP response status.' }),
  })
  .openapi({ required: [] })
  .openapi('ServiceError')

const SetTaxElectronicDeliveryConsentRequestSchema = z
  .strictObject({
    US1099k: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Consent to electronically deliver tax form US1099-K.' }),
  })
  .openapi({ required: [] })
  .openapi('SetTaxElectronicDeliveryConsentRequest')

const TransferInstrumentSchema = z
  .strictObject({
    bankAccount: BankAccountInfoSchema.openapi({
      description: "Contains information about the legal entity's bank account.",
    }),
    capabilities: z
      .record(z.string(), SupportingEntityCapabilitySchema)
      .exactOptional()
      .openapi({
        description: 'List of capabilities for this transfer instrument.',
        'x-addedInVersion': '3',
      }),
    documentDetails: z
      .array(DocumentReferenceSchema)
      .exactOptional()
      .openapi({
        description: 'List of documents uploaded for the transfer instrument.',
        'x-addedInVersion': '2',
      }),
    id: z
      .string()
      .openapi({
        description: 'The unique identifier of the transfer instrument.',
        readOnly: true,
      }),
    legalEntityId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) that owns the transfer instrument.',
      }),
    problems: z
      .array(CapabilityProblemSchema)
      .exactOptional()
      .openapi({
        description:
          'The verification errors related to capabilities for this transfer instrument.',
        'x-addedInVersion': '3',
      }),
    type: z
      .enum(['bankAccount', 'recurringDetail'])
      .openapi({
        description: 'The type of transfer instrument.\n\nPossible value: **bankAccount**.',
      }),
  })
  .openapi({ required: ['bankAccount', 'id', 'legalEntityId', 'type'] })
  .openapi('TransferInstrument')

const TransferInstrumentInfoSchema = z
  .strictObject({
    bankAccount: BankAccountInfoSchema.openapi({
      description: "Contains information about the legal entity's bank account.",
    }),
    legalEntityId: z
      .string()
      .openapi({
        description:
          'The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) that owns the transfer instrument.',
      }),
    type: z
      .enum(['bankAccount', 'recurringDetail'])
      .openapi({
        description: 'The type of transfer instrument.\n\nPossible value: **bankAccount**.',
      }),
  })
  .openapi({ required: ['bankAccount', 'legalEntityId', 'type'] })
  .openapi('TransferInstrumentInfo')

const VerificationErrorsSchema = z
  .strictObject({
    problems: z
      .array(CapabilityProblemSchema)
      .exactOptional()
      .openapi({ description: 'List of the verification errors.', 'x-addedInVersion': '2' }),
  })
  .openapi({ required: [] })
  .openapi('VerificationErrors')

const GetBusinessLinesIdSuccess_200Example = {
  summary: 'Details of a business line',
  description: 'Example response when getting the details of a business line',
  value: {
    service: 'banking',
    industryCode: '4531',
    legalEntityId: 'LE00000000000000000000001',
    sourceOfFunds: {
      adyenProcessedFunds: false,
      description: 'Funds from my flower shop business',
      type: 'business',
    },
    webData: [{ webAddress: 'https://www.adyen.com', webAddressId: 'SE322JV223222J5H8V87B3DHN' }],
    id: 'SE322KH223222F5GV2SQ924F6',
  },
}

const GetDocumentsIdSuccess_200Example = {
  summary: 'Details of a document',
  description: 'Example response when getting document details',
  value: {
    type: 'registrationDocument',
    attachments: [{ content: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==' }],
    description: 'Registration doc for Example Company',
    fileName: 'Registration doc for Example Company',
    owner: { id: 'LE00000000000000000000001', type: 'legalEntity' },
    id: 'SE322JV223222F5GV2N9L8GDK',
  },
}

const GetLegalEntitiesIdBusinessLinesSuccess_200Example = {
  summary: 'List of business lines for a legal entity',
  description: 'Example response when getting the list of business lines for a legal entity',
  value: {
    businessLines: [
      {
        service: 'banking',
        industryCode: '55',
        legalEntityId: 'LE00000000000000000000001',
        sourceOfFunds: {
          adyenProcessedFunds: false,
          description: 'Funds from my flower shop business',
          type: 'business',
        },
        webData: [
          { webAddress: 'https://www.adyen.com', webAddressId: 'SE577HA334222K5H8V87B3BPU' },
        ],
        id: 'SE322JV223222F5GVGMLNB83F',
      },
      {
        service: 'paymentProcessing',
        industryCode: '339E',
        legalEntityId: 'LE00000000000000000000001',
        salesChannels: ['eCommerce', 'ecomMoto'],
        webData: [{ webAddress: 'https://yoururl.com', webAddressId: 'SE908HJ723222F5GVGPNR55YH' }],
        id: 'SE322JV223222F5GVGPNRB9GJ',
      },
    ],
  },
}

const GetLegalEntitiesIdPciQuestionnairesPciidSuccess_200Example = {
  summary: 'Details of a PCI questionnaire',
  description: 'Example response when getting the details of a PCI questionnaire',
  value: {
    content: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==',
    createdAt: '2023-03-02T17:54:19.538365Z',
    id: 'PCID422GZ22322565HHMH48CW63CPH',
    validUntil: '2024-03-01T17:54:19.538365Z',
  },
}

const GetLegalEntitiesIdPciQuestionnairesSuccess_200Example = {
  summary: 'Details of PCI questionnaires signed by a user',
  description: 'Example response when getting the list of PCI questionnaires',
  value: {
    data: [
      {
        createdAt: '2023-03-02T17:54:19.538365Z',
        id: 'PCID422GZ22322565HHMH48CW63CPH',
        validUntil: '2024-03-01T17:54:19.538365Z',
      },
      {
        createdAt: '2023-03-02T17:54:19.538365Z',
        id: 'PCID422GZ22322565HHMH49CW75Z9H',
        validUntil: '2024-03-01T17:54:19.538365Z',
      },
    ],
  },
}

const GetLegalEntitiesIdSuccess_200Example = {
  summary: 'Details of a legal entity',
  description: 'Example response when getting the details of a legal entity',
  value: {
    capabilities: {
      sendToTransferInstrument: {
        allowed: false,
        requested: true,
        transferInstruments: [
          {
            allowed: false,
            id: 'SE322KH223222F5GXZFNM3BGP',
            requested: true,
            verificationStatus: 'pending',
          },
        ],
        verificationStatus: 'pending',
      },
      receivePayments: { allowed: false, requested: true, verificationStatus: 'pending' },
      sendToBalanceAccount: { allowed: false, requested: true, verificationStatus: 'pending' },
      receiveFromPlatformPayments: {
        allowed: false,
        requested: true,
        verificationStatus: 'pending',
      },
      receiveFromBalanceAccount: { allowed: false, requested: true, verificationStatus: 'pending' },
    },
    individual: {
      email: 's.hopper@example.com',
      birthData: { dateOfBirth: '1990-06-21' },
      name: { firstName: 'Simone', lastName: 'Hopper' },
      phone: { number: '+31858888138', phoneCountryCode: 'NL', type: 'mobile' },
      residentialAddress: {
        city: 'Amsterdam',
        country: 'NL',
        postalCode: '1011DJ',
        street: 'Simon Carmiggeltstraat 6 - 50',
        street2: '274',
      },
    },
    type: 'individual',
    id: 'YOUR_LEGAL_ENTITY',
    transferInstruments: [
      {
        id: 'SE322KH223222F5GXZFNM3BGP',
        accountIdentifier: 'NL**ABNA******0123',
        trustedSource: false,
      },
    ],
  },
}

const GetLegalEntitiesIdTermsOfServiceAcceptanceInfosSuccess_200Example = {
  summary: 'Terms of Service information for a legal entity',
  description: 'Example response when getting Terms of Service information for a legal entity',
  value: {
    data: [
      {
        acceptedBy: 'LE00000000000000000000002',
        acceptedFor: 'LE00000000000000000000001',
        createdAt: '2022-12-05T13:36:58.212253Z',
        id: 'TOSA000AB00000000B2AAAB2BA0AA0',
        type: 'adyenIssuing',
      },
    ],
  },
}

const GetLegalEntitiesIdTermsOfServiceStatusSuccess_200Example = {
  summary: 'Terms of Service status for a legal entity',
  description: 'Example response when getting the type of Terms of Service',
  value: { termsOfServiceTypes: ['adyenIssuing'] },
}

const GetThemesIdSuccess_200Example = {
  summary: 'Details of a page theme',
  description: 'Example response when getting the details of a page theme',
  value: {
    description: 'Light colors theme',
    properties: {
      privacyStatementPage: 'https://www.adyen.com/legal/terms-and-conditions',
      supportPage: 'https://www.adyen.com/contact',
      logo: 'ONBA422JV223222D5FWC4TK25S3DQW',
      pageTitle: 'Example onboarding light colors',
      backgroundColor: '#FFFFFF',
      faqPage: 'https://docs.adyen.com/hosted-onboarding-faqs',
      backgroundImage: 'ONBA422JV223222D5G82M96F6P2VTV',
      pageLayout: 'withBackground',
    },
    createdAt: '2022-06-22T00:00:00+02:00',
    id: 'ONBT422KH223222D5G82M968PB46HR',
    updatedAt: '2022-08-25T00:00:00+02:00',
  },
}

const GetThemesSuccess_200Example = {
  summary: 'List of hosted onboarding themes for your balance platform',
  description: 'Example response when getting the list of hosted onboarding themes',
  value: {
    themes: [
      {
        description: 'Dark colors theme',
        properties: {
          supportPage: 'https://www.adyen.com/contact',
          logo: 'ONBA422JV223222D5G8VG2T8JV39GV',
          pageTitle: 'Example onboarding dark colors',
          backgroundColor: '#000000',
          faqPage: 'https://docs.adyen.com/hosted-onboarding-faqs',
          backgroundImage: 'ONBA422KH223222D5G8VG2TG9S5ZBH',
          pageLayout: 'withBackground',
        },
        createdAt: '2022-01-20T00:00:00+01:00',
        id: 'ONBT422JV223222D5FGJ77B9C52WNN',
        updatedAt: '2022-08-25T00:00:00+02:00',
      },
      {
        description: 'Light colors theme',
        properties: {
          privacyStatementPage: 'https://www.adyen.com/legal/terms-and-conditions',
          supportPage: 'https://www.adyen.com/contact',
          logo: 'ONBA422JV223222D5FWC4TK25S3DQW',
          pageTitle: 'Example onboarding light colors',
          backgroundColor: '#FFFFFF',
          faqPage: 'https://docs.adyen.com/hosted-onboarding-faqs',
          backgroundImage: 'ONBA422JV223222D5G82M96F6P2VTV',
          pageLayout: 'withBackground',
        },
        createdAt: '2022-06-22T00:00:00+02:00',
        id: 'ONBT422KH223222D5G82M968PB46HR',
        updatedAt: '2022-08-25T00:00:00+02:00',
      },
    ],
  },
}

const GetTransferInstrumentsIdSuccess_200Example = {
  summary: 'Details of a transfer instrument',
  description: 'Example response when getting the details of a new transfer instrument',
  value: {
    bankAccount: {
      accountIdentification: { type: 'iban', iban: 'NL62ABNA0000000123' },
      countryCode: 'NL',
    },
    legalEntityId: 'LE00000000000000000000001',
    type: 'bankAccount',
    id: 'SE322KH223222F5GXZFNM3BGP',
  },
}

const PatchBusinessLinesIdUpdateBusinessLineExample = {
  summary: 'Update a business line',
  description: 'Example request for updating the industry code of a business line',
  value: { industryCode: '55', webData: [{ webAddress: 'https://www.example.com' }] },
}

const PatchBusinessLinesIdUpdateBusinessLine_200Example = {
  summary: 'Business line updated',
  description: 'Example response for updating the industry code of a business line',
  value: {
    service: 'banking',
    industryCode: '55',
    legalEntityId: 'LE00000000000000000000001',
    sourceOfFunds: {
      adyenProcessedFunds: false,
      description: 'Funds from my flower shop business',
      type: 'business',
    },
    webData: [{ webAddress: 'https://www.example.com', webAddressId: 'SE966LI345672J5H8V87B3FGH' }],
    id: 'SE322JV223222F5GVGMLNB83F',
  },
}

const PatchDocumentsIdUpdateDocumentExample = {
  summary: 'Update a document',
  description: 'Example request for updating a document',
  value: { type: 'proofOfIndustry', description: 'Proof of industry doc for Example Company' },
}

const PatchDocumentsIdUpdateDocument_200Example = {
  summary: 'Document updated',
  description: 'Example response when a document is updated',
  value: {
    type: 'proofOfIndustry',
    attachments: [{ content: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==' }],
    description: 'Proof of industry for Example Company',
    fileName: 'Proof of industry for Example Company',
    owner: { id: 'LE00000000000000000000001', type: 'legalEntity' },
    id: 'SE322JV223222F5GV2N9L8GDK',
  },
}

const PatchLegalEntitiesIdChangeLegalEntityTypeExample = {
  summary: 'Change a legal entity from an organization to an individual',
  description: 'Example request when changing the legal entity type',
  value: { type: 'individual' },
}

const PatchLegalEntitiesIdChangeLegalEntityType_200Example = {
  summary: 'Legal entity type changed',
  description: 'Example response when changing the legal entity type',
  value: {
    individual: {
      name: { firstName: 'Explorer', lastName: 'Company based in US' },
      residentialAddress: { country: 'US' },
    },
    type: 'individual',
    id: 'LE00000000000000000000001',
  },
}

const PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidUpdateTermsofServiceExample = {
  summary: 'Accept the Terms of Service document',
  description: 'Example request for accepting the Terms of Service document',
  value: { acceptedBy: 'LE00000000000000000000002' },
}

const PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidUpdateTermsofService_200Example = {
  summary: 'Terms of Service document accepted',
  description: 'Example response when accepting a Terms of Service document',
  value: {
    acceptedBy: 'LE00000000000000000000002',
    id: 'TOSA000AB00000000B2AAAB2BA0AA0',
    language: 'en',
    termsOfServiceDocumentId: 'abc123',
    type: 'adyenIssuing',
  },
}

const PatchLegalEntitiesIdUpdateLegalEntityOrganizationExample = {
  summary: 'Add entity associations to an organization',
  description: 'Example request adding entity associations to a legal entity',
  value: {
    entityAssociations: [
      { jobTitle: 'CEO', legalEntityId: 'LE00000000000000000000002', type: 'uboThroughControl' },
    ],
  },
}

const PatchLegalEntitiesIdUpdateLegalEntityOrganization_200Example = {
  summary: 'Entity associations added',
  description: 'Example response for adding an entity association to an organization',
  value: {
    entityAssociations: [
      {
        associatorId: 'LE00000000000000000000001',
        entityType: 'individual',
        jobTitle: 'CEO',
        legalEntityId: 'LE00000000000000000000002',
        name: 'Simone Hopper',
        type: 'uboThroughControl',
      },
    ],
    organization: {
      email: 'john.doe@adyen.com',
      phone: { number: '646467363', type: 'mobile' },
      description: 'FinTech',
      doingBusinessAs: 'Adyen BV',
      legalName: 'Adyen BV',
      registeredAddress: {
        city: 'AMS',
        country: 'NL',
        postalCode: '1234EE',
        stateOrProvince: 'NH',
        street: 'Simon Carmiggeltstraat 6 - 50',
      },
      registrationNumber: '',
      stockData: { marketIdentifier: 'ADYN', stockNumber: 'NL012345ABC4', tickerSymbol: 'ADYN.M' },
      type: 'listedPublicCompany',
    },
    type: 'organization',
    id: 'LE00000000000000000000001',
  },
}

const PatchLegalEntitiesIdUpdateLegalEntitySolePropExample = {
  summary: 'Add entity associations to a sole proprietorship',
  description: 'Example request adding an entity association to a sole proprietorship',
  value: {
    entityAssociations: [
      { legalEntityId: 'LE00000000000000000000002', type: 'soleProprietorship' },
    ],
  },
}

const PatchLegalEntitiesIdUpdateLegalEntitySoleProp_200Example = {
  summary: 'Entity association added to a sole proprietorship',
  description: 'Example response for adding an entity association to a sole proprietorship',
  value: {
    entityAssociations: [
      {
        associatorId: 'LE00000000000000000000001',
        entityType: 'soleProprietorship',
        legalEntityId: 'LE00000000000000000000002',
        type: 'soleProprietorship',
      },
    ],
    individual: {
      email: 's.eller@example.com',
      birthData: { dateOfBirth: '1990-06-21' },
      name: { firstName: 'Shelly', lastName: 'Eller' },
      residentialAddress: {
        city: 'Amsterdam',
        country: 'NL',
        postalCode: '1011DJ',
        street: 'Simon Carmiggeltstraat 6 - 50',
      },
    },
    type: 'individual',
    id: 'LE00000000000000000000001',
  },
}

const PatchLegalEntitiesIdUpdateLegalRepresentativeExample = {
  summary: 'Associate a legal representative with a minor user',
  description: 'Example request associating a legal representative with a minor user',
  value: {
    entityAssociations: [
      {
        legalEntityId: 'LE00000000000000000000002',
        relationship: 'parent',
        type: 'legalRepresentative',
      },
    ],
  },
}

const PatchLegalEntitiesIdUpdateLegalRepresentative_200Example = {
  summary: 'Legal representative associated',
  description: 'Example response for associating a legal representative with a minor user',
  value: {
    entityAssociations: [
      {
        associatorId: 'LE00000000000000000000001',
        legalEntityId: 'LE00000000000000000000002',
        name: 'Simone Hopper',
        type: 'legalRepresentative',
      },
    ],
    individual: {
      email: 's.eller@example.com',
      birthData: { dateOfBirth: '1990-06-21' },
      name: { firstName: 'Shelly', lastName: 'Eller' },
      residentialAddress: {
        city: 'Amsterdam',
        country: 'NL',
        postalCode: '1011DJ',
        street: 'Simon Carmiggeltstraat 6 - 50',
      },
    },
    type: 'individual',
    id: 'LE00000000000000000000001',
  },
}

const PatchLegalEntitiesIdUpdateTrustMemberExample = {
  summary: 'Associate a trust member with a trust',
  description: 'Example request associating a trust member with a trust',
  value: {
    entityAssociations: [{ legalEntityId: 'LE00000000000000000000002', type: 'protector' }],
  },
}

const PatchLegalEntitiesIdUpdateTrustMember_200Example = {
  summary: 'Trust member associated',
  description: 'Example response for associating a trust member with a trust',
  value: {
    entityAssociations: [
      {
        associatorId: 'LE00000000000000000000001',
        legalEntityId: 'LE00000000000000000000002',
        name: 'Simone Hopper',
        type: 'protector',
      },
    ],
    trust: {
      name: 'Example Trust',
      type: 'fixedUnitTrust',
      doingBusinessAs: "West's Store",
      countryOfGoverningLaw: 'AU',
      taxInformation: [{ country: 'AU', type: 'ABN', number: '12345678901' }],
      registeredAddress: {
        street: 'Winfield Avenue',
        city: 'Sydney',
        postalCode: '1197',
        stateOrProvince: 'NSW',
        country: 'AU',
      },
      undefinedBeneficiaryInfo: [{ description: 'My future children' }],
    },
    type: 'trust',
    id: 'LE00000000000000000000001',
  },
}

const PatchLegalEntitiesIdUpdateTrustMemberExemptExample = {
  summary: 'Associate an exempt settlor with a trust',
  description: 'Example request associating an exempt settlor with a trust',
  value: {
    entityAssociations: [
      {
        legalEntityId: 'LE00000000000000000000002',
        type: 'settlor',
        entityType: 'individual',
        settlorExemptionReason: ['deceased', 'professionalServiceProvider'],
      },
    ],
  },
}

const PatchLegalEntitiesIdUpdateTrustMemberExempt_200Example = {
  summary: 'Exempt settlor associated',
  description: 'Example response for associating an exempt settlor with a trust',
  value: {
    entityAssociations: [
      {
        associatorId: 'LE00000000000000000000001',
        legalEntityId: 'LE00000000000000000000002',
        type: 'settlor',
        entityType: 'individual',
        settlorExemptionReason: ['deceased', 'professionalServiceProvider'],
      },
    ],
    trust: {
      name: 'Example Trust',
      type: 'fixedUnitTrust',
      doingBusinessAs: "West's Store",
      countryOfGoverningLaw: 'AU',
      taxInformation: [{ country: 'AU', type: 'ABN', number: '12345678901' }],
      registeredAddress: {
        street: 'Winfield Avenue',
        city: 'Sydney',
        postalCode: '1197',
        stateOrProvince: 'NSW',
        country: 'AU',
      },
      undefinedBeneficiaryInfo: [{ description: 'My future children' }],
    },
    type: 'trust',
    id: 'LE00000000000000000000001',
  },
}

const PatchTransferInstrumentsIdUpdateTransferInstrumentExample = {
  summary: 'Update a transfer instrument',
  description: 'Example request for updating a transfer instrument',
  value: {
    bankAccount: { accountIdentification: { type: 'iban', iban: 'NL02ABNA0123456789' } },
    legalEntityId: 'LE00000000000000000000001',
    type: 'bankAccount',
  },
}

const PatchTransferInstrumentsIdUpdateTransferInstrument_200Example = {
  summary: 'Transfer instrument updated',
  description: 'Example response for updating a transfer instrument',
  value: {
    bankAccount: {
      accountIdentification: { type: 'iban', iban: 'NL02ABNA0123456789' },
      countryCode: 'NL',
    },
    legalEntityId: 'LE00000000000000000000001',
    type: 'bankAccount',
    id: 'SE322KH223222F5GXZFNM3BGP',
  },
}

const PostBusinessLinesCreateBusinessLinesBusinessAccountsExample = {
  summary: 'Create a business line for a business account',
  description: 'Example request for creating a business line for a business account',
  value: {
    service: 'banking',
    industryCode: '4531',
    webData: [{ webAddress: 'https://www.adyen.com' }],
    legalEntityId: 'LE00000000000000000000001',
    sourceOfFunds: {
      type: 'business',
      amount: { currency: 'EUR', value: 600000 },
      adyenProcessedFunds: false,
      description: 'Funds from my flower shop business',
    },
  },
}

const PostBusinessLinesCreateBusinessLinesBusinessAccounts_200Example = {
  summary: 'Business line created',
  description: 'Example response for creating a business line for a business account',
  value: {
    industryCode: '4531',
    legalEntityId: 'LE00000000000000000000001',
    service: 'banking',
    sourceOfFunds: {
      adyenProcessedFunds: false,
      amount: { currency: 'EUR', value: 600000 },
      description: 'Funds from my flower shop business',
      type: 'business',
    },
    webData: [{ webAddress: 'https://www.adyen.com', webAddressId: 'SE322JV223222F5H4CQGS77V4' }],
    id: 'SE322KT223222D5FJ7TJN2986',
  },
}

const PostBusinessLinesCreateBusinessLinesIssuingExample = {
  summary: 'Create a business line for card issuing',
  description: 'Example request for creating a business line for card issuing',
  value: {
    legalEntityId: 'LE00000000000000000000001',
    service: 'issuing',
    industryCode: '45391',
    sourceOfFunds: {
      adyenProcessedFunds: false,
      type: 'assetSale',
      dateOfSourceEvent: '2024-12-03',
      description: 'Sale of my property at Turfmarkt 654A, Haarlem, 2011CA.',
      amount: { currency: 'EUR', value: 600000 },
    },
  },
}

const PostBusinessLinesCreateBusinessLinesIssuing_200Example = {
  summary: 'Business line created',
  description: 'Example response for creating a business line for card issuing',
  value: {
    industryCode: '45391',
    legalEntityId: 'LE00000000000000000000001',
    service: 'issuing',
    sourceOfFunds: {
      adyenProcessedFunds: false,
      amount: { currency: 'EUR', value: 600000 },
      dateOfSourceEvent: '2024-12-03',
      description: 'Sale of my property at Turfmarkt 654A, Haarlem, 2011CA.',
      type: 'assetSale',
    },
    id: 'SE3292Q22322695M2KT779RHG',
  },
}

const PostBusinessLinesCreateBusinessLinesReceiveExample = {
  summary: 'Create a business line for receiving payments',
  description: 'Example request for creating a business line for receiving payments',
  value: {
    service: 'paymentProcessing',
    industryCode: '339E',
    salesChannels: ['eCommerce', 'ecomMoto'],
    legalEntityId: 'LE00000000000000000000001',
    webData: [{ webAddress: 'https://yoururl.com' }],
  },
}

const PostBusinessLinesCreateBusinessLinesReceive_200Example = {
  summary: 'Business line created',
  description: 'Example response for creating a business line for receiving payments',
  value: {
    service: 'paymentProcessing',
    industryCode: '339E',
    legalEntityId: 'LE00000000000000000000001',
    salesChannels: ['eCommerce', 'ecomMoto'],
    webData: [{ webAddress: 'https://yoururl.com', webAddressId: 'SE654AC923222F5H4CQGS77V4' }],
    id: 'SE322KT223222D5FJ7TJN2986',
  },
}

const PostDocumentsUploadDocumentExample = {
  summary: 'Upload a document',
  description: 'Example request for uploading a document',
  value: {
    type: 'registrationDocument',
    attachments: [{ content: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==' }],
    description: 'Registration doc for Example Company',
    owner: { id: 'LE00000000000000000000001', type: 'legalEntity' },
  },
}

const PostDocumentsUploadDocument_200Example = {
  summary: 'Document uploaded',
  description: 'Example response when a document is uploaded',
  value: {
    type: 'registrationDocument',
    attachments: [{ content: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==' }],
    description: 'Registration doc for Example Company',
    fileName: 'Registration doc for Example Company',
    owner: { id: 'LE00000000000000000000001', type: 'legalEntity' },
    id: 'SE322JV223222F5GV2N9L8GDK',
  },
}

const PostLegalEntitiesCreateLegalEntityIndividualAUExample = {
  summary: 'Create a legal entity for an individual residing in Australia',
  description:
    'Example request for creating a legal entity for an individual residing in Australia',
  value: {
    type: 'individual',
    individual: {
      residentialAddress: {
        city: 'Sydney',
        country: 'AU',
        postalCode: '1122',
        stateOrProvince: 'NSW',
        street: 'Winfield Avenue',
        street2: '12',
      },
      name: { firstName: 'Shelly', lastName: 'Eller' },
      identificationData: {
        issuerState: 'NSW',
        number: '1234567891',
        type: 'driversLicense',
        cardNumber: '112327',
      },
      birthData: { dateOfBirth: '1991-01-01' },
      email: 's.hopper@example.com',
    },
  },
}

const PostLegalEntitiesCreateLegalEntityIndividualAU_200Example = {
  summary: 'Individual legal entity created',
  description:
    'Example response for creating a legal entity for an individual residing in Australia',
  value: {
    individual: {
      email: 's.hopper@example.com',
      birthData: { dateOfBirth: '1991-01-01' },
      identificationData: {
        cardNumber: '112327',
        issuerState: 'NSW',
        number: '1234567891',
        type: 'driversLicense',
      },
      name: { firstName: 'Shelly', lastName: 'Eller' },
      residentialAddress: {
        city: 'Sydney',
        country: 'AU',
        postalCode: '1122',
        stateOrProvince: 'NSW',
        street: 'Winfield Avenue',
        street2: '12',
      },
    },
    type: 'individual',
    id: 'LE00000000000000000000001',
  },
}

const PostLegalEntitiesCreateLegalEntityIndividualNLExample = {
  summary: 'Create a legal entity for an individual residing in the Netherlands',
  description:
    'Example request for creating a legal entity for an individual residing in the Netherlands',
  value: {
    type: 'individual',
    individual: {
      residentialAddress: {
        city: 'Amsterdam',
        country: 'NL',
        postalCode: '1011DJ',
        street: 'Simon Carmiggeltstraat 6 - 50',
      },
      name: { firstName: 'Shelly', lastName: 'Eller' },
      phone: { number: '+31858888138', type: 'mobile' },
      birthData: { dateOfBirth: '1990-06-21' },
      email: 's.eller@example.com',
    },
  },
}

const PostLegalEntitiesCreateLegalEntityIndividualNL_200Example = {
  summary: 'Individual legal entity created',
  description:
    'Example response for creating a legal entity for an individual residing in the Netherlands',
  value: {
    individual: {
      email: 's.eller@example.com',
      birthData: { dateOfBirth: '1990-06-21' },
      name: { firstName: 'Shelly', lastName: 'Eller' },
      phone: { number: '+31858888138', phoneCountryCode: 'NL', type: 'mobile' },
      residentialAddress: {
        city: 'Amsterdam',
        country: 'NL',
        postalCode: '1011DJ',
        street: 'Simon Carmiggeltstraat 6 - 50',
      },
    },
    type: 'individual',
    id: 'LE00000000000000000000001',
  },
}

const PostLegalEntitiesCreateLegalEntityIndividualUSExample = {
  summary: 'Create a legal entity for an individual residing in the US',
  description: 'Example request for creating a legal entity for an individual residing in the US',
  value: {
    type: 'individual',
    individual: {
      residentialAddress: {
        city: 'New York',
        country: 'US',
        postalCode: '10003',
        stateOrProvince: 'NY',
        street: '71 5th Avenue',
        street2: '11th floor',
      },
      phone: { number: '+14153671502', type: 'mobile' },
      name: { firstName: 'Shelly', lastName: 'Eller' },
      birthData: { dateOfBirth: '1990-06-21' },
      email: 's.eller@example.com',
    },
  },
}

const PostLegalEntitiesCreateLegalEntityIndividualUS_200Example = {
  summary: 'Individual legal entity created',
  description: 'Example response for creating a legal entity for an individual residing in the US',
  value: {
    individual: {
      email: 's.eller@example.com',
      phone: { number: '+14153671502', type: 'mobile' },
      birthData: { dateOfBirth: '1990-06-21' },
      name: { firstName: 'Shelly', lastName: 'Eller' },
      residentialAddress: {
        city: 'New York',
        country: 'US',
        postalCode: '10003',
        stateOrProvince: 'NY',
        street: '71 5th Avenue',
        street2: '11th floor',
      },
    },
    type: 'individual',
    id: 'LE00000000000000000000001',
  },
}

const PostLegalEntitiesCreateLegalEntityOrganizationNLExample = {
  summary: 'Create a legal entity for a Dutch organization',
  description:
    'Example request for creating a legal entity for an organization operating in the Netherlands',
  value: {
    type: 'organization',
    organization: {
      legalName: 'Explorer Company based in NL',
      doingBusinessAs: 'API Company Trading',
      type: 'privateCompany',
      registeredAddress: {
        city: 'Amsterdam',
        country: 'NL',
        postalCode: '1011DJ',
        street: 'Simon Carmiggeltstraat 6 - 50',
      },
      registrationNumber: '34179503',
      email: 'organization@example.com',
    },
    entityAssociations: [
      { jobTitle: 'CEO', legalEntityId: 'LE00000000000000000000001', type: 'signatory' },
    ],
  },
}

const PostLegalEntitiesCreateLegalEntityOrganizationNL_200Example = {
  summary: 'Organization legal entity created',
  description:
    'Example response for creating a legal entity for an organization operating in the Netherlands',
  value: {
    entityAssociations: [
      {
        associatorId: 'LE00000000000000000000002',
        entityType: 'individual',
        jobTitle: 'CEO',
        legalEntityId: 'LE00000000000000000000001',
        name: 'Simone Hopper',
        type: 'signatory',
      },
    ],
    organization: {
      email: 'organization@example.com',
      doingBusinessAs: 'API Company Trading',
      legalName: 'Explorer Company based in NL',
      registeredAddress: {
        city: 'Amsterdam',
        country: 'NL',
        postalCode: '1011DJ',
        street: 'Simon Carmiggeltstraat 6 - 50',
      },
      registrationNumber: '34179503',
      type: 'privateCompany',
    },
    type: 'organization',
    id: 'LE00000000000000000000002',
  },
}

const PostLegalEntitiesCreateLegalEntityOrganizationUSExample = {
  summary: 'Create a legal entity for an organization in the US',
  description:
    'Example request for creating a legal entity for an organization operating in the US',
  value: {
    type: 'organization',
    organization: {
      legalName: 'Explorer Company based in US',
      registrationNumber: '101002749',
      type: 'privateCompany',
      registeredAddress: {
        city: 'New York',
        country: 'US',
        postalCode: '10003',
        stateOrProvince: 'NY',
        street: '71 5th Avenue',
        street2: '11th floor',
      },
    },
  },
}

const PostLegalEntitiesCreateLegalEntityOrganizationUS_200Example = {
  summary: 'Organization legal entity created',
  description:
    'Example response for creating a legal entity for an organization operating in the US',
  value: {
    organization: {
      legalName: 'Explorer Company based in US',
      registrationNumber: '101002749',
      registeredAddress: {
        city: 'New York',
        country: 'US',
        postalCode: '10003',
        stateOrProvince: 'NY',
        street: '71 5th Avenue',
        street2: '11th floor',
      },
      type: 'privateCompany',
    },
    type: 'organization',
    id: 'LE00000000000000000000001',
  },
}

const PostLegalEntitiesCreateLegalEntityPaymentInstrumentUserExample = {
  summary: 'Create an authorized user for an issued card.',
  description: 'Example request for creating an authorized user for an issued card',
  value: {
    type: 'individual',
    individual: {
      residentialAddress: { country: 'NL' },
      name: { firstName: 'John', lastName: 'Test' },
      birthData: { dateOfBirth: '1990-01-01' },
    },
    capabilities: {
      authorisedPaymentInstrumentUser: { requested: true, requestedLevel: 'notApplicable' },
    },
  },
}

const PostLegalEntitiesCreateLegalEntityPaymentInstrumentUser_200Example = {
  summary: 'Authorized user for an issued card created.',
  description: 'Example response for creating an authorized user for an issued card',
  value: {
    capabilities: {
      authorisedPaymentInstrumentUser: {
        allowed: false,
        requested: true,
        verificationStatus: 'pending',
      },
    },
    individual: {
      birthData: { dateOfBirth: '1990-01-01' },
      name: { firstName: 'John', lastName: 'Test' },
      residentialAddress: { country: 'NL' },
    },
    type: 'individual',
    id: 'LE32DBK223226C5M7MSG8CPD2',
  },
}

const PostLegalEntitiesCreateLegalEntitySolePropNLExample = {
  summary: 'Create a legal entity for a Dutch sole proprietor',
  description:
    'Example request for creating a legal entity for a sole proprietor operating in the Netherlands',
  value: {
    type: 'soleProprietorship',
    soleProprietorship: {
      name: 'Shelly Seller Sole Trader',
      countryOfGoverningLaw: 'NL',
      registeredAddress: {
        city: 'Amsterdam',
        country: 'NL',
        postalCode: '1011DJ',
        street: 'Simon Carmiggeltstraat 6 - 50',
      },
    },
  },
}

const PostLegalEntitiesCreateLegalEntitySolePropNL_200Example = {
  summary: 'Sole proprietor legal entity created',
  description:
    'Example response for creating a legal entity for a sole proprietor operating in the Netherlands',
  value: {
    type: 'soleProprietorship',
    soleProprietorship: {
      name: 'Shelly Seller Sole Trader',
      countryOfGoverningLaw: 'NL',
      registeredAddress: {
        city: 'Amsterdam',
        country: 'NL',
        postalCode: '1011DJ',
        street: 'Simon Carmiggeltstraat 6 - 50',
      },
    },
    id: 'LE00000000000000000000001',
  },
}

const PostLegalEntitiesCreateLegalEntitySolePropUSExample = {
  summary: 'Create a legal entity for a sole proprietor in the US',
  description:
    'Example request for creating a legal entity for a sole proprietor operating in the US',
  value: {
    type: 'soleProprietorship',
    soleProprietorship: {
      name: 'Shelly Eller Sole Trader',
      countryOfGoverningLaw: 'US',
      registeredAddress: {
        city: 'New York',
        country: 'US',
        postalCode: '10003',
        stateOrProvince: 'NY',
        street: '71 5th Avenue',
        street2: '11th floor',
      },
    },
  },
}

const PostLegalEntitiesCreateLegalEntitySolePropUS_200Example = {
  summary: 'Sole proprietor legal entity created',
  description:
    'Example response for creating a legal entity for a sole proprietor operating in the US',
  value: {
    type: 'soleProprietorship',
    soleProprietorship: {
      name: 'Shelly Eller Sole Trader',
      countryOfGoverningLaw: 'US',
      registeredAddress: {
        city: 'New York',
        country: 'US',
        postalCode: '10003',
        stateOrProvince: 'NY',
        street: '71 5th Avenue',
        street2: '11th floor',
      },
    },
    id: 'LE00000000000000000000001',
  },
}

const PostLegalEntitiesCreateTrustAUExample = {
  summary: 'Create a legal entity for a trust in Australia',
  description: 'Example request for creating a legal entity for a trust in Australia',
  value: {
    type: 'trust',
    trust: {
      name: 'Example Trust',
      type: 'fixedUnitTrust',
      doingBusinessAs: "West's Store",
      countryOfGoverningLaw: 'AU',
      taxInformation: [{ country: 'AU', type: 'ABN', number: '12345678123' }],
      registeredAddress: {
        street: 'Winfield Avenue',
        city: 'Sydney',
        postalCode: '1197',
        stateOrProvince: 'NSW',
        country: 'AU',
      },
      undefinedBeneficiaryInfo: [{ description: 'My future children' }],
    },
  },
}

const PostLegalEntitiesCreateTrustAU_200Example = {
  summary: 'Trust legal entity created',
  description: 'Example response for creating a legal entity for a trust in Australia',
  value: {
    trust: {
      countryOfGoverningLaw: 'AU',
      doingBusinessAs: "West's Store",
      name: 'Example Trust',
      registeredAddress: {
        city: 'Sydney',
        country: 'AU',
        postalCode: '1197',
        stateOrProvince: 'NSW',
        street: 'Winfield Avenue',
      },
      taxInformation: [{ country: 'AU', number: '12345678901', type: 'ABN' }],
      type: 'fixedUnitTrust',
      undefinedBeneficiaryInfo: [
        { description: 'My future children', reference: 'SE322KH223222J5HJ6JRB75HQ' },
      ],
    },
    type: 'trust',
    id: 'LE322KH223222J5HJ6JRB75C5',
  },
}

const PostLegalEntitiesCreateUnincorporatedPartnershipAUExample = {
  summary: 'Create a legal entity for an unincorporated partnership in Australia',
  description:
    'Example request for creating a legal entity for an unincorporated partnership in Australia',
  value: {
    type: 'unincorporatedPartnership',
    unincorporatedPartnership: {
      name: 'West Family Partnership',
      type: 'familyPartnership',
      doingBusinessAs: '',
      countryOfGoverningLaw: 'AU',
      taxInformation: [{ country: 'AU', type: 'ABN', number: '12345678901' }],
      registeredAddress: {
        street: ' 53 Winterfield Avenue',
        city: 'Sydney',
        postalCode: '1197',
        stateOrProvince: 'NSW',
        country: 'AU',
      },
      principalPlaceOfBusiness: {
        street: 'East City Street ',
        street2: '222',
        city: 'Sydney',
        postalCode: '5566',
        stateOrProvince: 'NSW',
        country: 'AU',
      },
    },
  },
}

const PostLegalEntitiesCreateUnincorporatedPartnershipAU_200Example = {
  summary: 'Unincorporated partnership legal entity created',
  description:
    'Example response for creating a legal entity for an unincorporated partnership in Australia',
  value: {
    unincorporatedPartnership: {
      countryOfGoverningLaw: 'AU',
      doingBusinessAs: '',
      name: 'West Family Partnership',
      registeredAddress: {
        city: 'Sydney',
        country: 'AU',
        postalCode: '1197',
        stateOrProvince: 'NSW',
        street: 'Winterfield Avenue',
      },
      principalPlaceOfBusiness: {
        street: '53 Winterfield Avenue',
        city: 'Sydney',
        postalCode: '1197',
        stateOrProvince: 'NSW',
        country: 'AU',
      },
      taxInformation: [{ country: 'AU', number: '12345678901', type: 'ABN' }],
      type: 'familyPartnership',
    },
    type: 'unincorporatedPartnership',
    id: 'LE322KH223222J5HJ6JRB78K8',
  },
}

const PostLegalEntitiesIdCheckVerificationErrorsCheckVerificationErrors_200Example = {
  summary: 'Verification errors for a legal entity',
  description: 'Example response when checking the verification errors of a legal entity',
  value: {
    problems: [
      {
        entity: { id: 'LE00000000000000000000001', type: 'LegalEntity' },
        verificationErrors: [
          {
            capabilities: ['receivePayments', 'sendToTransferInstrument'],
            code: '2_8179',
            message: "'vatNumber' was missing.",
            remediatingActions: [
              { code: '2_158', message: "Add 'organization.vatNumber' to legal entity." },
            ],
            type: 'dataMissing',
          },
          {
            capabilities: ['receivePayments', 'sendToTransferInstrument'],
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
          {
            capabilities: ['receivePayments', 'sendToTransferInstrument'],
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
            capabilities: ['receivePayments'],
            code: '2_8190',
            message: "'businessLine' was missing.",
            remediatingActions: [{ code: '2_136', message: 'Add business line' }],
            type: 'dataMissing',
          },
          {
            capabilities: ['receivePayments', 'sendToTransferInstrument'],
            code: '2_8021',
            message: "'individual.residentialAddress.postalCode' was missing.",
            remediatingActions: [
              {
                code: '2_108',
                message: "Add 'individual.residentialAddress.postalCode' to legal entity",
              },
            ],
            type: 'dataMissing',
          },
          {
            capabilities: ['receivePayments', 'sendToTransferInstrument'],
            code: '2_8064',
            message: "'UBO through ownership' was missing.",
            remediatingActions: [
              {
                code: '2_123',
                message:
                  "Add 'organization.entityAssociations' of type 'uboThroughOwnership' to legal entity",
              },
            ],
            type: 'dataMissing',
          },
          {
            capabilities: ['receivePayments', 'sendToTransferInstrument'],
            code: '2_8141',
            message: "'Registration document' was missing.",
            remediatingActions: [{ code: '1_501', message: 'Upload a registration document' }],
            type: 'dataMissing',
          },
          {
            capabilities: ['receivePayments', 'sendToTransferInstrument'],
            code: '2_8019',
            message: "'individual.residentialAddress.street' was missing.",
            remediatingActions: [
              {
                code: '2_106',
                message: "Add 'individual.residentialAddress.street' to legal entity",
              },
            ],
            type: 'dataMissing',
          },
          {
            capabilities: ['receivePayments', 'sendToTransferInstrument'],
            code: '2_8020',
            message: "'individual.residentialAddress.city' was missing.",
            remediatingActions: [
              {
                code: '2_107',
                message: "Add 'individual.residentialAddress.city' to legal entity",
              },
            ],
            type: 'dataMissing',
          },
          {
            capabilities: ['receivePayments', 'sendToTransferInstrument'],
            code: '2_8045',
            message: "'organization.taxId' was missing.",
            remediatingActions: [
              { code: '2_118', message: "Add 'organization.taxId' to legal entity" },
            ],
            type: 'dataMissing',
          },
          {
            capabilities: ['receivePayments', 'sendToTransferInstrument'],
            code: '2_8043',
            message: "'organization.registrationNumber' was missing.",
            remediatingActions: [
              { code: '2_117', message: "Add 'organization.registrationNumber' to legal entity" },
            ],
            type: 'dataMissing',
          },
        ],
      },
    ],
  },
}

const PostLegalEntitiesIdConfirmDataReviewConfirmDataReview_200Example = {
  summary: 'Data review for a legal entity',
  description: 'Example response when reviewing the data for a legal entity',
  value: { dataReviewedAt: '2023-11-13T15:19:02Z' },
}

const PostLegalEntitiesIdOnboardingLinksCreateOnboardingLinkExample = {
  summary: 'Create a hosted onboarding link',
  description: 'Example request for creating a hosted onboarding link',
  value: {
    themeId: 'YOUR_THEME_ID',
    redirectUrl: 'https://your-company.example.com',
    locale: 'nl-NL',
  },
}

const PostLegalEntitiesIdOnboardingLinksCreateOnboardingLink_200Example = {
  summary: 'Hosted onboarding link created',
  description: 'Example response for a hosted onboarding link',
  value: {
    url: 'https://balanceplatform-test.adyen.com/balanceplatform/uo/form/xtl-...?signature=..&cd=..&redirectUrl=https%3A%2F%2Fyour-company.example.com%2F&expiry=1667226404807&locale=nl-NL',
  },
}

const PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesCreatePciQuestionnaireExample = {
  summary: 'Generate PCI questionnaires',
  description: 'Example request for generating PCI questionnaires in French',
  value: { language: 'fr' },
}

const PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesCreatePciQuestionnaire_200Example = {
  summary: 'PCI questionnaires returned',
  description: 'Example response for getting PCI questionnaires',
  value: {
    content: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==',
    language: 'fr',
    pciTemplateReferences: ['PCIT-T7KC6VGL', 'PCIT-PKB6DKS4'],
  },
}

const PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesSignPciQuestionnaireExample = {
  summary: 'Sign PCI questionnaires',
  description: 'Example request for signing PCI questionnaires',
  value: {
    signedBy: 'LE00000000000000000000002',
    pciTemplateReferences: ['PCIT-T7KC6VGL', 'PCIT-PKB6DKS4'],
  },
}

const PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesSignPciQuestionnaire_200Example = {
  summary: 'PCI questionnaires signed',
  description: 'Example response for signing PCI questionnaires',
  value: {
    pciQuestionnaireIds: ['PCID422GZ22322565HHMH48CW63CPH', 'PCID422GZ22322565HHMH49CW75Z9H'],
  },
}

const PostLegalEntitiesIdTermsOfServiceCreateTermsofServiceExample = {
  summary: 'Get the Terms of Service document',
  description: 'Example request for getting the Terms of Service document',
  value: { type: 'adyenIssuing', language: 'en' },
}

const PostLegalEntitiesIdTermsOfServiceCreateTermsofService_200Example = {
  summary: 'Terms of Service document returned',
  description: 'Example response for getting a Terms of Service document',
  value: {
    id: 'LE00000000000000000000001',
    type: 'adyenIssuing',
    language: 'en',
    document: 'JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBv+f/ub0j6JPRX+E3EmC==',
    termsOfServiceDocumentId: 'abc123',
    termsOfServiceDocumentFormat: 'JSON',
  },
}

const PostTransferInstrumentsCreateTransferInstrumentEURExample = {
  summary: 'Add an EU bank account',
  description: 'Example request for creating an EU transfer instrument',
  value: {
    legalEntityId: 'LE00000000000000000000001',
    type: 'bankAccount',
    bankAccount: { accountIdentification: { type: 'iban', iban: 'NL62ABNA0000000123' } },
  },
}

const PostTransferInstrumentsCreateTransferInstrumentEUR_200Example = {
  summary: 'EU bank account added',
  description:
    'Example response for adding an EU bank account as a transfer instrument of a legal entity',
  value: {
    bankAccount: {
      accountIdentification: { type: 'iban', iban: 'NL62ABNA0000000123' },
      countryCode: 'NL',
      trustedSource: false,
    },
    legalEntityId: 'LE00000000000000000000001',
    type: 'bankAccount',
    capabilities: {
      sendToTransferInstrument: { allowed: false, requested: true, verificationStatus: 'pending' },
    },
    id: 'SE322KH223222F5GXZFNM3BGP',
  },
}

const PostTransferInstrumentsCreateTransferInstrumentUKExample = {
  summary: 'Add a UK bank account',
  description: 'Example request for creating a UK transfer instrument',
  value: {
    legalEntityId: 'LE00000000000000000000001',
    type: 'bankAccount',
    bankAccount: {
      accountIdentification: { type: 'ukLocal', accountNumber: '00000123', sortCode: '090102' },
    },
  },
}

const PostTransferInstrumentsCreateTransferInstrumentUK_200Example = {
  summary: 'UK bank account added',
  description:
    'Example response for adding a UK bank account as a transfer instrument of a legal entity',
  value: {
    bankAccount: {
      accountIdentification: { type: 'ukLocal', accountNumber: '00000123', sortCode: '090102' },
      countryCode: 'GB',
      trustedSource: false,
    },
    legalEntityId: 'LE00000000000000000000001',
    type: 'bankAccount',
    id: 'SE3293N223226C5M9TQ9GFBRV',
  },
}

const PostTransferInstrumentsCreateTransferInstrumentUSDExample = {
  summary: 'Add a US bank account',
  description: 'Example request for creating a US transfer instrument',
  value: {
    legalEntityId: 'LE00000000000000000000001',
    type: 'bankAccount',
    bankAccount: {
      accountIdentification: {
        type: 'usLocal',
        accountNumber: '0000000123',
        routingNumber: '121202211',
      },
    },
  },
}

const PostTransferInstrumentsCreateTransferInstrumentUSD_200Example = {
  summary: 'US bank account added',
  description:
    'Example response for adding a US bank account as a transfer instrument of a legal entity',
  value: {
    bankAccount: {
      accountIdentification: {
        type: 'usLocal',
        accountNumber: '0000000123',
        accountType: 'checking',
        routingNumber: '121202211',
      },
      countryCode: 'US',
      trustedSource: false,
    },
    legalEntityId: 'LE00000000000000000000001',
    type: 'bankAccount',
    capabilities: {
      sendToTransferInstrument: { allowed: false, requested: true, verificationStatus: 'pending' },
    },
    id: 'SE322JV223222F5GJVKHH8DTC',
  },
}

const ApiKeyAuthSecurityScheme = { type: 'apiKey', name: 'X-API-Key', in: 'header' }

const BasicAuthSecurityScheme = { type: 'http', scheme: 'basic' }

export const postBusinessLinesRoute = createRoute({
  method: 'post',
  path: '/businessLines',
  tags: ['Business lines'],
  summary: 'Create a business line',
  description:
    "Creates a business line. \n\nThis resource contains information about your user's line of business, including their industry and their source of funds. Adyen uses this information to verify your users as required by payment industry regulations.Adyen informs you of the verification results through webhooks or API responses.\n\nYou can create a maximum of 200 business lines per legal entity for payment processing.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n",
  operationId: 'post-businessLines',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BusinessLineInfoSchema,
          examples: {
            'createBusinessLines-businessAccounts':
              PostBusinessLinesCreateBusinessLinesBusinessAccountsExample,
            'createBusinessLines-issuing': PostBusinessLinesCreateBusinessLinesIssuingExample,
            'createBusinessLines-receive': PostBusinessLinesCreateBusinessLinesReceiveExample,
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
          schema: BusinessLineSchema,
          examples: {
            'createBusinessLines-businessAccounts':
              PostBusinessLinesCreateBusinessLinesBusinessAccounts_200Example,
            'createBusinessLines-issuing': PostBusinessLinesCreateBusinessLinesIssuing_200Example,
            'createBusinessLines-receive': PostBusinessLinesCreateBusinessLinesReceive_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getBusinessLinesIdRoute = createRoute({
  method: 'get',
  path: '/businessLines/{id}',
  tags: ['Business lines'],
  summary: 'Get a business line',
  description:
    'Returns the detail of a business line.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'get-businessLines-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the business line.',
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
          schema: BusinessLineSchema,
          examples: { success: GetBusinessLinesIdSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const deleteBusinessLinesIdRoute = createRoute({
  method: 'delete',
  path: '/businessLines/{id}',
  tags: ['Business lines'],
  summary: 'Delete a business line',
  description:
    "Deletes a business line.\n\n >If you delete a business line linked to a [payment method](https://docs.adyen.com/development-resources/paymentmethodvariant#management-api), it can affect your merchant account's ability to use the [payment method](https://docs.adyen.com/api-explorer/Management/latest/post/merchants/_merchantId_/paymentMethodSettings). The business line is removed from all linked merchant accounts.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n",
  operationId: 'delete-businessLines-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the business line to be deleted.',
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
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const patchBusinessLinesIdRoute = createRoute({
  method: 'patch',
  path: '/businessLines/{id}',
  tags: ['Business lines'],
  summary: 'Update a business line',
  description:
    'Updates a business line.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'patch-businessLines-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the business line.',
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
          schema: BusinessLineInfoUpdateSchema,
          examples: { updateBusinessLine: PatchBusinessLinesIdUpdateBusinessLineExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: BusinessLineSchema,
          examples: { updateBusinessLine: PatchBusinessLinesIdUpdateBusinessLine_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postDocumentsRoute = createRoute({
  method: 'post',
  path: '/documents',
  tags: ['Documents'],
  summary: 'Upload a document for verification checks',
  description:
    'Uploads a document for verification checks.\n\n Adyen uses the information from the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities) to run automated verification checks. If these checks fail, you will be notified to provide additional documents.\n\n You should only upload documents when Adyen requests additional information for the legal entity.\n\n >You can upload a maximum of 15 pages for photo IDs.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'post-documents',
  request: {
    headers: z.object({
      'x-requested-verification-code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-requested-verification-code',
            in: 'header',
            description:
              'Use a suberror code as your requested verification code. You can include one code at a time in your request header. Requested verification codes can only be used in your test environment.',
            required: false,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
            example: '1_3008',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: DocumentSchema,
          examples: { uploadDocument: PostDocumentsUploadDocumentExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: DocumentSchema,
          examples: { uploadDocument: PostDocumentsUploadDocument_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getDocumentsIdRoute = createRoute({
  method: 'get',
  path: '/documents/{id}',
  tags: ['Documents'],
  summary: 'Get a document',
  description:
    'Returns a document.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'get-documents-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the document.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      skipContent: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'skipContent',
            in: 'query',
            description: 'Do not load document content while fetching the document.',
            required: false,
            style: 'form',
            explode: true,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: DocumentSchema,
          examples: { success: GetDocumentsIdSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const deleteDocumentsIdRoute = createRoute({
  method: 'delete',
  path: '/documents/{id}',
  tags: ['Documents'],
  summary: 'Delete a document',
  description:
    'Deletes a document.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'delete-documents-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the document to be deleted.',
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
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const patchDocumentsIdRoute = createRoute({
  method: 'patch',
  path: '/documents/{id}',
  tags: ['Documents'],
  summary: 'Update a document',
  description:
    'Updates a document.\n\n >You can upload a maximum of 15 pages for photo IDs.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'patch-documents-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the document to be updated.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'x-requested-verification-code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-requested-verification-code',
            in: 'header',
            description:
              'Use the requested verification code 0_0001 to resolve any suberrors associated with the document. Requested verification codes can only be used in your test environment.',
            required: false,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
            example: '0_0001',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: DocumentSchema,
          examples: { updateDocument: PatchDocumentsIdUpdateDocumentExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: DocumentSchema,
          examples: { updateDocument: PatchDocumentsIdUpdateDocument_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postLegalEntitiesRoute = createRoute({
  method: 'post',
  path: '/legalEntities',
  tags: ['Legal entities'],
  summary: 'Create a legal entity',
  description:
    'Creates a legal entity. \n\nThis resource contains information about the user that will be onboarded in your platform. Adyen uses this information to perform verification checks as required by payment industry regulations. Adyen informs you of the verification results through webhooks or API responses.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'post-legalEntities',
  request: {
    headers: z.object({
      'x-requested-verification-code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-requested-verification-code',
            in: 'header',
            description:
              'Use a suberror code as your requested verification code. You can include one code at a time in your request header. Requested verification codes can only be used in your test environment.',
            required: false,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
            example: '1_3004',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: LegalEntityInfoRequiredTypeSchema,
          examples: {
            createLegalEntityIndividualAU: PostLegalEntitiesCreateLegalEntityIndividualAUExample,
            createLegalEntityIndividualNL: PostLegalEntitiesCreateLegalEntityIndividualNLExample,
            createLegalEntityIndividualUS: PostLegalEntitiesCreateLegalEntityIndividualUSExample,
            createLegalEntityOrganizationNL:
              PostLegalEntitiesCreateLegalEntityOrganizationNLExample,
            createLegalEntityOrganizationUS:
              PostLegalEntitiesCreateLegalEntityOrganizationUSExample,
            createLegalEntityPaymentInstrumentUser:
              PostLegalEntitiesCreateLegalEntityPaymentInstrumentUserExample,
            createLegalEntitySolePropNL: PostLegalEntitiesCreateLegalEntitySolePropNLExample,
            createLegalEntitySolePropUS: PostLegalEntitiesCreateLegalEntitySolePropUSExample,
            createTrustAU: PostLegalEntitiesCreateTrustAUExample,
            createUnincorporatedPartnershipAU:
              PostLegalEntitiesCreateUnincorporatedPartnershipAUExample,
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
          schema: LegalEntitySchema,
          examples: {
            createLegalEntityIndividualAU:
              PostLegalEntitiesCreateLegalEntityIndividualAU_200Example,
            createLegalEntityIndividualNL:
              PostLegalEntitiesCreateLegalEntityIndividualNL_200Example,
            createLegalEntityIndividualUS:
              PostLegalEntitiesCreateLegalEntityIndividualUS_200Example,
            createLegalEntityOrganizationNL:
              PostLegalEntitiesCreateLegalEntityOrganizationNL_200Example,
            createLegalEntityOrganizationUS:
              PostLegalEntitiesCreateLegalEntityOrganizationUS_200Example,
            createLegalEntityPaymentInstrumentUser:
              PostLegalEntitiesCreateLegalEntityPaymentInstrumentUser_200Example,
            createLegalEntitySolePropNL: PostLegalEntitiesCreateLegalEntitySolePropNL_200Example,
            createLegalEntitySolePropUS: PostLegalEntitiesCreateLegalEntitySolePropUS_200Example,
            createTrustAU: PostLegalEntitiesCreateTrustAU_200Example,
            createUnincorporatedPartnershipAU:
              PostLegalEntitiesCreateUnincorporatedPartnershipAU_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getLegalEntitiesIdRoute = createRoute({
  method: 'get',
  path: '/legalEntities/{id}',
  tags: ['Legal entities'],
  summary: 'Get a legal entity',
  description:
    'Returns a legal entity.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'get-legalEntities-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the legal entity.',
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
          schema: LegalEntitySchema,
          examples: { success: GetLegalEntitiesIdSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const patchLegalEntitiesIdRoute = createRoute({
  method: 'patch',
  path: '/legalEntities/{id}',
  tags: ['Legal entities'],
  summary: 'Update a legal entity',
  description:
    'Updates a legal entity.\n\n >To change the legal entity type, include only the new `type` in your request.\n\nIf you need to update information for the legal entity, make a separate request. To update the `entityAssociations` array, you need to replace the entire array.For example, if the array has 3 entries and you want to remove 1 entry, you need to PATCH the resource with the remaining 2 entries.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'patch-legalEntities-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the legal entity.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'x-requested-verification-code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-requested-verification-code',
            in: 'header',
            description:
              'Use the requested verification code 0_0001 to resolve any suberrors associated with the legal entity. Requested verification codes can only be used in your test environment.',
            required: false,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
            example: '0_0001',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: LegalEntityInfoSchema,
          examples: {
            changeLegalEntityType: PatchLegalEntitiesIdChangeLegalEntityTypeExample,
            updateLegalEntityOrganization: PatchLegalEntitiesIdUpdateLegalEntityOrganizationExample,
            updateLegalEntitySoleProp: PatchLegalEntitiesIdUpdateLegalEntitySolePropExample,
            updateLegalRepresentative: PatchLegalEntitiesIdUpdateLegalRepresentativeExample,
            updateTrustMember: PatchLegalEntitiesIdUpdateTrustMemberExample,
            updateTrustMemberExempt: PatchLegalEntitiesIdUpdateTrustMemberExemptExample,
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
          schema: LegalEntitySchema,
          examples: {
            changeLegalEntityType: PatchLegalEntitiesIdChangeLegalEntityType_200Example,
            updateLegalEntityOrganization:
              PatchLegalEntitiesIdUpdateLegalEntityOrganization_200Example,
            updateLegalEntitySoleProp: PatchLegalEntitiesIdUpdateLegalEntitySoleProp_200Example,
            updateLegalRepresentative: PatchLegalEntitiesIdUpdateLegalRepresentative_200Example,
            updateTrustMember: PatchLegalEntitiesIdUpdateTrustMember_200Example,
            updateTrustMemberExempt: PatchLegalEntitiesIdUpdateTrustMemberExempt_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getLegalEntitiesIdAcceptedTermsOfServiceDocumentTermsofserviceacceptancereferenceRoute =
  createRoute({
    method: 'get',
    path: '/legalEntities/{id}/acceptedTermsOfServiceDocument/{termsofserviceacceptancereference}',
    tags: ['Terms of Service'],
    summary: 'Get accepted Terms of Service document',
    description:
      'Returns the accepted Terms of Service document for a legal entity.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
    operationId:
      'get-legalEntities-id-acceptedTermsOfServiceDocument-termsofserviceacceptancereference',
    request: {
      params: z.object({
        id: z
          .string()
          .openapi({
            param: {
              name: 'id',
              in: 'path',
              description:
                'The unique identifier of the legal entity. For sole proprietorship, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string' },
            },
          }),
        termsofserviceacceptancereference: z
          .string()
          .openapi({
            param: {
              name: 'termsofserviceacceptancereference',
              in: 'path',
              description: 'An Adyen-generated reference for the accepted Terms of Service.',
              required: true,
              style: 'simple',
              explode: false,
              schema: { type: 'string' },
            },
          }),
      }),
      query: z.object({
        termsOfServiceDocumentFormat: z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'termsOfServiceDocumentFormat',
              in: 'query',
              description:
                'The format of the Terms of Service document. Possible values: **JSON**, **PDF**, or **TXT**',
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
          'application/json': { schema: GetAcceptedTermsOfServiceDocumentResponseSchema },
        },
      },
      400: {
        description: 'Bad Request - a problem reading or understanding the request.',
        content: { 'application/json': { schema: ServiceErrorSchema } },
      },
      401: {
        description: 'Unauthorized - authentication required.',
        content: { 'application/json': { schema: ServiceErrorSchema } },
      },
      403: {
        description: 'Forbidden - insufficient permissions to process the request.',
        content: { 'application/json': { schema: ServiceErrorSchema } },
      },
      422: {
        description: 'Unprocessable Entity - a request validation error.',
        content: { 'application/json': { schema: ServiceErrorSchema } },
      },
      500: {
        description: 'Internal Server Error - the server could not process the request.',
        content: { 'application/json': { schema: ServiceErrorSchema } },
      },
    },
    security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
  })

export const getLegalEntitiesIdBusinessLinesRoute = createRoute({
  method: 'get',
  path: '/legalEntities/{id}/businessLines',
  tags: ['Legal entities'],
  summary: 'Get all business lines under a legal entity',
  description:
    'Returns the business lines owned by a legal entity.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'get-legalEntities-id-businessLines',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the legal entity.',
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
          schema: BusinessLinesSchema,
          examples: { success: GetLegalEntitiesIdBusinessLinesSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postLegalEntitiesIdCheckTaxElectronicDeliveryConsentRoute = createRoute({
  method: 'post',
  path: '/legalEntities/{id}/checkTaxElectronicDeliveryConsent',
  tags: ['Tax eDelivery consent'],
  summary: 'Check the status of consent for electronic delivery of tax forms',
  description:
    'Returns the consent status for electronic delivery of tax forms.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'post-legalEntities-id-checkTaxElectronicDeliveryConsent',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.',
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
      content: { 'application/json': { schema: CheckTaxElectronicDeliveryConsentResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postLegalEntitiesIdCheckVerificationErrorsRoute = createRoute({
  method: 'post',
  path: '/legalEntities/{id}/checkVerificationErrors',
  tags: ['Legal entities'],
  summary: "Check a legal entity's verification errors",
  description:
    'Returns the verification errors for a legal entity and its supporting entities.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'post-legalEntities-id-checkVerificationErrors',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the legal entity.',
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
          schema: VerificationErrorsSchema,
          examples: {
            checkVerificationErrors:
              PostLegalEntitiesIdCheckVerificationErrorsCheckVerificationErrors_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postLegalEntitiesIdConfirmDataReviewRoute = createRoute({
  method: 'post',
  path: '/legalEntities/{id}/confirmDataReview',
  tags: ['Legal entities'],
  summary: 'Confirm data review',
  description:
    'Confirms that your user has reviewed the data for the legal entity specified in the path. Call this endpoint to inform Adyen that your user reviewed and verified that the data is up-to-date. The endpoint returns the timestamp of when Adyen received the request.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'post-legalEntities-id-confirmDataReview',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the legal entity.',
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
          schema: DataReviewConfirmationResponseSchema,
          examples: {
            confirmDataReview: PostLegalEntitiesIdConfirmDataReviewConfirmDataReview_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postLegalEntitiesIdOnboardingLinksRoute = createRoute({
  method: 'post',
  path: '/legalEntities/{id}/onboardingLinks',
  tags: ['Hosted Onboarding'],
  summary: 'Get a link to an Adyen-hosted onboarding page',
  description:
    'Returns a link to an Adyen-hosted onboarding page where you need to redirect your user.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'post-legalEntities-id-onboardingLinks',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the legal entity',
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
          schema: OnboardingLinkInfoSchema,
          examples: {
            createOnboardingLink: PostLegalEntitiesIdOnboardingLinksCreateOnboardingLinkExample,
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
          schema: OnboardingLinkSchema,
          examples: {
            createOnboardingLink: PostLegalEntitiesIdOnboardingLinksCreateOnboardingLink_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getLegalEntitiesIdPciQuestionnairesRoute = createRoute({
  method: 'get',
  path: '/legalEntities/{id}/pciQuestionnaires',
  tags: ['PCI questionnaires'],
  summary: 'Get PCI questionnaire details',
  description:
    'Get a list of signed PCI questionnaires.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'get-legalEntities-id-pciQuestionnaires',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The unique identifier of the legal entity to get PCI questionnaire information.',
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
          schema: GetPciQuestionnaireInfosResponseSchema,
          examples: { success: GetLegalEntitiesIdPciQuestionnairesSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesRoute = createRoute({
  method: 'post',
  path: '/legalEntities/{id}/pciQuestionnaires/generatePciTemplates',
  tags: ['PCI questionnaires'],
  summary: 'Generate PCI questionnaire',
  description:
    "Generates the required PCI questionnaires based on the user's [salesChannel](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/businessLines__reqParam_salesChannels).\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n",
  operationId: 'post-legalEntities-id-pciQuestionnaires-generatePciTemplates',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The unique identifier of the legal entity to get PCI questionnaire information.',
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
          schema: GeneratePciDescriptionRequestSchema,
          examples: {
            createPciQuestionnaire:
              PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesCreatePciQuestionnaireExample,
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
          schema: GeneratePciDescriptionResponseSchema,
          examples: {
            createPciQuestionnaire:
              PostLegalEntitiesIdPciQuestionnairesGeneratePciTemplatesCreatePciQuestionnaire_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postLegalEntitiesIdPciQuestionnairesSignPciTemplatesRoute = createRoute({
  method: 'post',
  path: '/legalEntities/{id}/pciQuestionnaires/signPciTemplates',
  tags: ['PCI questionnaires'],
  summary: 'Sign PCI questionnaire',
  description:
    'Signs the required PCI questionnaire.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'post-legalEntities-id-pciQuestionnaires-signPciTemplates',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The legal entity ID of the user that has a contractual relationship with your platform.',
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
          schema: PciSigningRequestSchema,
          examples: {
            signPciQuestionnaire:
              PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesSignPciQuestionnaireExample,
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
          schema: PciSigningResponseSchema,
          examples: {
            signPciQuestionnaire:
              PostLegalEntitiesIdPciQuestionnairesSignPciTemplatesSignPciQuestionnaire_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postLegalEntitiesIdPciQuestionnairesSigningRequiredRoute = createRoute({
  method: 'post',
  path: '/legalEntities/{id}/pciQuestionnaires/signingRequired',
  tags: ['PCI questionnaires'],
  summary: 'Calculate PCI status of a legal entity',
  description:
    'Calculate PCI status of a legal entity.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'post-legalEntities-id-pciQuestionnaires-signingRequired',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the legal entity to calculate PCI status.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: CalculatePciStatusRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: CalculatePciStatusResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getLegalEntitiesIdPciQuestionnairesPciidRoute = createRoute({
  method: 'get',
  path: '/legalEntities/{id}/pciQuestionnaires/{pciid}',
  tags: ['PCI questionnaires'],
  summary: 'Get PCI questionnaire',
  description:
    'Returns the signed PCI questionnaire.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'get-legalEntities-id-pciQuestionnaires-pciid',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The legal entity ID of the individual who signed the PCI questionnaire.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      pciid: z
        .string()
        .openapi({
          param: {
            name: 'pciid',
            in: 'path',
            description: 'The unique identifier of the signed PCI questionnaire.',
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
          schema: GetPciQuestionnaireResponseSchema,
          examples: { success: GetLegalEntitiesIdPciQuestionnairesPciidSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postLegalEntitiesIdSetTaxElectronicDeliveryConsentRoute = createRoute({
  method: 'post',
  path: '/legalEntities/{id}/setTaxElectronicDeliveryConsent',
  tags: ['Tax eDelivery consent'],
  summary: 'Set the consent status for electronic delivery of tax forms',
  description:
    'Set the consent status for electronic delivery of tax forms.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'post-legalEntities-id-setTaxElectronicDeliveryConsent',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetTaxElectronicDeliveryConsentRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'No Content - look at the actual response code for the status of the request. ',
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postLegalEntitiesIdTermsOfServiceRoute = createRoute({
  method: 'post',
  path: '/legalEntities/{id}/termsOfService',
  tags: ['Terms of Service'],
  summary: 'Get Terms of Service document',
  description:
    'Returns the Terms of Service document for a legal entity.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'post-legalEntities-id-termsOfService',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.',
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
          schema: GetTermsOfServiceDocumentRequestSchema,
          examples: {
            createTermsofService: PostLegalEntitiesIdTermsOfServiceCreateTermsofServiceExample,
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
          schema: GetTermsOfServiceDocumentResponseSchema,
          examples: {
            createTermsofService: PostLegalEntitiesIdTermsOfServiceCreateTermsofService_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidRoute = createRoute({
  method: 'patch',
  path: '/legalEntities/{id}/termsOfService/{termsofservicedocumentid}',
  tags: ['Terms of Service'],
  summary: 'Accept Terms of Service',
  description:
    'Accepts Terms of Service.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'patch-legalEntities-id-termsOfService-termsofservicedocumentid',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The unique identifier of the legal entity.\n\nFor sole proprietorships, this is the individual legal entity ID of the owner.\n\nFor organizations, this is the ID of the organization.\n\nFor legal representatives of individuals, this is the ID of the individual.\n\n',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
      termsofservicedocumentid: z
        .string()
        .openapi({
          param: {
            name: 'termsofservicedocumentid',
            in: 'path',
            description: 'The unique identifier of the Terms of Service document.',
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
          schema: AcceptTermsOfServiceRequestSchema,
          examples: {
            updateTermsofService:
              PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidUpdateTermsofServiceExample,
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
          schema: AcceptTermsOfServiceResponseSchema,
          examples: {
            updateTermsofService:
              PatchLegalEntitiesIdTermsOfServiceTermsofservicedocumentidUpdateTermsofService_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getLegalEntitiesIdTermsOfServiceAcceptanceInfosRoute = createRoute({
  method: 'get',
  path: '/legalEntities/{id}/termsOfServiceAcceptanceInfos',
  tags: ['Terms of Service'],
  summary: 'Get Terms of Service information for a legal entity',
  description:
    'Returns Terms of Service information for a legal entity.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'get-legalEntities-id-termsOfServiceAcceptanceInfos',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.',
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
          schema: GetTermsOfServiceAcceptanceInfosResponseSchema,
          examples: { success: GetLegalEntitiesIdTermsOfServiceAcceptanceInfosSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getLegalEntitiesIdTermsOfServiceStatusRoute = createRoute({
  method: 'get',
  path: '/legalEntities/{id}/termsOfServiceStatus',
  tags: ['Terms of Service'],
  summary: 'Get Terms of Service status',
  description:
    'Returns the required types of Terms of Service that need to be accepted by a legal entity.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'get-legalEntities-id-termsOfServiceStatus',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description:
              'The unique identifier of the legal entity. For sole proprietorships, this is the individual legal entity ID of the owner. For organizations, this is the ID of the organization.',
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
          schema: CalculateTermsOfServiceStatusResponseSchema,
          examples: { success: GetLegalEntitiesIdTermsOfServiceStatusSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getThemesRoute = createRoute({
  method: 'get',
  path: '/themes',
  tags: ['Hosted Onboarding'],
  summary: 'Get a list of hosted onboarding page themes',
  description:
    'Returns a list of hosted onboarding page themes.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'get-themes',
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: {
        'application/json': {
          schema: OnboardingThemesSchema,
          examples: { success: GetThemesSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getThemesIdRoute = createRoute({
  method: 'get',
  path: '/themes/{id}',
  tags: ['Hosted Onboarding'],
  summary: 'Get an onboarding link theme',
  description:
    'Returns the details of the theme identified in the path.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'get-themes-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the theme',
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
          schema: OnboardingThemeSchema,
          examples: { success: GetThemesIdSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postTransferInstrumentsRoute = createRoute({
  method: 'post',
  path: '/transferInstruments',
  tags: ['Transfer instruments'],
  summary: 'Create a transfer instrument',
  description:
    'Creates a transfer instrument. \n\nA transfer instrument is a bank account that a legal entity owns. Adyen performs verification checks on the transfer instrument as required by payment industry regulations. We inform you of the verification results through webhooks or API responses.\n\nWhen the transfer instrument passes the verification checks, you can start sending funds from the balance platform to the transfer instrument (such as payouts).\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'post-transferInstruments',
  request: {
    headers: z.object({
      'x-requested-verification-code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-requested-verification-code',
            in: 'header',
            description:
              'Use a suberror code as your requested verification code. You can include one code at a time in your request header. Requested verification codes can only be used in your test environment.',
            required: false,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
            example: '1_7002',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: TransferInstrumentInfoSchema,
          examples: {
            createTransferInstrumentEUR: PostTransferInstrumentsCreateTransferInstrumentEURExample,
            createTransferInstrumentUK: PostTransferInstrumentsCreateTransferInstrumentUKExample,
            createTransferInstrumentUSD: PostTransferInstrumentsCreateTransferInstrumentUSDExample,
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
          schema: TransferInstrumentSchema,
          examples: {
            createTransferInstrumentEUR:
              PostTransferInstrumentsCreateTransferInstrumentEUR_200Example,
            createTransferInstrumentUK:
              PostTransferInstrumentsCreateTransferInstrumentUK_200Example,
            createTransferInstrumentUSD:
              PostTransferInstrumentsCreateTransferInstrumentUSD_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const getTransferInstrumentsIdRoute = createRoute({
  method: 'get',
  path: '/transferInstruments/{id}',
  tags: ['Transfer instruments'],
  summary: 'Get a transfer instrument',
  description:
    'Returns the details of a transfer instrument.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'get-transferInstruments-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the transfer instrument.',
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
          schema: TransferInstrumentSchema,
          examples: { success: GetTransferInstrumentsIdSuccess_200Example },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const deleteTransferInstrumentsIdRoute = createRoute({
  method: 'delete',
  path: '/transferInstruments/{id}',
  tags: ['Transfer instruments'],
  summary: 'Delete a transfer instrument',
  description:
    'Deletes a transfer instrument.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'delete-transferInstruments-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the transfer instrument to be deleted.',
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
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const patchTransferInstrumentsIdRoute = createRoute({
  method: 'patch',
  path: '/transferInstruments/{id}',
  tags: ['Transfer instruments'],
  summary: 'Update a transfer instrument',
  description:
    'Updates a transfer instrument.\n\nRequests to this endpoint are subject to rate limits:\n\n- Live environments: 700 requests per 5 seconds.\n\n- Test environments: 200 requests per 5 seconds.\n\n- Failed requests are subject to a limit of 5 failures per 10 seconds.\n\n',
  operationId: 'patch-transferInstruments-id',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the transfer instrument.',
            required: true,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({
      'x-requested-verification-code': z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'x-requested-verification-code',
            in: 'header',
            description:
              'Use the requested verification code 0_0001 to resolve any suberrors associated with the transfer instrument. Requested verification codes can only be used in your test environment.',
            required: false,
            style: 'simple',
            explode: false,
            schema: { type: 'string' },
            example: '0_0001',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: TransferInstrumentInfoSchema,
          examples: {
            updateTransferInstrument: PatchTransferInstrumentsIdUpdateTransferInstrumentExample,
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
          schema: TransferInstrumentSchema,
          examples: {
            updateTransferInstrument: PatchTransferInstrumentsIdUpdateTransferInstrument_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    422: {
      description: 'Unprocessable Entity - a request validation error.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    500: {
      description: 'Internal Server Error - the server could not process the request.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
  },
  security: [{ BasicAuth: [] }, { ApiKeyAuth: [] }],
})

export const postLegalEntitiesIdRequestPeriodicReviewRoute = createRoute({
  method: 'post',
  path: '/legalEntities/{id}/requestPeriodicReview',
  tags: ['Legal entities'],
  summary: 'Request periodic data review.',
  description:
    'Requests a periodic data review for the legal entity of the user specified in the path.',
  operationId: 'post-legalEntities-id-requestPeriodicReview',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'path',
            description: 'The unique identifier of the legal entity.',
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
  },
})
