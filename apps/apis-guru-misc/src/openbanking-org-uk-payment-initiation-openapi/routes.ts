import { createRoute, z } from '@hono/zod-openapi'

const ActiveOrHistoricCurrencyCodeSchema = z
  .string()
  .regex(/^[A-Z]{3,3}$/)
  .openapi({
    description:
      'A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 "Codes for the representation of currencies and funds".',
  })
  .openapi('ActiveOrHistoricCurrencyCode')

const BuildingNumberSchema = z
  .string()
  .min(1)
  .max(16)
  .openapi({ description: 'Number that identifies the position of a building on a street.' })
  .openapi('BuildingNumber')

const CountryCodeSchema = z
  .string()
  .regex(/^[A-Z]{2,2}$/)
  .openapi({ description: 'Nation with its own government.' })
  .openapi('CountryCode')

const CountrySubDivisionSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({ description: 'Identifies a subdivision of a country such as state, region, county.' })
  .openapi('CountrySubDivision')

const DepartmentSchema = z
  .string()
  .min(1)
  .max(70)
  .openapi({ description: 'Identification of a division of a large organisation or building.' })
  .openapi('Department')

const FileSchema = z.strictObject({}).openapi('File')

const ISODateTimeSchema = z.iso
  .datetime({ offset: true })
  .openapi({
    description:
      'All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
  })
  .openapi('ISODateTime')

const Identification_0Schema = z
  .string()
  .min(1)
  .max(256)
  .openapi({
    description:
      'Identification assigned by an institution to identify an account. This identification is known by the account owner.',
  })
  .openapi('Identification_0')

const Identification_1Schema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description:
      'Unique and unambiguous identification of a financial institution or a branch of a financial institution.',
  })
  .openapi('Identification_1')

const LinksSchema = z
  .strictObject({
    First: z.url().exactOptional(),
    Last: z.url().exactOptional(),
    Next: z.url().exactOptional(),
    Prev: z.url().exactOptional(),
    Self: z.url(),
  })
  .openapi({ description: 'Links relevant to the payload', required: ['Self'] })
  .openapi('Links')

const MetaSchema = z
  .strictObject({
    FirstAvailableDateTime: ISODateTimeSchema.exactOptional(),
    LastAvailableDateTime: ISODateTimeSchema.exactOptional(),
    TotalPages: z.int32().exactOptional(),
  })
  .openapi({ description: 'Meta Data relevant to the payload', title: 'MetaData', required: [] })
  .openapi('Meta')

const NameSchema = z
  .string()
  .min(1)
  .max(140)
  .openapi({
    description:
      'Name by which an agent is known and which is usually used to identify that agent.',
  })
  .openapi('Name')

const OBActiveCurrencyAndAmountSimpleTypeSchema = z
  .string()
  .regex(/^\d{1,13}$|^\d{1,13}\.\d{1,5}$/)
  .openapi({
    description:
      'A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217.',
  })
  .openapi('OBActiveCurrencyAndAmountSimpleType')

const OBActiveOrHistoricCurrencyAndAmountSchema = z
  .strictObject({
    Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
    Currency: ActiveOrHistoricCurrencyCodeSchema,
  })
  .openapi({
    description: 'Amount of money associated with the charge type.',
    required: ['Amount', 'Currency'],
  })
  .openapi('OBActiveOrHistoricCurrencyAndAmount')

const OBAddressTypeCodeSchema = z
  .enum([
    'Business',
    'Correspondence',
    'DeliveryTo',
    'MailTo',
    'POBox',
    'Postal',
    'Residential',
    'Statement',
  ])
  .openapi({ description: 'Identifies the nature of the postal address.' })
  .openapi('OBAddressTypeCode')

const OBExternalAccountIdentification4CodeSchema = z
  .string()
  .openapi({
    description:
      'Name of the identification scheme, in a coded form as published in an external list.',
    'x-namespaced-enum': [
      'UK.OBIE.BBAN',
      'UK.OBIE.IBAN',
      'UK.OBIE.PAN',
      'UK.OBIE.Paym',
      'UK.OBIE.SortCodeAccountNumber',
    ],
  })
  .openapi('OBExternalAccountIdentification4Code')

const OBCashAccountCreditor3Schema = z
  .object({
    Identification: z
      .string()
      .max(256)
      .openapi({
        description:
          'Identification assigned by an institution to identify an account. This identification is known by the account owner.',
      }),
    Name: z
      .string()
      .openapi({
        description:
          'Name of the account, as assigned by the account servicing institution.  Usage The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.',
      }),
    SchemeName: OBExternalAccountIdentification4CodeSchema,
    SecondaryIdentification: z
      .string()
      .max(34)
      .exactOptional()
      .openapi({
        description:
          'Secondary identification of the account, as assigned by the account servicing institution. This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).',
      }),
  })
  .openapi({ required: ['SchemeName', 'Identification', 'Name'] })
  .openapi('OBCashAccountCreditor3')

const OBCashAccountDebtor4Schema = z
  .object({
    Identification: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '^ Identification assigned by an institution to identify an account. This identification is known by the account owner. | Max256Text',
      }),
    Name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '^ Name of the account, as assigned by the account servicing institution.  Usage The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.',
      }),
    SchemeName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '^ Name of the identification scheme, in a coded form as published in an external list. | Namespaced Enumeration OBExternalAccountIdentification4Code',
      }),
    SecondaryIdentification: z
      .string()
      .exactOptional()
      .openapi({
        description:
          '^ This is secondary identification of the account, as assigned by the account servicing institution.  This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination) | Max34Text',
      }),
  })
  .openapi({
    description:
      '^ Only incuded in the response if `Data. ReadRefundAccount` is set to `Yes` in the consent.',
    required: [],
  })
  .openapi('OBCashAccountDebtor4')

const OBChargeBearerType1CodeSchema = z
  .enum(['BorneByCreditor', 'BorneByDebtor', 'FollowingServiceLevel', 'Shared'])
  .openapi({
    description:
      'Specifies which party/parties will bear the charges associated with the processing of the payment transaction.',
  })
  .openapi('OBChargeBearerType1Code')

const OBError1Schema = z
  .strictObject({
    ErrorCode: z
      .string()
      .openapi({
        description: 'Low level textual error code, e.g., UK.OBIE.Field.Missing',
        'x-namespaced-enum': [
          'UK.OBIE.Field.Expected',
          'UK.OBIE.Field.Invalid',
          'UK.OBIE.Field.InvalidDate',
          'UK.OBIE.Field.Missing',
          'UK.OBIE.Field.Unexpected',
          'UK.OBIE.Header.Invalid',
          'UK.OBIE.Header.Missing',
          'UK.OBIE.Reauthenticate',
          'UK.OBIE.Resource.ConsentMismatch',
          'UK.OBIE.Resource.InvalidConsentStatus',
          'UK.OBIE.Resource.InvalidFormat',
          'UK.OBIE.Resource.NotFound',
          'UK.OBIE.Rules.AfterCutOffDateTime',
          'UK.OBIE.Rules.DuplicateReference',
          'UK.OBIE.Signature.Invalid',
          'UK.OBIE.Signature.InvalidClaim',
          'UK.OBIE.Signature.Malformed',
          'UK.OBIE.Signature.Missing',
          'UK.OBIE.Signature.MissingClaim',
          'UK.OBIE.Signature.Unexpected',
          'UK.OBIE.UnexpectedError',
          'UK.OBIE.Unsupported.AccountIdentifier',
          'UK.OBIE.Unsupported.AccountSecondaryIdentifier',
          'UK.OBIE.Unsupported.Currency',
          'UK.OBIE.Unsupported.Frequency',
          'UK.OBIE.Unsupported.LocalInstrument',
          'UK.OBIE.Unsupported.Scheme',
        ],
      }),
    Message: z
      .string()
      .min(1)
      .max(500)
      .openapi({
        description:
          "A description of the error that occurred. e.g., 'A mandatory field isn't supplied' or 'RequestedExecutionDateTime must be in future'\nOBIE doesn't standardise this field",
      }),
    Path: z
      .string()
      .min(1)
      .max(500)
      .exactOptional()
      .openapi({
        description:
          'Recommended but optional reference to the JSON Path of the field with error, e.g., Data.Initiation.InstructedAmount.Currency',
      }),
    Url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL to help remediate the problem, or provide more information, or to API Reference, or help etc',
      }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ required: ['ErrorCode', 'Message'] })
  .openapi('OBError1')

const OBErrorResponse1Schema = z
  .strictObject({
    Code: z
      .string()
      .min(1)
      .max(40)
      .openapi({ description: 'High level textual error code, to help categorize the errors.' }),
    Errors: z.array(OBError1Schema).min(1),
    Id: z
      .string()
      .min(1)
      .max(40)
      .exactOptional()
      .openapi({
        description:
          'A unique reference for the error instance, for audit purposes, in case of unknown/unclassified errors.',
      }),
    Message: z
      .string()
      .min(1)
      .max(500)
      .openapi({
        description:
          "Brief Error message, e.g., 'There is something wrong with the request parameters provided'",
      }),
  })
  .openapi({
    description:
      'An array of detail error codes, and messages, and URLs to documentation to help remediation.',
    required: ['Code', 'Message', 'Errors'],
  })
  .openapi('OBErrorResponse1')

const OBExternalFinancialInstitutionIdentification4CodeSchema = z
  .string()
  .openapi({
    description:
      'Name of the identification scheme, in a coded form as published in an external list.',
    'x-namespaced-enum': ['UK.OBIE.BICFI'],
  })
  .openapi('OBExternalFinancialInstitutionIdentification4Code')

const OBExternalLocalInstrument1CodeSchema = z
  .string()
  .openapi({
    description:
      'User community specific instrument.\nUsage: This element is used to specify a local instrument, local clearing option and/or further qualify the service or service level.',
    'x-namespaced-enum': [
      'UK.OBIE.BACS',
      'UK.OBIE.BalanceTransfer',
      'UK.OBIE.CHAPS',
      'UK.OBIE.Euro1',
      'UK.OBIE.FPS',
      'UK.OBIE.Link',
      'UK.OBIE.MoneyTransfer',
      'UK.OBIE.Paym',
      'UK.OBIE.SEPACreditTransfer',
      'UK.OBIE.SEPAInstantCreditTransfer',
      'UK.OBIE.SWIFT',
      'UK.OBIE.Target2',
    ],
  })
  .openapi('OBExternalLocalInstrument1Code')

const OBExternalPaymentChargeType1CodeSchema = z
  .string()
  .openapi({
    description: 'Charge type, in a coded form.',
    'x-namespaced-enum': ['UK.OBIE.CHAPSOut'],
  })
  .openapi('OBExternalPaymentChargeType1Code')

const PostCodeSchema = z
  .string()
  .min(1)
  .max(16)
  .openapi({
    description:
      'Identifier consisting of a group of letters and/or numbers that is added to a postal address to assist the sorting of mail.',
  })
  .openapi('PostCode')

const StreetNameSchema = z
  .string()
  .min(1)
  .max(70)
  .openapi({ description: 'Name of a street or thoroughfare.' })
  .openapi('StreetName')

const SubDepartmentSchema = z
  .string()
  .min(1)
  .max(70)
  .openapi({ description: 'Identification of a sub-division of a large organisation or building.' })
  .openapi('SubDepartment')

const TownNameSchema = z
  .string()
  .min(1)
  .max(35)
  .openapi({
    description: 'Name of a built-up area, with defined boundaries, and a local government.',
  })
  .openapi('TownName')

const OBPostalAddress6Schema = z
  .strictObject({
    AddressLine: z
      .array(
        z
          .string()
          .min(1)
          .max(70)
          .openapi({
            description:
              'Information that locates and identifies a specific address, as defined by postal services, presented in free format text.',
          }),
      )
      .min(0)
      .max(7)
      .exactOptional(),
    AddressType: OBAddressTypeCodeSchema.exactOptional(),
    BuildingNumber: BuildingNumberSchema.exactOptional(),
    Country: CountryCodeSchema.exactOptional(),
    CountrySubDivision: CountrySubDivisionSchema.exactOptional(),
    Department: DepartmentSchema.exactOptional(),
    PostCode: PostCodeSchema.exactOptional(),
    StreetName: StreetNameSchema.exactOptional(),
    SubDepartment: SubDepartmentSchema.exactOptional(),
    TownName: TownNameSchema.exactOptional(),
  })
  .openapi({
    description:
      'Information that locates and identifies a specific address, as defined by postal services.',
    required: [],
  })
  .openapi('OBPostalAddress6')

const OBRisk1Schema = z
  .strictObject({
    DeliveryAddress: z
      .strictObject({
        AddressLine: z
          .array(
            z
              .string()
              .min(1)
              .max(70)
              .openapi({
                description:
                  'Information that locates and identifies a specific address, as defined by postal services, that is presented in free format text.',
              }),
          )
          .min(0)
          .max(2)
          .exactOptional(),
        BuildingNumber: BuildingNumberSchema.exactOptional(),
        Country: z
          .string()
          .regex(/^[A-Z]{2,2}$/)
          .openapi({
            description: 'Nation with its own government, occupying a particular territory.',
          }),
        CountrySubDivision: CountrySubDivisionSchema.exactOptional(),
        PostCode: PostCodeSchema.exactOptional(),
        StreetName: StreetNameSchema.exactOptional(),
        TownName: TownNameSchema,
      })
      .exactOptional()
      .openapi({
        description:
          'Information that locates and identifies a specific address, as defined by postal services or in free format text.',
        required: ['TownName', 'Country'],
      }),
    MerchantCategoryCode: z
      .string()
      .min(3)
      .max(4)
      .exactOptional()
      .openapi({
        description:
          'Category code conform to ISO 18245, related to the type of services or goods the merchant provides for the transaction.',
      }),
    MerchantCustomerIdentification: z
      .string()
      .min(1)
      .max(70)
      .exactOptional()
      .openapi({ description: 'The unique customer identifier of the PSU with the merchant.' }),
    PaymentContextCode: z
      .enum(['BillPayment', 'EcommerceGoods', 'EcommerceServices', 'Other', 'PartyToParty'])
      .exactOptional()
      .openapi({ description: 'Specifies the payment context' }),
  })
  .openapi({
    description:
      'The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Payments.',
    required: [],
  })
  .openapi('OBRisk1')

const OBSCASupportData1Schema = z
  .object({
    AppliedAuthenticationApproach: z
      .enum(['CA', 'SCA'])
      .exactOptional()
      .openapi({
        description:
          'Specifies a character string with a maximum length of 40 characters.\nUsage: This field indicates whether the PSU was subject to SCA performed by the TPP',
      }),
    ReferencePaymentOrderId: z
      .string()
      .min(1)
      .max(40)
      .exactOptional()
      .openapi({
        description:
          'If the payment is recurring, then this field is populated with the transaction identifier of the previous payment occurrence so that the ASPSP can verify that the PISP, amount and the payee are the same as the previous occurrence. The value here refers to the payment id e.g. DomesticPaymentId  ',
      }),
    RequestedSCAExemptionType: z
      .enum([
        'BillPayment',
        'ContactlessTravel',
        'EcommerceGoods',
        'EcommerceServices',
        'Kiosk',
        'Parking',
        'PartyToParty',
      ])
      .exactOptional()
      .openapi({
        description:
          'This field allows a PISP to request specific SCA Exemption for a Payment Initiation',
      }),
  })
  .openapi({
    description: 'Supporting Data provided by TPP, when requesting SCA Exemption.',
    required: [],
  })
  .openapi('OBSCASupportData1')

const OBSupplementaryData1Schema = z
  .looseObject({})
  .openapi({
    description:
      'Additional information that can not be captured in the structured fields and/or any other specific block.',
  })
  .openapi('OBSupplementaryData1')

const SecondaryIdentificationSchema = z
  .string()
  .min(1)
  .max(34)
  .openapi({
    description:
      'This is secondary identification of the account, as assigned by the account servicing institution. \nThis can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).',
  })
  .openapi('SecondaryIdentification')

const OBWriteDomestic2Schema = z
  .strictObject({
    Data: z
      .strictObject({
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        Initiation: z
          .strictObject({
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorPostalAddress: OBPostalAddress6Schema.exactOptional(),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.',
            required: [
              'InstructionIdentification',
              'EndToEndIdentification',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
      })
      .openapi({ required: ['ConsentId', 'Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteDomestic2')

const OBWriteDomesticConsent4Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single'])
              .openapi({ description: 'Type of authorisation flow requested.' }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The authorisation type request from the TPP.',
            required: ['AuthorisationType'],
          }),
        Initiation: z
          .strictObject({
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorPostalAddress: OBPostalAddress6Schema.exactOptional(),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.',
            required: [
              'InstructionIdentification',
              'EndToEndIdentification',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
        ReadRefundAccount: z
          .enum(['No', 'Yes'])
          .exactOptional()
          .openapi({ description: 'Specifies to share the refund account details with PISP' }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
      })
      .openapi({ required: ['Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteDomesticConsent4')

const OBWriteDomesticConsentResponse5Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single'])
              .openapi({ description: 'Type of authorisation flow requested.' }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The authorisation type request from the TPP.',
            required: ['AuthorisationType'],
          }),
        Charges: z
          .array(
            z
              .strictObject({
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                ChargeBearer: OBChargeBearerType1CodeSchema,
                Type: OBExternalPaymentChargeType1CodeSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        CutOffDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
        ExpectedExecutionDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        ExpectedSettlementDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Initiation: z
          .strictObject({
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorPostalAddress: OBPostalAddress6Schema.exactOptional(),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.',
            required: [
              'InstructionIdentification',
              'EndToEndIdentification',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
        ReadRefundAccount: z
          .enum(['No', 'Yes'])
          .exactOptional()
          .openapi({ description: 'Specifies to share the refund account details with PISP' }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
        Status: z
          .enum(['Authorised', 'AwaitingAuthorisation', 'Consumed', 'Rejected'])
          .openapi({ description: 'Specifies the status of consent resource in code form.' }),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: ['ConsentId', 'CreationDateTime', 'Status', 'StatusUpdateDateTime', 'Initiation'],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteDomesticConsentResponse5')

const OBWriteDomesticResponse5Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Charges: z
          .array(
            z
              .strictObject({
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                ChargeBearer: OBChargeBearerType1CodeSchema,
                Type: OBExternalPaymentChargeType1CodeSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the message was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
        DomesticPaymentId: z
          .string()
          .min(1)
          .max(40)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the domestic payment resource.',
          }),
        ExpectedExecutionDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        ExpectedSettlementDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Initiation: z
          .strictObject({
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorPostalAddress: OBPostalAddress6Schema.exactOptional(),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.',
            required: [
              'InstructionIdentification',
              'EndToEndIdentification',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
        MultiAuthorisation: z
          .strictObject({
            ExpirationDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            LastUpdateDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            NumberReceived: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of authorisations received.' }),
            NumberRequired: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Number of authorisations required for payment order (total required at the start of the multi authorisation journey).',
              }),
            Status: z
              .enum(['Authorised', 'AwaitingFurtherAuthorisation', 'Rejected'])
              .openapi({
                description: 'Specifies the status of the authorisation flow in code form.',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The multiple authorisation flow response from the ASPSP.',
            required: ['Status'],
          }),
        Refund: z
          .strictObject({
            Account: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'Name of the account, as assigned by the account servicing institution.\nUsage: The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description: 'Provides the details to identify an account.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.',
            required: ['Account'],
          }),
        Status: z
          .enum([
            'AcceptedCreditSettlementCompleted',
            'AcceptedSettlementCompleted',
            'AcceptedSettlementInProcess',
            'AcceptedWithoutPosting',
            'Pending',
            'Rejected',
          ])
          .openapi({ description: 'Specifies the status of the payment information group.' }),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: [
          'DomesticPaymentId',
          'ConsentId',
          'CreationDateTime',
          'Status',
          'StatusUpdateDateTime',
          'Initiation',
        ],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWriteDomesticResponse5')

const OBWriteDomesticScheduled2Schema = z
  .strictObject({
    Data: z
      .strictObject({
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        Initiation: z
          .strictObject({
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorPostalAddress: OBPostalAddress6Schema.exactOptional(),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.',
            required: [
              'InstructionIdentification',
              'RequestedExecutionDateTime',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
      })
      .openapi({ required: ['ConsentId', 'Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteDomesticScheduled2')

const OBWriteDomesticScheduledConsent4Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single'])
              .openapi({ description: 'Type of authorisation flow requested.' }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The authorisation type request from the TPP.',
            required: ['AuthorisationType'],
          }),
        Initiation: z
          .strictObject({
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorPostalAddress: OBPostalAddress6Schema.exactOptional(),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.',
            required: [
              'InstructionIdentification',
              'RequestedExecutionDateTime',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
        Permission: z
          .literal('Create')
          .openapi({ description: 'Specifies the Open Banking service request types.' }),
        ReadRefundAccount: z
          .enum(['No', 'Yes'])
          .exactOptional()
          .openapi({ description: 'Specifies to share the refund account details with PISP' }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
      })
      .openapi({ required: ['Permission', 'Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteDomesticScheduledConsent4')

const OBWriteDomesticScheduledConsentResponse5Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single'])
              .openapi({ description: 'Type of authorisation flow requested.' }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The authorisation type request from the TPP.',
            required: ['AuthorisationType'],
          }),
        Charges: z
          .array(
            z
              .strictObject({
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                ChargeBearer: OBChargeBearerType1CodeSchema,
                Type: OBExternalPaymentChargeType1CodeSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        CutOffDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
        ExpectedExecutionDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        ExpectedSettlementDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Initiation: z
          .strictObject({
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorPostalAddress: OBPostalAddress6Schema.exactOptional(),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.',
            required: [
              'InstructionIdentification',
              'RequestedExecutionDateTime',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
        Permission: z
          .literal('Create')
          .openapi({ description: 'Specifies the Open Banking service request types.' }),
        ReadRefundAccount: z
          .enum(['No', 'Yes'])
          .exactOptional()
          .openapi({ description: 'Specifies to share the refund account details with PISP' }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
        Status: z
          .enum(['Authorised', 'AwaitingAuthorisation', 'Consumed', 'Rejected'])
          .openapi({ description: 'Specifies the status of consent resource in code form.' }),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the consent resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: [
          'ConsentId',
          'CreationDateTime',
          'Status',
          'StatusUpdateDateTime',
          'Permission',
          'Initiation',
        ],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteDomesticScheduledConsentResponse5')

const OBWriteDomesticScheduledResponse5Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Charges: z
          .array(
            z
              .strictObject({
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                ChargeBearer: OBChargeBearerType1CodeSchema,
                Type: OBExternalPaymentChargeType1CodeSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the message was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
        DomesticScheduledPaymentId: z
          .string()
          .min(1)
          .max(40)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the domestic schedule payment resource.',
          }),
        ExpectedExecutionDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        ExpectedSettlementDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Initiation: z
          .strictObject({
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorPostalAddress: OBPostalAddress6Schema.exactOptional(),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.',
            required: [
              'InstructionIdentification',
              'RequestedExecutionDateTime',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
        MultiAuthorisation: z
          .strictObject({
            ExpirationDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            LastUpdateDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            NumberReceived: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of authorisations received.' }),
            NumberRequired: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Number of authorisations required for payment order (total required at the start of the multi authorisation journey).',
              }),
            Status: z
              .enum(['Authorised', 'AwaitingFurtherAuthorisation', 'Rejected'])
              .openapi({
                description: 'Specifies the status of the authorisation flow in code form.',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The multiple authorisation flow response from the ASPSP.',
            required: ['Status'],
          }),
        Refund: z
          .strictObject({
            Account: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'Name of the account, as assigned by the account servicing institution.\nUsage: The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description: 'Provides the details to identify an account.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.',
            required: ['Account'],
          }),
        Status: z
          .enum(['Cancelled', 'InitiationCompleted', 'InitiationFailed', 'InitiationPending'])
          .openapi({ description: 'Specifies the status of the payment order resource.' }),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: [
          'DomesticScheduledPaymentId',
          'ConsentId',
          'CreationDateTime',
          'Status',
          'StatusUpdateDateTime',
          'Initiation',
        ],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWriteDomesticScheduledResponse5')

const OBWriteDomesticStandingOrder3Schema = z
  .strictObject({
    Data: z
      .strictObject({
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        Initiation: z
          .strictObject({
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Identification assigned by an institution to identify an account. This identification is known by the account owner.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Provides the details to identify the debtor account.',
                required: ['SchemeName', 'Identification'],
              }),
            FinalPaymentAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .exactOptional()
              .openapi({
                description: 'The amount of the final Standing Order',
                required: ['Amount', 'Currency'],
              }),
            FinalPaymentDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            FirstPaymentAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description: 'The amount of the first Standing Order',
                required: ['Amount', 'Currency'],
              }),
            FirstPaymentDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  'The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            Frequency: z
              .string()
              .regex(
                /^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$/,
              )
              .openapi({
                description:
                  'Individual Definitions:\nEvryDay - Every day\nEvryWorkgDay - Every working day\nIntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)\nWkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)\nIntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)\nQtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED). \nENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. \nSCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.\nRECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. \nIndividual Patterns:\nEvryDay (ScheduleCode)\nEvryWorkgDay (ScheduleCode)\nIntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)\nWkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)\nIntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)\nQtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay\nThe regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:\nEvryDay\nEvryWorkgDay\nIntrvlWkDay:0[1-9]:0[1-7]\nWkInMnthDay:0[1-5]:0[1-7]\nIntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])\nQtrDay:(ENGLISH|SCOTTISH|RECEIVED)\nFull Regular Expression:\n^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$',
              }),
            NumberOfPayments: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  'Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.',
              }),
            RecurringPaymentAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .exactOptional()
              .openapi({
                description: 'The amount of the recurring Standing Order',
                required: ['Amount', 'Currency'],
              }),
            RecurringPaymentDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The date on which the first recurring payment for a Standing Order schedule will be made. \nUsage: This must be populated only if the first recurring date is different to the first payment date.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            Reference: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.',
            required: [
              'Frequency',
              'FirstPaymentDateTime',
              'FirstPaymentAmount',
              'CreditorAccount',
            ],
          }),
      })
      .openapi({ required: ['ConsentId', 'Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteDomesticStandingOrder3')

const OBWriteDomesticStandingOrderConsent5Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single'])
              .openapi({ description: 'Type of authorisation flow requested.' }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The authorisation type request from the TPP.',
            required: ['AuthorisationType'],
          }),
        Initiation: z
          .strictObject({
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Identification assigned by an institution to identify an account. This identification is known by the account owner.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Provides the details to identify the debtor account.',
                required: ['SchemeName', 'Identification'],
              }),
            FinalPaymentAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .exactOptional()
              .openapi({
                description: 'The amount of the final Standing Order',
                required: ['Amount', 'Currency'],
              }),
            FinalPaymentDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            FirstPaymentAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description: 'The amount of the first Standing Order',
                required: ['Amount', 'Currency'],
              }),
            FirstPaymentDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  'The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            Frequency: z
              .string()
              .regex(
                /^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$/,
              )
              .openapi({
                description:
                  'Individual Definitions:\nEvryDay - Every day\nEvryWorkgDay - Every working day\nIntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)\nWkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)\nIntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)\nQtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED). \nENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. \nSCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.\nRECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. \nIndividual Patterns:\nEvryDay (ScheduleCode)\nEvryWorkgDay (ScheduleCode)\nIntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)\nWkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)\nIntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)\nQtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay\nThe regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:\nEvryDay\nEvryWorkgDay\nIntrvlWkDay:0[1-9]:0[1-7]\nWkInMnthDay:0[1-5]:0[1-7]\nIntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])\nQtrDay:(ENGLISH|SCOTTISH|RECEIVED)\nFull Regular Expression:\n^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$',
              }),
            NumberOfPayments: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  'Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.',
              }),
            RecurringPaymentAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .exactOptional()
              .openapi({
                description: 'The amount of the recurring Standing Order',
                required: ['Amount', 'Currency'],
              }),
            RecurringPaymentDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The date on which the first recurring payment for a Standing Order schedule will be made. \nUsage: This must be populated only if the first recurring date is different to the first payment date.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            Reference: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.',
            required: [
              'Frequency',
              'FirstPaymentDateTime',
              'FirstPaymentAmount',
              'CreditorAccount',
            ],
          }),
        Permission: z
          .literal('Create')
          .openapi({ description: 'Specifies the Open Banking service request types.' }),
        ReadRefundAccount: z
          .enum(['No', 'Yes'])
          .exactOptional()
          .openapi({ description: 'Specifies to share the refund account details with PISP' }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
      })
      .openapi({ required: ['Permission', 'Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteDomesticStandingOrderConsent5')

const OBWriteDomesticStandingOrderConsentResponse6Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single'])
              .openapi({ description: 'Type of authorisation flow requested.' }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The authorisation type request from the TPP.',
            required: ['AuthorisationType'],
          }),
        Charges: z
          .array(
            z
              .strictObject({
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                ChargeBearer: OBChargeBearerType1CodeSchema,
                Type: OBExternalPaymentChargeType1CodeSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        CutOffDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
        Initiation: z
          .strictObject({
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Identification assigned by an institution to identify an account. This identification is known by the account owner.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            FinalPaymentAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .exactOptional()
              .openapi({
                description: 'The amount of the final Standing Order',
                required: ['Amount', 'Currency'],
              }),
            FinalPaymentDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            FirstPaymentAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description: 'The amount of the first Standing Order',
                required: ['Amount', 'Currency'],
              }),
            FirstPaymentDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  'The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            Frequency: z
              .string()
              .regex(
                /^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$/,
              )
              .openapi({
                description:
                  'Individual Definitions:\nEvryDay - Every day\nEvryWorkgDay - Every working day\nIntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)\nWkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)\nIntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)\nQtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED). \nENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. \nSCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.\nRECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. \nIndividual Patterns:\nEvryDay (ScheduleCode)\nEvryWorkgDay (ScheduleCode)\nIntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)\nWkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)\nIntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)\nQtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay\nThe regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:\nEvryDay\nEvryWorkgDay\nIntrvlWkDay:0[1-9]:0[1-7]\nWkInMnthDay:0[1-5]:0[1-7]\nIntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])\nQtrDay:(ENGLISH|SCOTTISH|RECEIVED)\nFull Regular Expression:\n^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$',
              }),
            NumberOfPayments: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  'Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.',
              }),
            RecurringPaymentAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .exactOptional()
              .openapi({
                description: 'The amount of the recurring Standing Order',
                required: ['Amount', 'Currency'],
              }),
            RecurringPaymentDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The date on which the first recurring payment for a Standing Order schedule will be made. \nUsage: This must be populated only if the first recurring date is different to the first payment date.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            Reference: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.',
            required: [
              'Frequency',
              'FirstPaymentDateTime',
              'FirstPaymentAmount',
              'CreditorAccount',
            ],
          }),
        Permission: z
          .literal('Create')
          .openapi({ description: 'Specifies the Open Banking service request types.' }),
        ReadRefundAccount: z
          .enum(['No', 'Yes'])
          .exactOptional()
          .openapi({ description: 'Specifies to share the refund account details with PISP' }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
        Status: z
          .enum(['Authorised', 'AwaitingAuthorisation', 'Consumed', 'Rejected'])
          .openapi({ description: 'Specifies the status of consent resource in code form.' }),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: [
          'ConsentId',
          'CreationDateTime',
          'Status',
          'StatusUpdateDateTime',
          'Permission',
          'Initiation',
        ],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteDomesticStandingOrderConsentResponse6')

const OBWriteDomesticStandingOrderResponse6Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Charges: z
          .array(
            z
              .strictObject({
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                ChargeBearer: OBChargeBearerType1CodeSchema,
                Type: OBExternalPaymentChargeType1CodeSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
        DomesticStandingOrderId: z
          .string()
          .min(1)
          .max(40)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the domestic standing order resource.',
          }),
        Initiation: z
          .strictObject({
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Identification assigned by an institution to identify an account. This identification is known by the account owner.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            FinalPaymentAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .exactOptional()
              .openapi({
                description: 'The amount of the final Standing Order',
                required: ['Amount', 'Currency'],
              }),
            FinalPaymentDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            FirstPaymentAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description: 'The amount of the first Standing Order',
                required: ['Amount', 'Currency'],
              }),
            FirstPaymentDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  'The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            Frequency: z
              .string()
              .regex(
                /^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$/,
              )
              .openapi({
                description:
                  'Individual Definitions:\nEvryDay - Every day\nEvryWorkgDay - Every working day\nIntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)\nWkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)\nIntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)\nQtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED). \nENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. \nSCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.\nRECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. \nIndividual Patterns:\nEvryDay (ScheduleCode)\nEvryWorkgDay (ScheduleCode)\nIntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)\nWkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)\nIntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)\nQtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay\nThe regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:\nEvryDay\nEvryWorkgDay\nIntrvlWkDay:0[1-9]:0[1-7]\nWkInMnthDay:0[1-5]:0[1-7]\nIntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])\nQtrDay:(ENGLISH|SCOTTISH|RECEIVED)\nFull Regular Expression:\n^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$',
              }),
            NumberOfPayments: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  'Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.',
              }),
            RecurringPaymentAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .exactOptional()
              .openapi({
                description: 'The amount of the recurring Standing Order',
                required: ['Amount', 'Currency'],
              }),
            RecurringPaymentDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The date on which the first recurring payment for a Standing Order schedule will be made. \nUsage: This must be populated only if the first recurring date is different to the first payment date.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            Reference: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.',
            required: [
              'Frequency',
              'FirstPaymentDateTime',
              'FirstPaymentAmount',
              'CreditorAccount',
            ],
          }),
        MultiAuthorisation: z
          .strictObject({
            ExpirationDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            LastUpdateDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            NumberReceived: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of authorisations received.' }),
            NumberRequired: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Number of authorisations required for payment order (total required at the start of the multi authorisation journey).',
              }),
            Status: z
              .enum(['Authorised', 'AwaitingFurtherAuthorisation', 'Rejected'])
              .openapi({
                description: 'Specifies the status of the authorisation flow in code form.',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The multiple authorisation flow response from the ASPSP.',
            required: ['Status'],
          }),
        Refund: z
          .strictObject({
            Account: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'Name of the account, as assigned by the account servicing institution.\nUsage: The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description: 'Provides the details to identify an account.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.',
            required: ['Account'],
          }),
        Status: z
          .enum(['Cancelled', 'InitiationCompleted', 'InitiationFailed', 'InitiationPending'])
          .openapi({ description: 'Specifies the status of the payment order resource.' }),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: [
          'DomesticStandingOrderId',
          'ConsentId',
          'CreationDateTime',
          'Status',
          'StatusUpdateDateTime',
          'Initiation',
        ],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWriteDomesticStandingOrderResponse6')

const OBWriteFile2Schema = z
  .strictObject({
    Data: z
      .strictObject({
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        Initiation: z
          .strictObject({
            ControlSum: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Total of all individual amounts included in the group, irrespective of currencies.',
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            FileHash: z
              .string()
              .min(1)
              .max(44)
              .openapi({
                description: 'A base64 encoding of a SHA256 hash of the file to be uploaded.',
              }),
            FileReference: z
              .string()
              .min(1)
              .max(40)
              .exactOptional()
              .openapi({ description: 'Reference for the file.' }),
            FileType: z
              .string()
              .openapi({
                description: 'Specifies the payment file type.',
                'x-namespaced-enum': ['UK.OBIE.PaymentInitiation.3.1', 'UK.OBIE.pain.001.001.08'],
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            NumberOfTransactions: z
              .string()
              .regex(/[0-9]{1,15}/)
              .exactOptional()
              .openapi({
                description:
                  'Number of individual transactions contained in the payment information group.',
              }),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.',
            required: ['FileType', 'FileHash'],
          }),
      })
      .openapi({ required: ['ConsentId', 'Initiation'] }),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWriteFile2')

const OBWriteFileConsent3Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single'])
              .openapi({ description: 'Type of authorisation flow requested.' }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The authorisation type request from the TPP.',
            required: ['AuthorisationType'],
          }),
        Initiation: z
          .strictObject({
            ControlSum: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Total of all individual amounts included in the group, irrespective of currencies.',
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            FileHash: z
              .string()
              .min(1)
              .max(44)
              .openapi({
                description: 'A base64 encoding of a SHA256 hash of the file to be uploaded.',
              }),
            FileReference: z
              .string()
              .min(1)
              .max(40)
              .exactOptional()
              .openapi({ description: 'Reference for the file.' }),
            FileType: z
              .string()
              .openapi({
                description: 'Specifies the payment file type.',
                'x-namespaced-enum': ['UK.OBIE.PaymentInitiation.3.1', 'UK.OBIE.pain.001.001.08'],
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            NumberOfTransactions: z
              .string()
              .regex(/[0-9]{1,15}/)
              .exactOptional()
              .openapi({
                description:
                  'Number of individual transactions contained in the payment information group.',
              }),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.',
            required: ['FileType', 'FileHash'],
          }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
      })
      .openapi({ required: ['Initiation'] }),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWriteFileConsent3')

const OBWriteFileConsentResponse4Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single'])
              .openapi({ description: 'Type of authorisation flow requested.' }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The authorisation type request from the TPP.',
            required: ['AuthorisationType'],
          }),
        Charges: z
          .array(
            z
              .strictObject({
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                ChargeBearer: OBChargeBearerType1CodeSchema,
                Type: OBExternalPaymentChargeType1CodeSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        CutOffDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
        Initiation: z
          .strictObject({
            ControlSum: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Total of all individual amounts included in the group, irrespective of currencies.',
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            FileHash: z
              .string()
              .min(1)
              .max(44)
              .openapi({
                description: 'A base64 encoding of a SHA256 hash of the file to be uploaded.',
              }),
            FileReference: z
              .string()
              .min(1)
              .max(40)
              .exactOptional()
              .openapi({ description: 'Reference for the file.' }),
            FileType: z
              .string()
              .openapi({
                description: 'Specifies the payment file type.',
                'x-namespaced-enum': ['UK.OBIE.PaymentInitiation.3.1', 'UK.OBIE.pain.001.001.08'],
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            NumberOfTransactions: z
              .string()
              .regex(/[0-9]{1,15}/)
              .exactOptional()
              .openapi({
                description:
                  'Number of individual transactions contained in the payment information group.',
              }),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.',
            required: ['FileType', 'FileHash'],
          }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
        Status: z
          .enum(['Authorised', 'AwaitingAuthorisation', 'AwaitingUpload', 'Consumed', 'Rejected'])
          .openapi({ description: 'Specifies the status of consent resource in code form.' }),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the consent resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: ['ConsentId', 'CreationDateTime', 'Status', 'StatusUpdateDateTime', 'Initiation'],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWriteFileConsentResponse4')

const OBWriteFileResponse3Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Charges: z
          .array(
            z
              .strictObject({
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                ChargeBearer: OBChargeBearerType1CodeSchema,
                Type: OBExternalPaymentChargeType1CodeSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the message was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
        FilePaymentId: z
          .string()
          .min(1)
          .max(40)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the file payment resource.',
          }),
        Initiation: z
          .strictObject({
            ControlSum: z
              .number()
              .exactOptional()
              .openapi({
                description:
                  'Total of all individual amounts included in the group, irrespective of currencies.',
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            FileHash: z
              .string()
              .min(1)
              .max(44)
              .openapi({
                description: 'A base64 encoding of a SHA256 hash of the file to be uploaded.',
              }),
            FileReference: z
              .string()
              .min(1)
              .max(40)
              .exactOptional()
              .openapi({ description: 'Reference for the file.' }),
            FileType: z
              .string()
              .openapi({
                description: 'Specifies the payment file type.',
                'x-namespaced-enum': ['UK.OBIE.PaymentInitiation.3.1', 'UK.OBIE.pain.001.001.08'],
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            NumberOfTransactions: z
              .string()
              .regex(/[0-9]{1,15}/)
              .exactOptional()
              .openapi({
                description:
                  'Number of individual transactions contained in the payment information group.',
              }),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.',
            required: ['FileType', 'FileHash'],
          }),
        MultiAuthorisation: z
          .strictObject({
            ExpirationDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            LastUpdateDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            NumberReceived: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of authorisations received.' }),
            NumberRequired: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Number of authorisations required for payment order (total required at the start of the multi authorisation journey).',
              }),
            Status: z
              .enum(['Authorised', 'AwaitingFurtherAuthorisation', 'Rejected'])
              .openapi({
                description: 'Specifies the status of the authorisation flow in code form.',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The multiple authorisation flow response from the ASPSP.',
            required: ['Status'],
          }),
        Status: z
          .enum(['InitiationCompleted', 'InitiationFailed', 'InitiationPending'])
          .openapi({ description: 'Specifies the status of the payment order resource.' }),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: [
          'FilePaymentId',
          'ConsentId',
          'CreationDateTime',
          'Status',
          'StatusUpdateDateTime',
          'Initiation',
        ],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWriteFileResponse3')

const OBWriteFundsConfirmationResponse1Schema = z
  .strictObject({
    Data: z
      .strictObject({
        FundsAvailableResult: z
          .strictObject({
            FundsAvailable: z
              .boolean()
              .openapi({
                description:
                  'Flag to indicate the availability of funds given the Amount in the consent request.',
              }),
            FundsAvailableDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  'Date and time at which the funds availability check was generated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'Result of a funds availability check.',
            required: ['FundsAvailableDateTime', 'FundsAvailable'],
          }),
        SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
      })
      .openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWriteFundsConfirmationResponse1')

const OBWriteInternational3Schema = z
  .strictObject({
    Data: z
      .strictObject({
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        Initiation: z
          .strictObject({
            ChargeBearer: OBChargeBearerType1CodeSchema.exactOptional(),
            Creditor: z
              .strictObject({
                Name: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      'Name by which a party is known and which is usually used to identify that party.',
                  }),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Party to which an amount of money is due.', required: [] }),
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorAgent: z
              .strictObject({
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
                SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            CurrencyOfTransfer: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            DestinationCountryCode: z
              .string()
              .regex(/[A-Z]{2,2}/)
              .exactOptional()
              .openapi({
                description:
                  'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            ExchangeRateInformation: z
              .strictObject({
                ContractIdentification: z
                  .string()
                  .min(1)
                  .max(256)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                  }),
                ExchangeRate: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.',
                  }),
                RateType: z
                  .enum(['Actual', 'Agreed', 'Indicative'])
                  .openapi({
                    description: 'Specifies the type used to complete the currency exchange.',
                  }),
                UnitCurrency: z
                  .string()
                  .regex(/^[A-Z]{3,3}$/)
                  .openapi({
                    description:
                      'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
                  }),
              })
              .exactOptional()
              .openapi({
                description: 'Provides details on the currency exchange rate and contract.',
                required: ['UnitCurrency', 'RateType'],
              }),
            ExtendedPurpose: z
              .string()
              .min(1)
              .max(140)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            InstructionPriority: z
              .enum(['Normal', 'Urgent'])
              .exactOptional()
              .openapi({
                description:
                  'Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.',
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            Purpose: z
              .string()
              .min(1)
              .max(4)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the external purpose code in the format of character string with a maximum length of 4 characters.\nThe list of valid codes is an external code list published separately.\nExternal code sets can be downloaded from www.iso20022.org.',
              }),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.',
            required: [
              'InstructionIdentification',
              'EndToEndIdentification',
              'CurrencyOfTransfer',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
      })
      .openapi({ required: ['ConsentId', 'Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteInternational3')

const OBWriteInternationalConsent5Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single'])
              .openapi({ description: 'Type of authorisation flow requested.' }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The authorisation type request from the TPP.',
            required: ['AuthorisationType'],
          }),
        Initiation: z
          .strictObject({
            ChargeBearer: OBChargeBearerType1CodeSchema.exactOptional(),
            Creditor: z
              .strictObject({
                Name: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      'Name by which a party is known and which is usually used to identify that party.',
                  }),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Party to which an amount of money is due.', required: [] }),
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorAgent: z
              .strictObject({
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
                SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            CurrencyOfTransfer: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            DestinationCountryCode: z
              .string()
              .regex(/[A-Z]{2,2}/)
              .exactOptional()
              .openapi({
                description:
                  'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            ExchangeRateInformation: z
              .strictObject({
                ContractIdentification: z
                  .string()
                  .min(1)
                  .max(256)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                  }),
                ExchangeRate: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.',
                  }),
                RateType: z
                  .enum(['Actual', 'Agreed', 'Indicative'])
                  .openapi({
                    description: 'Specifies the type used to complete the currency exchange.',
                  }),
                UnitCurrency: z
                  .string()
                  .regex(/^[A-Z]{3,3}$/)
                  .openapi({
                    description:
                      'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
                  }),
              })
              .exactOptional()
              .openapi({
                description: 'Provides details on the currency exchange rate and contract.',
                required: ['UnitCurrency', 'RateType'],
              }),
            ExtendedPurpose: z
              .string()
              .min(1)
              .max(140)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            InstructionPriority: z
              .enum(['Normal', 'Urgent'])
              .exactOptional()
              .openapi({
                description:
                  'Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.',
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            Purpose: z
              .string()
              .min(1)
              .max(4)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the external purpose code in the format of character string with a maximum length of 4 characters.\nThe list of valid codes is an external code list published separately.\nExternal code sets can be downloaded from www.iso20022.org.',
              }),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.',
            required: [
              'InstructionIdentification',
              'EndToEndIdentification',
              'CurrencyOfTransfer',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
        ReadRefundAccount: z
          .enum(['No', 'Yes'])
          .exactOptional()
          .openapi({ description: 'Specifies to share the refund account details with PISP' }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
      })
      .openapi({ required: ['Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteInternationalConsent5')

const OBWriteInternationalConsentResponse6Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single'])
              .openapi({ description: 'Type of authorisation flow requested.' }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The authorisation type request from the TPP.',
            required: ['AuthorisationType'],
          }),
        Charges: z
          .array(
            z
              .strictObject({
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                ChargeBearer: OBChargeBearerType1CodeSchema,
                Type: OBExternalPaymentChargeType1CodeSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        CutOffDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
        ExchangeRateInformation: z
          .strictObject({
            ContractIdentification: z
              .string()
              .min(1)
              .max(256)
              .exactOptional()
              .openapi({
                description:
                  'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
              }),
            ExchangeRate: z
              .number()
              .openapi({
                description:
                  'The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.',
              }),
            ExpirationDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Specified date and time the exchange rate agreement will expire.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            RateType: z
              .enum(['Actual', 'Agreed', 'Indicative'])
              .openapi({
                description: 'Specifies the type used to complete the currency exchange.',
              }),
            UnitCurrency: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'Further detailed information on the exchange rate that has been used in the payment transaction.',
            required: ['UnitCurrency', 'ExchangeRate', 'RateType'],
          }),
        ExpectedExecutionDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        ExpectedSettlementDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Initiation: z
          .strictObject({
            ChargeBearer: OBChargeBearerType1CodeSchema.exactOptional(),
            Creditor: z
              .strictObject({
                Name: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      'Name by which a party is known and which is usually used to identify that party.',
                  }),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Party to which an amount of money is due.', required: [] }),
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorAgent: z
              .strictObject({
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
                SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            CurrencyOfTransfer: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            DestinationCountryCode: z
              .string()
              .regex(/[A-Z]{2,2}/)
              .exactOptional()
              .openapi({
                description:
                  'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            ExchangeRateInformation: z
              .strictObject({
                ContractIdentification: z
                  .string()
                  .min(1)
                  .max(256)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                  }),
                ExchangeRate: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.',
                  }),
                RateType: z
                  .enum(['Actual', 'Agreed', 'Indicative'])
                  .openapi({
                    description: 'Specifies the type used to complete the currency exchange.',
                  }),
                UnitCurrency: z
                  .string()
                  .regex(/^[A-Z]{3,3}$/)
                  .openapi({
                    description:
                      'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
                  }),
              })
              .exactOptional()
              .openapi({
                description: 'Provides details on the currency exchange rate and contract.',
                required: ['UnitCurrency', 'RateType'],
              }),
            ExtendedPurpose: z
              .string()
              .min(1)
              .max(140)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            InstructionPriority: z
              .enum(['Normal', 'Urgent'])
              .exactOptional()
              .openapi({
                description:
                  'Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.',
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            Purpose: z
              .string()
              .min(1)
              .max(4)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the external purpose code in the format of character string with a maximum length of 4 characters.\nThe list of valid codes is an external code list published separately.\nExternal code sets can be downloaded from www.iso20022.org.',
              }),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.',
            required: [
              'InstructionIdentification',
              'EndToEndIdentification',
              'CurrencyOfTransfer',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
        ReadRefundAccount: z
          .enum(['No', 'Yes'])
          .exactOptional()
          .openapi({ description: 'Specifies to share the refund account details with PISP' }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
        Status: z
          .enum(['Authorised', 'AwaitingAuthorisation', 'Consumed', 'Rejected'])
          .openapi({ description: 'Specifies the status of consent resource in code form.' }),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: ['ConsentId', 'CreationDateTime', 'Status', 'StatusUpdateDateTime', 'Initiation'],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteInternationalConsentResponse6')

const OBWriteInternationalResponse5Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Charges: z
          .array(
            z
              .strictObject({
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                ChargeBearer: OBChargeBearerType1CodeSchema,
                Type: OBExternalPaymentChargeType1CodeSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the message was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
        ExchangeRateInformation: z
          .strictObject({
            ContractIdentification: z
              .string()
              .min(1)
              .max(256)
              .exactOptional()
              .openapi({
                description:
                  'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
              }),
            ExchangeRate: z
              .number()
              .openapi({
                description:
                  'The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.',
              }),
            ExpirationDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Specified date and time the exchange rate agreement will expire.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            RateType: z
              .enum(['Actual', 'Agreed', 'Indicative'])
              .openapi({
                description: 'Specifies the type used to complete the currency exchange.',
              }),
            UnitCurrency: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'Further detailed information on the exchange rate that has been used in the payment transaction.',
            required: ['UnitCurrency', 'ExchangeRate', 'RateType'],
          }),
        ExpectedExecutionDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        ExpectedSettlementDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Initiation: z
          .strictObject({
            ChargeBearer: OBChargeBearerType1CodeSchema.exactOptional(),
            Creditor: z
              .strictObject({
                Name: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      'Name by which a party is known and which is usually used to identify that party.',
                  }),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Party to which an amount of money is due.', required: [] }),
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorAgent: z
              .strictObject({
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
                SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            CurrencyOfTransfer: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            DestinationCountryCode: z
              .string()
              .regex(/[A-Z]{2,2}/)
              .exactOptional()
              .openapi({
                description:
                  'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            ExchangeRateInformation: z
              .strictObject({
                ContractIdentification: z
                  .string()
                  .min(1)
                  .max(256)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                  }),
                ExchangeRate: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.',
                  }),
                RateType: z
                  .enum(['Actual', 'Agreed', 'Indicative'])
                  .openapi({
                    description: 'Specifies the type used to complete the currency exchange.',
                  }),
                UnitCurrency: z
                  .string()
                  .regex(/^[A-Z]{3,3}$/)
                  .openapi({
                    description:
                      'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
                  }),
              })
              .exactOptional()
              .openapi({
                description: 'Provides details on the currency exchange rate and contract.',
                required: ['UnitCurrency', 'RateType'],
              }),
            ExtendedPurpose: z
              .string()
              .min(1)
              .max(140)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            InstructionPriority: z
              .enum(['Normal', 'Urgent'])
              .exactOptional()
              .openapi({
                description:
                  'Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.',
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            Purpose: z
              .string()
              .min(1)
              .max(4)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the external purpose code in the format of character string with a maximum length of 4 characters.\nThe list of valid codes is an external code list published separately.\nExternal code sets can be downloaded from www.iso20022.org.',
              }),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.',
            required: [
              'InstructionIdentification',
              'EndToEndIdentification',
              'CurrencyOfTransfer',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
        InternationalPaymentId: z
          .string()
          .min(1)
          .max(40)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the international payment resource.',
          }),
        MultiAuthorisation: z
          .strictObject({
            ExpirationDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            LastUpdateDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            NumberReceived: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of authorisations received.' }),
            NumberRequired: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Number of authorisations required for payment order (total required at the start of the multi authorisation journey).',
              }),
            Status: z
              .enum(['Authorised', 'AwaitingFurtherAuthorisation', 'Rejected'])
              .openapi({
                description: 'Specifies the status of the authorisation flow in code form.',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The multiple authorisation flow response from the ASPSP.',
            required: ['Status'],
          }),
        Refund: z
          .strictObject({
            Account: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'Name of the account, as assigned by the account servicing institution.\nUsage: The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description: 'Provides the details to identify an account.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            Agent: z
              .strictObject({
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
                SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.',
                required: [],
              }),
            Creditor: z
              .strictObject({
                Name: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      'Name by which a party is known and which is usually used to identify that party.',
                  }),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Set of elements used to identify a person or an organisation.',
                required: [],
              }),
          })
          .exactOptional()
          .openapi({ required: ['Account'] }),
        Status: z
          .enum([
            'AcceptedCreditSettlementCompleted',
            'AcceptedSettlementCompleted',
            'AcceptedSettlementInProcess',
            'AcceptedWithoutPosting',
            'Pending',
            'Rejected',
          ])
          .openapi({ description: 'Specifies the status of the payment information group.' }),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: [
          'InternationalPaymentId',
          'ConsentId',
          'CreationDateTime',
          'Status',
          'StatusUpdateDateTime',
          'Initiation',
        ],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWriteInternationalResponse5')

const OBWriteInternationalScheduled3Schema = z
  .strictObject({
    Data: z
      .strictObject({
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        Initiation: z
          .strictObject({
            ChargeBearer: OBChargeBearerType1CodeSchema.exactOptional(),
            Creditor: z
              .strictObject({
                Name: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      'Name by which a party is known and which is usually used to identify that party.',
                  }),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Party to which an amount of money is due.', required: [] }),
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorAgent: z
              .strictObject({
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
                SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            CurrencyOfTransfer: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            DestinationCountryCode: z
              .string()
              .regex(/[A-Z]{2,2}/)
              .exactOptional()
              .openapi({
                description:
                  'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            ExchangeRateInformation: z
              .strictObject({
                ContractIdentification: z
                  .string()
                  .min(1)
                  .max(256)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                  }),
                ExchangeRate: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.',
                  }),
                RateType: z
                  .enum(['Actual', 'Agreed', 'Indicative'])
                  .openapi({
                    description: 'Specifies the type used to complete the currency exchange.',
                  }),
                UnitCurrency: z
                  .string()
                  .regex(/^[A-Z]{3,3}$/)
                  .openapi({
                    description:
                      'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
                  }),
              })
              .exactOptional()
              .openapi({
                description: 'Provides details on the currency exchange rate and contract.',
                required: ['UnitCurrency', 'RateType'],
              }),
            ExtendedPurpose: z
              .string()
              .min(1)
              .max(140)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            InstructionPriority: z
              .enum(['Normal', 'Urgent'])
              .exactOptional()
              .openapi({
                description:
                  'Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.',
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            Purpose: z
              .string()
              .min(1)
              .max(4)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the external purpose code in the format of character string with a maximum length of 4 characters.\nThe list of valid codes is an external code list published separately.\nExternal code sets can be downloaded from www.iso20022.org.',
              }),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.',
            required: [
              'InstructionIdentification',
              'RequestedExecutionDateTime',
              'CurrencyOfTransfer',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
      })
      .openapi({ required: ['ConsentId', 'Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteInternationalScheduled3')

const OBWriteInternationalScheduledConsent5Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single'])
              .openapi({ description: 'Type of authorisation flow requested.' }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The authorisation type request from the TPP.',
            required: ['AuthorisationType'],
          }),
        Initiation: z
          .strictObject({
            ChargeBearer: OBChargeBearerType1CodeSchema.exactOptional(),
            Creditor: z
              .strictObject({
                Name: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      'Name by which a party is known and which is usually used to identify that party.',
                  }),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Party to which an amount of money is due.', required: [] }),
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorAgent: z
              .strictObject({
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
                SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            CurrencyOfTransfer: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            DestinationCountryCode: z
              .string()
              .regex(/[A-Z]{2,2}/)
              .exactOptional()
              .openapi({
                description:
                  'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            ExchangeRateInformation: z
              .strictObject({
                ContractIdentification: z
                  .string()
                  .min(1)
                  .max(256)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                  }),
                ExchangeRate: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.',
                  }),
                RateType: z
                  .enum(['Actual', 'Agreed', 'Indicative'])
                  .openapi({
                    description: 'Specifies the type used to complete the currency exchange.',
                  }),
                UnitCurrency: z
                  .string()
                  .regex(/^[A-Z]{3,3}$/)
                  .openapi({
                    description:
                      'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
                  }),
              })
              .exactOptional()
              .openapi({
                description: 'Provides details on the currency exchange rate and contract.',
                required: ['UnitCurrency', 'RateType'],
              }),
            ExtendedPurpose: z
              .string()
              .min(1)
              .max(140)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            InstructionPriority: z
              .enum(['Normal', 'Urgent'])
              .exactOptional()
              .openapi({
                description:
                  'Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.',
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            Purpose: z
              .string()
              .min(1)
              .max(4)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the external purpose code in the format of character string with a maximum length of 4 characters.\nThe list of valid codes is an external code list published separately.\nExternal code sets can be downloaded from www.iso20022.org.',
              }),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.',
            required: [
              'InstructionIdentification',
              'RequestedExecutionDateTime',
              'CurrencyOfTransfer',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
        Permission: z
          .literal('Create')
          .openapi({ description: 'Specifies the Open Banking service request types.' }),
        ReadRefundAccount: z
          .enum(['No', 'Yes'])
          .exactOptional()
          .openapi({ description: 'Specifies to share the refund account details with PISP' }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
      })
      .openapi({ required: ['Permission', 'Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteInternationalScheduledConsent5')

const OBWriteInternationalScheduledConsentResponse6Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single'])
              .openapi({ description: 'Type of authorisation flow requested.' }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The authorisation type request from the TPP.',
            required: ['AuthorisationType'],
          }),
        Charges: z
          .array(
            z
              .strictObject({
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                ChargeBearer: OBChargeBearerType1CodeSchema,
                Type: OBExternalPaymentChargeType1CodeSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        CutOffDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
        ExchangeRateInformation: z
          .strictObject({
            ContractIdentification: z
              .string()
              .min(1)
              .max(256)
              .exactOptional()
              .openapi({
                description:
                  'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
              }),
            ExchangeRate: z
              .number()
              .openapi({
                description:
                  'The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.',
              }),
            ExpirationDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Specified date and time the exchange rate agreement will expire.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            RateType: z
              .enum(['Actual', 'Agreed', 'Indicative'])
              .openapi({
                description: 'Specifies the type used to complete the currency exchange.',
              }),
            UnitCurrency: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'Further detailed information on the exchange rate that has been used in the payment transaction.',
            required: ['UnitCurrency', 'ExchangeRate', 'RateType'],
          }),
        ExpectedExecutionDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        ExpectedSettlementDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Initiation: z
          .strictObject({
            ChargeBearer: OBChargeBearerType1CodeSchema.exactOptional(),
            Creditor: z
              .strictObject({
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      'Name by which a party is known and which is usually used to identify that party.',
                  }),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Party to which an amount of money is due.', required: [] }),
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorAgent: z
              .strictObject({
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
                SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            CurrencyOfTransfer: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            DestinationCountryCode: z
              .string()
              .regex(/[A-Z]{2,2}/)
              .exactOptional()
              .openapi({
                description:
                  'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            ExchangeRateInformation: z
              .strictObject({
                ContractIdentification: z
                  .string()
                  .min(1)
                  .max(256)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                  }),
                ExchangeRate: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.',
                  }),
                RateType: z
                  .enum(['Actual', 'Agreed', 'Indicative'])
                  .openapi({
                    description: 'Specifies the type used to complete the currency exchange.',
                  }),
                UnitCurrency: z
                  .string()
                  .regex(/^[A-Z]{3,3}$/)
                  .openapi({
                    description:
                      'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
                  }),
              })
              .exactOptional()
              .openapi({
                description: 'Provides details on the currency exchange rate and contract.',
                required: ['UnitCurrency', 'RateType'],
              }),
            ExtendedPurpose: z
              .string()
              .min(1)
              .max(140)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            InstructionPriority: z
              .enum(['Normal', 'Urgent'])
              .exactOptional()
              .openapi({
                description:
                  'Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.',
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            Purpose: z
              .string()
              .min(1)
              .max(4)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the external purpose code in the format of character string with a maximum length of 4 characters.\nThe list of valid codes is an external code list published separately.\nExternal code sets can be downloaded from www.iso20022.org.',
              }),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.',
            required: [
              'InstructionIdentification',
              'RequestedExecutionDateTime',
              'CurrencyOfTransfer',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
        Permission: z
          .literal('Create')
          .openapi({ description: 'Specifies the Open Banking service request types.' }),
        ReadRefundAccount: z
          .enum(['No', 'Yes'])
          .exactOptional()
          .openapi({ description: 'Specifies to share the refund account details with PISP' }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
        Status: z
          .enum(['Authorised', 'AwaitingAuthorisation', 'Consumed', 'Rejected'])
          .openapi({ description: 'Specifies the status of consent resource in code form.' }),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: [
          'ConsentId',
          'CreationDateTime',
          'Status',
          'StatusUpdateDateTime',
          'Permission',
          'Initiation',
        ],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteInternationalScheduledConsentResponse6')

const OBWriteInternationalScheduledResponse6Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Charges: z
          .array(
            z
              .strictObject({
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                ChargeBearer: OBChargeBearerType1CodeSchema,
                Type: OBExternalPaymentChargeType1CodeSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the message was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
        ExchangeRateInformation: z
          .strictObject({
            ContractIdentification: z
              .string()
              .min(1)
              .max(256)
              .exactOptional()
              .openapi({
                description:
                  'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
              }),
            ExchangeRate: z
              .number()
              .openapi({
                description:
                  'The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.',
              }),
            ExpirationDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Specified date and time the exchange rate agreement will expire.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            RateType: z
              .enum(['Actual', 'Agreed', 'Indicative'])
              .openapi({
                description: 'Specifies the type used to complete the currency exchange.',
              }),
            UnitCurrency: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
              }),
          })
          .exactOptional()
          .openapi({
            description:
              'Further detailed information on the exchange rate that has been used in the payment transaction.',
            required: ['UnitCurrency', 'ExchangeRate', 'RateType'],
          }),
        ExpectedExecutionDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected execution date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        ExpectedSettlementDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Expected settlement date and time for the payment resource.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Initiation: z
          .strictObject({
            ChargeBearer: OBChargeBearerType1CodeSchema.exactOptional(),
            Creditor: z
              .strictObject({
                Name: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      'Name by which a party is known and which is usually used to identify that party.',
                  }),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Party to which an amount of money is due.', required: [] }),
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description:
                  'Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorAgent: z
              .strictObject({
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
                SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Financial institution servicing an account for the creditor.',
                required: [],
              }),
            CurrencyOfTransfer: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            DestinationCountryCode: z
              .string()
              .regex(/[A-Z]{2,2}/)
              .exactOptional()
              .openapi({
                description:
                  'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
              }),
            EndToEndIdentification: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  'Unique identification assigned by the initiating party to unambiguously identify the transaction. This identification is passed on, unchanged, throughout the entire end-to-end chain.\nUsage: The end-to-end identification can be used for reconciliation or to link tasks relating to the transaction. It can be included in several messages related to the transaction.\nOB: The Faster Payments Scheme can only access 31 characters for the EndToEndIdentification field.',
              }),
            ExchangeRateInformation: z
              .strictObject({
                ContractIdentification: z
                  .string()
                  .min(1)
                  .max(256)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous reference to the foreign exchange contract agreed between the initiating party/creditor and the debtor agent.',
                  }),
                ExchangeRate: z
                  .number()
                  .exactOptional()
                  .openapi({
                    description:
                      'The factor used for conversion of an amount from one currency to another. This reflects the price at which one currency was bought with another currency.',
                  }),
                RateType: z
                  .enum(['Actual', 'Agreed', 'Indicative'])
                  .openapi({
                    description: 'Specifies the type used to complete the currency exchange.',
                  }),
                UnitCurrency: z
                  .string()
                  .regex(/^[A-Z]{3,3}$/)
                  .openapi({
                    description:
                      'Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.',
                  }),
              })
              .exactOptional()
              .openapi({
                description: 'Provides details on the currency exchange rate and contract.',
                required: ['UnitCurrency', 'RateType'],
              }),
            ExtendedPurpose: z
              .string()
              .min(1)
              .max(140)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            InstructionIdentification: z
              .string()
              .min(1)
              .max(35)
              .openapi({
                description:
                  'Unique identification as assigned by an instructing party for an instructed party to unambiguously identify the instruction.\nUsage: the  instruction identification is a point to point reference that can be used between the instructing party and the instructed party to refer to the individual instruction. It can be included in several messages related to the instruction.',
              }),
            InstructionPriority: z
              .enum(['Normal', 'Urgent'])
              .exactOptional()
              .openapi({
                description:
                  'Indicator of the urgency or order of importance that the instructing party would like the instructed party to apply to the processing of the instruction.',
              }),
            LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
            Purpose: z
              .string()
              .min(1)
              .max(4)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the external purpose code in the format of character string with a maximum length of 4 characters.\nThe list of valid codes is an external code list published separately.\nExternal code sets can be downloaded from www.iso20022.org.',
              }),
            RemittanceInformation: z
              .strictObject({
                Reference: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.\nOB: The Faster Payments Scheme can only accept 18 characters for the ReferenceInformation field - which is where this ISO field will be mapped.",
                  }),
                Unstructured: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      "Information supplied to enable the matching/reconciliation of an entry with the items that the payment is intended to settle, such as commercial invoices in an accounts' receivable system, in an unstructured form.",
                  }),
              })
              .exactOptional()
              .openapi({
                description:
                  "Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.",
                required: [],
              }),
            RequestedExecutionDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  "Date at which the initiating party requests the clearing agent to process the payment. \nUsage: This is the date on which the debtor's account is to be debited.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.',
            required: [
              'InstructionIdentification',
              'RequestedExecutionDateTime',
              'CurrencyOfTransfer',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
        InternationalScheduledPaymentId: z
          .string()
          .min(1)
          .max(40)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the international scheduled payment resource.',
          }),
        MultiAuthorisation: z
          .strictObject({
            ExpirationDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            LastUpdateDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            NumberReceived: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of authorisations received.' }),
            NumberRequired: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Number of authorisations required for payment order (total required at the start of the multi authorisation journey).',
              }),
            Status: z
              .enum(['Authorised', 'AwaitingFurtherAuthorisation', 'Rejected'])
              .openapi({
                description: 'Specifies the status of the authorisation flow in code form.',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The multiple authorisation flow response from the ASPSP.',
            required: ['Status'],
          }),
        Refund: z
          .strictObject({
            Account: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'Name of the account, as assigned by the account servicing institution.\nUsage: The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description: 'Provides the details to identify an account.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            Agent: z
              .strictObject({
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
                SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.',
                required: [],
              }),
            Creditor: z
              .strictObject({
                Name: z
                  .string()
                  .min(1)
                  .max(140)
                  .exactOptional()
                  .openapi({
                    description:
                      'Name by which a party is known and which is usually used to identify that party.',
                  }),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Set of elements used to identify a person or an organisation.',
                required: [],
              }),
          })
          .exactOptional()
          .openapi({ required: ['Account'] }),
        Status: z
          .enum(['Cancelled', 'InitiationCompleted', 'InitiationFailed', 'InitiationPending'])
          .openapi({ description: 'Specifies the status of the payment order resource.' }),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: [
          'InternationalScheduledPaymentId',
          'ConsentId',
          'CreationDateTime',
          'Status',
          'StatusUpdateDateTime',
          'Initiation',
        ],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWriteInternationalScheduledResponse6')

const OBWriteInternationalStandingOrder4Schema = z
  .strictObject({
    Data: z
      .strictObject({
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        Initiation: z
          .strictObject({
            ChargeBearer: OBChargeBearerType1CodeSchema.exactOptional(),
            Creditor: z
              .strictObject({
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      'Name by which a party is known and which is usually used to identify that party.',
                  }),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Party to which an amount of money is due.', required: [] }),
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description: 'Provides the details to identify the beneficiary account.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorAgent: z
              .strictObject({
                Identification: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous identification of the servicing institution.',
                  }),
                Name: NameSchema.exactOptional(),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
                SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.\nThis is the servicer of the beneficiary account.',
                required: [],
              }),
            CurrencyOfTransfer: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Provides the details to identify the debtor account.',
                required: ['SchemeName', 'Identification'],
              }),
            DestinationCountryCode: z
              .string()
              .regex(/[A-Z]{2,2}/)
              .exactOptional()
              .openapi({
                description:
                  'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
              }),
            ExtendedPurpose: z
              .string()
              .min(1)
              .max(140)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.',
              }),
            FinalPaymentDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            FirstPaymentDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  'The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            Frequency: z
              .string()
              .regex(
                /^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$/,
              )
              .openapi({
                description:
                  'Individual Definitions:\nEvryDay - Every day\nEvryWorkgDay - Every working day\nIntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)\nWkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)\nIntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)\nQtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED). \nENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. \nSCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.\nRECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. \nIndividual Patterns:\nEvryDay (ScheduleCode)\nEvryWorkgDay (ScheduleCode)\nIntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)\nWkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)\nIntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)\nQtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay\nThe regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:\nEvryDay\nEvryWorkgDay\nIntrvlWkDay:0[1-9]:0[1-7]\nWkInMnthDay:0[1-5]:0[1-7]\nIntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])\nQtrDay:(ENGLISH|SCOTTISH|RECEIVED)\nFull Regular Expression:\n^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            NumberOfPayments: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  'Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.',
              }),
            Purpose: z
              .string()
              .min(1)
              .max(4)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the external purpose code in the format of character string with a maximum length of 4 characters.\nThe list of valid codes is an external code list published separately.\nExternal code sets can be downloaded from www.iso20022.org.',
              }),
            Reference: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.',
            required: [
              'Frequency',
              'FirstPaymentDateTime',
              'CurrencyOfTransfer',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
      })
      .openapi({ required: ['ConsentId', 'Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteInternationalStandingOrder4')

const OBWriteInternationalStandingOrderConsent6Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single'])
              .openapi({ description: 'Type of authorisation flow requested.' }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The authorisation type request from the TPP.',
            required: ['AuthorisationType'],
          }),
        Initiation: z
          .strictObject({
            ChargeBearer: OBChargeBearerType1CodeSchema.exactOptional(),
            Creditor: z
              .strictObject({
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      'Name by which a party is known and which is usually used to identify that party.',
                  }),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Party to which an amount of money is due.', required: [] }),
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description: 'Provides the details to identify the beneficiary account.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorAgent: z
              .strictObject({
                Identification: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous identification of the servicing institution.',
                  }),
                Name: NameSchema.exactOptional(),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
                SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.\nThis is the servicer of the beneficiary account.',
                required: [],
              }),
            CurrencyOfTransfer: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Provides the details to identify the debtor account.',
                required: ['SchemeName', 'Identification'],
              }),
            DestinationCountryCode: z
              .string()
              .regex(/[A-Z]{2,2}/)
              .exactOptional()
              .openapi({
                description:
                  'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
              }),
            ExtendedPurpose: z
              .string()
              .min(1)
              .max(140)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.',
              }),
            FinalPaymentDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            FirstPaymentDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  'The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            Frequency: z
              .string()
              .regex(
                /^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$/,
              )
              .openapi({
                description:
                  'Individual Definitions:\nEvryDay - Every day\nEvryWorkgDay - Every working day\nIntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)\nWkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)\nIntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)\nQtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED). \nENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. \nSCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.\nRECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. \nIndividual Patterns:\nEvryDay (ScheduleCode)\nEvryWorkgDay (ScheduleCode)\nIntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)\nWkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)\nIntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)\nQtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay\nThe regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:\nEvryDay\nEvryWorkgDay\nIntrvlWkDay:0[1-9]:0[1-7]\nWkInMnthDay:0[1-5]:0[1-7]\nIntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])\nQtrDay:(ENGLISH|SCOTTISH|RECEIVED)\nFull Regular Expression:\n^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            NumberOfPayments: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  'Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.',
              }),
            Purpose: z
              .string()
              .min(1)
              .max(4)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the external purpose code in the format of character string with a maximum length of 4 characters.\nThe list of valid codes is an external code list published separately.\nExternal code sets can be downloaded from www.iso20022.org.',
              }),
            Reference: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.',
            required: [
              'Frequency',
              'FirstPaymentDateTime',
              'CurrencyOfTransfer',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
        Permission: z
          .literal('Create')
          .openapi({ description: 'Specifies the Open Banking service request types.' }),
        ReadRefundAccount: z
          .enum(['No', 'Yes'])
          .exactOptional()
          .openapi({ description: 'Specifies to share the refund account details with PISP' }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
      })
      .openapi({ required: ['Permission', 'Initiation'] }),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteInternationalStandingOrderConsent6')

const OBWriteInternationalStandingOrderConsentResponse7Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Authorisation: z
          .strictObject({
            AuthorisationType: z
              .enum(['Any', 'Single'])
              .openapi({ description: 'Type of authorisation flow requested.' }),
            CompletionDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The authorisation type request from the TPP.',
            required: ['AuthorisationType'],
          }),
        Charges: z
          .array(
            z
              .strictObject({
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                ChargeBearer: OBChargeBearerType1CodeSchema,
                Type: OBExternalPaymentChargeType1CodeSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        CutOffDateTime: z.iso
          .datetime({ offset: true })
          .exactOptional()
          .openapi({
            description:
              'Specified cut-off date and time for the payment consent.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
        Initiation: z
          .strictObject({
            ChargeBearer: OBChargeBearerType1CodeSchema.exactOptional(),
            Creditor: z
              .strictObject({
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      'Name by which a party is known and which is usually used to identify that party.',
                  }),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Party to which an amount of money is due.', required: [] }),
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description: 'Provides the details to identify the beneficiary account.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorAgent: z
              .strictObject({
                Identification: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous identification of the servicing institution.',
                  }),
                Name: NameSchema.exactOptional(),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
                SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.\nThis is the servicer of the beneficiary account.',
                required: [],
              }),
            CurrencyOfTransfer: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            DestinationCountryCode: z
              .string()
              .regex(/[A-Z]{2,2}/)
              .exactOptional()
              .openapi({
                description:
                  'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
              }),
            ExtendedPurpose: z
              .string()
              .min(1)
              .max(140)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.',
              }),
            FinalPaymentDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            FirstPaymentDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  'The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            Frequency: z
              .string()
              .regex(
                /^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$/,
              )
              .openapi({
                description:
                  'Individual Definitions:\nEvryDay - Every day\nEvryWorkgDay - Every working day\nIntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)\nWkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)\nIntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)\nQtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED). \nENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. \nSCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.\nRECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. \nIndividual Patterns:\nEvryDay (ScheduleCode)\nEvryWorkgDay (ScheduleCode)\nIntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)\nWkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)\nIntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)\nQtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay\nThe regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:\nEvryDay\nEvryWorkgDay\nIntrvlWkDay:0[1-9]:0[1-7]\nWkInMnthDay:0[1-5]:0[1-7]\nIntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])\nQtrDay:(ENGLISH|SCOTTISH|RECEIVED)\nFull Regular Expression:\n^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            NumberOfPayments: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  'Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.',
              }),
            Purpose: z
              .string()
              .min(1)
              .max(4)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the external purpose code in the format of character string with a maximum length of 4 characters.\nThe list of valid codes is an external code list published separately.\nExternal code sets can be downloaded from www.iso20022.org.',
              }),
            Reference: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.',
            required: [
              'Frequency',
              'FirstPaymentDateTime',
              'CurrencyOfTransfer',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
        Permission: z
          .literal('Create')
          .openapi({ description: 'Specifies the Open Banking service request types.' }),
        ReadRefundAccount: z
          .enum(['No', 'Yes'])
          .exactOptional()
          .openapi({ description: 'Specifies to share the refund account details with PISP' }),
        SCASupportData: OBSCASupportData1Schema.exactOptional(),
        Status: z
          .enum(['Authorised', 'AwaitingAuthorisation', 'Consumed', 'Rejected'])
          .openapi({ description: 'Specifies the status of resource in code form.' }),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: [
          'ConsentId',
          'CreationDateTime',
          'Status',
          'StatusUpdateDateTime',
          'Permission',
          'Initiation',
        ],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
    Risk: OBRisk1Schema,
  })
  .openapi({ required: ['Data', 'Risk'] })
  .openapi('OBWriteInternationalStandingOrderConsentResponse7')

const OBWriteInternationalStandingOrderResponse7Schema = z
  .strictObject({
    Data: z
      .strictObject({
        Charges: z
          .array(
            z
              .strictObject({
                Amount: OBActiveOrHistoricCurrencyAndAmountSchema,
                ChargeBearer: OBChargeBearerType1CodeSchema,
                Type: OBExternalPaymentChargeType1CodeSchema,
              })
              .openapi({
                description:
                  'Set of elements used to provide details of a charge for the payment initiation.',
                required: ['ChargeBearer', 'Type', 'Amount'],
              }),
          )
          .exactOptional(),
        ConsentId: z
          .string()
          .min(1)
          .max(128)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource.',
          }),
        CreationDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
        Debtor: OBCashAccountDebtor4Schema.exactOptional(),
        Initiation: z
          .strictObject({
            ChargeBearer: OBChargeBearerType1CodeSchema.exactOptional(),
            Creditor: z
              .strictObject({
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      'Name by which a party is known and which is usually used to identify that party.',
                  }),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({ description: 'Party to which an amount of money is due.', required: [] }),
            CreditorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'The account name is the name or names of the account owner(s) represented at an account level.\nNote, the account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description: 'Provides the details to identify the beneficiary account.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            CreditorAgent: z
              .strictObject({
                Identification: z
                  .string()
                  .min(1)
                  .max(35)
                  .exactOptional()
                  .openapi({
                    description:
                      'Unique and unambiguous identification of the servicing institution.',
                  }),
                Name: NameSchema.exactOptional(),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
                SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.\nThis is the servicer of the beneficiary account.',
                required: [],
              }),
            CurrencyOfTransfer: z
              .string()
              .regex(/^[A-Z]{3,3}$/)
              .openapi({
                description:
                  "Specifies the currency of the to be transferred amount, which is different from the currency of the debtor's account.",
              }),
            DebtorAccount: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      "The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP's online channels.\nNote, the account name is not the product name or the nickname of the account.",
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.',
                required: ['SchemeName', 'Identification'],
              }),
            DestinationCountryCode: z
              .string()
              .regex(/[A-Z]{2,2}/)
              .exactOptional()
              .openapi({
                description:
                  'Country in which Credit Account is domiciled. Code to identify a country, a dependency, or another area of particular geopolitical interest, on the basis of country names obtained from the United Nations (ISO 3166, Alpha-2 code).',
              }),
            ExtendedPurpose: z
              .string()
              .min(1)
              .max(140)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the purpose of an international payment, when there is no corresponding 4 character code available in the ISO20022 list of Purpose Codes.',
              }),
            FinalPaymentDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'The date on which the final payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            FirstPaymentDateTime: z.iso
              .datetime({ offset: true })
              .openapi({
                description:
                  'The date on which the first payment for a Standing Order schedule will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            Frequency: z
              .string()
              .regex(
                /^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlDay:((0[2-9])|([1-2][0-9])|3[0-1]))$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$/,
              )
              .openapi({
                description:
                  'Individual Definitions:\nEvryDay - Every day\nEvryWorkgDay - Every working day\nIntrvlWkDay - An interval specified in weeks (01 to 09), and the day within the week (01 to 07)\nWkInMnthDay - A monthly interval, specifying the week of the month (01 to 05) and day within the week (01 to 07)\nIntrvlMnthDay - An interval specified in months (between 01 to 06, 12, 24), specifying the day within the month (-5 to -1, 1 to 31)\nQtrDay - Quarterly (either ENGLISH, SCOTTISH, or RECEIVED). \nENGLISH = Paid on the 25th March, 24th June, 29th September and 25th December. \nSCOTTISH = Paid on the 2nd February, 15th May, 1st August and 11th November.\nRECEIVED = Paid on the 20th March, 19th June, 24th September and 20th December. \nIndividual Patterns:\nEvryDay (ScheduleCode)\nEvryWorkgDay (ScheduleCode)\nIntrvlWkDay:IntervalInWeeks:DayInWeek (ScheduleCode + IntervalInWeeks + DayInWeek)\nWkInMnthDay:WeekInMonth:DayInWeek (ScheduleCode + WeekInMonth + DayInWeek)\nIntrvlMnthDay:IntervalInMonths:DayInMonth (ScheduleCode + IntervalInMonths + DayInMonth)\nQtrDay: + either (ENGLISH, SCOTTISH or RECEIVED) ScheduleCode + QuarterDay\nThe regular expression for this element combines five smaller versions for each permitted pattern. To aid legibility - the components are presented individually here:\nEvryDay\nEvryWorkgDay\nIntrvlWkDay:0[1-9]:0[1-7]\nWkInMnthDay:0[1-5]:0[1-7]\nIntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01])\nQtrDay:(ENGLISH|SCOTTISH|RECEIVED)\nFull Regular Expression:\n^(EvryDay)$|^(EvryWorkgDay)$|^(IntrvlWkDay:0[1-9]:0[1-7])$|^(WkInMnthDay:0[1-5]:0[1-7])$|^(IntrvlMnthDay:(0[1-6]|12|24):(-0[1-5]|0[1-9]|[12][0-9]|3[01]))$|^(QtrDay:(ENGLISH|SCOTTISH|RECEIVED))$',
              }),
            InstructedAmount: z
              .strictObject({
                Amount: OBActiveCurrencyAndAmountSimpleTypeSchema,
                Currency: ActiveOrHistoricCurrencyCodeSchema,
              })
              .openapi({
                description:
                  'Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.\nUsage: This amount has to be transported unchanged through the transaction chain.',
                required: ['Amount', 'Currency'],
              }),
            NumberOfPayments: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  'Number of the payments that will be made in completing this frequency sequence including any executed since the sequence start date.',
              }),
            Purpose: z
              .string()
              .min(1)
              .max(4)
              .exactOptional()
              .openapi({
                description:
                  'Specifies the external purpose code in the format of character string with a maximum length of 4 characters.\nThe list of valid codes is an external code list published separately.\nExternal code sets can be downloaded from www.iso20022.org.',
              }),
            Reference: z
              .string()
              .min(1)
              .max(35)
              .exactOptional()
              .openapi({
                description:
                  "Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction.\nUsage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money.\nIf the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor's reference or payment remittance identification should be quoted in the end-to-end transaction identification.",
              }),
            SupplementaryData: OBSupplementaryData1Schema.exactOptional(),
          })
          .openapi({
            description:
              'The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.',
            required: [
              'Frequency',
              'FirstPaymentDateTime',
              'CurrencyOfTransfer',
              'InstructedAmount',
              'CreditorAccount',
            ],
          }),
        InternationalStandingOrderId: z
          .string()
          .min(1)
          .max(40)
          .openapi({
            description:
              'OB: Unique identification as assigned by the ASPSP to uniquely identify the international standing order resource.',
          }),
        MultiAuthorisation: z
          .strictObject({
            ExpirationDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            LastUpdateDateTime: z.iso
              .datetime({ offset: true })
              .exactOptional()
              .openapi({
                description:
                  'Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
              }),
            NumberReceived: z
              .int()
              .exactOptional()
              .openapi({ description: 'Number of authorisations received.' }),
            NumberRequired: z
              .int()
              .exactOptional()
              .openapi({
                description:
                  'Number of authorisations required for payment order (total required at the start of the multi authorisation journey).',
              }),
            Status: z
              .enum(['Authorised', 'AwaitingFurtherAuthorisation', 'Rejected'])
              .openapi({
                description: 'Specifies the status of the authorisation flow in code form.',
              }),
          })
          .exactOptional()
          .openapi({
            description: 'The multiple authorisation flow response from the ASPSP.',
            required: ['Status'],
          }),
        Refund: z
          .strictObject({
            Account: z
              .strictObject({
                Identification: Identification_0Schema,
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .openapi({
                    description:
                      'Name of the account, as assigned by the account servicing institution.\nUsage: The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account.\nOB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory.',
                  }),
                SchemeName: OBExternalAccountIdentification4CodeSchema,
                SecondaryIdentification: SecondaryIdentificationSchema.exactOptional(),
              })
              .openapi({
                description: 'Provides the details to identify an account.',
                required: ['SchemeName', 'Identification', 'Name'],
              }),
            Agent: z
              .strictObject({
                Identification: Identification_1Schema.exactOptional(),
                Name: NameSchema.exactOptional(),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
                SchemeName: OBExternalFinancialInstitutionIdentification4CodeSchema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description:
                  'Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.',
                required: [],
              }),
            Creditor: z
              .strictObject({
                Name: z
                  .string()
                  .min(1)
                  .max(350)
                  .exactOptional()
                  .openapi({
                    description:
                      'Name by which a party is known and which is usually used to identify that party.',
                  }),
                PostalAddress: OBPostalAddress6Schema.exactOptional(),
              })
              .exactOptional()
              .openapi({
                description: 'Set of elements used to identify a person or an organisation.',
                required: [],
              }),
          })
          .exactOptional()
          .openapi({ required: ['Account'] }),
        Status: z
          .enum(['Cancelled', 'InitiationCompleted', 'InitiationFailed', 'InitiationPending'])
          .openapi({ description: 'Specifies the status of resource in code form.' }),
        StatusUpdateDateTime: z.iso
          .datetime({ offset: true })
          .openapi({
            description:
              'Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
          }),
      })
      .openapi({
        required: [
          'InternationalStandingOrderId',
          'ConsentId',
          'CreationDateTime',
          'Status',
          'StatusUpdateDateTime',
          'Initiation',
        ],
      }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWriteInternationalStandingOrderResponse7')

const OBWritePaymentDetailsResponse1Schema = z
  .strictObject({
    Data: z
      .strictObject({
        PaymentStatus: z
          .array(
            z
              .strictObject({
                PaymentTransactionId: z
                  .string()
                  .min(1)
                  .max(210)
                  .openapi({
                    description:
                      'Unique identifier for the transaction within an servicing institution. This identifier is both unique and immutable.',
                  }),
                Status: z
                  .enum([
                    'Accepted',
                    'AcceptedCancellationRequest',
                    'AcceptedCreditSettlementCompleted',
                    'AcceptedCustomerProfile',
                    'AcceptedFundsChecked',
                    'AcceptedSettlementCompleted',
                    'AcceptedSettlementInProcess',
                    'AcceptedTechnicalValidation',
                    'AcceptedWithChange',
                    'AcceptedWithoutPosting',
                    'Cancelled',
                    'NoCancellationProcess',
                    'PartiallyAcceptedCancellationRequest',
                    'PartiallyAcceptedTechnicalCorrect',
                    'PaymentCancelled',
                    'Pending',
                    'PendingCancellationRequest',
                    'Received',
                    'Rejected',
                    'RejectedCancellationRequest',
                  ])
                  .openapi({
                    description:
                      'Status of a transfe, as assigned by the transaction administrator.',
                  }),
                StatusDetail: z
                  .strictObject({
                    LocalInstrument: OBExternalLocalInstrument1CodeSchema.exactOptional(),
                    Status: z
                      .string()
                      .min(1)
                      .max(128)
                      .openapi({
                        description:
                          'Status of a transfer, as assigned by the transaction administrator.',
                      }),
                    StatusReason: z
                      .enum([
                        'Cancelled',
                        'PendingFailingSettlement',
                        'PendingSettlement',
                        'Proprietary',
                        'ProprietaryRejection',
                        'Suspended',
                        'Unmatched',
                      ])
                      .exactOptional()
                      .openapi({
                        description: 'Reason Code provided for the status of a transfer.',
                      }),
                    StatusReasonDescription: z
                      .string()
                      .min(1)
                      .max(256)
                      .exactOptional()
                      .openapi({ description: 'Reason provided for the status of a transfer.' }),
                  })
                  .exactOptional()
                  .openapi({
                    description: 'Payment status details as per underlying Payment Rail.',
                    required: ['Status'],
                  }),
                StatusUpdateDateTime: z.iso
                  .datetime({ offset: true })
                  .openapi({
                    description:
                      'Date and time at which the status was assigned to the transfer.All dates in the JSON payloads are represented in ISO 8601 date-time format. \nAll date-time fields in responses must include the timezone. An example is below:\n2017-04-05T10:43:07+00:00',
                  }),
              })
              .openapi({
                description: 'Payment status details.',
                required: ['PaymentTransactionId', 'Status', 'StatusUpdateDateTime'],
              }),
          )
          .exactOptional(),
      })
      .openapi({ required: [] }),
    Links: LinksSchema.exactOptional(),
    Meta: MetaSchema.exactOptional(),
  })
  .openapi({ required: ['Data'] })
  .openapi('OBWritePaymentDetailsResponse1')

const _200DomesticPaymentConsentsConsentIdFundsConfirmationReadResponse = {
  description: 'Domestic Payment Consents Read',
  content: {
    'application/jose+jwe': { schema: OBWriteFundsConfirmationResponse1Schema },
    'application/json': { schema: OBWriteFundsConfirmationResponse1Schema },
    'application/json; charset=utf-8': { schema: OBWriteFundsConfirmationResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200DomesticPaymentConsentsConsentIdReadResponse = {
  description: 'Domestic Payment Consents Read',
  content: {
    'application/jose+jwe': { schema: OBWriteDomesticConsentResponse5Schema },
    'application/json': { schema: OBWriteDomesticConsentResponse5Schema },
    'application/json; charset=utf-8': { schema: OBWriteDomesticConsentResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200DomesticPaymentsDomesticPaymentIdPaymentDetailsReadResponse = {
  description: 'Payment Details Read',
  content: {
    'application/jose+jwe': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/json': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/json; charset=utf-8': { schema: OBWritePaymentDetailsResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200DomesticPaymentsDomesticPaymentIdReadResponse = {
  description: 'Domestic Payments Read',
  content: {
    'application/jose+jwe': { schema: OBWriteDomesticResponse5Schema },
    'application/json': { schema: OBWriteDomesticResponse5Schema },
    'application/json; charset=utf-8': { schema: OBWriteDomesticResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200DomesticScheduledPaymentConsentsConsentIdReadResponse = {
  description: 'Domestic Scheduled Payment Consents Read',
  content: {
    'application/jose+jwe': { schema: OBWriteDomesticScheduledConsentResponse5Schema },
    'application/json': { schema: OBWriteDomesticScheduledConsentResponse5Schema },
    'application/json; charset=utf-8': { schema: OBWriteDomesticScheduledConsentResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200DomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsReadResponse = {
  description: 'Payment Details Read',
  content: {
    'application/jose+jwe': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/json': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/json; charset=utf-8': { schema: OBWritePaymentDetailsResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200DomesticScheduledPaymentsDomesticScheduledPaymentIdReadResponse = {
  description: 'Domestic Scheduled Payments Read',
  content: {
    'application/jose+jwe': { schema: OBWriteDomesticScheduledResponse5Schema },
    'application/json': { schema: OBWriteDomesticScheduledResponse5Schema },
    'application/json; charset=utf-8': { schema: OBWriteDomesticScheduledResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200DomesticStandingOrderConsentsConsentIdReadResponse = {
  description: 'Domestic Standing Order Consents Read',
  content: {
    'application/jose+jwe': { schema: OBWriteDomesticStandingOrderConsentResponse6Schema },
    'application/json': { schema: OBWriteDomesticStandingOrderConsentResponse6Schema },
    'application/json; charset=utf-8': {
      schema: OBWriteDomesticStandingOrderConsentResponse6Schema,
    },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200DomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsReadResponse = {
  description: 'Payment Details Read',
  content: {
    'application/jose+jwe': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/json': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/json; charset=utf-8': { schema: OBWritePaymentDetailsResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200DomesticStandingOrdersDomesticStandingOrderIdReadResponse = {
  description: 'Domestic Standing Orders Read',
  content: {
    'application/jose+jwe': { schema: OBWriteDomesticStandingOrderResponse6Schema },
    'application/json': { schema: OBWriteDomesticStandingOrderResponse6Schema },
    'application/json; charset=utf-8': { schema: OBWriteDomesticStandingOrderResponse6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200FilePaymentConsentsConsentIdFileCreatedResponse = {
  description: 'File Payment Consents Created',
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _200FilePaymentConsentsConsentIdFileReadResponse = {
  description: 'File Payment Consents Read',
  content: {
    'application/jose+jwe': { schema: FileSchema },
    'application/json': { schema: FileSchema },
    'application/json; charset=utf-8': { schema: FileSchema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200FilePaymentConsentsConsentIdReadResponse = {
  description: 'File Payment Consents Read',
  content: {
    'application/jose+jwe': { schema: OBWriteFileConsentResponse4Schema },
    'application/json': { schema: OBWriteFileConsentResponse4Schema },
    'application/json; charset=utf-8': { schema: OBWriteFileConsentResponse4Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200FilePaymentsFilePaymentIdPaymentDetailsReadResponse = {
  description: 'Payment Details Read',
  content: {
    'application/jose+jwe': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/json': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/json; charset=utf-8': { schema: OBWritePaymentDetailsResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200FilePaymentsFilePaymentIdReadResponse = {
  description: 'File Payments Read',
  content: {
    'application/jose+jwe': { schema: OBWriteFileResponse3Schema },
    'application/json': { schema: OBWriteFileResponse3Schema },
    'application/json; charset=utf-8': { schema: OBWriteFileResponse3Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200FilePaymentsFilePaymentIdReportFileReadResponse = {
  description: 'File Payments Read',
  content: {
    'application/jose+jwe': { schema: FileSchema },
    'application/json': { schema: FileSchema },
    'application/json; charset=utf-8': { schema: FileSchema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200InternationalPaymentConsentsConsentIdFundsConfirmationReadResponse = {
  description: 'International Payment Consents Read',
  content: {
    'application/jose+jwe': { schema: OBWriteFundsConfirmationResponse1Schema },
    'application/json': { schema: OBWriteFundsConfirmationResponse1Schema },
    'application/json; charset=utf-8': { schema: OBWriteFundsConfirmationResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200InternationalPaymentConsentsConsentIdReadResponse = {
  description: 'International Payment Consents Read',
  content: {
    'application/jose+jwe': { schema: OBWriteInternationalConsentResponse6Schema },
    'application/json': { schema: OBWriteInternationalConsentResponse6Schema },
    'application/json; charset=utf-8': { schema: OBWriteInternationalConsentResponse6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200InternationalPaymentsInternationalPaymentIdPaymentDetailsReadResponse = {
  description: 'Payment Details Read',
  content: {
    'application/jose+jwe': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/json': { schema: OBWritePaymentDetailsResponse1Schema },
    'application/json; charset=utf-8': { schema: OBWritePaymentDetailsResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200InternationalPaymentsInternationalPaymentIdReadResponse = {
  description: 'International Payments Read',
  content: {
    'application/jose+jwe': { schema: OBWriteInternationalResponse5Schema },
    'application/json': { schema: OBWriteInternationalResponse5Schema },
    'application/json; charset=utf-8': { schema: OBWriteInternationalResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200InternationalScheduledPaymentConsentsConsentIdFundsConfirmationReadResponse = {
  description: 'International Scheduled Payment Consents Read',
  content: {
    'application/jose+jwe': { schema: OBWriteFundsConfirmationResponse1Schema },
    'application/json': { schema: OBWriteFundsConfirmationResponse1Schema },
    'application/json; charset=utf-8': { schema: OBWriteFundsConfirmationResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200InternationalScheduledPaymentConsentsConsentIdReadResponse = {
  description: 'International Scheduled Payment Consents Read',
  content: {
    'application/jose+jwe': { schema: OBWriteInternationalScheduledConsentResponse6Schema },
    'application/json': { schema: OBWriteInternationalScheduledConsentResponse6Schema },
    'application/json; charset=utf-8': {
      schema: OBWriteInternationalScheduledConsentResponse6Schema,
    },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200InternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsReadResponse =
  {
    description: 'Payment Details Read',
    content: {
      'application/jose+jwe': { schema: OBWritePaymentDetailsResponse1Schema },
      'application/json': { schema: OBWritePaymentDetailsResponse1Schema },
      'application/json; charset=utf-8': { schema: OBWritePaymentDetailsResponse1Schema },
    },
    headers: z.object({
      'x-fapi-interaction-id': {
        description: 'An RFC4122 UID used as a correlation id.',
        schema: z
          .string()
          .exactOptional()
          .openapi({
            description: 'An RFC4122 UID used as a correlation id.',
            param: { required: false },
          }),
      },
      'x-jws-signature': {
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
        schema: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Header containing a detached JWS signature of the body of the payload.\n',
            param: { required: false },
          }),
      },
    }),
  }

const _200InternationalScheduledPaymentsInternationalScheduledPaymentIdReadResponse = {
  description: 'International Scheduled Payments Read',
  content: {
    'application/jose+jwe': { schema: OBWriteInternationalScheduledResponse6Schema },
    'application/json': { schema: OBWriteInternationalScheduledResponse6Schema },
    'application/json; charset=utf-8': { schema: OBWriteInternationalScheduledResponse6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200InternationalStandingOrderConsentsConsentIdReadResponse = {
  description: 'International Standing Order Consents Read',
  content: {
    'application/jose+jwe': { schema: OBWriteInternationalStandingOrderConsentResponse7Schema },
    'application/json': { schema: OBWriteInternationalStandingOrderConsentResponse7Schema },
    'application/json; charset=utf-8': {
      schema: OBWriteInternationalStandingOrderConsentResponse7Schema,
    },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _200InternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsReadResponse =
  {
    description: 'Payment Details Read',
    content: {
      'application/jose+jwe': { schema: OBWritePaymentDetailsResponse1Schema },
      'application/json': { schema: OBWritePaymentDetailsResponse1Schema },
      'application/json; charset=utf-8': { schema: OBWritePaymentDetailsResponse1Schema },
    },
    headers: z.object({
      'x-fapi-interaction-id': {
        description: 'An RFC4122 UID used as a correlation id.',
        schema: z
          .string()
          .exactOptional()
          .openapi({
            description: 'An RFC4122 UID used as a correlation id.',
            param: { required: false },
          }),
      },
      'x-jws-signature': {
        description: 'Header containing a detached JWS signature of the body of the payload.\n',
        schema: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Header containing a detached JWS signature of the body of the payload.\n',
            param: { required: false },
          }),
      },
    }),
  }

const _200InternationalStandingOrdersInternationalStandingOrderPaymentIdReadResponse = {
  description: 'International Standing Orders Read',
  content: {
    'application/jose+jwe': { schema: OBWriteInternationalStandingOrderResponse7Schema },
    'application/json': { schema: OBWriteInternationalStandingOrderResponse7Schema },
    'application/json; charset=utf-8': { schema: OBWriteInternationalStandingOrderResponse7Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _201DomesticPaymentConsentsCreatedResponse = {
  description: 'Domestic Payment Consents Created',
  content: {
    'application/jose+jwe': { schema: OBWriteDomesticConsentResponse5Schema },
    'application/json': { schema: OBWriteDomesticConsentResponse5Schema },
    'application/json; charset=utf-8': { schema: OBWriteDomesticConsentResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _201DomesticPaymentsCreatedResponse = {
  description: 'Domestic Payments Created',
  content: {
    'application/jose+jwe': { schema: OBWriteDomesticResponse5Schema },
    'application/json': { schema: OBWriteDomesticResponse5Schema },
    'application/json; charset=utf-8': { schema: OBWriteDomesticResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _201DomesticScheduledPaymentConsentsCreatedResponse = {
  description: 'Domestic Scheduled Payment Consents Created',
  content: {
    'application/jose+jwe': { schema: OBWriteDomesticScheduledConsentResponse5Schema },
    'application/json': { schema: OBWriteDomesticScheduledConsentResponse5Schema },
    'application/json; charset=utf-8': { schema: OBWriteDomesticScheduledConsentResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _201DomesticScheduledPaymentsCreatedResponse = {
  description: 'Domestic Scheduled Payments Created',
  content: {
    'application/jose+jwe': { schema: OBWriteDomesticScheduledResponse5Schema },
    'application/json': { schema: OBWriteDomesticScheduledResponse5Schema },
    'application/json; charset=utf-8': { schema: OBWriteDomesticScheduledResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _201DomesticStandingOrderConsentsCreatedResponse = {
  description: 'Domestic Standing Order Consents Created',
  content: {
    'application/jose+jwe': { schema: OBWriteDomesticStandingOrderConsentResponse6Schema },
    'application/json': { schema: OBWriteDomesticStandingOrderConsentResponse6Schema },
    'application/json; charset=utf-8': {
      schema: OBWriteDomesticStandingOrderConsentResponse6Schema,
    },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _201DomesticStandingOrdersCreatedResponse = {
  description: 'Domestic Standing Orders Created',
  content: {
    'application/jose+jwe': { schema: OBWriteDomesticStandingOrderResponse6Schema },
    'application/json': { schema: OBWriteDomesticStandingOrderResponse6Schema },
    'application/json; charset=utf-8': { schema: OBWriteDomesticStandingOrderResponse6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _201FilePaymentConsentsCreatedResponse = {
  description: 'File Payment Consents Created',
  content: {
    'application/jose+jwe': { schema: OBWriteFileConsentResponse4Schema },
    'application/json': { schema: OBWriteFileConsentResponse4Schema },
    'application/json; charset=utf-8': { schema: OBWriteFileConsentResponse4Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _201FilePaymentsCreatedResponse = {
  description: 'File Payments Created',
  content: {
    'application/jose+jwe': { schema: OBWriteFileResponse3Schema },
    'application/json': { schema: OBWriteFileResponse3Schema },
    'application/json; charset=utf-8': { schema: OBWriteFileResponse3Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _201InternationalPaymentConsentsCreatedResponse = {
  description: 'International Payment Consents Created',
  content: {
    'application/jose+jwe': { schema: OBWriteInternationalConsentResponse6Schema },
    'application/json': { schema: OBWriteInternationalConsentResponse6Schema },
    'application/json; charset=utf-8': { schema: OBWriteInternationalConsentResponse6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _201InternationalPaymentsCreatedResponse = {
  description: 'International Payments Created',
  content: {
    'application/jose+jwe': { schema: OBWriteInternationalResponse5Schema },
    'application/json': { schema: OBWriteInternationalResponse5Schema },
    'application/json; charset=utf-8': { schema: OBWriteInternationalResponse5Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _201InternationalScheduledPaymentConsentsCreatedResponse = {
  description: 'International Scheduled Payment Consents Created',
  content: {
    'application/jose+jwe': { schema: OBWriteInternationalScheduledConsentResponse6Schema },
    'application/json': { schema: OBWriteInternationalScheduledConsentResponse6Schema },
    'application/json; charset=utf-8': {
      schema: OBWriteInternationalScheduledConsentResponse6Schema,
    },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _201InternationalScheduledPaymentsCreatedResponse = {
  description: 'International Scheduled Payments Created',
  content: {
    'application/jose+jwe': { schema: OBWriteInternationalScheduledResponse6Schema },
    'application/json': { schema: OBWriteInternationalScheduledResponse6Schema },
    'application/json; charset=utf-8': { schema: OBWriteInternationalScheduledResponse6Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _201InternationalStandingOrderConsentsCreatedResponse = {
  description: 'International Standing Order Consents Created',
  content: {
    'application/jose+jwe': { schema: OBWriteInternationalStandingOrderConsentResponse7Schema },
    'application/json': { schema: OBWriteInternationalStandingOrderConsentResponse7Schema },
    'application/json; charset=utf-8': {
      schema: OBWriteInternationalStandingOrderConsentResponse7Schema,
    },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _201InternationalStandingOrdersCreatedResponse = {
  description: 'International Standing Orders Created',
  content: {
    'application/jose+jwe': { schema: OBWriteInternationalStandingOrderResponse7Schema },
    'application/json': { schema: OBWriteInternationalStandingOrderResponse7Schema },
    'application/json; charset=utf-8': { schema: OBWriteInternationalStandingOrderResponse7Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _400ErrorResponse = {
  description: 'Bad request',
  content: {
    'application/jose+jwe': { schema: OBErrorResponse1Schema },
    'application/json': { schema: OBErrorResponse1Schema },
    'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _401ErrorResponse = {
  description: 'Unauthorized',
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _403ErrorResponse = {
  description: 'Forbidden',
  content: {
    'application/jose+jwe': { schema: OBErrorResponse1Schema },
    'application/json': { schema: OBErrorResponse1Schema },
    'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const _404ErrorResponse = {
  description: 'Not found',
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _405ErrorResponse = {
  description: 'Method Not Allowed',
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _406ErrorResponse = {
  description: 'Not Acceptable',
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _415ErrorResponse = {
  description: 'Unsupported Media Type',
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _429ErrorResponse = {
  description: 'Too Many Requests',
  headers: z.object({
    'Retry-After': {
      description: 'Number in seconds to wait',
      schema: z
        .int()
        .exactOptional()
        .openapi({ description: 'Number in seconds to wait', param: { required: false } }),
    },
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
  }),
}

const _500ErrorResponse = {
  description: 'Internal Server Error',
  content: {
    'application/jose+jwe': { schema: OBErrorResponse1Schema },
    'application/json': { schema: OBErrorResponse1Schema },
    'application/json; charset=utf-8': { schema: OBErrorResponse1Schema },
  },
  headers: z.object({
    'x-fapi-interaction-id': {
      description: 'An RFC4122 UID used as a correlation id.',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'An RFC4122 UID used as a correlation id.',
          param: { required: false },
        }),
    },
    'x-jws-signature': {
      description: 'Header containing a detached JWS signature of the body of the payload.\n',
      schema: z
        .string()
        .exactOptional()
        .openapi({
          description: 'Header containing a detached JWS signature of the body of the payload.\n',
          param: { required: false },
        }),
    },
  }),
}

const AuthorizationParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'An Authorisation Token as per https://tools.ietf.org/html/rfc6750',
      in: 'header',
      name: 'Authorization',
      required: true,
      schema: { type: 'string' },
    },
  })

const ConsentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'ConsentId',
      in: 'path',
      name: 'ConsentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const DomesticPaymentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'DomesticPaymentId',
      in: 'path',
      name: 'DomesticPaymentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const DomesticScheduledPaymentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'DomesticScheduledPaymentId',
      in: 'path',
      name: 'DomesticScheduledPaymentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const DomesticStandingOrderIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'DomesticStandingOrderId',
      in: 'path',
      name: 'DomesticStandingOrderId',
      required: true,
      schema: { type: 'string' },
    },
  })

const FilePaymentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'FilePaymentId',
      in: 'path',
      name: 'FilePaymentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const InternationalPaymentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'InternationalPaymentId',
      in: 'path',
      name: 'InternationalPaymentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const InternationalScheduledPaymentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'InternationalScheduledPaymentId',
      in: 'path',
      name: 'InternationalScheduledPaymentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const InternationalStandingOrderPaymentIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'InternationalStandingOrderPaymentId',
      in: 'path',
      name: 'InternationalStandingOrderPaymentId',
      required: true,
      schema: { type: 'string' },
    },
  })

const XCustomerUserAgentParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Indicates the user-agent that the PSU is using.',
      in: 'header',
      name: 'x-customer-user-agent',
      required: false,
      schema: { type: 'string' },
    },
  })

const XFapiAuthDateParamsSchema = z
  .string()
  .regex(
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), \d{2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{4} \d{2}:\d{2}:\d{2} (GMT|UTC)$/,
  )
  .exactOptional()
  .openapi({
    param: {
      description:
        'The time when the PSU last logged in with the TPP. \nAll dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below: \nSun, 10 Sep 2017 19:43:31 UTC',
      in: 'header',
      name: 'x-fapi-auth-date',
      required: false,
      schema: {
        pattern:
          '^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), \\d{2} (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \\d{4} \\d{2}:\\d{2}:\\d{2} (GMT|UTC)$',
        type: 'string',
      },
    },
  })

const XFapiCustomerIpAddressParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: "The PSU's IP address if the PSU is currently logged in with the TPP.",
      in: 'header',
      name: 'x-fapi-customer-ip-address',
      required: false,
      schema: { type: 'string' },
    },
  })

const XFapiInteractionIdParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'An RFC4122 UID used as a correlation id.',
      in: 'header',
      name: 'x-fapi-interaction-id',
      required: false,
      schema: { type: 'string' },
    },
  })

const XIdempotencyKeyParamsSchema = z
  .string()
  .regex(/^(?!\s)(.*)(\S)$/)
  .max(40)
  .openapi({
    param: {
      description:
        'Every request will be processed only once per x-idempotency-key.  The\nIdempotency Key will be valid for 24 hours.\n',
      in: 'header',
      name: 'x-idempotency-key',
      required: true,
      schema: { maxLength: 40, pattern: '^(?!\\s)(.*)(\\S)$', type: 'string' },
    },
  })

const XJwsSignatureParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'A detached JWS signature of the body of the payload.',
      in: 'header',
      name: 'x-jws-signature',
      required: true,
      schema: { type: 'string' },
    },
  })

const PSUOAuth2SecuritySecurityScheme = {
  description:
    'OAuth flow, it is required when the PSU needs to perform SCA with the ASPSP when a TPP wants to access an ASPSP resource owned by the PSU',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://authserver.example/authorization',
      scopes: { payments: 'Generic payment scope' },
      tokenUrl: 'https://authserver.example/token',
    },
  },
  type: 'oauth2',
}

const TPPOAuth2SecuritySecurityScheme = {
  description: 'TPP client credential authorisation flow with the ASPSP',
  flows: {
    clientCredentials: {
      scopes: { payments: 'Generic payment scope' },
      tokenUrl: 'https://authserver.example/token',
    },
  },
  type: 'oauth2',
}

export const postDomesticPaymentConsentsRoute = createRoute({
  method: 'post',
  path: '/domestic-payment-consents',
  tags: ['Domestic Payments'],
  summary: 'Create Domestic Payment Consents',
  operationId: 'CreateDomesticPaymentConsents',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-idempotency-key': XIdempotencyKeyParamsSchema,
      'x-jws-signature': XJwsSignatureParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/jose+jwe': { schema: OBWriteDomesticConsent4Schema },
        'application/json': { schema: OBWriteDomesticConsent4Schema },
        'application/json; charset=utf-8': { schema: OBWriteDomesticConsent4Schema },
      },
      required: true,
    },
  },
  responses: {
    201: _201DomesticPaymentConsentsCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getDomesticPaymentConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/domestic-payment-consents/{ConsentId}',
  tags: ['Domestic Payments'],
  summary: 'Get Domestic Payment Consents',
  operationId: 'GetDomesticPaymentConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200DomesticPaymentConsentsConsentIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getDomesticPaymentConsentsConsentIdFundsConfirmationRoute = createRoute({
  method: 'get',
  path: '/domestic-payment-consents/{ConsentId}/funds-confirmation',
  tags: ['Domestic Payments'],
  summary: 'Get Domestic Payment Consents Funds Confirmation',
  operationId: 'GetDomesticPaymentConsentsConsentIdFundsConfirmation',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200DomesticPaymentConsentsConsentIdFundsConfirmationReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const postDomesticPaymentsRoute = createRoute({
  method: 'post',
  path: '/domestic-payments',
  tags: ['Domestic Payments'],
  summary: 'Create Domestic Payments',
  operationId: 'CreateDomesticPayments',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-idempotency-key': XIdempotencyKeyParamsSchema,
      'x-jws-signature': XJwsSignatureParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/jose+jwe': { schema: OBWriteDomestic2Schema },
        'application/json': { schema: OBWriteDomestic2Schema },
        'application/json; charset=utf-8': { schema: OBWriteDomestic2Schema },
      },
      required: true,
    },
  },
  responses: {
    201: _201DomesticPaymentsCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const getDomesticPaymentsDomesticPaymentIdRoute = createRoute({
  method: 'get',
  path: '/domestic-payments/{DomesticPaymentId}',
  tags: ['Domestic Payments'],
  summary: 'Get Domestic Payments',
  operationId: 'GetDomesticPaymentsDomesticPaymentId',
  request: {
    params: z.object({ DomesticPaymentId: DomesticPaymentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200DomesticPaymentsDomesticPaymentIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getDomesticPaymentsDomesticPaymentIdPaymentDetailsRoute = createRoute({
  method: 'get',
  path: '/domestic-payments/{DomesticPaymentId}/payment-details',
  tags: ['Payment Details'],
  summary: 'Get Payment Details',
  operationId: 'GetDomesticPaymentsDomesticPaymentIdPaymentDetails',
  request: {
    params: z.object({ DomesticPaymentId: DomesticPaymentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200DomesticPaymentsDomesticPaymentIdPaymentDetailsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const postDomesticScheduledPaymentConsentsRoute = createRoute({
  method: 'post',
  path: '/domestic-scheduled-payment-consents',
  tags: ['Domestic Scheduled Payments'],
  summary: 'Create Domestic Scheduled Payment Consents',
  operationId: 'CreateDomesticScheduledPaymentConsents',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-idempotency-key': XIdempotencyKeyParamsSchema,
      'x-jws-signature': XJwsSignatureParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/jose+jwe': { schema: OBWriteDomesticScheduledConsent4Schema },
        'application/json': { schema: OBWriteDomesticScheduledConsent4Schema },
        'application/json; charset=utf-8': { schema: OBWriteDomesticScheduledConsent4Schema },
      },
      required: true,
    },
  },
  responses: {
    201: _201DomesticScheduledPaymentConsentsCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getDomesticScheduledPaymentConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/domestic-scheduled-payment-consents/{ConsentId}',
  tags: ['Domestic Scheduled Payments'],
  summary: 'Get Domestic Scheduled Payment Consents',
  operationId: 'GetDomesticScheduledPaymentConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200DomesticScheduledPaymentConsentsConsentIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const postDomesticScheduledPaymentsRoute = createRoute({
  method: 'post',
  path: '/domestic-scheduled-payments',
  tags: ['Domestic Scheduled Payments'],
  summary: 'Create Domestic Scheduled Payments',
  operationId: 'CreateDomesticScheduledPayments',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-idempotency-key': XIdempotencyKeyParamsSchema,
      'x-jws-signature': XJwsSignatureParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/jose+jwe': { schema: OBWriteDomesticScheduled2Schema },
        'application/json': { schema: OBWriteDomesticScheduled2Schema },
        'application/json; charset=utf-8': { schema: OBWriteDomesticScheduled2Schema },
      },
      required: true,
    },
  },
  responses: {
    201: _201DomesticScheduledPaymentsCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const getDomesticScheduledPaymentsDomesticScheduledPaymentIdRoute = createRoute({
  method: 'get',
  path: '/domestic-scheduled-payments/{DomesticScheduledPaymentId}',
  tags: ['Domestic Scheduled Payments'],
  summary: 'Get Domestic Scheduled Payments',
  operationId: 'GetDomesticScheduledPaymentsDomesticScheduledPaymentId',
  request: {
    params: z.object({ DomesticScheduledPaymentId: DomesticScheduledPaymentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200DomesticScheduledPaymentsDomesticScheduledPaymentIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRoute =
  createRoute({
    method: 'get',
    path: '/domestic-scheduled-payments/{DomesticScheduledPaymentId}/payment-details',
    tags: ['Payment Details'],
    summary: 'Get Payment Details',
    operationId: 'GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails',
    request: {
      params: z.object({ DomesticScheduledPaymentId: DomesticScheduledPaymentIdParamsSchema }),
      headers: z.object({
        'x-fapi-auth-date': XFapiAuthDateParamsSchema,
        'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
        'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
        Authorization: AuthorizationParamsSchema,
        'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      }),
    },
    responses: {
      200: _200DomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsReadResponse,
      400: _400ErrorResponse,
      401: _401ErrorResponse,
      403: _403ErrorResponse,
      404: _404ErrorResponse,
      405: _405ErrorResponse,
      406: _406ErrorResponse,
      429: _429ErrorResponse,
      500: _500ErrorResponse,
    },
    security: [{ TPPOAuth2Security: ['payments'] }],
  })

export const postDomesticStandingOrderConsentsRoute = createRoute({
  method: 'post',
  path: '/domestic-standing-order-consents',
  tags: ['Domestic Standing Orders'],
  summary: 'Create Domestic Standing Order Consents',
  operationId: 'CreateDomesticStandingOrderConsents',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-idempotency-key': XIdempotencyKeyParamsSchema,
      'x-jws-signature': XJwsSignatureParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/jose+jwe': { schema: OBWriteDomesticStandingOrderConsent5Schema },
        'application/json': { schema: OBWriteDomesticStandingOrderConsent5Schema },
        'application/json; charset=utf-8': { schema: OBWriteDomesticStandingOrderConsent5Schema },
      },
      required: true,
    },
  },
  responses: {
    201: _201DomesticStandingOrderConsentsCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getDomesticStandingOrderConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/domestic-standing-order-consents/{ConsentId}',
  tags: ['Domestic Standing Orders'],
  summary: 'Get Domestic Standing Order Consents',
  operationId: 'GetDomesticStandingOrderConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200DomesticStandingOrderConsentsConsentIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const postDomesticStandingOrdersRoute = createRoute({
  method: 'post',
  path: '/domestic-standing-orders',
  tags: ['Domestic Standing Orders'],
  summary: 'Create Domestic Standing Orders',
  operationId: 'CreateDomesticStandingOrders',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-idempotency-key': XIdempotencyKeyParamsSchema,
      'x-jws-signature': XJwsSignatureParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/jose+jwe': { schema: OBWriteDomesticStandingOrder3Schema },
        'application/json': { schema: OBWriteDomesticStandingOrder3Schema },
        'application/json; charset=utf-8': { schema: OBWriteDomesticStandingOrder3Schema },
      },
      required: true,
    },
  },
  responses: {
    201: _201DomesticStandingOrdersCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const getDomesticStandingOrdersDomesticStandingOrderIdRoute = createRoute({
  method: 'get',
  path: '/domestic-standing-orders/{DomesticStandingOrderId}',
  tags: ['Domestic Standing Orders'],
  summary: 'Get Domestic Standing Orders',
  operationId: 'GetDomesticStandingOrdersDomesticStandingOrderId',
  request: {
    params: z.object({ DomesticStandingOrderId: DomesticStandingOrderIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200DomesticStandingOrdersDomesticStandingOrderIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRoute = createRoute({
  method: 'get',
  path: '/domestic-standing-orders/{DomesticStandingOrderId}/payment-details',
  tags: ['Payment Details'],
  summary: 'Get Payment Details',
  operationId: 'GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails',
  request: {
    params: z.object({ DomesticStandingOrderId: DomesticStandingOrderIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200DomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const postFilePaymentConsentsRoute = createRoute({
  method: 'post',
  path: '/file-payment-consents',
  tags: ['File Payments'],
  summary: 'Create File Payment Consents',
  operationId: 'CreateFilePaymentConsents',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-idempotency-key': XIdempotencyKeyParamsSchema,
      'x-jws-signature': XJwsSignatureParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/jose+jwe': { schema: OBWriteFileConsent3Schema },
        'application/json': { schema: OBWriteFileConsent3Schema },
        'application/json; charset=utf-8': { schema: OBWriteFileConsent3Schema },
      },
      required: true,
    },
  },
  responses: {
    201: _201FilePaymentConsentsCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getFilePaymentConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/file-payment-consents/{ConsentId}',
  tags: ['File Payments'],
  summary: 'Get File Payment Consents',
  operationId: 'GetFilePaymentConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200FilePaymentConsentsConsentIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getFilePaymentConsentsConsentIdFileRoute = createRoute({
  method: 'get',
  path: '/file-payment-consents/{ConsentId}/file',
  tags: ['File Payments'],
  summary: 'Get File Payment Consents',
  operationId: 'GetFilePaymentConsentsConsentIdFile',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200FilePaymentConsentsConsentIdFileReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const postFilePaymentConsentsConsentIdFileRoute = createRoute({
  method: 'post',
  path: '/file-payment-consents/{ConsentId}/file',
  tags: ['File Payments'],
  summary: 'Create File Payment Consents',
  operationId: 'CreateFilePaymentConsentsConsentIdFile',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-idempotency-key': XIdempotencyKeyParamsSchema,
      'x-jws-signature': XJwsSignatureParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/jose+jwe': { schema: FileSchema },
        'application/json': { schema: FileSchema },
        'application/json; charset=utf-8': { schema: FileSchema },
      },
      required: true,
    },
  },
  responses: {
    200: _200FilePaymentConsentsConsentIdFileCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const postFilePaymentsRoute = createRoute({
  method: 'post',
  path: '/file-payments',
  tags: ['File Payments'],
  summary: 'Create File Payments',
  operationId: 'CreateFilePayments',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-idempotency-key': XIdempotencyKeyParamsSchema,
      'x-jws-signature': XJwsSignatureParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/jose+jwe': { schema: OBWriteFile2Schema },
        'application/json': { schema: OBWriteFile2Schema },
        'application/json; charset=utf-8': { schema: OBWriteFile2Schema },
      },
      required: true,
    },
  },
  responses: {
    201: _201FilePaymentsCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const getFilePaymentsFilePaymentIdRoute = createRoute({
  method: 'get',
  path: '/file-payments/{FilePaymentId}',
  tags: ['File Payments'],
  summary: 'Get File Payments',
  operationId: 'GetFilePaymentsFilePaymentId',
  request: {
    params: z.object({ FilePaymentId: FilePaymentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200FilePaymentsFilePaymentIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getFilePaymentsFilePaymentIdPaymentDetailsRoute = createRoute({
  method: 'get',
  path: '/file-payments/{FilePaymentId}/payment-details',
  tags: ['Payment Details'],
  summary: 'Get Payment Details',
  operationId: 'GetFilePaymentsFilePaymentIdPaymentDetails',
  request: {
    params: z.object({ FilePaymentId: FilePaymentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200FilePaymentsFilePaymentIdPaymentDetailsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getFilePaymentsFilePaymentIdReportFileRoute = createRoute({
  method: 'get',
  path: '/file-payments/{FilePaymentId}/report-file',
  tags: ['File Payments'],
  summary: 'Get File Payments',
  operationId: 'GetFilePaymentsFilePaymentIdReportFile',
  request: {
    params: z.object({ FilePaymentId: FilePaymentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200FilePaymentsFilePaymentIdReportFileReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const postInternationalPaymentConsentsRoute = createRoute({
  method: 'post',
  path: '/international-payment-consents',
  tags: ['International Payments'],
  summary: 'Create International Payment Consents',
  operationId: 'CreateInternationalPaymentConsents',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-idempotency-key': XIdempotencyKeyParamsSchema,
      'x-jws-signature': XJwsSignatureParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/jose+jwe': { schema: OBWriteInternationalConsent5Schema },
        'application/json': { schema: OBWriteInternationalConsent5Schema },
        'application/json; charset=utf-8': { schema: OBWriteInternationalConsent5Schema },
      },
      required: true,
    },
  },
  responses: {
    201: _201InternationalPaymentConsentsCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getInternationalPaymentConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/international-payment-consents/{ConsentId}',
  tags: ['International Payments'],
  summary: 'Get International Payment Consents',
  operationId: 'GetInternationalPaymentConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200InternationalPaymentConsentsConsentIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getInternationalPaymentConsentsConsentIdFundsConfirmationRoute = createRoute({
  method: 'get',
  path: '/international-payment-consents/{ConsentId}/funds-confirmation',
  tags: ['International Payments'],
  summary: 'Get International Payment Consents Funds Confirmation',
  operationId: 'GetInternationalPaymentConsentsConsentIdFundsConfirmation',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200InternationalPaymentConsentsConsentIdFundsConfirmationReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const postInternationalPaymentsRoute = createRoute({
  method: 'post',
  path: '/international-payments',
  tags: ['International Payments'],
  summary: 'Create International Payments',
  operationId: 'CreateInternationalPayments',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-idempotency-key': XIdempotencyKeyParamsSchema,
      'x-jws-signature': XJwsSignatureParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/jose+jwe': { schema: OBWriteInternational3Schema },
        'application/json': { schema: OBWriteInternational3Schema },
        'application/json; charset=utf-8': { schema: OBWriteInternational3Schema },
      },
      required: true,
    },
  },
  responses: {
    201: _201InternationalPaymentsCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const getInternationalPaymentsInternationalPaymentIdRoute = createRoute({
  method: 'get',
  path: '/international-payments/{InternationalPaymentId}',
  tags: ['International Payments'],
  summary: 'Get International Payments',
  operationId: 'GetInternationalPaymentsInternationalPaymentId',
  request: {
    params: z.object({ InternationalPaymentId: InternationalPaymentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200InternationalPaymentsInternationalPaymentIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getInternationalPaymentsInternationalPaymentIdPaymentDetailsRoute = createRoute({
  method: 'get',
  path: '/international-payments/{InternationalPaymentId}/payment-details',
  tags: ['Payment Details'],
  summary: 'Get Payment Details',
  operationId: 'GetInternationalPaymentsInternationalPaymentIdPaymentDetails',
  request: {
    params: z.object({ InternationalPaymentId: InternationalPaymentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200InternationalPaymentsInternationalPaymentIdPaymentDetailsReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const postInternationalScheduledPaymentConsentsRoute = createRoute({
  method: 'post',
  path: '/international-scheduled-payment-consents',
  tags: ['International Scheduled Payments'],
  summary: 'Create International Scheduled Payment Consents',
  operationId: 'CreateInternationalScheduledPaymentConsents',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-idempotency-key': XIdempotencyKeyParamsSchema,
      'x-jws-signature': XJwsSignatureParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/jose+jwe': { schema: OBWriteInternationalScheduledConsent5Schema },
        'application/json': { schema: OBWriteInternationalScheduledConsent5Schema },
        'application/json; charset=utf-8': { schema: OBWriteInternationalScheduledConsent5Schema },
      },
      required: true,
    },
  },
  responses: {
    201: _201InternationalScheduledPaymentConsentsCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getInternationalScheduledPaymentConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/international-scheduled-payment-consents/{ConsentId}',
  tags: ['International Scheduled Payments'],
  summary: 'Get International Scheduled Payment Consents',
  operationId: 'GetInternationalScheduledPaymentConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200InternationalScheduledPaymentConsentsConsentIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRoute = createRoute({
  method: 'get',
  path: '/international-scheduled-payment-consents/{ConsentId}/funds-confirmation',
  tags: ['International Scheduled Payments'],
  summary: 'Get International Scheduled Payment Consents Funds Confirmation',
  operationId: 'GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmation',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200InternationalScheduledPaymentConsentsConsentIdFundsConfirmationReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const postInternationalScheduledPaymentsRoute = createRoute({
  method: 'post',
  path: '/international-scheduled-payments',
  tags: ['International Scheduled Payments'],
  summary: 'Create International Scheduled Payments',
  operationId: 'CreateInternationalScheduledPayments',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-idempotency-key': XIdempotencyKeyParamsSchema,
      'x-jws-signature': XJwsSignatureParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/jose+jwe': { schema: OBWriteInternationalScheduled3Schema },
        'application/json': { schema: OBWriteInternationalScheduled3Schema },
        'application/json; charset=utf-8': { schema: OBWriteInternationalScheduled3Schema },
      },
      required: true,
    },
  },
  responses: {
    201: _201InternationalScheduledPaymentsCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const getInternationalScheduledPaymentsInternationalScheduledPaymentIdRoute = createRoute({
  method: 'get',
  path: '/international-scheduled-payments/{InternationalScheduledPaymentId}',
  tags: ['International Scheduled Payments'],
  summary: 'Get International Scheduled Payments',
  operationId: 'GetInternationalScheduledPaymentsInternationalScheduledPaymentId',
  request: {
    params: z.object({
      InternationalScheduledPaymentId: InternationalScheduledPaymentIdParamsSchema,
    }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200InternationalScheduledPaymentsInternationalScheduledPaymentIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRoute =
  createRoute({
    method: 'get',
    path: '/international-scheduled-payments/{InternationalScheduledPaymentId}/payment-details',
    tags: ['Payment Details'],
    summary: 'Get Payment Details',
    operationId: 'GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails',
    request: {
      params: z.object({
        InternationalScheduledPaymentId: InternationalScheduledPaymentIdParamsSchema,
      }),
      headers: z.object({
        'x-fapi-auth-date': XFapiAuthDateParamsSchema,
        'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
        'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
        Authorization: AuthorizationParamsSchema,
        'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      }),
    },
    responses: {
      200: _200InternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsReadResponse,
      400: _400ErrorResponse,
      401: _401ErrorResponse,
      403: _403ErrorResponse,
      404: _404ErrorResponse,
      405: _405ErrorResponse,
      406: _406ErrorResponse,
      429: _429ErrorResponse,
      500: _500ErrorResponse,
    },
    security: [{ TPPOAuth2Security: ['payments'] }],
  })

export const postInternationalStandingOrderConsentsRoute = createRoute({
  method: 'post',
  path: '/international-standing-order-consents',
  tags: ['International Standing Orders'],
  summary: 'Create International Standing Order Consents',
  operationId: 'CreateInternationalStandingOrderConsents',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-idempotency-key': XIdempotencyKeyParamsSchema,
      'x-jws-signature': XJwsSignatureParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/jose+jwe': { schema: OBWriteInternationalStandingOrderConsent6Schema },
        'application/json': { schema: OBWriteInternationalStandingOrderConsent6Schema },
        'application/json; charset=utf-8': {
          schema: OBWriteInternationalStandingOrderConsent6Schema,
        },
      },
      required: true,
    },
  },
  responses: {
    201: _201InternationalStandingOrderConsentsCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getInternationalStandingOrderConsentsConsentIdRoute = createRoute({
  method: 'get',
  path: '/international-standing-order-consents/{ConsentId}',
  tags: ['International Standing Orders'],
  summary: 'Get International Standing Order Consents',
  operationId: 'GetInternationalStandingOrderConsentsConsentId',
  request: {
    params: z.object({ ConsentId: ConsentIdParamsSchema }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200InternationalStandingOrderConsentsConsentIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const postInternationalStandingOrdersRoute = createRoute({
  method: 'post',
  path: '/international-standing-orders',
  tags: ['International Standing Orders'],
  summary: 'Create International Standing Orders',
  operationId: 'CreateInternationalStandingOrders',
  request: {
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-idempotency-key': XIdempotencyKeyParamsSchema,
      'x-jws-signature': XJwsSignatureParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
    body: {
      description: 'Default',
      content: {
        'application/jose+jwe': { schema: OBWriteInternationalStandingOrder4Schema },
        'application/json': { schema: OBWriteInternationalStandingOrder4Schema },
        'application/json; charset=utf-8': { schema: OBWriteInternationalStandingOrder4Schema },
      },
      required: true,
    },
  },
  responses: {
    201: _201InternationalStandingOrdersCreatedResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    415: _415ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ PSUOAuth2Security: ['payments'] }],
})

export const getInternationalStandingOrdersInternationalStandingOrderPaymentIdRoute = createRoute({
  method: 'get',
  path: '/international-standing-orders/{InternationalStandingOrderPaymentId}',
  tags: ['International Standing Orders'],
  summary: 'Get International Standing Orders',
  operationId: 'GetInternationalStandingOrdersInternationalStandingOrderPaymentId',
  request: {
    params: z.object({
      InternationalStandingOrderPaymentId: InternationalStandingOrderPaymentIdParamsSchema,
    }),
    headers: z.object({
      'x-fapi-auth-date': XFapiAuthDateParamsSchema,
      'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
      'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
      Authorization: AuthorizationParamsSchema,
      'x-customer-user-agent': XCustomerUserAgentParamsSchema,
    }),
  },
  responses: {
    200: _200InternationalStandingOrdersInternationalStandingOrderPaymentIdReadResponse,
    400: _400ErrorResponse,
    401: _401ErrorResponse,
    403: _403ErrorResponse,
    404: _404ErrorResponse,
    405: _405ErrorResponse,
    406: _406ErrorResponse,
    429: _429ErrorResponse,
    500: _500ErrorResponse,
  },
  security: [{ TPPOAuth2Security: ['payments'] }],
})

export const getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRoute =
  createRoute({
    method: 'get',
    path: '/international-standing-orders/{InternationalStandingOrderPaymentId}/payment-details',
    tags: ['Payment Details'],
    summary: 'Get Payment Details',
    operationId: 'GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails',
    request: {
      params: z.object({
        InternationalStandingOrderPaymentId: InternationalStandingOrderPaymentIdParamsSchema,
      }),
      headers: z.object({
        'x-fapi-auth-date': XFapiAuthDateParamsSchema,
        'x-fapi-customer-ip-address': XFapiCustomerIpAddressParamsSchema,
        'x-fapi-interaction-id': XFapiInteractionIdParamsSchema,
        Authorization: AuthorizationParamsSchema,
        'x-customer-user-agent': XCustomerUserAgentParamsSchema,
      }),
    },
    responses: {
      200: _200InternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsReadResponse,
      400: _400ErrorResponse,
      401: _401ErrorResponse,
      403: _403ErrorResponse,
      404: _404ErrorResponse,
      405: _405ErrorResponse,
      406: _406ErrorResponse,
      429: _429ErrorResponse,
      500: _500ErrorResponse,
    },
    security: [{ TPPOAuth2Security: ['payments'] }],
  })
