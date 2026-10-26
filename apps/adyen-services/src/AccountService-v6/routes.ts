import { createRoute, z } from '@hono/zod-openapi'

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

const AccountSchema = z
  .strictObject({
    accountCode: z.string().exactOptional().openapi({ description: 'The code of the account.' }),
    bankAccountUUID: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.',
      }),
    beneficiaryAccount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The beneficiary of the account.' }),
    beneficiaryMerchantReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason that a beneficiary has been set up for this account. This may have been supplied during the setup of a beneficiary at the discretion of the executing user.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ 'x-addedInVersion': '4', description: 'A description of the account.' }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'A set of key and value pairs for general use by the merchant.\nThe keys do not have specific names and may be used for storing miscellaneous data as desired.\n> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.',
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
      description: "The account's payout schedule.",
    }),
    payoutSpeed: z
      .enum(['INSTANT', 'SAME_DAY', 'STANDARD'])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.',
      }),
    status: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '4',
        description:
          'The status of the account. Possible values: `Active`, `Inactive`, `Suspended`, `Closed`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Account')

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

const LegalArrangementDetailSchema = z
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

const AccountHolderDetailsSchema = z
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

const CloseAccountHolderRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({ description: 'The code of the Account Holder to be closed.' }),
  })
  .openapi({ required: ['accountHolderCode'] })
  .openapi('CloseAccountHolderRequest')

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

const CloseAccountHolderResponseSchema = z
  .strictObject({
    accountHolderStatus: AccountHolderStatusSchema.exactOptional().openapi({
      description: 'The new status of the Account Holder.',
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
  })
  .openapi({ required: [] })
  .openapi('CloseAccountHolderResponse')

const CloseAccountRequestSchema = z
  .strictObject({
    accountCode: z.string().openapi({ description: 'The code of account to be closed.' }),
  })
  .openapi({ required: ['accountCode'] })
  .openapi('CloseAccountRequest')

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

const CloseStoresRequestSchema = z
  .strictObject({
    accountHolderCode: z.string().openapi({ description: 'The code of the account holder.' }),
    stores: z.array(z.string()).openapi({ description: 'List of stores to be closed.' }),
  })
  .openapi({ required: ['accountHolderCode', 'stores'] })
  .openapi('CloseStoresRequest')

const CreateAccountHolderRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({
        description:
          'Your unique identifier for the prospective account holder.\nThe length must be between three (3) and fifty (50) characters long. Only letters, digits, and hyphens (-) are allowed.',
      }),
    accountHolderDetails: AccountHolderDetailsSchema.openapi({
      description: 'The details of the prospective account holder.',
    }),
    createDefaultAccount: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If set to **true**, an account with the default options is automatically created for the account holder.\nBy default, this field is set to **true**.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '4',
        description:
          'A description of the prospective account holder, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.',
      }),
    legalEntity: z
      .enum(['Business', 'Individual', 'NonProfit', 'Partnership', 'PublicCompany'])
      .openapi({
        description:
          'The legal entity type of the account holder. This determines the information that should be provided in the request.\n\nPossible values: **Business**, **Individual**, or **NonProfit**.\n\n* If set to **Business** or **NonProfit**, then `accountHolderDetails.businessDetails` must be provided, with at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.\n\n* If set to **Individual**, then `accountHolderDetails.individualDetails` must be provided.',
      }),
    primaryCurrency: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '4',
        deprecated: true,
        description:
          'The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), with which the prospective account holder primarily deals.',
      }),
    processingTier: z
      .int32()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description:
          'The starting [processing tier](https://docs.adyen.com/classic-platforms/onboarding-and-verification/precheck-kyc-information) for the prospective account holder.',
      }),
    verificationProfile: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The identifier of the profile that applies to this entity.',
      }),
  })
  .openapi({ required: ['accountHolderCode', 'legalEntity', 'accountHolderDetails'] })
  .openapi('CreateAccountHolderRequest')

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

const CreateAccountHolderResponseSchema = z
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

const CreateAccountRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({ description: 'The code of Account Holder under which to create the account.' }),
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
      .openapi({
        'x-addedInVersion': '4',
        description:
          'A description of the account, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.',
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'A set of key and value pairs for general use by the merchant.\nThe keys do not have specific names and may be used for storing miscellaneous data as desired.\n> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.',
      }),
    payoutMethodCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.',
      }),
    payoutSchedule: z
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
    payoutScheduleReason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the payout schedule choice.\n> This field is required when the `payoutSchedule` parameter is set to `HOLD`.',
      }),
    payoutSpeed: z
      .enum(['INSTANT', 'SAME_DAY', 'STANDARD'])
      .default('STANDARD')
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Speed at which payouts for this account are processed.\n\nPossible values: `STANDARD` (default), `SAME_DAY`.',
      }),
  })
  .openapi({ required: ['accountHolderCode'] })
  .openapi('CreateAccountRequest')

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

const DeleteBankAccountRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({
        description: 'The code of the Account Holder from which to delete the Bank Account(s).',
      }),
    bankAccountUUIDs: z
      .array(z.string())
      .openapi({ description: 'The code(s) of the Bank Accounts to be deleted.' }),
  })
  .openapi({ required: ['accountHolderCode', 'bankAccountUUIDs'] })
  .openapi('DeleteBankAccountRequest')

const LegalArrangementRequestSchema = z
  .strictObject({
    legalArrangementCode: z
      .string()
      .openapi({
        description:
          'The code of the legal arrangement to be deleted. If you also send `legalArrangementEntityCodes`, only the entities listed will be deleted.',
      }),
    legalArrangementEntityCodes: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of legal arrangement entities to be deleted.' }),
  })
  .openapi({ required: ['legalArrangementCode'] })
  .openapi('LegalArrangementRequest')

const DeleteLegalArrangementRequestSchema = z
  .strictObject({
    accountHolderCode: z.string().openapi({ description: 'The code of the account holder.' }),
    legalArrangements: z
      .array(LegalArrangementRequestSchema)
      .openapi({ description: 'List of legal arrangements.' }),
  })
  .openapi({ required: ['accountHolderCode', 'legalArrangements'] })
  .openapi('DeleteLegalArrangementRequest')

const DeletePayoutMethodRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({
        description: 'The code of the account holder, from which to delete the payout methods.',
      }),
    payoutMethodCodes: z
      .array(z.string())
      .openapi({ description: 'The codes of the payout methods to be deleted.' }),
  })
  .openapi({ required: ['accountHolderCode', 'payoutMethodCodes'] })
  .openapi('DeletePayoutMethodRequest')

const DeleteShareholderRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({
        description: 'The code of the Account Holder from which to delete the Shareholders.',
      }),
    shareholderCodes: z
      .array(z.string())
      .openapi({ description: 'The code(s) of the Shareholders to be deleted.' }),
  })
  .openapi({ required: ['accountHolderCode', 'shareholderCodes'] })
  .openapi('DeleteShareholderRequest')

const DeleteSignatoriesRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({
        description: 'The code of the account holder from which to delete the signatories.',
      }),
    signatoryCodes: z
      .array(z.string())
      .openapi({ description: 'Array of codes of the signatories to be deleted.' }),
  })
  .openapi({ required: ['accountHolderCode', 'signatoryCodes'] })
  .openapi('DeleteSignatoriesRequest')

const DocumentDetailSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '2',
        description: 'The code of account holder, to which the document applies.',
      }),
    bankAccountUUID: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '2',
        description:
          'The Adyen-generated [`bankAccountUUID`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-bankAccountDetails-bankAccountUUID) to which the document must be linked. Refer to [Bank account check](https://docs.adyen.com/classic-platforms/verification-checks/bank-account-check#uploading-a-bank-statement) for details on when a document should be submitted.\n>Required if the `documentType` is **BANK_STATEMENT**, where a document is being submitted in order to verify a bank account.\n',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Description of the document.' }),
    documentType: z
      .enum([
        'BANK_STATEMENT',
        'BSN',
        'COMPANY_REGISTRATION_SCREENING',
        'CONSTITUTIONAL_DOCUMENT',
        'DRIVING_LICENCE',
        'DRIVING_LICENCE_BACK',
        'DRIVING_LICENCE_FRONT',
        'ID_CARD',
        'ID_CARD_BACK',
        'ID_CARD_FRONT',
        'PASSPORT',
        'PROOF_OF_RESIDENCY',
        'SSN',
        'SUPPORTING_DOCUMENTS',
      ])
      .openapi({
        description:
          "The type of the document. Refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks) for details on when each document type should be submitted and for the accepted file formats.\n\nPermitted values:\n* **BANK_STATEMENT**: A file containing a bank statement or other document proving ownership of a specific bank account.\n* **COMPANY_REGISTRATION_SCREENING** (Supported from v5 and later): A file containing a company registration document.\n* **CONSTITUTIONAL_DOCUMENT**: A file containing information about the account holder's legal arrangement.\n* **PASSPORT**: A file containing the identity page(s) of a passport.\n* **ID_CARD_FRONT**: A file containing only the front of the ID card. In order for a document to be usable, both the **ID_CARD_FRONT** and **ID_CARD_BACK** must be submitted.\n* **ID_CARD_BACK**: A file containing only the back of the ID card. In order for a document to be usable, both the **ID_CARD_FRONT** and **ID_CARD_BACK** must be submitted.\n* **DRIVING_LICENCE_FRONT**: A file containing only the front of the driving licence. In order for a document to be usable, both the **DRIVING_LICENCE_FRONT** and **DRIVING_LICENCE_BACK** must be submitted.\n* **DRIVING_LICENCE_BACK**: A file containing only the back of the driving licence. In order for a document to be usable, both the **DRIVING_LICENCE_FRONT** and **DRIVING_LICENCE_FRONT** must be submitted.\n",
      }),
    filename: z.string().exactOptional().openapi({ description: 'Filename of the document.' }),
    legalArrangementCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description:
          'The Adyen-generated [`legalArrangementCode`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-legalArrangements-legalArrangementCode) to which the document must be linked.',
      }),
    legalArrangementEntityCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description:
          'The Adyen-generated [`legalArrangementEntityCode`](https://docs.adyen.com/api-explorer/#/Account/v6/post/createAccountHolder__resParam_accountHolderDetails-legalArrangements-legalArrangementEntities-legalArrangementEntityCode)  to which the document must be linked.',
      }),
    shareholderCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '2',
        description:
          'The Adyen-generated [`shareholderCode`](https://docs.adyen.com/api-explorer/#/Account/latest/post/createAccountHolder__resParam_accountHolderDetails-businessDetails-shareholders-shareholderCode) to which the document must be linked. Refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks) for details on when a document should be submitted.\n>Required if the account holder has a `legalEntity` of type **Business** and the `documentType` is either **PASSPORT**, **ID_CARD_FRONT**, **ID_CARD_BACK**, **DRIVING_LICENCE_FRONT**, or **DRIVING_LICENCE_BACK**. ',
      }),
    signatoryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Adyen-generated [`signatoryCode`](https://docs.adyen.com/api-explorer/#/Account/v6/post/createAccountHolder__resParam_accountHolderDetails-businessDetails-signatories-signatoryCode) to which the document must be linked.',
      }),
  })
  .openapi({ required: ['documentType'] })
  .openapi('DocumentDetail')

const GenericResponseSchema = z
  .strictObject({
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
  })
  .openapi({ required: [] })
  .openapi('GenericResponse')

const GetAccountHolderRequestSchema = z
  .strictObject({
    accountCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code of the account of which to retrieve the details.\n> Required if no `accountHolderCode` is provided.',
      }),
    accountHolderCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The code of the account holder of which to retrieve the details.\n> Required if no `accountCode` is provided.',
      }),
    showDetails: z
      .boolean()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '4',
        description: 'True if the request should return the account holder details',
      }),
  })
  .openapi({ required: [] })
  .openapi('GetAccountHolderRequest')

const MigratedAccountsSchema = z
  .strictObject({
    accountCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the account of the migrated account holder in the classic integration.',
      }),
    balanceAccountId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the account of the migrated account holder in the balance platform.',
      }),
  })
  .openapi({ required: [] })
  .openapi('MigratedAccounts')

const MigratedShareholdersSchema = z
  .strictObject({
    legalEntityCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the legal entity of that shareholder in the balance platform.',
      }),
    shareholderCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the account of the migrated shareholder in the classic integration.',
      }),
  })
  .openapi({ required: [] })
  .openapi('MigratedShareholders')

const MigratedStoresSchema = z
  .strictObject({
    businessLineId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the business line associated with the migrated account holder in the balance platform.',
      }),
    storeCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the store associated with the migrated account holder in the classic integration.',
      }),
    storeId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the store associated with the migrated account holder in the balance platform.',
      }),
    storeReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Your reference for the store in the classic integration. The [Customer Area](https://ca-test.adyen.com/) uses this value for the store description.',
      }),
  })
  .openapi({ required: [] })
  .openapi('MigratedStores')

const MigrationDataSchema = z
  .strictObject({
    accountHolderId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the account holder in the balance platform.',
      }),
    balancePlatform: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier of the balance platfrom to which the account holder was migrated.',
      }),
    migrated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Set to **true** if the account holder has been migrated.' }),
    migratedAccounts: z
      .array(MigratedAccountsSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains the mapping of virtual account codes (classic integration) to the balance account codes (balance platform) associated with the migrated account holder.',
      }),
    migratedShareholders: z
      .array(MigratedShareholdersSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains the mapping of shareholders associated with the migrated legal entities.',
      }),
    migratedStores: z
      .array(MigratedStoresSchema)
      .exactOptional()
      .openapi({
        description:
          'Contains the mapping of business lines and stores associated with the migrated account holder.',
      }),
    migrationDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The date when account holder was migrated.' }),
  })
  .openapi({ required: [] })
  .openapi('MigrationData')

const GetAccountHolderResponseSchema = z
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
      description: 'The status of the account holder.',
    }),
    accounts: z
      .array(AccountSchema)
      .exactOptional()
      .openapi({ description: 'A list of the accounts under the account holder.' }),
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
          'Contains field validation errors that would prevent requests from being processed.',
      }),
    legalEntity: z
      .enum(['Business', 'Individual', 'NonProfit', 'Partnership', 'PublicCompany'])
      .exactOptional()
      .openapi({ description: 'The legal entity of the account holder.' }),
    migrationData: MigrationDataSchema.exactOptional().openapi({
      'x-addedInVersion': '5',
      description: 'Details of the account holder migrated to the balance platform.',
    }),
    primaryCurrency: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '4',
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
    systemUpToDateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description: 'The time that shows how up to date is the information in the response.',
      }),
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
  .openapi('GetAccountHolderResponse')

const GetAccountHolderStatusResponseSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the Account Holder.' }),
    accountHolderStatus: AccountHolderStatusSchema.exactOptional().openapi({
      'x-addedInVersion': '2',
      description: 'The status of the Account Holder.',
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
  })
  .openapi({ required: [] })
  .openapi('GetAccountHolderStatusResponse')

const GetTaxFormRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({
        description: 'The account holder code you provided when you created the account holder.',
      }),
    formType: z
      .string()
      .openapi({ description: 'Type of the requested tax form. For example, 1099-K.' }),
    year: z.int32().openapi({ description: 'Applicable tax year in the YYYY format.' }),
  })
  .openapi({ required: ['accountHolderCode', 'formType', 'year'] })
  .openapi('GetTaxFormRequest')

const GetTaxFormResponseSchema = z
  .strictObject({
    content: z
      .string()
      .exactOptional()
      .openapi({ description: 'The content of the tax form in the Base64 binary format.' }),
    contentType: z
      .string()
      .exactOptional()
      .openapi({ description: 'The content type of the tax form.' }),
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
  })
  .openapi({ required: [] })
  .openapi('GetTaxFormResponse')

const GetUploadedDocumentsRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({
        description: 'The code of the Account Holder for which to retrieve the documents.',
      }),
    bankAccountUUID: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '2',
        description: 'The code of the Bank Account for which to retrieve the documents.',
      }),
    shareholderCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The code of the Shareholder for which to retrieve the documents.' }),
  })
  .openapi({ required: ['accountHolderCode'] })
  .openapi('GetUploadedDocumentsRequest')

const GetUploadedDocumentsResponseSchema = z
  .strictObject({
    documentDetails: z
      .array(DocumentDetailSchema)
      .exactOptional()
      .openapi({ description: 'A list of the documents and their details.' }),
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
  })
  .openapi({ required: [] })
  .openapi('GetUploadedDocumentsResponse')

const PerformVerificationRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({ description: 'The code of the account holder to verify.' }),
    accountStateType: z
      .enum([
        'LimitedPayout',
        'LimitedProcessing',
        'LimitlessPayout',
        'LimitlessProcessing',
        'Payout',
        'Processing',
      ])
      .openapi({
        description:
          'The state required for the account holder.\n> Permitted values: `Processing`, `Payout`.',
      }),
    tier: z.int32().openapi({ description: 'The tier required for the account holder.' }),
  })
  .openapi({ required: ['accountHolderCode', 'accountStateType', 'tier'] })
  .openapi('PerformVerificationRequest')

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

const SuspendAccountHolderRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({ description: 'The code of the account holder to be suspended.' }),
  })
  .openapi({ required: ['accountHolderCode'] })
  .openapi('SuspendAccountHolderRequest')

const SuspendAccountHolderResponseSchema = z
  .strictObject({
    accountHolderStatus: AccountHolderStatusSchema.exactOptional().openapi({
      description: 'The new status of the Account Holder.',
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
  })
  .openapi({ required: [] })
  .openapi('SuspendAccountHolderResponse')

const UnSuspendAccountHolderRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({ description: 'The code of the account holder to be reinstated.' }),
  })
  .openapi({ required: ['accountHolderCode'] })
  .openapi('UnSuspendAccountHolderRequest')

const UnSuspendAccountHolderResponseSchema = z
  .strictObject({
    accountHolderStatus: AccountHolderStatusSchema.exactOptional().openapi({
      description: 'The new status of the Account Holder.',
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
  })
  .openapi({ required: [] })
  .openapi('UnSuspendAccountHolderResponse')

const UpdateAccountHolderRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({ description: 'The code of the Account Holder to be updated.' }),
    accountHolderDetails: AccountHolderDetailsSchema.exactOptional().openapi({
      description:
        'The details to which the Account Holder should be updated.\n\nRequired if a processingTier is not provided.',
    }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '4',
        description:
          'A description of the account holder, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.',
      }),
    legalEntity: z
      .enum(['Business', 'Individual', 'NonProfit', 'Partnership', 'PublicCompany'])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'The legal entity type of the account holder. This determines the information that should be provided in the request.\n\nPossible values: **Business**, **Individual**, or **NonProfit**.\n\n* If set to **Business** or **NonProfit**, then `accountHolderDetails.businessDetails` must be provided, with at least one entry in the `accountHolderDetails.businessDetails.shareholders` list.\n\n* If set to **Individual**, then `accountHolderDetails.individualDetails` must be provided.',
      }),
    primaryCurrency: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '4',
        deprecated: true,
        description:
          'The primary three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes), to which the account holder should be updated.',
      }),
    processingTier: z
      .int32()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '3',
        description:
          'The processing tier to which the Account Holder should be updated.\n>The processing tier can not be lowered through this request.\n\n>Required if accountHolderDetails are not provided.',
      }),
    verificationProfile: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '6',
        description: 'The identifier of the profile that applies to this entity.',
      }),
  })
  .openapi({ required: ['accountHolderCode'] })
  .openapi('UpdateAccountHolderRequest')

const UpdateAccountHolderResponseSchema = z
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

const UpdateAccountHolderStateRequestSchema = z
  .strictObject({
    accountHolderCode: z
      .string()
      .openapi({ description: 'The code of the Account Holder on which to update the state.' }),
    disable: z
      .boolean()
      .openapi({
        description: 'If true, disable the requested state.  If false, enable the requested state.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason that the state is being updated.\n>Required if the state is being disabled.',
      }),
    stateType: z
      .enum([
        'LimitedPayout',
        'LimitedProcessing',
        'LimitlessPayout',
        'LimitlessProcessing',
        'Payout',
        'Processing',
      ])
      .openapi({
        description: 'The state to be updated.\n>Permitted values are: `Processing`, `Payout`',
      }),
  })
  .openapi({ required: ['accountHolderCode', 'stateType', 'disable'] })
  .openapi('UpdateAccountHolderStateRequest')

const UpdatePayoutScheduleRequestSchema = z
  .strictObject({
    action: z
      .enum(['CLOSE', 'NOTHING', 'UPDATE'])
      .exactOptional()
      .openapi({
        description:
          'Direction on how to handle any payouts that have already been scheduled.\n\nPossible values:\n* `CLOSE`: close the existing batch of payouts.\n* `UPDATE`: reschedule the existing batch to the new schedule.\n* `NOTHING` (**default**): allow the payout to proceed.',
      }),
    reason: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The reason for the payout schedule update.\n> This field is required when the `schedule` parameter is set to `HOLD`.',
      }),
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
      .openapi({
        description:
          'The new payout schedule for the account.\n\nPossible values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`, `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`.\n> `HOLD` prevents scheduled payouts, but you can still initiate payouts manually.',
      }),
  })
  .openapi({ required: ['schedule'] })
  .openapi('UpdatePayoutScheduleRequest')

const UpdateAccountRequestSchema = z
  .strictObject({
    accountCode: z.string().openapi({ description: 'The code of the account to update.' }),
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
      .openapi({
        'x-addedInVersion': '4',
        description:
          'A description of the account, maximum 256 characters.You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores `_`.',
      }),
    metadata: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'A set of key and value pairs for general use by the merchant.\nThe keys do not have specific names and may be used for storing miscellaneous data as desired.\n> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.',
      }),
    payoutMethodCode: z
      .string()
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.',
      }),
    payoutSchedule: UpdatePayoutScheduleRequestSchema.exactOptional().openapi({
      description: 'The details of the payout schedule to which the account must be updated.',
    }),
    payoutSpeed: z
      .enum(['INSTANT', 'SAME_DAY', 'STANDARD'])
      .exactOptional()
      .openapi({
        'x-addedInVersion': '5',
        description:
          'Speed at which payouts for this account are processed.\n\nPossible values: `STANDARD` (default), `SAME_DAY`.',
      }),
  })
  .openapi({ required: ['accountCode'] })
  .openapi('UpdateAccountRequest')

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

const UploadDocumentRequestSchema = z
  .strictObject({
    documentContent: z
      .string()
      .openapi({
        description:
          'The content of the document, in Base64-encoded string format.\n\nTo learn about document requirements, refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks).',
      }),
    documentDetail: DocumentDetailSchema.openapi({
      description: 'Details of the document being submitted.',
    }),
  })
  .openapi({ required: ['documentDetail', 'documentContent'] })
  .openapi('UploadDocumentRequest')

const Generic_400Example = {
  summary: 'Response code 400. Bad Request.',
  value: { status: 400, errorCode: '702', message: 'Unexpected input: I', errorType: 'validation' },
}

const Generic_403Example = {
  summary: 'Response code 403. Forbidden.',
  value: {
    status: 403,
    errorCode: '10_003',
    message: 'Failed to authorize user',
    errorType: 'security',
  },
}

const PostCheckAccountHolderBasicExample = {
  summary: 'Check the account holder.',
  value: { accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER', accountStateType: 'Processing', tier: '2' },
}

const PostCloseAccountCloseAccountExample = {
  summary: 'Close an account',
  value: { accountCode: 'CODE_OF_ACCOUNT' },
}

const PostCloseAccountHolderBasicExample = {
  summary: 'Close an account holder',
  value: { accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER' },
}

const PostCreateAccountBasicExample = {
  summary: 'Add an account to an account holder',
  value: { accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER' },
}

const PostCreateAccountHolderBusinessExample = {
  summary: 'Create business account holder',
  value: {
    accountHolderCode: 'YOUR_UNIQUE_ACCOUNT_HOLDER_CODE',
    accountHolderDetails: {
      address: { country: 'US' },
      businessDetails: {
        doingBusinessAs: 'Real Good Restaurant',
        legalBusinessName: 'Real Good Restaurant Inc.',
        shareholders: [
          {
            shareholderType: 'Controller',
            name: { firstName: 'John', lastName: 'Carpenter' },
            address: { country: 'NL' },
            email: 'testshareholder@email.com',
          },
        ],
      },
      email: 'test@email.com',
      webAddress: 'https://www.your-website.com',
    },
    legalEntity: 'Business',
  },
}

const PostCreateAccountHolderBusiness_200Example = {
  summary: 'Business account holder created',
  value: {
    pspReference: 'ALPHANUMERIC_UNIQUE_RESPONSE_REFERENCE',
    accountHolderCode: 'YOUR_UNIQUE_ACCOUNT_HOLDER_CODE',
    accountHolderDetails: {
      address: { country: 'US' },
      bankAccountDetails: [],
      businessDetails: {
        doingBusinessAs: 'Real Good Restaurant',
        legalBusinessName: 'Real Good Restaurant Inc.',
        shareholders: [
          {
            address: { country: 'NL' },
            email: 'testshareholder@email.com',
            name: { firstName: 'John', lastName: 'Carpenter' },
            shareholderCode: 'SHAREHOLDER_CODE',
            shareholderType: 'Controller',
          },
        ],
      },
      email: 'test@email.com',
      merchantCategoryCode: 'MCC_DEFAULT_VALUE',
      payoutMethods: [],
      webAddress: 'https://www.your-website.com',
    },
    accountHolderStatus: {
      status: 'Active',
      processingState: {
        disabled: false,
        processedFrom: { currency: 'USD', value: 0 },
        processedTo: { currency: 'USD', value: 0 },
        tierNumber: 0,
      },
      payoutState: {
        allowPayout: true,
        payoutLimit: { currency: 'USD', value: 0 },
        disabled: false,
        tierNumber: 0,
      },
      events: [],
    },
    legalEntity: 'Business',
    invalidFields: [],
    verification: {},
  },
}

const PostCreateAccountHolderIndividualExample = {
  summary: 'Create individual account holder',
  value: {
    accountHolderCode: 'YOUR_UNIQUE_ACCOUNT_HOLDER_CODE',
    accountHolderDetails: {
      email: 'tim@green.com',
      individualDetails: { name: { firstName: 'Tim', lastName: 'Green' } },
      address: { country: 'US' },
      webAddress: 'https://www.your-website.com',
    },
    legalEntity: 'Individual',
  },
}

const PostCreateAccountHolderIndividual_200Example = {
  summary: 'Individual account holder created',
  value: {
    pspReference: 'ALPHANUMERIC_UNIQUE_RESPONSE_REFERENCE',
    accountHolderCode: 'YOUR_UNIQUE_ACCOUNT_HOLDER_CODE',
    accountHolderDetails: {
      address: { country: 'US' },
      bankAccountDetails: [],
      email: 'tim@green.com',
      individualDetails: { name: { firstName: 'Tim', lastName: 'Green' } },
      merchantCategoryCode: '5045',
      payoutMethods: [],
      webAddress: 'https://www.your-website.com',
    },
    accountHolderStatus: {
      status: 'Active',
      processingState: {
        disabled: false,
        processedFrom: { currency: 'USD', value: 0 },
        processedTo: { currency: 'USD', value: 0 },
        tierNumber: 0,
      },
      payoutState: {
        allowPayout: true,
        payoutLimit: { currency: 'USD', value: 0 },
        disabled: false,
        tierNumber: 0,
      },
      events: [],
    },
    legalEntity: 'Individual',
    invalidFields: [],
    verification: {},
  },
}

const PostDeleteBankAccountsBasicExample = {
  summary: 'Delete bank accounts',
  value: {
    accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
    bankAccountUUIDs: ['eeb6ed22-3bae-483c-83b9-bc2097a75d40'],
  },
}

const PostDeleteLegalArrangementsArrangementsExample = {
  summary: 'Delete legal arrangements',
  description: 'Example request for deleting legal arrangements',
  value: {
    accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
    legalArrangements: [{ legalArrangementCode: 'cdf92f5a-a114-4ce6-8f19-c3f6ec83141c' }],
  },
}

const PostDeleteLegalArrangementsArrangements_200Example = {
  summary: 'Legal arrangement deleted',
  value: { invalidFields: [], pspReference: '8816080397613514' },
}

const PostDeleteLegalArrangementsArrangements_400Example = {
  summary: 'Response code 400. Bad Request.',
  value: {
    invalidFields: [
      {
        errorCode: 34,
        errorDescription:
          "An invalid legalArrangementCode code is provided for value 'cdf92f5a-a114-4ce6-8f19-c3f6ec83141c'",
        fieldType: {
          field: 'AccountHolderDetails.LegalArrangements.legalArrangementCode',
          fieldName: 'legalArrangementCode',
        },
      },
    ],
    pspReference: '9916613322577326',
  },
}

const PostDeleteLegalArrangementsEntitiesExample = {
  summary: 'Delete legal arrangement entities',
  description: 'Example request for deleting legal arrangement entities',
  value: {
    accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
    legalArrangements: [
      {
        legalArrangementCode: 'cdf92f5a-a114-4ce6-8f19-c3f6ec83141c',
        legalArrangementEntityCodes: ['755881d3-d6b0-4b34-8ace-1caceb8add63'],
      },
    ],
  },
}

const PostDeleteLegalArrangementsEntities_200Example = {
  summary: 'Legal arrangement entities deleted',
  value: { invalidFields: [], pspReference: '8816080397613514' },
}

const PostDeleteLegalArrangementsEntities_400Example = {
  summary: 'Response code 400. Bad Request.',
  value: {
    invalidFields: [
      {
        errorCode: 34,
        errorDescription:
          "An invalid legalArrangementEntityCode code is provided for value 'c92bb932-4867-4cef-bf9d-4ecde37745cf'",
        fieldType: {
          field:
            'AccountHolderDetails.LegalArrangements.LegalArrangementsEntities.legalArrangementEntityCode',
          fieldName: 'legalArrangementEntityCode',
        },
      },
    ],
    pspReference: '9916613324987358',
  },
}

const PostDeletePayoutMethodsBasicExample = {
  summary: 'Delete a payout method',
  value: {
    accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
    payoutMethodCodes: ['34b6ed22-3bae-483c-83b9-bc2097a75d40'],
  },
}

const PostDeleteShareholdersBasicExample = {
  summary: 'Delete shareholders',
  value: {
    accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
    shareholderCodes: ['9188218c-576e-4cbe-8e86-72722f453920'],
  },
}

const PostGetAccountHolderAccountCodeExample = {
  summary: 'Get an account holder',
  value: { accountCode: 'CODE_OF_ACCOUNT' },
}

const PostGetAccountHolderAccountHolderCodeExample = {
  summary: 'Get an account holder for the account',
  value: { accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER' },
}

const PostGetTaxFormBasicExample = {
  summary: 'Get a tax form',
  value: { accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER', formType: '1099-K', year: 2020 },
}

const PostGetUploadedDocumentsBasicExample = {
  summary: 'Get uploaded documents',
  value: { accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER', bankAccountUUID: 'EXAMPLE_UUID' },
}

const PostSuspendAccountHolderBasicExample = {
  summary: 'Suspend an account holder',
  value: { accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER' },
}

const PostUnSuspendAccountHolderBasicExample = {
  summary: 'Unsuspend an account holder',
  value: { accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER' },
}

const PostUpdateAccountBasicExample = {
  summary: 'Set a payout schedule',
  value: {
    accountCode: 'CODE_OF_ACCOUNT',
    payoutSchedule: { schedule: 'WEEKLY', action: 'CLOSE' },
  },
}

const PostUpdateAccountHolderAddShareholdersExample = {
  summary: 'Add shareholders',
  value: {
    accountHolderCode: 'YOUR_UNIQUE_ACCOUNT_HOLDER_CODE',
    accountHolderDetails: {
      businessDetails: {
        shareholders: [
          {
            shareholderType: 'Controller',
            name: { firstName: 'Shelly', lastName: 'Eller' },
            address: {
              city: 'San Francisco',
              country: 'US',
              houseNumberOrName: '274',
              postalCode: '94107',
              stateOrProvince: 'CA',
              street: 'Brannan',
            },
            email: 'testshareholder2@email.com',
            personalData: {
              dateOfBirth: '1970-01-01',
              documentData: [{ number: '1234567890', type: 'ID' }],
            },
          },
        ],
        taxId: '123456789',
      },
      email: 'test@email.com',
      fullPhoneNumber: '+14154890281',
      webAddress: 'http://www.accountholderwebsite.com',
    },
  },
}

const PostUpdateAccountHolderAddShareholders_200Example = {
  summary: 'Shareholders added',
  value: {
    invalidFields: [],
    pspReference: 'ALPHANUMERIC_UNIQUE_RESPONSE_REFERENCE',
    accountHolderCode: 'YOUR_UNIQUE_ACCOUNT_HOLDER_CODE',
    accountHolderDetails: {
      bankAccountDetails: [],
      businessDetails: {
        shareholders: [
          {
            address: {
              city: 'San Francisco',
              country: 'US',
              houseNumberOrName: '274',
              postalCode: '94107',
              stateOrProvince: 'CA',
              street: 'Brannan',
            },
            email: 'testshareholder2@email.com',
            name: { firstName: 'Shelly', lastName: 'Eller' },
            personalData: {
              dateOfBirth: '1970-01-01',
              documentData: [{ number: '1234567890', type: 'ID' }],
            },
            shareholderCode: 'SHAREHOLDER_CODE',
            shareholderType: 'Controller',
          },
        ],
        taxId: '123456789',
      },
      email: 'test@email.com',
      payoutMethods: [],
      webAddress: 'http://www.accountholderwebsite.com',
    },
  },
}

const PostUpdateAccountHolderBankAccountDetailsExample = {
  summary: 'Update bank account details',
  value: {
    accountHolderCode: 'YOUR_UNIQUE_ACCOUNT_HOLDER_CODE',
    accountHolderDetails: {
      email: 'tim@green.com',
      individualDetails: { name: { firstName: 'Tim', lastName: 'Green' } },
      bankAccountDetails: [
        {
          accountNumber: '1678116852',
          branchCode: '053101273',
          countryCode: 'US',
          currencyCode: 'USD',
          ownerName: 'Tim Green',
          ownerHouseNumberOrName: '100',
          ownerStreet: 'Main Street',
          ownerPostalCode: '02894',
          ownerCity: 'Springfield',
          ownerState: 'AZ',
          ownerCountryCode: 'US',
        },
      ],
    },
  },
}

const PostUpdateAccountHolderBankAccountDetails_200Example = {
  summary: 'Bank account details updated',
  value: {
    invalidFields: [],
    pspReference: 'ALPHANUMERIC_UNIQUE_RESPONSE_REFERENCE',
    accountHolderCode: 'YOUR_UNIQUE_ACCOUNT_HOLDER_CODE',
    accountHolderDetails: {
      address: { country: 'US' },
      bankAccountDetails: [
        {
          accountNumber: '######6852',
          bankAccountUUID: 'BANK_ACCOUNT_UUID',
          branchCode: '053101273',
          countryCode: 'US',
          currencyCode: 'USD',
          ownerCity: 'Springfield',
          ownerCountryCode: 'US',
          ownerHouseNumberOrName: '100',
          ownerName: 'Tim Green',
          ownerPostalCode: '02894',
          ownerState: 'AZ',
          ownerStreet: 'Main Street',
          primaryAccount: false,
        },
      ],
      businessDetails: {
        doingBusinessAs: 'Real Good Restaurant',
        legalBusinessName: 'Real Good Restaurant Inc.',
        shareholders: [
          {
            address: { country: 'NL' },
            email: 'testshareholder@email.com',
            name: { firstName: 'John', lastName: 'Carpenter' },
            shareholderCode: 'SHAREHOLDER_CODE',
            shareholderType: 'Controller',
          },
        ],
      },
      email: 'tim@green.com',
      merchantCategoryCode: 'MCC_DEFAULT_VALUE',
      payoutMethods: [],
      webAddress: 'https://www.your-website.com',
    },
    accountHolderStatus: {
      status: 'Active',
      processingState: {
        disabled: false,
        processedFrom: { currency: 'USD', value: 0 },
        processedTo: { currency: 'USD', value: 0 },
        tierNumber: 0,
      },
      payoutState: {
        allowPayout: true,
        payoutLimit: { currency: 'USD', value: 0 },
        disabled: false,
        tierNumber: 0,
      },
    },
    legalEntity: 'Business',
    verification: {},
  },
}

const PostUpdateAccountHolderBusinessDetailsExample = {
  summary: 'Update business details',
  value: {
    accountHolderCode: 'YOUR_UNIQUE_ACCOUNT_HOLDER_CODE',
    accountHolderDetails: {
      businessDetails: {
        shareholders: [
          {
            shareholderType: 'Owner',
            address: {
              city: 'Amsterdam',
              country: 'NL',
              houseNumberOrName: '1',
              postalCode: '1111AA',
              stateOrProvince: 'NH',
              street: 'Main Street',
            },
            email: 'testshareholder2@email.com',
            name: { firstName: 'Shelly', lastName: 'Eller' },
          },
        ],
        taxId: 'BV123456789',
      },
      email: 'test@email.com',
      fullPhoneNumber: '+31612345678',
      webAddress: 'http://www.accountholderwebsite.com',
    },
  },
}

const PostUpdateAccountHolderBusinessDetails_200Example = {
  summary: 'Business details updated',
  value: {
    invalidFields: [],
    pspReference: 'ALPHANUMERIC_UNIQUE_RESPONSE_REFERENCE',
    accountHolderCode: 'YOUR_UNIQUE_ACCOUNT_HOLDER_CODE',
    accountHolderDetails: {
      bankAccountDetails: [],
      businessDetails: {
        shareholders: [
          {
            address: {
              city: 'Amsterdam',
              country: 'NL',
              houseNumberOrName: '1',
              postalCode: '1111AA',
              stateOrProvince: 'NH',
              street: 'Main Street',
            },
            email: 'testshareholder2@email.com',
            name: { firstName: 'Shelly', lastName: 'Eller' },
            shareholderCode: 'SHAREHOLDER_CODE',
            shareholderType: 'Owner',
          },
        ],
        taxId: 'BV123456789',
      },
      email: 'test@email.com',
      payoutMethods: [],
      webAddress: 'http://www.accountholderwebsite.com',
    },
  },
}

const PostUpdateAccountHolderGeneralExample = {
  summary: 'Update individual with documentData property',
  value: {
    accountHolderCode: 'YOUR_UNIQUE_ACCOUNT_HOLDER_CODE',
    accountHolderDetails: {
      address: {
        city: 'NY',
        country: 'US',
        postalCode: '12345',
        stateOrProvince: 'NH',
        street: 'Main Street',
        houseNumberOrName: '100',
      },
      email: 'test@adyen.com',
      merchantCategoryCode: '7999',
      fullPhoneNumber: '+31612345678',
      webAddress: 'http://www.accountholderwebsite.com',
    },
  },
}

const PostUpdateAccountHolderGeneral_200Example = {
  summary: 'Individual updated with documentData property',
  value: {
    invalidFields: [],
    pspReference: 'ALPHANUMERIC_UNIQUE_RESPONSE_REFERENCE',
    accountHolderCode: 'YOUR_UNIQUE_ACCOUNT_HOLDER_CODE',
    accountHolderDetails: {
      address: {
        city: 'NY',
        country: 'US',
        houseNumberOrName: '100',
        postalCode: '12345',
        stateOrProvince: 'NH',
        street: 'Main Street',
      },
      bankAccountDetails: [],
      businessDetails: {
        doingBusinessAs: 'Real Good Restaurant',
        legalBusinessName: 'Real Good Restaurant Inc.',
        shareholders: [
          {
            address: { country: 'NL' },
            email: 'testshareholder@email.com',
            name: { firstName: 'John', lastName: 'Carpenter' },
            shareholderCode: 'SHAREHOLDER_CODE',
            shareholderType: 'Controller',
          },
        ],
      },
      email: 'test@adyen.com',
      merchantCategoryCode: 'UPDATE_MCC',
      payoutMethods: [],
      phoneNumber: { phoneCountryCode: 'NL', phoneNumber: '612345678', phoneType: 'Landline' },
      webAddress: 'http://www.accountholderwebsite.com',
    },
    accountHolderStatus: {
      status: 'Active',
      processingState: {
        disabled: false,
        processedFrom: { currency: 'USD', value: 0 },
        processedTo: { currency: 'USD', value: 0 },
        tierNumber: 0,
      },
      payoutState: {
        allowPayout: true,
        payoutLimit: { currency: 'USD', value: 0 },
        disabled: false,
        tierNumber: 0,
      },
    },
    legalEntity: 'Business',
    verification: {},
  },
}

const PostUpdateAccountHolderStateBasicExample = {
  summary: 'Update account holder state',
  value: {
    accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
    disable: true,
    reason: 'test reason payout',
    stateType: 'Payout',
  },
}

const PostUploadDocumentBasicExample = {
  summary: 'Upload a document',
  value: {
    documentContent: 'dGVzdCBkb2N1bWVudCBjb250ZW50',
    documentDetail: {
      accountHolderCode: 'CODE_OF_ACCOUNT_HOLDER',
      documentType: 'PASSPORT',
      filename: 'passport.png',
      description: 'test passport description',
    },
  },
}

const ApiKeyAuthSecurityScheme = { in: 'header', name: 'X-API-Key', type: 'apiKey' }

const BasicAuthSecurityScheme = { scheme: 'basic', type: 'http' }

export const postCheckAccountHolderRoute = createRoute({
  method: 'post',
  path: '/checkAccountHolder',
  tags: ['Verification'],
  summary: 'Trigger verification',
  description:
    'Triggers the verification of an account holder even if the checks are not yet required for the volume that they are currently processing.',
  operationId: 'post-checkAccountHolder',
  request: {
    body: {
      content: {
        'application/json': {
          schema: PerformVerificationRequestSchema,
          examples: { basic: PostCheckAccountHolderBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postCloseAccountRoute = createRoute({
  method: 'post',
  path: '/closeAccount',
  tags: ['Accounts'],
  summary: 'Close an account',
  description:
    'Closes an account. If an account is closed, you cannot process transactions, pay out its funds, or reopen it. If payments are made to a closed account, the payments are sent to your liable account.',
  operationId: 'post-closeAccount',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CloseAccountRequestSchema,
          examples: { closeAccount: PostCloseAccountCloseAccountExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: CloseAccountResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: CloseAccountResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postCloseAccountHolderRoute = createRoute({
  method: 'post',
  path: '/closeAccountHolder',
  tags: ['Account holders'],
  summary: 'Close an account holder',
  description:
    "Changes the [status of an account holder](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#account-holder-statuses) to **Closed**. This state is final. If an account holder is closed, you can't process transactions, pay out funds, or reopen it. If payments are made to an account of an account holder with a **Closed** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status), the payments are sent to your liable account.",
  operationId: 'post-closeAccountHolder',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CloseAccountHolderRequestSchema,
          examples: { basic: PostCloseAccountHolderBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: CloseAccountHolderResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: CloseAccountHolderResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postCloseStoresRoute = createRoute({
  method: 'post',
  path: '/closeStores',
  tags: ['Account holders'],
  summary: 'Close stores',
  description: 'Closes stores associated with an account holder.',
  operationId: 'post-closeStores',
  request: { body: { content: { 'application/json': { schema: CloseStoresRequestSchema } } } },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postCreateAccountRoute = createRoute({
  method: 'post',
  path: '/createAccount',
  tags: ['Accounts'],
  summary: 'Create an account',
  description:
    'Creates an account under an account holder. An account holder can have [multiple accounts](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#create-additional-accounts).',
  operationId: 'post-createAccount',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateAccountRequestSchema,
          examples: { basic: PostCreateAccountBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: CreateAccountResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: CreateAccountResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postCreateAccountHolderRoute = createRoute({
  method: 'post',
  path: '/createAccountHolder',
  tags: ['Account holders'],
  summary: 'Create an account holder',
  description:
    "Creates an account holder that [represents the sub-merchant's entity](https://docs.adyen.com/classic-platforms/account-structure#your-platform) in your platform. The details that you need to provide in the request depend on the sub-merchant's legal entity type. For more information, refer to [Account holder and accounts](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#legal-entity-types).",
  operationId: 'post-createAccountHolder',
  request: {
    body: {
      content: {
        'application/json': {
          schema: CreateAccountHolderRequestSchema,
          examples: {
            business: PostCreateAccountHolderBusinessExample,
            individual: PostCreateAccountHolderIndividualExample,
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
          schema: CreateAccountHolderResponseSchema,
          examples: {
            business: PostCreateAccountHolderBusiness_200Example,
            individual: PostCreateAccountHolderIndividual_200Example,
          },
        },
      },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postDeleteBankAccountsRoute = createRoute({
  method: 'post',
  path: '/deleteBankAccounts',
  tags: ['Verification'],
  summary: 'Delete bank accounts',
  description: 'Deletes bank accounts associated with an account holder. ',
  operationId: 'post-deleteBankAccounts',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DeleteBankAccountRequestSchema,
          examples: { basic: PostDeleteBankAccountsBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postDeleteLegalArrangementsRoute = createRoute({
  method: 'post',
  path: '/deleteLegalArrangements',
  tags: ['Verification'],
  summary: 'Delete legal arrangements',
  description:
    'Deletes legal arrangements and/or legal arrangement entities associated with an account holder.',
  operationId: 'post-deleteLegalArrangements',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DeleteLegalArrangementRequestSchema,
          examples: {
            arrangements: PostDeleteLegalArrangementsArrangementsExample,
            entities: PostDeleteLegalArrangementsEntitiesExample,
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
          schema: GenericResponseSchema,
          examples: {
            arrangements: PostDeleteLegalArrangementsArrangements_200Example,
            entities: PostDeleteLegalArrangementsEntities_200Example,
          },
        },
      },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: {
            arrangements: PostDeleteLegalArrangementsArrangements_400Example,
            entities: PostDeleteLegalArrangementsEntities_400Example,
            generic: Generic_400Example,
          },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postDeletePayoutMethodsRoute = createRoute({
  method: 'post',
  path: '/deletePayoutMethods',
  tags: ['Verification'],
  summary: 'Delete payout methods',
  description: 'Deletes payout methods associated with an account holder.',
  operationId: 'post-deletePayoutMethods',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DeletePayoutMethodRequestSchema,
          examples: { basic: PostDeletePayoutMethodsBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postDeleteShareholdersRoute = createRoute({
  method: 'post',
  path: '/deleteShareholders',
  tags: ['Verification'],
  summary: 'Delete shareholders',
  description: 'Deletes shareholders associated with an account holder.',
  operationId: 'post-deleteShareholders',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DeleteShareholderRequestSchema,
          examples: { basic: PostDeleteShareholdersBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postDeleteSignatoriesRoute = createRoute({
  method: 'post',
  path: '/deleteSignatories',
  tags: ['Verification'],
  summary: 'Delete signatories',
  description: 'Deletes signatories associated with an account holder.',
  operationId: 'post-deleteSignatories',
  request: {
    body: { content: { 'application/json': { schema: DeleteSignatoriesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: GenericResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postGetAccountHolderRoute = createRoute({
  method: 'post',
  path: '/getAccountHolder',
  tags: ['Account holders'],
  summary: 'Get an account holder',
  description: 'Returns the details of an account holder.',
  operationId: 'post-getAccountHolder',
  request: {
    body: {
      content: {
        'application/json': {
          schema: GetAccountHolderRequestSchema,
          examples: {
            accountCode: PostGetAccountHolderAccountCodeExample,
            accountHolderCode: PostGetAccountHolderAccountHolderCodeExample,
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: GetAccountHolderResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: GetAccountHolderResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postGetTaxFormRoute = createRoute({
  method: 'post',
  path: '/getTaxForm',
  tags: ['Account holders'],
  summary: 'Get a tax form',
  description:
    'Generates a tax form for account holders operating in the US. For more information, refer to [Providing tax forms](https://docs.adyen.com/classic-platforms/tax-forms).',
  operationId: 'post-getTaxForm',
  request: {
    body: {
      content: {
        'application/json': {
          schema: GetTaxFormRequestSchema,
          examples: { basic: PostGetTaxFormBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: GetTaxFormResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postGetUploadedDocumentsRoute = createRoute({
  method: 'post',
  path: '/getUploadedDocuments',
  tags: ['Verification'],
  summary: 'Get documents',
  description:
    'Returns documents that were previously uploaded for an account holder. Adyen uses the documents during the [verification process](https://docs.adyen.com/classic-platforms/verification-process).\n',
  operationId: 'post-getUploadedDocuments',
  request: {
    body: {
      content: {
        'application/json': {
          schema: GetUploadedDocumentsRequestSchema,
          examples: { basic: PostGetUploadedDocumentsBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: GetUploadedDocumentsResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postSuspendAccountHolderRoute = createRoute({
  method: 'post',
  path: '/suspendAccountHolder',
  tags: ['Account holders'],
  summary: 'Suspend an account holder',
  description:
    'Changes the [status of an account holder](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#account-holder-statuses) to **Suspended**.',
  operationId: 'post-suspendAccountHolder',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SuspendAccountHolderRequestSchema,
          examples: { basic: PostSuspendAccountHolderBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: SuspendAccountHolderResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: SuspendAccountHolderResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postUnSuspendAccountHolderRoute = createRoute({
  method: 'post',
  path: '/unSuspendAccountHolder',
  tags: ['Account holders'],
  summary: 'Unsuspend an account holder',
  description:
    'Changes the [status of an account holder](https://docs.adyen.com/classic-platforms/account-holders-and-accounts#account-holder-statuses) from **Suspended** to **Inactive**. \nAccount holders can have a **Suspended** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status) if you suspend them through the [`/suspendAccountHolder`](https://docs.adyen.com/api-explorer/#/Account/v5/post/suspendAccountHolder) endpoint or if a verification deadline expires.\n\nYou can only unsuspend account holders if they do not have verification checks with a **FAILED** [`status`](https://docs.adyen.com/api-explorer/#/Account/latest/post/getAccountHolder__resParam_verification-accountHolder-checks-status).',
  operationId: 'post-unSuspendAccountHolder',
  request: {
    body: {
      content: {
        'application/json': {
          schema: UnSuspendAccountHolderRequestSchema,
          examples: { basic: PostUnSuspendAccountHolderBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: UnSuspendAccountHolderResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: UnSuspendAccountHolderResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postUpdateAccountRoute = createRoute({
  method: 'post',
  path: '/updateAccount',
  tags: ['Accounts'],
  summary: 'Update an account',
  description: 'Updates the description or payout schedule of an account.',
  operationId: 'post-updateAccount',
  request: {
    body: {
      content: {
        'application/json': {
          schema: UpdateAccountRequestSchema,
          examples: { basic: PostUpdateAccountBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: UpdateAccountResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: UpdateAccountResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postUpdateAccountHolderRoute = createRoute({
  method: 'post',
  path: '/updateAccountHolder',
  tags: ['Account holders'],
  summary: 'Update an account holder',
  description:
    'Updates the `accountHolderDetails` and `processingTier` of an account holder, and adds bank accounts and shareholders.\n\nWhen updating `accountHolderDetails`, parameters that are not included in the request are left unchanged except for the following object:\n\n* `metadata`: Updating the metadata replaces the entire object. This means that to update an existing key-value pair, you must provide the changes, as well as other existing key-value pairs.\n\nWhen updating any field in the following objects, you must submit all the fields required for validation:\n\n * `address`\n\n* `fullPhoneNumber`\n\n* `bankAccountDetails.BankAccountDetail`\n\n* `businessDetails.shareholders.ShareholderContact`\n\n For example, to update the `address.postalCode`, you must also submit the `address.country`, `.city`, `.street`, `.postalCode`, and possibly `.stateOrProvince` so that the address can be validated.\n\nTo add a bank account or shareholder, provide the bank account or shareholder details without a `bankAccountUUID` or a `shareholderCode`.\n\n',
  operationId: 'post-updateAccountHolder',
  request: {
    body: {
      content: {
        'application/json': {
          schema: UpdateAccountHolderRequestSchema,
          examples: {
            addShareholders: PostUpdateAccountHolderAddShareholdersExample,
            bankAccountDetails: PostUpdateAccountHolderBankAccountDetailsExample,
            businessDetails: PostUpdateAccountHolderBusinessDetailsExample,
            general: PostUpdateAccountHolderGeneralExample,
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
          schema: UpdateAccountHolderResponseSchema,
          examples: {
            addShareholders: PostUpdateAccountHolderAddShareholders_200Example,
            bankAccountDetails: PostUpdateAccountHolderBankAccountDetails_200Example,
            businessDetails: PostUpdateAccountHolderBusinessDetails_200Example,
            general: PostUpdateAccountHolderGeneral_200Example,
          },
        },
      },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: UpdateAccountHolderResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postUpdateAccountHolderStateRoute = createRoute({
  method: 'post',
  path: '/updateAccountHolderState',
  tags: ['Account holders'],
  summary: 'Update payout or processing state',
  description: 'Disables or enables the processing or payout state of an account holder.',
  operationId: 'post-updateAccountHolderState',
  request: {
    body: {
      content: {
        'application/json': {
          schema: UpdateAccountHolderStateRequestSchema,
          examples: { basic: PostUpdateAccountHolderStateBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: GetAccountHolderStatusResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: GetAccountHolderStatusResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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

export const postUploadDocumentRoute = createRoute({
  method: 'post',
  path: '/uploadDocument',
  tags: ['Verification'],
  summary: 'Upload a document',
  description:
    'Uploads a document for an account holder. Adyen uses the documents during the [verification process](https://docs.adyen.com/classic-platforms/verification-process).',
  operationId: 'post-uploadDocument',
  request: {
    body: {
      content: {
        'application/json': {
          schema: UploadDocumentRequestSchema,
          examples: { basic: PostUploadDocumentBasicExample },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'OK - the request has succeeded.',
      content: { 'application/json': { schema: UpdateAccountHolderResponseSchema } },
    },
    202: {
      description:
        'Accepted - the request has been accepted for processing, but the processing has not been completed.',
      content: { 'application/json': { schema: UpdateAccountHolderResponseSchema } },
    },
    400: {
      description: 'Bad Request - a problem reading or understanding the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_400Example },
        },
      },
    },
    401: {
      description: 'Unauthorized - authentication required.',
      content: { 'application/json': { schema: ServiceErrorSchema } },
    },
    403: {
      description: 'Forbidden - insufficient permissions to process the request.',
      content: {
        'application/json': {
          schema: ServiceErrorSchema,
          examples: { generic: Generic_403Example },
        },
      },
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
