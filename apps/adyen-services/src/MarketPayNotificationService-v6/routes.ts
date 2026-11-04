import { createRoute, z } from '@hono/zod-openapi'

const ViasAddressSchema = z
  .strictObject({
    city: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the city. Required if the `houseNumberOrName`, `street`, `postalCode`, or `stateOrProvince` are provided.',
      }),
    country: z
      .string()
      .openapi({
        description:
          'The two-character country code of the address in ISO-3166-1 alpha-2 format. For example, **NL**.',
      }),
    houseNumberOrName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number or name of the house.' }),
    postalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The postal code. Required if the `houseNumberOrName`, `street`, `city`, or `stateOrProvince` are provided.\n\nMaximum length:\n\n* 5 digits for addresses in the US.\n\n* 10 characters for all other countries.',
      }),
    stateOrProvince: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The abbreviation of the state or province. Required if the `houseNumberOrName`, `street`, `city`, or `postalCode` are provided. \n\nMaximum length:\n\n* 2 characters for addresses in the US or Canada.\n\n* 3 characters for all other countries.\n',
      }),
    street: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the street. Required if the `houseNumberOrName`, `city`, `postalCode`, or `stateOrProvince` are provided.',
      }),
  })
  .openapi({ required: ['country'] })
  .openapi('ViasAddress')

const BankAccountDetailSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The bank account number (without separators).\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    accountType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The type of bank account.\nOnly applicable to bank accounts held in the USA.\nThe permitted values are: `checking`, `savings`.\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    bankAccountName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the bank account.' }),
    bankAccountReference: z
      .string()
      .exactOptional()
      .openapi({ 'x-addedInVersion': '5', description: 'Merchant reference to the bank account.' }),
    bankAccountUUID: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier (UUID) of the Bank Account.\n>If, during an account holder create or update request, this field is left blank (but other fields provided), a new Bank Account will be created with a procedurally-generated UUID.\n\n>If, during an account holder create request, a UUID is provided, the creation of the Bank Account will fail while the creation of the account holder will continue.\n\n>If, during an account holder update request, a UUID that is not correlated with an existing Bank Account is provided, the update of the account holder will fail.\n\n>If, during an account holder update request, a UUID that is correlated with an existing Bank Account is provided, the existing Bank Account will be updated.\n',
      }),
    bankBicSwift: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The bank identifier code.\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    bankCity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The city in which the bank branch is located.\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    bankCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The bank code of the banking institution with which the bank account is registered.\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    bankName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the banking institution with which the bank account is held.\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    branchCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The branch code of the branch under which the bank account is registered. The value to be specified in this parameter depends on the country of the bank account:\n* United States - Routing number\n* United Kingdom - Sort code\n* Germany - Bankleitzahl\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    checkCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The check code of the bank account.\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The two-letter country code in which the bank account is registered.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.",
      }),
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The currency in which the bank account deals.\n>The permitted currency codes are defined in ISO-4217 (e.g. 'EUR').\n",
      }),
    iban: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The international bank account number.\n>The IBAN standard is defined in ISO-13616.\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    ownerCity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The city of residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    ownerCountryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The country code of the country of residence of the bank account owner.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.",
      }),
    ownerDateOfBirth: z
      .string()
      .exactOptional()
      .openapi({
        deprecated: true,
        description:
          'The date of birth of the bank account owner.\nThe date should be in ISO-8601 format yyyy-mm-dd (e.g. 2000-01-31).',
      }),
    ownerHouseNumberOrName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The house name or number of the residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    ownerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    ownerNationality: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The country code of the country of nationality of the bank account owner.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.",
      }),
    ownerPostalCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The postal code of the residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    ownerState: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The state of residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    ownerStreet: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The street name of the residence of the bank account owner.\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    primaryAccount: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'If set to true, the bank account is a primary account.' }),
    taxId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The tax ID number.\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
    urlForVerification: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The URL to be used for bank account verification.\nThis may be generated on bank account creation.\n\n>Refer to [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information) for details on field requirements.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BankAccountDetail')

const UltimateParentCompanyBusinessDetailsSchema = z
  .strictObject({
    legalBusinessName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The legal name of the company.' }),
    registrationNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The registration number of the company.' }),
    stockExchange: z
      .string()
      .exactOptional()
      .openapi({ description: 'Market Identifier Code (MIC).' }),
    stockNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'International Securities Identification Number (ISIN).' }),
    stockTicker: z.string().exactOptional().openapi({ description: 'Stock Ticker symbol.' }),
  })
  .openapi({ required: [] })
  .openapi('UltimateParentCompanyBusinessDetails')

const UltimateParentCompanySchema = z
  .strictObject({
    address: ViasAddressSchema.exactOptional().openapi({
      description: 'Address of the ultimate parent company.',
    }),
    businessDetails: UltimateParentCompanyBusinessDetailsSchema.exactOptional().openapi({
      description: "Details about the ultimate parent company's business.",
    }),
    ultimateParentCompanyCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create an ultimate parent company. Required when updating an existing entry in an `/updateAccountHolder` request.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UltimateParentCompany')

const ViasNameSchema = z
  .strictObject({
    firstName: z.string().max(80).exactOptional().openapi({ description: 'The first name.' }),
    gender: z
      .enum(['MALE', 'FEMALE', 'UNKNOWN'])
      .exactOptional()
      .openapi({
        description:
          'The gender.\n>The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.',
      }),
    infix: z
      .string()
      .max(20)
      .exactOptional()
      .openapi({
        description:
          "The name's infix, if applicable.\n>A maximum length of twenty (20) characters is imposed.",
      }),
    lastName: z.string().max(80).exactOptional().openapi({ description: 'The last name.' }),
  })
  .openapi({ required: [] })
  .openapi('ViasName')

const PersonalDocumentDataSchema = z
  .strictObject({
    expirationDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The expiry date of the document, \n in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.',
      }),
    issuerCountry: z
      .string()
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'The country where the document was issued, in the two-character \n[ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.',
      }),
    issuerState: z
      .string()
      .exactOptional()
      .openapi({ description: 'The state where the document was issued (if applicable).' }),
    number: z.string().exactOptional().openapi({ description: 'The number in the document.' }),
    type: z
      .enum(['DRIVINGLICENSE', 'ID', 'PASSPORT', 'SOCIALSECURITY', 'VISA'])
      .openapi({
        description:
          'The type of the document. Possible values: **ID**, **DRIVINGLICENSE**, **PASSPORT**, **SOCIALSECURITY**, **VISA**.\n\nTo delete an existing entry for a document `type`, send only the `type` field in your request. ',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('PersonalDocumentData')

const ViasPersonalDataSchema = z
  .strictObject({
    dateOfBirth: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The person's date of birth, in ISO-8601 YYYY-MM-DD format. For example, **2000-01-31**.",
      }),
    documentData: z
      .array(PersonalDocumentDataSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description:
          "Array that contains information about the person's identification document. You can submit only one entry per document type.",
      }),
    nationality: z
      .string()
      .length(2)
      .exactOptional()
      .openapi({
        description:
          'The nationality of the person represented by a two-character country code,  in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format. For example, **NL**.\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('ViasPersonalData')

const ViasPhoneNumberSchema = z
  .strictObject({
    phoneCountryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The two-character country code of the phone number.\n>The permitted country codes are defined in ISO-3166-1 alpha-2 (e.g. 'NL').",
      }),
    phoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The phone number.\n>The inclusion of the phone number country code is not necessary.',
      }),
    phoneType: z
      .enum(['Fax', 'Landline', 'Mobile', 'SIP'])
      .exactOptional()
      .openapi({
        description:
          'The type of the phone number.\n>The following values are permitted: `Landline`, `Mobile`, `SIP`, `Fax`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ViasPhoneNumber')

const ShareholderContactSchema = z
  .strictObject({
    address: ViasAddressSchema.exactOptional().openapi({
      description: 'The address of the person.',
    }),
    email: z.string().exactOptional().openapi({ description: 'The e-mail address of the person.' }),
    fullPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The phone number of the person provided as a single string.  It will be handled as a landline phone.\nExamples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"',
      }),
    jobTitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Job title of the person. Required when the `shareholderType` is **Controller**.\n\nExample values: **Chief Executive Officer**, **Chief Financial Officer**, **Chief Operating Officer**, **President**, **Vice President**, **Executive President**, **Managing Member**, **Partner**, **Treasurer**, **Director**, or **Other**.',
      }),
    name: ViasNameSchema.exactOptional().openapi({ description: 'The name of the person.' }),
    personalData: ViasPersonalDataSchema.exactOptional().openapi({
      description: 'Contains information about the person.',
    }),
    phoneNumber: ViasPhoneNumberSchema.exactOptional().openapi({
      description: 'The phone number of the person.',
    }),
    shareholderCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier (UUID) of the shareholder entry.\n>**If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Shareholder will be created with a procedurally-generated UUID.**\n\n>**If, during an Account Holder create request, a UUID is provided, the creation of Account Holder will fail with a validation Error..**\n\n>**If, during an Account Holder update request, a UUID that is not correlated with an existing Shareholder is provided, the update of the Shareholder will fail.**\n\n>**If, during an Account Holder update request, a UUID that is correlated with an existing Shareholder is provided, the existing Shareholder will be updated.**\n',
      }),
    shareholderReference: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description: 'Your reference for the shareholder entry.',
      }),
    shareholderType: z
      .enum(['Controller', 'Owner', 'Signatory'])
      .exactOptional()
      .openapi({
        description:
          'Specifies how the person is associated with the account holder. \n\nPossible values: \n\n* **Owner**: Individuals who directly or indirectly own 25% or more of a company.\n\n* **Controller**: Individuals who are members of senior management staff responsible for managing a company or organization.',
      }),
    webAddress: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of the person's website." }),
  })
  .openapi({ required: [] })
  .openapi('ShareholderContact')

const SignatoryContactSchema = z
  .strictObject({
    address: ViasAddressSchema.exactOptional().openapi({
      description: 'The address of the person.',
    }),
    email: z.string().exactOptional().openapi({ description: 'The e-mail address of the person.' }),
    fullPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The phone number of the person provided as a single string.  It will be handled as a landline phone.\nExamples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"',
      }),
    jobTitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Job title of the signatory.\n\nExample values: **Chief Executive Officer**, **Chief Financial Officer**, **Chief Operating Officer**, **President**, **Vice President**, **Executive President**, **Managing Member**, **Partner**, **Treasurer**, **Director**, or **Other**.',
      }),
    name: ViasNameSchema.exactOptional().openapi({ description: 'The name of the person.' }),
    personalData: ViasPersonalDataSchema.exactOptional().openapi({
      description: 'Contains information about the person.',
    }),
    phoneNumber: ViasPhoneNumberSchema.exactOptional().openapi({
      description: 'The phone number of the person.',
    }),
    signatoryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier (UUID) of the signatory.\n>**If, during an Account Holder create or update request, this field is left blank (but other fields provided), a new Signatory will be created with a procedurally-generated UUID.**\n\n>**If, during an Account Holder create request, a UUID is provided, the creation of the Signatory will fail while the creation of the Account Holder will continue.**\n\n>**If, during an Account Holder update request, a UUID that is not correlated with an existing Signatory is provided, the update of the Signatory will fail.**\n\n>**If, during an Account Holder update request, a UUID that is correlated with an existing Signatory is provided, the existing Signatory will be updated.**\n',
      }),
    signatoryReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your reference for the signatory.' }),
    webAddress: z
      .string()
      .exactOptional()
      .openapi({ description: "The URL of the person's website." }),
  })
  .openapi({ required: [] })
  .openapi('SignatoryContact')

const BusinessDetailsSchema = z
  .strictObject({
    doingBusinessAs: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The registered name of the company (if it differs from the legal name of the company).',
      }),
    legalBusinessName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The legal name of the company.' }),
    listedUltimateParentCompany: z
      .array(UltimateParentCompanySchema)
      .exactOptional()
      .openapi({
        description:
          'Information about the parent public company. Required if the account holder is 100% owned by a publicly listed company.',
      }),
    registrationNumber: z
      .string()
      .exactOptional()
      .openapi({ 'x-addedInVersion': '4', description: 'The registration number of the company.' }),
    shareholders: z
      .array(ShareholderContactSchema)
      .exactOptional()
      .openapi({
        description:
          'Array containing information about individuals associated with the account holder either through ownership or control. For details about how you can identify them, refer to [our verification guide](https://docs.adyen.com/classic-platforms/verification-process#identify-ubos).',
      }),
    signatories: z
      .array(SignatoryContactSchema)
      .exactOptional()
      .openapi({
        description:
          'Signatories associated with the company.\nEach array entry should represent one signatory.',
      }),
    stockExchange: z
      .string()
      .exactOptional()
      .openapi({ 'x-addedInVersion': '6', description: 'Market Identifier Code (MIC).' }),
    stockNumber: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'International Securities Identification Number (ISIN).',
      }),
    stockTicker: z
      .string()
      .exactOptional()
      .openapi({ 'x-addedInVersion': '6', description: 'Stock Ticker symbol.' }),
    taxId: z.string().exactOptional().openapi({ description: 'The tax ID of the company.' }),
  })
  .openapi({ required: [] })
  .openapi('BusinessDetails')

const IndividualDetailsSchema = z
  .strictObject({
    name: ViasNameSchema.exactOptional().openapi({
      description:
        'The name of the individual.\n>Make sure your account holder registers using the name shown on their Photo ID. \n Maximum length: 80 characters \n Cannot contain numbers. /n Cannot be empty.',
    }),
    personalData: ViasPersonalDataSchema.exactOptional().openapi({
      description: 'Personal information of the individual.',
    }),
  })
  .openapi({ required: [] })
  .openapi('IndividualDetails')

const LegalArrangementEntityDetailSchema = z
  .strictObject({
    address: ViasAddressSchema.exactOptional().openapi({
      description: 'The address of the entity.',
    }),
    businessDetails: BusinessDetailsSchema.exactOptional().openapi({
      description:
        'Required when creating an entity with `legalEntityType` **Business**, **NonProfit**, **PublicCompany**, or **Partnership**.',
    }),
    email: z.string().exactOptional().openapi({ description: 'The e-mail address of the entity.' }),
    fullPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The phone number of the contact provided as a single string.  It will be handled as a landline phone.\n**Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"',
      }),
    individualDetails: IndividualDetailsSchema.exactOptional().openapi({
      description: 'Required when creating an entity with `legalEntityType` **Individual**.',
    }),
    legalArrangementEntityCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create a legal arrangement entity.\nUse only when updating an account holder. If you include this field when creating an account holder, the request will fail.',
      }),
    legalArrangementEntityReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your reference for the legal arrangement entity.' }),
    legalArrangementMembers: z
      .array(
        z.enum([
          'Beneficiary',
          'ControllingPerson',
          'Partner',
          'Protector',
          'Settlor',
          'Shareholder',
          'Trustee',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          'An array containing the roles of the entity in the legal arrangement.\n\nThe possible values depend on the legal arrangement `type`.\n\n- For `type` **Association**: **ControllingPerson** and **Shareholder**.\n\n- For `type` **Partnership**: **Partner** and **Shareholder**.\n\n- For `type` **Trust**: **Trustee**, **Settlor**, **Protector**, **Beneficiary**,  and **Shareholder**.\n\n',
      }),
    legalEntityType: z
      .enum(['Business', 'Individual', 'NonProfit', 'Partnership', 'PublicCompany'])
      .exactOptional()
      .openapi({
        description:
          'The legal entity type.\n\nPossible values: **Business**, **Individual**, **NonProfit**, **PublicCompany**, or **Partnership**. ',
      }),
    phoneNumber: ViasPhoneNumberSchema.exactOptional().openapi({
      description: 'The phone number of the entity.',
    }),
    webAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the website of the contact.' }),
  })
  .openapi({ required: [] })
  .openapi('LegalArrangementEntityDetail')

type LegalArrangementDetailType = {
  address: z.infer<typeof ViasAddressSchema>
  legalArrangementCode?: string
  legalArrangementEntities?: z.infer<typeof LegalArrangementEntityDetailSchema>[]
  legalArrangementReference?: string
  legalForm?:
    | 'CashManagementTrust'
    | 'CorporateUnitTrust'
    | 'DeceasedEstate'
    | 'DiscretionaryInvestmentTrust'
    | 'DiscretionaryServicesManagementTrust'
    | 'DiscretionaryTradingTrust'
    | 'FirstHomeSaverAccountsTrust'
    | 'FixedTrust'
    | 'FixedUnitTrust'
    | 'HybridTrust'
    | 'ListedPublicUnitTrust'
    | 'OtherTrust'
    | 'PooledSuperannuationTrust'
    | 'PublicTradingTrust'
    | 'UnlistedPublicUnitTrust'
    | 'LimitedPartnership'
    | 'FamilyPartnership'
    | 'OtherPartnership'
  name: string
  registrationNumber?: string
  taxNumber?: string
  type: 'Association' | 'Partnership' | 'SoleProprietorship' | 'Trust'
}

const LegalArrangementDetailSchema: z.ZodType<LegalArrangementDetailType> = z
  .strictObject({
    address: ViasAddressSchema.openapi({ description: 'The address of the legal arrangement.' }),
    legalArrangementCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Adyen-generated unique alphanumeric identifier (UUID) for the entry, returned in the response when you create a legal arrangement.\nUse only when updating an account holder. If you include this field when creating an account holder, the request will fail.',
      }),
    legalArrangementEntities: z
      .array(LegalArrangementEntityDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'An array containing information about other entities that are part of the legal arrangement.',
      }),
    legalArrangementReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Your reference for the legal arrangement. Must be between 3 to 128 characters.',
      }),
    legalForm: z
      .enum([
        'CashManagementTrust',
        'CorporateUnitTrust',
        'DeceasedEstate',
        'DiscretionaryInvestmentTrust',
        'DiscretionaryServicesManagementTrust',
        'DiscretionaryTradingTrust',
        'FirstHomeSaverAccountsTrust',
        'FixedTrust',
        'FixedUnitTrust',
        'HybridTrust',
        'ListedPublicUnitTrust',
        'OtherTrust',
        'PooledSuperannuationTrust',
        'PublicTradingTrust',
        'UnlistedPublicUnitTrust',
        'LimitedPartnership',
        'FamilyPartnership',
        'OtherPartnership',
      ])
      .exactOptional()
      .openapi({
        description:
          'The form of legal arrangement. Required if `type` is **Trust** or **Partnership**.\n\nThe possible values depend on the `type`.\n\n- For `type` **Trust**:  **CashManagementTrust**, **CorporateUnitTrust**, **DeceasedEstate**, **DiscretionaryInvestmentTrust**, **DiscretionaryServicesManagementTrust**, **DiscretionaryTradingTrust**, **FirstHomeSaverAccountsTrust**, **FixedTrust**, **FixedUnitTrust**, **HybridTrust**, **ListedPublicUnitTrust**, **OtherTrust**, **PooledSuperannuationTrust**, **PublicTradingTrust**, or **UnlistedPublicUnitTrust**.\n\n- For `type` **Partnership**: **LimitedPartnership**, **FamilyPartnership**, or **OtherPartnership**',
      }),
    name: z
      .string()
      .openapi({
        description: 'The legal name of the legal arrangement. Minimum length: 3 characters.',
      }),
    registrationNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The registration number of the legal arrangement.' }),
    taxNumber: z
      .string()
      .exactOptional()
      .openapi({ description: 'The tax identification number of the legal arrangement.' }),
    type: z
      .enum(['Association', 'Partnership', 'SoleProprietorship', 'Trust'])
      .openapi({
        description:
          'The [type of legal arrangement](https://docs.adyen.com/classic-platforms/verification-process/legal-arrangements#types-of-legal-arrangements).\n\nPossible values:\n\n- **Association** \n\n- **Partnership** \n\n- **SoleProprietorship** \n\n- **Trust** \n\n',
      }),
  })
  .openapi({ required: ['type', 'name', 'address'] })
  .openapi('LegalArrangementDetail')

const PayoutMethodSchema = z
  .strictObject({
    merchantAccount: z
      .string()
      .openapi({
        description:
          "The [`merchantAccount`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_merchantAccount) you used in the `/payments` request when you [saved the account holder's card details](https://docs.adyen.com/classic-platforms/payouts/manual-payout/payout-to-cards#check-and-store).",
      }),
    payoutMethodCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Adyen-generated unique alphanumeric identifier (UUID) for the payout method, returned in the response when you create a payout method. Required when updating an existing payout method in an `/updateAccountHolder` request.',
      }),
    payoutMethodReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your reference for the payout method.' }),
    recurringDetailReference: z
      .string()
      .openapi({
        description:
          "The [`recurringDetailReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__resParam_additionalData-ResponseAdditionalDataCommon-recurring-recurringDetailReference)  returned in the `/payments` response when you [saved the account holder's card details](https://docs.adyen.com/classic-platforms/payouts/manual-payout/payout-to-cards#check-and-store).",
      }),
    shopperReference: z
      .string()
      .openapi({
        description:
          "The [`shopperReference`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/payments__reqParam_shopperReference) you sent in the `/payments` request when you [saved the account holder's card details](https://docs.adyen.com/classic-platforms/payouts/manual-payout/payout-to-cards#check-and-store).",
      }),
  })
  .openapi({ required: ['merchantAccount', 'shopperReference', 'recurringDetailReference'] })
  .openapi('PayoutMethod')

const StoreDetailSchema = z
  .strictObject({
    address: ViasAddressSchema.openapi({
      description:
        'The address of the physical store where the account holder will process payments from.',
    }),
    fullPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The phone number of the store provided as a single string.  It will be handled as a landline phone.\n\nExamples: "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"',
      }),
    logo: z
      .string()
      .exactOptional()
      .openapi({ 'x-addedInVersion': '5', description: 'Store logo for payment method setup.' }),
    merchantAccount: z
      .string()
      .openapi({ description: 'The merchant account to which the store belongs.' }),
    merchantCategoryCode: z
      .string()
      .openapi({
        description:
          'The merchant category code (MCC) that classifies the business of the account holder.',
      }),
    merchantHouseNumber: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description: 'Merchant house number for payment method setup.',
      }),
    phoneNumber: ViasPhoneNumberSchema.exactOptional().openapi({
      description: 'The phone number of the store.',
    }),
    shopperInteraction: z
      .enum(['Ecommerce', 'POS'])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description: 'The sales channel. Possible values: **Ecommerce**, **POS**.',
      }),
    splitConfigurationUUID: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'The unique reference for the split configuration, returned when you configure splits in your Customer Area. When this is provided, the `virtualAccount` is also required. Adyen uses the configuration and the `virtualAccount` to split funds between accounts in your platform.',
      }),
    status: z
      .enum(['Active', 'Closed', 'Inactive', 'InactiveWithModifications', 'Pending'])
      .exactOptional()
      .openapi({
        description:
          'The status of the store. Possible values: **Pending**, **Active**, **Inactive**, **InactiveWithModifications**, **Closed**.',
      }),
    store: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Adyen-generated unique alphanumeric identifier (UUID) for the store, returned in the response when you create a store. Required when updating an existing store in an `/updateAccountHolder` request.',
      }),
    storeName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The name of the account holder's store. This value is shown in shopper statements.\n\n * Length: Between 3 to 22 characters \n\n * The following characters are *not* supported: **:;}{$#@!|<>%^*+=\\\\**\n\n**Note:** storeName does not appear in American Express shopper statements by default. Contact Adyen Support to enable this for American Express.",
      }),
    storeReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Your unique identifier for the store. The Customer Area also uses this value for the store description.\n\n * Length: Between 3 to 128 characters\n\n* The following characters are *not* supported: **:;}{$#@!|<>%^*+=\\\\**',
      }),
    virtualAccount: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          "The account holder's `accountCode` where the split amount will be sent. Required when you provide the `splitConfigurationUUID`.",
      }),
    webAddress: z
      .string()
      .exactOptional()
      .openapi({ 'x-addedInVersion': '5', description: 'URL of the ecommerce store.' }),
  })
  .openapi({ required: ['merchantCategoryCode', 'address', 'merchantAccount'] })
  .openapi('StoreDetail')

type AccountHolderDetailsType = {
  address: z.infer<typeof ViasAddressSchema>
  bankAccountDetails?: z.infer<typeof BankAccountDetailSchema>[]
  bankAggregatorDataReference?: string
  businessDetails?: z.infer<typeof BusinessDetailsSchema>
  email?: string
  fullPhoneNumber?: string
  individualDetails?: z.infer<typeof IndividualDetailsSchema>
  lastReviewDate?: string
  legalArrangements?: z.infer<typeof LegalArrangementDetailSchema>[]
  merchantCategoryCode?: string
  metadata?: { [key: string]: string }
  payoutMethods?: z.infer<typeof PayoutMethodSchema>[]
  phoneNumber?: z.infer<typeof ViasPhoneNumberSchema>
  principalBusinessAddress?: z.infer<typeof ViasAddressSchema>
  storeDetails?: z.infer<typeof StoreDetailSchema>[]
  webAddress?: string
}

const AccountHolderDetailsSchema: z.ZodType<AccountHolderDetailsType> = z
  .strictObject({
    address: ViasAddressSchema.openapi({ description: 'The address of the account holder.' }),
    bankAccountDetails: z
      .array(BankAccountDetailSchema)
      .exactOptional()
      .openapi({
        description:
          'Array of bank accounts associated with the account holder. For details about the required `bankAccountDetail` fields, see [Required information](https://docs.adyen.com/classic-platforms/verification-process/required-information).',
      }),
    bankAggregatorDataReference: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'The opaque reference value returned by the Adyen API during bank account login.',
      }),
    businessDetails: BusinessDetailsSchema.exactOptional().openapi({
      description:
        'Details about the business or nonprofit account holder.\nRequired when creating an account holder with `legalEntity` **Business** or **NonProfit**.',
    }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The email address of the account holder.' }),
    fullPhoneNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The phone number of the account holder provided as a single string. It will be handled as a landline phone.\n**Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"',
      }),
    individualDetails: IndividualDetailsSchema.exactOptional().openapi({
      description:
        'Details about the individual account holder.\nRequired when creating an account holder with `legalEntity` **Individual**.\n',
    }),
    lastReviewDate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Date when you last reviewed the account holder's information, in ISO-8601 YYYY-MM-DD format. For example, **2020-01-31**.",
      }),
    legalArrangements: z
      .array(LegalArrangementDetailSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description:
          "An array containing information about the account holder's [legal arrangements](https://docs.adyen.com/classic-platforms/verification-process/legal-arrangements).",
      }),
    merchantCategoryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Merchant Category Code of the account holder.\n> If not specified in the request, this will be derived from the platform account (which is configured by Adyen).',
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'A set of key and value pairs for general use by the account holder or merchant.\nThe keys do not have specific names and may be used for storing miscellaneous data as desired.\n> The values being stored have a maximum length of eighty (80) characters and will be truncated if necessary.\n> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.',
      }),
    payoutMethods: z
      .array(PayoutMethodSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Array of tokenized card details associated with the account holder. For details about how you can use the tokens to pay out, refer to [Pay out to cards](https://docs.adyen.com/classic-platforms/payout-to-cards).',
      }),
    phoneNumber: ViasPhoneNumberSchema.exactOptional().openapi({
      description:
        'The phone number of the account holder.\n> Required if a `fullPhoneNumber` is not provided.',
    }),
    principalBusinessAddress: ViasAddressSchema.exactOptional().openapi({
      description: 'The principal business address of the account holder.',
    }),
    storeDetails: z
      .array(StoreDetailSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Array of stores associated with the account holder. Required when onboarding account holders that have an Adyen [point of sale](https://docs.adyen.com/classic-platforms/platforms-for-pos).',
      }),
    webAddress: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL of the website of the account holder.' }),
  })
  .openapi({ required: ['address'] })
  .openapi('AccountHolderDetails')

const AccountEventSchema = z
  .strictObject({
    event: z
      .enum(['InactivateAccount', 'RefundNotPaidOutTransfers'])
      .exactOptional()
      .openapi({
        description:
          'The event.\n>Permitted values: `InactivateAccount`, `RefundNotPaidOutTransfers`.\nFor more information, refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-process).',
      }),
    executionDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date on which the event will take place.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason why this event has been created.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountEvent')

const AmountSchema = z
  .strictObject({
    currency: z
      .string()
      .length(3)
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
  .openapi({ required: ['value', 'currency'] })
  .openapi('Amount')

const AccountPayoutStateSchema = z
  .strictObject({
    allowPayout: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates whether payouts are allowed. This field is the overarching payout status, and is the aggregate of multiple conditions (e.g., KYC status, disabled flag, etc). If this field is false, no payouts will be permitted for any of the account holder's accounts. If this field is true, payouts will be permitted for any of the account holder's accounts.",
      }),
    disableReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The reason why payouts (to all of the account holder's accounts) have been disabled (by the platform). If the `disabled` field is true, this field can be used to explain why.",
      }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates whether payouts have been disabled (by the platform) for all of the account holder's accounts. A platform may enable and disable this field at their discretion. If this field is true, `allowPayout` will be false and no payouts will be permitted for any of the account holder's accounts. If this field is false, `allowPayout` may or may not be enabled, depending on other factors.",
      }),
    notAllowedReason: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          "The reason why payouts (to all of the account holder's accounts) have been disabled (by Adyen). If payouts have been disabled by Adyen, this field will explain why. If this field is blank, payouts have not been disabled by Adyen.",
      }),
    payoutLimit: AmountSchema.exactOptional().openapi({
      description:
        'The maximum amount that payouts are limited to. Only applies if payouts are allowed but limited.',
    }),
    tierNumber: z
      .int32()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The payout tier that the account holder occupies.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountPayoutState')

const AccountProcessingStateSchema = z
  .strictObject({
    disableReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason why processing has been disabled.' }),
    disabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the processing of payments is allowed.' }),
    processedFrom: AmountSchema.exactOptional().openapi({
      description:
        'The lower bound of the processing tier (i.e., an account holder must have processed at least this amount of money in order to be placed into this tier).',
    }),
    processedTo: AmountSchema.exactOptional().openapi({
      description:
        'The upper bound of the processing tier (i.e., an account holder must have processed less than this amount of money in order to be placed into this tier).',
    }),
    tierNumber: z
      .int32()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The processing tier that the account holder occupies.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AccountProcessingState')

const AccountHolderStatusSchema = z
  .strictObject({
    events: z
      .array(AccountEventSchema)
      .exactOptional()
      .openapi({ description: 'A list of events scheduled for the account holder.' }),
    payoutState: AccountPayoutStateSchema.exactOptional().openapi({
      description: 'The payout state of the account holder.',
    }),
    processingState: AccountProcessingStateSchema.exactOptional().openapi({
      description: 'The processing state of the account holder.',
    }),
    status: z
      .enum(['Active', 'Closed', 'Inactive', 'Suspended'])
      .openapi({
        description:
          'The status of the account holder.\n>Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.',
      }),
    statusReason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason why the status was assigned to the account holder.' }),
  })
  .openapi({ required: ['status'] })
  .openapi('AccountHolderStatus')

const FieldTypeSchema = z
  .strictObject({
    field: z.string().exactOptional().openapi({ description: 'The full name of the property.' }),
    fieldName: z
      .enum([
        'accountCode',
        'accountHolderCode',
        'accountHolderDetails',
        'accountNumber',
        'accountStateType',
        'accountStatus',
        'accountType',
        'address',
        'balanceAccount',
        'balanceAccountActive',
        'balanceAccountCode',
        'balanceAccountId',
        'bankAccount',
        'bankAccountCode',
        'bankAccountName',
        'bankAccountUUID',
        'bankBicSwift',
        'bankCity',
        'bankCode',
        'bankName',
        'bankStatement',
        'branchCode',
        'businessContact',
        'cardToken',
        'checkCode',
        'city',
        'companyRegistration',
        'constitutionalDocument',
        'controller',
        'country',
        'countryCode',
        'currency',
        'currencyCode',
        'dateOfBirth',
        'description',
        'destinationAccountCode',
        'document',
        'documentContent',
        'documentExpirationDate',
        'documentIssuerCountry',
        'documentIssuerState',
        'documentName',
        'documentNumber',
        'documentType',
        'doingBusinessAs',
        'drivingLicence',
        'drivingLicenceBack',
        'drivingLicenceFront',
        'drivingLicense',
        'email',
        'firstName',
        'formType',
        'fullPhoneNumber',
        'gender',
        'hopWebserviceUser',
        'houseNumberOrName',
        'iban',
        'idCard',
        'idCardBack',
        'idCardFront',
        'idNumber',
        'identityDocument',
        'individualDetails',
        'infix',
        'jobTitle',
        'lastName',
        'lastReviewDate',
        'legalArrangement',
        'legalArrangementCode',
        'legalArrangementEntity',
        'legalArrangementEntityCode',
        'legalArrangementLegalForm',
        'legalArrangementMember',
        'legalArrangementMembers',
        'legalArrangementName',
        'legalArrangementReference',
        'legalArrangementRegistrationNumber',
        'legalArrangementTaxNumber',
        'legalArrangementType',
        'legalBusinessName',
        'legalEntity',
        'legalEntityType',
        'linkedViasVirtualAccount',
        'logo',
        'merchantAccount',
        'merchantCategoryCode',
        'merchantHouseNumber',
        'merchantReference',
        'microDeposit',
        'name',
        'nationality',
        'originalReference',
        'ownerCity',
        'ownerCountryCode',
        'ownerDateOfBirth',
        'ownerHouseNumberOrName',
        'ownerName',
        'ownerPostalCode',
        'ownerState',
        'ownerStreet',
        'passport',
        'passportNumber',
        'payoutMethod',
        'payoutMethodCode',
        'payoutSchedule',
        'pciSelfAssessment',
        'personalData',
        'phoneCountryCode',
        'phoneNumber',
        'postalCode',
        'primaryCurrency',
        'reason',
        'registrationNumber',
        'returnUrl',
        'schedule',
        'shareholder',
        'shareholderCode',
        'shareholderCodeAndSignatoryCode',
        'shareholderCodeOrSignatoryCode',
        'shareholderType',
        'shareholderTypes',
        'shopperInteraction',
        'signatory',
        'signatoryCode',
        'socialSecurityNumber',
        'sourceAccountCode',
        'splitAccount',
        'splitConfigurationUUID',
        'splitCurrency',
        'splitValue',
        'splits',
        'stateOrProvince',
        'status',
        'stockExchange',
        'stockNumber',
        'stockTicker',
        'store',
        'storeDetail',
        'storeName',
        'storeReference',
        'street',
        'taxId',
        'tier',
        'tierNumber',
        'transferCode',
        'ultimateParentCompany',
        'ultimateParentCompanyAddressDetails',
        'ultimateParentCompanyAddressDetailsCountry',
        'ultimateParentCompanyBusinessDetails',
        'ultimateParentCompanyBusinessDetailsLegalBusinessName',
        'ultimateParentCompanyBusinessDetailsRegistrationNumber',
        'ultimateParentCompanyCode',
        'ultimateParentCompanyStockExchange',
        'ultimateParentCompanyStockNumber',
        'ultimateParentCompanyStockNumberOrStockTicker',
        'ultimateParentCompanyStockTicker',
        'unknown',
        'value',
        'verificationType',
        'virtualAccount',
        'visaNumber',
        'webAddress',
        'year',
      ])
      .exactOptional()
      .openapi({ description: 'The type of the field.' }),
    shareholderCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code of the shareholder that the field belongs to. If empty, the field belongs to an account holder.',
      }),
  })
  .openapi({ required: [] })
  .openapi('FieldType')

const ErrorFieldTypeSchema = z
  .strictObject({
    errorCode: z.int32().exactOptional().openapi({ description: 'The validation error code.' }),
    errorDescription: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the validation error.' }),
    fieldType: FieldTypeSchema.exactOptional().openapi({ description: 'The type of error field.' }),
  })
  .openapi({ required: [] })
  .openapi('ErrorFieldType')

const KYCCheckSummarySchema = z
  .strictObject({
    kycCheckCode: z
      .int32()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'The code of the check. For possible values, refer to [Verification codes](https://docs.adyen.com/classic-platforms/verification-process/verification-codes).',
      }),
    kycCheckDescription: z
      .string()
      .exactOptional()
      .openapi({ 'x-addedInVersion': '5', description: 'A description of the check.' }),
  })
  .openapi({ required: [] })
  .openapi('KYCCheckSummary')

const KYCCheckStatusDataSchema = z
  .strictObject({
    requiredFields: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'A list of the fields required for execution of the check.' }),
    status: z
      .enum([
        'AWAITING_DATA',
        'DATA_PROVIDED',
        'FAILED',
        'INVALID_DATA',
        'PASSED',
        'PENDING',
        'PENDING_REVIEW',
        'RETRY_LIMIT_REACHED',
        'UNCHECKED',
      ])
      .openapi({
        description:
          'The status of the check.\n\nPossible values: **AWAITING_DATA** , **DATA_PROVIDED**, **FAILED**, **INVALID_DATA**, **PASSED**, **PENDING**, **RETRY_LIMIT_REACHED**.',
      }),
    summary: KYCCheckSummarySchema.exactOptional().openapi({
      description: 'A summary of the execution of the check.',
    }),
    type: z
      .enum([
        'BANK_ACCOUNT_VERIFICATION',
        'CARD_VERIFICATION',
        'COMPANY_VERIFICATION',
        'IDENTITY_VERIFICATION',
        'LEGAL_ARRANGEMENT_VERIFICATION',
        'NONPROFIT_VERIFICATION',
        'PASSPORT_VERIFICATION',
        'PAYOUT_METHOD_VERIFICATION',
        'PCI_VERIFICATION',
      ])
      .openapi({
        description:
          'The type of check.\n\nPossible values:\n\n * **BANK_ACCOUNT_VERIFICATION**: Used in v5 and earlier. Replaced by **PAYOUT_METHOD_VERIFICATION** in v6 and later.\n\n * **COMPANY_VERIFICATION**\n\n  * **CARD_VERIFICATION**\n\n* **IDENTITY_VERIFICATION**\n\n* **LEGAL_ARRANGEMENT_VERIFICATION**\n\n* **NONPROFIT_VERIFICATION**\n\n * **PASSPORT_VERIFICATION**\n\n* **PAYOUT_METHOD_VERIFICATION**: Used in v6 and later.\n\n* **PCI_VERIFICATION**',
      }),
  })
  .openapi({ required: ['type', 'status'] })
  .openapi('KYCCheckStatusData')

const KYCCheckResultSchema = z
  .strictObject({
    checks: z
      .array(KYCCheckStatusDataSchema)
      .exactOptional()
      .openapi({ description: 'A list of the checks and their statuses.' }),
  })
  .openapi({ required: [] })
  .openapi('KYCCheckResult')

const KYCLegalArrangementCheckResultSchema = z
  .strictObject({
    checks: z
      .array(KYCCheckStatusDataSchema)
      .exactOptional()
      .openapi({ description: 'A list of the checks and their statuses.' }),
    legalArrangementCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique ID of the legal arrangement to which the check applies.',
      }),
  })
  .openapi({ required: [] })
  .openapi('KYCLegalArrangementCheckResult')

const KYCLegalArrangementEntityCheckResultSchema = z
  .strictObject({
    checks: z
      .array(KYCCheckStatusDataSchema)
      .exactOptional()
      .openapi({ description: 'A list of the checks and their statuses.' }),
    legalArrangementCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique ID of the legal arrangement to which the entity belongs.',
      }),
    legalArrangementEntityCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique ID of the legal arrangement entity to which the check applies.',
      }),
  })
  .openapi({ required: [] })
  .openapi('KYCLegalArrangementEntityCheckResult')

const KYCPayoutMethodCheckResultSchema = z
  .strictObject({
    checks: z
      .array(KYCCheckStatusDataSchema)
      .exactOptional()
      .openapi({ description: 'A list of the checks and their statuses.' }),
    payoutMethodCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The unique ID of the payoput method to which the check applies.' }),
  })
  .openapi({ required: [] })
  .openapi('KYCPayoutMethodCheckResult')

const KYCShareholderCheckResultSchema = z
  .strictObject({
    checks: z
      .array(KYCCheckStatusDataSchema)
      .exactOptional()
      .openapi({ description: 'A list of the checks and their statuses.' }),
    legalArrangementCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description:
          'The unique ID of the legal arrangement to which the shareholder belongs, if applicable.',
      }),
    legalArrangementEntityCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description:
          'The unique ID of the legal arrangement entity to which the shareholder belongs, if applicable.',
      }),
    shareholderCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the shareholder to which the check applies.' }),
  })
  .openapi({ required: [] })
  .openapi('KYCShareholderCheckResult')

const KYCSignatoryCheckResultSchema = z
  .strictObject({
    checks: z
      .array(KYCCheckStatusDataSchema)
      .exactOptional()
      .openapi({ description: 'A list of the checks and their statuses.' }),
    signatoryCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the signatory to which the check applies.' }),
  })
  .openapi({ required: [] })
  .openapi('KYCSignatoryCheckResult')

const KYCUltimateParentCompanyCheckResultSchema = z
  .strictObject({
    checks: z
      .array(KYCCheckStatusDataSchema)
      .exactOptional()
      .openapi({ description: 'A list of the checks and their statuses.' }),
    ultimateParentCompanyCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The code of the Ultimate Parent Company to which the check applies.',
      }),
  })
  .openapi({ required: [] })
  .openapi('KYCUltimateParentCompanyCheckResult')

const KYCVerificationResultSchema = z
  .strictObject({
    accountHolder: KYCCheckResultSchema.exactOptional().openapi({
      description: 'The results of the checks on the account holder.',
    }),
    legalArrangements: z
      .array(KYCLegalArrangementCheckResultSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The results of the checks on the legal arrangements.',
      }),
    legalArrangementsEntities: z
      .array(KYCLegalArrangementEntityCheckResultSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The results of the checks on the legal arrangement entities.',
      }),
    payoutMethods: z
      .array(KYCPayoutMethodCheckResultSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The results of the checks on the payout methods.',
      }),
    shareholders: z
      .array(KYCShareholderCheckResultSchema)
      .exactOptional()
      .openapi({ description: 'The results of the checks on the shareholders.' }),
    signatories: z
      .array(KYCSignatoryCheckResultSchema)
      .exactOptional()
      .openapi({ description: 'The results of the checks on the signatories.' }),
    ultimateParentCompany: z
      .array(KYCUltimateParentCompanyCheckResultSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The result of the check on the Ultimate Parent Company.',
      }),
  })
  .openapi({ required: [] })
  .openapi('KYCVerificationResult')

type CreateAccountHolderResponseType = {
  accountCode?: string
  accountHolderCode?: string
  accountHolderDetails?: z.infer<typeof AccountHolderDetailsSchema>
  accountHolderStatus?: z.infer<typeof AccountHolderStatusSchema>
  description?: string
  invalidFields?: z.infer<typeof ErrorFieldTypeSchema>[]
  legalEntity?: 'Business' | 'Individual' | 'NonProfit' | 'Partnership' | 'PublicCompany'
  primaryCurrency?: string
  pspReference?: string
  resultCode?: string
  verification?: z.infer<typeof KYCVerificationResultSchema>
  verificationProfile?: string
}

const CreateAccountHolderResponseSchema: z.ZodType<CreateAccountHolderResponseType> = z
  .strictObject({
    accountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of a new account created for the account holder.' }),
    accountHolderCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the new account holder.' }),
    accountHolderDetails: AccountHolderDetailsSchema.exactOptional().openapi({
      description: 'Details of the new account holder.',
    }),
    accountHolderStatus: AccountHolderStatusSchema.exactOptional().openapi({
      'x-addedInVersion': '2',
      description: 'The status of the new account holder.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '4',
        description: 'The description of the new account holder.',
      }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description: 'A list of fields that caused the `/createAccountHolder` request to fail.',
      }),
    legalEntity: z
      .enum(['Business', 'Individual', 'NonProfit', 'Partnership', 'PublicCompany'])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '4',
        description: 'The type of legal entity of the new account holder.',
      }),
    primaryCurrency: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        deprecated: true,
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
    verification: KYCVerificationResultSchema.exactOptional().openapi({
      'x-addedInVersion': '2',
      description: 'The details of KYC Verification of the account holder.',
    }),
    verificationProfile: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The identifier of the profile that applies to this entity.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateAccountHolderResponse')

const NotificationErrorContainerSchema = z
  .strictObject({
    errorCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Adyen code that is mapped to the error message.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({ description: 'A short explanation of the issue.' }),
  })
  .openapi({ required: [] })
  .openapi('NotificationErrorContainer')

type AccountHolderCreateNotificationType = {
  content?: z.infer<typeof CreateAccountHolderResponseSchema>
  error?: z.infer<typeof NotificationErrorContainerSchema>
  eventDate: string
  eventType: string
  executingUserKey: string
  live: boolean
  pspReference: string
}

type UpdateAccountHolderResponseType = {
  accountHolderCode?: string
  accountHolderDetails?: z.infer<typeof AccountHolderDetailsSchema>
  accountHolderStatus?: z.infer<typeof AccountHolderStatusSchema>
  description?: string
  invalidFields?: z.infer<typeof ErrorFieldTypeSchema>[]
  legalEntity?: 'Business' | 'Individual' | 'NonProfit' | 'Partnership' | 'PublicCompany'
  primaryCurrency?: string
  pspReference?: string
  resultCode?: string
  verification?: z.infer<typeof KYCVerificationResultSchema>
  verificationProfile?: string
}

const UpdateAccountHolderResponseSchema: z.ZodType<UpdateAccountHolderResponseType> = z
  .strictObject({
    accountHolderCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the account holder.' }),
    accountHolderDetails: AccountHolderDetailsSchema.exactOptional().openapi({
      description: 'Details of the account holder.',
    }),
    accountHolderStatus: AccountHolderStatusSchema.exactOptional().openapi({
      'x-addedInVersion': '2',
      description: 'The new status of the account holder.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ 'x-addedInVersion': '4', description: 'The description of the account holder.' }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'in case the account holder has not been updated, contains account holder fields, that did not pass the validation.',
      }),
    legalEntity: z
      .enum(['Business', 'Individual', 'NonProfit', 'Partnership', 'PublicCompany'])
      .exactOptional()
      .openapi({ 'x-addedInVersion': '4', description: 'The legal entity of the account holder.' }),
    primaryCurrency: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        deprecated: true,
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
    verification: KYCVerificationResultSchema.exactOptional().openapi({
      'x-addedInVersion': '2',
      description: 'The details of KYC Verification of the account holder.',
    }),
    verificationProfile: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The identifier of the profile that applies to this entity.',
      }),
  })
  .openapi({ required: [] })
  .openapi('UpdateAccountHolderResponse')

type AccountHolderUpdateNotificationType = {
  content?: z.infer<typeof UpdateAccountHolderResponseSchema>
  error?: z.infer<typeof NotificationErrorContainerSchema>
  eventDate: string
  eventType: string
  executingUserKey: string
  live: boolean
  pspReference: string
}

const CloseAccountResponseSchema = z
  .strictObject({
    accountCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description: 'The account code of the account that is closed.',
      }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Contains field validation errors that would prevent requests from being processed.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
    status: z
      .enum(['Active', 'Closed', 'Inactive', 'Suspended'])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '2',
        description:
          'The new status of the account.\n>Permitted values: `Active`, `Inactive`, `Suspended`, `Closed`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CloseAccountResponse')

const AccountCloseNotificationSchema = z
  .strictObject({
    content: CloseAccountResponseSchema.exactOptional().openapi({
      description: 'The details of the Account update.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('AccountCloseNotification')

const PayoutScheduleResponseSchema = z
  .strictObject({
    nextScheduledPayout: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date of the next scheduled payout.' }),
    schedule: z
      .enum([
        'BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT',
        'DAILY',
        'DAILY_AU',
        'DAILY_EU',
        'DAILY_SG',
        'DAILY_US',
        'HOLD',
        'MONTHLY',
        'WEEKLY',
        'WEEKLY_MON_TO_FRI_AU',
        'WEEKLY_MON_TO_FRI_EU',
        'WEEKLY_MON_TO_FRI_US',
        'WEEKLY_ON_TUE_FRI_MIDNIGHT',
        'WEEKLY_SUN_TO_THU_AU',
        'WEEKLY_SUN_TO_THU_US',
      ])
      .exactOptional()
      .openapi({
        description:
          'The payout schedule for the account.\n\nPossible values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`, `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`.\n> `HOLD` prevents scheduled payouts, but you can still initiate payouts manually.',
      }),
  })
  .openapi({ required: [] })
  .openapi('PayoutScheduleResponse')

const CreateAccountResponseSchema = z
  .strictObject({
    accountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the new account.' }),
    accountHolderCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the account holder.' }),
    bankAccountUUID: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ 'x-addedInVersion': '4', description: 'The description of the account.' }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description: 'A list of fields that caused the `/createAccount` request to fail.',
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description: 'A set of key and value pairs containing metadata.',
      }),
    payoutMethodCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.',
      }),
    payoutSchedule: PayoutScheduleResponseSchema.exactOptional().openapi({
      description: 'The details of the payout schedule added to the account.',
    }),
    payoutSpeed: z
      .enum(['INSTANT', 'SAME_DAY', 'STANDARD'])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
    status: z
      .enum(['Active', 'Closed', 'Inactive', 'Suspended'])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '2',
        description: 'The status of the account.\n>Permitted values: `Active`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CreateAccountResponse')

const AccountCreateNotificationSchema = z
  .strictObject({
    content: CreateAccountResponseSchema.exactOptional().openapi({
      description: 'The details of the account creation.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('AccountCreateNotification')

const LocalDateSchema = z
  .strictObject({ month: z.int32().exactOptional(), year: z.int32().exactOptional() })
  .openapi({ required: [] })
  .openapi('LocalDate')

const AccountFundsBelowThresholdNotificationContentSchema = z
  .strictObject({
    accountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the account with funds under threshold' }),
    balanceDate: LocalDateSchema.exactOptional().openapi({
      description: 'The date of the funds were found to be below threshold.',
    }),
    currentFunds: AmountSchema.exactOptional().openapi({
      description: 'The current funds in the liable account.',
    }),
    fundThreshold: AmountSchema.openapi({
      description: 'The configured fund threshold for the liable account',
    }),
    merchantAccountCode: z.string().openapi({ description: 'The code of the merchant account.' }),
  })
  .openapi({ required: ['merchantAccountCode', 'fundThreshold'] })
  .openapi('AccountFundsBelowThresholdNotificationContent')

const AccountFundsBelowThresholdNotificationSchema = z
  .strictObject({
    content: AccountFundsBelowThresholdNotificationContentSchema.exactOptional().openapi({
      description: 'Details of the liable account with funds under threshold.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('AccountFundsBelowThresholdNotification')

const AccountHolderCreateNotificationSchema: z.ZodType<AccountHolderCreateNotificationType> = z
  .strictObject({
    content: CreateAccountHolderResponseSchema.exactOptional().openapi({
      description: 'The details of the account holder creation.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('AccountHolderCreateNotification')

const MessageSchema = z
  .strictObject({
    code: z.string().exactOptional().openapi({ description: 'The message code.' }),
    text: z.string().exactOptional().openapi({ description: 'The message text.' }),
  })
  .openapi({ required: [] })
  .openapi('Message')

const OperationStatusSchema = z
  .strictObject({
    message: MessageSchema.exactOptional().openapi({
      description: 'The message regarding the operation status.',
    }),
    statusCode: z.string().exactOptional().openapi({ description: 'The status code.' }),
  })
  .openapi({ required: [] })
  .openapi('OperationStatus')

const AccountHolderPayoutNotificationContentSchema = z
  .strictObject({
    accountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the account from which the payout was made.' }),
    accountHolderCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the Account Holder to which the payout was made.' }),
    amounts: z
      .array(AmountSchema)
      .exactOptional()
      .openapi({ description: 'The payout amounts (per currency).' }),
    bankAccountDetail: BankAccountDetailSchema.exactOptional().openapi({
      description: 'Details of the Bank Account to which the payout was made.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the payout.' }),
    estimatedArrivalDate: LocalDateSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description: 'The estimated date of arrival.',
    }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({ 'x-addedInVersion': '5', description: 'Invalid fields list.' }),
    merchantReference: z
      .string()
      .exactOptional()
      .openapi({ 'x-addedInVersion': '2', description: 'The merchant reference.' }),
    originalPspReference: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description: 'The PSP reference of the original payout.',
      }),
    payoutAccountCountry: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The country code of the bank from which the payout was initiated.',
      }),
    payoutAccountNumber: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The account number of the bank from which the payout was initiated.',
      }),
    payoutBalanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The balance account id to which payment was made',
      }),
    payoutBankName: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The name of the bank the payout from which the payout was initiated.',
      }),
    payoutBranchCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The branch code of the bank from which the payout was initiated.',
      }),
    payoutReference: z
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
        'x-addedInVersion': '6',
        description: 'The unique payout identifier.',
      }),
    payoutSpeed: z
      .enum(['INSTANT', 'SAME_DAY', 'STANDARD'])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.',
      }),
    status: OperationStatusSchema.exactOptional().openapi({ description: 'The payout status.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountHolderPayoutNotificationContent')

const AccountHolderPayoutNotificationSchema = z
  .strictObject({
    content: AccountHolderPayoutNotificationContentSchema.exactOptional().openapi({
      description: 'Details of the payout to the Account Holder.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('AccountHolderPayoutNotification')

const AccountHolderStatusChangeNotificationContentSchema = z
  .strictObject({
    accountHolderCode: z.string().openapi({ description: 'The code of the account holder.' }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'in case the account holder has not been updated, contains account holder fields, that did not pass the validation.',
      }),
    newStatus: AccountHolderStatusSchema.exactOptional().openapi({
      'x-addedInVersion': '2',
      description: 'The new status of the account holder.',
    }),
    oldStatus: AccountHolderStatusSchema.exactOptional().openapi({
      'x-addedInVersion': '2',
      description: 'The former status of the account holder.',
    }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason for the status change.' }),
  })
  .openapi({ required: ['accountHolderCode'] })
  .openapi('AccountHolderStatusChangeNotificationContent')

const AccountHolderStatusChangeNotificationSchema = z
  .strictObject({
    content: AccountHolderStatusChangeNotificationContentSchema.exactOptional().openapi({
      description: 'The details of the Account Holder status change.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('AccountHolderStatusChangeNotification')

const AccountHolderStoreStatusChangeNotificationContentSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({ 'x-addedInVersion': '5', description: 'The code of the account holder.' }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'In case the store status has not been updated, contains fields that did not pass the validation.',
      }),
    newStatus: z
      .enum(['Active', 'Closed', 'Inactive', 'InactiveWithModifications', 'Pending'])
      .openapi({ 'x-addedInVersion': '5', description: 'The new status of the account holder.' }),
    oldStatus: z
      .enum(['Active', 'Closed', 'Inactive', 'InactiveWithModifications', 'Pending'])
      .openapi({
        'x-addedInVersion': '5',
        description: 'The former status of the account holder.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ 'x-addedInVersion': '5', description: 'The reason for the status change.' }),
    store: z
      .string()
      .openapi({ 'x-addedInVersion': '5', description: 'Alphanumeric identifier of the store.' }),
    storeReference: z
      .string()
      .openapi({ 'x-addedInVersion': '5', description: 'Store store reference.' }),
  })
  .openapi({ required: ['accountHolderCode', 'store', 'storeReference', 'oldStatus', 'newStatus'] })
  .openapi('AccountHolderStoreStatusChangeNotificationContent')

const AccountHolderStoreStatusChangeNotificationSchema = z
  .strictObject({
    content: AccountHolderStoreStatusChangeNotificationContentSchema.exactOptional().openapi({
      description: 'The details of the Account Holder Store status change.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('AccountHolderStoreStatusChangeNotification')

const AccountHolderUpcomingDeadlineNotificationContentSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the account holder whom the event refers to.' }),
    event: z
      .enum([
        'AccessPii',
        'ApiTierUpdate',
        'CloseAccount',
        'CloseStores',
        'DeleteBalanceAccounts',
        'DeleteBankAccounts',
        'DeleteLegalArrangements',
        'DeleteLiableBankAccount',
        'DeletePayoutMethods',
        'DeleteShareholders',
        'DeleteShareholdersNoKyc',
        'DeleteSignatories',
        'DeleteUnusedAccount',
        'InactivateAccount',
        'KYCDeadlineExtension',
        'MigrateAccountToBP',
        'RecalculateAccountStatusAndProcessingTier',
        'RefundNotPaidOutTransfers',
        'ResolveEvents',
        'SaveAccountHolder',
        'SaveKYCCheckStatus',
        'SuspendAccount',
        'UnSuspendAccount',
        'UpdateAccountHolderState',
        'Verification',
      ])
      .exactOptional()
      .openapi({ description: 'The event name that will be trigger if no action is taken.' }),
    executionDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The execution date scheduled for the event.' }),
    reason: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason that leads to scheduling of the event.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountHolderUpcomingDeadlineNotificationContent')

const AccountHolderUpcomingDeadlineNotificationSchema = z
  .strictObject({
    content: AccountHolderUpcomingDeadlineNotificationContentSchema.exactOptional().openapi({
      description: 'The details of the upcoming event.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('AccountHolderUpcomingDeadlineNotification')

const AccountHolderUpdateNotificationSchema: z.ZodType<AccountHolderUpdateNotificationType> = z
  .strictObject({
    content: UpdateAccountHolderResponseSchema.exactOptional().openapi({
      description: 'The details of the Account Holder update.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('AccountHolderUpdateNotification')

const AccountHolderVerificationNotificationContentSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the account holder.' }),
    kycCheckStatusData: KYCCheckStatusDataSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description: 'Information on the verification status',
    }),
    legalArrangementCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The unique ID of the legal arrangement that has been verified.',
      }),
    legalArrangementEntityCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The unique ID of the legal arrangement entity that has been verified.',
      }),
    payoutMethodCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The unique code of the payout method that has been verified.',
      }),
    shareholderCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the shareholder that has been verified.' }),
    signatoryCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the signatory that has been verified.' }),
  })
  .openapi({ required: [] })
  .openapi('AccountHolderVerificationNotificationContent')

const AccountHolderVerificationNotificationSchema = z
  .strictObject({
    content: AccountHolderVerificationNotificationContentSchema.exactOptional().openapi({
      description: 'The details of the Account Holder verification.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('AccountHolderVerificationNotification')

const UpdateAccountResponseSchema = z
  .strictObject({
    accountCode: z.string().openapi({ description: 'The code of the account.' }),
    bankAccountUUID: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ 'x-addedInVersion': '4', description: 'The description of the account.' }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description: 'A list of fields that caused the `/updateAccount` request to fail.',
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description: 'A set of key and value pairs containing metadata.',
      }),
    payoutMethodCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.',
      }),
    payoutSchedule: PayoutScheduleResponseSchema.exactOptional().openapi({
      description: 'The details of the payout schedule to which the account is updated.',
    }),
    payoutSpeed: z
      .enum(['INSTANT', 'SAME_DAY', 'STANDARD'])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Speed at which payouts for this account are processed.\n\nPossible values: `STANDARD`, `SAME_DAY`.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The reference of a request. Can be used to uniquely identify the request.',
      }),
    resultCode: z.string().exactOptional().openapi({ description: 'The result code.' }),
  })
  .openapi({ required: ['accountCode'] })
  .openapi('UpdateAccountResponse')

const AccountUpdateNotificationSchema = z
  .strictObject({
    content: UpdateAccountResponseSchema.exactOptional().openapi({
      description: 'The details of the Account update.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('AccountUpdateNotification')

const BeneficiarySetupNotificationContentSchema = z
  .strictObject({
    destinationAccountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the beneficiary account.' }),
    destinationAccountHolderCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the beneficiary Account Holder.' }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'A listing of the invalid fields which have caused the Setup Beneficiary request to fail. If this is empty, the Setup Beneficiary request has succeeded.',
      }),
    merchantReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference provided by the merchant.' }),
    sourceAccountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the benefactor account.' }),
    sourceAccountHolderCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the benefactor Account Holder.' }),
    transferDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'The date on which the beneficiary was set up and funds transferred from benefactor to beneficiary.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BeneficiarySetupNotificationContent')

const BeneficiarySetupNotificationSchema = z
  .strictObject({
    content: BeneficiarySetupNotificationContentSchema.exactOptional().openapi({
      description: 'Details of the beneficiary setup.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('BeneficiarySetupNotification')

const CompensateNegativeBalanceNotificationRecordSchema = z
  .strictObject({
    accountCode: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The code of the account whose negative balance has been compensated.',
      }),
    amount: AmountSchema.exactOptional().openapi({ description: 'The amount compensated.' }),
    transferDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date on which the compensation took place.' }),
  })
  .openapi({ required: [] })
  .openapi('CompensateNegativeBalanceNotificationRecord')

const CompensateNegativeBalanceNotificationContentSchema = z
  .strictObject({
    records: z
      .array(CompensateNegativeBalanceNotificationRecordSchema)
      .exactOptional()
      .openapi({ description: 'A list of the negative balances compensated.' }),
  })
  .openapi({ required: [] })
  .openapi('CompensateNegativeBalanceNotificationContent')

const CompensateNegativeBalanceNotificationSchema = z
  .strictObject({
    content: CompensateNegativeBalanceNotificationContentSchema.exactOptional().openapi({
      description: 'Details of the negative balance compensation.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('CompensateNegativeBalanceNotification')

const SplitAmountSchema = z
  .strictObject({
    currency: z
      .string()
      .length(3)
      .exactOptional()
      .openapi({
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). By default, this is the original payment currency.',
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
          'The value of the split amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes).',
      }),
  })
  .openapi({ required: ['value'] })
  .openapi('SplitAmount')

const SplitSchema = z
  .strictObject({
    account: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the account to which the split amount is booked. Required if `type` is **MarketPlace** or **BalanceAccount**.\n\n* [Classic Platforms integration](https://docs.adyen.com/classic-platforms): The [`accountCode`](https://docs.adyen.com/api-explorer/Account/latest/post/updateAccount#request-accountCode) of the account to which the split amount is booked.\n* [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model): The [`balanceAccountId`](https://docs.adyen.com/api-explorer/balanceplatform/latest/get/balanceAccounts/_id_#path-id) of the account to which the split amount is booked.',
      }),
    amount: SplitAmountSchema.exactOptional().openapi({
      description:
        'The amount of the split item.\n\n* Required for all split types in the [Classic Platforms integration](https://docs.adyen.com/classic-platforms).\n* Required if `type` is **BalanceAccount**, **Commission**, **Default**, or **VAT** in your [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model) integration.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Your description for the split item.' }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Your unique reference for the part of the payment booked to the specified `account`.\n\nThis is required if `type` is **MarketPlace** ([Classic Platforms integration](https://docs.adyen.com/classic-platforms)) or **BalanceAccount** ([Balance Platform](https://docs.adyen.com/adyen-for-platforms-model)).\n\nFor the other types, we also recommend providing a **unique** reference so you can reconcile the split and the associated payment in the transaction overview and in the reports.',
      }),
    type: z
      .enum([
        'AcquiringFees',
        'AdyenCommission',
        'AdyenFees',
        'AdyenMarkup',
        'BalanceAccount',
        'Commission',
        'Default',
        'Interchange',
        'MarketPlace',
        'PaymentFee',
        'Remainder',
        'SchemeFee',
        'Surcharge',
        'Tip',
        'VAT',
      ])
      .openapi({
        description:
          "The part of the payment you want to book to the specified `account`.\n\nPossible values for the [Balance Platform](https://docs.adyen.com/adyen-for-platforms-model):\n* **BalanceAccount**: books part of the payment (specified in `amount`) to the specified `account`.\n* Transaction fees types that you can book to the specified `account`:\n   * **AcquiringFees**: the aggregated amount of the interchange and scheme fees.\n   * **PaymentFee**: the aggregated amount of all transaction fees.\n   * **AdyenFees**: the aggregated amount of Adyen's commission and markup fees.\n   * **AdyenCommission**: the transaction fees due to Adyen under [blended rates](https://www.adyen.com/knowledge-hub/interchange-fees-explained).\n   * **AdyenMarkup**: the transaction fees due to Adyen under [Interchange ++ pricing](https://www.adyen.com/knowledge-hub/interchange-fees-explained).\n   * **Interchange**: the fees paid to the issuer for each payment made with the card network.\n   * **SchemeFee**: the fees paid to the card scheme for using their network. \n* **Commission**: your platform's commission on the payment (specified in `amount`), booked to your liable balance account.\n* **Remainder**: the amount left over after a currency conversion, booked to the specified `account`.\n* **TopUp**: allows you and your users to top up balance accounts using direct debit, card payments, or other payment methods.\n* **VAT**: the value-added tax charged on the payment, booked to your platforms liable balance account.\n* **Commission**: your platform's commission (specified in `amount`) on the payment, booked to your liable balance account.\n* **Default**: in very specific use cases, allows you to book the specified `amount` to the specified `account`. For more information, contact Adyen support.\n\nPossible values for the [Classic Platforms integration](https://docs.adyen.com/classic-platforms): **Commission**, **Default**, **Marketplace**, **PaymentFee**, **VAT**.",
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('Split')

const DirectDebitInitiatedNotificationContentSchema = z
  .strictObject({
    accountCode: z.string().openapi({ description: 'The code of the account.' }),
    amount: AmountSchema.openapi({
      description: 'The amount to be debited from the funding account.',
    }),
    debitInitiationDate: LocalDateSchema.exactOptional().openapi({
      description: 'The date of the debit initiation.',
    }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({ description: 'Invalid fields list.' }),
    merchantAccountCode: z.string().openapi({ description: 'The code of the merchant account.' }),
    splits: z
      .array(SplitSchema)
      .exactOptional()
      .openapi({ description: 'The split data for the debit request.' }),
    status: OperationStatusSchema.exactOptional().openapi({ description: 'Direct debit status.' }),
  })
  .openapi({ required: ['amount', 'accountCode', 'merchantAccountCode'] })
  .openapi('DirectDebitInitiatedNotificationContent')

const DirectDebitInitiatedNotificationSchema = z
  .strictObject({
    content: DirectDebitInitiatedNotificationContentSchema.exactOptional().openapi({
      description: 'Details of the direct debit.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('DirectDebitInitiatedNotification')

const NotificationResponseSchema = z
  .strictObject({
    notificationResponse: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Set this parameter to **[accepted]** to acknowledge that you received a notification from Adyen.',
      }),
  })
  .openapi({ required: [] })
  .openapi('NotificationResponse')

const PaymentFailureNotificationContentSchema = z
  .strictObject({
    errorFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({ description: 'Missing or invalid fields that caused the payment error.' }),
    errorMessage: MessageSchema.exactOptional().openapi({ description: 'The error message.' }),
    modificationMerchantReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The `reference` of the capture or refund.' }),
    modificationPspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The `pspReference` of the capture or refund.' }),
    paymentMerchantReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The `reference` of the payment.' }),
    paymentPspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The `pspReference` of the payment.' }),
  })
  .openapi({ required: [] })
  .openapi('PaymentFailureNotificationContent')

const PaymentFailureNotificationSchema = z
  .strictObject({
    content: PaymentFailureNotificationContentSchema.exactOptional().openapi({
      description: 'The details of the payment failure.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('PaymentFailureNotification')

const RefundFundsTransferNotificationContentSchema = z
  .strictObject({
    amount: AmountSchema.openapi({ description: 'The amount to be refunded.' }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({ 'x-addedInVersion': '5', description: 'Invalid fields list.' }),
    merchantReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A value that can be supplied at the discretion of the executing user in order to link multiple transactions to one another.',
      }),
    originalReference: z
      .string()
      .openapi({ description: 'A PSP reference of the original fund transfer.' }),
    status: OperationStatusSchema.exactOptional().openapi({
      description: 'The status of the fund transfer refund.',
    }),
  })
  .openapi({ required: ['originalReference', 'amount'] })
  .openapi('RefundFundsTransferNotificationContent')

const RefundFundsTransferNotificationSchema = z
  .strictObject({
    content: RefundFundsTransferNotificationContentSchema.exactOptional().openapi({
      description: 'Details of the fund transfer refund.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('RefundFundsTransferNotification')

const TransactionSchema = z
  .strictObject({
    amount: AmountSchema.exactOptional().openapi({ description: 'The amount of the transaction.' }),
    bankAccountDetail: BankAccountDetailSchema.exactOptional().openapi({
      description: 'The details of the bank account to where a payout was made.',
    }),
    captureMerchantReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The merchant reference of a related capture.' }),
    capturePspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The psp reference of a related capture.' }),
    creationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date on which the transaction was performed.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'A description of the transaction.' }),
    destinationAccountCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code of the account to which funds were credited during an outgoing fund transfer.',
      }),
    disputePspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The psp reference of the related dispute.' }),
    disputeReasonCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reason code of a dispute.' }),
    merchantReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The merchant reference of a transaction.' }),
    paymentPspReference: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The psp reference of the related authorisation or transfer.',
      }),
    payoutPspReference: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description: 'The psp reference of the related payout.',
      }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The psp reference of a transaction.' }),
    sourceAccountCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code of the account from which funds were debited during an incoming fund transfer.',
      }),
    transactionStatus: z
      .enum([
        'BalanceNotPaidOutTransfer',
        'BalancePlatformFundTransfer',
        'BalancePlatformSweep',
        'BalancePlatformSweepReturned',
        'Chargeback',
        'ChargebackCorrection',
        'ChargebackCorrectionReceived',
        'ChargebackReceived',
        'ChargebackReversed',
        'ChargebackReversedCorrection',
        'ChargebackReversedCorrectionReceived',
        'ChargebackReversedReceived',
        'Converted',
        'CreditClosed',
        'CreditFailed',
        'CreditReversed',
        'CreditReversedReceived',
        'CreditSuspended',
        'Credited',
        'DebitFailed',
        'DebitReversedReceived',
        'Debited',
        'DebitedReversed',
        'DepositCorrectionCredited',
        'DepositCorrectionDebited',
        'DepositCorrectionReceived',
        'Fee',
        'FeeReceived',
        'FundTransfer',
        'FundTransferReversed',
        'InvoiceDeductionCredited',
        'InvoiceDeductionDebited',
        'InvoiceDeductionReceived',
        'ManualCorrected',
        'ManualCorrectionCredited',
        'ManualCorrectionDebited',
        'MerchantPayin',
        'MerchantPayinReceived',
        'MerchantPayinReversed',
        'Payout',
        'PayoutReversed',
        'PendingCredit',
        'PendingDebit',
        'PendingFundTransfer',
        'ReCredited',
        'ReCreditedReceived',
        'SecondChargeback',
        'SecondChargebackCorrection',
        'SecondChargebackCorrectionReceived',
        'SecondChargebackReceived',
      ])
      .exactOptional()
      .openapi({
        description:
          'The status of the transaction.\n>Permitted values: `PendingCredit`, `CreditFailed`, `CreditClosed`, `CreditSuspended`, `Credited`, `Converted`, `PendingDebit`, `DebitFailed`, `Debited`, `DebitReversedReceived`, `DebitedReversed`, `ChargebackReceived`, `Chargeback`, `ChargebackReversedReceived`, `ChargebackReversed`, `Payout`, `PayoutReversed`, `FundTransfer`, `PendingFundTransfer`, `ManualCorrected`.',
      }),
    transferCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The transfer code of the transaction.' }),
  })
  .openapi({ required: [] })
  .openapi('Transaction')

const RefundResultSchema = z
  .strictObject({
    originalTransaction: TransactionSchema.exactOptional().openapi({
      description: 'The transaction that has been refunded.',
    }),
    pspReference: z
      .string()
      .exactOptional()
      .openapi({ description: 'The reference of the refund.' }),
    response: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The response indicating if the refund has been received for processing.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RefundResult')

const ReportAvailableNotificationContentSchema = z
  .strictObject({
    accountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the Account to which the report applies.' }),
    accountType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of Account to which the report applies.' }),
    eventDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date of the event to which the report applies.' }),
    remoteAccessUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL at which the report can be accessed.' }),
    success: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the event resulted in a success.' }),
  })
  .openapi({ required: [] })
  .openapi('ReportAvailableNotificationContent')

const ReportAvailableNotificationSchema = z
  .strictObject({
    content: ReportAvailableNotificationContentSchema.exactOptional().openapi({
      description: 'Details of the report.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('ReportAvailableNotification')

const ScheduledRefundsNotificationContentSchema = z
  .strictObject({
    accountCode: z.string().exactOptional().openapi({ description: 'The code of the account.' }),
    accountHolderCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the Account Holder.' }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({ 'x-addedInVersion': '5', description: 'Invalid fields list.' }),
    lastPayout: TransactionSchema.exactOptional().openapi({
      description:
        'The most recent payout (after which all transactions were scheduled to be refunded).',
    }),
    refundResults: z
      .array(RefundResultSchema)
      .exactOptional()
      .openapi({
        description: 'A list of the refunds that have been scheduled and their results.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ScheduledRefundsNotificationContent')

const ScheduledRefundsNotificationSchema = z
  .strictObject({
    content: ScheduledRefundsNotificationContentSchema.exactOptional().openapi({
      description: 'Details of the scheduling of the refunds.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('ScheduledRefundsNotification')

const TransferFundsNotificationContentSchema = z
  .strictObject({
    amount: AmountSchema.exactOptional().openapi({ description: 'The amount transferred.' }),
    destinationAccountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the Account to which funds were credited.' }),
    invalidFields: z
      .array(ErrorFieldTypeSchema)
      .exactOptional()
      .openapi({ 'x-addedInVersion': '5', description: 'Invalid fields list.' }),
    merchantReference: z
      .string()
      .exactOptional()
      .openapi({ 'x-addedInVersion': '2', description: 'The reference provided by the merchant.' }),
    sourceAccountCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the Account from which funds were debited.' }),
    status: OperationStatusSchema.exactOptional().openapi({
      description: 'The status of the fund transfer.',
    }),
    transferCode: z.string().exactOptional().openapi({ description: 'The transfer code.' }),
  })
  .openapi({ required: [] })
  .openapi('TransferFundsNotificationContent')

const TransferFundsNotificationSchema = z
  .strictObject({
    content: TransferFundsNotificationContentSchema.exactOptional().openapi({
      description: 'Details of the fund transfer.',
    }),
    error: NotificationErrorContainerSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description:
        'Error information of failed request. No value provided here if no error occurred on processing.',
    }),
    eventDate: z.iso
      .datetime({ offset: true })
      .openapi({
        'x-addedInVersion': '4',
        description: 'The date and time when an event has been completed.',
      }),
    eventType: z.string().openapi({ description: 'The event type of the notification.' }),
    executingUserKey: z
      .string()
      .openapi({ description: 'The user or process that has triggered the notification.' }),
    live: z
      .boolean()
      .openapi({
        description:
          'Indicates whether the notification originated from the live environment or the test environment. If true, the notification originated from the live environment. If false, the notification originated from the test environment.',
      }),
    pspReference: z
      .string()
      .openapi({
        description: 'The PSP reference of the request from which the notification originates.',
      }),
  })
  .openapi({ required: ['executingUserKey', 'pspReference', 'eventType', 'live', 'eventDate'] })
  .openapi('TransferFundsNotification')

const PostACCOUNTCLOSEDAccountClosedExample = {
  summary: 'ACCOUNT_CLOSED example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-01T01:00:00+01:00',
    eventType: 'ACCOUNT_CLOSED',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      invalidFields: [
        {
          errorCode: 1,
          errorDescription: 'Field is missing',
          fieldType: {
            field: 'AccountHolderDetails.BusinessDetails.Shareholders.unknown',
            fieldName: 'unknown',
            shareholderCode: 'SH00001',
          },
        },
      ],
      pspReference: 'TSTPSPR0001',
      resultCode: 'Success',
      status: 'Closed',
    },
  },
}

const PostACCOUNTCREATEDAccountCreatedExample = {
  summary: 'ACCOUNT_CREATED example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-01T01:00:00+01:00',
    eventType: 'ACCOUNT_CREATED',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      invalidFields: [
        {
          errorCode: 1,
          errorDescription: 'Field is missing',
          fieldType: {
            field: 'AccountHolderDetails.BusinessDetails.Shareholders.unknown',
            fieldName: 'unknown',
            shareholderCode: 'SH00001',
          },
        },
      ],
      pspReference: 'TSTPSPR0001',
      resultCode: 'Success',
      accountCode: 'AC0000000001',
      accountHolderCode: 'AHC00000001',
      description: 'account description',
      metadata: { MetaKey: 'MetaValue' },
      payoutSchedule: { nextScheduledPayout: '1970-01-02T01:00:00+01:00', schedule: 'DAILY' },
      status: 'Active',
    },
  },
}

const PostACCOUNTFUNDSBELOWTHRESHOLDAccountFundsBelowThresholdExample = {
  summary: 'TRANSFER_FUNDS example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-01T01:00:00+01:00',
    eventType: 'TRANSFER_FUNDS',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      amount: { currency: 'EUR', value: 10 },
      destinationAccountCode: 'AC0000001D',
      invalidFields: [
        {
          errorCode: 1,
          errorDescription: 'Field is missing',
          fieldType: {
            field: 'AccountHolderDetails.BusinessDetails.Shareholders.unknown',
            fieldName: 'unknown',
            shareholderCode: 'SH00001',
          },
        },
      ],
      merchantReference: 'MRef#000001',
      sourceAccountCode: 'AC0000001S',
      status: { message: { code: '100', text: 'test message' }, statusCode: 'Success' },
      transferCode: 'TC0001',
    },
  },
}

const PostACCOUNTHOLDERCREATEDAccountHolderCreatedBusinessesExample = {
  summary: 'ACCOUNT_HOLDER_CREATED for businesses example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-02T01:00:00+01:00',
    eventType: 'ACCOUNT_HOLDER_CREATED',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      invalidFields: [
        {
          errorCode: 1,
          errorDescription: 'Field is missing',
          fieldType: {
            field: 'AccountHolderDetails.BusinessDetails.Shareholders.unknown',
            fieldName: 'unknown',
            shareholderCode: 'SH00001',
          },
        },
      ],
      pspReference: 'TSTPSPR0001',
      resultCode: 'Success',
      accountCode: 'AC0000000001',
      accountHolderCode: 'AHC00000001',
      accountHolderDetails: {
        address: {
          city: 'Amsterdam',
          country: 'NL',
          houseNumberOrName: '96/A',
          postalCode: '1000AA',
          stateOrProvince: 'NH',
          street: 'Street',
        },
        bankAccountDetails: [
          {
            accountNumber: '00000000',
            accountType: 'checking',
            bankAccountName: 'Account name',
            bankAccountReference: 'Ref#000001',
            bankAccountUUID: '00000000-0000-0000-0000-000000000000',
            bankBicSwift: 'BSWFT',
            bankCity: 'Amsterdam',
            bankCode: '00000000',
            bankName: 'Bank Name Co',
            branchCode: '00000000',
            checkCode: '1234',
            countryCode: 'NL',
            currencyCode: 'EUR',
            iban: 'NL00NONE1234123412',
            ownerCity: 'Amsterdam',
            ownerCountryCode: 'NL',
            ownerDateOfBirth: '1981-02-27',
            ownerHouseNumberOrName: '32/B',
            ownerName: 'Owner Name',
            ownerNationality: 'NL',
            ownerPostalCode: '1000AA',
            ownerState: 'NH',
            ownerStreet: 'Owner Street',
            primaryAccount: false,
            taxId: 'OT#12345',
            urlForVerification: 'http://adyen.com',
          },
        ],
        businessDetails: {
          doingBusinessAs: 'Business name',
          legalBusinessName: 'Legal Business Co',
          registrationNumber: 'Reg#1234',
          shareholders: [
            {
              address: {
                city: 'Amsterdam',
                country: 'NL',
                houseNumberOrName: '96/A',
                postalCode: '1000AA',
                stateOrProvince: 'NH',
                street: 'Street',
              },
              email: 'contact@merchant.com',
              fullPhoneNumber: '+3112345678',
              name: { firstName: 'Firstname', infix: 'infix', lastName: 'Lastname' },
              personalData: {
                dateOfBirth: '1981-02-27',
                documentData: [
                  {
                    expirationDate: '2030-12-31',
                    issuerCountry: 'NL',
                    issuerState: 'NH',
                    number: 'ID#123456',
                    type: 'ID',
                  },
                ],
                nationality: 'NL',
              },
              phoneNumber: {
                phoneCountryCode: 'NL',
                phoneNumber: '858888138',
                phoneType: 'Landline',
              },
              shareholderCode: 'SH00001',
              shareholderReference: 'SHREF#0000001',
              webAddress: 'https://www.adyen.com/',
            },
          ],
          taxId: 'TaxID#1234',
        },
        email: 'contact@adyen.com',
        fullPhoneNumber: '+31858888138',
        individualDetails: {
          name: { firstName: 'Firstname', infix: 'infix', lastName: 'Lastname' },
          personalData: {
            dateOfBirth: '1981-02-27',
            documentData: [
              {
                expirationDate: '2030-12-31',
                issuerCountry: 'NL',
                issuerState: 'NH',
                number: 'ID#123456',
                type: 'ID',
              },
            ],
            nationality: 'NL',
          },
        },
        merchantCategoryCode: '1212',
        metadata: { MetaKey: 'MetaValue' },
        payoutInstrumentTokens: [
          {
            merchantAccount: 'MA000001',
            payoutInstrumentTokenCode: 'PIT000001',
            payoutInstrumentTokenType: 'CardToken',
            recurringDetailReference: 'RDR0000001',
            shopperReference: 'SR000001',
          },
        ],
        phoneNumber: { phoneCountryCode: 'NL', phoneNumber: '858888138', phoneType: 'Landline' },
        webAddress: 'https://adyen.com',
      },
      accountHolderStatus: {
        status: 'Active',
        statusReason: 'Reason of status',
        processingState: {
          disabled: true,
          disableReason: 'Reason for disabled status',
          processedFrom: { currency: 'EUR', value: 10 },
          processedTo: { currency: 'EUR', value: 100 },
          tierNumber: 2,
        },
        payoutState: {
          allowPayout: false,
          payoutLimit: { currency: 'EUR', value: 1000 },
          disabled: true,
          disableReason: 'Reason for disabled status',
          tierNumber: 2,
          notAllowedReason: 'Reason of not allowed',
        },
        events: [
          {
            event: 'InactivateAccount',
            executionDate: '2019-01-01T01:00:00+01:00',
            reason: 'Reason of event',
          },
        ],
      },
      description: 'Description for account holder',
      legalEntity: 'Business',
      primaryCurrency: 'EUR',
      verification: {
        accountHolder: {
          checks: [
            {
              type: 'IDENTITY_VERIFICATION',
              status: 'PENDING',
              summary: { kycCheckCode: 100, kycCheckDescription: 'KYC check summary description' },
              requiredFields: ['field.missing'],
            },
          ],
        },
        shareholders: [
          {
            checks: [
              {
                type: 'IDENTITY_VERIFICATION',
                status: 'PENDING',
                summary: {
                  kycCheckCode: 100,
                  kycCheckDescription: 'KYC check summary description',
                },
                requiredFields: ['field.missing'],
              },
            ],
            shareholderCode: 'SH000001',
          },
        ],
        bankAccounts: [
          {
            checks: [
              {
                type: 'IDENTITY_VERIFICATION',
                status: 'PENDING',
                summary: {
                  kycCheckCode: 100,
                  kycCheckDescription: 'KYC check summary description',
                },
                requiredFields: ['field.missing'],
              },
            ],
            bankAccountUUID: '00000000-0000-0000-0000-000000000000',
          },
        ],
      },
    },
  },
}

const PostACCOUNTHOLDERCREATEDAccountHolderCreatedFailedExample = {
  summary: 'ACCOUNT_HOLDER_CREATED failed example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '1970-01-01T01:00:00+01:00',
    eventType: 'ACCOUNT_HOLDER_CREATED',
    executingUserKey: 'executing-user-key',
    live: false,
    mimeType: 'genericNotification',
    pspReference: 'TSTPSPR0001',
    content: {
      accountHolderCode: 'AH000001',
      accountState: {
        allowPayout: false,
        allowProcessing: false,
        disableReason: 'Reason for disabled status',
        disabled: true,
        stateDeadline: '1970-01-01T01:00:00+01:00',
        stateLimit: { amount: 100, currency: 'EUR' },
        stateType: 'Processing',
        tierNumber: 2,
      },
      amount: { currency: 'EUR', value: 10 },
      totalAmountBeforeLimit: { currency: 'EUR', value: 100 },
      transactionDate: '1970-01-01T01:00:00+01:00',
      transactionFailed: false,
    },
  },
}

const PostACCOUNTHOLDERCREATEDAccountHolderCreatedIndividualsExample = {
  summary: 'ACCOUNT_HOLDER_CREATED for individuals example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-01T01:00:00+01:00',
    eventType: 'ACCOUNT_HOLDER_CREATED',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      invalidFields: [
        {
          errorCode: 1,
          errorDescription: 'Field is missing',
          fieldType: {
            field: 'AccountHolderDetails.BusinessDetails.Shareholders.unknown',
            fieldName: 'unknown',
            shareholderCode: 'SH00001',
          },
        },
      ],
      pspReference: 'TSTPSPR0001',
      resultCode: 'Success',
      accountCode: 'AC0000000001',
      accountHolderCode: 'AHC00000001',
      accountHolderDetails: {
        address: {
          city: 'Amsterdam',
          country: 'NL',
          houseNumberOrName: '96/A',
          postalCode: '1000AA',
          stateOrProvince: 'NH',
          street: 'Street',
        },
        bankAccountDetails: [
          {
            accountNumber: '00000000',
            accountType: 'checking',
            bankAccountName: 'Account name',
            bankAccountReference: 'Ref#000001',
            bankAccountUUID: '00000000-0000-0000-0000-000000000000',
            bankBicSwift: 'BSWFT',
            bankCity: 'Amsterdam',
            bankCode: '00000000',
            bankName: 'Bank Name Co',
            branchCode: '00000000',
            checkCode: '1234',
            countryCode: 'NL',
            currencyCode: 'EUR',
            iban: 'NL00NONE1234123412',
            ownerCity: 'Amsterdam',
            ownerCountryCode: 'NL',
            ownerDateOfBirth: '1981-02-27',
            ownerHouseNumberOrName: '32/B',
            ownerName: 'Owner Name',
            ownerNationality: 'NL',
            ownerPostalCode: '1000AA',
            ownerState: 'NH',
            ownerStreet: 'Owner Street',
            primaryAccount: false,
            taxId: 'OT#12345',
            urlForVerification: 'http://adyen.com',
          },
        ],
        email: 'contact@adyen.com',
        fullPhoneNumber: '+31858888138',
        individualDetails: {
          name: { firstName: 'Firstname', infix: 'infix', lastName: 'Lastname' },
          personalData: {
            dateOfBirth: '1981-02-27',
            documentData: [
              {
                expirationDate: '2030-12-31',
                issuerCountry: 'NL',
                issuerState: 'NH',
                number: 'ID#123456',
                type: 'ID',
              },
            ],
            nationality: 'NL',
          },
        },
        merchantCategoryCode: '1212',
        metadata: { MetaKey: 'MetaValue' },
        payoutInstrumentTokens: [
          {
            merchantAccount: 'MA000001',
            payoutInstrumentTokenCode: 'PIT000001',
            payoutInstrumentTokenType: 'CardToken',
            recurringDetailReference: 'RDR0000001',
            shopperReference: 'SR000001',
          },
        ],
        phoneNumber: { phoneCountryCode: 'NL', phoneNumber: '858888138', phoneType: 'Landline' },
        webAddress: 'https://adyen.com',
      },
      accountHolderStatus: {
        status: 'Active',
        statusReason: 'Reason of status',
        processingState: {
          disabled: true,
          disableReason: 'Reason for disabled status',
          processedFrom: { currency: 'EUR', value: 10 },
          processedTo: { currency: 'EUR', value: 100 },
          tierNumber: 2,
        },
        payoutState: {
          allowPayout: false,
          payoutLimit: { currency: 'EUR', value: 1000 },
          disabled: true,
          disableReason: 'Reason for disabled status',
          tierNumber: 2,
          notAllowedReason: 'Reason of not allowed',
        },
        events: [
          {
            event: 'InactivateAccount',
            executionDate: '2019-01-01T01:00:00+01:00',
            reason: 'Reason of event',
          },
        ],
      },
      description: 'Description for account holder',
      legalEntity: 'Individual',
      primaryCurrency: 'EUR',
      verification: {
        accountHolder: {
          checks: [
            {
              type: 'IDENTITY_VERIFICATION',
              status: 'PENDING',
              summary: { kycCheckCode: 100, kycCheckDescription: 'KYC check summary description' },
              requiredFields: ['field.missing'],
            },
          ],
        },
        bankAccounts: [
          {
            checks: [
              {
                type: 'IDENTITY_VERIFICATION',
                status: 'PENDING',
                summary: {
                  kycCheckCode: 100,
                  kycCheckDescription: 'KYC check summary description',
                },
                requiredFields: ['field.missing'],
              },
            ],
            bankAccountUUID: '00000000-0000-0000-0000-000000000000',
          },
        ],
      },
    },
  },
}

const PostACCOUNTHOLDERPAYOUTAccountHolderPayoutFailedExample = {
  summary: 'ACCOUNT_HOLDER_PAYOUT failed example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-01T01:00:00+01:00',
    eventType: 'ACCOUNT_HOLDER_PAYOUT',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      accountCode: 'AC00000001',
      accountHolderCode: 'AH00000001',
      amounts: [{ currency: 'EUR', value: 10 }],
      bankAccountDetail: {
        accountNumber: '00000000',
        accountType: 'checking',
        bankAccountName: 'Account name',
        bankAccountReference: 'Ref#000001',
        bankAccountUUID: '00000000-0000-0000-0000-000000000000',
        bankBicSwift: 'BSWFT',
        bankCity: 'Amsterdam',
        bankCode: '00000000',
        bankName: 'Bank Name Co',
        branchCode: '00000000',
        checkCode: '1234',
        countryCode: 'NL',
        currencyCode: 'EUR',
        iban: 'NL00NONE1234123412',
        ownerCity: 'Amsterdam',
        ownerCountryCode: 'NL',
        ownerDateOfBirth: '1981-02-27',
        ownerHouseNumberOrName: '32/B',
        ownerName: 'Owner Name',
        ownerNationality: 'NL',
        ownerPostalCode: '1000AA',
        ownerState: 'NH',
        ownerStreet: 'Owner Street',
        primaryAccount: false,
        taxId: 'OT#12345',
        urlForVerification: 'http://adyen.com',
      },
      description: 'description of payout',
      invalidFields: [
        {
          errorCode: 1,
          errorDescription: 'Field is missing',
          fieldType: {
            field: 'AccountHolderDetails.BusinessDetails.Shareholders.unknown',
            fieldName: 'unknown',
            shareholderCode: 'SH00001',
          },
        },
      ],
      merchantReference: 'MRef#00000001',
      status: {
        message: {
          code: '10_069',
          text: 'Payout has been failed for account seller1. Details: Payout has been rejected by the beneficiary bank.',
        },
        statusCode: 'Failed',
      },
    },
  },
}

const PostACCOUNTHOLDERPAYOUTAccountHolderPayoutInitiatedExample = {
  summary: 'ACCOUNT_HOLDER_PAYOUT initiated example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-01T01:00:00+01:00',
    eventType: 'ACCOUNT_HOLDER_PAYOUT',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      accountCode: 'AC00000001',
      accountHolderCode: 'AH00000001',
      amounts: [{ currency: 'EUR', value: 10 }],
      bankAccountDetail: {
        accountNumber: '00000000',
        accountType: 'checking',
        bankAccountName: 'Account name',
        bankAccountReference: 'Ref#000001',
        bankAccountUUID: '00000000-0000-0000-0000-000000000000',
        bankBicSwift: 'BSWFT',
        bankCity: 'Amsterdam',
        bankCode: '00000000',
        bankName: 'Bank Name Co',
        branchCode: '00000000',
        checkCode: '1234',
        countryCode: 'NL',
        currencyCode: 'EUR',
        iban: 'NL00NONE1234123412',
        ownerCity: 'Amsterdam',
        ownerCountryCode: 'NL',
        ownerDateOfBirth: '1981-02-27',
        ownerHouseNumberOrName: '32/B',
        ownerName: 'Owner Name',
        ownerNationality: 'NL',
        ownerPostalCode: '1000AA',
        ownerState: 'NH',
        ownerStreet: 'Owner Street',
        primaryAccount: false,
        taxId: 'OT#12345',
        urlForVerification: 'http://adyen.com',
      },
      description: 'description of payout',
      invalidFields: [
        {
          errorCode: 1,
          errorDescription: 'Field is missing',
          fieldType: {
            field: 'AccountHolderDetails.BusinessDetails.Shareholders.unknown',
            fieldName: 'unknown',
            shareholderCode: 'SH00001',
          },
        },
      ],
      merchantReference: 'MRef#00000001',
      status: { message: { code: '100', text: 'test message' }, statusCode: 'Initiated' },
    },
  },
}

const PostACCOUNTHOLDERSTATUSCHANGEAccountHolderStatusChangeExample = {
  summary: 'ACCOUNT_HOLDER_STATUS_CHANGE example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-02T01:00:00+01:00',
    eventType: 'ACCOUNT_HOLDER_STATUS_CHANGE',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      accountHolderCode: 'AH000001',
      oldStatus: {
        status: 'Active',
        statusReason: 'Reason of status',
        processingState: {
          disabled: true,
          disableReason: 'Reason for disabled status',
          processedFrom: { currency: 'EUR', value: 10 },
          processedTo: { currency: 'EUR', value: 100 },
          tierNumber: 2,
        },
        payoutState: {
          allowPayout: false,
          payoutLimit: { currency: 'EUR', value: 1000 },
          disabled: true,
          disableReason: 'Reason for disabled status',
          tierNumber: 2,
          notAllowedReason: 'Reason of not allowed',
        },
        events: [],
      },
      newStatus: {
        status: 'Active',
        statusReason: 'Reason of status',
        processingState: {
          disabled: true,
          disableReason: 'Reason for disabled status',
          processedFrom: { currency: 'EUR', value: 10 },
          processedTo: { currency: 'EUR', value: 100 },
          tierNumber: 2,
        },
        payoutState: {
          allowPayout: false,
          payoutLimit: { currency: 'EUR', value: 1000 },
          disabled: true,
          disableReason: 'Reason for disabled status',
          tierNumber: 2,
          notAllowedReason: 'Reason of not allowed',
        },
        events: [
          {
            AccountEvent: {
              event: 'InactivateAccount',
              executionDate: '2019-01-01T01:00:00+01:00',
              reason: 'Reason of event',
            },
          },
        ],
      },
      reason: 'status change reason',
      invalidFields: [
        {
          errorCode: 1,
          errorDescription: 'Field is missing',
          fieldType: {
            field: 'AccountHolderDetails.BusinessDetails.Shareholders.unknown',
            fieldName: 'unknown',
            shareholderCode: 'SH00001',
          },
        },
      ],
    },
  },
}

const PostACCOUNTHOLDERSTORESTATUSCHANGEAccountHolderStoreStatusChangeExample = {
  summary: 'ACCOUNT_HOLDER_STORE_STATUS_CHANGE example',
  value: {
    eventDate: '2019-12-16T10:38:15+01:00',
    eventType: 'ACCOUNT_HOLDER_STORE_STATUS_CHANGE',
    executingUserKey: 'Store Status Update',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      accountHolderCode: 'AH000001',
      store: 'x00x00x00-xx00-0xx0-x000-00xx00xx000000',
      storeReference: 'Ref#000001',
      oldStatus: 'Pending',
      newStatus: 'Active',
      reason: 'Store was successfully set up',
    },
  },
}

const PostACCOUNTHOLDERUPCOMINGDEADLINEAccountHolderUpcomingDeadlineExample = {
  summary: 'ACCOUNT_HOLDER_UPCOMING_DEADLINE example',
  value: {
    eventDate: '2019-09-25T09:52:28+02:00',
    eventType: 'ACCOUNT_HOLDER_UPCOMING_DEADLINE',
    live: false,
    pspReference: '9315693979482563',
    content: {
      accountHolderCode: 'testD47',
      event: 'InactivateAccount',
      executionDate: '2019-10-11',
      reason: 'Processed more than GBP 5000.00 or equivalent, deadline triggered',
    },
  },
}

const PostACCOUNTHOLDERUPDATEDAccountHolderUpdatedExample = {
  summary: 'ACCOUNT CLOSED example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-01T01:00:00+01:00',
    eventType: 'ACCOUNT_CLOSED',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      invalidFields: [
        {
          errorCode: 1,
          errorDescription: 'Field is missing',
          fieldType: {
            field: 'AccountHolderDetails.BusinessDetails.Shareholders.unknown',
            fieldName: 'unknown',
            shareholderCode: 'SH00001',
          },
        },
      ],
      pspReference: 'TSTPSPR0001',
      resultCode: 'Success',
      status: 'Closed',
    },
  },
}

const PostACCOUNTHOLDERVERIFICATIONAccountHolderVerificationExample = {
  summary: 'ACCOUNT_HOLDER_VERIFICATION example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-01T01:00:00+01:00',
    eventType: 'ACCOUNT_HOLDER_VERIFICATION',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      accountHolderCode: 'AH0000001',
      payoutMethodCode: '00000000-0000-0000-0000-000000000000',
      kycCheckStatusData: {
        type: 'IDENTITY_VERIFICATION',
        status: 'PENDING',
        summary: { kycCheckCode: 100, kycCheckDescription: 'KYC check summary description' },
        requiredFields: ['field.missing'],
      },
      shareholderCode: 'SH00000001',
    },
  },
}

const PostACCOUNTUPDATEDAccountUpdatedExample = {
  summary: 'ACCOUNT_UPDATED example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-01T01:00:00+01:00',
    eventType: 'ACCOUNT_UPDATED',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      invalidFields: [
        {
          errorCode: 1,
          errorDescription: 'Field is missing',
          fieldType: {
            field: 'AccountHolderDetails.BusinessDetails.Shareholders.unknown',
            fieldName: 'unknown',
            shareholderCode: 'SH00001',
          },
        },
      ],
      pspReference: 'TSTPSPR0001',
      resultCode: 'Success',
      accountCode: 'AC0000000001',
      description: 'account description',
      metadata: { MetaKey: 'MetaValue' },
      payoutSchedule: { nextScheduledPayout: '1970-01-02T01:00:00+01:00', schedule: 'DAILY' },
    },
  },
}

const PostBENEFICIARYSETUPBeneficiarySetupExample = {
  summary: 'BENEFICIARY_SETUP example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-01T01:00:00+01:00',
    eventType: 'BENEFICIARY_SETUP',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      destinationAccountCode: 'AC00000001D',
      destinationAccountHolderCode: 'AH00000001D',
      invalidFields: [
        {
          errorCode: 1,
          errorDescription: 'Field is missing',
          fieldType: {
            field: 'AccountHolderDetails.BusinessDetails.Shareholders.unknown',
            fieldName: 'unknown',
            shareholderCode: 'SH00001',
          },
        },
      ],
      merchantReference: 'MRef#000000001',
      sourceAccountCode: 'AC0000001S',
      sourceAccountHolderCode: 'AH000000001S',
      transferDate: '1970-01-01T01:00:00+01:00',
    },
  },
}

const PostCOMPENSATENEGATIVEBALANCECompensateNegativeBalanceExample = {
  summary: 'COMPENSATE_NEGATIVE_BALANCE example',
  value: {
    eventType: 'COMPENSATE_NEGATIVE_BALANCE',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      records: [
        {
          accountCode: 'AC000001',
          amount: { currency: 'EUR', value: 10 },
          transferDate: '1970-01-01T01:00:00+01:00',
        },
      ],
    },
  },
}

const PostDIRECTDEBITINITIATEDDirectDebitInitiatedExample = {
  summary: 'DIRECT_DEBIT_INITIATED example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-01T01:00:00+01:00',
    eventType: 'TRANSFER_FUNDS',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      amount: { currency: 'EUR', value: 10 },
      destinationAccountCode: 'AC0000001D',
      invalidFields: [
        {
          errorCode: 1,
          errorDescription: 'Field is missing',
          fieldType: {
            field: 'AccountHolderDetails.BusinessDetails.Shareholders.unknown',
            fieldName: 'unknown',
            shareholderCode: 'SH00001',
          },
        },
      ],
      merchantReference: 'MRef#000001',
      sourceAccountCode: 'AC0000001S',
      status: { message: { code: '100', text: 'test message' }, statusCode: 'Success' },
      transferCode: 'TC0001',
    },
  },
}

const PostPAYMENTFAILUREPaymentFailureExample = {
  summary: 'TRANSFER_FUNDS example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-01T01:00:00+01:00',
    eventType: 'TRANSFER_FUNDS',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      amount: { currency: 'EUR', value: 10 },
      destinationAccountCode: 'AC0000001D',
      invalidFields: [
        {
          errorCode: 1,
          errorDescription: 'Field is missing',
          fieldType: {
            field: 'AccountHolderDetails.BusinessDetails.Shareholders.unknown',
            fieldName: 'unknown',
            shareholderCode: 'SH00001',
          },
        },
      ],
      merchantReference: 'MRef#000001',
      sourceAccountCode: 'AC0000001S',
      status: { message: { code: '100', text: 'test message' }, statusCode: 'Success' },
      transferCode: 'TC0001',
    },
  },
}

const PostREFUNDFUNDSTRANSFERRefundFundsTransferExample = {
  summary: 'TRANSFER_FUNDS example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-01T01:00:00+01:00',
    eventType: 'TRANSFER_FUNDS',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      amount: { currency: 'EUR', value: 10 },
      destinationAccountCode: 'AC0000001D',
      invalidFields: [
        {
          errorCode: 1,
          errorDescription: 'Field is missing',
          fieldType: {
            field: 'AccountHolderDetails.BusinessDetails.Shareholders.unknown',
            fieldName: 'unknown',
            shareholderCode: 'SH00001',
          },
        },
      ],
      merchantReference: 'MRef#000001',
      sourceAccountCode: 'AC0000001S',
      status: { message: { code: '100', text: 'test message' }, statusCode: 'Success' },
      transferCode: 'TC0001',
    },
  },
}

const PostREPORTAVAILABLEReportAvailableExample = {
  summary: 'TRANSFER_FUNDS example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-01T01:00:00+01:00',
    eventType: 'TRANSFER_FUNDS',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      amount: { currency: 'EUR', value: 10 },
      destinationAccountCode: 'AC0000001D',
      invalidFields: [
        {
          errorCode: 1,
          errorDescription: 'Field is missing',
          fieldType: {
            field: 'AccountHolderDetails.BusinessDetails.Shareholders.unknown',
            fieldName: 'unknown',
            shareholderCode: 'SH00001',
          },
        },
      ],
      merchantReference: 'MRef#000001',
      sourceAccountCode: 'AC0000001S',
      status: { message: { code: '100', text: 'test message' }, statusCode: 'Success' },
      transferCode: 'TC0001',
    },
  },
}

const PostSCHEDULEDREFUNDSScheduledRefundsExample = {
  summary: 'SCHEDULED_REFUNDS example',
  value: {
    eventType: 'SCHEDULED_REFUNDS',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      accountCode: 'AC000001',
      accountHolderCode: 'AH000001',
      lastPayout: {
        amount: { currency: 'EUR', value: 10 },
        bankAccountDetail: {
          accountNumber: '00000000',
          accountType: 'checking',
          bankAccountName: 'Account name',
          bankAccountUUID: '00000000-0000-0000-0000-000000000000',
          bankBicSwift: 'BSWFT',
          bankCity: 'Amsterdam',
          bankCode: '00000000',
          bankName: 'Bank Name Co',
          branchCode: '00000000',
          checkCode: '1234',
          countryCode: 'NL',
          currencyCode: 'EUR',
          iban: 'NL00NONE1234123412',
          ownerCity: 'Amsterdam',
          ownerCountryCode: 'NL',
          ownerDateOfBirth: '1981-02-27',
          ownerHouseNumberOrName: '32/B',
          ownerName: 'Owner Name',
          ownerNationality: 'NL',
          ownerPostalCode: '1000AA',
          ownerState: 'NH',
          ownerStreet: 'Owner Street',
          primaryAccount: false,
          taxId: 'OT#12345',
          urlForVerification: 'http://adyen.com',
        },
        captureMerchantReference: 'MRef0000001C',
        capturePspReference: 'TSTPSPR00000001C',
        creationDate: '1970-01-01T01:00:00+01:00',
        description: 'transaction description',
        destinationAccountCode: 'AC0000001D',
        disputePspReference: 'TSTPSPR00000000D',
        disputeReasonCode: 'DRC001',
        merchantReference: 'MRef#00000001',
        paymentPspReference: 'TSTPSPR0000000PO',
        payoutPspReference: 'TSTPSPR000000PI',
        pspReference: 'TSTPSPR000000001',
        sourceAccountCode: 'AC00000001S',
        transactionStatus: 'Debited',
        transferCode: 'TC0001',
      },
      refundResults: [
        {
          originalTransaction: {
            amount: { currency: 'EUR', value: 10 },
            bankAccountDetail: {
              accountNumber: '00000000',
              accountType: 'checking',
              bankAccountName: 'Account name',
              bankAccountUUID: '00000000-0000-0000-0000-000000000000',
              bankBicSwift: 'BSWFT',
              bankCity: 'Amsterdam',
              bankCode: '00000000',
              bankName: 'Bank Name Co',
              branchCode: '00000000',
              checkCode: '1234',
              countryCode: 'NL',
              currencyCode: 'EUR',
              iban: 'NL00NONE1234123412',
              ownerCity: 'Amsterdam',
              ownerCountryCode: 'NL',
              ownerDateOfBirth: '1981-02-27',
              ownerHouseNumberOrName: '32/B',
              ownerName: 'Owner Name',
              ownerNationality: 'NL',
              ownerPostalCode: '1000AA',
              ownerState: 'NH',
              ownerStreet: 'Owner Street',
              primaryAccount: false,
              taxId: 'OT#12345',
              urlForVerification: 'http://adyen.com',
            },
            captureMerchantReference: 'MRef0000001C',
            capturePspReference: 'TSTPSPR00000001C',
            creationDate: '1970-01-01T01:00:00+01:00',
            description: 'transaction description',
            destinationAccountCode: 'AC0000001D',
            disputePspReference: 'TSTPSPR00000000D',
            disputeReasonCode: 'DRC001',
            merchantReference: 'MRef#00000001',
            paymentPspReference: 'TSTPSPR0000000PO',
            payoutPspReference: 'TSTPSPR000000PI',
            pspReference: 'TSTPSPR000000001',
            sourceAccountCode: 'AC00000001S',
            transactionStatus: 'Debited',
            transferCode: 'TC0001',
          },
          pspReference: 'TSTPSPR00000001',
          response: 'response',
        },
      ],
    },
  },
}

const PostTRANSFERFUNDSTransferFundsExample = {
  summary: 'TRANSFER_FUNDS example',
  value: {
    error: { errorCode: '000', message: 'test error message' },
    eventDate: '2019-01-01T01:00:00+01:00',
    eventType: 'TRANSFER_FUNDS',
    executingUserKey: 'executing-user-key',
    live: false,
    pspReference: 'TSTPSPR0001',
    content: {
      amount: { currency: 'EUR', value: 10 },
      destinationAccountCode: 'AC0000001D',
      invalidFields: [
        {
          errorCode: 1,
          errorDescription: 'Field is missing',
          fieldType: {
            field: 'AccountHolderDetails.BusinessDetails.Shareholders.unknown',
            fieldName: 'unknown',
            shareholderCode: 'SH00001',
          },
        },
      ],
      merchantReference: 'MRef#000001',
      sourceAccountCode: 'AC0000001S',
      status: { message: { code: '100', text: 'test message' }, statusCode: 'Success' },
      transferCode: 'TC0001',
    },
  },
}

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const aCCOUNTCLOSEDPostWebhook = {
  method: 'post',
  path: '//ACCOUNT_CLOSED',
  tags: ['Accounts'],
  summary: 'Account closed',
  description:
    'Adyen sends this webhook when [an account is closed](https://docs.adyen.com/api-explorer/#/Account/latest/post/closeAccount).',
  operationId: 'post-ACCOUNT_CLOSED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountCloseNotificationSchema,
          examples: { accountClosed: PostACCOUNTCLOSEDAccountClosedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const aCCOUNTCREATEDPostWebhook = {
  method: 'post',
  path: '//ACCOUNT_CREATED',
  tags: ['Accounts'],
  summary: 'Account created',
  description:
    'Adyen sends this webhook when [an account is created](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccount).',
  operationId: 'post-ACCOUNT_CREATED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountCreateNotificationSchema,
          examples: { accountCreated: PostACCOUNTCREATEDAccountCreatedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const aCCOUNTFUNDSBELOWTHRESHOLDPostWebhook = {
  method: 'post',
  path: '//ACCOUNT_FUNDS_BELOW_THRESHOLD',
  tags: ['Fund management'],
  summary: "Liable account's funds are below configured threshold",
  description:
    'Adyen sends this notification when the current funds of your liable account are below the configured threshold.',
  operationId: 'post-ACCOUNT_FUNDS_BELOW_THRESHOLD',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountFundsBelowThresholdNotificationSchema,
          examples: {
            accountFundsBelowThreshold:
              PostACCOUNTFUNDSBELOWTHRESHOLDAccountFundsBelowThresholdExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const aCCOUNTHOLDERCREATEDPostWebhook = {
  method: 'post',
  path: '//ACCOUNT_HOLDER_CREATED',
  tags: ['Account holders'],
  summary: 'Account holder created',
  description:
    'Adyen sends this webhook when [an account holder is created](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder).',
  operationId: 'post-ACCOUNT_HOLDER_CREATED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountHolderCreateNotificationSchema,
          examples: {
            'accountHolderCreated-businesses':
              PostACCOUNTHOLDERCREATEDAccountHolderCreatedBusinessesExample,
            'accountHolderCreated-failed':
              PostACCOUNTHOLDERCREATEDAccountHolderCreatedFailedExample,
            'accountHolderCreated-individuals':
              PostACCOUNTHOLDERCREATEDAccountHolderCreatedIndividualsExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const aCCOUNTHOLDERPAYOUTPostWebhook = {
  method: 'post',
  path: '//ACCOUNT_HOLDER_PAYOUT',
  tags: ['Fund management'],
  summary: 'Paid out to account holder',
  description:
    'Adyen sends this notification when a [payout request](https://docs.adyen.com/api-explorer/#/Fund/latest/post/payoutAccountHolder) to an account holder is processed and the payout is scheduled.',
  operationId: 'post-ACCOUNT_HOLDER_PAYOUT',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountHolderPayoutNotificationSchema,
          examples: {
            'accountHolderPayout-failed': PostACCOUNTHOLDERPAYOUTAccountHolderPayoutFailedExample,
            'accountHolderPayout-initiated':
              PostACCOUNTHOLDERPAYOUTAccountHolderPayoutInitiatedExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const aCCOUNTHOLDERSTATUSCHANGEPostWebhook = {
  method: 'post',
  path: '//ACCOUNT_HOLDER_STATUS_CHANGE',
  tags: ['Account holders'],
  summary: 'Account holder status changed',
  description:
    'Adyen sends this webhook when [the status of an account holder is changed](https://docs.adyen.com/api-explorer/#/Account/latest/post/updateAccountHolderState).',
  operationId: 'post-ACCOUNT_HOLDER_STATUS_CHANGE',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountHolderStatusChangeNotificationSchema,
          examples: {
            accountHolderStatusChange:
              PostACCOUNTHOLDERSTATUSCHANGEAccountHolderStatusChangeExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const aCCOUNTHOLDERSTORESTATUSCHANGEPostWebhook = {
  method: 'post',
  path: '//ACCOUNT_HOLDER_STORE_STATUS_CHANGE',
  tags: ['Account holders'],
  summary: 'Store status changed',
  description:
    'Adyen sends this webhook when [the status of a store](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__reqParam_accountHolderDetails-storeDetails-status) associated with an account holder is changed.',
  operationId: 'post-ACCOUNT_HOLDER_STORE_STATUS_CHANGE',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountHolderStoreStatusChangeNotificationSchema,
          examples: {
            accountHolderStoreStatusChange:
              PostACCOUNTHOLDERSTORESTATUSCHANGEAccountHolderStoreStatusChangeExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const aCCOUNTHOLDERUPCOMINGDEADLINEPostWebhook = {
  method: 'post',
  path: '//ACCOUNT_HOLDER_UPCOMING_DEADLINE',
  tags: ['Account holders'],
  summary: 'Upcoming deadline',
  description:
    "Adyen sends this notification when an account holder's deadline to fulfill the requirements of a specific event is coming up.",
  operationId: 'post-ACCOUNT_HOLDER_UPCOMING_DEADLINE',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountHolderUpcomingDeadlineNotificationSchema,
          examples: {
            accountHolderUpcomingDeadline:
              PostACCOUNTHOLDERUPCOMINGDEADLINEAccountHolderUpcomingDeadlineExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const aCCOUNTHOLDERUPDATEDPostWebhook = {
  method: 'post',
  path: '//ACCOUNT_HOLDER_UPDATED',
  tags: ['Account holders'],
  summary: 'Account holder updated',
  description:
    'Adyen sends this webhook when [an account holder is updated](https://docs.adyen.com/api-explorer/#/Account/latest/post/updateAccountHolder).',
  operationId: 'post-ACCOUNT_HOLDER_UPDATED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountHolderUpdateNotificationSchema,
          examples: { accountHolderUpdated: PostACCOUNTHOLDERUPDATEDAccountHolderUpdatedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const aCCOUNTHOLDERVERIFICATIONPostWebhook = {
  method: 'post',
  path: '//ACCOUNT_HOLDER_VERIFICATION',
  tags: ['Account holders'],
  summary: 'Verification results received',
  description: 'Adyen sends this webhook when verification results are available.',
  operationId: 'post-ACCOUNT_HOLDER_VERIFICATION',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountHolderVerificationNotificationSchema,
          examples: {
            accountHolderVerification:
              PostACCOUNTHOLDERVERIFICATIONAccountHolderVerificationExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const aCCOUNTUPDATEDPostWebhook = {
  method: 'post',
  path: '//ACCOUNT_UPDATED',
  tags: ['Accounts'],
  summary: 'Account updated',
  description:
    'Adyen sends this webhook when [an account is updated](https://docs.adyen.com/api-explorer/#/Account/latest/post/updateAccount).',
  operationId: 'post-ACCOUNT_UPDATED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AccountUpdateNotificationSchema,
          examples: { accountUpdated: PostACCOUNTUPDATEDAccountUpdatedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const bENEFICIARYSETUPPostWebhook = {
  method: 'post',
  path: '//BENEFICIARY_SETUP',
  tags: ['Fund management'],
  summary: 'Beneficiary defined',
  description:
    'Adyen sends this notification when a [benefactor/beneficiary relationship is created](https://docs.adyen.com/api-explorer/#/Fund/latest/post/transferFunds).',
  operationId: 'post-BENEFICIARY_SETUP',
  request: {
    body: {
      content: {
        'application/json': {
          schema: BeneficiarySetupNotificationSchema,
          examples: { beneficiarySetup: PostBENEFICIARYSETUPBeneficiarySetupExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const cOMPENSATENEGATIVEBALANCEPostWebhook = {
  method: 'post',
  path: '//COMPENSATE_NEGATIVE_BALANCE',
  tags: ['Fund management'],
  summary: 'Negative account balances compensated',
  description:
    "Adyen sends this notification when funds are transferred from your platform's liable account to an overdrawn account to compensate for the overdraft.",
  operationId: 'post-COMPENSATE_NEGATIVE_BALANCE',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CompensateNegativeBalanceNotificationSchema,
          examples: {
            compensateNegativeBalance:
              PostCOMPENSATENEGATIVEBALANCECompensateNegativeBalanceExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const dIRECTDEBITINITIATEDPostWebhook = {
  method: 'post',
  path: '//DIRECT_DEBIT_INITIATED',
  tags: ['Fund management'],
  summary: 'Automated direct debit initiated',
  description:
    'Adyen sends this notification when a [direct debit is initiated](https://docs.adyen.com/api-explorer/#/Fund/latest/post/debitAccountHolder).',
  operationId: 'post-DIRECT_DEBIT_INITIATED',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DirectDebitInitiatedNotificationSchema,
          examples: { directDebitInitiated: PostDIRECTDEBITINITIATEDDirectDebitInitiatedExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const pAYMENTFAILUREPostWebhook = {
  method: 'post',
  path: '//PAYMENT_FAILURE',
  tags: ['Other'],
  summary: 'Booking for a capture or refund failed',
  description:
    "Adyen sends this notification when a [split payment](https://docs.adyen.com/classic-platforms/processing-payments#providing-split-information) booking for a capture or refund fails. When a booking fails due to an invalid account status or an unknown `accountCode`, the funds are credited or debited to or fromyour platform's liable account instead of the account specified in the split data.",
  operationId: 'post-PAYMENT_FAILURE',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PaymentFailureNotificationSchema,
          examples: { paymentFailure: PostPAYMENTFAILUREPaymentFailureExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const rEFUNDFUNDSTRANSFERPostWebhook = {
  method: 'post',
  path: '//REFUND_FUNDS_TRANSFER',
  tags: ['Fund management'],
  summary: 'Funds transfer between accounts refunded',
  description:
    'Adyen sends this notification when [funds transferred between accounts are refunded](https://docs.adyen.com/api-explorer/#/Fund/v6/latest/refundFundsTransfer).',
  operationId: 'post-REFUND_FUNDS_TRANSFER',
  request: {
    body: {
      content: {
        'application/json': {
          schema: RefundFundsTransferNotificationSchema,
          examples: { refundFundsTransfer: PostREFUNDFUNDSTRANSFERRefundFundsTransferExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const rEPORTAVAILABLEPostWebhook = {
  method: 'post',
  path: '//REPORT_AVAILABLE',
  tags: ['Other'],
  summary: 'Report available',
  description:
    'Adyen sends this notification when a report has been generated and it is available for download.',
  operationId: 'post-REPORT_AVAILABLE',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ReportAvailableNotificationSchema,
          examples: { reportAvailable: PostREPORTAVAILABLEReportAvailableExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const sCHEDULEDREFUNDSPostWebhook = {
  method: 'post',
  path: '//SCHEDULED_REFUNDS',
  tags: ['Fund management'],
  summary: "'Refund Transfers Not Paid Out' call processed and refunds scheduled",
  description:
    'Adyen sends this notification when a request to [refund transfers that are not yet paid out](https://docs.adyen.com/api-explorer/#/Fund/latest/refundNotPaidOutTransfers) is processed and the associated refunds are scheduled.',
  operationId: 'post-SCHEDULED_REFUNDS',
  request: {
    body: {
      content: {
        'application/json': {
          schema: ScheduledRefundsNotificationSchema,
          examples: { scheduledRefunds: PostSCHEDULEDREFUNDSScheduledRefundsExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}

export const tRANSFERFUNDSPostWebhook = {
  method: 'post',
  path: '//TRANSFER_FUNDS',
  tags: ['Fund management'],
  summary: 'Funds transferred between accounts',
  description:
    'Adyen sends this notification when [funds are transferred between accounts](https://docs.adyen.com/api-explorer/#/Fund/latest/post/transferFunds).',
  operationId: 'post-TRANSFER_FUNDS',
  request: {
    body: {
      content: {
        'application/json': {
          schema: TransferFundsNotificationSchema,
          examples: { transferFunds: PostTRANSFERFUNDSTransferFundsExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: NotificationResponseSchema } },
    },
  },
  security: [{ BasicAuth: [] }],
}
